(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20916f"],{a824:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full lg:w-3/4 mx-auto sm:overflow-visible overflow-hidden"},[t._m(0),s("main",[s("div",{staticClass:"mb-8 bg-white rounded-lg shadow-md overflow-auto"},[s("table",{staticClass:"w-full whitespace-no-wrap rounded-lg overflow-hidden"},[t._m(1),s("tbody",{staticClass:"bg-white divide-y"},t._l(t.allPayments,(function(e,a){return s("tr",{key:e.id,staticClass:"text-gray-700 text-sm"},[s("td",{staticClass:"px-4 py-3 text-xs"},[s("span",[t._v(t._s(++a))])]),s("td",{staticClass:"px-4 py-3 "},[s("p",[t._v(t._s("invoice"===e.type?"Пополнение":"Бонусы"))])]),s("td",{staticClass:"px-4 py-3"},[s("p",[t._v(t._s(e.date))])]),s("td",{staticClass:"px-4 py-3 "},[s("p",[t._v(t._s(e.value))])]),s("td",{staticClass:"px-4 py-3 "},["succeeded"===e.status?s("span",{staticClass:"\n                  px-2\n                  py-1\n                  font-semibold\n                  leading-tight\n                  text-green-700\n                  bg-green-100\n                  rounded-full\n                "},[t._v(" Успешно ")]):"canceled"===e.status?s("span",{staticClass:"\n                  px-2\n                  py-1\n                  font-semibold\n                  leading-tight\n                  text-red-700\n                  bg-red-100\n                  rounded-full\n                "},[t._v(" Отменен ")]):"pending"===e.status?s("span",{staticClass:"\n                  px-2\n                  py-1\n                  font-semibold\n                  leading-tight\n                  text-yellow-700\n                  bg-yellow-100\n                  rounded-full\n                "},[t._v(" Обработка ")]):t._e()])])})),0)]),t.allPayments?t._e():s("div",{staticClass:"w-full h-10 flex justify-center items-center text-gray-400"},[t._v(" Нет доступных операций ")])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"pb-4"},[s("h1",{staticClass:"text-2xl font-normal",attrs:{id:"title"}},[t._v("История платежей")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"\n              text-xs\n              font-semibold\n              tracking-wide\n              text-left text-gray-500\n              uppercase\n              border-b\n              bg-gray-50\n            "},[s("th",{staticClass:"px-4 py-3"},[t._v("№")]),s("th",{staticClass:"px-4 py-3"},[t._v("Тип")]),s("th",{staticClass:"px-4 py-3"},[t._v("Дата")]),s("th",{staticClass:"px-4 py-3"},[t._v("Сумма")]),s("th",{staticClass:"px-4 py-3"},[t._v("Статус")])])])}],l=s("5530"),i=s("2f62"),d={name:"BalanceHistory",data:function(){return{payments:[]}},computed:Object(l["a"])({},Object(i["c"])(["allPayments"])),methods:Object(l["a"])({},Object(i["b"])(["API_GET_PAYMENTS","API_UPDATE_PAYMENT"])),created:function(){this.API_GET_PAYMENTS(),this.$route.query.order_id&&this.API_UPDATE_PAYMENT(this.$route.query.order_id)}},r=d,c=s("2877"),o=Object(c["a"])(r,a,n,!1,null,null,null);e["default"]=o.exports}}]);