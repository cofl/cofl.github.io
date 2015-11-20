window.registerCSS(true, "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"); //font-awesome
window.registerCSS(false, ".link-icon{visibility:hidden;font-size:13pt} *:hover>.link-icon{visibility:visible}");
window.registerLoadScript(function(){
  var h = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
  var nav = document.getElementById("nav");
  if(nav == null){
    nav = document.createElement("div");
    nav.setAttribute("id", "nav");
    document.body.appendChild(nav);
  }
  if(nav.children.length==0){
    nav.innerHTML = '<div style="padding:0;margin:10px 0"><span id="tocm">TOC</span></div>';
  }
  nav = nav.children[0];
  if(null!=document.getElementById("header-top")){
    var n = document.createElement("div");
    n.innerHTML = document.getElementById("header-top").innerHTML;
    nav.appendChild(n);
  }
  var level=false;
  for(var i=0,elem=h[i];i<h.length;elem=h[++i]){
    if(elem.innerHTML.indexOf("<a")==-1){
      var lvl = parseInt(elem.tagName.charAt(1)); //h(\d)
      if(level===false)
        level=lvl;//first-time initialising
      if(lvl>level){
        while (lvl > level) {
          // go down through spans until we're at the right level
          nav.appendChild(document.createElement("span"));
          nav = nav.children[nav.children.length-1];//last
          level = lvl;
        }
      } else while(lvl < level){
        // retreat back through the spans until we're at the right level
        nav = nav.parentNode;
        level--;
      }
      //make and add link to nav
      var tlem = document.createElement("a");
      var link = elem.innerHTML.replace(/ /g,"_").toLowerCase();//only do this once
      tlem.setAttribute("href","#"+link);
      tlem.innerHTML = elem.innerHTML;
      nav.appendChild(tlem);
      // update header in page.
      elem.innerHTML = '<a name="{1}"></a>{0} <a href="#{1}" class="fa fa-link link-icon"></a>'.format(elem.innerHTML, link);
    }
  }
  if(null!=document.getElementById("header-trail")){
    var n = document.createElement("div");
    n.innerHTML = document.getElementById("header-trail").innerHTML;
    document.getElementById("nav").appendChild(n);
  }
});