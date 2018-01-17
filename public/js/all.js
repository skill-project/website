/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*! jQuery UI - v1.11.1 - 2014-09-19
* http://jqueryui.com
* Includes: core.js, effect.js, effect-slide.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s="ui-effects-",n=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(n),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,n,o={};for(s in i)n=i[s],t[s]!==n&&(a[s]||(e.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var s=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(n.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.1",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(s+t[i],e[0].style[t[i]])},restore:function(e,t){var i,n;for(n=0;t.length>n;n++)null!==t[n]&&(i=e.data(s+t[n]),void 0===i&&(i=""),e.css(t[n],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})}});
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */

jQuery.extend({
    highlight: function (node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.match(re);
            if (match) {
                var highlight = document.createElement(nodeName || 'span');
                highlight.className = className || 'highlight';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlight.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlight, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
                !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
                !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

jQuery.fn.unhighlight = function (options) {
    var settings = { className: 'highlight', element: 'span' };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlight = function (words, options) {
    var settings = { className: 'highlight', element: 'span', caseSensitive: false, wordsOnly: false };
    jQuery.extend(settings, options);
    
    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function(word, i){
      return word != '';
    });
    words = jQuery.map(words, function(word, i) {
      return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) { return this; };

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "\\b" + pattern + "\\b";
    }
    var re = new RegExp(pattern, flag);
    
    return this.each(function () {
        jQuery.highlight(this, re, settings.element, settings.className);
    });
};


/*
 * SimpleModal 1.4.4 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2013 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sun, Jan 20 2013 15:58:56 -0800
 */

/**
 * SimpleModal is a lightweight jQuery plugin that provides a simple
 * interface to create a modal dialog.
 *
 * The goal of SimpleModal is to provide developers with a cross-browser
 * overlay and container that will be populated with data provided to
 * SimpleModal.
 *
 * There are two ways to call SimpleModal:
 * 1) As a chained function on a jQuery object, like $('#myDiv').modal();.
 * This call would place the DOM object, #myDiv, inside a modal dialog.
 * Chaining requires a jQuery object. An optional options object can be
 * passed as a parameter.
 *
 * @example $('<div>my data</div>').modal({options});
 * @example $('#myDiv').modal({options});
 * @example jQueryObject.modal({options});
 *
 * 2) As a stand-alone function, like $.modal(data). The data parameter
 * is required and an optional options object can be passed as a second
 * parameter. This method provides more flexibility in the types of data
 * that are allowed. The data could be a DOM object, a jQuery object, HTML
 * or a string.
 *
 * @example $.modal('<div>my data</div>', {options});
 * @example $.modal('my data', {options});
 * @example $.modal($('#myDiv'), {options});
 * @example $.modal(jQueryObject, {options});
 * @example $.modal(document.getElementById('myDiv'), {options});
 *
 * A SimpleModal call can contain multiple elements, but only one modal
 * dialog can be created at a time. Which means that all of the matched
 * elements will be displayed within the modal container.
 *
 * SimpleModal internally sets the CSS needed to display the modal dialog
 * properly in all browsers, yet provides the developer with the flexibility
 * to easily control the look and feel. The styling for SimpleModal can be
 * done through external stylesheets, or through SimpleModal, using the
 * overlayCss, containerCss, and dataCss options.
 *
 * SimpleModal has been tested in the following browsers:
 * - IE 6+
 * - Firefox 2+
 * - Opera 9+
 * - Safari 3+
 * - Chrome 1+
 *
 * @name SimpleModal
 * @type jQuery
 * @requires jQuery v1.3
 * @cat Plugins/Windows and Overlays
 * @author Eric Martin (http://ericmmartin.com)
 * @version 1.4.4
 */

;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
}
(function ($) {
	var d = [],
		doc = $(document),
		ua = navigator.userAgent.toLowerCase(),
		wndw = $(window),
		w = [];

	var browser = {
		ieQuirks: null,
		msie: /msie/.test(ua) && !/opera/.test(ua),
		opera: /opera/.test(ua)
	};
	browser.ie6 = browser.msie && /msie 6./.test(ua) && typeof window['XMLHttpRequest'] !== 'object';
	browser.ie7 = browser.msie && /msie 7.0/.test(ua);

	/*
	 * Create and display a modal dialog.
	 *
	 * @param {string, object} data A string, jQuery object or DOM object
	 * @param {object} [options] An optional object containing options overrides
	 */
	$.modal = function (data, options) {
		return $.modal.impl.init(data, options);
	};

	/*
	 * Close the modal dialog.
	 */
	$.modal.close = function () {
		$.modal.impl.close();
	};

	/*
	 * Set focus on first or last visible input in the modal dialog. To focus on the last
	 * element, call $.modal.focus('last'). If no input elements are found, focus is placed
	 * on the data wrapper element.
	 */
	$.modal.focus = function (pos) {
		$.modal.impl.focus(pos);
	};

	/*
	 * Determine and set the dimensions of the modal dialog container.
	 * setPosition() is called if the autoPosition option is true.
	 */
	$.modal.setContainerDimensions = function () {
		$.modal.impl.setContainerDimensions();
	};

	/*
	 * Re-position the modal dialog.
	 */
	$.modal.setPosition = function () {
		$.modal.impl.setPosition();
	};

	/*
	 * Update the modal dialog. If new dimensions are passed, they will be used to determine
	 * the dimensions of the container.
	 *
	 * setContainerDimensions() is called, which in turn calls setPosition(), if enabled.
	 * Lastly, focus() is called is the focus option is true.
	 */
	$.modal.update = function (height, width) {
		$.modal.impl.update(height, width);
	};

	/*
	 * Chained function to create a modal dialog.
	 *
	 * @param {object} [options] An optional object containing options overrides
	 */
	$.fn.modal = function (options) {
		return $.modal.impl.init(this, options);
	};

	/*
	 * SimpleModal default options
	 *
	 * appendTo:		(String:'body') The jQuery selector to append the elements to. For .NET, use 'form'.
	 * focus:			(Boolean:true) Focus in the first visible, enabled element?
	 * opacity:			(Number:50) The opacity value for the overlay div, from 0 - 100
	 * overlayId:		(String:'simplemodal-overlay') The DOM element id for the overlay div
	 * overlayCss:		(Object:{}) The CSS styling for the overlay div
	 * containerId:		(String:'simplemodal-container') The DOM element id for the container div
	 * containerCss:	(Object:{}) The CSS styling for the container div
	 * dataId:			(String:'simplemodal-data') The DOM element id for the data div
	 * dataCss:			(Object:{}) The CSS styling for the data div
	 * minHeight:		(Number:null) The minimum height for the container
	 * minWidth:		(Number:null) The minimum width for the container
	 * maxHeight:		(Number:null) The maximum height for the container. If not specified, the window height is used.
	 * maxWidth:		(Number:null) The maximum width for the container. If not specified, the window width is used.
	 * autoResize:		(Boolean:false) Automatically resize the container if it exceeds the browser window dimensions?
	 * autoPosition:	(Boolean:true) Automatically position the container upon creation and on window resize?
	 * zIndex:			(Number: 1000) Starting z-index value
	 * close:			(Boolean:true) If true, closeHTML, escClose and overClose will be used if set.
	 							If false, none of them will be used.
	 * closeHTML:		(String:'<a class="modalCloseImg" title="Close"></a>') The HTML for the default close link.
								SimpleModal will automatically add the closeClass to this element.
	 * closeClass:		(String:'simplemodal-close') The CSS class used to bind to the close event
	 * escClose:		(Boolean:true) Allow Esc keypress to close the dialog?
	 * overlayClose:	(Boolean:false) Allow click on overlay to close the dialog?
	 * fixed:			(Boolean:true) If true, the container will use a fixed position. If false, it will use a
								absolute position (the dialog will scroll with the page)
	 * position:		(Array:null) Position of container [top, left]. Can be number of pixels or percentage
	 * persist:			(Boolean:false) Persist the data across modal calls? Only used for existing
								DOM elements. If true, the data will be maintained across modal calls, if false,
								the data will be reverted to its original state.
	 * modal:			(Boolean:true) User will be unable to interact with the page below the modal or tab away from the dialog.
								If false, the overlay, iframe, and certain events will be disabled allowing the user to interact
								with the page below the dialog.
	 * onOpen:			(Function:null) The callback function used in place of SimpleModal's open
	 * onShow:			(Function:null) The callback function used after the modal dialog has opened
	 * onClose:			(Function:null) The callback function used in place of SimpleModal's close
	 */
	$.modal.defaults = {
		appendTo: 'body',
		focus: true,
		opacity: 50,
		overlayId: 'simplemodal-overlay',
		overlayCss: {},
		containerId: 'simplemodal-container',
		containerCss: {},
		dataId: 'simplemodal-data',
		dataCss: {},
		minHeight: null,
		minWidth: null,
		maxHeight: null,
		maxWidth: null,
		autoResize: false,
		autoPosition: true,
		zIndex: 1000,
		close: true,
		closeHTML: '<a class="modalCloseImg" title="Close"></a>',
		closeClass: 'simplemodal-close',
		escClose: true,
		overlayClose: false,
		fixed: true,
		position: null,
		persist: false,
		modal: true,
		onOpen: null,
		onShow: null,
		onClose: null
	};

	/*
	 * Main modal object
	 * o = options
	 */
	$.modal.impl = {
		/*
		 * Contains the modal dialog elements and is the object passed
		 * back to the callback (onOpen, onShow, onClose) functions
		 */
		d: {},
		/*
		 * Initialize the modal dialog
		 */
		init: function (data, options) {
			var s = this;

			// don't allow multiple calls
			if (s.d.data) {
				return false;
			}

			// $.support.boxModel is undefined if checked earlier
			browser.ieQuirks = browser.msie && (document.compatMode === "BackCompat");

			// merge defaults and user options
			s.o = $.extend({}, $.modal.defaults, options);

			// keep track of z-index
			s.zIndex = s.o.zIndex;

			// set the onClose callback flag
			s.occb = false;

			// determine how to handle the data based on its type
			if (typeof data === 'object') {
				// convert DOM object to a jQuery object
				data = data instanceof $ ? data : $(data);
				s.d.placeholder = false;

				// if the object came from the DOM, keep track of its parent
				if (data.parent().parent().size() > 0) {
					data.before($('<span></span>')
						.attr('id', 'simplemodal-placeholder')
						.css({display: 'none'}));

					s.d.placeholder = true;
					s.display = data.css('display');

					// persist changes? if not, make a clone of the element
					if (!s.o.persist) {
						s.d.orig = data.clone(true);
					}
				}
			}
			else if (typeof data === 'string' || typeof data === 'number') {
				// just insert the data as innerHTML
				data = $('<div></div>').html(data);
			}
			else {
				// unsupported data type!
				alert('SimpleModal Error: Unsupported data type: ' + typeof data);
				return s;
			}

			// create the modal overlay, container and, if necessary, iframe
			s.create(data);
			data = null;

			// display the modal dialog
			s.open();

			// useful for adding events/manipulating data in the modal dialog
			if ($.isFunction(s.o.onShow)) {
				s.o.onShow.apply(s, [s.d]);
			}

			// don't break the chain =)
			return s;
		},
		/*
		 * Create and add the modal overlay and container to the page
		 */
		create: function (data) {
			var s = this;

			// get the window properties
			s.getDimensions();

			// add an iframe to prevent select options from bleeding through
			if (s.o.modal && browser.ie6) {
				s.d.iframe = $('<iframe src="javascript:false;"></iframe>')
					.css($.extend(s.o.iframeCss, {
						display: 'none',
						opacity: 0,
						position: 'fixed',
						height: w[0],
						width: w[1],
						zIndex: s.o.zIndex,
						top: 0,
						left: 0
					}))
					.appendTo(s.o.appendTo);
			}

			// create the overlay
			s.d.overlay = $('<div></div>')
				.attr('id', s.o.overlayId)
				.addClass('simplemodal-overlay')
				.css($.extend(s.o.overlayCss, {
					display: 'none',
					opacity: s.o.opacity / 100,
					height: s.o.modal ? d[0] : 0,
					width: s.o.modal ? d[1] : 0,
					position: 'fixed',
					left: 0,
					top: 0,
					zIndex: s.o.zIndex + 1
				}))
				.appendTo(s.o.appendTo);

			// create the container
			s.d.container = $('<div></div>')
				.attr('id', s.o.containerId)
				.addClass('simplemodal-container')
				.css($.extend(
					{position: s.o.fixed ? 'fixed' : 'absolute'},
					s.o.containerCss,
					{display: 'none', zIndex: s.o.zIndex + 2}
				))
				.append(s.o.close && s.o.closeHTML
					? $(s.o.closeHTML).addClass(s.o.closeClass)
					: '')
				.appendTo(s.o.appendTo);

			s.d.wrap = $('<div></div>')
				.attr('tabIndex', -1)
				.addClass('simplemodal-wrap')
				.css({height: '100%', outline: 0, width: '100%'})
				.appendTo(s.d.container);

			// add styling and attributes to the data
			// append to body to get correct dimensions, then move to wrap
			s.d.data = data
				.attr('id', data.attr('id') || s.o.dataId)
				.addClass('simplemodal-data')
				.css($.extend(s.o.dataCss, {
						display: 'none'
				}))
				.appendTo('body');
			data = null;

			s.setContainerDimensions();
			s.d.data.appendTo(s.d.wrap);

			// fix issues with IE
			if (browser.ie6 || browser.ieQuirks) {
				s.fixIE();
			}
		},
		/*
		 * Bind events
		 */
		bindEvents: function () {
			var s = this;

			// bind the close event to any element with the closeClass class
			$('.' + s.o.closeClass).bind('click.simplemodal', function (e) {
				e.preventDefault();
				s.close();
			});

			// bind the overlay click to the close function, if enabled
			if (s.o.modal && s.o.close && s.o.overlayClose) {
				s.d.overlay.bind('click.simplemodal', function (e) {
					e.preventDefault();
					s.close();
				});
			}

			// bind keydown events
			doc.bind('keydown.simplemodal', function (e) {
				if (s.o.modal && e.keyCode === 9) { // TAB
					s.watchTab(e);
				}
				else if ((s.o.close && s.o.escClose) && e.keyCode === 27) { // ESC
					e.preventDefault();
					s.close();
				}
			});

			// update window size
			wndw.bind('resize.simplemodal orientationchange.simplemodal', function () {
				// redetermine the window width/height
				s.getDimensions();

				// reposition the dialog
				s.o.autoResize ? s.setContainerDimensions() : s.o.autoPosition && s.setPosition();

				if (browser.ie6 || browser.ieQuirks) {
					s.fixIE();
				}
				else if (s.o.modal) {
					// update the iframe & overlay
					s.d.iframe && s.d.iframe.css({height: w[0], width: w[1]});
					s.d.overlay.css({height: d[0], width: d[1]});
				}
			});
		},
		/*
		 * Unbind events
		 */
		unbindEvents: function () {
			$('.' + this.o.closeClass).unbind('click.simplemodal');
			doc.unbind('keydown.simplemodal');
			wndw.unbind('.simplemodal');
			this.d.overlay.unbind('click.simplemodal');
		},
		/*
		 * Fix issues in IE6 and IE7 in quirks mode
		 */
		fixIE: function () {
			var s = this, p = s.o.position;

			// simulate fixed position - adapted from BlockUI
			$.each([s.d.iframe || null, !s.o.modal ? null : s.d.overlay, s.d.container.css('position') === 'fixed' ? s.d.container : null], function (i, el) {
				if (el) {
					var bch = 'document.body.clientHeight', bcw = 'document.body.clientWidth',
						bsh = 'document.body.scrollHeight', bsl = 'document.body.scrollLeft',
						bst = 'document.body.scrollTop', bsw = 'document.body.scrollWidth',
						ch = 'document.documentElement.clientHeight', cw = 'document.documentElement.clientWidth',
						sl = 'document.documentElement.scrollLeft', st = 'document.documentElement.scrollTop',
						s = el[0].style;

					s.position = 'absolute';
					if (i < 2) {
						s.removeExpression('height');
						s.removeExpression('width');
						s.setExpression('height','' + bsh + ' > ' + bch + ' ? ' + bsh + ' : ' + bch + ' + "px"');
						s.setExpression('width','' + bsw + ' > ' + bcw + ' ? ' + bsw + ' : ' + bcw + ' + "px"');
					}
					else {
						var te, le;
						if (p && p.constructor === Array) {
							var top = p[0]
								? typeof p[0] === 'number' ? p[0].toString() : p[0].replace(/px/, '')
								: el.css('top').replace(/px/, '');
							te = top.indexOf('%') === -1
								? top + ' + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"'
								: parseInt(top.replace(/%/, '')) + ' * ((' + ch + ' || ' + bch + ') / 100) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';

							if (p[1]) {
								var left = typeof p[1] === 'number' ? p[1].toString() : p[1].replace(/px/, '');
								le = left.indexOf('%') === -1
									? left + ' + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"'
									: parseInt(left.replace(/%/, '')) + ' * ((' + cw + ' || ' + bcw + ') / 100) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
							}
						}
						else {
							te = '(' + ch + ' || ' + bch + ') / 2 - (this.offsetHeight / 2) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';
							le = '(' + cw + ' || ' + bcw + ') / 2 - (this.offsetWidth / 2) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
						}
						s.removeExpression('top');
						s.removeExpression('left');
						s.setExpression('top', te);
						s.setExpression('left', le);
					}
				}
			});
		},
		/*
		 * Place focus on the first or last visible input
		 */
		focus: function (pos) {
			var s = this, p = pos && $.inArray(pos, ['first', 'last']) !== -1 ? pos : 'first';

			// focus on dialog or the first visible/enabled input element
			var input = $(':input:enabled:visible:' + p, s.d.wrap);
			setTimeout(function () {
				input.length > 0 ? input.focus() : s.d.wrap.focus();
			}, 10);
		},
		getDimensions: function () {
			// fix a jQuery bug with determining the window height - use innerHeight if available
			var s = this,
				h = typeof window.innerHeight === 'undefined' ? wndw.height() : window.innerHeight;

			d = [doc.height(), doc.width()];
			w = [h, wndw.width()];
		},
		getVal: function (v, d) {
			return v ? (typeof v === 'number' ? v
					: v === 'auto' ? 0
					: v.indexOf('%') > 0 ? ((parseInt(v.replace(/%/, '')) / 100) * (d === 'h' ? w[0] : w[1]))
					: parseInt(v.replace(/px/, '')))
				: null;
		},
		/*
		 * Update the container. Set new dimensions, if provided.
		 * Focus, if enabled. Re-bind events.
		 */
		update: function (height, width) {
			var s = this;

			// prevent update if dialog does not exist
			if (!s.d.data) {
				return false;
			}

			// reset orig values
			s.d.origHeight = s.getVal(height, 'h');
			s.d.origWidth = s.getVal(width, 'w');

			// hide data to prevent screen flicker
			s.d.data.hide();
			height && s.d.container.css('height', height);
			width && s.d.container.css('width', width);
			s.setContainerDimensions();
			s.d.data.show();
			s.o.focus && s.focus();

			// rebind events
			s.unbindEvents();
			s.bindEvents();
		},
		setContainerDimensions: function () {
			var s = this,
				badIE = browser.ie6 || browser.ie7;

			// get the dimensions for the container and data
			var ch = s.d.origHeight ? s.d.origHeight : browser.opera ? s.d.container.height() : s.getVal(badIE ? s.d.container[0].currentStyle['height'] : s.d.container.css('height'), 'h'),
				cw = s.d.origWidth ? s.d.origWidth : browser.opera ? s.d.container.width() : s.getVal(badIE ? s.d.container[0].currentStyle['width'] : s.d.container.css('width'), 'w'),
				dh = s.d.data.outerHeight(true), dw = s.d.data.outerWidth(true);

			s.d.origHeight = s.d.origHeight || ch;
			s.d.origWidth = s.d.origWidth || cw;

			// mxoh = max option height, mxow = max option width
			var mxoh = s.o.maxHeight ? s.getVal(s.o.maxHeight, 'h') : null,
				mxow = s.o.maxWidth ? s.getVal(s.o.maxWidth, 'w') : null,
				mh = mxoh && mxoh < w[0] ? mxoh : w[0],
				mw = mxow && mxow < w[1] ? mxow : w[1];

			// moh = min option height
			var moh = s.o.minHeight ? s.getVal(s.o.minHeight, 'h') : 'auto';
			if (!ch) {
				if (!dh) {ch = moh;}
				else {
					if (dh > mh) {ch = mh;}
					else if (s.o.minHeight && moh !== 'auto' && dh < moh) {ch = moh;}
					else {ch = dh;}
				}
			}
			else {
				ch = s.o.autoResize && ch > mh ? mh : ch < moh ? moh : ch;
			}

			// mow = min option width
			var mow = s.o.minWidth ? s.getVal(s.o.minWidth, 'w') : 'auto';
			if (!cw) {
				if (!dw) {cw = mow;}
				else {
					if (dw > mw) {cw = mw;}
					else if (s.o.minWidth && mow !== 'auto' && dw < mow) {cw = mow;}
					else {cw = dw;}
				}
			}
			else {
				cw = s.o.autoResize && cw > mw ? mw : cw < mow ? mow : cw;
			}

			s.d.container.css({height: ch, width: cw});
			s.d.wrap.css({overflow: (dh > ch || dw > cw) ? 'auto' : 'visible'});
			s.o.autoPosition && s.setPosition();
		},
		setPosition: function () {
			var s = this, top, left,
				hc = (w[0]/2) - (s.d.container.outerHeight(true)/2),
				vc = (w[1]/2) - (s.d.container.outerWidth(true)/2),
				st = s.d.container.css('position') !== 'fixed' ? wndw.scrollTop() : 0;

			if (s.o.position && Object.prototype.toString.call(s.o.position) === '[object Array]') {
				top = st + (s.o.position[0] || hc);
				left = s.o.position[1] || vc;
			} else {
				top = st + hc;
				left = vc;
			}
			s.d.container.css({left: left, top: top});
		},
		watchTab: function (e) {
			var s = this;

			if ($(e.target).parents('.simplemodal-container').length > 0) {
				// save the list of inputs
				s.inputs = $(':input:enabled:visible:first, :input:enabled:visible:last', s.d.data[0]);

				// if it's the first or last tabbable element, refocus
				if ((!e.shiftKey && e.target === s.inputs[s.inputs.length -1]) ||
						(e.shiftKey && e.target === s.inputs[0]) ||
						s.inputs.length === 0) {
					e.preventDefault();
					var pos = e.shiftKey ? 'last' : 'first';
					s.focus(pos);
				}
			}
			else {
				// might be necessary when custom onShow callback is used
				e.preventDefault();
				s.focus();
			}
		},
		/*
		 * Open the modal dialog elements
		 * - Note: If you use the onOpen callback, you must "show" the
		 *         overlay and container elements manually
		 *         (the iframe will be handled by SimpleModal)
		 */
		open: function () {
			var s = this;
			// display the iframe
			s.d.iframe && s.d.iframe.show();

			if ($.isFunction(s.o.onOpen)) {
				// execute the onOpen callback
				s.o.onOpen.apply(s, [s.d]);
			}
			else {
				// display the remaining elements
				s.d.overlay.show();
				s.d.container.show();
				s.d.data.show();
			}

			s.o.focus && s.focus();

			// bind default events
			s.bindEvents();
		},
		/*
		 * Close the modal dialog
		 * - Note: If you use an onClose callback, you must remove the
		 *         overlay, container and iframe elements manually
		 *
		 * @param {boolean} external Indicates whether the call to this
		 *     function was internal or external. If it was external, the
		 *     onClose callback will be ignored
		 */
		close: function () {
			var s = this;

			// prevent close when dialog does not exist
			if (!s.d.data) {
				return false;
			}

			// remove the default events
			s.unbindEvents();

			if ($.isFunction(s.o.onClose) && !s.occb) {
				// set the onClose callback flag
				s.occb = true;

				// execute the onClose callback
				s.o.onClose.apply(s, [s.d]);
			}
			else {
				// if the data came from the DOM, put it back
				if (s.d.placeholder) {
					var ph = $('#simplemodal-placeholder');
					// save changes to the data?
					if (s.o.persist) {
						// insert the (possibly) modified data back into the DOM
						ph.replaceWith(s.d.data.removeClass('simplemodal-data').css('display', s.display));
					}
					else {
						// remove the current and insert the original,
						// unmodified data back into the DOM
						s.d.data.hide().remove();
						ph.replaceWith(s.d.orig);
					}
				}
				else {
					// otherwise, remove it
					s.d.data.hide().remove();
				}

				// remove the remaining elements
				s.d.container.hide().remove();
				s.d.overlay.hide();
				s.d.iframe && s.d.iframe.hide().remove();
				s.d.overlay.remove();

				// reset the dialog object
				s.d = {};
			}
		}
	};
}));

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//@ sourceMappingURL=jquery-tourbus.map
(function() {
  var $, Bus, Leg, methods, tourbus,
    __slice = [].slice;

  $ = jQuery;

  Bus = require('./modules/bus');

  Leg = require('./modules/leg');

  tourbus = $.tourbus = function() {
    var args, method;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    method = args[0];
    if (methods.hasOwnProperty(method)) {
      args = args.slice(1);
    } else if (method instanceof $) {
      method = 'build';
    } else if (typeof method === 'string') {
      method = 'build';
      args[0] = $(args[0]);
    } else {
      $.error("Unknown method of $.tourbus --", args);
    }
    return methods[method].apply(this, args);
  };

  $.fn.tourbus = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return this.each(function() {
      args.unshift($(this));
      tourbus.apply(null, ['build'].concat(__slice.call(args)));
      return this;
    });
  };

  methods = {
    build: function(el, options) {
      var built;
      if (options == null) {
        options = {};
      }
      options = $.extend(true, {}, tourbus.defaults, options);
      built = [];
      if (!(el instanceof $)) {
        el = $(el);
      }
      el.each(function() {
        return built.push(new Bus(this, options));
      });
      if (built.length === 0) {
        $.error("" + el.selector + " was not found!");
      }
      if (built.length === 1) {
        return built[0];
      }
      return built;
    },
    destroyAll: function() {
      var bus, index, _ref, _results;
      _ref = Bus._busses;
      _results = [];
      for (index in _ref) {
        bus = _ref[index];
        _results.push(bus.destroy());
      }
      return _results;
    },
    expose: function(global) {
      return global.tourbus = {
        Bus: Bus,
        Leg: Leg
      };
    }
  };

  tourbus.defaults = {
    debug: false,
    autoDepart: false,
    container: 'body',
    "class": null,
    startAt: 0,
    onDepart: function() {
      return null;
    },
    onStop: function() {
      return null;
    },
    onLegStart: function() {
      return null;
    },
    onLegEnd: function() {
      return null;
    },
    leg: {
      "class": null,
      scrollTo: null,
      scrollSpeed: 150,
      scrollContext: 100,
      orientation: 'bottom',
      align: 'left',
      width: 'auto',
      margin: 10,
      top: null,
      left: null,
      zindex: 9999,
      arrow: "50%"
    }
  };

}).call(this);

},{"./modules/bus":2,"./modules/leg":3}],2:[function(require,module,exports){
//@ sourceMappingURL=bus.map
(function() {
  var $, Bus, Leg, utils,
    __slice = [].slice;

  $ = jQuery;

  Leg = require('./leg');

  utils = require('./utils');

  module.exports = Bus = (function() {
    Bus._busses = {};

    Bus._tours = 0;

    Bus.uniqueId = function() {
      return this._tours++;
    };

    function Bus(el, options) {
      this.options = options;
      this.id = this.constructor.uniqueId();
      this.elId = "tourbus-" + this.id;
      this.constructor._busses[this.id] = this;
      this.$original = $(el);
      this.rawData = this.$original.data();
      this.$container = $(utils.dataProp(this.rawData.container, this.options.container));
      this.$original.data({
        tourbus: this
      });
      this.currentLegIndex = null;
      this.legs = [];
      this.legEls = this.$original.children('li');
      this.totalLegs = this.legEls.length;
      this._configureElement();
      this._setupEvents();
      if (utils.dataProp(this.rawData.autoDepart, this.options.autoDepart)) {
        this.$original.trigger('depart.tourbus');
      }
      this._log('built tourbus with el', el.toString(), 'and options', this.options);
    }

    Bus.prototype.depart = function() {
      this.running = true;
      this.options.onDepart(this);
      this._log('departing', this);
      this.currentLegIndex = utils.dataProp(this.rawData.startAt, this.options.startAt);
      return this.showLeg();
    };

    Bus.prototype.stop = function() {
      if (!this.running) {
        return;
      }
      this.running = false;
      $.each(this.legs, $.proxy(this.hideLeg, this));
      this.currentLegIndex = null;
      this.options.onStop(this);
      return this.running;
    };

    Bus.prototype.on = function(event, selector, fn) {
      return this.$container.on(event, selector, fn);
    };

    Bus.prototype.currentLeg = function() {
      if (this.currentLegIndex === null) {
        return null;
      }
      return this.legs[this.currentLegIndex];
    };

    Bus.prototype.buildLeg = function(i) {
      var $legEl, data, leg;
      $legEl = $(this.legEls[i]);
      data = $legEl.data();
      this.legs[i] = leg = new Leg({
        bus: this,
        original: $legEl,
        target: data.el || 'body',
        index: i,
        rawData: data
      });
      leg.render();
      this.$el.append(leg.$el);
      leg._position();
      leg.hide();
      return leg;
    };

    Bus.prototype.showLeg = function(index) {
      var leg, preventDefault;
      if (index == null) {
        index = this.currentLegIndex;
      }
      leg = this.legs[index] || this.buildLeg(index);
      this._log('showLeg:', leg);
      preventDefault = this.options.onLegStart(leg, this);
      if (preventDefault !== false) {
        leg.show();
      }
      if (++index < this.totalLegs && !this.legs[index]) {
        return this.buildLeg(index);
      }
    };

    Bus.prototype.hideLeg = function(index) {
      var leg, preventDefault;
      if (index == null) {
        index = this.currentLegIndex;
      }
      leg = this.legs[index];
      if (leg.visible) {
        this._log('hideLeg:', leg);
        preventDefault = this.options.onLegEnd(leg, this);
        if (preventDefault !== false) {
          leg.hide();
        }
      }
      if (--index > 0 && !this.legs[index]) {
        return this.buildLeg(index);
      }
    };

    Bus.prototype.repositionLegs = function() {
      return $.each(this.legs, function() {
        return this.reposition();
      });
    };

    Bus.prototype.next = function() {
      this.hideLeg();
      this.currentLegIndex++;
      if (this.currentLegIndex > this.totalLegs - 1) {
        return this.$original.trigger('stop.tourbus');
      } else {
        return this.showLeg();
      }
    };

    Bus.prototype.prev = function(cb) {
      this.hideLeg();
      this.currentLegIndex--;
      if (this.currentLegIndex < 0) {
        return this.$original.trigger('stop.tourbus');
      } else {
        return this.showLeg();
      }
    };

    Bus.prototype.destroy = function() {
      $.each(this.legs, function() {
        return this.destroy();
      });
      this.legs = [];
      delete this.constructor._busses[this.id];
      this._teardownEvents();
      this.$original.removeData('tourbus');
      return this.$el.remove();
    };

    Bus.prototype._configureElement = function() {
      this.$el = $("<div class='tourbus-container'></div>");
      this.el = this.$el[0];
      this.$el.attr({
        id: this.elId
      });
      this.$el.addClass(utils.dataProp(this.rawData["class"], this.options["class"]));
      return this.$container.append(this.$el);
    };

    Bus.prototype._log = function() {
      if (!utils.dataProp(this.rawData.debug, this.options.debug)) {
        return;
      }
      return console.log.apply(console, ["TOURBUS " + this.id + ":"].concat(__slice.call(arguments)));
    };

    Bus.prototype._setupEvents = function() {
      this.$original.on('depart.tourbus', $.proxy(this.depart, this));
      this.$original.on('stop.tourbus', $.proxy(this.stop, this));
      this.$original.on('next.tourbus', $.proxy(this.next, this));
      return this.$original.on('prev.tourbus', $.proxy(this.prev, this));
    };

    Bus.prototype._teardownEvents = function() {
      return this.$original.off('.tourbus');
    };

    return Bus;

  })();

}).call(this);

},{"./leg":3,"./utils":4}],3:[function(require,module,exports){
//@ sourceMappingURL=leg.map
(function() {
  var $, Leg, utils, _addRule;

  $ = jQuery;

  utils = require('./utils');

  module.exports = Leg = (function() {
    function Leg(options) {
      this.options = options;
      this.$original = this.options.original;
      this.bus = this.options.bus;
      this.rawData = this.options.rawData;
      this.index = this.options.index;
      this.$target = $(this.options.target);
      this.id = "" + this.bus.id + "-" + this.options.index;
      this.elId = "tourbus-leg-" + this.id;
      this.visible = false;
      if (this.$target.length === 0) {
        throw "" + this.$target.selector + " is not an element!";
      }
      this.content = this.$original.html();
      this._setupOptions();
      this._configureElement();
      this._configureTarget();
      this._configureScroll();
      this._setupEvents();
      this.bus._log("leg " + this.index + " made with options", this.options);
    }

    Leg.prototype.render = function() {
      var arrowClass, html;
      arrowClass = this.options.orientation === 'centered' ? '' : 'tourbus-arrow';
      this.$el.addClass(" " + arrowClass + " tourbus-arrow-" + this.options.orientation + " ");
      html = "<div class='tourbus-leg-inner'>\n  " + this.content + "\n</div>";
      this.$el.css({
        width: this.options.width,
        zIndex: this.options.zindex
      }).html(html);
      return this;
    };

    Leg.prototype.destroy = function() {
      this.$el.remove();
      return this._teardownEvents();
    };

    Leg.prototype.reposition = function() {
      this._configureTarget();
      return this._position();
    };

    Leg.prototype._position = function() {
      var css, keys, rule, selector;
      if (this.options.orientation !== 'centered') {
        rule = {};
        keys = {
          top: 'left',
          bottom: 'left',
          left: 'top',
          right: 'top'
        };
        if (typeof this.options.arrow === 'number') {
          this.options.arrow += 'px';
        }
        rule[keys[this.options.orientation]] = this.options.arrow;
        selector = "#" + this.elId + ".tourbus-arrow";
        this.bus._log("adding rule for " + this.elId, rule);
        _addRule("" + selector + ":before, " + selector + ":after", rule);
      }
      css = this._offsets();
      this.bus._log('setting offsets on leg', css);
      return this.$el.css(css);
    };

    Leg.prototype.show = function() {
      this.visible = true;
      this.$el.css({
        visibility: 'visible',
        opacity: 0.8,
        zIndex: this.options.zindex
      });
      return this.scrollIntoView();
    };

    Leg.prototype.hide = function() {
      this.visible = false;
      if (this.bus.options.debug) {
        return this.$el.css({
          visibility: 'visible',
          opacity: 0.4,
          zIndex: 0
        });
      } else {
        return this.$el.css({
          visibility: 'hidden'
        });
      }
    };

    Leg.prototype.scrollIntoView = function() {
      var scrollTarget;
      if (!this.willScroll) {
        return;
      }
      scrollTarget = utils.dataProp(this.options.scrollTo, this.$el);
      this.bus._log('scrolling to', scrollTarget, this.scrollSettings);
      return $.scrollTo(scrollTarget, this.scrollSettings);
    };

    Leg.prototype._setupOptions = function() {
      var dataProps, globalOptions, prop, _i, _len, _results;
      globalOptions = this.bus.options.leg;
      dataProps = ['class', 'top', 'left', 'scrollTo', 'scrollSpeed', 'scrollContext', 'margin', 'arrow', 'align', 'width', 'zindex', 'orientation'];
      _results = [];
      for (_i = 0, _len = dataProps.length; _i < _len; _i++) {
        prop = dataProps[_i];
        _results.push(this.options[prop] = utils.dataProp(this.rawData[prop], globalOptions[prop]));
      }
      return _results;
    };

    Leg.prototype._configureElement = function() {
      this.$el = $("<div class='tourbus-leg'></div>");
      this.el = this.$el[0];
      this.$el.attr({
        id: this.elId
      });
      this.$el.addClass(this.options["class"]);
      return this.$el.css({
        zIndex: this.options.zindex
      });
    };

    Leg.prototype._setupEvents = function() {
      this.$el.on('click', '.tourbus-next', $.proxy(this.bus.next, this.bus));
      this.$el.on('click', '.tourbus-prev', $.proxy(this.bus.prev, this.bus));
      return this.$el.on('click', '.tourbus-stop', $.proxy(this.bus.stop, this.bus));
    };

    Leg.prototype._teardownEvents = function() {
      return this.$el.off('click');
    };

    Leg.prototype._configureTarget = function() {
      this.targetOffset = this.$target.offset();
      if (utils.dataProp(this.options.top, false)) {
        this.targetOffset.top = this.options.top;
      }
      if (utils.dataProp(this.options.left, false)) {
        this.targetOffset.left = this.options.left;
      }
      this.targetWidth = this.$target.outerWidth();
      return this.targetHeight = this.$target.outerHeight();
    };

    Leg.prototype._configureScroll = function() {
      this.willScroll = $.fn.scrollTo && this.options.scrollTo !== false;
      return this.scrollSettings = {
        offset: -this.options.scrollContext,
        easing: 'linear',
        axis: 'y',
        duration: this.options.scrollSpeed
      };
    };

    Leg.prototype._offsets = function() {
      var dimension, elHalf, elHeight, elWidth, offsets, targetHalf, targetHeightOverride, validOrientations;
      elHeight = this.$el.height();
      elWidth = this.$el.width();
      offsets = {};
      switch (this.options.orientation) {
        case 'centered':
          targetHeightOverride = $(window).height();
          offsets.top = this.options.top;
          if (!utils.dataProp(offsets.top, false)) {
            offsets.top = (targetHeightOverride / 2) - (elHeight / 2);
          }
          offsets.left = (this.targetWidth / 2) - (elWidth / 2);
          break;
        case 'left':
          offsets.top = this.targetOffset.top;
          offsets.left = this.targetOffset.left - elWidth - this.options.margin;
          break;
        case 'right':
          offsets.top = this.targetOffset.top;
          offsets.left = this.targetOffset.left + this.targetWidth + this.options.margin;
          break;
        case 'top':
          offsets.top = this.targetOffset.top - elHeight - this.options.margin;
          offsets.left = this.targetOffset.left;
          break;
        case 'bottom':
          offsets.top = this.targetOffset.top + this.targetHeight + this.options.margin;
          offsets.left = this.targetOffset.left;
      }
      validOrientations = {
        top: ['left', 'right'],
        bottom: ['left', 'right'],
        left: ['top', 'bottom'],
        right: ['top', 'bottom']
      };
      if (utils.include(this.options.orientation, validOrientations[this.options.align])) {
        switch (this.options.align) {
          case 'right':
            offsets.left += this.targetWidth - elWidth;
            break;
          case 'bottom':
            offsets.top += this.targetHeight - elHeight;
        }
      } else if (this.options.align === 'center') {
        if (utils.include(this.options.orientation, validOrientations.left)) {
          targetHalf = this.targetWidth / 2;
          elHalf = elWidth / 2;
          dimension = 'left';
        } else {
          targetHalf = this.targetHeight / 2;
          elHalf = elHeight / 2;
          dimension = 'top';
        }
        if (targetHalf > elHalf) {
          offsets[dimension] += targetHalf - elHalf;
        } else {
          offsets[dimension] -= elHalf - targetHalf;
        }
      }
      return offsets;
    };

    return Leg;

  })();

  _addRule = (function(styleTag) {
    var sheet;
    styleTag.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(styleTag);
    sheet = document.styleSheets[document.styleSheets.length - 1];
    return function(selector, css) {
      var key, propText;
      propText = $.map((function() {
        var _results;
        _results = [];
        for (key in css) {
          _results.push(key);
        }
        return _results;
      })(), function(p) {
        return "" + p + ":" + css[p];
      }).join(';');
      try {
        if (sheet.insertRule) {
          sheet.insertRule("" + selector + " { " + propText + " }", (sheet.cssRules || sheet.rules).length);
        } else {
          sheet.addRule(selector, propText);
        }
      } catch (_error) {}
    };
  })(document.createElement('style'));

}).call(this);

},{"./utils":4}],4:[function(require,module,exports){
//@ sourceMappingURL=utils.map
(function() {
  module.exports = {
    dataProp: function(possiblyFalsy, alternative) {
      if (possiblyFalsy === null || typeof possiblyFalsy === 'undefined') {
        return alternative;
      }
      return possiblyFalsy;
    },
    include: function(value, array) {
      return $.inArray(value, array || []) !== -1;
    }
  };

}).call(this);

},{}]},{},[1,2,3,4]);
;(function (factory)
{
    if (typeof define === 'function' && define.amd)
    {
        define(['jquery'], factory);
    }
    else if (typeof exports === 'object')
    {
        factory(require('jquery'));
    }
    else
    {
        factory(jQuery);
    }
}
(function ($)
{
    "use strict";

    var pluginName = "tinyscrollbar"
    ,   defaults   =
        {
            axis         : 'y'    // Vertical or horizontal scrollbar? ( x || y ).
        ,   wheel        : true   // Enable or disable the mousewheel;
        ,   wheelSpeed   : 1     // How many pixels must the mouswheel scroll at a time.
        ,   wheelLock    : true   // Lock default scrolling window when there is no more content.
        ,   scrollInvert : false  // Enable invert style scrolling
        ,   trackSize    : false  // Set the size of the scrollbar to auto or a fixed number.
        ,   thumbSize    : false  // Set the size of the thumb to auto or a fixed number
        }
    ;

    function Plugin($container, options)
    {
        this.options   = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name     = pluginName;

        var self        = this
        ,   $viewport   = $container.find(".viewport")
        ,   $overview   = $container.find(".overview")
        ,   $scrollbar  = $container.find(".scrollbar")
        ,   $track      = $scrollbar.find(".track")
        ,   $thumb      = $scrollbar.find(".thumb")

        ,   mousePosition  = 0

        ,   isHorizontal   = this.options.axis === 'x'
        ,   hasTouchEvents = ("ontouchstart" in document.documentElement)
        ,   wheelEvent     = "mousewheel"

        ,   sizeLabel = isHorizontal ? "width" : "height"
        ,   posiLabel = isHorizontal ? "left" : "top"
        ;

        this.contentPosition = 0;
        this.viewportSize    = 0;
        this.contentSize     = 0;
        this.contentRatio    = 0;
        this.trackSize       = 0;
        this.trackRatio      = 0;
        this.thumbSize       = 0;
        this.thumbPosition   = 0;

        function initialize()
        {
            self.update();
            setEvents();

            return self;
        }

        this.update = function(scrollTo)
        {
            var sizeLabelCap  = sizeLabel.charAt(0).toUpperCase() + sizeLabel.slice(1).toLowerCase();
            this.viewportSize = $viewport[0]['offset'+ sizeLabelCap];
            this.contentSize  = $overview[0]['scroll'+ sizeLabelCap];
            this.contentRatio = this.viewportSize / this.contentSize;
            this.trackSize    = this.options.trackSize || this.viewportSize;
            this.thumbSize    = Math.min(this.trackSize, Math.max(0, (this.options.thumbSize || (this.trackSize * this.contentRatio))));
            this.trackRatio   = this.options.thumbSize ? (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize) : (this.contentSize / this.trackSize);
            mousePosition     = $track.offset().top;

            $scrollbar.toggleClass("disable", this.contentRatio >= 1);
            switch (scrollTo)
            {
                case "bottom":
                    this.contentPosition = this.contentSize - this.viewportSize;
                    break;

                case "relative":
                    this.contentPosition = Math.min(Math.max(this.contentSize - this.viewportSize, 0), Math.max(0, this.contentPosition));
                    break;

                default:
                    this.contentPosition = parseInt(scrollTo, 10) || 0;
            }

            setSize();

            return self;
        };

        function setSize()
        {
            $thumb.css(posiLabel, self.contentPosition / self.trackRatio);
            $overview.css(posiLabel, -self.contentPosition);
            $scrollbar.css(sizeLabel, self.trackSize);
            $track.css(sizeLabel, self.trackSize);
            $thumb.css(sizeLabel, self.thumbSize);
        }

        function setEvents()
        {
            if(hasTouchEvents)
            {
                $viewport[0].ontouchstart = function(event)
                {
                    if(1 === event.touches.length)
                    {
                        event.stopPropagation();

                        start(event.touches[0]);
                    }
                };
            }
            else
            {
                $thumb.bind("mousedown", start);
                $track.bind("mousedown", drag);
            }

            $(window).resize(function()
            {
                self.update("relative");
            });

            if (self.options.wheel) {
                $($container[0]).on('mousewheel', wheel);
            }
        }

        function start(event)
        {
            $("body").addClass("noSelect");

            mousePosition      = isHorizontal ? event.pageX : event.pageY;
            self.thumbPosition = parseInt($thumb.css(posiLabel), 10) || 0;

            if(hasTouchEvents)
            {
                document.ontouchmove = function(event)
                {
                    event.preventDefault();
                    drag(event.touches[0]);
                };
                document.ontouchend = end;
            }
            else
            {
                $(document).bind("mousemove", drag);
                $(document).bind("mouseup", end);
                $thumb.bind("mouseup", end);
            }
        }

        function wheel(event)
        {
            if(self.contentRatio < 1)
            {
                var evntObj         = event || window.event
                ,   deltaDir        = "delta" + self.options.axis.toUpperCase()
                ,   wheelSpeedDelta = evntObj[deltaDir]
                ;

                self.contentPosition -= (wheelSpeedDelta * evntObj.deltaFactor) * self.options.wheelSpeed;
                self.contentPosition = Math.min((self.contentSize - self.viewportSize), Math.max(0, self.contentPosition));

                $container.trigger("move");

                $thumb.css(posiLabel, self.contentPosition / self.trackRatio);
                $overview.css(posiLabel, -self.contentPosition);

                if(self.options.wheelLock || (self.contentPosition !== (self.contentSize - self.viewportSize) && self.contentPosition !== 0))
                {
                    evntObj = $.event.fix(evntObj);
                    evntObj.preventDefault();
                }
            }
        }

        function drag(event)
        {
            if(self.contentRatio < 1)
            {
                var mousePositionNew   = isHorizontal ? event.pageX : event.pageY
                ,   thumbPositionDelta = mousePositionNew - mousePosition
                ;

                if(self.options.scrollInvert && hasTouchEvents)
                {
                    thumbPositionDelta = mousePosition - mousePositionNew;
                }

                var thumbPositionNew = Math.min((self.trackSize - self.thumbSize), Math.max(0, self.thumbPosition + thumbPositionDelta));
                self.contentPosition = thumbPositionNew * self.trackRatio;

                $container.trigger("move");

                $thumb.css(posiLabel, thumbPositionNew);
                $overview.css(posiLabel, -self.contentPosition);
            }
        }

        function end()
        {
            $("body").removeClass("noSelect");
            $(document).unbind("mousemove", drag);
            $(document).unbind("mouseup", end);
            $thumb.unbind("mouseup", end);
            document.ontouchmove = document.ontouchend = null;
        }

        return initialize();
    }

    $.fn[pluginName] = function(options)
    {
        return this.each(function()
        {
            if(!$.data(this, "plugin_" + pluginName))
            {
                $.data(this, "plugin_" + pluginName, new Plugin($(this), options));
            }
        });
    };
}));

/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
var Kinetic={};!function(a){var b=Math.PI/180;Kinetic={version:"5.1.0",stages:[],idCounter:0,ids:{},names:{},shapes:{},listenClickTap:!1,inDblClickWindow:!1,enableTrace:!1,traceArrMax:100,dblClickWindow:400,pixelRatio:void 0,dragDistance:0,angleDeg:!0,UA:function(){var b=a.navigator&&a.navigator.userAgent||"",c=b.toLowerCase(),d=/(chrome)[ \/]([\w.]+)/.exec(c)||/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||c.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c)||[],e=!!b.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);return{browser:d[1]||"",version:d[2]||"0",mobile:e}}(),Filters:{},Node:function(a){this._init(a)},Shape:function(a){this.__init(a)},Container:function(a){this.__init(a)},Stage:function(a){this.___init(a)},BaseLayer:function(a){this.___init(a)},Layer:function(a){this.____init(a)},FastLayer:function(a){this.____init(a)},Group:function(a){this.___init(a)},isDragging:function(){var a=Kinetic.DD;return a?a.isDragging:!1},isDragReady:function(){var a=Kinetic.DD;return a?!!a.node:!1},_addId:function(a,b){void 0!==b&&(this.ids[b]=a)},_removeId:function(a){void 0!==a&&delete this.ids[a]},_addName:function(a,b){void 0!==b&&(void 0===this.names[b]&&(this.names[b]=[]),this.names[b].push(a))},_removeName:function(a,b){if(void 0!==a){var c=this.names[a];if(void 0!==c){for(var d=0;d<c.length;d++){var e=c[d];e._id===b&&c.splice(d,1)}0===c.length&&delete this.names[a]}}},getAngle:function(a){return this.angleDeg?a*b:a}}}(this),function(a,b){if("object"==typeof exports){var c=require("canvas"),d=require("jsdom").jsdom,e=d("<!DOCTYPE html><html><head></head><body></body></html>"),f=b();return Kinetic.document=e,Kinetic.window=Kinetic.document.createWindow(),Kinetic.window.Image=c.Image,Kinetic.root=a,Kinetic._nodeCanvas=c,void(module.exports=f)}"function"==typeof define&&define.amd&&define(b),Kinetic.document=document,Kinetic.window=window,Kinetic.root=a}((1,eval)("this"),function(){return Kinetic});/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){Kinetic.Collection=function(){var a=[].slice.call(arguments),b=a.length,c=0;for(this.length=b;b>c;c++)this[c]=a[c];return this},Kinetic.Collection.prototype=[],Kinetic.Collection.prototype.each=function(a){for(var b=0;b<this.length;b++)a(this[b],b)},Kinetic.Collection.prototype.toArray=function(){var a,b=[],c=this.length;for(a=0;c>a;a++)b.push(this[a]);return b},Kinetic.Collection.toCollection=function(a){var b,c=new Kinetic.Collection,d=a.length;for(b=0;d>b;b++)c.push(a[b]);return c},Kinetic.Collection._mapMethod=function(a){Kinetic.Collection.prototype[a]=function(){var b,c=this.length,d=[].slice.call(arguments);for(b=0;c>b;b++)this[b][a].apply(this[b],d);return this}},Kinetic.Collection.mapMethods=function(a){var b=a.prototype;for(var c in b)Kinetic.Collection._mapMethod(c)},Kinetic.Transform=function(a){this.m=a&&a.slice()||[1,0,0,1,0,0]},Kinetic.Transform.prototype={copy:function(){return new Kinetic.Transform(this.m)},point:function(a){var b=this.m;return{x:b[0]*a.x+b[2]*a.y+b[4],y:b[1]*a.x+b[3]*a.y+b[5]}},translate:function(a,b){return this.m[4]+=this.m[0]*a+this.m[2]*b,this.m[5]+=this.m[1]*a+this.m[3]*b,this},scale:function(a,b){return this.m[0]*=a,this.m[1]*=a,this.m[2]*=b,this.m[3]*=b,this},rotate:function(a){var b=Math.cos(a),c=Math.sin(a),d=this.m[0]*b+this.m[2]*c,e=this.m[1]*b+this.m[3]*c,f=this.m[0]*-c+this.m[2]*b,g=this.m[1]*-c+this.m[3]*b;return this.m[0]=d,this.m[1]=e,this.m[2]=f,this.m[3]=g,this},getTranslation:function(){return{x:this.m[4],y:this.m[5]}},skew:function(a,b){var c=this.m[0]+this.m[2]*b,d=this.m[1]+this.m[3]*b,e=this.m[2]+this.m[0]*a,f=this.m[3]+this.m[1]*a;return this.m[0]=c,this.m[1]=d,this.m[2]=e,this.m[3]=f,this},multiply:function(a){var b=this.m[0]*a.m[0]+this.m[2]*a.m[1],c=this.m[1]*a.m[0]+this.m[3]*a.m[1],d=this.m[0]*a.m[2]+this.m[2]*a.m[3],e=this.m[1]*a.m[2]+this.m[3]*a.m[3],f=this.m[0]*a.m[4]+this.m[2]*a.m[5]+this.m[4],g=this.m[1]*a.m[4]+this.m[3]*a.m[5]+this.m[5];return this.m[0]=b,this.m[1]=c,this.m[2]=d,this.m[3]=e,this.m[4]=f,this.m[5]=g,this},invert:function(){var a=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),b=this.m[3]*a,c=-this.m[1]*a,d=-this.m[2]*a,e=this.m[0]*a,f=a*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),g=a*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);return this.m[0]=b,this.m[1]=c,this.m[2]=d,this.m[3]=e,this.m[4]=f,this.m[5]=g,this},getMatrix:function(){return this.m},setAbsolutePosition:function(a,b){var c=this.m[0],d=this.m[1],e=this.m[2],f=this.m[3],g=this.m[4],h=this.m[5],i=(c*(b-h)-d*(a-g))/(c*f-d*e),j=(a-g-e*i)/c;return this.translate(j,i)}};var a="2d",b="[object Array]",c="[object Number]",d="[object String]",e=Math.PI/180,f=180/Math.PI,g="#",h="",i="0",j="Kinetic warning: ",k="Kinetic error: ",l="rgb(",m={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},n=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;Kinetic.Util={_isElement:function(a){return!(!a||1!=a.nodeType)},_isFunction:function(a){return!!(a&&a.constructor&&a.call&&a.apply)},_isObject:function(a){return!!a&&a.constructor==Object},_isArray:function(a){return Object.prototype.toString.call(a)==b},_isNumber:function(a){return Object.prototype.toString.call(a)==c},_isString:function(a){return Object.prototype.toString.call(a)==d},_throttle:function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:(new Date).getTime(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=(new Date).getTime();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}},_hasMethods:function(a){var b,c=[];for(b in a)this._isFunction(a[b])&&c.push(b);return c.length>0},createCanvasElement:function(){var a=Kinetic.document.createElement("canvas");return a.style=a.style||{},a},isBrowser:function(){return"object"!=typeof exports},_isInDocument:function(a){for(;a=a.parentNode;)if(a==Kinetic.document)return!0;return!1},_simplifyArray:function(a){var b,c,d=[],e=a.length,f=Kinetic.Util;for(b=0;e>b;b++)c=a[b],f._isNumber(c)?c=Math.round(1e3*c)/1e3:f._isString(c)||(c=c.toString()),d.push(c);return d},_getImage:function(b,c){var d,e;if(b)if(this._isElement(b))c(b);else if(this._isString(b))d=new Kinetic.window.Image,d.onload=function(){c(d)},d.src=b;else if(b.data){e=Kinetic.Util.createCanvasElement(),e.width=b.width,e.height=b.height;var f=e.getContext(a);f.putImageData(b,0,0),this._getImage(e.toDataURL(),c)}else c(null);else c(null)},_getRGBAString:function(a){var b=a.red||0,c=a.green||0,d=a.blue||0,e=a.alpha||1;return["rgba(",b,",",c,",",d,",",e,")"].join(h)},_rgbToHex:function(a,b,c){return((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)},_hexToRgb:function(a){a=a.replace(g,h);var b=parseInt(a,16);return{r:b>>16&255,g:b>>8&255,b:255&b}},getRandomColor:function(){for(var a=(16777215*Math.random()<<0).toString(16);a.length<6;)a=i+a;return g+a},get:function(a,b){return void 0===a?b:a},getRGB:function(a){var b;return a in m?(b=m[a],{r:b[0],g:b[1],b:b[2]}):a[0]===g?this._hexToRgb(a.substring(1)):a.substr(0,4)===l?(b=n.exec(a.replace(/ /g,"")),{r:parseInt(b[1],10),g:parseInt(b[2],10),b:parseInt(b[3],10)}):{r:0,g:0,b:0}},_merge:function(a,b){var c=this._clone(b);for(var d in a)c[d]=this._isObject(a[d])?this._merge(a[d],c[d]):a[d];return c},cloneObject:function(a){var b={};for(var c in a)b[c]=this._isObject(a[c])?this.cloneObject(a[c]):this._isArray(a[c])?this.cloneArray(a[c]):a[c];return b},cloneArray:function(a){return a.slice(0)},_degToRad:function(a){return a*e},_radToDeg:function(a){return a*f},_capitalize:function(a){return a.charAt(0).toUpperCase()+a.slice(1)},error:function(a){throw new Error(k+a)},warn:function(a){Kinetic.root.console&&console.warn&&console.warn(j+a)},extend:function(a,b){for(var c in b.prototype)c in a.prototype||(a.prototype[c]=b.prototype[c])},addMethods:function(a,b){var c;for(c in b)a.prototype[c]=b[c]},_getControlPoints:function(a,b,c,d,e,f,g){var h=Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2)),i=Math.sqrt(Math.pow(e-c,2)+Math.pow(f-d,2)),j=g*h/(h+i),k=g*i/(h+i),l=c-j*(e-a),m=d-j*(f-b),n=c+k*(e-a),o=d+k*(f-b);return[l,m,n,o]},_expandPoints:function(a,b){var c,d,e=a.length,f=[];for(c=2;e-2>c;c+=2)d=Kinetic.Util._getControlPoints(a[c-2],a[c-1],a[c],a[c+1],a[c+2],a[c+3],b),f.push(d[0]),f.push(d[1]),f.push(a[c]),f.push(a[c+1]),f.push(d[2]),f.push(d[3]);return f},_removeLastLetter:function(a){return a.substring(0,a.length-1)}}}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){var a=Kinetic.Util.createCanvasElement(),b=a.getContext("2d"),c=Kinetic.UA.mobile?function(){var a=window.devicePixelRatio||1,c=b.webkitBackingStorePixelRatio||b.mozBackingStorePixelRatio||b.msBackingStorePixelRatio||b.oBackingStorePixelRatio||b.backingStorePixelRatio||1;return a/c}():1;Kinetic.Canvas=function(a){this.init(a)},Kinetic.Canvas.prototype={init:function(a){a=a||{};var b=a.pixelRatio||Kinetic.pixelRatio||c;this.pixelRatio=b,this._canvas=Kinetic.Util.createCanvasElement(),this._canvas.style.padding=0,this._canvas.style.margin=0,this._canvas.style.border=0,this._canvas.style.background="transparent",this._canvas.style.position="absolute",this._canvas.style.top=0,this._canvas.style.left=0},getContext:function(){return this.context},getPixelRatio:function(){return this.pixelRatio},setPixelRatio:function(a){this.pixelRatio=a,this.setSize(this.getWidth(),this.getHeight())},setWidth:function(a){this.width=this._canvas.width=a*this.pixelRatio,this._canvas.style.width=a+"px"},setHeight:function(a){this.height=this._canvas.height=a*this.pixelRatio,this._canvas.style.height=a+"px"},getWidth:function(){return this.width},getHeight:function(){return this.height},setSize:function(a,b){this.setWidth(a),this.setHeight(b)},toDataURL:function(a,b){try{return this._canvas.toDataURL(a,b)}catch(c){try{return this._canvas.toDataURL()}catch(d){return Kinetic.Util.warn("Unable to get data URL. "+d.message),""}}}},Kinetic.SceneCanvas=function(a){a=a||{};var b=a.width||0,c=a.height||0;Kinetic.Canvas.call(this,a),this.context=new Kinetic.SceneContext(this),this.setSize(b,c)},Kinetic.SceneCanvas.prototype={setWidth:function(a){var b=this.pixelRatio,c=this.getContext()._context;Kinetic.Canvas.prototype.setWidth.call(this,a),c.scale(b,b)},setHeight:function(a){var b=this.pixelRatio,c=this.getContext()._context;Kinetic.Canvas.prototype.setHeight.call(this,a),c.scale(b,b)}},Kinetic.Util.extend(Kinetic.SceneCanvas,Kinetic.Canvas),Kinetic.HitCanvas=function(a){a=a||{};var b=a.width||0,c=a.height||0;Kinetic.Canvas.call(this,a),this.context=new Kinetic.HitContext(this),this.setSize(b,c)},Kinetic.Util.extend(Kinetic.HitCanvas,Kinetic.Canvas)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){var a=",",b="(",c=")",d="([",e="])",f=";",g="()",h="=",i=["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createLinearGradient","createPattern","createRadialGradient","drawImage","fill","fillText","getImageData","createImageData","lineTo","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeText","transform","translate"];Kinetic.Context=function(a){this.init(a)},Kinetic.Context.prototype={init:function(a){this.canvas=a,this._context=a._canvas.getContext("2d"),Kinetic.enableTrace&&(this.traceArr=[],this._enableTrace())},fillShape:function(a){a.getFillEnabled()&&this._fill(a)},strokeShape:function(a){a.getStrokeEnabled()&&this._stroke(a)},fillStrokeShape:function(a){var b=a.getFillEnabled();b&&this._fill(a),a.getStrokeEnabled()&&this._stroke(a)},getTrace:function(i){var j,k,l,m,n=this.traceArr,o=n.length,p="";for(j=0;o>j;j++)k=n[j],l=k.method,l?(m=k.args,p+=l,p+=i?g:Kinetic.Util._isArray(m[0])?d+m.join(a)+e:b+m.join(a)+c):(p+=k.property,i||(p+=h+k.val)),p+=f;return p},clearTrace:function(){this.traceArr=[]},_trace:function(a){var b,c=this.traceArr;c.push(a),b=c.length,b>=Kinetic.traceArrMax&&c.shift()},reset:function(){var a=this.getCanvas().getPixelRatio();this.setTransform(1*a,0,0,1*a,0,0)},getCanvas:function(){return this.canvas},clear:function(a){var b=this.getCanvas();a?this.clearRect(a.x||0,a.y||0,a.width||0,a.height||0):this.clearRect(0,0,b.getWidth(),b.getHeight())},_applyLineCap:function(a){var b=a.getLineCap();b&&this.setAttr("lineCap",b)},_applyOpacity:function(a){var b=a.getAbsoluteOpacity();1!==b&&this.setAttr("globalAlpha",b)},_applyLineJoin:function(a){var b=a.getLineJoin();b&&this.setAttr("lineJoin",b)},setAttr:function(a,b){this._context[a]=b},arc:function(){var a=arguments;this._context.arc(a[0],a[1],a[2],a[3],a[4],a[5])},beginPath:function(){this._context.beginPath()},bezierCurveTo:function(){var a=arguments;this._context.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5])},clearRect:function(){var a=arguments;this._context.clearRect(a[0],a[1],a[2],a[3])},clip:function(){this._context.clip()},closePath:function(){this._context.closePath()},createImageData:function(){var a=arguments;return 2===a.length?this._context.createImageData(a[0],a[1]):1===a.length?this._context.createImageData(a[0]):void 0},createLinearGradient:function(){var a=arguments;return this._context.createLinearGradient(a[0],a[1],a[2],a[3])},createPattern:function(){var a=arguments;return this._context.createPattern(a[0],a[1])},createRadialGradient:function(){var a=arguments;return this._context.createRadialGradient(a[0],a[1],a[2],a[3],a[4],a[5])},drawImage:function(){var a=arguments,b=this._context;3===a.length?b.drawImage(a[0],a[1],a[2]):5===a.length?b.drawImage(a[0],a[1],a[2],a[3],a[4]):9===a.length&&b.drawImage(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8])},fill:function(){this._context.fill()},fillText:function(){var a=arguments;this._context.fillText(a[0],a[1],a[2])},getImageData:function(){var a=arguments;return this._context.getImageData(a[0],a[1],a[2],a[3])},lineTo:function(){var a=arguments;this._context.lineTo(a[0],a[1])},moveTo:function(){var a=arguments;this._context.moveTo(a[0],a[1])},rect:function(){var a=arguments;this._context.rect(a[0],a[1],a[2],a[3])},putImageData:function(){var a=arguments;this._context.putImageData(a[0],a[1],a[2])},quadraticCurveTo:function(){var a=arguments;this._context.quadraticCurveTo(a[0],a[1],a[2],a[3])},restore:function(){this._context.restore()},rotate:function(){var a=arguments;this._context.rotate(a[0])},save:function(){this._context.save()},scale:function(){var a=arguments;this._context.scale(a[0],a[1])},setLineDash:function(){var a=arguments,b=this._context;this._context.setLineDash?b.setLineDash(a[0]):"mozDash"in b?b.mozDash=a[0]:"webkitLineDash"in b&&(b.webkitLineDash=a[0])},setTransform:function(){var a=arguments;this._context.setTransform(a[0],a[1],a[2],a[3],a[4],a[5])},stroke:function(){this._context.stroke()},strokeText:function(){var a=arguments;this._context.strokeText(a[0],a[1],a[2])},transform:function(){var a=arguments;this._context.transform(a[0],a[1],a[2],a[3],a[4],a[5])},translate:function(){var a=arguments;this._context.translate(a[0],a[1])},_enableTrace:function(){var a,b,c=this,d=i.length,e=Kinetic.Util._simplifyArray,f=this.setAttr,g=function(a){var d,f=c[a];c[a]=function(){return b=e(Array.prototype.slice.call(arguments,0)),d=f.apply(c,arguments),c._trace({method:a,args:b}),d}};for(a=0;d>a;a++)g(i[a]);c.setAttr=function(){f.apply(c,arguments),c._trace({property:arguments[0],val:arguments[1]})}}},Kinetic.SceneContext=function(a){Kinetic.Context.call(this,a)},Kinetic.SceneContext.prototype={_fillColor:function(a){var b=a.fill()||Kinetic.Util._getRGBAString({red:a.fillRed(),green:a.fillGreen(),blue:a.fillBlue(),alpha:a.fillAlpha()});this.setAttr("fillStyle",b),a._fillFunc(this)},_fillPattern:function(a){var b=a.getFillPatternImage(),c=a.getFillPatternX(),d=a.getFillPatternY(),e=a.getFillPatternScale(),f=Kinetic.getAngle(a.getFillPatternRotation()),g=a.getFillPatternOffset(),h=a.getFillPatternRepeat();(c||d)&&this.translate(c||0,d||0),f&&this.rotate(f),e&&this.scale(e.x,e.y),g&&this.translate(-1*g.x,-1*g.y),this.setAttr("fillStyle",this.createPattern(b,h||"repeat")),this.fill()},_fillLinearGradient:function(a){var b=a.getFillLinearGradientStartPoint(),c=a.getFillLinearGradientEndPoint(),d=a.getFillLinearGradientColorStops(),e=this.createLinearGradient(b.x,b.y,c.x,c.y);if(d){for(var f=0;f<d.length;f+=2)e.addColorStop(d[f],d[f+1]);this.setAttr("fillStyle",e),this.fill()}},_fillRadialGradient:function(a){for(var b=a.getFillRadialGradientStartPoint(),c=a.getFillRadialGradientEndPoint(),d=a.getFillRadialGradientStartRadius(),e=a.getFillRadialGradientEndRadius(),f=a.getFillRadialGradientColorStops(),g=this.createRadialGradient(b.x,b.y,d,c.x,c.y,e),h=0;h<f.length;h+=2)g.addColorStop(f[h],f[h+1]);this.setAttr("fillStyle",g),this.fill()},_fill:function(a){var b=a.fill()||a.fillRed()||a.fillGreen()||a.fillBlue(),c=a.getFillPatternImage(),d=a.getFillLinearGradientColorStops(),e=a.getFillRadialGradientColorStops(),f=a.getFillPriority();b&&"color"===f?this._fillColor(a):c&&"pattern"===f?this._fillPattern(a):d&&"linear-gradient"===f?this._fillLinearGradient(a):e&&"radial-gradient"===f?this._fillRadialGradient(a):b?this._fillColor(a):c?this._fillPattern(a):d?this._fillLinearGradient(a):e&&this._fillRadialGradient(a)},_stroke:function(a){var b=a.dash(),c=a.getStrokeScaleEnabled();a.hasStroke()&&(c||(this.save(),this.setTransform(1,0,0,1,0,0)),this._applyLineCap(a),b&&a.dashEnabled()&&this.setLineDash(b),this.setAttr("lineWidth",a.strokeWidth()),this.setAttr("strokeStyle",a.stroke()||Kinetic.Util._getRGBAString({red:a.strokeRed(),green:a.strokeGreen(),blue:a.strokeBlue(),alpha:a.strokeAlpha()})),a._strokeFunc(this),c||this.restore())},_applyShadow:function(a){var b=Kinetic.Util,c=a.getAbsoluteOpacity(),d=b.get(a.getShadowColor(),"black"),e=b.get(a.getShadowBlur(),5),f=b.get(a.getShadowOpacity(),1),g=b.get(a.getShadowOffset(),{x:0,y:0});f&&this.setAttr("globalAlpha",f*c),this.setAttr("shadowColor",d),this.setAttr("shadowBlur",e),this.setAttr("shadowOffsetX",g.x),this.setAttr("shadowOffsetY",g.y)}},Kinetic.Util.extend(Kinetic.SceneContext,Kinetic.Context),Kinetic.HitContext=function(a){Kinetic.Context.call(this,a)},Kinetic.HitContext.prototype={_fill:function(a){this.save(),this.setAttr("fillStyle",a.colorKey),a._fillFuncHit(this),this.restore()},_stroke:function(a){a.hasStroke()&&(this._applyLineCap(a),this.setAttr("lineWidth",a.strokeWidth()),this.setAttr("strokeStyle",a.colorKey),a._strokeFuncHit(this))}},Kinetic.Util.extend(Kinetic.HitContext,Kinetic.Context)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){var a="get",b="set";Kinetic.Factory={addGetterSetter:function(a,b,c,d,e){this.addGetter(a,b,c),this.addSetter(a,b,d,e),this.addOverloadedGetterSetter(a,b)},addGetter:function(b,c,d){var e=a+Kinetic.Util._capitalize(c);b.prototype[e]=function(){var a=this.attrs[c];return void 0===a?d:a}},addSetter:function(a,c,d,e){var f=b+Kinetic.Util._capitalize(c);a.prototype[f]=function(a){return d&&(a=d.call(this,a)),this._setAttr(c,a),e&&e.call(this),this}},addComponentsGetterSetter:function(c,d,e,f,g){var h,i,j=e.length,k=Kinetic.Util._capitalize,l=a+k(d),m=b+k(d);c.prototype[l]=function(){var a={};for(h=0;j>h;h++)i=e[h],a[i]=this.getAttr(d+k(i));return a},c.prototype[m]=function(a){var b,c=this.attrs[d];f&&(a=f.call(this,a));for(b in a)this._setAttr(d+k(b),a[b]);return this._fireChangeEvent(d,c,a),g&&g.call(this),this},this.addOverloadedGetterSetter(c,d)},addOverloadedGetterSetter:function(c,d){var e=Kinetic.Util._capitalize(d),f=b+e,g=a+e;c.prototype[d]=function(){return arguments.length?(this[f](arguments[0]),this):this[g]()}},backCompat:function(a,b){var c;for(c in b)a.prototype[c]=a.prototype[b[c]]},afterSetFilter:function(){this._filterUpToDate=!1}},Kinetic.Validators={RGBComponent:function(a){return a>255?255:0>a?0:Math.round(a)},alphaComponent:function(a){return a>1?1:1e-4>a?1e-4:a}}}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){var a="absoluteOpacity",b="absoluteTransform",c="Change",d="children",e=".",f="",g="get",h="id",i="kinetic",j="listening",k="mouseenter",l="mouseleave",m="name",n="set",o="Shape",p=" ",q="stage",r="transform",s="Stage",t="visible",u=["id"],v=["xChange.kinetic","yChange.kinetic","scaleXChange.kinetic","scaleYChange.kinetic","skewXChange.kinetic","skewYChange.kinetic","rotationChange.kinetic","offsetXChange.kinetic","offsetYChange.kinetic","transformsEnabledChange.kinetic"].join(p);Kinetic.Util.addMethods(Kinetic.Node,{_init:function(c){var d=this;this._id=Kinetic.idCounter++,this.eventListeners={},this.attrs={},this._cache={},this._filterUpToDate=!1,this.setAttrs(c),this.on(v,function(){this._clearCache(r),d._clearSelfAndDescendantCache(b)}),this.on("visibleChange.kinetic",function(){d._clearSelfAndDescendantCache(t)}),this.on("listeningChange.kinetic",function(){d._clearSelfAndDescendantCache(j)}),this.on("opacityChange.kinetic",function(){d._clearSelfAndDescendantCache(a)})},_clearCache:function(a){a?delete this._cache[a]:this._cache={}},_getCache:function(a,b){var c=this._cache[a];return void 0===c&&(this._cache[a]=b.call(this)),this._cache[a]},_clearSelfAndDescendantCache:function(a){this._clearCache(a),this.children&&this.getChildren().each(function(b){b._clearSelfAndDescendantCache(a)})},clearCache:function(){return delete this._cache.canvas,this._filterUpToDate=!1,this},cache:function(a){{var b=a||{},c=b.x||0,d=b.y||0,e=b.width||this.width(),f=b.height||this.height(),g=b.drawBorder||!1;this.getLayer()}if(0===e||0===f)return void Kinetic.Util.warn("Width or height of caching configuration equals 0. Cache is ignored.");var h=new Kinetic.SceneCanvas({pixelRatio:1,width:e,height:f}),i=new Kinetic.SceneCanvas({pixelRatio:1,width:e,height:f}),j=new Kinetic.HitCanvas({width:e,height:f}),k=(this.transformsEnabled(),this.x(),this.y(),h.getContext()),l=j.getContext();return this.clearCache(),k.save(),l.save(),g&&(k.save(),k.beginPath(),k.rect(0,0,e,f),k.closePath(),k.setAttr("strokeStyle","red"),k.setAttr("lineWidth",5),k.stroke(),k.restore()),k.translate(-1*c,-1*d),l.translate(-1*c,-1*d),"Shape"===this.nodeType&&(k.translate(-1*this.x(),-1*this.y()),l.translate(-1*this.x(),-1*this.y())),this.drawScene(h,this),this.drawHit(j,this),k.restore(),l.restore(),this._cache.canvas={scene:h,filter:i,hit:j},this},_drawCachedSceneCanvas:function(a){a.save(),this.getLayer()._applyTransform(this,a),a.drawImage(this._getCachedSceneCanvas()._canvas,0,0),a.restore()},_getCachedSceneCanvas:function(){var a,b,c,d,e=this.filters(),f=this._cache.canvas,g=f.scene,h=f.filter,i=h.getContext();if(e){if(!this._filterUpToDate){try{for(a=e.length,i.clear(),i.drawImage(g._canvas,0,0),b=i.getImageData(0,0,h.getWidth(),h.getHeight()),c=0;a>c;c++)d=e[c],d.call(this,b),i.putImageData(b,0,0)}catch(j){Kinetic.Util.warn("Unable to apply filter. "+j.message)}this._filterUpToDate=!0}return h}return g},_drawCachedHitCanvas:function(a){var b=this._cache.canvas,c=b.hit;a.save(),this.getLayer()._applyTransform(this,a),a.drawImage(c._canvas,0,0),a.restore()},on:function(a,b){var c,d,g,h,i,j=a.split(p),k=j.length;for(c=0;k>c;c++)d=j[c],g=d.split(e),h=g[0],i=g[1]||f,this.eventListeners[h]||(this.eventListeners[h]=[]),this.eventListeners[h].push({name:i,handler:b});return this},off:function(a){var b,c,d,f,g,h,i=a.split(p),j=i.length;for(b=0;j>b;b++)if(d=i[b],f=d.split(e),g=f[0],h=f[1],g)this.eventListeners[g]&&this._off(g,h);else for(c in this.eventListeners)this._off(c,h);return this},dispatchEvent:function(a){var b={target:this,type:a.type,evt:a};this.fire(a.type,b)},addEventListener:function(a,b){this.on(a,function(a){b.call(this,a.evt)})},remove:function(){var c=this.getParent();return c&&c.children&&(c.children.splice(this.index,1),c._setChildrenIndices(),delete this.parent),this._clearSelfAndDescendantCache(q),this._clearSelfAndDescendantCache(b),this._clearSelfAndDescendantCache(t),this._clearSelfAndDescendantCache(j),this._clearSelfAndDescendantCache(a),this},destroy:function(){Kinetic._removeId(this.getId()),Kinetic._removeName(this.getName(),this._id),this.remove()},getAttr:function(a){var b=g+Kinetic.Util._capitalize(a);return Kinetic.Util._isFunction(this[b])?this[b]():this.attrs[a]},getAncestors:function(){for(var a=this.getParent(),b=new Kinetic.Collection;a;)b.push(a),a=a.getParent();return b},getAttrs:function(){return this.attrs||{}},setAttrs:function(a){var b,c;if(a)for(b in a)b===d||(c=n+Kinetic.Util._capitalize(b),Kinetic.Util._isFunction(this[c])?this[c](a[b]):this._setAttr(b,a[b]));return this},isListening:function(){return this._getCache(j,this._isListening)},_isListening:function(){var a=this.getListening(),b=this.getParent();return"inherit"===a?b?b.isListening():!0:a},isVisible:function(){return this._getCache(t,this._isVisible)},_isVisible:function(){var a=this.getVisible(),b=this.getParent();return"inherit"===a?b?b.isVisible():!0:a},shouldDrawHit:function(){var a=this.getLayer();return a&&a.hitGraphEnabled()&&this.isListening()&&this.isVisible()&&!Kinetic.isDragging()},show:function(){return this.setVisible(!0),this},hide:function(){return this.setVisible(!1),this},getZIndex:function(){return this.index||0},getAbsoluteZIndex:function(){function a(i){for(b=[],c=i.length,d=0;c>d;d++)e=i[d],h++,e.nodeType!==o&&(b=b.concat(e.getChildren().toArray())),e._id===g._id&&(d=c);b.length>0&&b[0].getDepth()<=f&&a(b)}var b,c,d,e,f=this.getDepth(),g=this,h=0;return g.nodeType!==s&&a(g.getStage().getChildren()),h},getDepth:function(){for(var a=0,b=this.parent;b;)a++,b=b.parent;return a},setPosition:function(a){return this.setX(a.x),this.setY(a.y),this},getPosition:function(){return{x:this.getX(),y:this.getY()}},getAbsolutePosition:function(){var a=this.getAbsoluteTransform().getMatrix(),b=new Kinetic.Transform,c=this.offset();return b.m=a.slice(),b.translate(c.x,c.y),b.getTranslation()},setAbsolutePosition:function(a){var b,c=this._clearTransform();return this.attrs.x=c.x,this.attrs.y=c.y,delete c.x,delete c.y,b=this.getAbsoluteTransform(),b.invert(),b.translate(a.x,a.y),a={x:this.attrs.x+b.getTranslation().x,y:this.attrs.y+b.getTranslation().y},this.setPosition({x:a.x,y:a.y}),this._setTransform(c),this},_setTransform:function(a){var c;for(c in a)this.attrs[c]=a[c];this._clearCache(r),this._clearSelfAndDescendantCache(b)},_clearTransform:function(){var a={x:this.getX(),y:this.getY(),rotation:this.getRotation(),scaleX:this.getScaleX(),scaleY:this.getScaleY(),offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),skewX:this.getSkewX(),skewY:this.getSkewY()};return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,this._clearCache(r),this._clearSelfAndDescendantCache(b),a},move:function(a){var b=a.x,c=a.y,d=this.getX(),e=this.getY();return void 0!==b&&(d+=b),void 0!==c&&(e+=c),this.setPosition({x:d,y:e}),this},_eachAncestorReverse:function(a,b){var c,d,e=[],f=this.getParent();if(b&&b._id===this._id)return a(this),!0;for(e.unshift(this);f&&(!b||f._id!==b._id);)e.unshift(f),f=f.parent;for(c=e.length,d=0;c>d;d++)a(e[d])},rotate:function(a){return this.setRotation(this.getRotation()+a),this},moveToTop:function(){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. moveToTop function is ignored.");var a=this.index;return this.parent.children.splice(a,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0},moveUp:function(){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. moveUp function is ignored.");var a=this.index,b=this.parent.getChildren().length;return b-1>a?(this.parent.children.splice(a,1),this.parent.children.splice(a+1,0,this),this.parent._setChildrenIndices(),!0):!1},moveDown:function(){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. moveDown function is ignored.");var a=this.index;return a>0?(this.parent.children.splice(a,1),this.parent.children.splice(a-1,0,this),this.parent._setChildrenIndices(),!0):!1},moveToBottom:function(){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. moveToBottom function is ignored.");var a=this.index;return a>0?(this.parent.children.splice(a,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0):!1},setZIndex:function(a){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. zIndex parameter is ignored.");var b=this.index;return this.parent.children.splice(b,1),this.parent.children.splice(a,0,this),this.parent._setChildrenIndices(),this},getAbsoluteOpacity:function(){return this._getCache(a,this._getAbsoluteOpacity)},_getAbsoluteOpacity:function(){var a=this.getOpacity();return this.getParent()&&(a*=this.getParent().getAbsoluteOpacity()),a},moveTo:function(a){return Kinetic.Node.prototype.remove.call(this),a.add(this),this},toObject:function(){var a,b,c,d,e=Kinetic.Util,f={},g=this.getAttrs();f.attrs={};for(a in g)b=g[a],e._isFunction(b)||e._isElement(b)||e._isObject(b)&&e._hasMethods(b)||(c=this[a],delete g[a],d=c?c.call(this):null,g[a]=b,d!==b&&(f.attrs[a]=b));return f.className=this.getClassName(),f},toJSON:function(){return JSON.stringify(this.toObject())},getParent:function(){return this.parent},getLayer:function(){var a=this.getParent();return a?a.getLayer():null},getStage:function(){return this._getCache(q,this._getStage)},_getStage:function(){var a=this.getParent();return a?a.getStage():void 0},fire:function(a,b,c){return c?this._fireAndBubble(a,b||{}):this._fire(a,b||{}),this},getAbsoluteTransform:function(a){return a?this._getAbsoluteTransform(a):this._getCache(b,this._getAbsoluteTransform)},_getAbsoluteTransform:function(a){var b,c,d=new Kinetic.Transform;return this._eachAncestorReverse(function(a){b=a.transformsEnabled(),c=a.getTransform(),"all"===b?d.multiply(c):"position"===b&&d.translate(a.x(),a.y())},a),d},getTransform:function(){return this._getCache(r,this._getTransform)},_getTransform:function(){var a=new Kinetic.Transform,b=this.getX(),c=this.getY(),d=Kinetic.getAngle(this.getRotation()),e=this.getScaleX(),f=this.getScaleY(),g=this.getSkewX(),h=this.getSkewY(),i=this.getOffsetX(),j=this.getOffsetY();return(0!==b||0!==c)&&a.translate(b,c),0!==d&&a.rotate(d),(0!==g||0!==h)&&a.skew(g,h),(1!==e||1!==f)&&a.scale(e,f),(0!==i||0!==j)&&a.translate(-1*i,-1*j),a},clone:function(a){var b,c,d,e,f,g=this.getClassName(),h=Kinetic.Util.cloneObject(this.attrs);for(var j in u){var k=u[j];delete h[k]}for(b in a)h[b]=a[b];var l=new Kinetic[g](h);for(b in this.eventListeners)for(c=this.eventListeners[b],d=c.length,e=0;d>e;e++)f=c[e],f.name.indexOf(i)<0&&(l.eventListeners[b]||(l.eventListeners[b]=[]),l.eventListeners[b].push(f));return l},toDataURL:function(a){a=a||{};var b=a.mimeType||null,c=a.quality||null,d=this.getStage(),e=a.x||0,f=a.y||0,g=new Kinetic.SceneCanvas({width:a.width||this.getWidth()||(d?d.getWidth():0),height:a.height||this.getHeight()||(d?d.getHeight():0),pixelRatio:1}),h=g.getContext();return h.save(),(e||f)&&h.translate(-1*e,-1*f),this.drawScene(g),h.restore(),g.toDataURL(b,c)},toImage:function(a){Kinetic.Util._getImage(this.toDataURL(a),function(b){a.callback(b)})},setSize:function(a){return this.setWidth(a.width),this.setHeight(a.height),this},getSize:function(){return{width:this.getWidth(),height:this.getHeight()}},getWidth:function(){return this.attrs.width||0},getHeight:function(){return this.attrs.height||0},getClassName:function(){return this.className||this.nodeType},getType:function(){return this.nodeType},getDragDistance:function(){return void 0!==this.attrs.dragDistance?this.attrs.dragDistance:this.parent?this.parent.getDragDistance():Kinetic.dragDistance},_get:function(a){return this.nodeType===a?[this]:[]},_off:function(a,b){var c,d,e=this.eventListeners[a];for(c=0;c<e.length;c++)if(d=e[c].name,!("kinetic"===d&&"kinetic"!==b||b&&d!==b)){if(e.splice(c,1),0===e.length){delete this.eventListeners[a];break}c--}},_fireChangeEvent:function(a,b,d){this._fire(a+c,{oldVal:b,newVal:d})},setId:function(a){var b=this.getId();return Kinetic._removeId(b),Kinetic._addId(this,a),this._setAttr(h,a),this},setName:function(a){var b=this.getName();return Kinetic._removeName(b,this._id),Kinetic._addName(this,a),this._setAttr(m,a),this},setAttr:function(){var a=Array.prototype.slice.call(arguments),b=a[0],c=a[1],d=n+Kinetic.Util._capitalize(b),e=this[d];return Kinetic.Util._isFunction(e)?e.call(this,c):this._setAttr(b,c),this},_setAttr:function(a,b){var c;void 0!==b&&(c=this.attrs[a],this.attrs[a]=b,this._fireChangeEvent(a,c,b))},_setComponentAttr:function(a,b,c){var d;void 0!==c&&(d=this.attrs[a],d||(this.attrs[a]=this.getAttr(a)),this.attrs[a][b]=c,this._fireChangeEvent(a,d,c))},_fireAndBubble:function(a,b,c){var d=!0;b&&this.nodeType===o&&(b.target=this),a===k&&c&&this._id===c._id?d=!1:a===l&&c&&this._id===c._id&&(d=!1),d&&(this._fire(a,b),b&&!b.cancelBubble&&this.parent&&(c&&c.parent?this._fireAndBubble.call(this.parent,a,b,c.parent):this._fireAndBubble.call(this.parent,a,b)))},_fire:function(a,b){var c,d=this.eventListeners[a];if(b.type=a,d)for(c=0;c<d.length;c++)d[c].handler.call(this,b)},draw:function(){return this.drawScene(),this.drawHit(),this}}),Kinetic.Node.create=function(a,b){return this._createNode(JSON.parse(a),b)},Kinetic.Node._createNode=function(a,b){var c,d,e,f=Kinetic.Node.prototype.getClassName.call(a),g=a.children;if(b&&(a.attrs.container=b),c=new Kinetic[f](a.attrs),g)for(d=g.length,e=0;d>e;e++)c.add(this._createNode(g[e]));return c},Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"position"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"x",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"y",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"opacity",1),Kinetic.Factory.addGetter(Kinetic.Node,"name"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"name"),Kinetic.Factory.addGetter(Kinetic.Node,"id"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"id"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"rotation",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node,"scale",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Node,"scaleX",1),Kinetic.Factory.addGetterSetter(Kinetic.Node,"scaleY",1),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node,"skew",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Node,"skewX",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"skewY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node,"offset",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Node,"offsetX",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"offsetY",0),Kinetic.Factory.addSetter(Kinetic.Node,"dragDistance"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"dragDistance"),Kinetic.Factory.addSetter(Kinetic.Node,"width",0),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"width"),Kinetic.Factory.addSetter(Kinetic.Node,"height",0),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"height"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"listening","inherit"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"filters",void 0,function(a){return this._filterUpToDate=!1,a}),Kinetic.Factory.addGetterSetter(Kinetic.Node,"visible","inherit"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"transformsEnabled","all"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"size"),Kinetic.Factory.backCompat(Kinetic.Node,{rotateDeg:"rotate",setRotationDeg:"setRotation",getRotationDeg:"getRotation"}),Kinetic.Collection.mapMethods(Kinetic.Node)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){function a(a){Kinetic.root.setTimeout(a,1e3/60)}function b(){return e.apply(Kinetic.root,arguments)}var c=500,d=function(){return Kinetic.root.performance&&Kinetic.root.performance.now?function(){return Kinetic.root.performance.now()}:function(){return(new Date).getTime()}}(),e=function(){return Kinetic.root.requestAnimationFrame||Kinetic.root.webkitRequestAnimationFrame||Kinetic.root.mozRequestAnimationFrame||Kinetic.root.oRequestAnimationFrame||Kinetic.root.msRequestAnimationFrame||a}();Kinetic.Animation=function(a,b){var c=Kinetic.Animation;this.func=a,this.setLayers(b),this.id=c.animIdCounter++,this.frame={time:0,timeDiff:0,lastTime:d()}},Kinetic.Animation.prototype={setLayers:function(a){var b=[];b=a?a.length>0?a:[a]:[],this.layers=b},getLayers:function(){return this.layers},addLayer:function(a){var b,c,d=this.layers;if(d){for(b=d.length,c=0;b>c;c++)if(d[c]._id===a._id)return!1}else this.layers=[];return this.layers.push(a),!0},isRunning:function(){var a,b=Kinetic.Animation,c=b.animations,d=c.length;for(a=0;d>a;a++)if(c[a].id===this.id)return!0;return!1},start:function(){var a=Kinetic.Animation;this.stop(),this.frame.timeDiff=0,this.frame.lastTime=d(),a._addAnimation(this)},stop:function(){Kinetic.Animation._removeAnimation(this)},_updateFrameObject:function(a){this.frame.timeDiff=a-this.frame.lastTime,this.frame.lastTime=a,this.frame.time+=this.frame.timeDiff,this.frame.frameRate=1e3/this.frame.timeDiff}},Kinetic.Animation.animations=[],Kinetic.Animation.animIdCounter=0,Kinetic.Animation.animRunning=!1,Kinetic.Animation._addAnimation=function(a){this.animations.push(a),this._handleAnimation()},Kinetic.Animation._removeAnimation=function(a){var b,c=a.id,d=this.animations,e=d.length;for(b=0;e>b;b++)if(d[b].id===c){this.animations.splice(b,1);break}},Kinetic.Animation._runFrames=function(){var a,b,c,e,f,g,h,i,j={},k=this.animations;for(e=0;e<k.length;e++){for(a=k[e],b=a.layers,c=a.func,a._updateFrameObject(d()),g=b.length,f=0;g>f;f++)h=b[f],void 0!==h._id&&(j[h._id]=h);c&&c.call(a,a.frame)}for(i in j)j[i].draw()},Kinetic.Animation._animationLoop=function(){var a=Kinetic.Animation;a.animations.length?(b(a._animationLoop),a._runFrames()):a.animRunning=!1},Kinetic.Animation._handleAnimation=function(){var a=this;this.animRunning||(this.animRunning=!0,a._animationLoop())};var f=Kinetic.Node.prototype.moveTo;Kinetic.Node.prototype.moveTo=function(a){f.call(this,a)},Kinetic.Layer.prototype.batchDraw=function(){var a=this,b=Kinetic.Animation;this.batchAnim||(this.batchAnim=new b(function(){a.lastBatchDrawTime&&d()-a.lastBatchDrawTime>c&&a.batchAnim.stop()},this)),this.lastBatchDrawTime=d(),this.batchAnim.isRunning()||(this.draw(),this.batchAnim.start())},Kinetic.Stage.prototype.batchDraw=function(){this.getChildren().each(function(a){a.batchDraw()})}}((1,eval)("this"));/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){var a={node:1,duration:1,easing:1,onFinish:1,yoyo:1},b=1,c=2,d=3,e=0;Kinetic.Tween=function(b){var c,d=this,g=b.node,h=g._id,i=b.duration||1,j=b.easing||Kinetic.Easings.Linear,k=!!b.yoyo;this.node=g,this._id=e++,this.anim=new Kinetic.Animation(function(){d.tween.onEnterFrame()},g.getLayer()),this.tween=new f(c,function(a){d._tweenFunc(a)},j,0,1,1e3*i,k),this._addListeners(),Kinetic.Tween.attrs[h]||(Kinetic.Tween.attrs[h]={}),Kinetic.Tween.attrs[h][this._id]||(Kinetic.Tween.attrs[h][this._id]={}),Kinetic.Tween.tweens[h]||(Kinetic.Tween.tweens[h]={});for(c in b)void 0===a[c]&&this._addAttr(c,b[c]);this.reset(),this.onFinish=b.onFinish,this.onReset=b.onReset},Kinetic.Tween.attrs={},Kinetic.Tween.tweens={},Kinetic.Tween.prototype={_addAttr:function(a,b){var c,d,e,f,g,h=this.node,i=h._id;if(e=Kinetic.Tween.tweens[i][a],e&&delete Kinetic.Tween.attrs[i][e][a],c=h.getAttr(a),Kinetic.Util._isArray(b))for(d=[],g=b.length,f=0;g>f;f++)d.push(b[f]-c[f]);else d=b-c;Kinetic.Tween.attrs[i][this._id][a]={start:c,diff:d},Kinetic.Tween.tweens[i][a]=this._id},_tweenFunc:function(a){var b,c,d,e,f,g,h,i=this.node,j=Kinetic.Tween.attrs[i._id][this._id];for(b in j){if(c=j[b],d=c.start,e=c.diff,Kinetic.Util._isArray(d))for(f=[],h=d.length,g=0;h>g;g++)f.push(d[g]+e[g]*a);else f=d+e*a;i.setAttr(b,f)}},_addListeners:function(){var a=this;this.tween.onPlay=function(){a.anim.start()},this.tween.onReverse=function(){a.anim.start()},this.tween.onPause=function(){a.anim.stop()},this.tween.onFinish=function(){a.onFinish&&a.onFinish()},this.tween.onReset=function(){a.onReset&&a.onReset()}},play:function(){return this.tween.play(),this},reverse:function(){return this.tween.reverse(),this},reset:function(){this.node;return this.tween.reset(),this},seek:function(a){this.node;return this.tween.seek(1e3*a),this},pause:function(){return this.tween.pause(),this},finish:function(){this.node;return this.tween.finish(),this},destroy:function(){var a,b=this.node._id,c=this._id,d=Kinetic.Tween.tweens[b];this.pause();for(a in d)delete Kinetic.Tween.tweens[b][a];delete Kinetic.Tween.attrs[b][c]}};var f=function(a,b,c,d,e,f,g){this.prop=a,this.propFunc=b,this.begin=d,this._pos=d,this.duration=f,this._change=0,this.prevPos=0,this.yoyo=g,this._time=0,this._position=0,this._startTime=0,this._finish=0,this.func=c,this._change=e-this.begin,this.pause()};f.prototype={fire:function(a){var b=this[a];b&&b()},setTime:function(a){a>this.duration?this.yoyo?(this._time=this.duration,this.reverse()):this.finish():0>a?this.yoyo?(this._time=0,this.play()):this.reset():(this._time=a,this.update())},getTime:function(){return this._time},setPosition:function(a){this.prevPos=this._pos,this.propFunc(a),this._pos=a},getPosition:function(a){return void 0===a&&(a=this._time),this.func(a,this.begin,this._change,this.duration)},play:function(){this.state=c,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onPlay")},reverse:function(){this.state=d,this._time=this.duration-this._time,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onReverse")},seek:function(a){this.pause(),this._time=a,this.update(),this.fire("onSeek")},reset:function(){this.pause(),this._time=0,this.update(),this.fire("onReset")},finish:function(){this.pause(),this._time=this.duration,this.update(),this.fire("onFinish")},update:function(){this.setPosition(this.getPosition(this._time))},onEnterFrame:function(){var a=this.getTimer()-this._startTime;this.state===c?this.setTime(a):this.state===d&&this.setTime(this.duration-a)},pause:function(){this.state=b,this.fire("onPause")},getTimer:function(){return(new Date).getTime()}},Kinetic.Easings={BackEaseIn:function(a,b,c,d){var e=1.70158;return c*(a/=d)*a*((e+1)*a-e)+b},BackEaseOut:function(a,b,c,d){var e=1.70158;return c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},BackEaseInOut:function(a,b,c,d){var e=1.70158;return(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b},ElasticEaseIn:function(a,b,c,d,e,f){var g=0;return 0===a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),-(e*Math.pow(2,10*(a-=1))*Math.sin(2*(a*d-g)*Math.PI/f))+b)},ElasticEaseOut:function(a,b,c,d,e,f){var g=0;return 0===a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),e*Math.pow(2,-10*a)*Math.sin(2*(a*d-g)*Math.PI/f)+c+b)},ElasticEaseInOut:function(a,b,c,d,e,f){var g=0;return 0===a?b:2==(a/=d/2)?b+c:(f||(f=.3*d*1.5),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),1>a?-.5*e*Math.pow(2,10*(a-=1))*Math.sin(2*(a*d-g)*Math.PI/f)+b:e*Math.pow(2,-10*(a-=1))*Math.sin(2*(a*d-g)*Math.PI/f)*.5+c+b)},BounceEaseOut:function(a,b,c,d){return(a/=d)<1/2.75?7.5625*c*a*a+b:2/2.75>a?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:2.5/2.75>a?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},BounceEaseIn:function(a,b,c,d){return c-Kinetic.Easings.BounceEaseOut(d-a,0,c,d)+b},BounceEaseInOut:function(a,b,c,d){return d/2>a?.5*Kinetic.Easings.BounceEaseIn(2*a,0,c,d)+b:.5*Kinetic.Easings.BounceEaseOut(2*a-d,0,c,d)+.5*c+b},EaseIn:function(a,b,c,d){return c*(a/=d)*a+b},EaseOut:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},EaseInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},StrongEaseIn:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},StrongEaseOut:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},StrongEaseInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},Linear:function(a,b,c,d){return c*a/d+b}}}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){Kinetic.DD={anim:new Kinetic.Animation,isDragging:!1,offset:{x:0,y:0},node:null,_drag:function(a){var b=Kinetic.DD,c=b.node;if(c){if(!b.isDragging){var d=c.getStage().getPointerPosition(),e=c.dragDistance(),f=Math.max(Math.abs(d.x-b.startPointerPos.x),Math.abs(d.y-b.startPointerPos.y));if(e>f)return}c._setDragPosition(a),b.isDragging||(b.isDragging=!0,c.fire("dragstart",{type:"dragstart",target:c,evt:a},!0)),c.fire("dragmove",{type:"dragmove",target:c,evt:a},!0)}},_endDragBefore:function(a){var b,c,d=Kinetic.DD,e=d.node;e&&(b=e.nodeType,c=e.getLayer(),d.anim.stop(),d.isDragging&&(d.isDragging=!1,Kinetic.listenClickTap=!1,a&&(a.dragEndNode=e)),delete d.node,(c||e).draw())},_endDragAfter:function(a){a=a||{};var b=a.dragEndNode;a&&b&&b.fire("dragend",{type:"dragend",target:b,evt:a},!0)}},Kinetic.Node.prototype.startDrag=function(){var a=Kinetic.DD,b=this.getStage(),c=this.getLayer(),d=b.getPointerPosition(),e=this.getAbsolutePosition();d&&(a.node&&a.node.stopDrag(),a.node=this,a.startPointerPos=d,a.offset.x=d.x-e.x,a.offset.y=d.y-e.y,a.anim.setLayers(c||this.getLayers()),a.anim.start(),this._setDragPosition())},Kinetic.Node.prototype._setDragPosition=function(a){var b=Kinetic.DD,c=this.getStage().getPointerPosition(),d=this.getDragBoundFunc();if(c){var e={x:c.x-b.offset.x,y:c.y-b.offset.y};void 0!==d&&(e=d.call(this,e,a)),this.setAbsolutePosition(e)}},Kinetic.Node.prototype.stopDrag=function(){var a=Kinetic.DD,b={};a._endDragBefore(b),a._endDragAfter(b)},Kinetic.Node.prototype.setDraggable=function(a){this._setAttr("draggable",a),this._dragChange()};var a=Kinetic.Node.prototype.destroy;Kinetic.Node.prototype.destroy=function(){var b=Kinetic.DD;b.node&&b.node._id===this._id&&this.stopDrag(),a.call(this)},Kinetic.Node.prototype.isDragging=function(){var a=Kinetic.DD;return a.node&&a.node._id===this._id&&a.isDragging},Kinetic.Node.prototype._listenDrag=function(){var a=this;this._dragCleanup(),"Stage"===this.getClassName()?this.on("contentMousedown.kinetic contentTouchstart.kinetic",function(b){Kinetic.DD.node||a.startDrag(b)}):this.on("mousedown.kinetic touchstart.kinetic",function(b){Kinetic.DD.node||a.startDrag(b)})},Kinetic.Node.prototype._dragChange=function(){if(this.attrs.draggable)this._listenDrag();else{this._dragCleanup();var a=this.getStage(),b=Kinetic.DD;a&&b.node&&b.node._id===this._id&&b.node.stopDrag()}},Kinetic.Node.prototype._dragCleanup=function(){"Stage"===this.getClassName()?(this.off("contentMousedown.kinetic"),this.off("contentTouchstart.kinetic")):(this.off("mousedown.kinetic"),this.off("touchstart.kinetic"))},Kinetic.Factory.addGetterSetter(Kinetic.Node,"dragBoundFunc"),Kinetic.Factory.addGetter(Kinetic.Node,"draggable",!1),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"draggable");var b=Kinetic.document.documentElement;b.addEventListener("mouseup",Kinetic.DD._endDragBefore,!0),b.addEventListener("touchend",Kinetic.DD._endDragBefore,!0),b.addEventListener("mouseup",Kinetic.DD._endDragAfter,!1),b.addEventListener("touchend",Kinetic.DD._endDragAfter,!1)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){Kinetic.Util.addMethods(Kinetic.Container,{__init:function(a){this.children=new Kinetic.Collection,Kinetic.Node.call(this,a)},getChildren:function(a){if(a){var b=new Kinetic.Collection;return this.children.each(function(c){a(c)&&b.push(c)}),b}return this.children},hasChildren:function(){return this.getChildren().length>0},removeChildren:function(){for(var a,b=Kinetic.Collection.toCollection(this.children),c=0;c<b.length;c++)a=b[c],delete a.parent,a.index=0,a.hasChildren()&&a.removeChildren(),a.remove();return b=null,this.children=new Kinetic.Collection,this},destroyChildren:function(){for(var a,b=Kinetic.Collection.toCollection(this.children),c=0;c<b.length;c++)a=b[c],delete a.parent,a.index=0,a.destroy();return b=null,this.children=new Kinetic.Collection,this},add:function(a){if(!(arguments.length>1)){if(a.getParent())return void a.moveTo(this);var b=this.children;return this._validateAdd(a),a.index=b.length,a.parent=this,b.push(a),this._fire("add",{child:a}),this}for(var c=0;c<arguments.length;c++)this.add(arguments[c])},destroy:function(){this.hasChildren()&&this.destroyChildren(),Kinetic.Node.prototype.destroy.call(this)},find:function(a){var b,c,d,e,f,g,h,i=[],j=a.replace(/ /g,"").split(","),k=j.length;for(b=0;k>b;b++)if(d=j[b],"#"===d.charAt(0))f=this._getNodeById(d.slice(1)),f&&i.push(f);else if("."===d.charAt(0))e=this._getNodesByName(d.slice(1)),i=i.concat(e);else for(g=this.getChildren(),h=g.length,c=0;h>c;c++)i=i.concat(g[c]._get(d));return Kinetic.Collection.toCollection(i)},_getNodeById:function(a){var b=Kinetic.ids[a];return void 0!==b&&this.isAncestorOf(b)?b:null},_getNodesByName:function(a){var b=Kinetic.names[a]||[];return this._getDescendants(b)},_get:function(a){for(var b=Kinetic.Node.prototype._get.call(this,a),c=this.getChildren(),d=c.length,e=0;d>e;e++)b=b.concat(c[e]._get(a));return b},toObject:function(){var a=Kinetic.Node.prototype.toObject.call(this);a.children=[];for(var b=this.getChildren(),c=b.length,d=0;c>d;d++){var e=b[d];a.children.push(e.toObject())}return a},_getDescendants:function(a){for(var b=[],c=a.length,d=0;c>d;d++){var e=a[d];this.isAncestorOf(e)&&b.push(e)}return b},isAncestorOf:function(a){for(var b=a.getParent();b;){if(b._id===this._id)return!0;b=b.getParent()}return!1},clone:function(a){var b=Kinetic.Node.prototype.clone.call(this,a);return this.getChildren().each(function(a){b.add(a.clone())}),b},getAllIntersections:function(a){var b=[];return this.find("Shape").each(function(c){c.isVisible()&&c.intersects(a)&&b.push(c)}),b},_setChildrenIndices:function(){this.children.each(function(a,b){a.index=b})},drawScene:function(a,b){var c=this.getLayer(),d=a||c&&c.getCanvas(),e=d&&d.getContext(),f=this._cache.canvas,g=f&&f.scene;return this.isVisible()&&(g?this._drawCachedSceneCanvas(e):this._drawChildren(d,"drawScene",b)),this},drawHit:function(a,b){var c=this.getLayer(),d=a||c&&c.hitCanvas,e=d&&d.getContext(),f=this._cache.canvas,g=f&&f.hit;return this.shouldDrawHit()&&(g?this._drawCachedHitCanvas(e):this._drawChildren(d,"drawHit",b)),this},_drawChildren:function(a,b,c){var d,e,f=this.getLayer(),g=a&&a.getContext(),h=this.getClipWidth(),i=this.getClipHeight(),j=h&&i;j&&f&&(d=this.getClipX(),e=this.getClipY(),g.save(),f._applyTransform(this,g),g.beginPath(),g.rect(d,e,h,i),g.clip(),g.reset()),this.children.each(function(d){d[b](a,c)}),j&&g.restore()}}),Kinetic.Util.extend(Kinetic.Container,Kinetic.Node),Kinetic.Container.prototype.get=Kinetic.Container.prototype.find,Kinetic.Factory.addComponentsGetterSetter(Kinetic.Container,"clip",["x","y","width","height"]),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipX"),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipY"),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipWidth"),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipHeight"),Kinetic.Collection.mapMethods(Kinetic.Container)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){function a(a){a.fill()}function b(a){a.stroke()}function c(a){a.fill()}function d(a){a.stroke()}function e(){this._clearCache(f)}var f="hasShadow";Kinetic.Util.addMethods(Kinetic.Shape,{__init:function(f){this.nodeType="Shape",this._fillFunc=a,this._strokeFunc=b,this._fillFuncHit=c,this._strokeFuncHit=d;for(var g,h=Kinetic.shapes;;)if(g=Kinetic.Util.getRandomColor(),g&&!(g in h))break;this.colorKey=g,h[g]=this,Kinetic.Node.call(this,f),this.on("shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChange.kinetic",e)},hasChildren:function(){return!1},getChildren:function(){return[]},getContext:function(){return this.getLayer().getContext()},getCanvas:function(){return this.getLayer().getCanvas()},hasShadow:function(){return this._getCache(f,this._hasShadow)},_hasShadow:function(){return this.getShadowEnabled()&&0!==this.getShadowOpacity()&&!!(this.getShadowColor()||this.getShadowBlur()||this.getShadowOffsetX()||this.getShadowOffsetY())},hasFill:function(){return!!(this.getFill()||this.getFillPatternImage()||this.getFillLinearGradientColorStops()||this.getFillRadialGradientColorStops())},hasStroke:function(){return!!(this.stroke()||this.strokeRed()||this.strokeGreen()||this.strokeBlue())},_get:function(a){return this.className===a||this.nodeType===a?[this]:[]},intersects:function(a){var b,c=this.getStage(),d=c.bufferHitCanvas;return d.getContext().clear(),this.drawScene(d),b=d.context.getImageData(Math.round(a.x),Math.round(a.y),1,1).data,b[3]>0},destroy:function(){Kinetic.Node.prototype.destroy.call(this),delete Kinetic.shapes[this.colorKey]},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasFill()&&this.hasStroke()&&this.getStage()},drawScene:function(a,b){var c,d,e,f=this.getLayer(),g=a||f.getCanvas(),h=g.getContext(),i=this._cache.canvas,j=this.sceneFunc(),k=this.hasShadow();return this.isVisible()&&(i?this._drawCachedSceneCanvas(h):j&&(h.save(),this._useBufferCanvas()?(c=this.getStage(),d=c.bufferCanvas,e=d.getContext(),e.clear(),e.save(),e._applyLineJoin(this),f._applyTransform(this,e,b),j.call(this,e),e.restore(),k&&(h.save(),h._applyShadow(this),h.drawImage(d._canvas,0,0),h.restore()),h._applyOpacity(this),h.drawImage(d._canvas,0,0)):(h._applyLineJoin(this),f._applyTransform(this,h,b),k&&(h.save(),h._applyShadow(this),j.call(this,h),h.restore()),h._applyOpacity(this),j.call(this,h)),h.restore())),this},drawHit:function(a,b){var c=this.getLayer(),d=a||c.hitCanvas,e=d.getContext(),f=this.hitFunc()||this.sceneFunc(),g=this._cache.canvas,h=g&&g.hit;return this.shouldDrawHit()&&(h?this._drawCachedHitCanvas(e):f&&(e.save(),e._applyLineJoin(this),c._applyTransform(this,e,b),f.call(this,e),e.restore())),this},drawHitFromCache:function(a){var b,c,d,e,f,g,h,i,j=a||0,k=this._cache.canvas,l=this._getCachedSceneCanvas(),m=l.getContext(),n=k.hit,o=n.getContext(),p=l.getWidth(),q=l.getHeight();o.clear();try{for(b=m.getImageData(0,0,p,q),c=b.data,d=o.getImageData(0,0,p,q),e=d.data,f=c.length,g=Kinetic.Util._hexToRgb(this.colorKey),h=0;f>h;h+=4)i=c[h+3],i>j&&(e[h]=g.r,e[h+1]=g.g,e[h+2]=g.b,e[h+3]=255);o.putImageData(d,0,0)}catch(r){Kinetic.Util.warn("Unable to draw hit graph from cached scene canvas. "+r.message)}return this}}),Kinetic.Util.extend(Kinetic.Shape,Kinetic.Node),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"stroke"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeRed",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeGreen",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeBlue",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeAlpha",1,Kinetic.Validators.alphaComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeWidth",2),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"lineJoin"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"lineCap"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"sceneFunc"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"hitFunc"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"dash"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowColor"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowRed",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowGreen",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowBlue",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowAlpha",1,Kinetic.Validators.alphaComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowBlur"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowOpacity"),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"shadowOffset",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowOffsetX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowOffsetY",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternImage"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fill"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRed",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillGreen",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillBlue",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillAlpha",1,Kinetic.Validators.alphaComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternY",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientColorStops"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientColorStops"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternRepeat","repeat"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"dashEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeScaleEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPriority","color"),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillPatternOffset",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternOffsetX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternOffsetY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillPatternScale",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternScaleX",1),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternScaleY",1),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillLinearGradientStartPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientStartPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientStartPointY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillLinearGradientEndPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientEndPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientEndPointY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillRadialGradientStartPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartPointY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillRadialGradientEndPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndPointY",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternRotation",0),Kinetic.Factory.backCompat(Kinetic.Shape,{dashArray:"dash",getDashArray:"getDash",setDashArray:"getDash",drawFunc:"sceneFunc",getDrawFunc:"getSceneFunc",setDrawFunc:"setSceneFunc",drawHitFunc:"hitFunc",getDrawHitFunc:"getHitFunc",setDrawHitFunc:"setHitFunc"}),Kinetic.Collection.mapMethods(Kinetic.Shape)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){function a(a,b){a.content.addEventListener(b,function(c){a[I+b](c)},!1)}var b="Stage",c="string",d="px",e="mouseout",f="mouseleave",g="mouseover",h="mouseenter",i="mousemove",j="mousedown",k="mouseup",l="click",m="dblclick",n="touchstart",o="touchend",p="tap",q="dbltap",r="touchmove",s="contentMouseout",t="contentMouseover",u="contentMousemove",v="contentMousedown",w="contentMouseup",x="contentClick",y="contentDblclick",z="contentTouchstart",A="contentTouchend",B="contentDbltap",C="contentTouchmove",D="div",E="relative",F="inline-block",G="kineticjs-content",H=" ",I="_",J="container",K="",L=[j,i,k,e,n,r,o,g],M=L.length;Kinetic.Util.addMethods(Kinetic.Stage,{___init:function(a){this.nodeType=b,Kinetic.Container.call(this,a),this._id=Kinetic.idCounter++,this._buildDOM(),this._bindContentEvents(),this._enableNestedTransforms=!1,Kinetic.stages.push(this)},_validateAdd:function(a){"Layer"!==a.getType()&&Kinetic.Util.error("You may only add layers to the stage.")},setContainer:function(a){if(typeof a===c){var b=a;if(a=Kinetic.document.getElementById(a),!a)throw"Can not find container in document with id "+b}return this._setAttr(J,a),this},shouldDrawHit:function(){return!0},draw:function(){return Kinetic.Node.prototype.draw.call(this),this},setHeight:function(a){return Kinetic.Node.prototype.setHeight.call(this,a),this._resizeDOM(),this},setWidth:function(a){return Kinetic.Node.prototype.setWidth.call(this,a),this._resizeDOM(),this},clear:function(){var a,b=this.children,c=b.length;for(a=0;c>a;a++)b[a].clear();return this},clone:function(a){return a||(a={}),a.container=Kinetic.document.createElement(D),Kinetic.Container.prototype.clone.call(this,a)},destroy:function(){var a=this.content;Kinetic.Container.prototype.destroy.call(this),a&&Kinetic.Util._isInDocument(a)&&this.getContainer().removeChild(a);var b=Kinetic.stages.indexOf(this);b>-1&&Kinetic.stages.splice(b,1)},getPointerPosition:function(){return this.pointerPos},getStage:function(){return this},getContent:function(){return this.content},toDataURL:function(a){function b(e){var f=i[e],j=f.toDataURL(),k=new Kinetic.window.Image;k.onload=function(){h.drawImage(k,0,0),e<i.length-1?b(e+1):a.callback(g.toDataURL(c,d))},k.src=j}a=a||{};var c=a.mimeType||null,d=a.quality||null,e=a.x||0,f=a.y||0,g=new Kinetic.SceneCanvas({width:a.width||this.getWidth(),height:a.height||this.getHeight(),pixelRatio:1}),h=g.getContext()._context,i=this.children;(e||f)&&h.translate(-1*e,-1*f),b(0)},toImage:function(a){var b=a.callback;a.callback=function(a){Kinetic.Util._getImage(a,function(a){b(a)})},this.toDataURL(a)},getIntersection:function(a){var b,c,d=this.getChildren(),e=d.length,f=e-1;for(b=f;b>=0;b--)if(c=d[b].getIntersection(a))return c;return null},_resizeDOM:function(){if(this.content){var a,b,c=this.getWidth(),e=this.getHeight(),f=this.getChildren(),g=f.length;for(this.content.style.width=c+d,this.content.style.height=e+d,this.bufferCanvas.setSize(c,e),this.bufferHitCanvas.setSize(c,e),a=0;g>a;a++)b=f[a],b.getCanvas().setSize(c,e),b.hitCanvas.setSize(c,e),b.draw()}},add:function(a){if(!(arguments.length>1))return Kinetic.Container.prototype.add.call(this,a),a._setCanvasSize(this.width(),this.height()),a.draw(),this.content.appendChild(a.canvas._canvas),this;for(var b=0;b<arguments.length;b++)this.add(arguments[b])},getParent:function(){return null},getLayer:function(){return null},getLayers:function(){return this.getChildren()},_bindContentEvents:function(){for(var b=0;M>b;b++)a(this,L[b])},_mouseover:function(a){Kinetic.UA.mobile||(this._setPointerPosition(a),this._fire(t,{evt:a}))},_mouseout:function(a){if(!Kinetic.UA.mobile){this._setPointerPosition(a);var b=this.targetShape;b&&!Kinetic.isDragging()&&(b._fireAndBubble(e,{evt:a}),b._fireAndBubble(f,{evt:a}),this.targetShape=null),this.pointerPos=void 0,this._fire(s,{evt:a})}},_mousemove:function(a){if(!Kinetic.UA.mobile){this._setPointerPosition(a);var b=Kinetic.DD,c=this.getIntersection(this.getPointerPosition());c&&c.isListening()?Kinetic.isDragging()||this.targetShape&&this.targetShape._id===c._id?c._fireAndBubble(i,{evt:a}):(this.targetShape&&(this.targetShape._fireAndBubble(e,{evt:a},c),this.targetShape._fireAndBubble(f,{evt:a},c)),c._fireAndBubble(g,{evt:a},this.targetShape),c._fireAndBubble(h,{evt:a},this.targetShape),this.targetShape=c):this.targetShape&&!Kinetic.isDragging()&&(this.targetShape._fireAndBubble(e,{evt:a}),this.targetShape._fireAndBubble(f,{evt:a}),this.targetShape=null),this._fire(u,{evt:a}),b&&b._drag(a)}a.preventDefault&&a.preventDefault()},_mousedown:function(a){if(!Kinetic.UA.mobile){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition());Kinetic.listenClickTap=!0,b&&b.isListening()&&(this.clickStartShape=b,b._fireAndBubble(j,{evt:a})),this._fire(v,{evt:a})}a.preventDefault&&a.preventDefault()},_mouseup:function(a){if(!Kinetic.UA.mobile){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition()),c=this.clickStartShape,d=!1;Kinetic.inDblClickWindow?(d=!0,Kinetic.inDblClickWindow=!1):Kinetic.inDblClickWindow=!0,setTimeout(function(){Kinetic.inDblClickWindow=!1},Kinetic.dblClickWindow),b&&b.isListening()&&(b._fireAndBubble(k,{evt:a}),Kinetic.listenClickTap&&c&&c._id===b._id&&(b._fireAndBubble(l,{evt:a}),d&&b._fireAndBubble(m,{evt:a}))),this._fire(w,{evt:a}),Kinetic.listenClickTap&&(this._fire(x,{evt:a}),d&&this._fire(y,{evt:a})),Kinetic.listenClickTap=!1}a.preventDefault&&a.preventDefault()},_touchstart:function(a){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition());Kinetic.listenClickTap=!0,b&&b.isListening()&&(this.tapStartShape=b,b._fireAndBubble(n,{evt:a}),b.isListening()&&a.preventDefault&&a.preventDefault()),this._fire(z,{evt:a})},_touchend:function(a){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition()),c=!1;Kinetic.inDblClickWindow?(c=!0,Kinetic.inDblClickWindow=!1):Kinetic.inDblClickWindow=!0,setTimeout(function(){Kinetic.inDblClickWindow=!1},Kinetic.dblClickWindow),b&&b.isListening()&&(b._fireAndBubble(o,{evt:a}),Kinetic.listenClickTap&&b._id===this.tapStartShape._id&&(b._fireAndBubble(p,{evt:a}),c&&b._fireAndBubble(q,{evt:a})),b.isListening()&&a.preventDefault&&a.preventDefault()),Kinetic.listenClickTap&&(this._fire(A,{evt:a}),c&&this._fire(B,{evt:a})),Kinetic.listenClickTap=!1},_touchmove:function(a){this._setPointerPosition(a);var b=Kinetic.DD,c=this.getIntersection(this.getPointerPosition());c&&c.isListening()&&(c._fireAndBubble(r,{evt:a}),c.isListening()&&a.preventDefault&&a.preventDefault()),this._fire(C,{evt:a}),b&&b._drag(a)},_setPointerPosition:function(a){var b,c=this._getContentPosition(),d=a.offsetX,e=a.clientX,f=null,g=null;a=a?a:window.event,void 0!==a.touches?a.touches.length>0&&(b=a.touches[0],f=b.clientX-c.left,g=b.clientY-c.top):void 0!==d?(f=d,g=a.offsetY):"mozilla"===Kinetic.UA.browser?(f=a.layerX,g=a.layerY):void 0!==e&&c&&(f=e-c.left,g=a.clientY-c.top),null!==f&&null!==g&&(this.pointerPos={x:f,y:g})},_getContentPosition:function(){var a=this.content.getBoundingClientRect?this.content.getBoundingClientRect():{top:0,left:0};return{top:a.top,left:a.left}},_buildDOM:function(){var a=this.getContainer();if(!a){if(Kinetic.Util.isBrowser())throw"Stage has not container. But container is required";a=Kinetic.document.createElement(D)}a.innerHTML=K,this.content=Kinetic.document.createElement(D),this.content.style.position=E,this.content.style.display=F,this.content.className=G,this.content.setAttribute("role","presentation"),a.appendChild(this.content),this.bufferCanvas=new Kinetic.SceneCanvas({pixelRatio:1}),this.bufferHitCanvas=new Kinetic.HitCanvas,this._resizeDOM()},_onContent:function(a,b){var c,d,e=a.split(H),f=e.length;for(c=0;f>c;c++)d=e[c],this.content.addEventListener(d,b,!1)},cache:function(){Kinetic.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.")},clearCache:function(){}}),Kinetic.Util.extend(Kinetic.Stage,Kinetic.Container),Kinetic.Factory.addGetter(Kinetic.Stage,"container"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Stage,"container")}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){Kinetic.Util.addMethods(Kinetic.BaseLayer,{___init:function(a){this.nodeType="Layer",Kinetic.Container.call(this,a)},createPNGStream:function(){return this.canvas._canvas.createPNGStream()},getCanvas:function(){return this.canvas},getHitCanvas:function(){return this.hitCanvas},getContext:function(){return this.getCanvas().getContext()},clear:function(a){return this.getContext().clear(a),this.getHitCanvas().getContext().clear(a),this},setZIndex:function(a){Kinetic.Node.prototype.setZIndex.call(this,a);var b=this.getStage();return b&&(b.content.removeChild(this.getCanvas()._canvas),a<b.getChildren().length-1?b.content.insertBefore(this.getCanvas()._canvas,b.getChildren()[a+1].getCanvas()._canvas):b.content.appendChild(this.getCanvas()._canvas)),this},moveToTop:function(){Kinetic.Node.prototype.moveToTop.call(this);var a=this.getStage();a&&(a.content.removeChild(this.getCanvas()._canvas),a.content.appendChild(this.getCanvas()._canvas))},moveUp:function(){if(Kinetic.Node.prototype.moveUp.call(this)){var a=this.getStage();a&&(a.content.removeChild(this.getCanvas()._canvas),this.index<a.getChildren().length-1?a.content.insertBefore(this.getCanvas()._canvas,a.getChildren()[this.index+1].getCanvas()._canvas):a.content.appendChild(this.getCanvas()._canvas))}},moveDown:function(){if(Kinetic.Node.prototype.moveDown.call(this)){var a=this.getStage();if(a){var b=a.getChildren();a.content.removeChild(this.getCanvas()._canvas),a.content.insertBefore(this.getCanvas()._canvas,b[this.index+1].getCanvas()._canvas)}}},moveToBottom:function(){if(Kinetic.Node.prototype.moveToBottom.call(this)){var a=this.getStage();if(a){var b=a.getChildren();a.content.removeChild(this.getCanvas()._canvas),a.content.insertBefore(this.getCanvas()._canvas,b[1].getCanvas()._canvas)}}},getLayer:function(){return this},remove:function(){var a=this.getCanvas()._canvas;return Kinetic.Node.prototype.remove.call(this),a&&a.parentNode&&Kinetic.Util._isInDocument(a)&&a.parentNode.removeChild(a),this},getStage:function(){return this.parent}}),Kinetic.Util.extend(Kinetic.BaseLayer,Kinetic.Container),Kinetic.Factory.addGetterSetter(Kinetic.BaseLayer,"clearBeforeDraw",!0),Kinetic.Collection.mapMethods(Kinetic.BaseLayer)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){Kinetic.Util.addMethods(Kinetic.FastLayer,{____init:function(a){this.nodeType="Layer",this.canvas=new Kinetic.SceneCanvas,Kinetic.BaseLayer.call(this,a)},_validateAdd:function(a){var b=a.getType();"Shape"!==b&&Kinetic.Util.error("You may only add shapes to a fast layer.")},_setCanvasSize:function(a,b){this.canvas.setSize(a,b)},hitGraphEnabled:function(){return!1},getIntersection:function(){return null},drawScene:function(a){var b=this.getLayer(),c=a||b&&b.getCanvas();return this.getClearBeforeDraw()&&c.getContext().clear(),Kinetic.Container.prototype.drawScene.call(this,c),this},_applyTransform:function(a,b,c){if(!c||c._id!==this._id){var d=a.getTransform().getMatrix();b.transform(d[0],d[1],d[2],d[3],d[4],d[5])}},draw:function(){return this.drawScene(),this},clear:function(a){return this.getContext().clear(a),this},setVisible:function(a){return Kinetic.Node.prototype.setVisible.call(this,a),this.getCanvas()._canvas.style.display=a?"block":"none",this}}),Kinetic.Util.extend(Kinetic.FastLayer,Kinetic.BaseLayer),Kinetic.Collection.mapMethods(Kinetic.FastLayer)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){var a="#",b="beforeDraw",c="draw",d=[{x:0,y:0},{x:-1,y:0},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:-1,y:1}],e=d.length;Kinetic.Util.addMethods(Kinetic.Layer,{____init:function(a){this.nodeType="Layer",this.canvas=new Kinetic.SceneCanvas,this.hitCanvas=new Kinetic.HitCanvas,Kinetic.BaseLayer.call(this,a)},_setCanvasSize:function(a,b){this.canvas.setSize(a,b),this.hitCanvas.setSize(a,b)},_validateAdd:function(a){var b=a.getType();"Group"!==b&&"Shape"!==b&&Kinetic.Util.error("You may only add groups and shapes to a layer.")},getIntersection:function(a){var b,c,f,g;if(!this.hitGraphEnabled()||!this.isVisible())return null;for(c=0;e>c;c++){if(f=d[c],b=this._getIntersection({x:a.x+f.x,y:a.y+f.y}),g=b.shape)return g;if(!b.antialiased)return null}},_getIntersection:function(b){var c,d,e=this.hitCanvas.context._context.getImageData(b.x,b.y,1,1).data,f=e[3];return 255===f?(c=Kinetic.Util._rgbToHex(e[0],e[1],e[2]),d=Kinetic.shapes[a+c],{shape:d}):f>0?{antialiased:!0}:{}},drawScene:function(a,d){var e=this.getLayer(),f=a||e&&e.getCanvas();return this._fire(b,{node:this}),this.getClearBeforeDraw()&&f.getContext().clear(),Kinetic.Container.prototype.drawScene.call(this,f,d),this._fire(c,{node:this}),this},_applyTransform:function(a,b,c){var d=a.getAbsoluteTransform(c).getMatrix();b.transform(d[0],d[1],d[2],d[3],d[4],d[5])},drawHit:function(a,b){var c=this.getLayer(),d=a||c&&c.hitCanvas;return c&&c.getClearBeforeDraw()&&c.getHitCanvas().getContext().clear(),Kinetic.Container.prototype.drawHit.call(this,d,b),this},clear:function(a){return this.getContext().clear(a),this.getHitCanvas().getContext().clear(a),this},setVisible:function(a){return Kinetic.Node.prototype.setVisible.call(this,a),a?(this.getCanvas()._canvas.style.display="block",this.hitCanvas._canvas.style.display="block"):(this.getCanvas()._canvas.style.display="none",this.hitCanvas._canvas.style.display="none"),this},enableHitGraph:function(){return this.setHitGraphEnabled(!0),this},disableHitGraph:function(){return this.setHitGraphEnabled(!1),this}}),Kinetic.Util.extend(Kinetic.Layer,Kinetic.BaseLayer),Kinetic.Factory.addGetterSetter(Kinetic.Layer,"hitGraphEnabled",!0),Kinetic.Collection.mapMethods(Kinetic.Layer)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){Kinetic.Util.addMethods(Kinetic.Group,{___init:function(a){this.nodeType="Group",Kinetic.Container.call(this,a)},_validateAdd:function(a){var b=a.getType();"Group"!==b&&"Shape"!==b&&Kinetic.Util.error("You may only add groups and shapes to groups.")}}),Kinetic.Util.extend(Kinetic.Group,Kinetic.Container),Kinetic.Collection.mapMethods(Kinetic.Group)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){Kinetic.Rect=function(a){this.___init(a)},Kinetic.Rect.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Rect",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.getCornerRadius(),c=this.getWidth(),d=this.getHeight();a.beginPath(),b?(a.moveTo(b,0),a.lineTo(c-b,0),a.arc(c-b,b,b,3*Math.PI/2,0,!1),a.lineTo(c,d-b),a.arc(c-b,d-b,b,0,Math.PI/2,!1),a.lineTo(b,d),a.arc(b,d-b,b,Math.PI/2,Math.PI,!1),a.lineTo(0,b),a.arc(b,b,b,Math.PI,3*Math.PI/2,!1)):a.rect(0,0,c,d),a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Rect,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Rect,"cornerRadius",0),Kinetic.Collection.mapMethods(Kinetic.Rect)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){var a=2*Math.PI-1e-4,b="Circle";Kinetic.Circle=function(a){this.___init(a)},Kinetic.Circle.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className=b,this.sceneFunc(this._sceneFunc)},_sceneFunc:function(b){b.beginPath(),b.arc(0,0,this.getRadius(),0,a,!1),b.closePath(),b.fillStrokeShape(this)},getWidth:function(){return 2*this.getRadius()},getHeight:function(){return 2*this.getRadius()},setWidth:function(a){Kinetic.Node.prototype.setWidth.call(this,a),this.setRadius(a/2)},setHeight:function(a){Kinetic.Node.prototype.setHeight.call(this,a),this.setRadius(a/2)}},Kinetic.Util.extend(Kinetic.Circle,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Circle,"radius",0),Kinetic.Collection.mapMethods(Kinetic.Circle)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){var a="Image";Kinetic.Image=function(a){this.___init(a)},Kinetic.Image.prototype={___init:function(b){Kinetic.Shape.call(this,b),this.className=a,this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasStroke()},_sceneFunc:function(a){var b,c,d,e,f=this.getWidth(),g=this.getHeight(),h=this.getImage();h&&(b=this.getCrop(),c=b.width,d=b.height,e=c&&d?[h,b.x,b.y,c,d,0,0,f,g]:[h,0,0,f,g]),a.beginPath(),a.rect(0,0,f,g),a.closePath(),a.fillStrokeShape(this),h&&a.drawImage.apply(a,e)},_hitFunc:function(a){var b=this.getWidth(),c=this.getHeight();a.beginPath(),a.rect(0,0,b,c),a.closePath(),a.fillStrokeShape(this)},getWidth:function(){var a=this.getImage();return this.attrs.width||(a?a.width:0)},getHeight:function(){var a=this.getImage();return this.attrs.height||(a?a.height:0)}},Kinetic.Util.extend(Kinetic.Image,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Image,"image"),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Image,"crop",["x","y","width","height"]),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropX",0),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropY",0),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropWidth",0),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropHeight",0),Kinetic.Collection.mapMethods(Kinetic.Image)}();/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
!function(){function a(a){a.fillText(this.partialText,0,0)}function b(a){a.strokeText(this.partialText,0,0)}var c="auto",d="center",e="Change.kinetic",f="2d",g="-",h="",i="left",j="text",k="Text",l="middle",m="normal",n="px ",o=" ",p="right",q="word",r="char",s="none",t=["fontFamily","fontSize","fontStyle","fontVariant","padding","align","lineHeight","text","width","height","wrap"],u=t.length,v=Kinetic.Util.createCanvasElement().getContext(f);Kinetic.Text=function(a){this.___init(a)},Kinetic.Text.prototype={___init:function(d){var f=this;void 0===d.width&&(d.width=c),void 0===d.height&&(d.height=c),Kinetic.Shape.call(this,d),this._fillFunc=a,this._strokeFunc=b,this.className=k;for(var g=0;u>g;g++)this.on(t[g]+e,f._setTextData);this._setTextData(),this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_sceneFunc:function(a){var b,c=this.getPadding(),e=this.getTextHeight(),f=this.getLineHeight()*e,g=this.textArr,h=g.length,j=this.getWidth();for(a.setAttr("font",this._getContextFont()),a.setAttr("textBaseline",l),a.setAttr("textAlign",i),a.save(),a.translate(c,0),a.translate(0,c+e/2),b=0;h>b;b++){var k=g[b],m=k.text,n=k.width;a.save(),this.getAlign()===p?a.translate(j-n-2*c,0):this.getAlign()===d&&a.translate((j-n-2*c)/2,0),this.partialText=m,a.fillStrokeShape(this),a.restore(),a.translate(0,f)}a.restore()},_hitFunc:function(a){var b=this.getWidth(),c=this.getHeight();a.beginPath(),a.rect(0,0,b,c),a.closePath(),a.fillStrokeShape(this)},setText:function(a){var b=Kinetic.Util._isString(a)?a:a.toString();return this._setAttr(j,b),this},getWidth:function(){return this.attrs.width===c?this.getTextWidth()+2*this.getPadding():this.attrs.width},getHeight:function(){return this.attrs.height===c?this.getTextHeight()*this.textArr.length*this.getLineHeight()+2*this.getPadding():this.attrs.height},getTextWidth:function(){return this.textWidth},getTextHeight:function(){return this.textHeight},_getTextSize:function(a){var b,c=v,d=this.getFontSize();return c.save(),c.font=this._getContextFont(),b=c.measureText(a),c.restore(),{width:b.width,height:parseInt(d,10)}},_getContextFont:function(){return this.getFontStyle()+o+this.getFontVariant()+o+this.getFontSize()+n+this.getFontFamily()},_addTextLine:function(a,b){return this.textArr.push({text:a,width:b})},_getTextWidth:function(a){return v.measureText(a).width},_setTextData:function(){var a=this.getText().split("\n"),b=+this.getFontSize(),d=0,e=this.getLineHeight()*b,f=this.attrs.width,h=this.attrs.height,i=f!==c,j=h!==c,k=this.getPadding(),l=f-2*k,m=h-2*k,n=0,p=this.getWrap(),q=p!==s,t=p!==r&&q;this.textArr=[],v.save(),v.font=this._getContextFont();for(var u=0,w=a.length;w>u;++u){var x=a[u],y=this._getTextWidth(x);if(i&&y>l)for(;x.length>0;){for(var z=0,A=x.length,B="",C=0;A>z;){var D=z+A>>>1,E=x.slice(0,D+1),F=this._getTextWidth(E);l>=F?(z=D+1,B=E,C=F):A=D}if(!B)break;if(t){var G=Math.max(B.lastIndexOf(o),B.lastIndexOf(g))+1;G>0&&(z=G,B=B.slice(0,z),C=this._getTextWidth(B))}if(this._addTextLine(B,C),d=Math.max(d,C),n+=e,!q||j&&n+e>m)break;if(x=x.slice(z),x.length>0&&(y=this._getTextWidth(x),l>=y)){this._addTextLine(x,y),n+=e,d=Math.max(d,y);break}}else this._addTextLine(x,y),n+=e,d=Math.max(d,y);if(j&&n+e>m)break}v.restore(),this.textHeight=b,this.textWidth=d}},Kinetic.Util.extend(Kinetic.Text,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontFamily","Arial"),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontSize",12),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontStyle",m),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontVariant",m),Kinetic.Factory.addGetterSetter(Kinetic.Text,"padding",0),Kinetic.Factory.addGetterSetter(Kinetic.Text,"align",i),Kinetic.Factory.addGetterSetter(Kinetic.Text,"lineHeight",1),Kinetic.Factory.addGetterSetter(Kinetic.Text,"wrap",q),Kinetic.Factory.addGetter(Kinetic.Text,"text",h),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Text,"text"),Kinetic.Collection.mapMethods(Kinetic.Text)}();
(function(w){var k=function(b,c){typeof c=="undefined"&&(c={});this.init(b,c)},a=k.prototype,o,p=["canvas","vml"],f=["oval","spiral","square","rect","roundRect"],x=/^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,v=navigator.appVersion.indexOf("MSIE")!==-1&&parseFloat(navigator.appVersion.split("MSIE")[1])===8?true:false,y=!!document.createElement("canvas").getContext,q=true,n=function(b,c,a){var b=document.createElement(b),d;for(d in a)b[d]=a[d];typeof c!=="undefined"&&c.appendChild(b);return b},m=function(b,
c){for(var a in c)b.style[a]=c[a];return b},t=function(b,c){for(var a in c)b.setAttribute(a,c[a]);return b},u=function(b,c,a,d){b.save();b.translate(c,a);b.rotate(d);b.translate(-c,-a);b.beginPath()};a.init=function(b,c){if(typeof c.safeVML==="boolean")q=c.safeVML;try{this.mum=document.getElementById(b)!==void 0?document.getElementById(b):document.body}catch(a){this.mum=document.body}c.id=typeof c.id!=="undefined"?c.id:"canvasLoader";this.cont=n("div",this.mum,{id:c.id});if(y)o=p[0],this.can=n("canvas",
this.cont),this.con=this.can.getContext("2d"),this.cCan=m(n("canvas",this.cont),{display:"none"}),this.cCon=this.cCan.getContext("2d");else{o=p[1];if(typeof k.vmlSheet==="undefined"){document.getElementsByTagName("head")[0].appendChild(n("style"));k.vmlSheet=document.styleSheets[document.styleSheets.length-1];var d=["group","oval","roundrect","fill"],e;for(e in d)k.vmlSheet.addRule(d[e],"behavior:url(#default#VML); position:absolute;")}this.vml=n("group",this.cont)}this.setColor(this.color);this.draw();
m(this.cont,{display:"none"})};a.cont={};a.can={};a.con={};a.cCan={};a.cCon={};a.timer={};a.activeId=0;a.diameter=40;a.setDiameter=function(b){this.diameter=Math.round(Math.abs(b));this.redraw()};a.getDiameter=function(){return this.diameter};a.cRGB={};a.color="#000000";a.setColor=function(b){this.color=x.test(b)?b:"#000000";this.cRGB=this.getRGB(this.color);this.redraw()};a.getColor=function(){return this.color};a.shape=f[0];a.setShape=function(b){for(var c in f)if(b===f[c]){this.shape=b;this.redraw();
break}};a.getShape=function(){return this.shape};a.density=40;a.setDensity=function(b){this.density=q&&o===p[1]?Math.round(Math.abs(b))<=40?Math.round(Math.abs(b)):40:Math.round(Math.abs(b));if(this.density>360)this.density=360;this.activeId=0;this.redraw()};a.getDensity=function(){return this.density};a.range=1.3;a.setRange=function(b){this.range=Math.abs(b);this.redraw()};a.getRange=function(){return this.range};a.speed=2;a.setSpeed=function(b){this.speed=Math.round(Math.abs(b))};a.getSpeed=function(){return this.speed};
a.fps=24;a.setFPS=function(b){this.fps=Math.round(Math.abs(b));this.reset()};a.getFPS=function(){return this.fps};a.getRGB=function(b){b=b.charAt(0)==="#"?b.substring(1,7):b;return{r:parseInt(b.substring(0,2),16),g:parseInt(b.substring(2,4),16),b:parseInt(b.substring(4,6),16)}};a.draw=function(){var b=0,c,a,d,e,h,k,j,r=this.density,s=Math.round(r*this.range),l,i,q=0;i=this.cCon;var g=this.diameter;if(o===p[0]){i.clearRect(0,0,1E3,1E3);t(this.can,{width:g,height:g});for(t(this.cCan,{width:g,height:g});b<
r;){l=b<=s?1-1/s*b:l=0;k=270-360/r*b;j=k/180*Math.PI;i.fillStyle="rgba("+this.cRGB.r+","+this.cRGB.g+","+this.cRGB.b+","+l.toString()+")";switch(this.shape){case f[0]:case f[1]:c=g*0.07;e=g*0.47+Math.cos(j)*(g*0.47-c)-g*0.47;h=g*0.47+Math.sin(j)*(g*0.47-c)-g*0.47;i.beginPath();this.shape===f[1]?i.arc(g*0.5+e,g*0.5+h,c*l,0,Math.PI*2,false):i.arc(g*0.5+e,g*0.5+h,c,0,Math.PI*2,false);break;case f[2]:c=g*0.12;e=Math.cos(j)*(g*0.47-c)+g*0.5;h=Math.sin(j)*(g*0.47-c)+g*0.5;u(i,e,h,j);i.fillRect(e,h-c*0.5,
c,c);break;case f[3]:case f[4]:a=g*0.3,d=a*0.27,e=Math.cos(j)*(d+(g-d)*0.13)+g*0.5,h=Math.sin(j)*(d+(g-d)*0.13)+g*0.5,u(i,e,h,j),this.shape===f[3]?i.fillRect(e,h-d*0.5,a,d):(c=d*0.55,i.moveTo(e+c,h-d*0.5),i.lineTo(e+a-c,h-d*0.5),i.quadraticCurveTo(e+a,h-d*0.5,e+a,h-d*0.5+c),i.lineTo(e+a,h-d*0.5+d-c),i.quadraticCurveTo(e+a,h-d*0.5+d,e+a-c,h-d*0.5+d),i.lineTo(e+c,h-d*0.5+d),i.quadraticCurveTo(e,h-d*0.5+d,e,h-d*0.5+d-c),i.lineTo(e,h-d*0.5+c),i.quadraticCurveTo(e,h-d*0.5,e+c,h-d*0.5))}i.closePath();i.fill();
i.restore();++b}}else{m(this.cont,{width:g,height:g});m(this.vml,{width:g,height:g});switch(this.shape){case f[0]:case f[1]:j="oval";c=140;break;case f[2]:j="roundrect";c=120;break;case f[3]:case f[4]:j="roundrect",c=300}a=d=c;e=500-d;for(h=-d*0.5;b<r;){l=b<=s?1-1/s*b:l=0;k=270-360/r*b;switch(this.shape){case f[1]:a=d=c*l;e=500-c*0.5-c*l*0.5;h=(c-c*l)*0.5;break;case f[0]:case f[2]:v&&(h=0,this.shape===f[2]&&(e=500-d*0.5));break;case f[3]:case f[4]:a=c*0.95,d=a*0.28,v?(e=0,h=500-d*0.5):(e=500-a,h=
-d*0.5),q=this.shape===f[4]?0.6:0}i=t(m(n("group",this.vml),{width:1E3,height:1E3,rotation:k}),{coordsize:"1000,1000",coordorigin:"-500,-500"});i=m(n(j,i,{stroked:false,arcSize:q}),{width:a,height:d,top:h,left:e});n("fill",i,{color:this.color,opacity:l});++b}}this.tick(true)};a.clean=function(){if(o===p[0])this.con.clearRect(0,0,1E3,1E3);else{var b=this.vml;if(b.hasChildNodes())for(;b.childNodes.length>=1;)b.removeChild(b.firstChild)}};a.redraw=function(){this.clean();this.draw()};a.reset=function(){typeof this.timer===
"number"&&(this.hide(),this.show())};a.tick=function(b){var a=this.con,f=this.diameter;b||(this.activeId+=360/this.density*this.speed);o===p[0]?(a.clearRect(0,0,f,f),u(a,f*0.5,f*0.5,this.activeId/180*Math.PI),a.drawImage(this.cCan,0,0,f,f),a.restore()):(this.activeId>=360&&(this.activeId-=360),m(this.vml,{rotation:this.activeId}))};a.show=function(){if(typeof this.timer!=="number"){var a=this;this.timer=self.setInterval(function(){a.tick()},Math.round(1E3/this.fps));m(this.cont,{display:"block"})}};
a.hide=function(){typeof this.timer==="number"&&(clearInterval(this.timer),delete this.timer,m(this.cont,{display:"none"}))};a.kill=function(){var a=this.cont;typeof this.timer==="number"&&this.hide();o===p[0]?(a.removeChild(this.can),a.removeChild(this.cCan)):a.removeChild(this.vml);for(var c in this)delete this[c]};w.CanvasLoader=k})(window);
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.autobahn=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.once = noop;
process.off = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],2:[function(_dereq_,module,exports){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////

// require('assert') would be nice .. but it does not
// work with Google Closure after Browserify

var crypto = _dereq_('crypto-js');

// PBKDF2-base key derivation function for salted WAMP-CRA
//
function derive_key (secret, salt, iterations, keylen) {
   var iterations = iterations || 1000;
   var keylen = keylen || 32;
   var config = {
      keySize: keylen / 4,
      iterations: iterations,
      hasher: crypto.algo.SHA256
   }
   var key = crypto.PBKDF2(secret, salt, config);
   return key.toString(crypto.enc.Base64);
}


function sign (key, challenge) {
   return crypto.HmacSHA256(challenge, key).toString(crypto.enc.Base64);
}

exports.sign = sign;
exports.derive_key = derive_key;

},{"crypto-js":28}],3:[function(_dereq_,module,exports){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////

var when = _dereq_('when');
var when_fn = _dereq_("when/function");


function auth(session, user, extra) {

   // Persona Issues:
   //
   // Chrome: https://github.com/mozilla/persona/issues/4083
   // IE11: https://groups.google.com/forum/#!topic/mozilla.dev.identity/keEkVpvfLA8

   var d = session.defer();

   navigator.id.watch({
      loggedInUser: user,
      onlogin: function (assertion) {
         // A user has logged in! Here you need to:
         // 1. Send the assertion to your backend for verification and to create a session.
         // 2. Update your UI.
         d.resolve(assertion);
      },
      onlogout: function() {
         // A user has logged out! Here you need to:
         // Tear down the user's session by redirecting the user or making a call to your backend.
         // Also, make sure loggedInUser will get set to null on the next page load.
         // (That's a literal JavaScript null. Not false, 0, or undefined. null.)
         session.leave("wamp.close.logout");
      }
   });

   if (d.promise.then) {
      // whenjs has the actual user promise in an attribute
      return d.promise;
   } else {
      return d;
   }
}

exports.auth = auth;

},{"when":77,"when/function":54}],4:[function(_dereq_,module,exports){
(function (global){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////

// Polyfills for <= IE9
_dereq_('./polyfill.js');

var pjson = _dereq_('../package.json');

var when = _dereq_('when');
//var fn = require("when/function");

if ('AUTOBAHN_DEBUG' in global && AUTOBAHN_DEBUG) {
   // https://github.com/cujojs/when/blob/master/docs/api.md#whenmonitor
   _dereq_('when/monitor/console');
   if ('console' in global) {
      console.log("AutobahnJS debug enabled");
   }
}

var util = _dereq_('./util.js');
var log = _dereq_('./log.js');
var session = _dereq_('./session.js');
var connection = _dereq_('./connection.js');
var configure = _dereq_('./configure.js');

var persona = _dereq_('./auth/persona.js');
var cra = _dereq_('./auth/cra.js');

exports.version = pjson.version;

exports.transports = configure.transports;

exports.Connection = connection.Connection;

exports.Session = session.Session;
exports.Invocation = session.Invocation;
exports.Event = session.Event;
exports.Result = session.Result;
exports.Error = session.Error;
exports.Subscription = session.Subscription;
exports.Registration = session.Registration;
exports.Publication = session.Publication;

exports.auth_persona = persona.auth;
exports.auth_cra = cra;

exports.when = when;

exports.util = util;
exports.log = log;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../package.json":79,"./auth/cra.js":2,"./auth/persona.js":3,"./configure.js":5,"./connection.js":6,"./log.js":7,"./polyfill.js":8,"./session.js":16,"./util.js":19,"when":77,"when/monitor/console":75}],5:[function(_dereq_,module,exports){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////


function Transports() {
   this._repository = {};
}


Transports.prototype.register = function (name, factory) {
   this._repository[name] = factory;
};


Transports.prototype.isRegistered = function (name) {
   return this._repository[name] ? true : false;
};


Transports.prototype.get = function (name) {
   if (this._repository[name] !== undefined) {
      return this._repository[name];
   } else {
     throw "no such transport: " + name;
   }
}


Transports.prototype.list = function() {
   var items = [];
   for (var name in this._repository) {
      items.push(name);
   }
   return items;
};


var _transports = new Transports();


// register default transports
var websocket = _dereq_('./transport/websocket.js');
_transports.register("websocket", websocket.Factory);

var longpoll = _dereq_('./transport/longpoll.js');
_transports.register("longpoll", longpoll.Factory);

exports.transports = _transports;

},{"./transport/longpoll.js":17,"./transport/websocket.js":18}],6:[function(_dereq_,module,exports){
(function (global){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////

var when = _dereq_('when');

var session = _dereq_('./session.js');
var util = _dereq_('./util.js');
var log = _dereq_('./log.js');
var autobahn = _dereq_('./autobahn.js');


var Connection = function (options) {

   var self = this;

   self._options = options;


   // Deferred factory
   //
   if (options && options.use_es6_promises) {

      if ('Promise' in global) {
         // ES6-based deferred factory
         //
         self._defer = function () {
            var deferred = {};

            deferred.promise = new Promise(function (resolve, reject) {
               deferred.resolve = resolve;
               deferred.reject = reject;
            });

            return deferred;
         };
      } else {

         log.debug("Warning: ES6 promises requested, but not found! Falling back to whenjs.");

         // whenjs-based deferred factory
         //
         self._defer = when.defer;
      }

   } else if (options && options.use_deferred) {

      // use explicit deferred factory, e.g. jQuery.Deferred or Q.defer
      //
      self._defer = options.use_deferred;

   } else {

      // whenjs-based deferred factory
      //
      self._defer = when.defer;
   }


   // WAMP transport
   //
   // backward compatiblity
   if (!self._options.transports) {
      self._options.transports = [
         {
            type: 'websocket',
            url: self._options.url
         }
      ];
   }
   self._transport_factories = [];
   self._init_transport_factories();


   // WAMP session
   //
   self._session = null;
   self._session_close_reason = null;
   self._session_close_message = null;

   // automatic reconnection configuration
   //

   // enable automatic reconnect if host is unreachable
   if (self._options.retry_if_unreachable !== undefined) {
      self._retry_if_unreachable = self._options.retry_if_unreachable;
   } else {
      self._retry_if_unreachable = true;
   }

   // maximum number of reconnection attempts
   self._max_retries = self._options.max_retries || 15;

   // initial retry delay in seconds
   self._initial_retry_delay = self._options.initial_retry_delay || 1.5;

   // maximum seconds between reconnection attempts
   self._max_retry_delay = self._options.max_retry_delay || 300;

   // the growth factor applied to the retry delay on each retry cycle
   self._retry_delay_growth = self._options.retry_delay_growth || 1.5;

   // the SD of a Gaussian to jitter the delay on each retry cycle
   // as a fraction of the mean
   self._retry_delay_jitter = self._options.retry_delay_jitter || 0.1;

   // reconnection tracking
   //

   // total number of successful connections
   self._connect_successes = 0;

   // controls if we should try to reconnect
   self._retry = false;

   // current number of reconnect cycles we went through
   self._retry_count = 0;

   // the current retry delay
   self._retry_delay = self._initial_retry_delay;

   // flag indicating if we are currently in a reconnect cycle
   self._is_retrying = false;

   // when retrying, this is the timer object returned from window.setTimeout()
   self._retry_timer = null;
};



Connection.prototype._create_transport = function () {
   for (var i = 0; i < this._transport_factories.length; ++i) {
      var transport_factory = this._transport_factories[i];
      log.debug("trying to create WAMP transport of type: " + transport_factory.type);
      try {
         var transport = transport_factory.create();
         if (transport) {
            log.debug("using WAMP transport type: " + transport_factory.type);
            return transport;
         }
      } catch (e) {
         // ignore
         log.debug("could not create WAMP transport '" + transport_factory.type + "': " + e);
      }
   }

   // could not create any WAMP transport
   return null;
};



Connection.prototype._init_transport_factories = function () {
    // WAMP transport
    //
    var transports, transport_options, transport_factory, transport_factory_klass;

    util.assert(this._options.transports, "No transport.factory specified");
    transports = this._options.transports;
    //if(typeof transports === "object") {
    //    this._options.transports = [transports];
    //}
    for(var i = 0; i < this._options.transports.length; ++i) {
        // cascading transports until we find one which works
        transport_options =  this._options.transports[i];

        if (!transport_options.url) {
            // defaulting to options.url if none is provided
            transport_options.url = this._options.url;
        }
        if (!transport_options.protocols) {
            transport_options.protocols = this._options.protocols;
        }
        util.assert(transport_options.type, "No transport.type specified");
        util.assert(typeof transport_options.type === "string", "transport.type must be a string");
        try {
            transport_factory_klass = autobahn.transports.get(transport_options.type);
            if (transport_factory_klass) {
                transport_factory = new transport_factory_klass(transport_options);
                this._transport_factories.push(transport_factory);
            }
        } catch (exc) {
            console.error(exc);
        }
    }
};


Connection.prototype._autoreconnect_reset_timer = function () {

   var self = this;

   if (self._retry_timer) {
      clearTimeout(self._retry_timer);
   }
   self._retry_timer = null;
}


Connection.prototype._autoreconnect_reset = function () {

   var self = this;

   self._autoreconnect_reset_timer();

   self._retry_count = 0;
   self._retry_delay = self._initial_retry_delay;
   self._is_retrying = false;
}


Connection.prototype._autoreconnect_advance = function () {

   var self = this;

   // jitter retry delay
   if (self._retry_delay_jitter) {
      self._retry_delay = util.rand_normal(self._retry_delay, self._retry_delay * self._retry_delay_jitter);
   }

   // cap the retry delay
   if (self._retry_delay > self._max_retry_delay) {
      self._retry_delay = self._max_retry_delay;
   }

   // count number of retries
   self._retry_count += 1;

   var res;
   if (self._retry && self._retry_count <= self._max_retries) {
      res = {
         count: self._retry_count,
         delay: self._retry_delay,
         will_retry: true
      };
   } else {
      res = {
         count: null,
         delay: null,
         will_retry: false
      }
   }

   // retry delay growth for next retry cycle
   if (self._retry_delay_growth) {
      self._retry_delay = self._retry_delay * self._retry_delay_growth;
   }

   return res;
}


Connection.prototype.open = function () {

   var self = this;

   if (self._transport) {
      throw "connection already open (or opening)";
   }

   self._autoreconnect_reset();
   self._retry = true;

   function retry () {

      // create a WAMP transport
      self._transport = self._create_transport();

      if (!self._transport) {
         // failed to create a WAMP transport
         self._retry = false;
         if (self.onclose) {
            var details = {
               reason: null,
               message: null,
               retry_delay: null,
               retry_count: null,
               will_retry: false
            };
            self.onclose("unsupported", details);
         }
         return;
      }

      // create a new WAMP session using the WebSocket connection as transport
      self._session = new session.Session(self._transport, self._defer, self._options.onchallenge);
      self._session_close_reason = null;
      self._session_close_message = null;

      self._transport.onopen = function () {

         // reset auto-reconnect timer and tracking
         self._autoreconnect_reset();

         // log successful connections
         self._connect_successes += 1;

         // start WAMP session
         self._session.join(self._options.realm, self._options.authmethods, self._options.authid);
      };

      self._session.onjoin = function (details) {
         if (self.onopen) {
            try {
               self.onopen(self._session, details);
            } catch (e) {
               log.debug("Exception raised from app code while firing Connection.onopen()", e);
            }
         }
      };

      //
      // ... WAMP session is now attached to realm.
      //

      self._session.onleave = function (reason, details) {
         self._session_close_reason = reason;
         self._session_close_message = details.message || "";
         self._retry = false;
         self._transport.close(1000);
      };

      self._transport.onclose = function (evt) {

         // remove any pending reconnect timer
         self._autoreconnect_reset_timer();

         self._transport = null;

         var reason = null;
         if (self._connect_successes === 0) {
            reason = "unreachable";
            if (!self._retry_if_unreachable) {
               self._retry = false;
            }

         } else if (!evt.wasClean) {
            reason = "lost";

         } else {
            reason = "closed";
         }
        
         var next_retry = self._autoreconnect_advance();

         // fire app code handler
         //
         if (self.onclose) {
            var details = {
               reason: self._session_close_reason,
               message: self._session_close_message,
               retry_delay: next_retry.delay,
               retry_count: next_retry.count,
               will_retry: next_retry.will_retry
            };
            try {
               // Connection.onclose() allows to cancel any subsequent retry attempt
               var stop_retrying = self.onclose(reason, details);
            } catch (e) {
               log.debug("Exception raised from app code while firing Connection.onclose()", e);
            }
         }

         // reset session info
         //
         if (self._session) {
            self._session._id = null;
            self._session = null;
            self._session_close_reason = null;
            self._session_close_message = null;
         }

         // automatic reconnection
         //
         if (self._retry && !stop_retrying) {

            if (next_retry.will_retry) {

               self._is_retrying = true;

               log.debug("retrying in " + next_retry.delay + " s");
               self._retry_timer = setTimeout(retry, next_retry.delay * 1000);

            } else {
               log.debug("giving up trying to reconnect");
            }
         }
      }
   }

   retry();
};


Connection.prototype.close = function (reason, message) {
   var self = this;

   if (!self._transport && !self._is_retrying) {
      throw "connection already closed";
   }

   // the app wants to close .. don't retry
   self._retry = false;

   if (self._session && self._session.isOpen) {
      // if there is an open session, close that first.
      self._session.leave(reason, message);
   } else if (self._transport) {
      // no session active: just close the transport
      self._transport.close(1000);
   }
};



Object.defineProperty(Connection.prototype, "defer", {
   get: function () {
      return this._defer;
   }
});



Object.defineProperty(Connection.prototype, "session", {
   get: function () {
      return this._session;
   }
});



Object.defineProperty(Connection.prototype, "isOpen", {
   get: function () {
      if (this._session && this._session.isOpen) {
         return true;
      } else {
         return false;
      }
   }
});



Object.defineProperty(Connection.prototype, "isConnected", {
   get: function () {
      if (this._transport) {
         return true;
      } else {
         return false;
      }
   }
});



Object.defineProperty(Connection.prototype, "transport", {
   get: function () {
      if (this._transport) {
         return this._transport;
      } else {
         return {info: {type: 'none', url: null, protocol: null}};
      }
   }
});



Object.defineProperty(Connection.prototype, "isRetrying", {
   get: function () {
      return this._is_retrying;
   }
});



exports.Connection = Connection;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./autobahn.js":4,"./log.js":7,"./session.js":16,"./util.js":19,"when":77}],7:[function(_dereq_,module,exports){
(function (global){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////


var debug = function () {};

if ('AUTOBAHN_DEBUG' in global && AUTOBAHN_DEBUG && 'console' in global) {
   debug = function () {
      console.log.apply(console, arguments);
   }
}

exports.debug = debug;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],8:[function(_dereq_,module,exports){
_dereq_('./polyfill/object');
_dereq_('./polyfill/array');
_dereq_('./polyfill/string');
_dereq_('./polyfill/function');
_dereq_('./polyfill/console');
_dereq_('./polyfill/typedarray');
_dereq_('./polyfill/json');

},{"./polyfill/array":9,"./polyfill/console":10,"./polyfill/function":11,"./polyfill/json":12,"./polyfill/object":13,"./polyfill/string":14,"./polyfill/typedarray":15}],9:[function(_dereq_,module,exports){
if ( 'function' !== typeof Array.prototype.reduce ) {
  Array.prototype.reduce = function( callback /*, initialValue*/ ) {
    'use strict';
      var len, t, value, k;
    if ( null === this || 'undefined' === typeof this ) {
      throw new TypeError(
         'Array.prototype.reduce called on null or undefined' );
    }
    if ( 'function' !== typeof callback ) {
      throw new TypeError( callback + ' is not a function' );
    }
    t = Object( this );
    len = t.length >>> 0;
    k = 0;
    if ( arguments.length >= 2 ) {
      value = arguments[1];
    } else {
      while ( k < len && ! k in t ) k++;
      if ( k >= len )
        throw new TypeError('Reduce of empty array with no initial value');
      value = t[ k++ ];
    }
    for ( ; k < len ; k++ ) {
      if ( k in t ) {
         value = callback( value, t[k], k, t );
      }
    }
    return value;
  };
}

// Add ECMA262-5 Array methods if not supported natively
//
if (!('indexOf' in Array.prototype)) {
    Array.prototype.indexOf= function(find, i /*opt*/) {
        if (i===undefined) i= 0;
        if (i<0) i+= this.length;
        if (i<0) i= 0;
        for (var n= this.length; i<n; i++)
            if (i in this && this[i]===find)
                return i;
        return -1;
    };
}
if (!('lastIndexOf' in Array.prototype)) {
    Array.prototype.lastIndexOf= function(find, i /*opt*/) {
        if (i===undefined) i= this.length-1;
        if (i<0) i+= this.length;
        if (i>this.length-1) i= this.length-1;
        for (i++; i-->0;) /* i++ because from-argument is sadly inclusive */
            if (i in this && this[i]===find)
                return i;
        return -1;
    };
}
if (!('forEach' in Array.prototype)) {
    Array.prototype.forEach= function(action, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this)
                action.call(that, this[i], i, this);
    };
}
if (!('map' in Array.prototype)) {
    Array.prototype.map= function(mapper, that /*opt*/) {
        var other= new Array(this.length);
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this)
                other[i]= mapper.call(that, this[i], i, this);
        return other;
    };
}
if (!('filter' in Array.prototype)) {
    Array.prototype.filter= function(filter, that /*opt*/) {
        var other= [], v;
        for (var i=0, n= this.length; i<n; i++)
            if (i in this && filter.call(that, v= this[i], i, this))
                other.push(v);
        return other;
    };
}
if (!('every' in Array.prototype)) {
    Array.prototype.every= function(tester, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this && !tester.call(that, this[i], i, this))
                return false;
        return true;
    };
}
if (!('some' in Array.prototype)) {
    Array.prototype.some= function(tester, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this && tester.call(that, this[i], i, this))
                return true;
        return false;
    };
}

if ( 'function' !== typeof Array.prototype.reduceRight ) {
  Array.prototype.reduceRight = function( callback /*, initialValue*/ ) {
    'use strict';
    if ( null === this || 'undefined' === typeof this ) {
      throw new TypeError(
         'Array.prototype.reduce called on null or undefined' );
    }
    if ( 'function' !== typeof callback ) {
      throw new TypeError( callback + ' is not a function' );
    }
    var t = Object( this ), len = t.length >>> 0, k = len - 1, value;
    if ( arguments.length >= 2 ) {
      value = arguments[1];
    } else {
      while ( k >= 0 && ! k in t ) k--;
      if ( k < 0 )
        throw new TypeError('Reduce of empty array with no initial value');
      value = t[ k-- ];
    }
    for ( ; k >= 0 ; k-- ) {
      if ( k in t ) {
         value = callback( value, t[k], k, t );
      }
    }
    return value;
  };
}
},{}],10:[function(_dereq_,module,exports){
(function (global){

(function(console) {
   /*********************************************************************************************
    * Make sure console exists because IE blows up if it's not open and you attempt to access it
    * Create some dummy functions if we need to, so we don't have to if/else everything
    *********************************************************************************************/
   console||(console = window.console = {
      // all this "a, b, c, d, e" garbage is to make the IDEs happy, since they can't do variable argument lists
      /**
       * @param a
       * @param [b]
       * @param [c]
       * @param [d]
       * @param [e]
       */
      log: function(a, b, c, d, e) {},
      /**
       * @param a
       * @param [b]
       * @param [c]
       * @param [d]
       * @param [e]
       */
      info: function(a, b, c, d, e) {},
      /**
       * @param a
       * @param [b]
       * @param [c]
       * @param [d]
       * @param [e]
       */
      warn: function(a, b, c, d, e) {},
      /**
       * @param a
       * @param [b]
       * @param [c]
       * @param [d]
       * @param [e]
       */
      error: function(a, b, c, d, e) {},

      assert: function(test, message) {}
   });

   // IE 9 won't allow us to call console.log.apply (WTF IE!) It also reports typeof(console.log) as 'object' (UNH!)
   // but together, those two errors can be useful in allowing us to fix stuff so it works right
   if( typeof(console.log) === 'object' ) {
      // Array.forEach doesn't work in IE 8 so don't try that :(
      console.log = Function.prototype.call.bind(console.log, console);
      console.info = Function.prototype.call.bind(console.info, console);
      console.warn = Function.prototype.call.bind(console.warn, console);
      console.error = Function.prototype.call.bind(console.error, console);
      console.debug = Function.prototype.call.bind(console.info, console);
   }

   /**
    * Support group and groupEnd functions
    */
   ('group' in console) ||
   (console.group = function(msg) {
      console.info("\n--- "+msg+" ---\n");
   });
   ('groupEnd' in console) ||
   (console.groupEnd = function() {
      console.log("\n");
   });
   ('assert' in console) ||
   (console.assert = function(test, message) {
            if (!test) {
        try {
          // attempt to preserve the stack
          throw new Error("assertion failed: " + message);
        } catch(error) {
          setTimeout(function(){
            throw error;
          }, 0);
        }
      }
       });

   /**
    * Support time and timeEnd functions
    */
   ('time' in console) ||
   (function() {
      var trackedTimes = {};
      console.time = function(msg) {
         trackedTimes[msg] = new Date().getTime();
      };
      console.timeEnd = function(msg) {
         var end = new Date().getTime(), time = (msg in trackedTimes)? end - trackedTimes[msg] : 0;
         console.info(msg+': '+time+'ms')
      };
   }());

})(global.console);
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(_dereq_,module,exports){
if (!Function.prototype.bind) {
  //credits: taken from bind_even_never in this discussion: https://prototype.lighthouseapp.com/projects/8886/tickets/215-optimize-bind-bindaseventlistener#ticket-215-9
  Function.prototype.bind = function(context) {
     var fn = this, args = Array.prototype.slice.call(arguments, 1);
     return function(){
        return fn.apply(context, Array.prototype.concat.apply(args, arguments));
     };
  };
}
},{}],12:[function(_dereq_,module,exports){
/*
    json2.js
    2014-02-04

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx,
        escapable,
        gap,
        indent,
        meta,
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

exports.JSON = JSON;
},{}],13:[function(_dereq_,module,exports){
if (!Object.create) {
    Object.create = (function(){
        function F(){}

        return function(o){
            if (arguments.length != 1) {
                throw new Error('Object.create implementation only accepts one parameter.');
            }
            F.prototype = o;
            return new F()
        }
    })()
}
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
},{}],14:[function(_dereq_,module,exports){
// Add ECMA262-5 string trim if not supported natively
//
if (!('trim' in String.prototype)) {
    String.prototype.trim= function() {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
    };
}
},{}],15:[function(_dereq_,module,exports){
(function (global){
/*
 Copyright (c) 2010, Linden Research, Inc.
 Copyright (c) 2014, Joshua Bell

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 $/LicenseInfo$
 */

// Original can be found at:
//   https://bitbucket.org/lindenlab/llsd
// Modifications by Joshua Bell inexorabletash@gmail.com
//   https://github.com/inexorabletash/polyfill

// ES3/ES5 implementation of the Krhonos Typed Array Specification
//   Ref: http://www.khronos.org/registry/typedarray/specs/latest/
//   Date: 2011-02-01
//
// Variations:
//  * Allows typed_array.get/set() as alias for subscripts (typed_array[])
//  * Gradually migrating structure from Khronos spec to ES6 spec
if (typeof global["Uint8Array"] === "undefined") {
    (function (global, win) {
        'use strict';

        var undefined = (void 0); // Paranoia

        // Beyond this value, index getters/setters (i.e. array[0], array[1]) are so slow to
        // create, and consume so much memory, that the browser appears frozen.
        var MAX_ARRAY_LENGTH = 1e5;

        // Approximations of internal ECMAScript conversion functions
        function Type(v) {
            switch (typeof v) {
                case 'undefined':
                    return 'undefined';
                case 'boolean':
                    return 'boolean';
                case 'number':
                    return 'number';
                case 'string':
                    return 'string';
                default:
                    return v === null ? 'null' : 'object';
            }
        }

        // Class returns internal [[Class]] property, used to avoid cross-frame instanceof issues:
        function Class(v) {
            return Object.prototype.toString.call(v).replace(/^\[object *|\]$/g, '');
        }

        function IsCallable(o) {
            return typeof o === 'function';
        }

        function ToObject(v) {
            if (v === null || v === undefined) throw TypeError();
            return Object(v);
        }

        function ToInt32(v) {
            return v >> 0;
        }

        function ToUint32(v) {
            return v >>> 0;
        }

        // Snapshot intrinsics
        var LN2 = Math.LN2,
            abs = Math.abs,
            floor = Math.floor,
            log = Math.log,
            max = Math.max,
            min = Math.min,
            pow = Math.pow,
            round = Math.round;

        // emulate ES5 getter/setter API using legacy APIs
        // http://blogs.msdn.com/b/ie/archive/2010/09/07/transitioning-existing-code-to-the-es5-getter-setter-apis.aspx
        // (second clause tests for Object.defineProperty() in IE<9 that only supports extending DOM prototypes, but
        // note that IE<9 does not support __defineGetter__ or __defineSetter__ so it just renders the method harmless)

        (function () {
            var orig = Object.defineProperty;
            var dom_only = !(function () {
                try {
                    return Object.defineProperty({}, 'x', {});
                } catch (_) {
                    return false;
                }
            }());

            if (!orig || dom_only) {
                Object.defineProperty = function (o, prop, desc) {
                    // In IE8 try built-in implementation for defining properties on DOM prototypes.
                    if (orig) {
                        try {
                            return orig(o, prop, desc);
                        } catch (_) {
                        }
                    }

                    if (o !== Object(o))
                        throw TypeError('Object.defineProperty called on non-object');
                    if (Object.prototype.__defineGetter__ && ('get' in desc))
                        Object.prototype.__defineGetter__.call(o, prop, desc.get);
                    if (Object.prototype.__defineSetter__ && ('set' in desc))
                        Object.prototype.__defineSetter__.call(o, prop, desc.set);
                    if ('value' in desc)
                        o[prop] = desc.value;
                    return o;
                };
            }
        }());

        // ES5: Make obj[index] an alias for obj._getter(index)/obj._setter(index, value)
        // for index in 0 ... obj.length
        function makeArrayAccessors(obj) {
            if (obj.length > MAX_ARRAY_LENGTH) throw RangeError('Array too large for polyfill');

            function makeArrayAccessor(index) {
                Object.defineProperty(obj, index, {
                    'get': function () {
                        return obj._getter(index);
                    },
                    'set': function (v) {
                        obj._setter(index, v);
                    },
                    enumerable: true,
                    configurable: false
                });
            }

            var i;
            for (i = 0; i < obj.length; i += 1) {
                makeArrayAccessor(i);
            }
        }

        // Internal conversion functions:
        //    pack<Type>()   - take a number (interpreted as Type), output a byte array
        //    unpack<Type>() - take a byte array, output a Type-like number

        function as_signed(value, bits) {
            var s = 32 - bits;
            return (value << s) >> s;
        }

        function as_unsigned(value, bits) {
            var s = 32 - bits;
            return (value << s) >>> s;
        }

        function packI8(n) {
            return [n & 0xff];
        }

        function unpackI8(bytes) {
            return as_signed(bytes[0], 8);
        }

        function packU8(n) {
            return [n & 0xff];
        }

        function unpackU8(bytes) {
            return as_unsigned(bytes[0], 8);
        }

        function packU8Clamped(n) {
            n = round(Number(n));
            return [n < 0 ? 0 : n > 0xff ? 0xff : n & 0xff];
        }

        function packI16(n) {
            return [(n >> 8) & 0xff, n & 0xff];
        }

        function unpackI16(bytes) {
            return as_signed(bytes[0] << 8 | bytes[1], 16);
        }

        function packU16(n) {
            return [(n >> 8) & 0xff, n & 0xff];
        }

        function unpackU16(bytes) {
            return as_unsigned(bytes[0] << 8 | bytes[1], 16);
        }

        function packI32(n) {
            return [(n >> 24) & 0xff, (n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
        }

        function unpackI32(bytes) {
            return as_signed(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32);
        }

        function packU32(n) {
            return [(n >> 24) & 0xff, (n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
        }

        function unpackU32(bytes) {
            return as_unsigned(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32);
        }

        function packIEEE754(v, ebits, fbits) {

            var bias = (1 << (ebits - 1)) - 1,
                s, e, f, ln,
                i, bits, str, bytes;

            function roundToEven(n) {
                var w = floor(n), f = n - w;
                if (f < 0.5)
                    return w;
                if (f > 0.5)
                    return w + 1;
                return w % 2 ? w + 1 : w;
            }

            // Compute sign, exponent, fraction
            if (v !== v) {
                // NaN
                // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
                e = (1 << ebits) - 1;
                f = pow(2, fbits - 1);
                s = 0;
            } else if (v === Infinity || v === -Infinity) {
                e = (1 << ebits) - 1;
                f = 0;
                s = (v < 0) ? 1 : 0;
            } else if (v === 0) {
                e = 0;
                f = 0;
                s = (1 / v === -Infinity) ? 1 : 0;
            } else {
                s = v < 0;
                v = abs(v);

                if (v >= pow(2, 1 - bias)) {
                    e = min(floor(log(v) / LN2), 1023);
                    f = roundToEven(v / pow(2, e) * pow(2, fbits));
                    if (f / pow(2, fbits) >= 2) {
                        e = e + 1;
                        f = 1;
                    }
                    if (e > bias) {
                        // Overflow
                        e = (1 << ebits) - 1;
                        f = 0;
                    } else {
                        // Normalized
                        e = e + bias;
                        f = f - pow(2, fbits);
                    }
                } else {
                    // Denormalized
                    e = 0;
                    f = roundToEven(v / pow(2, 1 - bias - fbits));
                }
            }

            // Pack sign, exponent, fraction
            bits = [];
            for (i = fbits; i; i -= 1) {
                bits.push(f % 2 ? 1 : 0);
                f = floor(f / 2);
            }
            for (i = ebits; i; i -= 1) {
                bits.push(e % 2 ? 1 : 0);
                e = floor(e / 2);
            }
            bits.push(s ? 1 : 0);
            bits.reverse();
            str = bits.join('');

            // Bits to bytes
            bytes = [];
            while (str.length) {
                bytes.push(parseInt(str.substring(0, 8), 2));
                str = str.substring(8);
            }
            return bytes;
        }

        function unpackIEEE754(bytes, ebits, fbits) {
            // Bytes to bits
            var bits = [], i, j, b, str,
                bias, s, e, f;

            for (i = bytes.length; i; i -= 1) {
                b = bytes[i - 1];
                for (j = 8; j; j -= 1) {
                    bits.push(b % 2 ? 1 : 0);
                    b = b >> 1;
                }
            }
            bits.reverse();
            str = bits.join('');

            // Unpack sign, exponent, fraction
            bias = (1 << (ebits - 1)) - 1;
            s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
            e = parseInt(str.substring(1, 1 + ebits), 2);
            f = parseInt(str.substring(1 + ebits), 2);

            // Produce number
            if (e === (1 << ebits) - 1) {
                return f !== 0 ? NaN : s * Infinity;
            } else if (e > 0) {
                // Normalized
                return s * pow(2, e - bias) * (1 + f / pow(2, fbits));
            } else if (f !== 0) {
                // Denormalized
                return s * pow(2, -(bias - 1)) * (f / pow(2, fbits));
            } else {
                return s < 0 ? -0 : 0;
            }
        }

        function unpackF64(b) {
            return unpackIEEE754(b, 11, 52);
        }

        function packF64(v) {
            return packIEEE754(v, 11, 52);
        }

        function unpackF32(b) {
            return unpackIEEE754(b, 8, 23);
        }

        function packF32(v) {
            return packIEEE754(v, 8, 23);
        }

        //
        // 3 The ArrayBuffer Type
        //

        (function () {

            function ArrayBuffer(length) {
                length = ToInt32(length);
                if (length < 0) throw RangeError('ArrayBuffer size is not a small enough positive integer.');
                Object.defineProperty(this, 'byteLength', {value: length});
                Object.defineProperty(this, '_bytes', {value: Array(length)});

                for (var i = 0; i < length; i += 1)
                    this._bytes[i] = 0;
            }

            global.ArrayBuffer = global.ArrayBuffer || ArrayBuffer;

            //
            // 5 The Typed Array View Types
            //

            function $TypedArray$() {

                // %TypedArray% ( length )
                if (!arguments.length || typeof arguments[0] !== 'object') {
                    return (function (length) {
                        length = ToInt32(length);
                        if (length < 0) throw RangeError('length is not a small enough positive integer.');
                        Object.defineProperty(this, 'length', {value: length});
                        Object.defineProperty(this, 'byteLength', {value: length * this.BYTES_PER_ELEMENT});
                        Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(this.byteLength)});
                        Object.defineProperty(this, 'byteOffset', {value: 0});

                    }).apply(this, arguments);
                }

                // %TypedArray% ( typedArray )
                if (arguments.length >= 1 &&
                    Type(arguments[0]) === 'object' &&
                    arguments[0] instanceof $TypedArray$) {
                    return (function (typedArray) {
                        if (this.constructor !== typedArray.constructor) throw TypeError();

                        var byteLength = typedArray.length * this.BYTES_PER_ELEMENT;
                        Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(byteLength)});
                        Object.defineProperty(this, 'byteLength', {value: byteLength});
                        Object.defineProperty(this, 'byteOffset', {value: 0});
                        Object.defineProperty(this, 'length', {value: typedArray.length});

                        for (var i = 0; i < this.length; i += 1)
                            this._setter(i, typedArray._getter(i));

                    }).apply(this, arguments);
                }

                // %TypedArray% ( array )
                if (arguments.length >= 1 &&
                    Type(arguments[0]) === 'object' && !(arguments[0] instanceof $TypedArray$) && !(arguments[0] instanceof ArrayBuffer || Class(arguments[0]) === 'ArrayBuffer')) {
                    return (function (array) {

                        var byteLength = array.length * this.BYTES_PER_ELEMENT;
                        Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(byteLength)});
                        Object.defineProperty(this, 'byteLength', {value: byteLength});
                        Object.defineProperty(this, 'byteOffset', {value: 0});
                        Object.defineProperty(this, 'length', {value: array.length});

                        for (var i = 0; i < this.length; i += 1) {
                            var s = array[i];
                            this._setter(i, Number(s));
                        }
                    }).apply(this, arguments);
                }

                // %TypedArray% ( buffer, byteOffset=0, length=undefined )
                if (arguments.length >= 1 &&
                    Type(arguments[0]) === 'object' &&
                    (arguments[0] instanceof ArrayBuffer || Class(arguments[0]) === 'ArrayBuffer')) {
                    return (function (buffer, byteOffset, length) {

                        byteOffset = ToUint32(byteOffset);
                        if (byteOffset > buffer.byteLength)
                            throw RangeError('byteOffset out of range');

                        // The given byteOffset must be a multiple of the element
                        // size of the specific type, otherwise an exception is raised.
                        if (byteOffset % this.BYTES_PER_ELEMENT)
                            throw RangeError('buffer length minus the byteOffset is not a multiple of the element size.');

                        if (length === undefined) {
                            var byteLength = buffer.byteLength - byteOffset;
                            if (byteLength % this.BYTES_PER_ELEMENT)
                                throw RangeError('length of buffer minus byteOffset not a multiple of the element size');
                            length = byteLength / this.BYTES_PER_ELEMENT;

                        } else {
                            length = ToUint32(length);
                            byteLength = length * this.BYTES_PER_ELEMENT;
                        }

                        if ((byteOffset + byteLength) > buffer.byteLength)
                            throw RangeError('byteOffset and length reference an area beyond the end of the buffer');

                        Object.defineProperty(this, 'buffer', {value: buffer});
                        Object.defineProperty(this, 'byteLength', {value: byteLength});
                        Object.defineProperty(this, 'byteOffset', {value: byteOffset});
                        Object.defineProperty(this, 'length', {value: length});

                    }).apply(this, arguments);
                }

                // %TypedArray% ( all other argument combinations )
                throw TypeError();
            }

            // Properties of the %TypedArray Instrinsic Object

            // %TypedArray%.from ( source , mapfn=undefined, thisArg=undefined )
            Object.defineProperty($TypedArray$, 'from', {value: function (iterable) {
                return new this(iterable);
            }});

            // %TypedArray%.of ( ...items )
            Object.defineProperty($TypedArray$, 'of', {value: function (/*...items*/) {
                return new this(arguments);
            }});

            // %TypedArray%.prototype
            var $TypedArrayPrototype$ = {};
            $TypedArray$.prototype = $TypedArrayPrototype$;

            // WebIDL: getter type (unsigned long index);
            Object.defineProperty($TypedArray$.prototype, '_getter', {value: function (index) {
                if (arguments.length < 1) throw SyntaxError('Not enough arguments');

                index = ToUint32(index);
                if (index >= this.length)
                    return undefined;

                var bytes = [], i, o;
                for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
                     i < this.BYTES_PER_ELEMENT;
                     i += 1, o += 1) {
                    bytes.push(this.buffer._bytes[o]);
                }
                return this._unpack(bytes);
            }});

            // NONSTANDARD: convenience alias for getter: type get(unsigned long index);
            Object.defineProperty($TypedArray$.prototype, 'get', {value: $TypedArray$.prototype._getter});

            // WebIDL: setter void (unsigned long index, type value);
            Object.defineProperty($TypedArray$.prototype, '_setter', {value: function (index, value) {
                if (arguments.length < 2) throw SyntaxError('Not enough arguments');

                index = ToUint32(index);
                if (index >= this.length)
                    return;

                var bytes = this._pack(value), i, o;
                for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
                     i < this.BYTES_PER_ELEMENT;
                     i += 1, o += 1) {
                    this.buffer._bytes[o] = bytes[i];
                }
            }});

            // get %TypedArray%.prototype.buffer
            // get %TypedArray%.prototype.byteLength
            // get %TypedArray%.prototype.byteOffset
            // -- applied directly to the object in the constructor

            // %TypedArray%.prototype.constructor
            Object.defineProperty($TypedArray$.prototype, 'constructor', {value: $TypedArray$});

            // %TypedArray%.prototype.copyWithin (target, start, end = this.length )
            Object.defineProperty($TypedArray$.prototype, 'copyWithin', {value: function (m_target, m_start) {
                var m_end = arguments[2];

                var m_o = ToObject(this);
                var lenVal = m_o.length;
                var m_len = ToUint32(lenVal);
                m_len = max(m_len, 0);
                var relativeTarget = ToInt32(m_target);
                var m_to;
                if (relativeTarget < 0)
                {
                    m_to = max(m_len + relativeTarget, 0);
                }
                else
                {
                    m_to = min(relativeTarget, m_len);
                }
                var relativeStart = ToInt32(m_start);
                var m_from;
                if (relativeStart < 0)
                {
                    m_from = max(m_len + relativeStart, 0);
                }
                else
                {
                    m_from = min(relativeStart, m_len);
                }
                var relativeEnd;
                if (m_end === undefined)
                {
                    relativeEnd = m_len;
                }
                else
                {
                    relativeEnd = ToInt32(m_end);
                }
                var m_final;
                if (relativeEnd < 0) {
                     m_final = max(m_len + relativeEnd, 0);
                } else {
                     m_final = min(relativeEnd, m_len);
                }

                var m_count = min(m_final - m_from, m_len - m_to);
                var direction;
                if (from < m_to && m_to < m_from + m_count) {
                    direction = -1;
                    m_from = m_from + m_count - 1;
                    m_to = m_to + m_count - 1;
                } else {
                    direction = 1;
                }
                while (count > 0) {
                    m_o._setter(m_to, m_o._getter(m_from));
                    m_from = m_from + direction;
                    m_to = m_to + direction;
                    m_count = m_count - 1;
                }
                return m_o;
            }});

            // %TypedArray%.prototype.entries ( )
            // -- defined in es6.js to shim browsers w/ native TypedArrays

            // %TypedArray%.prototype.every ( callbackfn, thisArg = undefined )
            Object.defineProperty($TypedArray$.prototype, 'every', {value: function (callbackfn) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                if (!IsCallable(callbackfn)) throw TypeError();
                var thisArg = arguments[1];
                for (var i = 0; i < len; i++) {
                    if (!callbackfn.call(thisArg, t._getter(i), i, t))
                        return false;
                }
                return true;
            }});

            // %TypedArray%.prototype.fill (value, start = 0, end = this.length )
            Object.defineProperty($TypedArray$.prototype, 'fill', {value: function (value) {
                var m_start = arguments[1],
                    m_end = arguments[2];

                var m_o = ToObject(this);
                var lenVal = m_o.length;
                var m_len = ToUint32(lenVal);
                m_len = max(m_len, 0);
                var relativeStart = ToInt32(m_start);
                var m_k;
                if (relativeStart < 0)
                {
                    m_k = max((m_len + relativeStart), 0);
                }
                else
                {
                    m_k = min(relativeStart, m_len);
                }
                var relativeEnd;
                if (m_end === undefined)
                {
                    relativeEnd = m_len;
                }
                else
                {
                    relativeEnd = ToInt32(m_end);
                }
                var m_final;
                if (relativeEnd < 0)
                {
                    m_final = max((m_len + relativeEnd), 0);
                }
                else
                {
                    m_final = min(relativeEnd, m_len);
                }
                while (m_k < m_final) {
                    m_o._setter(m_k, value);
                    m_k += 1;
                }
                return m_o;
            }});

            // %TypedArray%.prototype.filter ( callbackfn, thisArg = undefined )
            Object.defineProperty($TypedArray$.prototype, 'filter', {value: function (callbackfn) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                if (!IsCallable(callbackfn)) throw TypeError();
                var res = [];
                var thisp = arguments[1];
                for (var i = 0; i < len; i++) {
                    var val = t._getter(i); // in case fun mutates this
                    if (callbackfn.call(thisp, val, i, t))
                        res.push(val);
                }
                return new this.constructor(res);
            }});

            // %TypedArray%.prototype.find (predicate, thisArg = undefined)
            Object.defineProperty($TypedArray$.prototype, 'find', {value: function (predicate) {
                var o = ToObject(this);
                var lenValue = o.length;
                var len = ToUint32(lenValue);
                if (!IsCallable(predicate)) throw TypeError();
                var t = arguments.length > 1 ? arguments[1] : undefined;
                var k = 0;
                while (k < len) {
                    var kValue = o._getter(k);
                    var testResult = predicate.call(t, kValue, k, o);
                    if (Boolean(testResult))
                        return kValue;
                    ++k;
                }
                return undefined;
            }});

            // %TypedArray%.prototype.findIndex ( predicate, thisArg = undefined )
            Object.defineProperty($TypedArray$.prototype, 'findIndex', {value: function (predicate) {
                var o = ToObject(this);
                var lenValue = o.length;
                var len = ToUint32(lenValue);
                if (!IsCallable(predicate)) throw TypeError();
                var t = arguments.length > 1 ? arguments[1] : undefined;
                var k = 0;
                while (k < len) {
                    var kValue = o._getter(k);
                    var testResult = predicate.call(t, kValue, k, o);
                    if (Boolean(testResult))
                        return k;
                    ++k;
                }
                return -1;
            }});

            // %TypedArray%.prototype.forEach ( callbackfn, thisArg = undefined )
            Object.defineProperty($TypedArray$.prototype, 'forEach', {value: function (callbackfn) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                if (!IsCallable(callbackfn)) throw TypeError();
                var thisp = arguments[1];
                for (var i = 0; i < len; i++)
                    callbackfn.call(thisp, t._getter(i), i, t);
            }});

            // %TypedArray%.prototype.indexOf (searchElement, fromIndex = 0 )
            Object.defineProperty($TypedArray$.prototype, 'indexOf', {value: function (searchElement) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                if (len === 0) return -1;
                var no = 0;
                var na;
                if (arguments.length > 0) {
                    na = Number(arguments[1]);
                    if (na !== no) {
                        no = 0;
                    } else if (na !== 0 && na !== (1 / 0) && na !== -(1 / 0)) {
                        no = (na > 0 || -1) * floor(abs(na));
                    }
                }
                if (no >= len) return -1;
                var k = no >= 0 ? no : max(len - abs(no), 0);
                for (; k < len; k++) {
                    if (t._getter(k) === searchElement) {
                        return k;
                    }
                }
                return -1;
            }});

            // %TypedArray%.prototype.join ( separator )
            Object.defineProperty($TypedArray$.prototype, 'join', {value: function (separator) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                var tmp = Array(len);
                for (var i = 0; i < len; ++i)
                    tmp[i] = t._getter(i);
                return tmp.join(separator === undefined ? ',' : separator); // Hack for IE7
            }});

            // %TypedArray%.prototype.keys ( )
            // -- defined in es6.js to shim browsers w/ native TypedArrays

            // %TypedArray%.prototype.lastIndexOf ( searchElement, fromIndex = this.length-1 )
            Object.defineProperty($TypedArray$.prototype, 'lastIndexOf', {value: function (searchElement) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                if (len === 0) return -1;
                var n = len;
                if (arguments.length > 1) {
                    n = Number(arguments[1]);
                    if (n !== n) {
                        n = 0;
                    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                        n = (n > 0 || -1) * floor(abs(n));
                    }
                }
                var k = n >= 0 ? min(n, len - 1) : len - abs(n);
                for (; k >= 0; k--) {
                    if (t._getter(k) === searchElement)
                        return k;
                }
                return -1;
            }});

            // get %TypedArray%.prototype.length
            // -- applied directly to the object in the constructor

            // %TypedArray%.prototype.map ( callbackfn, thisArg = undefined )
            Object.defineProperty($TypedArray$.prototype, 'map', {value: function (callbackfn) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                if (!IsCallable(callbackfn)) throw TypeError();
                var res = [];
                res.length = len;
                var thisp = arguments[1];
                for (var i = 0; i < len; i++)
                    res[i] = callbackfn.call(thisp, t._getter(i), i, t);
                return new this.constructor(res);
            }});

            // %TypedArray%.prototype.reduce ( callbackfn [, initialValue] )
            Object.defineProperty($TypedArray$.prototype, 'reduce', {value: function (callbackfn) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                if (!IsCallable(callbackfn)) throw TypeError();
                // no value to return if no initial value and an empty array
                if (len === 0 && arguments.length === 1) throw TypeError();
                var k = 0;
                var accumulator;
                if (arguments.length >= 2) {
                    accumulator = arguments[1];
                } else {
                    accumulator = t._getter(k++);
                }
                while (k < len) {
                    accumulator = callbackfn.call(undefined, accumulator, t._getter(k), k, t);
                    k++;
                }
                return accumulator;
            }});

            // %TypedArray%.prototype.reduceRight ( callbackfn [, initialValue] )
            Object.defineProperty($TypedArray$.prototype, 'reduceRight', {value: function (callbackfn) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                if (!IsCallable(callbackfn)) throw TypeError();
                // no value to return if no initial value, empty array
                if (len === 0 && arguments.length === 1) throw TypeError();
                var k = len - 1;
                var accumulator;
                if (arguments.length >= 2) {
                    accumulator = arguments[1];
                } else {
                    accumulator = t._getter(k--);
                }
                while (k >= 0) {
                    accumulator = callbackfn.call(undefined, accumulator, t._getter(k), k, t);
                    k--;
                }
                return accumulator;
            }});

            // %TypedArray%.prototype.reverse ( )
            Object.defineProperty($TypedArray$.prototype, 'reverse', {value: function () {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                var half = floor(len / 2);
                for (var i = 0, j = len - 1; i < half; ++i, --j) {
                    var tmp = t._getter(i);
                    t._setter(i, t._getter(j));
                    t._setter(j, tmp);
                }
                return t;
            }});

            // %TypedArray%.prototype.set(array, offset = 0 )
            // %TypedArray%.prototype.set(typedArray, offset = 0 )
            // WebIDL: void set(TypedArray array, optional unsigned long offset);
            // WebIDL: void set(sequence<type> array, optional unsigned long offset);
            Object.defineProperty($TypedArray$.prototype, 'set', {value: function (index, value) {
                if (arguments.length < 1) throw SyntaxError('Not enough arguments');
                var array, sequence, offset, len,
                    i, s, d,
                    byteOffset, byteLength, tmp;

                if (typeof arguments[0] === 'object' && arguments[0].constructor === this.constructor) {
                    // void set(TypedArray array, optional unsigned long offset);
                    array = arguments[0];
                    offset = ToUint32(arguments[1]);

                    if (offset + array.length > this.length) {
                        throw RangeError('Offset plus length of array is out of range');
                    }

                    byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT;
                    byteLength = array.length * this.BYTES_PER_ELEMENT;

                    if (array.buffer === this.buffer) {
                        tmp = [];
                        for (i = 0, s = array.byteOffset; i < byteLength; i += 1, s += 1) {
                            tmp[i] = array.buffer._bytes[s];
                        }
                        for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1) {
                            this.buffer._bytes[d] = tmp[i];
                        }
                    } else {
                        for (i = 0, s = array.byteOffset, d = byteOffset;
                             i < byteLength; i += 1, s += 1, d += 1) {
                            this.buffer._bytes[d] = array.buffer._bytes[s];
                        }
                    }
                } else if (typeof arguments[0] === 'object' && typeof arguments[0].length !== 'undefined') {
                    // void set(sequence<type> array, optional unsigned long offset);
                    sequence = arguments[0];
                    len = ToUint32(sequence.length);
                    offset = ToUint32(arguments[1]);

                    if (offset + len > this.length) {
                        throw RangeError('Offset plus length of array is out of range');
                    }

                    for (i = 0; i < len; i += 1) {
                        s = sequence[i];
                        this._setter(offset + i, Number(s));
                    }
                } else {
                    throw TypeError('Unexpected argument type(s)');
                }
            }});

            // %TypedArray%.prototype.slice ( start, end )
            Object.defineProperty($TypedArray$.prototype, 'slice', {value: function (m_start, m_end) {
                var m_o = ToObject(this);
                var lenVal = m_o.length;
                var m_len = ToUint32(lenVal);
                var relativeStart = ToInt32(m_start);
                var m_k = (relativeStart < 0) ? max(m_len + relativeStart, 0) : min(relativeStart, m_len);
                var relativeEnd = (m_end === undefined) ? m_len : ToInt32(m_end);
                var m_final = (relativeEnd < 0) ? max(m_len + relativeEnd, 0) : min(relativeEnd, m_len);
                var m_count = m_final - m_k;
                var m_c = m_o.constructor;
                var m_a = new m_c(m_count);
                var m_n = 0;
                while (m_k < m_final) {
                    var kValue = m_o._getter(m_k);
                    m_a._setter(m_n, kValue);
                    ++m_k;
                    ++m_n;
                }
                return m_a;
            }});

            // %TypedArray%.prototype.some ( callbackfn, thisArg = undefined )
            Object.defineProperty($TypedArray$.prototype, 'some', {value: function (callbackfn) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                if (!IsCallable(callbackfn)) throw TypeError();
                var thisp = arguments[1];
                for (var i = 0; i < len; i++) {
                    if (callbackfn.call(thisp, t._getter(i), i, t)) {
                        return true;
                    }
                }
                return false;
            }});

            // %TypedArray%.prototype.sort ( comparefn )
            Object.defineProperty($TypedArray$.prototype, 'sort', {value: function (comparefn) {
                if (this === undefined || this === null) throw TypeError();
                var t = Object(this);
                var len = ToUint32(t.length);
                var tmp = Array(len);
                for (var i = 0; i < len; ++i)
                    tmp[i] = t._getter(i);
                if (comparefn) tmp.sort(comparefn); else tmp.sort(); // Hack for IE8/9
                for (i = 0; i < len; ++i)
                    t._setter(i, tmp[i]);
                return t;
            }});

            // %TypedArray%.prototype.subarray(begin = 0, end = this.length )
            // WebIDL: TypedArray subarray(long begin, optional long end);
            Object.defineProperty($TypedArray$.prototype, 'subarray', {value: function (start, end) {
                function clamp(v, min, max) {
                    return v < min ? min : v > max ? max : v;
                }

                start = ToInt32(start);
                end = ToInt32(end);

                if (arguments.length < 1) {
                    start = 0;
                }
                if (arguments.length < 2) {
                    end = this.length;
                }

                if (start < 0) {
                    start = this.length + start;
                }
                if (end < 0) {
                    end = this.length + end;
                }

                start = clamp(start, 0, this.length);
                end = clamp(end, 0, this.length);

                var len = end - start;
                if (len < 0) {
                    len = 0;
                }

                return new this.constructor(
                    this.buffer, this.byteOffset + start * this.BYTES_PER_ELEMENT, len);
            }});

            // %TypedArray%.prototype.toLocaleString ( )
            // %TypedArray%.prototype.toString ( )
            // %TypedArray%.prototype.values ( )
            // %TypedArray%.prototype [ @@iterator ] ( )
            // get %TypedArray%.prototype [ @@toStringTag ]
            // -- defined in es6.js to shim browsers w/ native TypedArrays

            function makeTypedArray(elementSize, pack, unpack) {
                // Each TypedArray type requires a distinct constructor instance with
                // identical logic, which this produces.
                var TypedArray = function () {
                    Object.defineProperty(this, 'constructor', {value: TypedArray});
                    $TypedArray$.apply(this, arguments);
                    makeArrayAccessors(this);
                };
                if ('__proto__' in TypedArray) {
                    TypedArray.__proto__ = $TypedArray$;
                } else {
                    TypedArray.from = $TypedArray$.from;
                    TypedArray.of = $TypedArray$.of;
                }

                TypedArray.BYTES_PER_ELEMENT = elementSize;

                var TypedArrayPrototype = function () {
                };
                TypedArrayPrototype.prototype = $TypedArrayPrototype$;

                TypedArray.prototype = new TypedArrayPrototype();

                Object.defineProperty(TypedArray.prototype, 'BYTES_PER_ELEMENT', {value: elementSize});
                Object.defineProperty(TypedArray.prototype, '_pack', {value: pack});
                Object.defineProperty(TypedArray.prototype, '_unpack', {value: unpack});

                return TypedArray;
            }

            var Int8Array = makeTypedArray(1, packI8, unpackI8);
            var Uint8Array = makeTypedArray(1, packU8, unpackU8);
            var Uint8ClampedArray = makeTypedArray(1, packU8Clamped, unpackU8);
            var Int16Array = makeTypedArray(2, packI16, unpackI16);
            var Uint16Array = makeTypedArray(2, packU16, unpackU16);
            var Int32Array = makeTypedArray(4, packI32, unpackI32);
            var Uint32Array = makeTypedArray(4, packU32, unpackU32);
            var Float32Array = makeTypedArray(4, packF32, unpackF32);
            var Float64Array = makeTypedArray(8, packF64, unpackF64);

            global.Int8Array = win.Int8Array = global.Int8Array || Int8Array;
            global.Uint8Array = win.Uint8Array = global.Uint8Array || Uint8Array;
            global.Uint8ClampedArray = win.Uint8ClampedArray = global.Uint8ClampedArray || Uint8ClampedArray;
            global.Int16Array = win.Int16Array = global.Int16Array || Int16Array;
            global.Uint16Array = win.Uint16Array = global.Uint16Array || Uint16Array;
            global.Int32Array = win.Int32Array = global.Int32Array || Int32Array;
            global.Uint32Array = win.Uint32Array = global.Uint32Array || Uint32Array;
            global.Float32Array = win.Float32Array = global.Float32Array || Float32Array;
            global.Float64Array = win.Float64Array = global.Float64Array || Float64Array;
        }());

        //
        // 6 The DataView View Type
        //

        (function () {
            function r(array, index) {
                return IsCallable(array.get) ? array.get(index) : array[index];
            }

            var IS_BIG_ENDIAN = (function () {
                var u16array = new global.Uint16Array([0x1234]),
                    u8array = new global.Uint8Array(u16array.buffer);
                return r(u8array, 0) === 0x12;
            }());

            // DataView(buffer, byteOffset=0, byteLength=undefined)
            // WebIDL: Constructor(ArrayBuffer buffer,
            //                     optional unsigned long byteOffset,
            //                     optional unsigned long byteLength)
            function DataView(buffer, byteOffset, byteLength) {
                if (!(buffer instanceof ArrayBuffer || Class(buffer) === 'ArrayBuffer')) throw TypeError();

                byteOffset = ToUint32(byteOffset);
                if (byteOffset > buffer.byteLength)
                    throw RangeError('byteOffset out of range');

                if (byteLength === undefined)
                    byteLength = buffer.byteLength - byteOffset;
                else
                    byteLength = ToUint32(byteLength);

                if ((byteOffset + byteLength) > buffer.byteLength)
                    throw RangeError('byteOffset and length reference an area beyond the end of the buffer');

                Object.defineProperty(this, 'buffer', {value: buffer});
                Object.defineProperty(this, 'byteLength', {value: byteLength});
                Object.defineProperty(this, 'byteOffset', {value: byteOffset});
            };

            // get DataView.prototype.buffer
            // get DataView.prototype.byteLength
            // get DataView.prototype.byteOffset
            // -- applied directly to instances by the constructor

            function makeGetter(arrayType) {
                return function GetViewValue(byteOffset, littleEndian) {
                    byteOffset = ToUint32(byteOffset);

                    if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
                        throw RangeError('Array index out of range');

                    byteOffset += this.byteOffset;

                    var uint8Array = new global.Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT),
                        bytes = [];
                    for (var i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
                        bytes.push(r(uint8Array, i));

                    if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
                        bytes.reverse();

                    return r(new arrayType(new global.Uint8Array(bytes).buffer), 0);
                };
            }

            Object.defineProperty(DataView.prototype, 'getUint8', {value: makeGetter(global.Uint8Array)});
            Object.defineProperty(DataView.prototype, 'getInt8', {value: makeGetter(global.Int8Array)});
            Object.defineProperty(DataView.prototype, 'getUint16', {value: makeGetter(global.Uint16Array)});
            Object.defineProperty(DataView.prototype, 'getInt16', {value: makeGetter(global.Int16Array)});
            Object.defineProperty(DataView.prototype, 'getUint32', {value: makeGetter(global.Uint32Array)});
            Object.defineProperty(DataView.prototype, 'getInt32', {value: makeGetter(global.Int32Array)});
            Object.defineProperty(DataView.prototype, 'getFloat32', {value: makeGetter(global.Float32Array)});
            Object.defineProperty(DataView.prototype, 'getFloat64', {value: makeGetter(global.Float64Array)});

            function makeSetter(arrayType) {
                return function SetViewValue(byteOffset, value, littleEndian) {
                    byteOffset = ToUint32(byteOffset);
                    if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
                        throw RangeError('Array index out of range');

                    // Get bytes
                    var typeArray = new arrayType([value]),
                        byteArray = new global.Uint8Array(typeArray.buffer),
                        bytes = [], i, byteView;

                    for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
                        bytes.push(r(byteArray, i));

                    // Flip if necessary
                    if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
                        bytes.reverse();

                    // Write them
                    byteView = new Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT);
                    byteView.set(bytes);
                };
            }

            Object.defineProperty(DataView.prototype, 'setUint8', {value: makeSetter(global.Uint8Array)});
            Object.defineProperty(DataView.prototype, 'setInt8', {value: makeSetter(global.Int8Array)});
            Object.defineProperty(DataView.prototype, 'setUint16', {value: makeSetter(global.Uint16Array)});
            Object.defineProperty(DataView.prototype, 'setInt16', {value: makeSetter(global.Int16Array)});
            Object.defineProperty(DataView.prototype, 'setUint32', {value: makeSetter(global.Uint32Array)});
            Object.defineProperty(DataView.prototype, 'setInt32', {value: makeSetter(global.Int32Array)});
            Object.defineProperty(DataView.prototype, 'setFloat32', {value: makeSetter(global.Float32Array)});
            Object.defineProperty(DataView.prototype, 'setFloat64', {value: makeSetter(global.Float64Array)});

            global.DataView = global.DataView || DataView;

        }());

    }(exports, window)
        );
}
// workaround for crypto-js on IE11
// http://code.google.com/p/crypto-js/issues/detail?id=81
if ('window' in global) {
    if (!('Uint8ClampedArray' in window)) {
        window.Uint8ClampedArray = global.Uint8Array;
    }
}
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],16:[function(_dereq_,module,exports){
(function (global){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////

// require('assert') would be nice .. but it does not
// work with Google Closure after Browserify

var when = _dereq_('when');
var when_fn = _dereq_("when/function");

var log = _dereq_('./log.js');
var util = _dereq_('./util.js');

// IE fallback (http://afuchs.tumblr.com/post/23550124774/date-now-in-ie8)
Date.now = Date.now || function() { return +new Date; };


// WAMP "Advanced Profile" support in AutobahnJS per role
//
WAMP_FEATURES = {
   caller: {
      features: {
         caller_identification: true,
         progressive_call_results: true
      }
   },
   callee: {
      features: {
         progressive_call_results: true
      }
   },
   publisher: {
      features: {
         subscriber_blackwhite_listing: true,
         publisher_exclusion: true,
         publisher_identification: true
      }
   },
   subscriber: {
      features: {
         publisher_identification: true
      }
   }
};


// generate a WAMP ID
//
function newid () {
   return Math.floor(Math.random() * 9007199254740992);
}


var Invocation = function (caller, progress) {

   var self = this;

   self.caller = caller;
   self.progress = progress;
};


var Event = function (publication, publisher) {

   var self = this;

   self.publication = publication;
   self.publisher = publisher;
};


var Result = function (args, kwargs) {

   var self = this;

   self.args = args || [];
   self.kwargs = kwargs || {};
};


var Error = function (error, args, kwargs) {

   var self = this;

   self.error = error;
   self.args = args || [];
   self.kwargs = kwargs || {};
};


var Subscription = function (topic, handler, options, session, id) {

   var self = this;

   self.topic = topic;
   self.handler = handler;
   self.options = options || {};
   self.session = session;
   self.id = id;

   self.active = true;
};


Subscription.prototype.unsubscribe = function () {

   var self = this;
   return self.session.unsubscribe(self);
};



var Registration = function (procedure, endpoint, options, session, id) {

   var self = this;

   self.procedure = procedure;
   self.endpoint = endpoint;
   self.options = options || {};
   self.session = session;
   self.id = id;

   self.active = true;
};


Registration.prototype.unregister = function () {

   var self = this;
   return self.session.unregister(self);
};


var Publication = function (id) {

   var self = this;
   self.id = id;
};


var MSG_TYPE = {
   HELLO: 1,
   WELCOME: 2,
   ABORT: 3,
   CHALLENGE: 4,
   AUTHENTICATE: 5,
   GOODBYE: 6,
   HEARTBEAT: 7,
   ERROR: 8,
   PUBLISH: 16,
   PUBLISHED: 17,
   SUBSCRIBE: 32,
   SUBSCRIBED: 33,
   UNSUBSCRIBE: 34,
   UNSUBSCRIBED: 35,
   EVENT: 36,
   CALL: 48,
   CANCEL: 49,
   RESULT: 50,
   REGISTER: 64,
   REGISTERED: 65,
   UNREGISTER: 66,
   UNREGISTERED: 67,
   INVOCATION: 68,
   INTERRUPT: 69,
   YIELD: 70
};



var Session = function (socket, defer, onchallenge) {

   var self = this;

   // the transport connection (WebSocket object)
   self._socket = socket;

   // the Deferred factory to use
   self._defer = defer;

   // the WAMP authentication challenge handler
   self._onchallenge = onchallenge;

   // the WAMP session ID
   self._id = null;

   // the WAMP realm joined
   self._realm = null;

   // the WAMP features in use
   self._features = null;

   // closing state
   self._goodbye_sent = false;
   self._transport_is_closing = false;

   // outstanding requests;
   self._publish_reqs = {};
   self._subscribe_reqs = {};
   self._unsubscribe_reqs = {};
   self._call_reqs = {};
   self._register_reqs = {};
   self._unregister_reqs = {};

   // subscriptions in place;
   self._subscriptions = {};

   // registrations in place;
   self._registrations = {};

   // incoming invocations;
   self._invocations = {};

   // prefix shortcuts for URIs
   self._prefixes = {};



   self._send_wamp = function (msg) {
      // forward WAMP message to be sent to WAMP transport
      self._socket.send(msg);
   };


   self._protocol_violation = function (reason) {
      log.debug("failing transport due to protocol violation: " + reason);
      self._socket.close(1002, "protocol violation: " + reason);
   };

   self._MESSAGE_MAP = {};
   self._MESSAGE_MAP[MSG_TYPE.ERROR] = {};


   self._process_SUBSCRIBED = function (msg) {
      //
      // process SUBSCRIBED reply to SUBSCRIBE
      //
      var request = msg[1];
      var subscription = msg[2];

      if (request in self._subscribe_reqs) {

         var r = self._subscribe_reqs[request];

         var d = r[0];
         var topic = r[1];
         var handler = r[2];
         var options = r[3];

         if (!(subscription in self._subscriptions)) {
            self._subscriptions[subscription] = [];
         }
         var sub = new Subscription(topic, handler, options, self, subscription);
         self._subscriptions[subscription].push(sub);

         d.resolve(sub);

         delete self._subscribe_reqs[request];

      } else {
         self._protocol_violation("SUBSCRIBED received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.SUBSCRIBED] = self._process_SUBSCRIBED;


   self._process_SUBSCRIBE_ERROR = function (msg) {
      //
      // process ERROR reply to SUBSCRIBE
      //
      var request = msg[2];
      if (request in self._subscribe_reqs) {

         var details = msg[3];
         var error = new Error(msg[4], msg[5], msg[6]);

         var r = self._subscribe_reqs[request];

         var d = r[0];

         d.reject(error);

         delete self._subscribe_reqs[request];

      } else {
         self._protocol_violation("SUBSCRIBE-ERROR received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.SUBSCRIBE] = self._process_SUBSCRIBE_ERROR;


   self._process_UNSUBSCRIBED = function (msg) {
      //
      // process UNSUBSCRIBED reply to UNSUBSCRIBE
      //
      var request = msg[1];

      if (request in self._unsubscribe_reqs) {

         var r = self._unsubscribe_reqs[request];

         var d = r[0];
         var subscription = r[1];

         if (subscription in self._subscriptions) {
            var subs = self._subscriptions[subscription];
            // the following should actually be NOP, since UNSUBSCRIBE was
            // only sent when subs got empty
            for (var i = 0; i < subs.length; ++i) {
               subs[i].active = false;
            }
            delete self._subscriptions[subscription];
         }

         d.resolve(true);

         delete self._unsubscribe_reqs[request];

      } else {
         self._protocol_violation("UNSUBSCRIBED received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.UNSUBSCRIBED] = self._process_UNSUBSCRIBED;


   self._process_UNSUBSCRIBE_ERROR = function (msg) {
      //
      // process ERROR reply to UNSUBSCRIBE
      //
      var request = msg[2];
      if (request in self._unsubscribe_reqs) {

         var details = msg[3];
         var error = new Error(msg[4], msg[5], msg[6]);

         var r = self._unsubscribe_reqs[request];

         var d = r[0];
         var subscription = r[1];

         d.reject(error);

         delete self._unsubscribe_reqs[request];

      } else {
         self._protocol_violation("UNSUBSCRIBE-ERROR received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.UNSUBSCRIBE] = self._process_UNSUBSCRIBE_ERROR;


   self._process_PUBLISHED = function (msg) {
      //
      // process PUBLISHED reply to PUBLISH
      //
      var request = msg[1];
      var publication = msg[2];

      if (request in self._publish_reqs) {

         var r = self._publish_reqs[request];

         var d = r[0];
         var options = r[1];

         var pub = new Publication(publication);
         d.resolve(pub);

         delete self._publish_reqs[request];

      } else {
         self._protocol_violation("PUBLISHED received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.PUBLISHED] = self._process_PUBLISHED;


   self._process_PUBLISH_ERROR = function (msg) {
      //
      // process ERROR reply to PUBLISH
      //
      var request = msg[2];
      if (request in self._publish_reqs) {

         var details = msg[3];
         var error = new Error(msg[4], msg[5], msg[6]);

         var r = self._publish_reqs[request];

         var d = r[0];
         var options = r[1];

         d.reject(error);

         delete self._publish_reqs[request];

      } else {
         self._protocol_violation("PUBLISH-ERROR received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.PUBLISH] = self._process_PUBLISH_ERROR;


   self._process_EVENT = function (msg) {
      //
      // process EVENT message
      //
      // [EVENT, SUBSCRIBED.Subscription|id, PUBLISHED.Publication|id, Details|dict, PUBLISH.Arguments|list, PUBLISH.ArgumentsKw|dict]

      var subscription = msg[1];

      if (subscription in self._subscriptions) {

         var publication = msg[2];
         var details = msg[3];

         var args = msg[4] || [];
         var kwargs = msg[5] || {};

         var ed = new Event(publication, details.publisher);

         var subs = self._subscriptions[subscription];

         for (var i = 0; i < subs.length; ++i) {
            try {
               subs[i].handler(args, kwargs, ed);
            } catch (e) {
               log.debug("Exception raised in event handler", e);
            }
         }

      } else {
         self._protocol_violation("EVENT received for non-subscribed subscription ID " + subscription);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.EVENT] = self._process_EVENT;


   self._process_REGISTERED = function (msg) {
      //
      // process REGISTERED reply to REGISTER
      //
      var request = msg[1];
      var registration = msg[2];

      if (request in self._register_reqs) {

         var r = self._register_reqs[request];

         var d = r[0];
         var procedure = r[1];
         var endpoint = r[2];
         var options = r[3];

         var reg = new Registration(procedure, endpoint, options, self, registration);

         self._registrations[registration] = reg;

         d.resolve(reg);

         delete self._register_reqs[request];

      } else {
         self._protocol_violation("REGISTERED received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.REGISTERED] = self._process_REGISTERED;


   self._process_REGISTER_ERROR = function (msg) {
      //
      // process ERROR reply to REGISTER
      //
      var request = msg[2];
      if (request in self._register_reqs) {

         var details = msg[3];
         var error = new Error(msg[4], msg[5], msg[6]);

         var r = self._register_reqs[request];

         var d = r[0];

         d.reject(error);

         delete self._register_reqs[request];

      } else {
         self._protocol_violation("REGISTER-ERROR received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.REGISTER] = self._process_REGISTER_ERROR;


   self._process_UNREGISTERED = function (msg) {
      //
      // process UNREGISTERED reply to UNREGISTER
      //
      var request = msg[1];

      if (request in self._unregister_reqs) {

         var r = self._unregister_reqs[request];

         var d = r[0];
         var registration = r[1];

         if (registration.id in self._registrations) {
            delete self._registrations[registration.id];
         }

         registration.active = false;
         d.resolve();

         delete self._unregister_reqs[request];

      } else {
         self._protocol_violation("UNREGISTERED received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.UNREGISTERED] = self._process_UNREGISTERED;


   self._process_UNREGISTER_ERROR = function (msg) {
      //
      // process ERROR reply to UNREGISTER
      //
      var request = msg[2];
      if (request in self._unregister_reqs) {

         var details = msg[3];
         var error = new Error(msg[4], msg[5], msg[6]);

         var r = self._unregister_reqs[request];

         var d = r[0];
         var registration = r[1];

         d.reject(error);

         delete self._unregister_reqs[request];

      } else {
         self._protocol_violation("UNREGISTER-ERROR received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.UNREGISTER] = self._process_UNREGISTER_ERROR;


   self._process_RESULT = function (msg) {
      //
      // process RESULT reply to CALL
      //
      var request = msg[1];
      if (request in self._call_reqs) {

         var details = msg[2];

         var args = msg[3] || [];
         var kwargs = msg[4] || {};

         // maybe wrap complex result:
         var result = null;
         if (args.length > 1 || Object.keys(kwargs).length > 0) {
            // wrap complex result is more than 1 positional result OR
            // non-empty keyword result
            result = new Result(args, kwargs);
         } else if (args.length > 0) {
            // single positional result
            result = args[0];
         }

         var r = self._call_reqs[request];

         var d = r[0];
         var options = r[1];

         if (details.progress) {
            if (options && options.receive_progress) {
               d.notify(result);
            }
         } else {
            d.resolve(result);
            delete self._call_reqs[request];
         }
      } else {
         self._protocol_violation("CALL-RESULT received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.RESULT] = self._process_RESULT;


   self._process_CALL_ERROR = function (msg) {
      //
      // process ERROR reply to CALL
      //
      var request = msg[2];
      if (request in self._call_reqs) {

         var details = msg[3];
         var error = new Error(msg[4], msg[5], msg[6]);

         var r = self._call_reqs[request];

         var d = r[0];
         var options = r[1];

         d.reject(error);

         delete self._call_reqs[request];

      } else {
         self._protocol_violation("CALL-ERROR received for non-pending request ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.CALL] = self._process_CALL_ERROR;


   self._process_INVOCATION = function (msg) {
      //
      // process INVOCATION message
      //
      // [INVOCATION, Request|id, REGISTERED.Registration|id, Details|dict, CALL.Arguments|list, CALL.ArgumentsKw|dict]
      //
      var request = msg[1];
      var registration = msg[2];

      var details = msg[3];
      // receive_progress
      // timeout
      // caller

      if (registration in self._registrations) {

         var endpoint = self._registrations[registration].endpoint;

         var args = msg[4] || [];
         var kwargs = msg[5] || {};

         // create progress function for invocation
         //
         var progress = null;
         if (details.receive_progress) {

            progress = function (args, kwargs) {
               var progress_msg = [MSG_TYPE.YIELD, request, {progress: true}];

               args = args || [];
               kwargs = kwargs || {};

               var kwargs_len = Object.keys(kwargs).length;
               if (args.length || kwargs_len) {
                  progress_msg.push(args);
                  if (kwargs_len) {
                     progress_msg.push(kwargs);
                  }
               }
               self._send_wamp(progress_msg);
            }
         };

         var cd = new Invocation(details.caller, progress);

         // We use the following whenjs call wrapper, which automatically
         // wraps a plain, non-promise value in a (immediately resolved) promise
         //
         // See: https://github.com/cujojs/when/blob/master/docs/api.md#fncall
         //
         when_fn.call(endpoint, args, kwargs, cd).then(

            function (res) {
               // construct YIELD message
               // FIXME: Options
               //
               var reply = [MSG_TYPE.YIELD, request, {}];

               if (res instanceof Result) {
                  var kwargs_len = Object.keys(res.kwargs).length;
                  if (res.args.length || kwargs_len) {
                     reply.push(res.args);
                     if (kwargs_len) {
                        reply.push(res.kwargs);
                     }
                  }
               } else {
                  reply.push([res]);
               }

               // send WAMP message
               //
               self._send_wamp(reply);
            },

            function (err) {
               // construct ERROR message
               // [ERROR, REQUEST.Type|int, REQUEST.Request|id, Details|dict, Error|uri, Arguments|list, ArgumentsKw|dict]

               var reply = [MSG_TYPE.ERROR, MSG_TYPE.INVOCATION, request, {}];

               if (err instanceof Error) {

                  reply.push(err.error);

                  var kwargs_len = Object.keys(err.kwargs).length;
                  if (err.args.length || kwargs_len) {
                     reply.push(err.args);
                     if (kwargs_len) {
                        reply.push(err.kwargs);
                     }
                  }
               } else {
                  reply.push('wamp.error.runtime_error');
                  reply.push([err]);
               }

               // send WAMP message
               //
               self._send_wamp(reply);
            }
         );

      } else {
         self._protocol_violation("INVOCATION received for non-registered registration ID " + request);
      }
   };
   self._MESSAGE_MAP[MSG_TYPE.INVOCATION] = self._process_INVOCATION;


   // callback fired by WAMP transport on receiving a WAMP message
   //
   self._socket.onmessage = function (msg) {

      var msg_type = msg[0];

      // WAMP session not yet open
      //
      if (!self._id) {

         // the first message must be WELCOME, ABORT or CHALLENGE ..
         //
         if (msg_type === MSG_TYPE.WELCOME) {

            self._id = msg[1];

            // determine actual set of advanced features that can be used
            //
            var rf = msg[2];
            self._features = {};

            if (rf.roles.broker) {
               // "Basic Profile" is mandatory
               self._features.subscriber = {};
               self._features.publisher = {};

               // fill in features that both peers support
               if (rf.roles.broker.features) {

                  for (var att in WAMP_FEATURES.publisher.features) {
                     self._features.publisher[att] = WAMP_FEATURES.publisher.features[att] &&
                                                     rf.roles.broker.features[att];
                  }

                  for (var att in WAMP_FEATURES.subscriber.features) {
                     self._features.subscriber[att] = WAMP_FEATURES.subscriber.features[att] &&
                                                      rf.roles.broker.features[att];
                  }
               }
            }

            if (rf.roles.dealer) {
               // "Basic Profile" is mandatory
               self._features.caller = {};
               self._features.callee = {};

               // fill in features that both peers support
               if (rf.roles.dealer.features) {

                  for (var att in WAMP_FEATURES.caller.features) {
                     self._features.caller[att] = WAMP_FEATURES.caller.features[att] &&
                                                  rf.roles.dealer.features[att];
                  }

                  for (var att in WAMP_FEATURES.callee.features) {
                     self._features.callee[att] = WAMP_FEATURES.callee.features[att] &&
                                                  rf.roles.dealer.features[att];
                  }
               }
            }

            if (self.onjoin) {
               self.onjoin(msg[2]);
            }

         } else if (msg_type === MSG_TYPE.ABORT) {

            var details = msg[1];
            var reason = msg[2];

            if (self.onleave) {
               self.onleave(reason, details);
            }

         } else if (msg_type === MSG_TYPE.CHALLENGE) {

            if (self._onchallenge) {

               var method = msg[1];
               var extra = msg[2];

               when_fn.call(self._onchallenge, self, method, extra).then(
                  function (signature) {
                     var msg = [MSG_TYPE.AUTHENTICATE, signature, {}];
                     self._send_wamp(msg);
                  },
                  function (err) {
                     log.debug("onchallenge() raised:", err);

                     var msg = [MSG_TYPE.ABORT, {message: "sorry, I cannot authenticate (onchallenge handler raised an exception)"}, "wamp.error.cannot_authenticate"];
                     self._send_wamp(msg);
                     self._socket.close(1000);
                  }
               );
            } else {
               log.debug("received WAMP challenge, but no onchallenge() handler set");

               var msg = [MSG_TYPE.ABORT, {message: "sorry, I cannot authenticate (no onchallenge handler set)"}, "wamp.error.cannot_authenticate"];
               self._send_wamp(msg);
               self._socket.close(1000);
            }

         } else {
            self._protocol_violation("unexpected message type " + msg_type);
         }

      // WAMP session is open
      //
      } else {

         if (msg_type === MSG_TYPE.GOODBYE) {

            if (!self._goodbye_sent) {

               var reply = [MSG_TYPE.GOODBYE, {}, "wamp.error.goodbye_and_out"];
               self._send_wamp(reply);
            }

            self._id = null;
            self._realm = null;
            self._features = null;

            var details = msg[1];
            var reason = msg[2];

            if (self.onleave) {
               self.onleave(reason, details);
            }

         } else {

            if (msg_type === MSG_TYPE.ERROR) {

               var request_type = msg[1];
               if (request_type in self._MESSAGE_MAP[MSG_TYPE.ERROR]) {

                  self._MESSAGE_MAP[msg_type][request_type](msg);

               } else {

                  self._protocol_violation("unexpected ERROR message with request_type " + request_type);
               }

            } else {

               if (msg_type in self._MESSAGE_MAP) {

                  self._MESSAGE_MAP[msg_type](msg);

               } else {

                  self._protocol_violation("unexpected message type " + msg_type);
               }
            }
         }
      }
   };

   // session object constructed .. track creation time
   //
   if ('performance' in global && 'now' in performance) {
      self._created = performance.now();
   } else {
      self._created = Date.now();
   }
};


Object.defineProperty(Session.prototype, "defer", {
   get: function () {
      return this._defer;
   }
});


Object.defineProperty(Session.prototype, "id", {
   get: function () {
      return this._id;
   }
});


Object.defineProperty(Session.prototype, "realm", {
   get: function () {
      return this._realm;
   }
});


Object.defineProperty(Session.prototype, "isOpen", {
   get: function () {
      return this.id !== null;
   }
});


Object.defineProperty(Session.prototype, "features", {
   get: function () {
      return this._features;
   }
});


Object.defineProperty(Session.prototype, "subscriptions", {
   get: function () {
      var keys = Object.keys(this._subscriptions);
      var vals = [];
      for (var i = 0; i < keys.length; ++i) {
         vals.push(this._subscriptions[keys[i]]);
      }
      return vals;
   }
});


Object.defineProperty(Session.prototype, "registrations", {
   get: function () {
      var keys = Object.keys(this._registrations);
      var vals = [];
      for (var i = 0; i < keys.length; ++i) {
         vals.push(this._registrations[keys[i]]);
      }
      return vals;
   }
});


Session.prototype.log = function () {
   var self = this;

   if ('console' in global) {

      var header = null;
      if (self._id && self._created) {

         var now = null;
         if ('performance' in global && 'now' in performance) {
            now = performance.now() - self._created;
         } else {
            now = Date.now() - self._created;
         }

         header = "WAMP session " + self._id + " on '" + self._realm + "' at " + Math.round(now * 1000) / 1000 + " ms";
      } else {
         header = "WAMP session";
      }

      if ('group' in console) {
         console.group(header);
         for (var i = 0; i < arguments.length; i += 1) {
            console.log(arguments[i]);
         }
         console.groupEnd();
      } else {
         var items = [header + ": "];
         for (var i = 0; i < arguments.length; i += 1) {
            items.push(arguments[i]);
         }         
         console.log.apply(console, items);
      }
   }
};


Session.prototype.join = function (realm, authmethods, authid) {

   util.assert(typeof realm === 'string', "Session.join: <realm> must be a string");
   util.assert(!authmethods || Array.isArray(authmethods), "Session.join: <authmethods> must be an array []");
   util.assert(!authid || typeof authid === 'string', "Session.join: <authid> must be a string");

   var self = this;

   if (self.isOpen) {
      throw "session already open";
   }

   self._goodbye_sent = false;
   self._realm = realm;

   var details = {};
   details.roles = WAMP_FEATURES;

   if (authmethods) {
      details.authmethods = authmethods;
   }
   if (authid) {
      details.authid = authid;
   }

   var msg = [MSG_TYPE.HELLO, realm, details];
   self._send_wamp(msg);
};


Session.prototype.leave = function (reason, message) {

   util.assert(!reason || typeof reason === 'string', "Session.leave: <reason> must be a string");
   util.assert(!message || typeof message === 'string', "Session.leave: <message> must be a string");

   var self = this;

   if (!self.isOpen) {
      throw "session not open";
   }

   if (!reason) {
      reason = "wamp.close.normal";
   }

   var details = {};
   if (message) {
      details.message = message;
   }

   var msg = [MSG_TYPE.GOODBYE, details, reason];
   self._send_wamp(msg);
   self._goodbye_sent = true;
};


Session.prototype.call = function (procedure, args, kwargs, options) {

   util.assert(typeof procedure === 'string', "Session.call: <procedure> must be a string");
   util.assert(!args || Array.isArray(args), "Session.call: <args> must be an array []");
   util.assert(!kwargs || kwargs instanceof Object, "Session.call: <kwargs> must be an object {}");
   util.assert(!options || options instanceof Object, "Session.call: <options> must be an object {}");

   var self = this;

   if (!self.isOpen) {
      throw "session not open";
   }

   // create and remember new CALL request
   //
   var request = newid();
   var d = self._defer();
   self._call_reqs[request] = [d, options];

   // construct CALL message
   //
   var msg = [MSG_TYPE.CALL, request, options || {}, self.resolve(procedure)];
   if (args) {
      msg.push(args);
      if (kwargs) {
         msg.push(kwargs);
      }
   }

   // send WAMP message
   //
   self._send_wamp(msg);

   if (d.promise.then) {
      // whenjs has the actual user promise in an attribute
      return d.promise;
   } else {
      return d;
   }
};


Session.prototype.publish = function (topic, args, kwargs, options) {

   util.assert(typeof topic === 'string', "Session.publish: <topic> must be a string");
   util.assert(!args || Array.isArray(args), "Session.publish: <args> must be an array []");
   util.assert(!kwargs || kwargs instanceof Object, "Session.publish: <kwargs> must be an object {}");
   util.assert(!options || options instanceof Object, "Session.publish: <options> must be an object {}");

   var self = this;

   if (!self.isOpen) {
      throw "session not open";
   }

   var ack = options && options.acknowledge;
   var d = null;

   // create and remember new PUBLISH request
   //
   var request = newid();
   if (ack) {
      d = self._defer();
      self._publish_reqs[request] = [d, options];
   }

   // construct PUBLISH message
   //
   var msg = [MSG_TYPE.PUBLISH, request, options || {}, self.resolve(topic)];
   if (args) {
      msg.push(args);
      if (kwargs) {
         msg.push(kwargs);
      }
   }

   // send WAMP message
   //
   self._send_wamp(msg);

   if (d) {
      if (d.promise.then) {
         // whenjs has the actual user promise in an attribute
         return d.promise;
      } else {
         return d;
      }
   }
};


Session.prototype.subscribe = function (topic, handler, options) {

   util.assert(typeof topic === 'string', "Session.subscribe: <topic> must be a string");
   util.assert(typeof handler === 'function', "Session.subscribe: <handler> must be a function");
   util.assert(!options || options instanceof Object, "Session.subscribe: <options> must be an object {}");

   var self = this;

   if (!self.isOpen) {
      throw "session not open";
   }

   // create an remember new SUBSCRIBE request
   //
   var request = newid();
   var d = self._defer();
   self._subscribe_reqs[request] = [d, topic, handler, options];

   // construct SUBSCRIBE message
   //
   var msg = [MSG_TYPE.SUBSCRIBE, request];
   if (options) {
      msg.push(options);
   } else {
      msg.push({});
   }
   msg.push(self.resolve(topic));

   // send WAMP message
   //
   self._send_wamp(msg);

   if (d.promise.then) {
      // whenjs has the actual user promise in an attribute
      return d.promise;
   } else {
      return d;
   }
};


Session.prototype.register = function (procedure, endpoint, options) {

   util.assert(typeof procedure === 'string', "Session.register: <procedure> must be a string");
   util.assert(typeof endpoint === 'function', "Session.register: <endpoint> must be a function");
   util.assert(!options || options instanceof Object, "Session.register: <options> must be an object {}");

   var self = this;

   if (!self.isOpen) {
      throw "session not open";
   }

   // create an remember new REGISTER request
   //
   var request = newid();
   var d = self._defer();
   self._register_reqs[request] = [d, procedure, endpoint, options];

   // construct REGISTER message
   //
   var msg = [MSG_TYPE.REGISTER, request];
   if (options) {
      msg.push(options);
   } else {
      msg.push({});
   }
   msg.push(self.resolve(procedure));

   // send WAMP message
   //
   self._send_wamp(msg);

   if (d.promise.then) {
      // whenjs has the actual user promise in an attribute
      return d.promise;
   } else {
      return d;
   }
};


Session.prototype.unsubscribe = function (subscription) {

   util.assert(subscription instanceof Subscription, "Session.unsubscribe: <subscription> must be an instance of class autobahn.Subscription");

   var self = this;

   if (!self.isOpen) {
      throw "session not open";
   }

   if (!subscription.active || !(subscription.id in self._subscriptions)) {
      throw "subscription not active";
   }

   var subs = self._subscriptions[subscription.id];
   var i = subs.indexOf(subscription);

   if (i === -1) {
      throw "subscription not active";
   }

   // remove handler subscription
   subs.splice(i, 1);
   subscription.active = false;

   var d = self._defer();

   if (subs.length) {
      // there are still handlers on the subscription ..
      d.resolve(false);

   } else {

      // no handlers left ..

      // create and remember new UNSUBSCRIBE request
      //
      var request = newid();
      self._unsubscribe_reqs[request] = [d, subscription.id];

      // construct UNSUBSCRIBE message
      //
      var msg = [MSG_TYPE.UNSUBSCRIBE, request, subscription.id];

      // send WAMP message
      //
      self._send_wamp(msg);
   }

   if (d.promise.then) {
      // whenjs has the actual user promise in an attribute
      return d.promise;
   } else {
      return d;
   }
};


Session.prototype.unregister = function (registration) {

   util.assert(registration instanceof Registration, "Session.unregister: <registration> must be an instance of class autobahn.Registration");

   var self = this;

   if (!self.isOpen) {
      throw "session not open";
   }

   if (!registration.active || !(registration.id in self._registrations)) {
      throw "registration not active";
   }

   // create and remember new UNREGISTER request
   //
   var request = newid();
   var d = self._defer();
   self._unregister_reqs[request] = [d, registration];

   // construct UNREGISTER message
   //
   var msg = [MSG_TYPE.UNREGISTER, request, registration.id];

   // send WAMP message
   //
   self._send_wamp(msg);

   if (d.promise.then) {
      // whenjs has the actual user promise in an attribute
      return d.promise;
   } else {
      return d;
   }
};


Session.prototype.prefix = function (prefix, uri) {

   util.assert(typeof prefix === 'string', "Session.prefix: <prefix> must be a string");
   util.assert(!uri || typeof uri === 'string', "Session.prefix: <uri> must be a string or falsy");

   var self = this;

   if (uri) {
      self._prefixes[prefix] = uri;
   } else {
      if (prefix in self._prefixes) {
         delete self._prefixes[prefix];
      }
   }
};


Session.prototype.resolve = function (curie) {

   util.assert(typeof curie === 'string', "Session.resolve: <curie> must be a string");

   var self = this;

   // skip if not a CURIE
   var i = curie.indexOf(":");
   if (i >= 0) {
      var prefix = curie.substring(0, i);
      if (prefix in self._prefixes) {
         return self._prefixes[prefix] + '.' + curie.substring(i + 1);
      } else {
         throw "cannot resolve CURIE prefix '" + prefix + "'";
      }
   } else {
      return curie;
   }
};


exports.Session = Session;

exports.Invocation = Invocation;
exports.Event = Event;
exports.Result = Result;
exports.Error = Error;
exports.Subscription = Subscription;
exports.Registration = Registration;
exports.Publication = Publication;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./log.js":7,"./util.js":19,"when":77,"when/function":54}],17:[function(_dereq_,module,exports){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////

var util = _dereq_('../util.js');
var log = _dereq_('../log.js');

var when = _dereq_('when');


function Factory (options) {
   var self = this;

   util.assert(options.url !== undefined, "options.url missing");
   util.assert(typeof options.url === "string", "options.url must be a string");

   self._options = options;
};


Factory.prototype.type = "longpoll";


Factory.prototype.create = function () {

   var self = this;

   log.debug("longpoll.Factory.create");

   // the WAMP transport we create
   var transport = {};

   // these will get defined further below
   transport.protocol = undefined;
   transport.send = undefined;
   transport.close = undefined;

   // these will get overridden by the WAMP session using this transport
   transport.onmessage = function () {};
   transport.onopen = function () {};
   transport.onclose = function () {};

   transport.info = {
      type: 'longpoll',
      url: null,
      protocol: 'wamp.2.json'
   };

   transport._run = function () {

      var session_info = null;
      var send_buffer = [];
      var is_closing = false;

      var txseq = 0;
      var rxseq = 0;

      var options = {'protocols': ['wamp.2.json']};
      var request_timeout = self._options.request_timeout || 2000;

      util.http_post(self._options.url + '/open', JSON.stringify(options), request_timeout).then(

         function (payload) {

            session_info = JSON.parse(payload);
            var base_url = self._options.url + '/' + session_info.transport;

            transport.info.url = base_url;

            log.debug("longpoll.Transport: open", session_info);

            transport.close = function (code, reason) {

               if (is_closing) {
                  throw "transport is already closing";
               }

               is_closing = true;

               util.http_post(base_url + '/close', null, request_timeout).then(

                  function () {
                     log.debug("longpoll.Transport: transport closed");
                     var details = {
                        code: 1000,
                        reason: "transport closed",
                        wasClean: true
                     }
                     transport.onclose(details);
                  },

                  function (err) {
                     log.debug("longpoll.Transport: could not close transport", err.code, err.text);
                  }
               );
            }

            transport.send = function (msg) {

               if (is_closing) {
                  throw "transport is closing or closed already";
               }

               txseq += 1;

               log.debug("longpoll.Transport: sending message ...", msg);

               var payload = JSON.stringify(msg);

               util.http_post(base_url + '/send', payload, request_timeout).then(

                  function () {
                     // ok, message sent
                     log.debug("longpoll.Transport: message sent");
                  },

                  function (err) {
                     log.debug("longpoll.Transport: could not send message", err.code, err.text);

                     is_closing = true;
                     var details = {
                        code: 1001,
                        reason: "transport send failure (HTTP/POST status " + err.code + " - '" + err.text + "')",
                        wasClean: false
                     }
                     transport.onclose(details);
                  }
               );
            };

            function receive() {

               rxseq += 1;

               log.debug("longpoll.Transport: polling for message ...");

               util.http_post(base_url + '/receive', null, request_timeout).then(

                  function (payload) {

                     if (payload) {                     

                        var msg = JSON.parse(payload);

                        log.debug("longpoll.Transport: message received", msg);

                        transport.onmessage(msg);
                     }

                     if (!is_closing) {
                        receive();
                     }
                  },

                  function (err) {
                     log.debug("longpoll.Transport: could not receive message", err.code, err.text);

                     is_closing = true;
                     var details = {
                        code: 1001,
                        reason: "transport receive failure (HTTP/POST status " + err.code + " - '" + err.text + "')",
                        wasClean: false
                     }
                     transport.onclose(details);
                  }
               );
            }

            receive();

            transport.onopen();
         },

         function (err) {
            log.debug("longpoll.Transport: could not open transport", err.code, err.text);

            is_closing = true;
            var details = {
               code: 1001,
               reason: "transport open failure (HTTP/POST status " + err.code + " - '" + err.text + "')",
               wasClean: false
            }
            transport.onclose(details);
         }
      );
   }

   transport._run();

   return transport;
};



exports.Factory = Factory;

},{"../log.js":7,"../util.js":19,"when":77}],18:[function(_dereq_,module,exports){
(function (global){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////


var util = _dereq_('../util.js');
var log = _dereq_('../log.js');


function Factory (options) {
   var self = this;

   util.assert(options.url !== undefined, "options.url missing");
   util.assert(typeof options.url === "string", "options.url must be a string");

   if (!options.protocols) {
      options.protocols = ['wamp.2.json'];
   } else {
      util.assert(Array.isArray(options.protocols), "options.protocols must be an array");
   }

   self._options = options;
}


Factory.prototype.type = "websocket";


Factory.prototype.create = function () {

   var self = this;

   // the WAMP transport we create
   var transport = {};

   // these will get defined further below
   transport.protocol = undefined;
   transport.send = undefined;
   transport.close = undefined;

   // these will get overridden by the WAMP session using this transport
   transport.onmessage = function () {};
   transport.onopen = function () {};
   transport.onclose = function () {};

   transport.info = {
      type: 'websocket',
      url: null,
      protocol: 'wamp.2.json'
   };

   //
   // running in browser
   //
   if ('window' in global) {

      (function () {

         var websocket;

         // Chrome, MSIE, newer Firefox
         if ("WebSocket" in window) {
            
            if (self._options.protocols) {
               websocket = new window.WebSocket(self._options.url, self._options.protocols);
            } else {
               websocket = new window.WebSocket(self._options.url);
            }

         // older versions of Firefox prefix the WebSocket object
         } else if ("MozWebSocket" in window) {

            if (self._options.protocols) {
               websocket = new window.MozWebSocket(self._options.url, self._options.protocols);
            } else {
               websocket = new window.MozWebSocket(self._options.url);
            }
         } else {
            throw "browser does not support WebSocket";
         }

         websocket.onmessage = function (evt) {
            log.debug("WebSocket transport receive", evt.data);

            var msg = JSON.parse(evt.data);
            transport.onmessage(msg);
         }

         websocket.onopen = function () {
            transport.info.url = self._options.url;
            transport.onopen();
         }

         websocket.onclose = function (evt) {
            var details = {
               code: evt.code,
               reason: evt.message,
               wasClean: evt.wasClean
            }
            transport.onclose(details);
         }

         // do NOT do the following, since that will make
         // transport.onclose() fire twice (browsers already fire
         // websocket.onclose() for errors also)
         //websocket.onerror = websocket.onclose;

         transport.send = function (msg) {
            var payload = JSON.stringify(msg);
            log.debug("WebSocket transport send", payload);
            websocket.send(payload);
         }

         transport.close = function (code, reason) {
            websocket.close(code, reason);
         };

      })();

   //
   // running on NodeJS
   //
   } else {

      (function () {

         var WebSocket = _dereq_('ws'); // https://github.com/einaros/ws
         var websocket;

         var protocols;
         if (self._options.protocols) {
            protocols = self._options.protocols;
            if (Array.isArray(protocols)) {
               protocols = protocols.join(',');
            }
            websocket = new WebSocket(self._options.url, {protocol: protocols});
         } else {
            websocket = new WebSocket(self._options.url);
         }

         transport.send = function (msg) {
            var payload = JSON.stringify(msg);
            websocket.send(payload, {binary: false});
         };

         transport.close = function (code, reason) {
            websocket.close();
         };

         websocket.on('open', function () {
            transport.onopen();
         });

         websocket.on('message', function (data, flags) {
            if (flags.binary) {
               // FIXME!
            } else {
               var msg = JSON.parse(data);
               transport.onmessage(msg);
            }
         });

         // FIXME: improve mapping to WS API for the following
         // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Close_codes
         //
         websocket.on('close', function (code, message) {
            var details = {
               code: code,
               reason: message,
               wasClean: code === 1000
            }
            transport.onclose(details);
         });

         websocket.on('error', function (error) {
            var details = {
               code: 1006,
               reason: '',
               wasClean: false
            }
            transport.onclose(details);
         });

      })();
   }

   return transport;
};



exports.Factory = Factory;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../log.js":7,"../util.js":19,"ws":78}],19:[function(_dereq_,module,exports){
(function (global){
///////////////////////////////////////////////////////////////////////////////
//
//  AutobahnJS - http://autobahn.ws, http://wamp.ws
//
//  A JavaScript library for WAMP ("The Web Application Messaging Protocol").
//
//  Copyright (C) 2011-2014 Tavendo GmbH, http://tavendo.com
//
//  Licensed under the MIT License.
//  http://www.opensource.org/licenses/mit-license.php
//
///////////////////////////////////////////////////////////////////////////////

var log = _dereq_('./log.js');

var when = _dereq_('when');



var rand_normal = function (mean, sd) {
   // Derive a Gaussian from Uniform random variables
   // http://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
   var x1, x2, rad;
 
   do {
      x1 = 2 * Math.random() - 1;
      x2 = 2 * Math.random() - 1;
      rad = x1 * x1 + x2 * x2;
   } while (rad >= 1 || rad == 0);
 
   var c = Math.sqrt(-2 * Math.log(rad) / rad);
 
   return (mean || 0) + (x1 * c) * (sd || 1);
};



var assert = function (cond, text) {
	if (cond) {
      return;
   }
	if (assert.useDebugger || ('AUTOBAHN_DEBUG' in global && AUTOBAHN_DEBUG)) {
      debugger;
   }

	throw new Error(text || "Assertion failed!");
};



// Helper to do HTTP/POST requests returning deferreds. This function is
// supposed to work on IE8, IE9 and old Android WebKit browsers. We don't care
// if it works with other browsers.
//
var http_post = function (url, data, timeout) {

   log.debug("new http_post request", url, data, timeout);

   var d = when.defer();
   var req = new XMLHttpRequest();

   req.onreadystatechange = function () {

      if (req.readyState === 4) {

         // Normalize IE's response to HTTP 204 when Win error 1223.
         // http://stackoverflow.com/a/10047236/884770
         //
         var status = (req.status === 1223) ? 204 : req.status;

         if (status === 200) {

            // response with content
            //
            d.resolve(req.responseText);

         } if (status === 204) {

            // empty response
            //
            d.resolve();

         } else {

            // anything else is a fail
            //
            var statusText = null;
            try {
               statusText = req.statusText;
            } catch (e) {
               // IE8 fucks up on this
            }
            d.reject({code: status, text: statusText});
         }
      }
   }

   req.open("POST", url, true);
   req.setRequestHeader("Content-type", "application/json; charset=utf-8");

   if (timeout > 0) {
      req.timeout = timeout; // request timeout in ms

      req.ontimeout = function () {
         d.reject({code: 501, text: "request timeout"});
      }
   }

   if (data) {
      req.send(data);
   } else {
      req.send();
   }

   if (d.promise.then) {
      // whenjs has the actual user promise in an attribute
      return d.promise;
   } else {
      return d;
   }
};



exports.rand_normal = rand_normal;
exports.assert = assert;
exports.http_post = http_post;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./log.js":7,"when":77}],20:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./enc-base64"), _dereq_("./md5"), _dereq_("./evpkdf"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));
},{"./cipher-core":21,"./core":22,"./enc-base64":23,"./evpkdf":25,"./md5":30}],21:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                var block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                var block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                var modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                var modeCreator = mode.createDecryptor;

	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }
	            this._mode = modeCreator.call(mode, this, iv && iv.words);
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                var wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                var salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));
},{"./core":22}],22:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {
	        function F() {}

	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                F.prototype = this;
	                var subtype = new F();

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init')) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else if (thatWords.length > 0xffff) {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            } else {
	                // Copy all words at once
	                thisWords.push.apply(thisWords, thatWords);
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];
	            for (var i = 0; i < nBytes; i += 4) {
	                words.push((Math.random() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
},{}],23:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex != -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            var words = [];
	            var nBytes = 0;
	            for (var i = 0; i < base64StrLength; i++) {
	                if (i % 4) {
	                    var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
	                    var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
	                    words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
	                    nBytes++;
	                }
	            }

	            return WordArray.create(words, nBytes);
	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };
	}());


	return CryptoJS.enc.Base64;

}));
},{"./core":22}],24:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));
},{"./core":22}],25:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./sha1"), _dereq_("./hmac"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha1", "./hmac"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                var block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));
},{"./core":22,"./hmac":27,"./sha1":46}],26:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));
},{"./cipher-core":21,"./core":22}],27:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));
},{"./core":22}],28:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./x64-core"), _dereq_("./lib-typedarrays"), _dereq_("./enc-utf16"), _dereq_("./enc-base64"), _dereq_("./md5"), _dereq_("./sha1"), _dereq_("./sha256"), _dereq_("./sha224"), _dereq_("./sha512"), _dereq_("./sha384"), _dereq_("./sha3"), _dereq_("./ripemd160"), _dereq_("./hmac"), _dereq_("./pbkdf2"), _dereq_("./evpkdf"), _dereq_("./cipher-core"), _dereq_("./mode-cfb"), _dereq_("./mode-ctr"), _dereq_("./mode-ctr-gladman"), _dereq_("./mode-ofb"), _dereq_("./mode-ecb"), _dereq_("./pad-ansix923"), _dereq_("./pad-iso10126"), _dereq_("./pad-iso97971"), _dereq_("./pad-zeropadding"), _dereq_("./pad-nopadding"), _dereq_("./format-hex"), _dereq_("./aes"), _dereq_("./tripledes"), _dereq_("./rc4"), _dereq_("./rabbit"), _dereq_("./rabbit-legacy"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	return CryptoJS;

}));
},{"./aes":20,"./cipher-core":21,"./core":22,"./enc-base64":23,"./enc-utf16":24,"./evpkdf":25,"./format-hex":26,"./hmac":27,"./lib-typedarrays":29,"./md5":30,"./mode-cfb":31,"./mode-ctr":33,"./mode-ctr-gladman":32,"./mode-ecb":34,"./mode-ofb":35,"./pad-ansix923":36,"./pad-iso10126":37,"./pad-iso97971":38,"./pad-nopadding":39,"./pad-zeropadding":40,"./pbkdf2":41,"./rabbit":43,"./rabbit-legacy":42,"./rc4":44,"./ripemd160":45,"./sha1":46,"./sha224":47,"./sha256":48,"./sha3":49,"./sha384":50,"./sha512":51,"./tripledes":52,"./x64-core":53}],29:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            typedArray instanceof Uint8ClampedArray ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));
},{"./core":22}],30:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));
},{"./core":22}],31:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            var keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            var keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));
},{"./cipher-core":21,"./core":22}],32:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));
},{"./cipher-core":21,"./core":22}],33:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));
},{"./cipher-core":21,"./core":22}],34:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));
},{"./cipher-core":21,"./core":22}],35:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));
},{"./cipher-core":21,"./core":22}],36:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));
},{"./cipher-core":21,"./core":22}],37:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));
},{"./cipher-core":21,"./core":22}],38:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));
},{"./cipher-core":21,"./core":22}],39:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));
},{"./cipher-core":21,"./core":22}],40:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	            i--;
	        }
	        data.sigBytes = i + 1;
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));
},{"./cipher-core":21,"./core":22}],41:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./sha1"), _dereq_("./hmac"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha1", "./hmac"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA1 = C_algo.SHA1;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA1,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.PBKDF2;

}));
},{"./core":22,"./hmac":27,"./sha1":46}],42:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./enc-base64"), _dereq_("./md5"), _dereq_("./evpkdf"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	return CryptoJS.RabbitLegacy;

}));
},{"./cipher-core":21,"./core":22,"./enc-base64":23,"./evpkdf":25,"./md5":30}],43:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./enc-base64"), _dereq_("./md5"), _dereq_("./evpkdf"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	return CryptoJS.Rabbit;

}));
},{"./cipher-core":21,"./core":22,"./enc-base64":23,"./evpkdf":25,"./md5":30}],44:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./enc-base64"), _dereq_("./md5"), _dereq_("./evpkdf"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	return CryptoJS.RC4;

}));
},{"./cipher-core":21,"./core":22,"./enc-base64":23,"./evpkdf":25,"./md5":30}],45:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	return CryptoJS.RIPEMD160;

}));
},{"./core":22}],46:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));
},{"./core":22}],47:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./sha256"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha256"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	return CryptoJS.SHA224;

}));
},{"./core":22,"./sha256":48}],48:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));
},{"./core":22}],49:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./x64-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	return CryptoJS.SHA3;

}));
},{"./core":22,"./x64-core":53}],50:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./x64-core"), _dereq_("./sha512"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core", "./sha512"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	return CryptoJS.SHA384;

}));
},{"./core":22,"./sha512":51,"./x64-core":53}],51:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./x64-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    var Wih = Wi.high = M[offset + i * 2]     | 0;
	                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    var Wil = gamma0l + Wi7l;
	                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    var Wil = Wil + gamma1l;
	                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    var Wil = Wil + Wi16l;
	                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	return CryptoJS.SHA512;

}));
},{"./core":22,"./x64-core":53}],52:[function(_dereq_,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"), _dereq_("./enc-base64"), _dereq_("./md5"), _dereq_("./evpkdf"), _dereq_("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
	            this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
	            this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	return CryptoJS.TripleDES;

}));
},{"./cipher-core":21,"./core":22,"./enc-base64":23,"./evpkdf":25,"./md5":30}],53:[function(_dereq_,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(_dereq_("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));
},{"./core":22}],54:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2013-2014 original author or authors */

/**
 * Collection of helper functions for wrapping and executing 'traditional'
 * synchronous functions in a promise interface.
 *
 * @author Brian Cavalier
 * @contributor Renato Zannon
 */

(function(define) {
define(function(_dereq_) {

	var when = _dereq_('./when');
	var attempt = when['try'];
	var _liftAll = _dereq_('./lib/liftAll');
	var slice = Array.prototype.slice;

	return {
		lift: lift,
		liftAll: liftAll,
		call: attempt,
		apply: apply,
		compose: compose
	};

	/**
	 * Takes a function and an optional array of arguments (that might be promises),
	 * and calls the function. The return value is a promise whose resolution
	 * depends on the value returned by the function.
	 * @param {function} f function to be called
	 * @param {Array} [args] array of arguments to func
	 * @returns {Promise} promise for the return value of func
	 */
	function apply(f, args) {
		return _apply(f, this, args || []);
	}

	/**
	 * Takes a 'regular' function and returns a version of that function that
	 * returns a promise instead of a plain value, and handles thrown errors by
	 * returning a rejected promise. Also accepts a list of arguments to be
	 * prepended to the new function, as does Function.prototype.bind.
	 *
	 * The resulting function is promise-aware, in the sense that it accepts
	 * promise arguments, and waits for their resolution.
	 * @param {Function} f function to be bound
	 * @param {...*} [args] arguments to be prepended for the new function @deprecated
	 * @returns {Function} a promise-returning function
	 */
	function lift(f /*, args... */) {
		var args = arguments.length > 1 ? slice.call(arguments, 1) : [];
		return function() {
			return _apply(f, this, args.concat(slice.call(arguments)));
		};
	}

	/**
	 * Apply helper that allows specifying thisArg
	 * @private
	 */
	function _apply(f, thisArg, args) {
		return args.length === 0
			? attempt.call(thisArg, f)
			: attempt.apply(thisArg, [f].concat(args));
	}

	/**
	 * Lift all the functions/methods on src
	 * @param {object|function} src source whose functions will be lifted
	 * @param {function?} combine optional function for customizing the lifting
	 *  process. It is passed dst, the lifted function, and the property name of
	 *  the original function on src.
	 * @param {(object|function)?} dst option destination host onto which to place lifted
	 *  functions. If not provided, liftAll returns a new object.
	 * @returns {*} If dst is provided, returns dst with lifted functions as
	 *  properties.  If dst not provided, returns a new object with lifted functions.
	 */
	function liftAll(src, combine, dst) {
		return _liftAll(lift, combine, dst, src);
	}

	/**
	 * Composes multiple functions by piping their return values. It is
	 * transparent to whether the functions return 'regular' values or promises:
	 * the piped argument is always a resolved value. If one of the functions
	 * throws or returns a rejected promise, the composed promise will be also
	 * rejected.
	 *
	 * The arguments (or promises to arguments) given to the returned function (if
	 * any), are passed directly to the first function on the 'pipeline'.
	 * @param {Function} f the function to which the arguments will be passed
	 * @param {...Function} [funcs] functions that will be composed, in order
	 * @returns {Function} a promise-returning composition of the functions
	 */
	function compose(f /*, funcs... */) {
		var funcs = slice.call(arguments, 1);

		return function() {
			var thisArg = this;
			var args = slice.call(arguments);
			var firstPromise = attempt.apply(thisArg, [f].concat(args));

			return when.reduce(funcs, function(arg, func) {
				return func.call(thisArg, arg);
			}, firstPromise);
		};
	}
});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(_dereq_); });



},{"./lib/liftAll":68,"./when":77}],55:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function (_dereq_) {

	var makePromise = _dereq_('./makePromise');
	var Scheduler = _dereq_('./scheduler');
	var async = _dereq_('./async');

	return makePromise({
		scheduler: new Scheduler(async)
	});

});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(_dereq_); });

},{"./async":58,"./makePromise":69,"./scheduler":70}],56:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {
	/**
	 * Circular queue
	 * @param {number} capacityPow2 power of 2 to which this queue's capacity
	 *  will be set initially. eg when capacityPow2 == 3, queue capacity
	 *  will be 8.
	 * @constructor
	 */
	function Queue(capacityPow2) {
		this.head = this.tail = this.length = 0;
		this.buffer = new Array(1 << capacityPow2);
	}

	Queue.prototype.push = function(x) {
		if(this.length === this.buffer.length) {
			this._ensureCapacity(this.length * 2);
		}

		this.buffer[this.tail] = x;
		this.tail = (this.tail + 1) & (this.buffer.length - 1);
		++this.length;
		return this.length;
	};

	Queue.prototype.shift = function() {
		var x = this.buffer[this.head];
		this.buffer[this.head] = void 0;
		this.head = (this.head + 1) & (this.buffer.length - 1);
		--this.length;
		return x;
	};

	Queue.prototype._ensureCapacity = function(capacity) {
		var head = this.head;
		var buffer = this.buffer;
		var newBuffer = new Array(capacity);
		var i = 0;
		var len;

		if(head === 0) {
			len = this.length;
			for(; i<len; ++i) {
				newBuffer[i] = buffer[i];
			}
		} else {
			capacity = buffer.length;
			len = this.tail;
			for(; head<capacity; ++i, ++head) {
				newBuffer[i] = buffer[head];
			}

			for(head=0; head<len; ++i, ++head) {
				newBuffer[i] = buffer[head];
			}
		}

		this.buffer = newBuffer;
		this.head = 0;
		this.tail = this.length;
	};

	return Queue;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],57:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	/**
	 * Custom error type for promises rejected by promise.timeout
	 * @param {string} message
	 * @constructor
	 */
	function TimeoutError (message) {
		Error.call(this);
		this.message = message;
		this.name = TimeoutError.name;
		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, TimeoutError);
		}
	}

	TimeoutError.prototype = Object.create(Error.prototype);
	TimeoutError.prototype.constructor = TimeoutError;

	return TimeoutError;
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));
},{}],58:[function(_dereq_,module,exports){
(function (process){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(_dereq_) {

	// Sniff "best" async scheduling option
	// Prefer process.nextTick or MutationObserver, then check for
	// vertx and finally fall back to setTimeout

	/*jshint maxcomplexity:6*/
	/*global process,document,setTimeout,MutationObserver,WebKitMutationObserver*/
	var nextTick, MutationObs;

	if (typeof process !== 'undefined' && process !== null &&
		typeof process.nextTick === 'function') {
		nextTick = function(f) {
			process.nextTick(f);
		};

	} else if (MutationObs =
		(typeof MutationObserver === 'function' && MutationObserver) ||
		(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver)) {
		nextTick = (function (document, MutationObserver) {
			var scheduled;
			var el = document.createElement('div');
			var o = new MutationObserver(run);
			o.observe(el, { attributes: true });

			function run() {
				var f = scheduled;
				scheduled = void 0;
				f();
			}

			return function (f) {
				scheduled = f;
				el.setAttribute('class', 'x');
			};
		}(document, MutationObs));

	} else {
		nextTick = (function(cjsRequire) {
			try {
				// vert.x 1.x || 2.x
				return cjsRequire('vertx').runOnLoop || cjsRequire('vertx').runOnContext;
			} catch (ignore) {}

			// capture setTimeout to avoid being caught by fake timers
			// used in time based tests
			var capturedSetTimeout = setTimeout;
			return function (t) {
				capturedSetTimeout(t, 0);
			};
		}(_dereq_));
	}

	return nextTick;
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(_dereq_); }));

}).call(this,_dereq_("c:\\Users\\oberstet\\AppData\\Roaming\\npm\\node_modules\\browserify\\node_modules\\insert-module-globals\\node_modules\\process\\browser.js"))
},{"c:\\Users\\oberstet\\AppData\\Roaming\\npm\\node_modules\\browserify\\node_modules\\insert-module-globals\\node_modules\\process\\browser.js":1}],59:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function array(Promise) {

		var arrayMap = Array.prototype.map;
		var arrayReduce = Array.prototype.reduce;
		var arrayReduceRight = Array.prototype.reduceRight;
		var arrayForEach = Array.prototype.forEach;

		var toPromise = Promise.resolve;
		var all = Promise.all;

		// Additional array combinators

		Promise.any = any;
		Promise.some = some;
		Promise.settle = settle;

		Promise.map = map;
		Promise.reduce = reduce;
		Promise.reduceRight = reduceRight;

		/**
		 * When this promise fulfills with an array, do
		 * onFulfilled.apply(void 0, array)
		 * @param (function) onFulfilled function to apply
		 * @returns {Promise} promise for the result of applying onFulfilled
		 */
		Promise.prototype.spread = function(onFulfilled) {
			return this.then(all).then(function(array) {
				return onFulfilled.apply(void 0, array);
			});
		};

		return Promise;

		/**
		 * One-winner competitive race.
		 * Return a promise that will fulfill when one of the promises
		 * in the input array fulfills, or will reject when all promises
		 * have rejected.
		 * @param {array} promises
		 * @returns {Promise} promise for the first fulfilled value
		 */
		function any(promises) {
			return new Promise(function(resolve, reject) {
				var pending = 0;
				var errors = [];

				arrayForEach.call(promises, function(p) {
					++pending;
					toPromise(p).then(resolve, handleReject);
				});

				if(pending === 0) {
					resolve();
				}

				function handleReject(e) {
					errors.push(e);
					if(--pending === 0) {
						reject(errors);
					}
				}
			});
		}

		/**
		 * N-winner competitive race
		 * Return a promise that will fulfill when n input promises have
		 * fulfilled, or will reject when it becomes impossible for n
		 * input promises to fulfill (ie when promises.length - n + 1
		 * have rejected)
		 * @param {array} promises
		 * @param {number} n
		 * @returns {Promise} promise for the earliest n fulfillment values
		 *
		 * @deprecated
		 */
		function some(promises, n) {
			return new Promise(function(resolve, reject, notify) {
				var nFulfill = 0;
				var nReject;
				var results = [];
				var errors = [];

				arrayForEach.call(promises, function(p) {
					++nFulfill;
					toPromise(p).then(handleResolve, handleReject, notify);
				});

				n = Math.max(n, 0);
				nReject = (nFulfill - n + 1);
				nFulfill = Math.min(n, nFulfill);

				if(nFulfill === 0) {
					resolve(results);
					return;
				}

				function handleResolve(x) {
					if(nFulfill > 0) {
						--nFulfill;
						results.push(x);

						if(nFulfill === 0) {
							resolve(results);
						}
					}
				}

				function handleReject(e) {
					if(nReject > 0) {
						--nReject;
						errors.push(e);

						if(nReject === 0) {
							reject(errors);
						}
					}
				}
			});
		}

		/**
		 * Apply f to the value of each promise in a list of promises
		 * and return a new list containing the results.
		 * @param {array} promises
		 * @param {function} f
		 * @param {function} fallback
		 * @returns {Promise}
		 */
		function map(promises, f, fallback) {
			return all(arrayMap.call(promises, function(x) {
				return toPromise(x).then(f, fallback);
			}));
		}

		/**
		 * Return a promise that will always fulfill with an array containing
		 * the outcome states of all input promises.  The returned promise
		 * will never reject.
		 * @param {array} promises
		 * @returns {Promise}
		 */
		function settle(promises) {
			return all(arrayMap.call(promises, function(p) {
				p = toPromise(p);
				return p.then(inspect, inspect);

				function inspect() {
					return p.inspect();
				}
			}));
		}

		function reduce(promises, f) {
			return arguments.length > 2
				? arrayReduce.call(promises, reducer, arguments[2])
				: arrayReduce.call(promises, reducer);

			function reducer(result, x, i) {
				return toPromise(result).then(function(r) {
					return toPromise(x).then(function(x) {
						return f(r, x, i);
					});
				});
			}
		}

		function reduceRight(promises, f) {
			return arguments.length > 2
				? arrayReduceRight.call(promises, reducer, arguments[2])
				: arrayReduceRight.call(promises, reducer);

			function reducer(result, x, i) {
				return toPromise(result).then(function(r) {
					return toPromise(x).then(function(x) {
						return f(r, x, i);
					});
				});
			}
		}
	};


});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],60:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function flow(Promise) {

		var reject = Promise.reject;
		var origCatch = Promise.prototype['catch'];

		/**
		 * Handle the ultimate fulfillment value or rejection reason, and assume
		 * responsibility for all errors.  If an error propagates out of result
		 * or handleFatalError, it will be rethrown to the host, resulting in a
		 * loud stack track on most platforms and a crash on some.
		 * @param {function?} onResult
		 * @param {function?} onError
		 * @returns {undefined}
		 */
		Promise.prototype.done = function(onResult, onError) {
			var h = this._handler;
			h.when({ resolve: this._maybeFatal, notify: noop, context: this,
				receiver: h.receiver, fulfilled: onResult, rejected: onError,
				progress: void 0 });
		};

		/**
		 * Add Error-type and predicate matching to catch.  Examples:
		 * promise.catch(TypeError, handleTypeError)
		 *   .catch(predicate, handleMatchedErrors)
		 *   .catch(handleRemainingErrors)
		 * @param onRejected
		 * @returns {*}
		 */
		Promise.prototype['catch'] = Promise.prototype.otherwise = function(onRejected) {
			if (arguments.length === 1) {
				return origCatch.call(this, onRejected);
			} else {
				if(typeof onRejected !== 'function') {
					return this.ensure(rejectInvalidPredicate);
				}

				return origCatch.call(this, createCatchFilter(arguments[1], onRejected));
			}
		};

		/**
		 * Wraps the provided catch handler, so that it will only be called
		 * if the predicate evaluates truthy
		 * @param {?function} handler
		 * @param {function} predicate
		 * @returns {function} conditional catch handler
		 */
		function createCatchFilter(handler, predicate) {
			return function(e) {
				return evaluatePredicate(e, predicate)
					? handler.call(this, e)
					: reject(e);
			};
		}

		/**
		 * Ensures that onFulfilledOrRejected will be called regardless of whether
		 * this promise is fulfilled or rejected.  onFulfilledOrRejected WILL NOT
		 * receive the promises' value or reason.  Any returned value will be disregarded.
		 * onFulfilledOrRejected may throw or return a rejected promise to signal
		 * an additional error.
		 * @param {function} handler handler to be called regardless of
		 *  fulfillment or rejection
		 * @returns {Promise}
		 */
		Promise.prototype['finally'] = Promise.prototype.ensure = function(handler) {
			if(typeof handler !== 'function') {
				// Optimization: result will not change, return same promise
				return this;
			}

			handler = isolate(handler, this);
			return this.then(handler, handler);
		};

		/**
		 * Recover from a failure by returning a defaultValue.  If defaultValue
		 * is a promise, it's fulfillment value will be used.  If defaultValue is
		 * a promise that rejects, the returned promise will reject with the
		 * same reason.
		 * @param {*} defaultValue
		 * @returns {Promise} new promise
		 */
		Promise.prototype['else'] = Promise.prototype.orElse = function(defaultValue) {
			return this.then(void 0, function() {
				return defaultValue;
			});
		};

		/**
		 * Shortcut for .then(function() { return value; })
		 * @param  {*} value
		 * @return {Promise} a promise that:
		 *  - is fulfilled if value is not a promise, or
		 *  - if value is a promise, will fulfill with its value, or reject
		 *    with its reason.
		 */
		Promise.prototype['yield'] = function(value) {
			return this.then(function() {
				return value;
			});
		};

		/**
		 * Runs a side effect when this promise fulfills, without changing the
		 * fulfillment value.
		 * @param {function} onFulfilledSideEffect
		 * @returns {Promise}
		 */
		Promise.prototype.tap = function(onFulfilledSideEffect) {
			return this.then(onFulfilledSideEffect)['yield'](this);
		};

		return Promise;
	};

	function rejectInvalidPredicate() {
		throw new TypeError('catch predicate must be a function');
	}

	function evaluatePredicate(e, predicate) {
		return isError(predicate) ? e instanceof predicate : predicate(e);
	}

	function isError(predicate) {
		return predicate === Error
			|| (predicate != null && predicate.prototype instanceof Error);
	}

	// prevent argument passing to f and ignore return value
	function isolate(f, x) {
		return function() {
			f.call(this);
			return x;
		};
	}

	function noop() {}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],61:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */
/** @author Jeff Escalante */

(function(define) { 'use strict';
define(function() {

	return function fold(Promise) {

		Promise.prototype.fold = function(fn, arg) {
			var promise = this._beget();
			this._handler.fold(promise._handler, fn, arg);
			return promise;
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],62:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function inspect(Promise) {

		Promise.prototype.inspect = function() {
			return this._handler.inspect();
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],63:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function generate(Promise) {

		var resolve = Promise.resolve;

		Promise.iterate = iterate;
		Promise.unfold = unfold;

		return Promise;

		/**
		 * Generate a (potentially infinite) stream of promised values:
		 * x, f(x), f(f(x)), etc. until condition(x) returns true
		 * @param {function} f function to generate a new x from the previous x
		 * @param {function} condition function that, given the current x, returns
		 *  truthy when the iterate should stop
		 * @param {function} handler function to handle the value produced by f
		 * @param {*|Promise} x starting value, may be a promise
		 * @return {Promise} the result of the last call to f before
		 *  condition returns true
		 */
		function iterate(f, condition, handler, x) {
			return unfold(function(x) {
				return [x, f(x)];
			}, condition, handler, x);
		}

		/**
		 * Generate a (potentially infinite) stream of promised values
		 * by applying handler(generator(seed)) iteratively until
		 * condition(seed) returns true.
		 * @param {function} unspool function that generates a [value, newSeed]
		 *  given a seed.
		 * @param {function} condition function that, given the current seed, returns
		 *  truthy when the unfold should stop
		 * @param {function} handler function to handle the value produced by unspool
		 * @param x {*|Promise} starting value, may be a promise
		 * @return {Promise} the result of the last value produced by unspool before
		 *  condition returns true
		 */
		function unfold(unspool, condition, handler, x) {
			return resolve(x).then(function(seed) {
				return resolve(condition(seed)).then(function(done) {
					return done ? seed : resolve(unspool(seed)).spread(next);
				});
			});

			function next(item, newSeed) {
				return resolve(handler(item)).then(function() {
					return unfold(unspool, condition, handler, newSeed);
				});
			}
		}
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],64:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function progress(Promise) {

		/**
		 * Register a progress handler for this promise
		 * @param {function} onProgress
		 * @returns {Promise}
		 */
		Promise.prototype.progress = function(onProgress) {
			return this.then(void 0, void 0, onProgress);
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],65:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(_dereq_) {

	var timer = _dereq_('../timer');
	var TimeoutError = _dereq_('../TimeoutError');

	return function timed(Promise) {
		/**
		 * Return a new promise whose fulfillment value is revealed only
		 * after ms milliseconds
		 * @param {number} ms milliseconds
		 * @returns {Promise}
		 */
		Promise.prototype.delay = function(ms) {
			var p = this._beget();
			var h = p._handler;

			this._handler.map(function delay(x) {
				timer.set(function() { h.resolve(x); }, ms);
			}, h);

			return p;
		};

		/**
		 * Return a new promise that rejects after ms milliseconds unless
		 * this promise fulfills earlier, in which case the returned promise
		 * fulfills with the same value.
		 * @param {number} ms milliseconds
		 * @param {Error|*=} reason optional rejection reason to use, defaults
		 *   to an Error if not provided
		 * @returns {Promise}
		 */
		Promise.prototype.timeout = function(ms, reason) {
			var hasReason = arguments.length > 1;
			var p = this._beget();
			var h = p._handler;

			var t = timer.set(onTimeout, ms);

			this._handler.chain(h,
				function onFulfill(x) {
					timer.clear(t);
					this.resolve(x); // this = p._handler
				},
				function onReject(x) {
					timer.clear(t);
					this.reject(x); // this = p._handler
				},
				h.notify);

			return p;

			function onTimeout() {
				h.reject(hasReason
					? reason : new TimeoutError('timed out after ' + ms + 'ms'));
			}
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(_dereq_); }));

},{"../TimeoutError":57,"../timer":71}],66:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(_dereq_) {

	var timer = _dereq_('../timer');

	return function unhandledRejection(Promise) {
		var logError = noop;
		var logInfo = noop;

		if(typeof console !== 'undefined') {
			logError = typeof console.error !== 'undefined'
				? function (e) { console.error(e); }
				: function (e) { console.log(e); };

			logInfo = typeof console.info !== 'undefined'
				? function (e) { console.info(e); }
				: function (e) { console.log(e); };
		}

		Promise.onPotentiallyUnhandledRejection = function(rejection) {
			enqueue(report, rejection);
		};

		Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
			enqueue(unreport, rejection);
		};

		Promise.onFatalRejection = function(rejection) {
			enqueue(throwit, rejection.value);
		};

		var tasks = [];
		var reported = [];
		var running = false;

		function report(r) {
			if(!r.handled) {
				reported.push(r);
				logError('Potentially unhandled rejection [' + r.id + '] ' + formatError(r.value));
			}
		}

		function unreport(r) {
			var i = reported.indexOf(r);
			if(i >= 0) {
				reported.splice(i, 1);
				logInfo('Handled previous rejection [' + r.id + '] ' + formatObject(r.value));
			}
		}

		function enqueue(f, x) {
			tasks.push(f, x);
			if(!running) {
				running = true;
				running = timer.set(flush, 0);
			}
		}

		function flush() {
			running = false;
			while(tasks.length > 0) {
				tasks.shift()(tasks.shift());
			}
		}

		return Promise;
	};

	function formatError(e) {
		var s = typeof e === 'object' && e.stack ? e.stack : formatObject(e);
		return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
	}

	function formatObject(o) {
		var s = String(o);
		if(s === '[object Object]' && typeof JSON !== 'undefined') {
			s = tryStringify(o, s);
		}
		return s;
	}

	function tryStringify(e, defaultValue) {
		try {
			return JSON.stringify(e);
		} catch(e) {
			// Ignore. Cannot JSON.stringify e, stick with String(e)
			return defaultValue;
		}
	}

	function throwit(e) {
		throw e;
	}

	function noop() {}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(_dereq_); }));

},{"../timer":71}],67:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function addWith(Promise) {
		/**
		 * Returns a promise whose handlers will be called with `this` set to
		 * the supplied `thisArg`.  Subsequent promises derived from the
		 * returned promise will also have their handlers called with `thisArg`.
		 * Calling `with` with undefined or no arguments will return a promise
		 * whose handlers will again be called in the usual Promises/A+ way (no `this`)
		 * thus safely undoing any previous `with` in the promise chain.
		 *
		 * WARNING: Promises returned from `with`/`withThis` are NOT Promises/A+
		 * compliant, specifically violating 2.2.5 (http://promisesaplus.com/#point-41)
		 *
		 * @param {object} thisArg `this` value for all handlers attached to
		 *  the returned promise.
		 * @returns {Promise}
		 */
		Promise.prototype['with'] = Promise.prototype.withThis
			= Promise.prototype._bindContext;

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));


},{}],68:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function liftAll(liftOne, combine, dst, src) {
		if(typeof combine === 'undefined') {
			combine = defaultCombine;
		}

		return Object.keys(src).reduce(function(dst, key) {
			var f = src[key];
			return typeof f === 'function' ? combine(dst, liftOne(f), key) : dst;
		}, typeof dst === 'undefined' ? defaultDst(src) : dst);
	};

	function defaultCombine(o, f, k) {
		o[k] = f;
		return o;
	}

	function defaultDst(src) {
		return typeof src === 'function' ? src.bind() : Object.create(src);
	}
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],69:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function makePromise(environment) {

		var tasks = environment.scheduler;

		var objectCreate = Object.create ||
			function(proto) {
				function Child() {}
				Child.prototype = proto;
				return new Child();
			};

		/**
		 * Create a promise whose fate is determined by resolver
		 * @constructor
		 * @returns {Promise} promise
		 * @name Promise
		 */
		function Promise(resolver, handler) {
			this._handler = resolver === Handler ? handler : init(resolver);
		}

		/**
		 * Run the supplied resolver
		 * @param resolver
		 * @returns {makePromise.DeferredHandler}
		 */
		function init(resolver) {
			var handler = new DeferredHandler();

			try {
				resolver(promiseResolve, promiseReject, promiseNotify);
			} catch (e) {
				promiseReject(e);
			}

			return handler;

			/**
			 * Transition from pre-resolution state to post-resolution state, notifying
			 * all listeners of the ultimate fulfillment or rejection
			 * @param {*} x resolution value
			 */
			function promiseResolve (x) {
				handler.resolve(x);
			}
			/**
			 * Reject this promise with reason, which will be used verbatim
			 * @param {Error|*} reason rejection reason, strongly suggested
			 *   to be an Error type
			 */
			function promiseReject (reason) {
				handler.reject(reason);
			}

			/**
			 * Issue a progress event, notifying all progress listeners
			 * @param {*} x progress event payload to pass to all listeners
			 */
			function promiseNotify (x) {
				handler.notify(x);
			}
		}

		// Creation

		Promise.resolve = resolve;
		Promise.reject = reject;
		Promise.never = never;

		Promise._defer = defer;

		/**
		 * Returns a trusted promise. If x is already a trusted promise, it is
		 * returned, otherwise returns a new trusted Promise which follows x.
		 * @param  {*} x
		 * @return {Promise} promise
		 */
		function resolve(x) {
			return isPromise(x) ? x
				: new Promise(Handler, new AsyncHandler(getHandler(x)));
		}

		/**
		 * Return a reject promise with x as its reason (x is used verbatim)
		 * @param {*} x
		 * @returns {Promise} rejected promise
		 */
		function reject(x) {
			return new Promise(Handler, new AsyncHandler(new RejectedHandler(x)));
		}

		/**
		 * Return a promise that remains pending forever
		 * @returns {Promise} forever-pending promise.
		 */
		function never() {
			return foreverPendingPromise; // Should be frozen
		}

		/**
		 * Creates an internal {promise, resolver} pair
		 * @private
		 * @returns {Promise}
		 */
		function defer() {
			return new Promise(Handler, new DeferredHandler());
		}

		// Transformation and flow control

		/**
		 * Transform this promise's fulfillment value, returning a new Promise
		 * for the transformed result.  If the promise cannot be fulfilled, onRejected
		 * is called with the reason.  onProgress *may* be called with updates toward
		 * this promise's fulfillment.
		 * @param {function=} onFulfilled fulfillment handler
		 * @param {function=} onRejected rejection handler
		 * @deprecated @param {function=} onProgress progress handler
		 * @return {Promise} new promise
		 */
		Promise.prototype.then = function(onFulfilled, onRejected) {
			var parent = this._handler;

			if (typeof onFulfilled !== 'function' && parent.join().state() > 0) {
				// Short circuit: value will not change, simply share handler
				return new Promise(Handler, parent);
			}

			var p = this._beget();
			var child = p._handler;

			parent.when({
				resolve: child.resolve,
				notify: child.notify,
				context: child,
				receiver: parent.receiver,
				fulfilled: onFulfilled,
				rejected: onRejected,
				progress: arguments.length > 2 ? arguments[2] : void 0
			});

			return p;
		};

		/**
		 * If this promise cannot be fulfilled due to an error, call onRejected to
		 * handle the error. Shortcut for .then(undefined, onRejected)
		 * @param {function?} onRejected
		 * @return {Promise}
		 */
		Promise.prototype['catch'] = function(onRejected) {
			return this.then(void 0, onRejected);
		};

		/**
		 * Private function to bind a thisArg for this promise's handlers
		 * @private
		 * @param {object} thisArg `this` value for all handlers attached to
		 *  the returned promise.
		 * @returns {Promise}
		 */
		Promise.prototype._bindContext = function(thisArg) {
			return new Promise(Handler, new BoundHandler(this._handler, thisArg));
		};

		/**
		 * Creates a new, pending promise of the same type as this promise
		 * @private
		 * @returns {Promise}
		 */
		Promise.prototype._beget = function() {
			var parent = this._handler;
			var child = new DeferredHandler(parent.receiver, parent.join().context);
			return new this.constructor(Handler, child);
		};

		/**
		 * Check if x is a rejected promise, and if so, delegate to handler._fatal
		 * @private
		 * @param {*} x
		 */
		Promise.prototype._maybeFatal = function(x) {
			if(!maybeThenable(x)) {
				return;
			}

			var handler = getHandler(x);
			var context = this._handler.context;
			handler.catchError(function() {
				this._fatal(context);
			}, handler);
		};

		// Array combinators

		Promise.all = all;
		Promise.race = race;

		/**
		 * Return a promise that will fulfill when all promises in the
		 * input array have fulfilled, or will reject when one of the
		 * promises rejects.
		 * @param {array} promises array of promises
		 * @returns {Promise} promise for array of fulfillment values
		 */
		function all(promises) {
			/*jshint maxcomplexity:8*/
			var resolver = new DeferredHandler();
			var pending = promises.length >>> 0;
			var results = new Array(pending);

			var i, h, x, s;
			for (i = 0; i < promises.length; ++i) {
				x = promises[i];

				if (x === void 0 && !(i in promises)) {
					--pending;
					continue;
				}

				if (maybeThenable(x)) {
					h = isPromise(x)
						? x._handler.join()
						: getHandlerUntrusted(x);

					s = h.state();
					if (s === 0) {
						resolveOne(resolver, results, h, i);
					} else if (s > 0) {
						results[i] = h.value;
						--pending;
					} else {
						resolver.become(h);
						break;
					}

				} else {
					results[i] = x;
					--pending;
				}
			}

			if(pending === 0) {
				resolver.become(new FulfilledHandler(results));
			}

			return new Promise(Handler, resolver);
			function resolveOne(resolver, results, handler, i) {
				handler.map(function(x) {
					results[i] = x;
					if(--pending === 0) {
						this.become(new FulfilledHandler(results));
					}
				}, resolver);
			}
		}

		/**
		 * Fulfill-reject competitive race. Return a promise that will settle
		 * to the same state as the earliest input promise to settle.
		 *
		 * WARNING: The ES6 Promise spec requires that race()ing an empty array
		 * must return a promise that is pending forever.  This implementation
		 * returns a singleton forever-pending promise, the same singleton that is
		 * returned by Promise.never(), thus can be checked with ===
		 *
		 * @param {array} promises array of promises to race
		 * @returns {Promise} if input is non-empty, a promise that will settle
		 * to the same outcome as the earliest input promise to settle. if empty
		 * is empty, returns a promise that will never settle.
		 */
		function race(promises) {
			// Sigh, race([]) is untestable unless we return *something*
			// that is recognizable without calling .then() on it.
			if(Object(promises) === promises && promises.length === 0) {
				return never();
			}

			var h = new DeferredHandler();
			var i, x;
			for(i=0; i<promises.length; ++i) {
				x = promises[i];
				if (x !== void 0 && i in promises) {
					getHandler(x).chain(h, h.resolve, h.reject);
				}
			}
			return new Promise(Handler, h);
		}

		// Promise internals

		/**
		 * Get an appropriate handler for x, without checking for cycles
		 * @private
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandler(x) {
			if(isPromise(x)) {
				return x._handler.join();
			}
			return maybeThenable(x) ? getHandlerUntrusted(x) : new FulfilledHandler(x);
		}

		function isPromise(x) {
			return x instanceof Promise;
		}

		/**
		 * Get a handler for potentially untrusted thenable x
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandlerUntrusted(x) {
			try {
				var untrustedThen = x.then;
				return typeof untrustedThen === 'function'
					? new ThenableHandler(untrustedThen, x)
					: new FulfilledHandler(x);
			} catch(e) {
				return new RejectedHandler(e);
			}
		}

		/**
		 * Handler for a promise that is pending forever
		 * @private
		 * @constructor
		 */
		function Handler() {}

		Handler.prototype.when
			= Handler.prototype.resolve
			= Handler.prototype.reject
			= Handler.prototype.notify
			= Handler.prototype._fatal
			= Handler.prototype._unreport
			= Handler.prototype._report
			= noop;

		Handler.prototype.inspect = toPendingState;

		Handler.prototype._state = 0;

		Handler.prototype.state = function() {
			return this._state;
		};

		/**
		 * Recursively collapse handler chain to find the handler
		 * nearest to the fully resolved value.
		 * @returns {object} handler nearest the fully resolved value
		 */
		Handler.prototype.join = function() {
			var h = this;
			while(h.handler !== void 0) {
				h = h.handler;
			}
			return h;
		};

		Handler.prototype.chain = function(to, fulfilled, rejected, progress) {
			this.when({
				resolve: noop,
				notify: noop,
				context: void 0,
				receiver: to,
				fulfilled: fulfilled,
				rejected: rejected,
				progress: progress
			});
		};

		Handler.prototype.map = function(f, to) {
			this.chain(to, f, to.reject, to.notify);
		};

		Handler.prototype.catchError = function(f, to) {
			this.chain(to, to.resolve, f, to.notify);
		};

		Handler.prototype.fold = function(to, f, z) {
			this.join().map(function(x) {
				getHandler(z).map(function(z) {
					this.resolve(tryCatchReject2(f, z, x, this.receiver));
				}, this);
			}, to);
		};

		/**
		 * Handler that manages a queue of consumers waiting on a pending promise
		 * @private
		 * @constructor
		 */
		function DeferredHandler(receiver, inheritedContext) {
			Promise.createContext(this, inheritedContext);

			this.consumers = void 0;
			this.receiver = receiver;
			this.handler = void 0;
			this.resolved = false;
		}

		inherit(Handler, DeferredHandler);

		DeferredHandler.prototype._state = 0;

		DeferredHandler.prototype.inspect = function() {
			return this.resolved ? this.join().inspect() : toPendingState();
		};

		DeferredHandler.prototype.resolve = function(x) {
			if(!this.resolved) {
				this.become(getHandler(x));
			}
		};

		DeferredHandler.prototype.reject = function(x) {
			if(!this.resolved) {
				this.become(new RejectedHandler(x));
			}
		};

		DeferredHandler.prototype.join = function() {
			if (this.resolved) {
				var h = this;
				while(h.handler !== void 0) {
					h = h.handler;
					if(h === this) {
						return this.handler = new Cycle();
					}
				}
				return h;
			} else {
				return this;
			}
		};

		DeferredHandler.prototype.run = function() {
			var q = this.consumers;
			var handler = this.join();
			this.consumers = void 0;

			for (var i = 0; i < q.length; ++i) {
				handler.when(q[i]);
			}
		};

		DeferredHandler.prototype.become = function(handler) {
			this.resolved = true;
			this.handler = handler;
			if(this.consumers !== void 0) {
				tasks.enqueue(this);
			}

			if(this.context !== void 0) {
				handler._report(this.context);
			}
		};

		DeferredHandler.prototype.when = function(continuation) {
			if(this.resolved) {
				tasks.enqueue(new ContinuationTask(continuation, this.handler));
			} else {
				if(this.consumers === void 0) {
					this.consumers = [continuation];
				} else {
					this.consumers.push(continuation);
				}
			}
		};

		DeferredHandler.prototype.notify = function(x) {
			if(!this.resolved) {
				tasks.enqueue(new ProgressTask(this, x));
			}
		};

		DeferredHandler.prototype._report = function(context) {
			this.resolved && this.handler.join()._report(context);
		};

		DeferredHandler.prototype._unreport = function() {
			this.resolved && this.handler.join()._unreport();
		};

		DeferredHandler.prototype._fatal = function(context) {
			var c = typeof context === 'undefined' ? this.context : context;
			this.resolved && this.handler.join()._fatal(c);
		};

		/**
		 * Abstract base for handler that delegates to another handler
		 * @private
		 * @param {object} handler
		 * @constructor
		 */
		function DelegateHandler(handler) {
			this.handler = handler;
		}

		inherit(Handler, DelegateHandler);

		DelegateHandler.prototype.inspect = function() {
			return this.join().inspect();
		};

		DelegateHandler.prototype._report = function(context) {
			this.join()._report(context);
		};

		DelegateHandler.prototype._unreport = function() {
			this.join()._unreport();
		};

		/**
		 * Wrap another handler and force it into a future stack
		 * @private
		 * @param {object} handler
		 * @constructor
		 */
		function AsyncHandler(handler) {
			DelegateHandler.call(this, handler);
		}

		inherit(DelegateHandler, AsyncHandler);

		AsyncHandler.prototype.when = function(continuation) {
			tasks.enqueue(new ContinuationTask(continuation, this.join()));
		};

		/**
		 * Handler that follows another handler, injecting a receiver
		 * @private
		 * @param {object} handler another handler to follow
		 * @param {object=undefined} receiver
		 * @constructor
		 */
		function BoundHandler(handler, receiver) {
			DelegateHandler.call(this, handler);
			this.receiver = receiver;
		}

		inherit(DelegateHandler, BoundHandler);

		BoundHandler.prototype.when = function(continuation) {
			// Because handlers are allowed to be shared among promises,
			// each of which possibly having a different receiver, we have
			// to insert our own receiver into the chain if it has been set
			// so that callbacks (f, r, u) will be called using our receiver
			if(this.receiver !== void 0) {
				continuation.receiver = this.receiver;
			}
			this.join().when(continuation);
		};

		/**
		 * Handler that wraps an untrusted thenable and assimilates it in a future stack
		 * @private
		 * @param {function} then
		 * @param {{then: function}} thenable
		 * @constructor
		 */
		function ThenableHandler(then, thenable) {
			DeferredHandler.call(this);
			tasks.enqueue(new AssimilateTask(then, thenable, this));
		}

		inherit(DeferredHandler, ThenableHandler);

		/**
		 * Handler for a fulfilled promise
		 * @private
		 * @param {*} x fulfillment value
		 * @constructor
		 */
		function FulfilledHandler(x) {
			Promise.createContext(this);
			this.value = x;
		}

		inherit(Handler, FulfilledHandler);

		FulfilledHandler.prototype._state = 1;

		FulfilledHandler.prototype.inspect = function() {
			return { state: 'fulfilled', value: this.value };
		};

		FulfilledHandler.prototype.when = function(cont) {
			var x;

			if (typeof cont.fulfilled === 'function') {
				Promise.enterContext(this);
				x = tryCatchReject(cont.fulfilled, this.value, cont.receiver);
				Promise.exitContext();
			} else {
				x = this.value;
			}

			cont.resolve.call(cont.context, x);
		};

		var id = 0;
		/**
		 * Handler for a rejected promise
		 * @private
		 * @param {*} x rejection reason
		 * @constructor
		 */
		function RejectedHandler(x) {
			Promise.createContext(this);

			this.id = ++id;
			this.value = x;
			this.handled = false;
			this.reported = false;

			this._report();
		}

		inherit(Handler, RejectedHandler);

		RejectedHandler.prototype._state = -1;

		RejectedHandler.prototype.inspect = function() {
			return { state: 'rejected', reason: this.value };
		};

		RejectedHandler.prototype.when = function(cont) {
			var x;

			if (typeof cont.rejected === 'function') {
				this._unreport();
				Promise.enterContext(this);
				x = tryCatchReject(cont.rejected, this.value, cont.receiver);
				Promise.exitContext();
			} else {
				x = new Promise(Handler, this);
			}


			cont.resolve.call(cont.context, x);
		};

		RejectedHandler.prototype._report = function(context) {
			tasks.afterQueue(reportUnhandled, this, context);
		};

		RejectedHandler.prototype._unreport = function() {
			this.handled = true;
			tasks.afterQueue(reportHandled, this);
		};

		RejectedHandler.prototype._fatal = function(context) {
			Promise.onFatalRejection(this, context);
		};

		function reportUnhandled(rejection, context) {
			if(!rejection.handled) {
				rejection.reported = true;
				Promise.onPotentiallyUnhandledRejection(rejection, context);
			}
		}

		function reportHandled(rejection) {
			if(rejection.reported) {
				Promise.onPotentiallyUnhandledRejectionHandled(rejection);
			}
		}

		// Unhandled rejection hooks
		// By default, everything is a noop

		// TODO: Better names: "annotate"?
		Promise.createContext
			= Promise.enterContext
			= Promise.exitContext
			= Promise.onPotentiallyUnhandledRejection
			= Promise.onPotentiallyUnhandledRejectionHandled
			= Promise.onFatalRejection
			= noop;

		// Errors and singletons

		var foreverPendingHandler = new Handler();
		var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

		function Cycle() {
			RejectedHandler.call(this, new TypeError('Promise cycle'));
		}

		inherit(RejectedHandler, Cycle);

		// Snapshot states

		/**
		 * Creates a pending state snapshot
		 * @private
		 * @returns {{state:'pending'}}
		 */
		function toPendingState() {
			return { state: 'pending' };
		}

		// Task runners

		/**
		 * Run a single consumer
		 * @private
		 * @constructor
		 */
		function ContinuationTask(continuation, handler) {
			this.continuation = continuation;
			this.handler = handler;
		}

		ContinuationTask.prototype.run = function() {
			this.handler.join().when(this.continuation);
		};

		/**
		 * Run a queue of progress handlers
		 * @private
		 * @constructor
		 */
		function ProgressTask(handler, value) {
			this.handler = handler;
			this.value = value;
		}

		ProgressTask.prototype.run = function() {
			var q = this.handler.consumers;
			if(q === void 0) {
				return;
			}
			// First progress handler is at index 1
			for (var i = 0; i < q.length; ++i) {
				this._notify(q[i]);
			}
		};

		ProgressTask.prototype._notify = function(continuation) {
			var x = typeof continuation.progress === 'function'
				? tryCatchReturn(continuation.progress, this.value, continuation.receiver)
				: this.value;

			continuation.notify.call(continuation.context, x);
		};

		/**
		 * Assimilate a thenable, sending it's value to resolver
		 * @private
		 * @param {function} then
		 * @param {object|function} thenable
		 * @param {object} resolver
		 * @constructor
		 */
		function AssimilateTask(then, thenable, resolver) {
			this._then = then;
			this.thenable = thenable;
			this.resolver = resolver;
		}

		AssimilateTask.prototype.run = function() {
			var h = this.resolver;
			tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

			function _resolve(x) { h.resolve(x); }
			function _reject(x)  { h.reject(x); }
			function _notify(x)  { h.notify(x); }
		};

		function tryAssimilate(then, thenable, resolve, reject, notify) {
			try {
				then.call(thenable, resolve, reject, notify);
			} catch (e) {
				reject(e);
			}
		}

		// Other helpers

		/**
		 * @param {*} x
		 * @returns {boolean} false iff x is guaranteed not to be a thenable
		 */
		function maybeThenable(x) {
			return (typeof x === 'object' || typeof x === 'function') && x !== null;
		}

		/**
		 * Return f.call(thisArg, x), or if it throws return a rejected promise for
		 * the thrown exception
		 * @private
		 */
		function tryCatchReject(f, x, thisArg) {
			try {
				return f.call(thisArg, x);
			} catch(e) {
				return reject(e);
			}
		}

		/**
		 * Same as above, but includes the extra argument parameter.
		 * @private
		 */
		function tryCatchReject2(f, x, y, thisArg) {
			try {
				return f.call(thisArg, x, y);
			} catch(e) {
				return reject(e);
			}
		}

		/**
		 * Return f.call(thisArg, x), or if it throws, *return* the exception
		 * @private
		 */
		function tryCatchReturn(f, x, thisArg) {
			try {
				return f.call(thisArg, x);
			} catch(e) {
				return e;
			}
		}

		function inherit(Parent, Child) {
			Child.prototype = objectCreate(Parent.prototype);
			Child.prototype.constructor = Child;
		}

		function noop() {}

		return Promise;
	};
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],70:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(_dereq_) {

	var Queue = _dereq_('./Queue');

	// Credit to Twisol (https://github.com/Twisol) for suggesting
	// this type of extensible queue + trampoline approach for next-tick conflation.

	function Scheduler(enqueue) {
		this._enqueue = enqueue;
		this._handlerQueue = new Queue(15);
		this._afterQueue = new Queue(5);
		this._running = false;

		var self = this;
		this.drain = function() {
			self._drain();
		};
	}

	/**
	 * Enqueue a task. If the queue is not currently scheduled to be
	 * drained, schedule it.
	 * @param {function} task
	 */
	Scheduler.prototype.enqueue = function(task) {
		this._handlerQueue.push(task);
		if(!this._running) {
			this._running = true;
			this._enqueue(this.drain);
		}
	};

	Scheduler.prototype.afterQueue = function(f, x, y) {
		this._afterQueue.push(f);
		this._afterQueue.push(x);
		this._afterQueue.push(y);
		if(!this._running) {
			this._running = true;
			this._enqueue(this.drain);
		}
	};

	/**
	 * Drain the handler queue entirely, being careful to allow the
	 * queue to be extended while it is being processed, and to continue
	 * processing until it is truly empty.
	 */
	Scheduler.prototype._drain = function() {
		var q = this._handlerQueue;
		while(q.length > 0) {
			q.shift().run();
		}

		this._running = false;

		q = this._afterQueue;
		while(q.length > 0) {
			q.shift()(q.shift(), q.shift());
		}
	};

	return Scheduler;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(_dereq_); }));

},{"./Queue":56}],71:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(_dereq_) {
	/*global setTimeout,clearTimeout*/
	var cjsRequire, vertx, setTimer, clearTimer;

	cjsRequire = _dereq_;

	try {
		vertx = cjsRequire('vertx');
		setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
		clearTimer = vertx.cancelTimer;
	} catch (e) {
		setTimer = function(f, ms) { return setTimeout(f, ms); };
		clearTimer = function(t) { return clearTimeout(t); };
	}

	return {
		set: setTimer,
		clear: clearTimer
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(_dereq_); }));

},{}],72:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(_dereq_) {

	var PromiseMonitor = _dereq_('./monitor/PromiseMonitor');
	var ConsoleReporter = _dereq_('./monitor/ConsoleReporter');

	var promiseMonitor = new PromiseMonitor(new ConsoleReporter());

	return function(Promise) {
		return promiseMonitor.monitor(Promise);
	};
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(_dereq_); }));

},{"./monitor/ConsoleReporter":73,"./monitor/PromiseMonitor":74}],73:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(_dereq_) {

	var error = _dereq_('./error');
	var unhandledRejectionsMsg = '[promises] Unhandled rejections: ';
	var allHandledMsg = '[promises] All previously unhandled rejections have now been handled';

	function ConsoleReporter() {
		this._previouslyReported = false;
	}

	ConsoleReporter.prototype = initDefaultLogging();

	ConsoleReporter.prototype.log = function(traces) {
		if(traces.length === 0) {
			if(this._previouslyReported) {
				this._previouslyReported = false;
				this.msg(allHandledMsg);
			}
			return;
		}

		this._previouslyReported = true;
		this.groupStart(unhandledRejectionsMsg + traces.length);
		try {
			this._log(traces);
		} finally {
			this.groupEnd();
		}
	};

	ConsoleReporter.prototype._log = function(traces) {
		for(var i=0; i<traces.length; ++i) {
			this.warn(error.format(traces[i]));
		}
	};

	function initDefaultLogging() {
		/*jshint maxcomplexity:7*/
		var log, warn, groupStart, groupEnd;

		if(typeof console === 'undefined') {
			log = warn = consoleNotAvailable;
		} else {
			if(typeof console.error === 'function'
				&& typeof console.dir === 'function') {
				warn = function(s) {
					console.error(s);
				};

				log = function(s) {
					console.log(s);
				};

				if(typeof console.groupCollapsed === 'function') {
					groupStart = function(s) {
						console.groupCollapsed(s);
					};
					groupEnd = function() {
						console.groupEnd();
					};
				}
			} else {
				// IE8 has console.log and JSON, so we can make a
				// reasonably useful warn() from those.
				// Credit to webpro (https://github.com/webpro) for this idea
				if (typeof console.log ==='function'
					&& typeof JSON !== 'undefined') {
					log = warn = function (x) {
						if(typeof x !== 'string') {
							try {
								x = JSON.stringify(x);
							} catch(e) {}
						}
						console.log(x);
					};
				}
			}
		}

		return {
			msg: log,
			warn: warn,
			groupStart: groupStart || warn,
			groupEnd: groupEnd || consoleNotAvailable
		};
	}

	function consoleNotAvailable() {}

	return ConsoleReporter;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(_dereq_); }));

},{"./error":76}],74:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(_dereq_) {

	var defaultStackJumpSeparator = 'from execution context:';
	var defaultStackFilter = /[\s\(\/\\](node|module|timers)\.js:|when([\/\\]{1,2}(lib|monitor|es6-shim)[\/\\]{1,2}|\.js)|(new\sPromise)\b|(\b(PromiseMonitor|ConsoleReporter|Scheduler|RunHandlerTask|ProgressTask|Promise|.*Handler)\.[\w_]\w\w+\b)|\b(tryCatch\w+|getHandler\w*)\b/i;

	var setTimer = _dereq_('../lib/timer').set;
	var error = _dereq_('./error');

	var executionContext = [];

	function PromiseMonitor(reporter) {
		this.logDelay = 0;
		this.stackFilter = defaultStackFilter;
		this.stackJumpSeparator = defaultStackJumpSeparator;
		this.filterDuplicateFrames = true;

		this._reporter = reporter;
		if(typeof reporter.configurePromiseMonitor === 'function') {
			reporter.configurePromiseMonitor(this);
		}

		this._traces = [];
		this._traceTask = 0;

		var self = this;
		this._doLogTraces = function() {
			self._logTraces();
		};
	}

	PromiseMonitor.prototype.monitor = function(Promise) {
		var self = this;
		Promise.createContext = function(p, context) {
			p.context = self.createContext(p, context);
		};

		Promise.enterContext = function(p) {
			executionContext.push(p.context);
		};

		Promise.exitContext = function() {
			executionContext.pop();
		};

		Promise.onPotentiallyUnhandledRejection = function(rejection, extraContext) {
			return self.addTrace(rejection, extraContext);
		};

		Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
			return self.removeTrace(rejection);
		};

		Promise.onFatalRejection = function(rejection, extraContext) {
			return self.fatal(rejection, extraContext);
		};

		return this;
	};

	PromiseMonitor.prototype.createContext = function(at, parentContext) {
		var context = {
			parent: parentContext || executionContext[executionContext.length - 1],
			stack: void 0
		};
		error.captureStack(context, at.constructor);
		return context;
	};

	PromiseMonitor.prototype.addTrace = function(handler, extraContext) {
		var t, i;

		for(i = this._traces.length-1; i >= 0; --i) {
			t = this._traces[i];
			if(t.handler === handler) {
				break;
			}
		}

		if(i >= 0) {
			t.extraContext = extraContext;
		} else {
			this._traces.push({
				handler: handler,
				extraContext: extraContext
			});
		}

		this.logTraces();
	};

	PromiseMonitor.prototype.removeTrace = function(/*handler*/) {
		this.logTraces();
	};

	PromiseMonitor.prototype.fatal = function(handler, extraContext) {
		var err = new Error();
		err.stack = this._createLongTrace(handler.value, handler.context, extraContext).join('\n');
		setTimer(function() {
			throw err;
		}, 0);
	};

	PromiseMonitor.prototype.logTraces = function() {
		if(!this._traceTask) {
			this._traceTask = setTimer(this._doLogTraces, this.logDelay);
		}
	};

	PromiseMonitor.prototype._logTraces = function() {
		this._traceTask = void 0;
		this._traces = this._traces.filter(filterHandled);
		this._reporter.log(this.formatTraces(this._traces));
	};


	PromiseMonitor.prototype.formatTraces = function(traces) {
		return traces.map(function(t) {
			return this._createLongTrace(t.handler.value, t.handler.context, t.extraContext);
		}, this);
	};

	PromiseMonitor.prototype._createLongTrace = function(e, context, extraContext) {
		var trace = error.parse(e) || [String(e) + ' (WARNING: non-Error used)'];
		trace = filterFrames(this.stackFilter, trace, 0);
		this._appendContext(trace, context);
		this._appendContext(trace, extraContext);
		return this.filterDuplicateFrames ? this._removeDuplicates(trace) : trace;
	};

	PromiseMonitor.prototype._removeDuplicates = function(trace) {
		var seen = {};
		var sep = this.stackJumpSeparator;
		var count = 0;
		return trace.reduceRight(function(deduped, line, i) {
			if(i === 0) {
				deduped.unshift(line);
			} else if(line === sep) {
				if(count > 0) {
					deduped.unshift(line);
					count = 0;
				}
			} else if(!seen[line]) {
				seen[line] = true;
				deduped.unshift(line);
				++count;
			}
			return deduped;
		}, []);
	};

	PromiseMonitor.prototype._appendContext = function(trace, context) {
		trace.push.apply(trace, this._createTrace(context));
	};

	PromiseMonitor.prototype._createTrace = function(traceChain) {
		var trace = [];
		var stack;

		while(traceChain) {
			stack = error.parse(traceChain);

			if (stack) {
				stack = filterFrames(this.stackFilter, stack);
				appendStack(trace, stack, this.stackJumpSeparator);
			}

			traceChain = traceChain.parent;
		}

		return trace;
	};

	function appendStack(trace, stack, separator) {
		if (stack.length > 1) {
			stack[0] = separator;
			trace.push.apply(trace, stack);
		}
	}

	function filterFrames(stackFilter, stack) {
		return stack.filter(function(frame) {
			return !stackFilter.test(frame);
		});
	}

	function filterHandled(t) {
		return !t.handler.handled;
	}

	return PromiseMonitor;
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(_dereq_); }));

},{"../lib/timer":71,"./error":76}],75:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(_dereq_) {

	var monitor = _dereq_('../monitor');
	var Promise = _dereq_('../when').Promise;

	return monitor(Promise);

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(_dereq_); }));

},{"../monitor":72,"../when":77}],76:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	var parse, captureStack, format;

	if(Error.captureStackTrace) {
		// Use Error.captureStackTrace if available
		parse = function(e) {
			return e && e.stack && e.stack.split('\n');
		};

		format = formatAsString;
		captureStack = Error.captureStackTrace;

	} else {
		// Otherwise, do minimal feature detection to determine
		// how to capture and format reasonable stacks.
		parse = function(e) {
			var stack = e && e.stack && e.stack.split('\n');
			if(stack && e.message) {
				stack.unshift(e.message);
			}
			return stack;
		};

		(function() {
			var e = new Error();
			if(typeof e.stack !== 'string') {
				format = formatAsString;
				captureStack = captureSpiderMonkeyStack;
			} else {
				format = formatAsErrorWithStack;
				captureStack = useStackDirectly;
			}
		}());
	}

	function captureSpiderMonkeyStack(host) {
		try {
			throw new Error();
		} catch(err) {
			host.stack = err.stack;
		}
	}

	function useStackDirectly(host) {
		host.stack = new Error().stack;
	}

	function formatAsString(longTrace) {
		return join(longTrace);
	}

	function formatAsErrorWithStack(longTrace) {
		var e = new Error();
		e.stack = formatAsString(longTrace);
		return e;
	}

	// About 5-10x faster than String.prototype.join o_O
	function join(a) {
		var sep = false;
		var s = '';
		for(var i=0; i< a.length; ++i) {
			if(sep) {
				s += '\n' + a[i];
			} else {
				s+= a[i];
				sep = true;
			}
		}
		return s;
	}

	return {
		parse: parse,
		format: format,
		captureStack: captureStack
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],77:[function(_dereq_,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */

/**
 * Promises/A+ and when() implementation
 * when is part of the cujoJS family of libraries (http://cujojs.com/)
 * @author Brian Cavalier
 * @author John Hann
 * @version 3.2.3
 */
(function(define) { 'use strict';
define(function (_dereq_) {

	var timed = _dereq_('./lib/decorators/timed');
	var array = _dereq_('./lib/decorators/array');
	var flow = _dereq_('./lib/decorators/flow');
	var fold = _dereq_('./lib/decorators/fold');
	var inspect = _dereq_('./lib/decorators/inspect');
	var generate = _dereq_('./lib/decorators/iterate');
	var progress = _dereq_('./lib/decorators/progress');
	var withThis = _dereq_('./lib/decorators/with');
	var unhandledRejection = _dereq_('./lib/decorators/unhandledRejection');
	var TimeoutError = _dereq_('./lib/TimeoutError');

	var Promise = [array, flow, fold, generate, progress,
		inspect, withThis, timed, unhandledRejection]
		.reduce(function(Promise, feature) {
			return feature(Promise);
		}, _dereq_('./lib/Promise'));

	var slice = Array.prototype.slice;

	// Public API

	when.promise     = promise;              // Create a pending promise
	when.resolve     = Promise.resolve;      // Create a resolved promise
	when.reject      = Promise.reject;       // Create a rejected promise

	when.lift        = lift;                 // lift a function to return promises
	when['try']      = attempt;              // call a function and return a promise
	when.attempt     = attempt;              // alias for when.try

	when.iterate     = Promise.iterate;      // Generate a stream of promises
	when.unfold      = Promise.unfold;       // Generate a stream of promises

	when.join        = join;                 // Join 2 or more promises

	when.all         = all;                  // Resolve a list of promises
	when.settle      = settle;               // Settle a list of promises

	when.any         = lift(Promise.any);    // One-winner race
	when.some        = lift(Promise.some);   // Multi-winner race

	when.map         = map;                  // Array.map() for promises
	when.reduce      = reduce;               // Array.reduce() for promises
	when.reduceRight = reduceRight;          // Array.reduceRight() for promises

	when.isPromiseLike = isPromiseLike;      // Is something promise-like, aka thenable

	when.Promise     = Promise;              // Promise constructor
	when.defer       = defer;                // Create a {promise, resolve, reject} tuple

	// Error types

	when.TimeoutError = TimeoutError;

	/**
	 * Get a trusted promise for x, or by transforming x with onFulfilled
	 *
	 * @param {*} x
	 * @param {function?} onFulfilled callback to be called when x is
	 *   successfully fulfilled.  If promiseOrValue is an immediate value, callback
	 *   will be invoked immediately.
	 * @param {function?} onRejected callback to be called when x is
	 *   rejected.
	 * @deprecated @param {function?} onProgress callback to be called when progress updates
	 *   are issued for x.
	 * @returns {Promise} a new promise that will fulfill with the return
	 *   value of callback or errback or the completion value of promiseOrValue if
	 *   callback and/or errback is not supplied.
	 */
	function when(x, onFulfilled, onRejected) {
		var p = Promise.resolve(x);
		if(arguments.length < 2) {
			return p;
		}

		return arguments.length > 3
			? p.then(onFulfilled, onRejected, arguments[3])
			: p.then(onFulfilled, onRejected);
	}

	/**
	 * Creates a new promise whose fate is determined by resolver.
	 * @param {function} resolver function(resolve, reject, notify)
	 * @returns {Promise} promise whose fate is determine by resolver
	 */
	function promise(resolver) {
		return new Promise(resolver);
	}

	/**
	 * Lift the supplied function, creating a version of f that returns
	 * promises, and accepts promises as arguments.
	 * @param {function} f
	 * @returns {Function} version of f that returns promises
	 */
	function lift(f) {
		return function() {
			return _apply(f, this, slice.call(arguments));
		};
	}

	/**
	 * Call f in a future turn, with the supplied args, and return a promise
	 * for the result.
	 * @param {function} f
	 * @returns {Promise}
	 */
	function attempt(f /*, args... */) {
		/*jshint validthis:true */
		return _apply(f, this, slice.call(arguments, 1));
	}

	/**
	 * try/lift helper that allows specifying thisArg
	 * @private
	 */
	function _apply(f, thisArg, args) {
		return Promise.all(args).then(function(args) {
			return f.apply(thisArg, args);
		});
	}

	/**
	 * Creates a {promise, resolver} pair, either or both of which
	 * may be given out safely to consumers.
	 * @return {{promise: Promise, resolve: function, reject: function, notify: function}}
	 */
	function defer() {
		return new Deferred();
	}

	function Deferred() {
		var p = Promise._defer();

		function resolve(x) { p._handler.resolve(x); }
		function reject(x) { p._handler.reject(x); }
		function notify(x) { p._handler.notify(x); }

		this.promise = p;
		this.resolve = resolve;
		this.reject = reject;
		this.notify = notify;
		this.resolver = { resolve: resolve, reject: reject, notify: notify };
	}

	/**
	 * Determines if x is promise-like, i.e. a thenable object
	 * NOTE: Will return true for *any thenable object*, and isn't truly
	 * safe, since it may attempt to access the `then` property of x (i.e.
	 *  clever/malicious getters may do weird things)
	 * @param {*} x anything
	 * @returns {boolean} true if x is promise-like
	 */
	function isPromiseLike(x) {
		return x && typeof x.then === 'function';
	}

	/**
	 * Return a promise that will resolve only once all the supplied arguments
	 * have resolved. The resolution value of the returned promise will be an array
	 * containing the resolution values of each of the arguments.
	 * @param {...*} arguments may be a mix of promises and values
	 * @returns {Promise}
	 */
	function join(/* ...promises */) {
		return Promise.all(arguments);
	}

	/**
	 * Return a promise that will fulfill once all input promises have
	 * fulfilled, or reject when any one input promise rejects.
	 * @param {array|Promise} promises array (or promise for an array) of promises
	 * @returns {Promise}
	 */
	function all(promises) {
		return when(promises, Promise.all);
	}

	/**
	 * Return a promise that will always fulfill with an array containing
	 * the outcome states of all input promises.  The returned promise
	 * will only reject if `promises` itself is a rejected promise.
	 * @param {array|Promise} promises array (or promise for an array) of promises
	 * @returns {Promise}
	 */
	function settle(promises) {
		return when(promises, Promise.settle);
	}

	/**
	 * Promise-aware array map function, similar to `Array.prototype.map()`,
	 * but input array may contain promises or values.
	 * @param {Array|Promise} promises array of anything, may contain promises and values
	 * @param {function} mapFunc map function which may return a promise or value
	 * @returns {Promise} promise that will fulfill with an array of mapped values
	 *  or reject if any input promise rejects.
	 */
	function map(promises, mapFunc) {
		return when(promises, function(promises) {
			return Promise.map(promises, mapFunc);
		});
	}

	/**
	 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
	 * input may contain promises and/or values, and reduceFunc
	 * may return either a value or a promise, *and* initialValue may
	 * be a promise for the starting value.
	 *
	 * @param {Array|Promise} promises array or promise for an array of anything,
	 *      may contain a mix of promises and values.
	 * @param {function} f reduce function reduce(currentValue, nextValue, index)
	 * @returns {Promise} that will resolve to the final reduced value
	 */
	function reduce(promises, f /*, initialValue */) {
		/*jshint unused:false*/
		var args = slice.call(arguments, 1);
		return when(promises, function(array) {
			args.unshift(array);
			return Promise.reduce.apply(Promise, args);
		});
	}

	/**
	 * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
	 * input may contain promises and/or values, and reduceFunc
	 * may return either a value or a promise, *and* initialValue may
	 * be a promise for the starting value.
	 *
	 * @param {Array|Promise} promises array or promise for an array of anything,
	 *      may contain a mix of promises and values.
	 * @param {function} f reduce function reduce(currentValue, nextValue, index)
	 * @returns {Promise} that will resolve to the final reduced value
	 */
	function reduceRight(promises, f /*, initialValue */) {
		/*jshint unused:false*/
		var args = slice.call(arguments, 1);
		return when(promises, function(array) {
			args.unshift(array);
			return Promise.reduceRight.apply(Promise, args);
		});
	}

	return when;
});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(_dereq_); });

},{"./lib/Promise":55,"./lib/TimeoutError":57,"./lib/decorators/array":59,"./lib/decorators/flow":60,"./lib/decorators/fold":61,"./lib/decorators/inspect":62,"./lib/decorators/iterate":63,"./lib/decorators/progress":64,"./lib/decorators/timed":65,"./lib/decorators/unhandledRejection":66,"./lib/decorators/with":67}],78:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var global = (function() { return this; })();

/**
 * WebSocket constructor.
 */

var WebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Module exports.
 */

module.exports = WebSocket ? ws : null;

/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object) opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  var instance;
  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }
  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;

},{}],79:[function(_dereq_,module,exports){
module.exports={
   "name": "autobahn",
   "version": "0.9.5",
   "description": "An implementation of The Web Application Messaging Protocol (WAMP).",
   "main": "index.js",
   "scripts": {
      "test": "nodeunit test/test.js"
   },
   "dependencies": {
      "when": ">= 2.8.0",
      "ws": ">= 0.4.31",
      "crypto-js": ">= 3.1.2-2"
   },
   "devDependencies": {
      "browserify": ">= 3.28.1",
      "nodeunit": ">= 0.8.6"
   },
   "repository": {
      "type": "git",
      "url": "git://github.com/tavendo/AutobahnJS.git"
   },
   "keywords": [
      "WAMP",
      "WebSocket",
      "RPC",
      "PubSub"
   ],
   "author": "Tavendo GmbH",
   "license": "MIT"
}

},{}]},{},[4])
(4)
});
/*!
Waypoints - 3.0.0
Copyright © 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    requestAnimationFrameShim
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    if (horizontalEmpty && verticalEmpty) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    if (this.element === this.element.window) {
      return Waypoint.viewportHeight()
    }
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    if (this.element === this.element.window) {
      return Waypoint.viewportWidth()
    }
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    var isWindow = this.element === this.element.window
    var contextOffset = this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = elementOffset + contextModifier - adjustment
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'innerHeight',
    'innerWidth',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  Waypoint.Adapter = JQueryAdapter
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function createExtension(framework) {
    return function() {
      var waypoints = []
      var overrides = arguments[0]

      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1])
        overrides.handler = arguments[0]
      }

      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        })
        if (typeof options.context === 'string') {
          options.context = framework(this).closest(options.context)[0]
        }
        waypoints.push(new Waypoint(options))
      })

      return waypoints
    }
  }

  if (window.jQuery) {
    window.jQuery.fn.waypoint = createExtension(window.jQuery)
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto)
  }
}())
;
/*

    countUp.js
    by @inorganik

*/

// target = id of html element or var of previously selected html element where counting occurs
// startVal = the value you want to begin at
// endVal = the value you want to arrive at
// decimals = number of decimal places, default 0
// duration = duration of animation in seconds, default 2
// options = optional object of options (see below)

function countUp(target, startVal, endVal, decimals, duration, options) {

    // make sure requestAnimationFrame and cancelAnimationFrame are defined
    // polyfill for browsers without native support
    // by Opera engineer Erik Möller
    var lastTime = 0;
    var vendors = ['webkit', 'moz', 'ms', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        }
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        }
    }

     // default options
    this.options = options || {
        useEasing : true, // toggle easing
        useGrouping : true, // 1,000,000 vs 1000000
        separator : ',', // character to use as a separator
        decimal : '.', // character to use as a decimal
    }
    if (this.options.separator == '') this.options.useGrouping = false;
    if (this.options.prefix == null) this.options.prefix = '';
    if (this.options.suffix == null) this.options.suffix = '';

    var self = this;
    
    this.d = (typeof target === 'string') ? document.getElementById(target) : target;
    this.startVal = Number(startVal);
    this.endVal = Number(endVal);
    this.countDown = (this.startVal > this.endVal) ? true : false;
    this.startTime = null;
    this.timestamp = null;
    this.remaining = null;
    this.frameVal = this.startVal;
    this.rAF = null;
    this.decimals = Math.max(0, decimals || 0);
    this.dec = Math.pow(10, this.decimals);
    this.duration = duration * 1000 || 2000;

    this.padLeftStrings = ["000000", "00000", "0000", "000", "00", "0", ""];

    this.version = function () { return '1.3.2' }
    
    // Print value to target
    this.printValue = function(value) {
        var result = (!isNaN(value)) ? self.formatNumber(value) : '--';
        if (self.d.tagName == 'INPUT') {
            this.d.value = result;
        } 
        else if (self.d.tagName == 'text') {
            this.d.textContent = result;
        }
        else {
            this.d.innerHTML = result;
        }
    }

    // Robert Penner's easeOutExpo
    this.easeOutExpo = function(t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    }
    this.count = function(timestamp) {

        if (self.startTime === null) self.startTime = timestamp;

        self.timestamp = timestamp;

        var progress = timestamp - self.startTime;
        self.remaining = self.duration - progress;

        // to ease or not to ease
        if (self.options.useEasing) {
            if (self.countDown) {
                var i = self.easeOutExpo(progress, 0, self.startVal - self.endVal, self.duration);
                self.frameVal = self.startVal - i;
            } else {
                self.frameVal = self.easeOutExpo(progress, self.startVal, self.endVal - self.startVal, self.duration);
            }
        } else {
            if (self.countDown) {
                var i = (self.startVal - self.endVal) * (progress / self.duration);
                self.frameVal = self.startVal - i;
            } else {
                self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
            }
        }

        // don't go past endVal since progress can exceed duration in the last frame
        if (self.countDown) {
            self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
        } else {
            self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
        }

        // decimal
        self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;

        // format and print value
        self.printValue(self.frameVal);
               
        // whether to continue
        if (progress < self.duration) {
            self.rAF = requestAnimationFrame(self.count);
        } else {
            if (self.callback != null) self.callback();
        }
    }
    this.start = function(callback) {
        self.callback = callback;
        // make sure values are valid
        if (!isNaN(self.endVal) && !isNaN(self.startVal)) {
            self.rAF = requestAnimationFrame(self.count);
        } else {
            console.log('countUp error: startVal or endVal is not a number');
            self.printValue();
        }
        return false;
    }
    this.stop = function() {
        cancelAnimationFrame(self.rAF);
    }
    this.reset = function() {
        self.startTime = null;
        self.startVal = startVal;
        cancelAnimationFrame(self.rAF);
        self.printValue(self.startVal);
    }
    this.resume = function() {
        self.stop();
        self.startTime = null;
        self.duration = self.remaining;
        self.startVal = self.frameVal;
        requestAnimationFrame(self.count);
    }
    this.formatNumber = function(nStr) {
        nStr = nStr.toFixed(self.decimals);
        nStr += '';
        var x, x1, x2, rgx;
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? self.options.decimal + x[1] : '';
        rgx = /(\d+)(\d{3})/;
        if (self.options.useGrouping) {
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
            }
        }
        return self.padLeftStrings[nStr.length] + self.options.prefix + x1 + x2 + self.options.suffix;
    }

    // format startVal on initialization
    self.printValue(self.startVal);
}

// Example:
// var numAnim = new countUp("SomeElementYouWantToAnimate", 0, 99.99, 2, 2.5);
// numAnim.start();
// with optional callback:
// numAnim.start(someMethodToCallOnComplete);

if (!Object.keys) Object.keys = function(o) {
  if (o !== Object(o))
    throw new TypeError('Object.keys called on a non-object');
  var k=[],p;
  for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
  return k;
}
function cn(node, what) {
  if (what == "c") {
    var nodesArray = node.children;
    var textWhat = "chidren";
  }
  else if (what == "s") {
    var nodesArray = node.siblings;
    var textWhat = "siblings";
  }else {
    console.warn("cn : no parameter");
    return;
  }

  console.log("List of " + textWhat + " for " + node.name + " (" + Object.keys(nodesArray).length + ")");
  for (var nodeIndex in nodesArray) {
      var subNode = nodesArray[nodeIndex];
      console.log(subNode.name);
  }
}
var Site = function() {
	this.initEvents();
}

Site.prototype.initEvents = function() {
	$("#lang-nav").on("click", function(e) {
		$(this).find("ul").toggle("slide", {direction: "up"}) 
		ga("send", "event", "uiAction", "languageToggle");
	});


    $(window).load(function  () {

        $('#skillCount').waypoint({
            handler: function(direction) {
                if ($("#skillCount").hasClass("animationDone")) return;
                var counter = new countUp("skillCountNum", 0, skillCount, 0, 4, {
                  useEasing : true, 
                  useGrouping : true, 
                  separator : '', 
                  decimal : '',
                  prefix : '',
                  suffix : '' 
                });

                counter.start();
                $("#skillCount").addClass("animationDone");
            },
            offset: '100%'
        });
    });

	var connection = new autobahn.Connection({
        url: wsUrl,
        realm: "skp",
        // authmethods: ["wampcra"],
        // authid: "frontend",
        // onchallenge: function(session, method, extra) { return autobahn.auth_cra.sign("anon", extra.challenge); }
    });

    connection.onopen = function (session, details) {
        session.subscribe('ws.skillCount', function(data) {
        	var skillCount = data[0];
        	$("#kw-input").attr("placeholder", jt.footer.searchPlaceholder.replace("%s", skillCount));
        });
    };

    connection.open();
}
var Node = function(nodeData, params) {
  //Initializing node properties
  this.id = nodeData.uuid;
  this.params = params;
  this.parent = params.parent ? params.parent : null;
  this.name;
  this.slug = nodeData.slug;
  this.depth = nodeData.depth ? nodeData.depth : 0;
  this.onComplete = params.onComplete;
  this.rank = params.rank;
  this.count = params.count;
  this.isLast = params.isLast;
  this.takePlaceOf = params.takePlaceOf ? params.takePlaceOf : null;
  this.animate = typeof params.animate !== "undefined" ? params.animate : true;
  this.visualState = "normal";
  this.glow = 0;
  this.invisibleChildrenCount = nodeData.childrenCount;
  this.childrenMarkedForDeleteCount = 0;
  // this.targetModeOver = false;
  this.shapes;
  this.children = [];
  this.ancestors = [];
  this.siblings = [];
  this.open = false;
  this.isSelected = false;
  this.isEdited = false;
  this.isTarget = false;
  this.isInPath;
  this.knGlow;
  this.backImage;
  this.totalChildren;
  this.appearDestX;
  this.appearDestY;
  this.rootOffsetX = 0;
  this.rootOffsetY = 0;
  this.panel;
  this.cached = false;
  this.nodeReady = false;
  this.text;
  this.sizes;
  this.freeSlots = [];

  // Needed for nested functions
  var that = this;

  //For root node : add current node to rootNode object of Tree, (for tree traversal)
  if (this.parent == null) {
    tree.rootNode = this;
    this.name = "Skills";
  }

  this.setSizes();

  //Add current node to flat list of nodes in Tree object (for quick node retrieval)
  tree.nodes[this.id] = this;

  //For all nodes, except root node
  if (this.parent != null) {
      this.parent.children[this.id] = this;        //Add current node to list of parent's children
      // this.parent.totalChildren = Object.keys(this.parent.children).length;

      for (var ancestorIndex in Object.keys(this.parent.ancestors))
      {
        var ancestorId = Object.keys(this.parent.ancestors)[ancestorIndex];
        this.ancestors[ancestorId] = tree.nodes[ancestorId];
      }
      this.ancestors[this.parent.id] = this.parent;
   }

  if (this.parent == null) {
    var sunImage = new Kinetic.Image({
      x:0,
      y:0,
      width:this.sizes.labelWidth,
      height:this.sizes.labelHeight,
      image: $("img#node-sun")[0]
    });
    this.sunImage = backImage;

    var startX = stage.getWidth() / 6;
    var startY = (stage.getHeight() - globalSizes.footerHeight) / 2 - this.sizes.labelHeight / 2 ;

    var group = new Kinetic.Group({
      x: startX,
      y: startY
    });

    var circleLabel = new Kinetic.Circle({
      radius:this.sizes.sunRadius,
      x: this.sizes.labelWidth / 2,
      y: this.sizes.labelHeight / 2
    });

    group.add(sunImage, circleLabel);

    this.shapes = group;
    var labelGroup = circleLabel;
    this.labelGroup = labelGroup;

    this.backImage = new Kinetic.Image();
    this.knGlow = new Kinetic.Image();


    //Adding the group to the layer and drawing the layer
    nodesLayer.add(group);
    
  } else {
    var targetModePrefix = (tree.targetMode == true) ? "-t" : "";

    if (this.invisibleChildrenCount > 0) var imageRes = $("img#node-normal-children" + targetModePrefix)[0];
    else var imageRes = $("img#node-normal" + targetModePrefix)[0];
  
    var backImage = new Kinetic.Image({
      x:0,
      y:0,
      width:this.sizes.labelWidth + this.sizes.editButtonWidth,
      height:this.sizes.labelHeight,
      image: imageRes
    });
    this.backImage = backImage;

    //Creating the label
    var editButton = new Kinetic.Rect({
      x: 0,
      y: 0,
      width: this.sizes.editButtonWidth,
      height: this.sizes.labelHeight
    });

    //Creating the label
    var label = new Kinetic.Rect({
      x: this.sizes.editButtonWidth,
      y: 0,
      width: this.sizes.labelWidth,
      height: this.sizes.labelHeight,
      fill: 'white',
      opacity: 0
    });

    this.setName(nodeData.name);

    //Creating a group that will listen for events
    var labelGroup = new Kinetic.Group({
      height: this.sizes.labelHeight,
      width: this.sizes.labelWidth
    });
    labelGroup.add(label, this.text);

    //Creating the glow, off by default (opacity: 0)
    var glow = new Kinetic.Image({
      x: this.sizes.glowOffsetX,
      y: this.sizes.glowOffsetY,
      image: $("img#glow-nochildren")[0],
      width: this.sizes.glowWidth,
      height: this.sizes.glowHeight,
      opacity:0
    });
    this.knGlow = glow;

    //Creating and positioning the main group that contains all the shapes
    //Starting coordinates = underneath the parent ID

    var startX = this.parent.shapes.x() + this.parent.sizes.startXOffset;
    var startY = this.parent.shapes.y() + this.parent.sizes.startYOffset - this.sizes.labelHeight / 2;

    if (this.takePlaceOf != null) {
      var animate = false;
      
      this.appearDestX = this.takePlaceOf.appearDestX;
      this.appearDestY = this.takePlaceOf.appearDestY;

      this.midX = this.takePlaceOf.midX;
      this.midY = this.takePlaceOf.midY;
    }else {
      var animate = this.animate;

      //Final coordinates = each skill in its own place
      this.appearDestX = this.parent.shapes.x() + this.parent.sizes.midXOffset// + this.parent.shapes.getWidth() + this.sizes.horizontalGap;

      //Reuse a free slot if the parent has any
      //Free slots are created after a child has been removed ("missing tooth")
      if (this.parent.freeSlots.length > 0) {
        this.appearDestY = this.parent.freeSlots.shift();
      }else {
        this.appearDestY = (this.parent.shapes.y() + this.parent.sizes.labelHeight / 2) + ((this.sizes.slotHeight * this.parent.totalChildren) / - 2 + this.sizes.verticalGap / 2) + (this.sizes.slotHeight * (Object.keys(this.parent.children).length - 1));
      }

      //Intermediate coordinates = when skills split up
      this.midX = this.parent.shapes.x() + this.parent.sizes.midXOffset;
      this.midY = this.parent.shapes.y() + this.parent.sizes.midYOffset - this.sizes.labelHeight / 2;
    }

    var group = new Kinetic.Group({
      x: startX,
      y: startY,
      width: this.sizes.labelWidth + this.sizes.editButtonWidth,
      height: this.sizes.labelHeight/*,
      draggable:true*/
    });
    group.add(glow, backImage, editButton, labelGroup);
    this.shapes = group;

    //Adding the group to the layer and drawing the layer
    nodesLayer.add(group);

    group.moveToBottom();
  }

  nodesLayer.draw();

  //Chained animations of appearing nodes
  if (this.parent != null) {
    //Make this available on onFinish callback
    var newNode = this;

    var tween1 = new Kinetic.Tween({
      node: group, 
      x: newNode.midX,
      y: newNode.midY,
      duration: 0.05 + 0.10 * (this.rank / this.count),       // Animation speed for a single node is relative to node rank/position, first is fastest, etc.
      onFinish: function() {
        var tween2 = new Kinetic.Tween({
          node: group, 
          x: newNode.appearDestX,
          y: newNode.appearDestY,
          duration: 0.05 + 0.10 * (newNode.rank / newNode.count),
          onFinish: function() {
            //If we are in targetMode, it's possible that an editedNode was collapsed. Now we bring it back.
            if (tree.targetMode === true && typeof tree.editedNode !== "undefined") {

              //Here it is!
              if (tree.editedNode.id === newNode.id) {
                newNode.panel = tree.editedNode.panel;
                tree.editedNode = newNode;

                newNode.isEdited = true;
                newNode.setVisualState("normal-edit");
              }
            }

            newNode.nodeReady = true;
            //Last child has finished appearing
            if (newNode.isLast == true) {
              fpsCounter.end();

              newNode.parent.setChildrenSiblings();
              newNode.parent.invisibleChildrenCount = Object.keys(newNode.parent.children).length;
              tree.busy = false;              //Releasing the tree-wide lock
              if (newNode.onComplete != null) {
                newNode.onComplete();
              }
              tree.readyForNextLevel.fire();
            }
          }
        }); 
        if (animate == true) tween2.play();
        else {
          tween2.finish();
        }
      }
    });
    if (animate == true) tween1.play();
    else {
      tween1.finish();
    }
  }

  //Creating the edge / link with the parent node (except for the root node which has no parent)
  if (this.parent != null) {
    this.edge = new Edge(this.parent, this);
    this.edge.shape.moveToBottom();
  }

  if (animate === false) {
    stage.draw();
  }

  //Node events
  labelGroup.on("mouseover", function() { document.body.style.cursor = 'pointer'; });
  labelGroup.on("mouseout", function() { document.body.style.cursor = 'default'; });
  //Click on skill name
  labelGroup.on("click tap", function() {
    //When tree is in target mode (move/copy), click on the sun doesn't contract/expand but sets it as a target
    if (tree.targetMode == true && that == tree.rootNode) {
      that.setTarget();
      return;
    }

    if (tour.isActive == true || doTour == true) tour.actionOnTree("label-click", that);

    //Checking and setting a tree-wide lock. 
    //Will be released after last retrieved node has finished appearing (that.expand) or after last node has finished hiding (that.contract)
    if (tree.busy) return;
    tree.busy = true;

    // Do we first have to contract the selectedNode before expading a new one ?
    //TODO : rewrite conditions
    var openSibling = that.getSiblingMatch("isInPath", true);
    if (typeof openSibling != "undefined") {
        openSibling.contract({releaseTreeLock: false});
        tree.selectedNode.deSelect();
    }

    //Node is closed, expanding it
    if (!that.open) {
      ga("send", "event", "nodeOpen", that.name);
      that.select();
      that.expand();
    }else {
      //Node is open, contracting it
      ga("send", "event", "nodeClose", that.name);
      that.deSelect();
      that.contract();
    }
  });
  this.labelGroup = labelGroup;
  
  if (this != tree.rootNode) {
    editButton.on("mouseover", function(e) { document.body.style.cursor = 'pointer';}); //that.editMouseOver(that, e.type)
    editButton.on("mouseout", function(e) { document.body.style.cursor = 'default'; }); //that.editMouseOver(that, e.type)
    //Click on "+" symbol for node editing
    editButton.on("click tap", function(e) {
      if (tree.targetMode == true) {
        that.setTarget();
        return;
      }

      if (tour.isActive == true || doTour == true) tour.actionOnTree("plus-click", that);

      //Checking and setting a tree-wide lock. 
      //Will be released after panel slide in / slide out
      if (tree.busy) return;
      tree.busy = true;

      //This takes care of switching from an edited node to another one
      //We need to chain the finishEdit of the previous node with the startEdit of the next one
      //The tree lock is released at the end of the startEdit
      if (tree.editedNode && tree.editedNode.id != that.id) {
        tree.editedNode.finishEdit(function() { 
          that.startEdit();
        });
        return;
      }

      //This takes care of the normal situation of entering / exiting edit mode for a node when no other node was being edited
      if (that.isEdited == false) {
        ga("send", "event", "nodeEdit", that.name);
        that.startEdit();
      }else {
        that.finishEdit();
      }
    });
    this.editButton = editButton;
  }

  //Fire the rootNodeReady callback when the rootNode is ready
  if (this.parent == null) {
    if (tree.autoLoad == false) {

      if (doTour === false) {
        var duration = 500;
        var animateChildren = true;
        $("#kinetic, #backdrop").css("visibility", "visible").fadeIn({
          duration: duration
        });
      }else {
        duration = 0;
        var animateChildren = false;
      }

      setTimeout(function() {
          tree.rootNode.select().expand({
            onComplete: function() {
              if (typeof doTour != "undefined" && doTour == true) {
                $("#kinetic, #backdrop").css("visibility", "visible").show();
                tour.start();
              }

              tree.rootNodeReady.fire();
            },
            animate: animateChildren
          });
        }, duration);
    } else {
      tree.rootNodeReady.fire();
    }
  } 
}
//Query the API for the children and show them
Node.prototype.expand = function(params) {
  var that = this;

  if (params != null) {
    var onComplete = params.onComplete;
    var animate = typeof params.animate !== "undefined" ? params.animate : true;
  }
  var url = baseUrl + "api/getNodeChildren/" + this.id + "/";

  loader.show();

  $.ajax({
    url: url,
  }).done(function(json) {
    that.totalChildren = json.data.length;

    if (that.totalChildren > 0) {
      that.open = true;
      that.setVisualState("glow-children");

      //Check camera position and reposition if needed
      camera.checkCameraPosition(that, json.data.length);

      //Iterate through children to add them
      //isLast parameter is needed to release the tree lock after adding the last node
      var i = 0;
      var isLast = false;

      fpsCounter.start();

      json.data.forEach(function(child) {
        if (++i == json.data.length) isLast = true;
        new Node(child, {
          parent: that,
          rank: i,
          count: json.data.length,
          isLast: isLast,
          onComplete: onComplete ? onComplete : null,
          animate: animate
        })
      });

    }else {
      //No children, releasing tree lock now
      tree.busy = false;
      that.setVisualState("glow-nochildren");
      camera.checkCameraPosition(that);
    }
  }).always(function(json) {
    loader.hide();
  }).fail(function(json) {
    tree.busy = false;
  });
}

//Selection of the node
Node.prototype.select = function(params) {
  if (this.isSelected) return this;

  if (params != null && params.finishEdit != false) var finishEdit = true;

  //deSelect previously selectedNode (only if it's not the current node itSelf)
  if (tree.selectedNode && tree.selectedNode.id != this.id) tree.selectedNode.deSelect(); 

  //Exiting edit mode for previous editedNode this is not the current node itself
  if (tree.editedNode && this.id != tree.editedNode.id && finishEdit == true) {
    tree.editedNode.finishEdit();
  }

  
  this.isSelected = true;
  tree.selectedNode = this;
  this.isInPath = true;

  return this;
}

Node.prototype.setChildrenSiblings = function() {
  for (var childIndex in this.children) {
    var child = this.children[childIndex];

    for (var siblingIndex in child.parent.children) {
        var sibling = child.parent.children[siblingIndex];
        if (sibling != child) child.siblings[sibling.id] = sibling;
    }
  }
}

//Get all visible children, recursively (stored in global array)
Node.prototype.getChildrenRecursive = function() {
  for (var child in this.children) {
    recursiveChildren.push(this.children[child]);
    this.children[child].getChildrenRecursive();
  }
}

//Hiding and destroying the children
Node.prototype.contract = function(params) {
  //For callback functions
  var that = this;

  //Setting parameters and default values
  if (typeof params != "undefined") {
    if (params.releaseTreeLock == null) var releaseTreeLock = true;

    if (params.onComplete != null) var onComplete = params.onComplete;
    else var onComplete = null;

    if (params.noAnim != null) var noAnim = params.noAnim;
    else var noAnim = false;
  }else {
    var onComplete = null;
    var releaseTreeLock = true;
    var noAnim = false;
  }

  //Node moves to top in order to cover edges contracting
  this.shapes.moveToTop();

  //Make deep children disappear without animation
  var openChild = this.getChildrenMatch("open", true);
  if (this.open == true && typeof openChild != "undefined") {
    for (var childIndex in openChild.children) {
        var child = openChild.children[childIndex];
        child.delete();
    }
    stage.draw();
  }

  //Take care of direct children
  var countPositioned = 0;
  var totalChildren = Object.keys(this.children).length;

  //If no children, not much to do
  if (totalChildren == 0) {
    if (releaseTreeLock == true) tree.busy = false;
    this.open = false;
    this.setVisualState("normal");
    if (onComplete != null) onComplete();

  //If one or more children, we animate all of them to the center, delete all but one and animate the last one
  }else {
    if (this.parent != null) this.parent.select();

    fpsCounter.start();

    for (var childIndex in this.children) {
      var child = this.children[childIndex];

      if (child.cached) child.clearCache();


      //Animation to the center of the children nodes
      var tween1 = new Kinetic.Tween({
        node: child.shapes,
        x: this.shapes.x() + this.sizes.midXOffset,
        y: this.shapes.y() + this.sizes.midYOffset - child.sizes.labelHeight / 2,
        duration: 0.15,
        onFinish: function() {
          if (countPositioned++ < totalChildren - 1) {
            //For all children except the last one, mark for later deletion
            this.skpNode.positionedForDeletion = true;
          }else {
            //Last child, delete all children marked for deletion
            that.deleteChildrenMatch("positionedForDeletion", true);

            //Make it available to onFinish callback
            var lastChild = this.skpNode;

            //Animation of the last child
            var tween2 = new Kinetic.Tween({
              node: lastChild.shapes,
              x: that.shapes.x() + 70,
              y: that.shapes.y() + that.sizes.midYOffset - child.sizes.labelHeight / 2 ,
              //scaleX: 0,
              duration: 0.15,
               onFinish: function() {
                fpsCounter.end();
                //Last child deletion and tree cleanup
                lastChild.delete();
                that.open = false;
                that.freeSlots = [];
                that.setVisualState("auto");
                if (releaseTreeLock == true) tree.busy = false;
                if (onComplete != null) onComplete();
              }
            });
            //With or without animation
            if (noAnim == false) tween2.play();
            else tween2.finish();
          }
        }
      });
      //Make objects available to onFinish callback
      tween1.skpNode = child;
      
      //With or without animation
      if (noAnim == false && Object.keys(this.children).length > 1) tween1.play();
      else tween1.finish();
    }
  }
  return this;
}

Node.prototype.deSelect = function() {
  if (!this.isSelected) return this;

  this.isSelected = false;
  delete tree.selectedNode;

  return this;
}

//Loads the panel
Node.prototype.startEdit = function() {
  if (this.isEdited) return;

  this.panel = new Panel(this, {
    onComplete: function() {
      tree.busy = false;
      camera.checkIfPanelBlocksEditedNode();
    }
  });

  this.setVisualState("normal-edit");

  this.isEdited = true;
  tree.editedNode = this; 
}

//Closes the panel
Node.prototype.finishEdit = function(onComplete, force) {
  if (tree.targetMode == true) return;
  if (!this.isEdited) return;
  if (this.panel.locked === true) return;

  if (this.panel) {
    this.panel.close({
      onComplete: function () {
        delete this.panel;
        actionsCount = 0;
        if (onComplete) {
          onComplete.call();      //Animation is being chained with new panel slide in, so tree is still busy
        }else {
          tree.busy = false;
        }
      }
    });
  }else tree.busy = false;

  this.isEdited = false;
  delete tree.editedNode;

  if (this.open == true) {
    this.setVisualState("glow-children");
  } else this.setVisualState("normal");
}

Node.prototype.getSiblings = function() {
  var siblings = [];
  for (var siblingIndex in this.siblings) {
      var sibling = this.siblings[siblingIndex];
      siblings.push(sibling);
  }
  return siblings;
}

Node.prototype.getSiblingMatch = function(propertyName, propertyValue) {
  for (var siblingIndex in this.siblings) {
      var sibling = this.siblings[siblingIndex];
      if (sibling[propertyName] == propertyValue) return sibling;
  }
}

Node.prototype.getChildren = function() {
  var children = [];
  for (var childIndex in this.children) {
      var child = this.children[childIndex];
      children.push(child);
  }
  return children;
}

Node.prototype.getChildrenMatch = function(propertyName, propertyValue) {
  for (var childIndex in this.children) {
      var child = this.children[childIndex];
      if (child[propertyName] == propertyValue) return child;
  }
}

Node.prototype.deleteChildrenMatch = function(propertyName, propertyValue) {
  for (var childIndex in this.children) {
      var child = this.children[childIndex];
      if (child[propertyName] == propertyValue) child.delete();
  }
}

//Set visual state of the node
Node.prototype.setVisualState = function (state, draw, ignoreGlow) {
  if (this == tree.rootNode) return;
  if (typeof draw == "undefined") draw = true;
  if (typeof ignoreGlow == "undefined") ignoreGlow = false;


  var targetModeSuffix = (tree.targetMode == true) ? "-t" : "";
  // var targetModeOver = (this.targetModeOver == true) ? "-on" : "";

  var imageSuffix = targetModeSuffix;// + targetModeOver;

  switch (state) {
    case "auto":
      if (this.isSelected && this.isEdited) {
        this.setVisualState("glow-edit");
      } else if (!this.isSelected && this.isEdited) {
        this.setVisualState("normal-edit");
        if (!ignoreGlow) this.setGlow(0);
      } else if (!this.isSelected && !this.isEdited && !this.open) {
        this.setVisualState("normal");
        if (!ignoreGlow) this.setGlow(0);
      } else if (this.isSelected && !this.isEdited && !this.open) {
        this.setVisualState("glow-nochildren");
        if (!ignoreGlow) this.setGlow(1);
      } else if (this.isSelected && !this.isEdited && this.open) {
        this.setVisualState("glow-children");
        if (!ignoreGlow) this.setGlow(1);
      }else {
        console.warn("Impossible to automatically determine state for this node : " + this.name);
        console.warn(this);
      }
      break;
    case "normal":

      this.knGlow.setImage($("img#glow-nonotch")[0]);

      if ((this.invisibleChildrenCount - this.childrenMarkedForDeleteCount) > 0) var imageRes = $("img#node-normal-children" + imageSuffix)[0];
      else var imageRes = $("img#node-normal" + imageSuffix)[0];

      this.backImage.setImage(imageRes);
      if (this.edge != null) this.edge.selected = false;
      this.text.setFill("#333333");
      if (!ignoreGlow) this.setGlow(0);
      break;
    case "glow-children":
      if (!this.isEdited) {
        this.backImage.setImage($("img#node-glow-children" + imageSuffix)[0]);
        this.knGlow.setImage($("img#glow-children")[0]);
        this.text.setFill("#333333");
      }
      if (this.edge != null) this.edge.selected = true;
      if (!ignoreGlow) this.setGlow(1);
      break;
    case "glow-nochildren":
      if (!this.isEdited) {
        this.backImage.setImage($("img#node-glow-nochildren" + imageSuffix)[0]);
        this.knGlow.setImage($("img#glow-nochildren")[0]);
        this.text.setFill("#333333");
      }
      if (this.edge != null) this.edge.selected = true;
      if (!ignoreGlow) this.setGlow(1);
      break;
    case "normal-edit":
      if (this.isEdited === true && tree.targetMode === true) imageSuffix = "";

      if ((this.invisibleChildrenCount - this.childrenMarkedForDeleteCount) > 0) var imageRes = $("img#node-edit-children" + imageSuffix)[0];
      else var imageRes = $("img#node-edit" + imageSuffix)[0];

      this.backImage.setImage(imageRes);
      this.text.setFill("#fff");
      break;
    case "glow-edit":
      if (this.totalChildren > 0) this.backImage.setImage($("img#node-glow-children" + imageSuffix)[0]);
      else this.backImage.setImage($("img#node-glow-nochildren" + imageSuffix)[0]);
      this.text.setFill("#333333");
      break;
  }

  if (draw) nodesLayer.draw();

  this.visualState = state;
}

//Make it glow...
Node.prototype.setGlow = function (state) {
  if (this.glow == state) return;

  var opacity = (state == 1) ? 1 : 0;

  if (state == 0) this.isInPath = false;

  var tween = new Kinetic.Tween({
    node: this.knGlow, 
    duration: 0.5,
    opacity: opacity
  });

  tween.play();

  this.glow = state;
}

//Returns the bouding box of the node (glow excluded)
Node.prototype.getBoundingBox = function(childrenCount) {
  if (typeof childrenCount == "undefined") {
    return {
      x1: this.shapes.x(),
      y1: this.shapes.y(),
      x2: this.shapes.x() + this.sizes.totalWidth,
      y2: this.shapes.y() + this.sizes.totalHeight
    }
  }else {
    //Hack : values shouldn't be hard codedp
    //If node really has no children, prepare a dummy one to calculate the boudingBox
    if (Object.keys(this.children).length == 0) {
      var modelChild = {
        sizes: {
          totalHeight: 56,
          totalWidth: 237,
          verticalGap: 20
        }
      };
    }else {
      var modelChild = this.children[Object.keys(this.children)[0]];
    }

    return {
      x1: this.shapes.x(),
      y1: this.shapes.y() + (this.sizes.labelHeight / 2) - (childrenCount * (modelChild.sizes.totalHeight + modelChild.sizes.verticalGap) - modelChild.sizes.verticalGap) / 2,
      x2: this.shapes.x() + this.sizes.totalWidth + this.sizes.horizontalGap + modelChild.sizes.totalWidth,
      y2: this.shapes.y() + (this.sizes.labelHeight / 2) + (childrenCount * (modelChild.sizes.totalHeight + modelChild.sizes.verticalGap) - modelChild.sizes.verticalGap) / 2
    }
  }
}

//Caches the node
Node.prototype.cache = function() {
  if (this.cached) console.warn("Node is already cached, we shouldn't be here");
  //Caching in only really carried out on nodes which are ready (static, finished appearing)
  if (this.nodeReady) {
    this.shapes.cache({
      x: -25,
      y: -25,
      width: this.shapes.width() + 50,
      height: this.shapes.height() + 50/*,
      drawBorder:true*/
    });

    //Glow is not negatively offseted anymore so we have to reposition the node
    this.shapes.x(this.shapes.x() - 25);
    this.shapes.y(this.shapes.y() - 25);

    // this.shapes.offsetX(-25).offsetY(-25);

    //Stop listening for events on cached nodes (they are not visible anyway)
    this.labelGroup.listening(false);
    this.editButton.listening(false);
    if (typeof this.edge != "undefined") this.edge.shape.listening(false);

    // Tough or impossible to cache custom drawn Shapes (drawFunc)
    // var nodeBoundingBox = this.edge.getBoundingBox();
    // this.edge.shape.cache({
    //   x: nodeBoundingBox.x1,
    //   y: nodeBoundingBox.x1,
    //   width: nodeBoundingBox.x2 - nodeBoundingBox.x1,
    //   height: nodeBoundingBox.y2 - nodeBoundingBox.y1 
    // });
    this.cached = true;
  }
}

//Clears the cache on the node (when it becomes visible again)
Node.prototype.clearCache = function () {
  this.shapes.clearCache();
  this.shapes.x(this.shapes.x() + 25);
  this.shapes.y(this.shapes.y() + 25);

  this.cached = false;

  this.labelGroup.listening(true);
  this.editButton.listening(true);
}

Node.prototype.delete = function() {
  for (var childIndex in this.children) {
      var child = this.children[childIndex];
      child.delete();
  }

  if (this.isEdited) this.finishEdit();
  if (this.isSelected) this.deSelect();
  if (this.isTarget) this.unsetTarget();

  this.edge.shape.destroy();
  this.shapes.destroy();

  this.parent.totalChildren--;
  delete this.parent.children[this.id];
  delete tree.nodes[this.id];
  delete this;
}

Node.prototype.inSamePathAs = function(node) {
  if (typeof node == "undefined" || node === null) console.warn("Node.inSamePathAs : requires a Node object");
  if (typeof this.depth != "number" || typeof node.depth != "number") console.warn("Node.inSamePathAs : depth is not set");

  if (this == node) return true;
  if (!this.isSelected || !node.isSelected) return false;
  if (this.isSiblingWith(node)) return false;

  //Which one is deeper ?
  if (this.depth > node.depth) {
      var deeperNode = this;
      var shallowerNode = node;
  }else if (this.depth < node.depth) {
      var deeperNode = node;
      var shallowerNode = this;
  }else {
    console.warn("Node.inSamePathAs : something is wrong with nodes depth, we should never enter this block.");
  }
  
  if (typeof deeperNode.ancestors[shallowerNode.id] != "undefined") return true;
  else return false;
}

Node.prototype.isSiblingWith = function(node) {
  if (typeof node == "undefined") console.warn("Node.isSiblingWith : requires a Node object");
  if (typeof this.siblings != "object") console.warn("Node.isSiblingWith : siblings don't seem to be set");
  if (typeof this.siblings[this.id] != "undefined") console.warn("Node.isSiblingWith : node is listed as sibling of itself");

  if (typeof this.siblings[node.id] != "undefined") return true;
  else return false;
}

Node.prototype.calculateAncestors = function() {
  var ancestors = [];
  var depth = this.depth;
  var parent = this.parent;
  while (depth > 0) {
    ancestors[parent.id] = parent;
    depth = parent.depth;
    var parent = parent.parent;
  }
  return ancestors;
}

//Called after creating a new skill (as a child) on the panel
//nodeData : data about the new node as returned by the server after saving it in the database
Node.prototype.createNewChild = function (nodeData) {
  var openSibling = this.getSiblingMatch("isInPath", true);
  if (typeof openSibling != "undefined") {
      openSibling.contract();
      tree.selectedNode.deSelect();
  }

  if (this.open) {
      var newSkill = new Node(nodeData, 
          {
              parent: this,
              rank: 1,
              count: 1,
              isLast: true,
              onComplete: selectExpandNewNode
          });
  } else {
      this.select().expand({ onComplete: selectExpandNewNode });
  }

  //Local function to make code more compact
  var selectExpandNewNode = function () {
      var selectedSibling = tree.nodes[nodeData.uuid].getSiblingMatch("isSelected", true);
      if (typeof selectedSibling != "undefined") selectedSibling.contract().deSelect();

      tree.nodes[nodeData.uuid].select();
      tree.nodes[nodeData.uuid].expand();
  }
}

//Called after creating a new skill (as a parent) on the panel
//nodeData : data about the new node as returned by the server after saving it in the database
//this = editedNode
Node.prototype.createNewParent = function (nodeData) {
  //Contract subchildren if present : we only want one extra level after editedNode
  var openChild = this.getChildrenMatch("open", true);
  if (typeof openChild != "undefined") {
      openChild.contract({noAnim: true});
  }

  //Used to reselect editedNode after newSkill creation
  if (this.isSelected) var selectEditedNode = true;
  else selectEditedNode = false;

  var openSibling = this.getSiblingMatch("isInPath", true);
  if (typeof openSibling != "undefined") {
      openSibling.contract({noAnim:true}).deSelect();
  }

  moveGroup = new Kinetic.Group();
  if (Object.keys(this.children).length > 0) {
      

      for (var childIndex in this.children) {
          var child = this.children[childIndex];
          moveGroup.add(child.shapes, child.edge.shape);
      }
  }

  moveGroup.add(this.shapes);

  nodesLayer.add(moveGroup);

  var tweenMoveGroup = new Kinetic.Tween({
      node: moveGroup,
      x: moveGroup.x() + 240 + 80,
      y: moveGroup.y(),
      duration: 0.30,
      onFinish: function() {
          while(moveGroup.children.length > 0) {
              var shape = moveGroup.children[0];
              if (shape.nodeType != "Shape") shape.move({x: 240 + 80, y: 0});
              shape.moveTo(nodesLayer);
          }
          moveGroup.destroy();
      }
  });

  //Delete entry of editedNode in editedNode's parent children list
  delete this.parent.children[this.id];

  //Here comes the new node !
  var newSkill = new Node(nodeData, 
  {
      parent: this.parent,         //Set its parent to be editedNode's parent
      takePlaceOf: this,           //Used for positioning
      rank: 1,
      count: 1,
      isLast: true
  });

  //*****************************
  //Operations on editedNode/this
  //*****************************

  //Change starting point of editedNode's edge : now it starts from the newSkill
  this.edge.nodeFrom = newSkill;

  //editedNode now has no more siblings
  this.siblings = [];

  //Set X position where the newSkill must appear (it will appear without animation so midX is not really useful)
  this.appearDestX += 240 + 80;
  this.midX += 240 + 80;

  //New parent of editedNode is now newSkill
  this.parent = newSkill;

  //Traverse the tree to recalculate the ancestors list
  this.ancestors = this.calculateAncestors();
  
  //Increase depth of editedNode and its children
  this.depth++;
  for (var childIndex in this.children) {
      this.children[childIndex].depth++;
  }

  //**********************
  //Operations on newSkill
  //**********************

  //Make new Skill the new selectedNode and make it glow
  //TODO : Condition doesn't seem appropriate
  if (tree.selectedNode && tree.selectedNode.id != this.id) newSkill.select({finishEdit: false});
  newSkill.setVisualState("glow-children");

  //Add editedNode (this) to newSkill's children list
  newSkill.children[this.id] = this;

  //newSkill always only has one child
  newSkill.totalChildren = 1;

  //newSkill is always in an open state
  newSkill.open = true;

  //close eventually open/selected sibling
  var openSibling = newSkill.getSiblingMatch("open", true);
  if (openSibling) {
      openSibling.deSelect();
      openSibling.contract();
  }

  //Reselect previously selected editedNode
  if (selectEditedNode) this.select();
  else newSkill.select();

  //animate new parent
  tweenMoveGroup.play();     
}

Node.prototype.setName = function (newName, twoLines, textObject) {
  this.name = newName;
  
  if (typeof twoLines == "undefined") {
    //Writing the text of the skill
    //First attempt
    var text = new Kinetic.Text({
      text: this.name,
      fontSize: 14,
      fontFamily: 'Avenir-Book',
      fill: '#333333',
      align: 'center',
      x: 67
    });

    //Does it fit on a single line?
    var textWidth = text.getWidth();
    if (textWidth <= 160) {
      //It fits, position it accordingly
      text.width(160).setY(22);

      //If node is being created
      if (typeof this.text == "undefined") this.text = text;
      
      //If node is being renamed
      else {
        this.text.setY(22);
        this.text.text(newName);
        stage.draw();
      }
    }else {
      //It doesn't fit on a single line, make it a two-lines text
      this.setName(newName, true, text);
    }
  }else if (twoLines == true) {
    if (typeof this.text == "undefined") this.text = textObject;

    this.text
      .y(12)
      .width(160).height(56 - 12)
      .lineHeight(1.3);

    this.text.text(newName);
    stage.draw();
  }
}

Node.prototype.deleteFromDB = function() {
  if (this.isSelected) {
    this.deSelect();
    this.parent.select();
  }

  if (this.parent.open === true) {
    //Add the current node Y position to parent's free slots array
    //This will be used if a new node is added before the parent is contracted, 
    //so it has a "missing tooth" that will be fille with the new node
    this.parent.freeSlots.push(this.shapes.y());
    this.parent.freeSlots.sort();
  }

  if (this.isEdited) this.finishEdit();

  this.parent.invisibleChildrenCount--;

  //If deleted node is last of parent's children, remove notch from parent (glow-nochildren)
  if (Object.keys(this.parent.children).length - 1 === 0) {
  	this.parent.setVisualState("glow-nochildren");
  }

  this.delete();
  stage.draw();
}

Node.prototype.setTarget = function() {
  if (this.isTarget) return;
  if (this.isEdited) return;
  if (this == tree.editedNode.parent) return;
  if (tree.targetNode) tree.targetNode.unsetTarget();

  this.isTarget = true;

  if ((this.invisibleChildrenCount - this.childrenMarkedForDeleteCount) > 0) this.setVisualState("glow-children");
  else this.setVisualState("glow-nochildren");

  tree.targetNode = this;

  tree.editedNode.panel.$activeSubpanel.find("#move-step3").css("display", "block");
  tree.editedNode.panel.$activeSubpanel.find("#destinationUuid").val(this.id);
  tree.editedNode.panel.$activeSubpanel.find("#destination-skill-name").empty().append(this.name);
}

Node.prototype.unsetTarget = function() {
  if (!this.isTarget) return;
  if (this.isEdited) return;

  this.isTarget = false;
  // node.targetModeOver = false;
  // node.setVisualState(node.visualState, true, true);

  // if (!this.isInPath) this.setGlow(0);
  if (!this.isInPath) this.setVisualState("normal");

  delete tree.targetNode;

  tree.editedNode.panel.$activeSubpanel.find("#move-step3").css("display", "none");
  tree.editedNode.panel.$activeSubpanel.find("#destinationUuid").empty();
  tree.editedNode.panel.$activeSubpanel.find("#destination-skill-name").empty();
}

Node.prototype.isNodeOnScreen = function() {
  var securityZone = camera.getSecurityZone(0);
  return camera.isBoxOnScreen(this.getBoundingBox(), securityZone, true);
}

// Node.prototype.editMouseOver = function(node, type) {
//   // debugger;
//   // console.log("ici");
//   if (type == "mouseover") {
//     document.body.style.cursor = 'pointer';
//     if (tree.targetMode == true) {
//       node.targetModeOver = true;
//       node.setVisualState(node.visualState, true, true);
//     }
//   }else {
//     document.body.style.cursor = 'default'; 
//     if (tree.targetMode == true && node.isTarget == false) {
//       node.targetModeOver = false;
//       node.setVisualState(node.visualState, true, true);
//     }
//   }
// }

Node.prototype.setSizes = function() {
  var sizes;

  if (this == tree.rootNode) {
    sizes = {
      sunRadius:82,
      labelWidth: 288,
      labelHeight: 288,
      editButtonWidth: 0,
      editButtonHeight: 0,
      glowOffsetX: 0,
      glowOffsetY: 0,
      glowWidth: 288,
      glowHeight: 108,
      verticalGap: 20,
      horizontalGap: 80,
      appearDestYOffset: -28,
      appearStartXOffset: -60,
      appearStartYOffset: -20
    }

    //Used by children when positioning relatively to their parent (= this node)
    sizes.startXOffset = sizes.labelWidth / 2 - sizes.sunRadius * 0.75;
    sizes.startYOffset = sizes.labelHeight / 2;

    sizes.midXOffset = sizes.labelWidth / 2 + sizes.sunRadius + sizes.horizontalGap;
    sizes.midYOffset = sizes.labelHeight / 2;

    sizes.edgeStartXOffset = sizes.labelWidth / 2 + sizes.sunRadius;
    sizes.edgeStartYOffset = sizes.labelHeight / 2;

    sizes.totalWidth = sizes.labelWidth;
    sizes.totalHeight = sizes.labelHeight;
  }else {
    sizes = {
      labelWidth: 179,
      labelHeight: 56,
      editButtonWidth: 58,
      editButtonHeight: 56,
      glowOffsetX: -25,
      glowOffsetY: -25,
      glowWidth: 288,
      glowHeight: 108,
      verticalGap: 20,
      horizontalGap: 80,
      appearDestYOffset: 0,
      appearStartXOffset: 0,
      appearStartYOffset: 0
    }

    sizes.totalWidth = sizes.labelWidth + sizes.editButtonWidth;
    sizes.totalHeight = sizes.labelHeight;

    sizes.startXOffset = sizes.labelWidth * 0.25;
    sizes.startYOffset = sizes.labelHeight / 2;

    sizes.midXOffset = sizes.totalWidth + sizes.horizontalGap;
    sizes.midYOffset = sizes.labelHeight / 2;

    sizes.edgeStartXOffset = sizes.totalWidth + 4;
    sizes.edgeStartYOffset = sizes.labelHeight / 2;
    // sizes.horizontalGap = sizes.totalWidth + 80;

    sizes.slotHeight = sizes.labelHeight + sizes.verticalGap;
  }

  this.sizes = sizes;
}

Node.prototype.getPositionRelativeToScreen = function() {
  var screenBoundingBox = camera.getSecurityZone(0);
  return {
    x: (this.shapes.x() - screenBoundingBox.minX) * camera.scale,
    y: (this.shapes.y() - screenBoundingBox.minY) * camera.scale
  }
}

Node.prototype.isBlockedByPanel = function() {
  if (camera.panelOffset > 0) {
    var positionRelativeToScreen = this.getPositionRelativeToScreen();

    var endOfNode = positionRelativeToScreen.x + (this.sizes.totalWidth * camera.scale);
    var startOfPanel = stage.width() - camera.panelOffset;
    if (endOfNode > startOfPanel) return (endOfNode - startOfPanel);
    else return false;
  }else return false;
}
var Edge = function(nodeFrom, nodeTo) {
  this.nodeFrom = nodeFrom;
  this.nodeTo = nodeTo;
  this.selected = false;
  this.x;
  this.y;
  this.width;
  this.height;
  var that = this;

  this.getStartEndPoints = function () {
    //Offsets handle correct positioning of the edges with the cached from/to nodes
    //Cached nodes include the glow image which offsets them. Probably could have been handled differently...
    var nodeToCachedOffset = 0;
    var nodeFromCachedOffset = 0;
    if (that.nodeTo.cached == true) nodeToCachedOffset = 25;
    if (that.nodeFrom.cached == true) nodeFromCachedOffset = 25;

    edgeStartX = that.nodeFrom.shapes.x() + that.nodeFrom.sizes.edgeStartXOffset;
    edgeStartY = that.nodeFrom.shapes.y() + that.nodeFrom.sizes.edgeStartYOffset;
    edgeEndX = that.nodeTo.shapes.x()
    edgeEndY = that.nodeTo.shapes.y() + that.nodeTo.shapes.getHeight() / 2;

    return {
      nodeFrom: {
        x: edgeStartX + nodeFromCachedOffset,
        y: edgeStartY + nodeFromCachedOffset
      },
      nodeTo: {
          x: edgeEndX + nodeToCachedOffset,
          y: edgeEndY + nodeToCachedOffset
      }
    }
  }

  this.cachePos = this.getStartEndPoints();

  var line = new Kinetic.Shape({
    drawFunc: function(context) {
      //Coordinates for start and end points must be recalculated on every draw
      var pos = that.getStartEndPoints();
      that.cachePos = pos;

      cp1X = pos.nodeFrom.x + 50;
      cp1Y = pos.nodeFrom.y;
      cp2X = pos.nodeTo.x - 50;
      cp2Y = pos.nodeTo.y;

      if (that.selected) {
        var originalStroke = this.attrs.stroke;
        var originalStrokeWidth = this.attrs.strokeWidth;

        this.attrs.stroke = "rgba(251,225,169,0.4)";
        this.attrs.strokeWidth = "6";
        context.beginPath();
        context.moveTo(pos.nodeFrom.x, pos.nodeFrom.y);
        context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, pos.nodeTo.x, pos.nodeTo.y);
        context.strokeShape(this);
        this.attrs.stroke = originalStroke;
        this.attrs.strokeWidth = originalStrokeWidth;
      }
      
      context.beginPath();
      context.moveTo(pos.nodeFrom.x, pos.nodeFrom.y);
      context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, pos.nodeTo.x, pos.nodeTo.y);
      context.strokeShape(this);

      context.moveTo(pos.nodeFrom.x, pos.nodeFrom.y);
      context.beginPath();
      context.arc(pos.nodeFrom.x - 4,pos.nodeFrom.y,4,0,2*Math.PI);
      context.fillShape(this);

      context.moveTo(pos.nodeTo.x, pos.nodeTo.y);
      context.beginPath();
      context.arc(pos.nodeTo.x,pos.nodeTo.y,4,0,2*Math.PI);
      context.fillShape(this);
    },
    stroke: "#eed4d8",
    fill: "#eed4d8",
    lineCap: "round",
    strokeWidth: 1.7,
    listening: false
  })

  this.shape = line;

  nodesLayer.add(line);

  this.getBoundingBox = function() {
    var startEndPoints = that.getStartEndPoints();
    var nodeFrom = startEndPoints.nodeFrom;
    var nodeTo = startEndPoints.nodeTo;

    if (nodeFrom.y < nodeTo.y) {
      return {
        x1: nodeFrom.x - 5,
        y1: nodeFrom.y - 5,
        x2: nodeTo.x + 5,
        y2: nodeTo.y + 5
      }
    }else {
      return {
        x1: nodeFrom.x - 5,
        y1: nodeTo.y - 5,
        x2: nodeTo.x + 5,
        y2: nodeFrom.y + 5
      }
    }
  }
}
var Tree = function() {
    this.rootNode;
    this.nodes = [];
    this.busy = false;
    this.selectedNode;
    this.editedNode;
    this.targetNode;
    this.rootNodeReady = $.Callbacks("unique");
    this.readyForNextLevel = $.Callbacks("unique");
    this.autoLoad = false;
    this.autoLoadCurrentDepth;
    this.targetMode = false;

    //Action is set by PHP based on URL, sort of controller/route for JS
    //this.autoload : the tree will expand itself up to the requested node
    if (typeof action != "undefined" && action == "goto") this.autoLoad = true;

    //Tree callback, fired when the rootNode is fully initialized
    this.rootNodeReady.add(function () {
        //Starting autoload
        if (tree.autoLoad == true) {
            ga("send", "event", "gotoSkill");
            $("#kinetic, #backdrop").css("visibility", "visible").fadeIn({duration: 500});
            tree.autoLoadCurrentDepth = 0;
            tree.readyForNextLevel.fire();
        }
    });

    //Tree callback, fired when the last node has finished appearing
    //Currently, this callback function is only used for autoloading, so it stops if autoload is false
    this.readyForNextLevel.add(function () {
        if (!tree.autoLoad) return;
        
        if (tree.autoLoadCurrentDepth != jsonAutoLoad.data.length) {
            var children = jsonAutoLoad.data[tree.autoLoadCurrentDepth].children;
            if (tree.autoLoadCurrentDepth == 0) tree.rootNode.select();
            else {
                tree.nodes[jsonAutoLoad.data[tree.autoLoadCurrentDepth].uuid].select();
            }

            camera.checkCameraPosition(tree.selectedNode);

            //Same logic as in Node:labelGroup.on("click")
            tree.selectedNode.totalChildren = children.length;            
            tree.selectedNode.open = true;
            tree.selectedNode.setVisualState("glow-children");

            var i = 0;
            var isLast = false;

            children.forEach(function(child) {
              if (++i == children.length) isLast = true;
              new Node(child, {
                      parent: tree.selectedNode,
                      rank: i,
                      count: children.length,
                      isLast: isLast
                  });
            });

            //Increment autoLoadCurrentDepth to be ready to handle next depth in json when the last node has finished appearing
            tree.autoLoadCurrentDepth++;
        }
        else {  //We have reached the end of the json, no more depths, select the final Skill and make it glow!
            tree.nodes[jsonAutoLoad.data[tree.autoLoadCurrentDepth - 1].selectedSkill].select();
            tree.selectedNode.setVisualState("glow-nochildren");
            tree.autoLoad = false;
            camera.checkCameraPosition(tree.selectedNode);
        }
    });
}

Tree.prototype.countCachedNodes = function() {
    var nodesCached = 0;
    var nodesNotCached = 0;
    for (var nodeId in tree.nodes) {
        var node = tree.nodes[nodeId];
        if (node.cached) nodesCached++;
        else  nodesNotCached++;
    }

    console.log("Nodes cached : " + nodesCached);
    console.log("Nodes not cached : " + nodesNotCached);
}

Tree.prototype.enterTargetMode = function() {
    tree.targetMode = true;

    for (var nodeIndex in tree.nodes) {
        var node = tree.nodes[nodeIndex];
        if (!node.isEdited && tree.editedNode.parent != node) node.setVisualState(node.visualState);
        // node.backImage.setImage($("img#node-normal-t")[0]);
    }
    stage.draw();
}

Tree.prototype.exitTargetMode = function() {
    if (typeof tree.targetNode != "undefined") tree.targetNode.unsetTarget();
    tree.targetMode = false;

    for (var nodeIndex in tree.nodes) {
        var node = tree.nodes[nodeIndex];
        node.setVisualState(node.visualState);
    }
    stage.draw();
}

Tree.prototype.executeMoveCopy = function() {
    //Cases refer to Dario's notes

    //used later to set the right visualState on parent (ie. if the last child is to be deleted, the parent should not have a notch)
    tree.editedNode.parent.childrenMarkedForDeleteCount++;

    //Case 1
    var openSibling = tree.targetNode.getSiblingMatch("isInPath", true);
    if (typeof openSibling != "undefined") {
        openSibling.contract({noAnim:true}).deSelect();
    }

    //Case 2
    if (tree.targetNode.isInPath == true && tree.targetNode.depth < tree.editedNode.depth) {
        tree.targetNode.contract({noAnim:true}).deSelect();
    }

    //This data will be used to create a new child, identical to the one we are about to remove
    var nodeData = {
        uuid: tree.editedNode.id,
        name: tree.editedNode.name,
        slug: tree.editedNode.slug,
        depth: tree.targetNode.depth + 1
    }

    var targetNode = tree.targetNode;
    tree.exitTargetMode();

    //Remove editedNode from previous location
    tree.editedNode.deleteFromDB();

    //createNewChild will add the child if targetNode is already open, or simply expand it if it's closed
    targetNode.createNewChild(nodeData);
}

Tree.prototype.sanityCheck = function() {

    var groupsFailed = [];

    ////////////////////
    //selectedNode tests
    var groupName = "selectedNode";
    var snErrors = [];
    var sn = tree.selectedNode;

    if (sn.isSelected !== true) snErrors.push("isSelected is false, should be true");
    if (sn.open !== true) snErrors.push("open is false, should be true");
    if (sn.isInPath !== true) snErrors.push("isInPath is false, should be true");

    var checkPassed = tree.sanityCheckErrors(groupName, snErrors);
    if (checkPassed === false) groupsFailed.push(groupName);
    // End of selectedNode tests
    ////////////////////////////


    //////////////////////////////
    //selectedNode siblings tests
    var groupName = "sn siblings";
    var sibErrors = [];

    if (sn.parent !== null) {
        if (sn.parent.getChildren().length !== sn.getSiblings().length + 1) sibErrors.push("selectedNode's parent children count doesn't match selectedNode's siblings count (+1)");
    }

    sn.getSiblings().forEach(function(sibling) {
        if (sibling.open === true) sibErrors.push("sibling of selectedNode (" + sibling.name + ") is open, it shouldn't be");
        if (sibling.isSelected === true) sibErrors.push("sibling of selectedNode (" + sibling.name + ") isSelected, it shouldn't be");
        if (sibling.isInPath === true) sibErrors.push("sibling of selectedNode (" + sibling.name + ") isInPath, it shouldn't be");
        if (sibling.freeSlots.length > 0) sibErrors.push("sibling of selectedNode (" + sibling.name + ") shouldn't have freeSlots because it's closed");
    });

    var checkPassed = tree.sanityCheckErrors(groupName, sibErrors);
    if (checkPassed === false) groupsFailed.push(groupName);
    //End of selectedNode siblings tests
    ////////////////////////////////////

    /////////////////
    //editedNode tests
    var groupName = "editedNode tests"
    var enErrors = [];

    if (typeof tree.editedNode !== "undefined") {
        if (tree.editedNode.parent.getChildren().length === 0) enErrors.push("editedNode's parent (" + tree.editedNode.parent.name + ") has no children");
    }

    if ($("#panel").css("display") === "block" && typeof tree.editedNode === "undefined") enErrors.push("panel is open but there is no editedNode");

    var checkPassed = tree.sanityCheckErrors(groupName, enErrors);
    if (checkPassed === false) groupsFailed.push(groupName);
    //editedNode tests
    //////////////////

    
    if (groupsFailed.length === 0) {
        console.log("Sanity check passed");
        return true;
    }else {
        console.error("Sanity check failed");
        return false;
    }
}

Tree.prototype.sanityCheckErrors = function(groupName, errors) {
    var checkPassed = true;

    if (errors.length > 0) {
        console.log("Errors on " + groupName);
        checkPassed = false;

        for (var errorIndex in errors) {
          console.log(errors[errorIndex]);
        }
    }

    return checkPassed;
}
var Panel = function(node, initParams) {
	this.initParams = initParams;
	this.$subPanels = {};
	this.$activeSubpanel;

    //Locks panel during AJAX requests
    this.locked = false;

	var that = this;
    var userRole = "user"; //editor, anonymous

    $("#panel").height($("#kinetic").height() - $("#footer").height() - 15);

	$.ajax({
      url: baseUrl + "panel/getPanel/" + node.id + "/",
    }).done(function(content) {

    	$("#panel").empty().append(content);
    	$("#panel .panel-content").each(function (index, subPanel) {
            // debugger;
            subPanelId = $(subPanel).attr("id");
    		that.$subPanels[subPanelId] = $(subPanel);
            that.initSubPanel(subPanel);
            that.loadSubPanelEvents(subPanel, userRole);
    	});

        camera.panelOffset = $("#panel").outerWidth();

    	$("#panel").show("slide", {
    		direction: "right",
    		complete: function () {
                that.$activeSubpanel = that.$subPanels["first-panel"];
                that.initParams.onComplete();
                that.setOrUpdateScrollbar();
            }
    	});
	});

	this.close = function(params) {
        that.closePanelModal();
		$("#panel").hide("slide", {
			direction: "right", 
			complete: function() {
                that.$activeSubpanel.hide();
                params.onComplete();
                camera.panelOffset = 0;
            }
		});
	}

    this.showErrors = function(response){
        var content = '<div class="modal-content">';
        content += '<a href="#" class="panelModalRemoveBtn"></a>';
        if (typeof response.message != "undefined"){
            content += '<h5>' + response.message + "</h5>";
            for (var key in response.data.errors) {
                if (response.data.errors.hasOwnProperty(key)) {
                    content += response.data.errors[key] + '<br />';
                }
            }
        }
        else {
            content += '<h5>' + jt.error + '</h5>';
        }
        content += '</div>';

        that.addPanelModal(content);        
    }

    this.showWarning = function(warning, callback) {
        var content = '<div class="modal-content warning">';
        content += '<a href="#" class="panelModalRemoveBtn"></a>';
        content += '<p>' + warning + '</p>';
        content += '<button class="panelModalOkBtn">' + jt.ok + '</button>';
        content += '</div>';

        this.addPanelModal(content, callback);
    }

    this.showMessage = function(content){
        this.$activeSubpanel.find(".message-zone").html(content).css("display", "block");
        window.setTimeout(function(){
            $(".message-zone").fadeOut("fast");
        }, 3000);
    }

    this.addPanelModal = function(html, callback){
        var panelModal = $('<div class="panelModal">');
        panelModal.html(html).hide();
        panelModal.css({
            width: $("#panel").width(),
            height: $("#panel").height()
        });
        $("#panel").append(panelModal);
        panelModal.fadeIn(200);
        $(".panelModalRemoveBtn, .panelModalOkBtn").on("tap click", function(e){
            e.preventDefault();
            that.closePanelModal();

            if (typeof callback !== "undefined") callback();
        });        
    }

    this.closePanelModal = function(){
        $(".panelModal").remove();
    }

	this.loadSubPanelEvents = function(subPanel, userRole) {
        var subPanelId = $(subPanel).attr("id");
        switch (subPanelId) {
            case "first-panel":
                $(subPanel).children("a.panel-btn").each(function (loadBtnIndex, loadBtn) {
                    $(loadBtn).on("tap click", function() {
                        var panelToLoad = $(loadBtn).data("panel");

                        //Hide first-panel's scrollbar so it doesn't conflict with subPanel's scrollbar
                        that.$activeSubpanel.find(".scrollbar").css("display", "none");

                        that.$activeSubpanel.hide("slide", {
                            direction:"left"
                        });

                        that.$activeSubpanel = $("#" + panelToLoad);

                        that.panelPreloadEvents();

                        $("#" + panelToLoad).show("slide", {
                            direction: "right",
                        }, function(){
                            that.panelLoadEvents();
                            
                            that.setOrUpdateScrollbar();

                            ga("send", "event", "panelLoad", panelToLoad);

                            if ($("body").hasClass("anonymous") && panelToLoad != "share-skill-panel" && panelToLoad != "skill-history-panel"){
                                that.addPanelModal(
                                    '<div class="modal-content">' + 
                                    '<h5>' + jt.panel.haveToBeSigned + '</h5>' + 
                                    '<a class="login-link" href="../login/">' + jt.panel.signIn + '</a> ' + jt.or +
                                    ' <a class="register-link" href="../register/">' + jt.panel.createAccount + '</a>' + '</div>'
                                );
                            }
                        });

                        return false;
                    });
                })
                break;
            case "create-skill-panel":
                $(subPanel).find(".img-btn").on("tap click", function() {
                    $(subPanel).find("#creationType").val($(this).data("value"));
                    $(subPanel).find("#skillParentUuid").val($(this).data("parentuuid"));
                    $(subPanel).find(".img-btn").toggleClass("selected");

                    if ($(subPanel).find("#creationType").val() === "child") $(subPanel).find("#childrenCapAlert").show();
                    else $(subPanel).find("#childrenCapAlert").hide();
                });

                $("#create-skill-form").on("submit", $.proxy(function(e){
                    e.preventDefault();
                    this.locked = true;

                    $.ajax({
                        url: $("#create-skill-form").attr("action"),
                        type: $("#create-skill-form").attr("method"),
                        data: $("#create-skill-form").serialize(),
                        
                    }).done( function(response){
                            if (response.status == "ok"){
                                $("#create-skillName").val("");
                                that.showMessage(response.message);

                                ga("send", "event", "nodeCreate", response.data.skill.name);
                                that.checkChildrenCaps({
                                    response: response
                                });

                                var creationType = $(subPanel).find("#creationType").val();
                                if (creationType == "child") {
                                    tree.editedNode.createNewChild(response.data.skill);
                                } else if (creationType == "parent") { 
                                    $("#creationTypeParent").data("parentuuid", response.data.skill.uuid);
                                    $("#skillParentUuid").val(response.data.skill.uuid);
                                    tree.editedNode.createNewParent(response.data.skill)
                                }
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                }, this));
                break;
            case "move-skill-panel":
                /*$(subPanel).find(".img-btn").on("tap click", function() {
                    $(subPanel).find("#moveType").val($(this).data("value"));
                    $(subPanel).find("#move-form-submit").val($(this).data("value").toUpperCase());
                    $(subPanel).find(".selected").toggleClass("selected");
                    $(this).toggleClass("selected");

                    $(subPanel).find("#move-step2").css("display", "block");
                    tree.enterTargetMode();
                });
                */

                $("#move-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;
                    $.ajax({
                        url: $("#move-skill-form").attr("action"),
                        type: $("#move-skill-form").attr("method"),
                        data: $("#move-skill-form").serialize()
                    }).done( function(response){
                            if (response.status == "ok"){
                                that.showMessage(response.message);
                                ga("send", "event", "nodeMove", tree.editedNode.name);

                                that.checkChildrenCaps({
                                    response: response,
                                    afterCheckCallback: tree.executeMoveCopy
                                });
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                });
                break;
            case "rename-skill-panel":
                $("#rename-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;

                    $.ajax({
                        url: $("#rename-skill-form").attr("action"),
                        type: $("#rename-skill-form").attr("method"),
                        data: $("#rename-skill-form").serialize()
                    }).done( function(response){

                            if (response.status == "ok"){
                                $("#rename-skillName").val("");
                                $("#panel .skillName").html('"'+response.data.name+'"'); //change the skillname at top of panel
                                that.showMessage(response.message);
                                ga("send", "event", "nodeRename", tree.editedNode.name, response.data.name);
                                tree.editedNode.setName(response.data.name);
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                    });
                break;
            case "skill-settings-panel":
                $("#skill-settings-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;

                    $.ajax({
                        url: $("#skill-settings-form").attr("action"),
                        type: $("#skill-settings-form").attr("method"),
                        data: $("#skill-settings-form").serialize()
                    }).done( function(response){
                            if (response.status == "ok"){
                                that.showMessage(response.message);
                                ga("send", "event", "settingsChanged", tree.editedNode.name);
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                    });
                break;
            case "delete-skill-panel":
                $("#delete-skill-form-submit").hide();
                $('input[name=sureToDelete]').on("change", function(){
                    $("#delete-fake-radio").toggleClass("yes no");
                    $("#delete-skill-form-submit").toggle();
                });
                $("#delete-fake-radio").on("tap click", function(e){
                    var offset = $(this).offset();
                    var x = e.clientX - offset.left;
                    if (x < 24){ $("#yes-sureToDelete-label").click(); }
                    else { $("#no-sureToDelete-label").click(); }
                });
                $("#delete-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;

                    $.ajax({
                        url: $("#delete-skill-form").attr("action"),
                        type: $("#delete-skill-form").attr("method"),
                        data: $("#delete-skill-form").serialize()
                     }).done( function(response){

                            if (response.status == "ok") {
                                var nodeToDelete = tree.editedNode;
                                ga("send", "event", "nodeDelete", tree.editedNode.name);
                                nodeToDelete.finishEdit(); //close the panel, nothing to do here anymore    
                                nodeToDelete.deleteFromDB();
                                that.showMessage(response.message);
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                });
                break;
            case "translate-skill-panel":                
                $("#translate-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;
                    
                    $.ajax({
                        url: $("#translate-skill-form").attr("action"),
                        type: $("#translate-skill-form").attr("method"),
                        data: $("#translate-skill-form").serialize()
                    }).done(function(response){

                            if (response.status == "ok"){
                                
                                $("#skillTrans").val("");
                                that.showMessage(response.message);

                                $.ajax({
                                    url: baseUrl + "panel/reloadTranslations/" + node.id + "/"
                                }).done(function(messagesHtml){
            
                                        $("#other-translations-list").html(messagesHtml);
                                        that.setOrUpdateScrollbar();
                                    });
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                });
                break;
            case "discuss-skill-panel":
                $("#discuss-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;
                    
                    $.ajax({
                        url: $("#discuss-skill-form").attr("action"),
                        type: $("#discuss-skill-form").attr("method"),
                        data: $("#discuss-skill-form").serialize()
                    }).done(function(response){

                            if (response.status == "ok"){
                                $("#discuss-message").val("");
                                
                                $.ajax({
                                    url: baseUrl + "panel/reloadDiscussionMessages/" + node.id + "/"
                                }).done(function(messagesHtml){
            
                                        $(".discuss-prev-messages").html(messagesHtml);
                                        that.setOrUpdateScrollbar();

                                    });
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                });
                break;
            case "share-skill-panel":
                $("#skill-permalink-input").on("tap click", function () {
                   $(this).select();
                });
                break;
        }

        //Common events
        $(subPanel).find(".back-to-panel-btn").on("tap click", $.proxy(function(e) {
            e.preventDefault();
            if (this.locked === true) return;

            $(subPanel).hide("slide", {
                direction:"right",
                complete: function() {
                    //Show first-panel's scrollbar
                    that.$subPanels["first-panel"].find(".scrollbar").css("display", "block");
                }
            });

            $("#first-panel").show("slide", {
                direction:"left"
            });

            that.$activeSubpanel = that.$subPanels["first-panel"];

            if (tree.targetMode == true) tree.exitTargetMode();
        }, this));

        $(subPanel).find(".close-panel-btn").on("tap click", $.proxy(function(e) {
            e.preventDefault();
            if (this.locked === true) return;

            if (tour.isActive == true || doTour == true) tour.actionOnTree("close-panel");

            if (tree.targetMode == true) tree.exitTargetMode();
            tree.editedNode.finishEdit();
        }, this));

        // Click/tap on the stage only fires on nodes, not on empty space (TODO)
        // stage.on("click tap", function(e) {
        //     tree.editedNode.finishEdit();
        //     stage.off("click tap");
        // });
	}

    this.initSubPanel = function(subPanel) {
        var subPanelId = $(subPanel).attr("id");
        $(subPanel)
            .css({
                position: "absolute",
                width: $("#panel").width() 
            });
        if (subPanelId != "first-panel") $(subPanel).hide();
    }
}

Panel.prototype.panelLoadEvents = function() {
    var panel = tree.editedNode.panel;

    switch (panel.$activeSubpanel[0].id) {
        case "move-skill-panel":
            //Nothing to do for now, but who knows...
            $(panel.$activeSubpanel).find("#move-step2").css("display", "block");
            tree.enterTargetMode();
            break;
    }
}

Panel.prototype.panelPreloadEvents = function() {
    var panel = tree.editedNode.panel;

    switch (panel.$activeSubpanel[0].id) {
        case "skill-history-panel":
            $.ajax({
                url: $("#skill-history-form").attr("action"),
                type: $("#skill-history-form").attr("method"),
                data: $("#skill-history-form").serialize()
            }).done(function(response){
                $("#skill-history-content").empty().append(response);
            });
            break;
    }
}


Panel.prototype.setOrUpdateScrollbar = function() {

    if (typeof this.$activeSubpanel[0].scrollBarLoaded == "undefined") {
        this.$activeSubpanel.wrapInner("<div class='viewport'><div class='overview'></div></div>");
        this.$activeSubpanel.find(".viewport").before("<div class='scrollbar'><div class='track'><div class='thumb'><div class='end'></div></div></div></div>");
    }

    this.$activeSubpanel.find(".viewport").css({
        width: this.$activeSubpanel.width(),
        height: $("#panel").height()
    });

    this.$activeSubpanel.find(".overview").css({ 
        width: this.$activeSubpanel.width()
    });

    if (this.$activeSubpanel[0].scrollBarLoaded == true) this.$activeSubpanel.data("plugin_tinyscrollbar").update();
    else this.$activeSubpanel.tinyscrollbar();

    this.$activeSubpanel[0].scrollBarLoaded = true;
}

Panel.prototype.checkChildrenCaps = function(params) {
    var response = params.response;
    var afterCheckCallback = typeof params.afterCheckCallback != "undefined" ? params.afterCheckCallback : function() { };

    //Check for the NoMore (blocking) threshold 
    if (response.data.parent.childrenCount + 1 == response.data.parent.capNoMore) {
        var warningMessage = jt.panel.capNoMore.replace("%%%IDEAL%%%", response.data.parent.capIdealMax);
        warningMessage = warningMessage.replace("%%%PARENTNAME%%%", response.data.parent.translations[jt.currentLang]);
        warningMessage = warningMessage.replace("%%%NOMORE%%%", response.data.parent.capNoMore);
        this.showWarning(warningMessage + "<p>" + jt.panel.capsDiscuss + "</p>", afterCheckCallback);
    
    //Check for the Alert threshold
    }else if (response.data.parent.childrenCount + 1 >= response.data.parent.capAlert) {
        var warningMessage = jt.panel.capAlert.replace("%%%IDEAL%%%", response.data.parent.capIdealMax);
        warningMessage = warningMessage.replace("%%%PARENTNAME%%%", response.data.parent.translations[jt.currentLang]);
        warningMessage = warningMessage.replace("%%%NOMORE%%%", response.data.parent.capNoMore);
        this.showWarning(warningMessage + "<p>" + jt.panel.capsDiscuss + "</p>", afterCheckCallback);


    //Check for the Ideal Max thresholld
    }else if (response.data.parent.childrenCount + 1 > response.data.parent.capIdealMax) {
        var warningMessage = jt.panel.capIdealMax.replace("%%%IDEAL%%%", response.data.parent.capIdealMax);
        warningMessage = warningMessage.replace("%%%PARENTNAME%%%", response.data.parent.translations[jt.currentLang]);
        this.showWarning(warningMessage + "<p>" + jt.panel.capsDiscuss + "</p>", afterCheckCallback);
    }else {
        afterCheckCallback();
    }
}
var Camera = function() {
    this.defaultSecurityZoneFactor = 0.3;
    this.redrawStageInterval;
    this.rectZone;
    this.scale = 1;
    this.zoomFactor = 1;
    this.origin = {x: 0, y: 0};
    this.zoomTween;
    this.lastZoom = (new Date()).getTime();
    this.panelOffset = 0;
    this.footerOffset = 0;
    this.backgroundImage;
    this.backStars;
    this.backStage;
    this.backLayer;
    this.dummyShape;

    var that = this;

    //Zoom event
    $("#kinetic").on("mousewheel", function (event) {
    // stage.on("wheel", function (event) {
        event.preventDefault();
        
        if (tour.isActive == true || doTour == true) return;

        if ((that.scale <= 0.15 && event.deltaY < 0) || (that.scale >= 1.6 && event.deltaY > 0)) return;
        // console.log(that.scale);

        var timeFromLastZoom = (new Date()).getTime() - camera.lastZoom;

        if (timeFromLastZoom > 100) var zoomAcceleration = 1;
        else if (timeFromLastZoom > 60 && timeFromLastZoom <= 100) var zoomAcceleration = 1.2;
        else if (timeFromLastZoom > 50 && timeFromLastZoom <= 60) var zoomAcceleration = 2;
        else if (timeFromLastZoom > 40 && timeFromLastZoom <= 50) var zoomAcceleration = 3;
        else if (timeFromLastZoom > 30 && timeFromLastZoom <= 40) var zoomAcceleration = 5;
        else if (timeFromLastZoom <= 30) var zoomAcceleration = 6;

        zoomAcceleration *= 0.1;

        var evt = event.originalEvent;
        var mx = evt.clientX - stage.x();
        var my = evt.clientY - stage.y() - $("#header").height();
        var zoom = (that.zoomFactor - (event.deltaY < 0 ? 0.02 : -0.02) * event.deltaFactor * zoomAcceleration);

        //Strange condition we must catch in order to prevent the tree from turning upside down
        if (zoom < 0) return;

        var newscale = that.scale * zoom;

        that.origin.x = mx / that.scale + that.origin.x - mx / newscale;
        that.origin.y = my / that.scale + that.origin.y - my / newscale;


        that.scale *= zoom;

        //Fluid zoom
        // var diffOffsetX = that.origin.x - nodesLayer.offsetX();
        // var diffOffsetY = that.origin.y - nodesLayer.offsetY();

        // var prevScale = nodesLayer.scaleX();
        // var newScaleMid = (newscale - nodesLayer.scaleX()) / 2 + nodesLayer.scaleX();
    
        // camera.zoomTween = new Kinetic.Tween({
        //     node: nodesLayer, 
        //     duration: 0.2,
        //     offsetX: that.origin.x - diffOffsetX / 2.3,
        //     offsetY: that.origin.y - diffOffsetY / 2.3,
        //     scaleX: newScaleMid,
        //     scaleY: newScaleMid,
        //     easing: Kinetic.Easings.Linear,
        //     onFinish: function() {
        //         var finishOffsetTween = new Kinetic.Tween({
        //             node: nodesLayer, 
        //             duration: 0.2,
        //             offsetX: that.origin.x,
        //             offsetY: that.origin.y,
        //             scaleX: newscale,
        //             scaleY: newscale,
        //             easing: Kinetic.Easings.Linear
        //         });
        //         finishOffsetTween.play();
        //         console.log("play");
        //     }
        // });
        // camera.zoomTween.play();

        //Static zoom
        nodesLayer.offsetX(that.origin.x);
        nodesLayer.offsetY(that.origin.y);
        nodesLayer.scaleX(newscale);
        nodesLayer.scaleY(newscale);
        nodesLayer.batchDraw();

        camera.lastZoom = (new Date()).getTime();
    });

    //Checks if node is safely inside viewport (securityZone)
    //If not, animates the stage to the point where the node is centered on the screen
    this.checkCameraPosition = function(node, childrenCount)
    {
        //the childrenCount parameter was initially added to calculate a boundingBox with children that are not yet present (just before expanding)
        //if childrenCount was not passed but node is open, calculate boundingBox with actual children
        if (typeof childrenCount == "undefined" && node.open == true) {
            childrenCount = Object.keys(node.children).length;
        }

        var securityZone = camera.getSecurityZone(camera.defaultSecurityZoneFactor);

        if (typeof childrenCount == "undefined") {
            var boundingBox = node.getBoundingBox();
        } else {
            var boundingBox = node.getBoundingBox(childrenCount);
        }

        var onScreen = camera.isBoxOnScreen(boundingBox, securityZone, false);

        if (onScreen.x == false && onScreen.y == false) var moveDirection = "xy";
        else if (onScreen.x == false) var moveDirection = "x";
        else if (onScreen.y == false) var moveDirection = "y";
        else moveDirection = false;

        if (moveDirection) {
            camera.goToCoords({
                x: node.shapes.x() + node.sizes.totalWidth / 2,
                y: node.shapes.y() + node.sizes.totalHeight / 2,
            }, moveDirection);
        }
    }

    this.goToCoords = function(params, moveDirection) {
        var destX = (moveDirection == "x" || moveDirection == "xy") ? stage.width() / 2 - (params.x - nodesLayer.offsetX() + camera.panelOffset / 2) * that.scale : stage.x();
        var destY = (moveDirection == "y" || moveDirection == "xy") ? stage.height() / 2 - (params.y - nodesLayer.offsetY() + camera.footerOffset / 2) * that.scale : stage.y();

        var tweenX = new Kinetic.Tween({
          node: stage,
          y: destY,
          duration: 0.25,
          easing: Kinetic.Easings.Linear,
          onFinish: function() {
            var tweenY = new Kinetic.Tween({
              node: stage,
              x: destX,
              duration: 0.25,
              easing: Kinetic.Easings.Linear,
              onFinish: function() {
                camera.cacheInvisibleNodes();
                clearInterval(that.redrawStageInterval);
                that.redrawStageInterval = null;

                if (tour.isActive === true) tour.updateLegPositionsAfterCameraMove();
              }
            });
            tweenY.play();
          }
        });
        tweenX.play();
    }

    this.moveStageBy = function(params) {
        var tween = new Kinetic.Tween({
            node: stage,
            x: stage.x() + params.x,
            y: stage.y() + params.y,
            duration: 0.25,
            easing: Kinetic.Easings.Linear,
            onFinish: function() {
                camera.cacheInvisibleNodes();
            }
        });
        camera.animateStage(0.25);
        tween.play();
    }

    this.cacheInvisibleNodes = function() {
        var securityZone = camera.getSecurityZone(0);
        var nodeIds = Object.keys(tree.nodes);

        for (var nodeId in nodeIds) {
            var node = tree.nodes[nodeIds[nodeId]];
            var nodeOnScreen = camera.isBoxOnScreen(node.getBoundingBox(), securityZone, true);
            
            if (!nodeOnScreen && !node.cached) node.cache();
            else if (nodeOnScreen && node.cached) node.clearCache();
        }
        nodesLayer.draw();
    }

    this.getSecurityZone = function(securityZoneFactor) {
        if (securityZoneFactor == null) var securityZoneFactor = that.defaultSecurityZoneFactor;

        var securityZone = {
            minX: Math.round(-stage.x() + (stage.width() / 2) * securityZoneFactor) / that.scale + nodesLayer.offsetX(),
            maxX: Math.round(-stage.x() + stage.width() - (stage.width() / 2 * securityZoneFactor) - camera.panelOffset) / that.scale + nodesLayer.offsetX(),
            minY: Math.round(-stage.y() + (stage.height() / 2) * securityZoneFactor) / that.scale + nodesLayer.offsetY(),
            maxY: Math.round(-stage.y() + stage.height() - (stage.height() / 2 * securityZoneFactor) - camera.footerOffset) / that.scale + nodesLayer.offsetY()
        }
        return securityZone;
    }

    //boundingBoxOrPoint : point case is not yet used
    //partialAllowed : 
    // - true : will not return false is box is partially off screen / will return true even if box is only partially on screen
    // - false : will return false if box is partially off screen / will return true only if box fits completely on screen
    this.isBoxOnScreen = function(boundingBoxOrPoint, securityZone, partialAllowed) {
        var numParams = Object.keys(boundingBoxOrPoint).length;
        var checkZone = securityZone;
        
        switch (numParams) {
            case 4:
                var boundingBox = boundingBoxOrPoint;
                //x1,y1 : top,left
                //x2,y2 : bottom,right
                if (partialAllowed == false) {
                    if (boundingBox.x1 < checkZone.minX || boundingBox.x2 > checkZone.maxX) var inZoneX = false;
                    else var inZoneX = true;
                    if (boundingBox.y1 < checkZone.minY || boundingBox.y2 > checkZone.maxY) var inZoneY = false;
                    else var inZoneY = true;
                    return {x: inZoneX, y: inZoneY};
                }else {
                    if (
                        (boundingBox.x1 < checkZone.minX && boundingBox.x2 < checkZone.minX) ||
                        (boundingBox.y1 < checkZone.minY && boundingBox.y2 < checkZone.minY) ||
                        (boundingBox.x1 > checkZone.maxX && boundingBox.x2 > checkZone.maxX) ||
                        (boundingBox.y1 > checkZone.maxY && boundingBox.y2 > checkZone.maxY)
                    ) return false;
                    else return true;
                }
                break
            case 2:
                //x1,y1
                var point = boundingBoxOrPoint;
                if (
                    point.y1 < checkZone.minY || point.x1 < checkZone.minX ||
                    point.x1 > checkZone.maxX || point.y1 > checkZone.maxY
                ) return false;
                else return true;
                break;
        }
    }

    // Only for debug purposes
    // this.drawStage = function() {
    //     if (typeof line1 != "undefined") line1.destroy();
    //     if (typeof line2 != "undefined") line2.destroy();
    //     if (typeof line3 != "undefined") line3.destroy();
    //     if (typeof line4 != "undefined") line4.destroy();

    //     line1 = new Kinetic.Line({
    //       points: [stage.x(), stage.y(), stage.x()+stage.width(), stage.y()],
    //       stroke: 'red',
    //       strokeWidth: 15
    //     });

    //     line2 = new Kinetic.Line({
    //       points: [stage.x()+stage.width(), stage.y(), stage.x() + stage.width(), stage.y()+stage.height()],
    //       stroke: 'red',
    //       strokeWidth: 15
    //     });

    //     line3 = new Kinetic.Line({
    //       points: [stage.x(), stage.y()+stage.height(), stage.x()+stage.width(), stage.y()+stage.height()],
    //       stroke: 'red',
    //       strokeWidth: 15
    //     });

    //     line4 = new Kinetic.Line({
    //       points: [stage.x(), stage.y(), stage.x(), stage.y()+stage.height()],
    //       stroke: 'red',
    //       strokeWidth: 15
    //     });

    //     stageDrawLayer.add(line1, line2, line3, line4);
    //     stageDrawLayer.draw();
    // }

    // this.drawZone = function(zone) {
    //     // camera.updateSecurityZone();

    //     if (that.rectZone != null)
    //     {
    //         that.rectZone.destroy();
    //         that.rectZone = null;
    //     }

    //     var pointTL = new Kinetic.Circle({
    //         x:zone.minX,
    //         y:zone.minY,
    //         radius:10,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 5
    //     });
    //     pointTL.listening(false);

    //     var pointTR = new Kinetic.Circle({
    //         x:zone.maxX,
    //         y:zone.minY,
    //         radius:10,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 5
    //     });
    //     pointTR.listening(false);

    //     var pointBL = new Kinetic.Circle({
    //         x:zone.minX,
    //         y:zone.maxY,
    //         radius:10,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 5
    //     });
    //     pointBL.listening(false);

    //     var pointBR = new Kinetic.Circle({
    //         x:zone.maxX,
    //         y:zone.maxY,
    //         radius:10,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 5
    //     });
    //     pointBR.listening(false);


    //     var centerX = (stage.width() / 2 - stage.x() - camera.panelOffset / 2) / that.scale + nodesLayer.offsetX();
    //     var centerY = (stage.height() / 2 - stage.y()) / that.scale + nodesLayer.offsetY();

    //     var pointCenter = new Kinetic.Circle({
    //         x:centerX,
    //         y:centerY,
    //         radius:10,
    //         stroke: 'black',
    //         fill:'black',
    //         strokeWidth: 5
    //     });
    //     pointCenter.listening(false);

    //     that.rectZone = new Kinetic.Group();
    //     that.rectZone.add(pointTL, pointTR, pointBL, pointBR, pointCenter);

    //     nodesLayer.add(that.rectZone);
    //     nodesLayer.draw();
    // }

    // this.drawBoundingBox = function(boundingBox) {
    //     var rect = new Kinetic.Rect({
    //         x:boundingBox.x1,
    //         y:boundingBox.y1,
    //         width: boundingBox.x2 - boundingBox.x1,
    //         height: boundingBox.y2 - boundingBox.y1,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 1,
    //         opacity: 0.2
    //     });
    //     nodesLayer.add(rect);
    //     nodesLayer.draw();
    // }

    //Sets up drag and move events for stage
    this.initDragEvents = function() {
        stage.on("dragstart", function(e) {
            panStartCoords = stage.getPointerPosition();
            panLayerStartCoords = { x: camera.backLayer.x(), y: camera.backLayer.y() }
            panBackImageStartCoords = { x: 0, y: camera.backgroundImage.y() }
        });

        stage.on("dragmove", function(e) {
          panCurCoords = stage.getPointerPosition();
          panDistanceX = panCurCoords.x - panStartCoords.x;
          panDistanceY = panCurCoords.y - panStartCoords.y;

          distToTop = -camera.backgroundImage.y();
          distToBottom = camera.backgroundImage.height() + camera.backgroundImage.y() - stage.getHeight();
          var smaller = distToTop < distToBottom ? distToTop : distToBottom;

          camera.backgroundImage.y(panBackImageStartCoords.y + (panDistanceY / (2000 / smaller)));

          //If stars are not cached, we can animate their opacity based on "virtual altitude"
          // if (distToBottom < 480 && distToBottom > 384) {
          //   backStars.opacity((distToBottom*5-1920)/480);
          // }else if (distToBottom <= 384) backStars.opacity(0);
          // if (distToTop < 480 && distToTop > 384) {
          //   backStarsMore.opacity(1-((distToTop*5-1920)/480));
          // }else if (distToTop <= 384) backStarsMore.opacity(1);
          // backStars.batchDraw();


          camera.backLayer.batchDraw();
        });

        stage.on("dragend", function(e) {
          backLayerOffset = {x: 0, y: panDistanceY};

          camera.cacheInvisibleNodes();

          // Cache the stars once the drag is finished
          // backStars.cache({
          //   x:0,
          //   y:0,
          //   width: stage.width(),
          //   height: stage.height()
          // });
          // backStarsMore.cache({
          //   x:0,
          //   y:0,
          //   width: stage.width(),
          //   height: stage.height()
          // });

          //backgroundImage.y(backgroundImage.offsetY());
          //backgroundImage.offsetY(0);
          //backgroundImage.fillLinearGradientStartPointY(backLayerOffset.y);
          //backLayer.x(backLayerOffset.x);
          //backLayer.y(backLayerOffset.y);
        });

        $("#kinetic").mousemove(function (e) {
            camera.backStars.x(Math.round((stage.getPointerPosition().x + camera.backStars.x()) /60));
            camera.backStars.y(Math.round((stage.getPointerPosition().y + camera.backStars.y()) /60));
            camera.backStars.batchDraw();
        });

        // stage.on("contentClick", function(e) {
        //     // e.cancelBubble = true;
        //     // console.log("contentClick");
        //     // if (tour.isActive == true || doTour == true) tour.actionOnTree("stage-click");

        //     // if (typeof tree.editedNode != "undefined") tree.editedNode.finishEdit();

        // });

        //Light hack to animate stage in every situation
        this.dummyShape = new Kinetic.Rect({
            width:100,
            height:100,
            x:0,
            y:0
        });
    }

    this.skySetup = function () {
        camera.backStage = new Kinetic.Stage({
          container: 'backdrop',
          width: $("#kinetic").width(),
          height: $("#kinetic").height(),
        });

        camera.backLayer = new Kinetic.Layer();

        var backgroundWidth = stage.getWidth();
        var backgroundHeight = stage.getHeight() + 500;

        var backgroundImage = new Kinetic.Rect({
          x: 0,
          y: -500,
          width: backgroundWidth,
          height: backgroundHeight + 500,
          fillLinearGradientStartPoint: {x:0, y:0},
          fillLinearGradientEndPoint: {x:0,y:backgroundHeight},
          fillLinearGradientColorStops: [0, '#4a2f52', 0.7, '#e67b88', 1, '#b66fb0']
        });

        camera.backgroundImage = backgroundImage;

        camera.backLayer.add(backgroundImage);

        camera.drawStars(backgroundWidth, backgroundHeight);

        // backStars.cache({
        //   x:0,
        //   y:0,
        //   width: stage.width(),
        //   height: stage.height()
        // });
        
        // backStarsMore = new Kinetic.Layer({opacity: 0});
        // for (i = 0; i < 600; i++)
        // {
        //   var star = new Kinetic.Circle({
        //     radius: Math.random()*1.7,
        //     fill: "white",
        //     x: Math.round(Math.random()*backgroundWidth),
        //     y: Math.round(Math.random()*(backgroundHeight-500) / 2),
        //   })
        //   backStarsMore.add(star);
        // }
        // backStarsMore.cache({
        //   x:0,
        //   y:0,
        //   width: stage.width(),
        //   height: stage.height()
        // });

        camera.backStage.listening(false);
        camera.backStage.add(camera.backLayer, camera.backStars);
        camera.backStage.draw();
    }
}

Camera.prototype.drawStars = function(backgroundWidth, backgroundHeight) {
    if (typeof camera.backStars == "undefined") camera.backStars = new Kinetic.Layer();
    else camera.backStars.destroyChildren();

    for (i = 0; i < 150; i++)
    {
      var star = new Kinetic.Circle({
        radius: Math.random()*1.6,
        fill: "white",
        x: Math.round(Math.random()*backgroundWidth),
        y: Math.round(Math.random()*(backgroundHeight-500) / 2),
      })
      camera.backStars.add(star);
    }
}

Camera.prototype.resizeElements = function() {
    var newWidth = $(window).width();
    var newHeight = $(window).height() - $("#header").height();

    $("#kinetic, #backdrop")
        .width(newWidth)
        .height(newHeight);

    $("body").height(newHeight);

    camera.backStage.width(newWidth);
    camera.backStage.height(newHeight);

    stage.width(newWidth);
    stage.height(newHeight);

    camera.backgroundImage.width(newWidth);
    camera.backgroundImage.height(newHeight + 500);

    camera.drawStars(newWidth, newHeight + 500);
    camera.backStage.draw();

    if (typeof tree.editedNode != "undefined") {
        camera.checkIfPanelBlocksEditedNode();
    }else {
        camera.animateStage(0.5);
        camera.checkCameraPosition(tree.selectedNode);    
    }
    
    if (typeof tree.editedNode != "undefined") {
        var newPanelHeight = newHeight - $("#footer").height() - 15;
        $("#panel").height(newPanelHeight);
        tree.editedNode.panel.setOrUpdateScrollbar();
    }

    camera.cacheInvisibleNodes();

    if (tour.isActive === true) {
        tour.overlay.css({
            width: $(window).width(),
            height: $("#kinetic").height()
        });

        //TODO : here we should reposition tour legs after resize
    }
}


//Light hack to animate stage in every situation
//This methode must be called just before animating the stage
//seconds: time in seconds the stage is going to be animated
//Hack is needed because some kind of optimisation in KineticJS 
//doesn't automatically redraw the stage when the stage is the only element being animated
//TODO : check on SO that this behaviour is not a bug
Camera.prototype.animateStage = function(seconds) {
    var tween = new Kinetic.Tween({
        node: camera.dummyShape,
        x: camera.dummyShape.x() + 100,
        duration: seconds,
        opacity:0
    });
    tween.play();
}

Camera.prototype.checkIfPanelBlocksEditedNode = function() {
    var blockedByPanel = tree.editedNode.isBlockedByPanel();
    if (blockedByPanel != false) {
      camera.moveStageBy({x: -blockedByPanel - 50, y:0 });
    }
}

var Search = function(){

    var that = this;
    this.researchPending = false;
    this.jqxhr;

    this.q = ""; //the search terms

    $(document).ready(function (){
        //listen for keyup event
        $("#kw-input").on("keyup", that.autocomplete);
        //on click on a result link, show the node
        $("#autocomplete-container").on("click", "a", that.searchResultClicked);
        //click anywhere closes the search results
        $("body").on("click", that.close);
        //disable form submit
        $("#search-form").on("submit", function(e){
            e.preventDefault();
        });
    });

    //autocomplete result clicked
    this.searchResultClicked = function(event){
        event.preventDefault();
        
        if (tour.isActive == true || doTour == true) tour.actionOnTree("search-click");

        var selectedSlug = $(this).data("slug");

        ga("send", "event", "searchResultClicked", $(this).data("name"));
        
        var url = baseUrl + "api/getNodePathToRoot/" + selectedSlug + "/";

        var contractAnim = tree.rootNode.isNodeOnScreen() ? false : true;

        $.ajax({
            url: url
        }).done(function(response) {
                jsonAutoLoad = response;
                if (tree.selectedNode) tree.selectedNode.deSelect();
                tree.rootNode.contract({
                    noAnim: contractAnim,
                    onComplete: function() {
                        camera.checkCameraPosition(tree.rootNode);
                        tree.autoLoad = true;
                        tree.autoLoadCurrentDepth = 0;
                        tree.readyForNextLevel.fire();
                    }});
            });
    }

    this.close = function(){
        $("#search-results").slideUp(100);
    }

    //do search
    this.autocomplete = function(event){
        event.preventDefault();
        that.q = $('#kw-input').val();
        if (that.q.length < 3 || that.researchPending){
            that.close();
            return false;
        }

        if (typeof that.jqxhr != "undefined"){
            that.jqxhr.abort();
        }

        that.jqxhr = $.ajax({
            url: $("#search-form").attr("action"),
            data: $("#search-form").serialize(),
            method: $("#search-form").attr("method")
        }).done(function(response){
            that.showResult(response);
            that.researchPending = false;
        });
    }

    //show autocomplete results
    this.showResult = function(response){

        if (response.data.length <= 0){ return false; }
        
        var $list = $("<ul>");
        var $item, $link;
        for(uuid in response.data){
            // console.log(response.data);
            gp = (response.data[uuid].gp) ? response.data[uuid].gp + " > " : "";
            $link = $("<a>")
                        .attr("href", "#")
                        .data("name", response.data[uuid].name)
                        .data("uuid", uuid)
                        .data("slug", response.data[uuid].slug)
                        .html('<div class="search-result-name">' + response.data[uuid].name + '</div>' 
                              + gp + response.data[uuid].parent);
            $item = $("<li>").html($link);
            $list.append($item);
        }
        $("#search-results").html($list);
        //highlight each words
        var words = that.q.split(" ");
        for(i in words){
            $(".search-result-name").highlight(words[i]);
        }
        $("#search-results").slideDown(100);
    }

}
var User = function(){

    $(document).ready(function(){
        $("body").on("click", ".register-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
            ga("send", "event", "uiAction", "registerLink");
        });
        $("body").on("click", ".change-password-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
            ga("send", "event", "uiAction", "changePasswordLink");
        });
        $("body").on("click", ".login-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
            ga("send", "event", "uiAction", "loginLink");
        });
        $("body").on("click", ".forgot-passowrd-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
            ga("send", "event", "uiAction", "forgotPasswordLink");
        });

        $("body").on("submit", "#modal-wrapper form", function(e){
            e.preventDefault();
            user.ajaxSubmit(this);
        });
    });

}

User.prototype.clickedHref = "";

User.prototype.showModal = function(content){
    $.modal.close();
    $.modal("<div>"+content+"</div>", {overlayClose: true, opacity: 70});
}

User.prototype.showForm = function(){
    if (typeof loader != "undefined") {loader.show();}
    $.ajax({
        url: user.clickedHref,
        success: function(response){
            if (typeof loader != "undefined") {loader.hide();}
            user.showModal(response);
        }
    });
}

User.prototype.ajaxSubmit = function(form){
    if (typeof loader != "undefined") {loader.show();}
    $.ajax({
        url: $(form).attr("action"),
        type: $(form).attr("method"),
        data: $(form).serialize(),
        success: function(response){
            if (typeof loader != "undefined") {loader.hide();}
            if (response.status == "ok"){
                if (response.data.redirectTo){
                    window.location.href = response.data.redirectTo;
                }
            }
            else {
                user.showModal(response);
            }
        }
    });
}


var Tour = function() {
	this.tourObj;
	this.legIndex = -1;
	this.isActive = false;
    this.legActions = [];
    this.firstSkill;
    this.overlay;
}

Tour.prototype.start = function() {

    this.overlay = $("<div></div>").css({
        position: "absolute",
        top: $("#kinetic").position().top,
        left: 0,
        width: $(window).width(),
        height: $("#kinetic").height(),
        opacity: 0.70,
        backgroundColor: "#000"
    });

    $("body").append(this.overlay);

    tour.isActive = true;
    tour.firstSkill = tree.rootNode.children[Object.keys(tree.rootNode.children)[0]];
	tour.setPositions();

	tour.tourObj = $('#my-tour-id').tourbus( {
	    onLegStart: function(leg, tourbus) {
            if (leg.rawData.orientation == "right") $(leg.$el[0]).css("left", leg.rawData.left);

            if (typeof leg.rawData.arrow !== "undefined" && leg.rawData.arrow === false) $(leg.el).removeClass("tourbus-arrow");

            var updatedPosition = tour.getUpdatedPositionForLeg(leg);
            tour.overrideLegPosition(leg, updatedPosition);

            if (leg.index === 0) leg.$el.css("box-shadow", "0 0 23px -5px #1adae6");

            if (leg.index !== 2) {
                leg.$el
                    .css( { visibility: 'visible', opacity: 0, zIndex: 9999 } )
                    .animate( { opacity: 0.8 }, 300, function() { leg.show(); } );
            }

            tour.legIndex++;
            return false;
	    },
	    onLegEnd: function(leg, tourbus) {
            if (tour.isActive === true && tourbus.running === true) tour.nextLeg(leg, tourbus);
	    },
        onStop: function(tourbus) {
            tour.overlay.fadeOut({duration: 1000});
            tour.isActive = false;
            doTour = false;
            tour.legIndex = -1;
            tour.tourObj[0].remove();
            $("#tourbus-0").remove();
            stage.draggable(true);
        }
	  });

	tour.tourObj.trigger('depart.tourbus');
}

Tour.prototype.getUpdatedPositionForLeg = function(leg) {
    switch (leg.index) {
        case 0:
            return {
                top: $("#kinetic").position().top + tree.rootNode.shapes.y() + tree.rootNode.sizes.labelHeight / 2 - 50,
                left: $("#kinetic").position().left + tree.rootNode.shapes.x() + tree.rootNode.sizes.labelWidth + 350
            }
            break;
        case 1:
            tour.overlay.fadeOut({duration: 1000});
            return {
                top: $("#kinetic").position().top + tour.firstSkill.shapes.y(),
                left: $("#kinetic").position().left + tour.firstSkill.shapes.x() + tour.firstSkill.sizes.totalWidth + 20
            }
            break;
        case 2:
            return {
                top: $("#kinetic").position().top + $("#kinetic").height() / 2 - $("#footer").height() + 20 - stage.y(),
                left: $("#kinetic").position().left + tour.firstSkill.shapes.x()
            }
            break;
        case 3:
            return {
                top: $("#kinetic").position().top + 20,
                left: $("#kinetic").width() - $(leg.$el).width() - 390
            }
            break;
    }
}

Tour.prototype.setPositions = function() {
	$("#tour-leg1").data("orientation", "right");
	$("#tour-leg2").data("orientation", "right").data("arrow", "25%");;
  	$("#tour-leg3").data("orientation", "top").data("arrow", "12%");
  	$("#tour-leg4").data("orientation", "left");
}

Tour.prototype.actionOnTree = function(type, node) {
	switch (type) {
		case "label-click":
            if (tour.legActions[1] == true) {
                tour.legActions = [];
                return;
            }

            if (tour.legIndex == 1) {
                if (tour.firstSkill == node) tour.tourObj.trigger('next.tourbus');
                else tour.endTour();
            }else tour.endTour();
            break;
        case "plus-click":
            if (tour.legActions[2] == true) {
                tour.legActions = [];
                return;
            }
            if (tour.legIndex == 2) {
                if (tour.firstSkill == node) tour.tourObj.trigger('next.tourbus');
                else tour.endTour();
            }else tour.endTour();
            break;
        default:
            doTour = false;
            if (tour.isActive) tour.endTour();
            break;
	}
}

Tour.prototype.nextLeg = function(leg, tourbus) {
    switch (leg.index) {
        case 0:
            //Do nothing
            break;
        case 1:
            tour.legActions[leg.index] = true;
            tour.firstSkill.labelGroup.fire("click");
            break;
        case 2:
            tour.legActions[leg.index] = true;
            tour.firstSkill.editButton.fire("click");
            break;
        case 3:
            tour.isActive = false;
            tour.legIndex = -1;
    }
}

Tour.prototype.endTour = function() {
    tour.isActive = false;
    tour.tourObj.trigger('stop.tourbus');
}

Tour.prototype.overrideLegPosition = function(leg, newPosition) {
    $(leg.$el[0]).css("left", newPosition.left);
    $(leg.$el[0]).css("top", newPosition.top);
}

//This is called by camera.goToCoords after camera has moved
Tour.prototype.updateLegPositionsAfterCameraMove = function() {
    if (this.legIndex !== 2) return;

    var leg = tour.tourObj.data("tourbus").legs[this.legIndex];

    var updatedPosition = tour.getUpdatedPositionForLeg(leg);
    tour.overrideLegPosition(leg, updatedPosition);

    leg.$el
        .css( { visibility: 'visible', opacity: 0, zIndex: 9999 } )
        .animate( { opacity: 0.8 }, 500, function() { leg.show(); } );
}
var Loader = function(params) {
	var params = typeof params != "undefined" ? params : {};

	this.color = typeof params.color != "undefined" ? params.color : "#fef7f9";
	this.diameter = typeof params.diameter != "undefined" ? params.diameter : 47;
	this.density = typeof params.density != "undefined" ? params.density : 22;
	this.range = typeof params.range != "undefined" ? params.range : 1.2;

	if (typeof params.css != "undefined") {
		$('#loader').css(params.css);
	}

	this.isVisible = false;
	this.isWaitingToShow = false;
	this.timer;
	this.cl;
}

Loader.prototype.show = function() {
	if (typeof this.cl === "undefined" && this.isVisible === false && this.isWaitingToShow === false) {
		$("#loader").show();
		this.isWaitingToShow = true;
		this.timer = setTimeout(function() {
			loader.cl = new CanvasLoader('loader');
			loader.cl.setColor(loader.color);
			loader.cl.setShape('spiral');
			loader.cl.setDiameter(loader.diameter);
			loader.cl.setDensity(loader.density);
			loader.cl.setRange(loader.range);
			loader.cl.setSpeed(1);
			loader.cl.setFPS(30);
			loader.cl.show();
			
			this.isVisible = true;
			this.isWaitingToShow = false;
		}, 200);
	}
}

Loader.prototype.hide = function() {
	if (this.isWaitingToShow === true) {
		clearTimeout(this.timer);
		this.isVisible = false;
		this.isWaitingToShow = false;
	}	
	if (typeof this.cl != "undefined") {
		this.cl.kill();

		this.isVisible = false;
		this.isWaitingToShow = false;

		delete this.cl;
	}
	$("#loader").hide();
}
var FPSCounter = function() {
	this.currentFPS = 0;
	this.startTime = 0;	
	this.frames = 0;

	this.running = false;
	this.averageSent = false;

	this.readings = [];
};

FPSCounter.prototype.start = function () {
	if (typeof requestAnimationFrame == "undefined") return;

	if (this.running === true || this.averageSent === true) return;
	this.running = true;
	this.startTime = Date.now();
	
	requestAnimationFrame($.proxy(this.countFrames, this));
};

FPSCounter.prototype.end = function () {
	if (this.running === false || this.averageSent === true) return;

	var timeElapsed = Date.now() - this.startTime;
	this.currentFPS = Math.round(this.frames / (timeElapsed / 1000));

	this.saveFPS();
	this.running = false;
	this.reset();
};

FPSCounter.prototype.countFrames = function () {
	if (typeof requestAnimationFrame == "undefined") return;

	this.frames++;
	if (this.running === true) requestAnimationFrame($.proxy(this.countFrames, this));
};

FPSCounter.prototype.saveFPS = function() {
	if (typeof requestAnimationFrame == "undefined") return;

	this.readings.push(this.currentFPS);
	
	if (this.readings.length === 5) {
		var readingsSum = 0;
		for (readingIndex in this.readings) {
			readingsSum+=this.readings[readingIndex];
		}
		var averageFPS = Math.round((readingsSum / this.readings.length) * 10) / 10;

		ga("send", "event", "averageFPS", "5-readings", averageFPS);
		this.averageSent = true;
	}
}

FPSCounter.prototype.reset = function() {
	if (typeof requestAnimationFrame == "undefined") return;

	this.currentFPS = 0;
	this.startTime = 0;
	this.frames = 0;
}
var Editor = function() {

}
Editor.prototype.init = function() {
    loader = new Loader({
      color: "black",
      diameter: 30,
      // css: {
      //   position:"relative",
      //   top: "auto",
      //   left: "auto",
      //   zIndex: "auto",
      //   width: 30,
      //   height: 30,
      //   margin: "0 auto",

      // }
    });
}

Editor.prototype.loadEvents = function() {
    $("#editor-tabs-nav a").on("click tap", function(e){
        e.preventDefault();
        $("#editor-tabs-nav li").removeClass("selected");
        $(this).parent().addClass("selected");

        $(".editor-dashboard-content").hide();
        $.ajax({
            url: $(this).attr("href")
        }).done(function(response){
            $("#tab-content").html(response);
        });

        $( "#"+$(this).data("tab") ).show();
        ga("send", "event", "editor", "loadTab", $(this).data("tab"));
    });

    $("#editor-tabs-nav li:first-child a").trigger("click");

    $(document).on("click tap", "a#show-more", function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).attr("href"),
            type: "GET",
            data: {
                skip: $(this).data("skip"),
                limit: $(this).data("limit")
            }
        }).done(function(response){
            var newSkip = $(response).find("#show-more").data("skip");
            var newLimit = $(response).find("#show-more").data("limit");

            $("#show-more").data("skip", newSkip);
            $("#show-more").data("limit", newLimit);

            var newRows = $(response).find("tr").splice(1);
            $("#tab-content table").append(newRows);
        });

        ga("send", "event", "editor", "showMore", $(this).attr("href"));
    });
}
var nodesLayer,
    backLayer, 
    zoomLevel = 1,
    stage,
    rootNode,
    recursiveChildren = [], //Array used for recursive function Node.getChildrenRecursive(),
    panStartCoords,
    panDistanceX,
    panDistanceY,
    panLayerStartCoords,
    backLayerOffset = {x:0, y:0},
    backgroundImage,
    panBackImageStartCoords,
    distToBottom,
    distToTop,
    doResize;   //sort of resizeEnd event : http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-ac

var globalSizes = {
  footerHeight: 82
}

if (typeof rootNodeId !== "undefined") var skillWalk = true;
else var skillWalk = false;

if (skillWalk === true) {
  var tree = new Tree;
  var camera;
  var search = new Search;
  var tour = new Tour;  
  var loader = new Loader;
  var fpsCounter = new FPSCounter;
}

if (typeof pageName != "undefined" && pageName == "editor_dashboard") {
  var loader;
  var editor;
}

var user = new User;
var site;

//global ajax handling
//before ajax
$( document ).ajaxStart(function() {
  if (typeof loader != "undefined"){
    loader.show();
  }
});
//on error
$(document).ajaxError(function( event, jqxhr, settings, thrownError ) {
  //if (jqxhr.status == "403"){}
});
//on complete
$( document ).ajaxComplete(function( event, xhr, settings ) {
    if (typeof loader != "undefined"){
      loader.hide();
    }
});

$(document).ready(function () {
  site = new Site;

  if (skillWalk === true) {
    $("#kinetic, #backdrop")
      .hide()
      .width($(window).width())
      .height($(window).height() - $("#header").height());

    $("body").height($(window).height());

    $("#preload, #panel, #debug").hide();

    camera = new Camera;
    camera.footerOffset = $("#footer").height();

    $(window).resize(function() {
      clearTimeout(doResize);
      doResize = setTimeout(camera.resizeElements, 300);
    });


    // $("#debug").show();
    // setInterval(function() {
    //   $("#debug").empty();
    //   $("#debug").append("Current FPS : " + fpsCounter.currentFPS);
      
    //   if (tree.selectedNode) $("#debug").append("selectedNode : " + tree.selectedNode.name + "<br />");
    //   if (tree.editedNode) $("#debug").append("editedNode : " + tree.editedNode.name + "<br />");

    //   if (typeof tree.selectedNode == "undefined") $("#debug").css({"background-color": "red"});
    //   else $("#debug").css({"background-color": "white"});
    //   camera.drawZone(camera.getSecurityZone(camera.defaultSecurityZoneFactor));
    // },200);
  }

  if (typeof pageName != "undefined" && pageName == "editor_dashboard") {
    editor = new Editor();
    
    editor.init();
    editor.loadEvents();
    
  }
});

$(window).load(function  () {
    if (typeof rootNodeId == "undefined") return;

    stage = new Kinetic.Stage({
      container: 'kinetic',
      width: $("#kinetic").width(),
      height: $("#kinetic").height(),
      dragDistance: 10,
      fill: "black"
    });

    if (tour.isActive == true || doTour == true) stage.draggable(false);
    else stage.draggable(true);

    //Initialize drag and mousemove events
    camera.initDragEvents();

    //Setting up the sky with all the stars
    //Sky and stars are drawn on a different canvas
    camera.skySetup();
 
    //Main layer, it contains everything
    nodesLayer = new Kinetic.Layer();

    // Konami code, sort of
    // var anim = new Kinetic.Animation(function(frame) {
    //   nodesLayer.rotation(frame.time / 150);
    // }, stage);
    // anim.start();
    
    stage.add(nodesLayer);

    //Adding root skill
    var skills = new Node({
      uuid: rootNodeId, 
      name: "Skills"
    }, 
    {
      parent: null
    });

    nodesLayer.add(camera.dummyShape);
});


