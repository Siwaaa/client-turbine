(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e1d756ba","chunk-014ae392":"8032943d","chunk-020b0504":"2134be73","chunk-02dbe9cc":"fd04e88e","chunk-2d0b37ff":"a1bf9890","chunk-2d0d6d35":"2823feae","chunk-a5307ae8":"4a17f781","chunk-d457d5e8":"fb2d5643","chunk-f97f1a04":"17a82083"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-02dbe9cc":1,"chunk-a5307ae8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"5049e2e5","chunk-014ae392":"31d6cfe0","chunk-020b0504":"31d6cfe0","chunk-02dbe9cc":"41dc9b5f","chunk-2d0b37ff":"31d6cfe0","chunk-2d0d6d35":"31d6cfe0","chunk-a5307ae8":"41dc9b5f","chunk-d457d5e8":"31d6cfe0","chunk-f97f1a04":"31d6cfe0"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){l=m[i],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],d.parentNode.removeChild(d),n(s)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var m=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[this.$route.meta.layout?n(e.currentTabComponent,{tag:"component"}):e._e(),n("vue-progress-bar")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex h-screen bg-gray-50",class:{"overflow-hidden":e.isSideMenuOpen}},[n("aside",{staticClass:"z-20 hidden w-60 overflow-y-auto border-r bg-white md:block flex-shrink-0"},[n("div",{staticClass:"text-gray-600 h-full"},[n("router-link",{staticClass:"inline-block relative pl-6 py-3 md:h-14 w-full text-lg font-semibold text-gray-800 border-b",attrs:{to:{name:"Home"}}},[e._v(" Client Turbine ")]),n("ul",{staticClass:"mt-10"},[n("li",[n("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Home"},"active-class":"bg-gray-100 text-black"}},[n("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[n("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}})]),n("span",{staticClass:"ml-4"},[e._v("Страницы")])])])],1),n("li",[n("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Domains"},exact:"","active-class":"bg-gray-100 text-black"}},[n("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}})]),n("span",{staticClass:"ml-4"},[e._v("Домены")])])])],1),n("li",[n("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Settings"},exact:"","active-class":"bg-gray-100 text-black"}},[n("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}}),n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}})]),n("span",{staticClass:"ml-4"},[e._v("Настройки")])])])],1)]),n("button",{staticClass:"inline-block fixed border-t bottom-0 w-60 px-6 py-3",on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[n("span",{staticClass:"inline-flex items-center w-full text-sm font-medium transition-colors duration-300 hover:text-gray-800"},[n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})]),n("span",{staticClass:"ml-2"},[e._v("Выход")])])])],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isSideMenuOpen,expression:"isSideMenuOpen"}],staticClass:"fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center",on:{click:e.closeSideMenu}}),n("aside",{directives:[{name:"show",rawName:"v-show",value:e.isSideMenuOpen,expression:"isSideMenuOpen"}],staticClass:"fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"},[n("div",{staticClass:"py-4 text-gray-500 dark:text-gray-400"},[n("router-link",{staticClass:"ml-6 text-lg font-bold text-gray-800 dark:text-gray-200",attrs:{to:"/"}},[e._v(" Client Turbine ")]),n("ul",[n("li",[n("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Home"},exact:"","active-class":"bg-gray-100 text-black"}},[n("span",{staticClass:"inline-flex items-center w-full text-sm font-medium transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200"},[n("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}})]),n("span",{staticClass:"ml-4"},[e._v("Страницы")])])])],1),n("li",[n("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Domains"},exact:"","active-class":"bg-gray-100 text-black"}},[n("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}})]),n("span",{staticClass:"ml-4"},[e._v("Домены")])])])],1),n("li",[n("router-link",{staticClass:"inline-block w-full relative px-6 py-3 transition-all duration-300 hover:text-gray-800 hover:bg-gray-200",attrs:{to:{name:"Settings"},exact:"","active-class":"bg-gray-100 text-black"}},[n("span",{staticClass:"inline-flex items-center w-full text-sm font-medium"},[n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}}),n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}})]),n("span",{staticClass:"ml-4"},[e._v("Настройки")])])])],1)]),n("button",{staticClass:"inline-block fixed border-t bottom-0 w-64 px-6 py-3",on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[n("span",{staticClass:"inline-flex items-center w-full text-sm font-medium transition-colors duration-300 hover:text-gray-800"},[n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})]),n("span",{staticClass:"ml-2"},[e._v("Выход")])])])],1)]),n("div",{staticClass:"flex flex-col flex-1 w-full"},[n("header",{staticClass:"z-10 md:h-14 py-4 bg-white border-b"},[n("div",{staticClass:"container mx-auto h-full w-full flex items-center md:justify-end justify-between px-6"},[n("button",{staticClass:"p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple",attrs:{"aria-label":"Menu"},on:{click:e.toggleSideMenu}},[n("svg",{staticClass:"w-6 h-6",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])]),n("div",{staticClass:"flex items-center text-sm font-medium"},[n("div",{staticClass:"ava relative flex items-center justify-center w-8 h-8 mr-3 rounded-full shadow-sm"},[n("span",{staticClass:"font-bold text-lg text-white"},[e._v(e._s(e.name?e.name[0].toUpperCase():"C"))])]),n("div",{staticClass:"hidden md:block"},[n("p",{staticClass:"text-gray-800"},[e._v(e._s(e.name))])])])])]),n("main",{staticClass:"h-full overflow-y-auto"},[n("div",{staticClass:"container mx-auto px-6 md:py-10 py-8 grid"},[n("router-view")],1)])])])},i=[],c=n("5530"),l=n("2f62"),u={name:"DashboardLayout",data:function(){return{isModalOpen:!1,isSideMenuOpen:!1,isProfileMenuOpen:!1,isPagesMenuOpen:!1,isNotificationsMenuOpen:!1,dark:!1,trapCleanup:null}},computed:Object(c["a"])({},Object(l["c"])(["name"])),methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["destroyToken"])),{},{logout:function(){var e=this;this.destroyToken().then((function(){e.$router.push({name:"Login"})}))},openModal:function(){this.isModalOpen=!0},closeModal:function(){this.isModalOpen=!1},toggleTheme:function(){this.dark=!this.dark},toggleSideMenu:function(){this.isSideMenuOpen=!this.isSideMenuOpen},closeSideMenu:function(){this.isSideMenuOpen=!1},toggleProfileMenu:function(){this.isProfileMenuOpen=!this.isProfileMenuOpen},closeProfileMenu:function(){this.isProfileMenuOpen=!1},togglePagesMenu:function(){this.isPagesMenuOpen=!this.isPagesMenuOpen},toggleNotificationsMenu:function(){this.isNotificationsMenuOpen=!this.isNotificationsMenuOpen}}),mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,n,a){e.$Progress.start(),a()})),this.$router.afterEach((function(){e.$Progress.finish()}))}},m=u,d=n("2877"),h=Object(d["a"])(m,s,i,!1,null,null,null),f=h.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full min-h-screen bg-gray-50"},[n("header",{staticClass:"w-full h-12 flex justify-between border-b bg-white px-4"},[n("router-link",{staticClass:"back flex items-center hover:text-gray-900 text-gray-500",attrs:{to:{name:"Home"}}},[n("span",{staticClass:"mr-3"},[n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})])]),n("span",{staticClass:"font-medium text-sm"},[e._v("Главная")])]),n("div",{staticClass:"flex items-center text-sm font-medium"},[n("div",{staticClass:"ava relative flex items-center justify-center w-8 h-8 mr-3 rounded-full shadow-sm "},[n("span",{staticClass:"font-bold text-lg text-white"},[e._v(e._s(e.name?e.name[0].toUpperCase():"C"))])]),n("div",{staticClass:"hidden md:block"},[n("p",{staticClass:"text-gray-800"},[e._v(e._s(e.name))])])])],1),n("main",{staticClass:"overflow-hidden",staticStyle:{height:"calc(100vh - 3rem)"}},[n("router-view")],1)])},g=[],v={name:"EditorLayout",computed:Object(c["a"])({},Object(l["c"])(["name"]))},b=v,k=Object(d["a"])(b,p,g,!1,null,null,null),x=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center items-center h-full overflow-hidden min-h-screen sm:px-4 py-8 bg-gray-50"},[n("router-view")],1)},y=[],_={name:"ErrorLayout",mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,n,a){e.$Progress.start(),a()})),this.$router.afterEach((function(){e.$Progress.finish()}))}},C=_,P=Object(d["a"])(C,w,y,!1,null,null,null),A=P.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col items-center min-h-screen sm:px-4 py-8 bg-gray-50"},[e._m(0),n("div",{staticClass:"h-full mt-10 mx-auto overflow-hidden"},[n("router-view")],1)])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"mt-10"},[n("a",{staticClass:"uppercase font-bold",attrs:{href:"http://"}},[e._v(" Client Turbine ")])])}],j={name:"LoginLayout",mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,n,a){e.$Progress.start(),a()})),this.$router.afterEach((function(){e.$Progress.finish()}))}},I=j,M=Object(d["a"])(I,S,O,!1,null,null,null),E=M.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col\titems-center min-h-screen md:p-6 md:bg-gray-50"},[n("router-view"),n("vue-progress-bar")],1)},$=[],N={name:"UserLayout",mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,n,a){e.$Progress.start(),a()})),this.$router.afterEach((function(){e.$Progress.finish()}))}},D=N,R=Object(d["a"])(D,T,$,!1,null,null,null),B=R.exports,L={name:"App",components:{DashboardLayout:f,EditorLayout:x,LoginLayout:E,UserLayout:B,ErrorLayout:A},computed:{currentTabComponent:function(){return(this.$route.meta.layout||"dashboard")+"-layout"}},methods:{}},z=L,U=Object(d["a"])(z,r,o,!1,null,null,null),H=U.exports,G=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["a"].use(G["a"]);var q=[{path:"/",redirect:{name:"Home"}},{path:"/dashboard",name:"Home",meta:{layout:"dashboard",requiresAuth:!0},component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/login",name:"Login",meta:{layout:"login",requiresVisitor:!0},component:function(){return n.e("chunk-020b0504").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",meta:{layout:"login",requiresVisitor:!0},component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{path:"/page/create",name:"CreaterPage",meta:{layout:"editor",requiresAuth:!0},component:function(){return n.e("chunk-02dbe9cc").then(n.bind(null,"dad9"))}},{path:"/page/edit/:url",name:"EditorPage",meta:{layout:"editor",requiresAuth:!0},component:function(){return n.e("chunk-a5307ae8").then(n.bind(null,"4634"))}},{path:"/page/:url/statistics",name:"PageStatistics",meta:{layout:"dashboard",requiresAuth:!0},component:function(){return n.e("chunk-d457d5e8").then(n.bind(null,"0b1c"))}},{path:"/settings",name:"Settings",meta:{layout:"dashboard",requiresAuth:!0},component:function(){return n.e("chunk-f97f1a04").then(n.bind(null,"26d3"))}},{path:"/domains",name:"Domains",meta:{layout:"dashboard",requiresAuth:!0},component:function(){return n.e("chunk-014ae392").then(n.bind(null,"fe90"))}},{path:"*",meta:{layout:"error",requiresAuth:!0},component:function(){return n.e("chunk-2d0b37ff").then(n.bind(null,"2946"))}}],J=new G["a"]({mode:"history",base:"/",routes:q}),V=J,F=n("1da1"),K=(n("96cf"),n("99af"),{state:{pages:JSON.parse(localStorage.getItem("pages_arr"))||null},mutations:{updatePageAll:function(e,t){e.pages=t},addPage:function(e,t){e.pages.unshift(t)}},actions:{API_GET_PAGES:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,r="",!t){a.next=8;break}return a.next=5,fetch("".concat(n.state.urlAPI,"/api/pages"),{headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}});case 5:r=a.sent,a.next=11;break;case 8:return a.next=10,fetch("".concat(n.state.urlAPI,"/api/pages"),{headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}});case 10:r=a.sent;case 11:return a.next=13,r.json();case 13:o=a.sent.data,o&&(localStorage.setItem("pages_arr",JSON.stringify(o)),e.commit("updatePageAll",o)),a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](0),alert("Данные с сервера не получены");case 20:case"end":return a.stop()}}),a,null,[[0,17]])})))()},API_ADD_PAGE:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r=JSON.parse(t.get("data")),a.next=4,fetch("".concat(n.state.urlAPI,"/api/pages"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")},body:t}).then((function(){return e.commit("addPage",r)}));case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),alert(a.t0,"Андрей, исправь");case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},API_UPDATE_PAGE:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r=JSON.parse(t.get("data")),a.next=4,fetch("".concat(n.state.urlAPI,"/api/pages/").concat(r.id),{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("access_token")},body:t}).then((function(){return e.dispatch("API_GET_PAGES")}));case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),alert(a.t0,"Андрей, исправь");case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},API_DELETE_PAGE:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat(n.state.urlAPI,"/api/pages/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(){return e.dispatch("API_GET_PAGES")}));case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),alert(a.t0,"Андрей, исправь");case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()}},getters:{allPages:function(e){return e.pages}}}),Q=(n("b0c0"),{state:{token:localStorage.getItem("access_token")||null,name:localStorage.getItem("name_user")||"Пупсик",email:localStorage.getItem("email_user")||null,created_at:localStorage.getItem("created_at_user")||null},mutations:{tokenUpdate:function(e,t){e.token=t},nameUpdate:function(e,t){e.name=t},emailUpdate:function(e,t){e.email=t},createdUpdate:function(e,t){e.created_at=t},destroyTokenAndName:function(e){e.token=null,e.name=null},destroyPages:function(){this.state.page.pages=null}},actions:{registerToken:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(n.state.urlAPI,"/api/register"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){var n=t.token;n&&(localStorage.setItem("access_token",n),e.commit("tokenUpdate",n));var a=t.name;a&&(localStorage.setItem("name_user",a),e.commit("nameUpdate",a));var r=t.email;r&&(localStorage.setItem("email_user",r),e.commit("emailUpdate",r));var o=t.created_at;o&&(localStorage.setItem("created_at_user",o),e.commit("createdUpdate",o))})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})))()},getToken:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(n.state.urlAPI,"/api/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){var n=t.token;n&&(localStorage.setItem("access_token",n),e.commit("tokenUpdate",n));var a=t.name;a&&(localStorage.setItem("name_user",a),e.commit("nameUpdate",a));var r=t.email;r&&(localStorage.setItem("email_user",r),e.commit("emailUpdate",r));var o=t.created_at;o&&(localStorage.setItem("created_at_user",o),e.commit("createdUpdate",o))})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})))()},destroyToken:function(e){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t.state.urlAPI,"/api/logout"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(){localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})))()},updateNameAndEmail:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(n.state.urlAPI,"/api/user/id"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")},body:JSON.stringify(t)}).then((function(){var n=t.name;n&&(localStorage.setItem("name_user",n),e.commit("nameUpdate",n));var a=t.email;a&&(localStorage.setItem("email_user",a),e.commit("emailUpdate",a))}),(function(e){alert("Ошибка смены имени и пароля",e)}));case 2:case"end":return a.stop()}}),a)})))()},changePassword:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(n.state.urlAPI,"/api/user/pas"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")},body:JSON.stringify(t)}).then((function(){localStorage.removeItem("access_token"),localStorage.removeItem("name_user"),localStorage.removeItem("email_user"),localStorage.removeItem("created_at_user"),localStorage.removeItem("pages_arr"),e.commit("destroyTokenAndName"),e.commit("destroyPages")}),(function(e){alert("Ошибка смены пароля",e)}));case 2:case"end":return a.stop()}}),a)})))()}},getters:{token:function(e){return e.token},name:function(e){return e.name},email:function(e){return e.email},created_at:function(e){return e.created_at},loggedIn:function(e){return null!==e.token}}}),W={state:{templates:null},mutations:{updateTemplateAll:function(e,t){e.templates=t}},actions:{API_GET_TEMPLATES:function(e){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t.state.urlAPI,"/api/templates"),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}});case 2:return a=n.sent,n.next=5,a.json();case 5:r=n.sent.data,r&&e.commit("updateTemplateAll",r);case 7:case"end":return n.stop()}}),n)})))()}},getters:{allTemplates:function(e){return e.templates}}},X={state:{domains:null},mutations:{updateDomainAll:function(e,t){e.domains=t},addDomain:function(e,t){e.domains.unshift(t)}},actions:{API_GET_DOMAINS:function(e){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t.state.urlAPI,"/api/domains"),{headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){var n=t.data;n&&e.commit("updateDomainAll",n)})).catch((function(e){throw alert("Ошибка загрузки доменов"),e}));case 2:case"end":return n.stop()}}),n)})))()},API_ADD_DOMAIN:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(n.state.urlAPI,"/api/domains"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")},body:JSON.stringify(t)}).then((function(n){return n.ok?e.dispatch("API_GET_DOMAINS",t):Promise.reject(n)})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})))()},API_UPDATE_DOMAIN:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(n.state.urlAPI,"/api/domains/").concat(t),{method:"PATCH",headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(t){return t.ok?e.dispatch("API_GET_DOMAINS"):Promise.reject(t)})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})))()},API_DELETE_DOMAIN:function(e,t){var n=this;return Object(F["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(n.state.urlAPI,"/api/domains/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}}).then((function(t){return t.ok?e.dispatch("API_GET_DOMAINS"):Promise.reject(t)})).catch((function(e){throw e}));case 2:case"end":return a.stop()}}),a)})))()}},getters:{allDomains:function(e){return e.domains}}};a["a"].use(l["a"]);var Y=new l["a"].Store({state:{urlAPI:"https://api.client-turbine.ru"},mutations:{},actions:{},modules:{page:K,auth:Q,template:W,domain:X}}),Z=(n("a2f0"),n("26b9")),ee=n.n(Z),te=n("c28b"),ne=n.n(te),ae={color:"#0487af",failedColor:"#8d2828",thickness:"5px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0};a["a"].use(ee.a,ae),a["a"].use(ne.a),a["a"].config.productionTip=!1,V.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?Y.getters.loggedIn?n():n({name:"Login"}):e.matched.some((function(e){return e.meta.requiresVisitor}))&&Y.getters.loggedIn?n({name:"Home"}):n()})),new a["a"]({router:V,store:Y,render:function(e){return e(H)}}).$mount("#app")},a2f0:function(e,t,n){}});