(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const E of l.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}})();var g={\u51E2:"\u51E1",\u4E12:"\u4E11",\u5B82:"\u5197",\u6237:"\u6236",\u6238:"\u6236",\u518C:"\u518A",\u520B:"\u520A",\u672F:"\u672E",\u4E22:"\u4E1F",\u6C37:"\u51B0",\u56D8:"\u56DE",\u56EC:"\u56DE",\u5E77:"\u5E76",\u6736:"\u6735",\u5F00:"\u5E75",\u5151:"\u514C",\u522B:"\u5225",\u5226:"\u52AB",\u90A8:"\u6751",\u5227:"\u52AB",\u523C:"\u52AB",\u537D:"\u5373",\u5451:"\u541E",\u5434:"\u5433",\u5449:"\u5433",\u5415:"\u5442",\u8117:"\u543B",\u56F1:"\u56EA",\u59AC:"\u5992",\u59C9:"\u59CA",\u59F8:"\u598D",\u6B69:"\u6B65",\u51B3:"\u6C7A",\u51B2:"\u6C96",\u6CA1:"\u6C92",\u7AC8:"\u7076",\u5EF5:"\u5DE1",\u5002:"\u4F75",\u4E24:"\u5169",\u52B5:"\u5238",\u604A:"\u5354",\u546A:"\u5492",\u5C4A:"\u5C46",\u5DD7:"\u5CA9",\u629D:"\u62D7",\u64E1:"\u62AC",\u83D3:"\u679C",\u5E8A:"\u7240",\u51B5:"\u6CC1",\u4E89:"\u722D",\u5367:"\u81E5",\u9751:"\u9752",\u516A:"\u4FDE",\u5239:"\u524E",\u5C05:"\u524B",\u52C8:"\u52C7",\u5374:"\u537B",\u5F66:"\u5F65",\u65E3:"\u65E2",\u67FB:"\u67E5",\u6822:"\u67CF",\u6C79:"\u6D36",\u7232:"\u70BA",\u784F:"\u7814",\u5EF8:"\u8FEA",\u5EF9:"\u8FEB",\u5024:"\u503C",\u59EB:"\u59EC",\u5CEF:"\u5CF0",\u803B:"\u6065",\u60A6:"\u6085",\u63D1:"\u634F",\u52B9:"\u6548",\u4FF2:"\u6548",\u664B:"\u6649",\u6E7C:"\u6D85",\u771E:"\u771F",\u792E:"\u7832",\u8EAD:"\u803D",\u8109:"\u8108",\u5EFC:"\u8FFA",\u5EFB:"\u8FF4",\u9B2C:"\u9B25",\u9597:"\u9B25",\u95D8:"\u9B25",\u4E81:"\u4E7E",\u5BC3:"\u51A4",\u50DE:"\u507D",\u4EEE:"\u5047",\u591F:"\u5920",\u5C02:"\u5C08",\u5F3A:"\u5F37",\u5008:"\u5FA0",\u5553:"\u555F",\u53D9:"\u6558",\u654D:"\u6558",\u52C5:"\u6555",\u51C9:"\u6DBC",\u51C0:"\u6DE8",\u7523:"\u7522",\u7567:"\u7565",\u8846:"\u773E",\u7D25:"\u7D2E",\u9262:"\u7F3D",\u758D:"\u86CB",\u8F2D:"\u8EDF",\u8534:"\u9EBB",\u5872:"\u5834",\u53A0:"\u5EC1",\u5ED0:"\u5EC4",\u53A9:"\u5EC4",\u6075:"\u60E0",\u63F7:"\u63D2",\u633F:"\u63D2",\u6B35:"\u6B3E",\u51D1:"\u6E4A",\u51CF:"\u6E1B",\u7151:"\u716E",\u73D0:"\u743A",\u753B:"\u756B",\u76D7:"\u76DC",\u7A93:"\u7A97",\u7255:"\u7A97",\u7ABB:"\u7A97",\u7B0B:"\u7B4D",\u7D76:"\u7D55",\u865A:"\u865B",\u9771:"\u97CC",\u98F1:"\u98E7",\u9EC4:"\u9EC3",\u5F11:"\u5F12",\u9264:"\u920E",\u7196:"\u7130",\u510D:"\u50BB",\u6ED9:"\u532F",\u5965:"\u5967",\u53A6:"\u5EC8",\u6BC1:"\u6BC0",\u51D6:"\u6E96",\u70DF:"\u7159",\u89A9:"\u7779",\u7CA4:"\u7CB5",\u7FA3:"\u7FA4",\u811A:"\u8173",\u89E7:"\u89E3",\u8FF9:"\u8DE1",\u8EB1:"\u8EB2",\u6AC8:"\u51F3",\u68A6:"\u5922",\u5BDC:"\u5BE7",\u7B5D:"\u7B8F",\u7DDC:"\u7DBF",\u7F78:"\u7F70",\u76D6:"\u84CB",\u8AAC:"\u8AAA",\u9920:"\u9905",\u9EBD:"\u9EBC",\u9F50:"\u9F4A",\u6589:"\u9F4A",\u53A8:"\u5EDA",\u5E99:"\u5EDF",\u5EBF:"\u5EDF",\u53AE:"\u5EDD",\u5FB4:"\u5FB5",\u6491:"\u6490",\u6570:"\u6578",\u596C:"\u734E",\u7AB0:"\u7AAF",\u7DAB:"\u7DDA",\u99E1:"\u7F75",\u8471:"\u8525",\u885E:"\u885B",\u7DE5:"\u8913",\u7AEA:"\u8C4E",\u732A:"\u8C6C",\u96A3:"\u9130",\u9599:"\u9B27",\u52F2:"\u52F3",\u62C5:"\u64D4",\u7F47:"\u6A3D",\u6CA2:"\u6FA4",\u9834:"\u7A4E",\u994D:"\u81B3",\u732B:"\u8C93",\u983C:"\u8CF4",\u9759:"\u975C",\u9ED9:"\u9ED8",\u8068:"\u806F",\u5E2E:"\u5E6B",\u5E47:"\u5E6B",\u64E7:"\u8209",\u6F81:"\u6F80",\u6E0B:"\u6F80",\u7DB3:"\u7E43",\u7DCF:"\u7E3D",\u7DEB:"\u7E3D",\u60E3:"\u7E3D",\u8061:"\u8070",\u8066:"\u8070",\u80C6:"\u81BD",\u6FF6:"\u95CA",\u70B9:"\u9EDE",\u658E:"\u9F4B",\u658B:"\u9F4B",\u67B1:"\u6AAF",\u51DF:"\u7006",\u730E:"\u7375",\u7D89:"\u7E61",\u8E2A:"\u8E64",\u9DC4:"\u96DE",\u9D8F:"\u96DE",\u9854:"\u984F",\u788D:"\u7919",\u97F5:"\u97FB",\u9EAF:"\u9EB4",\u5BF3:"\u5BF6",\u5B9D:"\u5BF6",\u945B:"\u7926",\u9EAA:"\u9EB5",\u9EAB:"\u9EB5",\u643A:"\u651C",\u64D5:"\u651C",\u9244:"\u9435",\u9421:"\u9435",\u8987:"\u9738",\u53E0:"\u758A",\u8D0B:"\u8D17",\u7E6E:"\u97C1",\u7A83:"\u7ACA",\u99C5:"\u9A5B",\u9A10:"\u9A57",\u898A:"\u7F88",\u9C49:"\u9C49"};try{self["workbox:window:6.5.4"]&&_()}catch{}function p(u,t){return new Promise(function(e){var o=new MessageChannel;o.port1.onmessage=function(i){e(i.data)},u.postMessage(t,[o.port2])})}function w(u,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(u,o.key,o)}}function m(u,t){(t==null||t>u.length)&&(t=u.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=u[e];return o}function b(u,t){var e;if(typeof Symbol>"u"||u[Symbol.iterator]==null){if(Array.isArray(u)||(e=function(i,l){if(i){if(typeof i=="string")return m(i,l);var E=Object.prototype.toString.call(i).slice(8,-1);return E==="Object"&&i.constructor&&(E=i.constructor.name),E==="Map"||E==="Set"?Array.from(i):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?m(i,l):void 0}}(u))||t&&u&&typeof u.length=="number"){e&&(u=e);var o=0;return function(){return o>=u.length?{done:!0}:{done:!1,value:u[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(e=u[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.4"]&&_()}catch{}var D=function(){var u=this;this.promise=new Promise(function(t,e){u.resolve=t,u.reject=e})};function C(u,t){var e=location.href;return new URL(u,e).href===new URL(t,e).href}var B=function(u,t){this.type=u,Object.assign(this,t)};function h(u,t,e){return e?t?t(u):u:(u&&u.then||(u=Promise.resolve(u)),t?u.then(t):u)}function S(){}var P={type:"SKIP_WAITING"};function y(u,t){if(!t)return u&&u.then?u.then(S):Promise.resolve()}var L=function(u){var t,e;function o(f,s){var n,r;return s===void 0&&(s={}),(n=u.call(this)||this).nn={},n.tn=0,n.rn=new D,n.en=new D,n.on=new D,n.un=0,n.an=new Set,n.cn=function(){var c=n.fn,a=c.installing;n.tn>0||!C(a.scriptURL,n.sn.toString())||performance.now()>n.un+6e4?(n.vn=a,c.removeEventListener("updatefound",n.cn)):(n.hn=a,n.an.add(a),n.rn.resolve(a)),++n.tn,a.addEventListener("statechange",n.ln)},n.ln=function(c){var a=n.fn,d=c.target,v=d.state,A=d===n.vn,F={sw:d,isExternal:A,originalEvent:c};!A&&n.mn&&(F.isUpdate=!0),n.dispatchEvent(new B(v,F)),v==="installed"?n.wn=self.setTimeout(function(){v==="installed"&&a.waiting===d&&n.dispatchEvent(new B("waiting",F))},200):v==="activating"&&(clearTimeout(n.wn),A||n.en.resolve(d))},n.dn=function(c){var a=n.hn,d=a!==navigator.serviceWorker.controller;n.dispatchEvent(new B("controlling",{isExternal:d,originalEvent:c,sw:a,isUpdate:n.mn})),d||n.on.resolve(a)},n.gn=(r=function(c){var a=c.data,d=c.ports,v=c.source;return h(n.getSW(),function(){n.an.has(v)&&n.dispatchEvent(new B("message",{data:a,originalEvent:c,ports:d,sw:v}))})},function(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];try{return Promise.resolve(r.apply(this,c))}catch(d){return Promise.reject(d)}}),n.sn=f,n.nn=s,navigator.serviceWorker.addEventListener("message",n.gn),n}e=u,(t=o).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var i,l,E=o.prototype;return E.register=function(f){var s=(f===void 0?{}:f).immediate,n=s!==void 0&&s;try{var r=this;return function(c,a){var d=c();return d&&d.then?d.then(a):a(d)}(function(){if(!n&&document.readyState!=="complete")return y(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),h(r.bn(),function(c){r.fn=c,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var a=r.fn.waiting;return a&&C(a.scriptURL,r.sn.toString())&&(r.hn=a,Promise.resolve().then(function(){r.dispatchEvent(new B("waiting",{sw:a,wasWaitingBeforeRegister:!0}))}).then(function(){})),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn})})}catch(c){return Promise.reject(c)}},E.update=function(){try{return this.fn?y(this.fn.update()):void 0}catch(f){return Promise.reject(f)}},E.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},E.messageSW=function(f){try{return h(this.getSW(),function(s){return p(s,f)})}catch(s){return Promise.reject(s)}},E.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&p(this.fn.waiting,P)},E.pn=function(){var f=navigator.serviceWorker.controller;return f&&C(f.scriptURL,this.sn.toString())?f:void 0},E.bn=function(){try{var f=this;return function(s,n){try{var r=s()}catch(c){return n(c)}return r&&r.then?r.then(void 0,n):r}(function(){return h(navigator.serviceWorker.register(f.sn,f.nn),function(s){return f.un=performance.now(),s})},function(s){throw s})}catch(s){return Promise.reject(s)}},i=o,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&w(i.prototype,l),o}(function(){function u(){this.Pn=new Map}var t=u.prototype;return t.addEventListener=function(e,o){this.Sn(e).add(o)},t.removeEventListener=function(e,o){this.Sn(e).delete(o)},t.dispatchEvent=function(e){e.target=this;for(var o,i=b(this.Sn(e.type));!(o=i()).done;)(0,o.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},u}());function W(u={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:o,onRegistered:i,onRegisterError:l}=u;let E;const f=async(s=!0)=>{};return"serviceWorker"in navigator&&(E=new L("/translate-hkscs-big5/sw.js",{scope:"/translate-hkscs-big5/",type:"classic"}),E.addEventListener("activated",s=>{s.isUpdate?window.location.reload():o==null||o()}),E.register({immediate:t}).then(s=>{i==null||i(s)}).catch(s=>{l==null||l(s)})),f}const k=W({onNeedRefresh(){},onOfflineReady(){}});k();window.convertBig5=function(){let u=document.getElementById("textOutput"),t=u.value.split("");t=t.map(e=>(g[e]&&(e=g[e]),e)),u.value=t.join("")};
