import{b as nt}from"./chunk-KKLBDUV7.js";import{B as Le,Da as fe,E as Be,Ea as N,Fa as $e,Ga as qe,Ha as ne,I as pe,Ia as b,J as m,Ja as C,K as E,Ka as I,La as l,M as h,Ma as d,Na as M,O as s,Oa as z,Pa as Ke,Qa as Ze,R as je,Ra as Qe,Sa as Ye,T as J,Ta as Xe,U as ee,Ua as _e,V as G,Va as be,W as U,Wa as Je,Xa as V,Ya as c,Z as x,Za as ie,_ as P,a as u,ab as et,ca as H,eb as oe,fa as A,g as j,gb as v,h as Pe,ha as Ge,hb as tt,ja as Ue,k as Ne,ka as He,la as ze,oa as te,ta as We,x as Re,xa as p,ya as D,za as F}from"./chunk-LEUQYYOC.js";var it=new h("");var Ot=new h("",{factory:()=>ot}),ot="always";var Ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=D({type:n});static \u0275inj=E({})}return n})();var rt=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Ot,useValue:e.callSetDisabledState??ot}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=D({type:n});static \u0275inj=E({imports:[Ft]})}return n})();function W(n){return n.buttons===0||n.detail===0}function $(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var ve;function st(){if(ve==null){let n=typeof document<"u"?document.head:null;ve=!!(n&&(n.createShadowRoot||n.attachShadow))}return ve}function ye(n){if(st()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function w(n){return n.composedPath?n.composedPath()[0]:n.target}var Ce;try{Ce=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ce=!1}var k=(()=>{class n{_platformId=s(Ue);isBrowser=this._platformId?nt(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ce)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var q;function at(){if(q==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>q=!0}))}finally{q=q||!1}return q}function R(n){return at()?n:!!n.capture}function S(n){return n instanceof A?n.nativeElement:n}var lt=new h("cdk-input-modality-detector-options"),ct={ignoreKeys:[18,17,224,91,16]},dt=650,Me={passive:!0,capture:!0},ut=(()=>{class n{_platform=s(k);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Pe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=w(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<dt||(this._modality.next(W(e)?"keyboard":"mouse"),this._mostRecentTarget=w(e))};_onTouchstart=e=>{if($(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=w(e)};constructor(){let e=s(P),t=s(U),i=s(lt,{optional:!0});if(this._options=u(u({},ct),i),this.modalityDetected=this._modality.pipe(Le(1)),this.modalityChanged=this.modalityDetected.pipe(Re()),this._platform.isBrowser){let r=s(We).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Me),r.listen(t,"mousedown",this._onMousedown,Me),r.listen(t,"touchstart",this._onTouchstart,Me)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),K=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(K||{}),ht=new h("cdk-focus-monitor-default-options"),re=R({passive:!0,capture:!0}),Ee=(()=>{class n{_ngZone=s(P);_platform=s(k);_inputModalityDetector=s(ut);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(U);_stopInputModalityDetector=new j;constructor(){let e=s(ht,{optional:!0});this._detectionMode=e?.detectionMode||K.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=w(e);for(let i=t;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,t=!1){let i=S(e);if(!this._platform.isBrowser||i.nodeType!==1)return Ne();let r=ye(i)||this._document,a=this._elementInfo.get(i);if(a)return t&&(a.checkChildren=!0),a.subject;let f={checkChildren:t,subject:new j,rootNode:r};return this._elementInfo.set(i,f),this._registerGlobalListeners(f),f.subject}stopMonitoring(e){let t=S(e),i=this._elementInfo.get(t);i&&(i.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(i))}focusVia(e,t,i){let r=S(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([f,he])=>this._originChanged(f,t,he)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===K.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===K.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?dt:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,t){let i=this._elementInfo.get(t),r=w(e);!i||!i.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),i)}_onBlur(e,t){let i=this._elementInfo.get(t);!i||i.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(i,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,i=this._rootNodeFocusListenerCount.get(t)||0;i||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,re),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,re)}),this._rootNodeFocusListenerCount.set(t,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Be(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let i=this._rootNodeFocusListenerCount.get(t);i>1?this._rootNodeFocusListenerCount.set(t,i-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,re),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,re),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,i){this._setClasses(e,t),this._emitOrigin(i,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((i,r)=>{(r===e||i.checkChildren&&r.contains(e))&&t.push([r,i])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var se=new WeakMap,Z=(()=>{class n{_appRef;_injector=s(G);_environmentInjector=s(je);load(e){let t=this._appRef=this._appRef||this._injector.get(fe),i=se.get(t);i||(i={loaders:new Set,refs:[]},se.set(t,i),t.onDestroy(()=>{se.get(t)?.refs.forEach(r=>r.destroy()),se.delete(t)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(tt(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gt=new Set,T,De=(()=>{class n{_platform=s(k);_nonce=s(ze,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Pt}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Tt(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Tt(n,o){if(!gt.has(n))try{T||(T=document.createElement("style"),o&&T.setAttribute("nonce",o),T.setAttribute("type","text/css"),document.head.appendChild(T)),T.sheet&&(T.sheet.insertRule(`@media ${n} {body{ }}`,0),gt.add(n))}catch(e){console.error(e)}}function Pt(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}function mt(n,...o){return o.length?o.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var we={},L=class n{_appId=s(Ge);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,e=!1){return this._appId!=="ng"&&(o+=this._appId),we.hasOwnProperty(o)||(we[o]=0),`${o}${e?n._infix+"-":""}${we[o]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})};var Nt=new h("cdk-dir-doc",{providedIn:"root",factory:()=>s(U)}),Rt=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function pt(n){let o=n?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?Rt.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var xe=(()=>{class n{get value(){return this.valueSignal()}valueSignal=H("ltr");change=new x;constructor(){let e=s(Nt,{optional:!0});if(e){let t=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(pt(t||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ae=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=D({type:n});static \u0275inj=E({})}return n})();var Q=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new j;constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var Lt=new h("MATERIAL_ANIMATIONS"),ft=null;function Bt(){return s(Lt,{optional:!0})?.animationsDisabled||s(He,{optional:!0})==="NoopAnimations"?"di-disabled":(ft??=s(De).matchMedia("(prefers-reduced-motion)").matches,ft?"reduced-motion":"enabled")}function B(){return Bt()!=="enabled"}var y=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(y||{}),Ae=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=y.HIDDEN;constructor(o,e,t,i=!1){this._renderer=o,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},_t=R({passive:!0,capture:!0}),Ie=class{_events=new Map;addHandler(o,e,t,i){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(i):r.set(t,new Set([i]))}else this._events.set(e,new Map([[t,new Set([i])]])),o.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,_t)})}removeHandler(o,e,t){let i=this._events.get(o);if(!i)return;let r=i.get(e);r&&(r.delete(t),r.size===0&&i.delete(e),i.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,_t)))}_delegateEventHandler=o=>{let e=w(o);e&&this._events.get(o.type)?.forEach((t,i)=>{(i===e||i.contains(e))&&t.forEach(r=>r.handleEvent(o))})}},bt={enterDuration:225,exitDuration:150},jt=800,vt=R({passive:!0,capture:!0}),yt=["mousedown","touchstart"],Ct=["mouseup","mouseleave","touchend","touchcancel"],Gt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return n})(),Ve=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ie;constructor(o,e,t,i,r){this._target=o,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=S(t)),r&&r.get(Z).load(Gt)}fadeInRipple(o,e,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=u(u({},bt),t.animation);t.centered&&(o=i.left+i.width/2,e=i.top+i.height/2);let a=t.radius||Ut(o,e,i),f=o-i.left,he=e-i.top,Y=r.enterDuration,_=document.createElement("div");_.classList.add("mat-ripple-element"),_.style.left=`${f-a}px`,_.style.top=`${he-a}px`,_.style.height=`${a*2}px`,_.style.width=`${a*2}px`,t.color!=null&&(_.style.backgroundColor=t.color),_.style.transitionDuration=`${Y}ms`,this._containerElement.appendChild(_);let Se=window.getComputedStyle(_),St=Se.transitionProperty,Oe=Se.transitionDuration,ge=St==="none"||Oe==="0s"||Oe==="0s, 0s"||i.width===0&&i.height===0,O=new Ae(this,_,t,ge);_.style.transform="scale3d(1, 1, 1)",O.state=y.FADING_IN,t.persistent||(this._mostRecentTransientRipple=O);let X=null;return!ge&&(Y||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Fe=()=>{X&&(X.fallbackTimer=null),clearTimeout(Te),this._finishRippleTransition(O)},me=()=>this._destroyRipple(O),Te=setTimeout(me,Y+100);_.addEventListener("transitionend",Fe),_.addEventListener("transitioncancel",me),X={onTransitionEnd:Fe,onTransitionCancel:me,fallbackTimer:Te}}),this._activeRipples.set(O,X),(ge||!Y)&&this._finishRippleTransition(O),O}fadeOutRipple(o){if(o.state===y.FADING_OUT||o.state===y.HIDDEN)return;let e=o.element,t=u(u({},bt),o.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",o.state=y.FADING_OUT,(o._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let e=S(o);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,yt.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ct.forEach(e=>{this._triggerElement.addEventListener(e,this,vt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===y.FADING_IN?this._startFadeOutTransition(o):o.state===y.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let e=o===this._mostRecentTransientRipple,{persistent:t}=o.config;o.state=y.VISIBLE,!t&&(!e||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let e=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=y.HIDDEN,e!==null&&(o.element.removeEventListener("transitionend",e.onTransitionEnd),o.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),o.element.remove()}_onMousedown(o){let e=W(o),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+jt;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!$(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=o.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let e=o.state===y.VISIBLE||o.config.terminateOnPointerUp&&o.state===y.FADING_IN;!o.config.persistent&&e&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(yt.forEach(e=>n._eventManager.removeHandler(e,o,this)),this._pointerUpEventsRegistered&&(Ct.forEach(e=>o.removeEventListener(e,this,vt)),this._pointerUpEventsRegistered=!1))}};function Ut(n,o,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(o-e.top),Math.abs(o-e.bottom));return Math.sqrt(t*t+i*i)}var Ht=new h("mat-ripple-global-options"),Mt=(()=>{class n{_elementRef=s(A);_animationsDisabled=B();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(P),t=s(k),i=s(Ht,{optional:!0}),r=s(G);this._globalOptions=i||{},this._rippleRenderer=new Ve(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:u(u(u({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,u(u({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,u(u({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,i){t&2&&V("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Et=(()=>{class n{_animationsDisabled=B();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&V("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})();var Dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return n})();var wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=D({type:n});static \u0275inj=E({imports:[ae]})}return n})();var Qt=["button"],Yt=["*"];function Xt(n,o){if(n&1&&(b(0,"div",2),I(1,"mat-pseudo-checkbox",6),C()),n&2){let e=Ke();te(),ne("disabled",e.disabled)}}var xt=new h("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),At=new h("MatButtonToggleGroup"),Jt={provide:it,useExisting:pe(()=>ke),multi:!0},le=class{source;value;constructor(o,e){this.source=o,this.value=e}},ke=(()=>{class n{_changeDetector=s(oe);_dir=s(xe,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=s(L).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new x;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new x;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=s(xt,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Q(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||mt(e))return;let i=e.target.id,r=this._buttonToggles.toArray().findIndex(f=>f.buttonId===i),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(r)||null;break;case 38:a=this._getNextButton(r,-1);break;case 37:a=this._getNextButton(r,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(r,1);break;case 39:a=this._getNextButton(r,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let t=new le(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,i=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let i=this._buttonToggles;for(let r=1;r<=i.length;r++){let a=(e+t*r+i.length)%i.length,f=i.get(a);if(f&&!f.disabled)return f}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(i=>this._selectValue(i,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(i=>i.tabIndex===-1)){for(let i of t)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let i of t)if(i.value===e){i.checked=!0,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,i,r){if(t&1&&Ye(r,ce,5),t&2){let a;_e(a=be())&&(i._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,i){t&1&&z("keydown",function(a){return i._keydown(a)}),t&2&&(N("role",i.multiple?"group":"radiogroup")("aria-disabled",i.disabled),V("mat-button-toggle-vertical",i.vertical)("mat-button-toggle-group-appearance-standard",i.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",v],value:"value",multiple:[2,"multiple","multiple",v],disabled:[2,"disabled","disabled",v],disabledInteractive:[2,"disabledInteractive","disabledInteractive",v],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",v],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",v]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[ie([Jt,{provide:At,useExisting:n}])]})}return n})(),ce=(()=>{class n{_changeDetectorRef=s(oe);_elementRef=s(A);_focusMonitor=s(Ee);_idGenerator=s(L);_animationDisabled=B();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new x;constructor(){s(Z).load(Dt);let e=s(At,{optional:!0}),t=s(new et("tabindex"),{optional:!0})||"",i=s(xt,{optional:!0});this._tabIndex=H(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:"standard",this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new le(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["mat-button-toggle"]],viewQuery:function(t,i){if(t&1&&Xe(Qt,5),t&2){let r;_e(r=be())&&(i._buttonElement=r.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,i){t&1&&z("focus",function(){return i.focus()}),t&2&&(N("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),V("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-disabled-interactive",i.disabledInteractive)("mat-button-toggle-appearance-standard",i.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",v],appearance:"appearance",checked:[2,"checked","checked",v],disabled:[2,"disabled","disabled",v],disabledInteractive:[2,"disabledInteractive","disabledInteractive",v]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Yt,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,i){if(t&1&&(Ze(),b(0,"button",1,0),z("click",function(){return i._onButtonClick()}),$e(2,Xt,2,1,"div",2),b(3,"span",3),Qe(4),C()(),I(5,"span",4)(6,"span",5)),t&2){let r=Je(1);ne("id",i.buttonId)("disabled",i.disabled&&!i.disabledInteractive||null),N("role",i.isSingleSelector()?"radio":"button")("tabindex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("aria-pressed",i.isSingleSelector()?null:i.checked)("aria-checked",i.isSingleSelector()?i.checked:null)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),te(2),qe(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),te(4),ne("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)}},dependencies:[Mt,Et],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return n})(),It=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=D({type:n});static \u0275inj=E({imports:[wt,ce,ae]})}return n})();var de=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-presentacion"]],decls:26,vars:0,consts:[[1,"titulo-verde"],[1,"tecnologias"],[1,"tecnologia"],["src","angular-icon.png","alt","Angular"],["src","html-icon.png","alt","HTML"],["src","css-icon.png","alt","CSS"],["src","js-icon.png","alt","JavaScript"]],template:function(e,t){e&1&&(l(0,"section")(1,"h4"),c(2,"Hola, soy"),d(),l(3,"h2"),c(4,"Desarrollador"),l(5,"span",0),c(6,"Front-End"),d()(),l(7,"p"),c(8,"Creo interfaces modernas, funcionales y responsivas, enfoc\xE1ndome en la experienc\xEDa de usuario y en el detalle que marca la diferenc\xEDa."),d(),l(9,"div",1)(10,"div",2),M(11,"img",3),l(12,"p"),c(13,"Angular"),d()(),l(14,"div",2),M(15,"img",4),l(16,"p"),c(17,"HTML"),d()(),l(18,"div",2),M(19,"img",5),l(20,"p"),c(21,"CSS"),d()(),l(22,"div",2),M(23,"img",6),l(24,"p"),c(25,"JavaScript"),d()()()())},styles:["section[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:column nowrap;justify-content:flex-start;z-index:2;gap:.9rem}section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#8e9cae;font-size:1.05rem;z-index:2}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .titulo-verde[_ngcontent-%COMP%]{font-size:clamp(2.2rem,8.25vw,2.75rem);z-index:2;color:#fff;line-height:1.15}.titulo-verde[_ngcontent-%COMP%]{display:block;background:linear-gradient(90deg,#00df89,#00f0ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8e9cae;font-size:1.1rem;z-index:2}.tecnologias[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start;gap:1rem}.tecnologia[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8e9cae;font-size:1.1rem;z-index:2;font-weight:600}.tecnologia[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:2;height:2.05rem}.tecnologia[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:.4rem}@media(min-width:768px){section[_ngcontent-%COMP%]{width:59.2%;gap:1.2rem}}@media(min-width:1024px){section[_ngcontent-%COMP%]{width:48%;gap:1.5rem}section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:clamp(1.2rem,1.5vw,1.35rem)}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .titulo-verde[_ngcontent-%COMP%]{font-size:clamp(3rem,4.8vw,3.8rem)}section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:clamp(1.2rem,1.5vw,1.35rem)}.tecnologia[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2.55rem}.tecnologia[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.15rem}}@media(min-width:1440px){section[_ngcontent-%COMP%]{width:45%;gap:1.5rem}section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:clamp(1.35rem,1.4vw,1.8rem)}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .titulo-verde[_ngcontent-%COMP%]{font-size:clamp(3.6rem,5vw,4rem)}section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:clamp(1.35rem,1.4vw,1.8rem);line-height:1.05}.tecnologia[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:clamp(3rem,2.5vw,3.6rem)}.tecnologia[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:clamp(1.15rem,1.1vw,1.35rem)}}"]})};var ue=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-tarjetas"]],decls:38,vars:0,consts:[[1,"flecha"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 120 76","width","120","height","76","aria-hidden","true",1,"flecha-busqueda"],["d","M8 8Q94 8 109 67","fill","none","stroke","currentColor","stroke-linecap","round","stroke-width","2"],["d","M101 61L109 67L110 57","fill","none","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"],[1,"tarjetas"],[1,"servicios"],["src","freelancer-icon.png","alt","Freelancer",1,"icon"],[1,"servicios-texto"],[1,"verde"],["href",""],["src","freelancer-img.png","alt","Freelancer",1,"bg-img"],[1,"empleo"],["src","hiring-icon.png","alt","Hiring",1,"icon"],[1,"empleo-texto"],[1,"br"],[1,"morado"],["src","hiring-img.png","alt","Hiring",1,"bg-img"]],template:function(e,t){e&1&&(l(0,"section")(1,"h4"),c(2,"\xBFQu\xE9 est\xE1s buscando?"),d(),l(3,"div",0),J(),l(4,"svg",1),M(5,"path",2)(6,"path",3),d()(),ee(),l(7,"div",4)(8,"div",5),M(9,"img",6),l(10,"div",7)(11,"h5"),c(12,"FREELANCE"),d(),l(13,"h3"),c(14,"Necesito una "),l(15,"span",8),c(16,"p\xE1gina web"),d()(),l(17,"p"),c(18,"Si tienes un negocio, proyecto o idea y necesitas una pagina web moderna, funcional y a tu medida, puedo ayudarte."),d()(),l(19,"a",9),c(20,"Ver mis servicios ->"),d(),M(21,"img",10),d(),l(22,"div",11),M(23,"img",12),l(24,"div",13)(25,"h5"),c(26,"CONTR\xC1TAME"),d(),l(27,"h3"),c(28,"Estoy buscando "),l(29,"span",14),c(30,"un "),l(31,"span",15),c(32,"desarrollador"),d()()(),l(33,"p"),c(34,"Si buscas un perfil junior con ganas de aprender, comprometido y con habilidades en desarrollo web, aqu\xED puedes conocer mas sobre mi."),d()(),l(35,"a",9),c(36,"Perfil profesional ->"),d(),M(37,"img",16),d()()())},styles:["[_nghost-%COMP%]{width:100%}section[_ngcontent-%COMP%]{padding-top:2rem;width:100%;display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;z-index:3}section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Caveat,Architects Daughter,Comic Sans MS,cursive;font-size:.9rem;color:#8e9cae;font-weight:600;letter-spacing:1.2px;transform:rotate(-3deg);z-index:3}.flecha[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:clamp(20%,100% - 48vw,50%);z-index:3}.flecha[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:3.75rem;width:4.75rem;color:#8e9cae;z-index:3}.tarjetas[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:column nowrap;justify-content:center;gap:1.25rem;z-index:3}.empleo[_ngcontent-%COMP%]{width:80%;padding:1.25rem;position:relative;display:flex;flex-flow:column nowrap;border:2px solid #4364F7;border-radius:1rem;gap:1rem;z-index:3;background:radial-gradient(circle at 85% 15%,rgba(41,98,255,.2) 0%,transparent 60%),#050c0a}.empleo[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:2.5rem;z-index:3}.empleo-texto[_ngcontent-%COMP%]{width:clamp(30%,100% - 12.5vw,100%);display:flex;flex-flow:column nowrap;gap:.75rem;z-index:3}.empleo-texto[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#5c82ff;letter-spacing:1.125px;z-index:3}.empleo-texto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:clamp(1.25rem,5vw,1.45rem);line-height:1;z-index:3}.empleo-texto[_ngcontent-%COMP%]   .morado[_ngcontent-%COMP%]{color:#5c82ff;font-size:clamp(1.25rem,5vw,1.45rem);z-index:3}.empleo-texto[_ngcontent-%COMP%]   .br[_ngcontent-%COMP%]{display:block}.empleo-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8e9cae;font-size:.8125rem;z-index:3}.empleo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:60%;padding:.6rem .2rem;display:flex;justify-content:center;align-items:center;background-color:#5c82ff;color:#061026;font-size:.85rem;font-weight:600;text-decoration:none;border-radius:1rem;cursor:pointer;z-index:3}.empleo[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]{position:absolute;top:5%;right:7%;width:clamp(5.5rem,20vw,9rem);height:clamp(6rem,21vw,9rem);filter:blur(.05rem) brightness(.95);z-index:2}.servicios[_ngcontent-%COMP%]{width:80%;padding:1.25rem;position:relative;display:flex;flex-flow:column nowrap;border:2px solid #00E599;border-radius:1rem;gap:1rem;z-index:3;background:radial-gradient(circle at 85% 15%,rgba(0,230,119,.185) 0%,transparent 60%),#050c0a}.servicios[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:2.5rem;z-index:3}.servicios-texto[_ngcontent-%COMP%]{width:clamp(30%,100% - 12.5vw,100%);display:flex;flex-flow:column nowrap;gap:.75rem;z-index:3}.servicios-texto[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#00ffa3;letter-spacing:1.125px;z-index:3}.servicios-texto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:clamp(1.25rem,5vw,1.45rem);line-height:1;z-index:3}.servicios-texto[_ngcontent-%COMP%]   .verde[_ngcontent-%COMP%]{display:block;color:#00ffa3;font-size:clamp(1.25rem,5vw,1.45rem);z-index:3}.servicios-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8e9cae;font-size:.8125rem;z-index:3}.servicios[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:60%;padding:.6rem .2rem;display:flex;justify-content:center;align-items:center;background-color:#00ffa3;color:#031811;font-size:.85rem;font-weight:600;text-decoration:none;border-radius:1rem;cursor:pointer;z-index:3}.servicios[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]{position:absolute;top:7%;right:9%;width:clamp(5.5rem,20vw,9rem);height:clamp(6rem,21vw,9rem);filter:blur(.05rem) brightness(.95);z-index:2}"]})};var kt=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["app-home"]],decls:19,vars:0,consts:[[1,"logo"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 100 100"],["d","M 38 32 L 18 50 L 38 68 M 62 32 L 82 50 L 62 68 M 56 24 L 44 76","stroke","#4be3b5","stroke-width","7","stroke-linecap","round","stroke-linejoin","round","fill","none"],[1,"idioma"],["name","idioma","value","es",1,"selector-idioma"],["value","es"],["value","en"],[1,"background-image"],["src","home_bg_image_mobile.png","alt","Background image"],[1,"background-image-responsive"],["src","home_bg_image_pc.png","alt","Background image"]],template:function(e,t){e&1&&(b(0,"header")(1,"div",0),J(),b(2,"svg",1),I(3,"path",2),C(),ee(),b(4,"h1"),c(5,"Juan Pablo Hays Garza"),C()(),b(6,"div",3)(7,"mat-button-toggle-group",4)(8,"mat-button-toggle",5),c(9,"ES"),C(),b(10,"mat-button-toggle",6),c(11,"EN"),C()()()(),b(12,"main")(13,"div",7),I(14,"img",8),C(),b(15,"div",9),I(16,"img",10),C(),I(17,"app-presentacion")(18,"app-tarjetas"),C())},dependencies:[It,ke,ce,rt,de,ue],styles:['header[_ngcontent-%COMP%]{width:100%;max-height:3.5rem;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;z-index:5}.logo[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:.5rem;z-index:5}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.95rem;height:1.95rem;z-index:5}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:1.25rem;line-height:1rem;z-index:5}.idioma[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;z-index:5}  .selector-idioma .mat-button-toggle-checkbox-wrapper,   .selector-idioma .mat-pseudo-checkbox{display:none!important}.selector-idioma[_ngcontent-%COMP%]{width:4.25rem;height:1.85rem;border:1px solid white;display:flex;z-index:5}  .selector-idioma .mat-button-toggle{flex:1 1 0;min-width:0;background-color:#03070d;color:#8e9cae;font-size:.78rem;text-align:center;transition:all .4s linear}  .selector-idioma .mat-button-toggle-button{width:100%;height:100%}.selector-idioma[_ngcontent-%COMP%]   .mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#00ffa3;color:#03070d}  .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0!important;height:100%}  .mat-button-toggle-label-content{height:100%!important;display:flex!important;align-items:center}main[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;gap:1.2rem}.background-image[_ngcontent-%COMP%]{position:absolute;z-index:1;top:0;left:0;width:100dvw;height:60dvh}.background-image[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 42% 50% at 0% 100%,#03070d,#03070de0 45%,#03070d00),linear-gradient(to top,#03070d,#03070deb 8%,#03070d00 25%);pointer-events:none;z-index:1}.background-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;opacity:.65;filter:blur(.095rem) brightness(.65)}.background-image-responsive[_ngcontent-%COMP%], .background-image-responsive[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]{display:flex;flex-flow:column;gap:2.8rem}@media(min-width:768px){header[_ngcontent-%COMP%]{max-height:4rem}.logo[_ngcontent-%COMP%]{gap:.6rem}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:2.2rem;width:2.2rem}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.32rem}.selector-idioma[_ngcontent-%COMP%]{width:4.5rem;height:2rem}  .selector-idioma .mat-button-toggle{font-size:.83rem}main[_ngcontent-%COMP%]{gap:1.5rem}.background-image[_ngcontent-%COMP%], .background-image[_ngcontent-%COMP%]:after, .background-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}.background-image-responsive[_ngcontent-%COMP%]{display:block;position:absolute;top:0;right:0;width:55dvw;height:55dvh}.background-image-responsive[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,#03070d,#03070db8 10%,#03070d00 26% 70%,#03070d),radial-gradient(ellipse 42% 100% at 0% 58%,#03070d 0% 40%,#03070d00),linear-gradient(to top,#03070d,#03070deb 5%,#03070dad 12%,#03070d00 25%);pointer-events:none;z-index:1}.background-image-responsive[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:cover;z-index:1}}@media(min-width:1024px){header[_ngcontent-%COMP%]{max-height:clamp(4.75rem,6.5vh,5.5rem)}.logo[_ngcontent-%COMP%]{gap:.85rem}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:2.75rem;width:2.75rem}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}.selector-idioma[_ngcontent-%COMP%]{width:5.5rem;height:2.4rem}  .selector-idioma .mat-button-toggle{font-size:.94rem}main[_ngcontent-%COMP%]{gap:clamp(1.6rem,3vw,2.6rem)}.background-image-responsive[_ngcontent-%COMP%]{width:60dvw}.background-image-responsive[_ngcontent-%COMP%]:after{background:linear-gradient(to bottom,#03070d,#03070db8 10%,#03070d00 26% 70%,#03070d),radial-gradient(ellipse 30% 100% at 0% 68%,#03070d 0% 50%,#03070deb 70%,#03070d00),linear-gradient(to top,#03070d,#03070deb 5%,#03070dad 12%,#03070d00 25%)}}@media(min-width:1440px){header[_ngcontent-%COMP%]{max-height:clamp(6.5rem,8vh,8.5rem)}.logo[_ngcontent-%COMP%]{gap:clamp(1.15rem,1.2vw,1.6rem)}.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:clamp(3.3rem,3.08vw,4.4rem);width:clamp(3.3rem,3.08vw,4.4rem)}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(2.05rem,1.65vw,2.6rem)}.selector-idioma[_ngcontent-%COMP%]{width:clamp(7.5rem,6vw,9.25rem);height:clamp(3.25rem,3vw,3.85rem)}  .selector-idioma .mat-button-toggle{font-size:clamp(1.27rem,1.1vw,1.5rem)}main[_ngcontent-%COMP%]{gap:clamp(2.2rem,3.2vw,3.6rem)}.background-image-responsive[_ngcontent-%COMP%]{width:62dvw}.background-image-responsive[_ngcontent-%COMP%]:after{background:linear-gradient(to bottom,#03070d,#03070db8 10%,#03070d00 26% 70%,#03070d),radial-gradient(ellipse 12% 100% at 0% 62%,#03070d 0% 50%,#03070deb 70%,#03070d00),linear-gradient(to top,#03070d,#03070deb 3%,#03070dad 8%,#03070d00 20%)}}']})};export{kt as Home};
