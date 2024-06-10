(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{1488:function(e,t,a){Promise.resolve().then(a.bind(a,588))},4492:function(e,t,a){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=a(2265),r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=s.useState,l=s.useEffect,i=s.useLayoutEffect,d=s.useDebugValue;function o(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!r(e,a)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var a=t(),s=n({inst:{value:a,getSnapshot:t}}),r=s[0].inst,c=s[1];return i(function(){r.value=a,r.getSnapshot=t,o(r)&&c({inst:r})},[e,a,t]),l(function(){return o(r)&&c({inst:r}),e(function(){o(r)&&c({inst:r})})},[e]),d(a),a};t.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:c},5107:function(e,t,a){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=a(2265),r=a(554),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=r.useSyncExternalStore,i=s.useRef,d=s.useEffect,o=s.useMemo,c=s.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,a,s,r){var u=i(null);if(null===u.current){var f={hasValue:!1,value:null};u.current=f}else f=u.current;var m=l(e,(u=o(function(){function e(e){if(!d){if(d=!0,l=e,e=s(e),void 0!==r&&f.hasValue){var t=f.value;if(r(t,e))return i=t}return i=e}if(t=i,n(l,e))return t;var a=s(e);return void 0!==r&&r(t,a)?t:(l=e,i=a)}var l,i,d=!1,o=void 0===a?null:a;return[function(){return e(t())},null===o?void 0:function(){return e(o())}]},[t,a,s,r]))[0],u[1]);return d(function(){f.hasValue=!0,f.value=m},[m]),c(m),m}},554:function(e,t,a){"use strict";e.exports=a(4492)},5006:function(e,t,a){"use strict";e.exports=a(5107)},588:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ea}});var s=a(7437),r=a(2265),n=a(1538),l=a(2218),i=a(9354);let d=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=r.forwardRef((e,t)=>{let{className:a,variant:r,size:l,asChild:o=!1,...c}=e,u=o?n.g7:"button";return(0,s.jsx)(u,{className:(0,i.cn)(d({variant:r,size:l,className:a})),ref:t,...c})});o.displayName="Button";let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...r})});c.displayName="Card";let u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",a),...r})});u.displayName="CardHeader";let f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("h3",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",a),...r})});f.displayName="CardTitle";let m=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a),...r})});m.displayName="CardDescription";let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",a),...r})});x.displayName="CardContent",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",a),...r})}).displayName="CardFooter";let h=r.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});h.displayName="Input";var p=a(2988),g=a(5171);let j=(0,r.forwardRef)((e,t)=>(0,r.createElement)(g.WV.label,(0,p.Z)({},e,{ref:t,onMouseDown:t=>{var a;null===(a=e.onMouseDown)||void 0===a||a.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),b=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),v=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(j,{ref:t,className:(0,i.cn)(b(),a),...r})});v.displayName=j.displayName;let N=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:t,className:(0,i.cn)("w-full caption-bottom text-sm",a),...r})})});N.displayName="Table";let y=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("thead",{ref:t,className:(0,i.cn)("[&_tr]:border-b",a),...r})});y.displayName="TableHeader";let w=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tbody",{ref:t,className:(0,i.cn)("[&_tr:last-child]:border-0",a),...r})});w.displayName="TableBody";let k=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tfoot",{ref:t,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...r})});k.displayName="TableFooter";let C=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tr",{ref:t,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...r})});C.displayName="TableRow";let S=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("th",{ref:t,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...r})});S.displayName="TableHead";let R=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("td",{ref:t,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...r})});R.displayName="TableCell",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("caption",{ref:t,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",a),...r})}).displayName="TableCaption";let E=e=>{let t;let a=new Set,s=(e,s)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=s?s:"object"!=typeof r||null===r)?r:Object.assign({},t,r),a.forEach(a=>a(t,e))}},r=()=>t,n={setState:s,getState:r,getInitialState:()=>l,subscribe:e=>(a.add(e),()=>a.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},l=t=e(s,r,n);return n},D=e=>e?E(e):E;var A=a(5006);let{useDebugValue:M}=r,{useSyncExternalStoreWithSelector:V}=A,F=!1,T=e=>e,z=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?D(e):e,a=(e,a)=>(function(e,t=T,a){a&&!F&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),F=!0);let s=V(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return M(s),s})(t,e,a);return Object.assign(a,t),a},P=e=>e?z(e):z,O=(e,t,a)=>Math.floor(e/t)*a,U=P()(e=>({name:"player1",race:"Human",maxHP:1,hp:1,maxMana:1,mana:1,lifePoint:4,str:0,vit:0,dex:0,agi:0,int:0,atk:-2,rdc:0,acc:0,def:0,spd:0,mag:-2,crit:0,setName:t=>e(e=>({name:t})),setRace:t=>e(e=>({race:t})),setHP:t=>e(e=>({hp:t})),setMana:t=>e(e=>({mana:t})),setLifePoint:t=>e(e=>({lifePoint:t})),setStr:t=>e(e=>({str:t,atk:O(t,2,1)})),setVit:t=>e(e=>({vit:t,hp:O(t,2,1),rdc:O(t,4,1)})),setDex:t=>e(e=>({dex:t,acc:O(t,2,1),crit:O(t,4,1)})),setAgi:t=>e(e=>({agi:t,spd:t,def:O(t,2,1)})),setInt:t=>e(e=>({int:t,mana:O(t,2,1),mag:O(t,2,1)}))}));function I(e){let{name:t}=e,{str:a,vit:r,dex:n,agi:l,int:i,setStr:d,setVit:o,setDex:c,setAgi:u,setInt:f}=U(),m={Str:{value:a,onChange:d},Vit:{value:r,onChange:o},Dex:{value:n,onChange:c},Agi:{value:l,onChange:u},Int:{value:i,onChange:f}};return(0,s.jsxs)(C,{children:[(0,s.jsx)(R,{className:"font-semibold",children:t}),(0,s.jsxs)(R,{children:[(0,s.jsx)(v,{htmlFor:"add-unit",className:"sr-only",children:"Unit"}),(0,s.jsx)(h,{id:"add-unit",type:"number",defaultValue:0,value:m[t].value,onChange:e=>m[t].onChange(Number.parseFloat(e.target.value))})]})]})}let _="horizontal",H=["horizontal","vertical"],W=(0,r.forwardRef)((e,t)=>{let{decorative:a,orientation:s=_,...n}=e,l=q(s)?s:_;return(0,r.createElement)(g.WV.div,(0,p.Z)({"data-orientation":l},a?{role:"none"}:{"aria-orientation":"vertical"===l?l:void 0,role:"separator"},n,{ref:t}))});function q(e){return H.includes(e)}W.propTypes={orientation(e,t,a){let s=e[t],r=String(s);return s&&!q(s)?Error(`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${a}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${_}\`.`):null}};let B=r.forwardRef((e,t)=>{let{className:a,orientation:r="horizontal",decorative:n=!0,...l}=e;return(0,s.jsx)(W,{ref:t,decorative:n,orientation:r,className:(0,i.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",a),...l})});B.displayName=W.displayName;let Y=P()(e=>({atk:0,rdc:0,acc:0,def:0,spd:0,mag:0,crit:0,setAtk:t=>e(e=>({atk:t})),setRdc:t=>e(e=>({rdc:t})),setAcc:t=>e(e=>({acc:t})),setDef:t=>e(e=>({def:t})),setSpd:t=>e(e=>({spd:t})),setMag:t=>e(e=>({mag:t})),setCrit:t=>e(e=>({crit:t}))}));function Z(){let{atk:e,rdc:t,acc:a,def:r,spd:n,mag:l,crit:i}=U(),[d,o,h,p,g,j,b]=Y(e=>[e.atk,e.rdc,e.acc,e.def,e.spd,e.mag,e.crit]),v={Atk:e,Rdc:t,Acc:a,Def:r,Spd:n,Mag:l,Crit:i},N={Atk:d,Rdc:o,Acc:h,Def:p,Spd:g,Mag:j,Crit:b};return(0,s.jsx)("div",{className:"grid auto-rows-max items-start gap-4 lg:gap-8",children:(0,s.jsxs)(c,{className:"overflow-hidden","x-chunk":"dashboard-05-chunk-4",children:[(0,s.jsx)(u,{className:"flex flex-row items-start bg-muted/50",children:(0,s.jsxs)("div",{className:"grid gap-0.5",children:[(0,s.jsx)(f,{className:"group flex items-center gap-2 text-lg",children:"Ability"}),(0,s.jsx)(m,{children:"Abilities stat of player"})]})}),(0,s.jsxs)(x,{className:"p-6 text-sm",children:[(0,s.jsxs)("div",{className:"grid gap-3",children:[(0,s.jsx)("div",{className:"font-semibold",children:"Base"}),(0,s.jsx)("ul",{className:"grid gap-3",children:["Atk","Rdc","Acc","Def","Spd","Mag","Crit"].map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center justify-between",children:[(0,s.jsx)("span",{className:"text-muted-foreground",children:e}),(0,s.jsx)("span",{children:v[e]})]},t))})]}),(0,s.jsx)(B,{className:"my-4"}),(0,s.jsxs)("div",{className:"grid gap-3",children:[(0,s.jsx)("div",{className:"font-semibold",children:"Weapon"}),(0,s.jsx)("ul",{className:"grid gap-3",children:["Atk","Rdc","Acc","Def","Spd","Mag","Crit"].map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center justify-between",children:[(0,s.jsx)("span",{className:"text-muted-foreground",children:e}),(0,s.jsx)("span",{children:N[e]})]},t))})]}),(0,s.jsx)(B,{className:"my-4"}),(0,s.jsxs)("div",{className:"grid gap-3",children:[(0,s.jsx)("div",{className:"font-semibold",children:"Total"}),(0,s.jsx)("ul",{className:"grid gap-3",children:["Atk","Rdc","Acc","Def","Spd","Mag","Crit"].map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center justify-between",children:[(0,s.jsx)("span",{className:"text-muted-foreground",children:e}),(0,s.jsx)("span",{children:v[e]+N[e]})]},t))})]})]})]})})}var $=a(9673),L=a(8297);let K=$.fC;$.xz;let G=$.h_;$.x8;let J=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)($.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});J.displayName=$.aV.displayName;let Q=r.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(G,{children:[(0,s.jsx)(J,{}),(0,s.jsxs)($.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n,children:[r,(0,s.jsxs)($.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(L.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});Q.displayName=$.VY.displayName;let X=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};X.displayName="DialogHeader";let ee=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};function et(e){let{name:t}=e,{atk:a,rdc:r,acc:n,def:l,spd:i,mag:d,crit:o,setAtk:c,setRdc:u,setAcc:f,setDef:m,setSpd:x,setMag:p,setCrit:g}=Y(),j={Atk:{value:a,onChange:c},Rdc:{value:r,onChange:u},Acc:{value:n,onChange:f},Def:{value:l,onChange:m},Spd:{value:i,onChange:x},Mag:{value:d,onChange:p},Crit:{value:o,onChange:g}};return(0,s.jsxs)(C,{children:[(0,s.jsx)(R,{className:"font-semibold",children:t}),(0,s.jsxs)(R,{children:[(0,s.jsx)(v,{htmlFor:"add-unit",className:"sr-only",children:"Unit"}),(0,s.jsx)(h,{id:"add-unit",type:"number",defaultValue:0,value:j[t].value,onChange:e=>j[t].onChange(Number.parseFloat(e.target.value))})]})]})}function ea(){let{name:e,race:t,hp:a,mana:n,dex:l,acc:i,atk:d,crit:p,setName:g}=U(),[j,b,E,D,A,M,V]=Y(e=>[e.atk,e.rdc,e.acc,e.def,e.spd,e.mag,e.crit]),[F,T]=(0,r.useState)(0),[z,P]=(0,r.useState)(0),[O,_]=(0,r.useState)(0),[H,W]=(0,r.useState)(0),[q,B]=(0,r.useState)(0),[$,L]=(0,r.useState)(!1),[G,J]=(0,r.useState)(!1),[ea,es]=(0,r.useState)(!1),[er,en]=(0,r.useState)(0),[el,ei]=(0,r.useState)(0),[ed,eo]=(0,r.useState)(0);return(0,s.jsxs)("div",{className:"mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4",children:[(0,s.jsx)("div",{className:"flex items-center gap-4",children:(0,s.jsx)("h1",{className:"flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0",children:"Player Info"})}),(0,s.jsxs)("div",{className:"grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8",children:[(0,s.jsxs)("div",{className:"grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8",children:[(0,s.jsxs)(c,{"x-chunk":"dashboard-07-chunk-1",children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(f,{children:"Attribute"}),(0,s.jsx)(m,{children:"Attributes stat of player"})]}),(0,s.jsx)(x,{children:(0,s.jsxs)(N,{children:[(0,s.jsx)(y,{children:(0,s.jsxs)(C,{children:[(0,s.jsx)(S,{className:"w-[100px]",children:"Type"}),(0,s.jsx)(S,{children:"Unit"})]})}),(0,s.jsx)(w,{children:["Str","Vit","Dex","Agi","Int"].map((e,t)=>(0,s.jsx)(I,{name:e},t))})]})})]}),(0,s.jsxs)(c,{"x-chunk":"dashboard-07-chunk-1",children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(f,{children:"Equipment Stat"}),(0,s.jsx)(m,{children:"Equipment stat of player"})]}),(0,s.jsx)(x,{children:(0,s.jsxs)(N,{children:[(0,s.jsx)(y,{children:(0,s.jsxs)(C,{children:[(0,s.jsx)(S,{className:"w-[100px]",children:"Type"}),(0,s.jsx)(S,{children:"Unit"})]})}),(0,s.jsx)(w,{children:["Atk","Rdc","Acc","Def","Spd","Mag","Crit"].map((e,t)=>(0,s.jsx)(et,{name:e},t))})]})})]}),(0,s.jsxs)(c,{"x-chunk":"dashboard-07-chunk-2",children:[(0,s.jsx)(u,{children:(0,s.jsx)(f,{children:"Battle Helper"})}),(0,s.jsx)(x,{children:(0,s.jsxs)(N,{children:[(0,s.jsx)(y,{children:(0,s.jsxs)(C,{children:[(0,s.jsx)(S,{className:"w-[100px]",children:"Type"}),(0,s.jsx)(S,{children:"Unit"})]})}),(0,s.jsxs)(w,{children:[(0,s.jsxs)(C,{children:[(0,s.jsx)(R,{className:"font-semibold",children:"our's buff atk"}),(0,s.jsxs)(R,{children:[(0,s.jsx)(v,{htmlFor:"add-unit",className:"sr-only",children:"Unit"}),(0,s.jsx)(h,{id:"add-unit",type:"number",defaultValue:0,value:F,onChange:e=>T(Number.parseFloat(e.target.value))})]})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(R,{className:"font-semibold",children:"our's buff acc"}),(0,s.jsxs)(R,{children:[(0,s.jsx)(v,{htmlFor:"add-unit",className:"sr-only",children:"Unit"}),(0,s.jsx)(h,{id:"add-unit",type:"number",defaultValue:0,value:z,onChange:e=>P(Number.parseFloat(e.target.value))})]})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(R,{className:"font-semibold",children:"our's buff crit"}),(0,s.jsxs)(R,{children:[(0,s.jsx)(v,{htmlFor:"add-unit",className:"sr-only",children:"Unit"}),(0,s.jsx)(h,{id:"add-unit",type:"number",defaultValue:0,value:O,onChange:e=>_(Number.parseFloat(e.target.value))})]})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(R,{className:"font-semibold",children:"other's def"}),(0,s.jsxs)(R,{children:[(0,s.jsx)(v,{htmlFor:"add-unit",className:"sr-only",children:"Unit"}),(0,s.jsx)(h,{id:"add-unit",type:"number",defaultValue:0,value:H,onChange:e=>W(Number.parseFloat(e.target.value))})]})]}),(0,s.jsxs)(C,{children:[(0,s.jsx)(R,{className:"font-semibold",children:"other's rdc"}),(0,s.jsxs)(R,{children:[(0,s.jsx)(v,{htmlFor:"add-unit",className:"sr-only",children:"Unit"}),(0,s.jsx)(h,{id:"add-unit",type:"number",defaultValue:0,value:q,onChange:e=>B(Number.parseFloat(e.target.value))})]})]})]}),(0,s.jsx)(k,{children:(0,s.jsx)("div",{className:"flex items-center justify-center pt-4",children:(0,s.jsx)(o,{size:"sm",onClick:()=>{let e=i+z+E-H,t=(1+p+V+O)*.05,a=Math.random()<(t=Math.max(0,Math.min(t,1))),s=d+j+F;a&&(s*=2);let r=s-q,n=.5+.05*e;ei(Math.round(100*(n=Math.max(0,Math.min(n,1))))),eo(Math.round(100*t)),J(a||Math.random()<n),es(a),en(r),L(!0)},children:"Calculate"})})})]})})]})]}),(0,s.jsx)(K,{open:$,modal:!0,defaultOpen:$,onOpenChange:e=>L(e),children:(0,s.jsxs)(Q,{className:"sm:max-w-[425px]",children:[(0,s.jsx)(X,{}),(0,s.jsxs)("div",{className:"grid gap-4 py-4 justify-center items-center text-center",children:[(0,s.jsxs)("h3",{className:"text-2xl font-bold tracking-tight",children:["Attack ",G?"Successed":"Failed"," (atk:",el,"%, crit:",ed,"%)"]}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:["You attack with ",G?er:0,ea?" Critical!":""]}),(0,s.jsx)(o,{className:"mt-4",onClick:()=>L(!1),children:"OK"})]}),(0,s.jsx)(ee,{})]})}),(0,s.jsx)(Z,{})]}),(0,s.jsxs)("div",{className:"flex items-center justify-center gap-2 md:hidden",children:[(0,s.jsx)(o,{variant:"outline",size:"sm",children:"Discard"}),(0,s.jsx)(o,{size:"sm",children:"Save Product"})]})]})}ee.displayName="DialogFooter",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)($.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})}).displayName=$.Dx.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)($.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a),...r})}).displayName=$.dk.displayName},9354:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var s=a(4839),r=a(6164);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}}},function(e){e.O(0,[78,971,23,744],function(){return e(e.s=1488)}),_N_E=e.O()}]);