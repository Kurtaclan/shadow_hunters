const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameRender-53UX4eXr.js","assets/index-DskgvEB_.js","assets/index-CrjDTk6z.css","assets/Divider-DyhOw3Pa.js"])))=>i.map(i=>d[i]);
import{r as _e,u as gr,z as oo,j as I,c as pi,f as vr,s as mi,a1 as lo,E as Gr,I as Ei,g as Ur,A as Wr,V as Qo,C as mr,L as ct,T as Gt,R as mt,a2 as De,a3 as Ni,a4 as Ce,a5 as Tn,K as co,a6 as Bi,p as Fi,a7 as uo,O as Ss,S as el,a8 as Cs,Z as Zr,a9 as An,t as jn,w as Jr,q as qn,aa as tl,v as Os,ab as Bs,ac as il,ad as Yn,ae as rl,l as sl}from"./index-DskgvEB_.js";import{x as Or,a as ho,q as po,r as xr,m as nl,l as mo,F as Xn,n as Sr,y as al,z as ol,g as Ti,G as Pn,B as Ve,D as ut,L as hi,f as Ge,h as In,A as $n,M as ll}from"./Divider-DyhOw3Pa.js";import{g as cl,l as Er,L as ft,b as Ot,a as Cn,c as Zn}from"./ListItemAvatar-67Pg3KPD.js";const ul=(o,e)=>{const{ownerState:t}=o;return[e.root,t.dense&&e.dense,t.alignItems==="flex-start"&&e.alignItemsFlexStart,t.divider&&e.divider,!t.disableGutters&&e.gutters]},hl=o=>{const{alignItems:e,classes:t,dense:i,disabled:r,disableGutters:s,divider:a,selected:n}=o,c=vr({root:["root",i&&"dense",!s&&"gutters",a&&"divider",r&&"disabled",e==="flex-start"&&"alignItemsFlexStart",n&&"selected"]},cl,t);return{...t,...c}},dl=mi(po,{shouldForwardProp:o=>lo(o)||o==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:ul})(Gr(({theme:o})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Er.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:Ei(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${Er.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:Ei(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},[`&.${Er.selected}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:Ei(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:Ei(o.palette.primary.main,o.palette.action.selectedOpacity)}},[`&.${Er.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${Er.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]}))),Gs=_e.forwardRef(function(e,t){const i=gr({props:e,name:"MuiListItemButton"}),{alignItems:r="center",autoFocus:s=!1,component:a="div",children:n,dense:l=!1,disableGutters:c=!1,divider:u=!1,focusVisibleClassName:p,selected:h=!1,className:f,...g}=i,m=_e.useContext(Or),d=_e.useMemo(()=>({dense:l||m.dense||!1,alignItems:r,disableGutters:c}),[r,m.dense,l,c]),x=_e.useRef(null);oo(()=>{s&&x.current&&x.current.focus()},[s]);const v={...i,alignItems:r,dense:d.dense,disableGutters:c,divider:u,selected:h},w=hl(v),_=ho(x,t);return I.jsx(Or.Provider,{value:d,children:I.jsx(dl,{ref:_,href:g.href||g.to,component:(g.href||g.to)&&a==="div"?"button":a,focusVisibleClassName:pi(w.focusVisible,p),ownerState:v,className:pi(w.root,f),...g,classes:w,children:n})})}),fo=xr(I.jsx("path",{d:"M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25m-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12m0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5m0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"}));function pl(o){return Ur("MuiDialog",o)}const Us=Wr("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),go=_e.createContext({}),ml=mi(ol,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),fl=o=>{const{classes:e,scroll:t,maxWidth:i,fullWidth:r,fullScreen:s}=o,a={root:["root"],container:["container",`scroll${mr(t)}`],paper:["paper",`paperScroll${mr(t)}`,`paperWidth${mr(String(i))}`,r&&"paperFullWidth",s&&"paperFullScreen"]};return vr(a,pl,e)},gl=mi(al,{name:"MuiDialog",slot:"Root"})({"@media print":{position:"absolute !important"}}),vl=mi("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${mr(t.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),xl=mi(mo,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${mr(t.scroll)}`],e[`paperWidth${mr(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(Gr(({theme:o})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:e})=>!e.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${Us.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(o.breakpoints.values).filter(e=>e!=="xs").map(e=>({props:{maxWidth:e},style:{maxWidth:`${o.breakpoints.values[e]}${o.breakpoints.unit}`,[`&.${Us.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:e})=>e.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:e})=>e.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Us.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Hr=_e.forwardRef(function(e,t){const i=gr({props:e,name:"MuiDialog"}),r=nl(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":a,"aria-labelledby":n,"aria-modal":l=!0,BackdropComponent:c,BackdropProps:u,children:p,className:h,disableEscapeKeyDown:f=!1,fullScreen:g=!1,fullWidth:m=!1,maxWidth:d="sm",onClick:x,onClose:v,open:w,PaperComponent:_=mo,PaperProps:M={},scroll:E="paper",slots:L={},slotProps:y={},TransitionComponent:S=Xn,transitionDuration:P=s,TransitionProps:F,...G}=i,z={...i,disableEscapeKeyDown:f,fullScreen:g,fullWidth:m,maxWidth:d,scroll:E},D=fl(z),k=_e.useRef(),C=me=>{k.current=me.target===me.currentTarget},N=me=>{x&&x(me),k.current&&(k.current=null,v&&v(me,"backdropClick"))},j=Qo(n),O=_e.useMemo(()=>({titleId:j}),[j]),W={transition:S,...L},Q={transition:F,paper:M,backdrop:u,...y},H={slots:W,slotProps:Q},[ee,ue]=Sr("root",{elementType:gl,shouldForwardComponentProp:!0,externalForwardedProps:H,ownerState:z,className:pi(D.root,h),ref:t}),[Te,J]=Sr("backdrop",{elementType:ml,shouldForwardComponentProp:!0,externalForwardedProps:H,ownerState:z}),[Fe,xe]=Sr("paper",{elementType:xl,shouldForwardComponentProp:!0,externalForwardedProps:H,ownerState:z,className:pi(D.paper,M.className)}),[ye,le]=Sr("container",{elementType:vl,externalForwardedProps:H,ownerState:z,className:D.container}),[Ue,Se]=Sr("transition",{elementType:Xn,externalForwardedProps:H,ownerState:z,additionalProps:{appear:!0,in:w,timeout:P,role:"presentation"}});return I.jsx(ee,{closeAfterTransition:!0,slots:{backdrop:Te},slotProps:{backdrop:{transitionDuration:P,as:c,...J}},disableEscapeKeyDown:f,onClose:v,open:w,onClick:N,...ue,...G,children:I.jsx(Ue,{...Se,children:I.jsx(ye,{onMouseDown:C,...le,children:I.jsx(Fe,{as:_,elevation:24,role:"dialog","aria-describedby":a,"aria-labelledby":j,"aria-modal":l,...xe,children:I.jsx(go.Provider,{value:O,children:p})})})})})});function _l(o){return Ur("MuiListItemIcon",o)}const Jn=Wr("MuiListItemIcon",["root","alignItemsFlexStart"]),yl=o=>{const{alignItems:e,classes:t}=o;return vr({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},_l,t)},bl=mi("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(Gr(({theme:o})=>({minWidth:56,color:(o.vars||o).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),zr=_e.forwardRef(function(e,t){const i=gr({props:e,name:"MuiListItemIcon"}),{className:r,...s}=i,a=_e.useContext(Or),n={...i,alignItems:a.alignItems},l=yl(n);return I.jsx(bl,{className:pi(l.root,r),ownerState:n,ref:t,...s})}),wl=xr(I.jsx("path",{d:"M2.81 2.81 1.39 4.22l2.27 2.27C2.61 8.07 2 9.96 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.41zM12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.94 10.94C14.86 19.59 13.48 20 12 20M7.94 5.12 6.49 3.66C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46C19.59 14.86 20 13.48 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12"}));function Ml({userId:o}){const e=Ti(l=>l.connection),[t,i]=_e.useState({items:[]}),[r,s]=_e.useState(!1),[a,n]=_e.useState({openModal:!1,src:"",alt:""});return I.jsxs(_e.Fragment,{children:[I.jsxs(Pn,{sx:{bottom:72,right:16,position:"absolute",zIndex:1200},display:"flex",justifyContent:"center",alignItems:"top",children:[t.anchor&&r?I.jsxs(Ve,{sx:{marginRight:2,backgroundColor:ct.palette.background.default,paddingTop:2,minWidth:"200px"},children:[I.jsx(Gt,{sx:{marginLeft:1},variant:"h5",children:"Equipment"}),I.jsx(ut,{variant:"fullWidth",sx:{marginBottom:1}}),I.jsx(hi,{disablePadding:!0,sx:{overflowY:"auto",overflowX:"hidden",maxHeight:"250px",backgroundColor:ct.palette.background.paper},children:t.items.length==0?I.jsx(ft,{sx:{height:"66px",width:"220px",paddingTop:"16px",verticalAlign:"top",display:"inline-block"},children:I.jsx(Ot,{children:"None"})}):t.items.map((l,c)=>I.jsxs(_e.Fragment,{children:[c===0?void 0:I.jsx(ut,{variant:"fullWidth",component:"li"}),I.jsxs(ft,{sx:{cursor:"zoom-in"},onClick:()=>n({src:`/shadow_hunters//assets/game/${l.drawDeck}/${l.name}.jpg`,alt:l.name,openModal:!0}),children:[I.jsx(Ot,{primary:l.name}),I.jsx(Cn,{children:I.jsx(Ve,{sx:{float:"right"},component:"img",width:35,height:50,alt:l.name,src:`/shadow_hunters//assets/game/${l.drawDeck}/${l.name}.jpg`})})]})]},`item_list_item_${c}`))})]}):void 0,r?I.jsxs(Ve,{sx:{backgroundColor:ct.palette.background.default,paddingTop:2,minWidth:"200px",maxHeight:"350px"},children:[I.jsx(Gt,{sx:{marginLeft:1},variant:"h5",children:"Players"}),I.jsx(ut,{variant:"fullWidth",sx:{marginBottom:1}}),I.jsx(hi,{disablePadding:!0,sx:{overflowY:"auto",overflowX:"hidden",maxHeight:"250px",backgroundColor:ct.palette.background.paper},children:e.gameState.lobby.playerList.map((l,c)=>{var u,p;return I.jsxs(_e.Fragment,{children:[c===0?void 0:I.jsx(ut,{variant:"fullWidth",component:"li"}),I.jsxs(ft,{id:`list_item_${c}`,onClick:h=>l.piece.dead?void 0:i({items:l.piece.items,anchor:h.currentTarget,player:l.user.userName}),sx:{cursor:l.piece.dead?"default":"pointer",backgroundColor:((u=t.anchor)==null?void 0:u.id)===`list_item_${c}`?((p=ct.palette)==null?void 0:p.info).main:void 0},children:[l.piece.dead?I.jsx(zr,{sx:{minWidth:"30px"},children:I.jsx(wl,{color:"error"})}):void 0,I.jsx(Ot,{primary:l.user.userName}),I.jsx(Cn,{sx:{cursor:"zoom-in",backgroundColor:l.user.color,minWidth:"unset",padding:"10px"},children:I.jsx(Ve,{sx:{float:"right",filter:l.piece.dead?"grayscale(100%)":"none"},onClick:h=>{h.stopPropagation(),n({src:l.user.id===o||l.piece.revealed?`/shadow_hunters//assets/game/characters/${l.piece.character.name}.jpg`:"/shadow_hunters//assets/game/card_backs/Character Back.jpg",alt:"Character Card",openModal:!0})},component:"img",width:35,height:50,alt:"Character Card",src:l.user.id===o||l.piece.revealed?`/shadow_hunters//assets/game/characters/${l.piece.character.name}.jpg`:"/shadow_hunters//assets/game/card_backs/Character Back.jpg"})})]})]},`list_item_${c}`)})})]}):void 0]}),I.jsxs(Ge,{sx:{height:"36.5px",marginLeft:2,bottom:16,right:16,position:"absolute",zIndex:1200},variant:"contained",onClick:()=>s(!r),children:[I.jsx(fo,{sx:{marginRight:2},fontSize:"small"}),"Players"]}),I.jsx(Hr,{open:a.openModal,onClose:()=>n({openModal:!1,alt:"",src:""}),children:a.src&&I.jsx(Ve,{component:"img",height:600,src:a.src,alt:a.alt})})]})}const Sl=xr(I.jsx("path",{d:"M3 18h12v-2H3zM3 6v2h18V6zm0 7h18v-2H3z"}));function El(){const o=Ti(r=>r.connection),[e,t]=_e.useState(!1),i="rgba(25, 34, 49, .5)";return I.jsxs(Pn,{sx:{top:30,right:16,position:"absolute",zIndex:1200,paddingTop:5,paddingLeft:5},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"top",children:[I.jsx(Ve,{width:"100%",children:I.jsxs(Ge,{sx:{marginBottom:2,float:"right"},variant:"contained",onClick:()=>t(!e),children:[I.jsx(Sl,{fontSize:"small",sx:{marginRight:2}})," Log"]})}),e?I.jsxs(Ve,{sx:{backgroundColor:ct.palette.background.default,paddingTop:1,minWidth:"500px",maxHeight:"300px",borderRadius:"8px"},children:[I.jsx(Gt,{sx:{marginLeft:2},variant:"h5",children:"Log"}),I.jsx(ut,{}),I.jsx(hi,{disablePadding:!0,sx:{overflowY:"auto",overflowX:"hidden",maxHeight:"200px",paddingX:1,backgroundColor:ct.palette.background.paper},children:o.gameState.lobby.gameLog.map((r,s)=>I.jsxs(ft,{sx:{backgroundColor:i,borderRadius:"8px",marginBottom:1},children:[I.jsx(Ot,{disableTypography:!0,primary:I.jsxs(Ve,{children:[I.jsx(Gt,{variant:"body1",children:r.userName}),I.jsx(ut,{sx:{marginBottom:1}})]}),secondary:I.jsx(Gt,{variant:"body2",children:r.text})}),r.info.includes("/")?I.jsx(Cn,{children:I.jsx(Ve,{sx:{float:"right"},component:"img",alt:r.info,width:35,height:50,src:`/shadow_hunters//assets/game/${r.info}.jpg`})}):void 0]},`log_item_${s}`))})]}):void 0]})}function Tl({handleModalClose:o=()=>{},modalState:e,handleAttack:t=r=>r,handleChoice:i=r=>r}){var g,m;const r=((g=ct.palette)==null?void 0:g.secondary).main,s=((m=ct.palette)==null?void 0:m.secondary).main,a=Ti(d=>d.connection),[n,l]=mt.useState({}),[c,u]=mt.useState({}),p=(d,x)=>d.length===0?I.jsx(Ve,{sx:{width:"100%"},children:I.jsx(Ge,{sx:{marginTop:2,float:"right"},variant:"contained",onClick:()=>{l({clickTarget:void 0,hoverTarget:void 0}),o()},children:"Ok"})}):I.jsxs(Ve,{sx:{width:"100%"},children:[I.jsx(hi,{disablePadding:!0,sx:{backgroundColor:ct.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:d.map((v,w)=>I.jsxs(mt.Fragment,{children:[w===0?void 0:I.jsx(ut,{variant:"fullWidth",component:"li"}),I.jsx(ft,{sx:{cursor:"pointer",color:v===n.clickTarget?"white":void 0,backgroundColor:v===n.clickTarget?s:v===n.hoverTarget?r:void 0},onMouseEnter:()=>l({...n,hoverTarget:v}),onMouseLeave:()=>l({...n,hoverTarget:void 0}),onClick:()=>l({...n,clickTarget:v}),children:v.userName})]},`attack_target_${w}`))}),I.jsxs(Ve,{display:"flex",justifyContent:"flex-end",sx:{width:"100%"},children:[I.jsx(Ge,{sx:{marginRight:2},variant:"contained",disabled:n.clickTarget===void 0,onClick:()=>{l({clickTarget:void 0,hoverTarget:void 0}),o(),t([n.clickTarget])},children:"Ok"}),x?void 0:I.jsx(Ge,{variant:"contained",onClick:()=>{l({clickTarget:void 0,hoverTarget:void 0}),o()},children:"Cancel"})]})]}),h=(d,x)=>I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",disabled:c.clickTarget===void 0,onClick:()=>{d.result=c.clickTarget,u({}),o(),i(d)},children:x}),f=d=>{let x=d.choice.type!==De.counterattack&&d.choice.type!==De.move&&d.choice.type!==De.area;return I.jsxs(Ve,{sx:{marginTop:2,width:"100%"},display:"flex",justifyContent:"space-between",alignItems:"center",children:[x?I.jsx(Ve,{component:"img",sx:{height:360},alt:d.choice.card.name,src:`/shadow_hunters//assets/game/${d.choice.card.drawDeck}/${d.choice.card.name}.jpg`}):void 0,I.jsx(Ve,{display:"flex",justifyContent:"flex-end",flexDirection:"column",sx:{height:x?340:"100%",width:x?200:"100%",gap:2},children:(()=>{switch(d.choice.type){case De.equipment:return I.jsxs(mt.Fragment,{children:[I.jsx(hi,{disablePadding:!0,sx:{backgroundColor:ct.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:a.gameState.lobby.playerList.filter(v=>d.playerId===d.choice.target&&v.user.id===d.playerId||v.piece.items.length>0&&v.user.id!==a.gameState.currentPlayer).map((v,w)=>v.piece.items.map((_,M)=>{const E=`${v.user.id},${_.name}`;return I.jsxs(mt.Fragment,{children:[w+M===0?void 0:I.jsx(ut,{variant:"fullWidth",component:"li"}),I.jsx(ft,{sx:{cursor:"pointer",color:E===c.clickTarget?"white":void 0,backgroundColor:E===c.clickTarget?s:E===c.hoverTarget?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:E}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:E}),children:`${v.user.userName} -> ${_.name}`})]},`choice_target_${w}_${M}`)}))}),h(d,"Ok")]});case De.move:{const v=Ni([4,6]);return I.jsxs(mt.Fragment,{children:[I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=d.choice.value,o(),i(d)},children:d.choice.value}),I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result=JSON.stringify(v),o(),i(d)},children:v[0]+v[1]})]})}case De.area:return I.jsxs(mt.Fragment,{children:[I.jsx(hi,{disablePadding:!0,sx:{backgroundColor:ct.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:a.gameState.lobby.decks.areas.cards.map((v,w)=>I.jsxs(mt.Fragment,{children:[w===0?void 0:I.jsx(ut,{variant:"fullWidth",component:"li"}),I.jsx(ft,{sx:{cursor:"pointer",color:v.name===c.clickTarget?"white":void 0,backgroundColor:v.name===c.clickTarget?s:v.name===c.hoverTarget?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:v.name}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:v.name}),children:v.name})]},`area_${v.name}`))}),h(d,"Ok")]});case De.reveal:return I.jsxs(mt.Fragment,{children:[I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="yes",o(),i(d)},children:"Yes"}),I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="no",o(),i(d)},children:"No"})]});case De.target:{const v=d.choice.card.name.startsWith("Hermit's "),w=a.gameState.lobby.playerList.filter(_=>(!_.piece.dead||d.choice.card.name==="Blessing"&&_.user.id===d.choice.target)&&(!v||_.user.id!==d.playerId));return w.length===0?I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="skip",o(),i(d)},children:"Skip"}):I.jsxs(mt.Fragment,{children:[I.jsx(hi,{disablePadding:!0,sx:{backgroundColor:ct.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:w.map((_,M)=>I.jsxs(mt.Fragment,{children:[M===0?void 0:I.jsx(ut,{variant:"fullWidth",component:"li"}),I.jsx(ft,{sx:{cursor:"pointer",color:_.user.id===c.clickTarget?"white":void 0,backgroundColor:_.user.id===c.clickTarget?s:_.user.id===c.hoverTarget?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:_.user.id}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:_.user.id}),children:_.user.userName})]},`choice_target_${M}`))}),h(d,"Ok")]})}case De.weirdWoods:{const v=a.gameState.lobby.playerList.find(w=>w.user.id===d.choice.target);return I.jsxs(mt.Fragment,{children:[I.jsxs(Gt,{children:["Choose an effect for ",(v==null?void 0:v.user.userName)??"the targeted player","."]}),I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="damage",o(),i(d)},children:"Deal 2 Damage"}),I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="heal",o(),i(d)},children:"Heal 1 Damage"})]})}case De.counterattack:{const v=a.gameState.lobby.playerList.find(w=>w.user.id===d.choice.target);return I.jsxs(mt.Fragment,{children:[I.jsxs(Gt,{children:["Counterattack ",(v==null?void 0:v.user.userName)??"the attacker","?"]}),I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{o(),t(v?[v.user]:[])},children:"Counterattack"}),I.jsx(Ge,{fullWidth:!0,size:"large",variant:"contained",onClick:()=>{d.result="skip",o(),i(d)},children:"Skip"})]})}case De.draw:return I.jsxs(mt.Fragment,{children:[I.jsxs(hi,{disablePadding:!0,sx:{backgroundColor:ct.palette.background.paper,width:"100%",overflowY:"auto",overflowX:"hidden",maxHeight:"200px",marginBottom:2,marginTop:2},children:[I.jsx(ft,{sx:{cursor:"pointer",color:c.clickTarget==="green"?"white":void 0,backgroundColor:c.clickTarget==="green"?s:c.hoverTarget==="green"?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:"green"}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:"green"}),children:"Hermit"}),I.jsx(ut,{variant:"fullWidth",component:"li"}),I.jsx(ft,{sx:{cursor:"pointer",backgroundColor:c.clickTarget==="white"?s:c.hoverTarget==="white"?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:"white"}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:"white"}),children:"White"}),I.jsx(ut,{variant:"fullWidth",component:"li"}),I.jsx(ft,{sx:{cursor:"pointer",color:c.clickTarget==="black"?"white":void 0,backgroundColor:c.clickTarget==="black"?s:c.hoverTarget==="black"?r:void 0},onMouseEnter:()=>u({...c,hoverTarget:"black"}),onMouseLeave:()=>u({...c,hoverTarget:void 0}),onClick:()=>u({...c,clickTarget:"black"}),children:"Black"})]}),h(d,"Ok")]});default:return h(d,"Ok")}})()})]})};return I.jsx(Hr,{open:e.openModal,children:I.jsxs(Ve,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:500,p:2,sx:{overflow:"hidden"},children:[e.modalMessage?I.jsx(Ve,{sx:{width:532,paddingTop:"8px",paddingLeft:"16px",marginX:"-16px",marginTop:"-16px",backgroundColor:ct.palette.background.default},children:I.jsx(Gt,{variant:"h5",sx:{width:"100%"},children:e.modalMessage})}):void 0,e.targets?p(e.targets,e.hasSword):void 0,e.playerChoice?f(e.playerChoice):void 0]})})}var Al=Object.defineProperty,Cl=(o,e,t)=>e in o?Al(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Ll=(o,e,t)=>(Cl(o,e+"",t),t);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fn="143",ui="srgb",Oi="srgb-linear",Kn="300 es";class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,Ln=180/Math.PI;function Vr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ot[o&255]+ot[o>>8&255]+ot[o>>16&255]+ot[o>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[i&255]+ot[i>>8&255]+ot[i>>16&255]+ot[i>>24&255]).toLowerCase()}function St(o,e,t){return Math.max(e,Math.min(t,o))}function Rl(o,e){return(o%e+e)%e}function Hs(o,e,t){return(1-t)*o+t*e}function Qn(o){return(o&o-1)===0&&o!==0}function Rn(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,n,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=n,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],n=i[3],l=i[6],c=i[1],u=i[4],p=i[7],h=i[2],f=i[5],g=i[8],m=r[0],d=r[3],x=r[6],v=r[1],w=r[4],_=r[7],M=r[2],E=r[5],L=r[8];return s[0]=a*m+n*v+l*M,s[3]=a*d+n*w+l*E,s[6]=a*x+n*_+l*L,s[1]=c*m+u*v+p*M,s[4]=c*d+u*w+p*E,s[7]=c*x+u*_+p*L,s[2]=h*m+f*v+g*M,s[5]=h*d+f*w+g*E,s[8]=h*x+f*_+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],n=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*n*c-i*s*u+i*n*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],n=e[5],l=e[6],c=e[7],u=e[8],p=u*a-n*c,h=n*l-u*s,f=c*s-a*l,g=t*p+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=p*m,e[1]=(r*c-u*i)*m,e[2]=(n*i-r*a)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-n*t)*m,e[6]=f*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,n){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*n)+a+e,-r*c,r*l,-r*(-c*a+l*n)+n+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],n=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*n+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*n+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function vo(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function Ls(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Gi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Es(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Vs={[ui]:{[Oi]:Gi},[Oi]:{[ui]:Es}},It={legacyMode:!0,get workingColorSpace(){return Oi},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Vs[e]&&Vs[e][t]!==void 0){const i=Vs[e][t];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={r:0,g:0,b:0},Ft={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function js(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Qr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Oi){return this.r=e,this.g=t,this.b=i,It.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Oi){if(e=Rl(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=js(a,s,e+1/3),this.g=js(a,s,e),this.b=js(a,s,e-1/3)}return It.toWorkingColorSpace(this,r),this}setStyle(e,t=ui){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],n=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,It.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,It.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,It.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,It.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ui){const i=xo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return It.fromWorkingColorSpace(Qr(this,Ke),e),St(Ke.r*255,0,255)<<16^St(Ke.g*255,0,255)<<8^St(Ke.b*255,0,255)<<0}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Oi){It.fromWorkingColorSpace(Qr(this,Ke),t);const i=Ke.r,r=Ke.g,s=Ke.b,a=Math.max(i,r,s),n=Math.min(i,r,s);let l,c;const u=(n+a)/2;if(n===a)l=0,c=0;else{const p=a-n;switch(c=u<=.5?p/(a+n):p/(2-a-n),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Oi){return It.fromWorkingColorSpace(Qr(this,Ke),t),e.r=Ke.r,e.g=Ke.g,e.b=Ke.b,e}getStyle(e=ui){return It.fromWorkingColorSpace(Qr(this,Ke),e),e!==ui?`color(${e} ${Ke.r} ${Ke.g} ${Ke.b})`:`rgb(${Ke.r*255|0},${Ke.g*255|0},${Ke.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Ft),Ft.h+=e,Ft.s+=t,Ft.l+=i,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ft),e.getHSL(Kr);const i=Hs(Ft.h,Kr.h,t),r=Hs(Ft.s,Kr.s,t),s=Hs(Ft.l,Kr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=xo;let Zi;class _o{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=Ls("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class yo{constructor(e=null){this.isSource=!0,this.uuid=Vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,n=r.length;a<n;a++)r[a].isDataTexture?s.push(qs(r[a].image)):s.push(qs(r[a]))}else s=qs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_o.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dl=0;class Tt extends _r{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,n=1023,l=1009,c=1,u=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=Vr(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=n,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=300;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const a=e.elements,n=a[0],l=a[4],c=a[8],u=a[1],p=a[5],h=a[9],f=a[2],g=a[6],m=a[10];if(Math.abs(l-u)<.01&&Math.abs(c-f)<.01&&Math.abs(h-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+f)<.1&&Math.abs(h+g)<.1&&Math.abs(n+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(n+1)/2,v=(p+1)/2,w=(m+1)/2,_=(l+u)/4,M=(c+f)/4,E=(h+g)/4;return x>v&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=_/i,s=M/i):v>w?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=_/r,s=E/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=E/s),this.set(i,r,s,t),this}let d=Math.sqrt((g-h)*(g-h)+(c-f)*(c-f)+(u-l)*(u-l));return Math.abs(d)<.001&&(d=1),this.x=(g-h)/d,this.y=(c-f)/d,this.z=(u-l)/d,this.w=Math.acos((n+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vi extends _r{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Tt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bo extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pl extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,n){let l=i[r+0],c=i[r+1],u=i[r+2],p=i[r+3];const h=s[a+0],f=s[a+1],g=s[a+2],m=s[a+3];if(n===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(n===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(p!==m||l!==h||c!==f||u!==g){let d=1-n;const x=l*h+c*f+u*g+p*m,v=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const M=Math.sqrt(w),E=Math.atan2(M,x*v);d=Math.sin(d*E)/M,n=Math.sin(n*E)/M}const _=n*v;if(l=l*d+h*_,c=c*d+f*_,u=u*d+g*_,p=p*d+m*_,d===1-n){const M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const n=i[r],l=i[r+1],c=i[r+2],u=i[r+3],p=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=n*g+u*p+l*f-c*h,e[t+1]=l*g+u*h+c*p-n*f,e[t+2]=c*g+u*f+n*h-l*p,e[t+3]=u*g-n*p-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,a=e._order,n=Math.cos,l=Math.sin,c=n(i/2),u=n(r/2),p=n(s/2),h=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"YXZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"ZXY":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"ZYX":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"YZX":this._x=h*u*p+c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p-h*f*g;break;case"XZY":this._x=h*u*p-c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],n=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=i+n+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>n&&i>p){const f=2*Math.sqrt(1+i-n-p);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(n>p){const f=2*Math.sqrt(1+n-i-p);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+p-i-n);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,n=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*n+r*c-s*l,this._y=r*u+a*l+s*n-i*c,this._z=s*u+a*c+i*l-r*n,this._w=a*u-i*n-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let n=a*e._w+i*e._x+r*e._y+s*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-n*n;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,n),p=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ea.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ea.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,n=e.z,l=e.w,c=l*t+a*r-n*i,u=l*i+n*t-s*r,p=l*r+s*i-a*t,h=-s*t-a*i-n*r;return this.x=c*l+h*-s+u*-n-p*-a,this.y=u*l+h*-a+p*-s-c*-n,this.z=p*l+h*-n+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,n=t.y,l=t.z;return this.x=r*l-s*n,this.y=s*a-i*l,this.z=i*n-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new U,ea=new jr;class qr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,n=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],p=e[l+1],h=e[l+2];u<t&&(t=u),p<i&&(i=p),h<r&&(r=h),u>s&&(s=u),p>a&&(a=p),h>n&&(n=h)}return this.min.set(t,i,r),this.max.set(s,a,n),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,n=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),p=e.getY(l),h=e.getZ(l);u<t&&(t=u),p<i&&(i=p),h<r&&(r=h),u>s&&(s=u),p>a&&(a=p),h>n&&(n=h)}return this.min.set(t,i,r),this.max.set(s,a,n),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,n=s.count;a<n;a++)Ci.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ci)}else i.boundingBox===null&&i.computeBoundingBox(),Xs.copy(i.boundingBox),Xs.applyMatrix4(e.matrixWorld),this.union(Xs);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),es.subVectors(this.max,Tr),Ji.subVectors(e.a,Tr),Ki.subVectors(e.b,Tr),Qi.subVectors(e.c,Tr),vi.subVectors(Ki,Ji),xi.subVectors(Qi,Ki),Li.subVectors(Ji,Qi);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Li.z,Li.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Li.z,0,-Li.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Li.y,Li.x,0];return!$s(t,Ji,Ki,Qi,es)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,Ji,Ki,Qi,es))?!1:(ts.crossVectors(vi,xi),t=[ts.x,ts.y,ts.z],$s(t,Ji,Ki,Qi,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ci.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new U,new U,new U,new U,new U,new U,new U,new U],Ci=new U,Xs=new qr,Ji=new U,Ki=new U,Qi=new U,vi=new U,xi=new U,Li=new U,Tr=new U,es=new U,ts=new U,Ri=new U;function $s(o,e,t,i,r){for(let s=0,a=o.length-3;s<=a;s+=3){Ri.fromArray(o,s);const n=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>n)return!1}return!0}const Il=new qr,ta=new U,is=new U,Zs=new U;class Br{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Il.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Zs.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?is.set(0,0,1).multiplyScalar(e.radius):is.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ta.copy(e.center).add(is)),this.expandByPoint(ta.copy(e.center).sub(is)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new U,Js=new U,rs=new U,_i=new U,Ks=new U,ss=new U,Qs=new U;class Fl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.direction).multiplyScalar(t).add(this.origin),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Js.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Js);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rs),n=_i.dot(this.direction),l=-_i.dot(rs),c=_i.lengthSq(),u=Math.abs(1-a*a);let p,h,f,g;if(u>0)if(p=a*l-n,h=a*n-l,g=s*u,p>=0)if(h>=-g)if(h<=g){const m=1/u;p*=m,h*=m,f=p*(p+a*h+2*n)+h*(a*p+h+2*l)+c}else h=s,p=Math.max(0,-(a*h+n)),f=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(a*h+n)),f=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-a*s+n)),h=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(p=Math.max(0,-(a*s+n)),h=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+h*(h+2*l)+c);else h=a>0?-s:s,p=Math.max(0,-(a*h+n)),f=-p*p+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(rs).multiplyScalar(h).add(Js),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),n=i-a,l=i+a;return n<0&&l<0?null:n<0?this.at(l,t):this.at(n,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,n,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),p>=0?(n=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(n=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||n>r)||((n>i||i!==i)&&(i=n),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,r,s){Ks.subVectors(t,e),ss.subVectors(i,e),Qs.crossVectors(Ks,ss);let a=this.direction.dot(Qs),n;if(a>0){if(r)return null;n=1}else if(a<0)n=-1,a=-a;else return null;_i.subVectors(this.origin,e);const l=n*this.direction.dot(ss.crossVectors(_i,ss));if(l<0)return null;const c=n*this.direction.dot(Ks.cross(_i));if(c<0||l+c>a)return null;const u=-n*_i.dot(Qs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,n,l,c,u,p,h,f,g,m,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=n,x[13]=l,x[2]=c,x[6]=u,x[10]=p,x[14]=h,x[3]=f,x[7]=g,x[11]=m,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),s=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),n=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*p,g=n*u,m=n*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=f+g*c,t[5]=h-m*c,t[9]=-n*l,t[2]=m-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*p,g=c*u,m=c*p;t[0]=h+m*n,t[4]=g*n-f,t[8]=a*c,t[1]=a*p,t[5]=a*u,t[9]=-n,t[2]=f*n-g,t[6]=m+h*n,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*p,g=c*u,m=c*p;t[0]=h-m*n,t[4]=-a*p,t[8]=g+f*n,t[1]=f+g*n,t[5]=a*u,t[9]=m-h*n,t[2]=-a*c,t[6]=n,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*p,g=n*u,m=n*p;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+m,t[1]=l*p,t[5]=m*c+h,t[9]=f*c-g,t[2]=-c,t[6]=n*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=n*l,m=n*c;t[0]=l*u,t[4]=m-h*p,t[8]=g*p+f,t[1]=p,t[5]=a*u,t[9]=-n*u,t[2]=-c*u,t[6]=f*p+g,t[10]=h-m*p}else if(e.order==="XZY"){const h=a*l,f=a*c,g=n*l,m=n*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+m,t[5]=a*u,t[9]=f*p-g,t[2]=g*p-f,t[6]=n*u,t[10]=m*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zl,e,kl)}lookAt(e,t,i){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),yi.crossVectors(i,wt),yi.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),yi.crossVectors(i,wt)),yi.normalize(),ns.crossVectors(wt,yi),r[0]=yi.x,r[4]=ns.x,r[8]=wt.x,r[1]=yi.y,r[5]=ns.y,r[9]=wt.y,r[2]=yi.z,r[6]=ns.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],n=i[4],l=i[8],c=i[12],u=i[1],p=i[5],h=i[9],f=i[13],g=i[2],m=i[6],d=i[10],x=i[14],v=i[3],w=i[7],_=i[11],M=i[15],E=r[0],L=r[4],y=r[8],S=r[12],P=r[1],F=r[5],G=r[9],z=r[13],D=r[2],k=r[6],C=r[10],N=r[14],j=r[3],O=r[7],W=r[11],Q=r[15];return s[0]=a*E+n*P+l*D+c*j,s[4]=a*L+n*F+l*k+c*O,s[8]=a*y+n*G+l*C+c*W,s[12]=a*S+n*z+l*N+c*Q,s[1]=u*E+p*P+h*D+f*j,s[5]=u*L+p*F+h*k+f*O,s[9]=u*y+p*G+h*C+f*W,s[13]=u*S+p*z+h*N+f*Q,s[2]=g*E+m*P+d*D+x*j,s[6]=g*L+m*F+d*k+x*O,s[10]=g*y+m*G+d*C+x*W,s[14]=g*S+m*z+d*N+x*Q,s[3]=v*E+w*P+_*D+M*j,s[7]=v*L+w*F+_*k+M*O,s[11]=v*y+w*G+_*C+M*W,s[15]=v*S+w*z+_*N+M*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],n=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],f=e[14],g=e[3],m=e[7],d=e[11],x=e[15];return g*(+s*l*p-r*c*p-s*n*h+i*c*h+r*n*f-i*l*f)+m*(+t*l*f-t*c*h+s*a*h-r*a*f+r*c*u-s*l*u)+d*(+t*c*p-t*n*f-s*a*p+i*a*f+s*n*u-i*c*u)+x*(-r*n*u-t*l*p+t*n*h+r*a*p-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],n=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],f=e[11],g=e[12],m=e[13],d=e[14],x=e[15],v=p*d*c-m*h*c+m*l*f-n*d*f-p*l*x+n*h*x,w=g*h*c-u*d*c-g*l*f+a*d*f+u*l*x-a*h*x,_=u*m*c-g*p*c+g*n*f-a*m*f-u*n*x+a*p*x,M=g*p*l-u*m*l-g*n*h+a*m*h+u*n*d-a*p*d,E=t*v+i*w+r*_+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=v*L,e[1]=(m*h*s-p*d*s-m*r*f+i*d*f+p*r*x-i*h*x)*L,e[2]=(n*d*s-m*l*s+m*r*c-i*d*c-n*r*x+i*l*x)*L,e[3]=(p*l*s-n*h*s-p*r*c+i*h*c+n*r*f-i*l*f)*L,e[4]=w*L,e[5]=(u*d*s-g*h*s+g*r*f-t*d*f-u*r*x+t*h*x)*L,e[6]=(g*l*s-a*d*s-g*r*c+t*d*c+a*r*x-t*l*x)*L,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*f+t*l*f)*L,e[8]=_*L,e[9]=(g*p*s-u*m*s-g*i*f+t*m*f+u*i*x-t*p*x)*L,e[10]=(a*m*s-g*n*s+g*i*c-t*m*c-a*i*x+t*n*x)*L,e[11]=(u*n*s-a*p*s-u*i*c+t*p*c+a*i*f-t*n*f)*L,e[12]=M*L,e[13]=(u*m*r-g*p*r+g*i*h-t*m*h-u*i*d+t*p*d)*L,e[14]=(g*n*r-a*m*r-g*i*l+t*m*l+a*i*d-t*n*d)*L,e[15]=(a*p*r-u*n*r+u*i*l-t*p*l-a*i*h+t*n*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,n=e.y,l=e.z,c=s*a,u=s*n;return this.set(c*a+i,c*n-r*l,c*l+r*n,0,c*n+r*l,u*n+i,u*l-r*a,0,c*l-r*n,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,n=t._z,l=t._w,c=s+s,u=a+a,p=n+n,h=s*c,f=s*u,g=s*p,m=a*u,d=a*p,x=n*p,v=l*c,w=l*u,_=l*p,M=i.x,E=i.y,L=i.z;return r[0]=(1-(m+x))*M,r[1]=(f+_)*M,r[2]=(g-w)*M,r[3]=0,r[4]=(f-_)*E,r[5]=(1-(h+x))*E,r[6]=(d+v)*E,r[7]=0,r[8]=(g+w)*L,r[9]=(d-v)*L,r[10]=(1-(h+m))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=er.set(r[0],r[1],r[2]).length();const a=er.set(r[4],r[5],r[6]).length(),n=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zt.copy(this);const l=1/s,c=1/a,u=1/n;return zt.elements[0]*=l,zt.elements[1]*=l,zt.elements[2]*=l,zt.elements[4]*=c,zt.elements[5]*=c,zt.elements[6]*=c,zt.elements[8]*=u,zt.elements[9]*=u,zt.elements[10]*=u,t.setFromRotationMatrix(zt),i.x=s,i.y=a,i.z=n,this}makePerspective(e,t,i,r,s,a){const n=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r),h=-(a+s)/(a-s),f=-2*a*s/(a-s);return n[0]=l,n[4]=0,n[8]=u,n[12]=0,n[1]=0,n[5]=c,n[9]=p,n[13]=0,n[2]=0,n[6]=0,n[10]=h,n[14]=f,n[3]=0,n[7]=0,n[11]=-1,n[15]=0,this}makeOrthographic(e,t,i,r,s,a){const n=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),p=(t+e)*l,h=(i+r)*c,f=(a+s)*u;return n[0]=2*l,n[4]=0,n[8]=0,n[12]=-p,n[1]=0,n[5]=2*c,n[9]=0,n[13]=-h,n[2]=0,n[6]=0,n[10]=-2*u,n[14]=-f,n[3]=0,n[7]=0,n[11]=0,n[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const er=new U,zt=new tt,zl=new U(0,0,0),kl=new U(1,1,1),yi=new U,ns=new U,wt=new U,ia=new tt,ra=new jr;class Yr{constructor(e=0,t=0,i=0,r=Yr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],n=r[8],l=r[1],c=r[5],u=r[9],p=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(St(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(n,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(n,f));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(n,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ia,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ra.setFromEuler(this),this.setFromQuaternion(ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Yr.DefaultOrder="XYZ";Yr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nl=0;const sa=new U,tr=new jr,ti=new tt,as=new U,Ar=new U,Ol=new U,Bl=new jr,na=new U(1,0,0),aa=new U(0,1,0),oa=new U(0,0,1),Gl={type:"added"},la={type:"removed"};class gt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DefaultUp.clone();const e=new U,t=new Yr,i=new jr,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Pt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(na,e)}rotateY(e){return this.rotateOnAxis(aa,e)}rotateZ(e){return this.rotateOnAxis(oa,e)}translateOnAxis(e,t){return sa.copy(e).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(na,e)}translateY(e){return this.translateOnAxis(aa,e)}translateZ(e){return this.translateOnAxis(oa,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?as.copy(e):as.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Ar,as,this.up):ti.lookAt(as,Ar,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(ti),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(la)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(la)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Ol),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Bl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(n,l){return n[l.uuid]===void 0&&(n[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){const l=n.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const n=[];for(let l=0,c=this.material.length;l<c;l++)n.push(s(e.materials,this.material[l]));r.material=n}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let n=0;n<this.children.length;n++)r.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let n=0;n<this.animations.length;n++){const l=this.animations[n];r.animations.push(s(e.animations,l))}}if(t){const n=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),p=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);n.length>0&&(i.geometries=n),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(n){const l=[];for(const c in n){const u=n[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DefaultUp=new U(0,1,0);gt.DefaultMatrixAutoUpdate=!0;const kt=new U,ii=new U,en=new U,ri=new U,ir=new U,rr=new U,ca=new U,tn=new U,rn=new U,sn=new U;class di{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kt.subVectors(r,t),ii.subVectors(i,t),en.subVectors(e,t);const a=kt.dot(kt),n=kt.dot(ii),l=kt.dot(en),c=ii.dot(ii),u=ii.dot(en),p=a*c-n*n;if(p===0)return s.set(-2,-1,-1);const h=1/p,f=(c*l-n*u)*h,g=(a*u-n*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ri),ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,t,i,r,s,a,n,l){return this.getBarycoord(e,t,i,r,ri),l.set(0,0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(n,ri.z),l}static isFrontFacing(e,t,i,r){return kt.subVectors(i,t),ii.subVectors(e,t),kt.cross(ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),kt.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return di.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,n;ir.subVectors(r,i),rr.subVectors(s,i),tn.subVectors(e,i);const l=ir.dot(tn),c=rr.dot(tn);if(l<=0&&c<=0)return t.copy(i);rn.subVectors(e,r);const u=ir.dot(rn),p=rr.dot(rn);if(u>=0&&p<=u)return t.copy(r);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ir,a);sn.subVectors(e,s);const f=ir.dot(sn),g=rr.dot(sn);if(g>=0&&f<=g)return t.copy(s);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return n=c/(c-g),t.copy(i).addScaledVector(rr,n);const d=u*g-f*p;if(d<=0&&p-u>=0&&f-g>=0)return ca.subVectors(s,r),n=(p-u)/(p-u+(f-g)),t.copy(r).addScaledVector(ca,n);const x=1/(d+m+h);return a=m*x,n=h*x,t.copy(i).addScaledVector(ir,a).addScaledVector(rr,n)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ul=0;class qi extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===1;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const n in s){const l=s[n];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mo extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new U,os=new Ie;class $t{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new Pe),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new Ie),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new U),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new et),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class So extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Eo extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wl=0;const Rt=new tt,nn=new gt,sr=new U,Mt=new qr,Cr=new qr,st=new U;class Zt extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vo(e)?Eo:So)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,i){return Rt.makeTranslation(e,t,i),this.applyMatrix4(Rt),this}scale(e,t,i){return Rt.makeScale(e,t,i),this.applyMatrix4(Rt),this}lookAt(e){return nn.lookAt(e),nn.updateMatrix(),this.applyMatrix4(nn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mt.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const n=t[s];Cr.setFromBufferAttribute(n),this.morphTargetsRelative?(st.addVectors(Mt.min,Cr.min),Mt.expandByPoint(st),st.addVectors(Mt.max,Cr.max),Mt.expandByPoint(st)):(Mt.expandByPoint(Cr.min),Mt.expandByPoint(Cr.max))}Mt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)st.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(st));if(t)for(let s=0,a=t.length;s<a;s++){const n=t[s],l=this.morphTargetsRelative;for(let c=0,u=n.count;c<u;c++)st.fromBufferAttribute(n,c),l&&(sr.fromBufferAttribute(e,c),st.add(sr)),r=Math.max(r,i.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,n=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<n;P++)c[P]=new U,u[P]=new U;const p=new U,h=new U,f=new U,g=new Ie,m=new Ie,d=new Ie,x=new U,v=new U;function w(P,F,G){p.fromArray(r,P*3),h.fromArray(r,F*3),f.fromArray(r,G*3),g.fromArray(a,P*2),m.fromArray(a,F*2),d.fromArray(a,G*2),h.sub(p),f.sub(p),m.sub(g),d.sub(g);const z=1/(m.x*d.y-d.x*m.y);!isFinite(z)||(x.copy(h).multiplyScalar(d.y).addScaledVector(f,-m.y).multiplyScalar(z),v.copy(f).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(z),c[P].add(x),c[F].add(x),c[G].add(x),u[P].add(v),u[F].add(v),u[G].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let P=0,F=_.length;P<F;++P){const G=_[P],z=G.start,D=G.count;for(let k=z,C=z+D;k<C;k+=3)w(i[k+0],i[k+1],i[k+2])}const M=new U,E=new U,L=new U,y=new U;function S(P){L.fromArray(s,P*3),y.copy(L);const F=c[P];M.copy(F),M.sub(L.multiplyScalar(L.dot(F))).normalize(),E.crossVectors(y,F);const G=E.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=G}for(let P=0,F=_.length;P<F;++P){const G=_[P],z=G.start,D=G.count;for(let k=z,C=z+D;k<C;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,n=new U,l=new U,c=new U,u=new U,p=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,d),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),n.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),n.add(u),l.add(u),c.add(u),i.setXYZ(g,n.x,n.y,n.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const s=i[r].array,a=e.attributes[r],n=a.array,l=a.itemSize*t,c=Math.min(n.length,s.length-l);for(let u=0,p=l;u<c;u++,p++)s[p]=n[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(n,l){const c=n.array,u=n.itemSize,p=n.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let m=0,d=l.length;m<d;m++){n.isInterleavedBufferAttribute?f=l[m]*n.data.stride+n.offset:f=l[m]*u;for(let x=0;x<u;x++)h[g++]=c[f++]}return new $t(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,r=this.attributes;for(const n in r){const l=r[n],c=e(l,i);t.setAttribute(n,c)}const s=this.morphAttributes;for(const n in s){const l=[],c=s[n];for(let u=0,p=c.length;u<p;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[n]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let n=0,l=a.length;n<l;n++){const c=a[n];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const f=c[p];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const n=this.boundingSphere;return n!==null&&(e.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let h=0,f=p.length;h<f;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const n=e.boundingBox;n!==null&&(this.boundingBox=n.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new tt,nr=new Fl,an=new Br,bi=new U,wi=new U,Mi=new U,on=new U,ln=new U,cn=new U,ls=new U,cs=new U,us=new U,hs=new Ie,ds=new Ie,ps=new Ie,un=new U,ms=new U;class Xt extends gt{constructor(e=new Zt,t=new Mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),an.copy(i.boundingSphere),an.applyMatrix4(s),e.ray.intersectsSphere(an)===!1)||(ua.copy(s).invert(),nr.copy(e.ray).applyMatrix4(ua),i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1))return;let a;const n=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,p=i.attributes.uv,h=i.attributes.uv2,f=i.groups,g=i.drawRange;if(n!==null)if(Array.isArray(r))for(let m=0,d=f.length;m<d;m++){const x=f[m],v=r[x.materialIndex],w=Math.max(x.start,g.start),_=Math.min(n.count,Math.min(x.start+x.count,g.start+g.count));for(let M=w,E=_;M<E;M+=3){const L=n.getX(M),y=n.getX(M+1),S=n.getX(M+2);a=fs(this,v,e,nr,l,c,u,p,h,L,y,S),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(n.count,g.start+g.count);for(let x=m,v=d;x<v;x+=3){const w=n.getX(x),_=n.getX(x+1),M=n.getX(x+2);a=fs(this,r,e,nr,l,c,u,p,h,w,_,M),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,d=f.length;m<d;m++){const x=f[m],v=r[x.materialIndex],w=Math.max(x.start,g.start),_=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let M=w,E=_;M<E;M+=3){const L=M,y=M+1,S=M+2;a=fs(this,v,e,nr,l,c,u,p,h,L,y,S),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let x=m,v=d;x<v;x+=3){const w=x,_=x+1,M=x+2;a=fs(this,r,e,nr,l,c,u,p,h,w,_,M),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function Hl(o,e,t,i,r,s,a,n){let l;if(e.side===1?l=i.intersectTriangle(a,s,r,!0,n):l=i.intersectTriangle(r,s,a,e.side!==2,n),l===null)return null;ms.copy(n),ms.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:o}}function fs(o,e,t,i,r,s,a,n,l,c,u,p){bi.fromBufferAttribute(r,c),wi.fromBufferAttribute(r,u),Mi.fromBufferAttribute(r,p);const h=o.morphTargetInfluences;if(s&&h){ls.set(0,0,0),cs.set(0,0,0),us.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=h[g],x=s[g];d!==0&&(on.fromBufferAttribute(x,c),ln.fromBufferAttribute(x,u),cn.fromBufferAttribute(x,p),a?(ls.addScaledVector(on,d),cs.addScaledVector(ln,d),us.addScaledVector(cn,d)):(ls.addScaledVector(on.sub(bi),d),cs.addScaledVector(ln.sub(wi),d),us.addScaledVector(cn.sub(Mi),d)))}bi.add(ls),wi.add(cs),Mi.add(us)}o.isSkinnedMesh&&(o.boneTransform(c,bi),o.boneTransform(u,wi),o.boneTransform(p,Mi));const f=Hl(o,e,t,i,bi,wi,Mi,un);if(f){n&&(hs.fromBufferAttribute(n,c),ds.fromBufferAttribute(n,u),ps.fromBufferAttribute(n,p),f.uv=di.getUV(un,bi,wi,Mi,hs,ds,ps,new Ie)),l&&(hs.fromBufferAttribute(l,c),ds.fromBufferAttribute(l,u),ps.fromBufferAttribute(l,p),f.uv2=di.getUV(un,bi,wi,Mi,hs,ds,ps,new Ie));const g={a:c,b:u,c:p,normal:new U,materialIndex:0};di.getNormal(bi,wi,Mi,g.normal),f.face=g}return f}class Xr extends Zt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const n=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(p,2));function g(m,d,x,v,w,_,M,E,L,y,S){const P=_/L,F=M/y,G=_/2,z=M/2,D=E/2,k=L+1,C=y+1;let N=0,j=0;const O=new U;for(let W=0;W<C;W++){const Q=W*F-z;for(let H=0;H<k;H++){const ee=H*P-G;O[m]=ee*v,O[d]=Q*w,O[x]=D,c.push(O.x,O.y,O.z),O[m]=0,O[d]=0,O[x]=E>0?1:-1,u.push(O.x,O.y,O.z),p.push(H/L),p.push(1-W/y),N+=1}}for(let W=0;W<y;W++)for(let Q=0;Q<L;Q++){const H=h+Q+k*W,ee=h+Q+k*(W+1),ue=h+(Q+1)+k*(W+1),Te=h+(Q+1)+k*W;l.push(H,ee,Te),l.push(ee,ue,Te),j+=6}n.addGroup(f,j,S),f+=j,h+=N}}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const r=o[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function lt(o){const e={};for(let t=0;t<o.length;t++){const i=fr(o[t]);for(const r in i)e[r]=i[r]}return e}function Vl(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const jl={clone:fr,merge:lt};var ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ql,this.fragmentShader=Yl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Vl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class To extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Et extends To{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ln*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ln*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const n=this.filmOffset;n!==0&&(s+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=90,or=1;class Xl extends gt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Et(ar,or,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(1,0,0)),this.add(r);const s=new Et(ar,or,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);const a=new Et(ar,or,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new U(0,1,0)),this.add(a);const n=new Et(ar,or,e,t);n.layers=this.layers,n.up.set(0,0,-1),n.lookAt(new U(0,-1,0)),this.add(n);const l=new Et(ar,or,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const c=new Et(ar,or,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,n,l,c]=this.children,u=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,n),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=p,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Ao extends Tt{constructor(e,t,i,r,s,a,n,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,i,r,s,a,n,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $l extends Vi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ao(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xr(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Xt(r,s),n=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Xl(1,10,this).update(e,a),t.minFilter=n,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const hn=new U,Zl=new U,Jl=new Pt;class Pi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=hn.subVectors(i,t).cross(Zl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(hn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jl.getNormalMatrix(e),r=this.coplanarPoint(hn).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Br,gs=new U;class zn{constructor(e=new Pi,t=new Pi,i=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(s),n[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],n=i[3],l=i[4],c=i[5],u=i[6],p=i[7],h=i[8],f=i[9],g=i[10],m=i[11],d=i[12],x=i[13],v=i[14],w=i[15];return t[0].setComponents(n-r,p-l,m-h,w-d).normalize(),t[1].setComponents(n+r,p+l,m+h,w+d).normalize(),t[2].setComponents(n+s,p+c,m+f,w+x).normalize(),t[3].setComponents(n-s,p-c,m-f,w-x).normalize(),t[4].setComponents(n-a,p-u,m-g,w-v).normalize(),t[5].setComponents(n+a,p+u,m+g,w+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Co(){let o=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Kl(o,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const p=c.array,h=c.usage,f=o.createBuffer();o.bindBuffer(u,f),o.bufferData(u,p,h),c.onUploadCallback();let g;if(p instanceof Float32Array)g=5126;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(p instanceof Int16Array)g=5122;else if(p instanceof Uint32Array)g=5125;else if(p instanceof Int32Array)g=5124;else if(p instanceof Int8Array)g=5120;else if(p instanceof Uint8Array)g=5121;else if(p instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,p){const h=u.array,f=u.updateRange;o.bindBuffer(p,c),f.count===-1?o.bufferSubData(p,0,h):(t?o.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):o.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function n(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(o.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);p===void 0?i.set(c,r(c,u)):p.version<c.version&&(s(p.buffer,c,u),p.version=c.version)}return{get:a,remove:n,update:l}}class Ps extends Zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,n=Math.floor(i),l=Math.floor(r),c=n+1,u=l+1,p=e/n,h=t/l,f=[],g=[],m=[],d=[];for(let x=0;x<u;x++){const v=x*h-a;for(let w=0;w<c;w++){const _=w*p-s;g.push(_,-v,0),m.push(0,0,1),d.push(w/n),d.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<n;v++){const w=v+c*x,_=v+c*(x+1),M=v+1+c*(x+1),E=v+1+c*x;f.push(w,_,E),f.push(_,M,E)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(m,3)),this.setAttribute("uv",new ht(d,2))}static fromJSON(e){return new Ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ql=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ec=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ic=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nc="vec3 transformed = vec3( position );",ac=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,lc=`#ifdef USE_IRIDESCENCE
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
#endif`,cc=`#ifdef USE_BUMPMAP
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
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xc=`#define PI 3.141592653589793
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
}`,_c=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yc=`vec3 transformedNormal = objectNormal;
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
#endif`,bc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Mc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ec="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ac=`#ifdef USE_ENVMAP
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
#endif`,Cc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lc=`#ifdef USE_ENVMAP
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
#endif`,Rc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dc=`#ifdef USE_ENVMAP
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
#endif`,Pc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ic=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kc=`#ifdef USE_GRADIENTMAP
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
}`,Nc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Oc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bc=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Gc=`uniform bool receiveShadow;
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
#endif`,Uc=`#if defined( USE_ENVMAP )
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
#endif`,Wc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Vc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,qc=`PhysicalMaterial material;
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
#endif`,Yc=`struct PhysicalMaterial {
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
}`,Xc=`
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
#endif`,$c=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ou=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lu=`#ifdef USE_MORPHNORMALS
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
#endif`,cu=`#ifdef USE_MORPHTARGETS
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
#endif`,uu=`#ifdef USE_MORPHTARGETS
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
#endif`,hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,du=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gu=`#ifdef USE_NORMALMAP
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
#endif`,vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Su=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lu=`#ifdef USE_SHADOWMAP
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
#endif`,Ru=`#ifdef USE_SHADOWMAP
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
#endif`,Du=`#ifdef USE_SHADOWMAP
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
#endif`,Pu=`float getShadowMask() {
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
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,zu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,Nu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uu=`#ifdef USE_TRANSMISSION
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
#endif`,Wu=`#ifdef USE_TRANSMISSION
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
#endif`,Hu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Vu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ju=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Yu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,$u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ju=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qu=`#include <envmap_common_pars_fragment>
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
}`,eh=`#include <common>
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
}`,th=`#if DEPTH_PACKING == 3200
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
}`,ih=`#define DISTANCE
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
}`,rh=`#define DISTANCE
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
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ah=`uniform float scale;
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
}`,oh=`uniform vec3 diffuse;
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
}`,lh=`#include <common>
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
}`,ch=`uniform vec3 diffuse;
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
}`,uh=`#define LAMBERT
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
}`,hh=`uniform vec3 diffuse;
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
}`,dh=`#define MATCAP
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
}`,ph=`#define MATCAP
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
}`,mh=`#define NORMAL
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
}`,fh=`#define NORMAL
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
}`,gh=`#define PHONG
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
}`,vh=`#define PHONG
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
}`,xh=`#define STANDARD
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
}`,_h=`#define STANDARD
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
}`,yh=`#define TOON
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
}`,bh=`#define TOON
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
}`,wh=`uniform float size;
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
}`,Mh=`uniform vec3 diffuse;
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
}`,Sh=`#include <common>
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
}`,Eh=`uniform vec3 color;
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
}`,Th=`uniform float rotation;
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
}`,Ah=`uniform vec3 diffuse;
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
}`,Ae={alphamap_fragment:Ql,alphamap_pars_fragment:ec,alphatest_fragment:tc,alphatest_pars_fragment:ic,aomap_fragment:rc,aomap_pars_fragment:sc,begin_vertex:nc,beginnormal_vertex:ac,bsdfs:oc,iridescence_fragment:lc,bumpmap_pars_fragment:cc,clipping_planes_fragment:uc,clipping_planes_pars_fragment:hc,clipping_planes_pars_vertex:dc,clipping_planes_vertex:pc,color_fragment:mc,color_pars_fragment:fc,color_pars_vertex:gc,color_vertex:vc,common:xc,cube_uv_reflection_fragment:_c,defaultnormal_vertex:yc,displacementmap_pars_vertex:bc,displacementmap_vertex:wc,emissivemap_fragment:Mc,emissivemap_pars_fragment:Sc,encodings_fragment:Ec,encodings_pars_fragment:Tc,envmap_fragment:Ac,envmap_common_pars_fragment:Cc,envmap_pars_fragment:Lc,envmap_pars_vertex:Rc,envmap_physical_pars_fragment:Uc,envmap_vertex:Dc,fog_vertex:Pc,fog_pars_vertex:Ic,fog_fragment:Fc,fog_pars_fragment:zc,gradientmap_pars_fragment:kc,lightmap_fragment:Nc,lightmap_pars_fragment:Oc,lights_lambert_vertex:Bc,lights_pars_begin:Gc,lights_toon_fragment:Wc,lights_toon_pars_fragment:Hc,lights_phong_fragment:Vc,lights_phong_pars_fragment:jc,lights_physical_fragment:qc,lights_physical_pars_fragment:Yc,lights_fragment_begin:Xc,lights_fragment_maps:$c,lights_fragment_end:Zc,logdepthbuf_fragment:Jc,logdepthbuf_pars_fragment:Kc,logdepthbuf_pars_vertex:Qc,logdepthbuf_vertex:eu,map_fragment:tu,map_pars_fragment:iu,map_particle_fragment:ru,map_particle_pars_fragment:su,metalnessmap_fragment:nu,metalnessmap_pars_fragment:au,morphcolor_vertex:ou,morphnormal_vertex:lu,morphtarget_pars_vertex:cu,morphtarget_vertex:uu,normal_fragment_begin:hu,normal_fragment_maps:du,normal_pars_fragment:pu,normal_pars_vertex:mu,normal_vertex:fu,normalmap_pars_fragment:gu,clearcoat_normal_fragment_begin:vu,clearcoat_normal_fragment_maps:xu,clearcoat_pars_fragment:_u,iridescence_pars_fragment:yu,output_fragment:bu,packing:wu,premultiplied_alpha_fragment:Mu,project_vertex:Su,dithering_fragment:Eu,dithering_pars_fragment:Tu,roughnessmap_fragment:Au,roughnessmap_pars_fragment:Cu,shadowmap_pars_fragment:Lu,shadowmap_pars_vertex:Ru,shadowmap_vertex:Du,shadowmask_pars_fragment:Pu,skinbase_vertex:Iu,skinning_pars_vertex:Fu,skinning_vertex:zu,skinnormal_vertex:ku,specularmap_fragment:Nu,specularmap_pars_fragment:Ou,tonemapping_fragment:Bu,tonemapping_pars_fragment:Gu,transmission_fragment:Uu,transmission_pars_fragment:Wu,uv_pars_fragment:Hu,uv_pars_vertex:Vu,uv_vertex:ju,uv2_pars_fragment:qu,uv2_pars_vertex:Yu,uv2_vertex:Xu,worldpos_vertex:$u,background_vert:Zu,background_frag:Ju,cube_vert:Ku,cube_frag:Qu,depth_vert:eh,depth_frag:th,distanceRGBA_vert:ih,distanceRGBA_frag:rh,equirect_vert:sh,equirect_frag:nh,linedashed_vert:ah,linedashed_frag:oh,meshbasic_vert:lh,meshbasic_frag:ch,meshlambert_vert:uh,meshlambert_frag:hh,meshmatcap_vert:dh,meshmatcap_frag:ph,meshnormal_vert:mh,meshnormal_frag:fh,meshphong_vert:gh,meshphong_frag:vh,meshphysical_vert:xh,meshphysical_frag:_h,meshtoon_vert:yh,meshtoon_frag:bh,points_vert:wh,points_frag:Mh,shadow_vert:Sh,shadow_frag:Eh,sprite_vert:Th,sprite_frag:Ah},ne={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pt},uv2Transform:{value:new Pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}}},Yt={basic:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:lt([ne.points,ne.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:lt([ne.common,ne.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:lt([ne.sprite,ne.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:lt([ne.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:lt([ne.common,ne.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:lt([ne.lights,ne.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Yt.physical={uniforms:lt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function Ch(o,e,t,i,r,s){const a=new Pe(0);let n=r===!0?0:1,l,c,u=null,p=0,h=null;function f(m,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=e.get(v));const w=o.xr,_=w.getSession&&w.getSession();_&&_.environmentBlendMode==="additive"&&(v=null),v===null?g(a,n):v&&v.isColor&&(g(v,1),x=!0),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===306)?(c===void 0&&(c=new Xt(new Xr(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:fr(Yt.cube.uniforms),vertexShader:Yt.cube.vertexShader,fragmentShader:Yt.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||p!==v.version||h!==o.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,h=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xt(new Ps(2,2),new ji({name:"BackgroundMaterial",uniforms:fr(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||h!==o.toneMapping)&&(l.material.needsUpdate=!0,u=v,p=v.version,h=o.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),n=d,g(a,n)},getClearAlpha:function(){return n},setClearAlpha:function(m){n=m,g(a,n)},render:f}}function Lh(o,e,t,i){const r=o.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,n={},l=d(null);let c=l,u=!1;function p(D,k,C,N,j){let O=!1;if(a){const W=m(N,C,k);c!==W&&(c=W,f(c.object)),O=x(D,N,C,j),O&&v(D,N,C,j)}else{const W=k.wireframe===!0;(c.geometry!==N.id||c.program!==C.id||c.wireframe!==W)&&(c.geometry=N.id,c.program=C.id,c.wireframe=W,O=!0)}j!==null&&t.update(j,34963),(O||u)&&(u=!1,y(D,k,C,N),j!==null&&o.bindBuffer(34963,t.get(j).buffer))}function h(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(D){return i.isWebGL2?o.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?o.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function m(D,k,C){const N=C.wireframe===!0;let j=n[D.id];j===void 0&&(j={},n[D.id]=j);let O=j[k.id];O===void 0&&(O={},j[k.id]=O);let W=O[N];return W===void 0&&(W=d(h()),O[N]=W),W}function d(D){const k=[],C=[],N=[];for(let j=0;j<r;j++)k[j]=0,C[j]=0,N[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:C,attributeDivisors:N,object:D,attributes:{},index:null}}function x(D,k,C,N){const j=c.attributes,O=k.attributes;let W=0;const Q=C.getAttributes();for(const H in Q)if(Q[H].location>=0){const ee=j[H];let ue=O[H];if(ue===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;W++}return c.attributesNum!==W||c.index!==N}function v(D,k,C,N){const j={},O=k.attributes;let W=0;const Q=C.getAttributes();for(const H in Q)if(Q[H].location>=0){let ee=O[H];ee===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),j[H]=ue,W++}c.attributes=j,c.attributesNum=W,c.index=N}function w(){const D=c.newAttributes;for(let k=0,C=D.length;k<C;k++)D[k]=0}function _(D){M(D,0)}function M(D,k){const C=c.newAttributes,N=c.enabledAttributes,j=c.attributeDivisors;C[D]=1,N[D]===0&&(o.enableVertexAttribArray(D),N[D]=1),j[D]!==k&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),j[D]=k)}function E(){const D=c.newAttributes,k=c.enabledAttributes;for(let C=0,N=k.length;C<N;C++)k[C]!==D[C]&&(o.disableVertexAttribArray(C),k[C]=0)}function L(D,k,C,N,j,O){i.isWebGL2===!0&&(C===5124||C===5125)?o.vertexAttribIPointer(D,k,C,j,O):o.vertexAttribPointer(D,k,C,N,j,O)}function y(D,k,C,N){if(i.isWebGL2===!1&&(D.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const j=N.attributes,O=C.getAttributes(),W=k.defaultAttributeValues;for(const Q in O){const H=O[Q];if(H.location>=0){let ee=j[Q];if(ee===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const ue=ee.normalized,Te=ee.itemSize,J=t.get(ee);if(J===void 0)continue;const Fe=J.buffer,xe=J.type,ye=J.bytesPerElement;if(ee.isInterleavedBufferAttribute){const le=ee.data,Ue=le.stride,Se=ee.offset;if(le.isInstancedInterleavedBuffer){for(let me=0;me<H.locationSize;me++)M(H.location+me,le.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<H.locationSize;me++)_(H.location+me);o.bindBuffer(34962,Fe);for(let me=0;me<H.locationSize;me++)L(H.location+me,Te/H.locationSize,xe,ue,Ue*ye,(Se+Te/H.locationSize*me)*ye)}else{if(ee.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)M(H.location+le,ee.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<H.locationSize;le++)_(H.location+le);o.bindBuffer(34962,Fe);for(let le=0;le<H.locationSize;le++)L(H.location+le,Te/H.locationSize,xe,ue,Te*ye,Te/H.locationSize*le*ye)}}else if(W!==void 0){const ue=W[Q];if(ue!==void 0)switch(ue.length){case 2:o.vertexAttrib2fv(H.location,ue);break;case 3:o.vertexAttrib3fv(H.location,ue);break;case 4:o.vertexAttrib4fv(H.location,ue);break;default:o.vertexAttrib1fv(H.location,ue)}}}}E()}function S(){G();for(const D in n){const k=n[D];for(const C in k){const N=k[C];for(const j in N)g(N[j].object),delete N[j];delete k[C]}delete n[D]}}function P(D){if(n[D.id]===void 0)return;const k=n[D.id];for(const C in k){const N=k[C];for(const j in N)g(N[j].object),delete N[j];delete k[C]}delete n[D.id]}function F(D){for(const k in n){const C=n[k];if(C[D.id]===void 0)continue;const N=C[D.id];for(const j in N)g(N[j].object),delete N[j];delete C[D.id]}}function G(){z(),u=!0,c!==l&&(c=l,f(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:G,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:_,disableUnusedAttributes:E}}function Rh(o,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function n(c,u){o.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,p){if(p===0)return;let h,f;if(r)h=o,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](s,c,u,p),t.update(u,s,p)}this.setMode=a,this.render=n,this.renderInstances=l}function Dh(o,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let n=t.precision!==void 0?t.precision:"highp";const l=s(n);l!==n&&(console.warn("THREE.WebGLRenderer:",n,"not supported, using",l,"instead."),n=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=o.getParameter(34930),h=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),m=o.getParameter(34921),d=o.getParameter(36347),x=o.getParameter(36348),v=o.getParameter(36349),w=h>0,_=a||e.has("OES_texture_float"),M=w&&_,E=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:n,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:w,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:E}}function Ph(o){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Pi,n=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,f){const g=p.length!==0||h||i!==0||r;return r=h,t=u(p,f,0),i=p.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(p,h,f){const g=p.clippingPlanes,m=p.clipIntersection,d=p.clipShadows,x=o.get(p);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const v=s?0:i,w=v*4;let _=x.clippingState||null;l.value=_,_=u(g,h,w,f);for(let M=0;M!==w;++M)_[M]=t[M];x.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,f,g){const m=p!==null?p.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const x=f+m*4,v=h.matrixWorldInverse;n.getNormalMatrix(v),(d===null||d.length<x)&&(d=new Float32Array(x));for(let w=0,_=f;w!==m;++w,_+=4)a.copy(p[w]).applyMatrix4(v,n),a.normal.toArray(d,_),d[_+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Ih(o){let e=new WeakMap;function t(a,n){return n===303?a.mapping=301:n===304&&(a.mapping=302),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const n=a.mapping;if(n===303||n===304)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $l(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const n=a.target;n.removeEventListener("dispose",r);const l=e.get(n);l!==void 0&&(e.delete(n),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Fh extends To{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,n=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,n-=u*this.view.offsetY,l=n-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,n,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const dr=4,ha=[.125,.215,.35,.446,.526,.582],zi=20,dn=new Fh,da=new Pe;let pn=null;const Ii=(1+Math.sqrt(5))/2,cr=1/Ii,pa=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ii,cr),new U(0,Ii,-cr),new U(cr,0,Ii),new U(-cr,0,Ii),new U(Ii,cr,0),new U(-Ii,cr,0)];class ma{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){pn=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=va(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pn),e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pn=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},r=fa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fa(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zh(s)),this._blurMaterial=kh(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,dn)}_sceneToCubeUV(e,t,i,r){const s=new Et(90,1,t,i),a=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(da),l.toneMapping=0,l.autoClear=!1;const p=new Mo({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),h=new Xt(new Xr,p);let f=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,f=!0):(p.color.copy(da),f=!0);for(let m=0;m<6;m++){const d=m%3;d===0?(s.up.set(0,a[m],0),s.lookAt(n[m],0,0)):d===1?(s.up.set(0,0,a[m]),s.lookAt(0,n[m],0)):(s.up.set(0,a[m],0),s.lookAt(0,0,n[m]));const x=this._cubeSize;vs(r,d*x,m>2?x:0,x,x),l.setRenderTarget(r),f&&l.render(h,s),l.render(e,s)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=va()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ga());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),n=s.uniforms;n.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,dn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pa[(r-1)%pa.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,n){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Xt(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zi-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):zi;d>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${zi}`);const x=[];let v=0;for(let L=0;L<zi;++L){const y=L/m,S=Math.exp(-y*y/2);x.push(S),L===0?v+=S:L<d&&(v+=2*S)}for(let L=0;L<x.length;L++)x[L]=x[L]/v;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=x,h.latitudinal.value=a==="latitudinal",n&&(h.poleAxis.value=n);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const _=this._sizeLods[r],M=3*_*(r>w-dr?r-w+dr:0),E=4*(this._cubeSize-_);vs(t,M,E,3*_,2*_),l.setRenderTarget(t),l.render(p,dn)}}function zh(o){const e=[],t=[],i=[];let r=o;const s=o-dr+1+ha.length;for(let a=0;a<s;a++){const n=Math.pow(2,r);t.push(n);let l=1/n;a>o-dr?l=ha[a-o+dr-1]:a===0&&(l=0),i.push(l);const c=1/(n-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],f=6,g=6,m=3,d=2,x=1,v=new Float32Array(m*g*f),w=new Float32Array(d*g*f),_=new Float32Array(x*g*f);for(let E=0;E<f;E++){const L=E%3*2/3-1,y=E>2?0:-1,S=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];v.set(S,m*g*E),w.set(h,d*g*E);const P=[E,E,E,E,E,E];_.set(P,x*g*E)}const M=new Zt;M.setAttribute("position",new $t(v,m)),M.setAttribute("uv",new $t(w,d)),M.setAttribute("faceIndex",new $t(_,x)),e.push(M),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fa(o,e,t){const i=new Vi(o,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(o,e,t,i,r){o.viewport.set(e,t,i,r),o.scissor.set(e,t,i,r)}function kh(o,e,t){const i=new Float32Array(zi),r=new U(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ga(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function va(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function kn(){return`

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
	`}function Nh(o){let e=new WeakMap,t=null;function i(n){if(n&&n.isTexture){const l=n.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u)if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let p=e.get(n);return t===null&&(t=new ma(o)),p=c?t.fromEquirectangular(n,p):t.fromCubemap(n,p),e.set(n,p),p.texture}else{if(e.has(n))return e.get(n).texture;{const p=n.image;if(c&&p&&p.height>0||u&&p&&r(p)){t===null&&(t=new ma(o));const h=c?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,h),n.addEventListener("dispose",s),h.texture}else return null}}}return n}function r(n){let l=0;const c=6;for(let u=0;u<c;u++)n[u]!==void 0&&l++;return l===c}function s(n){const l=n.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Oh(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bh(o,e,t,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function n(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const g in h)e.update(h[g],34962);const f=p.morphAttributes;for(const g in f){const m=f[g];for(let d=0,x=m.length;d<x;d++)e.update(m[d],34962)}}function c(p){const h=[],f=p.index,g=p.attributes.position;let m=0;if(f!==null){const v=f.array;m=f.version;for(let w=0,_=v.length;w<_;w+=3){const M=v[w+0],E=v[w+1],L=v[w+2];h.push(M,E,E,L,L,M)}}else{const v=g.array;m=g.version;for(let w=0,_=v.length/3-1;w<_;w+=3){const M=w+0,E=w+1,L=w+2;h.push(M,E,E,L,L,M)}}const d=new(vo(h)?Eo:So)(h,1);d.version=m;const x=s.get(p);x&&e.remove(x),s.set(p,d)}function u(p){const h=s.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return s.get(p)}return{get:n,update:l,getWireframeAttribute:u}}function Gh(o,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let n,l;function c(h){n=h.type,l=h.bytesPerElement}function u(h,f){o.drawElements(s,f,n,h*l),t.update(f,s,1)}function p(h,f,g){if(g===0)return;let m,d;if(r)m=o,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,f,n,h*l,g),t.update(f,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=p}function Uh(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,n){switch(t.calls++,a){case 4:t.triangles+=n*(s/3);break;case 1:t.lines+=n*(s/2);break;case 3:t.lines+=n*(s-1);break;case 2:t.lines+=n*s;break;case 0:t.points+=n*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Wh(o,e){return o[0]-e[0]}function Hh(o,e){return Math.abs(e[1])-Math.abs(o[1])}function mn(o,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),o.divideScalar(t)}function Vh(o,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new et,n=[];for(let c=0;c<8;c++)n[c]=[c,0];function l(c,u,p,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==m){let w=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const _=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let P=0;_===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let F=u.attributes.position.count*P,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*G*4*m),D=new bo(z,F,G,m);D.type=1015,D.needsUpdate=!0;const k=P*4;for(let C=0;C<m;C++){const N=L[C],j=y[C],O=S[C],W=F*G*4*C;for(let Q=0;Q<N.count;Q++){const H=Q*k;_===!0&&(a.fromBufferAttribute(N,Q),N.normalized===!0&&mn(a,N),z[W+H+0]=a.x,z[W+H+1]=a.y,z[W+H+2]=a.z,z[W+H+3]=0),M===!0&&(a.fromBufferAttribute(j,Q),j.normalized===!0&&mn(a,j),z[W+H+4]=a.x,z[W+H+5]=a.y,z[W+H+6]=a.z,z[W+H+7]=0),E===!0&&(a.fromBufferAttribute(O,Q),O.normalized===!0&&mn(a,O),z[W+H+8]=a.x,z[W+H+9]=a.y,z[W+H+10]=a.z,z[W+H+11]=O.itemSize===4?a.w:1)}}d={count:m,texture:D,size:new Ie(F,G)},s.set(u,d),u.addEventListener("dispose",w)}let x=0;for(let w=0;w<f.length;w++)x+=f[w];const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(o,"morphTargetBaseInfluence",v),h.getUniforms().setValue(o,"morphTargetInfluences",f),h.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}else{const g=f===void 0?0:f.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let _=0;_<g;_++)m[_]=[_,0];i[u.id]=m}for(let _=0;_<g;_++){const M=m[_];M[0]=_,M[1]=f[_]}m.sort(Hh);for(let _=0;_<8;_++)_<g&&m[_][1]?(n[_][0]=m[_][0],n[_][1]=m[_][1]):(n[_][0]=Number.MAX_SAFE_INTEGER,n[_][1]=0);n.sort(Wh);const d=u.morphAttributes.position,x=u.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const M=n[_],E=M[0],L=M[1];E!==Number.MAX_SAFE_INTEGER&&L?(d&&u.getAttribute("morphTarget"+_)!==d[E]&&u.setAttribute("morphTarget"+_,d[E]),x&&u.getAttribute("morphNormal"+_)!==x[E]&&u.setAttribute("morphNormal"+_,x[E]),r[_]=L,v+=L):(d&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),x&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const w=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(o,"morphTargetBaseInfluence",w),h.getUniforms().setValue(o,"morphTargetInfluences",r)}}return{update:l}}function jh(o,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,p=e.get(l,u);return r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",n)===!1&&l.addEventListener("dispose",n),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),p}function a(){r=new WeakMap}function n(l){const c=l.target;c.removeEventListener("dispose",n),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Lo=new Tt,Ro=new bo,Do=new Pl,Po=new Ao,xa=[],_a=[],ya=new Float32Array(16),ba=new Float32Array(9),wa=new Float32Array(4);function yr(o,e,t){const i=o[0];if(i<=0||i>0)return o;const r=e*t;let s=xa[r];if(s===void 0&&(s=new Float32Array(r),xa[r]=s),e!==0){i.toArray(s,0);for(let a=1,n=0;a!==e;++a)n+=t,o[a].toArray(s,n)}return s}function vt(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function xt(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Is(o,e){let t=_a[e];t===void 0&&(t=new Int32Array(e),_a[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function qh(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Yh(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;o.uniform2fv(this.addr,e),xt(t,e)}}function Xh(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;o.uniform3fv(this.addr,e),xt(t,e)}}function $h(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;o.uniform4fv(this.addr,e),xt(t,e)}}function Zh(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;wa.set(i),o.uniformMatrix2fv(this.addr,!1,wa),xt(t,i)}}function Jh(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;ba.set(i),o.uniformMatrix3fv(this.addr,!1,ba),xt(t,i)}}function Kh(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;ya.set(i),o.uniformMatrix4fv(this.addr,!1,ya),xt(t,i)}}function Qh(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function ed(o,e){const t=this.cache;vt(t,e)||(o.uniform2iv(this.addr,e),xt(t,e))}function td(o,e){const t=this.cache;vt(t,e)||(o.uniform3iv(this.addr,e),xt(t,e))}function id(o,e){const t=this.cache;vt(t,e)||(o.uniform4iv(this.addr,e),xt(t,e))}function rd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function sd(o,e){const t=this.cache;vt(t,e)||(o.uniform2uiv(this.addr,e),xt(t,e))}function nd(o,e){const t=this.cache;vt(t,e)||(o.uniform3uiv(this.addr,e),xt(t,e))}function ad(o,e){const t=this.cache;vt(t,e)||(o.uniform4uiv(this.addr,e),xt(t,e))}function od(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Lo,r)}function ld(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Do,r)}function cd(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Po,r)}function ud(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ro,r)}function hd(o){switch(o){case 5126:return qh;case 35664:return Yh;case 35665:return Xh;case 35666:return $h;case 35674:return Zh;case 35675:return Jh;case 35676:return Kh;case 5124:case 35670:return Qh;case 35667:case 35671:return ed;case 35668:case 35672:return td;case 35669:case 35673:return id;case 5125:return rd;case 36294:return sd;case 36295:return nd;case 36296:return ad;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return ld;case 35680:case 36300:case 36308:case 36293:return cd;case 36289:case 36303:case 36311:case 36292:return ud}}function dd(o,e){o.uniform1fv(this.addr,e)}function pd(o,e){const t=yr(e,this.size,2);o.uniform2fv(this.addr,t)}function md(o,e){const t=yr(e,this.size,3);o.uniform3fv(this.addr,t)}function fd(o,e){const t=yr(e,this.size,4);o.uniform4fv(this.addr,t)}function gd(o,e){const t=yr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function vd(o,e){const t=yr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function xd(o,e){const t=yr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function _d(o,e){o.uniform1iv(this.addr,e)}function yd(o,e){o.uniform2iv(this.addr,e)}function bd(o,e){o.uniform3iv(this.addr,e)}function wd(o,e){o.uniform4iv(this.addr,e)}function Md(o,e){o.uniform1uiv(this.addr,e)}function Sd(o,e){o.uniform2uiv(this.addr,e)}function Ed(o,e){o.uniform3uiv(this.addr,e)}function Td(o,e){o.uniform4uiv(this.addr,e)}function Ad(o,e,t){const i=e.length,r=Is(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Lo,r[s])}function Cd(o,e,t){const i=e.length,r=Is(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Do,r[s])}function Ld(o,e,t){const i=e.length,r=Is(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Po,r[s])}function Rd(o,e,t){const i=e.length,r=Is(t,i);o.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Ro,r[s])}function Dd(o){switch(o){case 5126:return dd;case 35664:return pd;case 35665:return md;case 35666:return fd;case 35674:return gd;case 35675:return vd;case 35676:return xd;case 5124:case 35670:return _d;case 35667:case 35671:return yd;case 35668:case 35672:return bd;case 35669:case 35673:return wd;case 5125:return Md;case 36294:return Sd;case 36295:return Ed;case 36296:return Td;case 35678:case 36198:case 36298:case 36306:case 35682:return Ad;case 35679:case 36299:case 36307:return Cd;case 35680:case 36300:case 36308:case 36293:return Ld;case 36289:case 36303:case 36311:case 36292:return Rd}}class Pd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=hd(t.type)}}class Id{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Dd(t.type)}}class Fd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const n=r[s];n.setValue(e,t[n.id],i)}}}const fn=/(\w+)(\])?(\[|\.)?/g;function Ma(o,e){o.seq.push(e),o.map[e.id]=e}function zd(o,e,t){const i=o.name,r=i.length;for(fn.lastIndex=0;;){const s=fn.exec(i),a=fn.lastIndex;let n=s[1];const l=s[2]==="]",c=s[3];if(l&&(n=n|0),c===void 0||c==="["&&a+2===r){Ma(t,c===void 0?new Pd(n,o,e):new Id(n,o,e));break}else{let u=t.map[n];u===void 0&&(u=new Fd(n),Ma(t,u)),t=u}}}class Ts{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);zd(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const n=t[s],l=i[n.id];l.needsUpdate!==!1&&n.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Sa(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}let kd=0;function Nd(o,e){const t=o.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const n=a+1;i.push(`${n===e?">":" "} ${n}: ${t[a]}`)}return i.join(`
`)}function Od(o){switch(o){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Ea(o,e,t){const i=o.getShaderParameter(e,35713),r=o.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Nd(o.getShaderSource(e),a)}else return r}function Bd(o,e){const t=Od(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gd(o,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ud(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function Wd(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Hd(o,e){const t={},i=o.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=o.getActiveAttrib(e,r),a=s.name;let n=1;s.type===35674&&(n=2),s.type===35675&&(n=3),s.type===35676&&(n=4),t[a]={type:s.type,location:o.getAttribLocation(e,a),locationSize:n}}return t}function kr(o){return o!==""}function Ta(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Aa(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dn(o){return o.replace(Vd,jd)}function jd(o,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Dn(t)}const qd=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Yd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ca(o){return o.replace(Yd,Io).replace(qd,Xd)}function Xd(o,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Io(o,e,t,i)}function Io(o,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function La(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $d(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Zd(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jd(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Kd(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Qd(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ep(o,e,t,i){const r=o.getContext(),s=t.defines;let a=t.vertexShader,n=t.fragmentShader;const l=$d(t),c=Zd(t),u=Jd(t),p=Kd(t),h=Qd(t),f=t.isWebGL2?"":Ud(t),g=Wd(s),m=r.createProgram();let d,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(kr).join(`
`),d.length>0&&(d+=`
`),x=[f,g].filter(kr).join(`
`),x.length>0&&(x+=`
`)):(d=[La(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),x=[f,La(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ae.tonemapping_pars_fragment:"",t.toneMapping!==0?Gd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,Bd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=Dn(a),a=Ta(a,t),a=Aa(a,t),n=Dn(n),n=Ta(n,t),n=Aa(n,t),a=Ca(a),n=Ca(n),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===Kn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=v+d+a,_=v+x+n,M=Sa(r,35633,w),E=Sa(r,35632,_);if(r.attachShader(m,M),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),o.debug.checkShaderErrors){const S=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(M).trim(),F=r.getShaderInfoLog(E).trim();let G=!0,z=!0;if(r.getProgramParameter(m,35714)===!1){G=!1;const D=Ea(r,M,"vertex"),k=Ea(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+D+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||F==="")&&(z=!1);z&&(this.diagnostics={runnable:G,programLog:S,vertexShader:{log:P,prefix:d},fragmentShader:{log:F,prefix:x}})}r.deleteShader(M),r.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new Ts(r,m)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=Hd(r,m)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=kd++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}let tp=0;class ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new rp(e);t.set(e,i)}return t.get(e)}}class rp{constructor(e){this.id=tp++,this.code=e,this.usedTimes=0}}function sp(o,e,t,i,r,s,a){const n=new wo,l=new ip,c=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,S,P,F,G){const z=F.fog,D=G.geometry,k=y.isMeshStandardMaterial?F.environment:null,C=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),N=C&&C.mapping===306?C.image.height:null,j=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const O=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,W=O!==void 0?O.length:0;let Q=0;D.morphAttributes.position!==void 0&&(Q=1),D.morphAttributes.normal!==void 0&&(Q=2),D.morphAttributes.color!==void 0&&(Q=3);let H,ee,ue,Te;if(j){const le=Yt[j];H=le.vertexShader,ee=le.fragmentShader}else H=y.vertexShader,ee=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),Te=l.getFragmentShaderID(y);const J=o.getRenderTarget(),Fe=y.alphaTest>0,xe=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:y.type,vertexShader:H,fragmentShader:ee,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:h,outputEncoding:J===null?o.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:3e3,map:!!y.map,matcap:!!y.matcap,envMap:!!C,envMapMode:C&&C.mapping,envMapCubeUVHeight:N,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===1,tangentSpaceNormalMap:y.normalMapType===0,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===3001,clearcoat:xe,clearcoatMap:xe&&!!y.clearcoatMap,clearcoatRoughnessMap:xe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===1,alphaMap:!!y.alphaMap,alphaTest:Fe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!z,useFog:y.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:p,skinning:G.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:y.toneMapped?o.toneMapping:0,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===2,flipSided:y.side===1,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(x(S,y),v(S,y),S.push(o.outputEncoding)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputEncoding),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.combine),y.push(S.vertexUvs),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){n.disableAll(),S.isWebGL2&&n.enable(0),S.supportsVertexTextures&&n.enable(1),S.instancing&&n.enable(2),S.instancingColor&&n.enable(3),S.map&&n.enable(4),S.matcap&&n.enable(5),S.envMap&&n.enable(6),S.lightMap&&n.enable(7),S.aoMap&&n.enable(8),S.emissiveMap&&n.enable(9),S.bumpMap&&n.enable(10),S.normalMap&&n.enable(11),S.objectSpaceNormalMap&&n.enable(12),S.tangentSpaceNormalMap&&n.enable(13),S.clearcoat&&n.enable(14),S.clearcoatMap&&n.enable(15),S.clearcoatRoughnessMap&&n.enable(16),S.clearcoatNormalMap&&n.enable(17),S.iridescence&&n.enable(18),S.iridescenceMap&&n.enable(19),S.iridescenceThicknessMap&&n.enable(20),S.displacementMap&&n.enable(21),S.specularMap&&n.enable(22),S.roughnessMap&&n.enable(23),S.metalnessMap&&n.enable(24),S.gradientMap&&n.enable(25),S.alphaMap&&n.enable(26),S.alphaTest&&n.enable(27),S.vertexColors&&n.enable(28),S.vertexAlphas&&n.enable(29),S.vertexUvs&&n.enable(30),S.vertexTangents&&n.enable(31),S.uvsVertexOnly&&n.enable(32),S.fog&&n.enable(33),y.push(n.mask),n.disableAll(),S.useFog&&n.enable(0),S.flatShading&&n.enable(1),S.logarithmicDepthBuffer&&n.enable(2),S.skinning&&n.enable(3),S.morphTargets&&n.enable(4),S.morphNormals&&n.enable(5),S.morphColors&&n.enable(6),S.premultipliedAlpha&&n.enable(7),S.shadowMapEnabled&&n.enable(8),S.physicallyCorrectLights&&n.enable(9),S.doubleSided&&n.enable(10),S.flipSided&&n.enable(11),S.useDepthPacking&&n.enable(12),S.dithering&&n.enable(13),S.specularIntensityMap&&n.enable(14),S.specularColorMap&&n.enable(15),S.transmission&&n.enable(16),S.transmissionMap&&n.enable(17),S.thicknessMap&&n.enable(18),S.sheen&&n.enable(19),S.sheenColorMap&&n.enable(20),S.sheenRoughnessMap&&n.enable(21),S.decodeVideoTexture&&n.enable(22),S.opaque&&n.enable(23),y.push(n.mask)}function w(y){const S=g[y.type];let P;if(S){const F=Yt[S];P=jl.clone(F.uniforms)}else P=y.uniforms;return P}function _(y,S){let P;for(let F=0,G=c.length;F<G;F++){const z=c[F];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new ep(o,S,y,s),c.push(P)),P}function M(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:_,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:L}}function np(){let o=new WeakMap;function e(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function t(s){o.delete(s)}function i(s,a,n){o.get(s)[a]=n}function r(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ap(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ra(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Da(){const o=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(p,h,f,g,m,d){let x=o[e];return x===void 0?(x={id:p.id,object:p,geometry:h,material:f,groupOrder:g,renderOrder:p.renderOrder,z:m,group:d},o[e]=x):(x.id=p.id,x.object=p,x.geometry=h,x.material=f,x.groupOrder=g,x.renderOrder=p.renderOrder,x.z=m,x.group=d),e++,x}function n(p,h,f,g,m,d){const x=a(p,h,f,g,m,d);f.transmission>0?i.push(x):f.transparent===!0?r.push(x):t.push(x)}function l(p,h,f,g,m,d){const x=a(p,h,f,g,m,d);f.transmission>0?i.unshift(x):f.transparent===!0?r.unshift(x):t.unshift(x)}function c(p,h){t.length>1&&t.sort(p||ap),i.length>1&&i.sort(h||Ra),r.length>1&&r.sort(h||Ra)}function u(){for(let p=e,h=o.length;p<h;p++){const f=o[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:n,unshift:l,finish:u,sort:c}}function op(){let o=new WeakMap;function e(i,r){let s;return o.has(i)===!1?(s=new Da,o.set(i,[s])):r>=o.get(i).length?(s=new Da,o.get(i).push(s)):s=o.get(i)[r],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function lp(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Pe};break;case"SpotLight":t={position:new U,direction:new U,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new U,halfWidth:new U,halfHeight:new U};break}return o[e.id]=t,t}}}function cp(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let up=0;function hp(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function dp(o,e){const t=new lp,i=cp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new tt,n=new tt;function l(u,p){let h=0,f=0,g=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let m=0,d=0,x=0,v=0,w=0,_=0,M=0,E=0;u.sort(hp);const L=p!==!0?Math.PI:1;for(let S=0,P=u.length;S<P;S++){const F=u[S],G=F.color,z=F.intensity,D=F.distance,k=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=G.r*z*L,f+=G.g*z*L,g+=G.b*z*L;else if(F.isLightProbe)for(let C=0;C<9;C++)r.probe[C].addScaledVector(F.sh.coefficients[C],z);else if(F.isDirectionalLight){const C=t.get(F);if(C.color.copy(F.color).multiplyScalar(F.intensity*L),F.castShadow){const N=F.shadow,j=i.get(F);j.shadowBias=N.bias,j.shadowNormalBias=N.normalBias,j.shadowRadius=N.radius,j.shadowMapSize=N.mapSize,r.directionalShadow[m]=j,r.directionalShadowMap[m]=k,r.directionalShadowMatrix[m]=F.shadow.matrix,_++}r.directional[m]=C,m++}else if(F.isSpotLight){const C=t.get(F);if(C.position.setFromMatrixPosition(F.matrixWorld),C.color.copy(G).multiplyScalar(z*L),C.distance=D,C.coneCos=Math.cos(F.angle),C.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),C.decay=F.decay,F.castShadow){const N=F.shadow,j=i.get(F);j.shadowBias=N.bias,j.shadowNormalBias=N.normalBias,j.shadowRadius=N.radius,j.shadowMapSize=N.mapSize,r.spotShadow[x]=j,r.spotShadowMap[x]=k,r.spotShadowMatrix[x]=F.shadow.matrix,E++}r.spot[x]=C,x++}else if(F.isRectAreaLight){const C=t.get(F);C.color.copy(G).multiplyScalar(z),C.halfWidth.set(F.width*.5,0,0),C.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=C,v++}else if(F.isPointLight){const C=t.get(F);if(C.color.copy(F.color).multiplyScalar(F.intensity*L),C.distance=F.distance,C.decay=F.decay,F.castShadow){const N=F.shadow,j=i.get(F);j.shadowBias=N.bias,j.shadowNormalBias=N.normalBias,j.shadowRadius=N.radius,j.shadowMapSize=N.mapSize,j.shadowCameraNear=N.camera.near,j.shadowCameraFar=N.camera.far,r.pointShadow[d]=j,r.pointShadowMap[d]=k,r.pointShadowMatrix[d]=F.shadow.matrix,M++}r.point[d]=C,d++}else if(F.isHemisphereLight){const C=t.get(F);C.skyColor.copy(F.color).multiplyScalar(z*L),C.groundColor.copy(F.groundColor).multiplyScalar(z*L),r.hemi[w]=C,w++}}v>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=g;const y=r.hash;(y.directionalLength!==m||y.pointLength!==d||y.spotLength!==x||y.rectAreaLength!==v||y.hemiLength!==w||y.numDirectionalShadows!==_||y.numPointShadows!==M||y.numSpotShadows!==E)&&(r.directional.length=m,r.spot.length=x,r.rectArea.length=v,r.point.length=d,r.hemi.length=w,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=E,y.directionalLength=m,y.pointLength=d,y.spotLength=x,y.rectAreaLength=v,y.hemiLength=w,y.numDirectionalShadows=_,y.numPointShadows=M,y.numSpotShadows=E,r.version=up++)}function c(u,p){let h=0,f=0,g=0,m=0,d=0;const x=p.matrixWorldInverse;for(let v=0,w=u.length;v<w;v++){const _=u[v];if(_.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),h++}else if(_.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),g++}else if(_.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),n.identity(),a.copy(_.matrixWorld),a.premultiply(x),n.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(n),M.halfHeight.applyMatrix4(n),m++}else if(_.isPointLight){const M=r.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),f++}else if(_.isHemisphereLight){const M=r.hemi[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(x),d++}}}return{setup:l,setupView:c,state:r}}function Pa(o,e){const t=new dp(o,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(u){i.push(u)}function n(u){r.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:n}}function pp(o,e){let t=new WeakMap;function i(s,a=0){let n;return t.has(s)===!1?(n=new Pa(o,e),t.set(s,[n])):a>=t.get(s).length?(n=new Pa(o,e),t.get(s).push(n)):n=t.get(s)[a],n}function r(){t=new WeakMap}return{get:i,dispose:r}}class mp extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fp extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vp=`uniform sampler2D shadow_pass;
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
}`;function xp(o,e,t){let i=new zn;const r=new Ie,s=new Ie,a=new et,n=new mp({depthPacking:3201}),l=new fp,c={},u=t.maxTextureSize,p={0:1,1:0,2:2},h=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:gp,fragmentShader:vp}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(_,M,E){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;const L=o.getRenderTarget(),y=o.getActiveCubeFace(),S=o.getActiveMipmapLevel(),P=o.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let F=0,G=_.length;F<G;F++){const z=_[F],D=z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const k=D.getFrameExtents();if(r.multiply(k),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null){const N=this.type!==3?{minFilter:1003,magFilter:1003}:{};D.map=new Vi(r.x,r.y,N),D.map.texture.name=z.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const C=D.getViewportCount();for(let N=0;N<C;N++){const j=D.getViewport(N);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),P.viewport(a),D.updateMatrices(z,N),i=D.getFrustum(),w(M,E,D.camera,z,this.type)}D.isPointLightShadow!==!0&&this.type===3&&x(D,E),D.needsUpdate=!1}d.needsUpdate=!1,o.setRenderTarget(L,y,S)};function x(_,M){const E=e.update(m);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Vi(r.x,r.y)),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,o.setRenderTarget(_.mapPass),o.clear(),o.renderBufferDirect(M,null,E,h,m,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,o.setRenderTarget(_.map),o.clear(),o.renderBufferDirect(M,null,E,f,m,null)}function v(_,M,E,L,y,S){let P=null;const F=E.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(F!==void 0?P=F:P=E.isPointLight===!0?l:n,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const G=P.uuid,z=M.uuid;let D=c[G];D===void 0&&(D={},c[G]=D);let k=D[z];k===void 0&&(k=P.clone(),D[z]=k),P=k}return P.visible=M.visible,P.wireframe=M.wireframe,S===3?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:p[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=L,P.farDistance=y),P}function w(_,M,E,L,y){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&y===3)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,_.matrixWorld);const P=e.update(_),F=_.material;if(Array.isArray(F)){const G=P.groups;for(let z=0,D=G.length;z<D;z++){const k=G[z],C=F[k.materialIndex];if(C&&C.visible){const N=v(_,C,L,E.near,E.far,y);o.renderBufferDirect(E,null,P,N,_,k)}}}else if(F.visible){const G=v(_,F,L,E.near,E.far,y);o.renderBufferDirect(E,null,P,G,_,null)}}const S=_.children;for(let P=0,F=S.length;P<F;P++)w(S[P],M,E,L,y)}}function _p(o,e,t){const i=t.isWebGL2;function r(){let B=!1;const oe=new et;let $=null;const he=new et(0,0,0,0);return{setMask:function(re){$!==re&&!B&&(o.colorMask(re,re,re,re),$=re)},setLocked:function(re){B=re},setClear:function(re,We,it,Xe,fi){fi===!0&&(re*=Xe,We*=Xe,it*=Xe),oe.set(re,We,it,Xe),he.equals(oe)===!1&&(o.clearColor(re,We,it,Xe),he.copy(oe))},reset:function(){B=!1,$=null,he.set(-1,0,0,0)}}}function s(){let B=!1,oe=null,$=null,he=null;return{setTest:function(re){re?Fe(2929):xe(2929)},setMask:function(re){oe!==re&&!B&&(o.depthMask(re),oe=re)},setFunc:function(re){if($!==re){if(re)switch(re){case 0:o.depthFunc(512);break;case 1:o.depthFunc(519);break;case 2:o.depthFunc(513);break;case 3:o.depthFunc(515);break;case 4:o.depthFunc(514);break;case 5:o.depthFunc(518);break;case 6:o.depthFunc(516);break;case 7:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);$=re}},setLocked:function(re){B=re},setClear:function(re){he!==re&&(o.clearDepth(re),he=re)},reset:function(){B=!1,oe=null,$=null,he=null}}}function a(){let B=!1,oe=null,$=null,he=null,re=null,We=null,it=null,Xe=null,fi=null;return{setTest:function(je){B||(je?Fe(2960):xe(2960))},setMask:function(je){oe!==je&&!B&&(o.stencilMask(je),oe=je)},setFunc:function(je,Kt,Ct){($!==je||he!==Kt||re!==Ct)&&(o.stencilFunc(je,Kt,Ct),$=je,he=Kt,re=Ct)},setOp:function(je,Kt,Ct){(We!==je||it!==Kt||Xe!==Ct)&&(o.stencilOp(je,Kt,Ct),We=je,it=Kt,Xe=Ct)},setLocked:function(je){B=je},setClear:function(je){fi!==je&&(o.clearStencil(je),fi=je)},reset:function(){B=!1,oe=null,$=null,he=null,re=null,We=null,it=null,Xe=null,fi=null}}}const n=new r,l=new s,c=new a,u=new WeakMap,p=new WeakMap;let h={},f={},g=new WeakMap,m=[],d=null,x=!1,v=null,w=null,_=null,M=null,E=null,L=null,y=null,S=!1,P=null,F=null,G=null,z=null,D=null;const k=o.getParameter(35661);let C=!1,N=0;const j=o.getParameter(7938);j.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(j)[1]),C=N>=1):j.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),C=N>=2);let O=null,W={};const Q=o.getParameter(3088),H=o.getParameter(2978),ee=new et().fromArray(Q),ue=new et().fromArray(H);function Te(B,oe,$){const he=new Uint8Array(4),re=o.createTexture();o.bindTexture(B,re),o.texParameteri(B,10241,9728),o.texParameteri(B,10240,9728);for(let We=0;We<$;We++)o.texImage2D(oe+We,0,6408,1,1,0,6408,5121,he);return re}const J={};J[3553]=Te(3553,3553,1),J[34067]=Te(34067,34069,6),n.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(2929),l.setFunc(3),dt(!1),Ut(1),Fe(2884),nt(0);function Fe(B){h[B]!==!0&&(o.enable(B),h[B]=!0)}function xe(B){h[B]!==!1&&(o.disable(B),h[B]=!1)}function ye(B,oe){return f[B]!==oe?(o.bindFramebuffer(B,oe),f[B]=oe,i&&(B===36009&&(f[36160]=oe),B===36160&&(f[36009]=oe)),!0):!1}function le(B,oe){let $=m,he=!1;if(B)if($=g.get(oe),$===void 0&&($=[],g.set(oe,$)),B.isWebGLMultipleRenderTargets){const re=B.texture;if($.length!==re.length||$[0]!==36064){for(let We=0,it=re.length;We<it;We++)$[We]=36064+We;$.length=re.length,he=!0}}else $[0]!==36064&&($[0]=36064,he=!0);else $[0]!==1029&&($[0]=1029,he=!0);he&&(t.isWebGL2?o.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ue(B){return d!==B?(o.useProgram(B),d=B,!0):!1}const Se={100:32774,101:32778,102:32779};if(i)Se[103]=32775,Se[104]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(Se[103]=B.MIN_EXT,Se[104]=B.MAX_EXT)}const me={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function nt(B,oe,$,he,re,We,it,Xe){if(B===0){x===!0&&(xe(3042),x=!1);return}if(x===!1&&(Fe(3042),x=!0),B!==5){if(B!==v||Xe!==S){if((w!==100||E!==100)&&(o.blendEquation(32774),w=100,E=100),Xe)switch(B){case 1:o.blendFuncSeparate(1,771,1,771);break;case 2:o.blendFunc(1,1);break;case 3:o.blendFuncSeparate(0,769,0,1);break;case 4:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case 1:o.blendFuncSeparate(770,771,1,771);break;case 2:o.blendFunc(770,1);break;case 3:o.blendFuncSeparate(0,769,0,1);break;case 4:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,M=null,L=null,y=null,v=B,S=Xe}return}re=re||oe,We=We||$,it=it||he,(oe!==w||re!==E)&&(o.blendEquationSeparate(Se[oe],Se[re]),w=oe,E=re),($!==_||he!==M||We!==L||it!==y)&&(o.blendFuncSeparate(me[$],me[he],me[We],me[it]),_=$,M=he,L=We,y=it),v=B,S=null}function yt(B,oe){B.side===2?xe(2884):Fe(2884);let $=B.side===1;oe&&($=!$),dt($),B.blending===1&&B.transparent===!1?nt(0):nt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),n.setMask(B.colorWrite);const he=B.stencilWrite;c.setTest(he),he&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Fe(32926):xe(32926)}function dt(B){P!==B&&(B?o.frontFace(2304):o.frontFace(2305),P=B)}function Ut(B){B!==0?(Fe(2884),B!==F&&(B===1?o.cullFace(1029):B===2?o.cullFace(1028):o.cullFace(1032))):xe(2884),F=B}function at(B){B!==G&&(C&&o.lineWidth(B),G=B)}function Be(B,oe,$){B?(Fe(32823),(z!==oe||D!==$)&&(o.polygonOffset(oe,$),z=oe,D=$)):xe(32823)}function Jt(B){B?Fe(3089):xe(3089)}function Wt(B){B===void 0&&(B=33984+k-1),O!==B&&(o.activeTexture(B),O=B)}function R(B,oe){O===null&&Wt();let $=W[O];$===void 0&&($={type:void 0,texture:void 0},W[O]=$),($.type!==B||$.texture!==oe)&&(o.bindTexture(B,oe||J[B]),$.type=B,$.texture=oe)}function T(){const B=W[O];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{o.texSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{o.texSubImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{o.texStorage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{o.texStorage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{o.texImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{o.texImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(B){ee.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),ee.copy(B))}function pe(B){ue.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),ue.copy(B))}function Ee(B,oe){let $=p.get(oe);$===void 0&&($=new WeakMap,p.set(oe,$));let he=$.get(B);he===void 0&&(he=o.getUniformBlockIndex(oe,B.name),$.set(B,he))}function Ne(B,oe){const $=p.get(oe).get(B);u.get(B)!==$&&(o.uniformBlockBinding(oe,$,B.__bindingPointIndex),u.set(B,$))}function Ye(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},O=null,W={},f={},g=new WeakMap,m=[],d=null,x=!1,v=null,w=null,_=null,M=null,E=null,L=null,y=null,S=!1,P=null,F=null,G=null,z=null,D=null,ee.set(0,0,o.canvas.width,o.canvas.height),ue.set(0,0,o.canvas.width,o.canvas.height),n.reset(),l.reset(),c.reset()}return{buffers:{color:n,depth:l,stencil:c},enable:Fe,disable:xe,bindFramebuffer:ye,drawBuffers:le,useProgram:Ue,setBlending:nt,setMaterial:yt,setFlipSided:dt,setCullFace:Ut,setLineWidth:at,setPolygonOffset:Be,setScissorTest:Jt,activeTexture:Wt,bindTexture:R,unbindTexture:T,compressedTexImage2D:Z,texImage2D:ve,texImage3D:de,updateUBOMapping:Ee,uniformBlockBinding:Ne,texStorage2D:be,texStorage3D:X,texSubImage2D:te,texSubImage3D:ie,compressedTexSubImage2D:ae,scissor:fe,viewport:pe,reset:Ye}}function yp(o,e,t,i,r,s,a){const n=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,T){return x?new OffscreenCanvas(R,T):Ls("canvas")}function w(R,T,Z,te){let ie=1;if((R.width>te||R.height>te)&&(ie=te/Math.max(R.width,R.height)),ie<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ae=T?Rn:Math.floor,be=ae(ie*R.width),X=ae(ie*R.height);m===void 0&&(m=v(be,X));const ve=Z?v(be,X):m;return ve.width=be,ve.height=X,ve.getContext("2d").drawImage(R,0,0,be,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+be+"x"+X+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function _(R){return Qn(R.width)&&Qn(R.height)}function M(R){return n?!1:R.wrapS!==1001||R.wrapT!==1001||R.minFilter!==1003&&R.minFilter!==1006}function E(R,T){return R.generateMipmaps&&T&&R.minFilter!==1003&&R.minFilter!==1006}function L(R){o.generateMipmap(R)}function y(R,T,Z,te,ie=!1){if(n===!1)return T;if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=T;return T===6403&&(Z===5126&&(ae=33326),Z===5131&&(ae=33325),Z===5121&&(ae=33321)),T===33319&&(Z===5126&&(ae=33328),Z===5131&&(ae=33327),Z===5121&&(ae=33323)),T===6408&&(Z===5126&&(ae=34836),Z===5131&&(ae=34842),Z===5121&&(ae=te===3001&&ie===!1?35907:32856),Z===32819&&(ae=32854),Z===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function S(R,T,Z){return E(R,Z)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){return R===1003||R===1004||R===1005?9728:9729}function F(R){const T=R.target;T.removeEventListener("dispose",F),z(T),T.isVideoTexture&&g.delete(T)}function G(R){const T=R.target;T.removeEventListener("dispose",G),k(T)}function z(R){const T=i.get(R);if(T.__webglInit===void 0)return;const Z=R.source,te=d.get(Z);if(te){const ie=te[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&D(R),Object.keys(te).length===0&&d.delete(Z)}i.remove(R)}function D(R){const T=i.get(R);o.deleteTexture(T.__webglTexture);const Z=R.source,te=d.get(Z);delete te[T.__cacheKey],a.memory.textures--}function k(R){const T=R.texture,Z=i.get(R),te=i.get(T);if(te.__webglTexture!==void 0&&(o.deleteTexture(te.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(Z.__webglFramebuffer[ie]),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ie=0;ie<Z.__webglColorRenderbuffer.length;ie++)Z.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(Z.__webglColorRenderbuffer[ie]);Z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ie=0,ae=T.length;ie<ae;ie++){const be=i.get(T[ie]);be.__webglTexture&&(o.deleteTexture(be.__webglTexture),a.memory.textures--),i.remove(T[ie])}i.remove(T),i.remove(R)}let C=0;function N(){C=0}function j(){const R=C;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),C+=1,R}function O(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.encoding),T.join()}function W(R,T){const Z=i.get(R);if(R.isVideoTexture&&Jt(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(Z,R,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,Z.__webglTexture)}function Q(R,T){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){xe(Z,R,T);return}t.activeTexture(33984+T),t.bindTexture(35866,Z.__webglTexture)}function H(R,T){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){xe(Z,R,T);return}t.activeTexture(33984+T),t.bindTexture(32879,Z.__webglTexture)}function ee(R,T){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){ye(Z,R,T);return}t.activeTexture(33984+T),t.bindTexture(34067,Z.__webglTexture)}const ue={1e3:10497,1001:33071,1002:33648},Te={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function J(R,T,Z){if(Z?(o.texParameteri(R,10242,ue[T.wrapS]),o.texParameteri(R,10243,ue[T.wrapT]),(R===32879||R===35866)&&o.texParameteri(R,32882,ue[T.wrapR]),o.texParameteri(R,10240,Te[T.magFilter]),o.texParameteri(R,10241,Te[T.minFilter])):(o.texParameteri(R,10242,33071),o.texParameteri(R,10243,33071),(R===32879||R===35866)&&o.texParameteri(R,32882,33071),(T.wrapS!==1001||T.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(R,10240,P(T.magFilter)),o.texParameteri(R,10241,P(T.minFilter)),T.minFilter!==1003&&T.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.type===1015&&e.has("OES_texture_float_linear")===!1||n===!1&&T.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(o.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function Fe(R,T){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",F));const te=T.source;let ie=d.get(te);ie===void 0&&(ie={},d.set(te,ie));const ae=O(T);if(ae!==R.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ie[ae].usedTimes++;const be=ie[R.__cacheKey];be!==void 0&&(ie[R.__cacheKey].usedTimes--,be.usedTimes===0&&D(T)),R.__cacheKey=ae,R.__webglTexture=ie[ae].texture}return Z}function xe(R,T,Z){let te=3553;T.isDataArrayTexture&&(te=35866),T.isData3DTexture&&(te=32879);const ie=Fe(R,T),ae=T.source;if(t.activeTexture(33984+Z),t.bindTexture(te,R.__webglTexture),ae.version!==ae.__currentVersion||ie===!0){o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const be=M(T)&&_(T.image)===!1;let X=w(T.image,be,!1,u);X=Wt(T,X);const ve=_(X)||n,de=s.convert(T.format,T.encoding);let fe=s.convert(T.type),pe=y(T.internalFormat,de,fe,T.encoding,T.isVideoTexture);J(te,T,ve);let Ee;const Ne=T.mipmaps,Ye=n&&T.isVideoTexture!==!0,B=ae.__currentVersion===void 0||ie===!0,oe=S(T,X,ve);if(T.isDepthTexture)pe=6402,n?T.type===1015?pe=36012:T.type===1014?pe=33190:T.type===1020?pe=35056:pe=33189:T.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===1026&&pe===6402&&T.type!==1012&&T.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=1014,fe=s.convert(T.type)),T.format===1027&&pe===6402&&(pe=34041,T.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=1020,fe=s.convert(T.type))),B&&(Ye?t.texStorage2D(3553,1,pe,X.width,X.height):t.texImage2D(3553,0,pe,X.width,X.height,0,de,fe,null));else if(T.isDataTexture)if(Ne.length>0&&ve){Ye&&B&&t.texStorage2D(3553,oe,pe,Ne[0].width,Ne[0].height);for(let $=0,he=Ne.length;$<he;$++)Ee=Ne[$],Ye?t.texSubImage2D(3553,$,0,0,Ee.width,Ee.height,de,fe,Ee.data):t.texImage2D(3553,$,pe,Ee.width,Ee.height,0,de,fe,Ee.data);T.generateMipmaps=!1}else Ye?(B&&t.texStorage2D(3553,oe,pe,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,de,fe,X.data)):t.texImage2D(3553,0,pe,X.width,X.height,0,de,fe,X.data);else if(T.isCompressedTexture){Ye&&B&&t.texStorage2D(3553,oe,pe,Ne[0].width,Ne[0].height);for(let $=0,he=Ne.length;$<he;$++)Ee=Ne[$],T.format!==1023?de!==null?Ye?t.compressedTexSubImage2D(3553,$,0,0,Ee.width,Ee.height,de,Ee.data):t.compressedTexImage2D(3553,$,pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(3553,$,0,0,Ee.width,Ee.height,de,fe,Ee.data):t.texImage2D(3553,$,pe,Ee.width,Ee.height,0,de,fe,Ee.data)}else if(T.isDataArrayTexture)Ye?(B&&t.texStorage3D(35866,oe,pe,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,de,fe,X.data)):t.texImage3D(35866,0,pe,X.width,X.height,X.depth,0,de,fe,X.data);else if(T.isData3DTexture)Ye?(B&&t.texStorage3D(32879,oe,pe,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,de,fe,X.data)):t.texImage3D(32879,0,pe,X.width,X.height,X.depth,0,de,fe,X.data);else if(T.isFramebufferTexture){if(B)if(Ye)t.texStorage2D(3553,oe,pe,X.width,X.height);else{let $=X.width,he=X.height;for(let re=0;re<oe;re++)t.texImage2D(3553,re,pe,$,he,0,de,fe,null),$>>=1,he>>=1}}else if(Ne.length>0&&ve){Ye&&B&&t.texStorage2D(3553,oe,pe,Ne[0].width,Ne[0].height);for(let $=0,he=Ne.length;$<he;$++)Ee=Ne[$],Ye?t.texSubImage2D(3553,$,0,0,de,fe,Ee):t.texImage2D(3553,$,pe,de,fe,Ee);T.generateMipmaps=!1}else Ye?(B&&t.texStorage2D(3553,oe,pe,X.width,X.height),t.texSubImage2D(3553,0,0,0,de,fe,X)):t.texImage2D(3553,0,pe,de,fe,X);E(T,ve)&&L(te),ae.__currentVersion=ae.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ye(R,T,Z){if(T.image.length!==6)return;const te=Fe(R,T),ie=T.source;if(t.activeTexture(33984+Z),t.bindTexture(34067,R.__webglTexture),ie.version!==ie.__currentVersion||te===!0){o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const ae=T.isCompressedTexture||T.image[0].isCompressedTexture,be=T.image[0]&&T.image[0].isDataTexture,X=[];for(let $=0;$<6;$++)!ae&&!be?X[$]=w(T.image[$],!1,!0,c):X[$]=be?T.image[$].image:T.image[$],X[$]=Wt(T,X[$]);const ve=X[0],de=_(ve)||n,fe=s.convert(T.format,T.encoding),pe=s.convert(T.type),Ee=y(T.internalFormat,fe,pe,T.encoding),Ne=n&&T.isVideoTexture!==!0,Ye=ie.__currentVersion===void 0||te===!0;let B=S(T,ve,de);J(34067,T,de);let oe;if(ae){Ne&&Ye&&t.texStorage2D(34067,B,Ee,ve.width,ve.height);for(let $=0;$<6;$++){oe=X[$].mipmaps;for(let he=0;he<oe.length;he++){const re=oe[he];T.format!==1023?fe!==null?Ne?t.compressedTexSubImage2D(34069+$,he,0,0,re.width,re.height,fe,re.data):t.compressedTexImage2D(34069+$,he,Ee,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+$,he,0,0,re.width,re.height,fe,pe,re.data):t.texImage2D(34069+$,he,Ee,re.width,re.height,0,fe,pe,re.data)}}}else{oe=T.mipmaps,Ne&&Ye&&(oe.length>0&&B++,t.texStorage2D(34067,B,Ee,X[0].width,X[0].height));for(let $=0;$<6;$++)if(be){Ne?t.texSubImage2D(34069+$,0,0,0,X[$].width,X[$].height,fe,pe,X[$].data):t.texImage2D(34069+$,0,Ee,X[$].width,X[$].height,0,fe,pe,X[$].data);for(let he=0;he<oe.length;he++){const re=oe[he].image[$].image;Ne?t.texSubImage2D(34069+$,he+1,0,0,re.width,re.height,fe,pe,re.data):t.texImage2D(34069+$,he+1,Ee,re.width,re.height,0,fe,pe,re.data)}}else{Ne?t.texSubImage2D(34069+$,0,0,0,fe,pe,X[$]):t.texImage2D(34069+$,0,Ee,fe,pe,X[$]);for(let he=0;he<oe.length;he++){const re=oe[he];Ne?t.texSubImage2D(34069+$,he+1,0,0,fe,pe,re.image[$]):t.texImage2D(34069+$,he+1,Ee,fe,pe,re.image[$])}}}E(T,de)&&L(34067),ie.__currentVersion=ie.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function le(R,T,Z,te,ie){const ae=s.convert(Z.format,Z.encoding),be=s.convert(Z.type),X=y(Z.internalFormat,ae,be,Z.encoding);i.get(T).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,X,T.width,T.height,T.depth,0,ae,be,null):t.texImage2D(ie,0,X,T.width,T.height,0,ae,be,null)),t.bindFramebuffer(36160,R),Be(T)?h.framebufferTexture2DMultisampleEXT(36160,te,ie,i.get(Z).__webglTexture,0,at(T)):o.framebufferTexture2D(36160,te,ie,i.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(R,T,Z){if(o.bindRenderbuffer(36161,R),T.depthBuffer&&!T.stencilBuffer){let te=33189;if(Z||Be(T)){const ie=T.depthTexture;ie&&ie.isDepthTexture&&(ie.type===1015?te=36012:ie.type===1014&&(te=33190));const ae=at(T);Be(T)?h.renderbufferStorageMultisampleEXT(36161,ae,te,T.width,T.height):o.renderbufferStorageMultisample(36161,ae,te,T.width,T.height)}else o.renderbufferStorage(36161,te,T.width,T.height);o.framebufferRenderbuffer(36160,36096,36161,R)}else if(T.depthBuffer&&T.stencilBuffer){const te=at(T);Z&&Be(T)===!1?o.renderbufferStorageMultisample(36161,te,35056,T.width,T.height):Be(T)?h.renderbufferStorageMultisampleEXT(36161,te,35056,T.width,T.height):o.renderbufferStorage(36161,34041,T.width,T.height),o.framebufferRenderbuffer(36160,33306,36161,R)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0;ie<te.length;ie++){const ae=te[ie],be=s.convert(ae.format,ae.encoding),X=s.convert(ae.type),ve=y(ae.internalFormat,be,X,ae.encoding),de=at(T);Z&&Be(T)===!1?o.renderbufferStorageMultisample(36161,de,ve,T.width,T.height):Be(T)?h.renderbufferStorageMultisampleEXT(36161,de,ve,T.width,T.height):o.renderbufferStorage(36161,ve,T.width,T.height)}}o.bindRenderbuffer(36161,null)}function Se(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const Z=i.get(T.depthTexture).__webglTexture,te=at(T);if(T.depthTexture.format===1026)Be(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,te):o.framebufferTexture2D(36160,36096,3553,Z,0);else if(T.depthTexture.format===1027)Be(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,te):o.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function me(R){const T=i.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Se(T.__webglFramebuffer,R)}else if(Z){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=o.createRenderbuffer(),Ue(T.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Ue(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function nt(R,T,Z){const te=i.get(R);T!==void 0&&le(te.__webglFramebuffer,R,R.texture,36064,3553),Z!==void 0&&me(R)}function yt(R){const T=R.texture,Z=i.get(R),te=i.get(T);R.addEventListener("dispose",G),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=T.version,a.memory.textures++);const ie=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,be=_(R)||n;if(ie){Z.__webglFramebuffer=[];for(let X=0;X<6;X++)Z.__webglFramebuffer[X]=o.createFramebuffer()}else{if(Z.__webglFramebuffer=o.createFramebuffer(),ae)if(r.drawBuffers){const X=R.texture;for(let ve=0,de=X.length;ve<de;ve++){const fe=i.get(X[ve]);fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(n&&R.samples>0&&Be(R)===!1){const X=ae?T:[T];Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let ve=0;ve<X.length;ve++){const de=X[ve];Z.__webglColorRenderbuffer[ve]=o.createRenderbuffer(),o.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[ve]);const fe=s.convert(de.format,de.encoding),pe=s.convert(de.type),Ee=y(de.internalFormat,fe,pe,de.encoding),Ne=at(R);o.renderbufferStorageMultisample(36161,Ne,Ee,R.width,R.height),o.framebufferRenderbuffer(36160,36064+ve,36161,Z.__webglColorRenderbuffer[ve])}o.bindRenderbuffer(36161,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Ue(Z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),J(34067,T,be);for(let X=0;X<6;X++)le(Z.__webglFramebuffer[X],R,T,36064,34069+X);E(T,be)&&L(34067),t.unbindTexture()}else if(ae){const X=R.texture;for(let ve=0,de=X.length;ve<de;ve++){const fe=X[ve],pe=i.get(fe);t.bindTexture(3553,pe.__webglTexture),J(3553,fe,be),le(Z.__webglFramebuffer,R,fe,36064+ve,3553),E(fe,be)&&L(3553)}t.unbindTexture()}else{let X=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(n?X=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(X,te.__webglTexture),J(X,T,be),le(Z.__webglFramebuffer,R,T,36064,X),E(T,be)&&L(X),t.unbindTexture()}R.depthBuffer&&me(R)}function dt(R){const T=_(R)||n,Z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,ie=Z.length;te<ie;te++){const ae=Z[te];if(E(ae,T)){const be=R.isWebGLCubeRenderTarget?34067:3553,X=i.get(ae).__webglTexture;t.bindTexture(be,X),L(be),t.unbindTexture()}}}function Ut(R){if(n&&R.samples>0&&Be(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Z=R.width,te=R.height;let ie=16384;const ae=[],be=R.stencilBuffer?33306:36096,X=i.get(R),ve=R.isWebGLMultipleRenderTargets===!0;if(ve)for(let de=0;de<T.length;de++)t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,X.__webglFramebuffer),o.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,X.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,X.__webglFramebuffer);for(let de=0;de<T.length;de++){ae.push(36064+de),R.depthBuffer&&ae.push(be);const fe=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(fe===!1&&(R.depthBuffer&&(ie|=256),R.stencilBuffer&&(ie|=1024)),ve&&o.framebufferRenderbuffer(36008,36064,36161,X.__webglColorRenderbuffer[de]),fe===!0&&(o.invalidateFramebuffer(36008,[be]),o.invalidateFramebuffer(36009,[be])),ve){const pe=i.get(T[de]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,pe,0)}o.blitFramebuffer(0,0,Z,te,0,0,Z,te,ie,9728),f&&o.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ve)for(let de=0;de<T.length;de++){t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+de,36161,X.__webglColorRenderbuffer[de]);const fe=i.get(T[de]).__webglTexture;t.bindFramebuffer(36160,X.__webglFramebuffer),o.framebufferTexture2D(36009,36064+de,3553,fe,0)}t.bindFramebuffer(36009,X.__webglMultisampledFramebuffer)}}function at(R){return Math.min(p,R.samples)}function Be(R){const T=i.get(R);return n&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Jt(R){const T=a.render.frame;g.get(R)!==T&&(g.set(R,T),R.update())}function Wt(R,T){const Z=R.encoding,te=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===1035||Z!==3e3&&(Z===3001?n===!1?e.has("EXT_sRGB")===!0&&te===1023?(R.format=1035,R.minFilter=1006,R.generateMipmaps=!1):T=_o.sRGBToLinear(T):(te!==1023||ie!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),T}this.allocateTextureUnit=j,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=Q,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=nt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Be}function bp(o,e,t){const i=t.isWebGL2;function r(s,a=null){let n;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return i?5131:(n=e.get("OES_texture_half_float"),n!==null?n.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1028)return 6403;if(s===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===1035)return n=e.get("EXT_sRGB"),n!==null?n.SRGB_ALPHA_EXT:null;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(a===3001)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(s===33776)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(s===33776)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(s===35840)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return n=e.get("WEBGL_compressed_texture_etc1"),n!==null?n.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(s===37492)return a===3001?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(s===37496)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(s===37808)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return a===3001?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(s===36492)return a===3001?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===1020?i?34042:(n=e.get("WEBGL_depth_texture"),n!==null?n.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:r}}class wp extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class gn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const n=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const v=new xs;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[m.jointName]=v,c.add(v)}const x=c.joints[m.jointName];d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return n!==null&&(n.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Sp extends Tt{constructor(e,t,i,r,s,a,n,l,c,u){if(u=u!==void 0?u:1026,u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===1026&&(i=1014),i===void 0&&u===1027&&(i=1020),super(null,r,s,a,n,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=n!==void 0?n:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class Ep extends _r{constructor(e,t){super();const i=this;let r=null,s=1,a=null,n="local-floor",l=null,c=null,u=null,p=null,h=null,f=null;const g=t.getContextAttributes();let m=null,d=null;const x=[],v=[],w=new Et;w.layers.enable(1),w.viewport=new et;const _=new Et;_.layers.enable(2),_.viewport=new et;const M=[w,_],E=new wp;E.layers.enable(1),E.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=x[O];return W===void 0&&(W=new gn,x[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=x[O];return W===void 0&&(W=new gn,x[O]=W),W.getGripSpace()},this.getHand=function(O){let W=x[O];return W===void 0&&(W=new gn,x[O]=W),W.getHandSpace()};function S(O){const W=v.indexOf(O.inputSource);if(W===-1)return;const Q=x[W];Q!==void 0&&Q.dispatchEvent({type:O.type,data:O.inputSource})}function P(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",F);for(let O=0;O<x.length;O++){const W=v[O];W!==null&&(v[O]=null,x[O].disconnect(W))}L=null,y=null,e.setRenderTarget(m),h=null,p=null,u=null,r=null,d=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){n=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",P),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:h}),d=new Vi(h.framebufferWidth,h.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding})}else{let W=null,Q=null,H=null;g.depth&&(H=g.stencil?35056:33190,W=g.stencil?1027:1026,Q=g.stencil?1020:1014);const ee={colorFormat:32856,depthFormat:H,scaleFactor:s};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(ee),r.updateRenderState({layers:[p]}),d=new Vi(p.textureWidth,p.textureHeight,{format:1023,type:1009,depthTexture:new Sp(p.textureWidth,p.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ue=e.properties.get(d);ue.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(n),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(O){for(let W=0;W<O.removed.length;W++){const Q=O.removed[W],H=v.indexOf(Q);H>=0&&(v[H]=null,x[H].dispatchEvent({type:"disconnected",data:Q}))}for(let W=0;W<O.added.length;W++){const Q=O.added[W];let H=v.indexOf(Q);if(H===-1){for(let ue=0;ue<x.length;ue++)if(ue>=v.length){v.push(Q),H=ue;break}else if(v[ue]===null){v[ue]=Q,H=ue;break}if(H===-1)break}const ee=x[H];ee&&ee.dispatchEvent({type:"connected",data:Q})}}const G=new U,z=new U;function D(O,W,Q){G.setFromMatrixPosition(W.matrixWorld),z.setFromMatrixPosition(Q.matrixWorld);const H=G.distanceTo(z),ee=W.projectionMatrix.elements,ue=Q.projectionMatrix.elements,Te=ee[14]/(ee[10]-1),J=ee[14]/(ee[10]+1),Fe=(ee[9]+1)/ee[5],xe=(ee[9]-1)/ee[5],ye=(ee[8]-1)/ee[0],le=(ue[8]+1)/ue[0],Ue=Te*ye,Se=Te*le,me=H/(-ye+le),nt=me*-ye;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(nt),O.translateZ(me),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const yt=Te+me,dt=J+me,Ut=Ue-nt,at=Se+(H-nt),Be=Fe*J/dt*yt,Jt=xe*J/dt*yt;O.projectionMatrix.makePerspective(Ut,at,Be,Jt,yt,dt)}function k(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;E.near=_.near=w.near=O.near,E.far=_.far=w.far=O.far,(L!==E.near||y!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,y=E.far);const W=O.parent,Q=E.cameras;k(E,W);for(let ee=0;ee<Q.length;ee++)k(Q[ee],W);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),O.position.copy(E.position),O.quaternion.copy(E.quaternion),O.scale.copy(E.scale),O.matrix.copy(E.matrix),O.matrixWorld.copy(E.matrixWorld);const H=O.children;for(let ee=0,ue=H.length;ee<ue;ee++)H[ee].updateMatrixWorld(!0);Q.length===2?D(E,w,_):E.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(O){p!==null&&(p.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)};let C=null;function N(O,W){if(c=W.getViewerPose(l||a),f=W,c!==null){const Q=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let H=!1;Q.length!==E.cameras.length&&(E.cameras.length=0,H=!0);for(let ee=0;ee<Q.length;ee++){const ue=Q[ee];let Te=null;if(h!==null)Te=h.getViewport(ue);else{const Fe=u.getViewSubImage(p,ue);Te=Fe.viewport,ee===0&&(e.setRenderTargetTextures(d,Fe.colorTexture,p.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(d))}let J=M[ee];J===void 0&&(J=new Et,J.layers.enable(ee),J.viewport=new et,M[ee]=J),J.matrix.fromArray(ue.transform.matrix),J.projectionMatrix.fromArray(ue.projectionMatrix),J.viewport.set(Te.x,Te.y,Te.width,Te.height),ee===0&&E.matrix.copy(J.matrix),H===!0&&E.cameras.push(J)}}for(let Q=0;Q<x.length;Q++){const H=v[Q],ee=x[Q];H!==null&&ee!==void 0&&ee.update(H,W,l||a)}C&&C(O,W),f=null}const j=new Co;j.setAnimationLoop(N),this.setAnimationLoop=function(O){C=O},this.dispose=function(){}}}function Tp(o,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,x,v,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,w)):d.isMeshMatcapMaterial?(r(m,d),f(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?n(m,d,x,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===1&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===1&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=o.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let w;d.aoMap?w=d.aoMap:d.lightMap&&(w=d.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function n(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w;d.map?w=d.map:d.alphaMap&&(w=d.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===1&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function f(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Ap(o,e,t,i){let r={},s={},a=[];const n=t.isWebGL2?o.getParameter(35375):0;function l(v,w){const _=w.program;i.uniformBlockBinding(v,_)}function c(v,w){let _=r[v.id];_===void 0&&(g(v),_=u(v),r[v.id]=_,v.addEventListener("dispose",d));const M=w.program;i.updateUBOMapping(v,M);const E=e.render.frame;s[v.id]!==E&&(h(v),s[v.id]=E)}function u(v){const w=p();v.__bindingPointIndex=w;const _=o.createBuffer(),M=v.__size,E=v.usage;return o.bindBuffer(35345,_),o.bufferData(35345,M,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,w,_),_}function p(){for(let v=0;v<n;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const w=r[v.id],_=v.uniforms,M=v.__cache;o.bindBuffer(35345,w);for(let E=0,L=_.length;E<L;E++){const y=_[E];if(f(y,E,M)===!0){const S=y.value,P=y.__offset;typeof S=="number"?(y.__data[0]=S,o.bufferSubData(35345,P,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):S.toArray(y.__data),o.bufferSubData(35345,P,y.__data))}}o.bindBuffer(35345,null)}function f(v,w,_){const M=v.value;if(_[w]===void 0)return typeof M=="number"?_[w]=M:_[w]=M.clone(),!0;if(typeof M=="number"){if(_[w]!==M)return _[w]=M,!0}else{const E=_[w];if(E.equals(M)===!1)return E.copy(M),!0}return!1}function g(v){const w=v.uniforms;let _=0;const M=16;let E=0;for(let L=0,y=w.length;L<y;L++){const S=w[L],P=m(S);if(S.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=_,L>0){E=_%M;const F=M-E;E!==0&&F-P.boundary<0&&(_+=M-E,S.__offset=_)}_+=P.storage}return E=_%M,E>0&&(_+=M-E),v.__size=_,v.__cache={},this}function m(v){const w=v.value,_={boundary:0,storage:0};return typeof w=="number"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function d(v){const w=v.target;w.removeEventListener("dispose",d);const _=a.indexOf(w.__bindingPointIndex);a.splice(_,1),o.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function x(){for(const v in r)o.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:x}}function Cp(){const o=Ls("canvas");return o.style.display="block",o}function Fo(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Cp(),t=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,r=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,n=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let p=null,h=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,x=0,v=0,w=null,_=-1,M=null;const E=new et,L=new et;let y=null,S=e.width,P=e.height,F=1,G=null,z=null;const D=new et(0,0,S,P),k=new et(0,0,S,P);let C=!1;const N=new zn;let j=!1,O=!1,W=null;const Q=new tt,H=new Ie,ee=new U,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return w===null?F:1}let J=t;function Fe(A,V){for(let Y=0;Y<A.length;Y++){const q=A[Y],K=e.getContext(q,V);if(K!==null)return K}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:n,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fn}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",Ye,!1),J===null){const V=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&V.shift(),J=Fe(V,A),J===null)throw Fe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xe,ye,le,Ue,Se,me,nt,yt,dt,Ut,at,Be,Jt,Wt,R,T,Z,te,ie,ae,be,X,ve,de;function fe(){xe=new Oh(J),ye=new Dh(J,xe,o),xe.init(ye),X=new bp(J,xe,ye),le=new _p(J,xe,ye),Ue=new Uh,Se=new np,me=new yp(J,xe,le,Se,ye,X,Ue),nt=new Ih(m),yt=new Nh(m),dt=new Kl(J,ye),ve=new Lh(J,xe,dt,ye),Ut=new Bh(J,dt,Ue,ve),at=new jh(J,Ut,dt,Ue),ie=new Vh(J,ye,me),T=new Ph(Se),Be=new sp(m,nt,yt,xe,ye,ve,T),Jt=new Tp(m,Se),Wt=new op,R=new pp(xe,ye),te=new Ch(m,nt,le,at,u,a),Z=new xp(m,at,ye),de=new Ap(J,Ue,ye,le),ae=new Rh(J,xe,Ue,ye),be=new Gh(J,xe,Ue,ye),Ue.programs=Be.programs,m.capabilities=ye,m.extensions=xe,m.properties=Se,m.renderLists=Wt,m.shadowMap=Z,m.state=le,m.info=Ue}fe();const pe=new Ep(m,J);this.xr=pe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(S,P,!1))},this.getSize=function(A){return A.set(S,P)},this.setSize=function(A,V,Y){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=A,P=V,e.width=Math.floor(A*F),e.height=Math.floor(V*F),Y!==!1&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(S*F,P*F).floor()},this.setDrawingBufferSize=function(A,V,Y){S=A,P=V,F=Y,e.width=Math.floor(A*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,V,Y,q){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,V,Y,q),le.viewport(E.copy(D).multiplyScalar(F).floor())},this.getScissor=function(A){return A.copy(k)},this.setScissor=function(A,V,Y,q){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,V,Y,q),le.scissor(L.copy(k).multiplyScalar(F).floor())},this.getScissorTest=function(){return C},this.setScissorTest=function(A){le.setScissorTest(C=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,V=!0,Y=!0){let q=0;A&&(q|=16384),V&&(q|=256),Y&&(q|=1024),J.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Ye,!1),Wt.dispose(),R.dispose(),Se.dispose(),nt.dispose(),yt.dispose(),at.dispose(),ve.dispose(),de.dispose(),Be.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",We),pe.removeEventListener("sessionend",it),W&&(W.dispose(),W=null),Xe.stop()};function Ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const A=Ue.autoReset,V=Z.enabled,Y=Z.autoUpdate,q=Z.needsUpdate,K=Z.type;fe(),Ue.autoReset=A,Z.enabled=V,Z.autoUpdate=Y,Z.needsUpdate=q,Z.type=K}function Ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function B(A){const V=A.target;V.removeEventListener("dispose",B),oe(V)}function oe(A){$(A),Se.remove(A)}function $(A){const V=Se.get(A).programs;V!==void 0&&(V.forEach(function(Y){Be.releaseProgram(Y)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Y,q,K,ge){V===null&&(V=ue);const we=K.isMesh&&K.matrixWorld.determinant()<0,Me=$o(A,V,Y,q,K);le.setMaterial(q,we);let Le=Y.index;const qe=Y.attributes.position;if(Le===null){if(qe===void 0||qe.count===0)return}else if(Le.count===0)return;let Re=1;q.wireframe===!0&&(Le=Ut.getWireframeAttribute(Y),Re=2),ve.setup(K,q,Me,Y,Le);let ze,rt=ae;Le!==null&&(ze=dt.get(Le),rt=be,rt.setIndex(ze));const Ai=Le!==null?Le.count:qe.count,Yi=Y.drawRange.start*Re,Xi=Y.drawRange.count*Re,Ht=ge!==null?ge.start*Re:0,Oe=ge!==null?ge.count*Re:1/0,$i=Math.max(Yi,Ht),br=Math.min(Ai,Yi+Xi,Ht+Oe)-1,Lt=Math.max(0,br-$i+1);if(Lt!==0){if(K.isMesh)q.wireframe===!0?(le.setLineWidth(q.wireframeLinewidth*Te()),rt.setMode(1)):rt.setMode(4);else if(K.isLine){let gi=q.linewidth;gi===void 0&&(gi=1),le.setLineWidth(gi*Te()),K.isLineSegments?rt.setMode(1):K.isLineLoop?rt.setMode(2):rt.setMode(3)}else K.isPoints?rt.setMode(0):K.isSprite&&rt.setMode(4);if(K.isInstancedMesh)rt.renderInstances($i,Lt,K.count);else if(Y.isInstancedBufferGeometry){const gi=Math.min(Y.instanceCount,Y._maxInstanceCount);rt.renderInstances($i,Lt,gi)}else rt.render($i,Lt)}},this.compile=function(A,V){h=R.get(A),h.init(),g.push(h),A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights(m.physicallyCorrectLights),A.traverse(function(Y){const q=Y.material;if(q)if(Array.isArray(q))for(let K=0;K<q.length;K++){const ge=q[K];Fs(ge,A,Y)}else Fs(q,A,Y)}),g.pop(),h=null};let he=null;function re(A){he&&he(A)}function We(){Xe.stop()}function it(){Xe.start()}const Xe=new Co;Xe.setAnimationLoop(re),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(A){he=A,pe.setAnimationLoop(A),A===null?Xe.stop():Xe.start()},pe.addEventListener("sessionstart",We),pe.addEventListener("sessionend",it),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(V),V=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,V,w),h=R.get(A,g.length),h.init(),g.push(h),Q.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),N.setFromProjectionMatrix(Q),O=this.localClippingEnabled,j=T.init(this.clippingPlanes,O,V),p=Wt.get(A,f.length),p.init(),f.push(p),fi(A,V,0,m.sortObjects),p.finish(),m.sortObjects===!0&&p.sort(G,z),j===!0&&T.beginShadows();const Y=h.state.shadowsArray;if(Z.render(Y,A,V),j===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(p,A),h.setupLights(m.physicallyCorrectLights),V.isArrayCamera){const q=V.cameras;for(let K=0,ge=q.length;K<ge;K++){const we=q[K];je(p,A,we,we.viewport)}}else je(p,A,V);w!==null&&(me.updateMultisampleRenderTarget(w),me.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(m,A,V),ve.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?p=f[f.length-1]:p=null};function fi(A,V,Y,q){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||N.intersectsSprite(A)){q&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const ge=at.update(A),we=A.material;we.visible&&p.push(A,ge,we,Y,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ue.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ue.render.frame),!A.frustumCulled||N.intersectsObject(A))){q&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const ge=at.update(A),we=A.material;if(Array.isArray(we)){const Me=ge.groups;for(let Le=0,qe=Me.length;Le<qe;Le++){const Re=Me[Le],ze=we[Re.materialIndex];ze&&ze.visible&&p.push(A,ge,ze,Y,ee.z,Re)}}else we.visible&&p.push(A,ge,we,Y,ee.z,null)}}const K=A.children;for(let ge=0,we=K.length;ge<we;ge++)fi(K[ge],V,Y,q)}function je(A,V,Y,q){const K=A.opaque,ge=A.transmissive,we=A.transparent;h.setupLightsView(Y),ge.length>0&&Kt(K,V,Y),q&&le.viewport(E.copy(q)),K.length>0&&Ct(K,V,Y),ge.length>0&&Ct(ge,V,Y),we.length>0&&Ct(we,V,Y),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Kt(A,V,Y){const q=ye.isWebGL2;W===null&&(W=new Vi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:q&&s===!0?4:0})),m.getDrawingBufferSize(H),q?W.setSize(H.x,H.y):W.setSize(Rn(H.x),Rn(H.y));const K=m.getRenderTarget();m.setRenderTarget(W),m.clear();const ge=m.toneMapping;m.toneMapping=0,Ct(A,V,Y),m.toneMapping=ge,me.updateMultisampleRenderTarget(W),me.updateRenderTargetMipmap(W),m.setRenderTarget(K)}function Ct(A,V,Y){const q=V.isScene===!0?V.overrideMaterial:null;for(let K=0,ge=A.length;K<ge;K++){const we=A[K],Me=we.object,Le=we.geometry,qe=q===null?we.material:q,Re=we.group;Me.layers.test(Y.layers)&&Xo(Me,V,Y,Le,qe,Re)}}function Xo(A,V,Y,q,K,ge){A.onBeforeRender(m,V,Y,q,K,ge),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(m,V,Y,q,A,ge),K.transparent===!0&&K.side===2?(K.side=1,K.needsUpdate=!0,m.renderBufferDirect(Y,V,q,K,A,ge),K.side=0,K.needsUpdate=!0,m.renderBufferDirect(Y,V,q,K,A,ge),K.side=2):m.renderBufferDirect(Y,V,q,K,A,ge),A.onAfterRender(m,V,Y,q,K,ge)}function Fs(A,V,Y){V.isScene!==!0&&(V=ue);const q=Se.get(A),K=h.state.lights,ge=h.state.shadowsArray,we=K.state.version,Me=Be.getParameters(A,K.state,ge,V,Y),Le=Be.getProgramCacheKey(Me);let qe=q.programs;q.environment=A.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(A.isMeshStandardMaterial?yt:nt).get(A.envMap||q.environment),qe===void 0&&(A.addEventListener("dispose",B),qe=new Map,q.programs=qe);let Re=qe.get(Le);if(Re!==void 0){if(q.currentProgram===Re&&q.lightsStateVersion===we)return Hn(A,Me),Re}else Me.uniforms=Be.getUniforms(A),A.onBuild(Y,Me,m),A.onBeforeCompile(Me,m),Re=Be.acquireProgram(Me,Le),qe.set(Le,Re),q.uniforms=Me.uniforms;const ze=q.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=T.uniform),Hn(A,Me),q.needsLights=Jo(A),q.lightsStateVersion=we,q.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMap.value=K.state.directionalShadowMap,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotShadowMap.value=K.state.spotShadowMap,ze.spotShadowMatrix.value=K.state.spotShadowMatrix,ze.pointShadowMap.value=K.state.pointShadowMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix);const rt=Re.getUniforms(),Ai=Ts.seqWithValue(rt.seq,ze);return q.currentProgram=Re,q.uniformsList=Ai,Re}function Hn(A,V){const Y=Se.get(A);Y.outputEncoding=V.outputEncoding,Y.instancing=V.instancing,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function $o(A,V,Y,q,K){V.isScene!==!0&&(V=ue),me.resetTextureUnits();const ge=V.fog,we=q.isMeshStandardMaterial?V.environment:null,Me=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:3e3,Le=(q.isMeshStandardMaterial?yt:nt).get(q.envMap||we),qe=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Re=!!q.normalMap&&!!Y.attributes.tangent,ze=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,Ai=!!Y.morphAttributes.color,Yi=q.toneMapped?m.toneMapping:0,Xi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ht=Xi!==void 0?Xi.length:0,Oe=Se.get(q),$i=h.state.lights;if(j===!0&&(O===!0||A!==M)){const bt=A===M&&q.id===_;T.setState(q,A,bt)}let br=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==$i.state.version||Oe.outputEncoding!==Me||K.isInstancedMesh&&Oe.instancing===!1||!K.isInstancedMesh&&Oe.instancing===!0||K.isSkinnedMesh&&Oe.skinning===!1||!K.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Le||q.fog===!0&&Oe.fog!==ge||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==T.numPlanes||Oe.numIntersection!==T.numIntersection)||Oe.vertexAlphas!==qe||Oe.vertexTangents!==Re||Oe.morphTargets!==ze||Oe.morphNormals!==rt||Oe.morphColors!==Ai||Oe.toneMapping!==Yi||ye.isWebGL2===!0&&Oe.morphTargetsCount!==Ht)&&(br=!0):(br=!0,Oe.__version=q.version);let Lt=Oe.currentProgram;br===!0&&(Lt=Fs(q,V,K));let gi=!1,wr=!1,zs=!1;const pt=Lt.getUniforms(),Mr=Oe.uniforms;if(le.useProgram(Lt.program)&&(gi=!0,wr=!0,zs=!0),q.id!==_&&(_=q.id,wr=!0),gi||M!==A){if(pt.setValue(J,"projectionMatrix",A.projectionMatrix),ye.logarithmicDepthBuffer&&pt.setValue(J,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,wr=!0,zs=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const bt=pt.map.cameraPosition;bt!==void 0&&bt.setValue(J,ee.setFromMatrixPosition(A.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(J,"isOrthographic",A.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||K.isSkinnedMesh)&&pt.setValue(J,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){pt.setOptional(J,K,"bindMatrix"),pt.setOptional(J,K,"bindMatrixInverse");const bt=K.skeleton;bt&&(ye.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(J,"boneTexture",bt.boneTexture,me),pt.setValue(J,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ks=Y.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0&&ye.isWebGL2===!0)&&ie.update(K,Y,q,Lt),(wr||Oe.receiveShadow!==K.receiveShadow)&&(Oe.receiveShadow=K.receiveShadow,pt.setValue(J,"receiveShadow",K.receiveShadow)),wr&&(pt.setValue(J,"toneMappingExposure",m.toneMappingExposure),Oe.needsLights&&Zo(Mr,zs),ge&&q.fog===!0&&Jt.refreshFogUniforms(Mr,ge),Jt.refreshMaterialUniforms(Mr,q,F,P,W),Ts.upload(J,Oe.uniformsList,Mr,me)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ts.upload(J,Oe.uniformsList,Mr,me),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(J,"center",K.center),pt.setValue(J,"modelViewMatrix",K.modelViewMatrix),pt.setValue(J,"normalMatrix",K.normalMatrix),pt.setValue(J,"modelMatrix",K.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const bt=q.uniformsGroups;for(let Ns=0,Ko=bt.length;Ns<Ko;Ns++)if(ye.isWebGL2){const Vn=bt[Ns];de.update(Vn,Lt),de.bind(Vn,Lt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lt}function Zo(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Jo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,V,Y){Se.get(A.texture).__webglTexture=V,Se.get(A.depthTexture).__webglTexture=Y;const q=Se.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const Y=Se.get(A);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Y=0){w=A,x=V,v=Y;let q=!0;if(A){const Me=Se.get(A);Me.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),q=!1):Me.__webglFramebuffer===void 0?me.setupRenderTarget(A):Me.__hasExternalTextures&&me.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture)}let K=null,ge=!1,we=!1;if(A){const Me=A.texture;(Me.isData3DTexture||Me.isDataArrayTexture)&&(we=!0);const Le=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=Le[V],ge=!0):ye.isWebGL2&&A.samples>0&&me.useMultisampledRTT(A)===!1?K=Se.get(A).__webglMultisampledFramebuffer:K=Le,E.copy(A.viewport),L.copy(A.scissor),y=A.scissorTest}else E.copy(D).multiplyScalar(F).floor(),L.copy(k).multiplyScalar(F).floor(),y=C;if(le.bindFramebuffer(36160,K)&&ye.drawBuffers&&q&&le.drawBuffers(A,K),le.viewport(E),le.scissor(L),le.setScissorTest(y),ge){const Me=Se.get(A.texture);J.framebufferTexture2D(36160,36064,34069+V,Me.__webglTexture,Y)}else if(we){const Me=Se.get(A.texture),Le=V||0;J.framebufferTextureLayer(36160,36064,Me.__webglTexture,Y||0,Le)}_=-1},this.readRenderTargetPixels=function(A,V,Y,q,K,ge,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Me=Me[we]),Me){le.bindFramebuffer(36160,Me);try{const Le=A.texture,qe=Le.format,Re=Le.type;if(qe!==1023&&X.convert(qe)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Re===1016&&(xe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Re!==1009&&X.convert(Re)!==J.getParameter(35738)&&!(Re===1015&&(ye.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-q&&Y>=0&&Y<=A.height-K&&J.readPixels(V,Y,q,K,X.convert(qe),X.convert(Re),ge)}finally{const Le=w!==null?Se.get(w).__webglFramebuffer:null;le.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(A,V,Y=0){const q=Math.pow(2,-Y),K=Math.floor(V.image.width*q),ge=Math.floor(V.image.height*q);me.setTexture2D(V,0),J.copyTexSubImage2D(3553,Y,0,0,A.x,A.y,K,ge),le.unbindTexture()},this.copyTextureToTexture=function(A,V,Y,q=0){const K=V.image.width,ge=V.image.height,we=X.convert(Y.format),Me=X.convert(Y.type);me.setTexture2D(Y,0),J.pixelStorei(37440,Y.flipY),J.pixelStorei(37441,Y.premultiplyAlpha),J.pixelStorei(3317,Y.unpackAlignment),V.isDataTexture?J.texSubImage2D(3553,q,A.x,A.y,K,ge,we,Me,V.image.data):V.isCompressedTexture?J.compressedTexSubImage2D(3553,q,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,we,V.mipmaps[0].data):J.texSubImage2D(3553,q,A.x,A.y,we,Me,V.image),q===0&&Y.generateMipmaps&&J.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Y,q,K=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,Me=A.max.z-A.min.z+1,Le=X.convert(q.format),qe=X.convert(q.type);let Re;if(q.isData3DTexture)me.setTexture3D(q,0),Re=32879;else if(q.isDataArrayTexture)me.setTexture2DArray(q,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,q.flipY),J.pixelStorei(37441,q.premultiplyAlpha),J.pixelStorei(3317,q.unpackAlignment);const ze=J.getParameter(3314),rt=J.getParameter(32878),Ai=J.getParameter(3316),Yi=J.getParameter(3315),Xi=J.getParameter(32877),Ht=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;J.pixelStorei(3314,Ht.width),J.pixelStorei(32878,Ht.height),J.pixelStorei(3316,A.min.x),J.pixelStorei(3315,A.min.y),J.pixelStorei(32877,A.min.z),Y.isDataTexture||Y.isData3DTexture?J.texSubImage3D(Re,K,V.x,V.y,V.z,ge,we,Me,Le,qe,Ht.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Re,K,V.x,V.y,V.z,ge,we,Me,Le,Ht.data)):J.texSubImage3D(Re,K,V.x,V.y,V.z,ge,we,Me,Le,qe,Ht),J.pixelStorei(3314,ze),J.pixelStorei(32878,rt),J.pixelStorei(3316,Ai),J.pixelStorei(3315,Yi),J.pixelStorei(32877,Xi),K===0&&q.generateMipmaps&&J.generateMipmap(Re),le.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?me.setTextureCube(A,0):A.isData3DTexture?me.setTexture3D(A,0):A.isDataArrayTexture?me.setTexture2DArray(A,0):me.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){x=0,v=0,w=null,le.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Lp extends Fo{}Lp.prototype.isWebGL1Renderer=!0;class Rp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Ia extends Tt{constructor(e,t,i,r,s,a,n,l,c){super(e,t,i,r,s,a,n,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn extends Zt{constructor(e=1,t=1,i=1,r=8,s=1,a=!1,n=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:n,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],h=[],f=[];let g=0;const m=[],d=i/2;let x=0;v(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function v(){const _=new U,M=new U;let E=0;const L=(t-e)/i;for(let y=0;y<=s;y++){const S=[],P=y/s,F=P*(t-e)+e;for(let G=0;G<=r;G++){const z=G/r,D=z*l+n,k=Math.sin(D),C=Math.cos(D);M.x=F*k,M.y=-P*i+d,M.z=F*C,p.push(M.x,M.y,M.z),_.set(k,L,C).normalize(),h.push(_.x,_.y,_.z),f.push(z,1-P),S.push(g++)}m.push(S)}for(let y=0;y<r;y++)for(let S=0;S<s;S++){const P=m[S][y],F=m[S+1][y],G=m[S+1][y+1],z=m[S][y+1];u.push(P,F,z),u.push(F,G,z),E+=6}c.addGroup(x,E,0),x+=E}function w(_){const M=g,E=new Ie,L=new U;let y=0;const S=_===!0?e:t,P=_===!0?1:-1;for(let G=1;G<=r;G++)p.push(0,d*P,0),h.push(0,P,0),f.push(.5,.5),g++;const F=g;for(let G=0;G<=r;G++){const z=G/r*l+n,D=Math.cos(z),k=Math.sin(z);L.x=S*k,L.y=d*P,L.z=S*D,p.push(L.x,L.y,L.z),h.push(0,P,0),E.x=D*.5+.5,E.y=k*.5*P+.5,f.push(E.x,E.y),g++}for(let G=0;G<r;G++){const z=M+G,D=F+G;_===!0?u.push(D,D+1,z):u.push(D+1,D,z),y+=3}c.addGroup(x,y,_===!0?1:2),x+=y}}static fromJSON(e){return new Nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dp extends qi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Pp extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ip extends qi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zo extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Fp extends zo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DefaultUp),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fa=new tt,za=new U,ka=new U;class zp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zn,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;za.setFromMatrixPosition(e.matrixWorld),t.position.copy(za),ka.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ka),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kp extends zp{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ln*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Np extends zo{constructor(e,t,i=0,r=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DefaultUp),this.updateMatrix(),this.target=new gt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.shadow=new kp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fn);class Bt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new b);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new b);const i=this.elements,r=e.x,s=e.y,a=e.z;return t.x=i[0]*r+i[1]*s+i[2]*a,t.y=i[3]*r+i[4]*s+i[5]*a,t.z=i[6]*r+i[7]*s+i[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Bt);const i=this.elements,r=e.elements,s=t.elements,a=i[0],n=i[1],l=i[2],c=i[3],u=i[4],p=i[5],h=i[6],f=i[7],g=i[8],m=r[0],d=r[1],x=r[2],v=r[3],w=r[4],_=r[5],M=r[6],E=r[7],L=r[8];return s[0]=a*m+n*v+l*M,s[1]=a*d+n*w+l*E,s[2]=a*x+n*_+l*L,s[3]=c*m+u*v+p*M,s[4]=c*d+u*w+p*E,s[5]=c*x+u*_+p*L,s[6]=h*m+f*v+g*M,s[7]=h*d+f*w+g*E,s[8]=h*x+f*_+g*L,t}scale(e,t){t===void 0&&(t=new Bt);const i=this.elements,r=t.elements;for(let s=0;s!==3;s++)r[3*s+0]=e.x*i[3*s+0],r[3*s+1]=e.y*i[3*s+1],r[3*s+2]=e.z*i[3*s+2];return t}solve(e,t){t===void 0&&(t=new b);const i=3,r=4,s=[];let a,n;for(a=0;a<i*r;a++)s.push(0);for(a=0;a<3;a++)for(n=0;n<3;n++)s[a+r*n]=this.elements[a+3*n];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let u;const p=4;let h;do{if(a=c-l,s[a+r*a]===0){for(n=a+1;n<c;n++)if(s[a+r*n]!==0){u=p;do h=p-u,s[h+r*a]+=s[h+r*n];while(--u);break}}if(s[a+r*a]!==0)for(n=a+1;n<c;n++){const f=s[a+r*n]/s[a+r*a];u=p;do h=p-u,s[h+r*n]=h<=a?0:s[h+r*n]-s[h+r*a]*f;while(--u)}}while(--l);if(t.z=s[2*r+3]/s[2*r+2],t.y=(s[1*r+3]-s[1*r+2]*t.z)/s[1*r+1],t.x=(s[0*r+3]-s[0*r+2]*t.z-s[0*r+1]*t.y)/s[0*r+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new Bt);const t=3,i=6,r=Op;let s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)r[s+i*a]=this.elements[s+3*a];r[3+6*0]=1,r[3+6*1]=0,r[3+6*2]=0,r[4+6*0]=0,r[4+6*1]=1,r[4+6*2]=0,r[5+6*0]=0,r[5+6*1]=0,r[5+6*2]=1;let n=3;const l=n;let c;const u=i;let p;do{if(s=l-n,r[s+i*s]===0){for(a=s+1;a<l;a++)if(r[s+i*a]!==0){c=u;do p=u-c,r[p+i*s]+=r[p+i*a];while(--c);break}}if(r[s+i*s]!==0)for(a=s+1;a<l;a++){const h=r[s+i*a]/r[s+i*s];c=u;do p=u-c,r[p+i*a]=p<=s?0:r[p+i*a]-r[p+i*s]*h;while(--c)}}while(--n);s=2;do{a=s-1;do{const h=r[s+i*a]/r[s+i*s];c=i;do p=i-c,r[p+i*a]=r[p+i*a]-r[p+i*s]*h;while(--c)}while(a--)}while(--s);s=2;do{const h=1/r[s+i*s];c=i;do p=i-c,r[p+i*s]=r[p+i*s]*h;while(--c)}while(s--);s=2;do{a=2;do{if(p=r[t+a+i*s],isNaN(p)||p===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,a,p)}while(a--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,r=e.z,s=e.w,a=t+t,n=i+i,l=r+r,c=t*a,u=t*n,p=t*l,h=i*n,f=i*l,g=r*l,m=s*a,d=s*n,x=s*l,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=u-x,v[3*0+2]=p+d,v[3*1+0]=u+x,v[3*1+1]=1-(c+g),v[3*1+2]=f-m,v[3*2+0]=p-d,v[3*2+1]=f+m,v[3*2+2]=1-(c+h),this}transpose(e){e===void 0&&(e=new Bt);const t=this.elements,i=e.elements;let r;return i[0]=t[0],i[4]=t[4],i[8]=t[8],r=t[1],i[1]=t[3],i[3]=r,r=t[2],i[2]=t[6],i[6]=r,r=t[5],i[5]=t[7],i[7]=r,e}}const Op=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new b);const i=e.x,r=e.y,s=e.z,a=this.x,n=this.y,l=this.z;return t.x=n*s-l*r,t.y=l*i-a*s,t.z=a*r-n*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new b(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new b(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Bt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,r=Math.sqrt(e*e+t*t+i*i);if(r>0){const s=1/r;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return r}unit(e){e===void 0&&(e=new b);const t=this.x,i=this.y,r=this.z;let s=Math.sqrt(t*t+i*i+r*r);return s>0?(s=1/s,e.x=t*s,e.y=i*s,e.z=r*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,n=e.z;return Math.sqrt((s-t)*(s-t)+(a-i)*(a-i)+(n-r)*(n-r))}distanceSquared(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,n=e.z;return(s-t)*(s-t)+(a-i)*(a-i)+(n-r)*(n-r)}scale(e,t){t===void 0&&(t=new b);const i=this.x,r=this.y,s=this.z;return t.x=e*i,t.y=e*r,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new b),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new b),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new b),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const r=Bp,s=1/i;r.set(this.x*s,this.y*s,this.z*s);const a=Gp;Math.abs(r.x)<.9?(a.set(1,0,0),r.cross(a,e)):(a.set(0,1,0),r.cross(a,e)),r.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const r=this.x,s=this.y,a=this.z;i.x=r+(e.x-r)*t,i.y=s+(e.y-s)*t,i.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Na),Na.almostEquals(e,t)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const Bp=new b,Gp=new b,Na=new b;class At{constructor(e){e===void 0&&(e={}),this.lowerBound=new b,this.upperBound=new b,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,r){const s=this.lowerBound,a=this.upperBound,n=i;s.copy(e[0]),n&&n.vmult(s,s),a.copy(s);for(let l=1;l<e.length;l++){let c=e[l];n&&(n.vmult(c,Oa),c=Oa),c.x>a.x&&(a.x=c.x),c.x<s.x&&(s.x=c.x),c.y>a.y&&(a.y=c.y),c.y<s.y&&(s.y=c.y),c.z>a.z&&(a.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(a,a)),r&&(s.x-=r,s.y-=r,s.z-=r,a.x+=r,a.y+=r,a.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new At().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,s=e.upperBound,a=r.x<=i.x&&i.x<=s.x||t.x<=s.x&&s.x<=i.x,n=r.y<=i.y&&i.y<=s.y||t.y<=s.y&&s.y<=i.y,l=r.z<=i.z&&i.z<=s.z||t.z<=s.z&&s.z<=i.z;return a&&n&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,s=e.upperBound;return t.x<=r.x&&i.x>=s.x&&t.y<=r.y&&i.y>=s.y&&t.z<=r.z&&i.z>=s.z}getCorners(e,t,i,r,s,a,n,l){const c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),i.set(u.x,u.y,c.z),r.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),a.set(c.x,u.y,c.z),n.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){const i=Ba,r=i[0],s=i[1],a=i[2],n=i[3],l=i[4],c=i[5],u=i[6],p=i[7];this.getCorners(r,s,a,n,l,c,u,p);for(let h=0;h!==8;h++){const f=i[h];e.pointToLocal(f,f)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=Ba,r=i[0],s=i[1],a=i[2],n=i[3],l=i[4],c=i[5],u=i[6],p=i[7];this.getCorners(r,s,a,n,l,c,u,p);for(let h=0;h!==8;h++){const f=i[h];e.pointToWorld(f,f)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,r=1/t.x,s=1/t.y,a=1/t.z,n=(this.lowerBound.x-i.x)*r,l=(this.upperBound.x-i.x)*r,c=(this.lowerBound.y-i.y)*s,u=(this.upperBound.y-i.y)*s,p=(this.lowerBound.z-i.z)*a,h=(this.upperBound.z-i.z)*a,f=Math.max(Math.max(Math.min(n,l),Math.min(c,u)),Math.min(p,h)),g=Math.min(Math.min(Math.max(n,l),Math.max(c,u)),Math.max(p,h));return!(g<0||f>g)}}const Oa=new b,Ba=[new b,new b,new b,new b,new b,new b,new b,new b];class Ga{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:r}=t;if(r>i){const s=r;r=i,i=s}return this.matrix[(i*(i+1)>>1)+r-1]}set(e,t,i){let{index:r}=e,{index:s}=t;if(s>r){const a=s;s=r,r=a}this.matrix[(r*(r+1)>>1)+s-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const r=i[e].indexOf(t);return r!==-1&&i[e].splice(r,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let i=0,r=t.length;i<r;i++)t[i].call(this,e)}return this}}class Je{constructor(e,t,i,r){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),r===void 0&&(r=1),this.x=e,this.y=t,this.z=i,this.w=r}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new b),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=Up,r=Wp;e.tangents(i,r),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Je);const i=this.x,r=this.y,s=this.z,a=this.w,n=e.x,l=e.y,c=e.z,u=e.w;return t.x=i*u+a*n+r*c-s*l,t.y=r*u+a*l+s*n-i*c,t.z=s*u+a*c+i*l-r*n,t.w=a*u-i*n-r*l-s*c,t}inverse(e){e===void 0&&(e=new Je);const t=this.x,i=this.y,r=this.z,s=this.w;this.conjugate(e);const a=1/(t*t+i*i+r*r+s*s);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new Je),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new b);const i=e.x,r=e.y,s=e.z,a=this.x,n=this.y,l=this.z,c=this.w,u=c*i+n*s-l*r,p=c*r+l*i-a*s,h=c*s+a*r-n*i,f=-a*i-n*r-l*s;return t.x=u*c+f*-a+p*-l-h*-n,t.y=p*c+f*-n+h*-a-u*-l,t.z=h*c+f*-l+u*-n-p*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,r,s;const a=this.x,n=this.y,l=this.z,c=this.w;switch(t){case"YZX":const u=a*n+l*c;if(u>.499&&(i=2*Math.atan2(a,c),r=Math.PI/2,s=0),u<-.499&&(i=-2*Math.atan2(a,c),r=-Math.PI/2,s=0),i===void 0){const p=a*a,h=n*n,f=l*l;i=Math.atan2(2*n*c-2*a*l,1-2*h-2*f),r=Math.asin(2*u),s=Math.atan2(2*a*c-2*n*l,1-2*p-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=r,e.x=s}setFromEuler(e,t,i,r){r===void 0&&(r="XYZ");const s=Math.cos(e/2),a=Math.cos(t/2),n=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(i/2);return r==="XYZ"?(this.x=l*a*n+s*c*u,this.y=s*c*n-l*a*u,this.z=s*a*u+l*c*n,this.w=s*a*n-l*c*u):r==="YXZ"?(this.x=l*a*n+s*c*u,this.y=s*c*n-l*a*u,this.z=s*a*u-l*c*n,this.w=s*a*n+l*c*u):r==="ZXY"?(this.x=l*a*n-s*c*u,this.y=s*c*n+l*a*u,this.z=s*a*u+l*c*n,this.w=s*a*n-l*c*u):r==="ZYX"?(this.x=l*a*n-s*c*u,this.y=s*c*n+l*a*u,this.z=s*a*u-l*c*n,this.w=s*a*n+l*c*u):r==="YZX"?(this.x=l*a*n+s*c*u,this.y=s*c*n+l*a*u,this.z=s*a*u-l*c*n,this.w=s*a*n-l*c*u):r==="XZY"&&(this.x=l*a*n-s*c*u,this.y=s*c*n-l*a*u,this.z=s*a*u+l*c*n,this.w=s*a*n+l*c*u),this}clone(){return new Je(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new Je);const r=this.x,s=this.y,a=this.z,n=this.w;let l=e.x,c=e.y,u=e.z,p=e.w,h,f,g,m,d;return f=r*l+s*c+a*u+n*p,f<0&&(f=-f,l=-l,c=-c,u=-u,p=-p),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),m=Math.sin((1-t)*h)/g,d=Math.sin(t*h)/g):(m=1-t,d=t),i.x=m*r+d*l,i.y=m*s+d*c,i.z=m*a+d*u,i.w=m*n+d*p,i}integrate(e,t,i,r){r===void 0&&(r=new Je);const s=e.x*i.x,a=e.y*i.y,n=e.z*i.z,l=this.x,c=this.y,u=this.z,p=this.w,h=t*.5;return r.x+=h*(s*p+a*u-n*c),r.y+=h*(a*p+n*l-s*u),r.z+=h*(n*p+s*c-a*l),r.w+=h*(-s*l-a*c-n*u),r}}const Up=new b,Wp=new b,Hp={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ce{constructor(e){e===void 0&&(e={}),this.id=ce.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ce.idCounter=0;ce.types=Hp;class ke{constructor(e){e===void 0&&(e={}),this.position=new b,this.quaternion=new Je,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return ke.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return ke.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,r){return r===void 0&&(r=new b),i.vsub(e,r),t.conjugate(Ua),Ua.vmult(r,r),r}static pointToWorldFrame(e,t,i,r){return r===void 0&&(r=new b),t.vmult(i,r),r.vadd(e,r),r}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new b),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,r){return r===void 0&&(r=new b),t.w*=-1,t.vmult(i,r),t.w*=-1,r}}const Ua=new Je;class Ui extends ce{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:r=[],axes:s,boundingSphereRadius:a}=e;super({type:ce.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const r=new b;for(let s=0;s!==e.length;s++){const a=e[s],n=a.length;for(let l=0;l!==n;l++){const c=(l+1)%n;t[a[l]].vsub(t[a[c]],r),r.normalize();let u=!1;for(let p=0;p!==i.length;p++)if(i[p].almostEquals(r)||i[p].almostEquals(r)){u=!0;break}u||i.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);const t=this.faceNormals[e]||new b;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],r=this.vertices[i[0]],s=this.vertices[i[1]],a=this.vertices[i[2]];Ui.computeNormal(r,s,a,t)}static computeNormal(e,t,i,r){const s=new b,a=new b;t.vsub(e,a),i.vsub(t,s),s.cross(a,r),r.isZero()||r.normalize()}clipAgainstHull(e,t,i,r,s,a,n,l,c){const u=new b;let p=-1,h=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){u.copy(i.faceNormals[g]),s.vmult(u,u);const m=u.dot(a);m>h&&(h=m,p=g)}const f=[];for(let g=0;g<i.faces[p].length;g++){const m=i.vertices[i.faces[p][g]],d=new b;d.copy(m),s.vmult(d,d),r.vadd(d,d),f.push(d)}p>=0&&this.clipFaceAgainstHull(a,e,t,f,n,l,c)}findSeparatingAxis(e,t,i,r,s,a,n,l){const c=new b,u=new b,p=new b,h=new b,f=new b,g=new b;let m=Number.MAX_VALUE;const d=this;if(d.uniqueAxes)for(let x=0;x!==d.uniqueAxes.length;x++){i.vmult(d.uniqueAxes[x],c);const v=d.testSepAxis(c,e,t,i,r,s);if(v===!1)return!1;v<m&&(m=v,a.copy(c))}else{const x=n?n.length:d.faces.length;for(let v=0;v<x;v++){const w=n?n[v]:v;c.copy(d.faceNormals[w]),i.vmult(c,c);const _=d.testSepAxis(c,e,t,i,r,s);if(_===!1)return!1;_<m&&(m=_,a.copy(c))}}if(e.uniqueAxes)for(let x=0;x!==e.uniqueAxes.length;x++){s.vmult(e.uniqueAxes[x],u);const v=d.testSepAxis(u,e,t,i,r,s);if(v===!1)return!1;v<m&&(m=v,a.copy(u))}else{const x=l?l.length:e.faces.length;for(let v=0;v<x;v++){const w=l?l[v]:v;u.copy(e.faceNormals[w]),s.vmult(u,u);const _=d.testSepAxis(u,e,t,i,r,s);if(_===!1)return!1;_<m&&(m=_,a.copy(u))}}for(let x=0;x!==d.uniqueEdges.length;x++){i.vmult(d.uniqueEdges[x],h);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),h.cross(f,g),!g.almostZero()){g.normalize();const w=d.testSepAxis(g,e,t,i,r,s);if(w===!1)return!1;w<m&&(m=w,a.copy(g))}}return r.vsub(t,p),p.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,i,r,s,a){const n=this;Ui.project(n,e,i,r,vn),Ui.project(t,e,s,a,xn);const l=vn[0],c=vn[1],u=xn[0],p=xn[1];if(l<p||u<c)return!1;const h=l-p,f=u-c;return h<f?h:f}calculateLocalInertia(e,t){const i=new b,r=new b;this.computeLocalAABB(r,i);const s=i.x-r.x,a=i.y-r.y,n=i.z-r.z;t.x=1/12*e*(2*a*2*a+2*n*2*n),t.y=1/12*e*(2*s*2*s+2*n*2*n),t.z=1/12*e*(2*a*2*a+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],r=this.vertices[t[0]];return-i.dot(r)}clipFaceAgainstHull(e,t,i,r,s,a,n){const l=new b,c=new b,u=new b,p=new b,h=new b,f=new b,g=new b,m=new b,d=this,x=[],v=r,w=x;let _=-1,M=Number.MAX_VALUE;for(let P=0;P<d.faces.length;P++){l.copy(d.faceNormals[P]),i.vmult(l,l);const F=l.dot(e);F<M&&(M=F,_=P)}if(_<0)return;const E=d.faces[_];E.connectedFaces=[];for(let P=0;P<d.faces.length;P++)for(let F=0;F<d.faces[P].length;F++)E.indexOf(d.faces[P][F])!==-1&&P!==_&&E.connectedFaces.indexOf(P)===-1&&E.connectedFaces.push(P);const L=E.length;for(let P=0;P<L;P++){const F=d.vertices[E[P]],G=d.vertices[E[(P+1)%L]];F.vsub(G,c),u.copy(c),i.vmult(u,u),t.vadd(u,u),p.copy(this.faceNormals[_]),i.vmult(p,p),t.vadd(p,p),u.cross(p,h),h.negate(h),f.copy(F),i.vmult(f,f),t.vadd(f,f);const z=E.connectedFaces[P];g.copy(this.faceNormals[z]);const D=this.getPlaneConstantOfFace(z);m.copy(g),i.vmult(m,m);const k=D-m.dot(t);for(this.clipFaceAgainstPlane(v,w,m,k);v.length;)v.shift();for(;w.length;)v.push(w.shift())}g.copy(this.faceNormals[_]);const y=this.getPlaneConstantOfFace(_);m.copy(g),i.vmult(m,m);const S=y-m.dot(t);for(let P=0;P<v.length;P++){let F=m.dot(v[P])+S;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=a){const G=v[P];if(F<=1e-6){const z={point:G,normal:m,depth:F};n.push(z)}}}}clipFaceAgainstPlane(e,t,i,r){let s,a;const n=e.length;if(n<2)return t;let l=e[e.length-1],c=e[0];s=i.dot(l)+r;for(let u=0;u<n;u++){if(c=e[u],a=i.dot(c)+r,s<0)if(a<0){const p=new b;p.copy(c),t.push(p)}else{const p=new b;l.lerp(c,s/(s-a),p),t.push(p)}else if(a<0){const p=new b;l.lerp(c,s/(s-a),p),t.push(p),t.push(c)}l=c,s=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const i=this.vertices,r=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(i[s],r[s]),e.vadd(r[s],r[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const s=i[r];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new b);const i=this.faceNormals,r=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(i[s],r[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const r=t[i].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,r){const s=this.vertices;let a,n,l,c,u,p,h=new b;for(let f=0;f<s.length;f++){h.copy(s[f]),t.vmult(h,h),e.vadd(h,h);const g=h;(a===void 0||g.x<a)&&(a=g.x),(c===void 0||g.x>c)&&(c=g.x),(n===void 0||g.y<n)&&(n=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(p===void 0||g.z>p)&&(p=g.z)}i.set(a,n,l),r.set(c,u,p)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new b);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,r=this.vertices;if(t){for(let s=0;s<i;s++){const a=r[s];t.vmult(a,a)}for(let s=0;s<this.faceNormals.length;s++){const a=this.faceNormals[s];t.vmult(a,a)}}if(e)for(let s=0;s<i;s++){const a=r[s];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,i=this.faces,r=this.faceNormals,s=new b;this.getAveragePointLocal(s);for(let a=0;a<this.faces.length;a++){let n=r[a];const l=t[i[a][0]],c=new b;e.vsub(l,c);const u=n.dot(c),p=new b;s.vsub(l,p);const h=n.dot(p);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(e,t,i,r,s){const a=e.vertices.length,n=Vp;let l=0,c=0;const u=jp,p=e.vertices;u.setZero(),ke.vectorToLocalFrame(i,r,t,n),ke.pointToLocalFrame(i,r,u,u);const h=u.dot(n);c=l=p[0].dot(n);for(let f=1;f<a;f++){const g=p[f].dot(n);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const vn=[],xn=[];new b;const Vp=new b,jp=new b;class On extends ce{constructor(e){super({type:ce.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,r=b,s=[new r(-e,-t,-i),new r(e,-t,-i),new r(e,t,-i),new r(-e,t,-i),new r(-e,-t,i),new r(e,-t,i),new r(e,t,i),new r(-e,t,i)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],n=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],l=new Ui({vertices:s,faces:a,axes:n});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new b),On.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const r=e;i.x=1/12*t*(2*r.y*2*r.y+2*r.z*2*r.z),i.y=1/12*t*(2*r.x*2*r.x+2*r.z*2*r.z),i.z=1/12*t*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,t){const i=e,r=this.halfExtents;if(i[0].set(r.x,0,0),i[1].set(0,r.y,0),i[2].set(0,0,r.z),i[3].set(-r.x,0,0),i[4].set(0,-r.y,0),i[5].set(0,0,-r.z),t!==void 0)for(let s=0;s!==i.length;s++)t.vmult(i[s],i[s]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const r=this.halfExtents,s=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let a=0;a<s.length;a++)Si.set(s[a][0],s[a][1],s[a][2]),t.vmult(Si,Si),e.vadd(Si,Si),i(Si.x,Si.y,Si.z)}calculateWorldAABB(e,t,i,r){const s=this.halfExtents;Vt[0].set(s.x,s.y,s.z),Vt[1].set(-s.x,s.y,s.z),Vt[2].set(-s.x,-s.y,s.z),Vt[3].set(-s.x,-s.y,-s.z),Vt[4].set(s.x,-s.y,-s.z),Vt[5].set(s.x,s.y,-s.z),Vt[6].set(-s.x,s.y,-s.z),Vt[7].set(s.x,-s.y,s.z);const a=Vt[0];t.vmult(a,a),e.vadd(a,a),r.copy(a),i.copy(a);for(let n=1;n<8;n++){const l=Vt[n];t.vmult(l,l),e.vadd(l,l);const c=l.x,u=l.y,p=l.z;c>r.x&&(r.x=c),u>r.y&&(r.y=u),p>r.z&&(r.z=p),c<i.x&&(i.x=c),u<i.y&&(i.y=u),p<i.z&&(i.z=p)}}}const Si=new b,Vt=[new b,new b,new b,new b,new b,new b,new b,new b],Bn={DYNAMIC:1,STATIC:2,KINEMATIC:4},Gn={AWAKE:0,SLEEPY:1,SLEEPING:2};class se extends ko{constructor(e){e===void 0&&(e={}),super(),this.id=se.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new b,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new b,this.force=new b;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?se.STATIC:se.DYNAMIC,typeof e.type==typeof se.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=se.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new Je,this.initQuaternion=new Je,this.previousQuaternion=new Je,this.interpolatedQuaternion=new Je,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new b,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Bt,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Bt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new b(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new b(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new At,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=se.AWAKE,this.wakeUpAfterNarrowphase=!1,e===se.SLEEPING&&this.dispatchEvent(se.wakeupEvent)}sleep(){this.sleepState=se.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;t===se.AWAKE&&i<r?(this.sleepState=se.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(se.sleepyEvent)):t===se.SLEEPY&&i>r?this.wakeUp():t===se.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(se.sleepEvent))}}updateSolveMassProperties(){this.sleepState===se.SLEEPING||this.type===se.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new b),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new b),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}addShape(e,t,i){const r=new b,s=new Je;return t&&r.copy(t),i&&s.copy(i),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let r=0;for(let s=0;s!==i;s++){const a=e[s];a.updateBoundingSphereRadius();const n=t[s].length(),l=a.boundingSphereRadius;n+l>r&&(r=n+l)}this.boundingRadius=r}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,r=e.length,s=qp,a=Yp,n=this.quaternion,l=this.aabb,c=Xp;for(let u=0;u!==r;u++){const p=e[u];n.vmult(t[u],s),s.vadd(this.position,s),n.mult(i[u],a),p.calculateWorldAABB(s,a,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=$p,r=Zp;i.setRotationFromQuaternion(this.quaternion),i.transpose(r),i.scale(t,i),i.mmult(r,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new b),this.type!==se.DYNAMIC)return;this.sleepState===se.SLEEPING&&this.wakeUp();const i=Jp;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new b),this.type!==se.DYNAMIC)return;const i=Kp,r=Qp;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyForce(i,r)}applyTorque(e){this.type===se.DYNAMIC&&(this.sleepState===se.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new b),this.type!==se.DYNAMIC)return;this.sleepState===se.SLEEPING&&this.wakeUp();const i=t,r=em;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const s=tm;i.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new b),this.type!==se.DYNAMIC)return;const i=im,r=rm;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyImpulse(i,r)}updateMassProperties(){const e=sm;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),On.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new b;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===se.DYNAMIC||this.type===se.KINEMATIC)||this.sleepState===se.SLEEPING)return;const r=this.velocity,s=this.angularVelocity,a=this.position,n=this.force,l=this.torque,c=this.quaternion,u=this.invMass,p=this.invInertiaWorld,h=this.linearFactor,f=u*e;r.x+=n.x*f*h.x,r.y+=n.y*f*h.y,r.z+=n.z*f*h.z;const g=p.elements,m=this.angularFactor,d=l.x*m.x,x=l.y*m.y,v=l.z*m.z;s.x+=e*(g[0]*d+g[1]*x+g[2]*v),s.y+=e*(g[3]*d+g[4]*x+g[5]*v),s.z+=e*(g[6]*d+g[7]*x+g[8]*v),a.x+=r.x*e,a.y+=r.y*e,a.z+=r.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}se.idCounter=0;se.COLLIDE_EVENT_NAME="collide";se.DYNAMIC=Bn.DYNAMIC;se.STATIC=Bn.STATIC;se.KINEMATIC=Bn.KINEMATIC;se.AWAKE=Gn.AWAKE;se.SLEEPY=Gn.SLEEPY;se.SLEEPING=Gn.SLEEPING;se.wakeupEvent={type:"wakeup"};se.sleepyEvent={type:"sleepy"};se.sleepEvent={type:"sleep"};const qp=new b,Yp=new Je,Xp=new At,$p=new Bt,Zp=new Bt;new Bt;const Jp=new b,Kp=new b,Qp=new b,em=new b,tm=new b,im=new b,rm=new b,sm=new b;class nm{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&se.STATIC)!==0||e.sleepState===se.SLEEPING)&&((t.type&se.STATIC)!==0||t.sleepState===se.SLEEPING))}intersectionTest(e,t,i,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,r):this.doBoundingSphereBroadphase(e,t,i,r)}doBoundingSphereBroadphase(e,t,i,r){const s=am;t.position.vsub(e.position,s);const a=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<a&&(i.push(e),r.push(t))}doBoundingBoxBroadphase(e,t,i,r){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),r.push(t))}makePairsUnique(e,t){const i=om,r=lm,s=cm,a=e.length;for(let n=0;n!==a;n++)r[n]=e[n],s[n]=t[n];e.length=0,t.length=0;for(let n=0;n!==a;n++){const l=r[n].id,c=s[n].id,u=l<c?`${l},${c}`:`${c},${l}`;i[u]=n,i.keys.push(u)}for(let n=0;n!==i.keys.length;n++){const l=i.keys.pop(),c=i[l];e.push(r[c]),t.push(s[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new b;e.position.vsub(t.position,i);const r=e.shapes[0],s=t.shapes[0];return Math.pow(r.boundingSphereRadius+s.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const am=new b;new b;new Je;new b;const om={keys:[]},lm=[],cm=[];new b;new b;new b;class No extends nm{constructor(){super()}collisionPairs(e,t,i){const r=e.bodies,s=r.length;let a,n;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)a=r[l],n=r[c],this.needBroadphaseCollision(a,n)&&this.intersectionTest(a,n,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let r=0;r<e.bodies.length;r++){const s=e.bodies[r];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&i.push(s)}return i}}class Rs{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,r,s,a,n){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(r),this.shape=s,this.body=a,this.distance=n}}let Oo,Bo,Go,Uo,Wo,Ho,Vo;const Un={CLOSEST:1,ANY:2,ALL:4};Oo=ce.types.SPHERE;Bo=ce.types.PLANE;Go=ce.types.BOX;Uo=ce.types.CYLINDER;Wo=ce.types.CONVEXPOLYHEDRON;Ho=ce.types.HEIGHTFIELD;Vo=ce.types.TRIMESH;class Ze{get[Oo](){return this._intersectSphere}get[Bo](){return this._intersectPlane}get[Go](){return this._intersectBox}get[Uo](){return this._intersectConvex}get[Wo](){return this._intersectConvex}get[Ho](){return this._intersectHeightfield}get[Vo](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new b),t===void 0&&(t=new b),this.from=e.clone(),this.to=t.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ze.ANY,this.result=new Rs,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||Ze.ANY,this.result=t.result||new Rs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Wa),_n.length=0,e.broadphase.aabbQuery(e,Wa,_n),this.intersectBodies(_n),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=um,s=hm;for(let a=0,n=e.shapes.length;a<n;a++){const l=e.shapes[a];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],s),e.quaternion.vmult(e.shapeOffsets[a],r),r.vadd(e.position,r),this.intersectShape(l,s,r,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,r=e.length;!this.result.shouldStop&&i<r;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,r){const s=this.from;if(Em(s,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,r,e)}_intersectBox(e,t,i,r,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,r,s)}_intersectPlane(e,t,i,r,s){const a=this.from,n=this.to,l=this.direction,c=new b(0,0,1);t.vmult(c,c);const u=new b;a.vsub(i,u);const p=u.dot(c);n.vsub(i,u);const h=u.dot(c);if(p*h>0||a.distanceTo(n)<p)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new b,m=new b,d=new b;a.vsub(i,g);const x=-c.dot(g)/f;l.scale(x,m),a.vadd(m,d),this.reportIntersection(c,d,s,r,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,r=this.to,s=this.from;t.x=Math.min(r.x,s.x),t.y=Math.min(r.y,s.y),t.z=Math.min(r.z,s.z),i.x=Math.max(r.x,s.x),i.y=Math.max(r.y,s.y),i.z=Math.max(r.z,s.z)}_intersectHeightfield(e,t,i,r,s){e.data,e.elementSize;const a=dm;a.from.copy(this.from),a.to.copy(this.to),ke.pointToLocalFrame(i,t,a.from,a.from),ke.pointToLocalFrame(i,t,a.to,a.to),a.updateDirection();const n=pm;let l,c,u,p;l=c=0,u=p=e.data.length-1;const h=new At;a.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,n,!0),l=Math.max(l,n[0]),c=Math.max(c,n[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,n,!0),u=Math.min(u,n[0]+1),p=Math.min(p,n[1]+1);for(let f=l;f<u;f++)for(let g=c;g<p;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,h),!!h.overlapsRay(a)){if(e.getConvexTrianglePillar(f,g,!1),ke.pointToWorldFrame(i,t,e.pillarOffset,_s),this._intersectConvex(e.pillarConvex,t,_s,r,s,Ha),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),ke.pointToWorldFrame(i,t,e.pillarOffset,_s),this._intersectConvex(e.pillarConvex,t,_s,r,s,Ha)}}}_intersectSphere(e,t,i,r,s){const a=this.from,n=this.to,l=e.radius,c=(n.x-a.x)**2+(n.y-a.y)**2+(n.z-a.z)**2,u=2*((n.x-a.x)*(a.x-i.x)+(n.y-a.y)*(a.y-i.y)+(n.z-a.z)*(a.z-i.z)),p=(a.x-i.x)**2+(a.y-i.y)**2+(a.z-i.z)**2-l**2,h=u**2-4*c*p,f=mm,g=fm;if(!(h<0))if(h===0)a.lerp(n,h,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,s,r,-1);else{const m=(-u-Math.sqrt(h))/(2*c),d=(-u+Math.sqrt(h))/(2*c);if(m>=0&&m<=1&&(a.lerp(n,m,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,s,r,-1)),this.result.shouldStop)return;d>=0&&d<=1&&(a.lerp(n,d,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,s,r,-1))}}_intersectConvex(e,t,i,r,s,a){const n=gm,l=Va,c=a&&a.faceList||null,u=e.faces,p=e.vertices,h=e.faceNormals,f=this.direction,g=this.from,m=this.to,d=g.distanceTo(m),x=c?c.length:u.length,v=this.result;for(let w=0;!v.shouldStop&&w<x;w++){const _=c?c[w]:w,M=u[_],E=h[_],L=t,y=i;l.copy(p[M[0]]),L.vmult(l,l),l.vadd(y,l),l.vsub(g,l),L.vmult(E,n);const S=f.dot(n);if(Math.abs(S)<this.precision)continue;const P=n.dot(l)/S;if(!(P<0)){f.scale(P,_t),_t.vadd(g,_t),Nt.copy(p[M[0]]),L.vmult(Nt,Nt),y.vadd(Nt,Nt);for(let F=1;!v.shouldStop&&F<M.length-1;F++){jt.copy(p[M[F]]),qt.copy(p[M[F+1]]),L.vmult(jt,jt),L.vmult(qt,qt),y.vadd(jt,jt),y.vadd(qt,qt);const G=_t.distanceTo(g);!(Ze.pointInTriangle(_t,Nt,jt,qt)||Ze.pointInTriangle(_t,jt,Nt,qt))||G>d||this.reportIntersection(n,_t,s,r,_)}}}}_intersectTrimesh(e,t,i,r,s,a){const n=vm,l=Mm,c=Sm,u=Va,p=xm,h=_m,f=ym,g=wm,m=bm,d=e.indices;e.vertices;const x=this.from,v=this.to,w=this.direction;c.position.copy(i),c.quaternion.copy(t),ke.vectorToLocalFrame(i,t,w,p),ke.pointToLocalFrame(i,t,x,h),ke.pointToLocalFrame(i,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,p),p.normalize();const _=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let M=0,E=l.length;!this.result.shouldStop&&M!==E;M++){const L=l[M];e.getNormal(L,n),e.getVertex(d[L*3],Nt),Nt.vsub(h,u);const y=p.dot(n),S=n.dot(u)/y;if(S<0)continue;p.scale(S,_t),_t.vadd(h,_t),e.getVertex(d[L*3+1],jt),e.getVertex(d[L*3+2],qt);const P=_t.distanceSquared(h);!(Ze.pointInTriangle(_t,jt,Nt,qt)||Ze.pointInTriangle(_t,Nt,jt,qt))||P>_||(ke.vectorToWorldFrame(t,n,m),ke.pointToWorldFrame(i,t,_t,g),this.reportIntersection(m,g,s,r,L))}l.length=0}reportIntersection(e,t,i,r,s){const a=this.from,n=this.to,l=a.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ze.ALL:this.hasHit=!0,c.set(a,n,e,t,i,r,l),c.hasHit=!0,this.callback(c);break;case Ze.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(a,n,e,t,i,r,l));break;case Ze.ANY:this.hasHit=!0,c.hasHit=!0,c.set(a,n,e,t,i,r,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,r){r.vsub(t,ki),i.vsub(t,Lr),e.vsub(t,yn);const s=ki.dot(ki),a=ki.dot(Lr),n=ki.dot(yn),l=Lr.dot(Lr),c=Lr.dot(yn);let u,p;return(u=l*n-a*c)>=0&&(p=s*c-a*n)>=0&&u+p<s*l-a*a}}Ze.CLOSEST=Un.CLOSEST;Ze.ANY=Un.ANY;Ze.ALL=Un.ALL;const Wa=new At,_n=[],Lr=new b,yn=new b,um=new b,hm=new Je,_t=new b,Nt=new b,jt=new b,qt=new b;new b;new Rs;const Ha={faceList:[0]},_s=new b,dm=new Ze,pm=[],mm=new b,fm=new b,gm=new b;new b;new b;const Va=new b,vm=new b,xm=new b,_m=new b,ym=new b,bm=new b,wm=new b;new At;const Mm=[],Sm=new ke,ki=new b,ys=new b;function Em(o,e,t){t.vsub(o,ki);const i=ki.dot(e);return e.scale(i,ys),ys.vadd(o,ys),t.distanceTo(ys)}class Tm{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class ja{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class $r{constructor(e,t,i,r){i===void 0&&(i=-1e6),r===void 0&&(r=1e6),this.id=$r.idCounter++,this.minForce=i,this.maxForce=r,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ja,this.jacobianElementB=new ja,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const r=t,s=e,a=i;this.a=4/(a*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(a*a*s*(1+4*r))}computeB(e,t,i){const r=this.computeGW(),s=this.computeGq(),a=this.computeGiMf();return-s*e-r*t-a*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.position,a=r.position;return e.spatial.dot(s)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.velocity,a=r.velocity,n=i.angularVelocity,l=r.angularVelocity;return e.multiplyVectors(s,n)+t.multiplyVectors(a,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.vlambda,a=r.vlambda,n=i.wlambda,l=r.wlambda;return e.multiplyVectors(s,n)+t.multiplyVectors(a,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.force,a=i.torque,n=r.force,l=r.torque,c=i.invMassSolve,u=r.invMassSolve;return s.scale(c,qa),n.scale(u,Ya),i.invInertiaWorldSolve.vmult(a,Xa),r.invInertiaWorldSolve.vmult(l,$a),e.multiplyVectors(qa,Xa)+t.multiplyVectors(Ya,$a)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,s=i.invMassSolve,a=r.invMassSolve,n=i.invInertiaWorldSolve,l=r.invInertiaWorldSolve;let c=s+a;return n.vmult(e.rotational,bs),c+=bs.dot(e.rotational),l.vmult(t.rotational,bs),c+=bs.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,s=this.bj,a=Am;r.vlambda.addScaledVector(r.invMassSolve*e,t.spatial,r.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,i.spatial,s.vlambda),r.invInertiaWorldSolve.vmult(t.rotational,a),r.wlambda.addScaledVector(e,a,r.wlambda),s.invInertiaWorldSolve.vmult(i.rotational,a),s.wlambda.addScaledVector(e,a,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}$r.idCounter=0;const qa=new b,Ya=new b,Xa=new b,$a=new b,bs=new b,Am=new b;class Cm extends $r{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(e){const t=this.a,i=this.b,r=this.bi,s=this.bj,a=this.ri,n=this.rj,l=Lm,c=Rm,u=r.velocity,p=r.angularVelocity;r.force,r.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=Dm,m=this.jacobianElementA,d=this.jacobianElementB,x=this.ni;a.cross(x,l),n.cross(x,c),x.negate(m.spatial),l.negate(m.rotational),d.spatial.copy(x),d.rotational.copy(c),g.copy(s.position),g.vadd(n,g),g.vsub(r.position,g),g.vsub(a,g);const v=x.dot(g),w=this.restitution+1,_=w*h.dot(x)-w*u.dot(x)+f.dot(c)-p.dot(l),M=this.computeGiMf();return-v*t-_*i-e*M}getImpactVelocityAlongNormal(){const e=Pm,t=Im,i=Fm,r=zm,s=km;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(r,t),e.vsub(t,s),this.ni.dot(s)}}const Lm=new b,Rm=new b,Dm=new b,Pm=new b,Im=new b,Fm=new b,zm=new b,km=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Za extends $r{constructor(e,t,i){super(e,t,-i,i),this.ri=new b,this.rj=new b,this.t=new b}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,r=this.rj,s=Nm,a=Om,n=this.t;i.cross(n,s),r.cross(n,a);const l=this.jacobianElementA,c=this.jacobianElementB;n.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(n),c.rotational.copy(a);const u=this.computeGW(),p=this.computeGiMf();return-u*t-e*p}}const Nm=new b,Om=new b;class Wi{constructor(e,t,i){i=Tm.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Wi.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}Wi.idCounter=0;class Hi{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Hi.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Hi.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Ze;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Bm extends Ui{constructor(e,t,i,r){if(e===void 0&&(e=1),t===void 0&&(t=1),i===void 0&&(i=1),r===void 0&&(r=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=r,a=[],n=[],l=[],c=[],u=[],p=Math.cos,h=Math.sin;a.push(new b(-t*h(0),-i*.5,t*p(0))),c.push(0),a.push(new b(-e*h(0),i*.5,e*p(0))),u.push(1);for(let g=0;g<s;g++){const m=2*Math.PI/s*(g+1),d=2*Math.PI/s*(g+.5);g<s-1?(a.push(new b(-t*h(m),-i*.5,t*p(m))),c.push(2*g+2),a.push(new b(-e*h(m),i*.5,e*p(m))),u.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&n.push(new b(-h(d),0,p(d)))}l.push(c),n.push(new b(0,1,0));const f=[];for(let g=0;g<u.length;g++)f.push(u[u.length-g-1]);l.push(f),super({vertices:a,faces:l,axes:n}),this.type=ce.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=i,this.numSegments=r}}class Rr extends ce{constructor(){super({type:ce.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new b),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,i,r){si.set(0,0,1),t.vmult(si,si);const s=Number.MAX_VALUE;i.set(-s,-s,-s),r.set(s,s,s),si.x===1?r.x=e.x:si.x===-1&&(i.x=e.x),si.y===1?r.y=e.y:si.y===-1&&(i.y=e.y),si.z===1?r.z=e.z:si.z===-1&&(i.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const si=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new At;new b;new At;new b;new b;new b;new b;new b;new b;new b;new At;new b;new ke;new At;class Gm{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class Um extends Gm{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const r=this.iterations,s=this.tolerance*this.tolerance,a=this.equations,n=a.length,l=t.bodies,c=l.length,u=e;let p,h,f,g,m,d;if(n!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();const x=Hm,v=Vm,w=Wm;x.length=n,v.length=n,w.length=n;for(let _=0;_!==n;_++){const M=a[_];w[_]=0,v[_]=M.computeB(u),x[_]=1/M.computeC()}if(n!==0){for(let E=0;E!==c;E++){const L=l[E],y=L.vlambda,S=L.wlambda;y.set(0,0,0),S.set(0,0,0)}for(i=0;i!==r;i++){g=0;for(let E=0;E!==n;E++){const L=a[E];p=v[E],h=x[E],d=w[E],m=L.computeGWlambda(),f=h*(p-m-L.eps*d),d+f<L.minForce?f=L.minForce-d:d+f>L.maxForce&&(f=L.maxForce-d),w[E]+=f,g+=f>0?f:-f,L.addToWlambda(f)}if(g*g<s)break}for(let E=0;E!==c;E++){const L=l[E],y=L.velocity,S=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),y.vadd(L.vlambda,y),L.wlambda.vmul(L.angularFactor,L.wlambda),S.vadd(L.wlambda,S)}let _=a.length;const M=1/u;for(;_--;)a[_].multiplier=w[_]*M}return i}}const Wm=[],Hm=[],Vm=[];class jm{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class qm extends jm{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const He={sphereSphere:ce.types.SPHERE,spherePlane:ce.types.SPHERE|ce.types.PLANE,boxBox:ce.types.BOX|ce.types.BOX,sphereBox:ce.types.SPHERE|ce.types.BOX,planeBox:ce.types.PLANE|ce.types.BOX,convexConvex:ce.types.CONVEXPOLYHEDRON,sphereConvex:ce.types.SPHERE|ce.types.CONVEXPOLYHEDRON,planeConvex:ce.types.PLANE|ce.types.CONVEXPOLYHEDRON,boxConvex:ce.types.BOX|ce.types.CONVEXPOLYHEDRON,sphereHeightfield:ce.types.SPHERE|ce.types.HEIGHTFIELD,boxHeightfield:ce.types.BOX|ce.types.HEIGHTFIELD,convexHeightfield:ce.types.CONVEXPOLYHEDRON|ce.types.HEIGHTFIELD,sphereParticle:ce.types.PARTICLE|ce.types.SPHERE,planeParticle:ce.types.PLANE|ce.types.PARTICLE,boxParticle:ce.types.BOX|ce.types.PARTICLE,convexParticle:ce.types.PARTICLE|ce.types.CONVEXPOLYHEDRON,cylinderCylinder:ce.types.CYLINDER,sphereCylinder:ce.types.SPHERE|ce.types.CYLINDER,planeCylinder:ce.types.PLANE|ce.types.CYLINDER,boxCylinder:ce.types.BOX|ce.types.CYLINDER,convexCylinder:ce.types.CONVEXPOLYHEDRON|ce.types.CYLINDER,heightfieldCylinder:ce.types.HEIGHTFIELD|ce.types.CYLINDER,particleCylinder:ce.types.PARTICLE|ce.types.CYLINDER,sphereTrimesh:ce.types.SPHERE|ce.types.TRIMESH,planeTrimesh:ce.types.PLANE|ce.types.TRIMESH};class Ym{get[He.sphereSphere](){return this.sphereSphere}get[He.spherePlane](){return this.spherePlane}get[He.boxBox](){return this.boxBox}get[He.sphereBox](){return this.sphereBox}get[He.planeBox](){return this.planeBox}get[He.convexConvex](){return this.convexConvex}get[He.sphereConvex](){return this.sphereConvex}get[He.planeConvex](){return this.planeConvex}get[He.boxConvex](){return this.boxConvex}get[He.sphereHeightfield](){return this.sphereHeightfield}get[He.boxHeightfield](){return this.boxHeightfield}get[He.convexHeightfield](){return this.convexHeightfield}get[He.sphereParticle](){return this.sphereParticle}get[He.planeParticle](){return this.planeParticle}get[He.boxParticle](){return this.boxParticle}get[He.convexParticle](){return this.convexParticle}get[He.cylinderCylinder](){return this.convexConvex}get[He.sphereCylinder](){return this.sphereConvex}get[He.planeCylinder](){return this.planeConvex}get[He.boxCylinder](){return this.boxConvex}get[He.convexCylinder](){return this.convexConvex}get[He.heightfieldCylinder](){return this.heightfieldCylinder}get[He.particleCylinder](){return this.particleCylinder}get[He.sphereTrimesh](){return this.sphereTrimesh}get[He.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new qm,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,r,s,a){let n;this.contactPointPool.length?(n=this.contactPointPool.pop(),n.bi=e,n.bj=t):n=new Cm(e,t),n.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&r.collisionResponse;const l=this.currentContactMaterial;n.restitution=l.restitution,n.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,u=r.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(n.restitution=c.restitution*u.restitution),n.si=s||i,n.sj=a||r,n}createFrictionEquationsFromContact(e,t){const i=e.bi,r=e.bj,s=e.si,a=e.sj,n=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||i.material,p=a.material||r.material;if(u&&p&&u.friction>=0&&p.friction>=0&&(c=u.friction*p.friction),c>0){const h=c*(n.frictionGravity||n.gravity).length();let f=i.invMass+r.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,m=g.length?g.pop():new Za(i,r,h*f),d=g.length?g.pop():new Za(i,r,h*f);return m.bi=d.bi=i,m.bj=d.bj=r,m.minForce=d.minForce=-h*f,m.maxForce=d.maxForce=h*f,m.ri.copy(e.ri),m.rj.copy(e.rj),d.ri.copy(e.ri),d.rj.copy(e.rj),e.ni.tangents(m.t,d.t),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,n.dt),d.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,n.dt),m.enabled=d.enabled=e.enabled,t.push(m,d),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Di.setZero(),ur.setZero(),hr.setZero();const s=t.bi;t.bj;for(let n=0;n!==e;n++)t=this.result[this.result.length-1-n],t.bi!==s?(Di.vadd(t.ni,Di),ur.vadd(t.ri,ur),hr.vadd(t.rj,hr)):(Di.vsub(t.ni,Di),ur.vadd(t.rj,ur),hr.vadd(t.ri,hr));const a=1/e;ur.scale(a,i.ri),hr.scale(a,i.rj),r.ri.copy(i.ri),r.rj.copy(i.rj),Di.normalize(),Di.tangents(i.t,r.t)}getContacts(e,t,i,r,s,a,n){this.contactPointPool=s,this.frictionEquationPool=n,this.result=r,this.frictionResult=a;const l=Zm,c=Jm,u=Xm,p=$m;for(let h=0,f=e.length;h!==f;h++){const g=e[h],m=t[h];let d=null;g.material&&m.material&&(d=i.getContactMaterial(g.material,m.material)||null);const x=g.type&se.KINEMATIC&&m.type&se.STATIC||g.type&se.STATIC&&m.type&se.KINEMATIC||g.type&se.KINEMATIC&&m.type&se.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const w=g.shapes[v];for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],c),m.quaternion.vmult(m.shapeOffsets[_],p),p.vadd(m.position,p);const M=m.shapes[_];if(!(w.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&w.collisionFilterGroup)||u.distanceTo(p)>w.boundingSphereRadius+M.boundingSphereRadius)continue;let E=null;w.material&&M.material&&(E=i.getContactMaterial(w.material,M.material)||null),this.currentContactMaterial=E||d||i.defaultContactMaterial;const L=w.type|M.type,y=this[L];if(y){let S=!1;w.type<M.type?S=y.call(this,w,M,u,p,l,c,g,m,w,M,x):S=y.call(this,M,w,p,u,c,l,m,g,w,M,x),S&&x&&(i.shapeOverlapKeeper.set(w.id,M.id),i.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(e,t,i,r,s,a,n,l,c,u,p){if(p)return i.distanceSquared(r)<(e.radius+t.radius)**2;const h=this.createContactEquation(n,l,e,t,c,u);r.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(n.position,h.ri),h.rj.vadd(r,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,i,r,s,a,n,l,c,u,p){const h=this.createContactEquation(n,l,e,t,c,u);if(h.ni.set(0,0,1),a.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),i.vsub(r,ws),h.ni.scale(h.ni.dot(ws),Ja),ws.vsub(Ja,h.rj),-ws.dot(h.ni)<=e.radius){if(p)return!0;const f=h.ri,g=h.rj;f.vadd(i,f),f.vsub(n.position,f),g.vadd(r,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,i,r,s,a,n,l,c,u,p){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,r,s,a,n,l,e,t,p)}sphereBox(e,t,i,r,s,a,n,l,c,u,p){const h=this.v3pool,f=Sf;i.vsub(r,Ms),t.getSideNormals(f,a);const g=e.radius;let m=!1;const d=Tf,x=Af,v=Cf;let w=null,_=0,M=0,E=0,L=null;for(let C=0,N=f.length;C!==N&&m===!1;C++){const j=bf;j.copy(f[C]);const O=j.length();j.normalize();const W=Ms.dot(j);if(W<O+g&&W>0){const Q=wf,H=Mf;Q.copy(f[(C+1)%3]),H.copy(f[(C+2)%3]);const ee=Q.length(),ue=H.length();Q.normalize(),H.normalize();const Te=Ms.dot(Q),J=Ms.dot(H);if(Te<ee&&Te>-ee&&J<ue&&J>-ue){const Fe=Math.abs(W-O-g);if((L===null||Fe<L)&&(L=Fe,M=Te,E=J,w=O,d.copy(j),x.copy(Q),v.copy(H),_++,p))return!0}}}if(_){m=!0;const C=this.createContactEquation(n,l,e,t,c,u);d.scale(-g,C.ri),C.ni.copy(d),C.ni.negate(C.ni),d.scale(w,d),x.scale(M,x),d.vadd(x,d),v.scale(E,v),d.vadd(v,C.rj),C.ri.vadd(i,C.ri),C.ri.vsub(n.position,C.ri),C.rj.vadd(r,C.rj),C.rj.vsub(l.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult)}let y=h.get();const S=Ef;for(let C=0;C!==2&&!m;C++)for(let N=0;N!==2&&!m;N++)for(let j=0;j!==2&&!m;j++)if(y.set(0,0,0),C?y.vadd(f[0],y):y.vsub(f[0],y),N?y.vadd(f[1],y):y.vsub(f[1],y),j?y.vadd(f[2],y):y.vsub(f[2],y),r.vadd(y,S),S.vsub(i,S),S.lengthSquared()<g*g){if(p)return!0;m=!0;const O=this.createContactEquation(n,l,e,t,c,u);O.ri.copy(S),O.ri.normalize(),O.ni.copy(O.ri),O.ri.scale(g,O.ri),O.rj.copy(y),O.ri.vadd(i,O.ri),O.ri.vsub(n.position,O.ri),O.rj.vadd(r,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}h.release(y),y=null;const P=h.get(),F=h.get(),G=h.get(),z=h.get(),D=h.get(),k=f.length;for(let C=0;C!==k&&!m;C++)for(let N=0;N!==k&&!m;N++)if(C%3!==N%3){f[N].cross(f[C],P),P.normalize(),f[C].vadd(f[N],F),G.copy(i),G.vsub(F,G),G.vsub(r,G);const j=G.dot(P);P.scale(j,z);let O=0;for(;O===C%3||O===N%3;)O++;D.copy(i),D.vsub(z,D),D.vsub(F,D),D.vsub(r,D);const W=Math.abs(j),Q=D.length();if(W<f[O].length()&&Q<g){if(p)return!0;m=!0;const H=this.createContactEquation(n,l,e,t,c,u);F.vadd(z,H.rj),H.rj.copy(H.rj),D.negate(H.ni),H.ni.normalize(),H.ri.copy(H.rj),H.ri.vadd(r,H.ri),H.ri.vsub(i,H.ri),H.ri.normalize(),H.ri.scale(g,H.ri),H.ri.vadd(i,H.ri),H.ri.vsub(n.position,H.ri),H.rj.vadd(r,H.rj),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}h.release(P,F,G,z,D)}planeBox(e,t,i,r,s,a,n,l,c,u,p){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,r,s,a,n,l,e,t,p)}convexConvex(e,t,i,r,s,a,n,l,c,u,p,h,f){const g=Hf;if(!(i.distanceTo(r)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,s,r,a,g,h,f)){const m=[],d=Vf;e.clipAgainstHull(i,s,t,r,a,g,-100,100,m);let x=0;for(let v=0;v!==m.length;v++){if(p)return!0;const w=this.createContactEquation(n,l,e,t,c,u),_=w.ri,M=w.rj;g.negate(w.ni),m[v].normal.negate(d),d.scale(m[v].depth,d),m[v].point.vadd(d,_),M.copy(m[v].point),_.vsub(i,_),M.vsub(r,M),_.vadd(i,_),_.vsub(n.position,_),M.vadd(r,M),M.vsub(l.position,M),this.result.push(w),x++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&x&&this.createFrictionFromAverage(x)}}sphereConvex(e,t,i,r,s,a,n,l,c,u,p){const h=this.v3pool;i.vsub(r,Lf);const f=t.faceNormals,g=t.faces,m=t.vertices,d=e.radius;let x=!1;for(let v=0;v!==m.length;v++){const w=m[v],_=If;a.vmult(w,_),r.vadd(_,_);const M=Pf;if(_.vsub(i,M),M.lengthSquared()<d*d){if(p)return!0;x=!0;const E=this.createContactEquation(n,l,e,t,c,u);E.ri.copy(M),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(d,E.ri),_.vsub(r,E.rj),E.ri.vadd(i,E.ri),E.ri.vsub(n.position,E.ri),E.rj.vadd(r,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,w=g.length;v!==w&&x===!1;v++){const _=f[v],M=g[v],E=Ff;a.vmult(_,E);const L=zf;a.vmult(m[M[0]],L),L.vadd(r,L);const y=kf;E.scale(-d,y),i.vadd(y,y);const S=Nf;y.vsub(L,S);const P=S.dot(E),F=Of;if(i.vsub(L,F),P<0&&F.dot(E)>0){const G=[];for(let z=0,D=M.length;z!==D;z++){const k=h.get();a.vmult(m[M[z]],k),r.vadd(k,k),G.push(k)}if(yf(G,E,i)){if(p)return!0;x=!0;const z=this.createContactEquation(n,l,e,t,c,u);E.scale(-d,z.ri),E.negate(z.ni);const D=h.get();E.scale(-P,D);const k=h.get();E.scale(-d,k),i.vsub(r,z.rj),z.rj.vadd(k,z.rj),z.rj.vadd(D,z.rj),z.rj.vadd(r,z.rj),z.rj.vsub(l.position,z.rj),z.ri.vadd(i,z.ri),z.ri.vsub(n.position,z.ri),h.release(D),h.release(k),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let C=0,N=G.length;C!==N;C++)h.release(G[C]);return}else for(let z=0;z!==M.length;z++){const D=h.get(),k=h.get();a.vmult(m[M[(z+1)%M.length]],D),a.vmult(m[M[(z+2)%M.length]],k),r.vadd(D,D),r.vadd(k,k);const C=Rf;k.vsub(D,C);const N=Df;C.unit(N);const j=h.get(),O=h.get();i.vsub(D,O);const W=O.dot(N);N.scale(W,j),j.vadd(D,j);const Q=h.get();if(j.vsub(i,Q),W>0&&W*W<C.lengthSquared()&&Q.lengthSquared()<d*d){if(p)return!0;const H=this.createContactEquation(n,l,e,t,c,u);j.vsub(r,H.rj),j.vsub(i,H.ni),H.ni.normalize(),H.ni.scale(d,H.ri),H.rj.vadd(r,H.rj),H.rj.vsub(l.position,H.rj),H.ri.vadd(i,H.ri),H.ri.vsub(n.position,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(let ee=0,ue=G.length;ee!==ue;ee++)h.release(G[ee]);h.release(D),h.release(k),h.release(j),h.release(Q),h.release(O);return}h.release(D),h.release(k),h.release(j),h.release(Q),h.release(O)}for(let z=0,D=G.length;z!==D;z++)h.release(G[z])}}}planeConvex(e,t,i,r,s,a,n,l,c,u,p){const h=Bf,f=Gf;f.set(0,0,1),s.vmult(f,f);let g=0;const m=Uf;for(let d=0;d!==t.vertices.length;d++)if(h.copy(t.vertices[d]),a.vmult(h,h),r.vadd(h,h),h.vsub(i,m),f.dot(m)<=0){if(p)return!0;const x=this.createContactEquation(n,l,e,t,c,u),v=Wf;f.scale(f.dot(m),v),h.vsub(v,v),v.vsub(i,x.ri),x.ni.copy(f),h.vsub(r,x.rj),x.ri.vadd(i,x.ri),x.ri.vsub(n.position,x.ri),x.rj.vadd(r,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,r,s,a,n,l,c,u,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,r,s,a,n,l,e,t,p)}sphereHeightfield(e,t,i,r,s,a,n,l,c,u,p){const h=t.data,f=e.radius,g=t.elementSize,m=ig,d=tg;ke.pointToLocalFrame(r,a,i,d);let x=Math.floor((d.x-f)/g)-1,v=Math.ceil((d.x+f)/g)+1,w=Math.floor((d.y-f)/g)-1,_=Math.ceil((d.y+f)/g)+1;if(v<0||_<0||x>h.length||w>h[0].length)return;x<0&&(x=0),v<0&&(v=0),w<0&&(w=0),_<0&&(_=0),x>=h.length&&(x=h.length-1),v>=h.length&&(v=h.length-1),_>=h[0].length&&(_=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const M=[];t.getRectMinMax(x,w,v,_,M);const E=M[0],L=M[1];if(d.z-f>L||d.z+f<E)return;const y=this.result;for(let S=x;S<v;S++)for(let P=w;P<_;P++){const F=y.length;let G=!1;if(t.getConvexTrianglePillar(S,P,!1),ke.pointToWorldFrame(r,a,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.sphereConvex(e,t.pillarConvex,i,m,s,a,n,l,e,t,p)),p&&G||(t.getConvexTrianglePillar(S,P,!0),ke.pointToWorldFrame(r,a,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.sphereConvex(e,t.pillarConvex,i,m,s,a,n,l,e,t,p)),p&&G))return!0;if(y.length-F>2)return}}boxHeightfield(e,t,i,r,s,a,n,l,c,u,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,r,s,a,n,l,e,t,p)}convexHeightfield(e,t,i,r,s,a,n,l,c,u,p){const h=t.data,f=t.elementSize,g=e.boundingSphereRadius,m=Qf,d=eg,x=Kf;ke.pointToLocalFrame(r,a,i,x);let v=Math.floor((x.x-g)/f)-1,w=Math.ceil((x.x+g)/f)+1,_=Math.floor((x.y-g)/f)-1,M=Math.ceil((x.y+g)/f)+1;if(w<0||M<0||v>h.length||_>h[0].length)return;v<0&&(v=0),w<0&&(w=0),_<0&&(_=0),M<0&&(M=0),v>=h.length&&(v=h.length-1),w>=h.length&&(w=h.length-1),M>=h[0].length&&(M=h[0].length-1),_>=h[0].length&&(_=h[0].length-1);const E=[];t.getRectMinMax(v,_,w,M,E);const L=E[0],y=E[1];if(!(x.z-g>y||x.z+g<L))for(let S=v;S<w;S++)for(let P=_;P<M;P++){let F=!1;if(t.getConvexTrianglePillar(S,P,!1),ke.pointToWorldFrame(r,a,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,i,m,s,a,n,l,null,null,p,d,null)),p&&F||(t.getConvexTrianglePillar(S,P,!0),ke.pointToWorldFrame(r,a,t.pillarOffset,m),i.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,i,m,s,a,n,l,null,null,p,d,null)),p&&F))return!0}}sphereParticle(e,t,i,r,s,a,n,l,c,u,p){const h=Xf;if(h.set(0,0,1),r.vsub(i,h),h.lengthSquared()<=e.radius*e.radius){if(p)return!0;const f=this.createContactEquation(l,n,t,e,c,u);h.normalize(),f.rj.copy(h),f.rj.scale(e.radius,f.rj),f.ni.copy(h),f.ni.negate(f.ni),f.ri.set(0,0,0),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}planeParticle(e,t,i,r,s,a,n,l,c,u,p){const h=jf;h.set(0,0,1),n.quaternion.vmult(h,h);const f=qf;if(r.vsub(n.position,f),h.dot(f)<=0){if(p)return!0;const g=this.createContactEquation(l,n,t,e,c,u);g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0);const m=Yf;h.scale(h.dot(r),m),r.vsub(m,m),g.rj.copy(m),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,i,r,s,a,n,l,c,u,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,r,s,a,n,l,e,t,p)}convexParticle(e,t,i,r,s,a,n,l,c,u,p){let h=-1;const f=Zf,g=Jf;let m=null;const d=$f;if(d.copy(r),d.vsub(i,d),s.conjugate(Ka),Ka.vmult(d,d),e.pointIsInside(d)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let x=0,v=e.faces.length;x!==v;x++){const w=[e.worldVertices[e.faces[x][0]]],_=e.worldFaceNormals[x];r.vsub(w[0],Qa);const M=-_.dot(Qa);if(m===null||Math.abs(M)<Math.abs(m)){if(p)return!0;m=M,h=x,f.copy(_)}}if(h!==-1){const x=this.createContactEquation(l,n,t,e,c,u);f.scale(m,g),g.vadd(r,g),g.vsub(i,g),x.rj.copy(g),f.negate(x.ni),x.ri.set(0,0,0);const v=x.ri,w=x.rj;v.vadd(r,v),v.vsub(l.position,v),w.vadd(i,w),w.vsub(n.position,w),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,r,s,a,n,l,c,u,p){return this.convexHeightfield(t,e,r,i,a,s,l,n,c,u,p)}particleCylinder(e,t,i,r,s,a,n,l,c,u,p){return this.convexParticle(t,e,r,i,a,s,l,n,c,u,p)}sphereTrimesh(e,t,i,r,s,a,n,l,c,u,p){const h=af,f=of,g=lf,m=cf,d=uf,x=hf,v=ff,w=nf,_=rf,M=gf;ke.pointToLocalFrame(r,a,i,d);const E=e.radius;v.lowerBound.set(d.x-E,d.y-E,d.z-E),v.upperBound.set(d.x+E,d.y+E,d.z+E),t.getTrianglesInAABB(v,M);const L=sf,y=e.radius*e.radius;for(let z=0;z<M.length;z++)for(let D=0;D<3;D++)if(t.getVertex(t.indices[M[z]*3+D],L),L.vsub(d,_),_.lengthSquared()<=y){if(w.copy(L),ke.pointToWorldFrame(r,a,w,L),L.vsub(i,_),p)return!0;let k=this.createContactEquation(n,l,e,t,c,u);k.ni.copy(_),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(e.radius,k.ri),k.ri.vadd(i,k.ri),k.ri.vsub(n.position,k.ri),k.rj.copy(L),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let z=0;z<M.length;z++)for(let D=0;D<3;D++){t.getVertex(t.indices[M[z]*3+D],h),t.getVertex(t.indices[M[z]*3+(D+1)%3],f),f.vsub(h,g),d.vsub(f,x);const k=x.dot(g);d.vsub(h,x);let C=x.dot(g);if(C>0&&k<0&&(d.vsub(h,x),m.copy(g),m.normalize(),C=x.dot(m),m.scale(C,x),x.vadd(h,x),x.distanceTo(d)<e.radius)){if(p)return!0;const N=this.createContactEquation(n,l,e,t,c,u);x.vsub(d,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(i,N.ri),N.ri.vsub(n.position,N.ri),ke.pointToWorldFrame(r,a,x,x),x.vsub(l.position,N.rj),ke.vectorToWorldFrame(a,N.ni,N.ni),ke.vectorToWorldFrame(a,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}const S=df,P=pf,F=mf,G=tf;for(let z=0,D=M.length;z!==D;z++){t.getTriangleVertices(M[z],S,P,F),t.getNormal(M[z],G),d.vsub(S,x);let k=x.dot(G);if(G.scale(k,x),d.vsub(x,x),k=x.distanceTo(d),Ze.pointInTriangle(x,S,P,F)&&k<e.radius){if(p)return!0;let C=this.createContactEquation(n,l,e,t,c,u);x.vsub(d,C.ni),C.ni.normalize(),C.ni.scale(e.radius,C.ri),C.ri.vadd(i,C.ri),C.ri.vsub(n.position,C.ri),ke.pointToWorldFrame(r,a,x,x),x.vsub(l.position,C.rj),ke.vectorToWorldFrame(a,C.ni,C.ni),ke.vectorToWorldFrame(a,C.ri,C.ri),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult)}}M.length=0}planeTrimesh(e,t,i,r,s,a,n,l,c,u,p){const h=new b,f=Km;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const m=new b;m.copy(h),ke.pointToWorldFrame(r,a,m,h);const d=Qm;if(h.vsub(i,d),f.dot(d)<=0){if(p)return!0;const x=this.createContactEquation(n,l,e,t,c,u);x.ni.copy(f);const v=ef;f.scale(d.dot(f),v),h.vsub(v,v),x.ri.copy(v),x.ri.vsub(n.position,x.ri),x.rj.copy(h),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Di=new b,ur=new b,hr=new b,Xm=new b,$m=new b,Zm=new Je,Jm=new Je,Km=new b,Qm=new b,ef=new b,tf=new b,rf=new b;new b;const sf=new b,nf=new b,af=new b,of=new b,lf=new b,cf=new b,uf=new b,hf=new b,df=new b,pf=new b,mf=new b,ff=new At,gf=[],ws=new b,Ja=new b,vf=new b,xf=new b,_f=new b;function yf(o,e,t){let i=null;const r=o.length;for(let s=0;s!==r;s++){const a=o[s],n=vf;o[(s+1)%r].vsub(a,n);const l=xf;n.cross(e,l);const c=_f;t.vsub(a,c);const u=l.dot(c);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const Ms=new b,bf=new b,wf=new b,Mf=new b,Sf=[new b,new b,new b,new b,new b,new b],Ef=new b,Tf=new b,Af=new b,Cf=new b,Lf=new b,Rf=new b,Df=new b,Pf=new b,If=new b,Ff=new b,zf=new b,kf=new b,Nf=new b,Of=new b;new b;new b;const Bf=new b,Gf=new b,Uf=new b,Wf=new b,Hf=new b,Vf=new b,jf=new b,qf=new b,Yf=new b,Xf=new b,Ka=new Je,$f=new b;new b;const Zf=new b,Qa=new b,Jf=new b,Kf=new b,Qf=new b,eg=[0],tg=new b,ig=new b;class eo{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),r=this.current;let s=0;for(;i>r[s];)s++;if(i!==r[s]){for(let a=r.length-1;a>=s;a--)r[a+1]=r[a];r[s]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,r=this.previous,s=i.length,a=r.length;let n=0;for(let l=0;l<s;l++){let c=!1;const u=i[l];for(;u>r[n];)n++;c=u===r[n],c||to(e,u)}n=0;for(let l=0;l<a;l++){let c=!1;const u=r[l];for(;u>i[n];)n++;c=i[n]===u,c||to(t,u)}}}function to(o,e){o.push((e&4294901760)>>16,e&65535)}const bn=(o,e)=>o<e?`${o}-${e}`:`${e}-${o}`;class rg{constructor(){this.data={keys:[]}}get(e,t){const i=bn(e,t);return this.data[i]}set(e,t,i){const r=bn(e,t);this.get(e,t)||this.data.keys.push(r),this.data[r]=i}delete(e,t){const i=bn(e,t),r=this.data.keys.indexOf(i);r!==-1&&this.data.keys.splice(r,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class sg extends ko{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new No,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Um,this.constraints=[],this.narrowphase=new Ym(this),this.collisionMatrix=new Ga,this.collisionMatrixPrevious=new Ga,this.bodyOverlapKeeper=new eo,this.shapeOverlapKeeper=new eo,this.contactmaterials=[],this.contactMaterialTable=new rg,this.defaultMaterial=new Hi("default"),this.defaultContactMaterial=new Wi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof Rs?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,r){return i===void 0&&(i={}),i.mode=Ze.ALL,i.from=e,i.to=t,i.callback=r,wn.intersectWorld(this,i)}raycastAny(e,t,i,r){return i===void 0&&(i={}),i.mode=Ze.ANY,i.from=e,i.to=t,i.result=r,wn.intersectWorld(this,i)}raycastClosest(e,t,i,r){return i===void 0&&(i={}),i.mode=Ze.CLOSEST,i.from=e,i.to=t,i.result=r,wn.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof se&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,r=i.indexOf(e);if(r!==-1){i.splice(r,1);for(let s=0;s!==i.length;s++)i[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const r=t[i].shapes;for(let s=0;s<r.length;s++){const a=r[s];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=Qe.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const r=i-this.lastCallTime;this.step(e,r,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const r=Qe.now();let s=0;for(;this.accumulator>=e&&s<i&&(this.internalStep(e),this.accumulator-=e,s++,!(Qe.now()-r>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let n=0;n!==this.bodies.length;n++){const l=this.bodies[n];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=cg,r=ug,s=this.bodies.length,a=this.bodies,n=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,p=se.DYNAMIC;let h=-1/0;const f=this.constraints,g=lg;l.length();const m=l.x,d=l.y,x=l.z;let v=0;for(c&&(h=Qe.now()),v=0;v!==s;v++){const G=a[v];if(G.type===p){const z=G.force,D=G.mass;z.x+=D*m,z.y+=D*d,z.z+=D*x}}for(let G=0,z=this.subsystems.length;G!==z;G++)this.subsystems[G].update();c&&(h=Qe.now()),i.length=0,r.length=0,this.broadphase.collisionPairs(this,i,r),c&&(u.broadphase=Qe.now()-h);let w=f.length;for(v=0;v!==w;v++){const G=f[v];if(!G.collideConnected)for(let z=i.length-1;z>=0;z-=1)(G.bodyA===i[z]&&G.bodyB===r[z]||G.bodyB===i[z]&&G.bodyA===r[z])&&(i.splice(z,1),r.splice(z,1))}this.collisionMatrixTick(),c&&(h=Qe.now());const _=og,M=t.length;for(v=0;v!==M;v++)_.push(t[v]);t.length=0;const E=this.frictionEquations.length;for(v=0;v!==E;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,r,this,t,_,this.frictionEquations,g),c&&(u.narrowphase=Qe.now()-h),c&&(h=Qe.now()),v=0;v<this.frictionEquations.length;v++)n.addEquation(this.frictionEquations[v]);const L=t.length;for(let G=0;G!==L;G++){const z=t[G],D=z.bi,k=z.bj,C=z.si,N=z.sj;let j;if(D.material&&k.material?j=this.getContactMaterial(D.material,k.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,D.material&&k.material&&(D.material.friction>=0&&k.material.friction>=0&&D.material.friction*k.material.friction,D.material.restitution>=0&&k.material.restitution>=0&&(z.restitution=D.material.restitution*k.material.restitution)),n.addEquation(z),D.allowSleep&&D.type===se.DYNAMIC&&D.sleepState===se.SLEEPING&&k.sleepState===se.AWAKE&&k.type!==se.STATIC){const O=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),W=k.sleepSpeedLimit**2;O>=W*2&&(D.wakeUpAfterNarrowphase=!0)}if(k.allowSleep&&k.type===se.DYNAMIC&&k.sleepState===se.SLEEPING&&D.sleepState===se.AWAKE&&D.type!==se.STATIC){const O=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),W=D.sleepSpeedLimit**2;O>=W*2&&(k.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,k,!0),this.collisionMatrixPrevious.get(D,k)||(Dr.body=k,Dr.contact=z,D.dispatchEvent(Dr),Dr.body=D,k.dispatchEvent(Dr)),this.bodyOverlapKeeper.set(D.id,k.id),this.shapeOverlapKeeper.set(C.id,N.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Qe.now()-h,h=Qe.now()),v=0;v!==s;v++){const G=a[v];G.wakeUpAfterNarrowphase&&(G.wakeUp(),G.wakeUpAfterNarrowphase=!1)}for(w=f.length,v=0;v!==w;v++){const G=f[v];G.update();for(let z=0,D=G.equations.length;z!==D;z++){const k=G.equations[z];n.addEquation(k)}}n.solve(e,this),c&&(u.solve=Qe.now()-h),n.removeAllEquations();const y=Math.pow;for(v=0;v!==s;v++){const G=a[v];if(G.type&p){const z=y(1-G.linearDamping,e),D=G.velocity;D.scale(z,D);const k=G.angularVelocity;if(k){const C=y(1-G.angularDamping,e);k.scale(C,k)}}}this.dispatchEvent(ag),c&&(h=Qe.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(v=0;v!==s;v++)a[v].integrate(e,S,P);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Qe.now()-h),this.stepnumber+=1,this.dispatchEvent(ng);let F=!0;if(this.allowSleep)for(F=!1,v=0;v!==s;v++){const G=a[v];G.sleepTick(this.time),G.sleepState!==se.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(ni,ai),e){for(let s=0,a=ni.length;s<a;s+=2)Pr.bodyA=this.getBodyById(ni[s]),Pr.bodyB=this.getBodyById(ni[s+1]),this.dispatchEvent(Pr);Pr.bodyA=Pr.bodyB=null}if(t){for(let s=0,a=ai.length;s<a;s+=2)Ir.bodyA=this.getBodyById(ai[s]),Ir.bodyB=this.getBodyById(ai[s+1]),this.dispatchEvent(Ir);Ir.bodyA=Ir.bodyB=null}ni.length=ai.length=0;const i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(ni,ai),i){for(let s=0,a=ni.length;s<a;s+=2){const n=this.getShapeById(ni[s]),l=this.getShapeById(ni[s+1]);oi.shapeA=n,oi.shapeB=l,n&&(oi.bodyA=n.body),l&&(oi.bodyB=l.body),this.dispatchEvent(oi)}oi.bodyA=oi.bodyB=oi.shapeA=oi.shapeB=null}if(r){for(let s=0,a=ai.length;s<a;s+=2){const n=this.getShapeById(ai[s]),l=this.getShapeById(ai[s+1]);li.shapeA=n,li.shapeB=l,n&&(li.bodyA=n.body),l&&(li.bodyB=l.body),this.dispatchEvent(li)}li.bodyA=li.bodyB=li.shapeA=li.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const r=e[i];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new At;const wn=new Ze,Qe=globalThis.performance||{};if(!Qe.now){let o=Date.now();Qe.timing&&Qe.timing.navigationStart&&(o=Qe.timing.navigationStart),Qe.now=()=>Date.now()-o}new b;const ng={type:"postStep"},ag={type:"preStep"},Dr={type:se.COLLIDE_EVENT_NAME,body:null,contact:null},og=[],lg=[],cg=[],ug=[],ni=[],ai=[],Pr={type:"beginContact",bodyA:null,bodyB:null},Ir={type:"endContact",bodyA:null,bodyB:null},oi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},li={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class io{constructor(e){typeof e=="object"&&(e=e.notation),this.set=[],this.setkeys=[],this.setid=0,this.groups=[],this.totalDice=0,this.op="",this.constant=null,this.result=[],this.error=!1,this.boost=1,this.notation="",this.vectors=[],(!e||e=="0")&&(this.error=!0),this.parseNotation(e)}parseNotation(e){e&&(e=e.split(" ").join(""));const t=this.notation.length>0?"+":"";this.notation+=t+e;let i=e.split(","),r=[];for(let h=0;h<i.length;h++){let f=i[h].split("@");r.push(f[1]),i[h]=f[0]}let s=new RegExp(/(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/,"i"),a=new RegExp(/(\b)*(\-\d+|\d+)(\b)*/,"gi"),n,l=0,c=30,u=0,p=0;for(;!this.error&&i[i.length-1].length>0&&(n=s.exec(i[p]))!==null&&l<c;){l++,i[p].length===0&&p++,i[p]=i[p].substring(n[0].length);let h=n[1],f=n[3],g=n[4],m=n[5]||"",d=n[6]||"",x=!0;l==1&&i[p].length==0&&!g&&h&&f?(g="d20",this.op=h,this.constant=parseInt(f),f=1):l>1&&i[p].length==0&&!g&&(this.op=h,this.constant=parseInt(f),x=!1),x&&this.addSet(f,g,p,u,m,d,h)}for(let h=0;h<r.length;h++)!this.error&&r[h]&&(n=r[h].match(a))!==null&&this.result.push(...n)}stringify(e=!0){let t="";if(this.set.length<1)return t;for(let i=0;i<this.set.length;i++){let r=this.set[i];t+=i>0&&r.op?r.op:"",t+=r.num+r.type,r.func&&(t+="{",t+=r.func?r.func:"",t+=r.args?","+(Array.isArray(r.args)?r.args.join(","):r.args):"",t+="}")}return t+=this.constant?this.op+""+Math.abs(this.constant):"",e&&this.result&&this.result.length>0&&(t+="@"+this.result.join(",")),this.boost>1&&(t+="!".repeat(this.boost/4)),t}addSet(e,t,i=0,r=0,s="",a="",n="+"){e=Math.abs(parseInt(e||1));let l=n+""+t+i+r+s+a,c=this.setkeys[l]!=null,u={};if(c&&(u=this.set[this.setkeys[l]-1]),e>0){if(u.num=c?e+u.num:e,u.type=t,u.sid=this.setid,u.gid=i,u.glvl=r,s&&(u.func=s),a&&(u.args=a),n&&(u.op=n),u.type==="")return;c?this.set[this.setkeys[l]-1]=u:this.setkeys[l]=this.set.push(u)}c||++this.setid}static mergeNotation(e,t){return{...e,constant:e.constant+t.constant,notation:e.notation+"+"+t.notation,set:[...e.set,...t.set],totalDice:e.vectors.length+t.vectors.length,vectors:[...e.vectors,...t.vectors]}}}const Mn={d2:{name:"d2",labels:["1","2"],values:[1,2],inertia:8,mass:400,scale:.9,system:"dweird"},dc:{type:"d2",name:"Coin",labels:["textures/silvercoin/tail.png","textures/silvercoin/heads.png"],setBumpMaps:["textures/silvercoin/tail_bump.png","textures/silvercoin/heads_bump.png"],values:[0,1],inertia:8,mass:400,scale:.9,colorset:"coin_silver"},d1:{name:"One-sided Dice",type:"d6",labels:["1"],values:[1,1],scale:.9,system:"dweird"},d3:{name:"Three-Sided Dice",type:"d6",labels:["1","2","3"],values:[1,3],scale:.9,system:"dweird"},df:{name:"Fudge Dice",type:"d6",labels:["-","0","+"],values:[-1,1],scale:.9,system:"dweird"},d4:{name:"Four-Sided Dice",labels:["1","2","3","4"],values:[1,4],inertia:5,scale:1.2},d6:{name:"Six-Sided Dice (Numbers)",labels:["1","2","3","4","5","6"],values:[1,6],scale:.9},dpip:{name:"Six-Sided Dice (Pips)",type:"d6",labels:[`   
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
E`,"",""],values:[1,8],font:"Armada-Symbol-Regular",color:"#111111",colorset:"swa_black",display:"labels",system:"swarmada"},xwatk:{name:"Star Wars X-Wing: Red Attack Dice",type:"d8",labels:["c","d","d","d","f","f","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#FF0000",colorset:"xwing_red",display:"labels",system:"xwing"},xwdef:{name:"Star Wars X-Wing: Green Defense Dice",type:"d8",labels:["e","e","e","f","f","","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#00FF00",colorset:"xwing_green",display:"labels",system:"xwing"},swlar:{name:"Star Wars Legion: Red Attack Dice",type:"d8",labels:["h","h","h","h","h","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_atkred",display:"labels",system:"legion"},swlab:{name:"Star Wars Legion: Black Attack Dice",type:"d8",labels:["h","h","h","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#111111",colorset:"swl_atkblack",display:"labels",system:"legion"},swlaw:{name:"Star Wars Legion: White Attack Dice",type:"d8",labels:["h","","","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_atkwhite",display:"labels",system:"legion"},swldr:{name:"Star Wars Legion: Red Defense Dice",type:"d6",labels:["s","s","s","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_defred",display:"labels",system:"legion"},swldw:{name:"Star Wars Legion: White Defense Dice",type:"d6",labels:["s","","","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_defwhite",display:"labels",system:"legion"}},Dt={d4:{vertices:[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],faces:[[1,0,2,1],[0,1,3,2],[0,3,2,3],[1,2,3,4]]},d6:{vertices:[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],faces:[[0,3,2,1,1],[1,2,6,5,2],[0,1,5,4,3],[3,7,6,2,4],[0,4,7,3,5],[4,5,6,7,6]]},d8:{vertices:[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],faces:[[0,2,4,1],[0,4,3,2],[0,3,5,3],[0,5,2,4],[1,3,4,5],[1,4,2,6],[1,2,5,7],[1,5,3,8]]},d10:{vertices:[[1,0,-.105],[.809,.5877,.105],[.309,.951,-.105],[-.309,.951,.105],[-.809,.5877,-.105],[-1,0,.105],[-.809,-.587,-.105],[-.309,-.951,.105],[.309,-.951,-.105],[.809,-.5877,.105],[0,0,-1],[0,0,1]],faces:[[5,6,7,11,0],[4,3,2,10,1],[1,2,3,11,2],[0,9,8,10,3],[7,8,9,11,4],[8,7,6,10,5],[9,0,1,11,6],[2,1,0,10,7],[3,4,5,11,8],[6,5,4,10,9]]},d12:{vertices:[[0,.618,1.618],[0,.618,-1.618],[0,-.618,1.618],[0,-.618,-1.618],[1.618,0,.618],[1.618,0,-.618],[-1.618,0,.618],[-1.618,0,-.618],[.618,1.618,0],[.618,-1.618,0],[-.618,1.618,0],[-.618,-1.618,0],[1,1,1],[1,1,-1],[1,-1,1],[1,-1,-1],[-1,1,1],[-1,1,-1],[-1,-1,1],[-1,-1,-1]],faces:[[2,14,4,12,0,1],[15,9,11,19,3,2],[16,10,17,7,6,3],[6,7,19,11,18,4],[6,18,2,0,16,5],[18,11,9,14,2,6],[1,17,10,8,13,7],[1,13,5,15,3,8],[13,8,12,4,5,9],[5,4,14,9,15,10],[0,12,8,10,16,11],[3,19,7,17,1,12]]},d20:{vertices:[[-1,1.618,0],[1,1.618,0],[-1,-1.618,0],[1,-1.618,0],[0,-1,1.618],[0,1,1.618],[0,-1,-1.618],[0,1,-1.618],[1.618,0,-1],[1.618,0,1],[-1.618,0,-1],[-1.618,0,1]],faces:[[0,11,5,1],[0,5,1,2],[0,1,7,3],[0,7,10,4],[0,10,11,5],[1,5,9,6],[5,11,4,7],[11,10,2,8],[10,7,6,9],[7,1,8,10],[3,9,4,11],[3,4,2,12],[3,2,6,13],[3,6,8,14],[3,8,9,15],[4,9,5,16],[2,4,11,17],[6,2,10,18],[8,6,7,19],[9,8,1,20]]}},hg={name:"",scale:1,font:"Arial",color:"",labels:[],valueMap:[],values:[],normals:[],mass:300,inertia:13,geometry:null,display:"values",system:"d20"};class dg{constructor(e){if(!Mn.hasOwnProperty(e))return console.error("dice type unavailable");Object.assign(this,hg,Mn[e]),this.shape=Mn[e].type||e,this.type=e,this.setLabels(this.labels),this.setValues(this.values[0],this.values[1],this.values[2]),this.setValueMap(this.valueMap),this.bumpMaps&&this.setBumpMaps(this.bumpMaps)}setValues(e=1,t=20,i=1){this.values=this.range(e,t,i)}setValueMap(e){for(let t=0;t<this.values.length;t++){let i=this.values[t];e[i]!=null&&(this.valueMap[i]=e[i])}}registerFaces(e,t="labels"){let i;if(t=="labels"?i=this.labels:i=this.normals,i.unshift(""),["d2","d10"].includes(this.shape)||i.unshift(""),this.shape=="d4"){let r=e[0],s=e[1],a=e[2],n=e[3];this.labels=[[[],[0,0,0],[s,n,a],[r,a,n],[s,r,n],[r,s,a]],[[],[0,0,0],[s,a,n],[a,r,n],[s,n,r],[a,s,r]],[[],[0,0,0],[n,a,s],[a,n,r],[n,s,r],[a,r,s]],[[],[0,0,0],[n,s,a],[r,n,a],[n,r,s],[r,a,s]]]}else Array.prototype.push.apply(i,e)}setLabels(e){this.loadTextures(e,this.registerFaces.bind(this),"labels")}setBumpMaps(e){this.loadTextures(e,this.registerFaces.bind(this),"bump")}loadTextures(e,t,i){let r=0,s=e.length,a=/\.(PNG|JPG|GIF|WEBP)$/i,n=Array(e.length),l=!1;for(let c=0;c<s;c++){if(e[c]==""||!e[c].match(a)){n[c]=e[c],++r;continue}l=!0,n[c]=new Image,n[c].onload=function(){++r>=s&&t(n,i)},n[c].src=e[c]}l||t(n,i)}range(e,t,i=1){for(var r=[e],s=e;s<t;)r.push(s+=i||1);return r}}const pg={none:{name:"Plastic"},perfectmetal:{name:"Perfect Metal",color:14540253,roughness:0,metalness:1,envMapIntensity:1},metal:{name:"Metal",color:14540253,roughness:.5,metalness:.6,envMapIntensity:1},wood:{name:"Wood",color:14540253,roughness:.9,metalness:0,envMapIntensity:1},glass:{name:"Glass",color:14540253,roughness:.1,metalness:0,envMapIntensity:1}},mg={baseScale:100,bumpMapping:!0},Nr=class{constructor(o){this.geometries={},this.materials_cache={},this.cache_hits=0,this.cache_misses=0,this.label_color="",this.dice_color="",this.edge_color="",this.label_outline="",this.dice_texture="",this.dice_material="",this.material_options={specular:16777215,color:11908533,shininess:5,flatShading:!0},Object.assign(this,mg,o)}updateConfig(o={}){Object.assign(this,o),o.scale&&this.scaleGeometry()}setBumpMapping(o){this.bumpMapping=o,this.materials_cache={}}create(o){let e=this.get(o);if(!e)return null;let t=this.geometries[o];if(t||(t=this.createGeometry(e.shape,e.scale*this.baseScale),this.geometries[o]=t),!t)return null;this.setMaterialInfo();let i=new Xt(t,this.createMaterials(e,this.baseScale/2,1));switch(i.result=[],i.shape=e.shape,i.rerolls=0,i.resultReason="natural",i.mass=e.mass,i.getFaceValue=function(){let r=this.resultReason,s=new U(0,0,this.shape=="d4"?-1:1),a,n=Math.PI*2,l=this.geometry.getAttribute("normal").array;for(let g=0,m=this.geometry.groups.length;g<m;++g){let d=this.geometry.groups[g];if(d.materialIndex==0)continue;let x=g*9,v=new U(l[x],l[x+1],l[x+2]).clone().applyQuaternion(this.body.quaternion).angleTo(s);v<n&&(n=v,a=d)}let c=a.materialIndex-1,u=2;const p=Nr.dice[this.notation.type];if(this.shape=="d4"){let g=c-1==0?5:c;return{value:c,label:p.labels[c-1][g][0],reason:r}}["d10","d2"].includes(this.shape)&&(c+=1,u-=1);let h=p.values[(c-1)%p.values.length],f=p.labels[(c-1)%(p.labels.length-2)+u];return{value:h,label:f,reason:r}},i.storeRolledValue=function(r){this.resultReason=r||this.resultReason,this.result.push(this.getFaceValue())},i.getLastValue=function(){return!this.result||this.result.length<1?{value:void 0,label:"",reason:""}:this.result[this.result.length-1]},i.ignoreLastValue=function(r){let s=this.getLastValue();s.value!==void 0&&(s.ignore=r,this.setLastValue(s))},i.setLastValue=function(r){if(!(!this.result||this.result.length<1)&&!(!r||r.length<1))return this.result[this.result.length-1]=r},e.color&&(i.material[0].color=new Pe(e.color),i.material[0].emissive=new Pe(e.color),i.material[0].emissiveIntensity=1,i.material[0].needsUpdate=!0),e.values.length){case 1:return this.fixmaterials(i,1);case 2:return this.fixmaterials(i,2);case 3:return this.fixmaterials(i,3);default:return i}}get(o){let e;return Nr.dice.hasOwnProperty(o)?e=Nr.dice[o]:(e=new dg(o),Nr.dice[o]=e),e}getGeometry(o){return this.geometries[o]}scaleGeometry(){}createMaterials(o,e,t,i=!0,r=0){let s=[],a=o.labels;o.shape=="d4"&&(a=o.labels[r],e=this.baseScale/2,t=this.baseScale*2);for(var n=0;n<a.length;++n){var l;this.dice_material!="none"?(l=new Pp(pg[this.dice_material]),l.envMapIntensity=0):l=new Ip(this.material_options);let c;if(n==0){let u={name:"none"};this.dice_texture_rand.composite!="source-over"&&(u=this.dice_texture_rand),c=this.createTextMaterial(o,a,n,e,t,u,this.label_color_rand,this.label_outline_rand,this.edge_color_rand,i),l.map=c.composite}else if(c=this.createTextMaterial(o,a,n,e,t,this.dice_texture_rand,this.label_color_rand,this.label_outline_rand,this.dice_color_rand,i),l.map=c.composite,this.bumpMapping){{let u=.75;e>35&&(u=1),e>40&&(u=2.5),e>45&&(u=4),l.bumpScale=u}c.bump&&(l.bumpMap=c.bump),o.shape!="d4"&&o.normals[n]&&(l.bumpMap=new Tt(o.normals[n]),l.bumpScale=4,l.bumpMap.needsUpdate=!0)}l.opacity=1,l.transparent=!0,l.depthTest=!1,l.needUpdate=!0,s.push(l)}return s}createTextMaterial(o,e,t,i,r,s,a,n,l,c){if(e[t]===void 0)return null;s=s||this.dice_texture_rand,a=a||this.label_color_rand,n=n||this.label_outline_rand,l=l||this.dice_color_rand,c=c??!0;let u=e[t],p=!1,h=u;u instanceof HTMLImageElement?h=u.src:u instanceof Array&&u.forEach(L=>{h+=L.src});let f=o.type+h+t+s.name+a+n+l;if(o.shape=="d4"&&(f=o.type+h+s.name+a+n+l),c&&this.materials_cache[f]!=null)return this.cache_hits++,this.materials_cache[f];let g=document.createElement("canvas"),m=g.getContext("2d",{alpha:!0});m.globalAlpha=0,m.clearRect(0,0,g.width,g.height);let d=document.createElement("canvas"),x=d.getContext("2d",{alpha:!0});x.globalAlpha=0,x.clearRect(0,0,d.width,d.height);let v;if(o.shape=="d4"?v=this.calc_texture_size(i+r)*4:v=this.calc_texture_size(i+i*2*r)*4,g.width=g.height=v,d.width=d.height=v,m.fillStyle=l,m.fillRect(0,0,g.width,g.height),x.fillStyle="#FFFFFF",x.fillRect(0,0,d.width,d.height),s.texture&&s.name!=""&&s.name!="none"?(m.globalCompositeOperation=s.composite||"source-over",m.drawImage(s.texture,0,0,g.width,g.height),m.globalCompositeOperation="source-over",s.bump&&(x.globalCompositeOperation="source-over",x.drawImage(s.bump,0,0,g.width,g.height))):m.globalCompositeOperation="source-over",m.globalCompositeOperation="source-over",m.textAlign="center",m.textBaseline="middle",x.textAlign="center",x.textBaseline="middle",o.shape!="d4"){let L={d8:{even:-7.5,odd:-127.5},d10:{all:-6},d12:{all:5},d20:{all:-7.5}}[o.shape];if(L){let y;if(L.hasOwnProperty("all")?y=L.all:t>0&&t%2!=0?y=L.odd:y=L.even,y&&y!=0){var w=g.width/2,_=g.height/2;m.translate(w,_),m.rotate(y*(Math.PI/180)),m.translate(-w,-_),x.translate(w,_),x.rotate(y*(Math.PI/180)),x.translate(-w,-_)}}if(u instanceof HTMLImageElement)p=!0,m.drawImage(u,0,0,u.width,u.height,0,0,g.width,g.height);else{let y=v/(1+2*r),S=g.height/2+10,P=g.width/2;o.shape=="d10"?(y=y*.75,S=S*1.15-10):o.shape=="d20"&&(P=P*.98),m.font=y+"pt "+o.font,x.font=y+"pt "+o.font;let F=m.measureText("M").width*1.4,G=u.split(`
`);G.length>1&&(y=y/G.length,m.font=y+"pt "+o.font,x.font=y+"pt "+o.font,F=m.measureText("M").width*1.2,S-=F*G.length/2);for(let z=0,D=G.length;z<D;z++){let k=G[z].trim();n!="none"&&n!=l&&(m.strokeStyle=n,m.lineWidth=5,m.strokeText(G[z],P,S),x.strokeStyle="#000000",x.lineWidth=5,x.strokeText(G[z],P,S),(k=="6"||k=="9")&&(m.strokeText("  .",P,S),x.strokeText("  .",P,S))),m.fillStyle=a,m.fillText(G[z],P,S),x.fillStyle="#000000",x.fillText(G[z],P,S),(k=="6"||k=="9")&&(m.fillText("  .",P,S),x.fillText("  .",P,S)),S+=F*1.5}}}else{var w=g.width/2,_=g.height/2;m.font=v/128*24+"pt "+o.font,x.font=v/128*24+"pt "+o.font;for(let S=0;S<u.length;S++){if(u[S]instanceof HTMLImageElement){let P=u[S].width/g.width;m.drawImage(u[S],0,0,u[S].width,u[S].height,100/P,25/P,60/P,60/P)}else n!="none"&&n!=l&&(m.strokeStyle=n,m.lineWidth=5,m.strokeText(u[S],w,_-v*.3),x.strokeStyle="#000000",x.lineWidth=5,x.strokeText(u[S],w,_-v*.3)),m.fillStyle=a,m.fillText(u[S],w,_-v*.3),x.fillStyle="#000000",x.fillText(u[S],w,_-v*.3);m.translate(w,_),m.rotate(Math.PI*2/3),m.translate(-w,-_),x.translate(w,_),x.rotate(Math.PI*2/3),x.translate(-w,-_)}}var M=new Ia(g),E;return p?E=null:E=new Ia(d),c&&(this.cache_misses++,this.materials_cache[f]={composite:M,bump:E}),{composite:M,bump:E}}applyColorSet(o){var e;this.colordata=o,this.label_color=o.foreground,this.dice_color=o.background,this.label_outline=o.outline,this.dice_texture=o.texture,this.dice_material=((e=o==null?void 0:o.texture)==null?void 0:e.material)||"none",this.edge_color=o.hasOwnProperty("edge")?o.edge:o.background}setMaterialInfo(o=""){let e=this.colordata,t=this.dice_texture,i=this.dice_material;if(this.dice_color_rand="",this.label_color_rand="",this.label_outline_rand="",this.dice_texture_rand="",this.dice_material_rand="",this.edge_color_rand="",Array.isArray(this.dice_color)){var r=Math.floor(Math.random()*this.dice_color.length);Array.isArray(this.label_color)&&this.label_color.length==this.dice_color.length&&(this.label_color_rand=this.label_color[r],Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[r])),Array.isArray(this.dice_texture)&&this.dice_texture.length==this.dice_color.length&&(this.dice_texture_rand=this.dice_texture[r],this.dice_material_rand=this.dice_texture_rand.material),Array.isArray(this.edge_color)&&this.edge_color.length==this.dice_color.length&&(this.edge_color_rand=this.edge_color[r]),this.dice_color_rand=this.dice_color[r]}else this.dice_color_rand=this.dice_color;if(this.edge_color_rand=="")if(Array.isArray(this.edge_color)){var r=Math.floor(Math.random()*this.edge_color.length);this.edge_color_rand=this.edge_color[r]}else this.edge_color_rand=this.edge_color;if(this.label_color_rand==""&&Array.isArray(this.label_color)){var r=this.label_color[Math.floor(Math.random()*this.label_color.length)];Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[r]),this.label_color_rand=this.label_color[r]}else this.label_color_rand==""&&(this.label_color_rand=this.label_color);if(this.label_outline_rand==""&&Array.isArray(this.label_outline)){var r=this.label_outline[Math.floor(Math.random()*this.label_outline.length)];this.label_outline_rand=this.label_outline[r]}else this.label_outline_rand==""&&(this.label_outline_rand=this.label_outline);this.dice_texture_rand==""&&Array.isArray(this.dice_texture)?(this.dice_texture_rand=this.dice_texture[Math.floor(Math.random()*this.dice_texture.length)],this.dice_material_rand=this.dice_texture_rand.material||this.dice_material):this.dice_texture_rand==""&&(this.dice_texture_rand=this.dice_texture,this.dice_material_rand=this.dice_texture_rand.material||this.dice_material),this.dice_material_rand==""&&Array.isArray(this.dice_material)?this.dice_material_rand=this.dice_material[Math.floor(Math.random()*this.dice_material.length)]:this.dice_material_rand==""&&(this.dice_material_rand=this.dice_material),this.colordata&&this.colordata.id!=e.id&&this.applyColorSet(e,t,i)}calc_texture_size(o){return Math.pow(2,Math.floor(Math.log(o)/Math.log(2)))}createGeometry(o,e,t=!1){const i=t?"create_shape":"create_geom";switch(o){case"d2":var r=new Nn(1*e,1*e,.1*e,32);return r.cannon_shape=new Bm(1*e,1*e,.1*e,8),r;case"d4":return this[i](Dt.d4.vertices,Dt.d4.faces,e,-.1,Math.PI*7/6,.96);case"d6":return this[i](Dt.d6.vertices,Dt.d6.faces,e,.1,Math.PI/4,.96);case"d8":return this[i](Dt.d8.vertices,Dt.d8.faces,e,0,-Math.PI/4/2,.965);case"d10":return this[i](Dt.d10.vertices,Dt.d10.faces,e,.3,Math.PI,.945);case"d12":return this[i](Dt.d12.vertices,Dt.d12.faces,e,.2,-Math.PI/4/2,.968);case"d20":return this[i](Dt.d20.vertices,Dt.d20.faces,e,-.2,-Math.PI/4/2,.955);default:return console.error(`Geometry for ${o} is not available`),null}}fixmaterials(o,e){for(let i=0,r=o.geometry.groups.length;i<r;++i){var t=o.geometry.groups[i].materialIndex-2;if(t<e)continue;let s=t%e;o.geometry.groups[i].materialIndex=s+2}return o.geometry.elementsNeedUpdate=!0,o}create_shape(o,e,t){for(var i=new Array(o.length),r=0;r<o.length;++r)i[r]=new U().fromArray(o[r]).normalize();for(var s=new Array(o.length),a=new Array(e.length),r=0;r<i.length;++r){var n=i[r];s[r]=new b(n.x*t,n.y*t,n.z*t)}for(var r=0;r<e.length;++r)a[r]=e[r].slice(0,e[r].length-1);return new Ui({vertices:s,faces:a})}make_geom(o,e,t,i,r){let s=new Zt;for(let f=0;f<o.length;++f)o[f]=o[f].multiplyScalar(t);let a=[];const n=[],l=[],c=new U,u=new U;let p,h=0;for(let f=0;f<e.length;++f){let g=e[f],m=g.length-1,d=Math.PI*2/m;p=g[m]+1;for(let v=0;v<m-2;++v)a.push(...o[g[0]].toArray()),a.push(...o[g[v+1]].toArray()),a.push(...o[g[v+2]].toArray()),c.subVectors(o[g[v+2]],o[g[v+1]]),u.subVectors(o[g[0]],o[g[v+1]]),c.cross(u),c.normalize(),n.push(...c.toArray()),n.push(...c.toArray()),n.push(...c.toArray()),l.push((Math.cos(r)+1+i)/2/(1+i),(Math.sin(r)+1+i)/2/(1+i)),l.push((Math.cos(d*(v+1)+r)+1+i)/2/(1+i),(Math.sin(d*(v+1)+r)+1+i)/2/(1+i)),l.push((Math.cos(d*(v+2)+r)+1+i)/2/(1+i),(Math.sin(d*(v+2)+r)+1+i)/2/(1+i));let x=(m-2)*3;for(let v=0;v<x/3;v++)s.addGroup(h,3,p),h+=3}return s.setAttribute("position",new ht(a,3)),s.setAttribute("normal",new ht(n,3)),s.setAttribute("uv",new ht(l,2)),s.boundingSphere=new Br(new U,t),s}make_d10_geom(o,e,t,i,r){let s=new Zt;for(let v=0;v<o.length;++v)o[v]=o[v].multiplyScalar(t);let a=[];const n=[],l=[],c=new U,u=new U;let p,h=0;for(let v=0;v<e.length;++v){let w=e[v],_=w.length-1,M=Math.PI*2/_;p=w[_]+1;var f=.65,g=.85,m=1-1*g,d=1-.895/1.105*g,x=1;for(let L=0;L<_-2;++L)a.push(...o[w[0]].toArray()),a.push(...o[w[L+1]].toArray()),a.push(...o[w[L+2]].toArray()),c.subVectors(o[w[L+2]],o[w[L+1]]),u.subVectors(o[w[0]],o[w[L+1]]),c.cross(u),c.normalize(),n.push(...c.toArray()),n.push(...c.toArray()),n.push(...c.toArray()),e[v][e[v].length-1]==-1||L>=2?(l.push((Math.cos(r)+1+i)/2/(1+i),(Math.sin(r)+1+i)/2/(1+i)),l.push((Math.cos(M*(L+1)+r)+1+i)/2/(1+i),(Math.sin(M*(L+1)+r)+1+i)/2/(1+i)),l.push((Math.cos(M*(L+2)+r)+1+i)/2/(1+i),(Math.sin(M*(L+2)+r)+1+i)/2/(1+i))):L==0?(l.push(.5-f/2,d),l.push(.5,m),l.push(.5+f/2,d)):L==1&&(l.push(.5-f/2,d),l.push(.5+f/2,d),l.push(.5,x));let E=(_-2)*3;for(let L=0;L<E/3;L++)s.addGroup(h,3,p),h+=3}return s.setAttribute("position",new ht(a,3)),s.setAttribute("normal",new ht(n,3)),s.setAttribute("uv",new ht(l,2)),s.boundingSphere=new Br(new U,t),s}chamfer_geom(o,e,t){for(var i=[],r=[],s=new Array(o.length),a=0;a<o.length;++a)s[a]=[];for(var a=0;a<e.length;++a){for(var n=e[a],l=n.length-1,c=new U,u=new Array(l),p=0;p<l;++p){var h=o[n[p]].clone();c.add(h),s[n[p]].push(u[p]=i.push(h)-1)}c.divideScalar(l);for(var p=0;p<l;++p){var h=i[u[p]];h.subVectors(h,c).multiplyScalar(t).addVectors(h,c)}u.push(n[l]),r.push(u)}for(var a=0;a<e.length-1;++a)for(var p=a+1;p<e.length;++p){for(var f=[],g=-1,m=0;m<e[a].length-1;++m){var d=e[p].indexOf(e[a][m]);d>=0&&d<e[p].length-1&&(g>=0&&m!=g+1?f.unshift([a,m],[p,d]):f.push([a,m],[p,d]),g=m)}f.length==4&&r.push([r[f[0][0]][f[0][1]],r[f[1][0]][f[1][1]],r[f[3][0]][f[3][1]],r[f[2][0]][f[2][1]],-1])}for(var a=0;a<s.length;++a){for(var x=s[a],u=[x[0]],v=x.length-1;v;){for(var m=e.length;m<r.length;++m){var w=r[m].indexOf(u[u.length-1]);if(w>=0&&w<4){--w==-1&&(w=3);var _=r[m][w];if(x.indexOf(_)>=0){u.push(_);break}}}--v}u.push(-1),r.push(u)}return{vectors:i,faces:r}}create_geom(o,e,t,i,r,s){for(var a=new Array(o.length),n=0;n<o.length;++n)a[n]=new U().fromArray(o[n]).normalize();var l=this.chamfer_geom(a,e,s);if(e.length!=10)var c=this.make_geom(l.vectors,l.faces,t,i,r);else var c=this.make_d10_geom(l.vectors,l.faces,t,i,r);return c.cannon_shape=this.create_shape(o,e,t),c.name="d"+e.length,c}};let jo=Nr;Ll(jo,"dice",{});const Sn={cloudy:{name:"Clouds (Transparent)",composite:"destination-in",source:"textures/cloudy.webp",source_bump:"textures/cloudy.alt.webp"},cloudy_2:{name:"Clouds",composite:"multiply",source:"textures/cloudy.alt.webp",source_bump:"textures/cloudy.alt.webp"},fire:{name:"Fire",composite:"multiply",source:"textures/fire.webp",source_bump:"textures/fire.webp",material:"metal"},marble:{name:"Marble",composite:"multiply",source:"textures/marble.webp",source_bump:"",material:"glass"},water:{name:"Water",composite:"destination-in",source:"textures/water.webp",source_bump:"textures/water.webp",material:"glass"},ice:{name:"Ice",composite:"destination-in",source:"textures/ice.webp",source_bump:"textures/ice.webp",material:"glass"},paper:{name:"Paper",composite:"multiply",source:"textures/paper.webp",source_bump:"textures/paper-bump.webp",material:"wood"},speckles:{name:"Speckles",composite:"multiply",source:"textures/speckles.webp",source_bump:"textures/speckles.webp",material:"none"},glitter:{name:"Glitter",composite:"multiply",source:"textures/glitter.webp",source_bump:"textures/glitter-bump.webp",material:"none"},glitter_2:{name:"Glitter (Transparent)",composite:"destination-in",source:"textures/glitter-alpha.webp",source_bump:"",material:"none"},stars:{name:"Stars",composite:"multiply",source:"textures/stars.webp",source_bump:"textures/stars.webp",material:"none"},stainedglass:{name:"Stained Glass",composite:"multiply",source:"textures/stainedglass.webp",source_bump:"textures/stainedglass-bump.webp",material:"glass"},wood:{name:"Wood",composite:"multiply",source:"textures/wood.webp",source_bump:"textures/wood.webp",material:"wood"},metal:{name:"Stainless Steel",composite:"multiply",source:"textures/metal.webp",source_bump:"textures/metal-bump.webp",material:"metal"},skulls:{name:"Skulls",composite:"multiply",source:"textures/skulls.webp",source_bump:"textures/skulls.webp"},leopard:{name:"Leopard",composite:"multiply",source:"textures/leopard.webp",source_bump:"textures/leopard.webp",material:"wood"},tiger:{name:"Tiger",composite:"multiply",source:"textures/tiger.webp",source_bump:"textures/tiger.webp",material:"wood"},cheetah:{name:"Cheetah",composite:"multiply",source:"textures/cheetah.webp",source_bump:"textures/cheetah.webp",material:"wood"},dragon:{name:"Dragon",composite:"multiply",source:"textures/dragon.webp",source_bump:"textures/dragon-bump.webp",material:"none"},lizard:{name:"Lizard",composite:"multiply",source:"textures/lizard.webp",source_bump:"textures/lizard.webp",material:"none"},bird:{name:"Bird",composite:"multiply",source:"textures/feather.webp",source_bump:"textures/feather-bump.webp",material:"wood"},astral:{name:"Astral Sea",composite:"multiply",source:"textures/astral.webp",source_bump:"textures/stars.webp",material:"none"},acleaf:{name:"AC Leaf",composite:"multiply",source:"textures/acleaf.webp",source_bump:"textures/acleaf.webp",material:"none"},thecage:{name:"Nicholas Cage",composite:"multiply",source:"textures/thecage.webp",source_bump:"",material:"metal"},isabelle:{name:"Isabelle",composite:"source-over",source:"textures/isabelle.webp",source_bump:"",material:"none"},bronze01:{name:"bronze01",composite:"difference",source:"textures/bronze01.webp",source_bump:"",material:"metal"},bronze02:{name:"bronze02",composite:"difference",source:"textures/bronze02.webp",source_bump:"",material:"metal"},bronze03:{name:"bronze03",composite:"difference",source:"textures/bronze03.webp",source_bump:"",material:"metal"},bronze03a:{name:"bronze03a",composite:"difference",source:"textures/bronze03a.webp",source_bump:"",material:"metal"},bronze03b:{name:"bronze03b",composite:"difference",source:"textures/bronze03b.webp",source_bump:"",material:"metal"},bronze04:{name:"bronze04",composite:"difference",source:"textures/bronze04.webp",source_bump:"",material:"metal"},none:{name:"none",composite:"source-over",source:"",source_bump:"",material:""},"":{name:"~ Preset ~",composite:"source-over",source:"",source_bump:"",material:""}},ro={coin_default:{name:"Gold Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},coin_silver:{name:"Silver Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},radiant:{name:"Radiant",category:"Damage Types",foreground:"#F9B333",background:"#FFFFFF",outline:"",texture:"paper",description:"Radiant"},fire:{name:"Fire",category:"Damage Types",foreground:"#f8d84f",background:["#f8d84f","#f9b02d","#f43c04","#910200","#4c1009"],outline:"black",texture:"fire",description:"Fire"},ice:{name:"Ice",category:"Damage Types",foreground:"#60E9FF",background:["#214fa3","#3c6ac1","#253f70","#0b56e2","#09317a"],outline:"black",texture:"ice",description:"Ice"},poison:{name:"Poison",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409e","#934fc3","#c949fc"],outline:"black",texture:"cloudy",description:"Poison"},acid:{name:"Acid",category:"Damage Types",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"marble",description:"Acid"},thunder:{name:"Thunder",category:"Damage Types",foreground:"#FFC500",background:"#7D7D7D",outline:"black",texture:"cloudy",description:"Thunder"},lightning:{name:"Lightning",category:"Damage Types",foreground:"#FFC500",background:["#f17105","#f3ca40","#eddea4","#df9a57","#dea54b"],outline:"#7D7D7D",texture:"ice",description:"Lightning"},air:{name:"Air",category:"Damage Types",foreground:"#ffffff",background:["#d0e5ea","#c3dee5","#a4ccd6","#8dafb7","#80a4ad"],outline:"black",texture:"cloudy",description:"Air"},water:{name:"Water",category:"Damage Types",foreground:"#60E9FF",background:["#87b8c4","#77a6b2","#6b98a3","#5b8691","#4b757f"],outline:"black",texture:"water",description:"Water"},earth:{name:"Earth",category:"Damage Types",foreground:"#6C9943",background:["#346804","#184200","#527f22","#3a1d04","#56341a","#331c17","#5a352a","#302210"],outline:"black",texture:"speckles",description:"Earth"},force:{name:"Force",category:"Damage Types",foreground:"white",background:["#FF97FF","#FF68FF","#C651C6"],outline:"#570000",texture:"stars",description:"Force"},psychic:{name:"Psychic",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409E","#934FC3","#C949FC","#313866"],outline:"black",texture:"speckles",description:"Psychic"},necrotic:{name:"Necrotic",category:"Damage Types",foreground:"#ffffff",background:"#6F0000",outline:"black",texture:"skulls",description:"Necrotic"},breebaby:{name:"Pastel Sunset",category:"Custom Sets",foreground:["#5E175E","#564A5E","#45455E","#3D5A5E","#1E595E","#5E3F3D","#5E1E29","#283C5E","#25295E"],background:["#FE89CF","#DFD4F2","#C2C2E8","#CCE7FA","#A1D9FC","#F3C3C2","#EB8993","#8EA1D2","#7477AD"],outline:"white",texture:"marble",description:"Pastel Sunset, for Breyanna"},pinkdreams:{name:"Pink Dreams",category:"Custom Sets",foreground:"white",background:["#ff007c","#df73ff","#f400a1","#df00ff","#ff33cc"],outline:"#570000",texture:"skulls",description:"Pink Dreams, for Ethan"},inspired:{name:"Inspired",category:"Custom Sets",foreground:"#FFD800",background:"#C4C4B6",outline:"#8E8E86",texture:"none",description:"Inspired, for Austin"},bloodmoon:{name:"Blood Moon",category:"Custom Sets",foreground:"#CDB800",background:"#6F0000",outline:"black",texture:"marble",description:"Blood Moon, for Jared"},starynight:{name:"Stary Night",category:"Custom Sets",foreground:"#4F708F",background:["#091636","#233660","#4F708F","#8597AD","#E2E2E2"],outline:"white",texture:"speckles",description:"Stary Night, for Mai"},glitterparty:{name:"Glitter Party",category:"Custom Sets",foreground:"white",background:["#FFB5F5","#7FC9FF","#A17FFF"],outline:"none",texture:"glitter",description:"Glitter Party, for Austin"},astralsea:{name:"Astral Sea",category:"Custom Sets",foreground:"#565656",background:"white",outline:"none",texture:"astral",description:"The Astral Sea, for Austin"},bronze:{name:"Thylean Bronze",description:"Thylean Bronze by @SpencerThayer",category:"Custom Sets",foreground:["#FF9159","#FFB066","#FFBF59","#FFD059"],background:["#705206","#7A4E06","#643100","#7A2D06"],outline:["#3D2D03","#472D04","#301700","#471A04"],edge:["#FF5D0D","#FF7B00","#FFA20D","#FFBA0D"],texture:["bronze01","bronze02","bronze03","bronze03a","bronze03b","bronze04"]},dragons:{name:"Here be Dragons",category:"Custom Sets",foreground:"#FFFFFF",background:["#B80000","#4D5A5A","#5BB8FF","#7E934E","#FFFFFF","#F6ED7C","#7797A3","#A78437","#862C1A","#FFDF8A"],outline:"black",texture:["dragon","lizard"],description:"Here be Dragons"},birdup:{name:"Bird Up",category:"Custom Sets",foreground:"#FFFFFF",background:["#F11602","#FFC000","#6EC832","#0094BC","#05608D","#FEABB3","#F75680","#F3F0DF","#C7A57F"],outline:"black",texture:"bird",description:"Bird Up!"},tigerking:{name:"Tiger King",category:"Other",foreground:"#ffffff",background:"#FFCC40",outline:"black",texture:["leopard","tiger","cheetah"],description:"Leopard Print"},covid:{name:"COViD",category:"Other",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"fire",description:"Covid-19"},acleaf:{name:"Animal Crossing",category:"Other",foreground:"#00FF00",background:"#07540A",outline:"black",texture:"acleaf",description:"Animal Crossing Leaf"},isabelle:{name:"Isabelle",category:"Other",foreground:"white",background:"#FEE5CC",outline:"black",texture:"isabelle",description:"Isabelle"},thecage:{name:"Nicholas Cage",category:"Other",foreground:"#ffffff",background:"#ffffff",outline:"black",texture:"thecage",description:"Nicholas Cage"},test:{name:"Test",category:"Colors",foreground:["#00FF00","#0000FF","#FF0000"],background:["#FF0000","#00FF00","#0000FF"],outline:"black",texture:"none",description:"Test"},rainbow:{name:"Rainblow",category:"Colors",foreground:["#FF5959","#FFA74F","#FFFF56","#59FF59","#2374FF","#00FFFF","#FF59FF"],background:["#900000","#CE3900","#BCBC00","#00B500","#00008E","#008282","#A500A5"],outline:"black",texture:"none",description:"Rainblow"},black:{name:"Black",category:"Colors",foreground:"#ffffff",background:"#000000",outline:"black",texture:"none",description:"Black"},white:{name:"White",category:"Colors",foreground:"#000000",background:"#FFFFFF",outline:"#FFFFFF",texture:"none",description:"White"},swrpg_abi:{name:"Star Wars RPG - Ability",category:"Star Wars™ RPG",foreground:"#00FF00",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"#000000",texture:"cloudy_2",description:"Star Wars™ RPG Ability Dice"},swrpg_pro:{name:"Star Wars RPG - Proficiency",category:"Star Wars™ RPG",foreground:"#FFFF00",background:["#CABB1C","#F9E33B","#FFE900","#F0E49D"],outline:"#000000",texture:"paper",description:"Star Wars™ RPG Proficiency Dice"},swrpg_dif:{name:"Star Wars RPG - Difficulty",category:"Star Wars™ RPG",foreground:"#8000FC",background:["#39165F","#664B84","#50247E","#745F88"],outline:"#000000",texture:"cloudy_2",description:"Star Wars™ RPG Difficulty Dice"},swrpg_cha:{name:"Star Wars RPG - Challenge",category:"Star Wars™ RPG",foreground:"#FF0000",background:["#A91F32","#EB4254","#E51836","#BA3645"],outline:"#000000",texture:"paper",description:"Star Wars™ RPG Challenge Dice"},swrpg_boo:{name:"Star Wars RPG - Boost",category:"Star Wars™ RPG",foreground:"#00FFFF",background:["#4B9DC6","#689FC4","#85CFF2","#8FC0D8"],outline:"#000000",texture:"glitter",description:"Star Wars™ RPG Boost Dice"},swrpg_set:{name:"Star Wars RPG - Setback",category:"Star Wars™ RPG",foreground:"#111111",background:["#252223","#241F21","#282828","#111111"],outline:"#ffffff",texture:"glitter",description:"Star Wars™ RPG Setback Dice"},swrpg_for:{name:"Star Wars RPG - Force",category:"Star Wars™ RPG",foreground:"#000000",background:["#F3F3F3","#D3D3D3","#BABABA","#FFFFFF"],outline:"#FFFFFF",texture:"stars",description:"Star Wars™ RPG Force Dice"},swa_red:{name:"Armada Attack - Red",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Red Attack Dice"},swa_blue:{name:"Armada Attack - Blue",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#212642","#28286E","#2B348C","#3D4BB5","#5D64AB"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Blue Attack Dice"},swa_black:{name:"Armada Attack - Black",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Black Attack Dice"},xwing_red:{name:"X-Wing Attack - Red",category:"Star Wars™ X-Wing",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stars",description:"Star Wars™ X-Wing Red Attack Dice"},xwing_green:{name:"X-Wing Attack - Green",category:"Star Wars™ X-Wing",foreground:"#ffffff",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"none",texture:"stars",description:"Star Wars™ X-Wing Green Attack Dice"},swl_atkred:{name:"Legion Attack - Red",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars™ Legion Red Attack Dice"},swl_atkblack:{name:"Legion Attack - Black",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"fire",description:"Star Wars™ Legion Black Attack Dice"},swl_atkwhite:{name:"Legion Attack - White",category:"Star Wars™ Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars™ Legion White Attack Dice"},swl_defred:{name:"Legion Defense - Red",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars™ Legion Red Defense Dice"},swl_defwhite:{name:"Legion Defense - White",category:"Star Wars™ Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars™ Legion White Defense Dice"}};class fg{constructor(e={}){this.colorsets=[],this.assetPath=e.assetPath}async ImageLoader(e){if(Array.isArray(e)){for(let t=0,i=e.length;t<i;t++)e[t]=await this.ImageLoader(e[t]);return e}return e.source&&e.source!=""&&(e.texture=await this.loadImage(e.source)),e.source_bump&&e.source_bump!=""&&(e.bump=await this.loadImage(e.source_bump)),e}loadImage(e){return new Promise((t,i)=>{let r=new Image;r.onload=()=>t(r),r.crossOrigin="anonymous",r.src=this.assetPath+e,r.onerror=s=>i(s)}).catch(t=>{console.error("Unable to load image texture")})}async getColorSet(e){let t,i;if(typeof e=="string"&&(t=e),typeof e=="object"&&(t=e.colorset),this.colorsets.hasOwnProperty(t))return this.colorsets[t];let r=ro[t];return i=e.texture||r.texture,r.texture=this.getTexture(i),r.texture=await this.ImageLoader(r.texture),e.material&&(r.texture.material=e.material),this.colorsets[t]=r,r}async makeColorSet(e={}){if(this.colorsets.hasOwnProperty(e.name))return this.colorsets[e.name];let t=ro.white,i=Object.assign({},t,e),r=this.getTexture(i.texture);return i.texture=await this.ImageLoader(r),e.material&&(i.texture.material=e.material),i.name.toLowerCase()==="white"&&(i.name=`${Date.now()}`),this.colorsets[i.name]=i,i}getTexture(e){if(Array.isArray(e)){let t=[];for(let i=0,r=e.length;i<r;i++)t.push(this.getTexture(e[i]));return t}return Sn.hasOwnProperty(e)?Sn[e]:Sn.none}}const gg={default:{name:"Solid Color",author:"MajorVictory",showColorPicker:!0,surface:"wood_tray",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"blue-felt":{name:"Blue Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"red-felt":{name:"Red Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#ff9494",bg:"#4d1e1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"green-felt":{name:"Green Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#97ff94",bg:"#244d1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},taverntable:{name:"Old Tavern Table",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},mahogany:{name:"(Mah-Hog-Any)",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},stainless:{name:"Stainless Steel",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cyberpunk:{name:"Neo-New-Future-City",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#3494A6",bg:"#440B28"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cagetown:{name:"Cage Town",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#D7A866",bg:"#282811"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]}},vg=o=>{let e;return function(){let t=this,i=arguments;e&&window.cancelAnimationFrame(e),e=window.requestAnimationFrame(function(){o.apply(t,i)})}},xg={assetPath:"./",framerate:1/60,sounds:!1,volume:100,color_spotlight:15720405,shadows:!0,theme_surface:"green-felt",sound_dieMaterial:"plastic",theme_customColorset:null,theme_colorset:"white",theme_texture:"",theme_material:"glass",gravity_multiplier:400,light_intensity:.7,baseScale:100,strength:1,iterationLimit:1e3,onRollComplete:()=>{},onRerollComplete:()=>{},onAddDiceComplete:()=>{},onRemoveDiceComplete:()=>{}};class _g{constructor(e,t={}){this.initialized=!1,this.container=document.querySelector(e),this.dimensions=new Ie(this.container.clientWidth,this.container.clientHeight),this.adaptive_timestep=!1,this.last_time=0,this.running=!1,this.rolling=!1,this.threadid,this.display={currentWidth:null,currentHeight:null,containerWidth:null,containerHeight:null,aspect:null,scale:null},this.cameraHeight={max:null,close:null,medium:null,far:null},this.scene=new Rp,this.world=new sg,this.dice_body_material=new Hi,this.sounds_table={},this.sounds_dice=[],this.lastSoundType="",this.lastSoundStep=0,this.lastSound=0,this.iteration,this.renderer,this.barrier,this.camera,this.light,this.light_amb,this.desk,this.box_body={},this.bodies=[],this.meshes=[],this.diceList=[],this.notationVectors=null,this.dieIndex=0,this.soundDelay=10,this.animstate="",this.selector={animate:!0,rotate:!0,intersected:null,dice:[]},Object.assign(this,xg,t),this.DiceColors=new fg({assetPath:this.assetPath}),this.DiceFactory=new jo({baseScale:this.baseScale}),this.DiceFactory.setBumpMapping(!0),this.surface=gg[this.theme_surface].surface}enableShadows(){this.shadows=!0,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}disableShadows(){this.shadows=!1,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}async initialize(){this.renderer=new Fo({antialias:!0,alpha:!0}),this.container.appendChild(this.renderer.domElement),this.renderer.shadowMap.enabled=this.shadows,this.renderer.shadowMap.type=2,this.renderer.setClearColor(0,0),this.setDimensions(this.dimensions),this.world.gravity.set(0,0,-9.8*this.gravity_multiplier),this.world.broadphase=new No,this.world.solver.iterations=14,this.world.allowSleep=!0,this.makeWorldBox(),this.resizeWorld(),await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material}).catch(e=>{throw new Error("Unable to load theme")}),this.sounds&&await this.loadSounds().catch(e=>{throw new Error("Unable to load sounds")}),this.initialized=!0,this.renderer.render(this.scene,this.camera)}makeWorldBox(){Object.keys(this.box_body).length&&(this.world.removeBody(this.box_body.desk),this.world.removeBody(this.box_body.topWall),this.world.removeBody(this.box_body.bottomWall),this.world.removeBody(this.box_body.leftWall),this.world.removeBody(this.box_body.rightWall));const e=new Hi,t=new Hi;this.world.addContactMaterial(new Wi(e,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.world.addContactMaterial(new Wi(t,this.dice_body_material,{mass:0,friction:.6,restitution:1})),this.world.addContactMaterial(new Wi(this.dice_body_material,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.box_body.desk=new se({allowSleep:!1,mass:0,shape:new Rr,material:e}),this.world.addBody(this.box_body.desk),this.box_body.topWall=new se({allowSleep:!1,mass:0,shape:new Rr,material:t}),this.box_body.topWall.quaternion.setFromAxisAngle(new b(1,0,0),Math.PI/2),this.box_body.topWall.position.set(0,this.display.containerHeight*.93,0),this.world.addBody(this.box_body.topWall),this.box_body.bottomWall=new se({allowSleep:!1,mass:0,shape:new Rr,material:t}),this.box_body.bottomWall.quaternion.setFromAxisAngle(new b(1,0,0),-Math.PI/2),this.box_body.bottomWall.position.set(0,-this.display.containerHeight*.93,0),this.world.addBody(this.box_body.bottomWall),this.box_body.leftWall=new se({allowSleep:!1,mass:0,shape:new Rr,material:t}),this.box_body.leftWall.quaternion.setFromAxisAngle(new b(0,1,0),-Math.PI/2),this.box_body.leftWall.position.set(this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.leftWall),this.box_body.rightWall=new se({allowSleep:!1,mass:0,shape:new Rr,material:t}),this.box_body.rightWall.quaternion.setFromAxisAngle(new b(0,1,0),Math.PI/2),this.box_body.rightWall.position.set(-this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.rightWall)}async loadTheme(e){let t;this.theme_customColorset?t=await this.DiceColors.makeColorSet(this.theme_customColorset):t=await this.DiceColors.getColorSet(e),this.DiceFactory.applyColorSet(t),this.colorData=t}async loadSounds(){let e={felt:7,wood_table:7,wood_tray:7,metal:9},t={coin:6,metal:12,plastic:15,wood:12};const i=this.colorData.texture.material.match(/wood|metal/g);if(this.sound_dieMaterial=i?this.colorData.texture.material:"plastic",!this.sounds_table.hasOwnProperty(this.surface)){this.sounds_table[this.surface]=[];let r=e[this.surface];for(let s=1;s<=r;++s){const a=await this.loadAudio(this.assetPath+"sounds/surfaces/surface_"+this.surface+s+".mp3");this.sounds_table[this.surface].push(a)}}if(!this.sounds_dice.hasOwnProperty("coin")){this.sounds_dice.coin=[];let r=t.coin;for(let s=1;s<=r;++s){const a=await this.loadAudio(this.assetPath+"sounds/dicehit/dicehit_coin"+s+".mp3");this.sounds_dice.coin.push(a)}}if(!this.sounds_dice.hasOwnProperty(this.sound_dieMaterial)){this.sounds_dice[this.sound_dieMaterial]=[];let r=t[this.sound_dieMaterial];for(let s=1;s<=r;++s){const a=await this.loadAudio(this.assetPath+"sounds/dicehit/dicehit_"+this.sound_dieMaterial+s+".mp3");this.sounds_dice[this.sound_dieMaterial].push(a)}}}loadAudio(e){return new Promise((t,i)=>{let r=new Audio;r.oncanplaythrough=()=>t(r),r.crossOrigin="anonymous",r.src=e,r.onerror=s=>i(s)}).catch(t=>{console.error("Unable to load audio")})}async updateConfig(e={}){Object.apply(this,e),this.theme_customColorset=e.theme_customColorset?e.theme_customColorset:null,e.theme_colorset&&(this.theme_colorset=e.theme_colorset),e.theme_texture&&(this.theme_texture=e.theme_texture),e.theme_material&&(this.theme_material=e.theme_material),(e.theme_colorset||e.theme_texture||e.theme_material||e.theme_customColorset)&&await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material})}setDimensions(e){switch(this.display.currentWidth=this.container.clientWidth/2,this.display.currentHeight=this.container.clientHeight/2,e?(this.display.containerWidth=e.x,this.display.containerHeight=e.y):(this.display.containerWidth=this.display.currentWidth,this.display.containerHeight=this.display.currentHeight),this.display.aspect=Math.min(this.display.currentWidth/this.display.containerWidth,this.display.currentHeight/this.display.containerHeight),this.display.scale=Math.sqrt(this.display.containerWidth*this.display.containerWidth+this.display.containerHeight*this.display.containerHeight)/13,this.makeWorldBox(),this.renderer.setSize(this.display.currentWidth*2,this.display.currentHeight*2),this.cameraHeight.max=this.display.currentHeight/this.display.aspect/Math.tan(10*Math.PI/180),this.cameraHeight.medium=this.cameraHeight.max/1.5,this.cameraHeight.far=this.cameraHeight.max,this.cameraHeight.close=this.cameraHeight.max/2,this.camera&&this.scene.remove(this.camera),this.camera=new Et(20,this.display.currentWidth/this.display.currentHeight,1,this.cameraHeight.max*1.3),this.animstate){case"selector":this.camera.position.z=this.selector.dice.length>9?this.cameraHeight.far:this.selector.dice.length<6?this.cameraHeight.close:this.cameraHeight.medium;break;case"throw":case"afterthrow":default:this.camera.position.z=this.cameraHeight.far}this.camera.lookAt(new U(0,0,0));const t=Math.max(this.display.containerWidth,this.display.containerHeight);this.light&&this.scene.remove(this.light),this.light_amb&&this.scene.remove(this.light_amb),this.light=new Np(this.color_spotlight,this.light_intensity),this.light.position.set(-t/2,t/2,t*3),this.light.target.position.set(0,0,0),this.light.distance=t*5,this.light.angle=Math.PI/4,this.light.castShadow=this.shadows,this.light.shadow.camera.near=t/10,this.light.shadow.camera.far=t*5,this.light.shadow.camera.fov=50,this.light.shadow.bias=.001,this.light.shadow.mapSize.width=1024,this.light.shadow.mapSize.height=1024,this.scene.add(this.light),this.light_amb=new Fp(16777147,6776689,this.light_intensity),this.scene.add(this.light_amb),this.desk&&this.scene.remove(this.desk);let i=new Dp;i.opacity=.5,this.desk=new Xt(new Ps(this.display.containerWidth*6,this.display.containerHeight*6,1,1),i),this.desk.receiveShadow=this.shadows,this.scene.add(this.desk),this.renderer.render(this.scene,this.camera)}resizeWorld(){const e=vg(()=>{const t=this.renderer.domElement,i=this.container.clientWidth,r=this.container.clientHeight,s=t.width!==i||t.height!==r;return s&&this.setDimensions(new Ie(this.container.clientWidth,this.container.clientHeight)),s});window.addEventListener("resize",e)}vectorRand({x:e,y:t}){let i=Math.random()*Math.PI/5-Math.PI/5/2,r={x:e*Math.cos(i)-t*Math.sin(i),y:e*Math.sin(i)+t*Math.cos(i)};return r.x==0&&(r.x=.01),r.y==0&&(r.y=.01),r}getNotationVectors(e,t,i,r){let s=new io(e);for(let a in s.set){const n=this.DiceFactory.get(s.set[a].type);let l=s.set[a].num,c=s.set[a].op,u=s.set[a].sid,p=s.set[a].gid,h=s.set[a].glvl,f=s.set[a].func,g=s.set[a].args;for(let m=0;m<l;m++){let d=this.vectorRand(t);d.x/=r,d.y/=r;let x={x:this.display.containerWidth*(d.x>0?-1:1)*.9,y:this.display.containerHeight*(d.y>0?-1:1)*.9,z:Math.random()*200+200},v=Math.abs(d.x/d.y);v>1?x.y/=v:x.x*=v;let w=this.vectorRand(t);w.x/=r,w.y/=r;let _,M,E;n.shape!="d2"?(_={x:w.x*i,y:w.y*i,z:-10},M={x:-(Math.random()*d.y*5+n.inertia*d.y),y:Math.random()*d.x*5+n.inertia*d.x,z:0},E={x:Math.random(),y:Math.random(),z:Math.random(),a:Math.random()}):(_={x:w.x*i/10,y:w.y*i/10,z:3e3},M={x:12*n.inertia,y:1*n.inertia,z:0},E={x:1,y:1,z:Math.random(),a:Math.random()}),s.vectors.push({index:this.dieIndex++,type:n.type,op:c,sid:u,gid:p,glvl:h,func:f,args:g,pos:x,velocity:_,angle:M,axis:E})}}return s}swapDiceFace(e,t){const i=this.DiceFactory.get(e.notation.type);if(e.resultReason="forced",i.shape=="d4"){this.swapDiceFace_D4(e,t);return}i.values;let r=parseInt(e.getLastValue().value);t=parseInt(t),e.notation.type=="d10"&&r==0&&(r=10),e.notation.type=="d100"&&r==0&&(r=100),e.notation.type=="d100"&&r>0&&r<10&&(r*=10),e.notation.type=="d10"&&t==0&&(t=10),e.notation.type=="d100"&&t==0&&(t=100),e.notation.type=="d100"&&t>0&&t<10&&(t*=10);let s=i.values.indexOf(r),a=i.values.indexOf(t);if(s<0||a<0||s==a)return;let n=e.geometry.clone(),l=[],c=[],u=2;i.shape=="d10"&&(u=1);let p,h=a+u;i.shape!="d2"?(p=s+u,h=a+u):(p=s+1,h=a+1);for(var f=0,g=n.groups.length;f<g;++f){const m=n.groups[f].materialIndex;if(m==p){l.push(f);continue}if(m==h){c.push(f);continue}}if(!(l.length<=0||c.length<=0)){for(let m=0,d=c.length;m<d;m++)n.groups[c[m]].materialIndex=p;for(let m=0,d=l.length;m<d;m++)n.groups[l[m]].materialIndex=h;e.geometry=n,e.result=[]}}swapDiceFace_D4(e,t){const i=this.DiceFactory.get(e.notation.type);let r=parseInt(e.getLastValue().value);if(t=parseInt(t),!(r>=1&&r<=4))return;let s=t-r,a=e.geometry.clone();for(let n=0,l=a.groups.length;n<l;++n){const c=a.groups[n];let u=c.materialIndex;if(u!=0){for(u+=s-1;u>4;)u-=4;for(;u<1;)u+=4;c.materialIndex=u+1}}s!=0&&(s<0&&(s+=4),e.material=this.DiceFactory.createMaterials(i,0,0,!1,s)),e.geometry=a}spawnDice(e,t=!1){const{pos:i,axis:r,angle:s,velocity:a}=e;let n;if(t)n=t,n.stopped=0,this.world.removeBody(n.body);else{if(n=this.DiceFactory.create(e.type,this.colorData),!n)return;n.notation=e,n.result=[],n.stopped=0,n.castShadow=this.shadows,this.scene.add(n),this.diceList.push(n)}n.body=new se({allowSleep:!0,sleepSpeedLimit:75,sleepTimeLimit:.9,mass:n.mass,shape:n.geometry.cannon_shape,material:this.dice_body_material}),n.body.type=se.DYNAMIC,n.body.position.set(i.x,i.y,i.z),n.body.quaternion.setFromAxisAngle(new b(r.x,r.y,r.z),r.a*Math.PI*2),n.body.angularVelocity.set(s.x,s.y,s.z),n.body.velocity.set(a.x,a.y,a.z),n.body.linearDamping=.1,n.body.angularDamping=.1,n.body.diceShape=n.shape,n.body.sleepState=0,n.body.addEventListener("collide",this.eventCollide.bind(this)),this.world.addBody(n.body)}eventCollide({body:e,target:t}){if(this.animstate=="simulate"||!this.sounds||!e||this.volume<=0)return;let i=Date.now(),r=e.mass>0?"dice":"table";if(!((this.lastSoundStep==e.world.stepnumber||this.lastSound>i)&&r!="dice")&&!((this.lastSoundStep==e.world.stepnumber||this.lastSound>i)&&r=="dice"&&this.lastSoundType=="dice")){if(e.mass>0){let s=e.velocity.length();if(s<250)return;let a;e.diceShape==="d2"?a=this.sounds_dice.coin[Math.floor(Math.random()*this.sounds_dice.coin.length)]:a=this.sounds_dice[this.sound_dieMaterial][Math.floor(Math.random()*this.sounds_dice[this.sound_dieMaterial].length)],a&&(a.volume=Math.min(s/8e3,this.volume/100),a.play().catch(n=>{})),this.lastSoundType="dice"}else{let s=t.velocity.length();if(s<250)return;let a=this.surface,n=this.sounds_table[a],l=n[Math.floor(Math.random()*n.length)];l&&(l.volume=Math.min(s/8e3,this.volume/100),l.play().catch(c=>{})),this.lastSoundType="table"}this.lastSoundStep=e.world.stepnumber,this.lastSound=i+this.soundDelay}}checkForRethrow(e){return e.notation.func&&e.notation.func.toLowerCase(),!1}throwFinished(){const e=this.iteration>this.iterationLimit;for(let t=0,i=this.diceList.length;t<i;++t){const r=this.diceList[t],s=se.SLEEPING;if(r.body.sleepState<s&&!e)return!1;if(r.body.sleepState==s||e){if(r.body.type===se.KINEMATIC)continue;let a=!1;if(r.result.length==0?(r.storeRolledValue(r.resultReason),a=this.checkForRethrow(r)):r.result.length>0&&r.rerolling&&(r.rerolling=!1,r.storeRolledValue("reroll"),a=this.checkForRethrow(r)),a)return r.rerolls+=1,r.rerolling=!0,r.body.wakeUp(),r.body.type=se.DYNAMIC,r.body.angularVelocity=new b(25,25,25),r.body.velocity=new b(0,0,3e3),!1;r.rerolling=!1,r.body.type=se.KINEMATIC}}return!0}simulateThrow(){for(this.animstate="simulate",this.iteration=0,this.rolling=!0;!this.throwFinished(!0);)++this.iteration,this.world.step(this.framerate)}animateThrow(e,t){this.animstate="throw";let i=Date.now();this.last_time=this.last_time||i-this.framerate*1e3;let r=(i-this.last_time)/1e3;++this.iteration;let s=Math.floor(r/this.framerate);for(let a=0;a<s;a++)this.world.step(this.framerate),++this.steps;for(let a in this.scene.children){let n=this.scene.children[a];n.body!=null&&(n.position.copy(n.body.position),n.quaternion.copy(n.body.quaternion))}if(this.renderer.render(this.scene,this.camera),this.last_time=this.last_time+s*this.framerate*1e3,this.running==e&&this.throwFinished()){this.running=!1,this.rolling=!1,t&&t.call(this,this.notationVectors),this.running=Date.now(),this.animateAfterThrow(this.running);return}this.running==e&&((a,n,l,c,u)=>{!l&&r<this.framerate?setTimeout(()=>{requestAnimationFrame(()=>{a.call(this,n,c,u)})},(this.framerate-r)*1e3):requestAnimationFrame(()=>{a.call(this,n,c,u)})}).bind(this)(this.animateThrow,e,this.adaptive_timestep,t)}animateAfterThrow(e){this.animstate="afterthrow";let t=Date.now(),i=(t-this.last_time)/1e3;i>3&&(i=this.framerate),this.running=!1,this.last_time=t,this.renderer.render(this.scene,this.camera),this.running==e&&((r,s,a)=>{!a&&i<this.framerate?setTimeout(()=>{requestAnimationFrame(()=>{r.call(this,s)})},(this.framerate-i)*1e3):requestAnimationFrame(()=>{r.call(this,s)})}).bind(this)(this.animateAfterThrow,e,this.adaptive_timestep)}startClickThrow(e){this.rolling&&(this.clearDice(),this.rolling=!1);let t={x:(Math.random()*2-.5)*this.display.currentWidth,y:-(Math.random()*2-.5)*this.display.currentHeight},i=Math.sqrt(t.x*t.x+t.y*t.y)+100,r=(Math.random()+3)*i*this.strength;return this.getNotationVectors(e,t,r,i)}clearDice(){this.running=!1;let e;for(;e=this.diceList.pop();)this.scene.remove(e),e.body&&this.world.removeBody(e.body);this.renderer.render(this.scene,this.camera),setTimeout(()=>{this.renderer.render(this.scene,this.camera)},100)}getDiceResults(e){if(e!==void 0)return{type:this.diceList[e].shape,sides:parseInt(this.diceList[e].shape.substring(1)),id:e,...this.diceList[e].result.at(-1)};let t=0;const i=this.notationVectors.constant?parseInt(`${this.notationVectors.op}${this.notationVectors.constant}`):0;let r=i;return{notation:this.notationVectors.notation,sets:this.notationVectors.set.map(s=>{const a=t+s.num-1;let n=0;const l=[];for(let u=t;u<=a;u++){if(this.diceList[t].result.at(-1).reason==="remove"){t++;continue}l.push({type:s.type,sides:parseInt(s.type.substring(1)),id:t,...this.diceList[t].result.at(-1)}),n+=this.diceList[t].result.at(-1).value,t++}const c={num:s.num,type:s.type,sides:parseInt(s.type.substring(1)),rolls:l,total:n};return r+=n,c}),modifier:i,total:r}}async roll(e){if(this.notationVectors=this.startClickThrow(e),this.notationVectors)return new Promise((t,i)=>{this.rollDice(()=>{const r=this.getDiceResults();this.onRollComplete(r);const s=new CustomEvent("rollComplete",{detail:r});document.dispatchEvent(s),t(r)})})}async reroll(e){return this.rolling=!0,this.running=Date.now(),this.iteration=0,new Promise((t,i)=>{e.forEach(r=>{const s=this.diceList[r];s.rerolls+=1,s.rerolling=!0,s.body.wakeUp(),s.body.type=se.DYNAMIC,s.body.angularVelocity=new b(25,25,25),s.body.velocity=new b(0,0,3e3)}),this.animateThrow(this.running,()=>{const r=e.map(a=>this.getDiceResults(a));this.onRerollComplete(r);const s=new CustomEvent("rerollComplete",{detail:r});document.dispatchEvent(s),t(r)})})}async add(e){let t=this.diceList.length;if(!t)return this.roll(e);let i=this.startClickThrow(e),r=[];for(let s=0,a=i.vectors.length;s<a;++s)this.spawnDice(i.vectors[s]);this.simulateThrow(),this.steps=0,this.iteration=0;for(let s=0,a=i.vectors.length;s<a;++s){const n=t+s;!this.diceList[n]||(this.spawnDice(i.vectors[s],this.diceList[n]),r.push(n))}if(i.result&&i.result.length>0)for(let s=0;s<i.result.length;s++){const a=t+s;let n=this.diceList[a];!n||n.getLastValue().value!=i.result[s]&&this.swapDiceFace(n,i.result[s])}return this.notationVectors=io.mergeNotation(this.notationVectors,i),new Promise((s,a)=>{const n=()=>{const l=r.map(u=>this.getDiceResults(u));this.onAddDiceComplete(l);const c=new CustomEvent("addDiceComplete",{detail:l});document.dispatchEvent(c),s(l)};this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,n)})}async remove(e){return new Promise((t,i)=>{const r=[];e.forEach(a=>{const n=this.diceList[a];n.body&&this.world.removeBody(n.body),this.scene.remove(n),n.storeRolledValue("remove"),r.push(this.getDiceResults(a))}),this.renderer.render(this.scene,this.camera),this.onRemoveDiceComplete(r);const s=new CustomEvent("removeDiceComplete",{detail:r});document.dispatchEvent(s),t(r)})}rollDice(e){if(this.notationVectors.error){e.call(this);return}this.clearDice();for(let t=0,i=this.notationVectors.vectors.length;t<i;++t)this.spawnDice(this.notationVectors.vectors[t]);this.simulateThrow(),this.steps=0,this.iteration=0;for(let t=0,i=this.diceList.length;t<i;++t)!this.diceList[t]||this.spawnDice(this.notationVectors.vectors[t],this.diceList[t]);if(this.notationVectors.result&&this.notationVectors.result.length>0)for(let t=0;t<this.notationVectors.result.length;t++){let i=this.diceList[t];!i||i.getLastValue().value!=this.notationVectors.result[t]&&this.swapDiceFace(i,this.notationVectors.result[t])}this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,e)}}function so({playerEvent:o,modalState:e,handleModalClose:t=()=>{},revealedCard:i}){function r(a,n){if(typeof WebGLRenderingContext>"u")return!1;const l=document.querySelector("#scene-container");if(!l||l.clientWidth===0||l.clientHeight===0)return!1;try{const c=new _g("#scene-container",{onRollComplete:n});return c.initialize().then(()=>{const u=a.actionType===Ce.playerMove?a.moveRoll:a.damageRoll;return c.roll(u?`1d6@${u[0]},1d4@${u[1]}`:"1d6,1d4")}).then(u=>{console.log(u),n()}).catch(n),!0}catch{return!1}}_e.useEffect(()=>{if(i)return;let a=!1,n;const l=()=>{a||(a=!0,t())},c=window.setTimeout(()=>{const u=o.actionType===Ce.playerMove||o.actionType===Ce.playerAttack;u&&r(o,l)||(n=window.setTimeout(l,u?0:900))},0);return()=>{window.clearTimeout(c),n!==void 0&&window.clearTimeout(n)}},[o,t,i]);const s=()=>{if(i)return I.jsxs(mt.Fragment,{children:[I.jsx(Ve,{component:"img",sx:{height:360,maxWidth:"100%",objectFit:"contain",marginTop:2},alt:i.name,src:`/shadow_hunters//assets/game/${i.drawDeck}/${i.name}.jpg`}),I.jsx(Ge,{variant:"contained",fullWidth:!0,sx:{marginTop:2},onClick:t,children:"Ok"})]});switch(o.actionType){case Ce.playerAttack:case Ce.playerMove:return I.jsx(Ve,{id:"scene-container",sx:{width:460,height:240}});default:return I.jsx(Tn,{sx:{width:"100%",height:"5px",marginTop:2,marginX:" -16px"},"aria-label":"Loading…"})}};if(e.openModal)return I.jsx(Hr,{open:e.openModal,children:I.jsxs(Ve,{role:"status",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:500,p:2,sx:{overflow:"hidden"},children:[e.modalMessage?I.jsx(Ve,{sx:{width:532,paddingTop:"8px",paddingLeft:"16px",marginX:"-16px",marginTop:"-16px",backgroundColor:ct.palette.background.default},children:I.jsx(Gt,{variant:"h5",sx:{width:"100%"},children:e.modalMessage})}):void 0,s()]})})}const yg=xr(I.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}));function bg(o){return Ur("MuiDialogTitle",o)}const wg=Wr("MuiDialogTitle",["root"]),Mg=o=>{const{classes:e}=o;return vr({root:["root"]},bg,e)},Sg=mi(Gt,{name:"MuiDialogTitle",slot:"Root"})({padding:"16px 24px",flex:"0 0 auto"}),qo=_e.forwardRef(function(e,t){const i=gr({props:e,name:"MuiDialogTitle"}),{className:r,id:s,...a}=i,n=i,l=Mg(n),{titleId:c=s}=_e.useContext(go);return I.jsx(Sg,{component:"h2",className:pi(l.root,r),ownerState:n,ref:t,variant:"h6",id:s??c,...a})});function Eg(o){return Ur("MuiDialogContent",o)}Wr("MuiDialogContent",["root","dividers"]);const Tg=o=>{const{classes:e,dividers:t}=o;return vr({root:["root",t&&"dividers"]},Eg,e)},Ag=mi("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(Gr(({theme:o})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:e})=>e.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:e})=>!e.dividers,style:{[`.${wg.root} + &`]:{paddingTop:0}}}]}))),Yo=_e.forwardRef(function(e,t){const i=gr({props:e,name:"MuiDialogContent"}),{className:r,dividers:s=!1,...a}=i,n={...i,dividers:s},l=Tg(n);return I.jsx(Ag,{className:pi(l.root,r),ownerState:n,ref:t,...a})});function Cg({handleChoice:o=s=>s,handleAttack:e=s=>s,handleMove:t=()=>{},handleEndTurn:i=()=>{},canAttack:r=!1}){var M,E,L,y;const s=Ti(S=>S.connection),a=Ti(S=>S.peer),n=s.gameState.lobby.playerList.filter(S=>S.user.id===a.id)[0],[l,c]=_e.useState(!1),[u,p]=_e.useState(!1),h=In(),f=co(),g=s.gameState.pendingLoot,m=()=>{o({choice:{type:De.reveal,card:{...n.piece.character,drawDeck:Bi.characters},target:a.id},playerId:a.id,actionType:Ce.playerChoice})},d=()=>{var P;if(["chainOfForbiddenCurse","lightning","dynamiteNurse","demolish","murderRay","graveDigger"].includes(((P=n.piece.character.ability)==null?void 0:P.name)??"")){p(!0);return}h(Fi({playerId:a.id,actionType:Ce.playerAbility}))},x=S=>{const P=n.piece.character.ability,F=P.name==="lightning"?Cs(1,6):P.name==="demolish"?Cs(1,4):void 0;p(!1),h(Fi({playerId:a.id,actionType:Ce.playerAbility,targetId:S,roll:F}))},v=s.gameState.lobby.playerList.filter(S=>{var P;if(S.piece.dead)return!1;if(((P=n.piece.character.ability)==null?void 0:P.name)==="murderRay"){const F=s.gameState.lobby.decks[Bi.areas].cards.findIndex(G=>G.name==="Underworld Gate");return S.piece.position===F}return S.user.id!==a.id}),w=Object.values(s.gameState.lobby.discard).flatMap(S=>S.cards),_=()=>{h(Ss(el.gameState)),f("/")};return I.jsxs(Pn,{sx:{bottom:16,left:-16,position:"absolute",zIndex:1200,paddingTop:5,paddingLeft:5},display:"flex",spacing:"2px",justifyContent:"center",alignItems:"center",children:[I.jsxs(Ge,{sx:{height:"36.5px",marginRight:2},variant:"contained",onClick:()=>c(!l),children:[I.jsx(yg,{sx:{marginRight:2},fontSize:"small"}),"Actions"]}),l?I.jsxs(Ve,{children:[(g==null?void 0:g.killerId)===a.id?I.jsxs(_e.Fragment,{children:[I.jsx(Ge,{sx:{marginRight:2},variant:"contained",onClick:()=>{c(!1),p(!0)},children:"Take equipment"}),I.jsx(Ge,{sx:{marginRight:2},variant:"contained",onClick:()=>{c(!1),h(Fi({playerId:a.id,actionType:Ce.playerAbility,itemName:""}))},children:"Discard equipment"})]}):s.gameState.currentPlayer===a.id&&!s.gameState.pendingCounterattack?I.jsxs(_e.Fragment,{children:[n.piece.moved?void 0:I.jsx(Ge,{sx:{marginRight:2},variant:"contained",onClick:()=>{c(!1),t()},children:"Move"}),n.piece.attacked||!r?void 0:n.piece.moved?I.jsx(Ge,{sx:{marginRight:2},variant:"contained",onClick:()=>{c(!1),e()},children:"Attack"}):void 0,n.piece.moved&&!n.piece.attacked?I.jsx(Ge,{sx:{marginRight:2},variant:"contained",color:"info",onClick:()=>{c(!1),i()},children:"End Turn"}):void 0,n.piece.revealed?void 0:I.jsx(Ge,{sx:{marginRight:2},variant:"contained",onClick:()=>{c(!1),m()},children:"Reveal Character"}),n.piece.abilityUsed||((M=n.piece.character.ability)==null?void 0:M.target)===uo.attacker||!n.piece.character.ability||n.piece.character.ability.passive?void 0:I.jsx(Ge,{sx:{marginRight:2},variant:"contained",onClick:()=>{c(!1),d()},children:"Use Ability"})]}):void 0,I.jsx(Ge,{variant:"contained",onClick:()=>_(),children:"Quit"})]}):void 0,I.jsxs(Hr,{open:u,onClose:()=>p(!1),children:[I.jsxs(qo,{children:["Choose ",((E=n==null?void 0:n.piece.character.ability)==null?void 0:E.name)==="graveDigger"?"equipment":"a target"," for ",(L=n==null?void 0:n.piece.character.ability)==null?void 0:L.name]}),I.jsx(Yo,{children:I.jsx(hi,{children:(g==null?void 0:g.killerId)===a.id?g==null?void 0:g.items.map(S=>I.jsx(Gs,{onClick:()=>{p(!1),h(Fi({playerId:a.id,actionType:Ce.playerAbility,itemName:S.name}))},children:I.jsx(Ot,{primary:S.name})},`${S.drawDeck}-${S.name}`)):((y=n==null?void 0:n.piece.character.ability)==null?void 0:y.name)==="graveDigger"?w.filter(S=>S.isItem).map(S=>I.jsx(Gs,{onClick:()=>{p(!1),h(Fi({playerId:a.id,actionType:Ce.playerAbility,itemName:S.name}))},children:I.jsx(Ot,{primary:S.name})},`${S.drawDeck}-${S.name}`)):v.map(S=>I.jsx(Gs,{onClick:()=>x(S.user.id),children:I.jsx(Ot,{primary:S.user.userName})},S.user.id))})})]})]})}function Lg(o){return Ur("MuiMenuItem",o)}const Fr=Wr("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Rg=(o,e)=>{const{ownerState:t}=o;return[e.root,t.dense&&e.dense,t.divider&&e.divider,!t.disableGutters&&e.gutters]},Dg=o=>{const{disabled:e,dense:t,divider:i,disableGutters:r,selected:s,classes:a}=o,l=vr({root:["root",t&&"dense",e&&"disabled",!r&&"gutters",i&&"divider",s&&"selected"]},Lg,a);return{...a,...l}},Pg=mi(po,{shouldForwardProp:o=>lo(o)||o==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Rg})(Gr(({theme:o})=>({...o.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Fr.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:Ei(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${Fr.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:Ei(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},[`&.${Fr.selected}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:Ei(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:Ei(o.palette.primary.main,o.palette.action.selectedOpacity)}},[`&.${Fr.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${Fr.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`& + .${$n.root}`]:{marginTop:o.spacing(1),marginBottom:o.spacing(1)},[`& + .${$n.inset}`]:{marginLeft:52},[`& .${Zn.root}`]:{marginTop:0,marginBottom:0},[`& .${Zn.inset}`]:{paddingLeft:36},[`& .${Jn.root}`]:{minWidth:36},variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>!e.dense,style:{[o.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:e})=>e.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...o.typography.body2,[`& .${Jn.root} svg`]:{fontSize:"1.25rem"}}}]}))),ci=_e.forwardRef(function(e,t){const i=gr({props:e,name:"MuiMenuItem"}),{autoFocus:r=!1,component:s="li",dense:a=!1,divider:n=!1,disableGutters:l=!1,focusVisibleClassName:c,role:u="menuitem",tabIndex:p,className:h,...f}=i,g=_e.useContext(Or),m=_e.useMemo(()=>({dense:a||g.dense||!1,disableGutters:l}),[g.dense,a,l]),d=_e.useRef(null);oo(()=>{r&&d.current&&d.current.focus()},[r]);const x={...i,dense:m.dense,divider:n,disableGutters:l},v=Dg(i),w=ho(d,t);let _;return i.disabled||(_=p!==void 0?p:-1),I.jsx(Or.Provider,{value:m,children:I.jsx(Pg,{ref:w,role:u,tabIndex:_,component:s,focusVisibleClassName:pi(v.focusVisible,c),className:pi(v.root,h),...f,ownerState:x,classes:v})})}),En=xr(I.jsx("path",{d:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z"})),Ig=xr(I.jsx("path",{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z"}));function Fg({handleAttack:o=t=>t,handleMove:e=()=>{}}){const t=Ti(h=>h.connection),i=In(),[r,s]=_e.useState(void 0),a=!!r,n=h=>{s(h.currentTarget)},l=()=>{s(void 0)},c=()=>{const h=t.gameState.lobby.playerList.map(f=>({...f,piece:{...f.piece,position:Cs(0,5)}}));i(Ss({...t.gameState,lobby:{...t.gameState.lobby,playerList:h}}))},u=()=>{const h=t.gameState.lobby.playerList.map(f=>({...f,piece:{...f.piece,damage:Cs(0,6)}}));i(Ss({...t.gameState,lobby:{...t.gameState.lobby,playerList:h}}))},p=h=>{const f=t.gameState.lobby.playerList,g=f.findIndex(d=>d.user.id===h);if(g<0)return;const m=f.length>1?f[(g+1)%f.length].user.id:h;i(Ss({...t.gameState,currentPlayer:h,nextPlayer:m})),l()};return I.jsxs(_e.Fragment,{children:[I.jsxs(ll,{id:"basic-menu",anchorEl:r,open:a,onClose:l,slotProps:{list:{sx:{paddingTop:"0!important",paddingBottom:"0!important"}}},children:[I.jsxs(ft,{children:[I.jsx(zr,{children:I.jsx(fo,{})}),I.jsx(Ot,{children:"Players"})]}),I.jsx(ut,{}),t.gameState.lobby.playerList.map(h=>I.jsxs(ci,{selected:h.user.id===t.gameState.currentPlayer,onClick:()=>p(h.user.id),children:[h.user.userName,h.user.id===t.gameState.currentPlayer?" (active)":""]},h.user.id)),I.jsxs(ft,{children:[I.jsx(zr,{children:I.jsx(En,{})}),I.jsx(Ot,{children:"Shuffle"})]}),I.jsx(ut,{}),I.jsx(ci,{"aria-label":"shuffle hermit",onClick:()=>{i(Zr(Bi.green)),l()},children:"Hermit"}),I.jsx(ci,{"aria-label":"shuffle white",onClick:()=>{i(Zr(Bi.white)),l()},children:"White"}),I.jsx(ci,{"aria-label":"shuffle black",onClick:()=>{i(Zr(Bi.black)),l()},children:"Black"}),I.jsx(ci,{"aria-label":"shuffle all",onClick:()=>{i(Zr()),l()},children:"All"}),I.jsxs(ft,{children:[I.jsx(zr,{children:I.jsx(En,{})}),I.jsx(Ot,{children:"Randomize"})]}),I.jsx(ut,{}),I.jsx(ci,{"aria-label":"shuffle positions",onClick:()=>{c(),l()},children:"Positions"}),I.jsx(ci,{"aria-label":"shuffle damage",onClick:()=>{u(),l()},children:"Damage"}),I.jsxs(ft,{children:[I.jsx(zr,{children:I.jsx(En,{})}),I.jsx(Ot,{children:"Game State"})]}),I.jsx(ut,{}),I.jsx(ci,{"aria-label":"shuffle positions",onClick:()=>{o(),l()},children:"Attack"}),I.jsx(ci,{"aria-label":"shuffle positions",onClick:()=>{e(),l()},children:"Move"})]}),I.jsx(Ve,{sx:{top:15,right:15,position:"absolute",zIndex:1201},children:I.jsxs(Ge,{variant:"contained","aria-controls":a?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,onClick:h=>a?l():n(h),children:[I.jsx(Ig,{sx:{marginRight:2},fontSize:"small"}),"Dev Menu"]})})]})}const no=750,As=o=>!!(o!=null&&o.user.isBot),pr=(o,e)=>o.lobby.playerList.find(t=>t.user.id===e),Ds=(o,e)=>o.piece.character.category!==An.neutral&&e.piece.character.category===o.piece.character.category;function zg(o,e){const t=e.piece.position%2===0?[e.piece.position,e.piece.position+1]:[e.piece.position,e.piece.position-1];return o.lobby.playerList.filter(i=>!i.piece.dead&&i.user.id!==e.user.id&&t.includes(i.piece.position))}function Wn(o,e,t=o.lobby.playerList){return t.filter(i=>!i.piece.dead&&i.user.id!==e.user.id).sort((i,r)=>{const s=Ds(e,i)?-100:i.piece.character.category===An.neutral?1:2;return(Ds(e,r)?-100:r.piece.character.category===An.neutral?1:2)-s||r.piece.damage-i.piece.damage})[0]}function ao(o,e){return o.lobby.playerList.filter(t=>!t.piece.dead&&t.user.id!==e.user.id&&Ds(e,t)&&t.piece.damage>0).sort((t,i)=>i.piece.damage-t.piece.damage)[0]}function kg(o){return{playerId:o.user.id,actionType:Ce.playerMove,moveRoll:Ni([6,4])}}function Ng(o,e){const t=e.piece.character.ability;if(!(!t||t.automatic||e.piece.abilityUsed||e.piece.abilityBlocked||e.piece.moved)){if(["mothersLove","stigmata"].includes(t.name)&&e.piece.damage>0)return{playerId:e.user.id,actionType:Ce.playerAbility};if(t.name==="graveDigger"){const i=Object.values(o.lobby.discard).flatMap(r=>r.cards).find(r=>r.isItem);return i?{playerId:e.user.id,actionType:Ce.playerAbility,itemName:i.name}:void 0}if(t.target===uo.player){const i=o.lobby.decks.areas.cards.findIndex(s=>s.name==="Underworld Gate"),r=t.name==="murderRay"?o.lobby.playerList.find(s=>!s.piece.dead&&s.piece.position===i&&s.user.id!==e.user.id):Wn(o,e);if(r)return{playerId:e.user.id,actionType:Ce.playerAbility,targetId:r.user.id,roll:t.name==="lightning"?6:t.name==="demolish"?4:void 0}}}}function Og(o){var i;if(o.gameEnded)return;if(o.pendingLoot){const r=pr(o,o.pendingLoot.killerId);return As(r)?{kind:"ability",event:{playerId:r.user.id,actionType:Ce.playerAbility,itemName:(i=o.pendingLoot.items[0])==null?void 0:i.name}}:void 0}if(o.pendingCounterattack){const r=pr(o,o.pendingCounterattack.responderId),s=pr(o,o.pendingCounterattack.attackerId);return As(r)&&s?{kind:"attack",event:{playerId:r.user.id,actionType:Ce.playerAttack,targets:[s.user],damageRoll:[6,1],modifiers:0}}:void 0}const e=pr(o,o.currentPlayer);if(!As(e)||e.piece.dead)return;const t=Ng(o,e);if(t)return{kind:"ability",event:t};if(!e.piece.moved)return{kind:"move",event:kg(e)};if(!e.piece.attacked){const r=Wn(o,e,zg(o,e));return r?{kind:"attack",event:{playerId:e.user.id,actionType:Ce.playerAttack,targets:[r.user],damageRoll:[6,1],modifiers:0}}:{kind:"endTurn",event:{playerId:e.user.id,actionType:Ce.playerEndTurn}}}}function Bg(o,e){var i,r;const t=pr(o,e.choice.type===De.weirdWoods?e.playerId:e.choice.target);if(As(t))switch(e.choice.type){case De.equipment:{const s=o.lobby.playerList.find(n=>n.user.id!==t.user.id&&n.piece.items.length>0),a=s==null?void 0:s.piece.items[0];return s&&a?`${s.user.id},${a.name}`:"skip"}case De.move:return JSON.stringify(Ni([6,4]).reduce((s,a,n,l)=>n===1&&l[0]+a===7?[6,4]:[...s,a],[]));case De.area:return(i=o.lobby.decks.areas.cards[0])==null?void 0:i.name;case De.reveal:return"yes";case De.draw:return ao(o,t)||t.piece.damage>0?"green":"black";case De.target:return((r=/Aid|Huddle|Nurturance/i.test(e.choice.card.name)?ao(o,t):Wn(o,t))==null?void 0:r.user.id)??"skip";case De.weirdWoods:{const s=pr(o,e.choice.target);return s&&Ds(t,s)&&s.piece.damage>0?"heal":"damage"}case De.showCard:return t.user.id;default:return}}const Gg=_e.lazy(()=>rl(()=>import("./GameRender-53UX4eXr.js"),__vite__mapDeps([0,1,2,3])));function Vg(){var k;co();const o=Ti(C=>C.peer),e=Ti(C=>C.connection),t=In(),[i,r]=_e.useState({openModal:!1,modalMessage:""}),[s,a]=_e.useState({openModal:!1,modalMessage:""}),[n,l]=_e.useState([]),[c,u]=_e.useState(),[p,h]=_e.useState(),f=_e.useRef(!1),g=_e.useRef(void 0),m=e.gameState.pendingCounterattack;_e.useEffect(()=>{sl.setCallback(y)}),_e.useEffect(()=>{if(e.gameState.hostId!==e.peerId||f.current||e.playerEvents.length>0||c||n.length>0||i.openModal)return;const C=Og(e.gameState);if(!C)return;const N=window.setTimeout(()=>{C.kind==="move"?t(jn(C.event)):C.kind==="attack"?t(Jr(C.event)):C.kind==="endTurn"?t(qn(C.event)):t(Fi(C.event))},e.gameState.botThinkTimeMs??no);return()=>window.clearTimeout(N)},[e.gameState,e.playerEvents.length,t,o.id,c,n.length,i.openModal]);const d=()=>{r({openModal:!1,modalMessage:""})},x=_e.useCallback(()=>{a({openModal:!1,modalMessage:""}),t(tl())},[t]),v=()=>{if(!p)return;const C={...p,result:"dismissed"};h(void 0),t(Os(C))},w=C=>{switch(C.choice.type){case De.equipment:return C.playerId===C.choice.target?"Choose Equipment to Give.":"Choose Equipment to Steal.";case De.move:return"Choose Your Movement Roll.";case De.area:return"Choose Your Destination.";case De.reveal:return"Reveal Your Character?";case De.showCard:return"Show Your Character Card.";case De.target:return"Choose Your Target.";case De.draw:return"Choose Deck to Draw From.";case De.weirdWoods:return"Choose an effect for the targeted player.";case De.counterattack:return"You were attacked.";default:return"default choice text"}},_=C=>{var j;const N=((j=e.gameState.lobby.playerList.find(O=>O.user.id===C.playerId))==null?void 0:j.user.userName)??"A player";if(C.revealedCard)return`${N} revealed their character.`;switch(C.actionType){case Ce.playerAttack:return`${N} is making an attack.`;case Ce.playerChoice:return`${N} is making a choice.`;case Ce.playerDeath:return`${N} died.`;case Ce.playerMove:return`${N} is moving.`;case Ce.playerDraw:return`${N} drew a card.`;case Ce.playerAbility:return`${N} is using an ability.`;case Ce.playerEndTurn:return`${N} ended their turn.`;default:return}},M=C=>{var W;return(((W=C.piece.items.map(Q=>Bs(e.gameState,Q)).find(Q=>Q.targets))==null?void 0:W.targets)??L(C).map(Q=>Q.user)).filter(Q=>{var H;return Q.id!==C.user.id&&!((H=e.gameState.lobby.playerList.find(ee=>ee.user.id===Q.id))!=null&&H.piece.dead)})},E=C=>{var j;const N=e.gameState.lobby.playerList.filter(O=>O.user.id===e.gameState.currentPlayer)[0];if(C)if(r({openModal:!1,modalMessage:""}),((j=e.gameState.pendingCounterattack)==null?void 0:j.responderId)===N.user.id&&u(void 0),N.piece.items.length>0){const O=N.piece.items.map(W=>Bs(e.gameState,W));O.filter(W=>W.damage).length>0?t(Jr({targets:C,damageRoll:Yn(N)?[0]:Ni([6,4]),modifiers:O.map(W=>W.modifier).reduce((W,Q)=>W+Q,0),playerId:N.user.id,actionType:Ce.playerAttack})):t(Jr({targets:C,damageRoll:Ni([6,4]),modifiers:0,playerId:N.user.id,actionType:Ce.playerAttack}))}else t(Jr({targets:C,damageRoll:Ni([6,4]),modifiers:0,playerId:N.user.id,actionType:Ce.playerAttack}));else{if(N.piece.items.length>0){const W=N.piece.items.map(Q=>Bs(e.gameState,Q));if(W.filter(Q=>Q.choice).length>0){const Q=W.filter(H=>H.choice)[0];y({choice:Q.choice,playerId:N.user.id,actionType:Ce.playerChoice});return}}const O=M(N);if(N.piece.items.filter(W=>W.name.includes("Machine")).length>0){O.length>0&&E(O);return}if(O.length===0)return;r({modalMessage:"Choose Your Target.",targets:O,hasSword:Yn(N),openModal:!0})}},L=C=>C.piece.position%2===0?e.gameState.lobby.playerList.filter(N=>!N.piece.dead&&N.piece.position!==-1&&(N.piece.position===C.piece.position||N.piece.position===C.piece.position+1)):e.gameState.lobby.playerList.filter(N=>!N.piece.dead&&N.piece.position!==-1&&(N.piece.position===C.piece.position||N.piece.position===C.piece.position-1)),y=C=>{if(C.choice.type===De.showCard&&!C.result){h(C);return}if(C.choice.type===De.counterattack&&C.result==="skip"){u(void 0),r({openModal:!1,modalMessage:""}),t(Fi({playerId:C.playerId,actionType:Ce.playerAbility,skipCounterattack:!0}));return}C.result?(u(void 0),r({openModal:!1,modalMessage:""}),t(Os(C))):l(N=>[...N,C])};_e.useEffect(()=>{if(!m||m.responderId!==o.id){g.current=void 0;return}const C=`${m.responderId}:${m.attackerId}`;g.current!==C&&(g.current=C,l(N=>[...N,{playerId:m.responderId,actionType:Ce.playerChoice,choice:{card:{name:"Counterattack",drawDeck:Bi.characters},type:De.counterattack,target:m.attackerId}}]))},[m,o.id]),_e.useEffect(()=>{if(e.playerEvents.length>0||i.openModal||c||n.length===0||f.current)return;const[C,...N]=n;l(N);const j=Bg(e.gameState,C);if(j!==void 0){f.current=!0,window.setTimeout(()=>{f.current=!1,t(Os({...C,result:j}))},e.gameState.botThinkTimeMs??no);return}u(C)},[c,i.openModal,n,e.gameState,e.playerEvents.length,t]);const S=()=>{const C=e.gameState.lobby.playerList.filter(O=>O.user.id===e.gameState.currentPlayer)[0],N=Ni([6,4]),j=il(C);if(j){y({playerId:e.gameState.currentPlayer,choice:{card:j,type:De.move,value:(N[0]+N[1]).toString(),target:e.gameState.currentPlayer},actionType:Ce.playerAttack});return}t(jn({playerId:e.gameState.currentPlayer,moveRoll:N,actionType:Ce.playerMove}))},P=()=>{t(qn({playerId:e.gameState.currentPlayer,actionType:Ce.playerEndTurn}))},F=e.gameState.lobby.playerList.find(C=>C.user.id===e.gameState.currentPlayer),G=!!(F&&F.user.id===o.id&&F.piece.moved&&!F.piece.attacked&&!F.piece.dead&&M(F).length>0),z=c?{openModal:!0,modalMessage:w(c),playerChoice:c}:i,D=e.gameState.lobby.playerList.filter(C=>{var N;return(N=e.gameState.victors)==null?void 0:N.includes(C.user.id)}).map(C=>C.user.userName);return I.jsxs(_e.Fragment,{children:[I.jsx(Fg,{handleAttack:E,handleChoice:y,handleMove:S}),!o.loading&&!e.loading&&e.gameState.lobby.decks[Bi.areas].cards.length>1?I.jsx(_e.Suspense,{fallback:I.jsx(Tn,{}),children:I.jsx(Gg,{})}):I.jsx(Tn,{}),I.jsx(Ml,{userId:o.id}),I.jsx(Cg,{handleMove:S,handleEndTurn:P,handleAttack:E,handleChoice:y,canAttack:G}),I.jsx(El,{}),I.jsxs(Hr,{open:e.gameState.gameEnded===!0&&e.playerEvents.length===0,children:[I.jsx(qo,{children:"Game Over"}),I.jsx(Yo,{children:I.jsx(Gt,{children:D.length===1?`${D[0]} wins!`:`${D.join(", ")} win!`})})]}),I.jsx(Tl,{handleModalClose:d,modalState:z,handleAttack:E,handleChoice:y}),p?I.jsx(so,{playerEvent:{playerId:p.playerId,actionType:Ce.playerChoice},handleModalClose:v,revealedCard:p.choice.card,modalState:{openModal:!0,modalMessage:`You see ${((k=e.gameState.lobby.playerList.find(C=>C.user.id===p.choice.value))==null?void 0:k.user.userName)??"a player"}'s character.`}}):e.playerEvents.length>0?I.jsx(so,{playerEvent:e.playerEvents[0],handleModalClose:x,revealedCard:e.playerEvents[0].revealedCard,modalState:{...s,openModal:!0,modalMessage:_(e.playerEvents[0])??""}}):void 0]})}export{Vg as default};
