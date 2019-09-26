(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{314:function(a,e,t){a.exports=t.p+"assets/img/markdown-img-paste-20181231234231253.ec3a4689.png"},805:function(a,e,t){"use strict";t.r(e);var s=t(2),r=Object(s.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"基础分布式架构剖析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础分布式架构剖析","aria-hidden":"true"}},[a._v("#")]),a._v(" 基础分布式架构剖析")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#elasticsearch-对复杂分布式机制的透明隐藏特性"}},[a._v("Elasticsearch 对复杂分布式机制的透明隐藏特性")])]),s("li",[s("a",{attrs:{href:"#elasticsearch-的垂直扩容与水平扩容"}},[a._v("Elasticsearch 的垂直扩容与水平扩容")])]),s("li",[s("a",{attrs:{href:"#增减或减少节点时的数据-rebalance"}},[a._v("增减或减少节点时的数据 rebalance")])]),s("li",[s("a",{attrs:{href:"#master-节点"}},[a._v("master 节点")])]),s("li",[s("a",{attrs:{href:"#节点对等的分布式架构"}},[a._v("节点对等的分布式架构")])])])]),s("p"),a._v(" "),s("ol",[s("li",[a._v("Elasticsearch 对复杂分布式机制的透明隐藏特性")]),a._v(" "),s("li",[a._v("Elasticsearch 的垂直扩容与水平扩容")]),a._v(" "),s("li",[a._v("增减或减少节点时的数据 rebalance")]),a._v(" "),s("li",[a._v("master 节点")]),a._v(" "),s("li",[a._v("节点对等的分布式架构")])]),a._v(" "),s("h2",{attrs:{id:"elasticsearch-对复杂分布式机制的透明隐藏特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-对复杂分布式机制的透明隐藏特性","aria-hidden":"true"}},[a._v("#")]),a._v(" Elasticsearch 对复杂分布式机制的透明隐藏特性")]),a._v(" "),s("p",[a._v("Elasticsearch 是一套分布式的系统，分布式是为了应对大数据量\n隐藏了复杂的分布式机制")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("分片机制")]),a._v(" "),s("p",[a._v("我们之前随随便便就将一些 document 插入到 es 集群中去了，我们有没有关心过数据怎么进行分片的，数据到哪个 shard 中去")])]),a._v(" "),s("li",[s("p",[a._v("cluster discovery（集群发现机制)")]),a._v(" "),s("p",[a._v("我们之前在做那个集群 status 从 yellow 转 green 的实验里，直接启动了第二个 es 进程，那个进程作为一个 node 自动就发现了集群，并且加入了进去，还接受了部分数据 （replica shard）")])]),a._v(" "),s("li",[s("p",[a._v("shard 负载均衡")]),a._v(" "),s("p",[a._v("举例，假设现在有 3个 节点，总共有 25个 shard 要分配到 3个节点上去，es 会自动进行均匀分配，以保持每个节点的均衡的读写负载请求")]),a._v(" "),s("p",[a._v("shard 副本，请求路由，集群扩容，shard 重分配")])])]),a._v(" "),s("h2",{attrs:{id:"elasticsearch-的垂直扩容与水平扩容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-的垂直扩容与水平扩容","aria-hidden":"true"}},[a._v("#")]),a._v(" Elasticsearch 的垂直扩容与水平扩容")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("垂直扩容")]),a._v(" "),s("p",[a._v("采购更强大的服务器，成本非常高昂，而且会有瓶颈，假设世界上最强大的服务器容量就是 10T，但是当你的总数据量达到 5000T 的时候，你要采购多少台最强大的服务器啊")])]),a._v(" "),s("li",[s("p",[a._v("水平扩容")]),a._v(" "),s("p",[a._v("业界经常采用的方案，采购越来越多的普通服务器，性能比较一般，但是很多普通服务器组织在一起，就能构成强大的计算和存储能力")])])]),a._v(" "),s("p",[a._v("假设服务器的价格如下：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("普通服务器：1T，1万，100万")])]),a._v(" "),s("li",[s("p",[a._v("强大服务器：10T，50万，500万")])])]),a._v(" "),s("p",[a._v("扩容对应用程序的透明性")]),a._v(" "),s("h2",{attrs:{id:"增减或减少节点时的数据-rebalance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增减或减少节点时的数据-rebalance","aria-hidden":"true"}},[a._v("#")]),a._v(" 增减或减少节点时的数据 rebalance")]),a._v(" "),s("p",[a._v("目的：保持负载均衡")]),a._v(" "),s("p",[a._v("当有新节点加进来的时候，一些 shard 上承担数据量不平衡的时候，es 会自动做 rebalance 操作，将这些数据分担一部分到新机器上去")]),a._v(" "),s("h2",{attrs:{id:"master-节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#master-节点","aria-hidden":"true"}},[a._v("#")]),a._v(" master 节点")]),a._v(" "),s("p",[a._v("管理 es 集群的元数据，默认情况下回自动选举出一台节点，作为 master 节点；")]),a._v(" "),s("ol",[s("li",[a._v("创建或删除索引")]),a._v(" "),s("li",[a._v("增加或删除节点")])]),a._v(" "),s("p",[a._v("master 节点不承载所有的请求，所以不存在单节点瓶颈，那么这就涉及到一个概念：节点对等")]),a._v(" "),s("h2",{attrs:{id:"节点对等的分布式架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点对等的分布式架构","aria-hidden":"true"}},[a._v("#")]),a._v(" 节点对等的分布式架构")]),a._v(" "),s("ol",[s("li",[a._v("节点对等，每个节点都能接收所有的请求")]),a._v(" "),s("li",[a._v("自动请求路由")]),a._v(" "),s("li",[a._v("响应收集")])]),a._v(" "),s("p",[s("img",{attrs:{src:t(314),alt:""}})])])},[],!1,null,null,null);e.default=r.exports}}]);