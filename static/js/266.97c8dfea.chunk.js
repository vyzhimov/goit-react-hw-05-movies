"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{266:function(e,t,n){n.r(t);var r=n(433),a=n(861),c=n(439),u=n(687),i=n.n(u),o=n(689),s=n(87),f=n(791),p=n(613),l=n(184);t.default=function(){var e=(0,o.TH)(),t=(0,f.useState)([]),n=(0,c.Z)(t,2),u=n[0],v=n[1],d=(0,p.ZJ)("trending");return(0,f.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.eP)(d).then((function(e){return e.data.results}));case 3:t=e.sent,v((0,r.Z)(t)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d]),(0,l.jsx)("ul",{children:u.map((function(t){var n=t.id,r=t.original_title,a=t.backdrop_path;return(0,l.jsx)("li",{children:(0,l.jsxs)(s.rU,{to:"/movies/".concat(n),state:{from:e},children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(a),alt:r,width:"200"}),r]})},n)}))})}},613:function(e,t,n){n.d(t,{ZJ:function(){return i},eP:function(){return o},on:function(){return s}});var r=n(861),a=n(687),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(e,t){switch(e){case"trending":return"/trending/movie/day";case"movieInfo":return"/movie/".concat(t);case"cast":return"/movie/".concat(t,"/credits");case"reviews":return"/movie/".concat(t,"/reviews");case"searchMovie":return"/search/movie";default:console.log("default")}},o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"",r=u.Z.get("".concat(t),{params:{api_key:"326ecd742c922271411e34618fb1e345",language:"en-US",query:n,page:1}}),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.Z.get("search/movie?api_key=326ecd742c922271411e34618fb1e345&query=".concat(t,"&language=en-US&page=1&include_adult=false")),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=266.97c8dfea.chunk.js.map