import{aB as Je,Z as Ke,r as P,b as Pe,E as Fe,d as be,z as De,l as R,m as d,p as T,R as W,u as _,ag as w,q as x,T as f,O as m,W as Ne,aC as Ze,P as ce,M as k,Q as M,aD as pe,aE as ve,F as G,a2 as le,a7 as te,H as ie,e as $,S as Y,a9 as je,I as O,aF as K,aG as ze,w as ue,c as Be,J as We,aH as ye,aI as we,s as Ye,a8 as se,n as Qe,aJ as et,V as me,U as _e}from"./vue-J95KYTqw.js";import{g as tt,s as Ve,u as he,_ as L,a as Oe,b as Z,r as nt,c as Se,d as ot}from"./index-SIEKsXnH.js";import{u as at}from"./useWatermark--hrcmgIr.js";import{h as st,j as lt,g as rt,k as ct,b as de,l as it,n as ut,o as He,u as dt,r as ft,p as pt,q as vt,s as mt,t as _t}from"./element-qn4S9Lqk.js";import{_ as ht}from"./index.vue_vue_type_script_setup_true_lang-KnaFFkzM.js";import"./vxe-DkT7T6YF.js";var X=(n=>(n[n.Mobile=0]="Mobile",n[n.Desktop=1]="Desktop",n))(X||{});const gt="opened",Ue="closed";function bt(n){n?Ve(gt):Ve(Ue)}const ne=Je("app",()=>{const n=Ke({opened:tt()!==Ue,withoutAnimation:!1}),e=P(X.Desktop);return Pe(()=>n.opened,o=>bt(o)),{device:e,sidebar:n,toggleSidebar:o=>{n.opened=!n.opened,n.withoutAnimation=o},closeSidebar:o=>{n.opened=!1,n.withoutAnimation=o},toggleDevice:o=>{e.value=o}}}),yt=992,wt=()=>{const n=ne(),{listenerRouteChange:e}=he(),t=()=>document.body.getBoundingClientRect().width-1<yt,s=()=>{if(!document.hidden){const l=t();n.toggleDevice(l?X.Mobile:X.Desktop),l&&n.closeSidebar(!0)}};e(()=>{n.device===X.Mobile&&n.sidebar.opened&&n.closeSidebar(!1)}),Fe(()=>{window.addEventListener("resize",s)}),be(()=>{t()&&(n.toggleDevice(X.Mobile),n.closeSidebar(!0))}),De(()=>{window.removeEventListener("resize",s)})},St={class:"layout-footer"},kt=R({__name:"index",setup(n){const e="V3 Admin Vite";return(t,s)=>(d(),T("footer",St,"MIT © 2021-PRESENT "+W(_(e)),1))}}),xt=L(kt,[["__scopeId","data-v-034a5242"]]),Ct={class:"app-main"},Tt={class:"app-scrollbar"},Et=R({__name:"AppMain",setup(n){const e=Oe(),t=Z();return(s,l)=>{const o=w("router-view"),a=w("el-backtop");return d(),T("section",Ct,[x("div",Tt,[f(o,null,{default:m(({Component:r,route:i})=>[f(Ne,{name:"el-fade-in",mode:"out-in"},{default:m(()=>[(d(),k(Ze,{include:_(e).cachedViews},[(d(),k(ce(r),{key:i.path,class:"app-container-grow"}))],1032,["include"]))]),_:2},1024)]),_:1}),_(t).showFooter?(d(),k(xt,{key:0})):M("",!0)]),f(a),f(a,{target:".app-scrollbar"})])}}}),ke=L(Et,[["__scopeId","data-v-d87ee2cd"]]),$t=R({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(n,{emit:e}){const t=n,s=e,l=()=>{s("toggleClick")};return(o,a)=>{const r=w("el-icon");return d(),T("div",{onClick:l},[f(r,{size:20,class:"icon"},{default:m(()=>[t.isActive?(d(),k(_(st),{key:0})):(d(),k(_(lt),{key:1}))]),_:1})])}}}),Vt=L($t,[["__scopeId","data-v-252d9bf8"]]);function Mt(n){for(var e=[],t=0;t<n.length;){var s=n[t];if(s==="*"||s==="+"||s==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(s==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(s==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(s==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(s===":"){for(var l="",o=t+1;o<n.length;){var a=n.charCodeAt(o);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){l+=n[o++];continue}break}if(!l)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:l}),t=o;continue}if(s==="("){var r=1,i="",o=t+1;if(n[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<n.length;){if(n[o]==="\\"){i+=n[o++]+n[o++];continue}if(n[o]===")"){if(r--,r===0){o++;break}}else if(n[o]==="("&&(r++,n[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));i+=n[o++]}if(r)throw new TypeError("Unbalanced pattern at ".concat(t));if(!i)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:i}),t=o;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function At(n,e){e===void 0&&(e={});for(var t=Mt(n),s=e.prefixes,l=s===void 0?"./":s,o="[^".concat(Lt(e.delimiter||"/#?"),"]+?"),a=[],r=0,i=0,v="",u=function(B){if(i<t.length&&t[i].type===B)return t[i++].value},c=function(B){var H=u(B);if(H!==void 0)return H;var V=t[i],p=V.type,S=V.index;throw new TypeError("Unexpected ".concat(p," at ").concat(S,", expected ").concat(B))},g=function(){for(var B="",H;H=u("CHAR")||u("ESCAPED_CHAR");)B+=H;return B};i<t.length;){var b=u("CHAR"),h=u("NAME"),y=u("PATTERN");if(h||y){var C=b||"";l.indexOf(C)===-1&&(v+=C,C=""),v&&(a.push(v),v=""),a.push({name:h||r++,prefix:C,suffix:"",pattern:y||o,modifier:u("MODIFIER")||""});continue}var I=b||u("ESCAPED_CHAR");if(I){v+=I;continue}v&&(a.push(v),v="");var D=u("OPEN");if(D){var C=g(),A=u("NAME")||"",N=u("PATTERN")||"",q=g();c("CLOSE"),a.push({name:A||(N?r++:""),pattern:A&&!N?o:N,prefix:C,suffix:q,modifier:u("MODIFIER")||""});continue}c("END")}return a}function It(n,e){return Rt(At(n,e),e)}function Rt(n,e){e===void 0&&(e={});var t=Pt(e),s=e.encode,l=s===void 0?function(i){return i}:s,o=e.validate,a=o===void 0?!0:o,r=n.map(function(i){if(typeof i=="object")return new RegExp("^(?:".concat(i.pattern,")$"),t)});return function(i){for(var v="",u=0;u<n.length;u++){var c=n[u];if(typeof c=="string"){v+=c;continue}var g=i?i[c.name]:void 0,b=c.modifier==="?"||c.modifier==="*",h=c.modifier==="*"||c.modifier==="+";if(Array.isArray(g)){if(!h)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(g.length===0){if(b)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var y=0;y<g.length;y++){var C=l(g[y],c);if(a&&!r[u].test(C))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(C,'"'));v+=c.prefix+C+c.suffix}continue}if(typeof g=="string"||typeof g=="number"){var C=l(String(g),c);if(a&&!r[u].test(C))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(C,'"'));v+=c.prefix+C+c.suffix;continue}if(!b){var I=h?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(I))}}return v}}function Lt(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Pt(n){return n&&n.sensitive?"":"i"}const Ft={key:0,class:"no-redirect"},Dt=["onClick"],Nt=R({__name:"index",setup(n){const e=pe(),t=ve(),{listenerRouteChange:s}=he(),l=P([]),o=()=>{l.value=e.matched.filter(i=>{var v,u;return((v=i.meta)==null?void 0:v.title)&&((u=i.meta)==null?void 0:u.breadcrumb)!==!1})},a=i=>It(i)(e.params),r=i=>{const{redirect:v,path:u}=i;if(v){t.push(v);return}t.push(a(u))};return s(i=>{i.path.startsWith("/redirect/")||o()},!0),(i,v)=>{const u=w("el-breadcrumb-item"),c=w("el-breadcrumb");return d(),k(c,{class:"app-breadcrumb"},{default:m(()=>[(d(!0),T(G,null,te(l.value,(g,b)=>(d(),k(u,{key:g.path},{default:m(()=>[g.redirect==="noRedirect"||b===l.value.length-1?(d(),T("span",Ft,W(g.meta.title),1)):(d(),T("a",{key:1,onClick:le(h=>r(g),["prevent"])},W(g.meta.title),9,Dt))]),_:2},1024))),128))]),_:1})}}}),zt=L(Nt,[["__scopeId","data-v-2eef2d12"]]),fe=n=>/^(https?:|mailto:|tel:)/.test(n),Bt=["href"],Wt=R({__name:"SidebarItemLink",props:{to:{}},setup(n){const e=n;return(t,s)=>{const l=w("router-link");return _(fe)(e.to)?(d(),T("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[ie(t.$slots,"default")],8,Bt)):(d(),k(l,{key:1,to:e.to},{default:m(()=>[ie(t.$slots,"default")]),_:3},8,["to"]))}}});function j(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function Me(n,e){for(var t="",s=0,l=-1,o=0,a,r=0;r<=n.length;++r){if(r<n.length)a=n.charCodeAt(r);else{if(a===47)break;a=47}if(a===47){if(!(l===r-1||o===1))if(l!==r-1&&o===2){if(t.length<2||s!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var i=t.lastIndexOf("/");if(i!==t.length-1){i===-1?(t="",s=0):(t=t.slice(0,i),s=t.length-1-t.lastIndexOf("/")),l=r,o=0;continue}}else if(t.length===2||t.length===1){t="",s=0,l=r,o=0;continue}}e&&(t.length>0?t+="/..":t="..",s=2)}else t.length>0?t+="/"+n.slice(l+1,r):t=n.slice(l+1,r),s=r-l-1;l=r,o=0}else a===46&&o!==-1?++o:o=-1}return t}function Ot(n,e){var t=e.dir||e.root,s=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+s:t+n+s:s}var ae={resolve:function(){for(var e="",t=!1,s,l=arguments.length-1;l>=-1&&!t;l--){var o;l>=0?o=arguments[l]:(s===void 0&&(s=process.cwd()),o=s),j(o),o.length!==0&&(e=o+"/"+e,t=o.charCodeAt(0)===47)}return e=Me(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(j(e),e.length===0)return".";var t=e.charCodeAt(0)===47,s=e.charCodeAt(e.length-1)===47;return e=Me(e,!t),e.length===0&&!t&&(e="."),e.length>0&&s&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return j(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var s=arguments[t];j(s),s.length>0&&(e===void 0?e=s:e+="/"+s)}return e===void 0?".":ae.normalize(e)},relative:function(e,t){if(j(e),j(t),e===t||(e=ae.resolve(e),t=ae.resolve(t),e===t))return"";for(var s=1;s<e.length&&e.charCodeAt(s)===47;++s);for(var l=e.length,o=l-s,a=1;a<t.length&&t.charCodeAt(a)===47;++a);for(var r=t.length,i=r-a,v=o<i?o:i,u=-1,c=0;c<=v;++c){if(c===v){if(i>v){if(t.charCodeAt(a+c)===47)return t.slice(a+c+1);if(c===0)return t.slice(a+c)}else o>v&&(e.charCodeAt(s+c)===47?u=c:c===0&&(u=0));break}var g=e.charCodeAt(s+c),b=t.charCodeAt(a+c);if(g!==b)break;g===47&&(u=c)}var h="";for(c=s+u+1;c<=l;++c)(c===l||e.charCodeAt(c)===47)&&(h.length===0?h+="..":h+="/..");return h.length>0?h+t.slice(a+u):(a+=u,t.charCodeAt(a)===47&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(j(e),e.length===0)return".";for(var t=e.charCodeAt(0),s=t===47,l=-1,o=!0,a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),t===47){if(!o){l=a;break}}else o=!1;return l===-1?s?"/":".":s&&l===1?"//":e.slice(0,l)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');j(e);var s=0,l=-1,o=!0,a;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var r=t.length-1,i=-1;for(a=e.length-1;a>=0;--a){var v=e.charCodeAt(a);if(v===47){if(!o){s=a+1;break}}else i===-1&&(o=!1,i=a+1),r>=0&&(v===t.charCodeAt(r)?--r===-1&&(l=a):(r=-1,l=i))}return s===l?l=i:l===-1&&(l=e.length),e.slice(s,l)}else{for(a=e.length-1;a>=0;--a)if(e.charCodeAt(a)===47){if(!o){s=a+1;break}}else l===-1&&(o=!1,l=a+1);return l===-1?"":e.slice(s,l)}},extname:function(e){j(e);for(var t=-1,s=0,l=-1,o=!0,a=0,r=e.length-1;r>=0;--r){var i=e.charCodeAt(r);if(i===47){if(!o){s=r+1;break}continue}l===-1&&(o=!1,l=r+1),i===46?t===-1?t=r:a!==1&&(a=1):t!==-1&&(a=-1)}return t===-1||l===-1||a===0||a===1&&t===l-1&&t===s+1?"":e.slice(t,l)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Ot("/",e)},parse:function(e){j(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var s=e.charCodeAt(0),l=s===47,o;l?(t.root="/",o=1):o=0;for(var a=-1,r=0,i=-1,v=!0,u=e.length-1,c=0;u>=o;--u){if(s=e.charCodeAt(u),s===47){if(!v){r=u+1;break}continue}i===-1&&(v=!1,i=u+1),s===46?a===-1?a=u:c!==1&&(c=1):a!==-1&&(c=-1)}return a===-1||i===-1||c===0||c===1&&a===i-1&&a===r+1?i!==-1&&(r===0&&l?t.base=t.name=e.slice(1,i):t.base=t.name=e.slice(r,i)):(r===0&&l?(t.name=e.slice(1,a),t.base=e.slice(1,i)):(t.name=e.slice(r,a),t.base=e.slice(r,i)),t.ext=e.slice(a,i)),r>0?t.dir=e.slice(0,r-1):l&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};ae.posix=ae;var Ht=ae;const qe=rt(Ht),Ut={key:2},qt=R({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(n){const e=n,t=$(()=>{var r;return(r=e.item.meta)==null?void 0:r.alwaysShow}),s=$(()=>{var r;return((r=e.item.children)==null?void 0:r.filter(i=>{var v;return!((v=i.meta)!=null&&v.hidden)}))??[]}),l=$(()=>s.value.length),o=$(()=>{const r=l.value;switch(!0){case r>1:return null;case r===1:return s.value[0];default:return{...e.item,path:""}}}),a=r=>{switch(!0){case fe(r):return r;case fe(e.basePath):return e.basePath;default:return qe.resolve(e.basePath,r)}};return(r,i)=>{var b;const v=w("SvgIcon"),u=w("el-menu-item"),c=w("sidebar-item",!0),g=w("el-sub-menu");return(b=e.item.meta)!=null&&b.hidden?M("",!0):(d(),T("div",{key:0,class:O({"simple-mode":e.isCollapse&&!r.isTop,"first-level":e.isFirstLevel})},[!t.value&&o.value&&!o.value.children?(d(),T(G,{key:0},[o.value.meta?(d(),k(Wt,{key:0,to:a(o.value.path)},{default:m(()=>[f(u,{index:a(o.value.path)},je({default:m(()=>[o.value.meta.svgIcon?(d(),k(v,{key:0,name:o.value.meta.svgIcon},null,8,["name"])):o.value.meta.elIcon?(d(),k(ce(o.value.meta.elIcon),{key:1,class:"el-icon"})):M("",!0)]),_:2},[o.value.meta.title?{name:"title",fn:m(()=>[Y(W(o.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):M("",!0)],64)):(d(),k(g,{key:1,index:a(e.item.path),teleported:""},{title:m(()=>{var h,y,C;return[(h=e.item.meta)!=null&&h.svgIcon?(d(),k(v,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(y=e.item.meta)!=null&&y.elIcon?(d(),k(ce(e.item.meta.elIcon),{key:1,class:"el-icon"})):M("",!0),(C=e.item.meta)!=null&&C.title?(d(),T("span",Ut,W(e.item.meta.title),1)):M("",!0)]}),default:m(()=>[e.item.children?(d(!0),T(G,{key:0},te(e.item.children,h=>(d(),k(c,{key:h.path,item:h,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":a(h.path)},null,8,["item","is-collapse","base-path"]))),128)):M("",!0)]),_:1},8,["index"]))],2))}}}),Xt=L(qt,[["__scopeId","data-v-72444830"]]),Gt="/v3-admin-vite/static/logo-WN1ETR0H.png",Jt="/v3-admin-vite/static/logo-text-1-h7hJu_cc.png",Kt="/v3-admin-vite/static/logo-text-2-lXsH_ESZ.png",Zt=["src"],jt=["src"],Yt=R({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(n){const e=n,t=Z(),{layoutMode:s}=K(t);return(l,o)=>{const a=w("router-link");return d(),T("div",{class:O(["layout-logo-container",{collapse:e.collapse,"layout-mode-top":_(s)==="top"}])},[f(Ne,{name:"layout-logo-fade"},{default:m(()=>[e.collapse?(d(),k(a,{key:"collapse",to:"/"},{default:m(()=>[x("img",{src:_(Gt),class:"layout-logo"},null,8,Zt)]),_:1})):(d(),k(a,{key:"expand",to:"/"},{default:m(()=>[x("img",{src:_(s)!=="left"?_(Kt):_(Jt),class:"layout-logo-text"},null,8,jt)]),_:1}))]),_:1})],2)}}}),xe=L(Yt,[["__scopeId","data-v-8474c76e"]]),re=n=>{let e="";try{e=getComputedStyle(document.documentElement).getPropertyValue(n)}catch(t){console.error(t)}return e},Ae=(n,e)=>{try{document.documentElement.style.setProperty(n,e)}catch(t){console.error(t)}},Qt=()=>{nt(),location.reload()},en=R({__name:"index",setup(n){ze(p=>({"1bf59174":H.value,"682b6cb0":V.value,"717664c6":q.value,"5e1994ee":B.value,"5ed40ffe":N.value}));const e=re("--v3-sidebar-menu-bg-color"),t=re("--v3-sidebar-menu-text-color"),s=re("--v3-sidebar-menu-active-text-color"),l=pe(),o=ne(),a=Se(),r=Z(),{sidebar:i,device:v}=K(o),{layoutMode:u,showLogo:c}=K(r),g=$(()=>{const{meta:{activeMenu:p},path:S}=l;return p||S}),b=$(()=>!i.value.opened),h=$(()=>u.value==="left"),y=$(()=>u.value==="top"),C=$(()=>v.value===X.Mobile),I=$(()=>h.value&&c.value),D=$(()=>h.value?e:void 0),A=$(()=>h.value?t:void 0),N=$(()=>h.value?s:void 0),q=$(()=>u.value!=="top"?"var(--v3-sidebar-menu-item-height)":"var(--v3-navigationbar-height)"),B=$(()=>u.value!=="top"?"var(--v3-sidebar-menu-hover-bg-color)":"transparent"),H=$(()=>u.value!=="top"?"2px":"0px"),V=$(()=>u.value==="top"?"none":"block");return(p,S)=>{const z=w("el-menu"),E=w("el-scrollbar");return d(),T("div",{class:O({"has-logo":I.value})},[I.value?(d(),k(xe,{key:0,collapse:b.value},null,8,["collapse"])):M("",!0),f(E,{"wrap-class":"scrollbar-wrapper"},{default:m(()=>[f(z,{"default-active":g.value,collapse:b.value&&!y.value,"background-color":D.value,"text-color":A.value,"active-text-color":N.value,"unique-opened":!0,"collapse-transition":!1,mode:y.value&&!C.value?"horizontal":"vertical"},{default:m(()=>[(d(!0),T(G,null,te(_(a).routes,F=>(d(),k(Xt,{key:F.path,item:F,"base-path":F.path,"is-collapse":b.value,"is-top":y.value},null,8,["item","base-path","is-collapse","is-top"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1})],2)}}}),Ce=L(en,[["__scopeId","data-v-90261ef0"]]),tn={class:"card-header"},nn={class:"card-title"},on={class:"card-time"},an={key:0,class:"card-avatar"},sn=["src"],ln={class:"card-body"},rn=R({__name:"NotifyList",props:{list:{}},setup(n){const e=n;return(t,s)=>{const l=w("el-empty"),o=w("el-tag"),a=w("el-card");return e.list.length===0?(d(),k(l,{key:0})):(d(!0),T(G,{key:1},te(e.list,(r,i)=>(d(),k(a,{key:i,shadow:"never",class:"card-container"},{header:m(()=>[x("div",tn,[x("div",null,[x("span",null,[x("span",nn,W(r.title),1),r.extra?(d(),k(o,{key:0,type:r.status,effect:"plain",size:"small"},{default:m(()=>[Y(W(r.extra),1)]),_:2},1032,["type"])):M("",!0)]),x("div",on,W(r.datetime),1)]),r.avatar?(d(),T("div",an,[x("img",{src:r.avatar,width:"34"},null,8,sn)])):M("",!0)])]),default:m(()=>[x("div",ln,W(r.description??"No Data"),1)]),_:2},1024))),128))}}}),cn=L(rn,[["__scopeId","data-v-137655f9"]]),un=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin Vite 上线啦",datetime:"一年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"两年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],dn=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],fn=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],pn={class:"notify"},vn={class:"notify-history"},Ie=99,mn=350,_n=R({__name:"index",setup(n){const e=$(()=>s.value.reduce((o,a)=>o+a.list.length,0)),t=P("通知"),s=P([{name:"通知",type:"primary",list:un},{name:"消息",type:"danger",list:dn},{name:"待办",type:"warning",list:fn}]),l=()=>{de.success(`跳转到${t.value}历史页面`)};return(o,a)=>{const r=w("el-icon"),i=w("el-tooltip"),v=w("el-badge"),u=w("el-scrollbar"),c=w("el-tab-pane"),g=w("el-tabs"),b=w("el-button"),h=w("el-popover");return d(),T("div",pn,[f(h,{placement:"bottom",width:mn,trigger:"click"},{reference:m(()=>[f(v,{value:e.value,max:Ie,hidden:e.value===0},{default:m(()=>[f(i,{effect:"dark",content:"消息通知",placement:"bottom"},{default:m(()=>[f(r,{size:20},{default:m(()=>[f(_(ct))]),_:1})]),_:1})]),_:1},8,["value","hidden"])]),default:m(()=>[f(g,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=y=>t.value=y),class:"demo-tabs",stretch:""},{default:m(()=>[(d(!0),T(G,null,te(s.value,(y,C)=>(d(),k(c,{name:y.name,key:C},{label:m(()=>[Y(W(y.name)+" ",1),f(v,{value:y.list.length,max:Ie,type:y.type},null,8,["value","type"])]),default:m(()=>[f(u,{height:"400px"},{default:m(()=>[f(cn,{list:y.list},null,8,["list"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),x("div",vn,[f(b,{link:"",onClick:l},{default:m(()=>[Y("查看"+W(t.value)+"历史",1)]),_:1})])]),_:1})])}}}),hn=L(_n,[["__scopeId","data-v-50089150"]]),Re=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Q=(()=>{if(typeof document>"u")return!1;const n=Re[0],e={};for(const t of Re)if((t==null?void 0:t[1])in document){for(const[l,o]of t.entries())e[n[l]]=o;return e}return!1})(),Le={change:Q.fullscreenchange,error:Q.fullscreenerror};let U={request(n=document.documentElement,e){return new Promise((t,s)=>{const l=()=>{U.off("change",l),t()};U.on("change",l);const o=n[Q.requestFullscreen](e);o instanceof Promise&&o.then(l).catch(s)})},exit(){return new Promise((n,e)=>{if(!U.isFullscreen){n();return}const t=()=>{U.off("change",t),n()};U.on("change",t);const s=document[Q.exitFullscreen]();s instanceof Promise&&s.then(t).catch(e)})},toggle(n,e){return U.isFullscreen?U.exit():U.request(n,e)},onchange(n){U.on("change",n)},onerror(n){U.on("error",n)},on(n,e){const t=Le[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=Le[n];t&&document.removeEventListener(t,e,!1)},raw:Q};Object.defineProperties(U,{isFullscreen:{get:()=>!!document[Q.fullscreenElement]},element:{enumerable:!0,get:()=>document[Q.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[Q.fullscreenEnabled]}});Q||(U={isEnabled:!1});const oe=U,gn=R({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(n){const e=n,t=P(!1),s=$(()=>t.value?e.exitTips:e.openTips),l=$(()=>t.value?"fullscreen-exit":"fullscreen"),o=()=>{const c=document.querySelector(e.element)||void 0;oe.isEnabled?oe.toggle(c):de.warning("您的浏览器无法工作")},a=()=>{t.value=oe.isFullscreen};ue(c=>{oe.on("change",a),c(()=>{oe.isEnabled&&oe.off("change",a)})});const r=P(!1),i=$(()=>r.value?"内容区复原":"内容区放大"),v=$(()=>r.value?"fullscreen-exit":"fullscreen"),u=()=>{document.body.className=r.value?"":"content-large",r.value=!r.value};return(c,g)=>{const b=w("SvgIcon"),h=w("el-tooltip"),y=w("el-dropdown-item"),C=w("el-dropdown-menu"),I=w("el-dropdown");return d(),T("div",null,[c.content?(d(),k(I,{key:1},{dropdown:m(()=>[f(C,null,{default:m(()=>[f(y,{onClick:u},{default:m(()=>[Y(W(i.value),1)]),_:1}),f(y,{onClick:o,disabled:t.value},{default:m(()=>[Y("内容区全屏")]),_:1},8,["disabled"])]),_:1})]),default:m(()=>[f(b,{name:v.value},null,8,["name"])]),_:1})):(d(),k(h,{key:0,effect:"dark",content:s.value,placement:"bottom"},{default:m(()=>[f(b,{name:l.value,onClick:o},null,8,["name"])]),_:1},8,["content"]))])}}}),Xe=L(gn,[["__scopeId","data-v-9e7c36e4"]]),bn=["onMouseenter"],yn={class:"result-item-title"},wn=R({__name:"SearchResult",props:{modelValue:{},list:{},isPressUpOrDown:{type:Boolean}},emits:["update:modelValue"],setup(n,{expose:e,emit:t}){const s=n,l=t,o=Be(),a=P(0),r=$({get(){return s.modelValue},set(g){l("update:modelValue",g)}}),i=g=>{const b=g.name===r.value;return{background:b?"var(--el-color-primary)":"",color:b?"#fff":""}},v=g=>{s.isPressUpOrDown||(r.value=g.name)},u=()=>{a.value=Number((window.innerHeight*.4).toFixed(1))},c=g=>{var C;const b=(C=o==null?void 0:o.proxy)==null?void 0:C.$refs[`resultItemRef${g}`];if(!b)return 0;const y=b[0].offsetTop+128;return y>a.value?y-a.value:0};return Fe(()=>{window.addEventListener("resize",u)}),be(()=>{u()}),De(()=>{window.removeEventListener("resize",u)}),e({getScrollTop:c}),(g,b)=>{const h=w("SvgIcon");return d(),T("div",null,[(d(!0),T(G,null,te(g.list,(y,C)=>{var I,D,A;return d(),T("div",{key:C,ref_for:!0,ref:`resultItemRef${C}`,class:"result-item",style:We(i(y)),onMouseenter:N=>v(y)},[(I=y.meta)!=null&&I.svgIcon?(d(),k(h,{key:0,name:y.meta.svgIcon},null,8,["name"])):(D=y.meta)!=null&&D.elIcon?(d(),k(ce(y.meta.elIcon),{key:1,class:"el-icon"})):M("",!0),x("span",yn,W((A=y.meta)==null?void 0:A.title),1),r.value&&r.value===y.name?(d(),k(h,{key:2,name:"keyboard-enter"})):M("",!0)],44,bn)}),128))])}}}),Sn=L(wn,[["__scopeId","data-v-7383ebb0"]]),Te=n=>(ye("data-v-3171d360"),n=n(),we(),n),kn={class:"search-footer"},xn={class:"search-footer-item"},Cn=Te(()=>x("span",null,"确认",-1)),Tn={class:"search-footer-item"},En=Te(()=>x("span",null,"切换",-1)),$n={class:"search-footer-item"},Vn=Te(()=>x("span",null,"关闭",-1)),Mn={class:"search-footer-total"},An=R({__name:"SearchFooter",props:{total:{}},setup(n){const e=n,t=ne(),s=$(()=>t.device===X.Mobile);return(l,o)=>{const a=w("SvgIcon");return d(),T("div",kn,[s.value?M("",!0):(d(),T(G,{key:0},[x("span",xn,[f(a,{name:"keyboard-enter"}),Cn]),x("span",Tn,[f(a,{name:"keyboard-up"}),f(a,{name:"keyboard-down"}),En]),x("span",$n,[f(a,{name:"keyboard-esc"}),Vn])],64)),x("span",Mn,"共 "+W(e.total)+" 项",1)])}}}),In=L(An,[["__scopeId","data-v-3171d360"]]),Rn=x("p",null,"搜索结果",-1),Ln=R({__name:"SearchModal",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,s=e,l=ne(),o=ve(),a=P(null),r=P(null),i=P(null),v=P(""),u=Ye([]),c=P(void 0),g=P(!1),b=$(()=>l.device===X.Mobile?"80vw":"40vw"),h=$({get(){return t.modelValue},set(V){s("update:modelValue",V)}}),y=$(()=>it(Se().routes)),C=ut(()=>{var S;const V=I(y.value);u.value=V.filter(z=>{var E,F;return v.value?(F=(E=z.meta)==null?void 0:E.title)==null?void 0:F.toLocaleLowerCase().includes(v.value.toLocaleLowerCase().trim()):!1});const p=(S=u.value)==null?void 0:S.length;c.value=p>0?u.value[0].name:void 0},500),I=(V,p=[])=>(V.forEach(S=>{p.push(S),S.children&&I(S.children,p)}),p),D=()=>{h.value=!1,setTimeout(()=>{v.value="",u.value=[]},200)},A=V=>{var S;if(!i.value)return;const p=i.value.getScrollTop(V);(S=r.value)==null||S.setScrollTop(p)},N=()=>{g.value=!0;const{length:V}=u.value;if(V===0)return;const p=u.value.findIndex(S=>S.name===c.value);if(p===0){const S=u.value[V-1].name;c.value===S&&V>1?(c.value=u.value[V-2].name,A(V-2)):(c.value=S,A(V-1))}else c.value=u.value[p-1].name,A(p-1)},q=()=>{g.value=!0;const{length:V}=u.value;if(V===0)return;const p=u.value.map(S=>S.name).lastIndexOf(c.value);if(p===V-1){const S=u.value[0].name;c.value===S&&V>1?(c.value=u.value[1].name,A(1)):(c.value=S,A(0))}else c.value=u.value[p+1].name,A(p+1)},B=()=>{var z;const{length:V}=u.value;if(V===0)return;const p=c.value,S=(z=u.value.find(E=>E.name===p))==null?void 0:z.path;if(S&&fe(S)){window.open(S,"_blank","noopener, noreferrer");return}if(!p){de.warning("无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name");return}try{o.push({name:p})}catch{de.error("该菜单有必填的动态参数，无法通过搜索进入");return}D()},H=()=>{g.value=!1};return(V,p)=>{const S=w("SvgIcon"),z=w("el-input"),E=w("el-empty"),F=w("el-dialog");return d(),k(F,{modelValue:h.value,"onUpdate:modelValue":p[2]||(p[2]=J=>h.value=J),onOpened:p[3]||(p[3]=J=>{var ee;return(ee=a.value)==null?void 0:ee.focus()}),onClosed:p[4]||(p[4]=J=>{var ee;return(ee=a.value)==null?void 0:ee.blur()}),onKeydown:[se(N,["up"]),se(q,["down"]),se(B,["enter"])],onKeyup:se(H,["up","down"]),"before-close":D,width:b.value,top:"5vh",class:"search-modal__private","append-to-body":""},{footer:m(()=>[f(In,{total:u.value.length},null,8,["total"])]),default:m(()=>[f(z,{ref_key:"inputRef",ref:a,modelValue:v.value,"onUpdate:modelValue":p[0]||(p[0]=J=>v.value=J),onInput:_(C),placeholder:"搜索菜单",size:"large",clearable:""},{prefix:m(()=>[f(S,{name:"search"})]),_:1},8,["modelValue","onInput"]),u.value.length===0?(d(),k(E,{key:0,description:"暂无搜索结果","image-size":100})):(d(),T(G,{key:1},[Rn,f(_(He),{ref_key:"scrollbarRef",ref:r,"max-height":"40vh",always:""},{default:m(()=>[f(Sn,{ref_key:"searchResultRef",ref:i,modelValue:c.value,"onUpdate:modelValue":p[1]||(p[1]=J=>c.value=J),list:u.value,isPressUpOrDown:g.value,onClick:B},null,8,["modelValue","list","isPressUpOrDown"])]),_:1},512)],64))]),_:1},8,["modelValue","width"])}}}),Pn=R({__name:"index",setup(n){const e=P(!1),t=()=>{e.value=!0};return(s,l)=>{const o=w("SvgIcon"),a=w("el-tooltip");return d(),T("div",null,[f(a,{effect:"dark",content:"搜索菜单",placement:"bottom"},{default:m(()=>[f(o,{name:"search",onClick:t})]),_:1}),f(Ln,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r)},null,8,["modelValue"])])}}}),Fn=L(Pn,[["__scopeId","data-v-dc5accb4"]]),Dn=n=>(ye("data-v-394c5e19"),n=n(),we(),n),Nn={class:"navigation-bar"},zn={class:"right-menu"},Bn={class:"right-menu-avatar"},Wn={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},On={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Hn=Dn(()=>x("span",{style:{display:"block"}},"退出登录",-1)),Un=R({__name:"index",setup(n){const e=ve(),t=ne(),s=Z(),l=ot(),{sidebar:o,device:a}=K(t),{layoutMode:r,showNotify:i,showThemeSwitch:v,showScreenfull:u,showSearchMenu:c}=K(s),g=$(()=>r.value==="top"),b=$(()=>a.value===X.Mobile),h=()=>{t.toggleSidebar(!1)},y=()=>{l.logout(),e.push("/login")};return(C,I)=>{const D=w("el-avatar"),A=w("el-dropdown-item"),N=w("el-dropdown-menu"),q=w("el-dropdown");return d(),T("div",Nn,[!g.value||b.value?(d(),k(Vt,{key:0,"is-active":_(o).opened,class:"hamburger",onToggleClick:h},null,8,["is-active"])):M("",!0),!g.value||b.value?(d(),k(zt,{key:1,class:"breadcrumb"})):M("",!0),g.value&&!b.value?(d(),k(Ce,{key:2,class:"sidebar"})):M("",!0),x("div",zn,[_(c)?(d(),k(Fn,{key:0,class:"right-menu-item"})):M("",!0),_(u)?(d(),k(Xe,{key:1,class:"right-menu-item"})):M("",!0),_(v)?(d(),k(ht,{key:2,class:"right-menu-item"})):M("",!0),_(i)?(d(),k(hn,{key:3,class:"right-menu-item"})):M("",!0),f(q,{class:"right-menu-item"},{dropdown:m(()=>[f(N,null,{default:m(()=>[x("a",Wn,[f(A,null,{default:m(()=>[Y("GitHub")]),_:1})]),x("a",On,[f(A,null,{default:m(()=>[Y("Gitee")]),_:1})]),f(A,{divided:"",onClick:y},{default:m(()=>[Hn]),_:1})]),_:1})]),default:m(()=>[x("div",Bn,[f(D,{icon:_(dt),size:30},null,8,["icon"]),x("span",null,W(_(l).username),1)])]),_:1})])])}}}),Ee=L(Un,[["__scopeId","data-v-394c5e19"]]),qn={class:"select-layout-mode"},Xn=R({__name:"SelectLayoutMode",setup(n){const e=Z(),{layoutMode:t}=K(e),s=$(()=>t.value==="left"),l=$(()=>t.value==="top"),o=$(()=>t.value==="left-top");return(a,r)=>{const i=w("el-aside"),v=w("el-header"),u=w("el-main"),c=w("el-container"),g=w("el-tooltip");return d(),T("div",qn,[f(g,{content:"左侧模式"},{default:m(()=>[f(c,{class:O(["layout-mode left",{active:s.value}]),onClick:r[0]||(r[0]=b=>t.value="left")},{default:m(()=>[f(i),f(c,null,{default:m(()=>[f(v),f(u)]),_:1})]),_:1},8,["class"])]),_:1}),f(g,{content:"顶部模式"},{default:m(()=>[f(c,{class:O(["layout-mode top",{active:l.value}]),onClick:r[1]||(r[1]=b=>t.value="top")},{default:m(()=>[f(v),f(u)]),_:1},8,["class"])]),_:1}),f(g,{content:"混合模式"},{default:m(()=>[f(c,{class:O(["layout-mode left-top",{active:o.value}]),onClick:r[2]||(r[2]=b=>t.value="left-top")},{default:m(()=>[f(v),f(c,null,{default:m(()=>[f(i),f(u)]),_:1})]),_:1},8,["class"])]),_:1})])}}}),Gn=L(Xn,[["__scopeId","data-v-e7938886"]]),Ge=n=>(ye("data-v-317305d5"),n=n(),we(),n),Jn={class:"setting-container"},Kn=Ge(()=>x("h4",null,"布局配置",-1)),Zn=Ge(()=>x("h4",null,"功能配置",-1)),jn={class:"setting-name"},Yn=R({__name:"index",setup(n){const e=Z(),{layoutMode:t,showTagsView:s,showLogo:l,fixedHeader:o,showFooter:a,showNotify:r,showThemeSwitch:i,showScreenfull:v,showSearchMenu:u,cacheTagsView:c,showWatermark:g,showGreyMode:b,showColorWeakness:h}=K(e),y={显示标签栏:s,"显示 Logo":l,"固定 Header":o,"显示页脚 Footer":a,显示消息通知:r,显示切换主题按钮:i,显示全屏按钮:v,显示搜索按钮:u,是否缓存标签栏:c,开启系统水印:g,显示灰色模式:b,显示色弱模式:h};return ue(()=>{t.value!=="left"&&(o.value=!0)}),(C,I)=>{const D=w("el-divider"),A=w("el-switch"),N=w("el-button");return d(),T("div",Jn,[Kn,f(Gn),f(D),Zn,(d(),T(G,null,te(y,(q,B,H)=>x("div",{class:"setting-item",key:H},[x("span",jn,W(B),1),f(A,{modelValue:q.value,"onUpdate:modelValue":V=>q.value=V,disabled:_(t)!=="left"&&B==="固定 Header"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),64)),f(N,{type:"danger",icon:_(ft),onClick:_(Qt)},{default:m(()=>[Y("重 置")]),_:1},8,["icon","onClick"])])}}}),Qn=L(Yn,[["__scopeId","data-v-317305d5"]]),eo={class:"scroll-container"},to=200,no=R({__name:"ScrollPane",props:{tagRefs:{}},setup(n){const e=n,t=pe(),s=Z(),{listenerRouteChange:l}=he(),o=P(),a=P();let r=0;const i=({scrollLeft:b})=>{r=b},v=({deltaY:b})=>{/^-/.test(b.toString())?c("left"):c("right")},u=()=>{const b=a.value.clientWidth,h=o.value.wrapRef.clientWidth,y=b-h-r;return{scrollbarContentRefWidth:b,scrollbarRefWidth:h,lastDistance:y}},c=(b,h=to)=>{let y=0;const{scrollbarContentRefWidth:C,scrollbarRefWidth:I,lastDistance:D}=u();I>C||(b==="left"?y=Math.max(0,r-h):y=Math.min(r+h,r+D),o.value.setScrollLeft(y))},g=()=>{const b=e.tagRefs;for(let h=0;h<b.length;h++)if(t.path===b[h].$props.to.path){const y=b[h].$el,C=y.offsetWidth,I=y.offsetLeft,{scrollbarRefWidth:D}=u();if(I<r){const N=r-I;c("left",N);return}const A=D+r-C;if(I>A){const N=I-A;c("right",N);return}}};return l(()=>{Qe(g)}),(b,h)=>{const y=w("el-icon");return d(),T("div",eo,[f(y,{class:"arrow left",onClick:h[0]||(h[0]=C=>c("left"))},{default:m(()=>[f(_(pt))]),_:1}),f(_(He),{ref_key:"scrollbarRef",ref:o,onWheelPassive:v,onScroll:i},{default:m(()=>[x("div",{ref_key:"scrollbarContentRef",ref:a,class:"scrollbar-content"},[ie(b.$slots,"default",{},void 0,!0)],512)]),_:3},512),f(y,{class:"arrow right",onClick:h[1]||(h[1]=C=>c("right"))},{default:m(()=>[f(_(vt))]),_:1}),_(s).showScreenfull?(d(),k(Xe,{key:0,element:".app-main",content:!0,class:"screenfull"})):M("",!0)])}}}),oo=L(no,[["__scopeId","data-v-519b3baa"]]),ao={class:"tags-view-container"},so=R({__name:"index",setup(n){const e=Be(),t=ve(),s=pe(),l=Oe(),o=Se(),{listenerRouteChange:a}=he(),r=P([]),i=P(!1),v=P(0),u=P(0),c=P({});let g=[];const b=p=>p.path===s.path,h=p=>{var S;return(S=p.meta)==null?void 0:S.affix},y=(p,S="/")=>{const z=[];return p.forEach(E=>{if(h(E)){const F=qe.resolve(S,E.path);z.push({fullPath:F,path:F,name:E.name,meta:{...E.meta}})}if(E.children){const F=y(E.children,E.path);z.push(...F)}}),z},C=()=>{g=y(o.routes);for(const p of g)p.name&&l.addVisitedView(p)},I=p=>{p.name&&(l.addVisitedView(p),l.addCachedView(p))},D=p=>{l.delCachedView(p),t.replace({path:"/redirect"+p.path,query:p.query})},A=p=>{l.delVisitedView(p),l.delCachedView(p),b(p)&&B(l.visitedViews,p)},N=()=>{const p=c.value.fullPath;p!==s.path&&p!==void 0&&t.push(p),l.delOthersVisitedViews(c.value),l.delOthersCachedViews(c.value)},q=p=>{l.delAllVisitedViews(),l.delAllCachedViews(),!g.some(S=>S.path===s.path)&&B(l.visitedViews,p)},B=(p,S)=>{const z=p.slice(-1)[0],E=z==null?void 0:z.fullPath;E!==void 0?t.push(E):S.name==="Dashboard"?t.push({path:"/redirect"+S.path,query:S.query}):t.push("/")},H=(p,S)=>{const E=e.proxy.$el.getBoundingClientRect().left,J=e.proxy.$el.offsetWidth-105,ee=S.clientX-E+15;u.value=ee>J?J:ee,v.value=S.clientY,i.value=!0,c.value=p},V=()=>{i.value=!1};return Pe(i,p=>{p?document.body.addEventListener("click",V):document.body.removeEventListener("click",V)}),be(()=>{C(),a(async p=>{I(p)},!0)}),(p,S)=>{const z=w("el-icon");return d(),T("div",ao,[f(oo,{class:"tags-view-wrapper","tag-refs":r.value},{default:m(()=>[(d(!0),T(G,null,te(_(l).visitedViews,E=>(d(),k(_(et),{ref_for:!0,ref_key:"tagRefs",ref:r,key:E.path,class:O([{active:b(E)},"tags-view-item"]),to:{path:E.path,query:E.query},onMouseup:le(F=>!h(E)&&A(E),["middle"]),onContextmenu:le(F=>H(E,F),["prevent"])},{default:m(()=>{var F;return[Y(W((F=E.meta)==null?void 0:F.title)+" ",1),h(E)?M("",!0):(d(),k(z,{key:0,size:12,onClick:le(J=>A(E),["prevent","stop"])},{default:m(()=>[f(_(mt))]),_:2},1032,["onClick"]))]}),_:2},1032,["class","to","onMouseup","onContextmenu"]))),128))]),_:1},8,["tag-refs"]),me(x("ul",{class:"contextmenu",style:We({left:u.value+"px",top:v.value+"px"})},[x("li",{onClick:S[0]||(S[0]=E=>D(c.value))},"刷新"),h(c.value)?M("",!0):(d(),T("li",{key:0,onClick:S[1]||(S[1]=E=>A(c.value))},"关闭")),x("li",{onClick:N},"关闭其它"),x("li",{onClick:S[2]||(S[2]=E=>q(c.value))},"关闭所有")],4),[[_e,i.value]])])}}}),$e=L(so,[["__scopeId","data-v-3bc82890"]]),lo=R({__name:"index",props:{buttonTop:{default:350}},setup(n){ze(l=>({eee8c778:t}));const t=n.buttonTop+"px",s=P(!1);return(l,o)=>{const a=w("el-icon"),r=w("el-drawer");return d(),T(G,null,[x("div",{class:"handle-button",onClick:o[0]||(o[0]=i=>s.value=!0)},[f(a,{size:24},{default:m(()=>[f(_(_t))]),_:1})]),f(r,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=i=>s.value=i),size:"300px","with-header":!1},{default:m(()=>[ie(l.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue"])],64)}}}),ro=L(lo,[["__scopeId","data-v-ec8bae57"]]),co=R({__name:"LeftMode",setup(n){const e=ne(),t=Z(),{showTagsView:s,fixedHeader:l}=K(t),o=$(()=>({hideSidebar:!e.sidebar.opened,openSidebar:e.sidebar.opened,withoutAnimation:e.sidebar.withoutAnimation,mobile:e.device===X.Mobile})),a=()=>{e.closeSidebar(!1)};return(r,i)=>(d(),T("div",{class:O([o.value,"app-wrapper"])},[o.value.mobile&&o.value.openSidebar?(d(),T("div",{key:0,class:"drawer-bg",onClick:a})):M("",!0),f(_(Ce),{class:"sidebar-container"}),x("div",{class:O([{hasTagsView:_(s)},"main-container"])},[x("div",{class:O([{"fixed-header":_(l)},"layout-header"])},[f(_(Ee)),me(f(_($e),null,null,512),[[_e,_(s)]])],2),f(_(ke),{class:"app-main"})],2)],2))}}),io=L(co,[["__scopeId","data-v-c751cae0"]]),uo={class:"app-wrapper"},fo={class:"fixed-header layout-header"},po={class:"content"},vo=R({__name:"TopMode",setup(n){const e=Z(),{showTagsView:t,showLogo:s}=K(e);return(l,o)=>(d(),T("div",uo,[x("div",fo,[x("div",po,[_(s)?(d(),k(_(xe),{key:0,collapse:!1,class:"logo"})):M("",!0),f(_(Ee),{class:"navigation-bar"})]),me(f(_($e),null,null,512),[[_e,_(t)]])]),x("div",{class:O([{hasTagsView:_(t)},"main-container"])},[f(_(ke),{class:"app-main"})],2)]))}}),mo=L(vo,[["__scopeId","data-v-5a9c676b"]]),_o={class:"fixed-header layout-header"},ho={class:"content"},go=R({__name:"LeftTopMode",setup(n){const e=ne(),t=Z(),{showTagsView:s,showLogo:l}=K(t),o=$(()=>({hideSidebar:!e.sidebar.opened}));return(a,r)=>(d(),T("div",{class:O([o.value,"app-wrapper"])},[x("div",_o,[_(l)?(d(),k(_(xe),{key:0,collapse:!1,class:"logo"})):M("",!0),x("div",ho,[f(_(Ee)),me(f(_($e),null,null,512),[[_e,_(s)]])])]),x("div",{class:O([{hasTagsView:_(s)},"main-container"])},[f(_(Ce),{class:"sidebar-container"}),f(_(ke),{class:"app-main"})],2)],2))}}),bo=L(go,[["__scopeId","data-v-73d109f7"]]),ge="--v3-tagsview-height",yo=R({__name:"index",setup(n){wt();const{setWatermark:e,clearWatermark:t}=at(),s=ne(),l=Z(),{showSettings:o,layoutMode:a,showTagsView:r,showWatermark:i,showGreyMode:v,showColorWeakness:u}=K(l),c=$(()=>({showGreyMode:v.value,showColorWeakness:u.value})),g=re(ge);return ue(()=>{r.value?Ae(ge,g):Ae(ge,"0px")}),ue(()=>{i.value?e("V3 Admin Vite"):t()}),(b,h)=>(d(),T("div",{class:O(c.value)},[_(a)==="left"||_(s).device===_(X).Mobile?(d(),k(io,{key:0})):_(a)==="top"?(d(),k(mo,{key:1})):_(a)==="left-top"?(d(),k(bo,{key:2})):M("",!0),_(o)?(d(),k(_(ro),{key:3},{default:m(()=>[f(_(Qn))]),_:1})):M("",!0)],2))}}),Eo=L(yo,[["__scopeId","data-v-45f3bd78"]]);export{Eo as default};