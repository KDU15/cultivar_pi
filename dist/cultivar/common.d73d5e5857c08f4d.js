"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7693:(C,m,d)=>{d.d(m,{c:()=>r});var v=d(4083),i=d(7864),l=d(1898);const r=(s,n)=>{let e,t;const a=(u,_,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(u,_);E&&n(E)?E!==e&&(h(),c(E,p)):h()},c=(u,_)=>{e=u,t||(t=e);const p=e;(0,v.w)(()=>p.classList.add("ion-activated")),_()},h=(u=!1)=>{if(!e)return;const _=e;(0,v.w)(()=>_.classList.remove("ion-activated")),u&&t!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>a(u.currentX,u.currentY,i.a),onMove:u=>a(u.currentX,u.currentY,i.b),onEnd:()=>{h(!0),(0,i.h)(),t=void 0}})}},2225:(C,m,d)=>{d.d(m,{g:()=>v});const v=(n,e,t,a,c)=>l(n[1],e[1],t[1],a[1],c).map(h=>i(n[0],e[0],t[0],a[0],h)),i=(n,e,t,a,c)=>c*(3*e*Math.pow(c-1,2)+c*(-3*t*c+3*t+a*c))-n*Math.pow(c-1,3),l=(n,e,t,a,c)=>s((a-=c)-3*(t-=c)+3*(e-=c)-(n-=c),3*t-6*e+3*n,3*e-3*n,n).filter(u=>u>=0&&u<=1),s=(n,e,t,a)=>{if(0===n)return((n,e,t)=>{const a=e*e-4*n*t;return a<0?[]:[(-e+Math.sqrt(a))/(2*n),(-e-Math.sqrt(a))/(2*n)]})(e,t,a);const c=(3*(t/=n)-(e/=n)*e)/3,h=(2*e*e*e-9*e*t+27*(a/=n))/27;if(0===c)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-c),-Math.sqrt(-c)];const u=Math.pow(h/2,2)+Math.pow(c/3,3);if(0===u)return[Math.pow(h/2,.5)-e/3];if(u>0)return[Math.pow(-h/2+Math.sqrt(u),1/3)-Math.pow(h/2+Math.sqrt(u),1/3)-e/3];const _=Math.sqrt(Math.pow(-c/3,3)),p=Math.acos(-h/(2*Math.sqrt(Math.pow(-c/3,3)))),E=2*Math.pow(_,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5062:(C,m,d)=>{d.d(m,{i:()=>v});const v=i=>i&&""!==i.dir?"rtl"===i.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(C,m,d)=>{d.r(m),d.d(m,{startFocusVisible:()=>r});const v="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,a=s||document.body,c=M=>{n.forEach(g=>g.classList.remove(v)),M.forEach(g=>g.classList.add(v)),n=M},h=()=>{e=!1,c([])},u=M=>{e=l.includes(M.key),e||c([])},_=M=>{if(e&&void 0!==M.composedPath){const g=M.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));c(g)}},p=()=>{t.activeElement===a&&c([])};return t.addEventListener("keydown",u),t.addEventListener("focusin",_),t.addEventListener("focusout",p),t.addEventListener("touchstart",h),t.addEventListener("mousedown",h),{destroy:()=>{t.removeEventListener("keydown",u),t.removeEventListener("focusin",_),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",h),t.removeEventListener("mousedown",h)},setFocus:c}}},8689:(C,m,d)=>{d.d(m,{c:()=>i});var v=d(3577);const i=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const c=void 0!==e.label||l(e),h=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,u=(0,v.h)(e);t=!0===e.legacy||!c&&!h&&null!==u}return t}}},l=n=>null!==n.shadowRoot&&!!(r.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||s.includes(n.tagName)&&""!==n.textContent),r=["ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(C,m,d)=>{d.d(m,{a:()=>r,b:()=>s,c:()=>l,d:()=>e,h:()=>n});const v={getEngine(){var t;const a=window;return a.TapticEngine||(null===(t=a.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&a.Capacitor.Plugins.Haptics},available(){var t;const a=window;return!!this.getEngine()&&("web"!==(null===(t=a.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const a=this.getEngine();if(!a)return;const c=this.isCapacitor()?t.style.toUpperCase():t.style;a.impact({style:c})},notification(t){const a=this.getEngine();if(!a)return;const c=this.isCapacitor()?t.style.toUpperCase():t.style;a.notification({style:c})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>v.available(),l=()=>{i()&&v.selection()},r=()=>{i()&&v.selectionStart()},s=()=>{i()&&v.selectionChanged()},n=()=>{i()&&v.selectionEnd()},e=t=>{i()&&v.impact(t)}},7366:(C,m,d)=>{d.d(m,{a:()=>v,b:()=>_,c:()=>e,d:()=>p,e:()=>D,f:()=>n,g:()=>E,h:()=>l,i:()=>i,j:()=>w,k:()=>y,l:()=>t,m:()=>h,n:()=>M,o:()=>c,p:()=>s,q:()=>r,r:()=>o,s:()=>O,t:()=>u,u:()=>g,v:()=>f,w:()=>a});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2055:(C,m,d)=>{d.d(m,{I:()=>n,a:()=>c,b:()=>s,c:()=>_,d:()=>E,f:()=>h,g:()=>a,i:()=>t,p:()=>p,r:()=>M,s:()=>u});var v=d(5861),i=d(3577),l=d(1178);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=g=>"ION-CONTENT"===g.tagName,a=function(){var g=(0,v.Z)(function*(f){return t(f)?(yield new Promise(o=>(0,i.c)(f,o)),f.getScrollElement()):f});return function(o){return g.apply(this,arguments)}}(),c=g=>g.querySelector(n)||g.querySelector(e),h=g=>g.closest(e),u=(g,f)=>t(g)?g.scrollToTop(f):Promise.resolve(g.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),_=(g,f,o,w)=>t(g)?g.scrollByPoint(f,o,w):Promise.resolve(g.scrollBy({top:o,left:f,behavior:w>0?"smooth":"auto"})),p=g=>(0,l.b)(g,s),E=g=>{if(t(g)){const o=g.scrollY;return g.scrollY=!1,o}return g.style.setProperty("overflow","hidden"),!0},M=(g,f)=>{t(g)?g.scrollY=f:g.style.removeProperty("overflow")}},9240:(C,m,d)=>{d.d(m,{g:()=>i});var v=d(1178);const i=(r,s,n)=>{const e=null==r?0:r.toString().length,t=l(e,s);if(void 0===n)return t;try{return n(e,s)}catch(a){return(0,v.a)("Exception in provided `counterFormatter`.",a),t}},l=(r,s)=>`${r} / ${s}`},5234:(C,m,d)=>{d.r(m),d.d(m,{KEYBOARD_DID_CLOSE:()=>i,KEYBOARD_DID_OPEN:()=>v,copyVisualViewport:()=>f,keyboardDidClose:()=>p,keyboardDidOpen:()=>u,keyboardDidResize:()=>_,resetKeyboardAssist:()=>e,setKeyboardClose:()=>h,setKeyboardOpen:()=>c,startKeyboardAssist:()=>t,trackViewportChanges:()=>g});const v="ionKeyboardDidShow",i="ionKeyboardDidHide";let r={},s={},n=!1;const e=()=>{r={},s={},n=!1},t=o=>{a(o),o.visualViewport&&(s=f(o.visualViewport),o.visualViewport.onresize=()=>{g(o),u()||_(o)?c(o):p(o)&&h(o)})},a=o=>{o.addEventListener("keyboardDidShow",w=>c(o,w)),o.addEventListener("keyboardDidHide",()=>h(o))},c=(o,w)=>{E(o,w),n=!0},h=o=>{M(o),n=!1},u=()=>!n&&r.width===s.width&&(r.height-s.height)*s.scale>150,_=o=>n&&!p(o),p=o=>n&&s.height===o.innerHeight,E=(o,w)=>{const O=new CustomEvent(v,{detail:{keyboardHeight:w?w.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(O)},M=o=>{const w=new CustomEvent(i);o.dispatchEvent(w)},g=o=>{r=Object.assign({},s),s=f(o.visualViewport)},f=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},5149:(C,m,d)=>{d.d(m,{K:()=>l,a:()=>r,c:()=>e});var v=d(5861),i=d(4110),l=(()=>((l=l||{}).Body="body",l.Ionic="ionic",l.Native="native",l.None="none",l))();const r={getEngine(){var t;return(null===(t=null==i.w?void 0:i.w.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Keyboard"))&&(null==i.w?void 0:i.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const t=this.getEngine();return t&&t.getResizeMode?t.getResizeMode():Promise.resolve(void 0)}},s=t=>{if(void 0===i.d||t===l.None||void 0===t)return null;const a=i.d.querySelector("ion-app");return null!=a?a:i.d.body},n=t=>{const a=s(t);return null===a?0:a.clientHeight},e=function(){var t=(0,v.Z)(function*(a){let c,h,u,_;const p=function(){var o=(0,v.Z)(function*(){const w=yield r.getResizeMode(),y=void 0===w?void 0:w.mode;c=()=>{void 0===_&&(_=n(y)),u=!0,E(u,y)},h=()=>{u=!1,E(u,y)},null==i.w||i.w.addEventListener("keyboardWillShow",c),null==i.w||i.w.addEventListener("keyboardWillHide",h)});return function(){return o.apply(this,arguments)}}(),E=(o,w)=>{a&&a(o,M(w))},M=o=>{if(0===_||_===n(o))return;const w=s(o);return null!==w?new Promise(y=>{const D=new ResizeObserver(()=>{w.clientHeight===_&&(D.disconnect(),y())});D.observe(w)}):void 0};return yield p(),{init:p,destroy:()=>{null==i.w||i.w.removeEventListener("keyboardWillShow",c),null==i.w||i.w.removeEventListener("keyboardWillHide",h),c=h=void 0},isKeyboardVisible:()=>u}});return function(c){return t.apply(this,arguments)}}()},6690:(C,m,d)=>{d.d(m,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(l,r,s)=>{const n=l*r/s-l+"ms",e=2*Math.PI*r/s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(l,r,s)=>{const n=r/s,e=l*n-l+"ms",t=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,r,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*r+(r<s/2?180:-180)}deg)`,"animation-delay":l*r/s-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,r,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*r+(r<s/2?180:-180)}deg)`,"animation-delay":l*r/s-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,r,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/s-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,r,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/s-l+"ms"}})}}},7539:(C,m,d)=>{d.r(m),d.d(m,{createSwipeBackGesture:()=>s});var v=d(3577),i=d(5062),l=d(1898);d(4349);const s=(n,e,t,a,c)=>{const h=n.ownerDocument.defaultView;let u=(0,i.i)(n);const p=o=>u?-o.deltaX:o.deltaX;return(0,l.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(u=(0,i.i)(n),(o=>{const{startX:y}=o;return u?y>=h.innerWidth-50:y<=50})(o)&&e()),onStart:t,onMove:o=>{const y=p(o)/h.innerWidth;a(y)},onEnd:o=>{const w=p(o),y=h.innerWidth,O=w/y,D=(o=>u?-o.velocityX:o.velocityX)(o),L=D>=0&&(D>.2||w>y/2),b=(L?1-O:O)*y;let x=0;if(b>5){const k=b/Math.abs(D);x=Math.min(k,540)}c(L,O<=0?.01:(0,v.l)(0,O,.9999),x)}})}},7556:(C,m,d)=>{d.d(m,{e:()=>l});var v=d(3020),i=d(3144);let l=(()=>{class r{constructor(n){this.http=n}loginRequest(n,e){return new Headers({}),this.http.post("",{})}setPix(n,e,t,a){sessionStorage.setItem("pix",JSON.stringify({nome:n,cidade:e,saida:t,chave:a}))}getPix(){return JSON.parse(sessionStorage.getItem("pix"))}}return r.\u0275fac=function(n){return new(n||r)(v.LFG(i.eN))},r.\u0275prov=v.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},4471:(C,m,d)=>{d.d(m,{b:()=>r});var v=d(5861),i=d(3020),l=d(7002);let r=(()=>{class s{constructor(e){this.load=e}presentLoading(){var e=this;return(0,v.Z)(function*(){yield(yield e.load.create({spinner:"crescent",cssClass:"loading-class",translucent:!1,backdropDismiss:!0,showBackdrop:!0,animated:!0})).present()})()}dismiss(){this.load.dismiss()}}return s.\u0275fac=function(e){return new(e||s)(i.LFG(l.HT))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);