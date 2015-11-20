// https://github.com/yanatan16/nanoajax
!function(e,t){function n(e){return e&&t.XDomainRequest&&!/MSIE 1/.test(navigator.userAgent)?new XDomainRequest:t.XMLHttpRequest?new XMLHttpRequest:void 0}function o(e,t,n){e[t]=e[t]||n}var r=["responseType","withCredentials","timeout","onprogress"];e.ajax=function(e,t){function u(e,n){return function(){d||t(c.status||e,c.response||c.responseText||n,c),d=!0}}var a=e.headers||{},s=e.body,i=e.method||(s?"POST":"GET"),d=!1,c=n(e.cors);c.open(i,e.url,!0);var l=c.onload=u(200);c.onreadystatechange=function(){4===c.readyState&&l()},c.onerror=u(null,"Error"),c.ontimeout=u(null,"Timeout"),c.onabort=u(null,"Abort"),s&&(o(a,"X-Requested-With","XMLHttpRequest"),o(a,"Content-Type","application/x-www-form-urlencoded"));for(var p,f=0,v=r.length;v>f;f++)p=r[f],void 0!==e[p]&&(c[p]=e[p]);for(var p in a)c.setRequestHeader(p,a[p]);return c.send(s),c},t.nanoajax=e}({},function(){return this}());

/* Copyright 2012-2013 Daniel Tillin full license details at http://code.google.com/p/csv-to-array/#License */String.prototype.csvToArray=function(e){var t={fSep:",",rSep:"\r\n",quot:'"',head:false,trim:false};if(e){for(var n in t){if(!e[n])e[n]=t[n]}}else{e=t}var r=[[""]];for(var i=f=p=q=0;p<this.length;p++){switch(c=this.charAt(p)){case e.quot:if(q&&this.charAt(p+1)==e.quot){r[i][f]+=e.quot;++p}else{q^=1}break;case e.fSep:if(!q){if(e.trim){r[i][f]=r[i][f].replace(/^\s\s*/,"").replace(/\s\s*$/,"")}r[i][++f]=""}else{r[i][f]+=c}break;case e.rSep.charAt(0):if(!q&&(!e.rSep.charAt(1)||e.rSep.charAt(1)&&e.rSep.charAt(1)==this.charAt(p+1))){if(e.trim){r[i][f]=r[i][f].replace(/^\s\s*/,"").replace(/\s\s*$/,"")}r[++i]=[""];r[i][f=0]="";if(e.rSep.charAt(1)){++p}}else{r[i][f]+=c}break;default:r[i][f]+=c}}if(e.head){r.shift()}if(r[r.length-1].length<r[0].length){r.pop()}return r}

//finally, my own code!
window.registerLoadScript(function(){
  function Callback(element){
    var elem = element;
    this.callback = function(code, text){
      if(code != 200){
        var p = document.createElement("p");
        p.innerHTML = "<strong>Error: could not load table source</strong>";
        elem.outerHTML = p.outerHTML;
      } else {
        var table = document.createElement("table"),
            content = text.trim().csvToArray({rSep:'\n'});
        for(var row in content){
          var tr = document.createElement("tr");
          for(var cell in content[row]){
            var td = document.createElement(row==0?"th":"td");
            td.innerHTML = content[row][cell];
            tr.appendChild(td);
          }
          if(row==0){
            var h = document.createElement("thead");
            h.appendChild(tr);
            table.appendChild(h);
          } else table.appendChild(tr);
        }
        elem.outerHTML = table.outerHTML;
      }
    };
  }
  var elements = document.getElementsByTagName("table");
  for(var i=0;i<elements.length;i++){
    if(elements[i].hasAttribute("data-csv")){
      nanoajax.ajax({url: elements[i].getAttribute("data-csv")}, new Callback(elements[i]).callback);
    }
  }
});