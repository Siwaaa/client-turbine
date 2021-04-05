(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a76e6880"],{"14c3":function(t,e,s){var a=s("c6b6"),i=s("9263");t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var r=s.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"259f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("main",{staticClass:"h-full flex pb-16 overflow-y-auto"},[a("form",{staticClass:"container px-6 mx-auto flex-grow",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("h4",{staticClass:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},[t._v(" Внутренние настройки ")]),a("div",{staticClass:"px-4 py-3 mb-8 bg-white rounded-lg shadow-md"},[a("label",{staticClass:"block text-sm"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],staticClass:"block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input",attrs:{type:"text",required:"",maxlength:"32",placeholder:"Client turbine"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("label",{staticClass:"block mt-4 text-sm"},[t._m(2),a("div",{staticClass:"relative flex mt-1"},[a("span",{staticClass:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"},[t._v(" http://domains/page/ ")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.url,expression:"url",modifiers:{trim:!0}}],staticClass:"block w-full text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input-two",attrs:{type:"text",required:"",maxlength:"20",placeholder:"polet-normalny"},domProps:{value:t.url},on:{change:t.checkUrl,input:function(e){e.target.composing||(t.url=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t.urlValid?t._e():a("span",{staticClass:"text-xs text-red-600"},[t._v(' Допустимые символы: "a-z", "0-9", "-", "_" ')])]),a("label",{staticClass:"block mt-4 text-sm"},[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.instagram,expression:"instagram"}],staticClass:"block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input",attrs:{type:"text",required:"",maxlength:"50",placeholder:"Bred Pit"},domProps:{value:t.instagram},on:{change:t.checkInst,input:function(e){e.target.composing||(t.instagram=e.target.value)}}}),t.instValid?t._e():a("span",{staticClass:"text-xs text-red-600"},[t._v(" "+t._s(t.instErrorText)+" ")])]),a("label",{staticClass:"block mt-4 text-sm"},[a("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v(" Домен ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.domain_id,expression:"domain_id"}],staticClass:"block w-full mt-1 form-select focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.domain_id=e.target.multiple?s:s[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Выберите один из вариантов")])])])]),a("h4",{staticClass:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},[t._v(" Страница приветствия ")]),a("div",{staticClass:"px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},[a("label",{staticClass:"block text-sm"},[t._m(4),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title_ad,expression:"title_ad"}],staticClass:"block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input",attrs:{type:"text",required:"",maxlength:"255",placeholder:"Подпишись"},domProps:{value:t.title_ad},on:{input:function(e){e.target.composing||(t.title_ad=e.target.value)}}})]),a("label",{staticClass:"block mt-4 text-sm"},[a("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v("Описание")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description_ad,expression:"description_ad"}],staticClass:"block w-full mt-1 text-sm form-textarea focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300",attrs:{type:"text",rows:"3",placeholder:"Тут братан нужно продать"},domProps:{value:t.description_ad},on:{input:function(e){e.target.composing||(t.description_ad=e.target.value)}}})]),a("label",{staticClass:"block mt-4 text-sm"},[a("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v("Картинка для обложки")]),a("label",{staticClass:"img-unload relative border-dashed border-2 border-gray-200 mt-1 w-full flex flex-col items-center px-4 py-6 rounded-lg cursor-pointer overflow-hidden"},[t.srcImg?a("div",{staticClass:"absolute top-0 w-full z-30"},[a("img",{staticClass:"w-full",attrs:{src:t.srcImg,alt:"backgroud"}}),a("span",{staticClass:"absolute top-3 right-3 inline-block px-3 py-1 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none z-40",on:{"!click":function(e){return t.deleteImg(e)}}},[t._v("Удалить")])]):t._e(),a("svg",{staticClass:"text-gray-500",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}})]),a("div",{staticClass:"flex text-sm text-gray-600"},[a("label",{staticClass:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none",attrs:{for:"file-upload"}},[a("span",[t._v("Загрузить файл")]),a("input",{staticClass:"sr-only",attrs:{id:"file-upload",name:"file-upload",type:"file",accept:"image/png,image/gif,image/jpeg,image/jpg","max-file-size":"5242880"},on:{change:t.setImg}})])]),a("p",{staticClass:"text-xs text-gray-500"},[t._v("PNG, JPG, GIF не более 5MB")])])]),a("label",{staticClass:"block mt-4 text-sm"},[a("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v(" Дизайн-шаблон ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.template_id,expression:"template_id"}],staticClass:"block w-full mt-1 form-select focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.template_id=e.target.multiple?s:s[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Выберите один из вариантов")]),t._l(t.allTemplates,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e.id)+" ")])}))],2)]),a("label",{staticClass:"block mt-4 text-sm"},[t._m(5),a("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_ad,expression:"btn_ad"}],staticClass:"block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input",attrs:{type:"text",required:"",maxlength:"30",placeholder:"Получить материал"},domProps:{value:t.btn_ad},on:{input:function(e){e.target.composing||(t.btn_ad=e.target.value)}}})]),a("label",{staticClass:"block mt-4 text-sm"},[a("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v("Facebook PIXEL")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fb_pixel,expression:"fb_pixel"}],staticClass:"block w-full mt-1 text-sm form-textarea focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300",attrs:{type:"text",rows:"3",placeholder:"Должно начинаться так: "},domProps:{value:t.fb_pixel},on:{input:function(e){e.target.composing||(t.fb_pixel=e.target.value)}}})])]),a("h4",{staticClass:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},[t._v(" Страница Успеха ")]),a("div",{staticClass:"px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},[a("label",{staticClass:"block text-sm"},[t._m(6),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title_success,expression:"title_success"}],staticClass:"block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input",attrs:{type:"text",required:"",maxlength:"60",placeholder:"Спасибо за подписку"},domProps:{value:t.title_success},on:{input:function(e){e.target.composing||(t.title_success=e.target.value)}}})]),a("label",{staticClass:"block mt-4 text-sm"},[a("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v(" Описание ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.description_success,expression:"description_success"}],staticClass:"block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input",attrs:{placeholder:"Описание"},domProps:{value:t.description_success},on:{input:function(e){e.target.composing||(t.description_success=e.target.value)}}})]),a("label",{staticClass:"block mt-4 text-sm"},[t._m(7),a("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_success,expression:"btn_success"}],staticClass:"block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input",attrs:{type:"text",required:"",maxlength:"40",placeholder:"Получить материалы"},domProps:{value:t.btn_success},on:{input:function(e){e.target.composing||(t.btn_success=e.target.value)}}})]),a("label",{staticClass:"block mt-4 text-sm"},[a("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v(" Ссылка на скачивание материала ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.link_download,expression:"link_download"}],staticClass:"block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input",attrs:{type:"text",required:"",placeholder:"http:/example.com/"},domProps:{value:t.link_download},on:{input:function(e){e.target.composing||(t.link_download=e.target.value)}}})])]),a("div",{staticClass:"flex justify-end"},[a("router-link",{staticClass:"inline-block mr-4 px-5 py-3 font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500",attrs:{to:{name:"Home"}}},[t._v(" Отменить ")]),a("button",{staticClass:"inline-block disabled:opacity-50 px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple",attrs:{type:"submit",disabled:t.disabled}},[t._v(" Сохранить ")])],1)]),a("section",{staticClass:"flex-none min-w-max w-5/12 hidden lg:block"},[a("div",{staticClass:"fixed 2xl:right-52 xl:right-32 right-16 w-56"},[a("div",{staticClass:"strelki mb-2 flex items-center justify-between"},[a("span",{staticClass:"text-lg font-semibold text-gray-600"},[t._v("Предпросмотр")]),a("div",{staticClass:"inline-flex bg-white text-gray-400 text-sm"},[a("button",{staticClass:"border border-gray-300 hover:text-gray-300 px-2 rounded-l focus:outline-none disabled:opacity-50",attrs:{disabled:1==t.slide},on:{click:t.prevSlide}},[a("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]),a("button",{staticClass:"border border-l-0 border-gray-300 hover:text-gray-300 px-2 rounded-r focus:outline-none disabled:opacity-50",attrs:{disabled:3==t.slide},on:{click:t.nextSlide}},[a("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])]),a("div",{staticClass:"phone w-full rounded-xl overflow-x-hidden shadow-lg",staticStyle:{height:"30rem"}},[1==t.slide?a("div",{staticClass:"template__01 pb-6 relative min-h-full",class:t.currentTemplate.css_class},[a("div",{staticClass:"img w-full overflow-hidden size z-20"},[a("img",{staticClass:"w-full",attrs:{src:t.srcImg}})]),a("header",{staticClass:"mt-4 px-4"},[a("h1",{staticClass:"text-xl font-semibold"},[t._v(t._s(t.title_ad))])]),a("main",{staticClass:"mt-4 px-4 flex flex-col text-xs"},[a("div",{staticClass:"decription"},[t._v(" "+t._s(t.description_ad)+" ")]),a("button",{staticClass:"btn-color inline-block mx-auto my-6 px-4 py-2 font-medium transition-all duration-300 rounded-lg focus:outline-none"},[t._v(" "+t._s(t.btn_ad)+" ")]),a("label",{staticClass:"inline-block absolute bottom-2 inset-x-0 text-center"},[t._v("Сделано в "),a("router-link",{attrs:{to:""}},[t._v("ClientTurbine")])],1)])]):2==t.slide?a("div",{staticClass:"py-6 px-4 relative min-h-full text-xs",class:t.currentTemplate.css_class},[a("div",{staticClass:"inst w-full flex items-center flex-col"},[a("img",{staticClass:"h-10 overflow-hidden",attrs:{src:s("ecb2"),alt:"avatar"}}),a("h4",{staticClass:"font-bold mt-2"},[t._v("Full name")]),a("span",{staticClass:"flex items-center"},[a("svg",{staticClass:"inline mr-2",attrs:{viewBox:"0 0 48 48",width:"24px",height:"24px"}},[a("radialGradient",{attrs:{id:"yOrnnhliCrdS2gy~4tD8ma",cx:"19.38",cy:"42.035",r:"44.899",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{offset:"0","stop-color":"#fd5"}}),a("stop",{attrs:{offset:".328","stop-color":"#ff543f"}}),a("stop",{attrs:{offset:".348","stop-color":"#fc5245"}}),a("stop",{attrs:{offset:".504","stop-color":"#e64771"}}),a("stop",{attrs:{offset:".643","stop-color":"#d53e91"}}),a("stop",{attrs:{offset:".761","stop-color":"#cc39a4"}}),a("stop",{attrs:{offset:".841","stop-color":"#c837ab"}})],1),a("path",{attrs:{fill:"url(#yOrnnhliCrdS2gy~4tD8ma)",d:"M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20\tc-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20\tC42.014,38.383,38.417,41.986,34.017,41.99z"}}),a("radialGradient",{attrs:{id:"yOrnnhliCrdS2gy~4tD8mb",cx:"11.786",cy:"5.54",r:"29.813",gradientTransform:"matrix(1 0 0 .6663 0 1.849)",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{offset:"0","stop-color":"#4168c9"}}),a("stop",{attrs:{offset:".999","stop-color":"#4168c9","stop-opacity":"0"}})],1),a("path",{attrs:{fill:"url(#yOrnnhliCrdS2gy~4tD8mb)",d:"M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20\tc-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20\tC42.014,38.383,38.417,41.986,34.017,41.99z"}}),a("path",{attrs:{fill:"#fff",d:"M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5\ts2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"}}),a("circle",{attrs:{cx:"31.5",cy:"16.5",r:"1.5",fill:"#fff"}}),a("path",{attrs:{fill:"#fff",d:"M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12\tC37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"}})],1),t._v(t._s(t.instagram)+" ")])]),a("main",{staticClass:"mt-12"},[t.checkFirstScreen?a("form",{staticClass:"input-container w-full mt-4 text-center",on:{submit:function(t){t.preventDefault()}}},[a("h2",{staticClass:"font-bold text-sm leading-4"},[t._v(" Введите ваш логин инстаграма для проверки подписки: ")]),a("input",{staticClass:"w-full form-input mt-6 text-black focus:outline-none",staticStyle:{"line-height":"1"},attrs:{type:"text",maxlength:"24",required:""}}),a("button",{staticClass:"btn-color inline-block w-full mt-2 px-4 py-2 font-medium transition-colors duration-150 rounded-lg focus:outline-none",attrs:{type:"button"}},[t._v(" Проверить ")]),a("a",{staticClass:"inline-block w-full mt-2 underline",on:{click:function(e){e.preventDefault(),t.checkFirstScreen=!1}}},[t._v(" Не подписан? ")])]):a("form",{staticClass:"input-container w-full mt-4 text-center"},[a("h2",{staticClass:"font-bold text-sm leading-4"},[t._v(" Подпишись на мой инстаграм и ссылка для скачивания материалов станет доступна ")]),a("a",{staticClass:"btn-color inline-block w-full mt-6 px-4 py-2 font-medium transition-colors duration-150 rounded-lg focus:outline-none",attrs:{href:"#"}},[t._v(" Подписаться ")]),a("button",{staticClass:"inline w-full mt-2 underline",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.checkFirstScreen=!0}}},[t._v(" Я подписался ")])]),a("label",{staticClass:"inline-block absolute bottom-2 inset-x-0 text-center"},[t._v("Сделано в "),a("router-link",{attrs:{to:""}},[t._v("ClientTurbine")])],1)])]):3==t.slide?a("div",{staticClass:"px-4 relative text-xs min-h-full flex items-center",class:t.currentTemplate.css_class},[a("div",{staticClass:"card flex flex-col w-full items-center p-4 rounded-lg bg-white bg-opacity-10 shadow-2xl"},[a("h4",{staticClass:"mb-4 font-semibold"},[t._v(t._s(t.title_success))]),a("p",{},[t._v(" "+t._s(t.description_success)+" ")]),a("a",{staticClass:"btn-color inline-block mx-auto mt-6 px-4 py-2 font-medium transition-colors duration-150 rounded-lg focus:outline-none",attrs:{href:"#"}},[t._v(t._s(t.btn_success)+" ")])])]):t._e()])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"pb-4 mb-4"},[s("h1",{staticClass:"text-4xl font-semibold"},[t._v("Редактирование страницы")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v("Название "),s("span",{staticClass:"text-purple-700"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v("Ссылка на страницу "),s("span",{staticClass:"text-purple-700"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v("Ник в Instagram "),s("span",{staticClass:"text-purple-700"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v("Заголовок "),s("span",{staticClass:"text-purple-700"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v("Текст на кнопке "),s("span",{staticClass:"text-purple-700"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v(" Заголовок "),s("span",{staticClass:"text-purple-700"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-gray-700 dark:text-gray-400"},[t._v(" Текст на кнопке "),s("span",{staticClass:"text-purple-700"},[t._v("*")])])}],r=s("5530"),l=(s("7db0"),s("466d"),s("ac1f"),s("d3b7"),s("b0c0"),s("99af"),s("2f62")),n={name:"PageEdit",data:function(){return{id:"",name:"",url:"",instagram:"",domain_id:"",title_ad:"",description_ad:"",img_cover:"",template_id:"",btn_ad:"",timer:"",fb_pixel:"",title_success:"",description_success:"",btn_success:"",link_download:"",urlValid:!0,instValid:!0,instErrorText:"",urlAPI:"https://api.client-turbine.ru",srcImg:null,slide:1,checkFirstScreen:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])(["allPages","allTemplates"])),{},{searchPageObj:function(){var t=this;return this.allPages.find((function(e){return e.url==t.$route.params.url}))},disabled:function(){return Boolean(!(this.urlValid&&this.instValid))},currentTemplate:function(){var t=this;return this.allTemplates?this.allTemplates.find((function(e){return e.id==t.template_id})):{css_class:"template__01"}}}),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["API_UPDATE_PAGE","API_GET_TEMPLATES"])),{},{prevSlide:function(){this.slide>1&&this.slide--},nextSlide:function(){this.slide<3&&this.slide++},checkUrl:function(t){var e=t.target.value.match(/[a-z0-9_-]/g);e&&e.length==t.target.value.length?this.urlValid=!0:this.urlValid=!1},checkInst:function(t){var e=this,s=t.target.value,a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({inst:s})};fetch("".concat(this.urlAPI,"/api/check-inst"),a).then((function(t){return t.json()})).then((function(t){t.success?t.data.is_private?(e.instErrorText="Аккаунт закрытый, необходимо перевести в открытый",e.instValid=!1):e.instValid=!0:(e.instValid=!1,e.instErrorText="Аккаунт не найден")}))},setImg:function(t){var e=this,s=t.target.files[0];if(console.log(s),s&&s.size/1024/1024<5){var a=new FileReader;a.onload=function(t){e.srcImg=t.target.result},a.readAsDataURL(s),this.img_cover=s}else alert("Файл больше 5 MB. Попробуйте сжать")},deleteImg:function(t){t.preventDefault(),this.srcImg=null},submit:function(){var t=new FormData;t.append("_method","PUT"),t.append("img_cover",this.img_cover);var e=JSON.stringify({id:this.id,name:this.name,status:1,url:this.url,instagram:this.instagram,domain_id:this.domain_id,title_ad:this.title_ad,description_ad:this.description_ad,img_cover:this.srcImg?this.img_cover.name:null,template_id:this.template_id,btn_ad:this.btn_ad,timer:this.timer,fb_pixel:this.fb_pixel,title_success:this.title_success,description_success:this.description_success,btn_success:this.btn_success,link_download:this.link_download});t.append("data",e),this.API_UPDATE_PAGE(t),this.$router.push({name:"Home"})}}),created:function(){var t=this;if(this.id=this.searchPageObj.id,this.name=this.searchPageObj.name,this.url=this.searchPageObj.url,this.instagram=this.searchPageObj.instagram,this.domain_id=this.searchPageObj.domain_id,this.title_ad=this.searchPageObj.title_ad,this.description_ad=this.searchPageObj.description_ad,this.img_cover=this.searchPageObj.img_cover,this.template_id=this.searchPageObj.template_id,this.btn_ad=this.searchPageObj.btn_ad,this.timer=this.searchPageObj.timer,this.fb_pixel=this.searchPageObj.fb_pixel,this.title_success=this.searchPageObj.title_success,this.description_success=this.searchPageObj.description_success,this.btn_success=this.searchPageObj.btn_success,this.link_download=this.searchPageObj.link_download,this.searchPageObj.img_cover){var e={method:"GET",headers:{"Content-Type":"application/json"}};fetch("".concat(this.urlAPI,"/api/").concat(this.searchPageObj.url,"/img"),e).then((function(t){return t.json()})).then((function(e){e.success&&(t.srcImg=e.img)}))}else this.srcImg=null},mounted:function(){this.API_GET_TEMPLATES()}},o=n,c=s("2877"),u=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=u.exports},"466d":function(t,e,s){"use strict";var a=s("d784"),i=s("825a"),r=s("50c4"),l=s("1d80"),n=s("8aa5"),o=s("14c3");a("match",1,(function(t,e,s){return[function(e){var s=l(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s):new RegExp(e)[t](String(s))},function(t){var a=s(e,t,this);if(a.done)return a.value;var l=i(t),c=String(this);if(!l.global)return o(l,c);var u=l.unicode;l.lastIndex=0;var d,p=[],m=0;while(null!==(d=o(l,c))){var f=String(d[0]);p[m]=f,""===f&&(l.lastIndex=n(c,r(l.lastIndex),u)),m++}return 0===m?null:p}]}))},"7db0":function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").find,r=s("44d2"),l="find",n=!0;l in[]&&Array(1)[l]((function(){n=!1})),a({target:"Array",proto:!0,forced:n},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(l)},"8aa5":function(t,e,s){"use strict";var a=s("6547").charAt;t.exports=function(t,e,s){return e+(s?a(t,e).length:1)}},9263:function(t,e,s){"use strict";var a=s("ad6d"),i=s("9f7f"),r=RegExp.prototype.exec,l=String.prototype.replace,n=r,o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||c;d&&(n=function(t){var e,s,i,n,d=this,p=c&&d.sticky,m=a.call(d),f=d.source,g=0,x=t;return p&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),x=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(f="(?: "+f+")",x=" "+x,g++),s=new RegExp("^(?:"+f+")",m)),u&&(s=new RegExp("^"+f+"$(?!\\s)",m)),o&&(e=d.lastIndex),i=r.call(p?s:d,x),p?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&l.call(i[0],s,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(i[n]=void 0)})),i}),t.exports=n},"9f7f":function(t,e,s){"use strict";var a=s("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,s){"use strict";var a=s("23e7"),i=s("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,s){"use strict";var a=s("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,s){"use strict";s("ac1f");var a=s("6eeb"),i=s("d039"),r=s("b622"),l=s("9263"),n=s("9112"),o=r("species"),c=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),m=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2!==s.length||"a"!==s[0]||"b"!==s[1]}));t.exports=function(t,e,s,d){var f=r(t),g=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),x=g&&!i((function(){var e=!1,s=/a/;return"split"===t&&(s={},s.constructor={},s.constructor[o]=function(){return s},s.flags="",s[f]=/./[f]),s.exec=function(){return e=!0,null},s[f](""),!e}));if(!g||!x||"replace"===t&&(!c||!u||p)||"split"===t&&!m){var v=/./[f],h=s(f,""[t],(function(t,e,s,a,i){return e.exec===l?g&&!i?{done:!0,value:v.call(e,s,a)}:{done:!0,value:t.call(s,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=h[0],_=h[1];a(String.prototype,t,b),a(RegExp.prototype,f,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&n(RegExp.prototype[f],"sham",!0)}},ecb2:function(t,e,s){t.exports=s.p+"img/ava.94689b45.svg"}}]);