import{r as t,h as e,H as i,g as o}from"./p-9227bedb.js";import"./p-b70d1ec1.js";import{r as n}from"./p-f986f79b.js";import"./p-d77427db.js";import"./p-429acd5f.js";import"./p-2f294b2a.js";import"./p-81363b60.js";import"./p-53cd60da.js";import"./p-b6499249.js";import"./p-ffcea7d9.js";import"./p-2217e4eb.js";import"./p-8e9b44dd.js";import{j as r,w as a,V as l,a as d,b as s,t as c,Z as u,A as h,aA as v,S as p,e as g,u as f,k as C,aB as m,W as b,c as L,X as x,an as w,g as y,h as k}from"./p-f24d3984.js";import{c as M,a as j}from"./p-261613f7.js";import"./p-1a3504a5.js";import"./p-b2fae519.js";import"./p-fd366e3b.js";import{B as E,X as S,n as O,b as P}from"./p-3eca9b19.js";import"./p-9de9e0ab.js";import"./p-8402fea6.js";import"./p-7b370549.js";import"./p-956c2a9c.js";import"./p-13335944.js";import"./p-6f7537a1.js";import"./p-d2d987d9.js";import{O as z,R as I}from"./p-26114293.js";import{g as T}from"./p-98b67fdb.js";function F(){return(F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}var B={layers:["grid","axes","cells","legends","annotations"],forceSquare:!1,xInnerPadding:0,xOuterPadding:0,yInnerPadding:0,yOuterPadding:0,sizeVariation:!1,opacity:1,activeOpacity:1,inactiveOpacity:.15,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.8]]},enableGridX:!1,enableGridY:!1,enableLabels:!0,label:"formattedValue",labelTextColor:{from:"color",modifiers:[["darker",2]]},colors:{type:"sequential",scheme:"brown_blueGreen"},emptyColor:"#000000",legends:[],annotations:[],isInteractive:!0,hoverTarget:"rowColumn",tooltip:n.memo((function(t){var e=t.cell;return null===e.formattedValue?null:r.jsx(a,{id:e.serieId+" - "+e.data.x,value:e.formattedValue,enableChip:!0,color:e.color})})),animate:!0,motionConfig:"gentle"},A=F({},B,{axisTop:{},axisRight:null,axisBottom:null,axisLeft:{},borderRadius:0,cellComponent:"rect"}),V=(F({},B,{axisTop:{},axisRight:null,axisBottom:null,axisLeft:{},renderCell:"rect",pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),function(t){var e=t.data,i=t.width,o=t.height,n=t.xInnerPadding,r=t.xOuterPadding,a=t.yInnerPadding,l=t.yOuterPadding,d=t.forceSquare,s=new Set,c=[],u=[],h=[];e.forEach((function(t){c.push(t.id),t.data.forEach((function(e){s.add(e.x);var i=null;null!=e.y&&(u.push(e.y),i=e.y),h.push({id:t.id+"."+e.x,serieId:t.id,value:i,data:e})}))}));var v=Array.from(s),p=function(t){var e=t.width,i=t.height,o=t.rows,n=t.columns,r=e,a=i,l=0,d=0;if(t.forceSquare){var s=Math.max(e/n,0),c=Math.max(i/o,0),u=Math.min(s,c);l=(e-(r=u*n))/2,d=(i-(a=u*o))/2}return{offsetX:l,offsetY:d,width:r,height:a}}({width:i,height:o,columns:v.length,rows:c.length,forceSquare:d}),g=p.width,f=p.height,C=p.offsetX,m=p.offsetY,b=O(P().domain(v).range([0,g]).paddingOuter(r).paddingInner(n)),L=O(P().domain(c).range([0,f]).paddingOuter(l).paddingInner(a)),x=b.bandwidth(),w=L.bandwidth(),y=h.map((function(t){return F({},t,{x:b(t.data.x)+x/2,y:L(t.serieId)+w/2,width:x,height:w})}));return{width:g,height:f,offsetX:C,offsetY:m,xScale:b,yScale:L,minValue:Math.min.apply(Math,u),maxValue:Math.max.apply(Math,u),cells:y}}),W=function(t){return{x:t.x,y:t.y}},Z=function(t){return{size:Math.max(t.width,t.height),width:t.width,height:t.height}},q=function(t){var e=t.data,i=t.width,o=t.height,r=t.xInnerPadding,a=t.xOuterPadding,l=t.yInnerPadding,d=t.yOuterPadding,s=t.forceSquare;return n.useMemo((function(){return V({data:e,width:i,height:o,xInnerPadding:r,xOuterPadding:a,yInnerPadding:l,yOuterPadding:d,forceSquare:s})}),[e,i,o,r,a,l,d,s])},X={cell:function(t,e){return t.id===e.id},row:function(t,e){return t.serieId===e.serieId},column:function(t,e){return t.data.x===e.data.x},rowColumn:function(t,e){return t.serieId===e.serieId||t.data.x===e.data.x}},R=function(t){var e,i,o,r=t.cells,a=t.minValue,d=t.maxValue,s=t.colors,c=t.emptyColor,u=t.opacity,h=t.activeOpacity,v=t.inactiveOpacity,p=t.borderColor,g=t.label,f=t.labelTextColor,C=t.valueFormat,y=t.activeIds,k=n.useMemo((function(){return function(t,e,i){if(!t)return function(){return 1};var o=w().domain(t.values?t.values:[e,i]).range(t.sizes);return function(t){return null===t?1:o(t)}}(e,i,o)}),[e=t.sizeVariation,i=a,o=d]),M=n.useMemo((function(){return"function"==typeof s?null:m(s,{min:a,max:d})}),[s,a,d]),j=n.useCallback((function(t){if(null!==t.value){if("function"==typeof s)return s(t);if(null!==M)return M(t.value)}return c}),[s,M,c]),E=l(),S=b(p,E),O=b(f,E),P=L(C),z=x(g);return{cells:n.useMemo((function(){return r.map((function(t){var e=u;y.length>0&&(e=y.includes(t.id)?h:v);var i=k(t.value),o=F({},t,{width:t.width*i,height:t.height*i,formattedValue:null!==t.value?P(t.value):null,opacity:e});return o.label=z(o),o.color=j(o),o.borderColor=S(o),o.labelTextColor=O(o),o}))}),[r,k,j,S,O,P,z,y,u,h,v]),colorScale:M}},U=function(t){var e=t.data,i=t.valueFormat,o=t.width,r=t.height,a=t.xOuterPadding,l=void 0===a?B.xOuterPadding:a,d=t.xInnerPadding,s=void 0===d?B.xInnerPadding:d,c=t.yOuterPadding,u=void 0===c?B.yOuterPadding:c,h=t.yInnerPadding,v=void 0===h?B.yInnerPadding:h,p=t.forceSquare,g=void 0===p?B.forceSquare:p,f=t.sizeVariation,C=void 0===f?B.sizeVariation:f,m=t.colors,b=void 0===m?B.colors:m,L=t.emptyColor,x=void 0===L?B.emptyColor:L,w=t.opacity,y=void 0===w?B.opacity:w,k=t.activeOpacity,M=void 0===k?B.activeOpacity:k,j=t.inactiveOpacity,E=void 0===j?B.inactiveOpacity:j,S=t.borderColor,O=void 0===S?B.borderColor:S,P=t.label,z=void 0===P?B.label:P,I=t.labelTextColor,T=void 0===I?B.labelTextColor:I,F=t.hoverTarget,A=void 0===F?B.hoverTarget:F,V=n.useState(null),W=V[0],Z=V[1],U=q({data:e,width:o,height:r,xOuterPadding:l,xInnerPadding:s,yOuterPadding:u,yInnerPadding:v,forceSquare:g}),Y=U.width,D=U.height,G=U.offsetX,H=U.offsetY,_=U.cells,J=U.xScale,K=U.yScale,N=U.minValue,Q=U.maxValue,$=n.useMemo((function(){if(!W)return[];var t=X[A];return _.filter((function(e){return t(e,W)})).map((function(t){return t.id}))}),[_,W,A]),tt=R({cells:_,minValue:N,maxValue:Q,sizeVariation:C,colors:b,emptyColor:x,opacity:y,activeOpacity:M,inactiveOpacity:E,borderColor:O,label:z,labelTextColor:T,valueFormat:i,activeIds:$});return{width:Y,height:D,offsetX:G,offsetY:H,cells:tt.cells,xScale:J,yScale:K,colorScale:tt.colorScale,activeCell:W,setActiveCell:Z}},Y=n.memo((function(t){var e=t.cell,i=t.borderWidth,o=t.borderRadius,a=t.animatedProps,c=t.onMouseEnter,u=t.onMouseMove,h=t.onMouseLeave,v=t.onClick,p=t.enableLabels,g=l(),f=n.useMemo((function(){return{onMouseEnter:c?c(e):void 0,onMouseMove:u?u(e):void 0,onMouseLeave:h?h(e):void 0,onClick:v?v(e):void 0}}),[e,c,u,h,v]);return r.jsxs(d.g,F({"data-testid":"cell."+e.id,style:{cursor:"pointer"},opacity:a.opacity},f,{transform:s([a.x,a.y,a.scale],(function(t,e,i){return"translate("+t+", "+e+") scale("+i+")"})),children:[r.jsx(d.rect,{transform:s([a.width,a.height],(function(t,e){return"translate("+-.5*t+", "+-.5*e+")"})),fill:a.color,width:a.width,height:a.height,stroke:a.borderColor,strokeWidth:i,rx:o,ry:o},e.id),p&&r.jsx(d.text,{textAnchor:"middle",dominantBaseline:"central",fill:a.labelTextColor,style:F({},g.labels.text,{fill:void 0,userSelect:"none"}),children:e.label})]}))})),D=n.memo((function(t){var e=t.cell,i=t.borderWidth,o=t.animatedProps,a=t.onMouseEnter,c=t.onMouseMove,u=t.onMouseLeave,h=t.onClick,v=t.enableLabels,p=l(),g=n.useMemo((function(){return{onMouseEnter:a?a(e):void 0,onMouseMove:c?c(e):void 0,onMouseLeave:u?u(e):void 0,onClick:h?h(e):void 0}}),[e,a,c,u,h]);return r.jsxs(d.g,F({"data-testid":"cell."+e.id,style:{cursor:"pointer"},opacity:o.opacity},g,{transform:s([o.x,o.y],(function(t,e){return"translate("+t+", "+e+")"})),children:[r.jsx(d.circle,{r:s([o.width,o.height],(function(t,e){return Math.min(t,e)/2})),fill:o.color,fillOpacity:o.opacity,strokeWidth:i,stroke:o.borderColor}),v&&r.jsx(d.text,{dominantBaseline:"central",textAnchor:"middle",fill:o.labelTextColor,style:F({},p.labels.text,{fill:void 0}),children:e.label})]}))})),G=function(t){return{x:t.x,y:t.y,width:t.width,height:t.height,color:t.color,opacity:0,borderColor:t.borderColor,labelTextColor:t.labelTextColor,scale:0}},H=function(t){return{x:t.x,y:t.y,width:t.width,height:t.height,color:t.color,opacity:t.opacity,borderColor:t.borderColor,labelTextColor:t.labelTextColor,scale:1}},_=function(t){return{x:t.x,y:t.y,width:t.width,height:t.height,color:t.color,opacity:0,borderColor:t.borderColor,labelTextColor:t.labelTextColor,scale:0}},J=function(t){var e,i=t.cells,o=t.cellComponent,a=t.borderRadius,l=t.borderWidth,d=t.isInteractive,s=t.setActiveCell,c=t.onMouseEnter,u=t.onMouseMove,h=t.onMouseLeave,v=t.onClick,p=t.tooltip,m=t.enableLabels,b=g(),L=f(i,{keys:function(t){return t.id},initial:H,from:G,enter:H,update:H,leave:_,config:b.config,immediate:!b.animate}),x=C(),w=x.showTooltipFromEvent,y=x.hideTooltip,k=n.useMemo((function(){if(d)return function(t){return function(e){w(n.createElement(p,{cell:t}),e),s(t),null==c||c(t,e)}}}),[d,w,p,s,c]),M=n.useMemo((function(){if(d)return function(t){return function(e){w(n.createElement(p,{cell:t}),e),null==u||u(t,e)}}}),[d,w,p,u]),j=n.useMemo((function(){if(d)return function(t){return function(e){y(),s(null),null==h||h(t,e)}}}),[d,y,s,h]),E=n.useMemo((function(){if(d)return function(t){return function(e){null==v||v(t,e)}}}),[d,v]);return e="rect"===o?Y:"circle"===o?D:o,r.jsx(r.Fragment,{children:L((function(t,i){return n.createElement(e,{cell:i,borderRadius:a,borderWidth:l,animatedProps:t,enableLabels:m,onMouseEnter:k,onMouseMove:M,onMouseLeave:j,onClick:E})}))})},K=function(t){var e=function(t,e){return z({data:t,annotations:e,getPosition:W,getDimensions:Z})}(t.cells,t.annotations);return r.jsx(r.Fragment,{children:e.map((function(t,e){return r.jsx(I,F({},t),e)}))})},N=["isInteractive","animate","motionConfig","theme","renderWrapper"],Q=function(t){var e=t.data,i=t.layers,o=void 0===i?A.layers:i,a=t.valueFormat,l=t.forceSquare,d=void 0===l?A.forceSquare:l,s=t.xInnerPadding,c=void 0===s?A.xInnerPadding:s,u=t.xOuterPadding,g=void 0===u?A.xOuterPadding:u,f=t.yInnerPadding,C=void 0===f?A.yInnerPadding:f,m=t.yOuterPadding,b=void 0===m?A.yOuterPadding:m,L=t.sizeVariation,x=void 0===L?A.sizeVariation:L,w=t.cellComponent,y=void 0===w?A.cellComponent:w,k=t.opacity,M=void 0===k?A.opacity:k,j=t.activeOpacity,O=void 0===j?A.activeOpacity:j,P=t.inactiveOpacity,z=void 0===P?A.inactiveOpacity:P,I=t.borderRadius,T=void 0===I?A.borderRadius:I,B=t.borderWidth,V=void 0===B?A.borderWidth:B,W=t.borderColor,Z=void 0===W?A.borderColor:W,q=t.enableGridX,X=void 0===q?A.enableGridX:q,R=t.enableGridY,Y=void 0===R?A.enableGridY:R,D=t.axisTop,G=void 0===D?A.axisTop:D,H=t.axisRight,_=void 0===H?A.axisRight:H,N=t.axisBottom,Q=void 0===N?A.axisBottom:N,$=t.axisLeft,tt=void 0===$?A.axisLeft:$,et=t.enableLabels,it=void 0===et?A.enableLabels:et,ot=t.label,nt=void 0===ot?A.label:ot,rt=t.labelTextColor,at=void 0===rt?A.labelTextColor:rt,lt=t.colors,dt=void 0===lt?A.colors:lt,st=t.emptyColor,ct=void 0===st?A.emptyColor:st,ut=t.legends,ht=void 0===ut?A.legends:ut,vt=t.annotations,pt=void 0===vt?A.annotations:vt,gt=t.isInteractive,ft=void 0===gt?A.isInteractive:gt,Ct=t.onMouseEnter,mt=t.onMouseMove,bt=t.onMouseLeave,Lt=t.onClick,xt=t.hoverTarget,wt=void 0===xt?A.hoverTarget:xt,yt=t.tooltip,kt=void 0===yt?A.tooltip:yt,Mt=t.role,jt=t.ariaLabel,Et=t.ariaLabelledBy,St=t.ariaDescribedBy,Ot=h(t.width,t.height,t.margin),Pt=Ot.margin,zt=Ot.outerWidth,It=Ot.outerHeight,Tt=U({data:e,valueFormat:a,width:Ot.innerWidth,height:Ot.innerHeight,forceSquare:d,xInnerPadding:c,xOuterPadding:g,yInnerPadding:C,yOuterPadding:b,sizeVariation:x,colors:dt,emptyColor:ct,opacity:M,activeOpacity:O,inactiveOpacity:z,borderColor:Z,label:nt,labelTextColor:at,hoverTarget:wt}),Ft=Tt.width,Bt=Tt.height,At=Tt.offsetX,Vt=Tt.offsetY,Wt=Tt.xScale,Zt=Tt.yScale,qt=Tt.cells,Xt=Tt.colorScale,Rt=Tt.activeCell,Ut=Tt.setActiveCell,Yt=n.useMemo((function(){return F({},Pt,{top:Pt.top+Vt,left:Pt.left+At})}),[Pt,At,Vt]),Dt={grid:null,axes:null,cells:null,legends:null,annotations:null};o.includes("grid")&&(Dt.grid=r.jsx(E,{width:Ft,height:Bt,xScale:X?Wt:null,yScale:Y?Zt:null},"grid")),o.includes("axes")&&(Dt.axes=r.jsx(S,{xScale:Wt,yScale:Zt,width:Ft,height:Bt,top:G,right:_,bottom:Q,left:tt},"axes")),o.includes("cells")&&(Dt.cells=r.jsx(n.Fragment,{children:r.jsx(J,{cells:qt,cellComponent:y,borderRadius:T,borderWidth:V,isInteractive:ft,setActiveCell:Ut,onMouseEnter:Ct,onMouseMove:mt,onMouseLeave:bt,onClick:Lt,tooltip:kt,enableLabels:it})},"cells")),o.includes("legends")&&null!==Xt&&(Dt.legends=r.jsx(n.Fragment,{children:ht.map((function(t,e){return n.createElement(v,F({},t,{key:e,containerWidth:Ft,containerHeight:Bt,scale:Xt}))}))},"legends")),o.includes("annotations")&&pt.length>0&&(Dt.annotations=r.jsx(K,{cells:qt,annotations:pt},"annotations"));var Gt={cells:qt,activeCell:Rt,setActiveCell:Ut};return r.jsx(p,{width:zt,height:It,margin:Object.assign({},Yt,{top:Yt.top,left:Yt.left}),role:Mt,ariaLabel:jt,ariaLabelledBy:Et,ariaDescribedBy:St,children:o.map((function(t,e){var i;return"function"==typeof t?r.jsx(n.Fragment,{children:n.createElement(t,Gt)},e):null!=(i=null==Dt?void 0:Dt[t])?i:null}))})},$=function(t){var e=t.isInteractive,i=void 0===e?A.isInteractive:e,o=t.animate,n=void 0===o?A.animate:o,a=t.motionConfig,l=void 0===a?A.motionConfig:a,d=t.theme,s=t.renderWrapper,c=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)e.indexOf(i=r[o])>=0||(n[i]=t[i]);return n}(t,N);return r.jsx(u,{animate:n,isInteractive:i,motionConfig:l,renderWrapper:s,theme:d,children:r.jsx(Q,F({isInteractive:i},c))})},tt=function(t){return r.jsx(c,{children:function(e){return r.jsx($,F({width:e.width,height:e.height},t))}})};function et(t){let e=["grid","axes","cells"];return(Array.isArray(t.legends)&&0<t.legends.length||void 0===t.legends)&&e.push("legends"),t.layers&&Array.isArray(t.layers)&&(e=t.layers.map((t=>t)),delete t.layers),e}function it({config:t}){return{emptyColor:"transparent",axisLeft:{tickSize:0,tickPadding:10},axisTop:{tickSize:0,tickPadding:10},forceSquare:!0,animate:!1,motionConfig:"wobbly",motionStiffness:80,motionDamping:9,layers:et(t),enableGridX:!1,isInteractive:!0,legends:[{anchor:"bottom",translateX:0,translateY:30,length:400,thickness:8,direction:"row",tickPosition:"after",tickSize:3,tickSpacing:4,tickOverlap:!1,titleOffset:4}]}}const ot=class{constructor(e){t(this,e),this.config={data:[]},this.width="100%",this.height="360px"}componentDidLoad(){this.createChart(),k(this.el.shadowRoot)}componentShouldUpdate(){return this.createChart(),!1}createChart(){const t=this.el.shadowRoot.querySelector("div");return function(t){const{el:e,config:i}=t,o=M.all([T(),it(t),i],{arrayMerge:j});y.render(n.createElement(tt,o,null),e)}({el:t,config:this.config}),t}render(){return this.el.style.width=this.width,this.el.style.height=this.height,e(i,null,e("div",{ref:t=>this.heatmap=t,style:{width:this.width,height:this.height}}))}get el(){return o(this)}};ot.style=".hbr-table-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.hbr-table-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.hbr-table-arrow-down{position:absolute;right:5px;top:0}.hbr-table-arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.hbr-table-cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.hbr-table-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.hbr-table-button.green{background-color:#2ee072;border:1px solid #20d565}.hbr-table-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}.hbr-hide{display:none}:host{}:host svg+div>div.chart--custom-tooltip{background:var(--hbr-color-neutral-background);color:var(--hbr-color-neutral-text);font-size:var(--hbr-font-size-xs);font-family:var(--hbr-font-body);border-radius:var(--hbr-border-radius-md);box-shadow:var(--hbr-shadow-md);padding:var(--hbr-spacing-sm)}:host svg+div>div.chart--custom-tooltip .tooltip-content .tooltip-content-title{padding-bottom:var(--hbr-spacing-sm)}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item{display:flex;width:100%;align-items:center;justify-content:space-between;font-size:var(--hbr-font-size-xs);font-weight:var(--hbr-font-weight-light)}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item:not(:last-child){padding-bottom:var(--hbr-spacing-sm)}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item div.tooltip-content-shape span{width:var(--hbr-spacing-xs);height:var(--hbr-spacing-xs);border-radius:var(--hbr-border-radius-circle);display:inline-block}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item div.tooltip-content-id{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;padding-left:var(--hbr-spacing-2xs);padding-right:var(--hbr-spacing-xl);text-align:left}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item div:last-child{margin-left:auto}:host svg+div.chart--custom-tooltip-wrapper{pointer-events:none;position:absolute;z-index:var(--hbr-z-index-tooltip);top:-10px;left:0px}:host{display:block;position:relative}:host svg.--heatmap-svg+div>div>div>span:first-child{border-radius:var(--hbr-border-radius-circle)}:host div.legend{display:none;position:absolute}:host div.legend--top-left,:host div.legend--top-right,:host div.legend--left,:host div.legend--right{display:flex;align-items:center}:host div.legend--top-left div.legend-item,:host div.legend--top-right div.legend-item,:host div.legend--left div.legend-item,:host div.legend--right div.legend-item{padding-right:var(--hbr-spacing-lg);font-size:var(--hbr-font-size-2xs);color:var(--hbr-color-on-surface)}:host div.legend--top-left div.legend-item span.legend-shape,:host div.legend--top-right div.legend-item span.legend-shape,:host div.legend--left div.legend-item span.legend-shape,:host div.legend--right div.legend-item span.legend-shape{width:var(--hbr-font-size-2xs);height:var(--hbr-font-size-2xs);border-radius:var(--hbr-border-radius-circle);display:inline-block;margin-right:var(--hbr-spacing-xs)}:host div.legend--top-left{display:flex;top:0}:host div.legend--top-right{top:0;right:0}:host div.legend--left{left:0}:host div.legend--right{right:0}";export{ot as hbr_heatmap}