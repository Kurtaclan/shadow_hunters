const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameRender-BEL1Q-gS.js","assets/index-BOyP2wim.js","assets/index-Du4irVUR.css","assets/Divider-DuiU0jcD.js"])))=>i.map(i=>d[i]);
import{r as we,u as ja,a8 as Bo,K as Go,j as I,c as dn,f as qa,s as Xa,Y as Uo,ad as Ho,R as Ya,g as Wo,O as Vo,p as Bi,x as lt,T as It,B as Re,D as Hi,an as nt,ao as be,ap as wi,aq as Ge,ar as ds,q as $a,t as Za,as as ps,at as Ri,au as Cr,l as yn,n as bn,C as Ja,F as Ka,av as In,aw as pn,ax as mn,ay as Qa,az as eo,aA as to,aB as ms,o as jo,P as kr,aC as Fn,aD as zn,aE as kn,aF as qo,aG as Es,aH as Xo,aI as Yo,z as $o,A as Zo,aJ as Jo,aK as Ko,aL as Qo}from"./index-BOyP2wim.js";import{g as el,l as vr,L as Rt,a as Fi,e as fn,h as tl,i as il,j as rl,k as sl,m as nl,n as al,o as ol,p as ll,b as cl,H as ul}from"./HostQuitDialog-C2CfXN2v.js";import{e as gn,G as wn,B as He,D as Dt,L as qt,b as hl,S as dl,f as pl}from"./Divider-DuiU0jcD.js";const ml=(o,e)=>{const{ownerState:t}=o;return[e.root,t.dense&&e.dense,t.alignItems==="flex-start"&&e.alignItemsFlexStart,t.divider&&e.divider,!t.disableGutters&&e.gutters]},fl=o=>{const{alignItems:e,classes:t,dense:i,disabled:r,disableGutters:s,divider:n,selected:a}=o,c=qa({root:["root",i&&"dense",!s&&"gutters",n&&"divider",r&&"disabled",e==="flex-start"&&"alignItemsFlexStart",a&&"selected"]},el,t);return{...t,...c}},gl=Xa(Uo,{shouldForwardProp:o=>Ho(o)||o==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:ml})(Ya(({theme:o})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${vr.selected}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,(o.vars||o).palette.action.selectedOpacity),[`&.${vr.focusVisible}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.focusOpacity}`)}},[`&.${vr.selected}:hover`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:o.alpha((o.vars||o).palette.primary.main,(o.vars||o).palette.action.selectedOpacity)}},[`&.${vr.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${vr.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]}))),Ts=we.forwardRef(function(e,t){const i=ja({props:e,name:"MuiListItemButton"}),{alignItems:r="center",autoFocus:s=!1,component:n="div",children:a,dense:l=!1,disableGutters:c=!1,divider:u=!1,focusVisibleClassName:p,selected:h=!1,className:f,...g}=i,m=we.useContext(gn),d=we.useMemo(()=>({dense:l||m.dense||!1,alignItems:r,disableGutters:c}),[r,m.dense,l,c]),v=we.useRef(null);Bo(()=>{s&&v.current&&v.current.focus()},[s]);const x={...i,alignItems:r,dense:d.dense,disableGutters:c,divider:u,selected:h},b=fl(x),{root:_,...M}=b,S=Go(v,t);return I.jsx(gn.Provider,{value:d,children:I.jsx(gl,{ref:S,href:g.href||g.to,component:(g.href||g.to)&&n==="div"?"button":n,focusVisibleClassName:dn(b.focusVisible,p),ownerState:x,className:dn(b.root,f),...g,classes:M,children:a})})});function vl(o){return Wo("MuiListItemIcon",o)}Vo("MuiListItemIcon",["root","alignItemsFlexStart"]);const xl=o=>{const{alignItems:e,classes:t}=o;return qa({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},vl,t)},_l=Xa("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(Ya(({theme:o})=>({minWidth:56,color:(o.vars||o).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),yl=we.forwardRef(function(e,t){const i=ja({props:e,name:"MuiListItemIcon"}),{className:r,...s}=i,n=we.useContext(gn),a={...i,alignItems:n.alignItems},l=xl(a);return I.jsx(_l,{className:dn(l.root,r),ownerState:a,ref:t,...s})});function bl({userId:o}){const e=Bi(l=>l.connection),[t,i]=we.useState({items:[]}),[r,s]=we.useState(!1),[n,a]=we.useState({openModal:!1,src:"",alt:""});return I.jsxs(we.Fragment,{children:[I.jsxs(wn,{sx:{bottom:88,right:16,position:"absolute",zIndex:1200},display:"flex",justifyContent:"center",alignItems:"top",children:[t.anchor&&r?I.jsxs(He,{sx:{marginRight:2,backgroundColor:lt.palette.background.default,paddingTop:2,minWidth:"300px"},children:[I.jsx(It,{sx:{marginLeft:1},variant:"h5",children:"Equipment"}),I.jsx(Dt,{variant:"fullWidth",sx:{marginBottom:1}}),I.jsx(qt,{disablePadding:!0,sx:{overflowY:"auto",overflowX:"hidden",maxHeight:"250px",backgroundColor:lt.palette.background.paper},children:t.items.length==0?I.jsx(Rt,{sx:{height:"66px",width:"220px",paddingTop:"16px",verticalAlign:"top",display:"inline-block"},children:I.jsx(Fi,{children:"None"})}):t.items.map((l,c)=>I.jsxs(we.Fragment,{children:[c===0?void 0:I.jsx(Dt,{variant:"fullWidth",component:"li"}),I.jsxs(Rt,{sx:{cursor:"zoom-in"},onClick:()=>a({src:`/shadow_hunters/assets/game/${l.drawDeck}/${l.name}.jpg`,alt:l.name,openModal:!0}),children:[I.jsx(Fi,{primary:l.name}),I.jsx(fn,{children:I.jsx(He,{sx:{float:"right"},component:"img",width:35,height:50,alt:l.name,src:`/shadow_hunters/assets/game/${l.drawDeck}/${l.name}.jpg`})})]})]},`item_list_item_${c}`))})]}):void 0,r?I.jsxs(He,{sx:{backgroundColor:lt.palette.background.default,paddingTop:2,minWidth:"300px",maxHeight:"350px"},children:[I.jsx(It,{sx:{marginLeft:1},variant:"h5",children:"Players"}),I.jsx(Dt,{variant:"fullWidth",sx:{marginBottom:1}}),I.jsx(qt,{disablePadding:!0,sx:{overflowY:"auto",overflowX:"hidden",maxHeight:"250px",backgroundColor:lt.palette.background.paper},children:e.gameState.lobby.playerList.map((l,c)=>{var u,p;return I.jsxs(we.Fragment,{children:[c===0?void 0:I.jsx(Dt,{variant:"fullWidth",component:"li"}),I.jsxs(Rt,{id:`list_item_${c}`,onClick:h=>l.piece.dead?void 0:i({items:l.piece.items,anchor:h.currentTarget,player:l.user.userName}),sx:{cursor:l.piece.dead?"default":"pointer",backgroundColor:((u=t.anchor)==null?void 0:u.id)===`list_item_${c}`?((p=lt.palette)==null?void 0:p.info).main:void 0},children:[l.piece.dead?I.jsx(yl,{sx:{minWidth:"30px"},children:I.jsx(tl,{color:"#f44336"})}):void 0,I.jsx(Fi,{primary:l.user.userName}),I.jsx(fn,{sx:{cursor:"zoom-in",backgroundColor:l.user.color,minWidth:"unset",padding:"10px"},children:I.jsx(He,{sx:{float:"right",filter:l.piece.dead?"grayscale(100%)":"none"},onClick:h=>{h.stopPropagation(),a({src:l.user.id===o||l.piece.revealed?`/shadow_hunters/assets/game/characters/${l.piece.character.name}.jpg`:"/shadow_hunters/assets/game/card_backs/characters.jpg",alt:"Character Card",openModal:!0})},component:"img",width:35,height:50,alt:"Character Card",src:l.user.id===o||l.piece.revealed?`/shadow_hunters/assets/game/characters/${l.piece.character.name}.jpg`:"/shadow_hunters/assets/game/card_backs/characters.jpg"})})]})]},`list_item_${c}`)})})]}):void 0]}),I.jsxs(Re,{sx:{height:"54.75px",paddingX:3,fontSize:"1.3125rem",marginLeft:2,bottom:16,right:16,position:"absolute",zIndex:1200},variant:"contained",onClick:()=>s(!r),children:[I.jsx(il,{style:{marginRight:16,marginTop:"-4px"}}),"Players"]}),I.jsx(Hi,{open:n.openModal,onClose:()=>a({openModal:!1,alt:"",src:""}),children:n.src&&I.jsx(He,{component:"img",height:600,src:n.src,alt:n.alt})})]})}function wl(){const o=Bi(n=>n.connection),[e,t]=we.useState(!1),i="rgba(25, 34, 49, .5)",[r,s]=we.useState({openModal:!1,src:"",alt:""});return I.jsxs(wn,{sx:{top:0,right:16,position:"absolute",zIndex:1200,paddingTop:2,paddingLeft:5},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"top",children:[I.jsx(He,{width:"100%",children:I.jsxs(Re,{sx:{minHeight:"54px",paddingX:3,fontSize:"1.3125rem",marginBottom:2,float:"right"},variant:"contained",onClick:()=>t(!e),children:[I.jsx(rl,{style:{marginRight:16,marginTop:"-4px"}})," Log"]})}),e?I.jsxs(He,{sx:{backgroundColor:lt.palette.background.default,paddingTop:1,minWidth:"500px",maxHeight:"300px",borderRadius:"8px"},children:[I.jsx(It,{sx:{marginLeft:2},variant:"h5",children:"Log"}),I.jsx(Dt,{}),I.jsx(qt,{disablePadding:!0,sx:{overflowY:"auto",overflowX:"hidden",minHeight:"200px",maxHeight:"200px",paddingX:1,backgroundColor:lt.palette.background.paper},children:o.gameState.lobby.gameLog.map((n,a)=>I.jsxs(Rt,{sx:{backgroundColor:i,borderRadius:"8px",marginBottom:1},children:[I.jsx(Fi,{disableTypography:!0,primary:I.jsxs(He,{children:[I.jsx(It,{variant:"body1",children:n.userName}),I.jsx(Dt,{sx:{marginBottom:1}})]}),secondary:I.jsx(It,{variant:"body2",children:n.text})}),n.info.includes("/")?I.jsx(fn,{sx:{cursor:"zoom-in"},onClick:()=>s({src:`/shadow_hunters/assets/game/${n.info}.jpg`,alt:n.info,openModal:!0}),children:I.jsx(He,{sx:{float:"right"},component:"img",alt:n.info,width:35,height:50,src:`/shadow_hunters/assets/game/${n.info}.jpg`})}):void 0]},`log_item_${a}`))})]}):void 0,I.jsx(Hi,{open:r.openModal,onClose:()=>s({openModal:!1,alt:"",src:""}),children:r.src&&I.jsx(He,{component:"img",height:600,src:r.src,alt:r.alt})})]})}function Ml({handleModalClose:o=()=>{},modalState:e,handleAttack:t=r=>r,handleChoice:i=r=>r}){var g,m;const r=((g=lt.palette)==null?void 0:g.secondary).main,s=((m=lt.palette)==null?void 0:m.secondary).main,n=Bi(d=>d.connection),[a,l]=nt.useState({}),[c,u]=nt.useState({}),p=(d,v)=>d.length===0?I.jsx(He,{sx:{width:"100%"},children:I.jsx(Re,{sx:{marginTop:2,float:"right"},variant:"contained",onClick:()=>{l({clickTarget:void 0,hoverTarget:void 0}),o()},children:"Ok"})}):I.jsxs(He,{sx:{width:"100%"},children:[I.jsx(qt,{disablePadding:!0,sx:{backgroundColor:lt.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:d.map((x,b)=>I.jsxs(nt.Fragment,{children:[b===0?void 0:I.jsx(Dt,{variant:"fullWidth",component:"li"}),I.jsx(Rt,{sx:{cursor:"pointer",color:x===a.clickTarget?"white":void 0,backgroundColor:x===a.clickTarget?s:x===a.hoverTarget?r:void 0},onMouseEnter:()=>l({...a,hoverTarget:x}),onMouseLeave:()=>l({...a,hoverTarget:void 0}),onClick:()=>l({...a,clickTarget:x}),children:x.userName})]},`attack_target_${b}`))}),I.jsxs(He,{display:"flex",justifyContent:"flex-end",sx:{width:"100%"},children:[I.jsx(Re,{sx:{marginRight:2},variant:"contained",disabled:a.clickTarget===void 0,onClick:()=>{l({clickTarget:void 0,hoverTarget:void 0}),o(),t([a.clickTarget])},children:"Ok"}),v?void 0:I.jsx(Re,{variant:"contained",onClick:()=>{l({clickTarget:void 0,hoverTarget:void 0}),o()},children:"Cancel"})]})]}),h=(d,v)=>I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",disabled:c.clickTarget===void 0,onClick:()=>{d.result=c.clickTarget,u({}),o(),i(d)},children:v}),f=d=>{let v=d.choice.type!==be.counterattack&&d.choice.type!==be.move&&d.choice.type!==be.rerollMovement&&d.choice.type!==be.teleport&&d.choice.type!==be.area;return I.jsxs(He,{sx:{marginTop:2,width:"100%"},display:"flex",justifyContent:"space-between",alignItems:"center",children:[v?I.jsx(He,{component:"img",sx:{height:360},alt:d.choice.card.name,src:`/shadow_hunters/assets/game/${d.choice.card.drawDeck}/${d.choice.card.name}.jpg`}):void 0,I.jsx(He,{display:"flex",justifyContent:"flex-end",flexDirection:"column",sx:{height:v?340:"100%",width:v?200:"100%",gap:2},children:(()=>{var x;switch(d.choice.type){case be.equipment:{const b=d.choice.card.name==="Erstwhile Altar",_=d.choice.card.name==="Banana Peel",M=n.gameState.lobby.playerList.filter(S=>S.piece.items.length>0&&(b?S.user.id!==d.playerId:S.user.id===d.choice.target));return I.jsxs(nt.Fragment,{children:[I.jsx(qt,{disablePadding:!0,sx:{backgroundColor:lt.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:M.map((S,C)=>S.piece.items.map((y,E)=>{const D=`${S.user.id},${y.name}`;return I.jsxs(nt.Fragment,{children:[C+E===0?void 0:I.jsx(Dt,{variant:"fullWidth",component:"li"}),I.jsx(Rt,{sx:{cursor:"pointer",color:D===c.clickTarget?"white":void 0,backgroundColor:D===c.clickTarget?s:D===c.hoverTarget?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:D}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:D}),children:`${S.user.userName} -> ${y.name}`})]},`choice_target_${C}_${E}`)}))}),M.length>0?h(d,_?"Discard equipment":"Ok"):I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="skip",o(),i(d)},children:"Skip"})]})}case be.hermitGreed:{const b=n.gameState.lobby.playerList.find(_=>_.user.id===d.choice.target);return I.jsxs(nt.Fragment,{children:[I.jsx(qt,{disablePadding:!0,sx:{backgroundColor:lt.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:b==null?void 0:b.piece.items.map(_=>{const M=`${b.user.id},${_.name}`;return I.jsx(Rt,{sx:{cursor:"pointer",color:M===c.clickTarget?"white":void 0,backgroundColor:M===c.clickTarget?s:M===c.hoverTarget?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:M}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:M}),children:`Give ${_.name}`},M)})}),h(d,"Give equipment"),I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",color:"warning",onClick:()=>{d.result="damage",u({}),o(),i(d)},children:"Take 1 damage"})]})}case be.hermitFaction:return I.jsxs(nt.Fragment,{children:[I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="shadow",o(),i(d)},children:"Resolve as Shadow"}),I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="hunter",o(),i(d)},children:"Resolve as Hunter"}),I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="neutral",o(),i(d)},children:"Resolve as Neutral"})]});case be.move:{const b=wi([4,6]);return I.jsxs(nt.Fragment,{children:[I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=d.choice.value,o(),i(d)},children:d.choice.value}),I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=JSON.stringify(b),o(),i(d)},children:b[0]+b[1]})]})}case be.rerollMovement:{const b=wi([6,4]);return I.jsxs(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=JSON.stringify(b),o(),i(d)},children:["Reroll movement (",b[0]," + ",b[1],")"]})}case be.teleport:{const b=(x=n.gameState.lobby.playerList.find(S=>S.user.id===d.playerId))==null?void 0:x.piece.position,_=n.gameState.lobby.decks.areas.cards,M=b===void 0||b<0?[]:[_[(b-1+_.length)%_.length],_[(b+1)%_.length]].filter((S,C,y)=>!!S&&y.findIndex(E=>(E==null?void 0:E.name)===(S==null?void 0:S.name))===C);return I.jsxs(nt.Fragment,{children:[I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="normal",o(),i(d)},children:"Move normally"}),M.map(S=>I.jsxs(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=S.name,o(),i(d)},children:["Teleport to ",S.name]},S.name))]})}case be.area:return I.jsxs(nt.Fragment,{children:[I.jsx(qt,{disablePadding:!0,sx:{backgroundColor:lt.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:n.gameState.lobby.decks.areas.cards.map((b,_)=>I.jsxs(nt.Fragment,{children:[_===0?void 0:I.jsx(Dt,{variant:"fullWidth",component:"li"}),I.jsx(Rt,{sx:{cursor:"pointer",color:b.name===c.clickTarget?"white":void 0,backgroundColor:b.name===c.clickTarget?s:b.name===c.hoverTarget?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:b.name}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:b.name}),children:b.name})]},`area_${b.name}`))}),h(d,"Ok")]});case be.reveal:return I.jsxs(nt.Fragment,{children:[I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="yes",o(),i(d)},children:"Yes"}),I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="no",o(),i(d)},children:"No"})]});case be.target:{const b=d.choice.card.name.startsWith("Hermit's "),_=n.gameState.lobby.playerList.filter(M=>(!M.piece.dead||d.choice.card.name==="Blessing"&&M.user.id===d.choice.target)&&(!b||M.user.id!==d.playerId));return _.length===0?I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="skip",o(),i(d)},children:"Skip"}):I.jsxs(nt.Fragment,{children:[I.jsx(qt,{disablePadding:!0,sx:{backgroundColor:lt.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:_.map((M,S)=>I.jsxs(nt.Fragment,{children:[S===0?void 0:I.jsx(Dt,{variant:"fullWidth",component:"li"}),I.jsx(Rt,{sx:{cursor:"pointer",color:M.user.id===c.clickTarget?"white":void 0,backgroundColor:M.user.id===c.clickTarget?s:M.user.id===c.hoverTarget?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:M.user.id}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:M.user.id}),children:M.user.userName})]},`choice_target_${S}`))}),h(d,"Ok")]})}case be.weirdWoods:{const b=n.gameState.lobby.playerList.find(_=>_.user.id===d.choice.target);return I.jsxs(nt.Fragment,{children:[I.jsxs(It,{children:["Choose an effect for ",(b==null?void 0:b.user.userName)??"the targeted player","."]}),I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="damage",o(),i(d)},children:"Deal 2 Damage"}),I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="heal",o(),i(d)},children:"Heal 1 Damage"})]})}case be.counterattack:{const b=n.gameState.lobby.playerList.find(_=>_.user.id===d.choice.target);return I.jsxs(nt.Fragment,{children:[I.jsxs(It,{children:["Counterattack ",(b==null?void 0:b.user.userName)??"the attacker","?"]}),I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{o(),t(b?[b.user]:[])},children:"Counterattack"}),I.jsx(Re,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="skip",o(),i(d)},children:"Skip"})]})}case be.draw:return I.jsxs(nt.Fragment,{children:[I.jsxs(qt,{disablePadding:!0,sx:{backgroundColor:lt.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:[I.jsx(Rt,{sx:{cursor:"pointer",color:c.clickTarget==="green"?"white":void 0,backgroundColor:c.clickTarget==="green"?s:c.hoverTarget==="green"?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:"green"}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:"green"}),children:"Hermit"}),I.jsx(Dt,{variant:"fullWidth",component:"li"}),I.jsx(Rt,{sx:{cursor:"pointer",backgroundColor:c.clickTarget==="white"?s:c.hoverTarget==="white"?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:"white"}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:"white"}),children:"White"}),I.jsx(Dt,{variant:"fullWidth",component:"li"}),I.jsx(Rt,{sx:{cursor:"pointer",color:c.clickTarget==="black"?"white":void 0,backgroundColor:c.clickTarget==="black"?s:c.hoverTarget==="black"?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:"black"}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:"black"}),children:"Black"})]}),h(d,"Ok")]});default:return h(d,"Ok")}})()})]})};return I.jsx(Hi,{open:e.openModal,children:I.jsxs(He,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:500,p:2,sx:{overflow:"hidden"},children:[e.modalMessage?I.jsx(He,{sx:{width:532,paddingTop:"8px",paddingLeft:"16px",marginX:"-16px",marginTop:"-16px",backgroundColor:lt.palette.background.default},children:I.jsx(It,{variant:"h5",sx:{width:"100%"},children:e.modalMessage})}):void 0,e.targets?p(e.targets,e.hasSword):void 0,e.playerChoice?f(e.playerChoice):void 0]})})}var Sl=Object.defineProperty,El=(o,e,t)=>e in o?Sl(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Tl=(o,e,t)=>(El(o,e+"",t),t);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mn="143",ci="srgb",Ii="srgb-linear",Nn="300 es";class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],As=Math.PI/180,vn=180/Math.PI;function Rr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[o&255]+ct[o>>8&255]+ct[o>>16&255]+ct[o>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toLowerCase()}function wt(o,e,t){return Math.max(e,Math.min(t,o))}function Al(o,e){return(o%e+e)%e}function Cs(o,e,t){return(1-t)*o+t*e}function On(o){return(o&o-1)===0&&o!==0}function xn(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,n=this.y-e.y;return this.x=s*i-n*r+e.x,this.y=s*r+n*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,n,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=n,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,n=i[0],a=i[3],l=i[6],c=i[1],u=i[4],p=i[7],h=i[2],f=i[5],g=i[8],m=r[0],d=r[3],v=r[6],x=r[1],b=r[4],_=r[7],M=r[2],S=r[5],C=r[8];return s[0]=n*m+a*x+l*M,s[3]=n*d+a*b+l*S,s[6]=n*v+a*_+l*C,s[1]=c*m+u*x+p*M,s[4]=c*d+u*b+p*S,s[7]=c*v+u*_+p*C,s[2]=h*m+f*x+g*M,s[5]=h*d+f*b+g*S,s[8]=h*v+f*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*n*u-t*a*c-i*s*u+i*a*l+r*s*c-r*n*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*n-a*c,h=a*l-u*s,f=c*s-n*l,g=t*p+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=p*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*n)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=f*m,e[7]=(i*l-c*t)*m,e[8]=(n*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,n,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*n+c*a)+n+e,-r*c,r*l,-r*(-c*n+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],n=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*n+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*n+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function io(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function fs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function cs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ls={[ci]:{[Ii]:zi},[Ii]:{[ci]:cs}},Ft={legacyMode:!0,get workingColorSpace(){return Ii},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Ls[e]&&Ls[e][t]!==void 0){const i=Ls[e][t];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},ro={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={r:0,g:0,b:0},zt={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Rs(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Or(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ii){return this.r=e,this.g=t,this.b=i,Ft.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ii){if(e=Al(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,n=2*i-s;this.r=Rs(n,s,e+1/3),this.g=Rs(n,s,e),this.b=Rs(n,s,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,t=ci){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const n=r[1],a=r[2];switch(n){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ft.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ft.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],n=s.length;if(n===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ft.toWorkingColorSpace(this,t),this;if(n===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ci){const i=ro[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Ft.fromWorkingColorSpace(Or(this,Ke),e),wt(Ke.r*255,0,255)<<16^wt(Ke.g*255,0,255)<<8^wt(Ke.b*255,0,255)<<0}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ii){Ft.fromWorkingColorSpace(Or(this,Ke),t);const i=Ke.r,r=Ke.g,s=Ke.b,n=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+n)/2;if(a===n)l=0,c=0;else{const p=n-a;switch(c=u<=.5?p/(n+a):p/(2-n-a),n){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ii){return Ft.fromWorkingColorSpace(Or(this,Ke),t),e.r=Ke.r,e.g=Ke.g,e.b=Ke.b,e}getStyle(e=ci){return Ft.fromWorkingColorSpace(Or(this,Ke),e),e!==ci?`color(${e} ${Ke.r} ${Ke.g} ${Ke.b})`:`rgb(${Ke.r*255|0},${Ke.g*255|0},${Ke.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=i,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(Nr);const i=Cs(zt.h,Nr.h,t),r=Cs(zt.s,Nr.s,t),s=Cs(zt.l,Nr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ie.NAMES=ro;let Xi;class so{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=fs("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let n=0;n<s.length;n++)s[n]=zi(s[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class no{constructor(e=null){this.isSource=!0,this.uuid=Rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let n=0,a=r.length;n<a;n++)r[n].isDataTexture?s.push(Ds(r[n].image)):s.push(Ds(r[n]))}else s=Ds(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ds(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?so.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cl=0;class St extends dr{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,i=1001,r=1001,s=1006,n=1008,a=1023,l=1009,c=1,u=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=Rr(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=n,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=300;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r+n[12]*s,this.y=n[1]*t+n[5]*i+n[9]*r+n[13]*s,this.z=n[2]*t+n[6]*i+n[10]*r+n[14]*s,this.w=n[3]*t+n[7]*i+n[11]*r+n[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const n=e.elements,a=n[0],l=n[4],c=n[8],u=n[1],p=n[5],h=n[9],f=n[2],g=n[6],m=n[10];if(Math.abs(l-u)<.01&&Math.abs(c-f)<.01&&Math.abs(h-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+f)<.1&&Math.abs(h+g)<.1&&Math.abs(a+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(a+1)/2,x=(p+1)/2,b=(m+1)/2,_=(l+u)/4,M=(c+f)/4,S=(h+g)/4;return v>x&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=_/i,s=M/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=_/r,s=S/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=M/s,r=S/s),this.set(i,r,s,t),this}let d=Math.sqrt((g-h)*(g-h)+(c-f)*(c-f)+(u-l)*(u-l));return Math.abs(d)<.001&&(d=1),this.x=(g-h)/d,this.y=(c-f)/d,this.z=(u-l)/d,this.w=Math.acos((a+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gi extends dr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new St(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new no(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ao extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,n,a){let l=i[r+0],c=i[r+1],u=i[r+2],p=i[r+3];const h=s[n+0],f=s[n+1],g=s[n+2],m=s[n+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(p!==m||l!==h||c!==f||u!==g){let d=1-a;const v=l*h+c*f+u*g+p*m,x=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const M=Math.sqrt(b),S=Math.atan2(M,v*x);d=Math.sin(d*S)/M,a=Math.sin(a*S)/M}const _=a*x;if(l=l*d+h*_,c=c*d+f*_,u=u*d+g*_,p=p*d+m*_,d===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,n){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],p=s[n],h=s[n+1],f=s[n+2],g=s[n+3];return e[t]=a*g+u*p+l*f-c*h,e[t+1]=l*g+u*h+c*p-a*f,e[t+2]=c*g+u*f+a*h-l*p,e[t+3]=u*g-a*p-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,n=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),p=a(s/2),h=l(i/2),f=l(r/2),g=l(s/2);switch(n){case"XYZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"YXZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"ZXY":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"ZYX":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"YZX":this._x=h*u*p+c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p-h*f*g;break;case"XZY":this._x=h*u*p-c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],n=t[1],a=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=i+a+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(n-r)*f}else if(i>a&&i>p){const f=2*Math.sqrt(1+i-a-p);this._w=(u-l)/f,this._x=.25*f,this._y=(r+n)/f,this._z=(s+c)/f}else if(a>p){const f=2*Math.sqrt(1+a-i-p);this._w=(s-c)/f,this._x=(r+n)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+p-i-a);this._w=(n-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,n=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+n*a+r*c-s*l,this._y=r*u+n*l+s*a-i*c,this._z=s*u+n*c+i*l-r*a,this._w=n*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,n=this._w;let a=n*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=n,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*n+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),p=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=n*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bn.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,n=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*n,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*n,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*n,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,n=e.y,a=e.z,l=e.w,c=l*t+n*r-a*i,u=l*i+a*t-s*r,p=l*r+s*i-n*t,h=-s*t-n*i-a*r;return this.x=c*l+h*-s+u*-a-p*-n,this.y=u*l+h*-n+p*-s-c*-a,this.z=p*l+h*-a+c*-n-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,n=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*n-i*l,this.z=i*a-r*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ps.copy(this).projectOnVector(e),this.sub(Ps)}reflect(e){return this.sub(Ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ps=new U,Bn=new Dr;class Pr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,n=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],p=e[l+1],h=e[l+2];u<t&&(t=u),p<i&&(i=p),h<r&&(r=h),u>s&&(s=u),p>n&&(n=p),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,n,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,n=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),p=e.getY(l),h=e.getZ(l);u<t&&(t=u),p<i&&(i=p),h<r&&(r=h),u>s&&(s=u),p>n&&(n=p),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,n,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let n=0,a=s.count;n<a;n++)Si.fromBufferAttribute(s,n).applyMatrix4(e.matrixWorld),this.expandByPoint(Si)}else i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox),Is.applyMatrix4(e.matrixWorld),this.union(Is);const r=e.children;for(let s=0,n=r.length;s<n;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Br.subVectors(this.max,xr),Yi.subVectors(e.a,xr),$i.subVectors(e.b,xr),Zi.subVectors(e.c,xr),pi.subVectors($i,Yi),mi.subVectors(Zi,$i),Ei.subVectors(Yi,Zi);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ei.z,Ei.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ei.z,0,-Ei.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ei.y,Ei.x,0];return!Fs(t,Yi,$i,Zi,Br)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,Yi,$i,Zi,Br))?!1:(Gr.crossVectors(pi,mi),t=[Gr.x,Gr.y,Gr.z],Fs(t,Yi,$i,Zi,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Si.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new U,new U,new U,new U,new U,new U,new U,new U],Si=new U,Is=new Pr,Yi=new U,$i=new U,Zi=new U,pi=new U,mi=new U,Ei=new U,xr=new U,Br=new U,Gr=new U,Ti=new U;function Fs(o,e,t,i,r){for(let s=0,n=o.length-3;s<=n;s+=3){Ti.fromArray(o,s);const a=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),u=i.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Rl=new Pr,Gn=new U,Ur=new U,zs=new U;class Lr{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rl.setFromPoints(e).getCenter(i);let r=0;for(let s=0,n=e.length;s<n;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(zs.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Ur.set(0,0,1).multiplyScalar(e.radius):Ur.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Gn.copy(e.center).add(Ur)),this.expandByPoint(Gn.copy(e.center).sub(Ur)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new U,ks=new U,Hr=new U,fi=new U,Ns=new U,Wr=new U,Os=new U;class Dl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.direction).multiplyScalar(t).add(this.origin),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ks.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(ks);const s=e.distanceTo(t)*.5,n=-this.direction.dot(Hr),a=fi.dot(this.direction),l=-fi.dot(Hr),c=fi.lengthSq(),u=Math.abs(1-n*n);let p,h,f,g;if(u>0)if(p=n*l-a,h=n*a-l,g=s*u,p>=0)if(h>=-g)if(h<=g){const m=1/u;p*=m,h*=m,f=p*(p+n*h+2*a)+h*(n*p+h+2*l)+c}else h=s,p=Math.max(0,-(n*h+a)),f=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(n*h+a)),f=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-n*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(p=Math.max(0,-(n*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+h*(h+2*l)+c);else h=n>0?-s:s,p=Math.max(0,-(n*h+a)),f=-p*p+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(Hr).multiplyScalar(h).add(ks),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const n=Math.sqrt(s-r),a=i-n,l=i+n;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,n,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,n=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,n=(e.min.y-h.y)*u),i>n||s>r||((s>i||i!==i)&&(i=s),(n<r||r!==r)&&(r=n),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,r,s){Ns.subVectors(t,e),Wr.subVectors(i,e),Os.crossVectors(Ns,Wr);let n=this.direction.dot(Os),a;if(n>0){if(r)return null;a=1}else if(n<0)a=-1,n=-n;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(Wr.crossVectors(fi,Wr));if(l<0)return null;const c=a*this.direction.dot(Ns.cross(fi));if(c<0||l+c>n)return null;const u=-a*fi.dot(Os);return u<0?null:this.at(u/n,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,n,a,l,c,u,p,h,f,g,m,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=n,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=p,v[14]=h,v[3]=f,v[7]=g,v[11]=m,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),n=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*n,t[9]=i[9]*n,t[10]=i[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,n=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=n*u,f=n*p,g=a*u,m=a*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=f+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+f*c,t[10]=n*l}else if(e.order==="YXZ"){const h=l*u,f=l*p,g=c*u,m=c*p;t[0]=h+m*a,t[4]=g*a-f,t[8]=n*c,t[1]=n*p,t[5]=n*u,t[9]=-a,t[2]=f*a-g,t[6]=m+h*a,t[10]=n*l}else if(e.order==="ZXY"){const h=l*u,f=l*p,g=c*u,m=c*p;t[0]=h-m*a,t[4]=-n*p,t[8]=g+f*a,t[1]=f+g*a,t[5]=n*u,t[9]=m-h*a,t[2]=-n*c,t[6]=a,t[10]=n*l}else if(e.order==="ZYX"){const h=n*u,f=n*p,g=a*u,m=a*p;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+m,t[1]=l*p,t[5]=m*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=n*l}else if(e.order==="YZX"){const h=n*l,f=n*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-h*p,t[8]=g*p+f,t[1]=p,t[5]=n*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*p+g,t[10]=h-m*p}else if(e.order==="XZY"){const h=n*l,f=n*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+m,t[5]=n*u,t[9]=f*p-g,t[2]=g*p-f,t[6]=a*u,t[10]=m*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pl,e,Il)}lookAt(e,t,i){const r=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),gi.crossVectors(i,yt),gi.lengthSq()===0&&(Math.abs(i.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),gi.crossVectors(i,yt)),gi.normalize(),Vr.crossVectors(yt,gi),r[0]=gi.x,r[4]=Vr.x,r[8]=yt.x,r[1]=gi.y,r[5]=Vr.y,r[9]=yt.y,r[2]=gi.z,r[6]=Vr.z,r[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,n=i[0],a=i[4],l=i[8],c=i[12],u=i[1],p=i[5],h=i[9],f=i[13],g=i[2],m=i[6],d=i[10],v=i[14],x=i[3],b=i[7],_=i[11],M=i[15],S=r[0],C=r[4],y=r[8],E=r[12],D=r[1],P=r[5],O=r[9],z=r[13],R=r[2],k=r[6],F=r[10],q=r[14],X=r[3],B=r[7],j=r[11],ee=r[15];return s[0]=n*S+a*D+l*R+c*X,s[4]=n*C+a*P+l*k+c*B,s[8]=n*y+a*O+l*F+c*j,s[12]=n*E+a*z+l*q+c*ee,s[1]=u*S+p*D+h*R+f*X,s[5]=u*C+p*P+h*k+f*B,s[9]=u*y+p*O+h*F+f*j,s[13]=u*E+p*z+h*q+f*ee,s[2]=g*S+m*D+d*R+v*X,s[6]=g*C+m*P+d*k+v*B,s[10]=g*y+m*O+d*F+v*j,s[14]=g*E+m*z+d*q+v*ee,s[3]=x*S+b*D+_*R+M*X,s[7]=x*C+b*P+_*k+M*B,s[11]=x*y+b*O+_*F+M*j,s[15]=x*E+b*z+_*q+M*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],n=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],f=e[14],g=e[3],m=e[7],d=e[11],v=e[15];return g*(+s*l*p-r*c*p-s*a*h+i*c*h+r*a*f-i*l*f)+m*(+t*l*f-t*c*h+s*n*h-r*n*f+r*c*u-s*l*u)+d*(+t*c*p-t*a*f-s*n*p+i*n*f+s*a*u-i*c*u)+v*(-r*a*u-t*l*p+t*a*h+r*n*p-i*n*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],f=e[11],g=e[12],m=e[13],d=e[14],v=e[15],x=p*d*c-m*h*c+m*l*f-a*d*f-p*l*v+a*h*v,b=g*h*c-u*d*c-g*l*f+n*d*f+u*l*v-n*h*v,_=u*m*c-g*p*c+g*a*f-n*m*f-u*a*v+n*p*v,M=g*p*l-u*m*l-g*a*h+n*m*h+u*a*d-n*p*d,S=t*x+i*b+r*_+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return e[0]=x*C,e[1]=(m*h*s-p*d*s-m*r*f+i*d*f+p*r*v-i*h*v)*C,e[2]=(a*d*s-m*l*s+m*r*c-i*d*c-a*r*v+i*l*v)*C,e[3]=(p*l*s-a*h*s-p*r*c+i*h*c+a*r*f-i*l*f)*C,e[4]=b*C,e[5]=(u*d*s-g*h*s+g*r*f-t*d*f-u*r*v+t*h*v)*C,e[6]=(g*l*s-n*d*s-g*r*c+t*d*c+n*r*v-t*l*v)*C,e[7]=(n*h*s-u*l*s+u*r*c-t*h*c-n*r*f+t*l*f)*C,e[8]=_*C,e[9]=(g*p*s-u*m*s-g*i*f+t*m*f+u*i*v-t*p*v)*C,e[10]=(n*m*s-g*a*s+g*i*c-t*m*c-n*i*v+t*a*v)*C,e[11]=(u*a*s-n*p*s-u*i*c+t*p*c+n*i*f-t*a*f)*C,e[12]=M*C,e[13]=(u*m*r-g*p*r+g*i*h-t*m*h-u*i*d+t*p*d)*C,e[14]=(g*a*r-n*m*r-g*i*l+t*m*l+n*i*d-t*a*d)*C,e[15]=(n*p*r-u*a*r+u*i*l-t*p*l-n*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,n=e.x,a=e.y,l=e.z,c=s*n,u=s*a;return this.set(c*n+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*n,0,c*l-r*a,u*l+r*n,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,n){return this.set(1,i,s,0,e,1,n,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,n=t._y,a=t._z,l=t._w,c=s+s,u=n+n,p=a+a,h=s*c,f=s*u,g=s*p,m=n*u,d=n*p,v=a*p,x=l*c,b=l*u,_=l*p,M=i.x,S=i.y,C=i.z;return r[0]=(1-(m+v))*M,r[1]=(f+_)*M,r[2]=(g-b)*M,r[3]=0,r[4]=(f-_)*S,r[5]=(1-(h+v))*S,r[6]=(d+x)*S,r[7]=0,r[8]=(g+b)*C,r[9]=(d-x)*C,r[10]=(1-(h+m))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const n=Ji.set(r[4],r[5],r[6]).length(),a=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const l=1/s,c=1/n,u=1/a;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=c,kt.elements[5]*=c,kt.elements[6]*=c,kt.elements[8]*=u,kt.elements[9]*=u,kt.elements[10]*=u,t.setFromRotationMatrix(kt),i.x=s,i.y=n,i.z=a,this}makePerspective(e,t,i,r,s,n){const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r),h=-(n+s)/(n-s),f=-2*n*s/(n-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,n){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(n-s),p=(t+e)*l,h=(i+r)*c,f=(n+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new U,kt=new tt,Pl=new U(0,0,0),Il=new U(1,1,1),gi=new U,Vr=new U,yt=new U,Un=new tt,Hn=new Dr;class Ir{constructor(e=0,t=0,i=0,r=Ir.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],n=r[4],a=r[8],l=r[1],c=r[5],u=r[9],p=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-n,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-wt(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Un,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hn.setFromEuler(this),this.setFromQuaternion(Hn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ir.DefaultOrder="XYZ";Ir.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fl=0;const Wn=new U,Ki=new Dr,ti=new tt,jr=new U,_r=new U,zl=new U,kl=new Dr,Vn=new U(1,0,0),jn=new U(0,1,0),qn=new U(0,0,1),Nl={type:"added"},Xn={type:"removed"};class mt extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DefaultUp.clone();const e=new U,t=new Ir,i=new Dr,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function n(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Pt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Vn,e)}rotateY(e){return this.rotateOnAxis(jn,e)}rotateZ(e){return this.rotateOnAxis(qn,e)}translateOnAxis(e,t){return Wn.copy(e).applyQuaternion(this.quaternion),this.position.add(Wn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vn,e)}translateY(e){return this.translateOnAxis(jn,e)}translateZ(e){return this.translateOnAxis(qn,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(_r,jr,this.up):ti.lookAt(jr,_r,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(ti),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xn)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Xn)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,zl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,kl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,n=r.length;s<n;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=n(e.geometries),l=n(e.materials),c=n(e.textures),u=n(e.images),p=n(e.shapes),h=n(e.skeletons),f=n(e.animations),g=n(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function n(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DefaultUp=new U(0,1,0);mt.DefaultMatrixAutoUpdate=!0;const Nt=new U,ii=new U,Bs=new U,ri=new U,Qi=new U,er=new U,Yn=new U,Gs=new U,Us=new U,Hs=new U;class ui{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Nt.subVectors(e,t),r.cross(Nt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Nt.subVectors(r,t),ii.subVectors(i,t),Bs.subVectors(e,t);const n=Nt.dot(Nt),a=Nt.dot(ii),l=Nt.dot(Bs),c=ii.dot(ii),u=ii.dot(Bs),p=n*c-a*a;if(p===0)return s.set(-2,-1,-1);const h=1/p,f=(c*l-a*u)*h,g=(n*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ri),ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,t,i,r,s,n,a,l){return this.getBarycoord(e,t,i,r,ri),l.set(0,0),l.addScaledVector(s,ri.x),l.addScaledVector(n,ri.y),l.addScaledVector(a,ri.z),l}static isFrontFacing(e,t,i,r){return Nt.subVectors(i,t),ii.subVectors(e,t),Nt.cross(ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Nt.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ui.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let n,a;Qi.subVectors(r,i),er.subVectors(s,i),Gs.subVectors(e,i);const l=Qi.dot(Gs),c=er.dot(Gs);if(l<=0&&c<=0)return t.copy(i);Us.subVectors(e,r);const u=Qi.dot(Us),p=er.dot(Us);if(u>=0&&p<=u)return t.copy(r);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return n=l/(l-u),t.copy(i).addScaledVector(Qi,n);Hs.subVectors(e,s);const f=Qi.dot(Hs),g=er.dot(Hs);if(g>=0&&f<=g)return t.copy(s);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(er,a);const d=u*g-f*p;if(d<=0&&p-u>=0&&f-g>=0)return Yn.subVectors(s,r),a=(p-u)/(p-u+(f-g)),t.copy(r).addScaledVector(Yn,a);const v=1/(d+m+h);return n=m*v,a=h*v,t.copy(i).addScaledVector(Qi,n).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ol=0;class Wi extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===1;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const n=[];for(const a in s){const l=s[a];delete l.metadata,n.push(l)}return n}if(t){const s=r(e.textures),n=r(e.images);s.length>0&&(i.textures=s),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lo extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new U,qr=new Fe;class $t{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let n=e[r];n===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),n=new Ie),t[i++]=n.r,t[i++]=n.g,t[i++]=n.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let n=e[r];n===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),n=new Fe),t[i++]=n.x,t[i++]=n.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let n=e[r];n===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),n=new U),t[i++]=n.x,t[i++]=n.y,t[i++]=n.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let n=e[r];n===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),n=new et),t[i++]=n.x,t[i++]=n.y,t[i++]=n.z,t[i++]=n.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class co extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class uo extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bl=0;const Ct=new tt,Ws=new mt,tr=new U,bt=new Pr,yr=new Pr,st=new U;class Zt extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(io(e)?uo:co)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,i){return Ct.makeTranslation(e,t,i),this.applyMatrix4(Ct),this}scale(e,t,i){return Ct.makeScale(e,t,i),this.applyMatrix4(Ct),this}lookAt(e){return Ws.lookAt(e),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];bt.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let s=0,n=t.length;s<n;s++){const a=t[s];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(st.addVectors(bt.min,yr.min),bt.expandByPoint(st),st.addVectors(bt.max,yr.max),bt.expandByPoint(st)):(bt.expandByPoint(yr.min),bt.expandByPoint(yr.max))}bt.getCenter(i);let r=0;for(let s=0,n=e.count;s<n;s++)st.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(st));if(t)for(let s=0,n=t.length;s<n;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)st.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(e,c),st.add(tr)),r=Math.max(r,i.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,n=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new U,u[D]=new U;const p=new U,h=new U,f=new U,g=new Fe,m=new Fe,d=new Fe,v=new U,x=new U;function b(D,P,O){p.fromArray(r,D*3),h.fromArray(r,P*3),f.fromArray(r,O*3),g.fromArray(n,D*2),m.fromArray(n,P*2),d.fromArray(n,O*2),h.sub(p),f.sub(p),m.sub(g),d.sub(g);const z=1/(m.x*d.y-d.x*m.y);!isFinite(z)||(v.copy(h).multiplyScalar(d.y).addScaledVector(f,-m.y).multiplyScalar(z),x.copy(f).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(z),c[D].add(v),c[P].add(v),c[O].add(v),u[D].add(x),u[P].add(x),u[O].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let D=0,P=_.length;D<P;++D){const O=_[D],z=O.start,R=O.count;for(let k=z,F=z+R;k<F;k+=3)b(i[k+0],i[k+1],i[k+2])}const M=new U,S=new U,C=new U,y=new U;function E(D){C.fromArray(s,D*3),y.copy(C);const P=c[D];M.copy(P),M.sub(C.multiplyScalar(C.dot(P))).normalize(),S.crossVectors(y,P);const O=S.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=O}for(let D=0,P=_.length;D<P;++D){const O=_[D],z=O.start,R=O.count;for(let k=z,F=z+R;k<F;k+=3)E(i[k+0]),E(i[k+1]),E(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,n=new U,a=new U,l=new U,c=new U,u=new U,p=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),n.fromBufferAttribute(t,d),u.subVectors(n,s),p.subVectors(r,s),u.cross(p),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),n.fromBufferAttribute(t,h+2),u.subVectors(n,s),p.subVectors(r,s),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const s=i[r].array,n=e.attributes[r],a=n.array,l=n.itemSize*t,c=Math.min(a.length,s.length-l);for(let u=0,p=l;u<c;u++,p++)s[p]=a[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,p=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*u;for(let v=0;v<u;v++)h[g++]=c[f++]}return new $t(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,p=c.length;u<p;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let a=0,l=n.length;a<l;a++){const c=n[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const f=c[p];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let h=0,f=p.length;h<f;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let c=0,u=n.length;c<u;c++){const p=n[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const $n=new tt,ir=new Dl,Vs=new Lr,vi=new U,xi=new U,_i=new U,js=new U,qs=new U,Xs=new U,Xr=new U,Yr=new U,$r=new U,Zr=new Fe,Jr=new Fe,Kr=new Fe,Ys=new U,Qr=new U;class Yt extends mt{constructor(e=new Zt,t=new lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(s),e.ray.intersectsSphere(Vs)===!1)||($n.copy(s).invert(),ir.copy(e.ray).applyMatrix4($n),i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1))return;let n;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,p=i.attributes.uv,h=i.attributes.uv2,f=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,d=f.length;m<d;m++){const v=f[m],x=r[v.materialIndex],b=Math.max(v.start,g.start),_=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=b,S=_;M<S;M+=3){const C=a.getX(M),y=a.getX(M+1),E=a.getX(M+2);n=es(this,x,e,ir,l,c,u,p,h,C,y,E),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let v=m,x=d;v<x;v+=3){const b=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);n=es(this,r,e,ir,l,c,u,p,h,b,_,M),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,d=f.length;m<d;m++){const v=f[m],x=r[v.materialIndex],b=Math.max(v.start,g.start),_=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=b,S=_;M<S;M+=3){const C=M,y=M+1,E=M+2;n=es(this,x,e,ir,l,c,u,p,h,C,y,E),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let v=m,x=d;v<x;v+=3){const b=v,_=v+1,M=v+2;n=es(this,r,e,ir,l,c,u,p,h,b,_,M),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}}}function Gl(o,e,t,i,r,s,n,a){let l;if(e.side===1?l=i.intersectTriangle(n,s,r,!0,a):l=i.intersectTriangle(r,s,n,e.side!==2,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:o}}function es(o,e,t,i,r,s,n,a,l,c,u,p){vi.fromBufferAttribute(r,c),xi.fromBufferAttribute(r,u),_i.fromBufferAttribute(r,p);const h=o.morphTargetInfluences;if(s&&h){Xr.set(0,0,0),Yr.set(0,0,0),$r.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=h[g],v=s[g];d!==0&&(js.fromBufferAttribute(v,c),qs.fromBufferAttribute(v,u),Xs.fromBufferAttribute(v,p),n?(Xr.addScaledVector(js,d),Yr.addScaledVector(qs,d),$r.addScaledVector(Xs,d)):(Xr.addScaledVector(js.sub(vi),d),Yr.addScaledVector(qs.sub(xi),d),$r.addScaledVector(Xs.sub(_i),d)))}vi.add(Xr),xi.add(Yr),_i.add($r)}o.isSkinnedMesh&&(o.boneTransform(c,vi),o.boneTransform(u,xi),o.boneTransform(p,_i));const f=Gl(o,e,t,i,vi,xi,_i,Ys);if(f){a&&(Zr.fromBufferAttribute(a,c),Jr.fromBufferAttribute(a,u),Kr.fromBufferAttribute(a,p),f.uv=ui.getUV(Ys,vi,xi,_i,Zr,Jr,Kr,new Fe)),l&&(Zr.fromBufferAttribute(l,c),Jr.fromBufferAttribute(l,u),Kr.fromBufferAttribute(l,p),f.uv2=ui.getUV(Ys,vi,xi,_i,Zr,Jr,Kr,new Fe));const g={a:c,b:u,c:p,normal:new U,materialIndex:0};ui.getNormal(vi,xi,_i,g.normal),f.face=g}return f}class Fr extends Zt{constructor(e=1,t=1,i=1,r=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:n};const a=this;r=Math.floor(r),s=Math.floor(s),n=Math.floor(n);const l=[],c=[],u=[],p=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,n,s,0),g("z","y","x",1,-1,i,t,-e,n,s,1),g("x","z","y",1,1,e,i,t,r,n,2),g("x","z","y",1,-1,e,i,-t,r,n,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(p,2));function g(m,d,v,x,b,_,M,S,C,y,E){const D=_/C,P=M/y,O=_/2,z=M/2,R=S/2,k=C+1,F=y+1;let q=0,X=0;const B=new U;for(let j=0;j<F;j++){const ee=j*P-z;for(let W=0;W<k;W++){const Q=W*D-O;B[m]=Q*x,B[d]=ee*b,B[v]=R,c.push(B.x,B.y,B.z),B[m]=0,B[d]=0,B[v]=S>0?1:-1,u.push(B.x,B.y,B.z),p.push(W/C),p.push(1-j/y),q+=1}}for(let j=0;j<y;j++)for(let ee=0;ee<C;ee++){const W=h+ee+k*j,Q=h+ee+k*(j+1),ue=h+(ee+1)+k*(j+1),Ce=h+(ee+1)+k*j;l.push(W,Q,Ce),l.push(Q,ue,Ce),X+=6}a.addGroup(f,X,E),f+=X,h+=q}}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const r=o[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ut(o){const e={};for(let t=0;t<o.length;t++){const i=hr(o[t]);for(const r in i)e[r]=i[r]}return e}function Ul(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const Hl={clone:hr,merge:ut};var Wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wl,this.fragmentShader=Vl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=Ul(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ho extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mt extends ho{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vn*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const n=this.view;if(this.view!==null&&this.view.enabled){const l=n.fullWidth,c=n.fullHeight;s+=n.offsetX*r/l,t-=n.offsetY*i/c,r*=n.width/l,i*=n.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=90,sr=1;class jl extends mt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Mt(rr,sr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(1,0,0)),this.add(r);const s=new Mt(rr,sr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);const n=new Mt(rr,sr,e,t);n.layers=this.layers,n.up.set(0,0,1),n.lookAt(new U(0,1,0)),this.add(n);const a=new Mt(rr,sr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new U(0,-1,0)),this.add(a);const l=new Mt(rr,sr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const c=new Mt(rr,sr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,n,a,l,c]=this.children,u=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,n),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=p,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class po extends St{constructor(e,t,i,r,s,n,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,i,r,s,n,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ql extends Gi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new po(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const n=new Yt(r,s),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new jl(1,10,this).update(e,n),t.minFilter=a,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(s)}}const $s=new U,Xl=new U,Yl=new Pt;class Ci{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$s.subVectors(i,t).cross(Xl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta($s),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yl.getNormalMatrix(e),r=this.coplanarPoint($s).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new Lr,ts=new U;class Sn{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,s=new Ci,n=new Ci){this.planes=[e,t,i,r,s,n]}set(e,t,i,r,s,n){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(n),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],n=i[2],a=i[3],l=i[4],c=i[5],u=i[6],p=i[7],h=i[8],f=i[9],g=i[10],m=i[11],d=i[12],v=i[13],x=i[14],b=i[15];return t[0].setComponents(a-r,p-l,m-h,b-d).normalize(),t[1].setComponents(a+r,p+l,m+h,b+d).normalize(),t[2].setComponents(a+s,p+c,m+f,b+v).normalize(),t[3].setComponents(a-s,p-c,m-f,b-v).normalize(),t[4].setComponents(a-n,p-u,m-g,b-x).normalize(),t[5].setComponents(a+n,p+u,m+g,b+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ts.x=r.normal.x>0?e.max.x:e.min.x,ts.y=r.normal.y>0?e.max.y:e.min.y,ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mo(){let o=null,e=!1,t=null,i=null;function r(s,n){t(s,n),i=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function $l(o,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const p=c.array,h=c.usage,f=o.createBuffer();o.bindBuffer(u,f),o.bufferData(u,p,h),c.onUploadCallback();let g;if(p instanceof Float32Array)g=5126;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(p instanceof Int16Array)g=5122;else if(p instanceof Uint32Array)g=5125;else if(p instanceof Int32Array)g=5124;else if(p instanceof Int8Array)g=5120;else if(p instanceof Uint8Array)g=5121;else if(p instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,p){const h=u.array,f=u.updateRange;o.bindBuffer(p,c),f.count===-1?o.bufferSubData(p,0,h):(t?o.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):o.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function n(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(o.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);p===void 0?i.set(c,r(c,u)):p.version<c.version&&(s(p.buffer,c,u),p.version=c.version)}return{get:n,remove:a,update:l}}class _s extends Zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,n=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,p=e/a,h=t/l,f=[],g=[],m=[],d=[];for(let v=0;v<u;v++){const x=v*h-n;for(let b=0;b<c;b++){const _=b*p-s;g.push(_,-x,0),m.push(0,0,1),d.push(b/a),d.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const b=x+c*v,_=x+c*(v+1),M=x+1+c*(v+1),S=x+1+c*v;f.push(b,_,S),f.push(_,M,S)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(m,3)),this.setAttribute("uv",new ht(d,2))}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Jl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ql=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ec=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ic="vec3 transformed = vec3( position );",rc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,nc=`#ifdef USE_IRIDESCENCE
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
#endif`,ac=`#ifdef USE_BUMPMAP
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
#endif`,oc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fc=`#define PI 3.141592653589793
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
}`,gc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vc=`vec3 transformedNormal = objectNormal;
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
#endif`,xc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_c=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sc=`#ifdef USE_ENVMAP
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
#endif`,Ec=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tc=`#ifdef USE_ENVMAP
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
#endif`,Ac=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ic=`#ifdef USE_GRADIENTMAP
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
}`,Fc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kc=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Nc=`uniform bool receiveShadow;
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
#endif`,Oc=`#if defined( USE_ENVMAP )
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
#endif`,Bc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Uc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Wc=`PhysicalMaterial material;
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
#endif`,Vc=`struct PhysicalMaterial {
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
}`,jc=`
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
#endif`,qc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$c=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,su=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nu=`#ifdef USE_MORPHNORMALS
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
#endif`,au=`#ifdef USE_MORPHTARGETS
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
#endif`,ou=`#ifdef USE_MORPHTARGETS
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
#endif`,lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,cu=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,du=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pu=`#ifdef USE_NORMALMAP
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
#endif`,mu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_u=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tu=`#ifdef USE_SHADOWMAP
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
#endif`,Au=`#ifdef USE_SHADOWMAP
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
#endif`,Cu=`#ifdef USE_SHADOWMAP
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
#endif`,Lu=`float getShadowMask() {
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
}`,Ru=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Du=`#ifdef USE_SKINNING
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
#endif`,Pu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iu=`#ifdef USE_SKINNING
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
#endif`,Fu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ou=`#ifdef USE_TRANSMISSION
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
#endif`,Bu=`#ifdef USE_TRANSMISSION
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
#endif`,Gu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Uu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Wu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Vu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ju=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`#include <envmap_common_pars_fragment>
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
}`,Ju=`#include <common>
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
}`,Ku=`#if DEPTH_PACKING == 3200
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
}`,Qu=`#define DISTANCE
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
}`,eh=`#define DISTANCE
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
}`,th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ih=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rh=`uniform float scale;
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
}`,sh=`uniform vec3 diffuse;
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
}`,nh=`#include <common>
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
}`,ah=`uniform vec3 diffuse;
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
}`,oh=`#define LAMBERT
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
}`,lh=`uniform vec3 diffuse;
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
}`,ch=`#define MATCAP
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
}`,uh=`#define MATCAP
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
}`,hh=`#define NORMAL
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
}`,dh=`#define NORMAL
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
}`,ph=`#define PHONG
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
}`,mh=`#define PHONG
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
}`,fh=`#define STANDARD
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
}`,gh=`#define STANDARD
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
}`,vh=`#define TOON
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
}`,xh=`#define TOON
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
}`,_h=`uniform float size;
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
}`,yh=`uniform vec3 diffuse;
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
}`,bh=`#include <common>
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
}`,wh=`uniform vec3 color;
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
}`,Mh=`uniform float rotation;
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
}`,Sh=`uniform vec3 diffuse;
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
}`,Le={alphamap_fragment:Zl,alphamap_pars_fragment:Jl,alphatest_fragment:Kl,alphatest_pars_fragment:Ql,aomap_fragment:ec,aomap_pars_fragment:tc,begin_vertex:ic,beginnormal_vertex:rc,bsdfs:sc,iridescence_fragment:nc,bumpmap_pars_fragment:ac,clipping_planes_fragment:oc,clipping_planes_pars_fragment:lc,clipping_planes_pars_vertex:cc,clipping_planes_vertex:uc,color_fragment:hc,color_pars_fragment:dc,color_pars_vertex:pc,color_vertex:mc,common:fc,cube_uv_reflection_fragment:gc,defaultnormal_vertex:vc,displacementmap_pars_vertex:xc,displacementmap_vertex:_c,emissivemap_fragment:yc,emissivemap_pars_fragment:bc,encodings_fragment:wc,encodings_pars_fragment:Mc,envmap_fragment:Sc,envmap_common_pars_fragment:Ec,envmap_pars_fragment:Tc,envmap_pars_vertex:Ac,envmap_physical_pars_fragment:Oc,envmap_vertex:Cc,fog_vertex:Lc,fog_pars_vertex:Rc,fog_fragment:Dc,fog_pars_fragment:Pc,gradientmap_pars_fragment:Ic,lightmap_fragment:Fc,lightmap_pars_fragment:zc,lights_lambert_vertex:kc,lights_pars_begin:Nc,lights_toon_fragment:Bc,lights_toon_pars_fragment:Gc,lights_phong_fragment:Uc,lights_phong_pars_fragment:Hc,lights_physical_fragment:Wc,lights_physical_pars_fragment:Vc,lights_fragment_begin:jc,lights_fragment_maps:qc,lights_fragment_end:Xc,logdepthbuf_fragment:Yc,logdepthbuf_pars_fragment:$c,logdepthbuf_pars_vertex:Zc,logdepthbuf_vertex:Jc,map_fragment:Kc,map_pars_fragment:Qc,map_particle_fragment:eu,map_particle_pars_fragment:tu,metalnessmap_fragment:iu,metalnessmap_pars_fragment:ru,morphcolor_vertex:su,morphnormal_vertex:nu,morphtarget_pars_vertex:au,morphtarget_vertex:ou,normal_fragment_begin:lu,normal_fragment_maps:cu,normal_pars_fragment:uu,normal_pars_vertex:hu,normal_vertex:du,normalmap_pars_fragment:pu,clearcoat_normal_fragment_begin:mu,clearcoat_normal_fragment_maps:fu,clearcoat_pars_fragment:gu,iridescence_pars_fragment:vu,output_fragment:xu,packing:_u,premultiplied_alpha_fragment:yu,project_vertex:bu,dithering_fragment:wu,dithering_pars_fragment:Mu,roughnessmap_fragment:Su,roughnessmap_pars_fragment:Eu,shadowmap_pars_fragment:Tu,shadowmap_pars_vertex:Au,shadowmap_vertex:Cu,shadowmask_pars_fragment:Lu,skinbase_vertex:Ru,skinning_pars_vertex:Du,skinning_vertex:Pu,skinnormal_vertex:Iu,specularmap_fragment:Fu,specularmap_pars_fragment:zu,tonemapping_fragment:ku,tonemapping_pars_fragment:Nu,transmission_fragment:Ou,transmission_pars_fragment:Bu,uv_pars_fragment:Gu,uv_pars_vertex:Uu,uv_vertex:Hu,uv2_pars_fragment:Wu,uv2_pars_vertex:Vu,uv2_vertex:ju,worldpos_vertex:qu,background_vert:Xu,background_frag:Yu,cube_vert:$u,cube_frag:Zu,depth_vert:Ju,depth_frag:Ku,distanceRGBA_vert:Qu,distanceRGBA_frag:eh,equirect_vert:th,equirect_frag:ih,linedashed_vert:rh,linedashed_frag:sh,meshbasic_vert:nh,meshbasic_frag:ah,meshlambert_vert:oh,meshlambert_frag:lh,meshmatcap_vert:ch,meshmatcap_frag:uh,meshnormal_vert:hh,meshnormal_frag:dh,meshphong_vert:ph,meshphong_frag:mh,meshphysical_vert:fh,meshphysical_frag:gh,meshtoon_vert:vh,meshtoon_frag:xh,points_vert:_h,points_frag:yh,shadow_vert:bh,shadow_frag:wh,sprite_vert:Mh,sprite_frag:Sh},ne={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pt},uv2Transform:{value:new Pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}}},Xt={basic:{uniforms:ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ut([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ut([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ut([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ut([ne.points,ne.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ut([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ut([ne.common,ne.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ut([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ut([ne.sprite,ne.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:ut([ne.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ut([ne.common,ne.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ut([ne.lights,ne.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Xt.physical={uniforms:ut([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function Eh(o,e,t,i,r,s){const n=new Ie(0);let a=r===!0?0:1,l,c,u=null,p=0,h=null;function f(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=e.get(x));const b=o.xr,_=b.getSession&&b.getSession();_&&_.environmentBlendMode==="additive"&&(x=null),x===null?g(n,a):x&&x.isColor&&(g(x,1),v=!0),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(c===void 0&&(c=new Yt(new Fr(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:hr(Xt.cube.uniforms),vertexShader:Xt.cube.vertexShader,fragmentShader:Xt.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||p!==x.version||h!==o.toneMapping)&&(c.material.needsUpdate=!0,u=x,p=x.version,h=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Yt(new _s(2,2),new Ui({name:"BackgroundMaterial",uniforms:hr(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||h!==o.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,h=o.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return n},setClearColor:function(m,d=1){n.set(m),a=d,g(n,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(n,a)},render:f}}function Th(o,e,t,i){const r=o.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),n=i.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function p(R,k,F,q,X){let B=!1;if(n){const j=m(q,F,k);c!==j&&(c=j,f(c.object)),B=v(R,q,F,X),B&&x(R,q,F,X)}else{const j=k.wireframe===!0;(c.geometry!==q.id||c.program!==F.id||c.wireframe!==j)&&(c.geometry=q.id,c.program=F.id,c.wireframe=j,B=!0)}X!==null&&t.update(X,34963),(B||u)&&(u=!1,y(R,k,F,q),X!==null&&o.bindBuffer(34963,t.get(X).buffer))}function h(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(R){return i.isWebGL2?o.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?o.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function m(R,k,F){const q=F.wireframe===!0;let X=a[R.id];X===void 0&&(X={},a[R.id]=X);let B=X[k.id];B===void 0&&(B={},X[k.id]=B);let j=B[q];return j===void 0&&(j=d(h()),B[q]=j),j}function d(R){const k=[],F=[],q=[];for(let X=0;X<r;X++)k[X]=0,F[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:q,object:R,attributes:{},index:null}}function v(R,k,F,q){const X=c.attributes,B=k.attributes;let j=0;const ee=F.getAttributes();for(const W in ee)if(ee[W].location>=0){const Q=X[W];let ue=B[W];if(ue===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;j++}return c.attributesNum!==j||c.index!==q}function x(R,k,F,q){const X={},B=k.attributes;let j=0;const ee=F.getAttributes();for(const W in ee)if(ee[W].location>=0){let Q=B[W];Q===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),X[W]=ue,j++}c.attributes=X,c.attributesNum=j,c.index=q}function b(){const R=c.newAttributes;for(let k=0,F=R.length;k<F;k++)R[k]=0}function _(R){M(R,0)}function M(R,k){const F=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;F[R]=1,q[R]===0&&(o.enableVertexAttribArray(R),q[R]=1),X[R]!==k&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),X[R]=k)}function S(){const R=c.newAttributes,k=c.enabledAttributes;for(let F=0,q=k.length;F<q;F++)k[F]!==R[F]&&(o.disableVertexAttribArray(F),k[F]=0)}function C(R,k,F,q,X,B){i.isWebGL2===!0&&(F===5124||F===5125)?o.vertexAttribIPointer(R,k,F,X,B):o.vertexAttribPointer(R,k,F,q,X,B)}function y(R,k,F,q){if(i.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const X=q.attributes,B=F.getAttributes(),j=k.defaultAttributeValues;for(const ee in B){const W=B[ee];if(W.location>=0){let Q=X[ee];if(Q===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const ue=Q.normalized,Ce=Q.itemSize,N=t.get(Q);if(N===void 0)continue;const ae=N.buffer,fe=N.type,ge=N.bytesPerElement;if(Q.isInterleavedBufferAttribute){const oe=Q.data,ke=oe.stride,Te=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)M(W.location+ye,oe.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ye=0;ye<W.locationSize;ye++)_(W.location+ye);o.bindBuffer(34962,ae);for(let ye=0;ye<W.locationSize;ye++)C(W.location+ye,Ce/W.locationSize,fe,ue,ke*ge,(Te+Ce/W.locationSize*ye)*ge)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)M(W.location+oe,Q.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<W.locationSize;oe++)_(W.location+oe);o.bindBuffer(34962,ae);for(let oe=0;oe<W.locationSize;oe++)C(W.location+oe,Ce/W.locationSize,fe,ue,Ce*ge,Ce/W.locationSize*oe*ge)}}else if(j!==void 0){const ue=j[ee];if(ue!==void 0)switch(ue.length){case 2:o.vertexAttrib2fv(W.location,ue);break;case 3:o.vertexAttrib3fv(W.location,ue);break;case 4:o.vertexAttrib4fv(W.location,ue);break;default:o.vertexAttrib1fv(W.location,ue)}}}}S()}function E(){O();for(const R in a){const k=a[R];for(const F in k){const q=k[F];for(const X in q)g(q[X].object),delete q[X];delete k[F]}delete a[R]}}function D(R){if(a[R.id]===void 0)return;const k=a[R.id];for(const F in k){const q=k[F];for(const X in q)g(q[X].object),delete q[X];delete k[F]}delete a[R.id]}function P(R){for(const k in a){const F=a[k];if(F[R.id]===void 0)continue;const q=F[R.id];for(const X in q)g(q[X].object),delete q[X];delete F[R.id]}}function O(){z(),u=!0,c!==l&&(c=l,f(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:_,disableUnusedAttributes:S}}function Ah(o,e,t,i){const r=i.isWebGL2;let s;function n(c){s=c}function a(c,u){o.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,p){if(p===0)return;let h,f;if(r)h=o,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](s,c,u,p),t.update(u,s,p)}this.setMode=n,this.render=a,this.renderInstances=l}function Ch(o,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const n=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=n||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=o.getParameter(34930),h=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),m=o.getParameter(34921),d=o.getParameter(36347),v=o.getParameter(36348),x=o.getParameter(36349),b=h>0,_=n||e.has("OES_texture_float"),M=b&&_,S=n?o.getParameter(36183):0;return{isWebGL2:n,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:S}}function Lh(o){const e=this;let t=null,i=0,r=!1,s=!1;const n=new Ci,a=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,f){const g=p.length!==0||h||i!==0||r;return r=h,t=u(p,f,0),i=p.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(p,h,f){const g=p.clippingPlanes,m=p.clipIntersection,d=p.clipShadows,v=o.get(p);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const x=s?0:i,b=x*4;let _=v.clippingState||null;l.value=_,_=u(g,h,b,f);for(let M=0;M!==b;++M)_[M]=t[M];v.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,f,g){const m=p!==null?p.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const v=f+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(d===null||d.length<v)&&(d=new Float32Array(v));for(let b=0,_=f;b!==m;++b,_+=4)n.copy(p[b]).applyMatrix4(x,a),n.normal.toArray(d,_),d[_+3]=n.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Rh(o){let e=new WeakMap;function t(n,a){return a===303?n.mapping=301:a===304&&(n.mapping=302),n}function i(n){if(n&&n.isTexture&&n.isRenderTargetTexture===!1){const a=n.mapping;if(a===303||a===304)if(e.has(n)){const l=e.get(n).texture;return t(l,n.mapping)}else{const l=n.image;if(l&&l.height>0){const c=new ql(l.height/2);return c.fromEquirectangularTexture(o,n),e.set(n,c),n.addEventListener("dispose",r),t(c.texture,n.mapping)}else return null}}return n}function r(n){const a=n.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Dh extends ho{constructor(e=-1,t=1,i=1,r=-1,s=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,n=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,n=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,n,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cr=4,Zn=[.125,.215,.35,.446,.526,.582],Di=20,Zs=new Dh,Jn=new Ie;let Js=null;const Li=(1+Math.sqrt(5))/2,ar=1/Li,Kn=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Li,ar),new U(0,Li,-ar),new U(ar,0,Li),new U(-ar,0,Li),new U(Li,ar,0),new U(-Li,ar,0)];class Qn{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Js=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ia(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Js),e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Js=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},r=ea(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ea(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ph(s)),this._blurMaterial=Ih(s,e,t)}return r}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,r){const s=new Mt(90,1,t,i),n=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Jn),l.toneMapping=0,l.autoClear=!1;const p=new lo({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),h=new Yt(new Fr,p);let f=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,f=!0):(p.color.copy(Jn),f=!0);for(let m=0;m<6;m++){const d=m%3;d===0?(s.up.set(0,n[m],0),s.lookAt(a[m],0,0)):d===1?(s.up.set(0,0,n[m]),s.lookAt(0,a[m],0)):(s.up.set(0,n[m],0),s.lookAt(0,0,a[m]));const v=this._cubeSize;is(r,d*v,m>2?v:0,v,v),l.setRenderTarget(r),f&&l.render(h,s),l.render(e,s)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ia()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ta());const s=r?this._cubemapMaterial:this._equirectMaterial,n=new Yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(n,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),n=Kn[(r-1)%Kn.length];this._blur(e,r-1,r,s,n)}t.autoClear=i}_blur(e,t,i,r,s){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",s),this._halfBlur(n,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,n,a){const l=this._renderer,c=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Yt(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Di-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):Di;d>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Di}`);const v=[];let x=0;for(let C=0;C<Di;++C){const y=C/m,E=Math.exp(-y*y/2);v.push(E),C===0?x+=E:C<d&&(x+=2*E)}for(let C=0;C<v.length;C++)v[C]=v[C]/x;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=v,h.latitudinal.value=n==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const _=this._sizeLods[r],M=3*_*(r>b-cr?r-b+cr:0),S=4*(this._cubeSize-_);is(t,M,S,3*_,2*_),l.setRenderTarget(t),l.render(p,Zs)}}function Ph(o){const e=[],t=[],i=[];let r=o;const s=o-cr+1+Zn.length;for(let n=0;n<s;n++){const a=Math.pow(2,r);t.push(a);let l=1/a;n>o-cr?l=Zn[n-o+cr-1]:n===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],f=6,g=6,m=3,d=2,v=1,x=new Float32Array(m*g*f),b=new Float32Array(d*g*f),_=new Float32Array(v*g*f);for(let S=0;S<f;S++){const C=S%3*2/3-1,y=S>2?0:-1,E=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];x.set(E,m*g*S),b.set(h,d*g*S);const D=[S,S,S,S,S,S];_.set(D,v*g*S)}const M=new Zt;M.setAttribute("position",new $t(x,m)),M.setAttribute("uv",new $t(b,d)),M.setAttribute("faceIndex",new $t(_,v)),e.push(M),r>cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ea(o,e,t){const i=new Gi(o,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(o,e,t,i,r){o.viewport.set(e,t,i,r),o.scissor.set(e,t,i,r)}function Ih(o,e,t){const i=new Float32Array(Di),r=new U(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:En(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ta(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:En(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ia(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:En(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function En(){return`

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
	`}function Fh(o){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Qn(o)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||u&&p&&r(p)){t===null&&(t=new Qn(o));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function n(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:n}}function zh(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kh(o,e,t,i){const r={},s=new WeakMap;function n(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",n),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",n),r[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const g in h)e.update(h[g],34962);const f=p.morphAttributes;for(const g in f){const m=f[g];for(let d=0,v=m.length;d<v;d++)e.update(m[d],34962)}}function c(p){const h=[],f=p.index,g=p.attributes.position;let m=0;if(f!==null){const x=f.array;m=f.version;for(let b=0,_=x.length;b<_;b+=3){const M=x[b+0],S=x[b+1],C=x[b+2];h.push(M,S,S,C,C,M)}}else{const x=g.array;m=g.version;for(let b=0,_=x.length/3-1;b<_;b+=3){const M=b+0,S=b+1,C=b+2;h.push(M,S,S,C,C,M)}}const d=new(io(h)?uo:co)(h,1);d.version=m;const v=s.get(p);v&&e.remove(v),s.set(p,d)}function u(p){const h=s.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function Nh(o,e,t,i){const r=i.isWebGL2;let s;function n(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,f){o.drawElements(s,f,a,h*l),t.update(f,s,1)}function p(h,f,g){if(g===0)return;let m,d;if(r)m=o,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,f,a,h*l,g),t.update(f,s,g)}this.setMode=n,this.setIndex=c,this.render=u,this.renderInstances=p}function Oh(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,n,a){switch(t.calls++,n){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bh(o,e){return o[0]-e[0]}function Gh(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Ks(o,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),o.divideScalar(t)}function Uh(o,e,t){const i={},r=new Float32Array(8),s=new WeakMap,n=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,p,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==m){let b=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const _=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let D=0;_===!0&&(D=1),M===!0&&(D=2),S===!0&&(D=3);let P=u.attributes.position.count*D,O=1;P>e.maxTextureSize&&(O=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const z=new Float32Array(P*O*4*m),R=new ao(z,P,O,m);R.type=1015,R.needsUpdate=!0;const k=D*4;for(let F=0;F<m;F++){const q=C[F],X=y[F],B=E[F],j=P*O*4*F;for(let ee=0;ee<q.count;ee++){const W=ee*k;_===!0&&(n.fromBufferAttribute(q,ee),q.normalized===!0&&Ks(n,q),z[j+W+0]=n.x,z[j+W+1]=n.y,z[j+W+2]=n.z,z[j+W+3]=0),M===!0&&(n.fromBufferAttribute(X,ee),X.normalized===!0&&Ks(n,X),z[j+W+4]=n.x,z[j+W+5]=n.y,z[j+W+6]=n.z,z[j+W+7]=0),S===!0&&(n.fromBufferAttribute(B,ee),B.normalized===!0&&Ks(n,B),z[j+W+8]=n.x,z[j+W+9]=n.y,z[j+W+10]=n.z,z[j+W+11]=B.itemSize===4?n.w:1)}}d={count:m,texture:R,size:new Fe(P,O)},s.set(u,d),u.addEventListener("dispose",b)}let v=0;for(let b=0;b<f.length;b++)v+=f[b];const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(o,"morphTargetBaseInfluence",x),h.getUniforms().setValue(o,"morphTargetInfluences",f),h.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}else{const g=f===void 0?0:f.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let _=0;_<g;_++)m[_]=[_,0];i[u.id]=m}for(let _=0;_<g;_++){const M=m[_];M[0]=_,M[1]=f[_]}m.sort(Gh);for(let _=0;_<8;_++)_<g&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Bh);const d=u.morphAttributes.position,v=u.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const M=a[_],S=M[0],C=M[1];S!==Number.MAX_SAFE_INTEGER&&C?(d&&u.getAttribute("morphTarget"+_)!==d[S]&&u.setAttribute("morphTarget"+_,d[S]),v&&u.getAttribute("morphNormal"+_)!==v[S]&&u.setAttribute("morphNormal"+_,v[S]),r[_]=C,x+=C):(d&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),v&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const b=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(o,"morphTargetBaseInfluence",b),h.getUniforms().setValue(o,"morphTargetInfluences",r)}}return{update:l}}function Hh(o,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,p=e.get(l,u);return r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),p}function n(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:n}}const fo=new St,go=new ao,vo=new Ll,xo=new po,ra=[],sa=[],na=new Float32Array(16),aa=new Float32Array(9),oa=new Float32Array(4);function pr(o,e,t){const i=o[0];if(i<=0||i>0)return o;const r=e*t;let s=ra[r];if(s===void 0&&(s=new Float32Array(r),ra[r]=s),e!==0){i.toArray(s,0);for(let n=1,a=0;n!==e;++n)a+=t,o[n].toArray(s,a)}return s}function ft(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function gt(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function ys(o,e){let t=sa[e];t===void 0&&(t=new Int32Array(e),sa[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function Wh(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Vh(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;o.uniform2fv(this.addr,e),gt(t,e)}}function jh(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;o.uniform3fv(this.addr,e),gt(t,e)}}function qh(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;o.uniform4fv(this.addr,e),gt(t,e)}}function Xh(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,i))return;oa.set(i),o.uniformMatrix2fv(this.addr,!1,oa),gt(t,i)}}function Yh(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,i))return;aa.set(i),o.uniformMatrix3fv(this.addr,!1,aa),gt(t,i)}}function $h(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,i))return;na.set(i),o.uniformMatrix4fv(this.addr,!1,na),gt(t,i)}}function Zh(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Jh(o,e){const t=this.cache;ft(t,e)||(o.uniform2iv(this.addr,e),gt(t,e))}function Kh(o,e){const t=this.cache;ft(t,e)||(o.uniform3iv(this.addr,e),gt(t,e))}function Qh(o,e){const t=this.cache;ft(t,e)||(o.uniform4iv(this.addr,e),gt(t,e))}function ed(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function td(o,e){const t=this.cache;ft(t,e)||(o.uniform2uiv(this.addr,e),gt(t,e))}function id(o,e){const t=this.cache;ft(t,e)||(o.uniform3uiv(this.addr,e),gt(t,e))}function rd(o,e){const t=this.cache;ft(t,e)||(o.uniform4uiv(this.addr,e),gt(t,e))}function sd(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||fo,r)}function nd(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vo,r)}function ad(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xo,r)}function od(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||go,r)}function ld(o){switch(o){case 5126:return Wh;case 35664:return Vh;case 35665:return jh;case 35666:return qh;case 35674:return Xh;case 35675:return Yh;case 35676:return $h;case 5124:case 35670:return Zh;case 35667:case 35671:return Jh;case 35668:case 35672:return Kh;case 35669:case 35673:return Qh;case 5125:return ed;case 36294:return td;case 36295:return id;case 36296:return rd;case 35678:case 36198:case 36298:case 36306:case 35682:return sd;case 35679:case 36299:case 36307:return nd;case 35680:case 36300:case 36308:case 36293:return ad;case 36289:case 36303:case 36311:case 36292:return od}}function cd(o,e){o.uniform1fv(this.addr,e)}function ud(o,e){const t=pr(e,this.size,2);o.uniform2fv(this.addr,t)}function hd(o,e){const t=pr(e,this.size,3);o.uniform3fv(this.addr,t)}function dd(o,e){const t=pr(e,this.size,4);o.uniform4fv(this.addr,t)}function pd(o,e){const t=pr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function md(o,e){const t=pr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function fd(o,e){const t=pr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function gd(o,e){o.uniform1iv(this.addr,e)}function vd(o,e){o.uniform2iv(this.addr,e)}function xd(o,e){o.uniform3iv(this.addr,e)}function _d(o,e){o.uniform4iv(this.addr,e)}function yd(o,e){o.uniform1uiv(this.addr,e)}function bd(o,e){o.uniform2uiv(this.addr,e)}function wd(o,e){o.uniform3uiv(this.addr,e)}function Md(o,e){o.uniform4uiv(this.addr,e)}function Sd(o,e,t){const i=e.length,r=ys(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||fo,r[s])}function Ed(o,e,t){const i=e.length,r=ys(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||vo,r[s])}function Td(o,e,t){const i=e.length,r=ys(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||xo,r[s])}function Ad(o,e,t){const i=e.length,r=ys(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||go,r[s])}function Cd(o){switch(o){case 5126:return cd;case 35664:return ud;case 35665:return hd;case 35666:return dd;case 35674:return pd;case 35675:return md;case 35676:return fd;case 5124:case 35670:return gd;case 35667:case 35671:return vd;case 35668:case 35672:return xd;case 35669:case 35673:return _d;case 5125:return yd;case 36294:return bd;case 36295:return wd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return Sd;case 35679:case 36299:case 36307:return Ed;case 35680:case 36300:case 36308:case 36293:return Td;case 36289:case 36303:case 36311:case 36292:return Ad}}class Ld{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ld(t.type)}}class Rd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Cd(t.type)}}class Dd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,n=r.length;s!==n;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function la(o,e){o.seq.push(e),o.map[e.id]=e}function Pd(o,e,t){const i=o.name,r=i.length;for(Qs.lastIndex=0;;){const s=Qs.exec(i),n=Qs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&n+2===r){la(t,c===void 0?new Ld(a,o,e):new Rd(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Dd(a),la(t,u)),t=u}}}class us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),n=e.getUniformLocation(t,s.name);Pd(s,n,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,n=t.length;s!==n;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const n=e[r];n.id in t&&i.push(n)}return i}}function ca(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}let Id=0;function Fd(o,e){const t=o.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let n=r;n<s;n++){const a=n+1;i.push(`${a===e?">":" "} ${a}: ${t[n]}`)}return i.join(`
`)}function zd(o){switch(o){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function ua(o,e,t){const i=o.getShaderParameter(e,35713),r=o.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const n=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Fd(o.getShaderSource(e),n)}else return r}function kd(o,e){const t=zd(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Nd(o,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Od(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function Bd(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Gd(o,e){const t={},i=o.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=o.getActiveAttrib(e,r),n=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[n]={type:s.type,location:o.getAttribLocation(e,n),locationSize:a}}return t}function Tr(o){return o!==""}function ha(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function da(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ud=/^[ \t]*#include +<([\w\d./]+)>/gm;function _n(o){return o.replace(Ud,Hd)}function Hd(o,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _n(t)}const Wd=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Vd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pa(o){return o.replace(Vd,_o).replace(Wd,jd)}function jd(o,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),_o(o,e,t,i)}function _o(o,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ma(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qd(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Xd(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yd(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function $d(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Zd(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Jd(o,e,t,i){const r=o.getContext(),s=t.defines;let n=t.vertexShader,a=t.fragmentShader;const l=qd(t),c=Xd(t),u=Yd(t),p=$d(t),h=Zd(t),f=t.isWebGL2?"":Od(t),g=Bd(s),m=r.createProgram();let d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Tr).join(`
`),d.length>0&&(d+=`
`),v=[f,g].filter(Tr).join(`
`),v.length>0&&(v+=`
`)):(d=[ma(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),v=[f,ma(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Le.tonemapping_pars_fragment:"",t.toneMapping!==0?Nd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,kd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),n=_n(n),n=ha(n,t),n=da(n,t),a=_n(a),a=ha(a,t),a=da(a,t),n=pa(n),a=pa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===Nn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=x+d+n,_=x+v+a,M=ca(r,35633,b),S=ca(r,35632,_);if(r.attachShader(m,M),r.attachShader(m,S),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),o.debug.checkShaderErrors){const E=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(M).trim(),P=r.getShaderInfoLog(S).trim();let O=!0,z=!0;if(r.getProgramParameter(m,35714)===!1){O=!1;const R=ua(r,M,"vertex"),k=ua(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+R+`
`+k)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(D===""||P==="")&&(z=!1);z&&(this.diagnostics={runnable:O,programLog:E,vertexShader:{log:D,prefix:d},fragmentShader:{log:P,prefix:v}})}r.deleteShader(M),r.deleteShader(S);let C;this.getUniforms=function(){return C===void 0&&(C=new us(r,m)),C};let y;return this.getAttributes=function(){return y===void 0&&(y=Gd(r,m)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Id++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}let Kd=0;class Qd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(s)===!1&&(n.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new ep(e);t.set(e,i)}return t.get(e)}}class ep{constructor(e){this.id=Kd++,this.code=e,this.usedTimes=0}}function tp(o,e,t,i,r,s,n){const a=new oo,l=new Qd,c=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,E,D,P,O){const z=P.fog,R=O.geometry,k=y.isMeshStandardMaterial?P.environment:null,F=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),q=F&&F.mapping===306?F.image.height:null,X=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const B=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,j=B!==void 0?B.length:0;let ee=0;R.morphAttributes.position!==void 0&&(ee=1),R.morphAttributes.normal!==void 0&&(ee=2),R.morphAttributes.color!==void 0&&(ee=3);let W,Q,ue,Ce;if(X){const oe=Xt[X];W=oe.vertexShader,Q=oe.fragmentShader}else W=y.vertexShader,Q=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),Ce=l.getFragmentShaderID(y);const N=o.getRenderTarget(),ae=y.alphaTest>0,fe=y.clearcoat>0,ge=y.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:y.type,vertexShader:W,fragmentShader:Q,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:Ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:h,outputEncoding:N===null?o.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:3e3,map:!!y.map,matcap:!!y.matcap,envMap:!!F,envMapMode:F&&F.mapping,envMapCubeUVHeight:q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===1,tangentSpaceNormalMap:y.normalMapType===0,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===3001,clearcoat:fe,clearcoatMap:fe&&!!y.clearcoatMap,clearcoatRoughnessMap:fe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!y.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!y.iridescenceMap,iridescenceThicknessMap:ge&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===1,alphaMap:!!y.alphaMap,alphaTest:ae,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!z,useFog:y.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:p,skinning:O.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:y.toneMapped?o.toneMapping:0,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===2,flipSided:y.side===1,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)E.push(D),E.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(E,y),x(E,y),E.push(o.outputEncoding)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputEncoding),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.combine),y.push(E.vertexUvs),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),E.fog&&a.enable(33),y.push(a.mask),a.disableAll(),E.useFog&&a.enable(0),E.flatShading&&a.enable(1),E.logarithmicDepthBuffer&&a.enable(2),E.skinning&&a.enable(3),E.morphTargets&&a.enable(4),E.morphNormals&&a.enable(5),E.morphColors&&a.enable(6),E.premultipliedAlpha&&a.enable(7),E.shadowMapEnabled&&a.enable(8),E.physicallyCorrectLights&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.specularIntensityMap&&a.enable(14),E.specularColorMap&&a.enable(15),E.transmission&&a.enable(16),E.transmissionMap&&a.enable(17),E.thicknessMap&&a.enable(18),E.sheen&&a.enable(19),E.sheenColorMap&&a.enable(20),E.sheenRoughnessMap&&a.enable(21),E.decodeVideoTexture&&a.enable(22),E.opaque&&a.enable(23),y.push(a.mask)}function b(y){const E=g[y.type];let D;if(E){const P=Xt[E];D=Hl.clone(P.uniforms)}else D=y.uniforms;return D}function _(y,E){let D;for(let P=0,O=c.length;P<O;P++){const z=c[P];if(z.cacheKey===E){D=z,++D.usedTimes;break}}return D===void 0&&(D=new Jd(o,E,y,s),c.push(D)),D}function M(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function S(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:C}}function ip(){let o=new WeakMap;function e(s){let n=o.get(s);return n===void 0&&(n={},o.set(s,n)),n}function t(s){o.delete(s)}function i(s,n,a){o.get(s)[n]=a}function r(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function rp(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function fa(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ga(){const o=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function n(p,h,f,g,m,d){let v=o[e];return v===void 0?(v={id:p.id,object:p,geometry:h,material:f,groupOrder:g,renderOrder:p.renderOrder,z:m,group:d},o[e]=v):(v.id=p.id,v.object=p,v.geometry=h,v.material=f,v.groupOrder=g,v.renderOrder=p.renderOrder,v.z=m,v.group=d),e++,v}function a(p,h,f,g,m,d){const v=n(p,h,f,g,m,d);f.transmission>0?i.push(v):f.transparent===!0?r.push(v):t.push(v)}function l(p,h,f,g,m,d){const v=n(p,h,f,g,m,d);f.transmission>0?i.unshift(v):f.transparent===!0?r.unshift(v):t.unshift(v)}function c(p,h){t.length>1&&t.sort(p||rp),i.length>1&&i.sort(h||fa),r.length>1&&r.sort(h||fa)}function u(){for(let p=e,h=o.length;p<h;p++){const f=o[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function sp(){let o=new WeakMap;function e(i,r){let s;return o.has(i)===!1?(s=new ga,o.set(i,[s])):r>=o.get(i).length?(s=new ga,o.get(i).push(s)):s=o.get(i)[r],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function np(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ie};break;case"SpotLight":t={position:new U,direction:new U,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new U,halfWidth:new U,halfHeight:new U};break}return o[e.id]=t,t}}}function ap(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let op=0;function lp(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function cp(o,e){const t=new np,i=ap(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,n=new tt,a=new tt;function l(u,p){let h=0,f=0,g=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let m=0,d=0,v=0,x=0,b=0,_=0,M=0,S=0;u.sort(lp);const C=p!==!0?Math.PI:1;for(let E=0,D=u.length;E<D;E++){const P=u[E],O=P.color,z=P.intensity,R=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*z*C,f+=O.g*z*C,g+=O.b*z*C;else if(P.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(P.sh.coefficients[F],z);else if(P.isDirectionalLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*C),P.castShadow){const q=P.shadow,X=i.get(P);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.directionalShadow[m]=X,r.directionalShadowMap[m]=k,r.directionalShadowMatrix[m]=P.shadow.matrix,_++}r.directional[m]=F,m++}else if(P.isSpotLight){const F=t.get(P);if(F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(O).multiplyScalar(z*C),F.distance=R,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,P.castShadow){const q=P.shadow,X=i.get(P);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.spotShadow[v]=X,r.spotShadowMap[v]=k,r.spotShadowMatrix[v]=P.shadow.matrix,S++}r.spot[v]=F,v++}else if(P.isRectAreaLight){const F=t.get(P);F.color.copy(O).multiplyScalar(z),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),r.rectArea[x]=F,x++}else if(P.isPointLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*C),F.distance=P.distance,F.decay=P.decay,P.castShadow){const q=P.shadow,X=i.get(P);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,r.pointShadow[d]=X,r.pointShadowMap[d]=k,r.pointShadowMatrix[d]=P.shadow.matrix,M++}r.point[d]=F,d++}else if(P.isHemisphereLight){const F=t.get(P);F.skyColor.copy(P.color).multiplyScalar(z*C),F.groundColor.copy(P.groundColor).multiplyScalar(z*C),r.hemi[b]=F,b++}}x>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=g;const y=r.hash;(y.directionalLength!==m||y.pointLength!==d||y.spotLength!==v||y.rectAreaLength!==x||y.hemiLength!==b||y.numDirectionalShadows!==_||y.numPointShadows!==M||y.numSpotShadows!==S)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=x,r.point.length=d,r.hemi.length=b,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=S,y.directionalLength=m,y.pointLength=d,y.spotLength=v,y.rectAreaLength=x,y.hemiLength=b,y.numDirectionalShadows=_,y.numPointShadows=M,y.numSpotShadows=S,r.version=op++)}function c(u,p){let h=0,f=0,g=0,m=0,d=0;const v=p.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const _=u[x];if(_.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),h++}else if(_.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(_.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),a.identity(),n.copy(_.matrixWorld),n.premultiply(v),a.extractRotation(n),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const M=r.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),f++}else if(_.isHemisphereLight){const M=r.hemi[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),d++}}}return{setup:l,setupView:c,state:r}}function va(o,e){const t=new cp(o,e),i=[],r=[];function s(){i.length=0,r.length=0}function n(u){i.push(u)}function a(u){r.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:n,pushShadow:a}}function up(o,e){let t=new WeakMap;function i(s,n=0){let a;return t.has(s)===!1?(a=new va(o,e),t.set(s,[a])):n>=t.get(s).length?(a=new va(o,e),t.get(s).push(a)):a=t.get(s)[n],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class hp extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dp extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mp=`uniform sampler2D shadow_pass;
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
}`;function fp(o,e,t){let i=new Sn;const r=new Fe,s=new Fe,n=new et,a=new hp({depthPacking:3201}),l=new dp,c={},u=t.maxTextureSize,p={0:1,1:0,2:2},h=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:pp,fragmentShader:mp}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Yt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(_,M,S){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;const C=o.getRenderTarget(),y=o.getActiveCubeFace(),E=o.getActiveMipmapLevel(),D=o.state;D.setBlending(0),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let P=0,O=_.length;P<O;P++){const z=_[P],R=z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const k=R.getFrameExtents();if(r.multiply(k),s.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,R.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,R.mapSize.y=s.y)),R.map===null){const q=this.type!==3?{minFilter:1003,magFilter:1003}:{};R.map=new Gi(r.x,r.y,q),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const F=R.getViewportCount();for(let q=0;q<F;q++){const X=R.getViewport(q);n.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),D.viewport(n),R.updateMatrices(z,q),i=R.getFrustum(),b(M,S,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===3&&v(R,S),R.needsUpdate=!1}d.needsUpdate=!1,o.setRenderTarget(C,y,E)};function v(_,M){const S=e.update(m);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Gi(r.x,r.y)),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,o.setRenderTarget(_.mapPass),o.clear(),o.renderBufferDirect(M,null,S,h,m,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,o.setRenderTarget(_.map),o.clear(),o.renderBufferDirect(M,null,S,f,m,null)}function x(_,M,S,C,y,E){let D=null;const P=S.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(P!==void 0?D=P:D=S.isPointLight===!0?l:a,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const O=D.uuid,z=M.uuid;let R=c[O];R===void 0&&(R={},c[O]=R);let k=R[z];k===void 0&&(k=D.clone(),R[z]=k),D=k}return D.visible=M.visible,D.wireframe=M.wireframe,E===3?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:p[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(S.matrixWorld),D.nearDistance=C,D.farDistance=y),D}function b(_,M,S,C,y){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&y===3)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,_.matrixWorld);const D=e.update(_),P=_.material;if(Array.isArray(P)){const O=D.groups;for(let z=0,R=O.length;z<R;z++){const k=O[z],F=P[k.materialIndex];if(F&&F.visible){const q=x(_,F,C,S.near,S.far,y);o.renderBufferDirect(S,null,D,q,_,k)}}}else if(P.visible){const O=x(_,P,C,S.near,S.far,y);o.renderBufferDirect(S,null,D,O,_,null)}}const E=_.children;for(let D=0,P=E.length;D<P;D++)b(E[D],M,S,C,y)}}function gp(o,e,t){const i=t.isWebGL2;function r(){let G=!1;const ce=new et;let Z=null;const de=new et(0,0,0,0);return{setMask:function(re){Z!==re&&!G&&(o.colorMask(re,re,re,re),Z=re)},setLocked:function(re){G=re},setClear:function(re,We,it,Ye,hi){hi===!0&&(re*=Ye,We*=Ye,it*=Ye),ce.set(re,We,it,Ye),de.equals(ce)===!1&&(o.clearColor(re,We,it,Ye),de.copy(ce))},reset:function(){G=!1,Z=null,de.set(-1,0,0,0)}}}function s(){let G=!1,ce=null,Z=null,de=null;return{setTest:function(re){re?ae(2929):fe(2929)},setMask:function(re){ce!==re&&!G&&(o.depthMask(re),ce=re)},setFunc:function(re){if(Z!==re){if(re)switch(re){case 0:o.depthFunc(512);break;case 1:o.depthFunc(519);break;case 2:o.depthFunc(513);break;case 3:o.depthFunc(515);break;case 4:o.depthFunc(514);break;case 5:o.depthFunc(518);break;case 6:o.depthFunc(516);break;case 7:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);Z=re}},setLocked:function(re){G=re},setClear:function(re){de!==re&&(o.clearDepth(re),de=re)},reset:function(){G=!1,ce=null,Z=null,de=null}}}function n(){let G=!1,ce=null,Z=null,de=null,re=null,We=null,it=null,Ye=null,hi=null;return{setTest:function(je){G||(je?ae(2960):fe(2960))},setMask:function(je){ce!==je&&!G&&(o.stencilMask(je),ce=je)},setFunc:function(je,Kt,Tt){(Z!==je||de!==Kt||re!==Tt)&&(o.stencilFunc(je,Kt,Tt),Z=je,de=Kt,re=Tt)},setOp:function(je,Kt,Tt){(We!==je||it!==Kt||Ye!==Tt)&&(o.stencilOp(je,Kt,Tt),We=je,it=Kt,Ye=Tt)},setLocked:function(je){G=je},setClear:function(je){hi!==je&&(o.clearStencil(je),hi=je)},reset:function(){G=!1,ce=null,Z=null,de=null,re=null,We=null,it=null,Ye=null,hi=null}}}const a=new r,l=new s,c=new n,u=new WeakMap,p=new WeakMap;let h={},f={},g=new WeakMap,m=[],d=null,v=!1,x=null,b=null,_=null,M=null,S=null,C=null,y=null,E=!1,D=null,P=null,O=null,z=null,R=null;const k=o.getParameter(35661);let F=!1,q=0;const X=o.getParameter(7938);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=q>=2);let B=null,j={};const ee=o.getParameter(3088),W=o.getParameter(2978),Q=new et().fromArray(ee),ue=new et().fromArray(W);function Ce(G,ce,Z){const de=new Uint8Array(4),re=o.createTexture();o.bindTexture(G,re),o.texParameteri(G,10241,9728),o.texParameteri(G,10240,9728);for(let We=0;We<Z;We++)o.texImage2D(ce+We,0,6408,1,1,0,6408,5121,de);return re}const N={};N[3553]=Ce(3553,3553,1),N[34067]=Ce(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ae(2929),l.setFunc(3),dt(!1),Gt(1),ae(2884),at(0);function ae(G){h[G]!==!0&&(o.enable(G),h[G]=!0)}function fe(G){h[G]!==!1&&(o.disable(G),h[G]=!1)}function ge(G,ce){return f[G]!==ce?(o.bindFramebuffer(G,ce),f[G]=ce,i&&(G===36009&&(f[36160]=ce),G===36160&&(f[36009]=ce)),!0):!1}function oe(G,ce){let Z=m,de=!1;if(G)if(Z=g.get(ce),Z===void 0&&(Z=[],g.set(ce,Z)),G.isWebGLMultipleRenderTargets){const re=G.texture;if(Z.length!==re.length||Z[0]!==36064){for(let We=0,it=re.length;We<it;We++)Z[We]=36064+We;Z.length=re.length,de=!0}}else Z[0]!==36064&&(Z[0]=36064,de=!0);else Z[0]!==1029&&(Z[0]=1029,de=!0);de&&(t.isWebGL2?o.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function ke(G){return d!==G?(o.useProgram(G),d=G,!0):!1}const Te={100:32774,101:32778,102:32779};if(i)Te[103]=32775,Te[104]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(Te[103]=G.MIN_EXT,Te[104]=G.MAX_EXT)}const ye={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function at(G,ce,Z,de,re,We,it,Ye){if(G===0){v===!0&&(fe(3042),v=!1);return}if(v===!1&&(ae(3042),v=!0),G!==5){if(G!==x||Ye!==E){if((b!==100||S!==100)&&(o.blendEquation(32774),b=100,S=100),Ye)switch(G){case 1:o.blendFuncSeparate(1,771,1,771);break;case 2:o.blendFunc(1,1);break;case 3:o.blendFuncSeparate(0,769,0,1);break;case 4:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case 1:o.blendFuncSeparate(770,771,1,771);break;case 2:o.blendFunc(770,1);break;case 3:o.blendFuncSeparate(0,769,0,1);break;case 4:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,M=null,C=null,y=null,x=G,E=Ye}return}re=re||ce,We=We||Z,it=it||de,(ce!==b||re!==S)&&(o.blendEquationSeparate(Te[ce],Te[re]),b=ce,S=re),(Z!==_||de!==M||We!==C||it!==y)&&(o.blendFuncSeparate(ye[Z],ye[de],ye[We],ye[it]),_=Z,M=de,C=We,y=it),x=G,E=null}function xt(G,ce){G.side===2?fe(2884):ae(2884);let Z=G.side===1;ce&&(Z=!Z),dt(Z),G.blending===1&&G.transparent===!1?at(0):at(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const de=G.stencilWrite;c.setTest(de),de&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ue(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ae(32926):fe(32926)}function dt(G){D!==G&&(G?o.frontFace(2304):o.frontFace(2305),D=G)}function Gt(G){G!==0?(ae(2884),G!==P&&(G===1?o.cullFace(1029):G===2?o.cullFace(1028):o.cullFace(1032))):fe(2884),P=G}function ot(G){G!==O&&(F&&o.lineWidth(G),O=G)}function Ue(G,ce,Z){G?(ae(32823),(z!==ce||R!==Z)&&(o.polygonOffset(ce,Z),z=ce,R=Z)):fe(32823)}function Jt(G){G?ae(3089):fe(3089)}function Ut(G){G===void 0&&(G=33984+k-1),B!==G&&(o.activeTexture(G),B=G)}function L(G,ce){B===null&&Ut();let Z=j[B];Z===void 0&&(Z={type:void 0,texture:void 0},j[B]=Z),(Z.type!==G||Z.texture!==ce)&&(o.bindTexture(G,ce||N[G]),Z.type=G,Z.texture=ce)}function T(){const G=j[B];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function J(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(G){Q.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Q.copy(G))}function me(G){ue.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),ue.copy(G))}function Ae(G,ce){let Z=p.get(ce);Z===void 0&&(Z=new WeakMap,p.set(ce,Z));let de=Z.get(G);de===void 0&&(de=o.getUniformBlockIndex(ce,G.name),Z.set(G,de))}function Oe(G,ce){const Z=p.get(ce).get(G);u.get(G)!==Z&&(o.uniformBlockBinding(ce,Z,G.__bindingPointIndex),u.set(G,Z))}function Xe(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},B=null,j={},f={},g=new WeakMap,m=[],d=null,v=!1,x=null,b=null,_=null,M=null,S=null,C=null,y=null,E=!1,D=null,P=null,O=null,z=null,R=null,Q.set(0,0,o.canvas.width,o.canvas.height),ue.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ae,disable:fe,bindFramebuffer:ge,drawBuffers:oe,useProgram:ke,setBlending:at,setMaterial:xt,setFlipSided:dt,setCullFace:Gt,setLineWidth:ot,setPolygonOffset:Ue,setScissorTest:Jt,activeTexture:Ut,bindTexture:L,unbindTexture:T,compressedTexImage2D:J,texImage2D:_e,texImage3D:pe,updateUBOMapping:Ae,uniformBlockBinding:Oe,texStorage2D:Me,texStorage3D:$,texSubImage2D:te,texSubImage3D:ie,compressedTexSubImage2D:le,scissor:ve,viewport:me,reset:Xe}}function vp(o,e,t,i,r,s,n){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return v?new OffscreenCanvas(L,T):fs("canvas")}function b(L,T,J,te){let ie=1;if((L.width>te||L.height>te)&&(ie=te/Math.max(L.width,L.height)),ie<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const le=T?xn:Math.floor,Me=le(ie*L.width),$=le(ie*L.height);m===void 0&&(m=x(Me,$));const _e=J?x(Me,$):m;return _e.width=Me,_e.height=$,_e.getContext("2d").drawImage(L,0,0,Me,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Me+"x"+$+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function _(L){return On(L.width)&&On(L.height)}function M(L){return a?!1:L.wrapS!==1001||L.wrapT!==1001||L.minFilter!==1003&&L.minFilter!==1006}function S(L,T){return L.generateMipmaps&&T&&L.minFilter!==1003&&L.minFilter!==1006}function C(L){o.generateMipmap(L)}function y(L,T,J,te,ie=!1){if(a===!1)return T;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=T;return T===6403&&(J===5126&&(le=33326),J===5131&&(le=33325),J===5121&&(le=33321)),T===33319&&(J===5126&&(le=33328),J===5131&&(le=33327),J===5121&&(le=33323)),T===6408&&(J===5126&&(le=34836),J===5131&&(le=34842),J===5121&&(le=te===3001&&ie===!1?35907:32856),J===32819&&(le=32854),J===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function E(L,T,J){return S(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==1003&&L.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function D(L){return L===1003||L===1004||L===1005?9728:9729}function P(L){const T=L.target;T.removeEventListener("dispose",P),z(T),T.isVideoTexture&&g.delete(T)}function O(L){const T=L.target;T.removeEventListener("dispose",O),k(T)}function z(L){const T=i.get(L);if(T.__webglInit===void 0)return;const J=L.source,te=d.get(J);if(te){const ie=te[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(L),Object.keys(te).length===0&&d.delete(J)}i.remove(L)}function R(L){const T=i.get(L);o.deleteTexture(T.__webglTexture);const J=L.source,te=d.get(J);delete te[T.__cacheKey],n.memory.textures--}function k(L){const T=L.texture,J=i.get(L),te=i.get(T);if(te.__webglTexture!==void 0&&(o.deleteTexture(te.__webglTexture),n.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(J.__webglFramebuffer[ie]),J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&o.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ie=0;ie<J.__webglColorRenderbuffer.length;ie++)J.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(J.__webglColorRenderbuffer[ie]);J.__webglDepthRenderbuffer&&o.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ie=0,le=T.length;ie<le;ie++){const Me=i.get(T[ie]);Me.__webglTexture&&(o.deleteTexture(Me.__webglTexture),n.memory.textures--),i.remove(T[ie])}i.remove(T),i.remove(L)}let F=0;function q(){F=0}function X(){const L=F;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),F+=1,L}function B(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.encoding),T.join()}function j(L,T){const J=i.get(L);if(L.isVideoTexture&&Jt(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(J,L,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,J.__webglTexture)}function ee(L,T){const J=i.get(L);if(L.version>0&&J.__version!==L.version){fe(J,L,T);return}t.activeTexture(33984+T),t.bindTexture(35866,J.__webglTexture)}function W(L,T){const J=i.get(L);if(L.version>0&&J.__version!==L.version){fe(J,L,T);return}t.activeTexture(33984+T),t.bindTexture(32879,J.__webglTexture)}function Q(L,T){const J=i.get(L);if(L.version>0&&J.__version!==L.version){ge(J,L,T);return}t.activeTexture(33984+T),t.bindTexture(34067,J.__webglTexture)}const ue={1e3:10497,1001:33071,1002:33648},Ce={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function N(L,T,J){if(J?(o.texParameteri(L,10242,ue[T.wrapS]),o.texParameteri(L,10243,ue[T.wrapT]),(L===32879||L===35866)&&o.texParameteri(L,32882,ue[T.wrapR]),o.texParameteri(L,10240,Ce[T.magFilter]),o.texParameteri(L,10241,Ce[T.minFilter])):(o.texParameteri(L,10242,33071),o.texParameteri(L,10243,33071),(L===32879||L===35866)&&o.texParameteri(L,32882,33071),(T.wrapS!==1001||T.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,10240,D(T.magFilter)),o.texParameteri(L,10241,D(T.minFilter)),T.minFilter!==1003&&T.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.type===1015&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(o.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ae(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",P));const te=T.source;let ie=d.get(te);ie===void 0&&(ie={},d.set(te,ie));const le=B(T);if(le!==L.__cacheKey){ie[le]===void 0&&(ie[le]={texture:o.createTexture(),usedTimes:0},n.memory.textures++,J=!0),ie[le].usedTimes++;const Me=ie[L.__cacheKey];Me!==void 0&&(ie[L.__cacheKey].usedTimes--,Me.usedTimes===0&&R(T)),L.__cacheKey=le,L.__webglTexture=ie[le].texture}return J}function fe(L,T,J){let te=3553;T.isDataArrayTexture&&(te=35866),T.isData3DTexture&&(te=32879);const ie=ae(L,T),le=T.source;if(t.activeTexture(33984+J),t.bindTexture(te,L.__webglTexture),le.version!==le.__currentVersion||ie===!0){o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const Me=M(T)&&_(T.image)===!1;let $=b(T.image,Me,!1,u);$=Ut(T,$);const _e=_($)||a,pe=s.convert(T.format,T.encoding);let ve=s.convert(T.type),me=y(T.internalFormat,pe,ve,T.encoding,T.isVideoTexture);N(te,T,_e);let Ae;const Oe=T.mipmaps,Xe=a&&T.isVideoTexture!==!0,G=le.__currentVersion===void 0||ie===!0,ce=E(T,$,_e);if(T.isDepthTexture)me=6402,a?T.type===1015?me=36012:T.type===1014?me=33190:T.type===1020?me=35056:me=33189:T.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===1026&&me===6402&&T.type!==1012&&T.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=1014,ve=s.convert(T.type)),T.format===1027&&me===6402&&(me=34041,T.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=1020,ve=s.convert(T.type))),G&&(Xe?t.texStorage2D(3553,1,me,$.width,$.height):t.texImage2D(3553,0,me,$.width,$.height,0,pe,ve,null));else if(T.isDataTexture)if(Oe.length>0&&_e){Xe&&G&&t.texStorage2D(3553,ce,me,Oe[0].width,Oe[0].height);for(let Z=0,de=Oe.length;Z<de;Z++)Ae=Oe[Z],Xe?t.texSubImage2D(3553,Z,0,0,Ae.width,Ae.height,pe,ve,Ae.data):t.texImage2D(3553,Z,me,Ae.width,Ae.height,0,pe,ve,Ae.data);T.generateMipmaps=!1}else Xe?(G&&t.texStorage2D(3553,ce,me,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,pe,ve,$.data)):t.texImage2D(3553,0,me,$.width,$.height,0,pe,ve,$.data);else if(T.isCompressedTexture){Xe&&G&&t.texStorage2D(3553,ce,me,Oe[0].width,Oe[0].height);for(let Z=0,de=Oe.length;Z<de;Z++)Ae=Oe[Z],T.format!==1023?pe!==null?Xe?t.compressedTexSubImage2D(3553,Z,0,0,Ae.width,Ae.height,pe,Ae.data):t.compressedTexImage2D(3553,Z,me,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,Z,0,0,Ae.width,Ae.height,pe,ve,Ae.data):t.texImage2D(3553,Z,me,Ae.width,Ae.height,0,pe,ve,Ae.data)}else if(T.isDataArrayTexture)Xe?(G&&t.texStorage3D(35866,ce,me,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,pe,ve,$.data)):t.texImage3D(35866,0,me,$.width,$.height,$.depth,0,pe,ve,$.data);else if(T.isData3DTexture)Xe?(G&&t.texStorage3D(32879,ce,me,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,pe,ve,$.data)):t.texImage3D(32879,0,me,$.width,$.height,$.depth,0,pe,ve,$.data);else if(T.isFramebufferTexture){if(G)if(Xe)t.texStorage2D(3553,ce,me,$.width,$.height);else{let Z=$.width,de=$.height;for(let re=0;re<ce;re++)t.texImage2D(3553,re,me,Z,de,0,pe,ve,null),Z>>=1,de>>=1}}else if(Oe.length>0&&_e){Xe&&G&&t.texStorage2D(3553,ce,me,Oe[0].width,Oe[0].height);for(let Z=0,de=Oe.length;Z<de;Z++)Ae=Oe[Z],Xe?t.texSubImage2D(3553,Z,0,0,pe,ve,Ae):t.texImage2D(3553,Z,me,pe,ve,Ae);T.generateMipmaps=!1}else Xe?(G&&t.texStorage2D(3553,ce,me,$.width,$.height),t.texSubImage2D(3553,0,0,0,pe,ve,$)):t.texImage2D(3553,0,me,pe,ve,$);S(T,_e)&&C(te),le.__currentVersion=le.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ge(L,T,J){if(T.image.length!==6)return;const te=ae(L,T),ie=T.source;if(t.activeTexture(33984+J),t.bindTexture(34067,L.__webglTexture),ie.version!==ie.__currentVersion||te===!0){o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const le=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,$=[];for(let Z=0;Z<6;Z++)!le&&!Me?$[Z]=b(T.image[Z],!1,!0,c):$[Z]=Me?T.image[Z].image:T.image[Z],$[Z]=Ut(T,$[Z]);const _e=$[0],pe=_(_e)||a,ve=s.convert(T.format,T.encoding),me=s.convert(T.type),Ae=y(T.internalFormat,ve,me,T.encoding),Oe=a&&T.isVideoTexture!==!0,Xe=ie.__currentVersion===void 0||te===!0;let G=E(T,_e,pe);N(34067,T,pe);let ce;if(le){Oe&&Xe&&t.texStorage2D(34067,G,Ae,_e.width,_e.height);for(let Z=0;Z<6;Z++){ce=$[Z].mipmaps;for(let de=0;de<ce.length;de++){const re=ce[de];T.format!==1023?ve!==null?Oe?t.compressedTexSubImage2D(34069+Z,de,0,0,re.width,re.height,ve,re.data):t.compressedTexImage2D(34069+Z,de,Ae,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+Z,de,0,0,re.width,re.height,ve,me,re.data):t.texImage2D(34069+Z,de,Ae,re.width,re.height,0,ve,me,re.data)}}}else{ce=T.mipmaps,Oe&&Xe&&(ce.length>0&&G++,t.texStorage2D(34067,G,Ae,$[0].width,$[0].height));for(let Z=0;Z<6;Z++)if(Me){Oe?t.texSubImage2D(34069+Z,0,0,0,$[Z].width,$[Z].height,ve,me,$[Z].data):t.texImage2D(34069+Z,0,Ae,$[Z].width,$[Z].height,0,ve,me,$[Z].data);for(let de=0;de<ce.length;de++){const re=ce[de].image[Z].image;Oe?t.texSubImage2D(34069+Z,de+1,0,0,re.width,re.height,ve,me,re.data):t.texImage2D(34069+Z,de+1,Ae,re.width,re.height,0,ve,me,re.data)}}else{Oe?t.texSubImage2D(34069+Z,0,0,0,ve,me,$[Z]):t.texImage2D(34069+Z,0,Ae,ve,me,$[Z]);for(let de=0;de<ce.length;de++){const re=ce[de];Oe?t.texSubImage2D(34069+Z,de+1,0,0,ve,me,re.image[Z]):t.texImage2D(34069+Z,de+1,Ae,ve,me,re.image[Z])}}}S(T,pe)&&C(34067),ie.__currentVersion=ie.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function oe(L,T,J,te,ie){const le=s.convert(J.format,J.encoding),Me=s.convert(J.type),$=y(J.internalFormat,le,Me,J.encoding);i.get(T).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,$,T.width,T.height,T.depth,0,le,Me,null):t.texImage2D(ie,0,$,T.width,T.height,0,le,Me,null)),t.bindFramebuffer(36160,L),Ue(T)?h.framebufferTexture2DMultisampleEXT(36160,te,ie,i.get(J).__webglTexture,0,ot(T)):o.framebufferTexture2D(36160,te,ie,i.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(L,T,J){if(o.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let te=33189;if(J||Ue(T)){const ie=T.depthTexture;ie&&ie.isDepthTexture&&(ie.type===1015?te=36012:ie.type===1014&&(te=33190));const le=ot(T);Ue(T)?h.renderbufferStorageMultisampleEXT(36161,le,te,T.width,T.height):o.renderbufferStorageMultisample(36161,le,te,T.width,T.height)}else o.renderbufferStorage(36161,te,T.width,T.height);o.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){const te=ot(T);J&&Ue(T)===!1?o.renderbufferStorageMultisample(36161,te,35056,T.width,T.height):Ue(T)?h.renderbufferStorageMultisampleEXT(36161,te,35056,T.width,T.height):o.renderbufferStorage(36161,34041,T.width,T.height),o.framebufferRenderbuffer(36160,33306,36161,L)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0;ie<te.length;ie++){const le=te[ie],Me=s.convert(le.format,le.encoding),$=s.convert(le.type),_e=y(le.internalFormat,Me,$,le.encoding),pe=ot(T);J&&Ue(T)===!1?o.renderbufferStorageMultisample(36161,pe,_e,T.width,T.height):Ue(T)?h.renderbufferStorageMultisampleEXT(36161,pe,_e,T.width,T.height):o.renderbufferStorage(36161,_e,T.width,T.height)}}o.bindRenderbuffer(36161,null)}function Te(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const J=i.get(T.depthTexture).__webglTexture,te=ot(T);if(T.depthTexture.format===1026)Ue(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,te):o.framebufferTexture2D(36160,36096,3553,J,0);else if(T.depthTexture.format===1027)Ue(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,te):o.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function ye(L){const T=i.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=o.createRenderbuffer(),ke(T.__webglDepthbuffer[te],L,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),ke(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function at(L,T,J){const te=i.get(L);T!==void 0&&oe(te.__webglFramebuffer,L,L.texture,36064,3553),J!==void 0&&ye(L)}function xt(L){const T=L.texture,J=i.get(L),te=i.get(T);L.addEventListener("dispose",O),L.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=T.version,n.memory.textures++);const ie=L.isWebGLCubeRenderTarget===!0,le=L.isWebGLMultipleRenderTargets===!0,Me=_(L)||a;if(ie){J.__webglFramebuffer=[];for(let $=0;$<6;$++)J.__webglFramebuffer[$]=o.createFramebuffer()}else{if(J.__webglFramebuffer=o.createFramebuffer(),le)if(r.drawBuffers){const $=L.texture;for(let _e=0,pe=$.length;_e<pe;_e++){const ve=i.get($[_e]);ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture(),n.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Ue(L)===!1){const $=le?T:[T];J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer);for(let _e=0;_e<$.length;_e++){const pe=$[_e];J.__webglColorRenderbuffer[_e]=o.createRenderbuffer(),o.bindRenderbuffer(36161,J.__webglColorRenderbuffer[_e]);const ve=s.convert(pe.format,pe.encoding),me=s.convert(pe.type),Ae=y(pe.internalFormat,ve,me,pe.encoding),Oe=ot(L);o.renderbufferStorageMultisample(36161,Oe,Ae,L.width,L.height),o.framebufferRenderbuffer(36160,36064+_e,36161,J.__webglColorRenderbuffer[_e])}o.bindRenderbuffer(36161,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),N(34067,T,Me);for(let $=0;$<6;$++)oe(J.__webglFramebuffer[$],L,T,36064,34069+$);S(T,Me)&&C(34067),t.unbindTexture()}else if(le){const $=L.texture;for(let _e=0,pe=$.length;_e<pe;_e++){const ve=$[_e],me=i.get(ve);t.bindTexture(3553,me.__webglTexture),N(3553,ve,Me),oe(J.__webglFramebuffer,L,ve,36064+_e,3553),S(ve,Me)&&C(3553)}t.unbindTexture()}else{let $=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?$=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,te.__webglTexture),N($,T,Me),oe(J.__webglFramebuffer,L,T,36064,$),S(T,Me)&&C($),t.unbindTexture()}L.depthBuffer&&ye(L)}function dt(L){const T=_(L)||a,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let te=0,ie=J.length;te<ie;te++){const le=J[te];if(S(le,T)){const Me=L.isWebGLCubeRenderTarget?34067:3553,$=i.get(le).__webglTexture;t.bindTexture(Me,$),C(Me),t.unbindTexture()}}}function Gt(L){if(a&&L.samples>0&&Ue(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,te=L.height;let ie=16384;const le=[],Me=L.stencilBuffer?33306:36096,$=i.get(L),_e=L.isWebGLMultipleRenderTargets===!0;if(_e)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){le.push(36064+pe),L.depthBuffer&&le.push(Me);const ve=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(ve===!1&&(L.depthBuffer&&(ie|=256),L.stencilBuffer&&(ie|=1024)),_e&&o.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[pe]),ve===!0&&(o.invalidateFramebuffer(36008,[Me]),o.invalidateFramebuffer(36009,[Me])),_e){const me=i.get(T[pe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,me,0)}o.blitFramebuffer(0,0,J,te,0,0,J,te,ie,9728),f&&o.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),_e)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pe,36161,$.__webglColorRenderbuffer[pe]);const ve=i.get(T[pe]).__webglTexture;t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pe,3553,ve,0)}t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function ot(L){return Math.min(p,L.samples)}function Ue(L){const T=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Jt(L){const T=n.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Ut(L,T){const J=L.encoding,te=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===1035||J!==3e3&&(J===3001?a===!1?e.has("EXT_sRGB")===!0&&te===1023?(L.format=1035,L.minFilter=1006,L.generateMipmaps=!1):T=so.sRGBToLinear(T):(te!==1023||ie!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",J)),T}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=ee,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=at,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ue}function xp(o,e,t){const i=t.isWebGL2;function r(s,n=null){let a;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1028)return 6403;if(s===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(n===3001)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===37492)return n===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===37496)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===37808)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return n===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===36492)return n===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===1020?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:r}}class _p extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class en{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,n=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){n=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const x=new rs;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=n!==null),this}}class bp extends St{constructor(e,t,i,r,s,n,a,l,c,u){if(u=u!==void 0?u:1026,u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===1026&&(i=1014),i===void 0&&u===1027&&(i=1020),super(null,r,s,n,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class wp extends dr{constructor(e,t){super();const i=this;let r=null,s=1,n=null,a="local-floor",l=null,c=null,u=null,p=null,h=null,f=null;const g=t.getContextAttributes();let m=null,d=null;const v=[],x=[],b=new Mt;b.layers.enable(1),b.viewport=new et;const _=new Mt;_.layers.enable(2),_.viewport=new et;const M=[b,_],S=new _p;S.layers.enable(1),S.layers.enable(2);let C=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=v[B];return j===void 0&&(j=new en,v[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=v[B];return j===void 0&&(j=new en,v[B]=j),j.getGripSpace()},this.getHand=function(B){let j=v[B];return j===void 0&&(j=new en,v[B]=j),j.getHandSpace()};function E(B){const j=x.indexOf(B.inputSource);if(j===-1)return;const ee=v[j];ee!==void 0&&ee.dispatchEvent({type:B.type,data:B.inputSource})}function D(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",P);for(let B=0;B<v.length;B++){const j=x[B];j!==null&&(x[B]=null,v[B].disconnect(j))}C=null,y=null,e.setRenderTarget(m),h=null,p=null,u=null,r=null,d=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",D),r.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:h}),d=new Gi(h.framebufferWidth,h.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding})}else{let j=null,ee=null,W=null;g.depth&&(W=g.stencil?35056:33190,j=g.stencil?1027:1026,ee=g.stencil?1020:1014);const Q={colorFormat:32856,depthFormat:W,scaleFactor:s};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(Q),r.updateRenderState({layers:[p]}),d=new Gi(p.textureWidth,p.textureHeight,{format:1023,type:1009,depthTexture:new bp(p.textureWidth,p.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ue=e.properties.get(d);ue.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,n=await r.requestReferenceSpace(a),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function P(B){for(let j=0;j<B.removed.length;j++){const ee=B.removed[j],W=x.indexOf(ee);W>=0&&(x[W]=null,v[W].dispatchEvent({type:"disconnected",data:ee}))}for(let j=0;j<B.added.length;j++){const ee=B.added[j];let W=x.indexOf(ee);if(W===-1){for(let ue=0;ue<v.length;ue++)if(ue>=x.length){x.push(ee),W=ue;break}else if(x[ue]===null){x[ue]=ee,W=ue;break}if(W===-1)break}const Q=v[W];Q&&Q.dispatchEvent({type:"connected",data:ee})}}const O=new U,z=new U;function R(B,j,ee){O.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(ee.matrixWorld);const W=O.distanceTo(z),Q=j.projectionMatrix.elements,ue=ee.projectionMatrix.elements,Ce=Q[14]/(Q[10]-1),N=Q[14]/(Q[10]+1),ae=(Q[9]+1)/Q[5],fe=(Q[9]-1)/Q[5],ge=(Q[8]-1)/Q[0],oe=(ue[8]+1)/ue[0],ke=Ce*ge,Te=Ce*oe,ye=W/(-ge+oe),at=ye*-ge;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(at),B.translateZ(ye),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const xt=Ce+ye,dt=N+ye,Gt=ke-at,ot=Te+(W-at),Ue=ae*N/dt*xt,Jt=fe*N/dt*xt;B.projectionMatrix.makePerspective(Gt,ot,Ue,Jt,xt,dt)}function k(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;S.near=_.near=b.near=B.near,S.far=_.far=b.far=B.far,(C!==S.near||y!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,y=S.far);const j=B.parent,ee=S.cameras;k(S,j);for(let Q=0;Q<ee.length;Q++)k(ee[Q],j);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),B.position.copy(S.position),B.quaternion.copy(S.quaternion),B.scale.copy(S.scale),B.matrix.copy(S.matrix),B.matrixWorld.copy(S.matrixWorld);const W=B.children;for(let Q=0,ue=W.length;Q<ue;Q++)W[Q].updateMatrixWorld(!0);ee.length===2?R(S,b,_):S.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){p!==null&&(p.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)};let F=null;function q(B,j){if(c=j.getViewerPose(l||n),f=j,c!==null){const ee=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let W=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,W=!0);for(let Q=0;Q<ee.length;Q++){const ue=ee[Q];let Ce=null;if(h!==null)Ce=h.getViewport(ue);else{const ae=u.getViewSubImage(p,ue);Ce=ae.viewport,Q===0&&(e.setRenderTargetTextures(d,ae.colorTexture,p.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(d))}let N=M[Q];N===void 0&&(N=new Mt,N.layers.enable(Q),N.viewport=new et,M[Q]=N),N.matrix.fromArray(ue.transform.matrix),N.projectionMatrix.fromArray(ue.projectionMatrix),N.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Q===0&&S.matrix.copy(N.matrix),W===!0&&S.cameras.push(N)}}for(let ee=0;ee<v.length;ee++){const W=x[ee],Q=v[ee];W!==null&&Q!==void 0&&Q.update(W,j,l||n)}F&&F(B,j),f=null}const X=new mo;X.setAnimationLoop(q),this.setAnimationLoop=function(B){F=B},this.dispose=function(){}}}function Mp(o,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,x,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),f(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&n(m,d)):d.isPointsMaterial?a(m,d,v,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===1&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===1&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=o.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function n(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===1&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function f(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Sp(o,e,t,i){let r={},s={},n=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(x,b){const _=b.program;i.uniformBlockBinding(x,_)}function c(x,b){let _=r[x.id];_===void 0&&(g(x),_=u(x),r[x.id]=_,x.addEventListener("dispose",d));const M=b.program;i.updateUBOMapping(x,M);const S=e.render.frame;s[x.id]!==S&&(h(x),s[x.id]=S)}function u(x){const b=p();x.__bindingPointIndex=b;const _=o.createBuffer(),M=x.__size,S=x.usage;return o.bindBuffer(35345,_),o.bufferData(35345,M,S),o.bindBuffer(35345,null),o.bindBufferBase(35345,b,_),_}function p(){for(let x=0;x<a;x++)if(n.indexOf(x)===-1)return n.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=r[x.id],_=x.uniforms,M=x.__cache;o.bindBuffer(35345,b);for(let S=0,C=_.length;S<C;S++){const y=_[S];if(f(y,S,M)===!0){const E=y.value,D=y.__offset;typeof E=="number"?(y.__data[0]=E,o.bufferSubData(35345,D,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):E.toArray(y.__data),o.bufferSubData(35345,D,y.__data))}}o.bindBuffer(35345,null)}function f(x,b,_){const M=x.value;if(_[b]===void 0)return typeof M=="number"?_[b]=M:_[b]=M.clone(),!0;if(typeof M=="number"){if(_[b]!==M)return _[b]=M,!0}else{const S=_[b];if(S.equals(M)===!1)return S.copy(M),!0}return!1}function g(x){const b=x.uniforms;let _=0;const M=16;let S=0;for(let C=0,y=b.length;C<y;C++){const E=b[C],D=m(E);if(E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,C>0){S=_%M;const P=M-S;S!==0&&P-D.boundary<0&&(_+=M-S,E.__offset=_)}_+=D.storage}return S=_%M,S>0&&(_+=M-S),x.__size=_,x.__cache={},this}function m(x){const b=x.value,_={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function d(x){const b=x.target;b.removeEventListener("dispose",d);const _=n.indexOf(b.__bindingPointIndex);n.splice(_,1),o.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function v(){for(const x in r)o.deleteBuffer(r[x]);n=[],r={},s={}}return{bind:l,update:c,dispose:v}}function Ep(){const o=fs("canvas");return o.style.display="block",o}function yo(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Ep(),t=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,r=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,n=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let p=null,h=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,v=0,x=0,b=null,_=-1,M=null;const S=new et,C=new et;let y=null,E=e.width,D=e.height,P=1,O=null,z=null;const R=new et(0,0,E,D),k=new et(0,0,E,D);let F=!1;const q=new Sn;let X=!1,B=!1,j=null;const ee=new tt,W=new Fe,Q=new U,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return b===null?P:1}let N=t;function ae(A,H){for(let Y=0;Y<A.length;Y++){const V=A[Y],K=e.getContext(V,H);if(K!==null)return K}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:n,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mn}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Oe,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),N===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),N=ae(H,A),N===null)throw ae(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let fe,ge,oe,ke,Te,ye,at,xt,dt,Gt,ot,Ue,Jt,Ut,L,T,J,te,ie,le,Me,$,_e,pe;function ve(){fe=new zh(N),ge=new Ch(N,fe,o),fe.init(ge),$=new xp(N,fe,ge),oe=new gp(N,fe,ge),ke=new Oh,Te=new ip,ye=new vp(N,fe,oe,Te,ge,$,ke),at=new Rh(m),xt=new Fh(m),dt=new $l(N,ge),_e=new Th(N,fe,dt,ge),Gt=new kh(N,dt,ke,_e),ot=new Hh(N,Gt,dt,ke),ie=new Uh(N,ge,ye),T=new Lh(Te),Ue=new tp(m,at,xt,fe,ge,_e,T),Jt=new Mp(m,Te),Ut=new sp,L=new up(fe,ge),te=new Eh(m,at,oe,ot,u,n),J=new fp(m,ot,ge),pe=new Sp(N,ke,ge,oe),le=new Ah(N,fe,ke,ge),Me=new Nh(N,fe,ke,ge),ke.programs=Ue.programs,m.capabilities=ge,m.extensions=fe,m.properties=Te,m.renderLists=Ut,m.shadowMap=J,m.state=oe,m.info=ke}ve();const me=new wp(m,N);this.xr=me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(E,D,!1))},this.getSize=function(A){return A.set(E,D)},this.setSize=function(A,H,Y){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,D=H,e.width=Math.floor(A*P),e.height=Math.floor(H*P),Y!==!1&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(E*P,D*P).floor()},this.setDrawingBufferSize=function(A,H,Y){E=A,D=H,P=Y,e.width=Math.floor(A*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,H,Y,V){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,H,Y,V),oe.viewport(S.copy(R).multiplyScalar(P).floor())},this.getScissor=function(A){return A.copy(k)},this.setScissor=function(A,H,Y,V){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,H,Y,V),oe.scissor(C.copy(k).multiplyScalar(P).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(A){oe.setScissorTest(F=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,H=!0,Y=!0){let V=0;A&&(V|=16384),H&&(V|=256),Y&&(V|=1024),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Oe,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),Ut.dispose(),L.dispose(),Te.dispose(),at.dispose(),xt.dispose(),ot.dispose(),_e.dispose(),pe.dispose(),Ue.dispose(),me.dispose(),me.removeEventListener("sessionstart",We),me.removeEventListener("sessionend",it),j&&(j.dispose(),j=null),Ye.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const A=ke.autoReset,H=J.enabled,Y=J.autoUpdate,V=J.needsUpdate,K=J.type;ve(),ke.autoReset=A,J.enabled=H,J.autoUpdate=Y,J.needsUpdate=V,J.type=K}function Xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function G(A){const H=A.target;H.removeEventListener("dispose",G),ce(H)}function ce(A){Z(A),Te.remove(A)}function Z(A){const H=Te.get(A).programs;H!==void 0&&(H.forEach(function(Y){Ue.releaseProgram(Y)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Y,V,K,xe){H===null&&(H=ue);const Se=K.isMesh&&K.matrixWorld.determinant()<0,Ee=zo(A,H,Y,V,K);oe.setMaterial(V,Se);let De=Y.index;const qe=Y.attributes.position;if(De===null){if(qe===void 0||qe.count===0)return}else if(De.count===0)return;let Pe=1;V.wireframe===!0&&(De=Gt.getWireframeAttribute(Y),Pe=2),_e.setup(K,V,Ee,Y,De);let ze,rt=le;De!==null&&(ze=dt.get(De),rt=Me,rt.setIndex(ze));const Mi=De!==null?De.count:qe.count,Vi=Y.drawRange.start*Pe,ji=Y.drawRange.count*Pe,Ht=xe!==null?xe.start*Pe:0,Be=xe!==null?xe.count*Pe:1/0,qi=Math.max(Vi,Ht),mr=Math.min(Mi,Vi+ji,Ht+Be)-1,At=Math.max(0,mr-qi+1);if(At!==0){if(K.isMesh)V.wireframe===!0?(oe.setLineWidth(V.wireframeLinewidth*Ce()),rt.setMode(1)):rt.setMode(4);else if(K.isLine){let di=V.linewidth;di===void 0&&(di=1),oe.setLineWidth(di*Ce()),K.isLineSegments?rt.setMode(1):K.isLineLoop?rt.setMode(2):rt.setMode(3)}else K.isPoints?rt.setMode(0):K.isSprite&&rt.setMode(4);if(K.isInstancedMesh)rt.renderInstances(qi,At,K.count);else if(Y.isInstancedBufferGeometry){const di=Math.min(Y.instanceCount,Y._maxInstanceCount);rt.renderInstances(qi,At,di)}else rt.render(qi,At)}},this.compile=function(A,H){h=L.get(A),h.init(),g.push(h),A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights(m.physicallyCorrectLights),A.traverse(function(Y){const V=Y.material;if(V)if(Array.isArray(V))for(let K=0;K<V.length;K++){const xe=V[K];bs(xe,A,Y)}else bs(V,A,Y)}),g.pop(),h=null};let de=null;function re(A){de&&de(A)}function We(){Ye.stop()}function it(){Ye.start()}const Ye=new mo;Ye.setAnimationLoop(re),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){de=A,me.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},me.addEventListener("sessionstart",We),me.addEventListener("sessionend",it),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(H),H=me.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,H,b),h=L.get(A,g.length),h.init(),g.push(h),ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q.setFromProjectionMatrix(ee),B=this.localClippingEnabled,X=T.init(this.clippingPlanes,B,H),p=Ut.get(A,f.length),p.init(),f.push(p),hi(A,H,0,m.sortObjects),p.finish(),m.sortObjects===!0&&p.sort(O,z),X===!0&&T.beginShadows();const Y=h.state.shadowsArray;if(J.render(Y,A,H),X===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(p,A),h.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const V=H.cameras;for(let K=0,xe=V.length;K<xe;K++){const Se=V[K];je(p,A,Se,Se.viewport)}}else je(p,A,H);b!==null&&(ye.updateMultisampleRenderTarget(b),ye.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(m,A,H),_e.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?p=f[f.length-1]:p=null};function hi(A,H,Y,V){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){V&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const xe=ot.update(A),Se=A.material;Se.visible&&p.push(A,xe,Se,Y,Q.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==ke.render.frame&&(A.skeleton.update(),A.skeleton.frame=ke.render.frame),!A.frustumCulled||q.intersectsObject(A))){V&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const xe=ot.update(A),Se=A.material;if(Array.isArray(Se)){const Ee=xe.groups;for(let De=0,qe=Ee.length;De<qe;De++){const Pe=Ee[De],ze=Se[Pe.materialIndex];ze&&ze.visible&&p.push(A,xe,ze,Y,Q.z,Pe)}}else Se.visible&&p.push(A,xe,Se,Y,Q.z,null)}}const K=A.children;for(let xe=0,Se=K.length;xe<Se;xe++)hi(K[xe],H,Y,V)}function je(A,H,Y,V){const K=A.opaque,xe=A.transmissive,Se=A.transparent;h.setupLightsView(Y),xe.length>0&&Kt(K,H,Y),V&&oe.viewport(S.copy(V)),K.length>0&&Tt(K,H,Y),xe.length>0&&Tt(xe,H,Y),Se.length>0&&Tt(Se,H,Y),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Kt(A,H,Y){const V=ge.isWebGL2;j===null&&(j=new Gi(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:V&&s===!0?4:0})),m.getDrawingBufferSize(W),V?j.setSize(W.x,W.y):j.setSize(xn(W.x),xn(W.y));const K=m.getRenderTarget();m.setRenderTarget(j),m.clear();const xe=m.toneMapping;m.toneMapping=0,Tt(A,H,Y),m.toneMapping=xe,ye.updateMultisampleRenderTarget(j),ye.updateRenderTargetMipmap(j),m.setRenderTarget(K)}function Tt(A,H,Y){const V=H.isScene===!0?H.overrideMaterial:null;for(let K=0,xe=A.length;K<xe;K++){const Se=A[K],Ee=Se.object,De=Se.geometry,qe=V===null?Se.material:V,Pe=Se.group;Ee.layers.test(Y.layers)&&Fo(Ee,H,Y,De,qe,Pe)}}function Fo(A,H,Y,V,K,xe){A.onBeforeRender(m,H,Y,V,K,xe),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(m,H,Y,V,A,xe),K.transparent===!0&&K.side===2?(K.side=1,K.needsUpdate=!0,m.renderBufferDirect(Y,H,V,K,A,xe),K.side=0,K.needsUpdate=!0,m.renderBufferDirect(Y,H,V,K,A,xe),K.side=2):m.renderBufferDirect(Y,H,V,K,A,xe),A.onAfterRender(m,H,Y,V,K,xe)}function bs(A,H,Y){H.isScene!==!0&&(H=ue);const V=Te.get(A),K=h.state.lights,xe=h.state.shadowsArray,Se=K.state.version,Ee=Ue.getParameters(A,K.state,xe,H,Y),De=Ue.getProgramCacheKey(Ee);let qe=V.programs;V.environment=A.isMeshStandardMaterial?H.environment:null,V.fog=H.fog,V.envMap=(A.isMeshStandardMaterial?xt:at).get(A.envMap||V.environment),qe===void 0&&(A.addEventListener("dispose",G),qe=new Map,V.programs=qe);let Pe=qe.get(De);if(Pe!==void 0){if(V.currentProgram===Pe&&V.lightsStateVersion===Se)return Dn(A,Ee),Pe}else Ee.uniforms=Ue.getUniforms(A),A.onBuild(Y,Ee,m),A.onBeforeCompile(Ee,m),Pe=Ue.acquireProgram(Ee,De),qe.set(De,Pe),V.uniforms=Ee.uniforms;const ze=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=T.uniform),Dn(A,Ee),V.needsLights=No(A),V.lightsStateVersion=Se,V.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMap.value=K.state.directionalShadowMap,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotShadowMap.value=K.state.spotShadowMap,ze.spotShadowMatrix.value=K.state.spotShadowMatrix,ze.pointShadowMap.value=K.state.pointShadowMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix);const rt=Pe.getUniforms(),Mi=us.seqWithValue(rt.seq,ze);return V.currentProgram=Pe,V.uniformsList=Mi,Pe}function Dn(A,H){const Y=Te.get(A);Y.outputEncoding=H.outputEncoding,Y.instancing=H.instancing,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function zo(A,H,Y,V,K){H.isScene!==!0&&(H=ue),ye.resetTextureUnits();const xe=H.fog,Se=V.isMeshStandardMaterial?H.environment:null,Ee=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:3e3,De=(V.isMeshStandardMaterial?xt:at).get(V.envMap||Se),qe=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Pe=!!V.normalMap&&!!Y.attributes.tangent,ze=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,Mi=!!Y.morphAttributes.color,Vi=V.toneMapped?m.toneMapping:0,ji=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ht=ji!==void 0?ji.length:0,Be=Te.get(V),qi=h.state.lights;if(X===!0&&(B===!0||A!==M)){const _t=A===M&&V.id===_;T.setState(V,A,_t)}let mr=!1;V.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==qi.state.version||Be.outputEncoding!==Ee||K.isInstancedMesh&&Be.instancing===!1||!K.isInstancedMesh&&Be.instancing===!0||K.isSkinnedMesh&&Be.skinning===!1||!K.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==De||V.fog===!0&&Be.fog!==xe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==T.numPlanes||Be.numIntersection!==T.numIntersection)||Be.vertexAlphas!==qe||Be.vertexTangents!==Pe||Be.morphTargets!==ze||Be.morphNormals!==rt||Be.morphColors!==Mi||Be.toneMapping!==Vi||ge.isWebGL2===!0&&Be.morphTargetsCount!==Ht)&&(mr=!0):(mr=!0,Be.__version=V.version);let At=Be.currentProgram;mr===!0&&(At=bs(V,H,K));let di=!1,fr=!1,ws=!1;const pt=At.getUniforms(),gr=Be.uniforms;if(oe.useProgram(At.program)&&(di=!0,fr=!0,ws=!0),V.id!==_&&(_=V.id,fr=!0),di||M!==A){if(pt.setValue(N,"projectionMatrix",A.projectionMatrix),ge.logarithmicDepthBuffer&&pt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,fr=!0,ws=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const _t=pt.map.cameraPosition;_t!==void 0&&_t.setValue(N,Q.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||K.isSkinnedMesh)&&pt.setValue(N,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){pt.setOptional(N,K,"bindMatrix"),pt.setOptional(N,K,"bindMatrixInverse");const _t=K.skeleton;_t&&(ge.floatVertexTextures?(_t.boneTexture===null&&_t.computeBoneTexture(),pt.setValue(N,"boneTexture",_t.boneTexture,ye),pt.setValue(N,"boneTextureSize",_t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ms=Y.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0&&ge.isWebGL2===!0)&&ie.update(K,Y,V,At),(fr||Be.receiveShadow!==K.receiveShadow)&&(Be.receiveShadow=K.receiveShadow,pt.setValue(N,"receiveShadow",K.receiveShadow)),fr&&(pt.setValue(N,"toneMappingExposure",m.toneMappingExposure),Be.needsLights&&ko(gr,ws),xe&&V.fog===!0&&Jt.refreshFogUniforms(gr,xe),Jt.refreshMaterialUniforms(gr,V,P,D,j),us.upload(N,Be.uniformsList,gr,ye)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(us.upload(N,Be.uniformsList,gr,ye),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(N,"center",K.center),pt.setValue(N,"modelViewMatrix",K.modelViewMatrix),pt.setValue(N,"normalMatrix",K.normalMatrix),pt.setValue(N,"modelMatrix",K.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const _t=V.uniformsGroups;for(let Ss=0,Oo=_t.length;Ss<Oo;Ss++)if(ge.isWebGL2){const Pn=_t[Ss];pe.update(Pn,At),pe.bind(Pn,At)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return At}function ko(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function No(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,H,Y){Te.get(A.texture).__webglTexture=H,Te.get(A.depthTexture).__webglTexture=Y;const V=Te.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=Y===void 0,V.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,H){const Y=Te.get(A);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Y=0){b=A,v=H,x=Y;let V=!0;if(A){const Ee=Te.get(A);Ee.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),V=!1):Ee.__webglFramebuffer===void 0?ye.setupRenderTarget(A):Ee.__hasExternalTextures&&ye.rebindTextures(A,Te.get(A.texture).__webglTexture,Te.get(A.depthTexture).__webglTexture)}let K=null,xe=!1,Se=!1;if(A){const Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(Se=!0);const De=Te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=De[H],xe=!0):ge.isWebGL2&&A.samples>0&&ye.useMultisampledRTT(A)===!1?K=Te.get(A).__webglMultisampledFramebuffer:K=De,S.copy(A.viewport),C.copy(A.scissor),y=A.scissorTest}else S.copy(R).multiplyScalar(P).floor(),C.copy(k).multiplyScalar(P).floor(),y=F;if(oe.bindFramebuffer(36160,K)&&ge.drawBuffers&&V&&oe.drawBuffers(A,K),oe.viewport(S),oe.scissor(C),oe.setScissorTest(y),xe){const Ee=Te.get(A.texture);N.framebufferTexture2D(36160,36064,34069+H,Ee.__webglTexture,Y)}else if(Se){const Ee=Te.get(A.texture),De=H||0;N.framebufferTextureLayer(36160,36064,Ee.__webglTexture,Y||0,De)}_=-1},this.readRenderTargetPixels=function(A,H,Y,V,K,xe,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){oe.bindFramebuffer(36160,Ee);try{const De=A.texture,qe=De.format,Pe=De.type;if(qe!==1023&&$.convert(qe)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Pe===1016&&(fe.has("EXT_color_buffer_half_float")||ge.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Pe!==1009&&$.convert(Pe)!==N.getParameter(35738)&&!(Pe===1015&&(ge.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-V&&Y>=0&&Y<=A.height-K&&N.readPixels(H,Y,V,K,$.convert(qe),$.convert(Pe),xe)}finally{const De=b!==null?Te.get(b).__webglFramebuffer:null;oe.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(A,H,Y=0){const V=Math.pow(2,-Y),K=Math.floor(H.image.width*V),xe=Math.floor(H.image.height*V);ye.setTexture2D(H,0),N.copyTexSubImage2D(3553,Y,0,0,A.x,A.y,K,xe),oe.unbindTexture()},this.copyTextureToTexture=function(A,H,Y,V=0){const K=H.image.width,xe=H.image.height,Se=$.convert(Y.format),Ee=$.convert(Y.type);ye.setTexture2D(Y,0),N.pixelStorei(37440,Y.flipY),N.pixelStorei(37441,Y.premultiplyAlpha),N.pixelStorei(3317,Y.unpackAlignment),H.isDataTexture?N.texSubImage2D(3553,V,A.x,A.y,K,xe,Se,Ee,H.image.data):H.isCompressedTexture?N.compressedTexSubImage2D(3553,V,A.x,A.y,H.mipmaps[0].width,H.mipmaps[0].height,Se,H.mipmaps[0].data):N.texSubImage2D(3553,V,A.x,A.y,Se,Ee,H.image),V===0&&Y.generateMipmaps&&N.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(A,H,Y,V,K=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,De=$.convert(V.format),qe=$.convert(V.type);let Pe;if(V.isData3DTexture)ye.setTexture3D(V,0),Pe=32879;else if(V.isDataArrayTexture)ye.setTexture2DArray(V,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,V.flipY),N.pixelStorei(37441,V.premultiplyAlpha),N.pixelStorei(3317,V.unpackAlignment);const ze=N.getParameter(3314),rt=N.getParameter(32878),Mi=N.getParameter(3316),Vi=N.getParameter(3315),ji=N.getParameter(32877),Ht=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;N.pixelStorei(3314,Ht.width),N.pixelStorei(32878,Ht.height),N.pixelStorei(3316,A.min.x),N.pixelStorei(3315,A.min.y),N.pixelStorei(32877,A.min.z),Y.isDataTexture||Y.isData3DTexture?N.texSubImage3D(Pe,K,H.x,H.y,H.z,xe,Se,Ee,De,qe,Ht.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pe,K,H.x,H.y,H.z,xe,Se,Ee,De,Ht.data)):N.texSubImage3D(Pe,K,H.x,H.y,H.z,xe,Se,Ee,De,qe,Ht),N.pixelStorei(3314,ze),N.pixelStorei(32878,rt),N.pixelStorei(3316,Mi),N.pixelStorei(3315,Vi),N.pixelStorei(32877,ji),K===0&&V.generateMipmaps&&N.generateMipmap(Pe),oe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ye.setTextureCube(A,0):A.isData3DTexture?ye.setTexture3D(A,0):A.isDataArrayTexture?ye.setTexture2DArray(A,0):ye.setTexture2D(A,0),oe.unbindTexture()},this.resetState=function(){v=0,x=0,b=null,oe.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Tp extends yo{}Tp.prototype.isWebGL1Renderer=!0;class Ap extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class xa extends St{constructor(e,t,i,r,s,n,a,l,c){super(e,t,i,r,s,n,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tn extends Zt{constructor(e=1,t=1,i=1,r=8,s=1,n=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:n,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],h=[],f=[];let g=0;const m=[],d=i/2;let v=0;x(),n===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function x(){const _=new U,M=new U;let S=0;const C=(t-e)/i;for(let y=0;y<=s;y++){const E=[],D=y/s,P=D*(t-e)+e;for(let O=0;O<=r;O++){const z=O/r,R=z*l+a,k=Math.sin(R),F=Math.cos(R);M.x=P*k,M.y=-D*i+d,M.z=P*F,p.push(M.x,M.y,M.z),_.set(k,C,F).normalize(),h.push(_.x,_.y,_.z),f.push(z,1-D),E.push(g++)}m.push(E)}for(let y=0;y<r;y++)for(let E=0;E<s;E++){const D=m[E][y],P=m[E+1][y],O=m[E+1][y+1],z=m[E][y+1];u.push(D,P,z),u.push(P,O,z),S+=6}c.addGroup(v,S,0),v+=S}function b(_){const M=g,S=new Fe,C=new U;let y=0;const E=_===!0?e:t,D=_===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,d*D,0),h.push(0,D,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=r;O++){const z=O/r*l+a,R=Math.cos(z),k=Math.sin(z);C.x=E*k,C.y=d*D,C.z=E*R,p.push(C.x,C.y,C.z),h.push(0,D,0),S.x=R*.5+.5,S.y=k*.5*D+.5,f.push(S.x,S.y),g++}for(let O=0;O<r;O++){const z=M+O,R=P+O;_===!0?u.push(R,R+1,z):u.push(R+1,R,z),y+=3}c.addGroup(v,y,_===!0?1:2),v+=y}}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cp extends Wi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Lp extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rp extends Wi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bo extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Dp extends bo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _a=new tt,ya=new U,ba=new U;class Pp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sn,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(ya),ba.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ba),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ip extends Pp{constructor(){super(new Mt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=vn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fp extends bo{constructor(e,t,i=0,r=Math.PI/3,s=0,n=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=n,this.shadow=new Ip}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mn);class Bt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new w);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new w);const i=this.elements,r=e.x,s=e.y,n=e.z;return t.x=i[0]*r+i[1]*s+i[2]*n,t.y=i[3]*r+i[4]*s+i[5]*n,t.z=i[6]*r+i[7]*s+i[8]*n,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Bt);const i=this.elements,r=e.elements,s=t.elements,n=i[0],a=i[1],l=i[2],c=i[3],u=i[4],p=i[5],h=i[6],f=i[7],g=i[8],m=r[0],d=r[1],v=r[2],x=r[3],b=r[4],_=r[5],M=r[6],S=r[7],C=r[8];return s[0]=n*m+a*x+l*M,s[1]=n*d+a*b+l*S,s[2]=n*v+a*_+l*C,s[3]=c*m+u*x+p*M,s[4]=c*d+u*b+p*S,s[5]=c*v+u*_+p*C,s[6]=h*m+f*x+g*M,s[7]=h*d+f*b+g*S,s[8]=h*v+f*_+g*C,t}scale(e,t){t===void 0&&(t=new Bt);const i=this.elements,r=t.elements;for(let s=0;s!==3;s++)r[3*s+0]=e.x*i[3*s+0],r[3*s+1]=e.y*i[3*s+1],r[3*s+2]=e.z*i[3*s+2];return t}solve(e,t){t===void 0&&(t=new w);const i=3,r=4,s=[];let n,a;for(n=0;n<i*r;n++)s.push(0);for(n=0;n<3;n++)for(a=0;a<3;a++)s[n+r*a]=this.elements[n+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let u;const p=4;let h;do{if(n=c-l,s[n+r*n]===0){for(a=n+1;a<c;a++)if(s[n+r*a]!==0){u=p;do h=p-u,s[h+r*n]+=s[h+r*a];while(--u);break}}if(s[n+r*n]!==0)for(a=n+1;a<c;a++){const f=s[n+r*a]/s[n+r*n];u=p;do h=p-u,s[h+r*a]=h<=n?0:s[h+r*a]-s[h+r*n]*f;while(--u)}}while(--l);if(t.z=s[2*r+3]/s[2*r+2],t.y=(s[1*r+3]-s[1*r+2]*t.z)/s[1*r+1],t.x=(s[0*r+3]-s[0*r+2]*t.z-s[0*r+1]*t.y)/s[0*r+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new Bt);const t=3,i=6,r=zp;let s,n;for(s=0;s<3;s++)for(n=0;n<3;n++)r[s+i*n]=this.elements[s+3*n];r[3+6*0]=1,r[3+6*1]=0,r[3+6*2]=0,r[4+6*0]=0,r[4+6*1]=1,r[4+6*2]=0,r[5+6*0]=0,r[5+6*1]=0,r[5+6*2]=1;let a=3;const l=a;let c;const u=i;let p;do{if(s=l-a,r[s+i*s]===0){for(n=s+1;n<l;n++)if(r[s+i*n]!==0){c=u;do p=u-c,r[p+i*s]+=r[p+i*n];while(--c);break}}if(r[s+i*s]!==0)for(n=s+1;n<l;n++){const h=r[s+i*n]/r[s+i*s];c=u;do p=u-c,r[p+i*n]=p<=s?0:r[p+i*n]-r[p+i*s]*h;while(--c)}}while(--a);s=2;do{n=s-1;do{const h=r[s+i*n]/r[s+i*s];c=i;do p=i-c,r[p+i*n]=r[p+i*n]-r[p+i*s]*h;while(--c)}while(n--)}while(--s);s=2;do{const h=1/r[s+i*s];c=i;do p=i-c,r[p+i*s]=r[p+i*s]*h;while(--c)}while(s--);s=2;do{n=2;do{if(p=r[t+n+i*s],isNaN(p)||p===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,n,p)}while(n--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,r=e.z,s=e.w,n=t+t,a=i+i,l=r+r,c=t*n,u=t*a,p=t*l,h=i*a,f=i*l,g=r*l,m=s*n,d=s*a,v=s*l,x=this.elements;return x[3*0+0]=1-(h+g),x[3*0+1]=u-v,x[3*0+2]=p+d,x[3*1+0]=u+v,x[3*1+1]=1-(c+g),x[3*1+2]=f-m,x[3*2+0]=p-d,x[3*2+1]=f+m,x[3*2+2]=1-(c+h),this}transpose(e){e===void 0&&(e=new Bt);const t=this.elements,i=e.elements;let r;return i[0]=t[0],i[4]=t[4],i[8]=t[8],r=t[1],i[1]=t[3],i[3]=r,r=t[2],i[2]=t[6],i[6]=r,r=t[5],i[5]=t[7],i[7]=r,e}}const zp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new w);const i=e.x,r=e.y,s=e.z,n=this.x,a=this.y,l=this.z;return t.x=a*s-l*r,t.y=l*i-n*s,t.z=n*r-a*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new w(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new w(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Bt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,r=Math.sqrt(e*e+t*t+i*i);if(r>0){const s=1/r;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return r}unit(e){e===void 0&&(e=new w);const t=this.x,i=this.y,r=this.z;let s=Math.sqrt(t*t+i*i+r*r);return s>0?(s=1/s,e.x=t*s,e.y=i*s,e.z=r*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,r=this.z,s=e.x,n=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(n-i)*(n-i)+(a-r)*(a-r))}distanceSquared(e){const t=this.x,i=this.y,r=this.z,s=e.x,n=e.y,a=e.z;return(s-t)*(s-t)+(n-i)*(n-i)+(a-r)*(a-r)}scale(e,t){t===void 0&&(t=new w);const i=this.x,r=this.y,s=this.z;return t.x=e*i,t.y=e*r,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new w),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new w),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new w),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const r=kp,s=1/i;r.set(this.x*s,this.y*s,this.z*s);const n=Np;Math.abs(r.x)<.9?(n.set(1,0,0),r.cross(n,e)):(n.set(0,1,0),r.cross(n,e)),r.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const r=this.x,s=this.y,n=this.z;i.x=r+(e.x-r)*t,i.y=s+(e.y-s)*t,i.z=n+(e.z-n)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(wa),wa.almostEquals(e,t)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const kp=new w,Np=new w,wa=new w;class Et{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,r){const s=this.lowerBound,n=this.upperBound,a=i;s.copy(e[0]),a&&a.vmult(s,s),n.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Ma),c=Ma),c.x>n.x&&(n.x=c.x),c.x<s.x&&(s.x=c.x),c.y>n.y&&(n.y=c.y),c.y<s.y&&(s.y=c.y),c.z>n.z&&(n.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(n,n)),r&&(s.x-=r,s.y-=r,s.z-=r,n.x+=r,n.y+=r,n.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Et().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,s=e.upperBound,n=r.x<=i.x&&i.x<=s.x||t.x<=s.x&&s.x<=i.x,a=r.y<=i.y&&i.y<=s.y||t.y<=s.y&&s.y<=i.y,l=r.z<=i.z&&i.z<=s.z||t.z<=s.z&&s.z<=i.z;return n&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,s=e.upperBound;return t.x<=r.x&&i.x>=s.x&&t.y<=r.y&&i.y>=s.y&&t.z<=r.z&&i.z>=s.z}getCorners(e,t,i,r,s,n,a,l){const c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),i.set(u.x,u.y,c.z),r.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),n.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){const i=Sa,r=i[0],s=i[1],n=i[2],a=i[3],l=i[4],c=i[5],u=i[6],p=i[7];this.getCorners(r,s,n,a,l,c,u,p);for(let h=0;h!==8;h++){const f=i[h];e.pointToLocal(f,f)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=Sa,r=i[0],s=i[1],n=i[2],a=i[3],l=i[4],c=i[5],u=i[6],p=i[7];this.getCorners(r,s,n,a,l,c,u,p);for(let h=0;h!==8;h++){const f=i[h];e.pointToWorld(f,f)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,r=1/t.x,s=1/t.y,n=1/t.z,a=(this.lowerBound.x-i.x)*r,l=(this.upperBound.x-i.x)*r,c=(this.lowerBound.y-i.y)*s,u=(this.upperBound.y-i.y)*s,p=(this.lowerBound.z-i.z)*n,h=(this.upperBound.z-i.z)*n,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(p,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(p,h));return!(g<0||f>g)}}const Ma=new w,Sa=[new w,new w,new w,new w,new w,new w,new w,new w];class Ea{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:r}=t;if(r>i){const s=r;r=i,i=s}return this.matrix[(i*(i+1)>>1)+r-1]}set(e,t,i){let{index:r}=e,{index:s}=t;if(s>r){const n=s;s=r,r=n}this.matrix[(r*(r+1)>>1)+s-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const r=i[e].indexOf(t);return r!==-1&&i[e].splice(r,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let i=0,r=t.length;i<r;i++)t[i].call(this,e)}return this}}class Je{constructor(e,t,i,r){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),r===void 0&&(r=1),this.x=e,this.y=t,this.z=i,this.w=r}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=Op,r=Bp;e.tangents(i,r),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Je);const i=this.x,r=this.y,s=this.z,n=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=i*u+n*a+r*c-s*l,t.y=r*u+n*l+s*a-i*c,t.z=s*u+n*c+i*l-r*a,t.w=n*u-i*a-r*l-s*c,t}inverse(e){e===void 0&&(e=new Je);const t=this.x,i=this.y,r=this.z,s=this.w;this.conjugate(e);const n=1/(t*t+i*i+r*r+s*s);return e.x*=n,e.y*=n,e.z*=n,e.w*=n,e}conjugate(e){return e===void 0&&(e=new Je),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new w);const i=e.x,r=e.y,s=e.z,n=this.x,a=this.y,l=this.z,c=this.w,u=c*i+a*s-l*r,p=c*r+l*i-n*s,h=c*s+n*r-a*i,f=-n*i-a*r-l*s;return t.x=u*c+f*-n+p*-l-h*-a,t.y=p*c+f*-a+h*-n-u*-l,t.z=h*c+f*-l+u*-a-p*-n,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,r,s;const n=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const u=n*a+l*c;if(u>.499&&(i=2*Math.atan2(n,c),r=Math.PI/2,s=0),u<-.499&&(i=-2*Math.atan2(n,c),r=-Math.PI/2,s=0),i===void 0){const p=n*n,h=a*a,f=l*l;i=Math.atan2(2*a*c-2*n*l,1-2*h-2*f),r=Math.asin(2*u),s=Math.atan2(2*n*c-2*a*l,1-2*p-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=r,e.x=s}setFromEuler(e,t,i,r){r===void 0&&(r="XYZ");const s=Math.cos(e/2),n=Math.cos(t/2),a=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(i/2);return r==="XYZ"?(this.x=l*n*a+s*c*u,this.y=s*c*a-l*n*u,this.z=s*n*u+l*c*a,this.w=s*n*a-l*c*u):r==="YXZ"?(this.x=l*n*a+s*c*u,this.y=s*c*a-l*n*u,this.z=s*n*u-l*c*a,this.w=s*n*a+l*c*u):r==="ZXY"?(this.x=l*n*a-s*c*u,this.y=s*c*a+l*n*u,this.z=s*n*u+l*c*a,this.w=s*n*a-l*c*u):r==="ZYX"?(this.x=l*n*a-s*c*u,this.y=s*c*a+l*n*u,this.z=s*n*u-l*c*a,this.w=s*n*a+l*c*u):r==="YZX"?(this.x=l*n*a+s*c*u,this.y=s*c*a+l*n*u,this.z=s*n*u-l*c*a,this.w=s*n*a-l*c*u):r==="XZY"&&(this.x=l*n*a-s*c*u,this.y=s*c*a-l*n*u,this.z=s*n*u+l*c*a,this.w=s*n*a+l*c*u),this}clone(){return new Je(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new Je);const r=this.x,s=this.y,n=this.z,a=this.w;let l=e.x,c=e.y,u=e.z,p=e.w,h,f,g,m,d;return f=r*l+s*c+n*u+a*p,f<0&&(f=-f,l=-l,c=-c,u=-u,p=-p),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),m=Math.sin((1-t)*h)/g,d=Math.sin(t*h)/g):(m=1-t,d=t),i.x=m*r+d*l,i.y=m*s+d*c,i.z=m*n+d*u,i.w=m*a+d*p,i}integrate(e,t,i,r){r===void 0&&(r=new Je);const s=e.x*i.x,n=e.y*i.y,a=e.z*i.z,l=this.x,c=this.y,u=this.z,p=this.w,h=t*.5;return r.x+=h*(s*p+n*u-a*c),r.y+=h*(n*p+a*l-s*u),r.z+=h*(a*p+s*c-n*l),r.w+=h*(-s*l-n*c-a*u),r}}const Op=new w,Bp=new w,Gp={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class he{constructor(e){e===void 0&&(e={}),this.id=he.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}he.idCounter=0;he.types=Gp;class Ne{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new Je,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ne.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ne.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,r){return r===void 0&&(r=new w),i.vsub(e,r),t.conjugate(Ta),Ta.vmult(r,r),r}static pointToWorldFrame(e,t,i,r){return r===void 0&&(r=new w),t.vmult(i,r),r.vadd(e,r),r}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new w),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,r){return r===void 0&&(r=new w),t.w*=-1,t.vmult(i,r),t.w*=-1,r}}const Ta=new Je;class ki extends he{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:r=[],axes:s,boundingSphereRadius:n}=e;super({type:he.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),n?this.boundingSphereRadius=n:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const r=new w;for(let s=0;s!==e.length;s++){const n=e[s],a=n.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[n[l]].vsub(t[n[c]],r),r.normalize();let u=!1;for(let p=0;p!==i.length;p++)if(i[p].almostEquals(r)||i[p].almostEquals(r)){u=!0;break}u||i.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);const t=this.faceNormals[e]||new w;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],r=this.vertices[i[0]],s=this.vertices[i[1]],n=this.vertices[i[2]];ki.computeNormal(r,s,n,t)}static computeNormal(e,t,i,r){const s=new w,n=new w;t.vsub(e,n),i.vsub(t,s),s.cross(n,r),r.isZero()||r.normalize()}clipAgainstHull(e,t,i,r,s,n,a,l,c){const u=new w;let p=-1,h=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){u.copy(i.faceNormals[g]),s.vmult(u,u);const m=u.dot(n);m>h&&(h=m,p=g)}const f=[];for(let g=0;g<i.faces[p].length;g++){const m=i.vertices[i.faces[p][g]],d=new w;d.copy(m),s.vmult(d,d),r.vadd(d,d),f.push(d)}p>=0&&this.clipFaceAgainstHull(n,e,t,f,a,l,c)}findSeparatingAxis(e,t,i,r,s,n,a,l){const c=new w,u=new w,p=new w,h=new w,f=new w,g=new w;let m=Number.MAX_VALUE;const d=this;if(d.uniqueAxes)for(let v=0;v!==d.uniqueAxes.length;v++){i.vmult(d.uniqueAxes[v],c);const x=d.testSepAxis(c,e,t,i,r,s);if(x===!1)return!1;x<m&&(m=x,n.copy(c))}else{const v=a?a.length:d.faces.length;for(let x=0;x<v;x++){const b=a?a[x]:x;c.copy(d.faceNormals[b]),i.vmult(c,c);const _=d.testSepAxis(c,e,t,i,r,s);if(_===!1)return!1;_<m&&(m=_,n.copy(c))}}if(e.uniqueAxes)for(let v=0;v!==e.uniqueAxes.length;v++){s.vmult(e.uniqueAxes[v],u);const x=d.testSepAxis(u,e,t,i,r,s);if(x===!1)return!1;x<m&&(m=x,n.copy(u))}else{const v=l?l.length:e.faces.length;for(let x=0;x<v;x++){const b=l?l[x]:x;u.copy(e.faceNormals[b]),s.vmult(u,u);const _=d.testSepAxis(u,e,t,i,r,s);if(_===!1)return!1;_<m&&(m=_,n.copy(u))}}for(let v=0;v!==d.uniqueEdges.length;v++){i.vmult(d.uniqueEdges[v],h);for(let x=0;x!==e.uniqueEdges.length;x++)if(s.vmult(e.uniqueEdges[x],f),h.cross(f,g),!g.almostZero()){g.normalize();const b=d.testSepAxis(g,e,t,i,r,s);if(b===!1)return!1;b<m&&(m=b,n.copy(g))}}return r.vsub(t,p),p.dot(n)>0&&n.negate(n),!0}testSepAxis(e,t,i,r,s,n){const a=this;ki.project(a,e,i,r,tn),ki.project(t,e,s,n,rn);const l=tn[0],c=tn[1],u=rn[0],p=rn[1];if(l<p||u<c)return!1;const h=l-p,f=u-c;return h<f?h:f}calculateLocalInertia(e,t){const i=new w,r=new w;this.computeLocalAABB(r,i);const s=i.x-r.x,n=i.y-r.y,a=i.z-r.z;t.x=1/12*e*(2*n*2*n+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*n*2*n+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],r=this.vertices[t[0]];return-i.dot(r)}clipFaceAgainstHull(e,t,i,r,s,n,a){const l=new w,c=new w,u=new w,p=new w,h=new w,f=new w,g=new w,m=new w,d=this,v=[],x=r,b=v;let _=-1,M=Number.MAX_VALUE;for(let D=0;D<d.faces.length;D++){l.copy(d.faceNormals[D]),i.vmult(l,l);const P=l.dot(e);P<M&&(M=P,_=D)}if(_<0)return;const S=d.faces[_];S.connectedFaces=[];for(let D=0;D<d.faces.length;D++)for(let P=0;P<d.faces[D].length;P++)S.indexOf(d.faces[D][P])!==-1&&D!==_&&S.connectedFaces.indexOf(D)===-1&&S.connectedFaces.push(D);const C=S.length;for(let D=0;D<C;D++){const P=d.vertices[S[D]],O=d.vertices[S[(D+1)%C]];P.vsub(O,c),u.copy(c),i.vmult(u,u),t.vadd(u,u),p.copy(this.faceNormals[_]),i.vmult(p,p),t.vadd(p,p),u.cross(p,h),h.negate(h),f.copy(P),i.vmult(f,f),t.vadd(f,f);const z=S.connectedFaces[D];g.copy(this.faceNormals[z]);const R=this.getPlaneConstantOfFace(z);m.copy(g),i.vmult(m,m);const k=R-m.dot(t);for(this.clipFaceAgainstPlane(x,b,m,k);x.length;)x.shift();for(;b.length;)x.push(b.shift())}g.copy(this.faceNormals[_]);const y=this.getPlaneConstantOfFace(_);m.copy(g),i.vmult(m,m);const E=y-m.dot(t);for(let D=0;D<x.length;D++){let P=m.dot(x[D])+E;if(P<=s&&(console.log(`clamped: depth=${P} to minDist=${s}`),P=s),P<=n){const O=x[D];if(P<=1e-6){const z={point:O,normal:m,depth:P};a.push(z)}}}}clipFaceAgainstPlane(e,t,i,r){let s,n;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=i.dot(l)+r;for(let u=0;u<a;u++){if(c=e[u],n=i.dot(c)+r,s<0)if(n<0){const p=new w;p.copy(c),t.push(p)}else{const p=new w;l.lerp(c,s/(s-n),p),t.push(p)}else if(n<0){const p=new w;l.lerp(c,s/(s-n),p),t.push(p),t.push(c)}l=c,s=n}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const i=this.vertices,r=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(i[s],r[s]),e.vadd(r[s],r[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const s=i[r];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new w);const i=this.faceNormals,r=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(i[s],r[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const r=t[i].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,r){const s=this.vertices;let n,a,l,c,u,p,h=new w;for(let f=0;f<s.length;f++){h.copy(s[f]),t.vmult(h,h),e.vadd(h,h);const g=h;(n===void 0||g.x<n)&&(n=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(p===void 0||g.z>p)&&(p=g.z)}i.set(n,a,l),r.set(c,u,p)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,r=this.vertices;if(t){for(let s=0;s<i;s++){const n=r[s];t.vmult(n,n)}for(let s=0;s<this.faceNormals.length;s++){const n=this.faceNormals[s];t.vmult(n,n)}}if(e)for(let s=0;s<i;s++){const n=r[s];n.vadd(e,n)}}pointIsInside(e){const t=this.vertices,i=this.faces,r=this.faceNormals,s=new w;this.getAveragePointLocal(s);for(let n=0;n<this.faces.length;n++){let a=r[n];const l=t[i[n][0]],c=new w;e.vsub(l,c);const u=a.dot(c),p=new w;s.vsub(l,p);const h=a.dot(p);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(e,t,i,r,s){const n=e.vertices.length,a=Up;let l=0,c=0;const u=Hp,p=e.vertices;u.setZero(),Ne.vectorToLocalFrame(i,r,t,a),Ne.pointToLocalFrame(i,r,u,u);const h=u.dot(a);c=l=p[0].dot(a);for(let f=1;f<n;f++){const g=p[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const tn=[],rn=[];new w;const Up=new w,Hp=new w;class An extends he{constructor(e){super({type:he.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,r=w,s=[new r(-e,-t,-i),new r(e,-t,-i),new r(e,t,-i),new r(-e,t,-i),new r(-e,-t,i),new r(e,-t,i),new r(e,t,i),new r(-e,t,i)],n=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],l=new ki({vertices:s,faces:n,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new w),An.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const r=e;i.x=1/12*t*(2*r.y*2*r.y+2*r.z*2*r.z),i.y=1/12*t*(2*r.x*2*r.x+2*r.z*2*r.z),i.z=1/12*t*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,t){const i=e,r=this.halfExtents;if(i[0].set(r.x,0,0),i[1].set(0,r.y,0),i[2].set(0,0,r.z),i[3].set(-r.x,0,0),i[4].set(0,-r.y,0),i[5].set(0,0,-r.z),t!==void 0)for(let s=0;s!==i.length;s++)t.vmult(i[s],i[s]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const r=this.halfExtents,s=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let n=0;n<s.length;n++)yi.set(s[n][0],s[n][1],s[n][2]),t.vmult(yi,yi),e.vadd(yi,yi),i(yi.x,yi.y,yi.z)}calculateWorldAABB(e,t,i,r){const s=this.halfExtents;Wt[0].set(s.x,s.y,s.z),Wt[1].set(-s.x,s.y,s.z),Wt[2].set(-s.x,-s.y,s.z),Wt[3].set(-s.x,-s.y,-s.z),Wt[4].set(s.x,-s.y,-s.z),Wt[5].set(s.x,s.y,-s.z),Wt[6].set(-s.x,s.y,-s.z),Wt[7].set(s.x,-s.y,s.z);const n=Wt[0];t.vmult(n,n),e.vadd(n,n),r.copy(n),i.copy(n);for(let a=1;a<8;a++){const l=Wt[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,u=l.y,p=l.z;c>r.x&&(r.x=c),u>r.y&&(r.y=u),p>r.z&&(r.z=p),c<i.x&&(i.x=c),u<i.y&&(i.y=u),p<i.z&&(i.z=p)}}}const yi=new w,Wt=[new w,new w,new w,new w,new w,new w,new w,new w],Cn={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ln={AWAKE:0,SLEEPY:1,SLEEPING:2};class se extends wo{constructor(e){e===void 0&&(e={}),super(),this.id=se.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?se.STATIC:se.DYNAMIC,typeof e.type==typeof se.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=se.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Je,this.initQuaternion=new Je,this.previousQuaternion=new Je,this.interpolatedQuaternion=new Je,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Bt,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Bt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Et,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=se.AWAKE,this.wakeUpAfterNarrowphase=!1,e===se.SLEEPING&&this.dispatchEvent(se.wakeupEvent)}sleep(){this.sleepState=se.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;t===se.AWAKE&&i<r?(this.sleepState=se.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(se.sleepyEvent)):t===se.SLEEPY&&i>r?this.wakeUp():t===se.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(se.sleepEvent))}}updateSolveMassProperties(){this.sleepState===se.SLEEPING||this.type===se.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new w),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new w),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}addShape(e,t,i){const r=new w,s=new Je;return t&&r.copy(t),i&&s.copy(i),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let r=0;for(let s=0;s!==i;s++){const n=e[s];n.updateBoundingSphereRadius();const a=t[s].length(),l=n.boundingSphereRadius;a+l>r&&(r=a+l)}this.boundingRadius=r}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,r=e.length,s=Wp,n=Vp,a=this.quaternion,l=this.aabb,c=jp;for(let u=0;u!==r;u++){const p=e[u];a.vmult(t[u],s),s.vadd(this.position,s),a.mult(i[u],n),p.calculateWorldAABB(s,n,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=qp,r=Xp;i.setRotationFromQuaternion(this.quaternion),i.transpose(r),i.scale(t,i),i.mmult(r,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new w),this.type!==se.DYNAMIC)return;this.sleepState===se.SLEEPING&&this.wakeUp();const i=Yp;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new w),this.type!==se.DYNAMIC)return;const i=$p,r=Zp;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyForce(i,r)}applyTorque(e){this.type===se.DYNAMIC&&(this.sleepState===se.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new w),this.type!==se.DYNAMIC)return;this.sleepState===se.SLEEPING&&this.wakeUp();const i=t,r=Jp;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const s=Kp;i.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new w),this.type!==se.DYNAMIC)return;const i=Qp,r=em;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyImpulse(i,r)}updateMassProperties(){const e=tm;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),An.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new w;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===se.DYNAMIC||this.type===se.KINEMATIC)||this.sleepState===se.SLEEPING)return;const r=this.velocity,s=this.angularVelocity,n=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,p=this.invInertiaWorld,h=this.linearFactor,f=u*e;r.x+=a.x*f*h.x,r.y+=a.y*f*h.y,r.z+=a.z*f*h.z;const g=p.elements,m=this.angularFactor,d=l.x*m.x,v=l.y*m.y,x=l.z*m.z;s.x+=e*(g[0]*d+g[1]*v+g[2]*x),s.y+=e*(g[3]*d+g[4]*v+g[5]*x),s.z+=e*(g[6]*d+g[7]*v+g[8]*x),n.x+=r.x*e,n.y+=r.y*e,n.z+=r.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}se.idCounter=0;se.COLLIDE_EVENT_NAME="collide";se.DYNAMIC=Cn.DYNAMIC;se.STATIC=Cn.STATIC;se.KINEMATIC=Cn.KINEMATIC;se.AWAKE=Ln.AWAKE;se.SLEEPY=Ln.SLEEPY;se.SLEEPING=Ln.SLEEPING;se.wakeupEvent={type:"wakeup"};se.sleepyEvent={type:"sleepy"};se.sleepEvent={type:"sleep"};const Wp=new w,Vp=new Je,jp=new Et,qp=new Bt,Xp=new Bt;new Bt;const Yp=new w,$p=new w,Zp=new w,Jp=new w,Kp=new w,Qp=new w,em=new w,tm=new w;class im{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&se.STATIC)!==0||e.sleepState===se.SLEEPING)&&((t.type&se.STATIC)!==0||t.sleepState===se.SLEEPING))}intersectionTest(e,t,i,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,r):this.doBoundingSphereBroadphase(e,t,i,r)}doBoundingSphereBroadphase(e,t,i,r){const s=rm;t.position.vsub(e.position,s);const n=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<n&&(i.push(e),r.push(t))}doBoundingBoxBroadphase(e,t,i,r){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),r.push(t))}makePairsUnique(e,t){const i=sm,r=nm,s=am,n=e.length;for(let a=0;a!==n;a++)r[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==n;a++){const l=r[a].id,c=s[a].id,u=l<c?`${l},${c}`:`${c},${l}`;i[u]=a,i.keys.push(u)}for(let a=0;a!==i.keys.length;a++){const l=i.keys.pop(),c=i[l];e.push(r[c]),t.push(s[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new w;e.position.vsub(t.position,i);const r=e.shapes[0],s=t.shapes[0];return Math.pow(r.boundingSphereRadius+s.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const rm=new w;new w;new Je;new w;const sm={keys:[]},nm=[],am=[];new w;new w;new w;class Mo extends im{constructor(){super()}collisionPairs(e,t,i){const r=e.bodies,s=r.length;let n,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)n=r[l],a=r[c],this.needBroadphaseCollision(n,a)&&this.intersectionTest(n,a,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let r=0;r<e.bodies.length;r++){const s=e.bodies[r];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&i.push(s)}return i}}class gs{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,r,s,n,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(r),this.shape=s,this.body=n,this.distance=a}}let So,Eo,To,Ao,Co,Lo,Ro;const Rn={CLOSEST:1,ANY:2,ALL:4};So=he.types.SPHERE;Eo=he.types.PLANE;To=he.types.BOX;Ao=he.types.CYLINDER;Co=he.types.CONVEXPOLYHEDRON;Lo=he.types.HEIGHTFIELD;Ro=he.types.TRIMESH;class Ze{get[So](){return this._intersectSphere}get[Eo](){return this._intersectPlane}get[To](){return this._intersectBox}get[Ao](){return this._intersectConvex}get[Co](){return this._intersectConvex}get[Lo](){return this._intersectHeightfield}get[Ro](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new w),t===void 0&&(t=new w),this.from=e.clone(),this.to=t.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ze.ANY,this.result=new gs,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||Ze.ANY,this.result=t.result||new gs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Aa),sn.length=0,e.broadphase.aabbQuery(e,Aa,sn),this.intersectBodies(sn),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=om,s=lm;for(let n=0,a=e.shapes.length;n<a;n++){const l=e.shapes[n];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[n],s),e.quaternion.vmult(e.shapeOffsets[n],r),r.vadd(e.position,r),this.intersectShape(l,s,r,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,r=e.length;!this.result.shouldStop&&i<r;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,r){const s=this.from;if(wm(s,this.direction,i)>e.boundingSphereRadius)return;const n=this[e.type];n&&n.call(this,e,t,i,r,e)}_intersectBox(e,t,i,r,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,r,s)}_intersectPlane(e,t,i,r,s){const n=this.from,a=this.to,l=this.direction,c=new w(0,0,1);t.vmult(c,c);const u=new w;n.vsub(i,u);const p=u.dot(c);a.vsub(i,u);const h=u.dot(c);if(p*h>0||n.distanceTo(a)<p)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new w,m=new w,d=new w;n.vsub(i,g);const v=-c.dot(g)/f;l.scale(v,m),n.vadd(m,d),this.reportIntersection(c,d,s,r,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,r=this.to,s=this.from;t.x=Math.min(r.x,s.x),t.y=Math.min(r.y,s.y),t.z=Math.min(r.z,s.z),i.x=Math.max(r.x,s.x),i.y=Math.max(r.y,s.y),i.z=Math.max(r.z,s.z)}_intersectHeightfield(e,t,i,r,s){e.data,e.elementSize;const n=cm;n.from.copy(this.from),n.to.copy(this.to),Ne.pointToLocalFrame(i,t,n.from,n.from),Ne.pointToLocalFrame(i,t,n.to,n.to),n.updateDirection();const a=um;let l,c,u,p;l=c=0,u=p=e.data.length-1;const h=new Et;n.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),p=Math.min(p,a[1]+1);for(let f=l;f<u;f++)for(let g=c;g<p;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,h),!!h.overlapsRay(n)){if(e.getConvexTrianglePillar(f,g,!1),Ne.pointToWorldFrame(i,t,e.pillarOffset,ss),this._intersectConvex(e.pillarConvex,t,ss,r,s,Ca),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),Ne.pointToWorldFrame(i,t,e.pillarOffset,ss),this._intersectConvex(e.pillarConvex,t,ss,r,s,Ca)}}}_intersectSphere(e,t,i,r,s){const n=this.from,a=this.to,l=e.radius,c=(a.x-n.x)**2+(a.y-n.y)**2+(a.z-n.z)**2,u=2*((a.x-n.x)*(n.x-i.x)+(a.y-n.y)*(n.y-i.y)+(a.z-n.z)*(n.z-i.z)),p=(n.x-i.x)**2+(n.y-i.y)**2+(n.z-i.z)**2-l**2,h=u**2-4*c*p,f=hm,g=dm;if(!(h<0))if(h===0)n.lerp(a,h,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,s,r,-1);else{const m=(-u-Math.sqrt(h))/(2*c),d=(-u+Math.sqrt(h))/(2*c);if(m>=0&&m<=1&&(n.lerp(a,m,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,s,r,-1)),this.result.shouldStop)return;d>=0&&d<=1&&(n.lerp(a,d,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,s,r,-1))}}_intersectConvex(e,t,i,r,s,n){const a=pm,l=La,c=n&&n.faceList||null,u=e.faces,p=e.vertices,h=e.faceNormals,f=this.direction,g=this.from,m=this.to,d=g.distanceTo(m),v=c?c.length:u.length,x=this.result;for(let b=0;!x.shouldStop&&b<v;b++){const _=c?c[b]:b,M=u[_],S=h[_],C=t,y=i;l.copy(p[M[0]]),C.vmult(l,l),l.vadd(y,l),l.vsub(g,l),C.vmult(S,a);const E=f.dot(a);if(Math.abs(E)<this.precision)continue;const D=a.dot(l)/E;if(!(D<0)){f.scale(D,vt),vt.vadd(g,vt),Ot.copy(p[M[0]]),C.vmult(Ot,Ot),y.vadd(Ot,Ot);for(let P=1;!x.shouldStop&&P<M.length-1;P++){Vt.copy(p[M[P]]),jt.copy(p[M[P+1]]),C.vmult(Vt,Vt),C.vmult(jt,jt),y.vadd(Vt,Vt),y.vadd(jt,jt);const O=vt.distanceTo(g);!(Ze.pointInTriangle(vt,Ot,Vt,jt)||Ze.pointInTriangle(vt,Vt,Ot,jt))||O>d||this.reportIntersection(a,vt,s,r,_)}}}}_intersectTrimesh(e,t,i,r,s,n){const a=mm,l=ym,c=bm,u=La,p=fm,h=gm,f=vm,g=_m,m=xm,d=e.indices;e.vertices;const v=this.from,x=this.to,b=this.direction;c.position.copy(i),c.quaternion.copy(t),Ne.vectorToLocalFrame(i,t,b,p),Ne.pointToLocalFrame(i,t,v,h),Ne.pointToLocalFrame(i,t,x,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,p),p.normalize();const _=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let M=0,S=l.length;!this.result.shouldStop&&M!==S;M++){const C=l[M];e.getNormal(C,a),e.getVertex(d[C*3],Ot),Ot.vsub(h,u);const y=p.dot(a),E=a.dot(u)/y;if(E<0)continue;p.scale(E,vt),vt.vadd(h,vt),e.getVertex(d[C*3+1],Vt),e.getVertex(d[C*3+2],jt);const D=vt.distanceSquared(h);!(Ze.pointInTriangle(vt,Vt,Ot,jt)||Ze.pointInTriangle(vt,Ot,Vt,jt))||D>_||(Ne.vectorToWorldFrame(t,a,m),Ne.pointToWorldFrame(i,t,vt,g),this.reportIntersection(m,g,s,r,C))}l.length=0}reportIntersection(e,t,i,r,s){const n=this.from,a=this.to,l=n.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ze.ALL:this.hasHit=!0,c.set(n,a,e,t,i,r,l),c.hasHit=!0,this.callback(c);break;case Ze.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(n,a,e,t,i,r,l));break;case Ze.ANY:this.hasHit=!0,c.hasHit=!0,c.set(n,a,e,t,i,r,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,r){r.vsub(t,Pi),i.vsub(t,br),e.vsub(t,nn);const s=Pi.dot(Pi),n=Pi.dot(br),a=Pi.dot(nn),l=br.dot(br),c=br.dot(nn);let u,p;return(u=l*a-n*c)>=0&&(p=s*c-n*a)>=0&&u+p<s*l-n*n}}Ze.CLOSEST=Rn.CLOSEST;Ze.ANY=Rn.ANY;Ze.ALL=Rn.ALL;const Aa=new Et,sn=[],br=new w,nn=new w,om=new w,lm=new Je,vt=new w,Ot=new w,Vt=new w,jt=new w;new w;new gs;const Ca={faceList:[0]},ss=new w,cm=new Ze,um=[],hm=new w,dm=new w,pm=new w;new w;new w;const La=new w,mm=new w,fm=new w,gm=new w,vm=new w,xm=new w,_m=new w;new Et;const ym=[],bm=new Ne,Pi=new w,ns=new w;function wm(o,e,t){t.vsub(o,Pi);const i=Pi.dot(e);return e.scale(i,ns),ns.vadd(o,ns),t.distanceTo(ns)}class Mm{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class Ra{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class zr{constructor(e,t,i,r){i===void 0&&(i=-1e6),r===void 0&&(r=1e6),this.id=zr.idCounter++,this.minForce=i,this.maxForce=r,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ra,this.jacobianElementB=new Ra,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const r=t,s=e,n=i;this.a=4/(n*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(n*n*s*(1+4*r))}computeB(e,t,i){const r=this.computeGW(),s=this.computeGq(),n=this.computeGiMf();return-s*e-r*t-n*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.position,n=r.position;return e.spatial.dot(s)+t.spatial.dot(n)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.velocity,n=r.velocity,a=i.angularVelocity,l=r.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(n,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.vlambda,n=r.vlambda,a=i.wlambda,l=r.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(n,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.force,n=i.torque,a=r.force,l=r.torque,c=i.invMassSolve,u=r.invMassSolve;return s.scale(c,Da),a.scale(u,Pa),i.invInertiaWorldSolve.vmult(n,Ia),r.invInertiaWorldSolve.vmult(l,Fa),e.multiplyVectors(Da,Ia)+t.multiplyVectors(Pa,Fa)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.invMassSolve,n=r.invMassSolve,a=i.invInertiaWorldSolve,l=r.invInertiaWorldSolve;let c=s+n;return a.vmult(e.rotational,as),c+=as.dot(e.rotational),l.vmult(t.rotational,as),c+=as.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,s=this.bj,n=Sm;r.vlambda.addScaledVector(r.invMassSolve*e,t.spatial,r.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,i.spatial,s.vlambda),r.invInertiaWorldSolve.vmult(t.rotational,n),r.wlambda.addScaledVector(e,n,r.wlambda),s.invInertiaWorldSolve.vmult(i.rotational,n),s.wlambda.addScaledVector(e,n,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}zr.idCounter=0;const Da=new w,Pa=new w,Ia=new w,Fa=new w,as=new w,Sm=new w;class Em extends zr{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){const t=this.a,i=this.b,r=this.bi,s=this.bj,n=this.ri,a=this.rj,l=Tm,c=Am,u=r.velocity,p=r.angularVelocity;r.force,r.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=Cm,m=this.jacobianElementA,d=this.jacobianElementB,v=this.ni;n.cross(v,l),a.cross(v,c),v.negate(m.spatial),l.negate(m.rotational),d.spatial.copy(v),d.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(r.position,g),g.vsub(n,g);const x=v.dot(g),b=this.restitution+1,_=b*h.dot(v)-b*u.dot(v)+f.dot(c)-p.dot(l),M=this.computeGiMf();return-x*t-_*i-e*M}getImpactVelocityAlongNormal(){const e=Lm,t=Rm,i=Dm,r=Pm,s=Im;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(r,t),e.vsub(t,s),this.ni.dot(s)}}const Tm=new w,Am=new w,Cm=new w,Lm=new w,Rm=new w,Dm=new w,Pm=new w,Im=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class za extends zr{constructor(e,t,i){super(e,t,-i,i),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,r=this.rj,s=Fm,n=zm,a=this.t;i.cross(a,s),r.cross(a,n);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(n);const u=this.computeGW(),p=this.computeGiMf();return-u*t-e*p}}const Fm=new w,zm=new w;class Ni{constructor(e,t,i){i=Mm.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ni.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}Ni.idCounter=0;class Oi{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Oi.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Oi.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Ze;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class km extends ki{constructor(e,t,i,r){if(e===void 0&&(e=1),t===void 0&&(t=1),i===void 0&&(i=1),r===void 0&&(r=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=r,n=[],a=[],l=[],c=[],u=[],p=Math.cos,h=Math.sin;n.push(new w(-t*h(0),-i*.5,t*p(0))),c.push(0),n.push(new w(-e*h(0),i*.5,e*p(0))),u.push(1);for(let g=0;g<s;g++){const m=2*Math.PI/s*(g+1),d=2*Math.PI/s*(g+.5);g<s-1?(n.push(new w(-t*h(m),-i*.5,t*p(m))),c.push(2*g+2),n.push(new w(-e*h(m),i*.5,e*p(m))),u.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&a.push(new w(-h(d),0,p(d)))}l.push(c),a.push(new w(0,1,0));const f=[];for(let g=0;g<u.length;g++)f.push(u[u.length-g-1]);l.push(f),super({vertices:n,faces:l,axes:a}),this.type=he.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=i,this.numSegments=r}}class wr extends he{constructor(){super({type:he.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new w),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,i,r){si.set(0,0,1),t.vmult(si,si);const s=Number.MAX_VALUE;i.set(-s,-s,-s),r.set(s,s,s),si.x===1?r.x=e.x:si.x===-1&&(i.x=e.x),si.y===1?r.y=e.y:si.y===-1&&(i.y=e.y),si.z===1?r.z=e.z:si.z===-1&&(i.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const si=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Et;new w;new Et;new w;new w;new w;new w;new w;new w;new w;new Et;new w;new Ne;new Et;class Nm{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class Om extends Nm{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const r=this.iterations,s=this.tolerance*this.tolerance,n=this.equations,a=n.length,l=t.bodies,c=l.length,u=e;let p,h,f,g,m,d;if(a!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();const v=Gm,x=Um,b=Bm;v.length=a,x.length=a,b.length=a;for(let _=0;_!==a;_++){const M=n[_];b[_]=0,x[_]=M.computeB(u),v[_]=1/M.computeC()}if(a!==0){for(let S=0;S!==c;S++){const C=l[S],y=C.vlambda,E=C.wlambda;y.set(0,0,0),E.set(0,0,0)}for(i=0;i!==r;i++){g=0;for(let S=0;S!==a;S++){const C=n[S];p=x[S],h=v[S],d=b[S],m=C.computeGWlambda(),f=h*(p-m-C.eps*d),d+f<C.minForce?f=C.minForce-d:d+f>C.maxForce&&(f=C.maxForce-d),b[S]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<s)break}for(let S=0;S!==c;S++){const C=l[S],y=C.velocity,E=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),y.vadd(C.vlambda,y),C.wlambda.vmul(C.angularFactor,C.wlambda),E.vadd(C.wlambda,E)}let _=n.length;const M=1/u;for(;_--;)n[_].multiplier=b[_]*M}return i}}const Bm=[],Gm=[],Um=[];class Hm{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Wm extends Hm{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const Ve={sphereSphere:he.types.SPHERE,spherePlane:he.types.SPHERE|he.types.PLANE,boxBox:he.types.BOX|he.types.BOX,sphereBox:he.types.SPHERE|he.types.BOX,planeBox:he.types.PLANE|he.types.BOX,convexConvex:he.types.CONVEXPOLYHEDRON,sphereConvex:he.types.SPHERE|he.types.CONVEXPOLYHEDRON,planeConvex:he.types.PLANE|he.types.CONVEXPOLYHEDRON,boxConvex:he.types.BOX|he.types.CONVEXPOLYHEDRON,sphereHeightfield:he.types.SPHERE|he.types.HEIGHTFIELD,boxHeightfield:he.types.BOX|he.types.HEIGHTFIELD,convexHeightfield:he.types.CONVEXPOLYHEDRON|he.types.HEIGHTFIELD,sphereParticle:he.types.PARTICLE|he.types.SPHERE,planeParticle:he.types.PLANE|he.types.PARTICLE,boxParticle:he.types.BOX|he.types.PARTICLE,convexParticle:he.types.PARTICLE|he.types.CONVEXPOLYHEDRON,cylinderCylinder:he.types.CYLINDER,sphereCylinder:he.types.SPHERE|he.types.CYLINDER,planeCylinder:he.types.PLANE|he.types.CYLINDER,boxCylinder:he.types.BOX|he.types.CYLINDER,convexCylinder:he.types.CONVEXPOLYHEDRON|he.types.CYLINDER,heightfieldCylinder:he.types.HEIGHTFIELD|he.types.CYLINDER,particleCylinder:he.types.PARTICLE|he.types.CYLINDER,sphereTrimesh:he.types.SPHERE|he.types.TRIMESH,planeTrimesh:he.types.PLANE|he.types.TRIMESH};class Vm{get[Ve.sphereSphere](){return this.sphereSphere}get[Ve.spherePlane](){return this.spherePlane}get[Ve.boxBox](){return this.boxBox}get[Ve.sphereBox](){return this.sphereBox}get[Ve.planeBox](){return this.planeBox}get[Ve.convexConvex](){return this.convexConvex}get[Ve.sphereConvex](){return this.sphereConvex}get[Ve.planeConvex](){return this.planeConvex}get[Ve.boxConvex](){return this.boxConvex}get[Ve.sphereHeightfield](){return this.sphereHeightfield}get[Ve.boxHeightfield](){return this.boxHeightfield}get[Ve.convexHeightfield](){return this.convexHeightfield}get[Ve.sphereParticle](){return this.sphereParticle}get[Ve.planeParticle](){return this.planeParticle}get[Ve.boxParticle](){return this.boxParticle}get[Ve.convexParticle](){return this.convexParticle}get[Ve.cylinderCylinder](){return this.convexConvex}get[Ve.sphereCylinder](){return this.sphereConvex}get[Ve.planeCylinder](){return this.planeConvex}get[Ve.boxCylinder](){return this.boxConvex}get[Ve.convexCylinder](){return this.convexConvex}get[Ve.heightfieldCylinder](){return this.heightfieldCylinder}get[Ve.particleCylinder](){return this.particleCylinder}get[Ve.sphereTrimesh](){return this.sphereTrimesh}get[Ve.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Wm,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,r,s,n){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Em(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&r.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,u=r.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=s||i,a.sj=n||r,a}createFrictionEquationsFromContact(e,t){const i=e.bi,r=e.bj,s=e.si,n=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||i.material,p=n.material||r.material;if(u&&p&&u.friction>=0&&p.friction>=0&&(c=u.friction*p.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=i.invMass+r.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,m=g.length?g.pop():new za(i,r,h*f),d=g.length?g.pop():new za(i,r,h*f);return m.bi=d.bi=i,m.bj=d.bj=r,m.minForce=d.minForce=-h*f,m.maxForce=d.maxForce=h*f,m.ri.copy(e.ri),m.rj.copy(e.rj),d.ri.copy(e.ri),d.rj.copy(e.rj),e.ni.tangents(m.t,d.t),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),d.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.enabled=d.enabled=e.enabled,t.push(m,d),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Ai.setZero(),or.setZero(),lr.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(Ai.vadd(t.ni,Ai),or.vadd(t.ri,or),lr.vadd(t.rj,lr)):(Ai.vsub(t.ni,Ai),or.vadd(t.rj,or),lr.vadd(t.ri,lr));const n=1/e;or.scale(n,i.ri),lr.scale(n,i.rj),r.ri.copy(i.ri),r.rj.copy(i.rj),Ai.normalize(),Ai.tangents(i.t,r.t)}getContacts(e,t,i,r,s,n,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=r,this.frictionResult=n;const l=Xm,c=Ym,u=jm,p=qm;for(let h=0,f=e.length;h!==f;h++){const g=e[h],m=t[h];let d=null;g.material&&m.material&&(d=i.getContactMaterial(g.material,m.material)||null);const v=g.type&se.KINEMATIC&&m.type&se.STATIC||g.type&se.STATIC&&m.type&se.KINEMATIC||g.type&se.KINEMATIC&&m.type&se.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],u),u.vadd(g.position,u);const b=g.shapes[x];for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],c),m.quaternion.vmult(m.shapeOffsets[_],p),p.vadd(m.position,p);const M=m.shapes[_];if(!(b.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&b.collisionFilterGroup)||u.distanceTo(p)>b.boundingSphereRadius+M.boundingSphereRadius)continue;let S=null;b.material&&M.material&&(S=i.getContactMaterial(b.material,M.material)||null),this.currentContactMaterial=S||d||i.defaultContactMaterial;const C=b.type|M.type,y=this[C];if(y){let E=!1;b.type<M.type?E=y.call(this,b,M,u,p,l,c,g,m,b,M,v):E=y.call(this,M,b,p,u,c,l,m,g,b,M,v),E&&v&&(i.shapeOverlapKeeper.set(b.id,M.id),i.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(e,t,i,r,s,n,a,l,c,u,p){if(p)return i.distanceSquared(r)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,l,e,t,c,u);r.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(r,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,i,r,s,n,a,l,c,u,p){const h=this.createContactEquation(a,l,e,t,c,u);if(h.ni.set(0,0,1),n.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),i.vsub(r,os),h.ni.scale(h.ni.dot(os),ka),os.vsub(ka,h.rj),-os.dot(h.ni)<=e.radius){if(p)return!0;const f=h.ri,g=h.rj;f.vadd(i,f),f.vsub(a.position,f),g.vadd(r,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,i,r,s,n,a,l,c,u,p){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,r,s,n,a,l,e,t,p)}sphereBox(e,t,i,r,s,n,a,l,c,u,p){const h=this.v3pool,f=bf;i.vsub(r,ls),t.getSideNormals(f,n);const g=e.radius;let m=!1;const d=Mf,v=Sf,x=Ef;let b=null,_=0,M=0,S=0,C=null;for(let F=0,q=f.length;F!==q&&m===!1;F++){const X=xf;X.copy(f[F]);const B=X.length();X.normalize();const j=ls.dot(X);if(j<B+g&&j>0){const ee=_f,W=yf;ee.copy(f[(F+1)%3]),W.copy(f[(F+2)%3]);const Q=ee.length(),ue=W.length();ee.normalize(),W.normalize();const Ce=ls.dot(ee),N=ls.dot(W);if(Ce<Q&&Ce>-Q&&N<ue&&N>-ue){const ae=Math.abs(j-B-g);if((C===null||ae<C)&&(C=ae,M=Ce,S=N,b=B,d.copy(X),v.copy(ee),x.copy(W),_++,p))return!0}}}if(_){m=!0;const F=this.createContactEquation(a,l,e,t,c,u);d.scale(-g,F.ri),F.ni.copy(d),F.ni.negate(F.ni),d.scale(b,d),v.scale(M,v),d.vadd(v,d),x.scale(S,x),d.vadd(x,F.rj),F.ri.vadd(i,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(r,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let y=h.get();const E=wf;for(let F=0;F!==2&&!m;F++)for(let q=0;q!==2&&!m;q++)for(let X=0;X!==2&&!m;X++)if(y.set(0,0,0),F?y.vadd(f[0],y):y.vsub(f[0],y),q?y.vadd(f[1],y):y.vsub(f[1],y),X?y.vadd(f[2],y):y.vsub(f[2],y),r.vadd(y,E),E.vsub(i,E),E.lengthSquared()<g*g){if(p)return!0;m=!0;const B=this.createContactEquation(a,l,e,t,c,u);B.ri.copy(E),B.ri.normalize(),B.ni.copy(B.ri),B.ri.scale(g,B.ri),B.rj.copy(y),B.ri.vadd(i,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(r,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}h.release(y),y=null;const D=h.get(),P=h.get(),O=h.get(),z=h.get(),R=h.get(),k=f.length;for(let F=0;F!==k&&!m;F++)for(let q=0;q!==k&&!m;q++)if(F%3!==q%3){f[q].cross(f[F],D),D.normalize(),f[F].vadd(f[q],P),O.copy(i),O.vsub(P,O),O.vsub(r,O);const X=O.dot(D);D.scale(X,z);let B=0;for(;B===F%3||B===q%3;)B++;R.copy(i),R.vsub(z,R),R.vsub(P,R),R.vsub(r,R);const j=Math.abs(X),ee=R.length();if(j<f[B].length()&&ee<g){if(p)return!0;m=!0;const W=this.createContactEquation(a,l,e,t,c,u);P.vadd(z,W.rj),W.rj.copy(W.rj),R.negate(W.ni),W.ni.normalize(),W.ri.copy(W.rj),W.ri.vadd(r,W.ri),W.ri.vsub(i,W.ri),W.ri.normalize(),W.ri.scale(g,W.ri),W.ri.vadd(i,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(r,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}h.release(D,P,O,z,R)}planeBox(e,t,i,r,s,n,a,l,c,u,p){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,r,s,n,a,l,e,t,p)}convexConvex(e,t,i,r,s,n,a,l,c,u,p,h,f){const g=Gf;if(!(i.distanceTo(r)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,s,r,n,g,h,f)){const m=[],d=Uf;e.clipAgainstHull(i,s,t,r,n,g,-100,100,m);let v=0;for(let x=0;x!==m.length;x++){if(p)return!0;const b=this.createContactEquation(a,l,e,t,c,u),_=b.ri,M=b.rj;g.negate(b.ni),m[x].normal.negate(d),d.scale(m[x].depth,d),m[x].point.vadd(d,_),M.copy(m[x].point),_.vsub(i,_),M.vsub(r,M),_.vadd(i,_),_.vsub(a.position,_),M.vadd(r,M),M.vsub(l.position,M),this.result.push(b),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(e,t,i,r,s,n,a,l,c,u,p){const h=this.v3pool;i.vsub(r,Tf);const f=t.faceNormals,g=t.faces,m=t.vertices,d=e.radius;let v=!1;for(let x=0;x!==m.length;x++){const b=m[x],_=Rf;n.vmult(b,_),r.vadd(_,_);const M=Lf;if(_.vsub(i,M),M.lengthSquared()<d*d){if(p)return!0;v=!0;const S=this.createContactEquation(a,l,e,t,c,u);S.ri.copy(M),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(d,S.ri),_.vsub(r,S.rj),S.ri.vadd(i,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(r,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let x=0,b=g.length;x!==b&&v===!1;x++){const _=f[x],M=g[x],S=Df;n.vmult(_,S);const C=Pf;n.vmult(m[M[0]],C),C.vadd(r,C);const y=If;S.scale(-d,y),i.vadd(y,y);const E=Ff;y.vsub(C,E);const D=E.dot(S),P=zf;if(i.vsub(C,P),D<0&&P.dot(S)>0){const O=[];for(let z=0,R=M.length;z!==R;z++){const k=h.get();n.vmult(m[M[z]],k),r.vadd(k,k),O.push(k)}if(vf(O,S,i)){if(p)return!0;v=!0;const z=this.createContactEquation(a,l,e,t,c,u);S.scale(-d,z.ri),S.negate(z.ni);const R=h.get();S.scale(-D,R);const k=h.get();S.scale(-d,k),i.vsub(r,z.rj),z.rj.vadd(k,z.rj),z.rj.vadd(R,z.rj),z.rj.vadd(r,z.rj),z.rj.vsub(l.position,z.rj),z.ri.vadd(i,z.ri),z.ri.vsub(a.position,z.ri),h.release(R),h.release(k),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let F=0,q=O.length;F!==q;F++)h.release(O[F]);return}else for(let z=0;z!==M.length;z++){const R=h.get(),k=h.get();n.vmult(m[M[(z+1)%M.length]],R),n.vmult(m[M[(z+2)%M.length]],k),r.vadd(R,R),r.vadd(k,k);const F=Af;k.vsub(R,F);const q=Cf;F.unit(q);const X=h.get(),B=h.get();i.vsub(R,B);const j=B.dot(q);q.scale(j,X),X.vadd(R,X);const ee=h.get();if(X.vsub(i,ee),j>0&&j*j<F.lengthSquared()&&ee.lengthSquared()<d*d){if(p)return!0;const W=this.createContactEquation(a,l,e,t,c,u);X.vsub(r,W.rj),X.vsub(i,W.ni),W.ni.normalize(),W.ni.scale(d,W.ri),W.rj.vadd(r,W.rj),W.rj.vsub(l.position,W.rj),W.ri.vadd(i,W.ri),W.ri.vsub(a.position,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult);for(let Q=0,ue=O.length;Q!==ue;Q++)h.release(O[Q]);h.release(R),h.release(k),h.release(X),h.release(ee),h.release(B);return}h.release(R),h.release(k),h.release(X),h.release(ee),h.release(B)}for(let z=0,R=O.length;z!==R;z++)h.release(O[z])}}}planeConvex(e,t,i,r,s,n,a,l,c,u,p){const h=kf,f=Nf;f.set(0,0,1),s.vmult(f,f);let g=0;const m=Of;for(let d=0;d!==t.vertices.length;d++)if(h.copy(t.vertices[d]),n.vmult(h,h),r.vadd(h,h),h.vsub(i,m),f.dot(m)<=0){if(p)return!0;const v=this.createContactEquation(a,l,e,t,c,u),x=Bf;f.scale(f.dot(m),x),h.vsub(x,x),x.vsub(i,v.ri),v.ni.copy(f),h.vsub(r,v.rj),v.ri.vadd(i,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,r,s,n,a,l,c,u,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,r,s,n,a,l,e,t,p)}sphereHeightfield(e,t,i,r,s,n,a,l,c,u,p){const h=t.data,f=e.radius,g=t.elementSize,m=Qf,d=Kf;Ne.pointToLocalFrame(r,n,i,d);let v=Math.floor((d.x-f)/g)-1,x=Math.ceil((d.x+f)/g)+1,b=Math.floor((d.y-f)/g)-1,_=Math.ceil((d.y+f)/g)+1;if(x<0||_<0||v>h.length||b>h[0].length)return;v<0&&(v=0),x<0&&(x=0),b<0&&(b=0),_<0&&(_=0),v>=h.length&&(v=h.length-1),x>=h.length&&(x=h.length-1),_>=h[0].length&&(_=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);const M=[];t.getRectMinMax(v,b,x,_,M);const S=M[0],C=M[1];if(d.z-f>C||d.z+f<S)return;const y=this.result;for(let E=v;E<x;E++)for(let D=b;D<_;D++){const P=y.length;let O=!1;if(t.getConvexTrianglePillar(E,D,!1),Ne.pointToWorldFrame(r,n,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,i,m,s,n,a,l,e,t,p)),p&&O||(t.getConvexTrianglePillar(E,D,!0),Ne.pointToWorldFrame(r,n,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,i,m,s,n,a,l,e,t,p)),p&&O))return!0;if(y.length-P>2)return}}boxHeightfield(e,t,i,r,s,n,a,l,c,u,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,r,s,n,a,l,e,t,p)}convexHeightfield(e,t,i,r,s,n,a,l,c,u,p){const h=t.data,f=t.elementSize,g=e.boundingSphereRadius,m=Zf,d=Jf,v=$f;Ne.pointToLocalFrame(r,n,i,v);let x=Math.floor((v.x-g)/f)-1,b=Math.ceil((v.x+g)/f)+1,_=Math.floor((v.y-g)/f)-1,M=Math.ceil((v.y+g)/f)+1;if(b<0||M<0||x>h.length||_>h[0].length)return;x<0&&(x=0),b<0&&(b=0),_<0&&(_=0),M<0&&(M=0),x>=h.length&&(x=h.length-1),b>=h.length&&(b=h.length-1),M>=h[0].length&&(M=h[0].length-1),_>=h[0].length&&(_=h[0].length-1);const S=[];t.getRectMinMax(x,_,b,M,S);const C=S[0],y=S[1];if(!(v.z-g>y||v.z+g<C))for(let E=x;E<b;E++)for(let D=_;D<M;D++){let P=!1;if(t.getConvexTrianglePillar(E,D,!1),Ne.pointToWorldFrame(r,n,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,t.pillarConvex,i,m,s,n,a,l,null,null,p,d,null)),p&&P||(t.getConvexTrianglePillar(E,D,!0),Ne.pointToWorldFrame(r,n,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,t.pillarConvex,i,m,s,n,a,l,null,null,p,d,null)),p&&P))return!0}}sphereParticle(e,t,i,r,s,n,a,l,c,u,p){const h=jf;if(h.set(0,0,1),r.vsub(i,h),h.lengthSquared()<=e.radius*e.radius){if(p)return!0;const f=this.createContactEquation(l,a,t,e,c,u);h.normalize(),f.rj.copy(h),f.rj.scale(e.radius,f.rj),f.ni.copy(h),f.ni.negate(f.ni),f.ri.set(0,0,0),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}planeParticle(e,t,i,r,s,n,a,l,c,u,p){const h=Hf;h.set(0,0,1),a.quaternion.vmult(h,h);const f=Wf;if(r.vsub(a.position,f),h.dot(f)<=0){if(p)return!0;const g=this.createContactEquation(l,a,t,e,c,u);g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0);const m=Vf;h.scale(h.dot(r),m),r.vsub(m,m),g.rj.copy(m),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,i,r,s,n,a,l,c,u,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,r,s,n,a,l,e,t,p)}convexParticle(e,t,i,r,s,n,a,l,c,u,p){let h=-1;const f=Xf,g=Yf;let m=null;const d=qf;if(d.copy(r),d.vsub(i,d),s.conjugate(Na),Na.vmult(d,d),e.pointIsInside(d)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let v=0,x=e.faces.length;v!==x;v++){const b=[e.worldVertices[e.faces[v][0]]],_=e.worldFaceNormals[v];r.vsub(b[0],Oa);const M=-_.dot(Oa);if(m===null||Math.abs(M)<Math.abs(m)){if(p)return!0;m=M,h=v,f.copy(_)}}if(h!==-1){const v=this.createContactEquation(l,a,t,e,c,u);f.scale(m,g),g.vadd(r,g),g.vsub(i,g),v.rj.copy(g),f.negate(v.ni),v.ri.set(0,0,0);const x=v.ri,b=v.rj;x.vadd(r,x),x.vsub(l.position,x),b.vadd(i,b),b.vsub(a.position,b),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,r,s,n,a,l,c,u,p){return this.convexHeightfield(t,e,r,i,n,s,l,a,c,u,p)}particleCylinder(e,t,i,r,s,n,a,l,c,u,p){return this.convexParticle(t,e,r,i,n,s,l,a,c,u,p)}sphereTrimesh(e,t,i,r,s,n,a,l,c,u,p){const h=rf,f=sf,g=nf,m=af,d=of,v=lf,x=df,b=tf,_=Qm,M=pf;Ne.pointToLocalFrame(r,n,i,d);const S=e.radius;x.lowerBound.set(d.x-S,d.y-S,d.z-S),x.upperBound.set(d.x+S,d.y+S,d.z+S),t.getTrianglesInAABB(x,M);const C=ef,y=e.radius*e.radius;for(let z=0;z<M.length;z++)for(let R=0;R<3;R++)if(t.getVertex(t.indices[M[z]*3+R],C),C.vsub(d,_),_.lengthSquared()<=y){if(b.copy(C),Ne.pointToWorldFrame(r,n,b,C),C.vsub(i,_),p)return!0;let k=this.createContactEquation(a,l,e,t,c,u);k.ni.copy(_),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(e.radius,k.ri),k.ri.vadd(i,k.ri),k.ri.vsub(a.position,k.ri),k.rj.copy(C),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let z=0;z<M.length;z++)for(let R=0;R<3;R++){t.getVertex(t.indices[M[z]*3+R],h),t.getVertex(t.indices[M[z]*3+(R+1)%3],f),f.vsub(h,g),d.vsub(f,v);const k=v.dot(g);d.vsub(h,v);let F=v.dot(g);if(F>0&&k<0&&(d.vsub(h,v),m.copy(g),m.normalize(),F=v.dot(m),m.scale(F,v),v.vadd(h,v),v.distanceTo(d)<e.radius)){if(p)return!0;const q=this.createContactEquation(a,l,e,t,c,u);v.vsub(d,q.ni),q.ni.normalize(),q.ni.scale(e.radius,q.ri),q.ri.vadd(i,q.ri),q.ri.vsub(a.position,q.ri),Ne.pointToWorldFrame(r,n,v,v),v.vsub(l.position,q.rj),Ne.vectorToWorldFrame(n,q.ni,q.ni),Ne.vectorToWorldFrame(n,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const E=cf,D=uf,P=hf,O=Km;for(let z=0,R=M.length;z!==R;z++){t.getTriangleVertices(M[z],E,D,P),t.getNormal(M[z],O),d.vsub(E,v);let k=v.dot(O);if(O.scale(k,v),d.vsub(v,v),k=v.distanceTo(d),Ze.pointInTriangle(v,E,D,P)&&k<e.radius){if(p)return!0;let F=this.createContactEquation(a,l,e,t,c,u);v.vsub(d,F.ni),F.ni.normalize(),F.ni.scale(e.radius,F.ri),F.ri.vadd(i,F.ri),F.ri.vsub(a.position,F.ri),Ne.pointToWorldFrame(r,n,v,v),v.vsub(l.position,F.rj),Ne.vectorToWorldFrame(n,F.ni,F.ni),Ne.vectorToWorldFrame(n,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}M.length=0}planeTrimesh(e,t,i,r,s,n,a,l,c,u,p){const h=new w,f=$m;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const m=new w;m.copy(h),Ne.pointToWorldFrame(r,n,m,h);const d=Zm;if(h.vsub(i,d),f.dot(d)<=0){if(p)return!0;const v=this.createContactEquation(a,l,e,t,c,u);v.ni.copy(f);const x=Jm;f.scale(d.dot(f),x),h.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Ai=new w,or=new w,lr=new w,jm=new w,qm=new w,Xm=new Je,Ym=new Je,$m=new w,Zm=new w,Jm=new w,Km=new w,Qm=new w;new w;const ef=new w,tf=new w,rf=new w,sf=new w,nf=new w,af=new w,of=new w,lf=new w,cf=new w,uf=new w,hf=new w,df=new Et,pf=[],os=new w,ka=new w,mf=new w,ff=new w,gf=new w;function vf(o,e,t){let i=null;const r=o.length;for(let s=0;s!==r;s++){const n=o[s],a=mf;o[(s+1)%r].vsub(n,a);const l=ff;a.cross(e,l);const c=gf;t.vsub(n,c);const u=l.dot(c);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const ls=new w,xf=new w,_f=new w,yf=new w,bf=[new w,new w,new w,new w,new w,new w],wf=new w,Mf=new w,Sf=new w,Ef=new w,Tf=new w,Af=new w,Cf=new w,Lf=new w,Rf=new w,Df=new w,Pf=new w,If=new w,Ff=new w,zf=new w;new w;new w;const kf=new w,Nf=new w,Of=new w,Bf=new w,Gf=new w,Uf=new w,Hf=new w,Wf=new w,Vf=new w,jf=new w,Na=new Je,qf=new w;new w;const Xf=new w,Oa=new w,Yf=new w,$f=new w,Zf=new w,Jf=[0],Kf=new w,Qf=new w;class Ba{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),r=this.current;let s=0;for(;i>r[s];)s++;if(i!==r[s]){for(let n=r.length-1;n>=s;n--)r[n+1]=r[n];r[s]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,r=this.previous,s=i.length,n=r.length;let a=0;for(let l=0;l<s;l++){let c=!1;const u=i[l];for(;u>r[a];)a++;c=u===r[a],c||Ga(e,u)}a=0;for(let l=0;l<n;l++){let c=!1;const u=r[l];for(;u>i[a];)a++;c=i[a]===u,c||Ga(t,u)}}}function Ga(o,e){o.push((e&4294901760)>>16,e&65535)}const an=(o,e)=>o<e?`${o}-${e}`:`${e}-${o}`;class eg{constructor(){this.data={keys:[]}}get(e,t){const i=an(e,t);return this.data[i]}set(e,t,i){const r=an(e,t);this.get(e,t)||this.data.keys.push(r),this.data[r]=i}delete(e,t){const i=an(e,t),r=this.data.keys.indexOf(i);r!==-1&&this.data.keys.splice(r,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class tg extends wo{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Mo,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Om,this.constraints=[],this.narrowphase=new Vm(this),this.collisionMatrix=new Ea,this.collisionMatrixPrevious=new Ea,this.bodyOverlapKeeper=new Ba,this.shapeOverlapKeeper=new Ba,this.contactmaterials=[],this.contactMaterialTable=new eg,this.defaultMaterial=new Oi("default"),this.defaultContactMaterial=new Ni(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof gs?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,r){return i===void 0&&(i={}),i.mode=Ze.ALL,i.from=e,i.to=t,i.callback=r,on.intersectWorld(this,i)}raycastAny(e,t,i,r){return i===void 0&&(i={}),i.mode=Ze.ANY,i.from=e,i.to=t,i.result=r,on.intersectWorld(this,i)}raycastClosest(e,t,i,r){return i===void 0&&(i={}),i.mode=Ze.CLOSEST,i.from=e,i.to=t,i.result=r,on.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof se&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,r=i.indexOf(e);if(r!==-1){i.splice(r,1);for(let s=0;s!==i.length;s++)i[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const r=t[i].shapes;for(let s=0;s<r.length;s++){const n=r[s];if(n.id===e)return n}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=Qe.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const r=i-this.lastCallTime;this.step(e,r,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const r=Qe.now();let s=0;for(;this.accumulator>=e&&s<i&&(this.internalStep(e),this.accumulator-=e,s++,!(Qe.now()-r>e*1e3)););this.accumulator=this.accumulator%e;const n=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,n,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,n,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=ag,r=og,s=this.bodies.length,n=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,p=se.DYNAMIC;let h=-1/0;const f=this.constraints,g=ng;l.length();const m=l.x,d=l.y,v=l.z;let x=0;for(c&&(h=Qe.now()),x=0;x!==s;x++){const O=n[x];if(O.type===p){const z=O.force,R=O.mass;z.x+=R*m,z.y+=R*d,z.z+=R*v}}for(let O=0,z=this.subsystems.length;O!==z;O++)this.subsystems[O].update();c&&(h=Qe.now()),i.length=0,r.length=0,this.broadphase.collisionPairs(this,i,r),c&&(u.broadphase=Qe.now()-h);let b=f.length;for(x=0;x!==b;x++){const O=f[x];if(!O.collideConnected)for(let z=i.length-1;z>=0;z-=1)(O.bodyA===i[z]&&O.bodyB===r[z]||O.bodyB===i[z]&&O.bodyA===r[z])&&(i.splice(z,1),r.splice(z,1))}this.collisionMatrixTick(),c&&(h=Qe.now());const _=sg,M=t.length;for(x=0;x!==M;x++)_.push(t[x]);t.length=0;const S=this.frictionEquations.length;for(x=0;x!==S;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,r,this,t,_,this.frictionEquations,g),c&&(u.narrowphase=Qe.now()-h),c&&(h=Qe.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const C=t.length;for(let O=0;O!==C;O++){const z=t[O],R=z.bi,k=z.bj,F=z.si,q=z.sj;let X;if(R.material&&k.material?X=this.getContactMaterial(R.material,k.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,R.material&&k.material&&(R.material.friction>=0&&k.material.friction>=0&&R.material.friction*k.material.friction,R.material.restitution>=0&&k.material.restitution>=0&&(z.restitution=R.material.restitution*k.material.restitution)),a.addEquation(z),R.allowSleep&&R.type===se.DYNAMIC&&R.sleepState===se.SLEEPING&&k.sleepState===se.AWAKE&&k.type!==se.STATIC){const B=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),j=k.sleepSpeedLimit**2;B>=j*2&&(R.wakeUpAfterNarrowphase=!0)}if(k.allowSleep&&k.type===se.DYNAMIC&&k.sleepState===se.SLEEPING&&R.sleepState===se.AWAKE&&R.type!==se.STATIC){const B=R.velocity.lengthSquared()+R.angularVelocity.lengthSquared(),j=R.sleepSpeedLimit**2;B>=j*2&&(k.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(R,k,!0),this.collisionMatrixPrevious.get(R,k)||(Mr.body=k,Mr.contact=z,R.dispatchEvent(Mr),Mr.body=R,k.dispatchEvent(Mr)),this.bodyOverlapKeeper.set(R.id,k.id),this.shapeOverlapKeeper.set(F.id,q.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Qe.now()-h,h=Qe.now()),x=0;x!==s;x++){const O=n[x];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(b=f.length,x=0;x!==b;x++){const O=f[x];O.update();for(let z=0,R=O.equations.length;z!==R;z++){const k=O.equations[z];a.addEquation(k)}}a.solve(e,this),c&&(u.solve=Qe.now()-h),a.removeAllEquations();const y=Math.pow;for(x=0;x!==s;x++){const O=n[x];if(O.type&p){const z=y(1-O.linearDamping,e),R=O.velocity;R.scale(z,R);const k=O.angularVelocity;if(k){const F=y(1-O.angularDamping,e);k.scale(F,k)}}}this.dispatchEvent(rg),c&&(h=Qe.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(x=0;x!==s;x++)n[x].integrate(e,E,D);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Qe.now()-h),this.stepnumber+=1,this.dispatchEvent(ig);let P=!0;if(this.allowSleep)for(P=!1,x=0;x!==s;x++){const O=n[x];O.sleepTick(this.time),O.sleepState!==se.SLEEPING&&(P=!0)}this.hasActiveBodies=P}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(ni,ai),e){for(let s=0,n=ni.length;s<n;s+=2)Sr.bodyA=this.getBodyById(ni[s]),Sr.bodyB=this.getBodyById(ni[s+1]),this.dispatchEvent(Sr);Sr.bodyA=Sr.bodyB=null}if(t){for(let s=0,n=ai.length;s<n;s+=2)Er.bodyA=this.getBodyById(ai[s]),Er.bodyB=this.getBodyById(ai[s+1]),this.dispatchEvent(Er);Er.bodyA=Er.bodyB=null}ni.length=ai.length=0;const i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(ni,ai),i){for(let s=0,n=ni.length;s<n;s+=2){const a=this.getShapeById(ni[s]),l=this.getShapeById(ni[s+1]);oi.shapeA=a,oi.shapeB=l,a&&(oi.bodyA=a.body),l&&(oi.bodyB=l.body),this.dispatchEvent(oi)}oi.bodyA=oi.bodyB=oi.shapeA=oi.shapeB=null}if(r){for(let s=0,n=ai.length;s<n;s+=2){const a=this.getShapeById(ai[s]),l=this.getShapeById(ai[s+1]);li.shapeA=a,li.shapeB=l,a&&(li.bodyA=a.body),l&&(li.bodyB=l.body),this.dispatchEvent(li)}li.bodyA=li.bodyB=li.shapeA=li.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const r=e[i];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new Et;const on=new Ze,Qe=globalThis.performance||{};if(!Qe.now){let o=Date.now();Qe.timing&&Qe.timing.navigationStart&&(o=Qe.timing.navigationStart),Qe.now=()=>Date.now()-o}new w;const ig={type:"postStep"},rg={type:"preStep"},Mr={type:se.COLLIDE_EVENT_NAME,body:null,contact:null},sg=[],ng=[],ag=[],og=[],ni=[],ai=[],Sr={type:"beginContact",bodyA:null,bodyB:null},Er={type:"endContact",bodyA:null,bodyB:null},oi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},li={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Ua{constructor(e){typeof e=="object"&&(e=e.notation),this.set=[],this.setkeys=[],this.setid=0,this.groups=[],this.totalDice=0,this.op="",this.constant=null,this.result=[],this.error=!1,this.boost=1,this.notation="",this.vectors=[],(!e||e=="0")&&(this.error=!0),this.parseNotation(e)}parseNotation(e){e&&(e=e.split(" ").join(""));const t=this.notation.length>0?"+":"";this.notation+=t+e;let i=e.split(","),r=[];for(let h=0;h<i.length;h++){let f=i[h].split("@");r.push(f[1]),i[h]=f[0]}let s=new RegExp(/(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/,"i"),n=new RegExp(/(\b)*(\-\d+|\d+)(\b)*/,"gi"),a,l=0,c=30,u=0,p=0;for(;!this.error&&i[i.length-1].length>0&&(a=s.exec(i[p]))!==null&&l<c;){l++,i[p].length===0&&p++,i[p]=i[p].substring(a[0].length);let h=a[1],f=a[3],g=a[4],m=a[5]||"",d=a[6]||"",v=!0;l==1&&i[p].length==0&&!g&&h&&f?(g="d20",this.op=h,this.constant=parseInt(f),f=1):l>1&&i[p].length==0&&!g&&(this.op=h,this.constant=parseInt(f),v=!1),v&&this.addSet(f,g,p,u,m,d,h)}for(let h=0;h<r.length;h++)!this.error&&r[h]&&(a=r[h].match(n))!==null&&this.result.push(...a)}stringify(e=!0){let t="";if(this.set.length<1)return t;for(let i=0;i<this.set.length;i++){let r=this.set[i];t+=i>0&&r.op?r.op:"",t+=r.num+r.type,r.func&&(t+="{",t+=r.func?r.func:"",t+=r.args?","+(Array.isArray(r.args)?r.args.join(","):r.args):"",t+="}")}return t+=this.constant?this.op+""+Math.abs(this.constant):"",e&&this.result&&this.result.length>0&&(t+="@"+this.result.join(",")),this.boost>1&&(t+="!".repeat(this.boost/4)),t}addSet(e,t,i=0,r=0,s="",n="",a="+"){e=Math.abs(parseInt(e||1));let l=a+""+t+i+r+s+n,c=this.setkeys[l]!=null,u={};if(c&&(u=this.set[this.setkeys[l]-1]),e>0){if(u.num=c?e+u.num:e,u.type=t,u.sid=this.setid,u.gid=i,u.glvl=r,s&&(u.func=s),n&&(u.args=n),a&&(u.op=a),u.type==="")return;c?this.set[this.setkeys[l]-1]=u:this.setkeys[l]=this.set.push(u)}c||++this.setid}static mergeNotation(e,t){return{...e,constant:e.constant+t.constant,notation:e.notation+"+"+t.notation,set:[...e.set,...t.set],totalDice:e.vectors.length+t.vectors.length,vectors:[...e.vectors,...t.vectors]}}}const ln={d2:{name:"d2",labels:["1","2"],values:[1,2],inertia:8,mass:400,scale:.9,system:"dweird"},dc:{type:"d2",name:"Coin",labels:["textures/silvercoin/tail.png","textures/silvercoin/heads.png"],setBumpMaps:["textures/silvercoin/tail_bump.png","textures/silvercoin/heads_bump.png"],values:[0,1],inertia:8,mass:400,scale:.9,colorset:"coin_silver"},d1:{name:"One-sided Dice",type:"d6",labels:["1"],values:[1,1],scale:.9,system:"dweird"},d3:{name:"Three-Sided Dice",type:"d6",labels:["1","2","3"],values:[1,3],scale:.9,system:"dweird"},df:{name:"Fudge Dice",type:"d6",labels:["-","0","+"],values:[-1,1],scale:.9,system:"dweird"},d4:{name:"Four-Sided Dice",labels:["1","2","3","4"],values:[1,4],inertia:5,scale:1.2},d6:{name:"Six-Sided Dice (Numbers)",labels:["1","2","3","4","5","6"],values:[1,6],scale:.9},dpip:{name:"Six-Sided Dice (Pips)",type:"d6",labels:[`   
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
E`,"",""],values:[1,8],font:"Armada-Symbol-Regular",color:"#111111",colorset:"swa_black",display:"labels",system:"swarmada"},xwatk:{name:"Star Wars X-Wing: Red Attack Dice",type:"d8",labels:["c","d","d","d","f","f","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#FF0000",colorset:"xwing_red",display:"labels",system:"xwing"},xwdef:{name:"Star Wars X-Wing: Green Defense Dice",type:"d8",labels:["e","e","e","f","f","","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#00FF00",colorset:"xwing_green",display:"labels",system:"xwing"},swlar:{name:"Star Wars Legion: Red Attack Dice",type:"d8",labels:["h","h","h","h","h","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_atkred",display:"labels",system:"legion"},swlab:{name:"Star Wars Legion: Black Attack Dice",type:"d8",labels:["h","h","h","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#111111",colorset:"swl_atkblack",display:"labels",system:"legion"},swlaw:{name:"Star Wars Legion: White Attack Dice",type:"d8",labels:["h","","","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_atkwhite",display:"labels",system:"legion"},swldr:{name:"Star Wars Legion: Red Defense Dice",type:"d6",labels:["s","s","s","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_defred",display:"labels",system:"legion"},swldw:{name:"Star Wars Legion: White Defense Dice",type:"d6",labels:["s","","","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_defwhite",display:"labels",system:"legion"}},Lt={d4:{vertices:[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],faces:[[1,0,2,1],[0,1,3,2],[0,3,2,3],[1,2,3,4]]},d6:{vertices:[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],faces:[[0,3,2,1,1],[1,2,6,5,2],[0,1,5,4,3],[3,7,6,2,4],[0,4,7,3,5],[4,5,6,7,6]]},d8:{vertices:[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],faces:[[0,2,4,1],[0,4,3,2],[0,3,5,3],[0,5,2,4],[1,3,4,5],[1,4,2,6],[1,2,5,7],[1,5,3,8]]},d10:{vertices:[[1,0,-.105],[.809,.5877,.105],[.309,.951,-.105],[-.309,.951,.105],[-.809,.5877,-.105],[-1,0,.105],[-.809,-.587,-.105],[-.309,-.951,.105],[.309,-.951,-.105],[.809,-.5877,.105],[0,0,-1],[0,0,1]],faces:[[5,6,7,11,0],[4,3,2,10,1],[1,2,3,11,2],[0,9,8,10,3],[7,8,9,11,4],[8,7,6,10,5],[9,0,1,11,6],[2,1,0,10,7],[3,4,5,11,8],[6,5,4,10,9]]},d12:{vertices:[[0,.618,1.618],[0,.618,-1.618],[0,-.618,1.618],[0,-.618,-1.618],[1.618,0,.618],[1.618,0,-.618],[-1.618,0,.618],[-1.618,0,-.618],[.618,1.618,0],[.618,-1.618,0],[-.618,1.618,0],[-.618,-1.618,0],[1,1,1],[1,1,-1],[1,-1,1],[1,-1,-1],[-1,1,1],[-1,1,-1],[-1,-1,1],[-1,-1,-1]],faces:[[2,14,4,12,0,1],[15,9,11,19,3,2],[16,10,17,7,6,3],[6,7,19,11,18,4],[6,18,2,0,16,5],[18,11,9,14,2,6],[1,17,10,8,13,7],[1,13,5,15,3,8],[13,8,12,4,5,9],[5,4,14,9,15,10],[0,12,8,10,16,11],[3,19,7,17,1,12]]},d20:{vertices:[[-1,1.618,0],[1,1.618,0],[-1,-1.618,0],[1,-1.618,0],[0,-1,1.618],[0,1,1.618],[0,-1,-1.618],[0,1,-1.618],[1.618,0,-1],[1.618,0,1],[-1.618,0,-1],[-1.618,0,1]],faces:[[0,11,5,1],[0,5,1,2],[0,1,7,3],[0,7,10,4],[0,10,11,5],[1,5,9,6],[5,11,4,7],[11,10,2,8],[10,7,6,9],[7,1,8,10],[3,9,4,11],[3,4,2,12],[3,2,6,13],[3,6,8,14],[3,8,9,15],[4,9,5,16],[2,4,11,17],[6,2,10,18],[8,6,7,19],[9,8,1,20]]}},lg={name:"",scale:1,font:"Arial",color:"",labels:[],valueMap:[],values:[],normals:[],mass:300,inertia:13,geometry:null,display:"values",system:"d20"};class cg{constructor(e){if(!ln.hasOwnProperty(e))return console.error("dice type unavailable");Object.assign(this,lg,ln[e]),this.shape=ln[e].type||e,this.type=e,this.setLabels(this.labels),this.setValues(this.values[0],this.values[1],this.values[2]),this.setValueMap(this.valueMap),this.bumpMaps&&this.setBumpMaps(this.bumpMaps)}setValues(e=1,t=20,i=1){this.values=this.range(e,t,i)}setValueMap(e){for(let t=0;t<this.values.length;t++){let i=this.values[t];e[i]!=null&&(this.valueMap[i]=e[i])}}registerFaces(e,t="labels"){let i;if(t=="labels"?i=this.labels:i=this.normals,i.unshift(""),["d2","d10"].includes(this.shape)||i.unshift(""),this.shape=="d4"){let r=e[0],s=e[1],n=e[2],a=e[3];this.labels=[[[],[0,0,0],[s,a,n],[r,n,a],[s,r,a],[r,s,n]],[[],[0,0,0],[s,n,a],[n,r,a],[s,a,r],[n,s,r]],[[],[0,0,0],[a,n,s],[n,a,r],[a,s,r],[n,r,s]],[[],[0,0,0],[a,s,n],[r,a,n],[a,r,s],[r,n,s]]]}else Array.prototype.push.apply(i,e)}setLabels(e){this.loadTextures(e,this.registerFaces.bind(this),"labels")}setBumpMaps(e){this.loadTextures(e,this.registerFaces.bind(this),"bump")}loadTextures(e,t,i){let r=0,s=e.length,n=/\.(PNG|JPG|GIF|WEBP)$/i,a=Array(e.length),l=!1;for(let c=0;c<s;c++){if(e[c]==""||!e[c].match(n)){a[c]=e[c],++r;continue}l=!0,a[c]=new Image,a[c].onload=function(){++r>=s&&t(a,i)},a[c].src=e[c]}l||t(a,i)}range(e,t,i=1){for(var r=[e],s=e;s<t;)r.push(s+=i||1);return r}}const ug={none:{name:"Plastic"},perfectmetal:{name:"Perfect Metal",color:14540253,roughness:0,metalness:1,envMapIntensity:1},metal:{name:"Metal",color:14540253,roughness:.5,metalness:.6,envMapIntensity:1},wood:{name:"Wood",color:14540253,roughness:.9,metalness:0,envMapIntensity:1},glass:{name:"Glass",color:14540253,roughness:.1,metalness:0,envMapIntensity:1}},hg={baseScale:100,bumpMapping:!0},Ar=class{constructor(o){this.geometries={},this.materials_cache={},this.cache_hits=0,this.cache_misses=0,this.label_color="",this.dice_color="",this.edge_color="",this.label_outline="",this.dice_texture="",this.dice_material="",this.material_options={specular:16777215,color:11908533,shininess:5,flatShading:!0},Object.assign(this,hg,o)}updateConfig(o={}){Object.assign(this,o),o.scale&&this.scaleGeometry()}setBumpMapping(o){this.bumpMapping=o,this.materials_cache={}}create(o){let e=this.get(o);if(!e)return null;let t=this.geometries[o];if(t||(t=this.createGeometry(e.shape,e.scale*this.baseScale),this.geometries[o]=t),!t)return null;this.setMaterialInfo();let i=new Yt(t,this.createMaterials(e,this.baseScale/2,1));switch(i.result=[],i.shape=e.shape,i.rerolls=0,i.resultReason="natural",i.mass=e.mass,i.getFaceValue=function(){let r=this.resultReason,s=new U(0,0,this.shape=="d4"?-1:1),n,a=Math.PI*2,l=this.geometry.getAttribute("normal").array;for(let g=0,m=this.geometry.groups.length;g<m;++g){let d=this.geometry.groups[g];if(d.materialIndex==0)continue;let v=g*9,x=new U(l[v],l[v+1],l[v+2]).clone().applyQuaternion(this.body.quaternion).angleTo(s);x<a&&(a=x,n=d)}let c=n.materialIndex-1,u=2;const p=Ar.dice[this.notation.type];if(this.shape=="d4"){let g=c-1==0?5:c;return{value:c,label:p.labels[c-1][g][0],reason:r}}["d10","d2"].includes(this.shape)&&(c+=1,u-=1);let h=p.values[(c-1)%p.values.length],f=p.labels[(c-1)%(p.labels.length-2)+u];return{value:h,label:f,reason:r}},i.storeRolledValue=function(r){this.resultReason=r||this.resultReason,this.result.push(this.getFaceValue())},i.getLastValue=function(){return!this.result||this.result.length<1?{value:void 0,label:"",reason:""}:this.result[this.result.length-1]},i.ignoreLastValue=function(r){let s=this.getLastValue();s.value!==void 0&&(s.ignore=r,this.setLastValue(s))},i.setLastValue=function(r){if(!(!this.result||this.result.length<1)&&!(!r||r.length<1))return this.result[this.result.length-1]=r},e.color&&(i.material[0].color=new Ie(e.color),i.material[0].emissive=new Ie(e.color),i.material[0].emissiveIntensity=1,i.material[0].needsUpdate=!0),e.values.length){case 1:return this.fixmaterials(i,1);case 2:return this.fixmaterials(i,2);case 3:return this.fixmaterials(i,3);default:return i}}get(o){let e;return Ar.dice.hasOwnProperty(o)?e=Ar.dice[o]:(e=new cg(o),Ar.dice[o]=e),e}getGeometry(o){return this.geometries[o]}scaleGeometry(){}createMaterials(o,e,t,i=!0,r=0){let s=[],n=o.labels;o.shape=="d4"&&(n=o.labels[r],e=this.baseScale/2,t=this.baseScale*2);for(var a=0;a<n.length;++a){var l;this.dice_material!="none"?(l=new Lp(ug[this.dice_material]),l.envMapIntensity=0):l=new Rp(this.material_options);let c;if(a==0){let u={name:"none"};this.dice_texture_rand.composite!="source-over"&&(u=this.dice_texture_rand),c=this.createTextMaterial(o,n,a,e,t,u,this.label_color_rand,this.label_outline_rand,this.edge_color_rand,i),l.map=c.composite}else if(c=this.createTextMaterial(o,n,a,e,t,this.dice_texture_rand,this.label_color_rand,this.label_outline_rand,this.dice_color_rand,i),l.map=c.composite,this.bumpMapping){{let u=.75;e>35&&(u=1),e>40&&(u=2.5),e>45&&(u=4),l.bumpScale=u}c.bump&&(l.bumpMap=c.bump),o.shape!="d4"&&o.normals[a]&&(l.bumpMap=new St(o.normals[a]),l.bumpScale=4,l.bumpMap.needsUpdate=!0)}l.opacity=1,l.transparent=!0,l.depthTest=!1,l.needUpdate=!0,s.push(l)}return s}createTextMaterial(o,e,t,i,r,s,n,a,l,c){if(e[t]===void 0)return null;s=s||this.dice_texture_rand,n=n||this.label_color_rand,a=a||this.label_outline_rand,l=l||this.dice_color_rand,c=c??!0;let u=e[t],p=!1,h=u;u instanceof HTMLImageElement?h=u.src:u instanceof Array&&u.forEach(C=>{h+=C.src});let f=o.type+h+t+s.name+n+a+l;if(o.shape=="d4"&&(f=o.type+h+s.name+n+a+l),c&&this.materials_cache[f]!=null)return this.cache_hits++,this.materials_cache[f];let g=document.createElement("canvas"),m=g.getContext("2d",{alpha:!0});m.globalAlpha=0,m.clearRect(0,0,g.width,g.height);let d=document.createElement("canvas"),v=d.getContext("2d",{alpha:!0});v.globalAlpha=0,v.clearRect(0,0,d.width,d.height);let x;if(o.shape=="d4"?x=this.calc_texture_size(i+r)*4:x=this.calc_texture_size(i+i*2*r)*4,g.width=g.height=x,d.width=d.height=x,m.fillStyle=l,m.fillRect(0,0,g.width,g.height),v.fillStyle="#FFFFFF",v.fillRect(0,0,d.width,d.height),s.texture&&s.name!=""&&s.name!="none"?(m.globalCompositeOperation=s.composite||"source-over",m.drawImage(s.texture,0,0,g.width,g.height),m.globalCompositeOperation="source-over",s.bump&&(v.globalCompositeOperation="source-over",v.drawImage(s.bump,0,0,g.width,g.height))):m.globalCompositeOperation="source-over",m.globalCompositeOperation="source-over",m.textAlign="center",m.textBaseline="middle",v.textAlign="center",v.textBaseline="middle",o.shape!="d4"){let C={d8:{even:-7.5,odd:-127.5},d10:{all:-6},d12:{all:5},d20:{all:-7.5}}[o.shape];if(C){let y;if(C.hasOwnProperty("all")?y=C.all:t>0&&t%2!=0?y=C.odd:y=C.even,y&&y!=0){var b=g.width/2,_=g.height/2;m.translate(b,_),m.rotate(y*(Math.PI/180)),m.translate(-b,-_),v.translate(b,_),v.rotate(y*(Math.PI/180)),v.translate(-b,-_)}}if(u instanceof HTMLImageElement)p=!0,m.drawImage(u,0,0,u.width,u.height,0,0,g.width,g.height);else{let y=x/(1+2*r),E=g.height/2+10,D=g.width/2;o.shape=="d10"?(y=y*.75,E=E*1.15-10):o.shape=="d20"&&(D=D*.98),m.font=y+"pt "+o.font,v.font=y+"pt "+o.font;let P=m.measureText("M").width*1.4,O=u.split(`
`);O.length>1&&(y=y/O.length,m.font=y+"pt "+o.font,v.font=y+"pt "+o.font,P=m.measureText("M").width*1.2,E-=P*O.length/2);for(let z=0,R=O.length;z<R;z++){let k=O[z].trim();a!="none"&&a!=l&&(m.strokeStyle=a,m.lineWidth=5,m.strokeText(O[z],D,E),v.strokeStyle="#000000",v.lineWidth=5,v.strokeText(O[z],D,E),(k=="6"||k=="9")&&(m.strokeText("  .",D,E),v.strokeText("  .",D,E))),m.fillStyle=n,m.fillText(O[z],D,E),v.fillStyle="#000000",v.fillText(O[z],D,E),(k=="6"||k=="9")&&(m.fillText("  .",D,E),v.fillText("  .",D,E)),E+=P*1.5}}}else{var b=g.width/2,_=g.height/2;m.font=x/128*24+"pt "+o.font,v.font=x/128*24+"pt "+o.font;for(let E=0;E<u.length;E++){if(u[E]instanceof HTMLImageElement){let D=u[E].width/g.width;m.drawImage(u[E],0,0,u[E].width,u[E].height,100/D,25/D,60/D,60/D)}else a!="none"&&a!=l&&(m.strokeStyle=a,m.lineWidth=5,m.strokeText(u[E],b,_-x*.3),v.strokeStyle="#000000",v.lineWidth=5,v.strokeText(u[E],b,_-x*.3)),m.fillStyle=n,m.fillText(u[E],b,_-x*.3),v.fillStyle="#000000",v.fillText(u[E],b,_-x*.3);m.translate(b,_),m.rotate(Math.PI*2/3),m.translate(-b,-_),v.translate(b,_),v.rotate(Math.PI*2/3),v.translate(-b,-_)}}var M=new xa(g),S;return p?S=null:S=new xa(d),c&&(this.cache_misses++,this.materials_cache[f]={composite:M,bump:S}),{composite:M,bump:S}}applyColorSet(o){var e;this.colordata=o,this.label_color=o.foreground,this.dice_color=o.background,this.label_outline=o.outline,this.dice_texture=o.texture,this.dice_material=((e=o==null?void 0:o.texture)==null?void 0:e.material)||"none",this.edge_color=o.hasOwnProperty("edge")?o.edge:o.background}setMaterialInfo(o=""){let e=this.colordata,t=this.dice_texture,i=this.dice_material;if(this.dice_color_rand="",this.label_color_rand="",this.label_outline_rand="",this.dice_texture_rand="",this.dice_material_rand="",this.edge_color_rand="",Array.isArray(this.dice_color)){var r=Math.floor(Math.random()*this.dice_color.length);Array.isArray(this.label_color)&&this.label_color.length==this.dice_color.length&&(this.label_color_rand=this.label_color[r],Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[r])),Array.isArray(this.dice_texture)&&this.dice_texture.length==this.dice_color.length&&(this.dice_texture_rand=this.dice_texture[r],this.dice_material_rand=this.dice_texture_rand.material),Array.isArray(this.edge_color)&&this.edge_color.length==this.dice_color.length&&(this.edge_color_rand=this.edge_color[r]),this.dice_color_rand=this.dice_color[r]}else this.dice_color_rand=this.dice_color;if(this.edge_color_rand=="")if(Array.isArray(this.edge_color)){var r=Math.floor(Math.random()*this.edge_color.length);this.edge_color_rand=this.edge_color[r]}else this.edge_color_rand=this.edge_color;if(this.label_color_rand==""&&Array.isArray(this.label_color)){var r=this.label_color[Math.floor(Math.random()*this.label_color.length)];Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[r]),this.label_color_rand=this.label_color[r]}else this.label_color_rand==""&&(this.label_color_rand=this.label_color);if(this.label_outline_rand==""&&Array.isArray(this.label_outline)){var r=this.label_outline[Math.floor(Math.random()*this.label_outline.length)];this.label_outline_rand=this.label_outline[r]}else this.label_outline_rand==""&&(this.label_outline_rand=this.label_outline);this.dice_texture_rand==""&&Array.isArray(this.dice_texture)?(this.dice_texture_rand=this.dice_texture[Math.floor(Math.random()*this.dice_texture.length)],this.dice_material_rand=this.dice_texture_rand.material||this.dice_material):this.dice_texture_rand==""&&(this.dice_texture_rand=this.dice_texture,this.dice_material_rand=this.dice_texture_rand.material||this.dice_material),this.dice_material_rand==""&&Array.isArray(this.dice_material)?this.dice_material_rand=this.dice_material[Math.floor(Math.random()*this.dice_material.length)]:this.dice_material_rand==""&&(this.dice_material_rand=this.dice_material),this.colordata&&this.colordata.id!=e.id&&this.applyColorSet(e,t,i)}calc_texture_size(o){return Math.pow(2,Math.floor(Math.log(o)/Math.log(2)))}createGeometry(o,e,t=!1){const i=t?"create_shape":"create_geom";switch(o){case"d2":var r=new Tn(1*e,1*e,.1*e,32);return r.cannon_shape=new km(1*e,1*e,.1*e,8),r;case"d4":return this[i](Lt.d4.vertices,Lt.d4.faces,e,-.1,Math.PI*7/6,.96);case"d6":return this[i](Lt.d6.vertices,Lt.d6.faces,e,.1,Math.PI/4,.96);case"d8":return this[i](Lt.d8.vertices,Lt.d8.faces,e,0,-Math.PI/4/2,.965);case"d10":return this[i](Lt.d10.vertices,Lt.d10.faces,e,.3,Math.PI,.945);case"d12":return this[i](Lt.d12.vertices,Lt.d12.faces,e,.2,-Math.PI/4/2,.968);case"d20":return this[i](Lt.d20.vertices,Lt.d20.faces,e,-.2,-Math.PI/4/2,.955);default:return console.error(`Geometry for ${o} is not available`),null}}fixmaterials(o,e){for(let i=0,r=o.geometry.groups.length;i<r;++i){var t=o.geometry.groups[i].materialIndex-2;if(t<e)continue;let s=t%e;o.geometry.groups[i].materialIndex=s+2}return o.geometry.elementsNeedUpdate=!0,o}create_shape(o,e,t){for(var i=new Array(o.length),r=0;r<o.length;++r)i[r]=new U().fromArray(o[r]).normalize();for(var s=new Array(o.length),n=new Array(e.length),r=0;r<i.length;++r){var a=i[r];s[r]=new w(a.x*t,a.y*t,a.z*t)}for(var r=0;r<e.length;++r)n[r]=e[r].slice(0,e[r].length-1);return new ki({vertices:s,faces:n})}make_geom(o,e,t,i,r){let s=new Zt;for(let f=0;f<o.length;++f)o[f]=o[f].multiplyScalar(t);let n=[];const a=[],l=[],c=new U,u=new U;let p,h=0;for(let f=0;f<e.length;++f){let g=e[f],m=g.length-1,d=Math.PI*2/m;p=g[m]+1;for(let x=0;x<m-2;++x)n.push(...o[g[0]].toArray()),n.push(...o[g[x+1]].toArray()),n.push(...o[g[x+2]].toArray()),c.subVectors(o[g[x+2]],o[g[x+1]]),u.subVectors(o[g[0]],o[g[x+1]]),c.cross(u),c.normalize(),a.push(...c.toArray()),a.push(...c.toArray()),a.push(...c.toArray()),l.push((Math.cos(r)+1+i)/2/(1+i),(Math.sin(r)+1+i)/2/(1+i)),l.push((Math.cos(d*(x+1)+r)+1+i)/2/(1+i),(Math.sin(d*(x+1)+r)+1+i)/2/(1+i)),l.push((Math.cos(d*(x+2)+r)+1+i)/2/(1+i),(Math.sin(d*(x+2)+r)+1+i)/2/(1+i));let v=(m-2)*3;for(let x=0;x<v/3;x++)s.addGroup(h,3,p),h+=3}return s.setAttribute("position",new ht(n,3)),s.setAttribute("normal",new ht(a,3)),s.setAttribute("uv",new ht(l,2)),s.boundingSphere=new Lr(new U,t),s}make_d10_geom(o,e,t,i,r){let s=new Zt;for(let x=0;x<o.length;++x)o[x]=o[x].multiplyScalar(t);let n=[];const a=[],l=[],c=new U,u=new U;let p,h=0;for(let x=0;x<e.length;++x){let b=e[x],_=b.length-1,M=Math.PI*2/_;p=b[_]+1;var f=.65,g=.85,m=1-1*g,d=1-.895/1.105*g,v=1;for(let C=0;C<_-2;++C)n.push(...o[b[0]].toArray()),n.push(...o[b[C+1]].toArray()),n.push(...o[b[C+2]].toArray()),c.subVectors(o[b[C+2]],o[b[C+1]]),u.subVectors(o[b[0]],o[b[C+1]]),c.cross(u),c.normalize(),a.push(...c.toArray()),a.push(...c.toArray()),a.push(...c.toArray()),e[x][e[x].length-1]==-1||C>=2?(l.push((Math.cos(r)+1+i)/2/(1+i),(Math.sin(r)+1+i)/2/(1+i)),l.push((Math.cos(M*(C+1)+r)+1+i)/2/(1+i),(Math.sin(M*(C+1)+r)+1+i)/2/(1+i)),l.push((Math.cos(M*(C+2)+r)+1+i)/2/(1+i),(Math.sin(M*(C+2)+r)+1+i)/2/(1+i))):C==0?(l.push(.5-f/2,d),l.push(.5,m),l.push(.5+f/2,d)):C==1&&(l.push(.5-f/2,d),l.push(.5+f/2,d),l.push(.5,v));let S=(_-2)*3;for(let C=0;C<S/3;C++)s.addGroup(h,3,p),h+=3}return s.setAttribute("position",new ht(n,3)),s.setAttribute("normal",new ht(a,3)),s.setAttribute("uv",new ht(l,2)),s.boundingSphere=new Lr(new U,t),s}chamfer_geom(o,e,t){for(var i=[],r=[],s=new Array(o.length),n=0;n<o.length;++n)s[n]=[];for(var n=0;n<e.length;++n){for(var a=e[n],l=a.length-1,c=new U,u=new Array(l),p=0;p<l;++p){var h=o[a[p]].clone();c.add(h),s[a[p]].push(u[p]=i.push(h)-1)}c.divideScalar(l);for(var p=0;p<l;++p){var h=i[u[p]];h.subVectors(h,c).multiplyScalar(t).addVectors(h,c)}u.push(a[l]),r.push(u)}for(var n=0;n<e.length-1;++n)for(var p=n+1;p<e.length;++p){for(var f=[],g=-1,m=0;m<e[n].length-1;++m){var d=e[p].indexOf(e[n][m]);d>=0&&d<e[p].length-1&&(g>=0&&m!=g+1?f.unshift([n,m],[p,d]):f.push([n,m],[p,d]),g=m)}f.length==4&&r.push([r[f[0][0]][f[0][1]],r[f[1][0]][f[1][1]],r[f[3][0]][f[3][1]],r[f[2][0]][f[2][1]],-1])}for(var n=0;n<s.length;++n){for(var v=s[n],u=[v[0]],x=v.length-1;x;){for(var m=e.length;m<r.length;++m){var b=r[m].indexOf(u[u.length-1]);if(b>=0&&b<4){--b==-1&&(b=3);var _=r[m][b];if(v.indexOf(_)>=0){u.push(_);break}}}--x}u.push(-1),r.push(u)}return{vectors:i,faces:r}}create_geom(o,e,t,i,r,s){for(var n=new Array(o.length),a=0;a<o.length;++a)n[a]=new U().fromArray(o[a]).normalize();var l=this.chamfer_geom(n,e,s);if(e.length!=10)var c=this.make_geom(l.vectors,l.faces,t,i,r);else var c=this.make_d10_geom(l.vectors,l.faces,t,i,r);return c.cannon_shape=this.create_shape(o,e,t),c.name="d"+e.length,c}};let Do=Ar;Tl(Do,"dice",{});const cn={cloudy:{name:"Clouds (Transparent)",composite:"destination-in",source:"textures/cloudy.webp",source_bump:"textures/cloudy.alt.webp"},cloudy_2:{name:"Clouds",composite:"multiply",source:"textures/cloudy.alt.webp",source_bump:"textures/cloudy.alt.webp"},fire:{name:"Fire",composite:"multiply",source:"textures/fire.webp",source_bump:"textures/fire.webp",material:"metal"},marble:{name:"Marble",composite:"multiply",source:"textures/marble.webp",source_bump:"",material:"glass"},water:{name:"Water",composite:"destination-in",source:"textures/water.webp",source_bump:"textures/water.webp",material:"glass"},ice:{name:"Ice",composite:"destination-in",source:"textures/ice.webp",source_bump:"textures/ice.webp",material:"glass"},paper:{name:"Paper",composite:"multiply",source:"textures/paper.webp",source_bump:"textures/paper-bump.webp",material:"wood"},speckles:{name:"Speckles",composite:"multiply",source:"textures/speckles.webp",source_bump:"textures/speckles.webp",material:"none"},glitter:{name:"Glitter",composite:"multiply",source:"textures/glitter.webp",source_bump:"textures/glitter-bump.webp",material:"none"},glitter_2:{name:"Glitter (Transparent)",composite:"destination-in",source:"textures/glitter-alpha.webp",source_bump:"",material:"none"},stars:{name:"Stars",composite:"multiply",source:"textures/stars.webp",source_bump:"textures/stars.webp",material:"none"},stainedglass:{name:"Stained Glass",composite:"multiply",source:"textures/stainedglass.webp",source_bump:"textures/stainedglass-bump.webp",material:"glass"},wood:{name:"Wood",composite:"multiply",source:"textures/wood.webp",source_bump:"textures/wood.webp",material:"wood"},metal:{name:"Stainless Steel",composite:"multiply",source:"textures/metal.webp",source_bump:"textures/metal-bump.webp",material:"metal"},skulls:{name:"Skulls",composite:"multiply",source:"textures/skulls.webp",source_bump:"textures/skulls.webp"},leopard:{name:"Leopard",composite:"multiply",source:"textures/leopard.webp",source_bump:"textures/leopard.webp",material:"wood"},tiger:{name:"Tiger",composite:"multiply",source:"textures/tiger.webp",source_bump:"textures/tiger.webp",material:"wood"},cheetah:{name:"Cheetah",composite:"multiply",source:"textures/cheetah.webp",source_bump:"textures/cheetah.webp",material:"wood"},dragon:{name:"Dragon",composite:"multiply",source:"textures/dragon.webp",source_bump:"textures/dragon-bump.webp",material:"none"},lizard:{name:"Lizard",composite:"multiply",source:"textures/lizard.webp",source_bump:"textures/lizard.webp",material:"none"},bird:{name:"Bird",composite:"multiply",source:"textures/feather.webp",source_bump:"textures/feather-bump.webp",material:"wood"},astral:{name:"Astral Sea",composite:"multiply",source:"textures/astral.webp",source_bump:"textures/stars.webp",material:"none"},acleaf:{name:"AC Leaf",composite:"multiply",source:"textures/acleaf.webp",source_bump:"textures/acleaf.webp",material:"none"},thecage:{name:"Nicholas Cage",composite:"multiply",source:"textures/thecage.webp",source_bump:"",material:"metal"},isabelle:{name:"Isabelle",composite:"source-over",source:"textures/isabelle.webp",source_bump:"",material:"none"},bronze01:{name:"bronze01",composite:"difference",source:"textures/bronze01.webp",source_bump:"",material:"metal"},bronze02:{name:"bronze02",composite:"difference",source:"textures/bronze02.webp",source_bump:"",material:"metal"},bronze03:{name:"bronze03",composite:"difference",source:"textures/bronze03.webp",source_bump:"",material:"metal"},bronze03a:{name:"bronze03a",composite:"difference",source:"textures/bronze03a.webp",source_bump:"",material:"metal"},bronze03b:{name:"bronze03b",composite:"difference",source:"textures/bronze03b.webp",source_bump:"",material:"metal"},bronze04:{name:"bronze04",composite:"difference",source:"textures/bronze04.webp",source_bump:"",material:"metal"},none:{name:"none",composite:"source-over",source:"",source_bump:"",material:""},"":{name:"~ Preset ~",composite:"source-over",source:"",source_bump:"",material:""}},Ha={coin_default:{name:"Gold Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},coin_silver:{name:"Silver Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},radiant:{name:"Radiant",category:"Damage Types",foreground:"#F9B333",background:"#FFFFFF",outline:"",texture:"paper",description:"Radiant"},fire:{name:"Fire",category:"Damage Types",foreground:"#f8d84f",background:["#f8d84f","#f9b02d","#f43c04","#910200","#4c1009"],outline:"black",texture:"fire",description:"Fire"},ice:{name:"Ice",category:"Damage Types",foreground:"#60E9FF",background:["#214fa3","#3c6ac1","#253f70","#0b56e2","#09317a"],outline:"black",texture:"ice",description:"Ice"},poison:{name:"Poison",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409e","#934fc3","#c949fc"],outline:"black",texture:"cloudy",description:"Poison"},acid:{name:"Acid",category:"Damage Types",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"marble",description:"Acid"},thunder:{name:"Thunder",category:"Damage Types",foreground:"#FFC500",background:"#7D7D7D",outline:"black",texture:"cloudy",description:"Thunder"},lightning:{name:"Lightning",category:"Damage Types",foreground:"#FFC500",background:["#f17105","#f3ca40","#eddea4","#df9a57","#dea54b"],outline:"#7D7D7D",texture:"ice",description:"Lightning"},air:{name:"Air",category:"Damage Types",foreground:"#ffffff",background:["#d0e5ea","#c3dee5","#a4ccd6","#8dafb7","#80a4ad"],outline:"black",texture:"cloudy",description:"Air"},water:{name:"Water",category:"Damage Types",foreground:"#60E9FF",background:["#87b8c4","#77a6b2","#6b98a3","#5b8691","#4b757f"],outline:"black",texture:"water",description:"Water"},earth:{name:"Earth",category:"Damage Types",foreground:"#6C9943",background:["#346804","#184200","#527f22","#3a1d04","#56341a","#331c17","#5a352a","#302210"],outline:"black",texture:"speckles",description:"Earth"},force:{name:"Force",category:"Damage Types",foreground:"white",background:["#FF97FF","#FF68FF","#C651C6"],outline:"#570000",texture:"stars",description:"Force"},psychic:{name:"Psychic",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409E","#934FC3","#C949FC","#313866"],outline:"black",texture:"speckles",description:"Psychic"},necrotic:{name:"Necrotic",category:"Damage Types",foreground:"#ffffff",background:"#6F0000",outline:"black",texture:"skulls",description:"Necrotic"},breebaby:{name:"Pastel Sunset",category:"Custom Sets",foreground:["#5E175E","#564A5E","#45455E","#3D5A5E","#1E595E","#5E3F3D","#5E1E29","#283C5E","#25295E"],background:["#FE89CF","#DFD4F2","#C2C2E8","#CCE7FA","#A1D9FC","#F3C3C2","#EB8993","#8EA1D2","#7477AD"],outline:"white",texture:"marble",description:"Pastel Sunset, for Breyanna"},pinkdreams:{name:"Pink Dreams",category:"Custom Sets",foreground:"white",background:["#ff007c","#df73ff","#f400a1","#df00ff","#ff33cc"],outline:"#570000",texture:"skulls",description:"Pink Dreams, for Ethan"},inspired:{name:"Inspired",category:"Custom Sets",foreground:"#FFD800",background:"#C4C4B6",outline:"#8E8E86",texture:"none",description:"Inspired, for Austin"},bloodmoon:{name:"Blood Moon",category:"Custom Sets",foreground:"#CDB800",background:"#6F0000",outline:"black",texture:"marble",description:"Blood Moon, for Jared"},starynight:{name:"Stary Night",category:"Custom Sets",foreground:"#4F708F",background:["#091636","#233660","#4F708F","#8597AD","#E2E2E2"],outline:"white",texture:"speckles",description:"Stary Night, for Mai"},glitterparty:{name:"Glitter Party",category:"Custom Sets",foreground:"white",background:["#FFB5F5","#7FC9FF","#A17FFF"],outline:"none",texture:"glitter",description:"Glitter Party, for Austin"},astralsea:{name:"Astral Sea",category:"Custom Sets",foreground:"#565656",background:"white",outline:"none",texture:"astral",description:"The Astral Sea, for Austin"},bronze:{name:"Thylean Bronze",description:"Thylean Bronze by @SpencerThayer",category:"Custom Sets",foreground:["#FF9159","#FFB066","#FFBF59","#FFD059"],background:["#705206","#7A4E06","#643100","#7A2D06"],outline:["#3D2D03","#472D04","#301700","#471A04"],edge:["#FF5D0D","#FF7B00","#FFA20D","#FFBA0D"],texture:["bronze01","bronze02","bronze03","bronze03a","bronze03b","bronze04"]},dragons:{name:"Here be Dragons",category:"Custom Sets",foreground:"#FFFFFF",background:["#B80000","#4D5A5A","#5BB8FF","#7E934E","#FFFFFF","#F6ED7C","#7797A3","#A78437","#862C1A","#FFDF8A"],outline:"black",texture:["dragon","lizard"],description:"Here be Dragons"},birdup:{name:"Bird Up",category:"Custom Sets",foreground:"#FFFFFF",background:["#F11602","#FFC000","#6EC832","#0094BC","#05608D","#FEABB3","#F75680","#F3F0DF","#C7A57F"],outline:"black",texture:"bird",description:"Bird Up!"},tigerking:{name:"Tiger King",category:"Other",foreground:"#ffffff",background:"#FFCC40",outline:"black",texture:["leopard","tiger","cheetah"],description:"Leopard Print"},covid:{name:"COViD",category:"Other",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"fire",description:"Covid-19"},acleaf:{name:"Animal Crossing",category:"Other",foreground:"#00FF00",background:"#07540A",outline:"black",texture:"acleaf",description:"Animal Crossing Leaf"},isabelle:{name:"Isabelle",category:"Other",foreground:"white",background:"#FEE5CC",outline:"black",texture:"isabelle",description:"Isabelle"},thecage:{name:"Nicholas Cage",category:"Other",foreground:"#ffffff",background:"#ffffff",outline:"black",texture:"thecage",description:"Nicholas Cage"},test:{name:"Test",category:"Colors",foreground:["#00FF00","#0000FF","#FF0000"],background:["#FF0000","#00FF00","#0000FF"],outline:"black",texture:"none",description:"Test"},rainbow:{name:"Rainblow",category:"Colors",foreground:["#FF5959","#FFA74F","#FFFF56","#59FF59","#2374FF","#00FFFF","#FF59FF"],background:["#900000","#CE3900","#BCBC00","#00B500","#00008E","#008282","#A500A5"],outline:"black",texture:"none",description:"Rainblow"},black:{name:"Black",category:"Colors",foreground:"#ffffff",background:"#000000",outline:"black",texture:"none",description:"Black"},white:{name:"White",category:"Colors",foreground:"#000000",background:"#FFFFFF",outline:"#FFFFFF",texture:"none",description:"White"},swrpg_abi:{name:"Star Wars RPG - Ability",category:"Star Wars™ RPG",foreground:"#00FF00",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"#000000",texture:"cloudy_2",description:"Star Wars™ RPG Ability Dice"},swrpg_pro:{name:"Star Wars RPG - Proficiency",category:"Star Wars™ RPG",foreground:"#FFFF00",background:["#CABB1C","#F9E33B","#FFE900","#F0E49D"],outline:"#000000",texture:"paper",description:"Star Wars™ RPG Proficiency Dice"},swrpg_dif:{name:"Star Wars RPG - Difficulty",category:"Star Wars™ RPG",foreground:"#8000FC",background:["#39165F","#664B84","#50247E","#745F88"],outline:"#000000",texture:"cloudy_2",description:"Star Wars™ RPG Difficulty Dice"},swrpg_cha:{name:"Star Wars RPG - Challenge",category:"Star Wars™ RPG",foreground:"#FF0000",background:["#A91F32","#EB4254","#E51836","#BA3645"],outline:"#000000",texture:"paper",description:"Star Wars™ RPG Challenge Dice"},swrpg_boo:{name:"Star Wars RPG - Boost",category:"Star Wars™ RPG",foreground:"#00FFFF",background:["#4B9DC6","#689FC4","#85CFF2","#8FC0D8"],outline:"#000000",texture:"glitter",description:"Star Wars™ RPG Boost Dice"},swrpg_set:{name:"Star Wars RPG - Setback",category:"Star Wars™ RPG",foreground:"#111111",background:["#252223","#241F21","#282828","#111111"],outline:"#ffffff",texture:"glitter",description:"Star Wars™ RPG Setback Dice"},swrpg_for:{name:"Star Wars RPG - Force",category:"Star Wars™ RPG",foreground:"#000000",background:["#F3F3F3","#D3D3D3","#BABABA","#FFFFFF"],outline:"#FFFFFF",texture:"stars",description:"Star Wars™ RPG Force Dice"},swa_red:{name:"Armada Attack - Red",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Red Attack Dice"},swa_blue:{name:"Armada Attack - Blue",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#212642","#28286E","#2B348C","#3D4BB5","#5D64AB"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Blue Attack Dice"},swa_black:{name:"Armada Attack - Black",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Black Attack Dice"},xwing_red:{name:"X-Wing Attack - Red",category:"Star Wars™ X-Wing",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stars",description:"Star Wars™ X-Wing Red Attack Dice"},xwing_green:{name:"X-Wing Attack - Green",category:"Star Wars™ X-Wing",foreground:"#ffffff",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"none",texture:"stars",description:"Star Wars™ X-Wing Green Attack Dice"},swl_atkred:{name:"Legion Attack - Red",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars™ Legion Red Attack Dice"},swl_atkblack:{name:"Legion Attack - Black",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"fire",description:"Star Wars™ Legion Black Attack Dice"},swl_atkwhite:{name:"Legion Attack - White",category:"Star Wars™ Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars™ Legion White Attack Dice"},swl_defred:{name:"Legion Defense - Red",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars™ Legion Red Defense Dice"},swl_defwhite:{name:"Legion Defense - White",category:"Star Wars™ Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars™ Legion White Defense Dice"}};class dg{constructor(e={}){this.colorsets=[],this.assetPath=e.assetPath}async ImageLoader(e){if(Array.isArray(e)){for(let t=0,i=e.length;t<i;t++)e[t]=await this.ImageLoader(e[t]);return e}return e.source&&e.source!=""&&(e.texture=await this.loadImage(e.source)),e.source_bump&&e.source_bump!=""&&(e.bump=await this.loadImage(e.source_bump)),e}loadImage(e){return new Promise((t,i)=>{let r=new Image;r.onload=()=>t(r),r.crossOrigin="anonymous",r.src=this.assetPath+e,r.onerror=s=>i(s)}).catch(t=>{console.error("Unable to load image texture")})}async getColorSet(e){let t,i;if(typeof e=="string"&&(t=e),typeof e=="object"&&(t=e.colorset),this.colorsets.hasOwnProperty(t))return this.colorsets[t];let r=Ha[t];return i=e.texture||r.texture,r.texture=this.getTexture(i),r.texture=await this.ImageLoader(r.texture),e.material&&(r.texture.material=e.material),this.colorsets[t]=r,r}async makeColorSet(e={}){if(this.colorsets.hasOwnProperty(e.name))return this.colorsets[e.name];let t=Ha.white,i=Object.assign({},t,e),r=this.getTexture(i.texture);return i.texture=await this.ImageLoader(r),e.material&&(i.texture.material=e.material),i.name.toLowerCase()==="white"&&(i.name=`${Date.now()}`),this.colorsets[i.name]=i,i}getTexture(e){if(Array.isArray(e)){let t=[];for(let i=0,r=e.length;i<r;i++)t.push(this.getTexture(e[i]));return t}return cn.hasOwnProperty(e)?cn[e]:cn.none}}const pg={default:{name:"Solid Color",author:"MajorVictory",showColorPicker:!0,surface:"wood_tray",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"blue-felt":{name:"Blue Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"red-felt":{name:"Red Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#ff9494",bg:"#4d1e1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"green-felt":{name:"Green Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#97ff94",bg:"#244d1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},taverntable:{name:"Old Tavern Table",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},mahogany:{name:"(Mah-Hog-Any)",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},stainless:{name:"Stainless Steel",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cyberpunk:{name:"Neo-New-Future-City",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#3494A6",bg:"#440B28"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cagetown:{name:"Cage Town",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#D7A866",bg:"#282811"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]}},mg=o=>{let e;return function(){let t=this,i=arguments;e&&window.cancelAnimationFrame(e),e=window.requestAnimationFrame(function(){o.apply(t,i)})}},fg={assetPath:"./",framerate:1/60,sounds:!1,volume:100,color_spotlight:15720405,shadows:!0,theme_surface:"green-felt",sound_dieMaterial:"plastic",theme_customColorset:null,theme_colorset:"white",theme_texture:"",theme_material:"glass",gravity_multiplier:400,light_intensity:.7,baseScale:100,strength:1,iterationLimit:1e3,onRollComplete:()=>{},onRerollComplete:()=>{},onAddDiceComplete:()=>{},onRemoveDiceComplete:()=>{}};class gg{constructor(e,t={}){this.initialized=!1,this.container=document.querySelector(e),this.dimensions=new Fe(this.container.clientWidth,this.container.clientHeight),this.adaptive_timestep=!1,this.last_time=0,this.running=!1,this.rolling=!1,this.threadid,this.display={currentWidth:null,currentHeight:null,containerWidth:null,containerHeight:null,aspect:null,scale:null},this.cameraHeight={max:null,close:null,medium:null,far:null},this.scene=new Ap,this.world=new tg,this.dice_body_material=new Oi,this.sounds_table={},this.sounds_dice=[],this.lastSoundType="",this.lastSoundStep=0,this.lastSound=0,this.iteration,this.renderer,this.barrier,this.camera,this.light,this.light_amb,this.desk,this.box_body={},this.bodies=[],this.meshes=[],this.diceList=[],this.notationVectors=null,this.dieIndex=0,this.soundDelay=10,this.animstate="",this.selector={animate:!0,rotate:!0,intersected:null,dice:[]},Object.assign(this,fg,t),this.DiceColors=new dg({assetPath:this.assetPath}),this.DiceFactory=new Do({baseScale:this.baseScale}),this.DiceFactory.setBumpMapping(!0),this.surface=pg[this.theme_surface].surface}enableShadows(){this.shadows=!0,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}disableShadows(){this.shadows=!1,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}async initialize(){this.renderer=new yo({antialias:!0,alpha:!0}),this.container.appendChild(this.renderer.domElement),this.renderer.shadowMap.enabled=this.shadows,this.renderer.shadowMap.type=2,this.renderer.setClearColor(0,0),this.setDimensions(this.dimensions),this.world.gravity.set(0,0,-9.8*this.gravity_multiplier),this.world.broadphase=new Mo,this.world.solver.iterations=14,this.world.allowSleep=!0,this.makeWorldBox(),this.resizeWorld(),await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material}).catch(e=>{throw new Error("Unable to load theme")}),this.sounds&&await this.loadSounds().catch(e=>{throw new Error("Unable to load sounds")}),this.initialized=!0,this.renderer.render(this.scene,this.camera)}makeWorldBox(){Object.keys(this.box_body).length&&(this.world.removeBody(this.box_body.desk),this.world.removeBody(this.box_body.topWall),this.world.removeBody(this.box_body.bottomWall),this.world.removeBody(this.box_body.leftWall),this.world.removeBody(this.box_body.rightWall));const e=new Oi,t=new Oi;this.world.addContactMaterial(new Ni(e,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.world.addContactMaterial(new Ni(t,this.dice_body_material,{mass:0,friction:.6,restitution:1})),this.world.addContactMaterial(new Ni(this.dice_body_material,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.box_body.desk=new se({allowSleep:!1,mass:0,shape:new wr,material:e}),this.world.addBody(this.box_body.desk),this.box_body.topWall=new se({allowSleep:!1,mass:0,shape:new wr,material:t}),this.box_body.topWall.quaternion.setFromAxisAngle(new w(1,0,0),Math.PI/2),this.box_body.topWall.position.set(0,this.display.containerHeight*.93,0),this.world.addBody(this.box_body.topWall),this.box_body.bottomWall=new se({allowSleep:!1,mass:0,shape:new wr,material:t}),this.box_body.bottomWall.quaternion.setFromAxisAngle(new w(1,0,0),-Math.PI/2),this.box_body.bottomWall.position.set(0,-this.display.containerHeight*.93,0),this.world.addBody(this.box_body.bottomWall),this.box_body.leftWall=new se({allowSleep:!1,mass:0,shape:new wr,material:t}),this.box_body.leftWall.quaternion.setFromAxisAngle(new w(0,1,0),-Math.PI/2),this.box_body.leftWall.position.set(this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.leftWall),this.box_body.rightWall=new se({allowSleep:!1,mass:0,shape:new wr,material:t}),this.box_body.rightWall.quaternion.setFromAxisAngle(new w(0,1,0),Math.PI/2),this.box_body.rightWall.position.set(-this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.rightWall)}async loadTheme(e){let t;this.theme_customColorset?t=await this.DiceColors.makeColorSet(this.theme_customColorset):t=await this.DiceColors.getColorSet(e),this.DiceFactory.applyColorSet(t),this.colorData=t}async loadSounds(){let e={felt:7,wood_table:7,wood_tray:7,metal:9},t={coin:6,metal:12,plastic:15,wood:12};const i=this.colorData.texture.material.match(/wood|metal/g);if(this.sound_dieMaterial=i?this.colorData.texture.material:"plastic",!this.sounds_table.hasOwnProperty(this.surface)){this.sounds_table[this.surface]=[];let r=e[this.surface];for(let s=1;s<=r;++s){const n=await this.loadAudio(this.assetPath+"sounds/surfaces/surface_"+this.surface+s+".mp3");this.sounds_table[this.surface].push(n)}}if(!this.sounds_dice.hasOwnProperty("coin")){this.sounds_dice.coin=[];let r=t.coin;for(let s=1;s<=r;++s){const n=await this.loadAudio(this.assetPath+"sounds/dicehit/dicehit_coin"+s+".mp3");this.sounds_dice.coin.push(n)}}if(!this.sounds_dice.hasOwnProperty(this.sound_dieMaterial)){this.sounds_dice[this.sound_dieMaterial]=[];let r=t[this.sound_dieMaterial];for(let s=1;s<=r;++s){const n=await this.loadAudio(this.assetPath+"sounds/dicehit/dicehit_"+this.sound_dieMaterial+s+".mp3");this.sounds_dice[this.sound_dieMaterial].push(n)}}}loadAudio(e){return new Promise((t,i)=>{let r=new Audio;r.oncanplaythrough=()=>t(r),r.crossOrigin="anonymous",r.src=e,r.onerror=s=>i(s)}).catch(t=>{console.error("Unable to load audio")})}async updateConfig(e={}){Object.apply(this,e),this.theme_customColorset=e.theme_customColorset?e.theme_customColorset:null,e.theme_colorset&&(this.theme_colorset=e.theme_colorset),e.theme_texture&&(this.theme_texture=e.theme_texture),e.theme_material&&(this.theme_material=e.theme_material),(e.theme_colorset||e.theme_texture||e.theme_material||e.theme_customColorset)&&await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material})}setDimensions(e){switch(this.display.currentWidth=this.container.clientWidth/2,this.display.currentHeight=this.container.clientHeight/2,e?(this.display.containerWidth=e.x,this.display.containerHeight=e.y):(this.display.containerWidth=this.display.currentWidth,this.display.containerHeight=this.display.currentHeight),this.display.aspect=Math.min(this.display.currentWidth/this.display.containerWidth,this.display.currentHeight/this.display.containerHeight),this.display.scale=Math.sqrt(this.display.containerWidth*this.display.containerWidth+this.display.containerHeight*this.display.containerHeight)/13,this.makeWorldBox(),this.renderer.setSize(this.display.currentWidth*2,this.display.currentHeight*2),this.cameraHeight.max=this.display.currentHeight/this.display.aspect/Math.tan(10*Math.PI/180),this.cameraHeight.medium=this.cameraHeight.max/1.5,this.cameraHeight.far=this.cameraHeight.max,this.cameraHeight.close=this.cameraHeight.max/2,this.camera&&this.scene.remove(this.camera),this.camera=new Mt(20,this.display.currentWidth/this.display.currentHeight,1,this.cameraHeight.max*1.3),this.animstate){case"selector":this.camera.position.z=this.selector.dice.length>9?this.cameraHeight.far:this.selector.dice.length<6?this.cameraHeight.close:this.cameraHeight.medium;break;case"throw":case"afterthrow":default:this.camera.position.z=this.cameraHeight.far}this.camera.lookAt(new U(0,0,0));const t=Math.max(this.display.containerWidth,this.display.containerHeight);this.light&&this.scene.remove(this.light),this.light_amb&&this.scene.remove(this.light_amb),this.light=new Fp(this.color_spotlight,this.light_intensity),this.light.position.set(-t/2,t/2,t*3),this.light.target.position.set(0,0,0),this.light.distance=t*5,this.light.angle=Math.PI/4,this.light.castShadow=this.shadows,this.light.shadow.camera.near=t/10,this.light.shadow.camera.far=t*5,this.light.shadow.camera.fov=50,this.light.shadow.bias=.001,this.light.shadow.mapSize.width=1024,this.light.shadow.mapSize.height=1024,this.scene.add(this.light),this.light_amb=new Dp(16777147,6776689,this.light_intensity),this.scene.add(this.light_amb),this.desk&&this.scene.remove(this.desk);let i=new Cp;i.opacity=.5,this.desk=new Yt(new _s(this.display.containerWidth*6,this.display.containerHeight*6,1,1),i),this.desk.receiveShadow=this.shadows,this.scene.add(this.desk),this.renderer.render(this.scene,this.camera)}resizeWorld(){const e=mg(()=>{const t=this.renderer.domElement,i=this.container.clientWidth,r=this.container.clientHeight,s=t.width!==i||t.height!==r;return s&&this.setDimensions(new Fe(this.container.clientWidth,this.container.clientHeight)),s});window.addEventListener("resize",e)}vectorRand({x:e,y:t}){let i=Math.random()*Math.PI/5-Math.PI/5/2,r={x:e*Math.cos(i)-t*Math.sin(i),y:e*Math.sin(i)+t*Math.cos(i)};return r.x==0&&(r.x=.01),r.y==0&&(r.y=.01),r}getNotationVectors(e,t,i,r){let s=new Ua(e);for(let n in s.set){const a=this.DiceFactory.get(s.set[n].type);let l=s.set[n].num,c=s.set[n].op,u=s.set[n].sid,p=s.set[n].gid,h=s.set[n].glvl,f=s.set[n].func,g=s.set[n].args;for(let m=0;m<l;m++){let d=this.vectorRand(t);d.x/=r,d.y/=r;let v={x:this.display.containerWidth*(d.x>0?-1:1)*.9,y:this.display.containerHeight*(d.y>0?-1:1)*.9,z:Math.random()*200+200},x=Math.abs(d.x/d.y);x>1?v.y/=x:v.x*=x;let b=this.vectorRand(t);b.x/=r,b.y/=r;let _,M,S;a.shape!="d2"?(_={x:b.x*i,y:b.y*i,z:-10},M={x:-(Math.random()*d.y*5+a.inertia*d.y),y:Math.random()*d.x*5+a.inertia*d.x,z:0},S={x:Math.random(),y:Math.random(),z:Math.random(),a:Math.random()}):(_={x:b.x*i/10,y:b.y*i/10,z:3e3},M={x:12*a.inertia,y:1*a.inertia,z:0},S={x:1,y:1,z:Math.random(),a:Math.random()}),s.vectors.push({index:this.dieIndex++,type:a.type,op:c,sid:u,gid:p,glvl:h,func:f,args:g,pos:v,velocity:_,angle:M,axis:S})}}return s}swapDiceFace(e,t){const i=this.DiceFactory.get(e.notation.type);if(e.resultReason="forced",i.shape=="d4"){this.swapDiceFace_D4(e,t);return}i.values;let r=parseInt(e.getLastValue().value);t=parseInt(t),e.notation.type=="d10"&&r==0&&(r=10),e.notation.type=="d100"&&r==0&&(r=100),e.notation.type=="d100"&&r>0&&r<10&&(r*=10),e.notation.type=="d10"&&t==0&&(t=10),e.notation.type=="d100"&&t==0&&(t=100),e.notation.type=="d100"&&t>0&&t<10&&(t*=10);let s=i.values.indexOf(r),n=i.values.indexOf(t);if(s<0||n<0||s==n)return;let a=e.geometry.clone(),l=[],c=[],u=2;i.shape=="d10"&&(u=1);let p,h=n+u;i.shape!="d2"?(p=s+u,h=n+u):(p=s+1,h=n+1);for(var f=0,g=a.groups.length;f<g;++f){const m=a.groups[f].materialIndex;if(m==p){l.push(f);continue}if(m==h){c.push(f);continue}}if(!(l.length<=0||c.length<=0)){for(let m=0,d=c.length;m<d;m++)a.groups[c[m]].materialIndex=p;for(let m=0,d=l.length;m<d;m++)a.groups[l[m]].materialIndex=h;e.geometry=a,e.result=[]}}swapDiceFace_D4(e,t){const i=this.DiceFactory.get(e.notation.type);let r=parseInt(e.getLastValue().value);if(t=parseInt(t),!(r>=1&&r<=4))return;let s=t-r,n=e.geometry.clone();for(let a=0,l=n.groups.length;a<l;++a){const c=n.groups[a];let u=c.materialIndex;if(u!=0){for(u+=s-1;u>4;)u-=4;for(;u<1;)u+=4;c.materialIndex=u+1}}s!=0&&(s<0&&(s+=4),e.material=this.DiceFactory.createMaterials(i,0,0,!1,s)),e.geometry=n}spawnDice(e,t=!1){const{pos:i,axis:r,angle:s,velocity:n}=e;let a;if(t)a=t,a.stopped=0,this.world.removeBody(a.body);else{if(a=this.DiceFactory.create(e.type,this.colorData),!a)return;a.notation=e,a.result=[],a.stopped=0,a.castShadow=this.shadows,this.scene.add(a),this.diceList.push(a)}a.body=new se({allowSleep:!0,sleepSpeedLimit:75,sleepTimeLimit:.9,mass:a.mass,shape:a.geometry.cannon_shape,material:this.dice_body_material}),a.body.type=se.DYNAMIC,a.body.position.set(i.x,i.y,i.z),a.body.quaternion.setFromAxisAngle(new w(r.x,r.y,r.z),r.a*Math.PI*2),a.body.angularVelocity.set(s.x,s.y,s.z),a.body.velocity.set(n.x,n.y,n.z),a.body.linearDamping=.1,a.body.angularDamping=.1,a.body.diceShape=a.shape,a.body.sleepState=0,a.body.addEventListener("collide",this.eventCollide.bind(this)),this.world.addBody(a.body)}eventCollide({body:e,target:t}){if(this.animstate=="simulate"||!this.sounds||!e||this.volume<=0)return;let i=Date.now(),r=e.mass>0?"dice":"table";if(!((this.lastSoundStep==e.world.stepnumber||this.lastSound>i)&&r!="dice")&&!((this.lastSoundStep==e.world.stepnumber||this.lastSound>i)&&r=="dice"&&this.lastSoundType=="dice")){if(e.mass>0){let s=e.velocity.length();if(s<250)return;let n;e.diceShape==="d2"?n=this.sounds_dice.coin[Math.floor(Math.random()*this.sounds_dice.coin.length)]:n=this.sounds_dice[this.sound_dieMaterial][Math.floor(Math.random()*this.sounds_dice[this.sound_dieMaterial].length)],n&&(n.volume=Math.min(s/8e3,this.volume/100),n.play().catch(a=>{})),this.lastSoundType="dice"}else{let s=t.velocity.length();if(s<250)return;let n=this.surface,a=this.sounds_table[n],l=a[Math.floor(Math.random()*a.length)];l&&(l.volume=Math.min(s/8e3,this.volume/100),l.play().catch(c=>{})),this.lastSoundType="table"}this.lastSoundStep=e.world.stepnumber,this.lastSound=i+this.soundDelay}}checkForRethrow(e){return e.notation.func&&e.notation.func.toLowerCase(),!1}throwFinished(){const e=this.iteration>this.iterationLimit;for(let t=0,i=this.diceList.length;t<i;++t){const r=this.diceList[t],s=se.SLEEPING;if(r.body.sleepState<s&&!e)return!1;if(r.body.sleepState==s||e){if(r.body.type===se.KINEMATIC)continue;let n=!1;if(r.result.length==0?(r.storeRolledValue(r.resultReason),n=this.checkForRethrow(r)):r.result.length>0&&r.rerolling&&(r.rerolling=!1,r.storeRolledValue("reroll"),n=this.checkForRethrow(r)),n)return r.rerolls+=1,r.rerolling=!0,r.body.wakeUp(),r.body.type=se.DYNAMIC,r.body.angularVelocity=new w(25,25,25),r.body.velocity=new w(0,0,3e3),!1;r.rerolling=!1,r.body.type=se.KINEMATIC}}return!0}simulateThrow(){for(this.animstate="simulate",this.iteration=0,this.rolling=!0;!this.throwFinished(!0);)++this.iteration,this.world.step(this.framerate)}animateThrow(e,t){this.animstate="throw";let i=Date.now();this.last_time=this.last_time||i-this.framerate*1e3;let r=(i-this.last_time)/1e3;++this.iteration;let s=Math.floor(r/this.framerate);for(let n=0;n<s;n++)this.world.step(this.framerate),++this.steps;for(let n in this.scene.children){let a=this.scene.children[n];a.body!=null&&(a.position.copy(a.body.position),a.quaternion.copy(a.body.quaternion))}if(this.renderer.render(this.scene,this.camera),this.last_time=this.last_time+s*this.framerate*1e3,this.running==e&&this.throwFinished()){this.running=!1,this.rolling=!1,t&&t.call(this,this.notationVectors),this.running=Date.now(),this.animateAfterThrow(this.running);return}this.running==e&&((n,a,l,c,u)=>{!l&&r<this.framerate?setTimeout(()=>{requestAnimationFrame(()=>{n.call(this,a,c,u)})},(this.framerate-r)*1e3):requestAnimationFrame(()=>{n.call(this,a,c,u)})}).bind(this)(this.animateThrow,e,this.adaptive_timestep,t)}animateAfterThrow(e){this.animstate="afterthrow";let t=Date.now(),i=(t-this.last_time)/1e3;i>3&&(i=this.framerate),this.running=!1,this.last_time=t,this.renderer.render(this.scene,this.camera),this.running==e&&((r,s,n)=>{!n&&i<this.framerate?setTimeout(()=>{requestAnimationFrame(()=>{r.call(this,s)})},(this.framerate-i)*1e3):requestAnimationFrame(()=>{r.call(this,s)})}).bind(this)(this.animateAfterThrow,e,this.adaptive_timestep)}startClickThrow(e){this.rolling&&(this.clearDice(),this.rolling=!1);let t={x:(Math.random()*2-.5)*this.display.currentWidth,y:-(Math.random()*2-.5)*this.display.currentHeight},i=Math.sqrt(t.x*t.x+t.y*t.y)+100,r=(Math.random()+3)*i*this.strength;return this.getNotationVectors(e,t,r,i)}clearDice(){this.running=!1;let e;for(;e=this.diceList.pop();)this.scene.remove(e),e.body&&this.world.removeBody(e.body);this.renderer.render(this.scene,this.camera),setTimeout(()=>{this.renderer.render(this.scene,this.camera)},100)}getDiceResults(e){if(e!==void 0)return{type:this.diceList[e].shape,sides:parseInt(this.diceList[e].shape.substring(1)),id:e,...this.diceList[e].result.at(-1)};let t=0;const i=this.notationVectors.constant?parseInt(`${this.notationVectors.op}${this.notationVectors.constant}`):0;let r=i;return{notation:this.notationVectors.notation,sets:this.notationVectors.set.map(s=>{const n=t+s.num-1;let a=0;const l=[];for(let u=t;u<=n;u++){if(this.diceList[t].result.at(-1).reason==="remove"){t++;continue}l.push({type:s.type,sides:parseInt(s.type.substring(1)),id:t,...this.diceList[t].result.at(-1)}),a+=this.diceList[t].result.at(-1).value,t++}const c={num:s.num,type:s.type,sides:parseInt(s.type.substring(1)),rolls:l,total:a};return r+=a,c}),modifier:i,total:r}}async roll(e){if(this.notationVectors=this.startClickThrow(e),this.notationVectors)return new Promise((t,i)=>{this.rollDice(()=>{const r=this.getDiceResults();this.onRollComplete(r);const s=new CustomEvent("rollComplete",{detail:r});document.dispatchEvent(s),t(r)})})}async reroll(e){return this.rolling=!0,this.running=Date.now(),this.iteration=0,new Promise((t,i)=>{e.forEach(r=>{const s=this.diceList[r];s.rerolls+=1,s.rerolling=!0,s.body.wakeUp(),s.body.type=se.DYNAMIC,s.body.angularVelocity=new w(25,25,25),s.body.velocity=new w(0,0,3e3)}),this.animateThrow(this.running,()=>{const r=e.map(n=>this.getDiceResults(n));this.onRerollComplete(r);const s=new CustomEvent("rerollComplete",{detail:r});document.dispatchEvent(s),t(r)})})}async add(e){let t=this.diceList.length;if(!t)return this.roll(e);let i=this.startClickThrow(e),r=[];for(let s=0,n=i.vectors.length;s<n;++s)this.spawnDice(i.vectors[s]);this.simulateThrow(),this.steps=0,this.iteration=0;for(let s=0,n=i.vectors.length;s<n;++s){const a=t+s;!this.diceList[a]||(this.spawnDice(i.vectors[s],this.diceList[a]),r.push(a))}if(i.result&&i.result.length>0)for(let s=0;s<i.result.length;s++){const n=t+s;let a=this.diceList[n];!a||a.getLastValue().value!=i.result[s]&&this.swapDiceFace(a,i.result[s])}return this.notationVectors=Ua.mergeNotation(this.notationVectors,i),new Promise((s,n)=>{const a=()=>{const l=r.map(u=>this.getDiceResults(u));this.onAddDiceComplete(l);const c=new CustomEvent("addDiceComplete",{detail:l});document.dispatchEvent(c),s(l)};this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,a)})}async remove(e){return new Promise((t,i)=>{const r=[];e.forEach(n=>{const a=this.diceList[n];a.body&&this.world.removeBody(a.body),this.scene.remove(a),a.storeRolledValue("remove"),r.push(this.getDiceResults(n))}),this.renderer.render(this.scene,this.camera),this.onRemoveDiceComplete(r);const s=new CustomEvent("removeDiceComplete",{detail:r});document.dispatchEvent(s),t(r)})}rollDice(e){if(this.notationVectors.error){e.call(this);return}this.clearDice();for(let t=0,i=this.notationVectors.vectors.length;t<i;++t)this.spawnDice(this.notationVectors.vectors[t]);this.simulateThrow(),this.steps=0,this.iteration=0;for(let t=0,i=this.diceList.length;t<i;++t)!this.diceList[t]||this.spawnDice(this.notationVectors.vectors[t],this.diceList[t]);if(this.notationVectors.result&&this.notationVectors.result.length>0)for(let t=0;t<this.notationVectors.result.length;t++){let i=this.diceList[t];!i||i.getLastValue().value!=this.notationVectors.result[t]&&this.swapDiceFace(i,this.notationVectors.result[t])}this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,e)}}const un=NaN,vg=Number.isFinite(un)&&un>0?un:2e3;function hn({playerEvent:o,modalState:e,handleModalClose:t=()=>{},revealedCard:i,card:r}){const s=i??r,n=!!i;function a(c,u){if(typeof WebGLRenderingContext>"u")return!1;const p=document.querySelector("#scene-container");if(!p||p.clientWidth===0||p.clientHeight===0)return!1;try{const h=new gg("#scene-container",{onRollComplete:u});return h.initialize().then(()=>{const f=c.actionType===Ge.playerMove?c.moveRoll:c.damageRoll;return h.roll((f==null?void 0:f.length)===1?`1d4@${f[0]}`:f?`1d6@${f[0]},1d4@${f[1]}`:"1d6,1d4")}).then(u).catch(u),!0}catch{return!1}}we.useEffect(()=>{if(n)return;let c=!1,u;const p=()=>{c||(c=!0,t())},h=window.setTimeout(()=>{const f=o.animateDice!==!1&&(o.actionType===Ge.playerMove||o.actionType===Ge.playerAttack);f&&a(o,p)||(u=window.setTimeout(p,f?0:vg))},0);return()=>{window.clearTimeout(h),u!==void 0&&window.clearTimeout(u)}},[o,t,n]);const l=()=>{if(s)return I.jsxs(nt.Fragment,{children:[I.jsx(He,{component:"img",sx:{height:360,maxWidth:"100%",objectFit:"contain",marginTop:2},alt:s.name,src:`/shadow_hunters/assets/game/${s.drawDeck}/${s.name}.jpg`}),n?I.jsx(Re,{variant:"contained",fullWidth:!0,sx:{marginTop:2},onClick:t,children:"Ok"}):void 0]});if(o.animateDice===!1)return I.jsx(ds,{sx:{width:"100%",height:"5px",marginTop:2,marginX:" -16px"},"aria-label":"Loading…"});switch(o.actionType){case Ge.playerAttack:case Ge.playerMove:return I.jsx(He,{id:"scene-container",sx:{width:460,height:240}});default:return I.jsx(ds,{sx:{width:"100%",height:"5px",marginTop:2,marginX:" -16px"},"aria-label":"Loading…"})}};if(e.openModal)return I.jsx(Hi,{open:e.openModal,children:I.jsxs(He,{role:"status",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:500,p:2,sx:{overflow:"hidden"},children:[e.modalMessage?I.jsx(He,{sx:{width:532,paddingTop:"8px",paddingLeft:"16px",marginX:"-16px",marginTop:"-16px",backgroundColor:lt.palette.background.default},children:I.jsx(It,{variant:"h5",sx:{width:"100%"},children:e.modalMessage})}):void 0,l()]})})}const bi={marginRight:2,minHeight:"54px",paddingX:"24px",fontSize:"1.3125rem"};function xg({handleChoice:o=n=>n,handleAttack:e=n=>n,handleMove:t=()=>{},handleEndTurn:i=()=>{},canAttack:r=!1,onQuit:s}){var C,y,E,D;const n=Bi(P=>P.connection),a=Bi(P=>P.peer),l=n.gameState.lobby.playerList.filter(P=>P.user.id===a.id)[0],[c,u]=we.useState(!1),[p,h]=we.useState(!1),f=we.useRef(void 0),g=$a(),m=Za(),d=n.gameState.pendingLoot;we.useEffect(()=>{if(!(n.gameState.started&&!n.gameState.gameEnded&&!n.gameState.disconnectedPlayer&&n.gameState.currentPlayer===a.id&&!(l!=null&&l.piece.dead))){f.current=void 0;return}f.current!==n.gameState.currentPlayer&&(f.current=n.gameState.currentPlayer,u(!0))},[n.gameState.currentPlayer,n.gameState.disconnectedPlayer,n.gameState.gameEnded,n.gameState.started,a.id,l==null?void 0:l.piece.dead]);const v=()=>{o({choice:{type:be.reveal,card:{...l.piece.character,drawDeck:ps.characters},target:a.id},playerId:a.id,actionType:Ge.playerChoice})},x=()=>{var O;if(["chainOfForbiddenCurse","lightning","dynamiteNurse","demolish","murderRay","graveDigger"].includes(((O=l.piece.character.ability)==null?void 0:O.name)??"")){h(!0);return}g(Ri({playerId:a.id,actionType:Ge.playerAbility}))},b=P=>{const O=l.piece.character.ability,z=O.name==="lightning"?In(1,6):O.name==="demolish"?In(1,4):void 0;h(!1),g(Ri({playerId:a.id,actionType:Ge.playerAbility,targetId:P,roll:z}))},_=n.gameState.lobby.playerList.filter(P=>{var O;if(P.piece.dead)return!1;if(((O=l.piece.character.ability)==null?void 0:O.name)==="murderRay"){const z=n.gameState.lobby.decks[ps.areas].cards.findIndex(R=>R.name==="Underworld Gate");return P.piece.position===z}return P.user.id!==a.id}),M=Object.values(n.gameState.lobby.discard).flatMap(P=>P.cards),S=()=>{if(s){s();return}if(n.peerId===n.gameState.hostId){m("/");return}g(Ja(Ka.gameState)),m("/")};return I.jsxs(wn,{sx:{bottom:16,left:-16,position:"absolute",zIndex:1200,paddingTop:5,paddingLeft:5},display:"flex",spacing:"2px",justifyContent:"center",alignItems:"center",children:[I.jsxs(He,{children:[c?I.jsx(we.Fragment,{children:(d==null?void 0:d.killerId)===a.id?I.jsxs(we.Fragment,{children:[I.jsx(Re,{sx:bi,variant:"contained",onClick:()=>{h(!0)},children:"Take equipment"}),I.jsx(Re,{sx:bi,variant:"contained",onClick:()=>{g(Ri({playerId:a.id,actionType:Ge.playerAbility,itemName:""}))},children:"Discard equipment"})]}):n.gameState.currentPlayer===a.id&&!n.gameState.pendingCounterattack?I.jsxs(we.Fragment,{children:[l.piece.moved?void 0:I.jsxs(Re,{sx:bi,variant:"contained",onClick:()=>{t()},children:[I.jsx(sl,{style:{marginRight:16,marginTop:"-4px"}}),"Move"]}),l.piece.attacked||!r?void 0:l.piece.moved?I.jsxs(Re,{sx:bi,variant:"contained",onClick:()=>{e()},children:[I.jsx(nl,{style:{marginRight:16,marginTop:"-4px"}}),"Attack"]}):void 0,l.piece.revealed?void 0:I.jsxs(Re,{sx:bi,variant:"contained",onClick:()=>{v()},children:[I.jsx(al,{style:{marginRight:16,marginTop:"-4px"}})," Reveal Character"]}),!l.piece.revealed||l.piece.abilityUsed||((C=l.piece.character.ability)==null?void 0:C.target)===Cr.attacker||!l.piece.character.ability||l.piece.character.ability.passive?void 0:I.jsxs(Re,{sx:bi,variant:"contained",onClick:()=>{x()},children:[I.jsx(ol,{style:{marginRight:16,marginTop:"-4px"}})," Use Ability"]}),l.piece.moved&&!l.piece.attacked?I.jsxs(Re,{sx:bi,variant:"contained",color:"info",onClick:()=>{i()},children:[I.jsx(ll,{style:{marginRight:16,marginTop:"-4px"}}),"End Turn"]}):void 0]}):void 0}):void 0,I.jsxs(Re,{sx:bi,onClick:()=>S(),color:"error",variant:"contained",children:[I.jsx(cl,{style:{marginRight:16,marginTop:"-4px"}})," Quit"]})]}),I.jsxs(Hi,{open:p,onClose:()=>h(!1),children:[I.jsxs(yn,{children:["Choose ",((y=l==null?void 0:l.piece.character.ability)==null?void 0:y.name)==="graveDigger"?"equipment":"a target"," for ",(E=l==null?void 0:l.piece.character.ability)==null?void 0:E.name]}),I.jsx(bn,{children:I.jsx(qt,{children:(d==null?void 0:d.killerId)===a.id?d==null?void 0:d.items.map(P=>I.jsx(Ts,{onClick:()=>{h(!1),g(Ri({playerId:a.id,actionType:Ge.playerAbility,itemName:P.name}))},children:I.jsx(Fi,{primary:P.name})},`${P.drawDeck}-${P.name}`)):((D=l==null?void 0:l.piece.character.ability)==null?void 0:D.name)==="graveDigger"?M.filter(P=>P.isItem).map(P=>I.jsx(Ts,{onClick:()=>{h(!1),g(Ri({playerId:a.id,actionType:Ge.playerAbility,itemName:P.name}))},children:I.jsx(Fi,{primary:P.name})},`${P.drawDeck}-${P.name}`)):_.map(P=>I.jsx(Ts,{onClick:()=>b(P.user.id),children:I.jsx(Fi,{primary:P.user.userName})},P.user.id))})})]})]})}const Wa=750,hs=o=>!!(o!=null&&o.user.isBot),ur=(o,e)=>o.lobby.playerList.find(t=>t.user.id===e),vs=(o,e)=>o.piece.character.category!==ms.neutral&&e.piece.character.category===o.piece.character.category;function Po(o,e,t){var r,s,n,a;if(t.piece.dead||t.user.id===e.user.id)return!1;if((s=(r=o.botHostilities)==null?void 0:r[e.user.id])!=null&&s.includes(t.user.id))return!0;if(t.piece.revealed)return t.piece.character.category!==e.piece.character.category;const i=(a=(n=o.botFactionKnowledge)==null?void 0:n[e.user.id])==null?void 0:a[t.user.id];return i!==void 0&&i!==e.piece.character.category}function _g(o,e,t=o.lobby.playerList){return t.filter(i=>!i.piece.dead&&i.user.id!==e.user.id).sort((i,r)=>{const s=vs(e,i)?-100:i.piece.character.category===ms.neutral?1:2;return(vs(e,r)?-100:r.piece.character.category===ms.neutral?1:2)-s||r.piece.damage-i.piece.damage})[0]}function xs(o,e,t=o.lobby.playerList){return _g(o,e,t.filter(i=>Po(o,e,i)))}function yg(o,e,t){var i,r;return e.piece.character.category===ms.neutral?!1:t.piece.revealed&&t.piece.character.category===e.piece.character.category?!0:((r=(i=o.botFactionKnowledge)==null?void 0:i[e.user.id])==null?void 0:r[t.user.id])===e.piece.character.category}function bg(o,e,t){const i=o.lobby.playerList.filter(n=>!n.piece.dead).length,r=Math.floor((o.completedTurns??0)/Math.max(1,i));if(r<=5)return;const s=t.filter(n=>!n.piece.dead&&n.user.id!==e.user.id&&!yg(o,e,n)&&!Po(o,e,n));return r===6?s.filter(n=>n.piece.damage>0).sort((n,a)=>a.piece.damage-n.piece.damage)[0]:s.sort((n,a)=>a.piece.damage-n.piece.damage)[0]}function Io(o,e,t=o.lobby.playerList){const i=t.filter(r=>!r.piece.dead&&r.user.id!==e.user.id);return i[Math.floor(Math.random()*i.length)]}function wg(o){return(o.damage??0)>0&&[Cr.player,Cr.both].includes(o.damageTarget??Cr.player)||o.name==="Spiritual Doll"?!0:["Hermit's Anger 1","Hermit's Anger 2","Hermit's Blackmail 1","Hermit's Blackmail 2","Hermit's Bully","Hermit's Exorcism","Hermit's Greed 1","Hermit's Greed 2","Hermit's Slap 1","Hermit's Slap 2","Hermit's Spell","Hermit's Tough Lesson of Love"].includes(o.name)}function Va(o,e){return o.lobby.playerList.filter(t=>!t.piece.dead&&t.user.id!==e.user.id&&vs(e,t)&&t.piece.damage>0).sort((t,i)=>i.piece.damage-t.piece.damage)[0]}function Mg(o){return{playerId:o.user.id,actionType:Ge.playerMove,moveRoll:wi([6,4])}}function Sg(o,e){const t=e.piece.character.ability;if(!(!t||t.automatic||e.piece.abilityUsed||e.piece.abilityBlocked||e.piece.moved)){if(["mothersLove","stigmata"].includes(t.name)&&e.piece.damage>0)return{playerId:e.user.id,actionType:Ge.playerAbility};if(t.name==="graveDigger"){const i=Object.values(o.lobby.discard).flatMap(r=>r.cards).find(r=>r.isItem);return i?{playerId:e.user.id,actionType:Ge.playerAbility,itemName:i.name}:void 0}if(t.target===Cr.player){const i=o.lobby.decks.areas.cards.findIndex(s=>s.name==="Underworld Gate"),r=t.name==="murderRay"?xs(o,e,o.lobby.playerList.filter(s=>s.piece.position===i)):xs(o,e);if(r)return{playerId:e.user.id,actionType:Ge.playerAbility,targetId:r.user.id,roll:t.name==="lightning"?6:t.name==="demolish"?4:void 0}}}}function Eg(o){var i;if(o.gameEnded)return;if(o.pendingLoot){const r=ur(o,o.pendingLoot.killerId);return hs(r)?{kind:"ability",event:{playerId:r.user.id,actionType:Ge.playerAbility,itemName:(i=o.pendingLoot.items[0])==null?void 0:i.name}}:void 0}if(o.pendingCounterattack){const r=ur(o,o.pendingCounterattack.responderId),s=ur(o,o.pendingCounterattack.attackerId);return hs(r)&&s?{kind:"attack",event:{playerId:r.user.id,actionType:Ge.playerAttack,targets:[s.user],damageRoll:mn(r)?[4]:[6,1],modifiers:pn(r)}}:void 0}const e=ur(o,o.currentPlayer);if(!hs(e)||e.piece.dead)return;const t=Sg(o,e);if(t)return{kind:"ability",event:t};if(!e.piece.moved)return{kind:"move",event:Mg(e)};if(!e.piece.attacked){const r=Qa(o,e),s=xs(o,e,r)??bg(o,e,r)??(eo(e)?Io(o,e,r):void 0);return s?{kind:"attack",event:{playerId:e.user.id,actionType:Ge.playerAttack,targets:to(e)?r.map(n=>n.user):[s.user],damageRoll:mn(e)?[4]:[6,1],modifiers:pn(e)}}:{kind:"endTurn",event:{playerId:e.user.id,actionType:Ge.playerEndTurn}}}}function Tg(o,e){var i,r,s;const t=ur(o,e.choice.type===be.weirdWoods?e.playerId:e.choice.target);if(hs(t))switch(e.choice.type){case be.equipment:{const n=o.lobby.playerList.find(l=>l.user.id!==t.user.id&&l.piece.items.length>0),a=n==null?void 0:n.piece.items[0];return n&&a?`${n.user.id},${a.name}`:"skip"}case be.hermitGreed:{const n=t.piece.items[0];return n?`${t.user.id},${n.name}`:"damage"}case be.move:return JSON.stringify(wi([6,4]).reduce((n,a,l,c)=>l===1&&c[0]+a===7?[6,4]:[...n,a],[]));case be.rerollMovement:return JSON.stringify(wi([6,4]));case be.teleport:return"normal";case be.area:return(i=o.lobby.decks.areas.cards[0])==null?void 0:i.name;case be.reveal:return"yes";case be.draw:return Va(o,t)||t.piece.damage>0?"green":"black";case be.target:{const n=/Aid|Huddle|Nurturance/i.test(e.choice.card.name),a=xs(o,t);if(wg(e.choice.card))return((r=a??Io(o,t))==null?void 0:r.user.id)??"skip";if(/^Hermit's /i.test(e.choice.card.name)){const l=o.lobby.playerList.find(c=>{var u,p;return c.user.isBot&&c.user.id!==t.user.id&&!c.piece.dead&&((p=(u=o.botFactionKnowledge)==null?void 0:u[t.user.id])==null?void 0:p[c.user.id])===void 0});return(l==null?void 0:l.user.id)??"skip"}return((s=n?Va(o,t):a)==null?void 0:s.user.id)??"skip"}case be.weirdWoods:{const n=ur(o,e.choice.target);return n&&vs(t,n)&&n.piece.damage>0?"heal":"damage"}case be.showCard:return t.user.id;default:return}}function Ag({disconnectedPlayer:o,isHost:e,onQuit:t,onReplaceWithBot:i,onEndGame:r}){if(!o)return;const s=o.isHost?"The host":o.playerName;return I.jsxs(Hi,{open:!0,"aria-labelledby":"disconnect-dialog-title",children:[I.jsx(yn,{id:"disconnect-dialog-title",children:"Game Paused"}),I.jsxs(bn,{children:[I.jsxs(It,{children:[s," disconnected. The game is paused for all players."]}),o.isHost&&!e?I.jsx(It,{sx:{marginTop:1},children:"Attempting to reconnect to the host automatically."}):void 0]}),I.jsxs(jo,{children:[I.jsx(Re,{onClick:t,variant:"contained",children:"Quit"}),e&&!o.isHost?I.jsxs(I.Fragment,{children:[I.jsx(Re,{onClick:i,variant:"contained",children:"Replace with Bot"}),I.jsx(Re,{onClick:r,variant:"contained",color:"error",children:"End Game"})]}):void 0]})]})}const Cg=o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Lg(o,e){const t=o.match(/^gave Hermit Card to .+? and (.+)$/);if(!t)return;let i=t[1];if(e){const r=Cg(e);i=i.replace(new RegExp(`^${r} `),""),i=i.replace(new RegExp(`had no effect on ${r}\\.?$`),"no effect."),i=i.replace(new RegExp(` (?:to|from|on) ${r}(\\.)?$`),"$1")}return i}function Rg(o,e){var n,a;const t=((n=o.find(l=>l.user.id===e.playerId))==null?void 0:n.user.userName)??"A player";if(e.revealedCard)return`${t} revealed their character.`;const i=e,r=i.choice,s=r==null?void 0:r.card.name;if(s!=null&&s.startsWith("Hermit's ")){const l=(a=o.find(p=>p.user.id===i.result))==null?void 0:a.user.userName,c=s.replace("Hermit's ","").replace(/\s+\d+$/,""),u=e.message?Lg(e.message,l):void 0;return`${t}: ${c}${l?` → ${l}`:""}${u?` — ${u}`:"."}`}if(e.message)return`${t} ${e.message}`;switch(e.actionType){case"PlayerAttack":return`${t} is making an attack.`;case"PlayerChoice":return`${t} is making a choice.`;case"PlayerDeath":return`${t} died.`;case"PlayerMove":return`${t} is moving.`;case"PlayerDraw":return`${t} drew a card.`;case"PlayerAbility":return`${t} is using an ability.`;case"PlayerEndTurn":return`${t} ended their turn.`;default:return}}const Dg=we.lazy(()=>Jo(()=>import("./GameRender-BEL1Q-gS.js"),__vite__mapDeps([0,1,2,3])));function zg(){var Q,ue,Ce;const o=Za(),e=Bi(N=>N.peer),t=Bi(N=>N.connection),i=$a(),[r,s]=we.useState({openModal:!1,modalMessage:""}),[n,a]=we.useState({openModal:!1,modalMessage:""}),[l,c]=we.useState([]),[u,p]=we.useState(),[h,f]=we.useState(),[g,m]=we.useState(!1),[d,v]=we.useState(!1),[x,b]=we.useState(1),_=we.useRef(!1),M=we.useRef(void 0),S=we.useRef(!1),C=we.useRef(void 0),y=t.gameState.pendingCounterattack;we.useEffect(()=>{!t.gameState.started||!e.id||kr.getPeer()||i(hl(e.id))},[t.gameState.started,i,e.id]),we.useEffect(()=>{var ke;const N=t.gameState.disconnectedPlayer,ae=t.gameState.hostId;if(!(N!=null&&N.isHost)||e.id===ae||!e.id||!ae||!((ke=e.userData)!=null&&ke.userName)||!e.userData.color)return;let fe=!0;const ge=()=>{!fe||S.current||!kr.getPeer()||(S.current=!0,Promise.resolve(i(Zo(ae,{id:e.id,userName:e.userData.userName,color:e.userData.color}))).finally(()=>{S.current=!1}))};ge();const oe=window.setInterval(ge,3e3);return()=>{fe=!1,window.clearInterval(oe)}},[t.gameState.disconnectedPlayer,t.gameState.hostId,i,e.id,(Q=e.userData)==null?void 0:Q.color,(ue=e.userData)==null?void 0:ue.userName]),we.useEffect(()=>{const N=t.gameState.lobby.playerList.find(fe=>fe.user.id===t.gameState.currentPlayer);if(!(t.gameState.started&&!t.gameState.gameEnded&&!t.gameState.disconnectedPlayer&&t.gameState.currentPlayer===e.id&&!(N!=null&&N.piece.dead))){C.current=void 0,v(!1);return}C.current===t.gameState.currentPlayer||t.playerEvents.length>0||(C.current=t.gameState.currentPlayer,v(!0))},[t.gameState.currentPlayer,t.gameState.disconnectedPlayer,t.gameState.gameEnded,t.gameState.lobby.playerList,t.gameState.started,t.playerEvents.length,e.id]),we.useEffect(()=>{(!t.id&&t.gameState.hostId!==e.id||!t.gameState.started)&&o("/"),kr.setCallback(k)}),we.useEffect(()=>{if(t.gameState.hostId!==t.peerId||t.gameState.disconnectedPlayer||_.current||t.playerEvents.length>0||u||l.length>0||r.openModal)return;const N=Eg(t.gameState);if(!N)return;const ae=window.setTimeout(()=>{N.kind==="move"?i(Fn(N.event)):N.kind==="attack"?i(zn(N.event)):N.kind==="endTurn"?i(kn(N.event)):i(Ri(N.event))},t.gameState.botThinkTimeMs??Wa);return()=>window.clearTimeout(ae)},[t.gameState,t.playerEvents.length,i,e.id,u,l.length,r.openModal]);const E=()=>{s({openModal:!1,modalMessage:""})},D=we.useCallback(()=>{a({openModal:!1,modalMessage:""}),i(qo())},[i]),P=()=>{if(!h)return;const N={...h,result:"dismissed"};f(void 0),i(Es(N))},O=N=>{switch(N.choice.type){case be.equipment:return N.playerId===N.choice.target?"Choose Equipment to Give.":"Choose Equipment to Steal.";case be.hermitGreed:return"Give an item or take damage.";case be.hermitFaction:return"Choose its result.";case be.move:return"Choose Your Movement Roll.";case be.rerollMovement:return"Reroll movement.";case be.teleport:return"Move normally or teleport to an adjacent area.";case be.area:return"Choose Your Destination.";case be.reveal:return"Reveal Your Character?";case be.showCard:return"Show Your Character Card.";case be.target:return"Choose Your Target.";case be.draw:return"Choose Deck to Draw From.";case be.weirdWoods:return"Choose an effect for the targeted player.";case be.counterattack:return"You were attacked.";default:return"default choice text"}},z=N=>Qa(t.gameState,N).map(ae=>ae.user),R=N=>{var fe;const ae=t.gameState.lobby.playerList.filter(ge=>ge.user.id===t.gameState.currentPlayer)[0];if(N)s({openModal:!1,modalMessage:""}),((fe=t.gameState.pendingCounterattack)==null?void 0:fe.responderId)===ae.user.id&&p(void 0),i(zn({targets:N,damageRoll:mn(ae)?wi([4]):wi([6,4]),modifiers:pn(ae),playerId:ae.user.id,actionType:Ge.playerAttack}));else{if(ae.piece.items.length>0){const oe=ae.piece.items.map(ke=>Ko(t.gameState,ke));if(oe.filter(ke=>ke.choice).length>0){const ke=oe.filter(Te=>Te.choice)[0];k({choice:ke.choice,playerId:ae.user.id,actionType:Ge.playerChoice});return}}const ge=z(ae);if(to(ae)){ge.length>0&&R(ge);return}if(ge.length===0)return;s({modalMessage:"Choose Your Target.",targets:ge,hasSword:eo(ae),openModal:!0})}},k=N=>{if(!t.gameState.disconnectedPlayer&&!(N.choice.type===be.showCard&&N.choice.target!==e.id)){if(N.choice.type===be.showCard&&!N.result){f(N);return}if(N.choice.type===be.counterattack&&N.result==="skip"){p(void 0),s({openModal:!1,modalMessage:""}),i(Ri({playerId:N.playerId,actionType:Ge.playerAbility,skipCounterattack:!0}));return}N.result?(p(void 0),s({openModal:!1,modalMessage:""}),i(Es(N))):c(ae=>[...ae,N])}};we.useEffect(()=>{if(!y||y.responderId!==e.id){M.current=void 0;return}const N=`${y.responderId}:${y.attackerId}`;M.current!==N&&(M.current=N,c(ae=>[...ae,{playerId:y.responderId,actionType:Ge.playerChoice,choice:{card:{name:"Counterattack",drawDeck:ps.characters},type:be.counterattack,target:y.attackerId}}]))},[y,e.id]),we.useEffect(()=>{if(t.gameState.disconnectedPlayer||t.playerEvents.length>0||r.openModal||u||l.length===0||_.current)return;const[N,...ae]=l;c(ae);const fe=Tg(t.gameState,N);if(fe!==void 0){_.current=!0,window.setTimeout(()=>{_.current=!1,i(Es({...N,result:fe}))},t.gameState.botThinkTimeMs??Wa);return}p(N)},[u,r.openModal,l,t.gameState,t.playerEvents.length,i]);const F=()=>{const N=t.gameState.lobby.playerList.filter(ge=>ge.user.id===t.gameState.currentPlayer)[0],ae=wi([6,4]),fe=Qo(N);if(fe){k({playerId:t.gameState.currentPlayer,choice:{card:fe,type:be.move,value:(ae[0]+ae[1]).toString(),target:t.gameState.currentPlayer},actionType:Ge.playerAttack});return}i(Fn({playerId:t.gameState.currentPlayer,moveRoll:ae,actionType:Ge.playerMove}))},q=()=>{i(kn({playerId:t.gameState.currentPlayer,actionType:Ge.playerEndTurn}))},X=()=>{if(t.peerId===t.gameState.hostId){m(!0);return}kr.closePeerSession().finally(()=>i(pl())),i(Ja(Ka.gameState)),o("/")},B=t.gameState.lobby.playerList.find(N=>N.user.id===t.gameState.currentPlayer),j=!!(B&&B.user.id===e.id&&B.piece.moved&&!B.piece.attacked&&!B.piece.dead&&z(B).length>0),ee=u?{openModal:!0,modalMessage:O(u),playerChoice:u}:r,W=t.gameState.lobby.playerList.filter(N=>{var ae;return(ae=t.gameState.victors)==null?void 0:ae.includes(N.user.id)}).map(N=>N.user.userName);return I.jsxs(we.Fragment,{children:[void 0,!e.loading&&!t.loading&&t.gameState.lobby.decks[ps.areas].cards.length>1?I.jsx(we.Suspense,{fallback:I.jsx(ds,{}),children:I.jsx(Dg,{scale:x})}):I.jsx(ds,{}),I.jsx(He,{"aria-hidden":!0,sx:{position:"fixed",top:0,left:0,right:0,height:"82px",zIndex:1100,pointerEvents:"none",background:"linear-gradient(180deg, rgba(25, 34, 49, 0.98), rgba(36, 52, 77, 0.92))",borderBottom:"2px solid rgba(255, 255, 255, 0.3)",boxShadow:"0 3px 12px rgba(0, 0, 0, 0.45)","&::after":{content:'""',position:"absolute",inset:"6px 8px",borderBottom:"1px solid rgba(255, 255, 255, 0.15)"}}}),I.jsx(He,{"aria-hidden":!0,sx:{position:"fixed",bottom:0,left:0,right:0,height:"82px",zIndex:1100,pointerEvents:"none",background:"linear-gradient(0deg, rgba(25, 34, 49, 0.98), rgba(36, 52, 77, 0.92))",borderTop:"2px solid rgba(255, 255, 255, 0.3)",boxShadow:"0 -3px 12px rgba(0, 0, 0, 0.45)","&::after":{content:'""',position:"absolute",inset:"6px 8px",borderTop:"1px solid rgba(255, 255, 255, 0.15)"}}}),I.jsx(He,{sx:{position:"fixed",left:24,bottom:90,zIndex:1201,width:220,paddingX:1.5,paddingTop:.5,borderRadius:1,backgroundColor:"rgba(25, 34, 49, 0.92)"},children:I.jsx(dl,{id:"board-zoom-slider","aria-label":"Board zoom",min:.5,max:1.5,step:.25,marks:!0,value:x,valueLabelDisplay:"auto",getAriaValueText:N=>`${N.toFixed(2)} times zoom`,onChange:(N,ae)=>b(ae)})}),I.jsx(bl,{userId:e.id}),I.jsx(xg,{handleMove:F,handleEndTurn:q,handleAttack:R,handleChoice:k,canAttack:j,onQuit:X}),I.jsx(wl,{}),I.jsxs(Hi,{open:t.gameState.gameEnded===!0&&t.playerEvents.length===0,children:[I.jsx(yn,{children:"Game Over"}),I.jsx(bn,{children:I.jsx(It,{children:t.gameState.endedByHost?"The host ended the game.":t.gameState.endedByDisconnect?"The host ended the game after a player disconnected.":W.length===1?`${W[0]} wins!`:`${W.join(", ")} win!`})})]}),I.jsx(Ml,{handleModalClose:E,modalState:ee,handleAttack:R,handleChoice:k}),d?I.jsx(hn,{playerEvent:{playerId:e.id,actionType:Ge.playerEndTurn,animateDice:!1},handleModalClose:()=>v(!1),modalState:{openModal:!0,modalMessage:"It's your turn."}}):h?I.jsx(hn,{playerEvent:{playerId:h.playerId,actionType:Ge.playerChoice},handleModalClose:P,revealedCard:h.choice.card,modalState:{openModal:!0,modalMessage:`${((Ce=t.gameState.lobby.playerList.find(N=>N.user.id===h.choice.value))==null?void 0:Ce.user.userName)??"A player"}'s character.`}}):t.playerEvents.length>0?I.jsx(hn,{playerEvent:t.playerEvents[0],handleModalClose:D,revealedCard:t.playerEvents[0].revealedCard,card:t.playerEvents[0].card,modalState:{...n,openModal:!0,modalMessage:Rg(t.gameState.lobby.playerList,t.playerEvents[0])??""}}):void 0,I.jsx(Ag,{disconnectedPlayer:t.gameState.disconnectedPlayer,isHost:t.peerId===t.gameState.hostId,onQuit:X,onReplaceWithBot:()=>{var ae;const N=(ae=t.gameState.disconnectedPlayer)==null?void 0:ae.playerId;N&&i(Yo(N))},onEndGame:()=>{var ae;const N=(ae=t.gameState.disconnectedPlayer)==null?void 0:ae.playerId;N&&i(Xo(N))}}),I.jsx(ul,{open:g,onCancel:()=>m(!1),onConfirm:()=>{m(!1),i($o()),o("/")}})]})}export{zg as default};
