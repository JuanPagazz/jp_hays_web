import{$ as O,Aa as nt,B as Ue,C as Ge,Ca as te,D as ee,Da as f,E as U,Ea as it,F as C,Fa as ot,G as k,J as G,K as w,L as He,M as We,Ma as rt,N as $e,O as ze,Qa as ne,R as A,S as qe,T as p,U as T,V as F,W as pe,X as me,Y as H,Z as Ke,_ as Ze,a as c,aa as m,ba as b,ca as N,d as j,e as Ne,f as Re,ha as R,ia as Qe,ja as Ye,ka as Xe,l as Pe,la as Je,ma as et,na as fe,o as Le,oa as _e,p as Be,pa as tt,qa as I,r as ge,s as u,sa as W,t as S,u as h,va as be,w as s,wa as ve,x as je,za as $}from"./chunk-JJHY5JYZ.js";function z(i){return i.buttons===0||i.detail===0}function q(i){let o=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var ye;function st(){if(ye==null){let i=typeof document<"u"?document.head:null;ye=!!(i&&(i.createShadowRoot||i.attachShadow))}return ye}function Ce(i){if(st()){let o=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function y(i){return i.composedPath?i.composedPath()[0]:i.target}var Me;try{Me=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Me=!1}var M=(()=>{class i{_platformId=s(We);isBrowser=this._platformId?ot(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Me)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var K;function at(){if(K==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>K=!0}))}finally{K=K||!1}return K}function P(i){return at()?i:!!i.capture}function D(i){return i instanceof w?i.nativeElement:i}var lt=new h("cdk-input-modality-detector-options"),ct={ignoreKeys:[18,17,224,91,16]},dt=650,De={passive:!0,capture:!0},ut=(()=>{class i{_platform=s(M);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ne(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=y(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<dt||(this._modality.next(z(e)?"keyboard":"mouse"),this._mostRecentTarget=y(e))};_onTouchstart=e=>{if(q(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=y(e)};constructor(){let e=s(k),t=s(U),n=s(lt,{optional:!0});if(this._options=c(c({},ct),n),this.modalityDetected=this._modality.pipe(Le(1)),this.modalityChanged=this.modalityDetected.pipe(Pe()),this._platform.isBrowser){let r=s(qe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,De),r.listen(t,"mousedown",this._onMousedown,De),r.listen(t,"touchstart",this._onTouchstart,De)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Z=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Z||{}),ht=new h("cdk-focus-monitor-default-options"),ie=P({passive:!0,capture:!0}),Ee=(()=>{class i{_ngZone=s(k);_platform=s(M);_inputModalityDetector=s(ut);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(U);_stopInputModalityDetector=new j;constructor(){let e=s(ht,{optional:!0});this._detectionMode=e?.detectionMode||Z.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=y(e);for(let n=t;n;n=n.parentElement)e.type==="focus"?this._onFocus(e,n):this._onBlur(e,n)};monitor(e,t=!1){let n=D(e);if(!this._platform.isBrowser||n.nodeType!==1)return Re();let r=Ce(n)||this._document,a=this._elementInfo.get(n);if(a)return t&&(a.checkChildren=!0),a.subject;let l={checkChildren:t,subject:new j,rootNode:r};return this._elementInfo.set(n,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=D(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let r=D(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([l,v])=>this._originChanged(l,t,v)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Z.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Z.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?dt:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),r=y(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,ie),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,ie)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Be(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ie),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ie),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var oe=new WeakMap,Q=(()=>{class i{_appRef;_injector=s(ee);_environmentInjector=s(je);load(e){let t=this._appRef=this._appRef||this._injector.get(pe),n=oe.get(t);n||(n={loaders:new Set,refs:[]},oe.set(t,n),t.onDestroy(()=>{oe.get(t)?.refs.forEach(r=>r.destroy()),oe.delete(t)})),n.loaders.has(e)||(n.loaders.add(e),n.refs.push(it(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var re;function Lt(){if(re===void 0&&(re=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(re=i.trustedTypes.createPolicy("angular#components",{createHTML:o=>o}))}return re}function Ln(i){return Lt()?.createHTML(i)||i}var gt=new Set,V,we=(()=>{class i{_platform=s(M);_nonce=s(ze,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):jt}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Bt(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Bt(i,o){if(!gt.has(i))try{V||(V=document.createElement("style"),o&&V.setAttribute("nonce",o),V.setAttribute("type","text/css"),document.head.appendChild(V)),V.sheet&&(V.sheet.insertRule(`@media ${i} {body{ }}`,0),gt.add(i))}catch(e){console.error(e)}}function jt(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}function pt(i,...o){return o.length?o.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Ae={},L=class i{_appId=s(He);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,e=!1){return this._appId!=="ng"&&(o+=this._appId),Ae.hasOwnProperty(o)||(Ae[o]=0),`${o}${e?i._infix+"-":""}${Ae[o]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ut=new h("cdk-dir-doc",{providedIn:"root",factory:()=>s(U)}),Gt=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function mt(i){let o=i?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?Gt.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var Ie=(()=>{class i{get value(){return this.valueSignal()}valueSignal=G("ltr");change=new C;constructor(){let e=s(Ut,{optional:!0});if(e){let t=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(mt(t||n||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var se=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=T({type:i});static \u0275inj=S({})}return i})();var Y=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new j;constructor(o=!1,e,t=!0,n){this._multiple=o,this._emitChanges=t,this.compareWith=n,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var ft=new h("");var Ht=new h("MATERIAL_ANIMATIONS"),_t=null;function Wt(){return s(Ht,{optional:!0})?.animationsDisabled||s($e,{optional:!0})==="NoopAnimations"?"di-disabled":(_t??=s(we).matchMedia("(prefers-reduced-motion)").matches,_t?"reduced-motion":"enabled")}function B(){return Wt()!=="enabled"}var _=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(_||{}),Ve=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=_.HIDDEN;constructor(o,e,t,n=!1){this._renderer=o,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},bt=P({passive:!0,capture:!0}),xe=class{_events=new Map;addHandler(o,e,t,n){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(n):r.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),o.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,bt)})}removeHandler(o,e,t){let n=this._events.get(o);if(!n)return;let r=n.get(e);r&&(r.delete(t),r.size===0&&n.delete(e),n.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,bt)))}_delegateEventHandler=o=>{let e=y(o);e&&this._events.get(o.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(r=>r.handleEvent(o))})}},vt={enterDuration:225,exitDuration:150},$t=800,yt=P({passive:!0,capture:!0}),Ct=["mousedown","touchstart"],Mt=["mouseup","mouseleave","touchend","touchcancel"],zt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Se=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new xe;constructor(o,e,t,n,r){this._target=o,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=D(t)),r&&r.get(Q).load(zt)}fadeInRipple(o,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=c(c({},vt),t.animation);t.centered&&(o=n.left+n.width/2,e=n.top+n.height/2);let a=t.radius||qt(o,e,n),l=o-n.left,v=e-n.top,x=r.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${l-a}px`,d.style.top=`${v-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,t.color!=null&&(d.style.backgroundColor=t.color),d.style.transitionDuration=`${x}ms`,this._containerElement.appendChild(d);let X=window.getComputedStyle(d),Pt=X.transitionProperty,Te=X.transitionDuration,ue=Pt==="none"||Te==="0s"||Te==="0s, 0s"||n.width===0&&n.height===0,E=new Ve(this,d,t,ue);d.style.transform="scale3d(1, 1, 1)",E.state=_.FADING_IN,t.persistent||(this._mostRecentTransientRipple=E);let J=null;return!ue&&(x||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Fe=()=>{J&&(J.fallbackTimer=null),clearTimeout(Oe),this._finishRippleTransition(E)},he=()=>this._destroyRipple(E),Oe=setTimeout(he,x+100);d.addEventListener("transitionend",Fe),d.addEventListener("transitioncancel",he),J={onTransitionEnd:Fe,onTransitionCancel:he,fallbackTimer:Oe}}),this._activeRipples.set(E,J),(ue||!x)&&this._finishRippleTransition(E),E}fadeOutRipple(o){if(o.state===_.FADING_OUT||o.state===_.HIDDEN)return;let e=o.element,t=c(c({},vt),o.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",o.state=_.FADING_OUT,(o._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let e=D(o);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ct.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Mt.forEach(e=>{this._triggerElement.addEventListener(e,this,yt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===_.FADING_IN?this._startFadeOutTransition(o):o.state===_.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let e=o===this._mostRecentTransientRipple,{persistent:t}=o.config;o.state=_.VISIBLE,!t&&(!e||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let e=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=_.HIDDEN,e!==null&&(o.element.removeEventListener("transitionend",e.onTransitionEnd),o.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),o.element.remove()}_onMousedown(o){let e=z(o),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+$t;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!q(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=o.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let e=o.state===_.VISIBLE||o.config.terminateOnPointerUp&&o.state===_.FADING_IN;!o.config.persistent&&e&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(Ct.forEach(e=>i._eventManager.removeHandler(e,o,this)),this._pointerUpEventsRegistered&&(Mt.forEach(e=>o.removeEventListener(e,this,yt)),this._pointerUpEventsRegistered=!1))}};function qt(i,o,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(o-e.top),Math.abs(o-e.bottom));return Math.sqrt(t*t+n*n)}var Kt=new h("mat-ripple-global-options"),Dt=(()=>{class i{_elementRef=s(w);_animationsDisabled=B();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(k),t=s(M),n=s(Kt,{optional:!0}),r=s(ee);this._globalOptions=n||{},this._rippleRenderer=new Se(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:c(c(c({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,c(c({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,c(c({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,n){t&2&&I("mat-ripple-unbounded",n.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Et=(()=>{class i{_animationsDisabled=B();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&I("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var wt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var At=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=T({type:i});static \u0275inj=S({imports:[se]})}return i})();var tn=["button"],nn=["*"];function on(i,o){if(i&1&&(m(0,"div",2),N(1,"mat-pseudo-checkbox",6),b()),i&2){let e=Qe();A(),O("disabled",e.disabled)}}var It=new h("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Vt=new h("MatButtonToggleGroup"),rn={provide:ft,useExisting:ge(()=>ke),multi:!0},ae=class{source;value;constructor(o,e){this.source=o,this.value=e}},ke=(()=>{class i{_changeDetector=s(te);_dir=s(Ie,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=s(L).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new C;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new C;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=s(It,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Y(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||pt(e))return;let n=e.target.id,r=this._buttonToggles.toArray().findIndex(l=>l.buttonId===n),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(r)||null;break;case 38:a=this._getNextButton(r,-1);break;case 37:a=this._getNextButton(r,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(r,1);break;case 39:a=this._getNextButton(r,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let t=new ae(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let r=1;r<=n.length;r++){let a=(e+t*r+n.length)%n.length,l=n.get(a);if(l&&!l.disabled)return l}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,r){if(t&1&&Je(r,le,5),t&2){let a;fe(a=_e())&&(n._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&R("keydown",function(a){return n._keydown(a)}),t&2&&(H("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),I("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",f],value:"value",multiple:[2,"multiple","multiple",f],disabled:[2,"disabled","disabled",f],disabledInteractive:[2,"disabledInteractive","disabledInteractive",f],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",f],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",f]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[ve([rn,{provide:Vt,useExisting:i}])]})}return i})(),le=(()=>{class i{_changeDetectorRef=s(te);_elementRef=s(w);_focusMonitor=s(Ee);_idGenerator=s(L);_animationDisabled=B();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new C;constructor(){s(Q).load(wt);let e=s(Vt,{optional:!0}),t=s(new nt("tabindex"),{optional:!0})||"",n=s(It,{optional:!0});this._tabIndex=G(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new ae(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&et(tn,5),t&2){let r;fe(r=_e())&&(n._buttonElement=r.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&R("focus",function(){return n.focus()}),t&2&&(H("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),I("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",f],appearance:"appearance",checked:[2,"checked","checked",f],disabled:[2,"disabled","disabled",f],disabledInteractive:[2,"disabledInteractive","disabledInteractive",f]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:nn,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(Ye(),m(0,"button",1,0),R("click",function(){return n._onButtonClick()}),Ke(2,on,2,1,"div",2),m(3,"span",3),Xe(4),b()(),N(5,"span",4)(6,"span",5)),t&2){let r=tt(1);O("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),H("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),A(2),Ze(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),A(4),O("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[Dt,Et],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return i})(),xt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=T({type:i});static \u0275inj=S({imports:[At,le,se]})}return i})();var St={presentation:{greeting:"Hi, I am",role:"Front-End",frontend:"Developer",description:"I create modern, functional and responsive interfaces focused on user experience."},cards:{question:"What are you looking for?",freelanceLabel:"FREELANCE",freelanceTitle:"I need",freelanceTitleGreen:"a website",freelanceDescription:"If you have a business, project or idea and need a modern, functional website, I can help you.",freelanceLink:"View my services",hiringLabel:"HIRE ME",hiringTitle:"I am looking",hiringTitleBr:"for a",hiringTitlePurple:"developer",hiringDescription:"If you are looking for a committed junior developer with web development skills, you can learn more about me here.",hiringLink:"Professional profile"},footer:{available:"Available for new opportunities"},navigation:{menu:"Main navigation",home:"Home",services:"Services",projects:"Projects",contact:"Contact",spanish:"Switch language to Spanish",english:"Switch language to English"},intro:{role:"Front End developer",explore:"Explore"}};var kt={presentation:{greeting:"Hola, soy",role:"Desarrollador",frontend:"Front-End",description:"Creo interfaces modernas, funcionales y responsivas, enfoc\xE1ndome en la experiencia de usuario."},cards:{question:"\xBFQu\xE9 est\xE1s buscando?",freelanceLabel:"FREELANCE",freelanceTitle:"Necesito una",freelanceTitleGreen:"p\xE1gina web",freelanceDescription:"Si tienes un negocio, proyecto o idea y necesitas una p\xE1gina web moderna, funcional y a tu medida, puedo ayudarte.",freelanceLink:"Ver mis servicios",hiringLabel:"CONTR\xC1TAME",hiringTitle:"Estoy buscando",hiringTitleBr:"un",hiringTitlePurple:"desarrollador",hiringDescription:"Si buscas un perfil junior con ganas de aprender, comprometido y con habilidades en desarrollo web, aqu\xED puedes conocer m\xE1s sobre m\xED.",hiringLink:"Perfil profesional"},footer:{available:"Disponible para nuevas oportunidades"},navigation:{menu:"Navegaci\xF3n principal",home:"Inicio",services:"Servicios",projects:"Proyectos",contact:"Contacto",spanish:"Cambiar idioma a espa\xF1ol",english:"Cambiar idioma a ingl\xE9s"},intro:{role:"Desarrollador Front-End",explore:"Explorar"}};var Tt={presentation:{available:"AVAILABLE FOR NEW PROJECTS",title:"Your idea deserves",greenTitle:"a great website.",description:"I design and develop websites that connect your idea with people. Clear, functional, and full of personality. Just like your project.",colorButton:"Let's talk about your idea",button:"Explore my work",footer:"From the first conversation to the very last detail"}};var Ft={presentation:{available:"DISPONIBLE PARA NUEVOS PROYECTOS",title:"Tu idea merece",greenTitle:"una gran web.",description:"Dise\xF1o y desarrollo sitios web que conectan tu idea con las personas. Claros, funcionales y con personalidad. Como tu proyecto.",colorButton:"Hablemos de tu idea",button:"Explorar mi trabajo",footer:"De la primera conversacion al \xFAltimo detalle"}};var Ot={presentation:{available:"ABIERTO A NUEVAS OPORTUNIDADES",title:"Un nuevo reto.",purpleTitle:"Muchas ganas.",description:"Soy Juan Pablo, desarrollador front-end. Quiero construir experiencias \xFAtiles, aprender en equipo y aportar desde el primer d\xEDa.",colorButton:"Conversemos",button:"Explorar mi trabajo",footer:"Front-end \xB7 Angular \xB7 Aprendizaje continuo"}};var Nt={presentation:{available:"OPEN TO NEW OPPORTUNITIES",title:"A new challenge",purpleTitle:"Can't wait for it.",description:"My name is Juan Pablo, and I'm a front-end developer. I want to build useful experiences, learn as part of a team, and contribute from day one.",colorButton:"Let's talk",button:"Explore my work",footer:"Front-end \xB7 Angular \xB7 Continuous learning"}};var ce=class i{languageService=s(ne);home=$(()=>this.languageService.language()==="en"?St:kt);freelancer=$(()=>this.languageService.language()==="en"?Tt:Ft);hiring=$(()=>this.languageService.language()==="en"?Nt:Ot);static \u0275fac=function(e){return new(e||i)};static \u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})};var de=class i{translations=s(ce);languageService=s(ne);router=s(rt);changeLanguage(o){let e=o.value;if(!this.languageService.isSupported(e))return;let t=this.router.url,[n,r]=t.split("#",2),[a,l]=n.split("?",2),v=a.split("/").filter(Boolean);if(v.length===0){this.router.navigate(["/",e]);return}this.languageService.isSupported(v[0])?v[0]=e:v.unshift(e);let x=`/${v.join("/")}`,d=l?`?${l}`:"",X=r?`#${r}`:"";this.router.navigateByUrl(`${x}${d}${X}`)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-language-selector"]],decls:5,vars:5,consts:[["name","language",1,"selector-idioma",3,"change","value"],["value","es",3,"aria-label"],["value","en",3,"aria-label"]],template:function(e,t){e&1&&(m(0,"mat-button-toggle-group",0),R("change",function(r){return t.changeLanguage(r)}),m(1,"mat-button-toggle",1),W(2,"ES"),b(),m(3,"mat-button-toggle",2),W(4,"EN"),b()()),e&2&&(O("value",t.languageService.language()),A(),me("aria-label",be(t.translations.home().navigation.spanish)),A(2),me("aria-label",be(t.translations.home().navigation.english)))},dependencies:[xt,ke,le],styles:[".selector-idioma .mat-button-toggle-checkbox-wrapper,   .selector-idioma .mat-pseudo-checkbox{display:none!important}.selector-idioma[_ngcontent-%COMP%]{width:4.25rem;height:1.85rem;border:1px solid white;display:flex;z-index:5}  .selector-idioma .mat-button-toggle{flex:1 1 0;min-width:0;background-color:#03070d;color:#8e9cae;font-size:.78rem;text-align:center;transition:all .4s linear}  .selector-idioma .mat-button-toggle-button{width:100%;height:100%}.selector-idioma[_ngcontent-%COMP%]   .mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#00ffa3;color:#03070d}  .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0!important;height:100%}  .mat-button-toggle-label-content{height:100%!important;display:flex!important;align-items:center}@media(min-width:768px){.selector-idioma[_ngcontent-%COMP%]{width:4.5rem;height:2rem}  .selector-idioma .mat-button-toggle{font-size:.83rem}}@media(min-width:1024px){.selector-idioma[_ngcontent-%COMP%]{width:5.5rem;height:2.4rem}  .selector-idioma .mat-button-toggle{font-size:.94rem}}@media(min-width:1440px){.selector-idioma[_ngcontent-%COMP%]{width:clamp(7.5rem,6vw,9.25rem);height:clamp(3.25rem,3vw,3.85rem)}  .selector-idioma .mat-button-toggle{font-size:clamp(1.27rem,1.1vw,1.5rem)}}"]})};var Rt=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-header"]],decls:9,vars:0,consts:[[1,"logo"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 100 100"],["d","M 33 32 L 13 50 L 33 68","stroke","#4be3b5","stroke-width","7","stroke-linecap","round","stroke-linejoin","round","fill","none"],["d","M 67 32 L 87 50 L 67 68","stroke","#4be3b5","stroke-width","7","stroke-linecap","round","stroke-linejoin","round","fill","none"],["d","M 54 24 L 46 76","stroke","#4be3b5","stroke-width","7","stroke-linecap","round","stroke-linejoin","round","fill","none"]],template:function(e,t){e&1&&(m(0,"header")(1,"div",0),Ue(),m(2,"svg",1),N(3,"path",2)(4,"path",3)(5,"path",4),b(),Ge(),m(6,"h1"),W(7,"Juan Pablo Hays Garza"),b()(),N(8,"app-language-selector"),b())},dependencies:[de],styles:["header[_ngcontent-%COMP%]{width:100%;max-height:3.5rem;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;z-index:5}.logo[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:.5rem;z-index:5}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.95rem;height:1.95rem;z-index:5}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:1.25rem;line-height:1rem;z-index:5}@media(min-width:768px){header[_ngcontent-%COMP%]{max-height:4rem}.logo[_ngcontent-%COMP%]{gap:.6rem}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:2.2rem;width:2.2rem}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.32rem}}@media(min-width:1024px){header[_ngcontent-%COMP%]{max-height:clamp(4.75rem,6.5vh,5.5rem)}.logo[_ngcontent-%COMP%]{gap:.85rem}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:2.75rem;width:2.75rem}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}}@media(min-width:1440px){header[_ngcontent-%COMP%]{max-height:clamp(6.5rem,8vh,8.5rem)}.logo[_ngcontent-%COMP%]{gap:clamp(1.15rem,1.2vw,1.6rem)}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:clamp(3.3rem,3.08vw,4.4rem);width:clamp(3.3rem,3.08vw,4.4rem)}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(2.05rem,1.65vw,2.6rem)}}"]})};export{ce as a,Ln as b,se as c,de as d,Rt as e};
