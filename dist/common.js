var t,e;(t=self.document)&&!t.getElementById("livereloadscript")&&((e=t.createElement("script")).async=1,e.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",t.getElementsByTagName("head")[0].appendChild(e));module.exports=class{constructor(t){t=t||{},this.canvas=null,this.fillStyle=t.fillStyle||"#fff",this.text=t.text||"",this.quality=t.quality||.5}createDom(){this.canvas=document.createElement("canvas")}getImgInfo(t){return new Promise(((e,a)=>{let i=new FileReader;i.onload=function(t){let a=new Image;a.src=t.target.result,a.onload=function(){e({width:this.width,height:this.height,image:this})}},i.readAsDataURL(t)}))}setWaterMark({img:t,text:e}){return new Promise((async a=>{e&&(this.text=e),this.context||this.createDom();let i=this.canvas.getContext("2d");const{width:s,height:n,image:l}=await this.getImgInfo(t);i.reset(),i.restore(),this.canvas.width=s,this.canvas.height=n,i.font=`bold ${s/20}px serif`,i.fillStyle=this.fillStyle,i.drawImage(l,0,0,s,n);const o=i.measureText(this.text),c=o.actualBoundingBoxLeft+o.actualBoundingBoxRight,h=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent;i.fillText(e,s-c,n-h),a(this.canvas.toDataURL("image/jpeg"))}))}destoryCanvas(){this.canvas=null}};
