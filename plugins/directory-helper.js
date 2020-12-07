module.exports = function(env, callback){
    function splitPath(url){
        if(url[url.length-1] == '/'){ url = url.substr(0,url.length-1) }
        url = url.substring(0, url.lastIndexOf('/'))
        return url.length == 0 ? '/' : url
    }
    function leafPath(url){
        if(url[url.length-1] == '/'){ url = url.substr(0, url.length - 1) }
        return url.substring(url.lastIndexOf('/') + 1)
    }
    const normalizePath = (url) => env.config.baseUrl + url.replace(/\\/g, '/')
    const titleCase = (str) => str.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1))
    const template = env.config["directory-helper"].template
    const getDirectoryListingUrl = (value, base) => {
        const list = Object.values(value).filter((it) => 'metadata' in it && it.metadata.template == template)
        return (list.length == 0) ? null : normalizePath(list[0].filename)
    }
    const excludeName = (name) => name.endsWith('.styl') || name == 'meta.json'
    const exclude = (name, it, mjson) => {
        if(name in mjson){
            var mit = mjson[name]
            if(mit['directory-exclude'])
                return true
        }
        if('filepath' in it){
            if('metadata' in it){
                if(it.metadata.template == template || it.metadata['directory-exclude'])
                    return true
            }
        }
        if('directory-exclude' in it)
            return true
        return false
    }

    env.helpers.directory = {
        listing: function(page){
            const thisDirectory = splitPath(normalizePath(page.filepath.relative))
            let number = 0
            function parse(dir, baseUrl){
                var listing = []
                var mjson = ('meta.json' in dir) ? dir['meta.json'].metadata : {}
                for(name in dir){
                    if(excludeName(name))
                        continue
                    let value = dir[name]
                    if(exclude(name, value, mjson))
                        continue
                    let isFile = 'filepath' in value
                    let link = (isFile ? normalizePath(value.filename) : getDirectoryListingUrl(value, thisDirectory) || '').replace(/\/index.html$/, '/')
                    let fname = isFile? value.title : name
                    listing.push({ name: (name in mjson && 'title' in mjson[name]) ? mjson[name].title : fname, fname, isFile, link, listing: (isFile ? null : parse(value, link)), id: 'item' + (number++) })
                }
                return listing.sort((a, b) => ((!a.isFile && b.isFile) || (a.name < b.name)) ? -1 : ((a.isFile && !b.isFile) || (a.name > b.name)) ? 1 : 0)
            }
            return parse(page.parent, thisDirectory)
        },
        files: (directoryListing) => directoryListing.filter((it) => it.isFile),
        directories: (directoryListing) => directoryListing.filter((it) => !it.isFile),
        parentFolderName: (page) => titleCase(leafPath(splitPath(normalizePath(page.filename)))) || 'root',
        directoryListingUrl: (page) => ('metadata' in page && 'uplink' in page.metadata) ? page.metadata.uplink : getDirectoryListingUrl(page.parent, splitPath(normalizePath(page.filename)))
    }
    env.helpers.titleCase = titleCase
    callback()
}
