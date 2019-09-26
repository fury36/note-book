(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{237:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190811221717816.604a7ebf.png"},238:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-2019081122155195.a2239e19.png"},239:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190811234102115.63d04efa.png"},240:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190811235544729.a30a5980.png"},661:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_153-商品详情页动态渲染系统：spring-cloud-之-hystrix-熔断降级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_153-商品详情页动态渲染系统：spring-cloud-之-hystrix-熔断降级","aria-hidden":"true"}},[s._v("#")]),s._v(" 153. 商品详情页动态渲染系统：Spring Cloud 之 Hystrix 熔断降级")]),s._v(" "),n("p",[s._v("微服务架构，很重要的就是多个服务之间互相调用，很可能某个服务就死了，然后依赖它的其他服务调用大量超时，最后耗尽资源，继续死，最终导致整个系统崩盘")]),s._v(" "),n("p",[s._v("使用 hystrix 去做资源隔离、限流、熔断、降级")]),s._v(" "),n("h2",{attrs:{id:"整合-hystrix"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整合-hystrix","aria-hidden":"true"}},[s._v("#")]),s._v(" 整合 hystrix")]),s._v(" "),n("p",[s._v("添加依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 注：spring-cloud-starter-netflix-eureka-client 中已经依赖了 ribbon、hystrix、openfeign\ncompile 'org.springframework.cloud:spring-cloud-starter-netflix-hystrix'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("开启 hystrix")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("feign")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hystrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("配置与降级逻辑实现")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@FeignClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eshop-eurela-client"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fallback "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" EurelaClientServiceFallback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EurelaClientService")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    String "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("home")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestParam")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" String name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EurelaClientServiceFallback")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EurelaClientService")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" String "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("home")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("测试步骤：")]),s._v(" "),n("ol",[n("li",[s._v("重启项目后访问地址 http://localhost:9005/ 查看是否能访问")]),s._v(" "),n("li",[s._v("关闭掉 eshop-eurela-client 实例")]),s._v(" "),n("li",[s._v("再次访问 http://localhost:9005/ 查看是否走了降级机制")])]),s._v(" "),n("p",[s._v("在测试过程中发现如下特性：")]),s._v(" "),n("ol",[n("li",[s._v("当其中一个实例关闭时，第一次访问到挂掉的实例时会走降级机制，后续就不会再访问到该实例了")]),s._v(" "),n("li",[s._v("2 个实例都挂掉时，肯定每次访问都是走降级机制了")]),s._v(" "),n("li",[s._v("当实例恢复后，又可以正常提供服务了")])]),s._v(" "),n("h2",{attrs:{id:"hystrix-dashboard-整合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-dashboard-整合","aria-hidden":"true"}},[s._v("#")]),s._v(" hystrix dashboard 整合")]),s._v(" "),n("p",[s._v("添加依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// https://cloud.spring.io/spring-cloud-netflix/reference/html/#_how_to_include_hystrix\n// https://cloud.spring.io/spring-cloud-static/Greenwich.SR2/single/spring-cloud.html#_circuit_breaker_hystrix_dashboard\ncompile 'org.springframework.cloud:spring-cloud-starter-netflix-hystrix-dashboard'\ncompile 'org.springframework.boot:spring-boot-starter-actuator'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("注解开启")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@EnableHystrixDashboard\n@EnableCircuitBreaker\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("hystrix dashboard ui 使用")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("访问地址："),n("code",[s._v("http://localhost:9005/hystrix")])])]),s._v(" "),n("li",[n("p",[s._v("填入要监控的服务："),n("code",[s._v("http://localhost:9005/actuator/hystrix.stream")])]),s._v(" "),n("p",[s._v("由于我们在 greeting-service 上开启了 CircuitBreaker 断路器，它就会提供一个 "),n("code",[s._v("/hystrix.stream")]),s._v(" 服务,\n通过这个服务，dashboard 就能拿到 greeting-service 上断路器状态数据并进行聚合展示了")])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(237),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"hystrix-stream-404-问题解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-stream-404-问题解决","aria-hidden":"true"}},[s._v("#")]),s._v(" /hystrix.stream 404 问题解决")]),s._v(" "),n("p",[s._v("但是在访问 "),n("code",[s._v("/hystrix.stream")]),s._v(" ，这是因为 boot 2 使用了 endpoint 来管理这些扩展端点，这个配置就是 actuator 包来自动配置的。\n暴露该端点")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("management")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exposure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露所有端点")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" '*'  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者单独暴露 /hystrix.stream 断点")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("配置之后还是发现无法访问，最后在 dashboard ui 中看到了正确的地址")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("https://hystrix-app:port/actuator/hystrix.stream\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(238),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"改造被调用服务也支持-hystrix"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#改造被调用服务也支持-hystrix","aria-hidden":"true"}},[s._v("#")]),s._v(" 改造被调用服务也支持 hystrix")]),s._v(" "),n("p",[s._v("添加依赖等配置与上面的一致，唯一不同的一点就是下面这个。\n手动让自己提供服务的方法也支持 hystrix 的管控")]),s._v(" "),n("p",[s._v("eshop-eurela-client 项目")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@HystrixCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fallbackMethod "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sayHello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" String "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("home")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意，前面在 greeting-service 中调用没有传递相关参数")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里为了模拟异常，已添加上")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" null "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RuntimeException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"故意异常走降级机制"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world port "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" String "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHello")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"降级机制"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("之前已经深入讲解过 hystrix 了，这里不再多说，这里只是使用了注解方式让我们自己的方法使用上 hystrix")]),s._v(" "),n("p",[s._v("测试：访问地址 http://localhost:9005/?name=error，可以看到输出了 "),n("code",[s._v("降级机制")])]),s._v(" "),n("h2",{attrs:{id:"turbine-（hystrix-dashboard-集群聚合服务）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#turbine-（hystrix-dashboard-集群聚合服务）","aria-hidden":"true"}},[s._v("#")]),s._v(" turbine （hystrix dashboard 集群聚合服务）")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://cloud.spring.io/spring-cloud-static/Greenwich.SR2/single/spring-cloud.html#_turbine",target:"_blank",rel:"noopener noreferrer"}},[s._v("此方式在官网教程也有讲解"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("turbine 只是一个聚合 hystrix dashboard stream 的服务，前面讲解的是单实例的 hystrix dashboard stream 支持。")]),s._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[s._v("这里只要注意 turbine 不要部署在但实例 hystrix dashboard 上，\n因为它是聚合多个流，一般建议建立一个空项目来开启 turbine")])]),s._v(" "),n("p",[s._v("新创建一个项目 eshop-turbine")]),s._v(" "),n("p",[s._v("eshop-turbine/build.gradle")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("plugins "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot'")]),s._v(" version "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.1.6.RELEASE'")]),s._v("\n    id "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'java'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\napply plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'io.spring.dependency-management'")]),s._v("\n\next "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'springCloudVersion'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"Greenwich.SR2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ndependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    implementation "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-starter-netflix-eureka-client'")]),s._v("\n    implementation "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-web'")]),s._v("\n    testImplementation "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-test'")]),s._v("\n    compile "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-actuator'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加 turbine 自动配置")]),s._v("\n    compile "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-starter-netflix-turbine'")]),s._v("\n    compile "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-netflix-turbine'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ndependencyManagement "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    imports "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        mavenBom "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"org.springframework.cloud:spring-cloud-dependencies:'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("springCloudVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("使用注解开启")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableTurbine")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("application.yml")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9007")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" eshop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("turbine\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8761/eureka/\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("management")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exposure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("turbine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要聚合的服务")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app-config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ESHOP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("EURELA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("CLIENT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("GREETING"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("SERVICE\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 聚合集群配置，其他客户端没有配置，则这里使用默认")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意下面的配置非常重要，否则访问 http://localhost:9007/clusters 不会出现任何 /urbine.stream 地址")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("aggregator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster-config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster-name-expression")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"'default'\"")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("启动项目后可访问如下地址：")]),s._v(" "),n("ul",[n("li",[s._v("turbine 支持聚合的服务地址： http://localhost:9007/clusters")]),s._v(" "),n("li",[s._v("聚合流：http://localhost:9007/turbine.stream")])]),s._v(" "),n("p",[s._v("在任意一个支持  hystrix dashboard ui 上填入这里的聚合流地址，都能监控所有已配置的服务")]),s._v(" "),n("p",[n("img",{attrs:{src:a(239),alt:""}})]),s._v(" "),n("p",[s._v("可以从图上看到，通过这里的默认配置，把集群中的所有断路器名称都拿过来聚合了，\n这里也看到有一丝乱，因为集群没有分开，所以导致看到的是所有服务的")]),s._v(" "),n("h3",{attrs:{id:"分集群聚合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分集群聚合","aria-hidden":"true"}},[s._v("#")]),s._v(" 分集群聚合")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("turbine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要聚合的服务")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app-config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ESHOP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("EURELA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("CLIENT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("GREETING"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("SERVICE\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("aggregator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster-config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" eshop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("eurela"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clusterNameExpression")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metadata"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cluster'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("具体的客户端需要通过如下配置暴露自己的集群名称")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8761/eureka/\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("instance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata-map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的 cluster 对应了 clusterNameExpression 中的 metadata['cluster'] 表达式要获取的字段")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 而这里的 eshop-eurela-client 则对应了 cluster-config 中的值")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" eshop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("eurela"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[n("img",{attrs:{src:a(240),alt:""}})]),s._v(" "),n("p",[s._v("现在就把 client 项目中的数据分离开来聚合统计显示了")])])},[],!1,null,null,null);t.default=e.exports}}]);