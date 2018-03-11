const { JSDOM } = require("jsdom")

module.exports = function(env, callback){
    env.helpers.tocGenerator = {
        tocList: function(page){
            const { document } = (new JSDOM(page.html)).window
            let stack = [[]]
            let currentLevel = 1
            let node = document.getElementById("toc-header")
            if(node){
                node.classList = "toc-header"
                node.removeAttribute("id")
                stack[stack.length - 1].push(node.outerHTML)
                stack[stack.length - 1].push("<hr>")
            }
            document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(element => {
                if(!element.hasAttribute("id"))
                    return
                const level = parseInt(element.tagName.charAt(1))
                while(level > currentLevel){
                    stack.push([])
                    currentLevel += 1
                }
                while(level < currentLevel){
                    let it = stack.pop()
                    stack[stack.length - 1].push(it)
                    currentLevel -= 1
                }
                stack[stack.length - 1].push({
                    link: "#" + element.getAttribute("id"),
                    text: element.textContent.trim()
                })
            })
            while(stack.length > 1){
                let it = stack.pop()
                stack[stack.length - 1].push(it)
            }
            node = document.getElementById("toc-footer")
            if(node){
                stack[stack.length - 1].push("<hr>")
                node.classList = "toc-footer"
                node.removeAttribute("id")
                stack[stack.length - 1].push(node.outerHTML)
            }
            return stack.pop()
        },
        directory: function listing(list, level = 1) {
            let stack = [];
            list.filter(it => !it.isFile).forEach(it => {
                stack.push({
                    link: "#" + it.id,
                    text: env.helpers.titleCase(it.name)
                });
                if(level <= 4 && it.listing != null){
                    let i = listing(it.listing, level + 1);
                    if(i.length > 0)
                        stack.push(i);
                }
            });
            return stack;
        }
    }
    callback()
}