/*!
 * Daemonite Material v4.1.1 (http://daemonite.github.io/material/)
 * Copyright 2011-2018 Daemon Pty Ltd
 * Licensed under MIT (https://github.com/Daemonite/material/blob/master/LICENSE)
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t(e.material={},e.jQuery)}(this,function(e,i){"use strict";i=i&&i.hasOwnProperty("default")?i.default:i;var n,t,o,r,a,s,c,l,d,u,h,f,p,m,g,y,v,b,_,k,S=(r="show-predecessor",a="hide"+(t=".bs.collapse"),s=(o="show")+t,c=".expansion-panel",l=".expansion-panel .collapse",void(n=i)(document).on(""+a,l,function(){var e=n(this).closest(c);e.removeClass(o);var t=e.prev(c);t.length&&t.removeClass(r)}).on(""+s,l,function(){var e=n(this).closest(c);e.addClass(o);var t=e.prev(c);t.length&&t.addClass(r)})),w=(h="."+(u="md.floatinglabel"),f="floatinglabel",p=(d=i).fn[f],m="is-focused",g="has-value",y="change"+h,v="focusin"+h,b="focusout"+h,_={DATA_PARENT:".floating-label",DATA_TOGGLE:".floating-label .custom-select, .floating-label .form-control"},k=function(){function i(e){this._element=e,this._parent=d(e).closest(_.DATA_PARENT)[0]}var e=i.prototype;return e.change=function(){d(this._element).val()||d(this._element).is("select")&&""!==d("option:first-child",d(this._element)).html().replace(" ","")?d(this._parent).addClass(g):d(this._parent).removeClass(g)},e.focusin=function(){d(this._parent).addClass(m)},e.focusout=function(){d(this._parent).removeClass(m)},i._jQueryInterface=function(n){return this.each(function(){var e=n||"change",t=d(this).data(u);if(t||(t=new i(this),d(this).data(u,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new Error('No method named "'+e+'"');t[e]()}})},i}(),d(document).on(y+" "+v+" "+b,_.DATA_TOGGLE,function(e){k._jQueryInterface.call(d(this),e.type)}),d.fn[f]=k._jQueryInterface,d.fn[f].Constructor=k,d.fn[f].noConflict=function(){return d.fn[f]=p,k._jQueryInterface},k);function D(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function C(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(e){var t,n,i;t=o,i=r[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i})}return o}var O,I,E,x,T,N,M,A,P,$,j,F,R,W=function(i){var t="transitionend";function e(e){var t=this,n=!1;return i(this).one(c.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||c.triggerTransitionEnd(t)},e),this}var c={TRANSITION_END:"mdTransitionEnd",getSelectorFromElement:function(e){var t=e.getAttribute("data-target");t&&"#"!==t||(t=e.getAttribute("href")||"");try{return 0<i(document).find(t).length?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=i(e).css("transition-duration");return t?(t=t.split(",")[0],1e3*parseFloat(t)):0},getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},isElement:function(e){return(e[0]||e).nodeType},reflow:function(e){return e.offsetHeight},supportsTransitionEnd:function(){return Boolean(t)},triggerTransitionEnd:function(e){i(e).trigger(t)},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=t[i],a=r&&c.isElement(r)?"element":(s=r,{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(a))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}var s}};return i.fn.emulateTransitionEnd=e,i.event.special[c.TRANSITION_END]={bindType:t,delegateType:t,handle:function(e){if(i(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},c}(i),Y=(E="."+(I="md.navdrawer"),x="navdrawer",T=(O=i).fn[x],N="navdrawer-backdrop",M="navdrawer-open",P={breakpoint:"",keyboard:!0,show:!0,type:"default"},$={keyboard:"boolean",show:"boolean",type:"string"},j={CLICK_DATA_API:"click"+E+".data-api",CLICK_DISMISS:"click.dismiss"+E,FOCUSIN:"focusin"+E,HIDDEN:"hidden"+E,HIDE:"hide"+E,KEYDOWN_DISMISS:"keydown.dismiss"+E,MOUSEDOWN_DISMISS:"mousedown.dismiss"+E,MOUSEUP_DISMISS:"mouseup.dismiss"+E,SHOW:(A="show")+E,SHOWN:"shown"+E},F={CONTENT:".navdrawer-content",DATA_DISMISS:'[data-dismiss="navdrawer"]',DATA_TOGGLE:'[data-toggle="navdrawer"]'},R=function(){function o(e,t){this._backdrop=null,this._config=this._getConfig(t),this._content=O(e).find(F.CONTENT)[0],this._element=e,this._ignoreBackdropClick=!1,this._isShown=!1,this._typeBreakpoint=""===this._config.breakpoint?"":"-"+this._config.breakpoint}var e,t,n,i=o.prototype;return i.hide=function(e){var t=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var n=O.Event(j.HIDE);if(O(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1,this._isTransitioning=!0,this._setEscapeEvent(),O(document).off(j.FOCUSIN),O(document.body).removeClass(M+"-"+this._config.type+this._typeBreakpoint),O(this._element).removeClass(A),O(this._element).off(j.CLICK_DISMISS),O(this._content).off(j.MOUSEDOWN_DISMISS);var i=W.getTransitionDurationFromElement(this._content);O(this._content).one(W.TRANSITION_END,function(e){return t._hideNavdrawer(e)}).emulateTransitionEnd(i),this._showBackdrop()}}},i.show=function(e){var t=this;if(!this._isTransitioning&&!this._isShown){this._isTransitioning=!0;var n=O.Event(j.SHOW,{relatedTarget:e});O(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._setEscapeEvent(),O(this._element).addClass(x+"-"+this._config.type+this._typeBreakpoint),O(this._element).on(j.CLICK_DISMISS,F.DATA_DISMISS,function(e){return t.hide(e)}),O(this._content).on(j.MOUSEDOWN_DISMISS,function(){O(t._element).one(j.MOUSEUP_DISMISS,function(e){O(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(),this._showElement(e))}},i.toggle=function(e){return this._isShown?this.hide():this.show(e)},i._enforceFocus=function(){var t=this;O(document).off(j.FOCUSIN).on(j.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===O(t._element).has(e.target).length&&t._element.focus()})},i._getConfig=function(e){return e=C({},P,e),W.typeCheckConfig(x,e,$),e},i._hideNavdrawer=function(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,O(this._element).trigger(j.HIDDEN)},i._removeBackdrop=function(){this._backdrop&&(O(this._backdrop).remove(),this._backdrop=null)},i._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?O(this._element).on(j.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||O(this._element).off(j.KEYDOWN_DISMISS)},i._showBackdrop=function(){var t=this;this._isShown?(this._backdrop=document.createElement("div"),O(this._backdrop).addClass(N).addClass(N+"-"+this._config.type+this._typeBreakpoint).appendTo(document.body),O(this._element).on(j.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&t.hide()}),W.reflow(this._backdrop),O(this._backdrop).addClass(A)):!this._isShown&&this._backdrop&&(O(this._backdrop).removeClass(A),this._removeBackdrop())},i._showElement=function(e){var t=this;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),W.reflow(this._element),O(document.body).addClass(M+"-"+this._config.type+this._typeBreakpoint),O(this._element).addClass(A),this._enforceFocus();var n=O.Event(j.SHOWN,{relatedTarget:e}),i=W.getTransitionDurationFromElement(this._content);O(this._content).one(W.TRANSITION_END,function(){t._element.focus(),t._isTransitioning=!1,O(t._element).trigger(n)}).emulateTransitionEnd(i)},o._jQueryInterface=function(n,i){return this.each(function(){var e=C({},P,O(this).data(),"object"==typeof n&&n?n:{}),t=O(this).data(I);if(t||(t=new o(this,e),O(this).data(I,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},e=o,n=[{key:"Default",get:function(){return P}}],(t=null)&&D(e.prototype,t),n&&D(e,n),o}(),O(document).on(j.CLICK_DATA_API,F.DATA_TOGGLE,function(e){var t,n=this,i=W.getSelectorFromElement(this);i&&(t=O(i)[0]);var o=O(t).data(I)?"toggle":C({},O(t).data(),O(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=O(t).one(j.SHOW,function(e){e.isDefaultPrevented()||r.one(j.HIDDEN,function(){O(n).is(":visible")&&n.focus()})});R._jQueryInterface.call(O(t),o,this)}),O.fn[x]=R._jQueryInterface,O.fn[x].Constructor=R,O.fn[x].noConflict=function(){return O.fn[x]=T,R._jQueryInterface},R);function H(e,t){return e(t={exports:{}},t.exports),t.exports}var U,B,Q,L,J,K,G,q,z,V,X,Z,ee,te,ne,ie,oe,re,ae,se,ce,le,de,ue,he,fe,pe,me,ge,ye,ve=H(function(e,t){
    /*!
       * pickadate.js v3.5.6, 2015/04/20
       * By Amsul, http://amsul.ca
       * Hosted on http://amsul.github.io/pickadate.js
       * Licensed under MIT
       */var n;n=function(m){var i=m(window),g=m(document),y=m(document.documentElement),v=null!=document.documentElement.style.transition;function b(i,e,t,n){if(!i)return b;var o=!1,s={id:i.id||"P"+Math.abs(~~(Math.random()*new Date))},c=t?m.extend(!0,{},t.defaults,n):n||{},r=m.extend({},b.klasses(),c.klass),l=m(i),a=function(){return this.start()},d=a.prototype={constructor:a,$node:l,start:function(){return s&&s.start?d:(s.methods={},s.start=!0,s.open=!1,s.type=i.type,i.autofocus=i==S(),i.readOnly=!c.editable,i.id=i.id||s.id,"text"!=i.type&&(i.type="text"),d.component=new t(d,c),d.$root=m('<div class="'+r.picker+'" id="'+i.id+'_root" />'),k(d.$root[0],"hidden",!0),d.$holder=m(u()).appendTo(d.$root),h(),c.formatSubmit&&function(){var e;!0===c.hiddenName?(e=i.name,i.name=""):e=(e=["string"==typeof c.hiddenPrefix?c.hiddenPrefix:"","string"==typeof c.hiddenSuffix?c.hiddenSuffix:"_submit"])[0]+i.name+e[1];d._hidden=m('<input type=hidden name="'+e+'"'+(l.data("value")||i.value?' value="'+d.get("select",c.formatSubmit)+'"':"")+">")[0],l.on("change."+s.id,function(){d._hidden.value=i.value?d.get("select",c.formatSubmit):""})}(),function(){l.data(e,d).addClass(r.input).val(l.data("value")?d.get("select",c.format):i.value),c.editable||l.on("focus."+s.id+" click."+s.id,function(e){e.preventDefault(),d.open()}).on("keydown."+s.id,p);k(i,{haspopup:!0,expanded:!1,readonly:!1,owns:i.id+"_root"})}(),c.containerHidden?m(c.containerHidden).append(d._hidden):l.after(d._hidden),c.container?m(c.container).append(d.$root):l.after(d.$root),d.on({start:d.component.onStart,render:d.component.onRender,stop:d.component.onStop,open:d.component.onOpen,close:d.component.onClose,set:d.component.onSet}).on({start:c.onStart,render:c.onRender,stop:c.onStop,open:c.onOpen,close:c.onClose,set:c.onSet}),o=function(e){var t,n="position";e.currentStyle?t=e.currentStyle[n]:window.getComputedStyle&&(t=getComputedStyle(e)[n]);return"fixed"==t}(d.$holder[0]),i.autofocus&&d.open(),d.trigger("start").trigger("render"))},render:function(e){return e?(d.$holder=m(u()),h(),d.$root.html(d.$holder)):d.$root.find("."+r.box).html(d.component.nodes(s.open)),d.trigger("render")},stop:function(){return s.start&&(d.close(),d._hidden&&d._hidden.parentNode.removeChild(d._hidden),d.$root.remove(),l.removeClass(r.input).removeData(e),setTimeout(function(){l.off("."+s.id)},0),i.type=s.type,i.readOnly=!1,d.trigger("stop"),s.methods={},s.start=!1),d},open:function(e){return s.open?d:(l.addClass(r.active),k(i,"expanded",!0),setTimeout(function(){d.$root.addClass(r.opened),k(d.$root[0],"hidden",!1)},0),!1!==e&&(s.open=!0,o&&y.css("overflow","hidden").css("padding-right","+="+_()),o&&v?d.$holder.find("."+r.frame).one("transitionend",function(){d.$holder[0].focus()}):d.$holder[0].focus(),g.on("click."+s.id+" focusin."+s.id,function(e){var t=e.target;t!=i&&t!=document&&3!=e.which&&d.close(t===d.$holder[0])}).on("keydown."+s.id,function(e){var t=e.keyCode,n=d.component.key[t],i=e.target;27==t?d.close(!0):i!=d.$holder[0]||!n&&13!=t?m.contains(d.$root[0],i)&&13==t&&(e.preventDefault(),i.click()):(e.preventDefault(),n?b._.trigger(d.component.key.go,d,[b._.trigger(n)]):d.$root.find("."+r.highlighted).hasClass(r.disabled)||(d.set("select",d.component.item.highlight),c.closeOnSelect&&d.close(!0)))})),d.trigger("open"))},close:function(e){return e&&(c.editable?i.focus():(d.$holder.off("focus.toOpen").focus(),setTimeout(function(){d.$holder.on("focus.toOpen",f)},0))),l.removeClass(r.active),k(i,"expanded",!1),setTimeout(function(){d.$root.removeClass(r.opened+" "+r.focused),k(d.$root[0],"hidden",!0)},0),s.open?(s.open=!1,o&&y.css("overflow","").css("padding-right","-="+_()),g.off("."+s.id),d.trigger("close")):d},clear:function(e){return d.set("clear",null,e)},set:function(e,t,n){var i,o,r=m.isPlainObject(e),a=r?e:{};if(n=r&&m.isPlainObject(t)?t:n||{},e){for(i in r||(a[e]=t),a)o=a[i],i in d.component.item&&(void 0===o&&(o=null),d.component.set(i,o,n)),"select"!=i&&"clear"!=i||l.val("clear"==i?"":d.get(i,c.format)).trigger("change");d.render()}return n.muted?d:d.trigger("set",a)},get:function(e,t){if(null!=s[e=e||"value"])return s[e];if("valueSubmit"==e){if(d._hidden)return d._hidden.value;e="value"}if("value"==e)return i.value;if(e in d.component.item){if("string"==typeof t){var n=d.component.get(e);return n?b._.trigger(d.component.formats.toString,d.component,[t,n]):""}return d.component.get(e)}},on:function(e,t,n){var i,o,r=m.isPlainObject(e),a=r?e:{};if(e)for(i in r||(a[e]=t),a)o=a[i],n&&(i="_"+i),s.methods[i]=s.methods[i]||[],s.methods[i].push(o);return d},off:function(){var e,t,n=arguments;for(e=0,namesCount=n.length;e<namesCount;e+=1)(t=n[e])in s.methods&&delete s.methods[t];return d},trigger:function(e,n){var t=function(e){var t=s.methods[e];t&&t.map(function(e){b._.trigger(e,d,[n])})};return t("_"+e),t(e),d}};function u(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",d.component.nodes(s.open),r.box),r.wrap),r.frame),r.holder,'tabindex="-1"')}function h(){d.$holder.on({keydown:p,"focus.toOpen":f,blur:function(){l.removeClass(r.target)},focusin:function(e){d.$root.removeClass(r.focused),e.stopPropagation()},"mousedown click":function(e){var t=e.target;t!=d.$holder[0]&&(e.stopPropagation(),"mousedown"!=e.type||m(t).is("input, select, textarea, button, option")||(e.preventDefault(),d.$holder[0].focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=m(this),t=e.data(),n=e.hasClass(r.navDisabled)||e.hasClass(r.disabled),i=S();i=i&&(i.type||i.href),(n||i&&!m.contains(d.$root[0],i))&&d.$holder[0].focus(),!n&&t.nav?d.set("highlight",d.component.item.highlight,{nav:t.nav}):!n&&"pick"in t?(d.set("select",t.pick),c.closeOnSelect&&d.close(!0)):t.clear?(d.clear(),c.closeOnClear&&d.close(!0)):t.close&&d.close(!0)})}function f(e){e.stopPropagation(),l.addClass(r.target),d.$root.addClass(r.focused),d.open()}function p(e){var t=e.keyCode,n=/^(8|46)$/.test(t);if(27==t)return d.close(!0),!1;(32==t||n||!s.open&&d.component.key[t])&&(e.preventDefault(),e.stopPropagation(),n?d.clear().close():d.open())}return new a}function _(){if(y.height()<=i.height())return 0;var e=m('<div style="visibility:hidden;width:100px" />').appendTo("body"),t=e[0].offsetWidth;e.css("overflow","scroll");var n=m('<div style="width:100%" />').appendTo(e)[0].offsetWidth;return e.remove(),t-n}function k(e,t,n){if(m.isPlainObject(t))for(var i in t)o(e,i,t[i]);else o(e,t,n)}function o(e,t,n){e.setAttribute(("role"==t?"":"aria-")+t,n)}function S(){try{return document.activeElement}catch(e){}}return b.klasses=function(e){return{picker:e=e||"picker",opened:e+"--opened",focused:e+"--focused",input:e+"__input",active:e+"__input--active",target:e+"__input--target",holder:e+"__holder",frame:e+"__frame",wrap:e+"__wrap",box:e+"__box"}},b._={group:function(e){for(var t,n="",i=b._.trigger(e.min,e);i<=b._.trigger(e.max,e,[i]);i+=e.i)t=b._.trigger(e.item,e,[i]),n+=b._.node(e.node,t[0],t[1],t[2]);return n},node:function(e,t,n,i){return t?"<"+e+(n=n?' class="'+n+'"':"")+(i=i?" "+i:"")+">"+(t=m.isArray(t)?t.join(""):t)+"</"+e+">":""},lead:function(e){return(e<10?"0":"")+e},trigger:function(e,t,n){return"function"==typeof e?e.apply(t,n||[]):e},digits:function(e){return/\d/.test(e[1])?2:1},isDate:function(e){return-1<{}.toString.call(e).indexOf("Date")&&this.isInteger(e.getDate())},isInteger:function(e){return-1<{}.toString.call(e).indexOf("Number")&&e%1==0},ariaAttr:function(e,t){m.isPlainObject(e)||(e={attribute:t});for(var n in t="",e){var i=("role"==n?"":"aria-")+n,o=e[n];t+=null==o?"":i+'="'+e[n]+'"'}return t}},b.extend=function(i,o){m.fn[i]=function(e,t){var n=this.data(i);return"picker"==e?n:n&&"string"==typeof e?b._.trigger(n[e],n,[t]):this.each(function(){m(this).data(i)||new b(this,i,o,e)})},m.fn[i].defaults=o.defaults},b},e.exports=n(i)}),be=Object.freeze({default:ve,__moduleExports:ve}),_e=be&&ve||be,ke=(H(function(e,t){
    /*!
       * Date picker for pickadate.js v3.5.6
       * http://amsul.github.io/pickadate.js/date.htm
       */var n;n=function(e,p){var t,y=e._;function n(t,n){var e,i=this,o=t.$node[0],r=o.value,a=t.$node.data("value"),s=a||r,c=a?n.formatSubmit:n.format,l=function(){return o.currentStyle?"rtl"==o.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};i.settings=n,i.$node=t.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(n.disable||[]).slice(0),i.item.enable=-(!0===(e=i.item.disable)[0]?e.shift():-1),i.set("min",n.min).set("max",n.max).set("now"),s?i.set("select",s,{format:c,defaultValue:!0}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(e){var t=i.item.highlight,n=new Date(t.year,t.month,t.date+e);i.set("highlight",n,{interval:e}),this.render()}},t.on("render",function(){t.$root.find("."+n.klass.selectMonth).on("change",function(){var e=this.value;e&&(t.set("highlight",[t.get("view").year,e,t.get("highlight").date]),t.$root.find("."+n.klass.selectMonth).trigger("focus"))}),t.$root.find("."+n.klass.selectYear).on("change",function(){var e=this.value;e&&(t.set("highlight",[e,t.get("view").month,t.get("highlight").date]),t.$root.find("."+n.klass.selectYear).trigger("focus"))})},1).on("open",function(){var e="";i.disabled(i.get("now"))&&(e=":not(."+n.klass.buttonToday+")"),t.$root.find("button"+e+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}n.prototype.set=function(t,n,i){var o=this,e=o.item;return null===n?("clear"==t&&(t="select"),e[t]=n):(e["enable"==t?"disable":"flip"==t?"enable":t]=o.queue[t].split(" ").map(function(e){return n=o[e](t,n,i)}).pop(),"select"==t?o.set("highlight",e.select,i):"highlight"==t?o.set("view",e.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&o.disabled(e.select)&&o.set("select",e.select,i),e.highlight&&o.disabled(e.highlight)&&o.set("highlight",e.highlight,i))),o},n.prototype.get=function(e){return this.item[e]},n.prototype.create=function(e,t,n){var i;return(t=void 0===t?e:t)==-1/0||t==1/0?i=t:p.isPlainObject(t)&&y.isInteger(t.pick)?t=t.obj:p.isArray(t)?(t=new Date(t[0],t[1],t[2]),t=y.isDate(t)?t:this.create().obj):t=y.isInteger(t)||y.isDate(t)?this.normalize(new Date(t),n):this.now(e,t,n),{year:i||t.getFullYear(),month:i||t.getMonth(),date:i||t.getDate(),day:i||t.getDay(),obj:i||t,pick:i||t.getTime()}},n.prototype.createRange=function(e,t){var n=this,i=function(e){return!0===e||p.isArray(e)||y.isDate(e)?n.create(e):e};return y.isInteger(e)||(e=i(e)),y.isInteger(t)||(t=i(t)),y.isInteger(e)&&p.isPlainObject(t)?e=[t.year,t.month,t.date+e]:y.isInteger(t)&&p.isPlainObject(e)&&(t=[e.year,e.month,e.date+t]),{from:i(e),to:i(t)}},n.prototype.withinRange=function(e,t){return e=this.createRange(e.from,e.to),t.pick>=e.from.pick&&t.pick<=e.to.pick},n.prototype.overlapRanges=function(e,t){var n=this;return e=n.createRange(e.from,e.to),t=n.createRange(t.from,t.to),n.withinRange(e,t.from)||n.withinRange(e,t.to)||n.withinRange(t,e.from)||n.withinRange(t,e.to)},n.prototype.now=function(e,t,n){return t=new Date,n&&n.rel&&t.setDate(t.getDate()+n.rel),this.normalize(t,n)},n.prototype.navigate=function(e,t,n){var i,o,r,a,s=p.isArray(t),c=p.isPlainObject(t),l=this.item.view;if(s||c){for(c?(o=t.year,r=t.month,a=t.date):(o=+t[0],r=+t[1],a=+t[2]),n&&n.nav&&l&&l.month!==r&&(o=l.year,r=l.month),o=(i=new Date(o,r+(n&&n.nav?n.nav:0),1)).getFullYear(),r=i.getMonth();new Date(o,r,a).getMonth()!==r;)a-=1;t=[o,r,a]}return t},n.prototype.normalize=function(e){return e.setHours(0,0,0,0),e},n.prototype.measure=function(e,t){return t?"string"==typeof t?t=this.parse(e,t):y.isInteger(t)&&(t=this.now(e,t,{rel:t})):t="min"==e?-1/0:1/0,t},n.prototype.viewset=function(e,t){return this.create([t.year,t.month,1])},n.prototype.validate=function(e,n,t){var i,o,r,a,s=this,c=n,l=t&&t.interval?t.interval:1,d=-1===s.item.enable,u=s.item.min,h=s.item.max,f=d&&s.item.disable.filter(function(e){if(p.isArray(e)){var t=s.create(e).pick;t<n.pick?i=!0:t>n.pick&&(o=!0)}return y.isInteger(e)}).length;if((!t||!t.nav&&!t.defaultValue)&&(!d&&s.disabled(n)||d&&s.disabled(n)&&(f||i||o)||!d&&(n.pick<=u.pick||n.pick>=h.pick)))for(d&&!f&&(!o&&0<l||!i&&l<0)&&(l*=-1);s.disabled(n)&&(1<Math.abs(l)&&(n.month<c.month||n.month>c.month)&&(n=c,l=0<l?1:-1),n.pick<=u.pick?(r=!0,l=1,n=s.create([u.year,u.month,u.date+(n.pick===u.pick?0:-1)])):n.pick>=h.pick&&(a=!0,l=-1,n=s.create([h.year,h.month,h.date+(n.pick===h.pick?0:1)])),!r||!a);)n=s.create([n.year,n.month,n.date+l]);return n},n.prototype.disabled=function(t){var n=this,e=n.item.disable.filter(function(e){return y.isInteger(e)?t.day===(n.settings.firstDay?e:e-1)%7:p.isArray(e)||y.isDate(e)?t.pick===n.create(e).pick:p.isPlainObject(e)?n.withinRange(e,t):void 0});return e=e.length&&!e.filter(function(e){return p.isArray(e)&&"inverted"==e[3]||p.isPlainObject(e)&&e.inverted}).length,-1===n.item.enable?!e:e||t.pick<n.item.min.pick||t.pick>n.item.max.pick},n.prototype.parse=function(e,i,t){var o=this,r={};return i&&"string"==typeof i?(t&&t.format||((t=t||{}).format=o.settings.format),o.formats.toArray(t.format).map(function(e){var t=o.formats[e],n=t?y.trigger(t,o,[i,r]):e.replace(/^!/,"").length;t&&(r[e]=i.substr(0,n)),i=i.substr(n)}),[r.yyyy||r.yy,+(r.mm||r.m)-1,r.dd||r.d]):i},n.prototype.formats=function(){function i(e,t,n){var i=e.match(/[^\x00-\x7F]+|\w+/)[0];return n.mm||n.m||(n.m=t.indexOf(i)+1),i.length}function n(e){return e.match(/\w+/)[0].length}return{d:function(e,t){return e?y.digits(e):t.date},dd:function(e,t){return e?2:y.lead(t.date)},ddd:function(e,t){return e?n(e):this.settings.weekdaysShort[t.day]},dddd:function(e,t){return e?n(e):this.settings.weekdaysFull[t.day]},m:function(e,t){return e?y.digits(e):t.month+1},mm:function(e,t){return e?2:y.lead(t.month+1)},mmm:function(e,t){var n=this.settings.monthsShort;return e?i(e,n,t):n[t.month]},mmmm:function(e,t){var n=this.settings.monthsFull;return e?i(e,n,t):n[t.month]},yy:function(e,t){return e?2:(""+t.year).slice(2)},yyyy:function(e,t){return e?4:t.year},toArray:function(e){return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(e,t){var n=this;return n.formats.toArray(e).map(function(e){return y.trigger(n.formats[e],n,[0,t])||e.replace(/^!/,"")}).join("")}}}(),n.prototype.isDateExact=function(e,t){return y.isInteger(e)&&y.isInteger(t)||"boolean"==typeof e&&"boolean"==typeof t?e===t:(y.isDate(e)||p.isArray(e))&&(y.isDate(t)||p.isArray(t))?this.create(e).pick===this.create(t).pick:!(!p.isPlainObject(e)||!p.isPlainObject(t))&&(this.isDateExact(e.from,t.from)&&this.isDateExact(e.to,t.to))},n.prototype.isDateOverlap=function(e,t){var n=this.settings.firstDay?1:0;return y.isInteger(e)&&(y.isDate(t)||p.isArray(t))?(e=e%7+n)===this.create(t).day+1:y.isInteger(t)&&(y.isDate(e)||p.isArray(e))?(t=t%7+n)===this.create(e).day+1:!(!p.isPlainObject(e)||!p.isPlainObject(t))&&this.overlapRanges(e,t)},n.prototype.flipEnable=function(e){var t=this.item;t.enable=e||(-1==t.enable?1:-1)},n.prototype.deactivate=function(e,t){var i=this,o=i.item.disable.slice(0);return"flip"==t?i.flipEnable():!1===t?(i.flipEnable(1),o=[]):!0===t?(i.flipEnable(-1),o=[]):t.map(function(e){for(var t,n=0;n<o.length;n+=1)if(i.isDateExact(e,o[n])){t=!0;break}t||(y.isInteger(e)||y.isDate(e)||p.isArray(e)||p.isPlainObject(e)&&e.from&&e.to)&&o.push(e)}),o},n.prototype.activate=function(e,t){var r=this,a=r.item.disable,s=a.length;return"flip"==t?r.flipEnable():!0===t?(r.flipEnable(1),a=[]):!1===t?(r.flipEnable(-1),a=[]):t.map(function(e){var t,n,i,o;for(i=0;i<s;i+=1){if(n=a[i],r.isDateExact(n,e)){t=a[i]=null,o=!0;break}if(r.isDateOverlap(n,e)){p.isPlainObject(e)?(e.inverted=!0,t=e):p.isArray(e)?(t=e)[3]||t.push("inverted"):y.isDate(e)&&(t=[e.getFullYear(),e.getMonth(),e.getDate(),"inverted"]);break}}if(t)for(i=0;i<s;i+=1)if(r.isDateExact(a[i],e)){a[i]=null;break}if(o)for(i=0;i<s;i+=1)if(r.isDateOverlap(a[i],e)){a[i]=null;break}t&&a.push(t)}),a.filter(function(e){return null!=e})},n.prototype.nodes=function(c){var t,n,l=this,d=l.settings,e=l.item,a=e.now,s=e.select,u=e.highlight,h=e.view,f=e.disable,p=e.min,m=e.max,i=(t=(d.showWeekdaysFull?d.weekdaysFull:d.weekdaysShort).slice(0),n=d.weekdaysFull.slice(0),d.firstDay&&(t.push(t.shift()),n.push(n.shift())),y.node("thead",y.node("tr",y.group({min:0,max:6,i:1,node:"th",item:function(e){return[t[e],d.klass.weekdays,'scope=col title="'+n[e]+'"']}})))),o=function(e){return y.node("div"," ",d.klass["nav"+(e?"Next":"Prev")]+(e&&h.year>=m.year&&h.month>=m.month||!e&&h.year<=p.year&&h.month<=p.month?" "+d.klass.navDisabled:""),"data-nav="+(e||-1)+" "+y.ariaAttr({role:"button",controls:l.$node[0].id+"_table"})+' title="'+(e?d.labelMonthNext:d.labelMonthPrev)+'"')},r=function(){var t=d.showMonthsShort?d.monthsShort:d.monthsFull;return d.selectMonths?y.node("select",y.group({min:0,max:11,i:1,node:"option",item:function(e){return[t[e],0,"value="+e+(h.month==e?" selected":"")+(h.year==p.year&&e<p.month||h.year==m.year&&e>m.month?" disabled":"")]}}),d.klass.selectMonth,(c?"":"disabled")+" "+y.ariaAttr({controls:l.$node[0].id+"_table"})+' title="'+d.labelMonthSelect+'"'):y.node("div",t[h.month],d.klass.month)},g=function(){var t=h.year,e=!0===d.selectYears?5:~~(d.selectYears/2);if(e){var n=p.year,i=m.year,o=t-e,r=t+e;if(o<n&&(r+=n-o,o=n),i<r){var a=o-n,s=r-i;o-=s<a?s:a,r=i}return y.node("select",y.group({min:o,max:r,i:1,node:"option",item:function(e){return[e,0,"value="+e+(t==e?" selected":"")]}}),d.klass.selectYear,(c?"":"disabled")+" "+y.ariaAttr({controls:l.$node[0].id+"_table"})+' title="'+d.labelYearSelect+'"')}return y.node("div",t,d.klass.year)};return y.node("div",(d.selectYears?g()+r():r()+g())+o()+o(1),d.klass.header)+y.node("table",i+y.node("tbody",y.group({min:0,max:5,i:1,node:"tr",item:function(e){var t=d.firstDay&&0===l.create([h.year,h.month,1]).day?-7:0;return[y.group({min:7*e-h.day+t+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(e){e=l.create([h.year,h.month,e+(d.firstDay?1:0)]);var t,n=s&&s.pick==e.pick,i=u&&u.pick==e.pick,o=f&&l.disabled(e)||e.pick<p.pick||e.pick>m.pick,r=y.trigger(l.formats.toString,l,[d.format,e]);return[y.node("div",e.date,(t=[d.klass.day],t.push(h.month==e.month?d.klass.infocus:d.klass.outfocus),a.pick==e.pick&&t.push(d.klass.now),n&&t.push(d.klass.selected),i&&t.push(d.klass.highlighted),o&&t.push(d.klass.disabled),t.join(" ")),"data-pick="+e.pick+" "+y.ariaAttr({role:"gridcell",label:r,selected:!(!n||l.$node.val()!==r)||null,activedescendant:!!i||null,disabled:!!o||null})),"",y.ariaAttr({role:"presentation"})]}})]}})),d.klass.table,'id="'+l.$node[0].id+'_table" '+y.ariaAttr({role:"grid",controls:l.$node[0].id,readonly:!0}))+y.node("div",y.node("button",d.today,d.klass.buttonToday,"type=button data-pick="+a.pick+(c&&!l.disabled(a)?"":" disabled")+" "+y.ariaAttr({controls:l.$node[0].id}))+y.node("button",d.clear,d.klass.buttonClear,"type=button data-clear=1"+(c?"":" disabled")+" "+y.ariaAttr({controls:l.$node[0].id}))+y.node("button",d.close,d.klass.buttonClose,"type=button data-close=true "+(c?"":" disabled")+" "+y.ariaAttr({controls:l.$node[0].id})),d.klass.footer)},n.defaults={labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,format:"d mmmm, yyyy",klass:{table:(t=e.klasses().picker+"__")+"table",header:t+"header",navPrev:t+"nav--prev",navNext:t+"nav--next",navDisabled:t+"nav--disabled",month:t+"month",year:t+"year",selectMonth:t+"select--month",selectYear:t+"select--year",weekdays:t+"weekday",day:t+"day",disabled:t+"day--disabled",selected:t+"day--selected",highlighted:t+"day--highlighted",now:t+"day--today",infocus:t+"day--infocus",outfocus:t+"day--outfocus",footer:t+"footer",buttonClear:t+"button--clear",buttonToday:t+"button--today",buttonClose:t+"button--close"}},e.extend("pickadate",n)},e.exports=n(_e,i)}),B="md.pickdate",Q="pickdate",L=(U=i).fn[Q],J={cancel:"Cancel",closeOnCancel:!0,closeOnSelect:!1,container:"",containerHidden:"",disable:[],firstDay:0,format:"d/m/yyyy",formatSubmit:"",hiddenName:!1,hiddenPrefix:"",hiddenSuffix:"",klass:{buttonClear:"btn btn-outline-primary picker-button-clear",buttonClose:"btn btn-outline-primary picker-button-close",buttonToday:"btn btn-outline-primary picker-button-today",day:"picker-day",disabled:"picker-day-disabled",highlighted:"picker-day-highlighted",infocus:"picker-day-infocus",now:"picker-day-today",outfocus:"picker-day-outfocus",selected:"picker-day-selected",weekdays:"picker-weekday",box:"picker-box",footer:"picker-footer",frame:"picker-frame",header:"picker-header",holder:"picker-holder",table:"picker-table",wrap:"picker-wrap",active:"picker-input-active",input:"picker-input",month:"picker-month",navDisabled:"picker-nav-disabled",navNext:"material-icons picker-nav-next",navPrev:"material-icons picker-nav-prev",selectMonth:"picker-select-month",selectYear:"picker-select-year",year:"picker-year",focused:"picker-focused",opened:"picker-opened",picker:"picker"},labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",max:!1,min:!1,monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ok:"OK",onClose:function(){},onOpen:function(){},onRender:function(){},onSet:function(){},onStart:function(){},onStop:function(){},selectMonths:!1,selectYears:!1,today:"",weekdaysFull:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysShort:["S","M","T","W","T","F","S"]},K={cancel:"string",closeOnCancel:"boolean",closeOnSelect:"boolean",container:"string",containerHidden:"string",disable:"array",firstDay:"number",format:"string",formatSubmit:"string",hiddenName:"boolean",hiddenPrefix:"string",hiddenSuffix:"string",klass:"object",labelMonthNext:"string",labelMonthPrev:"string",labelMonthSelect:"string",labelYearSelect:"string",max:"boolean || date",min:"boolean || date",monthsFull:"array",monthsShort:"array",ok:"string",onClose:"function",onOpen:"function",onRender:"function",onSet:"function",onStart:"function",onStop:"function",selectMonths:"boolean",selectYears:"boolean || number",today:"string",weekdaysFull:"array",weekdaysShort:"array"},G=function(){function i(e,t){this._config=this._getConfig(t),this._element=e}var e=i.prototype;return e.display=function(e,t,n){U(".picker-date-display",t).remove(),U(".picker-wrap",t).prepend('<div class="picker-date-display"><div class="picker-date-display-top"><span class="picker-year-display">'+e.get(n,"yyyy")+'</span></div><div class="picker-date-display-bottom"><span class="picker-weekday-display">'+e.get(n,"dddd")+'</span><span class="picker-day-display">'+e.get(n,"d")+'</span><span class="picker-month-display">'+e.get(n,"mmm")+"</span></div></div>")},e.show=function(){var e=this;U(this._element).pickadate({clear:this._config.cancel,close:this._config.ok,closeOnClear:this._config.closeOnCancel,closeOnSelect:this._config.closeOnSelect,container:this._config.container,containerHidden:this._config.containerHidden,disable:this._config.disable,firstDay:this._config.firstDay,format:this._config.format,formatSubmit:this._config.formatSubmit,klass:this._config.klass,hiddenName:this._config.hiddenName,hiddenPrefix:this._config.hiddenPrefix,hiddenSuffix:this._config.hiddenSuffix,labelMonthNext:this._config.labelMonthNext,labelMonthPrev:this._config.labelMonthPrev,labelMonthSelect:this._config.labelMonthSelect,labelYearSelect:this._config.labelYearSelect,max:this._config.max,min:this._config.min,monthsFull:this._config.monthsFull,monthsShort:this._config.monthsShort,onClose:this._config.onClose,onOpen:this._config.onOpen,onRender:this._config.onRender,onSet:this._config.onSet,onStart:this._config.onStart,onStop:this._config.onStop,selectMonths:this._config.selectMonths,selectYears:this._config.selectYears,today:this._config.today,weekdaysFull:this._config.weekdaysFull,weekdaysShort:this._config.weekdaysShort});var t=U(this._element).pickadate("picker"),n=t.$root;t.on({close:function(){U(document.activeElement).blur()},open:function(){U(".picker__date-display",n).length||e.display(t,n,"highlight")},set:function(){null!==t.get("select")&&e.display(t,n,"select")}})},e._getConfig=function(e){return e=C({},J,e),W.typeCheckConfig(Q,e,K),e},i._jQueryInterface=function(n){return this.each(function(){var e=C({},J,U(this).data(),"object"==typeof n&&n?n:{}),t=U(this).data(B);t||(t=new i(this,e),U(this).data(B,t)),t.show()})},i}(),U.fn[Q]=G._jQueryInterface,U.fn[Q].Constructor=G,void(U.fn[Q].noConflict=function(){return U.fn[Q]=L,G._jQueryInterface})),Se=(X={IS_MOUSEDOWN:!(V="focus")},Z="blur"+(z=".md.selectioncontrolfocus"),ee="focus"+z,te="mousedown"+z,ne="mouseup"+z,ie=".custom-control",oe=".custom-control-input",void(q=i)(document).on(""+Z,oe,function(){q(this).removeClass(V)}).on(""+ee,oe,function(){!1===X.IS_MOUSEDOWN&&q(this).addClass(V)}).on(""+te,ie,function(){X.IS_MOUSEDOWN=!0}).on(""+ne,ie,function(){setTimeout(function(){X.IS_MOUSEDOWN=!1},1)})),we=(ae="md.tabswitch",se="tabswitch",ce=(re=i).fn[se],le="animate",de="dropdown-item",ue="nav-tabs-indicator",he="nav-tabs-material",fe="show",pe='.nav-tabs [data-toggle="tab"]',me=".dropdown",ge=".nav-tabs",ye=function(){function i(e){this._nav=e,this._navindicator=null}var e=i.prototype;return e.switch=function(e,t){var n=this,i=re(this._nav).offset().left,o=re(this._nav).scrollLeft(),r=re(this._nav).outerWidth();this._navindicator||this._createIndicator(i,o,r,t),re(e).hasClass(de)&&(e=re(e).closest(me));var a=re(e).offset().left,s=re(e).outerWidth();re(this._navindicator).addClass(fe),W.reflow(this._navindicator),re(this._nav).addClass(le),re(this._navindicator).css({left:a+o-i,right:r-(a+o-i+s)});var c=W.getTransitionDurationFromElement(this._navindicator);re(this._navindicator).one(W.TRANSITION_END,function(){re(n._nav).removeClass(le),re(n._navindicator).removeClass(fe)}).emulateTransitionEnd(c)},e._createIndicator=function(e,t,n,i){if(this._navindicator=document.createElement("div"),re(this._navindicator).addClass(ue).appendTo(this._nav),"undefined"!=typeof i){re(i).hasClass(de)&&(i=re(i).closest(me));var o=re(i).offset().left,r=re(i).outerWidth();re(this._navindicator).css({left:o+t-e,right:n-(o+t-e+r)})}re(this._nav).addClass(he)},i._jQueryInterface=function(n){return this.each(function(){var e=re(this).closest(ge)[0];if(e){var t=re(e).data(ae);t||(t=new i(e),re(e).data(ae,t)),t.switch(this,n)}})},i}(),re(document).on("show.bs.tab",pe,function(e){ye._jQueryInterface.call(re(this),e.relatedTarget)}),re.fn[se]=ye._jQueryInterface,re.fn[se].Constructor=ye,re.fn[se].noConflict=function(){return re.fn[se]=ce,ye._jQueryInterface},ye);e.Util=W,e.ExpansionPanel=S,e.FloatingLabel=w,e.NavDrawer=Y,e.PickDate=ke,e.SelectionControlFocus=Se,e.TabSwitch=we,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=material.min.js.map
