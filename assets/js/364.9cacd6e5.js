(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{867:function(e,t,r){"use strict";r.r(t);var n=r(2),s=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"lucene-相关度分数算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lucene-相关度分数算法","aria-hidden":"true"}},[e._v("#")]),e._v(" lucene 相关度分数算法")]),e._v(" "),r("p",[e._v("之前讲解到 boolean model、TF/IDF、vector space model")]),e._v(" "),r("p",[e._v("本章是深入讲解 TF/IDF 算法在 lucene 中，底层到底进行 TF/IDF 算法计算的一个完整的公式是什么？")]),e._v(" "),r("blockquote",[r("p",[e._v("lucene practical scoring function")])]),e._v(" "),r("p",[e._v("practical scoring function：来计算一个 query 对一个 doc 的分数的公式，该函数会使用一个公式来计算")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("score(q,d)  =  \n            queryNorm(q)  \n          · coord(q,d)    \n          · ∑ (           \n                tf(t in d)   \n              · idf(t)2      \n              · t.getBoost()\n              · norm(t,d)    \n            ) (t in q)\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br")])]),r("ul",[r("li",[r("p",[e._v("score(q,d) is the relevance score of document d for query q.")]),e._v(" "),r("p",[e._v("这个公式的最终结果，就是说是一个 query（叫做 q），对一个 doc（叫做 d）的最终的总评分")])]),e._v(" "),r("li",[r("p",[e._v("queryNorm(q) is the query normalization factor (new).")]),e._v(" "),r("p",[e._v("是用来让一个 doc 的分数处于一个合理的区间内，不要太离谱，\n举个例子，一个 doc 分数是 10000，一个 doc 分数是 0.1，你们说好不好，肯定不好")])]),e._v(" "),r("li",[r("p",[e._v("coord(q,d) is the coordination factor (new).")]),e._v(" "),r("p",[e._v("简单来说，就是对更加匹配的 doc，进行一些分数上的成倍的奖励")]),e._v(" "),r("p",[e._v("The sum of the weights for each term t in the query q for document d.")])]),e._v(" "),r("li",[r("p",[e._v("∑：求和的符号")])]),e._v(" "),r("li",[r("p",[e._v("∑ (t in q)：")]),e._v(" "),r("p",[e._v("query 中每个 term，query = hello world，query 中的 term 就包含了 hello 和 world\nquery 中每个 term 对 doc 的分数，进行求和，多个 term 对一个 doc 的分数，组成一个 vector space，然后计算，就在这一步")])]),e._v(" "),r("li",[r("p",[e._v("tf(t in d) is the term frequency for term t in document d.")]),e._v(" "),r("p",[e._v("计算每一个term对doc的分数的时候，就是TF/IDF算法")])]),e._v(" "),r("li",[r("p",[e._v("idf(t) is the inverse document frequency for term t.")])]),e._v(" "),r("li",[r("p",[e._v("t.getBoost() is the boost that has been applied to the query (new).")])]),e._v(" "),r("li",[r("p",[e._v("norm(t,d) is the field-length norm, combined with the index-time field-level boost, if any. (new).")])])]),e._v(" "),r("h2",{attrs:{id:"query-normalization-factor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-normalization-factor","aria-hidden":"true"}},[e._v("#")]),e._v(" query normalization factor")]),e._v(" "),r("p",[r("code",[e._v("queryNorm = 1 / √sumOfSquaredWeights")])]),e._v(" "),r("p",[e._v("sumOfSquaredWeights = 所有 term 的 IDF 分数之和，开一个平方根，然后做一个平方根分之 1")]),e._v(" "),r("p",[e._v("主要是为了将分数进行规范化 --\x3e 开平方根，首先数据就变小了 --\x3e 然后还用 1 去除以这个平方根，分数就会很小 --\x3e 1.几 / 零点几")]),e._v(" "),r("p",[e._v("分数就不会出现几万，几十万，那样的离谱的分数")]),e._v(" "),r("h2",{attrs:{id:"query-coodination"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-coodination","aria-hidden":"true"}},[e._v("#")]),e._v(" query coodination")]),e._v(" "),r("p",[e._v("奖励那些匹配更多字符的 doc 更多的分数")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Document 1 with hello → score: 1.5\nDocument 2 with hello world → score: 3.0\nDocument 3 with hello world java → score: 4.5\n\nDocument 1 with hello → score: 1.5 * 1 / 3 = 0.5\nDocument 2 with hello world → score: 3.0 * 2 / 3 = 2.0\nDocument 3 with hello world java → score: 4.5 * 3 / 3 = 4.5\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br")])]),r("p",[e._v("把计算出来的总分数 * 匹配上的 term 数量 / 总的 term 数量，让匹配不同 term/query 数量的doc，分数之间拉开差距")]),e._v(" "),r("h2",{attrs:{id:"field-level-boost"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#field-level-boost","aria-hidden":"true"}},[e._v("#")]),e._v(" field level boost")]),e._v(" "),r("p",[e._v("自定义权重")]),e._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",[e._v("这章基本上没有看懂")])])])},[],!1,null,null,null);t.default=s.exports}}]);