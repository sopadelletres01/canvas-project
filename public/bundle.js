(()=>{"use strict";var e={638:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(303),s=n.n(r),a=n(185),i=n.n(a)()(s());i.push([e.id,'.startMessageContainer {\n  background: url("https://res.cloudinary.com/dcgbmo9ov/image/upload/v1664214084/EnterDarknessGallery/HUD/papiro_fnw0uk.png")\n    no-repeat;\n  color: white;\n  font-size: 24px;\n  min-width: 70%;\n  min-height: 80%;\n  background-size: contain;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n\n@media (max-width: 768px) {\n    .startMessageContainer {\n      min-width: 100%;\n    }\n  }',""]);const o=i},267:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(303),s=n.n(r),a=n(185),i=n.n(a)()(s());i.push([e.id,".sceneHandlerContainer {\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-position: center;\n  background-color: #111;\n}\n\n.test{\n  position: absolute;\n  right: 45%;\n  top: 45%;\n  width: 10vw;\n  height: 24vh;\n  background-color: red;\n}",""]);const o=i},609:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(303),s=n.n(r),a=n(185),i=n.n(a)()(s());i.push([e.id,".startContainer {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-size: contain;\n  background-position: center;\n  background-color: #111;\n}\n",""]);const o=i},185:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var h=[].concat(e[l]);r&&i[h[0]]||(void 0!==a&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=a),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),s&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=s):h[4]="".concat(s)),t.push(h))}},t}},303:e=>{e.exports=function(e){return e[1]}},624:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],o=0;o<e.length;o++){var c=e[o],l=r.base?c[0]+r.base:c[0],h=a[l]||0,d="".concat(l," ").concat(h);a[l]=h+1;var u=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var f=s(p,r);r.byIndex=o,t.splice(o,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var a=r(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var o=n(a[i]);t[o].references--}for(var c=r(e,s),l=0;l<a.length;l++){var h=n(a[l]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}a=c}}},892:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},716:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},359:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},990:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},230:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e){this.name=e,this.inventory=[]}}var t=n(624),r=n.n(t),s=n(990),a=n.n(s),i=n(892),o=n.n(i),c=n(359),l=n.n(c),h=n(716),d=n.n(h),u=n(230),p=n.n(u),f=n(267),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var w,v,y,g,b,E,k,T,C,M=function(e,t,n,r,s){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,n):s?s.value=n:t.set(e,n),n},x=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};class P{constructor(e,t,n){w.add(this),v.set(this,void 0),y.set(this,void 0),g.set(this,void 0),b.set(this,void 0),E.set(this,void 0),k.set(this,void 0),M(this,b,n,"f"),M(this,y,n[0],"f"),M(this,g,n[0],"f"),M(this,v,t,"f"),M(this,E,e,"f"),M(this,k,document.createElement("div"),"f"),M(this,v,t,"f")}start(){this.setup(),x(this,w,"m",C).call(this)}setup(){x(this,k,"f").className="sceneHandlerContainer",window.addEventListener("sceneChange",(e=>{console.log("changeScene",e);const t=x(this,b,"f").find((t=>t.id===e.sceneRef))||x(this,y,"f");x(this,w,"m",T).call(this,t)}))}}v=new WeakMap,y=new WeakMap,g=new WeakMap,b=new WeakMap,E=new WeakMap,k=new WeakMap,w=new WeakSet,T=function(e){M(this,g,x(this,y,"f"),"f"),M(this,y,e,"f"),x(this,g,"f").clear(),x(this,w,"m",C).call(this)},C=function(){var e;console.log(x(this,y,"f"));const t=`url(${null===(e=x(this,y,"f"))||void 0===e?void 0:e.background})`||'url("https://res.cloudinary.com/dcgbmo9ov/image/upload/v1664213751/EnterDarknessGallery/Scenes/hall5_m4cgzc.jpg")';x(this,k,"f").style.setProperty("background-image",t),x(this,k,"f").style.setProperty("background-repeat","no-repeat"),x(this,y,"f").setup(),x(this,y,"f").draw(x(this,k,"f")),x(this,E,"f").appendChild(x(this,k,"f")),console.log("Render")};class W extends Event{constructor(){super("gameStart",{cancelable:!0})}}var j=n(638),S={};S.styleTagTransform=p(),S.setAttributes=l(),S.insert=o().bind(null,"head"),S.domAPI=a(),S.insertStyleElement=d(),r()(j.Z,S),j.Z&&j.Z.locals&&j.Z.locals;var Z,N,L,D,I,A=function(e,t,n,r,s){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,n):s?s.value=n:t.set(e,n),n},H=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};class O{constructor(e,t){Z.set(this,void 0),N.set(this,void 0),L.set(this,void 0),D.set(this,void 0),I.set(this,void 0),A(this,Z,e,"f"),A(this,N,t,"f"),A(this,L,document.createElement("div"),"f"),A(this,D,document.createElement("p"),"f"),A(this,I,document.createElement("button"),"f")}setup(){H(this,D,"f").className="startMessageContent",H(this,D,"f").innerHTML=H(this,Z,"f"),H(this,L,"f").className="startMessageContainer",H(this,I,"f").className="startButton",H(this,I,"f").innerHTML="Enter the Darkness",H(this,I,"f").addEventListener("click",(()=>{window.dispatchEvent(new W)}))}draw(){H(this,L,"f").appendChild(H(this,D,"f")),H(this,L,"f").appendChild(H(this,I,"f")),H(this,N,"f").appendChild(H(this,L,"f"))}}Z=new WeakMap,N=new WeakMap,L=new WeakMap,D=new WeakMap,I=new WeakMap;var z=n(609),_={};_.styleTagTransform=p(),_.setAttributes=l(),_.insert=o().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=d(),r()(z.Z,_),z.Z&&z.Z.locals&&z.Z.locals;var G,R,$,B,U,q,F=function(e,t,n,r,s){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,n):s?s.value=n:t.set(e,n),n},J=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};class K{constructor(e,t,n){G.add(this),R.set(this,void 0),$.set(this,void 0),B.set(this,void 0),U.set(this,void 0),F(this,$,n,"f"),F(this,B,e,"f"),F(this,R,document.createElement("div"),"f"),F(this,U,new O(t,J(this,R,"f")),"f")}draw(){J(this,G,"m",q).call(this),J(this,$,"f").appendChild(J(this,R,"f")),J(this,U,"f").draw()}clear(){J(this,$,"f").replaceChildren()}}R=new WeakMap,$=new WeakMap,B=new WeakMap,U=new WeakMap,G=new WeakSet,q=function(){J(this,R,"f").className="startContainer",J(this,R,"f").style.setProperty("background-image",'url("https://res.cloudinary.com/dcgbmo9ov/image/upload/v1664213892/EnterDarknessGallery/Backgrounds/forestmansion2_tlze3v.jpg")'),J(this,R,"f").style.setProperty("background-repeat","no-repeat"),J(this,U,"f").setup()};const Q=JSON.parse('{"N":[{"id":"hall","hint":"La puerta estaba abierta, todas las luces están encendidas pero no veo a nadie. Sin embargo, noto una presencia... Será mejor que me de prisa","background":"https://res.cloudinary.com/dcgbmo9ov/image/upload/v1664213751/EnterDarknessGallery/Scenes/hall5_m4cgzc.jpg","paths":[{"x":45,"y":45,"width":10,"height":24,"to":"statue"}]},{"id":"statue","background":"https://res.cloudinary.com/dcgbmo9ov/image/upload/v1664213754/EnterDarknessGallery/Scenes/statue2_ed7nec.jpg","paths":[{"x":1340,"y":450,"height":250,"width":200,"to":"rightwall"}]}]}');class V extends Event{constructor(e){super("sceneChange",{cancelable:!0}),this.sceneRef=e}}class X extends class{constructor(e,t,n,r){this.x=e,this.y=t,this.width=n,this.height=r,this.htmlElement=document.createElement("div")}draw(e){e.appendChild(this.htmlElement)}}{constructor(e,t,n,r,s){super(e,t,n,r),this.to=s}setup(){this.htmlElement.style.backgroundColor="red",this.htmlElement.style.position="absolute",this.htmlElement.style.cursor="pointer",this.htmlElement.style.right=`${this.x}%`,this.htmlElement.style.top=`${this.y}%`,this.htmlElement.style.width=`${this.width}vw`,this.htmlElement.style.height=`${this.height}vh`,this.htmlElement.addEventListener("click",(e=>{e.preventDefault(),window.dispatchEvent(new V(this.to))}))}}class Y{constructor(e,t,n,r){this.id=e,this.background=t,this.paths=n,this.items=r,this.pathObjects=[]}setup(){this.paths.forEach((e=>{const t=new X(e.x,e.y,e.width,e.height,e.to);t.setup(),this.pathObjects.push(t)}))}clear(){this.pathObjects.forEach((e=>{e.htmlElement.remove()}))}draw(e){this.pathObjects.forEach((t=>{e.appendChild(t.htmlElement)}))}}var ee,te,ne,re,se,ae,ie,oe,ce=function(e,t,n,r,s){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,n):s?s.value=n:t.set(e,n),n},le=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};class he{constructor(t){ee.add(this),te.set(this,void 0),ne.set(this,void 0),re.set(this,void 0),se.set(this,void 0),ce(this,te,new e("Marc"),"f"),ce(this,ne,t,"f"),ce(this,re,new P(t,le(this,te,"f"),le(this,ee,"m",ae).call(this)),"f")}init(){console.log("player",le(this,te,"f")),console.log("data",Q.N),le(this,ee,"m",ie).call(this),window.addEventListener("gameStart",(e=>{e.preventDefault(),le(this,se,"f").clear(),le(this,ee,"m",oe).call(this)}))}}te=new WeakMap,ne=new WeakMap,re=new WeakMap,se=new WeakMap,ee=new WeakSet,ae=function(){return Q.N.map((e=>new Y(e.id,e.background,e.paths)))},ie=function(){ce(this,se,new K("https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000","Test Message",le(this,ne,"f")),"f"),le(this,se,"f").draw()},oe=function(){le(this,re,"f").start()},window.addEventListener("load",(()=>{const[e,t]=function(){const e=document.getElementById("main")||document.createElement("main");"main"!==e.id&&(e.id="main");const t=document.getElementById("overlay")||document.createElement("div");return"overlay"!==t.id&&(t.id="overlay"),[e,t]}();!function(e,t){const n=window.innerHeight>window.innerWidth;let r=!1;n?null==t||t.style.setProperty("display","block"):(null==t||t.style.setProperty("display","none"),e.init(),r=!0),window.addEventListener("resize",(n=>{window.innerHeight>window.innerWidth?null==t||t.style.setProperty("display","block"):(null==t||t.style.setProperty("display","none"),r||(e.init(),r=!0))}))}(new he(e),t)}))})()})();