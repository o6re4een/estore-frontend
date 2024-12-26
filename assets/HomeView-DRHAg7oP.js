import{_ as k,o as n,c as i,a as e,t as r,b as d,d as q,u as A,e as f,r as h,f as F,g as M,F as w,h as b,i as y,w as $,j as C,T as N}from"./index-B1sf2thq.js";const O="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z'/%3e%3c/svg%3e",V="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z'/%3e%3c/svg%3e",D={},I={class:"w-full h-[1-px] bg-gray-300 rounded-full"};function R(l,s){return n(),i("div",I,s[0]||(s[0]=[e("hr",{class:"w-1/2 h-[1px] bg-gray-300"},null,-1)]))}const P=k(D,[["render",R]]),Z={class:"flex flex-col items-start gap-4 max-w-[310px] p-4 bg-surface rounded-xl text-text overflow-hidden hover:scale-110 transition-all duration-500"},z={class:"text-xl font-semibold"},E={class:"w-full max-h-24 overflow-hidden"},G=["src"],H={class:"flex flex-col gap-3"},J={class:"text-sm text-start"},K={class:"w-full flex justify-end"},Q={class:"text-sm text-end p-2 bg-secondary hover:bg-primary duration-500 rounded-lg w-fit text-surface"},W={__name:"ProductCard",props:{imageUrl:{type:String,required:!0,default:""},description:{type:String,required:!0,default:""},price:{type:Number,required:!0,default:0},title:{type:String,required:!0,default:""},rating:{type:Object,required:!0,default:0}},setup(l){return(s,g)=>(n(),i("div",Z,[e("h2",z,r(l.title.slice(0,20)+"..."),1),d(P),e("div",E,[e("img",{src:l.imageUrl,class:"w-full h-24 object-contain"},null,8,G)]),d(q,{rate:l.rating.rate,count:l.rating.count},null,8,["rate","count"]),d(P),e("div",H,[e("p",J,r(l.description.slice(0,50)+"..."),1),e("div",K,[e("p",Q,r(l.price)+" $ ",1)])])]))}},X={class:"flex flex-col items-start gap-8 animate__animated animate__fadeInUp"},Y={class:"flex flex-row gap-2 justify-between w-full"},ee={class:"flex flex-row gap-3"},te={class:"flex flex-col md:flex-row justify-between text-text w-full"},se={class:"flex flex-col md:flex-row gap-2"},ae=["onClick"],le={class:"flex flex-row gap-4 flex-wrap justify-evenly"},ne={class:"shop__pagination"},oe=["disabled"],ie={class:"pg__number"},re=["disabled"],ce={__name:"ProductList",setup(l){const s=A(),{selectCategory:g,selectProduct:L}=s,_=f(()=>s.filteredProducts),v=f(()=>[...s.categories,"ALL"]),u=h(10),o=h(1),x=f(()=>Math.ceil(_.value.length/u.value)),m=c=>{u.value=c},j=f(()=>{const c=(o.value-1)*u.value,a=c+u.value;return _.value.slice(c,a)}),S=()=>{o.value>1&&(o.value--,p())},T=()=>{o.value<x.value&&(o.value++,p())},p=()=>{window.scrollTo({top:0,behavior:"smooth"})};return F(async()=>{console.log("mounted"),_.length||await s.fetchProducts(),!v.value.length<=1&&await s.fetchCategories()}),(c,a)=>{const U=M("RouterLink");return n(),i("div",X,[e("div",Y,[a[2]||(a[2]=e("h1",{class:"text-2xl text-text"},"Наши лучшие товары",-1)),e("div",ee,[e("button",{class:"flex items-center justify-center rounded-full p-2 text-base bg-muted w-10 h-10 text-surface",onClick:a[0]||(a[0]=t=>m(10))}," 10 "),e("button",{class:"flex items-center justify-center rounded-full p-2 text-base bg-muted w-10 h-10 text-surface",onClick:a[1]||(a[1]=t=>m(5))}," 5 ")])]),e("div",te,[a[3]||(a[3]=e("h2",{class:"text-xl"},"Категории товаров",-1)),e("div",se,[(n(!0),i(w,null,b(v.value,t=>(n(),i("span",{class:"text-text text-base bg-surface rounded-full text-center px-2 py-1",onClick:B=>y(g)(t)},r(t),9,ae))),256))])]),e("div",le,[(n(!0),i(w,null,b(j.value,(t,B)=>(n(),i("div",null,[d(N,{tag:"div",name:"list"},{default:$(()=>[(n(),C(U,{to:`/product/${t.id}`,onClick:ue=>y(L)(t),key:t.id},{default:$(()=>[d(W,{title:t.title,imageUrl:t.image,description:t.description,price:t.price,rating:t.rating},null,8,["title","imageUrl","description","price","rating"])]),_:2},1032,["to","onClick"]))]),_:2},1024)]))),256))]),e("div",ne,[e("img",{src:O,alt:"404 image",class:"sh-pg__arr",onClick:S,disabled:o.value===1},null,8,oe),e("span",ie,r(o.value)+" / "+r(x.value),1),e("img",{src:V,alt:"404 image",class:"sh-pg__arr",onClick:T,disabled:o.value===x.value},null,8,re)])])}}},de=k(ce,[["__scopeId","data-v-6e9af772"]]),ge={__name:"HomeView",setup(l){return(s,g)=>(n(),C(de))}};export{ge as default};