(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{609:function(t,a,r){"use strict";r.r(a);var e=r(2),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_119-高并发场景下的-nginx-缓存失效导致-redis-压力倍增问题以及解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_119-高并发场景下的-nginx-缓存失效导致-redis-压力倍增问题以及解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 119. 高并发场景下的 nginx 缓存失效导致 redis 压力倍增问题以及解决方案")]),t._v(" "),r("h2",{attrs:{id:"什么是缓存失效"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是缓存失效","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是缓存失效?")]),t._v(" "),r("p",[t._v("我们在 nginx 中设置本地缓存时，给了一个过期时间，比如是 10 分钟，\n10 分钟后会自动过期，这个就叫做缓存失效")]),t._v(" "),r("h2",{attrs:{id:"缓存失效的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存失效的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存失效的问题")]),t._v(" "),r("p",[t._v("比如同时来了 1000 个请求，10 分钟后会失效（"),r("strong",[t._v("同时来，也是同时失效")]),t._v("），\n这就会导致大量的请求高并发到 redis 上去了，同时网络负载也会加重")]),t._v(" "),r("h2",{attrs:{id:"缓存失效解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存失效解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存失效解决方案")]),t._v(" "),r("p",[t._v("解决的核心思路就是：让所有缓存的过期时间尽量保证不在同一时间失效，可以使用一个过期区间，\n在这个区间内随机过期时间")])])},[],!1,null,null,null);a.default=s.exports}}]);