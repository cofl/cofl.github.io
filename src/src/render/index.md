---
title: metalsmith-markdown-site-template
scripts:
  - index.js
static-scripts:
  - main.js
  - leipzig.js
  - csv-tables.js
  - header-link.js
templates:
  header-top: >
    <a href="#top">top of page</a>
    <hr/>
  header-trail: >
    <hr/>
    This ToC was automagically generated.
---
# <a name="top" title="Top">metalsmith markdown site template</a>

This is a template site using Metalsmith and Markdown, based on <https://cofl.github.io>. Included batteries are:

- Prebuilt stylesheet (`md.css`)
- Several prebuilt scripts that should be useful for just about everyone.
- A demonstration `index.md` to show off the above two points.

## Glosses

Glossing is supported with [`/static/scripts/leipzig.js`](#todo), [Leipzig.js](https://bdchauvette.github.io/leipzig.js/examples/).

<div data-gloss>
  <p>Die Umgangssprache ist ein Teil des menschlichen Organismus und nicht weniger kompliziert als dieser.</p>
  <p>die umgangssprache ist ein teil des mensch-lich-en organismus und nicht wenig-er komplizeiert als dies-er</p>
  <p>DET.NOM.F.SG {colloquial language} be.3SG.PRS DET.NOM.M.SG part DET.GEN.M.SG human-ADJ-AGR.GEN.M.SG organism and NEG less-CMPR complicated CMPR DET-AGR.M.SG</p>
  <p>the {colloquial language} is a part {of the} human organism and not less complicated than it</p>
  <p>‘Colloquial language is a part of the human organism and is not less complicated than it.’ &mdash; Wittgenstein, <i>Tractatus Logico-Philosophicus</i>, 4.002</p>
</div>

To change the settings, add an [index.js](#todo) file like the one linked.

## CSV Tables

With the CSV-Tables script ([`/static/scripts/csv-tables.js`](#todo)), it becomes easy to include an external CSV file as a table in your page. To use it, just put:

    <table data-csv="http://some-url-to/your-file.csv"></table>
    
For example:

<table data-csv="example.csv"></table>

## Header-Links

The header-links script ([`/static/scripts/header-links.js`](#todo)) automatically generates a table of contents like the one on the left. By default, it inserts it into a `div` with the id `nav`, so __don't use that in your code__!!! Everything in it will be overridden.

If you want to add HTML before or after the generated ToC, throw a `template` in the YAML header for your markdown file (see [index.md](#todo)). The one for this page looks like this:

    templates:
      header-top: >
        <a href="#top">top of page</a>
        <hr/>
      header-trail: >
        <hr/>
        This ToC was automagically generated.

## Getting Started with Metalsmith and Github Pages: A Tutorial for Your Own Conlang Website

_This tutorial was originally uploaded to reddit._

Hello! Today, I'd like to walk you through the steps of how you can set up your own conlanging website akin to [mine](https://cofl.github.io) using Metalsmith for page generation and GitHub pages for hosting. This method is not perfect for everyone, but I'll try to cover everything in detail.

## 1. Prerequisites

There are a few things you'll need to get started. A lot of these are platform specific, but as I have experience with Windows, I'll cover what's required for that. Users of Linux and Mac should be able to still follow along and get the general idea of what you'll need, but Google is your friend.

- [A GitHub account](https://github.com). Can't use GitHub Pages without one.
- [Cygwin](https://www.cygwin.com/)
  This isn't *technically* required, but includes some great command-line tools and makes the rest of this much, much easier to use (basically, get it unless you're good enough to not have to follow this tutorial). Be sure to install `grep`, `bash`, and `make`, or whatever searching for those turns up that looks to be right. I'm pretty sure it adds itself to the PATH system setting, but just to check, open a command prompt/terminal and type `echo %PATH%` (Windows only). If you don't see something like `C:/cygwin/bin`, Google how to add a directory to your path; ([link for the lazy](https://www.google.com/search?q=how+to+add+a+directory+to+path+windows)).
- [NodeJS and NPM](http://blog.nodeknockout.com/post/65463770933/how-to-install-nodejs-and-npm)
  Follow that quick tutorial to install NodeJS and NPM. NodeJS is a program that runs javascript locally on your computer, and is what Metalsmith is built on. NPM is a dependency manager that you'll use to install Metalsmith and the packages you'll need to make it work. To check that they installed correctly, open a command prompt/terminal and type `node --version && npm --version`. It should print out two numbers, each on their own line.
- [Git](https://git-scm.com/)
  There are all sorts of programs for using Git, a version control system. I personally prefer the command-line interface, but Atlassian SourceTree and GitHub for Windows/GitHub for Mac work well.
- [Metalsmith](https://web.archive.org/web/20151103035947/http://www.metalsmith.io/) (the site is down as of this writing, so I've linked to the latest WebArchive copy).
  Metalsmith is a program/script that will generate static content from a set of source files. For this tutorial, we'll be using Markdown, which is what's used here on reddit for text formatting. That's a little bit of a lie: the Markdown available on reddit is very restricted compared to what you can do with the base version: there's no inline HTML, for example. With HTML, you could do great things like links to other parts of the same page, or advanced tables, or clean glossing with Leipzig.js.

But OP! That's so many things! How will I ever get started with it all? Good news, random citizen! You only need the first three (Cygwin, NodeJS, Git), as I've prepared a template site for you! It's very easy to get started from there:

1. Log in to GitHub.
2. Go to https://github.com/cofl/metalsmith-markdown-site-template and click "Fork" on the top right. This will create a copy of the template site in your account.
3. Go to the "Settings" page for the repository you just forked, and change the name to "your-username.github.io", replacing "your-username" with the name of your account on GitHub.
4. This step is for those who installed Git from the link I provided; others, sorry.
  Open a command prompt/terminal where you want to put the files for you website (try shift-right click in Windows Explorer) and enter `git clone https://github.com/your-username/your-username.github.io.git`, obviously, replacing "your-username" with your GitHub username. This will download the repository to your computer so you can edit the files.

There is a file called `Makefile` in the repository that provides a few commands:

- `make install`: Installs all NPM dependencies. This is necessary for everything else to work.
- `make clean-npm`: Removes all NPM dependencies.
- `make build`: Runs Metalsmith and generates your site. You can also run just `make`, and it'll do the same thing.
- `make clean`: Removes all generated files. This is run before every build automatically.
- `make show`: This is more convenience than anything. It starts a static file server in the repository folder, so after running it you can open any web browser and go to [`http://localhost/`](http://localhost/) to view your generated site. I recommend doing this before every time you upload the site.

Now, some more things:

The `src` folder is where all the things for you site go. Actually, they go in `src/src`, for things that will be rendered when Metalsmith runs, and `src/static`, for things you don't want Metalsmith to touch, only copy. Both of these support having sub-folders.

In the `src/src` folder is where you should put all the Markdown files (.md) that will be the pages of your site. These will be rendered into HTML and saved with a .html extension. For example, `src/src/index.md` would be rendered to `index.html`, and `src/src/some-folder/some-file.md` would be rendered to `some-folder/some-file.html`. Check out the example file for more details.

Lastly, how to save. Git is what is known as a version control system. Basically, it keeps track of all the changes saved across all the copies of the repository. To upload your site to GitHub, open a command prompt/terminal, build the repository with `make`, and enter:

    git add --all

This checks for all the changes made and prepares them to be saved. Then enter:

    git commit -m "some commit message -- you can change this to whatever you want"

This commits (saves) the changes to the repository. Lastly, enter:

    git push origin master

It will ask you for your GitHub username and password. This step uploads the changes to GitHub pages. If it gives you an error about being out of sync or something like that, try backing up your site's files (a precaution) and entering `git pull`, then adding your files back and starting again with `git add --all`.

That's it, you're live! To view your new site, go to `http://your-username.github.io`.