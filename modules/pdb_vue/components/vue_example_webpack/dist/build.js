!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/modules/contrib/pdb/modules/pdb_vue/components/vue_example_webpack/dist/",t(t.s=3)}([function(e,t,r){r(9);var n=r(7)(r(2),r(8),null,null);e.exports=n.exports},function(e,t){e.exports=Vue},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var n=r(1),o=r.n(n),a=r(0),s=r.n(a),i=document.getElementsByClassName("vue-example-webpack"),u=i.length,l=0;l<u;l++)new o.a({el:i[0],render:function(e){return e(s.a)}})},function(e,t,r){t=e.exports=r(5)(),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}h1,h2{font-weight:400}ul{list-style-type:none;padding:0}li{display:inline-block;margin:0 10px}a{color:#42b983}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(e,t,r){e.exports=r.p+"logo.png?82b9c7a5a3f405032b1db71a25f67021"},function(e,t){e.exports=function(e,t,r,n){var o,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,a=e.default);var i="function"==typeof a?a.options:a;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),r&&(i._scopeId=r),n){var u=Object.create(i.computed||null);Object.keys(n).forEach(function(e){var t=n[e];u[e]=function(){return t}}),i.computed=u}return{esModule:o,exports:a,options:i}}},function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{src:r(6)}}),e._v(" "),n("h1"),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[e._v("Gitter Chat")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])])]),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])])}]}},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(10)("5ab8867c",n,!0)},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=c[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(a(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(a(r.parts[o]));c[r.id]={id:r.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(v)return h;n.parentNode.removeChild(n)}if(g){var a=d++;n=p||(p=o()),t=s.bind(null,n,a,!1),r=s.bind(null,n,a,!0)}else n=o(),t=i.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function s(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function i(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(11),c={},f=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){v=r;var o=l(e,t);return n(o),function(t){for(var r=[],a=0;a<o.length;a++){var s=o[a],i=c[s.id];i.refs--,r.push(i)}t?(o=l(e,t),n(o)):o=[];for(var a=0;a<r.length;a++){var i=r[a];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete c[i.id]}}}};var m=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],s=a[0],i=a[1],u=a[2],l=a[3],c={id:e+":"+o,css:i,media:u,sourceMap:l};n[s]?n[s].parts.push(c):r.push(n[s]={id:s,parts:[c]})}return r}}]);
//# sourceMappingURL=build.js.map