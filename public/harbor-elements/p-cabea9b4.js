var t=Math.PI,i=2*t,h=i-1e-6;function s(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function n(){return new s}s.prototype=n.prototype={constructor:s,moveTo:function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},quadraticCurveTo:function(t,i,h,s){this._+="Q"+ +t+","+ +i+","+(this._x1=+h)+","+(this._y1=+s)},bezierCurveTo:function(t,i,h,s,n,e){this._+="C"+ +t+","+ +i+","+ +h+","+ +s+","+(this._x1=+n)+","+(this._y1=+e)},arcTo:function(i,h,s,n,e){var r=this._x1,a=this._y1,o=(s=+s)-(i=+i),u=(n=+n)-(h=+h),c=r-i,M=a-h,f=c*c+M*M;if((e=+e)<0)throw new Error("negative radius: "+e);if(null===this._x1)this._+="M"+(this._x1=i)+","+(this._y1=h);else if(f>1e-6)if(Math.abs(M*o-u*c)>1e-6&&e){var l=s-r,v=n-a,w=o*o+u*u,T=l*l+v*v,A=Math.sqrt(w),L=Math.sqrt(f),d=e*Math.tan((t-Math.acos((w+f-T)/(2*A*L)))/2),g=d/L,C=d/A;Math.abs(g-1)>1e-6&&(this._+="L"+(i+g*c)+","+(h+g*M)),this._+="A"+e+","+e+",0,0,"+ +(M*l>c*v)+","+(this._x1=i+C*o)+","+(this._y1=h+C*u)}else this._+="L"+(this._x1=i)+","+(this._y1=h)},arc:function(s,n,e,r,a,o){s=+s,n=+n,o=!!o;var u=(e=+e)*Math.cos(r),c=e*Math.sin(r),M=s+u,f=n+c,l=1^o,v=o?r-a:a-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+M+","+f:(Math.abs(this._x1-M)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+M+","+f),e&&(v<0&&(v=v%i+i),v>h?this._+="A"+e+","+e+",0,1,"+l+","+(s-u)+","+(n-c)+"A"+e+","+e+",0,1,"+l+","+(this._x1=M)+","+(this._y1=f):v>1e-6&&(this._+="A"+e+","+e+",0,"+ +(v>=t)+","+l+","+(this._x1=s+e*Math.cos(a))+","+(this._y1=n+e*Math.sin(a))))},rect:function(t,i,h,s){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +h+"v"+ +s+"h"+-h+"Z"},toString:function(){return this._}};export{n as p}