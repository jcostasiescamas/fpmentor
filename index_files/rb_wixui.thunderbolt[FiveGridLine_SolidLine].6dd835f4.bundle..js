!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[FiveGridLine_SolidLine]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[FiveGridLine_SolidLine]"]=t(require("react")):e["rb_wixui.thunderbolt[FiveGridLine_SolidLine]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={40841:function(e,t){var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var u=o.apply(null,n);u&&e.push(u)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";r.r(o),r.d(o,{components:function(){return b}});var e=r(448),t=r.n(e),n=r(5329),i=r.n(n),u=r(40841),a=r.n(u);const s=(...e)=>e.map((e=>e?`wixui-${e}`:"")).join(" ");const c=13,l=27;function f(e){return t=>{t.keyCode===e&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.click())}}f(32),f(c),f(l);var p={root:"horizontal-line"};const d=e=>{const{id:r,children:o,className:i,customClassNames:u=[],onMouseEnter:c,onMouseLeave:l}=e;return n.createElement("div",t()({id:r,className:a()(i,s(p.root,...u))},(e=>Object.entries(e).reduce(((e,[t,n])=>(t.includes("data-")&&(e[t]=n),e)),{}))(e),((e={})=>void 0!==e.tabIndex?{tabIndex:e.tabIndex}:{})(e.a11y),{onMouseEnter:c,onMouseLeave:l}),o)};var v="aVng1S";const b={FiveGridLine_SolidLine:{component:e=>{let{children:n,...r}=e;return i().createElement(d,t()({},r,{className:a()(r.className,v)}))}}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[FiveGridLine_SolidLine].6dd835f4.bundle.min.js.map