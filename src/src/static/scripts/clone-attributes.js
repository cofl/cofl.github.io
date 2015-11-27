window.registerLoadScript(function(){
  function cloneAttributes(src, dest, rem){
    var old_attrs = src.attributes;
    var new_attrs = dest.attributes;
    for(var i = 0; i < old_attrs.length; i++){
      var name = old_attrs[i].nodeName;
      if(dest.hasAttribute(name)){
        if(name == "class"){// copy classes
          var old_classes = old_attrs[i].value.split(/\s+/g);
          var new_classes = dest.getAttribute("class").split(/\s+/g);
          var append = dest.getAttribute("class");
          for(var i = 0; i < old_classes.length; i++)
            if(new_classes.indexOf(old_classes[i]) == -1)
              append += " " + old_classes[i];
          dest.setAttribute("class", append);
        } else if(name == "style"){
          var cur_style = dest.getAttribute("style");
          if(cur_style.charAt(cur_style.length-1)!=";") cur_style += ";";
          dest.setAttribute("style", cur_style + old_attrs[i].value);
        }
      } else {
        // copy attribute if it doesn't exist
        dest.setAttribute(name, old_attrs[i].value);
      }
    }
    if(rem)
      rem.parentNode.removeChild(rem);
  }
  // clone clones to sibling
  var nodes = document.getElementsByTagName("clone");
  while(nodes.length != 0){// live list, get first until they're all gone.
    var node = nodes[0];
    var rem = node;
    var next = node.nextElementSibling;
    if(next == null && node.parentNode.nodeName.toLowerCase()=="p"){
      next = node.parentNode.nextElementSibling;
      rem = rem.parentNode;
    }
    if(next != null && node.hasAttributes())
      cloneAttributes(node, next, rem);
  }
  // clone-p clones to parent
  nodes = document.getElementsByTagName("clone-p");
  while(nodes.length != 0){
    var node = nodes[0];
    if(node.hasAttributes())
      cloneAttributes(node, node.parentNode, node);
  }
  // changes the first <td> of <table> with class "row-heders" to <th>
  var tables = document.getElementsByTagName("table");
  for(var i = 0; i < tables.length; i++){
    var rows = tables[i].getElementsByTagName("tr");
    for(var i = 0, row = rows[i]; i < rows.length; row = rows[++i]){
      if(tables[i].hasAttribute("class")
         && tables[i].getAttribute("class").split(/\s+/g).indexOf("row-headers") != -1
         && row.firstChild.nodeName.toLowerCase() == "td"){
        var node = row.firstElementChild;
        var th = document.createElement("th");
        th.innerHTML = node.innerHTML;
        row.insertBefore(th, node);
        row.removeChild(node);
      }
      var tds = row.children;
      while(tds[tds.length-1].innerHTML == "")
        tds[tds.length-1].parentNode.removeChild(tds[tds.length-1]);
    }
  }
});
