"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1544:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(3433),r=n(5861),c=n(9439),i=n(4687),u=n.n(i),s=n(2791),o=n(7689),p=n(6613),l=n(717),f=n(184),d=function(){var e=(0,o.UO)().movieId,t=(0,s.useState)([]),n=(0,c.Z)(t,2),i=n[0],d=n[1],h=(0,p.Z)("cast",e),v=(0,s.useState)(!1),g=(0,c.Z)(v,2),m=g[0],k=g[1],x=(0,s.useState)(!1),w=(0,c.Z)(x,2),Z=w[0],_=w[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,p.e)(h).then((function(e){return e.data.cast}));case 4:t=e.sent,d((0,a.Z)(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),_(e.t0.message);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),(0,f.jsxs)(f.Fragment,{children:[m&&(0,f.jsx)(l.Z,{}),Z&&(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:Z})}),!m&&(0,f.jsx)("ul",{children:i&&i.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h2",{children:e.name}),(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.profile_path),alt:e.name,width:"200px"})]},e.id)}))})]})}},6613:function(e,t,n){n.d(t,{Z:function(){return o},e:function(){return p}});var a=n(5861),r=n(4687),c=n.n(r),i=n(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="326ecd742c922271411e34618fb1e345",s="en-US",o=function(e,t,n){switch(e){case"trending":return"/trending/movie/day?api_key=".concat(u);case"movieInfo":return"/movie/".concat(t,"?api_key=").concat(u,"&language=").concat(s);case"cast":return"/movie/".concat(t,"/credits?api_key=").concat(u,"&language=").concat(s);case"reviews":return"/movie/".concat(t,"/reviews?api_key=").concat(u,"&$language={language}&page=1");case"searchMovie":return"/search/movie?api_key=".concat(u,"&language=").concat(s,"&query=").concat(n,"&page=1&include_adult=false");default:console.log("default")}},p=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.Z.get("".concat(t)),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.61f644ea.chunk.js.map