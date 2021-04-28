(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1148:function(t,e,i){"use strict";var n=i("a691"),s=i("1d80");t.exports="".repeat||function(t){var e=String(s(this)),i="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(i+=e);return i}},"2b9d":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fixed z-50 left-0 top-1 w-full flex justify-center"},[i("transition-group",{staticClass:"flex flex-col space-y-2",attrs:{name:"slide",tag:"div"}},t._l(t.notiProps,(function(e,n){return i("div",{key:e.id,staticClass:"container sm:w-96 w-full h-full bg-black bg-opacity-90 text-white rounded-md p-3 flex justify-between items-center",attrs:{role:"alert"}},[i("span",{staticClass:"text-sm"},[t._v(t._s(e.text))]),i("button",{staticClass:"manage w-6 py-1 h-full flex justify-center items-center rounded focus:outline-none hover:bg-gray-300 hover:text-gray-600 active:bg-gray-500",attrs:{type:"button"},on:{click:function(e){return t.close(n)}}},[i("svg",{staticClass:"h-4 w-4",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])})),0)],1)},s=[],a=(i("a434"),{name:"Notification",props:{notiProps:{type:Array,default:function(){return[]}}},methods:{close:function(t){this.$emit("close",t)},autoClose:function(){var t=this;setTimeout((function(){t.notiProps.length>0&&t.notiProps.splice(t.notiProps.length-1,1)}),4e3)}},watch:{notiProps:function(t){t.length&&this.autoClose()}}}),o=a,r=i("2877"),l=Object(r["a"])(o,n,s,!1,null,null,null);e["a"]=l.exports},"408a":function(t,e,i){var n=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"714b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fixed inset-0 z-30 flex items-end bg-black bg-opacity-75 overflow-auto sm:items-center sm:justify-center",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[i("div",{staticClass:"w-full px-8 py-4 z-50 overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-lg",attrs:{role:"dialog",id:"modal"}},[i("header",{staticClass:"flex justify-end"},[i("button",{staticClass:"inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded hover:text-gray-700",attrs:{"aria-label":"close"},on:{click:t.close}},[i("svg",{staticClass:"w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20",role:"img","aria-hidden":"true"}},[i("path",{attrs:{d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd","fill-rule":"evenodd"}})])])]),i("main",{staticClass:"mt-2 mb-4"},[i("header",{staticClass:"mb-3 text-xl font-medium text-black"},[t._t("header")],2),t._t("description")],2),i("footer",{staticClass:"flex items-center justify-end px-4 py-3 -mx-6 -mb-4 space-x-2 bg-gray-50"},[t._t("footer")],2)])])},s=[],a={name:"Modal",props:[],methods:{close:function(){this.$emit("close")}}},o=a,r=i("2877"),l=Object(r["a"])(o,n,s,!1,null,"81429002",null);e["a"]=l.exports},"7db0":function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").find,a=i("44d2"),o="find",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(o)},"962e":function(t,e,i){},a434:function(t,e,i){"use strict";var n=i("23e7"),s=i("23cb"),a=i("a691"),o=i("50c4"),r=i("7b0b"),l=i("65f0"),c=i("8418"),u=i("1dde"),d=u("splice"),p=Math.max,f=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var i,n,u,d,m,b,v=r(this),x=o(v.length),_=s(t,x),w=arguments.length;if(0===w?i=n=0:1===w?(i=0,n=x-_):(i=w-2,n=f(p(a(e),0),x-_)),x+i-n>h)throw TypeError(g);for(u=l(v,n),d=0;d<n;d++)m=_+d,m in v&&c(u,d,v[m]);if(u.length=n,i<n){for(d=_;d<x-n;d++)m=d+n,b=d+i,m in v?v[b]=v[m]:delete v[b];for(d=x;d>x-n+i;d--)delete v[d-1]}else if(i>n)for(d=x-n;d>_;d--)m=d+n-1,b=d+i-1,m in v?v[b]=v[m]:delete v[b];for(d=0;d<i;d++)v[d+_]=arguments[d+2];return v.length=x-n+i,u}})},b680:function(t,e,i){"use strict";var n=i("23e7"),s=i("a691"),a=i("408a"),o=i("1148"),r=i("d039"),l=1..toFixed,c=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},d=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},p=function(t,e,i){var n=-1,s=i;while(++n<6)s+=e*t[n],t[n]=s%1e7,s=c(s/1e7)},f=function(t,e){var i=6,n=0;while(--i>=0)n+=t[i],t[i]=c(n/e),n=n%e*1e7},h=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var n=String(t[e]);i=""===i?n:i+o.call("0",7-n.length)+n}return i},g=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){l.call({})}));n({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,i,n,r,l=a(this),c=s(t),g=[0,0,0,0,0,0],m="",b="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(e=d(l*u(2,69,1))-69,i=e<0?l*u(2,-e,1):l/u(2,e,1),i*=4503599627370496,e=52-e,e>0){p(g,0,i),n=c;while(n>=7)p(g,1e7,0),n-=7;p(g,u(10,n,1),0),n=e-1;while(n>=23)f(g,1<<23),n-=23;f(g,1<<n),p(g,1,1),f(g,2),b=h(g)}else p(g,0,i),p(g,1<<-e,0),b=h(g)+o.call("0",c);return c>0?(r=b.length,b=m+(r<=c?"0."+o.call("0",c-r)+b:b.slice(0,r-c)+"."+b.slice(r-c))):b=m+b,b}})},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("div",{staticClass:"flex flex-wrap mb-6"},[i("router-link",{staticClass:"inline-flex mr-4 mb-6 px-4 py-2 sm:w-44 sm:h-52 w-36 h-44 items-center text-lg text-white font-bold bg-white border border-gray-100 rounded-lg hover:opacity-90 transition-opacity duration-300",staticStyle:{"background-color":"rgb(4, 135, 175)"},attrs:{to:{name:"CreaterPage",hash:"#settings"}}},[i("svg",{staticClass:"w-6 h-6 mr-2",attrs:{viewBox:"0 0 10 10",fill:"white",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 6c0-1.10457.89543-2 2-2h8c0 1.10457-.89543 2-2 2H0z"}}),i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 0v8c0 1.10457-.89543 2-2 2V2c0-1.104569.89543-2 2-2z"}})]),i("span",[t._v("Создать страницу")])]),t._l(t.allPages,(function(e){return i("Card",{key:e.id,attrs:{pageProps:e},on:{deletePage:t.deletePage,duplicatePage:t.duplicatePage,copyLinkPage:t.copyLinkPage}})}))],2),t.isModalOpen?i("Modal",{on:{close:t.closeModal},scopedSlots:t._u([{key:"header",fn:function(){return[i("h2",[t._v("Удалить эту страницу?")])]},proxy:!0},{key:"description",fn:function(){return[i("p",{staticClass:"text-sm text-gray-700 pb-4"},[t._v(" Вы собираетесь удалить страницу. "),i("br"),t._v(" Она исчезнет навсегда, и мы не сможем ее вернуть. ")])]},proxy:!0},{key:"footer",fn:function(){return[i("button",{staticClass:"btn btn-cancel",on:{click:t.closeModal}},[t._v(" Отмена ")]),i("button",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.realyDelete(e)}}},[t._v(" "+t._s(t.textDeleting)+" ")])]},proxy:!0}],null,!1,4290981421)}):t._e(),i("Notification",{attrs:{notiProps:t.notiItems},on:{close:t.closeNotification}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"df pb-4"},[i("h1",{staticClass:"text-2xl font-normal mb-4",attrs:{id:"title"}},[t._v("Подписные страницы")])])}],a=i("5530"),o=(i("a434"),i("7db0"),i("b0c0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mr-4 mb-6 sm:w-44 sm:h-52 w-36 h-44 text-sm bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"},[i("router-link",{staticClass:"body-card rounded-t-lg flex flex-col items-center justify-center leading-4 h-3/4 p-4 overflow-hidden",attrs:{to:{name:"EditorPage",hash:"#settings",params:{url:t.pageProps.url}}}},[i("h4",{staticClass:"overflow-hidden max-w-full font-medium text-base leading-5",staticStyle:{"overflow-wrap":"break-word"}},[t._v(" "+t._s(t.pageProps.name)+" ")]),i("div",{staticClass:"inst max-w-full mt-1"},[i("span",{staticClass:"flex items-center justify-start"},[i("svg",{staticClass:"w-5 h-5 mr-2",attrs:{fill:"currentColor",viewBox:"0 0 50 50"}},[i("path",{attrs:{d:"M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"}})]),i("span",{staticClass:"overflow-hidden",staticStyle:{"overflow-wrap":"break-word"}},[t._v(t._s(t.pageProps.instagram))])])])]),i("div",{staticClass:"footer-card relative px-4 py-3 border-t text-gray-400 bg-opacity-75 flex flex-wrap"},[i("span",[i("span",{staticClass:"text-gray-800 font-semibold"},[t._v(t._s(t.ctr)+"%")]),t._v(" CTR")]),i("button",{staticClass:"absolute top-2 right-4 py-3 px-2 transition-colors duration-300 ease-in-out hover:bg-gray-100 rounded-md focus:outline-none",attrs:{"aria-label":"form item menu"},on:{click:t.openModal}},[i("svg",{attrs:{fill:"#898989",width:"14",height:"4",viewBox:"0 0 14 4"}},[i("g",{attrs:{transform:"rotate(90 7 7)","fill-rule":"evenodd"}},[i("circle",{attrs:{cx:"2",cy:"2",r:"1.5"}}),i("circle",{attrs:{cx:"2",cy:"7",r:"1.5"}}),i("circle",{attrs:{cx:"2",cy:"12",r:"1.5"}})])])]),t.isOpen?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticClass:"absolute z-20 bottom-3 left-32 w-44 bg-white py-1 rounded-lg shadow",on:{click:t.closeModal}},[i("div",{staticClass:"body-popap mb-1 text-black"},[i("div",{staticClass:"hover:bg-gray-200 cursor-pointer"},[i("a",{staticClass:"inline-flex items-center px-4 py-2",attrs:{href:t.linkToPage,target:"_blank"}},[i("span",[t._v("Открыть")]),i("svg",{staticClass:"ml-3",attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"#898989",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M6.448 0c0 .7365.597 1.3335 1.3335 1.3335h3.722L4.781 8.0555c.586.586 1.5355.586 2.1215 0l5.764-5.764V5.886c0 .7365.597 1.3335 1.3335 1.3335V0H6.448z"}}),i("path",{attrs:{d:"M9 11.288c0 .6655-.5415 1.207-1.207 1.207H2.707c-.6655 0-1.207-.5415-1.207-1.207V6.202c0-.6655.5415-1.207 1.207-1.207h2.4245l1.5-1.5H2.707C1.212 3.495 0 4.707 0 6.202v5.086c0 1.495 1.212 2.707 2.707 2.707h5.086c1.495 0 2.707-1.212 2.707-2.707V7.405L9 8.905v2.383z"}})])])]),i("div",{staticClass:"hover:bg-gray-200 cursor-pointer"},[i("router-link",{staticClass:"inline-block px-4 py-2",attrs:{to:{name:"PageStatistics",params:{id:t.pageProps.id,url:t.pageProps.url}}}},[i("span",[t._v("Статистика")])])],1),i("div",{staticClass:"hover:bg-gray-200 cursor-pointer"},[i("button",{staticClass:"inline-block px-4 py-2 focus:outline-none",on:{click:t.pageDuplicate}},[i("span",[t._v("Дублировать")])])]),i("div",{staticClass:"hover:bg-gray-200 cursor-pointer"},[i("button",{staticClass:"inline-block px-4 py-2 focus:outline-none",attrs:{type:"button"},on:{click:function(e){return t.copyLink(t.linkToPage)}}},[i("span",[t._v("Скопировать ссылку")])])])]),i("div",{staticClass:"footer-popap py-1 border-t text-red-700"},[i("div",{staticClass:"hover:bg-gray-200 cursor-pointer"},[i("button",{staticClass:"inline-block px-4 py-2 focus:outline-none",attrs:{type:"button"},on:{click:t.openDelete}},[i("span",[t._v("Удалить")])])])])]):t._e()])],1)}),r=[],l=(i("99af"),i("b680"),i("2f62")),c={name:"Card",props:{pageProps:{type:Object,default:function(){return{}}}},data:function(){return{isOpen:!1}},computed:Object(a["a"])(Object(a["a"])({},Object(l["c"])(["allTemplates","allDomains"])),{},{currentTemplate:function(){var t=this;return this.allTemplates?this.allTemplates.find((function(e){return e.id==t.pageProps.template_id})):{css_class:"template__01"}},currentDomain:function(){var t=this;if(this.allDomains){var e=this.allDomains.find((function(e){return e.id==t.pageProps.domain_id}));return e?e.url:"clturbine.site"}return"clturbine.site"},linkInst:function(){return"https://www.instagram.com/"+this.pageProps.instagram},linkToPage:function(){return"https://".concat(this.currentDomain,"/").concat(this.pageProps.url)},ctr:function(){return this.pageProps.count_podpis&&this.pageProps.count_prosmotr?(this.pageProps.count_podpis/this.pageProps.count_prosmotr).toFixed(2):0}}),methods:Object(a["a"])(Object(a["a"])({},Object(l["b"])(["API_GET_DOMAINS"])),{},{openDelete:function(){this.$emit("deletePage",this.pageProps.id)},pageDuplicate:function(){this.$emit("duplicatePage",this.pageProps.id)},copyLink:function(t){console.log(t),this.$emit("copyLinkPage",t)},openModal:function(){this.isOpen=!0},closeModal:function(){this.isOpen=!1},onClickOutside:function(){this.closeModal()}})},u=c,d=(i("c32e"),i("2877")),p=Object(d["a"])(u,o,r,!1,null,"a30b7a4e",null),f=p.exports,h=i("2b9d"),g=i("714b"),m={name:"Home",components:{Card:f,Notification:h["a"],Modal:g["a"]},data:function(){return{isModalOpen:!1,confirmDeletion:!1,idDelete:"",textDeleting:"Да, удалить",notiItems:[]}},computed:Object(a["a"])({},Object(l["c"])(["allPages"])),methods:Object(a["a"])(Object(a["a"])({},Object(l["b"])(["API_GET_PAGES","API_DELETE_PAGE","API_ADD_PAGE","API_GET_DOMAINS"])),{},{closeNotification:function(t){this.notiItems.splice(t,1)},deletePage:function(t){var e=this;this.isModalOpen=!0,this.idDelete=t,this.confirmDeletion&&(this.textDeleting="Удаление...",this.API_DELETE_PAGE(t).then((function(){e.closeModal(),e.confirmDeletion=!1,e.textDeleting="Да, удалить",e.notiItems.unshift({text:"Страница удалена",id:Date.now()})})))},duplicatePage:function(t){var e=this,i=this.allPages.find((function(e){return e.id==t}));if(i){var n=new FormData,s=JSON.stringify({name:i.name+"-copy"+Date.now()%7777,status:1,instagram:i.instagram,domain_id:i.domain_id,title_ad:i.title_ad,description_ad:i.description_ad,img_cover:i.img_cover,template_id:i.template_id,btn_ad:i.btn_ad,timer:i.timer,timer_text:i.timer_text,timer_sec:i.timer_sec,fb_pixel:i.fb_pixel,title_success:i.title_success,description_success:i.description_success,btn_success:i.btn_success,link_download:i.link_download});n.append("data",s),this.API_ADD_PAGE(n).then((function(){return e.API_GET_PAGES()}))}},copyLinkPage:function(t){var e=this;navigator.clipboard.writeText(t).then((function(){e.notiItems.unshift({text:"Ссылка скопирована",id:Date.now()})})).catch((function(t){console.log("Ошибка копирования ссылки",t)}))},openModal:function(t){this.modalOpen=t.target.name},closeModal:function(){this.isModalOpen=!1},realyDelete:function(){this.confirmDeletion=!0,this.deletePage(this.idDelete)}}),mounted:function(){var t=this;this.API_GET_PAGES().catch((function(e){return 401==e.status&&t.$router.push({name:"Login"})})),this.API_GET_DOMAINS()}},b=m,v=Object(d["a"])(b,n,s,!1,null,null,null);e["default"]=v.exports},c32e:function(t,e,i){"use strict";i("962e")}}]);