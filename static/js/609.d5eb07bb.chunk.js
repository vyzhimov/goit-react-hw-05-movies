"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[609],{609:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(142);function c(e,r,n){return(r=(0,t.Z)(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var o=n(861),s=n(439),u=n(687),l=n.n(u),p=n(791),d=n(689),f=n(87),h=n(876),v=n(184),g=function(){var e,r,n=(0,d.TH)(),t=(0,p.useRef)(null!==(e=null===(r=n.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies"),c=(0,d.UO)().movieId,a=(0,p.useState)({}),u=(0,s.Z)(a,2),g=u[0],j=u[1],b=(0,h.Z)("movieInfo",c);(0,p.useEffect)((function(){function e(){return(e=(0,o.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.e)(b).then((function(e){return e.data}));case 3:r=e.sent,j(i({},r)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]);var m=g.poster_path,x=g.original_title,w=g.vote_average,y=g.overview,O=g.genres;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.rU,{to:t.current,children:"Go Back"}),(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(m),alt:x,width:"200"})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:x}),(0,v.jsxs)("p",{children:["User Score: ",Math.round(10*w),"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:y}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("p",{children:O&&O.map((function(e,r,n){var t=e.id,c=e.name;return r!==n.length-1?(0,v.jsxs)("span",{children:[c,", "]},t):(0,v.jsx)("span",{children:c},t)}))})]}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(p.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(d.j3,{})})]})}},876:function(e,r,n){n.d(r,{Z:function(){return u},e:function(){return l}});var t=n(861),c=n(687),a=n.n(c),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="326ecd742c922271411e34618fb1e345",s="en-US",u=function(e,r,n){switch(e){case"trending":return"/trending/movie/day?api_key=".concat(o);case"movieInfo":return"/movie/".concat(r,"?api_key=").concat(o,"&language=").concat(s);case"cast":return"/movie/".concat(r,"/credits?api_key=").concat(o,"&language=").concat(s);case"reviews":return"/movie/".concat(r,"/reviews?api_key=").concat(o,"&$language={language}&page=1");case"searchMovie":return"/search/movie?api_key=".concat(o,"&language=").concat(s,"&query=").concat(n,"&page=1&include_adult=false");default:console.log("default")}},l=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.Z.get("".concat(r)),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=609.d5eb07bb.chunk.js.map