import{a as t,i as r}from"./p-d77427db.js";import{t as i}from"./p-666c6330.js";var n=function(){return t.Date.now()},o=Math.max,u=Math.min,e=function(t,e,f){var a,c,v,d,m,s,p=0,T=!1,h=!1,l=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(r){var i=a,n=c;return a=c=void 0,p=r,d=t.apply(n,i)}function j(t){return p=t,m=setTimeout(y,e),T?x(t):d}function w(t){var r=t-s;return void 0===s||r>=e||r<0||h&&t-p>=v}function y(){var t=n();if(w(t))return E(t);m=setTimeout(y,function(t){var r=e-(t-s);return h?u(r,v-(t-p)):r}(t))}function E(t){return m=void 0,l&&a?x(t):(a=c=void 0,d)}function M(){var t=n(),r=w(t);if(a=arguments,c=this,s=t,r){if(void 0===m)return j(s);if(h)return clearTimeout(m),m=setTimeout(y,e),x(s)}return void 0===m&&(m=setTimeout(y,e)),d}return e=i(e)||0,r(f)&&(T=!!f.leading,v=(h="maxWait"in f)?o(i(f.maxWait)||0,e):v,l="trailing"in f?!!f.trailing:l),M.cancel=function(){void 0!==m&&clearTimeout(m),p=0,a=s=c=m=void 0},M.flush=function(){return void 0===m?d:E(n())},M};export{e as d}