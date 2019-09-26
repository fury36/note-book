(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{282:function(t,a,s){t.exports=s.p+"assets/img/markdown-img-paste-20190323213726964.c5eb2d67.png"},283:function(t,a,s){t.exports=s.p+"assets/img/markdown-img-paste-20190323214135105.b86ca15f.png"},284:function(t,a,s){t.exports=s.p+"assets/img/markdown-img-paste-2019032321540722.9a15f128.png"},285:function(t,a,s){t.exports=s.p+"assets/img/markdown-img-paste-2019032321582606.811aa443.png"},772:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_022-redis-哨兵主备切换的数据丢失问题：异步复制、集群脑裂"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_022-redis-哨兵主备切换的数据丢失问题：异步复制、集群脑裂","aria-hidden":"true"}},[t._v("#")]),t._v(" 022. redis 哨兵主备切换的数据丢失问题：异步复制、集群脑裂")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#两种数据丢失的情况"}},[t._v("两种数据丢失的情况")]),e("ul",[e("li",[e("a",{attrs:{href:"#异步复制导致的数据丢失"}},[t._v("异步复制导致的数据丢失")])]),e("li",[e("a",{attrs:{href:"#脑裂导致的数据丢失"}},[t._v("脑裂导致的数据丢失")])])])]),e("li",[e("a",{attrs:{href:"#解决异步复制和脑裂导致的数据丢失"}},[t._v("解决异步复制和脑裂导致的数据丢失")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"两种数据丢失的情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两种数据丢失的情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 两种数据丢失的情况")]),t._v(" "),e("h3",{attrs:{id:"异步复制导致的数据丢失"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步复制导致的数据丢失","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步复制导致的数据丢失")]),t._v(" "),e("p",[e("img",{attrs:{src:s(282),alt:""}})]),t._v(" "),e("p",[t._v("因为 master -> slave 的复制是异步的，所以可能有部分数据还没复制到 slave，master 就宕机了，此时这些部分数据就丢失了")]),t._v(" "),e("h3",{attrs:{id:"脑裂导致的数据丢失"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脑裂导致的数据丢失","aria-hidden":"true"}},[t._v("#")]),t._v(" 脑裂导致的数据丢失")]),t._v(" "),e("p",[e("img",{attrs:{src:s(283),alt:""}})]),t._v(" "),e("p",[t._v("何为脑裂？如上图由于一个集群中的 master 恰好网络故障，导致与 sentinal 联系不上了，sentinal 把另一个 slave 提升为了 master。此时就存在两个 master了。")]),t._v(" "),e("p",[t._v("当我们发现的时候，停止掉其中的一个 master，手动切换成 slave，当它连接到提升后的 master 的时候，会开始同步数据，那么自己脑裂期间接收的写数据就被丢失了")]),t._v(" "),e("h2",{attrs:{id:"解决异步复制和脑裂导致的数据丢失"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决异步复制和脑裂导致的数据丢失","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决异步复制和脑裂导致的数据丢失")]),t._v(" "),e("p",[t._v("主要通过两个配置参数来解决")]),t._v(" "),e("ul",[e("li",[t._v("min-slaves-to-write 1")]),t._v(" "),e("li",[t._v("min-slaves-max-lag 10")])]),t._v(" "),e("p",[t._v("如上两个配置：要求至少有 1 个 slave，数据复制和同步的延迟不能超过 10 秒，如果超过 1 个 slave，数据复制和同步的延迟都超过了 10 秒钟，那么这个时候，master 就不会再接收任何请求了")]),t._v(" "),e("p",[t._v("此配置保证就算脑裂了，那么最多只能有 10 秒的数据丢失")]),t._v(" "),e("p",[e("img",{attrs:{src:s(284),alt:""}})]),t._v(" "),e("p",[t._v("上图说明了脑裂时，master 拒绝写数据的时候，client 可能额外需要做的事情，client 是说使用方，不是 redis 的东西。")]),t._v(" "),e("p",[t._v("下图也是一样的道理，有如上两个参数配置控制的话，脑裂时会减少数据的丢失")]),t._v(" "),e("p",[e("img",{attrs:{src:s(285),alt:""}})])])},[],!1,null,null,null);a.default=r.exports}}]);