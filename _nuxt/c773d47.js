(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{289:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("397818bf",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n(289)},293:function(t,e,n){var r=n(80)((function(i){return i[1]}));r.push([t.i,".nuxt-content{font-size:18px;white-space:pre-wrap}.nuxt-content p{margin-bottom:10px}.nuxt-content h2{font-size:24px;font:700;line-height:1}ul{list-style:inherit}ol,ul{margin-left:40px;line-height:1}ol{list-style:number}blockquote{background:#ebebeb;padding:10px;border-radius:5px}@media (prefers-color-scheme:dark){blockquote{background:#1e293b}}",""]),r.locals={},t.exports=r},306:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(35),{methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ja",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),l=(n(292),n(52)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"flex flex-row h-screen"},[n("div",{staticClass:"basis-60 pt-10 pl-4 bg-slate-100 md:block hidden\n              dark:bg-slate-800 dark:text-white"},[n("NuxtLink",{staticClass:"text-3xl",attrs:{to:"/"}},[t._v("Skuronosuke")]),t._v(" "),t._l(t.article.toc,(function(link){return n("li",{key:link.id,staticClass:"py-2 text-lg list-none"},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)}))],2),t._v(" "),n("div",{staticClass:"overflow-auto grow\n              dark:bg-slate-900 dark:text-white"},[n("div",{staticClass:"max-w-[600px] mx-auto"},[n("div",{staticClass:"text-center text-2xl pt-5 md:hidden"},[n("NuxtLink",{attrs:{to:"/"}},[t._v("Skuronosuke")])],1),t._v(" "),n("div",{staticClass:"text-center pt-5"},[n("p",{staticClass:"text-[80px] pb-4"},[t._v(t._s(t.article.emoji))]),t._v(" "),n("h1",{staticClass:"text-4xl font-bold"},[t._v(t._s(t.article.title))]),t._v(" "),n("p",[t._v("最終更新日: "+t._s(t.formatDate(t.article.updatedAt)))])]),t._v(" "),n("nuxt-content",{staticClass:"mt-4 pt-4 border-t-2 border-slate-700",attrs:{document:t.article}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);