var _0xf1b8=["onclick","new_email","connect","textnotification","watch_for_my_email","readyState","addListener","test","log","https://api.emailfake.com","surl","value","get","https://emailfake.com/","status","browserAction","onreadystatechange","reconnect","getElementsByTagName","innerHTML","split","createElement","cookies","setBadgeText","toLowerCase","GET","tddata","send","responseText","parse","html","basic","div","close","dont_watch","emit","https://api.emailfake.com/api/","${channel16} -> ${newchn}","${result}"];!function(a,x){!function(x){for(;--x;)a.push(a.shift())}(++x)}(_0xf1b8,339);var _0x37ad=function(a,x){return _0xf1b8[a-=0]},textnotification=0;function httpGetAsync(a,x){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n[_0x37ad("0x11")]&&200==n[_0x37ad("0x1a")]){var a=JSON[_0x37ad("0x2")](n[_0x37ad("0x1")]);console[_0x37ad("0x14")](a)}},n.open("GET",a,!0),n.send(null)}function httpGetPun(a,x){var n=new XMLHttpRequest;n[_0x37ad("0x1c")]=function(){if(4==n[_0x37ad("0x11")]&&200==n[_0x37ad("0x1a")]){var x=n[_0x37ad("0x1")];socket[_0x37ad("0x8")](_0x37ad("0x10"),x[_0x37ad("0x24")]()),channel16=a}},n.open(_0x37ad("0x25"),"https://api.emailfake.com/api/?pnc=${theUrl}",!0),n[_0x37ad("0x0")](null)}chrome[_0x37ad("0x22")][_0x37ad("0x18")]({url:_0x37ad("0x19"),name:_0x37ad("0x16")},(function(a){a?(n=a[_0x37ad("0x17")][_0x37ad("0x20")]("/",2),ndom=n[0],nuser=n[1]):httpGetAsync(_0x37ad("0x9"))}));var socket=io[_0x37ad("0xe")](_0x37ad("0x15"));socket.on(_0x37ad("0xd"),(function(a){chrome[_0x37ad("0x1b")].getBadgeText({},(function(x){""==x?chrome[_0x37ad("0x1b")][_0x37ad("0x23")]({text:"1"}):x>=1&&(x++,chrome[_0x37ad("0x1b")][_0x37ad("0x23")]({text:_0x37ad("0xb")}));var n=JSON.parse(a),e=document[_0x37ad("0x21")](_0x37ad("0x3"));if(e[_0x37ad("0x1f")]=n[_0x37ad("0x26")],1==textnotification){var t=new Notification(e[_0x37ad("0x1e")](_0x37ad("0x5"))[0][_0x37ad("0x1f")],{type:_0x37ad("0x4"),title:"meanEmail",icon:"favicon.png",body:e[_0x37ad("0x1e")](_0x37ad("0x5"))[1].innerHTML});t[_0x37ad("0xc")]=function(){window.open("https://emailfake.com/${newmsg.clickgo}"),t[_0x37ad("0x6")](),chrome[_0x37ad("0x1b")][_0x37ad("0x23")]({text:""})}}}))}));var channel16="";function connectorr(){chrome[_0x37ad("0x22")][_0x37ad("0x18")]({url:_0x37ad("0x19"),name:_0x37ad("0x16")},(function(a){if(a){n=a.value[_0x37ad("0x20")]("/",2),ndom=n[0],nuser=n[1];if("${nuser}@${ndom}"!==channel16){console[_0x37ad("0x14")]("connect_io"),console[_0x37ad("0x14")](_0x37ad("0xa")),socket[_0x37ad("0x8")](_0x37ad("0x7"),channel16[_0x37ad("0x24")]());var x="${nuser}@${ndom}";/[^\u0000-\u007f]/[_0x37ad("0x13")](x)?(console[_0x37ad("0x14")]("This is Punycode domain watch ${watch_ch}"),httpGetPun(x)):(socket[_0x37ad("0x8")]("watch_for_my_email",x[_0x37ad("0x24")]()),channel16="${nuser}@${ndom}")}}})),chrome[_0x37ad("0x22")].get({url:_0x37ad("0x19"),name:_0x37ad("0xf")},(function(a){a&&(textnotification=a[_0x37ad("0x17")])}))}chrome[_0x37ad("0x22")].onChanged[_0x37ad("0x12")]((function(a){connectorr()})),socket.on(_0x37ad("0x1d"),(function(a){channel16="",connectorr()}));