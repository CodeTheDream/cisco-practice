import{r as t,c as o,h as a,H as r,g as i}from"./p-9227bedb.js";let e=0;const n=class{constructor(a){t(this,a),this.hbrClose=o(this,"hbr-close",7),this.hbrActive=o(this,"hbr-active",7),this.componentId="tab-"+ ++e,this.panel="",this.active=!1,this.closable=!1,this.popover=!1,this.hover=!1,this.nav=!1,this.disabled=!1,this.collapsed=!1,this.sentiment="",this.prominence=""}connectedCallback(){this.handleCloseClick=this.handleCloseClick.bind(this),this.handleCloseIconOnKeyDown=this.handleCloseIconOnKeyDown.bind(this),this.handleTabActive=this.handleTabActive.bind(this)}async setFocus(t){this.tab.focus(t)}async removeFocus(){this.tab.blur()}handleCloseClick(){!this.disabled&&this.hbrClose.emit()}handleCloseIconOnKeyDown(t){!this.disabled&&"Enter"===t.code&&this.hbrClose.emit()}handleTabActive(){this.active&&this.hbrActive.emit({tab:this.host})}setNestedValue(){if(this.nested){const t=this.tab.querySelector("slot:not([name='prefix']):not([name='suffix'])"),o=Array.from(t.assignedElements({flatten:!0})).filter((t=>"hbr-dropdown"===t.tagName.toLocaleLowerCase()));if(o.length){const t=o[0];t&&!this.active&&(t.value=this.active?"selected":"")}}}render(){return a(r,{id:this.host.id||this.componentId,onClick:t=>{this.nested&&t.stopPropagation()},style:this.sentiment?{"--sentiment-color":`var(--hbr-color-${this.sentiment}${this.prominence?"-"+this.prominence:""})`}:{}},a("div",{part:"base",ref:t=>this.tab=t,class:{tab:!0,"tab--active":this.active||this.hover,"tab--closable":this.closable,"tab--disabled":this.disabled,"tab--nested":this.nested,"tab--nav":this.nav,"tab--popover":this.popover,"tab--hover":this.hover,"tab--collapsed":this.collapsed,"tab--vertical":this.vertical},role:"tab","aria-disabled":this.disabled?"true":"false","aria-selected":this.active?"true":"false",tabindex:this.disabled||this.nested?"-1":"0"},a("span",{part:"prefix",class:"tab__prefix"},a("slot",{name:"prefix"})),!this.vertical&&!this.nav&&a("span",{part:"indicator",class:"tab__indicator"}),this.vertical&&this.active&&!this.nav&&a("span",{part:"indicator",class:"tab__vertical-indicator"}),a("slot",null),a("span",{part:"suffix",class:"tab__suffix"},a("slot",{name:"suffix"})),this.closable&&a("hbr-icon-button",{name:"remove",arialabel:"remove",exportparts:"base:close-button",class:"tab__close-button",onClick:this.handleCloseClick,onKeyDown:this.handleCloseIconOnKeyDown,tabIndex:this.disabled?-1:0})))}get host(){return i(this)}static get watchers(){return{active:["handleTabActive","setNestedValue"]}}};n.style=".hbr-table-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.hbr-table-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.hbr-table-arrow-down{position:absolute;right:5px;top:0}.hbr-table-arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.hbr-table-cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.hbr-table-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.hbr-table-button.green{background-color:#2ee072;border:1px solid #20d565}.hbr-table-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}.hbr-hide{display:none}:host{}:host svg+div>div.chart--custom-tooltip{background:var(--hbr-color-neutral-background);color:var(--hbr-color-neutral-text);font-size:var(--hbr-font-size-xs);font-family:var(--hbr-font-body);border-radius:var(--hbr-border-radius-md);box-shadow:var(--hbr-shadow-md);padding:var(--hbr-spacing-sm)}:host svg+div>div.chart--custom-tooltip .tooltip-content .tooltip-content-title{padding-bottom:var(--hbr-spacing-sm)}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item{display:flex;width:100%;align-items:center;justify-content:space-between;font-size:var(--hbr-font-size-xs);font-weight:var(--hbr-font-weight-light)}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item:not(:last-child){padding-bottom:var(--hbr-spacing-sm)}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item div.tooltip-content-shape span{width:var(--hbr-spacing-xs);height:var(--hbr-spacing-xs);border-radius:var(--hbr-border-radius-circle);display:inline-block}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item div.tooltip-content-id{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;padding-left:var(--hbr-spacing-2xs);padding-right:var(--hbr-spacing-xl);text-align:left}:host svg+div>div.chart--custom-tooltip .tooltip-content div.tooltip-content-item div:last-child{margin-left:auto}:host svg+div.chart--custom-tooltip-wrapper{pointer-events:none;position:absolute;z-index:var(--hbr-z-index-tooltip);top:-10px;left:0px}:host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host:not(:defined){visibility:hidden}:host{--focus-ring:inset 0 0 0 var(--hbr-focus-ring-width) var(--hbr-color-accent-focus);--padding:var(--hbr-spacing-sm) var(--hbr-spacing-lg);--hover-color:var(--sentiment-color);--active-color:var(--sentiment-color);--color:var(--hbr-color-neutral-text);--margin-right:0px;--vertical-tab-indicator-color:var(--sentiment-color);--font-size:var(--hbr-font-size-sm);--font-weight:var(--hbr-font-weight-normal);--letter-spacing:var(--hbr-font-letter-spacing-normal);--line-height:var(--hbr-font-line-height-normal);--height:40px;--sentiment-color:var(--hbr-color-accent);display:inline-block;--width:fit-content;--active-background-color:none;--border-radius:4px;position:relative}.tab{--slot-sentiment-color:var(--sentiment-color)}.tab ::slotted(.trigger){display:flex;align-items:center}.tab ::slotted(hbr-dropdown){--trigger-color:var(--hbr-color-neutral-text);--trigger-open-color:var(--slot-sentiment-color);--trigger-hover-color:var(--slot-sentiment-color);--trigger-selected-color:var(--slot-sentiment-color)}.tab{display:inline-flex;align-items:center;font-family:var(--hbr-font-body);font-size:var(--font-size);font-weight:var(--font-weight);border-radius:var(--border-radius);letter-spacing:var(--letter-spacing);line-height:var(--line-height);color:var(--color);margin-right:var(--margin-right);padding:var(--padding);white-space:nowrap;user-select:none;cursor:pointer;transition:var(--transition-speed) box-shadow, var(--transition-speed) color;width:var(--width);position:relative}.tab:hover:not(.tab--disabled):not(.tab--active):not(.tab--nav){color:var(--hover-color)}.tab:focus{outline:none}.tab:focus:not(.tab--disabled){color:var(--sentiment-color);box-shadow:var(--focus-ring)}.tab.tab--active:not(.tab--disabled){color:var(--active-color);background-color:var(--active-background-color)}.tab.tab--disabled{cursor:not-allowed;color:var(--hbr-color-neutral-disabled)}.tab.tab--nav{display:flex;gap:var(--hbr-spacing-md);align-items:center;color:var(--hbr-color-neutral-medium);padding:var(--hbr-spacing-xs) var(--hbr-spacing-sm);font-size:var(--hbr-font-size-sm);border-radius:var(--hbr-border-radius-md);background-color:inherit;font-weight:var(--hbr-font-weight-bold);height:var(--height)}.tab.tab--nav .tab__prefix{font-size:var(--hbr-font-size-xl);display:block;height:29px}.tab.tab--nav.tab--hover{color:var(--hover-color)}.tab.tab--nav.tab--active{color:var(--hbr-color-neutral);background-color:var(--hbr-color-neutral-weak-background);padding-left:var(--hbr-spacing-xs);margin-left:var(--hbr-spacing-2xs);width:calc(100% - var(--hbr-spacing-xs))}.tab.tab--nav.tab--active .tab__prefix{color:var(--hbr-color-success)}.tab.tab--nav.tab--active:hover{margin-left:0;width:inherit}.tab.tab--nav.tab--active.tab--popover{margin-left:0;padding-left:var(--hbr-spacing-sm)}.tab.tab--nav.tab--collapsed:not(:hover):not(.tab--popover){width:40px;overflow:hidden;border-radius:8px}.tab.tab--nav.tab--collapsed:not(:hover).tab--popover:not(.tab--hover){width:40px;overflow:hidden;border-radius:8px}.tab.tab--nav:hover{color:var(--hbr-color-neutral);background-color:var(--hbr-color-neutral-background);box-shadow:var(--hbr-shadow-lg);padding-left:var(--hbr-spacing-sm);padding-right:var(--hbr-spacing-md)}.tab.tab--nav:hover .tab__prefix{color:var(--hbr-color-success)}.tab.tab--nav.tab--popover{width:100%;color:var(--hbr-color-neutral);padding-left:var(--hbr-spacing-sm);padding-right:var(--hbr-spacing-xs)}.tab--nav.tab--popover.tab-collapsed:not(:hover){width:40px;overflow:hidden;border-radius:8px}.tab--nav.tab--popover.tab--active{border-top-right-radius:0;border-bottom-right-radius:0;clip-path:inset(-100vw 0 -100vw -100vw);color:var(--hbr-color-neutral-text);box-shadow:var(--hbr-shadow-lg);position:relative;z-index:1001;background-color:var(--hbr-color-neutral-background);padding-left:var(--hbr-spacing-xs)}.tab--nav.tab--popover.tab--active:not(.tab--hover):not(.tab--collapsed){background-color:var(--hbr-color-neutral-weak-background);border-radius:var(--border-radius);box-shadow:none;margin-left:var(--hbr-spacing-2xs);width:calc(100% - var(--hbr-spacing-xs));padding-left:var(--hbr-spacing-xs)}.tab--nav.tab--popover.tab--active:hover{width:100%}.tab__prefix,.tab__suffix{flex:0 0 auto;display:flex;align-items:center}.tab__close-button{font-size:var(--hbr-font-size-sm);margin-left:var(--hbr-spacing-2xs)}.tab__close-button::part(base){padding:var(--hbr-spacing-3xs)}.tab--nested{--padding:0px}.tab--nested ::slotted(hbr-dropdown){--trigger-padding:12px 0px;--trigger-selected-color:var(--sentiment-color)}.tab__vertical-indicator{width:4px;height:100%;border-radius:8px;background:var(--vertical-tab-indicator-color);position:absolute;top:0px;left:0px}.tab:not(.tab--nav):not(.tab--vertical) .tab__indicator{width:100%;background-color:var(--hbr-color-gray-85, #d4dce3);border-radius:2px;height:3px;display:none;position:absolute;bottom:0px}.tab:not(.tab--nav):not(.tab--vertical):not(.tab--disabled):not(.tab--active):hover .tab__indicator{display:flex}.tab:not(.tab--nav):not(.tab--vertical).tab--active .tab__indicator{display:flex;background-color:var(--sentiment-color)}";export{n as hbr_tab}