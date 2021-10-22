(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(38),c=n.n(i),r=n(17),s=n(12),l=n(60),o=n.n(l),j=n(14),u=n(55),b=n(180),h=n(102),d=n(187),x=n(188),O=n(189),p=n(190),g=n(98),m=n.n(g),f=n(31),v=n(2),y=function(e){var t=e.changeTheme,n=e.currentTheme,a=Object(f.a)(),i="light"===n?"dark":"light";return Object(v.jsxs)(x.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:80,padding:2,boxShadow:"3",background:a.palette.background.paper},children:[Object(v.jsx)(O.a,{variant:"h1",sx:{fontSize:17,fontFamily:"Nunito Sans, sans-serif",fontWeight:"800"},children:"Where in the world?"}),Object(v.jsxs)(p.a,{onClick:t,color:"inherit",sx:{fontFamily:"Nunito Sans,sans-serif",fontWeight:600},startIcon:Object(v.jsx)(m.a,{sx:{transform:"scaleX(-1)"}}),children:[i," Mode"]})]})},C=function(e){var t=e.children,n=Object(a.useState)("light"),i=Object(s.a)(n,2),c=i[0],r=i[1];Object(a.useEffect)((function(){localStorage.getItem("theme")||localStorage.setItem("theme","light");var e=localStorage.getItem("theme");r(e)}),[c]);var l=Object(a.useMemo)((function(){return Object(h.a)((e=c,{palette:Object(u.a)(Object(u.a)({mode:e,primary:Object(u.a)({},"dark"===e?{main:"hsl(209, 23%, 22%)"}:{main:"#fff"})},"dark"===e?{background:{default:"hsl(207, 26%, 17%)",paper:"hsl(209, 23%, 22%)"}}:{background:{default:"hsl(0, 0%, 98%)",input:"hsl(0, 0%, 100%)"}}),{},{text:Object(u.a)({},"light"===e?{primary:"hsl(200, 15%, 8%)",secondary:"hsl(200, 15%, 8%)"}:{primary:"hsl(0, 0%, 100%)"})})}));var e}),[c]);return Object(v.jsx)(d.a,{theme:l,injectFirst:!0,children:Object(v.jsxs)("div",{style:{maxWidth:1920,margin:"0 auto"},children:[Object(v.jsx)(b.a,{}),Object(v.jsx)(y,{changeTheme:function(){"light"===c?(localStorage.setItem("theme","dark"),r("dark")):(localStorage.setItem("theme","light"),r("light"))},currentTheme:c}),t]})})},w=n(63),S=n(191),I=n(193),k=n(194),R=n(195),A=function(e){var t=e.allCountryData,n=e.clicked,a=t.name,i=t.population,c=t.region,r=t.capital,s=t.photo;return Object(v.jsx)(w.b,{to:"/rest-countries-api/".concat(a),onClick:n,style:{textDecoration:"none"},children:Object(v.jsx)(S.a,{sx:{width:280,margin:"18px",minHeight:300},children:Object(v.jsxs)(I.a,{children:[Object(v.jsx)(k.a,{component:"img",height:"150",image:s,alt:"".concat(a," flag")}),Object(v.jsxs)(R.a,{children:[Object(v.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",children:a}),Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Population"}),": ",i]}),Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Region:"})," ",c]}),Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Capital:"})," ",r]})]})]})})})},D=n(196),E=function(e){var t=e.countriesData,n=e.loading,a=[];t.forEach((function(e){var t={nativeName:e.nativeName,name:e.name,photo:e.flags.svg,region:e.region,population:e.population,capital:e.capital,key:e.alpha2Code,continent:e.continent};a.push(t)}));var i=a.map((function(e){return Object(v.jsx)(A,{allCountryData:e},e.key)}));return Object(v.jsx)(x.a,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center",padding:"5px 15px"},children:n?Object(v.jsx)(D.a,{color:"inherit"}):i})},N=n(192),W=n(181),T=n(100),F=n.n(T),L=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),i=n[0],c=n[1],r=Object(a.useState)(!1),l=Object(s.a)(r,2),j=l[0],u=l[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),d=h[0],x=h[1];return Object(a.useEffect)((function(){u(!0),o.a.get(e).then((function(e){c(e.data[0]),u(!1)})).catch((function(e){x(!0),window.location.replace("/rest-countries-api")}))}),[e]),{loading:j,data:i,error:d}},B=function(){var e,t,n,a,i=Object(j.f)(),c=Object(j.g)().name,r=L("https://restcountries.com/v2/name/".concat(c)),s=r.data,l=r.loading,o=null===(e=s.currencies)||void 0===e?void 0:e.map((function(e){return Object(v.jsxs)("span",{children:[e.name,","]},e.name)})),u=null===(t=s.borders)||void 0===t?void 0:t.map((function(e){return Object(v.jsx)(N.a,{variant:"elevation",component:"span",sx:{margin:"5px",padding:"5px 10px"},children:e},e)})),b=null===(n=s.languages)||void 0===n?void 0:n.map((function(e){return Object(v.jsxs)("span",{children:[e.name,","]},e.name)}));return a=Object(v.jsxs)(x.a,{sx:{padding:"30px 8%",height:"80vh"},children:[Object(v.jsx)(p.a,{variant:"contained",onClick:function(){return i.push("/rest-countries-api")},startIcon:Object(v.jsx)(F.a,{}),children:"go back"}),Object(v.jsxs)(W.a,{mt:10,spacing:10,direction:{xs:"column",sm:"row"},justifyContent:"center",alignItems:"center",children:[Object(v.jsx)(x.a,{children:Object(v.jsx)("img",{src:s.flag,alt:"",style:{width:"100%"}})}),Object(v.jsxs)(x.a,{sx:{width:"100%"},children:[Object(v.jsx)(O.a,{variant:"h5",children:s.name}),Object(v.jsxs)(W.a,{sx:{width:"80%"},direction:{xs:"column",md:"row"},justifyContent:{md:"space-between"},alignItems:{md:"flex-start"},children:[Object(v.jsxs)(x.a,{children:[Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Native Name:"})," ",s.nativeName]}),Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Population:"})," ",s.population]}),Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Region:"})," ",s.region]}),Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Subregion:"})," ",s.subregion]}),Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Capital:"})," ",s.capital]})]}),Object(v.jsxs)(x.a,{sx:{marginTop:5,marginBottom:5},children:[Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Top Level Domain:"})," ",s.topLevelDomain]}),Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Currencies:"})," ",o]}),Object(v.jsxs)(O.a,{variant:"subtitle2",children:[Object(v.jsx)("b",{children:"Languages:"})," ",b]})]})]}),u?Object(v.jsxs)(x.a,{children:[Object(v.jsx)(O.a,{variant:"h5",children:"Border Countries:"}),Object(v.jsx)(W.a,{direction:"row",flexWrap:"wrap",children:u})]}):null]})]})]}),l&&(a=Object(v.jsx)("div",{style:{display:l?"flex":"none",width:"100%",height:"80vh",justifyContent:"center",alignItems:"center"},children:Object(v.jsx)(D.a,{})})),a},M=n(197),V=n(185),z=n(182),P=n(184),J=function(e){var t=e.region,n=e.onRegionChange;return Object(v.jsxs)(M.a,{sx:{width:200,height:50},children:[Object(v.jsx)(V.a,{id:"demo-simple-select-label",sx:{fontSize:14},children:"Filter by Region"}),Object(v.jsxs)(z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,label:"Filter by Region",onChange:n,sx:{fontSize:14},children:[Object(v.jsx)(P.a,{value:"Africa",children:"Africa"}),Object(v.jsx)(P.a,{value:"Americas",children:"America"}),Object(v.jsx)(P.a,{value:"Asia",children:"Asia"}),Object(v.jsx)(P.a,{value:"Europe",children:"Europe"}),Object(v.jsx)(P.a,{value:"Oceania",children:"Oceania"})]})]})},H=n(101),X=n.n(H),q=n(21),G=function(e){var t=e.inputValue,n=e.onInputChange;return Object(v.jsxs)(N.a,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"85%",maxWidth:500},children:[Object(v.jsx)(X.a,{}),Object(v.jsx)(q.c,{sx:{ml:1,flex:1},placeholder:"Search for a country...",inputProps:{"aria-label":"Search for a country..."},value:t,onChange:n})]})},K=function(e){var t=e.region,n=e.onRegionChange,i=e.inputValue,c=e.onInputChange;return Object(v.jsxs)(W.a,{mt:3,spacing:1,justifyContent:{xs:"flex-start",md:"space-between"},direction:{xs:"column",sm:"row"},sx:{textAlign:"left",padding:"5px 30px"},children:[Object(a.useMemo)((function(){return Object(v.jsx)(G,{inputValue:i,onInputChange:c})}),[i]),Object(a.useMemo)((function(){return Object(v.jsx)(J,{region:t,onRegionChange:n})}),[t])]})},Q=[];var U=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),l=Object(s.a)(c,2),u=l[0],b=l[1],h=Object(a.useState)(""),d=Object(s.a)(h,2),x=d[0],O=d[1],p=Object(a.useState)([]),g=Object(s.a)(p,2),m=g[0],f=g[1];return Object(a.useEffect)((function(){i(!0),o.a.get("https://restcountries.com/v2/all").then((function(e){Q=e.data,f(Q),i(!1)}))}),[]),Object(v.jsx)(C,{children:Object(v.jsxs)(j.c,{children:[Object(v.jsxs)(j.a,{path:"/rest-countries-api",exact:!0,children:[Object(v.jsx)(K,{region:u,onRegionChange:function(e){return function(e){O("");var t=Object(r.a)(Q).filter((function(t){return t.region===e.target.value}));f(t),b(e.target.value)}(e)},inputValue:x,onInputChange:function(e){O(e.target.value),b("");var t=Object(r.a)(Q).filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));f(t)}}),Object(v.jsx)(E,{selectedRegion:u,loading:n,countriesData:m})]}),Object(v.jsx)(j.a,{path:"/rest-countries-api/:name",children:Object(v.jsx)(B,{})})]})})};c.a.render(Object(v.jsx)(w.a,{children:Object(v.jsx)(U,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.4f5b1e13.chunk.js.map