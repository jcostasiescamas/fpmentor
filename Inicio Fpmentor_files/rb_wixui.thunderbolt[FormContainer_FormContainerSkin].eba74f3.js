!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[FormContainer_FormContainerSkin]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[FormContainer_FormContainerSkin]"]=t(require("react")):e["rb_wixui.thunderbolt[FormContainer_FormContainerSkin]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={40841:function(e,t){var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";r.r(o),r.d(o,{components:function(){return b}});var e=r(5329),t=r.n(e),n=r(40841),i=r.n(n);const a=(...e)=>e.map((e=>e?`wixui-${e}`:"")).join(" ");var s=r(448),u=r.n(s);const d="mesh-container-content",c="inline-content",p=e=>t().createElement("div",{key:e.props.id+"-rotated-wrapper","data-mesh-id":e.props.id+"-rotated-wrapper"},e);var l=e=>{const{id:n,className:r,wedges:o=[],rotatedComponents:a=[],children:s,fixedComponents:l=[],extraClassName:f="",renderRotatedComponents:m=p}=e,v=t().Children.toArray(s()),h=[],b=[];v.forEach((e=>l.includes(e.props.id)?h.push(e):b.push(e)));const y=(e=>{const{wedges:n,rotatedComponents:r,childrenArray:o,renderRotatedComponents:i}=e,a=r.reduce(((e,t)=>({...e,[t]:!0})),{});return[...o.map((e=>{return a[(t=e,t.props.id.split("__")[0])]?i(e):e;var t})),...n.map((e=>t().createElement("div",{key:e,"data-mesh-id":e})))]})({childrenArray:b,rotatedComponents:a,wedges:o,renderRotatedComponents:m});return t().createElement("div",u()({},(e=>Object.entries(e).reduce(((e,[t,n])=>(t.includes("data-")&&(e[t]=n),e)),{}))(e),{"data-mesh-id":n+"inlineContent","data-testid":c,className:i()(r,f)}),t().createElement("div",{"data-mesh-id":n+"inlineContent-gridContainer","data-testid":d},y),h)};var f={root:"form"};const m=t=>{const{id:n,className:r,onSubmit:o,children:i,onMouseEnter:a,onMouseLeave:s}=t;return e.createElement("form",{id:n,onMouseEnter:a,onMouseLeave:s,className:r,onSubmit:e=>{e.preventDefault(),o&&(e.persist(),o(e))}},i)};var v="JVi7i2",h="d3n4V3";const b={FormContainer_FormContainerSkin:{component:t=>{const{id:n,meshProps:r,onSubmit:o,children:s,onMouseEnter:u,onMouseLeave:d,inlineBorder:c,className:p,customClassNames:b=[]}=t,y={id:n,...r,children:s};return e.createElement(m,{id:n,className:i()(c?"":v,p,a(f.root,...b)),onSubmit:o,onMouseEnter:u,onMouseLeave:d},c&&e.createElement("div",{className:i()(v,h)}),e.createElement(l,y))}}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[FormContainer_FormContainerSkin].eba74f38.bundle.min.js.map