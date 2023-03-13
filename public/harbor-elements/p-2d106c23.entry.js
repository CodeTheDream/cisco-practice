import{r as t,c as i,h as e,H as o,g as a}from"./p-9227bedb.js";import{f as r}from"./p-dc819367.js";const n=class{constructor(e){t(this,e),this.hbrTabShow=i(this,"hbr-tab-show",7),this.hbrTabHide=i(this,"hbr-tab-hide",7),this.isVisible=!1,this.navigation=!1,this.sentiment="accent",this.prominence="",this.border=!1,this.uncontrolled=!1,this.noResponsive=!1,this.collapsed=!1}menuItemListener(t){const i=t.target.closest("hbr-tab-popover"),e=null==i?void 0:i.shadowRoot.querySelector("hbr-tab");e&&this.setActiveTab(e,!0,!0,t.detail.item)}connectedCallback(){this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.getAllTabs=this.getAllTabs.bind(this),this.setActiveTab=this.setActiveTab.bind(this),this.getAllTabFold=this.getAllTabFold.bind(this),this.handleClickIcon=this.handleClickIcon.bind(this),window.addEventListener("click",this.handleClickOutside.bind(this))}componentDidLoad(){new IntersectionObserver(((t,i)=>{t[0].intersectionRatio>0&&(this.setAriaLabels(),this.navigation||this.setActiveTab(this.getActiveTab()||this.getAllTabs()[0],!1),i.unobserve(t[0].target))})).observe(this.host),r.observe(this.tabVertical),this.mutationObserver=new MutationObserver((t=>{t.some((t=>!["aria-labelledby","aria-controls"].includes(t.attributeName)))&&setTimeout((()=>this.setAriaLabels()))})),this.mutationObserver.observe(this.host,{attributes:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.mutationObserver.disconnect(),r.unobserve(this.tabVertical),this.resizeObserver&&this.resizeObserver.unobserve(this.nav),window.removeEventListener("click",this.handleClickOutside.bind(this))}async show(t){const i=this.getAllTabs().find((i=>i.panel===t));i&&this.setActiveTab(i)}toggleTab(){this.getAllTabs().forEach((t=>{t.collapsed=this.collapsed}));const t=this.host.querySelectorAll("hbr-tab-popover");t&&t.forEach((t=>{t.collapsed=this.collapsed}))}handleClickOutside(t){var i;if(!(null===(i=this.openedPopover)||void 0===i?void 0:i.contains(t.target))){this.openedPopover&&(this.openedPopover.open=!1);const t=this.host.querySelectorAll("hbr-tab-popover");null==t||t.forEach((t=>{t.allowOpen=!0}))}}getAllTabs(t=!1,i,e=!0){let o=i;return i||(o=this.tabs.querySelector("slot")),[...o.assignedElements()].reduce(((i,o)=>{var a;if("hbr-tab"!==o.tagName.toLowerCase()||o.disabled||i.push(o),"hbr-tab-fold"===o.tagName.toLowerCase()&&!o.disabled&&(i.push(o),o.open||e)){const e=null===(a=null==o?void 0:o.shadowRoot)||void 0===a?void 0:a.querySelector("slot:not([name='label'])");e&&i.push(...this.getAllTabs(t,e))}if("hbr-tab-popover"===o.tagName.toLowerCase()){const t=null==o?void 0:o.shadowRoot.querySelector("hbr-tab");t&&i.push(t)}return i}),[])}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter((t=>"hbr-tab-panel"===t.tagName.toLowerCase()))}getAllTabFold(){return[...this.tabs.querySelector("slot").assignedElements()].filter((t=>"hbr-tab-fold"===t.tagName.toLowerCase()))}getActiveTab(){return this.getAllTabs().find((t=>t.active))}handleClick(t){if(this.uncontrolled)return;const i=t.target;let e,o;const a=i.closest("hbr-tab-popover");if(a?(e=null==a?void 0:a.shadowRoot.querySelector("hbr-tab"),o=null==a?void 0:a.closest("hbr-tab-vertical")):(e=i.closest("hbr-tab"),o=null==e?void 0:e.closest("hbr-tab-vertical")),o!==this.host)return!1;if(a){this.openedPopover&&(this.openedPopover.open=!1);const t=o.querySelectorAll("hbr-tab-popover");null==t||t.forEach((t=>{t.allowOpen=!1})),this.openedPopover=a,a.allowOpen=!0,a.open=!0,e&&this.setActiveTab(e,!0,!0)}else e&&this.setActiveTab(e);this.isVisible=!this.isVisible}handleClickIcon(){this.isVisible=!this.isVisible}handleKeyDown(t){if(this.uncontrolled)return;const i=t.target.closest("hbr-tab");if((null==i?void 0:i.closest("hbr-tab-vertical"))!==this.host)return!1;if(["Enter"," "].includes(t.key)&&i){if(this.uncontrolled)return;this.setActiveTab(i),t.preventDefault(),this.isVisible=!1}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const i=document.activeElement;if(i&&["hbr-tab","hbr-tab-fold"].includes(i.tagName.toLowerCase())){const e=this.getAllTabs(!1,!1,!1);let o=e.indexOf(i);"Home"===t.key?o=0:"End"===t.key?o=e.length-1:"ArrowUp"===t.key?o=Math.max(0,o-1):"ArrowDown"===t.key&&(o=Math.min(e.length-1,o+1));const a=e[o];a&&"hbr-tab"===a.tagName.toLowerCase()?"0"===a.shadowRoot.querySelector("div[part='base']").getAttribute("tabindex")&&a.setFocus({preventScroll:!0}):a&&"hbr-tab-fold"===a.tagName.toLowerCase()&&a.setFocus({preventScroll:!0}),t.preventDefault()}}}setActiveTab(t,i=!0,e=!1,o=null){const a=null==t?void 0:t.closest("hbr-tab-panel");if((!a||!this.host.contains(a))&&t&&(t!==this.activeTab||e)&&!t.disabled){const a=this.activeTab;if(this.activeTab=t,this.getAllTabs().map((t=>t.active=t===this.activeTab)),this.getAllTabFold().forEach((i=>{i.active=!(!i.contains(t)||i.open)})),!e||o){let t=o?o.panel:this.activeTab.panel;this.getAllPanels().map((i=>i.active=i.name===t))}i&&(a&&this.hbrTabHide.emit({name:a.panel}),this.hbrTabShow.emit({name:this.activeTab.panel}))}}setAriaLabels(){const t=this.getAllTabs(),i=this.getAllPanels();t.map((t=>{const e=i.find((i=>i.name===t.panel));e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))}))}render(){return e(o,{style:{"--sentiment-color":`var(--hbr-color-${this.sentiment}${this.prominence?"-"+this.prominence:""})`}},e("div",{part:"base",ref:t=>this.tabVertical=t,class:{"tab-vertical":!0,"tab-vertical--collapsed":this.collapsed},onClick:this.handleClick,onKeyDown:this.handleKeyDown},e("hbr-icon-button",{class:{"tab-vertical__menu-icon":!0,"tab-vertical__menu-icon-no-responsive":this.noResponsive},onClick:this.handleClickIcon,name:"menu",arialabel:"Open menu"}),e("div",{class:{"tab-vertical__nav-container":!0,"tab-visible":this.isVisible,"tab-vertical__nav-container-no-responsive":this.noResponsive}},e("hbr-icon-button",{class:{"tab-vertical__close-icon":!0,"tab-vertical__close-icon-no-responsive":this.noResponsive},onClick:this.handleClickIcon,name:"remove",arialabel:"Close menu"}),e("div",{ref:t=>this.nav=t,key:"nav",part:"nav",class:"tab-vertical__nav"},e("div",{ref:t=>this.tabs=t,part:"tabs",class:{"tab-vertical__tabs":!0,"tab-vertical__tabs-nav":this.navigation},role:"tablist"},e("slot",null)))),e("span",{part:"border",class:{"tab-vertical__resizer":!0,"tab-vertical__resizer-border":this.border}}),e("div",{ref:t=>this.body=t,part:"body",class:"tab-vertical__body"},e("slot",{name:"content"}))))}get host(){return a(this)}static get watchers(){return{collapsed:["toggleTab"]}}};n.style=".hbr-table-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.hbr-table-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.hbr-table-arrow-down{position:absolute;right:5px;top:0}.hbr-table-arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.hbr-table-cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.hbr-table-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.hbr-table-button.green{background-color:#2ee072;border:1px solid #20d565}.hbr-table-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}.hbr-hide{display:none}:host{}:host svg+div>div.chart--custom-tooltip{background:var(--hbr-color-neutral-background);color:var(--hbr-color-neutral-text);font-size:var(--hbr-font-size-xs);font-family:var(--hbr-font-body);border-radius:var(--hbr-border-radius-md);box-shadow:var(--hbr-shadow-md);padding:var(--hbr-spacing-sm)}:host svg+div>div.chart--custom-tooltip .tooltip-content .tooltip-content-title{padding-bottom:var(--hbr-spacing-sm)}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item{display:flex;width:100%;align-items:center;justify-content:space-between;font-size:var(--hbr-font-size-xs);font-weight:var(--hbr-font-weight-light)}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item:not(:last-child){padding-bottom:var(--hbr-spacing-sm)}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item div.tooltip-content-shape span{width:var(--hbr-spacing-xs);height:var(--hbr-spacing-xs);border-radius:var(--hbr-border-radius-circle);display:inline-block}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item div.tooltip-content-id{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;padding-left:var(--hbr-spacing-2xs);padding-right:var(--hbr-spacing-xl);text-align:left}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item div:last-child{margin-left:auto}:host svg+div.chart--custom-tooltip-wrapper{pointer-events:none;position:absolute;z-index:var(--hbr-z-index-tooltip);top:-10px;left:0px}:host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host:not(:defined){visibility:hidden}:host{display:block;--padding:12px 0px;--min-width:250px;--tab-padding:12px 13px 12px 40px;--close-button-padding:12px 13px 12px 30px;--sentiment-color:var(--hbr-color-accent)}.tab-vertical{display:flex;flex-direction:row;border:solid var(--hbr-border-width) transparent;border-radius:0;--slot-sentiment-color:var(--sentiment-color)}.tab-vertical--collapsed{width:54px}@media only screen and (min-width: 45em){.tab-vertical>hbr-icon-button.tab-vertical__menu-icon{position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}}.tab-vertical>hbr-icon-button.tab-vertical__menu-icon.tab-vertical__menu-icon-no-responsive{display:none}.tab-vertical hbr-icon-button.tab-vertical__close-icon{padding:var(--close-button-padding)}@media only screen and (min-width: 45em){.tab-vertical hbr-icon-button.tab-vertical__close-icon{position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}}.tab-vertical hbr-icon-button.tab-vertical__close-icon.tab-vertical__close-icon-no-responsive{display:none}.tab-vertical .tab-vertical__tabs{display:flex;position:relative;flex-direction:column;min-width:var(--min-width)}.tab-vertical .tab-vertical__tabs-nav{gap:8px;width:256px}.tab-vertical .tab-vertical__tabs-nav--collapsed{width:50px}.tab-vertical .tab-vertical__nav-container{padding:var(--padding)}@media only screen and (max-width: 44.9375em){.tab-vertical .tab-vertical__nav-container:not(.tab-vertical__nav-container-no-responsive){position:fixed;z-index:var(--hbr-z-index-drawer);top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;background-color:var(--hbr-color-neutral-medium-background) !important;-moz-transition:all 0.5s ease-in-out;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}}@media only screen and (max-width: 44.9375em) and (max-width: 44.9375em){.tab-vertical .tab-vertical__nav-container:not(.tab-vertical__nav-container-no-responsive):not(.tab-visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}}.tab-vertical:not(.focus-visible) ::slotted(hbr-tab){--focus-ring:none}.tab-vertical ::slotted(hbr-menu-divider){--margin:20px 0px}.tab-vertical ::slotted(hbr-tab){--padding:var(--tab-padding);--width:100%;width:100%;--active-background-color:none;--border-radius:none;--color:var(--hbr-color-neutral-text);--sentiment-color:var(--slot-sentiment-color)}.tab-vertical ::slotted(.hbr-tab-header){padding:12px 40px;margin:0px}.tab-vertical ::slotted(hbr-tab-fold){--sentiment-color:var(--slot-sentiment-color)}.tab-vertical .tab-vertical__body{flex:1 1 auto;order:2}.tab-vertical .tab-vertical__resizer{width:var(--hbr-border-width)}.tab-vertical .tab-vertical__resizer-border{background:var(--hbr-color-neutral-border)}";export{n as hbr_tab_vertical}