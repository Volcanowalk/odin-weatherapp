(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),r=t.n(o),i=t(645),c=t.n(i)()(r());c.push([e.id,"body, html {\n    margin: 0px;\n    height: 100%;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #0766AD;\n    color: white;\n}\n\n.container {\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    gap: 30px;\n    background-color: #F3F3F3;\n}\n\n.display-weather {\n    height: 350px;\n    width: 500px;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    align-items: center;\n    visibility: hidden;\n    background-color: #83A2FF;\n    border-radius: 10px;\n    box-shadow: 0px 0px 10px;\n\n}\n\n.city {\n    font-size: 3rem;\n}\n\n.country {\n    font-size: 1.5rem;\n}\n\n.display-condition {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.display-condition p {\n    font-size: 2rem;\n}\n\n.display-icon {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\ntable {\n    margin-top: 30px;\n}\n\ntd {\n    font-size: 1.5rem;\n}\n\ntd:first-child {\n    text-align: right;\n}\n\n.search {\n    background-color: #0766AD;\n    color: white;\n    border-radius: 8px;\n    border: none;\n    font-size: 1.5rem;\n    opacity: 0.7;\n}\n\n.search:hover {\n    opacity: 1;\n}\n\n.weather-location {\n    font-size: 1.5rem;\n}",""]);const a=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],l=o.base?s[0]+o.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=a,n.splice(a,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=t(i[c]);n[a].references--}for(var s=o(e,r),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),c=t.n(i),a=t(565),s=t.n(a),l=t(216),u=t.n(l),d=t(589),p=t.n(d),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const y=document.querySelector(".search"),h=document.querySelector(".weather-location"),v=document.querySelector(".display-weather");y.addEventListener("click",(async function(){const e=await async function(e){const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=f2059bfb35224f35b34161322231311&q=${e}`,{mode:"cors"});if(400!==n.status){const e=await n.json(),t=e.current,o=e.location;return{condition:t.condition.text,icon:t.condition.icon,temp_c:t.temp_c,temp_f:t.temp_f,feelslike_c:t.feelslike_c,feelslike_f:t.feelslike_f,wind_kph:t.wind_kph,humidity:t.humidity,precip_mm:t.precip_mm,location_name:o.name,location_country:o.country}}alert("Please type a proper city name")}(h.value);e?(async function(e){const n=document.querySelector(".city"),t=document.querySelector(".country"),o=document.querySelector(".condition-icon"),r=document.querySelector(".condition-text"),i=document.querySelector(".temp-c"),c=document.querySelector(".temp-f"),a=document.querySelector(".feelslike-c"),s=document.querySelector(".feelslike-f"),l=document.querySelector(".wind"),u=document.querySelector(".humidity"),d=document.querySelector(".precipitation");n.textContent=e.location_name,t.textContent=e.location_country,o.src=`https:${e.icon}`,r.textContent=e.condition,i.textContent=e.temp_c,c.textContent=e.temp_f,a.textContent=e.feelslike_c,s.textContent=e.feelslike_f,l.textContent=`${e.wind_kph} km/h`,u.textContent=`${e.humidity}%`,d.textContent=`${e.precip_mm} mm`}(e),v.style.visibility="visible"):v.style.visibility="hidden"}))})()})();