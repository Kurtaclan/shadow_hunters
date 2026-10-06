const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameRender-DIXJSXJE.js","assets/index-BZZoQro6.js","assets/index-yE3yGvHI.css","assets/Divider-CEh0xGwZ.js"])))=>i.map(i=>d[i]);
import{ah as hl,ai as dl,r as se,a0 as On,C as Wr,v as pl,j as P,E as Zt,F as Ur,G as _i,O as Gn,a6 as ml,I as Hr,z as zs,A as ks,u as Di,t as ft,T as At,B as Ie,D as Ii,ag as mt,aj as Ee,ak as Pi,al as Xe,am as Cs,d as xo,e as yo,an as Or,ao as Wi,ap as Br,a as Wn,b as Un,l as _o,n as bo,aq as Kn,ar as fl,as as Pn,at as Dn,au as wo,av as Mo,aw as So,ax as Ls,c as gl,M as Eo,$ as To,ae as Ao,K as vl,q as Us,L as ir,a1 as xl,x as yl,H as _l,P as Zr,ay as Qn,az as ea,aA as ta,aB as bl,aC as Hs,aD as wl,aE as Ml,h as Sl,k as El,aF as Tl,aG as Al,aH as Cl}from"./index-BZZoQro6.js";import{g as Ll,l as Ar,L as Wt,a as ji,e as In,h as Rl,i as Pl,j as ia,k as Dl,m as Il,n as Fl,o as zl,p as kl,q as Nl,r as Bl,b as Ol,A as Co,H as Gl}from"./HostQuitDialog-CIrpuUNU.js";import{g as Wl,f as Fn,G as Ri,B as Ue,D as Ut,L as ri,C as zn,d as Lo,e as Ro,u as Rs,a as ra,b as Ul,S as Hl,h as Vl}from"./Divider-CEh0xGwZ.js";import{S as jl}from"./Stack-DfaE-mVz.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"bd330138611c17d3c0dfa7b31c8eb7a3a6a25df9"};var e=new o.Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="0a18f6f9-32a2-4454-b32c-8dfa74898db0",o._sentryDebugIdIdentifier="sentry-dbid-0a18f6f9-32a2-4454-b32c-8dfa74898db0")}catch{}})();function ql(o,e,t,i,r){const[s,a]=se.useState(()=>r&&t?t(o).matches:i?i(o).matches:e);return On(()=>{if(!t)return;const n=t(o),c=()=>{a(n.matches)};return c(),n.addEventListener("change",c),()=>{n.removeEventListener("change",c)}},[o,t]),s}const Xl={...dl},Po=Xl.useSyncExternalStore;function Yl(o,e,t,i,r){const s=se.useCallback(()=>e,[e]),a=se.useMemo(()=>{if(r&&t)return()=>t(o).matches;if(i!==null){const{matches:u}=i(o);return()=>u}return s},[s,o,i,r,t]),[n,c]=se.useMemo(()=>{if(t===null)return[s,()=>()=>{}];const u=t(o);return[()=>u.matches,p=>(u.addEventListener("change",p),()=>{u.removeEventListener("change",p)})]},[s,t,o]);return Po(c,n,a)}function Do(o={}){const{themeId:e}=o;return function(i,r={}){let s=hl();s&&e&&(s=s[e]||s);const a=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:n=!1,matchMedia:c=a?window.matchMedia:null,ssrMatchMedia:l=null,noSsr:u=!1}=Wl({name:"MuiUseMediaQuery",props:r,theme:s});let p=typeof i=="function"?i(s):i;return p=p.replace(/^@media( ?)/m,""),p.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(Po!==void 0?Yl:ql)(p,n,c,l,u)}}Do();const $l=(o,e)=>{const{ownerState:t}=o;return[e.root,t.dense&&e.dense,t.alignItems==="flex-start"&&e.alignItemsFlexStart,t.divider&&e.divider,!t.disableGutters&&e.gutters]},Zl=o=>{const{alignItems:e,classes:t,dense:i,disabled:r,disableGutters:s,divider:a,selected:n}=o,l=Ur({root:["root",i&&"dense",!s&&"gutters",a&&"divider",r&&"disabled",e==="flex-start"&&"alignItemsFlexStart",n&&"selected"]},Ll,t);return{...t,...l}},Jl=_i(Gn,{shouldForwardProp:o=>ml(o)||o==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:$l})(Hr(({theme:o})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Ar.selected}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,(o.vars||o).palette.action.selectedOpacity),[`&.${Ar.focusVisible}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.focusOpacity}`)}},[`&.${Ar.selected}:hover`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:o.alpha((o.vars||o).palette.primary.main,(o.vars||o).palette.action.selectedOpacity)}},[`&.${Ar.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${Ar.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]}))),Vs=se.forwardRef(function(e,t){const i=Wr({props:e,name:"MuiListItemButton"}),{alignItems:r="center",autoFocus:s=!1,component:a="div",children:n,dense:c=!1,disableGutters:l=!1,divider:u=!1,focusVisibleClassName:p,selected:h=!1,className:f,...g}=i,m=se.useContext(Fn),d=se.useMemo(()=>({dense:c||m.dense||!1,alignItems:r,disableGutters:l}),[r,m.dense,c,l]),v=se.useRef(null);On(()=>{s&&v.current&&v.current.focus()},[s]);const x={...i,alignItems:r,dense:d.dense,disableGutters:l,divider:u,selected:h},b=Zl(x),{root:y,...M}=b,S=pl(v,t);return P.jsx(Fn.Provider,{value:d,children:P.jsx(Jl,{ref:S,href:g.href||g.to,component:(g.href||g.to)&&a==="div"?"button":a,focusVisibleClassName:Zt(b.focusVisible,p),ownerState:x,className:Zt(b.root,f),...g,classes:M,children:n})})});function Kl(o){return zs("MuiListItemIcon",o)}ks("MuiListItemIcon",["root","alignItemsFlexStart"]);const Ql=o=>{const{alignItems:e,classes:t}=o;return Ur({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},Kl,t)},ec=_i("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(Hr(({theme:o})=>({minWidth:56,color:(o.vars||o).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),tc=se.forwardRef(function(e,t){const i=Wr({props:e,name:"MuiListItemIcon"}),{className:r,...s}=i,a=se.useContext(Fn),n={...i,alignItems:a.alignItems},c=Ql(n);return P.jsx(ec,{className:Zt(c.root,r),ownerState:n,ref:t,...s})});function ic({userId:o}){const e=Di(c=>c.connection),[t,i]=se.useState({items:[]}),[r,s]=se.useState(!1),[a,n]=se.useState({openModal:!1,src:"",alt:""});return P.jsxs(se.Fragment,{children:[P.jsxs(Ri,{sx:{bottom:88,right:16,position:"absolute",zIndex:1200},display:"flex",justifyContent:"center",alignItems:"top",children:[t.anchor&&r?P.jsxs(Ue,{sx:{marginRight:2,backgroundColor:ft.palette.background.default,paddingTop:2,minWidth:"300px"},children:[P.jsx(At,{sx:{marginLeft:1},variant:"h5",children:"Equipment"}),P.jsx(Ut,{variant:"fullWidth",sx:{marginBottom:1}}),P.jsx(ri,{disablePadding:!0,sx:{overflowY:"auto",overflowX:"hidden",maxHeight:"250px",backgroundColor:ft.palette.background.paper},children:t.items.length==0?P.jsx(Wt,{sx:{height:"66px",width:"220px",paddingTop:"16px",verticalAlign:"top",display:"inline-block"},children:P.jsx(ji,{children:"None"})}):t.items.map((c,l)=>P.jsxs(se.Fragment,{children:[l===0?void 0:P.jsx(Ut,{variant:"fullWidth",component:"li"}),P.jsxs(Wt,{sx:{cursor:"zoom-in"},onClick:()=>n({src:`/shadow_hunters/assets/game/${c.drawDeck}/${c.name}.jpg`,alt:c.name,openModal:!0}),children:[P.jsx(ji,{primary:c.name}),P.jsx(In,{children:P.jsx(Ue,{sx:{float:"right"},component:"img",width:35,height:50,alt:c.name,src:`/shadow_hunters/assets/game/${c.drawDeck}/${c.name}.jpg`})})]})]},`item_list_item_${l}`))})]}):void 0,r?P.jsxs(Ue,{sx:{backgroundColor:ft.palette.background.default,paddingTop:2,minWidth:"300px",maxHeight:"350px"},children:[P.jsx(At,{sx:{marginLeft:1},variant:"h5",children:"Players"}),P.jsx(Ut,{variant:"fullWidth",sx:{marginBottom:1}}),P.jsx(ri,{disablePadding:!0,sx:{overflowY:"auto",overflowX:"hidden",maxHeight:"250px",backgroundColor:ft.palette.background.paper},children:e.gameState.lobby.playerList.map((c,l)=>{var u,p;return P.jsxs(se.Fragment,{children:[l===0?void 0:P.jsx(Ut,{variant:"fullWidth",component:"li"}),P.jsxs(Wt,{id:`list_item_${l}`,onClick:h=>c.piece.dead?void 0:i({items:c.piece.items,anchor:h.currentTarget,player:c.user.userName}),sx:{cursor:c.piece.dead?"default":"pointer",backgroundColor:((u=t.anchor)==null?void 0:u.id)===`list_item_${l}`?((p=ft.palette)==null?void 0:p.info).main:void 0},children:[c.piece.dead?P.jsx(tc,{sx:{minWidth:"30px"},children:P.jsx(Rl,{color:"#f44336"})}):void 0,P.jsx(ji,{primary:c.user.userName}),P.jsx(In,{sx:{cursor:"zoom-in",backgroundColor:c.user.color,minWidth:"unset",padding:"10px"},children:P.jsx(Ue,{sx:{float:"right",filter:c.piece.dead?"grayscale(100%)":"none"},onClick:h=>{h.stopPropagation(),n({src:c.user.id===o||c.piece.revealed?`/shadow_hunters/assets/game/characters/${c.piece.character.name}.jpg`:"/shadow_hunters/assets/game/card_backs/characters.jpg",alt:"Character Card",openModal:!0})},component:"img",width:35,height:50,alt:"Character Card",src:c.user.id===o||c.piece.revealed?`/shadow_hunters/assets/game/characters/${c.piece.character.name}.jpg`:"/shadow_hunters/assets/game/card_backs/characters.jpg"})})]})]},`list_item_${l}`)})})]}):void 0]}),P.jsxs(Ie,{sx:{height:"54.75px",paddingX:3,fontSize:"1.3125rem",marginLeft:2,bottom:16,right:16,position:"absolute",zIndex:1200},variant:"contained",onClick:()=>s(!r),children:[P.jsx(Pl,{style:{marginRight:16,marginTop:"-4px"}}),"Players"]}),P.jsx(Ii,{open:a.openModal,onClose:()=>n({openModal:!1,alt:"",src:""}),children:a.src&&P.jsx(Ue,{component:"img",height:600,src:a.src,alt:a.alt})})]})}function rc({noText:o=!1}){const e=Di(c=>c.connection),[t,i]=se.useState(!1),r="rgba(25, 34, 49, .5)",[s,a]=se.useState({openModal:!1,src:"",alt:""}),n=o?1.5:1;return P.jsxs(Ri,{sx:{marginTop:{xs:1,md:0},position:"absolute",zIndex:1200,paddingTop:{xs:0,md:2},paddingX:{xs:"12px",md:2},width:"100%",alignItems:"flex-end",flexDirection:"column",display:"flex",pointerEvents:"none"},children:[o?P.jsx(Ie,{"aria-label":"Log",sx:{minHeight:"54px",minWidth:"54px",width:"54px",padding:0,marginBottom:1,fontSize:"1.3125rem",pointerEvents:"auto"},variant:"contained",onClick:()=>i(!t),children:P.jsx(ia,{})}):P.jsxs(Ie,{sx:{minHeight:"54px",paddingX:3,fontSize:"1.3125rem",pointerEvents:"auto"},variant:"contained",onClick:()=>i(!t),children:[P.jsx(ia,{style:{marginRight:16,marginTop:"-4px"}})," Log"]}),t?P.jsxs(zn,{variant:"outlined",sx:{backgroundColor:ft.palette.background.default,width:{xs:"100%",md:"500px"},height:{xs:"400px",md:"300px"}},children:[P.jsx(At,{sx:{marginLeft:2,fontSize:`${1.5*n}rem`},variant:"h5",children:"Log"}),P.jsx(Ut,{}),P.jsx(ri,{disablePadding:!0,sx:{overflowY:"auto",overflowX:"hidden",minHeight:"100%",maxHeight:"100%",paddingX:1,backgroundColor:ft.palette.background.paper},children:e.gameState.lobby.gameLog.map((c,l)=>P.jsxs(Wt,{sx:{backgroundColor:r,borderRadius:"8px",marginBottom:1},children:[P.jsx(ji,{disableTypography:!0,primary:P.jsxs(Ue,{children:[P.jsx(At,{variant:"body1",sx:{fontSize:`${n}rem`},children:c.userName}),P.jsx(Ut,{sx:{marginBottom:1}})]}),secondary:P.jsx(At,{variant:"body2",sx:{fontSize:`${.875*n}rem`},children:c.text})}),c.info.includes("/")?P.jsx(In,{sx:{cursor:"zoom-in"},onClick:()=>a({src:`/shadow_hunters/assets/game/${c.info}.jpg`,alt:c.info,openModal:!0}),children:P.jsx(Ue,{sx:{float:"right"},component:"img",alt:c.info,width:35*n,height:50*n,src:`/shadow_hunters/assets/game/${c.info}.jpg`})}):void 0]},`log_item_${l}`))})]}):void 0,P.jsx(Ii,{open:s.openModal,onClose:()=>a({openModal:!1,alt:"",src:""}),children:s.src&&P.jsx(Ue,{component:"img",height:600,src:s.src,alt:s.alt})})]})}function sc({handleModalClose:o=()=>{},modalState:e,handleAttack:t=r=>r,handleChoice:i=r=>r}){var g,m;const r=((g=ft.palette)==null?void 0:g.secondary).main,s=((m=ft.palette)==null?void 0:m.secondary).main,a=Di(d=>d.connection),[n,c]=mt.useState({}),[l,u]=mt.useState({}),p=(d,v)=>d.length===0?P.jsx(Ue,{sx:{width:"100%"},children:P.jsx(Ie,{sx:{marginTop:2,float:"right"},variant:"contained",onClick:()=>{c({clickTarget:void 0,hoverTarget:void 0}),o()},children:"Ok"})}):P.jsxs(Ue,{sx:{width:"100%"},children:[P.jsx(ri,{disablePadding:!0,sx:{backgroundColor:ft.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:d.map((x,b)=>P.jsxs(mt.Fragment,{children:[b===0?void 0:P.jsx(Ut,{variant:"fullWidth",component:"li"}),P.jsx(Wt,{sx:{cursor:"pointer",color:x===n.clickTarget?"white":void 0,backgroundColor:x===n.clickTarget?s:x===n.hoverTarget?r:void 0},onMouseEnter:()=>c({...n,hoverTarget:x}),onMouseLeave:()=>c({...n,hoverTarget:void 0}),onClick:()=>c({...n,clickTarget:x}),children:x.userName})]},`attack_target_${b}`))}),P.jsxs(Ue,{display:"flex",justifyContent:"flex-end",sx:{width:"100%"},children:[P.jsx(Ie,{sx:{marginRight:2},variant:"contained",disabled:n.clickTarget===void 0,onClick:()=>{c({clickTarget:void 0,hoverTarget:void 0}),o(),t([n.clickTarget])},children:"Ok"}),v?void 0:P.jsx(Ie,{variant:"contained",onClick:()=>{c({clickTarget:void 0,hoverTarget:void 0}),o()},children:"Cancel"})]})]}),h=(d,v)=>P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",disabled:l.clickTarget===void 0,onClick:()=>{d.result=l.clickTarget,u({}),o(),i(d)},children:v}),f=d=>{let v=d.choice.type!==Ee.counterattack&&d.choice.type!==Ee.move&&d.choice.type!==Ee.rerollMovement&&d.choice.type!==Ee.teleport&&d.choice.type!==Ee.area;return P.jsxs(Ue,{sx:{marginTop:2,width:"100%",flexWrap:"wrap",rowGap:2},display:"flex",justifyContent:"space-between",alignItems:"center",children:[v?P.jsx(Ue,{component:"img",sx:{height:360,maxWidth:"100%",objectFit:"contain",marginX:{xs:"auto",sm:0}},alt:d.choice.card.name,src:`/shadow_hunters/assets/game/${d.choice.card.drawDeck}/${d.choice.card.name}.jpg`}):void 0,P.jsx(Ue,{display:"flex",justifyContent:"flex-end",flexDirection:"column",sx:{height:{xs:"auto",sm:v?340:"100%"},width:{xs:"100%",sm:v?200:"100%"},maxWidth:"100%",gap:2},children:(()=>{var x;switch(d.choice.type){case Ee.equipment:{const b=d.choice.card.name==="Erstwhile Altar",y=d.choice.card.name==="Banana Peel",M=a.gameState.lobby.playerList.filter(S=>S.piece.items.length>0&&(b?S.user.id!==d.playerId:S.user.id===d.choice.target));return P.jsxs(mt.Fragment,{children:[P.jsx(ri,{disablePadding:!0,sx:{backgroundColor:ft.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:M.map((S,L)=>S.piece.items.map((_,E)=>{const D=`${S.user.id},${_.name}`;return P.jsxs(mt.Fragment,{children:[L+E===0?void 0:P.jsx(Ut,{variant:"fullWidth",component:"li"}),P.jsx(Wt,{sx:{cursor:"pointer",color:D===l.clickTarget?"white":void 0,backgroundColor:D===l.clickTarget?s:D===l.hoverTarget?r:void 0},onMouseEnter:()=>u({...l,hoverTarget:D}),onMouseLeave:()=>u({...l,hoverTarget:void 0}),onClick:()=>u({...l,clickTarget:D}),children:`${S.user.userName} -> ${_.name}`})]},`choice_target_${L}_${E}`)}))}),M.length>0?h(d,y?"Discard equipment":"Ok"):P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="skip",o(),i(d)},children:"Skip"})]})}case Ee.hermitGreed:{const b=a.gameState.lobby.playerList.find(y=>y.user.id===d.choice.target);return P.jsxs(mt.Fragment,{children:[P.jsx(ri,{disablePadding:!0,sx:{backgroundColor:ft.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:b==null?void 0:b.piece.items.map(y=>{const M=`${b.user.id},${y.name}`;return P.jsx(Wt,{sx:{cursor:"pointer",color:M===l.clickTarget?"white":void 0,backgroundColor:M===l.clickTarget?s:M===l.hoverTarget?r:void 0},onMouseEnter:()=>u({...l,hoverTarget:M}),onMouseLeave:()=>u({...l,hoverTarget:void 0}),onClick:()=>u({...l,clickTarget:M}),children:`Give ${y.name}`},M)})}),h(d,"Give equipment"),P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",color:"warning",onClick:()=>{d.result="damage",u({}),o(),i(d)},children:"Take 1 damage"})]})}case Ee.hermitFaction:return P.jsxs(mt.Fragment,{children:[P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="shadow",o(),i(d)},children:"Resolve as Shadow"}),P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="hunter",o(),i(d)},children:"Resolve as Hunter"}),P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="neutral",o(),i(d)},children:"Resolve as Neutral"})]});case Ee.move:{const b=Pi([4,6]);return P.jsxs(mt.Fragment,{children:[P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=d.choice.value,o(),i(d)},children:d.choice.value}),P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=JSON.stringify(b),o(),i(d)},children:b[0]+b[1]})]})}case Ee.rerollMovement:{const b=Pi([6,4]);return P.jsxs(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=JSON.stringify(b),o(),i(d)},children:["Reroll movement (",b[0]," + ",b[1],")"]})}case Ee.teleport:{const b=(x=a.gameState.lobby.playerList.find(S=>S.user.id===d.playerId))==null?void 0:x.piece.position,y=a.gameState.lobby.decks.areas.cards,M=b===void 0||b<0?[]:[y[(b-1+y.length)%y.length],y[(b+1)%y.length]].filter((S,L,_)=>!!S&&_.findIndex(E=>(E==null?void 0:E.name)===(S==null?void 0:S.name))===L);return P.jsxs(mt.Fragment,{children:[P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="normal",o(),i(d)},children:"Move normally"}),M.map(S=>P.jsxs(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=S.name,o(),i(d)},children:["Teleport to ",S.name]},S.name))]})}case Ee.area:return P.jsxs(mt.Fragment,{children:[P.jsx(ri,{disablePadding:!0,sx:{backgroundColor:ft.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:a.gameState.lobby.decks.areas.cards.map((b,y)=>P.jsxs(mt.Fragment,{children:[y===0?void 0:P.jsx(Ut,{variant:"fullWidth",component:"li"}),P.jsx(Wt,{sx:{cursor:"pointer",color:b.name===l.clickTarget?"white":void 0,backgroundColor:b.name===l.clickTarget?s:b.name===l.hoverTarget?r:void 0},onMouseEnter:()=>u({...l,hoverTarget:b.name}),onMouseLeave:()=>u({...l,hoverTarget:void 0}),onClick:()=>u({...l,clickTarget:b.name}),children:b.name})]},`area_${b.name}`))}),h(d,"Ok")]});case Ee.reveal:return P.jsxs(mt.Fragment,{children:[P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="yes",o(),i(d)},children:"Yes"}),P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="no",o(),i(d)},children:"No"})]});case Ee.target:{const b=d.choice.card.name.startsWith("Hermit's "),y=a.gameState.lobby.playerList.filter(M=>(!M.piece.dead||d.choice.card.name==="Blessing"&&M.user.id===d.choice.target)&&(!b||M.user.id!==d.playerId));return y.length===0?P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="skip",o(),i(d)},children:"Skip"}):P.jsxs(mt.Fragment,{children:[P.jsx(ri,{disablePadding:!0,sx:{backgroundColor:ft.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:y.map((M,S)=>P.jsxs(mt.Fragment,{children:[S===0?void 0:P.jsx(Ut,{variant:"fullWidth",component:"li"}),P.jsx(Wt,{sx:{cursor:"pointer",color:M.user.id===l.clickTarget?"white":void 0,backgroundColor:M.user.id===l.clickTarget?s:M.user.id===l.hoverTarget?r:void 0},onMouseEnter:()=>u({...l,hoverTarget:M.user.id}),onMouseLeave:()=>u({...l,hoverTarget:void 0}),onClick:()=>u({...l,clickTarget:M.user.id}),children:M.user.userName})]},`choice_target_${S}`))}),h(d,"Ok")]})}case Ee.weirdWoods:{const b=a.gameState.lobby.playerList.find(y=>y.user.id===d.choice.target);return P.jsxs(mt.Fragment,{children:[P.jsxs(At,{children:["Choose an effect for ",(b==null?void 0:b.user.userName)??"the targeted player","."]}),P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="damage",o(),i(d)},children:"Deal 2 Damage"}),P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="heal",o(),i(d)},children:"Heal 1 Damage"})]})}case Ee.counterattack:{const b=a.gameState.lobby.playerList.find(y=>y.user.id===d.choice.target);return P.jsxs(mt.Fragment,{children:[P.jsxs(At,{children:["Counterattack ",(b==null?void 0:b.user.userName)??"the attacker","?"]}),P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{o(),t(b?[b.user]:[])},children:"Counterattack"}),P.jsx(Ie,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="skip",o(),i(d)},children:"Skip"})]})}case Ee.draw:return P.jsxs(mt.Fragment,{children:[P.jsxs(ri,{disablePadding:!0,sx:{backgroundColor:ft.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:[P.jsx(Wt,{sx:{cursor:"pointer",color:l.clickTarget==="green"?"white":void 0,backgroundColor:l.clickTarget==="green"?s:l.hoverTarget==="green"?r:void 0},onMouseEnter:()=>u({...l,hoverTarget:"green"}),onMouseLeave:()=>u({...l,hoverTarget:void 0}),onClick:()=>u({...l,clickTarget:"green"}),children:"Hermit"}),P.jsx(Ut,{variant:"fullWidth",component:"li"}),P.jsx(Wt,{sx:{cursor:"pointer",backgroundColor:l.clickTarget==="white"?s:l.hoverTarget==="white"?r:void 0},onMouseEnter:()=>u({...l,hoverTarget:"white"}),onMouseLeave:()=>u({...l,hoverTarget:void 0}),onClick:()=>u({...l,clickTarget:"white"}),children:"White"}),P.jsx(Ut,{variant:"fullWidth",component:"li"}),P.jsx(Wt,{sx:{cursor:"pointer",color:l.clickTarget==="black"?"white":void 0,backgroundColor:l.clickTarget==="black"?s:l.hoverTarget==="black"?r:void 0},onMouseEnter:()=>u({...l,hoverTarget:"black"}),onMouseLeave:()=>u({...l,hoverTarget:void 0}),onClick:()=>u({...l,clickTarget:"black"}),children:"Black"})]}),h(d,"Ok")]});default:return h(d,"Ok")}})()})]})};return P.jsx(Ii,{open:e.openModal,children:P.jsxs(Ue,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:500,p:2,sx:{maxWidth:"100%",boxSizing:"border-box",overflow:"hidden"},children:[e.modalMessage?P.jsx(Ue,{sx:{width:"calc(100% + 32px)",paddingTop:"8px",paddingLeft:"16px",marginX:"-16px",marginTop:"-16px",backgroundColor:ft.palette.background.default},children:P.jsx(At,{variant:"h5",sx:{width:"100%"},children:e.modalMessage})}):void 0,e.targets?p(e.targets,e.hasSword):void 0,e.playerChoice?f(e.playerChoice):void 0]})})}var nc=Object.defineProperty,ac=(o,e,t)=>e in o?nc(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,oc=(o,e,t)=>(ac(o,e+"",t),t);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hn="143",xi="srgb",Vi="srgb-linear",sa="300 es";class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,kn=180/Math.PI;function Vr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[o&255]+vt[o>>8&255]+vt[o>>16&255]+vt[o>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function Pt(o,e,t){return Math.max(e,Math.min(t,o))}function lc(o,e){return(o%e+e)%e}function qs(o,e,t){return(1-t)*o+t*e}function na(o){return(o&o-1)===0&&o!==0}function Nn(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,n,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=n,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],n=i[3],c=i[6],l=i[1],u=i[4],p=i[7],h=i[2],f=i[5],g=i[8],m=r[0],d=r[3],v=r[6],x=r[1],b=r[4],y=r[7],M=r[2],S=r[5],L=r[8];return s[0]=a*m+n*x+c*M,s[3]=a*d+n*b+c*S,s[6]=a*v+n*y+c*L,s[1]=l*m+u*x+p*M,s[4]=l*d+u*b+p*S,s[7]=l*v+u*y+p*L,s[2]=h*m+f*x+g*M,s[5]=h*d+f*b+g*S,s[8]=h*v+f*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],n=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*n*l-i*s*u+i*n*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],n=e[5],c=e[6],l=e[7],u=e[8],p=u*a-n*l,h=n*c-u*s,f=l*s-a*c,g=t*p+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=p*m,e[1]=(r*l-u*i)*m,e[2]=(n*i-r*a)*m,e[3]=h*m,e[4]=(u*t-r*c)*m,e[5]=(r*s-n*t)*m,e[6]=f*m,e[7]=(i*c-l*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,n){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*n)+a+e,-r*l,r*c,-r*(-l*a+c*n)+n+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],n=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+i*c,r[3]=t*a+i*l,r[6]=t*n+i*u,r[1]=-i*s+t*c,r[4]=-i*a+t*l,r[7]=-i*n+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Io(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function Ps(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Es(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Xs={[xi]:{[Vi]:qi},[Vi]:{[xi]:Es}},jt={legacyMode:!0,get workingColorSpace(){return Vi},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Xs[e]&&Xs[e][t]!==void 0){const i=Xs[e][t];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},qt={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ys(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Kr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Vi){return this.r=e,this.g=t,this.b=i,jt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Vi){if(e=lc(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ys(a,s,e+1/3),this.g=Ys(a,s,e),this.b=Ys(a,s,e-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(e,t=xi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],n=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,jt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,jt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=xi){const i=Fo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return jt.fromWorkingColorSpace(Kr(this,ot),e),Pt(ot.r*255,0,255)<<16^Pt(ot.g*255,0,255)<<8^Pt(ot.b*255,0,255)<<0}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vi){jt.fromWorkingColorSpace(Kr(this,ot),t);const i=ot.r,r=ot.g,s=ot.b,a=Math.max(i,r,s),n=Math.min(i,r,s);let c,l;const u=(n+a)/2;if(n===a)c=0,l=0;else{const p=a-n;switch(l=u<=.5?p/(a+n):p/(2-a-n),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Vi){return jt.fromWorkingColorSpace(Kr(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=xi){return jt.fromWorkingColorSpace(Kr(this,ot),e),e!==xi?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=i,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(Jr);const i=qs(qt.h,Jr.h,t),r=qs(qt.s,Jr.s,t),s=qs(qt.l,Jr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Be.NAMES=Fo;let rr;class zo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Ps("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ko{constructor(e=null){this.isSource=!0,this.uuid=Vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,n=r.length;a<n;a++)r[a].isDataTexture?s.push($s(r[a].image)):s.push($s(r[a]))}else s=$s(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $s(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?zo.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cc=0;class It extends wr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,n=1023,c=1009,l=1,u=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Vr(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=n,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=300;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const a=e.elements,n=a[0],c=a[4],l=a[8],u=a[1],p=a[5],h=a[9],f=a[2],g=a[6],m=a[10];if(Math.abs(c-u)<.01&&Math.abs(l-f)<.01&&Math.abs(h-g)<.01){if(Math.abs(c+u)<.1&&Math.abs(l+f)<.1&&Math.abs(h+g)<.1&&Math.abs(n+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(n+1)/2,x=(p+1)/2,b=(m+1)/2,y=(c+u)/4,M=(l+f)/4,S=(h+g)/4;return v>x&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=y/i,s=M/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=y/r,s=S/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=M/s,r=S/s),this.set(i,r,s,t),this}let d=Math.sqrt((g-h)*(g-h)+(l-f)*(l-f)+(u-c)*(u-c));return Math.abs(d)<.001&&(d=1),this.x=(g-h)/d,this.y=(l-f)/d,this.z=(u-c)/d,this.w=Math.acos((n+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zi extends wr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class No extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uc extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,n){let c=i[r+0],l=i[r+1],u=i[r+2],p=i[r+3];const h=s[a+0],f=s[a+1],g=s[a+2],m=s[a+3];if(n===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p;return}if(n===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(p!==m||c!==h||l!==f||u!==g){let d=1-n;const v=c*h+l*f+u*g+p*m,x=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const M=Math.sqrt(b),S=Math.atan2(M,v*x);d=Math.sin(d*S)/M,n=Math.sin(n*S)/M}const y=n*x;if(c=c*d+h*y,l=l*d+f*y,u=u*d+g*y,p=p*d+m*y,d===1-n){const M=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=M,l*=M,u*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const n=i[r],c=i[r+1],l=i[r+2],u=i[r+3],p=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=n*g+u*p+c*f-l*h,e[t+1]=c*g+u*h+l*p-n*f,e[t+2]=l*g+u*f+n*h-c*p,e[t+3]=u*g-n*p-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,a=e._order,n=Math.cos,c=Math.sin,l=n(i/2),u=n(r/2),p=n(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*p+l*f*g,this._y=l*f*p-h*u*g,this._z=l*u*g+h*f*p,this._w=l*u*p-h*f*g;break;case"YXZ":this._x=h*u*p+l*f*g,this._y=l*f*p-h*u*g,this._z=l*u*g-h*f*p,this._w=l*u*p+h*f*g;break;case"ZXY":this._x=h*u*p-l*f*g,this._y=l*f*p+h*u*g,this._z=l*u*g+h*f*p,this._w=l*u*p-h*f*g;break;case"ZYX":this._x=h*u*p-l*f*g,this._y=l*f*p+h*u*g,this._z=l*u*g-h*f*p,this._w=l*u*p+h*f*g;break;case"YZX":this._x=h*u*p+l*f*g,this._y=l*f*p+h*u*g,this._z=l*u*g-h*f*p,this._w=l*u*p-h*f*g;break;case"XZY":this._x=h*u*p-l*f*g,this._y=l*f*p-h*u*g,this._z=l*u*g+h*f*p,this._w=l*u*p+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],n=t[5],c=t[9],l=t[2],u=t[6],p=t[10],h=i+n+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>n&&i>p){const f=2*Math.sqrt(1+i-n-p);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(n>p){const f=2*Math.sqrt(1+n-i-p);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+p-i-n);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,n=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*n+r*l-s*c,this._y=r*u+a*c+s*n-i*l,this._z=s*u+a*l+i*c-r*n,this._w=a*u-i*n-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let n=a*e._w+i*e._x+r*e._y+s*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-n*n;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,n),p=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,n=e.z,c=e.w,l=c*t+a*r-n*i,u=c*i+n*t-s*r,p=c*r+s*i-a*t,h=-s*t-a*i-n*r;return this.x=l*c+h*-s+u*-n-p*-a,this.y=u*c+h*-a+p*-s-l*-n,this.z=p*c+h*-n+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,n=t.y,c=t.z;return this.x=r*c-s*n,this.y=s*a-i*c,this.z=i*n-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new G,aa=new jr;class qr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,n=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],p=e[c+1],h=e[c+2];u<t&&(t=u),p<i&&(i=p),h<r&&(r=h),u>s&&(s=u),p>a&&(a=p),h>n&&(n=h)}return this.min.set(t,i,r),this.max.set(s,a,n),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,n=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),p=e.getY(c),h=e.getZ(c);u<t&&(t=u),p<i&&(i=p),h<r&&(r=h),u>s&&(s=u),p>a&&(a=p),h>n&&(n=h)}return this.min.set(t,i,r),this.max.set(s,a,n),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,n=s.count;a<n;a++)zi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(zi)}else i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox),Js.applyMatrix4(e.matrixWorld),this.union(Js);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Qr.subVectors(this.max,Cr),sr.subVectors(e.a,Cr),nr.subVectors(e.b,Cr),ar.subVectors(e.c,Cr),wi.subVectors(nr,sr),Mi.subVectors(ar,nr),ki.subVectors(sr,ar);let t=[0,-wi.z,wi.y,0,-Mi.z,Mi.y,0,-ki.z,ki.y,wi.z,0,-wi.x,Mi.z,0,-Mi.x,ki.z,0,-ki.x,-wi.y,wi.x,0,-Mi.y,Mi.x,0,-ki.y,ki.x,0];return!Ks(t,sr,nr,ar,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Ks(t,sr,nr,ar,Qr))?!1:(es.crossVectors(wi,Mi),t=[es.x,es.y,es.z],Ks(t,sr,nr,ar,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return zi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new G,new G,new G,new G,new G,new G,new G,new G],zi=new G,Js=new qr,sr=new G,nr=new G,ar=new G,wi=new G,Mi=new G,ki=new G,Cr=new G,Qr=new G,es=new G,Ni=new G;function Ks(o,e,t,i,r){for(let s=0,a=o.length-3;s<=a;s+=3){Ni.fromArray(o,s);const n=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),c=e.dot(Ni),l=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>n)return!1}return!0}const hc=new qr,oa=new G,ts=new G,Qs=new G;class Gr{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Qs.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?ts.set(0,0,1).multiplyScalar(e.radius):ts.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(oa.copy(e.center).add(ts)),this.expandByPoint(oa.copy(e.center).sub(ts)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new G,en=new G,is=new G,Si=new G,tn=new G,rs=new G,rn=new G;class dc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.direction).multiplyScalar(t).add(this.origin),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){en.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(en);const s=e.distanceTo(t)*.5,a=-this.direction.dot(is),n=Si.dot(this.direction),c=-Si.dot(is),l=Si.lengthSq(),u=Math.abs(1-a*a);let p,h,f,g;if(u>0)if(p=a*c-n,h=a*n-c,g=s*u,p>=0)if(h>=-g)if(h<=g){const m=1/u;p*=m,h*=m,f=p*(p+a*h+2*n)+h*(a*p+h+2*c)+l}else h=s,p=Math.max(0,-(a*h+n)),f=-p*p+h*(h+2*c)+l;else h=-s,p=Math.max(0,-(a*h+n)),f=-p*p+h*(h+2*c)+l;else h<=-g?(p=Math.max(0,-(-a*s+n)),h=p>0?-s:Math.min(Math.max(-s,-c),s),f=-p*p+h*(h+2*c)+l):h<=g?(p=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(p=Math.max(0,-(a*s+n)),h=p>0?s:Math.min(Math.max(-s,-c),s),f=-p*p+h*(h+2*c)+l);else h=a>0?-s:s,p=Math.max(0,-(a*h+n)),f=-p*p+h*(h+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(is).multiplyScalar(h).add(en),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),n=i-a,c=i+a;return n<0&&c<0?null:n<0?this.at(c,t):this.at(n,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,n,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),p>=0?(n=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(n=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||n>r)||((n>i||i!==i)&&(i=n),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,r,s){tn.subVectors(t,e),rs.subVectors(i,e),rn.crossVectors(tn,rs);let a=this.direction.dot(rn),n;if(a>0){if(r)return null;n=1}else if(a<0)n=-1,a=-a;else return null;Si.subVectors(this.origin,e);const c=n*this.direction.dot(rs.crossVectors(Si,rs));if(c<0)return null;const l=n*this.direction.dot(tn.cross(Si));if(l<0||c+l>a)return null;const u=-n*Si.dot(rn);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,n,c,l,u,p,h,f,g,m,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=n,v[13]=c,v[2]=l,v[6]=u,v[10]=p,v[14]=h,v[3]=f,v[7]=g,v[11]=m,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),n=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*p,g=n*u,m=n*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=f+g*l,t[5]=h-m*l,t[9]=-n*c,t[2]=m-h*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,f=c*p,g=l*u,m=l*p;t[0]=h+m*n,t[4]=g*n-f,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-n,t[2]=f*n-g,t[6]=m+h*n,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,f=c*p,g=l*u,m=l*p;t[0]=h-m*n,t[4]=-a*p,t[8]=g+f*n,t[1]=f+g*n,t[5]=a*u,t[9]=m-h*n,t[2]=-a*l,t[6]=n,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,f=a*p,g=n*u,m=n*p;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+m,t[1]=c*p,t[5]=m*l+h,t[9]=f*l-g,t[2]=-l,t[6]=n*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,f=a*l,g=n*c,m=n*l;t[0]=c*u,t[4]=m-h*p,t[8]=g*p+f,t[1]=p,t[5]=a*u,t[9]=-n*u,t[2]=-l*u,t[6]=f*p+g,t[10]=h-m*p}else if(e.order==="XZY"){const h=a*c,f=a*l,g=n*c,m=n*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=h*p+m,t[5]=a*u,t[9]=f*p-g,t[2]=g*p-f,t[6]=n*u,t[10]=m*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pc,e,mc)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Ei.crossVectors(i,Lt),Ei.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Ei.crossVectors(i,Lt)),Ei.normalize(),ss.crossVectors(Lt,Ei),r[0]=Ei.x,r[4]=ss.x,r[8]=Lt.x,r[1]=Ei.y,r[5]=ss.y,r[9]=Lt.y,r[2]=Ei.z,r[6]=ss.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],n=i[4],c=i[8],l=i[12],u=i[1],p=i[5],h=i[9],f=i[13],g=i[2],m=i[6],d=i[10],v=i[14],x=i[3],b=i[7],y=i[11],M=i[15],S=r[0],L=r[4],_=r[8],E=r[12],D=r[1],k=r[5],O=r[9],z=r[13],C=r[2],F=r[6],I=r[10],j=r[14],q=r[3],N=r[7],U=r[11],ee=r[15];return s[0]=a*S+n*D+c*C+l*q,s[4]=a*L+n*k+c*F+l*N,s[8]=a*_+n*O+c*I+l*U,s[12]=a*E+n*z+c*j+l*ee,s[1]=u*S+p*D+h*C+f*q,s[5]=u*L+p*k+h*F+f*N,s[9]=u*_+p*O+h*I+f*U,s[13]=u*E+p*z+h*j+f*ee,s[2]=g*S+m*D+d*C+v*q,s[6]=g*L+m*k+d*F+v*N,s[10]=g*_+m*O+d*I+v*U,s[14]=g*E+m*z+d*j+v*ee,s[3]=x*S+b*D+y*C+M*q,s[7]=x*L+b*k+y*F+M*N,s[11]=x*_+b*O+y*I+M*U,s[15]=x*E+b*z+y*j+M*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],n=e[5],c=e[9],l=e[13],u=e[2],p=e[6],h=e[10],f=e[14],g=e[3],m=e[7],d=e[11],v=e[15];return g*(+s*c*p-r*l*p-s*n*h+i*l*h+r*n*f-i*c*f)+m*(+t*c*f-t*l*h+s*a*h-r*a*f+r*l*u-s*c*u)+d*(+t*l*p-t*n*f-s*a*p+i*a*f+s*n*u-i*l*u)+v*(-r*n*u-t*c*p+t*n*h+r*a*p-i*a*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],n=e[5],c=e[6],l=e[7],u=e[8],p=e[9],h=e[10],f=e[11],g=e[12],m=e[13],d=e[14],v=e[15],x=p*d*l-m*h*l+m*c*f-n*d*f-p*c*v+n*h*v,b=g*h*l-u*d*l-g*c*f+a*d*f+u*c*v-a*h*v,y=u*m*l-g*p*l+g*n*f-a*m*f-u*n*v+a*p*v,M=g*p*c-u*m*c-g*n*h+a*m*h+u*n*d-a*p*d,S=t*x+i*b+r*y+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/S;return e[0]=x*L,e[1]=(m*h*s-p*d*s-m*r*f+i*d*f+p*r*v-i*h*v)*L,e[2]=(n*d*s-m*c*s+m*r*l-i*d*l-n*r*v+i*c*v)*L,e[3]=(p*c*s-n*h*s-p*r*l+i*h*l+n*r*f-i*c*f)*L,e[4]=b*L,e[5]=(u*d*s-g*h*s+g*r*f-t*d*f-u*r*v+t*h*v)*L,e[6]=(g*c*s-a*d*s-g*r*l+t*d*l+a*r*v-t*c*v)*L,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*f+t*c*f)*L,e[8]=y*L,e[9]=(g*p*s-u*m*s-g*i*f+t*m*f+u*i*v-t*p*v)*L,e[10]=(a*m*s-g*n*s+g*i*l-t*m*l-a*i*v+t*n*v)*L,e[11]=(u*n*s-a*p*s-u*i*l+t*p*l+a*i*f-t*n*f)*L,e[12]=M*L,e[13]=(u*m*r-g*p*r+g*i*h-t*m*h-u*i*d+t*p*d)*L,e[14]=(g*n*r-a*m*r-g*i*c+t*m*c+a*i*d-t*n*d)*L,e[15]=(a*p*r-u*n*r+u*i*c-t*p*c-a*i*h+t*n*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,n=e.y,c=e.z,l=s*a,u=s*n;return this.set(l*a+i,l*n-r*c,l*c+r*n,0,l*n+r*c,u*n+i,u*c-r*a,0,l*c-r*n,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,n=t._z,c=t._w,l=s+s,u=a+a,p=n+n,h=s*l,f=s*u,g=s*p,m=a*u,d=a*p,v=n*p,x=c*l,b=c*u,y=c*p,M=i.x,S=i.y,L=i.z;return r[0]=(1-(m+v))*M,r[1]=(f+y)*M,r[2]=(g-b)*M,r[3]=0,r[4]=(f-y)*S,r[5]=(1-(h+v))*S,r[6]=(d+x)*S,r[7]=0,r[8]=(g+b)*L,r[9]=(d-x)*L,r[10]=(1-(h+m))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=or.set(r[0],r[1],r[2]).length();const a=or.set(r[4],r[5],r[6]).length(),n=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/s,l=1/a,u=1/n;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=l,Xt.elements[5]*=l,Xt.elements[6]*=l,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),i.x=s,i.y=a,i.z=n,this}makePerspective(e,t,i,r,s,a){const n=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r),h=-(a+s)/(a-s),f=-2*a*s/(a-s);return n[0]=c,n[4]=0,n[8]=u,n[12]=0,n[1]=0,n[5]=l,n[9]=p,n[13]=0,n[2]=0,n[6]=0,n[10]=h,n[14]=f,n[3]=0,n[7]=0,n[11]=-1,n[15]=0,this}makeOrthographic(e,t,i,r,s,a){const n=this.elements,c=1/(t-e),l=1/(i-r),u=1/(a-s),p=(t+e)*c,h=(i+r)*l,f=(a+s)*u;return n[0]=2*c,n[4]=0,n[8]=0,n[12]=-p,n[1]=0,n[5]=2*l,n[9]=0,n[13]=-h,n[2]=0,n[6]=0,n[10]=-2*u,n[14]=-f,n[3]=0,n[7]=0,n[11]=0,n[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const or=new G,Xt=new ut,pc=new G(0,0,0),mc=new G(1,1,1),Ei=new G,ss=new G,Lt=new G,la=new ut,ca=new jr;class Xr{constructor(e=0,t=0,i=0,r=Xr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],n=r[8],c=r[1],l=r[5],u=r[9],p=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(n,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(n,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(n,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return la.makeRotationFromQuaternion(e),this.setFromRotationMatrix(la,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ca.setFromEuler(this),this.setFromQuaternion(ca,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Xr.DefaultOrder="XYZ";Xr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fc=0;const ua=new G,lr=new jr,ui=new ut,ns=new G,Lr=new G,gc=new G,vc=new jr,ha=new G(1,0,0),da=new G(0,1,0),pa=new G(0,0,1),xc={type:"added"},ma={type:"removed"};class wt extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DefaultUp.clone();const e=new G,t=new Xr,i=new jr,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ht}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=wt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(ha,e)}rotateY(e){return this.rotateOnAxis(da,e)}rotateZ(e){return this.rotateOnAxis(pa,e)}translateOnAxis(e,t){return ua.copy(e).applyQuaternion(this.quaternion),this.position.add(ua.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ha,e)}translateY(e){return this.translateOnAxis(da,e)}translateZ(e){return this.translateOnAxis(pa,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ns.copy(e):ns.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Lr,ns,this.up):ui.lookAt(ns,Lr,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(ui),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ma)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ma)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,gc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(n,c){return n[c.uuid]===void 0&&(n[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){const c=n.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const n=[];for(let c=0,l=this.material.length;c<l;c++)n.push(s(e.materials,this.material[c]));r.material=n}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let n=0;n<this.children.length;n++)r.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let n=0;n<this.animations.length;n++){const c=this.animations[n];r.animations.push(s(e.animations,c))}}if(t){const n=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);n.length>0&&(i.geometries=n),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(n){const c=[];for(const l in n){const u=n[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DefaultUp=new G(0,1,0);wt.DefaultMatrixAutoUpdate=!0;const Yt=new G,hi=new G,sn=new G,di=new G,cr=new G,ur=new G,fa=new G,nn=new G,an=new G,on=new G;class yi{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),hi.subVectors(i,t),sn.subVectors(e,t);const a=Yt.dot(Yt),n=Yt.dot(hi),c=Yt.dot(sn),l=hi.dot(hi),u=hi.dot(sn),p=a*l-n*n;if(p===0)return s.set(-2,-1,-1);const h=1/p,f=(l*c-n*u)*h,g=(a*u-n*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,di),di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,i,r,s,a,n,c){return this.getBarycoord(e,t,i,r,di),c.set(0,0),c.addScaledVector(s,di.x),c.addScaledVector(a,di.y),c.addScaledVector(n,di.z),c}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),hi.subVectors(e,t),Yt.cross(hi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Yt.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return yi.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,n;cr.subVectors(r,i),ur.subVectors(s,i),nn.subVectors(e,i);const c=cr.dot(nn),l=ur.dot(nn);if(c<=0&&l<=0)return t.copy(i);an.subVectors(e,r);const u=cr.dot(an),p=ur.dot(an);if(u>=0&&p<=u)return t.copy(r);const h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(cr,a);on.subVectors(e,s);const f=cr.dot(on),g=ur.dot(on);if(g>=0&&f<=g)return t.copy(s);const m=f*l-c*g;if(m<=0&&l>=0&&g<=0)return n=l/(l-g),t.copy(i).addScaledVector(ur,n);const d=u*g-f*p;if(d<=0&&p-u>=0&&f-g>=0)return fa.subVectors(s,r),n=(p-u)/(p-u+(f-g)),t.copy(r).addScaledVector(fa,n);const v=1/(d+m+h);return a=m*v,n=h*v,t.copy(i).addScaledVector(cr,a).addScaledVector(ur,n)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yc=0;class Ki extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===1;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const n in s){const c=s[n];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Oo extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new G,as=new Oe;class ai{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new Be),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new Oe),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new G),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new ct),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Go extends ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wo extends ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _c=0;const Bt=new ut,ln=new wt,hr=new G,Rt=new qr,Rr=new qr,pt=new G;class oi extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Io(e)?Wo:Go)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return ln.lookAt(e),ln.updateMatrix(),this.applyMatrix4(ln.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const n=t[s];Rr.setFromBufferAttribute(n),this.morphTargetsRelative?(pt.addVectors(Rt.min,Rr.min),Rt.expandByPoint(pt),pt.addVectors(Rt.max,Rr.max),Rt.expandByPoint(pt)):(Rt.expandByPoint(Rr.min),Rt.expandByPoint(Rr.max))}Rt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const n=t[s],c=this.morphTargetsRelative;for(let l=0,u=n.count;l<u;l++)pt.fromBufferAttribute(n,l),c&&(hr.fromBufferAttribute(e,l),pt.add(hr)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,n=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*n),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let D=0;D<n;D++)l[D]=new G,u[D]=new G;const p=new G,h=new G,f=new G,g=new Oe,m=new Oe,d=new Oe,v=new G,x=new G;function b(D,k,O){p.fromArray(r,D*3),h.fromArray(r,k*3),f.fromArray(r,O*3),g.fromArray(a,D*2),m.fromArray(a,k*2),d.fromArray(a,O*2),h.sub(p),f.sub(p),m.sub(g),d.sub(g);const z=1/(m.x*d.y-d.x*m.y);!isFinite(z)||(v.copy(h).multiplyScalar(d.y).addScaledVector(f,-m.y).multiplyScalar(z),x.copy(f).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(z),l[D].add(v),l[k].add(v),l[O].add(v),u[D].add(x),u[k].add(x),u[O].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let D=0,k=y.length;D<k;++D){const O=y[D],z=O.start,C=O.count;for(let F=z,I=z+C;F<I;F+=3)b(i[F+0],i[F+1],i[F+2])}const M=new G,S=new G,L=new G,_=new G;function E(D){L.fromArray(s,D*3),_.copy(L);const k=l[D];M.copy(k),M.sub(L.multiplyScalar(L.dot(k))).normalize(),S.crossVectors(_,k);const O=S.dot(u[D])<0?-1:1;c[D*4]=M.x,c[D*4+1]=M.y,c[D*4+2]=M.z,c[D*4+3]=O}for(let D=0,k=y.length;D<k;++D){const O=y[D],z=O.start,C=O.count;for(let F=z,I=z+C;F<I;F+=3)E(i[F+0]),E(i[F+1]),E(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,n=new G,c=new G,l=new G,u=new G,p=new G;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,d),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),n.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,d),n.add(u),c.add(u),l.add(u),i.setXYZ(g,n.x,n.y,n.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const s=i[r].array,a=e.attributes[r],n=a.array,c=a.itemSize*t,l=Math.min(n.length,s.length-c);for(let u=0,p=c;u<l;u++,p++)s[p]=n[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(n,c){const l=n.array,u=n.itemSize,p=n.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let m=0,d=c.length;m<d;m++){n.isInterleavedBufferAttribute?f=c[m]*n.data.stride+n.offset:f=c[m]*u;for(let v=0;v<u;v++)h[g++]=l[f++]}return new ai(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,i=this.index.array,r=this.attributes;for(const n in r){const c=r[n],l=e(c,i);t.setAttribute(n,l)}const s=this.morphAttributes;for(const n in s){const c=[],l=s[n];for(let u=0,p=l.length;u<p;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[n]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let n=0,c=a.length;n<c;n++){const l=a[n];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){const f=l[p];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const n=this.boundingSphere;return n!==null&&(e.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],p=s[l];for(let h=0,f=p.length;h<f;h++)u.push(p[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const n=e.boundingBox;n!==null&&(this.boundingBox=n.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ga=new ut,dr=new dc,cn=new Gr,Ti=new G,Ai=new G,Ci=new G,un=new G,hn=new G,dn=new G,os=new G,ls=new G,cs=new G,us=new Oe,hs=new Oe,ds=new Oe,pn=new G,ps=new G;class ni extends wt{constructor(e=new oi,t=new Oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),cn.copy(i.boundingSphere),cn.applyMatrix4(s),e.ray.intersectsSphere(cn)===!1)||(ga.copy(s).invert(),dr.copy(e.ray).applyMatrix4(ga),i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1))return;let a;const n=i.index,c=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative,p=i.attributes.uv,h=i.attributes.uv2,f=i.groups,g=i.drawRange;if(n!==null)if(Array.isArray(r))for(let m=0,d=f.length;m<d;m++){const v=f[m],x=r[v.materialIndex],b=Math.max(v.start,g.start),y=Math.min(n.count,Math.min(v.start+v.count,g.start+g.count));for(let M=b,S=y;M<S;M+=3){const L=n.getX(M),_=n.getX(M+1),E=n.getX(M+2);a=ms(this,x,e,dr,c,l,u,p,h,L,_,E),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(n.count,g.start+g.count);for(let v=m,x=d;v<x;v+=3){const b=n.getX(v),y=n.getX(v+1),M=n.getX(v+2);a=ms(this,r,e,dr,c,l,u,p,h,b,y,M),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,d=f.length;m<d;m++){const v=f[m],x=r[v.materialIndex],b=Math.max(v.start,g.start),y=Math.min(c.count,Math.min(v.start+v.count,g.start+g.count));for(let M=b,S=y;M<S;M+=3){const L=M,_=M+1,E=M+2;a=ms(this,x,e,dr,c,l,u,p,h,L,_,E),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(c.count,g.start+g.count);for(let v=m,x=d;v<x;v+=3){const b=v,y=v+1,M=v+2;a=ms(this,r,e,dr,c,l,u,p,h,b,y,M),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function bc(o,e,t,i,r,s,a,n){let c;if(e.side===1?c=i.intersectTriangle(a,s,r,!0,n):c=i.intersectTriangle(r,s,a,e.side!==2,n),c===null)return null;ps.copy(n),ps.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(ps);return l<t.near||l>t.far?null:{distance:l,point:ps.clone(),object:o}}function ms(o,e,t,i,r,s,a,n,c,l,u,p){Ti.fromBufferAttribute(r,l),Ai.fromBufferAttribute(r,u),Ci.fromBufferAttribute(r,p);const h=o.morphTargetInfluences;if(s&&h){os.set(0,0,0),ls.set(0,0,0),cs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=h[g],v=s[g];d!==0&&(un.fromBufferAttribute(v,l),hn.fromBufferAttribute(v,u),dn.fromBufferAttribute(v,p),a?(os.addScaledVector(un,d),ls.addScaledVector(hn,d),cs.addScaledVector(dn,d)):(os.addScaledVector(un.sub(Ti),d),ls.addScaledVector(hn.sub(Ai),d),cs.addScaledVector(dn.sub(Ci),d)))}Ti.add(os),Ai.add(ls),Ci.add(cs)}o.isSkinnedMesh&&(o.boneTransform(l,Ti),o.boneTransform(u,Ai),o.boneTransform(p,Ci));const f=bc(o,e,t,i,Ti,Ai,Ci,pn);if(f){n&&(us.fromBufferAttribute(n,l),hs.fromBufferAttribute(n,u),ds.fromBufferAttribute(n,p),f.uv=yi.getUV(pn,Ti,Ai,Ci,us,hs,ds,new Oe)),c&&(us.fromBufferAttribute(c,l),hs.fromBufferAttribute(c,u),ds.fromBufferAttribute(c,p),f.uv2=yi.getUV(pn,Ti,Ai,Ci,us,hs,ds,new Oe));const g={a:l,b:u,c:p,normal:new G,materialIndex:0};yi.getNormal(Ti,Ai,Ci,g.normal),f.face=g}return f}class Yr extends oi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const n=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],p=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function g(m,d,v,x,b,y,M,S,L,_,E){const D=y/L,k=M/_,O=y/2,z=M/2,C=S/2,F=L+1,I=_+1;let j=0,q=0;const N=new G;for(let U=0;U<I;U++){const ee=U*k-z;for(let V=0;V<F;V++){const te=V*D-O;N[m]=te*x,N[d]=ee*b,N[v]=C,l.push(N.x,N.y,N.z),N[m]=0,N[d]=0,N[v]=S>0?1:-1,u.push(N.x,N.y,N.z),p.push(V/L),p.push(1-U/_),j+=1}}for(let U=0;U<_;U++)for(let ee=0;ee<L;ee++){const V=h+ee+F*U,te=h+ee+F*(U+1),de=h+(ee+1)+F*(U+1),Re=h+(ee+1)+F*U;c.push(V,te,Re),c.push(te,de,Re),q+=6}n.addGroup(f,q,E),f+=q,h+=j}}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const r=o[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function xt(o){const e={};for(let t=0;t<o.length;t++){const i=br(o[t]);for(const r in i)e[r]=i[r]}return e}function wc(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const Mc={clone:br,merge:xt};var Sc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ec=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sc,this.fragmentShader=Ec,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=wc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uo extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Uo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kn*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const n=this.filmOffset;n!==0&&(s+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=90,mr=1;class Tc extends wt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Dt(pr,mr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new G(1,0,0)),this.add(r);const s=new Dt(pr,mr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new G(-1,0,0)),this.add(s);const a=new Dt(pr,mr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new G(0,1,0)),this.add(a);const n=new Dt(pr,mr,e,t);n.layers=this.layers,n.up.set(0,0,-1),n.lookAt(new G(0,-1,0)),this.add(n);const c=new Dt(pr,mr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new G(0,0,1)),this.add(c);const l=new Dt(pr,mr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new G(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,n,c,l]=this.children,u=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,n),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=p,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Ho extends It{constructor(e,t,i,r,s,a,n,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,i,r,s,a,n,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ac extends Zi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ho(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new ni(r,s),n=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Tc(1,10,this).update(e,a),t.minFilter=n,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const mn=new G,Cc=new G,Lc=new Ht;class Oi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=mn.subVectors(i,t).cross(Cc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(mn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lc.getNormalMatrix(e),r=this.coplanarPoint(mn).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Gr,fs=new G;class Vn{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,a=new Oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(s),n[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],n=i[3],c=i[4],l=i[5],u=i[6],p=i[7],h=i[8],f=i[9],g=i[10],m=i[11],d=i[12],v=i[13],x=i[14],b=i[15];return t[0].setComponents(n-r,p-c,m-h,b-d).normalize(),t[1].setComponents(n+r,p+c,m+h,b+d).normalize(),t[2].setComponents(n+s,p+l,m+f,b+v).normalize(),t[3].setComponents(n-s,p-l,m-f,b-v).normalize(),t[4].setComponents(n-a,p-u,m-g,b-x).normalize(),t[5].setComponents(n+a,p+u,m+g,b+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fs.x=r.normal.x>0?e.max.x:e.min.x,fs.y=r.normal.y>0?e.max.y:e.min.y,fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vo(){let o=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Rc(o,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const p=l.array,h=l.usage,f=o.createBuffer();o.bindBuffer(u,f),o.bufferData(u,p,h),l.onUploadCallback();let g;if(p instanceof Float32Array)g=5126;else if(p instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(p instanceof Int16Array)g=5122;else if(p instanceof Uint32Array)g=5125;else if(p instanceof Int32Array)g=5124;else if(p instanceof Int8Array)g=5120;else if(p instanceof Uint8Array)g=5121;else if(p instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,p){const h=u.array,f=u.updateRange;o.bindBuffer(p,l),f.count===-1?o.bufferSubData(p,0,h):(t?o.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):o.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function n(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(o.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const p=i.get(l);p===void 0?i.set(l,r(l,u)):p.version<l.version&&(s(p.buffer,l,u),p.version=l.version)}return{get:a,remove:n,update:c}}class Ns extends oi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,n=Math.floor(i),c=Math.floor(r),l=n+1,u=c+1,p=e/n,h=t/c,f=[],g=[],m=[],d=[];for(let v=0;v<u;v++){const x=v*h-a;for(let b=0;b<l;b++){const y=b*p-s;g.push(y,-x,0),m.push(0,0,1),d.push(b/n),d.push(1-v/c)}}for(let v=0;v<c;v++)for(let x=0;x<n;x++){const b=x+l*v,y=x+l*(v+1),M=x+1+l*(v+1),S=x+1+l*v;f.push(b,y,S),f.push(y,M,S)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(m,3)),this.setAttribute("uv",new yt(d,2))}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ic=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nc="vec3 transformed = vec3( position );",Bc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Gc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Jc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",su=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,fu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vu=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,xu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,_u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Su=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Eu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Lu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Du=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ou=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Vu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,$u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,th=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ih=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ah=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ch=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,uh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ph=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yh=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,_h=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,bh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,wh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Mh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Eh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Th=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ah=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ch=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lh=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ph=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ih=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Fh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uh=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hh=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$h=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ed=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,id=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:Pc,alphamap_pars_fragment:Dc,alphatest_fragment:Ic,alphatest_pars_fragment:Fc,aomap_fragment:zc,aomap_pars_fragment:kc,begin_vertex:Nc,beginnormal_vertex:Bc,bsdfs:Oc,iridescence_fragment:Gc,bumpmap_pars_fragment:Wc,clipping_planes_fragment:Uc,clipping_planes_pars_fragment:Hc,clipping_planes_pars_vertex:Vc,clipping_planes_vertex:jc,color_fragment:qc,color_pars_fragment:Xc,color_pars_vertex:Yc,color_vertex:$c,common:Zc,cube_uv_reflection_fragment:Jc,defaultnormal_vertex:Kc,displacementmap_pars_vertex:Qc,displacementmap_vertex:eu,emissivemap_fragment:tu,emissivemap_pars_fragment:iu,encodings_fragment:ru,encodings_pars_fragment:su,envmap_fragment:nu,envmap_common_pars_fragment:au,envmap_pars_fragment:ou,envmap_pars_vertex:lu,envmap_physical_pars_fragment:yu,envmap_vertex:cu,fog_vertex:uu,fog_pars_vertex:hu,fog_fragment:du,fog_pars_fragment:pu,gradientmap_pars_fragment:mu,lightmap_fragment:fu,lightmap_pars_fragment:gu,lights_lambert_vertex:vu,lights_pars_begin:xu,lights_toon_fragment:_u,lights_toon_pars_fragment:bu,lights_phong_fragment:wu,lights_phong_pars_fragment:Mu,lights_physical_fragment:Su,lights_physical_pars_fragment:Eu,lights_fragment_begin:Tu,lights_fragment_maps:Au,lights_fragment_end:Cu,logdepthbuf_fragment:Lu,logdepthbuf_pars_fragment:Ru,logdepthbuf_pars_vertex:Pu,logdepthbuf_vertex:Du,map_fragment:Iu,map_pars_fragment:Fu,map_particle_fragment:zu,map_particle_pars_fragment:ku,metalnessmap_fragment:Nu,metalnessmap_pars_fragment:Bu,morphcolor_vertex:Ou,morphnormal_vertex:Gu,morphtarget_pars_vertex:Wu,morphtarget_vertex:Uu,normal_fragment_begin:Hu,normal_fragment_maps:Vu,normal_pars_fragment:ju,normal_pars_vertex:qu,normal_vertex:Xu,normalmap_pars_fragment:Yu,clearcoat_normal_fragment_begin:$u,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:Ju,iridescence_pars_fragment:Ku,output_fragment:Qu,packing:eh,premultiplied_alpha_fragment:th,project_vertex:ih,dithering_fragment:rh,dithering_pars_fragment:sh,roughnessmap_fragment:nh,roughnessmap_pars_fragment:ah,shadowmap_pars_fragment:oh,shadowmap_pars_vertex:lh,shadowmap_vertex:ch,shadowmask_pars_fragment:uh,skinbase_vertex:hh,skinning_pars_vertex:dh,skinning_vertex:ph,skinnormal_vertex:mh,specularmap_fragment:fh,specularmap_pars_fragment:gh,tonemapping_fragment:vh,tonemapping_pars_fragment:xh,transmission_fragment:yh,transmission_pars_fragment:_h,uv_pars_fragment:bh,uv_pars_vertex:wh,uv_vertex:Mh,uv2_pars_fragment:Sh,uv2_pars_vertex:Eh,uv2_vertex:Th,worldpos_vertex:Ah,background_vert:Ch,background_frag:Lh,cube_vert:Rh,cube_frag:Ph,depth_vert:Dh,depth_frag:Ih,distanceRGBA_vert:Fh,distanceRGBA_frag:zh,equirect_vert:kh,equirect_frag:Nh,linedashed_vert:Bh,linedashed_frag:Oh,meshbasic_vert:Gh,meshbasic_frag:Wh,meshlambert_vert:Uh,meshlambert_frag:Hh,meshmatcap_vert:Vh,meshmatcap_frag:jh,meshnormal_vert:qh,meshnormal_frag:Xh,meshphong_vert:Yh,meshphong_frag:$h,meshphysical_vert:Zh,meshphysical_frag:Jh,meshtoon_vert:Kh,meshtoon_frag:Qh,points_vert:ed,points_frag:td,shadow_vert:id,shadow_frag:rd,sprite_vert:sd,sprite_frag:nd},ce={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ht},uv2Transform:{value:new Ht},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}}},si={basic:{uniforms:xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:xt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:xt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:xt([ce.points,ce.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:xt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:xt([ce.common,ce.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:xt([ce.sprite,ce.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:xt([ce.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:xt([ce.common,ce.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:xt([ce.lights,ce.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};si.physical={uniforms:xt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};function ad(o,e,t,i,r,s){const a=new Be(0);let n=r===!0?0:1,c,l,u=null,p=0,h=null;function f(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=e.get(x));const b=o.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(a,n):x&&x.isColor&&(g(x,1),v=!0),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(l===void 0&&(l=new ni(new Yr(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:br(si.cube.uniforms),vertexShader:si.cube.vertexShader,fragmentShader:si.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||p!==x.version||h!==o.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,h=o.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ni(new Ns(2,2),new Ji({name:"BackgroundMaterial",uniforms:br(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||h!==o.toneMapping)&&(c.material.needsUpdate=!0,u=x,p=x.version,h=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),n=d,g(a,n)},getClearAlpha:function(){return n},setClearAlpha:function(m){n=m,g(a,n)},render:f}}function od(o,e,t,i){const r=o.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,n={},c=d(null);let l=c,u=!1;function p(C,F,I,j,q){let N=!1;if(a){const U=m(j,I,F);l!==U&&(l=U,f(l.object)),N=v(C,j,I,q),N&&x(C,j,I,q)}else{const U=F.wireframe===!0;(l.geometry!==j.id||l.program!==I.id||l.wireframe!==U)&&(l.geometry=j.id,l.program=I.id,l.wireframe=U,N=!0)}q!==null&&t.update(q,34963),(N||u)&&(u=!1,_(C,F,I,j),q!==null&&o.bindBuffer(34963,t.get(q).buffer))}function h(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(C){return i.isWebGL2?o.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?o.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function m(C,F,I){const j=I.wireframe===!0;let q=n[C.id];q===void 0&&(q={},n[C.id]=q);let N=q[F.id];N===void 0&&(N={},q[F.id]=N);let U=N[j];return U===void 0&&(U=d(h()),N[j]=U),U}function d(C){const F=[],I=[],j=[];for(let q=0;q<r;q++)F[q]=0,I[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:j,object:C,attributes:{},index:null}}function v(C,F,I,j){const q=l.attributes,N=F.attributes;let U=0;const ee=I.getAttributes();for(const V in ee)if(ee[V].location>=0){const te=q[V];let de=N[V];if(de===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),te===void 0||te.attribute!==de||de&&te.data!==de.data)return!0;U++}return l.attributesNum!==U||l.index!==j}function x(C,F,I,j){const q={},N=F.attributes;let U=0;const ee=I.getAttributes();for(const V in ee)if(ee[V].location>=0){let te=N[V];te===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const de={};de.attribute=te,te&&te.data&&(de.data=te.data),q[V]=de,U++}l.attributes=q,l.attributesNum=U,l.index=j}function b(){const C=l.newAttributes;for(let F=0,I=C.length;F<I;F++)C[F]=0}function y(C){M(C,0)}function M(C,F){const I=l.newAttributes,j=l.enabledAttributes,q=l.attributeDivisors;I[C]=1,j[C]===0&&(o.enableVertexAttribArray(C),j[C]=1),q[C]!==F&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,F),q[C]=F)}function S(){const C=l.newAttributes,F=l.enabledAttributes;for(let I=0,j=F.length;I<j;I++)F[I]!==C[I]&&(o.disableVertexAttribArray(I),F[I]=0)}function L(C,F,I,j,q,N){i.isWebGL2===!0&&(I===5124||I===5125)?o.vertexAttribIPointer(C,F,I,q,N):o.vertexAttribPointer(C,F,I,j,q,N)}function _(C,F,I,j){if(i.isWebGL2===!1&&(C.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const q=j.attributes,N=I.getAttributes(),U=F.defaultAttributeValues;for(const ee in N){const V=N[ee];if(V.location>=0){let te=q[ee];if(te===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const de=te.normalized,Re=te.itemSize,J=t.get(te);if(J===void 0)continue;const Q=J.buffer,ie=J.type,ye=J.bytesPerElement;if(te.isInterleavedBufferAttribute){const ne=te.data,Ve=ne.stride,Se=te.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<V.locationSize;we++)M(V.location+we,ne.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<V.locationSize;we++)y(V.location+we);o.bindBuffer(34962,Q);for(let we=0;we<V.locationSize;we++)L(V.location+we,Re/V.locationSize,ie,de,Ve*ye,(Se+Re/V.locationSize*we)*ye)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)M(V.location+ne,te.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<V.locationSize;ne++)y(V.location+ne);o.bindBuffer(34962,Q);for(let ne=0;ne<V.locationSize;ne++)L(V.location+ne,Re/V.locationSize,ie,de,Re*ye,Re/V.locationSize*ne*ye)}}else if(U!==void 0){const de=U[ee];if(de!==void 0)switch(de.length){case 2:o.vertexAttrib2fv(V.location,de);break;case 3:o.vertexAttrib3fv(V.location,de);break;case 4:o.vertexAttrib4fv(V.location,de);break;default:o.vertexAttrib1fv(V.location,de)}}}}S()}function E(){O();for(const C in n){const F=n[C];for(const I in F){const j=F[I];for(const q in j)g(j[q].object),delete j[q];delete F[I]}delete n[C]}}function D(C){if(n[C.id]===void 0)return;const F=n[C.id];for(const I in F){const j=F[I];for(const q in j)g(j[q].object),delete j[q];delete F[I]}delete n[C.id]}function k(C){for(const F in n){const I=n[F];if(I[C.id]===void 0)continue;const j=I[C.id];for(const q in j)g(j[q].object),delete j[q];delete I[C.id]}}function O(){z(),u=!0,l!==c&&(l=c,f(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:O,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:y,disableUnusedAttributes:S}}function ld(o,e,t,i){const r=i.isWebGL2;let s;function a(l){s=l}function n(l,u){o.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,p){if(p===0)return;let h,f;if(r)h=o,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](s,l,u,p),t.update(u,s,p)}this.setMode=a,this.render=n,this.renderInstances=c}function cd(o,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let n=t.precision!==void 0?t.precision:"highp";const c=s(n);c!==n&&(console.warn("THREE.WebGLRenderer:",n,"not supported, using",c,"instead."),n=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=o.getParameter(34930),h=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),m=o.getParameter(34921),d=o.getParameter(36347),v=o.getParameter(36348),x=o.getParameter(36349),b=h>0,y=a||e.has("OES_texture_float"),M=b&&y,S=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:n,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:S}}function ud(o){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Oi,n=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,f){const g=p.length!==0||h||i!==0||r;return r=h,t=u(p,f,0),i=p.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(p,h,f){const g=p.clippingPlanes,m=p.clipIntersection,d=p.clipShadows,v=o.get(p);if(!r||g===null||g.length===0||s&&!d)s?u(null):l();else{const x=s?0:i,b=x*4;let y=v.clippingState||null;c.value=y,y=u(g,h,b,f);for(let M=0;M!==b;++M)y[M]=t[M];v.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,f,g){const m=p!==null?p.length:0;let d=null;if(m!==0){if(d=c.value,g!==!0||d===null){const v=f+m*4,x=h.matrixWorldInverse;n.getNormalMatrix(x),(d===null||d.length<v)&&(d=new Float32Array(v));for(let b=0,y=f;b!==m;++b,y+=4)a.copy(p[b]).applyMatrix4(x,n),a.normal.toArray(d,y),d[y+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function hd(o){let e=new WeakMap;function t(a,n){return n===303?a.mapping=301:n===304&&(a.mapping=302),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const n=a.mapping;if(n===303||n===304)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ac(c.height/2);return l.fromEquirectangularTexture(o,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const n=a.target;n.removeEventListener("dispose",r);const c=e.get(n);c!==void 0&&(e.delete(n),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dd extends Uo{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,n=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,n-=u*this.view.offsetY,c=n-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,n,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,va=[.125,.215,.35,.446,.526,.582],Ui=20,fn=new dd,xa=new Be;let gn=null;const Gi=(1+Math.sqrt(5))/2,gr=1/Gi,ya=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Gi,gr),new G(0,Gi,-gr),new G(gr,0,Gi),new G(-gr,0,Gi),new G(Gi,gr,0),new G(-Gi,gr,0)];class _a{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){gn=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ma(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gn),e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gn=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},r=ba(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ba(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pd(s)),this._blurMaterial=md(s,e,t)}return r}_compileMaterial(e){const t=new ni(this._lodPlanes[0],e);this._renderer.compile(t,fn)}_sceneToCubeUV(e,t,i,r){const s=new Dt(90,1,t,i),a=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(xa),c.toneMapping=0,c.autoClear=!1;const p=new Oo({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),h=new ni(new Yr,p);let f=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,f=!0):(p.color.copy(xa),f=!0);for(let m=0;m<6;m++){const d=m%3;d===0?(s.up.set(0,a[m],0),s.lookAt(n[m],0,0)):d===1?(s.up.set(0,0,a[m]),s.lookAt(0,n[m],0)):(s.up.set(0,a[m],0),s.lookAt(0,0,n[m]));const v=this._cubeSize;gs(r,d*v,m>2?v:0,v,v),c.setRenderTarget(r),f&&c.render(h,s),c.render(e,s)}h.geometry.dispose(),h.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ma()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ni(this._lodPlanes[0],s),n=s.uniforms;n.envMap.value=e;const c=this._cubeSize;gs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,fn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ya[(r-1)%ya.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,n){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new ni(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):Ui;d>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ui}`);const v=[];let x=0;for(let L=0;L<Ui;++L){const _=L/m,E=Math.exp(-_*_/2);v.push(E),L===0?x+=E:L<d&&(x+=2*E)}for(let L=0;L<v.length;L++)v[L]=v[L]/x;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=v,h.latitudinal.value=a==="latitudinal",n&&(h.poleAxis.value=n);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const y=this._sizeLods[r],M=3*y*(r>b-yr?r-b+yr:0),S=4*(this._cubeSize-y);gs(t,M,S,3*y,2*y),c.setRenderTarget(t),c.render(p,fn)}}function pd(o){const e=[],t=[],i=[];let r=o;const s=o-yr+1+va.length;for(let a=0;a<s;a++){const n=Math.pow(2,r);t.push(n);let c=1/n;a>o-yr?c=va[a-o+yr-1]:a===0&&(c=0),i.push(c);const l=1/(n-2),u=-l,p=1+l,h=[u,u,p,u,p,p,u,u,p,p,u,p],f=6,g=6,m=3,d=2,v=1,x=new Float32Array(m*g*f),b=new Float32Array(d*g*f),y=new Float32Array(v*g*f);for(let S=0;S<f;S++){const L=S%3*2/3-1,_=S>2?0:-1,E=[L,_,0,L+2/3,_,0,L+2/3,_+1,0,L,_,0,L+2/3,_+1,0,L,_+1,0];x.set(E,m*g*S),b.set(h,d*g*S);const D=[S,S,S,S,S,S];y.set(D,v*g*S)}const M=new oi;M.setAttribute("position",new ai(x,m)),M.setAttribute("uv",new ai(b,d)),M.setAttribute("faceIndex",new ai(y,v)),e.push(M),r>yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ba(o,e,t){const i=new Zi(o,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(o,e,t,i,r){o.viewport.set(e,t,i,r),o.scissor.set(e,t,i,r)}function md(o,e,t){const i=new Float32Array(Ui),r=new G(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wa(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ma(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fd(o){let e=new WeakMap,t=null;function i(n){if(n&&n.isTexture){const c=n.mapping,l=c===303||c===304,u=c===301||c===302;if(l||u)if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let p=e.get(n);return t===null&&(t=new _a(o)),p=l?t.fromEquirectangular(n,p):t.fromCubemap(n,p),e.set(n,p),p.texture}else{if(e.has(n))return e.get(n).texture;{const p=n.image;if(l&&p&&p.height>0||u&&p&&r(p)){t===null&&(t=new _a(o));const h=l?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,h),n.addEventListener("dispose",s),h.texture}else return null}}}return n}function r(n){let c=0;const l=6;for(let u=0;u<l;u++)n[u]!==void 0&&c++;return c===l}function s(n){const c=n.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gd(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vd(o,e,t,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function n(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const g in h)e.update(h[g],34962);const f=p.morphAttributes;for(const g in f){const m=f[g];for(let d=0,v=m.length;d<v;d++)e.update(m[d],34962)}}function l(p){const h=[],f=p.index,g=p.attributes.position;let m=0;if(f!==null){const x=f.array;m=f.version;for(let b=0,y=x.length;b<y;b+=3){const M=x[b+0],S=x[b+1],L=x[b+2];h.push(M,S,S,L,L,M)}}else{const x=g.array;m=g.version;for(let b=0,y=x.length/3-1;b<y;b+=3){const M=b+0,S=b+1,L=b+2;h.push(M,S,S,L,L,M)}}const d=new(Io(h)?Wo:Go)(h,1);d.version=m;const v=s.get(p);v&&e.remove(v),s.set(p,d)}function u(p){const h=s.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&l(p)}else l(p);return s.get(p)}return{get:n,update:c,getWireframeAttribute:u}}function xd(o,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let n,c;function l(h){n=h.type,c=h.bytesPerElement}function u(h,f){o.drawElements(s,f,n,h*c),t.update(f,s,1)}function p(h,f,g){if(g===0)return;let m,d;if(r)m=o,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,f,n,h*c,g),t.update(f,s,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=p}function yd(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,n){switch(t.calls++,a){case 4:t.triangles+=n*(s/3);break;case 1:t.lines+=n*(s/2);break;case 3:t.lines+=n*(s-1);break;case 2:t.lines+=n*s;break;case 0:t.points+=n*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _d(o,e){return o[0]-e[0]}function bd(o,e){return Math.abs(e[1])-Math.abs(o[1])}function vn(o,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),o.divideScalar(t)}function wd(o,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ct,n=[];for(let l=0;l<8;l++)n[l]=[l,0];function c(l,u,p,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==m){let b=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),M===!0&&(D=2),S===!0&&(D=3);let k=u.attributes.position.count*D,O=1;k>e.maxTextureSize&&(O=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*O*4*m),C=new No(z,k,O,m);C.type=1015,C.needsUpdate=!0;const F=D*4;for(let I=0;I<m;I++){const j=L[I],q=_[I],N=E[I],U=k*O*4*I;for(let ee=0;ee<j.count;ee++){const V=ee*F;y===!0&&(a.fromBufferAttribute(j,ee),j.normalized===!0&&vn(a,j),z[U+V+0]=a.x,z[U+V+1]=a.y,z[U+V+2]=a.z,z[U+V+3]=0),M===!0&&(a.fromBufferAttribute(q,ee),q.normalized===!0&&vn(a,q),z[U+V+4]=a.x,z[U+V+5]=a.y,z[U+V+6]=a.z,z[U+V+7]=0),S===!0&&(a.fromBufferAttribute(N,ee),N.normalized===!0&&vn(a,N),z[U+V+8]=a.x,z[U+V+9]=a.y,z[U+V+10]=a.z,z[U+V+11]=N.itemSize===4?a.w:1)}}d={count:m,texture:C,size:new Oe(k,O)},s.set(u,d),u.addEventListener("dispose",b)}let v=0;for(let b=0;b<f.length;b++)v+=f[b];const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(o,"morphTargetBaseInfluence",x),h.getUniforms().setValue(o,"morphTargetInfluences",f),h.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}else{const g=f===void 0?0:f.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let y=0;y<g;y++)m[y]=[y,0];i[u.id]=m}for(let y=0;y<g;y++){const M=m[y];M[0]=y,M[1]=f[y]}m.sort(bd);for(let y=0;y<8;y++)y<g&&m[y][1]?(n[y][0]=m[y][0],n[y][1]=m[y][1]):(n[y][0]=Number.MAX_SAFE_INTEGER,n[y][1]=0);n.sort(_d);const d=u.morphAttributes.position,v=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const M=n[y],S=M[0],L=M[1];S!==Number.MAX_SAFE_INTEGER&&L?(d&&u.getAttribute("morphTarget"+y)!==d[S]&&u.setAttribute("morphTarget"+y,d[S]),v&&u.getAttribute("morphNormal"+y)!==v[S]&&u.setAttribute("morphNormal"+y,v[S]),r[y]=L,x+=L):(d&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),v&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const b=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(o,"morphTargetBaseInfluence",b),h.getUniforms().setValue(o,"morphTargetInfluences",r)}}return{update:c}}function Md(o,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,p=e.get(c,u);return r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",n)===!1&&c.addEventListener("dispose",n),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),p}function a(){r=new WeakMap}function n(c){const l=c.target;l.removeEventListener("dispose",n),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const jo=new It,qo=new No,Xo=new uc,Yo=new Ho,Sa=[],Ea=[],Ta=new Float32Array(16),Aa=new Float32Array(9),Ca=new Float32Array(4);function Mr(o,e,t){const i=o[0];if(i<=0||i>0)return o;const r=e*t;let s=Sa[r];if(s===void 0&&(s=new Float32Array(r),Sa[r]=s),e!==0){i.toArray(s,0);for(let a=1,n=0;a!==e;++a)n+=t,o[a].toArray(s,n)}return s}function Mt(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function St(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Bs(o,e){let t=Ea[e];t===void 0&&(t=new Int32Array(e),Ea[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function Sd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Ed(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2fv(this.addr,e),St(t,e)}}function Td(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;o.uniform3fv(this.addr,e),St(t,e)}}function Ad(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4fv(this.addr,e),St(t,e)}}function Cd(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Ca.set(i),o.uniformMatrix2fv(this.addr,!1,Ca),St(t,i)}}function Ld(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Aa.set(i),o.uniformMatrix3fv(this.addr,!1,Aa),St(t,i)}}function Rd(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Ta.set(i),o.uniformMatrix4fv(this.addr,!1,Ta),St(t,i)}}function Pd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Dd(o,e){const t=this.cache;Mt(t,e)||(o.uniform2iv(this.addr,e),St(t,e))}function Id(o,e){const t=this.cache;Mt(t,e)||(o.uniform3iv(this.addr,e),St(t,e))}function Fd(o,e){const t=this.cache;Mt(t,e)||(o.uniform4iv(this.addr,e),St(t,e))}function zd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function kd(o,e){const t=this.cache;Mt(t,e)||(o.uniform2uiv(this.addr,e),St(t,e))}function Nd(o,e){const t=this.cache;Mt(t,e)||(o.uniform3uiv(this.addr,e),St(t,e))}function Bd(o,e){const t=this.cache;Mt(t,e)||(o.uniform4uiv(this.addr,e),St(t,e))}function Od(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||jo,r)}function Gd(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xo,r)}function Wd(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yo,r)}function Ud(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qo,r)}function Hd(o){switch(o){case 5126:return Sd;case 35664:return Ed;case 35665:return Td;case 35666:return Ad;case 35674:return Cd;case 35675:return Ld;case 35676:return Rd;case 5124:case 35670:return Pd;case 35667:case 35671:return Dd;case 35668:case 35672:return Id;case 35669:case 35673:return Fd;case 5125:return zd;case 36294:return kd;case 36295:return Nd;case 36296:return Bd;case 35678:case 36198:case 36298:case 36306:case 35682:return Od;case 35679:case 36299:case 36307:return Gd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return Ud}}function Vd(o,e){o.uniform1fv(this.addr,e)}function jd(o,e){const t=Mr(e,this.size,2);o.uniform2fv(this.addr,t)}function qd(o,e){const t=Mr(e,this.size,3);o.uniform3fv(this.addr,t)}function Xd(o,e){const t=Mr(e,this.size,4);o.uniform4fv(this.addr,t)}function Yd(o,e){const t=Mr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function $d(o,e){const t=Mr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Zd(o,e){const t=Mr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Jd(o,e){o.uniform1iv(this.addr,e)}function Kd(o,e){o.uniform2iv(this.addr,e)}function Qd(o,e){o.uniform3iv(this.addr,e)}function ep(o,e){o.uniform4iv(this.addr,e)}function tp(o,e){o.uniform1uiv(this.addr,e)}function ip(o,e){o.uniform2uiv(this.addr,e)}function rp(o,e){o.uniform3uiv(this.addr,e)}function sp(o,e){o.uniform4uiv(this.addr,e)}function np(o,e,t){const i=e.length,r=Bs(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||jo,r[s])}function ap(o,e,t){const i=e.length,r=Bs(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Xo,r[s])}function op(o,e,t){const i=e.length,r=Bs(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Yo,r[s])}function lp(o,e,t){const i=e.length,r=Bs(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||qo,r[s])}function cp(o){switch(o){case 5126:return Vd;case 35664:return jd;case 35665:return qd;case 35666:return Xd;case 35674:return Yd;case 35675:return $d;case 35676:return Zd;case 5124:case 35670:return Jd;case 35667:case 35671:return Kd;case 35668:case 35672:return Qd;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return ip;case 36295:return rp;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}class up{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Hd(t.type)}}class hp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=cp(t.type)}}class dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const n=r[s];n.setValue(e,t[n.id],i)}}}const xn=/(\w+)(\])?(\[|\.)?/g;function La(o,e){o.seq.push(e),o.map[e.id]=e}function pp(o,e,t){const i=o.name,r=i.length;for(xn.lastIndex=0;;){const s=xn.exec(i),a=xn.lastIndex;let n=s[1];const c=s[2]==="]",l=s[3];if(c&&(n=n|0),l===void 0||l==="["&&a+2===r){La(t,l===void 0?new up(n,o,e):new hp(n,o,e));break}else{let u=t.map[n];u===void 0&&(u=new dp(n),La(t,u)),t=u}}}class Ts{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);pp(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const n=t[s],c=i[n.id];c.needsUpdate!==!1&&n.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ra(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}let mp=0;function fp(o,e){const t=o.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const n=a+1;i.push(`${n===e?">":" "} ${n}: ${t[a]}`)}return i.join(`
`)}function gp(o){switch(o){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Pa(o,e,t){const i=o.getShaderParameter(e,35713),r=o.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fp(o.getShaderSource(e),a)}else return r}function vp(o,e){const t=gp(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xp(o,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yp(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function _p(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bp(o,e){const t={},i=o.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=o.getActiveAttrib(e,r),a=s.name;let n=1;s.type===35674&&(n=2),s.type===35675&&(n=3),s.type===35676&&(n=4),t[a]={type:s.type,location:o.getAttribLocation(e,a),locationSize:n}}return t}function kr(o){return o!==""}function Da(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ia(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bn(o){return o.replace(wp,Mp)}function Mp(o,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bn(t)}const Sp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fa(o){return o.replace(Ep,$o).replace(Sp,Tp)}function Tp(o,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),$o(o,e,t,i)}function $o(o,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function za(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ap(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Cp(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lp(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Rp(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Pp(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Dp(o,e,t,i){const r=o.getContext(),s=t.defines;let a=t.vertexShader,n=t.fragmentShader;const c=Ap(t),l=Cp(t),u=Lp(t),p=Rp(t),h=Pp(t),f=t.isWebGL2?"":yp(t),g=_p(s),m=r.createProgram();let d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(kr).join(`
`),d.length>0&&(d+=`
`),v=[f,g].filter(kr).join(`
`),v.length>0&&(v+=`
`)):(d=[za(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),v=[f,za(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?De.tonemapping_pars_fragment:"",t.toneMapping!==0?xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,vp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=Bn(a),a=Da(a,t),a=Ia(a,t),n=Bn(n),n=Da(n,t),n=Ia(n,t),a=Fa(a),n=Fa(n),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=x+d+a,y=x+v+n,M=Ra(r,35633,b),S=Ra(r,35632,y);if(r.attachShader(m,M),r.attachShader(m,S),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),o.debug.checkShaderErrors){const E=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(M).trim(),k=r.getShaderInfoLog(S).trim();let O=!0,z=!0;if(r.getProgramParameter(m,35714)===!1){O=!1;const C=Pa(r,M,"vertex"),F=Pa(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+C+`
`+F)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(D===""||k==="")&&(z=!1);z&&(this.diagnostics={runnable:O,programLog:E,vertexShader:{log:D,prefix:d},fragmentShader:{log:k,prefix:v}})}r.deleteShader(M),r.deleteShader(S);let L;this.getUniforms=function(){return L===void 0&&(L=new Ts(r,m)),L};let _;return this.getAttributes=function(){return _===void 0&&(_=bp(r,m)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=mp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}let Ip=0;class Fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new zp(e);t.set(e,i)}return t.get(e)}}class zp{constructor(e){this.id=Ip++,this.code=e,this.usedTimes=0}}function kp(o,e,t,i,r,s,a){const n=new Bo,c=new Fp,l=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,E,D,k,O){const z=k.fog,C=O.geometry,F=_.isMeshStandardMaterial?k.environment:null,I=(_.isMeshStandardMaterial?t:e).get(_.envMap||F),j=I&&I.mapping===306?I.image.height:null,q=g[_.type];_.precision!==null&&(f=r.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const N=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,U=N!==void 0?N.length:0;let ee=0;C.morphAttributes.position!==void 0&&(ee=1),C.morphAttributes.normal!==void 0&&(ee=2),C.morphAttributes.color!==void 0&&(ee=3);let V,te,de,Re;if(q){const ne=si[q];V=ne.vertexShader,te=ne.fragmentShader}else V=_.vertexShader,te=_.fragmentShader,c.update(_),de=c.getVertexShaderID(_),Re=c.getFragmentShaderID(_);const J=o.getRenderTarget(),Q=_.alphaTest>0,ie=_.clearcoat>0,ye=_.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:_.type,vertexShader:V,fragmentShader:te,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:Re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:h,outputEncoding:J===null?o.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:3e3,map:!!_.map,matcap:!!_.matcap,envMap:!!I,envMapMode:I&&I.mapping,envMapCubeUVHeight:j,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===1,tangentSpaceNormalMap:_.normalMapType===0,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===3001,clearcoat:ie,clearcoatMap:ie&&!!_.clearcoatMap,clearcoatRoughnessMap:ie&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ie&&!!_.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!_.iridescenceMap,iridescenceThicknessMap:ye&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===1,alphaMap:!!_.alphaMap,alphaTest:Q,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!C.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!z,useFog:_.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:p,skinning:O.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:_.toneMapped?o.toneMapping:0,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===2,flipSided:_.side===1,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)E.push(D),E.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(v(E,_),x(E,_),E.push(o.outputEncoding)),E.push(_.customProgramCacheKey),E.join()}function v(_,E){_.push(E.precision),_.push(E.outputEncoding),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.combine),_.push(E.vertexUvs),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function x(_,E){n.disableAll(),E.isWebGL2&&n.enable(0),E.supportsVertexTextures&&n.enable(1),E.instancing&&n.enable(2),E.instancingColor&&n.enable(3),E.map&&n.enable(4),E.matcap&&n.enable(5),E.envMap&&n.enable(6),E.lightMap&&n.enable(7),E.aoMap&&n.enable(8),E.emissiveMap&&n.enable(9),E.bumpMap&&n.enable(10),E.normalMap&&n.enable(11),E.objectSpaceNormalMap&&n.enable(12),E.tangentSpaceNormalMap&&n.enable(13),E.clearcoat&&n.enable(14),E.clearcoatMap&&n.enable(15),E.clearcoatRoughnessMap&&n.enable(16),E.clearcoatNormalMap&&n.enable(17),E.iridescence&&n.enable(18),E.iridescenceMap&&n.enable(19),E.iridescenceThicknessMap&&n.enable(20),E.displacementMap&&n.enable(21),E.specularMap&&n.enable(22),E.roughnessMap&&n.enable(23),E.metalnessMap&&n.enable(24),E.gradientMap&&n.enable(25),E.alphaMap&&n.enable(26),E.alphaTest&&n.enable(27),E.vertexColors&&n.enable(28),E.vertexAlphas&&n.enable(29),E.vertexUvs&&n.enable(30),E.vertexTangents&&n.enable(31),E.uvsVertexOnly&&n.enable(32),E.fog&&n.enable(33),_.push(n.mask),n.disableAll(),E.useFog&&n.enable(0),E.flatShading&&n.enable(1),E.logarithmicDepthBuffer&&n.enable(2),E.skinning&&n.enable(3),E.morphTargets&&n.enable(4),E.morphNormals&&n.enable(5),E.morphColors&&n.enable(6),E.premultipliedAlpha&&n.enable(7),E.shadowMapEnabled&&n.enable(8),E.physicallyCorrectLights&&n.enable(9),E.doubleSided&&n.enable(10),E.flipSided&&n.enable(11),E.useDepthPacking&&n.enable(12),E.dithering&&n.enable(13),E.specularIntensityMap&&n.enable(14),E.specularColorMap&&n.enable(15),E.transmission&&n.enable(16),E.transmissionMap&&n.enable(17),E.thicknessMap&&n.enable(18),E.sheen&&n.enable(19),E.sheenColorMap&&n.enable(20),E.sheenRoughnessMap&&n.enable(21),E.decodeVideoTexture&&n.enable(22),E.opaque&&n.enable(23),_.push(n.mask)}function b(_){const E=g[_.type];let D;if(E){const k=si[E];D=Mc.clone(k.uniforms)}else D=_.uniforms;return D}function y(_,E){let D;for(let k=0,O=l.length;k<O;k++){const z=l[k];if(z.cacheKey===E){D=z,++D.usedTimes;break}}return D===void 0&&(D=new Dp(o,E,_,s),l.push(D)),D}function M(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),_.destroy()}}function S(_){c.remove(_)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:L}}function Np(){let o=new WeakMap;function e(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function t(s){o.delete(s)}function i(s,a,n){o.get(s)[a]=n}function r(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Bp(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ka(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Na(){const o=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(p,h,f,g,m,d){let v=o[e];return v===void 0?(v={id:p.id,object:p,geometry:h,material:f,groupOrder:g,renderOrder:p.renderOrder,z:m,group:d},o[e]=v):(v.id=p.id,v.object=p,v.geometry=h,v.material=f,v.groupOrder=g,v.renderOrder=p.renderOrder,v.z=m,v.group=d),e++,v}function n(p,h,f,g,m,d){const v=a(p,h,f,g,m,d);f.transmission>0?i.push(v):f.transparent===!0?r.push(v):t.push(v)}function c(p,h,f,g,m,d){const v=a(p,h,f,g,m,d);f.transmission>0?i.unshift(v):f.transparent===!0?r.unshift(v):t.unshift(v)}function l(p,h){t.length>1&&t.sort(p||Bp),i.length>1&&i.sort(h||ka),r.length>1&&r.sort(h||ka)}function u(){for(let p=e,h=o.length;p<h;p++){const f=o[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:n,unshift:c,finish:u,sort:l}}function Op(){let o=new WeakMap;function e(i,r){let s;return o.has(i)===!1?(s=new Na,o.set(i,[s])):r>=o.get(i).length?(s=new Na,o.get(i).push(s)):s=o.get(i)[r],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function Gp(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Be};break;case"SpotLight":t={position:new G,direction:new G,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new G,halfWidth:new G,halfHeight:new G};break}return o[e.id]=t,t}}}function Wp(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Up=0;function Hp(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function Vp(o,e){const t=new Gp,i=Wp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,a=new ut,n=new ut;function c(u,p){let h=0,f=0,g=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let m=0,d=0,v=0,x=0,b=0,y=0,M=0,S=0;u.sort(Hp);const L=p!==!0?Math.PI:1;for(let E=0,D=u.length;E<D;E++){const k=u[E],O=k.color,z=k.intensity,C=k.distance,F=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=O.r*z*L,f+=O.g*z*L,g+=O.b*z*L;else if(k.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(k.sh.coefficients[I],z);else if(k.isDirectionalLight){const I=t.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity*L),k.castShadow){const j=k.shadow,q=i.get(k);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[m]=q,r.directionalShadowMap[m]=F,r.directionalShadowMatrix[m]=k.shadow.matrix,y++}r.directional[m]=I,m++}else if(k.isSpotLight){const I=t.get(k);if(I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(O).multiplyScalar(z*L),I.distance=C,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,k.castShadow){const j=k.shadow,q=i.get(k);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[v]=q,r.spotShadowMap[v]=F,r.spotShadowMatrix[v]=k.shadow.matrix,S++}r.spot[v]=I,v++}else if(k.isRectAreaLight){const I=t.get(k);I.color.copy(O).multiplyScalar(z),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=I,x++}else if(k.isPointLight){const I=t.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity*L),I.distance=k.distance,I.decay=k.decay,k.castShadow){const j=k.shadow,q=i.get(k);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[d]=q,r.pointShadowMap[d]=F,r.pointShadowMatrix[d]=k.shadow.matrix,M++}r.point[d]=I,d++}else if(k.isHemisphereLight){const I=t.get(k);I.skyColor.copy(k.color).multiplyScalar(z*L),I.groundColor.copy(k.groundColor).multiplyScalar(z*L),r.hemi[b]=I,b++}}x>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=g;const _=r.hash;(_.directionalLength!==m||_.pointLength!==d||_.spotLength!==v||_.rectAreaLength!==x||_.hemiLength!==b||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==S)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=x,r.point.length=d,r.hemi.length=b,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=S,_.directionalLength=m,_.pointLength=d,_.spotLength=v,_.rectAreaLength=x,_.hemiLength=b,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=S,r.version=Up++)}function l(u,p){let h=0,f=0,g=0,m=0,d=0;const v=p.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const y=u[x];if(y.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),h++}else if(y.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),n.identity(),a.copy(y.matrixWorld),a.premultiply(v),n.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(n),M.halfHeight.applyMatrix4(n),m++}else if(y.isPointLight){const M=r.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),f++}else if(y.isHemisphereLight){const M=r.hemi[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(v),d++}}}return{setup:c,setupView:l,state:r}}function Ba(o,e){const t=new Vp(o,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(u){i.push(u)}function n(u){r.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:n}}function jp(o,e){let t=new WeakMap;function i(s,a=0){let n;return t.has(s)===!1?(n=new Ba(o,e),t.set(s,[n])):a>=t.get(s).length?(n=new Ba(o,e),t.get(s).push(n)):n=t.get(s)[a],n}function r(){t=new WeakMap}return{get:i,dispose:r}}class qp extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xp extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$p=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zp(o,e,t){let i=new Vn;const r=new Oe,s=new Oe,a=new ct,n=new qp({depthPacking:3201}),c=new Xp,l={},u=t.maxTextureSize,p={0:1,1:0,2:2},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Yp,fragmentShader:$p}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ni(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(y,M,S){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const L=o.getRenderTarget(),_=o.getActiveCubeFace(),E=o.getActiveMipmapLevel(),D=o.state;D.setBlending(0),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let k=0,O=y.length;k<O;k++){const z=y[k],C=z.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const F=C.getFrameExtents();if(r.multiply(F),s.copy(C.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,C.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,C.mapSize.y=s.y)),C.map===null){const j=this.type!==3?{minFilter:1003,magFilter:1003}:{};C.map=new Zi(r.x,r.y,j),C.map.texture.name=z.name+".shadowMap",C.camera.updateProjectionMatrix()}o.setRenderTarget(C.map),o.clear();const I=C.getViewportCount();for(let j=0;j<I;j++){const q=C.getViewport(j);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),D.viewport(a),C.updateMatrices(z,j),i=C.getFrustum(),b(M,S,C.camera,z,this.type)}C.isPointLightShadow!==!0&&this.type===3&&v(C,S),C.needsUpdate=!1}d.needsUpdate=!1,o.setRenderTarget(L,_,E)};function v(y,M){const S=e.update(m);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Zi(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(M,null,S,h,m,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(M,null,S,f,m,null)}function x(y,M,S,L,_,E){let D=null;const k=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(k!==void 0?D=k:D=S.isPointLight===!0?c:n,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const O=D.uuid,z=M.uuid;let C=l[O];C===void 0&&(C={},l[O]=C);let F=C[z];F===void 0&&(F=D.clone(),C[z]=F),D=F}return D.visible=M.visible,D.wireframe=M.wireframe,E===3?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:p[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(S.matrixWorld),D.nearDistance=L,D.farDistance=_),D}function b(y,M,S,L,_){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===3)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);const D=e.update(y),k=y.material;if(Array.isArray(k)){const O=D.groups;for(let z=0,C=O.length;z<C;z++){const F=O[z],I=k[F.materialIndex];if(I&&I.visible){const j=x(y,I,L,S.near,S.far,_);o.renderBufferDirect(S,null,D,j,y,F)}}}else if(k.visible){const O=x(y,k,L,S.near,S.far,_);o.renderBufferDirect(S,null,D,O,y,null)}}const E=y.children;for(let D=0,k=E.length;D<k;D++)b(E[D],M,S,L,_)}}function Jp(o,e,t){const i=t.isWebGL2;function r(){let B=!1;const he=new ct;let Y=null;const me=new ct(0,0,0,0);return{setMask:function(oe){Y!==oe&&!B&&(o.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){B=oe},setClear:function(oe,qe,rt,Qe,Kt){Kt===!0&&(oe*=Qe,qe*=Qe,rt*=Qe),he.set(oe,qe,rt,Qe),me.equals(he)===!1&&(o.clearColor(oe,qe,rt,Qe),me.copy(he))},reset:function(){B=!1,Y=null,me.set(-1,0,0,0)}}}function s(){let B=!1,he=null,Y=null,me=null;return{setTest:function(oe){oe?Q(2929):ie(2929)},setMask:function(oe){he!==oe&&!B&&(o.depthMask(oe),he=oe)},setFunc:function(oe){if(Y!==oe){if(oe)switch(oe){case 0:o.depthFunc(512);break;case 1:o.depthFunc(519);break;case 2:o.depthFunc(513);break;case 3:o.depthFunc(515);break;case 4:o.depthFunc(514);break;case 5:o.depthFunc(518);break;case 6:o.depthFunc(516);break;case 7:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);Y=oe}},setLocked:function(oe){B=oe},setClear:function(oe){me!==oe&&(o.clearDepth(oe),me=oe)},reset:function(){B=!1,he=null,Y=null,me=null}}}function a(){let B=!1,he=null,Y=null,me=null,oe=null,qe=null,rt=null,Qe=null,Kt=null;return{setTest:function(Ze){B||(Ze?Q(2960):ie(2960))},setMask:function(Ze){he!==Ze&&!B&&(o.stencilMask(Ze),he=Ze)},setFunc:function(Ze,Vt,Et){(Y!==Ze||me!==Vt||oe!==Et)&&(o.stencilFunc(Ze,Vt,Et),Y=Ze,me=Vt,oe=Et)},setOp:function(Ze,Vt,Et){(qe!==Ze||rt!==Vt||Qe!==Et)&&(o.stencilOp(Ze,Vt,Et),qe=Ze,rt=Vt,Qe=Et)},setLocked:function(Ze){B=Ze},setClear:function(Ze){Kt!==Ze&&(o.clearStencil(Ze),Kt=Ze)},reset:function(){B=!1,he=null,Y=null,me=null,oe=null,qe=null,rt=null,Qe=null,Kt=null}}}const n=new r,c=new s,l=new a,u=new WeakMap,p=new WeakMap;let h={},f={},g=new WeakMap,m=[],d=null,v=!1,x=null,b=null,y=null,M=null,S=null,L=null,_=null,E=!1,D=null,k=null,O=null,z=null,C=null;const F=o.getParameter(35661);let I=!1,j=0;const q=o.getParameter(7938);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=j>=2);let N=null,U={};const ee=o.getParameter(3088),V=o.getParameter(2978),te=new ct().fromArray(ee),de=new ct().fromArray(V);function Re(B,he,Y){const me=new Uint8Array(4),oe=o.createTexture();o.bindTexture(B,oe),o.texParameteri(B,10241,9728),o.texParameteri(B,10240,9728);for(let qe=0;qe<Y;qe++)o.texImage2D(he+qe,0,6408,1,1,0,6408,5121,me);return oe}const J={};J[3553]=Re(3553,3553,1),J[34067]=Re(34067,34069,6),n.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Q(2929),c.setFunc(3),ht(!1),it(1),Q(2884),tt(0);function Q(B){h[B]!==!0&&(o.enable(B),h[B]=!0)}function ie(B){h[B]!==!1&&(o.disable(B),h[B]=!1)}function ye(B,he){return f[B]!==he?(o.bindFramebuffer(B,he),f[B]=he,i&&(B===36009&&(f[36160]=he),B===36160&&(f[36009]=he)),!0):!1}function ne(B,he){let Y=m,me=!1;if(B)if(Y=g.get(he),Y===void 0&&(Y=[],g.set(he,Y)),B.isWebGLMultipleRenderTargets){const oe=B.texture;if(Y.length!==oe.length||Y[0]!==36064){for(let qe=0,rt=oe.length;qe<rt;qe++)Y[qe]=36064+qe;Y.length=oe.length,me=!0}}else Y[0]!==36064&&(Y[0]=36064,me=!0);else Y[0]!==1029&&(Y[0]=1029,me=!0);me&&(t.isWebGL2?o.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Ve(B){return d!==B?(o.useProgram(B),d=B,!0):!1}const Se={100:32774,101:32778,102:32779};if(i)Se[103]=32775,Se[104]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(Se[103]=B.MIN_EXT,Se[104]=B.MAX_EXT)}const we={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function tt(B,he,Y,me,oe,qe,rt,Qe){if(B===0){v===!0&&(ie(3042),v=!1);return}if(v===!1&&(Q(3042),v=!0),B!==5){if(B!==x||Qe!==E){if((b!==100||S!==100)&&(o.blendEquation(32774),b=100,S=100),Qe)switch(B){case 1:o.blendFuncSeparate(1,771,1,771);break;case 2:o.blendFunc(1,1);break;case 3:o.blendFuncSeparate(0,769,0,1);break;case 4:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case 1:o.blendFuncSeparate(770,771,1,771);break;case 2:o.blendFunc(770,1);break;case 3:o.blendFuncSeparate(0,769,0,1);break;case 4:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,M=null,L=null,_=null,x=B,E=Qe}return}oe=oe||he,qe=qe||Y,rt=rt||me,(he!==b||oe!==S)&&(o.blendEquationSeparate(Se[he],Se[oe]),b=he,S=oe),(Y!==y||me!==M||qe!==L||rt!==_)&&(o.blendFuncSeparate(we[Y],we[me],we[qe],we[rt]),y=Y,M=me,L=qe,_=rt),x=B,E=null}function _t(B,he){B.side===2?ie(2884):Q(2884);let Y=B.side===1;he&&(Y=!Y),ht(Y),B.blending===1&&B.transparent===!1?tt(0):tt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),n.setMask(B.colorWrite);const me=B.stencilWrite;l.setTest(me),me&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ze(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Q(32926):ie(32926)}function ht(B){D!==B&&(B?o.frontFace(2304):o.frontFace(2305),D=B)}function it(B){B!==0?(Q(2884),B!==k&&(B===1?o.cullFace(1029):B===2?o.cullFace(1028):o.cullFace(1032))):ie(2884),k=B}function Ye(B){B!==O&&(I&&o.lineWidth(B),O=B)}function ze(B,he,Y){B?(Q(32823),(z!==he||C!==Y)&&(o.polygonOffset(he,Y),z=he,C=Y)):ie(32823)}function zt(B){B?Q(3089):ie(3089)}function gt(B){B===void 0&&(B=33984+F-1),N!==B&&(o.activeTexture(B),N=B)}function R(B,he){N===null&&gt();let Y=U[N];Y===void 0&&(Y={type:void 0,texture:void 0},U[N]=Y),(Y.type!==B||Y.texture!==he)&&(o.bindTexture(B,he||J[B]),Y.type=B,Y.texture=he)}function T(){const B=U[N];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{o.texSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{o.texSubImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{o.texStorage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{o.texStorage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{o.texImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{o.texImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(B){te.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),te.copy(B))}function ve(B){de.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function Ae(B,he){let Y=p.get(he);Y===void 0&&(Y=new WeakMap,p.set(he,Y));let me=Y.get(B);me===void 0&&(me=o.getUniformBlockIndex(he,B.name),Y.set(B,me))}function Fe(B,he){const Y=p.get(he).get(B);u.get(B)!==Y&&(o.uniformBlockBinding(he,Y,B.__bindingPointIndex),u.set(B,Y))}function Ke(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},N=null,U={},f={},g=new WeakMap,m=[],d=null,v=!1,x=null,b=null,y=null,M=null,S=null,L=null,_=null,E=!1,D=null,k=null,O=null,z=null,C=null,te.set(0,0,o.canvas.width,o.canvas.height),de.set(0,0,o.canvas.width,o.canvas.height),n.reset(),c.reset(),l.reset()}return{buffers:{color:n,depth:c,stencil:l},enable:Q,disable:ie,bindFramebuffer:ye,drawBuffers:ne,useProgram:Ve,setBlending:tt,setMaterial:_t,setFlipSided:ht,setCullFace:it,setLineWidth:Ye,setPolygonOffset:ze,setScissorTest:zt,activeTexture:gt,bindTexture:R,unbindTexture:T,compressedTexImage2D:Z,texImage2D:be,texImage3D:ge,updateUBOMapping:Ae,uniformBlockBinding:Fe,texStorage2D:Te,texStorage3D:$,texSubImage2D:re,texSubImage3D:ae,compressedTexSubImage2D:ue,scissor:_e,viewport:ve,reset:Ke}}function Kp(o,e,t,i,r,s,a){const n=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,T){return v?new OffscreenCanvas(R,T):Ps("canvas")}function b(R,T,Z,re){let ae=1;if((R.width>re||R.height>re)&&(ae=re/Math.max(R.width,R.height)),ae<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ue=T?Nn:Math.floor,Te=ue(ae*R.width),$=ue(ae*R.height);m===void 0&&(m=x(Te,$));const be=Z?x(Te,$):m;return be.width=Te,be.height=$,be.getContext("2d").drawImage(R,0,0,Te,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+$+")."),be}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return na(R.width)&&na(R.height)}function M(R){return n?!1:R.wrapS!==1001||R.wrapT!==1001||R.minFilter!==1003&&R.minFilter!==1006}function S(R,T){return R.generateMipmaps&&T&&R.minFilter!==1003&&R.minFilter!==1006}function L(R){o.generateMipmap(R)}function _(R,T,Z,re,ae=!1){if(n===!1)return T;if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue=T;return T===6403&&(Z===5126&&(ue=33326),Z===5131&&(ue=33325),Z===5121&&(ue=33321)),T===33319&&(Z===5126&&(ue=33328),Z===5131&&(ue=33327),Z===5121&&(ue=33323)),T===6408&&(Z===5126&&(ue=34836),Z===5131&&(ue=34842),Z===5121&&(ue=re===3001&&ae===!1?35907:32856),Z===32819&&(ue=32854),Z===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function E(R,T,Z){return S(R,Z)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function D(R){return R===1003||R===1004||R===1005?9728:9729}function k(R){const T=R.target;T.removeEventListener("dispose",k),z(T),T.isVideoTexture&&g.delete(T)}function O(R){const T=R.target;T.removeEventListener("dispose",O),F(T)}function z(R){const T=i.get(R);if(T.__webglInit===void 0)return;const Z=R.source,re=d.get(Z);if(re){const ae=re[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&C(R),Object.keys(re).length===0&&d.delete(Z)}i.remove(R)}function C(R){const T=i.get(R);o.deleteTexture(T.__webglTexture);const Z=R.source,re=d.get(Z);delete re[T.__cacheKey],a.memory.textures--}function F(R){const T=R.texture,Z=i.get(R),re=i.get(T);if(re.__webglTexture!==void 0&&(o.deleteTexture(re.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)o.deleteFramebuffer(Z.__webglFramebuffer[ae]),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer[ae]);else{if(o.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ae=0;ae<Z.__webglColorRenderbuffer.length;ae++)Z.__webglColorRenderbuffer[ae]&&o.deleteRenderbuffer(Z.__webglColorRenderbuffer[ae]);Z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ae=0,ue=T.length;ae<ue;ae++){const Te=i.get(T[ae]);Te.__webglTexture&&(o.deleteTexture(Te.__webglTexture),a.memory.textures--),i.remove(T[ae])}i.remove(T),i.remove(R)}let I=0;function j(){I=0}function q(){const R=I;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),I+=1,R}function N(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.encoding),T.join()}function U(R,T){const Z=i.get(R);if(R.isVideoTexture&&zt(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Z,R,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,Z.__webglTexture)}function ee(R,T){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){ie(Z,R,T);return}t.activeTexture(33984+T),t.bindTexture(35866,Z.__webglTexture)}function V(R,T){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){ie(Z,R,T);return}t.activeTexture(33984+T),t.bindTexture(32879,Z.__webglTexture)}function te(R,T){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){ye(Z,R,T);return}t.activeTexture(33984+T),t.bindTexture(34067,Z.__webglTexture)}const de={1e3:10497,1001:33071,1002:33648},Re={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function J(R,T,Z){if(Z?(o.texParameteri(R,10242,de[T.wrapS]),o.texParameteri(R,10243,de[T.wrapT]),(R===32879||R===35866)&&o.texParameteri(R,32882,de[T.wrapR]),o.texParameteri(R,10240,Re[T.magFilter]),o.texParameteri(R,10241,Re[T.minFilter])):(o.texParameteri(R,10242,33071),o.texParameteri(R,10243,33071),(R===32879||R===35866)&&o.texParameteri(R,32882,33071),(T.wrapS!==1001||T.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(R,10240,D(T.magFilter)),o.texParameteri(R,10241,D(T.minFilter)),T.minFilter!==1003&&T.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(T.type===1015&&e.has("OES_texture_float_linear")===!1||n===!1&&T.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(o.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function Q(R,T){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",k));const re=T.source;let ae=d.get(re);ae===void 0&&(ae={},d.set(re,ae));const ue=N(T);if(ue!==R.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ae[ue].usedTimes++;const Te=ae[R.__cacheKey];Te!==void 0&&(ae[R.__cacheKey].usedTimes--,Te.usedTimes===0&&C(T)),R.__cacheKey=ue,R.__webglTexture=ae[ue].texture}return Z}function ie(R,T,Z){let re=3553;T.isDataArrayTexture&&(re=35866),T.isData3DTexture&&(re=32879);const ae=Q(R,T),ue=T.source;if(t.activeTexture(33984+Z),t.bindTexture(re,R.__webglTexture),ue.version!==ue.__currentVersion||ae===!0){o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const Te=M(T)&&y(T.image)===!1;let $=b(T.image,Te,!1,u);$=gt(T,$);const be=y($)||n,ge=s.convert(T.format,T.encoding);let _e=s.convert(T.type),ve=_(T.internalFormat,ge,_e,T.encoding,T.isVideoTexture);J(re,T,be);let Ae;const Fe=T.mipmaps,Ke=n&&T.isVideoTexture!==!0,B=ue.__currentVersion===void 0||ae===!0,he=E(T,$,be);if(T.isDepthTexture)ve=6402,n?T.type===1015?ve=36012:T.type===1014?ve=33190:T.type===1020?ve=35056:ve=33189:T.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===1026&&ve===6402&&T.type!==1012&&T.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=1014,_e=s.convert(T.type)),T.format===1027&&ve===6402&&(ve=34041,T.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=1020,_e=s.convert(T.type))),B&&(Ke?t.texStorage2D(3553,1,ve,$.width,$.height):t.texImage2D(3553,0,ve,$.width,$.height,0,ge,_e,null));else if(T.isDataTexture)if(Fe.length>0&&be){Ke&&B&&t.texStorage2D(3553,he,ve,Fe[0].width,Fe[0].height);for(let Y=0,me=Fe.length;Y<me;Y++)Ae=Fe[Y],Ke?t.texSubImage2D(3553,Y,0,0,Ae.width,Ae.height,ge,_e,Ae.data):t.texImage2D(3553,Y,ve,Ae.width,Ae.height,0,ge,_e,Ae.data);T.generateMipmaps=!1}else Ke?(B&&t.texStorage2D(3553,he,ve,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,ge,_e,$.data)):t.texImage2D(3553,0,ve,$.width,$.height,0,ge,_e,$.data);else if(T.isCompressedTexture){Ke&&B&&t.texStorage2D(3553,he,ve,Fe[0].width,Fe[0].height);for(let Y=0,me=Fe.length;Y<me;Y++)Ae=Fe[Y],T.format!==1023?ge!==null?Ke?t.compressedTexSubImage2D(3553,Y,0,0,Ae.width,Ae.height,ge,Ae.data):t.compressedTexImage2D(3553,Y,ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(3553,Y,0,0,Ae.width,Ae.height,ge,_e,Ae.data):t.texImage2D(3553,Y,ve,Ae.width,Ae.height,0,ge,_e,Ae.data)}else if(T.isDataArrayTexture)Ke?(B&&t.texStorage3D(35866,he,ve,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,ge,_e,$.data)):t.texImage3D(35866,0,ve,$.width,$.height,$.depth,0,ge,_e,$.data);else if(T.isData3DTexture)Ke?(B&&t.texStorage3D(32879,he,ve,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,ge,_e,$.data)):t.texImage3D(32879,0,ve,$.width,$.height,$.depth,0,ge,_e,$.data);else if(T.isFramebufferTexture){if(B)if(Ke)t.texStorage2D(3553,he,ve,$.width,$.height);else{let Y=$.width,me=$.height;for(let oe=0;oe<he;oe++)t.texImage2D(3553,oe,ve,Y,me,0,ge,_e,null),Y>>=1,me>>=1}}else if(Fe.length>0&&be){Ke&&B&&t.texStorage2D(3553,he,ve,Fe[0].width,Fe[0].height);for(let Y=0,me=Fe.length;Y<me;Y++)Ae=Fe[Y],Ke?t.texSubImage2D(3553,Y,0,0,ge,_e,Ae):t.texImage2D(3553,Y,ve,ge,_e,Ae);T.generateMipmaps=!1}else Ke?(B&&t.texStorage2D(3553,he,ve,$.width,$.height),t.texSubImage2D(3553,0,0,0,ge,_e,$)):t.texImage2D(3553,0,ve,ge,_e,$);S(T,be)&&L(re),ue.__currentVersion=ue.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ye(R,T,Z){if(T.image.length!==6)return;const re=Q(R,T),ae=T.source;if(t.activeTexture(33984+Z),t.bindTexture(34067,R.__webglTexture),ae.version!==ae.__currentVersion||re===!0){o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const ue=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,$=[];for(let Y=0;Y<6;Y++)!ue&&!Te?$[Y]=b(T.image[Y],!1,!0,l):$[Y]=Te?T.image[Y].image:T.image[Y],$[Y]=gt(T,$[Y]);const be=$[0],ge=y(be)||n,_e=s.convert(T.format,T.encoding),ve=s.convert(T.type),Ae=_(T.internalFormat,_e,ve,T.encoding),Fe=n&&T.isVideoTexture!==!0,Ke=ae.__currentVersion===void 0||re===!0;let B=E(T,be,ge);J(34067,T,ge);let he;if(ue){Fe&&Ke&&t.texStorage2D(34067,B,Ae,be.width,be.height);for(let Y=0;Y<6;Y++){he=$[Y].mipmaps;for(let me=0;me<he.length;me++){const oe=he[me];T.format!==1023?_e!==null?Fe?t.compressedTexSubImage2D(34069+Y,me,0,0,oe.width,oe.height,_e,oe.data):t.compressedTexImage2D(34069+Y,me,Ae,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+Y,me,0,0,oe.width,oe.height,_e,ve,oe.data):t.texImage2D(34069+Y,me,Ae,oe.width,oe.height,0,_e,ve,oe.data)}}}else{he=T.mipmaps,Fe&&Ke&&(he.length>0&&B++,t.texStorage2D(34067,B,Ae,$[0].width,$[0].height));for(let Y=0;Y<6;Y++)if(Te){Fe?t.texSubImage2D(34069+Y,0,0,0,$[Y].width,$[Y].height,_e,ve,$[Y].data):t.texImage2D(34069+Y,0,Ae,$[Y].width,$[Y].height,0,_e,ve,$[Y].data);for(let me=0;me<he.length;me++){const oe=he[me].image[Y].image;Fe?t.texSubImage2D(34069+Y,me+1,0,0,oe.width,oe.height,_e,ve,oe.data):t.texImage2D(34069+Y,me+1,Ae,oe.width,oe.height,0,_e,ve,oe.data)}}else{Fe?t.texSubImage2D(34069+Y,0,0,0,_e,ve,$[Y]):t.texImage2D(34069+Y,0,Ae,_e,ve,$[Y]);for(let me=0;me<he.length;me++){const oe=he[me];Fe?t.texSubImage2D(34069+Y,me+1,0,0,_e,ve,oe.image[Y]):t.texImage2D(34069+Y,me+1,Ae,_e,ve,oe.image[Y])}}}S(T,ge)&&L(34067),ae.__currentVersion=ae.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ne(R,T,Z,re,ae){const ue=s.convert(Z.format,Z.encoding),Te=s.convert(Z.type),$=_(Z.internalFormat,ue,Te,Z.encoding);i.get(T).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,$,T.width,T.height,T.depth,0,ue,Te,null):t.texImage2D(ae,0,$,T.width,T.height,0,ue,Te,null)),t.bindFramebuffer(36160,R),ze(T)?h.framebufferTexture2DMultisampleEXT(36160,re,ae,i.get(Z).__webglTexture,0,Ye(T)):o.framebufferTexture2D(36160,re,ae,i.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(R,T,Z){if(o.bindRenderbuffer(36161,R),T.depthBuffer&&!T.stencilBuffer){let re=33189;if(Z||ze(T)){const ae=T.depthTexture;ae&&ae.isDepthTexture&&(ae.type===1015?re=36012:ae.type===1014&&(re=33190));const ue=Ye(T);ze(T)?h.renderbufferStorageMultisampleEXT(36161,ue,re,T.width,T.height):o.renderbufferStorageMultisample(36161,ue,re,T.width,T.height)}else o.renderbufferStorage(36161,re,T.width,T.height);o.framebufferRenderbuffer(36160,36096,36161,R)}else if(T.depthBuffer&&T.stencilBuffer){const re=Ye(T);Z&&ze(T)===!1?o.renderbufferStorageMultisample(36161,re,35056,T.width,T.height):ze(T)?h.renderbufferStorageMultisampleEXT(36161,re,35056,T.width,T.height):o.renderbufferStorage(36161,34041,T.width,T.height),o.framebufferRenderbuffer(36160,33306,36161,R)}else{const re=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0;ae<re.length;ae++){const ue=re[ae],Te=s.convert(ue.format,ue.encoding),$=s.convert(ue.type),be=_(ue.internalFormat,Te,$,ue.encoding),ge=Ye(T);Z&&ze(T)===!1?o.renderbufferStorageMultisample(36161,ge,be,T.width,T.height):ze(T)?h.renderbufferStorageMultisampleEXT(36161,ge,be,T.width,T.height):o.renderbufferStorage(36161,be,T.width,T.height)}}o.bindRenderbuffer(36161,null)}function Se(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const Z=i.get(T.depthTexture).__webglTexture,re=Ye(T);if(T.depthTexture.format===1026)ze(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,re):o.framebufferTexture2D(36160,36096,3553,Z,0);else if(T.depthTexture.format===1027)ze(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,re):o.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function we(R){const T=i.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Se(T.__webglFramebuffer,R)}else if(Z){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]=o.createRenderbuffer(),Ve(T.__webglDepthbuffer[re],R,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Ve(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function tt(R,T,Z){const re=i.get(R);T!==void 0&&ne(re.__webglFramebuffer,R,R.texture,36064,3553),Z!==void 0&&we(R)}function _t(R){const T=R.texture,Z=i.get(R),re=i.get(T);R.addEventListener("dispose",O),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture()),re.__version=T.version,a.memory.textures++);const ae=R.isWebGLCubeRenderTarget===!0,ue=R.isWebGLMultipleRenderTargets===!0,Te=y(R)||n;if(ae){Z.__webglFramebuffer=[];for(let $=0;$<6;$++)Z.__webglFramebuffer[$]=o.createFramebuffer()}else{if(Z.__webglFramebuffer=o.createFramebuffer(),ue)if(r.drawBuffers){const $=R.texture;for(let be=0,ge=$.length;be<ge;be++){const _e=i.get($[be]);_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(n&&R.samples>0&&ze(R)===!1){const $=ue?T:[T];Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let be=0;be<$.length;be++){const ge=$[be];Z.__webglColorRenderbuffer[be]=o.createRenderbuffer(),o.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[be]);const _e=s.convert(ge.format,ge.encoding),ve=s.convert(ge.type),Ae=_(ge.internalFormat,_e,ve,ge.encoding),Fe=Ye(R);o.renderbufferStorageMultisample(36161,Fe,Ae,R.width,R.height),o.framebufferRenderbuffer(36160,36064+be,36161,Z.__webglColorRenderbuffer[be])}o.bindRenderbuffer(36161,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Ve(Z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,re.__webglTexture),J(34067,T,Te);for(let $=0;$<6;$++)ne(Z.__webglFramebuffer[$],R,T,36064,34069+$);S(T,Te)&&L(34067),t.unbindTexture()}else if(ue){const $=R.texture;for(let be=0,ge=$.length;be<ge;be++){const _e=$[be],ve=i.get(_e);t.bindTexture(3553,ve.__webglTexture),J(3553,_e,Te),ne(Z.__webglFramebuffer,R,_e,36064+be,3553),S(_e,Te)&&L(3553)}t.unbindTexture()}else{let $=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(n?$=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,re.__webglTexture),J($,T,Te),ne(Z.__webglFramebuffer,R,T,36064,$),S(T,Te)&&L($),t.unbindTexture()}R.depthBuffer&&we(R)}function ht(R){const T=y(R)||n,Z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,ae=Z.length;re<ae;re++){const ue=Z[re];if(S(ue,T)){const Te=R.isWebGLCubeRenderTarget?34067:3553,$=i.get(ue).__webglTexture;t.bindTexture(Te,$),L(Te),t.unbindTexture()}}}function it(R){if(n&&R.samples>0&&ze(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Z=R.width,re=R.height;let ae=16384;const ue=[],Te=R.stencilBuffer?33306:36096,$=i.get(R),be=R.isWebGLMultipleRenderTargets===!0;if(be)for(let ge=0;ge<T.length;ge++)t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){ue.push(36064+ge),R.depthBuffer&&ue.push(Te);const _e=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(_e===!1&&(R.depthBuffer&&(ae|=256),R.stencilBuffer&&(ae|=1024)),be&&o.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[ge]),_e===!0&&(o.invalidateFramebuffer(36008,[Te]),o.invalidateFramebuffer(36009,[Te])),be){const ve=i.get(T[ge]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ve,0)}o.blitFramebuffer(0,0,Z,re,0,0,Z,re,ae,9728),f&&o.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),be)for(let ge=0;ge<T.length;ge++){t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ge,36161,$.__webglColorRenderbuffer[ge]);const _e=i.get(T[ge]).__webglTexture;t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ge,3553,_e,0)}t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function Ye(R){return Math.min(p,R.samples)}function ze(R){const T=i.get(R);return n&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function zt(R){const T=a.render.frame;g.get(R)!==T&&(g.set(R,T),R.update())}function gt(R,T){const Z=R.encoding,re=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===1035||Z!==3e3&&(Z===3001?n===!1?e.has("EXT_sRGB")===!0&&re===1023?(R.format=1035,R.minFilter=1006,R.generateMipmaps=!1):T=zo.sRGBToLinear(T):(re!==1023||ae!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),T}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.setTexture2D=U,this.setTexture2DArray=ee,this.setTexture3D=V,this.setTextureCube=te,this.rebindTextures=tt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ze}function Qp(o,e,t){const i=t.isWebGL2;function r(s,a=null){let n;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return i?5131:(n=e.get("OES_texture_half_float"),n!==null?n.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1028)return 6403;if(s===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===1035)return n=e.get("EXT_sRGB"),n!==null?n.SRGB_ALPHA_EXT:null;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(a===3001)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(s===33776)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(s===33776)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(s===35840)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return n=e.get("WEBGL_compressed_texture_etc1"),n!==null?n.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(s===37492)return a===3001?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(s===37496)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(s===37808)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(s===36492)return a===3001?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===1020?i?34042:(n=e.get("WEBGL_depth_texture"),n!==null?n.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:r}}class em extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vs extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tm={type:"move"};class yn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const n=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,i);if(l.joints[m.jointName]===void 0){const x=new vs;x.matrixAutoUpdate=!1,x.visible=!1,l.joints[m.jointName]=x,l.add(x)}const v=l.joints[m.jointName];d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return n!==null&&(n.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}}class im extends It{constructor(e,t,i,r,s,a,n,c,l,u){if(u=u!==void 0?u:1026,u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===1026&&(i=1014),i===void 0&&u===1027&&(i=1020),super(null,r,s,a,n,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=n!==void 0?n:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1}}class rm extends wr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,n="local-floor",c=null,l=null,u=null,p=null,h=null,f=null;const g=t.getContextAttributes();let m=null,d=null;const v=[],x=[],b=new Dt;b.layers.enable(1),b.viewport=new ct;const y=new Dt;y.layers.enable(2),y.viewport=new ct;const M=[b,y],S=new em;S.layers.enable(1),S.layers.enable(2);let L=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let U=v[N];return U===void 0&&(U=new yn,v[N]=U),U.getTargetRaySpace()},this.getControllerGrip=function(N){let U=v[N];return U===void 0&&(U=new yn,v[N]=U),U.getGripSpace()},this.getHand=function(N){let U=v[N];return U===void 0&&(U=new yn,v[N]=U),U.getHandSpace()};function E(N){const U=x.indexOf(N.inputSource);if(U===-1)return;const ee=v[U];ee!==void 0&&ee.dispatchEvent({type:N.type,data:N.inputSource})}function D(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",k);for(let N=0;N<v.length;N++){const U=x[N];U!==null&&(x[N]=null,v[N].disconnect(U))}L=null,_=null,e.setRenderTarget(m),h=null,p=null,u=null,r=null,d=null,q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){n=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",D),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,U),r.updateRenderState({baseLayer:h}),d=new Zi(h.framebufferWidth,h.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding})}else{let U=null,ee=null,V=null;g.depth&&(V=g.stencil?35056:33190,U=g.stencil?1027:1026,ee=g.stencil?1020:1014);const te={colorFormat:32856,depthFormat:V,scaleFactor:s};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(te),r.updateRenderState({layers:[p]}),d=new Zi(p.textureWidth,p.textureHeight,{format:1023,type:1009,depthTexture:new im(p.textureWidth,p.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const de=e.properties.get(d);de.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await r.requestReferenceSpace(n),q.setContext(r),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(N){for(let U=0;U<N.removed.length;U++){const ee=N.removed[U],V=x.indexOf(ee);V>=0&&(x[V]=null,v[V].dispatchEvent({type:"disconnected",data:ee}))}for(let U=0;U<N.added.length;U++){const ee=N.added[U];let V=x.indexOf(ee);if(V===-1){for(let de=0;de<v.length;de++)if(de>=x.length){x.push(ee),V=de;break}else if(x[de]===null){x[de]=ee,V=de;break}if(V===-1)break}const te=v[V];te&&te.dispatchEvent({type:"connected",data:ee})}}const O=new G,z=new G;function C(N,U,ee){O.setFromMatrixPosition(U.matrixWorld),z.setFromMatrixPosition(ee.matrixWorld);const V=O.distanceTo(z),te=U.projectionMatrix.elements,de=ee.projectionMatrix.elements,Re=te[14]/(te[10]-1),J=te[14]/(te[10]+1),Q=(te[9]+1)/te[5],ie=(te[9]-1)/te[5],ye=(te[8]-1)/te[0],ne=(de[8]+1)/de[0],Ve=Re*ye,Se=Re*ne,we=V/(-ye+ne),tt=we*-ye;U.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(tt),N.translateZ(we),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const _t=Re+we,ht=J+we,it=Ve-tt,Ye=Se+(V-tt),ze=Q*J/ht*_t,zt=ie*J/ht*_t;N.projectionMatrix.makePerspective(it,Ye,ze,zt,_t,ht)}function F(N,U){U===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(U.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;S.near=y.near=b.near=N.near,S.far=y.far=b.far=N.far,(L!==S.near||_!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,_=S.far);const U=N.parent,ee=S.cameras;F(S,U);for(let te=0;te<ee.length;te++)F(ee[te],U);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),N.position.copy(S.position),N.quaternion.copy(S.quaternion),N.scale.copy(S.scale),N.matrix.copy(S.matrix),N.matrixWorld.copy(S.matrixWorld);const V=N.children;for(let te=0,de=V.length;te<de;te++)V[te].updateMatrixWorld(!0);ee.length===2?C(S,b,y):S.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(N){p!==null&&(p.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)};let I=null;function j(N,U){if(l=U.getViewerPose(c||a),f=U,l!==null){const ee=l.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let V=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,V=!0);for(let te=0;te<ee.length;te++){const de=ee[te];let Re=null;if(h!==null)Re=h.getViewport(de);else{const Q=u.getViewSubImage(p,de);Re=Q.viewport,te===0&&(e.setRenderTargetTextures(d,Q.colorTexture,p.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(d))}let J=M[te];J===void 0&&(J=new Dt,J.layers.enable(te),J.viewport=new ct,M[te]=J),J.matrix.fromArray(de.transform.matrix),J.projectionMatrix.fromArray(de.projectionMatrix),J.viewport.set(Re.x,Re.y,Re.width,Re.height),te===0&&S.matrix.copy(J.matrix),V===!0&&S.cameras.push(J)}}for(let ee=0;ee<v.length;ee++){const V=x[ee],te=v[ee];V!==null&&te!==void 0&&te.update(V,U,c||a)}I&&I(N,U),f=null}const q=new Vo;q.setAnimationLoop(j),this.setAnimationLoop=function(N){I=N},this.dispose=function(){}}}function sm(o,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,x,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),l(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),f(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?n(m,d,v,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===1&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===1&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function n(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===1&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function f(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function nm(o,e,t,i){let r={},s={},a=[];const n=t.isWebGL2?o.getParameter(35375):0;function c(x,b){const y=b.program;i.uniformBlockBinding(x,y)}function l(x,b){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",d));const M=b.program;i.updateUBOMapping(x,M);const S=e.render.frame;s[x.id]!==S&&(h(x),s[x.id]=S)}function u(x){const b=p();x.__bindingPointIndex=b;const y=o.createBuffer(),M=x.__size,S=x.usage;return o.bindBuffer(35345,y),o.bufferData(35345,M,S),o.bindBuffer(35345,null),o.bindBufferBase(35345,b,y),y}function p(){for(let x=0;x<n;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=r[x.id],y=x.uniforms,M=x.__cache;o.bindBuffer(35345,b);for(let S=0,L=y.length;S<L;S++){const _=y[S];if(f(_,S,M)===!0){const E=_.value,D=_.__offset;typeof E=="number"?(_.__data[0]=E,o.bufferSubData(35345,D,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):E.toArray(_.__data),o.bufferSubData(35345,D,_.__data))}}o.bindBuffer(35345,null)}function f(x,b,y){const M=x.value;if(y[b]===void 0)return typeof M=="number"?y[b]=M:y[b]=M.clone(),!0;if(typeof M=="number"){if(y[b]!==M)return y[b]=M,!0}else{const S=y[b];if(S.equals(M)===!1)return S.copy(M),!0}return!1}function g(x){const b=x.uniforms;let y=0;const M=16;let S=0;for(let L=0,_=b.length;L<_;L++){const E=b[L],D=m(E);if(E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,L>0){S=y%M;const k=M-S;S!==0&&k-D.boundary<0&&(y+=M-S,E.__offset=y)}y+=D.storage}return S=y%M,S>0&&(y+=M-S),x.__size=y,x.__cache={},this}function m(x){const b=x.value,y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function d(x){const b=x.target;b.removeEventListener("dispose",d);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),o.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function v(){for(const x in r)o.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:v}}function am(){const o=Ps("canvas");return o.style.display="block",o}function Zo(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:am(),t=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,r=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,n=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",l=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let p=null,h=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,v=0,x=0,b=null,y=-1,M=null;const S=new ct,L=new ct;let _=null,E=e.width,D=e.height,k=1,O=null,z=null;const C=new ct(0,0,E,D),F=new ct(0,0,E,D);let I=!1;const j=new Vn;let q=!1,N=!1,U=null;const ee=new ut,V=new Oe,te=new G,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return b===null?k:1}let J=t;function Q(A,W){for(let X=0;X<A.length;X++){const H=A[X],K=e.getContext(H,W);if(K!==null)return K}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:n,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hn}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Ke,!1),J===null){const W=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&W.shift(),J=Q(W,A),J===null)throw Q(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,ye,ne,Ve,Se,we,tt,_t,ht,it,Ye,ze,zt,gt,R,T,Z,re,ae,ue,Te,$,be,ge;function _e(){ie=new gd(J),ye=new cd(J,ie,o),ie.init(ye),$=new Qp(J,ie,ye),ne=new Jp(J,ie,ye),Ve=new yd,Se=new Np,we=new Kp(J,ie,ne,Se,ye,$,Ve),tt=new hd(m),_t=new fd(m),ht=new Rc(J,ye),be=new od(J,ie,ht,ye),it=new vd(J,ht,Ve,be),Ye=new Md(J,it,ht,Ve),ae=new wd(J,ye,we),T=new ud(Se),ze=new kp(m,tt,_t,ie,ye,be,T),zt=new sm(m,Se),gt=new Op,R=new jp(ie,ye),re=new ad(m,tt,ne,Ye,u,a),Z=new Zp(m,Ye,ye),ge=new nm(J,Ve,ye,ne),ue=new ld(J,ie,Ve,ye),Te=new xd(J,ie,Ve,ye),Ve.programs=ze.programs,m.capabilities=ye,m.extensions=ie,m.properties=Se,m.renderLists=gt,m.shadowMap=Z,m.state=ne,m.info=Ve}_e();const ve=new rm(m,J);this.xr=ve,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(E,D,!1))},this.getSize=function(A){return A.set(E,D)},this.setSize=function(A,W,X){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,D=W,e.width=Math.floor(A*k),e.height=Math.floor(W*k),X!==!1&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(E*k,D*k).floor()},this.setDrawingBufferSize=function(A,W,X){E=A,D=W,k=X,e.width=Math.floor(A*X),e.height=Math.floor(W*X),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(C)},this.setViewport=function(A,W,X,H){A.isVector4?C.set(A.x,A.y,A.z,A.w):C.set(A,W,X,H),ne.viewport(S.copy(C).multiplyScalar(k).floor())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,W,X,H){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,W,X,H),ne.scissor(L.copy(F).multiplyScalar(k).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(A){ne.setScissorTest(I=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,W=!0,X=!0){let H=0;A&&(H|=16384),W&&(H|=256),X&&(H|=1024),J.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Ke,!1),gt.dispose(),R.dispose(),Se.dispose(),tt.dispose(),_t.dispose(),Ye.dispose(),be.dispose(),ge.dispose(),ze.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",qe),ve.removeEventListener("sessionend",rt),U&&(U.dispose(),U=null),Qe.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const A=Ve.autoReset,W=Z.enabled,X=Z.autoUpdate,H=Z.needsUpdate,K=Z.type;_e(),Ve.autoReset=A,Z.enabled=W,Z.autoUpdate=X,Z.needsUpdate=H,Z.type=K}function Ke(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function B(A){const W=A.target;W.removeEventListener("dispose",B),he(W)}function he(A){Y(A),Se.remove(A)}function Y(A){const W=Se.get(A).programs;W!==void 0&&(W.forEach(function(X){ze.releaseProgram(X)}),A.isShaderMaterial&&ze.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,X,H,K,Me){W===null&&(W=de);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Le=Ge(A,W,X,H,K);ne.setMaterial(H,Ce);let ke=X.index;const et=X.attributes.position;if(ke===null){if(et===void 0||et.count===0)return}else if(ke.count===0)return;let Ne=1;H.wireframe===!0&&(ke=it.getWireframeAttribute(X),Ne=2),be.setup(K,H,Le,X,ke);let We,dt=ue;ke!==null&&(We=ht.get(ke),dt=Te,dt.setIndex(We));const Fi=ke!==null?ke.count:et.count,Qi=X.drawRange.start*Ne,er=X.drawRange.count*Ne,Qt=Me!==null?Me.start*Ne:0,je=Me!==null?Me.count*Ne:1/0,tr=Math.max(Qi,Qt),Sr=Math.min(Fi,Qi+er,Qt+je)-1,Nt=Math.max(0,Sr-tr+1);if(Nt!==0){if(K.isMesh)H.wireframe===!0?(ne.setLineWidth(H.wireframeLinewidth*Re()),dt.setMode(1)):dt.setMode(4);else if(K.isLine){let bi=H.linewidth;bi===void 0&&(bi=1),ne.setLineWidth(bi*Re()),K.isLineSegments?dt.setMode(1):K.isLineLoop?dt.setMode(2):dt.setMode(3)}else K.isPoints?dt.setMode(0):K.isSprite&&dt.setMode(4);if(K.isInstancedMesh)dt.renderInstances(tr,Nt,K.count);else if(X.isInstancedBufferGeometry){const bi=Math.min(X.instanceCount,X._maxInstanceCount);dt.renderInstances(tr,Nt,bi)}else dt.render(tr,Nt)}},this.compile=function(A,W){h=R.get(A),h.init(),g.push(h),A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights(m.physicallyCorrectLights),A.traverse(function(X){const H=X.material;if(H)if(Array.isArray(H))for(let K=0;K<H.length;K++){const Me=H[K];xe(Me,A,X)}else xe(H,A,X)}),g.pop(),h=null};let me=null;function oe(A){me&&me(A)}function qe(){Qe.stop()}function rt(){Qe.start()}const Qe=new Vo;Qe.setAnimationLoop(oe),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(A){me=A,ve.setAnimationLoop(A),A===null?Qe.stop():Qe.start()},ve.addEventListener("sessionstart",qe),ve.addEventListener("sessionend",rt),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(W),W=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,W,b),h=R.get(A,g.length),h.init(),g.push(h),ee.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(ee),N=this.localClippingEnabled,q=T.init(this.clippingPlanes,N,W),p=gt.get(A,f.length),p.init(),f.push(p),Kt(A,W,0,m.sortObjects),p.finish(),m.sortObjects===!0&&p.sort(O,z),q===!0&&T.beginShadows();const X=h.state.shadowsArray;if(Z.render(X,A,W),q===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,A),h.setupLights(m.physicallyCorrectLights),W.isArrayCamera){const H=W.cameras;for(let K=0,Me=H.length;K<Me;K++){const Ce=H[K];Ze(p,A,Ce,Ce.viewport)}}else Ze(p,A,W);b!==null&&(we.updateMultisampleRenderTarget(b),we.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(m,A,W),be.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?p=f[f.length-1]:p=null};function Kt(A,W,X,H){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){H&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const Me=Ye.update(A),Ce=A.material;Ce.visible&&p.push(A,Me,Ce,X,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ve.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ve.render.frame),!A.frustumCulled||j.intersectsObject(A))){H&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const Me=Ye.update(A),Ce=A.material;if(Array.isArray(Ce)){const Le=Me.groups;for(let ke=0,et=Le.length;ke<et;ke++){const Ne=Le[ke],We=Ce[Ne.materialIndex];We&&We.visible&&p.push(A,Me,We,X,te.z,Ne)}}else Ce.visible&&p.push(A,Me,Ce,X,te.z,null)}}const K=A.children;for(let Me=0,Ce=K.length;Me<Ce;Me++)Kt(K[Me],W,X,H)}function Ze(A,W,X,H){const K=A.opaque,Me=A.transmissive,Ce=A.transparent;h.setupLightsView(X),Me.length>0&&Vt(K,W,X),H&&ne.viewport(S.copy(H)),K.length>0&&Et(K,W,X),Me.length>0&&Et(Me,W,X),Ce.length>0&&Et(Ce,W,X),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Vt(A,W,X){const H=ye.isWebGL2;U===null&&(U=new Zi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:H&&s===!0?4:0})),m.getDrawingBufferSize(V),H?U.setSize(V.x,V.y):U.setSize(Nn(V.x),Nn(V.y));const K=m.getRenderTarget();m.setRenderTarget(U),m.clear();const Me=m.toneMapping;m.toneMapping=0,Et(A,W,X),m.toneMapping=Me,we.updateMultisampleRenderTarget(U),we.updateRenderTargetMipmap(U),m.setRenderTarget(K)}function Et(A,W,X){const H=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Me=A.length;K<Me;K++){const Ce=A[K],Le=Ce.object,ke=Ce.geometry,et=H===null?Ce.material:H,Ne=Ce.group;Le.layers.test(X.layers)&&pe(Le,W,X,ke,et,Ne)}}function pe(A,W,X,H,K,Me){A.onBeforeRender(m,W,X,H,K,Me),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(m,W,X,H,A,Me),K.transparent===!0&&K.side===2?(K.side=1,K.needsUpdate=!0,m.renderBufferDirect(X,W,H,K,A,Me),K.side=0,K.needsUpdate=!0,m.renderBufferDirect(X,W,H,K,A,Me),K.side=2):m.renderBufferDirect(X,W,H,K,A,Me),A.onAfterRender(m,W,X,H,K,Me)}function xe(A,W,X){W.isScene!==!0&&(W=de);const H=Se.get(A),K=h.state.lights,Me=h.state.shadowsArray,Ce=K.state.version,Le=ze.getParameters(A,K.state,Me,W,X),ke=ze.getProgramCacheKey(Le);let et=H.programs;H.environment=A.isMeshStandardMaterial?W.environment:null,H.fog=W.fog,H.envMap=(A.isMeshStandardMaterial?_t:tt).get(A.envMap||H.environment),et===void 0&&(A.addEventListener("dispose",B),et=new Map,H.programs=et);let Ne=et.get(ke);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===Ce)return Pe(A,Le),Ne}else Le.uniforms=ze.getUniforms(A),A.onBuild(X,Le,m),A.onBeforeCompile(Le,m),Ne=ze.acquireProgram(Le,ke),et.set(ke,Ne),H.uniforms=Le.uniforms;const We=H.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=T.uniform),Pe(A,Le),H.needsLights=kt(A),H.lightsStateVersion=Ce,H.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotShadowMatrix.value=K.state.spotShadowMatrix,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix);const dt=Ne.getUniforms(),Fi=Ts.seqWithValue(dt.seq,We);return H.currentProgram=Ne,H.uniformsList=Fi,Ne}function Pe(A,W){const X=Se.get(A);X.outputEncoding=W.outputEncoding,X.instancing=W.instancing,X.skinning=W.skinning,X.morphTargets=W.morphTargets,X.morphNormals=W.morphNormals,X.morphColors=W.morphColors,X.morphTargetsCount=W.morphTargetsCount,X.numClippingPlanes=W.numClippingPlanes,X.numIntersection=W.numClipIntersection,X.vertexAlphas=W.vertexAlphas,X.vertexTangents=W.vertexTangents,X.toneMapping=W.toneMapping}function Ge(A,W,X,H,K){W.isScene!==!0&&(W=de),we.resetTextureUnits();const Me=W.fog,Ce=H.isMeshStandardMaterial?W.environment:null,Le=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:3e3,ke=(H.isMeshStandardMaterial?_t:tt).get(H.envMap||Ce),et=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ne=!!H.normalMap&&!!X.attributes.tangent,We=!!X.morphAttributes.position,dt=!!X.morphAttributes.normal,Fi=!!X.morphAttributes.color,Qi=H.toneMapped?m.toneMapping:0,er=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=er!==void 0?er.length:0,je=Se.get(H),tr=h.state.lights;if(q===!0&&(N===!0||A!==M)){const Ct=A===M&&H.id===y;T.setState(H,A,Ct)}let Sr=!1;H.version===je.__version?(je.needsLights&&je.lightsStateVersion!==tr.state.version||je.outputEncoding!==Le||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||je.envMap!==ke||H.fog===!0&&je.fog!==Me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==T.numPlanes||je.numIntersection!==T.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Ne||je.morphTargets!==We||je.morphNormals!==dt||je.morphColors!==Fi||je.toneMapping!==Qi||ye.isWebGL2===!0&&je.morphTargetsCount!==Qt)&&(Sr=!0):(Sr=!0,je.__version=H.version);let Nt=je.currentProgram;Sr===!0&&(Nt=xe(H,W,K));let bi=!1,Er=!1,Os=!1;const bt=Nt.getUniforms(),Tr=je.uniforms;if(ne.useProgram(Nt.program)&&(bi=!0,Er=!0,Os=!0),H.id!==y&&(y=H.id,Er=!0),bi||M!==A){if(bt.setValue(J,"projectionMatrix",A.projectionMatrix),ye.logarithmicDepthBuffer&&bt.setValue(J,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Er=!0,Os=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Ct=bt.map.cameraPosition;Ct!==void 0&&Ct.setValue(J,te.setFromMatrixPosition(A.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(J,"isOrthographic",A.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||K.isSkinnedMesh)&&bt.setValue(J,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){bt.setOptional(J,K,"bindMatrix"),bt.setOptional(J,K,"bindMatrixInverse");const Ct=K.skeleton;Ct&&(ye.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),bt.setValue(J,"boneTexture",Ct.boneTexture,we),bt.setValue(J,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gs=X.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0&&ye.isWebGL2===!0)&&ae.update(K,X,H,Nt),(Er||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,bt.setValue(J,"receiveShadow",K.receiveShadow)),Er&&(bt.setValue(J,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&Je(Tr,Os),Me&&H.fog===!0&&zt.refreshFogUniforms(Tr,Me),zt.refreshMaterialUniforms(Tr,H,k,D,U),Ts.upload(J,je.uniformsList,Tr,we)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ts.upload(J,je.uniformsList,Tr,we),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(J,"center",K.center),bt.setValue(J,"modelViewMatrix",K.modelViewMatrix),bt.setValue(J,"normalMatrix",K.normalMatrix),bt.setValue(J,"modelMatrix",K.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ct=H.uniformsGroups;for(let Ws=0,ul=Ct.length;Ws<ul;Ws++)if(ye.isWebGL2){const Jn=Ct[Ws];ge.update(Jn,Nt),ge.bind(Jn,Nt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nt}function Je(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function kt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,W,X){Se.get(A.texture).__webglTexture=W,Se.get(A.depthTexture).__webglTexture=X;const H=Se.get(A);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=X===void 0,H.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const X=Se.get(A);X.__webglFramebuffer=W,X.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,X=0){b=A,v=W,x=X;let H=!0;if(A){const Le=Se.get(A);Le.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(36160,null),H=!1):Le.__webglFramebuffer===void 0?we.setupRenderTarget(A):Le.__hasExternalTextures&&we.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture)}let K=null,Me=!1,Ce=!1;if(A){const Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture)&&(Ce=!0);const ke=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=ke[W],Me=!0):ye.isWebGL2&&A.samples>0&&we.useMultisampledRTT(A)===!1?K=Se.get(A).__webglMultisampledFramebuffer:K=ke,S.copy(A.viewport),L.copy(A.scissor),_=A.scissorTest}else S.copy(C).multiplyScalar(k).floor(),L.copy(F).multiplyScalar(k).floor(),_=I;if(ne.bindFramebuffer(36160,K)&&ye.drawBuffers&&H&&ne.drawBuffers(A,K),ne.viewport(S),ne.scissor(L),ne.setScissorTest(_),Me){const Le=Se.get(A.texture);J.framebufferTexture2D(36160,36064,34069+W,Le.__webglTexture,X)}else if(Ce){const Le=Se.get(A.texture),ke=W||0;J.framebufferTextureLayer(36160,36064,Le.__webglTexture,X||0,ke)}y=-1},this.readRenderTargetPixels=function(A,W,X,H,K,Me,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){ne.bindFramebuffer(36160,Le);try{const ke=A.texture,et=ke.format,Ne=ke.type;if(et!==1023&&$.convert(et)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ne===1016&&(ie.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ie.has("EXT_color_buffer_float"));if(Ne!==1009&&$.convert(Ne)!==J.getParameter(35738)&&!(Ne===1015&&(ye.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-H&&X>=0&&X<=A.height-K&&J.readPixels(W,X,H,K,$.convert(et),$.convert(Ne),Me)}finally{const ke=b!==null?Se.get(b).__webglFramebuffer:null;ne.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(A,W,X=0){const H=Math.pow(2,-X),K=Math.floor(W.image.width*H),Me=Math.floor(W.image.height*H);we.setTexture2D(W,0),J.copyTexSubImage2D(3553,X,0,0,A.x,A.y,K,Me),ne.unbindTexture()},this.copyTextureToTexture=function(A,W,X,H=0){const K=W.image.width,Me=W.image.height,Ce=$.convert(X.format),Le=$.convert(X.type);we.setTexture2D(X,0),J.pixelStorei(37440,X.flipY),J.pixelStorei(37441,X.premultiplyAlpha),J.pixelStorei(3317,X.unpackAlignment),W.isDataTexture?J.texSubImage2D(3553,H,A.x,A.y,K,Me,Ce,Le,W.image.data):W.isCompressedTexture?J.compressedTexSubImage2D(3553,H,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Ce,W.mipmaps[0].data):J.texSubImage2D(3553,H,A.x,A.y,Ce,Le,W.image),H===0&&X.generateMipmaps&&J.generateMipmap(3553),ne.unbindTexture()},this.copyTextureToTexture3D=function(A,W,X,H,K=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=A.max.x-A.min.x+1,Ce=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,ke=$.convert(H.format),et=$.convert(H.type);let Ne;if(H.isData3DTexture)we.setTexture3D(H,0),Ne=32879;else if(H.isDataArrayTexture)we.setTexture2DArray(H,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,H.flipY),J.pixelStorei(37441,H.premultiplyAlpha),J.pixelStorei(3317,H.unpackAlignment);const We=J.getParameter(3314),dt=J.getParameter(32878),Fi=J.getParameter(3316),Qi=J.getParameter(3315),er=J.getParameter(32877),Qt=X.isCompressedTexture?X.mipmaps[0]:X.image;J.pixelStorei(3314,Qt.width),J.pixelStorei(32878,Qt.height),J.pixelStorei(3316,A.min.x),J.pixelStorei(3315,A.min.y),J.pixelStorei(32877,A.min.z),X.isDataTexture||X.isData3DTexture?J.texSubImage3D(Ne,K,W.x,W.y,W.z,Me,Ce,Le,ke,et,Qt.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Ne,K,W.x,W.y,W.z,Me,Ce,Le,ke,Qt.data)):J.texSubImage3D(Ne,K,W.x,W.y,W.z,Me,Ce,Le,ke,et,Qt),J.pixelStorei(3314,We),J.pixelStorei(32878,dt),J.pixelStorei(3316,Fi),J.pixelStorei(3315,Qi),J.pixelStorei(32877,er),K===0&&H.generateMipmaps&&J.generateMipmap(Ne),ne.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?we.setTextureCube(A,0):A.isData3DTexture?we.setTexture3D(A,0):A.isDataArrayTexture?we.setTexture2DArray(A,0):we.setTexture2D(A,0),ne.unbindTexture()},this.resetState=function(){v=0,x=0,b=null,ne.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class om extends Zo{}om.prototype.isWebGL1Renderer=!0;class lm extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Oa extends It{constructor(e,t,i,r,s,a,n,c,l){super(e,t,i,r,s,a,n,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn extends oi{constructor(e=1,t=1,i=1,r=8,s=1,a=!1,n=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:n,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],h=[],f=[];let g=0;const m=[],d=i/2;let v=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function x(){const y=new G,M=new G;let S=0;const L=(t-e)/i;for(let _=0;_<=s;_++){const E=[],D=_/s,k=D*(t-e)+e;for(let O=0;O<=r;O++){const z=O/r,C=z*c+n,F=Math.sin(C),I=Math.cos(C);M.x=k*F,M.y=-D*i+d,M.z=k*I,p.push(M.x,M.y,M.z),y.set(F,L,I).normalize(),h.push(y.x,y.y,y.z),f.push(z,1-D),E.push(g++)}m.push(E)}for(let _=0;_<r;_++)for(let E=0;E<s;E++){const D=m[E][_],k=m[E+1][_],O=m[E+1][_+1],z=m[E][_+1];u.push(D,k,z),u.push(k,O,z),S+=6}l.addGroup(v,S,0),v+=S}function b(y){const M=g,S=new Oe,L=new G;let _=0;const E=y===!0?e:t,D=y===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,d*D,0),h.push(0,D,0),f.push(.5,.5),g++;const k=g;for(let O=0;O<=r;O++){const z=O/r*c+n,C=Math.cos(z),F=Math.sin(z);L.x=E*F,L.y=d*D,L.z=E*C,p.push(L.x,L.y,L.z),h.push(0,D,0),S.x=C*.5+.5,S.y=F*.5*D+.5,f.push(S.x,S.y),g++}for(let O=0;O<r;O++){const z=M+O,C=k+O;y===!0?u.push(C,C+1,z):u.push(C+1,C,z),_+=3}l.addGroup(v,_,y===!0?1:2),v+=_}}static fromJSON(e){return new qn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cm extends Ki{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class um extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hm extends Ki{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jo extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class dm extends Jo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DefaultUp),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ga=new ut,Wa=new G,Ua=new G;class pm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vn,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wa),Ua.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ua),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mm extends pm{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=kn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fm extends Jo{constructor(e,t,i=0,r=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DefaultUp),this.updateMatrix(),this.target=new wt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.shadow=new mm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hn);class Jt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new w);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new w);const i=this.elements,r=e.x,s=e.y,a=e.z;return t.x=i[0]*r+i[1]*s+i[2]*a,t.y=i[3]*r+i[4]*s+i[5]*a,t.z=i[6]*r+i[7]*s+i[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Jt);const i=this.elements,r=e.elements,s=t.elements,a=i[0],n=i[1],c=i[2],l=i[3],u=i[4],p=i[5],h=i[6],f=i[7],g=i[8],m=r[0],d=r[1],v=r[2],x=r[3],b=r[4],y=r[5],M=r[6],S=r[7],L=r[8];return s[0]=a*m+n*x+c*M,s[1]=a*d+n*b+c*S,s[2]=a*v+n*y+c*L,s[3]=l*m+u*x+p*M,s[4]=l*d+u*b+p*S,s[5]=l*v+u*y+p*L,s[6]=h*m+f*x+g*M,s[7]=h*d+f*b+g*S,s[8]=h*v+f*y+g*L,t}scale(e,t){t===void 0&&(t=new Jt);const i=this.elements,r=t.elements;for(let s=0;s!==3;s++)r[3*s+0]=e.x*i[3*s+0],r[3*s+1]=e.y*i[3*s+1],r[3*s+2]=e.z*i[3*s+2];return t}solve(e,t){t===void 0&&(t=new w);const i=3,r=4,s=[];let a,n;for(a=0;a<i*r;a++)s.push(0);for(a=0;a<3;a++)for(n=0;n<3;n++)s[a+r*n]=this.elements[a+3*n];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let c=3;const l=c;let u;const p=4;let h;do{if(a=l-c,s[a+r*a]===0){for(n=a+1;n<l;n++)if(s[a+r*n]!==0){u=p;do h=p-u,s[h+r*a]+=s[h+r*n];while(--u);break}}if(s[a+r*a]!==0)for(n=a+1;n<l;n++){const f=s[a+r*n]/s[a+r*a];u=p;do h=p-u,s[h+r*n]=h<=a?0:s[h+r*n]-s[h+r*a]*f;while(--u)}}while(--c);if(t.z=s[2*r+3]/s[2*r+2],t.y=(s[1*r+3]-s[1*r+2]*t.z)/s[1*r+1],t.x=(s[0*r+3]-s[0*r+2]*t.z-s[0*r+1]*t.y)/s[0*r+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new Jt);const t=3,i=6,r=gm;let s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)r[s+i*a]=this.elements[s+3*a];r[3+6*0]=1,r[3+6*1]=0,r[3+6*2]=0,r[4+6*0]=0,r[4+6*1]=1,r[4+6*2]=0,r[5+6*0]=0,r[5+6*1]=0,r[5+6*2]=1;let n=3;const c=n;let l;const u=i;let p;do{if(s=c-n,r[s+i*s]===0){for(a=s+1;a<c;a++)if(r[s+i*a]!==0){l=u;do p=u-l,r[p+i*s]+=r[p+i*a];while(--l);break}}if(r[s+i*s]!==0)for(a=s+1;a<c;a++){const h=r[s+i*a]/r[s+i*s];l=u;do p=u-l,r[p+i*a]=p<=s?0:r[p+i*a]-r[p+i*s]*h;while(--l)}}while(--n);s=2;do{a=s-1;do{const h=r[s+i*a]/r[s+i*s];l=i;do p=i-l,r[p+i*a]=r[p+i*a]-r[p+i*s]*h;while(--l)}while(a--)}while(--s);s=2;do{const h=1/r[s+i*s];l=i;do p=i-l,r[p+i*s]=r[p+i*s]*h;while(--l)}while(s--);s=2;do{a=2;do{if(p=r[t+a+i*s],isNaN(p)||p===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,a,p)}while(a--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,r=e.z,s=e.w,a=t+t,n=i+i,c=r+r,l=t*a,u=t*n,p=t*c,h=i*n,f=i*c,g=r*c,m=s*a,d=s*n,v=s*c,x=this.elements;return x[3*0+0]=1-(h+g),x[3*0+1]=u-v,x[3*0+2]=p+d,x[3*1+0]=u+v,x[3*1+1]=1-(l+g),x[3*1+2]=f-m,x[3*2+0]=p-d,x[3*2+1]=f+m,x[3*2+2]=1-(l+h),this}transpose(e){e===void 0&&(e=new Jt);const t=this.elements,i=e.elements;let r;return i[0]=t[0],i[4]=t[4],i[8]=t[8],r=t[1],i[1]=t[3],i[3]=r,r=t[2],i[2]=t[6],i[6]=r,r=t[5],i[5]=t[7],i[7]=r,e}}const gm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new w);const i=e.x,r=e.y,s=e.z,a=this.x,n=this.y,c=this.z;return t.x=n*s-c*r,t.y=c*i-a*s,t.z=a*r-n*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new w(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new w(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Jt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,r=Math.sqrt(e*e+t*t+i*i);if(r>0){const s=1/r;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return r}unit(e){e===void 0&&(e=new w);const t=this.x,i=this.y,r=this.z;let s=Math.sqrt(t*t+i*i+r*r);return s>0?(s=1/s,e.x=t*s,e.y=i*s,e.z=r*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,n=e.z;return Math.sqrt((s-t)*(s-t)+(a-i)*(a-i)+(n-r)*(n-r))}distanceSquared(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,n=e.z;return(s-t)*(s-t)+(a-i)*(a-i)+(n-r)*(n-r)}scale(e,t){t===void 0&&(t=new w);const i=this.x,r=this.y,s=this.z;return t.x=e*i,t.y=e*r,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new w),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new w),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new w),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const r=vm,s=1/i;r.set(this.x*s,this.y*s,this.z*s);const a=xm;Math.abs(r.x)<.9?(a.set(1,0,0),r.cross(a,e)):(a.set(0,1,0),r.cross(a,e)),r.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const r=this.x,s=this.y,a=this.z;i.x=r+(e.x-r)*t,i.y=s+(e.y-s)*t,i.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Ha),Ha.almostEquals(e,t)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const vm=new w,xm=new w,Ha=new w;class Ft{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,r){const s=this.lowerBound,a=this.upperBound,n=i;s.copy(e[0]),n&&n.vmult(s,s),a.copy(s);for(let c=1;c<e.length;c++){let l=e[c];n&&(n.vmult(l,Va),l=Va),l.x>a.x&&(a.x=l.x),l.x<s.x&&(s.x=l.x),l.y>a.y&&(a.y=l.y),l.y<s.y&&(s.y=l.y),l.z>a.z&&(a.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(a,a)),r&&(s.x-=r,s.y-=r,s.z-=r,a.x+=r,a.y+=r,a.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Ft().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,s=e.upperBound,a=r.x<=i.x&&i.x<=s.x||t.x<=s.x&&s.x<=i.x,n=r.y<=i.y&&i.y<=s.y||t.y<=s.y&&s.y<=i.y,c=r.z<=i.z&&i.z<=s.z||t.z<=s.z&&s.z<=i.z;return a&&n&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,s=e.upperBound;return t.x<=r.x&&i.x>=s.x&&t.y<=r.y&&i.y>=s.y&&t.z<=r.z&&i.z>=s.z}getCorners(e,t,i,r,s,a,n,c){const l=this.lowerBound,u=this.upperBound;e.copy(l),t.set(u.x,l.y,l.z),i.set(u.x,u.y,l.z),r.set(l.x,u.y,u.z),s.set(u.x,l.y,u.z),a.set(l.x,u.y,l.z),n.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(e,t){const i=ja,r=i[0],s=i[1],a=i[2],n=i[3],c=i[4],l=i[5],u=i[6],p=i[7];this.getCorners(r,s,a,n,c,l,u,p);for(let h=0;h!==8;h++){const f=i[h];e.pointToLocal(f,f)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=ja,r=i[0],s=i[1],a=i[2],n=i[3],c=i[4],l=i[5],u=i[6],p=i[7];this.getCorners(r,s,a,n,c,l,u,p);for(let h=0;h!==8;h++){const f=i[h];e.pointToWorld(f,f)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,r=1/t.x,s=1/t.y,a=1/t.z,n=(this.lowerBound.x-i.x)*r,c=(this.upperBound.x-i.x)*r,l=(this.lowerBound.y-i.y)*s,u=(this.upperBound.y-i.y)*s,p=(this.lowerBound.z-i.z)*a,h=(this.upperBound.z-i.z)*a,f=Math.max(Math.max(Math.min(n,c),Math.min(l,u)),Math.min(p,h)),g=Math.min(Math.min(Math.max(n,c),Math.max(l,u)),Math.max(p,h));return!(g<0||f>g)}}const Va=new w,ja=[new w,new w,new w,new w,new w,new w,new w,new w];class qa{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:r}=t;if(r>i){const s=r;r=i,i=s}return this.matrix[(i*(i+1)>>1)+r-1]}set(e,t,i){let{index:r}=e,{index:s}=t;if(s>r){const a=s;s=r,r=a}this.matrix[(r*(r+1)>>1)+s-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const r=i[e].indexOf(t);return r!==-1&&i[e].splice(r,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let i=0,r=t.length;i<r;i++)t[i].call(this,e)}return this}}class at{constructor(e,t,i,r){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),r===void 0&&(r=1),this.x=e,this.y=t,this.z=i,this.w=r}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=ym,r=_m;e.tangents(i,r),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new at);const i=this.x,r=this.y,s=this.z,a=this.w,n=e.x,c=e.y,l=e.z,u=e.w;return t.x=i*u+a*n+r*l-s*c,t.y=r*u+a*c+s*n-i*l,t.z=s*u+a*l+i*c-r*n,t.w=a*u-i*n-r*c-s*l,t}inverse(e){e===void 0&&(e=new at);const t=this.x,i=this.y,r=this.z,s=this.w;this.conjugate(e);const a=1/(t*t+i*i+r*r+s*s);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new at),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new w);const i=e.x,r=e.y,s=e.z,a=this.x,n=this.y,c=this.z,l=this.w,u=l*i+n*s-c*r,p=l*r+c*i-a*s,h=l*s+a*r-n*i,f=-a*i-n*r-c*s;return t.x=u*l+f*-a+p*-c-h*-n,t.y=p*l+f*-n+h*-a-u*-c,t.z=h*l+f*-c+u*-n-p*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,r,s;const a=this.x,n=this.y,c=this.z,l=this.w;switch(t){case"YZX":const u=a*n+c*l;if(u>.499&&(i=2*Math.atan2(a,l),r=Math.PI/2,s=0),u<-.499&&(i=-2*Math.atan2(a,l),r=-Math.PI/2,s=0),i===void 0){const p=a*a,h=n*n,f=c*c;i=Math.atan2(2*n*l-2*a*c,1-2*h-2*f),r=Math.asin(2*u),s=Math.atan2(2*a*l-2*n*c,1-2*p-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=r,e.x=s}setFromEuler(e,t,i,r){r===void 0&&(r="XYZ");const s=Math.cos(e/2),a=Math.cos(t/2),n=Math.cos(i/2),c=Math.sin(e/2),l=Math.sin(t/2),u=Math.sin(i/2);return r==="XYZ"?(this.x=c*a*n+s*l*u,this.y=s*l*n-c*a*u,this.z=s*a*u+c*l*n,this.w=s*a*n-c*l*u):r==="YXZ"?(this.x=c*a*n+s*l*u,this.y=s*l*n-c*a*u,this.z=s*a*u-c*l*n,this.w=s*a*n+c*l*u):r==="ZXY"?(this.x=c*a*n-s*l*u,this.y=s*l*n+c*a*u,this.z=s*a*u+c*l*n,this.w=s*a*n-c*l*u):r==="ZYX"?(this.x=c*a*n-s*l*u,this.y=s*l*n+c*a*u,this.z=s*a*u-c*l*n,this.w=s*a*n+c*l*u):r==="YZX"?(this.x=c*a*n+s*l*u,this.y=s*l*n+c*a*u,this.z=s*a*u-c*l*n,this.w=s*a*n-c*l*u):r==="XZY"&&(this.x=c*a*n-s*l*u,this.y=s*l*n-c*a*u,this.z=s*a*u+c*l*n,this.w=s*a*n+c*l*u),this}clone(){return new at(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new at);const r=this.x,s=this.y,a=this.z,n=this.w;let c=e.x,l=e.y,u=e.z,p=e.w,h,f,g,m,d;return f=r*c+s*l+a*u+n*p,f<0&&(f=-f,c=-c,l=-l,u=-u,p=-p),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),m=Math.sin((1-t)*h)/g,d=Math.sin(t*h)/g):(m=1-t,d=t),i.x=m*r+d*c,i.y=m*s+d*l,i.z=m*a+d*u,i.w=m*n+d*p,i}integrate(e,t,i,r){r===void 0&&(r=new at);const s=e.x*i.x,a=e.y*i.y,n=e.z*i.z,c=this.x,l=this.y,u=this.z,p=this.w,h=t*.5;return r.x+=h*(s*p+a*u-n*l),r.y+=h*(a*p+n*c-s*u),r.z+=h*(n*p+s*l-a*c),r.w+=h*(-s*c-a*l-n*u),r}}const ym=new w,_m=new w,bm={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class fe{constructor(e){e===void 0&&(e={}),this.id=fe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}fe.idCounter=0;fe.types=bm;class He{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new at,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return He.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return He.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,r){return r===void 0&&(r=new w),i.vsub(e,r),t.conjugate(Xa),Xa.vmult(r,r),r}static pointToWorldFrame(e,t,i,r){return r===void 0&&(r=new w),t.vmult(i,r),r.vadd(e,r),r}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new w),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,r){return r===void 0&&(r=new w),t.w*=-1,t.vmult(i,r),t.w*=-1,r}}const Xa=new at;class Xi extends fe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:r=[],axes:s,boundingSphereRadius:a}=e;super({type:fe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const r=new w;for(let s=0;s!==e.length;s++){const a=e[s],n=a.length;for(let c=0;c!==n;c++){const l=(c+1)%n;t[a[c]].vsub(t[a[l]],r),r.normalize();let u=!1;for(let p=0;p!==i.length;p++)if(i[p].almostEquals(r)||i[p].almostEquals(r)){u=!0;break}u||i.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);const t=this.faceNormals[e]||new w;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],r=this.vertices[i[0]],s=this.vertices[i[1]],a=this.vertices[i[2]];Xi.computeNormal(r,s,a,t)}static computeNormal(e,t,i,r){const s=new w,a=new w;t.vsub(e,a),i.vsub(t,s),s.cross(a,r),r.isZero()||r.normalize()}clipAgainstHull(e,t,i,r,s,a,n,c,l){const u=new w;let p=-1,h=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){u.copy(i.faceNormals[g]),s.vmult(u,u);const m=u.dot(a);m>h&&(h=m,p=g)}const f=[];for(let g=0;g<i.faces[p].length;g++){const m=i.vertices[i.faces[p][g]],d=new w;d.copy(m),s.vmult(d,d),r.vadd(d,d),f.push(d)}p>=0&&this.clipFaceAgainstHull(a,e,t,f,n,c,l)}findSeparatingAxis(e,t,i,r,s,a,n,c){const l=new w,u=new w,p=new w,h=new w,f=new w,g=new w;let m=Number.MAX_VALUE;const d=this;if(d.uniqueAxes)for(let v=0;v!==d.uniqueAxes.length;v++){i.vmult(d.uniqueAxes[v],l);const x=d.testSepAxis(l,e,t,i,r,s);if(x===!1)return!1;x<m&&(m=x,a.copy(l))}else{const v=n?n.length:d.faces.length;for(let x=0;x<v;x++){const b=n?n[x]:x;l.copy(d.faceNormals[b]),i.vmult(l,l);const y=d.testSepAxis(l,e,t,i,r,s);if(y===!1)return!1;y<m&&(m=y,a.copy(l))}}if(e.uniqueAxes)for(let v=0;v!==e.uniqueAxes.length;v++){s.vmult(e.uniqueAxes[v],u);const x=d.testSepAxis(u,e,t,i,r,s);if(x===!1)return!1;x<m&&(m=x,a.copy(u))}else{const v=c?c.length:e.faces.length;for(let x=0;x<v;x++){const b=c?c[x]:x;u.copy(e.faceNormals[b]),s.vmult(u,u);const y=d.testSepAxis(u,e,t,i,r,s);if(y===!1)return!1;y<m&&(m=y,a.copy(u))}}for(let v=0;v!==d.uniqueEdges.length;v++){i.vmult(d.uniqueEdges[v],h);for(let x=0;x!==e.uniqueEdges.length;x++)if(s.vmult(e.uniqueEdges[x],f),h.cross(f,g),!g.almostZero()){g.normalize();const b=d.testSepAxis(g,e,t,i,r,s);if(b===!1)return!1;b<m&&(m=b,a.copy(g))}}return r.vsub(t,p),p.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,i,r,s,a){const n=this;Xi.project(n,e,i,r,_n),Xi.project(t,e,s,a,bn);const c=_n[0],l=_n[1],u=bn[0],p=bn[1];if(c<p||u<l)return!1;const h=c-p,f=u-l;return h<f?h:f}calculateLocalInertia(e,t){const i=new w,r=new w;this.computeLocalAABB(r,i);const s=i.x-r.x,a=i.y-r.y,n=i.z-r.z;t.x=1/12*e*(2*a*2*a+2*n*2*n),t.y=1/12*e*(2*s*2*s+2*n*2*n),t.z=1/12*e*(2*a*2*a+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],r=this.vertices[t[0]];return-i.dot(r)}clipFaceAgainstHull(e,t,i,r,s,a,n){const c=new w,l=new w,u=new w,p=new w,h=new w,f=new w,g=new w,m=new w,d=this,v=[],x=r,b=v;let y=-1,M=Number.MAX_VALUE;for(let D=0;D<d.faces.length;D++){c.copy(d.faceNormals[D]),i.vmult(c,c);const k=c.dot(e);k<M&&(M=k,y=D)}if(y<0)return;const S=d.faces[y];S.connectedFaces=[];for(let D=0;D<d.faces.length;D++)for(let k=0;k<d.faces[D].length;k++)S.indexOf(d.faces[D][k])!==-1&&D!==y&&S.connectedFaces.indexOf(D)===-1&&S.connectedFaces.push(D);const L=S.length;for(let D=0;D<L;D++){const k=d.vertices[S[D]],O=d.vertices[S[(D+1)%L]];k.vsub(O,l),u.copy(l),i.vmult(u,u),t.vadd(u,u),p.copy(this.faceNormals[y]),i.vmult(p,p),t.vadd(p,p),u.cross(p,h),h.negate(h),f.copy(k),i.vmult(f,f),t.vadd(f,f);const z=S.connectedFaces[D];g.copy(this.faceNormals[z]);const C=this.getPlaneConstantOfFace(z);m.copy(g),i.vmult(m,m);const F=C-m.dot(t);for(this.clipFaceAgainstPlane(x,b,m,F);x.length;)x.shift();for(;b.length;)x.push(b.shift())}g.copy(this.faceNormals[y]);const _=this.getPlaneConstantOfFace(y);m.copy(g),i.vmult(m,m);const E=_-m.dot(t);for(let D=0;D<x.length;D++){let k=m.dot(x[D])+E;if(k<=s&&(console.log(`clamped: depth=${k} to minDist=${s}`),k=s),k<=a){const O=x[D];if(k<=1e-6){const z={point:O,normal:m,depth:k};n.push(z)}}}}clipFaceAgainstPlane(e,t,i,r){let s,a;const n=e.length;if(n<2)return t;let c=e[e.length-1],l=e[0];s=i.dot(c)+r;for(let u=0;u<n;u++){if(l=e[u],a=i.dot(l)+r,s<0)if(a<0){const p=new w;p.copy(l),t.push(p)}else{const p=new w;c.lerp(l,s/(s-a),p),t.push(p)}else if(a<0){const p=new w;c.lerp(l,s/(s-a),p),t.push(p),t.push(l)}c=l,s=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const i=this.vertices,r=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(i[s],r[s]),e.vadd(r[s],r[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const s=i[r];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new w);const i=this.faceNormals,r=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(i[s],r[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const r=t[i].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,r){const s=this.vertices;let a,n,c,l,u,p,h=new w;for(let f=0;f<s.length;f++){h.copy(s[f]),t.vmult(h,h),e.vadd(h,h);const g=h;(a===void 0||g.x<a)&&(a=g.x),(l===void 0||g.x>l)&&(l=g.x),(n===void 0||g.y<n)&&(n=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(p===void 0||g.z>p)&&(p=g.z)}i.set(a,n,c),r.set(l,u,p)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,r=this.vertices;if(t){for(let s=0;s<i;s++){const a=r[s];t.vmult(a,a)}for(let s=0;s<this.faceNormals.length;s++){const a=this.faceNormals[s];t.vmult(a,a)}}if(e)for(let s=0;s<i;s++){const a=r[s];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,i=this.faces,r=this.faceNormals,s=new w;this.getAveragePointLocal(s);for(let a=0;a<this.faces.length;a++){let n=r[a];const c=t[i[a][0]],l=new w;e.vsub(c,l);const u=n.dot(l),p=new w;s.vsub(c,p);const h=n.dot(p);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(e,t,i,r,s){const a=e.vertices.length,n=wm;let c=0,l=0;const u=Mm,p=e.vertices;u.setZero(),He.vectorToLocalFrame(i,r,t,n),He.pointToLocalFrame(i,r,u,u);const h=u.dot(n);l=c=p[0].dot(n);for(let f=1;f<a;f++){const g=p[f].dot(n);g>c&&(c=g),g<l&&(l=g)}if(l-=h,c-=h,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const _n=[],bn=[];new w;const wm=new w,Mm=new w;class Xn extends fe{constructor(e){super({type:fe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,r=w,s=[new r(-e,-t,-i),new r(e,-t,-i),new r(e,t,-i),new r(-e,t,-i),new r(-e,-t,i),new r(e,-t,i),new r(e,t,i),new r(-e,t,i)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],n=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],c=new Xi({vertices:s,faces:a,axes:n});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new w),Xn.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const r=e;i.x=1/12*t*(2*r.y*2*r.y+2*r.z*2*r.z),i.y=1/12*t*(2*r.x*2*r.x+2*r.z*2*r.z),i.z=1/12*t*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,t){const i=e,r=this.halfExtents;if(i[0].set(r.x,0,0),i[1].set(0,r.y,0),i[2].set(0,0,r.z),i[3].set(-r.x,0,0),i[4].set(0,-r.y,0),i[5].set(0,0,-r.z),t!==void 0)for(let s=0;s!==i.length;s++)t.vmult(i[s],i[s]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const r=this.halfExtents,s=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let a=0;a<s.length;a++)Li.set(s[a][0],s[a][1],s[a][2]),t.vmult(Li,Li),e.vadd(Li,Li),i(Li.x,Li.y,Li.z)}calculateWorldAABB(e,t,i,r){const s=this.halfExtents;ei[0].set(s.x,s.y,s.z),ei[1].set(-s.x,s.y,s.z),ei[2].set(-s.x,-s.y,s.z),ei[3].set(-s.x,-s.y,-s.z),ei[4].set(s.x,-s.y,-s.z),ei[5].set(s.x,s.y,-s.z),ei[6].set(-s.x,s.y,-s.z),ei[7].set(s.x,-s.y,s.z);const a=ei[0];t.vmult(a,a),e.vadd(a,a),r.copy(a),i.copy(a);for(let n=1;n<8;n++){const c=ei[n];t.vmult(c,c),e.vadd(c,c);const l=c.x,u=c.y,p=c.z;l>r.x&&(r.x=l),u>r.y&&(r.y=u),p>r.z&&(r.z=p),l<i.x&&(i.x=l),u<i.y&&(i.y=u),p<i.z&&(i.z=p)}}}const Li=new w,ei=[new w,new w,new w,new w,new w,new w,new w,new w],Yn={DYNAMIC:1,STATIC:2,KINEMATIC:4},$n={AWAKE:0,SLEEPY:1,SLEEPING:2};class le extends Ko{constructor(e){e===void 0&&(e={}),super(),this.id=le.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?le.STATIC:le.DYNAMIC,typeof e.type==typeof le.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=le.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new at,this.initQuaternion=new at,this.previousQuaternion=new at,this.interpolatedQuaternion=new at,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Jt,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Jt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Ft,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=le.AWAKE,this.wakeUpAfterNarrowphase=!1,e===le.SLEEPING&&this.dispatchEvent(le.wakeupEvent)}sleep(){this.sleepState=le.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;t===le.AWAKE&&i<r?(this.sleepState=le.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(le.sleepyEvent)):t===le.SLEEPY&&i>r?this.wakeUp():t===le.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(le.sleepEvent))}}updateSolveMassProperties(){this.sleepState===le.SLEEPING||this.type===le.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new w),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new w),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}addShape(e,t,i){const r=new w,s=new at;return t&&r.copy(t),i&&s.copy(i),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let r=0;for(let s=0;s!==i;s++){const a=e[s];a.updateBoundingSphereRadius();const n=t[s].length(),c=a.boundingSphereRadius;n+c>r&&(r=n+c)}this.boundingRadius=r}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,r=e.length,s=Sm,a=Em,n=this.quaternion,c=this.aabb,l=Tm;for(let u=0;u!==r;u++){const p=e[u];n.vmult(t[u],s),s.vadd(this.position,s),n.mult(i[u],a),p.calculateWorldAABB(s,a,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=Am,r=Cm;i.setRotationFromQuaternion(this.quaternion),i.transpose(r),i.scale(t,i),i.mmult(r,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new w),this.type!==le.DYNAMIC)return;this.sleepState===le.SLEEPING&&this.wakeUp();const i=Lm;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new w),this.type!==le.DYNAMIC)return;const i=Rm,r=Pm;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyForce(i,r)}applyTorque(e){this.type===le.DYNAMIC&&(this.sleepState===le.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new w),this.type!==le.DYNAMIC)return;this.sleepState===le.SLEEPING&&this.wakeUp();const i=t,r=Dm;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const s=Im;i.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new w),this.type!==le.DYNAMIC)return;const i=Fm,r=zm;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyImpulse(i,r)}updateMassProperties(){const e=km;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Xn.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new w;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===le.DYNAMIC||this.type===le.KINEMATIC)||this.sleepState===le.SLEEPING)return;const r=this.velocity,s=this.angularVelocity,a=this.position,n=this.force,c=this.torque,l=this.quaternion,u=this.invMass,p=this.invInertiaWorld,h=this.linearFactor,f=u*e;r.x+=n.x*f*h.x,r.y+=n.y*f*h.y,r.z+=n.z*f*h.z;const g=p.elements,m=this.angularFactor,d=c.x*m.x,v=c.y*m.y,x=c.z*m.z;s.x+=e*(g[0]*d+g[1]*v+g[2]*x),s.y+=e*(g[3]*d+g[4]*v+g[5]*x),s.z+=e*(g[6]*d+g[7]*v+g[8]*x),a.x+=r.x*e,a.y+=r.y*e,a.z+=r.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(i?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}le.idCounter=0;le.COLLIDE_EVENT_NAME="collide";le.DYNAMIC=Yn.DYNAMIC;le.STATIC=Yn.STATIC;le.KINEMATIC=Yn.KINEMATIC;le.AWAKE=$n.AWAKE;le.SLEEPY=$n.SLEEPY;le.SLEEPING=$n.SLEEPING;le.wakeupEvent={type:"wakeup"};le.sleepyEvent={type:"sleepy"};le.sleepEvent={type:"sleep"};const Sm=new w,Em=new at,Tm=new Ft,Am=new Jt,Cm=new Jt;new Jt;const Lm=new w,Rm=new w,Pm=new w,Dm=new w,Im=new w,Fm=new w,zm=new w,km=new w;class Nm{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&le.STATIC)!==0||e.sleepState===le.SLEEPING)&&((t.type&le.STATIC)!==0||t.sleepState===le.SLEEPING))}intersectionTest(e,t,i,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,r):this.doBoundingSphereBroadphase(e,t,i,r)}doBoundingSphereBroadphase(e,t,i,r){const s=Bm;t.position.vsub(e.position,s);const a=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<a&&(i.push(e),r.push(t))}doBoundingBoxBroadphase(e,t,i,r){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),r.push(t))}makePairsUnique(e,t){const i=Om,r=Gm,s=Wm,a=e.length;for(let n=0;n!==a;n++)r[n]=e[n],s[n]=t[n];e.length=0,t.length=0;for(let n=0;n!==a;n++){const c=r[n].id,l=s[n].id,u=c<l?`${c},${l}`:`${l},${c}`;i[u]=n,i.keys.push(u)}for(let n=0;n!==i.keys.length;n++){const c=i.keys.pop(),l=i[c];e.push(r[l]),t.push(s[l]),delete i[c]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new w;e.position.vsub(t.position,i);const r=e.shapes[0],s=t.shapes[0];return Math.pow(r.boundingSphereRadius+s.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Bm=new w;new w;new at;new w;const Om={keys:[]},Gm=[],Wm=[];new w;new w;new w;class Qo extends Nm{constructor(){super()}collisionPairs(e,t,i){const r=e.bodies,s=r.length;let a,n;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)a=r[c],n=r[l],this.needBroadphaseCollision(a,n)&&this.intersectionTest(a,n,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let r=0;r<e.bodies.length;r++){const s=e.bodies[r];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&i.push(s)}return i}}class Ds{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,r,s,a,n){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(r),this.shape=s,this.body=a,this.distance=n}}let el,tl,il,rl,sl,nl,al;const Zn={CLOSEST:1,ANY:2,ALL:4};el=fe.types.SPHERE;tl=fe.types.PLANE;il=fe.types.BOX;rl=fe.types.CYLINDER;sl=fe.types.CONVEXPOLYHEDRON;nl=fe.types.HEIGHTFIELD;al=fe.types.TRIMESH;class nt{get[el](){return this._intersectSphere}get[tl](){return this._intersectPlane}get[il](){return this._intersectBox}get[rl](){return this._intersectConvex}get[sl](){return this._intersectConvex}get[nl](){return this._intersectHeightfield}get[al](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new w),t===void 0&&(t=new w),this.from=e.clone(),this.to=t.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=nt.ANY,this.result=new Ds,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||nt.ANY,this.result=t.result||new Ds,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ya),wn.length=0,e.broadphase.aabbQuery(e,Ya,wn),this.intersectBodies(wn),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=Um,s=Hm;for(let a=0,n=e.shapes.length;a<n;a++){const c=e.shapes[a];if(!(i&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],s),e.quaternion.vmult(e.shapeOffsets[a],r),r.vadd(e.position,r),this.intersectShape(c,s,r,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,r=e.length;!this.result.shouldStop&&i<r;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,r){const s=this.from;if(sf(s,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,r,e)}_intersectBox(e,t,i,r,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,r,s)}_intersectPlane(e,t,i,r,s){const a=this.from,n=this.to,c=this.direction,l=new w(0,0,1);t.vmult(l,l);const u=new w;a.vsub(i,u);const p=u.dot(l);n.vsub(i,u);const h=u.dot(l);if(p*h>0||a.distanceTo(n)<p)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const g=new w,m=new w,d=new w;a.vsub(i,g);const v=-l.dot(g)/f;c.scale(v,m),a.vadd(m,d),this.reportIntersection(l,d,s,r,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,r=this.to,s=this.from;t.x=Math.min(r.x,s.x),t.y=Math.min(r.y,s.y),t.z=Math.min(r.z,s.z),i.x=Math.max(r.x,s.x),i.y=Math.max(r.y,s.y),i.z=Math.max(r.z,s.z)}_intersectHeightfield(e,t,i,r,s){e.data,e.elementSize;const a=Vm;a.from.copy(this.from),a.to.copy(this.to),He.pointToLocalFrame(i,t,a.from,a.from),He.pointToLocalFrame(i,t,a.to,a.to),a.updateDirection();const n=jm;let c,l,u,p;c=l=0,u=p=e.data.length-1;const h=new Ft;a.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,n,!0),c=Math.max(c,n[0]),l=Math.max(l,n[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,n,!0),u=Math.min(u,n[0]+1),p=Math.min(p,n[1]+1);for(let f=c;f<u;f++)for(let g=l;g<p;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,h),!!h.overlapsRay(a)){if(e.getConvexTrianglePillar(f,g,!1),He.pointToWorldFrame(i,t,e.pillarOffset,xs),this._intersectConvex(e.pillarConvex,t,xs,r,s,$a),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),He.pointToWorldFrame(i,t,e.pillarOffset,xs),this._intersectConvex(e.pillarConvex,t,xs,r,s,$a)}}}_intersectSphere(e,t,i,r,s){const a=this.from,n=this.to,c=e.radius,l=(n.x-a.x)**2+(n.y-a.y)**2+(n.z-a.z)**2,u=2*((n.x-a.x)*(a.x-i.x)+(n.y-a.y)*(a.y-i.y)+(n.z-a.z)*(a.z-i.z)),p=(a.x-i.x)**2+(a.y-i.y)**2+(a.z-i.z)**2-c**2,h=u**2-4*l*p,f=qm,g=Xm;if(!(h<0))if(h===0)a.lerp(n,h,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,s,r,-1);else{const m=(-u-Math.sqrt(h))/(2*l),d=(-u+Math.sqrt(h))/(2*l);if(m>=0&&m<=1&&(a.lerp(n,m,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,s,r,-1)),this.result.shouldStop)return;d>=0&&d<=1&&(a.lerp(n,d,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,s,r,-1))}}_intersectConvex(e,t,i,r,s,a){const n=Ym,c=Za,l=a&&a.faceList||null,u=e.faces,p=e.vertices,h=e.faceNormals,f=this.direction,g=this.from,m=this.to,d=g.distanceTo(m),v=l?l.length:u.length,x=this.result;for(let b=0;!x.shouldStop&&b<v;b++){const y=l?l[b]:b,M=u[y],S=h[y],L=t,_=i;c.copy(p[M[0]]),L.vmult(c,c),c.vadd(_,c),c.vsub(g,c),L.vmult(S,n);const E=f.dot(n);if(Math.abs(E)<this.precision)continue;const D=n.dot(c)/E;if(!(D<0)){f.scale(D,Tt),Tt.vadd(g,Tt),$t.copy(p[M[0]]),L.vmult($t,$t),_.vadd($t,$t);for(let k=1;!x.shouldStop&&k<M.length-1;k++){ti.copy(p[M[k]]),ii.copy(p[M[k+1]]),L.vmult(ti,ti),L.vmult(ii,ii),_.vadd(ti,ti),_.vadd(ii,ii);const O=Tt.distanceTo(g);!(nt.pointInTriangle(Tt,$t,ti,ii)||nt.pointInTriangle(Tt,ti,$t,ii))||O>d||this.reportIntersection(n,Tt,s,r,y)}}}}_intersectTrimesh(e,t,i,r,s,a){const n=$m,c=tf,l=rf,u=Za,p=Zm,h=Jm,f=Km,g=ef,m=Qm,d=e.indices;e.vertices;const v=this.from,x=this.to,b=this.direction;l.position.copy(i),l.quaternion.copy(t),He.vectorToLocalFrame(i,t,b,p),He.pointToLocalFrame(i,t,v,h),He.pointToLocalFrame(i,t,x,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,p),p.normalize();const y=h.distanceSquared(f);e.tree.rayQuery(this,l,c);for(let M=0,S=c.length;!this.result.shouldStop&&M!==S;M++){const L=c[M];e.getNormal(L,n),e.getVertex(d[L*3],$t),$t.vsub(h,u);const _=p.dot(n),E=n.dot(u)/_;if(E<0)continue;p.scale(E,Tt),Tt.vadd(h,Tt),e.getVertex(d[L*3+1],ti),e.getVertex(d[L*3+2],ii);const D=Tt.distanceSquared(h);!(nt.pointInTriangle(Tt,ti,$t,ii)||nt.pointInTriangle(Tt,$t,ti,ii))||D>y||(He.vectorToWorldFrame(t,n,m),He.pointToWorldFrame(i,t,Tt,g),this.reportIntersection(m,g,s,r,L))}c.length=0}reportIntersection(e,t,i,r,s){const a=this.from,n=this.to,c=a.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case nt.ALL:this.hasHit=!0,l.set(a,n,e,t,i,r,c),l.hasHit=!0,this.callback(l);break;case nt.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(a,n,e,t,i,r,c));break;case nt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(a,n,e,t,i,r,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,i,r){r.vsub(t,Hi),i.vsub(t,Pr),e.vsub(t,Mn);const s=Hi.dot(Hi),a=Hi.dot(Pr),n=Hi.dot(Mn),c=Pr.dot(Pr),l=Pr.dot(Mn);let u,p;return(u=c*n-a*l)>=0&&(p=s*l-a*n)>=0&&u+p<s*c-a*a}}nt.CLOSEST=Zn.CLOSEST;nt.ANY=Zn.ANY;nt.ALL=Zn.ALL;const Ya=new Ft,wn=[],Pr=new w,Mn=new w,Um=new w,Hm=new at,Tt=new w,$t=new w,ti=new w,ii=new w;new w;new Ds;const $a={faceList:[0]},xs=new w,Vm=new nt,jm=[],qm=new w,Xm=new w,Ym=new w;new w;new w;const Za=new w,$m=new w,Zm=new w,Jm=new w,Km=new w,Qm=new w,ef=new w;new Ft;const tf=[],rf=new He,Hi=new w,ys=new w;function sf(o,e,t){t.vsub(o,Hi);const i=Hi.dot(e);return e.scale(i,ys),ys.vadd(o,ys),t.distanceTo(ys)}class nf{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class Ja{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class $r{constructor(e,t,i,r){i===void 0&&(i=-1e6),r===void 0&&(r=1e6),this.id=$r.idCounter++,this.minForce=i,this.maxForce=r,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ja,this.jacobianElementB=new Ja,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const r=t,s=e,a=i;this.a=4/(a*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(a*a*s*(1+4*r))}computeB(e,t,i){const r=this.computeGW(),s=this.computeGq(),a=this.computeGiMf();return-s*e-r*t-a*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.position,a=r.position;return e.spatial.dot(s)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.velocity,a=r.velocity,n=i.angularVelocity,c=r.angularVelocity;return e.multiplyVectors(s,n)+t.multiplyVectors(a,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.vlambda,a=r.vlambda,n=i.wlambda,c=r.wlambda;return e.multiplyVectors(s,n)+t.multiplyVectors(a,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.force,a=i.torque,n=r.force,c=r.torque,l=i.invMassSolve,u=r.invMassSolve;return s.scale(l,Ka),n.scale(u,Qa),i.invInertiaWorldSolve.vmult(a,eo),r.invInertiaWorldSolve.vmult(c,to),e.multiplyVectors(Ka,eo)+t.multiplyVectors(Qa,to)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.invMassSolve,a=r.invMassSolve,n=i.invInertiaWorldSolve,c=r.invInertiaWorldSolve;let l=s+a;return n.vmult(e.rotational,_s),l+=_s.dot(e.rotational),c.vmult(t.rotational,_s),l+=_s.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,s=this.bj,a=af;r.vlambda.addScaledVector(r.invMassSolve*e,t.spatial,r.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,i.spatial,s.vlambda),r.invInertiaWorldSolve.vmult(t.rotational,a),r.wlambda.addScaledVector(e,a,r.wlambda),s.invInertiaWorldSolve.vmult(i.rotational,a),s.wlambda.addScaledVector(e,a,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}$r.idCounter=0;const Ka=new w,Qa=new w,eo=new w,to=new w,_s=new w,af=new w;class of extends $r{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){const t=this.a,i=this.b,r=this.bi,s=this.bj,a=this.ri,n=this.rj,c=lf,l=cf,u=r.velocity,p=r.angularVelocity;r.force,r.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=uf,m=this.jacobianElementA,d=this.jacobianElementB,v=this.ni;a.cross(v,c),n.cross(v,l),v.negate(m.spatial),c.negate(m.rotational),d.spatial.copy(v),d.rotational.copy(l),g.copy(s.position),g.vadd(n,g),g.vsub(r.position,g),g.vsub(a,g);const x=v.dot(g),b=this.restitution+1,y=b*h.dot(v)-b*u.dot(v)+f.dot(l)-p.dot(c),M=this.computeGiMf();return-x*t-y*i-e*M}getImpactVelocityAlongNormal(){const e=hf,t=df,i=pf,r=mf,s=ff;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(r,t),e.vsub(t,s),this.ni.dot(s)}}const lf=new w,cf=new w,uf=new w,hf=new w,df=new w,pf=new w,mf=new w,ff=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class io extends $r{constructor(e,t,i){super(e,t,-i,i),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,r=this.rj,s=gf,a=vf,n=this.t;i.cross(n,s),r.cross(n,a);const c=this.jacobianElementA,l=this.jacobianElementB;n.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(n),l.rotational.copy(a);const u=this.computeGW(),p=this.computeGiMf();return-u*t-e*p}}const gf=new w,vf=new w;class Yi{constructor(e,t,i){i=nf.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Yi.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}Yi.idCounter=0;class $i{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=$i.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}$i.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new nt;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class xf extends Xi{constructor(e,t,i,r){if(e===void 0&&(e=1),t===void 0&&(t=1),i===void 0&&(i=1),r===void 0&&(r=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=r,a=[],n=[],c=[],l=[],u=[],p=Math.cos,h=Math.sin;a.push(new w(-t*h(0),-i*.5,t*p(0))),l.push(0),a.push(new w(-e*h(0),i*.5,e*p(0))),u.push(1);for(let g=0;g<s;g++){const m=2*Math.PI/s*(g+1),d=2*Math.PI/s*(g+.5);g<s-1?(a.push(new w(-t*h(m),-i*.5,t*p(m))),l.push(2*g+2),a.push(new w(-e*h(m),i*.5,e*p(m))),u.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&n.push(new w(-h(d),0,p(d)))}c.push(l),n.push(new w(0,1,0));const f=[];for(let g=0;g<u.length;g++)f.push(u[u.length-g-1]);c.push(f),super({vertices:a,faces:c,axes:n}),this.type=fe.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=i,this.numSegments=r}}class Dr extends fe{constructor(){super({type:fe.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new w),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,i,r){pi.set(0,0,1),t.vmult(pi,pi);const s=Number.MAX_VALUE;i.set(-s,-s,-s),r.set(s,s,s),pi.x===1?r.x=e.x:pi.x===-1&&(i.x=e.x),pi.y===1?r.y=e.y:pi.y===-1&&(i.y=e.y),pi.z===1?r.z=e.z:pi.z===-1&&(i.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const pi=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Ft;new w;new Ft;new w;new w;new w;new w;new w;new w;new w;new Ft;new w;new He;new Ft;class yf{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class _f extends yf{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const r=this.iterations,s=this.tolerance*this.tolerance,a=this.equations,n=a.length,c=t.bodies,l=c.length,u=e;let p,h,f,g,m,d;if(n!==0)for(let y=0;y!==l;y++)c[y].updateSolveMassProperties();const v=wf,x=Mf,b=bf;v.length=n,x.length=n,b.length=n;for(let y=0;y!==n;y++){const M=a[y];b[y]=0,x[y]=M.computeB(u),v[y]=1/M.computeC()}if(n!==0){for(let S=0;S!==l;S++){const L=c[S],_=L.vlambda,E=L.wlambda;_.set(0,0,0),E.set(0,0,0)}for(i=0;i!==r;i++){g=0;for(let S=0;S!==n;S++){const L=a[S];p=x[S],h=v[S],d=b[S],m=L.computeGWlambda(),f=h*(p-m-L.eps*d),d+f<L.minForce?f=L.minForce-d:d+f>L.maxForce&&(f=L.maxForce-d),b[S]+=f,g+=f>0?f:-f,L.addToWlambda(f)}if(g*g<s)break}for(let S=0;S!==l;S++){const L=c[S],_=L.velocity,E=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),_.vadd(L.vlambda,_),L.wlambda.vmul(L.angularFactor,L.wlambda),E.vadd(L.wlambda,E)}let y=a.length;const M=1/u;for(;y--;)a[y].multiplier=b[y]*M}return i}}const bf=[],wf=[],Mf=[];class Sf{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Ef extends Sf{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const $e={sphereSphere:fe.types.SPHERE,spherePlane:fe.types.SPHERE|fe.types.PLANE,boxBox:fe.types.BOX|fe.types.BOX,sphereBox:fe.types.SPHERE|fe.types.BOX,planeBox:fe.types.PLANE|fe.types.BOX,convexConvex:fe.types.CONVEXPOLYHEDRON,sphereConvex:fe.types.SPHERE|fe.types.CONVEXPOLYHEDRON,planeConvex:fe.types.PLANE|fe.types.CONVEXPOLYHEDRON,boxConvex:fe.types.BOX|fe.types.CONVEXPOLYHEDRON,sphereHeightfield:fe.types.SPHERE|fe.types.HEIGHTFIELD,boxHeightfield:fe.types.BOX|fe.types.HEIGHTFIELD,convexHeightfield:fe.types.CONVEXPOLYHEDRON|fe.types.HEIGHTFIELD,sphereParticle:fe.types.PARTICLE|fe.types.SPHERE,planeParticle:fe.types.PLANE|fe.types.PARTICLE,boxParticle:fe.types.BOX|fe.types.PARTICLE,convexParticle:fe.types.PARTICLE|fe.types.CONVEXPOLYHEDRON,cylinderCylinder:fe.types.CYLINDER,sphereCylinder:fe.types.SPHERE|fe.types.CYLINDER,planeCylinder:fe.types.PLANE|fe.types.CYLINDER,boxCylinder:fe.types.BOX|fe.types.CYLINDER,convexCylinder:fe.types.CONVEXPOLYHEDRON|fe.types.CYLINDER,heightfieldCylinder:fe.types.HEIGHTFIELD|fe.types.CYLINDER,particleCylinder:fe.types.PARTICLE|fe.types.CYLINDER,sphereTrimesh:fe.types.SPHERE|fe.types.TRIMESH,planeTrimesh:fe.types.PLANE|fe.types.TRIMESH};class Tf{get[$e.sphereSphere](){return this.sphereSphere}get[$e.spherePlane](){return this.spherePlane}get[$e.boxBox](){return this.boxBox}get[$e.sphereBox](){return this.sphereBox}get[$e.planeBox](){return this.planeBox}get[$e.convexConvex](){return this.convexConvex}get[$e.sphereConvex](){return this.sphereConvex}get[$e.planeConvex](){return this.planeConvex}get[$e.boxConvex](){return this.boxConvex}get[$e.sphereHeightfield](){return this.sphereHeightfield}get[$e.boxHeightfield](){return this.boxHeightfield}get[$e.convexHeightfield](){return this.convexHeightfield}get[$e.sphereParticle](){return this.sphereParticle}get[$e.planeParticle](){return this.planeParticle}get[$e.boxParticle](){return this.boxParticle}get[$e.convexParticle](){return this.convexParticle}get[$e.cylinderCylinder](){return this.convexConvex}get[$e.sphereCylinder](){return this.sphereConvex}get[$e.planeCylinder](){return this.planeConvex}get[$e.boxCylinder](){return this.boxConvex}get[$e.convexCylinder](){return this.convexConvex}get[$e.heightfieldCylinder](){return this.heightfieldCylinder}get[$e.particleCylinder](){return this.particleCylinder}get[$e.sphereTrimesh](){return this.sphereTrimesh}get[$e.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Ef,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,r,s,a){let n;this.contactPointPool.length?(n=this.contactPointPool.pop(),n.bi=e,n.bj=t):n=new of(e,t),n.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&r.collisionResponse;const c=this.currentContactMaterial;n.restitution=c.restitution,n.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=i.material||e.material,u=r.material||t.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(n.restitution=l.restitution*u.restitution),n.si=s||i,n.sj=a||r,n}createFrictionEquationsFromContact(e,t){const i=e.bi,r=e.bj,s=e.si,a=e.sj,n=this.world,c=this.currentContactMaterial;let l=c.friction;const u=s.material||i.material,p=a.material||r.material;if(u&&p&&u.friction>=0&&p.friction>=0&&(l=u.friction*p.friction),l>0){const h=l*(n.frictionGravity||n.gravity).length();let f=i.invMass+r.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,m=g.length?g.pop():new io(i,r,h*f),d=g.length?g.pop():new io(i,r,h*f);return m.bi=d.bi=i,m.bj=d.bj=r,m.minForce=d.minForce=-h*f,m.maxForce=d.maxForce=h*f,m.ri.copy(e.ri),m.rj.copy(e.rj),d.ri.copy(e.ri),d.rj.copy(e.rj),e.ni.tangents(m.t,d.t),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,n.dt),d.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,n.dt),m.enabled=d.enabled=e.enabled,t.push(m,d),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Bi.setZero(),vr.setZero(),xr.setZero();const s=t.bi;t.bj;for(let n=0;n!==e;n++)t=this.result[this.result.length-1-n],t.bi!==s?(Bi.vadd(t.ni,Bi),vr.vadd(t.ri,vr),xr.vadd(t.rj,xr)):(Bi.vsub(t.ni,Bi),vr.vadd(t.rj,vr),xr.vadd(t.ri,xr));const a=1/e;vr.scale(a,i.ri),xr.scale(a,i.rj),r.ri.copy(i.ri),r.rj.copy(i.rj),Bi.normalize(),Bi.tangents(i.t,r.t)}getContacts(e,t,i,r,s,a,n){this.contactPointPool=s,this.frictionEquationPool=n,this.result=r,this.frictionResult=a;const c=Lf,l=Rf,u=Af,p=Cf;for(let h=0,f=e.length;h!==f;h++){const g=e[h],m=t[h];let d=null;g.material&&m.material&&(d=i.getContactMaterial(g.material,m.material)||null);const v=g.type&le.KINEMATIC&&m.type&le.STATIC||g.type&le.STATIC&&m.type&le.KINEMATIC||g.type&le.KINEMATIC&&m.type&le.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],c),g.quaternion.vmult(g.shapeOffsets[x],u),u.vadd(g.position,u);const b=g.shapes[x];for(let y=0;y<m.shapes.length;y++){m.quaternion.mult(m.shapeOrientations[y],l),m.quaternion.vmult(m.shapeOffsets[y],p),p.vadd(m.position,p);const M=m.shapes[y];if(!(b.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&b.collisionFilterGroup)||u.distanceTo(p)>b.boundingSphereRadius+M.boundingSphereRadius)continue;let S=null;b.material&&M.material&&(S=i.getContactMaterial(b.material,M.material)||null),this.currentContactMaterial=S||d||i.defaultContactMaterial;const L=b.type|M.type,_=this[L];if(_){let E=!1;b.type<M.type?E=_.call(this,b,M,u,p,c,l,g,m,b,M,v):E=_.call(this,M,b,p,u,l,c,m,g,b,M,v),E&&v&&(i.shapeOverlapKeeper.set(b.id,M.id),i.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(e,t,i,r,s,a,n,c,l,u,p){if(p)return i.distanceSquared(r)<(e.radius+t.radius)**2;const h=this.createContactEquation(n,c,e,t,l,u);r.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(n.position,h.ri),h.rj.vadd(r,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,i,r,s,a,n,c,l,u,p){const h=this.createContactEquation(n,c,e,t,l,u);if(h.ni.set(0,0,1),a.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),i.vsub(r,bs),h.ni.scale(h.ni.dot(bs),ro),bs.vsub(ro,h.rj),-bs.dot(h.ni)<=e.radius){if(p)return!0;const f=h.ri,g=h.rj;f.vadd(i,f),f.vsub(n.position,f),g.vadd(r,g),g.vsub(c.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,i,r,s,a,n,c,l,u,p){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,r,s,a,n,c,e,t,p)}sphereBox(e,t,i,r,s,a,n,c,l,u,p){const h=this.v3pool,f=ig;i.vsub(r,ws),t.getSideNormals(f,a);const g=e.radius;let m=!1;const d=sg,v=ng,x=ag;let b=null,y=0,M=0,S=0,L=null;for(let I=0,j=f.length;I!==j&&m===!1;I++){const q=Qf;q.copy(f[I]);const N=q.length();q.normalize();const U=ws.dot(q);if(U<N+g&&U>0){const ee=eg,V=tg;ee.copy(f[(I+1)%3]),V.copy(f[(I+2)%3]);const te=ee.length(),de=V.length();ee.normalize(),V.normalize();const Re=ws.dot(ee),J=ws.dot(V);if(Re<te&&Re>-te&&J<de&&J>-de){const Q=Math.abs(U-N-g);if((L===null||Q<L)&&(L=Q,M=Re,S=J,b=N,d.copy(q),v.copy(ee),x.copy(V),y++,p))return!0}}}if(y){m=!0;const I=this.createContactEquation(n,c,e,t,l,u);d.scale(-g,I.ri),I.ni.copy(d),I.ni.negate(I.ni),d.scale(b,d),v.scale(M,v),d.vadd(v,d),x.scale(S,x),d.vadd(x,I.rj),I.ri.vadd(i,I.ri),I.ri.vsub(n.position,I.ri),I.rj.vadd(r,I.rj),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let _=h.get();const E=rg;for(let I=0;I!==2&&!m;I++)for(let j=0;j!==2&&!m;j++)for(let q=0;q!==2&&!m;q++)if(_.set(0,0,0),I?_.vadd(f[0],_):_.vsub(f[0],_),j?_.vadd(f[1],_):_.vsub(f[1],_),q?_.vadd(f[2],_):_.vsub(f[2],_),r.vadd(_,E),E.vsub(i,E),E.lengthSquared()<g*g){if(p)return!0;m=!0;const N=this.createContactEquation(n,c,e,t,l,u);N.ri.copy(E),N.ri.normalize(),N.ni.copy(N.ri),N.ri.scale(g,N.ri),N.rj.copy(_),N.ri.vadd(i,N.ri),N.ri.vsub(n.position,N.ri),N.rj.vadd(r,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}h.release(_),_=null;const D=h.get(),k=h.get(),O=h.get(),z=h.get(),C=h.get(),F=f.length;for(let I=0;I!==F&&!m;I++)for(let j=0;j!==F&&!m;j++)if(I%3!==j%3){f[j].cross(f[I],D),D.normalize(),f[I].vadd(f[j],k),O.copy(i),O.vsub(k,O),O.vsub(r,O);const q=O.dot(D);D.scale(q,z);let N=0;for(;N===I%3||N===j%3;)N++;C.copy(i),C.vsub(z,C),C.vsub(k,C),C.vsub(r,C);const U=Math.abs(q),ee=C.length();if(U<f[N].length()&&ee<g){if(p)return!0;m=!0;const V=this.createContactEquation(n,c,e,t,l,u);k.vadd(z,V.rj),V.rj.copy(V.rj),C.negate(V.ni),V.ni.normalize(),V.ri.copy(V.rj),V.ri.vadd(r,V.ri),V.ri.vsub(i,V.ri),V.ri.normalize(),V.ri.scale(g,V.ri),V.ri.vadd(i,V.ri),V.ri.vsub(n.position,V.ri),V.rj.vadd(r,V.rj),V.rj.vsub(c.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}h.release(D,k,O,z,C)}planeBox(e,t,i,r,s,a,n,c,l,u,p){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,r,s,a,n,c,e,t,p)}convexConvex(e,t,i,r,s,a,n,c,l,u,p,h,f){const g=bg;if(!(i.distanceTo(r)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,s,r,a,g,h,f)){const m=[],d=wg;e.clipAgainstHull(i,s,t,r,a,g,-100,100,m);let v=0;for(let x=0;x!==m.length;x++){if(p)return!0;const b=this.createContactEquation(n,c,e,t,l,u),y=b.ri,M=b.rj;g.negate(b.ni),m[x].normal.negate(d),d.scale(m[x].depth,d),m[x].point.vadd(d,y),M.copy(m[x].point),y.vsub(i,y),M.vsub(r,M),y.vadd(i,y),y.vsub(n.position,y),M.vadd(r,M),M.vsub(c.position,M),this.result.push(b),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(e,t,i,r,s,a,n,c,l,u,p){const h=this.v3pool;i.vsub(r,og);const f=t.faceNormals,g=t.faces,m=t.vertices,d=e.radius;let v=!1;for(let x=0;x!==m.length;x++){const b=m[x],y=hg;a.vmult(b,y),r.vadd(y,y);const M=ug;if(y.vsub(i,M),M.lengthSquared()<d*d){if(p)return!0;v=!0;const S=this.createContactEquation(n,c,e,t,l,u);S.ri.copy(M),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(d,S.ri),y.vsub(r,S.rj),S.ri.vadd(i,S.ri),S.ri.vsub(n.position,S.ri),S.rj.vadd(r,S.rj),S.rj.vsub(c.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let x=0,b=g.length;x!==b&&v===!1;x++){const y=f[x],M=g[x],S=dg;a.vmult(y,S);const L=pg;a.vmult(m[M[0]],L),L.vadd(r,L);const _=mg;S.scale(-d,_),i.vadd(_,_);const E=fg;_.vsub(L,E);const D=E.dot(S),k=gg;if(i.vsub(L,k),D<0&&k.dot(S)>0){const O=[];for(let z=0,C=M.length;z!==C;z++){const F=h.get();a.vmult(m[M[z]],F),r.vadd(F,F),O.push(F)}if(Kf(O,S,i)){if(p)return!0;v=!0;const z=this.createContactEquation(n,c,e,t,l,u);S.scale(-d,z.ri),S.negate(z.ni);const C=h.get();S.scale(-D,C);const F=h.get();S.scale(-d,F),i.vsub(r,z.rj),z.rj.vadd(F,z.rj),z.rj.vadd(C,z.rj),z.rj.vadd(r,z.rj),z.rj.vsub(c.position,z.rj),z.ri.vadd(i,z.ri),z.ri.vsub(n.position,z.ri),h.release(C),h.release(F),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let I=0,j=O.length;I!==j;I++)h.release(O[I]);return}else for(let z=0;z!==M.length;z++){const C=h.get(),F=h.get();a.vmult(m[M[(z+1)%M.length]],C),a.vmult(m[M[(z+2)%M.length]],F),r.vadd(C,C),r.vadd(F,F);const I=lg;F.vsub(C,I);const j=cg;I.unit(j);const q=h.get(),N=h.get();i.vsub(C,N);const U=N.dot(j);j.scale(U,q),q.vadd(C,q);const ee=h.get();if(q.vsub(i,ee),U>0&&U*U<I.lengthSquared()&&ee.lengthSquared()<d*d){if(p)return!0;const V=this.createContactEquation(n,c,e,t,l,u);q.vsub(r,V.rj),q.vsub(i,V.ni),V.ni.normalize(),V.ni.scale(d,V.ri),V.rj.vadd(r,V.rj),V.rj.vsub(c.position,V.rj),V.ri.vadd(i,V.ri),V.ri.vsub(n.position,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(let te=0,de=O.length;te!==de;te++)h.release(O[te]);h.release(C),h.release(F),h.release(q),h.release(ee),h.release(N);return}h.release(C),h.release(F),h.release(q),h.release(ee),h.release(N)}for(let z=0,C=O.length;z!==C;z++)h.release(O[z])}}}planeConvex(e,t,i,r,s,a,n,c,l,u,p){const h=vg,f=xg;f.set(0,0,1),s.vmult(f,f);let g=0;const m=yg;for(let d=0;d!==t.vertices.length;d++)if(h.copy(t.vertices[d]),a.vmult(h,h),r.vadd(h,h),h.vsub(i,m),f.dot(m)<=0){if(p)return!0;const v=this.createContactEquation(n,c,e,t,l,u),x=_g;f.scale(f.dot(m),x),h.vsub(x,x),x.vsub(i,v.ri),v.ni.copy(f),h.vsub(r,v.rj),v.ri.vadd(i,v.ri),v.ri.vsub(n.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,r,s,a,n,c,l,u,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,r,s,a,n,c,e,t,p)}sphereHeightfield(e,t,i,r,s,a,n,c,l,u,p){const h=t.data,f=e.radius,g=t.elementSize,m=Fg,d=Ig;He.pointToLocalFrame(r,a,i,d);let v=Math.floor((d.x-f)/g)-1,x=Math.ceil((d.x+f)/g)+1,b=Math.floor((d.y-f)/g)-1,y=Math.ceil((d.y+f)/g)+1;if(x<0||y<0||v>h.length||b>h[0].length)return;v<0&&(v=0),x<0&&(x=0),b<0&&(b=0),y<0&&(y=0),v>=h.length&&(v=h.length-1),x>=h.length&&(x=h.length-1),y>=h[0].length&&(y=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);const M=[];t.getRectMinMax(v,b,x,y,M);const S=M[0],L=M[1];if(d.z-f>L||d.z+f<S)return;const _=this.result;for(let E=v;E<x;E++)for(let D=b;D<y;D++){const k=_.length;let O=!1;if(t.getConvexTrianglePillar(E,D,!1),He.pointToWorldFrame(r,a,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,i,m,s,a,n,c,e,t,p)),p&&O||(t.getConvexTrianglePillar(E,D,!0),He.pointToWorldFrame(r,a,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,i,m,s,a,n,c,e,t,p)),p&&O))return!0;if(_.length-k>2)return}}boxHeightfield(e,t,i,r,s,a,n,c,l,u,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,r,s,a,n,c,e,t,p)}convexHeightfield(e,t,i,r,s,a,n,c,l,u,p){const h=t.data,f=t.elementSize,g=e.boundingSphereRadius,m=Pg,d=Dg,v=Rg;He.pointToLocalFrame(r,a,i,v);let x=Math.floor((v.x-g)/f)-1,b=Math.ceil((v.x+g)/f)+1,y=Math.floor((v.y-g)/f)-1,M=Math.ceil((v.y+g)/f)+1;if(b<0||M<0||x>h.length||y>h[0].length)return;x<0&&(x=0),b<0&&(b=0),y<0&&(y=0),M<0&&(M=0),x>=h.length&&(x=h.length-1),b>=h.length&&(b=h.length-1),M>=h[0].length&&(M=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const S=[];t.getRectMinMax(x,y,b,M,S);const L=S[0],_=S[1];if(!(v.z-g>_||v.z+g<L))for(let E=x;E<b;E++)for(let D=y;D<M;D++){let k=!1;if(t.getConvexTrianglePillar(E,D,!1),He.pointToWorldFrame(r,a,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.convexConvex(e,t.pillarConvex,i,m,s,a,n,c,null,null,p,d,null)),p&&k||(t.getConvexTrianglePillar(E,D,!0),He.pointToWorldFrame(r,a,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.convexConvex(e,t.pillarConvex,i,m,s,a,n,c,null,null,p,d,null)),p&&k))return!0}}sphereParticle(e,t,i,r,s,a,n,c,l,u,p){const h=Tg;if(h.set(0,0,1),r.vsub(i,h),h.lengthSquared()<=e.radius*e.radius){if(p)return!0;const f=this.createContactEquation(c,n,t,e,l,u);h.normalize(),f.rj.copy(h),f.rj.scale(e.radius,f.rj),f.ni.copy(h),f.ni.negate(f.ni),f.ri.set(0,0,0),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}planeParticle(e,t,i,r,s,a,n,c,l,u,p){const h=Mg;h.set(0,0,1),n.quaternion.vmult(h,h);const f=Sg;if(r.vsub(n.position,f),h.dot(f)<=0){if(p)return!0;const g=this.createContactEquation(c,n,t,e,l,u);g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0);const m=Eg;h.scale(h.dot(r),m),r.vsub(m,m),g.rj.copy(m),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,i,r,s,a,n,c,l,u,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,r,s,a,n,c,e,t,p)}convexParticle(e,t,i,r,s,a,n,c,l,u,p){let h=-1;const f=Cg,g=Lg;let m=null;const d=Ag;if(d.copy(r),d.vsub(i,d),s.conjugate(so),so.vmult(d,d),e.pointIsInside(d)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let v=0,x=e.faces.length;v!==x;v++){const b=[e.worldVertices[e.faces[v][0]]],y=e.worldFaceNormals[v];r.vsub(b[0],no);const M=-y.dot(no);if(m===null||Math.abs(M)<Math.abs(m)){if(p)return!0;m=M,h=v,f.copy(y)}}if(h!==-1){const v=this.createContactEquation(c,n,t,e,l,u);f.scale(m,g),g.vadd(r,g),g.vsub(i,g),v.rj.copy(g),f.negate(v.ni),v.ri.set(0,0,0);const x=v.ri,b=v.rj;x.vadd(r,x),x.vsub(c.position,x),b.vadd(i,b),b.vsub(n.position,b),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,r,s,a,n,c,l,u,p){return this.convexHeightfield(t,e,r,i,a,s,c,n,l,u,p)}particleCylinder(e,t,i,r,s,a,n,c,l,u,p){return this.convexParticle(t,e,r,i,a,s,c,n,l,u,p)}sphereTrimesh(e,t,i,r,s,a,n,c,l,u,p){const h=Bf,f=Of,g=Gf,m=Wf,d=Uf,v=Hf,x=Xf,b=Nf,y=zf,M=Yf;He.pointToLocalFrame(r,a,i,d);const S=e.radius;x.lowerBound.set(d.x-S,d.y-S,d.z-S),x.upperBound.set(d.x+S,d.y+S,d.z+S),t.getTrianglesInAABB(x,M);const L=kf,_=e.radius*e.radius;for(let z=0;z<M.length;z++)for(let C=0;C<3;C++)if(t.getVertex(t.indices[M[z]*3+C],L),L.vsub(d,y),y.lengthSquared()<=_){if(b.copy(L),He.pointToWorldFrame(r,a,b,L),L.vsub(i,y),p)return!0;let F=this.createContactEquation(n,c,e,t,l,u);F.ni.copy(y),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(i,F.ri),F.ri.vsub(n.position,F.ri),F.rj.copy(L),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let z=0;z<M.length;z++)for(let C=0;C<3;C++){t.getVertex(t.indices[M[z]*3+C],h),t.getVertex(t.indices[M[z]*3+(C+1)%3],f),f.vsub(h,g),d.vsub(f,v);const F=v.dot(g);d.vsub(h,v);let I=v.dot(g);if(I>0&&F<0&&(d.vsub(h,v),m.copy(g),m.normalize(),I=v.dot(m),m.scale(I,v),v.vadd(h,v),v.distanceTo(d)<e.radius)){if(p)return!0;const j=this.createContactEquation(n,c,e,t,l,u);v.vsub(d,j.ni),j.ni.normalize(),j.ni.scale(e.radius,j.ri),j.ri.vadd(i,j.ri),j.ri.vsub(n.position,j.ri),He.pointToWorldFrame(r,a,v,v),v.vsub(c.position,j.rj),He.vectorToWorldFrame(a,j.ni,j.ni),He.vectorToWorldFrame(a,j.ri,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}const E=Vf,D=jf,k=qf,O=Ff;for(let z=0,C=M.length;z!==C;z++){t.getTriangleVertices(M[z],E,D,k),t.getNormal(M[z],O),d.vsub(E,v);let F=v.dot(O);if(O.scale(F,v),d.vsub(v,v),F=v.distanceTo(d),nt.pointInTriangle(v,E,D,k)&&F<e.radius){if(p)return!0;let I=this.createContactEquation(n,c,e,t,l,u);v.vsub(d,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(i,I.ri),I.ri.vsub(n.position,I.ri),He.pointToWorldFrame(r,a,v,v),v.vsub(c.position,I.rj),He.vectorToWorldFrame(a,I.ni,I.ni),He.vectorToWorldFrame(a,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}M.length=0}planeTrimesh(e,t,i,r,s,a,n,c,l,u,p){const h=new w,f=Pf;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const m=new w;m.copy(h),He.pointToWorldFrame(r,a,m,h);const d=Df;if(h.vsub(i,d),f.dot(d)<=0){if(p)return!0;const v=this.createContactEquation(n,c,e,t,l,u);v.ni.copy(f);const x=If;f.scale(d.dot(f),x),h.vsub(x,x),v.ri.copy(x),v.ri.vsub(n.position,v.ri),v.rj.copy(h),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Bi=new w,vr=new w,xr=new w,Af=new w,Cf=new w,Lf=new at,Rf=new at,Pf=new w,Df=new w,If=new w,Ff=new w,zf=new w;new w;const kf=new w,Nf=new w,Bf=new w,Of=new w,Gf=new w,Wf=new w,Uf=new w,Hf=new w,Vf=new w,jf=new w,qf=new w,Xf=new Ft,Yf=[],bs=new w,ro=new w,$f=new w,Zf=new w,Jf=new w;function Kf(o,e,t){let i=null;const r=o.length;for(let s=0;s!==r;s++){const a=o[s],n=$f;o[(s+1)%r].vsub(a,n);const c=Zf;n.cross(e,c);const l=Jf;t.vsub(a,l);const u=c.dot(l);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const ws=new w,Qf=new w,eg=new w,tg=new w,ig=[new w,new w,new w,new w,new w,new w],rg=new w,sg=new w,ng=new w,ag=new w,og=new w,lg=new w,cg=new w,ug=new w,hg=new w,dg=new w,pg=new w,mg=new w,fg=new w,gg=new w;new w;new w;const vg=new w,xg=new w,yg=new w,_g=new w,bg=new w,wg=new w,Mg=new w,Sg=new w,Eg=new w,Tg=new w,so=new at,Ag=new w;new w;const Cg=new w,no=new w,Lg=new w,Rg=new w,Pg=new w,Dg=[0],Ig=new w,Fg=new w;class ao{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),r=this.current;let s=0;for(;i>r[s];)s++;if(i!==r[s]){for(let a=r.length-1;a>=s;a--)r[a+1]=r[a];r[s]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,r=this.previous,s=i.length,a=r.length;let n=0;for(let c=0;c<s;c++){let l=!1;const u=i[c];for(;u>r[n];)n++;l=u===r[n],l||oo(e,u)}n=0;for(let c=0;c<a;c++){let l=!1;const u=r[c];for(;u>i[n];)n++;l=i[n]===u,l||oo(t,u)}}}function oo(o,e){o.push((e&4294901760)>>16,e&65535)}const Sn=(o,e)=>o<e?`${o}-${e}`:`${e}-${o}`;class zg{constructor(){this.data={keys:[]}}get(e,t){const i=Sn(e,t);return this.data[i]}set(e,t,i){const r=Sn(e,t);this.get(e,t)||this.data.keys.push(r),this.data[r]=i}delete(e,t){const i=Sn(e,t),r=this.data.keys.indexOf(i);r!==-1&&this.data.keys.splice(r,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class kg extends Ko{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Qo,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new _f,this.constraints=[],this.narrowphase=new Tf(this),this.collisionMatrix=new qa,this.collisionMatrixPrevious=new qa,this.bodyOverlapKeeper=new ao,this.shapeOverlapKeeper=new ao,this.contactmaterials=[],this.contactMaterialTable=new zg,this.defaultMaterial=new $i("default"),this.defaultContactMaterial=new Yi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof Ds?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,r){return i===void 0&&(i={}),i.mode=nt.ALL,i.from=e,i.to=t,i.callback=r,En.intersectWorld(this,i)}raycastAny(e,t,i,r){return i===void 0&&(i={}),i.mode=nt.ANY,i.from=e,i.to=t,i.result=r,En.intersectWorld(this,i)}raycastClosest(e,t,i,r){return i===void 0&&(i={}),i.mode=nt.CLOSEST,i.from=e,i.to=t,i.result=r,En.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof le&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,r=i.indexOf(e);if(r!==-1){i.splice(r,1);for(let s=0;s!==i.length;s++)i[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const r=t[i].shapes;for(let s=0;s<r.length;s++){const a=r[s];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=lt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const r=i-this.lastCallTime;this.step(e,r,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const r=lt.now();let s=0;for(;this.accumulator>=e&&s<i&&(this.internalStep(e),this.accumulator-=e,s++,!(lt.now()-r>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let n=0;n!==this.bodies.length;n++){const c=this.bodies[n];c.previousPosition.lerp(c.position,a,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,a,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=Wg,r=Ug,s=this.bodies.length,a=this.bodies,n=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,p=le.DYNAMIC;let h=-1/0;const f=this.constraints,g=Gg;c.length();const m=c.x,d=c.y,v=c.z;let x=0;for(l&&(h=lt.now()),x=0;x!==s;x++){const O=a[x];if(O.type===p){const z=O.force,C=O.mass;z.x+=C*m,z.y+=C*d,z.z+=C*v}}for(let O=0,z=this.subsystems.length;O!==z;O++)this.subsystems[O].update();l&&(h=lt.now()),i.length=0,r.length=0,this.broadphase.collisionPairs(this,i,r),l&&(u.broadphase=lt.now()-h);let b=f.length;for(x=0;x!==b;x++){const O=f[x];if(!O.collideConnected)for(let z=i.length-1;z>=0;z-=1)(O.bodyA===i[z]&&O.bodyB===r[z]||O.bodyB===i[z]&&O.bodyA===r[z])&&(i.splice(z,1),r.splice(z,1))}this.collisionMatrixTick(),l&&(h=lt.now());const y=Og,M=t.length;for(x=0;x!==M;x++)y.push(t[x]);t.length=0;const S=this.frictionEquations.length;for(x=0;x!==S;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,r,this,t,y,this.frictionEquations,g),l&&(u.narrowphase=lt.now()-h),l&&(h=lt.now()),x=0;x<this.frictionEquations.length;x++)n.addEquation(this.frictionEquations[x]);const L=t.length;for(let O=0;O!==L;O++){const z=t[O],C=z.bi,F=z.bj,I=z.si,j=z.sj;let q;if(C.material&&F.material?q=this.getContactMaterial(C.material,F.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,C.material&&F.material&&(C.material.friction>=0&&F.material.friction>=0&&C.material.friction*F.material.friction,C.material.restitution>=0&&F.material.restitution>=0&&(z.restitution=C.material.restitution*F.material.restitution)),n.addEquation(z),C.allowSleep&&C.type===le.DYNAMIC&&C.sleepState===le.SLEEPING&&F.sleepState===le.AWAKE&&F.type!==le.STATIC){const N=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),U=F.sleepSpeedLimit**2;N>=U*2&&(C.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===le.DYNAMIC&&F.sleepState===le.SLEEPING&&C.sleepState===le.AWAKE&&C.type!==le.STATIC){const N=C.velocity.lengthSquared()+C.angularVelocity.lengthSquared(),U=C.sleepSpeedLimit**2;N>=U*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(C,F,!0),this.collisionMatrixPrevious.get(C,F)||(Ir.body=F,Ir.contact=z,C.dispatchEvent(Ir),Ir.body=C,F.dispatchEvent(Ir)),this.bodyOverlapKeeper.set(C.id,F.id),this.shapeOverlapKeeper.set(I.id,j.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=lt.now()-h,h=lt.now()),x=0;x!==s;x++){const O=a[x];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(b=f.length,x=0;x!==b;x++){const O=f[x];O.update();for(let z=0,C=O.equations.length;z!==C;z++){const F=O.equations[z];n.addEquation(F)}}n.solve(e,this),l&&(u.solve=lt.now()-h),n.removeAllEquations();const _=Math.pow;for(x=0;x!==s;x++){const O=a[x];if(O.type&p){const z=_(1-O.linearDamping,e),C=O.velocity;C.scale(z,C);const F=O.angularVelocity;if(F){const I=_(1-O.angularDamping,e);F.scale(I,F)}}}this.dispatchEvent(Bg),l&&(h=lt.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(x=0;x!==s;x++)a[x].integrate(e,E,D);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=lt.now()-h),this.stepnumber+=1,this.dispatchEvent(Ng);let k=!0;if(this.allowSleep)for(k=!1,x=0;x!==s;x++){const O=a[x];O.sleepTick(this.time),O.sleepState!==le.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(mi,fi),e){for(let s=0,a=mi.length;s<a;s+=2)Fr.bodyA=this.getBodyById(mi[s]),Fr.bodyB=this.getBodyById(mi[s+1]),this.dispatchEvent(Fr);Fr.bodyA=Fr.bodyB=null}if(t){for(let s=0,a=fi.length;s<a;s+=2)zr.bodyA=this.getBodyById(fi[s]),zr.bodyB=this.getBodyById(fi[s+1]),this.dispatchEvent(zr);zr.bodyA=zr.bodyB=null}mi.length=fi.length=0;const i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(mi,fi),i){for(let s=0,a=mi.length;s<a;s+=2){const n=this.getShapeById(mi[s]),c=this.getShapeById(mi[s+1]);gi.shapeA=n,gi.shapeB=c,n&&(gi.bodyA=n.body),c&&(gi.bodyB=c.body),this.dispatchEvent(gi)}gi.bodyA=gi.bodyB=gi.shapeA=gi.shapeB=null}if(r){for(let s=0,a=fi.length;s<a;s+=2){const n=this.getShapeById(fi[s]),c=this.getShapeById(fi[s+1]);vi.shapeA=n,vi.shapeB=c,n&&(vi.bodyA=n.body),c&&(vi.bodyB=c.body),this.dispatchEvent(vi)}vi.bodyA=vi.bodyB=vi.shapeA=vi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const r=e[i];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new Ft;const En=new nt,lt=globalThis.performance||{};if(!lt.now){let o=Date.now();lt.timing&&lt.timing.navigationStart&&(o=lt.timing.navigationStart),lt.now=()=>Date.now()-o}new w;const Ng={type:"postStep"},Bg={type:"preStep"},Ir={type:le.COLLIDE_EVENT_NAME,body:null,contact:null},Og=[],Gg=[],Wg=[],Ug=[],mi=[],fi=[],Fr={type:"beginContact",bodyA:null,bodyB:null},zr={type:"endContact",bodyA:null,bodyB:null},gi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},vi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class lo{constructor(e){typeof e=="object"&&(e=e.notation),this.set=[],this.setkeys=[],this.setid=0,this.groups=[],this.totalDice=0,this.op="",this.constant=null,this.result=[],this.error=!1,this.boost=1,this.notation="",this.vectors=[],(!e||e=="0")&&(this.error=!0),this.parseNotation(e)}parseNotation(e){e&&(e=e.split(" ").join(""));const t=this.notation.length>0?"+":"";this.notation+=t+e;let i=e.split(","),r=[];for(let h=0;h<i.length;h++){let f=i[h].split("@");r.push(f[1]),i[h]=f[0]}let s=new RegExp(/(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/,"i"),a=new RegExp(/(\b)*(\-\d+|\d+)(\b)*/,"gi"),n,c=0,l=30,u=0,p=0;for(;!this.error&&i[i.length-1].length>0&&(n=s.exec(i[p]))!==null&&c<l;){c++,i[p].length===0&&p++,i[p]=i[p].substring(n[0].length);let h=n[1],f=n[3],g=n[4],m=n[5]||"",d=n[6]||"",v=!0;c==1&&i[p].length==0&&!g&&h&&f?(g="d20",this.op=h,this.constant=parseInt(f),f=1):c>1&&i[p].length==0&&!g&&(this.op=h,this.constant=parseInt(f),v=!1),v&&this.addSet(f,g,p,u,m,d,h)}for(let h=0;h<r.length;h++)!this.error&&r[h]&&(n=r[h].match(a))!==null&&this.result.push(...n)}stringify(e=!0){let t="";if(this.set.length<1)return t;for(let i=0;i<this.set.length;i++){let r=this.set[i];t+=i>0&&r.op?r.op:"",t+=r.num+r.type,r.func&&(t+="{",t+=r.func?r.func:"",t+=r.args?","+(Array.isArray(r.args)?r.args.join(","):r.args):"",t+="}")}return t+=this.constant?this.op+""+Math.abs(this.constant):"",e&&this.result&&this.result.length>0&&(t+="@"+this.result.join(",")),this.boost>1&&(t+="!".repeat(this.boost/4)),t}addSet(e,t,i=0,r=0,s="",a="",n="+"){e=Math.abs(parseInt(e||1));let c=n+""+t+i+r+s+a,l=this.setkeys[c]!=null,u={};if(l&&(u=this.set[this.setkeys[c]-1]),e>0){if(u.num=l?e+u.num:e,u.type=t,u.sid=this.setid,u.gid=i,u.glvl=r,s&&(u.func=s),a&&(u.args=a),n&&(u.op=n),u.type==="")return;l?this.set[this.setkeys[c]-1]=u:this.setkeys[c]=this.set.push(u)}l||++this.setid}static mergeNotation(e,t){return{...e,constant:e.constant+t.constant,notation:e.notation+"+"+t.notation,set:[...e.set,...t.set],totalDice:e.vectors.length+t.vectors.length,vectors:[...e.vectors,...t.vectors]}}}const Tn={d2:{name:"d2",labels:["1","2"],values:[1,2],inertia:8,mass:400,scale:.9,system:"dweird"},dc:{type:"d2",name:"Coin",labels:["textures/silvercoin/tail.png","textures/silvercoin/heads.png"],setBumpMaps:["textures/silvercoin/tail_bump.png","textures/silvercoin/heads_bump.png"],values:[0,1],inertia:8,mass:400,scale:.9,colorset:"coin_silver"},d1:{name:"One-sided Dice",type:"d6",labels:["1"],values:[1,1],scale:.9,system:"dweird"},d3:{name:"Three-Sided Dice",type:"d6",labels:["1","2","3"],values:[1,3],scale:.9,system:"dweird"},df:{name:"Fudge Dice",type:"d6",labels:["-","0","+"],values:[-1,1],scale:.9,system:"dweird"},d4:{name:"Four-Sided Dice",labels:["1","2","3","4"],values:[1,4],inertia:5,scale:1.2},d6:{name:"Six-Sided Dice (Numbers)",labels:["1","2","3","4","5","6"],values:[1,6],scale:.9},dpip:{name:"Six-Sided Dice (Pips)",type:"d6",labels:[`   
 ⬤ 
   `,`⬤  
   
  ⬤`,`⬤  
 ⬤ 
  ⬤`,`⬤ ⬤
   
⬤ ⬤`,`⬤ ⬤
 ⬤ 
⬤ ⬤`,`⬤ ⬤
⬤ ⬤
⬤ ⬤`],values:[1,6],scale:.9,font:"monospace"},dsex:{name:"Sex-Sided Emoji Dice",type:"d6",labels:["🍆","🍑","👌","💦","🙏","💥"],values:[1,6],scale:.9,display:"labels",system:"dweird"},dpoker:{name:"Poker Dice (9-Ace)",type:"d6",labels:["A","9","10","J","Q","K"],values:[1,6],scale:.9,display:"labels",system:"dweird",font:"Times New Roman"},dspanpoker:{name:"Spanish Poker Dice (7-Ace)",type:"d8",labels:["A","7","8","9","10","J","Q","K"],values:[1,8],display:"labels",system:"dweird",font:"Times New Roman"},disotope:{name:"Radioactive Twelve-Sided Dice",type:"d12",labels:["","","","","","","","","","","","☢️"],values:[0,0,0,0,0,0,0,0,0,0,0,1],mass:350,inertia:8,scale:.9,system:"dweird"},dsuit:{name:"Four-Suited Dice",type:"d4",labels:["♠️","♥️","♦️","♣️"],values:[1,4],inertia:5,scale:1.2,display:"labels",system:"dweird"},d8:{name:"Eight-Sided Dice",labels:["1","2","3","4","5","6","7","8"],values:[1,8]},d10:{name:"Ten-Sided Dice (Single Digit)",labels:["1","2","3","4","5","6","7","8","9","0"],values:[1,10],mass:350,inertia:9,scale:.9},d100:{name:"Ten-Sided Dice (Tens Digit)",type:"d10",labels:["10","20","30","40","50","60","70","80","90","00"],values:[10,100,10],mass:350,inertia:9,scale:.9},d12:{name:"Twelve-Sided Dice",labels:["1","2","3","4","5","6","7","8","9","10","11","12"],values:[1,12],mass:350,inertia:8,scale:.9},d20:{name:"Twenty-Sided Dice",labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],values:[1,20],mass:400,inertia:6},dabi:{name:"Star Wars RPG: Ability Dice",type:"d8",labels:["s","a",`s
a`,`s
s`,"a","s",`a
a`,""],values:[1,8],font:"SWRPG-Symbol-Regular",color:"#00FF00",colorset:"swrpg_abi",display:"labels",system:"swrpg"},ddif:{name:"Star Wars RPG: Difficulty Dice",type:"d8",labels:["t","f",`f
t`,"t","",`t
t`,`f
f`,"t"],values:[1,8],font:"SWRPG-Symbol-Regular",color:"#8000FC",colorset:"swrpg_dif",display:"labels",system:"swrpg"},dpro:{name:"Star Wars RPG: Proficiency Dice",type:"d12",labels:[`a
a`,"a",`a
a`,"x","s",`s
a`,"s",`s
a`,`s
s`,`s
a`,`s
s`,""],values:[1,12],mass:350,inertia:8,scale:.9,font:"SWRPG-Symbol-Regular",color:"#FFFF00",colorset:"swrpg_pro",display:"labels",system:"swrpg"},dcha:{name:"Star Wars RPG: Challenge Dice",type:"d12",labels:[`t
t`,"t",`t
t`,"t",`t
f`,"f",`t
f`,"f",`f
f`,"y",`f
f`,""],values:[1,12],mass:350,inertia:8,scale:.9,font:"SWRPG-Symbol-Regular",color:"#FF0000",colorset:"swrpg_cha",display:"labels",system:"swrpg"},dfor:{name:"Star Wars RPG: Force Dice",type:"d12",labels:["z",`Z
Z`,"z",`Z
Z`,"z",`Z
Z`,"z","Z","z","Z","z",`z
z`],values:[1,12],mass:350,inertia:8,scale:.9,font:"SWRPG-Symbol-Regular",color:"#FFFFFF",colorset:"swrpg_for",display:"labels",system:"swrpg"},dboo:{name:"Star Wars RPG: Boost Dice",type:"d6",labels:[`s  
  a`,`a  
  a`,"s","a","",""],values:[1,6],scale:.9,font:"SWRPG-Symbol-Regular",color:"#00FFFF",colorset:"swrpg_boo",display:"labels",system:"swrpg"},dset:{name:"Star Wars RPG: Setback Dice",type:"d6",labels:["","t","f"],values:[1,3],scale:.9,font:"SWRPG-Symbol-Regular",color:"#111111",colorset:"swrpg_set",display:"labels",system:"swrpg"},swar:{name:"Star Wars Armada: Red Attack Dice",type:"d8",labels:["F","F",`F
F`,"E","E","G","",""],values:[1,8],font:"Armada-Symbol-Regular",color:"#FF0000",colorset:"swa_red",display:"labels",system:"swarmada"},swab:{name:"Star Wars Armada: Blue Attack Dice",type:"d8",labels:["F","F","F","F","E","E","G","G"],values:[1,8],font:"Armada-Symbol-Regular",color:"#0000FF",colorset:"swa_blue",display:"labels",system:"swarmada"},swak:{name:"Star Wars Armada: Black Attack Dice",type:"d8",labels:["F","F","F","F",`F
E`,`F
E`,"",""],values:[1,8],font:"Armada-Symbol-Regular",color:"#111111",colorset:"swa_black",display:"labels",system:"swarmada"},xwatk:{name:"Star Wars X-Wing: Red Attack Dice",type:"d8",labels:["c","d","d","d","f","f","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#FF0000",colorset:"xwing_red",display:"labels",system:"xwing"},xwdef:{name:"Star Wars X-Wing: Green Defense Dice",type:"d8",labels:["e","e","e","f","f","","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#00FF00",colorset:"xwing_green",display:"labels",system:"xwing"},swlar:{name:"Star Wars Legion: Red Attack Dice",type:"d8",labels:["h","h","h","h","h","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_atkred",display:"labels",system:"legion"},swlab:{name:"Star Wars Legion: Black Attack Dice",type:"d8",labels:["h","h","h","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#111111",colorset:"swl_atkblack",display:"labels",system:"legion"},swlaw:{name:"Star Wars Legion: White Attack Dice",type:"d8",labels:["h","","","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_atkwhite",display:"labels",system:"legion"},swldr:{name:"Star Wars Legion: Red Defense Dice",type:"d6",labels:["s","s","s","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_defred",display:"labels",system:"legion"},swldw:{name:"Star Wars Legion: White Defense Dice",type:"d6",labels:["s","","","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_defwhite",display:"labels",system:"legion"}},Ot={d4:{vertices:[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],faces:[[1,0,2,1],[0,1,3,2],[0,3,2,3],[1,2,3,4]]},d6:{vertices:[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],faces:[[0,3,2,1,1],[1,2,6,5,2],[0,1,5,4,3],[3,7,6,2,4],[0,4,7,3,5],[4,5,6,7,6]]},d8:{vertices:[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],faces:[[0,2,4,1],[0,4,3,2],[0,3,5,3],[0,5,2,4],[1,3,4,5],[1,4,2,6],[1,2,5,7],[1,5,3,8]]},d10:{vertices:[[1,0,-.105],[.809,.5877,.105],[.309,.951,-.105],[-.309,.951,.105],[-.809,.5877,-.105],[-1,0,.105],[-.809,-.587,-.105],[-.309,-.951,.105],[.309,-.951,-.105],[.809,-.5877,.105],[0,0,-1],[0,0,1]],faces:[[5,6,7,11,0],[4,3,2,10,1],[1,2,3,11,2],[0,9,8,10,3],[7,8,9,11,4],[8,7,6,10,5],[9,0,1,11,6],[2,1,0,10,7],[3,4,5,11,8],[6,5,4,10,9]]},d12:{vertices:[[0,.618,1.618],[0,.618,-1.618],[0,-.618,1.618],[0,-.618,-1.618],[1.618,0,.618],[1.618,0,-.618],[-1.618,0,.618],[-1.618,0,-.618],[.618,1.618,0],[.618,-1.618,0],[-.618,1.618,0],[-.618,-1.618,0],[1,1,1],[1,1,-1],[1,-1,1],[1,-1,-1],[-1,1,1],[-1,1,-1],[-1,-1,1],[-1,-1,-1]],faces:[[2,14,4,12,0,1],[15,9,11,19,3,2],[16,10,17,7,6,3],[6,7,19,11,18,4],[6,18,2,0,16,5],[18,11,9,14,2,6],[1,17,10,8,13,7],[1,13,5,15,3,8],[13,8,12,4,5,9],[5,4,14,9,15,10],[0,12,8,10,16,11],[3,19,7,17,1,12]]},d20:{vertices:[[-1,1.618,0],[1,1.618,0],[-1,-1.618,0],[1,-1.618,0],[0,-1,1.618],[0,1,1.618],[0,-1,-1.618],[0,1,-1.618],[1.618,0,-1],[1.618,0,1],[-1.618,0,-1],[-1.618,0,1]],faces:[[0,11,5,1],[0,5,1,2],[0,1,7,3],[0,7,10,4],[0,10,11,5],[1,5,9,6],[5,11,4,7],[11,10,2,8],[10,7,6,9],[7,1,8,10],[3,9,4,11],[3,4,2,12],[3,2,6,13],[3,6,8,14],[3,8,9,15],[4,9,5,16],[2,4,11,17],[6,2,10,18],[8,6,7,19],[9,8,1,20]]}},Hg={name:"",scale:1,font:"Arial",color:"",labels:[],valueMap:[],values:[],normals:[],mass:300,inertia:13,geometry:null,display:"values",system:"d20"};class Vg{constructor(e){if(!Tn.hasOwnProperty(e))return console.error("dice type unavailable");Object.assign(this,Hg,Tn[e]),this.shape=Tn[e].type||e,this.type=e,this.setLabels(this.labels),this.setValues(this.values[0],this.values[1],this.values[2]),this.setValueMap(this.valueMap),this.bumpMaps&&this.setBumpMaps(this.bumpMaps)}setValues(e=1,t=20,i=1){this.values=this.range(e,t,i)}setValueMap(e){for(let t=0;t<this.values.length;t++){let i=this.values[t];e[i]!=null&&(this.valueMap[i]=e[i])}}registerFaces(e,t="labels"){let i;if(t=="labels"?i=this.labels:i=this.normals,i.unshift(""),["d2","d10"].includes(this.shape)||i.unshift(""),this.shape=="d4"){let r=e[0],s=e[1],a=e[2],n=e[3];this.labels=[[[],[0,0,0],[s,n,a],[r,a,n],[s,r,n],[r,s,a]],[[],[0,0,0],[s,a,n],[a,r,n],[s,n,r],[a,s,r]],[[],[0,0,0],[n,a,s],[a,n,r],[n,s,r],[a,r,s]],[[],[0,0,0],[n,s,a],[r,n,a],[n,r,s],[r,a,s]]]}else Array.prototype.push.apply(i,e)}setLabels(e){this.loadTextures(e,this.registerFaces.bind(this),"labels")}setBumpMaps(e){this.loadTextures(e,this.registerFaces.bind(this),"bump")}loadTextures(e,t,i){let r=0,s=e.length,a=/\.(PNG|JPG|GIF|WEBP)$/i,n=Array(e.length),c=!1;for(let l=0;l<s;l++){if(e[l]==""||!e[l].match(a)){n[l]=e[l],++r;continue}c=!0,n[l]=new Image,n[l].onload=function(){++r>=s&&t(n,i)},n[l].src=e[l]}c||t(n,i)}range(e,t,i=1){for(var r=[e],s=e;s<t;)r.push(s+=i||1);return r}}const jg={none:{name:"Plastic"},perfectmetal:{name:"Perfect Metal",color:14540253,roughness:0,metalness:1,envMapIntensity:1},metal:{name:"Metal",color:14540253,roughness:.5,metalness:.6,envMapIntensity:1},wood:{name:"Wood",color:14540253,roughness:.9,metalness:0,envMapIntensity:1},glass:{name:"Glass",color:14540253,roughness:.1,metalness:0,envMapIntensity:1}},qg={baseScale:100,bumpMapping:!0},Nr=class{constructor(o){this.geometries={},this.materials_cache={},this.cache_hits=0,this.cache_misses=0,this.label_color="",this.dice_color="",this.edge_color="",this.label_outline="",this.dice_texture="",this.dice_material="",this.material_options={specular:16777215,color:11908533,shininess:5,flatShading:!0},Object.assign(this,qg,o)}updateConfig(o={}){Object.assign(this,o),o.scale&&this.scaleGeometry()}setBumpMapping(o){this.bumpMapping=o,this.materials_cache={}}create(o){let e=this.get(o);if(!e)return null;let t=this.geometries[o];if(t||(t=this.createGeometry(e.shape,e.scale*this.baseScale),this.geometries[o]=t),!t)return null;this.setMaterialInfo();let i=new ni(t,this.createMaterials(e,this.baseScale/2,1));switch(i.result=[],i.shape=e.shape,i.rerolls=0,i.resultReason="natural",i.mass=e.mass,i.getFaceValue=function(){let r=this.resultReason,s=new G(0,0,this.shape=="d4"?-1:1),a,n=Math.PI*2,c=this.geometry.getAttribute("normal").array;for(let g=0,m=this.geometry.groups.length;g<m;++g){let d=this.geometry.groups[g];if(d.materialIndex==0)continue;let v=g*9,x=new G(c[v],c[v+1],c[v+2]).clone().applyQuaternion(this.body.quaternion).angleTo(s);x<n&&(n=x,a=d)}let l=a.materialIndex-1,u=2;const p=Nr.dice[this.notation.type];if(this.shape=="d4"){let g=l-1==0?5:l;return{value:l,label:p.labels[l-1][g][0],reason:r}}["d10","d2"].includes(this.shape)&&(l+=1,u-=1);let h=p.values[(l-1)%p.values.length],f=p.labels[(l-1)%(p.labels.length-2)+u];return{value:h,label:f,reason:r}},i.storeRolledValue=function(r){this.resultReason=r||this.resultReason,this.result.push(this.getFaceValue())},i.getLastValue=function(){return!this.result||this.result.length<1?{value:void 0,label:"",reason:""}:this.result[this.result.length-1]},i.ignoreLastValue=function(r){let s=this.getLastValue();s.value!==void 0&&(s.ignore=r,this.setLastValue(s))},i.setLastValue=function(r){if(!(!this.result||this.result.length<1)&&!(!r||r.length<1))return this.result[this.result.length-1]=r},e.color&&(i.material[0].color=new Be(e.color),i.material[0].emissive=new Be(e.color),i.material[0].emissiveIntensity=1,i.material[0].needsUpdate=!0),e.values.length){case 1:return this.fixmaterials(i,1);case 2:return this.fixmaterials(i,2);case 3:return this.fixmaterials(i,3);default:return i}}get(o){let e;return Nr.dice.hasOwnProperty(o)?e=Nr.dice[o]:(e=new Vg(o),Nr.dice[o]=e),e}getGeometry(o){return this.geometries[o]}scaleGeometry(){}createMaterials(o,e,t,i=!0,r=0){let s=[],a=o.labels;o.shape=="d4"&&(a=o.labels[r],e=this.baseScale/2,t=this.baseScale*2);for(var n=0;n<a.length;++n){var c;this.dice_material!="none"?(c=new um(jg[this.dice_material]),c.envMapIntensity=0):c=new hm(this.material_options);let l;if(n==0){let u={name:"none"};this.dice_texture_rand.composite!="source-over"&&(u=this.dice_texture_rand),l=this.createTextMaterial(o,a,n,e,t,u,this.label_color_rand,this.label_outline_rand,this.edge_color_rand,i),c.map=l.composite}else if(l=this.createTextMaterial(o,a,n,e,t,this.dice_texture_rand,this.label_color_rand,this.label_outline_rand,this.dice_color_rand,i),c.map=l.composite,this.bumpMapping){{let u=.75;e>35&&(u=1),e>40&&(u=2.5),e>45&&(u=4),c.bumpScale=u}l.bump&&(c.bumpMap=l.bump),o.shape!="d4"&&o.normals[n]&&(c.bumpMap=new It(o.normals[n]),c.bumpScale=4,c.bumpMap.needsUpdate=!0)}c.opacity=1,c.transparent=!0,c.depthTest=!1,c.needUpdate=!0,s.push(c)}return s}createTextMaterial(o,e,t,i,r,s,a,n,c,l){if(e[t]===void 0)return null;s=s||this.dice_texture_rand,a=a||this.label_color_rand,n=n||this.label_outline_rand,c=c||this.dice_color_rand,l=l??!0;let u=e[t],p=!1,h=u;u instanceof HTMLImageElement?h=u.src:u instanceof Array&&u.forEach(L=>{h+=L.src});let f=o.type+h+t+s.name+a+n+c;if(o.shape=="d4"&&(f=o.type+h+s.name+a+n+c),l&&this.materials_cache[f]!=null)return this.cache_hits++,this.materials_cache[f];let g=document.createElement("canvas"),m=g.getContext("2d",{alpha:!0});m.globalAlpha=0,m.clearRect(0,0,g.width,g.height);let d=document.createElement("canvas"),v=d.getContext("2d",{alpha:!0});v.globalAlpha=0,v.clearRect(0,0,d.width,d.height);let x;if(o.shape=="d4"?x=this.calc_texture_size(i+r)*4:x=this.calc_texture_size(i+i*2*r)*4,g.width=g.height=x,d.width=d.height=x,m.fillStyle=c,m.fillRect(0,0,g.width,g.height),v.fillStyle="#FFFFFF",v.fillRect(0,0,d.width,d.height),s.texture&&s.name!=""&&s.name!="none"?(m.globalCompositeOperation=s.composite||"source-over",m.drawImage(s.texture,0,0,g.width,g.height),m.globalCompositeOperation="source-over",s.bump&&(v.globalCompositeOperation="source-over",v.drawImage(s.bump,0,0,g.width,g.height))):m.globalCompositeOperation="source-over",m.globalCompositeOperation="source-over",m.textAlign="center",m.textBaseline="middle",v.textAlign="center",v.textBaseline="middle",o.shape!="d4"){let L={d8:{even:-7.5,odd:-127.5},d10:{all:-6},d12:{all:5},d20:{all:-7.5}}[o.shape];if(L){let _;if(L.hasOwnProperty("all")?_=L.all:t>0&&t%2!=0?_=L.odd:_=L.even,_&&_!=0){var b=g.width/2,y=g.height/2;m.translate(b,y),m.rotate(_*(Math.PI/180)),m.translate(-b,-y),v.translate(b,y),v.rotate(_*(Math.PI/180)),v.translate(-b,-y)}}if(u instanceof HTMLImageElement)p=!0,m.drawImage(u,0,0,u.width,u.height,0,0,g.width,g.height);else{let _=x/(1+2*r),E=g.height/2+10,D=g.width/2;o.shape=="d10"?(_=_*.75,E=E*1.15-10):o.shape=="d20"&&(D=D*.98),m.font=_+"pt "+o.font,v.font=_+"pt "+o.font;let k=m.measureText("M").width*1.4,O=u.split(`
`);O.length>1&&(_=_/O.length,m.font=_+"pt "+o.font,v.font=_+"pt "+o.font,k=m.measureText("M").width*1.2,E-=k*O.length/2);for(let z=0,C=O.length;z<C;z++){let F=O[z].trim();n!="none"&&n!=c&&(m.strokeStyle=n,m.lineWidth=5,m.strokeText(O[z],D,E),v.strokeStyle="#000000",v.lineWidth=5,v.strokeText(O[z],D,E),(F=="6"||F=="9")&&(m.strokeText("  .",D,E),v.strokeText("  .",D,E))),m.fillStyle=a,m.fillText(O[z],D,E),v.fillStyle="#000000",v.fillText(O[z],D,E),(F=="6"||F=="9")&&(m.fillText("  .",D,E),v.fillText("  .",D,E)),E+=k*1.5}}}else{var b=g.width/2,y=g.height/2;m.font=x/128*24+"pt "+o.font,v.font=x/128*24+"pt "+o.font;for(let E=0;E<u.length;E++){if(u[E]instanceof HTMLImageElement){let D=u[E].width/g.width;m.drawImage(u[E],0,0,u[E].width,u[E].height,100/D,25/D,60/D,60/D)}else n!="none"&&n!=c&&(m.strokeStyle=n,m.lineWidth=5,m.strokeText(u[E],b,y-x*.3),v.strokeStyle="#000000",v.lineWidth=5,v.strokeText(u[E],b,y-x*.3)),m.fillStyle=a,m.fillText(u[E],b,y-x*.3),v.fillStyle="#000000",v.fillText(u[E],b,y-x*.3);m.translate(b,y),m.rotate(Math.PI*2/3),m.translate(-b,-y),v.translate(b,y),v.rotate(Math.PI*2/3),v.translate(-b,-y)}}var M=new Oa(g),S;return p?S=null:S=new Oa(d),l&&(this.cache_misses++,this.materials_cache[f]={composite:M,bump:S}),{composite:M,bump:S}}applyColorSet(o){var e;this.colordata=o,this.label_color=o.foreground,this.dice_color=o.background,this.label_outline=o.outline,this.dice_texture=o.texture,this.dice_material=((e=o==null?void 0:o.texture)==null?void 0:e.material)||"none",this.edge_color=o.hasOwnProperty("edge")?o.edge:o.background}setMaterialInfo(o=""){let e=this.colordata,t=this.dice_texture,i=this.dice_material;if(this.dice_color_rand="",this.label_color_rand="",this.label_outline_rand="",this.dice_texture_rand="",this.dice_material_rand="",this.edge_color_rand="",Array.isArray(this.dice_color)){var r=Math.floor(Math.random()*this.dice_color.length);Array.isArray(this.label_color)&&this.label_color.length==this.dice_color.length&&(this.label_color_rand=this.label_color[r],Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[r])),Array.isArray(this.dice_texture)&&this.dice_texture.length==this.dice_color.length&&(this.dice_texture_rand=this.dice_texture[r],this.dice_material_rand=this.dice_texture_rand.material),Array.isArray(this.edge_color)&&this.edge_color.length==this.dice_color.length&&(this.edge_color_rand=this.edge_color[r]),this.dice_color_rand=this.dice_color[r]}else this.dice_color_rand=this.dice_color;if(this.edge_color_rand=="")if(Array.isArray(this.edge_color)){var r=Math.floor(Math.random()*this.edge_color.length);this.edge_color_rand=this.edge_color[r]}else this.edge_color_rand=this.edge_color;if(this.label_color_rand==""&&Array.isArray(this.label_color)){var r=this.label_color[Math.floor(Math.random()*this.label_color.length)];Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[r]),this.label_color_rand=this.label_color[r]}else this.label_color_rand==""&&(this.label_color_rand=this.label_color);if(this.label_outline_rand==""&&Array.isArray(this.label_outline)){var r=this.label_outline[Math.floor(Math.random()*this.label_outline.length)];this.label_outline_rand=this.label_outline[r]}else this.label_outline_rand==""&&(this.label_outline_rand=this.label_outline);this.dice_texture_rand==""&&Array.isArray(this.dice_texture)?(this.dice_texture_rand=this.dice_texture[Math.floor(Math.random()*this.dice_texture.length)],this.dice_material_rand=this.dice_texture_rand.material||this.dice_material):this.dice_texture_rand==""&&(this.dice_texture_rand=this.dice_texture,this.dice_material_rand=this.dice_texture_rand.material||this.dice_material),this.dice_material_rand==""&&Array.isArray(this.dice_material)?this.dice_material_rand=this.dice_material[Math.floor(Math.random()*this.dice_material.length)]:this.dice_material_rand==""&&(this.dice_material_rand=this.dice_material),this.colordata&&this.colordata.id!=e.id&&this.applyColorSet(e,t,i)}calc_texture_size(o){return Math.pow(2,Math.floor(Math.log(o)/Math.log(2)))}createGeometry(o,e,t=!1){const i=t?"create_shape":"create_geom";switch(o){case"d2":var r=new qn(1*e,1*e,.1*e,32);return r.cannon_shape=new xf(1*e,1*e,.1*e,8),r;case"d4":return this[i](Ot.d4.vertices,Ot.d4.faces,e,-.1,Math.PI*7/6,.96);case"d6":return this[i](Ot.d6.vertices,Ot.d6.faces,e,.1,Math.PI/4,.96);case"d8":return this[i](Ot.d8.vertices,Ot.d8.faces,e,0,-Math.PI/4/2,.965);case"d10":return this[i](Ot.d10.vertices,Ot.d10.faces,e,.3,Math.PI,.945);case"d12":return this[i](Ot.d12.vertices,Ot.d12.faces,e,.2,-Math.PI/4/2,.968);case"d20":return this[i](Ot.d20.vertices,Ot.d20.faces,e,-.2,-Math.PI/4/2,.955);default:return console.error(`Geometry for ${o} is not available`),null}}fixmaterials(o,e){for(let i=0,r=o.geometry.groups.length;i<r;++i){var t=o.geometry.groups[i].materialIndex-2;if(t<e)continue;let s=t%e;o.geometry.groups[i].materialIndex=s+2}return o.geometry.elementsNeedUpdate=!0,o}create_shape(o,e,t){for(var i=new Array(o.length),r=0;r<o.length;++r)i[r]=new G().fromArray(o[r]).normalize();for(var s=new Array(o.length),a=new Array(e.length),r=0;r<i.length;++r){var n=i[r];s[r]=new w(n.x*t,n.y*t,n.z*t)}for(var r=0;r<e.length;++r)a[r]=e[r].slice(0,e[r].length-1);return new Xi({vertices:s,faces:a})}make_geom(o,e,t,i,r){let s=new oi;for(let f=0;f<o.length;++f)o[f]=o[f].multiplyScalar(t);let a=[];const n=[],c=[],l=new G,u=new G;let p,h=0;for(let f=0;f<e.length;++f){let g=e[f],m=g.length-1,d=Math.PI*2/m;p=g[m]+1;for(let x=0;x<m-2;++x)a.push(...o[g[0]].toArray()),a.push(...o[g[x+1]].toArray()),a.push(...o[g[x+2]].toArray()),l.subVectors(o[g[x+2]],o[g[x+1]]),u.subVectors(o[g[0]],o[g[x+1]]),l.cross(u),l.normalize(),n.push(...l.toArray()),n.push(...l.toArray()),n.push(...l.toArray()),c.push((Math.cos(r)+1+i)/2/(1+i),(Math.sin(r)+1+i)/2/(1+i)),c.push((Math.cos(d*(x+1)+r)+1+i)/2/(1+i),(Math.sin(d*(x+1)+r)+1+i)/2/(1+i)),c.push((Math.cos(d*(x+2)+r)+1+i)/2/(1+i),(Math.sin(d*(x+2)+r)+1+i)/2/(1+i));let v=(m-2)*3;for(let x=0;x<v/3;x++)s.addGroup(h,3,p),h+=3}return s.setAttribute("position",new yt(a,3)),s.setAttribute("normal",new yt(n,3)),s.setAttribute("uv",new yt(c,2)),s.boundingSphere=new Gr(new G,t),s}make_d10_geom(o,e,t,i,r){let s=new oi;for(let x=0;x<o.length;++x)o[x]=o[x].multiplyScalar(t);let a=[];const n=[],c=[],l=new G,u=new G;let p,h=0;for(let x=0;x<e.length;++x){let b=e[x],y=b.length-1,M=Math.PI*2/y;p=b[y]+1;var f=.65,g=.85,m=1-1*g,d=1-.895/1.105*g,v=1;for(let L=0;L<y-2;++L)a.push(...o[b[0]].toArray()),a.push(...o[b[L+1]].toArray()),a.push(...o[b[L+2]].toArray()),l.subVectors(o[b[L+2]],o[b[L+1]]),u.subVectors(o[b[0]],o[b[L+1]]),l.cross(u),l.normalize(),n.push(...l.toArray()),n.push(...l.toArray()),n.push(...l.toArray()),e[x][e[x].length-1]==-1||L>=2?(c.push((Math.cos(r)+1+i)/2/(1+i),(Math.sin(r)+1+i)/2/(1+i)),c.push((Math.cos(M*(L+1)+r)+1+i)/2/(1+i),(Math.sin(M*(L+1)+r)+1+i)/2/(1+i)),c.push((Math.cos(M*(L+2)+r)+1+i)/2/(1+i),(Math.sin(M*(L+2)+r)+1+i)/2/(1+i))):L==0?(c.push(.5-f/2,d),c.push(.5,m),c.push(.5+f/2,d)):L==1&&(c.push(.5-f/2,d),c.push(.5+f/2,d),c.push(.5,v));let S=(y-2)*3;for(let L=0;L<S/3;L++)s.addGroup(h,3,p),h+=3}return s.setAttribute("position",new yt(a,3)),s.setAttribute("normal",new yt(n,3)),s.setAttribute("uv",new yt(c,2)),s.boundingSphere=new Gr(new G,t),s}chamfer_geom(o,e,t){for(var i=[],r=[],s=new Array(o.length),a=0;a<o.length;++a)s[a]=[];for(var a=0;a<e.length;++a){for(var n=e[a],c=n.length-1,l=new G,u=new Array(c),p=0;p<c;++p){var h=o[n[p]].clone();l.add(h),s[n[p]].push(u[p]=i.push(h)-1)}l.divideScalar(c);for(var p=0;p<c;++p){var h=i[u[p]];h.subVectors(h,l).multiplyScalar(t).addVectors(h,l)}u.push(n[c]),r.push(u)}for(var a=0;a<e.length-1;++a)for(var p=a+1;p<e.length;++p){for(var f=[],g=-1,m=0;m<e[a].length-1;++m){var d=e[p].indexOf(e[a][m]);d>=0&&d<e[p].length-1&&(g>=0&&m!=g+1?f.unshift([a,m],[p,d]):f.push([a,m],[p,d]),g=m)}f.length==4&&r.push([r[f[0][0]][f[0][1]],r[f[1][0]][f[1][1]],r[f[3][0]][f[3][1]],r[f[2][0]][f[2][1]],-1])}for(var a=0;a<s.length;++a){for(var v=s[a],u=[v[0]],x=v.length-1;x;){for(var m=e.length;m<r.length;++m){var b=r[m].indexOf(u[u.length-1]);if(b>=0&&b<4){--b==-1&&(b=3);var y=r[m][b];if(v.indexOf(y)>=0){u.push(y);break}}}--x}u.push(-1),r.push(u)}return{vectors:i,faces:r}}create_geom(o,e,t,i,r,s){for(var a=new Array(o.length),n=0;n<o.length;++n)a[n]=new G().fromArray(o[n]).normalize();var c=this.chamfer_geom(a,e,s);if(e.length!=10)var l=this.make_geom(c.vectors,c.faces,t,i,r);else var l=this.make_d10_geom(c.vectors,c.faces,t,i,r);return l.cannon_shape=this.create_shape(o,e,t),l.name="d"+e.length,l}};let ol=Nr;oc(ol,"dice",{});const An={cloudy:{name:"Clouds (Transparent)",composite:"destination-in",source:"textures/cloudy.webp",source_bump:"textures/cloudy.alt.webp"},cloudy_2:{name:"Clouds",composite:"multiply",source:"textures/cloudy.alt.webp",source_bump:"textures/cloudy.alt.webp"},fire:{name:"Fire",composite:"multiply",source:"textures/fire.webp",source_bump:"textures/fire.webp",material:"metal"},marble:{name:"Marble",composite:"multiply",source:"textures/marble.webp",source_bump:"",material:"glass"},water:{name:"Water",composite:"destination-in",source:"textures/water.webp",source_bump:"textures/water.webp",material:"glass"},ice:{name:"Ice",composite:"destination-in",source:"textures/ice.webp",source_bump:"textures/ice.webp",material:"glass"},paper:{name:"Paper",composite:"multiply",source:"textures/paper.webp",source_bump:"textures/paper-bump.webp",material:"wood"},speckles:{name:"Speckles",composite:"multiply",source:"textures/speckles.webp",source_bump:"textures/speckles.webp",material:"none"},glitter:{name:"Glitter",composite:"multiply",source:"textures/glitter.webp",source_bump:"textures/glitter-bump.webp",material:"none"},glitter_2:{name:"Glitter (Transparent)",composite:"destination-in",source:"textures/glitter-alpha.webp",source_bump:"",material:"none"},stars:{name:"Stars",composite:"multiply",source:"textures/stars.webp",source_bump:"textures/stars.webp",material:"none"},stainedglass:{name:"Stained Glass",composite:"multiply",source:"textures/stainedglass.webp",source_bump:"textures/stainedglass-bump.webp",material:"glass"},wood:{name:"Wood",composite:"multiply",source:"textures/wood.webp",source_bump:"textures/wood.webp",material:"wood"},metal:{name:"Stainless Steel",composite:"multiply",source:"textures/metal.webp",source_bump:"textures/metal-bump.webp",material:"metal"},skulls:{name:"Skulls",composite:"multiply",source:"textures/skulls.webp",source_bump:"textures/skulls.webp"},leopard:{name:"Leopard",composite:"multiply",source:"textures/leopard.webp",source_bump:"textures/leopard.webp",material:"wood"},tiger:{name:"Tiger",composite:"multiply",source:"textures/tiger.webp",source_bump:"textures/tiger.webp",material:"wood"},cheetah:{name:"Cheetah",composite:"multiply",source:"textures/cheetah.webp",source_bump:"textures/cheetah.webp",material:"wood"},dragon:{name:"Dragon",composite:"multiply",source:"textures/dragon.webp",source_bump:"textures/dragon-bump.webp",material:"none"},lizard:{name:"Lizard",composite:"multiply",source:"textures/lizard.webp",source_bump:"textures/lizard.webp",material:"none"},bird:{name:"Bird",composite:"multiply",source:"textures/feather.webp",source_bump:"textures/feather-bump.webp",material:"wood"},astral:{name:"Astral Sea",composite:"multiply",source:"textures/astral.webp",source_bump:"textures/stars.webp",material:"none"},acleaf:{name:"AC Leaf",composite:"multiply",source:"textures/acleaf.webp",source_bump:"textures/acleaf.webp",material:"none"},thecage:{name:"Nicholas Cage",composite:"multiply",source:"textures/thecage.webp",source_bump:"",material:"metal"},isabelle:{name:"Isabelle",composite:"source-over",source:"textures/isabelle.webp",source_bump:"",material:"none"},bronze01:{name:"bronze01",composite:"difference",source:"textures/bronze01.webp",source_bump:"",material:"metal"},bronze02:{name:"bronze02",composite:"difference",source:"textures/bronze02.webp",source_bump:"",material:"metal"},bronze03:{name:"bronze03",composite:"difference",source:"textures/bronze03.webp",source_bump:"",material:"metal"},bronze03a:{name:"bronze03a",composite:"difference",source:"textures/bronze03a.webp",source_bump:"",material:"metal"},bronze03b:{name:"bronze03b",composite:"difference",source:"textures/bronze03b.webp",source_bump:"",material:"metal"},bronze04:{name:"bronze04",composite:"difference",source:"textures/bronze04.webp",source_bump:"",material:"metal"},none:{name:"none",composite:"source-over",source:"",source_bump:"",material:""},"":{name:"~ Preset ~",composite:"source-over",source:"",source_bump:"",material:""}},co={coin_default:{name:"Gold Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},coin_silver:{name:"Silver Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},radiant:{name:"Radiant",category:"Damage Types",foreground:"#F9B333",background:"#FFFFFF",outline:"",texture:"paper",description:"Radiant"},fire:{name:"Fire",category:"Damage Types",foreground:"#f8d84f",background:["#f8d84f","#f9b02d","#f43c04","#910200","#4c1009"],outline:"black",texture:"fire",description:"Fire"},ice:{name:"Ice",category:"Damage Types",foreground:"#60E9FF",background:["#214fa3","#3c6ac1","#253f70","#0b56e2","#09317a"],outline:"black",texture:"ice",description:"Ice"},poison:{name:"Poison",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409e","#934fc3","#c949fc"],outline:"black",texture:"cloudy",description:"Poison"},acid:{name:"Acid",category:"Damage Types",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"marble",description:"Acid"},thunder:{name:"Thunder",category:"Damage Types",foreground:"#FFC500",background:"#7D7D7D",outline:"black",texture:"cloudy",description:"Thunder"},lightning:{name:"Lightning",category:"Damage Types",foreground:"#FFC500",background:["#f17105","#f3ca40","#eddea4","#df9a57","#dea54b"],outline:"#7D7D7D",texture:"ice",description:"Lightning"},air:{name:"Air",category:"Damage Types",foreground:"#ffffff",background:["#d0e5ea","#c3dee5","#a4ccd6","#8dafb7","#80a4ad"],outline:"black",texture:"cloudy",description:"Air"},water:{name:"Water",category:"Damage Types",foreground:"#60E9FF",background:["#87b8c4","#77a6b2","#6b98a3","#5b8691","#4b757f"],outline:"black",texture:"water",description:"Water"},earth:{name:"Earth",category:"Damage Types",foreground:"#6C9943",background:["#346804","#184200","#527f22","#3a1d04","#56341a","#331c17","#5a352a","#302210"],outline:"black",texture:"speckles",description:"Earth"},force:{name:"Force",category:"Damage Types",foreground:"white",background:["#FF97FF","#FF68FF","#C651C6"],outline:"#570000",texture:"stars",description:"Force"},psychic:{name:"Psychic",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409E","#934FC3","#C949FC","#313866"],outline:"black",texture:"speckles",description:"Psychic"},necrotic:{name:"Necrotic",category:"Damage Types",foreground:"#ffffff",background:"#6F0000",outline:"black",texture:"skulls",description:"Necrotic"},breebaby:{name:"Pastel Sunset",category:"Custom Sets",foreground:["#5E175E","#564A5E","#45455E","#3D5A5E","#1E595E","#5E3F3D","#5E1E29","#283C5E","#25295E"],background:["#FE89CF","#DFD4F2","#C2C2E8","#CCE7FA","#A1D9FC","#F3C3C2","#EB8993","#8EA1D2","#7477AD"],outline:"white",texture:"marble",description:"Pastel Sunset, for Breyanna"},pinkdreams:{name:"Pink Dreams",category:"Custom Sets",foreground:"white",background:["#ff007c","#df73ff","#f400a1","#df00ff","#ff33cc"],outline:"#570000",texture:"skulls",description:"Pink Dreams, for Ethan"},inspired:{name:"Inspired",category:"Custom Sets",foreground:"#FFD800",background:"#C4C4B6",outline:"#8E8E86",texture:"none",description:"Inspired, for Austin"},bloodmoon:{name:"Blood Moon",category:"Custom Sets",foreground:"#CDB800",background:"#6F0000",outline:"black",texture:"marble",description:"Blood Moon, for Jared"},starynight:{name:"Stary Night",category:"Custom Sets",foreground:"#4F708F",background:["#091636","#233660","#4F708F","#8597AD","#E2E2E2"],outline:"white",texture:"speckles",description:"Stary Night, for Mai"},glitterparty:{name:"Glitter Party",category:"Custom Sets",foreground:"white",background:["#FFB5F5","#7FC9FF","#A17FFF"],outline:"none",texture:"glitter",description:"Glitter Party, for Austin"},astralsea:{name:"Astral Sea",category:"Custom Sets",foreground:"#565656",background:"white",outline:"none",texture:"astral",description:"The Astral Sea, for Austin"},bronze:{name:"Thylean Bronze",description:"Thylean Bronze by @SpencerThayer",category:"Custom Sets",foreground:["#FF9159","#FFB066","#FFBF59","#FFD059"],background:["#705206","#7A4E06","#643100","#7A2D06"],outline:["#3D2D03","#472D04","#301700","#471A04"],edge:["#FF5D0D","#FF7B00","#FFA20D","#FFBA0D"],texture:["bronze01","bronze02","bronze03","bronze03a","bronze03b","bronze04"]},dragons:{name:"Here be Dragons",category:"Custom Sets",foreground:"#FFFFFF",background:["#B80000","#4D5A5A","#5BB8FF","#7E934E","#FFFFFF","#F6ED7C","#7797A3","#A78437","#862C1A","#FFDF8A"],outline:"black",texture:["dragon","lizard"],description:"Here be Dragons"},birdup:{name:"Bird Up",category:"Custom Sets",foreground:"#FFFFFF",background:["#F11602","#FFC000","#6EC832","#0094BC","#05608D","#FEABB3","#F75680","#F3F0DF","#C7A57F"],outline:"black",texture:"bird",description:"Bird Up!"},tigerking:{name:"Tiger King",category:"Other",foreground:"#ffffff",background:"#FFCC40",outline:"black",texture:["leopard","tiger","cheetah"],description:"Leopard Print"},covid:{name:"COViD",category:"Other",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"fire",description:"Covid-19"},acleaf:{name:"Animal Crossing",category:"Other",foreground:"#00FF00",background:"#07540A",outline:"black",texture:"acleaf",description:"Animal Crossing Leaf"},isabelle:{name:"Isabelle",category:"Other",foreground:"white",background:"#FEE5CC",outline:"black",texture:"isabelle",description:"Isabelle"},thecage:{name:"Nicholas Cage",category:"Other",foreground:"#ffffff",background:"#ffffff",outline:"black",texture:"thecage",description:"Nicholas Cage"},test:{name:"Test",category:"Colors",foreground:["#00FF00","#0000FF","#FF0000"],background:["#FF0000","#00FF00","#0000FF"],outline:"black",texture:"none",description:"Test"},rainbow:{name:"Rainblow",category:"Colors",foreground:["#FF5959","#FFA74F","#FFFF56","#59FF59","#2374FF","#00FFFF","#FF59FF"],background:["#900000","#CE3900","#BCBC00","#00B500","#00008E","#008282","#A500A5"],outline:"black",texture:"none",description:"Rainblow"},black:{name:"Black",category:"Colors",foreground:"#ffffff",background:"#000000",outline:"black",texture:"none",description:"Black"},white:{name:"White",category:"Colors",foreground:"#000000",background:"#FFFFFF",outline:"#FFFFFF",texture:"none",description:"White"},swrpg_abi:{name:"Star Wars RPG - Ability",category:"Star Wars™ RPG",foreground:"#00FF00",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"#000000",texture:"cloudy_2",description:"Star Wars™ RPG Ability Dice"},swrpg_pro:{name:"Star Wars RPG - Proficiency",category:"Star Wars™ RPG",foreground:"#FFFF00",background:["#CABB1C","#F9E33B","#FFE900","#F0E49D"],outline:"#000000",texture:"paper",description:"Star Wars™ RPG Proficiency Dice"},swrpg_dif:{name:"Star Wars RPG - Difficulty",category:"Star Wars™ RPG",foreground:"#8000FC",background:["#39165F","#664B84","#50247E","#745F88"],outline:"#000000",texture:"cloudy_2",description:"Star Wars™ RPG Difficulty Dice"},swrpg_cha:{name:"Star Wars RPG - Challenge",category:"Star Wars™ RPG",foreground:"#FF0000",background:["#A91F32","#EB4254","#E51836","#BA3645"],outline:"#000000",texture:"paper",description:"Star Wars™ RPG Challenge Dice"},swrpg_boo:{name:"Star Wars RPG - Boost",category:"Star Wars™ RPG",foreground:"#00FFFF",background:["#4B9DC6","#689FC4","#85CFF2","#8FC0D8"],outline:"#000000",texture:"glitter",description:"Star Wars™ RPG Boost Dice"},swrpg_set:{name:"Star Wars RPG - Setback",category:"Star Wars™ RPG",foreground:"#111111",background:["#252223","#241F21","#282828","#111111"],outline:"#ffffff",texture:"glitter",description:"Star Wars™ RPG Setback Dice"},swrpg_for:{name:"Star Wars RPG - Force",category:"Star Wars™ RPG",foreground:"#000000",background:["#F3F3F3","#D3D3D3","#BABABA","#FFFFFF"],outline:"#FFFFFF",texture:"stars",description:"Star Wars™ RPG Force Dice"},swa_red:{name:"Armada Attack - Red",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Red Attack Dice"},swa_blue:{name:"Armada Attack - Blue",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#212642","#28286E","#2B348C","#3D4BB5","#5D64AB"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Blue Attack Dice"},swa_black:{name:"Armada Attack - Black",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Black Attack Dice"},xwing_red:{name:"X-Wing Attack - Red",category:"Star Wars™ X-Wing",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stars",description:"Star Wars™ X-Wing Red Attack Dice"},xwing_green:{name:"X-Wing Attack - Green",category:"Star Wars™ X-Wing",foreground:"#ffffff",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"none",texture:"stars",description:"Star Wars™ X-Wing Green Attack Dice"},swl_atkred:{name:"Legion Attack - Red",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars™ Legion Red Attack Dice"},swl_atkblack:{name:"Legion Attack - Black",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"fire",description:"Star Wars™ Legion Black Attack Dice"},swl_atkwhite:{name:"Legion Attack - White",category:"Star Wars™ Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars™ Legion White Attack Dice"},swl_defred:{name:"Legion Defense - Red",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars™ Legion Red Defense Dice"},swl_defwhite:{name:"Legion Defense - White",category:"Star Wars™ Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars™ Legion White Defense Dice"}};class Xg{constructor(e={}){this.colorsets=[],this.assetPath=e.assetPath}async ImageLoader(e){if(Array.isArray(e)){for(let t=0,i=e.length;t<i;t++)e[t]=await this.ImageLoader(e[t]);return e}return e.source&&e.source!=""&&(e.texture=await this.loadImage(e.source)),e.source_bump&&e.source_bump!=""&&(e.bump=await this.loadImage(e.source_bump)),e}loadImage(e){return new Promise((t,i)=>{let r=new Image;r.onload=()=>t(r),r.crossOrigin="anonymous",r.src=this.assetPath+e,r.onerror=s=>i(s)}).catch(t=>{console.error("Unable to load image texture")})}async getColorSet(e){let t,i;if(typeof e=="string"&&(t=e),typeof e=="object"&&(t=e.colorset),this.colorsets.hasOwnProperty(t))return this.colorsets[t];let r=co[t];return i=e.texture||r.texture,r.texture=this.getTexture(i),r.texture=await this.ImageLoader(r.texture),e.material&&(r.texture.material=e.material),this.colorsets[t]=r,r}async makeColorSet(e={}){if(this.colorsets.hasOwnProperty(e.name))return this.colorsets[e.name];let t=co.white,i=Object.assign({},t,e),r=this.getTexture(i.texture);return i.texture=await this.ImageLoader(r),e.material&&(i.texture.material=e.material),i.name.toLowerCase()==="white"&&(i.name=`${Date.now()}`),this.colorsets[i.name]=i,i}getTexture(e){if(Array.isArray(e)){let t=[];for(let i=0,r=e.length;i<r;i++)t.push(this.getTexture(e[i]));return t}return An.hasOwnProperty(e)?An[e]:An.none}}const Yg={default:{name:"Solid Color",author:"MajorVictory",showColorPicker:!0,surface:"wood_tray",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"blue-felt":{name:"Blue Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"red-felt":{name:"Red Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#ff9494",bg:"#4d1e1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"green-felt":{name:"Green Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#97ff94",bg:"#244d1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},taverntable:{name:"Old Tavern Table",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},mahogany:{name:"(Mah-Hog-Any)",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},stainless:{name:"Stainless Steel",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cyberpunk:{name:"Neo-New-Future-City",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#3494A6",bg:"#440B28"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cagetown:{name:"Cage Town",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#D7A866",bg:"#282811"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]}},$g=o=>{let e;return function(){let t=this,i=arguments;e&&window.cancelAnimationFrame(e),e=window.requestAnimationFrame(function(){o.apply(t,i)})}},Zg={assetPath:"./",framerate:1/60,sounds:!1,volume:100,color_spotlight:15720405,shadows:!0,theme_surface:"green-felt",sound_dieMaterial:"plastic",theme_customColorset:null,theme_colorset:"white",theme_texture:"",theme_material:"glass",gravity_multiplier:400,light_intensity:.7,baseScale:100,strength:1,iterationLimit:1e3,onRollComplete:()=>{},onRerollComplete:()=>{},onAddDiceComplete:()=>{},onRemoveDiceComplete:()=>{}};class Jg{constructor(e,t={}){this.initialized=!1,this.container=document.querySelector(e),this.dimensions=new Oe(this.container.clientWidth,this.container.clientHeight),this.adaptive_timestep=!1,this.last_time=0,this.running=!1,this.rolling=!1,this.threadid,this.display={currentWidth:null,currentHeight:null,containerWidth:null,containerHeight:null,aspect:null,scale:null},this.cameraHeight={max:null,close:null,medium:null,far:null},this.scene=new lm,this.world=new kg,this.dice_body_material=new $i,this.sounds_table={},this.sounds_dice=[],this.lastSoundType="",this.lastSoundStep=0,this.lastSound=0,this.iteration,this.renderer,this.barrier,this.camera,this.light,this.light_amb,this.desk,this.box_body={},this.bodies=[],this.meshes=[],this.diceList=[],this.notationVectors=null,this.dieIndex=0,this.soundDelay=10,this.animstate="",this.selector={animate:!0,rotate:!0,intersected:null,dice:[]},Object.assign(this,Zg,t),this.DiceColors=new Xg({assetPath:this.assetPath}),this.DiceFactory=new ol({baseScale:this.baseScale}),this.DiceFactory.setBumpMapping(!0),this.surface=Yg[this.theme_surface].surface}enableShadows(){this.shadows=!0,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}disableShadows(){this.shadows=!1,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}async initialize(){this.renderer=new Zo({antialias:!0,alpha:!0}),this.container.appendChild(this.renderer.domElement),this.renderer.shadowMap.enabled=this.shadows,this.renderer.shadowMap.type=2,this.renderer.setClearColor(0,0),this.setDimensions(this.dimensions),this.world.gravity.set(0,0,-9.8*this.gravity_multiplier),this.world.broadphase=new Qo,this.world.solver.iterations=14,this.world.allowSleep=!0,this.makeWorldBox(),this.resizeWorld(),await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material}).catch(e=>{throw new Error("Unable to load theme")}),this.sounds&&await this.loadSounds().catch(e=>{throw new Error("Unable to load sounds")}),this.initialized=!0,this.renderer.render(this.scene,this.camera)}makeWorldBox(){Object.keys(this.box_body).length&&(this.world.removeBody(this.box_body.desk),this.world.removeBody(this.box_body.topWall),this.world.removeBody(this.box_body.bottomWall),this.world.removeBody(this.box_body.leftWall),this.world.removeBody(this.box_body.rightWall));const e=new $i,t=new $i;this.world.addContactMaterial(new Yi(e,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.world.addContactMaterial(new Yi(t,this.dice_body_material,{mass:0,friction:.6,restitution:1})),this.world.addContactMaterial(new Yi(this.dice_body_material,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.box_body.desk=new le({allowSleep:!1,mass:0,shape:new Dr,material:e}),this.world.addBody(this.box_body.desk),this.box_body.topWall=new le({allowSleep:!1,mass:0,shape:new Dr,material:t}),this.box_body.topWall.quaternion.setFromAxisAngle(new w(1,0,0),Math.PI/2),this.box_body.topWall.position.set(0,this.display.containerHeight*.93,0),this.world.addBody(this.box_body.topWall),this.box_body.bottomWall=new le({allowSleep:!1,mass:0,shape:new Dr,material:t}),this.box_body.bottomWall.quaternion.setFromAxisAngle(new w(1,0,0),-Math.PI/2),this.box_body.bottomWall.position.set(0,-this.display.containerHeight*.93,0),this.world.addBody(this.box_body.bottomWall),this.box_body.leftWall=new le({allowSleep:!1,mass:0,shape:new Dr,material:t}),this.box_body.leftWall.quaternion.setFromAxisAngle(new w(0,1,0),-Math.PI/2),this.box_body.leftWall.position.set(this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.leftWall),this.box_body.rightWall=new le({allowSleep:!1,mass:0,shape:new Dr,material:t}),this.box_body.rightWall.quaternion.setFromAxisAngle(new w(0,1,0),Math.PI/2),this.box_body.rightWall.position.set(-this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.rightWall)}async loadTheme(e){let t;this.theme_customColorset?t=await this.DiceColors.makeColorSet(this.theme_customColorset):t=await this.DiceColors.getColorSet(e),this.DiceFactory.applyColorSet(t),this.colorData=t}async loadSounds(){let e={felt:7,wood_table:7,wood_tray:7,metal:9},t={coin:6,metal:12,plastic:15,wood:12};const i=this.colorData.texture.material.match(/wood|metal/g);if(this.sound_dieMaterial=i?this.colorData.texture.material:"plastic",!this.sounds_table.hasOwnProperty(this.surface)){this.sounds_table[this.surface]=[];let r=e[this.surface];for(let s=1;s<=r;++s){const a=await this.loadAudio(this.assetPath+"sounds/surfaces/surface_"+this.surface+s+".mp3");this.sounds_table[this.surface].push(a)}}if(!this.sounds_dice.hasOwnProperty("coin")){this.sounds_dice.coin=[];let r=t.coin;for(let s=1;s<=r;++s){const a=await this.loadAudio(this.assetPath+"sounds/dicehit/dicehit_coin"+s+".mp3");this.sounds_dice.coin.push(a)}}if(!this.sounds_dice.hasOwnProperty(this.sound_dieMaterial)){this.sounds_dice[this.sound_dieMaterial]=[];let r=t[this.sound_dieMaterial];for(let s=1;s<=r;++s){const a=await this.loadAudio(this.assetPath+"sounds/dicehit/dicehit_"+this.sound_dieMaterial+s+".mp3");this.sounds_dice[this.sound_dieMaterial].push(a)}}}loadAudio(e){return new Promise((t,i)=>{let r=new Audio;r.oncanplaythrough=()=>t(r),r.crossOrigin="anonymous",r.src=e,r.onerror=s=>i(s)}).catch(t=>{console.error("Unable to load audio")})}async updateConfig(e={}){Object.apply(this,e),this.theme_customColorset=e.theme_customColorset?e.theme_customColorset:null,e.theme_colorset&&(this.theme_colorset=e.theme_colorset),e.theme_texture&&(this.theme_texture=e.theme_texture),e.theme_material&&(this.theme_material=e.theme_material),(e.theme_colorset||e.theme_texture||e.theme_material||e.theme_customColorset)&&await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material})}setDimensions(e){switch(this.display.currentWidth=this.container.clientWidth/2,this.display.currentHeight=this.container.clientHeight/2,e?(this.display.containerWidth=e.x,this.display.containerHeight=e.y):(this.display.containerWidth=this.display.currentWidth,this.display.containerHeight=this.display.currentHeight),this.display.aspect=Math.min(this.display.currentWidth/this.display.containerWidth,this.display.currentHeight/this.display.containerHeight),this.display.scale=Math.sqrt(this.display.containerWidth*this.display.containerWidth+this.display.containerHeight*this.display.containerHeight)/13,this.makeWorldBox(),this.renderer.setSize(this.display.currentWidth*2,this.display.currentHeight*2),this.cameraHeight.max=this.display.currentHeight/this.display.aspect/Math.tan(10*Math.PI/180),this.cameraHeight.medium=this.cameraHeight.max/1.5,this.cameraHeight.far=this.cameraHeight.max,this.cameraHeight.close=this.cameraHeight.max/2,this.camera&&this.scene.remove(this.camera),this.camera=new Dt(20,this.display.currentWidth/this.display.currentHeight,1,this.cameraHeight.max*1.3),this.animstate){case"selector":this.camera.position.z=this.selector.dice.length>9?this.cameraHeight.far:this.selector.dice.length<6?this.cameraHeight.close:this.cameraHeight.medium;break;case"throw":case"afterthrow":default:this.camera.position.z=this.cameraHeight.far}this.camera.lookAt(new G(0,0,0));const t=Math.max(this.display.containerWidth,this.display.containerHeight);this.light&&this.scene.remove(this.light),this.light_amb&&this.scene.remove(this.light_amb),this.light=new fm(this.color_spotlight,this.light_intensity),this.light.position.set(-t/2,t/2,t*3),this.light.target.position.set(0,0,0),this.light.distance=t*5,this.light.angle=Math.PI/4,this.light.castShadow=this.shadows,this.light.shadow.camera.near=t/10,this.light.shadow.camera.far=t*5,this.light.shadow.camera.fov=50,this.light.shadow.bias=.001,this.light.shadow.mapSize.width=1024,this.light.shadow.mapSize.height=1024,this.scene.add(this.light),this.light_amb=new dm(16777147,6776689,this.light_intensity),this.scene.add(this.light_amb),this.desk&&this.scene.remove(this.desk);let i=new cm;i.opacity=.5,this.desk=new ni(new Ns(this.display.containerWidth*6,this.display.containerHeight*6,1,1),i),this.desk.receiveShadow=this.shadows,this.scene.add(this.desk),this.renderer.render(this.scene,this.camera)}resizeWorld(){const e=$g(()=>{const t=this.renderer.domElement,i=this.container.clientWidth,r=this.container.clientHeight,s=t.width!==i||t.height!==r;return s&&this.setDimensions(new Oe(this.container.clientWidth,this.container.clientHeight)),s});window.addEventListener("resize",e)}vectorRand({x:e,y:t}){let i=Math.random()*Math.PI/5-Math.PI/5/2,r={x:e*Math.cos(i)-t*Math.sin(i),y:e*Math.sin(i)+t*Math.cos(i)};return r.x==0&&(r.x=.01),r.y==0&&(r.y=.01),r}getNotationVectors(e,t,i,r){let s=new lo(e);for(let a in s.set){const n=this.DiceFactory.get(s.set[a].type);let c=s.set[a].num,l=s.set[a].op,u=s.set[a].sid,p=s.set[a].gid,h=s.set[a].glvl,f=s.set[a].func,g=s.set[a].args;for(let m=0;m<c;m++){let d=this.vectorRand(t);d.x/=r,d.y/=r;let v={x:this.display.containerWidth*(d.x>0?-1:1)*.9,y:this.display.containerHeight*(d.y>0?-1:1)*.9,z:Math.random()*200+200},x=Math.abs(d.x/d.y);x>1?v.y/=x:v.x*=x;let b=this.vectorRand(t);b.x/=r,b.y/=r;let y,M,S;n.shape!="d2"?(y={x:b.x*i,y:b.y*i,z:-10},M={x:-(Math.random()*d.y*5+n.inertia*d.y),y:Math.random()*d.x*5+n.inertia*d.x,z:0},S={x:Math.random(),y:Math.random(),z:Math.random(),a:Math.random()}):(y={x:b.x*i/10,y:b.y*i/10,z:3e3},M={x:12*n.inertia,y:1*n.inertia,z:0},S={x:1,y:1,z:Math.random(),a:Math.random()}),s.vectors.push({index:this.dieIndex++,type:n.type,op:l,sid:u,gid:p,glvl:h,func:f,args:g,pos:v,velocity:y,angle:M,axis:S})}}return s}swapDiceFace(e,t){const i=this.DiceFactory.get(e.notation.type);if(e.resultReason="forced",i.shape=="d4"){this.swapDiceFace_D4(e,t);return}i.values;let r=parseInt(e.getLastValue().value);t=parseInt(t),e.notation.type=="d10"&&r==0&&(r=10),e.notation.type=="d100"&&r==0&&(r=100),e.notation.type=="d100"&&r>0&&r<10&&(r*=10),e.notation.type=="d10"&&t==0&&(t=10),e.notation.type=="d100"&&t==0&&(t=100),e.notation.type=="d100"&&t>0&&t<10&&(t*=10);let s=i.values.indexOf(r),a=i.values.indexOf(t);if(s<0||a<0||s==a)return;let n=e.geometry.clone(),c=[],l=[],u=2;i.shape=="d10"&&(u=1);let p,h=a+u;i.shape!="d2"?(p=s+u,h=a+u):(p=s+1,h=a+1);for(var f=0,g=n.groups.length;f<g;++f){const m=n.groups[f].materialIndex;if(m==p){c.push(f);continue}if(m==h){l.push(f);continue}}if(!(c.length<=0||l.length<=0)){for(let m=0,d=l.length;m<d;m++)n.groups[l[m]].materialIndex=p;for(let m=0,d=c.length;m<d;m++)n.groups[c[m]].materialIndex=h;e.geometry=n,e.result=[]}}swapDiceFace_D4(e,t){const i=this.DiceFactory.get(e.notation.type);let r=parseInt(e.getLastValue().value);if(t=parseInt(t),!(r>=1&&r<=4))return;let s=t-r,a=e.geometry.clone();for(let n=0,c=a.groups.length;n<c;++n){const l=a.groups[n];let u=l.materialIndex;if(u!=0){for(u+=s-1;u>4;)u-=4;for(;u<1;)u+=4;l.materialIndex=u+1}}s!=0&&(s<0&&(s+=4),e.material=this.DiceFactory.createMaterials(i,0,0,!1,s)),e.geometry=a}spawnDice(e,t=!1){const{pos:i,axis:r,angle:s,velocity:a}=e;let n;if(t)n=t,n.stopped=0,this.world.removeBody(n.body);else{if(n=this.DiceFactory.create(e.type,this.colorData),!n)return;n.notation=e,n.result=[],n.stopped=0,n.castShadow=this.shadows,this.scene.add(n),this.diceList.push(n)}n.body=new le({allowSleep:!0,sleepSpeedLimit:75,sleepTimeLimit:.9,mass:n.mass,shape:n.geometry.cannon_shape,material:this.dice_body_material}),n.body.type=le.DYNAMIC,n.body.position.set(i.x,i.y,i.z),n.body.quaternion.setFromAxisAngle(new w(r.x,r.y,r.z),r.a*Math.PI*2),n.body.angularVelocity.set(s.x,s.y,s.z),n.body.velocity.set(a.x,a.y,a.z),n.body.linearDamping=.1,n.body.angularDamping=.1,n.body.diceShape=n.shape,n.body.sleepState=0,n.body.addEventListener("collide",this.eventCollide.bind(this)),this.world.addBody(n.body)}eventCollide({body:e,target:t}){if(this.animstate=="simulate"||!this.sounds||!e||this.volume<=0)return;let i=Date.now(),r=e.mass>0?"dice":"table";if(!((this.lastSoundStep==e.world.stepnumber||this.lastSound>i)&&r!="dice")&&!((this.lastSoundStep==e.world.stepnumber||this.lastSound>i)&&r=="dice"&&this.lastSoundType=="dice")){if(e.mass>0){let s=e.velocity.length();if(s<250)return;let a;e.diceShape==="d2"?a=this.sounds_dice.coin[Math.floor(Math.random()*this.sounds_dice.coin.length)]:a=this.sounds_dice[this.sound_dieMaterial][Math.floor(Math.random()*this.sounds_dice[this.sound_dieMaterial].length)],a&&(a.volume=Math.min(s/8e3,this.volume/100),a.play().catch(n=>{})),this.lastSoundType="dice"}else{let s=t.velocity.length();if(s<250)return;let a=this.surface,n=this.sounds_table[a],c=n[Math.floor(Math.random()*n.length)];c&&(c.volume=Math.min(s/8e3,this.volume/100),c.play().catch(l=>{})),this.lastSoundType="table"}this.lastSoundStep=e.world.stepnumber,this.lastSound=i+this.soundDelay}}checkForRethrow(e){return e.notation.func&&e.notation.func.toLowerCase(),!1}throwFinished(){const e=this.iteration>this.iterationLimit;for(let t=0,i=this.diceList.length;t<i;++t){const r=this.diceList[t],s=le.SLEEPING;if(r.body.sleepState<s&&!e)return!1;if(r.body.sleepState==s||e){if(r.body.type===le.KINEMATIC)continue;let a=!1;if(r.result.length==0?(r.storeRolledValue(r.resultReason),a=this.checkForRethrow(r)):r.result.length>0&&r.rerolling&&(r.rerolling=!1,r.storeRolledValue("reroll"),a=this.checkForRethrow(r)),a)return r.rerolls+=1,r.rerolling=!0,r.body.wakeUp(),r.body.type=le.DYNAMIC,r.body.angularVelocity=new w(25,25,25),r.body.velocity=new w(0,0,3e3),!1;r.rerolling=!1,r.body.type=le.KINEMATIC}}return!0}simulateThrow(){for(this.animstate="simulate",this.iteration=0,this.rolling=!0;!this.throwFinished(!0);)++this.iteration,this.world.step(this.framerate)}animateThrow(e,t){this.animstate="throw";let i=Date.now();this.last_time=this.last_time||i-this.framerate*1e3;let r=(i-this.last_time)/1e3;++this.iteration;let s=Math.floor(r/this.framerate);for(let a=0;a<s;a++)this.world.step(this.framerate),++this.steps;for(let a in this.scene.children){let n=this.scene.children[a];n.body!=null&&(n.position.copy(n.body.position),n.quaternion.copy(n.body.quaternion))}if(this.renderer.render(this.scene,this.camera),this.last_time=this.last_time+s*this.framerate*1e3,this.running==e&&this.throwFinished()){this.running=!1,this.rolling=!1,t&&t.call(this,this.notationVectors),this.running=Date.now(),this.animateAfterThrow(this.running);return}this.running==e&&((a,n,c,l,u)=>{!c&&r<this.framerate?setTimeout(()=>{requestAnimationFrame(()=>{a.call(this,n,l,u)})},(this.framerate-r)*1e3):requestAnimationFrame(()=>{a.call(this,n,l,u)})}).bind(this)(this.animateThrow,e,this.adaptive_timestep,t)}animateAfterThrow(e){this.animstate="afterthrow";let t=Date.now(),i=(t-this.last_time)/1e3;i>3&&(i=this.framerate),this.running=!1,this.last_time=t,this.renderer.render(this.scene,this.camera),this.running==e&&((r,s,a)=>{!a&&i<this.framerate?setTimeout(()=>{requestAnimationFrame(()=>{r.call(this,s)})},(this.framerate-i)*1e3):requestAnimationFrame(()=>{r.call(this,s)})}).bind(this)(this.animateAfterThrow,e,this.adaptive_timestep)}startClickThrow(e){this.rolling&&(this.clearDice(),this.rolling=!1);let t={x:(Math.random()*2-.5)*this.display.currentWidth,y:-(Math.random()*2-.5)*this.display.currentHeight},i=Math.sqrt(t.x*t.x+t.y*t.y)+100,r=(Math.random()+3)*i*this.strength;return this.getNotationVectors(e,t,r,i)}clearDice(){this.running=!1;let e;for(;e=this.diceList.pop();)this.scene.remove(e),e.body&&this.world.removeBody(e.body);this.renderer.render(this.scene,this.camera),setTimeout(()=>{this.renderer.render(this.scene,this.camera)},100)}getDiceResults(e){if(e!==void 0)return{type:this.diceList[e].shape,sides:parseInt(this.diceList[e].shape.substring(1)),id:e,...this.diceList[e].result.at(-1)};let t=0;const i=this.notationVectors.constant?parseInt(`${this.notationVectors.op}${this.notationVectors.constant}`):0;let r=i;return{notation:this.notationVectors.notation,sets:this.notationVectors.set.map(s=>{const a=t+s.num-1;let n=0;const c=[];for(let u=t;u<=a;u++){if(this.diceList[t].result.at(-1).reason==="remove"){t++;continue}c.push({type:s.type,sides:parseInt(s.type.substring(1)),id:t,...this.diceList[t].result.at(-1)}),n+=this.diceList[t].result.at(-1).value,t++}const l={num:s.num,type:s.type,sides:parseInt(s.type.substring(1)),rolls:c,total:n};return r+=n,l}),modifier:i,total:r}}async roll(e){if(this.notationVectors=this.startClickThrow(e),this.notationVectors)return new Promise((t,i)=>{this.rollDice(()=>{const r=this.getDiceResults();this.onRollComplete(r);const s=new CustomEvent("rollComplete",{detail:r});document.dispatchEvent(s),t(r)})})}async reroll(e){return this.rolling=!0,this.running=Date.now(),this.iteration=0,new Promise((t,i)=>{e.forEach(r=>{const s=this.diceList[r];s.rerolls+=1,s.rerolling=!0,s.body.wakeUp(),s.body.type=le.DYNAMIC,s.body.angularVelocity=new w(25,25,25),s.body.velocity=new w(0,0,3e3)}),this.animateThrow(this.running,()=>{const r=e.map(a=>this.getDiceResults(a));this.onRerollComplete(r);const s=new CustomEvent("rerollComplete",{detail:r});document.dispatchEvent(s),t(r)})})}async add(e){let t=this.diceList.length;if(!t)return this.roll(e);let i=this.startClickThrow(e),r=[];for(let s=0,a=i.vectors.length;s<a;++s)this.spawnDice(i.vectors[s]);this.simulateThrow(),this.steps=0,this.iteration=0;for(let s=0,a=i.vectors.length;s<a;++s){const n=t+s;!this.diceList[n]||(this.spawnDice(i.vectors[s],this.diceList[n]),r.push(n))}if(i.result&&i.result.length>0)for(let s=0;s<i.result.length;s++){const a=t+s;let n=this.diceList[a];!n||n.getLastValue().value!=i.result[s]&&this.swapDiceFace(n,i.result[s])}return this.notationVectors=lo.mergeNotation(this.notationVectors,i),new Promise((s,a)=>{const n=()=>{const c=r.map(u=>this.getDiceResults(u));this.onAddDiceComplete(c);const l=new CustomEvent("addDiceComplete",{detail:c});document.dispatchEvent(l),s(c)};this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,n)})}async remove(e){return new Promise((t,i)=>{const r=[];e.forEach(a=>{const n=this.diceList[a];n.body&&this.world.removeBody(n.body),this.scene.remove(n),n.storeRolledValue("remove"),r.push(this.getDiceResults(a))}),this.renderer.render(this.scene,this.camera),this.onRemoveDiceComplete(r);const s=new CustomEvent("removeDiceComplete",{detail:r});document.dispatchEvent(s),t(r)})}rollDice(e){if(this.notationVectors.error){e.call(this);return}this.clearDice();for(let t=0,i=this.notationVectors.vectors.length;t<i;++t)this.spawnDice(this.notationVectors.vectors[t]);this.simulateThrow(),this.steps=0,this.iteration=0;for(let t=0,i=this.diceList.length;t<i;++t)!this.diceList[t]||this.spawnDice(this.notationVectors.vectors[t],this.diceList[t]);if(this.notationVectors.result&&this.notationVectors.result.length>0)for(let t=0;t<this.notationVectors.result.length;t++){let i=this.diceList[t];!i||i.getLastValue().value!=this.notationVectors.result[t]&&this.swapDiceFace(i,this.notationVectors.result[t])}this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,e)}}const Cn=NaN,Kg=Number.isFinite(Cn)&&Cn>0?Cn:2e3;function Ln({playerEvent:o,modalState:e,handleModalClose:t=()=>{},revealedCard:i,card:r}){const s=i??r,a=!!i;function n(l,u){if(typeof WebGLRenderingContext>"u")return!1;const p=document.querySelector("#scene-container");if(!p||p.clientWidth===0||p.clientHeight===0)return!1;try{const h=new Jg("#scene-container",{onRollComplete:u});return h.initialize().then(()=>{const f=l.actionType===Xe.playerMove?l.moveRoll:l.damageRoll;return h.roll((f==null?void 0:f.length)===1?`1d4@${f[0]}`:f?`1d6@${f[0]},1d4@${f[1]}`:"1d6,1d4")}).then(u).catch(u),!0}catch{return!1}}se.useEffect(()=>{if(a)return;let l=!1,u;const p=()=>{l||(l=!0,t())},h=window.setTimeout(()=>{const f=o.animateDice!==!1&&(o.actionType===Xe.playerMove||o.actionType===Xe.playerAttack);f&&n(o,p)||(u=window.setTimeout(p,f?0:Kg))},0);return()=>{window.clearTimeout(h),u!==void 0&&window.clearTimeout(u)}},[o,t,a]);const c=()=>{if(s)return P.jsxs(mt.Fragment,{children:[P.jsx(Ue,{component:"img",sx:{height:360,maxWidth:"100%",objectFit:"contain",marginTop:2,marginX:"auto"},alt:s.name,src:`/shadow_hunters/assets/game/${s.drawDeck}/${s.name}.jpg`}),a?P.jsx(Ie,{variant:"contained",fullWidth:!0,sx:{marginTop:2},onClick:t,children:"Ok"}):void 0]});if(o.animateDice===!1)return P.jsx(Cs,{sx:{width:"100%",height:"5px",marginTop:2,marginX:" -16px"},"aria-label":"Loading…"});switch(o.actionType){case Xe.playerAttack:case Xe.playerMove:return P.jsx(Ue,{id:"scene-container",sx:{width:"100%",maxWidth:460,height:240}});default:return P.jsx(Cs,{sx:{width:"100%",height:"5px",marginTop:2,marginX:" -16px"},"aria-label":"Loading…"})}};if(e.openModal)return P.jsx(Ii,{open:e.openModal,children:P.jsxs(Ue,{role:"status",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:500,p:2,sx:{maxWidth:"100%",boxSizing:"border-box",overflow:"hidden"},children:[e.modalMessage?P.jsx(Ue,{sx:{width:"calc(100% + 32px)",paddingTop:"8px",paddingLeft:"16px",marginX:"-16px",marginTop:"-16px",backgroundColor:ft.palette.background.default},children:P.jsx(At,{variant:"h5",sx:{width:"100%"},children:e.modalMessage})}):void 0,c()]})})}const uo={marginRight:2,minHeight:"54px",paddingX:"24px",fontSize:"1.3125rem"};function Qg({handleChoice:o=n=>n,handleAttack:e=n=>n,handleMove:t=()=>{},handleEndTurn:i=()=>{},canAttack:r=!1,onQuit:s,compact:a=!1}){var D,k,O,z;const n=Di(C=>C.connection),c=Di(C=>C.peer),l=n.gameState.lobby.playerList.filter(C=>C.user.id===c.id)[0],[u,p]=se.useState(!1),[h,f]=se.useState(!1),g=se.useRef(void 0),m=xo(),d=yo(),v=n.gameState.pendingLoot;se.useEffect(()=>{if(!(n.gameState.started&&!n.gameState.gameEnded&&!n.gameState.disconnectedPlayer&&n.gameState.currentPlayer===c.id&&!(l!=null&&l.piece.dead))){g.current=void 0;return}g.current!==n.gameState.currentPlayer&&(g.current=n.gameState.currentPlayer,p(!0))},[n.gameState.currentPlayer,n.gameState.disconnectedPlayer,n.gameState.gameEnded,n.gameState.started,c.id,l==null?void 0:l.piece.dead]);const x=()=>{o({choice:{type:Ee.reveal,card:{...l.piece.character,drawDeck:Or.characters},target:c.id},playerId:c.id,actionType:Xe.playerChoice})},b=()=>{var F;if(["chainOfForbiddenCurse","lightning","dynamiteNurse","demolish","murderRay","graveDigger"].includes(((F=l.piece.character.ability)==null?void 0:F.name)??"")){f(!0);return}m(Wi({playerId:c.id,actionType:Xe.playerAbility}))},y=C=>{const F=l.piece.character.ability,I=F.name==="lightning"?Kn(1,6):F.name==="demolish"?Kn(1,4):void 0;f(!1),m(Wi({playerId:c.id,actionType:Xe.playerAbility,targetId:C,roll:I}))},M=n.gameState.lobby.playerList.filter(C=>{var F;if(C.piece.dead)return!1;if(((F=l.piece.character.ability)==null?void 0:F.name)==="murderRay"){const I=n.gameState.lobby.decks[Or.areas].cards.findIndex(j=>j.name==="Underworld Gate");return C.piece.position===I}return C.user.id!==c.id}),S=Object.values(n.gameState.lobby.discard).flatMap(C=>C.cards),L=()=>{if(s){s();return}if(n.peerId===n.gameState.hostId){d("/");return}m(_o(bo.gameState)),d("/")},_=a?{...uo,marginRight:0,marginBottom:1,minWidth:"54px",paddingX:0}:uo,E=a?void 0:{marginRight:16,marginTop:"-4px"};return P.jsxs(Ri,{sx:{bottom:a?0:16,left:a?void 0:-16,right:a?0:void 0,position:"absolute",zIndex:1200,paddingTop:a?1.5:5,paddingLeft:a?1.5:5,paddingRight:a?1.5:0,paddingBottom:a?.5:0},display:"flex",spacing:"2px",justifyContent:"center",alignItems:"center",children:[P.jsxs(Ue,{sx:a?{display:"flex",flexDirection:"column",alignItems:"flex-start"}:void 0,children:[u?P.jsx(se.Fragment,{children:(v==null?void 0:v.killerId)===c.id?P.jsxs(se.Fragment,{children:[P.jsxs(Ie,{"aria-label":"Take equipment",sx:_,variant:"contained",onClick:()=>{f(!0)},children:[P.jsx(Dl,{style:E}),a?void 0:"Take equipment"]}),P.jsxs(Ie,{"aria-label":"Discard equipment",sx:_,variant:"contained",onClick:()=>{m(Wi({playerId:c.id,actionType:Xe.playerAbility,itemName:""}))},children:[P.jsx(Il,{style:E}),a?void 0:"Discard equipment"]})]}):n.gameState.currentPlayer===c.id&&!n.gameState.pendingCounterattack?P.jsxs(se.Fragment,{children:[l.piece.moved?void 0:P.jsxs(Ie,{"aria-label":"Move",sx:_,variant:"contained",onClick:()=>{t()},children:[P.jsx(Fl,{style:E}),a?void 0:"Move"]}),l.piece.attacked||!r?void 0:l.piece.moved?P.jsxs(Ie,{"aria-label":"Attack",sx:_,variant:"contained",onClick:()=>{e()},children:[P.jsx(zl,{style:E}),a?void 0:"Attack"]}):void 0,l.piece.revealed?void 0:P.jsxs(Ie,{"aria-label":"Reveal Character",sx:_,variant:"contained",onClick:()=>{x()},children:[P.jsx(kl,{style:E}),a?void 0:" Reveal Character"]}),!l.piece.revealed||l.piece.abilityUsed||((D=l.piece.character.ability)==null?void 0:D.target)===Br.attacker||!l.piece.character.ability||l.piece.character.ability.passive?void 0:P.jsxs(Ie,{"aria-label":"Use Ability",sx:_,variant:"contained",onClick:()=>{b()},children:[P.jsx(Nl,{style:E}),a?void 0:" Use Ability"]}),l.piece.moved&&!l.piece.attacked?P.jsxs(Ie,{"aria-label":"End Turn",sx:_,variant:"contained",color:"info",onClick:()=>{i()},children:[P.jsx(Bl,{style:E}),a?void 0:"End Turn"]}):void 0]}):void 0}):void 0,P.jsxs(Ie,{"aria-label":"Quit",sx:_,onClick:()=>L(),color:"error",variant:"contained",children:[P.jsx(Ol,{style:E}),a?void 0:" Quit"]})]}),P.jsxs(Ii,{open:h,onClose:()=>f(!1),children:[P.jsxs(Wn,{children:["Choose ",((k=l==null?void 0:l.piece.character.ability)==null?void 0:k.name)==="graveDigger"?"equipment":"a target"," for ",(O=l==null?void 0:l.piece.character.ability)==null?void 0:O.name]}),P.jsx(Un,{children:P.jsx(ri,{children:(v==null?void 0:v.killerId)===c.id?v==null?void 0:v.items.map(C=>P.jsx(Vs,{onClick:()=>{f(!1),m(Wi({playerId:c.id,actionType:Xe.playerAbility,itemName:C.name}))},children:P.jsx(ji,{primary:C.name})},`${C.drawDeck}-${C.name}`)):((z=l==null?void 0:l.piece.character.ability)==null?void 0:z.name)==="graveDigger"?S.filter(C=>C.isItem).map(C=>P.jsx(Vs,{onClick:()=>{f(!1),m(Wi({playerId:c.id,actionType:Xe.playerAbility,itemName:C.name}))},children:P.jsx(ji,{primary:C.name})},`${C.drawDeck}-${C.name}`)):M.map(C=>P.jsx(Vs,{onClick:()=>y(C.user.id),children:P.jsx(ji,{primary:C.user.userName})},C.user.id))})})]})]})}const e0=Do({themeId:fl}),ho=750,As=o=>!!(o!=null&&o.user.isBot),_r=(o,e)=>o.lobby.playerList.find(t=>t.user.id===e),Is=(o,e)=>o.piece.character.category!==Ls.neutral&&e.piece.character.category===o.piece.character.category;function ll(o,e,t){var r,s,a,n;if(t.piece.dead||t.user.id===e.user.id)return!1;if((s=(r=o.botHostilities)==null?void 0:r[e.user.id])!=null&&s.includes(t.user.id))return!0;if(t.piece.revealed)return t.piece.character.category!==e.piece.character.category;const i=(n=(a=o.botFactionKnowledge)==null?void 0:a[e.user.id])==null?void 0:n[t.user.id];return i!==void 0&&i!==e.piece.character.category}function t0(o,e,t=o.lobby.playerList){return t.filter(i=>!i.piece.dead&&i.user.id!==e.user.id).sort((i,r)=>{const s=Is(e,i)?-100:i.piece.character.category===Ls.neutral?1:2;return(Is(e,r)?-100:r.piece.character.category===Ls.neutral?1:2)-s||r.piece.damage-i.piece.damage})[0]}function Fs(o,e,t=o.lobby.playerList){return t0(o,e,t.filter(i=>ll(o,e,i)))}function i0(o,e,t){var i,r;return e.piece.character.category===Ls.neutral?!1:t.piece.revealed&&t.piece.character.category===e.piece.character.category?!0:((r=(i=o.botFactionKnowledge)==null?void 0:i[e.user.id])==null?void 0:r[t.user.id])===e.piece.character.category}function r0(o,e,t){const i=o.lobby.playerList.filter(a=>!a.piece.dead).length,r=Math.floor((o.completedTurns??0)/Math.max(1,i));if(r<=5)return;const s=t.filter(a=>!a.piece.dead&&a.user.id!==e.user.id&&!i0(o,e,a)&&!ll(o,e,a));return r===6?s.filter(a=>a.piece.damage>0).sort((a,n)=>n.piece.damage-a.piece.damage)[0]:s.sort((a,n)=>n.piece.damage-a.piece.damage)[0]}function cl(o,e,t=o.lobby.playerList){const i=t.filter(r=>!r.piece.dead&&r.user.id!==e.user.id);return i[Math.floor(Math.random()*i.length)]}function s0(o){return(o.damage??0)>0&&[Br.player,Br.both].includes(o.damageTarget??Br.player)||o.name==="Spiritual Doll"?!0:["Hermit's Anger 1","Hermit's Anger 2","Hermit's Blackmail 1","Hermit's Blackmail 2","Hermit's Bully","Hermit's Exorcism","Hermit's Greed 1","Hermit's Greed 2","Hermit's Slap 1","Hermit's Slap 2","Hermit's Spell","Hermit's Tough Lesson of Love"].includes(o.name)}function po(o,e){return o.lobby.playerList.filter(t=>!t.piece.dead&&t.user.id!==e.user.id&&Is(e,t)&&t.piece.damage>0).sort((t,i)=>i.piece.damage-t.piece.damage)[0]}function n0(o){return{playerId:o.user.id,actionType:Xe.playerMove,moveRoll:Pi([6,4])}}function a0(o,e){const t=e.piece.character.ability;if(!(!t||t.automatic||e.piece.abilityUsed||e.piece.abilityBlocked||e.piece.moved)){if(["mothersLove","stigmata"].includes(t.name)&&e.piece.damage>0)return{playerId:e.user.id,actionType:Xe.playerAbility};if(t.name==="graveDigger"){const i=Object.values(o.lobby.discard).flatMap(r=>r.cards).find(r=>r.isItem);return i?{playerId:e.user.id,actionType:Xe.playerAbility,itemName:i.name}:void 0}if(t.target===Br.player){const i=o.lobby.decks.areas.cards.findIndex(s=>s.name==="Underworld Gate"),r=t.name==="murderRay"?Fs(o,e,o.lobby.playerList.filter(s=>s.piece.position===i)):Fs(o,e);if(r)return{playerId:e.user.id,actionType:Xe.playerAbility,targetId:r.user.id,roll:t.name==="lightning"?6:t.name==="demolish"?4:void 0}}}}function o0(o){var i;if(o.gameEnded)return;if(o.pendingLoot){const r=_r(o,o.pendingLoot.killerId);return As(r)?{kind:"ability",event:{playerId:r.user.id,actionType:Xe.playerAbility,itemName:(i=o.pendingLoot.items[0])==null?void 0:i.name}}:void 0}if(o.pendingCounterattack){const r=_r(o,o.pendingCounterattack.responderId),s=_r(o,o.pendingCounterattack.attackerId);return As(r)&&s?{kind:"attack",event:{playerId:r.user.id,actionType:Xe.playerAttack,targets:[s.user],damageRoll:Dn(r)?[4]:[6,1],modifiers:Pn(r)}}:void 0}const e=_r(o,o.currentPlayer);if(!As(e)||e.piece.dead)return;const t=a0(o,e);if(t)return{kind:"ability",event:t};if(!e.piece.moved)return{kind:"move",event:n0(e)};if(!e.piece.attacked){const r=wo(o,e),s=Fs(o,e,r)??r0(o,e,r)??(Mo(e)?cl(o,e,r):void 0);return s?{kind:"attack",event:{playerId:e.user.id,actionType:Xe.playerAttack,targets:So(e)?r.map(a=>a.user):[s.user],damageRoll:Dn(e)?[4]:[6,1],modifiers:Pn(e)}}:{kind:"endTurn",event:{playerId:e.user.id,actionType:Xe.playerEndTurn}}}}function l0(o,e){var i,r,s;const t=_r(o,e.choice.type===Ee.weirdWoods?e.playerId:e.choice.target);if(As(t))switch(e.choice.type){case Ee.equipment:{const a=o.lobby.playerList.find(c=>c.user.id!==t.user.id&&c.piece.items.length>0),n=a==null?void 0:a.piece.items[0];return a&&n?`${a.user.id},${n.name}`:"skip"}case Ee.hermitGreed:{const a=t.piece.items[0];return a?`${t.user.id},${a.name}`:"damage"}case Ee.move:return JSON.stringify(Pi([6,4]).reduce((a,n,c,l)=>c===1&&l[0]+n===7?[6,4]:[...a,n],[]));case Ee.rerollMovement:return JSON.stringify(Pi([6,4]));case Ee.teleport:return"normal";case Ee.area:return(i=o.lobby.decks.areas.cards[0])==null?void 0:i.name;case Ee.reveal:return"yes";case Ee.draw:return po(o,t)||t.piece.damage>0?"green":"black";case Ee.target:{const a=/Aid|Huddle|Nurturance/i.test(e.choice.card.name),n=Fs(o,t);if(s0(e.choice.card))return((r=n??cl(o,t))==null?void 0:r.user.id)??"skip";if(/^Hermit's /i.test(e.choice.card.name)){const c=o.lobby.playerList.find(l=>{var u,p;return l.user.isBot&&l.user.id!==t.user.id&&!l.piece.dead&&((p=(u=o.botFactionKnowledge)==null?void 0:u[t.user.id])==null?void 0:p[l.user.id])===void 0});return(c==null?void 0:c.user.id)??"skip"}return((s=a?po(o,t):n)==null?void 0:s.user.id)??"skip"}case Ee.weirdWoods:{const a=_r(o,e.choice.target);return a&&Is(t,a)&&a.piece.damage>0?"heal":"damage"}case Ee.showCard:return t.user.id;default:return}}function c0({disconnectedPlayer:o,isHost:e,onQuit:t,onReplaceWithBot:i,onEndGame:r}){if(!o)return;const s=o.isHost?"The host":o.playerName;return P.jsxs(Ii,{open:!0,"aria-labelledby":"disconnect-dialog-title",children:[P.jsx(Wn,{id:"disconnect-dialog-title",children:"Game Paused"}),P.jsxs(Un,{children:[P.jsxs(At,{children:[s," disconnected. The game is paused for all players."]}),o.isHost&&!e?P.jsx(At,{sx:{marginTop:1},children:"Attempting to reconnect to the host automatically."}):void 0]}),P.jsxs(gl,{children:[P.jsx(Ie,{onClick:t,variant:"contained",children:"Quit"}),e&&!o.isHost?P.jsxs(P.Fragment,{children:[P.jsx(Ie,{onClick:i,variant:"contained",children:"Replace with Bot"}),P.jsx(Ie,{onClick:r,variant:"contained",color:"error",children:"End Game"})]}):void 0]})]})}const u0=o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function h0(o,e){const t=o.match(/^gave Hermit Card to .+? and (.+)$/);if(!t)return;let i=t[1];if(e){const r=u0(e);i=i.replace(new RegExp(`^${r} `),""),i=i.replace(new RegExp(`had no effect on ${r}\\.?$`),"no effect."),i=i.replace(new RegExp(` (?:to|from|on) ${r}(\\.)?$`),"$1")}return i}function d0(o,e){var a,n;const t=((a=o.find(c=>c.user.id===e.playerId))==null?void 0:a.user.userName)??"A player";if(e.revealedCard)return`${t} revealed their character.`;const i=e,r=i.choice,s=r==null?void 0:r.card.name;if(s!=null&&s.startsWith("Hermit's ")){const c=(n=o.find(p=>p.user.id===i.result))==null?void 0:n.user.userName,l=s.replace("Hermit's ","").replace(/\s+\d+$/,""),u=e.message?h0(e.message,c):void 0;return`${t}: ${l}${c?` → ${c}`:""}${u?` — ${u}`:"."}`}if(e.message)return`${t} ${e.message}`;switch(e.actionType){case"PlayerAttack":return`${t} is making an attack.`;case"PlayerChoice":return`${t} is making a choice.`;case"PlayerDeath":return`${t} died.`;case"PlayerMove":return`${t} is moving.`;case"PlayerDraw":return`${t} drew a card.`;case"PlayerAbility":return`${t} is using an ability.`;case"PlayerEndTurn":return`${t} ended their turn.`;default:return}}function p0(o){return zs("MuiTab",o)}const Gt=ks("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),m0=o=>{const{classes:e,textColor:t,fullWidth:i,wrapped:r,icon:s,label:a,selected:n,disabled:c}=o,l={root:["root",s&&a&&"labelIcon",`textColor${Eo(t)}`,i&&"fullWidth",r&&"wrapped",n&&"selected",c&&"disabled"],icon:["iconWrapper","icon"]};return Ur(l,p0,e)},f0=_i(Gn,{name:"MuiTab",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.label&&t.icon&&e.labelIcon,e[`textColor${Eo(t.textColor)}`],t.fullWidth&&e.fullWidth,t.wrapped&&e.wrapped,{[`& .${Gt.iconWrapper}`]:e.iconWrapper},{[`& .${Gt.icon}`]:e.icon}]}})(Hr(({theme:o})=>({...o.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:e})=>e.label&&(e.iconPosition==="top"||e.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:e})=>e.label&&e.iconPosition!=="top"&&e.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:e})=>e.icon&&e.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t==="top",style:{[`& > .${Gt.icon}`]:{marginBottom:6}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t==="bottom",style:{[`& > .${Gt.icon}`]:{marginTop:6}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t==="start",style:{[`& > .${Gt.icon}`]:{marginRight:o.spacing(1)}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t==="end",style:{[`& > .${Gt.icon}`]:{marginLeft:o.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${Gt.selected}`]:{opacity:1},[`&.${Gt.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(o.vars||o).palette.text.secondary,[`&.${Gt.selected}`]:{color:(o.vars||o).palette.primary.main},[`&.${Gt.disabled}`]:{color:(o.vars||o).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(o.vars||o).palette.text.secondary,[`&.${Gt.selected}`]:{color:(o.vars||o).palette.secondary.main},[`&.${Gt.disabled}`]:{color:(o.vars||o).palette.text.disabled}}},{props:({ownerState:e})=>e.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:e})=>e.wrapped,style:{fontSize:o.typography.pxToRem(12)}}]}))),mo=se.forwardRef(function(e,t){const i=Wr({props:e,name:"MuiTab"}),{className:r,disabled:s=!1,disableFocusRipple:a=!1,fullWidth:n,icon:c,iconPosition:l="top",indicator:u,label:p,onChange:h,onClick:f,onFocus:g,selected:m,selectionFollowsFocus:d,textColor:v="inherit",value:x,wrapped:b=!1,...y}=i,M={...i,disabled:s,disableFocusRipple:a,selected:m,icon:!!c,iconPosition:l,label:!!p,fullWidth:n,textColor:v,wrapped:b},S=m0(M),L=c&&p&&se.isValidElement(c)?se.cloneElement(c,{className:Zt(S.icon,c.props.className)}):c,_=D=>{!m&&h&&h(D,x),f&&f(D)},E=D=>{d&&!m&&h&&h(D,x),g&&g(D)};return P.jsxs(f0,{focusRipple:!a,className:Zt(S.root,r),ref:t,role:"tab","aria-selected":m,disabled:s,onClick:_,onFocus:E,ownerState:M,tabIndex:m?0:-1,...y,children:[l==="top"||l==="start"?P.jsxs(se.Fragment,{children:[L,p]}):P.jsxs(se.Fragment,{children:[p,L]}),u]})});function g0(o){return(1+Math.sin(Math.PI*o-Math.PI/2))/2}function v0(o,e,t,i={},r=()=>{}){const{ease:s=g0,duration:a=300}=i;let n=null;const c=e[o];let l=!1;const u=()=>{l=!0},p=h=>{if(l){r(new Error("Animation cancelled"));return}n===null&&(n=h);const f=Math.min(1,(h-n)/a);if(e[o]=s(f)*(t-c)+c,f>=1){requestAnimationFrame(()=>{r(null)});return}requestAnimationFrame(p)};return c===t?(r(new Error("Element already at target position")),u):(requestAnimationFrame(p),u)}const x0={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function y0(o){const{onChange:e,...t}=o,i=se.useRef(),r=se.useRef(null),s=()=>{i.current=r.current.offsetHeight-r.current.clientHeight};return On(()=>{const a=Lo(()=>{const c=i.current;s(),c!==i.current&&e(i.current)}),n=To(r.current);return n.addEventListener("resize",a),()=>{a.clear(),n.removeEventListener("resize",a)}},[e]),se.useEffect(()=>{s(),e(i.current)},[e]),P.jsx("div",{style:x0,...t,ref:r})}const _0=Ro(P.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),b0=Ro(P.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));function w0(o){return zs("MuiTabScrollButton",o)}const M0=ks("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),S0=o=>{const{classes:e,orientation:t,disabled:i}=o;return Ur({root:["root",t,i&&"disabled"]},w0,e)},E0=_i(Gn,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.orientation&&e[t.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${M0.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),T0=se.forwardRef(function(e,t){const i=Wr({props:e,name:"MuiTabScrollButton"}),{className:r,slots:s={},slotProps:a={},direction:n,orientation:c,disabled:l,...u}=i,p=Ao(),h={isRtl:p,...i},f=S0(h),g=s.StartScrollButtonIcon??_0,m=s.EndScrollButtonIcon??b0,d=Rs({elementType:g,externalSlotProps:a.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:h}),v=Rs({elementType:m,externalSlotProps:a.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:h});return P.jsx(E0,{component:"div",className:Zt(f.root,r),ref:t,role:null,ownerState:h,tabIndex:null,...u,style:{...u.style,...c==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${p?-90:90}deg)`}},children:n==="left"?P.jsx(g,{...d}):P.jsx(m,{...v})})});function A0(o){return zs("MuiTabs",o)}const Rn=ks("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),fo=(o,e)=>o===e?o.firstChild:e&&e.nextElementSibling?e.nextElementSibling:o.firstChild,go=(o,e)=>o===e?o.lastChild:e&&e.previousElementSibling?e.previousElementSibling:o.lastChild,Ms=(o,e,t)=>{let i=!1,r=t(o,e);for(;r;){if(r===o.firstChild){if(i)return;i=!0}const s=r.disabled||r.getAttribute("aria-disabled")==="true";if(!r.hasAttribute("tabindex")||s)r=t(o,r);else{r.focus();return}}},C0=o=>{const{vertical:e,fixed:t,hideScrollbar:i,scrollableX:r,scrollableY:s,centered:a,scrollButtonsHideMobile:n,classes:c}=o;return Ur({root:["root",e&&"vertical"],scroller:["scroller",t&&"fixed",i&&"hideScrollbar",r&&"scrollableX",s&&"scrollableY"],list:["list","flexContainer",e&&"flexContainerVertical",e&&"vertical",a&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",n&&"scrollButtonsHideMobile"],scrollableX:[r&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},A0,c)},L0=_i("div",{name:"MuiTabs",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${Rn.scrollButtons}`]:e.scrollButtons},{[`& .${Rn.scrollButtons}`]:t.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,t.vertical&&e.vertical]}})(Hr(({theme:o})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.scrollButtonsHideMobile,style:{[`& .${Rn.scrollButtons}`]:{[o.breakpoints.down("sm")]:{display:"none"}}}}]}))),R0=_i("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.scroller,t.fixed&&e.fixed,t.hideScrollbar&&e.hideScrollbar,t.scrollableX&&e.scrollableX,t.scrollableY&&e.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:o})=>o.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:o})=>o.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:o})=>o.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:o})=>o.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),P0=_i("div",{name:"MuiTabs",slot:"List",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.list,e.flexContainer,t.vertical&&e.flexContainerVertical,t.centered&&e.centered]}})({display:"flex",variants:[{props:({ownerState:o})=>o.vertical,style:{flexDirection:"column"}},{props:({ownerState:o})=>o.centered,style:{justifyContent:"center"}}]}),D0=_i("span",{name:"MuiTabs",slot:"Indicator"})(Hr(({theme:o})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(o.vars||o).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(o.vars||o).palette.secondary.main}},{props:({ownerState:e})=>e.vertical,style:{height:"100%",width:2,right:0}}]}))),I0=_i(y0)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),vo={},F0=se.forwardRef(function(e,t){const i=Wr({props:e,name:"MuiTabs"}),r=vl(),s=Ao(),{"aria-label":a,"aria-labelledby":n,action:c,centered:l=!1,children:u,className:p,component:h="div",allowScrollButtonsMobile:f=!1,indicatorColor:g="primary",onChange:m,orientation:d="horizontal",ScrollButtonComponent:v,scrollButtons:x="auto",selectionFollowsFocus:b,slots:y={},slotProps:M={},TabIndicatorProps:S={},TabScrollButtonProps:L={},textColor:_="primary",value:E,variant:D="standard",visibleScrollbar:k=!1,...O}=i,z=D==="scrollable",C=d==="vertical",F=C?"scrollTop":"scrollLeft",I=C?"top":"left",j=C?"bottom":"right",q=C?"clientHeight":"clientWidth",N=C?"height":"width",U={...i,component:h,allowScrollButtonsMobile:f,indicatorColor:g,orientation:d,vertical:C,scrollButtons:x,textColor:_,variant:D,visibleScrollbar:k,fixed:!z,hideScrollbar:z&&!k,scrollableX:z&&!C,scrollableY:z&&C,centered:l&&!z,scrollButtonsHideMobile:!f},ee=C0(U),V=Rs({elementType:y.StartScrollButtonIcon,externalSlotProps:M.startScrollButtonIcon,ownerState:U}),te=Rs({elementType:y.EndScrollButtonIcon,externalSlotProps:M.endScrollButtonIcon,ownerState:U}),[de,Re]=se.useState(!1),[J,Q]=se.useState(vo),[ie,ye]=se.useState(!1),[ne,Ve]=se.useState(!1),[Se,we]=se.useState(!1),[tt,_t]=se.useState({overflow:"hidden",scrollbarWidth:0}),ht=new Map,it=se.useRef(null),Ye=se.useRef(null),ze={slots:y,slotProps:{indicator:S,scrollButtons:L,...M}},zt=()=>{const pe=it.current;let xe;if(pe){const Ge=pe.getBoundingClientRect();xe={clientWidth:pe.clientWidth,scrollLeft:pe.scrollLeft,scrollTop:pe.scrollTop,scrollWidth:pe.scrollWidth,top:Ge.top,bottom:Ge.bottom,left:Ge.left,right:Ge.right}}let Pe;if(pe&&E!==!1){const Ge=Ye.current.children;if(Ge.length>0){const Je=Ge[ht.get(E)];Pe=Je?Je.getBoundingClientRect():null}}return{tabsMeta:xe,tabMeta:Pe}},gt=Us(()=>{const{tabsMeta:pe,tabMeta:xe}=zt();let Pe=0,Ge;C?(Ge="top",xe&&pe&&(Pe=xe.top-pe.top+pe.scrollTop)):(Ge=s?"right":"left",xe&&pe&&(Pe=(s?-1:1)*(xe[Ge]-pe[Ge]+pe.scrollLeft)));const Je={[Ge]:Pe,[N]:xe?xe[N]:0};if(typeof J[Ge]!="number"||typeof J[N]!="number")Q(Je);else{const kt=Math.abs(J[Ge]-Je[Ge]),A=Math.abs(J[N]-Je[N]);(kt>=1||A>=1)&&Q(Je)}}),R=(pe,{animation:xe=!0}={})=>{xe?v0(F,it.current,pe,{duration:r.transitions.duration.standard}):it.current[F]=pe},T=pe=>{let xe=it.current[F];C?xe+=pe:xe+=pe*(s?-1:1),R(xe)},Z=()=>{const pe=it.current[q];let xe=0;const Pe=Array.from(Ye.current.children);for(let Ge=0;Ge<Pe.length;Ge+=1){const Je=Pe[Ge];if(xe+Je[q]>pe){Ge===0&&(xe=pe);break}xe+=Je[q]}return xe},re=()=>{T(-1*Z())},ae=()=>{T(Z())},[ue,{onChange:Te,...$}]=ir("scrollbar",{className:Zt(ee.scrollableX,ee.hideScrollbar),elementType:I0,shouldForwardComponentProp:!0,externalForwardedProps:ze,ownerState:U}),be=se.useCallback(pe=>{Te==null||Te(pe),_t({overflow:null,scrollbarWidth:pe})},[Te]),[ge,_e]=ir("scrollButtons",{className:Zt(ee.scrollButtons,L.className),elementType:T0,externalForwardedProps:ze,ownerState:U,additionalProps:{orientation:d,slots:{StartScrollButtonIcon:y.startScrollButtonIcon||y.StartScrollButtonIcon,EndScrollButtonIcon:y.endScrollButtonIcon||y.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:V,endScrollButtonIcon:te}}}),ve=()=>{const pe={};pe.scrollbarSizeListener=z?P.jsx(ue,{...$,onChange:be}):null;const Pe=z&&(x==="auto"&&(ie||ne)||x===!0);return pe.scrollButtonStart=Pe?P.jsx(ge,{direction:s?"right":"left",onClick:re,disabled:!ie,..._e}):null,pe.scrollButtonEnd=Pe?P.jsx(ge,{direction:s?"left":"right",onClick:ae,disabled:!ne,..._e}):null,pe},Ae=Us(pe=>{const{tabsMeta:xe,tabMeta:Pe}=zt();if(!(!Pe||!xe)){if(Pe[I]<xe[I]){const Ge=xe[F]+(Pe[I]-xe[I]);R(Ge,{animation:pe})}else if(Pe[j]>xe[j]){const Ge=xe[F]+(Pe[j]-xe[j]);R(Ge,{animation:pe})}}}),Fe=Us(()=>{z&&x!==!1&&we(!Se)});se.useEffect(()=>{const pe=Lo(()=>{it.current&&gt()});let xe;const Pe=kt=>{kt.forEach(A=>{A.removedNodes.forEach(W=>{xe==null||xe.unobserve(W)}),A.addedNodes.forEach(W=>{xe==null||xe.observe(W)})}),pe(),Fe()},Ge=To(it.current);Ge.addEventListener("resize",pe);let Je;return typeof ResizeObserver<"u"&&(xe=new ResizeObserver(pe),Array.from(Ye.current.children).forEach(kt=>{xe.observe(kt)})),typeof MutationObserver<"u"&&(Je=new MutationObserver(Pe),Je.observe(Ye.current,{childList:!0})),()=>{pe.clear(),Ge.removeEventListener("resize",pe),Je==null||Je.disconnect(),xe==null||xe.disconnect()}},[gt,Fe]),se.useEffect(()=>{const pe=Array.from(Ye.current.children),xe=pe.length;if(typeof IntersectionObserver<"u"&&xe>0&&z&&x!==!1){const Pe=pe[0],Ge=pe[xe-1],Je={root:it.current,threshold:.99},kt=H=>{ye(!H[0].isIntersecting)},A=new IntersectionObserver(kt,Je);A.observe(Pe);const W=H=>{Ve(!H[0].isIntersecting)},X=new IntersectionObserver(W,Je);return X.observe(Ge),()=>{A.disconnect(),X.disconnect()}}},[z,x,Se,u==null?void 0:u.length]),se.useEffect(()=>{Re(!0)},[]),se.useEffect(()=>{gt()}),se.useEffect(()=>{Ae(vo!==J)},[Ae,J]),se.useImperativeHandle(c,()=>({updateIndicator:gt,updateScrollButtons:Fe}),[gt,Fe]);const[Ke,B]=ir("indicator",{className:Zt(ee.indicator,S.className),elementType:D0,externalForwardedProps:ze,ownerState:U,additionalProps:{style:J}}),he=P.jsx(Ke,{...B});let Y=0;const me=se.Children.map(u,pe=>{if(!se.isValidElement(pe))return null;const xe=pe.props.value===void 0?Y:pe.props.value;ht.set(xe,Y);const Pe=xe===E;return Y+=1,se.cloneElement(pe,{fullWidth:D==="fullWidth",indicator:Pe&&!de&&he,selected:Pe,selectionFollowsFocus:b,onChange:m,textColor:_,value:xe,...Y===1&&E===!1&&!pe.props.tabIndex?{tabIndex:0}:{}})}),oe=pe=>{if(pe.altKey||pe.shiftKey||pe.ctrlKey||pe.metaKey)return;const xe=Ye.current,Pe=xl(yl(xe));if((Pe==null?void 0:Pe.getAttribute("role"))!=="tab")return;let Je=d==="horizontal"?"ArrowLeft":"ArrowUp",kt=d==="horizontal"?"ArrowRight":"ArrowDown";switch(d==="horizontal"&&s&&(Je="ArrowRight",kt="ArrowLeft"),pe.key){case Je:pe.preventDefault(),Ms(xe,Pe,go);break;case kt:pe.preventDefault(),Ms(xe,Pe,fo);break;case"Home":pe.preventDefault(),Ms(xe,null,fo);break;case"End":pe.preventDefault(),Ms(xe,null,go);break}},qe=ve(),[rt,Qe]=ir("root",{ref:t,className:Zt(ee.root,p),elementType:L0,externalForwardedProps:{...ze,...O,component:h},ownerState:U}),[Kt,Ze]=ir("scroller",{ref:it,className:ee.scroller,elementType:R0,externalForwardedProps:ze,ownerState:U,additionalProps:{style:{overflow:tt.overflow,[C?`margin${s?"Left":"Right"}`:"marginBottom"]:k?void 0:-tt.scrollbarWidth}}}),[Vt,Et]=ir("list",{ref:Ye,className:Zt(ee.list,ee.flexContainer),elementType:P0,externalForwardedProps:ze,ownerState:U,getSlotProps:pe=>({...pe,onKeyDown:xe=>{var Pe;oe(xe),(Pe=pe.onKeyDown)==null||Pe.call(pe,xe)}})});return P.jsxs(rt,{...Qe,children:[qe.scrollButtonStart,qe.scrollbarSizeListener,P.jsxs(Kt,{...Ze,children:[P.jsx(Vt,{"aria-label":a,"aria-labelledby":n,"aria-orientation":d==="vertical"?"vertical":null,role:"tablist",...Et,children:me}),de&&he]}),qe.scrollButtonEnd]})}),Ss={width:"100%",minWidth:0,maxWidth:"100%",boxSizing:"border-box",overflowX:"hidden",contain:"inline-size"};function z0({player:o}){return P.jsx(Co,{sx:{backgroundColor:o.user.color},children:" "})}function k0({userId:o}){var c;const e=Di(l=>l.connection),[t,i]=se.useState("locations"),{lobby:r}=e.gameState,s=((c=r.decks[Or.areas])==null?void 0:c.cards)??[],[a,n]=se.useState({openModal:!1,src:"",alt:""});return P.jsxs(Ue,{component:"main","aria-label":"Mobile game board",sx:{position:"fixed",top:0,right:80,bottom:0,left:0,width:"auto",boxSizing:"border-box",overflowX:"hidden",overflowY:"auto",scrollbarGutter:"stable",contain:"inline-size",padding:1.5,paddingRight:0,paddingBottom:3,backgroundColor:"background.default"},children:[P.jsx(_l,{elevation:4,sx:{position:"sticky",top:4,zIndex:1,...Ss,marginBottom:1.5,borderRadius:3,overflow:"hidden"},children:P.jsxs(F0,{"aria-label":"Mobile board view",value:t,onChange:(l,u)=>i(u),variant:"fullWidth",sx:{width:"100%",minWidth:0,overflow:"hidden","& .MuiTabs-list, & .MuiTabs-flexContainer":{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",width:"100%",minWidth:0},"& .MuiTab-root":{width:"100%",minWidth:0,maxWidth:"100%",boxSizing:"border-box",color:"text.secondary"},"& .MuiTab-root.Mui-selected":{color:"#9ed0ff",backgroundColor:"rgba(62, 96, 145, 0.7)",fontWeight:700},"& .MuiTabs-indicator":{height:4,backgroundColor:"#9ed0ff"}},children:[P.jsx(mo,{value:"locations",label:"Locations"}),P.jsx(mo,{value:"players",label:"Players"})]})}),P.jsx(Ue,{sx:Ss,children:t==="locations"?P.jsx(Ri,{container:!0,spacing:1.5,sx:Ss,children:s.map((l,u)=>{const p=r.playerList.filter(h=>!h.piece.dead&&h.piece.position===u);return P.jsx(Ri,{size:12,children:P.jsx(zn,{variant:"outlined",children:P.jsxs(ra,{sx:{paddingTop:2,"&:last-child":{paddingBottom:2},display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.length>0?P.jsx(jl,{direction:"row",flexWrap:"wrap",gap:.75,children:p.map(h=>P.jsx(z0,{player:h},h.user.id))}):P.jsx(Ue,{}),P.jsx(Ue,{sx:{cursor:"zoom-in"},onClick:h=>{h.stopPropagation(),n({src:`/shadow_hunters/assets/game/areas/${l.name}.jpg`,alt:l.name,openModal:!0})},component:"img",width:35*1.5,height:50*1.5,alt:"Character Card",src:`/shadow_hunters/assets/game/areas/${l.name}.jpg`})]})})},`${l.name}-${u}`)})}):P.jsx(Ri,{container:!0,spacing:1.5,sx:Ss,children:r.playerList.map(l=>P.jsx(Ri,{size:12,sx:{minWidth:0,maxWidth:"100%"},children:P.jsx(zn,{variant:"outlined",sx:{width:"100%",minWidth:0,maxWidth:"100%",boxSizing:"border-box",opacity:l.piece.dead?.55:1,overflow:"hidden"},children:P.jsxs(ra,{sx:{position:"relative",minWidth:0,overflow:"hidden",paddingTop:0,"&:last-child":{minHeight:96,paddingY:2,paddingRight:13}},children:[P.jsxs(Ue,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",gap:1,minWidth:0},children:[P.jsxs(Ri,{sx:{display:"flex",alignItems:"center",gap:1,minWidth:0},children:[P.jsx(Co,{sx:{backgroundColor:l.user.color},children:" "}),P.jsx(At,{variant:"h5",noWrap:!0,sx:{minWidth:0,marginTop:"4px"},children:l.user.userName})]}),P.jsx(At,{variant:"h5",noWrap:!0,sx:{marginTop:"8px"},children:l.piece.dead?"Dead":`Damage: ${l.piece.damage}`})]}),P.jsx(Ue,{sx:{position:"absolute",top:"50%",right:"12px",transform:"translateY(-50%)",cursor:"zoom-in",backgroundColor:l.user.color,minWidth:"unset",padding:"10px"},children:P.jsx(Ue,{sx:{filter:l.piece.dead?"grayscale(100%)":"none"},onClick:u=>{u.stopPropagation(),n({src:l.user.id===o||l.piece.revealed?`/shadow_hunters/assets/game/characters/${l.piece.character.name}.jpg`:"/shadow_hunters/assets/game/card_backs/characters.jpg",alt:"Character Card",openModal:!0})},component:"img",width:35*1.5,height:50*1.5,alt:"Character Card",src:l.user.id===o||l.piece.revealed?`/shadow_hunters/assets/game/characters/${l.piece.character.name}.jpg`:"/shadow_hunters/assets/game/card_backs/characters.jpg"})})]})})},l.user.id))})}),P.jsx(Ii,{open:a.openModal,onClose:()=>n({openModal:!1,alt:"",src:""}),children:a.src&&P.jsx(Ue,{component:"img",height:600,src:a.src,alt:a.alt})})]})}const N0=se.lazy(()=>Tl(()=>import("./GameRender-DIXJSXJE.js"),__vite__mapDeps([0,1,2,3])));function U0(){var de,Re,J;const o=yo(),e=Di(Q=>Q.peer),t=Di(Q=>Q.connection),i=e0("(max-width:1000px)"),r=xo(),[s,a]=se.useState({openModal:!1,modalMessage:""}),[n,c]=se.useState({openModal:!1,modalMessage:""}),[l,u]=se.useState([]),[p,h]=se.useState(),[f,g]=se.useState(),[m,d]=se.useState(!1),[v,x]=se.useState(!1),[b,y]=se.useState(1),M=se.useRef(!1),S=se.useRef(void 0),L=se.useRef(!1),_=se.useRef(void 0),E=t.gameState.pendingCounterattack;se.useEffect(()=>{!t.gameState.started||!e.id||Zr.getPeer()||r(Ul(e.id))},[t.gameState.started,r,e.id]),se.useEffect(()=>{var Se;const Q=t.gameState.disconnectedPlayer,ie=t.gameState.hostId;if(!(Q!=null&&Q.isHost)||e.id===ie||!e.id||!ie||!((Se=e.userData)!=null&&Se.userName)||!e.userData.color)return;let ye=!0;const ne=()=>{!ye||L.current||!Zr.getPeer()||(L.current=!0,Promise.resolve(r(El(ie,{id:e.id,userName:e.userData.userName,color:e.userData.color}))).finally(()=>{L.current=!1}))};ne();const Ve=window.setInterval(ne,3e3);return()=>{ye=!1,window.clearInterval(Ve)}},[t.gameState.disconnectedPlayer,t.gameState.hostId,r,e.id,(de=e.userData)==null?void 0:de.color,(Re=e.userData)==null?void 0:Re.userName]),se.useEffect(()=>{const Q=t.gameState.lobby.playerList.find(ye=>ye.user.id===t.gameState.currentPlayer);if(!(t.gameState.started&&!t.gameState.gameEnded&&!t.gameState.disconnectedPlayer&&t.gameState.currentPlayer===e.id&&!(Q!=null&&Q.piece.dead))){_.current=void 0,x(!1);return}_.current===t.gameState.currentPlayer||t.playerEvents.length>0||(_.current=t.gameState.currentPlayer,x(!0))},[t.gameState.currentPlayer,t.gameState.disconnectedPlayer,t.gameState.gameEnded,t.gameState.lobby.playerList,t.gameState.started,t.playerEvents.length,e.id]),se.useEffect(()=>{(!t.id&&t.gameState.hostId!==e.id||!t.gameState.started)&&o("/"),Zr.setCallback(I)}),se.useEffect(()=>{if(t.gameState.hostId!==t.peerId||t.gameState.disconnectedPlayer||M.current||t.playerEvents.length>0||p||l.length>0||s.openModal)return;const Q=o0(t.gameState);if(!Q)return;const ie=window.setTimeout(()=>{Q.kind==="move"?r(Qn(Q.event)):Q.kind==="attack"?r(ea(Q.event)):Q.kind==="endTurn"?r(ta(Q.event)):r(Wi(Q.event))},t.gameState.botThinkTimeMs??ho);return()=>window.clearTimeout(ie)},[t.gameState,t.playerEvents.length,r,e.id,p,l.length,s.openModal]);const D=()=>{a({openModal:!1,modalMessage:""})},k=se.useCallback(()=>{c({openModal:!1,modalMessage:""}),r(bl())},[r]),O=()=>{if(!f)return;const Q={...f,result:"dismissed"};g(void 0),r(Hs(Q))},z=Q=>{switch(Q.choice.type){case Ee.equipment:return Q.playerId===Q.choice.target?"Choose Equipment to Give.":"Choose Equipment to Steal.";case Ee.hermitGreed:return"Give an item or take damage.";case Ee.hermitFaction:return"Choose its result.";case Ee.move:return"Choose Your Movement Roll.";case Ee.rerollMovement:return"Reroll movement.";case Ee.teleport:return"Move normally or teleport to an adjacent area.";case Ee.area:return"Choose Your Destination.";case Ee.reveal:return"Reveal Your Character?";case Ee.showCard:return"Show Your Character Card.";case Ee.target:return"Choose Your Target.";case Ee.draw:return"Choose Deck to Draw From.";case Ee.weirdWoods:return"Choose an effect for the targeted player.";case Ee.counterattack:return"You were attacked.";default:return"default choice text"}},C=Q=>wo(t.gameState,Q).map(ie=>ie.user),F=Q=>{var ye;const ie=t.gameState.lobby.playerList.filter(ne=>ne.user.id===t.gameState.currentPlayer)[0];if(Q)a({openModal:!1,modalMessage:""}),((ye=t.gameState.pendingCounterattack)==null?void 0:ye.responderId)===ie.user.id&&h(void 0),r(ea({targets:Q,damageRoll:Dn(ie)?Pi([4]):Pi([6,4]),modifiers:Pn(ie),playerId:ie.user.id,actionType:Xe.playerAttack}));else{if(ie.piece.items.length>0){const Ve=ie.piece.items.map(Se=>Al(t.gameState,Se));if(Ve.filter(Se=>Se.choice).length>0){const Se=Ve.filter(we=>we.choice)[0];I({choice:Se.choice,playerId:ie.user.id,actionType:Xe.playerChoice});return}}const ne=C(ie);if(So(ie)){ne.length>0&&F(ne);return}if(ne.length===0)return;a({modalMessage:"Choose Your Target.",targets:ne,hasSword:Mo(ie),openModal:!0})}},I=Q=>{if(!t.gameState.disconnectedPlayer&&!(Q.choice.type===Ee.showCard&&Q.choice.target!==e.id)){if(Q.choice.type===Ee.showCard&&!Q.result){g(Q);return}if(Q.choice.type===Ee.counterattack&&Q.result==="skip"){h(void 0),a({openModal:!1,modalMessage:""}),r(Wi({playerId:Q.playerId,actionType:Xe.playerAbility,skipCounterattack:!0}));return}Q.result?(h(void 0),a({openModal:!1,modalMessage:""}),r(Hs(Q))):u(ie=>[...ie,Q])}};se.useEffect(()=>{if(!E||E.responderId!==e.id){S.current=void 0;return}const Q=`${E.responderId}:${E.attackerId}`;S.current!==Q&&(S.current=Q,u(ie=>[...ie,{playerId:E.responderId,actionType:Xe.playerChoice,choice:{card:{name:"Counterattack",drawDeck:Or.characters},type:Ee.counterattack,target:E.attackerId}}]))},[E,e.id]),se.useEffect(()=>{if(t.gameState.disconnectedPlayer||t.playerEvents.length>0||s.openModal||p||l.length===0||M.current)return;const[Q,...ie]=l;u(ie);const ye=l0(t.gameState,Q);if(ye!==void 0){M.current=!0,window.setTimeout(()=>{M.current=!1,r(Hs({...Q,result:ye}))},t.gameState.botThinkTimeMs??ho);return}h(Q)},[p,s.openModal,l,t.gameState,t.playerEvents.length,r]);const j=()=>{const Q=t.gameState.lobby.playerList.filter(ne=>ne.user.id===t.gameState.currentPlayer)[0],ie=Pi([6,4]),ye=Cl(Q);if(ye){I({playerId:t.gameState.currentPlayer,choice:{card:ye,type:Ee.move,value:(ie[0]+ie[1]).toString(),target:t.gameState.currentPlayer},actionType:Xe.playerAttack});return}r(Qn({playerId:t.gameState.currentPlayer,moveRoll:ie,actionType:Xe.playerMove}))},q=()=>{r(ta({playerId:t.gameState.currentPlayer,actionType:Xe.playerEndTurn}))},N=()=>{if(t.peerId===t.gameState.hostId){d(!0);return}Zr.closePeerSession().finally(()=>r(Vl())),r(_o(bo.gameState)),o("/")},U=t.gameState.lobby.playerList.find(Q=>Q.user.id===t.gameState.currentPlayer),ee=!!(U&&U.user.id===e.id&&U.piece.moved&&!U.piece.attacked&&!U.piece.dead&&C(U).length>0),V=p?{openModal:!0,modalMessage:z(p),playerChoice:p}:s,te=t.gameState.lobby.playerList.filter(Q=>{var ie;return(ie=t.gameState.victors)==null?void 0:ie.includes(Q.user.id)}).map(Q=>Q.user.userName);return P.jsxs(se.Fragment,{children:[void 0,i?P.jsx(k0,{userId:e.id}):!e.loading&&!t.loading&&t.gameState.lobby.decks[Or.areas].cards.length>1?P.jsx(se.Suspense,{fallback:P.jsx(Cs,{}),children:P.jsx(N0,{scale:b})}):P.jsx(Cs,{}),i?P.jsx(Ue,{"aria-hidden":!0,sx:{position:"fixed",top:0,right:0,bottom:0,width:80,zIndex:1100,pointerEvents:"none",background:"linear-gradient(270deg, rgba(25, 34, 49, 0.98), rgba(36, 52, 77, 0.9))",borderLeft:"2px solid rgba(255, 255, 255, 0.3)",boxShadow:"-3px 0 12px rgba(0, 0, 0, 0.4)"}}):void 0,i?void 0:P.jsx(Ue,{"aria-hidden":!0,sx:{position:"fixed",top:0,left:0,right:0,height:"82px",zIndex:1100,pointerEvents:"none",background:"linear-gradient(180deg, rgba(25, 34, 49, 0.98), rgba(36, 52, 77, 0.92))",borderBottom:"2px solid rgba(255, 255, 255, 0.3)",boxShadow:"0 3px 12px rgba(0, 0, 0, 0.45)","&::after":{content:'""',position:"absolute",inset:"6px 8px",borderBottom:"1px solid rgba(255, 255, 255, 0.15)"}}}),i?void 0:P.jsx(Ue,{"aria-hidden":!0,sx:{position:"fixed",bottom:0,left:0,right:0,height:"82px",zIndex:1100,pointerEvents:"none",background:"linear-gradient(0deg, rgba(25, 34, 49, 0.98), rgba(36, 52, 77, 0.92))",borderTop:"2px solid rgba(255, 255, 255, 0.3)",boxShadow:"0 -3px 12px rgba(0, 0, 0, 0.45)","&::after":{content:'""',position:"absolute",inset:"6px 8px",borderTop:"1px solid rgba(255, 255, 255, 0.15)"}}}),i?void 0:P.jsx(Ue,{sx:{position:"fixed",left:24,bottom:90,zIndex:1201,width:220,paddingX:1.5,paddingTop:.5,borderRadius:1,backgroundColor:"rgba(25, 34, 49, 0.92)"},children:P.jsx(Hl,{id:"board-zoom-slider","aria-label":"Board zoom",min:.5,max:1.5,step:.25,marks:!0,value:b,valueLabelDisplay:"auto",getAriaValueText:Q=>`${Q.toFixed(2)} times zoom`,onChange:(Q,ie)=>y(ie)})}),i?void 0:P.jsx(ic,{userId:e.id}),P.jsx(rc,{noText:i}),P.jsx(Qg,{compact:i,handleMove:j,handleEndTurn:q,handleAttack:F,handleChoice:I,canAttack:ee,onQuit:N}),P.jsxs(Ii,{open:t.gameState.gameEnded===!0&&t.playerEvents.length===0,children:[P.jsx(Wn,{children:"Game Over"}),P.jsx(Un,{children:P.jsx(At,{children:t.gameState.endedByHost?"The host ended the game.":t.gameState.endedByDisconnect?"The host ended the game after a player disconnected.":te.length===1?`${te[0]} wins!`:`${te.join(", ")} win!`})})]}),P.jsx(sc,{handleModalClose:D,modalState:V,handleAttack:F,handleChoice:I}),v?P.jsx(Ln,{playerEvent:{playerId:e.id,actionType:Xe.playerEndTurn,animateDice:!1},handleModalClose:()=>x(!1),modalState:{openModal:!0,modalMessage:"It's your turn."}}):f?P.jsx(Ln,{playerEvent:{playerId:f.playerId,actionType:Xe.playerChoice},handleModalClose:O,revealedCard:f.choice.card,modalState:{openModal:!0,modalMessage:`${((J=t.gameState.lobby.playerList.find(Q=>Q.user.id===f.choice.value))==null?void 0:J.user.userName)??"A player"}'s character.`}}):t.playerEvents.length>0?P.jsx(Ln,{playerEvent:t.playerEvents[0],handleModalClose:k,revealedCard:t.playerEvents[0].revealedCard,card:t.playerEvents[0].card,modalState:{...n,openModal:!0,modalMessage:d0(t.gameState.lobby.playerList,t.playerEvents[0])??""}}):void 0,P.jsx(c0,{disconnectedPlayer:t.gameState.disconnectedPlayer,isHost:t.peerId===t.gameState.hostId,onQuit:N,onReplaceWithBot:()=>{var ie;const Q=(ie=t.gameState.disconnectedPlayer)==null?void 0:ie.playerId;Q&&r(Ml(Q))},onEndGame:()=>{var ie;const Q=(ie=t.gameState.disconnectedPlayer)==null?void 0:ie.playerId;Q&&r(wl(Q))}}),P.jsx(Gl,{open:m,onCancel:()=>d(!1),onConfirm:()=>{d(!1),r(Sl()),o("/")}})]})}export{U0 as default};
//# sourceMappingURL=GameBoard-5xEtSKAY.js.map
