var _0x4c0a=["textnotification","html","new_email","responseText","watch_for_my_email","https://api.emailfake.com/api/","value","log","status","getElementsByTagName","split","close","meanEmail","cookies","readyState","https://emailfake.com/","https://emailfake.com/${newmsg.clickgo}","browserAction","${nuser}@${ndom}","get","${channel16} -> ${newchn}","open","dont_watch","tddata","https://api.emailfake.com/api/?pnc=${theUrl}","${result}","setBadgeText","onclick","send","connect_io","This is Punycode domain watch ${watch_ch}","addListener","createElement","test","innerHTML","div","getBadgeText","onChanged","GET","https://api.emailfake.com","connect","toLowerCase","emit","parse"];!function(e,x){!function(x){for(;--x;)e.push(e.shift())}(++x)}(_0x4c0a,204);var _0x3e8d=function(e,x){return _0x4c0a[e-=0]},textnotification=0;function httpGetAsync(e,x){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n[_0x3e8d("0x18")]){var e=JSON[_0x3e8d("0xf")](n[_0x3e8d("0x13")]);console[_0x3e8d("0x17")](e)}},n.open("GET",e,!0),n[_0x3e8d("0x0")](null)}function httpGetPun(e,x){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n[_0x3e8d("0x1e")]&&200==n[_0x3e8d("0x18")]){var x=n[_0x3e8d("0x13")];socket.emit(_0x3e8d("0x14"),x.toLowerCase()),channel16=e}},n.open(_0x3e8d("0xa"),_0x3e8d("0x28"),!0),n[_0x3e8d("0x0")](null)}chrome[_0x3e8d("0x1d")][_0x3e8d("0x23")]({url:_0x3e8d("0x1f"),name:"surl"},(function(e){e?(n=e[_0x3e8d("0x16")].split("/",2),ndom=n[0],nuser=n[1]):httpGetAsync(_0x3e8d("0x15"))}));var socket=io[_0x3e8d("0xc")](_0x3e8d("0xb"));socket.on(_0x3e8d("0x12"),(function(e){chrome[_0x3e8d("0x21")][_0x3e8d("0x8")]({},(function(x){""==x?chrome[_0x3e8d("0x21")][_0x3e8d("0x2a")]({text:"1"}):x>=1&&(x++,chrome[_0x3e8d("0x21")][_0x3e8d("0x2a")]({text:_0x3e8d("0x29")}));var n=JSON[_0x3e8d("0xf")](e),t=document[_0x3e8d("0x4")](_0x3e8d("0x11"));if(t[_0x3e8d("0x6")]=n[_0x3e8d("0x27")],1==textnotification){var o=new Notification(t[_0x3e8d("0x19")](_0x3e8d("0x7"))[0][_0x3e8d("0x6")],{type:"basic",title:_0x3e8d("0x1c"),icon:"favicon.png",body:t[_0x3e8d("0x19")](_0x3e8d("0x7"))[1][_0x3e8d("0x6")]});o[_0x3e8d("0x2b")]=function(){window[_0x3e8d("0x25")](_0x3e8d("0x20")),o[_0x3e8d("0x1b")](),chrome.browserAction[_0x3e8d("0x2a")]({text:""})}}}))}));var channel16="";function connectorr(){chrome[_0x3e8d("0x1d")][_0x3e8d("0x23")]({url:_0x3e8d("0x1f"),name:"surl"},(function(e){if(e){n=e[_0x3e8d("0x16")][_0x3e8d("0x1a")]("/",2),ndom=n[0],nuser=n[1];var x=_0x3e8d("0x22");if(x!==channel16){console[_0x3e8d("0x17")](_0x3e8d("0x1")),console[_0x3e8d("0x17")](_0x3e8d("0x24")),socket[_0x3e8d("0xe")](_0x3e8d("0x26"),channel16[_0x3e8d("0xd")]());var t=x;/[^\u0000-\u007f]/[_0x3e8d("0x5")](t)?(console.log(_0x3e8d("0x2")),httpGetPun(t)):(socket[_0x3e8d("0xe")]("watch_for_my_email",t[_0x3e8d("0xd")]()),channel16=x)}}})),chrome.cookies[_0x3e8d("0x23")]({url:_0x3e8d("0x1f"),name:_0x3e8d("0x10")},(function(e){e&&(textnotification=e[_0x3e8d("0x16")])}))}chrome.cookies[_0x3e8d("0x9")][_0x3e8d("0x3")]((function(e){connectorr()})),socket.on("reconnect",(function(e){channel16="",connectorr()}));