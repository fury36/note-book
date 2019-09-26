(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{611:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_054-基于-nginx-lua-java-完成多级缓存架构的核心业务逻辑（一）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_054-基于-nginx-lua-java-完成多级缓存架构的核心业务逻辑（一）","aria-hidden":"true"}},[s._v("#")]),s._v(" 054. 基于 nginx + lua + java 完成多级缓存架构的核心业务逻辑（一）")]),s._v(" "),n("p",[s._v("本节讲解如何自 nginx 中写 lua 脚本把缓存放到 nginx 本地缓存中")]),s._v(" "),n("p",[s._v("脚本思路：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("应用 nginx 的 lua 脚本接收到请求")])]),s._v(" "),n("li",[n("p",[s._v("获取请求参数中的商品 id，以及商品店铺 id")])]),s._v(" "),n("li",[n("p",[s._v("根据商品 id 和商品店铺 id，在 nginx 本地缓存中尝试获取数据")])]),s._v(" "),n("li",[n("p",[s._v("如果在 nginx 本地缓存中没有获取到数据，那么就到 redis 分布式缓存中获取数据，如果获取到了数据，还要设置到 nginx 本地缓存中")]),s._v(" "),n("p",[s._v("但是这里有个问题，建议不要用 nginx+lua 直接去获取 redis 数据")]),s._v(" "),n("p",[s._v("因为 openresty 没有太好的 redis cluster 的支持包，所以建议是发送 http 请求到缓存数据生产服务，由该服务提供一个 http 接口")]),s._v(" "),n("p",[s._v("缓存数生产服务可以基于 redis cluster api 从 redis 中直接获取数据，并返回给 nginx")])]),s._v(" "),n("li",[n("p",[s._v("如果缓存数据生产服务没有在 redis 分布式缓存中没有获取到数据，那么就在自己本地 ehcache 中获取数据，返回数据给 nginx，也要设置到 nginx 本地缓存中")])]),s._v(" "),n("li",[n("p",[s._v("如果 ehcache 本地缓存都没有数据，那么就需要去原始的服务中拉取数据，该服务会从 mysql 中查询，拉取到数据之后，返回给 nginx，并重新设置到 ehcache和 redis 中")]),s._v(" "),n("p",[s._v("这里先不考虑并发问题，后面要专门讲解一套分布式缓存重建并发冲突的问题和解决方案")])]),s._v(" "),n("li",[n("p",[s._v("nginx 最终利用获取到的数据，动态渲染网页模板")])]),s._v(" "),n("li",[n("p",[s._v("将渲染后的网页模板作为 http 响应，返回给分发层 nginx")])])]),s._v(" "),n("p",[s._v("下面来一步一步做；")]),s._v(" "),n("h2",{attrs:{id:"分发层-lua"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分发层-lua","aria-hidden":"true"}},[s._v("#")]),s._v(" 分发层 lua")]),s._v(" "),n("p",[s._v("eshop-cache03 服务器上")]),s._v(" "),n("p",[s._v("/usr/hello/hello.conf")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n    listen       80;\n    server_name  _;\n    location /lua {\n      default_type 'text/html';\n      # 防止响应中文乱码\n      charset utf-8;\n      content_by_lua_file /usr/hello/lua/hello.lua;\n    }\n\n    # 分发逻辑脚本映射\n    location /product {\n      default_type 'text/html';\n      # 防止响应中文乱码\n      charset utf-8;\n      content_by_lua_file /usr/hello/lua/distribute.lua;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("/usr/hello/lua/distribute.lua，这里使用之前写好的分发逻辑修改，\n因为想在一个映射中写完商品和店铺信息的分发，所以这里还需要添加一个 shopId")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('local uri_args = ngx.req.get_uri_args()\n-- 获取参数\nlocal productId = uri_args["productId"]\nlocal shopId = uri_args["shopId"]\n\n-- 定义后端应用 ip\nlocal host = {"192.168.99.170", "192.168.99.171"}\n-- 对商品 id 取模并计算 hash 值\nlocal hash = ngx.crc32_long(productId)\nhash = (hash % 2) + 1\n-- 拼接 http 前缀\nbackend = "http://"..host[hash]\n\n-- 获取到参数中的路径，比如你要访问 /hello，这个例子中是需要传递访问路径的\nlocal method = uri_args["method"]\n-- 拼接具体的访问地址不带 host，如：/hello?productId=1\nlocal requestBody = "/"..method.."?productId="..productId.."&shopId="..shopId\n\n-- 获取 http 包\nlocal http = require("resty.http")\nlocal httpc = http.new()\n\n-- 访问，这里有疑问：万一有 cooke 这些脚本支持吗？会很麻烦吗？\nlocal resp, err = httpc:request_uri(backend, {\n    method = "GET",\n    path = requestBody,\n    keepalive=false\n})\n\n-- 如果没有响应则输出一个 err 信息\nif not resp then\n    ngx.say("request error :", err)\n    return\nend\n\n-- 有响应测输出响应信息\nngx.say(resp.body)  \n\n-- 关闭 http 客户端实例\nhttpc:close()\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])]),n("h2",{attrs:{id:"应用层-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用层-nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 应用层 nginx")]),s._v(" "),n("p",[s._v("应用层在 eshop-cache01 和 eshop-cache02 上。\n这里可以再 01 上写完逻辑，然后再 copy 到 02 上。")]),s._v(" "),n("p",[s._v("先安装依赖：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 需要再后端服务获取信息，安装 http 依赖\ncd /usr/hello/lualib/resty/\nwget https://raw.githubusercontent.com/pintsized/lua-resty-http/master/lib/resty/http_headers.lua  \nwget https://raw.githubusercontent.com/pintsized/lua-resty-http/master/lib/resty/http.lua\n\n# 拿到数据之后需要进行模板渲染，添加 template 依赖\n# 这里渲染也是使用 lua 来完成\ncd /usr/hello/lualib/resty/\nwget https://raw.githubusercontent.com/bungle/lua-resty-template/master/lib/resty/template.lua\nmkdir /usr/hello/lualib/resty/html\ncd /usr/hello/lualib/resty/html\nwget https://raw.githubusercontent.com/bungle/lua-resty-template/master/lib/resty/template/html.lua\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("/usr/hello/hello.conf")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 配置 lua 的一个缓存实例，my_cache 是我们自定义的一块缓存名称\n# 要配置在 http 中，server 外，否则会报错\n# nginx: [emerg] "lua_shared_dict" directive is not allowed here in /usr/hello/hello.conf:11\nlua_shared_dict my_cache 128m;\nserver {  \n    listen       80;  \n    server_name  _;\n\n    # 配置模板路径\n    set $template_location "/templates";  \n    # 当然这个路径需要存在，因为后续需要用来存放 html\n    set $template_root "/usr/hello/templates";\n\n    location /lua {  \n      default_type \'text/html\';  \n      # 防止响应中文乱码\n      charset utf-8;\n      content_by_lua_file /usr/hello/lua/hello.lua;\n    }\n\n    # 配置一个脚本映射，访问 product 的时候\n    # 就执行 product.lua 脚本来完成 获取缓存渲染 html 并返回 html 的功能\n    location /product {\n      default_type \'text/html\';\n      # 防止响应中文乱码\n      charset utf-8;\n      content_by_lua_file /usr/hello/lua/product.lua;\n    }    \n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("/usr/hello/lua/product.lua")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('local uri_args = ngx.req.get_uri_args()\nlocal productId = uri_args["productId"]\nlocal shopId = uri_args["shopId"]\n\n-- 获取到之前配置中分配的缓存对象\nlocal cache_ngx = ngx.shared.my_cache\n\n-- 拼接两个缓存 key\nlocal productCacheKey = "product_info_"..productId\nlocal shopCacheKey = "shop_info_"..shopId\n\n-- 通过缓存对象获取缓存中的 value\nlocal productCache = cache_ngx:get(productCacheKey)\nlocal shopCache = cache_ngx:get(shopCacheKey)\n\n-- 如果缓存中不存在对于的 value\n-- 就走后端缓存服务获取数据（缓存服务先走 redis ，不存在再走 ehcache，再走数据库）\nif productCache == "" or productCache == nil then\n\tlocal http = require("resty.http")\n\tlocal httpc = http.new()\n  -- 这里地址是开发机器 ip，因为我们在 windows 上开发的，\n  -- 这里直接访问开发环境比较方便\n\tlocal resp, err = httpc:request_uri("http://192.168.99.111:6002",{\n  \t\tmethod = "GET",\n  \t\tpath = "/getProductInfo?productId="..productId,\n      keepalive=false\n\t})\n\n\tproductCache = resp.body\n  -- 获取到之后，再设置到缓存中\n\tcache_ngx:set(productCacheKey, productCache, 10 * 60)\nend\n\nif shopCache == "" or shopCache == nil then\n\tlocal http = require("resty.http")\n\tlocal httpc = http.new()\n\n\tlocal resp, err = httpc:request_uri("http://192.168.99.111:6002",{\n  \t\tmethod = "GET",\n  \t\tpath = "/getShopInfo?shopId="..shopId,\n      keepalive=false\n\t})\n\n\tshopCache = resp.body\n\tcache_ngx:set(shopCacheKey, shopCache, 10 * 60)\nend\n\n-- 因为存到缓存中是一个字符串\n-- 所以使用 cjson 库把字符串转成 json 对象\nlocal cjson = require("cjson")\nlocal productCacheJSON = cjson.decode(productCache)\nlocal shopCacheJSON = cjson.decode(shopCache)\n\n-- 把商品信息和店铺信息拼接到一个大 json 对象中\n-- 这样做的原因是：template 渲染需要这样做\nlocal context = {\n\tproductId = productCacheJSON.id,\n\tproductName = productCacheJSON.name,\n\tproductPrice = productCacheJSON.price,\n\tproductPictureList = productCacheJSON.pictureList,\n\tproductSpecification = productCacheJSON.specification,\n\tproductService = productCacheJSON.service,\n\tproductColor = productCacheJSON.color,\n\tproductSize = productCacheJSON.size,\n\tshopId = shopCacheJSON.id,\n\tshopName = shopCacheJSON.name,\n\tshopLevel = shopCacheJSON.level,\n\tshopGoodCommentRate = shopCacheJSON.goodCommentRate\n}\n\n-- 使用 template 渲染 product.html 模板\nlocal template = require("resty.template")\ntemplate.render("product.html", context)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br")])]),n("p",[s._v("product.html 内容，就是很简单的插值占位")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[s._v("product id: {* productId *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nproduct name: {* productName *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nproduct picture list: {* productPictureList *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nproduct specification: {* productSpecification *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nproduct service: {* productService *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nproduct color: {* productColor *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nproduct size: {* productSize *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nshop id: {* shopId *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nshop name: {* shopName *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nshop level: {* shopLevel *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\nshop good cooment rate: {* shopGoodCommentRate *}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("配置完成后，记得测试配置文件和重启 nginx")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("/usr/servers/nginx/sbin/nginx -t\n/usr/servers/nginx/sbin/nginx -s reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"错误解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#错误解决","aria-hidden":"true"}},[s._v("#")]),s._v(" 错误解决")]),s._v(" "),n("p",[s._v("如果报错 "),n("code",[s._v("product.lua:20: module 'resty.http' not found:")]),s._v(" 那么请检查")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/servers/nginx/conf/nginx.conf\n这里引入的内容是否是 hello 目录下的。\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    lua_package_path "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/hello/lualib/?.lua;;"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    lua_package_cpath "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/hello/lualib/?.so;;"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),n("p",[s._v("访问地址："),n("code",[s._v("http://eshop-cache02/product?productId=1&shopId=1")])]),s._v(" "),n("p",[s._v("肯定会报错，因为后端服务都没有写的。但是可以看看日志报错信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('tail -f /usr/servers/nginx/logs/error.log\n可以看到如下的错误：\n\n2019/05/06 22:19:10 [error] 8758#0: *34 connect() failed (113: No route to host), client: 192.168.99.1, server: _, request: "GET /product?productId=1&shopId=1 HTTP/1.1", host: "eshop-cache02"\n2019/05/06 22:19:10 [error] 8758#0: *34 lua entry thread aborted: runtime error: /usr/hello/lua/product.lua:29: attempt to index local \'resp\' (a nil value)\nstack traceback:\ncoroutine 0:\n\t/usr/hello/lua/product.lua: in function </usr/hello/lua/product.lua:1>, client: 192.168.99.1, server: _, request: "GET /product?productId=1&shopId=1 HTTP/1.1", host: "eshop-cache02"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("看到去访问后端服务了，没有返回信息。下一章继续后端服务的编写")]),s._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[s._v("由于搬家，宿主机 IP 变更了，但是虚拟机上已经安装了好多软件。\n没有耐心再修改一次 IP 了，所以改用了 hostonly 来保证虚拟机和宿主机的联通，并且虚拟机可以上网。"),n("router-link",{attrs:{to:"/_posts/virtualbox/"}},[s._v("设置方法在这篇文章中")]),s._v("；")],1),s._v(" "),n("p",[s._v("所以后续对宿主机的访问，会更改 IP ，与这之前的笔记中看到的 IP 会不一致")])])])},[],!1,null,null,null);a.default=e.exports}}]);