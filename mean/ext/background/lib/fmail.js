var _0x12a9=["connect","favicon.png","${nuser}@${ndom}","dont_watch","${result}","getBadgeText","innerHTML","createElement","div","onChanged","send","basic","getElementsByTagName","test","https://emailfake.com/${newmsg.clickgo}","value","https://api.emailfake.com/api/","tddata","https://emailfake.com/","parse","onreadystatechange","reconnect","open","surl","cookies","watch_for_my_email","readyState","This is Punycode domain watch ${watch_ch}","setBadgeText","status","split","browserAction","${channel16} -> ${newchn}","responseText","onclick","https://api.emailfake.com","emit","GET","addListener","toLowerCase","get","log","html"];!function(x,e){!function(e){for(;--e;)x.push(x.shift())}(++e)}(_0x12a9,144);var _0x3753=function(x,e){return _0x12a9[x-=0]},textnotification=0;function httpGetAsync(x,e){var t=new XMLHttpRequest;t[_0x3753("0x5")]=function(){if(4==t[_0x3753("0xb")]&&200==t[_0x3753("0xe")]){var x=JSON[_0x3753("0x4")](t[_0x3753("0x12")]);console[_0x3753("0x1a")](x)}},t[_0x3753("0x7")](_0x3753("0x16"),x,!0),t[_0x3753("0x26")](null)}function httpGetPun(x,e){var t=new XMLHttpRequest;t[_0x3753("0x5")]=function(){if(4==t[_0x3753("0xb")]&&200==t.status){var e=t[_0x3753("0x12")];socket.emit(_0x3753("0xa"),e[_0x3753("0x18")]()),channel16=x}},t.open(_0x3753("0x16"),"https://api.emailfake.com/api/?pnc=${theUrl}",!0),t[_0x3753("0x26")](null)}chrome[_0x3753("0x9")][_0x3753("0x19")]({url:_0x3753("0x3"),name:_0x3753("0x8")},(function(x){x?(n=x[_0x3753("0x0")][_0x3753("0xf")]("/",2),ndom=n[0],nuser=n[1]):httpGetAsync(_0x3753("0x1"))}));var socket=io[_0x3753("0x1c")](_0x3753("0x14"));socket.on("new_email",(function(x){chrome[_0x3753("0x10")][_0x3753("0x21")]({},(function(e){""==e?chrome[_0x3753("0x10")][_0x3753("0xd")]({text:"1"}):e>=1&&(e++,chrome[_0x3753("0x10")].setBadgeText({text:_0x3753("0x20")}));var t=JSON.parse(x),n=document[_0x3753("0x23")](_0x3753("0x1b"));if(n.innerHTML=t[_0x3753("0x2")],1==textnotification){var o=new Notification(n.getElementsByTagName(_0x3753("0x24"))[0][_0x3753("0x22")],{type:_0x3753("0x27"),title:"meanEmail",icon:_0x3753("0x1d"),body:n[_0x3753("0x28")]("div")[1][_0x3753("0x22")]});o[_0x3753("0x13")]=function(){window.open(_0x3753("0x2a")),o.close(),chrome[_0x3753("0x10")].setBadgeText({text:""})}}}))}));var channel16="";function connectorr(){chrome[_0x3753("0x9")].get({url:_0x3753("0x3"),name:"surl"},(function(x){if(x){n=x[_0x3753("0x0")][_0x3753("0xf")]("/",2),ndom=n[0],nuser=n[1];var e=_0x3753("0x1e");if(e!==channel16){console[_0x3753("0x1a")]("connect_io"),console.log(_0x3753("0x11")),socket.emit(_0x3753("0x1f"),channel16.toLowerCase());var t=e;/[^\u0000-\u007f]/[_0x3753("0x29")](t)?(console.log(_0x3753("0xc")),httpGetPun(t)):(socket[_0x3753("0x15")](_0x3753("0xa"),t[_0x3753("0x18")]()),channel16=e)}}})),chrome[_0x3753("0x9")][_0x3753("0x19")]({url:"https://emailfake.com/",name:"textnotification"},(function(x){x&&(textnotification=x[_0x3753("0x0")])}))}chrome[_0x3753("0x9")][_0x3753("0x25")][_0x3753("0x17")]((function(x){connectorr()})),socket.on(_0x3753("0x6"),(function(x){channel16="",connectorr()}));