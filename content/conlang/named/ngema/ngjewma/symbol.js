function submit(){document.getElementById('ot').setAttribute("src","data:image/svg+xml,"+parse(document.getElementById('in').value,document.getElementById("ch").checked));}
function parse(str, text){
  function parseChar(rom){
    var single = {
      "p":"M2,33.5a13,6.5 0 1,0 26,0a13,6.5 0 1,0 -26,0M2 10V22H30",
      "t":"M2,33.5a13,6.5 0 1,0 26,0a13,6.5 0 1,0 -26,0M0 12H28V24",
      "k":"M2,33.5a13,6.5 0 1,0 26,0a13,6.5 0 1,0 -26,0M30 12H2V22H30",
      "w":"M2,33.5a13,6.5 0 1,0 26,0a13,6.5 0 1,0 -26,0M2 10V21.5H24M6 13.5H28V25",
      "y":"M2,33.5a13,6.5 0 1,0 26,0a13,6.5 0 1,0 -26,0M0 22H30M10 10V24M20 10V24",
      "r":"M2,33.5a13,6.5 0 1,0 26,0a13,6.5 0 1,0 -26,0M0 23C3 23,11 16,14 10H28V23M30 17H10",
      "f":"M2,33.5a13,6.5 0 1,0 26,0a13,6.5 0 1,0 -26,0M2 10V22H30M15 24V12",
      "s":"M2,33.5a13,6.5 0 1,0 26,0a13,6.5 0 1,0 -26,0M0 12H28V24M15 10V22",
      "q":"M4 32C6 29,12 21,12 15M10 21H24C24 29,23 31,22 33",
      "n":"M6 34V20H24V34M6 28H24"
    }, diac = {
      "w":"M2 7C4 7,15 2,15 0C15 2,26 7,28 7",
      "y":"M0 6H30M10 8V0M20 8V0",
      "r":"M0 7C3 7,11 4,14 2H28V7",
      "WEAK":"M31 3Q32 10,34 12"
    }, cons = {
      "p":function(vow){return vow.c+"M2 10V"+(38-vow.v)+"H"+(30-vow.h);},
      "b":function(vow){return cons["p"](vow)+diac["WEAK"];},
      "f":function(vow){return cons["p"](vow)+"M"+(15-(vow.h/2))+" "+(40-vow.v)+"V"+(18-(vow.v/2));},
      "m":function(vow){return cons["p"](vow)+"M0 "+(25-(vow.v/2))+"H"+(22-(vow.h/1.5));},
      "ɱ":function(vow){return cons["m"](vow)+diac["WEAK"];},
      "t":function(vow){return vow.c+"M0 12H"+(28-vow.h)+"V"+(40-vow.v);},
      "d":function(vow){return cons["t"](vow)+diac["WEAK"];},
      "s":function(vow){return cons["t"](vow)+"M"+(15-(vow.h/2))+" 10V"+(32-(vow.v/2));},
      "z":function(vow){return cons["s"](vow)+diac["WEAK"];},
      "n":function(vow){return cons["t"](vow)+"M8 "+(25-(vow.v/2))+"H"+(30-vow.h);},
      "ɲ":function(vow){return cons["n"](vow)+diac["WEAK"];},
      "k":function(vow){return vow.c+"M"+(30-vow.h)+" 12 H2V"+(38-vow.v)+"H"+(30-vow.h);},
      "g":function(vow){return cons["k"](vow)+diac["WEAK"];},
      "ɣ":function(vow){return cons["k"](vow)+"M"+(15-(vow.h/2))+" 10V"+(40-vow.v);},
      "ŋ":function(vow){return cons["k"](vow)+"M0 "+(25-(vow.v/2))+"H"+(22-(vow.h/1.5));},
      "ɳ":function(vow){return cons["ŋ"](vow)+diac["WEAK"];},
      "-":function(v){return v.c+"M2 "+(25-(v.v/2))+"a"+(13-(v.h/2))+","+(13-(v.v/2))+" 0 1,0 "+(2*(13-(v.h/2)))+",0"+"a"+(13-(v.h/2))+","+(13-(v.v/2))+" 0 1,0 "+(-2*(13-(v.h/2)))+",0";},
      "h":function(vow){return cons["ɣ"](vow)+"M"+(28-vow.h)+" 10V"+(40-vow.v);},
      "r":function(v){return v.c+"M0.5 "+(38-v.v)+"C"+(5-v.h/3)+" "+(40-v.v)+","+(13-v.h/3)+" "+(16-v.v/3)+","+(16-v.h/3)+" 12H"+(28-v.h)+"V"+(40-v.v)+"M"+(30-v.h)+" "+(35-v.v)+"H"+(7-v.h/3);},
      "y":function(v){return v.c+"M0 "+(38-v.v)+"H"+(30-v.h)+"M"+((30-v.h)/3)+" "+(40-v.v)+"V10M"+(2*(30-v.h)/3)+" "+(40-v.v)+"V10";},
      "w":function(v){return v.c+"M2 10V"+(35-v.v)+"H"+(20-v.h/2)+"M"+(28-v.h)+" "+(40-v.v)+"V15H"+(10-v.h/2);}
    }, vows = {
      "i": {h:0,v:6,c:"M0 38H30"},
      "u": {h:6,v:0,c:"M28 10V40"},
      "a": {h:6,v:6,c:"M0 38H28V10"},
      "o": {h:12,v:0,c:"M28 10V40M30 25H22"},
      "e": {h:0,v:10,c:"M0 38H30M15 40V32"},
      "ɑ": {h:12,v:6,c:"M0 38H28V10M22 10V40"},
      "ɒ": {h:8,v:0,c:"M28 10V40M30 20H22M30 30H22"}
    }, lvow = {
      "i":{h:0,v:12,c:"M0 38H30M0 32H30"},
      "u":{h:12,v:0,c:"M28 10V40M22 10V40"},
      "a":{h:8,v:12,c:"M0 38H28V10M0 32H30"},
      "o":{h:14,v:0,c:"M28 10V40M30 25H18M22 10V40"},
      "e":{h:0,v:14,c:"M0 38H30M15 40V28M0 32H30"},
      "ɑ":{h:12,v:12,c:"M0 38H28V10M22 10V40M0 32H30"},
      "ɒ":{h:14,v:0,c:"M28 10V40M30 20H18M30 30H18M22 10V40"}
    }, out = "",longVowel = false;
    function getVowel(){if(longVowel) return lvow[rom.charAt(rom.length-1)]; else return vows[rom.charAt(rom.length-1)];}
    if(rom.charAt(rom.length-1)=="-" || rom.charAt(rom.length-1)==rom.charAt(rom.length-2)){
      longVowel = true;
      rom = rom.substr(0,rom.length-1);
    }
    if(rom.length==1){if(single.hasOwnProperty(rom))return single[rom];else return cons["-"](getVowel());}
    return ((rom.length==3)?diac[rom.charAt(1)]:"") + cons[rom.charAt(0)](getVowel());
  }

  str = str.split(" ");
  var c = 1, svg='<svg width="'+4*((str.length+1)*35)+'" height="'+4*(text?70:50)+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"  fill="none" stroke="black" stroke-width="4"><g transform="scale(4)">';
  svg+='<path d="'+parseChar(str[0])+'"/>';
  for(;c<str.length;c++) svg+='<path transform="translate('+(c*35)+')" d="'+parseChar(str[c])+'"/>';
  if(text){
    for(c=0;c<str.length;c++){
      if(str[c]=="q"){if((c==str.length-1)||(str[c+1].charAt(0)=="-")||(str[c+1].charAt(0)=="r")||(str[c+1].charAt(0)=="w")||(str[c+1].charAt(0)=="y"))str[c]="n";else str[c]=str[c+1].charAt(0);}
      if(str[c].charAt(0)=="-")str[c]=str[c].substr(1);
      if(c==0) svg+='<text x="15" y="60">'+str[c].replace(/ɲ/g,"nj").replace(/ɣ/g,"gj").replace(/ɱ/g,"mj").replace(/ŋ/g,"ng").replace(/ɳ/g,"ngj").replace(/ɑ/g,"à").replace(/ɒ/g,"ò").replace("-",str[c].charAt(str[c].length-2))+'</text>';
        else svg+='<text x="15" y="60" transform="translate('+c*35+')">'+str[c].replace(/ɲ/g,"nj").replace(/ɣ/g,"gj").replace(/ɱ/g,"mj").replace(/ŋ/g,"ng").replace(/ɳ/g,"ngj").replace(/ɑ/g,"à").replace(/ɒ/g,"ò").replace("-",str[c].charAt(str[c].length-2))+'</text>';
    }
    svg+="<style><![CDATA[text{text-anchor:middle;stroke-width:0.4;fill:black;}]]></style>"
  }
  return svg+"</g></svg>";
}
if(location.hash.length>1){
  document.getElementById('ot').setAttribute("src","data:image/svg+xml,"+parse(location.hash.substr(1),document.getElementById("ch").checked));
} else {
  document.getElementById('ot').setAttribute("src","data:image/svg+xml,"+parse("a ɳe w ma di tu",document.getElementById("ch").checked));
}
