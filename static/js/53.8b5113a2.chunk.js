"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[53],{53:function(e,n,t){t.r(n);var r=t(433),a=t(861),c=t(439),u=t(687),i=t.n(u),o=t(689),s=t(87),l=t(791),f=t(876),p=t(184);n.default=function(){var e,n=(0,o.TH)(),t=(0,s.lr)(),u=(0,c.Z)(t,2),h=u[0],v=u[1],d=(0,l.useState)(""),g=(0,c.Z)(d,2),m=g[0],k=g[1],y=(0,l.useState)([]),x=(0,c.Z)(y,2),_=x[0],w=x[1],b=null!==(e=h.get("query"))&&void 0!==e?e:"",Z=(0,f.Z)("searchMovie","",b);return(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.e)(Z).then((function(e){return e.data.results}));case 3:n=e.sent,w((0,r.Z)(n)),console.log(n),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}b&&function(){e.apply(this,arguments)}()}),[Z,b]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(""===m?{}:{query:m.trim()})},children:[(0,p.jsx)("input",{type:"text",name:"movie",value:m,onChange:function(e){k(e.currentTarget.value)}}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),b&&(0,p.jsx)("ul",{children:_.filter((function(e){return"en"===e.original_language})).map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:n},children:(0,p.jsx)("h2",{children:e.original_title})})},e.id)}))})]})}},876:function(e,n,t){t.d(n,{Z:function(){return s},e:function(){return l}});var r=t(861),a=t(687),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="326ecd742c922271411e34618fb1e345",o="en-US",s=function(e,n,t){switch(e){case"trending":return"/trending/movie/day?api_key=".concat(i);case"movieInfo":return"/movie/".concat(n,"?api_key=").concat(i,"&language=").concat(o);case"cast":return"/movie/".concat(n,"/credits?api_key=").concat(i,"&language=").concat(o);case"reviews":return"/movie/".concat(n,"/reviews?api_key=").concat(i,"&$language={language}&page=1");case"searchMovie":return"/search/movie?api_key=".concat(i,"&language=").concat(o,"&query=").concat(t,"&page=1&include_adult=false");default:console.log("default")}},l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.Z.get("".concat(n)),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=53.8b5113a2.chunk.js.map