import{a as I,b as w,c as D,d as P,f as S}from"./chunk-M3QE6FC7.js";import{Aa as v,Da as b,O as h,Oa as F,Q as c,T as m,Ua as R,W as d,_ as u,ab as _,ba as g,ka as f,lb as N,ra as y,ya as A,za as C}from"./chunk-K32STE2J.js";var M=[{path:"portfolio-website",loadChildren:()=>import("./chunk-YNIQWJP7.js").then(n=>n.PortfolioWebsiteModule)}];var k="@",j=(()=>{let e=class e{constructor(o,r,i,s,a){this.doc=o,this.delegate=r,this.zone=i,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=d(C,{optional:!0}),this.loadingSchedulerFn=d(B,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let o=()=>this.moduleImpl??import("./chunk-SIIGR3WC.js").then(i=>i),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(o):r=o(),r.catch(i=>{throw new h(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let a=new s(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(o,r){let i=this.delegate.createRenderer(o,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new p(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let T=a.createRenderer(o,r);s.use(T),this.scheduler?.notify(10)}).catch(a=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){A()},e.\u0275prov=c({token:e,factory:e.\u0275fac});let n=e;return n})(),p=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(k)}},B=new m("");function E(n="animations"){return b("NgAsyncAnimations"),g([{provide:v,useFactory:(e,t,o)=>new j(e,t,o,n),deps:[N,I,f]},{provide:y,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var O={providers:[_({eventCoalescing:!0}),S(M),D(),E()]};var l=class n{title="simangafolio";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["app-root"]],standalone:!0,features:[R],decls:1,vars:0,template:function(t,o){t&1&&F(0,"router-outlet")},dependencies:[P]})};w(l,O).catch(n=>console.error(n));
