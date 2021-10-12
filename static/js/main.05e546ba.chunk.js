(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(37),i=n.n(c),r=n(17),s=n(12),l=n(60),o=n.n(l),j=n(14),u=n(55),h=n(180),b=n(102),d=n(187),x=n(188),O=n(189),p=n(190),g=n(98),m=n.n(g),f=n(2),v=function(e){var t=e.changeTheme,n=e.currentTheme,a="light"===n?"dark":"light";return Object(f.jsxs)(x.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:80,padding:2,boxShadow:"3",background:"dark"===n?"hsl(209, 23%, 22%)":"#fff"},children:[Object(f.jsx)(O.a,{variant:"h1",sx:{fontSize:17,fontFamily:"Nunito Sans, sans-serif",fontWeight:"800"},children:"Where in the world?"}),Object(f.jsxs)(p.a,{onClick:t,color:"inherit",sx:{fontFamily:"Nunito Sans,sans-serif",fontWeight:600},startIcon:Object(f.jsx)(m.a,{sx:{transform:"scaleX(-1)"}}),children:[a," Mode"]})]})},y=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),i=c[0],r=c[1];Object(a.useEffect)((function(){localStorage.getItem("theme")||localStorage.setItem("theme","light");var e=localStorage.getItem("theme");r(e)}),[i]);var l=Object(a.useMemo)((function(){return Object(b.a)((e=i,{palette:Object(u.a)(Object(u.a)({mode:e,primary:Object(u.a)({},"dark"===e?{main:"hsl(209, 23%, 22%)"}:{main:"#fff"})},"dark"===e?{background:{default:"hsl(207, 26%, 17%)",paper:"hsl(209, 23%, 22%)"}}:{background:{default:"hsl(0, 0%, 98%)",input:"hsl(0, 0%, 100%)"}}),{},{text:Object(u.a)({},"light"===e?{primary:"hsl(200, 15%, 8%)",secondary:"hsl(200, 15%, 8%)"}:{primary:"hsl(0, 0%, 100%)"})})}));var e}),[i]);return Object(f.jsx)(d.a,{theme:l,injectFirst:!0,children:Object(f.jsxs)("div",{style:{maxWidth:1920,margin:"0 auto"},children:[Object(f.jsx)(h.a,{}),Object(f.jsx)(v,{changeTheme:function(){"light"===i?(localStorage.setItem("theme","dark"),r("dark")):(localStorage.setItem("theme","light"),r("light"))},currentTheme:i}),t]})})},C=n(63),w=n(191),S=n(193),I=n(194),k=n(195),R=function(e){var t=e.allCountryData,n=e.clicked,a=t.name,c=t.population,i=t.region,r=t.capital,s=t.photo;return Object(f.jsx)(C.b,{to:"/rest-countries-api/".concat(a),onClick:n,style:{textDecoration:"none"},children:Object(f.jsx)(w.a,{sx:{width:280,margin:"18px",minHeight:300},children:Object(f.jsxs)(S.a,{children:[Object(f.jsx)(I.a,{component:"img",height:"150",image:s,alt:"".concat(a," flag")}),Object(f.jsxs)(k.a,{children:[Object(f.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",children:a}),Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Population"}),": ",c]}),Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Region:"})," ",i]}),Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Capital:"})," ",r]})]})]})})})},A=n(196),D=function(e){var t=e.countriesData,n=e.loading,a=[];t.forEach((function(e){var t={nativeName:e.nativeName,name:e.name,photo:e.flags.svg,region:e.region,population:e.population,capital:e.capital,key:e.alpha2Code,continent:e.continent};a.push(t)}));var c=a.map((function(e){return Object(f.jsx)(R,{allCountryData:e},e.key)}));return Object(f.jsx)(x.a,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center",padding:"5px 15px"},children:n?Object(f.jsx)(A.a,{color:"inherit"}):c})},E=n(192),N=n(181),W=n(100),T=n.n(W),F=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!1),l=Object(s.a)(r,2),j=l[0],u=l[1],h=Object(a.useState)(!1),b=Object(s.a)(h,2),d=b[0],x=b[1];return Object(a.useEffect)((function(){u(!0),o.a.get(e).then((function(e){i(e.data[0]),u(!1)})).catch((function(e){x(!0),window.location.replace("/rest-countries-api")}))}),[e]),{loading:j,data:c,error:d}},L=function(){var e,t,n,a,c=Object(j.f)(),i=Object(j.g)().name,r=F("https://restcountries.com/v2/name/".concat(i)),s=r.data,l=r.loading;return s.currencies&&(e=s.currencies.map((function(e){return Object(f.jsxs)("span",{children:[e.name,","]},e.name)}))),s.borders&&(t=s.borders.map((function(e){return Object(f.jsx)(E.a,{variant:"elevation",component:"span",sx:{margin:"5px",padding:"5px 10px"},children:e},e)}))),s.languages&&(n=s.languages.map((function(e){return Object(f.jsxs)("span",{children:[e.name,","]},e.name)}))),a=Object(f.jsxs)(x.a,{sx:{padding:"30px 8%",height:"80vh"},children:[Object(f.jsx)(p.a,{variant:"contained",onClick:function(){return c.push("/rest-countries-api")},startIcon:Object(f.jsx)(T.a,{}),children:"go back"}),Object(f.jsxs)(N.a,{mt:10,spacing:10,direction:{xs:"column",sm:"row"},justifyContent:"center",alignItems:"center",children:[Object(f.jsx)(x.a,{children:Object(f.jsx)("img",{src:s.flag,alt:"",style:{width:"100%"}})}),Object(f.jsxs)(x.a,{sx:{width:"100%"},children:[Object(f.jsx)(O.a,{variant:"h5",children:s.name}),Object(f.jsxs)(N.a,{sx:{width:"80%"},direction:{xs:"column",md:"row"},justifyContent:{md:"space-between"},alignItems:{md:"flex-start"},children:[Object(f.jsxs)(x.a,{children:[Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Native Name:"})," ",s.nativeName]}),Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Population:"})," ",s.population]}),Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Region:"})," ",s.region]}),Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Subregion:"})," ",s.subregion]}),Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Capital:"})," ",s.capital]})]}),Object(f.jsxs)(x.a,{sx:{marginTop:5,marginBottom:5},children:[Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Top Level Domain:"})," ",s.topLevelDomain]}),Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Currencies:"})," ",e]}),Object(f.jsxs)(O.a,{variant:"subtitle2",children:[Object(f.jsx)("b",{children:"Languages:"})," ",n]})]})]}),t?Object(f.jsxs)(x.a,{children:[Object(f.jsx)(O.a,{variant:"h5",children:"Border Countries:"}),Object(f.jsx)(N.a,{direction:"row",flexWrap:"wrap",children:t})]}):null]})]})]}),l&&(a=Object(f.jsx)("div",{style:{display:l?"flex":"none",width:"100%",height:"80vh",justifyContent:"center",alignItems:"center"},children:l&&Object(f.jsx)(A.a,{})})),a},B=n(197),M=n(185),V=n(182),z=n(184),P=function(e){var t=e.region,n=e.onRegionChange;return Object(f.jsxs)(B.a,{sx:{width:200,height:50},children:[Object(f.jsx)(M.a,{id:"demo-simple-select-label",sx:{fontSize:14},children:"Filter by Region"}),Object(f.jsxs)(V.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,label:"Filter by Region",onChange:n,sx:{fontSize:14},children:[Object(f.jsx)(z.a,{value:"Africa",children:"Africa"}),Object(f.jsx)(z.a,{value:"Americas",children:"America"}),Object(f.jsx)(z.a,{value:"Asia",children:"Asia"}),Object(f.jsx)(z.a,{value:"Europe",children:"Europe"}),Object(f.jsx)(z.a,{value:"Oceania",children:"Oceania"})]})]})},J=n(101),H=n.n(J),X=n(21),q=function(e){var t=e.inputValue,n=e.onInputChange;return Object(f.jsxs)(E.a,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"85%",maxWidth:500},children:[Object(f.jsx)(H.a,{}),Object(f.jsx)(X.c,{sx:{ml:1,flex:1},placeholder:"Search for a country...",inputProps:{"aria-label":"Search for a country..."},value:t,onChange:n})]})},G=function(e){var t=e.region,n=e.onRegionChange,c=e.inputValue,i=e.onInputChange;return Object(f.jsxs)(N.a,{mt:3,spacing:1,justifyContent:{xs:"flex-start",md:"space-between"},direction:{xs:"column",sm:"row"},sx:{textAlign:"left",padding:"5px 30px"},children:[Object(a.useMemo)((function(){return Object(f.jsx)(q,{inputValue:c,onInputChange:i})}),[c]),Object(a.useMemo)((function(){return Object(f.jsx)(P,{region:t,onRegionChange:n})}),[t])]})},K=[];var Q=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),u=l[0],h=l[1],b=Object(a.useState)(""),d=Object(s.a)(b,2),x=d[0],O=d[1],p=Object(a.useState)([]),g=Object(s.a)(p,2),m=g[0],v=g[1];return Object(a.useEffect)((function(){c(!0),o.a.get("https://restcountries.com/v2/all").then((function(e){K=e.data,v(K),c(!1)}))}),[]),Object(f.jsx)(y,{children:Object(f.jsxs)(j.c,{children:[Object(f.jsxs)(j.a,{path:"/rest-countries-api",exact:!0,children:[Object(f.jsx)(G,{region:u,onRegionChange:function(e){return function(e){O("");var t=Object(r.a)(K).filter((function(t){return t.region===e.target.value}));v(t),h(e.target.value)}(e)},inputValue:x,onInputChange:function(e){O(e.target.value),h("");var t=Object(r.a)(K).filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));v(t)}}),Object(f.jsx)(D,{selectedRegion:u,loading:n,countriesData:m})]}),Object(f.jsx)(j.a,{path:"/rest-countries-api/:name",children:Object(f.jsx)(L,{})})]})})};i.a.render(Object(f.jsx)(C.a,{children:Object(f.jsx)(Q,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.05e546ba.chunk.js.map