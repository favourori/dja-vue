(function(t){function e(e){for(var n,s,u=e[0],i=e[1],l=e[2],c=0,p=[];c<u.length;c++)s=u[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);v&&v(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},a=[];function s(t){return u.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"0d95fbe2"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(t);var l=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(c);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[t]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var v=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},2395:function(t,e,r){},"47ce":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)},a=[],s=(r("7c55"),r("2877")),u={},i=Object(s["a"])(u,o,a,!1,null,null,null),l=i.exports,c=(r("d3b7"),r("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{staticClass:"is-full",attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Django + Vue.js App"}}),n("section",[n("div",{staticClass:"buttons"},[n("b-button",{attrs:{type:"is-primary"}},[t._v("Primary")]),n("b-button",{attrs:{type:"is-success"}},[t._v("Success")]),n("b-button",{attrs:{type:"is-danger"}},[t._v("Danger")]),n("b-button",{attrs:{type:"is-warning"}},[t._v("Warning")]),n("b-button",{attrs:{type:"is-info"}},[t._v("Info")]),n("b-button",{attrs:{type:"is-link"}},[t._v("Link")]),n("b-button",{attrs:{type:"is-light"}},[t._v("Light")]),n("b-button",{attrs:{type:"is-dark"}},[t._v("Dark")]),n("b-button",{attrs:{type:"is-text"}},[t._v("Text")])],1),n("div",{staticClass:"buttons"},[n("b-button",{attrs:{disabled:""}},[t._v("Disabled")]),n("b-button",{attrs:{loading:""}},[t._v("Loading")]),n("b-button",{attrs:{rounded:""}},[t._v("Rounded")])],1),n("div",{staticClass:"buttons"},[n("b-button",{attrs:{type:"is-primary",outlined:""}},[t._v("Outlined")]),n("b-button",{attrs:{type:"is-success",outlined:""}},[t._v("Outlined")]),n("b-button",{attrs:{type:"is-danger",outlined:""}},[t._v("Outlined")]),n("b-button",{attrs:{type:"is-warning",outlined:""}},[t._v("Outlined")])],1),n("div",{staticClass:"buttons"},[n("b-button",{attrs:{type:"is-primary",expanded:""}},[t._v("Expanded")])],1),n("div",{staticClass:"notification is-primary"},[n("b-button",{attrs:{type:"is-primary",inverted:""}},[t._v(" Inverted ")]),n("b-button",{attrs:{type:"is-primary",inverted:"",outlined:""}},[t._v(" Invert Outlined ")])],1)])],1)},p=[],b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),t._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],f={name:"HelloWorld",props:{msg:String}},h=f,_=(r("5ea9"),Object(s["a"])(h,b,d,!1,null,"094a673b",null)),g=_.exports,m={name:"Home",components:{HelloWorld:g}},y=m,j=Object(s["a"])(y,v,p,!1,null,null,null),k=j.exports;n["a"].use(c["a"]);var w=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],O=new c["a"]({mode:"history",base:"/",routes:w}),x=O,C=r("2f62");n["a"].use(C["a"]);var E=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=r("289d");r("5abe");n["a"].use(P["a"]),n["a"].config.productionTip=!1,new n["a"]({router:x,store:E,render:function(t){return t(l)}}).$mount("#app")},"5ea9":function(t,e,r){"use strict";var n=r("47ce"),o=r.n(n);o.a},"7c55":function(t,e,r){"use strict";var n=r("2395"),o=r.n(n);o.a},cf05:function(t,e,r){t.exports=r.p+"static/img/logo.45739d44.png"}});
//# sourceMappingURL=app.413ba21d.js.map