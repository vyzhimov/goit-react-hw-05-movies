"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{6535:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a,i=t(168),c=t(7402),o=c.Z.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 100px;\n  color: #fff;\n  font-size: 20px;\n"]))),s=c.Z.img(a||(a=(0,i.Z)(["\n  display: block;\n  width: 100px;\n"]))),p=t.p+"static/media/Warning.c9e1ed1b959a2b410eca.png",l=t(184),u=function(n){var e=n.message;return(0,l.jsxs)(o,{children:[(0,l.jsx)(s,{src:p,alt:"warning"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Sorry there was an error. Please, reload the page! "}),(0,l.jsxs)("p",{children:["Code: ",e]})]})]})}},9294:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,a,i,c,o,s,p,l,u,x,d=t(1413),f=t(5861),h=t(9439),g=t(4687),v=t.n(g),m=t(2791),Z=t(7689),j=t(6613),w=t(7425),b=t(5667),k=t(717),y=t(6535),_=t(168),S=t(7402),z=t(1087),C=(0,S.Z)(z.rU)(r||(r=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 200px;\n  height: 32px;\n  padding: 5px 20px;\n  margin: 0 auto;\n  margin-top: 30px;\n  border: 1px solid #fff;\n  font-size: 16px;\n  font-weight: 700;\n  text-decoration: none;\n  text-align: center;\n  color: #fff;\n  background-color: ",";\n  -webkit-box-shadow: -1px 0px 12px -3px rgba(255, 255, 255, 1);\n  -moz-box-shadow: -1px 0px 12px -3px rgba(255, 255, 255, 1);\n  box-shadow: -1px 0px 12px -3px rgba(255, 255, 255, 1);\n  transition: all 250ms;\n\n  &:hover,\n  &:focus-visible {\n    background-color: #e20712;\n    transform: scale(1.1);\n    -webkit-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);\n    -moz-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);\n    box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);\n  }\n"])),(function(n){return"true"===n.active?"#e20712":"transparent"})),U=S.Z.div(a||(a=(0,_.Z)(["\n  display: flex;\n  padding: 30px 0;\n  gap: 30px;\n  align-items: stretch;\n"]))),I=S.Z.div(i||(i=(0,_.Z)(["\n  width: 400px;\n  height: 600px;\n"]))),M=S.Z.img(c||(c=(0,_.Z)(["\n  display: block;\n  width: 400px;\n  height: auto;\n"]))),O=S.Z.div(o||(o=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  color: #fff;\n"]))),R=S.Z.h1(s||(s=(0,_.Z)(["\n  font-size: 50px;\n"]))),T=S.Z.p(p||(p=(0,_.Z)(["\n font-size: 24px;  \n color: ","}\n"])),(function(n){var e=n.rate;return e<50?"red":e>50&&e<80?"yellow":"green"})),F=S.Z.h2(l||(l=(0,_.Z)(["\n  font-size: 32px;\n"]))),G=S.Z.p(u||(u=(0,_.Z)(["\n  font-size: 20px;\n  max-width: 80%;\n"]))),P=S.Z.ul(x||(x=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n"]))),Y=t(531),q=t.p+"static/media/noposterdefault.8a5ba7e5187f7207c445.png",A=t(184),B=function(n){var e=n.movieInfo,t=e.poster_path,r=e.original_title,a=e.release_date,i=e.vote_average,c=e.overview,o=e.genres,s=a?(0,Y.Z)(a):"Unknown",p=Math.round(10*i);return(0,A.jsxs)(U,{children:[(0,A.jsx)(I,{children:(0,A.jsx)(M,{src:t?"https://image.tmdb.org/t/p/original/".concat(t):q,alt:r})}),(0,A.jsxs)(O,{children:[(0,A.jsx)(R,{children:"".concat(r," (").concat(s,")")}),(0,A.jsxs)(T,{rate:p,children:["User Score: ",p,"%"]}),(0,A.jsx)(F,{children:"Overview"}),(0,A.jsx)(G,{children:c}),(0,A.jsx)(F,{children:"Genres"}),(0,A.jsx)(G,{children:o&&o.map((function(n,e,t){var r=n.id,a=n.name;return e!==t.length-1?(0,A.jsxs)("span",{children:[a,", "]},r):(0,A.jsx)("span",{children:a},r)}))})]})]})},D=function(){var n,e,t=(0,Z.TH)(),r=(0,m.useRef)(null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),a=(0,Z.UO)().movieId,i=(0,m.useState)({}),c=(0,h.Z)(i,2),o=c[0],s=c[1],p=(0,j.Z)("movieInfo",a),l=(0,m.useState)(!1),u=(0,h.Z)(l,2),x=u[0],g=u[1],_=(0,m.useState)(null),S=(0,h.Z)(_,2),z=S[0],U=S[1],I=(0,m.useState)(""),M=(0,h.Z)(I,2),O=M[0],R=M[1],T=function(n){R(n.target.id),b.NY.scrollTo(730)};return(0,m.useEffect)((function(){function n(){return(n=(0,f.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,(0,j.e)(p).then((function(n){return n.data}));case 4:e=n.sent,s((0,d.Z)({},e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),U(n.t0.message);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[p]),(0,A.jsxs)(A.Fragment,{children:[x&&(0,A.jsx)(k.Z,{}),z&&(0,A.jsx)(y.Z,{}),!x&&!z&&(0,A.jsxs)("div",{children:[(0,A.jsxs)(C,{to:r.current,children:[(0,A.jsx)(w.TPM,{})," GO BACK"]}),(0,A.jsx)(B,{movieInfo:o}),(0,A.jsxs)(P,{children:[(0,A.jsx)("li",{children:(0,A.jsx)(C,{to:"cast",id:"cast",onClick:T,active:("cast"===O).toString(),children:"Cast"})}),(0,A.jsx)("li",{children:(0,A.jsx)(C,{to:"reviews",id:"reviews",onClick:T,active:("reviews"===O).toString(),children:"Reviews"})})]}),(0,A.jsx)(m.Suspense,{fallback:(0,A.jsx)(k.Z,{}),children:(0,A.jsx)(Z.j3,{})})]})]})}},531:function(n,e,t){function r(n){return new Date(n).getFullYear()}t.d(e,{Z:function(){return r}})},6613:function(n,e,t){t.d(e,{Z:function(){return p},e:function(){return l}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="326ecd742c922271411e34618fb1e345",s="en-US",p=function(n,e,t){switch(n){case"trending":return"/trending/movie/day?api_key=".concat(o);case"movieInfo":return"/movie/".concat(e,"?api_key=").concat(o,"&language=").concat(s);case"cast":return"/movie/".concat(e,"/credits?api_key=").concat(o,"&language=").concat(s);case"reviews":return"/movie/".concat(e,"/reviews?api_key=").concat(o,"&$language={language}&page=1");case"searchMovie":return"/search/movie?api_key=".concat(o,"&language=").concat(s,"&query=").concat(t,"&page=1&include_adult=false");default:console.log("default")}},l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get("".concat(e)),n.abrupt("return",t);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=947.f9cc210e.chunk.js.map