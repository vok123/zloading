!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=0)}({0:function(t,e,n){t.exports=n("tjUo")},"41pa":function(t,e,n){"use strict";var r=n("lTJf");n.n(r).a},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,i=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},DNSQ:function(t,e,n){"use strict";var r=n("XaJ2");n.n(r).a},E2jh:function(t,e,n){"use strict";var r=n("cWAC");n.n(r).a},EToE:function(t,e,n){"use strict";var r=n("x2y0");n.n(r).a},JPst:function(t,e,n){"use strict";t.exports=function(n){var s=[];return s.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},s.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(r=0;r<t.length;r++){var i=t[r];null!=i[0]&&n[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),s.push(i))}},s}},XaJ2:function(t,e,n){var r=n("jGdh");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,o);r.locals&&(t.exports=r.locals)},"aET+":function(t,e,r){var n,o,i,l={},c=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=(i={},function(t,e){if("function"==typeof t)return t();if(void 0===i[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}i[t]=n}return i[t]}),u=null,f=0,a=[],d=r("9tPo");function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=l[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],e));l[r.id]={id:r.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function v(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),a.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=a.indexOf(t);0<=e&&a.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return b(e,t.attrs),v(t,e),e}function b(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,t){var n,r,o,i,s,a;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var l=f++;n=u||(u=y(t)),r=x.bind(null,n,l,!1),o=x.bind(null,n,l,!0)}else o=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=t,a=document.createElement("link"),void 0===s.attrs.type&&(s.attrs.type="text/css"),s.attrs.rel="stylesheet",b(a,s.attrs),v(s,a),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n=a,t),function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}t.exports=function(t,s){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(s=s||{}).attrs="object"==typeof s.attrs?s.attrs:{},s.singleton||"boolean"==typeof s.singleton||(s.singleton=c()),s.insertInto||(s.insertInto="head"),s.insertAt||(s.insertAt="bottom");var a=h(t,s);return p(a,s),function(t){for(var e=[],n=0;n<a.length;n++){var r=a[n];(o=l[r.id]).refs--,e.push(o)}t&&p(h(t,s),s);for(n=0;n<e.length;n++){var o;if(0===(o=e[n]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete l[o.id]}}}};var _,C=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=C(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},cWAC:function(t,e,n){var r=n("ouc9");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,o);r.locals&&(t.exports=r.locals)},d7vd:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,"",""])},jGdh:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,"",""])},lTJf:function(t,e,n){var r=n("mSmJ");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,o);r.locals&&(t.exports=r.locals)},mSmJ:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,"",""])},ouc9:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,"",""])},tjUo:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"z-loading"},on:{"after-leave":t.afterLeaveHandler}},[t.visible?n("div",{staticClass:"z-loading-box z-loading--fixed",class:t.loadingClass,style:[t.zLoadingPosition,t.boxStyle]},["youtubeBar"===t.type?n("div",{ref:"bar",staticClass:"z-loading-bar",style:t.barStyle},[n("div",{staticClass:"z-loading-head"})]):n("div",{staticClass:"z-loading-spinner"},[t.showCloseBtn&&t.closeBtnVisible?n("div",{staticClass:"spinner-close",style:t.closeStyle,on:{click:t.closeHandler}},[n("svg",{staticClass:"icon",staticStyle:{width:"1em",height:"1em","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1400"}},[n("path",{attrs:{d:"M621.714286 512 1002.057143 131.657143c29.257143-29.257143 29.257143-80.457143 0-109.714286-29.257143-29.257143-80.457143-29.257143-109.714286 0L512 402.285714 131.657143 21.942857c-29.257143-29.257143-80.457143-29.257143-109.714286 0-29.257143 29.257143-29.257143 80.457143 0 109.714286L402.285714 512 21.942857 892.342857c-29.257143 29.257143-29.257143 80.457143 0 109.714286 29.257143 29.257143 80.457143 29.257143 109.714286 0L512 621.714286l380.342857 380.342857c29.257143 29.257143 80.457143 29.257143 109.714286 0 29.257143-29.257143 29.257143-80.457143 0-109.714286L621.714286 512z","p-id":"1401"}})])]):t._e(),t._v(" "),n("div",{staticClass:"spinner-content"},[n(t.loader,{tag:"component",attrs:{size:t.size,"theme-color":t.themeColor}})],1)])]):t._e()])},o={data:function(){return{barWidth:0,position:"top",_doneCallback:null,_incrementTimer:null,_completeTimer:null,_barEl:null,_started:!1,_timerOutTimer:null}},computed:{barStyle:function(){var t={width:100*this.barWidth+"%",height:this.barHeight};return this.themeColor&&(t["background-color"]=this.themeColor),t},zLoadingPosition:function(){return"top"===this.position?{top:0}:{bottom:0}}},watch:{visible:{immediate:r._withStripped=!0,handler:function(t){var e=this;(this._started=!0)!==t||"youtubeBar"!==this.type||this._barEl||this.$nextTick(function(){e._barEl=e.$refs.bar,e.increments()})}}},methods:{increments:function(){if(!(1<=this.barWidth)){var t=this.barWidth,e=0;e=0<=t&&t<.25?(3*Math.random()+3)/100:.25<=t&&t<.65?3*Math.random()/100:.65<=t&&t<.9?2*Math.random()/100:.9<=t&&t<.99?.005:0,this.setWidth(this.barWidth+e)}},completeAnimation:function(){this.visible=!1,this._started=!1},setWidth:function(t){this._started&&(1===(this.barWidth=t)&&this._barEl&&this._barEl.addEventListener("transitionend",this.completeAnimation,!1),this.clearTimer(this._incrementTimer),this._incrementTimer=setTimeout(this.increments,250))},complete:function(){this.clearTimer(this._timerOutTimer),this.setWidth(1)},successComplete:function(t){this.themeColor=t,this.complete()},errorComplete:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"#f00";this.themeColor=t,this.complete()}},beforeDestroy:function(){this.targetEl.loadingInstance=null,this._barEl&&this._barEl.removeEventListener("transitionend",this.completeAnimation,!1)}},i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner-loader",style:this.style},[e("svg",{staticClass:"spinner-circular",attrs:{viewBox:"25 25 50 50"}},[e("circle",{staticClass:"spinner-path",style:this.circleStyle,attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"4","stroke-miterlimit":"10"}})])])};i._withStripped=!0;var s={props:{size:{type:Number,default:50},themeColor:[String]},computed:{style:function(){return{width:this.size+"px",height:this.size+"px"}},circleStyle:function(){return{stroke:this.themeColor}}}};n("DNSQ");function a(t,e,n,r,o,i,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}var l=a(s,i,[],!1,null,null,null);l.options.__file="src/spinner/circle.vue";var c=l.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"double-bounce-spinner",style:t.style},[n("div",{staticClass:"double-bounce1",style:t.bounceStyle}),t._v(" "),n("div",{staticClass:"double-bounce2",style:t.bounceStyle})])};u._withStripped=!0;var f={props:{size:{type:Number,default:50},themeColor:[String]},computed:{style:function(){return{width:this.size+"px",height:this.size+"px"}},bounceStyle:function(){return{"background-color":this.themeColor}}}},d=(n("41pa"),a(f,u,[],!1,null,null,null));d.options.__file="src/spinner/double-bounce.vue";var p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stretch-spinner",style:t.style},[n("div",{staticClass:"rect rect-1",style:t.rectStyle}),t._v(" "),n("div",{staticClass:"rect rect-2",style:t.rectStyle}),t._v(" "),n("div",{staticClass:"rect rect-3",style:t.rectStyle}),t._v(" "),n("div",{staticClass:"rect rect-4",style:t.rectStyle}),t._v(" "),n("div",{staticClass:"rect rect-5",style:t.rectStyle})])};h._withStripped=!0;var v={props:{size:{type:Number,default:50},themeColor:[String]},computed:{style:function(){return{width:this.size+"px",height:this.size+"px"}},rectStyle:function(){return{"background-color":this.themeColor}}}},m=(n("EToE"),a(v,h,[],!1,null,null,null));m.options.__file="src/spinner/stretch.vue";var y=m.exports,b={name:"z-loading",mixins:[o],data:function(){return{visible:!1,timeOut:3e3,themeColor:"",type:"youtubeBar",loader:null,closeBtnVisible:!1}},computed:{loadingClass:function(){return"youtubeBar"===this.type?"z-loading-type--youtube":"z-loading-type--spinner"},closeStyle:function(){return{color:this.themeColor}},boxStyle:function(){return{"background-color":this.backgroundColor,"z-index":this.zIndex}}},watch:{type:{immediate:!0,handler:function(){this.loader={doubleBounce:p,circle:c,stretch:y}[this.type]}}},methods:{closeHandler:function(){this.close.call(this)},afterLeaveHandler:function(){this.$el.parentNode&&(this.$el.parentNode.classList.remove("zloading-parent--relative"),this.$el.parentNode.removeChild(this.$el)),this.$destroy(),"function"==typeof this._doneCallback&&this._doneCallback()},clearTimer:function(t){t&&clearTimeout(t)}}},g=(n("E2jh"),a(b,r,[],!1,null,null,null));g.options.__file="src/index.vue";var _=g.exports,C=function(t){for(var e=1,n=arguments.length;e<n;e++){var r=arguments[e]||{};for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];void 0!==i&&(t[o]=i)}}return t};function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"setConfig",function(){return j}),n.d(e,"zLading",function(){return L});var w=null,S={},T={barHeight:"4px",barWidth:0,timeOut:0,themeColor:"#f33",position:"top",type:"youtubeBar",backgroundColor:"rgba(0, 0, 0, 0.6)",size:50,showCloseBtn:!0,zIndex:999},E=function(t){var e=function(e,n){if(!e||!n)return null;"float"===n&&(n="cssFloat");try{var t=document.defaultView.getComputedStyle(e,"");return e.style[n]||t?t[n]:null}catch(t){return e.style[n]}}(t,"position");if(-1===["absolute","fixed"].indexOf(e)){var n="zloading-parent--relative";!1===t.classList.contains(n)&&t.classList.add(n)}t!==document.body&&w.$el.classList.remove("z-loading--fixed")},j=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};C(T,t)},L=window.ZLoading;e.default={install:function(i){var s=i.extend(_),a=1,l=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=C({},T,n),o=null;return o=t.loadingInstance?(C(t.loadingInstance,r),t.loadingInstance.visible=e,t.loadingInstance):((w=new s({el:document.createElement("div"),data:r})).uid=a++,t.appendChild&&(w.visible=e,i.nextTick(function(){t.appendChild(w.$el),E(t)})),(w.targetEl=t).loadingInstance=w),i.nextTick(function(){0<r.timeOut&&w._setTimeout(r.timeOut)}),o};s.prototype._setTimeout=function(t){var e=this;S[this.uid]&&clearTimeout(S[this.uid]),0<t&&(S[this.uid]=setTimeout(function(){w=null,delete S[e.uid],e._hide()},Math.max(t,50)))},s.prototype._hide=function(){if("youtubeBar"===this.type)return this.complete&&this.complete();this.visible=!1},s.prototype.close=function(t){var e,n=50;return"number"==typeof t?n=t:1==(e=t,"[object Object]"===window.toString.call(e))&&("string"==typeof t.color&&(this.themeColor=t.color),"number"==typeof t.timeout&&(n=t.timeout)),this._setTimeout(n),this},s.prototype.wait=function(r){var o=this;return r&&-1<["object","function"].indexOf(x(r))&&"function"==typeof r.then?new Promise(function(t,e){var n=o;r.then(function(){n.close(),t.apply(void 0,arguments)}).catch(function(){n.close(),e.apply(void 0,arguments)})}):this},s.prototype.done=function(t){return"function"==typeof t&&(this._doneCallback=t),this};var r={close:function(){},open:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.el||null;"string"==typeof t.el&&(e=document.querySelector(t.el)),e=e||document.body;var n=l(e,!0,t);return n._doneCallback=null,r.close=function(t){return n.close(t)},n}};window.ZLoading=i.prototype.$zLoading=r,i.directive("zLoading",function(t,e){var n=e.value,r=e.oldValue,o=e.modifiers,i=e.arg,s=void 0===i?"circle":i;if(n!==r){var a=t;if(!0===o.fullscreen&&(a=document.body),!0===n)return l(a,n,{type:s});a.loadingInstance&&a.loadingInstance.close()}})}}},x2y0:function(t,e,n){var r=n("d7vd");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,o);r.locals&&(t.exports=r.locals)}}).default});
//# sourceMappingURL=z-loading.js.map