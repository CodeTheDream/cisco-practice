import{r as t}from"./p-9227bedb.js";const i=class{constructor(i){t(this,i),this.value=0,this.unit="bytes"}render(){return function(t,i){const s="bytes"===(i=Object.assign({unit:"bytes",locale:void 0},i)).unit?["B","kB","MB","GB","TB","PB","EB","ZB","YB"]:["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],b=t<0;if(0===(t=Math.abs(t)))return"0 B";const r=Math.min(Math.floor(Math.log10(t)/3),s.length-1);return`${b?"-":""}${Number((t/Math.pow(1e3,r)).toPrecision(3)).toLocaleString(i.locale)} ${s[r]}`}(this.value,{unit:this.unit,locale:this.locale})}};export{i as hbr_format_bytes}