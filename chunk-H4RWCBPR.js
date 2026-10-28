import{b as tt}from"./chunk-KKLBDUV7.js";import{B as Ne,Da as ge,E as Re,Ea as N,Fa as We,Ga as $e,Ha as ee,I as he,Ia as v,J as d,Ja as y,K as C,Ka as F,La as m,M as c,Ma as A,Na as H,O as s,Oa as z,Pa as qe,Qa as Ke,R as Pe,Ra as Ze,Sa as Qe,T as Le,Ta as Ye,U as Be,Ua as me,V as j,Va as pe,W as G,Wa as Xe,Xa as I,Ya as p,Z as E,Za as te,_ as O,a as l,ab as Je,ca as U,eb as ne,fa as w,g as B,gb as _,h as Fe,ha as je,hb as et,ja as Ge,k as Te,ka as Ue,la as He,oa as J,ta as ze,x as Oe,xa as f,ya as M,za as k}from"./chunk-LEUQYYOC.js";var nt=new c("");var St=new c("",{factory:()=>it}),it="always";var kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=M({type:n});static \u0275inj=C({})}return n})();var ot=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:St,useValue:e.callSetDisabledState??it}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=M({type:n});static \u0275inj=C({imports:[kt]})}return n})();function W(n){return n.buttons===0||n.detail===0}function $(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var fe;function rt(){if(fe==null){let n=typeof document<"u"?document.head:null;fe=!!(n&&(n.createShadowRoot||n.attachShadow))}return fe}function _e(n){if(rt()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function D(n){return n.composedPath?n.composedPath()[0]:n.target}var be;try{be=typeof Intl<"u"&&Intl.v8BreakIterator}catch{be=!1}var x=(()=>{class n{_platformId=s(Ge);isBrowser=this._platformId?tt(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||be)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var q;function st(){if(q==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>q=!0}))}finally{q=q||!1}return q}function R(n){return st()?n:!!n.capture}function V(n){return n instanceof w?n.nativeElement:n}var at=new c("cdk-input-modality-detector-options"),lt={ignoreKeys:[18,17,224,91,16]},ct=650,ve={passive:!0,capture:!0},dt=(()=>{class n{_platform=s(x);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Fe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=D(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ct||(this._modality.next(W(e)?"keyboard":"mouse"),this._mostRecentTarget=D(e))};_onTouchstart=e=>{if($(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=D(e)};constructor(){let e=s(O),t=s(G),i=s(at,{optional:!0});if(this._options=l(l({},lt),i),this.modalityDetected=this._modality.pipe(Ne(1)),this.modalityChanged=this.modalityDetected.pipe(Oe()),this._platform.isBrowser){let r=s(ze).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,ve),r.listen(t,"mousedown",this._onMousedown,ve),r.listen(t,"touchstart",this._onTouchstart,ve)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),K=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(K||{}),ut=new c("cdk-focus-monitor-default-options"),ie=R({passive:!0,capture:!0}),ye=(()=>{class n{_ngZone=s(O);_platform=s(x);_inputModalityDetector=s(dt);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(G);_stopInputModalityDetector=new B;constructor(){let e=s(ut,{optional:!0});this._detectionMode=e?.detectionMode||K.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=D(e);for(let i=t;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,t=!1){let i=V(e);if(!this._platform.isBrowser||i.nodeType!==1)return Te();let r=_e(i)||this._document,a=this._elementInfo.get(i);if(a)return t&&(a.checkChildren=!0),a.subject;let h={checkChildren:t,subject:new B,rootNode:r};return this._elementInfo.set(i,h),this._registerGlobalListeners(h),h.subject}stopMonitoring(e){let t=V(e),i=this._elementInfo.get(t);i&&(i.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(i))}focusVia(e,t,i){let r=V(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([h,ce])=>this._originChanged(h,t,ce)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===K.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===K.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?ct:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,t){let i=this._elementInfo.get(t),r=D(e);!i||!i.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),i)}_onBlur(e,t){let i=this._elementInfo.get(t);!i||i.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(i,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,i=this._rootNodeFocusListenerCount.get(t)||0;i||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,ie),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,ie)}),this._rootNodeFocusListenerCount.set(t,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Re(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let i=this._rootNodeFocusListenerCount.get(t);i>1?this._rootNodeFocusListenerCount.set(t,i-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ie),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ie),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,i){this._setClasses(e,t),this._emitOrigin(i,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((i,r)=>{(r===e||i.checkChildren&&r.contains(e))&&t.push([r,i])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var oe=new WeakMap,Z=(()=>{class n{_appRef;_injector=s(j);_environmentInjector=s(Pe);load(e){let t=this._appRef=this._appRef||this._injector.get(ge),i=oe.get(t);i||(i={loaders:new Set,refs:[]},oe.set(t,i),t.onDestroy(()=>{oe.get(t)?.refs.forEach(r=>r.destroy()),oe.delete(t)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(et(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ht=new Set,T,Ce=(()=>{class n{_platform=s(x);_nonce=s(He,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Tt}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ft(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ft(n,o){if(!ht.has(n))try{T||(T=document.createElement("style"),o&&T.setAttribute("nonce",o),T.setAttribute("type","text/css"),document.head.appendChild(T)),T.sheet&&(T.sheet.insertRule(`@media ${n} {body{ }}`,0),ht.add(n))}catch(e){console.error(e)}}function Tt(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}function gt(n,...o){return o.length?o.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Me={},P=class n{_appId=s(je);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,e=!1){return this._appId!=="ng"&&(o+=this._appId),Me.hasOwnProperty(o)||(Me[o]=0),`${o}${e?n._infix+"-":""}${Me[o]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ot=new c("cdk-dir-doc",{providedIn:"root",factory:()=>s(G)}),Nt=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function mt(n){let o=n?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?Nt.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var De=(()=>{class n{get value(){return this.valueSignal()}valueSignal=U("ltr");change=new E;constructor(){let e=s(Ot,{optional:!0});if(e){let t=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(mt(t||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var re=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=M({type:n});static \u0275inj=C({})}return n})();var Q=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new B;constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var Rt=new c("MATERIAL_ANIMATIONS"),pt=null;function Pt(){return s(Rt,{optional:!0})?.animationsDisabled||s(Ue,{optional:!0})==="NoopAnimations"?"di-disabled":(pt??=s(Ce).matchMedia("(prefers-reduced-motion)").matches,pt?"reduced-motion":"enabled")}function L(){return Pt()!=="enabled"}var b=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(b||{}),Ee=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=b.HIDDEN;constructor(o,e,t,i=!1){this._renderer=o,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},ft=R({passive:!0,capture:!0}),we=class{_events=new Map;addHandler(o,e,t,i){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(i):r.set(t,new Set([i]))}else this._events.set(e,new Map([[t,new Set([i])]])),o.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ft)})}removeHandler(o,e,t){let i=this._events.get(o);if(!i)return;let r=i.get(e);r&&(r.delete(t),r.size===0&&i.delete(e),i.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,ft)))}_delegateEventHandler=o=>{let e=D(o);e&&this._events.get(o.type)?.forEach((t,i)=>{(i===e||i.contains(e))&&t.forEach(r=>r.handleEvent(o))})}},_t={enterDuration:225,exitDuration:150},Lt=800,bt=R({passive:!0,capture:!0}),vt=["mousedown","touchstart"],yt=["mouseup","mouseleave","touchend","touchcancel"],Bt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return n})(),Ae=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new we;constructor(o,e,t,i,r){this._target=o,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=V(t)),r&&r.get(Z).load(Bt)}fadeInRipple(o,e,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=l(l({},_t),t.animation);t.centered&&(o=i.left+i.width/2,e=i.top+i.height/2);let a=t.radius||jt(o,e,i),h=o-i.left,ce=e-i.top,Y=r.enterDuration,g=document.createElement("div");g.classList.add("mat-ripple-element"),g.style.left=`${h-a}px`,g.style.top=`${ce-a}px`,g.style.height=`${a*2}px`,g.style.width=`${a*2}px`,t.color!=null&&(g.style.backgroundColor=t.color),g.style.transitionDuration=`${Y}ms`,this._containerElement.appendChild(g);let xe=window.getComputedStyle(g),Vt=xe.transitionProperty,Ve=xe.transitionDuration,de=Vt==="none"||Ve==="0s"||Ve==="0s, 0s"||i.width===0&&i.height===0,S=new Ee(this,g,t,de);g.style.transform="scale3d(1, 1, 1)",S.state=b.FADING_IN,t.persistent||(this._mostRecentTransientRipple=S);let X=null;return!de&&(Y||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Se=()=>{X&&(X.fallbackTimer=null),clearTimeout(ke),this._finishRippleTransition(S)},ue=()=>this._destroyRipple(S),ke=setTimeout(ue,Y+100);g.addEventListener("transitionend",Se),g.addEventListener("transitioncancel",ue),X={onTransitionEnd:Se,onTransitionCancel:ue,fallbackTimer:ke}}),this._activeRipples.set(S,X),(de||!Y)&&this._finishRippleTransition(S),S}fadeOutRipple(o){if(o.state===b.FADING_OUT||o.state===b.HIDDEN)return;let e=o.element,t=l(l({},_t),o.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",o.state=b.FADING_OUT,(o._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let e=V(o);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,vt.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{yt.forEach(e=>{this._triggerElement.addEventListener(e,this,bt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===b.FADING_IN?this._startFadeOutTransition(o):o.state===b.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let e=o===this._mostRecentTransientRipple,{persistent:t}=o.config;o.state=b.VISIBLE,!t&&(!e||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let e=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=b.HIDDEN,e!==null&&(o.element.removeEventListener("transitionend",e.onTransitionEnd),o.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),o.element.remove()}_onMousedown(o){let e=W(o),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Lt;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!$(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=o.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let e=o.state===b.VISIBLE||o.config.terminateOnPointerUp&&o.state===b.FADING_IN;!o.config.persistent&&e&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(vt.forEach(e=>n._eventManager.removeHandler(e,o,this)),this._pointerUpEventsRegistered&&(yt.forEach(e=>o.removeEventListener(e,this,bt)),this._pointerUpEventsRegistered=!1))}};function jt(n,o,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(o-e.top),Math.abs(o-e.bottom));return Math.sqrt(t*t+i*i)}var Gt=new c("mat-ripple-global-options"),Ct=(()=>{class n{_elementRef=s(w);_animationsDisabled=L();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(O),t=s(x),i=s(Gt,{optional:!0}),r=s(j);this._globalOptions=i||{},this._rippleRenderer=new Ae(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:l(l(l({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,l(l({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,l(l({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,i){t&2&&I("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Mt=(()=>{class n{_animationsDisabled=L();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&I("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})();var Dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return n})();var Et=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=M({type:n});static \u0275inj=C({imports:[re]})}return n})();var Kt=["button"],Zt=["*"];function Qt(n,o){if(n&1&&(v(0,"div",2),F(1,"mat-pseudo-checkbox",6),y()),n&2){let e=qe();J(),ee("disabled",e.disabled)}}var wt=new c("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),At=new c("MatButtonToggleGroup"),Yt={provide:nt,useExisting:he(()=>Ie),multi:!0},se=class{source;value;constructor(o,e){this.source=o,this.value=e}},Ie=(()=>{class n{_changeDetector=s(ne);_dir=s(De,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=s(P).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new E;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new E;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=s(wt,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Q(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||gt(e))return;let i=e.target.id,r=this._buttonToggles.toArray().findIndex(h=>h.buttonId===i),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(r)||null;break;case 38:a=this._getNextButton(r,-1);break;case 37:a=this._getNextButton(r,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(r,1);break;case 39:a=this._getNextButton(r,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let t=new se(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,i=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let i=this._buttonToggles;for(let r=1;r<=i.length;r++){let a=(e+t*r+i.length)%i.length,h=i.get(a);if(h&&!h.disabled)return h}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(i=>this._selectValue(i,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(i=>i.tabIndex===-1)){for(let i of t)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let i of t)if(i.value===e){i.checked=!0,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,i,r){if(t&1&&Qe(r,ae,5),t&2){let a;me(a=pe())&&(i._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,i){t&1&&z("keydown",function(a){return i._keydown(a)}),t&2&&(N("role",i.multiple?"group":"radiogroup")("aria-disabled",i.disabled),I("mat-button-toggle-vertical",i.vertical)("mat-button-toggle-group-appearance-standard",i.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",_],value:"value",multiple:[2,"multiple","multiple",_],disabled:[2,"disabled","disabled",_],disabledInteractive:[2,"disabledInteractive","disabledInteractive",_],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",_],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",_]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[te([Yt,{provide:At,useExisting:n}])]})}return n})(),ae=(()=>{class n{_changeDetectorRef=s(ne);_elementRef=s(w);_focusMonitor=s(ye);_idGenerator=s(P);_animationDisabled=L();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new E;constructor(){s(Z).load(Dt);let e=s(At,{optional:!0}),t=s(new Je("tabindex"),{optional:!0})||"",i=s(wt,{optional:!0});this._tabIndex=U(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:"standard",this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new se(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-button-toggle"]],viewQuery:function(t,i){if(t&1&&Ye(Kt,5),t&2){let r;me(r=pe())&&(i._buttonElement=r.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,i){t&1&&z("focus",function(){return i.focus()}),t&2&&(N("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),I("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-disabled-interactive",i.disabledInteractive)("mat-button-toggle-appearance-standard",i.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",_],appearance:"appearance",checked:[2,"checked","checked",_],disabled:[2,"disabled","disabled",_],disabledInteractive:[2,"disabledInteractive","disabledInteractive",_]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Zt,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,i){if(t&1&&(Ke(),v(0,"button",1,0),z("click",function(){return i._onButtonClick()}),We(2,Qt,2,1,"div",2),v(3,"span",3),Ze(4),y()(),F(5,"span",4)(6,"span",5)),t&2){let r=Xe(1);ee("id",i.buttonId)("disabled",i.disabled&&!i.disabledInteractive||null),N("role",i.isSingleSelector()?"radio":"button")("tabindex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("aria-pressed",i.isSingleSelector()?null:i.checked)("aria-checked",i.isSingleSelector()?i.checked:null)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),J(2),$e(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),J(4),ee("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)}},dependencies:[Ct,Mt],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return n})(),It=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=M({type:n});static \u0275inj=C({imports:[Et,ae,re]})}return n})();var le=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-presentacion"]],decls:26,vars:0,consts:[[1,"titulo-verde"],[1,"tecnologias"],[1,"tecnologia"],["src","/angular-icon.png","alt","Angular"],["src","/html-icon.png","alt","HTML"],["src","/css-icon.png","alt","CSS"],["src","/js-icon.png","alt","JavaScript"]],template:function(e,t){e&1&&(m(0,"section")(1,"h4"),p(2,"Hola, soy"),A(),m(3,"h2"),p(4,"Desarrollador"),m(5,"span",0),p(6,"Front-End"),A()(),m(7,"p"),p(8,"Creo interfaces modernas, funcionales y responsivas, enfoc\xE1ndome en la experienc\xEDa de usuario y en el detalle que marca la diferenc\xEDa."),A(),m(9,"div",1)(10,"div",2),H(11,"img",3),m(12,"p"),p(13,"Angular"),A()(),m(14,"div",2),H(15,"img",4),m(16,"p"),p(17,"HTML"),A()(),m(18,"div",2),H(19,"img",5),m(20,"p"),p(21,"CSS"),A()(),m(22,"div",2),H(23,"img",6),m(24,"p"),p(25,"JavaScript"),A()()()())},styles:["section[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:column nowrap;justify-content:flex-start;z-index:2;gap:.9rem}section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#8e9cae;font-size:1.05rem;z-index:2}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .titulo-verde[_ngcontent-%COMP%]{font-size:clamp(2.2rem,8.25vw,2.75rem);z-index:2;color:#fff;line-height:1.15}.titulo-verde[_ngcontent-%COMP%]{display:block;background:linear-gradient(90deg,#00df89,#00f0ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8e9cae;font-size:1.1rem;z-index:2}.tecnologias[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start;gap:1rem}.tecnologia[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8e9cae;font-size:1.1rem;z-index:2;font-weight:600}.tecnologia[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:2;height:2.05rem}.tecnologia[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:.4rem}"]})};var xt=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-home"]],decls:16,vars:0,consts:[[1,"logo"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 100 100"],["d","M 38 32 L 18 50 L 38 68 M 62 32 L 82 50 L 62 68 M 56 24 L 44 76","stroke","#4be3b5","stroke-width","7","stroke-linecap","round","stroke-linejoin","round","fill","none"],[1,"idioma"],["name","idioma","value","es",1,"selector-idioma"],["value","es"],["value","en"],[1,"background-image"],["src","/home_bg_image_mobile.png","alt","Background image"]],template:function(e,t){e&1&&(v(0,"header")(1,"div",0),Le(),v(2,"svg",1),F(3,"path",2),y(),Be(),v(4,"h1"),p(5,"Juan Pablo Hays Garza"),y()(),v(6,"div",3)(7,"mat-button-toggle-group",4)(8,"mat-button-toggle",5),p(9,"ES"),y(),v(10,"mat-button-toggle",6),p(11,"EN"),y()()()(),v(12,"main")(13,"div",7),F(14,"img",8),y(),F(15,"app-presentacion"),y())},dependencies:[It,Ie,ae,ot,le],styles:['header[_ngcontent-%COMP%]{width:100%;max-height:3.5rem;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;z-index:5}.logo[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:.5rem;z-index:5}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.95rem;height:1.95rem;z-index:5}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:1.25rem;line-height:1rem;z-index:5}.idioma[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;z-index:5}  .selector-idioma .mat-button-toggle-checkbox-wrapper,   .selector-idioma .mat-pseudo-checkbox{display:none!important}.selector-idioma[_ngcontent-%COMP%]{width:4.25rem;height:1.85rem;border:1px solid white;display:flex;z-index:5}  .selector-idioma .mat-button-toggle{flex:1 1 0;min-width:0;background-color:#03070d;color:#8e9cae;font-size:.78rem;text-align:center;transition:all .4s linear}  .selector-idioma .mat-button-toggle-button{width:100%;height:100%}.selector-idioma[_ngcontent-%COMP%]   .mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#00ffa3;color:#03070d}  .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0!important;height:100%}  .mat-button-toggle-label-content{height:100%!important;display:flex!important;align-items:center}main[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;gap:1.2rem}.background-image[_ngcontent-%COMP%]{position:absolute;z-index:1;top:0;left:0;width:100dvw;height:60dvh}.background-image[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 42% 50% at 0% 100%,#03070d,#03070de0 45%,#03070d00),linear-gradient(to top,#03070d,#03070deb 8%,#03070d00 25%);pointer-events:none;z-index:1}.background-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;opacity:.65;filter:blur(.095rem) brightness(.65)}[_nghost-%COMP%]{display:flex;flex-flow:column;gap:2.8rem}@media(min-width:768px){header[_ngcontent-%COMP%]{max-height:4rem}.logo[_ngcontent-%COMP%]{gap:.6rem}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:2.2rem;width:2.2rem}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.32rem}.selector-idioma[_ngcontent-%COMP%]{width:4.5rem;height:2rem}  .selector-idioma .mat-button-toggle{font-size:.83rem}main[_ngcontent-%COMP%]{gap:1.5rem}}@media(min-width:1024px){header[_ngcontent-%COMP%]{max-height:clamp(4.75rem,6.5vh,5.5rem)}.logo[_ngcontent-%COMP%]{gap:.85rem}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:2.75rem;width:2.75rem}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}.selector-idioma[_ngcontent-%COMP%]{width:5.5rem;height:2.4rem}  .selector-idioma .mat-button-toggle{font-size:.94rem}main[_ngcontent-%COMP%]{gap:clamp(1.6rem,3vw,2.6rem)}}@media(min-width:1440px){header[_ngcontent-%COMP%]{max-height:clamp(6.5rem,8vh,8.5rem)}.logo[_ngcontent-%COMP%]{gap:clamp(1.15rem,1.2vw,1.6rem)}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:clamp(3.3rem,3.08vw,4.4rem);width:clamp(3.3rem,3.08vw,4.4rem)}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(2.05rem,1.65vw,2.6rem)}.selector-idioma[_ngcontent-%COMP%]{width:clamp(7.5rem,6vw,9.25rem);height:clamp(3.25rem,3vw,3.85rem)}  .selector-idioma .mat-button-toggle{font-size:clamp(1.27rem,1.1vw,1.5rem)}main[_ngcontent-%COMP%]{gap:clamp(2.2rem,3.2vw,3.6rem)}}']})};export{xt as Home};
