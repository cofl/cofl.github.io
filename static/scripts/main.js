/*from stack overflow-->*/if(!String.prototype.format){String.prototype.format=function(){var a = arguments;return this.replace(/{(\d+)}/g,function(m,n){return (typeof a[n] != 'undefined')?a[n]:m;});};}
/*from MDN-->*/if(!Array.prototype.map)Array.prototype.map=function(r,n){var t,e,o;if(null==this)throw new TypeError(" this is null or not defined");var i=Object(this),a=i.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(t=n),e=new Array(a),o=0;a>o;){var f,l;o in i&&(f=i[o],l=r.call(t,f,o,i),e[o]=l),o++}return e};

window.onloadscripts = [];

window.onload = function(){
  for(var x in window.onloadscripts){
    window.onloadscripts[x]();
  }
};

/**
 * Register a function to run once the window's been loaded.
 *
 * @param func A function to call.
 */
window.registerLoadScript = function(func){
  onloadscripts.push(func);
};

/**
 * Register CSS.
 *
 * @param remote Is this a link to an external stylesheet?
 * @param css The link or CSS to insert.
 */
window.registerCSS = function(remote, css){
  if(remote){
    var style = document.createElement("link");
    style.setAttribute("rel","stylesheet");
    style.setAttribute("type","text/css");
    style.setAttribute("href",css);
    document.head.appendChild(style);
  } else {
    var style = document.createElement("style");
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
  }
};