var _0x573f=["prototype","zWorkerInitialized","now","newTask","flush","append","message","get","importScripts","data","type","output","crcOutput","options","crcType","crc","NOOP","performance","table","scripts","bind"];!function(c,t){!function(t){for(;--t;)c.push(c.shift())}(++t)}(_0x573f,481);var _0x2fc8=function(c,t){return _0x573f[c-=0]};!function(c){"use strict";if(c[_0x2fc8("0x3")])throw new Error("z-worker.js should be run only once");c[_0x2fc8("0x3")]=!0,addEventListener(_0x2fc8("0x8"),(function(c){var e,x,f=c[_0x2fc8("0xb")],r=f.type,n=f.sn,s=t[r];if(s)try{s(f)}catch(c){e={type:r,sn:n,error:(x=c,{message:x[_0x2fc8("0x8")],stack:x.stack})},postMessage(e)}}));var t={importScripts:function(c){c[_0x2fc8("0x0")]&&c[_0x2fc8("0x0")].length>0&&importScripts.apply(void 0,c.scripts);postMessage({type:_0x2fc8("0xa")})},newTask:x,append:r,flush:r},e={};function x(t){var x=c[t.codecClass],f=t.sn;if(e[f])throw Error("duplicated sn");e[f]={codec:new x(t[_0x2fc8("0xf")]),crcInput:"input"===t[_0x2fc8("0x10")],crcOutput:t.crcType===_0x2fc8("0xd"),crc:new n},postMessage({type:_0x2fc8("0x5"),sn:f})}var f=c[_0x2fc8("0x13")]?c.performance[_0x2fc8("0x4")][_0x2fc8("0x1")](c[_0x2fc8("0x13")]):Date.now;function r(c){var t=c.sn,r=c[_0x2fc8("0xc")],n=c[_0x2fc8("0xb")],s=e[t];!s&&c.codecClass&&(x(c),s=e[t]);var o,p=r===_0x2fc8("0x7"),a=f();if(p)try{o=s.codec.append(n,(function(c){postMessage({type:"progress",sn:t,loaded:c})}))}catch(c){throw delete e[t],c}else delete e[t],o=s.codec.flush();var i=f()-a;a=f(),n&&s.crcInput&&s[_0x2fc8("0x11")][_0x2fc8("0x7")](n),o&&s[_0x2fc8("0xe")]&&s[_0x2fc8("0x11")].append(o);var _=f()-a,u={type:r,sn:t,codecTime:i,crcTime:_},d=[];o&&(u.data=o,d.push(o.buffer)),p||!s.crcInput&&!s.crcOutput||(u[_0x2fc8("0x11")]=s[_0x2fc8("0x11")][_0x2fc8("0x9")]());try{postMessage(u,d)}catch(c){postMessage(u)}}function n(){this[_0x2fc8("0x11")]=-1}function s(){}n[_0x2fc8("0x2")][_0x2fc8("0x7")]=function(c){for(var t=0|this[_0x2fc8("0x11")],e=this[_0x2fc8("0x14")],x=0,f=0|c.length;x<f;x++)t=t>>>8^e[255&(t^c[x])];this[_0x2fc8("0x11")]=t},n.prototype[_0x2fc8("0x9")]=function(){return~this[_0x2fc8("0x11")]},n[_0x2fc8("0x2")][_0x2fc8("0x14")]=function(){var c,t,e,x=[];for(c=0;c<256;c++){for(e=c,t=0;t<8;t++)1&e?e=e>>>1^3988292384:e>>>=1;x[c]=e}return x}(),c[_0x2fc8("0x12")]=s,s.prototype.append=function(c,t){return c},s[_0x2fc8("0x2")][_0x2fc8("0x6")]=function(){}}(this);