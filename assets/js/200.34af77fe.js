(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{645:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_142-商品详情页动态渲染系统：为每个机房的-redis-从集群部署-twemproxy-中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_142-商品详情页动态渲染系统：为每个机房的-redis-从集群部署-twemproxy-中间件","aria-hidden":"true"}},[s._v("#")]),s._v(" 142. 商品详情页动态渲染系统：为每个机房的 redis 从集群部署 twemproxy 中间件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("                             ← 192.168.99.12 slave: 6405  并列作为 6401 的从(从集群)\n192.168.99.11 master：6401   ← 192.168.99.11 slave: 6405\n192.168.99.11 slave: 6403 ↑\n192.168.99.12 slave: 6401 ↑\n192.168.99.12 slave: 6403 ↑\n\n                             ← 192.168.99.12 slave: 6406  并列作为 6402 的从(从集群)\n192.168.99.11 master：6402   ← 192.168.99.11 slave: 6406\n192.168.99.11 slave: 6404 ↑\n192.168.99.12 slave: 6402 ↑\n192.168.99.12 slave: 6404 ↑\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("这里说的从集群和上图理解的还不太一样，说实话这里讲课已经有点懵逼了，\n现在已经不太确定上图示意的是否准确。")]),s._v(" "),t("p",[s._v("但是本节课内容讲解的从集群应该是每个主集群下的两个从 redis，如")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail01 src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./redis-cli -p 6401")]),s._v("\n127.0.0.1:6401"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" info replication\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master\nconnected_slaves:2\nslave0:ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("192.168.99.11,port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6403,state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3306,lag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\nslave1:ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("192.168.99.11,port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6405,state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3306,lag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail01 src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./redis-cli -p 6402")]),s._v("\n127.0.0.1:6402"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" info replication\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master\nconnected_slaves:2\nslave0:ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("192.168.99.11,port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6404,state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2660,lag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\nslave1:ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("192.168.99.12,port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6405,state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2660,lag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("本节课所讲的从集群是如上所示那样，对每个集群的从配置为一个读集群，\n这里的规划是这样的：")]),s._v(" "),t("ul",[t("li",[s._v("detail01：已经有一个 twemproxy 中间件了，只需要新增从集群的配置即可")]),s._v(" "),t("li",[s._v("detail02：需要先安装一个 twemproxy，再配置从集群")])]),s._v(" "),t("p",[s._v("安装这里就不再重复了，贴出每台机器的最终配置")]),s._v(" "),t("p",[s._v("detail01：/usr/local/twemproxy-0.4.0/conf/nutcracker.yml")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis-master")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置一个逻辑名称")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111  ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fnv1a_64  \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("distribution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ketama  \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true  ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 192.168.99.11"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6401"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1 redis01  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指向两个主集群")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 192.168.99.11"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6402"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1 redis02\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis-slave")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从集群")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1112  ")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fnv1a_64  \n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("distribution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ketama  \n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true  ")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 192.168.99.11"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6403"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1 redis01\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 192.168.99.11"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6405"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1 redis02\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("detail02：/usr/local/twemproxy-0.4.0/conf/nutcracker.yml")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis-slave")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从集群")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1112  ")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fnv1a_64  \n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("distribution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ketama  \n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true  ")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 192.168.99.11"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6404"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1 redis01\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 192.168.99.12"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6405"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1 redis02\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("配置完成后，需要重启 nutcracker （kill 再启动）")]),s._v(" "),t("p",[s._v("测试路由是否正确")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail01 src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./redis-cli -p 1112")]),s._v("\n127.0.0.1:1112"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get hello\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n127.0.0.1:1112"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get k1\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v1"')]),s._v("\n127.0.0.1:1112"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get k2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n127.0.0.1:1112"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get p1\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p1"')]),s._v("\n127.0.0.1:1112"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get product\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"01"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail02 src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./redis-cli -p 1112")]),s._v("\n127.0.0.1:1112"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get hello\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n127.0.0.1:1112"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get hell1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n127.0.0.1:1112"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get hello1\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("经过测试，都能读取到各自主集群同步的数据")])])},[],!1,null,null,null);a.default=e.exports}}]);