(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"19998f79","chunk-014ae392":"695ba881","chunk-1bd532b1":"777418dc","chunk-2d0b37ff":"847c8952","chunk-7a209fdc":"a0244ae8","chunk-d457d5e8":"872af9d5","chunk-f97f1a04":"7181198b","chunk-fc91c42e":"0dea4c69","chunk-1889eb0e":"1dc5d2ef","chunk-e3fcb2a8":"c78bc29b"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1,"chunk-1bd532b1":1,"chunk-7a209fdc":1,"chunk-fc91c42e":1,"chunk-1889eb0e":1,"chunk-e3fcb2a8":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"849422a8","chunk-014ae392":"31d6cfe0","chunk-1bd532b1":"1ad1e1ea","chunk-2d0b37ff":"31d6cfe0","chunk-7a209fdc":"1ad1e1ea","chunk-d457d5e8":"31d6cfe0","chunk-f97f1a04":"31d6cfe0","chunk-fc91c42e":"734074da","chunk-1889eb0e":"e0f8d472","chunk-e3fcb2a8":"e0f8d472"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){l=m[i],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],d.parentNode.removeChild(d),a(s)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var m=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",m.name="ChunkLoadError",m.type=n,m.request=r,a[1](m)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[this.$route.meta.layout?a(e.currentTabComponent,{tag:"component"}):e._e(),a("vue-progress-bar")],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex h-screen bg-gray-50",class:{"overflow-hidden":e.isSideMenuOpen}},[a("aside",{staticClass:"z-20 hidden w-60 overflow-y-auto border-r bg-white md:block flex-shrink-0"},[a("div",{staticClass:"text-gray-600 h-full"},[a("router-link",{staticClass:"inline-block relative pl-6 py-3 md:h-14 w-full text-lg font-semibold text-gray-800 border-b",attrs:{to:{name:"Home"}}},[e._v(" Client Turbine ")]),a("ul",{staticClass:"mt-10"},[a("li",[a("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Home"},"active-class":"bg-gray-100 text-black"}},[a("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[a("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}})]),a("span",{staticClass:"ml-4"},[e._v("Страницы")])])])],1),a("li",[a("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Domains"},exact:"","active-class":"bg-gray-100 text-black"}},[a("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}})]),a("span",{staticClass:"ml-4"},[e._v("Домены")])])])],1),a("li",[a("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Settings"},exact:"","active-class":"bg-gray-100 text-black"}},[a("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}}),a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}})]),a("span",{staticClass:"ml-4"},[e._v("Настройки")])])])],1)]),a("button",{staticClass:"inline-block fixed border-t bottom-0 w-60 px-6 py-3",on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[a("span",{staticClass:"inline-flex items-center w-full text-sm font-medium transition-colors duration-300 hover:text-gray-800"},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})]),a("span",{staticClass:"ml-2"},[e._v("Выход")])])])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isSideMenuOpen,expression:"isSideMenuOpen"}],staticClass:"fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center",on:{click:e.closeSideMenu}}),a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isSideMenuOpen,expression:"isSideMenuOpen"}],staticClass:"fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white"},[a("div",{staticClass:"py-4 text-gray-500"},[a("router-link",{staticClass:"ml-6 text-lg font-bold text-gray-800",attrs:{to:"/"}},[e._v(" Client Turbine ")]),a("ul",[a("li",[a("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Home"},exact:"","active-class":"bg-gray-100 text-black"}},[a("span",{staticClass:"inline-flex items-center w-full text-sm font-medium transition-colors duration-300 hover:text-gray-800"},[a("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}})]),a("span",{staticClass:"ml-4"},[e._v("Страницы")])])])],1),a("li",[a("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Domains"},exact:"","active-class":"bg-gray-100 text-black"}},[a("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}})]),a("span",{staticClass:"ml-4"},[e._v("Домены")])])])],1),a("li",[a("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Settings"},exact:"","active-class":"bg-gray-100 text-black"}},[a("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}}),a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}})]),a("span",{staticClass:"ml-4"},[e._v("Настройки")])])])],1)]),a("button",{staticClass:"inline-block fixed border-t bottom-0 w-64 px-6 py-3",on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[a("span",{staticClass:"inline-flex items-center w-full text-sm font-medium transition-colors duration-300 hover:text-gray-800"},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})]),a("span",{staticClass:"ml-2"},[e._v("Выход")])])])],1)]),a("div",{staticClass:"flex flex-col flex-1 w-full"},[a("header",{staticClass:"z-10 md:h-14 py-4 bg-white border-b"},[a("div",{staticClass:"container mx-auto h-full w-full flex items-center md:justify-end justify-between px-6"},[a("button",{staticClass:"p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple",attrs:{"aria-label":"Menu"},on:{click:e.toggleSideMenu}},[a("svg",{staticClass:"w-6 h-6",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])]),a("div",{staticClass:"flex items-center text-sm font-medium"},[a("div",{staticClass:"ava relative flex items-center justify-center w-8 h-8 mr-3 rounded-full shadow-sm"},[a("span",{staticClass:"font-bold text-lg text-white"},[e._v(e._s(e.name?e.name[0].toUpperCase():"C"))])]),a("div",{staticClass:"hidden md:block"},[a("p",{staticClass:"text-gray-800"},[e._v(e._s(e.name))])])])])]),a("main",{staticClass:"h-full overflow-y-auto"},[a("div",{staticClass:"container mx-auto px-6 md:py-10 py-8 grid"},[a("router-view")],1)])]),a("SupportBtn")],1)},i=[],c=a("5530"),l=a("2f62"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fixed flex flex-col items-end z-30 bottom-8 right-8"},[e.showSupport?a("div",{staticClass:"w-48 h-32 mb-2 bg-white border rounded-md shadow-xl overflow-auto"},[e._m(0)]):e._e(),a("button",{staticClass:"flex justify-center items-center w-10 h-10 bg-gray-50 rounded-full border shadow-xl focus:outline-none transition-colors hover:bg-gray-100 active:bg-gray-200",attrs:{type:"button"},on:{click:function(t){e.showSupport=!e.showSupport}}},[a("span",{staticClass:"font-medium text-xl"},[e._v("?")])])])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"py-2 text-sm"},[a("li",{staticClass:"py-1 px-3 hover:bg-gray-100"},[a("a",{attrs:{href:"https://www.notion.so/Client-Turbine-Help-Center-955fec2445464b05ae839ef2108de6b7",target:"blank"}},[e._v("Help Center 📚")])]),a("li",{staticClass:"py-1 px-3 hover:bg-gray-100"},[a("a",{attrs:{href:"https://t.me/clturbinehelp",target:"blank"}},[e._v("Чат поддержки 👨‍💻")])]),a("li",{staticClass:"py-1 px-3 hover:bg-gray-100"},[a("a",{attrs:{href:"https://t.me/clturbine",target:"blank"}},[e._v("Что нового?")])])])}],d={name:"SupportBtn",data:function(){return{showSupport:!1}}},h=d,p=a("2877"),f=Object(p["a"])(h,u,m,!1,null,null,null),g=f.exports,v={name:"DashboardLayout",components:{SupportBtn:g},data:function(){return{isModalOpen:!1,isSideMenuOpen:!1,isProfileMenuOpen:!1,isPagesMenuOpen:!1,isNotificationsMenuOpen:!1,trapCleanup:null}},computed:Object(c["a"])({},Object(l["c"])(["name"])),methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["destroyToken"])),{},{logout:function(){var e=this;this.destroyToken().then((function(){e.$router.push({name:"Login"})}))},openModal:function(){this.isModalOpen=!0},closeModal:function(){this.isModalOpen=!1},toggleSideMenu:function(){this.isSideMenuOpen=!this.isSideMenuOpen},closeSideMenu:function(){this.isSideMenuOpen=!1},toggleProfileMenu:function(){this.isProfileMenuOpen=!this.isProfileMenuOpen},closeProfileMenu:function(){this.isProfileMenuOpen=!1},togglePagesMenu:function(){this.isPagesMenuOpen=!this.isPagesMenuOpen},toggleNotificationsMenu:function(){this.isNotificationsMenuOpen=!this.isNotificationsMenuOpen}}),mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,a,n){e.$Progress.start(),n()})),this.$router.afterEach((function(){e.$Progress.finish()}))}},b=v,k=Object(p["a"])(b,s,i,!1,null,null,null),_=k.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full min-h-screen bg-gray-50"},[a("header",{staticClass:"w-full h-12 flex justify-between border-b bg-white px-4"},[a("router-link",{staticClass:"back flex items-center hover:text-gray-900 text-gray-500",attrs:{to:{name:"Home"}}},[a("span",{staticClass:"mr-3"},[a("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})])]),a("span",{staticClass:"font-medium text-sm"},[e._v("Главная")])]),a("div",{staticClass:"flex items-center text-sm font-medium"},[a("div",{staticClass:"ava relative flex items-center justify-center w-8 h-8 mr-3 rounded-full shadow-sm "},[a("span",{staticClass:"font-bold text-lg text-white"},[e._v(e._s(e.name?e.name[0].toUpperCase():"C"))])]),a("div",{staticClass:"hidden md:block"},[a("p",{staticClass:"text-gray-800"},[e._v(e._s(e.name))])])])],1),a("main",{staticClass:"overflow-hidden",staticStyle:{height:"calc(100vh - 3rem)"}},[a("router-view")],1),a("SupportBtn")],1)},y=[],x={name:"EditorLayout",components:{SupportBtn:g},computed:Object(c["a"])({},Object(l["c"])(["name"]))},S=x,I=Object(p["a"])(S,w,y,!1,null,null,null),C=I.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex justify-center items-center h-full overflow-hidden min-h-screen sm:px-4 py-8 bg-gray-50"},[a("router-view")],1)},A=[],j={name:"ErrorLayout",mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,a,n){e.$Progress.start(),n()})),this.$router.afterEach((function(){e.$Progress.finish()}))}},O=j,T=Object(p["a"])(O,P,A,!1,null,null,null),E=T.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col items-center min-h-screen sm:px-4 py-8 bg-gray-50"},[e._m(0),a("div",{staticClass:"h-full mt-10 mx-auto overflow-hidden"},[a("router-view")],1)])},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"mt-10"},[a("a",{staticClass:"uppercase font-bold",attrs:{href:"https://client-turbine.ru"}},[e._v(" Client Turbine ")])])}],$={name:"LoginLayout",mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,a,n){e.$Progress.start(),n()})),this.$router.afterEach((function(){e.$Progress.finish()}))}},B=$,R=Object(p["a"])(B,M,N,!1,null,null,null),D=R.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col\titems-center min-h-screen md:p-6 md:bg-gray-50"},[a("router-view"),a("vue-progress-bar")],1)},U=[],z={name:"UserLayout",mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,a,n){e.$Progress.start(),n()})),this.$router.afterEach((function(){e.$Progress.finish()}))}},H=z,G=Object(p["a"])(H,L,U,!1,null,null,null),q=G.exports,J={name:"App",components:{DashboardLayout:_,EditorLayout:C,LoginLayout:D,UserLayout:q,ErrorLayout:E},computed:{currentTabComponent:function(){return(this.$route.meta.layout||"dashboard")+"-layout"}},methods:{}},V=J,F=Object(p["a"])(V,r,o,!1,null,null,null),K=F.exports,Q=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f"));n["a"].use(Q["a"]);var W=[{path:"/",redirect:{name:"Home"}},{path:"/dashboard",name:"Home",meta:{layout:"dashboard",requiresAuth:!0},component:function(){return a.e("about").then(a.bind(null,"bb51"))}},{path:"/login",name:"Login",meta:{layout:"login",requiresVisitor:!0},component:function(){return a.e("chunk-1bd532b1").then(a.bind(null,"a55b"))}},{path:"/register",name:"Register",meta:{layout:"login",requiresVisitor:!0},component:function(){return a.e("chunk-7a209fdc").then(a.bind(null,"73cf"))}},{path:"/page/create",name:"CreaterPage",meta:{layout:"editor",requiresAuth:!0},component:function(){return Promise.all([a.e("chunk-fc91c42e"),a.e("chunk-e3fcb2a8")]).then(a.bind(null,"dad9"))}},{path:"/page/edit/:url",name:"EditorPage",meta:{layout:"editor",requiresAuth:!0},component:function(){return Promise.all([a.e("chunk-fc91c42e"),a.e("chunk-1889eb0e")]).then(a.bind(null,"4634"))}},{path:"/page/:url/statistics",name:"PageStatistics",meta:{layout:"dashboard",requiresAuth:!0},component:function(){return a.e("chunk-d457d5e8").then(a.bind(null,"0b1c"))}},{path:"/settings",name:"Settings",meta:{layout:"dashboard",requiresAuth:!0},component:function(){return a.e("chunk-f97f1a04").then(a.bind(null,"26d3"))}},{path:"/domains",name:"Domains",meta:{layout:"dashboard",requiresAuth:!0},component:function(){return a.e("chunk-014ae392").then(a.bind(null,"fe90"))}},{path:"*",meta:{layout:"error",requiresAuth:!0},component:function(){return a.e("chunk-2d0b37ff").then(a.bind(null,"2946"))}}],X=new Q["a"]({mode:"history",base:"/",routes:W}),Y=X,Z=a("1da1"),ee=(a("96cf"),a("99af"),{state:{pages:JSON.parse(localStorage.getItem("pages_arr"))||null},mutations:{updatePageAll:function(e,t){e.pages=t},addPage:function(e,t){e.pages.unshift(t)}},actions:{API_GET_PAGES:function(e){var t=this;return Object(Z["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(t.state.urlAPI,"/api/pages"),{headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){var a=t.data;a&&(localStorage.setItem("pages_arr",JSON.stringify(a)),e.commit("updatePageAll",a))})).catch((function(t){throw alert("Данные с сервера не получены"),401==t.status&&(localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")),t}));case 2:case"end":return a.stop()}}),a)})))()},API_ADD_PAGE:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){var r,o,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=JSON.stringify({data:t.get("data")}),o=JSON.parse(t.get("data")),s=t.get("img_cover")?t:r,i={Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")},t.get("img_cover")||(i["Content-Type"]="application/json"),n.next=7,fetch("".concat(a.state.urlAPI,"/api/pages"),{method:"POST",headers:i,body:s}).then((function(){return e.commit("addPage",o)})).catch((function(t){throw alert("Ошибка создания страницы"),401==t.status&&(localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")),t}));case 7:case"end":return n.stop()}}),n)})))()},API_UPDATE_PAGE:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=JSON.parse(t.get("data")),n.next=3,fetch("".concat(a.state.urlAPI,"/api/pages/").concat(r.id),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")},body:t}).then((function(){return e.dispatch("API_GET_PAGES")})).catch((function(t){throw alert(t,"Страница не обновлена"),401==t.status&&(localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")),t}));case 3:case"end":return n.stop()}}),n)})))()},API_DELETE_PAGE:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a.state.urlAPI,"/api/pages/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(){return e.dispatch("API_GET_PAGES")})).catch((function(e){alert(e,"Андрей, исправь")}));case 2:case"end":return n.stop()}}),n)})))()}},getters:{allPages:function(e){return e.pages}}}),te=(a("b0c0"),{state:{token:localStorage.getItem("access_token")||null,name:localStorage.getItem("name_user")||"Пупсик",email:localStorage.getItem("email_user")||null,created_at:localStorage.getItem("created_at_user")||null},mutations:{tokenUpdate:function(e,t){e.token=t},nameUpdate:function(e,t){e.name=t},emailUpdate:function(e,t){e.email=t},createdUpdate:function(e,t){e.created_at=t},destroyTokenAndName:function(e){e.token=null,e.name=null},destroyPages:function(){this.state.page.pages=null}},actions:{registerToken:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a.state.urlAPI,"/api/register"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){var a=t.token;a&&(localStorage.setItem("access_token",a),e.commit("tokenUpdate",a));var n=t.name;n&&(localStorage.setItem("name_user",n),e.commit("nameUpdate",n));var r=t.email;r&&(localStorage.setItem("email_user",r),e.commit("emailUpdate",r));var o=t.created_at;o&&(localStorage.setItem("created_at_user",o),e.commit("createdUpdate",o))})).catch((function(e){throw e}));case 2:case"end":return n.stop()}}),n)})))()},getToken:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a.state.urlAPI,"/api/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){var a=t.token;a&&(localStorage.setItem("access_token",a),e.commit("tokenUpdate",a));var n=t.name;n&&(localStorage.setItem("name_user",n),e.commit("nameUpdate",n));var r=t.email;r&&(localStorage.setItem("email_user",r),e.commit("emailUpdate",r));var o=t.created_at;o&&(localStorage.setItem("created_at_user",o),e.commit("createdUpdate",o))})).catch((function(e){throw e}));case 2:case"end":return n.stop()}}),n)})))()},destroyToken:function(e){var t=this;return Object(Z["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(t.state.urlAPI,"/api/logout"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(){localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")})).catch((function(e){return console.log(e)}));case 2:case"end":return a.stop()}}),a)})))()},GO_FACEBOOK:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a.state.urlAPI,"/api/social-auth/facebook"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){var a=t.token;a&&(localStorage.setItem("access_token",a),e.commit("tokenUpdate",a));var n=t.name;n&&(localStorage.setItem("name_user",n),e.commit("nameUpdate",n));var r=t.email;r&&(localStorage.setItem("email_user",r),e.commit("emailUpdate",r));var o=t.created_at;o&&(localStorage.setItem("created_at_user",o),e.commit("createdUpdate",o))})).catch((function(e){throw e}));case 2:case"end":return n.stop()}}),n)})))()},updateNameAndEmail:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a.state.urlAPI,"/api/user/id"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")},body:JSON.stringify(t)}).then((function(){var a=t.name;a&&(localStorage.setItem("name_user",a),e.commit("nameUpdate",a));var n=t.email;n&&(localStorage.setItem("email_user",n),e.commit("emailUpdate",n))}),(function(e){alert("Ошибка смены имени и пароля",e)}));case 2:case"end":return n.stop()}}),n)})))()},changePassword:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a.state.urlAPI,"/api/user/pas"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")},body:JSON.stringify(t)}).then((function(){localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")}),(function(e){alert("Ошибка смены пароля",e)}));case 2:case"end":return n.stop()}}),n)})))()}},getters:{token:function(e){return e.token},name:function(e){return e.name},email:function(e){return e.email},created_at:function(e){return e.created_at},loggedIn:function(e){return null!==e.token}}}),ae={state:{templates:null},mutations:{updateTemplateAll:function(e,t){e.templates=t}},actions:{API_GET_TEMPLATES:function(e){var t=this;return Object(Z["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(t.state.urlAPI,"/api/templates"),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){var a=t.data;a&&e.commit("updateTemplateAll",a)})).catch((function(t){throw alert("Данные с сервера не получены"),401==t.status&&(localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")),t}));case 2:case"end":return a.stop()}}),a)})))()}},getters:{allTemplates:function(e){return e.templates}}},ne={state:{domains:null},mutations:{updateDomainAll:function(e,t){e.domains=t},addDomain:function(e,t){e.domains.unshift(t)}},actions:{API_GET_DOMAINS:function(e){var t=this;return Object(Z["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(t.state.urlAPI,"/api/domains"),{headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){var a=t.data;a&&e.commit("updateDomainAll",a)})).catch((function(t){throw alert("Ошибка загрузки доменов"),401==t.status&&(localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")),t}));case 2:case"end":return a.stop()}}),a)})))()},API_ADD_DOMAIN:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a.state.urlAPI,"/api/domains"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")},body:JSON.stringify(t)}).then((function(a){return a.ok?e.dispatch("API_GET_DOMAINS",t):Promise.reject(a)})).catch((function(t){throw 401==t.status&&(localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")),t}));case 2:case"end":return n.stop()}}),n)})))()},API_UPDATE_DOMAIN:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a.state.urlAPI,"/api/domains/").concat(t),{method:"PATCH",headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(t){return t.ok?e.dispatch("API_GET_DOMAINS"):Promise.reject(t)})).catch((function(t){throw 401==t.status&&(localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")),t}));case 2:case"end":return n.stop()}}),n)})))()},API_DELETE_DOMAIN:function(e,t){var a=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a.state.urlAPI,"/api/domains/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(t){return t.ok?e.dispatch("API_GET_DOMAINS"):Promise.reject(t)})).catch((function(t){throw 401==t.status&&(localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")),t}));case 2:case"end":return n.stop()}}),n)})))()}},getters:{allDomains:function(e){return e.domains}}};n["a"].use(l["a"]);var re=new l["a"].Store({state:{urlAPI:"https://api.client-turbine.ru"},mutations:{},actions:{},modules:{page:ee,auth:te,template:ae,domain:ne}}),oe=(a("a2f0"),a("26b9")),se=a.n(oe),ie=a("c28b"),ce=a.n(ie),le=a("932e"),ue=a.n(le),me={color:"#0487af",failedColor:"#8d2828",thickness:"5px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0};n["a"].use(ue.a,{id:76507261,router:Y,env:"production","сlickmap":!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0}),n["a"].use(se.a,me),n["a"].use(ce.a),n["a"].config.productionTip=!1,Y.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?re.getters.loggedIn?a():a({name:"Login"}):e.matched.some((function(e){return e.meta.requiresVisitor}))&&re.getters.loggedIn?a({name:"Home"}):a()})),new n["a"]({router:Y,store:re,render:function(e){return e(K)}}).$mount("#app")},a2f0:function(e,t,a){}});