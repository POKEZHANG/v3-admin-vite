import{aA as et,Z as tt,r as P,b as ze,E as Be,d as Se,z as We,e as M,l as R,m as u,p as E,T as N,u as f,ag as g,q as C,U as d,O as _,W as Oe,M as k,aB as nt,Q as ie,R as I,aC as me,aD as _e,F as U,a7 as j,a2 as re,H as ue,a9 as ot,S as G,I as H,aE as He,w as de,aF as st,aG as qe,c as Ue,J as Xe,aH as ke,aI as xe,s as at,a8 as le,aJ as ne,n as lt,aK as rt,P as ve,V as he}from"./vue-edbHIJ2J.js";import{g as ct,S as Ke,D as Y,s as Le,a as it,u as ge,b as J,L as ee,_ as D,c as Ge,r as ut,d as Ce,e as dt}from"./index-YVoBEDbL.js";import{u as ft}from"./useWatermark-cvdbE1cJ.js";import{h as pt,j as mt,g as _t,k as vt,b as fe,l as ht,n as gt,o as Je,u as bt,r as yt,p as wt,q as St,s as kt,t as xt}from"./element-6bs1qbFv.js";import{_ as Ct}from"./index.vue_vue_type_script_setup_true_lang-rtFXZDMh.js";import"./vxe-gaPTatyF.js";function Tt(n){n?Le(it):Le(Ke)}const oe=et("app",()=>{const n=tt({opened:ct()!==Ke,withoutAnimation:!1}),e=P(Y.Desktop);return ze(()=>n.opened,o=>Tt(o)),{device:e,sidebar:n,toggleSidebar:o=>{n.opened=!n.opened,n.withoutAnimation=o},closeSidebar:o=>{n.opened=!1,n.withoutAnimation=o},toggleDevice:o=>{e.value=o}}}),Et=992,$t=()=>{const n=oe(),{listenerRouteChange:e}=ge(),t=()=>document.body.getBoundingClientRect().width-1<Et,l=()=>{if(!document.hidden){const a=t();n.toggleDevice(a?Y.Mobile:Y.Desktop),a&&n.closeSidebar(!0)}};e(()=>{n.device===Y.Mobile&&n.sidebar.opened&&n.closeSidebar(!1)}),Be(()=>{window.addEventListener("resize",l)}),Se(()=>{t()&&(n.toggleDevice(Y.Mobile),n.closeSidebar(!0))}),We(()=>{window.removeEventListener("resize",l)})},Ze=oe(),Vt=M(()=>Ze.device===Y.Mobile),Mt=M(()=>Ze.device===Y.Desktop);function se(){return{isMobile:Vt,isDesktop:Mt}}const be=J(),At=M(()=>be.layoutMode===ee.Left),It=M(()=>be.layoutMode===ee.Top),Lt=M(()=>be.layoutMode===ee.LeftTop),Rt=n=>{be.layoutMode=n};function ae(){return{isLeft:At,isTop:It,isLeftTop:Lt,setLayoutMode:Rt}}const Dt={class:"layout-footer"},Pt=R({__name:"index",setup(n){const e="V3 Admin Vite";return(t,l)=>(u(),E("footer",Dt,"MIT © 2021-PRESENT "+N(f(e)),1))}}),Ft=D(Pt,[["__scopeId","data-v-034a5242"]]),Nt={class:"app-main"},zt={class:"app-scrollbar"},Bt=R({__name:"AppMain",setup(n){const e=Ge(),t=J();return(l,a)=>{const o=g("router-view"),s=g("el-backtop");return u(),E("section",Nt,[C("div",zt,[d(o,null,{default:_(({Component:r,route:c})=>[d(Oe,{name:"el-fade-in",mode:"out-in"},{default:_(()=>[(u(),k(nt,{include:f(e).cachedViews},[(u(),k(ie(r),{key:c.path,class:"app-container-grow"}))],1032,["include"]))]),_:2},1024)]),_:1}),f(t).showFooter?(u(),k(Ft,{key:0})):I("",!0)]),d(s),d(s,{target:".app-scrollbar"})])}}}),Te=D(Bt,[["__scopeId","data-v-d87ee2cd"]]),Wt=R({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(n,{emit:e}){const t=n,l=e,a=()=>{l("toggleClick")};return(o,s)=>{const r=g("el-icon");return u(),E("div",{onClick:a},[d(r,{size:20,class:"icon"},{default:_(()=>[t.isActive?(u(),k(f(pt),{key:0})):(u(),k(f(mt),{key:1}))]),_:1})])}}}),Ot=D(Wt,[["__scopeId","data-v-252d9bf8"]]);function Ht(n){for(var e=[],t=0;t<n.length;){var l=n[t];if(l==="*"||l==="+"||l==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(l==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(l==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(l==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(l===":"){for(var a="",o=t+1;o<n.length;){var s=n.charCodeAt(o);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){a+=n[o++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:a}),t=o;continue}if(l==="("){var r=1,c="",o=t+1;if(n[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<n.length;){if(n[o]==="\\"){c+=n[o++]+n[o++];continue}if(n[o]===")"){if(r--,r===0){o++;break}}else if(n[o]==="("&&(r++,n[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));c+=n[o++]}if(r)throw new TypeError("Unbalanced pattern at ".concat(t));if(!c)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:c}),t=o;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function qt(n,e){e===void 0&&(e={});for(var t=Ht(n),l=e.prefixes,a=l===void 0?"./":l,o="[^".concat(Kt(e.delimiter||"/#?"),"]+?"),s=[],r=0,c=0,p="",m=function(b){if(c<t.length&&t[c].type===b)return t[c++].value},i=function(b){var T=m(b);if(T!==void 0)return T;var W=t[c],S=W.type,V=W.index;throw new TypeError("Unexpected ".concat(S," at ").concat(V,", expected ").concat(b))},w=function(){for(var b="",T;T=m("CHAR")||m("ESCAPED_CHAR");)b+=T;return b};c<t.length;){var v=m("CHAR"),h=m("NAME"),y=m("PATTERN");if(h||y){var x=v||"";a.indexOf(x)===-1&&(p+=x,x=""),p&&(s.push(p),p=""),s.push({name:h||r++,prefix:x,suffix:"",pattern:y||o,modifier:m("MODIFIER")||""});continue}var L=v||m("ESCAPED_CHAR");if(L){p+=L;continue}p&&(s.push(p),p="");var z=m("OPEN");if(z){var x=w(),B=m("NAME")||"",O=m("PATTERN")||"",A=w();i("CLOSE"),s.push({name:B||(O?r++:""),pattern:B&&!O?o:O,prefix:x,suffix:A,modifier:m("MODIFIER")||""});continue}i("END")}return s}function Ut(n,e){return Xt(qt(n,e),e)}function Xt(n,e){e===void 0&&(e={});var t=Gt(e),l=e.encode,a=l===void 0?function(c){return c}:l,o=e.validate,s=o===void 0?!0:o,r=n.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),t)});return function(c){for(var p="",m=0;m<n.length;m++){var i=n[m];if(typeof i=="string"){p+=i;continue}var w=c?c[i.name]:void 0,v=i.modifier==="?"||i.modifier==="*",h=i.modifier==="*"||i.modifier==="+";if(Array.isArray(w)){if(!h)throw new TypeError('Expected "'.concat(i.name,'" to not repeat, but got an array'));if(w.length===0){if(v)continue;throw new TypeError('Expected "'.concat(i.name,'" to not be empty'))}for(var y=0;y<w.length;y++){var x=a(w[y],i);if(s&&!r[m].test(x))throw new TypeError('Expected all "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(x,'"'));p+=i.prefix+x+i.suffix}continue}if(typeof w=="string"||typeof w=="number"){var x=a(String(w),i);if(s&&!r[m].test(x))throw new TypeError('Expected "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(x,'"'));p+=i.prefix+x+i.suffix;continue}if(!v){var L=h?"an array":"a string";throw new TypeError('Expected "'.concat(i.name,'" to be ').concat(L))}}return p}}function Kt(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Gt(n){return n&&n.sensitive?"":"i"}const Jt={key:0,class:"no-redirect"},Zt=["onClick"],jt=R({__name:"index",setup(n){const e=me(),t=_e(),{listenerRouteChange:l}=ge(),a=P([]),o=()=>{a.value=e.matched.filter(c=>{var p,m;return((p=c.meta)==null?void 0:p.title)&&((m=c.meta)==null?void 0:m.breadcrumb)!==!1})},s=c=>Ut(c)(e.params),r=c=>{const{redirect:p,path:m}=c;if(p){t.push(p);return}t.push(s(m))};return l(c=>{c.path.startsWith("/redirect/")||o()},!0),(c,p)=>{const m=g("el-breadcrumb-item"),i=g("el-breadcrumb");return u(),k(i,{class:"app-breadcrumb"},{default:_(()=>[(u(!0),E(U,null,j(a.value,(w,v)=>(u(),k(m,{key:w.path},{default:_(()=>[w.redirect==="noRedirect"||v===a.value.length-1?(u(),E("span",Jt,N(w.meta.title),1)):(u(),E("a",{key:1,onClick:re(h=>r(w),["prevent"])},N(w.meta.title),9,Zt))]),_:2},1024))),128))]),_:1})}}}),Yt=D(jt,[["__scopeId","data-v-2eef2d12"]]),pe=n=>/^(https?:|mailto:|tel:)/.test(n),Qt=["href"],en=R({__name:"SidebarItemLink",props:{to:{}},setup(n){const e=n;return(t,l)=>{const a=g("router-link");return f(pe)(e.to)?(u(),E("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[ue(t.$slots,"default")],8,Qt)):(u(),k(a,{key:1,to:e.to},{default:_(()=>[ue(t.$slots,"default")]),_:3},8,["to"]))}}});function K(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function Re(n,e){for(var t="",l=0,a=-1,o=0,s,r=0;r<=n.length;++r){if(r<n.length)s=n.charCodeAt(r);else{if(s===47)break;s=47}if(s===47){if(!(a===r-1||o===1))if(a!==r-1&&o===2){if(t.length<2||l!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){c===-1?(t="",l=0):(t=t.slice(0,c),l=t.length-1-t.lastIndexOf("/")),a=r,o=0;continue}}else if(t.length===2||t.length===1){t="",l=0,a=r,o=0;continue}}e&&(t.length>0?t+="/..":t="..",l=2)}else t.length>0?t+="/"+n.slice(a+1,r):t=n.slice(a+1,r),l=r-a-1;a=r,o=0}else s===46&&o!==-1?++o:o=-1}return t}function tn(n,e){var t=e.dir||e.root,l=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+l:t+n+l:l}var te={resolve:function(){for(var e="",t=!1,l,a=arguments.length-1;a>=-1&&!t;a--){var o;a>=0?o=arguments[a]:(l===void 0&&(l=process.cwd()),o=l),K(o),o.length!==0&&(e=o+"/"+e,t=o.charCodeAt(0)===47)}return e=Re(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(K(e),e.length===0)return".";var t=e.charCodeAt(0)===47,l=e.charCodeAt(e.length-1)===47;return e=Re(e,!t),e.length===0&&!t&&(e="."),e.length>0&&l&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return K(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var l=arguments[t];K(l),l.length>0&&(e===void 0?e=l:e+="/"+l)}return e===void 0?".":te.normalize(e)},relative:function(e,t){if(K(e),K(t),e===t||(e=te.resolve(e),t=te.resolve(t),e===t))return"";for(var l=1;l<e.length&&e.charCodeAt(l)===47;++l);for(var a=e.length,o=a-l,s=1;s<t.length&&t.charCodeAt(s)===47;++s);for(var r=t.length,c=r-s,p=o<c?o:c,m=-1,i=0;i<=p;++i){if(i===p){if(c>p){if(t.charCodeAt(s+i)===47)return t.slice(s+i+1);if(i===0)return t.slice(s+i)}else o>p&&(e.charCodeAt(l+i)===47?m=i:i===0&&(m=0));break}var w=e.charCodeAt(l+i),v=t.charCodeAt(s+i);if(w!==v)break;w===47&&(m=i)}var h="";for(i=l+m+1;i<=a;++i)(i===a||e.charCodeAt(i)===47)&&(h.length===0?h+="..":h+="/..");return h.length>0?h+t.slice(s+m):(s+=m,t.charCodeAt(s)===47&&++s,t.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(K(e),e.length===0)return".";for(var t=e.charCodeAt(0),l=t===47,a=-1,o=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){a=s;break}}else o=!1;return a===-1?l?"/":".":l&&a===1?"//":e.slice(0,a)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');K(e);var l=0,a=-1,o=!0,s;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var r=t.length-1,c=-1;for(s=e.length-1;s>=0;--s){var p=e.charCodeAt(s);if(p===47){if(!o){l=s+1;break}}else c===-1&&(o=!1,c=s+1),r>=0&&(p===t.charCodeAt(r)?--r===-1&&(a=s):(r=-1,a=c))}return l===a?a=c:a===-1&&(a=e.length),e.slice(l,a)}else{for(s=e.length-1;s>=0;--s)if(e.charCodeAt(s)===47){if(!o){l=s+1;break}}else a===-1&&(o=!1,a=s+1);return a===-1?"":e.slice(l,a)}},extname:function(e){K(e);for(var t=-1,l=0,a=-1,o=!0,s=0,r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(c===47){if(!o){l=r+1;break}continue}a===-1&&(o=!1,a=r+1),c===46?t===-1?t=r:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||a===-1||s===0||s===1&&t===a-1&&t===l+1?"":e.slice(t,a)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return tn("/",e)},parse:function(e){K(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var l=e.charCodeAt(0),a=l===47,o;a?(t.root="/",o=1):o=0;for(var s=-1,r=0,c=-1,p=!0,m=e.length-1,i=0;m>=o;--m){if(l=e.charCodeAt(m),l===47){if(!p){r=m+1;break}continue}c===-1&&(p=!1,c=m+1),l===46?s===-1?s=m:i!==1&&(i=1):s!==-1&&(i=-1)}return s===-1||c===-1||i===0||i===1&&s===c-1&&s===r+1?c!==-1&&(r===0&&a?t.base=t.name=e.slice(1,c):t.base=t.name=e.slice(r,c)):(r===0&&a?(t.name=e.slice(1,s),t.base=e.slice(1,c)):(t.name=e.slice(r,s),t.base=e.slice(r,c)),t.ext=e.slice(s,c)),r>0?t.dir=e.slice(0,r-1):a&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};te.posix=te;var nn=te;const je=_t(nn),on={key:2},sn=R({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(n){const e=n,t=M(()=>{var r;return(r=e.item.meta)==null?void 0:r.alwaysShow}),l=M(()=>{var r;return((r=e.item.children)==null?void 0:r.filter(c=>{var p;return!((p=c.meta)!=null&&p.hidden)}))??[]}),a=M(()=>l.value.length),o=M(()=>{const r=a.value;switch(!0){case r>1:return null;case r===1:return l.value[0];default:return{...e.item,path:""}}}),s=r=>{switch(!0){case pe(r):return r;case pe(e.basePath):return e.basePath;default:return je.resolve(e.basePath,r)}};return(r,c)=>{const p=g("SvgIcon"),m=g("el-menu-item"),i=g("SidebarItem",!0),w=g("el-sub-menu");return u(),E("div",{class:H({"simple-mode":e.isCollapse&&!r.isTop,"first-level":e.isFirstLevel})},[!t.value&&o.value&&!o.value.children?(u(),E(U,{key:0},[o.value.meta?(u(),k(en,{key:0,to:s(o.value.path)},{default:_(()=>[d(m,{index:s(o.value.path)},ot({default:_(()=>[o.value.meta.svgIcon?(u(),k(p,{key:0,name:o.value.meta.svgIcon},null,8,["name"])):o.value.meta.elIcon?(u(),k(ie(o.value.meta.elIcon),{key:1,class:"el-icon"})):I("",!0)]),_:2},[o.value.meta.title?{name:"title",fn:_(()=>[G(N(o.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):I("",!0)],64)):(u(),k(w,{key:1,index:s(e.item.path),teleported:""},{title:_(()=>{var v,h,y;return[(v=e.item.meta)!=null&&v.svgIcon?(u(),k(p,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(h=e.item.meta)!=null&&h.elIcon?(u(),k(ie(e.item.meta.elIcon),{key:1,class:"el-icon"})):I("",!0),(y=e.item.meta)!=null&&y.title?(u(),E("span",on,N(e.item.meta.title),1)):I("",!0)]}),default:_(()=>[e.item.children?(u(!0),E(U,{key:0},j(l.value,v=>(u(),k(i,{key:v.path,item:v,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":s(v.path)},null,8,["item","is-collapse","base-path"]))),128)):I("",!0)]),_:1},8,["index"]))],2)}}}),an=D(sn,[["__scopeId","data-v-6ae03ba2"]]),ln="/v3-admin-vite/static/logo-WN1ETR0H.png",rn="/v3-admin-vite/static/logo-text-1-h7hJu_cc.png",cn="/v3-admin-vite/static/logo-text-2-lXsH_ESZ.png",un=["src"],dn=["src"],fn=R({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(n){const e=n,{isLeft:t,isTop:l}=ae();return(a,o)=>{const s=g("router-link");return u(),E("div",{class:H(["layout-logo-container",{collapse:e.collapse,"layout-mode-top":f(l)}])},[d(Oe,{name:"layout-logo-fade"},{default:_(()=>[e.collapse?(u(),k(s,{key:"collapse",to:"/"},{default:_(()=>[C("img",{src:f(ln),class:"layout-logo"},null,8,un)]),_:1})):(u(),k(s,{key:"expand",to:"/"},{default:_(()=>[C("img",{src:f(t)?f(rn):f(cn),class:"layout-logo-text"},null,8,dn)]),_:1}))]),_:1})],2)}}}),Ee=D(fn,[["__scopeId","data-v-af87e7f4"]]),ce=n=>{let e="";try{e=getComputedStyle(document.documentElement).getPropertyValue(n)}catch(t){console.error(t)}return e},De=(n,e)=>{try{document.documentElement.style.setProperty(n,e)}catch(t){console.error(t)}},pn=()=>{ut(),location.reload()},mn=R({__name:"index",setup(n){He(b=>({"7b90a116":O.value,"51f4669f":A.value,"0006b177":z.value,ec6d0d42:B.value,"1c74451c":L.value}));const e=ce("--v3-sidebar-menu-bg-color"),t=ce("--v3-sidebar-menu-text-color"),l=ce("--v3-sidebar-menu-active-text-color"),{isMobile:a}=se(),{isLeft:o,isTop:s}=ae(),r=me(),c=oe(),p=Ce(),m=J(),i=M(()=>{const{meta:{activeMenu:b},path:T}=r;return b||T}),w=M(()=>p.routes.filter(b=>{var T;return!((T=b.meta)!=null&&T.hidden)})),v=M(()=>!c.sidebar.opened),h=M(()=>o.value&&m.showLogo),y=M(()=>o.value?e:void 0),x=M(()=>o.value?t:void 0),L=M(()=>o.value?l:void 0),z=M(()=>s.value?"var(--v3-navigationbar-height)":"var(--v3-sidebar-menu-item-height)"),B=M(()=>s.value?"transparent":"var(--v3-sidebar-menu-hover-bg-color)"),O=M(()=>s.value?"0px":"2px"),A=M(()=>s.value?"none":"block");return(b,T)=>{const W=g("el-menu"),S=g("el-scrollbar");return u(),E("div",{class:H({"has-logo":h.value})},[h.value?(u(),k(Ee,{key:0,collapse:v.value},null,8,["collapse"])):I("",!0),d(S,{"wrap-class":"scrollbar-wrapper"},{default:_(()=>[d(W,{"default-active":i.value,collapse:v.value&&!f(s),"background-color":y.value,"text-color":x.value,"active-text-color":L.value,"unique-opened":!0,"collapse-transition":!1,mode:f(s)&&!f(a)?"horizontal":"vertical"},{default:_(()=>[(u(!0),E(U,null,j(w.value,V=>(u(),k(an,{key:V.path,item:V,"base-path":V.path,"is-collapse":v.value,"is-top":f(s)},null,8,["item","base-path","is-collapse","is-top"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1})],2)}}}),$e=D(mn,[["__scopeId","data-v-c09e2cfd"]]),_n={class:"card-header"},vn={class:"card-title"},hn={class:"card-time"},gn={key:0,class:"card-avatar"},bn=["src"],yn={class:"card-body"},wn=R({__name:"NotifyList",props:{list:{}},setup(n){const e=n;return(t,l)=>{const a=g("el-empty"),o=g("el-tag"),s=g("el-card");return e.list.length===0?(u(),k(a,{key:0})):(u(!0),E(U,{key:1},j(e.list,(r,c)=>(u(),k(s,{key:c,shadow:"never",class:"card-container"},{header:_(()=>[C("div",_n,[C("div",null,[C("span",null,[C("span",vn,N(r.title),1),r.extra?(u(),k(o,{key:0,type:r.status,effect:"plain",size:"small"},{default:_(()=>[G(N(r.extra),1)]),_:2},1032,["type"])):I("",!0)]),C("div",hn,N(r.datetime),1)]),r.avatar?(u(),E("div",gn,[C("img",{src:r.avatar,width:"34"},null,8,bn)])):I("",!0)])]),default:_(()=>[C("div",yn,N(r.description??"No Data"),1)]),_:2},1024))),128))}}}),Sn=D(wn,[["__scopeId","data-v-137655f9"]]),kn=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin Vite 上线啦",datetime:"一年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"两年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],xn=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],Cn=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:"primary"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],Tn={class:"notify"},En={class:"notify-history"},Pe=99,$n=350,Vn=R({__name:"index",setup(n){const e=M(()=>l.value.reduce((o,s)=>o+s.list.length,0)),t=P("通知"),l=P([{name:"通知",type:"primary",list:kn},{name:"消息",type:"danger",list:xn},{name:"待办",type:"warning",list:Cn}]),a=()=>{fe.success(`跳转到${t.value}历史页面`)};return(o,s)=>{const r=g("el-icon"),c=g("el-tooltip"),p=g("el-badge"),m=g("el-scrollbar"),i=g("el-tab-pane"),w=g("el-tabs"),v=g("el-button"),h=g("el-popover");return u(),E("div",Tn,[d(h,{placement:"bottom",width:$n,trigger:"click"},{reference:_(()=>[d(p,{value:e.value,max:Pe,hidden:e.value===0},{default:_(()=>[d(c,{effect:"dark",content:"消息通知",placement:"bottom"},{default:_(()=>[d(r,{size:20},{default:_(()=>[d(f(vt))]),_:1})]),_:1})]),_:1},8,["value","hidden"])]),default:_(()=>[d(w,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=y=>t.value=y),class:"demo-tabs",stretch:""},{default:_(()=>[(u(!0),E(U,null,j(l.value,(y,x)=>(u(),k(i,{name:y.name,key:x},{label:_(()=>[G(N(y.name)+" ",1),d(p,{value:y.list.length,max:Pe,type:y.type},null,8,["value","type"])]),default:_(()=>[d(m,{height:"400px"},{default:_(()=>[d(Sn,{list:y.list},null,8,["list"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),C("div",En,[d(v,{link:"",onClick:a},{default:_(()=>[G("查看"+N(t.value)+"历史",1)]),_:1})])]),_:1})])}}}),Mn=D(Vn,[["__scopeId","data-v-50089150"]]),Fe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Z=(()=>{if(typeof document>"u")return!1;const n=Fe[0],e={};for(const t of Fe)if((t==null?void 0:t[1])in document){for(const[a,o]of t.entries())e[n[a]]=o;return e}return!1})(),Ne={change:Z.fullscreenchange,error:Z.fullscreenerror};let q={request(n=document.documentElement,e){return new Promise((t,l)=>{const a=()=>{q.off("change",a),t()};q.on("change",a);const o=n[Z.requestFullscreen](e);o instanceof Promise&&o.then(a).catch(l)})},exit(){return new Promise((n,e)=>{if(!q.isFullscreen){n();return}const t=()=>{q.off("change",t),n()};q.on("change",t);const l=document[Z.exitFullscreen]();l instanceof Promise&&l.then(t).catch(e)})},toggle(n,e){return q.isFullscreen?q.exit():q.request(n,e)},onchange(n){q.on("change",n)},onerror(n){q.on("error",n)},on(n,e){const t=Ne[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=Ne[n];t&&document.removeEventListener(t,e,!1)},raw:Z};Object.defineProperties(q,{isFullscreen:{get:()=>!!document[Z.fullscreenElement]},element:{enumerable:!0,get:()=>document[Z.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[Z.fullscreenEnabled]}});Z||(q={isEnabled:!1});const Q=q,An=R({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(n){const e=n,t=P(!1),l=M(()=>t.value?e.exitTips:e.openTips),a=M(()=>t.value?"fullscreen-exit":"fullscreen"),o=()=>{const i=document.querySelector(e.element)||void 0;Q.isEnabled?Q.toggle(i):fe.warning("您的浏览器无法工作")},s=()=>{t.value=Q.isFullscreen};de(i=>{Q.on("change",s),i(()=>{Q.isEnabled&&Q.off("change",s)})});const r=P(!1),c=M(()=>r.value?"内容区复原":"内容区放大"),p=M(()=>r.value?"fullscreen-exit":"fullscreen"),m=()=>{document.body.className=r.value?"":"content-large",r.value=!r.value};return(i,w)=>{const v=g("SvgIcon"),h=g("el-tooltip"),y=g("el-dropdown-item"),x=g("el-dropdown-menu"),L=g("el-dropdown");return u(),E("div",null,[i.content?(u(),k(L,{key:1},{dropdown:_(()=>[d(x,null,{default:_(()=>[d(y,{onClick:m},{default:_(()=>[G(N(c.value),1)]),_:1}),d(y,{onClick:o,disabled:t.value},{default:_(()=>[G("内容区全屏")]),_:1},8,["disabled"])]),_:1})]),default:_(()=>[d(v,{name:p.value},null,8,["name"])]),_:1})):(u(),k(h,{key:0,effect:"dark",content:l.value,placement:"bottom"},{default:_(()=>[d(v,{name:a.value,onClick:o},null,8,["name"])]),_:1},8,["content"]))])}}}),Ye=D(An,[["__scopeId","data-v-9e7c36e4"]]),In=["onMouseenter"],Ln={class:"result-item-title"},Rn=R({__name:"SearchResult",props:st({list:{},isPressUpOrDown:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n,{expose:e}){const t=qe(n,"modelValue"),l=n,a=Ue(),o=P(0),s=m=>{const i=m.name===t.value;return{background:i?"var(--el-color-primary)":"",color:i?"#fff":""}},r=m=>{l.isPressUpOrDown||(t.value=m.name)},c=()=>{o.value=Number((window.innerHeight*.4).toFixed(1))},p=m=>{var h;const i=(h=a==null?void 0:a.proxy)==null?void 0:h.$refs[`resultItemRef${m}`];if(!i)return 0;const v=i[0].offsetTop+128;return v>o.value?v-o.value:0};return Be(()=>{window.addEventListener("resize",c)}),Se(()=>{c()}),We(()=>{window.removeEventListener("resize",c)}),e({getScrollTop:p}),(m,i)=>{const w=g("SvgIcon");return u(),E("div",null,[(u(!0),E(U,null,j(m.list,(v,h)=>{var y,x,L;return u(),E("div",{key:h,ref_for:!0,ref:`resultItemRef${h}`,class:"result-item",style:Xe(s(v)),onMouseenter:z=>r(v)},[(y=v.meta)!=null&&y.svgIcon?(u(),k(w,{key:0,name:v.meta.svgIcon},null,8,["name"])):(x=v.meta)!=null&&x.elIcon?(u(),k(ie(v.meta.elIcon),{key:1,class:"el-icon"})):I("",!0),C("span",Ln,N((L=v.meta)==null?void 0:L.title),1),t.value&&t.value===v.name?(u(),k(w,{key:2,name:"keyboard-enter"})):I("",!0)],44,In)}),128))])}}}),Dn=D(Rn,[["__scopeId","data-v-aeacf5ae"]]),Ve=n=>(ke("data-v-8dce46e8"),n=n(),xe(),n),Pn={class:"search-footer"},Fn={class:"search-footer-item"},Nn=Ve(()=>C("span",null,"确认",-1)),zn={class:"search-footer-item"},Bn=Ve(()=>C("span",null,"切换",-1)),Wn={class:"search-footer-item"},On=Ve(()=>C("span",null,"关闭",-1)),Hn={class:"search-footer-total"},qn=R({__name:"SearchFooter",props:{total:{}},setup(n){const e=n,{isMobile:t}=se();return(l,a)=>{const o=g("SvgIcon");return u(),E("div",Pn,[f(t)?I("",!0):(u(),E(U,{key:0},[C("span",Fn,[d(o,{name:"keyboard-enter"}),Nn]),C("span",zn,[d(o,{name:"keyboard-up"}),d(o,{name:"keyboard-down"}),Bn]),C("span",Wn,[d(o,{name:"keyboard-esc"}),On])],64)),C("span",Hn,"共 "+N(e.total)+" 项",1)])}}}),Un=D(qn,[["__scopeId","data-v-8dce46e8"]]),Xn=C("p",null,"搜索结果",-1),Kn=R({__name:"SearchModal",props:{modelValue:{type:Boolean,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(n){const e=qe(n,"modelValue"),t=_e(),{isMobile:l}=se(),a=P(null),o=P(null),s=P(null),r=P(""),c=at([]),p=P(void 0),m=P(!1),i=M(()=>l.value?"80vw":"40vw"),w=M(()=>ht(Ce().routes)),v=gt(()=>{var T;const A=h(w.value);c.value=A.filter(W=>{var S,V;return r.value?(V=(S=W.meta)==null?void 0:S.title)==null?void 0:V.toLocaleLowerCase().includes(r.value.toLocaleLowerCase().trim()):!1});const b=(T=c.value)==null?void 0:T.length;p.value=b>0?c.value[0].name:void 0},500),h=(A,b=[])=>(A.forEach(T=>{b.push(T),T.children&&h(T.children,b)}),b),y=()=>{e.value=!1,setTimeout(()=>{r.value="",c.value=[]},200)},x=A=>{var T;if(!s.value)return;const b=s.value.getScrollTop(A);(T=o.value)==null||T.setScrollTop(b)},L=()=>{m.value=!0;const{length:A}=c.value;if(A===0)return;const b=c.value.findIndex(T=>T.name===p.value);if(b===0){const T=c.value[A-1].name;p.value===T&&A>1?(p.value=c.value[A-2].name,x(A-2)):(p.value=T,x(A-1))}else p.value=c.value[b-1].name,x(b-1)},z=()=>{m.value=!0;const{length:A}=c.value;if(A===0)return;const b=c.value.map(T=>T.name).lastIndexOf(p.value);if(b===A-1){const T=c.value[0].name;p.value===T&&A>1?(p.value=c.value[1].name,x(1)):(p.value=T,x(0))}else p.value=c.value[b+1].name,x(b+1)},B=()=>{var W;const{length:A}=c.value;if(A===0)return;const b=p.value,T=(W=c.value.find(S=>S.name===b))==null?void 0:W.path;if(T&&pe(T)){window.open(T,"_blank","noopener, noreferrer");return}if(!b){fe.warning("无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name");return}try{t.push({name:b})}catch{fe.error("该菜单有必填的动态参数，无法通过搜索进入");return}y()},O=()=>{m.value=!1};return(A,b)=>{const T=g("SvgIcon"),W=g("el-input"),S=g("el-empty"),V=g("el-dialog");return u(),k(V,{modelValue:e.value,"onUpdate:modelValue":b[2]||(b[2]=F=>e.value=F),onOpened:b[3]||(b[3]=F=>{var $;return($=a.value)==null?void 0:$.focus()}),onClosed:b[4]||(b[4]=F=>{var $;return($=a.value)==null?void 0:$.blur()}),onKeydown:[le(L,["up"]),le(z,["down"]),le(B,["enter"])],onKeyup:le(O,["up","down"]),"before-close":y,width:i.value,top:"5vh",class:"search-modal__private","append-to-body":""},{footer:_(()=>[d(Un,{total:c.value.length},null,8,["total"])]),default:_(()=>[d(W,{ref_key:"inputRef",ref:a,modelValue:r.value,"onUpdate:modelValue":b[0]||(b[0]=F=>r.value=F),onInput:f(v),placeholder:"搜索菜单",size:"large",clearable:""},{prefix:_(()=>[d(T,{name:"search"})]),_:1},8,["modelValue","onInput"]),c.value.length===0?(u(),k(S,{key:0,description:"暂无搜索结果","image-size":100})):(u(),E(U,{key:1},[Xn,d(f(Je),{ref_key:"scrollbarRef",ref:o,"max-height":"40vh",always:""},{default:_(()=>[d(Dn,{ref_key:"searchResultRef",ref:s,modelValue:p.value,"onUpdate:modelValue":b[1]||(b[1]=F=>p.value=F),list:c.value,isPressUpOrDown:m.value,onClick:B},null,8,["modelValue","list","isPressUpOrDown"])]),_:1},512)],64))]),_:1},8,["modelValue","width"])}}}),Gn=R({__name:"index",setup(n){const e=P(!1),t=()=>{e.value=!0};return(l,a)=>{const o=g("SvgIcon"),s=g("el-tooltip");return u(),E("div",null,[d(s,{effect:"dark",content:"搜索菜单",placement:"bottom"},{default:_(()=>[d(o,{name:"search",onClick:t})]),_:1}),d(Kn,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r)},null,8,["modelValue"])])}}}),Jn=D(Gn,[["__scopeId","data-v-dc5accb4"]]),Zn=n=>(ke("data-v-4fbdf0bd"),n=n(),xe(),n),jn={class:"navigation-bar"},Yn={class:"right-menu"},Qn={class:"right-menu-avatar"},eo={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},to={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},no=Zn(()=>C("span",{style:{display:"block"}},"退出登录",-1)),oo=R({__name:"index",setup(n){const{isMobile:e}=se(),{isTop:t}=ae(),l=_e(),a=oe(),o=dt(),s=J(),{showNotify:r,showThemeSwitch:c,showScreenfull:p,showSearchMenu:m}=ne(s),i=()=>{a.toggleSidebar(!1)},w=()=>{o.logout(),l.push("/login")};return(v,h)=>{const y=g("el-avatar"),x=g("el-dropdown-item"),L=g("el-dropdown-menu"),z=g("el-dropdown");return u(),E("div",jn,[!f(t)||f(e)?(u(),k(Ot,{key:0,"is-active":f(a).sidebar.opened,class:"hamburger",onToggleClick:i},null,8,["is-active"])):I("",!0),!f(t)||f(e)?(u(),k(Yt,{key:1,class:"breadcrumb"})):I("",!0),f(t)&&!f(e)?(u(),k($e,{key:2,class:"sidebar"})):I("",!0),C("div",Yn,[f(m)?(u(),k(Jn,{key:0,class:"right-menu-item"})):I("",!0),f(p)?(u(),k(Ye,{key:1,class:"right-menu-item"})):I("",!0),f(c)?(u(),k(Ct,{key:2,class:"right-menu-item"})):I("",!0),f(r)?(u(),k(Mn,{key:3,class:"right-menu-item"})):I("",!0),d(z,{class:"right-menu-item"},{dropdown:_(()=>[d(L,null,{default:_(()=>[C("a",eo,[d(x,null,{default:_(()=>[G("GitHub")]),_:1})]),C("a",to,[d(x,null,{default:_(()=>[G("Gitee")]),_:1})]),d(x,{divided:"",onClick:w},{default:_(()=>[no]),_:1})]),_:1})]),default:_(()=>[C("div",Qn,[d(y,{icon:f(bt),size:30},null,8,["icon"]),C("span",null,N(f(o).username),1)])]),_:1})])])}}}),Me=D(oo,[["__scopeId","data-v-4fbdf0bd"]]),so={class:"select-layout-mode"},ao=R({__name:"SelectLayoutMode",setup(n){const{isLeft:e,isTop:t,isLeftTop:l,setLayoutMode:a}=ae();return(o,s)=>{const r=g("el-aside"),c=g("el-header"),p=g("el-main"),m=g("el-container"),i=g("el-tooltip");return u(),E("div",so,[d(i,{content:"左侧模式"},{default:_(()=>[d(m,{class:H(["layout-mode left",{active:f(e)}]),onClick:s[0]||(s[0]=w=>f(a)(f(ee).Left))},{default:_(()=>[d(r),d(m,null,{default:_(()=>[d(c),d(p)]),_:1})]),_:1},8,["class"])]),_:1}),d(i,{content:"顶部模式"},{default:_(()=>[d(m,{class:H(["layout-mode top",{active:f(t)}]),onClick:s[1]||(s[1]=w=>f(a)(f(ee).Top))},{default:_(()=>[d(c),d(p)]),_:1},8,["class"])]),_:1}),d(i,{content:"混合模式"},{default:_(()=>[d(m,{class:H(["layout-mode left-top",{active:f(l)}]),onClick:s[2]||(s[2]=w=>f(a)(f(ee).LeftTop))},{default:_(()=>[d(c),d(m,null,{default:_(()=>[d(r),d(p)]),_:1})]),_:1},8,["class"])]),_:1})])}}}),lo=D(ao,[["__scopeId","data-v-91891c4b"]]),Qe=n=>(ke("data-v-f5dfaf42"),n=n(),xe(),n),ro={class:"setting-container"},co=Qe(()=>C("h4",null,"布局配置",-1)),io=Qe(()=>C("h4",null,"功能配置",-1)),uo={class:"setting-name"},fo=R({__name:"index",setup(n){const{isLeft:e}=ae(),t=J(),{showTagsView:l,showLogo:a,fixedHeader:o,showFooter:s,showNotify:r,showThemeSwitch:c,showScreenfull:p,showSearchMenu:m,cacheTagsView:i,showWatermark:w,showGreyMode:v,showColorWeakness:h}=ne(t),y={显示标签栏:l,"显示 Logo":a,"固定 Header":o,"显示页脚 Footer":s,显示消息通知:r,显示切换主题按钮:c,显示全屏按钮:p,显示搜索按钮:m,是否缓存标签栏:i,开启系统水印:w,显示灰色模式:v,显示色弱模式:h};return de(()=>{e.value&&(o.value=!0)}),(x,L)=>{const z=g("el-divider"),B=g("el-switch"),O=g("el-button");return u(),E("div",ro,[co,d(lo),d(z),io,(u(),E(U,null,j(y,(A,b,T)=>C("div",{class:"setting-item",key:T},[C("span",uo,N(b),1),d(B,{modelValue:A.value,"onUpdate:modelValue":W=>A.value=W,disabled:!f(e)&&b==="固定 Header"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),64)),d(O,{type:"danger",icon:f(yt),onClick:f(pn)},{default:_(()=>[G("重 置")]),_:1},8,["icon","onClick"])])}}}),po=D(fo,[["__scopeId","data-v-f5dfaf42"]]),mo={class:"scroll-container"},_o=200,vo=R({__name:"ScrollPane",props:{tagRefs:{}},setup(n){const e=n,t=me(),l=J(),{listenerRouteChange:a}=ge(),o=P(),s=P();let r=0;const c=({scrollLeft:v})=>{r=v},p=({deltaY:v})=>{/^-/.test(v.toString())?i("left"):i("right")},m=()=>{const v=s.value.clientWidth,h=o.value.wrapRef.clientWidth,y=v-h-r;return{scrollbarContentRefWidth:v,scrollbarRefWidth:h,lastDistance:y}},i=(v,h=_o)=>{let y=0;const{scrollbarContentRefWidth:x,scrollbarRefWidth:L,lastDistance:z}=m();L>x||(v==="left"?y=Math.max(0,r-h):y=Math.min(r+h,r+z),o.value.setScrollLeft(y))},w=()=>{const v=e.tagRefs;for(let h=0;h<v.length;h++)if(t.path===v[h].$props.to.path){const y=v[h].$el,x=y.offsetWidth,L=y.offsetLeft,{scrollbarRefWidth:z}=m();if(L<r){const O=r-L;i("left",O);return}const B=z+r-x;if(L>B){const O=L-B;i("right",O);return}}};return a(()=>{lt(w)}),(v,h)=>{const y=g("el-icon");return u(),E("div",mo,[d(y,{class:"arrow left",onClick:h[0]||(h[0]=x=>i("left"))},{default:_(()=>[d(f(wt))]),_:1}),d(f(Je),{ref_key:"scrollbarRef",ref:o,onWheelPassive:p,onScroll:c},{default:_(()=>[C("div",{ref_key:"scrollbarContentRef",ref:s,class:"scrollbar-content"},[ue(v.$slots,"default",{},void 0,!0)],512)]),_:3},512),d(y,{class:"arrow right",onClick:h[1]||(h[1]=x=>i("right"))},{default:_(()=>[d(f(St))]),_:1}),f(l).showScreenfull?(u(),k(Ye,{key:0,element:".app-main",content:!0,class:"screenfull"})):I("",!0)])}}}),ho=D(vo,[["__scopeId","data-v-519b3baa"]]),go={class:"tags-view-container"},bo=R({__name:"index",setup(n){const e=Ue(),t=_e(),l=me(),a=Ge(),o=Ce(),{listenerRouteChange:s}=ge(),r=P([]),c=P(!1),p=P(0),m=P(0),i=P({});let w=[];const v=S=>S.path===l.path,h=S=>{var V;return(V=S.meta)==null?void 0:V.affix},y=(S,V="/")=>{const F=[];return S.forEach($=>{if(h($)){const X=je.resolve(V,$.path);F.push({fullPath:X,path:X,name:$.name,meta:{...$.meta}})}if($.children){const X=y($.children,$.path);F.push(...X)}}),F},x=()=>{w=y(o.routes);for(const S of w)S.name&&a.addVisitedView(S)},L=S=>{S.name&&(a.addVisitedView(S),a.addCachedView(S))},z=S=>{a.delCachedView(S),t.replace({path:"/redirect"+S.path,query:S.query})},B=S=>{a.delVisitedView(S),a.delCachedView(S),v(S)&&b(a.visitedViews,S)},O=()=>{const S=i.value.fullPath;S!==l.path&&S!==void 0&&t.push(S),a.delOthersVisitedViews(i.value),a.delOthersCachedViews(i.value)},A=S=>{a.delAllVisitedViews(),a.delAllCachedViews(),!w.some(V=>V.path===l.path)&&b(a.visitedViews,S)},b=(S,V)=>{const F=S.slice(-1)[0],$=F==null?void 0:F.fullPath;$!==void 0?t.push($):V.name==="Dashboard"?t.push({path:"/redirect"+V.path,query:V.query}):t.push("/")},T=(S,V)=>{const $=e.proxy.$el.getBoundingClientRect().left,ye=e.proxy.$el.offsetWidth-105,Ie=V.clientX-$+15;m.value=Ie>ye?ye:Ie,p.value=V.clientY,c.value=!0,i.value=S},W=()=>{c.value=!1};return ze(c,S=>{S?document.body.addEventListener("click",W):document.body.removeEventListener("click",W)}),Se(()=>{x(),s(async S=>{L(S)},!0)}),(S,V)=>{const F=g("el-icon");return u(),E("div",go,[d(ho,{class:"tags-view-wrapper","tag-refs":r.value},{default:_(()=>[(u(!0),E(U,null,j(f(a).visitedViews,$=>(u(),k(f(rt),{ref_for:!0,ref_key:"tagRefs",ref:r,key:$.path,class:H([{active:v($)},"tags-view-item"]),to:{path:$.path,query:$.query},onMouseup:re(X=>!h($)&&B($),["middle"]),onContextmenu:re(X=>T($,X),["prevent"])},{default:_(()=>{var X;return[G(N((X=$.meta)==null?void 0:X.title)+" ",1),h($)?I("",!0):(u(),k(F,{key:0,size:12,onClick:re(ye=>B($),["prevent","stop"])},{default:_(()=>[d(f(kt))]),_:2},1032,["onClick"]))]}),_:2},1032,["class","to","onMouseup","onContextmenu"]))),128))]),_:1},8,["tag-refs"]),ve(C("ul",{class:"contextmenu",style:Xe({left:m.value+"px",top:p.value+"px"})},[C("li",{onClick:V[0]||(V[0]=$=>z(i.value))},"刷新"),h(i.value)?I("",!0):(u(),E("li",{key:0,onClick:V[1]||(V[1]=$=>B(i.value))},"关闭")),C("li",{onClick:O},"关闭其它"),C("li",{onClick:V[2]||(V[2]=$=>A(i.value))},"关闭所有")],4),[[he,c.value]])])}}}),Ae=D(bo,[["__scopeId","data-v-3bc82890"]]),yo=R({__name:"index",props:{buttonTop:{default:350}},setup(n){He(a=>({eee8c778:t}));const t=n.buttonTop+"px",l=P(!1);return(a,o)=>{const s=g("el-icon"),r=g("el-drawer");return u(),E(U,null,[C("div",{class:"handle-button",onClick:o[0]||(o[0]=c=>l.value=!0)},[d(s,{size:24},{default:_(()=>[d(f(xt))]),_:1})]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=c=>l.value=c),size:"300px","with-header":!1},{default:_(()=>[ue(a.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue"])],64)}}}),wo=D(yo,[["__scopeId","data-v-ec8bae57"]]),So=R({__name:"LeftMode",setup(n){const{isMobile:e}=se(),t=oe(),l=J(),{showTagsView:a,fixedHeader:o}=ne(l),s=M(()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:e.value})),r=()=>{t.closeSidebar(!1)};return(c,p)=>(u(),E("div",{class:H([s.value,"app-wrapper"])},[s.value.mobile&&s.value.openSidebar?(u(),E("div",{key:0,class:"drawer-bg",onClick:r})):I("",!0),d(f($e),{class:"sidebar-container"}),C("div",{class:H([{hasTagsView:f(a)},"main-container"])},[C("div",{class:H([{"fixed-header":f(o)},"layout-header"])},[d(f(Me)),ve(d(f(Ae),null,null,512),[[he,f(a)]])],2),d(f(Te),{class:"app-main"})],2)],2))}}),ko=D(So,[["__scopeId","data-v-0f6725ea"]]),xo={class:"app-wrapper"},Co={class:"fixed-header layout-header"},To={class:"content"},Eo=R({__name:"TopMode",setup(n){const e=J(),{showTagsView:t,showLogo:l}=ne(e);return(a,o)=>(u(),E("div",xo,[C("div",Co,[C("div",To,[f(l)?(u(),k(f(Ee),{key:0,collapse:!1,class:"logo"})):I("",!0),d(f(Me),{class:"navigation-bar"})]),ve(d(f(Ae),null,null,512),[[he,f(t)]])]),C("div",{class:H([{hasTagsView:f(t)},"main-container"])},[d(f(Te),{class:"app-main"})],2)]))}}),$o=D(Eo,[["__scopeId","data-v-2c80335d"]]),Vo={class:"fixed-header layout-header"},Mo={class:"content"},Ao=R({__name:"LeftTopMode",setup(n){const e=oe(),t=J(),{showTagsView:l,showLogo:a}=ne(t),o=M(()=>({hideSidebar:!e.sidebar.opened}));return(s,r)=>(u(),E("div",{class:H([o.value,"app-wrapper"])},[C("div",Vo,[f(a)?(u(),k(f(Ee),{key:0,collapse:!1,class:"logo"})):I("",!0),C("div",Mo,[d(f(Me)),ve(d(f(Ae),null,null,512),[[he,f(l)]])])]),C("div",{class:H([{hasTagsView:f(l)},"main-container"])},[d(f($e),{class:"sidebar-container"}),d(f(Te),{class:"app-main"})],2)],2))}}),Io=D(Ao,[["__scopeId","data-v-24f2539e"]]),we="--v3-tagsview-height",Lo=R({__name:"index",setup(n){$t();const{setWatermark:e,clearWatermark:t}=ft(),{isMobile:l}=se(),{isLeft:a,isTop:o,isLeftTop:s}=ae(),r=J(),{showSettings:c,showTagsView:p,showWatermark:m,showGreyMode:i,showColorWeakness:w}=ne(r),v=M(()=>({showGreyMode:i.value,showColorWeakness:w.value})),h=ce(we);return de(()=>{p.value?De(we,h):De(we,"0px")}),de(()=>{m.value?e("V3 Admin Vite"):t()}),(y,x)=>(u(),E("div",{class:H(v.value)},[f(a)||f(l)?(u(),k(ko,{key:0})):f(o)?(u(),k($o,{key:1})):f(s)?(u(),k(Io,{key:2})):I("",!0),f(c)?(u(),k(f(wo),{key:3},{default:_(()=>[d(f(po))]),_:1})):I("",!0)],2))}}),Bo=D(Lo,[["__scopeId","data-v-f8f963f5"]]);export{Bo as default};
