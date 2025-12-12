(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function ru(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Mt={},js=[],ei=()=>{},sd=()=>!1,Ra=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ou=n=>n.startsWith("onUpdate:"),on=Object.assign,au=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zp=Object.prototype.hasOwnProperty,dt=(n,e)=>Zp.call(n,e),Ye=Array.isArray,Ys=n=>po(n)==="[object Map]",Ca=n=>po(n)==="[object Set]",Ku=n=>po(n)==="[object Date]",Je=n=>typeof n=="function",Ut=n=>typeof n=="string",ii=n=>typeof n=="symbol",Tt=n=>n!==null&&typeof n=="object",rd=n=>(Tt(n)||Je(n))&&Je(n.then)&&Je(n.catch),od=Object.prototype.toString,po=n=>od.call(n),Jp=n=>po(n).slice(8,-1),ad=n=>po(n)==="[object Object]",lu=n=>Ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hr=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Qp=/-\w/g,Zi=Pa(n=>n.replace(Qp,e=>e.slice(1).toUpperCase())),em=/\B([A-Z])/g,Ms=Pa(n=>n.replace(em,"-$1").toLowerCase()),ld=Pa(n=>n.charAt(0).toUpperCase()+n.slice(1)),$a=Pa(n=>n?`on${ld(n)}`:""),$i=(n,e)=>!Object.is(n,e),ia=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},cd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},cu=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let qu;const La=()=>qu||(qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ds(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ut(i)?sm(i):ds(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ut(n)||Tt(n))return n}const tm=/;(?![^(]*\))/g,nm=/:([^]+)/,im=/\/\*[^]*?\*\//g;function sm(n){const e={};return n.replace(im,"").split(tm).forEach(t=>{if(t){const i=t.split(nm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ks(n){let e="";if(Ut(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=Ks(n[t]);i&&(e+=i+" ")}else if(Tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",om=ru(rm);function ud(n){return!!n||n===""}function am(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=tr(n[i],e[i]);return t}function tr(n,e){if(n===e)return!0;let t=Ku(n),i=Ku(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ii(n),i=ii(e),t||i)return n===e;if(t=Ye(n),i=Ye(e),t||i)return t&&i?am(n,e):!1;if(t=Tt(n),i=Tt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!tr(n[o],e[o]))return!1}}return String(n)===String(e)}function hd(n,e){return n.findIndex(t=>tr(t,e))}const fd=n=>!!(n&&n.__v_isRef===!0),He=n=>Ut(n)?n:n==null?"":Ye(n)||Tt(n)&&(n.toString===od||!Je(n.toString))?fd(n)?He(n.value):JSON.stringify(n,dd,2):String(n),dd=(n,e)=>fd(e)?dd(n,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Za(i,r)+" =>"]=s,t),{})}:Ca(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Za(t))}:ii(e)?Za(e):Tt(e)&&!Ye(e)&&!ad(e)?String(e):e,Za=(n,e="")=>{var t;return ii(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let un;class lm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=un;try{return un=this,e()}finally{un=t}}}on(){++this._on===1&&(this.prevScope=un,un=this)}off(){this._on>0&&--this._on===0&&(un=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cm(){return un}let Et;const Ja=new WeakSet;class pd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,un&&un.active&&un.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$u(this),_d(this);const e=Et,t=On;Et=this,On=!0;try{return this.fn()}finally{xd(this),Et=e,On=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fu(e);this.deps=this.depsTail=void 0,$u(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ql(this)&&this.run()}get dirty(){return ql(this)}}let md=0,Gr,Wr;function gd(n,e=!1){if(n.flags|=8,e){n.next=Wr,Wr=n;return}n.next=Gr,Gr=n}function uu(){md++}function hu(){if(--md>0)return;if(Wr){let e=Wr;for(Wr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Gr;){let e=Gr;for(Gr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function _d(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),fu(i),um(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ql(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function vd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Qr)||(n.globalVersion=Qr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ql(n))))return;n.flags|=2;const e=n.dep,t=Et,i=On;Et=n,On=!0;try{_d(n);const s=n.fn(n._value);(e.version===0||$i(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,On=i,xd(n),n.flags&=-3}}function fu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)fu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function um(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let On=!0;const yd=[];function Ci(){yd.push(On),On=!1}function Pi(){const n=yd.pop();On=n===void 0?!0:n}function $u(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Qr=0;class hm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class du{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!On||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new hm(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,Md(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,Qr++,this.notify(e)}notify(e){uu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hu()}}}function Md(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Md(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const $l=new WeakMap,_s=Symbol(""),Zl=Symbol(""),eo=Symbol("");function $t(n,e,t){if(On&&Et){let i=$l.get(n);i||$l.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new du),s.map=i,s.key=t),s.track()}}function yi(n,e,t,i,s,r){const o=$l.get(n);if(!o){Qr++;return}const a=l=>{l&&l.trigger()};if(uu(),e==="clear")o.forEach(a);else{const l=Ye(n),c=l&&lu(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===eo||!ii(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(eo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(_s)),Ys(n)&&a(o.get(Zl)));break;case"delete":l||(a(o.get(_s)),Ys(n)&&a(o.get(Zl)));break;case"set":Ys(n)&&a(o.get(_s));break}}hu()}function ws(n){const e=ft(n);return e===n?e:($t(e,"iterate",eo),Cn(n)?e:e.map(Vn))}function Ia(n){return $t(n=ft(n),"iterate",eo),n}function Gi(n,e){return Li(n)?xs(n)?nr(Vn(e)):nr(e):Vn(e)}const fm={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,n=>Gi(this,n))},concat(...n){return ws(this).concat(...n.map(e=>Ye(e)?ws(e):e))},entries(){return Qa(this,"entries",n=>(n[1]=Gi(this,n[1]),n))},every(n,e){return hi(this,"every",n,e,void 0,arguments)},filter(n,e){return hi(this,"filter",n,e,t=>t.map(i=>Gi(this,i)),arguments)},find(n,e){return hi(this,"find",n,e,t=>Gi(this,t),arguments)},findIndex(n,e){return hi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hi(this,"findLast",n,e,t=>Gi(this,t),arguments)},findLastIndex(n,e){return hi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hi(this,"forEach",n,e,void 0,arguments)},includes(...n){return el(this,"includes",n)},indexOf(...n){return el(this,"indexOf",n)},join(n){return ws(this).join(n)},lastIndexOf(...n){return el(this,"lastIndexOf",n)},map(n,e){return hi(this,"map",n,e,void 0,arguments)},pop(){return Er(this,"pop")},push(...n){return Er(this,"push",n)},reduce(n,...e){return Zu(this,"reduce",n,e)},reduceRight(n,...e){return Zu(this,"reduceRight",n,e)},shift(){return Er(this,"shift")},some(n,e){return hi(this,"some",n,e,void 0,arguments)},splice(...n){return Er(this,"splice",n)},toReversed(){return ws(this).toReversed()},toSorted(n){return ws(this).toSorted(n)},toSpliced(...n){return ws(this).toSpliced(...n)},unshift(...n){return Er(this,"unshift",n)},values(){return Qa(this,"values",n=>Gi(this,n))}};function Qa(n,e,t){const i=Ia(n),s=i[e]();return i!==n&&!Cn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const dm=Array.prototype;function hi(n,e,t,i,s,r){const o=Ia(n),a=o!==n&&!Cn(n),l=o[e];if(l!==dm[e]){const h=l.apply(n,r);return a?Vn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Gi(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Zu(n,e,t,i){const s=Ia(n);let r=t;return s!==n&&(Cn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Gi(n,a),l,n)}),s[e](r,...i)}function el(n,e,t){const i=ft(n);$t(i,"iterate",eo);const s=i[e](...t);return(s===-1||s===!1)&&_u(t[0])?(t[0]=ft(t[0]),i[e](...t)):s}function Er(n,e,t=[]){Ci(),uu();const i=ft(n)[e].apply(n,t);return hu(),Pi(),i}const pm=ru("__proto__,__v_isRef,__isVue"),Sd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ii));function mm(n){ii(n)||(n=String(n));const e=ft(this);return $t(e,"has",n),e.hasOwnProperty(n)}class bd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Tm:wd:r?Ad:Td).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!s){let l;if(o&&(l=fm[t]))return l;if(t==="hasOwnProperty")return mm}const a=Reflect.get(e,t,Zt(e)?e:i);if((ii(t)?Sd.has(t):pm(t))||(s||$t(e,"get",t),r))return a;if(Zt(a)){const l=o&&lu(t)?a:a.value;return s&&Tt(l)?Ql(l):l}return Tt(a)?s?Ql(a):mu(a):a}}class Ed extends bd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ye(e)&&lu(t);if(!this._isShallow){const c=Li(r);if(!Cn(i)&&!Li(i)&&(r=ft(r),i=ft(i)),!o&&Zt(r)&&!Zt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:dt(e,t),l=Reflect.set(e,t,i,Zt(e)?e:s);return e===ft(s)&&(a?$i(i,r)&&yi(e,"set",t,i):yi(e,"add",t,i)),l}deleteProperty(e,t){const i=dt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&yi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ii(t)||!Sd.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",Ye(e)?"length":_s),Reflect.ownKeys(e)}}class gm extends bd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _m=new Ed,xm=new gm,vm=new Ed(!0);const Jl=n=>n,Ao=n=>Reflect.getPrototypeOf(n);function ym(n,e,t){return function(...i){const s=this.__v_raw,r=ft(s),o=Ys(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Jl:e?nr:Vn;return!e&&$t(r,"iterate",l?Zl:_s),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Mm(n,e){const t={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);n||($i(s,a)&&$t(o,"get",s),$t(o,"get",a));const{has:l}=Ao(o),c=e?Jl:n?nr:Vn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&$t(ft(s),"iterate",_s),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return n||($i(s,a)&&$t(o,"has",s),$t(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?Jl:n?nr:Vn;return!n&&$t(l,"iterate",_s),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return on(t,n?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(s){!e&&!Cn(s)&&!Li(s)&&(s=ft(s));const r=ft(this);return Ao(r).has.call(r,s)||(r.add(s),yi(r,"add",s,s)),this},set(s,r){!e&&!Cn(r)&&!Li(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=Ao(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?$i(r,u)&&yi(o,"set",s,r):yi(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=Ao(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&yi(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&yi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ym(s,n,e)}),t}function pu(n,e){const t=Mm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(dt(t,s)&&s in i?t:i,s,r)}const Sm={get:pu(!1,!1)},bm={get:pu(!1,!0)},Em={get:pu(!0,!1)};const Td=new WeakMap,Ad=new WeakMap,wd=new WeakMap,Tm=new WeakMap;function Am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wm(n){return n.__v_skip||!Object.isExtensible(n)?0:Am(Jp(n))}function mu(n){return Li(n)?n:gu(n,!1,_m,Sm,Td)}function Rm(n){return gu(n,!1,vm,bm,Ad)}function Ql(n){return gu(n,!0,xm,Em,wd)}function gu(n,e,t,i,s){if(!Tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=wm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function xs(n){return Li(n)?xs(n.__v_raw):!!(n&&n.__v_isReactive)}function Li(n){return!!(n&&n.__v_isReadonly)}function Cn(n){return!!(n&&n.__v_isShallow)}function _u(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function Cm(n){return!dt(n,"__v_skip")&&Object.isExtensible(n)&&cd(n,"__v_skip",!0),n}const Vn=n=>Tt(n)?mu(n):n,nr=n=>Tt(n)?Ql(n):n;function Zt(n){return n?n.__v_isRef===!0:!1}function Nt(n){return Pm(n,!1)}function Pm(n,e){return Zt(n)?n:new Lm(n,e)}class Lm{constructor(e,t){this.dep=new du,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:Vn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Cn(e)||Li(e);e=i?e:ft(e),$i(e,t)&&(this._rawValue=e,this._value=i?e:Vn(e),this.dep.trigger())}}function Xe(n){return Zt(n)?n.value:n}const Im={get:(n,e,t)=>e==="__v_raw"?n:Xe(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Zt(s)&&!Zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Rd(n){return xs(n)?n:new Proxy(n,Im)}class Dm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new du(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return gd(this,!0),!0}get value(){const e=this.dep.track();return vd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nm(n,e,t=!1){let i,s;return Je(n)?i=n:(i=n.get,s=n.set),new Dm(i,s,t)}const Ro={},pa=new WeakMap;let us;function Um(n,e=!1,t=us){if(t){let i=pa.get(t);i||pa.set(t,i=[]),i.push(n)}}function Fm(n,e,t=Mt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:Cn(y)||s===!1||s===0?Mi(y,1):Mi(y);let u,h,f,m,_=!1,v=!1;if(Zt(n)?(h=()=>n.value,_=Cn(n)):xs(n)?(h=()=>c(n),_=!0):Ye(n)?(v=!0,_=n.some(y=>xs(y)||Cn(y)),h=()=>n.map(y=>{if(Zt(y))return y.value;if(xs(y))return c(y);if(Je(y))return l?l(y,2):y()})):Je(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Ci();try{f()}finally{Pi()}}const y=us;us=u;try{return l?l(n,3,[m]):n(m)}finally{us=y}}:h=ei,e&&s){const y=h,A=s===!0?1/0:s;h=()=>Mi(y(),A)}const p=cm(),d=()=>{u.stop(),p&&p.active&&au(p.effects,u)};if(r&&e){const y=e;e=(...A)=>{y(...A),d()}}let M=v?new Array(n.length).fill(Ro):Ro;const S=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(s||_||(v?A.some((R,P)=>$i(R,M[P])):$i(A,M))){f&&f();const R=us;us=u;try{const P=[A,M===Ro?void 0:v&&M[0]===Ro?[]:M,m];M=A,l?l(e,3,P):e(...P)}finally{us=R}}}else u.run()};return a&&a(S),u=new pd(h),u.scheduler=o?()=>o(S,!1):S,m=y=>Um(y,!1,u),f=u.onStop=()=>{const y=pa.get(u);if(y){if(l)l(y,4);else for(const A of y)A();pa.delete(u)}},e?i?S(!0):M=u.run():o?o(S.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Mi(n,e=1/0,t){if(e<=0||!Tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Zt(n))Mi(n.value,e,t);else if(Ye(n))for(let i=0;i<n.length;i++)Mi(n[i],e,t);else if(Ca(n)||Ys(n))n.forEach(i=>{Mi(i,e,t)});else if(ad(n)){for(const i in n)Mi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Mi(n[i],e,t)}return n}function mo(n,e,t,i){try{return i?n(...i):n()}catch(s){Da(s,e,t)}}function si(n,e,t,i){if(Je(n)){const s=mo(n,e,t,i);return s&&rd(s)&&s.catch(r=>{Da(r,e,t)}),s}if(Ye(n)){const s=[];for(let r=0;r<n.length;r++)s.push(si(n[r],e,t,i));return s}}function Da(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Ci(),mo(r,null,10,[n,l,c]),Pi();return}}Om(n,t,s,i,o)}function Om(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const tn=[];let Kn=-1;const qs=[];let Wi=null,Ws=0;const Cd=Promise.resolve();let ma=null;function Bm(n){const e=ma||Cd;return n?e.then(this?n.bind(this):n):e}function Vm(n){let e=Kn+1,t=tn.length;for(;e<t;){const i=e+t>>>1,s=tn[i],r=to(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function xu(n){if(!(n.flags&1)){const e=to(n),t=tn[tn.length-1];!t||!(n.flags&2)&&e>=to(t)?tn.push(n):tn.splice(Vm(e),0,n),n.flags|=1,Pd()}}function Pd(){ma||(ma=Cd.then(Id))}function km(n){Ye(n)?qs.push(...n):Wi&&n.id===-1?Wi.splice(Ws+1,0,n):n.flags&1||(qs.push(n),n.flags|=1),Pd()}function Ju(n,e,t=Kn+1){for(;t<tn.length;t++){const i=tn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;tn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ld(n){if(qs.length){const e=[...new Set(qs)].sort((t,i)=>to(t)-to(i));if(qs.length=0,Wi){Wi.push(...e);return}for(Wi=e,Ws=0;Ws<Wi.length;Ws++){const t=Wi[Ws];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Wi=null,Ws=0}}const to=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Id(n){try{for(Kn=0;Kn<tn.length;Kn++){const e=tn[Kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Kn<tn.length;Kn++){const e=tn[Kn];e&&(e.flags&=-2)}Kn=-1,tn.length=0,Ld(),ma=null,(tn.length||qs.length)&&Id()}}let An=null,Dd=null;function ga(n){const e=An;return An=n,Dd=n&&n.type.__scopeId||null,e}function zm(n,e=An,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ch(-1);const r=ga(e);let o;try{o=n(...s)}finally{ga(r),i._d&&ch(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Wn(n,e){if(An===null)return n;const t=Oa(An),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Mt]=e[s];r&&(Je(r)&&(r={mounted:r,updated:r}),r.deep&&Mi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ts(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ci(),si(l,t,8,[n.el,a,n,e]),Pi())}}const Hm=Symbol("_vte"),Gm=n=>n.__isTeleport,Wm=Symbol("_leaveCb");function vu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,vu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Nd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const _a=new WeakMap;function Xr(n,e,t,i,s=!1){if(Ye(n)){n.forEach((_,v)=>Xr(_,e&&(Ye(e)?e[v]:e),t,i,s));return}if(jr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Xr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Oa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Mt?a.refs={}:a.refs,h=a.setupState,f=ft(h),m=h===Mt?sd:_=>dt(f,_);if(c!=null&&c!==l){if(Qu(e),Ut(c))u[c]=null,m(c)&&(h[c]=null);else if(Zt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Je(l))mo(l,a,12,[o,u]);else{const _=Ut(l),v=Zt(l);if(_||v){const p=()=>{if(n.f){const d=_?m(l)?h[l]:u[l]:l.value;if(s)Ye(d)&&au(d,r);else if(Ye(d))d.includes(r)||d.push(r);else if(_)u[l]=[r],m(l)&&(h[l]=u[l]);else{const M=[r];l.value=M,n.k&&(u[n.k]=M)}}else _?(u[l]=o,m(l)&&(h[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{p(),_a.delete(n)};d.id=-1,_a.set(n,d),pn(d,t)}else Qu(n),p()}}}function Qu(n){const e=_a.get(n);e&&(e.flags|=8,_a.delete(n))}La().requestIdleCallback;La().cancelIdleCallback;const jr=n=>!!n.type.__asyncLoader,Ud=n=>n.type.__isKeepAlive;function Xm(n,e){Fd(n,"a",e)}function jm(n,e){Fd(n,"da",e)}function Fd(n,e,t=sn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Na(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ud(s.parent.vnode)&&Ym(i,e,t,s),s=s.parent}}function Ym(n,e,t,i){const s=Na(e,n,i,!0);Vd(()=>{au(i[e],s)},t)}function Na(n,e,t=sn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ci();const a=go(t),l=si(e,t,n,o);return a(),Pi(),l});return i?s.unshift(r):s.push(r),r}}const Ui=n=>(e,t=sn)=>{(!io||n==="sp")&&Na(n,(...i)=>e(...i),t)},Km=Ui("bm"),Od=Ui("m"),qm=Ui("bu"),$m=Ui("u"),Bd=Ui("bum"),Vd=Ui("um"),Zm=Ui("sp"),Jm=Ui("rtg"),Qm=Ui("rtc");function eg(n,e=sn){Na("ec",n,e)}const tg=Symbol.for("v-ndc");function eh(n,e,t,i){let s;const r=t,o=Ye(n);if(o||Ut(n)){const a=o&&xs(n);let l=!1,c=!1;a&&(l=!Cn(n),c=Li(n),n=Ia(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?nr(Vn(n[u])):Vn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Tt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const ec=n=>n?op(n)?Oa(n):ec(n.parent):null,Yr=on(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ec(n.parent),$root:n=>ec(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>zd(n),$forceUpdate:n=>n.f||(n.f=()=>{xu(n.update)}),$nextTick:n=>n.n||(n.n=Bm.bind(n.proxy)),$watch:n=>dg.bind(n)}),tl=(n,e)=>n!==Mt&&!n.__isScriptSetup&&dt(n,e),ng={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(tl(i,e))return o[e]=1,i[e];if(s!==Mt&&dt(s,e))return o[e]=2,s[e];if(dt(r,e))return o[e]=3,r[e];if(t!==Mt&&dt(t,e))return o[e]=4,t[e];tc&&(o[e]=0)}}const c=Yr[e];let u,h;if(c)return e==="$attrs"&&$t(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Mt&&dt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,dt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return tl(s,e)?(s[e]=t,!0):i!==Mt&&dt(i,e)?(i[e]=t,!0):dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Mt&&a[0]!=="$"&&dt(n,a)||tl(e,a)||dt(r,a)||dt(i,a)||dt(Yr,a)||dt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function th(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let tc=!0;function ig(n){const e=zd(n),t=n.proxy,i=n.ctx;tc=!1,e.beforeCreate&&nh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:_,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:M,destroyed:S,unmounted:y,render:A,renderTracked:R,renderTriggered:P,errorCaptured:z,serverPrefetch:b,expose:w,inheritAttrs:N,components:Y,directives:G,filters:$}=e;if(c&&sg(c,i,null),o)for(const k in o){const ee=o[k];Je(ee)&&(i[k]=ee.bind(t))}if(s){const k=s.call(t,t);Tt(k)&&(n.data=mu(k))}if(tc=!0,r)for(const k in r){const ee=r[k],ye=Je(ee)?ee.bind(t,t):Je(ee.get)?ee.get.bind(t,t):ei,me=!Je(ee)&&Je(ee.set)?ee.set.bind(t):ei,Me=rc({get:ye,set:me});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>Me.value,set:ke=>Me.value=ke})}if(a)for(const k in a)kd(a[k],i,t,k);if(l){const k=Je(l)?l.call(t):l;Reflect.ownKeys(k).forEach(ee=>{ug(ee,k[ee])})}u&&nh(u,n,"c");function q(k,ee){Ye(ee)?ee.forEach(ye=>k(ye.bind(t))):ee&&k(ee.bind(t))}if(q(Km,h),q(Od,f),q(qm,m),q($m,_),q(Xm,v),q(jm,p),q(eg,z),q(Qm,R),q(Jm,P),q(Bd,M),q(Vd,y),q(Zm,b),Ye(w))if(w.length){const k=n.exposed||(n.exposed={});w.forEach(ee=>{Object.defineProperty(k,ee,{get:()=>t[ee],set:ye=>t[ee]=ye,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===ei&&(n.render=A),N!=null&&(n.inheritAttrs=N),Y&&(n.components=Y),G&&(n.directives=G),b&&Nd(n)}function sg(n,e,t=ei){Ye(n)&&(n=nc(n));for(const i in n){const s=n[i];let r;Tt(s)?"default"in s?r=sa(s.from||i,s.default,!0):r=sa(s.from||i):r=sa(s),Zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function nh(n,e,t){si(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function kd(n,e,t,i){let s=i.includes(".")?Wd(t,i):()=>t[i];if(Ut(n)){const r=e[n];Je(r)&&Zs(s,r)}else if(Je(n))Zs(s,n.bind(t));else if(Tt(n))if(Ye(n))n.forEach(r=>kd(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&Zs(s,r,n)}}function zd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>xa(l,c,o,!0)),xa(l,e,o)),Tt(e)&&r.set(e,l),l}function xa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&xa(n,r,t,!0),s&&s.forEach(o=>xa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=rg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const rg={data:ih,props:sh,emits:sh,methods:Br,computed:Br,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Br,directives:Br,watch:ag,provide:ih,inject:og};function ih(n,e){return e?n?function(){return on(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function og(n,e){return Br(nc(n),nc(e))}function nc(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Qt(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?on(Object.create(null),n,e):e}function sh(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:on(Object.create(null),th(n),th(e??{})):e}function ag(n,e){if(!n)return e;if(!e)return n;const t=on(Object.create(null),n);for(const i in e)t[i]=Qt(n[i],e[i]);return t}function Hd(){return{app:null,config:{isNativeTag:sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lg=0;function cg(n,e){return function(i,s=null){Je(i)||(i=on({},i)),s!=null&&!Tt(s)&&(s=null);const r=Hd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:lg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Yg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...h)):Je(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const m=c._ceVNode||Ti(i,s);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(m,u,f),l=!0,c._container=u,u.__vue_app__=c,Oa(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(si(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=$s;$s=c;try{return u()}finally{$s=h}}};return c}}let $s=null;function ug(n,e){if(sn){let t=sn.provides;const i=sn.parent&&sn.parent.provides;i===t&&(t=sn.provides=Object.create(i)),t[n]=e}}function sa(n,e,t=!1){const i=zg();if(i||$s){let s=$s?$s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const hg=Symbol.for("v-scx"),fg=()=>sa(hg);function Zs(n,e,t){return Gd(n,e,t)}function Gd(n,e,t=Mt){const{immediate:i,deep:s,flush:r,once:o}=t,a=on({},t),l=e&&i||!e&&r!=="post";let c;if(io){if(r==="sync"){const m=fg();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=ei,m.resume=ei,m.pause=ei,m}}const u=sn;a.call=(m,_,v)=>si(m,u,_,v);let h=!1;r==="post"?a.scheduler=m=>{pn(m,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,_)=>{_?m():xu(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=Fm(n,e,a);return io&&(c?c.push(f):l&&f()),f}function dg(n,e,t){const i=this.proxy,s=Ut(n)?n.includes(".")?Wd(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const o=go(this),a=Gd(s,r.bind(i),t);return o(),a}function Wd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const pg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Zi(e)}Modifiers`]||n[`${Ms(e)}Modifiers`];function mg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Mt;let s=t;const r=e.startsWith("update:"),o=r&&pg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ut(u)?u.trim():u)),o.number&&(s=t.map(cu)));let a,l=i[a=$a(e)]||i[a=$a(Zi(e))];!l&&r&&(l=i[a=$a(Ms(e))]),l&&si(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,si(c,n,6,s)}}const gg=new WeakMap;function Xd(n,e,t=!1){const i=t?gg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Je(n)){const l=c=>{const u=Xd(c,e,!0);u&&(a=!0,on(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Tt(n)&&i.set(n,null),null):(Ye(r)?r.forEach(l=>o[l]=null):on(o,r),Tt(n)&&i.set(n,o),o)}function Ua(n,e){return!n||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(n,e[0].toLowerCase()+e.slice(1))||dt(n,Ms(e))||dt(n,e))}function rh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:m,ctx:_,inheritAttrs:v}=n,p=ga(n);let d,M;try{if(t.shapeFlag&4){const y=s||i,A=y;d=$n(c.call(A,y,u,h,m,f,_)),M=a}else{const y=e;d=$n(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),M=e.props?a:_g(a)}}catch(y){Kr.length=0,Da(y,n,1),d=Ti(Ji)}let S=d;if(M&&v!==!1){const y=Object.keys(M),{shapeFlag:A}=S;y.length&&A&7&&(r&&y.some(ou)&&(M=xg(M,r)),S=ir(S,M,!1,!0))}return t.dirs&&(S=ir(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&vu(S,t.transition),d=S,ga(p),d}const _g=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ra(t))&&((e||(e={}))[t]=n[t]);return e},xg=(n,e)=>{const t={};for(const i in n)(!ou(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function vg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?oh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Ua(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?oh(i,o,c):!0:!!o;return!1}function oh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Ua(t,r))return!0}return!1}function yg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const jd={},Yd=()=>Object.create(jd),Kd=n=>Object.getPrototypeOf(n)===jd;function Mg(n,e,t,i=!1){const s={},r=Yd();n.propsDefaults=Object.create(null),qd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Rm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Sg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ft(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ua(n.emitsOptions,f))continue;const m=e[f];if(l)if(dt(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const _=Zi(f);s[_]=ic(l,a,_,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{qd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!dt(e,h)&&((u=Ms(h))===h||!dt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=ic(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!dt(e,h))&&(delete r[h],c=!0)}c&&yi(n.attrs,"set","")}function qd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Hr(l))continue;const c=e[l];let u;s&&dt(s,u=Zi(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ua(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(t),c=a||Mt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=ic(s,l,h,c[h],n,!dt(c,h))}}return o}function ic(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=go(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ms(t))&&(i=!0))}return i}const bg=new WeakMap;function $d(n,e,t=!1){const i=t?bg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Je(n)){const u=h=>{l=!0;const[f,m]=$d(h,e,!0);on(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Tt(n)&&i.set(n,js),js;if(Ye(r))for(let u=0;u<r.length;u++){const h=Zi(r[u]);ah(h)&&(o[h]=Mt)}else if(r)for(const u in r){const h=Zi(u);if(ah(h)){const f=r[u],m=o[h]=Ye(f)||Je(f)?{type:f}:on({},f),_=m.type;let v=!1,p=!0;if(Ye(_))for(let d=0;d<_.length;++d){const M=_[d],S=Je(M)&&M.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(p=!1)}else v=Je(_)&&_.name==="Boolean";m[0]=v,m[1]=p,(v||dt(m,"default"))&&a.push(h)}}const c=[o,a];return Tt(n)&&i.set(n,c),c}function ah(n){return n[0]!=="$"&&!Hr(n)}const yu=n=>n==="_"||n==="_ctx"||n==="$stable",Mu=n=>Ye(n)?n.map($n):[$n(n)],Eg=(n,e,t)=>{if(e._n)return e;const i=zm((...s)=>Mu(e(...s)),t);return i._c=!1,i},Zd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(yu(s))continue;const r=n[s];if(Je(r))e[s]=Eg(s,r,i);else if(r!=null){const o=Mu(r);e[s]=()=>o}}},Jd=(n,e)=>{const t=Mu(e);n.slots.default=()=>t},Qd=(n,e,t)=>{for(const i in e)(t||!yu(i))&&(n[i]=e[i])},Tg=(n,e,t)=>{const i=n.slots=Yd();if(n.vnode.shapeFlag&32){const s=e._;s?(Qd(i,e,t),t&&cd(i,"_",s,!0)):Zd(e,i)}else e&&Jd(n,e)},Ag=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Qd(s,e,t):(r=!e.$stable,Zd(e,s)),o=e}else e&&(Jd(n,e),o={default:1});if(r)for(const a in s)!yu(a)&&o[a]==null&&delete s[a]},pn=Lg;function wg(n){return Rg(n)}function Rg(n,e){const t=La();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=ei,insertStaticContent:_}=n,v=(I,F,X,ie=null,Z=null,ne=null,C=void 0,he=null,oe=!!F.dynamicChildren)=>{if(I===F)return;I&&!Tr(I,F)&&(ie=ce(I),ke(I,Z,ne,!0),I=null),F.patchFlag===-2&&(oe=!1,F.dynamicChildren=null);const{type:K,ref:ae,shapeFlag:T}=F;switch(K){case Fa:p(I,F,X,ie);break;case Ji:d(I,F,X,ie);break;case il:I==null&&M(F,X,ie,C);break;case Nn:Y(I,F,X,ie,Z,ne,C,he,oe);break;default:T&1?A(I,F,X,ie,Z,ne,C,he,oe):T&6?G(I,F,X,ie,Z,ne,C,he,oe):(T&64||T&128)&&K.process(I,F,X,ie,Z,ne,C,he,oe,Ee)}ae!=null&&Z?Xr(ae,I&&I.ref,ne,F||I,!F):ae==null&&I&&I.ref!=null&&Xr(I.ref,null,ne,I,!0)},p=(I,F,X,ie)=>{if(I==null)i(F.el=a(F.children),X,ie);else{const Z=F.el=I.el;F.children!==I.children&&c(Z,F.children)}},d=(I,F,X,ie)=>{I==null?i(F.el=l(F.children||""),X,ie):F.el=I.el},M=(I,F,X,ie)=>{[I.el,I.anchor]=_(I.children,F,X,ie,I.el,I.anchor)},S=({el:I,anchor:F},X,ie)=>{let Z;for(;I&&I!==F;)Z=f(I),i(I,X,ie),I=Z;i(F,X,ie)},y=({el:I,anchor:F})=>{let X;for(;I&&I!==F;)X=f(I),s(I),I=X;s(F)},A=(I,F,X,ie,Z,ne,C,he,oe)=>{if(F.type==="svg"?C="svg":F.type==="math"&&(C="mathml"),I==null)R(F,X,ie,Z,ne,C,he,oe);else{const K=I.el&&I.el._isVueCE?I.el:null;try{K&&K._beginPatch(),b(I,F,Z,ne,C,he,oe)}finally{K&&K._endPatch()}}},R=(I,F,X,ie,Z,ne,C,he)=>{let oe,K;const{props:ae,shapeFlag:T,transition:x,dirs:D}=I;if(oe=I.el=o(I.type,ne,ae&&ae.is,ae),T&8?u(oe,I.children):T&16&&z(I.children,oe,null,ie,Z,nl(I,ne),C,he),D&&ts(I,null,ie,"created"),P(oe,I,I.scopeId,C,ie),ae){for(const Q in ae)Q!=="value"&&!Hr(Q)&&r(oe,Q,null,ae[Q],ne,ie);"value"in ae&&r(oe,"value",null,ae.value,ne),(K=ae.onVnodeBeforeMount)&&Xn(K,ie,I)}D&&ts(I,null,ie,"beforeMount");const j=Cg(Z,x);j&&x.beforeEnter(oe),i(oe,F,X),((K=ae&&ae.onVnodeMounted)||j||D)&&pn(()=>{K&&Xn(K,ie,I),j&&x.enter(oe),D&&ts(I,null,ie,"mounted")},Z)},P=(I,F,X,ie,Z)=>{if(X&&m(I,X),ie)for(let ne=0;ne<ie.length;ne++)m(I,ie[ne]);if(Z){let ne=Z.subTree;if(F===ne||np(ne.type)&&(ne.ssContent===F||ne.ssFallback===F)){const C=Z.vnode;P(I,C,C.scopeId,C.slotScopeIds,Z.parent)}}},z=(I,F,X,ie,Z,ne,C,he,oe=0)=>{for(let K=oe;K<I.length;K++){const ae=I[K]=he?Xi(I[K]):$n(I[K]);v(null,ae,F,X,ie,Z,ne,C,he)}},b=(I,F,X,ie,Z,ne,C)=>{const he=F.el=I.el;let{patchFlag:oe,dynamicChildren:K,dirs:ae}=F;oe|=I.patchFlag&16;const T=I.props||Mt,x=F.props||Mt;let D;if(X&&ns(X,!1),(D=x.onVnodeBeforeUpdate)&&Xn(D,X,F,I),ae&&ts(F,I,X,"beforeUpdate"),X&&ns(X,!0),(T.innerHTML&&x.innerHTML==null||T.textContent&&x.textContent==null)&&u(he,""),K?w(I.dynamicChildren,K,he,X,ie,nl(F,Z),ne):C||ee(I,F,he,null,X,ie,nl(F,Z),ne,!1),oe>0){if(oe&16)N(he,T,x,X,Z);else if(oe&2&&T.class!==x.class&&r(he,"class",null,x.class,Z),oe&4&&r(he,"style",T.style,x.style,Z),oe&8){const j=F.dynamicProps;for(let Q=0;Q<j.length;Q++){const W=j[Q],Te=T[W],pe=x[W];(pe!==Te||W==="value")&&r(he,W,Te,pe,Z,X)}}oe&1&&I.children!==F.children&&u(he,F.children)}else!C&&K==null&&N(he,T,x,X,Z);((D=x.onVnodeUpdated)||ae)&&pn(()=>{D&&Xn(D,X,F,I),ae&&ts(F,I,X,"updated")},ie)},w=(I,F,X,ie,Z,ne,C)=>{for(let he=0;he<F.length;he++){const oe=I[he],K=F[he],ae=oe.el&&(oe.type===Nn||!Tr(oe,K)||oe.shapeFlag&198)?h(oe.el):X;v(oe,K,ae,null,ie,Z,ne,C,!0)}},N=(I,F,X,ie,Z)=>{if(F!==X){if(F!==Mt)for(const ne in F)!Hr(ne)&&!(ne in X)&&r(I,ne,F[ne],null,Z,ie);for(const ne in X){if(Hr(ne))continue;const C=X[ne],he=F[ne];C!==he&&ne!=="value"&&r(I,ne,he,C,Z,ie)}"value"in X&&r(I,"value",F.value,X.value,Z)}},Y=(I,F,X,ie,Z,ne,C,he,oe)=>{const K=F.el=I?I.el:a(""),ae=F.anchor=I?I.anchor:a("");let{patchFlag:T,dynamicChildren:x,slotScopeIds:D}=F;D&&(he=he?he.concat(D):D),I==null?(i(K,X,ie),i(ae,X,ie),z(F.children||[],X,ae,Z,ne,C,he,oe)):T>0&&T&64&&x&&I.dynamicChildren?(w(I.dynamicChildren,x,X,Z,ne,C,he),(F.key!=null||Z&&F===Z.subTree)&&ep(I,F,!0)):ee(I,F,X,ae,Z,ne,C,he,oe)},G=(I,F,X,ie,Z,ne,C,he,oe)=>{F.slotScopeIds=he,I==null?F.shapeFlag&512?Z.ctx.activate(F,X,ie,C,oe):$(F,X,ie,Z,ne,C,oe):J(I,F,oe)},$=(I,F,X,ie,Z,ne,C)=>{const he=I.component=kg(I,ie,Z);if(Ud(I)&&(he.ctx.renderer=Ee),Hg(he,!1,C),he.asyncDep){if(Z&&Z.registerDep(he,q,C),!I.el){const oe=he.subTree=Ti(Ji);d(null,oe,F,X),I.placeholder=oe.el}}else q(he,I,F,X,Z,ne,C)},J=(I,F,X)=>{const ie=F.component=I.component;if(vg(I,F,X))if(ie.asyncDep&&!ie.asyncResolved){k(ie,F,X);return}else ie.next=F,ie.update();else F.el=I.el,ie.vnode=F},q=(I,F,X,ie,Z,ne,C)=>{const he=()=>{if(I.isMounted){let{next:T,bu:x,u:D,parent:j,vnode:Q}=I;{const Fe=tp(I);if(Fe){T&&(T.el=Q.el,k(I,T,C)),Fe.asyncDep.then(()=>{I.isUnmounted||he()});return}}let W=T,Te;ns(I,!1),T?(T.el=Q.el,k(I,T,C)):T=Q,x&&ia(x),(Te=T.props&&T.props.onVnodeBeforeUpdate)&&Xn(Te,j,T,Q),ns(I,!0);const pe=rh(I),Ce=I.subTree;I.subTree=pe,v(Ce,pe,h(Ce.el),ce(Ce),I,Z,ne),T.el=pe.el,W===null&&yg(I,pe.el),D&&pn(D,Z),(Te=T.props&&T.props.onVnodeUpdated)&&pn(()=>Xn(Te,j,T,Q),Z)}else{let T;const{el:x,props:D}=F,{bm:j,m:Q,parent:W,root:Te,type:pe}=I,Ce=jr(F);ns(I,!1),j&&ia(j),!Ce&&(T=D&&D.onVnodeBeforeMount)&&Xn(T,W,F),ns(I,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(pe);const Fe=I.subTree=rh(I);v(null,Fe,X,ie,I,Z,ne),F.el=Fe.el}if(Q&&pn(Q,Z),!Ce&&(T=D&&D.onVnodeMounted)){const Fe=F;pn(()=>Xn(T,W,Fe),Z)}(F.shapeFlag&256||W&&jr(W.vnode)&&W.vnode.shapeFlag&256)&&I.a&&pn(I.a,Z),I.isMounted=!0,F=X=ie=null}};I.scope.on();const oe=I.effect=new pd(he);I.scope.off();const K=I.update=oe.run.bind(oe),ae=I.job=oe.runIfDirty.bind(oe);ae.i=I,ae.id=I.uid,oe.scheduler=()=>xu(ae),ns(I,!0),K()},k=(I,F,X)=>{F.component=I;const ie=I.vnode.props;I.vnode=F,I.next=null,Sg(I,F.props,ie,X),Ag(I,F.children,X),Ci(),Ju(I),Pi()},ee=(I,F,X,ie,Z,ne,C,he,oe=!1)=>{const K=I&&I.children,ae=I?I.shapeFlag:0,T=F.children,{patchFlag:x,shapeFlag:D}=F;if(x>0){if(x&128){me(K,T,X,ie,Z,ne,C,he,oe);return}else if(x&256){ye(K,T,X,ie,Z,ne,C,he,oe);return}}D&8?(ae&16&&te(K,Z,ne),T!==K&&u(X,T)):ae&16?D&16?me(K,T,X,ie,Z,ne,C,he,oe):te(K,Z,ne,!0):(ae&8&&u(X,""),D&16&&z(T,X,ie,Z,ne,C,he,oe))},ye=(I,F,X,ie,Z,ne,C,he,oe)=>{I=I||js,F=F||js;const K=I.length,ae=F.length,T=Math.min(K,ae);let x;for(x=0;x<T;x++){const D=F[x]=oe?Xi(F[x]):$n(F[x]);v(I[x],D,X,null,Z,ne,C,he,oe)}K>ae?te(I,Z,ne,!0,!1,T):z(F,X,ie,Z,ne,C,he,oe,T)},me=(I,F,X,ie,Z,ne,C,he,oe)=>{let K=0;const ae=F.length;let T=I.length-1,x=ae-1;for(;K<=T&&K<=x;){const D=I[K],j=F[K]=oe?Xi(F[K]):$n(F[K]);if(Tr(D,j))v(D,j,X,null,Z,ne,C,he,oe);else break;K++}for(;K<=T&&K<=x;){const D=I[T],j=F[x]=oe?Xi(F[x]):$n(F[x]);if(Tr(D,j))v(D,j,X,null,Z,ne,C,he,oe);else break;T--,x--}if(K>T){if(K<=x){const D=x+1,j=D<ae?F[D].el:ie;for(;K<=x;)v(null,F[K]=oe?Xi(F[K]):$n(F[K]),X,j,Z,ne,C,he,oe),K++}}else if(K>x)for(;K<=T;)ke(I[K],Z,ne,!0),K++;else{const D=K,j=K,Q=new Map;for(K=j;K<=x;K++){const Se=F[K]=oe?Xi(F[K]):$n(F[K]);Se.key!=null&&Q.set(Se.key,K)}let W,Te=0;const pe=x-j+1;let Ce=!1,Fe=0;const fe=new Array(pe);for(K=0;K<pe;K++)fe[K]=0;for(K=D;K<=T;K++){const Se=I[K];if(Te>=pe){ke(Se,Z,ne,!0);continue}let Le;if(Se.key!=null)Le=Q.get(Se.key);else for(W=j;W<=x;W++)if(fe[W-j]===0&&Tr(Se,F[W])){Le=W;break}Le===void 0?ke(Se,Z,ne,!0):(fe[Le-j]=K+1,Le>=Fe?Fe=Le:Ce=!0,v(Se,F[Le],X,null,Z,ne,C,he,oe),Te++)}const ve=Ce?Pg(fe):js;for(W=ve.length-1,K=pe-1;K>=0;K--){const Se=j+K,Le=F[Se],xe=F[Se+1],Ke=Se+1<ae?xe.el||xe.placeholder:ie;fe[K]===0?v(null,Le,X,Ke,Z,ne,C,he,oe):Ce&&(W<0||K!==ve[W]?Me(Le,X,Ke,2):W--)}}},Me=(I,F,X,ie,Z=null)=>{const{el:ne,type:C,transition:he,children:oe,shapeFlag:K}=I;if(K&6){Me(I.component.subTree,F,X,ie);return}if(K&128){I.suspense.move(F,X,ie);return}if(K&64){C.move(I,F,X,Ee);return}if(C===Nn){i(ne,F,X);for(let T=0;T<oe.length;T++)Me(oe[T],F,X,ie);i(I.anchor,F,X);return}if(C===il){S(I,F,X);return}if(ie!==2&&K&1&&he)if(ie===0)he.beforeEnter(ne),i(ne,F,X),pn(()=>he.enter(ne),Z);else{const{leave:T,delayLeave:x,afterLeave:D}=he,j=()=>{I.ctx.isUnmounted?s(ne):i(ne,F,X)},Q=()=>{ne._isLeaving&&ne[Wm](!0),T(ne,()=>{j(),D&&D()})};x?x(ne,j,Q):Q()}else i(ne,F,X)},ke=(I,F,X,ie=!1,Z=!1)=>{const{type:ne,props:C,ref:he,children:oe,dynamicChildren:K,shapeFlag:ae,patchFlag:T,dirs:x,cacheIndex:D}=I;if(T===-2&&(Z=!1),he!=null&&(Ci(),Xr(he,null,X,I,!0),Pi()),D!=null&&(F.renderCache[D]=void 0),ae&256){F.ctx.deactivate(I);return}const j=ae&1&&x,Q=!jr(I);let W;if(Q&&(W=C&&C.onVnodeBeforeUnmount)&&Xn(W,F,I),ae&6)lt(I.component,X,ie);else{if(ae&128){I.suspense.unmount(X,ie);return}j&&ts(I,null,F,"beforeUnmount"),ae&64?I.type.remove(I,F,X,Ee,ie):K&&!K.hasOnce&&(ne!==Nn||T>0&&T&64)?te(K,F,X,!1,!0):(ne===Nn&&T&384||!Z&&ae&16)&&te(oe,F,X),ie&&ze(I)}(Q&&(W=C&&C.onVnodeUnmounted)||j)&&pn(()=>{W&&Xn(W,F,I),j&&ts(I,null,F,"unmounted")},X)},ze=I=>{const{type:F,el:X,anchor:ie,transition:Z}=I;if(F===Nn){ht(X,ie);return}if(F===il){y(I);return}const ne=()=>{s(X),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(I.shapeFlag&1&&Z&&!Z.persisted){const{leave:C,delayLeave:he}=Z,oe=()=>C(X,ne);he?he(I.el,ne,oe):oe()}else ne()},ht=(I,F)=>{let X;for(;I!==F;)X=f(I),s(I),I=X;s(F)},lt=(I,F,X)=>{const{bum:ie,scope:Z,job:ne,subTree:C,um:he,m:oe,a:K}=I;lh(oe),lh(K),ie&&ia(ie),Z.stop(),ne&&(ne.flags|=8,ke(C,I,F,X)),he&&pn(he,F),pn(()=>{I.isUnmounted=!0},F)},te=(I,F,X,ie=!1,Z=!1,ne=0)=>{for(let C=ne;C<I.length;C++)ke(I[C],F,X,ie,Z)},ce=I=>{if(I.shapeFlag&6)return ce(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const F=f(I.anchor||I.el),X=F&&F[Hm];return X?f(X):F};let Pe=!1;const Ge=(I,F,X)=>{I==null?F._vnode&&ke(F._vnode,null,null,!0):v(F._vnode||null,I,F,null,null,null,X),F._vnode=I,Pe||(Pe=!0,Ju(),Ld(),Pe=!1)},Ee={p:v,um:ke,m:Me,r:ze,mt:$,mc:z,pc:ee,pbc:w,n:ce,o:n};return{render:Ge,hydrate:void 0,createApp:cg(Ge)}}function nl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ns({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Cg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ep(n,e,t=!1){const i=n.children,s=e.children;if(Ye(i)&&Ye(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Xi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&ep(o,a)),a.type===Fa&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ji&&!a.el&&(a.el=o.el)}}function Pg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function tp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tp(e)}function lh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const np=n=>n.__isSuspense;function Lg(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):km(n)}const Nn=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),Ji=Symbol.for("v-cmt"),il=Symbol.for("v-stc"),Kr=[];let gn=null;function Yn(n=!1){Kr.push(gn=n?null:[])}function Ig(){Kr.pop(),gn=Kr[Kr.length-1]||null}let no=1;function ch(n,e=!1){no+=n,n<0&&gn&&e&&(gn.hasOnce=!0)}function ip(n){return n.dynamicChildren=no>0?gn||js:null,Ig(),no>0&&gn&&gn.push(n),n}function fi(n,e,t,i,s,r){return ip(ue(n,e,t,i,s,r,!0))}function Dg(n,e,t,i,s){return ip(Ti(n,e,t,i,s,!0))}function sp(n){return n?n.__v_isVNode===!0:!1}function Tr(n,e){return n.type===e.type&&n.key===e.key}const rp=({key:n})=>n??null,ra=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ut(n)||Zt(n)||Je(n)?{i:An,r:n,k:e,f:!!t}:n:null);function ue(n,e=null,t=null,i=0,s=null,r=n===Nn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&rp(e),ref:e&&ra(e),scopeId:Dd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:An};return a?(Su(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ut(t)?8:16),no>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Ti=Ng;function Ng(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===tg)&&(n=Ji),sp(n)){const a=ir(n,e,!0);return t&&Su(a,t),no>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag=-2,a}if(jg(n)&&(n=n.__vccOpts),e){e=Ug(e);let{class:a,style:l}=e;a&&!Ut(a)&&(e.class=Ks(a)),Tt(l)&&(_u(l)&&!Ye(l)&&(l=on({},l)),e.style=ds(l))}const o=Ut(n)?1:np(n)?128:Gm(n)?64:Tt(n)?4:Je(n)?2:0;return ue(n,e,t,i,s,o,r,!0)}function Ug(n){return n?_u(n)||Kd(n)?on({},n):n:null}function ir(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Og(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&rp(c),ref:e&&e.ref?t&&r?Ye(r)?r.concat(ra(e)):[r,ra(e)]:ra(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ir(n.ssContent),ssFallback:n.ssFallback&&ir(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&vu(u,l.clone(u)),u}function Fg(n=" ",e=0){return Ti(Fa,null,n,e)}function Ar(n="",e=!1){return e?(Yn(),Dg(Ji,null,n)):Ti(Ji,null,n)}function $n(n){return n==null||typeof n=="boolean"?Ti(Ji):Ye(n)?Ti(Nn,null,n.slice()):sp(n)?Xi(n):Ti(Fa,null,String(n))}function Xi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ir(n)}function Su(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Su(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Kd(e)?e._ctx=An:s===3&&An&&(An.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:An},t=32):(e=String(e),i&64?(t=16,e=[Fg(e)]):t=8);n.children=e,n.shapeFlag|=t}function Og(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ks([e.class,i.class]));else if(s==="style")e.style=ds([e.style,i.style]);else if(Ra(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ye(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Xn(n,e,t,i=null){si(n,e,7,[t,i])}const Bg=Hd();let Vg=0;function kg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Bg,r={uid:Vg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$d(i,s),emitsOptions:Xd(i,s),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=mg.bind(null,r),n.ce&&n.ce(r),r}let sn=null;const zg=()=>sn||An;let va,sc;{const n=La(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};va=e("__VUE_INSTANCE_SETTERS__",t=>sn=t),sc=e("__VUE_SSR_SETTERS__",t=>io=t)}const go=n=>{const e=sn;return va(n),n.scope.on(),()=>{n.scope.off(),va(e)}},uh=()=>{sn&&sn.scope.off(),va(null)};function op(n){return n.vnode.shapeFlag&4}let io=!1;function Hg(n,e=!1,t=!1){e&&sc(e);const{props:i,children:s}=n.vnode,r=op(n);Mg(n,i,r,e),Tg(n,s,t||e);const o=r?Gg(n,e):void 0;return e&&sc(!1),o}function Gg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ng);const{setup:i}=t;if(i){Ci();const s=n.setupContext=i.length>1?Xg(n):null,r=go(n),o=mo(i,n,0,[n.props,s]),a=rd(o);if(Pi(),r(),(a||n.sp)&&!jr(n)&&Nd(n),a){if(o.then(uh,uh),e)return o.then(l=>{hh(n,l)}).catch(l=>{Da(l,n,0)});n.asyncDep=o}else hh(n,o)}else ap(n)}function hh(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Tt(e)&&(n.setupState=Rd(e)),ap(n)}function ap(n,e,t){const i=n.type;n.render||(n.render=i.render||ei);{const s=go(n);Ci();try{ig(n)}finally{Pi(),s()}}}const Wg={get(n,e){return $t(n,"get",""),n[e]}};function Xg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Wg),slots:n.slots,emit:n.emit,expose:e}}function Oa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Rd(Cm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Yr)return Yr[t](n)},has(e,t){return t in e||t in Yr}})):n.proxy}function jg(n){return Je(n)&&"__vccOpts"in n}const rc=(n,e)=>Nm(n,e,io),Yg="3.5.25";let oc;const fh=typeof window<"u"&&window.trustedTypes;if(fh)try{oc=fh.createPolicy("vue",{createHTML:n=>n})}catch{}const lp=oc?n=>oc.createHTML(n):n=>n,Kg="http://www.w3.org/2000/svg",qg="http://www.w3.org/1998/Math/MathML",vi=typeof document<"u"?document:null,dh=vi&&vi.createElement("template"),$g={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?vi.createElementNS(Kg,n):e==="mathml"?vi.createElementNS(qg,n):t?vi.createElement(n,{is:t}):vi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>vi.createTextNode(n),createComment:n=>vi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>vi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{dh.innerHTML=lp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=dh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zg=Symbol("_vtc");function Jg(n,e,t){const i=n[Zg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ya=Symbol("_vod"),cp=Symbol("_vsh"),Qg={name:"show",beforeMount(n,{value:e},{transition:t}){n[ya]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):wr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),wr(n,!0),i.enter(n)):i.leave(n,()=>{wr(n,!1)}):wr(n,e))},beforeUnmount(n,{value:e}){wr(n,e)}};function wr(n,e){n.style.display=e?n[ya]:"none",n[cp]=!e}const e_=Symbol(""),t_=/(?:^|;)\s*display\s*:/;function n_(n,e,t){const i=n.style,s=Ut(t);let r=!1;if(t&&!s){if(e)if(Ut(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&oa(i,a,"")}else for(const o in e)t[o]==null&&oa(i,o,"");for(const o in t)o==="display"&&(r=!0),oa(i,o,t[o])}else if(s){if(e!==t){const o=i[e_];o&&(t+=";"+o),i.cssText=t,r=t_.test(t)}}else e&&n.removeAttribute("style");ya in n&&(n[ya]=r?i.display:"",n[cp]&&(i.display="none"))}const ph=/\s*!important$/;function oa(n,e,t){if(Ye(t))t.forEach(i=>oa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=i_(n,e);ph.test(t)?n.setProperty(Ms(i),t.replace(ph,""),"important"):n[i]=t}}const mh=["Webkit","Moz","ms"],sl={};function i_(n,e){const t=sl[e];if(t)return t;let i=Zi(e);if(i!=="filter"&&i in n)return sl[e]=i;i=ld(i);for(let s=0;s<mh.length;s++){const r=mh[s]+i;if(r in n)return sl[e]=r}return e}const gh="http://www.w3.org/1999/xlink";function _h(n,e,t,i,s,r=om(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(gh,e.slice(6,e.length)):n.setAttributeNS(gh,e,t):t==null||r&&!ud(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ii(t)?String(t):t)}function xh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?lp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ud(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Yi(n,e,t,i){n.addEventListener(e,t,i)}function s_(n,e,t,i){n.removeEventListener(e,t,i)}const vh=Symbol("_vei");function r_(n,e,t,i,s=null){const r=n[vh]||(n[vh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=o_(e);if(i){const c=r[e]=c_(i,s);Yi(n,a,c,l)}else o&&(s_(n,a,o,l),r[e]=void 0)}}const yh=/(?:Once|Passive|Capture)$/;function o_(n){let e;if(yh.test(n)){e={};let i;for(;i=n.match(yh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ms(n.slice(2)),e]}let rl=0;const a_=Promise.resolve(),l_=()=>rl||(a_.then(()=>rl=0),rl=Date.now());function c_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;si(u_(i,t.value),e,5,[i])};return t.value=n,t.attached=l_(),t}function u_(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Mh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,h_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Jg(n,i,o):e==="style"?n_(n,t,i):Ra(e)?ou(e)||r_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f_(n,e,i,o))?(xh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_h(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ut(i))?xh(n,Zi(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),_h(n,e,i,o))};function f_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Mh(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mh(e)&&Ut(t)?!1:e in n}const sr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ye(e)?t=>ia(e,t):e};function d_(n){n.target.composing=!0}function Sh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ai=Symbol("_assign");function bh(n,e,t){return e&&(n=n.trim()),t&&(n=cu(n)),n}const ol={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ai]=sr(s);const r=i||s.props&&s.props.type==="number";Yi(n,e?"change":"input",o=>{o.target.composing||n[Ai](bh(n.value,t,r))}),(t||r)&&Yi(n,"change",()=>{n.value=bh(n.value,t,r)}),e||(Yi(n,"compositionstart",d_),Yi(n,"compositionend",Sh),Yi(n,"change",Sh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ai]=sr(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?cu(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},al={deep:!0,created(n,e,t){n[Ai]=sr(t),Yi(n,"change",()=>{const i=n._modelValue,s=up(n),r=n.checked,o=n[Ai];if(Ye(i)){const a=hd(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ca(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(hp(n,r))})},mounted:Eh,beforeUpdate(n,e,t){n[Ai]=sr(t),Eh(n,e,t)}};function Eh(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ye(e))s=hd(e,i.props.value)>-1;else if(Ca(e))s=e.has(i.props.value);else{if(e===t)return;s=tr(e,hp(n,!0))}n.checked!==s&&(n.checked=s)}const ll={created(n,{value:e},t){n.checked=tr(e,t.props.value),n[Ai]=sr(t),Yi(n,"change",()=>{n[Ai](up(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[Ai]=sr(i),e!==t&&(n.checked=tr(e,i.props.value))}};function up(n){return"_value"in n?n._value:n.value}function hp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const p_=["ctrl","shift","alt","meta"],m_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>p_.some(t=>n[`${t}Key`]&&!e.includes(t))},Th=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=m_[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},g_=on({patchProp:h_},$g);let Ah;function __(){return Ah||(Ah=wg(g_))}const x_=((...n)=>{const e=__().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=y_(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,v_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function v_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function y_(n){return Ut(n)?document.querySelector(n):n}const bu="182",En={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},M_=0,wh=1,S_=2,aa=1,b_=2,Vr=3,Ii=0,hn=1,Tn=2,wi=0,Js=1,Rh=2,Ch=3,Ph=4,E_=5,hs=100,T_=101,A_=102,w_=103,R_=104,C_=200,P_=201,L_=202,I_=203,ac=204,lc=205,D_=206,N_=207,U_=208,F_=209,O_=210,B_=211,V_=212,k_=213,z_=214,cc=0,uc=1,hc=2,rr=3,fc=4,dc=5,pc=6,mc=7,Eu=0,H_=1,G_=2,ti=0,fp=1,dp=2,pp=3,mp=4,gp=5,_p=6,xp=7,Lh="attached",W_="detached",vp=300,ys=301,or=302,gc=303,_c=304,Ba=306,ar=1e3,Jn=1001,Ma=1002,Ot=1003,yp=1004,kr=1005,Bt=1006,la=1007,Si=1008,mn=1009,Mp=1010,Sp=1011,so=1012,Tu=1013,ri=1014,wn=1015,Di=1016,Au=1017,wu=1018,ro=1020,bp=35902,Ep=35899,Tp=1021,Ap=1022,Rn=1023,Ni=1026,ps=1027,Ru=1028,Cu=1029,lr=1030,Pu=1031,Lu=1033,ca=33776,ua=33777,ha=33778,fa=33779,xc=35840,vc=35841,yc=35842,Mc=35843,Sc=36196,bc=37492,Ec=37496,Tc=37488,Ac=37489,wc=37490,Rc=37491,Cc=37808,Pc=37809,Lc=37810,Ic=37811,Dc=37812,Nc=37813,Uc=37814,Fc=37815,Oc=37816,Bc=37817,Vc=37818,kc=37819,zc=37820,Hc=37821,Gc=36492,Wc=36494,Xc=36495,jc=36283,Yc=36284,Kc=36285,qc=36286,oo=2300,ao=2301,cl=2302,Ih=2400,Dh=2401,Nh=2402,X_=2500,j_=0,wp=1,$c=2,Y_=3200,Iu=0,K_=1,Ki="",It="srgb",an="srgb-linear",Sa="linear",gt="srgb",Rs=7680,Uh=519,q_=512,$_=513,Z_=514,Du=515,J_=516,Q_=517,Nu=518,e0=519,Zc=35044,Fh="300 es",Qn=2e3,ba=2001;function Rp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function t0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n0(){const n=lo("canvas");return n.style.display="block",n}const Oh={};function Ea(...n){const e="THREE."+n.shift();console.log(e,...n)}function Oe(...n){const e="THREE."+n.shift();console.warn(e,...n)}function We(...n){const e="THREE."+n.shift();console.error(e,...n)}function co(...n){const e=n.join(" ");e in Oh||(Oh[e]=!0,Oe(...n))}function i0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bh=1234567;const qr=Math.PI/180,cr=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function Uu(n,e){return(n%e+e)%e}function s0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function r0(n,e,t){return n!==e?(t-n)/(e-n):0}function $r(n,e,t){return(1-t)*n+t*e}function o0(n,e,t,i){return $r(n,e,1-Math.exp(-t*i))}function a0(n,e=1){return e-Math.abs(Uu(n,e*2)-e)}function l0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function c0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function u0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function h0(n,e){return n+Math.random()*(e-n)}function f0(n){return n*(.5-Math.random())}function d0(n){n!==void 0&&(Bh=n);let e=Bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p0(n){return n*qr}function m0(n){return n*cr}function g0(n){return(n&n-1)===0&&n!==0}function _0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function x0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function v0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*u,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Cp={DEG2RAD:qr,RAD2DEG:cr,generateUUID:Bn,clamp:nt,euclideanModulo:Uu,mapLinear:s0,inverseLerp:r0,lerp:$r,damp:o0,pingpong:a0,smoothstep:l0,smootherstep:c0,randInt:u0,randFloat:h0,randFloatSpread:f0,seededRandom:d0,degToRad:p0,radToDeg:m0,isPowerOfTwo:g0,ceilPowerOfTwo:_0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:v0,normalize:_t,denormalize:Un};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==f||c!==m||u!==_){let p=l*f+c*m+u*_+h*v;p<0&&(f=-f,m=-m,_=-_,v=-v,p=-p);let d=1-a;if(p<.9995){const M=Math.acos(p),S=Math.sin(M);d=Math.sin(d*M)/S,a=Math.sin(a*M)/S,l=l*d+f*a,c=c*d+m*a,u=u*d+_*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+m*a,u=u*d+_*a,h=h*d+v*a;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new V,Vh=new oi;class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],v=s[0],p=s[3],d=s[6],M=s[1],S=s[4],y=s[7],A=s[2],R=s[5],P=s[8];return r[0]=o*v+a*M+l*A,r[3]=o*p+a*S+l*R,r[6]=o*d+a*y+l*P,r[1]=c*v+u*M+h*A,r[4]=c*p+u*S+h*R,r[7]=c*d+u*y+h*P,r[2]=f*v+m*M+_*A,r[5]=f*p+m*S+_*R,r[8]=f*d+m*y+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,_=t*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hl.makeScale(e,t)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new Ze,kh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){const n={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return co("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return co("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[an]:{primaries:e,whitePoint:i,transfer:Sa,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),n}const rt=y0();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cs;class M0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cs===void 0&&(Cs=lo("canvas")),Cs.width=e.width,Cs.height=e.height;const s=Cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Cs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let S0=0;class Fu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fl(s[o].image)):r.push(fl(s[o]))}else r=fl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function fl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?M0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let b0=0;const dl=new V;class Ht extends Ss{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Jn,s=Jn,r=Bt,o=Si,a=Rn,l=mn,c=Ht.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Bn(),this.name="",this.source=new Fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=vp;Ht.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(m+1)/2,A=(d+1)/2,R=(u+f)/4,P=(h+v)/4,z=(_+p)/4;return S>y&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=P/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=z/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=z/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E0 extends Ss{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Ht(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends E0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pp extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T0 extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Po.subVectors(this.max,Rr),Ps.subVectors(e.a,Rr),Ls.subVectors(e.b,Rr),Is.subVectors(e.c,Rr),Fi.subVectors(Ls,Ps),Oi.subVectors(Is,Ls),is.subVectors(Ps,Is);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-is.z,is.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,is.z,0,-is.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-is.y,is.x,0];return!pl(t,Ps,Ls,Is,Po)||(t=[1,0,0,0,1,0,0,0,1],!pl(t,Ps,Ls,Is,Po))?!1:(Lo.crossVectors(Fi,Oi),t=[Lo.x,Lo.y,Lo.z],pl(t,Ps,Ls,Is,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new V,new V,new V,new V,new V,new V,new V,new V],Ln=new V,Co=new kn,Ps=new V,Ls=new V,Is=new V,Fi=new V,Oi=new V,is=new V,Rr=new V,Po=new V,Lo=new V,ss=new V;function pl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);const a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),u=i.dot(ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const A0=new kn,Cr=new V,ml=new V;class li{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):A0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(ml)),this.expandByPoint(Cr.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pi=new V,gl=new V,Io=new V,Bi=new V,_l=new V,Do=new V,xl=new V;class mr{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gl.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(gl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Io),a=Bi.dot(this.direction),l=-Bi.dot(Io),c=Bi.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gl).addScaledVector(Io,f),m}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){_l.subVectors(t,e),Do.subVectors(i,e),xl.crossVectors(_l,Do);let o=this.direction.dot(xl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(Do.crossVectors(Bi,Do));if(l<0)return null;const c=a*this.direction.dot(_l.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(xl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,s,r,o,a,l,c,u,h,f,m,_,v,p){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,m,_,v,p)}set(e,t,i,s,r,o,a,l,c,u,h,f,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,v=c*h;t[0]=f+v*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w0,e,R0)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Vi.crossVectors(i,fn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Vi.crossVectors(i,fn)),Vi.normalize(),No.crossVectors(fn,Vi),s[0]=Vi.x,s[4]=No.x,s[8]=fn.x,s[1]=Vi.y,s[5]=No.y,s[9]=fn.y,s[2]=Vi.z,s[6]=No.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],v=i[6],p=i[10],d=i[14],M=i[3],S=i[7],y=i[11],A=i[15],R=s[0],P=s[4],z=s[8],b=s[12],w=s[1],N=s[5],Y=s[9],G=s[13],$=s[2],J=s[6],q=s[10],k=s[14],ee=s[3],ye=s[7],me=s[11],Me=s[15];return r[0]=o*R+a*w+l*$+c*ee,r[4]=o*P+a*N+l*J+c*ye,r[8]=o*z+a*Y+l*q+c*me,r[12]=o*b+a*G+l*k+c*Me,r[1]=u*R+h*w+f*$+m*ee,r[5]=u*P+h*N+f*J+m*ye,r[9]=u*z+h*Y+f*q+m*me,r[13]=u*b+h*G+f*k+m*Me,r[2]=_*R+v*w+p*$+d*ee,r[6]=_*P+v*N+p*J+d*ye,r[10]=_*z+v*Y+p*q+d*me,r[14]=_*b+v*G+p*k+d*Me,r[3]=M*R+S*w+y*$+A*ee,r[7]=M*P+S*N+y*J+A*ye,r[11]=M*z+S*Y+y*q+A*me,r[15]=M*b+S*G+y*k+A*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15],M=l*m-c*f,S=a*m-c*h,y=a*f-l*h,A=o*m-c*u,R=o*f-l*u,P=o*h-a*u;return t*(v*M-p*S+d*y)-i*(_*M-p*A+d*R)+s*(_*S-v*A+d*P)-r*(_*y-v*R+p*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],M=h*p*c-v*f*c+v*l*m-a*p*m-h*l*d+a*f*d,S=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,y=u*v*c-_*h*c+_*a*m-o*v*m-u*a*d+o*h*d,A=_*h*l-u*v*l-_*a*f+o*v*f+u*a*p-o*h*p,R=t*M+i*S+s*y+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=M*P,e[1]=(v*f*r-h*p*r-v*s*m+i*p*m+h*s*d-i*f*d)*P,e[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*d+i*l*d)*P,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*P,e[4]=S*P,e[5]=(u*p*r-_*f*r+_*s*m-t*p*m-u*s*d+t*f*d)*P,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*d-t*l*d)*P,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*P,e[8]=y*P,e[9]=(_*h*r-u*v*r-_*i*m+t*v*m+u*i*d-t*h*d)*P,e[10]=(o*v*r-_*a*r+_*i*c-t*v*c-o*i*d+t*a*d)*P,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*m-t*a*m)*P,e[12]=A*P,e[13]=(u*v*s-_*h*s+_*i*f-t*v*f-u*i*p+t*h*p)*P,e[14]=(_*a*s-o*v*s-_*i*l+t*v*l+o*i*p-t*a*p)*P,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,_=r*h,v=o*u,p=o*h,d=a*h,M=l*c,S=l*u,y=l*h,A=i.x,R=i.y,P=i.z;return s[0]=(1-(v+d))*A,s[1]=(m+y)*A,s[2]=(_-S)*A,s[3]=0,s[4]=(m-y)*R,s[5]=(1-(f+d))*R,s[6]=(p+M)*R,s[7]=0,s[8]=(_+S)*P,s[9]=(p-M)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),In.copy(this);const c=1/r,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Qn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s);let _,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===Qn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ba)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Qn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s);let _,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===Qn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===ba)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ds=new V,In=new Qe,w0=new V(0,0,0),R0=new V(1,1,1),Vi=new V,No=new V,fn=new V,Hh=new Qe,Gh=new oi;class zn{constructor(e=0,t=0,i=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C0=0;const Wh=new V,Ns=new oi,mi=new Qe,Uo=new V,Pr=new V,P0=new V,L0=new oi,Xh=new V(1,0,0),jh=new V(0,1,0),Yh=new V(0,0,1),Kh={type:"added"},I0={type:"removed"},Us={type:"childadded",child:null},vl={type:"childremoved",child:null};class Pt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new V,t=new zn,i=new oi,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ze}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uo.copy(e):Uo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Pr,Uo,this.up):mi.lookAt(Uo,Pr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(mi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),Us.child=e,this.dispatchEvent(Us),Us.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,P0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new V(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new V,gi=new V,yl=new V,_i=new V,Fs=new V,Os=new V,qh=new V,Ml=new V,Sl=new V,bl=new V,El=new Rt,Tl=new Rt,Al=new Rt;class Fn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),gi.subVectors(i,t),yl.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(gi),l=Dn.dot(yl),c=gi.dot(gi),u=gi.dot(yl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return El.setScalar(0),Tl.setScalar(0),Al.setScalar(0),El.fromBufferAttribute(e,t),Tl.fromBufferAttribute(e,i),Al.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(El,r.x),o.addScaledVector(Tl,r.y),o.addScaledVector(Al,r.z),o}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),gi.subVectors(e,t),Dn.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Dn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Fs.subVectors(s,i),Os.subVectors(r,i),Ml.subVectors(e,i);const l=Fs.dot(Ml),c=Os.dot(Ml);if(l<=0&&c<=0)return t.copy(i);Sl.subVectors(e,s);const u=Fs.dot(Sl),h=Os.dot(Sl);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Fs,o);bl.subVectors(e,r);const m=Fs.dot(bl),_=Os.dot(bl);if(_>=0&&m<=_)return t.copy(r);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Os,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return qh.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(qh,a);const d=1/(p+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Uu(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=wl(o,r,e+1/3),this.g=wl(o,r,e),this.b=wl(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=Lp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return rt.workingToColorSpace(qt.copy(this),e),Math.round(nt(qt.r*255,0,255))*65536+Math.round(nt(qt.g*255,0,255))*256+Math.round(nt(qt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=It){rt.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Fo);const i=$r(ki.h,Fo.h,t),s=$r(ki.s,Fo.s,t),r=$r(ki.l,Fo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Be;Be.NAMES=Lp;let D0=0;class _n extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Js,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=lc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ac&&(i.blendSrc=this.blendSrc),this.blendDst!==lc&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ms extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new V,Oo=new je;let N0=0;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class Ip extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dp extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let U0=0;const Mn=new Qe,Rl=new Pt,Bs=new V,dn=new kn,Lr=new kn,zt=new V;class Gt extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Dp:Ip)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return Rl.lookAt(e),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(dn.min,Lr.min),dn.expandByPoint(zt),zt.addVectors(dn.max,Lr.max),dn.expandByPoint(zt)):(dn.expandByPoint(Lr.min),dn.expandByPoint(Lr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),zt.add(Bs)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new V,l[z]=new V;const c=new V,u=new V,h=new V,f=new je,m=new je,_=new je,v=new V,p=new V;function d(z,b,w){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,w),f.fromBufferAttribute(r,z),m.fromBufferAttribute(r,b),_.fromBufferAttribute(r,w),u.sub(c),h.sub(c),m.sub(f),_.sub(f);const N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(N),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(N),a[z].add(v),a[b].add(v),a[w].add(v),l[z].add(p),l[b].add(p),l[w].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let z=0,b=M.length;z<b;++z){const w=M[z],N=w.start,Y=w.count;for(let G=N,$=N+Y;G<$;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new V,y=new V,A=new V,R=new V;function P(z){A.fromBufferAttribute(s,z),R.copy(A);const b=a[z];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(R,b);const N=y.dot(l[z])<0?-1:1;o.setXYZW(z,S.x,S.y,S.z,N)}for(let z=0,b=M.length;z<b;++z){const w=M[z],N=w.start,Y=w.count;for(let G=N,$=N+Y;G<$;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new rn(f,u,h)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new Qe,rs=new mr,Bo=new li,Zh=new V,Vo=new V,ko=new V,zo=new V,Cl=new V,Ho=new V,Jh=new V,Go=new V;class jt extends Pt{constructor(e=new Gt,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Cl.fromBufferAttribute(h,e),o?Ho.addScaledVector(Cl,u):Ho.addScaledVector(Cl.sub(t),u))}t.add(Ho)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(Bo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Bo,Zh)===null||rs.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&($h.copy(r).invert(),rs.copy(e.ray).applyMatrix4($h),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=o[p.materialIndex],M=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,A=S;y<A;y+=3){const R=a.getX(y),P=a.getX(y+1),z=a.getX(y+2);s=Wo(this,d,e,i,c,u,h,R,P,z),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const M=a.getX(p),S=a.getX(p+1),y=a.getX(p+2);s=Wo(this,o,e,i,c,u,h,M,S,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=o[p.materialIndex],M=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,A=S;y<A;y+=3){const R=y,P=y+1,z=y+2;s=Wo(this,d,e,i,c,u,h,R,P,z),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const M=p,S=p+1,y=p+2;s=Wo(this,o,e,i,c,u,h,M,S,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function F0(n,e,t,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ii,a),l===null)return null;Go.copy(a),Go.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:n}}function Wo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Vo),n.getVertexPosition(l,ko),n.getVertexPosition(c,zo);const u=F0(n,e,t,i,Vo,ko,zo,Jh);if(u){const h=new V;Fn.getBarycoord(Jh,Vo,ko,zo,h),s&&(u.uv=Fn.getInterpolatedAttribute(s,a,l,c,h,new je)),r&&(u.uv1=Fn.getInterpolatedAttribute(r,a,l,c,h,new je)),o&&(u.normal=Fn.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};Fn.getNormal(Vo,ko,zo,f.normal),u.face=f,u.barycoord=h}return u}class _o extends Gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function _(v,p,d,M,S,y,A,R,P,z,b){const w=y/P,N=A/z,Y=y/2,G=A/2,$=R/2,J=P+1,q=z+1;let k=0,ee=0;const ye=new V;for(let me=0;me<q;me++){const Me=me*N-G;for(let ke=0;ke<J;ke++){const ze=ke*w-Y;ye[v]=ze*M,ye[p]=Me*S,ye[d]=$,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[p]=0,ye[d]=R>0?1:-1,u.push(ye.x,ye.y,ye.z),h.push(ke/P),h.push(1-me/z),k+=1}}for(let me=0;me<z;me++)for(let Me=0;Me<P;Me++){const ke=f+Me+J*me,ze=f+Me+J*(me+1),ht=f+(Me+1)+J*(me+1),lt=f+(Me+1)+J*me;l.push(ke,ze,lt),l.push(ze,ht,lt),ee+=6}a.addGroup(m,ee,b),m+=ee,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=ur(n[t]);for(const s in i)e[s]=i[s]}return e}function O0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Np(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const B0={clone:ur,merge:en};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Up extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new V,Qh=new je,ef=new je;class nn extends Up{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Qh,ef),t.subVectors(ef,Qh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,ks=1;class z0 extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Vs,ks,e,t);s.layers=this.layers,this.add(s);const r=new nn(Vs,ks,e,t);r.layers=this.layers,this.add(r);const o=new nn(Vs,ks,e,t);o.layers=this.layers,this.add(o);const a=new nn(Vs,ks,e,t);a.layers=this.layers,this.add(a);const l=new nn(Vs,ks,e,t);l.layers=this.layers,this.add(l);const c=new nn(Vs,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Fp extends Ht{constructor(e=[],t=ys,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Op extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _o(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:wi});r.uniforms.tEquirect.value=t;const o=new jt(s,r),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=Bt),new z0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class bi extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H0={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class G0 extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class W0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new V;class Bu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const tf=new V,nf=new Rt,sf=new Rt,X0=new V,rf=new Qe,Xo=new V,Ll=new li,of=new Qe,Il=new mr;class j0 extends jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xo),this.boundingSphere.expandByPoint(Xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ll.copy(this.boundingSphere),Ll.applyMatrix4(s),e.ray.intersectsSphere(Ll)!==!1&&(of.copy(s).invert(),Il.copy(e.ray).applyMatrix4(of),!(this.boundingBox!==null&&Il.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Il)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===W_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;nf.fromBufferAttribute(s.attributes.skinIndex,e),sf.fromBufferAttribute(s.attributes.skinWeight,e),tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=sf.getComponent(r);if(o!==0){const a=nf.getComponent(r);rf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(X0.copy(tf).applyMatrix4(rf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bp extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vu extends Ht{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ot,u=Ot,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const af=new Qe,Y0=new Qe;class ku{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Y0;af.multiplyMatrices(a,t[r]),af.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ku(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Vu(t,e,e,Rn,wn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(Oe("Skeleton: No bone found with UUID:",r),o=new Bp),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Jc extends rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zs=new Qe,lf=new Qe,jo=[],cf=new kn,K0=new Qe,Ir=new jt,Dr=new li;class q0 extends jt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,K0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),cf.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(cf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),Dr.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(i),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),lf.multiplyMatrices(i,zs),Ir.matrixWorld=lf,Ir.raycast(e,jo);for(let o=0,a=jo.length;o<a;o++){const l=jo[o];l.instanceId=r,l.object=this,t.push(l)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vu(new Float32Array(s*this.count),s,this.count,Ru,wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dl=new V,$0=new V,Z0=new Ze;class ji{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Dl.subVectors(i,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Z0.getNormalMatrix(e),s=this.coplanarPoint(Dl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new li,J0=new je(.5,.5),Yo=new V;class zu{constructor(e=new ji,t=new ji,i=new ji,s=new ji,r=new ji,o=new ji){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],m=r[7],_=r[8],v=r[9],p=r[10],d=r[11],M=r[12],S=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,m-u,d-_,A-M).normalize(),s[1].setComponents(c+o,m+u,d+_,A+M).normalize(),s[2].setComponents(c+a,m+h,d+v,A+S).normalize(),s[3].setComponents(c-a,m-h,d-v,A-S).normalize(),i)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,m-f,d-p,A-y).normalize();else if(s[4].setComponents(c-l,m-f,d-p,A-y).normalize(),t===Qn)s[5].setComponents(c+l,m+f,d+p,A+y).normalize();else if(t===ba)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=J0.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Yo.x=s.normal.x>0?e.max.x:e.min.x,Yo.y=s.normal.y>0?e.max.y:e.min.y,Yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vs extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new V,Aa=new V,uf=new Qe,Nr=new mr,Ko=new li,Nl=new V,hf=new V;class Hu extends Pt{constructor(e=new Gt,t=new vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),Aa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new vt(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;uf.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(uf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=c){const d=u.getX(v),M=u.getX(v+1),S=qo(this,e,Nr,l,d,M,v);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(_-1),p=u.getX(m),d=qo(this,e,Nr,l,v,p,_-1);d&&t.push(d)}}else{const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=c){const d=qo(this,e,Nr,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=qo(this,e,Nr,l,_-1,m,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ta.fromBufferAttribute(a,s),Aa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ta,Aa,Nl,hf)>i)return;Nl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Nl);if(!(c<e.near||c>e.far))return{distance:c,point:hf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const ff=new V,df=new V;class uo extends Hu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ff.fromBufferAttribute(t,s),df.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ff.distanceTo(df);e.setAttribute("lineDistance",new vt(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q0 extends Hu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gs extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pf=new Qe,Qc=new mr,$o=new li,Zo=new V;class Zr extends Pt{constructor(e=new Gt,t=new gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;pf.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(pf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,v=m;_<v;_++){const p=c.getX(_);Zo.fromBufferAttribute(h,p),mf(Zo,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,v=m;_<v;_++)Zo.fromBufferAttribute(h,_),mf(Zo,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mf(n,e,t,i,s,r,o){const a=Qc.distanceSqToPoint(n);if(a<t){const l=new V;Qc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ho extends Ht{constructor(e,t,i=ri,s,r,o,a=Ot,l=Ot,c,u=Ni,h=1){if(u!==Ni&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ex extends ho{constructor(e,t=ri,i=ys,s,r,o=Ot,a=Ot,l,c=Ni){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vp extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Va extends Gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const M=d*f-o;for(let S=0;S<c;S++){const y=S*h-r;_.push(y,-M,0),v.push(0,0,1),p.push(S/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const S=M+c*d,y=M+c*(d+1),A=M+1+c*(d+1),R=M+1+c*d;m.push(S,y,R),m.push(y,A,R)}this.setIndex(m),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.widthSegments,e.heightSegments)}}class tx extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fo extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends fo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nx extends _n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ix extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sx extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Jo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function rx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function gf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function kp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class xo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ox extends xo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dh:r=e,a=2*t-i;break;case Nh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dh:o=e,l=2*i-t;break;case Nh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(i-t)/(s-t),v=_*_,p=v*_,d=-f*p+2*f*v-f*_,M=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*_+1,S=(-1-m)*p+(1.5+m)*v+.5*_,y=m*p-m*v;for(let A=0;A!==a;++A)r[A]=d*o[u+A]+M*o[c+A]+S*o[l+A]+y*o[h+A];return r}}class ax extends xo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class lx extends xo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jo(t,this.TimeBufferType),this.values=Jo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jo(e.times,Array),values:Jo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ox(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&t0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===cl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,m=h+i;for(let _=0;_!==i;++_){const v=t[h+_];if(v!==t[f+_]||v!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=ao;class gr extends Hn{constructor(e,t,i){super(e,t,i)}}gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=oo;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class zp extends Hn{constructor(e,t,i,s){super(e,t,i,s)}}zp.prototype.ValueTypeName="color";class hr extends Hn{constructor(e,t,i,s){super(e,t,i,s)}}hr.prototype.ValueTypeName="number";class cx extends xo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)oi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class fr extends Hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new cx(this.times,this.values,this.getValueSize(),e)}}fr.prototype.ValueTypeName="quaternion";fr.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends Hn{constructor(e,t,i){super(e,t,i)}}_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=oo;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends Hn{constructor(e,t,i,s){super(e,t,i,s)}}dr.prototype.ValueTypeName="vector";class ux{constructor(e="",t=-1,i=[],s=X_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(fx(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Hn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=rx(l);l=gf(l,1,u),c=gf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new hr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(Oe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return We("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,m,_,v){if(m.length!==0){const p=[],d=[];kp(m,p,d,_),p.length!==0&&v.push(new h(f,p,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)m[f[_].morphTargets[v]]=-1;for(const v in m){const p=[],d=[];for(let M=0;M!==f[_].morphTargets.length;++M){const S=f[_];p.push(S.time),d.push(S.morphTarget===v?1:0)}s.push(new hr(".morphTargetInfluence["+v+"]",p,d))}l=m.length*o}else{const m=".bones["+t[h].name+"]";i(dr,m+".position",f,"pos",s),i(fr,m+".quaternion",f,"rot",s),i(dr,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function hx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hr;case"vector":case"vector2":case"vector3":case"vector4":return dr;case"color":return zp;case"quaternion":return fr;case"bool":case"boolean":return gr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function fx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hx(n.type);if(n.times===void 0){const t=[],i=[];kp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ei={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dx{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const px=new dx;class Qi{constructor(e){this.manager=e!==void 0?e:px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class mx extends Error{constructor(e,t){super(e),this.response=t}}class ka extends Qi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ei.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:i,onError:s});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=xi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,_=m!==0;let v=0;const p=new ReadableStream({start(d){M();function M(){h.read().then(({done:S,value:y})=>{if(S)d.close();else{v+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let R=0,P=u.length;R<P;R++){const z=u[R];z.onProgress&&z.onProgress(A)}d.enqueue(y),M()}},S=>{d.error(S)})}}});return new Response(p)}else throw new mx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Ei.add(`file:${e}`,c);const u=xi[e];delete xi[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hs=new WeakMap;class gx extends Qi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ei.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Hs.get(o);h===void 0&&(h=[],Hs.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=lo("img");function l(){u(),t&&t(this);const h=Hs.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onLoad&&m.onLoad(this)}Hs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ei.remove(`image:${e}`);const f=Hs.get(this)||[];for(let m=0;m<f.length;m++){const _=f[m];_.onError&&_.onError(h)}Hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ei.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class _x extends Qi{constructor(e){super(e)}load(e,t,i,s){const r=new Ht,o=new gx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class za extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ul=new Qe,_f=new V,xf=new V;class Gu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zu,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_f.setFromMatrixPosition(e.matrixWorld),t.position.copy(_f),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xx extends Gu{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vx extends za{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class yx extends Gu{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}}class Mx extends za{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ha extends Up{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sx extends Gu{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Sx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class bx extends za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Fl=new WeakMap;class Ex extends Qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ei.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Fl.has(o)===!0)s&&s(Fl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ei.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Fl.set(l,c),Ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Tx extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wu="\\[\\]\\.:\\/",Ax=new RegExp("["+Wu+"]","g"),Xu="[^"+Wu+"]",wx="[^"+Wu.replace("\\.","")+"]",Rx=/((?:WC+[\/:])*)/.source.replace("WC",Xu),Cx=/(WCOD+)?/.source.replace("WCOD",wx),Px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),Ix=new RegExp("^"+Rx+Cx+Px+Lx+"$"),Dx=["material","materials","bones","map"];class Nx{constructor(e,t,i){const s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class xt{constructor(e,t,i){this.path=t,this.parsedPath=i||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,i):new xt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ax,"")}static parseTrackName(e){const t=Ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Dx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=Nx;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const vf=new Qe;class Ux{constructor(e,t,i=0,s=1/0){this.ray=new mr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(e,t=!0,i=[]){return eu(e,this,i,t),i.sort(yf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)eu(e[s],this,i,t);return i.sort(yf),i}}function yf(n,e){return n.distance-e.distance}function eu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)eu(r[o],e,t,!0)}}class Mf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fx extends uo{constructor(e=10,t=10,i=4473924,s=8947848){i=new Be(i),s=new Be(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,m=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=f===r?i:s;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Gt;u.setAttribute("position",new vt(l,3)),u.setAttribute("color",new vt(c,3));const h=new vs({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ox extends uo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Gt;s.setAttribute("position",new vt(t,3)),s.setAttribute("color",new vt(i,3));const r=new vs({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new Be,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bx extends Ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Sf(n,e,t,i){const s=Vx(i);switch(t){case Tp:return n*e;case Ru:return n*e/s.components*s.byteLength;case Cu:return n*e/s.components*s.byteLength;case lr:return n*e*2/s.components*s.byteLength;case Pu:return n*e*2/s.components*s.byteLength;case Ap:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case Lu:return n*e*4/s.components*s.byteLength;case ca:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ha:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vc:case Mc:return Math.max(n,16)*Math.max(e,8)/4;case xc:case yc:return Math.max(n,8)*Math.max(e,8)/2;case Sc:case bc:case Tc:case Ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ec:case wc:case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gc:case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jc:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vx(n){switch(n){case mn:case Mp:return{byteLength:1,components:1};case so:case Sp:case Di:return{byteLength:2,components:1};case Au:case wu:return{byteLength:2,components:4};case ri:case Tu:case wn:return{byteLength:4,components:1};case bp:case Ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);function Gp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function kx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],v=h[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const v=h[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ev=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_v="gl_FragColor = linearToOutputTexel( gl_FragColor );",xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$v=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,my=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,My=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ey=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ty=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ny=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:zx,alphahash_pars_fragment:Hx,alphamap_fragment:Gx,alphamap_pars_fragment:Wx,alphatest_fragment:Xx,alphatest_pars_fragment:jx,aomap_fragment:Yx,aomap_pars_fragment:Kx,batching_pars_vertex:qx,batching_vertex:$x,begin_vertex:Zx,beginnormal_vertex:Jx,bsdfs:Qx,iridescence_fragment:ev,bumpmap_pars_fragment:tv,clipping_planes_fragment:nv,clipping_planes_pars_fragment:iv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:rv,color_fragment:ov,color_pars_fragment:av,color_pars_vertex:lv,color_vertex:cv,common:uv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:fv,displacementmap_pars_vertex:dv,displacementmap_vertex:pv,emissivemap_fragment:mv,emissivemap_pars_fragment:gv,colorspace_fragment:_v,colorspace_pars_fragment:xv,envmap_fragment:vv,envmap_common_pars_fragment:yv,envmap_pars_fragment:Mv,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Dv,envmap_vertex:bv,fog_vertex:Ev,fog_pars_vertex:Tv,fog_fragment:Av,fog_pars_fragment:wv,gradientmap_pars_fragment:Rv,lightmap_pars_fragment:Cv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Iv,lights_toon_fragment:Nv,lights_toon_pars_fragment:Uv,lights_phong_fragment:Fv,lights_phong_pars_fragment:Ov,lights_physical_fragment:Bv,lights_physical_pars_fragment:Vv,lights_fragment_begin:kv,lights_fragment_maps:zv,lights_fragment_end:Hv,logdepthbuf_fragment:Gv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:jv,map_fragment:Yv,map_pars_fragment:Kv,map_particle_fragment:qv,map_particle_pars_fragment:$v,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:Jv,morphinstance_vertex:Qv,morphcolor_vertex:ey,morphnormal_vertex:ty,morphtarget_pars_vertex:ny,morphtarget_vertex:iy,normal_fragment_begin:sy,normal_fragment_maps:ry,normal_pars_fragment:oy,normal_pars_vertex:ay,normal_vertex:ly,normalmap_pars_fragment:cy,clearcoat_normal_fragment_begin:uy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:fy,iridescence_pars_fragment:dy,opaque_fragment:py,packing:my,premultiplied_alpha_fragment:gy,project_vertex:_y,dithering_fragment:xy,dithering_pars_fragment:vy,roughnessmap_fragment:yy,roughnessmap_pars_fragment:My,shadowmap_pars_fragment:Sy,shadowmap_pars_vertex:by,shadowmap_vertex:Ey,shadowmask_pars_fragment:Ty,skinbase_vertex:Ay,skinning_pars_vertex:wy,skinning_vertex:Ry,skinnormal_vertex:Cy,specularmap_fragment:Py,specularmap_pars_fragment:Ly,tonemapping_fragment:Iy,tonemapping_pars_fragment:Dy,transmission_fragment:Ny,transmission_pars_fragment:Uy,uv_pars_fragment:Fy,uv_pars_vertex:Oy,uv_vertex:By,worldpos_vertex:Vy,background_vert:ky,background_frag:zy,backgroundCube_vert:Hy,backgroundCube_frag:Gy,cube_vert:Wy,cube_frag:Xy,depth_vert:jy,depth_frag:Yy,distance_vert:Ky,distance_frag:qy,equirect_vert:$y,equirect_frag:Zy,linedashed_vert:Jy,linedashed_frag:Qy,meshbasic_vert:eM,meshbasic_frag:tM,meshlambert_vert:nM,meshlambert_frag:iM,meshmatcap_vert:sM,meshmatcap_frag:rM,meshnormal_vert:oM,meshnormal_frag:aM,meshphong_vert:lM,meshphong_frag:cM,meshphysical_vert:uM,meshphysical_frag:hM,meshtoon_vert:fM,meshtoon_frag:dM,points_vert:pM,points_frag:mM,shadow_vert:gM,shadow_frag:_M,sprite_vert:xM,sprite_frag:vM},Re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Zn={basic:{uniforms:en([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:en([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Be(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:en([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:en([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:en([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Be(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:en([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:en([Re.points,Re.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:en([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:en([Re.common,Re.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:en([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:en([Re.sprite,Re.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:en([Re.common,Re.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:en([Re.lights,Re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Zn.physical={uniforms:en([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Qo={r:0,b:0,g:0},as=new zn,yM=new Qe;function MM(n,e,t,i,s,r,o){const a=new Be(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function v(S){let y=!1;const A=_(S);A===null?d(a,l):A&&A.isColor&&(d(A,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,y){const A=_(y);A&&(A.isCubeTexture||A.mapping===Ba)?(u===void 0&&(u=new jt(new _o(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:ur(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),as.copy(y.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yM.makeRotationFromEuler(as)),u.material.toneMapped=rt.getTransfer(A.colorSpace)!==gt,(h!==A||f!==A.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,m=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new jt(new Va(2,2),new ai({name:"BackgroundMaterial",uniforms:ur(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=rt.getTransfer(A.colorSpace)!==gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,y){S.getRGB(Qo,Np(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,y,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:v,addToRenderList:p,dispose:M}}function SM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(w,N,Y,G,$){let J=!1;const q=h(G,Y,N);r!==q&&(r=q,c(r.object)),J=m(w,G,Y,$),J&&_(w,G,Y,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(w,N,Y,G),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function h(w,N,Y){const G=Y.wireframe===!0;let $=i[w.id];$===void 0&&($={},i[w.id]=$);let J=$[N.id];J===void 0&&(J={},$[N.id]=J);let q=J[G];return q===void 0&&(q=f(l()),J[G]=q),q}function f(w){const N=[],Y=[],G=[];for(let $=0;$<t;$++)N[$]=0,Y[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:G,object:w,attributes:{},index:null}}function m(w,N,Y,G){const $=r.attributes,J=N.attributes;let q=0;const k=Y.getAttributes();for(const ee in k)if(k[ee].location>=0){const me=$[ee];let Me=J[ee];if(Me===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),me===void 0||me.attribute!==Me||Me&&me.data!==Me.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function _(w,N,Y,G){const $={},J=N.attributes;let q=0;const k=Y.getAttributes();for(const ee in k)if(k[ee].location>=0){let me=J[ee];me===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const Me={};Me.attribute=me,me&&me.data&&(Me.data=me.data),$[ee]=Me,q++}r.attributes=$,r.attributesNum=q,r.index=G}function v(){const w=r.newAttributes;for(let N=0,Y=w.length;N<Y;N++)w[N]=0}function p(w){d(w,0)}function d(w,N){const Y=r.newAttributes,G=r.enabledAttributes,$=r.attributeDivisors;Y[w]=1,G[w]===0&&(n.enableVertexAttribArray(w),G[w]=1),$[w]!==N&&(n.vertexAttribDivisor(w,N),$[w]=N)}function M(){const w=r.newAttributes,N=r.enabledAttributes;for(let Y=0,G=N.length;Y<G;Y++)N[Y]!==w[Y]&&(n.disableVertexAttribArray(Y),N[Y]=0)}function S(w,N,Y,G,$,J,q){q===!0?n.vertexAttribIPointer(w,N,Y,$,J):n.vertexAttribPointer(w,N,Y,G,$,J)}function y(w,N,Y,G){v();const $=G.attributes,J=Y.getAttributes(),q=N.defaultAttributeValues;for(const k in J){const ee=J[k];if(ee.location>=0){let ye=$[k];if(ye===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor)),ye!==void 0){const me=ye.normalized,Me=ye.itemSize,ke=e.get(ye);if(ke===void 0)continue;const ze=ke.buffer,ht=ke.type,lt=ke.bytesPerElement,te=ht===n.INT||ht===n.UNSIGNED_INT||ye.gpuType===Tu;if(ye.isInterleavedBufferAttribute){const ce=ye.data,Pe=ce.stride,Ge=ye.offset;if(ce.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ee.locationSize;Ee++)d(ee.location+Ee,ce.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ee=0;Ee<ee.locationSize;Ee++)p(ee.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let Ee=0;Ee<ee.locationSize;Ee++)S(ee.location+Ee,Me/ee.locationSize,ht,me,Pe*lt,(Ge+Me/ee.locationSize*Ee)*lt,te)}else{if(ye.isInstancedBufferAttribute){for(let ce=0;ce<ee.locationSize;ce++)d(ee.location+ce,ye.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ce=0;ce<ee.locationSize;ce++)p(ee.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ce=0;ce<ee.locationSize;ce++)S(ee.location+ce,Me/ee.locationSize,ht,me,Me*lt,Me/ee.locationSize*ce*lt,te)}}else if(q!==void 0){const me=q[k];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(ee.location,me);break;case 3:n.vertexAttrib3fv(ee.location,me);break;case 4:n.vertexAttrib4fv(ee.location,me);break;default:n.vertexAttrib1fv(ee.location,me)}}}}M()}function A(){z();for(const w in i){const N=i[w];for(const Y in N){const G=N[Y];for(const $ in G)u(G[$].object),delete G[$];delete N[Y]}delete i[w]}}function R(w){if(i[w.id]===void 0)return;const N=i[w.id];for(const Y in N){const G=N[Y];for(const $ in G)u(G[$].object),delete G[$];delete N[Y]}delete i[w.id]}function P(w){for(const N in i){const Y=i[N];if(Y[w.id]===void 0)continue;const G=Y[w.id];for(const $ in G)u(G[$].object),delete G[$];delete Y[w.id]}}function z(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function bM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,i,1)}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function EM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Rn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const z=P===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==mn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wn&&!z)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,maxSamples:A,samples:R}}function TM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ji,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const M=r?0:i,S=M*4;let y=d.clippingState||null;l.value=y,y=u(_,f,S,m);for(let A=0;A!==S;++A)y[A]=t[A];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,y=m;S!==v;++S,y+=4)o.copy(h[S]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function AM(n){let e=new WeakMap;function t(o,a){return a===gc?o.mapping=ys:a===_c&&(o.mapping=or),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gc||a===_c)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Op(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const qi=4,bf=[.125,.215,.35,.446,.526,.582],fs=20,wM=256,Ur=new Ha,Ef=new Be;let Ol=null,Bl=0,Vl=0,kl=!1;const RM=new V;class Tf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=RM}=r;Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Bl,Vl),this._renderer.xr.enabled=kl,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Di,format:Rn,colorSpace:an,depthBuffer:!1},s=Af(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Af(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CM(r)),this._blurMaterial=LM(r,e,t),this._ggxMaterial=PM(r,e,t)}return s}_compileMaterial(e){const t=new jt(new Gt,e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,i,s,r){const l=new nn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Ef),h.toneMapping=ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new _o,new ms({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let d=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,d=!0):(p.color.copy(Ef),d=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const A=this._cubeSize;Gs(s,y*A,S>2?A:0,A,A),h.setRenderTarget(s),d&&h.render(v,l),h.render(e,l)}h.toneMapping=m,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ys||e.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ur)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,m=h*f,{_lodMax:_}=this,v=this._sizeLods[i],p=3*v*(i>_-qi?i-_+qi:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,Gs(r,p,d,3*v,2*v),s.setRenderTarget(r),s.render(a,Ur),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Gs(e,p,d,3*v,2*v),s.setRenderTarget(e),s.render(a,Ur)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*fs-1),v=r/_,p=isFinite(r)?1+Math.floor(u*v):fs;p>fs&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fs}`);const d=[];let M=0;for(let P=0;P<fs;++P){const z=P/v,b=Math.exp(-z*z/2);d.push(b),P===0?M+=b:P<p&&(M+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const y=this._sizeLods[s],A=3*y*(s>S-qi?s-S+qi:0),R=4*(this._cubeSize-y);Gs(t,A,R,3*y,2*y),l.setRenderTarget(t),l.render(h,Ur)}}function CM(n){const e=[],t=[],i=[];let s=n;const r=n-qi+1+bf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qi?l=bf[o-n+qi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,p=2,d=1,M=new Float32Array(v*_*m),S=new Float32Array(p*_*m),y=new Float32Array(d*_*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,z=R>2?0:-1,b=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];M.set(b,v*_*R),S.set(f,p*_*R);const w=[R,R,R,R,R,R];y.set(w,d*_*R)}const A=new Gt;A.setAttribute("position",new rn(M,v)),A.setAttribute("uv",new rn(S,p)),A.setAttribute("faceIndex",new rn(y,d)),i.push(new jt(A,null)),s>qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Af(n,e,t){const i=new ni(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function PM(n,e,t){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ga(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function LM(n,e,t){const i=new Float32Array(fs),s=new V(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function wf(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Rf(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gc||l===_c,u=l===ys||l===or;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Tf(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Tf(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function DM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&co("WebGLRenderer: "+i+" extension not supported."),s}}}function NM(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const M=m.array;v=m.version;for(let S=0,y=M.length;S<y;S+=3){const A=M[S+0],R=M[S+1],P=M[S+2];f.push(A,R,R,P,P,A)}}else if(_!==void 0){const M=_.array;v=_.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const A=S+0,R=S+1,P=S+2;f.push(A,R,R,P,P,A)}}else return;const p=new(Rp(f)?Dp:Ip)(f,1);p.version=v;const d=r.get(h);d&&e.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function UM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),t.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,f*o,_),t.update(m,i,_))}function u(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,i,1)}function h(f,m,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,v,0,_);let d=0;for(let M=0;M<_;M++)d+=m[M]*v[M];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function FM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function OM(n,e,t){const i=new WeakMap,s=new Rt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let w=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var m=w;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*R*4*h),z=new Pp(P,A,R,h);z.type=wn,z.needsUpdate=!0;const b=y*4;for(let N=0;N<h;N++){const Y=d[N],G=M[N],$=S[N],J=A*R*4*N;for(let q=0;q<Y.count;q++){const k=q*b;_===!0&&(s.fromBufferAttribute(Y,q),P[J+k+0]=s.x,P[J+k+1]=s.y,P[J+k+2]=s.z,P[J+k+3]=0),v===!0&&(s.fromBufferAttribute(G,q),P[J+k+4]=s.x,P[J+k+5]=s.y,P[J+k+6]=s.z,P[J+k+7]=0),p===!0&&(s.fromBufferAttribute($,q),P[J+k+8]=s.x,P[J+k+9]=s.y,P[J+k+10]=s.z,P[J+k+11]=$.itemSize===4?s.w:1)}}f={count:h,texture:z,size:new je(A,R)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function BM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const VM={[fp]:"LINEAR_TONE_MAPPING",[dp]:"REINHARD_TONE_MAPPING",[pp]:"CINEON_TONE_MAPPING",[mp]:"ACES_FILMIC_TONE_MAPPING",[_p]:"AGX_TONE_MAPPING",[xp]:"NEUTRAL_TONE_MAPPING",[gp]:"CUSTOM_TONE_MAPPING"};function kM(n,e,t,i,s){const r=new ni(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new ni(e,t,{type:Di,depthBuffer:!1,stencilBuffer:!1}),a=new Gt;a.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new vt([0,2,0,0,2,0],2));const l=new tx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new jt(a,l),u=new Ha(-1,1,1,-1,0,1);let h=null,f=null,m=!1,_,v=null,p=[],d=!1;this.setSize=function(M,S){r.setSize(M,S),o.setSize(M,S);for(let y=0;y<p.length;y++){const A=p[y];A.setSize&&A.setSize(M,S)}},this.setEffects=function(M){p=M,d=p.length>0&&p[0].isRenderPass===!0;const S=r.width,y=r.height;for(let A=0;A<p.length;A++){const R=p[A];R.setSize&&R.setSize(S,y)}},this.begin=function(M,S){if(m||M.toneMapping===ti&&p.length===0)return!1;if(v=S,S!==null){const y=S.width,A=S.height;(r.width!==y||r.height!==A)&&this.setSize(y,A)}return d===!1&&M.setRenderTarget(r),_=M.toneMapping,M.toneMapping=ti,!0},this.hasRenderPass=function(){return d},this.end=function(M,S){M.toneMapping=_,m=!0;let y=r,A=o;for(let R=0;R<p.length;R++){const P=p[R];if(P.enabled!==!1&&(P.render(M,A,y,S),P.needsSwap!==!1)){const z=y;y=A,A=z}}if(h!==M.outputColorSpace||f!==M.toneMapping){h=M.outputColorSpace,f=M.toneMapping,l.defines={},rt.getTransfer(h)===gt&&(l.defines.SRGB_TRANSFER="");const R=VM[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(v),M.render(c,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Wp=new Ht,tu=new ho(1,1),Xp=new Pp,jp=new T0,Yp=new Fp,Cf=[],Pf=[],Lf=new Float32Array(16),If=new Float32Array(9),Df=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wa(n,e){let t=Pf[e];t===void 0&&(t=new Int32Array(e),Pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function XM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Vt(t,i))return;Df.set(i),n.uniformMatrix2fv(this.addr,!1,Df),kt(t,i)}}function jM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Vt(t,i))return;If.set(i),n.uniformMatrix3fv(this.addr,!1,If),kt(t,i)}}function YM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Vt(t,i))return;Lf.set(i),n.uniformMatrix4fv(this.addr,!1,Lf),kt(t,i)}}function KM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function JM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function nS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tu.compareFunction=t.isReversedDepthBuffer()?Nu:Du,r=tu):r=Wp,t.setTexture2D(e||r,s)}function iS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jp,s)}function sS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Yp,s)}function rS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xp,s)}function oS(n){switch(n){case 5126:return zM;case 35664:return HM;case 35665:return GM;case 35666:return WM;case 35674:return XM;case 35675:return jM;case 35676:return YM;case 5124:case 35670:return KM;case 35667:case 35671:return qM;case 35668:case 35672:return $M;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return QM;case 36295:return eS;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return rS}}function aS(n,e){n.uniform1fv(this.addr,e)}function lS(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function cS(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function uS(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function hS(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fS(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dS(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pS(n,e){n.uniform1iv(this.addr,e)}function mS(n,e){n.uniform2iv(this.addr,e)}function gS(n,e){n.uniform3iv(this.addr,e)}function _S(n,e){n.uniform4iv(this.addr,e)}function xS(n,e){n.uniform1uiv(this.addr,e)}function vS(n,e){n.uniform2uiv(this.addr,e)}function yS(n,e){n.uniform3uiv(this.addr,e)}function MS(n,e){n.uniform4uiv(this.addr,e)}function SS(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=tu:o=Wp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function bS(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jp,r[o])}function ES(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Yp,r[o])}function TS(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Xp,r[o])}function AS(n){switch(n){case 5126:return aS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return hS;case 35675:return fS;case 35676:return dS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return _S;case 5125:return xS;case 36294:return vS;case 36295:return yS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return TS}}class wS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oS(t.type)}}class RS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AS(t.type)}}class CS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function Nf(n,e){n.seq.push(e),n.map[e.id]=e}function PS(n,e,t){const i=n.name,s=i.length;for(zl.lastIndex=0;;){const r=zl.exec(i),o=zl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nf(t,c===void 0?new wS(a,n,e):new RS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new CS(a),Nf(t,h)),t=h}}}class da{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);PS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Uf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const LS=37297;let IS=0;function DS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ff=new Ze;function NS(n){rt._getMatrix(Ff,rt.workingColorSpace,n);const e=`mat3( ${Ff.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Sa:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Of(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+DS(n.getShaderSource(e),a)}else return r}function US(n,e){const t=NS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const FS={[fp]:"Linear",[dp]:"Reinhard",[pp]:"Cineon",[mp]:"ACESFilmic",[_p]:"AgX",[xp]:"Neutral",[gp]:"Custom"};function OS(n,e){const t=FS[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new V;function BS(){rt.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function kS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zr(n){return n!==""}function Bf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HS=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(n){return n.replace(HS,WS)}const GS=new Map;function WS(n,e){let t=et[e];if(t===void 0){const i=GS.get(e);if(i!==void 0)t=et[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nu(t)}const XS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(n){return n.replace(XS,jS)}function jS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const YS={[aa]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function KS(n){return YS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qS={[ys]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function $S(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":qS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZS={[or]:"ENVMAP_MODE_REFRACTION"};function JS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ZS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QS={[Eu]:"ENVMAP_BLENDING_MULTIPLY",[H_]:"ENVMAP_BLENDING_MIX",[G_]:"ENVMAP_BLENDING_ADD"};function eb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":QS[n.combine]||"ENVMAP_BLENDING_NONE"}function tb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KS(t),c=$S(t),u=JS(t),h=eb(t),f=tb(t),m=VS(t),_=kS(r),v=s.createProgram();let p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zr).join(`
`),d.length>0&&(d+=`
`)):(p=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),d=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?et.tonemapping_pars_fragment:"",t.toneMapping!==ti?OS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,US("linearToOutputTexel",t.outputColorSpace),BS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),o=nu(o),o=Bf(o,t),o=Vf(o,t),a=nu(a),a=Bf(a,t),a=Vf(a,t),o=kf(o),a=kf(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=M+p+o,y=M+d+a,A=Uf(s,s.VERTEX_SHADER,S),R=Uf(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(N){if(n.debug.checkShaderErrors){const Y=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(A)||"",$=s.getShaderInfoLog(R)||"",J=Y.trim(),q=G.trim(),k=$.trim();let ee=!0,ye=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,R);else{const me=Of(s,A,"vertex"),Me=Of(s,R,"fragment");We("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+J+`
`+me+`
`+Me)}else J!==""?Oe("WebGLProgram: Program Info Log:",J):(q===""||k==="")&&(ye=!1);ye&&(N.diagnostics={runnable:ee,programLog:J,vertexShader:{log:q,prefix:p},fragmentShader:{log:k,prefix:d}})}s.deleteShader(A),s.deleteShader(R),z=new da(s,v),b=zS(s,v)}let z;this.getUniforms=function(){return z===void 0&&P(this),z};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,LS)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let ib=0;class sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rb(e),t.set(e,i)),i}}class rb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function ob(n,e,t,i,s,r,o){const a=new Ou,l=new sb,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,w,N,Y,G){const $=Y.fog,J=G.geometry,q=b.isMeshStandardMaterial?Y.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),ee=k&&k.mapping===Ba?k.image.height:null,ye=_[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&Oe("WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Me=me!==void 0?me.length:0;let ke=0;J.morphAttributes.position!==void 0&&(ke=1),J.morphAttributes.normal!==void 0&&(ke=2),J.morphAttributes.color!==void 0&&(ke=3);let ze,ht,lt,te;if(ye){const ct=Zn[ye];ze=ct.vertexShader,ht=ct.fragmentShader}else ze=b.vertexShader,ht=b.fragmentShader,l.update(b),lt=l.getVertexShaderID(b),te=l.getFragmentShaderID(b);const ce=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ge=G.isInstancedMesh===!0,Ee=G.isBatchedMesh===!0,tt=!!b.map,I=!!b.matcap,F=!!k,X=!!b.aoMap,ie=!!b.lightMap,Z=!!b.bumpMap,ne=!!b.normalMap,C=!!b.displacementMap,he=!!b.emissiveMap,oe=!!b.metalnessMap,K=!!b.roughnessMap,ae=b.anisotropy>0,T=b.clearcoat>0,x=b.dispersion>0,D=b.iridescence>0,j=b.sheen>0,Q=b.transmission>0,W=ae&&!!b.anisotropyMap,Te=T&&!!b.clearcoatMap,pe=T&&!!b.clearcoatNormalMap,Ce=T&&!!b.clearcoatRoughnessMap,Fe=D&&!!b.iridescenceMap,fe=D&&!!b.iridescenceThicknessMap,ve=j&&!!b.sheenColorMap,Se=j&&!!b.sheenRoughnessMap,Le=!!b.specularMap,xe=!!b.specularColorMap,Ke=!!b.specularIntensityMap,B=Q&&!!b.transmissionMap,Ae=Q&&!!b.thicknessMap,_e=!!b.gradientMap,Ie=!!b.alphaMap,de=b.alphaTest>0,le=!!b.alphaHash,be=!!b.extensions;let qe=ti;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(qe=n.toneMapping);const pt={shaderID:ye,shaderType:b.type,shaderName:b.name,vertexShader:ze,fragmentShader:ht,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&G._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&G.instanceColor!==null,instancingMorph:Ge&&G.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:an,alphaToCoverage:!!b.alphaToCoverage,map:tt,matcap:I,envMap:F,envMapMode:F&&k.mapping,envMapCubeUVHeight:ee,aoMap:X,lightMap:ie,bumpMap:Z,normalMap:ne,displacementMap:C,emissiveMap:he,normalMapObjectSpace:ne&&b.normalMapType===K_,normalMapTangentSpace:ne&&b.normalMapType===Iu,metalnessMap:oe,roughnessMap:K,anisotropy:ae,anisotropyMap:W,clearcoat:T,clearcoatMap:Te,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ce,dispersion:x,iridescence:D,iridescenceMap:Fe,iridescenceThicknessMap:fe,sheen:j,sheenColorMap:ve,sheenRoughnessMap:Se,specularMap:Le,specularColorMap:xe,specularIntensityMap:Ke,transmission:Q,transmissionMap:B,thicknessMap:Ae,gradientMap:_e,opaque:b.transparent===!1&&b.blending===Js&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:de,alphaHash:le,combine:b.combine,mapUv:tt&&v(b.map.channel),aoMapUv:X&&v(b.aoMap.channel),lightMapUv:ie&&v(b.lightMap.channel),bumpMapUv:Z&&v(b.bumpMap.channel),normalMapUv:ne&&v(b.normalMap.channel),displacementMapUv:C&&v(b.displacementMap.channel),emissiveMapUv:he&&v(b.emissiveMap.channel),metalnessMapUv:oe&&v(b.metalnessMap.channel),roughnessMapUv:K&&v(b.roughnessMap.channel),anisotropyMapUv:W&&v(b.anisotropyMap.channel),clearcoatMapUv:Te&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(b.sheenRoughnessMap.channel),specularMapUv:Le&&v(b.specularMap.channel),specularColorMapUv:xe&&v(b.specularColorMap.channel),specularIntensityMapUv:Ke&&v(b.specularIntensityMap.channel),transmissionMapUv:B&&v(b.transmissionMap.channel),thicknessMapUv:Ae&&v(b.thicknessMap.channel),alphaMapUv:Ie&&v(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ne||ae),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(tt||Ie),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pe,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ke,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:tt&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===gt,decodeVideoTextureEmissive:he&&b.emissiveMap.isVideoTexture===!0&&rt.getTransfer(b.emissiveMap.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tn,flipSided:b.side===hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function d(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)w.push(N),w.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(M(w,b),S(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function S(b,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const w=_[b.type];let N;if(w){const Y=Zn[w];N=B0.clone(Y.uniforms)}else N=b.uniforms;return N}function A(b,w){let N=h.get(w);return N!==void 0?++N.usedTimes:(N=new nb(n,w,b,r),u.push(N),h.set(w,N)),N}function R(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),h.delete(b.cacheKey),b.destroy()}}function P(b){l.remove(b)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:z}}function ab(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function lb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,m,_,v,p){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=p),e++,d}function a(h,f,m,_,v,p){const d=o(h,f,m,_,v,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(h,f,m,_,v,p){const d=o(h,f,m,_,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||lb),i.length>1&&i.sort(f||Hf),s.length>1&&s.sort(f||Hf)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function cb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Gf,n.set(i,[o])):s>=r.length?(o=new Gf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Be};break;case"SpotLight":t={position:new V,direction:new V,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function hb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fb=0;function db(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pb(n){const e=new ub,t=hb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new Qe,o=new Qe;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,_=0,v=0,p=0,d=0,M=0,S=0,y=0,A=0,R=0,P=0;c.sort(db);for(let b=0,w=c.length;b<w;b++){const N=c[b],Y=N.color,G=N.intensity,$=N.distance;let J=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===lr?J=N.shadow.map.texture:J=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=Y.r*G,h+=Y.g*G,f+=Y.b*G;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],G);P++}else if(N.isDirectionalLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const k=N.shadow,ee=t.get(N);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=N.shadow.matrix,M++}i.directional[m]=q,m++}else if(N.isSpotLight){const q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(Y).multiplyScalar(G),q.distance=$,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[v]=q;const k=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,k.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[v]=k.matrix,N.castShadow){const ee=t.get(N);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=J,y++}v++}else if(N.isRectAreaLight){const q=e.get(N);q.color.copy(Y).multiplyScalar(G),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[p]=q,p++}else if(N.isPointLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const k=N.shadow,ee=t.get(N);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,ee.shadowCameraNear=k.camera.near,ee.shadowCameraFar=k.camera.far,i.pointShadow[_]=ee,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=N.shadow.matrix,S++}i.point[_]=q,_++}else if(N.isHemisphereLight){const q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(G),q.groundColor.copy(N.groundColor).multiplyScalar(G),i.hemi[d]=q,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const z=i.hash;(z.directionalLength!==m||z.pointLength!==_||z.spotLength!==v||z.rectAreaLength!==p||z.hemiLength!==d||z.numDirectionalShadows!==M||z.numPointShadows!==S||z.numSpotShadows!==y||z.numSpotMaps!==A||z.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,z.directionalLength=m,z.pointLength=_,z.spotLength=v,z.rectAreaLength=p,z.hemiLength=d,z.numDirectionalShadows=M,z.numPointShadows=S,z.numSpotShadows=y,z.numSpotMaps=A,z.numLightProbes=P,i.version=fb++)}function l(c,u){let h=0,f=0,m=0,_=0,v=0;const p=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const S=c[d];if(S.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(S.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Wf(n){const e=new pb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Wf(n),e.set(s,[a])):r>=o.length?(a=new Wf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xb=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],vb=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Xf=new Qe,Fr=new V,Hl=new V;function yb(n,e,t){let i=new zu;const s=new je,r=new je,o=new Rt,a=new ix,l=new sx,c={},u=t.maxTextureSize,h={[Ii]:hn,[hn]:Ii,[Tn]:Tn},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:gb,fragmentShader:_b}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Gt;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let d=this.type;this.render=function(R,P,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;R.type===b_&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=aa);const b=n.getRenderTarget(),w=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(wi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const G=d!==this.type;G&&P.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(J=>J.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,J=R.length;$<J;$++){const q=R[$],k=q.shadow;if(k===void 0){Oe("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ee=k.getFrameExtents();if(s.multiply(ee),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,k.mapSize.y=r.y)),k.map===null||G===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Vr){if(q.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ni(s.x,s.y,{format:lr,type:Di,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new ho(s.x,s.y,wn),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=Ni,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot}else{q.isPointLight?(k.map=new Op(s.x),k.map.depthTexture=new ex(s.x,ri)):(k.map=new ni(s.x,s.y),k.map.depthTexture=new ho(s.x,s.y,ri)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=Ni;const me=n.state.buffers.depth.getReversed();this.type===aa?(k.map.depthTexture.compareFunction=me?Nu:Du,k.map.depthTexture.minFilter=Bt,k.map.depthTexture.magFilter=Bt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot)}k.camera.updateProjectionMatrix()}const ye=k.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ye;me++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,me),n.clear();else{me===0&&(n.setRenderTarget(k.map),n.clear());const Me=k.getViewport(me);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),Y.viewport(o)}if(q.isPointLight){const Me=k.camera,ke=k.matrix,ze=q.distance||Me.far;ze!==Me.far&&(Me.far=ze,Me.updateProjectionMatrix()),Fr.setFromMatrixPosition(q.matrixWorld),Me.position.copy(Fr),Hl.copy(Me.position),Hl.add(xb[me]),Me.up.copy(vb[me]),Me.lookAt(Hl),Me.updateMatrixWorld(),ke.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Xf.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Xf,Me.coordinateSystem,Me.reversedDepth)}else k.updateMatrices(q);i=k.getFrustum(),y(P,z,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Vr&&M(k,z),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(b,w,N)};function M(R,P){const z=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ni(s.x,s.y,{format:lr,type:Di})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,z,f,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,z,m,v,null)}function S(R,P,z,b){let w=null;const N=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)w=N;else if(w=z.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=w.uuid,G=P.uuid;let $=c[Y];$===void 0&&($={},c[Y]=$);let J=$[G];J===void 0&&(J=w.clone(),$[G]=J,P.addEventListener("dispose",A)),w=J}if(w.visible=P.visible,w.wireframe=P.wireframe,b===Vr?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:h[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=n.properties.get(w);Y.light=z}return w}function y(R,P,z,b,w){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Vr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const G=e.update(R),$=R.material;if(Array.isArray($)){const J=G.groups;for(let q=0,k=J.length;q<k;q++){const ee=J[q],ye=$[ee.materialIndex];if(ye&&ye.visible){const me=S(R,ye,b,w);R.onBeforeShadow(n,R,P,z,G,me,ee),n.renderBufferDirect(z,null,G,me,R,ee),R.onAfterShadow(n,R,P,z,G,me,ee)}}}else if($.visible){const J=S(R,$,b,w);R.onBeforeShadow(n,R,P,z,G,J,null),n.renderBufferDirect(z,null,G,J,R,null),R.onAfterShadow(n,R,P,z,G,J,null)}}const Y=R.children;for(let G=0,$=Y.length;G<$;G++)y(Y[G],P,z,b,w)}function A(R){R.target.removeEventListener("dispose",A);for(const z in c){const b=c[z],w=R.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const Mb={[cc]:uc,[hc]:pc,[fc]:mc,[rr]:dc,[uc]:cc,[pc]:hc,[mc]:fc,[dc]:rr};function Sb(n,e){function t(){let B=!1;const Ae=new Rt;let _e=null;const Ie=new Rt(0,0,0,0);return{setMask:function(de){_e!==de&&!B&&(n.colorMask(de,de,de,de),_e=de)},setLocked:function(de){B=de},setClear:function(de,le,be,qe,pt){pt===!0&&(de*=qe,le*=qe,be*=qe),Ae.set(de,le,be,qe),Ie.equals(Ae)===!1&&(n.clearColor(de,le,be,qe),Ie.copy(Ae))},reset:function(){B=!1,_e=null,Ie.set(-1,0,0,0)}}}function i(){let B=!1,Ae=!1,_e=null,Ie=null,de=null;return{setReversed:function(le){if(Ae!==le){const be=e.get("EXT_clip_control");le?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Ae=le;const qe=de;de=null,this.setClear(qe)}},getReversed:function(){return Ae},setTest:function(le){le?ce(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(le){_e!==le&&!B&&(n.depthMask(le),_e=le)},setFunc:function(le){if(Ae&&(le=Mb[le]),Ie!==le){switch(le){case cc:n.depthFunc(n.NEVER);break;case uc:n.depthFunc(n.ALWAYS);break;case hc:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case fc:n.depthFunc(n.EQUAL);break;case dc:n.depthFunc(n.GEQUAL);break;case pc:n.depthFunc(n.GREATER);break;case mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=le}},setLocked:function(le){B=le},setClear:function(le){de!==le&&(Ae&&(le=1-le),n.clearDepth(le),de=le)},reset:function(){B=!1,_e=null,Ie=null,de=null,Ae=!1}}}function s(){let B=!1,Ae=null,_e=null,Ie=null,de=null,le=null,be=null,qe=null,pt=null;return{setTest:function(ct){B||(ct?ce(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(ct){Ae!==ct&&!B&&(n.stencilMask(ct),Ae=ct)},setFunc:function(ct,xn,vn){(_e!==ct||Ie!==xn||de!==vn)&&(n.stencilFunc(ct,xn,vn),_e=ct,Ie=xn,de=vn)},setOp:function(ct,xn,vn){(le!==ct||be!==xn||qe!==vn)&&(n.stencilOp(ct,xn,vn),le=ct,be=xn,qe=vn)},setLocked:function(ct){B=ct},setClear:function(ct){pt!==ct&&(n.clearStencil(ct),pt=ct)},reset:function(){B=!1,Ae=null,_e=null,Ie=null,de=null,le=null,be=null,qe=null,pt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],_=null,v=!1,p=null,d=null,M=null,S=null,y=null,A=null,R=null,P=new Be(0,0,0),z=0,b=!1,w=null,N=null,Y=null,G=null,$=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,k=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ee)[1]),q=k>=1):ee.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),q=k>=2);let ye=null,me={};const Me=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),ze=new Rt().fromArray(Me),ht=new Rt().fromArray(ke);function lt(B,Ae,_e,Ie){const de=new Uint8Array(4),le=n.createTexture();n.bindTexture(B,le),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<_e;be++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Ae+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return le}const te={};te[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),o.setFunc(rr),Z(!1),ne(wh),ce(n.CULL_FACE),X(wi);function ce(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Pe(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Ge(B,Ae){return h[B]!==Ae?(n.bindFramebuffer(B,Ae),h[B]=Ae,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ae),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ee(B,Ae){let _e=m,Ie=!1;if(B){_e=f.get(Ae),_e===void 0&&(_e=[],f.set(Ae,_e));const de=B.textures;if(_e.length!==de.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let le=0,be=de.length;le<be;le++)_e[le]=n.COLOR_ATTACHMENT0+le;_e.length=de.length,Ie=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(_e)}function tt(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const I={[hs]:n.FUNC_ADD,[T_]:n.FUNC_SUBTRACT,[A_]:n.FUNC_REVERSE_SUBTRACT};I[w_]=n.MIN,I[R_]=n.MAX;const F={[C_]:n.ZERO,[P_]:n.ONE,[L_]:n.SRC_COLOR,[ac]:n.SRC_ALPHA,[O_]:n.SRC_ALPHA_SATURATE,[U_]:n.DST_COLOR,[D_]:n.DST_ALPHA,[I_]:n.ONE_MINUS_SRC_COLOR,[lc]:n.ONE_MINUS_SRC_ALPHA,[F_]:n.ONE_MINUS_DST_COLOR,[N_]:n.ONE_MINUS_DST_ALPHA,[B_]:n.CONSTANT_COLOR,[V_]:n.ONE_MINUS_CONSTANT_COLOR,[k_]:n.CONSTANT_ALPHA,[z_]:n.ONE_MINUS_CONSTANT_ALPHA};function X(B,Ae,_e,Ie,de,le,be,qe,pt,ct){if(B===wi){v===!0&&(Pe(n.BLEND),v=!1);return}if(v===!1&&(ce(n.BLEND),v=!0),B!==E_){if(B!==p||ct!==b){if((d!==hs||y!==hs)&&(n.blendEquation(n.FUNC_ADD),d=hs,y=hs),ct)switch(B){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rh:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",B);break}else switch(B){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",B);break}M=null,S=null,A=null,R=null,P.set(0,0,0),z=0,p=B,b=ct}return}de=de||Ae,le=le||_e,be=be||Ie,(Ae!==d||de!==y)&&(n.blendEquationSeparate(I[Ae],I[de]),d=Ae,y=de),(_e!==M||Ie!==S||le!==A||be!==R)&&(n.blendFuncSeparate(F[_e],F[Ie],F[le],F[be]),M=_e,S=Ie,A=le,R=be),(qe.equals(P)===!1||pt!==z)&&(n.blendColor(qe.r,qe.g,qe.b,pt),P.copy(qe),z=pt),p=B,b=!1}function ie(B,Ae){B.side===Tn?Pe(n.CULL_FACE):ce(n.CULL_FACE);let _e=B.side===hn;Ae&&(_e=!_e),Z(_e),B.blending===Js&&B.transparent===!1?X(wi):X(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Ie=B.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),he(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(B){w!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),w=B)}function ne(B){B!==M_?(ce(n.CULL_FACE),B!==N&&(B===wh?n.cullFace(n.BACK):B===S_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),N=B}function C(B){B!==Y&&(q&&n.lineWidth(B),Y=B)}function he(B,Ae,_e){B?(ce(n.POLYGON_OFFSET_FILL),(G!==Ae||$!==_e)&&(n.polygonOffset(Ae,_e),G=Ae,$=_e)):Pe(n.POLYGON_OFFSET_FILL)}function oe(B){B?ce(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function K(B){B===void 0&&(B=n.TEXTURE0+J-1),ye!==B&&(n.activeTexture(B),ye=B)}function ae(B,Ae,_e){_e===void 0&&(ye===null?_e=n.TEXTURE0+J-1:_e=ye);let Ie=me[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},me[_e]=Ie),(Ie.type!==B||Ie.texture!==Ae)&&(ye!==_e&&(n.activeTexture(_e),ye=_e),n.bindTexture(B,Ae||te[B]),Ie.type=B,Ie.texture=Ae)}function T(){const B=me[ye];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function j(){try{n.texSubImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function Q(){try{n.texSubImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function pe(){try{n.texStorage2D(...arguments)}catch(B){We("WebGLState:",B)}}function Ce(){try{n.texStorage3D(...arguments)}catch(B){We("WebGLState:",B)}}function Fe(){try{n.texImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function fe(){try{n.texImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function ve(B){ze.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ze.copy(B))}function Se(B){ht.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ht.copy(B))}function Le(B,Ae){let _e=c.get(Ae);_e===void 0&&(_e=new WeakMap,c.set(Ae,_e));let Ie=_e.get(B);Ie===void 0&&(Ie=n.getUniformBlockIndex(Ae,B.name),_e.set(B,Ie))}function xe(B,Ae){const Ie=c.get(Ae).get(B);l.get(Ae)!==Ie&&(n.uniformBlockBinding(Ae,Ie,B.__bindingPointIndex),l.set(Ae,Ie))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ye=null,me={},h={},f=new WeakMap,m=[],_=null,v=!1,p=null,d=null,M=null,S=null,y=null,A=null,R=null,P=new Be(0,0,0),z=0,b=!1,w=null,N=null,Y=null,G=null,$=null,ze.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Pe,bindFramebuffer:Ge,drawBuffers:Ee,useProgram:tt,setBlending:X,setMaterial:ie,setFlipSided:Z,setCullFace:ne,setLineWidth:C,setPolygonOffset:he,setScissorTest:oe,activeTexture:K,bindTexture:ae,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:Fe,texImage3D:fe,updateUBOMapping:Le,uniformBlockBinding:xe,texStorage2D:pe,texStorage3D:Ce,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:Te,scissor:ve,viewport:Se,reset:Ke}}function bb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return m?new OffscreenCanvas(T,x):lo("canvas")}function v(T,x,D){let j=1;const Q=ae(T);if((Q.width>D||Q.height>D)&&(j=D/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(j*Q.width),Te=Math.floor(j*Q.height);h===void 0&&(h=_(W,Te));const pe=x?_(W,Te):h;return pe.width=W,pe.height=Te,pe.getContext("2d").drawImage(T,0,0,W,Te),Oe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Te+")."),pe}else return"data"in T&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function p(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,x,D,j,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=x;if(x===n.RED&&(D===n.FLOAT&&(W=n.R32F),D===n.HALF_FLOAT&&(W=n.R16F),D===n.UNSIGNED_BYTE&&(W=n.R8)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.R8UI),D===n.UNSIGNED_SHORT&&(W=n.R16UI),D===n.UNSIGNED_INT&&(W=n.R32UI),D===n.BYTE&&(W=n.R8I),D===n.SHORT&&(W=n.R16I),D===n.INT&&(W=n.R32I)),x===n.RG&&(D===n.FLOAT&&(W=n.RG32F),D===n.HALF_FLOAT&&(W=n.RG16F),D===n.UNSIGNED_BYTE&&(W=n.RG8)),x===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RG8UI),D===n.UNSIGNED_SHORT&&(W=n.RG16UI),D===n.UNSIGNED_INT&&(W=n.RG32UI),D===n.BYTE&&(W=n.RG8I),D===n.SHORT&&(W=n.RG16I),D===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGB8UI),D===n.UNSIGNED_SHORT&&(W=n.RGB16UI),D===n.UNSIGNED_INT&&(W=n.RGB32UI),D===n.BYTE&&(W=n.RGB8I),D===n.SHORT&&(W=n.RGB16I),D===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),D===n.UNSIGNED_INT&&(W=n.RGBA32UI),D===n.BYTE&&(W=n.RGBA8I),D===n.SHORT&&(W=n.RGBA16I),D===n.INT&&(W=n.RGBA32I)),x===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),x===n.RGBA){const Te=Q?Sa:rt.getTransfer(j);D===n.FLOAT&&(W=n.RGBA32F),D===n.HALF_FLOAT&&(W=n.RGBA16F),D===n.UNSIGNED_BYTE&&(W=Te===gt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(T,x){let D;return T?x===null||x===ri||x===ro?D=n.DEPTH24_STENCIL8:x===wn?D=n.DEPTH32F_STENCIL8:x===so&&(D=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ri||x===ro?D=n.DEPTH_COMPONENT24:x===wn?D=n.DEPTH_COMPONENT32F:x===so&&(D=n.DEPTH_COMPONENT16),D}function A(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==Bt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),z(x),x.isVideoTexture&&u.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),w(x)}function z(T){const x=i.get(T);if(x.__webglInit===void 0)return;const D=T.source,j=f.get(D);if(j){const Q=j[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(T),Object.keys(j).length===0&&f.delete(D)}i.remove(T)}function b(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const D=T.source,j=f.get(D);delete j[x.__cacheKey],o.memory.textures--}function w(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let Q=0;Q<x.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=T.textures;for(let j=0,Q=D.length;j<Q;j++){const W=i.get(D[j]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(D[j])}i.remove(T)}let N=0;function Y(){N=0}function G(){const T=N;return T>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),N+=1,T}function $(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function J(T,x){const D=i.get(T);if(T.isVideoTexture&&oe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const j=T.image;if(j===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,T,x);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function q(T,x){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){te(D,T,x);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function k(T,x){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){te(D,T,x);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function ee(T,x){const D=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){ce(D,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}const ye={[ar]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Ma]:n.MIRRORED_REPEAT},me={[Ot]:n.NEAREST,[yp]:n.NEAREST_MIPMAP_NEAREST,[kr]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},Me={[q_]:n.NEVER,[e0]:n.ALWAYS,[$_]:n.LESS,[Du]:n.LEQUAL,[Z_]:n.EQUAL,[Nu]:n.GEQUAL,[J_]:n.GREATER,[Q_]:n.NOTEQUAL};function ke(T,x){if(x.type===wn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Bt||x.magFilter===la||x.magFilter===kr||x.magFilter===Si||x.minFilter===Bt||x.minFilter===la||x.minFilter===kr||x.minFilter===Si)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ye[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ye[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ye[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,me[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ot||x.minFilter!==kr&&x.minFilter!==Si||x.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ze(T,x){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const j=x.source;let Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));const W=$(x);if(W!==T.__cacheKey){Q[W]===void 0&&(Q[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Q[W].usedTimes++;const Te=Q[T.__cacheKey];Te!==void 0&&(Q[T.__cacheKey].usedTimes--,Te.usedTimes===0&&b(x)),T.__cacheKey=W,T.__webglTexture=Q[W].texture}return D}function ht(T,x,D){return Math.floor(Math.floor(T/D)/x)}function lt(T,x,D,j){const W=T.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,D,j,x.data);else{W.sort((fe,ve)=>fe.start-ve.start);let Te=0;for(let fe=1;fe<W.length;fe++){const ve=W[Te],Se=W[fe],Le=ve.start+ve.count,xe=ht(Se.start,x.width,4),Ke=ht(ve.start,x.width,4);Se.start<=Le+1&&xe===Ke&&ht(Se.start+Se.count-1,x.width,4)===xe?ve.count=Math.max(ve.count,Se.start+Se.count-ve.start):(++Te,W[Te]=Se)}W.length=Te+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let fe=0,ve=W.length;fe<ve;fe++){const Se=W[fe],Le=Math.floor(Se.start/4),xe=Math.ceil(Se.count/4),Ke=Le%x.width,B=Math.floor(Le/x.width),Ae=xe,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ke,B,Ae,_e,D,j,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function te(T,x,D){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const Q=ze(T,x),W=x.source;t.bindTexture(j,T.__webglTexture,n.TEXTURE0+D);const Te=i.get(W);if(W.version!==Te.__version||Q===!0){t.activeTexture(n.TEXTURE0+D);const pe=rt.getPrimaries(rt.workingColorSpace),Ce=x.colorSpace===Ki?null:rt.getPrimaries(x.colorSpace),Fe=x.colorSpace===Ki||pe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let fe=v(x.image,!1,s.maxTextureSize);fe=K(x,fe);const ve=r.convert(x.format,x.colorSpace),Se=r.convert(x.type);let Le=S(x.internalFormat,ve,Se,x.colorSpace,x.isVideoTexture);ke(j,x);let xe;const Ke=x.mipmaps,B=x.isVideoTexture!==!0,Ae=Te.__version===void 0||Q===!0,_e=W.dataReady,Ie=A(x,fe);if(x.isDepthTexture)Le=y(x.format===ps,x.type),Ae&&(B?t.texStorage2D(n.TEXTURE_2D,1,Le,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Le,fe.width,fe.height,0,ve,Se,null));else if(x.isDataTexture)if(Ke.length>0){B&&Ae&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,Ke[0].width,Ke[0].height);for(let de=0,le=Ke.length;de<le;de++)xe=Ke[de],B?_e&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,xe.width,xe.height,ve,Se,xe.data):t.texImage2D(n.TEXTURE_2D,de,Le,xe.width,xe.height,0,ve,Se,xe.data);x.generateMipmaps=!1}else B?(Ae&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,fe.width,fe.height),_e&&lt(x,fe,ve,Se)):t.texImage2D(n.TEXTURE_2D,0,Le,fe.width,fe.height,0,ve,Se,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Le,Ke[0].width,Ke[0].height,fe.depth);for(let de=0,le=Ke.length;de<le;de++)if(xe=Ke[de],x.format!==Rn)if(ve!==null)if(B){if(_e)if(x.layerUpdates.size>0){const be=Sf(xe.width,xe.height,x.format,x.type);for(const qe of x.layerUpdates){const pt=xe.data.subarray(qe*be/xe.data.BYTES_PER_ELEMENT,(qe+1)*be/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,qe,xe.width,xe.height,1,ve,pt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,xe.width,xe.height,fe.depth,ve,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Le,xe.width,xe.height,fe.depth,0,xe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,xe.width,xe.height,fe.depth,ve,Se,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Le,xe.width,xe.height,fe.depth,0,ve,Se,xe.data)}else{B&&Ae&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,Ke[0].width,Ke[0].height);for(let de=0,le=Ke.length;de<le;de++)xe=Ke[de],x.format!==Rn?ve!==null?B?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Le,xe.width,xe.height,0,xe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?_e&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,xe.width,xe.height,ve,Se,xe.data):t.texImage2D(n.TEXTURE_2D,de,Le,xe.width,xe.height,0,ve,Se,xe.data)}else if(x.isDataArrayTexture)if(B){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Le,fe.width,fe.height,fe.depth),_e)if(x.layerUpdates.size>0){const de=Sf(fe.width,fe.height,x.format,x.type);for(const le of x.layerUpdates){const be=fe.data.subarray(le*de/fe.data.BYTES_PER_ELEMENT,(le+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,ve,Se,be)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ve,Se,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,ve,Se,fe.data);else if(x.isData3DTexture)B?(Ae&&t.texStorage3D(n.TEXTURE_3D,Ie,Le,fe.width,fe.height,fe.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ve,Se,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,ve,Se,fe.data);else if(x.isFramebufferTexture){if(Ae)if(B)t.texStorage2D(n.TEXTURE_2D,Ie,Le,fe.width,fe.height);else{let de=fe.width,le=fe.height;for(let be=0;be<Ie;be++)t.texImage2D(n.TEXTURE_2D,be,Le,de,le,0,ve,Se,null),de>>=1,le>>=1}}else if(Ke.length>0){if(B&&Ae){const de=ae(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Le,de.width,de.height)}for(let de=0,le=Ke.length;de<le;de++)xe=Ke[de],B?_e&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,ve,Se,xe):t.texImage2D(n.TEXTURE_2D,de,Le,ve,Se,xe);x.generateMipmaps=!1}else if(B){if(Ae){const de=ae(fe);t.texStorage2D(n.TEXTURE_2D,Ie,Le,de.width,de.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Se,fe)}else t.texImage2D(n.TEXTURE_2D,0,Le,ve,Se,fe);p(x)&&d(j),Te.__version=W.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ce(T,x,D){if(x.image.length!==6)return;const j=ze(T,x),Q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const W=i.get(Q);if(Q.version!==W.__version||j===!0){t.activeTexture(n.TEXTURE0+D);const Te=rt.getPrimaries(rt.workingColorSpace),pe=x.colorSpace===Ki?null:rt.getPrimaries(x.colorSpace),Ce=x.colorSpace===Ki||Te===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Fe=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!Fe&&!fe?ve[le]=v(x.image[le],!0,s.maxCubemapSize):ve[le]=fe?x.image[le].image:x.image[le],ve[le]=K(x,ve[le]);const Se=ve[0],Le=r.convert(x.format,x.colorSpace),xe=r.convert(x.type),Ke=S(x.internalFormat,Le,xe,x.colorSpace),B=x.isVideoTexture!==!0,Ae=W.__version===void 0||j===!0,_e=Q.dataReady;let Ie=A(x,Se);ke(n.TEXTURE_CUBE_MAP,x);let de;if(Fe){B&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Ke,Se.width,Se.height);for(let le=0;le<6;le++){de=ve[le].mipmaps;for(let be=0;be<de.length;be++){const qe=de[be];x.format!==Rn?Le!==null?B?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,qe.width,qe.height,Le,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,Ke,qe.width,qe.height,0,qe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,qe.width,qe.height,Le,xe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,Ke,qe.width,qe.height,0,Le,xe,qe.data)}}}else{if(de=x.mipmaps,B&&Ae){de.length>0&&Ie++;const le=ae(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Ke,le.width,le.height)}for(let le=0;le<6;le++)if(fe){B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,Le,xe,ve[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,ve[le].width,ve[le].height,0,Le,xe,ve[le].data);for(let be=0;be<de.length;be++){const pt=de[be].image[le].image;B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,pt.width,pt.height,Le,xe,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,Ke,pt.width,pt.height,0,Le,xe,pt.data)}}else{B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,xe,ve[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Le,xe,ve[le]);for(let be=0;be<de.length;be++){const qe=de[be];B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,Le,xe,qe.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,Ke,Le,xe,qe.image[le])}}}p(x)&&d(n.TEXTURE_CUBE_MAP),W.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Pe(T,x,D,j,Q,W){const Te=r.convert(D.format,D.colorSpace),pe=r.convert(D.type),Ce=S(D.internalFormat,Te,pe,D.colorSpace),Fe=i.get(x),fe=i.get(D);if(fe.__renderTarget=x,!Fe.__hasExternalTextures){const ve=Math.max(1,x.width>>W),Se=Math.max(1,x.height>>W);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,W,Ce,ve,Se,x.depth,0,Te,pe,null):t.texImage2D(Q,W,Ce,ve,Se,0,Te,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),he(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,fe.__webglTexture,0,C(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,fe.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(T,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const j=x.depthTexture,Q=j&&j.isDepthTexture?j.type:null,W=y(x.stencilBuffer,Q),Te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;he(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),W,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,T)}else{const j=x.textures;for(let Q=0;Q<j.length;Q++){const W=j[Q],Te=r.convert(W.format,W.colorSpace),pe=r.convert(W.type),Ce=S(W.internalFormat,Te,pe,W.colorSpace);he(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),Ce,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),Ce,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(T,x,D){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ke(n.TEXTURE_CUBE_MAP,x.depthTexture);const Fe=r.convert(x.depthTexture.format),fe=r.convert(x.depthTexture.type);let ve;x.depthTexture.format===Ni?ve=n.DEPTH_COMPONENT24:x.depthTexture.format===ps&&(ve=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ve,x.width,x.height,0,Fe,fe,null)}}else J(x.depthTexture,0);const W=Q.__webglTexture,Te=C(x),pe=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Ce=x.depthTexture.format===ps?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ni)he(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,pe,W,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,pe,W,0);else if(x.depthTexture.format===ps)he(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,pe,W,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,pe,W,0);else throw new Error("Unknown depthTexture format")}function tt(T){const x=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let j=0;j<6;j++)Ee(x.__webglFramebuffer[j],T,j);else{const j=T.texture.mipmaps;j&&j.length>0?Ee(x.__webglFramebuffer[0],T,0):Ee(x.__webglFramebuffer,T,0)}else if(D){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),Ge(x.__webglDepthbuffer[j],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,W)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ge(x.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(T,x,D){const j=i.get(T);x!==void 0&&Pe(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&tt(T)}function F(T){const x=T.texture,D=i.get(T),j=i.get(x);T.addEventListener("dispose",P);const Q=T.textures,W=T.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,o.memory.textures++),W){D.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[pe]=[];for(let Ce=0;Ce<x.mipmaps.length;Ce++)D.__webglFramebuffer[pe][Ce]=n.createFramebuffer()}else D.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)D.__webglFramebuffer[pe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Te)for(let pe=0,Ce=Q.length;pe<Ce;pe++){const Fe=i.get(Q[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&he(T)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){const Ce=Q[pe];D.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[pe]);const Fe=r.convert(Ce.format,Ce.colorSpace),fe=r.convert(Ce.type),ve=S(Ce.internalFormat,Fe,fe,Ce.colorSpace,T.isXRRenderTarget===!0),Se=C(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,D.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ke(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)Pe(D.__webglFramebuffer[pe][Ce],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce);else Pe(D.__webglFramebuffer[pe],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let pe=0,Ce=Q.length;pe<Ce;pe++){const Fe=Q[pe],fe=i.get(Fe);let ve=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,fe.__webglTexture),ke(ve,Fe),Pe(D.__webglFramebuffer,T,Fe,n.COLOR_ATTACHMENT0+pe,ve,0),p(Fe)&&d(ve)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,j.__webglTexture),ke(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)Pe(D.__webglFramebuffer[Ce],T,x,n.COLOR_ATTACHMENT0,pe,Ce);else Pe(D.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,pe,0);p(x)&&d(pe),t.unbindTexture()}T.depthBuffer&&tt(T)}function X(T){const x=T.textures;for(let D=0,j=x.length;D<j;D++){const Q=x[D];if(p(Q)){const W=M(T),Te=i.get(Q).__webglTexture;t.bindTexture(W,Te),d(W),t.unbindTexture()}}}const ie=[],Z=[];function ne(T){if(T.samples>0){if(he(T)===!1){const x=T.textures,D=T.width,j=T.height;let Q=n.COLOR_BUFFER_BIT;const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(T),pe=x.length>1;if(pe)for(let Fe=0;Fe<x.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ce=T.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Fe=0;Fe<x.length;Fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Fe]);const fe=i.get(x[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,D,j,0,0,D,j,Q,n.NEAREST),l===!0&&(ie.length=0,Z.length=0,ie.push(n.COLOR_ATTACHMENT0+Fe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push(W),Z.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Fe=0;Fe<x.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Fe]);const fe=i.get(x[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function C(T){return Math.min(s.maxSamples,T.samples)}function he(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function oe(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function K(T,x){const D=T.colorSpace,j=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==an&&D!==Ki&&(rt.getTransfer(D)===gt?(j!==Rn||Q!==mn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",D)),x}function ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=k,this.setTextureCube=ee,this.rebindTextures=I,this.setupRenderTarget=F,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Eb(n,e){function t(i,s=Ki){let r;const o=rt.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===Au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ep)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mp)return n.BYTE;if(i===Sp)return n.SHORT;if(i===so)return n.UNSIGNED_SHORT;if(i===Tu)return n.INT;if(i===ri)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Di)return n.HALF_FLOAT;if(i===Tp)return n.ALPHA;if(i===Ap)return n.RGB;if(i===Rn)return n.RGBA;if(i===Ni)return n.DEPTH_COMPONENT;if(i===ps)return n.DEPTH_STENCIL;if(i===Ru)return n.RED;if(i===Cu)return n.RED_INTEGER;if(i===lr)return n.RG;if(i===Pu)return n.RG_INTEGER;if(i===Lu)return n.RGBA_INTEGER;if(i===ca||i===ua||i===ha||i===fa)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xc||i===vc||i===yc||i===Mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sc||i===bc||i===Ec||i===Tc||i===Ac||i===wc||i===Rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sc||i===bc)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ec)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tc)return r.COMPRESSED_R11_EAC;if(i===Ac)return r.COMPRESSED_SIGNED_R11_EAC;if(i===wc)return r.COMPRESSED_RG11_EAC;if(i===Rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cc||i===Pc||i===Lc||i===Ic||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===Vc||i===kc||i===zc||i===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gc||i===Wc||i===Xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gc)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jc||i===Yc||i===Kc||i===qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ro?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ai({vertexShader:Tb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new Va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rb extends Ss{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const v=typeof XRWebGLBinding<"u",p=new wb,d={},M=t.getContextAttributes();let S=null,y=null;const A=[],R=[],P=new je;let z=null;const b=new nn;b.viewport=new Rt;const w=new nn;w.viewport=new Rt;const N=[b,w],Y=new Tx;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=A[te];return ce===void 0&&(ce=new Pl,A[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=A[te];return ce===void 0&&(ce=new Pl,A[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=A[te];return ce===void 0&&(ce=new Pl,A[te]=ce),ce.getHandSpace()};function J(te){const ce=R.indexOf(te.inputSource);if(ce===-1)return;const Pe=A[ce];Pe!==void 0&&(Pe.update(te.inputSource,te.frame,c||o),Pe.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",k);for(let te=0;te<A.length;te++){const ce=R[te];ce!==null&&(R[te]=null,A[te].disconnect(ce))}G=null,$=null,p.reset();for(const te in d)delete d[te];e.setRenderTarget(S),m=null,f=null,h=null,s=null,y=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Ge=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=M.stencil?ps:Ni,Ge=M.stencil?ro:ri);const tt={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ni(f.textureWidth,f.textureHeight,{format:Rn,type:mn,depthTexture:new ho(f.textureWidth,f.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Pe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new ni(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(te){for(let ce=0;ce<te.removed.length;ce++){const Pe=te.removed[ce],Ge=R.indexOf(Pe);Ge>=0&&(R[Ge]=null,A[Ge].disconnect(Pe))}for(let ce=0;ce<te.added.length;ce++){const Pe=te.added[ce];let Ge=R.indexOf(Pe);if(Ge===-1){for(let tt=0;tt<A.length;tt++)if(tt>=R.length){R.push(Pe),Ge=tt;break}else if(R[tt]===null){R[tt]=Pe,Ge=tt;break}if(Ge===-1)break}const Ee=A[Ge];Ee&&Ee.connect(Pe)}}const ee=new V,ye=new V;function me(te,ce,Pe){ee.setFromMatrixPosition(ce.matrixWorld),ye.setFromMatrixPosition(Pe.matrixWorld);const Ge=ee.distanceTo(ye),Ee=ce.projectionMatrix.elements,tt=Pe.projectionMatrix.elements,I=Ee[14]/(Ee[10]-1),F=Ee[14]/(Ee[10]+1),X=(Ee[9]+1)/Ee[5],ie=(Ee[9]-1)/Ee[5],Z=(Ee[8]-1)/Ee[0],ne=(tt[8]+1)/tt[0],C=I*Z,he=I*ne,oe=Ge/(-Z+ne),K=oe*-Z;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(K),te.translateZ(oe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ee[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ae=I+oe,T=F+oe,x=C-K,D=he+(Ge-K),j=X*F/T*ae,Q=ie*F/T*ae;te.projectionMatrix.makePerspective(x,D,j,Q,ae,T),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Me(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ce=te.near,Pe=te.far;p.texture!==null&&(p.depthNear>0&&(ce=p.depthNear),p.depthFar>0&&(Pe=p.depthFar)),Y.near=w.near=b.near=ce,Y.far=w.far=b.far=Pe,(G!==Y.near||$!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),G=Y.near,$=Y.far),Y.layers.mask=te.layers.mask|6,b.layers.mask=Y.layers.mask&3,w.layers.mask=Y.layers.mask&5;const Ge=te.parent,Ee=Y.cameras;Me(Y,Ge);for(let tt=0;tt<Ee.length;tt++)Me(Ee[tt],Ge);Ee.length===2?me(Y,b,w):Y.projectionMatrix.copy(b.projectionMatrix),ke(te,Y,Ge)};function ke(te,ce,Pe){Pe===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(Pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=cr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Y)},this.getCameraTexture=function(te){return d[te]};let ze=null;function ht(te,ce){if(u=ce.getViewerPose(c||o),_=ce,u!==null){const Pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ge=!1;Pe.length!==Y.cameras.length&&(Y.cameras.length=0,Ge=!0);for(let F=0;F<Pe.length;F++){const X=Pe[F];let ie=null;if(m!==null)ie=m.getViewport(X);else{const ne=h.getViewSubImage(f,X);ie=ne.viewport,F===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let Z=N[F];Z===void 0&&(Z=new nn,Z.layers.enable(F),Z.viewport=new Rt,N[F]=Z),Z.matrix.fromArray(X.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(X.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(ie.x,ie.y,ie.width,ie.height),F===0&&(Y.matrix.copy(Z.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ge===!0&&Y.cameras.push(Z)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const F=h.getDepthInformation(Pe[0]);F&&F.isValid&&F.texture&&p.init(F,s.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let F=0;F<Pe.length;F++){const X=Pe[F].camera;if(X){let ie=d[X];ie||(ie=new Vp,d[X]=ie);const Z=h.getCameraImage(X);ie.sourceTexture=Z}}}}for(let Pe=0;Pe<A.length;Pe++){const Ge=R[Pe],Ee=A[Pe];Ge!==null&&Ee!==void 0&&Ee.update(Ge,ce,c||o)}ze&&ze(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const lt=new Gp;lt.setAnimationLoop(ht),this.setAnimationLoop=function(te){ze=te},this.dispose=function(){}}}const ls=new zn,Cb=new Qe;function Pb(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Np(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,S,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===hn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===hn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d),S=M.envMap,y=M.envMapRotation;S&&(p.envMap.value=S,ls.copy(y),ls.x*=-1,ls.y*=-1,ls.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),p.envMapRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(ls)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;i.uniformBlockBinding(M,y)}function c(M,S){let y=s[M.id];y===void 0&&(_(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",p));const A=S.program;i.updateUBOMapping(M,A);const R=e.render.frame;r[M.id]!==R&&(f(M),r[M.id]=R)}function u(M){const S=h();M.__bindingPointIndex=S;const y=n.createBuffer(),A=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=s[M.id],y=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,P=y.length;R<P;R++){const z=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,w=z.length;b<w;b++){const N=z[b];if(m(N,R,b,A)===!0){const Y=N.__offset,G=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let J=0;J<G.length;J++){const q=G[J],k=v(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,Y+$,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,$),$+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,S,y,A){const R=M.value,P=S+"_"+y;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{const z=A[P];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return A[P]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function _(M){const S=M.uniforms;let y=0;const A=16;for(let P=0,z=S.length;P<z;P++){const b=Array.isArray(S[P])?S[P]:[S[P]];for(let w=0,N=b.length;w<N;w++){const Y=b[w],G=Array.isArray(Y.value)?Y.value:[Y.value];for(let $=0,J=G.length;$<J;$++){const q=G[$],k=v(q),ee=y%A,ye=ee%k.boundary,me=ee+ye;y+=ye,me!==0&&A-me<k.storage&&(y+=A-me),Y.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=k.storage}}}const R=y%A;return R>0&&(y+=A-R),M.__size=y,M.__cache={},this}function v(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",M),S}function p(M){const S=M.target;S.removeEventListener("dispose",p);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}const Ib=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function Db(){return jn===null&&(jn=new Vu(Ib,16,16,lr,Di),jn.name="DFG_LUT",jn.minFilter=Bt,jn.magFilter=Bt,jn.wrapS=Jn,jn.wrapT=Jn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class Nb{constructor(e={}){const{canvas:t=n0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=mn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=m,p=new Set([Lu,Pu,Cu]),d=new Set([mn,ri,so,ro,Au,wu]),M=new Uint32Array(4),S=new Int32Array(4);let y=null,A=null;const R=[],P=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let w=!1;this._outputColorSpace=It;let N=0,Y=0,G=null,$=-1,J=null;const q=new Rt,k=new Rt;let ee=null;const ye=new Be(0);let me=0,Me=t.width,ke=t.height,ze=1,ht=null,lt=null;const te=new Rt(0,0,Me,ke),ce=new Rt(0,0,Me,ke);let Pe=!1;const Ge=new zu;let Ee=!1,tt=!1;const I=new Qe,F=new V,X=new Rt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function ne(){return G===null?ze:1}let C=i;function he(g,E){return t.getContext(g,E)}try{const g={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",ct,!1),C===null){const E="webgl2";if(C=he(E,g),C===null)throw he(E)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw We("WebGLRenderer: "+g.message),g}let oe,K,ae,T,x,D,j,Q,W,Te,pe,Ce,Fe,fe,ve,Se,Le,xe,Ke,B,Ae,_e,Ie,de;function le(){oe=new DM(C),oe.init(),_e=new Eb(C,oe),K=new EM(C,oe,e,_e),ae=new Sb(C,oe),K.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),T=new FM(C),x=new ab,D=new bb(C,oe,ae,x,K,_e,T),j=new AM(b),Q=new IM(b),W=new kx(C),Ie=new SM(C,W),Te=new NM(C,W,T,Ie),pe=new BM(C,Te,W,T),Ke=new OM(C,K,D),Se=new TM(x),Ce=new ob(b,j,Q,oe,K,Ie,Se),Fe=new Pb(b,x),fe=new cb,ve=new mb(oe),xe=new MM(b,j,Q,ae,pe,_,l),Le=new yb(b,pe,K),de=new Lb(C,T,K,ae),B=new bM(C,oe,T),Ae=new UM(C,oe,T),T.programs=Ce.programs,b.capabilities=K,b.extensions=oe,b.properties=x,b.renderLists=fe,b.shadowMap=Le,b.state=ae,b.info=T}le(),v!==mn&&(z=new kM(v,t.width,t.height,s,r));const be=new Rb(b,C);this.xr=be,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const g=oe.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=oe.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(g){g!==void 0&&(ze=g,this.setSize(Me,ke,!1))},this.getSize=function(g){return g.set(Me,ke)},this.setSize=function(g,E,L=!0){if(be.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=g,ke=E,t.width=Math.floor(g*ze),t.height=Math.floor(E*ze),L===!0&&(t.style.width=g+"px",t.style.height=E+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,g,E)},this.getDrawingBufferSize=function(g){return g.set(Me*ze,ke*ze).floor()},this.setDrawingBufferSize=function(g,E,L){Me=g,ke=E,ze=L,t.width=Math.floor(g*L),t.height=Math.floor(E*L),this.setViewport(0,0,g,E)},this.setEffects=function(g){if(v===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let E=0;E<g.length;E++)if(g[E].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(q)},this.getViewport=function(g){return g.copy(te)},this.setViewport=function(g,E,L,O){g.isVector4?te.set(g.x,g.y,g.z,g.w):te.set(g,E,L,O),ae.viewport(q.copy(te).multiplyScalar(ze).round())},this.getScissor=function(g){return g.copy(ce)},this.setScissor=function(g,E,L,O){g.isVector4?ce.set(g.x,g.y,g.z,g.w):ce.set(g,E,L,O),ae.scissor(k.copy(ce).multiplyScalar(ze).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(g){ae.setScissorTest(Pe=g)},this.setOpaqueSort=function(g){ht=g},this.setTransparentSort=function(g){lt=g},this.getClearColor=function(g){return g.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(g=!0,E=!0,L=!0){let O=0;if(g){let U=!1;if(G!==null){const H=G.texture.format;U=p.has(H)}if(U){const H=G.texture.type,se=d.has(H),re=xe.getClearColor(),ge=xe.getClearAlpha(),we=re.r,De=re.g,Ue=re.b;se?(M[0]=we,M[1]=De,M[2]=Ue,M[3]=ge,C.clearBufferuiv(C.COLOR,0,M)):(S[0]=we,S[1]=De,S[2]=Ue,S[3]=ge,C.clearBufferiv(C.COLOR,0,S))}else O|=C.COLOR_BUFFER_BIT}E&&(O|=C.DEPTH_BUFFER_BIT),L&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),xe.dispose(),fe.dispose(),ve.dispose(),x.dispose(),j.dispose(),Q.dispose(),pe.dispose(),Ie.dispose(),de.dispose(),Ce.dispose(),be.dispose(),be.removeEventListener("sessionstart",yr),be.removeEventListener("sessionend",Mr),Gn.stop()};function qe(g){g.preventDefault(),Ea("WebGLRenderer: Context Lost."),w=!0}function pt(){Ea("WebGLRenderer: Context Restored."),w=!1;const g=T.autoReset,E=Le.enabled,L=Le.autoUpdate,O=Le.needsUpdate,U=Le.type;le(),T.autoReset=g,Le.enabled=E,Le.autoUpdate=L,Le.needsUpdate=O,Le.type=U}function ct(g){We("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function xn(g){const E=g.target;E.removeEventListener("dispose",xn),vn(E)}function vn(g){vo(g),x.remove(g)}function vo(g){const E=x.get(g).programs;E!==void 0&&(E.forEach(function(L){Ce.releaseProgram(L)}),g.isShaderMaterial&&Ce.releaseShaderCache(g))}this.renderBufferDirect=function(g,E,L,O,U,H){E===null&&(E=ie);const se=U.isMesh&&U.matrixWorld.determinant()<0,re=Xa(g,E,L,O,U);ae.setMaterial(O,se);let ge=L.index,we=1;if(O.wireframe===!0){if(ge=Te.getWireframeAttribute(L),ge===void 0)return;we=2}const De=L.drawRange,Ue=L.attributes.position;let $e=De.start*we,ot=(De.start+De.count)*we;H!==null&&($e=Math.max($e,H.start*we),ot=Math.min(ot,(H.start+H.count)*we)),ge!==null?($e=Math.max($e,0),ot=Math.min(ot,ge.count)):Ue!=null&&($e=Math.max($e,0),ot=Math.min(ot,Ue.count));const St=ot-$e;if(St<0||St===1/0)return;Ie.setup(U,O,re,L,ge);let At,ut=B;if(ge!==null&&(At=W.get(ge),ut=Ae,ut.setIndex(At)),U.isMesh)O.wireframe===!0?(ae.setLineWidth(O.wireframeLinewidth*ne()),ut.setMode(C.LINES)):ut.setMode(C.TRIANGLES);else if(U.isLine){let Ve=O.linewidth;Ve===void 0&&(Ve=1),ae.setLineWidth(Ve*ne()),U.isLineSegments?ut.setMode(C.LINES):U.isLineLoop?ut.setMode(C.LINE_LOOP):ut.setMode(C.LINE_STRIP)}else U.isPoints?ut.setMode(C.POINTS):U.isSprite&&ut.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)co("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ut.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ve=U._multiDrawStarts,at=U._multiDrawCounts,st=U._multiDrawCount,Wt=ge?W.get(ge).bytesPerElement:1,yn=x.get(O).currentProgram.getUniforms();for(let Yt=0;Yt<st;Yt++)yn.setValue(C,"_gl_DrawID",Yt),ut.render(Ve[Yt]/Wt,at[Yt])}else if(U.isInstancedMesh)ut.renderInstances($e,St,U.count);else if(L.isInstancedBufferGeometry){const Ve=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,at=Math.min(L.instanceCount,Ve);ut.renderInstances($e,St,at)}else ut.render($e,St)};function vr(g,E,L){g.transparent===!0&&g.side===Tn&&g.forceSinglePass===!1?(g.side=hn,g.needsUpdate=!0,ui(g,E,L),g.side=Ii,g.needsUpdate=!0,ui(g,E,L),g.side=Tn):ui(g,E,L)}this.compile=function(g,E,L=null){L===null&&(L=g),A=ve.get(L),A.init(E),P.push(A),L.traverseVisible(function(U){U.isLight&&U.layers.test(E.layers)&&(A.pushLight(U),U.castShadow&&A.pushShadow(U))}),g!==L&&g.traverseVisible(function(U){U.isLight&&U.layers.test(E.layers)&&(A.pushLight(U),U.castShadow&&A.pushShadow(U))}),A.setupLights();const O=new Set;return g.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const H=U.material;if(H)if(Array.isArray(H))for(let se=0;se<H.length;se++){const re=H[se];vr(re,L,U),O.add(re)}else vr(H,L,U),O.add(H)}),A=P.pop(),O},this.compileAsync=function(g,E,L=null){const O=this.compile(g,E,L);return new Promise(U=>{function H(){if(O.forEach(function(se){x.get(se).currentProgram.isReady()&&O.delete(se)}),O.size===0){U(g);return}setTimeout(H,10)}oe.get("KHR_parallel_shader_compile")!==null?H():setTimeout(H,10)})};let bs=null;function Es(g){bs&&bs(g)}function yr(){Gn.stop()}function Mr(){Gn.start()}const Gn=new Gp;Gn.setAnimationLoop(Es),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(g){bs=g,be.setAnimationLoop(g),g===null?Gn.stop():Gn.start()},be.addEventListener("sessionstart",yr),be.addEventListener("sessionend",Mr),this.render=function(g,E){if(E!==void 0&&E.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const L=be.enabled===!0&&be.isPresenting===!0,O=z!==null&&(G===null||L)&&z.begin(b,G);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(E),E=be.getCamera()),g.isScene===!0&&g.onBeforeRender(b,g,E,G),A=ve.get(g,P.length),A.init(E),P.push(A),I.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),Ge.setFromProjectionMatrix(I,Qn,E.reversedDepth),tt=this.localClippingEnabled,Ee=Se.init(this.clippingPlanes,tt),y=fe.get(g,R.length),y.init(),R.push(y),be.enabled===!0&&be.isPresenting===!0){const se=b.xr.getDepthSensingMesh();se!==null&&Sr(se,E,-1/0,b.sortObjects)}Sr(g,E,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ht,lt),Z=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Z&&xe.addToRenderList(y,g),this.info.render.frame++,Ee===!0&&Se.beginShadows();const U=A.state.shadowsArray;if(Le.render(U,g,E),Ee===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&z.hasRenderPass())===!1){const se=y.opaque,re=y.transmissive;if(A.setupLights(),E.isArrayCamera){const ge=E.cameras;if(re.length>0)for(let we=0,De=ge.length;we<De;we++){const Ue=ge[we];br(se,re,g,Ue)}Z&&xe.render(g);for(let we=0,De=ge.length;we<De;we++){const Ue=ge[we];yo(y,g,Ue,Ue.viewport)}}else re.length>0&&br(se,re,g,E),Z&&xe.render(g),yo(y,g,E)}G!==null&&Y===0&&(D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G)),O&&z.end(b),g.isScene===!0&&g.onAfterRender(b,g,E),Ie.resetDefaultState(),$=-1,J=null,P.pop(),P.length>0?(A=P[P.length-1],Ee===!0&&Se.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Sr(g,E,L,O){if(g.visible===!1)return;if(g.layers.test(E.layers)){if(g.isGroup)L=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(E);else if(g.isLight)A.pushLight(g),g.castShadow&&A.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Ge.intersectsSprite(g)){O&&X.setFromMatrixPosition(g.matrixWorld).applyMatrix4(I);const se=pe.update(g),re=g.material;re.visible&&y.push(g,se,re,L,X.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Ge.intersectsObject(g))){const se=pe.update(g),re=g.material;if(O&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),X.copy(g.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),X.copy(se.boundingSphere.center)),X.applyMatrix4(g.matrixWorld).applyMatrix4(I)),Array.isArray(re)){const ge=se.groups;for(let we=0,De=ge.length;we<De;we++){const Ue=ge[we],$e=re[Ue.materialIndex];$e&&$e.visible&&y.push(g,se,$e,L,X.z,Ue)}}else re.visible&&y.push(g,se,re,L,X.z,null)}}const H=g.children;for(let se=0,re=H.length;se<re;se++)Sr(H[se],E,L,O)}function yo(g,E,L,O){const{opaque:U,transmissive:H,transparent:se}=g;A.setupLightsView(L),Ee===!0&&Se.setGlobalState(b.clippingPlanes,L),O&&ae.viewport(q.copy(O)),U.length>0&&Ts(U,E,L),H.length>0&&Ts(H,E,L),se.length>0&&Ts(se,E,L),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function br(g,E,L,O){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[O.id]===void 0){const $e=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[O.id]=new ni(1,1,{generateMipmaps:!0,type:$e?Di:mn,minFilter:Si,samples:K.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const H=A.state.transmissionRenderTarget[O.id],se=O.viewport||q;H.setSize(se.z*b.transmissionResolutionScale,se.w*b.transmissionResolutionScale);const re=b.getRenderTarget(),ge=b.getActiveCubeFace(),we=b.getActiveMipmapLevel();b.setRenderTarget(H),b.getClearColor(ye),me=b.getClearAlpha(),me<1&&b.setClearColor(16777215,.5),b.clear(),Z&&xe.render(L);const De=b.toneMapping;b.toneMapping=ti;const Ue=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),A.setupLightsView(O),Ee===!0&&Se.setGlobalState(b.clippingPlanes,O),Ts(g,L,O),D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H),oe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ot=0,St=E.length;ot<St;ot++){const At=E[ot],{object:ut,geometry:Ve,material:at,group:st}=At;if(at.side===Tn&&ut.layers.test(O.layers)){const Wt=at.side;at.side=hn,at.needsUpdate=!0,As(ut,L,O,Ve,at,st),at.side=Wt,at.needsUpdate=!0,$e=!0}}$e===!0&&(D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H))}b.setRenderTarget(re,ge,we),b.setClearColor(ye,me),Ue!==void 0&&(O.viewport=Ue),b.toneMapping=De}function Ts(g,E,L){const O=E.isScene===!0?E.overrideMaterial:null;for(let U=0,H=g.length;U<H;U++){const se=g[U],{object:re,geometry:ge,group:we}=se;let De=se.material;De.allowOverride===!0&&O!==null&&(De=O),re.layers.test(L.layers)&&As(re,E,L,ge,De,we)}}function As(g,E,L,O,U,H){g.onBeforeRender(b,E,L,O,U,H),g.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),U.onBeforeRender(b,E,L,O,g,H),U.transparent===!0&&U.side===Tn&&U.forceSinglePass===!1?(U.side=hn,U.needsUpdate=!0,b.renderBufferDirect(L,E,O,U,g,H),U.side=Ii,U.needsUpdate=!0,b.renderBufferDirect(L,E,O,U,g,H),U.side=Tn):b.renderBufferDirect(L,E,O,U,g,H),g.onAfterRender(b,E,L,O,U,H)}function ui(g,E,L){E.isScene!==!0&&(E=ie);const O=x.get(g),U=A.state.lights,H=A.state.shadowsArray,se=U.state.version,re=Ce.getParameters(g,U.state,H,E,L),ge=Ce.getProgramCacheKey(re);let we=O.programs;O.environment=g.isMeshStandardMaterial?E.environment:null,O.fog=E.fog,O.envMap=(g.isMeshStandardMaterial?Q:j).get(g.envMap||O.environment),O.envMapRotation=O.environment!==null&&g.envMap===null?E.environmentRotation:g.envMapRotation,we===void 0&&(g.addEventListener("dispose",xn),we=new Map,O.programs=we);let De=we.get(ge);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===se)return So(g,re),De}else re.uniforms=Ce.getUniforms(g),g.onBeforeCompile(re,b),De=Ce.acquireProgram(re,ge),we.set(ge,De),O.uniforms=re.uniforms;const Ue=O.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Ue.clippingPlanes=Se.uniform),So(g,re),O.needsLights=ja(g),O.lightsStateVersion=se,O.needsLights&&(Ue.ambientLightColor.value=U.state.ambient,Ue.lightProbe.value=U.state.probe,Ue.directionalLights.value=U.state.directional,Ue.directionalLightShadows.value=U.state.directionalShadow,Ue.spotLights.value=U.state.spot,Ue.spotLightShadows.value=U.state.spotShadow,Ue.rectAreaLights.value=U.state.rectArea,Ue.ltc_1.value=U.state.rectAreaLTC1,Ue.ltc_2.value=U.state.rectAreaLTC2,Ue.pointLights.value=U.state.point,Ue.pointLightShadows.value=U.state.pointShadow,Ue.hemisphereLights.value=U.state.hemi,Ue.directionalShadowMap.value=U.state.directionalShadowMap,Ue.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ue.spotShadowMap.value=U.state.spotShadowMap,Ue.spotLightMatrix.value=U.state.spotLightMatrix,Ue.spotLightMap.value=U.state.spotLightMap,Ue.pointShadowMap.value=U.state.pointShadowMap,Ue.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function Mo(g){if(g.uniformsList===null){const E=g.currentProgram.getUniforms();g.uniformsList=da.seqWithValue(E.seq,g.uniforms)}return g.uniformsList}function So(g,E){const L=x.get(g);L.outputColorSpace=E.outputColorSpace,L.batching=E.batching,L.batchingColor=E.batchingColor,L.instancing=E.instancing,L.instancingColor=E.instancingColor,L.instancingMorph=E.instancingMorph,L.skinning=E.skinning,L.morphTargets=E.morphTargets,L.morphNormals=E.morphNormals,L.morphColors=E.morphColors,L.morphTargetsCount=E.morphTargetsCount,L.numClippingPlanes=E.numClippingPlanes,L.numIntersection=E.numClipIntersection,L.vertexAlphas=E.vertexAlphas,L.vertexTangents=E.vertexTangents,L.toneMapping=E.toneMapping}function Xa(g,E,L,O,U){E.isScene!==!0&&(E=ie),D.resetTextureUnits();const H=E.fog,se=O.isMeshStandardMaterial?E.environment:null,re=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:an,ge=(O.isMeshStandardMaterial?Q:j).get(O.envMap||se),we=O.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,De=!!L.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ue=!!L.morphAttributes.position,$e=!!L.morphAttributes.normal,ot=!!L.morphAttributes.color;let St=ti;O.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(St=b.toneMapping);const At=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ut=At!==void 0?At.length:0,Ve=x.get(O),at=A.state.lights;if(Ee===!0&&(tt===!0||g!==J)){const Xt=g===J&&O.id===$;Se.setState(O,g,Xt)}let st=!1;O.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==at.state.version||Ve.outputColorSpace!==re||U.isBatchedMesh&&Ve.batching===!1||!U.isBatchedMesh&&Ve.batching===!0||U.isBatchedMesh&&Ve.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ve.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ve.instancing===!1||!U.isInstancedMesh&&Ve.instancing===!0||U.isSkinnedMesh&&Ve.skinning===!1||!U.isSkinnedMesh&&Ve.skinning===!0||U.isInstancedMesh&&Ve.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ve.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ve.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ve.instancingMorph===!1&&U.morphTexture!==null||Ve.envMap!==ge||O.fog===!0&&Ve.fog!==H||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Se.numPlanes||Ve.numIntersection!==Se.numIntersection)||Ve.vertexAlphas!==we||Ve.vertexTangents!==De||Ve.morphTargets!==Ue||Ve.morphNormals!==$e||Ve.morphColors!==ot||Ve.toneMapping!==St||Ve.morphTargetsCount!==ut)&&(st=!0):(st=!0,Ve.__version=O.version);let Wt=Ve.currentProgram;st===!0&&(Wt=ui(O,E,U));let yn=!1,Yt=!1,Ct=!1;const mt=Wt.getUniforms(),wt=Ve.uniforms;if(ae.useProgram(Wt.program)&&(yn=!0,Yt=!0,Ct=!0),O.id!==$&&($=O.id,Yt=!0),yn||J!==g){ae.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),mt.setValue(C,"projectionMatrix",g.projectionMatrix),mt.setValue(C,"viewMatrix",g.matrixWorldInverse);const bt=mt.map.cameraPosition;bt!==void 0&&bt.setValue(C,F.setFromMatrixPosition(g.matrixWorld)),K.logarithmicDepthBuffer&&mt.setValue(C,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&mt.setValue(C,"isOrthographic",g.isOrthographicCamera===!0),J!==g&&(J=g,Yt=!0,Ct=!0)}if(Ve.needsLights&&(at.state.directionalShadowMap.length>0&&mt.setValue(C,"directionalShadowMap",at.state.directionalShadowMap,D),at.state.spotShadowMap.length>0&&mt.setValue(C,"spotShadowMap",at.state.spotShadowMap,D),at.state.pointShadowMap.length>0&&mt.setValue(C,"pointShadowMap",at.state.pointShadowMap,D)),U.isSkinnedMesh){mt.setOptional(C,U,"bindMatrix"),mt.setOptional(C,U,"bindMatrixInverse");const Xt=U.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),mt.setValue(C,"boneTexture",Xt.boneTexture,D))}U.isBatchedMesh&&(mt.setOptional(C,U,"batchingTexture"),mt.setValue(C,"batchingTexture",U._matricesTexture,D),mt.setOptional(C,U,"batchingIdTexture"),mt.setValue(C,"batchingIdTexture",U._indirectTexture,D),mt.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(C,"batchingColorTexture",U._colorsTexture,D));const Lt=L.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&Ke.update(U,L,Wt),(Yt||Ve.receiveShadow!==U.receiveShadow)&&(Ve.receiveShadow=U.receiveShadow,mt.setValue(C,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(wt.envMap.value=ge,wt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&E.environment!==null&&(wt.envMapIntensity.value=E.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Db()),Yt&&(mt.setValue(C,"toneMappingExposure",b.toneMappingExposure),Ve.needsLights&&bo(wt,Ct),H&&O.fog===!0&&Fe.refreshFogUniforms(wt,H),Fe.refreshMaterialUniforms(wt,O,ze,ke,A.state.transmissionRenderTarget[g.id]),da.upload(C,Mo(Ve),wt,D)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(da.upload(C,Mo(Ve),wt,D),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&mt.setValue(C,"center",U.center),mt.setValue(C,"modelViewMatrix",U.modelViewMatrix),mt.setValue(C,"normalMatrix",U.normalMatrix),mt.setValue(C,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Xt=O.uniformsGroups;for(let bt=0,es=Xt.length;bt<es;bt++){const Pn=Xt[bt];de.update(Pn,Wt),de.bind(Pn,Wt)}}return Wt}function bo(g,E){g.ambientLightColor.needsUpdate=E,g.lightProbe.needsUpdate=E,g.directionalLights.needsUpdate=E,g.directionalLightShadows.needsUpdate=E,g.pointLights.needsUpdate=E,g.pointLightShadows.needsUpdate=E,g.spotLights.needsUpdate=E,g.spotLightShadows.needsUpdate=E,g.rectAreaLights.needsUpdate=E,g.hemisphereLights.needsUpdate=E}function ja(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(g,E,L){const O=x.get(g);O.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),x.get(g.texture).__webglTexture=E,x.get(g.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:L,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,E){const L=x.get(g);L.__webglFramebuffer=E,L.__useDefaultFramebuffer=E===void 0};const Ya=C.createFramebuffer();this.setRenderTarget=function(g,E=0,L=0){G=g,N=E,Y=L;let O=null,U=!1,H=!1;if(g){const re=x.get(g);if(re.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(C.FRAMEBUFFER,re.__webglFramebuffer),q.copy(g.viewport),k.copy(g.scissor),ee=g.scissorTest,ae.viewport(q),ae.scissor(k),ae.setScissorTest(ee),$=-1;return}else if(re.__webglFramebuffer===void 0)D.setupRenderTarget(g);else if(re.__hasExternalTextures)D.rebindTextures(g,x.get(g.texture).__webglTexture,x.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const De=g.depthTexture;if(re.__boundDepthTexture!==De){if(De!==null&&x.has(De)&&(g.width!==De.image.width||g.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(g)}}const ge=g.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(H=!0);const we=x.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(we[E])?O=we[E][L]:O=we[E],U=!0):g.samples>0&&D.useMultisampledRTT(g)===!1?O=x.get(g).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[L]:O=we,q.copy(g.viewport),k.copy(g.scissor),ee=g.scissorTest}else q.copy(te).multiplyScalar(ze).floor(),k.copy(ce).multiplyScalar(ze).floor(),ee=Pe;if(L!==0&&(O=Ya),ae.bindFramebuffer(C.FRAMEBUFFER,O)&&ae.drawBuffers(g,O),ae.viewport(q),ae.scissor(k),ae.setScissorTest(ee),U){const re=x.get(g.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+E,re.__webglTexture,L)}else if(H){const re=E;for(let ge=0;ge<g.textures.length;ge++){const we=x.get(g.textures[ge]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ge,we.__webglTexture,L,re)}}else if(g!==null&&L!==0){const re=x.get(g.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,re.__webglTexture,L)}$=-1},this.readRenderTargetPixels=function(g,E,L,O,U,H,se,re=0){if(!(g&&g.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=x.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&se!==void 0&&(ge=ge[se]),ge){ae.bindFramebuffer(C.FRAMEBUFFER,ge);try{const we=g.textures[re],De=we.format,Ue=we.type;if(!K.textureFormatReadable(De)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ue)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=g.width-O&&L>=0&&L<=g.height-U&&(g.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+re),C.readPixels(E,L,O,U,_e.convert(De),_e.convert(Ue),H))}finally{const we=G!==null?x.get(G).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(g,E,L,O,U,H,se,re=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=x.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&se!==void 0&&(ge=ge[se]),ge)if(E>=0&&E<=g.width-O&&L>=0&&L<=g.height-U){ae.bindFramebuffer(C.FRAMEBUFFER,ge);const we=g.textures[re],De=we.format,Ue=we.type;if(!K.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,H.byteLength,C.STREAM_READ),g.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+re),C.readPixels(E,L,O,U,_e.convert(De),_e.convert(Ue),0);const ot=G!==null?x.get(G).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,ot);const St=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await i0(C,St,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,H),C.deleteBuffer($e),C.deleteSync(St),H}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,E=null,L=0){const O=Math.pow(2,-L),U=Math.floor(g.image.width*O),H=Math.floor(g.image.height*O),se=E!==null?E.x:0,re=E!==null?E.y:0;D.setTexture2D(g,0),C.copyTexSubImage2D(C.TEXTURE_2D,L,0,0,se,re,U,H),ae.unbindTexture()};const Eo=C.createFramebuffer(),To=C.createFramebuffer();this.copyTextureToTexture=function(g,E,L=null,O=null,U=0,H=null){H===null&&(U!==0?(co("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),H=U,U=0):H=0);let se,re,ge,we,De,Ue,$e,ot,St;const At=g.isCompressedTexture?g.mipmaps[H]:g.image;if(L!==null)se=L.max.x-L.min.x,re=L.max.y-L.min.y,ge=L.isBox3?L.max.z-L.min.z:1,we=L.min.x,De=L.min.y,Ue=L.isBox3?L.min.z:0;else{const Lt=Math.pow(2,-U);se=Math.floor(At.width*Lt),re=Math.floor(At.height*Lt),g.isDataArrayTexture?ge=At.depth:g.isData3DTexture?ge=Math.floor(At.depth*Lt):ge=1,we=0,De=0,Ue=0}O!==null?($e=O.x,ot=O.y,St=O.z):($e=0,ot=0,St=0);const ut=_e.convert(E.format),Ve=_e.convert(E.type);let at;E.isData3DTexture?(D.setTexture3D(E,0),at=C.TEXTURE_3D):E.isDataArrayTexture||E.isCompressedArrayTexture?(D.setTexture2DArray(E,0),at=C.TEXTURE_2D_ARRAY):(D.setTexture2D(E,0),at=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,E.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,E.unpackAlignment);const st=C.getParameter(C.UNPACK_ROW_LENGTH),Wt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),yn=C.getParameter(C.UNPACK_SKIP_PIXELS),Yt=C.getParameter(C.UNPACK_SKIP_ROWS),Ct=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,we),C.pixelStorei(C.UNPACK_SKIP_ROWS,De),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ue);const mt=g.isDataArrayTexture||g.isData3DTexture,wt=E.isDataArrayTexture||E.isData3DTexture;if(g.isDepthTexture){const Lt=x.get(g),Xt=x.get(E),bt=x.get(Lt.__renderTarget),es=x.get(Xt.__renderTarget);ae.bindFramebuffer(C.READ_FRAMEBUFFER,bt.__webglFramebuffer),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let Pn=0;Pn<ge;Pn++)mt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(g).__webglTexture,U,Ue+Pn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(E).__webglTexture,H,St+Pn)),C.blitFramebuffer(we,De,se,re,$e,ot,se,re,C.DEPTH_BUFFER_BIT,C.NEAREST);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(U!==0||g.isRenderTargetTexture||x.has(g)){const Lt=x.get(g),Xt=x.get(E);ae.bindFramebuffer(C.READ_FRAMEBUFFER,Eo),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,To);for(let bt=0;bt<ge;bt++)mt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Lt.__webglTexture,U,Ue+bt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Lt.__webglTexture,U),wt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xt.__webglTexture,H,St+bt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xt.__webglTexture,H),U!==0?C.blitFramebuffer(we,De,se,re,$e,ot,se,re,C.COLOR_BUFFER_BIT,C.NEAREST):wt?C.copyTexSubImage3D(at,H,$e,ot,St+bt,we,De,se,re):C.copyTexSubImage2D(at,H,$e,ot,we,De,se,re);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else wt?g.isDataTexture||g.isData3DTexture?C.texSubImage3D(at,H,$e,ot,St,se,re,ge,ut,Ve,At.data):E.isCompressedArrayTexture?C.compressedTexSubImage3D(at,H,$e,ot,St,se,re,ge,ut,At.data):C.texSubImage3D(at,H,$e,ot,St,se,re,ge,ut,Ve,At):g.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,H,$e,ot,se,re,ut,Ve,At.data):g.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,H,$e,ot,At.width,At.height,ut,At.data):C.texSubImage2D(C.TEXTURE_2D,H,$e,ot,se,re,ut,Ve,At);C.pixelStorei(C.UNPACK_ROW_LENGTH,st),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Wt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,yn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ct),H===0&&E.generateMipmaps&&C.generateMipmap(at),ae.unbindTexture()},this.initRenderTarget=function(g){x.get(g).__webglFramebuffer===void 0&&D.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?D.setTextureCube(g,0):g.isData3DTexture?D.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?D.setTexture2DArray(g,0):D.setTexture2D(g,0),ae.unbindTexture()},this.resetState=function(){N=0,Y=0,G=null,ae.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const jf={type:"change"},ju={type:"start"},Kp={type:"end"},ta=new mr,Yf=new ji,Ub=Math.cos(70*Cp.DEG2RAD),Ft=new V,ln=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gl=1e-6;class Fb extends Bx{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:En.ROTATE,MIDDLE:En.DOLLY,RIGHT:En.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new oi,this._lastTargetPosition=new V,this._quat=new oi().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mf,this._sphericalDelta=new Mf,this._scale=1,this._panOffset=new V,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new V,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bb.bind(this),this._onPointerDown=Ob.bind(this),this._onPointerUp=Vb.bind(this),this._onContextMenu=jb.bind(this),this._onMouseWheel=Hb.bind(this),this._onKeyDown=Gb.bind(this),this._onTouchStart=Wb.bind(this),this._onTouchMove=Xb.bind(this),this._onMouseDown=kb.bind(this),this._onMouseMove=zb.bind(this),this._interceptControlDown=Yb.bind(this),this._interceptControlUp=Kb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jf),this.update(),this.state=yt.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ta.origin.copy(this.object.position),ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ta.direction))<Ub?this.object.lookAt(this.target):(Yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ta.intersectPlane(Yf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gl||this._lastTargetPosition.distanceToSquared(this.target)>Gl?(this.dispatchEvent(jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ob(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Bb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Vb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kp),this.state=yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case En.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=yt.DOLLY;break;case En.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}break;case En.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(ju)}function zb(n){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Hb(n){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(n.preventDefault(),this.dispatchEvent(ju),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Kp))}function Gb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Wb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=yt.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=yt.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(ju)}function Xb(n){switch(this._trackPointer(n),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=yt.NONE}}function jb(n){this.enabled!==!1&&n.preventDefault()}function Yb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kf(n,e){if(e===j_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===$c||e===wp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===$c)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class qb extends Qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eE(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new hE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new lE(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new dE(t)}),this.register(function(t){return new pE(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Jr.extractUrlBase(e);o=Jr.resolveURL(c,this.path)}else o=Jr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ka(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===qp){try{o[it.KHR_BINARY_GLTF]=new mE(e)}catch(h){s&&s(h);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new RE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case it.KHR_MATERIALS_UNLIT:o[h]=new Jb;break;case it.KHR_DRACO_MESH_COMPRESSION:o[h]=new gE(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[h]=new _E;break;case it.KHR_MESH_QUANTIZATION:o[h]=new xE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function $b(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zb{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Mx(u),c.distance=h;break;case"spot":c=new vx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Jb{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return ms}extendParams(e,t,i){const s=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}}class Qb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class eE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(a,a)}return Promise.all(r)}}class tE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class nE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class iE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],an)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class sE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class rE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(a[0],a[1],a[2],an),Promise.all(r)}}class oE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class aE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(a[0],a[1],a[2],an),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(r)}}class lE{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class cE{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class uE{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class hE{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class fE{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class dE{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(m),u,h,f,s.mode,s.filter),m})})}else return null}}class pE{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,m=[];for(const _ of h){const v=new Qe,p=new V,d=new oi,M=new V(1,1,1),S=new q0(_.geometry,_.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),S.setMatrixAt(y,v.compose(p,d,M));for(const y in l)if(y==="_COLOR_0"){const A=l[y];S.instanceColor=new Jc(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);Pt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),m.push(S)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const qp="glTF",Or=12,qf={JSON:1313821514,BIN:5130562};class mE{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Or),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Or,r=new DataView(e,Or);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===qf.JSON){const c=new Uint8Array(e,Or+o,a);this.content=i.decode(c)}else if(l===qf.BIN){const c=Or+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=iu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=iu[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],m=er[f.componentType];c[h]=m.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(m){for(const _ in m.attributes){const v=m.attributes[_],p=l[_];p!==void 0&&(v.normalized=p)}h(m)},a,c,an,f)})})}}class _E{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xE{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class $p extends xo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,m=f*h,_=e*c,v=_-c,p=-2*m+3*f,d=m-f,M=1-p,S=d-f+h;for(let y=0;y!==a;y++){const A=o[v+y+a],R=o[v+y+l]*u,P=o[_+y+a],z=o[_+y]*u;r[y]=M*A+S*R+p*P+d*z}return r}}const vE=new oi;class yE extends $p{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return vE.fromArray(r).normalize().toArray(r),r}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$f={9728:Ot,9729:Bt,9984:yp,9985:la,9986:kr,9987:Si},Zf={33071:Jn,33648:Ma,10497:ar},Wl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ME={CUBICSPLINE:void 0,LINEAR:ao,STEP:oo},Xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function SE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new fo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ii})),n.DefaultMaterial}function cs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function qn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function EE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TE(n){let e;const t=n.extensions&&n.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jl(t.attributes):e=n.indices+":"+jl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+jl(n.targets[i]);return e}function jl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function su(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wE=new Qe;class RE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $b,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new _x(this.options.manager):this.textureLoader=new Ex(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ka(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return cs(r,a,s),qn(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Jr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Wl[s.type],a=er[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new rn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Wl[s.type],c=er[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,m=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let v,p;if(m&&m!==h){const d=Math.floor(f/m),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let S=t.cache.get(M);S||(v=new c(a,d*m,s.count*m/u),S=new W0(v,m/u),t.cache.add(M,S)),p=new Bu(S,l,f%m/u,_)}else a===null?v=new c(s.count*l):v=new c(a,f,s.count*l),p=new rn(v,l,_);if(s.sparse!==void 0){const d=Wl.SCALAR,M=er[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,A=new M(o[1],S,s.sparse.count*d),R=new c(o[2],y,s.sparse.count*l);a!==null&&(p=new rn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let P=0,z=A.length;P<z;P++){const b=A[P];if(p.setX(b,R[P*l]),l>=2&&p.setY(b,R[P*l+1]),l>=3&&p.setZ(b,R[P*l+2]),l>=4&&p.setW(b,R[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=$f[f.magFilter]||Bt,u.minFilter=$f[f.minFilter]||Si,u.wrapS=Zf[f.wrapS]||ar,u.wrapT=Zf[f.wrapT]||ar,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ot&&u.minFilter!==Bt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,m){let _=f;t.isImageBitmapLoader===!0&&(_=function(v){const p=new Ht(v);p.needsUpdate=!0,f(p)}),t.load(Jr.resolveURL(h,r.path),_,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),qn(h,o),h.userData.mimeType=o.mimeType||AE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new gs,_n.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new vs,_n.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return fo}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){const h=s[it.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],an),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,It)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Tn);const u=r.alphaMode||Xl.OPAQUE;if(u===Xl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Xl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ms&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ms&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ms){const h=r.emissiveFactor;a.emissive=new Be().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&o!==ms&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),qn(h,r),t.associations.set(h,{materials:e}),r.extensions&&cs(s,h,r),h})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=TE(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Jf(new Gt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?SE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,_=u.length;m<_;m++){const v=u[m],p=o[m];let d;const M=c[m];if(p.mode===bn.TRIANGLES||p.mode===bn.TRIANGLE_STRIP||p.mode===bn.TRIANGLE_FAN||p.mode===void 0)d=r.isSkinnedMesh===!0?new j0(v,M):new jt(v,M),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===bn.TRIANGLE_STRIP?d.geometry=Kf(d.geometry,wp):p.mode===bn.TRIANGLE_FAN&&(d.geometry=Kf(d.geometry,$c));else if(p.mode===bn.LINES)d=new uo(v,M);else if(p.mode===bn.LINE_STRIP)d=new Hu(v,M);else if(p.mode===bn.LINE_LOOP)d=new Q0(v,M);else if(p.mode===bn.POINTS)d=new Zr(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&EE(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),qn(d,r),p.extensions&&cs(s,d,p),t.assignFinalMaterial(d),h.push(d)}for(let m=0,_=h.length;m<_;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&cs(s,h[0],r),h[0];const f=new bi;r.extensions&&cs(s,f,r),t.associations.set(f,{meshes:e});for(let m=0,_=h.length;m<_;m++)f.add(h[m]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new nn(Cp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ha(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),qn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ku(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const m=s.channels[h],_=s.samplers[m.sampler],v=m.target,p=v.node,d=s.parameters!==void 0?s.parameters[_.input]:_.input,M=s.parameters!==void 0?s.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],m=h[1],_=h[2],v=h[3],p=h[4],d=[];for(let S=0,y=f.length;S<y;S++){const A=f[S],R=m[S],P=_[S],z=v[S],b=p[S];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const w=i._createAnimationTracks(A,R,P,z,b);if(w)for(let N=0;N<w.length;N++)d.push(w[N])}const M=new ux(r,void 0,d);return qn(M,s),M})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(f,wE)});for(let m=0,_=h.length;m<_;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Bp:c.length>1?u=new bi:c.length===1?u=c[0]:u=new Pt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),qn(u,r),r.extensions&&cs(i,u,r),r.matrix!==void 0){const h=new Qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new bi;i.name&&(r.name=s.createUniqueName(i.name)),qn(r,i),i.extensions&&cs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,m]of s.associations)(f instanceof _n||f instanceof Ht)&&h.set(f,m);return u.traverse(f=>{const m=s.associations.get(f);m!=null&&h.set(f,m)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Hi[r.path]===Hi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Hi[r.path]){case Hi.weights:c=hr;break;case Hi.rotation:c=fr;break;case Hi.translation:case Hi.scale:c=dr;break;default:switch(i.itemSize){case 1:c=hr;break;case 2:case 3:default:c=dr;break}break}const u=s.interpolation!==void 0?ME[s.interpolation]:ao,h=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){const _=new c(l[f]+"."+Hi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=su(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof fr?yE:$p;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function CE(n,e,t){const i=e.attributes,s=new kn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){const u=su(er[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new V,l=new V;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],m=f.min,_=f.max;if(m!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(_[2]))),f.normalized){const v=su(er[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new li;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Jf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=iu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return rt.workingColorSpace!==an&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),qn(n,e),CE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bE(n,e.targets,t):n})}const PE=/^[og]\s*(.+)?/,LE=/^mtllib /,IE=/^usemtl /,DE=/^usemap /,Qf=/\s+/,ed=new V,Yl=new V,td=new V,nd=new V,Sn=new V,na=new Be;function NE(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;ed.fromArray(s,e),Yl.fromArray(s,t),td.fromArray(s,i),Sn.subVectors(td,Yl),nd.subVectors(ed,Yl),Sn.cross(nd),Sn.normalize(),r.push(Sn.x,Sn.y,Sn.z),r.push(Sn.x,Sn.y,Sn.z),r.push(Sn.x,Sn.y,Sn.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),m=this.parseVertexIndex(i,u);if(this.addVertex(h,f,m),this.addColor(h,f,m),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),f=this.parseNormalIndex(l,_),m=this.parseNormalIndex(c,_),this.addNormal(h,f,m)}else this.addFaceNormal(h,f,m);if(s!==void 0&&s!==""){const _=this.uvs.length;h=this.parseUVIndex(s,_),f=this.parseUVIndex(r,_),m=this.parseUVIndex(o,_),this.addUV(h,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class UE extends Qi{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,o=new ka(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new NE;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(Qf);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(na.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),It),t.colors.push(na.r,na.g,na.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(Qf),m=[];for(let v=0,p=f.length;v<p;v++){const d=f[v];if(d.length>0){const M=d.split("/");m.push(M)}}const _=m[0];for(let v=1,p=m.length-1;v<p;v++){const d=m[v],M=m[v+1];t.addFace(_[0],d[0],M[0],_[1],d[1],M[1],_[2],d[2],M[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const m=[];if(c.indexOf("/")===-1)f=h;else for(let _=0,v=h.length;_<v;_++){const p=h[_].split("/");p[0]!==""&&f.push(p[0]),p[1]!==""&&m.push(p[1])}t.addLineGeometry(f,m)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=PE.exec(c))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(IE.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(LE.test(c))t.materialLibraries.push(c.substring(7).trim());else if(DE.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new bi;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",m=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const v=new Gt;v.setAttribute("position",new vt(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new vt(u.normals,3)),u.colors.length>0&&(_=!0,v.setAttribute("color",new vt(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new vt(u.uvs,2));const p=[];for(let M=0,S=h.length;M<S;M++){const y=h[M],A=y.name+"_"+y.smooth+"_"+_;let R=t.materials[A];if(this.materials!==null){if(R=this.materials.create(y.name),f&&R&&!(R instanceof vs)){const P=new vs;_n.prototype.copy.call(P,R),P.color.copy(R.color),R=P}else if(m&&R&&!(R instanceof gs)){const P=new gs({size:10,sizeAttenuation:!1});_n.prototype.copy.call(P,R),P.color.copy(R.color),P.map=R.map,R=P}}R===void 0&&(f?R=new vs:m?R=new gs({size:1,sizeAttenuation:!1}):R=new nx,R.name=y.name,R.flatShading=!y.smooth,R.vertexColors=_,t.materials[A]=R),p.push(R)}let d;if(p.length>1){for(let M=0,S=h.length;M<S;M++){const y=h[M];v.addGroup(y.groupStart,y.groupCount,M)}f?d=new uo(v,p):m?d=new Zr(v,p):d=new jt(v,p)}else f?d=new uo(v,p[0]):m?d=new Zr(v,p[0]):d=new jt(v,p[0]);d.name=c.name,r.add(d)}else if(t.vertices.length>0){const a=new gs({size:1,sizeAttenuation:!1}),l=new Gt;l.setAttribute("position",new vt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new vt(t.colors,3)),a.vertexColors=!0);const c=new Zr(l,a);r.add(c)}return r}}const cn=new Be;class FE extends Qi{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,i,s){const r=this,o=new ka(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(p,d=0){const M=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let S="";const y=M.exec(p);y!==null&&(S=y[1]);const A={comments:[],elements:[],headerLength:d,objInfo:""},R=S.split(/\r\n|\r|\n/);let P;function z(b,w){const N={type:b[0]};return N.type==="list"?(N.name=b[3],N.countType=b[1],N.itemType=b[2]):N.name=b[1],N.name in w&&(N.name=w[N.name]),N}for(let b=0;b<R.length;b++){let w=R[b];if(w=w.trim(),w==="")continue;const N=w.split(/\s+/),Y=N.shift();switch(w=N.join(" "),Y){case"format":A.format=N[0],A.version=N[1];break;case"comment":A.comments.push(w);break;case"element":P!==void 0&&A.elements.push(P),P={},P.name=N[0],P.count=parseInt(N[1]),P.properties=[];break;case"property":P.properties.push(z(N,v.propertyNameMapping));break;case"obj_info":A.objInfo=w;break;default:console.log("unhandled",Y,N)}}return P!==void 0&&A.elements.push(P),A}function i(p,d){switch(d){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(p);case"float":case"double":case"float32":case"float64":return parseFloat(p)}}function s(p,d){const M={};for(let S=0;S<p.length;S++){if(d.empty())return null;if(p[S].type==="list"){const y=[],A=i(d.next(),p[S].countType);for(let R=0;R<A;R++){if(d.empty())return null;y.push(i(d.next(),p[S].itemType))}M[p[S].name]=y}else M[p[S].name]=i(d.next(),p[S].type)}return M}function r(){const p={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const d of Object.keys(v.customPropertyMapping))p[d]=[];return p}function o(p){const d=p.map(S=>S.name);function M(S){for(let y=0,A=S.length;y<A;y++){const R=S[y];if(d.includes(R))return R}return null}return{attrX:M(["x","px","posx"])||"x",attrY:M(["y","py","posy"])||"y",attrZ:M(["z","pz","posz"])||"z",attrNX:M(["nx","normalx"]),attrNY:M(["ny","normaly"]),attrNZ:M(["nz","normalz"]),attrS:M(["s","u","texture_u","tx"]),attrT:M(["t","v","texture_v","ty"]),attrR:M(["red","diffuse_red","r","diffuse_r"]),attrG:M(["green","diffuse_green","g","diffuse_g"]),attrB:M(["blue","diffuse_blue","b","diffuse_b"])}}function a(p,d){const M=r(),S=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let y,A;(A=S.exec(p))!==null?y=A[1].split(/\s+/):y=[];const R=new OE(y);e:for(let P=0;P<d.elements.length;P++){const z=d.elements[P],b=o(z.properties);for(let w=0;w<z.count;w++){const N=s(z.properties,R);if(!N)break e;c(M,z.name,N,b)}}return l(M)}function l(p){let d=new Gt;p.indices.length>0&&d.setIndex(p.indices),d.setAttribute("position",new vt(p.vertices,3)),p.normals.length>0&&d.setAttribute("normal",new vt(p.normals,3)),p.uvs.length>0&&d.setAttribute("uv",new vt(p.uvs,2)),p.colors.length>0&&d.setAttribute("color",new vt(p.colors,3)),(p.faceVertexUvs.length>0||p.faceVertexColors.length>0)&&(d=d.toNonIndexed(),p.faceVertexUvs.length>0&&d.setAttribute("uv",new vt(p.faceVertexUvs,2)),p.faceVertexColors.length>0&&d.setAttribute("color",new vt(p.faceVertexColors,3)));for(const M of Object.keys(v.customPropertyMapping))p[M].length>0&&d.setAttribute(M,new vt(p[M],v.customPropertyMapping[M].length));return d.computeBoundingSphere(),d}function c(p,d,M,S){if(d==="vertex"){p.vertices.push(M[S.attrX],M[S.attrY],M[S.attrZ]),S.attrNX!==null&&S.attrNY!==null&&S.attrNZ!==null&&p.normals.push(M[S.attrNX],M[S.attrNY],M[S.attrNZ]),S.attrS!==null&&S.attrT!==null&&p.uvs.push(M[S.attrS],M[S.attrT]),S.attrR!==null&&S.attrG!==null&&S.attrB!==null&&(cn.setRGB(M[S.attrR]/255,M[S.attrG]/255,M[S.attrB]/255,It),p.colors.push(cn.r,cn.g,cn.b));for(const y of Object.keys(v.customPropertyMapping))for(const A of v.customPropertyMapping[y])p[y].push(M[A])}else if(d==="face"){const y=M.vertex_indices||M.vertex_index,A=M.texcoord;y.length===3?(p.indices.push(y[0],y[1],y[2]),A&&A.length===6&&(p.faceVertexUvs.push(A[0],A[1]),p.faceVertexUvs.push(A[2],A[3]),p.faceVertexUvs.push(A[4],A[5]))):y.length===4&&(p.indices.push(y[0],y[1],y[3]),p.indices.push(y[1],y[2],y[3])),S.attrR!==null&&S.attrG!==null&&S.attrB!==null&&(cn.setRGB(M[S.attrR]/255,M[S.attrG]/255,M[S.attrB]/255,It),p.faceVertexColors.push(cn.r,cn.g,cn.b),p.faceVertexColors.push(cn.r,cn.g,cn.b),p.faceVertexColors.push(cn.r,cn.g,cn.b))}}function u(p,d){const M={};let S=0;for(let y=0;y<d.length;y++){const A=d[y],R=A.valueReader;if(A.type==="list"){const P=[],z=A.countReader.read(p+S);S+=A.countReader.size;for(let b=0;b<z;b++)P.push(R.read(p+S)),S+=R.size;M[A.name]=P}else M[A.name]=R.read(p+S),S+=R.size}return[M,S]}function h(p,d,M){function S(y,A,R){switch(A){case"int8":case"char":return{read:P=>y.getInt8(P),size:1};case"uint8":case"uchar":return{read:P=>y.getUint8(P),size:1};case"int16":case"short":return{read:P=>y.getInt16(P,R),size:2};case"uint16":case"ushort":return{read:P=>y.getUint16(P,R),size:2};case"int32":case"int":return{read:P=>y.getInt32(P,R),size:4};case"uint32":case"uint":return{read:P=>y.getUint32(P,R),size:4};case"float32":case"float":return{read:P=>y.getFloat32(P,R),size:4};case"float64":case"double":return{read:P=>y.getFloat64(P,R),size:8}}}for(let y=0,A=p.length;y<A;y++){const R=p[y];R.type==="list"?(R.countReader=S(d,R.countType,M),R.valueReader=S(d,R.itemType,M)):R.valueReader=S(d,R.type,M)}}function f(p,d){const M=r(),S=d.format==="binary_little_endian",y=new DataView(p,d.headerLength);let A,R=0;for(let P=0;P<d.elements.length;P++){const z=d.elements[P],b=z.properties,w=o(b);h(b,y,S);for(let N=0;N<z.count;N++){A=u(R,b),R+=A[1];const Y=A[0];c(M,z.name,Y,w)}}return l(M)}function m(p){let d=0,M=!0,S="";const y=[],A=new TextDecoder().decode(p.subarray(0,5)),R=/^ply\r\n/.test(A);do{const P=String.fromCharCode(p[d++]);P!==`
`&&P!=="\r"?S+=P:(S==="end_header"&&(M=!1),S!==""&&(y.push(S),S=""))}while(M&&d<p.length);return R===!0&&d++,{headerText:y.join("\r")+"\r",headerLength:d}}let _;const v=this;if(e instanceof ArrayBuffer){const p=new Uint8Array(e),{headerText:d,headerLength:M}=m(p),S=t(d,M);if(S.format==="ascii"){const y=new TextDecoder().decode(p);_=a(y,S)}else _=f(e,S)}else _=a(e,t(e));return _}}class OE{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}const BE={appName:"Facets Labeler",operationGuide:"操作ガイド",scene:"Scene",statusReady:"面の選択とグループ化を開始できます",statusLoading:"読み込み中: {name}",statusLoaded:"読み込み完了: {name}",statusLoadFailed:"読み込み失敗: {message}",statusUnsupportedFormat:"対応拡張子: glb, gltf, obj, ply",statusSelectGroupFirst:"面を追加・削除するにはグループを選択してください",statusSelectGroupToOperate:"面を操作するグループを選択してください",statusFaceAdded:"{group} に面 {index} を追加",statusFaceRemoved:"{group} から面 {index} を解除",statusRectAdded:"{group} に矩形内の面を {count} 件追加",statusRectRemoved:"{group} から矩形内の {count} 面の選択を解除",statusRectNoNew:"矩形内に新しい面はありませんでした",statusCtrlAdded:"{group} に Ctrl で {count} 面を追加",statusCtrlRemoved:"{group} から Ctrl で {count} 面の選択を解除",statusCtrlBoth:"{group} に Ctrl で {added} 面追加 / {removed} 面解除",statusCtrlNoChange:"Ctrl 操作で選択の変化はありません",statusGroupCreated:"{name} を作成しました",statusGroupCreatedEmpty:"{name} を空で作成しました。面を選択して追加できます",statusGroupDeleted:"{name} を削除しました",statusTagChanged:"{name} のタグを {tag} に設定しました",statusGroupsLoaded:"{count} グループを読み込みました",statusNoMesh:"解析するメッシュがありません",statusNoGroups:"解析するグループがありません",statusAnalyzing:"解析を実行中...",statusAddedToGroup:"{count} 件を {name} に追加しました",statusAlreadyInGroup:"既にグループに含まれています",statusSelectFacesToAdd:"追加する面を選択してください",statusNoGroup:"グループがありません",colorizeSurface:"面をカラーリング",wireframe:"ワイヤーフレーム",vertexGuide:"頂点ガイド",usageHints:"操作ヒント",help:"ヘルプ",hintFaceSelectTitle:"面選択",hintFaceSelect:"クリックで追加 / Ctrl + クリック or ドラッグで選択・解除",hintRectSelectTitle:"矩形選択",hintRectSelect:"Shift + ドラッグで追加 / Ctrl + Shift で解除",hintOrbitControlsTitle:"カメラ操作",hintOrbitControls:"左ドラッグで回転 / 右ドラッグ or Space/Alt + 左ドラッグでパン / ホイールでズーム",hintGroupSelectTitle:"グループ操作",hintGroupSelect:"グループ選択中: クリック/矩形は選択中グループに直接追加・解除",hintClickOrDrag:"クリックまたは Shift+ドラッグで面を選択",btnHideLeftPanel:"左パネルを隠す",btnShowLeftPanel:"左パネルを表示",btnHideGroupPanel:"グループパネルを隠す",btnShowGroupPanel:"グループパネルを開く",btnLoadMesh:"メッシュを読み込む",btnRunAnalysis:"解析実行",btnAdd:"追加",btnDelete:"削除",groups:"Groups",groupList:"グループ一覧",groupName:"グループ名",selectedGroup:"選択中",changeTag:"タグを変更",unset:"未設定",faces:"面",hoverFace:"Face",analysisSettings:"解析設定",analysisType:"解析タイプ",linear:"線形",nonlinear:"非線形",youngsModulus:"ヤング率 [MPa]",poissonRatio:"ポアソン比"},VE={appName:"Facets Labeler",operationGuide:"Operation Guide",scene:"Scene",statusReady:"Ready to select and group faces",statusLoading:"Loading: {name}",statusLoaded:"Loaded: {name}",statusLoadFailed:"Load failed: {message}",statusUnsupportedFormat:"Supported formats: glb, gltf, obj, ply",statusSelectGroupFirst:"Select a group to add/remove faces",statusSelectGroupToOperate:"Select a group to operate on faces",statusFaceAdded:"Added face {index} to {group}",statusFaceRemoved:"Removed face {index} from {group}",statusRectAdded:"Added {count} faces in rectangle to {group}",statusRectRemoved:"Removed {count} faces in rectangle from {group}",statusRectNoNew:"No new faces in rectangle",statusCtrlAdded:"Added {count} faces with Ctrl to {group}",statusCtrlRemoved:"Removed {count} faces with Ctrl from {group}",statusCtrlBoth:"Ctrl: added {added}, removed {removed} faces in {group}",statusCtrlNoChange:"No change with Ctrl operation",statusGroupCreated:"Created {name}",statusGroupCreatedEmpty:"Created empty {name}. Select faces to add",statusGroupDeleted:"Deleted {name}",statusTagChanged:"Set {name} tag to {tag}",statusGroupsLoaded:"Loaded {count} groups",statusNoMesh:"No mesh to analyze",statusNoGroups:"No groups to analyze",statusAnalyzing:"Running analysis...",statusAddedToGroup:"Added {count} items to {name}",statusAlreadyInGroup:"Already in group",statusSelectFacesToAdd:"Select faces to add",statusNoGroup:"No group available",colorizeSurface:"Colorize Surface",wireframe:"Wireframe",vertexGuide:"Vertex Guide",usageHints:"Usage Hints",help:"Help",hintFaceSelectTitle:"Face Selection",hintFaceSelect:"Click to add / Ctrl + click or drag to toggle",hintRectSelectTitle:"Rectangle Selection",hintRectSelect:"Shift + drag to add / Ctrl + Shift to remove",hintOrbitControlsTitle:"Camera Controls",hintOrbitControls:"Left drag to rotate / Right drag or Space/Alt + left drag to pan / Wheel to zoom",hintGroupSelectTitle:"Group Operations",hintGroupSelect:"With group selected: Click/rectangle directly adds/removes from group",hintClickOrDrag:"Click or Shift+drag to select faces",btnHideLeftPanel:"Hide Left Panel",btnShowLeftPanel:"Show Left Panel",btnHideGroupPanel:"Hide Group Panel",btnShowGroupPanel:"Show Group Panel",btnLoadMesh:"Load Mesh",btnRunAnalysis:"Run Analysis",btnAdd:"Add",btnDelete:"Delete",groups:"Groups",groupList:"Group List",groupName:"Group name",selectedGroup:"Selected",changeTag:"Change Tag",unset:"Unset",faces:"faces",hoverFace:"Face",analysisSettings:"Analysis Settings",analysisType:"Analysis Type",linear:"Linear",nonlinear:"Nonlinear",youngsModulus:"Young's Modulus [MPa]",poissonRatio:"Poisson's Ratio"},wa={ja:BE,en:VE},kE="ja",pr=Nt(kE);function Ne(n,e={}){let i=(wa[pr.value]||wa.ja)[n]||n;return Object.entries(e).forEach(([s,r])=>{i=i.replace(new RegExp(`\\{${s}\\}`,"g"),r)}),i}function zE(n){wa[n]&&(pr.value=n,localStorage.setItem("lang",n))}function id(){const n=pr.value==="ja"?"en":"ja";zE(n)}const Kl=localStorage.getItem("lang");Kl&&wa[Kl]&&(pr.value=Kl);const HE={class:"panel"},GE={class:"panel__header"},WE={class:"eyebrow"},XE={class:"status"},jE={class:"toggle-row"},YE={class:"toggle"},KE={class:"toggle"},qE={class:"toggle"},$E={class:"analysis-settings"},ZE={class:"eyebrow muted"},JE={class:"setting-row"},QE={class:"setting-label"},eT={class:"radio-group"},tT={class:"radio-option"},nT={class:"radio-option"},iT={class:"setting-row"},sT={class:"setting-label"},rT={class:"setting-row"},oT={class:"setting-label"},aT={class:"viewer"},lT={class:"viewer__header"},cT={class:"eyebrow"},uT={class:"viewer__actions"},hT={class:"hint"},fT=["title"],dT=["title"],pT={key:1,class:"hover-info"},mT={class:"hover-info__label"},gT={class:"hover-info__value"},_T={class:"hover-info__value"},xT={class:"hover-info__value"},vT={class:"hover-info__value"},yT={key:0,class:"group-sidebar"},MT={class:"group-sidebar__header"},ST={class:"eyebrow"},bT={class:"group-create"},ET={class:"group-create__row"},TT=["placeholder"],AT={class:"group-list-wrap"},wT={class:"group-list"},RT=["onClick"],CT={class:"group-list__main"},PT={class:"group-meta"},LT={class:"group-name-row"},IT={class:"group-name"},DT={class:"tag-chip tag-chip--muted"},NT={class:"group-color-code"},UT={class:"badge"},FT=["onClick"],OT={key:0,class:"group-sidebar__current"},BT={class:"eyebrow muted"},VT={class:"current-card"},kT={class:"current-meta"},zT={class:"current-name"},HT={class:"current-row"},GT={class:"tag-chip"},WT={class:"current-count"},XT={class:"tag-editor"},jT={class:"eyebrow muted"},YT=["aria-label"],KT=["value"],qT={class:"popup"},$T={class:"popup__header"},ZT={class:"popup__body"},JT={class:"help-section"},QT={class:"help-section"},eA={class:"help-section"},tA={class:"help-section"},nA=".msh,.inp,.bdf,.vtu,.vtk",iA="#14f195",sA={__name:"App",setup(n){const e=Nt(null),t=Nt(null),i=Nt(Ne("statusReady")),s=Nt(!0),r=Nt(!0),o=Nt(!0),a=Nt("linear"),l=Nt(21e4),c=Nt(.3),u=Nt(!1),h=!0,f=["msh","inp","bdf","vtu","vtk"],m=Nt(null),_=Nt([]),v=Nt({visible:!1,left:0,top:0,width:0,height:0}),p=Nt([]),d=Nt(`${Ne("groupName")} 1`),M=["Dirichlet","Neumann (pull)","Neumann (push)"],S=M[0],y=Nt(null),A=Nt(!1),R=rc(()=>p.value.find(g=>g.id===y.value)),P=rc({get:()=>R.value?.tag??S,set:g=>{const E=R.value;if(!E)return;const L=g||S;E.tag!==L&&(So(E.id,L),K(Ne("statusTagChanged",{name:E.name,tag:L})))}}),z=Nt(!0),b=Nt(null),w=["#00d5ff","#f97316","#a855f7","#ff4d8a","#facc15","#6366f1","#f43f5e"];let N=0,Y,G,$,J,q,k=null,ee=null,ye=null,me=null,Me=new WeakMap,ke=!1,ze=null,ht="add",lt=!1,te=!1,ce=!1,Pe=!1,Ge=null;const Ee=new Map,tt=new Map,I=new V,F=new Set(["Space","AltLeft","AltRight"]),X={LEFT:En.ROTATE,MIDDLE:En.DOLLY,RIGHT:En.PAN},ie={LEFT:En.PAN,MIDDLE:En.DOLLY,RIGHT:En.ROTATE},Z=g=>{if(!(g instanceof HTMLElement))return!1;const E=g.tagName.toLowerCase();return E==="input"||E==="textarea"||g.isContentEditable},ne=()=>{J&&(J.mouseButtons=te?ie:X)},C=g=>{g&&(g.parent?g.parent.remove(g):Y&&Y.remove(g),g.geometry&&g.geometry.dispose?.(),g.material&&g.material.dispose?.())},he=g=>{if(!g)return;const E=tt.get(g);E&&(C(E),tt.delete(g))},oe=()=>{tt.forEach(g=>C(g)),tt.clear()},K=g=>{i.value=g},ae=()=>{t.value?.click()},T=()=>{const g=R.value;return g||(K(Ne("statusSelectGroupFirst")),null)},x=()=>{Y=new G0,Y.background=new Be("#0f172a"),G=new nn(45,1,.01,1e3),G.position.set(2,2,2),$=new Nb({antialias:!0}),$.setSize(e.value.clientWidth,e.value.clientHeight),$.outputColorSpace=It,e.value.appendChild($.domElement),J=new Fb(G,$.domElement),J.enableDamping=!0,J.dampingFactor=.07,ne();const g=new bx(16777215,.6);Y.add(g);const E=new Hp(16777215,.8);E.position.set(5,6,4),Y.add(E);const L=new Fx(10,20,5208575,2307157);Y.add(L),Y.add(new Ox(1.5)),q=new Ux;const O=()=>{if(!e.value)return;const{clientWidth:H,clientHeight:se}=e.value;G.aspect=H/se,G.updateProjectionMatrix(),$.setSize(H,se)};window.addEventListener("resize",O),O();const U=()=>{ee=requestAnimationFrame(U),J.update(),$.render(Y,G)};return U(),()=>{window.removeEventListener("resize",O)}},D=()=>{Q(),yo(),Sr(),oe(),Me=new WeakMap,k&&(k.traverse(g=>{g.isMesh&&(g.geometry?.dispose(),Array.isArray(g.material)?g.material.forEach(E=>E.dispose?.()):g.material?.dispose?.())}),Y.remove(k),k=null)},j=g=>{const E=new kn().setFromObject(g),L=E.getSize(new V),O=E.getCenter(new V),U=Math.max(L.x,L.y,L.z)||1,H=U*1.8;G.position.copy(O).add(new V(H,H,H)),G.near=U/500,G.far=U*50,G.updateProjectionMatrix(),J.target.copy(O),J.update()},Q=()=>{me&&(me.children.forEach(g=>{g.material&&g.material.dispose?.()}),Y.remove(me),me=null)},W=()=>{Q(),k&&(me=new bi,k.traverse(g=>{if(!g.isMesh||!g.geometry)return;const L=(g.geometry.boundingBox?g.geometry.boundingBox:new kn().setFromObject(g)).getSize(new V),O=Math.max(L.x,L.y,L.z)||1,U=Math.max(O*.004,.004),H=new gs({color:8246268,size:U,sizeAttenuation:!0}),se=new Zr(g.geometry,H);se.matrixAutoUpdate=!1,se.applyMatrix4(g.matrixWorld),me.add(se)}),me.visible=r.value,Y.add(me))},Te=(g,E)=>{if(g.type!=="face"||!g.faceKey)return;he(g.faceKey);const L=new Gt;L.setAttribute("position",new vt(g.vertices,3)),L.computeVertexNormals();const O=new fo({color:new Be(E),transparent:!0,opacity:.58,side:Tn,depthWrite:!1}),U=new jt(L,O);Y.add(U),tt.set(g.faceKey,U),g.helper=U},pe=g=>{const[E]=g.target.files||[];E&&Ce(E)},Ce=async g=>{const E=g.name.split(".").pop()?.toLowerCase();if(!E||!f.includes(E)){K(Ne("statusUnsupportedFormat"));return}m.value=g,K(Ne("statusMeshFileLoaded",{name:g.name}))},Fe=async(g,E,L=null)=>{const O=g.split(".").pop()?.toLowerCase();if(!O||!["gltf","glb","obj","ply"].includes(O)){K(Ne("statusUnsupportedFormat"));return}K(Ne("statusLoading",{name:E})),D();try{let U=null;if(O==="gltf"||O==="glb")U=(await new qb().loadAsync(g)).scene;else if(O==="obj")U=await new UE().loadAsync(g);else if(O==="ply"){const se=await(await fetch(g)).arrayBuffer(),re=new FE().parse(se);re.computeVertexNormals();const ge=new fo({color:9155071,metalness:.05,roughness:.55,side:Tn});U=new jt(re,ge)}if(!U)throw new Error("読み込みに失敗しました");Y.add(U),k=U,j(U),Me=new WeakMap,ve(),W(),_.value=[],p.value=[],K(Ne("statusLoaded",{name:E})),L&&await fe(L)}catch(U){K(Ne("statusLoadFailed",{message:U.message})),console.error(U)}},fe=async g=>{try{const E=await fetch(g);if(!E.ok)return;const L=await E.json();if(!L.groups||!Array.isArray(L.groups))return;const O=[];if(k.traverse(H=>{H.isMesh&&H.geometry?.attributes?.position&&O.push(H)}),!O.length)return;const U=O[0];for(const H of L.groups){const se=H.color||br(),re={id:crypto.randomUUID?.()??Date.now().toString(),name:H.name||`グループ ${p.value.length+1}`,color:se,tag:H.tag||S,items:[]},ge=[];for(const we of H.faceIndices||[]){const De=xe(U,we,se);De&&(Te(De,se),ge.push(De))}re.items=ge,p.value=[...p.value,re]}p.value.length&&(y.value=p.value[0].id,K(Ne("statusGroupsLoaded",{count:p.value.length})))}catch(E){console.error("グループJSON読み込みエラー:",E)}},ve=()=>{k&&k.traverse(g=>{if(!g.isMesh)return;const E=Me.get(g)??g.material;if(Me.has(g)||Me.set(g,E),o.value){const O=(Array.isArray(E)?E:[E]).map(U=>{if(!U)return U;const H=U.clone?U.clone():U;return H.color&&(H.color=new Be(7320063)),"emissive"in H&&H.emissive&&(H.emissive=new Be(725544)),"roughness"in H&&(H.roughness=.45),"metalness"in H&&(H.metalness=.08),"wireframe"in H&&(H.wireframe=s.value),H});g.material=Array.isArray(E)?O:O[0]}else g.material=E,Array.isArray(g.material)?g.material.forEach(L=>{L&&"wireframe"in L&&(L.wireframe=s.value)}):g.material&&"wireframe"in g.material&&(g.material.wireframe=s.value)})},Se=g=>{if(!k)return null;const E=$.domElement.getBoundingClientRect(),L=(g.clientX-E.left)/E.width*2-1,O=-((g.clientY-E.top)/E.height)*2+1,U=new je(L,O);q.setFromCamera(U,G);const H=[];k.traverse(re=>{re.isMesh&&H.push(re)});const se=q.intersectObjects(H,!0);return se.length?se[0]:null},Le=g=>{const E=Se(g);if(!E||typeof E.faceIndex!="number"){b.value=null;return}const L=E.object,O=E.faceIndex,U=L.geometry,H=U.attributes.position,se=U.index,re=se?[se.getX(O*3),se.getX(O*3+1),se.getX(O*3+2)]:[O*3,O*3+1,O*3+2],ge=new V,we=new V,De=new V;ge.set(H.getX(re[0]),H.getY(re[0]),H.getZ(re[0])),we.set(H.getX(re[1]),H.getY(re[1]),H.getZ(re[1])),De.set(H.getX(re[2]),H.getY(re[2]),H.getZ(re[2])),ge.applyMatrix4(L.matrixWorld),we.applyMatrix4(L.matrixWorld),De.applyMatrix4(L.matrixWorld);const Ue=new V().addVectors(ge,we).add(De).divideScalar(3);b.value={faceIndex:O,x:Ue.x.toFixed(4),y:Ue.y.toFixed(4),z:Ue.z.toFixed(4)}},xe=(g,E,L=iA)=>{const O=g.geometry;if(!O?.attributes?.position)return null;const U=O.attributes.position,H=O.index,se=`${g.uuid}-${E}`;g.updateWorldMatrix?.(!0,!1);const re=new V,we=(H?[H.getX(E*3),H.getX(E*3+1),H.getX(E*3+2)]:[E*3,E*3+1,E*3+2]).flatMap(De=>(re.set(U.getX(De),U.getY(De),U.getZ(De)),re.applyMatrix4(g.matrixWorld),[re.x,re.y,re.z]));return{id:crypto.randomUUID?.()??`${Date.now().toString()}-${Math.random()}`,type:"face",faceIndex:E,faceKey:se,vertices:we,helper:null,color:L}},Ke=(g,E)=>E?E.items.some(L=>L.type==="face"&&L.faceKey===g):_.value.some(L=>L.type==="face"&&L.faceKey===g),B=g=>{if(Ge)return;const E=R.value;Ge=Ke(g,E)?"remove":"add"},Ae=g=>{if(!ce||!R.value)return;const E=Se(g);if(!E||typeof E.faceIndex!="number")return;const L=`${E.object.uuid}-${E.faceIndex}`;B(L),Ee.has(L)||Ee.set(L,{object:E.object,faceIndex:E.faceIndex})},_e=g=>{if(!ce)return;g&&Ae(g),ce=!1,g||(Pe=!1);const E=T();if(!E){Ee.clear(),Ge=null;return}let L=Ge;if(!L&&Ee.size){const ge=Ee.values().next().value,we=`${ge.object.uuid}-${ge.faceIndex}`;L=Ke(we,E)?"remove":"add"}if(Ge=null,!Ee.size){K("Ctrl 操作で選択の変化はありません");return}const O=E.color,U=[],H=[];let se=0;Ee.forEach(({object:ge,faceIndex:we})=>{const De=`${ge.uuid}-${we}`,Ue=Ke(De,E);if(L==="remove"){if(!Ue)return;H.push(De);return}if(Ue)return;const $e=xe(ge,we,O);$e&&U.push($e)}),Ee.clear();let re=0;H.length&&(se=ui(E,H)),re=As(E,U),K(re&&se?`${E.name} に Ctrl で ${re} 面追加 / ${se} 面解除`:re?`${E.name} に Ctrl で ${re} 面を追加`:se?`${E.name} から Ctrl で ${se} 面の選択を解除`:"Ctrl 操作で選択の変化はありません")},Ie=(g,E="add")=>{const L=T();if(!L||!g||typeof g.faceIndex!="number")return;const O=g.faceIndex,U=`${g.object.uuid}-${O}`;if(E==="remove"){ui(L,U)&&K(`${L.name} から面 ${O} を解除`);return}As(L,[xe(g.object,O,L.color)])&&K(`${L.name} に面 ${O} を追加`)},de=(g,E)=>{if(!$?.domElement)return;const L=$.domElement.getBoundingClientRect(),O=Math.min(g.x,E.x)-L.left,U=Math.min(g.y,E.y)-L.top,H=Math.abs(g.x-E.x),se=Math.abs(g.y-E.y);v.value={visible:!0,left:O,top:U,width:H,height:se}},le=()=>{v.value={visible:!1,left:0,top:0,width:0,height:0}},be=(g,E,L,O)=>{if(!G||!q)return!1;const U=I.copy(L).sub(G.position),H=U.length();if(!H)return!1;const se=q.near,re=q.far;q.set(G.position,U.normalize()),q.near=G.near,q.far=H+1e-4;const ge=q.intersectObjects(O,!0);if(q.near=se,q.far=re,!ge.length)return!1;const we=ge[0];return we.object===g&&we.faceIndex===E},qe=(g,E,L="add")=>{const O=T();if(!O||!k||!$?.domElement)return;const U=O.color,H=$.domElement.getBoundingClientRect(),se=Ct=>({x:(Ct.x-H.left)/H.width*2-1,y:-((Ct.y-H.top)/H.height)*2+1}),re=se(g),ge=se(E),we=Math.min(re.x,ge.x),De=Math.max(re.x,ge.x),Ue=Math.min(re.y,ge.y),$e=Math.max(re.y,ge.y),ot=[];let St=0;const At=new Set(O.items.filter(Ct=>Ct.type==="face").map(Ct=>Ct.faceKey)),ut=[];k.traverse(Ct=>{Ct.isMesh&&Ct.geometry?.attributes?.position&&ut.push(Ct)});const Ve=new V,at=new V,st=new V,Wt=new V,yn=new V;if(ut.forEach(Ct=>{const mt=Ct.geometry,wt=mt.attributes.position,Lt=mt.index,Xt=Lt?Lt.count/3:wt.count/3;for(let bt=0;bt<Xt;bt+=1){const es=Lt?Lt.getX(bt*3):bt*3,Pn=Lt?Lt.getX(bt*3+1):bt*3+1,Ka=Lt?Lt.getX(bt*3+2):bt*3+2;if(Ve.set(wt.getX(es),wt.getY(es),wt.getZ(es)).applyMatrix4(Ct.matrixWorld),at.set(wt.getX(Pn),wt.getY(Pn),wt.getZ(Pn)).applyMatrix4(Ct.matrixWorld),st.set(wt.getX(Ka),wt.getY(Ka),wt.getZ(Ka)).applyMatrix4(Ct.matrixWorld),Wt.copy(Ve).add(at).add(st).divideScalar(3),yn.copy(Wt).project(G),yn.x<we||yn.x>De||yn.y<Ue||yn.y>$e||!be(Ct,bt,Wt,ut))continue;const qa=`${Ct.uuid}-${bt}`;if(L==="remove"){St+=ui(O,qa);continue}if(At.has(qa))continue;const Yu=xe(Ct,bt,U);Yu&&(ot.push(Yu),At.add(qa))}}),L==="remove"){St&&K(`${O.name} から矩形内の ${St} 面の選択を解除`);return}if(!ot.length){K("矩形内に新しい面はありませんでした");return}const Yt=As(O,ot);K(Yt?`${O.name} に矩形内の面を ${Yt} 件追加`:"矩形内に新しい面はありませんでした")},pt=g=>{if(Pe){Pe=!1;return}if(te||!T())return;const E=Se(g);if(!E)return;const L=g.ctrlKey?"remove":"add";Ie(E,L)},ct=g=>{J&&(g.ctrlKey||g.metaKey)&&(J.enabled=!1,lt=!0)},xn=()=>{J&&lt&&(J.enabled=!0),lt=!1},vn=g=>{if(te)return;if(!R.value){K(Ne("statusSelectGroupToOperate"));return}if(!k||(ct(g),g.button!==0))return;if(g.ctrlKey&&!g.shiftKey){ce=!0,Pe=!0,Ge=null,Ee.clear(),Ae(g),J&&(J.enabled=!1);return}if(!g.shiftKey)return;ke=!0,ht=g.ctrlKey?"remove":"add",ze={x:g.clientX,y:g.clientY},de(ze,ze),J&&(J.enabled=!1);const E=Se(g);E&&Ie(E,ht)},vo=g=>{if(ce){g.buttons&1&&Ae(g);return}ke&&ze&&de(ze,{x:g.clientX,y:g.clientY})},vr=(g,{cancel:E}={})=>{if(ke){if(!E&&ze){const L=g?{x:g.clientX,y:g.clientY}:{x:ze.x,y:ze.y};qe(ze,L,ht)}ke=!1,ze=null,ht="add",le(),J&&(J.enabled=!0)}},bs=g=>{vr(g,{cancel:!0})},Es=g=>{_e(g),vr(g),xn()},yr=g=>{F.has(g.code)&&(Z(g.target)||g.preventDefault(),te||(te=!0,ne()))},Mr=g=>{F.has(g.code)&&(te=!1,ne())},Gn=()=>{te&&(te=!1,ne()),_e()},Sr=()=>{const g=_.value.map(E=>E.faceKey).filter(Boolean);g.forEach(E=>he(E)),p.value.forEach(E=>ui(E,g)),_.value=[]},yo=()=>{p.value.forEach(g=>{g.items.forEach(E=>he(E.faceKey))}),p.value=[]},br=()=>{const g=w[N%w.length];return N+=1,g},Ts=(g,E)=>g.map(L=>(L.helper?.material?.color&&(L.helper.material.color=new Be(E),"emissive"in L.helper.material&&L.helper.material.emissive&&(L.helper.material.emissive=new Be(E).multiplyScalar(.2))),{...L,color:E})),As=(g,E)=>{if(!g||!E.length)return 0;const L=new Set(g.items.map(H=>H.faceKey)),O=[],U=[];if(E.forEach(H=>{if(!H)return;const se=H.faceKey;if(!se||L.has(se))return;U.push(se);const re={...H,color:g.color};Te(re,g.color),O.push(re),L.add(se)}),O.length){const H=new Set(U);p.value=p.value.map(se=>se.id===g.id?{...se,items:[...se.items,...O]}:se.items.some(ge=>H.has(ge.faceKey))?{...se,items:se.items.filter(ge=>!H.has(ge.faceKey))}:se)}return O.length},ui=(g,E)=>{if(!g)return 0;const L=new Set(Array.isArray(E)?E:[E]);let O=0;const U=g.items.filter(H=>{const se=H.faceKey;return se&&L.has(se)?(he(se),O+=1,!1):!0});return O&&(p.value=p.value.map(H=>H.id===g.id?{...H,items:U}:H)),O},Mo=(g=!0)=>{const E=d.value.trim()||`グループ ${p.value.length+1}`,L=br(),O=g?_.value:[],U=Ts(O,L),H={id:crypto.randomUUID?.()??Date.now().toString(),name:E,color:L,tag:S,items:U};p.value=[...p.value,H],g&&(_.value=[]),d.value=`${Ne("groupName")} ${p.value.length+1}`,y.value=H.id,K(g&&O.length?Ne("statusGroupCreated",{name:E}):Ne("statusGroupCreatedEmpty",{name:E}))},So=(g,E)=>{p.value=p.value.map(L=>L.id===g?{...L,tag:E}:L)},Xa=g=>{y.value=g},bo=g=>g.items.length,ja=g=>{const E=p.value.find(L=>L.id===g);E&&(E.items.forEach(L=>{L.helper&&C(L.helper)}),p.value=p.value.filter(L=>L.id!==g),y.value===g&&(y.value=p.value[0]?.id??null),K(Ne("statusGroupDeleted",{name:E.name})))},Ya=()=>{if(!k){K(Ne("statusNoMesh"));return}if(!p.value.length){K(Ne("statusNoGroups"));return}K(Ne("statusAnalyzing"))},Eo=g=>{Le(g)},To=()=>{b.value=null};return Od(()=>{ye=x(),$?.domElement&&($.domElement.addEventListener("click",pt),$.domElement.addEventListener("pointerdown",vn),$.domElement.addEventListener("pointermove",vo),$.domElement.addEventListener("pointerup",Es),$.domElement.addEventListener("pointerleave",bs),$.domElement.addEventListener("mousemove",Eo),$.domElement.addEventListener("mouseleave",To)),window.addEventListener("pointerup",Es),window.addEventListener("keydown",yr,{passive:!1}),window.addEventListener("keyup",Mr),window.addEventListener("blur",Gn),Fe("/data/mesh_init.obj","mesh_init.obj","/data/mesh_init.json")}),Zs([o,s],()=>{ve()}),Zs(r,g=>{me&&(me.visible=g)}),Zs(p,g=>{if(!g.length){y.value=null;return}(!y.value||!g.some(E=>E.id===y.value))&&(y.value=g[0].id)},{deep:!0}),Bd(()=>{ye&&ye(),$?.domElement&&$.domElement.removeEventListener("click",pt),$?.domElement&&($.domElement.removeEventListener("pointerdown",vn),$.domElement.removeEventListener("pointermove",vo),$.domElement.removeEventListener("pointerup",Es),$.domElement.removeEventListener("pointerleave",bs),$.domElement.removeEventListener("mousemove",Eo),$.domElement.removeEventListener("mouseleave",To)),window.removeEventListener("pointerup",Es),window.removeEventListener("keydown",yr),window.removeEventListener("keyup",Mr),window.removeEventListener("blur",Gn),D(),$&&$.dispose(),J&&J.dispose(),ee&&cancelAnimationFrame(ee)}),(g,E)=>(Yn(),fi("main",{class:Ks(["layout",{"layout--panel-hidden":!A.value}])},[Wn(ue("section",HE,[ue("header",GE,[ue("div",null,[ue("p",WE,He(Xe(Ne)("appName")),1),ue("h1",null,He(Xe(Ne)("operationGuide")),1)]),ue("div",XE,He(i.value),1)]),ue("div",jE,[ue("label",YE,[Wn(ue("input",{"onUpdate:modelValue":E[0]||(E[0]=L=>o.value=L),type:"checkbox"},null,512),[[al,o.value]]),ue("span",null,He(Xe(Ne)("colorizeSurface")),1)]),ue("label",KE,[Wn(ue("input",{"onUpdate:modelValue":E[1]||(E[1]=L=>s.value=L),type:"checkbox"},null,512),[[al,s.value]]),ue("span",null,He(Xe(Ne)("wireframe")),1)]),ue("label",qE,[Wn(ue("input",{"onUpdate:modelValue":E[2]||(E[2]=L=>r.value=L),type:"checkbox"},null,512),[[al,r.value]]),ue("span",null,He(Xe(Ne)("vertexGuide")),1)])]),ue("div",$E,[ue("span",ZE,He(Xe(Ne)("analysisSettings")),1),ue("div",JE,[ue("label",QE,He(Xe(Ne)("analysisType")),1),ue("div",eT,[ue("label",tT,[Wn(ue("input",{"onUpdate:modelValue":E[3]||(E[3]=L=>a.value=L),type:"radio",value:"linear"},null,512),[[ll,a.value]]),ue("span",null,He(Xe(Ne)("linear")),1)]),ue("label",nT,[Wn(ue("input",{"onUpdate:modelValue":E[4]||(E[4]=L=>a.value=L),type:"radio",value:"nonlinear"},null,512),[[ll,a.value]]),ue("span",null,He(Xe(Ne)("nonlinear")),1)])])]),ue("div",iT,[ue("label",sT,He(Xe(Ne)("youngsModulus")),1),Wn(ue("input",{"onUpdate:modelValue":E[5]||(E[5]=L=>l.value=L),type:"number",class:"setting-input",step:"1000"},null,512),[[ol,l.value,void 0,{number:!0}]])]),ue("div",rT,[ue("label",oT,He(Xe(Ne)("poissonRatio")),1),Wn(ue("input",{"onUpdate:modelValue":E[6]||(E[6]=L=>c.value=L),type:"number",class:"setting-input",step:"0.01",min:"0",max:"0.5"},null,512),[[ol,c.value,void 0,{number:!0}]])])])],512),[[Qg,A.value]]),ue("section",aT,[ue("div",lT,[ue("div",null,[ue("p",cT,He(Xe(Ne)("scene")),1),ue("h2",null,He(Xe(Ne)("appName")),1)]),ue("div",uT,[ue("p",hT,He(Xe(Ne)("hintClickOrDrag")),1),ue("button",{class:"ghost small-btn",type:"button",onClick:E[7]||(E[7]=L=>A.value=!A.value)},He(A.value?Xe(Ne)("btnHideLeftPanel"):Xe(Ne)("btnShowLeftPanel")),1),ue("button",{class:"ghost small-btn",type:"button",onClick:E[8]||(E[8]=L=>z.value=!z.value)},He(z.value?Xe(Ne)("btnHideGroupPanel"):Xe(Ne)("btnShowGroupPanel")),1),ue("button",{class:"small-btn",type:"button",onClick:ae,disabled:h},He(Xe(Ne)("btnLoadMesh")),1),ue("button",{class:"small-btn primary",type:"button",onClick:Ya},He(Xe(Ne)("btnRunAnalysis")),1),ue("button",{class:"lang-toggle",type:"button",onClick:E[9]||(E[9]=(...L)=>Xe(id)&&Xe(id)(...L)),title:Xe(pr)==="ja"?"Switch to English":"日本語に切替"},He(Xe(pr)==="ja"?"🇯🇵":"🇺🇸"),9,fT),ue("button",{class:"help-toggle",type:"button",onClick:E[10]||(E[10]=L=>u.value=!0),title:Xe(Ne)("help")}," ? ",8,dT),ue("input",{ref_key:"fileInput",ref:t,type:"file",accept:nA,class:"hidden-input",onChange:pe},null,544)])]),ue("div",{class:Ks(["viewer__body",{"viewer__body--sidebar-open":z.value}])},[ue("div",{class:"canvas-wrap",ref_key:"canvasHost",ref:e},[v.value.visible?(Yn(),fi("div",{key:0,class:"drag-rect",style:ds({left:`${v.value.left}px`,top:`${v.value.top}px`,width:`${v.value.width}px`,height:`${v.value.height}px`})},null,4)):Ar("",!0),b.value?(Yn(),fi("div",pT,[ue("span",mT,He(Xe(Ne)("hoverFace")),1),ue("span",gT,He(b.value.faceIndex),1),E[16]||(E[16]=ue("span",{class:"hover-info__label"},"X",-1)),ue("span",_T,He(b.value.x),1),E[17]||(E[17]=ue("span",{class:"hover-info__label"},"Y",-1)),ue("span",xT,He(b.value.y),1),E[18]||(E[18]=ue("span",{class:"hover-info__label"},"Z",-1)),ue("span",vT,He(b.value.z),1)])):Ar("",!0)],512),z.value?(Yn(),fi("aside",yT,[ue("div",MT,[ue("p",ST,He(Xe(Ne)("groups")),1),ue("h3",null,He(Xe(Ne)("groupList")),1)]),ue("div",bT,[ue("div",ET,[Wn(ue("input",{"onUpdate:modelValue":E[11]||(E[11]=L=>d.value=L),type:"text",placeholder:Xe(Ne)("groupName"),class:"group-create__input"},null,8,TT),[[ol,d.value]]),ue("button",{type:"button",onClick:E[12]||(E[12]=L=>Mo(!1))},He(Xe(Ne)("btnAdd")),1)])]),ue("div",AT,[ue("div",wT,[(Yn(!0),fi(Nn,null,eh(p.value,L=>(Yn(),fi("div",{key:L.id,class:Ks(["group-list__item",{"is-active":L.id===y.value}]),onClick:O=>Xa(L.id)},[ue("div",CT,[ue("span",{class:"dot",style:ds({background:L.color})},null,4),ue("div",PT,[ue("div",LT,[ue("span",IT,He(L.name),1),ue("span",DT,He(L.tag||Xe(Ne)("unset")),1)]),ue("span",NT,He(L.color),1)]),ue("span",UT,He(bo(L))+" "+He(Xe(Ne)("faces")),1)]),ue("button",{class:"ghost small-btn",type:"button",onClick:Th(O=>ja(L.id),["stop"])},He(Xe(Ne)("btnDelete")),9,FT)],10,RT))),128))])]),R.value?(Yn(),fi("div",OT,[ue("p",BT,He(Xe(Ne)("selectedGroup")),1),ue("div",VT,[ue("span",{class:"dot",style:ds({background:R.value.color})},null,4),ue("div",kT,[ue("div",zT,He(R.value.name),1),ue("div",HT,[ue("span",GT,He(R.value.tag||Xe(Ne)("unset")),1),ue("div",WT,He(bo(R.value))+" "+He(Xe(Ne)("faces")),1),ue("span",{class:"color-pill color-pill--small",style:ds({"--pill-color":R.value.color})},He(R.value.color),5)])])]),ue("div",XT,[ue("p",jT,He(Xe(Ne)("changeTag")),1),ue("div",{class:"tag-options tag-options--compact",role:"group","aria-label":Xe(Ne)("changeTag")},[(Yn(),fi(Nn,null,eh(M,L=>ue("label",{key:L,class:"tag-option tag-option--compact"},[Wn(ue("input",{"onUpdate:modelValue":E[13]||(E[13]=O=>P.value=O),type:"radio",name:"active-group-tag",value:L},null,8,KT),[[ll,P.value]]),ue("span",null,He(L),1)])),64))],8,YT)])])):Ar("",!0)])):Ar("",!0)],2)]),u.value?(Yn(),fi("div",{key:0,class:"popup-overlay",onClick:E[15]||(E[15]=Th(L=>u.value=!1,["self"]))},[ue("div",qT,[ue("div",$T,[ue("h3",null,He(Xe(Ne)("operationGuide")),1),ue("button",{class:"popup__close",type:"button",onClick:E[14]||(E[14]=L=>u.value=!1)},"×")]),ue("div",ZT,[ue("div",JT,[ue("h4",null,He(Xe(Ne)("hintFaceSelectTitle")),1),ue("p",null,He(Xe(Ne)("hintFaceSelect")),1)]),ue("div",QT,[ue("h4",null,He(Xe(Ne)("hintRectSelectTitle")),1),ue("p",null,He(Xe(Ne)("hintRectSelect")),1)]),ue("div",eA,[ue("h4",null,He(Xe(Ne)("hintOrbitControlsTitle")),1),ue("p",null,He(Xe(Ne)("hintOrbitControls")),1)]),ue("div",tA,[ue("h4",null,He(Xe(Ne)("hintGroupSelectTitle")),1),ue("p",null,He(Xe(Ne)("hintGroupSelect")),1)])])])])):Ar("",!0)],2))}};x_(sA).mount("#app");
