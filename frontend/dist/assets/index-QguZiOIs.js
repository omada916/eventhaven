(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Tm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Au={exports:{}},es={},Ou={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function Oy(){if(sp)return J;sp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function T(S){return S===null||typeof S!="object"?null:(S=E&&S[E]||S["@@iterator"],typeof S=="function"?S:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,B={};function q(S,R,X){this.props=S,this.context=R,this.refs=B,this.updater=X||L}q.prototype.isReactComponent={},q.prototype.setState=function(S,R){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,R,"setState")},q.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Pe(){}Pe.prototype=q.prototype;function be(S,R,X){this.props=S,this.context=R,this.refs=B,this.updater=X||L}var xe=be.prototype=new Pe;xe.constructor=be,F(xe,q.prototype),xe.isPureReactComponent=!0;var Te=Array.isArray,tt=Object.prototype.hasOwnProperty,Ae={current:null},Ve={key:!0,ref:!0,__self:!0,__source:!0};function nt(S,R,X){var ee,ie={},se=null,he=null;if(R!=null)for(ee in R.ref!==void 0&&(he=R.ref),R.key!==void 0&&(se=""+R.key),R)tt.call(R,ee)&&!Ve.hasOwnProperty(ee)&&(ie[ee]=R[ee]);var ae=arguments.length-2;if(ae===1)ie.children=X;else if(1<ae){for(var ve=Array(ae),pt=0;pt<ae;pt++)ve[pt]=arguments[pt+2];ie.children=ve}if(S&&S.defaultProps)for(ee in ae=S.defaultProps,ae)ie[ee]===void 0&&(ie[ee]=ae[ee]);return{$$typeof:i,type:S,key:se,ref:he,props:ie,_owner:Ae.current}}function Et(S,R){return{$$typeof:i,type:S.type,key:R,ref:S.ref,props:S.props,_owner:S._owner}}function Rt(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function Zn(S){var R={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(X){return R[X]})}var Wt=/\/+/g;function ft(S,R){return typeof S=="object"&&S!==null&&S.key!=null?Zn(""+S.key):R.toString(36)}function Pt(S,R,X,ee,ie){var se=typeof S;(se==="undefined"||se==="boolean")&&(S=null);var he=!1;if(S===null)he=!0;else switch(se){case"string":case"number":he=!0;break;case"object":switch(S.$$typeof){case i:case e:he=!0}}if(he)return he=S,ie=ie(he),S=ee===""?"."+ft(he,0):ee,Te(ie)?(X="",S!=null&&(X=S.replace(Wt,"$&/")+"/"),Pt(ie,R,X,"",function(pt){return pt})):ie!=null&&(Rt(ie)&&(ie=Et(ie,X+(!ie.key||he&&he.key===ie.key?"":(""+ie.key).replace(Wt,"$&/")+"/")+S)),R.push(ie)),1;if(he=0,ee=ee===""?".":ee+":",Te(S))for(var ae=0;ae<S.length;ae++){se=S[ae];var ve=ee+ft(se,ae);he+=Pt(se,R,X,ve,ie)}else if(ve=T(S),typeof ve=="function")for(S=ve.call(S),ae=0;!(se=S.next()).done;)se=se.value,ve=ee+ft(se,ae++),he+=Pt(se,R,X,ve,ie);else if(se==="object")throw R=String(S),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return he}function Vt(S,R,X){if(S==null)return S;var ee=[],ie=0;return Pt(S,ee,"","",function(se){return R.call(X,se,ie++)}),ee}function rt(S){if(S._status===-1){var R=S._result;R=R(),R.then(function(X){(S._status===0||S._status===-1)&&(S._status=1,S._result=X)},function(X){(S._status===0||S._status===-1)&&(S._status=2,S._result=X)}),S._status===-1&&(S._status=0,S._result=R)}if(S._status===1)return S._result.default;throw S._result}var Se={current:null},M={transition:null},G={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:M,ReactCurrentOwner:Ae};function j(){throw Error("act(...) is not supported in production builds of React.")}return J.Children={map:Vt,forEach:function(S,R,X){Vt(S,function(){R.apply(this,arguments)},X)},count:function(S){var R=0;return Vt(S,function(){R++}),R},toArray:function(S){return Vt(S,function(R){return R})||[]},only:function(S){if(!Rt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},J.Component=q,J.Fragment=n,J.Profiler=l,J.PureComponent=be,J.StrictMode=s,J.Suspense=p,J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,J.act=j,J.cloneElement=function(S,R,X){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ee=F({},S.props),ie=S.key,se=S.ref,he=S._owner;if(R!=null){if(R.ref!==void 0&&(se=R.ref,he=Ae.current),R.key!==void 0&&(ie=""+R.key),S.type&&S.type.defaultProps)var ae=S.type.defaultProps;for(ve in R)tt.call(R,ve)&&!Ve.hasOwnProperty(ve)&&(ee[ve]=R[ve]===void 0&&ae!==void 0?ae[ve]:R[ve])}var ve=arguments.length-2;if(ve===1)ee.children=X;else if(1<ve){ae=Array(ve);for(var pt=0;pt<ve;pt++)ae[pt]=arguments[pt+2];ee.children=ae}return{$$typeof:i,type:S.type,key:ie,ref:se,props:ee,_owner:he}},J.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:u,_context:S},S.Consumer=S},J.createElement=nt,J.createFactory=function(S){var R=nt.bind(null,S);return R.type=S,R},J.createRef=function(){return{current:null}},J.forwardRef=function(S){return{$$typeof:f,render:S}},J.isValidElement=Rt,J.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:rt}},J.memo=function(S,R){return{$$typeof:g,type:S,compare:R===void 0?null:R}},J.startTransition=function(S){var R=M.transition;M.transition={};try{S()}finally{M.transition=R}},J.unstable_act=j,J.useCallback=function(S,R){return Se.current.useCallback(S,R)},J.useContext=function(S){return Se.current.useContext(S)},J.useDebugValue=function(){},J.useDeferredValue=function(S){return Se.current.useDeferredValue(S)},J.useEffect=function(S,R){return Se.current.useEffect(S,R)},J.useId=function(){return Se.current.useId()},J.useImperativeHandle=function(S,R,X){return Se.current.useImperativeHandle(S,R,X)},J.useInsertionEffect=function(S,R){return Se.current.useInsertionEffect(S,R)},J.useLayoutEffect=function(S,R){return Se.current.useLayoutEffect(S,R)},J.useMemo=function(S,R){return Se.current.useMemo(S,R)},J.useReducer=function(S,R,X){return Se.current.useReducer(S,R,X)},J.useRef=function(S){return Se.current.useRef(S)},J.useState=function(S){return Se.current.useState(S)},J.useSyncExternalStore=function(S,R,X){return Se.current.useSyncExternalStore(S,R,X)},J.useTransition=function(){return Se.current.useTransition()},J.version="18.3.1",J}var op;function _c(){return op||(op=1,Ou.exports=Oy()),Ou.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function Dy(){if(lp)return es;lp=1;var i=_c(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var y,E={},T=null,L=null;g!==void 0&&(T=""+g),p.key!==void 0&&(T=""+p.key),p.ref!==void 0&&(L=p.ref);for(y in p)s.call(p,y)&&!u.hasOwnProperty(y)&&(E[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)E[y]===void 0&&(E[y]=p[y]);return{$$typeof:e,type:f,key:T,ref:L,props:E,_owner:l.current}}return es.Fragment=n,es.jsx=d,es.jsxs=d,es}var ap;function Ly(){return ap||(ap=1,Au.exports=Dy()),Au.exports}var A=Ly(),ct=_c();const My=Tm(ct);var qo={},Du={exports:{}},ut={},Lu={exports:{}},Mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function by(){return up||(up=1,function(i){function e(M,G){var j=M.length;M.push(G);e:for(;0<j;){var S=j-1>>>1,R=M[S];if(0<l(R,G))M[S]=G,M[j]=R,j=S;else break e}}function n(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var G=M[0],j=M.pop();if(j!==G){M[0]=j;e:for(var S=0,R=M.length,X=R>>>1;S<X;){var ee=2*(S+1)-1,ie=M[ee],se=ee+1,he=M[se];if(0>l(ie,j))se<R&&0>l(he,ie)?(M[S]=he,M[se]=j,S=se):(M[S]=ie,M[ee]=j,S=ee);else if(se<R&&0>l(he,j))M[S]=he,M[se]=j,S=se;else break e}}return G}function l(M,G){var j=M.sortIndex-G.sortIndex;return j!==0?j:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],g=[],y=1,E=null,T=3,L=!1,F=!1,B=!1,q=typeof setTimeout=="function"?setTimeout:null,Pe=typeof clearTimeout=="function"?clearTimeout:null,be=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function xe(M){for(var G=n(g);G!==null;){if(G.callback===null)s(g);else if(G.startTime<=M)s(g),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(g)}}function Te(M){if(B=!1,xe(M),!F)if(n(p)!==null)F=!0,rt(tt);else{var G=n(g);G!==null&&Se(Te,G.startTime-M)}}function tt(M,G){F=!1,B&&(B=!1,Pe(nt),nt=-1),L=!0;var j=T;try{for(xe(G),E=n(p);E!==null&&(!(E.expirationTime>G)||M&&!Zn());){var S=E.callback;if(typeof S=="function"){E.callback=null,T=E.priorityLevel;var R=S(E.expirationTime<=G);G=i.unstable_now(),typeof R=="function"?E.callback=R:E===n(p)&&s(p),xe(G)}else s(p);E=n(p)}if(E!==null)var X=!0;else{var ee=n(g);ee!==null&&Se(Te,ee.startTime-G),X=!1}return X}finally{E=null,T=j,L=!1}}var Ae=!1,Ve=null,nt=-1,Et=5,Rt=-1;function Zn(){return!(i.unstable_now()-Rt<Et)}function Wt(){if(Ve!==null){var M=i.unstable_now();Rt=M;var G=!0;try{G=Ve(!0,M)}finally{G?ft():(Ae=!1,Ve=null)}}else Ae=!1}var ft;if(typeof be=="function")ft=function(){be(Wt)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Vt=Pt.port2;Pt.port1.onmessage=Wt,ft=function(){Vt.postMessage(null)}}else ft=function(){q(Wt,0)};function rt(M){Ve=M,Ae||(Ae=!0,ft())}function Se(M,G){nt=q(function(){M(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_continueExecution=function(){F||L||(F=!0,rt(tt))},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Et=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(M){switch(T){case 1:case 2:case 3:var G=3;break;default:G=T}var j=T;T=G;try{return M()}finally{T=j}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=T;T=M;try{return G()}finally{T=j}},i.unstable_scheduleCallback=function(M,G,j){var S=i.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?S+j:S):j=S,M){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=j+R,M={id:y++,callback:G,priorityLevel:M,startTime:j,expirationTime:R,sortIndex:-1},j>S?(M.sortIndex=j,e(g,M),n(p)===null&&M===n(g)&&(B?(Pe(nt),nt=-1):B=!0,Se(Te,j-S))):(M.sortIndex=R,e(p,M),F||L||(F=!0,rt(tt))),M},i.unstable_shouldYield=Zn,i.unstable_wrapCallback=function(M){var G=T;return function(){var j=T;T=G;try{return M.apply(this,arguments)}finally{T=j}}}}(Mu)),Mu}var cp;function Fy(){return cp||(cp=1,Lu.exports=by()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function Uy(){if(dp)return ut;dp=1;var i=_c(),e=Fy();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function T(t){return p.call(E,t)?!0:p.call(y,t)?!1:g.test(t)?E[t]=!0:(y[t]=!0,!1)}function L(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F(t,r,o,a){if(r===null||typeof r>"u"||L(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function B(t,r,o,a,c,h,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=m}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){q[t]=new B(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];q[r]=new B(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){q[t]=new B(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){q[t]=new B(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){q[t]=new B(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){q[t]=new B(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){q[t]=new B(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){q[t]=new B(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){q[t]=new B(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pe=/[\-:]([a-z])/g;function be(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(Pe,be);q[r]=new B(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(Pe,be);q[r]=new B(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(Pe,be);q[r]=new B(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){q[t]=new B(t,1,!1,t.toLowerCase(),null,!1,!1)}),q.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){q[t]=new B(t,1,!1,t.toLowerCase(),null,!0,!0)});function xe(t,r,o,a){var c=q.hasOwnProperty(r)?q[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(F(r,o,c,a)&&(o=null),a||c===null?T(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),Ve=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),Et=Symbol.for("react.profiler"),Rt=Symbol.for("react.provider"),Zn=Symbol.for("react.context"),Wt=Symbol.for("react.forward_ref"),ft=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),M=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var j=Object.assign,S;function R(t){if(S===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);S=r&&r[1]||""}return`
`+S+t}var X=!1;function ee(t,r){if(!t||X)return"";X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(k){var a=k}Reflect.construct(t,[],r)}else{try{r.call()}catch(k){a=k}t.call(r.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,_=h.length-1;1<=m&&0<=_&&c[m]!==h[_];)_--;for(;1<=m&&0<=_;m--,_--)if(c[m]!==h[_]){if(m!==1||_!==1)do if(m--,_--,0>_||c[m]!==h[_]){var v=`
`+c[m].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=m&&0<=_);break}}}finally{X=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function ie(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ve:return"Fragment";case Ae:return"Portal";case Et:return"Profiler";case nt:return"StrictMode";case ft:return"Suspense";case Pt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zn:return(t.displayName||"Context")+".Consumer";case Rt:return(t._context.displayName||"Context")+".Provider";case Wt:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vt:return r=t.displayName||null,r!==null?r:se(t.type)||"Memo";case rt:r=t._payload,t=t._init;try{return se(t(r))}catch{}}return null}function he(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===nt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ve(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(t){var r=ve(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Fs(t){t._valueTracker||(t._valueTracker=pt(t))}function cd(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=ve(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Us(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ul(t,r){var o=r.checked;return j({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function dd(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=ae(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function hd(t,r){r=r.checked,r!=null&&xe(t,"checked",r,!1)}function jl(t,r){hd(t,r);var o=ae(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?zl(t,r.type,o):r.hasOwnProperty("defaultValue")&&zl(t,r.type,ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function fd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function zl(t,r,o){(r!=="number"||Us(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var mi=Array.isArray;function Cr(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ae(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Wl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return j({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pd(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(mi(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:ae(o)}}function md(t,r){var o=ae(r.value),a=ae(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function gd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function _d(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?_d(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var js,vd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=js.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function gi(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F_=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(t){F_.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),_i[r]=_i[t]})});function yd(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||_i.hasOwnProperty(t)&&_i[t]?(""+r).trim():r+"px"}function wd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=yd(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var U_=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(t,r){if(r){if(U_[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Hl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function Gl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kl=null,Ir=null,Tr=null;function Ed(t){if(t=ji(t)){if(typeof Kl!="function")throw Error(n(280));var r=t.stateNode;r&&(r=ao(r),Kl(t.stateNode,t.type,r))}}function Sd(t){Ir?Tr?Tr.push(t):Tr=[t]:Ir=t}function Cd(){if(Ir){var t=Ir,r=Tr;if(Tr=Ir=null,Ed(t),r)for(t=0;t<r.length;t++)Ed(r[t])}}function Id(t,r){return t(r)}function Td(){}var ql=!1;function kd(t,r,o){if(ql)return t(r,o);ql=!0;try{return Id(t,r,o)}finally{ql=!1,(Ir!==null||Tr!==null)&&(Td(),Cd())}}function vi(t,r){var o=t.stateNode;if(o===null)return null;var a=ao(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Yl=!1;if(f)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Yl=!1}function j_(t,r,o,a,c,h,m,_,v){var k=Array.prototype.slice.call(arguments,3);try{r.apply(o,k)}catch(P){this.onError(P)}}var wi=!1,zs=null,Ws=!1,Ql=null,z_={onError:function(t){wi=!0,zs=t}};function W_(t,r,o,a,c,h,m,_,v){wi=!1,zs=null,j_.apply(z_,arguments)}function V_(t,r,o,a,c,h,m,_,v){if(W_.apply(this,arguments),wi){if(wi){var k=zs;wi=!1,zs=null}else throw Error(n(198));Ws||(Ws=!0,Ql=k)}}function er(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Nd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Rd(t){if(er(t)!==t)throw Error(n(188))}function B_(t){var r=t.alternate;if(!r){if(r=er(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Rd(c),t;if(h===a)return Rd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,_=c.child;_;){if(_===o){m=!0,o=c,a=h;break}if(_===a){m=!0,a=c,o=h;break}_=_.sibling}if(!m){for(_=h.child;_;){if(_===o){m=!0,o=h,a=c;break}if(_===a){m=!0,a=h,o=c;break}_=_.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Pd(t){return t=B_(t),t!==null?xd(t):null}function xd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=xd(t);if(r!==null)return r;t=t.sibling}return null}var Ad=e.unstable_scheduleCallback,Od=e.unstable_cancelCallback,H_=e.unstable_shouldYield,$_=e.unstable_requestPaint,ke=e.unstable_now,G_=e.unstable_getCurrentPriorityLevel,Xl=e.unstable_ImmediatePriority,Dd=e.unstable_UserBlockingPriority,Vs=e.unstable_NormalPriority,K_=e.unstable_LowPriority,Ld=e.unstable_IdlePriority,Bs=null,Bt=null;function q_(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Bs,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:X_,Y_=Math.log,Q_=Math.LN2;function X_(t){return t>>>=0,t===0?32:31-(Y_(t)/Q_|0)|0}var Hs=64,$s=4194304;function Ei(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var _=m&~c;_!==0?a=Ei(_):(h&=m,h!==0&&(a=Ei(h)))}else m=o&~c,m!==0?a=Ei(m):h!==0&&(a=Ei(h));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-xt(r),c=1<<o,a|=t[o],r&=~c;return a}function J_(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z_(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-xt(h),_=1<<m,v=c[m];v===-1?(!(_&o)||_&a)&&(c[m]=J_(_,r)):v<=r&&(t.expiredLanes|=_),h&=~_}}function Jl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Md(){var t=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),t}function Zl(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Si(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-xt(r),t[r]=o}function ev(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-xt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ea(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-xt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var ue=0;function bd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fd,ta,Ud,jd,zd,na=!1,Ks=[],_n=null,vn=null,yn=null,Ci=new Map,Ii=new Map,wn=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(t,r){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Ci.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(r.pointerId)}}function Ti(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=ji(r),r!==null&&ta(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function nv(t,r,o,a,c){switch(r){case"focusin":return _n=Ti(_n,t,r,o,a,c),!0;case"dragenter":return vn=Ti(vn,t,r,o,a,c),!0;case"mouseover":return yn=Ti(yn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return Ci.set(h,Ti(Ci.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Ii.set(h,Ti(Ii.get(h)||null,t,r,o,a,c)),!0}return!1}function Vd(t){var r=tr(t.target);if(r!==null){var o=er(r);if(o!==null){if(r=o.tag,r===13){if(r=Nd(o),r!==null){t.blockedOn=r,zd(t.priority,function(){Ud(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=ia(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);$l=a,o.target.dispatchEvent(a),$l=null}else return r=ji(o),r!==null&&ta(r),t.blockedOn=o,!1;r.shift()}return!0}function Bd(t,r,o){qs(t)&&o.delete(r)}function rv(){na=!1,_n!==null&&qs(_n)&&(_n=null),vn!==null&&qs(vn)&&(vn=null),yn!==null&&qs(yn)&&(yn=null),Ci.forEach(Bd),Ii.forEach(Bd)}function ki(t,r){t.blockedOn===r&&(t.blockedOn=null,na||(na=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rv)))}function Ni(t){function r(c){return ki(c,t)}if(0<Ks.length){ki(Ks[0],t);for(var o=1;o<Ks.length;o++){var a=Ks[o];a.blockedOn===t&&(a.blockedOn=null)}}for(_n!==null&&ki(_n,t),vn!==null&&ki(vn,t),yn!==null&&ki(yn,t),Ci.forEach(r),Ii.forEach(r),o=0;o<wn.length;o++)a=wn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<wn.length&&(o=wn[0],o.blockedOn===null);)Vd(o),o.blockedOn===null&&wn.shift()}var kr=Te.ReactCurrentBatchConfig,Ys=!0;function iv(t,r,o,a){var c=ue,h=kr.transition;kr.transition=null;try{ue=1,ra(t,r,o,a)}finally{ue=c,kr.transition=h}}function sv(t,r,o,a){var c=ue,h=kr.transition;kr.transition=null;try{ue=4,ra(t,r,o,a)}finally{ue=c,kr.transition=h}}function ra(t,r,o,a){if(Ys){var c=ia(t,r,o,a);if(c===null)Ea(t,r,a,Qs,o),Wd(t,a);else if(nv(c,t,r,o,a))a.stopPropagation();else if(Wd(t,a),r&4&&-1<tv.indexOf(t)){for(;c!==null;){var h=ji(c);if(h!==null&&Fd(h),h=ia(t,r,o,a),h===null&&Ea(t,r,a,Qs,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Ea(t,r,a,null,o)}}var Qs=null;function ia(t,r,o,a){if(Qs=null,t=Gl(a),t=tr(t),t!==null)if(r=er(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Nd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Qs=t,null}function Hd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G_()){case Xl:return 1;case Dd:return 4;case Vs:case K_:return 16;case Ld:return 536870912;default:return 16}default:return 16}}var En=null,sa=null,Xs=null;function $d(){if(Xs)return Xs;var t,r=sa,o=r.length,a,c="value"in En?En.value:En.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&r[o-a]===c[h-a];a++);return Xs=c.slice(t,1<a?1-a:void 0)}function Js(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Zs(){return!0}function Gd(){return!1}function mt(t){function r(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Zs:Gd,this.isPropagationStopped=Gd,this}return j(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),r}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oa=mt(Nr),Ri=j({},Nr,{view:0,detail:0}),ov=mt(Ri),la,aa,Pi,eo=j({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(la=t.screenX-Pi.screenX,aa=t.screenY-Pi.screenY):aa=la=0,Pi=t),la)},movementY:function(t){return"movementY"in t?t.movementY:aa}}),Kd=mt(eo),lv=j({},eo,{dataTransfer:0}),av=mt(lv),uv=j({},Ri,{relatedTarget:0}),ua=mt(uv),cv=j({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=mt(cv),hv=j({},Nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fv=mt(hv),pv=j({},Nr,{data:0}),qd=mt(pv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=_v[t])?!!r[t]:!1}function ca(){return vv}var yv=j({},Ri,{key:function(t){if(t.key){var r=mv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Js(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(t){return t.type==="keypress"?Js(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Js(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wv=mt(yv),Ev=j({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=mt(Ev),Sv=j({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),Cv=mt(Sv),Iv=j({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=mt(Iv),kv=j({},eo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=mt(kv),Rv=[9,13,27,32],da=f&&"CompositionEvent"in window,xi=null;f&&"documentMode"in document&&(xi=document.documentMode);var Pv=f&&"TextEvent"in window&&!xi,Qd=f&&(!da||xi&&8<xi&&11>=xi),Xd=" ",Jd=!1;function Zd(t,r){switch(t){case"keyup":return Rv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function xv(t,r){switch(t){case"compositionend":return eh(r);case"keypress":return r.which!==32?null:(Jd=!0,Xd);case"textInput":return t=r.data,t===Xd&&Jd?null:t;default:return null}}function Av(t,r){if(Rr)return t==="compositionend"||!da&&Zd(t,r)?(t=$d(),Xs=sa=En=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Qd&&r.locale!=="ko"?null:r.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Ov[t.type]:r==="textarea"}function nh(t,r,o,a){Sd(a),r=so(r,"onChange"),0<r.length&&(o=new oa("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var Ai=null,Oi=null;function Dv(t){wh(t,0)}function to(t){var r=Dr(t);if(cd(r))return t}function Lv(t,r){if(t==="change")return r}var rh=!1;if(f){var ha;if(f){var fa="oninput"in document;if(!fa){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),fa=typeof ih.oninput=="function"}ha=fa}else ha=!1;rh=ha&&(!document.documentMode||9<document.documentMode)}function sh(){Ai&&(Ai.detachEvent("onpropertychange",oh),Oi=Ai=null)}function oh(t){if(t.propertyName==="value"&&to(Oi)){var r=[];nh(r,Oi,t,Gl(t)),kd(Dv,r)}}function Mv(t,r,o){t==="focusin"?(sh(),Ai=r,Oi=o,Ai.attachEvent("onpropertychange",oh)):t==="focusout"&&sh()}function bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return to(Oi)}function Fv(t,r){if(t==="click")return to(r)}function Uv(t,r){if(t==="input"||t==="change")return to(r)}function jv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var At=typeof Object.is=="function"?Object.is:jv;function Di(t,r){if(At(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(r,c)||!At(t[c],r[c]))return!1}return!0}function lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ah(t,r){var o=lh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=lh(o)}}function uh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?uh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function ch(){for(var t=window,r=Us();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Us(t.document)}return r}function pa(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function zv(t){var r=ch(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&uh(o.ownerDocument.documentElement,o)){if(a!==null&&pa(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=ah(o,h);var m=ah(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wv=f&&"documentMode"in document&&11>=document.documentMode,Pr=null,ma=null,Li=null,ga=!1;function dh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ga||Pr==null||Pr!==Us(a)||(a=Pr,"selectionStart"in a&&pa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Li&&Di(Li,a)||(Li=a,a=so(ma,"onSelect"),0<a.length&&(r=new oa("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Pr)))}function no(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var xr={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},_a={},hh={};f&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function ro(t){if(_a[t])return _a[t];if(!xr[t])return t;var r=xr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in hh)return _a[t]=r[o];return t}var fh=ro("animationend"),ph=ro("animationiteration"),mh=ro("animationstart"),gh=ro("transitionend"),_h=new Map,vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(t,r){_h.set(t,r),u(r,[t])}for(var va=0;va<vh.length;va++){var ya=vh[va],Vv=ya.toLowerCase(),Bv=ya[0].toUpperCase()+ya.slice(1);Sn(Vv,"on"+Bv)}Sn(fh,"onAnimationEnd"),Sn(ph,"onAnimationIteration"),Sn(mh,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(gh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function yh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,V_(a,r,void 0,t),t.currentTarget=null}function wh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var m=a.length-1;0<=m;m--){var _=a[m],v=_.instance,k=_.currentTarget;if(_=_.listener,v!==h&&c.isPropagationStopped())break e;yh(c,_,k),h=v}else for(m=0;m<a.length;m++){if(_=a[m],v=_.instance,k=_.currentTarget,_=_.listener,v!==h&&c.isPropagationStopped())break e;yh(c,_,k),h=v}}}if(Ws)throw t=Ql,Ws=!1,Ql=null,t}function me(t,r){var o=r[Na];o===void 0&&(o=r[Na]=new Set);var a=t+"__bubble";o.has(a)||(Eh(r,t,2,!1),o.add(a))}function wa(t,r,o){var a=0;r&&(a|=4),Eh(o,t,a,r)}var io="_reactListening"+Math.random().toString(36).slice(2);function bi(t){if(!t[io]){t[io]=!0,s.forEach(function(o){o!=="selectionchange"&&(Hv.has(o)||wa(o,!1,t),wa(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[io]||(r[io]=!0,wa("selectionchange",!1,r))}}function Eh(t,r,o,a){switch(Hd(r)){case 1:var c=iv;break;case 4:c=sv;break;default:c=ra}o=c.bind(null,r,o,t),c=void 0,!Yl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function Ea(t,r,o,a,c){var h=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var v=m.tag;if((v===3||v===4)&&(v=m.stateNode.containerInfo,v===c||v.nodeType===8&&v.parentNode===c))return;m=m.return}for(;_!==null;){if(m=tr(_),m===null)return;if(v=m.tag,v===5||v===6){a=h=m;continue e}_=_.parentNode}}a=a.return}kd(function(){var k=h,P=Gl(o),x=[];e:{var N=_h.get(t);if(N!==void 0){var b=oa,z=t;switch(t){case"keypress":if(Js(o)===0)break e;case"keydown":case"keyup":b=wv;break;case"focusin":z="focus",b=ua;break;case"focusout":z="blur",b=ua;break;case"beforeblur":case"afterblur":b=ua;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Cv;break;case fh:case ph:case mh:b=dv;break;case gh:b=Tv;break;case"scroll":b=ov;break;case"wheel":b=Nv;break;case"copy":case"cut":case"paste":b=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Yd}var W=(r&4)!==0,Ne=!W&&t==="scroll",C=W?N!==null?N+"Capture":null:N;W=[];for(var w=k,I;w!==null;){I=w;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,C!==null&&(O=vi(w,C),O!=null&&W.push(Fi(w,O,I)))),Ne)break;w=w.return}0<W.length&&(N=new b(N,z,null,o,P),x.push({event:N,listeners:W}))}}if(!(r&7)){e:{if(N=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",N&&o!==$l&&(z=o.relatedTarget||o.fromElement)&&(tr(z)||z[Xt]))break e;if((b||N)&&(N=P.window===P?P:(N=P.ownerDocument)?N.defaultView||N.parentWindow:window,b?(z=o.relatedTarget||o.toElement,b=k,z=z?tr(z):null,z!==null&&(Ne=er(z),z!==Ne||z.tag!==5&&z.tag!==6)&&(z=null)):(b=null,z=k),b!==z)){if(W=Kd,O="onMouseLeave",C="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(W=Yd,O="onPointerLeave",C="onPointerEnter",w="pointer"),Ne=b==null?N:Dr(b),I=z==null?N:Dr(z),N=new W(O,w+"leave",b,o,P),N.target=Ne,N.relatedTarget=I,O=null,tr(P)===k&&(W=new W(C,w+"enter",z,o,P),W.target=I,W.relatedTarget=Ne,O=W),Ne=O,b&&z)t:{for(W=b,C=z,w=0,I=W;I;I=Ar(I))w++;for(I=0,O=C;O;O=Ar(O))I++;for(;0<w-I;)W=Ar(W),w--;for(;0<I-w;)C=Ar(C),I--;for(;w--;){if(W===C||C!==null&&W===C.alternate)break t;W=Ar(W),C=Ar(C)}W=null}else W=null;b!==null&&Sh(x,N,b,W,!1),z!==null&&Ne!==null&&Sh(x,Ne,z,W,!0)}}e:{if(N=k?Dr(k):window,b=N.nodeName&&N.nodeName.toLowerCase(),b==="select"||b==="input"&&N.type==="file")var V=Lv;else if(th(N))if(rh)V=Uv;else{V=bv;var H=Mv}else(b=N.nodeName)&&b.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(V=Fv);if(V&&(V=V(t,k))){nh(x,V,o,P);break e}H&&H(t,N,k),t==="focusout"&&(H=N._wrapperState)&&H.controlled&&N.type==="number"&&zl(N,"number",N.value)}switch(H=k?Dr(k):window,t){case"focusin":(th(H)||H.contentEditable==="true")&&(Pr=H,ma=k,Li=null);break;case"focusout":Li=ma=Pr=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,dh(x,o,P);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":dh(x,o,P)}var $;if(da)e:{switch(t){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Rr?Zd(t,o)&&(Q="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Q="onCompositionStart");Q&&(Qd&&o.locale!=="ko"&&(Rr||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Rr&&($=$d()):(En=P,sa="value"in En?En.value:En.textContent,Rr=!0)),H=so(k,Q),0<H.length&&(Q=new qd(Q,t,null,o,P),x.push({event:Q,listeners:H}),$?Q.data=$:($=eh(o),$!==null&&(Q.data=$)))),($=Pv?xv(t,o):Av(t,o))&&(k=so(k,"onBeforeInput"),0<k.length&&(P=new qd("onBeforeInput","beforeinput",null,o,P),x.push({event:P,listeners:k}),P.data=$))}wh(x,r)})}function Fi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function so(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=vi(t,o),h!=null&&a.unshift(Fi(t,h,c)),h=vi(t,r),h!=null&&a.push(Fi(t,h,c))),t=t.return}return a}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sh(t,r,o,a,c){for(var h=r._reactName,m=[];o!==null&&o!==a;){var _=o,v=_.alternate,k=_.stateNode;if(v!==null&&v===a)break;_.tag===5&&k!==null&&(_=k,c?(v=vi(o,h),v!=null&&m.unshift(Fi(o,v,_))):c||(v=vi(o,h),v!=null&&m.push(Fi(o,v,_)))),o=o.return}m.length!==0&&t.push({event:r,listeners:m})}var $v=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function Ch(t){return(typeof t=="string"?t:""+t).replace($v,`
`).replace(Gv,"")}function oo(t,r,o){if(r=Ch(r),Ch(t)!==r&&o)throw Error(n(425))}function lo(){}var Sa=null,Ca=null;function Ia(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,Kv=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(t){return Ih.resolve(null).then(t).catch(Yv)}:Ta;function Yv(t){setTimeout(function(){throw t})}function ka(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Ni(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Ni(r)}function Cn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Th(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Or=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Or,Ui="__reactProps$"+Or,Xt="__reactContainer$"+Or,Na="__reactEvents$"+Or,Qv="__reactListeners$"+Or,Xv="__reactHandles$"+Or;function tr(t){var r=t[Ht];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Xt]||o[Ht]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Th(t);t!==null;){if(o=t[Ht])return o;t=Th(t)}return r}t=o,o=t.parentNode}return null}function ji(t){return t=t[Ht]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ao(t){return t[Ui]||null}var Ra=[],Lr=-1;function In(t){return{current:t}}function ge(t){0>Lr||(t.current=Ra[Lr],Ra[Lr]=null,Lr--)}function fe(t,r){Lr++,Ra[Lr]=t.current,t.current=r}var Tn={},Ge=In(Tn),it=In(!1),nr=Tn;function Mr(t,r){var o=t.type.contextTypes;if(!o)return Tn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function st(t){return t=t.childContextTypes,t!=null}function uo(){ge(it),ge(Ge)}function kh(t,r,o){if(Ge.current!==Tn)throw Error(n(168));fe(Ge,r),fe(it,o)}function Nh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,he(t)||"Unknown",c));return j({},o,a)}function co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tn,nr=Ge.current,fe(Ge,t),fe(it,it.current),!0}function Rh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Nh(t,r,nr),a.__reactInternalMemoizedMergedChildContext=t,ge(it),ge(Ge),fe(Ge,t)):ge(it),fe(it,o)}var Jt=null,ho=!1,Pa=!1;function Ph(t){Jt===null?Jt=[t]:Jt.push(t)}function Jv(t){ho=!0,Ph(t)}function kn(){if(!Pa&&Jt!==null){Pa=!0;var t=0,r=ue;try{var o=Jt;for(ue=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}Jt=null,ho=!1}catch(c){throw Jt!==null&&(Jt=Jt.slice(t+1)),Ad(Xl,kn),c}finally{ue=r,Pa=!1}}return null}var br=[],Fr=0,fo=null,po=0,St=[],Ct=0,rr=null,Zt=1,en="";function ir(t,r){br[Fr++]=po,br[Fr++]=fo,fo=t,po=r}function xh(t,r,o){St[Ct++]=Zt,St[Ct++]=en,St[Ct++]=rr,rr=t;var a=Zt;t=en;var c=32-xt(a)-1;a&=~(1<<c),o+=1;var h=32-xt(r)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,Zt=1<<32-xt(r)+c|o<<c|a,en=h+t}else Zt=1<<h|o<<c|a,en=t}function xa(t){t.return!==null&&(ir(t,1),xh(t,1,0))}function Aa(t){for(;t===fo;)fo=br[--Fr],br[Fr]=null,po=br[--Fr],br[Fr]=null;for(;t===rr;)rr=St[--Ct],St[Ct]=null,en=St[--Ct],St[Ct]=null,Zt=St[--Ct],St[Ct]=null}var gt=null,_t=null,ye=!1,Ot=null;function Ah(t,r){var o=Nt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Oh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gt=t,_t=Cn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gt=t,_t=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=rr!==null?{id:Zt,overflow:en}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Nt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,gt=t,_t=null,!0):!1;default:return!1}}function Oa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Da(t){if(ye){var r=_t;if(r){var o=r;if(!Oh(t,r)){if(Oa(t))throw Error(n(418));r=Cn(o.nextSibling);var a=gt;r&&Oh(t,r)?Ah(a,o):(t.flags=t.flags&-4097|2,ye=!1,gt=t)}}else{if(Oa(t))throw Error(n(418));t.flags=t.flags&-4097|2,ye=!1,gt=t}}}function Dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function mo(t){if(t!==gt)return!1;if(!ye)return Dh(t),ye=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Ia(t.type,t.memoizedProps)),r&&(r=_t)){if(Oa(t))throw Lh(),Error(n(418));for(;r;)Ah(t,r),r=Cn(r.nextSibling)}if(Dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){_t=Cn(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}_t=null}}else _t=gt?Cn(t.stateNode.nextSibling):null;return!0}function Lh(){for(var t=_t;t;)t=Cn(t.nextSibling)}function Ur(){_t=gt=null,ye=!1}function La(t){Ot===null?Ot=[t]:Ot.push(t)}var Zv=Te.ReactCurrentBatchConfig;function zi(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(m){var _=c.refs;m===null?delete _[h]:_[h]=m},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function go(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Mh(t){var r=t._init;return r(t._payload)}function bh(t){function r(C,w){if(t){var I=C.deletions;I===null?(C.deletions=[w],C.flags|=16):I.push(w)}}function o(C,w){if(!t)return null;for(;w!==null;)r(C,w),w=w.sibling;return null}function a(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function c(C,w){return C=Ln(C,w),C.index=0,C.sibling=null,C}function h(C,w,I){return C.index=I,t?(I=C.alternate,I!==null?(I=I.index,I<w?(C.flags|=2,w):I):(C.flags|=2,w)):(C.flags|=1048576,w)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,w,I,O){return w===null||w.tag!==6?(w=Tu(I,C.mode,O),w.return=C,w):(w=c(w,I),w.return=C,w)}function v(C,w,I,O){var V=I.type;return V===Ve?P(C,w,I.props.children,O,I.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===rt&&Mh(V)===w.type)?(O=c(w,I.props),O.ref=zi(C,w,I),O.return=C,O):(O=zo(I.type,I.key,I.props,null,C.mode,O),O.ref=zi(C,w,I),O.return=C,O)}function k(C,w,I,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=ku(I,C.mode,O),w.return=C,w):(w=c(w,I.children||[]),w.return=C,w)}function P(C,w,I,O,V){return w===null||w.tag!==7?(w=hr(I,C.mode,O,V),w.return=C,w):(w=c(w,I),w.return=C,w)}function x(C,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Tu(""+w,C.mode,I),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case tt:return I=zo(w.type,w.key,w.props,null,C.mode,I),I.ref=zi(C,null,w),I.return=C,I;case Ae:return w=ku(w,C.mode,I),w.return=C,w;case rt:var O=w._init;return x(C,O(w._payload),I)}if(mi(w)||G(w))return w=hr(w,C.mode,I,null),w.return=C,w;go(C,w)}return null}function N(C,w,I,O){var V=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:_(C,w,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case tt:return I.key===V?v(C,w,I,O):null;case Ae:return I.key===V?k(C,w,I,O):null;case rt:return V=I._init,N(C,w,V(I._payload),O)}if(mi(I)||G(I))return V!==null?null:P(C,w,I,O,null);go(C,I)}return null}function b(C,w,I,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return C=C.get(I)||null,_(w,C,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case tt:return C=C.get(O.key===null?I:O.key)||null,v(w,C,O,V);case Ae:return C=C.get(O.key===null?I:O.key)||null,k(w,C,O,V);case rt:var H=O._init;return b(C,w,I,H(O._payload),V)}if(mi(O)||G(O))return C=C.get(I)||null,P(w,C,O,V,null);go(w,O)}return null}function z(C,w,I,O){for(var V=null,H=null,$=w,Q=w=0,je=null;$!==null&&Q<I.length;Q++){$.index>Q?(je=$,$=null):je=$.sibling;var oe=N(C,$,I[Q],O);if(oe===null){$===null&&($=je);break}t&&$&&oe.alternate===null&&r(C,$),w=h(oe,w,Q),H===null?V=oe:H.sibling=oe,H=oe,$=je}if(Q===I.length)return o(C,$),ye&&ir(C,Q),V;if($===null){for(;Q<I.length;Q++)$=x(C,I[Q],O),$!==null&&(w=h($,w,Q),H===null?V=$:H.sibling=$,H=$);return ye&&ir(C,Q),V}for($=a(C,$);Q<I.length;Q++)je=b($,C,Q,I[Q],O),je!==null&&(t&&je.alternate!==null&&$.delete(je.key===null?Q:je.key),w=h(je,w,Q),H===null?V=je:H.sibling=je,H=je);return t&&$.forEach(function(Mn){return r(C,Mn)}),ye&&ir(C,Q),V}function W(C,w,I,O){var V=G(I);if(typeof V!="function")throw Error(n(150));if(I=V.call(I),I==null)throw Error(n(151));for(var H=V=null,$=w,Q=w=0,je=null,oe=I.next();$!==null&&!oe.done;Q++,oe=I.next()){$.index>Q?(je=$,$=null):je=$.sibling;var Mn=N(C,$,oe.value,O);if(Mn===null){$===null&&($=je);break}t&&$&&Mn.alternate===null&&r(C,$),w=h(Mn,w,Q),H===null?V=Mn:H.sibling=Mn,H=Mn,$=je}if(oe.done)return o(C,$),ye&&ir(C,Q),V;if($===null){for(;!oe.done;Q++,oe=I.next())oe=x(C,oe.value,O),oe!==null&&(w=h(oe,w,Q),H===null?V=oe:H.sibling=oe,H=oe);return ye&&ir(C,Q),V}for($=a(C,$);!oe.done;Q++,oe=I.next())oe=b($,C,Q,oe.value,O),oe!==null&&(t&&oe.alternate!==null&&$.delete(oe.key===null?Q:oe.key),w=h(oe,w,Q),H===null?V=oe:H.sibling=oe,H=oe);return t&&$.forEach(function(Ay){return r(C,Ay)}),ye&&ir(C,Q),V}function Ne(C,w,I,O){if(typeof I=="object"&&I!==null&&I.type===Ve&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case tt:e:{for(var V=I.key,H=w;H!==null;){if(H.key===V){if(V=I.type,V===Ve){if(H.tag===7){o(C,H.sibling),w=c(H,I.props.children),w.return=C,C=w;break e}}else if(H.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===rt&&Mh(V)===H.type){o(C,H.sibling),w=c(H,I.props),w.ref=zi(C,H,I),w.return=C,C=w;break e}o(C,H);break}else r(C,H);H=H.sibling}I.type===Ve?(w=hr(I.props.children,C.mode,O,I.key),w.return=C,C=w):(O=zo(I.type,I.key,I.props,null,C.mode,O),O.ref=zi(C,w,I),O.return=C,C=O)}return m(C);case Ae:e:{for(H=I.key;w!==null;){if(w.key===H)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){o(C,w.sibling),w=c(w,I.children||[]),w.return=C,C=w;break e}else{o(C,w);break}else r(C,w);w=w.sibling}w=ku(I,C.mode,O),w.return=C,C=w}return m(C);case rt:return H=I._init,Ne(C,w,H(I._payload),O)}if(mi(I))return z(C,w,I,O);if(G(I))return W(C,w,I,O);go(C,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(o(C,w.sibling),w=c(w,I),w.return=C,C=w):(o(C,w),w=Tu(I,C.mode,O),w.return=C,C=w),m(C)):o(C,w)}return Ne}var jr=bh(!0),Fh=bh(!1),_o=In(null),vo=null,zr=null,Ma=null;function ba(){Ma=zr=vo=null}function Fa(t){var r=_o.current;ge(_o),t._currentValue=r}function Ua(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Wr(t,r){vo=t,Ma=zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(ot=!0),t.firstContext=null)}function It(t){var r=t._currentValue;if(Ma!==t)if(t={context:t,memoizedValue:r,next:null},zr===null){if(vo===null)throw Error(n(308));zr=t,vo.dependencies={lanes:0,firstContext:t}}else zr=zr.next=t;return r}var sr=null;function ja(t){sr===null?sr=[t]:sr.push(t)}function Uh(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,ja(r)):(o.next=c.next,c.next=o),r.interleaved=o,tn(t,a)}function tn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Nn=!1;function za(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Rn(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,re&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,tn(t,o)}return c=a.interleaved,c===null?(r.next=r,ja(a)):(r.next=c.next,c.next=r),a.interleaved=r,tn(t,o)}function yo(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ea(t,o)}}function zh(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function wo(t,r,o,a){var c=t.updateQueue;Nn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var v=_,k=v.next;v.next=null,m===null?h=k:m.next=k,m=v;var P=t.alternate;P!==null&&(P=P.updateQueue,_=P.lastBaseUpdate,_!==m&&(_===null?P.firstBaseUpdate=k:_.next=k,P.lastBaseUpdate=v))}if(h!==null){var x=c.baseState;m=0,P=k=v=null,_=h;do{var N=_.lane,b=_.eventTime;if((a&N)===N){P!==null&&(P=P.next={eventTime:b,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var z=t,W=_;switch(N=r,b=o,W.tag){case 1:if(z=W.payload,typeof z=="function"){x=z.call(b,x,N);break e}x=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=W.payload,N=typeof z=="function"?z.call(b,x,N):z,N==null)break e;x=j({},x,N);break e;case 2:Nn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,N=c.effects,N===null?c.effects=[_]:N.push(_))}else b={eventTime:b,lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},P===null?(k=P=b,v=x):P=P.next=b,m|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);if(P===null&&(v=x),c.baseState=v,c.firstBaseUpdate=k,c.lastBaseUpdate=P,r=c.shared.interleaved,r!==null){c=r;do m|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);ar|=m,t.lanes=m,t.memoizedState=x}}function Wh(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Wi={},$t=In(Wi),Vi=In(Wi),Bi=In(Wi);function or(t){if(t===Wi)throw Error(n(174));return t}function Wa(t,r){switch(fe(Bi,r),fe(Vi,t),fe($t,Wi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Vl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Vl(r,t)}ge($t),fe($t,r)}function Vr(){ge($t),ge(Vi),ge(Bi)}function Vh(t){or(Bi.current);var r=or($t.current),o=Vl(r,t.type);r!==o&&(fe(Vi,t),fe($t,o))}function Va(t){Vi.current===t&&(ge($t),ge(Vi))}var we=In(0);function Eo(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ba=[];function Ha(){for(var t=0;t<Ba.length;t++)Ba[t]._workInProgressVersionPrimary=null;Ba.length=0}var So=Te.ReactCurrentDispatcher,$a=Te.ReactCurrentBatchConfig,lr=0,Ee=null,Oe=null,Fe=null,Co=!1,Hi=!1,$i=0,ey=0;function Ke(){throw Error(n(321))}function Ga(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!At(t[o],r[o]))return!1;return!0}function Ka(t,r,o,a,c,h){if(lr=h,Ee=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,So.current=t===null||t.memoizedState===null?iy:sy,t=o(a,c),Hi){h=0;do{if(Hi=!1,$i=0,25<=h)throw Error(n(301));h+=1,Fe=Oe=null,r.updateQueue=null,So.current=oy,t=o(a,c)}while(Hi)}if(So.current=ko,r=Oe!==null&&Oe.next!==null,lr=0,Fe=Oe=Ee=null,Co=!1,r)throw Error(n(300));return t}function qa(){var t=$i!==0;return $i=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Tt(){if(Oe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var r=Fe===null?Ee.memoizedState:Fe.next;if(r!==null)Fe=r,Oe=t;else{if(t===null)throw Error(n(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Gi(t,r){return typeof r=="function"?r(t):r}function Ya(t){var r=Tt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Oe,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=m=null,v=null,k=h;do{var P=k.lane;if((lr&P)===P)v!==null&&(v=v.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var x={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};v===null?(_=v=x,m=a):v=v.next=x,Ee.lanes|=P,ar|=P}k=k.next}while(k!==null&&k!==h);v===null?m=a:v.next=_,At(a,r.memoizedState)||(ot=!0),r.memoizedState=a,r.baseState=m,r.baseQueue=v,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ee.lanes|=h,ar|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Qa(t){var r=Tt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);At(h,r.memoizedState)||(ot=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function Bh(){}function Hh(t,r){var o=Ee,a=Tt(),c=r(),h=!At(a.memoizedState,c);if(h&&(a.memoizedState=c,ot=!0),a=a.queue,Xa(Kh.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||Fe!==null&&Fe.memoizedState.tag&1){if(o.flags|=2048,Ki(9,Gh.bind(null,o,a,c,r),void 0,null),Ue===null)throw Error(n(349));lr&30||$h(o,r,c)}return c}function $h(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Gh(t,r,o,a){r.value=o,r.getSnapshot=a,qh(r)&&Yh(t)}function Kh(t,r,o){return o(function(){qh(r)&&Yh(t)})}function qh(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!At(t,o)}catch{return!0}}function Yh(t){var r=tn(t,1);r!==null&&bt(r,t,1,-1)}function Qh(t){var r=Gt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},r.queue=t,t=t.dispatch=ry.bind(null,Ee,t),[r.memoizedState,t]}function Ki(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function Xh(){return Tt().memoizedState}function Io(t,r,o,a){var c=Gt();Ee.flags|=t,c.memoizedState=Ki(1|r,o,void 0,a===void 0?null:a)}function To(t,r,o,a){var c=Tt();a=a===void 0?null:a;var h=void 0;if(Oe!==null){var m=Oe.memoizedState;if(h=m.destroy,a!==null&&Ga(a,m.deps)){c.memoizedState=Ki(r,o,h,a);return}}Ee.flags|=t,c.memoizedState=Ki(1|r,o,h,a)}function Jh(t,r){return Io(8390656,8,t,r)}function Xa(t,r){return To(2048,8,t,r)}function Zh(t,r){return To(4,2,t,r)}function ef(t,r){return To(4,4,t,r)}function tf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function nf(t,r,o){return o=o!=null?o.concat([t]):null,To(4,4,tf.bind(null,r,t),o)}function Ja(){}function rf(t,r){var o=Tt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Ga(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function sf(t,r){var o=Tt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Ga(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function of(t,r,o){return lr&21?(At(o,r)||(o=Md(),Ee.lanes|=o,ar|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=o)}function ty(t,r){var o=ue;ue=o!==0&&4>o?o:4,t(!0);var a=$a.transition;$a.transition={};try{t(!1),r()}finally{ue=o,$a.transition=a}}function lf(){return Tt().memoizedState}function ny(t,r,o){var a=On(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},af(t))uf(r,o);else if(o=Uh(t,r,o,a),o!==null){var c=Je();bt(o,t,a,c),cf(o,r,a)}}function ry(t,r,o){var a=On(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(af(t))uf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var m=r.lastRenderedState,_=h(m,o);if(c.hasEagerState=!0,c.eagerState=_,At(_,m)){var v=r.interleaved;v===null?(c.next=c,ja(r)):(c.next=v.next,v.next=c),r.interleaved=c;return}}catch{}finally{}o=Uh(t,r,c,a),o!==null&&(c=Je(),bt(o,t,a,c),cf(o,r,a))}}function af(t){var r=t.alternate;return t===Ee||r!==null&&r===Ee}function uf(t,r){Hi=Co=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function cf(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ea(t,o)}}var ko={readContext:It,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},iy={readContext:It,useCallback:function(t,r){return Gt().memoizedState=[t,r===void 0?null:r],t},useContext:It,useEffect:Jh,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Io(4194308,4,tf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Io(4194308,4,t,r)},useInsertionEffect:function(t,r){return Io(4,2,t,r)},useMemo:function(t,r){var o=Gt();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Gt();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=ny.bind(null,Ee,t),[a.memoizedState,t]},useRef:function(t){var r=Gt();return t={current:t},r.memoizedState=t},useState:Qh,useDebugValue:Ja,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=Qh(!1),r=t[0];return t=ty.bind(null,t[1]),Gt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Ee,c=Gt();if(ye){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Ue===null)throw Error(n(349));lr&30||$h(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,Jh(Kh.bind(null,a,h,t),[t]),a.flags|=2048,Ki(9,Gh.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=Gt(),r=Ue.identifierPrefix;if(ye){var o=en,a=Zt;o=(a&~(1<<32-xt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=$i++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=ey++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},sy={readContext:It,useCallback:rf,useContext:It,useEffect:Xa,useImperativeHandle:nf,useInsertionEffect:Zh,useLayoutEffect:ef,useMemo:sf,useReducer:Ya,useRef:Xh,useState:function(){return Ya(Gi)},useDebugValue:Ja,useDeferredValue:function(t){var r=Tt();return of(r,Oe.memoizedState,t)},useTransition:function(){var t=Ya(Gi)[0],r=Tt().memoizedState;return[t,r]},useMutableSource:Bh,useSyncExternalStore:Hh,useId:lf,unstable_isNewReconciler:!1},oy={readContext:It,useCallback:rf,useContext:It,useEffect:Xa,useImperativeHandle:nf,useInsertionEffect:Zh,useLayoutEffect:ef,useMemo:sf,useReducer:Qa,useRef:Xh,useState:function(){return Qa(Gi)},useDebugValue:Ja,useDeferredValue:function(t){var r=Tt();return Oe===null?r.memoizedState=t:of(r,Oe.memoizedState,t)},useTransition:function(){var t=Qa(Gi)[0],r=Tt().memoizedState;return[t,r]},useMutableSource:Bh,useSyncExternalStore:Hh,useId:lf,unstable_isNewReconciler:!1};function Dt(t,r){if(t&&t.defaultProps){r=j({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Za(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:j({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var No={isMounted:function(t){return(t=t._reactInternals)?er(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=Je(),c=On(t),h=nn(a,c);h.payload=r,o!=null&&(h.callback=o),r=Rn(t,h,c),r!==null&&(bt(r,t,c,a),yo(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=Je(),c=On(t),h=nn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=Rn(t,h,c),r!==null&&(bt(r,t,c,a),yo(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Je(),a=On(t),c=nn(o,a);c.tag=2,r!=null&&(c.callback=r),r=Rn(t,c,a),r!==null&&(bt(r,t,a,o),yo(r,t,a))}};function df(t,r,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):r.prototype&&r.prototype.isPureReactComponent?!Di(o,a)||!Di(c,h):!0}function hf(t,r,o){var a=!1,c=Tn,h=r.contextType;return typeof h=="object"&&h!==null?h=It(h):(c=st(r)?nr:Ge.current,a=r.contextTypes,h=(a=a!=null)?Mr(t,c):Tn),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=No,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function ff(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&No.enqueueReplaceState(r,r.state,null)}function eu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},za(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=It(h):(h=st(r)?nr:Ge.current,c.context=Mr(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(Za(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&No.enqueueReplaceState(c,c.state,null),wo(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Br(t,r){try{var o="",a=r;do o+=ie(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function tu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function nu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var ly=typeof WeakMap=="function"?WeakMap:Map;function pf(t,r,o){o=nn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Lo||(Lo=!0,_u=a),nu(t,r)},o}function mf(t,r,o){o=nn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){nu(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){nu(t,r),typeof a!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),o}function gf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new ly;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=Ey.bind(null,t,r,o),r.then(t,t))}function _f(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function vf(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=nn(-1,1),r.tag=2,Rn(o,r,1))),o.lanes|=1),t)}var ay=Te.ReactCurrentOwner,ot=!1;function Xe(t,r,o,a){r.child=t===null?Fh(r,null,o,a):jr(r,t.child,o,a)}function yf(t,r,o,a,c){o=o.render;var h=r.ref;return Wr(r,c),a=Ka(t,r,o,a,h,c),o=qa(),t!==null&&!ot?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,rn(t,r,c)):(ye&&o&&xa(r),r.flags|=1,Xe(t,r,a,c),r.child)}function wf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Iu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Ef(t,r,h,a,c)):(t=zo(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Di,o(m,a)&&t.ref===r.ref)return rn(t,r,c)}return r.flags|=1,t=Ln(h,a),t.ref=r.ref,t.return=r,r.child=t}function Ef(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(Di(h,a)&&t.ref===r.ref)if(ot=!1,r.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(ot=!0);else return r.lanes=t.lanes,rn(t,r,c)}return ru(t,r,o,a,c)}function Sf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe($r,vt),vt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,fe($r,vt),vt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,fe($r,vt),vt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,fe($r,vt),vt|=a;return Xe(t,r,c,o),r.child}function Cf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function ru(t,r,o,a,c){var h=st(o)?nr:Ge.current;return h=Mr(r,h),Wr(r,c),o=Ka(t,r,o,a,h,c),a=qa(),t!==null&&!ot?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,rn(t,r,c)):(ye&&a&&xa(r),r.flags|=1,Xe(t,r,o,c),r.child)}function If(t,r,o,a,c){if(st(o)){var h=!0;co(r)}else h=!1;if(Wr(r,c),r.stateNode===null)Po(t,r),hf(r,o,a),eu(r,o,a,c),a=!0;else if(t===null){var m=r.stateNode,_=r.memoizedProps;m.props=_;var v=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=It(k):(k=st(o)?nr:Ge.current,k=Mr(r,k));var P=o.getDerivedStateFromProps,x=typeof P=="function"||typeof m.getSnapshotBeforeUpdate=="function";x||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==a||v!==k)&&ff(r,m,a,k),Nn=!1;var N=r.memoizedState;m.state=N,wo(r,a,m,c),v=r.memoizedState,_!==a||N!==v||it.current||Nn?(typeof P=="function"&&(Za(r,o,P,a),v=r.memoizedState),(_=Nn||df(r,o,_,a,N,v,k))?(x||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=v),m.props=a,m.state=v,m.context=k,a=_):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{m=r.stateNode,jh(t,r),_=r.memoizedProps,k=r.type===r.elementType?_:Dt(r.type,_),m.props=k,x=r.pendingProps,N=m.context,v=o.contextType,typeof v=="object"&&v!==null?v=It(v):(v=st(o)?nr:Ge.current,v=Mr(r,v));var b=o.getDerivedStateFromProps;(P=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==x||N!==v)&&ff(r,m,a,v),Nn=!1,N=r.memoizedState,m.state=N,wo(r,a,m,c);var z=r.memoizedState;_!==x||N!==z||it.current||Nn?(typeof b=="function"&&(Za(r,o,b,a),z=r.memoizedState),(k=Nn||df(r,o,k,a,N,z,v)||!1)?(P||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,z,v),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,z,v)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=z),m.props=a,m.state=z,m.context=v,a=k):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),a=!1)}return iu(t,r,o,a,h,c)}function iu(t,r,o,a,c,h){Cf(t,r);var m=(r.flags&128)!==0;if(!a&&!m)return c&&Rh(r,o,!1),rn(t,r,h);a=r.stateNode,ay.current=r;var _=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&m?(r.child=jr(r,t.child,null,h),r.child=jr(r,null,_,h)):Xe(t,r,_,h),r.memoizedState=a.state,c&&Rh(r,o,!0),r.child}function Tf(t){var r=t.stateNode;r.pendingContext?kh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&kh(t,r.context,!1),Wa(t,r.containerInfo)}function kf(t,r,o,a,c){return Ur(),La(c),r.flags|=256,Xe(t,r,o,a),r.child}var su={dehydrated:null,treeContext:null,retryLane:0};function ou(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nf(t,r,o){var a=r.pendingProps,c=we.current,h=!1,m=(r.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),fe(we,c&1),t===null)return Da(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=a.children,t=a.fallback,h?(a=r.mode,h=r.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Wo(m,a,0,null),t=hr(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=ou(o),r.memoizedState=su,t):lu(r,m));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return uy(t,r,m,a,_,c,o);if(h){h=a.fallback,m=r.mode,c=t.child,_=c.sibling;var v={mode:"hidden",children:a.children};return!(m&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=v,r.deletions=null):(a=Ln(c,v),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Ln(_,h):(h=hr(h,m,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,m=t.child.memoizedState,m=m===null?ou(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,r.memoizedState=su,a}return h=t.child,t=h.sibling,a=Ln(h,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function lu(t,r){return r=Wo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Ro(t,r,o,a){return a!==null&&La(a),jr(r,t.child,null,o),t=lu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function uy(t,r,o,a,c,h,m){if(o)return r.flags&256?(r.flags&=-257,a=tu(Error(n(422))),Ro(t,r,m,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Wo({mode:"visible",children:a.children},c,0,null),h=hr(h,c,m,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,r.mode&1&&jr(r,t.child,null,m),r.child.memoizedState=ou(m),r.memoizedState=su,h);if(!(r.mode&1))return Ro(t,r,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=tu(h,a,void 0),Ro(t,r,m,a)}if(_=(m&t.childLanes)!==0,ot||_){if(a=Ue,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,tn(t,c),bt(a,t,c,-1))}return Cu(),a=tu(Error(n(421))),Ro(t,r,m,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Sy.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,_t=Cn(c.nextSibling),gt=r,ye=!0,Ot=null,t!==null&&(St[Ct++]=Zt,St[Ct++]=en,St[Ct++]=rr,Zt=t.id,en=t.overflow,rr=r),r=lu(r,a.children),r.flags|=4096,r)}function Rf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Ua(t.return,r,o)}function au(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Pf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(Xe(t,r,a.children,o),a=we.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rf(t,o,r);else if(t.tag===19)Rf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(fe(we,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&Eo(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),au(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&Eo(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}au(r,!0,o,null,h);break;case"together":au(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Po(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function rn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),ar|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Ln(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Ln(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function cy(t,r,o){switch(r.tag){case 3:Tf(r),Ur();break;case 5:Vh(r);break;case 1:st(r.type)&&co(r);break;case 4:Wa(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;fe(_o,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(fe(we,we.current&1),r.flags|=128,null):o&r.child.childLanes?Nf(t,r,o):(fe(we,we.current&1),t=rn(t,r,o),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return Pf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),fe(we,we.current),a)break;return null;case 22:case 23:return r.lanes=0,Sf(t,r,o)}return rn(t,r,o)}var xf,uu,Af,Of;xf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},uu=function(){},Af=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,or($t.current);var h=null;switch(o){case"input":c=Ul(t,c),a=Ul(t,a),h=[];break;case"select":c=j({},c,{value:void 0}),a=j({},a,{value:void 0}),h=[];break;case"textarea":c=Wl(t,c),a=Wl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=lo)}Bl(o,a);var m;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(m in _)_.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var v=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&v!==_&&(v!=null||_!=null))if(k==="style")if(_){for(m in _)!_.hasOwnProperty(m)||v&&v.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in v)v.hasOwnProperty(m)&&_[m]!==v[m]&&(o||(o={}),o[m]=v[m])}else o||(h||(h=[]),h.push(k,o)),o=v;else k==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,_=_?_.__html:void 0,v!=null&&_!==v&&(h=h||[]).push(k,v)):k==="children"?typeof v!="string"&&typeof v!="number"||(h=h||[]).push(k,""+v):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(v!=null&&k==="onScroll"&&me("scroll",t),h||_===v||(h=[])):(h=h||[]).push(k,v))}o&&(h=h||[]).push("style",o);var k=h;(r.updateQueue=k)&&(r.flags|=4)}},Of=function(t,r,o,a){o!==a&&(r.flags|=4)};function qi(t,r){if(!ye)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function qe(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function dy(t,r,o){var a=r.pendingProps;switch(Aa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(r),null;case 1:return st(r.type)&&uo(),qe(r),null;case 3:return a=r.stateNode,Vr(),ge(it),ge(Ge),Ha(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(mo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ot!==null&&(wu(Ot),Ot=null))),uu(t,r),qe(r),null;case 5:Va(r);var c=or(Bi.current);if(o=r.type,t!==null&&r.stateNode!=null)Af(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return qe(r),null}if(t=or($t.current),mo(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[Ht]=r,a[Ui]=h,t=(r.mode&1)!==0,o){case"dialog":me("cancel",a),me("close",a);break;case"iframe":case"object":case"embed":me("load",a);break;case"video":case"audio":for(c=0;c<Mi.length;c++)me(Mi[c],a);break;case"source":me("error",a);break;case"img":case"image":case"link":me("error",a),me("load",a);break;case"details":me("toggle",a);break;case"input":dd(a,h),me("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},me("invalid",a);break;case"textarea":pd(a,h),me("invalid",a)}Bl(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var _=h[m];m==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&oo(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&oo(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(m)&&_!=null&&m==="onScroll"&&me("scroll",a)}switch(o){case"input":Fs(a),fd(a,h,!0);break;case"textarea":Fs(a),gd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=lo)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_d(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Ht]=r,t[Ui]=a,xf(t,r,!1,!1),r.stateNode=t;e:{switch(m=Hl(o,a),o){case"dialog":me("cancel",t),me("close",t),c=a;break;case"iframe":case"object":case"embed":me("load",t),c=a;break;case"video":case"audio":for(c=0;c<Mi.length;c++)me(Mi[c],t);c=a;break;case"source":me("error",t),c=a;break;case"img":case"image":case"link":me("error",t),me("load",t),c=a;break;case"details":me("toggle",t),c=a;break;case"input":dd(t,a),c=Ul(t,a),me("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=j({},a,{value:void 0}),me("invalid",t);break;case"textarea":pd(t,a),c=Wl(t,a),me("invalid",t);break;default:c=a}Bl(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var v=_[h];h==="style"?wd(t,v):h==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&vd(t,v)):h==="children"?typeof v=="string"?(o!=="textarea"||v!=="")&&gi(t,v):typeof v=="number"&&gi(t,""+v):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?v!=null&&h==="onScroll"&&me("scroll",t):v!=null&&xe(t,h,v,m))}switch(o){case"input":Fs(t),fd(t,a,!1);break;case"textarea":Fs(t),gd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ae(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Cr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Cr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=lo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return qe(r),null;case 6:if(t&&r.stateNode!=null)Of(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=or(Bi.current),or($t.current),mo(r)){if(a=r.stateNode,o=r.memoizedProps,a[Ht]=r,(h=a.nodeValue!==o)&&(t=gt,t!==null))switch(t.tag){case 3:oo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Ht]=r,r.stateNode=a}return qe(r),null;case 13:if(ge(we),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&_t!==null&&r.mode&1&&!(r.flags&128))Lh(),Ur(),r.flags|=98560,h=!1;else if(h=mo(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Ht]=r}else Ur(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;qe(r),h=!1}else Ot!==null&&(wu(Ot),Ot=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||we.current&1?De===0&&(De=3):Cu())),r.updateQueue!==null&&(r.flags|=4),qe(r),null);case 4:return Vr(),uu(t,r),t===null&&bi(r.stateNode.containerInfo),qe(r),null;case 10:return Fa(r.type._context),qe(r),null;case 17:return st(r.type)&&uo(),qe(r),null;case 19:if(ge(we),h=r.memoizedState,h===null)return qe(r),null;if(a=(r.flags&128)!==0,m=h.rendering,m===null)if(a)qi(h,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=Eo(t),m!==null){for(r.flags|=128,qi(h,!1),a=m.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return fe(we,we.current&1|2),r.child}t=t.sibling}h.tail!==null&&ke()>Gr&&(r.flags|=128,a=!0,qi(h,!1),r.lanes=4194304)}else{if(!a)if(t=Eo(m),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),qi(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!ye)return qe(r),null}else 2*ke()-h.renderingStartTime>Gr&&o!==1073741824&&(r.flags|=128,a=!0,qi(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(o=h.last,o!==null?o.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=ke(),r.sibling=null,o=we.current,fe(we,a?o&1|2:o&1),r):(qe(r),null);case 22:case 23:return Su(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?vt&1073741824&&(qe(r),r.subtreeFlags&6&&(r.flags|=8192)):qe(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function hy(t,r){switch(Aa(r),r.tag){case 1:return st(r.type)&&uo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Vr(),ge(it),ge(Ge),Ha(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Va(r),null;case 13:if(ge(we),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ur()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ge(we),null;case 4:return Vr(),null;case 10:return Fa(r.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var xo=!1,Ye=!1,fy=typeof WeakSet=="function"?WeakSet:Set,U=null;function Hr(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ce(t,r,a)}else o.current=null}function cu(t,r,o){try{o()}catch(a){Ce(t,r,a)}}var Df=!1;function py(t,r){if(Sa=Ys,t=ch(),pa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,_=-1,v=-1,k=0,P=0,x=t,N=null;t:for(;;){for(var b;x!==o||c!==0&&x.nodeType!==3||(_=m+c),x!==h||a!==0&&x.nodeType!==3||(v=m+a),x.nodeType===3&&(m+=x.nodeValue.length),(b=x.firstChild)!==null;)N=x,x=b;for(;;){if(x===t)break t;if(N===o&&++k===c&&(_=m),N===h&&++P===a&&(v=m),(b=x.nextSibling)!==null)break;x=N,N=x.parentNode}x=b}o=_===-1||v===-1?null:{start:_,end:v}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ca={focusedElem:t,selectionRange:o},Ys=!1,U=r;U!==null;)if(r=U,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,U=t;else for(;U!==null;){r=U;try{var z=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var W=z.memoizedProps,Ne=z.memoizedState,C=r.stateNode,w=C.getSnapshotBeforeUpdate(r.elementType===r.type?W:Dt(r.type,W),Ne);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=r.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(O){Ce(r,r.return,O)}if(t=r.sibling,t!==null){t.return=r.return,U=t;break}U=r.return}return z=Df,Df=!1,z}function Yi(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&cu(r,o,h)}c=c.next}while(c!==a)}}function Ao(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function du(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Lf(t){var r=t.alternate;r!==null&&(t.alternate=null,Lf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ht],delete r[Ui],delete r[Na],delete r[Qv],delete r[Xv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mf(t){return t.tag===5||t.tag===3||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=lo));else if(a!==4&&(t=t.child,t!==null))for(hu(t,r,o),t=t.sibling;t!==null;)hu(t,r,o),t=t.sibling}function fu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(fu(t,r,o),t=t.sibling;t!==null;)fu(t,r,o),t=t.sibling}var Be=null,Lt=!1;function Pn(t,r,o){for(o=o.child;o!==null;)Ff(t,r,o),o=o.sibling}function Ff(t,r,o){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Bs,o)}catch{}switch(o.tag){case 5:Ye||Hr(o,r);case 6:var a=Be,c=Lt;Be=null,Pn(t,r,o),Be=a,Lt=c,Be!==null&&(Lt?(t=Be,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Be.removeChild(o.stateNode));break;case 18:Be!==null&&(Lt?(t=Be,o=o.stateNode,t.nodeType===8?ka(t.parentNode,o):t.nodeType===1&&ka(t,o),Ni(t)):ka(Be,o.stateNode));break;case 4:a=Be,c=Lt,Be=o.stateNode.containerInfo,Lt=!0,Pn(t,r,o),Be=a,Lt=c;break;case 0:case 11:case 14:case 15:if(!Ye&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&cu(o,r,m),c=c.next}while(c!==a)}Pn(t,r,o);break;case 1:if(!Ye&&(Hr(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Ce(o,r,_)}Pn(t,r,o);break;case 21:Pn(t,r,o);break;case 22:o.mode&1?(Ye=(a=Ye)||o.memoizedState!==null,Pn(t,r,o),Ye=a):Pn(t,r,o);break;default:Pn(t,r,o)}}function Uf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new fy),r.forEach(function(a){var c=Cy.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Mt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=r,_=m;e:for(;_!==null;){switch(_.tag){case 5:Be=_.stateNode,Lt=!1;break e;case 3:Be=_.stateNode.containerInfo,Lt=!0;break e;case 4:Be=_.stateNode.containerInfo,Lt=!0;break e}_=_.return}if(Be===null)throw Error(n(160));Ff(h,m,c),Be=null,Lt=!1;var v=c.alternate;v!==null&&(v.return=null),c.return=null}catch(k){Ce(c,r,k)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)jf(r,t),r=r.sibling}function jf(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(r,t),Kt(t),a&4){try{Yi(3,t,t.return),Ao(3,t)}catch(W){Ce(t,t.return,W)}try{Yi(5,t,t.return)}catch(W){Ce(t,t.return,W)}}break;case 1:Mt(r,t),Kt(t),a&512&&o!==null&&Hr(o,o.return);break;case 5:if(Mt(r,t),Kt(t),a&512&&o!==null&&Hr(o,o.return),t.flags&32){var c=t.stateNode;try{gi(c,"")}catch(W){Ce(t,t.return,W)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,_=t.type,v=t.updateQueue;if(t.updateQueue=null,v!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&hd(c,h),Hl(_,m);var k=Hl(_,h);for(m=0;m<v.length;m+=2){var P=v[m],x=v[m+1];P==="style"?wd(c,x):P==="dangerouslySetInnerHTML"?vd(c,x):P==="children"?gi(c,x):xe(c,P,x,k)}switch(_){case"input":jl(c,h);break;case"textarea":md(c,h);break;case"select":var N=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var b=h.value;b!=null?Cr(c,!!h.multiple,b,!1):N!==!!h.multiple&&(h.defaultValue!=null?Cr(c,!!h.multiple,h.defaultValue,!0):Cr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Ui]=h}catch(W){Ce(t,t.return,W)}}break;case 6:if(Mt(r,t),Kt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(W){Ce(t,t.return,W)}}break;case 3:if(Mt(r,t),Kt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Ni(r.containerInfo)}catch(W){Ce(t,t.return,W)}break;case 4:Mt(r,t),Kt(t);break;case 13:Mt(r,t),Kt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(gu=ke())),a&4&&Uf(t);break;case 22:if(P=o!==null&&o.memoizedState!==null,t.mode&1?(Ye=(k=Ye)||P,Mt(r,t),Ye=k):Mt(r,t),Kt(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!P&&t.mode&1)for(U=t,P=t.child;P!==null;){for(x=U=P;U!==null;){switch(N=U,b=N.child,N.tag){case 0:case 11:case 14:case 15:Yi(4,N,N.return);break;case 1:Hr(N,N.return);var z=N.stateNode;if(typeof z.componentWillUnmount=="function"){a=N,o=N.return;try{r=a,z.props=r.memoizedProps,z.state=r.memoizedState,z.componentWillUnmount()}catch(W){Ce(a,o,W)}}break;case 5:Hr(N,N.return);break;case 22:if(N.memoizedState!==null){Vf(x);continue}}b!==null?(b.return=N,U=b):Vf(x)}P=P.sibling}e:for(P=null,x=t;;){if(x.tag===5){if(P===null){P=x;try{c=x.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=x.stateNode,v=x.memoizedProps.style,m=v!=null&&v.hasOwnProperty("display")?v.display:null,_.style.display=yd("display",m))}catch(W){Ce(t,t.return,W)}}}else if(x.tag===6){if(P===null)try{x.stateNode.nodeValue=k?"":x.memoizedProps}catch(W){Ce(t,t.return,W)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===t)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;P===x&&(P=null),x=x.return}P===x&&(P=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Mt(r,t),Kt(t),a&4&&Uf(t);break;case 21:break;default:Mt(r,t),Kt(t)}}function Kt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Mf(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(gi(c,""),a.flags&=-33);var h=bf(t);fu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,_=bf(t);hu(t,_,m);break;default:throw Error(n(161))}}catch(v){Ce(t,t.return,v)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function my(t,r,o){U=t,zf(t)}function zf(t,r,o){for(var a=(t.mode&1)!==0;U!==null;){var c=U,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||xo;if(!m){var _=c.alternate,v=_!==null&&_.memoizedState!==null||Ye;_=xo;var k=Ye;if(xo=m,(Ye=v)&&!k)for(U=c;U!==null;)m=U,v=m.child,m.tag===22&&m.memoizedState!==null?Bf(c):v!==null?(v.return=m,U=v):Bf(c);for(;h!==null;)U=h,zf(h),h=h.sibling;U=c,xo=_,Ye=k}Wf(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,U=h):Wf(t)}}function Wf(t){for(;U!==null;){var r=U;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ye||Ao(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Ye)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:Dt(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Wh(r,h,a);break;case 3:var m=r.updateQueue;if(m!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Wh(r,m,o)}break;case 5:var _=r.stateNode;if(o===null&&r.flags&4){o=_;var v=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&o.focus();break;case"img":v.src&&(o.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var k=r.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var x=P.dehydrated;x!==null&&Ni(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Ye||r.flags&512&&du(r)}catch(N){Ce(r,r.return,N)}}if(r===t){U=null;break}if(o=r.sibling,o!==null){o.return=r.return,U=o;break}U=r.return}}function Vf(t){for(;U!==null;){var r=U;if(r===t){U=null;break}var o=r.sibling;if(o!==null){o.return=r.return,U=o;break}U=r.return}}function Bf(t){for(;U!==null;){var r=U;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Ao(4,r)}catch(v){Ce(r,o,v)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(v){Ce(r,c,v)}}var h=r.return;try{du(r)}catch(v){Ce(r,h,v)}break;case 5:var m=r.return;try{du(r)}catch(v){Ce(r,m,v)}}}catch(v){Ce(r,r.return,v)}if(r===t){U=null;break}var _=r.sibling;if(_!==null){_.return=r.return,U=_;break}U=r.return}}var gy=Math.ceil,Oo=Te.ReactCurrentDispatcher,pu=Te.ReactCurrentOwner,kt=Te.ReactCurrentBatchConfig,re=0,Ue=null,Re=null,He=0,vt=0,$r=In(0),De=0,Qi=null,ar=0,Do=0,mu=0,Xi=null,lt=null,gu=0,Gr=1/0,sn=null,Lo=!1,_u=null,xn=null,Mo=!1,An=null,bo=0,Ji=0,vu=null,Fo=-1,Uo=0;function Je(){return re&6?ke():Fo!==-1?Fo:Fo=ke()}function On(t){return t.mode&1?re&2&&He!==0?He&-He:Zv.transition!==null?(Uo===0&&(Uo=Md()),Uo):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Hd(t.type)),t):1}function bt(t,r,o,a){if(50<Ji)throw Ji=0,vu=null,Error(n(185));Si(t,o,a),(!(re&2)||t!==Ue)&&(t===Ue&&(!(re&2)&&(Do|=o),De===4&&Dn(t,He)),at(t,a),o===1&&re===0&&!(r.mode&1)&&(Gr=ke()+500,ho&&kn()))}function at(t,r){var o=t.callbackNode;Z_(t,r);var a=Gs(t,t===Ue?He:0);if(a===0)o!==null&&Od(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Od(o),r===1)t.tag===0?Jv($f.bind(null,t)):Ph($f.bind(null,t)),qv(function(){!(re&6)&&kn()}),o=null;else{switch(bd(a)){case 1:o=Xl;break;case 4:o=Dd;break;case 16:o=Vs;break;case 536870912:o=Ld;break;default:o=Vs}o=Zf(o,Hf.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Hf(t,r){if(Fo=-1,Uo=0,re&6)throw Error(n(327));var o=t.callbackNode;if(Kr()&&t.callbackNode!==o)return null;var a=Gs(t,t===Ue?He:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=jo(t,a);else{r=a;var c=re;re|=2;var h=Kf();(Ue!==t||He!==r)&&(sn=null,Gr=ke()+500,cr(t,r));do try{yy();break}catch(_){Gf(t,_)}while(!0);ba(),Oo.current=h,re=c,Re!==null?r=0:(Ue=null,He=0,r=De)}if(r!==0){if(r===2&&(c=Jl(t),c!==0&&(a=c,r=yu(t,c))),r===1)throw o=Qi,cr(t,0),Dn(t,a),at(t,ke()),o;if(r===6)Dn(t,a);else{if(c=t.current.alternate,!(a&30)&&!_y(c)&&(r=jo(t,a),r===2&&(h=Jl(t),h!==0&&(a=h,r=yu(t,h))),r===1))throw o=Qi,cr(t,0),Dn(t,a),at(t,ke()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:dr(t,lt,sn);break;case 3:if(Dn(t,a),(a&130023424)===a&&(r=gu+500-ke(),10<r)){if(Gs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){Je(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Ta(dr.bind(null,t,lt,sn),r);break}dr(t,lt,sn);break;case 4:if(Dn(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var m=31-xt(a);h=1<<m,m=r[m],m>c&&(c=m),a&=~h}if(a=c,a=ke()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*gy(a/1960))-a,10<a){t.timeoutHandle=Ta(dr.bind(null,t,lt,sn),a);break}dr(t,lt,sn);break;case 5:dr(t,lt,sn);break;default:throw Error(n(329))}}}return at(t,ke()),t.callbackNode===o?Hf.bind(null,t):null}function yu(t,r){var o=Xi;return t.current.memoizedState.isDehydrated&&(cr(t,r).flags|=256),t=jo(t,r),t!==2&&(r=lt,lt=o,r!==null&&wu(r)),t}function wu(t){lt===null?lt=t:lt.push.apply(lt,t)}function _y(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!At(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Dn(t,r){for(r&=~mu,r&=~Do,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-xt(r),a=1<<o;t[o]=-1,r&=~a}}function $f(t){if(re&6)throw Error(n(327));Kr();var r=Gs(t,0);if(!(r&1))return at(t,ke()),null;var o=jo(t,r);if(t.tag!==0&&o===2){var a=Jl(t);a!==0&&(r=a,o=yu(t,a))}if(o===1)throw o=Qi,cr(t,0),Dn(t,r),at(t,ke()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,dr(t,lt,sn),at(t,ke()),null}function Eu(t,r){var o=re;re|=1;try{return t(r)}finally{re=o,re===0&&(Gr=ke()+500,ho&&kn())}}function ur(t){An!==null&&An.tag===0&&!(re&6)&&Kr();var r=re;re|=1;var o=kt.transition,a=ue;try{if(kt.transition=null,ue=1,t)return t()}finally{ue=a,kt.transition=o,re=r,!(re&6)&&kn()}}function Su(){vt=$r.current,ge($r)}function cr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Kv(o)),Re!==null)for(o=Re.return;o!==null;){var a=o;switch(Aa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&uo();break;case 3:Vr(),ge(it),ge(Ge),Ha();break;case 5:Va(a);break;case 4:Vr();break;case 13:ge(we);break;case 19:ge(we);break;case 10:Fa(a.type._context);break;case 22:case 23:Su()}o=o.return}if(Ue=t,Re=t=Ln(t.current,null),He=vt=r,De=0,Qi=null,mu=Do=ar=0,lt=Xi=null,sr!==null){for(r=0;r<sr.length;r++)if(o=sr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}sr=null}return t}function Gf(t,r){do{var o=Re;try{if(ba(),So.current=ko,Co){for(var a=Ee.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Co=!1}if(lr=0,Fe=Oe=Ee=null,Hi=!1,$i=0,pu.current=null,o===null||o.return===null){De=1,Qi=r,Re=null;break}e:{var h=t,m=o.return,_=o,v=r;if(r=He,_.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var k=v,P=_,x=P.tag;if(!(P.mode&1)&&(x===0||x===11||x===15)){var N=P.alternate;N?(P.updateQueue=N.updateQueue,P.memoizedState=N.memoizedState,P.lanes=N.lanes):(P.updateQueue=null,P.memoizedState=null)}var b=_f(m);if(b!==null){b.flags&=-257,vf(b,m,_,h,r),b.mode&1&&gf(h,k,r),r=b,v=k;var z=r.updateQueue;if(z===null){var W=new Set;W.add(v),r.updateQueue=W}else z.add(v);break e}else{if(!(r&1)){gf(h,k,r),Cu();break e}v=Error(n(426))}}else if(ye&&_.mode&1){var Ne=_f(m);if(Ne!==null){!(Ne.flags&65536)&&(Ne.flags|=256),vf(Ne,m,_,h,r),La(Br(v,_));break e}}h=v=Br(v,_),De!==4&&(De=2),Xi===null?Xi=[h]:Xi.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var C=pf(h,v,r);zh(h,C);break e;case 1:_=v;var w=h.type,I=h.stateNode;if(!(h.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(xn===null||!xn.has(I)))){h.flags|=65536,r&=-r,h.lanes|=r;var O=mf(h,_,r);zh(h,O);break e}}h=h.return}while(h!==null)}Yf(o)}catch(V){r=V,Re===o&&o!==null&&(Re=o=o.return);continue}break}while(!0)}function Kf(){var t=Oo.current;return Oo.current=ko,t===null?ko:t}function Cu(){(De===0||De===3||De===2)&&(De=4),Ue===null||!(ar&268435455)&&!(Do&268435455)||Dn(Ue,He)}function jo(t,r){var o=re;re|=2;var a=Kf();(Ue!==t||He!==r)&&(sn=null,cr(t,r));do try{vy();break}catch(c){Gf(t,c)}while(!0);if(ba(),re=o,Oo.current=a,Re!==null)throw Error(n(261));return Ue=null,He=0,De}function vy(){for(;Re!==null;)qf(Re)}function yy(){for(;Re!==null&&!H_();)qf(Re)}function qf(t){var r=Jf(t.alternate,t,vt);t.memoizedProps=t.pendingProps,r===null?Yf(t):Re=r,pu.current=null}function Yf(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=hy(o,r),o!==null){o.flags&=32767,Re=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Re=null;return}}else if(o=dy(o,r,vt),o!==null){Re=o;return}if(r=r.sibling,r!==null){Re=r;return}Re=r=t}while(r!==null);De===0&&(De=5)}function dr(t,r,o){var a=ue,c=kt.transition;try{kt.transition=null,ue=1,wy(t,r,o,a)}finally{kt.transition=c,ue=a}return null}function wy(t,r,o,a){do Kr();while(An!==null);if(re&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(ev(t,h),t===Ue&&(Re=Ue=null,He=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Mo||(Mo=!0,Zf(Vs,function(){return Kr(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=kt.transition,kt.transition=null;var m=ue;ue=1;var _=re;re|=4,pu.current=null,py(t,o),jf(o,t),zv(Ca),Ys=!!Sa,Ca=Sa=null,t.current=o,my(o),$_(),re=_,ue=m,kt.transition=h}else t.current=o;if(Mo&&(Mo=!1,An=t,bo=c),h=t.pendingLanes,h===0&&(xn=null),q_(o.stateNode),at(t,ke()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Lo)throw Lo=!1,t=_u,_u=null,t;return bo&1&&t.tag!==0&&Kr(),h=t.pendingLanes,h&1?t===vu?Ji++:(Ji=0,vu=t):Ji=0,kn(),null}function Kr(){if(An!==null){var t=bd(bo),r=kt.transition,o=ue;try{if(kt.transition=null,ue=16>t?16:t,An===null)var a=!1;else{if(t=An,An=null,bo=0,re&6)throw Error(n(331));var c=re;for(re|=4,U=t.current;U!==null;){var h=U,m=h.child;if(U.flags&16){var _=h.deletions;if(_!==null){for(var v=0;v<_.length;v++){var k=_[v];for(U=k;U!==null;){var P=U;switch(P.tag){case 0:case 11:case 15:Yi(8,P,h)}var x=P.child;if(x!==null)x.return=P,U=x;else for(;U!==null;){P=U;var N=P.sibling,b=P.return;if(Lf(P),P===k){U=null;break}if(N!==null){N.return=b,U=N;break}U=b}}}var z=h.alternate;if(z!==null){var W=z.child;if(W!==null){z.child=null;do{var Ne=W.sibling;W.sibling=null,W=Ne}while(W!==null)}}U=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,U=m;else e:for(;U!==null;){if(h=U,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Yi(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,U=C;break e}U=h.return}}var w=t.current;for(U=w;U!==null;){m=U;var I=m.child;if(m.subtreeFlags&2064&&I!==null)I.return=m,U=I;else e:for(m=w;U!==null;){if(_=U,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:Ao(9,_)}}catch(V){Ce(_,_.return,V)}if(_===m){U=null;break e}var O=_.sibling;if(O!==null){O.return=_.return,U=O;break e}U=_.return}}if(re=c,kn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Bs,t)}catch{}a=!0}return a}finally{ue=o,kt.transition=r}}return!1}function Qf(t,r,o){r=Br(o,r),r=pf(t,r,1),t=Rn(t,r,1),r=Je(),t!==null&&(Si(t,1,r),at(t,r))}function Ce(t,r,o){if(t.tag===3)Qf(t,t,o);else for(;r!==null;){if(r.tag===3){Qf(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(xn===null||!xn.has(a))){t=Br(o,t),t=mf(r,t,1),r=Rn(r,t,1),t=Je(),r!==null&&(Si(r,1,t),at(r,t));break}}r=r.return}}function Ey(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=Je(),t.pingedLanes|=t.suspendedLanes&o,Ue===t&&(He&o)===o&&(De===4||De===3&&(He&130023424)===He&&500>ke()-gu?cr(t,0):mu|=o),at(t,r)}function Xf(t,r){r===0&&(t.mode&1?(r=$s,$s<<=1,!($s&130023424)&&($s=4194304)):r=1);var o=Je();t=tn(t,r),t!==null&&(Si(t,r,o),at(t,o))}function Sy(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Xf(t,o)}function Cy(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),Xf(t,o)}var Jf;Jf=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||it.current)ot=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return ot=!1,cy(t,r,o);ot=!!(t.flags&131072)}else ot=!1,ye&&r.flags&1048576&&xh(r,po,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Po(t,r),t=r.pendingProps;var c=Mr(r,Ge.current);Wr(r,o),c=Ka(null,r,a,t,c,o);var h=qa();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,st(a)?(h=!0,co(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,za(r),c.updater=No,r.stateNode=c,c._reactInternals=r,eu(r,a,t,o),r=iu(null,r,a,!0,h,o)):(r.tag=0,ye&&h&&xa(r),Xe(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(Po(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Ty(a),t=Dt(a,t),c){case 0:r=ru(null,r,a,t,o);break e;case 1:r=If(null,r,a,t,o);break e;case 11:r=yf(null,r,a,t,o);break e;case 14:r=wf(null,r,a,Dt(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Dt(a,c),ru(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Dt(a,c),If(t,r,a,c,o);case 3:e:{if(Tf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,jh(t,r),wo(r,a,null,o);var m=r.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Br(Error(n(423)),r),r=kf(t,r,a,o,c);break e}else if(a!==c){c=Br(Error(n(424)),r),r=kf(t,r,a,o,c);break e}else for(_t=Cn(r.stateNode.containerInfo.firstChild),gt=r,ye=!0,Ot=null,o=Fh(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ur(),a===c){r=rn(t,r,o);break e}Xe(t,r,a,o)}r=r.child}return r;case 5:return Vh(r),t===null&&Da(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Ia(a,c)?m=null:h!==null&&Ia(a,h)&&(r.flags|=32),Cf(t,r),Xe(t,r,m,o),r.child;case 6:return t===null&&Da(r),null;case 13:return Nf(t,r,o);case 4:return Wa(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=jr(r,null,a,o):Xe(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Dt(a,c),yf(t,r,a,c,o);case 7:return Xe(t,r,r.pendingProps,o),r.child;case 8:return Xe(t,r,r.pendingProps.children,o),r.child;case 12:return Xe(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,m=c.value,fe(_o,a._currentValue),a._currentValue=m,h!==null)if(At(h.value,m)){if(h.children===c.children&&!it.current){r=rn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var _=h.dependencies;if(_!==null){m=h.child;for(var v=_.firstContext;v!==null;){if(v.context===a){if(h.tag===1){v=nn(-1,o&-o),v.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?v.next=v:(v.next=P.next,P.next=v),k.pending=v}}h.lanes|=o,v=h.alternate,v!==null&&(v.lanes|=o),Ua(h.return,o,r),_.lanes|=o;break}v=v.next}}else if(h.tag===10)m=h.type===r.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,_=m.alternate,_!==null&&(_.lanes|=o),Ua(m,o,r),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===r){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}Xe(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Wr(r,o),c=It(c),a=a(c),r.flags|=1,Xe(t,r,a,o),r.child;case 14:return a=r.type,c=Dt(a,r.pendingProps),c=Dt(a.type,c),wf(t,r,a,c,o);case 15:return Ef(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Dt(a,c),Po(t,r),r.tag=1,st(a)?(t=!0,co(r)):t=!1,Wr(r,o),hf(r,a,c),eu(r,a,c,o),iu(null,r,a,!0,t,o);case 19:return Pf(t,r,o);case 22:return Sf(t,r,o)}throw Error(n(156,r.tag))};function Zf(t,r){return Ad(t,r)}function Iy(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,r,o,a){return new Iy(t,r,o,a)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ty(t){if(typeof t=="function")return Iu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wt)return 11;if(t===Vt)return 14}return 2}function Ln(t,r){var o=t.alternate;return o===null?(o=Nt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function zo(t,r,o,a,c,h){var m=2;if(a=t,typeof t=="function")Iu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Ve:return hr(o.children,c,h,r);case nt:m=8,c|=8;break;case Et:return t=Nt(12,o,r,c|2),t.elementType=Et,t.lanes=h,t;case ft:return t=Nt(13,o,r,c),t.elementType=ft,t.lanes=h,t;case Pt:return t=Nt(19,o,r,c),t.elementType=Pt,t.lanes=h,t;case Se:return Wo(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rt:m=10;break e;case Zn:m=9;break e;case Wt:m=11;break e;case Vt:m=14;break e;case rt:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Nt(m,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function hr(t,r,o,a){return t=Nt(7,t,a,r),t.lanes=o,t}function Wo(t,r,o,a){return t=Nt(22,t,a,r),t.elementType=Se,t.lanes=o,t.stateNode={isHidden:!1},t}function Tu(t,r,o){return t=Nt(6,t,null,r),t.lanes=o,t}function ku(t,r,o){return r=Nt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function ky(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Nu(t,r,o,a,c,h,m,_,v){return t=new ky(t,r,o,_,v),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Nt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(h),t}function Ny(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function ep(t){if(!t)return Tn;t=t._reactInternals;e:{if(er(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(st(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(st(o))return Nh(t,o,r)}return r}function tp(t,r,o,a,c,h,m,_,v){return t=Nu(o,a,!0,t,c,h,m,_,v),t.context=ep(null),o=t.current,a=Je(),c=On(o),h=nn(a,c),h.callback=r??null,Rn(o,h,c),t.current.lanes=c,Si(t,c,a),at(t,a),t}function Vo(t,r,o,a){var c=r.current,h=Je(),m=On(c);return o=ep(o),r.context===null?r.context=o:r.pendingContext=o,r=nn(h,m),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Rn(c,r,m),t!==null&&(bt(t,c,m,h),yo(t,c,m)),m}function Bo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Ru(t,r){np(t,r),(t=t.alternate)&&np(t,r)}var rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pu(t){this._internalRoot=t}Ho.prototype.render=Pu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Vo(t,r,null,null)},Ho.prototype.unmount=Pu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;ur(function(){Vo(null,t,null,null)}),r[Xt]=null}};function Ho(t){this._internalRoot=t}Ho.prototype.unstable_scheduleHydration=function(t){if(t){var r=jd();t={blockedOn:null,target:t,priority:r};for(var o=0;o<wn.length&&r!==0&&r<wn[o].priority;o++);wn.splice(o,0,t),o===0&&Vd(t)}};function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ip(){}function Ry(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=Bo(m);h.call(k)}}var m=tp(r,a,t,0,null,!1,!1,"",ip);return t._reactRootContainer=m,t[Xt]=m.current,bi(t.nodeType===8?t.parentNode:t),ur(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Bo(v);_.call(k)}}var v=Nu(t,0,!1,null,null,!1,!1,"",ip);return t._reactRootContainer=v,t[Xt]=v.current,bi(t.nodeType===8?t.parentNode:t),ur(function(){Vo(r,v,o,a)}),v}function Go(t,r,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var _=c;c=function(){var v=Bo(m);_.call(v)}}Vo(r,m,t,c)}else m=Ry(o,r,t,c,a);return Bo(m)}Fd=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ei(r.pendingLanes);o!==0&&(ea(r,o|1),at(r,ke()),!(re&6)&&(Gr=ke()+500,kn()))}break;case 13:ur(function(){var a=tn(t,1);if(a!==null){var c=Je();bt(a,t,1,c)}}),Ru(t,1)}},ta=function(t){if(t.tag===13){var r=tn(t,134217728);if(r!==null){var o=Je();bt(r,t,134217728,o)}Ru(t,134217728)}},Ud=function(t){if(t.tag===13){var r=On(t),o=tn(t,r);if(o!==null){var a=Je();bt(o,t,r,a)}Ru(t,r)}},jd=function(){return ue},zd=function(t,r){var o=ue;try{return ue=t,r()}finally{ue=o}},Kl=function(t,r,o){switch(r){case"input":if(jl(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=ao(a);if(!c)throw Error(n(90));cd(a),jl(a,c)}}}break;case"textarea":md(t,o);break;case"select":r=o.value,r!=null&&Cr(t,!!o.multiple,r,!1)}},Id=Eu,Td=ur;var Py={usingClientEntryPoint:!1,Events:[ji,Dr,ao,Sd,Cd,Eu]},Zi={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xy={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pd(t),t===null?null:t.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Bs=Ko.inject(xy),Bt=Ko}catch{}}return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Py,ut.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xu(r))throw Error(n(200));return Ny(t,r,null,o)},ut.createRoot=function(t,r){if(!xu(t))throw Error(n(299));var o=!1,a="",c=rp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Nu(t,1,!1,null,null,o,!1,a,c),t[Xt]=r.current,bi(t.nodeType===8?t.parentNode:t),new Pu(r)},ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Pd(r),t=t===null?null:t.stateNode,t},ut.flushSync=function(t){return ur(t)},ut.hydrate=function(t,r,o){if(!$o(r))throw Error(n(200));return Go(null,t,r,!0,o)},ut.hydrateRoot=function(t,r,o){if(!xu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=rp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),r=tp(r,null,t,1,o??null,c,!1,h,m),t[Xt]=r.current,bi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Ho(r)},ut.render=function(t,r,o){if(!$o(r))throw Error(n(200));return Go(null,t,r,!1,o)},ut.unmountComponentAtNode=function(t){if(!$o(t))throw Error(n(40));return t._reactRootContainer?(ur(function(){Go(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1},ut.unstable_batchedUpdates=Eu,ut.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!$o(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Go(t,r,o,!1,a)},ut.version="18.3.1-next-f1338f8080-20240426",ut}var hp;function jy(){if(hp)return Du.exports;hp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Du.exports=Uy(),Du.exports}var fp;function zy(){if(fp)return qo;fp=1;var i=jy();return qo.createRoot=i.createRoot,qo.hydrateRoot=i.hydrateRoot,qo}var Wy=zy();const Vy=Tm(Wy),By=({setCurrentPage:i})=>{const[e,n]=ct.useState(!1),s=()=>{n(!e)};return A.jsx("nav",{className:"bg-blue-600 p-4 text-white fixed w-full top-0 z-50",children:A.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[A.jsx("span",{className:"text-xl font-bold",children:"Eventify"}),A.jsxs("div",{className:"space-x-4 w-128",children:[A.jsx("button",{onClick:()=>i("home"),className:"hover:text-blue-200",children:"Home"}),A.jsx("button",{onClick:()=>i("dashboard"),className:"hover:text-blue-200",children:"Dashboard"}),A.jsx("button",{onClick:s,className:"hover:text-blue-200",children:"Account"}),e&&A.jsxs("div",{className:"absolute right-0 w-59 h-200 bg-blue-600 rounded-md shadow-lg z-10",children:[A.jsx("div",{onClick:()=>i("login"),className:"m-5 hover:text-blue-200 cursor-pointer",children:"Log In"}),A.jsx("div",{onClick:()=>i("register"),className:"m-5 hover:text-blue-200 cursor-pointer",children:"Register"})]})]})]})})};var pp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(i,e){if(!i)throw ai(e)},ai=function(i){return new Error("Firebase Database ("+km.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Hy=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,p=l+2<i.length,g=p?i[l+2]:0,y=u>>2,E=(u&3)<<4|f>>4;let T=(f&15)<<2|g>>6,L=g&63;p||(L=64,d||(T=64)),s.push(n[y],n[E],n[T],n[L])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Nm(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Hy(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const E=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||E==null)throw new $y;const T=u<<2|f>>4;if(s.push(T),g!==64){const L=f<<4&240|g>>2;if(s.push(L),E!==64){const F=g<<6&192|E;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class $y extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rm=function(i){const e=Nm(i);return vc.encodeByteArray(e,!0)},il=function(i){return Rm(i).replace(/\./g,"")},sl=function(i){try{return vc.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(i){return Pm(void 0,i)}function Pm(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ky(n)||(i[n]=Pm(i[n],e[n]));return i}function Ky(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=()=>qy().__FIREBASE_DEFAULTS__,Qy=()=>{if(typeof process>"u"||typeof pp>"u")return;const i=pp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Xy=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&sl(i[1]);return e&&JSON.parse(e)},yc=()=>{try{return Yy()||Qy()||Xy()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},xm=i=>{var e,n;return(n=(e=yc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Jy=i=>{const e=xm(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Am=()=>{var i;return(i=yc())===null||i===void 0?void 0:i.config},Om=i=>{var e;return(e=yc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[il(JSON.stringify(n)),il(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ec(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function e0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function t0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Dm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n0(){const i=et();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Lm(){return km.NODE_ADMIN===!0}function r0(){try{return typeof indexedDB=="object"}catch{return!1}}function i0(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="FirebaseError";class Qn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=s0,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?o0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new Qn(l,f,s)}}function o0(i,e){return i.replace(l0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const l0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(i){return JSON.parse(i)}function Le(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=ps(sl(u[0])||""),n=ps(sl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},a0=function(i){const e=Mm(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},u0=function(i){const e=Mm(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ni(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Qu(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ol(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function ll(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(mp(u)&&mp(d)){if(!ll(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function mp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function os(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(u)}}),e}function ls(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)s[E]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let E=0;E<16;E++)s[E]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let E=16;E<80;E++){const T=s[E-3]^s[E-8]^s[E-14]^s[E-16];s[E]=(T<<1|T>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,y;for(let E=0;E<80;E++){E<40?E<20?(g=f^u&(d^f),y=1518500249):(g=u^d^f,y=1859775393):E<60?(g=u&d|f&(u|d),y=2400959708):(g=u^d^f,y=3395469782);const T=(l<<5|l>>>27)+g+p+y+s[E]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=T}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function d0(i,e){const n=new h0(i,e);return n.subscribe.bind(n)}class h0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");f0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=bu),l.error===void 0&&(l.error=bu),l.complete===void 0&&(l.complete=bu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function f0(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function bu(){}function bm(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,D(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},kl=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(i){return i&&i._delegate?i._delegate:i}class gr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_0(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:g0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function g0(i){return i===fr?void 0:i}function _0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new m0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ce||(ce={}));const y0={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},w0=ce.INFO,E0={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},S0=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=E0[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sc{constructor(e){this.name=e,this._logLevel=w0,this._logHandler=S0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const C0=(i,e)=>e.some(n=>i instanceof n);let gp,_p;function I0(){return gp||(gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T0(){return _p||(_p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fm=new WeakMap,Xu=new WeakMap,Um=new WeakMap,Fu=new WeakMap,Cc=new WeakMap;function k0(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Wn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Fm.set(n,i)}).catch(()=>{}),Cc.set(e,i),e}function N0(i){if(Xu.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});Xu.set(i,e)}let Ju={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Xu.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Um.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function R0(i){Ju=i(Ju)}function P0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Uu(this),e,...n);return Um.set(s,e.sort?e.sort():[e]),Wn(s)}:T0().includes(i)?function(...e){return i.apply(Uu(this),e),Wn(Fm.get(this))}:function(...e){return Wn(i.apply(Uu(this),e))}}function x0(i){return typeof i=="function"?P0(i):(i instanceof IDBTransaction&&N0(i),C0(i,I0())?new Proxy(i,Ju):i)}function Wn(i){if(i instanceof IDBRequest)return k0(i);if(Fu.has(i))return Fu.get(i);const e=x0(i);return e!==i&&(Fu.set(i,e),Cc.set(e,i)),e}const Uu=i=>Cc.get(i);function A0(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Wn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Wn(d.result),p.oldVersion,p.newVersion,Wn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const O0=["get","getKey","getAll","getAllKeys","count"],D0=["put","add","delete","clear"],ju=new Map;function vp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ju.get(e))return ju.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=D0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||O0.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return ju.set(e,u),u}R0(i=>({...i,get:(e,n,s)=>vp(e,n)||i.get(e,n,s),has:(e,n)=>!!vp(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(M0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function M0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zu="@firebase/app",yp="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Sc("@firebase/app"),b0="@firebase/app-compat",F0="@firebase/analytics-compat",U0="@firebase/analytics",j0="@firebase/app-check-compat",z0="@firebase/app-check",W0="@firebase/auth",V0="@firebase/auth-compat",B0="@firebase/database",H0="@firebase/data-connect",$0="@firebase/database-compat",G0="@firebase/functions",K0="@firebase/functions-compat",q0="@firebase/installations",Y0="@firebase/installations-compat",Q0="@firebase/messaging",X0="@firebase/messaging-compat",J0="@firebase/performance",Z0="@firebase/performance-compat",ew="@firebase/remote-config",tw="@firebase/remote-config-compat",nw="@firebase/storage",rw="@firebase/storage-compat",iw="@firebase/firestore",sw="@firebase/vertexai",ow="@firebase/firestore-compat",lw="firebase",aw="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="[DEFAULT]",uw={[Zu]:"fire-core",[b0]:"fire-core-compat",[U0]:"fire-analytics",[F0]:"fire-analytics-compat",[z0]:"fire-app-check",[j0]:"fire-app-check-compat",[W0]:"fire-auth",[V0]:"fire-auth-compat",[B0]:"fire-rtdb",[H0]:"fire-data-connect",[$0]:"fire-rtdb-compat",[G0]:"fire-fn",[K0]:"fire-fn-compat",[q0]:"fire-iid",[Y0]:"fire-iid-compat",[Q0]:"fire-fcm",[X0]:"fire-fcm-compat",[J0]:"fire-perf",[Z0]:"fire-perf-compat",[ew]:"fire-rc",[tw]:"fire-rc-compat",[nw]:"fire-gcs",[rw]:"fire-gcs-compat",[iw]:"fire-fst",[ow]:"fire-fst-compat",[sw]:"fire-vertex","fire-js":"fire-js",[lw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map,cw=new Map,tc=new Map;function wp(i,e){try{i.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ri(i){const e=i.name;if(tc.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;tc.set(e,i);for(const n of al.values())wp(n,i);for(const n of cw.values())wp(n,i);return!0}function Ic(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function on(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new ks("app","Firebase",dw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=aw;function Tc(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ec,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Vn.create("bad-app-name",{appName:String(l)});if(n||(n=Am()),!n)throw Vn.create("no-options");const u=al.get(l);if(u){if(ll(n,u.options)&&ll(s,u.config))return u;throw Vn.create("duplicate-app",{appName:l})}const d=new v0(l);for(const p of tc.values())d.addComponent(p);const f=new hw(n,s,d);return al.set(l,f),f}function jm(i=ec){const e=al.get(i);if(!e&&i===ec&&Am())return Tc();if(!e)throw Vn.create("no-app",{appName:i});return e}function Bn(i,e,n){var s;let l=(s=uw[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(f.join(" "));return}ri(new gr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="firebase-heartbeat-database",pw=1,ms="firebase-heartbeat-store";let zu=null;function zm(){return zu||(zu=A0(fw,pw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ms)}catch(n){console.warn(n)}}}}).catch(i=>{throw Vn.create("idb-open",{originalErrorMessage:i.message})})),zu}async function mw(i){try{const n=(await zm()).transaction(ms),s=await n.objectStore(ms).get(Wm(i));return await n.done,s}catch(e){if(e instanceof Qn)hn.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function Ep(i,e){try{const s=(await zm()).transaction(ms,"readwrite");await s.objectStore(ms).put(e,Wm(i)),await s.done}catch(n){if(n instanceof Qn)hn.warn(n.message);else{const s=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(s.message)}}}function Wm(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=1024,_w=30*24*60*60*1e3;class vw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ww(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Sp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=_w}),this._storage.overwrite(this._heartbeatsCache))}catch(s){hn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sp(),{heartbeatsToSend:s,unsentEntries:l}=yw(this._heartbeatsCache.heartbeats),u=il(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return hn.warn(n),""}}}function Sp(){return new Date().toISOString().substring(0,10)}function yw(i,e=gw){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Cp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Cp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ww{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return r0()?i0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Cp(i){return il(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(i){ri(new gr("platform-logger",e=>new L0(e),"PRIVATE")),ri(new gr("heartbeat",e=>new vw(e),"PRIVATE")),Bn(Zu,yp,i),Bn(Zu,yp,"esm2017"),Bn("fire-js","")}Ew("");var Sw="firebase",Cw="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn(Sw,Cw,"app");var Ip={};const Tp="@firebase/database",kp="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vm="";function Iw(i){Vm=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Tw(e)}}catch{}return new kw},mr=Bm("localStorage"),Nw=Bm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Sc("@firebase/database"),Rw=function(){let i=1;return function(){return i++}}(),Hm=function(i){const e=p0(i),n=new c0;n.update(e);const s=n.digest();return vc.encodeByteArray(s)},Ns=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ns.apply(null,s):typeof s=="object"?e+=Le(s):e+=s,e+=" "}return e};let as=null,Np=!0;const Pw=function(i,e){D(!e,"Can't turn on custom loggers persistently."),Xr.logLevel=ce.VERBOSE,as=Xr.log.bind(Xr)},Qe=function(...i){if(Np===!0&&(Np=!1,as===null&&Nw.get("logging_enabled")===!0&&Pw()),as){const e=Ns.apply(null,i);as(e)}},Rs=function(i){return function(...e){Qe(i,...e)}},nc=function(...i){const e="FIREBASE INTERNAL ERROR: "+Ns(...i);Xr.error(e)},fn=function(...i){const e=`FIREBASE FATAL ERROR: ${Ns(...i)}`;throw Xr.error(e),new Error(e)},yt=function(...i){const e="FIREBASE WARNING: "+Ns(...i);Xr.warn(e)},xw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$m=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},Aw=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ii="[MIN_NAME]",_r="[MAX_NAME]",di=function(i,e){if(i===e)return 0;if(i===ii||e===_r)return-1;if(e===ii||i===_r)return 1;{const n=Rp(i),s=Rp(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},Ow=function(i,e){return i===e?0:i<e?-1:1},ts=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Le(e))},kc=function(i){if(typeof i!="object"||i===null)return Le(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Le(e[s]),n+=":",n+=kc(i[e[s]]);return n+="}",n},Gm=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function ht(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Km=function(i){D(!$m(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const y=g.join("");let E="";for(p=0;p<64;p+=8){let T=parseInt(y.substr(p,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},Dw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Lw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Mw(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const bw=new RegExp("^-?(0*)\\d{1,10}$"),Fw=-2147483648,Uw=2147483647,Rp=function(i){if(bw.test(i)){const e=Number(i);if(e>=Fw&&e<=Uw)return e}return null},Ps=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},jw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},us=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class Zo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="5",qm="v",Ym="s",Qm="r",Xm="f",Jm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zm="ls",eg="p",rc="ac",tg="websocket",ng="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Vw(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function ig(i,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===tg)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===ng)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Vw(i)&&(n.ns=i.namespace);const l=[];return ht(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.counters_={}}incrementCounter(e,n=1){mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Gy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu={},Vu={};function Rc(i){const e=i.toString();return Wu[e]||(Wu[e]=new Bw),Wu[e]}function Hw(i,e){const n=i.toString();return Vu[n]||(Vu[n]=e()),Vu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ps(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="start",Gw="close",Kw="pLPCommand",qw="pRTLPCB",sg="id",og="pw",lg="ser",Yw="cb",Qw="seg",Xw="ts",Jw="d",Zw="dframe",ag=1870,ug=30,eE=ag-ug,tE=25e3,nE=3e4;class qr{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rs(e),this.stats_=Rc(n),this.urlFn=p=>(this.appCheckToken&&(p[rc]=this.appCheckToken),ig(n,ng,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $w(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nE)),Aw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pc((...u)=>{const[d,f,p,g,y]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Pp)this.id=f,this.password=p;else if(d===Gw)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Pp]="t",s[lg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Yw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[qm]=Nc,this.transportSessionId&&(s[Ym]=this.transportSessionId),this.lastSessionId&&(s[Zm]=this.lastSessionId),this.applicationId&&(s[eg]=this.applicationId),this.appCheckToken&&(s[rc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Jm.test(location.hostname)&&(s[Qm]=Xm);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qr.forceAllow_=!0}static forceDisallow(){qr.forceDisallow_=!0}static isAvailable(){return qr.forceAllow_?!0:!qr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Dw()&&!Lw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Rm(n),l=Gm(s,eE);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Zw]="t",s[sg]=e,s[og]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pc{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Rw(),window[Kw+this.uniqueCallbackIdentifier]=e,window[qw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pc.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Qe("frame writing exception"),f.stack&&Qe(f.stack),Qe(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sg]=this.myID,e[og]=this.myPW,e[lg]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ug+s.length<=ag;){const d=this.pendingSegs.shift();s=s+"&"+Qw+l+"="+d.seg+"&"+Xw+l+"="+d.ts+"&"+Jw+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(tE)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=16384,iE=45e3;let ul=null;typeof MozWebSocket<"u"?ul=MozWebSocket:typeof WebSocket<"u"&&(ul=WebSocket);class qt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rs(this.connId),this.stats_=Rc(n),this.connURL=qt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[qm]=Nc,typeof location<"u"&&location.hostname&&Jm.test(location.hostname)&&(d[Qm]=Xm),n&&(d[Ym]=n),s&&(d[Zm]=s),l&&(d[rc]=l),u&&(d[eg]=u),ig(e,tg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mr.set("previous_websocket_failure",!0);try{let s;Lm(),this.mySock=new ul(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ul!==null&&!qt.forceDisallow_}static previouslyFailed(){return mr.isInMemoryStorage||mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Gm(n,rE);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static get ALL_TRANSPORTS(){return[qr,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=qt.isAvailable();let s=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[qt];else{const l=this.transports_=[];for(const u of gs.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=6e4,oE=5e3,lE=10*1024,aE=100*1024,Bu="t",xp="d",uE="s",Ap="r",cE="e",Op="o",Dp="a",Lp="n",Mp="p",dE="h";class hE{constructor(e,n,s,l,u,d,f,p,g,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rs("c:"+this.id+":"),this.transportManager_=new gs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bu in e){const n=e[Bu];n===Dp?this.upgradeIfSecondaryHealthy_():n===Ap?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Op&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ts("t",e),s=ts("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ts("t",e),s=ts("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ts(Bu,e);if(xp in e){const s=e[xp];if(n===dE){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Lp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uE?this.onConnectionShutdown_(s):n===Ap?this.onReset_(s):n===cE?nc("Server Error: "+s):n===Op?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nc!==s&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends dg{static getInstance(){return new cl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ec()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=32,Fp=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new de("")}function ne(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Kn(i){return i.pieces_.length-i.pieceNum_}function pe(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new de(i.pieces_,e)}function hg(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function fE(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function fg(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function pg(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new de(e,0)}function Me(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof de)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new de(n,0)}function te(i){return i.pieceNum_>=i.pieces_.length}function Ze(i,e){const n=ne(i),s=ne(e);if(n===null)return e;if(n===s)return Ze(pe(i),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function mg(i,e){if(Kn(i)!==Kn(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ft(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Kn(i)>Kn(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class pE{constructor(e,n){this.errorPrefix_=n,this.parts_=fg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=kl(this.parts_[s]);gg(this)}}function mE(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=kl(e),gg(i)}function gE(i){const e=i.parts_.pop();i.byteLength_-=kl(e),i.parts_.length>0&&(i.byteLength_-=1)}function gg(i){if(i.byteLength_>Fp)throw new Error(i.errorPrefix_+"has a key path longer than "+Fp+" bytes ("+i.byteLength_+").");if(i.parts_.length>bp)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bp+") or object contains a cycle "+pr(i))}function pr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends dg{static getInstance(){return new xc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=1e3,_E=60*5*1e3,Up=30*1e3,vE=1.3,yE=3e4,wE="server_kill",jp=3;class dn extends cg{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=dn.nextPersistentConnectionId_++,this.log_=Rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ns,this.maxReconnectDelay_=_E,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Lm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Le(u)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new wc,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;dn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mn(e,"w")){const s=ni(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||u0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Up)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=a0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):nc("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yE&&(this.reconnectDelay_=ns),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+dn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(E){D(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(E)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);d?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,f=new hE(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,L=>{yt(L+" ("+this.repoInfo_.toString()+")"),this.interrupt(wE)},u))}catch(E){this.log_("Failed to get token: "+E),d||(this.repoInfo_.nodeAdmin&&yt(E),p())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qu(this.interruptReasons_)&&(this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>kc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new de(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jp&&(this.reconnectDelay_=Up,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Vm.replace(/\./g,"-")]=1,Ec()?e["framework.cordova"]=1:Dm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cl.getInstance().currentlyOnline();return Qu(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Z(ii,e),l=new Z(ii,n);return this.compare(s,l)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;class _g extends Nl{static get __EMPTY_NODE(){return Yo}static set __EMPTY_NODE(e){Yo=e}compare(e,n){return di(e.name,n.name)}isDefinedOn(e){throw ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(_r,Yo)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,Yo)}toString(){return".key"}}const Jr=new _g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??We.RED,this.left=l??dt.EMPTY_NODE,this.right=u??dt.EMPTY_NODE}copy(e,n,s,l,u){return new We(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class EE{copy(e,n,s,l,u){return this}insert(e,n,s){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class dt{constructor(e,n=dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qo(this.root_,null,this.comparator_,!0,e)}}dt.EMPTY_NODE=new EE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(i,e){return di(i.name,e.name)}function Ac(i,e){return di(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;function CE(i){ic=i}const vg=function(i){return typeof i=="number"?"number:"+Km(i):"string:"+i},yg=function(i){if(i.isLeafNode()){const e=i.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mn(e,".sv"),"Priority must be a string or number.")}else D(i===ic||i.isEmpty(),"priority of unexpected type.");D(i===ic||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp;class ze{static set __childrenNodeConstructor(e){zp=e}static get __childrenNodeConstructor(){return zp}constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:ne(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ne(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Kn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Km(this.value_):e+=this.value_,this.lazyHash_=Hm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=ze.VALUE_TYPE_ORDER.indexOf(n),u=ze.VALUE_TYPE_ORDER.indexOf(s);return D(l>=0,"Unknown leaf type: "+n),D(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wg,Eg;function IE(i){wg=i}function TE(i){Eg=i}class kE extends Nl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?di(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(_r,new ze("[PRIORITY-POST]",Eg))}makePost(e,n){const s=wg(e);return new Z(n,new ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new kE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=Math.log(2);class RE{constructor(e){const n=u=>parseInt(Math.log(u)/NE,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dl=function(i,e,n,s){i.sort(e);const l=function(p,g){const y=g-p;let E,T;if(y===0)return null;if(y===1)return E=i[p],T=n?n(E):E,new We(T,E.node,We.BLACK,null,null);{const L=parseInt(y/2,10)+p,F=l(p,L),B=l(L+1,g);return E=i[L],T=n?n(E):E,new We(T,E.node,We.BLACK,F,B)}},u=function(p){let g=null,y=null,E=i.length;const T=function(F,B){const q=E-F,Pe=E;E-=F;const be=l(q+1,Pe),xe=i[q],Te=n?n(xe):xe;L(new We(Te,xe.node,B,null,be))},L=function(F){g?(g.left=F,g=F):(y=F,g=F)};for(let F=0;F<p.count;++F){const B=p.nextBitIsOne(),q=Math.pow(2,p.count-(F+1));B?T(q,We.BLACK):(T(q,We.BLACK),T(q,We.RED))}return y},d=new RE(i.length),f=u(d);return new dt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu;const rs={};class ln{static get Default(){return D(Ie,"ChildrenNode.ts has not been loaded"),Hu=Hu||new ln({".priority":rs},{".priority":Ie}),Hu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof dt?n:null}hasIndex(e){return mn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(Z.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=dl(s,e.getCompare()):f=rs;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const y=Object.assign({},this.indexes_);return y[p]=f,new ln(y,g)}addToIndexes(e,n){const s=ol(this.indexes_,(l,u)=>{const d=ni(this.indexSet_,u);if(D(d,"Missing index implementation for "+u),l===rs)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(Z.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),dl(f,d.getCompare())}else return rs;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new Z(e.name,f))),p.insert(e,e.node)}});return new ln(s,this.indexSet_)}removeFromIndexes(e,n){const s=ol(this.indexes_,l=>{if(l===rs)return l;{const u=n.get(e.name);return u?l.remove(new Z(e.name,u)):l}});return new ln(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;class K{static get EMPTY_NODE(){return is||(is=new K(new dt(Ac),null,ln.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&yg(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||is}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?is:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Z(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?is:this.priorityNode_;return new K(l,d,u)}}updateChild(e,n){const s=ne(e);if(s===null)return n;{D(ne(e)!==".priority"||Kn(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(pe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Ie,(d,f)=>{n[d]=f.val(e),s++,u&&K.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vg(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Hm(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new Z(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Z.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xs?-1:0}withIndex(e){if(e===Jr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),l=n.getIterator(Ie);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===Jr?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PE extends K{constructor(){super(new dt(Ac),K.EMPTY_NODE,ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const xs=new PE;Object.defineProperties(Z,{MIN:{value:new Z(ii,K.EMPTY_NODE)},MAX:{value:new Z(_r,xs)}});_g.__EMPTY_NODE=K.EMPTY_NODE;ze.__childrenNodeConstructor=K;CE(xs);TE(xs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=!0;function $e(i,e=null){if(i===null)return K.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new ze(n,$e(e))}if(!(i instanceof Array)&&xE){const n=[];let s=!1;if(ht(i,(d,f)=>{if(d.substring(0,1)!=="."){const p=$e(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new Z(d,p)))}}),n.length===0)return K.EMPTY_NODE;const u=dl(n,SE,d=>d.name,Ac);if(s){const d=dl(n,Ie.getCompare());return new K(u,$e(e),new ln({".priority":d},{".priority":Ie}))}else return new K(u,$e(e),ln.Default)}else{let n=K.EMPTY_NODE;return ht(i,(s,l)=>{if(mn(i,s)&&s.substring(0,1)!=="."){const u=$e(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority($e(e))}}IE($e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE extends Nl{constructor(e){super(),this.indexPath_=e,D(!te(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?di(e.name,n.name):u}makePost(e,n){const s=$e(e),l=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new Z(n,l)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,xs);return new Z(_r,e)}toString(){return fg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends Nl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?di(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const s=$e(e);return new Z(n,s)}toString(){return".value"}}const DE=new OE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(i){return{type:"value",snapshotNode:i}}function si(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function _s(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function vs(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function LE(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(_s(n,f)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(si(n,s)):d.trackChildChange(vs(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(l,u)=>{n.hasChild(l)||s.trackChildChange(_s(l,u))}),n.isLeafNode()||n.forEachChild(Ie,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(vs(l,u,d))}else s.trackChildChange(si(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.indexedFilter_=new Oc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ys.getStartPost_(e),this.endPost_=ys.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new Z(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(K.EMPTY_NODE);const u=this;return n.forEachChild(Ie,(d,f)=>{u.matches(new Z(d,f))||(l=l.updateImmediateChild(d,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ys(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new Z(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=K.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(K.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const E=this.index_.getCompare();d=(T,L)=>E(L,T)}else d=this.index_.getCompare();const f=e;D(f.numChildren()===this.limit_,"");const p=new Z(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const E=f.getImmediateChild(n);let T=l.getChildAfterChild(this.index_,g,this.reverse_);for(;T!=null&&(T.name===n||f.hasChild(T.name));)T=l.getChildAfterChild(this.index_,T,this.reverse_);const L=T==null?1:d(T,p);if(y&&!s.isEmpty()&&L>=0)return u!=null&&u.trackChildChange(vs(n,s,E)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(_s(n,E));const B=f.updateImmediateChild(n,K.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(u!=null&&u.trackChildChange(si(T.name,T.node)),B.updateImmediateChild(T.name,T.node)):B}}else return s.isEmpty()?e:y&&d(g,p)>=0?(u!=null&&(u.trackChildChange(_s(g.name,g.node)),u.trackChildChange(si(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ii}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Dc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bE(i){return i.loadsAllData()?new Oc(i.getIndex()):i.hasLimit()?new ME(i):new ys(i)}function Wp(i){const e={};if(i.isDefault())return e;let n;if(i.index_===Ie?n="$priority":i.index_===DE?n="$value":i.index_===Jr?n="$key":(D(i.index_ instanceof AE,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=Le(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Le(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Le(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Le(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Le(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Vp(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==Ie&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends cg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Rs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=hl.getListenId_(e,s),f={};this.listens_[d]=f;const p=Wp(e._queryParams);this.restRequest_(u+".json",p,(g,y)=>{let E=y;if(g===404&&(E=null,g=null),g===null&&this.onDataUpdate_(u,E,!1,s),ni(this.listens_,d)===f){let T;g?g===401?T="permission_denied":T="rest_error:"+g:T="ok",l(T,null)}})}unlisten(e,n){const s=hl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Wp(e._queryParams),s=e._path.toString(),l=new wc;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ui(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=ps(f.responseText)}catch{yt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&yt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){return{value:null,children:new Map}}function Cg(i,e,n){if(te(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=ne(e);i.children.has(s)||i.children.set(s,fl());const l=i.children.get(s);e=pe(e),Cg(l,e,n)}}function sc(i,e,n){i.value!==null?n(e,i.value):UE(i,(s,l)=>{const u=new de(e.toString()+"/"+s);sc(l,u,n)})}function UE(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ht(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=10*1e3,zE=30*1e3,WE=5*60*1e3;class VE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new jE(e);const s=Bp+(zE-Bp)*Math.random();us(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ht(e,(l,u)=>{u>0&&mn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),us(this.reportStats_.bind(this),Math.floor(Math.random()*2*WE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ut||(Ut={}));function Ig(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mc(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ut.ACK_USER_WRITE,this.source=Ig()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new pl(le(),n,this.revert)}}else return D(ne(this.path)===e,"operationForChild called for unrelated child."),new pl(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.source=e,this.path=n,this.type=Ut.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new ws(this.source,le()):new ws(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ut.OVERWRITE}operationForChild(e){return te(this.path)?new vr(this.source,le(),this.snap.getImmediateChild(e)):new vr(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ut.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new vr(this.source,le(),n.value):new Es(this.source,le(),n)}else return D(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HE(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(LE(d.childName,d.snapshotNode))}),ss(i,l,"child_removed",e,s,n),ss(i,l,"child_added",e,s,n),ss(i,l,"child_moved",u,s,n),ss(i,l,"child_changed",e,s,n),ss(i,l,"value",e,s,n),l}function ss(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>GE(i,f,p)),d.forEach(f=>{const p=$E(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function $E(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function GE(i,e,n){if(e.childName==null||n.childName==null)throw ai("Should only compare child_ events.");const s=new Z(e.childName,e.snapshotNode),l=new Z(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(i,e){return{eventCache:i,serverCache:e}}function cs(i,e,n,s){return Rl(new qn(e,n,s),i.serverCache)}function Tg(i,e,n,s){return Rl(i.eventCache,new qn(e,n,s))}function ml(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function yr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u;const KE=()=>($u||($u=new dt(Ow)),$u);class _e{static fromObject(e){let n=new _e(null);return ht(e,(s,l)=>{n=n.set(new de(s),l)}),n}constructor(e,n=KE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(te(e))return null;{const s=ne(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(pe(e),n);return u!=null?{path:Me(new de(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=ne(e),s=this.children.get(n);return s!==null?s.subtree(pe(e)):new _e(null)}}set(e,n){if(te(e))return new _e(n,this.children);{const s=ne(e),u=(this.children.get(s)||new _e(null)).set(pe(e),n),d=this.children.insert(s,u);return new _e(this.value,d)}}remove(e){if(te(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=ne(e),s=this.children.get(n);if(s){const l=s.remove(pe(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new _e(null):new _e(this.value,u)}else return this}}get(e){if(te(e))return this.value;{const n=ne(e),s=this.children.get(n);return s?s.get(pe(e)):null}}setTree(e,n){if(te(e))return n;{const s=ne(e),u=(this.children.get(s)||new _e(null)).setTree(pe(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new _e(this.value,d)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Me(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(te(e))return null;{const u=ne(e),d=this.children.get(u);return d?d.findOnPath_(pe(e),Me(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const l=ne(e),u=this.children.get(l);return u?u.foreachOnPath_(pe(e),Me(n,l),s):new _e(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.writeTree_=e}static empty(){return new jt(new _e(null))}}function ds(i,e,n){if(te(e))return new jt(new _e(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=Ze(l,e);return u=u.updateChild(d,n),new jt(i.writeTree_.set(l,u))}else{const l=new _e(n),u=i.writeTree_.setTree(e,l);return new jt(u)}}}function Hp(i,e,n){let s=i;return ht(n,(l,u)=>{s=ds(s,Me(e,l),u)}),s}function $p(i,e){if(te(e))return jt.empty();{const n=i.writeTree_.setTree(e,new _e(null));return new jt(n)}}function oc(i,e){return Er(i,e)!=null}function Er(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(Ze(n.path,e)):null}function Gp(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,l)=>{e.push(new Z(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new Z(s,l.value))}),e}function Hn(i,e){if(te(e))return i;{const n=Er(i,e);return n!=null?new jt(new _e(n)):new jt(i.writeTree_.subtree(e))}}function lc(i){return i.writeTree_.isEmpty()}function oi(i,e){return kg(le(),i.writeTree_,e)}function kg(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(D(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=kg(Me(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Me(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(i,e){return xg(e,i)}function qE(i,e,n,s,l){D(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=ds(i.visibleWrites,e,n)),i.lastWriteId=s}function YE(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function QE(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&XE(f,s.path)?l=!1:Ft(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return JE(i),!0;if(s.snap)i.visibleWrites=$p(i.visibleWrites,s.path);else{const f=s.children;ht(f,p=>{i.visibleWrites=$p(i.visibleWrites,Me(s.path,p))})}return!0}else return!1}function XE(i,e){if(i.snap)return Ft(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Ft(Me(i.path,n),e))return!0;return!1}function JE(i){i.visibleWrites=Ng(i.allWrites,ZE,le()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function ZE(i){return i.visible}function Ng(i,e,n){let s=jt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Ft(n,d)?(f=Ze(n,d),s=ds(s,f,u.snap)):Ft(d,n)&&(f=Ze(d,n),s=ds(s,le(),u.snap.getChild(f)));else if(u.children){if(Ft(n,d))f=Ze(n,d),s=Hp(s,f,u.children);else if(Ft(d,n))if(f=Ze(d,n),te(f))s=Hp(s,le(),u.children);else{const p=ni(u.children,ne(f));if(p){const g=p.getChild(pe(f));s=ds(s,le(),g)}}}else throw ai("WriteRecord should have .snap or .children")}}return s}function Rg(i,e,n,s,l){if(!s&&!l){const u=Er(i.visibleWrites,e);if(u!=null)return u;{const d=Hn(i.visibleWrites,e);if(lc(d))return n;if(n==null&&!oc(d,le()))return null;{const f=n||K.EMPTY_NODE;return oi(d,f)}}}else{const u=Hn(i.visibleWrites,e);if(!l&&lc(u))return n;if(!l&&n==null&&!oc(u,le()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Ft(g.path,e)||Ft(e,g.path))},f=Ng(i.allWrites,d,e),p=n||K.EMPTY_NODE;return oi(f,p)}}}function eS(i,e,n){let s=K.EMPTY_NODE;const l=Er(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Ie,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Hn(i.visibleWrites,e);return n.forEachChild(Ie,(d,f)=>{const p=oi(Hn(u,new de(d)),f);s=s.updateImmediateChild(d,p)}),Gp(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Hn(i.visibleWrites,e);return Gp(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function tS(i,e,n,s,l){D(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Me(e,n);if(oc(i.visibleWrites,u))return null;{const d=Hn(i.visibleWrites,u);return lc(d)?l.getChild(n):oi(d,l.getChild(n))}}function nS(i,e,n,s){const l=Me(e,n),u=Er(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Hn(i.visibleWrites,l);return oi(d,s.getNode().getImmediateChild(n))}else return null}function rS(i,e){return Er(i.visibleWrites,e)}function iS(i,e,n,s,l,u,d){let f;const p=Hn(i.visibleWrites,e),g=Er(p,le());if(g!=null)f=g;else if(n!=null)f=oi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const y=[],E=d.getCompare(),T=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let L=T.getNext();for(;L&&y.length<l;)E(L,s)!==0&&y.push(L),L=T.getNext();return y}else return[]}function sS(){return{visibleWrites:jt.empty(),allWrites:[],lastWriteId:-1}}function gl(i,e,n,s){return Rg(i.writeTree,i.treePath,e,n,s)}function bc(i,e){return eS(i.writeTree,i.treePath,e)}function Kp(i,e,n,s){return tS(i.writeTree,i.treePath,e,n,s)}function _l(i,e){return rS(i.writeTree,Me(i.treePath,e))}function oS(i,e,n,s,l,u){return iS(i.writeTree,i.treePath,e,n,s,l,u)}function Fc(i,e,n){return nS(i.writeTree,i.treePath,e,n)}function Pg(i,e){return xg(Me(i.treePath,e),i.writeTree)}function xg(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,vs(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,_s(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,si(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,vs(s,e.snapshotNode,l.oldSnap));else throw ai("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ag=new aS;class Uc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yr(this.viewCache_),u=oS(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(i){return{filter:i}}function cS(i,e){D(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function dS(i,e,n,s,l){const u=new lS;let d,f;if(n.type===Ut.OVERWRITE){const g=n;g.source.fromUser?d=ac(i,e,g.path,g.snap,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!te(g.path),d=vl(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Ut.MERGE){const g=n;g.source.fromUser?d=fS(i,e,g.path,g.children,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=uc(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Ut.ACK_USER_WRITE){const g=n;g.revert?d=gS(i,e,g.path,s,l,u):d=pS(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Ut.LISTEN_COMPLETE)d=mS(i,e,n.path,s,u);else throw ai("Unknown operation type: "+n.type);const p=u.getChanges();return hS(e,d,p),{viewCache:d,changes:p}}function hS(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=ml(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(Sg(ml(e)))}}function Og(i,e,n,s,l,u){const d=e.eventCache;if(_l(s,n)!=null)return e;{let f,p;if(te(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=yr(e),y=g instanceof K?g:K.EMPTY_NODE,E=bc(s,y);f=i.filter.updateFullNode(e.eventCache.getNode(),E,u)}else{const g=gl(s,yr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=ne(n);if(g===".priority"){D(Kn(n)===1,"Can't have a priority with additional path components");const y=d.getNode();p=e.serverCache.getNode();const E=Kp(s,n,y,p);E!=null?f=i.filter.updatePriority(y,E):f=d.getNode()}else{const y=pe(n);let E;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const T=Kp(s,n,d.getNode(),p);T!=null?E=d.getNode().getImmediateChild(g).updateChild(y,T):E=d.getNode().getImmediateChild(g)}else E=Fc(s,g,e.serverCache);E!=null?f=i.filter.updateChild(d.getNode(),g,E,y,l,u):f=d.getNode()}}return cs(e,f,d.isFullyInitialized()||te(n),i.filter.filtersNodes())}}function vl(i,e,n,s,l,u,d,f){const p=e.serverCache;let g;const y=d?i.filter:i.filter.getIndexedFilter();if(te(n))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const L=p.getNode().updateChild(n,s);g=y.updateFullNode(p.getNode(),L,null)}else{const L=ne(n);if(!p.isCompleteForPath(n)&&Kn(n)>1)return e;const F=pe(n),q=p.getNode().getImmediateChild(L).updateChild(F,s);L===".priority"?g=y.updatePriority(p.getNode(),q):g=y.updateChild(p.getNode(),L,q,F,Ag,null)}const E=Tg(e,g,p.isFullyInitialized()||te(n),y.filtersNodes()),T=new Uc(l,E,u);return Og(i,E,n,l,T,f)}function ac(i,e,n,s,l,u,d){const f=e.eventCache;let p,g;const y=new Uc(l,e,u);if(te(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=cs(e,g,!0,i.filter.filtersNodes());else{const E=ne(n);if(E===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=cs(e,g,f.isFullyInitialized(),f.isFiltered());else{const T=pe(n),L=f.getNode().getImmediateChild(E);let F;if(te(T))F=s;else{const B=y.getCompleteChild(E);B!=null?hg(T)===".priority"&&B.getChild(pg(T)).isEmpty()?F=B:F=B.updateChild(T,s):F=K.EMPTY_NODE}if(L.equals(F))p=e;else{const B=i.filter.updateChild(f.getNode(),E,F,T,y,d);p=cs(e,B,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function qp(i,e){return i.eventCache.isCompleteForChild(e)}function fS(i,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const y=Me(n,p);qp(e,ne(y))&&(f=ac(i,f,y,g,l,u,d))}),s.foreach((p,g)=>{const y=Me(n,p);qp(e,ne(y))||(f=ac(i,f,y,g,l,u,d))}),f}function Yp(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function uc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;te(n)?g=s:g=new _e(null).setTree(n,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((E,T)=>{if(y.hasChild(E)){const L=e.serverCache.getNode().getImmediateChild(E),F=Yp(i,L,T);p=vl(i,p,new de(E),F,l,u,d,f)}}),g.children.inorderTraversal((E,T)=>{const L=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!y.hasChild(E)&&!L){const F=e.serverCache.getNode().getImmediateChild(E),B=Yp(i,F,T);p=vl(i,p,new de(E),B,l,u,d,f)}}),p}function pS(i,e,n,s,l,u,d){if(_l(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(te(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return vl(i,e,n,p.getNode().getChild(n),l,u,f,d);if(te(n)){let g=new _e(null);return p.getNode().forEachChild(Jr,(y,E)=>{g=g.set(new de(y),E)}),uc(i,e,n,g,l,u,f,d)}else return e}else{let g=new _e(null);return s.foreach((y,E)=>{const T=Me(n,y);p.isCompleteForPath(T)&&(g=g.set(y,p.getNode().getChild(T)))}),uc(i,e,n,g,l,u,f,d)}}function mS(i,e,n,s,l){const u=e.serverCache,d=Tg(e,u.getNode(),u.isFullyInitialized()||te(n),u.isFiltered());return Og(i,d,n,s,Ag,l)}function gS(i,e,n,s,l,u){let d;if(_l(s,n)!=null)return e;{const f=new Uc(s,e,l),p=e.eventCache.getNode();let g;if(te(n)||ne(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=gl(s,yr(e));else{const E=e.serverCache.getNode();D(E instanceof K,"serverChildren would be complete if leaf node"),y=bc(s,E)}y=y,g=i.filter.updateFullNode(p,y,u)}else{const y=ne(n);let E=Fc(s,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=p.getImmediateChild(y)),E!=null?g=i.filter.updateChild(p,y,E,pe(n),f,u):e.eventCache.getNode().hasChild(y)?g=i.filter.updateChild(p,y,K.EMPTY_NODE,pe(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=gl(s,yr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||_l(s,le())!=null,cs(e,g,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Oc(s.getIndex()),u=bE(s);this.processor_=uS(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(K.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(K.EMPTY_NODE,f.getNode(),null),y=new qn(p,d.isFullyInitialized(),l.filtersNodes()),E=new qn(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=Rl(E,y),this.eventGenerator_=new BE(this.query_)}get query(){return this.query_}}function vS(i){return i.viewCache_.serverCache.getNode()}function yS(i){return ml(i.viewCache_)}function wS(i,e){const n=yr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function Qp(i){return i.eventRegistrations_.length===0}function ES(i,e){i.eventRegistrations_.push(e)}function Xp(i,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Jp(i,e,n,s){e.type===Ut.MERGE&&e.source.queryId!==null&&(D(yr(i.viewCache_),"We should always have a full cache before handling merges"),D(ml(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=dS(i.processor_,l,e,n,s);return cS(i.processor_,u.viewCache),D(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,Dg(i,u.changes,u.viewCache.eventCache.getNode(),null)}function SS(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(u,d)=>{s.push(si(u,d))}),n.isFullyInitialized()&&s.push(Sg(n.getNode())),Dg(i,s,n.getNode(),e)}function Dg(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return HE(i.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class Lg{constructor(){this.views=new Map}}function CS(i){D(!yl,"__referenceConstructor has already been defined"),yl=i}function IS(){return D(yl,"Reference.ts has not been loaded"),yl}function TS(i){return i.views.size===0}function jc(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return D(u!=null,"SyncTree gave us an op for an invalid query."),Jp(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Jp(d,e,n,s));return u}}function Mg(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=gl(n,l?s:null),p=!1;f?p=!0:s instanceof K?(f=bc(n,s),p=!1):(f=K.EMPTY_NODE,p=!1);const g=Rl(new qn(f,p,!1),new qn(s,l,!1));return new _S(e,g)}return d}function kS(i,e,n,s,l,u){const d=Mg(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),ES(d,n),SS(d,n)}function NS(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=Yn(i);if(l==="default")for(const[p,g]of i.views.entries())d=d.concat(Xp(g,n,s)),Qp(g)&&(i.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=i.views.get(l);p&&(d=d.concat(Xp(p,n,s)),Qp(p)&&(i.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!Yn(i)&&u.push(new(IS())(e._repo,e._path)),{removed:u,events:d}}function bg(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $n(i,e){let n=null;for(const s of i.views.values())n=n||wS(s,e);return n}function Fg(i,e){if(e._queryParams.loadsAllData())return xl(i);{const s=e._queryIdentifier;return i.views.get(s)}}function Ug(i,e){return Fg(i,e)!=null}function Yn(i){return xl(i)!=null}function xl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;function RS(i){D(!wl,"__referenceConstructor has already been defined"),wl=i}function PS(){return D(wl,"Reference.ts has not been loaded"),wl}let xS=1;class Zp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=sS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function AS(i,e,n,s,l){return qE(i.pendingWriteTree_,e,n,s,l),l?Os(i,new vr(Ig(),e,n)):[]}function Yr(i,e,n=!1){const s=YE(i.pendingWriteTree_,e);if(QE(i.pendingWriteTree_,e)){let u=new _e(null);return s.snap!=null?u=u.set(le(),!0):ht(s.children,d=>{u=u.set(new de(d),!0)}),Os(i,new pl(s.path,u,n))}else return[]}function As(i,e,n){return Os(i,new vr(Lc(),e,n))}function OS(i,e,n){const s=_e.fromObject(n);return Os(i,new Es(Lc(),e,s))}function DS(i,e){return Os(i,new ws(Lc(),e))}function LS(i,e,n){const s=zc(i,n);if(s){const l=Wc(s),u=l.path,d=l.queryId,f=Ze(u,e),p=new ws(Mc(d),f);return Vc(i,u,p)}else return[]}function jg(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||Ug(d,e))){const p=NS(d,e,n,s);TS(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const y=g.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=i.syncPointTree_.findOnPath(u,(T,L)=>Yn(L));if(y&&!E){const T=i.syncPointTree_.subtree(u);if(!T.isEmpty()){const L=US(T);for(let F=0;F<L.length;++F){const B=L[F],q=B.query,Pe=Hg(i,B);i.listenProvider_.startListening(hs(q),Ss(i,q),Pe.hashFn,Pe.onComplete)}}}!E&&g.length>0&&!s&&(y?i.listenProvider_.stopListening(hs(e),null):g.forEach(T=>{const L=i.queryToTagMap.get(Al(T));i.listenProvider_.stopListening(hs(T),L)}))}jS(i,g)}return f}function zg(i,e,n,s){const l=zc(i,s);if(l!=null){const u=Wc(l),d=u.path,f=u.queryId,p=Ze(d,e),g=new vr(Mc(f),p,n);return Vc(i,d,g)}else return[]}function MS(i,e,n,s){const l=zc(i,s);if(l){const u=Wc(l),d=u.path,f=u.queryId,p=Ze(d,e),g=_e.fromObject(n),y=new Es(Mc(f),p,g);return Vc(i,d,y)}else return[]}function bS(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(T,L)=>{const F=Ze(T,l);u=u||$n(L,F),d=d||Yn(L)});let f=i.syncPointTree_.get(l);f?(d=d||Yn(f),u=u||$n(f,le())):(f=new Lg,i.syncPointTree_=i.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=K.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((L,F)=>{const B=$n(F,le());B&&(u=u.updateImmediateChild(L,B))}));const g=Ug(f,e);if(!g&&!e._queryParams.loadsAllData()){const T=Al(e);D(!i.queryToTagMap.has(T),"View does not exist, but we have a tag");const L=zS();i.queryToTagMap.set(T,L),i.tagToQueryMap.set(L,T)}const y=Pl(i.pendingWriteTree_,l);let E=kS(f,e,n,y,u,p);if(!g&&!d&&!s){const T=Fg(f,e);E=E.concat(WS(i,e,T))}return E}function Wg(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const p=Ze(d,e),g=$n(f,p);if(g)return g});return Rg(l,e,u,n,!0)}function FS(i,e){const n=e._path;let s=null;i.syncPointTree_.foreachOnPath(n,(g,y)=>{const E=Ze(g,n);s=s||$n(y,E)});let l=i.syncPointTree_.get(n);l?s=s||$n(l,le()):(l=new Lg,i.syncPointTree_=i.syncPointTree_.set(n,l));const u=s!=null,d=u?new qn(s,!0,!1):null,f=Pl(i.pendingWriteTree_,e._path),p=Mg(l,e,f,u?d.getNode():K.EMPTY_NODE,u);return yS(p)}function Os(i,e){return Vg(e,i.syncPointTree_,null,Pl(i.pendingWriteTree_,le()))}function Vg(i,e,n,s){if(te(i.path))return Bg(i,e,n,s);{const l=e.get(le());n==null&&l!=null&&(n=$n(l,le()));let u=[];const d=ne(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,y=Pg(s,d);u=u.concat(Vg(f,p,g,y))}return l&&(u=u.concat(jc(l,i,s,n))),u}}function Bg(i,e,n,s){const l=e.get(le());n==null&&l!=null&&(n=$n(l,le()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=Pg(s,d),y=i.operationForChild(d);y&&(u=u.concat(Bg(y,f,p,g)))}),l&&(u=u.concat(jc(l,i,s,n))),u}function Hg(i,e){const n=e.query,s=Ss(i,n);return{hashFn:()=>(vS(e)||K.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?LS(i,n._path,s):DS(i,n._path);{const u=Mw(l,n);return jg(i,n,null,u)}}}}function Ss(i,e){const n=Al(e);return i.queryToTagMap.get(n)}function Al(i){return i._path.toString()+"$"+i._queryIdentifier}function zc(i,e){return i.tagToQueryMap.get(e)}function Wc(i){const e=i.indexOf("$");return D(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new de(i.substr(0,e))}}function Vc(i,e,n){const s=i.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const l=Pl(i.pendingWriteTree_,e);return jc(s,n,l,null)}function US(i){return i.fold((e,n,s)=>{if(n&&Yn(n))return[xl(n)];{let l=[];return n&&(l=bg(n)),ht(s,(u,d)=>{l=l.concat(d)}),l}})}function hs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(PS())(i._repo,i._path):i}function jS(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Al(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function zS(){return xS++}function WS(i,e,n){const s=e._path,l=Ss(i,e),u=Hg(i,n),d=i.listenProvider_.startListening(hs(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)D(!Yn(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,y,E)=>{if(!te(g)&&y&&Yn(y))return[xl(y).query];{let T=[];return y&&(T=T.concat(bg(y).map(L=>L.query))),ht(E,(L,F)=>{T=T.concat(F)}),T}});for(let g=0;g<p.length;++g){const y=p[g];i.listenProvider_.stopListening(hs(y),Ss(i,y))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bc(n)}node(){return this.node_}}class Hc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Hc(this.syncTree_,n)}node(){return Wg(this.syncTree_,this.path_)}}const VS=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},em=function(i,e,n){if(!i||typeof i!="object")return i;if(D(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return BS(i[".sv"],e,n);if(typeof i[".sv"]=="object")return HS(i[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},BS=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+i)}},HS=function(i,e,n){i.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const l=e.node();if(D(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},$S=function(i,e,n,s){return $c(e,new Hc(n,i),s)},GS=function(i,e,n){return $c(i,new Bc(e),n)};function $c(i,e,n){const s=i.getPriority().val(),l=em(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=em(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new ze(f,$e(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new ze(l))),d.forEachChild(Ie,(f,p)=>{const g=$c(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Kc(i,e){let n=e instanceof de?e:new de(e),s=i,l=ne(n);for(;l!==null;){const u=ni(s.node.children,l)||{children:{},childCount:0};s=new Gc(l,s,u),n=pe(n),l=ne(n)}return s}function hi(i){return i.node.value}function $g(i,e){i.node.value=e,cc(i)}function Gg(i){return i.node.childCount>0}function KS(i){return hi(i)===void 0&&!Gg(i)}function Ol(i,e){ht(i.node.children,(n,s)=>{e(new Gc(n,i,s))})}function Kg(i,e,n,s){n&&!s&&e(i),Ol(i,l=>{Kg(l,e,!0,s)})}function qS(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ds(i){return new de(i.parent===null?i.name:Ds(i.parent)+"/"+i.name)}function cc(i){i.parent!==null&&YS(i.parent,i.name,i)}function YS(i,e,n){const s=KS(n),l=mn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,cc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,cc(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=/[\[\].#$\/\u0000-\u001F\u007F]/,XS=/[\[\].#$\u0000-\u001F\u007F]/,Gu=10*1024*1024,qg=function(i){return typeof i=="string"&&i.length!==0&&!QS.test(i)},Yg=function(i){return typeof i=="string"&&i.length!==0&&!XS.test(i)},JS=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Yg(i)},Qg=function(i,e,n){const s=n instanceof de?new pE(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+pr(s));if(typeof e=="function")throw new Error(i+"contains a function "+pr(s)+" with contents = "+e.toString());if($m(e))throw new Error(i+"contains "+e.toString()+" "+pr(s));if(typeof e=="string"&&e.length>Gu/3&&kl(e)>Gu)throw new Error(i+"contains a string greater than "+Gu+" utf8 bytes "+pr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(ht(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!qg(d)))throw new Error(i+" contains an invalid key ("+d+") "+pr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mE(s,d),Qg(i,f,s),gE(s)}),l&&u)throw new Error(i+' contains ".value" child '+pr(s)+" in addition to actual children.")}},Xg=function(i,e,n,s){if(!Yg(n))throw new Error(bm(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZS=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xg(i,e,n)},eC=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JS(n))throw new Error(bm(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nC(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!mg(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function Xn(i,e,n){nC(i,n),rC(i,s=>Ft(s,e)||Ft(e,s))}function rC(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(iC(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function iC(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();as&&Qe("event: "+n.toString()),Ps(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="repo_interrupt",oC=25;class lC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fl(),this.transactionQueueTree_=new Gc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aC(i,e,n){if(i.stats_=Rc(i.repoInfo_),i.forceRestClient_||jw())i.server_=new hl(i.repoInfo_,(s,l,u,d)=>{tm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>nm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new dn(i.repoInfo_,e,(s,l,u,d)=>{tm(i,s,l,u,d)},s=>{nm(i,s)},s=>{cC(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=Hw(i.repoInfo_,()=>new VE(i.stats_,i.server_)),i.infoData_=new FE,i.infoSyncTree_=new Zp({startListening:(s,l,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=As(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),qc(i,"connected",!1),i.serverSyncTree_=new Zp({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Xn(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function uC(i){const n=i.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jg(i){return VS({timestamp:uC(i)})}function tm(i,e,n,s,l){i.dataUpdateCount++;const u=new de(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=ol(n,g=>$e(g));d=MS(i.serverSyncTree_,u,p,l)}else{const p=$e(n);d=zg(i.serverSyncTree_,u,p,l)}else if(s){const p=ol(n,g=>$e(g));d=OS(i.serverSyncTree_,u,p)}else{const p=$e(n);d=As(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=Xc(i,u)),Xn(i.eventQueue_,f,d)}function nm(i,e){qc(i,"connected",e),e===!1&&fC(i)}function cC(i,e){ht(e,(n,s)=>{qc(i,n,s)})}function qc(i,e,n){const s=new de("/.info/"+e),l=$e(n);i.infoData_.updateSnapshot(s,l);const u=As(i.infoSyncTree_,s,l);Xn(i.eventQueue_,s,u)}function dC(i){return i.nextWriteId_++}function hC(i,e,n){const s=FS(i.serverSyncTree_,e);return s!=null?Promise.resolve(s):i.server_.get(e).then(l=>{const u=$e(l).withIndex(e._queryParams.getIndex());bS(i.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=As(i.serverSyncTree_,e._path,u);else{const f=Ss(i.serverSyncTree_,e);d=zg(i.serverSyncTree_,e._path,u,f)}return Xn(i.eventQueue_,e._path,d),jg(i.serverSyncTree_,e,n,null,!0),u},l=>(Yc(i,"get for query "+Le(e)+" failed: "+l),Promise.reject(new Error(l))))}function fC(i){Yc(i,"onDisconnectEvents");const e=Jg(i),n=fl();sc(i.onDisconnect_,le(),(l,u)=>{const d=$S(l,u,i.serverSyncTree_,e);Cg(n,l,d)});let s=[];sc(n,le(),(l,u)=>{s=s.concat(As(i.serverSyncTree_,l,u));const d=_C(i,l);Xc(i,d)}),i.onDisconnect_=fl(),Xn(i.eventQueue_,le(),s)}function pC(i){i.persistentConnection_&&i.persistentConnection_.interrupt(sC)}function Yc(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),Qe(n,...e)}function Zg(i,e,n){return Wg(i.serverSyncTree_,e,n)||K.EMPTY_NODE}function Qc(i,e=i.transactionQueueTree_){if(e||Dl(i,e),hi(e)){const n=t_(i,e);D(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&mC(i,Ds(e),n)}else Gg(e)&&Ol(e,n=>{Qc(i,n)})}function mC(i,e,n){const s=n.map(g=>g.currentWriteId),l=Zg(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const y=n[g];D(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=Ze(e,y.path);u=u.updateChild(E,y.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,g=>{Yc(i,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const E=[];for(let T=0;T<n.length;T++)n[T].status=2,y=y.concat(Yr(i.serverSyncTree_,n[T].currentWriteId)),n[T].onComplete&&E.push(()=>n[T].onComplete(null,!0,n[T].currentOutputSnapshotResolved)),n[T].unwatcher();Dl(i,Kc(i.transactionQueueTree_,e)),Qc(i,i.transactionQueueTree_),Xn(i.eventQueue_,e,y);for(let T=0;T<E.length;T++)Ps(E[T])}else{if(g==="datastale")for(let E=0;E<n.length;E++)n[E].status===3?n[E].status=4:n[E].status=0;else{yt("transaction at "+p.toString()+" failed: "+g);for(let E=0;E<n.length;E++)n[E].status=4,n[E].abortReason=g}Xc(i,e)}},d)}function Xc(i,e){const n=e_(i,e),s=Ds(n),l=t_(i,n);return gC(i,l,s),s}function gC(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=Ze(n,p.path);let y=!1,E;if(D(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,E=p.abortReason,l=l.concat(Yr(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=oC)y=!0,E="maxretry",l=l.concat(Yr(i.serverSyncTree_,p.currentWriteId,!0));else{const T=Zg(i,p.path,d);p.currentInputSnapshot=T;const L=e[f].update(T.val());if(L!==void 0){Qg("transaction failed: Data returned ",L,p.path);let F=$e(L);typeof L=="object"&&L!=null&&mn(L,".priority")||(F=F.updatePriority(T.getPriority()));const q=p.currentWriteId,Pe=Jg(i),be=GS(F,T,Pe);p.currentOutputSnapshotRaw=F,p.currentOutputSnapshotResolved=be,p.currentWriteId=dC(i),d.splice(d.indexOf(q),1),l=l.concat(AS(i.serverSyncTree_,p.path,be,p.currentWriteId,p.applyLocally)),l=l.concat(Yr(i.serverSyncTree_,q,!0))}else y=!0,E="nodata",l=l.concat(Yr(i.serverSyncTree_,p.currentWriteId,!0))}Xn(i.eventQueue_,n,l),l=[],y&&(e[f].status=2,function(T){setTimeout(T,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(E==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(E),!1,null))))}Dl(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Ps(s[f]);Qc(i,i.transactionQueueTree_)}function e_(i,e){let n,s=i.transactionQueueTree_;for(n=ne(e);n!==null&&hi(s)===void 0;)s=Kc(s,n),e=pe(e),n=ne(e);return s}function t_(i,e){const n=[];return n_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function n_(i,e,n){const s=hi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Ol(e,l=>{n_(i,l,n)})}function Dl(i,e){const n=hi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,$g(e,n.length>0?n:void 0)}Ol(e,s=>{Dl(i,s)})}function _C(i,e){const n=Ds(e_(i,e)),s=Kc(i.transactionQueueTree_,e);return qS(s,l=>{Ku(i,l)}),Ku(i,s),Kg(s,l=>{Ku(i,l)}),n}function Ku(i,e){const n=hi(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(D(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(D(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Yr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?$g(e,void 0):n.length=u+1,Xn(i.eventQueue_,Ds(e),l);for(let d=0;d<s.length;d++)Ps(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function yC(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):yt(`Invalid query segment '${n}' in query '${i}'`)}return e}const rm=function(i,e){const n=wC(i),s=n.namespace;n.domain==="firebase.com"&&fn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&fn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xw();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new de(n.pathString)}},wC=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let y=i.indexOf("/");y===-1&&(y=i.length);let E=i.indexOf("?");E===-1&&(E=i.length),e=i.substring(0,Math.min(y,E)),y<E&&(l=vC(i.substring(y,E)));const T=yC(i.substring(Math.min(i.length,E)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const L=e.slice(0,g);if(L.toLowerCase()==="localhost")n="localhost";else if(L.split(".").length<=2)n=L;else{const F=e.indexOf(".");s=e.substring(0,F).toLowerCase(),n=e.substring(F+1),u=s}"ns"in T&&(u=T.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Le(this.snapshot.exportVal())}}class SC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return te(this._path)?null:hg(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=Vp(this._queryParams),n=kc(e);return n==="{}"?"default":n}get _queryObject(){return Vp(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof Jc))return!1;const n=this._repo===e._repo,s=mg(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+fE(this._path)}}class gn extends Jc{constructor(e,n){super(e,n,new Dc,!1)}get parent(){const e=pg(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),s=dc(this.ref,e);return new Cs(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Cs(l,dc(this.ref,s),Ie)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function IC(i,e){return i=wt(i),i._checkNotDeleted("ref"),e!==void 0?dc(i._root,e):i._root}function dc(i,e){return i=wt(i),ne(i._path)===null?ZS("child","path",e):Xg("child","path",e),new gn(i._repo,Me(i._path,e))}function TC(i){i=wt(i);const e=new CC(()=>{}),n=new Zc(e);return hC(i._repo,i,n).then(s=>new Cs(s,new gn(i._repo,i._path),i._queryParams.getIndex()))}class Zc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new EC("value",this,new Cs(e.snapshotNode,new gn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SC(this,e,n):null}matches(e){return e instanceof Zc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}CS(gn);RS(gn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC="FIREBASE_DATABASE_EMULATOR_HOST",hc={};let NC=!1;function RC(i,e,n,s){i.repoInfo_=new rg(`${e}:${n}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0),s&&(i.authTokenProvider_=s)}function PC(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||fn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=rm(u,l),f=d.repoInfo,p;typeof process<"u"&&Ip&&(p=Ip[kC]),p?(u=`http://${p}?ns=${f.namespace}`,d=rm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new Ww(i.name,i.options,e);eC("Invalid Firebase Database URL",d),te(d.path)||fn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=AC(f,i,g,new zw(i.name,n));return new OC(y,i)}function xC(i,e){const n=hc[e];(!n||n[i.key]!==i)&&fn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),pC(i),delete n[i.key]}function AC(i,e,n,s){let l=hc[e.name];l||(l={},hc[e.name]=l);let u=l[i.toURLString()];return u&&fn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new lC(i,NC,n,s),l[i.toURLString()]=u,u}class OC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fn("Cannot call "+e+" on a deleted database.")}}function DC(i=jm(),e){const n=Ic(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Jy("database");s&&LC(n,...s)}return n}function LC(i,e,n,s={}){i=wt(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&fn("Cannot call useEmulator() after instance has already been initialized.");const l=i._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&fn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Zo(Zo.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:Zy(s.mockUserToken,i.app.options.projectId);u=new Zo(d)}RC(l,e,n,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(i){Iw(ci),ri(new gr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return PC(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Bn(Tp,kp,i),Bn(Tp,kp,"esm2017")}dn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};dn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};MC();const bC={apiKey:"AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",authDomain:"node-project-a176d.firebaseapp.com",projectId:"node-project-a176d",storageBucket:"node-project-a176d.firebasestorage.app",messagingSenderId:"705351216802",appId:"1:705351216802:web:d16ccfa16d0f9d1da9b1fb",measurementId:"G-0L9BLHYXST"},FC=Tc(bC),UC=DC(FC);var ed=i=>{const[e,n]=ct.useState([]),[s,l]=ct.useState(!0),[u,d]=ct.useState(null),f=async()=>{try{console.log(i.eventPath);const p=IC(UC,i.eventPath),g=await TC(p);if(g.exists()){const y=g.val(),E=Object.keys(y).map(T=>({id:T,...y[T]}));n(E.slice(0,3))}else n([])}catch(p){d("Failed to fetch events. Please try again later."),console.error(p)}finally{l(!1)}};return ct.useEffect(()=>{f()},[]),A.jsx("div",{className:"h-auto bg-gray-100 p-6",children:s?A.jsx("p",{className:"text-center text-gray-600",children:"Loading events..."}):u?A.jsx("p",{className:"text-center text-red-500",children:u}):e.length>0?A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(p=>A.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow",children:[A.jsx("h2",{className:"text-xl font-semibold mb-2",children:p.title}),A.jsx("p",{className:"text-gray-700 mb-4",children:p.description}),A.jsxs("p",{className:"text-gray-600",children:[A.jsx("strong",{children:"Date:"})," ",p.date]}),A.jsxs("p",{className:"text-gray-600",children:[A.jsx("strong",{children:"Location:"})," ",p.location]})]},p.id))}):A.jsx("p",{className:"text-center text-gray-600",children:"No events found."})})};function im({setCurrentPage:i}){return A.jsxs("div",{className:"min-h-screen bg-gray-100 p-10",children:[A.jsxs("div",{className:"text-center py-16",children:[A.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-4",children:"Welcome to Eventify"}),A.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Discover, create, and share events with your community."}),A.jsxs("div",{className:"space-x-4",children:[A.jsx("button",{onClick:()=>{i("dashboard")},className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"Create Event"}),A.jsx("button",{onClick:()=>{i("events")},className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors",children:"Explore Events"})]})]}),A.jsxs("div",{className:"max-w-4xl mx-auto text-center my-5",children:[A.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-6",children:"What is Eventify?"}),A.jsx("p",{className:"text-gray-600 mb-6",children:"Eventify is your go-to platform for discovering and organizing events. Whether you are looking to attend a local meetup, host a workshop, or share a community gathering, Eventify makes it easy to connect with others and make your event a success."}),A.jsx("p",{className:"text-gray-600",children:"Join thousands of users who are already using Eventify to bring people together."})]}),A.jsx("div",{className:"border-t border-gray-300"}),A.jsxs("div",{className:"bg-red max-w-6xl mx-auto my-5 shadow-md rounded-lg",children:[A.jsx("h2",{className:"text-3xl font-bold text-gray-800 text-center mb-8",children:"Upcoming Events"}),A.jsx(ed,{eventPath:"/events/events"})]}),A.jsxs("div",{className:"w-full bg-blue-600 text-white text-center py-12 rounded-lg",children:[A.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ready to Get Started?"}),A.jsx("p",{className:"text-lg mb-8",children:"Join Eventify today and start exploring or creating events in your community."}),A.jsx("button",{onClick:()=>{i("register")},className:"bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors",children:"Sign Up Now"})]})]})}function td(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function r_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jC=r_,i_=new ks("auth","Firebase",r_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Sc("@firebase/auth");function zC(i,...e){El.logLevel<=ce.WARN&&El.warn(`Auth (${ci}): ${i}`,...e)}function el(i,...e){El.logLevel<=ce.ERROR&&El.error(`Auth (${ci}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(i,...e){throw nd(i,...e)}function Yt(i,...e){return nd(i,...e)}function s_(i,e,n){const s=Object.assign(Object.assign({},jC()),{[e]:n});return new ks("auth","Firebase",s).create(e,{appName:i.name})}function Gn(i){return s_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nd(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return i_.create(i,...e)}function Y(i,e,...n){if(!i)throw nd(e,...n)}function an(i){const e="INTERNAL ASSERTION FAILED: "+i;throw el(e),new Error(e)}function pn(i,e){i||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function WC(){return sm()==="http:"||sm()==="https:"}function sm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WC()||t0()||"connection"in navigator)?navigator.onLine:!0}function BC(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ec()||Dm()}get(){return VC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(i,e){pn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=new Ls(3e4,6e4);function Sr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Jn(i,e,n,s,l={}){return l_(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=ui(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return e0()||(g.referrerPolicy="no-referrer"),o_.fetch()(a_(i,i.config.apiHost,n,f),g)})}async function l_(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},HC),e);try{const l=new KC(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Xo(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xo(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw Xo(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw Xo(i,"user-disabled",d);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw s_(i,y,g);zt(i,y)}}catch(l){if(l instanceof Qn)throw l;zt(i,"network-request-failed",{message:String(l)})}}async function Ll(i,e,n,s,l={}){const u=await Jn(i,e,n,s,l);return"mfaPendingCredential"in u&&zt(i,"multi-factor-auth-required",{_serverResponse:u}),u}function a_(i,e,n,s){const l=`${e}${n}?${s}`;return i.config.emulator?rd(i.config,l):`${i.config.apiScheme}://${l}`}function GC(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Yt(this.auth,"network-request-failed")),$C.get())})}}function Xo(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Yt(i,e,s);return l.customData._tokenResponse=n,l}function om(i){return i!==void 0&&i.enterprise!==void 0}class qC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function YC(i,e){return Jn(i,"GET","/v2/recaptchaConfig",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(i,e){return Jn(i,"POST","/v1/accounts:delete",e)}async function u_(i,e){return Jn(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(i,e=!1){return wt(i).getIdToken(e)}async function JC(i,e=!1){const n=wt(i),s=await n.getIdToken(e),l=id(s);Y(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:fs(qu(l.auth_time)),issuedAtTime:fs(qu(l.iat)),expirationTime:fs(qu(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function qu(i){return Number(i)*1e3}function id(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return el("JWT malformed, contained fewer than 3 sections"),null;try{const l=sl(n);return l?JSON.parse(l):(el("Failed to decode base64 JWT payload"),null)}catch(l){return el("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function lm(i){const e=id(i);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Qn&&ZC(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function ZC({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(i){var e;const n=i.auth,s=await i.getIdToken(),l=await Is(i,u_(n,{idToken:s}));Y(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?c_(u.providerUserInfo):[],f=nI(i.providerData,d),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),y=p?g:!1,E={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new pc(u.createdAt,u.lastLoginAt),isAnonymous:y};Object.assign(i,E)}async function tI(i){const e=wt(i);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nI(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function c_(i){return i.map(e=>{var{providerId:n}=e,s=td(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(i,e){const n=await l_(i,{},async()=>{const s=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=a_(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",o_.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iI(i,e){return Jn(i,"POST","/v2/accounts:revokeToken",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=lm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await rI(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new Zr;return s&&(Y(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Y(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Y(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(i,e){Y(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new pc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Is(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JC(this,e)}reload(){return tI(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await Is(this,QC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,y;const E=(s=n.displayName)!==null&&s!==void 0?s:void 0,T=(l=n.email)!==null&&l!==void 0?l:void 0,L=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,F=(d=n.photoURL)!==null&&d!==void 0?d:void 0,B=(f=n.tenantId)!==null&&f!==void 0?f:void 0,q=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Pe=(g=n.createdAt)!==null&&g!==void 0?g:void 0,be=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:xe,emailVerified:Te,isAnonymous:tt,providerData:Ae,stsTokenManager:Ve}=n;Y(xe&&Ve,e,"internal-error");const nt=Zr.fromJSON(this.name,Ve);Y(typeof xe=="string",e,"internal-error"),bn(E,e.name),bn(T,e.name),Y(typeof Te=="boolean",e,"internal-error"),Y(typeof tt=="boolean",e,"internal-error"),bn(L,e.name),bn(F,e.name),bn(B,e.name),bn(q,e.name),bn(Pe,e.name),bn(be,e.name);const Et=new un({uid:xe,auth:e,email:T,emailVerified:Te,displayName:E,isAnonymous:tt,photoURL:F,phoneNumber:L,tenantId:B,stsTokenManager:nt,createdAt:Pe,lastLoginAt:be});return Ae&&Array.isArray(Ae)&&(Et.providerData=Ae.map(Rt=>Object.assign({},Rt))),q&&(Et._redirectEventId=q),Et}static async _fromIdTokenResponse(e,n,s=!1){const l=new Zr;l.updateFromServerResponse(n);const u=new un({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Sl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Y(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?c_(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new Zr;f.updateFromIdToken(s);const p=new un({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new pc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new Map;function cn(i){pn(i instanceof Function,"Expected a class definition");let e=am.get(i);return e?(pn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,am.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d_.type="NONE";const um=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(i,e,n){return`firebase:${i}:${e}:${n}`}class ei{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=tl(this.userKey,l.apiKey,u),this.fullPersistenceKey=tl("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ei(cn(um),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||cn(um);const d=tl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const y=await g._get(d);if(y){const E=un._fromJSON(e,y);g!==u&&(f=E),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ei(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new ei(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(v_(e))return"Webos";if(f_(e))return"Safari";if((e.includes("chrome/")||p_(e))&&!e.includes("edge/"))return"Chrome";if(g_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function h_(i=et()){return/firefox\//i.test(i)}function f_(i=et()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p_(i=et()){return/crios\//i.test(i)}function m_(i=et()){return/iemobile/i.test(i)}function g_(i=et()){return/android/i.test(i)}function __(i=et()){return/blackberry/i.test(i)}function v_(i=et()){return/webos/i.test(i)}function sd(i=et()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function sI(i=et()){var e;return sd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oI(){return n0()&&document.documentMode===10}function y_(i=et()){return sd(i)||g_(i)||v_(i)||__(i)||/windows phone/i.test(i)||m_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(i,e=[]){let n;switch(i){case"Browser":n=cm(et());break;case"Worker":n=`${cm(et())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(i,e={}){return Jn(i,"GET","/v2/passwordPolicy",Sr(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=6;class cI{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:uI,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dm(this),this.idTokenSubscription=new dm(this),this.beforeStateQueue=new lI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await u_(this,{idToken:e}),s=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(Gn(this));const n=e?wt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aI(this),n=new cI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await iI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fi(i){return wt(i)}class dm{constructor(e){this.auth=e,this.observer=null,this.addObserver=d0(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hI(i){Ml=i}function E_(i){return Ml.loadJS(i)}function fI(){return Ml.recaptchaEnterpriseScript}function pI(){return Ml.gapiScript}function mI(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class gI{constructor(){this.enterprise=new _I}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _I{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const vI="recaptcha-enterprise",S_="NO_RECAPTCHA";class yI{constructor(e){this.type=vI,this.auth=fi(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,f)=>{YC(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new qC(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,d(g.siteKey)}}).catch(p=>{f(p)})})}function l(u,d,f){const p=window.grecaptcha;om(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{d(g)}).catch(()=>{d(S_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gI().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{s(this.auth).then(f=>{if(!n&&om(window.grecaptcha))l(f,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=fI();p.length!==0&&(p+=f),E_(p).then(()=>{l(f,u,d)}).catch(g=>{d(g)})}}).catch(f=>{d(f)})})}}async function hm(i,e,n,s=!1,l=!1){const u=new yI(i);let d;if(l)d=S_;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const f=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function fm(i,e,n,s,l){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await hm(i,e,n,n==="getOobCode");return s(i,d)}else return s(i,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await hm(i,e,n,n==="getOobCode");return s(i,f)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(i,e){const n=Ic(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(ll(u,e??{}))return l;zt(l,"already-initialized")}return n.initialize({options:e})}function EI(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function SI(i,e,n){const s=fi(i);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=C_(e),{host:d,port:f}=CI(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),II()}function C_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function CI(i){const e=C_(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:pm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:pm(d)}}}function pm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function II(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function TI(i,e){return Jn(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(i,e){return Ll(i,"POST","/v1/accounts:signInWithPassword",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(i,e){return Ll(i,"POST","/v1/accounts:signInWithEmailLink",Sr(i,e))}async function RI(i,e){return Ll(i,"POST","/v1/accounts:signInWithEmailLink",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends od{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Ts(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ts(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fm(e,n,"signInWithPassword",kI);case"emailLink":return NI(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fm(e,s,"signUpPassword",TI);case"emailLink":return RI(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(i,e){return Ll(i,"POST","/v1/accounts:signInWithIdp",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="http://localhost";class wr extends od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=td(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new wr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ti(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ti(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ti(e,n)}buildRequest(){const e={requestUri:PI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AI(i){const e=os(ls(i)).link,n=e?os(ls(e)).deep_link_id:null,s=os(ls(i)).deep_link_id;return(s?os(ls(s)).link:null)||s||n||e||i}class ld{constructor(e){var n,s,l,u,d,f;const p=os(ls(e)),g=(n=p.apiKey)!==null&&n!==void 0?n:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,E=xI((l=p.mode)!==null&&l!==void 0?l:null);Y(g&&y&&E,"argument-error"),this.apiKey=g,this.operation=E,this.code=y,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(d=p.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=AI(e);try{return new ld(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,n){return Ts._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ld.parseLink(n);return Y(s,"argument-error"),Ts._fromEmailAndCode(e,s.code,s.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends I_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ms{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Un.credential(n,s)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Ms{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ms{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return zn.credential(n,s)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await un._fromIdTokenResponse(e,s,l),d=mm(s);return new li({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=mm(s);return new li({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function mm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Qn{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Cl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Cl(e,n,s,l)}}function T_(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Cl._fromErrorAndOperation(i,u,e,s):u})}async function OI(i,e,n=!1){const s=await Is(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return li._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(i,e,n=!1){const{auth:s}=i;if(on(s.app))return Promise.reject(Gn(s));const l="reauthenticate";try{const u=await Is(i,T_(s,l,e,i),n);Y(u.idToken,s,"internal-error");const d=id(u.idToken);Y(d,s,"internal-error");const{sub:f}=d;return Y(i.uid===f,s,"user-mismatch"),li._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&zt(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(i,e,n=!1){if(on(i.app))return Promise.reject(Gn(i));const s="signIn",l=await T_(i,s,e),u=await li._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}async function LI(i,e){return k_(fi(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(i){const e=fi(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function bI(i,e,n){return on(i.app)?Promise.reject(Gn(i)):LI(wt(i),pi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&MI(i),s})}function FI(i,e,n,s){return wt(i).onIdTokenChanged(e,n,s)}function UI(i,e,n){return wt(i).beforeAuthStateChanged(e,n)}const Il="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1e3,zI=10;class R_ extends N_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=y_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);oI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,zI):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},jI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}R_.type="LOCAL";const WI=R_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends N_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P_.type="SESSION";const x_=P_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new bl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await VI(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=ad("",20);l.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(E){const T=E;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(y),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(T.data.response);break;default:clearTimeout(y),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function HI(i){Qt().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function $I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function KI(){return A_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firebaseLocalStorageDb",qI=1,Tl="firebaseLocalStorage",D_="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(i,e){return i.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function YI(){const i=indexedDB.deleteDatabase(O_);return new bs(i).toPromise()}function mc(){const i=indexedDB.open(O_,qI);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Tl,{keyPath:D_})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Tl)?e(s):(s.close(),await YI(),e(await mc()))})})}async function gm(i,e,n){const s=Fl(i,!0).put({[D_]:e,value:n});return new bs(s).toPromise()}async function QI(i,e){const n=Fl(i,!1).get(e),s=await new bs(n).toPromise();return s===void 0?null:s.value}function _m(i,e){const n=Fl(i,!0).delete(e);return new bs(n).toPromise()}const XI=800,JI=3;class L_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>JI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return A_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(KI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $I(),!this.activeServiceWorker)return;this.sender=new BI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mc();return await gm(e,Il,"1"),await _m(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>QI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Fl(l,!1).getAll();return new bs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}L_.type="LOCAL";const ZI=L_;new Ls(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(i,e){return e?cn(e):(Y(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tT(i){return k_(i.auth,new ud(i),i.bypassAuthState)}function nT(i){const{auth:e,user:n}=i;return Y(n,e,"internal-error"),DI(n,new ud(i),i.bypassAuthState)}async function rT(i){const{auth:e,user:n}=i;return Y(n,e,"internal-error"),OI(n,new ud(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tT;case"linkViaPopup":case"linkViaRedirect":return rT;case"reauthViaPopup":case"reauthViaRedirect":return nT;default:zt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=new Ls(2e3,1e4);class Qr extends M_{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iT.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="pendingRedirect",nl=new Map;class oT extends M_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=nl.get(this.auth._key());if(!e){try{const s=await lT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}nl.set(this.auth._key(),e)}return this.bypassAuthState||nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lT(i,e){const n=cT(e),s=uT(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function aT(i,e){nl.set(i._key(),e)}function uT(i){return cn(i._redirectPersistence)}function cT(i){return tl(sT,i.config.apiKey,i.name)}async function dT(i,e,n=!1){if(on(i.app))return Promise.reject(Gn(i));const s=fi(i),l=eT(s,e),d=await new oT(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=10*60*1e3;class fT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!b_(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hT&&this.cachedEventUids.clear(),this.cachedEventUids.has(vm(e))}saveEventToCache(e){this.cachedEventUids.add(vm(e)),this.lastProcessedEventTime=Date.now()}}function vm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function b_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(i,e={}){return Jn(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_T=/^https?/;async function vT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await mT(i);for(const n of e)try{if(yT(n))return}catch{}zt(i,"unauthorized-domain")}function yT(i){const e=fc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!_T.test(n))return!1;if(gT.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new Ls(3e4,6e4);function ym(){const i=Qt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function ET(i){return new Promise((e,n)=>{var s,l,u;function d(){ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ym(),n(Yt(i,"network-request-failed"))},timeout:wT.get()})}if(!((l=(s=Qt().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=Qt().gapi)===null||u===void 0)&&u.load)d();else{const f=mI("iframefcb");return Qt()[f]=()=>{gapi.load?d():n(Yt(i,"network-request-failed"))},E_(`${pI()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw rl=null,e})}let rl=null;function ST(i){return rl=rl||ET(i),rl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Ls(5e3,15e3),IT="__/auth/iframe",TT="emulator/auth/iframe",kT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RT(i){const e=i.config;Y(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?rd(e,TT):`https://${i.config.authDomain}/${IT}`,s={apiKey:e.apiKey,appName:i.name,v:ci},l=NT.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${ui(s).slice(1)}`}async function PT(i){const e=await ST(i),n=Qt().gapi;return Y(n,i,"internal-error"),e.open({where:document.body,url:RT(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kT,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=Yt(i,"network-request-failed"),f=Qt().setTimeout(()=>{u(d)},CT.get());function p(){Qt().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AT=500,OT=600,DT="_blank",LT="http://localhost";class wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MT(i,e,n,s=AT,l=OT){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},xT),{width:s.toString(),height:l.toString(),top:u,left:d}),g=et().toLowerCase();n&&(f=p_(g)?DT:n),h_(g)&&(e=e||LT,p.scrollbars="yes");const y=Object.entries(p).reduce((T,[L,F])=>`${T}${L}=${F},`,"");if(sI(g)&&f!=="_self")return bT(e||"",f),new wm(null);const E=window.open(e||"",f,y);Y(E,i,"popup-blocked");try{E.focus()}catch{}return new wm(E)}function bT(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="__/auth/handler",UT="emulator/auth/handler",jT=encodeURIComponent("fac");async function Em(i,e,n,s,l,u){Y(i.config.authDomain,i,"auth-domain-config-required"),Y(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:ci,eventId:l};if(e instanceof I_){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",Qu(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))d[y]=E}if(e instanceof Ms){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(d.scopes=y.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await i._getAppCheckToken(),g=p?`#${jT}=${encodeURIComponent(p)}`:"";return`${zT(i)}?${ui(f).slice(1)}${g}`}function zT({config:i}){return i.emulator?rd(i,UT):`https://${i.authDomain}/${FT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="webStorageSupport";class WT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=x_,this._completeRedirectFn=dT,this._overrideRedirectResult=aT}async _openPopup(e,n,s,l){var u;pn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await Em(e,n,s,fc(),l);return MT(e,d,ad())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Em(e,n,s,fc(),l);return HI(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(pn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await PT(e),s=new fT(e);return n.register("authEvent",l=>(Y(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yu,{type:Yu},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Yu];d!==void 0&&n(!!d),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return y_()||f_()||sd()}}const VT=WT;var Sm="@firebase/auth",Cm="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $T(i){ri(new gr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Y(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(i)},g=new dI(s,l,u,p);return EI(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ri(new gr("auth-internal",e=>{const n=fi(e.getProvider("auth").getImmediate());return(s=>new BT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Sm,Cm,HT(i)),Bn(Sm,Cm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=5*60,KT=Om("authIdTokenMaxAge")||GT;let Im=null;const qT=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>KT)return;const l=n==null?void 0:n.token;Im!==l&&(Im=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function YT(i=jm()){const e=Ic(i,"auth");if(e.isInitialized())return e.getImmediate();const n=wI(i,{popupRedirectResolver:VT,persistence:[ZI,WI,x_]}),s=Om("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=qT(u.toString());UI(n,d,()=>d(n.currentUser)),FI(n,f=>d(f))}}const l=xm("auth");return l&&SI(n,`http://${l}`),n}function QT(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}hI({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=Yt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",QT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$T("Browser");/*! js-cookie v3.0.5 | MIT */function Jo(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)i[s]=n[s]}return i}var XT={read:function(i){return i[0]==='"'&&(i=i.slice(1,-1)),i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(i){return encodeURIComponent(i).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function gc(i,e){function n(l,u,d){if(!(typeof document>"u")){d=Jo({},e,d),typeof d.expires=="number"&&(d.expires=new Date(Date.now()+d.expires*864e5)),d.expires&&(d.expires=d.expires.toUTCString()),l=encodeURIComponent(l).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var f="";for(var p in d)d[p]&&(f+="; "+p,d[p]!==!0&&(f+="="+d[p].split(";")[0]));return document.cookie=l+"="+i.write(u,l)+f}}function s(l){if(!(typeof document>"u"||arguments.length&&!l)){for(var u=document.cookie?document.cookie.split("; "):[],d={},f=0;f<u.length;f++){var p=u[f].split("="),g=p.slice(1).join("=");try{var y=decodeURIComponent(p[0]);if(d[y]=i.read(g,y),l===y)break}catch{}}return l?d[l]:d}}return Object.create({set:n,get:s,remove:function(l,u){n(l,"",Jo({},u,{expires:-1}))},withAttributes:function(l){return gc(this.converter,Jo({},this.attributes,l))},withConverter:function(l){return gc(Jo({},this.converter,l),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(i)}})}var JT=gc(XT,{path:"/"});const ZT=(i,e,n)=>{JT.set(i,e,{expires:n}),console.log("Cookie set!")},ek=async(i,e,n)=>{try{return await(await fetch(i,{method:e,body:n,headers:{"Content-type":"application/JSON; charset=UTF-8"}})).json()}catch(s){console.error(`Error: ${s.message}`)}},tk={apiKey:"AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",authDomain:"node-project-a176d.firebaseapp.com",projectId:"node-project-a176d",storageBucket:"node-project-a176d.firebasestorage.app",messagingSenderId:"705351216802",appId:"1:705351216802:web:d16ccfa16d0f9d1da9b1fb",measurementId:"G-0L9BLHYXST"},nk=Tc(tk),rk=YT(nk);async function ik(i){const e=await XC(i);ZT("token",e,30)}const sk=async(i,e)=>{try{const s=(await bI(rk,i,e)).user;console.log("signin complete"),await ik(s)}catch(n){console.error(`Error: ${n.message}`)}},ok=async(i,e,n,s)=>{await ek("/auth/signup","POST",JSON.stringify({name:i,username:e,email:n,password:s}))},lk=({setCurrentPage:i})=>{const[e,n]=ct.useState(""),[s,l]=ct.useState(""),[u,d]=ct.useState(""),[f,p]=ct.useState(""),g=y=>{y.preventDefault(),ok(e,f,s,u),console.log(`Registered user ${f}`)};return A.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:A.jsxs("form",{onSubmit:g,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md",children:[A.jsx("h1",{className:"text-2xl font-bold mb-6 text-center",children:"Register"}),A.jsxs("div",{className:"mb-4",children:[A.jsx("label",{className:"block text-gray-700",children:"Name"}),A.jsx("input",{type:"text",placeholder:"Name",value:e,onChange:y=>n(y.target.value),className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),A.jsxs("div",{className:"mb-4",children:[A.jsx("label",{className:"block text-gray-700",children:"Username"}),A.jsx("input",{type:"text",placeholder:"Username",value:f,onChange:y=>p(y.target.value),className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),A.jsxs("div",{className:"mb-4",children:[A.jsx("label",{className:"block text-gray-700",children:"Email"}),A.jsx("input",{type:"email",placeholder:"Email",value:s,onChange:y=>l(y.target.value),className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),A.jsxs("div",{className:"mb-6",children:[A.jsx("label",{className:"block text-gray-700",children:"Password"}),A.jsx("input",{type:"password",placeholder:"Password",value:u,onChange:y=>d(y.target.value),className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),A.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300",children:"Register"}),A.jsxs("p",{children:["Have an account?"," ",A.jsx("a",{onClick:()=>{i("login")},className:"text-blue-200 font-bold cursor-pointer",children:"Log In"})]})]})})},ak=({setCurrentPage:i})=>{const[e,n]=ct.useState(""),[s,l]=ct.useState(""),u=d=>{d.preventDefault(),console.log(`User: ${e}, Pw: ${s}`),sk(e,s)};return A.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:A.jsxs("form",{onSubmit:u,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md",children:[A.jsx("h1",{className:"text-2xl font-bold mb-6 text-center",children:"Login"}),A.jsxs("div",{className:"mb-4",children:[A.jsx("label",{className:"block text-gray-700",children:"Email"}),A.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:d=>n(d.target.value),className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),A.jsxs("div",{className:"mb-6",children:[A.jsx("label",{className:"block text-gray-700",children:"Password"}),A.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:d=>l(d.target.value),className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),A.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300",children:"Login"}),A.jsxs("p",{children:["No account?",A.jsx("a",{onClick:()=>{i("login")},className:"text-blue-200 font-bold cursor-pointer",children:"Log In"})]})]})})};var uk=({setCurrentPage:i})=>(ct.useState(!1),A.jsxs("div",{className:"min-h-screen bg-gray-100 p-6",children:[A.jsxs("div",{className:"text-center mb-8",children:[A.jsx("h1",{className:"text-4xl font-bold text-gray-800",children:"Dashboard"}),A.jsx("p",{className:"text-gray-600",children:"View and manage your events"})]}),A.jsxs("div",{className:"max-w-4xl mx-auto",children:[A.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Your Events"}),A.jsx(ed,{})]})]}));function ck(){return A.jsxs("div",{className:"min-h-screen bg-gray-100 p-10",children:[A.jsx("h1",{className:"text-3xl font-bold text-center mb-8 ",children:"Upcoming Events"}),A.jsx(ed,{})]})}const dk=()=>{const[i,e]=ct.useState("home"),n=()=>{switch(i){case"home":return A.jsx(im,{setCurrentPage:e});case"register":return A.jsx(lk,{setCurrentPage:e});case"login":return A.jsx(ak,{setCurrentPage:e});case"dashboard":return A.jsx(uk,{setCurrentPage:e});case"events":return A.jsx(ck,{});default:return A.jsx(im,{setCurrentPage:e})}};return A.jsxs("div",{children:[A.jsx(By,{setCurrentPage:e}),n()]})};Vy.createRoot(document.getElementById("root")).render(A.jsx(My.StrictMode,{children:A.jsx(dk,{})}));
