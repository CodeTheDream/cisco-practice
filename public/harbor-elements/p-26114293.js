import{r as t}from"./p-f986f79b.js";import{b as n,_ as r}from"./p-d77427db.js";import{d as e,c as i,q as o,s as a,f as u,v as f}from"./p-53cd60da.js";import{b as c,_ as s}from"./p-b6499249.js";import{x as d,y as l,_ as v,z as h,D as y,G as m,I as p,K as x,j as b,V as g,e as j,v as w,a as k,o as M}from"./p-f24d3984.js";import{_ as W,a as _}from"./p-6f7537a1.js";import{_ as z}from"./p-d2d987d9.js";var E=function(t,n){return null==(t=function(t,n){return n.length<2?t:e(t,z(n,0,-1))}(t,n=o(n,t)))||delete t[i(d(n))]},q=function(t){return l(t)?void 0:t},O=v((function(t,n){var r={};if(null==t)return r;var e=!1;n=a(n,(function(n){return n=o(n,t),e||(e=n.length>1),n})),h(t,W(t),r),e&&(r=_(r,7,q));for(var i=n.length;i--;)E(r,n[i]);return r})),D=function(t){return"number"==typeof t||n(t)&&"[object Number]"==r(t)},L=function(t,n){var r=[];return c(t,(function(t,e,i){n(t,e,i)&&r.push(t)})),r},C=function(t,n){return(u(t)?f:L)(t,s(n))};function G(){return(G=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}var I=function(t){return"circle"===t.type},K=function(t){return"dot"===t.type},N=function(t){return"rect"===t.type},P=function(t){var n,r,e=t.x,i=t.y,o=t.noteX,a=t.noteY,u=t.noteWidth,f=void 0===u?120:u,c=t.noteTextOffset,s=void 0===c?8:c;if(D(o))n=e+o;else{if(void 0===o.abs)throw new Error("noteX should be either a number or an object containing an 'abs' property");n=o.abs}if(D(a))r=i+a;else{if(void 0===a.abs)throw new Error("noteY should be either a number or an object containing an 'abs' property");r=a.abs}var d=e,l=i,v=function(t,n,r,e){var i=Math.atan2(e-n,r-t);return y(m(i))}(e,i,n,r);if(I(t)){var h=p(x(v),t.size/2);d+=h.x,l+=h.y}if(N(t)){var b=Math.round((v+90)/45)%8;0===b&&(l-=t.height/2),1===b&&(d+=t.width/2,l-=t.height/2),2===b&&(d+=t.width/2),3===b&&(d+=t.width/2,l+=t.height/2),4===b&&(l+=t.height/2),5===b&&(d-=t.width/2,l+=t.height/2),6===b&&(d-=t.width/2),7===b&&(d-=t.width/2,l-=t.height/2)}var g=n,j=n;return(v+90)%360>180?(g-=f,j-=f):j+=f,{points:[[d,l],[n,r],[j,r]],text:[g,r-s],angle:v+90}},R=function(n){var r=n.data,e=n.annotations,i=n.getPosition,o=n.getDimensions;return t.useMemo((function(){return function(t){var n=t.data,r=t.getPosition,e=t.getDimensions;return t.annotations.reduce((function(t,i){var o=i.offset||0;return[].concat(t,C(n,i.match).map((function(t){var n=r(t),a=e(t);return(I(i)||N(i))&&(a.size=a.size+2*o,a.width=a.width+2*o,a.height=a.height+2*o),G({},O(i,["match","offset"]),n,a,{size:i.size||a.size,datum:t})})))}),[])}({data:r,annotations:e,getPosition:i,getDimensions:o})}),[r,e,i,o])},V=function(n){var r=n.annotations;return t.useMemo((function(){return r.map((function(t){return G({},t,{computed:P(G({},t))})}))}),[r])},X=function(n){var r=n.datum,e=n.x,i=n.y,o=n.note,a=g(),u=j(),f=w({x:e,y:i,config:u.config,immediate:!u.animate});return"function"==typeof o?t.createElement(o,{x:e,y:i,datum:r}):b.jsxs(b.Fragment,{children:[a.annotations.text.outlineWidth>0&&b.jsx(k.text,{x:f.x,y:f.y,style:G({},a.annotations.text,{strokeLinejoin:"round",strokeWidth:2*a.annotations.text.outlineWidth,stroke:a.annotations.text.outlineColor}),children:o}),b.jsx(k.text,{x:f.x,y:f.y,style:O(a.annotations.text,["outlineWidth","outlineColor"]),children:o})]})},Y=function(n){var r=n.points,e=n.isOutline,i=void 0!==e&&e,o=g(),a=t.useMemo((function(){var t=r[0];return r.slice(1).reduce((function(t,n){return t+" L"+n[0]+","+n[1]}),"M"+t[0]+","+t[1])}),[r]),u=M(a);if(i&&o.annotations.link.outlineWidth<=0)return null;var f=G({},o.annotations.link);return i&&(f.strokeLinecap="square",f.strokeWidth=o.annotations.link.strokeWidth+2*o.annotations.link.outlineWidth,f.stroke=o.annotations.link.outlineColor,f.opacity=o.annotations.link.outlineOpacity),b.jsx(k.path,{fill:"none",d:u,style:f})},A=function(t){var n=t.x,r=t.y,e=t.size,i=g(),o=j(),a=w({x:n,y:r,radius:e/2,config:o.config,immediate:!o.animate});return b.jsxs(b.Fragment,{children:[i.annotations.outline.outlineWidth>0&&b.jsx(k.circle,{cx:a.x,cy:a.y,r:a.radius,style:G({},i.annotations.outline,{fill:"none",strokeWidth:i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,stroke:i.annotations.outline.outlineColor,opacity:i.annotations.outline.outlineOpacity})}),b.jsx(k.circle,{cx:a.x,cy:a.y,r:a.radius,style:i.annotations.outline})]})},B=function(t){var n=t.x,r=t.y,e=t.size,i=void 0===e?4:e,o=g(),a=j(),u=w({x:n,y:r,radius:i/2,config:a.config,immediate:!a.animate});return b.jsxs(b.Fragment,{children:[o.annotations.outline.outlineWidth>0&&b.jsx(k.circle,{cx:u.x,cy:u.y,r:u.radius,style:G({},o.annotations.outline,{fill:"none",strokeWidth:2*o.annotations.outline.outlineWidth,stroke:o.annotations.outline.outlineColor,opacity:o.annotations.outline.outlineOpacity})}),b.jsx(k.circle,{cx:u.x,cy:u.y,r:u.radius,style:o.annotations.symbol})]})},F=function(t){var n=t.x,r=t.y,e=t.width,i=t.height,o=t.borderRadius,a=void 0===o?6:o,u=g(),f=j(),c=w({x:n-e/2,y:r-i/2,width:e,height:i,config:f.config,immediate:!f.animate});return b.jsxs(b.Fragment,{children:[u.annotations.outline.outlineWidth>0&&b.jsx(k.rect,{x:c.x,y:c.y,rx:a,ry:a,width:c.width,height:c.height,style:G({},u.annotations.outline,{fill:"none",strokeWidth:u.annotations.outline.strokeWidth+2*u.annotations.outline.outlineWidth,stroke:u.annotations.outline.outlineColor,opacity:u.annotations.outline.outlineOpacity})}),b.jsx(k.rect,{x:c.x,y:c.y,rx:a,ry:a,width:c.width,height:c.height,style:u.annotations.outline})]})},H=function(n){var r=n.datum,e=n.x,i=n.y,o=n.note,a=function(n){return t.useMemo((function(){return P(n)}),[n])}(n);if(!function(n){var r=typeof n;return t.isValidElement(n)||"string"===r||"function"===r||"object"===r}(o))throw new Error("note should be a valid react element");return b.jsxs(b.Fragment,{children:[b.jsx(Y,{points:a.points,isOutline:!0}),I(n)&&b.jsx(A,{x:e,y:i,size:n.size}),K(n)&&b.jsx(B,{x:e,y:i,size:n.size}),N(n)&&b.jsx(F,{x:e,y:i,width:n.width,height:n.height,borderRadius:n.borderRadius}),b.jsx(Y,{points:a.points}),b.jsx(X,{datum:r,x:a.text[0],y:a.text[1],note:o})]})},J=function(t,n){n.forEach((function(n,r){var e=n[0],i=n[1];0===r?t.moveTo(e,i):t.lineTo(e,i)}))},Q=function(t,n){var r=n.annotations,e=n.theme;0!==r.length&&(t.save(),r.forEach((function(n){if(!function(t){var n=typeof t;return"string"===n||"function"===n}(n.note))throw new Error("note is invalid for canvas implementation");e.annotations.link.outlineWidth>0&&(t.lineCap="square",t.strokeStyle=e.annotations.link.outlineColor,t.lineWidth=e.annotations.link.strokeWidth+2*e.annotations.link.outlineWidth,t.beginPath(),J(t,n.computed.points),t.stroke(),t.lineCap="butt"),I(n)&&e.annotations.outline.outlineWidth>0&&(t.strokeStyle=e.annotations.outline.outlineColor,t.lineWidth=e.annotations.outline.strokeWidth+2*e.annotations.outline.outlineWidth,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.stroke()),K(n)&&e.annotations.symbol.outlineWidth>0&&(t.strokeStyle=e.annotations.symbol.outlineColor,t.lineWidth=2*e.annotations.symbol.outlineWidth,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.stroke()),N(n)&&e.annotations.outline.outlineWidth>0&&(t.strokeStyle=e.annotations.outline.outlineColor,t.lineWidth=e.annotations.outline.strokeWidth+2*e.annotations.outline.outlineWidth,t.beginPath(),t.rect(n.x-n.width/2,n.y-n.height/2,n.width,n.height),t.stroke()),t.strokeStyle=e.annotations.link.stroke,t.lineWidth=e.annotations.link.strokeWidth,t.beginPath(),J(t,n.computed.points),t.stroke(),I(n)&&(t.strokeStyle=e.annotations.outline.stroke,t.lineWidth=e.annotations.outline.strokeWidth,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.stroke()),K(n)&&(t.fillStyle=e.annotations.symbol.fill,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.fill()),N(n)&&(t.strokeStyle=e.annotations.outline.stroke,t.lineWidth=e.annotations.outline.strokeWidth,t.beginPath(),t.rect(n.x-n.width/2,n.y-n.height/2,n.width,n.height),t.stroke()),"function"==typeof n.note?n.note(t,{datum:n.datum,x:n.computed.text[0],y:n.computed.text[1],theme:e}):(t.font=e.annotations.text.fontSize+"px "+e.annotations.text.fontFamily,t.textAlign="left",t.textBaseline="alphabetic",t.fillStyle=e.annotations.text.fill,t.strokeStyle=e.annotations.text.outlineColor,t.lineWidth=2*e.annotations.text.outlineWidth,e.annotations.text.outlineWidth>0&&(t.lineJoin="round",t.strokeText(n.note,n.computed.text[0],n.computed.text[1]),t.lineJoin="miter"),t.fillText(n.note,n.computed.text[0],n.computed.text[1]))})),t.restore())};export{Q as J,R as O,H as R,V as j}