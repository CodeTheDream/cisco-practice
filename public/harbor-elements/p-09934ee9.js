function t(t){const n=t?t.assignedNodes({flatten:!0}):[];let r="";return[...n].map((t=>{t.nodeType===Node.TEXT_NODE&&(r+=t.textContent)})),r}function n(t,n){return n?null!==t.querySelector(`[slot="${n}"]`):Array.from(t.childNodes).some((t=>t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim()||t.nodeType===t.ELEMENT_NODE&&!t.hasAttribute("slot")))}function r(t,n){return"[default]"===t?function(t){return[...t.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const n=t;if("hbr-visually-hidden"===n.tagName.toLowerCase())return!1;if(!n.hasAttribute("slot"))return!0}return!1}))}(n):function(t,n){return null!==t.querySelector(`:scope > [slot="${n}"]`)}(n,t)}export{t as g,n as h,r as t}