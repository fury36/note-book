(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{572:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_028-在项目中重新搭建一套读写分离-高可用-多-master-的-redis-cluster-集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_028-在项目中重新搭建一套读写分离-高可用-多-master-的-redis-cluster-集群","aria-hidden":"true"}},[s._v("#")]),s._v(" 028. 在项目中重新搭建一套读写分离+高可用+多 master 的 redis cluster 集群")]),s._v(" "),n("p",[s._v("上一章节对 redis cluster 最最基础的一些知识进行了了解。")]),s._v(" "),n("p",[s._v("redis cluster: master+slave 复制和读写分离/高可用和主备切换 都是自动支持的，支持多个 master 的 hash slot 支持数据分布式存储")]),s._v(" "),n("p",[s._v("所以停止之前所有的实例，包括 redis 主从和哨兵集群")]),s._v(" "),n("h2",{attrs:{id:"redis-cluster-的重要配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis-cluster-的重要配置","aria-hidden":"true"}},[s._v("#")]),s._v(" redis cluster 的重要配置")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("cluster-enabled <yes/no>")])])]),s._v(" "),n("li",[n("p",[n("code",[s._v("cluster-config-file <filename>")])]),s._v(" "),n("p",[s._v("这是指定一个文件，供 cluster 模式下的 redis 实例将集群状态保存在那里，包括集群中其他机器的信息，比如节点的上线和下限，故障转移，不是我们去维护的，给它指定一个文件，让 redis 自己去维护的")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("cluster-node-timeout <milliseconds>")])]),s._v(" "),n("p",[s._v("节点存活超时时长，超过一定时长，认为节点宕机，master 宕机的话就会触发主备切换，slave 宕机就不会提供服务")])])]),s._v(" "),n("h2",{attrs:{id:"在三台机器上启动-6-个-redis-实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在三台机器上启动-6-个-redis-实例","aria-hidden":"true"}},[s._v("#")]),s._v(" 在三台机器上启动 6 个 redis 实例")]),s._v(" "),n("p",[s._v("redis cluster 集群要求至少 3 个 master，去组成一个高可用，健壮的分布式的集群，每个 master 都建议至少给一个 slave，3 个 master，3 个 slave，最少的要求")]),s._v(" "),n("p",[s._v("正式环境下，建议都是说在 6 台机器上去搭建，至少 3 台机器，保证每个 master 都跟自己的 slave 不在同一台机器上，如果是 6 台自然更好")]),s._v(" "),n("p",[s._v("3 台机器去搭建 6 个 redis 实例的 redis cluster")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("hostname")]),s._v(" "),n("th",[s._v("配置文件")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("eshop-cache01")]),s._v(" "),n("td",[s._v("7001.conf、 7002.conf")])]),s._v(" "),n("tr",[n("td",[s._v("eshop-cache02")]),s._v(" "),n("td",[s._v("7003.conf、 7004.conf")])]),s._v(" "),n("tr",[n("td",[s._v("eshop-cache03")]),s._v(" "),n("td",[s._v("7005.conf、 7006.conf")])])])]),s._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[s._v("redis 还是一样的，只是配置文件中的属性不同了，建议使用默认的配置文件重新配置")])]),s._v(" "),n("blockquote",[n("p",[s._v("配置目录整体概览")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("|- /etc\n  |- /redis     # 存放配置文件，按端口名命名\n    |- 7001.conf\n  |- /redis-cluster  # 存放 redis 集群维护的配置文件目录\n  |- /init.d  \n    |-/redis_7001 # 启动脚本  \n|- /var\n  |-/log/redis  # 存放日志文件\n    |-/7001.log # 日志文件\n  |-/redis/7001 # 存放数据文件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("blockquote",[n("p",[s._v("配置文件和启动脚本")])]),s._v(" "),n("p",[s._v("对于配置文件 主要要修改的在下面了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("port 7001\ncluster-enabled yes\ncluster-config-file /etc/redis-cluster/node-7001.conf\ncluster-node-timeout 15000\ndaemonize\tyes\t\t\t\t\t\t\t\npidfile /var/run/redis_7001.pid \t\t\t\t\t\t\ndir /var/redis/7001\nlogfile /var/log/redis/7001.log\n# 如果后续不能正常创建集群，请把这里修改成 ip 的形式\nbind eshop-cache01\t\t\nappendonly yes\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("为了方便快捷的把配置文件搞好。先执行以下命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/redis-cluster\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/log/redis\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/redis/7001\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制默认配置文件，并修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-3.2.8/redis.conf /etc/redis/7001.conf\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制启动脚本，需要 6 个启动脚本 ，里面的 REDISPORT=7001 需要修改成和文件名对应的端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-3.2.8/utils/redis_init_script /etc/init.d/redis_7001\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("然后下载 7001.conf 到 windows 中，按以上配置文件修改完成后，\n复制其余 5 份出来，只要全局把 7001 替换成 其余 5 分节点的端口和 bind 修改好就可以了")]),s._v(" "),n("blockquote",[n("p",[s._v("启动 6 个 redis 实例")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 通过之前一样的命令启动 6 个实例\n./redis_7001 start\n# 查看日志是否启动正常，现在配置了日志文件的\ncat /var/log/redis/7001.log\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"创建集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建集群","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建集群")]),s._v(" "),n("p",[s._v("之前启动的 6 个redis 实例只是单机的，需要使用工具创建集群")]),s._v(" "),n("p",[s._v("通过官网提供的工具 redis-trib.rb 工具创建，该工具依赖了 ruby，先装依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 不要直接使用此命令安装，因为安装的是低版本的。参考本文后面的 Ruby 的安装\nyum install -y ruby\n# 不要使用 yum 安装，在 centos 6 中只会安装 1.8 版本的，并且连 ruby 也一起安装的\nyum install -y rubygems\n# 前面的安装请参考 本文后面的 Ruby 安装\ngem install redis\n\n## 让 redis-trib.rb 工具不在具体目录下也可以使用，和 windows path 效果类似\ncp /usr/local/redis-3.2.8/src/redis-trib.rb /usr/local/bin\n\n# 创建集群，注意这里需要使用 ip 地址，否则不成功\n# --replicas: 每个 master 有几个 slave\n# 6 台机器，3 个 master，3 个 slave，尽量自己让 master 和 slave 不在一台机器上\nredis-trib.rb create --replicas 1 192.168.99.170:7001 192.168.99.170:7002 192.168.99.171:7003 192.168.99.171:7004 192.168.99.172:7005 192.168.99.172:7006\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("安装的话，不需要每台机器都安装，在 01 上安装和创建集群即可")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 在输入 yes 后，会如果报错。\nCan I set the above configuration? (type 'yes' to accept): yes\n/opt/rubies/ruby-2.3.8/lib/ruby/gems/2.3.0/gems/redis-4.1.0/lib/redis/client.rb:124:in `call': ERR Slot 0 is already busy (Redis::CommandError)\n\n原因是 slot 被占用，解决方案如下，登录各个节点执行 cluster reset\n[root@eshop-cache02 redis]# redis-cli -h 192.168.99.171 -p 7003\n192.168.99.171:7003> cluster reset\nOK\n192.168.99.171:7003> exit\n[root@eshop-cache02 redis]# redis-cli -h 192.168.99.171 -p 7004\n192.168.99.171:7004> cluster reset\nOK\n192.168.99.171:7004> exit\n[root@eshop-cache02 redis]# redis-cli -h 192.168.99.170 -p 7001\n192.168.99.170:7001> cluster reset\nOK\n192.168.99.170:7001> exit\n[root@eshop-cache02 redis]# redis-cli -h 192.168.99.170 -p 7002\n192.168.99.170:7002> cluster reset\nOK\n192.168.99.170:7002> exit\n[root@eshop-cache02 redis]# redis-cli -h 192.168.99.172 -p 7005\n192.168.99.172:7005> cluster reset\nOK\n192.168.99.172:7005> exit\n[root@eshop-cache02 redis]# redis-cli -h 192.168.99.172 -p 7006\n192.168.99.172:7006> cluster reset\nOK\n192.168.99.172:7006> exit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("p",[s._v("再次创建集群后，终于成功了。从安装 ruby 开始到现在已经过去了 4 个小时，\n真是太坎坷了")]),s._v(" "),n("p",[s._v("可以看到如下的日志，它选择了 3 个master，3 个 slave 并且都不在一台机器上")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@eshop-cache01 redis]# redis-trib.rb create --replicas 1 192.168.99.170:7001 192.168.99.170:7002 192.168.99.171:7003 192.168.99.171:7004 192.168.99.172:7005 192.168.99.172:7006\n>>> Creating cluster\n>>> Performing hash slots allocation on 6 nodes...\nUsing 3 masters:\n192.168.99.170:7001\n192.168.99.171:7003\n192.168.99.172:7005\nAdding replica 192.168.99.171:7004 to 192.168.99.170:7001\nAdding replica 192.168.99.170:7002 to 192.168.99.171:7003\nAdding replica 192.168.99.172:7006 to 192.168.99.172:7005\nM: 3807711e01cd28509d7ba9839e601058bf2a30cf 192.168.99.170:7001\n   slots:0-5460 (5461 slots) master\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:5461-10922 (5462 slots) master\nS: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   replicates 3807711e01cd28509d7ba9839e601058bf2a30cf\nM: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots:10923-16383 (5461 slots) master\nS: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   replicates cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf\nCan I set the above configuration? (type 'yes' to accept): yes\n>>> Nodes configuration updated\n>>> Assign a different config epoch to each node\n>>> Sending CLUSTER MEET messages to join the cluster\nWaiting for the cluster to join...\n>>> Performing Cluster Check (using node 192.168.99.170:7001)\nM: 3807711e01cd28509d7ba9839e601058bf2a30cf 192.168.99.170:7001\n   slots:0-5460 (5461 slots) master\n   1 additional replica(s)\nS: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots: (0 slots) slave\n   replicates cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf\nM: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots:10923-16383 (5461 slots) master\n   1 additional replica(s)\nS: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots: (0 slots) slave\n   replicates 3807711e01cd28509d7ba9839e601058bf2a30cf\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:5461-10922 (5462 slots) master\n   1 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])]),n("p",[s._v("可以通过 check 命令检查")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@eshop-cache01 redis]# redis-trib.rb check eshop-cache01:7001\n>>> Performing Cluster Check (using node eshop-cache01:7001)\nM: 3807711e01cd28509d7ba9839e601058bf2a30cf eshop-cache01:7001\n   slots:0-5460 (5461 slots) master\n   1 additional replica(s)\nS: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots: (0 slots) slave\n   replicates cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf\nM: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots:10923-16383 (5461 slots) master\n   1 additional replica(s)\nS: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots: (0 slots) slave\n   replicates 3807711e01cd28509d7ba9839e601058bf2a30cf\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:5461-10922 (5462 slots) master\n   1 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"读写分离-高可用-多-master"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读写分离-高可用-多-master","aria-hidden":"true"}},[s._v("#")]),s._v(" 读写分离+高可用+多 master")]),s._v(" "),n("p",[s._v("集群安装成功之后，就具有了如下功能：")]),s._v(" "),n("ul",[n("li",[s._v("读写分离：每个 master 都有一个 slave")]),s._v(" "),n("li",[s._v("高可用：master 宕机，slave 自动被切换过去")]),s._v(" "),n("li",[s._v("多 master：横向扩容支持更大数据量")])]),s._v(" "),n("h2",{attrs:{id:"ruby-的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ruby-的安装","aria-hidden":"true"}},[s._v("#")]),s._v(" Ruby 的安装")]),s._v(" "),n("h3",{attrs:{id:"ruby-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ruby-安装","aria-hidden":"true"}},[s._v("#")]),s._v(" Ruby 安装")]),s._v(" "),n("p",[s._v("在 ruby 官网找到一个安装任意版本的工具  "),n("a",{attrs:{href:"https://github.com/postmodern/ruby-install#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("ruby-install"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /ust/local\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 ruby-install")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O ruby-install-0.7.0.tar.gz https://github.com/postmodern/ruby-install/archive/v0.7.0.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf ruby-install-0.7.0.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" ruby-install-0.7.0/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 2.3 版本 ruby，执行后会看到 update runby.. 应该是吧之前 1.8 版本的更新了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要等待好长时间，在安装过程中的时候 32% [305/947]  io.c ，947 的进度条。。")]),s._v("\nruby-install ruby 2.3\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你之前通过 yum 安装过 低版本的 ruby，那么需要移除掉")]),s._v("\nyum remove ruby\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除之后，发现提示有误")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 ruby-2.3.8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ruby -v")]),s._v("\n-bash: /usr/bin/ruby: No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其实在 ruby-install ruby 2.3 安装完成过程中是有显示安装位置的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 ls 命令 连接到安装目录的 ruby 文件即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/src/ruby-2.3.8/ruby /usr/bin/ruby  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("blockquote",[n("p",[s._v("以下尝试过好长时间都不能安装上，主要是 rvm 安装不了")])]),s._v(" "),n("p",[s._v("解决 gem install redis redis requires Ruby version >= 2.2.2."),n("a",{attrs:{href:"https://blog.csdn.net/baiducheng/article/details/77833154",target:"_blank",rel:"noopener noreferrer"}},[s._v("报错问题"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("或者参考 "),n("a",{attrs:{href:"https://www.cnblogs.com/ding2016/p/7903147.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 curl")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 RVM")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl -L get.rvm.io | bash -s stable")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl -L https://get.rvm.io | bash -s stable")]),s._v("\ngpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我再执行这步骤的时候老是报错 curl returned status '35'. ，下载不下来")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照官网的 https://rvm.io/ 方式也是报错")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://get.rvm.io "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -s stable\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" /usr/local/rvm/scripts/rvm\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 rvm 库中已知的 ruby 版本")]),s._v("\nrvm list known\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装一个 ruby 版本")]),s._v("\nrvm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" 2.3.3\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用一个 ruby 版本")]),s._v("\nrvm use 2.3.3\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载一个已知版本")]),s._v("\nrvm remove 2.0.0\nruby --version\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再安装redis就可以了")]),s._v("\ngem "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h3",{attrs:{id:"rubygems-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rubygems-安装","aria-hidden":"true"}},[s._v("#")]),s._v(" rubygems 安装")]),s._v(" "),n("p",[s._v("安装方式请参考官网：https://rubygems.org/pages/download")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd /usr/local\nwget https://rubygems.org/rubygems/rubygems-3.0.3.zip\n# 如果没有安装 zip，请执行 yum install unzip\nunzip rubygems-3.0.3.zip\ncd rubygems-3.0.3\nruby setup.rb\nln -s /usr/local/rubygems-3.0.3/bin/gem /usr/bin/gem\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])},[],!1,null,null,null);a.default=t.exports}}]);