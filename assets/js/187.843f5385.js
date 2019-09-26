(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{607:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_118-在缓存服务中开发缓存穿透的保护性机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_118-在缓存服务中开发缓存穿透的保护性机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 118. 在缓存服务中开发缓存穿透的保护性机制")]),t._v(" "),a("h2",{attrs:{id:"缓存穿透解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存穿透解决方案")]),t._v(" "),a("p",[t._v("我们的缓存穿透解决方案，其实非常简单：每次从源服务（商品服务）查询到的数据为空，就说明这个数据根本就不存在，需要往 redis 和 ehcache 等缓存中写入一条空数据。")]),t._v(" "),a("p",[t._v("另外再配合缓存变更监听推送事件，能让缓存中的空商品信息及时的被变更")]),t._v(" "),a("h2",{attrs:{id:"代码中解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码中解决","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码中解决")]),t._v(" "),a("p",[t._v("GetProductInfoOfMysqlCommand")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" ProductInfo "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设 100 的 id 是数据库中不存在的")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里返回一个空的")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里只是模拟从 mysql 查询")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("productId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ProductInfo productInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        productInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("productId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" productInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    String productInfoJSON "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"id\\": 1, \\"name\\": \\"iphone7手机\\", \\"price\\": 5599, \\"pictureList\\":\\"a.jpg,b.jpg\\", \\"specification\\": \\"iphone7的规格\\", \\"service\\": \\"iphone7的售后服务\\", \\"color\\": \\"红色,白色,黑色\\", \\"size\\": \\"5.5\\", \\"shopId\\": 1,"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\"modifyTime\\":\\"2019-05-13 22:00:00\\"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ProductInfo productInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JSONObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("productInfoJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ProductInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" productInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("经过尝试，访问正常，无任何报错；在本用例中其他的地方没有依赖获取到的商品进行计算什么的，所以这种缓存穿透基本上外面雾感知，只是在页面上展示时全是 null")])])},[],!1,null,null,null);s.default=r.exports}}]);