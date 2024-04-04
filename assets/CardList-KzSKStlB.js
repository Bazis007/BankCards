import{j as e,M as x,r as n,B as j,u as k,a as p,w as N,i as C}from"./index-XJuMi1OI.js";var v=(s=>(s[s.notAuth=401]="notAuth",s[s.serverOut=500]="serverOut",s[s.invalidRequest=400]="invalidRequest",s))(v||{});function M({error:s}){let t="";switch(s.status){case v.notAuth:t="Ошибка авторизации";break;case v.invalidRequest:t=s.data.message;break;case 500:t="Все упало";break}return e.jsx(x,{message:t})}function B(){return e.jsx("div",{className:"loader"})}function D(){return e.jsxs("div",{className:"loading",children:[e.jsx(B,{}),e.jsx("p",{children:"Подгрузка компаний"})]})}const E=(s,t=200)=>{let c=null;return(...r)=>{c!==null&&(clearTimeout(c),c=null),c=setTimeout(()=>s(...r),t)}},A=s=>n.createElement("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",...s},n.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",stroke:"none"},n.createElement("path",{d:"M2320 4549 c-764 -69 -1431 -451 -1949 -1117 -181 -232 -295 -433 -342 -602 -21 -75 -24 -106 -24 -270 0 -163 3 -195 24 -270 89 -325 463 -814 881 -1153 362 -294 815 -487 1300 -554 172 -23 528 -23 700 0 731 101 1345 470 1838 1104 182 233 296 434 343 603 21 75 24 106 24 270 0 164 -3 195 -24 270 -47 169 -161 370 -342 602 -494 635 -1113 1007 -1834 1103 -147 20 -453 27 -595 14z m590 -453 c653 -112 1222 -506 1631 -1129 91 -138 126 -220 141 -328 23 -165 -17 -300 -147 -495 -370 -556 -867 -932 -1422 -1074 -171 -45 -287 -60 -488 -67 -376 -12 -686 54 -1021 217 -390 189 -743 509 -1019 924 -92 139 -132 228 -147 336 -23 166 16 300 147 496 377 566 885 944 1455 1083 63 16 156 34 205 40 50 6 101 13 115 15 61 11 460 -3 550 -18z"}),n.createElement("path",{d:"M2374 3616 c-232 -44 -406 -136 -570 -300 -142 -141 -230 -294 -282 -485 -23 -86 -26 -114 -26 -271 0 -157 3 -185 26 -271 101 -375 392 -666 764 -766 89 -24 116 -27 274 -27 158 0 185 3 274 27 372 100 663 392 764 766 22 85 26 116 26 266 1 195 -15 277 -82 432 -54 126 -121 223 -226 329 -144 144 -308 237 -500 285 -105 27 -340 34 -442 15z m281 -431 c212 -23 414 -189 502 -410 26 -65 28 -80 28 -215 0 -140 -1 -148 -32 -225 -59 -146 -183 -280 -319 -345 -91 -44 -167 -61 -274 -61 -107 0 -183 17 -274 61 -136 65 -260 199 -319 345 -31 77 -32 85 -32 225 0 135 2 150 28 215 72 181 205 314 381 380 66 25 185 45 236 39 14 -2 48 -6 75 -9z"}))),L=s=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",...s},n.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",stroke:"none"},n.createElement("path",{d:"M2136 5105 c-395 -81 -723 -387 -823 -770 l-17 -64 -367 -3 -367 -3 -44 -30 c-136 -97 -124 -301 23 -376 32 -16 59 -19 173 -19 l136 0 2 -1472 3 -1473 27 -97 c95 -345 342 -617 671 -738 158 -58 110 -55 1007 -55 l825 0 85 23 c108 29 286 116 370 180 196 149 332 351 398 590 l27 97 3 1473 2 1472 136 0 c153 0 189 11 242 76 81 98 60 244 -46 319 l-44 30 -367 3 -367 3 -17 64 c-94 361 -389 653 -765 758 -72 19 -104 21 -457 23 -294 2 -396 0 -449 -11z m829 -449 c179 -62 323 -191 389 -349 l15 -37 -809 0 -809 0 15 37 c78 185 272 336 477 372 29 5 185 9 347 7 294 -2 295 -2 375 -30z m873 -2248 c-4 -1599 2 -1470 -75 -1627 -48 -100 -168 -222 -268 -273 -148 -77 -102 -73 -935 -73 -833 0 -787 -4 -935 73 -101 52 -220 173 -268 272 -77 158 -71 28 -75 1628 l-3 1432 1281 0 1281 0 -3 -1432z"}),n.createElement("path",{d:"M2033 2965 c-32 -16 -61 -41 -79 -67 l-29 -41 -3 -712 -2 -711 23 -45 c13 -24 43 -57 66 -74 39 -27 50 -30 125 -30 75 0 87 3 124 29 26 18 51 47 67 79 l25 51 0 690 c0 651 -2 693 -19 731 -52 113 -183 157 -298 100z"}),n.createElement("path",{d:"M2895 2971 c-22 -10 -52 -31 -67 -47 -60 -64 -58 -40 -58 -792 l0 -688 25 -51 c38 -75 89 -107 179 -111 91 -4 146 22 194 92 l32 49 -2 717 -3 717 -29 41 c-56 82 -180 115 -271 73z"})));function g(s){const[t,c]=n.useState(s);return[t,()=>{c(!t)}]}const T=({accentColor:s,mainColor:t,backgroundColor:c,companyId:a})=>{const r={color:t,background:c},[d,o]=g(!1),[m,i]=g(!1),[u,l]=g(!1),h=()=>{o()},f=()=>{i()},_=()=>{l()},w=e.jsxs("div",{children:[e.jsx("p",{children:"View"}),e.jsx("p",{children:a})]}),y=e.jsxs("div",{children:[e.jsx("p",{children:"Delete"}),e.jsx("p",{children:a})]}),b=e.jsxs("div",{children:[e.jsx("p",{children:"Details"}),e.jsx("p",{children:a})]});return e.jsxs("div",{className:"card__nav",children:[e.jsx(j,{onClick:h,className:"card__nav--view",children:e.jsx(A,{fill:t})}),e.jsx(j,{onClick:f,className:"card__nav--del",children:e.jsx(L,{fill:s})}),e.jsx(j,{onClick:_,style:r,children:"Подробнее"}),d&&e.jsx(x,{cb:o,children:w}),m&&e.jsx(x,{cb:i,children:y}),u&&e.jsx(x,{cb:l,children:b})]})},z=({card:s})=>{const{mobileAppDashboard:t,customerMarkParameters:c}=s,{accentColor:a,mainColor:r,backgroundColor:d}=t,o={color:t.highlightTextColor},m={background:t.cardBackgroundColor},i={color:t.textColor};return e.jsxs("article",{className:"card__item",style:m,children:[e.jsxs("div",{className:"card__title",children:[e.jsx("p",{style:o,children:t.companyName}),e.jsx("img",{src:t.logo})]}),e.jsxs("div",{className:"card__info",children:[e.jsxs("p",{className:"card__desc",style:i,children:[e.jsxs("span",{className:"card__desc--ball",style:o,children:[c.mark," "]}),"баллов"]}),e.jsx("div",{className:"card__desc--other",children:e.jsxs("dl",{className:"card__desc-list",children:[e.jsxs("div",{className:"list__item",children:[e.jsx("dt",{style:i,children:"Кешбэк"}),e.jsxs("dd",{children:[c.loyaltyLevel.number,"%"]})]}),e.jsxs("div",{className:"list__item",children:[e.jsx("dt",{style:i,children:"Уровень"}),e.jsxs("dd",{children:[c.loyaltyLevel.name," уровень"]})]})]})})]}),e.jsx(T,{accentColor:a,mainColor:r,backgroundColor:d,companyId:s.company.companyId})]})},R=()=>{const s=k(),t=p(l=>l.data.offset),c=p(l=>l.data.limit),a=p(l=>l.data.loadAllCards),{data:r,isError:d,isFetching:o,error:m}=N.useGetCardsQuery({offset:t,limit:c}),i=(r==null?void 0:r.companies)??[],u=m;return n.useEffect(()=>{const h=E(()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-10&&!o&&!a&&!d&&s(C())});return document.addEventListener("scroll",h),function(){document.removeEventListener("scroll",h)}},[t,o]),e.jsxs("section",{className:"section__list",children:[e.jsx("h2",{children:" Управление картами "}),e.jsxs("ul",{className:"list__card",children:[i.map(l=>e.jsx(z,{card:l},l.company.companyId)),o&&e.jsx(D,{})]}),d&&e.jsx(M,{error:u})]})};export{R as default};
