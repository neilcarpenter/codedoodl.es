
define('com/fido/app/Fallback',['require','exports','module'],function (require, exports, module) 
{
    /**
     * Fallback for non supported browsers
     * Remember :: This should NOT require anything that doesn't work in IE8
     * Note 	:: Based on BBC fallback implementation
     * @param {[type]} element
     */
    var Fallback = function(element)
    {
        element = element || document.body;

        var config =
	    {
	        message    : '<p>Uh-oh! It looks like you need to update your browser before you\'ll be able to play this game</p><p>In the meantime, check out <a href="#brand_url">this</a> or <a href="#cbeebies_games_url">this</a>.',
	        brand_url  : 'http://www.someurl.tld/',
	        games_url  : 'http://www.someurl.tld/',
	        enabled    : true
	    }

	    var message = config.message;
	        message = message.replace("#brand_url", config.brand_url);
	        message = message.replace("#games_url", config.games_url);

	    var link = document.createElement("link");
	        link.type = "text/css";
	        link.rel  = "stylesheet";
	        link.href = "assets/css/unsupported.css";

	    document.getElementsByTagName("head")[0].appendChild(link);

	    element.innerHTML = message;

    }

    Fallback.constructor = Fallback;

    module.exports = Fallback;

});
/*!
 * VERSION: beta 1.10.2
 * DATE: 2013-08-05
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t){var e,i,s,n,r,a=t.GreenSockGlobals||t,o=function(t){var e,i=t.split("."),s=a;for(e=0;i.length>e;e++)s[i[e]]=s=s[i[e]]||{};return s},l=o("com.greensock"),h=[].slice,_=function(){},u={},m=function(e,i,s,n){this.sc=u[e]?u[e].sc:[],u[e]=this,this.gsClass=null,this.func=s;var r=[];this.check=function(l){for(var h,_,f,p,c=i.length,d=c;--c>-1;)(h=u[i[c]]||new m(i[c],[])).gsClass?(r[c]=h.gsClass,d--):l&&h.sc.push(this);if(0===d&&s)for(_=("com.greensock."+e).split("."),f=_.pop(),p=o(_.join("."))[f]=this.gsClass=s.apply(s,r),n&&(a[f]=p,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+e.split(".").join("/"),[],function(){return p}):"undefined"!=typeof module&&module.exports&&(module.exports=p)),c=0;this.sc.length>c;c++)this.sc[c].check()},this.check(!0)},f=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},p=l._class=function(t,e,i){return e=e||function(){},f(t,[],function(){return e},i),e};f.globals=a;var c=[0,0,1,1],d=[],v=p("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?c.concat(e):c},!0),g=v.map={},T=v.register=function(t,e,i,s){for(var n,r,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(r=h[_],n=s?p("easing."+r,null,!0):l.easing[r]||{},a=u.length;--a>-1;)o=u[a],g[r+"."+o]=g[o+r]=n[o]=t.getRatio?t:t[o]||new t};for(s=v.prototype,s._calcEnd=!1,s.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],i=e.length;--i>-1;)s=e[i]+",Power"+i,T(new v(null,null,1,i),s,"easeOut",!0),T(new v(null,null,2,i),s,"easeIn"+(0===i?",easeNone":"")),T(new v(null,null,3,i),s,"easeInOut");g.linear=l.easing.Linear.easeIn,g.swing=l.easing.Quad.easeInOut;var w=p("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});s=w.prototype,s.addEventListener=function(t,e,i,s,a){a=a||0;var o,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)o=h[l],o.c===e&&o.s===i?h.splice(l,1):0===_&&a>o.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:a}),this!==n||r||n.wake()},s.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},s.dispatchEvent=function(t){var e,i,s,n=this._listeners[t];if(n)for(e=n.length,i=this._eventTarget;--e>-1;)s=n[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var P=t.requestAnimationFrame,y=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},b=k();for(e=["ms","moz","webkit","o"],i=e.length;--i>-1&&!P;)P=t[e[i]+"RequestAnimationFrame"],y=t[e[i]+"CancelAnimationFrame"]||t[e[i]+"CancelRequestAnimationFrame"];p("Ticker",function(t,e){var i,s,a,o,l,h=this,u=k(),m=e!==!1&&P,f=function(t){b=k(),h.time=(b-u)/1e3;var e,n=h.time-l;(!i||n>0||t===!0)&&(h.frame++,l+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(a=s(f)),e&&h.dispatchEvent("tick")};w.call(h),this.time=this.frame=0,this.tick=function(){f(!0)},this.sleep=function(){null!=a&&(m&&y?y(a):clearTimeout(a),s=_,a=null,h===n&&(r=!1))},this.wake=function(){null!==a&&h.sleep(),s=0===i?_:m&&P?P:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===n&&(r=!0),f(2)},this.fps=function(t){return arguments.length?(i=t,o=1/(i||60),l=this.time+o,h.wake(),void 0):i},this.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!a||5>h.frame)&&h.useRAF(!1)},1500)}),s=l.Ticker.prototype=new l.events.EventDispatcher,s.constructor=l.Ticker;var A=p("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,j){r||n.wake();var i=this.vars.useFrames?F:j;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=A.ticker=new l.Ticker,s=A.prototype,s._dirty=s._gc=s._initted=s._paused=!1,s._totalTime=s._time=0,s._rawPrevTime=-1,s._next=s._last=s._onUpdate=s._timeline=s.timeline=null,s._paused=!1;var S=function(){k()-b>2e3&&n.wake(),setTimeout(S,2e3)};S(),s.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},s.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},s.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},s.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},s.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},s.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},s.render=function(){},s.invalidate=function(){return this},s._enabled=function(t,e){return r||n.wake(),this._gc=!t,this._active=t&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},s._kill=function(){return this._enabled(!1,!1)},s.kill=function(t,e){return this._kill(t,e),this},s._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},s._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},s.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[t];null==e?delete n[t]:(n[t]=e,n[t+"Params"]=i instanceof Array&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},s.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},s.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},s.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},s.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},s.totalTime=function(t,e,i){if(r||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,a=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:a._time)-(this._reversed?s-t:t)/this._timeScale,a._dirty||this._uncache(!1),a._timeline)for(;a._timeline;)a._timeline._time!==(a._startTime+a._totalTime)/a._timeScale&&a.totalTime(a._totalTime,!0),a=a._timeline}this._gc&&this._enabled(!0,!1),this._totalTime!==t&&this.render(t,e,!1)}return this},s.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},s.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||1e-6,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},s.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},s.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){r||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=!t&&this._totalTime>0&&this._totalTime<this._totalDuration,t||0===s||0===this._duration||this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var x=p("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});s=x.prototype=new A,s.constructor=x,s.kill()._gc=!1,s._first=s._last=null,s._sortChildren=!1,s.add=s.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},s._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},s.render=function(t,e,i){var s,n=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;n;)s=n._next,(n._active||t>=n._startTime&&!n._paused)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)),n=s},s.rawTime=function(){return r||n.wake(),this._totalTime};var C=p("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=C.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:C.selector(e)||e;var n,r,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?L[C.defaultOverwrite]:"number"==typeof l?l>>0:L[l],(o||e instanceof Array)&&"number"!=typeof e[0])for(this._targets=a=h.call(e,0),this._propLookup=[],this._siblings=[],n=0;a.length>n;n++)r=a[n],r?"string"!=typeof r?r.length&&r!==t&&r[0]&&(r[0]===t||r[0].nodeType&&r[0].style&&!r.nodeType)?(a.splice(n--,1),this._targets=a=a.concat(h.call(r,0))):(this._siblings[n]=G(r,this,!1),1===l&&this._siblings[n].length>1&&Q(r,this,null,1,this._siblings[n])):(r=a[n--]=C.selector(r),"string"==typeof r&&a.splice(n+1,1)):a.splice(n--,1);else this._propLookup={},this._siblings=G(e,this,!1),1===l&&this._siblings.length>1&&Q(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),R=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},D=function(t,e){var i,s={};for(i in t)U[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!I[i]||I[i]&&I[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};s=C.prototype=new A,s.constructor=C,s.kill()._gc=!1,s.ratio=0,s._firstPT=s._targets=s._overwrittenProps=s._startAt=null,s._notifyPluginsOfEnabled=!1,C.version="1.10.2",C.defaultEase=s._ease=new v(null,null,1,1),C.defaultOverwrite="auto",C.ticker=n,C.autoSleep=!0,C.selector=t.$||t.jQuery||function(e){return t.$?(C.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var E=C._internals={},I=C._plugins={},O=C._tweenLookup={},N=0,U=E.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},L={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},F=A._rootFramesTimeline=new x,j=A._rootTimeline=new x;j._startTime=n.time,F._startTime=n.frame,j._active=F._active=!0,A._updateRoot=function(){if(j.render((n.time-j._startTime)*j._timeScale,!1,!1),F.render((n.frame-F._startTime)*F._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in O){for(e=O[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete O[i]}if(i=j._first,(!i||i._paused)&&C.autoSleep&&!F._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",A._updateRoot);var G=function(t,e,i){var s,n,r=t._gsTweenID;if(O[r||(t._gsTweenID=r="t"+N++)]||(O[r]={target:t,tweens:[]}),e&&(s=O[r].tweens,s[n=s.length]=e,i))for(;--n>-1;)s[n]===e&&s.splice(n,1);return O[r].tweens},Q=function(t,e,i,s,n){var r,a,o,l;if(1===s||s>=4){for(l=n.length,r=0;l>r;r++)if((o=n[r])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var h,_=e._startTime+1e-10,u=[],m=0,f=0===e._duration;for(r=n.length;--r>-1;)(o=n[r])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||B(e,0,f),0===B(o,h,f)&&(u[m++]=o)):_>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+1e-10>_&&((f||!o._initted)&&2e-10>=_-o._startTime||(u[m++]=o)));for(r=m;--r>-1;)o=u[r],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},B=function(t,e,i){for(var s=t._timeline,n=s._timeScale,r=t._startTime,a=1e-10;s._timeline;){if(r+=s._startTime,n*=s._timeScale,s._paused)return-100;s=s._timeline}return r/=n,r>e?r-e:i&&r===e||!t._initted&&2*a>r-e?a:(r+=t.totalDuration()/t._timeScale/n)>e+a?0:r-e-a};s._init=function(){var t,e,i,s,n=this.vars,r=this._overwrittenProps,a=this._duration,o=n.immediateRender,l=n.ease;if(n.startAt){if(this._startAt&&this._startAt.render(-1,!0),n.startAt.overwrite=0,n.startAt.immediateRender=!0,this._startAt=C.to(this.target,0,n.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(n.runBackwards&&n.immediateRender&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else if(0===this._time){i={};for(s in n)U[s]&&"autoCSS"!==s||(i[s]=n[s]);return i.overwrite=0,this._startAt=C.to(this.target,0,i),void 0}if(this._ease=l?l instanceof v?n.easeParams instanceof Array?l.config.apply(l,n.easeParams):l:"function"==typeof l?new v(l,n.easeParams):g[l]||C.defaultEase:C.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],r?r[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,r);if(e&&C._onPluginEvent("_onInitAllProps",this),r&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},s._initProps=function(e,i,s,n){var r,a,o,l,h,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&I.css&&this.vars.autoCSS!==!1&&D(this.vars,e);for(r in this.vars){if(_=this.vars[r],U[r])_ instanceof Array&&-1!==_.join("").indexOf("{self}")&&(this.vars[r]=_=this._swapSelfInParams(_,this));else if(I[r]&&(l=new I[r])._onInitTween(e,this.vars[r],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:r,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[r]=h={_next:this._firstPT,t:e,p:r,f:"function"==typeof e[r],n:r,pg:!1,pr:0},h.s=h.f?e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(e[r]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return n&&this._kill(n,e)?this._initProps(e,i,s,n):this._overwrite>1&&this._firstPT&&s.length>1&&Q(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,n)):o},s.render=function(t,e,i){var s,n,r,a=this._time;if(t>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,n="onComplete"),0===this._duration&&((0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&(i=!0,this._rawPrevTime>0&&(n="onReverseComplete",e&&(t=-1))),this._rawPrevTime=t);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==a||0===this._duration&&this._rawPrevTime>0)&&(n="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=t)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var o=t/this._duration,l=this._easeType,h=this._easePower;(1===l||3===l&&o>=.5)&&(o=1-o),3===l&&(o*=2),1===h?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),this.ratio=1===l?1-o:2===l?o:.5>t/this._duration?o/2:1-o/2}else this.ratio=this._ease.getRatio(t/this._duration);if(this._time!==a||i){if(!this._initted){if(this._init(),!this._initted)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/this._duration):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==a&&t>=0&&(this._active=!0),0===a&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._time||0===this._duration)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||d))),r=this._firstPT;r;)r.f?r.t[r.p](r.c*this.ratio+r.s):r.t[r.p]=r.c*this.ratio+r.s,r=r._next;this._onUpdate&&(0>t&&this._startAt&&this._startAt.render(t,e,i),e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||d)),n&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this.vars[n].apply(this.vars[n+"Scope"]||this,this.vars[n+"Params"]||d)))}},s._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:C.selector(e)||e;var i,s,n,r,a,o,l,h;if((e instanceof Array||R(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&(null==t||t._tempKill!==!0);for(n in l)(r=a[n])&&(r.pg&&r.t._kill(l)&&(o=!0),r.pg&&0!==r.t._overwriteProps.length||(r._prev?r._prev._next=r._next:r===this._firstPT&&(this._firstPT=r._next),r._next&&(r._next._prev=r._prev),r._next=r._prev=null),delete a[n]),h&&(s[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},s.invalidate=function(){return this._notifyPluginsOfEnabled&&C._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},s._enabled=function(t,e){if(r||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=G(s[i],this,!0);else this._siblings=G(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?C._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},C.to=function(t,e,i){return new C(t,e,i)},C.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new C(t,e,i)},C.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new C(t,e,s)},C.delayedCall=function(t,e,i,s,n){return new C(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},C.set=function(t,e){return new C(t,0,e)},C.killTweensOf=C.killDelayedCallsTo=function(t,e){for(var i=C.getTweensOf(t),s=i.length;--s>-1;)i[s]._kill(e,t)},C.getTweensOf=function(t){if(null==t)return[];t="string"!=typeof t?t:C.selector(t)||t;var e,i,s,n;if((t instanceof Array||R(t))&&"number"!=typeof t[0]){for(e=t.length,i=[];--e>-1;)i=i.concat(C.getTweensOf(t[e]));for(e=i.length;--e>-1;)for(n=i[e],s=e;--s>-1;)n===i[s]&&i.splice(e,1)}else for(i=G(t).concat(),e=i.length;--e>-1;)i[e]._gc&&i.splice(e,1);return i};var q=p("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=q.prototype},!0);if(s=q.prototype,q.version="1.10.1",q.API=2,s._firstPT=null,s._addTween=function(t,e,i,s,n,r){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:n||e,r:r},o._next&&(o._next._prev=o),o):void 0},s.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},s._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},s._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},C._onPluginEvent=function(t,e){var i,s,n,r,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=n;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:r)?o._prev._next=o:n=o,(o._next=s)?s._prev=o:r=o,o=a}o=e._firstPT=n}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===q.API&&(I[(new t[e])._propName]=t[e]);return!0},f.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,n=t.overwriteProps,r={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=p("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){q.call(this,i,s),this._overwriteProps=n||[]},t.global===!0),o=a.prototype=new q(i);o.constructor=a,a.API=t.API;for(e in r)"function"==typeof t[e]&&(o[r[e]]=t[e]);return a.version=t.version,q.activate([a]),a},e=t._gsQueue){for(i=0;e.length>i;i++)e[i]();for(s in u)u[s].func||t.console.log("GSAP encountered missing dependency: com.greensock."+s)}r=!1})(window);
define("TWEEN", function(){});

/*!
 * VERSION: beta 1.9.3
 * DATE: 2013-04-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=l[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),window._gsDefine&&window._gsQueue.pop()();
define("EASEPACK", function(){});

/*!
 * VERSION: beta 1.9.6
 * DATE: 2013-05-07
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.9.6",a.API=2,a.defaultTransformPerspective=0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h};var l,u,_,p,f,c,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,w=/opacity:([^;]*)/,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,D=Math.PI/180,I=180/Math.PI,N={},F=document,X=F.createElement("div"),L=F.createElement("img"),E=a._internals={_specialProps:o},z=navigator.userAgent,Y=function(){var t,e=z.indexOf("Android"),i=F.createElement("div");return _=-1!==z.indexOf("Safari")&&-1===z.indexOf("Chrome")&&(-1===e||Number(z.substr(e+8,1))>3),f=_&&6>Number(z.substr(z.indexOf("Version/")+8,1)),p=-1!==z.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),U=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",V="",q=function(t,e){e=e||X;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(V=3===s?"ms":i[s],j="-"+V.toLowerCase()+"-",V+t):null},Q=F.defaultView?F.defaultView.getComputedStyle:function(){},Z=a.getStyle=function(t,e,i,s,r){var n;return Y||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Q(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(i=t.currentStyle,n=i[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},W=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=C.test(e),o=t,h=X.style,l=0>i;return l&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(h.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==s&&o.appendChild?h[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||F.body,h[a?"width":"height"]=i+s),o.appendChild(X),n=parseFloat(X[a?"offsetWidth":"offsetHeight"]),o.removeChild(X),0!==n||r||(n=W(t,e,i,s,!0))),l?-n:n},$=function(t,e,i){if("absolute"!==Z(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Z(t,"margin"+s,i);return t["offset"+s]-(W(t,e,parseFloat(r),r.replace(y,""))||0)},G=function(t,e){var i,s,r={};if(e=e||Q(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,k)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)r[i.replace(S,k)]=e[i];return Y||(r.opacity=U(t)),s=be(t,e,!1),r.rotation=s.rotation*I,r.skewX=s.skewX*I,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX*I,r.rotationY=s.rotationY*I,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:$(t,a),void 0!==l[a]&&(o=new _e(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||Q(t,null);--n>-1;)s-=parseFloat(Z(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Z(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s)))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t*D:(r=2*Math.PI,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?D:1)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",u=a.length,_=u>0?a[0].replace(m,""):"";return u?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=_;else if(s&&M.test(t)){for(c=t.replace(M,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,u>f--)for(;u>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=_;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},_e=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(E._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,u,_=s,p={},f={},c=i._transform,m=N;for(i._transform=null,N=e,s=u=i.parse(t,e,s,r),N=m,n&&(i._transform=c,_&&(_._prev=null,_._prev&&(_._prev._next=null)));s&&s!==_;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(l=new _e(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],p[o]=s[h],n||(l=new _e(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:f,firstMPT:l,pt:u}},E.CSSPropTween=function(t,e,s,r,a,o,h,l,u,_,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||"css_"+e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===_?s:_,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,h,u){a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,s),s+="";var _,p,f,c,g,v,y,T,w,x,P,S,R=i.split(", ").join(",").split(" "),k=s.split(", ").join(",").split(" "),C=R.length,A=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(M,", ").split(" "),k=k.join(" ").replace(M,", ").split(" "),C=R.length),C!==k.length&&(R=(n||"").split(" "),C=R.length),a.plugin=h,a.setRatio=u,_=0;C>_;_++)if(c=R[_],g=k[_],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),A&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),w=c.length+g.length>6,w&&!Y&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[_]).join("transparent")):(Y||(w=!1),a.appendXtra(w?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],w?",":S,!0),w&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],x=c.indexOf(P,f),a.appendXtra(c.substr(f,x-f),Number(P),ie(y[p],P),"",A&&"px"===c.substr(x+P.length,2),0===p),f=x+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,_=1;a.l>_;_++)S+=a["xs"+_]+a.data["xn"+_];a.e=S+a["xs"+_]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(h=pe.prototype,h.l=h.pr=0;--ce>0;)h["xn"+ce]=0,h["xs"+ce]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(window.GreenSockGlobals||window).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(B("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,u,_,p=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(u=e.indexOf(p),_=i.indexOf(p),u!==_&&(i=-1===_?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Z(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=q("transform"),Te=j+"transform",we=q("transformOrigin"),xe=null!==q("perspective"),be=function(t,e,i){var s,r,n,o,h,l,u,_,p,f,c,m,d,g=i?t._gsTransform||{skewY:0}:{skewY:0},v=0>g.scaleX,y=2e-5,T=1e5,w=-Math.PI+1e-4,x=Math.PI-1e-4,b=xe?parseFloat(Z(t,we,e,!1,"0 0 0").split(" ")[2])||g.zOrigin||0:0;if(ye)s=Z(t,Te,e,!0);else if(t.currentStyle)if(s=t.currentStyle.filter.match(A),s&&4===s.length)s=[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),g.x||0,g.y||0].join(",");else{if(null!=g.x)return g;s=""}for(r=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],n=r.length;--n>-1;)o=Number(r[n]),r[n]=(h=o-(o|=0))?(0|h*T+(0>h?-.5:.5))/T+o:o;if(16===r.length){var P=r[8],S=r[9],R=r[10],k=r[12],C=r[13],O=r[14];if(g.zOrigin&&(O=-g.zOrigin,k=P*O-r[12],C=S*O-r[13],O=R*O+g.zOrigin-r[14]),!i||null==g.rotationX){var M,D,I,N,F,X,L,E=r[0],z=r[1],Y=r[2],U=r[3],B=r[4],j=r[5],V=r[6],q=r[7],Q=r[11],W=g.rotationX=Math.atan2(V,R),$=w>W||W>x;W&&(N=Math.cos(-W),F=Math.sin(-W),M=B*N+P*F,D=j*N+S*F,I=V*N+R*F,P=B*-F+P*N,S=j*-F+S*N,R=V*-F+R*N,Q=q*-F+Q*N,B=M,j=D,V=I),W=g.rotationY=Math.atan2(P,E),W&&(X=w>W||W>x,N=Math.cos(-W),F=Math.sin(-W),M=E*N-P*F,D=z*N-S*F,I=Y*N-R*F,S=z*F+S*N,R=Y*F+R*N,Q=U*F+Q*N,E=M,z=D,Y=I),W=g.rotation=Math.atan2(z,j),W&&(L=w>W||W>x,N=Math.cos(-W),F=Math.sin(-W),E=E*N+B*F,D=z*N+j*F,j=z*-F+j*N,V=Y*-F+V*N,z=D),L&&$?g.rotation=g.rotationX=0:L&&X?g.rotation=g.rotationY=0:X&&$&&(g.rotationY=g.rotationX=0),g.scaleX=(0|Math.sqrt(E*E+z*z)*T+.5)/T,g.scaleY=(0|Math.sqrt(j*j+S*S)*T+.5)/T,g.scaleZ=(0|Math.sqrt(V*V+R*R)*T+.5)/T,g.skewX=0,g.perspective=Q?1/(0>Q?-Q:Q):0,g.x=k,g.y=C,g.z=O}}else if(!(xe&&0!==r.length&&g.x===r[4]&&g.y===r[5]&&(g.rotationX||g.rotationY)||void 0!==g.x&&"none"===Z(t,"display",e))){var G=r.length>=6,H=G?r[0]:1,K=r[1]||0,J=r[2]||0,te=G?r[3]:1;g.x=r[4]||0,g.y=r[5]||0,l=Math.sqrt(H*H+K*K),u=Math.sqrt(te*te+J*J),_=H||K?Math.atan2(K,H):g.rotation||0,p=J||te?Math.atan2(J,te)+_:g.skewX||0,f=l-Math.abs(g.scaleX||0),c=u-Math.abs(g.scaleY||0),Math.abs(p)>Math.PI/2&&Math.abs(p)<1.5*Math.PI&&(v?(l*=-1,p+=0>=_?Math.PI:-Math.PI,_+=0>=_?Math.PI:-Math.PI):(u*=-1,p+=0>=p?Math.PI:-Math.PI)),m=(_-g.rotation)%Math.PI,d=(p-g.skewX)%Math.PI,(void 0===g.skewX||f>y||-y>f||c>y||-y>c||m>w&&x>m&&false|m*T||d>w&&x>d&&false|d*T)&&(g.scaleX=l,g.scaleY=u,g.rotation=_,g.skewX=p),xe&&(g.rotationX=g.rotationY=g.z=0,g.perspective=parseFloat(a.defaultTransformPerspective)||0,g.scaleZ=1)}g.zOrigin=b;for(n in g)y>g[n]&&g[n]>-y&&(g[n]=0);return i&&(t._gsTransform=g),g},Pe=function(t){var e,i,s=this.data,r=-s.rotation,n=r+s.skewX,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,u=(0|Math.cos(n)*s.scaleY*a)/a,_=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,_.filter="";var f,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+u,x=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=f-(f*o+m*h),b+=m-(f*l+m*u)),v)f=d/2,m=g/2,w+=", Dx="+(f-(f*o+m*h)+x)+", Dy="+(m-(f*l+m*u)+b)+")";else{var P,S,R,k=8>c?1:-1;for(f=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>l?-l:l)*d))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):W(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==s[S]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:m-s.ieOffsetY,_[S]=(s[S]=Math.round(i-R*(0===ce||2===ce?1:k)))+"px";w+=", sizingMethod='auto expand')"}_.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===u&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient(")&&_.removeAttribute("filter"))}},Se=function(){var t,e,i,s,r,n,a,o,h,l=this.data,u=this.t.style,_=l.perspective,f=l.scaleX,c=0,m=0,d=0,g=0,v=l.scaleY,y=0,T=0,w=0,x=0,b=l.scaleZ,P=0,S=0,R=0,k=_?-1/_:0,C=l.rotation,A=l.zOrigin,O=1e5;p&&(a=u.top?"top":u.bottom?"bottom":parseFloat(Z(this.t,"top",null,!1))?"bottom":"top",i=Z(this.t,a,null,!1),o=parseFloat(i)||0,h=i.substr((o+"").length)||"px",l._ffFix=!l._ffFix,u[a]=(l._ffFix?o+.05:o-.05)+h),(C||l.skewX)&&(i=f*Math.cos(C),s=v*Math.sin(C),C-=l.skewX,c=f*-Math.sin(C),v*=Math.cos(C),f=i,g=s),C=l.rotationY,C&&(t=Math.cos(C),e=Math.sin(C),i=f*t,s=g*t,r=b*-e,n=k*-e,m=f*e,y=g*e,b*=t,k*=t,f=i,g=s,w=r,S=n),C=l.rotationX,C&&(t=Math.cos(C),e=Math.sin(C),i=c*t+m*e,s=v*t+y*e,r=x*t+b*e,n=R*t+k*e,m=c*-e+m*t,y=v*-e+y*t,b=x*-e+b*t,k=R*-e+k*t,c=i,v=s,x=r,R=n),A&&(P-=A,d=m*P,T=y*P,P=b*P+A),d=(i=(d+=l.x)-(d|=0))?(0|i*O+(0>i?-.5:.5))/O+d:d,T=(i=(T+=l.y)-(T|=0))?(0|i*O+(0>i?-.5:.5))/O+T:T,P=(i=(P+=l.z)-(P|=0))?(0|i*O+(0>i?-.5:.5))/O+P:P,u[ye]="matrix3d("+[(0|f*O)/O,(0|g*O)/O,(0|w*O)/O,(0|S*O)/O,(0|c*O)/O,(0|v*O)/O,(0|x*O)/O,(0|R*O)/O,(0|m*O)/O,(0|y*O)/O,(0|b*O)/O,(0|k*O)/O,d,T,P,_?1+-P/_:1].join(",")+")"},Re=function(){var t,e,i,s,r,n,a,o,h,l=this.data,u=this.t,_=u.style;p&&(t=_.top?"top":_.bottom?"bottom":parseFloat(Z(u,"top",null,!1))?"bottom":"top",e=Z(u,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",l._ffFix=!l._ffFix,_[t]=(l._ffFix?i+.05:i-.05)+s),l.rotation||l.skewX?(r=l.rotation,n=r-l.skewX,a=1e5,o=l.scaleX*a,h=l.scaleY*a,_[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-h)/a+","+(0|Math.cos(n)*h)/a+","+l.x+","+l.y+")"):_[ye]="matrix("+l.scaleX+",0,0,"+l.scaleY+","+l.x+","+l.y+")"};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var h,l,u,_,p,f,c,m=s._transform=be(t,r,!0),d=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)u=d.cssText,d[ye]=y.transform,d.display="block",h=be(t,null,!1),d.cssText=u;else if("object"==typeof y){if(h={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,m.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,m.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,m.scaleZ),x:se(y.x,m.x),y:se(y.y,m.y),z:se(y.z,m.z),perspective:se(y.transformPerspective,m.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(u in c)y[u]=c[u];else y.rotation=c;h.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:m.rotation*I,m.rotation,"rotation",T),xe&&(h.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":m.rotationX*I||0,m.rotationX,"rotationX",T),h.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":m.rotationY*I||0,m.rotationY,"rotationY",T)),h.skewX=null==y.skewX?m.skewX:re(y.skewX,m.skewX),h.skewY=null==y.skewY?m.skewY:re(y.skewY,m.skewY),(l=h.skewY-m.skewY)&&(h.skewX+=l,h.rotation+=l)}for(p=m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,p||null==y.scale||(h.scaleZ=1);--v>-1;)i=ve[v],_=h[i]-m[i],(_>g||-g>_||null!=N[i])&&(f=!0,n=new pe(m,i,m[i],_,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return _=y.transformOrigin,(_||xe&&p&&m.zOrigin)&&(ye?(f=!0,_=(_||Z(t,i,r,!1,"50% 50%"))+"",i=we,n=new pe(d,i,0,0,n,-1,"css_transformOrigin"),n.b=d[i],n.plugin=a,xe?(u=m.zOrigin,_=_.split(" "),m.zOrigin=(_.length>2?parseFloat(_[2]):u)||0,n.xs0=n.e=d[i]=_[0]+" "+(_[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=m.zOrigin):n.xs0=n.e=d[i]=_):ee(_+"",m)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,u,_,p,f,c,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=q(b[h])),_=u=Z(t,b[h],r,!1,"0px"),-1!==_.indexOf(" ")&&(u=_.split(" "),_=u[0],u=u[1]),p=l=o[h],f=parseFloat(_),v=_.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=W(t,"borderLeft",f,v),w=W(t,"borderTop",f,v),"%"===g?(_=100*(T/m)+"%",u=100*(w/d)+"%"):"em"===g?(x=W(t,"borderLeft",1,"em"),_=T/x+"em",u=w/x+"em"):(_=T+"px",u=w+"px"),y&&(p=parseFloat(_)+c+g,l=parseFloat(u)+c+g)),a=fe(P,b[h],_+" "+u,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,u,_,p,f="background-position",m=r||Q(t,null),d=this.format((m?c?m.getPropertyValue(f+"-x")+" "+m.getPropertyValue(f+"-y"):m.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Z(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],u=-1!==d.indexOf("%"),u!==(-1!==h[l].indexOf("%"))&&(_=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=u?parseFloat(d)/100*_+"px":100*(parseFloat(d)/_)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>c?(h=t.currentStyle,l=8>c?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Z(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Z(t,"borderTopWidth",r,!1,"0px")+" "+Z(t,"borderTopStyle",r,!1,"solid")+" "+Z(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var ke=function(t){var e,i=this.t,s=i.filter,r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")?(i.removeAttribute("filter"),e=!Z(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity=100)"),-1===s.indexOf("opacity")?i.filter+=" alpha(opacity="+r+")":i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o,h=parseFloat(Z(t,"opacity",r,!1,"1")),l=t.style;return e=parseFloat(e),"autoAlpha"===i&&(o=Z(t,"visibility",r),1===h&&"hidden"===o&&0!==e&&(h=0),n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==h?"visible":"hidden",0===e?"hidden":"visible"),n.xs0="visible",s._overwriteProps.push(n.n)),Y?n=new pe(l,"opacity",h,e-h,n):(n=new pe(l,"opacity",100*h,100*(e-h),n),n.xn1="autoAlpha"===i?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=ke),n}});var Ce=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ae=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,u,_,p,f,c=t.className,m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ae,a.pr=-11,i=!0,a.b=c,u=G(t,r),_=t._gsClassPT){for(p={},f=_.data;f;)p[f.p]=1,f=f._next;_.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,l=H(t,u,G(t),h,p),t.className=c,a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration)for(var e,i="all"===this.e,s=this.t.style,r=i?s.cssText.split(";"):this.e.split(","),n=r.length,a=o.transform.parse;--n>-1;)e=r[n],i&&(e=e.substr(0,e.indexOf(":")).split(" ").join("")),o[e]&&(e=o[e].parse===a?ye:o[e].p),Ce(s,e)};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ce=h.length;ce--;)ge(h[ce]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Q(t,""),n=this._overwriteProps;var h,p,c,m,d,g,v,y,T,x=t.style;if(u&&""===x.zIndex&&(h=Z(t,"zIndex",r),("auto"===h||""===h)&&(x.zIndex=0)),"string"==typeof e&&(m=x.cssText,h=G(t,r),x.cssText=m+";"+e,h=H(t,h,G(t)).difs,!Y&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?_&&(u=!0,""===x.zIndex&&(v=Z(t,"zIndex",r),("auto"===v||""===v)&&(x.zIndex=0)),f&&(x.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&xe?Se:ye?Re:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=m;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:d)?p._prev._next=p:m=p,(p._next=c)?c._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,u,_,p,f,c,m,d,g,v=t.style;for(a in e)f=e[a],h=o[a],h?i=h.parse(t,f,a,this,i,n,e):(p=Z(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(f)?(d||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,r),c="px"):"left"===a||"top"===a?(u=$(t,a,r),c="px"):(u="opacity"!==a?0:1,c="")),g=d&&"="===f.charAt(1),g?(_=parseInt(f.charAt(0)+"1",10),f=f.substr(2),_*=parseFloat(f),m=f.replace(y,"")):(_=parseFloat(f),m=d?f.substr((_+"").length)||"":""),""===m&&(m=s[a]||c),f=_||0===_?(g?_+u:_)+m:e[a],c!==m&&""!==m&&(_||0===_)&&(u||0===u)&&(u=W(t,a,u,c),"%"===m?(u/=W(t,a,100,"%")/100,u>100&&(u=100),e.strictUnits!==!0&&(p=u+"%")):"em"===m?u/=W(t,a,1,"em"):(_=W(t,a,_,m),m="px"),g&&(_||0===_)&&(f=_+u+m)),g&&(_+=u),!u&&0!==u||!_&&0!==_?f||"NaN"!=f+""&&null!=f?(i=new pe(v,a,_||u||0,0,i,-1,"css_"+a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):B("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,_-u,i,0,"css_"+a,l!==!1&&("px"===m||"zIndex"===a),0,p,f),i.xs0=m)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.css_autoAlpha||e.css_alpha){n={};for(s in e)n[s]=e[s];n.css_opacity=1,n.css_autoAlpha&&(n.css_visibility=1)}return e.css_className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Me=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Me(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(G(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Me(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],u=[],_=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Me(t,l,_),o.render(i,!0),Me(t,u),o.render(0,!0),o._enabled(!0),r=_.length;--r>-1;)if(n=H(_[r],l[r],u[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(_[r],i,n))}return h},t.activate([a]),a},!0)}),window._gsDefine&&window._gsQueue.pop()();
define("CSSPACK", function(){});

/*!
 *  howler.js v1.1.14
 *  howlerjs.com
 *
 *  (c) 2013, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
!function(){var e={},t=null,n=!0,r=!1;if("undefined"!=typeof AudioContext)t=new AudioContext;else if("undefined"!=typeof webkitAudioContext)t=new webkitAudioContext;else if("undefined"!=typeof Audio){n=!1;try{new Audio}catch(i){r=!0}}else n=!1,r=!0;if(n){var s=void 0===t.createGain?t.createGainNode():t.createGain();s.gain.value=1,s.connect(t.destination)}var o=function(){this._volume=1,this._muted=!1,this.usingWebAudio=n,this._howls=[]};o.prototype={volume:function(e){var t=this;if(e=parseFloat(e),e&&e>=0&&1>=e){t._volume=e,n&&(s.gain.value=e);for(var r in t._howls)if(t._howls.hasOwnProperty(r)&&t._howls[r]._webAudio===!1)for(var i=0;i<t._howls[r]._audioNode.length;i++)t._howls[r]._audioNode[i].volume=t._howls[r]._volume*t._volume;return t}return n?s.gain.value:t._volume},mute:function(){return this._setMuted(!0),this},unmute:function(){return this._setMuted(!1),this},_setMuted:function(e){var t=this;t._muted=e,n&&(s.gain.value=e?0:t._volume);for(var r in t._howls)if(t._howls.hasOwnProperty(r)&&t._howls[r]._webAudio===!1)for(var i=0;i<t._howls[r]._audioNode.length;i++)t._howls[r]._audioNode[i].muted=e}};var u=new o,a=null;if(!r){a=new Audio;var f={mp3:!!a.canPlayType("audio/mpeg;").replace(/^no$/,""),opus:!!a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),m4a:!!(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")}}var l=function(e){var t=this;t._autoplay=e.autoplay||!1,t._buffer=e.buffer||!1,t._duration=e.duration||0,t._format=e.format||null,t._loop=e.loop||!1,t._loaded=!1,t._sprite=e.sprite||{},t._src=e.src||"",t._pos3d=e.pos3d||[0,0,-.5],t._volume=e.volume||1,t._urls=e.urls||[],t._rate=e.rate||1,t._onload=[e.onload||function(){}],t._onloaderror=[e.onloaderror||function(){}],t._onend=[e.onend||function(){}],t._onpause=[e.onpause||function(){}],t._onplay=[e.onplay||function(){}],t._onendTimer=[],t._webAudio=n&&!t._buffer,t._audioNode=[],t._webAudio&&t._setupAudioNode(),u._howls.push(t),t.load()};if(l.prototype={load:function(){var t=this,n=null;if(r)return t.on("loaderror"),void 0;for(var i=0;i<t._urls.length;i++){var s,o;if(t._format)s=t._format;else{if(o=t._urls[i].toLowerCase().split("?")[0],s=o.match(/.+\.([^?]+)(\?|$)/),s=s&&s.length>=2?s:o.match(/data\:audio\/([^?]+);/),!s)return t.on("loaderror"),void 0;s=s[1]}if(f[s]){n=t._urls[i];break}}if(!n)return t.on("loaderror"),void 0;if(t._src=n,t._webAudio)c(t,n);else{var a=new Audio;t._audioNode.push(a),a.src=n,a._pos=0,a.preload="auto",a.volume=u._muted?0:t._volume*u.volume(),e[n]=t;var l=function(){t._duration=a.duration,0===Object.getOwnPropertyNames(t._sprite).length&&(t._sprite={_default:[0,1e3*t._duration]}),t._loaded||(t._loaded=!0,t.on("load")),t._autoplay&&t.play(),a.removeEventListener("canplaythrough",l,!1)};a.addEventListener("canplaythrough",l,!1),a.load()}return t},urls:function(e){var t=this;return e?(t.stop(),t._urls="string"==typeof e?[e]:e,t._loaded=!1,t.load(),t):t._urls},play:function(e,n){var r=this;return"function"==typeof e&&(n=e),e&&"function"!=typeof e||(e="_default"),r._loaded?r._sprite[e]?(r._inactiveNode(function(i){i._sprite=e;var s,o=i._pos>0?i._pos:r._sprite[e][0]/1e3,a=r._sprite[e][1]/1e3-i._pos,f=!(!r._loop&&!r._sprite[e][2]),l="string"==typeof n?n:Math.round(Date.now()*Math.random())+"";if(function(){var t={id:l,sprite:e,loop:f};s=setTimeout(function(){!r._webAudio&&f&&r.stop(t.id,t.timer).play(e,t.id),r._webAudio&&!f&&(r._nodeById(t.id).paused=!0),r._webAudio||f||r.stop(t.id,t.timer),r.on("end",l)},1e3*a),r._onendTimer.push(s),t.timer=r._onendTimer[r._onendTimer.length-1]}(),r._webAudio){var c=r._sprite[e][0]/1e3,h=r._sprite[e][1]/1e3;i.id=l,i.paused=!1,p(r,[f,c,h],l),r._playStart=t.currentTime,i.gain.value=r._volume,void 0===i.bufferSource.start?i.bufferSource.noteGrainOn(0,o,a):i.bufferSource.start(0,o,a)}else{if(4!==i.readyState)return r._clearEndTimer(s),function(){var t=r,s=e,o=n,u=i,a=function(){t.play(s,o),u.removeEventListener("canplaythrough",a,!1)};u.addEventListener("canplaythrough",a,!1)}(),r;i.id=l,i.currentTime=o,i.muted=u._muted,i.volume=r._volume*u.volume(),setTimeout(function(){i.play()},0)}return r.on("play"),"function"==typeof n&&n(l),r}),r):("function"==typeof n&&n(),r):(r.on("load",function(){r.play(e,n)}),r)},pause:function(e,t){var n=this;if(!n._loaded)return n.on("play",function(){n.pause(e)}),n;n._clearEndTimer(t||0);var r=e?n._nodeById(e):n._activeNode();if(r)if(r._pos=n.pos(null,e),n._webAudio){if(!r.bufferSource)return n;r.paused=!0,void 0===r.bufferSource.stop?r.bufferSource.noteOff(0):r.bufferSource.stop(0)}else r.pause();return n.on("pause"),n},stop:function(e,t){var n=this;if(!n._loaded)return n.on("play",function(){n.stop(e)}),n;n._clearEndTimer(t||0);var r=e?n._nodeById(e):n._activeNode();if(r)if(r._pos=0,n._webAudio){if(!r.bufferSource)return n;r.paused=!0,void 0===r.bufferSource.stop?r.bufferSource.noteOff(0):r.bufferSource.stop(0)}else r.pause(),r.currentTime=0;return n},mute:function(e){var t=this;if(!t._loaded)return t.on("play",function(){t.mute(e)}),t;var n=e?t._nodeById(e):t._activeNode();return n&&(t._webAudio?n.gain.value=0:n.volume=0),t},unmute:function(e){var t=this;if(!t._loaded)return t.on("play",function(){t.unmute(e)}),t;var n=e?t._nodeById(e):t._activeNode();return n&&(t._webAudio?n.gain.value=t._volume:n.volume=t._volume),t},volume:function(e,t){var n=this;if(e=parseFloat(e),e>=0&&1>=e){if(n._volume=e,!n._loaded)return n.on("play",function(){n.volume(e,t)}),n;var r=t?n._nodeById(t):n._activeNode();return r&&(n._webAudio?r.gain.value=e:r.volume=e*u.volume()),n}return n._volume},loop:function(e){var t=this;return"boolean"==typeof e?(t._loop=e,t):t._loop},sprite:function(e){var t=this;return"object"==typeof e?(t._sprite=e,t):t._sprite},pos:function(e,n){var r=this;if(!r._loaded)return r.on("load",function(){r.pos(e)}),"number"==typeof e?r:r._pos||0;e=parseFloat(e);var i=n?r._nodeById(n):r._activeNode();if(i)return r._webAudio?e>=0?(i._pos=e,r.pause(n).play(i._sprite,n),r):i._pos+(t.currentTime-r._playStart):e>=0?(i.currentTime=e,r):i.currentTime;if(e>=0)return r;for(var s=0;s<r._audioNode.length;s++)if(r._audioNode[s].paused&&4===r._audioNode[s].readyState)return r._webAudio?r._audioNode[s]._pos:r._audioNode[s].currentTime},pos3d:function(e,t,n,r){var i=this;if(t=void 0!==t&&t?t:0,n=void 0!==n&&n?n:-.5,!i._loaded)return i.on("play",function(){i.pos3d(e,t,n,r)}),i;if(!(e>=0||0>e))return i._pos3d;if(i._webAudio){var s=r?i._nodeById(r):i._activeNode();s&&(i._pos3d=[e,t,n],s.panner.setPosition(e,t,n))}return i},fade:function(e,t,n,r,i){var s=this,o=Math.abs(e-t),u=e>t?"down":"up",a=o/.01,f=n/a;if(!s._loaded)return s.on("load",function(){s.fade(e,t,n,r,i)}),s;s.volume(e,i);for(var l=1;a>=l;l++)!function(){var e=s._volume+("up"===u?.01:-.01)*l,n=Math.round(1e3*e)/1e3,o=t;setTimeout(function(){s.volume(n,i),n===o&&r&&r()},f*l)}()},fadeIn:function(e,t,n){return this.volume(0).play().fade(0,e,t,n)},fadeOut:function(e,t,n,r){var i=this;return i.fade(i._volume,e,t,function(){n&&n(),i.pause(r),i.on("end")},r)},_nodeById:function(e){for(var t=this,n=t._audioNode[0],r=0;r<t._audioNode.length;r++)if(t._audioNode[r].id===e){n=t._audioNode[r];break}return n},_activeNode:function(){for(var e=this,t=null,n=0;n<e._audioNode.length;n++)if(!e._audioNode[n].paused){t=e._audioNode[n];break}return e._drainPool(),t},_inactiveNode:function(e){for(var t=this,n=null,r=0;r<t._audioNode.length;r++)if(t._audioNode[r].paused&&4===t._audioNode[r].readyState){e(t._audioNode[r]),n=!0;break}if(t._drainPool(),!n){var i;t._webAudio?(i=t._setupAudioNode(),e(i)):(t.load(),i=t._audioNode[t._audioNode.length-1],i.addEventListener("loadedmetadata",function(){e(i)}))}},_drainPool:function(){var e,t=this,n=0;for(e=0;e<t._audioNode.length;e++)t._audioNode[e].paused&&n++;for(e=t._audioNode.length-1;e>=0&&!(5>=n);e--)t._audioNode[e].paused&&(t._webAudio&&t._audioNode[e].disconnect(0),n--,t._audioNode.splice(e,1))},_clearEndTimer:function(e){var t=this,n=t._onendTimer.indexOf(e);n=n>=0?n:0,t._onendTimer[n]&&(clearTimeout(t._onendTimer[n]),t._onendTimer.splice(n,1))},_setupAudioNode:function(){var e=this,n=e._audioNode,r=e._audioNode.length;return n[r]=void 0===t.createGain?t.createGainNode():t.createGain(),n[r].gain.value=e._volume,n[r].paused=!0,n[r]._pos=0,n[r].readyState=4,n[r].connect(s),n[r].panner=t.createPanner(),n[r].panner.setPosition(e._pos3d[0],e._pos3d[1],e._pos3d[2]),n[r].panner.connect(n[r]),n[r]},on:function(e,t){var n=this,r=n["_on"+e];if("function"==typeof t)r.push(t);else for(var i=0;i<r.length;i++)t?r[i].call(n,t):r[i].call(n);return n},off:function(e,t){for(var n=this,r=n["_on"+e],i=""+t,s=0;s<r.length;s++)if(i===""+r[s]){r.splice(s,1);break}return n},unload:function(){for(var t=this,n=t._audioNode,r=0;r<t._audioNode.length;r++)t.stop(n[r].id),t._webAudio?n[r].disconnect(0):n[r].src="";var i=u._howls.indexOf(t);i&&u._howls.splice(i,1),delete e[t._src],t=null}},n)var c=function(n,r){if(r in e)n._duration=e[r].duration,h(n);else{var i=new XMLHttpRequest;i.open("GET",r,!0),i.responseType="arraybuffer",i.onload=function(){t.decodeAudioData(i.response,function(t){t&&(e[r]=t,h(n,t))})},i.onerror=function(){n._webAudio&&(n._buffer=!0,n._webAudio=!1,n._audioNode=[],delete n._gainNode,n.load())};try{i.send()}catch(s){i.onerror()}}},h=function(e,t){e._duration=t?t.duration:e._duration,0===Object.getOwnPropertyNames(e._sprite).length&&(e._sprite={_default:[0,1e3*e._duration]}),e._loaded||(e._loaded=!0,e.on("load")),e._autoplay&&e.play()},p=function(n,r,i){var s=n._nodeById(i);s.bufferSource=t.createBufferSource(),s.bufferSource.buffer=e[n._src],s.bufferSource.connect(s.panner),s.bufferSource.loop=r[0],r[0]&&(s.bufferSource.loopStart=r[1],s.bufferSource.loopEnd=r[1]+r[2]),s.bufferSource.playbackRate.value=n._rate};"function"==typeof define&&define.amd&&define('HOWLER',[],function(){return{Howler:u,Howl:l}}),window.Howler=u,window.Howl=l}();
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define('PIXI',[],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.PIXI=t()}}(function(){var t;return function e(t,r,i){function n(s,a){if(!r[s]){if(!t[s]){var h="function"==typeof require&&require;if(!a&&h)return h(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=r[s]={exports:{}};t[s][0].call(u.exports,function(e){var r=t[s][1][e];return n(r?r:e)},u,u.exports,e,t,r,i)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e){var r=e.exports=t("./core");r.extras=t("./extras"),r.filters=t("./filters"),r.interaction=t("./interaction"),r.loaders=t("./loaders"),r.spine=t("./spine"),r.text=t("./text"),r.Text=r.text.Text,r.Point=r.math.Point,r.Rectangle=r.math.Rectangle,r.Matrix=r.math.Matrix,r.blendModes=r.CONST.BLEND_MODES;var i=0;r.Circle=r.math.Circle,r.loaders.Loader.prototype.addList=function(t){for(var e=0;e<t.length;e++)this.add(i++ +"_",t[e])},r.Sprite.prototype.setTexture=function(t){this.texture=t},r.Text.prototype.setText=function(t){this.text=t}},{"./core":20,"./extras":76,"./filters":90,"./interaction":105,"./loaders":109,"./spine":115,"./text":118}],2:[function(e,r){(function(e){!function(){function i(t){var e=!1;return function(){if(e)throw new Error("Callback was already called.");e=!0,t.apply(n,arguments)}}var n,o,s={};n=this,null!=n&&(o=n.async),s.noConflict=function(){return n.async=o,s};var a=Object.prototype.toString,h=Array.isArray||function(t){return"[object Array]"===a.call(t)},l=function(t,e){if(t.forEach)return t.forEach(e);for(var r=0;r<t.length;r+=1)e(t[r],r,t)},u=function(t,e){if(t.map)return t.map(e);var r=[];return l(t,function(t,i,n){r.push(e(t,i,n))}),r},c=function(t,e,r){return t.reduce?t.reduce(e,r):(l(t,function(t,i,n){r=e(r,t,i,n)}),r)},d=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e};"undefined"!=typeof e&&e.nextTick?(s.nextTick=e.nextTick,s.setImmediate="undefined"!=typeof setImmediate?function(t){setImmediate(t)}:s.nextTick):"function"==typeof setImmediate?(s.nextTick=function(t){setImmediate(t)},s.setImmediate=s.nextTick):(s.nextTick=function(t){setTimeout(t,0)},s.setImmediate=s.nextTick),s.each=function(t,e,r){function n(e){e?(r(e),r=function(){}):(o+=1,o>=t.length&&r())}if(r=r||function(){},!t.length)return r();var o=0;l(t,function(t){e(t,i(n))})},s.forEach=s.each,s.eachSeries=function(t,e,r){if(r=r||function(){},!t.length)return r();var i=0,n=function(){e(t[i],function(e){e?(r(e),r=function(){}):(i+=1,i>=t.length?r():n())})};n()},s.forEachSeries=s.eachSeries,s.eachLimit=function(t,e,r,i){var n=p(e);n.apply(null,[t,r,i])},s.forEachLimit=s.eachLimit;var p=function(t){return function(e,r,i){if(i=i||function(){},!e.length||0>=t)return i();var n=0,o=0,s=0;!function a(){if(n>=e.length)return i();for(;t>s&&o<e.length;)o+=1,s+=1,r(e[o-1],function(t){t?(i(t),i=function(){}):(n+=1,s-=1,n>=e.length?i():a())})}()}},f=function(t){return function(){var e=Array.prototype.slice.call(arguments);return t.apply(null,[s.each].concat(e))}},v=function(t,e){return function(){var r=Array.prototype.slice.call(arguments);return e.apply(null,[p(t)].concat(r))}},g=function(t){return function(){var e=Array.prototype.slice.call(arguments);return t.apply(null,[s.eachSeries].concat(e))}},m=function(t,e,r,i){if(e=u(e,function(t,e){return{index:e,value:t}}),i){var n=[];t(e,function(t,e){r(t.value,function(r,i){n[t.index]=i,e(r)})},function(t){i(t,n)})}else t(e,function(t,e){r(t.value,function(t){e(t)})})};s.map=f(m),s.mapSeries=g(m),s.mapLimit=function(t,e,r,i){return y(e)(t,r,i)};var y=function(t){return v(t,m)};s.reduce=function(t,e,r,i){s.eachSeries(t,function(t,i){r(e,t,function(t,r){e=r,i(t)})},function(t){i(t,e)})},s.inject=s.reduce,s.foldl=s.reduce,s.reduceRight=function(t,e,r,i){var n=u(t,function(t){return t}).reverse();s.reduce(n,e,r,i)},s.foldr=s.reduceRight;var x=function(t,e,r,i){var n=[];e=u(e,function(t,e){return{index:e,value:t}}),t(e,function(t,e){r(t.value,function(r){r&&n.push(t),e()})},function(){i(u(n.sort(function(t,e){return t.index-e.index}),function(t){return t.value}))})};s.filter=f(x),s.filterSeries=g(x),s.select=s.filter,s.selectSeries=s.filterSeries;var b=function(t,e,r,i){var n=[];e=u(e,function(t,e){return{index:e,value:t}}),t(e,function(t,e){r(t.value,function(r){r||n.push(t),e()})},function(){i(u(n.sort(function(t,e){return t.index-e.index}),function(t){return t.value}))})};s.reject=f(b),s.rejectSeries=g(b);var T=function(t,e,r,i){t(e,function(t,e){r(t,function(r){r?(i(t),i=function(){}):e()})},function(){i()})};s.detect=f(T),s.detectSeries=g(T),s.some=function(t,e,r){s.each(t,function(t,i){e(t,function(t){t&&(r(!0),r=function(){}),i()})},function(){r(!1)})},s.any=s.some,s.every=function(t,e,r){s.each(t,function(t,i){e(t,function(t){t||(r(!1),r=function(){}),i()})},function(){r(!0)})},s.all=s.every,s.sortBy=function(t,e,r){s.map(t,function(t,r){e(t,function(e,i){e?r(e):r(null,{value:t,criteria:i})})},function(t,e){if(t)return r(t);var i=function(t,e){var r=t.criteria,i=e.criteria;return i>r?-1:r>i?1:0};r(null,u(e.sort(i),function(t){return t.value}))})},s.auto=function(t,e){e=e||function(){};var r=d(t),i=r.length;if(!i)return e();var n={},o=[],a=function(t){o.unshift(t)},u=function(t){for(var e=0;e<o.length;e+=1)if(o[e]===t)return void o.splice(e,1)},p=function(){i--,l(o.slice(0),function(t){t()})};a(function(){if(!i){var t=e;e=function(){},t(null,n)}}),l(r,function(r){var i=h(t[r])?t[r]:[t[r]],o=function(t){var i=Array.prototype.slice.call(arguments,1);if(i.length<=1&&(i=i[0]),t){var o={};l(d(n),function(t){o[t]=n[t]}),o[r]=i,e(t,o),e=function(){}}else n[r]=i,s.setImmediate(p)},f=i.slice(0,Math.abs(i.length-1))||[],v=function(){return c(f,function(t,e){return t&&n.hasOwnProperty(e)},!0)&&!n.hasOwnProperty(r)};if(v())i[i.length-1](o,n);else{var g=function(){v()&&(u(g),i[i.length-1](o,n))};a(g)}})},s.retry=function(t,e,r){var i=5,n=[];"function"==typeof t&&(r=e,e=t,t=i),t=parseInt(t,10)||i;var o=function(i,o){for(var a=function(t,e){return function(r){t(function(t,i){r(!t||e,{err:t,result:i})},o)}};t;)n.push(a(e,!(t-=1)));s.series(n,function(t,e){e=e[e.length-1],(i||r)(e.err,e.result)})};return r?o():o},s.waterfall=function(t,e){if(e=e||function(){},!h(t)){var r=new Error("First argument to waterfall must be an array of functions");return e(r)}if(!t.length)return e();var i=function(t){return function(r){if(r)e.apply(null,arguments),e=function(){};else{var n=Array.prototype.slice.call(arguments,1),o=t.next();n.push(o?i(o):e),s.setImmediate(function(){t.apply(null,n)})}}};i(s.iterator(t))()};var _=function(t,e,r){if(r=r||function(){},h(e))t.map(e,function(t,e){t&&t(function(t){var r=Array.prototype.slice.call(arguments,1);r.length<=1&&(r=r[0]),e.call(null,t,r)})},r);else{var i={};t.each(d(e),function(t,r){e[t](function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),i[t]=n,r(e)})},function(t){r(t,i)})}};s.parallel=function(t,e){_({map:s.map,each:s.each},t,e)},s.parallelLimit=function(t,e,r){_({map:y(e),each:p(e)},t,r)},s.series=function(t,e){if(e=e||function(){},h(t))s.mapSeries(t,function(t,e){t&&t(function(t){var r=Array.prototype.slice.call(arguments,1);r.length<=1&&(r=r[0]),e.call(null,t,r)})},e);else{var r={};s.eachSeries(d(t),function(e,i){t[e](function(t){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),r[e]=n,i(t)})},function(t){e(t,r)})}},s.iterator=function(t){var e=function(r){var i=function(){return t.length&&t[r].apply(null,arguments),i.next()};return i.next=function(){return r<t.length-1?e(r+1):null},i};return e(0)},s.apply=function(t){var e=Array.prototype.slice.call(arguments,1);return function(){return t.apply(null,e.concat(Array.prototype.slice.call(arguments)))}};var E=function(t,e,r,i){var n=[];t(e,function(t,e){r(t,function(t,r){n=n.concat(r||[]),e(t)})},function(t){i(t,n)})};s.concat=f(E),s.concatSeries=g(E),s.whilst=function(t,e,r){t()?e(function(i){return i?r(i):void s.whilst(t,e,r)}):r()},s.doWhilst=function(t,e,r){t(function(i){if(i)return r(i);var n=Array.prototype.slice.call(arguments,1);e.apply(null,n)?s.doWhilst(t,e,r):r()})},s.until=function(t,e,r){t()?r():e(function(i){return i?r(i):void s.until(t,e,r)})},s.doUntil=function(t,e,r){t(function(i){if(i)return r(i);var n=Array.prototype.slice.call(arguments,1);e.apply(null,n)?r():s.doUntil(t,e,r)})},s.queue=function(t,e){function r(t,e,r,i){return t.started||(t.started=!0),h(e)||(e=[e]),0==e.length?s.setImmediate(function(){t.drain&&t.drain()}):void l(e,function(e){var n={data:e,callback:"function"==typeof i?i:null};r?t.tasks.unshift(n):t.tasks.push(n),t.saturated&&t.tasks.length===t.concurrency&&t.saturated(),s.setImmediate(t.process)})}void 0===e&&(e=1);var n=0,o={tasks:[],concurrency:e,saturated:null,empty:null,drain:null,started:!1,paused:!1,push:function(t,e){r(o,t,!1,e)},kill:function(){o.drain=null,o.tasks=[]},unshift:function(t,e){r(o,t,!0,e)},process:function(){if(!o.paused&&n<o.concurrency&&o.tasks.length){var e=o.tasks.shift();o.empty&&0===o.tasks.length&&o.empty(),n+=1;var r=function(){n-=1,e.callback&&e.callback.apply(e,arguments),o.drain&&o.tasks.length+n===0&&o.drain(),o.process()},s=i(r);t(e.data,s)}},length:function(){return o.tasks.length},running:function(){return n},idle:function(){return o.tasks.length+n===0},pause:function(){o.paused!==!0&&(o.paused=!0,o.process())},resume:function(){o.paused!==!1&&(o.paused=!1,o.process())}};return o},s.priorityQueue=function(t,e){function r(t,e){return t.priority-e.priority}function i(t,e,r){for(var i=-1,n=t.length-1;n>i;){var o=i+(n-i+1>>>1);r(e,t[o])>=0?i=o:n=o-1}return i}function n(t,e,n,o){return t.started||(t.started=!0),h(e)||(e=[e]),0==e.length?s.setImmediate(function(){t.drain&&t.drain()}):void l(e,function(e){var a={data:e,priority:n,callback:"function"==typeof o?o:null};t.tasks.splice(i(t.tasks,a,r)+1,0,a),t.saturated&&t.tasks.length===t.concurrency&&t.saturated(),s.setImmediate(t.process)})}var o=s.queue(t,e);return o.push=function(t,e,r){n(o,t,e,r)},delete o.unshift,o},s.cargo=function(t,e){var r=!1,i=[],n={tasks:i,payload:e,saturated:null,empty:null,drain:null,drained:!0,push:function(t,r){h(t)||(t=[t]),l(t,function(t){i.push({data:t,callback:"function"==typeof r?r:null}),n.drained=!1,n.saturated&&i.length===e&&n.saturated()}),s.setImmediate(n.process)},process:function o(){if(!r){if(0===i.length)return n.drain&&!n.drained&&n.drain(),void(n.drained=!0);var s="number"==typeof e?i.splice(0,e):i.splice(0,i.length),a=u(s,function(t){return t.data});n.empty&&n.empty(),r=!0,t(a,function(){r=!1;var t=arguments;l(s,function(e){e.callback&&e.callback.apply(null,t)}),o()})}},length:function(){return i.length},running:function(){return r}};return n};var S=function(t){return function(e){var r=Array.prototype.slice.call(arguments,1);e.apply(null,r.concat([function(e){var r=Array.prototype.slice.call(arguments,1);"undefined"!=typeof console&&(e?console.error&&console.error(e):console[t]&&l(r,function(e){console[t](e)}))}]))}};s.log=S("log"),s.dir=S("dir"),s.memoize=function(t,e){var r={},i={};e=e||function(t){return t};var n=function(){var n=Array.prototype.slice.call(arguments),o=n.pop(),a=e.apply(null,n);a in r?s.nextTick(function(){o.apply(null,r[a])}):a in i?i[a].push(o):(i[a]=[o],t.apply(null,n.concat([function(){r[a]=arguments;var t=i[a];delete i[a];for(var e=0,n=t.length;n>e;e++)t[e].apply(null,arguments)}])))};return n.memo=r,n.unmemoized=t,n},s.unmemoize=function(t){return function(){return(t.unmemoized||t).apply(null,arguments)}},s.times=function(t,e,r){for(var i=[],n=0;t>n;n++)i.push(n);return s.map(i,e,r)},s.timesSeries=function(t,e,r){for(var i=[],n=0;t>n;n++)i.push(n);return s.mapSeries(i,e,r)},s.seq=function(){var t=arguments;return function(){var e=this,r=Array.prototype.slice.call(arguments),i=r.pop();s.reduce(t,r,function(t,r,i){r.apply(e,t.concat([function(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);i(t,e)}]))},function(t,r){i.apply(e,[t].concat(r))})}},s.compose=function(){return s.seq.apply(null,Array.prototype.reverse.call(arguments))};var w=function(t,e){var r=function(){var r=this,i=Array.prototype.slice.call(arguments),n=i.pop();return t(e,function(t,e){t.apply(r,i.concat([e]))},n)};if(arguments.length>2){var i=Array.prototype.slice.call(arguments,2);return r.apply(this,i)}return r};s.applyEach=f(w),s.applyEachSeries=g(w),s.forever=function(t,e){function r(i){if(i){if(e)return e(i);throw i}t(r)}r()},"undefined"!=typeof r&&r.exports?r.exports=s:"undefined"!=typeof t&&t.amd?t([],function(){return s}):n.async=s}()}).call(this,e("_process"))},{_process:4}],3:[function(t,e,r){(function(t){function e(t,e){for(var r=0,i=t.length-1;i>=0;i--){var n=t[i];"."===n?t.splice(i,1):".."===n?(t.splice(i,1),r++):r&&(t.splice(i,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function i(t,e){if(t.filter)return t.filter(e);for(var r=[],i=0;i<t.length;i++)e(t[i],i,t)&&r.push(t[i]);return r}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return n.exec(t).slice(1)};r.resolve=function(){for(var r="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(r=s+"/"+r,n="/"===s.charAt(0))}return r=e(i(r.split("/"),function(t){return!!t}),!n).join("/"),(n?"/":"")+r||"."},r.normalize=function(t){var n=r.isAbsolute(t),o="/"===s(t,-1);return t=e(i(t.split("/"),function(t){return!!t}),!n).join("/"),t||n||(t="."),t&&o&&(t+="/"),(n?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(i(t,function(t){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},r.relative=function(t,e){function i(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=r.resolve(t).substr(1),e=r.resolve(e).substr(1);for(var n=i(t.split("/")),o=i(e.split("/")),s=Math.min(n.length,o.length),a=s,h=0;s>h;h++)if(n[h]!==o[h]){a=h;break}for(var l=[],h=a;h<n.length;h++)l.push("..");return l=l.concat(o.slice(a)),l.join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){var e=o(t),r=e[0],i=e[1];return r||i?(i&&(i=i.substr(0,i.length-1)),r+i):"."},r.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},r.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return 0>e&&(e=t.length+e),t.substr(e,r)}}).call(this,t("_process"))},{_process:4}],4:[function(t,e){function r(){if(!s){s=!0;for(var t,e=o.length;e;){t=o,o=[];for(var r=-1;++r<e;)t[r]();e=o.length}s=!1}}function i(){}var n=e.exports={},o=[],s=!1;n.nextTick=function(t){o.push(t),s||setTimeout(r,0)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.on=i,n.addListener=i,n.once=i,n.off=i,n.removeListener=i,n.removeAllListeners=i,n.emit=i,n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},{}],5:[function(e,r,i){!function(){function e(){this._events={},this._conf&&r.call(this,this._conf)}function r(t){t&&(this._conf=t,t.delimiter&&(this.delimiter=t.delimiter),t.maxListeners&&(this._events.maxListeners=t.maxListeners),t.wildcard&&(this.wildcard=t.wildcard),t.newListener&&(this.newListener=t.newListener),this.wildcard&&(this.listenerTree={}))}function n(t){this._events={},this.newListener=!1,r.call(this,t)}function o(t,e,r,i){if(!r)return[];var n,s,a,h,l,u,c,d=[],p=e.length,f=e[i],v=e[i+1];if(i===p&&r._listeners){if("function"==typeof r._listeners)return t&&t.push(r._listeners),[r];for(n=0,s=r._listeners.length;s>n;n++)t&&t.push(r._listeners[n]);return[r]}if("*"===f||"**"===f||r[f]){if("*"===f){for(a in r)"_listeners"!==a&&r.hasOwnProperty(a)&&(d=d.concat(o(t,e,r[a],i+1)));return d}if("**"===f){c=i+1===p||i+2===p&&"*"===v,c&&r._listeners&&(d=d.concat(o(t,e,r,p)));for(a in r)"_listeners"!==a&&r.hasOwnProperty(a)&&("*"===a||"**"===a?(r[a]._listeners&&!c&&(d=d.concat(o(t,e,r[a],p))),d=d.concat(o(t,e,r[a],i))):d=d.concat(a===v?o(t,e,r[a],i+2):o(t,e,r[a],i)));return d}d=d.concat(o(t,e,r[f],i+1))}if(h=r["*"],h&&o(t,e,h,i+1),l=r["**"])if(p>i){l._listeners&&o(t,e,l,p);for(a in l)"_listeners"!==a&&l.hasOwnProperty(a)&&(a===v?o(t,e,l[a],i+2):a===f?o(t,e,l[a],i+1):(u={},u[a]=l[a],o(t,e,{"**":u},i+1)))}else l._listeners?o(t,e,l,p):l["*"]&&l["*"]._listeners&&o(t,e,l["*"],p);return d}function s(t,e){t="string"==typeof t?t.split(this.delimiter):t.slice();for(var r=0,i=t.length;i>r+1;r++)if("**"===t[r]&&"**"===t[r+1])return;for(var n=this.listenerTree,o=t.shift();o;){if(n[o]||(n[o]={}),n=n[o],0===t.length){if(n._listeners){if("function"==typeof n._listeners)n._listeners=[n._listeners,e];else if(a(n._listeners)&&(n._listeners.push(e),!n._listeners.warned)){var s=h;"undefined"!=typeof this._events.maxListeners&&(s=this._events.maxListeners),s>0&&n._listeners.length>s&&(n._listeners.warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",n._listeners.length),console.trace())}}else n._listeners=e;return!0}o=t.shift()}return!0}var a=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},h=10;n.prototype.delimiter=".",n.prototype.setMaxListeners=function(t){this._events||e.call(this),this._events.maxListeners=t,this._conf||(this._conf={}),this._conf.maxListeners=t},n.prototype.event="",n.prototype.once=function(t,e){return this.many(t,1,e),this},n.prototype.many=function(t,e,r){function i(){0===--e&&n.off(t,i),r.apply(this,arguments)}var n=this;if("function"!=typeof r)throw new Error("many only accepts instances of Function");return i._origin=r,this.on(t,i),n},n.prototype.emit=function(){this._events||e.call(this);var t=arguments[0];if("newListener"===t&&!this.newListener&&!this._events.newListener)return!1;if(this._all){for(var r=arguments.length,i=new Array(r-1),n=1;r>n;n++)i[n-1]=arguments[n];for(n=0,r=this._all.length;r>n;n++)this.event=t,this._all[n].apply(this,i)}if("error"===t&&!(this._all||this._events.error||this.wildcard&&this.listenerTree.error))throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");var s;if(this.wildcard){s=[];var a="string"==typeof t?t.split(this.delimiter):t.slice();o.call(this,s,a,this.listenerTree,0)}else s=this._events[t];if("function"==typeof s){if(this.event=t,1===arguments.length)s.call(this);else if(arguments.length>1)switch(arguments.length){case 2:s.call(this,arguments[1]);break;case 3:s.call(this,arguments[1],arguments[2]);break;default:for(var r=arguments.length,i=new Array(r-1),n=1;r>n;n++)i[n-1]=arguments[n];s.apply(this,i)}return!0}if(s){for(var r=arguments.length,i=new Array(r-1),n=1;r>n;n++)i[n-1]=arguments[n];for(var h=s.slice(),n=0,r=h.length;r>n;n++)this.event=t,h[n].apply(this,i);return h.length>0||!!this._all}return!!this._all},n.prototype.on=function(t,r){if("function"==typeof t)return this.onAny(t),this;if("function"!=typeof r)throw new Error("on only accepts instances of Function");if(this._events||e.call(this),this.emit("newListener",t,r),this.wildcard)return s.call(this,t,r),this;if(this._events[t]){if("function"==typeof this._events[t])this._events[t]=[this._events[t],r];else if(a(this._events[t])&&(this._events[t].push(r),!this._events[t].warned)){var i=h;"undefined"!=typeof this._events.maxListeners&&(i=this._events.maxListeners),i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),console.trace())}}else this._events[t]=r;return this},n.prototype.onAny=function(t){if("function"!=typeof t)throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),this._all.push(t),this},n.prototype.addListener=n.prototype.on,n.prototype.off=function(t,e){if("function"!=typeof e)throw new Error("removeListener only takes instances of Function");var r,i=[];if(this.wildcard){var n="string"==typeof t?t.split(this.delimiter):t.slice();i=o.call(this,null,n,this.listenerTree,0)}else{if(!this._events[t])return this;r=this._events[t],i.push({_listeners:r})}for(var s=0;s<i.length;s++){var h=i[s];if(r=h._listeners,a(r)){for(var l=-1,u=0,c=r.length;c>u;u++)if(r[u]===e||r[u].listener&&r[u].listener===e||r[u]._origin&&r[u]._origin===e){l=u;break}if(0>l)continue;return this.wildcard?h._listeners.splice(l,1):this._events[t].splice(l,1),0===r.length&&(this.wildcard?delete h._listeners:delete this._events[t]),this}(r===e||r.listener&&r.listener===e||r._origin&&r._origin===e)&&(this.wildcard?delete h._listeners:delete this._events[t])}return this},n.prototype.offAny=function(t){var e,r=0,i=0;if(t&&this._all&&this._all.length>0){for(e=this._all,r=0,i=e.length;i>r;r++)if(t===e[r])return e.splice(r,1),this}else this._all=[];return this},n.prototype.removeListener=n.prototype.off,n.prototype.removeAllListeners=function(t){if(0===arguments.length)return!this._events||e.call(this),this;if(this.wildcard)for(var r="string"==typeof t?t.split(this.delimiter):t.slice(),i=o.call(this,null,r,this.listenerTree,0),n=0;n<i.length;n++){var s=i[n];s._listeners=null}else{if(!this._events[t])return this;this._events[t]=null}return this},n.prototype.listeners=function(t){if(this.wildcard){var r=[],i="string"==typeof t?t.split(this.delimiter):t.slice();return o.call(this,r,i,this.listenerTree,0),r}return this._events||e.call(this),this._events[t]||(this._events[t]=[]),a(this._events[t])||(this._events[t]=[this._events[t]]),this._events[t]},n.prototype.listenersAny=function(){return this._all?this._all:[]},"function"==typeof t&&t.amd?t(function(){return n}):"object"==typeof i?i.EventEmitter2=n:window.EventEmitter2=n}()},{}],6:[function(t,e){function r(t,e){o.call(this),e=e||10,this.baseUrl=t||"",this.progress=0,this.loading=!1,this._progressChunk=0,this._beforeMiddleware=[],this._afterMiddleware=[],this._boundLoadResource=this.loadResource.bind(this),this._boundOnComplete=this._onComplete.bind(this),this._buffer=[],this.queue=i.queue(this._boundLoadResource,e),this.resources={}}var i=t("async"),n=t("./Resource"),o=t("eventemitter2").EventEmitter2;r.prototype=Object.create(o.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.add=r.prototype.enqueue=function(t,e,r,i){if("function"==typeof r&&(i=r,r=null),this.resources[t])throw new Error('Resource with name "'+t+'" already exists.');return this.resources[t]=new n(t,this.baseUrl+e,r),"function"==typeof i&&this.resources[t].once("afterMiddleware",i),this.queue.started?(this.queue.push(this.resources[t]),this._progressChunk=(100-this.progress)/(this.queue.length()+this.queue.running())):(this._buffer.push(this.resources[t]),this._progressChunk=100/this._buffer.length),this},r.prototype.before=r.prototype.pre=function(t){return this._beforeMiddleware.push(t),this},r.prototype.after=r.prototype.use=function(t){return this._afterMiddleware.push(t),this},r.prototype.reset=function(){this._buffer.length=0,this.queue.kill(),this.queue.started=!1,this.progress=0,this._progressChunk=0,this.loading=!1},r.prototype.load=function(t){if("function"==typeof t&&this.once("complete",t),this.queue.started)return this;this.queue.drain=this._boundOnComplete,this.emit("start",this);for(var e=0;e<this._buffer.length;++e)this.queue.push(this._buffer[e]);return this._buffer.length=0,this},r.prototype.loadResource=function(t,e){var r=this;this._runMiddleware(t,this._beforeMiddleware,function(){t.once("complete",r._onLoad.bind(r,t,e)),t.load()})},r.prototype._onComplete=function(){this.emit("complete",this,this.resources)},r.prototype._onLoad=function(t,e){this.progress+=this._progressChunk,this.emit("progress",this,t),t.error?this.emit("error",t.error,this,t):this.emit("load",this,t),this._runMiddleware(t,this._afterMiddleware,function(){t.emit("afterMiddleware",t),e&&e()})},r.prototype._runMiddleware=function(t,e,r){var n=this;i.eachSeries(e,function(e,r){e.call(n,t,r)},r.bind(this,t))},r.LOAD_TYPE=n.LOAD_TYPE,r.XHR_READY_STATE=n.XHR_READY_STATE,r.XHR_RESPONSE_TYPE=n.XHR_RESPONSE_TYPE},{"./Resource":7,async:2,eventemitter2:5}],7:[function(t,e){function r(t,e,i){if(n.call(this),i=i||{},"string"!=typeof t||"string"!=typeof e)throw new Error("Both name and url are required for constructing a resource.");this.name=t,this.url=e,this.data=null,this.crossOrigin=i.crossOrigin,this.loadType=i.loadType||r.LOAD_TYPE.XHR,this.xhrType=i.xhrType,this.error=null,this.xhr=null,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this._boundXdrOnTimeout=this._xdrOnTimeout.bind(this)}function i(t){return t.toString().replace("object ","")}var n=t("eventemitter2").EventEmitter2,o=!(!window.XDomainRequest||"withCredentials"in new XMLHttpRequest);r.prototype=Object.create(n.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.complete=function(){this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError),this.data.removeEventListener("load",this._boundComplete),this.data.removeEventListener("progress",this._boundOnProgress),this.data.removeEventListener("canplaythrough",this._boundComplete)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError),this.xhr.removeEventListener("abort",this._boundXhrOnAbort),this.xhr.removeEventListener("progress",this._boundOnProgress),this.xhr.removeEventListener("load",this._boundXhrOnLoad)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null)),this.emit("complete",this)},r.prototype.load=function(){switch(this.emit("start",this),"string"!=typeof this.crossOrigin&&(this.crossOrigin=this._determineCrossOrigin()),this.loadType){case r.LOAD_TYPE.IMAGE:this._loadImage();break;case r.LOAD_TYPE.AUDIO:this._loadElement("audio");break;case r.LOAD_TYPE.VIDEO:this._loadElement("video");break;case r.LOAD_TYPE.XHR:default:o?this._loadXdr():this._loadXhr()}},r.prototype._loadImage=function(){this.data=new Image,this.crossOrigin&&(this.data.crossOrigin=""),this.data.src=this.url,this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1)},r.prototype._loadElement=function(t){if(this.data=document.createElement(t),Array.isArray(this.url))for(var e=0;e<this.url.length;++e)this.data.appendChild(this._createSource(t,this.url[e]));else this.data.appendChild(this._createSource(t,this.url));this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load()},r.prototype._loadXhr=function(){"string"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XMLHttpRequest;t.open("GET",this.url,!0),t.responseType=this.xhrType,t.addEventListener("error",this._boundXhrOnError,!1),t.addEventListener("abort",this._boundXhrOnAbort,!1),t.addEventListener("progress",this._boundOnProgress,!1),t.addEventListener("load",this._boundXhrOnLoad,!1),t.send()},r.prototype._loadXdr=function(){var t=this.xhr=new XDomainRequest;t.timeout=5e3,t.onerror=this._boundXhrOnError,t.ontimeout=this._boundXdrOnTimeout,t.onprogress=this._boundOnProgress,t.onload=this._boundXhrOnLoad},r.prototype._createSource=function(t,e,r){r||(r=t+"/"+e.substr(e.lastIndexOf(".")+1));var i=document.createElement("source");return i.src=e,i.type=r,i},r.prototype._onError=function(t){this.error=new Error("Failed to load element using "+t.target.nodeName),this.complete()},r.prototype._onProgress=function(t){t.lengthComputable&&this.emit("progress",this,t.loaded/t.total)},r.prototype._xhrOnError=function(t){this.error=new Error(i(t.target)+" Request failed. Status: "+t.target.status+', text: "'+t.target.statusText+'"'),this.complete()},r.prototype._xhrOnAbort=function(t){this.error=new Error(i(t.target)+" Request was aborted by the user."),this.complete()},r.prototype._xdrOnTimeout=function(t){this.error=new Error(i(t.target)+" Request timed out."),this.complete()},r.prototype._xhrOnLoad=function(t){var e=t.target;200===e.status?this.data=this.xhrType===r.XHR_RESPONSE_TYPE.TEXT?e.responseText:this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT?e.responseXML||e.response:e.response:this.error=new Error(e.responseText),this.complete()},r.prototype._determineCrossOrigin=function(){if(0===this.url.indexOf("data:"))return"";var t=window.location,e=document.createElement("a");return e.href=this.url,e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""},r.prototype._determineXhrType=function(){var t=this.url.substr(this.url.lastIndexOf(".")+1);switch(t){case"xhtml":case"html":case"htm":case"xml":case"tmx":case"tsx":case"svg":return r.XHR_RESPONSE_TYPE.DOCUMENT;case"gif":case"png":case"jpg":case"jpeg":case"tif":case"tiff":case"webp":return r.XHR_RESPONSE_TYPE.BLOB;case"json":return r.XHR_RESPONSE_TYPE.JSON;case"text":case"txt":default:return r.XHR_RESPONSE_TYPE.TEXT}},r.prototype._getMimeFromXhrType=function(t){switch(t){case r.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case r.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case r.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case r.XHR_RESPONSE_TYPE.JSON:return"application/json";case r.XHR_RESPONSE_TYPE.DEFAULT:case r.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},r.LOAD_TYPE={XHR:1,IMAGE:2,AUDIO:3,VIDEO:4},r.XHR_READY_STATE={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},r.XHR_RESPONSE_TYPE={DEFAULT:"text",BUFFER:"arraybuffer",BLOB:"blob",DOCUMENT:"document",JSON:"json",TEXT:"text"}},{eventemitter2:5}],8:[function(t,e){e.exports=t("./Loader"),e.exports.Resource=t("./Resource"),e.exports.middleware={caching:{memory:t("./middlewares/caching/memory")},parsing:{json:t("./middlewares/parsing/json"),blob:t("./middlewares/parsing/blob")}}},{"./Loader":6,"./Resource":7,"./middlewares/caching/memory":9,"./middlewares/parsing/blob":10,"./middlewares/parsing/json":11}],9:[function(t,e){var r={};e.exports=function(){return function(t,e){r[t.url]?(t.data=r[t.url],t.complete()):(t.once("complete",function(){r[this.url]=this.data}),e())}}},{}],10:[function(t,e){var r=t("../../Resource");window.URL=window.URL||window.webkitURL,e.exports=function(){return function(t,e){if(t.xhr&&t.xhrType===r.XHR_RESPONSE_TYPE.BLOB){if(0===t.data.type.indexOf("image")){var i=URL.createObjectURL(t.data);t.data=new Image,t.data.src=i,t.data.onload=function(){URL.revokeObjectURL(i),t.data.onload=null,e()}}}else e()}}},{"../../Resource":7}],11:[function(t,e){e.exports=function(){return function(t,e){if("string"==typeof t.data)try{t.data=JSON.parse(t.data)}catch(r){}e()}}},{}],12:[function(t,e){e.exports={name:"pixi.js",version:"3.0.0",description:"Pixi.js is a fast lightweight 2D library that works across all devices.",author:"Mat Groves",contributors:["Chad Engler <chad@pantherdev.com>","Richard Davey <rdavey@gmail.com>"],main:"./src/index.js",homepage:"http://goodboydigital.com/",bugs:"https://github.com/GoodBoyDigital/pixi.js/issues",license:"MIT",repository:{type:"git",url:"https://github.com/GoodBoyDigital/pixi.js.git"},scripts:{test:"gulp test",docs:"./node_modules/.bin/jsdoc -c ./gulp/util/jsdoc.conf.json"},devDependencies:{brfs:"^1.2.0",browserify:"^8.0.2",chai:"^1.10.0",del:"^1.1.0",gulp:"^3.8.10","gulp-cached":"^1.0.1","gulp-jshint":"^1.9.0","gulp-plumber":"^0.6.6","gulp-rename":"^1.2.0","gulp-uglify":"^1.0.2","gulp-util":"^3.0.1","ink-docstrap":"^0.4.12",jsdoc:"^3.3.0-alpha13","jshint-summary":"^0.4.0",karma:"^0.12.28","karma-firefox-launcher":"^0.1.0","karma-mocha":"^0.1.10","karma-spec-reporter":"^0.0.16",minimist:"^1.1.0",mocha:"^2.1.0","require-dir":"^0.1.0","run-sequence":"^1.0.2","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.0.0",watchify:"^2.2.1"},dependencies:{async:"^0.9.0","resource-loader":"^1.1.4"},browserify:{transform:["brfs"]}}
},{}],13:[function(t,e){e.exports={VERSION:t("../../package.json").version,RENDERER_TYPE:{UNKNOWN:0,WEBGL:1,CANVAS:2},BLEND_MODES:{NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},SCALE_MODES:{DEFAULT:0,LINEAR:0,NEAREST:1},RETINA_PREFIX:/@(.+)x/,RESOLUTION:1,DEFAULT_RENDER_OPTIONS:{view:null,resolution:1,antialias:!1,autoResize:!1,transparent:!1,backgroundColor:0,clearBeforeRender:!0,preserveDrawingBuffer:!1},SHAPES:{POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4},SPRITE_BATCH_SIZE:2e3}},{"../../package.json":12}],14:[function(t,e){function r(){n.call(this),this.children=[]}var i=t("../math"),n=t("./DisplayObject"),o=t("../textures/RenderTexture"),s=new i.Matrix;r.prototype=Object.create(n.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{width:{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var e=this.getLocalBounds().width;this.scale.x=0!==e?t/e:1,this._width=t}},height:{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var e=this.getLocalBounds().height;this.scale.y=0!==e?t/e:1,this._height=t}}}),r.prototype.addChild=function(t){return this.addChildAt(t,this.children.length)},r.prototype.addChildAt=function(t,e){if(t===this)return t;if(e>=0&&e<=this.children.length)return t.parent&&t.parent.removeChild(t),t.parent=this,this.children.splice(e,0,t),t;throw new Error(t+"addChildAt: The index "+e+" supplied is out of bounds "+this.children.length)},r.prototype.swapChildren=function(t,e){if(t!==e){var r=this.getChildIndex(t),i=this.getChildIndex(e);if(0>r||0>i)throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");this.children[r]=e,this.children[i]=t}},r.prototype.getChildIndex=function(t){var e=this.children.indexOf(t);if(-1===e)throw new Error("The supplied DisplayObject must be a child of the caller");return e},r.prototype.setChildIndex=function(t,e){if(0>e||e>=this.children.length)throw new Error("The supplied index is out of bounds");var r=this.getChildIndex(t);this.children.splice(r,1),this.children.splice(e,0,t)},r.prototype.getChildAt=function(t){if(0>t||t>=this.children.length)throw new Error("getChildAt: Supplied index "+t+" does not exist in the child list, or the supplied DisplayObject must be a child of the caller");return this.children[t]},r.prototype.removeChild=function(t){var e=this.children.indexOf(t);if(-1!==e)return this.removeChildAt(e)},r.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return e.parent=null,this.children.splice(t,1),e},r.prototype.removeChildren=function(t,e){var r=t||0,i="number"==typeof e?e:this.children.length,n=i-r;if(n>0&&i>=n){for(var o=this.children.splice(r,n),s=0;s<o.length;++s)o[s].parent=null;return o}if(0===n&&0===this.children.length)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},r.prototype.generateTexture=function(t,e,r){var i=this.getLocalBounds(),n=new o(t,0|i.width,0|i.height,t,r,e);return s.tx=-i.x,s.ty=-i.y,n.render(this,s),n},r.prototype.updateTransform=function(){if(this.visible){this.displayObjectUpdateTransform();for(var t=0,e=this.children.length;e>t;++t)this.children[t].updateTransform()}},r.prototype.containerUpdateTransform=r.prototype.updateTransform,r.prototype.getBounds=function(){if(!this._currentBounds){if(0===this.children.length)return i.Rectangle.EMPTY;for(var t,e,r,n=1/0,o=1/0,s=-1/0,a=-1/0,h=!1,l=0,u=this.children.length;u>l;++l){var c=this.children[l];c.visible&&(h=!0,t=this.children[l].getBounds(),n=n<t.x?n:t.x,o=o<t.y?o:t.y,e=t.width+t.x,r=t.height+t.y,s=s>e?s:e,a=a>r?a:r)}if(!h)return i.Rectangle.EMPTY;var d=this._bounds;d.x=n,d.y=o,d.width=s-n,d.height=a-o,this._currentBounds=d}return this._currentBounds},r.prototype.getLocalBounds=function(){var t=this.worldTransform;this.worldTransform=i.Matrix.IDENTITY;for(var e=0,r=this.children.length;r>e;++e)this.children[e].updateTransform();return this.worldTransform=t,this._currentBounds=null,this.getBounds()},r.prototype.renderWebGL=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable){var e,r;if(this._mask||this._filters){for(t.currentRenderer.flush(),this._filters&&t.filterManager.pushFilter(this,this._filters),this._mask&&t.maskManager.pushMask(this,this._mask),t.currentRenderer.start(),this._renderWebGL(t),e=0,r=this.children.length;r>e;e++)this.children[e].renderWebGL(t);t.currentRenderer.flush(),this._mask&&t.maskManager.popMask(this,this._mask),this._filters&&t.filterManager.popFilter(),t.currentRenderer.start()}else for(this._renderWebGL(t),e=0,r=this.children.length;r>e;++e)this.children[e].renderWebGL(t)}},r.prototype._renderWebGL=function(){},r.prototype.renderCanvas=function(t){if(this.visible&&!(this.alpha<=0)&&this.renderable){this._mask&&t.maskManager.pushMask(this._mask,t);for(var e=0,r=this.children.length;r>e;++e)this.children[e].renderCanvas(t);this._mask&&t.maskManager.popMask(t)}}},{"../math":23,"../textures/RenderTexture":60,"./DisplayObject":15}],15:[function(t,e){function r(){this.position=new i.Point,this.scale=new i.Point(1,1),this.pivot=new i.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.renderable=!0,this.parent=null,this.worldAlpha=1,this.worldTransform=new i.Matrix,this.filterArea=null,this._sr=0,this._cr=1,this._bounds=new i.Rectangle(0,0,1,1),this._currentBounds=null,this._mask=null,this._cacheAsBitmap=!1,this._cachedObject=null}var i=t("../math"),n=t("../utils"),o=t("../textures/RenderTexture"),s=new i.Matrix;r.prototype.constructor=r,n.eventTarget.mixin(r.prototype),e.exports=r,Object.defineProperties(r.prototype,{x:{get:function(){return this.position.x},set:function(t){this.position.x=t}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t}},worldVisible:{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0}},mask:{get:function(){return this._mask},set:function(t){this._mask&&(this._mask.renderable=!0),this._mask=t,this._mask&&(this._mask.renderable=!1)}},filters:{get:function(){return this._filters&&this._filters.slice()},set:function(t){this._filters=t&&t.slice()}}}),r.prototype.updateTransform=function(){var t,e,r,n,o,s,a=this.parent.worldTransform,h=this.worldTransform;this.rotation%i.PI_2?(this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation)),t=this._cr*this.scale.x,e=this._sr*this.scale.x,r=-this._sr*this.scale.y,n=this._cr*this.scale.y,o=this.position.x,s=this.position.y,(this.pivot.x||this.pivot.y)&&(o-=this.pivot.x*t+this.pivot.y*r,s-=this.pivot.x*e+this.pivot.y*n),h.a=t*a.a+e*a.c,h.b=t*a.b+e*a.d,h.c=r*a.a+n*a.c,h.d=r*a.b+n*a.d,h.tx=o*a.a+s*a.c+a.tx,h.ty=o*a.b+s*a.d+a.ty):(t=this.scale.x,n=this.scale.y,o=this.position.x-this.pivot.x*t,s=this.position.y-this.pivot.y*n,h.a=t*a.a,h.b=t*a.b,h.c=n*a.c,h.d=n*a.d,h.tx=o*a.a+s*a.c+a.tx,h.ty=o*a.b+s*a.d+a.ty),this.worldAlpha=this.alpha*this.parent.worldAlpha,this._currentBounds=null},r.prototype.displayObjectUpdateTransform=r.prototype.updateTransform,r.prototype.getBounds=function(){return i.Rectangle.EMPTY},r.prototype.getLocalBounds=function(){return this.getBounds(i.Matrix.IDENTITY)},r.prototype.toGlobal=function(t){return this.displayObjectUpdateTransform(),this.worldTransform.apply(t)},r.prototype.toLocal=function(t,e){return e&&(t=e.toGlobal(t)),this.displayObjectUpdateTransform(),this.worldTransform.applyInverse(t)},r.prototype.renderWebGL=function(){},r.prototype.renderCanvas=function(){},r.prototype.generateTexture=function(t,e,r){var i=this.getLocalBounds(),n=new o(t,0|i.width,0|i.height,t,r,e);return s.tx=-i.x,s.ty=-i.y,n.render(this,s),n}},{"../math":23,"../textures/RenderTexture":60,"../utils":68}],16:[function(t,e){function r(){i.call(this),this.fillAlpha=1,this.lineWidth=0,this.lineColor=0,this.graphicsData=[],this.tint=16777215,this.blendMode=u.BLEND_MODES.NORMAL,this.currentPath=null,this._webGL={},this.isMask=!1,this.boundsPadding=0,this._localBounds=new l.Rectangle(0,0,1,1),this.dirty=!0,this.glDirty=!1,this.cachedSpriteDirty=!1}var i=t("../display/Container"),n=t("../sprites/Sprite"),o=t("../textures/Texture"),s=t("../renderers/canvas/utils/CanvasBuffer"),a=t("../renderers/canvas/utils/CanvasGraphics"),h=t("./GraphicsData"),l=t("../math"),u=t("../const");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{}),h.prototype.clone=function(){var t=new r;t.renderable=this.renderable,t.fillAlpha=this.fillAlpha,t.lineWidth=this.lineWidth,t.lineColor=this.lineColor,t.tint=this.tint,t.blendMode=this.blendMode,t.isMask=this.isMask,t.boundsPadding=this.boundsPadding,t.dirty=this.dirty,t.glDirty=this.glDirty,t.cachedSpriteDirty=this.cachedSpriteDirty;for(var e=0;e<this.graphicsData.length;++e)t.graphicsData.push(this.graphicsData.clone());return t.currentPath=t.graphicsData[t.graphicsData.length-1],t.updateLocalBounds(),t},r.prototype.lineStyle=function(t,e,r){return this.lineWidth=t||0,this.lineColor=e||0,this.lineAlpha=arguments.length<3?1:r,this.currentPath&&(this.currentPath.shape.points.length?this.drawShape(new l.Polygon(this.currentPath.shape.points.slice(-2))):(this.currentPath.lineWidth=this.lineWidth,this.currentPath.lineColor=this.lineColor,this.currentPath.lineAlpha=this.lineAlpha)),this},r.prototype.moveTo=function(t,e){return this.drawShape(new l.Polygon([t,e])),this},r.prototype.lineTo=function(t,e){return this.currentPath.shape.points.push(t,e),this.dirty=!0,this},r.prototype.quadraticCurveTo=function(t,e,r,i){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var n,o,s=20,a=this.currentPath.shape.points;0===a.length&&this.moveTo(0,0);for(var h=a[a.length-2],l=a[a.length-1],u=0,c=1;s>=c;++c)u=c/s,n=h+(t-h)*u,o=l+(e-l)*u,a.push(n+(t+(r-t)*u-n)*u,o+(e+(i-e)*u-o)*u);return this.dirty=!0,this},r.prototype.bezierCurveTo=function(t,e,r,i,n,o){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);for(var s,a,h,l,u,c=20,d=this.currentPath.shape.points,p=d[d.length-2],f=d[d.length-1],v=0,g=1;c>=g;++g)v=g/c,s=1-v,a=s*s,h=a*s,l=v*v,u=l*v,d.push(h*p+3*a*v*t+3*s*l*r+u*n,h*f+3*a*v*e+3*s*l*i+u*o);return this.dirty=!0,this},r.prototype.arcTo=function(t,e,r,i,n){this.currentPath?0===this.currentPath.shape.points.length&&this.currentPath.shape.points.push(t,e):this.moveTo(t,e);var o=this.currentPath.shape.points,s=o[o.length-2],a=o[o.length-1],h=a-e,l=s-t,u=i-e,c=r-t,d=Math.abs(h*c-l*u);if(1e-8>d||0===n)(o[o.length-2]!==t||o[o.length-1]!==e)&&o.push(t,e);else{var p=h*h+l*l,f=u*u+c*c,v=h*u+l*c,g=n*Math.sqrt(p)/d,m=n*Math.sqrt(f)/d,y=g*v/p,x=m*v/f,b=g*c+m*l,T=g*u+m*h,_=l*(m+y),E=h*(m+y),S=c*(g+x),w=u*(g+x),A=Math.atan2(E-T,_-b),C=Math.atan2(w-T,S-b);this.arc(b+t,T+e,n,A,C,l*u>c*h)}return this.dirty=!0,this},r.prototype.arc=function(t,e,r,i,n,o){var s,a=t+Math.cos(i)*r,h=e+Math.sin(i)*r;if(this.currentPath?(s=this.currentPath.shape.points,0===s.length?s.push(a,h):(s[s.length-2]!==a||s[s.length-1]!==h)&&s.push(a,h)):(this.moveTo(a,h),s=this.currentPath.shape.points),i===n)return this;!o&&i>=n?n+=2*Math.PI:o&&n>=i&&(i+=2*Math.PI);var l=o?-1*(i-n):n-i,u=40*Math.ceil(Math.abs(l)/(2*Math.PI));if(0===l)return this;for(var c=l/(2*u),d=2*c,p=Math.cos(c),f=Math.sin(c),v=u-1,g=v%1/v,m=0;v>=m;m++){var y=m+g*m,x=c+i+d*y,b=Math.cos(x),T=-Math.sin(x);s.push((p*b+f*T)*r+t,(p*-T+f*b)*r+e)}return this.dirty=!0,this},r.prototype.beginFill=function(t,e){return this.filling=!0,this.fillColor=t||0,this.fillAlpha=void 0===e?1:e,this.currentPath&&this.currentPath.shape.points.length<=2&&(this.currentPath.fill=this.filling,this.currentPath.fillColor=this.fillColor,this.currentPath.fillAlpha=this.fillAlpha),this},r.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},r.prototype.drawRect=function(t,e,r,i){return this.drawShape(new l.Rectangle(t,e,r,i)),this},r.prototype.drawRoundedRect=function(t,e,r,i,n){return this.drawShape(new l.RoundedRectangle(t,e,r,i,n)),this},r.prototype.drawCircle=function(t,e,r){return this.drawShape(new l.Circle(t,e,r)),this},r.prototype.drawEllipse=function(t,e,r,i){return this.drawShape(new l.Ellipse(t,e,r,i)),this},r.prototype.drawPolygon=function(t){return t instanceof Array||(t=Array.prototype.slice.call(arguments)),this.drawShape(new l.Polygon(t)),this},r.prototype.clear=function(){return this.lineWidth=0,this.filling=!1,this.dirty=!0,this.clearDirty=!0,this.graphicsData=[],this},r.prototype.generateTexture=function(t,e){t=t||1;var r=this.getBounds(),i=new s(r.width*t,r.height*t),n=o.fromCanvas(i.canvas,e);return n.baseTexture.resolution=t,i.context.scale(t,t),i.context.translate(-r.x,-r.y),a.renderGraphics(this,i.context),n},r.prototype._renderWebGL=function(t){this.glDirty&&(this.dirty=!0,this.glDirty=!1),t.setObjectRenderer(t.plugins.graphics),t.plugins.graphics.render(this)},r.prototype.renderCanvas=function(t){if(this.visible&&!(this.alpha<=0)&&this.isMask!==!0&&this.renderable){if(this._cacheAsBitmap)return(this.dirty||this.cachedSpriteDirty)&&(this._generateCachedSprite(),this.updateCachedSpriteTexture(),this.cachedSpriteDirty=!1,this.dirty=!1),this._cachedSprite.alpha=this.alpha,void n.prototype.renderCanvas.call(this._cachedSprite,t);var e=t.context,r=this.worldTransform;this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,e.globalCompositeOperation=t.blendModes[t.currentBlendMode]),this._mask&&t.maskManager.pushMask(this._mask,t);var i=t.resolution;e.setTransform(r.a*i,r.b*i,r.c*i,r.d*i,r.tx*i,r.ty*i),a.renderGraphics(this,e);for(var o=0,s=this.children.length;s>o;++o)this.children[o].renderCanvas(t);this._mask&&t.maskManager.popMask(t)}},r.prototype.getBounds=function(t){if(!this._currentBounds){if(!this.renderable)return l.Rectangle.EMPTY;this.dirty&&(this.updateLocalBounds(),this.glDirty=!0,this.cachedSpriteDirty=!0,this.dirty=!1);var e=this._localBounds,r=e.x,i=e.width+e.x,n=e.y,o=e.height+e.y,s=t||this.worldTransform,a=s.a,h=s.b,u=s.c,c=s.d,d=s.tx,p=s.ty,f=a*i+u*o+d,v=c*o+h*i+p,g=a*r+u*o+d,m=c*o+h*r+p,y=a*r+u*n+d,x=c*n+h*r+p,b=a*i+u*n+d,T=c*n+h*i+p,_=f,E=v,S=f,w=v;S=S>g?g:S,S=S>y?y:S,S=S>b?b:S,w=w>m?m:w,w=w>x?x:w,w=w>T?T:w,_=g>_?g:_,_=y>_?y:_,_=b>_?b:_,E=m>E?m:E,E=x>E?x:E,E=T>E?T:E,this._bounds.x=S,this._bounds.width=_-S,this._bounds.y=w,this._bounds.height=E-w,this._currentBounds=this._bounds}return this._currentBounds},r.prototype.updateLocalBounds=function(){var t=1/0,e=-1/0,r=1/0,i=-1/0;if(this.graphicsData.length)for(var n,o,s,a,h,l,c=0;c<this.graphicsData.length;c++){var d=this.graphicsData[c],p=d.type,f=d.lineWidth;if(n=d.shape,p===u.SHAPES.RECT||p===u.SHAPES.RREC)s=n.x-f/2,a=n.y-f/2,h=n.width+f,l=n.height+f,t=t>s?s:t,e=s+h>e?s+h:e,r=r>a?a:r,i=a+l>i?a+l:i;else if(p===u.SHAPES.CIRC)s=n.x,a=n.y,h=n.radius+f/2,l=n.radius+f/2,t=t>s-h?s-h:t,e=s+h>e?s+h:e,r=r>a-l?a-l:r,i=a+l>i?a+l:i;else if(p===u.SHAPES.ELIP)s=n.x,a=n.y,h=n.width+f/2,l=n.height+f/2,t=t>s-h?s-h:t,e=s+h>e?s+h:e,r=r>a-l?a-l:r,i=a+l>i?a+l:i;else{o=n.points;for(var v=0;v<o.length;v+=2)s=o[v],a=o[v+1],t=t>s-f?s-f:t,e=s+f>e?s+f:e,r=r>a-f?a-f:r,i=a+f>i?a+f:i}}else t=0,e=0,r=0,i=0;var g=this.boundsPadding;this._localBounds.x=t-g,this._localBounds.width=e-t+2*g,this._localBounds.y=r-g,this._localBounds.height=i-r+2*g},r.prototype.drawShape=function(t){this.currentPath&&this.currentPath.shape.points.length<=2&&this.graphicsData.pop(),this.currentPath=null;var e=new h(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,t);return this.graphicsData.push(e),e.type===u.SHAPES.POLY&&(e.shape.closed=this.filling,this.currentPath=e),this.dirty=!0,e}},{"../const":13,"../display/Container":14,"../math":23,"../renderers/canvas/utils/CanvasBuffer":35,"../renderers/canvas/utils/CanvasGraphics":36,"../sprites/Sprite":57,"../textures/Texture":61,"./GraphicsData":17}],17:[function(t,e){function r(t,e,r,i,n,o,s){this.lineWidth=t,this.lineColor=e,this.lineAlpha=r,this._lineTint=e,this.fillColor=i,this.fillAlpha=n,this._fillTint=i,this.fill=o,this.shape=s,this.type=s.type}r.prototype.constructor=r,e.exports=r,r.prototype.clone=function(){return new r(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)}},{}],18:[function(t,e){function r(t){s.call(this,t),this.graphicsDataPool=[],this.primitiveShader=null,this.complexPrimitiveShader=null}var i=t("../../utils"),n=t("../../math"),o=t("../../const"),s=t("../../renderers/webgl/utils/ObjectRenderer"),a=t("../../renderers/webgl/WebGLRenderer"),h=t("./WebGLGraphicsData");r.prototype=Object.create(s.prototype),r.prototype.constructor=r,e.exports=r,a.registerPlugin("graphics",r),r.prototype.onContextChange=function(){},r.prototype.destroy=function(){s.prototype.destroy.call(this),this.graphicsDataPool=null},r.prototype.render=function(t){var e,r=this.renderer,n=r.gl,o=r.shaderManager.plugins.primitiveShader;t.dirty&&this.updateGraphics(t,n);var s=t._webGL[n.id];r.blendModeManager.setBlendMode(t.blendMode);for(var a=0;a<s.data.length;a++)1===s.data[a].mode?(e=s.data[a],r.stencilManager.pushStencil(t,e,r),n.drawElements(n.TRIANGLE_FAN,4,n.UNSIGNED_SHORT,2*(e.indices.length-4)),r.stencilManager.popStencil(t,e,r)):(e=s.data[a],o=r.shaderManager.primitiveShader,r.shaderManager.setShader(o),n.uniformMatrix3fv(o.uniforms.translationMatrix._location,!1,t.worldTransform.toArray(!0)),n.uniformMatrix3fv(o.uniforms.projectionMatrix._location,!1,r.currentRenderTarget.projectionMatrix.toArray(!0)),n.uniform3fv(o.uniforms.tint._location,i.hex2rgb(t.tint)),n.uniform1f(o.uniforms.alpha._location,t.worldAlpha),n.bindBuffer(n.ARRAY_BUFFER,e.buffer),n.vertexAttribPointer(o.attributes.aVertexPosition,2,n.FLOAT,!1,24,0),n.vertexAttribPointer(o.attributes.aColor,4,n.FLOAT,!1,24,8),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.indexBuffer),n.drawElements(n.TRIANGLE_STRIP,e.indices.length,n.UNSIGNED_SHORT,0))},r.prototype.updateGraphics=function(t){var e=this.renderer.gl,r=t._webGL[e.id];r||(r=t._webGL[e.id]={lastIndex:0,data:[],gl:e}),t.dirty=!1;var i;if(t.clearDirty){for(t.clearDirty=!1,i=0;i<r.data.length;i++){var n=r.data[i];n.reset(),this.graphicsDataPool.push(n)}r.data=[],r.lastIndex=0}var s;for(i=r.lastIndex;i<t.graphicsData.length;i++){var a=t.graphicsData[i];if(a.type===o.SHAPES.POLY){if(a.points=a.shape.points.slice(),a.shape.closed&&(a.points[0]!==a.points[a.points.length-2]||a.points[1]!==a.points[a.points.length-1])&&a.points.push(a.points[0],a.points[1]),a.fill&&a.points.length>=6)if(a.points.length<12){s=this.switchMode(r,0);var h=this.buildPoly(a,s);h||(s=this.switchMode(r,1),this.buildComplexPoly(a,s))}else s=this.switchMode(r,1),this.buildComplexPoly(a,s);a.lineWidth>0&&(s=this.switchMode(r,0),this.buildLine(a,s))}else s=this.switchMode(r,0),a.type===o.SHAPES.RECT?this.buildRectangle(a,s):a.type===o.SHAPES.CIRC||a.type===o.SHAPES.ELIP?this.buildCircle(a,s):a.type===o.SHAPES.RREC&&this.buildRoundedRectangle(a,s);r.lastIndex++}for(i=0;i<r.data.length;i++)s=r.data[i],s.dirty&&s.upload()},r.prototype.switchMode=function(t,e){var r;return t.data.length?(r=t.data[t.data.length-1],(r.points.length>32e4||r.mode!==e||1===e)&&(r=this.graphicsDataPool.pop()||new h(t.gl),r.mode=e,t.data.push(r))):(r=this.graphicsDataPool.pop()||new h(t.gl),r.mode=e,t.data.push(r)),r.dirty=!0,r},r.prototype.buildRectangle=function(t,e){var r=t.shape,n=r.x,o=r.y,s=r.width,a=r.height;if(t.fill){var h=i.hex2rgb(t.fillColor),l=t.fillAlpha,u=h[0]*l,c=h[1]*l,d=h[2]*l,p=e.points,f=e.indices,v=p.length/6;p.push(n,o),p.push(u,c,d,l),p.push(n+s,o),p.push(u,c,d,l),p.push(n,o+a),p.push(u,c,d,l),p.push(n+s,o+a),p.push(u,c,d,l),f.push(v,v,v+1,v+2,v+3,v+3)}if(t.lineWidth){var g=t.points;t.points=[n,o,n+s,o,n+s,o+a,n,o+a,n,o],this.buildLine(t,e),t.points=g}},r.prototype.buildRoundedRectangle=function(t,e){var r=t.shape,n=r.x,o=r.y,s=r.width,a=r.height,h=r.radius,l=[];if(l.push(n,o+h),l=l.concat(this.quadraticBezierCurve(n,o+a-h,n,o+a,n+h,o+a)),l=l.concat(this.quadraticBezierCurve(n+s-h,o+a,n+s,o+a,n+s,o+a-h)),l=l.concat(this.quadraticBezierCurve(n+s,o+h,n+s,o,n+s-h,o)),l=l.concat(this.quadraticBezierCurve(n+h,o,n,o,n,o+h)),t.fill){var u=i.hex2rgb(t.fillColor),c=t.fillAlpha,d=u[0]*c,p=u[1]*c,f=u[2]*c,v=e.points,g=e.indices,m=v.length/6,y=i.PolyK.Triangulate(l),x=0;for(x=0;x<y.length;x+=3)g.push(y[x]+m),g.push(y[x]+m),g.push(y[x+1]+m),g.push(y[x+2]+m),g.push(y[x+2]+m);for(x=0;x<l.length;x++)v.push(l[x],l[++x],d,p,f,c)}if(t.lineWidth){var b=t.points;t.points=l,this.buildLine(t,e),t.points=b}},r.prototype.quadraticBezierCurve=function(t,e,r,i,n,o){function s(t,e,r){var i=e-t;return t+i*r}for(var a,h,l,u,c,d,p=20,f=[],v=0,g=0;p>=g;g++)v=g/p,a=s(t,r,v),h=s(e,i,v),l=s(r,n,v),u=s(i,o,v),c=s(a,l,v),d=s(h,u,v),f.push(c,d);return f},r.prototype.buildCircle=function(t,e){var r,n,s=t.shape,a=s.x,h=s.y;t.type===o.SHAPES.CIRC?(r=s.radius,n=s.radius):(r=s.width,n=s.height);var l=40,u=2*Math.PI/l,c=0;if(t.fill){var d=i.hex2rgb(t.fillColor),p=t.fillAlpha,f=d[0]*p,v=d[1]*p,g=d[2]*p,m=e.points,y=e.indices,x=m.length/6;for(y.push(x),c=0;l+1>c;c++)m.push(a,h,f,v,g,p),m.push(a+Math.sin(u*c)*r,h+Math.cos(u*c)*n,f,v,g,p),y.push(x++,x++);y.push(x-1)}if(t.lineWidth){var b=t.points;for(t.points=[],c=0;l+1>c;c++)t.points.push(a+Math.sin(u*c)*r,h+Math.cos(u*c)*n);this.buildLine(t,e),t.points=b}},r.prototype.buildLine=function(t,e){var r=0,o=t.points;if(0!==o.length){if(t.lineWidth%2)for(r=0;r<o.length;r++)o[r]+=.5;var s=new n.Point(o[0],o[1]),a=new n.Point(o[o.length-2],o[o.length-1]);if(s.x===a.x&&s.y===a.y){o=o.slice(),o.pop(),o.pop(),a=new n.Point(o[o.length-2],o[o.length-1]);var h=a.x+.5*(s.x-a.x),l=a.y+.5*(s.y-a.y);o.unshift(h,l),o.push(h,l)}var u,c,d,p,f,v,g,m,y,x,b,T,_,E,S,w,A,C,R,M,D,O,P,F=e.points,L=e.indices,B=o.length/2,I=o.length,N=F.length/6,k=t.lineWidth/2,U=i.hex2rgb(t.lineColor),X=t.lineAlpha,j=U[0]*X,Y=U[1]*X,W=U[2]*X;for(d=o[0],p=o[1],f=o[2],v=o[3],y=-(p-v),x=d-f,P=Math.sqrt(y*y+x*x),y/=P,x/=P,y*=k,x*=k,F.push(d-y,p-x,j,Y,W,X),F.push(d+y,p+x,j,Y,W,X),r=1;B-1>r;r++)d=o[2*(r-1)],p=o[2*(r-1)+1],f=o[2*r],v=o[2*r+1],g=o[2*(r+1)],m=o[2*(r+1)+1],y=-(p-v),x=d-f,P=Math.sqrt(y*y+x*x),y/=P,x/=P,y*=k,x*=k,b=-(v-m),T=f-g,P=Math.sqrt(b*b+T*T),b/=P,T/=P,b*=k,T*=k,S=-x+p-(-x+v),w=-y+f-(-y+d),A=(-y+d)*(-x+v)-(-y+f)*(-x+p),C=-T+m-(-T+v),R=-b+f-(-b+g),M=(-b+g)*(-T+v)-(-b+f)*(-T+m),D=S*R-C*w,Math.abs(D)<.1?(D+=10.1,F.push(f-y,v-x,j,Y,W,X),F.push(f+y,v+x,j,Y,W,X)):(u=(w*M-R*A)/D,c=(C*A-S*M)/D,O=(u-f)*(u-f)+(c-v)+(c-v),O>19600?(_=y-b,E=x-T,P=Math.sqrt(_*_+E*E),_/=P,E/=P,_*=k,E*=k,F.push(f-_,v-E),F.push(j,Y,W,X),F.push(f+_,v+E),F.push(j,Y,W,X),F.push(f-_,v-E),F.push(j,Y,W,X),I++):(F.push(u,c),F.push(j,Y,W,X),F.push(f-(u-f),v-(c-v)),F.push(j,Y,W,X)));for(d=o[2*(B-2)],p=o[2*(B-2)+1],f=o[2*(B-1)],v=o[2*(B-1)+1],y=-(p-v),x=d-f,P=Math.sqrt(y*y+x*x),y/=P,x/=P,y*=k,x*=k,F.push(f-y,v-x),F.push(j,Y,W,X),F.push(f+y,v+x),F.push(j,Y,W,X),L.push(N),r=0;I>r;r++)L.push(N++);L.push(N-1)}},r.prototype.buildComplexPoly=function(t,e){var r=t.points.slice();if(!(r.length<6)){var n=e.indices;e.points=r,e.alpha=t.fillAlpha,e.color=i.hex2rgb(t.fillColor);for(var o,s,a=1/0,h=-1/0,l=1/0,u=-1/0,c=0;c<r.length;c+=2)o=r[c],s=r[c+1],a=a>o?o:a,h=o>h?o:h,l=l>s?s:l,u=s>u?s:u;r.push(a,l,h,l,h,u,a,u);var d=r.length/2;for(c=0;d>c;c++)n.push(c)}},r.prototype.buildPoly=function(t,e){var r=t.points;if(!(r.length<6)){var n=e.points,o=e.indices,s=r.length/2,a=i.hex2rgb(t.fillColor),h=t.fillAlpha,l=a[0]*h,u=a[1]*h,c=a[2]*h,d=i.PolyK.Triangulate(r);if(!d)return!1;var p=n.length/6,f=0;for(f=0;f<d.length;f+=3)o.push(d[f]+p),o.push(d[f]+p),o.push(d[f+1]+p),o.push(d[f+2]+p),o.push(d[f+2]+p);for(f=0;s>f;f++)n.push(r[2*f],r[2*f+1],l,u,c,h);return!0}}},{"../../const":13,"../../math":23,"../../renderers/webgl/WebGLRenderer":39,"../../renderers/webgl/utils/ObjectRenderer":53,"../../utils":68,"./WebGLGraphicsData":19}],19:[function(t,e){function r(t){this.gl=t,this.color=[0,0,0],this.points=[],this.indices=[],this.buffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),this.mode=1,this.alpha=1,this.dirty=!0}r.prototype.constructor=r,e.exports=r,r.prototype.reset=function(){this.points=[],this.indices=[]},r.prototype.upload=function(){var t=this.gl;this.glPoints=new Float32Array(this.points),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,this.glPoints,t.STATIC_DRAW),this.glIndicies=new Uint16Array(this.indices),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.glIndicies,t.STATIC_DRAW),this.dirty=!1}},{}],20:[function(t,e){function r(){try{if(!window.WebGLRenderingContext)return!1;var t=document.createElement("canvas"),e=t.getContext("webgl",s)||t.getContext("experimental-webgl",s);return!(!e||!e.getContextAttributes().stencil)}catch(r){return!1}}var i=e.exports={utils:t("./utils"),math:t("./math"),CONST:t("./const"),DisplayObject:t("./display/DisplayObject"),Container:t("./display/Container"),Stage:t("./display/Container"),DisplayObjectContainer:t("./display/Container"),Sprite:t("./sprites/Sprite"),ParticleContainer:t("./particles/ParticleContainer"),SpriteRenderer:t("./sprites/webgl/SpriteRenderer"),ParticleRenderer:t("./particles/webgl/ParticleRenderer"),Graphics:t("./graphics/Graphics"),GraphicsData:t("./graphics/GraphicsData"),GraphicsRenderer:t("./graphics/webgl/GraphicsRenderer"),Texture:t("./textures/Texture"),BaseTexture:t("./textures/BaseTexture"),RenderTexture:t("./textures/RenderTexture"),VideoBaseTexture:t("./textures/VideoBaseTexture"),CanvasRenderer:t("./renderers/canvas/CanvasRenderer"),CanvasGraphics:t("./renderers/canvas/utils/CanvasGraphics"),CanvasBuffer:t("./renderers/canvas/utils/CanvasBuffer"),WebGLRenderer:t("./renderers/webgl/WebGLRenderer"),ShaderManager:t("./renderers/webgl/managers/ShaderManager"),Shader:t("./renderers/webgl/shaders/Shader"),AbstractFilter:t("./renderers/webgl/filters/AbstractFilter"),autoDetectRenderer:function(t,e,n,o){return t=t||800,e=e||600,!o&&r()?new i.WebGLRenderer(t,e,n):new i.CanvasRenderer(t,e,n)}},n=t("./const");for(var o in n)i[o]=n[o];var s={stencil:!0}},{"./const":13,"./display/Container":14,"./display/DisplayObject":15,"./graphics/Graphics":16,"./graphics/GraphicsData":17,"./graphics/webgl/GraphicsRenderer":18,"./math":23,"./particles/ParticleContainer":29,"./particles/webgl/ParticleRenderer":31,"./renderers/canvas/CanvasRenderer":34,"./renderers/canvas/utils/CanvasBuffer":35,"./renderers/canvas/utils/CanvasGraphics":36,"./renderers/webgl/WebGLRenderer":39,"./renderers/webgl/filters/AbstractFilter":40,"./renderers/webgl/managers/ShaderManager":46,"./renderers/webgl/shaders/Shader":51,"./sprites/Sprite":57,"./sprites/webgl/SpriteRenderer":58,"./textures/BaseTexture":59,"./textures/RenderTexture":60,"./textures/Texture":61,"./textures/VideoBaseTexture":63,"./utils":68}],21:[function(t,e){function r(){this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0}var i=t("./Point");r.prototype.constructor=r,e.exports=r,r.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},r.prototype.toArray=function(t){this.array||(this.array=new Float32Array(9));var e=this.array;return t?(e[0]=this.a,e[1]=this.b,e[2]=0,e[3]=this.c,e[4]=this.d,e[5]=0,e[6]=this.tx,e[7]=this.ty,e[8]=1):(e[0]=this.a,e[1]=this.c,e[2]=this.tx,e[3]=this.b,e[4]=this.d,e[5]=this.ty,e[6]=0,e[7]=0,e[8]=1),e},r.prototype.apply=function(t,e){e=e||new i;var r=t.x,n=t.y;return e.x=this.a*r+this.c*n+this.tx,e.y=this.b*r+this.d*n+this.ty,e},r.prototype.applyInverse=function(t,e){e=e||new i;var r=1/(this.a*this.d+this.c*-this.b),n=t.x,o=t.y;return e.x=this.d*r*n+-this.c*r*o+(this.ty*this.c-this.tx*this.d)*r,e.y=this.a*r*o+-this.b*r*n+(-this.ty*this.a+this.tx*this.b)*r,e},r.prototype.translate=function(t,e){return this.tx+=t,this.ty+=e,this},r.prototype.scale=function(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},r.prototype.rotate=function(t){var e=Math.cos(t),r=Math.sin(t),i=this.a,n=this.c,o=this.tx;return this.a=i*e-this.b*r,this.b=i*r+this.b*e,this.c=n*e-this.d*r,this.d=n*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this},r.prototype.append=function(t){var e=this.a,r=this.b,i=this.c,n=this.d;return this.a=t.a*e+t.b*i,this.b=t.a*r+t.b*n,this.c=t.c*e+t.d*i,this.d=t.c*r+t.d*n,this.tx=t.tx*e+t.ty*i+this.tx,this.ty=t.tx*r+t.ty*n+this.ty,this},r.prototype.prepend=function(t){var e=this.tx;if(1!==t.a||0!==t.b||0!==t.c||1!==t.d){var r=this.a,i=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this},r.prototype.invert=function(){var t=this.a,e=this.b,r=this.c,i=this.d,n=this.tx,o=t*i-e*r;return this.a=i/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-i*n)/o,this.ty=-(t*this.ty-e*n)/o,this},r.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},r.prototype.clone=function(){var t=new r;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},r.prototype.copy=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},r.IDENTITY=new r,r.TEMP_MATRIX=new r},{"./Point":22}],22:[function(t,e){function r(t,e){this.x=t||0,this.y=e||0}r.prototype.constructor=r,e.exports=r,r.prototype.clone=function(){return new r(this.x,this.y)},r.prototype.set=function(t,e){this.x=t||0,this.y=e||(0!==e?this.x:0)}},{}],23:[function(t,e){e.exports={PI_2:2*Math.PI,RAD_TO_DEG:180/Math.PI,DEG_TO_RAD:Math.PI/180,Point:t("./Point"),Matrix:t("./Matrix"),Circle:t("./shapes/Circle"),Ellipse:t("./shapes/Ellipse"),Polygon:t("./shapes/Polygon"),Rectangle:t("./shapes/Rectangle"),RoundedRectangle:t("./shapes/RoundedRectangle")}},{"./Matrix":21,"./Point":22,"./shapes/Circle":24,"./shapes/Ellipse":25,"./shapes/Polygon":26,"./shapes/Rectangle":27,"./shapes/RoundedRectangle":28}],24:[function(t,e){function r(t,e,r){this.x=t||0,this.y=e||0,this.radius=r||0,this.type=n.SHAPES.CIRC}var i=t("./Rectangle"),n=t("../../const");r.prototype.constructor=r,e.exports=r,r.prototype.clone=function(){return new r(this.x,this.y,this.radius)},r.prototype.contains=function(t,e){if(this.radius<=0)return!1;var r=this.x-t,i=this.y-e,n=this.radius*this.radius;return r*=r,i*=i,n>=r+i},r.prototype.getBounds=function(){return new i(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)}},{"../../const":13,"./Rectangle":27}],25:[function(t,e){function r(t,e,r,i){this.x=t||0,this.y=e||0,this.width=r||0,this.height=i||0,this.type=n.SHAPES.ELIP}var i=t("./Rectangle"),n=t("../../const");r.prototype.constructor=r,e.exports=r,r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;var r=(t-this.x)/this.width,i=(e-this.y)/this.height;return r*=r,i*=i,1>=r+i},r.prototype.getBounds=function(){return new i(this.x-this.width,this.y-this.height,this.width,this.height)}},{"../../const":13,"./Rectangle":27}],26:[function(t,e){function r(t){if(t instanceof Array||(t=Array.prototype.slice.call(arguments)),t[0]instanceof i){for(var e=[],r=0,o=t.length;o>r;r++)e.push(t[r].x,t[r].y);t=e}this.closed=!0,this.points=t,this.type=n.SHAPES.POLY}var i=t("../Point"),n=t("../../const");r.prototype.constructor=r,e.exports=r,r.prototype.clone=function(){return new r(this.points.slice())},r.prototype.contains=function(t,e){for(var r=!1,i=this.points.length/2,n=0,o=i-1;i>n;o=n++){var s=this.points[2*n],a=this.points[2*n+1],h=this.points[2*o],l=this.points[2*o+1],u=a>e!=l>e&&(h-s)*(e-a)/(l-a)+s>t;u&&(r=!r)}return r}},{"../../const":13,"../Point":22}],27:[function(t,e){function r(t,e,r,n){this.x=t||0,this.y=e||0,this.width=r||0,this.height=n||0,this.type=i.SHAPES.RECT}var i=t("../../const");r.prototype.constructor=r,e.exports=r,r.EMPTY=new r(0,0,0,0),r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)
},r.prototype.contains=function(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height?!0:!1}},{"../../const":13}],28:[function(t,e){function r(t,e,r,n,o){this.x=t||0,this.y=e||0,this.width=r||0,this.height=n||0,this.radius=o||20,this.type=i.SHAPES.RREC}var i=t("../../const");r.prototype.constructor=r,e.exports=r,r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height,this.radius)},r.prototype.contains=function(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height?!0:!1}},{"../../const":13}],29:[function(t,e){function r(t,e){i.call(this),this._properties=e||[!1,!0,!1,!1,!1],this._size=t||15e3,this._buffers=null,this._updateStatic=!1,this.interactiveChildren=!1}var i=t("../display/Container");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},r.prototype.renderWebGL=function(t){this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable&&(t.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},r.prototype.addChildAt=function(t,e){if(t===this)return t;if(e>=0&&e<=this.children.length)return t.parent&&t.parent.removeChild(t),t.parent=this,this.children.splice(e,0,t),this._updateStatic=!0,t;throw new Error(t+"addChildAt: The index "+e+" supplied is out of bounds "+this.children.length)},r.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return e.parent=null,this.children.splice(t,1),this._updateStatic=!0,e},r.prototype.renderCanvas=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable){var e=t.context,r=this.worldTransform,i=!0;e.globalAlpha=this.worldAlpha,this.displayObjectUpdateTransform();for(var n=0;n<this.children.length;++n){var o=this.children[n];if(o.visible){var s=o.texture.frame;if(e.globalAlpha=this.worldAlpha*o.alpha,o.rotation%(2*Math.PI)===0)i&&(e.setTransform(r.a,r.b,r.c,r.d,r.tx,r.ty),i=!1),e.drawImage(o.texture.baseTexture.source,s.x,s.y,s.width,s.height,o.anchor.x*-s.width*o.scale.x+o.position.x+.5|0,o.anchor.y*-s.height*o.scale.y+o.position.y+.5|0,s.width*o.scale.x,s.height*o.scale.y);else{i||(i=!0),o.displayObjectUpdateTransform();var a=o.worldTransform;t.roundPixels?e.setTransform(a.a,a.b,a.c,a.d,0|a.tx,0|a.ty):e.setTransform(a.a,a.b,a.c,a.d,a.tx,a.ty),e.drawImage(o.texture.baseTexture.source,s.x,s.y,s.width,s.height,o.anchor.x*-s.width+.5|0,o.anchor.y*-s.height+.5|0,s.width,s.height)}}}}}},{"../display/Container":14}],30:[function(t,e){function r(t,e,r){this.gl=t,this.vertSize=2,this.vertByteSize=4*this.vertSize,this.size=r,this.dynamicProperties=[],this.staticProperties=[];for(var i=0;i<e.length;i++){var n=e[i];n.dynamic?this.dynamicProperties.push(n):this.staticProperties.push(n)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.initBuffers()}r.prototype.constructor=r,e.exports=r,r.prototype.initBuffers=function(){var t,e,r=this.gl,i=0;for(this.dynamicStride=0,t=0;t<this.dynamicProperties.length;t++)e=this.dynamicProperties[t],e.offset=i,i+=e.size,this.dynamicStride+=e.size;this.dynamicData=new Float32Array(this.size*this.dynamicStride*4),this.dynamicBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.dynamicBuffer),r.bufferData(r.ARRAY_BUFFER,this.dynamicData,r.DYNAMIC_DRAW);var n=0;for(this.staticStride=0,t=0;t<this.staticProperties.length;t++)e=this.staticProperties[t],e.offset=n,n+=e.size,this.staticStride+=e.size;this.staticData=new Float32Array(this.size*this.staticStride*4),this.staticBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.staticBuffer),r.bufferData(r.ARRAY_BUFFER,this.staticData,r.DYNAMIC_DRAW)},r.prototype.uploadDynamic=function(t,e,r){for(var i=this.gl,n=0;n<this.dynamicProperties.length;n++){var o=this.dynamicProperties[n];o.uploadFunction(t,e,r,this.dynamicData,this.dynamicStride,o.offset)}i.bindBuffer(i.ARRAY_BUFFER,this.dynamicBuffer),i.bufferSubData(i.ARRAY_BUFFER,0,this.dynamicData)},r.prototype.uploadStatic=function(t,e,r){for(var i=this.gl,n=0;n<this.staticProperties.length;n++){var o=this.staticProperties[n];o.uploadFunction(t,e,r,this.staticData,this.staticStride,o.offset)}i.bindBuffer(i.ARRAY_BUFFER,this.staticBuffer),i.bufferSubData(i.ARRAY_BUFFER,0,this.staticData)},r.prototype.bind=function(){var t,e,r=this.gl;for(r.bindBuffer(r.ARRAY_BUFFER,this.dynamicBuffer),t=0;t<this.dynamicProperties.length;t++)e=this.dynamicProperties[t],r.vertexAttribPointer(e.attribute,e.size,r.FLOAT,!1,4*this.dynamicStride,4*e.offset);for(r.bindBuffer(r.ARRAY_BUFFER,this.staticBuffer),t=0;t<this.staticProperties.length;t++)e=this.staticProperties[t],r.vertexAttribPointer(e.attribute,e.size,r.FLOAT,!1,4*this.staticStride,4*e.offset)},r.prototype.destroy=function(){}},{}],31:[function(t,e){function r(t){i.call(this,t),this.size=15e3;var e=6*this.size;this.indices=new Uint16Array(e);for(var r=0,n=0;e>r;r+=6,n+=4)this.indices[r+0]=n+0,this.indices[r+1]=n+1,this.indices[r+2]=n+2,this.indices[r+3]=n+0,this.indices[r+4]=n+2,this.indices[r+5]=n+3;this.shader=null,this.tempMatrix=new a.Matrix}var i=t("../../renderers/webgl/utils/ObjectRenderer"),n=t("../../renderers/webgl/WebGLRenderer"),o=t("./ParticleShader"),s=t("./ParticleBuffer"),a=t("../../math");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,n.registerPlugin("particle",r),r.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new o(this.renderer.shaderManager),this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW),this.properties=[{attribute:this.shader.attributes.aVertexPosition,dynamic:!1,size:2,uploadFunction:this.uploadVerticies,offset:0},{attribute:this.shader.attributes.aPositionCoord,dynamic:!0,size:2,uploadFunction:this.uploadPosition,offset:0},{attribute:this.shader.attributes.aRotation,dynamic:!1,size:1,uploadFunction:this.uploadRotation,offset:0},{attribute:this.shader.attributes.aTextureCoord,dynamic:!1,size:2,uploadFunction:this.uploadUvs,offset:0},{attribute:this.shader.attributes.aColor,dynamic:!1,size:1,uploadFunction:this.uploadAlpha,offset:0}]},r.prototype.start=function(){var t=this.renderer.gl;t.activeTexture(t.TEXTURE0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var e=this.shader;this.renderer.shaderManager.setShader(e)},r.prototype.render=function(t){var e=t.children,r=e.length,i=t._size;if(0!==r){r>i&&(r=i),t._buffers||(t._buffers=this.generateBuffers(t));var n=this.renderer.gl,o=t.worldTransform.copy(this.tempMatrix);o.prepend(this.renderer.currentRenderTarget.projectionMatrix),n.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location,!1,o.toArray(!0));var s=t._updateStatic,a=e[0]._texture.baseTexture;a._glTextures[n.id]?n.bindTexture(n.TEXTURE_2D,a._glTextures[n.id]):(this.renderer.updateTexture(a),this.properties[0].dynamic&&this.properties[3].dynamic||(s=!0));for(var h=0,l=0;r>l;l+=this.size){var u=r-l;u>this.size&&(u=this.size);var c=t._buffers[h++];c.uploadDynamic(e,l,u),s&&c.uploadStatic(e,l,u),c.bind(this.shader),n.drawElements(n.TRIANGLES,6*u,n.UNSIGNED_SHORT,0),this.renderer.drawCount++}t._updateStatic=!1}},r.prototype.generateBuffers=function(t){var e,r=this.renderer.gl,i=[],n=t._size;for(e=0;e<t._properties.length;e++)this.properties[e].dynamic=t._properties[e];for(e=0;n>e;e+=this.size)i.push(new s(r,this.properties,this.size,this.shader));return i},r.prototype.uploadVerticies=function(t,e,r,i,n,o){for(var s,a,h,l,u,c,d,p,f,v=0;r>v;v++)s=t[e+v],a=s._texture,l=s.scale.x,u=s.scale.y,a.trim?(h=a.trim,d=h.x-s.anchor.x*h.width,c=d+a.crop.width,f=h.y-s.anchor.y*h.height,p=f+a.crop.height):(c=a._frame.width*(1-s.anchor.x),d=a._frame.width*-s.anchor.x,p=a._frame.height*(1-s.anchor.y),f=a._frame.height*-s.anchor.y),i[o]=d*l,i[o+1]=f*u,i[o+n]=c*l,i[o+n+1]=f*u,i[o+2*n]=c*l,i[o+2*n+1]=p*u,i[o+3*n]=d*l,i[o+3*n+1]=p*u,o+=4*n},r.prototype.uploadPosition=function(t,e,r,i,n,o){for(var s=0;r>s;s++){var a=t[e+s].position;i[o]=a.x,i[o+1]=a.y,i[o+n]=a.x,i[o+n+1]=a.y,i[o+2*n]=a.x,i[o+2*n+1]=a.y,i[o+3*n]=a.x,i[o+3*n+1]=a.y,o+=4*n}},r.prototype.uploadRotation=function(t,e,r,i,n,o){for(var s=0;r>s;s++){var a=t[e+s].rotation;i[o]=a,i[o+n]=a,i[o+2*n]=a,i[o+3*n]=a,o+=4*n}},r.prototype.uploadUvs=function(t,e,r,i,n,o){for(var s=0;r>s;s++){var a=t[e+s]._texture._uvs;a?(i[o]=a.x0,i[o+1]=a.y0,i[o+n]=a.x1,i[o+n+1]=a.y1,i[o+2*n]=a.x2,i[o+2*n+1]=a.y2,i[o+3*n]=a.x3,i[o+3*n+1]=a.y3,o+=4*n):(i[o]=0,i[o+1]=0,i[o+n]=0,i[o+n+1]=0,i[o+2*n]=0,i[o+2*n+1]=0,i[o+3*n]=0,i[o+3*n+1]=0,o+=4*n)}},r.prototype.uploadAlpha=function(t,e,r,i,n,o){for(var s=0;r>s;s++){var a=t[e+s].alpha;i[o]=a,i[o+n]=a,i[o+2*n]=a,i[o+3*n]=a,o+=4*n}},r.prototype.destroy=function(){this.shader.destroy()}},{"../../math":23,"../../renderers/webgl/WebGLRenderer":39,"../../renderers/webgl/utils/ObjectRenderer":53,"./ParticleBuffer":30,"./ParticleShader":32}],32:[function(t,e){function r(t){i.call(this,t,["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","varying float vColor;","void main(void){","   vec2 v = aVertexPosition;","   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);","   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);","   v = v + aPositionCoord;","   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"].join("\n"),null,{aPositionCoord:0,aRotation:0})}var i=t("../../renderers/webgl/shaders/TextureShader");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r},{"../../renderers/webgl/shaders/TextureShader":52}],33:[function(t,e){function r(t,e,r,s){if(i.sayHello(t),s)for(var a in o.DEFAULT_RENDER_OPTIONS)"undefined"==typeof s[a]&&(s[a]=o.DEFAULT_RENDER_OPTIONS[a]);else s=o.DEFAULT_RENDER_OPTIONS;this.type=o.RENDERER_TYPE.UNKNOWN,this.width=e||800,this.height=r||600,this.view=s.view||document.createElement("canvas"),this.resolution=s.resolution,this.transparent=s.transparent,this.autoResize=s.autoResize||!1,this.blendModes=null,this.preserveDrawingBuffer=s.preserveDrawingBuffer,this.clearBeforeRender=s.clearBeforeRender,this._backgroundColor=16777215,this._backgroundColorRgb=[1,1,1],this._backgroundColorString="#000000",this.backgroundColor=s.backgroundColor||this._backgroundColor,this._tempDisplayObjectParent={worldTransform:new n.Matrix,worldAlpha:1,children:[]},this._lastObjectRendered=this._tempDisplayObjectParent}var i=t("../utils"),n=t("../math"),o=t("../const");r.prototype.constructor=r,e.exports=r,i.eventTarget.mixin(r.prototype),Object.defineProperties(r.prototype,{backgroundColor:{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=i.hex2string(t),i.hex2rgb(t,this._backgroundColorRgb)}}}),r.prototype.resize=function(t,e){this.width=t*this.resolution,this.height=e*this.resolution,this.view.width=this.width,this.view.height=this.height,this.autoResize&&(this.view.style.width=this.width/this.resolution+"px",this.view.style.height=this.height/this.resolution+"px")},r.prototype.destroy=function(t){t&&this.view.parent&&this.view.parent.removeChild(this.view),this.type=o.RENDERER_TYPE.UNKNOWN,this.width=0,this.height=0,this.view=null,this.resolution=0,this.transparent=!1,this.autoResize=!1,this.blendModes=null,this.preserveDrawingBuffer=!1,this.clearBeforeRender=!1,this._backgroundColor=0,this._backgroundColorRgb=null,this._backgroundColorString=null}},{"../const":13,"../math":23,"../utils":68}],34:[function(t,e){function r(t,e,r){i.call(this,"Canvas",t,e,r),this.type=a.RENDERER_TYPE.CANVAS,this.context=this.view.getContext("2d",{alpha:this.transparent}),this.refresh=!0,this.maskManager=new n,this.roundPixels=!1,this.currentScaleMode=a.SCALE_MODES.DEFAULT,this.currentBlendMode=a.BLEND_MODES.NORMAL,this.smoothProperty="imageSmoothingEnabled",this.context.imageSmoothingEnabled||(this.context.webkitImageSmoothingEnabled?this.smoothProperty="webkitImageSmoothingEnabled":this.context.mozImageSmoothingEnabled?this.smoothProperty="mozImageSmoothingEnabled":this.context.oImageSmoothingEnabled?this.smoothProperty="oImageSmoothingEnabled":this.context.msImageSmoothingEnabled&&(this.smoothProperty="msImageSmoothingEnabled")),this.initPlugins(),this._mapBlendModes(),this._tempDisplayObjectParent={worldTransform:new s.Matrix,worldAlpha:1},this.resize(t,e)}var i=t("../SystemRenderer"),n=t("./utils/CanvasMaskManager"),o=t("../../utils"),s=t("../../math"),a=t("../../const");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,o.pluginTarget.mixin(r),r.prototype.render=function(t){var e=t.parent;this._lastObjectRendered=t,t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=e,this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,this.currentBlendMode=a.BLEND_MODES.NORMAL,this.context.globalCompositeOperation=this.blendModes[a.BLEND_MODES.NORMAL],navigator.isCocoonJS&&this.view.screencanvas&&(this.context.fillStyle="black",this.context.clear()),this.clearBeforeRender&&(this.transparent?this.context.clearRect(0,0,this.width,this.height):(this.context.fillStyle=this._backgroundColorString,this.context.fillRect(0,0,this.width,this.height))),this.renderDisplayObject(t,this.context)},r.prototype.destroy=function(t){this.destroyPlugins(),i.prototype.destroy.call(this,t),this.context=null,this.refresh=!0,this.maskManager.destroy(),this.maskManager=null,this.roundPixels=!1,this.currentScaleMode=0,this.currentBlendMode=0,this.smoothProperty=null},r.prototype.renderDisplayObject=function(t,e){var r=this.context;this.context=e,t.renderCanvas(this),this.context=r},r.prototype._mapBlendModes=function(){this.blendModes||(this.blendModes={},o.canUseNewCanvasBlendModes()?(this.blendModes[a.BLEND_MODES.NORMAL]="source-over",this.blendModes[a.BLEND_MODES.ADD]="lighter",this.blendModes[a.BLEND_MODES.MULTIPLY]="multiply",this.blendModes[a.BLEND_MODES.SCREEN]="screen",this.blendModes[a.BLEND_MODES.OVERLAY]="overlay",this.blendModes[a.BLEND_MODES.DARKEN]="darken",this.blendModes[a.BLEND_MODES.LIGHTEN]="lighten",this.blendModes[a.BLEND_MODES.COLOR_DODGE]="color-dodge",this.blendModes[a.BLEND_MODES.COLOR_BURN]="color-burn",this.blendModes[a.BLEND_MODES.HARD_LIGHT]="hard-light",this.blendModes[a.BLEND_MODES.SOFT_LIGHT]="soft-light",this.blendModes[a.BLEND_MODES.DIFFERENCE]="difference",this.blendModes[a.BLEND_MODES.EXCLUSION]="exclusion",this.blendModes[a.BLEND_MODES.HUE]="hue",this.blendModes[a.BLEND_MODES.SATURATION]="saturation",this.blendModes[a.BLEND_MODES.COLOR]="color",this.blendModes[a.BLEND_MODES.LUMINOSITY]="luminosity"):(this.blendModes[a.BLEND_MODES.NORMAL]="source-over",this.blendModes[a.BLEND_MODES.ADD]="lighter",this.blendModes[a.BLEND_MODES.MULTIPLY]="source-over",this.blendModes[a.BLEND_MODES.SCREEN]="source-over",this.blendModes[a.BLEND_MODES.OVERLAY]="source-over",this.blendModes[a.BLEND_MODES.DARKEN]="source-over",this.blendModes[a.BLEND_MODES.LIGHTEN]="source-over",this.blendModes[a.BLEND_MODES.COLOR_DODGE]="source-over",this.blendModes[a.BLEND_MODES.COLOR_BURN]="source-over",this.blendModes[a.BLEND_MODES.HARD_LIGHT]="source-over",this.blendModes[a.BLEND_MODES.SOFT_LIGHT]="source-over",this.blendModes[a.BLEND_MODES.DIFFERENCE]="source-over",this.blendModes[a.BLEND_MODES.EXCLUSION]="source-over",this.blendModes[a.BLEND_MODES.HUE]="source-over",this.blendModes[a.BLEND_MODES.SATURATION]="source-over",this.blendModes[a.BLEND_MODES.COLOR]="source-over",this.blendModes[a.BLEND_MODES.LUMINOSITY]="source-over"))}},{"../../const":13,"../../math":23,"../../utils":68,"../SystemRenderer":33,"./utils/CanvasMaskManager":37}],35:[function(t,e){function r(t,e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=t,this.canvas.height=e}r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{width:{get:function(){return this.canvas.width},set:function(t){this.canvas.width=t}},height:{get:function(){return this.canvas.height},set:function(t){this.canvas.height=t}}}),r.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},r.prototype.resize=function(t,e){this.canvas.width=t,this.canvas.height=e},r.prototype.destroy=function(){this.context=null,this.canvas=null}},{}],36:[function(t,e){var r=t("../../../const"),i=e.exports={};i.renderGraphics=function(t,e){var i=t.worldAlpha;t.dirty&&(this.updateGraphicsTint(t),t.dirty=!1);for(var n=0;n<t.graphicsData.length;n++){var o=t.graphicsData[n],s=o.shape,a=o._fillTint,h=o._lineTint;if(e.lineWidth=o.lineWidth,o.type===r.SHAPES.POLY){e.beginPath();var l=s.points;e.moveTo(l[0],l[1]);for(var u=1;u<l.length/2;u++)e.lineTo(l[2*u],l[2*u+1]);s.closed&&e.lineTo(l[0],l[1]),l[0]===l[l.length-2]&&l[1]===l[l.length-1]&&e.closePath(),o.fill&&(e.globalAlpha=o.fillAlpha*i,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fill()),o.lineWidth&&(e.globalAlpha=o.lineAlpha*i,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.stroke())}else if(o.type===r.SHAPES.RECT)(o.fillColor||0===o.fillColor)&&(e.globalAlpha=o.fillAlpha*i,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fillRect(s.x,s.y,s.width,s.height)),o.lineWidth&&(e.globalAlpha=o.lineAlpha*i,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.strokeRect(s.x,s.y,s.width,s.height));else if(o.type===r.SHAPES.CIRC)e.beginPath(),e.arc(s.x,s.y,s.radius,0,2*Math.PI),e.closePath(),o.fill&&(e.globalAlpha=o.fillAlpha*i,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fill()),o.lineWidth&&(e.globalAlpha=o.lineAlpha*i,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.stroke());else if(o.type===r.SHAPES.ELIP){var c=2*s.width,d=2*s.height,p=s.x-c/2,f=s.y-d/2;e.beginPath();var v=.5522848,g=c/2*v,m=d/2*v,y=p+c,x=f+d,b=p+c/2,T=f+d/2;e.moveTo(p,T),e.bezierCurveTo(p,T-m,b-g,f,b,f),e.bezierCurveTo(b+g,f,y,T-m,y,T),e.bezierCurveTo(y,T+m,b+g,x,b,x),e.bezierCurveTo(b-g,x,p,T+m,p,T),e.closePath(),o.fill&&(e.globalAlpha=o.fillAlpha*i,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fill()),o.lineWidth&&(e.globalAlpha=o.lineAlpha*i,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.stroke())}else if(o.type===r.SHAPES.RREC){var _=s.x,E=s.y,S=s.width,w=s.height,A=s.radius,C=Math.min(S,w)/2|0;A=A>C?C:A,e.beginPath(),e.moveTo(_,E+A),e.lineTo(_,E+w-A),e.quadraticCurveTo(_,E+w,_+A,E+w),e.lineTo(_+S-A,E+w),e.quadraticCurveTo(_+S,E+w,_+S,E+w-A),e.lineTo(_+S,E+A),e.quadraticCurveTo(_+S,E,_+S-A,E),e.lineTo(_+A,E),e.quadraticCurveTo(_,E,_,E+A),e.closePath(),(o.fillColor||0===o.fillColor)&&(e.globalAlpha=o.fillAlpha*i,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fill()),o.lineWidth&&(e.globalAlpha=o.lineAlpha*i,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.stroke())}}},i.renderGraphicsMask=function(t,e){var i=t.graphicsData.length;if(0!==i){e.beginPath();for(var n=0;i>n;n++){var o=t.graphicsData[n],s=o.shape;if(o.type===r.SHAPES.POLY){var a=s.points;e.moveTo(a[0],a[1]);for(var h=1;h<a.length/2;h++)e.lineTo(a[2*h],a[2*h+1]);a[0]===a[a.length-2]&&a[1]===a[a.length-1]&&e.closePath()}else if(o.type===r.SHAPES.RECT)e.rect(s.x,s.y,s.width,s.height),e.closePath();else if(o.type===r.SHAPES.CIRC)e.arc(s.x,s.y,s.radius,0,2*Math.PI),e.closePath();else if(o.type===r.SHAPES.ELIP){var l=2*s.width,u=2*s.height,c=s.x-l/2,d=s.y-u/2,p=.5522848,f=l/2*p,v=u/2*p,g=c+l,m=d+u,y=c+l/2,x=d+u/2;e.moveTo(c,x),e.bezierCurveTo(c,x-v,y-f,d,y,d),e.bezierCurveTo(y+f,d,g,x-v,g,x),e.bezierCurveTo(g,x+v,y+f,m,y,m),e.bezierCurveTo(y-f,m,c,x+v,c,x),e.closePath()}else if(o.type===r.SHAPES.RREC){var b=s.x,T=s.y,_=s.width,E=s.height,S=s.radius,w=Math.min(_,E)/2|0;S=S>w?w:S,e.moveTo(b,T+S),e.lineTo(b,T+E-S),e.quadraticCurveTo(b,T+E,b+S,T+E),e.lineTo(b+_-S,T+E),e.quadraticCurveTo(b+_,T+E,b+_,T+E-S),e.lineTo(b+_,T+S),e.quadraticCurveTo(b+_,T,b+_-S,T),e.lineTo(b+S,T),e.quadraticCurveTo(b,T,b,T+S),e.closePath()}}}},i.updateGraphicsTint=function(t){if(16777215!==t.tint)for(var e=(t.tint>>16&255)/255,r=(t.tint>>8&255)/255,i=(255&t.tint)/255,n=0;n<t.graphicsData.length;n++){var o=t.graphicsData[n],s=0|o.fillColor,a=0|o.lineColor;o._fillTint=((s>>16&255)/255*e*255<<16)+((s>>8&255)/255*r*255<<8)+(255&s)/255*i*255,o._lineTint=((a>>16&255)/255*e*255<<16)+((a>>8&255)/255*r*255<<8)+(255&a)/255*i*255}}},{"../../../const":13}],37:[function(t,e){function r(){}var i=t("./CanvasGraphics");r.prototype.constructor=r,e.exports=r,r.prototype.pushMask=function(t,e){e.context.save();var r=t.alpha,n=t.worldTransform,o=e.resolution;e.context.setTransform(n.a*o,n.b*o,n.c*o,n.d*o,n.tx*o,n.ty*o),t.texture||(i.renderGraphicsMask(t,e.context),e.context.clip()),t.worldAlpha=r},r.prototype.popMask=function(t){t.context.restore()}},{"./CanvasGraphics":36}],38:[function(t,e){var r=t("../../../utils"),i=e.exports={};i.getTintedTexture=function(t,e){var r=t.texture;e=i.roundColor(e);var n="#"+("00000"+(0|e).toString(16)).substr(-6);if(r.tintCache=r.tintCache||{},r.tintCache[n])return r.tintCache[n];var o=i.canvas||document.createElement("canvas");if(i.tintMethod(r,e,o),i.convertTintToImage){var s=new Image;s.src=o.toDataURL(),r.tintCache[n]=s}else r.tintCache[n]=o,i.canvas=null;return o},i.tintWithMultiply=function(t,e,r){var i=r.getContext("2d"),n=t.crop;r.width=n.width,r.height=n.height,i.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),i.fillRect(0,0,n.width,n.height),i.globalCompositeOperation="multiply",i.drawImage(t.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height),i.globalCompositeOperation="destination-atop",i.drawImage(t.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)},i.tintWithOverlay=function(t,e,r){var i=r.getContext("2d"),n=t.crop;r.width=n.width,r.height=n.height,i.globalCompositeOperation="copy",i.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),i.fillRect(0,0,n.width,n.height),i.globalCompositeOperation="destination-atop",i.drawImage(t.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)},i.tintWithPerPixel=function(t,e,i){var n=i.getContext("2d"),o=t.crop;i.width=o.width,i.height=o.height,n.globalCompositeOperation="copy",n.drawImage(t.baseTexture.source,o.x,o.y,o.width,o.height,0,0,o.width,o.height);for(var s=r.hex2rgb(e),a=s[0],h=s[1],l=s[2],u=n.getImageData(0,0,o.width,o.height),c=u.data,d=0;d<c.length;d+=4)c[d+0]*=a,c[d+1]*=h,c[d+2]*=l;n.putImageData(u,0,0)},i.roundColor=function(t){var e=i.cacheStepsPerColorChannel,n=r.hex2rgb(t);return n[0]=Math.min(255,n[0]/e*e),n[1]=Math.min(255,n[1]/e*e),n[2]=Math.min(255,n[2]/e*e),r.rgb2hex(n)},i.cacheStepsPerColorChannel=8,i.convertTintToImage=!1,i.canUseMultiply=r.canUseNewCanvasBlendModes(),i.tintMethod=i.canUseMultiply?i.tintWithMultiply:i.tintWithPerPixel},{"../../../utils":68}],39:[function(t,e){function r(t,e,r){r=r||{},i.call(this,"WebGL",t,e,r),this.type=p.RENDERER_TYPE.WEBGL,this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),this._updateTextureBound=function(t){this.updateTexture(t.target)}.bind(this),this._destroyTextureBound=function(t){this.destroyTexture(t.target)}.bind(this),this.view.addEventListener("webglcontextlost",this.handleContextLost,!1),this.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1),this._useFXAA=!1,this._FXAAFilter=null,this._contextOptions={alpha:this.transparent,antialias:r.antialias,premultipliedAlpha:this.transparent&&"notMultiplied"!==this.transparent,stencil:!0,preserveDrawingBuffer:r.preserveDrawingBuffer},this.drawCount=0,this.shaderManager=new n(this),this.maskManager=new o(this),this.stencilManager=new s(this),this.filterManager=new a(this),this.blendModeManager=new h(this),this.currentRenderTarget=this.renderTarget,this.currentRenderer=new u(this),this.initPlugins(),this._initContext(),this._mapBlendModes(),this._renderTargetStack=[]}var i=t("../SystemRenderer"),n=t("./managers/ShaderManager"),o=t("./managers/MaskManager"),s=t("./managers/StencilManager"),a=t("./managers/FilterManager"),h=t("./managers/BlendModeManager"),l=t("./utils/RenderTarget"),u=t("./utils/ObjectRenderer"),c=t("./filters/FXAAFilter"),d=t("../../utils"),p=t("../../const");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,d.pluginTarget.mixin(r),r.glContextId=0,r.prototype._initContext=function(){var t=this.view.getContext("webgl",this._contextOptions)||this.view.getContext("experimental-webgl",this._contextOptions);if(this.gl=t,!t)throw new Error("This browser does not support webGL. Try using the canvas renderer");this.glContextId=r.glContextId++,t.id=this.glContextId,t.renderer=this,t.disable(t.DEPTH_TEST),t.disable(t.CULL_FACE),t.enable(t.BLEND),this.renderTarget=new l(this.gl,this.width,this.height,null,this.resolution,!0),this.emit("context",t),this.resize(this.width,this.height),this._useFXAA=this._contextOptions.antialias&&!t.getContextAttributes().antialias,this._useFXAA&&(this._FXAAFilter=[new c])},r.prototype.render=function(t){if(!this.gl.isContextLost()){this._lastObjectRendered=t,this._useFXAA&&(this._FXAAFilter[0].uniforms.resolution.value.x=this.width,this._FXAAFilter[0].uniforms.resolution.value.y=this.height,t.filterArea=this.renderTarget.size,t.filters=this._FXAAFilter);var e=t.parent;t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=e;var r=this.gl;r.bindFramebuffer(r.FRAMEBUFFER,null),this.clearBeforeRender&&(this.transparent?r.clearColor(0,0,0,0):r.clearColor(this._backgroundColorRgb[0],this._backgroundColorRgb[1],this._backgroundColorRgb[2],1),r.clear(r.COLOR_BUFFER_BIT)),this.renderDisplayObject(t,this.renderTarget)}},r.prototype.renderDisplayObject=function(t,e){this.setRenderTarget(e),this.filterManager.setFilterStack(e.filterStack),t.renderWebGL(this),this.currentRenderer.flush()},r.prototype.setObjectRenderer=function(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())},r.prototype.setRenderTarget=function(t){this.currentRenderTarget=t,this.currentRenderTarget.activate(),this.stencilManager.setMaskStack(t.stencilMaskStack)},r.prototype.resize=function(t,e){i.prototype.resize.call(this,t,e),this.filterManager.resize(t,e),this.renderTarget.resize(t,e)},r.prototype.updateTexture=function(t){if(t=t.baseTexture||t,t.hasLoaded){var e=this.gl;return t._glTextures[e.id]||(t._glTextures[e.id]=e.createTexture(),t.on("update",this._updateTextureBound),t.on("dispose",this._destroyTextureBound)),e.bindTexture(e.TEXTURE_2D,t._glTextures[e.id]),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultipliedAlpha),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t.source),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t.scaleMode===p.SCALE_MODES.LINEAR?e.LINEAR:e.NEAREST),t.mipmap&&t.isPowerOfTwo?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.scaleMode===p.SCALE_MODES.LINEAR?e.LINEAR_MIPMAP_LINEAR:e.NEAREST_MIPMAP_NEAREST),e.generateMipmap(e.TEXTURE_2D)):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.scaleMode===p.SCALE_MODES.LINEAR?e.LINEAR:e.NEAREST),t.isPowerOfTwo?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),t._glTextures[e.id]}},r.prototype.destroyTexture=function(t){t=t.baseTexture||t,t.hasLoaded&&t._glTextures[this.gl.id]&&this.gl.deleteTexture(t._glTextures[this.gl.id])},r.prototype.handleContextLost=function(t){t.preventDefault()},r.prototype.handleContextRestored=function(){this._initContext();for(var t in d.BaseTextureCache)d.BaseTextureCache[t]._glTextures.length=0},r.prototype.destroy=function(t){this.destroyPlugins(),this.view.removeEventListener("webglcontextlost",this.handleContextLost),this.view.removeEventListener("webglcontextrestored",this.handleContextRestored),i.prototype.destroy.call(this,t),this.uuid=0,this.shaderManager.destroy(),this.maskManager.destroy(),this.stencilManager.destroy(),this.filterManager.destroy(),this.shaderManager=null,this.maskManager=null,this.filterManager=null,this.blendModeManager=null,this.handleContextLost=null,this.handleContextRestored=null,this._contextOptions=null,this.drawCount=0,this.gl=null},r.prototype._mapBlendModes=function(){var t=this.gl;this.blendModes||(this.blendModes={},this.blendModes[p.BLEND_MODES.NORMAL]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.ADD]=[t.SRC_ALPHA,t.DST_ALPHA],this.blendModes[p.BLEND_MODES.MULTIPLY]=[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.SCREEN]=[t.SRC_ALPHA,t.ONE],this.blendModes[p.BLEND_MODES.OVERLAY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.DARKEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.LIGHTEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.COLOR_DODGE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.COLOR_BURN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.HARD_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.SOFT_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.DIFFERENCE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.EXCLUSION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.HUE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.SATURATION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.COLOR]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[p.BLEND_MODES.LUMINOSITY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA])}},{"../../const":13,"../../utils":68,"../SystemRenderer":33,"./filters/FXAAFilter":41,"./managers/BlendModeManager":43,"./managers/FilterManager":44,"./managers/MaskManager":45,"./managers/ShaderManager":46,"./managers/StencilManager":47,"./utils/ObjectRenderer":53,"./utils/RenderTarget":55}],40:[function(t,e){function r(t,e,r){this.passes=[this],this.shaders=[],this.padding=0,this.uniforms=r||{},this.vertexSrc=t,this.fragmentSrc=e}var i=t("../shaders/TextureShader");r.prototype.constructor=r,e.exports=r,r.prototype.getShader=function(t){var e=t.gl,r=this.shaders[e.id];return r||(r=new i(t.shaderManager,this.vertexSrc,this.fragmentSrc,this.uniforms,this.attributes),this.shaders[e.id]=r),r},r.prototype.applyFilter=function(t,e,r,i){var n=this.getShader(t);t.filterManager.applyFilter(n,e,r,i)},r.prototype.syncUniform=function(t){for(var e=0,r=this.shaders.length;r>e;++e)this.shaders[e].syncUniform(t)}},{"../shaders/TextureShader":52}],41:[function(t,e){function r(){i.call(this,"precision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n',{resolution:{type:"v2",value:{x:1,y:1}}})
}var i=t("./AbstractFilter");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.applyFilter=function(t,e,r){var i=t.filterManager,n=this.getShader(t);i.applyFilter(n,e,r)}},{"./AbstractFilter":40}],42:[function(t,e){function r(t){var e=new n.Matrix;i.call(this,["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform mat3 projectionMatrix;","uniform mat3 otherMatrix;","varying vec2 vMaskCoord;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void)","{","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"].join("\n"),["precision lowp float;","varying vec2 vMaskCoord;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform sampler2D mask;","void main(void)","{","   vec4 original =  texture2D(uSampler, vTextureCoord);","   vec4 masky =  texture2D(mask, vMaskCoord);","   original *= (masky.r * masky.a);","   gl_FragColor =  original;","}"].join("\n"),{mask:{type:"sampler2D",value:t.texture},otherMatrix:{type:"mat3",value:e.toArray(!0)}}),this.maskSprite=t,this.maskMatrix=e}var i=t("./AbstractFilter"),n=t("../../../math");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.applyFilter=function(t,e,r){var i=t.filterManager;i.calculateMappedMatrix(e.frame,this.maskSprite,this.maskMatrix),this.uniforms.otherMatrix.value=this.maskMatrix.toArray(!0);var n=this.getShader(t);i.applyFilter(n,e,r)},Object.defineProperties(r.prototype,{map:{get:function(){return this.uniforms.mask.value},set:function(t){this.uniforms.mask.value=t}},offset:{get:function(){return this.uniforms.offset.value},set:function(t){this.uniforms.offset.value=t}}})},{"../../../math":23,"./AbstractFilter":40}],43:[function(t,e){function r(t){i.call(this,t),this.currentBlendMode=99999}var i=t("./WebGLManager");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.setBlendMode=function(t){if(this.currentBlendMode===t)return!1;this.currentBlendMode=t;var e=this.renderer.blendModes[this.currentBlendMode];return this.renderer.gl.blendFunc(e[0],e[1]),!0}},{"./WebGLManager":48}],44:[function(t,e){function r(t){i.call(this,t),this.filterStack=[],this.filterStack.push({renderTarget:t.currentRenderTarget,filter:[],bounds:null}),this.texturePool=[],this.textureSize=new s.Rectangle(0,0,t.width,t.height),this.currentFrame=null}var i=t("./WebGLManager"),n=t("../utils/RenderTarget"),o=t("../utils/Quad"),s=t("../../../math");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.onContextChange=function(){this.texturePool.length=0;var t=this.renderer.gl;this.quad=new o(t)},r.prototype.setFilterStack=function(t){this.filterStack=t},r.prototype.pushFilter=function(t,e){var r=t.filterArea||t.getBounds();r.x=0|r.x,r.y=0|r.y,r.width=0|r.width,r.height=0|r.height,this.capFilterArea(r),this.currentFrame=r;var i=this.getRenderTarget();this.renderer.setRenderTarget(i),i.clear(),this.filterStack.push({renderTarget:i,filter:e})},r.prototype.popFilter=function(){var t=this.filterStack.pop(),e=this.filterStack[this.filterStack.length-1],r=t.renderTarget,i=e.renderTarget,n=this.renderer.gl;this.currentFrame=r.frame,this.quad.map(this.textureSize,r.frame),n.bindBuffer(n.ARRAY_BUFFER,this.quad.vertexBuffer),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,this.quad.indexBuffer);var o=t.filter;if(1===o.length)o[0].uniforms.dimensions&&(o[0].uniforms.dimensions.value[0]=this.renderer.width,o[0].uniforms.dimensions.value[1]=this.renderer.height,o[0].uniforms.dimensions.value[2]=this.quad.vertices[0],o[0].uniforms.dimensions.value[3]=this.quad.vertices[5]),o[0].applyFilter(this.renderer,r,i),this.returnRenderTarget(r);else{for(var s=r,a=this.getRenderTarget(!0),h=0;h<o.length-1;h++){var l=o[h];l.uniforms.dimensions&&(l.uniforms.dimensions.value[0]=this.renderer.width,l.uniforms.dimensions.value[1]=this.renderer.height,l.uniforms.dimensions.value[2]=this.quad.vertices[0],l.uniforms.dimensions.value[3]=this.quad.vertices[5]),l.applyFilter(this.renderer,s,a);var u=s;s=a,a=u}o[o.length-1].applyFilter(this.renderer,s,i),this.returnRenderTarget(s),this.returnRenderTarget(a)}return t.filter},r.prototype.getRenderTarget=function(t){var e=this.texturePool.pop()||new n(this.renderer.gl,this.textureSize.width,this.textureSize.height,null,this.renderer.resolution);return e.frame=this.currentFrame,t&&e.clear(),e},r.prototype.returnRenderTarget=function(t){this.texturePool.push(t)},r.prototype.applyFilter=function(t,e,r,i){var n=this.renderer.gl;this.renderer.setRenderTarget(r),i&&r.clear(),this.renderer.shaderManager.setShader(t),t.uniforms.projectionMatrix.value=this.renderer.currentRenderTarget.projectionMatrix.toArray(!0),t.syncUniforms(),n.vertexAttribPointer(t.attributes.aVertexPosition,2,n.FLOAT,!1,0,0),n.vertexAttribPointer(t.attributes.aTextureCoord,2,n.FLOAT,!1,0,32),n.vertexAttribPointer(t.attributes.aColor,4,n.FLOAT,!1,0,64),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.texture),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)},r.prototype.calculateMappedMatrix=function(t,e,r){var i=e.worldTransform.copy(s.Matrix.TEMP_MATRIX),n=e._texture.baseTexture,o=r.identity(),a=this.textureSize.height/this.textureSize.width;o.translate(t.x/this.textureSize.width,t.y/this.textureSize.height),o.scale(1,a);var h=this.textureSize.width/n.width,l=this.textureSize.height/n.height;return i.tx/=n.width*h,i.ty/=n.width*h,i.invert(),o.prepend(i),o.scale(1,1/a),o.scale(h,l),o.translate(e.anchor.x,e.anchor.y),o},r.prototype.capFilterArea=function(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0),t.x+t.width>this.textureSize.width&&(t.width=this.textureSize.width-t.x),t.y+t.height>this.textureSize.height&&(t.height=this.textureSize.height-t.y)},r.prototype.resize=function(t,e){this.textureSize.width=t,this.textureSize.height=e;for(var r=0;r<this.texturePool.length;r++)this.texturePool[r].resize(t,e)},r.prototype.destroy=function(){this.filterStack=null,this.offsetY=0;for(var t=0;t<this.texturePool.length;t++)this.texturePool[t].destroy();this.texturePool=null}},{"../../../math":23,"../utils/Quad":54,"../utils/RenderTarget":55,"./WebGLManager":48}],45:[function(t,e){function r(t){i.call(this,t),this.stencilStack=[],this.reverse=!0,this.count=0,this.alphaMaskPool=[]}var i=t("./WebGLManager"),n=t("../filters/SpriteMaskFilter");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.pushMask=function(t,e){e.texture?this.pushSpriteMask(t,e):this.pushStencilMask(t,e)},r.prototype.popMask=function(t,e){e.texture?this.popSpriteMask(t,e):this.popStencilMask(t,e)},r.prototype.pushSpriteMask=function(t,e){var r=this.alphaMaskPool.pop();r||(r=[new n(e)]),this.renderer.filterManager.pushFilter(t,r)},r.prototype.popSpriteMask=function(){var t=this.renderer.filterManager.popFilter();this.alphaMaskPool.push(t)},r.prototype.pushStencilMask=function(t,e){this.renderer.stencilManager.pushMask(e)},r.prototype.popStencilMask=function(t,e){this.renderer.stencilManager.popMask(e)}},{"../filters/SpriteMaskFilter":42,"./WebGLManager":48}],46:[function(t,e){function r(t){i.call(this,t),this.maxAttibs=10,this.attribState=[],this.tempAttribState=[];for(var e=0;e<this.maxAttibs;e++)this.attribState[e]=!1;this.stack=[],this._currentId=-1,this.currentShader=null,this.initPlugins()}var i=t("./WebGLManager"),n=t("../shaders/TextureShader"),o=t("../shaders/ComplexPrimitiveShader"),s=t("../shaders/PrimitiveShader"),a=t("../../../utils");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,a.pluginTarget.mixin(r),e.exports=r,r.prototype.onContextChange=function(){this.initPlugins(),this.defaultShader=new n(this),this.primitiveShader=new s(this),this.complexPrimitiveShader=new o(this)},r.prototype.setAttribs=function(t){var e;for(e=0;e<this.tempAttribState.length;e++)this.tempAttribState[e]=!1;for(var r in t)this.tempAttribState[t[r]]=!0;var i=this.renderer.gl;for(e=0;e<this.attribState.length;e++)this.attribState[e]!==this.tempAttribState[e]&&(this.attribState[e]=this.tempAttribState[e],this.attribState[e]?i.enableVertexAttribArray(e):i.disableVertexAttribArray(e))},r.prototype.setShader=function(t){return this._currentId===t.uuid?!1:(this._currentId=t.uuid,this.currentShader=t,this.renderer.gl.useProgram(t.program),this.setAttribs(t.attributes),!0)},r.prototype.destroy=function(){i.prototype.destroy.call(this),this.destroyPlugins(),this.attribState=null,this.tempAttribState=null}},{"../../../utils":68,"../shaders/ComplexPrimitiveShader":49,"../shaders/PrimitiveShader":50,"../shaders/TextureShader":52,"./WebGLManager":48}],47:[function(t,e){function r(t){i.call(this,t),this.stencilMaskStack=null}var i=t("./WebGLManager"),n=t("../../../utils");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.setMaskStack=function(t){this.stencilMaskStack=t;var e=this.renderer.gl;0===t.stencilStack.length?e.disable(e.STENCIL_TEST):e.enable(e.STENCIL_TEST)},r.prototype.pushStencil=function(t,e){this.renderer.currentRenderTarget.attachStenilBuffer();var r=this.renderer.gl,i=this.stencilMaskStack;this.bindGraphics(t,e,this.renderer),0===i.stencilStack.length&&(r.enable(r.STENCIL_TEST),r.clear(r.STENCIL_BUFFER_BIT),i.reverse=!0,i.count=0),i.stencilStack.push(e);var n=i.count;r.colorMask(!1,!1,!1,!1),r.stencilFunc(r.ALWAYS,0,255),r.stencilOp(r.KEEP,r.KEEP,r.INVERT),1===e.mode?(r.drawElements(r.TRIANGLE_FAN,e.indices.length-4,r.UNSIGNED_SHORT,0),i.reverse?(r.stencilFunc(r.EQUAL,255-n,255),r.stencilOp(r.KEEP,r.KEEP,r.DECR)):(r.stencilFunc(r.EQUAL,n,255),r.stencilOp(r.KEEP,r.KEEP,r.INCR)),r.drawElements(r.TRIANGLE_FAN,4,r.UNSIGNED_SHORT,2*(e.indices.length-4)),i.reverse?r.stencilFunc(r.EQUAL,255-(n+1),255):r.stencilFunc(r.EQUAL,n+1,255),i.reverse=!i.reverse):(i.reverse?(r.stencilFunc(r.EQUAL,n,255),r.stencilOp(r.KEEP,r.KEEP,r.INCR)):(r.stencilFunc(r.EQUAL,255-n,255),r.stencilOp(r.KEEP,r.KEEP,r.DECR)),r.drawElements(r.TRIANGLE_STRIP,e.indices.length,r.UNSIGNED_SHORT,0),i.reverse?r.stencilFunc(r.EQUAL,n+1,255):r.stencilFunc(r.EQUAL,255-(n+1),255)),r.colorMask(!0,!0,!0,!0),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),i.count++},r.prototype.bindGraphics=function(t,e){this._currentGraphics=t;var r,i=this.renderer.gl;1===e.mode?(r=this.renderer.shaderManager.complexPrimitiveShader,this.renderer.shaderManager.setShader(r),i.uniformMatrix3fv(r.uniforms.translationMatrix._location,!1,t.worldTransform.toArray(!0)),i.uniformMatrix3fv(r.uniforms.projectionMatrix._location,!1,this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)),i.uniform3fv(r.uniforms.tint._location,n.hex2rgb(t.tint)),i.uniform3fv(r.uniforms.color._location,e.color),i.uniform1f(r.uniforms.alpha._location,t.worldAlpha),i.bindBuffer(i.ARRAY_BUFFER,e.buffer),i.vertexAttribPointer(r.attributes.aVertexPosition,2,i.FLOAT,!1,8,0),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.indexBuffer)):(r=this.renderer.shaderManager.primitiveShader,this.renderer.shaderManager.setShader(r),i.uniformMatrix3fv(r.uniforms.translationMatrix._location,!1,t.worldTransform.toArray(!0)),i.uniformMatrix3fv(r.uniforms.projectionMatrix._location,!1,this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)),i.uniform3fv(r.uniforms.tint._location,n.hex2rgb(t.tint)),i.uniform1f(r.uniforms.alpha._location,t.worldAlpha),i.bindBuffer(i.ARRAY_BUFFER,e.buffer),i.vertexAttribPointer(r.attributes.aVertexPosition,2,i.FLOAT,!1,24,0),i.vertexAttribPointer(r.attributes.aColor,4,i.FLOAT,!1,24,8),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.indexBuffer))},r.prototype.popStencil=function(t,e){var r=this.renderer.gl,i=this.stencilMaskStack;if(i.stencilStack.pop(),i.count--,0===i.stencilStack.length)r.disable(r.STENCIL_TEST);else{var n=i.count;this.bindGraphics(t,e,this.renderer),r.colorMask(!1,!1,!1,!1),1===e.mode?(i.reverse=!i.reverse,i.reverse?(r.stencilFunc(r.EQUAL,255-(n+1),255),r.stencilOp(r.KEEP,r.KEEP,r.INCR)):(r.stencilFunc(r.EQUAL,n+1,255),r.stencilOp(r.KEEP,r.KEEP,r.DECR)),r.drawElements(r.TRIANGLE_FAN,4,r.UNSIGNED_SHORT,2*(e.indices.length-4)),r.stencilFunc(r.ALWAYS,0,255),r.stencilOp(r.KEEP,r.KEEP,r.INVERT),r.drawElements(r.TRIANGLE_FAN,e.indices.length-4,r.UNSIGNED_SHORT,0),i.reverse?r.stencilFunc(r.EQUAL,n,255):r.stencilFunc(r.EQUAL,255-n,255)):(i.reverse?(r.stencilFunc(r.EQUAL,n+1,255),r.stencilOp(r.KEEP,r.KEEP,r.DECR)):(r.stencilFunc(r.EQUAL,255-(n+1),255),r.stencilOp(r.KEEP,r.KEEP,r.INCR)),r.drawElements(r.TRIANGLE_STRIP,e.indices.length,r.UNSIGNED_SHORT,0),i.reverse?r.stencilFunc(r.EQUAL,n,255):r.stencilFunc(r.EQUAL,255-n,255)),r.colorMask(!0,!0,!0,!0),r.stencilOp(r.KEEP,r.KEEP,r.KEEP)}},r.prototype.destroy=function(){i.prototype.destroy.call(this),this.stencilMaskStack.stencilStack=null},r.prototype.pushMask=function(t){this.renderer.setObjectRenderer(this.renderer.plugins.graphics),t.dirty&&this.renderer.plugins.graphics.updateGraphics(t,this.renderer.gl),t._webGL[this.renderer.gl.id].data.length&&this.pushStencil(t,t._webGL[this.renderer.gl.id].data[0],this.renderer)},r.prototype.popMask=function(t){this.renderer.setObjectRenderer(this.renderer.plugins.graphics),this.popStencil(t,t._webGL[this.renderer.gl.id].data[0],this.renderer)}},{"../../../utils":68,"./WebGLManager":48}],48:[function(t,e){function r(t){this.renderer=t;var e=this;this.renderer.on("context",this._onContextChangeFn=function(){e.onContextChange()})}r.prototype.constructor=r,e.exports=r,r.prototype.onContextChange=function(){},r.prototype.destroy=function(){this.renderer.off("context",this._onContextChangeFn),this.renderer=null}},{}],49:[function(t,e){function r(t){i.call(this,t,["attribute vec2 aVertexPosition;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform vec3 tint;","uniform float alpha;","uniform vec3 color;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = vec4(color * alpha * tint, alpha);","}"].join("\n"),["precision mediump float;","varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n"),{tint:{type:"3f",value:[0,0,0]},alpha:{type:"1f",value:0},color:{type:"3f",value:[0,0,0]},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0})}var i=t("./Shader");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r},{"./Shader":51}],50:[function(t,e){function r(t){i.call(this,t,["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform float alpha;","uniform float flipY;","uniform vec3 tint;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"].join("\n"),["precision mediump float;","varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n"),{tint:{type:"3f",value:[0,0,0]},alpha:{type:"1f",value:0},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0,aColor:0})}var i=t("./Shader");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r},{"./Shader":51}],51:[function(t,e){function r(t,e,r,n,o){if(!e||!r)throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc");this.uuid=i.uuid(),this.gl=t.renderer.gl,this.program=null,this.uniforms=n||{},this.attributes=o||{},this.textureCount=1,this.vertexSrc=e,this.fragmentSrc=r,this.init()}var i=t("../../../utils"),n=t("../../../const");r.prototype.constructor=r,e.exports=r,r.prototype.init=function(){this.compile(),this.gl.useProgram(this.program),this.cacheUniformLocations(Object.keys(this.uniforms)),this.cacheAttributeLocations(Object.keys(this.attributes))},r.prototype.cacheUniformLocations=function(t){for(var e=0;e<t.length;++e)this.uniforms[t[e]]._location=this.gl.getUniformLocation(this.program,t[e])},r.prototype.cacheAttributeLocations=function(t){for(var e=0;e<t.length;++e)this.attributes[t[e]]=this.gl.getAttribLocation(this.program,t[e])},r.prototype.compile=function(){var t=this.gl,e=this._glCompile(t.VERTEX_SHADER,this.vertexSrc),r=this._glCompile(t.FRAGMENT_SHADER,this.fragmentSrc),i=t.createProgram();return t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)||(window.console.error("Pixi.js Error: Could not initialize shader."),window.console.error("gl.VALIDATE_STATUS",t.getProgramParameter(i,t.VALIDATE_STATUS)),window.console.error("gl.getError()",t.getError()),""!==t.getProgramInfoLog(i)&&window.console.warn("Pixi.js Warning: gl.getProgramInfoLog()",t.getProgramInfoLog(i)),t.deleteProgram(i),i=null),t.deleteShader(e),t.deleteShader(r),this.program=i},r.prototype.syncUniform=function(t){var e,r,n=t._location,o=t.value,s=this.gl;switch(t.type){case"i":case"1i":s.uniform1i(n,o);break;case"f":case"1f":s.uniform1f(n,o);break;case"2f":s.uniform2f(n,o[0],o[1]);break;case"3f":s.uniform3f(n,o[0],o[1],o[2]);break;case"4f":s.uniform4f(n,o[0],o[1],o[2],o[3]);break;case"v2":s.uniform2f(n,o.x,o.y);break;case"v3":s.uniform3f(n,o.x,o.y,o.z);break;case"v4":s.uniform4f(n,o.x,o.y,o.z,o.w);break;case"1iv":s.uniform1iv(n,o);break;case"2iv":s.uniform2iv(n,o);break;case"3iv":s.uniform3iv(n,o);break;case"4iv":s.uniform4iv(n,o);break;case"1fv":s.uniform1fv(n,o);break;case"2fv":s.uniform2fv(n,o);break;case"3fv":s.uniform3fv(n,o);break;case"4fv":s.uniform4fv(n,o);break;case"m2":case"mat2":case"Matrix2fv":s.uniformMatrix2fv(n,t.transpose,o);break;case"m3":case"mat3":case"Matrix3fv":s.uniformMatrix3fv(n,t.transpose,o);break;case"m4":case"mat4":case"Matrix4fv":s.uniformMatrix4fv(n,t.transpose,o);break;case"c":"number"==typeof o&&(o=i.hex2rgb(o)),s.uniform3f(n,o[0],o[1],o[2]);break;case"iv1":s.uniform1iv(n,o);break;case"iv":s.uniform3iv(n,o);break;case"fv1":s.uniform1fv(n,o);break;case"fv":s.uniform3fv(n,o);break;case"v2v":for(t._array||(t._array=new Float32Array(2*o.length)),e=0,r=o.length;r>e;++e)t._array[2*e]=o[e].x,t._array[2*e+1]=o[e].y;s.uniform2fv(n,t._array);break;case"v3v":for(t._array||(t._array=new Float32Array(3*o.length)),e=0,r=o.length;r>e;++e)t._array[3*e]=o[e].x,t._array[3*e+1]=o[e].y,t._array[3*e+2]=o[e].z;s.uniform3fv(n,t._array);break;case"v4v":for(t._array||(t._array=new Float32Array(4*o.length)),e=0,r=o.length;r>e;++e)t._array[4*e]=o[e].x,t._array[4*e+1]=o[e].y,t._array[4*e+2]=o[e].z,t._array[4*e+3]=o[e].w;s.uniform4fv(n,t._array);break;case"t":case"sampler2D":if(!t.value||!t.value.baseTexture.hasLoaded)break;s.activeTexture(s["TEXTURE"+this.textureCount]);var a=t.value.baseTexture._glTextures[s.id];a||this.initSampler2D(t),s.bindTexture(s.TEXTURE_2D,t.value.baseTexture._glTextures[s.id]),s.uniform1i(t._location,this.textureCount),this.textureCount++;break;default:window.console.warn("Pixi.js Shader Warning: Unknown uniform type: "+t.type)}},r.prototype.syncUniforms=function(){this.textureCount=1;for(var t in this.uniforms)this.syncUniform(this.uniforms[t])},r.prototype.initSampler2D=function(t){var e=this.gl,r=t.value.baseTexture;if(r.hasLoaded)if(r._glTextures[e.id]=e.createTexture(),e.bindTexture(e.TEXTURE_2D,r._glTextures[e.id]),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultipliedAlpha),t.textureData){var i=t.textureData;e.texImage2D(e.TEXTURE_2D,0,i.luminance?e.LUMINANCE:e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r.source),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i.magFilter?i.magFilter:e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i.wrapS?i.wrapS:e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,i.wrapS?i.wrapS:e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,i.wrapT?i.wrapT:e.CLAMP_TO_EDGE)}else e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r.source),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,r.scaleMode===n.SCALE_MODES.LINEAR?e.LINEAR:e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,r.scaleMode===n.SCALE_MODES.LINEAR?e.LINEAR:e.NEAREST),r.isPowerOfTwo?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE))},r.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.gl=null,this.uniforms=null,this.attributes=null,this.vertexSrc=null,this.fragmentSrc=null},r.prototype._glCompile=function(t,e){var r=this.gl.createShader(t);return this.gl.shaderSource(r,e),this.gl.compileShader(r),this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS)?r:(window.console.log(this.gl.getShaderInfoLog(r)),null)}},{"../../../const":13,"../../../utils":68}],52:[function(t,e){function r(t,e,r,n,o){var s={uSampler:{type:"sampler2D",value:0},projectionMatrix:{type:"mat3",value:new Float32Array(1,0,0,0,1,0,0,0,1)}};if(n)for(var a in n)s[a]=n[a];var h={aVertexPosition:0,aTextureCoord:0,aColor:0};if(o)for(var l in o)h[l]=o[l];e=e||["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"].join("\n"),r=r||["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"].join("\n"),i.call(this,t,e,r,s,h)}var i=t("./Shader");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r},{"./Shader":51}],53:[function(t,e){function r(t){i.call(this,t)}var i=t("../managers/WebGLManager");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.start=function(){},r.prototype.stop=function(){this.flush()},r.prototype.flush=function(){},r.prototype.render=function(){}},{"../managers/WebGLManager":48}],54:[function(t,e){function r(t){this.gl=t,this.vertices=new Float32Array([0,0,200,0,200,200,0,200]),this.uvs=new Float32Array([0,0,1,0,1,1,0,1]),this.colors=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]),this.indices=new Uint16Array([0,1,2,0,3,2]),this.vertexBuffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,128,t.DYNAMIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW),this.upload()}r.prototype.constructor=r,r.prototype.map=function(t,e){var r=0,i=0;this.uvs[0]=r,this.uvs[1]=i,this.uvs[2]=r+e.width/t.width,this.uvs[3]=i,this.uvs[4]=r+e.width/t.width,this.uvs[5]=i+e.height/t.height,this.uvs[6]=r,this.uvs[7]=i+e.height/t.height,r=e.x,i=e.y,this.vertices[0]=r,this.vertices[1]=i,this.vertices[2]=r+e.width,this.vertices[3]=i,this.vertices[4]=r+e.width,this.vertices[5]=i+e.height,this.vertices[6]=r,this.vertices[7]=i+e.height,this.upload()},r.prototype.upload=function(){var t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferSubData(t.ARRAY_BUFFER,0,this.vertices),t.bufferSubData(t.ARRAY_BUFFER,32,this.uvs),t.bufferSubData(t.ARRAY_BUFFER,64,this.colors)},e.exports=r},{}],55:[function(t,e){var r=t("../../../math"),i=t("../../../utils"),n=t("../../../const"),o=t("./StencilMaskStack"),s=function(t,e,s,a,h,l){if(this.gl=t,this.frameBuffer=null,this.texture=null,this.size=new r.Rectangle(0,0,1,1),this.resolution=h||n.RESOLUTION,this.projectionMatrix=new r.Matrix,this.transform=null,this.frame=null,this.stencilBuffer=null,this.stencilMaskStack=new o,this.filterStack=[{renderTarget:this,filter:[],bounds:this.size}],this.scaleMode=a||n.SCALE_MODES.DEFAULT,this.root=l,!this.root){this.frameBuffer=t.createFramebuffer(),this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a===n.SCALE_MODES.LINEAR?t.LINEAR:t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a===n.SCALE_MODES.LINEAR?t.LINEAR:t.NEAREST);var u=i.isPowerOfTwo(e,s);u?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),t.bindFramebuffer(t.FRAMEBUFFER,this.frameBuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture,0)}this.resize(e,s)};s.prototype.constructor=s,e.exports=s,s.prototype.clear=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.frameBuffer),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)},s.prototype.attachStenilBuffer=function(){if(!this.stencilBuffer&&!this.root){var t=this.gl;this.stencilBuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.stencilBuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,this.stencilBuffer),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,this.size.width*this.resolution,this.size.height*this.resolution)}},s.prototype.activate=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.frameBuffer);var e=this.frame||this.size;this.calculateProjection(e),this.transform&&this.projectionMatrix.append(this.transform),t.viewport(0,0,e.width*this.resolution,e.height*this.resolution)},s.prototype.calculateProjection=function(t){var e=this.projectionMatrix;e.identity(),this.root?(e.a=1/t.width*2,e.d=-1/t.height*2,e.tx=-1-t.x*e.a,e.ty=1-t.y*e.d):(e.a=1/t.width*2,e.d=1/t.height*2,e.tx=-1-t.x*e.a,e.ty=-1-t.y*e.d)},s.prototype.resize=function(t,e){if(t=0|t,e=0|e,this.size.width!==t||this.size.height!==e){if(this.size.width=t,this.size.height=e,!this.root){var r=this.gl;r.bindTexture(r.TEXTURE_2D,this.texture),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t*this.resolution,e*this.resolution,0,r.RGBA,r.UNSIGNED_BYTE,null),this.stencilBuffer&&(r.bindRenderbuffer(r.RENDERBUFFER,this.stencilBuffer),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,t*this.resolution,e*this.resolution))}var i=this.frame||this.size;this.calculateProjection(i)}},s.prototype.destroy=function(){var t=this.gl;t.deleteFramebuffer(this.frameBuffer),t.deleteTexture(this.texture),this.frameBuffer=null,this.texture=null}},{"../../../const":13,"../../../math":23,"../../../utils":68,"./StencilMaskStack":56}],56:[function(t,e){function r(){this.stencilStack=[],this.reverse=!0,this.count=0}r.prototype.constructor=r,e.exports=r},{}],57:[function(t,e){function r(t){o.call(this),this.anchor=new i.Point,this._texture=null,this._width=0,this._height=0,this.tint=16777215,this.blendMode=h.BLEND_MODES.NORMAL,this.shader=null,this.cachedTint=16777215,this.texture=t||n.EMPTY}var i=t("../math"),n=t("../textures/Texture"),o=t("../display/Container"),s=t("../renderers/canvas/utils/CanvasTinter"),a=t("../utils"),h=t("../const");r.prototype.destroy=function(t,e){o.prototype.destroy.call(this),this.anchor=null,t&&this._texture.destroy(e),this._texture=null,this.shader=null},r.prototype=Object.create(o.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{width:{get:function(){return this.scale.x*this.texture._frame.width},set:function(t){this.scale.x=t/this.texture._frame.width,this._width=t}},height:{get:function(){return this.scale.y*this.texture._frame.height},set:function(t){this.scale.y=t/this.texture._frame.height,this._height=t}},texture:{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture=t,this.cachedTint=16777215,t&&(t.baseTexture.hasLoaded?this._onTextureUpdate():t.once("update",this._onTextureUpdate.bind(this))))}}}),r.prototype._onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height)},r.prototype._renderWebGL=function(t){t.setObjectRenderer(t.plugins.sprite),t.plugins.sprite.render(this)},r.prototype.getBounds=function(t){if(!this._currentBounds){var e,r,i,n,o=this._texture._frame.width,s=this._texture._frame.height,a=o*(1-this.anchor.x),h=o*-this.anchor.x,l=s*(1-this.anchor.y),u=s*-this.anchor.y,c=t||this.worldTransform,d=c.a,p=c.b,f=c.c,v=c.d,g=c.tx,m=c.ty;if(0===p&&0===f)0>d&&(d*=-1),0>v&&(v*=-1),e=d*h+g,r=d*a+g,i=v*u+m,n=v*l+m;else{var y=d*h+f*u+g,x=v*u+p*h+m,b=d*a+f*u+g,T=v*u+p*a+m,_=d*a+f*l+g,E=v*l+p*a+m,S=d*h+f*l+g,w=v*l+p*h+m;e=y,e=e>b?b:e,e=e>_?_:e,e=e>S?S:e,i=x,i=i>T?T:i,i=i>E?E:i,i=i>w?w:i,r=y,r=b>r?b:r,r=_>r?_:r,r=S>r?S:r,n=x,n=T>n?T:n,n=E>n?E:n,n=w>n?w:n}var A=this._bounds;A.x=e,A.width=r-e,A.y=i,A.height=n-i,this._currentBounds=A}return this._currentBounds},r.prototype.renderCanvas=function(t){if(!(!this.visible||this.alpha<=0||this.texture.crop.width<=0||this.texture.crop.height<=0)&&this.renderable){if(this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,t.context.globalCompositeOperation=t.blendModes[t.currentBlendMode]),this._mask&&t.maskManager.pushMask(this._mask,t),this.texture.valid){var e=this.texture.baseTexture.resolution/t.resolution;t.context.globalAlpha=this.worldAlpha,t.smoothProperty&&t.currentScaleMode!==this.texture.baseTexture.scaleMode&&(t.currentScaleMode=this.texture.baseTexture.scaleMode,t.context[t.smoothProperty]=t.currentScaleMode===h.SCALE_MODES.LINEAR);var r=this.texture.trim?this.texture.trim.x-this.anchor.x*this.texture.trim.width:this.anchor.x*-this.texture._frame.width,i=this.texture.trim?this.texture.trim.y-this.anchor.y*this.texture.trim.height:this.anchor.y*-this.texture._frame.height;t.roundPixels?(t.context.setTransform(this.worldTransform.a,this.worldTransform.b,this.worldTransform.c,this.worldTransform.d,this.worldTransform.tx*t.resolution|0,this.worldTransform.ty*t.resolution|0),r=0|r,i=0|i):t.context.setTransform(this.worldTransform.a,this.worldTransform.b,this.worldTransform.c,this.worldTransform.d,this.worldTransform.tx*t.resolution,this.worldTransform.ty*t.resolution),16777215!==this.tint?(this.cachedTint!==this.tint&&(this.cachedTint=this.tint,this.tintedTexture=s.getTintedTexture(this,this.tint)),t.context.drawImage(this.tintedTexture,0,0,this.texture.crop.width,this.texture.crop.height,r/e,i/e,this.texture.crop.width/e,this.texture.crop.height/e)):t.context.drawImage(this.texture.baseTexture.source,this.texture.crop.x,this.texture.crop.y,this.texture.crop.width,this.texture.crop.height,r/e,i/e,this.texture.crop.width/e,this.texture.crop.height/e)}for(var n=0,o=this.children.length;o>n;n++)this.children[n].renderCanvas(t);this._mask&&t.maskManager.popMask(t)}},r.fromFrame=function(t){var e=a.TextureCache[t];if(!e)throw new Error('The frameId "'+t+'" does not exist in the texture cache'+this);return new r(e)},r.fromImage=function(t,e,i){return new r(n.fromImage(t,e,i))}},{"../const":13,"../display/Container":14,"../math":23,"../renderers/canvas/utils/CanvasTinter":38,"../textures/Texture":61,"../utils":68}],58:[function(t,e){function r(t){i.call(this,t),this.vertSize=5,this.vertByteSize=4*this.vertSize,this.size=s.SPRITE_BATCH_SIZE;var e=4*this.size*this.vertByteSize,r=6*this.size;this.vertices=new ArrayBuffer(e),this.positions=new Float32Array(this.vertices),this.colors=new Uint32Array(this.vertices),this.indices=new Uint16Array(r),this.lastIndexCount=0;for(var n=0,o=0;r>n;n+=6,o+=4)this.indices[n+0]=o+0,this.indices[n+1]=o+1,this.indices[n+2]=o+2,this.indices[n+3]=o+0,this.indices[n+4]=o+2,this.indices[n+5]=o+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.textures=[],this.blendModes=[],this.shaders=[],this.sprites=[],this.shader=null}var i=t("../../renderers/webgl/utils/ObjectRenderer"),n=t("../../renderers/webgl/shaders/Shader"),o=t("../../renderers/webgl/WebGLRenderer"),s=t("../../const");
r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,o.registerPlugin("sprite",r),r.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=this.renderer.shaderManager.defaultShader,this.vertexBuffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,this.vertices,t.DYNAMIC_DRAW),this.currentBlendMode=99999},r.prototype.render=function(t){var e=t._texture;this.currentBatchSize>=this.size&&(this.flush(),this.currentBaseTexture=e.baseTexture);var r=e._uvs;if(r){var i,n,o,s,a=t.anchor.x,h=t.anchor.y;if(e.trim){var l=e.trim;n=l.x-a*l.width,i=n+e.crop.width,s=l.y-h*l.height,o=s+e.crop.height}else i=e._frame.width*(1-a),n=e._frame.width*-a,o=e._frame.height*(1-h),s=e._frame.height*-h;var u=this.currentBatchSize*this.vertByteSize,c=t.worldTransform,d=c.a,p=c.b,f=c.c,v=c.d,g=c.tx,m=c.ty,y=this.colors,x=this.positions;this.renderer.roundPixels?(x[u]=d*n+f*s+g|0,x[u+1]=v*s+p*n+m|0,x[u+5]=d*i+f*s+g|0,x[u+6]=v*s+p*i+m|0,x[u+10]=d*i+f*o+g|0,x[u+11]=v*o+p*i+m|0,x[u+15]=d*n+f*o+g|0,x[u+16]=v*o+p*n+m|0):(x[u]=d*n+f*s+g,x[u+1]=v*s+p*n+m,x[u+5]=d*i+f*s+g,x[u+6]=v*s+p*i+m,x[u+10]=d*i+f*o+g,x[u+11]=v*o+p*i+m,x[u+15]=d*n+f*o+g,x[u+16]=v*o+p*n+m),x[u+2]=r.x0,x[u+3]=r.y0,x[u+7]=r.x1,x[u+8]=r.y1,x[u+12]=r.x2,x[u+13]=r.y2,x[u+17]=r.x3,x[u+18]=r.y3;var b=t.tint;y[u+4]=y[u+9]=y[u+14]=y[u+19]=(b>>16)+(65280&b)+((255&b)<<16)+(255*t.worldAlpha<<24),this.sprites[this.currentBatchSize++]=t}},r.prototype.flush=function(){if(0!==this.currentBatchSize){var t,e=this.renderer.gl;if(this.currentBatchSize>.5*this.size)e.bufferSubData(e.ARRAY_BUFFER,0,this.vertices);else{var r=this.positions.subarray(0,this.currentBatchSize*this.vertByteSize);e.bufferSubData(e.ARRAY_BUFFER,0,r)}for(var i,o,s,a,h=0,l=0,u=null,c=this.renderer.blendModeManager.currentBlendMode,d=null,p=!1,f=!1,v=0,g=this.currentBatchSize;g>v;v++)a=this.sprites[v],i=a._texture.baseTexture,o=a.blendMode,s=a.shader||this.shader,p=c!==o,f=d!==s,(u!==i||p||f)&&(this.renderBatch(u,h,l),l=v,h=0,u=i,p&&(c=o,this.renderer.blendModeManager.setBlendMode(c)),f&&(d=s,t=d.shaders?d.shaders[e.id]:d,t||(t=new n(this.renderer.shaderManager,null,d.fragmentSrc,d.uniforms),d.shaders[e.id]=t),this.renderer.shaderManager.setShader(t),e.uniformMatrix3fv(t.uniforms.projectionMatrix._location,!1,this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)))),h++;this.renderBatch(u,h,l),this.currentBatchSize=0}},r.prototype.renderBatch=function(t,e,r){if(0!==e){var i=this.renderer.gl;t._glTextures[i.id]?i.bindTexture(i.TEXTURE_2D,t._glTextures[i.id]):this.renderer.updateTexture(t),i.drawElements(i.TRIANGLES,6*e,i.UNSIGNED_SHORT,6*r*2),this.renderer.drawCount++}},r.prototype.start=function(){var t=this.renderer.gl;t.activeTexture(t.TEXTURE0),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var e=this.vertByteSize;t.vertexAttribPointer(this.shader.attributes.aVertexPosition,2,t.FLOAT,!1,e,0),t.vertexAttribPointer(this.shader.attributes.aTextureCoord,2,t.FLOAT,!1,e,8),t.vertexAttribPointer(this.shader.attributes.aColor,4,t.UNSIGNED_BYTE,!0,e,16)},r.prototype.destroy=function(){this.renderer.gl.deleteBuffer(this.vertexBuffer),this.renderer.gl.deleteBuffer(this.indexBuffer),this.shader.destroy(),this.renderer=null,this.vertices=null,this.positions=null,this.colors=null,this.indices=null,this.vertexBuffer=null,this.indexBuffer=null,this.currentBaseTexture=null,this.drawing=!1,this.textures=null,this.blendModes=null,this.shaders=null,this.sprites=null,this.shader=null}},{"../../const":13,"../../renderers/webgl/WebGLRenderer":39,"../../renderers/webgl/shaders/Shader":51,"../../renderers/webgl/utils/ObjectRenderer":53}],59:[function(t,e){function r(t,e,r){this.uuid=i.uuid(),this.resolution=r||1,this.width=100,this.height=100,this.realWidth=100,this.realHeight=100,this.scaleMode=e||n.SCALE_MODES.DEFAULT,this.hasLoaded=!1,this.isLoading=!1,this.source=null,this.premultipliedAlpha=!0,this.imageUrl=null,this.isPowerOfTwo=!1,this.mipmap=!1,this._glTextures=[],t&&this.loadSource(t)}var i=t("../utils"),n=t("../const");r.prototype.constructor=r,e.exports=r,i.eventTarget.mixin(r.prototype),r.prototype.update=function(){this.emit("update",this)},r.prototype.loadSource=function(t){var e=this.isLoading;if(this.hasLoaded=!1,this.isLoading=!1,e&&this.source&&(this.source.onload=null,this.source.onerror=null),this.source=t,(this.source.complete||this.source.getContext)&&this.source.width&&this.source.height)this._sourceLoaded();else if(!t.getContext){this.isLoading=!0;var r=this;t.onload=function(){t.onload=null,t.onerror=null,r.isLoading&&(r.isLoading=!1,r._sourceLoaded(),r.emit("loaded",r))},t.onerror=function(){t.onload=null,t.onerror=null,r.isLoading&&(r.isLoading=!1,r.emit("error",r))},t.complete&&t.src&&(this.isLoading=!1,t.onload=null,t.onerror=null,t.width&&t.height?(this._sourceLoaded(),e&&this.emit("loaded",this)):e&&this.emit("error",this))}},r.prototype._sourceLoaded=function(){this.hasLoaded=!0,this.realWidth=this.source.naturalWidth||this.source.width,this.realHeight=this.source.naturalHeight||this.source.height,this.width=this.realWidth/this.resolution,this.height=this.realHeight/this.resolution,this.isPowerOfTwo=i.isPowerOfTwo(this.width,this.height),this.update()},r.prototype.destroy=function(){this.imageUrl?(delete i.BaseTextureCache[this.imageUrl],delete i.TextureCache[this.imageUrl],this.imageUrl=null,navigator.isCocoonJS||(this.source.src="")):this.source&&this.source._pixiId&&delete i.BaseTextureCache[this.source._pixiId],this.source=null,this.dispose()},r.prototype.dispose=function(){this.emit("dispose",this)},r.prototype.updateSourceImage=function(t){this.source.src=t,this.loadSource(this.source)},r.fromImage=function(t,e,n){var o=i.BaseTextureCache[t];if(void 0===e&&0!==t.indexOf("data:")&&(e=!0),!o){var s=new Image;e&&(s.crossOrigin=""),o=new r(s,n),o.imageUrl=t,s.src=t,i.BaseTextureCache[t]=o,this.resolution=i.getResolutionOfUrl(t)}return o},r.fromCanvas=function(t,e){t._pixiId||(t._pixiId="canvas_"+i.uuid());var n=i.BaseTextureCache[t._pixiId];return n||(n=new r(t,e),i.BaseTextureCache[t._pixiId]=n),n}},{"../const":13,"../utils":68}],60:[function(t,e){function r(t,e,r,l,u){if(!t)throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.");e=e||100,r=r||100,u=u||h.RESOLUTION;var c=new i;if(c.width=e,c.height=r,c.resolution=u,c.scaleMode=l||h.SCALE_MODES.DEFAULT,c.hasLoaded=!0,n.call(this,c,new a.Rectangle(0,0,e,r)),this.width=e,this.height=r,this.resolution=u,this.render=null,this.renderer=t,this.renderer.type===h.RENDERER_TYPE.WEBGL){var d=this.renderer.gl;this.textureBuffer=new o(d,this.width,this.height,null,this.resolution),this.baseTexture._glTextures[d.id]=this.textureBuffer.texture,this.render=this.renderWebGL}else this.render=this.renderCanvas,this.textureBuffer=new s(this.width*this.resolution,this.height*this.resolution),this.baseTexture.source=this.textureBuffer.canvas;this.valid=!0,this._updateUvs()}var i=t("./BaseTexture"),n=t("./Texture"),o=t("../renderers/webgl/utils/RenderTarget"),s=t("../renderers/canvas/utils/CanvasBuffer"),a=t("../math"),h=t("../const"),l=new a.Matrix;r.prototype=Object.create(n.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.resize=function(t,e,r){(t!==this.width||e!==this.height)&&(this.valid=t>0&&e>0,this.width=this._frame.width=this.crop.width=t,this.height=this._frame.height=this.crop.height=e,r&&(this.baseTexture.width=this.width,this.baseTexture.height=this.height),this.renderer.type===h.RENDERER_TYPE.WEBGL&&(this.projection.x=this.width/2,this.projection.y=-this.height/2),this.valid&&this.textureBuffer.resize(this.width*this.resolution,this.height*this.resolution))},r.prototype.clear=function(){this.valid&&(this.renderer.type===h.RENDERER_TYPE.WEBGL&&this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER,this.textureBuffer.frameBuffer),this.textureBuffer.clear())},r.prototype.renderWebGL=function(t,e,r,i){if(this.valid){if(i=!!i,this.textureBuffer.transform=e,t.worldAlpha=t.alpha,i){t.worldTransform.identity();var n,o,s=t.children;for(n=0,o=s.length;o>n;++n)s[n].updateTransform()}r&&this.textureBuffer.clear(),this.renderer.renderDisplayObject(t,this.textureBuffer)}},r.prototype.renderCanvas=function(t,e,r,i){if(this.valid){i=!!i;var n=t.worldTransform,o=l;o.identity(),e&&o.append(e),t.worldTransform=o,t.worldAlpha=1;var s,a,h=t.children;for(s=0,a=h.length;a>s;++s)h[s].updateTransform();r&&this.textureBuffer.clear(),t.worldTransform=n;var u=this.textureBuffer.context,c=this.renderer.resolution;this.renderer.resolution=this.resolution,this.renderer.renderDisplayObject(t,u),this.renderer.resolution=c}},r.prototype.destroy=function(){n.prototype.destroy.call(this,!0),this.textureBuffer.destroy(),this.renderer=null},r.prototype.getImage=function(){var t=new Image;return t.src=this.getBase64(),t},r.prototype.getBase64=function(){return this.getCanvas().toDataURL()},r.prototype.getCanvas=function(){if(this.renderer.type===h.RENDERER_TYPE.WEBGL){var t=this.renderer.gl,e=this.textureBuffer.width,r=this.textureBuffer.height,i=new Uint8Array(4*e*r);t.bindFramebuffer(t.FRAMEBUFFER,this.textureBuffer.frameBuffer),t.readPixels(0,0,e,r,t.RGBA,t.UNSIGNED_BYTE,i),t.bindFramebuffer(t.FRAMEBUFFER,null);var n=new s(e,r),o=n.context.getImageData(0,0,e,r);return o.data.set(i),n.context.putImageData(o,0,0),n.canvas}return this.textureBuffer.canvas}},{"../const":13,"../math":23,"../renderers/canvas/utils/CanvasBuffer":35,"../renderers/webgl/utils/RenderTarget":55,"./BaseTexture":59,"./Texture":61}],61:[function(t,e){function r(t,e,i,n,o){this.noFrame=!1,e||(this.noFrame=!0,e=new a.Rectangle(0,0,1,1)),t instanceof r&&(t=t.baseTexture),this.baseTexture=t,this._frame=e,this.trim=n,this.valid=!1,this.requiresUpdate=!1,this._uvs=null,this.width=0,this.height=0,this.crop=i||e,this.rotate=!!o,t.hasLoaded?(this.noFrame&&(e=new a.Rectangle(0,0,t.width,t.height)),this.frame=e):t.addEventListener("loaded",this.onBaseTextureLoaded.bind(this))}var i=t("./BaseTexture"),n=t("./VideoBaseTexture"),o=t("./TextureUvs"),s=t("../utils/eventTarget"),a=t("../math"),h=t("../utils");r.prototype.constructor=r,e.exports=r,s.mixin(r.prototype),Object.defineProperties(r.prototype,{frame:{get:function(){return this._frame},set:function(t){if(this._frame=t,this.noFrame=!1,this.width=t.width,this.height=t.height,!this.trim&&!this.rotate&&(t.x+t.width>this.baseTexture.width||t.y+t.height>this.baseTexture.height))throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.valid=t&&t.width&&t.height&&this.baseTexture.source&&this.baseTexture.hasLoaded,this.trim?(this.width=this.trim.width,this.height=this.trim.height,this._frame.width=this.trim.width,this._frame.height=this.trim.height):this.crop=t,this.valid&&this._updateUvs()}}}),r.prototype.update=function(){this.baseTexture.update()},r.prototype.onBaseTextureLoaded=function(){var t=this.baseTexture;t.removeEventListener("loaded",this.onLoaded),this.frame=this.noFrame?new a.Rectangle(0,0,t.width,t.height):this._frame,this.dispatchEvent({type:"update",content:this})},r.prototype.destroy=function(t){t&&this.baseTexture.destroy(),this.valid=!1},r.prototype._updateUvs=function(){this._uvs||(this._uvs=new o),this._uvs.set(this.crop,this.baseTexture,this.rotate)},r.fromImage=function(t,e,n){var o=h.TextureCache[t];return o||(o=new r(i.fromImage(t,e,n)),h.TextureCache[t]=o),o},r.fromFrame=function(t){var e=h.TextureCache[t];if(!e)throw new Error('The frameId "'+t+'" does not exist in the texture cache'+this);return e},r.fromCanvas=function(t,e){return new r(i.fromCanvas(t,e))},r.fromVideo=function(t,e){return new r(n.baseTextureFromVideo(t,e))},r.addTextureToCache=function(t,e){h.TextureCache[e]=t},r.removeTextureFromCache=function(t){var e=h.TextureCache[t];return delete h.TextureCache[t],delete h.BaseTextureCache[t],e},r.emptyTexture=new r(new i)},{"../math":23,"../utils":68,"../utils/eventTarget":67,"./BaseTexture":59,"./TextureUvs":62,"./VideoBaseTexture":63}],62:[function(t,e){function r(){this.x0=0,this.y0=0,this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.x3=0,this.y3=0}e.exports=r,r.prototype.set=function(t,e,r){var i=e.width,n=e.height;r?(this.x0=(t.x+t.height)/i,this.y0=t.y/n,this.x1=(t.x+t.height)/i,this.y1=(t.y+t.width)/n,this.x2=t.x/i,this.y2=(t.y+t.width)/n,this.x3=t.x/i,this.y3=t.y/n):(this.x0=t.x/i,this.y0=t.y/n,this.x1=(t.x+t.width)/i,this.y1=t.y/n,this.x2=(t.x+t.width)/i,this.y2=(t.y+t.height)/n,this.x3=t.x/i,this.y3=(t.y+t.height)/n)}},{}],63:[function(t,e){function r(t,e){if(!t)throw new Error("No video source element specified.");(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),n.call(this,t,e),this.autoUpdate=!1,this._onUpdate=this._onUpdate.bind(this),this._onCanPlay=this._onCanPlay.bind(this),t.complete||(t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlay),t.addEventListener("play",this._onPlayStart.bind(this)),t.addEventListener("pause",this._onPlayStop.bind(this))),this.__loaded=!1}function i(t,e){e||(e="video/"+t.substr(t.lastIndexOf(".")+1));var r=document.createElement("source");return r.src=t,r.type=e,r}var n=t("./BaseTexture"),o=t("../utils");r.prototype=Object.create(n.prototype),r.prototype.constructor=r,e.exports=r,r.prototype._onUpdate=function(){this.autoUpdate&&(window.requestAnimationFrame(this._onUpdate),this.update())},r.prototype._onPlayStart=function(){this.autoUpdate||(window.requestAnimationFrame(this._onUpdate),this.autoUpdate=!0)},r.prototype._onPlayStop=function(){this.autoUpdate=!1},r.prototype._onCanPlay=function(){this.hasLoaded=!0,this.source&&(this.source.removeEventListener("canplay",this._onCanPlay),this.source.removeEventListener("canplaythrough",this._onCanPlay),this.width=this.source.videoWidth,this.height=this.source.videoHeight,this.source.play(),this.__loaded||(this.__loaded=!0,this.emit("loaded",this)))},r.prototype.destroy=function(){this.source&&this.source._pixiId&&(o.BaseTextureCache[this.source._pixiId]=null,delete o.BaseTextureCache[this.source._pixiId],this.source._pixiId=null,delete this.source._pixiId),n.prototype.destroy.call(this)},r.fromVideo=function(t,e){t._pixiId||(t._pixiId="video_"+o.uuid());var i=o.BaseTextureCache[t._pixiId];return i||(i=new r(t,e),o.BaseTextureCache[t._pixiId]=i),i},r.fromUrl=function(t,e){var n=document.createElement("video");if(Array.isArray(t))for(var o=0;o<t.length;++o)n.appendChild(i(t.src||t,t.mime));else n.appendChild(i(t.src||t,t.mime));return n.load(),n.play(),r.textureFromVideo(n,e)},r.fromUrls=r.fromUrl},{"../utils":68,"./BaseTexture":59}],64:[function(t,e){function r(t,e,r){this.__isEventObject=!0,this.stopped=!1,this.stoppedImmediate=!1,this.target=t,this.type=e,this.data=r,this.timeStamp=Date.now()}r.prototype.constructor=r,e.exports=r,r.prototype.stopPropagation=function(){this.stopped=!0},r.prototype.stopImmediatePropagation=function(){this.stoppedImmediate=!0}},{}],65:[function(t,e){var r=e.exports={};r.Triangulate=function(t){var e=!0,i=t.length>>1;if(3>i)return[];for(var n=[],o=[],s=0;i>s;s++)o.push(s);s=0;for(var a=i;a>3;){var h=o[(s+0)%a],l=o[(s+1)%a],u=o[(s+2)%a],c=t[2*h],d=t[2*h+1],p=t[2*l],f=t[2*l+1],v=t[2*u],g=t[2*u+1],m=!1;if(r._convex(c,d,p,f,v,g,e)){m=!0;for(var y=0;a>y;y++){var x=o[y];if(x!==h&&x!==l&&x!==u&&r._PointInTriangle(t[2*x],t[2*x+1],c,d,p,f,v,g)){m=!1;break}}}if(m)n.push(h,l,u),o.splice((s+1)%a,1),a--,s=0;else if(s++>3*a){if(!e)return null;for(n=[],o=[],s=0;i>s;s++)o.push(s);s=0,a=i,e=!1}}return n.push(o[0],o[1],o[2]),n},r._PointInTriangle=function(t,e,r,i,n,o,s,a){var h=s-r,l=a-i,u=n-r,c=o-i,d=t-r,p=e-i,f=h*h+l*l,v=h*u+l*c,g=h*d+l*p,m=u*u+c*c,y=u*d+c*p,x=1/(f*m-v*v),b=(m*g-v*y)*x,T=(f*y-v*g)*x;return b>=0&&T>=0&&1>b+T},r._convex=function(t,e,r,i,n,o,s){return(e-i)*(n-r)+(r-t)*(o-i)>=0===s}},{}],66:[function(t,e){var r=t("./eventTarget"),i=t("./EventData"),n=function(){this.updateBind=this.update.bind(this),this.active=!1,this.eventData=new i(this,"tick",{deltaTime:1}),this.deltaTime=1,this.timeElapsed=0,this.lastTime=0,this.speed=1,this.start()};r.mixin(n.prototype),n.prototype.start=function(){this.active||(this.active=!0,requestAnimationFrame(this.updateBind))},n.prototype.stop=function(){this.active&&(this.active=!1)},n.prototype.update=function(){if(this.active){requestAnimationFrame(this.updateBind);var t=(new Date).getTime(),e=t-this.lastTime;e>100&&(e=100),this.deltaTime=.06*e,this.deltaTime*=this.speed,this.eventData.data.deltaTime=this.deltaTime,this.emit("tick",this.eventData),this.lastTime=t}},e.exports=new n},{"./EventData":64,"./eventTarget":67}],67:[function(t,e){function r(t){t.listeners=function(t){return this._listeners=this._listeners||{},this._listeners[t]?this._listeners[t].slice():[]},t.emit=t.dispatchEvent=function(t,e){if(this._listeners=this._listeners||{},this._listeners[t]){e&&e.__isEventObject||(n.target=this,n.type=t,n.data=e,e=n);var r,i=this._listeners[t].slice(0),o=i.length,s=i[0];for(r=0;o>r;s=i[++r])if(s(e),e.stoppedImmediate)return this;return e.stopped?this:this}},t.on=t.addEventListener=function(t,e){return this._listeners=this._listeners||{},(this._listeners[t]=this._listeners[t]||[]).push(e),this},t.once=function(t,e){function r(){e.apply(i.off(t,r),arguments)}this._listeners=this._listeners||{};var i=this;return r._originalHandler=e,this.on(t,r)},t.off=t.removeEventListener=function(t,e){if(this._listeners=this._listeners||{},!this._listeners[t])return this;for(var r=this._listeners[t],i=e?r.length:0;i-->0;)(r[i]===e||r[i]._originalHandler===e)&&r.splice(i,1);return 0===r.length&&(this._listeners[t]=null),this},t.removeAllListeners=function(t){return this._listeners=this._listeners||{},this._listeners[t]?(this._listeners[t]=null,this):this}}var i=t("./EventData"),n=new i(null,null,{});e.exports={mixin:function(t){r(t)}}},{"./EventData":64}],68:[function(t,e){var r=t("../const"),i=e.exports={_uid:0,_saidHello:!1,Ticker:t("./Ticker"),EventData:t("./EventData"),eventTarget:t("./eventTarget"),pluginTarget:t("./pluginTarget"),PolyK:t("./PolyK"),uuid:function(){return++i._uid},hex2rgb:function(t,e){return e=e||[],e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(255&t)/255,e},hex2string:function(t){return t=t.toString(16),t="000000".substr(0,6-t.length)+t,"#"+t},rgb2hex:function(t){return(255*t[0]<<16)+(255*t[1]<<8)+255*t[2]},canUseNewCanvasBlendModes:function(){if("undefined"==typeof document)return!1;var t=document.createElement("canvas"),e=t.getContext("2d");return t.width=1,t.height=1,e.fillStyle="#000",e.fillRect(0,0,1,1),e.globalCompositeOperation="multiply",e.fillStyle="#fff",e.fillRect(0,0,1,1),0===e.getImageData(0,0,1,1).data[0]},getNextPowerOfTwo:function(t){if(t>0&&0===(t&t-1))return t;for(var e=1;t>e;)e<<=1;return e},isPowerOfTwo:function(t,e){return t>0&&0===(t&t-1)&&e>0&&0===(e&e-1)},getResolutionOfUrl:function(t){var e=r.RETINA_PREFIX.exec(t);return e?parseFloat(e[1]):1},sayHello:function(t){if(!i._saidHello){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var e=["%c %c %c Pixi.js "+r.VERSION+" - "+t+"  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ ","background: #ff66a5","background: #ff66a5","color: #ff66a5; background: #030307;","background: #ff66a5","background: #ffc3dc","background: #ff66a5","color: #ff2424; background: #fff","color: #ff2424; background: #fff","color: #ff2424; background: #fff"];console.log.apply(console,e)}else window.console&&console.log("Pixi.js "+r.VERSION+" - "+t+" - http://www.pixijs.com/");i._saidHello=!0}},TextureCache:{},BaseTextureCache:{}}},{"../const":13,"./EventData":64,"./PolyK":65,"./Ticker":66,"./eventTarget":67,"./pluginTarget":69}],69:[function(t,e){function r(t){t.__plugins={},t.registerPlugin=function(e,r){t.__plugins[e]=r},t.prototype.initPlugins=function(){this.plugins=this.plugins||{};for(var e in t.__plugins)this.plugins[e]=new t.__plugins[e](this)},t.prototype.destroyPlugins=function(){for(var t in this.plugins)this.plugins[t].destroy(),this.plugins[t]=null;this.plugins=null}}e.exports={mixin:function(t){r(t)}}},{}],70:[function(t,e){function r(t){i.Sprite.call(this,t[0]),this._textures=t,this.animationSpeed=1,this.loop=!0,this.onComplete=null,this.currentFrame=0,this.playing=!1,this._updateBound=this.update.bind(this)}var i=t("../core"),n=t("../core/utils");r.prototype=Object.create(i.Sprite.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{totalFrames:{get:function(){return this._textures.length}},textures:{get:function(){return this._textures},set:function(t){this._textures=t,this.texture=this._textures[Math.floor(this.currentFrame)%this._textures.length]}}}),r.prototype.stop=function(){this.playing&&(this.playing=!1,n.Ticker.off("tick",this._updateBound))},r.prototype.play=function(){this.playing||(this.playing=!0,n.Ticker.on("tick",this._updateBound))},r.prototype.gotoAndStop=function(t){this.stop(),this.currentFrame=t;var e=Math.round(this.currentFrame);this.texture=this._textures[e%this._textures.length]},r.prototype.gotoAndPlay=function(t){this.currentFrame=t,this.play()},r.prototype.update=function(t){this.currentFrame+=this.animationSpeed*t.data.deltaTime;var e=Math.floor(this.currentFrame);0>e?this.loop?(this.currentFrame+=this._textures.length,this.texture=this._textures[this.currentFrame]):(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this.loop||e<this._textures.length?this.texture=this._textures[e%this._textures.length]:e>=this._textures.length&&(this.gotoAndStop(this.textures.length-1),this.onComplete&&this.onComplete())},r.prototype.destroy=function(){this.stop(),i.Sprite.prototype.destroy.call(this)},r.fromFrames=function(t){for(var e=[],n=0;n<t.length;++n)e.push(new i.Texture.fromFrame(t[n]));return new r(e)},r.fromImages=function(t){for(var e=[],n=0;n<t.length;++n)e.push(new i.Texture.fromImage(t[n]));return new r(e)}},{"../core":20,"../core/utils":68}],71:[function(t,e){function r(t,e){i.call(this,t),this.points=e,this.vertices=new Float32Array(4*e.length),this.uvs=new Float32Array(4*e.length),this.colors=new Float32Array(2*e.length),this.indices=new Uint16Array(2*e.length),this.refresh()}var i=t("./Strip");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.refresh=function(){var t=this.points;if(!(t.length<1)){var e=this.uvs,r=this.indices,i=this.colors;e[0]=0,e[1]=0,e[2]=0,e[3]=1,i[0]=1,i[1]=1,r[0]=0,r[1]=1;for(var n,o,s,a=t.length,h=1;a>h;h++)n=t[h],o=4*h,s=h/(a-1),h%2?(e[o]=s,e[o+1]=0,e[o+2]=s,e[o+3]=1):(e[o]=s,e[o+1]=0,e[o+2]=s,e[o+3]=1),o=2*h,i[o]=1,i[o+1]=1,o=2*h,r[o]=o,r[o+1]=o+1}},r.prototype.updateTransform=function(){var t=this.points;if(!(t.length<1)){for(var e,r,i,n,o,s,a=t[0],h=0,l=0,u=this.vertices,c=t.length,d=0;c>d;d++)r=t[d],i=4*d,e=d<t.length-1?t[d+1]:r,l=-(e.x-a.x),h=e.y-a.y,n=10*(1-d/(c-1)),n>1&&(n=1),o=Math.sqrt(h*h+l*l),s=this.texture.height/2,h/=o,l/=o,h*=s,l*=s,u[i]=r.x+h,u[i+1]=r.y+l,u[i+2]=r.x-h,u[i+3]=r.y-l,a=r;this.containerUpdateTransform()}}},{"./Strip":72}],72:[function(t,e){function r(t){i.Container.call(this),this.texture=t,this.uvs=new Float32Array([0,1,1,1,1,0,0,1]),this.vertices=new Float32Array([0,0,100,0,100,100,0,100]),this.colors=new Float32Array([1,1,1,1]),this.indices=new Uint16Array([0,1,2,3]),this.dirty=!0,this.blendMode=i.CONST.BLEND_MODES.NORMAL,this.canvasPadding=0,this.drawMode=r.DrawModes.TRIANGLE_STRIP}var i=t("../core");r.prototype=Object.create(i.Container.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.renderWebGL=function(t){!this.visible||this.alpha<=0||!this.renderable||(t.spriteBatch.stop(),this._vertexBuffer||this._initWebGL(t),t.shaderManager.setShader(t.shaderManager.plugins.stripShader),this._renderStrip(t),t.spriteBatch.start())},r.prototype._initWebGL=function(t){var e=t.gl;this._vertexBuffer=e.createBuffer(),this._indexBuffer=e.createBuffer(),this._uvBuffer=e.createBuffer(),this._colorBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this._vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.DYNAMIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,this._uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,this._colorBuffer),e.bufferData(e.ARRAY_BUFFER,this.colors,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this._indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW)},r.prototype._renderStrip=function(t){var e=t.gl,i=t.projection,n=t.offset,o=t.shaderManager.plugins.stripShader,s=this.drawMode===r.DrawModes.TRIANGLE_STRIP?e.TRIANGLE_STRIP:e.TRIANGLES;t.blendModeManager.setBlendMode(this.blendMode),e.uniformMatrix3fv(o.translationMatrix,!1,this.worldTransform.toArray(!0)),e.uniform2f(o.projectionVector,i.x,-i.y),e.uniform2f(o.offsetVector,-n.x,-n.y),e.uniform1f(o.alpha,this.worldAlpha),this.dirty?(this.dirty=!1,e.bindBuffer(e.ARRAY_BUFFER,this._vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.STATIC_DRAW),e.vertexAttribPointer(o.aVertexPosition,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this._uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW),e.vertexAttribPointer(o.aTextureCoord,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),this.texture.baseTexture._dirty[e.id]?t.updateTexture(this.texture.baseTexture):e.bindTexture(e.TEXTURE_2D,this.texture.baseTexture._glTextures[e.id]),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this._indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW)):(e.bindBuffer(e.ARRAY_BUFFER,this._vertexBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.vertices),e.vertexAttribPointer(o.aVertexPosition,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this._uvBuffer),e.vertexAttribPointer(o.aTextureCoord,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),this.texture.baseTexture._dirty[e.id]?t.updateTexture(this.texture.baseTexture):e.bindTexture(e.TEXTURE_2D,this.texture.baseTexture._glTextures[e.id]),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this._indexBuffer)),e.drawElements(s,this.indices.length,e.UNSIGNED_SHORT,0)},r.prototype.renderCanvas=function(t){if(this.visible&&!(this.alpha<=0)&&this.renderable){var e=t.context,i=this.worldTransform;t.roundPixels?e.setTransform(i.a,i.b,i.c,i.d,0|i.tx,0|i.ty):e.setTransform(i.a,i.b,i.c,i.d,i.tx,i.ty),this.drawMode===r.DrawModes.TRIANGLE_STRIP?this._renderCanvasTriangleStrip(e):this._renderCanvasTriangles(e)}},r.prototype._renderCanvasTriangleStrip=function(t){for(var e=this.vertices,r=this.uvs,i=e.length/2,n=0;i-2>n;n++){var o=2*n;this._renderCanvasDrawTriangle(t,e,r,o,o+2,o+4)}},r.prototype._renderCanvasTriangles=function(t){for(var e=this.vertices,r=this.uvs,i=this.indices,n=i.length,o=0;n>o;o+=3){var s=2*i[o],a=2*i[o+1],h=2*i[o+2];this._renderCanvasDrawTriangle(t,e,r,s,a,h)}},r.prototype._renderCanvasDrawTriangle=function(t,e,r,i,n,o){var s=this.texture.baseTexture.source,a=this.texture.width,h=this.texture.height,l=e[i],u=e[n],c=e[o],d=e[i+1],p=e[n+1],f=e[o+1],v=r[i]*a,g=r[n]*a,m=r[o]*a,y=r[i+1]*h,x=r[n+1]*h,b=r[o+1]*h;if(this.canvasPadding>0){var T=this.canvasPadding/this.worldTransform.a,_=this.canvasPadding/this.worldTransform.d,E=(l+u+c)/3,S=(d+p+f)/3,w=l-E,A=d-S,C=Math.sqrt(w*w+A*A);l=E+w/C*(C+T),d=S+A/C*(C+_),w=u-E,A=p-S,C=Math.sqrt(w*w+A*A),u=E+w/C*(C+T),p=S+A/C*(C+_),w=c-E,A=f-S,C=Math.sqrt(w*w+A*A),c=E+w/C*(C+T),f=S+A/C*(C+_)}t.save(),t.beginPath(),t.moveTo(l,d),t.lineTo(u,p),t.lineTo(c,f),t.closePath(),t.clip();var R=v*x+y*m+g*b-x*m-y*g-v*b,M=l*x+y*c+u*b-x*c-y*u-l*b,D=v*u+l*m+g*c-u*m-l*g-v*c,O=v*x*c+y*u*m+l*g*b-l*x*m-y*g*c-v*u*b,P=d*x+y*f+p*b-x*f-y*p-d*b,F=v*p+d*m+g*f-p*m-d*g-v*f,L=v*x*f+y*p*m+d*g*b-d*x*m-y*g*f-v*p*b;t.transform(M/R,P/R,D/R,F/R,O/R,L/R),t.drawImage(s,0,0),t.restore()},r.prototype.renderStripFlat=function(t){var e=this.context,r=t.vertices,i=r.length/2;e.beginPath();for(var n=1;i-2>n;n++){var o=2*n,s=r[o],a=r[o+2],h=r[o+4],l=r[o+1],u=r[o+3],c=r[o+5];e.moveTo(s,l),e.lineTo(a,u),e.lineTo(h,c)}e.fillStyle="#FF0000",e.fill(),e.closePath()},r.prototype.onTextureUpdate=function(){this.updateFrame=!0},r.prototype.getBounds=function(t){for(var e=t||this.worldTransform,r=e.a,n=e.b,o=e.c,s=e.d,a=e.tx,h=e.ty,l=-1/0,u=-1/0,c=1/0,d=1/0,p=this.vertices,f=0,v=p.length;v>f;f+=2){var g=p[f],m=p[f+1],y=r*g+o*m+a,x=s*m+n*g+h;c=c>y?y:c,d=d>x?x:d,l=y>l?y:l,u=x>u?x:u}if(c===-1/0||1/0===u)return i.math.Rectangle.EMPTY;var b=this._bounds;return b.x=c,b.width=l-c,b.y=d,b.height=u-d,this._currentBounds=b,b},r.DrawModes={TRIANGLE_STRIP:0,TRIANGLES:1}},{"../core":20}],73:[function(t,e){function r(t){i.Shader.call(this,t,["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","void main(void){","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","}"].join("\n"),["precision mediump float;","uniform float alpha;","uniform sampler2D uSampler;","varying vec2 vTextureCoord;","void main(void){","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;","}"].join("\n"),{alpha:{type:"1f",value:0},translationMatrix:{type:"mat3",value:new Float32Array(9)}})}var i=t("../core");r.prototype=Object.create(i.Shader.prototype),r.prototype.constructor=r,e.exports=r},{"../core":20}],74:[function(t,e){function r(t,e,r){i.Sprite.call(this,t),this.tileScale=new i.math.Point(1,1),this.tilePosition=new i.math.Point(0,0),this._width=e||100,this._height=r||100,this._tileScaleOffset=new i.math.Point(1,1),this._tilingTexture=null,this._refreshTexture=!1,this._uvs=new n}var i=t("../core"),n=t("../core/textures/TextureUvs"),o=t("../core/textures/RenderTexture"),s=new i.Sprite,a=new i.math.Point;r.prototype=Object.create(i.Sprite.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{width:{get:function(){return this._width},set:function(t){this._width=t}},height:{get:function(){return this._height},set:function(t){this._height=t}}}),r.prototype._onTextureUpdate=function(){i.Sprite.prototype._onTextureUpdate.call(this),this._refreshTexture=!0},r.prototype._renderWebGL=function(t){(!this._tilingTexture||this._refreshTexture)&&this.generateTilingTexture(t,this.texture,!0);var e=this._tilingTexture;if(e){var r=this._uvs;this.tilePosition.x%=e.baseTexture.width*this._tileScaleOffset.x,this.tilePosition.y%=e.baseTexture.height*this._tileScaleOffset.y;var i=this.tilePosition.x/(e.baseTexture.width*this._tileScaleOffset.x),n=this.tilePosition.y/(e.baseTexture.height*this._tileScaleOffset.y),o=this._width/e.baseTexture.width,s=this._height/e.baseTexture.height;o/=this.tileScale.x,s/=this.tileScale.y,r.x0=0-i,r.y0=0-n,r.x1=1*o-i,r.y1=0-n,r.x2=1*o-i,r.y2=1*s-n,r.x3=0-i,r.y3=1*s-n;var a=e._uvs,h=e._frame.width,l=e._frame.height;e._uvs=r,e._frame.width=this.width,e._frame.height=this.height,t.setObjectRenderer(t.plugins.sprite),t.plugins.sprite.render(this),e._uvs=a,e._frame.width=h,e._frame.height=l}},r.prototype.renderCanvas=function(t){if(this.visible&&!(this.alpha<=0)){var e=t.context;this._mask&&t.maskManager.pushMask(this._mask,t),e.globalAlpha=this.worldAlpha;var r,i,n=this.worldTransform,o=t.resolution;if(e.setTransform(n.a*o,n.b*o,n.c*o,n.d*o,n.tx*o,n.ty*o),!this.__tilePattern||this._refreshTexture){if(this.generateTilingTexture(!1),!this._tilingTexture)return;this.__tilePattern=e.createPattern(this._tilingTexture.baseTexture.source,"repeat")}this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,e.globalCompositeOperation=t.blendModes[t.currentBlendMode]);var s=this.tilePosition,a=this.tileScale;for(s.x%=this._tilingTexture.baseTexture.width,s.y%=this._tilingTexture.baseTexture.height,e.scale(a.x,a.y),e.translate(s.x+this.anchor.x*-this._width,s.y+this.anchor.y*-this._height),e.fillStyle=this.__tilePattern,e.fillRect(-s.x,-s.y,this._width/a.x,this._height/a.y),e.translate(-s.x+this.anchor.x*this._width,-s.y+this.anchor.y*this._height),e.scale(1/a.x,1/a.y),this._mask&&t.maskManager.popMask(t),r=0,i=this.children.length;i>r;++r)this.children[r].renderCanvas(t)
}},r.prototype.getBounds=function(){var t,e,r,i,n=this._width,o=this._height,s=n*(1-this.anchor.x),a=n*-this.anchor.x,h=o*(1-this.anchor.y),l=o*-this.anchor.y,u=this.worldTransform,c=u.a,d=u.b,p=u.c,f=u.d,v=u.tx,g=u.ty,m=c*a+p*l+v,y=f*l+d*a+g,x=c*s+p*l+v,b=f*l+d*s+g,T=c*s+p*h+v,_=f*h+d*s+g,E=c*a+p*h+v,S=f*h+d*a+g;t=m,t=t>x?x:t,t=t>T?T:t,t=t>E?E:t,r=y,r=r>b?b:r,r=r>_?_:r,r=r>S?S:r,e=m,e=x>e?x:e,e=T>e?T:e,e=E>e?E:e,i=y,i=b>i?b:i,i=_>i?_:i,i=S>i?S:i;var w=this._bounds;return w.x=t,w.width=e-t,w.y=r,w.height=i-r,this._currentBounds=w,w},r.prototype.onTextureUpdate=function(){},r.prototype.generateTilingTexture=function(t,e,r){if(this.texture.baseTexture.hasLoaded){e=this.originalTexture||this.texture;var n,a,h=e.frame,l=h.width!==e.baseTexture.width||h.height!==e.baseTexture.height;if(r&&!e.baseTexture.isPowerOfTwo||l){n=i.utils.getNextPowerOfTwo(h.width),a=i.utils.getNextPowerOfTwo(h.height),s.texture=e;var u=new o(t,n,a);s.worldTransform.a=n/h.width,s.worldTransform.d=a/h.height;var c=t.currentRenderTarget;u.render(s,null,!0,!1),t.setRenderTarget(c),this._tilingTexture=u}else this._tilingTexture&&this._tilingTexture.isTiling&&this._tilingTexture.destroy(!0),this._tileScaleOffset.x=1,this._tileScaleOffset.y=1,this._tilingTexture=e;this._refreshTexture=!1,this.originalTexture=this.texture,this._texture=this._tilingTexture}},r.prototype.hitTest=function(t){this.worldTransform.applyInverse(t,a);var e,r=this._width,i=this._height,n=-r*this.anchor.x;return a.x>n&&a.x<n+r&&(e=-i*this.anchor.y,a.y>e&&a.y<e+i)?!0:!1},r.prototype.destroy=function(){i.Sprite.prototype.destroy.call(this),this.tileScale=null,this._tileScaleOffset=null,this.tilePosition=null,this._tilingTexture.destroy(!0),this._tilingTexture=null,this._uvs=null}},{"../core":20,"../core/textures/RenderTexture":60,"../core/textures/TextureUvs":62}],75:[function(t,e){var r=t("../core/math"),i=t("../core/textures/RenderTexture"),n=t("../core/display/DisplayObject"),o=t("../core/sprites/Sprite"),s=new r.Matrix;n.prototype._cacheAsBitmap=!1,n.prototype._originalRenderWebGL=null,n.prototype._originalRenderCanvas=null,n.prototype._originalUpdateTransform=null,n.prototype._originalHitTest=null,n.prototype._cachedSprite=null,Object.defineProperties(n.prototype,{cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(t){this._cacheAsBitmap!==t&&(this._cacheAsBitmap=t,t?(this._originalRenderWebGL=this.renderWebGL,this._originalRenderCanvas=this.renderCanvas,this._originalUpdateTransform=this.updateTransform,this._originalGetBounds=this.getBounds,this._originalHitTest=this.hitTest,this.renderWebGL=this._renderCachedWebGL,this.renderCanvas=this._renderCachedCanvas):(this._cachedSprite&&this._destroyCachedDisplayObject(),this.renderWebGL=this._originalRenderWebGL,this.renderCanvas=this._originalRenderCanvas,this.getBounds=this._originalGetBounds,this.updateTransform=this._originalUpdateTransform,this.hitTest=this._originalHitTest))}}}),n.prototype._renderCachedWebGL=function(t){this._initCachedDisplayObject(t),this._cachedSprite.worldAlpha=this.worldAlpha,t.setObjectRenderer(t.plugins.sprite),t.plugins.sprite.render(this._cachedSprite)},n.prototype._initCachedDisplayObject=function(t){if(!this._cachedSprite){t.currentRenderer.flush();var e=this.getLocalBounds().clone(),r=t.currentRenderTarget,n=t.filterManager.filterStack,a=new i(t,0|e.width,0|e.height),h=s;h.tx=-e.x,h.ty=-e.y,this.renderWebGL=this._originalRenderWebGL,a.render(this,h,!0),t.setRenderTarget(r),t.filterManager.filterStack=n,this.renderWebGL=this._renderCachedWebGL,this.updateTransform=this.displayObjectUpdateTransform,this.getBounds=this._getCahcedBounds,this._cachedSprite=new o(a),this._cachedSprite.worldTransform=this.worldTransform,this._cachedSprite.anchor.x=-(e.x/e.width),this._cachedSprite.anchor.y=-(e.y/e.height),this.hitTest=this._cachedSprite.hitTest.bind(this._cachedSprite)}},n.prototype._renderCachedCanvas=function(t){this._initCachedDisplayObjectCanvas(t),this._cachedSprite.worldAlpha=this.worldAlpha,this._cachedSprite.renderCanvas(t)},n.prototype._initCachedDisplayObjectCanvas=function(t){if(!this._cachedSprite){var e=this.getLocalBounds(),r=t.context,n=new i(t,0|e.width,0|e.height),a=s;a.tx=-e.x,a.ty=-e.y,this.renderCanvas=this._originalRenderCanvas,n.render(this,a,!0),t.context=r,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.getBounds=this._getCahcedBounds,this._cachedSprite=new o(n),this._cachedSprite.worldTransform=this.worldTransform,this._cachedSprite.anchor.x=-(e.x/e.width),this._cachedSprite.anchor.y=-(e.y/e.height),this.hitTest=this._cachedSprite.hitTest.bind(this._cachedSprite)}},n.prototype._getCahcedBounds=function(){return this._cachedSprite._currentBounds=null,this._cachedSprite.getBounds()},n.prototype._destroyCachedDisplayObject=function(){this._cachedSprite._texture.destroy(),this._cachedSprite=null},e.exports={}},{"../core/display/DisplayObject":15,"../core/math":23,"../core/sprites/Sprite":57,"../core/textures/RenderTexture":60}],76:[function(t,e){e.exports={MovieClip:t("./MovieClip"),Rope:t("./Rope"),Strip:t("./Strip"),StripShader:t("./StripShader"),TilingSprite:t("./TilingSprite"),cacheAsBitmap:t("./cacheAsBitmap")}},{"./MovieClip":70,"./Rope":71,"./Strip":72,"./StripShader":73,"./TilingSprite":74,"./cacheAsBitmap":75}],77:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n",{dimensions:{type:"4fv",value:new Float32Array([0,0,0,0])},pixelSize:{type:"1f",value:8}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{size:{get:function(){return this.uniforms.pixelSize.value},set:function(t){this.uniforms.pixelSize.value=t}}})},{"../../core":20}],78:[function(t,e){function r(){i.AbstractFilter.call(this),this.blurXFilter=new n,this.blurYFilter=new o,this.defaultFilter=new i.AbstractFilter}var i=t("../../core"),n=t("../blur/BlurXFilter"),o=t("../blur/BlurYFilter");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.applyFilter=function(t,e,r){var n=t.filterManager.getRenderTarget(!0);this.defaultFilter.applyFilter(t,e,r),this.blurXFilter.applyFilter(t,e,n),t.blendModeManager.setBlendMode(i.CONST.BLEND_MODES.SCREEN),this.blurYFilter.applyFilter(t,n,r),t.blendModeManager.setBlendMode(i.CONST.BLEND_MODES.NORMAL),t.filterManager.returnRenderTarget(n)},Object.defineProperties(r.prototype,{blur:{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t}},blurX:{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t}},blurY:{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t}}})},{"../../core":20,"../blur/BlurXFilter":80,"../blur/BlurYFilter":81}],79:[function(t,e){function r(){i.AbstractFilter.call(this),this.blurXFilter=new n,this.blurYFilter=new o}var i=t("../../core"),n=t("./BlurXFilter"),o=t("./BlurYFilter");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.applyFilter=function(t,e,r){var i=t.filterManager.getRenderTarget(!0);this.blurXFilter.applyFilter(t,e,i),this.blurYFilter.applyFilter(t,i,r),t.filterManager.returnRenderTarget(i)},Object.defineProperties(r.prototype,{blur:{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t}},blurX:{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t}},blurY:{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t}}})},{"../../core":20,"./BlurXFilter":80,"./BlurYFilter":81}],80:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float blur;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;\n\n    gl_FragColor = sum;\n}\n",{blur:{type:"1f",value:1/512}})}var i=t("../../core"),n=1/7e3;r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{blur:{get:function(){return this.uniforms.blur.value/n},set:function(t){this.uniforms.blur.value=n*t}}})},{"../../core":20}],81:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float blur;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;\n    sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;\n\n    gl_FragColor = sum;\n}\n",{blur:{type:"1f",value:1/512}})}var i=t("../../core"),n=1/7e3;r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{blur:{get:function(){return this.uniforms.blur.value/n},set:function(t){this.uniforms.blur.value=n*t}}})},{"../../core":20}],82:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nconst vec2 delta = vec2(1.0/10.0, 0.0);\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n")}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r},{"../../core":20}],83:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform mat4 matrix;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;\n}\n",{matrix:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{matrix:{get:function(){return this.uniforms.matrix.value},set:function(t){this.uniforms.matrix.value=t}}})},{"../../core":20}],84:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n",{step:{type:"1f",value:5}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{step:{get:function(){return this.uniforms.step.value},set:function(t){this.uniforms.step.value=t}}})},{"../../core":20}],85:[function(t,e){function r(t,e,r){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",{matrix:{type:"1fv",value:new Float32Array(t)},texelSize:{type:"2v",value:{x:1/e,y:1/r}}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{matrix:{get:function(){return this.uniforms.matrix.value},set:function(t){this.uniforms.matrix.value=new Float32Array(t)}},width:{get:function(){return 1/this.uniforms.texelSize.value.x},set:function(t){this.uniforms.texelSize.value.x=1/t}},height:{get:function(){return 1/this.uniforms.texelSize.value.y},set:function(t){this.uniforms.texelSize.value.y=1/t}}})},{"../../core":20}],86:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r},{"../../core":20}],87:[function(t,e){function r(t){var e=new i.math.Matrix;t.renderable=!1,i.AbstractFilter.call(this,["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform mat3 projectionMatrix;","uniform mat3 otherMatrix;","varying vec2 vMapCoord;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void)","{","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"].join("\n"),["precision lowp float;","varying vec2 vMapCoord;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 scale;","uniform sampler2D uSampler;","uniform sampler2D mapSampler;","void main(void)","{","   vec4 original =  texture2D(uSampler, vTextureCoord);","   vec4 map =  texture2D(mapSampler, vMapCoord);","  map -= 0.5;","   map.xy *= scale;","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));","}"].join("\n"),{mapSampler:{type:"sampler2D",value:t.texture},otherMatrix:{type:"mat3",value:e.toArray(!0)},scale:{type:"v2",value:{x:1,y:1}}}),this.maskSprite=t,this.maskMatrix=e,this.scale=new i.math.Point(20,20)}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.applyFilter=function(t,e,r){var i=t.filterManager;i.calculateMappedMatrix(e.frame,this.maskSprite,this.maskMatrix),this.uniforms.otherMatrix.value=this.maskMatrix.toArray(!0),this.uniforms.scale.value.x=this.scale.x*(1/e.frame.width),this.uniforms.scale.value.y=this.scale.y*(1/e.frame.height);var n=this.getShader(t);i.applyFilter(n,e,r)},Object.defineProperties(r.prototype,{map:{get:function(){return this.uniforms.mapSampler.value},set:function(t){this.uniforms.mapSampler.value=t}}})},{"../../core":20}],88:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",{scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{scale:{get:function(){return this.uniforms.scale.value},set:function(t){this.uniforms.scale.value=t}},angle:{get:function(){return this.uniforms.angle.value},set:function(t){this.uniforms.angle.value=t}}})},{"../../core":20}],89:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n",{gray:{type:"1f",value:1}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{gray:{get:function(){return this.uniforms.gray.value},set:function(t){this.uniforms.gray.value=t}}})},{"../../core":20}],90:[function(t,e){e.exports={AsciiFilter:t("./ascii/AsciiFilter"),BloomFilter:t("./bloom/BloomFilter"),BlurFilter:t("./blur/BlurFilter"),BlurXFilter:t("./blur/BlurXFilter"),BlurYFilter:t("./blur/BlurYFilter"),ColorMatrixFilter:t("./color/ColorMatrixFilter"),ColorStepFilter:t("./color/ColorStepFilter"),ConvolutionFilter:t("./convolution/ConvolutionFilter"),CrossHatchFilter:t("./crosshatch/CrossHatchFilter"),DisplacementFilter:t("./displacement/DisplacementFilter"),DotScreenFilter:t("./dot/DotScreenFilter"),GrayFilter:t("./gray/GrayFilter"),InvertFilter:t("./invert/InvertFilter"),NoiseFilter:t("./noise/NoiseFilter"),NormalMapFilter:t("./normal/NormalMapFilter"),PixelateFilter:t("./pixelate/PixelateFilter"),RGBSplitFilter:t("./rgb/RGBSplitFilter"),ShockwaveFilter:t("./shockwave/ShockwaveFilter"),SepiaFilter:t("./sepia/SepiaFilter"),SmartBlurFilter:t("./blur/SmartBlurFilter"),TiltShiftFilter:t("./tiltshift/TiltShiftFilter"),TiltShiftXFilter:t("./tiltshift/TiltShiftXFilter"),TiltShiftYFilter:t("./tiltshift/TiltShiftYFilter"),TwistFilter:t("./twist/TwistFilter")}},{"./ascii/AsciiFilter":77,"./bloom/BloomFilter":78,"./blur/BlurFilter":79,"./blur/BlurXFilter":80,"./blur/BlurYFilter":81,"./blur/SmartBlurFilter":82,"./color/ColorMatrixFilter":83,"./color/ColorStepFilter":84,"./convolution/ConvolutionFilter":85,"./crosshatch/CrossHatchFilter":86,"./displacement/DisplacementFilter":87,"./dot/DotScreenFilter":88,"./gray/GrayFilter":89,"./invert/InvertFilter":91,"./noise/NoiseFilter":92,"./normal/NormalMapFilter":93,"./pixelate/PixelateFilter":94,"./rgb/RGBSplitFilter":95,"./sepia/SepiaFilter":96,"./shockwave/ShockwaveFilter":97,"./tiltshift/TiltShiftFilter":99,"./tiltshift/TiltShiftXFilter":100,"./tiltshift/TiltShiftYFilter":101,"./twist/TwistFilter":102}],91:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n",{invert:{type:"1f",value:1}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{invert:{get:function(){return this.uniforms.invert.value},set:function(t){this.uniforms.invert.value=t}}})},{"../../core":20}],92:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n",{noise:{type:"1f",value:.5}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{noise:{get:function(){return this.uniforms.noise.value},set:function(t){this.uniforms.noise.value=t}}})},{"../../core":20}],93:[function(t,e){function r(t){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying float vColor;\n\nuniform sampler2D displacementMap;\nuniform sampler2D uSampler;\n\nuniform vec4 dimensions;\n\nconst vec2 Resolution = vec2(1.0,1.0);      //resolution of screen\nuniform vec3 LightPos;    //light position, normalized\nconst vec4 LightColor = vec4(1.0, 1.0, 1.0, 1.0);      //light RGBA -- alpha is intensity\nconst vec4 AmbientColor = vec4(1.0, 1.0, 1.0, 0.5);    //ambient RGBA -- alpha is intensity\nconst vec3 Falloff = vec3(0.0, 1.0, 0.2);         //attenuation coefficients\n\nuniform vec3 LightDir; // = vec3(1.0, 0.0, 1.0);\n\nuniform vec2 mapDimensions; // = vec2(256.0, 256.0);\n\n\nvoid main(void)\n{\n    vec2 mapCords = vTextureCoord.xy;\n\n    vec4 color = texture2D(uSampler, vTextureCoord.st);\n    vec3 nColor = texture2D(displacementMap, vTextureCoord.st).rgb;\n\n\n    mapCords *= vec2(dimensions.x/512.0, dimensions.y/512.0);\n\n    mapCords.y *= -1.0;\n    mapCords.y += 1.0;\n\n    // RGBA of our diffuse color\n    vec4 DiffuseColor = texture2D(uSampler, vTextureCoord);\n\n    // RGB of our normal map\n    vec3 NormalMap = texture2D(displacementMap, mapCords).rgb;\n\n    // The delta position of light\n    // vec3 LightDir = vec3(LightPos.xy - (gl_FragCoord.xy / Resolution.xy), LightPos.z);\n    vec3 LightDir = vec3(LightPos.xy - (mapCords.xy), LightPos.z);\n\n    // Correct for aspect ratio\n    // LightDir.x *= Resolution.x / Resolution.y;\n\n    // Determine distance (used for attenuation) BEFORE we normalize our LightDir\n    float D = length(LightDir);\n\n    // normalize our vectors\n    vec3 N = normalize(NormalMap * 2.0 - 1.0);\n    vec3 L = normalize(LightDir);\n\n    // Pre-multiply light color with intensity\n    // Then perform 'N dot L' to determine our diffuse term\n    vec3 Diffuse = (LightColor.rgb * LightColor.a) * max(dot(N, L), 0.0);\n\n    // pre-multiply ambient color with intensity\n    vec3 Ambient = AmbientColor.rgb * AmbientColor.a;\n\n    // calculate attenuation\n    float Attenuation = 1.0 / ( Falloff.x + (Falloff.y*D) + (Falloff.z*D*D) );\n\n    // the calculation which brings it all together\n    vec3 Intensity = Ambient + Diffuse * Attenuation;\n    vec3 FinalColor = DiffuseColor.rgb * Intensity;\n    gl_FragColor = vColor * vec4(FinalColor, DiffuseColor.a);\n\n    // gl_FragColor = vec4(1.0, 0.0, 0.0, Attenuation); // vColor * vec4(FinalColor, DiffuseColor.a);\n\n/*\n    // normalise color\n    vec3 normal = normalize(nColor * 2.0 - 1.0);\n\n    vec3 deltaPos = vec3( (light.xy - gl_FragCoord.xy) / resolution.xy, light.z );\n\n    float lambert = clamp(dot(normal, lightDir), 0.0, 1.0);\n\n    float d = sqrt(dot(deltaPos, deltaPos));\n    float att = 1.0 / ( attenuation.x + (attenuation.y*d) + (attenuation.z*d*d) );\n\n    vec3 result = (ambientColor * ambientIntensity) + (lightColor.rgb * lambert) * att;\n    result *= color.rgb;\n\n    gl_FragColor = vec4(result, 1.0);\n*/\n}\n",{displacementMap:{type:"sampler2D",value:t},scale:{type:"2f",value:{x:15,y:15}},offset:{type:"2f",value:{x:0,y:0}},mapDimensions:{type:"2f",value:{x:1,y:1}},dimensions:{type:"4f",value:[0,0,0,0]},LightPos:{type:"3f",value:[0,1,0]}}),t.baseTexture._powerOf2=!0,t.baseTexture.hasLoaded?this.onTextureLoaded():t.baseTexture.once("loaded",this.onTextureLoaded.bind(this))}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.displacementMap.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.displacementMap.value.height},Object.defineProperties(r.prototype,{map:{get:function(){return this.uniforms.displacementMap.value},set:function(t){this.uniforms.displacementMap.value=t}},scale:{get:function(){return this.uniforms.scale.value},set:function(t){this.uniforms.scale.value=t}},offset:{get:function(){return this.uniforms.offset.value},set:function(t){this.uniforms.offset.value=t}}})},{"../../core":20}],94:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n",{dimensions:{type:"4fv",value:new Float32Array([0,0,0,0])},pixelSize:{type:"v2",value:{x:10,y:10}}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{size:{get:function(){return this.uniforms.pixelSize.value},set:function(t){this.uniforms.pixelSize.value=t}}})},{"../../core":20}],95:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",{red:{type:"v2",value:{x:20,y:20}},green:{type:"v2",value:{x:-20,y:20}},blue:{type:"v2",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{red:{get:function(){return this.uniforms.red.value},set:function(t){this.uniforms.red.value=t}},green:{get:function(){return this.uniforms.green.value},set:function(t){this.uniforms.green.value=t}},blue:{get:function(){return this.uniforms.blue.value},set:function(t){this.uniforms.blue.value=t}}})},{"../../core":20}],96:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n",{sepia:{type:"1f",value:1}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{sepia:{get:function(){return this.uniforms.sepia.value},set:function(t){this.uniforms.sepia.value=t}}})},{"../../core":20}],97:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n",{center:{type:"v2",value:{x:.5,y:.5}},params:{type:"v3",value:{x:10,y:.8,z:.1}},time:{type:"1f",value:0}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{center:{get:function(){return this.uniforms.center.value},set:function(t){this.uniforms.center.value=t}},params:{get:function(){return this.uniforms.params.value},set:function(t){this.uniforms.params.value=t
}},time:{get:function(){return this.uniforms.time.value},set:function(t){this.uniforms.time.value=t}}})},{"../../core":20}],98:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",{blur:{type:"1f",value:100},gradientBlur:{type:"1f",value:600},start:{type:"v2",value:{x:0,y:window.innerHeight/2}},end:{type:"v2",value:{x:600,y:window.innerHeight/2}},delta:{type:"v2",value:{x:30,y:30}},texSize:{type:"v2",value:{x:window.innerWidth,y:window.innerHeight}}}),this.updateDelta()}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.updateDelta=function(){this.uniforms.delta.value.x=0,this.uniforms.delta.value.y=0},Object.defineProperties(r.prototype,{blur:{get:function(){return this.uniforms.blur.value},set:function(t){this.uniforms.blur.value=t}},gradientBlur:{get:function(){return this.uniforms.gradientBlur.value},set:function(t){this.uniforms.gradientBlur.value=t}},start:{get:function(){return this.uniforms.start.value},set:function(t){this.uniforms.start.value=t,this.updateDelta()}},end:{get:function(){return this.uniforms.end.value},set:function(t){this.uniforms.end.value=t,this.updateDelta()}}})},{"../../core":20}],99:[function(t,e){function r(){i.AbstractFilter.call(this),this.tiltShiftXFilter=new n,this.tiltShiftYFilter=new o}var i=t("../../core"),n=t("./TiltShiftXFilter"),o=t("./TiltShiftYFilter");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.applyFilter=function(t,e,r){var i=t.filterManager.getRenderTarget(!0);this.tiltShiftXFilter.applyFilter(t,e,i),this.tiltShiftYFilter.applyFilter(t,i,r),t.filterManager.returnRenderTarget(i)},Object.defineProperties(r.prototype,{blur:{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t}},gradientBlur:{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t}},start:{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t}},end:{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t}}})},{"../../core":20,"./TiltShiftXFilter":100,"./TiltShiftYFilter":101}],100:[function(t,e){function r(){i.call(this)}var i=t("./TiltShiftAxisFilter");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.updateDelta=function(){var t=this.uniforms.end.value.x-this.uniforms.start.value.x,e=this.uniforms.end.value.y-this.uniforms.start.value.y,r=Math.sqrt(t*t+e*e);this.uniforms.delta.value.x=t/r,this.uniforms.delta.value.y=e/r}},{"./TiltShiftAxisFilter":98}],101:[function(t,e){function r(){i.call(this)}var i=t("./TiltShiftAxisFilter");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,e.exports=r,r.prototype.updateDelta=function(){var t=this.uniforms.end.value.x-this.uniforms.start.value.x,e=this.uniforms.end.value.y-this.uniforms.start.value.y,r=Math.sqrt(t*t+e*e);this.uniforms.delta.value.x=-e/r,this.uniforms.delta.value.y=t/r}},{"./TiltShiftAxisFilter":98}],102:[function(t,e){function r(){i.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n",{radius:{type:"1f",value:.5},angle:{type:"1f",value:5},offset:{type:"v2",value:{x:.5,y:.5}}})}var i=t("../../core");r.prototype=Object.create(i.AbstractFilter.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{offset:{get:function(){return this.uniforms.offset.value},set:function(t){this.uniforms.offset.value=t}},radius:{get:function(){return this.uniforms.radius.value},set:function(t){this.uniforms.radius.value=t}},angle:{get:function(){return this.uniforms.angle.value},set:function(t){this.uniforms.angle.value=t}}})},{"../../core":20}],103:[function(t,e){function r(){this.global=new i.math.Point,this.target=null,this.originalEvent=null}var i=t("../core");r.prototype.constructor=r,e.exports=r,r.prototype.getLocalPosition=function(t,e){var r=t.worldTransform,n=this.global,o=r.a,s=r.c,a=r.tx,h=r.b,l=r.d,u=r.ty,c=1/(o*l+s*-h);return e=e||new i.math.Point,e.x=l*c*n.x+-s*c*n.y+(u*s-a*l)*c,e.y=o*c*n.y+-h*c*n.x+(-u*o+a*h)*c,e}},{"../core":20}],104:[function(t,e){function r(t){this.renderer=t,this.mouse=new n,this.eventData=new i.utils.EventData,this.eventData.data=this.mouse,this.interactiveDataPool=[],this.interactionDOMElement=null,this.eventsAdded=!1,this.onMouseUp=this.onMouseUp.bind(this),this.processMouseUp=this.processMouseUp.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.processMouseDown=this.processMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.processMouseMove=this.processMouseMove.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.processMouseOverOut=this.processMouseOverOut.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.processTouchStart=this.processTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.processTouchEnd=this.processTouchEnd.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.processTouchMove=this.processTouchMove.bind(this),this.last=0,this.currentCursorStyle="inherit",this._tempPoint=new i.math.Point,this.resolution=1,this.setTargetElement(this.renderer.view,this.renderer.resolution),this.update()}var i=t("../core"),n=t("./InteractionData"),o=10,s=!0;r.prototype.constructor=r,e.exports=r,r.prototype.setTargetElement=function(t,e){this.removeEvents(),this.interactionDOMElement=t,this.resolution=e||1,this.addEvents()},r.prototype.addEvents=function(){this.interactionDOMElement&&(window.navigator.msPointerEnabled&&(this.interactionDOMElement.style["-ms-content-zooming"]="none",this.interactionDOMElement.style["-ms-touch-action"]="none"),this.interactionDOMElement.addEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.addEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.addEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.addEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.addEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("mouseup",this.onMouseUp,!0),this.eventsAdded=!0)},r.prototype.removeEvents=function(){this.interactionDOMElement&&(window.navigator.msPointerEnabled&&(this.interactionDOMElement.style["-ms-content-zooming"]="",this.interactionDOMElement.style["-ms-touch-action"]=""),this.interactionDOMElement.removeEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,!0),this.interactionDOMElement=null,window.removeEventListener("mouseup",this.onMouseUp,!0),this.eventsAdded=!1)},r.prototype.update=function(){if(requestAnimationFrame(this.update.bind(this)),!this.throttleUpdate()&&this.interactionDOMElement){if(this.didMove)return void(this.didMove=!1);this.cursor="inherit",this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut.bind(this),!0),this.currentCursorStyle!==this.cursor&&(this.currentCursorStyle=this.cursor,this.interactionDOMElement.style.cursor=this.cursor)}},r.prototype.dispatchEvent=function(t,e,r){r.stopped||(r.target=t,r.type=e,t.emit(e,r),t[e]&&t[e](r))},r.prototype.throttleUpdate=function(){var t=Date.now(),e=t-this.last;return e=e*o/1e3,1>e?!0:(this.last=t,!1)},r.prototype.mapPositionToPoint=function(t,e,r){var i=this.interactionDOMElement.getBoundingClientRect();t.x=(e-i.left)*(this.interactionDOMElement.width/i.width)/this.resolution,t.y=(r-i.top)*(this.interactionDOMElement.height/i.height)/this.resolution},r.prototype.processInteractive=function(t,e,r,i,n){if(!e.visible)return!1;var o=e.children,s=!1;if(n=n||e.interactive,e.interactiveChildren)for(var a=o.length-1;a>=0;a--)!s&&i?s=this.processInteractive(t,o[a],r,!0,n):this.processInteractive(t,o[a],r,!1,!1);return n&&(i&&(e.hitArea?(e.worldTransform.applyInverse(t,this._tempPoint),s=e.hitArea.contains(this._tempPoint.x,this._tempPoint.y)):e.hitTest&&(s=e.hitTest(t))),e.interactive&&r(e,s)),s},r.prototype.onMouseDown=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData.stopped=!1,s&&this.mouse.originalEvent.preventDefault(),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseDown,!0)},r.prototype.processMouseDown=function(t,e){var r=this.mouse.originalEvent,i=2===r.button||3===r.which;e&&(t[i?"_isRightDown":"_isLeftDown"]=!0,this.dispatchEvent(t,i?"rightdown":"mousedown",this.eventData))},r.prototype.onMouseUp=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData.stopped=!1,this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseUp,!0)},r.prototype.processMouseUp=function(t,e){var r=this.mouse.originalEvent,i=2===r.button||3===r.which,n=i?"_isRightDown":"_isLeftDown";e?(this.dispatchEvent(t,i?"rightup":"mouseup",this.eventData),t[n]&&(t[n]=!1,this.dispatchEvent(t,i?"rightclick":"click",this.eventData))):t[n]&&(t[n]=!1,this.dispatchEvent(t,i?"rightupoutside":"mouseupoutside",this.eventData))},r.prototype.onMouseMove=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData.stopped=!1,this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.didMove=!0,this.cursor="inherit",this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseMove,!0),this.currentCursorStyle!==this.cursor&&(this.currentCursorStyle=this.cursor,this.interactionDOMElement.style.cursor=this.cursor)},r.prototype.processMouseMove=function(t,e){this.dispatchEvent(t,"mousemove",this.eventData),this.processMouseOverOut(t,e)},r.prototype.onMouseOut=function(t){this.mouse.originalEvent=t,this.eventData.stopped=!1,this.interactionDOMElement.style.cursor="inherit",this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,!1)},r.prototype.processMouseOverOut=function(t,e){e?(t._over||(t._over=!0,this.dispatchEvent(t,"mouseover",this.eventData)),t.buttonMode&&(this.cursor=t.defaultCursor)):t._over&&(t._over=!1,this.dispatchEvent(t,"mouseout",this.eventData))},r.prototype.onTouchStart=function(t){s&&t.preventDefault();for(var e=t.changedTouches,r=0;r<e.length;r++){var i=e[r],n=this.getTouchData(i);n.originalEvent=t,this.eventData.data=n,this.eventData.stopped=!1,this.processInteractive(n.global,this.renderer._lastObjectRendered,this.processTouchStart,!0),this.returnTouchData(n)}},r.prototype.processTouchStart=function(t,e){e&&(t._touchDown=!0,this.dispatchEvent(t,"touchstart",this.eventData))},r.prototype.onTouchEnd=function(t){s&&t.preventDefault();for(var e=t.changedTouches,r=0;r<e.length;r++){var i=e[r],n=this.getTouchData(i);n.originalEvent=t,this.eventData.data=n,this.eventData.stopped=!1,this.processInteractive(n.global,this.renderer._lastObjectRendered,this.processTouchEnd,!0),this.returnTouchData(n)}},r.prototype.processTouchEnd=function(t,e){e?(this.dispatchEvent(t,"touchend",this.eventData),t._touchDown&&(t._touchDown=!1,this.dispatchEvent(t,"tap",this.eventData))):t._touchDown&&(t._touchDown=!1,this.dispatchEvent(t,"touchendoutside",this.eventData))},r.prototype.onTouchMove=function(t){s&&t.preventDefault();for(var e=t.changedTouches,r=0;r<e.length;r++){var i=e[r],n=this.getTouchData(i);n.originalEvent=t,this.eventData.data=n,this.eventData.stopped=!1,this.processInteractive(n.global,this.renderer._lastObjectRendered,this.processTouchMove,!1),this.returnTouchData(n)}},r.prototype.processTouchMove=function(t,e){e=e,this.dispatchEvent(t,"touchmove",this.eventData)},r.prototype.getTouchData=function(t){var e=this.interactiveDataPool.pop();return e||(e=new n),e.identifier=t.identifier,this.mapPositionToPoint(e.global,t.clientX,t.clientY),e},r.prototype.returnTouchData=function(t){this.interactiveDataPool.push(t)},i.WebGLRenderer.registerPlugin("interaction",r),i.CanvasRenderer.registerPlugin("interaction",r)},{"../core":20,"./InteractionData":103}],105:[function(t,e){e.exports={InteractionData:t("./InteractionData"),InteractionManager:t("./InteractionManager"),interactiveTarget:t("./interactiveTarget")}},{"./InteractionData":103,"./InteractionManager":104,"./interactiveTarget":106}],106:[function(t,e){var r=t("../core"),i=new r.math.Point;r.DisplayObject.prototype.interactive=!1,r.DisplayObject.prototype.buttonMode=!1,r.DisplayObject.prototype.interactiveChildren=!0,r.DisplayObject.prototype.defaultCursor="pointer",r.DisplayObject.prototype._over=!1,r.DisplayObject.prototype._touchDown=!1,r.Sprite.prototype.hitTest=function(t){this.worldTransform.applyInverse(t,i);var e,r=this._texture._frame.width,n=this._texture._frame.height,o=-r*this.anchor.x;return i.x>o&&i.x<o+r&&(e=-n*this.anchor.y,i.y>e&&i.y<e+n)?!0:!1},r.Graphics.prototype.hitTest=function(t){this.worldTransform.applyInverse(t,i);for(var e=this.graphicsData,r=0;r<e.length;r++){var n=e[r];if(n.fill&&n.shape&&n.shape.contains(i.x,i.y))return!0}return!1},e.exports={}},{"../core":20}],107:[function(t,e){var r=t("resource-loader"),i=t("./textureParser"),n=t("./spritesheetParser"),o=t("./spineAtlasParser"),s=t("./bitmapFontParser"),a=function(){r.call(this),this.use(r.middleware.parsing.json()).use(r.middleware.parsing.blob()).use(i()).use(n()).use(o()).use(s())};a.prototype=Object.create(r.prototype),a.prototype.constructor=a,e.exports=a},{"./bitmapFontParser":108,"./spineAtlasParser":110,"./spritesheetParser":111,"./textureParser":112,"resource-loader":8}],108:[function(t,e){var r=t("resource-loader").Resource,i=t("../core");e.exports=function(){return function(t,e){if(!t.data||navigator.isCocoonJS)if(window.DOMParser){var n=new DOMParser;t.data=n.parseFromString(this.xhr.responseText,"text/xml")}else{var o=document.createElement("div");o.innerHTML=this.xhr.responseText,t.data=o}var s=t.data.nodeName;if(!t.data||!s||"#document"!==s.toLowerCase()||"div"!==s.toLowerCase())return e();var a=this.baseUrl+t.data.getElementsByTagName("page")[0].getAttribute("file"),h={crossOrigin:t.crossOrigin,loadType:r.LOAD_TYPE.IMAGE};this.add(t.name+"_image",a,h,function(r){var n={},o=t.data.getElementsByTagName("info")[0],s=t.data.getElementsByTagName("common")[0];n.font=o.getAttribute("face"),n.size=parseInt(o.getAttribute("size"),10),n.lineHeight=parseInt(s.getAttribute("lineHeight"),10),n.chars={};for(var a=t.data.getElementsByTagName("char"),h=0;h<a.length;h++){var l=parseInt(a[h].getAttribute("id"),10),u=new i.math.Rectangle(parseInt(a[h].getAttribute("x"),10),parseInt(a[h].getAttribute("y"),10),parseInt(a[h].getAttribute("width"),10),parseInt(a[h].getAttribute("height"),10));n.chars[l]={xOffset:parseInt(a[h].getAttribute("xoffset"),10),yOffset:parseInt(a[h].getAttribute("yoffset"),10),xAdvance:parseInt(a[h].getAttribute("xadvance"),10),kerning:{},texture:i.utils.TextureCache[l]=new i.Texture(r.texture.baseTexture,u)}}var c=t.data.getElementsByTagName("kerning");for(h=0;h<c.length;h++){var d=parseInt(c[h].getAttribute("first"),10),p=parseInt(c[h].getAttribute("second"),10),f=parseInt(c[h].getAttribute("amount"),10);n.chars[p].kerning[d]=f}t.bitmapFont=n,e()})}}},{"../core":20,"resource-loader":8}],109:[function(t,e){e.exports={Loader:t("./Loader"),bitmapFontParser:t("./bitmapFontParser"),spineAtlasParser:t("./spineAtlasParser"),spritesheetParser:t("./spritesheetParser"),textureParser:t("./textureParser")}},{"./Loader":107,"./bitmapFontParser":108,"./spineAtlasParser":110,"./spritesheetParser":111,"./textureParser":112}],110:[function(t,e){var r=t("resource-loader").Resource,i=t("async"),n=t("../spine");e.exports=function(){return function(t,e){if(t.data&&t.data.bones){var o=t.url.substr(0,t.url.lastIndexOf("."))+".atlas",s={crossOrigin:t.crossOrigin,xhrType:r.XHR_RESPONSE_TYPE.TEXT};this.add(t.name+"_atlas",o,s,function(r){var o=new n.Atlas(this.ajaxRequest.responseText,this.baseUrl,r.crossOrigin),s=new n.SkeletonJsonParser(new n.AtlasAttachmentParser(o)),a=s.readSkeletonData(t.data);t.spine=a,t.spineAtlas=o,i.each(o.pages,function(t,e){t.rendererObject.hasLoaded?e():t.rendererObject.once("loaded",e)},e)})}else e()}}},{"../spine":115,async:2,"resource-loader":8}],111:[function(t,e){var r=t("resource-loader").Resource,i=t("path"),n=t("../core");e.exports=function(){return function(t,e){if(t.data&&t.data.frames){var o={crossOrigin:t.crossOrigin,loadType:r.LOAD_TYPE.IMAGE},s=i.dirname(t.url.replace(this.baseUrl,"")),a=n.utils.getResolutionOfUrl(t.url);this.add(t.name+"_image",this.baseUrl+s+"/"+t.data.meta.image,o,function(r){t.textures={};var i=t.data.frames;for(var o in i){var s=i[o].frame;if(s){var h=null,l=null;if(h=i[o].rotated?new n.math.Rectangle(s.x,s.y,s.h,s.w):new n.math.Rectangle(s.x,s.y,s.w,s.h),i[o].trimmed&&(l=new n.math.Rectangle(i[o].spriteSourceSize.x/a,i[o].spriteSourceSize.y/a,i[o].sourceSize.w/a,i[o].sourceSize.h/a)),i[o].rotated){var u=h.width;h.width=h.height,h.height=u}h.x/=a,h.y/=a,h.width/=a,h.height/=a,t.textures[o]=new n.Texture(r.texture.baseTexture,h,h.clone(),l,i[o].rotated),n.utils.TextureCache[o]=t.textures[o]}}e()})}else e()}}},{"../core":20,path:3,"resource-loader":8}],112:[function(t,e){var r=t("../core");e.exports=function(){return function(t,e){t.data&&t.data.nodeName&&"img"===t.data.nodeName.toLowerCase()&&(t.texture=new r.Texture(new r.BaseTexture(t.data,null,r.utils.getResolutionOfUrl(t.url))),r.utils.TextureCache[t.url]=t.texture),e()}}},{"../core":20}],113:[function(t,e){function r(t){if(i.Container.call(this),!t)throw new Error("The spineData param is required.");this.spineData=t,this.skeleton=new n.Skeleton(t),this.skeleton.updateWorldTransform(),this.stateData=new n.AnimationStateData(t),this.state=new n.AnimationState(this.stateData),this.slotContainers=[];for(var e=0,r=this.skeleton.drawOrder.length;r>e;e++){var o=this.skeleton.drawOrder[e],s=o.attachment,a=new i.Container;if(this.slotContainers.push(a),this.addChild(a),s instanceof n.RegionAttachment){var h=s.rendererObject.name,l=this.createSprite(o,s);o.currentSprite=l,o.currentSpriteName=h,a.addChild(l)}else{if(!(s instanceof n.MeshAttachment))continue;var u=this.createMesh(o,s);o.currentMesh=u,o.currentMeshName=s.name,a.addChild(u)}}this.autoUpdate=!0}var i=t("../core"),n=t("./SpineRuntime");n.Bone.yDown=!0,r.prototype=Object.create(i.Container.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{autoUpdate:{get:function(){return this.updateTransform===r.prototype.autoUpdateTransform},set:function(t){this.updateTransform=t?r.prototype.autoUpdateTransform:i.Container.prototype.updateTransform}}}),r.prototype.update=function(t){this.state.update(t),this.state.apply(this.skeleton),this.skeleton.updateWorldTransform();for(var e=this.skeleton.drawOrder,r=0,o=e.length;o>r;r++){var s=e[r],a=s.attachment,h=this.slotContainers[r];if(a){var l=a.type;if(l===n.AttachmentType.region){if(a.rendererObject&&(!s.currentSpriteName||s.currentSpriteName!==a.rendererObject.name)){var u=a.rendererObject.name;if(void 0!==s.currentSprite&&(s.currentSprite.visible=!1),s.sprites=s.sprites||{},void 0!==s.sprites[u])s.sprites[u].visible=!0;else{var c=this.createSprite(s,a);h.addChild(c)}s.currentSprite=s.sprites[u],s.currentSpriteName=u}var d=s.bone;h.position.x=d.worldX+a.x*d.m00+a.y*d.m01,h.position.y=d.worldY+a.x*d.m10+a.y*d.m11,h.scale.x=d.worldScaleX,h.scale.y=d.worldScaleY,h.rotation=-(s.bone.worldRotation*n.degRad),s.currentSprite.tint=i.utils.rgb2hex([s.r,s.g,s.b])}else{if(l!==n.AttachmentType.skinnedmesh){h.visible=!1;continue}if(!s.currentMeshName||s.currentMeshName!==a.name){var p=a.name;if(void 0!==s.currentMesh&&(s.currentMesh.visible=!1),s.meshes=s.meshes||{},void 0!==s.meshes[p])s.meshes[p].visible=!0;else{var f=this.createMesh(s,a);h.addChild(f)}s.currentMesh=s.meshes[p],s.currentMeshName=p}a.computeWorldVertices(s.bone.skeleton.x,s.bone.skeleton.y,s,s.currentMesh.vertices)}h.visible=!0,h.alpha=s.a}else h.visible=!1}},r.prototype.autoUpdateTransform=function(){this.lastTime=this.lastTime||Date.now();var t=.001*(Date.now()-this.lastTime);this.lastTime=Date.now(),this.update(t),i.Container.prototype.updateTransform.call(this)},r.prototype.createSprite=function(t,e){var r=e.rendererObject,o=r.page.rendererObject,s=new i.math.Rectangle(r.x,r.y,r.rotate?r.height:r.width,r.rotate?r.width:r.height),a=new i.Texture(o,s),h=new i.Sprite(a),l=r.rotate?.5*Math.PI:0;return h.scale.set(r.width/r.originalWidth,r.height/r.originalHeight),h.rotation=l-e.rotation*n.degRad,h.anchor.x=h.anchor.y=.5,t.sprites=t.sprites||{},t.sprites[r.name]=h,h},r.prototype.createMesh=function(t,e){var r=e.rendererObject,n=r.page.rendererObject,o=new i.Texture(n),s=new i.Strip(o);return s.drawMode=i.Strip.DrawModes.TRIANGLES,s.canvasPadding=1.5,s.vertices=new Float32Array(e.uvs.length),s.uvs=e.uvs,s.indices=e.triangles,t.meshes=t.meshes||{},t.meshes[e.name]=s,s}},{"../core":20,"./SpineRuntime":114}],114:[function(t,e){var r=t("../core"),i=e.exports={radDeg:180/Math.PI,degRad:Math.PI/180,temp:[],Float32Array:"undefined"==typeof Float32Array?Array:Float32Array,Uint16Array:"undefined"==typeof Uint16Array?Array:Uint16Array};i.BoneData=function(t,e){this.name=t,this.parent=e},i.BoneData.prototype={length:0,x:0,y:0,rotation:0,scaleX:1,scaleY:1,inheritScale:!0,inheritRotation:!0,flipX:!1,flipY:!1},i.SlotData=function(t,e){this.name=t,this.boneData=e},i.SlotData.prototype={r:1,g:1,b:1,a:1,attachmentName:null,additiveBlending:!1},i.IkConstraintData=function(t){this.name=t,this.bones=[]},i.IkConstraintData.prototype={target:null,bendDirection:1,mix:1},i.Bone=function(t,e,r){this.data=t,this.skeleton=e,this.parent=r,this.setToSetupPose()},i.Bone.yDown=!1,i.Bone.prototype={x:0,y:0,rotation:0,rotationIK:0,scaleX:1,scaleY:1,flipX:!1,flipY:!1,m00:0,m01:0,worldX:0,m10:0,m11:0,worldY:0,worldRotation:0,worldScaleX:1,worldScaleY:1,worldFlipX:!1,worldFlipY:!1,updateWorldTransform:function(){var t=this.parent;if(t)this.worldX=this.x*t.m00+this.y*t.m01+t.worldX,this.worldY=this.x*t.m10+this.y*t.m11+t.worldY,this.data.inheritScale?(this.worldScaleX=t.worldScaleX*this.scaleX,this.worldScaleY=t.worldScaleY*this.scaleY):(this.worldScaleX=this.scaleX,this.worldScaleY=this.scaleY),this.worldRotation=this.data.inheritRotation?t.worldRotation+this.rotationIK:this.rotationIK,this.worldFlipX=t.worldFlipX!=this.flipX,this.worldFlipY=t.worldFlipY!=this.flipY;else{var e=this.skeleton.flipX,r=this.skeleton.flipY;this.worldX=e?-this.x:this.x,this.worldY=r!=i.Bone.yDown?-this.y:this.y,this.worldScaleX=this.scaleX,this.worldScaleY=this.scaleY,this.worldRotation=this.rotationIK,this.worldFlipX=e!=this.flipX,this.worldFlipY=r!=this.flipY}var n=this.worldRotation*i.degRad,o=Math.cos(n),s=Math.sin(n);this.worldFlipX?(this.m00=-o*this.worldScaleX,this.m01=s*this.worldScaleY):(this.m00=o*this.worldScaleX,this.m01=-s*this.worldScaleY),this.worldFlipY!=i.Bone.yDown?(this.m10=-s*this.worldScaleX,this.m11=-o*this.worldScaleY):(this.m10=s*this.worldScaleX,this.m11=o*this.worldScaleY)},setToSetupPose:function(){var t=this.data;this.x=t.x,this.y=t.y,this.rotation=t.rotation,this.rotationIK=this.rotation,this.scaleX=t.scaleX,this.scaleY=t.scaleY,this.flipX=t.flipX,this.flipY=t.flipY},worldToLocal:function(t){var e=t[0]-this.worldX,r=t[1]-this.worldY,n=this.m00,o=this.m10,s=this.m01,a=this.m11;this.worldFlipX!=(this.worldFlipY!=i.Bone.yDown)&&(n=-n,a=-a);var h=1/(n*a-s*o);t[0]=e*n*h-r*s*h,t[1]=r*a*h-e*o*h},localToWorld:function(t){var e=t[0],r=t[1];t[0]=e*this.m00+r*this.m01+this.worldX,t[1]=e*this.m10+r*this.m11+this.worldY}},i.Slot=function(t,e){this.data=t,this.bone=e,this.setToSetupPose()},i.Slot.prototype={r:1,g:1,b:1,a:1,_attachmentTime:0,attachment:null,attachmentVertices:[],setAttachment:function(t){this.attachment=t,this._attachmentTime=this.bone.skeleton.time,this.attachmentVertices.length=0},setAttachmentTime:function(t){this._attachmentTime=this.bone.skeleton.time-t},getAttachmentTime:function(){return this.bone.skeleton.time-this._attachmentTime},setToSetupPose:function(){var t=this.data;this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a;for(var e=this.bone.skeleton.data.slots,r=0,i=e.length;i>r;r++)if(e[r]==t){this.setAttachment(t.attachmentName?this.bone.skeleton.getAttachmentBySlotIndex(r,t.attachmentName):null);break}}},i.IkConstraint=function(t,e){this.data=t,this.mix=t.mix,this.bendDirection=t.bendDirection,this.bones=[];for(var r=0,i=t.bones.length;i>r;r++)this.bones.push(e.findBone(t.bones[r].name));this.target=e.findBone(t.target.name)},i.IkConstraint.prototype={apply:function(){var t=this.target,e=this.bones;switch(e.length){case 1:i.IkConstraint.apply1(e[0],t.worldX,t.worldY,this.mix);break;case 2:i.IkConstraint.apply2(e[0],e[1],t.worldX,t.worldY,this.bendDirection,this.mix)}}},i.IkConstraint.apply1=function(t,e,r,n){var o=t.data.inheritRotation&&t.parent?t.parent.worldRotation:0,s=t.rotation,a=Math.atan2(r-t.worldY,e-t.worldX)*i.radDeg-o;t.rotationIK=s+(a-s)*n},i.IkConstraint.apply2=function(t,e,r,n,o,s){var a=e.rotation,h=t.rotation;if(!s)return e.rotationIK=a,void(t.rotationIK=h);var l,u,c=i.temp,d=t.parent;d?(c[0]=r,c[1]=n,d.worldToLocal(c),r=(c[0]-t.x)*d.worldScaleX,n=(c[1]-t.y)*d.worldScaleY):(r-=t.x,n-=t.y),e.parent==t?(l=e.x,u=e.y):(c[0]=e.x,c[1]=e.y,e.parent.localToWorld(c),t.worldToLocal(c),l=c[0],u=c[1]);var p=l*t.worldScaleX,f=u*t.worldScaleY,v=Math.atan2(f,p),g=Math.sqrt(p*p+f*f),m=e.data.length*e.worldScaleX,y=2*g*m;if(1e-4>y)return void(e.rotationIK=a+(Math.atan2(n,r)*i.radDeg-h-a)*s);var x=(r*r+n*n-g*g-m*m)/y;-1>x?x=-1:x>1&&(x=1);var b=Math.acos(x)*o,T=g+m*x,_=m*Math.sin(b),E=Math.atan2(n*T-r*_,r*T+n*_),S=(E-v)*i.radDeg-h;S>180?S-=360:-180>S&&(S+=360),t.rotationIK=h+S*s,S=(b+v)*i.radDeg-a,S>180?S-=360:-180>S&&(S+=360),e.rotationIK=a+(S+t.worldRotation-e.parent.worldRotation)*s},i.Skin=function(t){this.name=t,this.attachments={}},i.Skin.prototype={addAttachment:function(t,e,r){this.attachments[t+":"+e]=r},getAttachment:function(t,e){return this.attachments[t+":"+e]},_attachAll:function(t,e){for(var r in e.attachments){var i=r.indexOf(":"),n=parseInt(r.substring(0,i)),o=r.substring(i+1),s=t.slots[n];if(s.attachment&&s.attachment.name==o){var a=this.getAttachment(n,o);a&&s.setAttachment(a)}}}},i.Animation=function(t,e,r){this.name=t,this.timelines=e,this.duration=r},i.Animation.prototype={apply:function(t,e,r,i,n){i&&0!=this.duration&&(r%=this.duration,e%=this.duration);for(var o=this.timelines,s=0,a=o.length;a>s;s++)o[s].apply(t,e,r,n,1)},mix:function(t,e,r,i,n,o){i&&0!=this.duration&&(r%=this.duration,e%=this.duration);for(var s=this.timelines,a=0,h=s.length;h>a;a++)s[a].apply(t,e,r,n,o)}},i.Animation.binarySearch=function(t,e,r){var i=0,n=Math.floor(t.length/r)-2;if(!n)return r;for(var o=n>>>1;;){if(t[(o+1)*r]<=e?i=o+1:n=o,i==n)return(i+1)*r;o=i+n>>>1}},i.Animation.binarySearch1=function(t,e){var r=0,i=t.length-2;if(!i)return 1;for(var n=i>>>1;;){if(t[n+1]<=e?r=n+1:i=n,r==i)return r+1;n=r+i>>>1}},i.Animation.linearSearch=function(t,e,r){for(var i=0,n=t.length-r;n>=i;i+=r)if(t[i]>e)return i;return-1},i.Curves=function(){this.curves=[]},i.Curves.prototype={setLinear:function(t){this.curves[19*t]=0},setStepped:function(t){this.curves[19*t]=1},setCurve:function(t,e,r,i,n){var o=.1,s=o*o,a=s*o,h=3*o,l=3*s,u=6*s,c=6*a,d=2*-e+i,p=2*-r+n,f=3*(e-i)+1,v=3*(r-n)+1,g=e*h+d*l+f*a,m=r*h+p*l+v*a,y=d*u+f*c,x=p*u+v*c,b=f*c,T=v*c,_=19*t,E=this.curves;E[_++]=2;for(var S=g,w=m,A=_+19-1;A>_;_+=2)E[_]=S,E[_+1]=w,g+=y,m+=x,y+=b,x+=T,S+=g,w+=m},getCurvePercent:function(t,e){e=0>e?0:e>1?1:e;var r=this.curves,i=19*t,n=r[i];if(0===n)return e;if(1==n)return 0;i++;for(var o=0,s=i,a=i+19-1;a>i;i+=2)if(o=r[i],o>=e){var h,l;return i==s?(h=0,l=0):(h=r[i-2],l=r[i-1]),l+(r[i+1]-l)*(e-h)/(o-h)}var u=r[i-1];return u+(1-u)*(e-o)/(1-o)}},i.RotateTimeline=function(t){this.curves=new i.Curves(t),this.frames=[],this.frames.length=2*t},i.RotateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(t,e,r){t*=2,this.frames[t]=e,this.frames[t+1]=r},apply:function(t,e,r,n,o){var s=this.frames;if(!(r<s[0])){var a=t.bones[this.boneIndex];if(r>=s[s.length-2]){for(var h=a.data.rotation+s[s.length-1]-a.rotation;h>180;)h-=360;for(;-180>h;)h+=360;return void(a.rotation+=h*o)}var l=i.Animation.binarySearch(s,r,2),u=s[l-1],c=s[l],d=1-(r-c)/(s[l-2]-c);d=this.curves.getCurvePercent(l/2-1,d);for(var h=s[l+1]-u;h>180;)h-=360;for(;-180>h;)h+=360;for(h=a.data.rotation+(u+h*d)-a.rotation;h>180;)h-=360;for(;-180>h;)h+=360;a.rotation+=h*o}}},i.TranslateTimeline=function(t){this.curves=new i.Curves(t),this.frames=[],this.frames.length=3*t},i.TranslateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(t,e,r,i){t*=3,this.frames[t]=e,this.frames[t+1]=r,this.frames[t+2]=i},apply:function(t,e,r,n,o){var s=this.frames;if(!(r<s[0])){var a=t.bones[this.boneIndex];if(r>=s[s.length-3])return a.x+=(a.data.x+s[s.length-2]-a.x)*o,void(a.y+=(a.data.y+s[s.length-1]-a.y)*o);var h=i.Animation.binarySearch(s,r,3),l=s[h-2],u=s[h-1],c=s[h],d=1-(r-c)/(s[h+-3]-c);d=this.curves.getCurvePercent(h/3-1,d),a.x+=(a.data.x+l+(s[h+1]-l)*d-a.x)*o,a.y+=(a.data.y+u+(s[h+2]-u)*d-a.y)*o}}},i.ScaleTimeline=function(t){this.curves=new i.Curves(t),this.frames=[],this.frames.length=3*t},i.ScaleTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(t,e,r,i){t*=3,this.frames[t]=e,this.frames[t+1]=r,this.frames[t+2]=i},apply:function(t,e,r,n,o){var s=this.frames;if(!(r<s[0])){var a=t.bones[this.boneIndex];if(r>=s[s.length-3])return a.scaleX+=(a.data.scaleX*s[s.length-2]-a.scaleX)*o,void(a.scaleY+=(a.data.scaleY*s[s.length-1]-a.scaleY)*o);var h=i.Animation.binarySearch(s,r,3),l=s[h-2],u=s[h-1],c=s[h],d=1-(r-c)/(s[h+-3]-c);d=this.curves.getCurvePercent(h/3-1,d),a.scaleX+=(a.data.scaleX*(l+(s[h+1]-l)*d)-a.scaleX)*o,a.scaleY+=(a.data.scaleY*(u+(s[h+2]-u)*d)-a.scaleY)*o
}}},i.ColorTimeline=function(t){this.curves=new i.Curves(t),this.frames=[],this.frames.length=5*t},i.ColorTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length/5},setFrame:function(t,e,r,i,n,o){t*=5,this.frames[t]=e,this.frames[t+1]=r,this.frames[t+2]=i,this.frames[t+3]=n,this.frames[t+4]=o},apply:function(t,e,r,n,o){var s=this.frames;if(!(r<s[0])){var a,h,l,u;if(r>=s[s.length-5]){var c=s.length-1;a=s[c-3],h=s[c-2],l=s[c-1],u=s[c]}else{var d=i.Animation.binarySearch(s,r,5),p=s[d-4],f=s[d-3],v=s[d-2],g=s[d-1],m=s[d],y=1-(r-m)/(s[d-5]-m);y=this.curves.getCurvePercent(d/5-1,y),a=p+(s[d+1]-p)*y,h=f+(s[d+2]-f)*y,l=v+(s[d+3]-v)*y,u=g+(s[d+4]-g)*y}var x=t.slots[this.slotIndex];1>o?(x.r+=(a-x.r)*o,x.g+=(h-x.g)*o,x.b+=(l-x.b)*o,x.a+=(u-x.a)*o):(x.r=a,x.g=h,x.b=l,x.a=u)}}},i.AttachmentTimeline=function(t){this.curves=new i.Curves(t),this.frames=[],this.frames.length=t,this.attachmentNames=[],this.attachmentNames.length=t},i.AttachmentTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length},setFrame:function(t,e,r){this.frames[t]=e,this.attachmentNames[t]=r},apply:function(t,e,r){var n=this.frames;if(r<n[0])return void(e>r&&this.apply(t,e,Number.MAX_VALUE,null,0));e>r&&(e=-1);var o=r>=n[n.length-1]?n.length-1:i.Animation.binarySearch1(n,r)-1;if(!(n[o]<e)){var s=this.attachmentNames[o];t.slots[this.slotIndex].setAttachment(s?t.getAttachmentBySlotIndex(this.slotIndex,s):null)}}},i.EventTimeline=function(t){this.frames=[],this.frames.length=t,this.events=[],this.events.length=t},i.EventTimeline.prototype={getFrameCount:function(){return this.frames.length},setFrame:function(t,e,r){this.frames[t]=e,this.events[t]=r},apply:function(t,e,r,n,o){if(n){var s=this.frames,a=s.length;if(e>r)this.apply(t,e,Number.MAX_VALUE,n,o),e=-1;else if(e>=s[a-1])return;if(!(r<s[0])){var h;if(e<s[0])h=0;else{h=i.Animation.binarySearch1(s,e);for(var l=s[h];h>0&&s[h-1]==l;)h--}for(var u=this.events;a>h&&r>=s[h];h++)n.push(u[h])}}}},i.DrawOrderTimeline=function(t){this.frames=[],this.frames.length=t,this.drawOrders=[],this.drawOrders.length=t},i.DrawOrderTimeline.prototype={getFrameCount:function(){return this.frames.length},setFrame:function(t,e,r){this.frames[t]=e,this.drawOrders[t]=r},apply:function(t,e,r){var n=this.frames;if(!(r<n[0])){var o;o=r>=n[n.length-1]?n.length-1:i.Animation.binarySearch1(n,r)-1;var s=t.drawOrder,a=t.slots,h=this.drawOrders[o];if(h)for(var l=0,u=h.length;u>l;l++)s[l]=t.slots[h[l]];else for(var l=0,u=a.length;u>l;l++)s[l]=a[l]}}},i.FfdTimeline=function(t){this.curves=new i.Curves(t),this.frames=[],this.frames.length=t,this.frameVertices=[],this.frameVertices.length=t},i.FfdTimeline.prototype={slotIndex:0,attachment:0,getFrameCount:function(){return this.frames.length},setFrame:function(t,e,r){this.frames[t]=e,this.frameVertices[t]=r},apply:function(t,e,r,n,o){var s=t.slots[this.slotIndex];if(s.attachment==this.attachment){var a=this.frames;if(!(r<a[0])){var h=this.frameVertices,l=h[0].length,u=s.attachmentVertices;if(u.length!=l&&(o=1),u.length=l,r>=a[a.length-1]){var c=h[a.length-1];if(1>o)for(var d=0;l>d;d++)u[d]+=(c[d]-u[d])*o;else for(var d=0;l>d;d++)u[d]=c[d]}else{var p=i.Animation.binarySearch1(a,r),f=a[p],v=1-(r-f)/(a[p-1]-f);v=this.curves.getCurvePercent(p-1,0>v?0:v>1?1:v);var g=h[p-1],m=h[p];if(1>o)for(var d=0;l>d;d++){var y=g[d];u[d]+=(y+(m[d]-y)*v-u[d])*o}else for(var d=0;l>d;d++){var y=g[d];u[d]=y+(m[d]-y)*v}}}}}},i.IkConstraintTimeline=function(t){this.curves=new i.Curves(t),this.frames=[],this.frames.length=3*t},i.IkConstraintTimeline.prototype={ikConstraintIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(t,e,r,i){t*=3,this.frames[t]=e,this.frames[t+1]=r,this.frames[t+2]=i},apply:function(t,e,r,n,o){var s=this.frames;if(!(r<s[0])){var a=t.ikConstraints[this.ikConstraintIndex];if(r>=s[s.length-3])return a.mix+=(s[s.length-2]-a.mix)*o,void(a.bendDirection=s[s.length-1]);var h=i.Animation.binarySearch(s,r,3),l=s[h+-2],u=s[h],c=1-(r-u)/(s[h+-3]-u);c=this.curves.getCurvePercent(h/3-1,c);var d=l+(s[h+1]-l)*c;a.mix+=(d-a.mix)*o,a.bendDirection=s[h+-1]}}},i.FlipXTimeline=function(t){this.curves=new i.Curves(t),this.frames=[],this.frames.length=2*t},i.FlipXTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(t,e,r){t*=2,this.frames[t]=e,this.frames[t+1]=r?1:0},apply:function(t,e,r){var n=this.frames;if(r<n[0])return void(e>r&&this.apply(t,e,Number.MAX_VALUE,null,0));e>r&&(e=-1);var o=(r>=n[n.length-2]?n.length:i.Animation.binarySearch(n,r,2))-2;n[o]<e||(t.bones[boneIndex].flipX=0!=n[o+1])}},i.FlipYTimeline=function(t){this.curves=new i.Curves(t),this.frames=[],this.frames.length=2*t},i.FlipYTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(t,e,r){t*=2,this.frames[t]=e,this.frames[t+1]=r?1:0},apply:function(t,e,r){var n=this.frames;if(r<n[0])return void(e>r&&this.apply(t,e,Number.MAX_VALUE,null,0));e>r&&(e=-1);var o=(r>=n[n.length-2]?n.length:i.Animation.binarySearch(n,r,2))-2;n[o]<e||(t.bones[boneIndex].flipY=0!=n[o+1])}},i.SkeletonData=function(){this.bones=[],this.slots=[],this.skins=[],this.events=[],this.animations=[],this.ikConstraints=[]},i.SkeletonData.prototype={name:null,defaultSkin:null,width:0,height:0,version:null,hash:null,findBone:function(t){for(var e=this.bones,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null},findBoneIndex:function(t){for(var e=this.bones,r=0,i=e.length;i>r;r++)if(e[r].name==t)return r;return-1},findSlot:function(t){for(var e=this.slots,r=0,i=e.length;i>r;r++)if(e[r].name==t)return slot[r];return null},findSlotIndex:function(t){for(var e=this.slots,r=0,i=e.length;i>r;r++)if(e[r].name==t)return r;return-1},findSkin:function(t){for(var e=this.skins,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null},findEvent:function(t){for(var e=this.events,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null},findAnimation:function(t){for(var e=this.animations,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null},findIkConstraint:function(t){for(var e=this.ikConstraints,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null}},i.Skeleton=function(t){this.data=t,this.bones=[];for(var e=0,r=t.bones.length;r>e;e++){var n=t.bones[e],o=n.parent?this.bones[t.bones.indexOf(n.parent)]:null;this.bones.push(new i.Bone(n,this,o))}this.slots=[],this.drawOrder=[];for(var e=0,r=t.slots.length;r>e;e++){var s=t.slots[e],a=this.bones[t.bones.indexOf(s.boneData)],h=new i.Slot(s,a);this.slots.push(h),this.drawOrder.push(h)}this.ikConstraints=[];for(var e=0,r=t.ikConstraints.length;r>e;e++)this.ikConstraints.push(new i.IkConstraint(t.ikConstraints[e],this));this.boneCache=[],this.updateCache()},i.Skeleton.prototype={x:0,y:0,skin:null,r:1,g:1,b:1,a:1,time:0,flipX:!1,flipY:!1,updateCache:function(){var t=this.ikConstraints,e=t.length,r=e+1,i=this.boneCache;i.length>r&&(i.length=r);for(var n=0,o=i.length;o>n;n++)i[n].length=0;for(;i.length<r;)i[i.length]=[];var s=i[0],a=this.bones;t:for(var n=0,o=a.length;o>n;n++){var h=a[n],l=h;do{for(var u=0;e>u;u++)for(var c=t[u],d=c.bones[0],p=c.bones[c.bones.length-1];;){if(l==p){i[u].push(h),i[u+1].push(h);continue t}if(p==d)break;p=p.parent}l=l.parent}while(l);s[s.length]=h}},updateWorldTransform:function(){for(var t=this.bones,e=0,r=t.length;r>e;e++){var i=t[e];i.rotationIK=i.rotation}for(var e=0,n=this.boneCache.length-1;;){for(var o=this.boneCache[e],s=0,a=o.length;a>s;s++)o[s].updateWorldTransform();if(e==n)break;this.ikConstraints[e].apply(),e++}},setToSetupPose:function(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()},setBonesToSetupPose:function(){for(var t=this.bones,e=0,r=t.length;r>e;e++)t[e].setToSetupPose();for(var i=this.ikConstraints,e=0,r=i.length;r>e;e++){var n=i[e];n.bendDirection=n.data.bendDirection,n.mix=n.data.mix}},setSlotsToSetupPose:function(){for(var t=this.slots,e=this.drawOrder,r=0,i=t.length;i>r;r++)e[r]=t[r],t[r].setToSetupPose(r)},getRootBone:function(){return this.bones.length?this.bones[0]:null},findBone:function(t){for(var e=this.bones,r=0,i=e.length;i>r;r++)if(e[r].data.name==t)return e[r];return null},findBoneIndex:function(t){for(var e=this.bones,r=0,i=e.length;i>r;r++)if(e[r].data.name==t)return r;return-1},findSlot:function(t){for(var e=this.slots,r=0,i=e.length;i>r;r++)if(e[r].data.name==t)return e[r];return null},findSlotIndex:function(t){for(var e=this.slots,r=0,i=e.length;i>r;r++)if(e[r].data.name==t)return r;return-1},setSkinByName:function(t){var e=this.data.findSkin(t);if(!e)throw"Skin not found: "+t;this.setSkin(e)},setSkin:function(t){if(t)if(this.skin)t._attachAll(this,this.skin);else for(var e=this.slots,r=0,i=e.length;i>r;r++){var n=e[r],o=n.data.attachmentName;if(o){var s=t.getAttachment(r,o);s&&n.setAttachment(s)}}this.skin=t},getAttachmentBySlotName:function(t,e){return this.getAttachmentBySlotIndex(this.data.findSlotIndex(t),e)},getAttachmentBySlotIndex:function(t,e){if(this.skin){var r=this.skin.getAttachment(t,e);if(r)return r}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(t,e):null},setAttachment:function(t,e){for(var r=this.slots,i=0,n=r.length;n>i;i++){var o=r[i];if(o.data.name==t){var s=null;if(e&&(s=this.getAttachmentBySlotIndex(i,e),!s))throw"Attachment not found: "+e+", for slot: "+t;return void o.setAttachment(s)}}throw"Slot not found: "+t},findIkConstraint:function(t){for(var e=this.ikConstraints,r=0,i=e.length;i>r;r++)if(e[r].data.name==t)return e[r];return null},update:function(t){this.time+=t}},i.EventData=function(t){this.name=t},i.EventData.prototype={intValue:0,floatValue:0,stringValue:null},i.Event=function(t){this.data=t},i.Event.prototype={intValue:0,floatValue:0,stringValue:null},i.AttachmentType={region:0,boundingbox:1,mesh:2,skinnedmesh:3},i.RegionAttachment=function(t){this.name=t,this.offset=[],this.offset.length=8,this.uvs=[],this.uvs.length=8},i.RegionAttachment.prototype={type:i.AttachmentType.region,x:0,y:0,rotation:0,scaleX:1,scaleY:1,width:0,height:0,r:1,g:1,b:1,a:1,path:null,rendererObject:null,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,setUVs:function(t,e,r,i,n){var o=this.uvs;n?(o[2]=t,o[3]=i,o[4]=t,o[5]=e,o[6]=r,o[7]=e,o[0]=r,o[1]=i):(o[0]=t,o[1]=i,o[2]=t,o[3]=e,o[4]=r,o[5]=e,o[6]=r,o[7]=i)},updateOffset:function(){var t=this.width/this.regionOriginalWidth*this.scaleX,e=this.height/this.regionOriginalHeight*this.scaleY,r=-this.width/2*this.scaleX+this.regionOffsetX*t,n=-this.height/2*this.scaleY+this.regionOffsetY*e,o=r+this.regionWidth*t,s=n+this.regionHeight*e,a=this.rotation*i.degRad,h=Math.cos(a),l=Math.sin(a),u=r*h+this.x,c=r*l,d=n*h+this.y,p=n*l,f=o*h+this.x,v=o*l,g=s*h+this.y,m=s*l,y=this.offset;y[0]=u-p,y[1]=d+c,y[2]=u-m,y[3]=g+c,y[4]=f-m,y[5]=g+v,y[6]=f-p,y[7]=d+v},computeVertices:function(t,e,r,i){t+=r.worldX,e+=r.worldY;var n=r.m00,o=r.m01,s=r.m10,a=r.m11,h=this.offset;i[0]=h[0]*n+h[1]*o+t,i[1]=h[0]*s+h[1]*a+e,i[2]=h[2]*n+h[3]*o+t,i[3]=h[2]*s+h[3]*a+e,i[4]=h[4]*n+h[5]*o+t,i[5]=h[4]*s+h[5]*a+e,i[6]=h[6]*n+h[7]*o+t,i[7]=h[6]*s+h[7]*a+e}},i.MeshAttachment=function(t){this.name=t},i.MeshAttachment.prototype={type:i.AttachmentType.mesh,vertices:null,uvs:null,regionUVs:null,triangles:null,hullLength:0,r:1,g:1,b:1,a:1,path:null,rendererObject:null,regionU:0,regionV:0,regionU2:0,regionV2:0,regionRotate:!1,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,edges:null,width:0,height:0,updateUVs:function(){var t=this.regionU2-this.regionU,e=this.regionV2-this.regionV,r=this.regionUVs.length;if(this.uvs&&this.uvs.length==r||(this.uvs=new i.Float32Array(r)),this.regionRotate)for(var n=0;r>n;n+=2)this.uvs[n]=this.regionU+this.regionUVs[n+1]*t,this.uvs[n+1]=this.regionV+e-this.regionUVs[n]*e;else for(var n=0;r>n;n+=2)this.uvs[n]=this.regionU+this.regionUVs[n]*t,this.uvs[n+1]=this.regionV+this.regionUVs[n+1]*e},computeWorldVertices:function(t,e,r,i){var n=r.bone;t+=n.worldX,e+=n.worldY;var o=n.m00,s=n.m01,a=n.m10,h=n.m11,l=this.vertices,u=l.length;r.attachmentVertices.length==u&&(l=r.attachmentVertices);for(var c=0;u>c;c+=2){var d=l[c],p=l[c+1];i[c]=d*o+p*s+t,i[c+1]=d*a+p*h+e}}},i.SkinnedMeshAttachment=function(t){this.name=t},i.SkinnedMeshAttachment.prototype={type:i.AttachmentType.skinnedmesh,bones:null,weights:null,uvs:null,regionUVs:null,triangles:null,hullLength:0,r:1,g:1,b:1,a:1,path:null,rendererObject:null,regionU:0,regionV:0,regionU2:0,regionV2:0,regionRotate:!1,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,edges:null,width:0,height:0,updateUVs:function(){var t=this.regionU2-this.regionU,e=this.regionV2-this.regionV,r=this.regionUVs.length;if(this.uvs&&this.uvs.length==r||(this.uvs=new i.Float32Array(r)),this.regionRotate)for(var n=0;r>n;n+=2)this.uvs[n]=this.regionU+this.regionUVs[n+1]*t,this.uvs[n+1]=this.regionV+e-this.regionUVs[n]*e;else for(var n=0;r>n;n+=2)this.uvs[n]=this.regionU+this.regionUVs[n]*t,this.uvs[n+1]=this.regionV+this.regionUVs[n+1]*e},computeWorldVertices:function(t,e,r,i){var n,o,s,a,h,l,u,c=r.bone.skeleton.bones,d=this.weights,p=this.bones,f=0,v=0,g=0,m=0,y=p.length;if(r.attachmentVertices.length)for(var x=r.attachmentVertices;y>v;f+=2){for(o=0,s=0,n=p[v++]+v;n>v;v++,g+=3,m+=2)a=c[p[v]],h=d[g]+x[m],l=d[g+1]+x[m+1],u=d[g+2],o+=(h*a.m00+l*a.m01+a.worldX)*u,s+=(h*a.m10+l*a.m11+a.worldY)*u;i[f]=o+t,i[f+1]=s+e}else for(;y>v;f+=2){for(o=0,s=0,n=p[v++]+v;n>v;v++,g+=3)a=c[p[v]],h=d[g],l=d[g+1],u=d[g+2],o+=(h*a.m00+l*a.m01+a.worldX)*u,s+=(h*a.m10+l*a.m11+a.worldY)*u;i[f]=o+t,i[f+1]=s+e}}},i.BoundingBoxAttachment=function(t){this.name=t,this.vertices=[]},i.BoundingBoxAttachment.prototype={type:i.AttachmentType.boundingbox,computeWorldVertices:function(t,e,r,i){t+=r.worldX,e+=r.worldY;for(var n=r.m00,o=r.m01,s=r.m10,a=r.m11,h=this.vertices,l=0,u=h.length;u>l;l+=2){var c=h[l],d=h[l+1];i[l]=c*n+d*o+t,i[l+1]=c*s+d*a+e}}},i.AnimationStateData=function(t){this.skeletonData=t,this.animationToMixTime={}},i.AnimationStateData.prototype={defaultMix:0,setMixByName:function(t,e,r){var i=this.skeletonData.findAnimation(t);if(!i)throw"Animation not found: "+t;var n=this.skeletonData.findAnimation(e);if(!n)throw"Animation not found: "+e;this.setMix(i,n,r)},setMix:function(t,e,r){this.animationToMixTime[t.name+":"+e.name]=r},getMix:function(t,e){var r=t.name+":"+e.name;return this.animationToMixTime.hasOwnProperty(r)?this.animationToMixTime[r]:this.defaultMix}},i.TrackEntry=function(){},i.TrackEntry.prototype={next:null,previous:null,animation:null,loop:!1,delay:0,time:0,lastTime:-1,endTime:0,timeScale:1,mixTime:0,mixDuration:0,mix:1,onStart:null,onEnd:null,onComplete:null,onEvent:null},i.AnimationState=function(t){this.data=t,this.tracks=[],this.events=[]},i.AnimationState.prototype={onStart:null,onEnd:null,onComplete:null,onEvent:null,timeScale:1,update:function(t){t*=this.timeScale;for(var e=0;e<this.tracks.length;e++){var r=this.tracks[e];if(r){if(r.time+=t*r.timeScale,r.previous){var i=t*r.previous.timeScale;r.previous.time+=i,r.mixTime+=i}var n=r.next;n?(n.time=r.lastTime-n.delay,n.time>=0&&this.setCurrent(e,n)):!r.loop&&r.lastTime>=r.endTime&&this.clearTrack(e)}}},apply:function(t){for(var e=0;e<this.tracks.length;e++){var r=this.tracks[e];if(r){this.events.length=0;var i=r.time,n=r.lastTime,o=r.endTime,s=r.loop;!s&&i>o&&(i=o);var a=r.previous;if(a){var h=a.time;!a.loop&&h>a.endTime&&(h=a.endTime),a.animation.apply(t,h,h,a.loop,null);var l=r.mixTime/r.mixDuration*r.mix;l>=1&&(l=1,r.previous=null),r.animation.mix(t,r.lastTime,i,s,this.events,l)}else 1==r.mix?r.animation.apply(t,r.lastTime,i,s,this.events):r.animation.mix(t,r.lastTime,i,s,this.events,r.mix);for(var u=0,c=this.events.length;c>u;u++){var d=this.events[u];r.onEvent&&r.onEvent(e,d),this.onEvent&&this.onEvent(e,d)}if(s?n%o>i%o:o>n&&i>=o){var p=Math.floor(i/o);r.onComplete&&r.onComplete(e,p),this.onComplete&&this.onComplete(e,p)}r.lastTime=r.time}}},clearTracks:function(){for(var t=0,e=this.tracks.length;e>t;t++)this.clearTrack(t);this.tracks.length=0},clearTrack:function(t){if(!(t>=this.tracks.length)){var e=this.tracks[t];e&&(e.onEnd&&e.onEnd(t),this.onEnd&&this.onEnd(t),this.tracks[t]=null)}},_expandToIndex:function(t){if(t<this.tracks.length)return this.tracks[t];for(;t>=this.tracks.length;)this.tracks.push(null);return null},setCurrent:function(t,e){var r=this._expandToIndex(t);if(r){var i=r.previous;r.previous=null,r.onEnd&&r.onEnd(t),this.onEnd&&this.onEnd(t),e.mixDuration=this.data.getMix(r.animation,e.animation),e.mixDuration>0&&(e.mixTime=0,e.previous=i&&r.mixTime/r.mixDuration<.5?i:r)}this.tracks[t]=e,e.onStart&&e.onStart(t),this.onStart&&this.onStart(t)},setAnimationByName:function(t,e,r){var i=this.data.skeletonData.findAnimation(e);if(!i)throw"Animation not found: "+e;return this.setAnimation(t,i,r)},setAnimation:function(t,e,r){var n=new i.TrackEntry;return n.animation=e,n.loop=r,n.endTime=e.duration,this.setCurrent(t,n),n},addAnimationByName:function(t,e,r,i){var n=this.data.skeletonData.findAnimation(e);if(!n)throw"Animation not found: "+e;return this.addAnimation(t,n,r,i)},addAnimation:function(t,e,r,n){var o=new i.TrackEntry;o.animation=e,o.loop=r,o.endTime=e.duration;var s=this._expandToIndex(t);if(s){for(;s.next;)s=s.next;s.next=o}else this.tracks[t]=o;return 0>=n&&(s?n+=s.endTime-this.data.getMix(s.animation,e):n=0),o.delay=n,o},getCurrent:function(t){return t>=this.tracks.length?null:this.tracks[t]}},i.SkeletonJsonParser=function(t){this.attachmentLoader=t},i.SkeletonJsonParser.prototype={scale:1,readSkeletonData:function(t,e){var r=new i.SkeletonData;r.name=e;var n=t.skeleton;n&&(r.hash=n.hash,r.version=n.spine,r.width=n.width||0,r.height=n.height||0);for(var o=t.bones,s=0,a=o.length;a>s;s++){var h=o[s],l=null;if(h.parent&&(l=r.findBone(h.parent),!l))throw"Parent bone not found: "+h.parent;var u=new i.BoneData(h.name,l);u.length=(h.length||0)*this.scale,u.x=(h.x||0)*this.scale,u.y=(h.y||0)*this.scale,u.rotation=h.rotation||0,u.scaleX=h.hasOwnProperty("scaleX")?h.scaleX:1,u.scaleY=h.hasOwnProperty("scaleY")?h.scaleY:1,u.inheritScale=h.hasOwnProperty("inheritScale")?h.inheritScale:!0,u.inheritRotation=h.hasOwnProperty("inheritRotation")?h.inheritRotation:!0,r.bones.push(u)}var c=t.ik;if(c)for(var s=0,a=c.length;a>s;s++){for(var d=c[s],p=new i.IkConstraintData(d.name),o=d.bones,f=0,v=o.length;v>f;f++){var g=r.findBone(o[f]);if(!g)throw"IK bone not found: "+o[f];p.bones.push(g)}if(p.target=r.findBone(d.target),!p.target)throw"Target bone not found: "+d.target;p.bendDirection=!d.hasOwnProperty("bendPositive")||d.bendPositive?1:-1,p.mix=d.hasOwnProperty("mix")?d.mix:1,r.ikConstraints.push(p)}for(var m=t.slots,s=0,a=m.length;a>s;s++){var y=m[s],u=r.findBone(y.bone);if(!u)throw"Slot bone not found: "+y.bone;var x=new i.SlotData(y.name,u),b=y.color;b&&(x.r=this.toColor(b,0),x.g=this.toColor(b,1),x.b=this.toColor(b,2),x.a=this.toColor(b,3)),x.attachmentName=y.attachment,x.additiveBlending=y.additive&&"true"==y.additive,r.slots.push(x)}var T=t.skins;for(var _ in T)if(T.hasOwnProperty(_)){var E=T[_],S=new i.Skin(_);for(var w in E)if(E.hasOwnProperty(w)){var A=r.findSlotIndex(w),C=E[w];for(var R in C)if(C.hasOwnProperty(R)){var M=this.readAttachment(S,R,C[R]);M&&S.addAttachment(A,R,M)}}r.skins.push(S),"default"==S.name&&(r.defaultSkin=S)}var D=t.events;for(var O in D)if(D.hasOwnProperty(O)){var P=D[O],F=new i.EventData(O);F.intValue=P["int"]||0,F.floatValue=P["float"]||0,F.stringValue=P.string||null,r.events.push(F)}var L=t.animations;for(var B in L)L.hasOwnProperty(B)&&this.readAnimation(B,L[B],r);return r},readAttachment:function(t,e,r){e=r.name||e;var n=i.AttachmentType[r.type||"region"],o=r.path||e,s=this.scale;if(n==i.AttachmentType.region){var a=this.attachmentLoader.newRegionAttachment(t,e,o);if(!a)return null;a.path=o,a.x=(r.x||0)*s,a.y=(r.y||0)*s,a.scaleX=r.hasOwnProperty("scaleX")?r.scaleX:1,a.scaleY=r.hasOwnProperty("scaleY")?r.scaleY:1,a.rotation=r.rotation||0,a.width=(r.width||0)*s,a.height=(r.height||0)*s;var h=r.color;return h&&(a.r=this.toColor(h,0),a.g=this.toColor(h,1),a.b=this.toColor(h,2),a.a=this.toColor(h,3)),a.updateOffset(),a}if(n==i.AttachmentType.mesh){var l=this.attachmentLoader.newMeshAttachment(t,e,o);return l?(l.path=o,l.vertices=this.getFloatArray(r,"vertices",s),l.triangles=this.getIntArray(r,"triangles"),l.regionUVs=this.getFloatArray(r,"uvs",1),l.updateUVs(),h=r.color,h&&(l.r=this.toColor(h,0),l.g=this.toColor(h,1),l.b=this.toColor(h,2),l.a=this.toColor(h,3)),l.hullLength=2*(r.hull||0),r.edges&&(l.edges=this.getIntArray(r,"edges")),l.width=(r.width||0)*s,l.height=(r.height||0)*s,l):null}if(n==i.AttachmentType.skinnedmesh){var l=this.attachmentLoader.newSkinnedMeshAttachment(t,e,o);if(!l)return null;l.path=o;for(var u=this.getFloatArray(r,"uvs",1),c=this.getFloatArray(r,"vertices",1),d=[],p=[],f=0,v=c.length;v>f;){var g=0|c[f++];p[p.length]=g;for(var m=f+4*g;m>f;)p[p.length]=c[f],d[d.length]=c[f+1]*s,d[d.length]=c[f+2]*s,d[d.length]=c[f+3],f+=4}return l.bones=p,l.weights=d,l.triangles=this.getIntArray(r,"triangles"),l.regionUVs=u,l.updateUVs(),h=r.color,h&&(l.r=this.toColor(h,0),l.g=this.toColor(h,1),l.b=this.toColor(h,2),l.a=this.toColor(h,3)),l.hullLength=2*(r.hull||0),r.edges&&(l.edges=this.getIntArray(r,"edges")),l.width=(r.width||0)*s,l.height=(r.height||0)*s,l}if(n==i.AttachmentType.boundingbox){for(var y=this.attachmentLoader.newBoundingBoxAttachment(t,e),c=r.vertices,f=0,v=c.length;v>f;f++)y.vertices.push(c[f]*s);return y}throw"Unknown attachment type: "+n},readAnimation:function(t,e,r){var n=[],o=0,s=e.slots;for(var a in s)if(s.hasOwnProperty(a)){var h=s[a],l=r.findSlotIndex(a);for(var u in h)if(h.hasOwnProperty(u)){var c=h[u];if("color"==u){var d=new i.ColorTimeline(c.length);d.slotIndex=l;for(var p=0,f=0,v=c.length;v>f;f++){var g=c[f],m=g.color,y=this.toColor(m,0),x=this.toColor(m,1),b=this.toColor(m,2),T=this.toColor(m,3);d.setFrame(p,g.time,y,x,b,T),this.readCurve(d,p,g),p++}n.push(d),o=Math.max(o,d.frames[5*d.getFrameCount()-5])}else{if("attachment"!=u)throw"Invalid timeline type for a slot: "+u+" ("+a+")";var d=new i.AttachmentTimeline(c.length);d.slotIndex=l;for(var p=0,f=0,v=c.length;v>f;f++){var g=c[f];d.setFrame(p++,g.time,g.name)}n.push(d),o=Math.max(o,d.frames[d.getFrameCount()-1])}}}var _=e.bones;for(var E in _)if(_.hasOwnProperty(E)){var S=r.findBoneIndex(E);if(-1==S)throw"Bone not found: "+E;var w=_[E];for(var u in w)if(w.hasOwnProperty(u)){var c=w[u];if("rotate"==u){var d=new i.RotateTimeline(c.length);d.boneIndex=S;for(var p=0,f=0,v=c.length;v>f;f++){var g=c[f];d.setFrame(p,g.time,g.angle),this.readCurve(d,p,g),p++}n.push(d),o=Math.max(o,d.frames[2*d.getFrameCount()-2])}else if("translate"==u||"scale"==u){var d,A=1;"scale"==u?d=new i.ScaleTimeline(c.length):(d=new i.TranslateTimeline(c.length),A=this.scale),d.boneIndex=S;for(var p=0,f=0,v=c.length;v>f;f++){var g=c[f],C=(g.x||0)*A,R=(g.y||0)*A;d.setFrame(p,g.time,C,R),this.readCurve(d,p,g),p++}n.push(d),o=Math.max(o,d.frames[3*d.getFrameCount()-3])}else{if("flipX"!=u&&"flipY"!=u)throw"Invalid timeline type for a bone: "+u+" ("+E+")";var C="flipX"==u,d=C?new i.FlipXTimeline(c.length):new i.FlipYTimeline(c.length);d.boneIndex=S;for(var M=C?"x":"y",p=0,f=0,v=c.length;v>f;f++){var g=c[f];d.setFrame(p,g.time,g[M]||!1),p++}n.push(d),o=Math.max(o,d.frames[2*d.getFrameCount()-2])}}}var D=e.ik;for(var O in D)if(D.hasOwnProperty(O)){var P=r.findIkConstraint(O),c=D[O],d=new i.IkConstraintTimeline(c.length);d.ikConstraintIndex=r.ikConstraints.indexOf(P);for(var p=0,f=0,v=c.length;v>f;f++){var g=c[f],F=g.hasOwnProperty("mix")?g.mix:1,L=!g.hasOwnProperty("bendPositive")||g.bendPositive?1:-1;d.setFrame(p,g.time,F,L),this.readCurve(d,p,g),p++}n.push(d),o=Math.max(o,d.frames[3*d.frameCount-3])}var B=e.ffd;for(var I in B){var N=r.findSkin(I),h=B[I];for(a in h){var l=r.findSlotIndex(a),k=h[a];for(var U in k){var c=k[U],d=new i.FfdTimeline(c.length),X=N.getAttachment(l,U);if(!X)throw"FFD attachment not found: "+U;d.slotIndex=l,d.attachment=X;var j,Y=X.type==i.AttachmentType.mesh;j=Y?X.vertices.length:X.weights.length/3*2;for(var p=0,f=0,v=c.length;v>f;f++){var W,g=c[f];if(g.vertices){var G=g.vertices,W=[];W.length=j;var z=g.offset||0,H=G.length;if(1==this.scale)for(var V=0;H>V;V++)W[V+z]=G[V];else for(var V=0;H>V;V++)W[V+z]=G[V]*this.scale;if(Y)for(var q=X.vertices,V=0,H=W.length;H>V;V++)W[V]+=q[V]}else Y?W=X.vertices:(W=[],W.length=j);d.setFrame(p,g.time,W),this.readCurve(d,p,g),p++}n[n.length]=d,o=Math.max(o,d.frames[d.frameCount-1])}}}var K=e.drawOrder;if(K||(K=e.draworder),K){for(var d=new i.DrawOrderTimeline(K.length),Q=r.slots.length,p=0,f=0,v=K.length;v>f;f++){var J=K[f],Z=null;if(J.offsets){Z=[],Z.length=Q;for(var V=Q-1;V>=0;V--)Z[V]=-1;var $=J.offsets,te=[];te.length=Q-$.length;for(var ee=0,re=0,V=0,H=$.length;H>V;V++){var ie=$[V],l=r.findSlotIndex(ie.slot);if(-1==l)throw"Slot not found: "+ie.slot;for(;ee!=l;)te[re++]=ee++;Z[ee+ie.offset]=ee++}for(;Q>ee;)te[re++]=ee++;for(var V=Q-1;V>=0;V--)-1==Z[V]&&(Z[V]=te[--re])}d.setFrame(p++,J.time,Z)}n.push(d),o=Math.max(o,d.frames[d.getFrameCount()-1])}var ne=e.events;if(ne){for(var d=new i.EventTimeline(ne.length),p=0,f=0,v=ne.length;v>f;f++){var oe=ne[f],se=r.findEvent(oe.name);if(!se)throw"Event not found: "+oe.name;var ae=new i.Event(se);ae.intValue=oe.hasOwnProperty("int")?oe["int"]:se.intValue,ae.floatValue=oe.hasOwnProperty("float")?oe["float"]:se.floatValue,ae.stringValue=oe.hasOwnProperty("string")?oe.string:se.stringValue,d.setFrame(p++,oe.time,ae)}n.push(d),o=Math.max(o,d.frames[d.getFrameCount()-1])}r.animations.push(new i.Animation(t,n,o))},readCurve:function(t,e,r){var i=r.curve;i?"stepped"==i?t.curves.setStepped(e):i instanceof Array&&t.curves.setCurve(e,i[0],i[1],i[2],i[3]):t.curves.setLinear(e)},toColor:function(t,e){if(8!=t.length)throw"Color hexidecimal length must be 8, recieved: "+t;return parseInt(t.substring(2*e,2*e+2),16)/255},getFloatArray:function(t,e,r){var n=t[e],o=new i.Float32Array(n.length),s=0,a=n.length;if(1==r)for(;a>s;s++)o[s]=n[s];else for(;a>s;s++)o[s]=n[s]*r;return o},getIntArray:function(t,e){for(var r=t[e],n=new i.Uint16Array(r.length),o=0,s=r.length;s>o;o++)n[o]=0|r[o];return n}},i.Atlas=function(t,e,n){e&&e.indexOf("/")!==e.length&&(e+="/"),this.pages=[],this.regions=[],this.texturesLoading=0;var o=new i.AtlasReader(t),s=[];s.length=4;for(var a=null;;){var h=o.readLine();if(null===h)break;if(h=o.trim(h),h.length)if(a){var l=new i.AtlasRegion;l.name=h,l.page=a,l.rotate="true"==o.readValue(),o.readTuple(s);var u=parseInt(s[0]),c=parseInt(s[1]);o.readTuple(s);var d=parseInt(s[0]),p=parseInt(s[1]);l.u=u/a.width,l.v=c/a.height,l.rotate?(l.u2=(u+p)/a.width,l.v2=(c+d)/a.height):(l.u2=(u+d)/a.width,l.v2=(c+p)/a.height),l.x=u,l.y=c,l.width=Math.abs(d),l.height=Math.abs(p),4==o.readTuple(s)&&(l.splits=[parseInt(s[0]),parseInt(s[1]),parseInt(s[2]),parseInt(s[3])],4==o.readTuple(s)&&(l.pads=[parseInt(s[0]),parseInt(s[1]),parseInt(s[2]),parseInt(s[3])],o.readTuple(s))),l.originalWidth=parseInt(s[0]),l.originalHeight=parseInt(s[1]),o.readTuple(s),l.offsetX=parseInt(s[0]),l.offsetY=parseInt(s[1]),l.index=parseInt(o.readValue()),this.regions.push(l)}else{a=new i.AtlasPage,a.name=h,2==o.readTuple(s)&&(a.width=parseInt(s[0]),a.height=parseInt(s[1]),o.readTuple(s)),a.format=i.Atlas.Format[s[0]],o.readTuple(s),a.minFilter=i.Atlas.TextureFilter[s[0]],a.magFilter=i.Atlas.TextureFilter[s[1]];var f=o.readValue();a.uWrap=i.Atlas.TextureWrap.clampToEdge,a.vWrap=i.Atlas.TextureWrap.clampToEdge,"x"==f?a.uWrap=i.Atlas.TextureWrap.repeat:"y"==f?a.vWrap=i.Atlas.TextureWrap.repeat:"xy"==f&&(a.uWrap=a.vWrap=i.Atlas.TextureWrap.repeat),a.rendererObject=r.BaseTexture.fromImage(e+h,n),this.pages.push(a)}else a=null}},i.Atlas.prototype={findRegion:function(t){for(var e=this.regions,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null},dispose:function(){for(var t=this.pages,e=0,r=t.length;r>e;e++)t[e].rendererObject.destroy(!0)},updateUVs:function(t){for(var e=this.regions,r=0,i=e.length;i>r;r++){var n=e[r];n.page==t&&(n.u=n.x/t.width,n.v=n.y/t.height,n.rotate?(n.u2=(n.x+n.height)/t.width,n.v2=(n.y+n.width)/t.height):(n.u2=(n.x+n.width)/t.width,n.v2=(n.y+n.height)/t.height))}}},i.Atlas.Format={alpha:0,intensity:1,luminanceAlpha:2,rgb565:3,rgba4444:4,rgb888:5,rgba8888:6},i.Atlas.TextureFilter={nearest:0,linear:1,mipMap:2,mipMapNearestNearest:3,mipMapLinearNearest:4,mipMapNearestLinear:5,mipMapLinearLinear:6},i.Atlas.TextureWrap={mirroredRepeat:0,clampToEdge:1,repeat:2},i.AtlasPage=function(){},i.AtlasPage.prototype={name:null,format:null,minFilter:null,magFilter:null,uWrap:null,vWrap:null,rendererObject:null,width:0,height:0},i.AtlasRegion=function(){},i.AtlasRegion.prototype={page:null,name:null,x:0,y:0,width:0,height:0,u:0,v:0,u2:0,v2:0,offsetX:0,offsetY:0,originalWidth:0,originalHeight:0,index:0,rotate:!1,splits:null,pads:null},i.AtlasReader=function(t){this.lines=t.split(/\r\n|\r|\n/)},i.AtlasReader.prototype={index:0,trim:function(t){return t.replace(/^\s+|\s+$/g,"")},readLine:function(){return this.index>=this.lines.length?null:this.lines[this.index++]},readValue:function(){var t=this.readLine(),e=t.indexOf(":");if(-1==e)throw"Invalid line: "+t;return this.trim(t.substring(e+1))},readTuple:function(t){var e=this.readLine(),r=e.indexOf(":");if(-1==r)throw"Invalid line: "+e;for(var i=0,n=r+1;3>i;i++){var o=e.indexOf(",",n);if(-1==o)break;t[i]=this.trim(e.substr(n,o-n)),n=o+1}return t[i]=this.trim(e.substring(n)),i+1}},i.AtlasAttachmentParser=function(t){this.atlas=t},i.AtlasAttachmentParser.prototype={newRegionAttachment:function(t,e,r){var n=this.atlas.findRegion(r);if(!n)throw"Region not found in atlas: "+r+" (region attachment: "+e+")";var o=new i.RegionAttachment(e);return o.rendererObject=n,o.setUVs(n.u,n.v,n.u2,n.v2,n.rotate),o.regionOffsetX=n.offsetX,o.regionOffsetY=n.offsetY,o.regionWidth=n.width,o.regionHeight=n.height,o.regionOriginalWidth=n.originalWidth,o.regionOriginalHeight=n.originalHeight,o},newMeshAttachment:function(t,e,r){var n=this.atlas.findRegion(r);if(!n)throw"Region not found in atlas: "+r+" (mesh attachment: "+e+")";var o=new i.MeshAttachment(e);return o.rendererObject=n,o.regionU=n.u,o.regionV=n.v,o.regionU2=n.u2,o.regionV2=n.v2,o.regionRotate=n.rotate,o.regionOffsetX=n.offsetX,o.regionOffsetY=n.offsetY,o.regionWidth=n.width,o.regionHeight=n.height,o.regionOriginalWidth=n.originalWidth,o.regionOriginalHeight=n.originalHeight,o},newSkinnedMeshAttachment:function(t,e,r){var n=this.atlas.findRegion(r);if(!n)throw"Region not found in atlas: "+r+" (skinned mesh attachment: "+e+")";var o=new i.SkinnedMeshAttachment(e);return o.rendererObject=n,o.regionU=n.u,o.regionV=n.v,o.regionU2=n.u2,o.regionV2=n.v2,o.regionRotate=n.rotate,o.regionOffsetX=n.offsetX,o.regionOffsetY=n.offsetY,o.regionWidth=n.width,o.regionHeight=n.height,o.regionOriginalWidth=n.originalWidth,o.regionOriginalHeight=n.originalHeight,o},newBoundingBoxAttachment:function(t,e){return new i.BoundingBoxAttachment(e)}},i.SkeletonBounds=function(){this.polygonPool=[],this.polygons=[],this.boundingBoxes=[]},i.SkeletonBounds.prototype={minX:0,minY:0,maxX:0,maxY:0,update:function(t,e){var r=t.slots,n=r.length,o=t.x,s=t.y,a=this.boundingBoxes,h=this.polygonPool,l=this.polygons;a.length=0;for(var u=0,c=l.length;c>u;u++)h.push(l[u]);l.length=0;for(var u=0;n>u;u++){var d=r[u],p=d.attachment;if(p.type==i.AttachmentType.boundingbox){a.push(p);var f,v=h.length;v>0?(f=h[v-1],h.splice(v-1,1)):f=[],l.push(f),f.length=p.vertices.length,p.computeWorldVertices(o,s,d.bone,f)}}e&&this.aabbCompute()},aabbCompute:function(){for(var t=this.polygons,e=Number.MAX_VALUE,r=Number.MAX_VALUE,i=Number.MIN_VALUE,n=Number.MIN_VALUE,o=0,s=t.length;s>o;o++)for(var a=t[o],h=0,l=a.length;l>h;h+=2){var u=a[h],c=a[h+1];e=Math.min(e,u),r=Math.min(r,c),i=Math.max(i,u),n=Math.max(n,c)}this.minX=e,this.minY=r,this.maxX=i,this.maxY=n},aabbContainsPoint:function(t,e){return t>=this.minX&&t<=this.maxX&&e>=this.minY&&e<=this.maxY},aabbIntersectsSegment:function(t,e,r,i){var n=this.minX,o=this.minY,s=this.maxX,a=this.maxY;
if(n>=t&&n>=r||o>=e&&o>=i||t>=s&&r>=s||e>=a&&i>=a)return!1;var h=(i-e)/(r-t),l=h*(n-t)+e;if(l>o&&a>l)return!0;if(l=h*(s-t)+e,l>o&&a>l)return!0;var u=(o-e)/h+t;return u>n&&s>u?!0:(u=(a-e)/h+t,u>n&&s>u?!0:!1)},aabbIntersectsSkeleton:function(t){return this.minX<t.maxX&&this.maxX>t.minX&&this.minY<t.maxY&&this.maxY>t.minY},containsPoint:function(t,e){for(var r=this.polygons,i=0,n=r.length;n>i;i++)if(this.polygonContainsPoint(r[i],t,e))return this.boundingBoxes[i];return null},intersectsSegment:function(t,e,r,i){for(var n=this.polygons,o=0,s=n.length;s>o;o++)if(n[o].intersectsSegment(t,e,r,i))return this.boundingBoxes[o];return null},polygonContainsPoint:function(t,e,r){for(var i=t.length,n=i-2,o=!1,s=0;i>s;s+=2){var a=t[s+1],h=t[n+1];if(r>a&&h>=r||r>h&&a>=r){var l=t[s];l+(r-a)/(h-a)*(t[n]-l)<e&&(o=!o)}n=s}return o},polygonIntersectsSegment:function(t,e,r,i,n){for(var o=t.length,s=e-i,a=r-n,h=e*n-r*i,l=t[o-2],u=t[o-1],c=0;o>c;c+=2){var d=t[c],p=t[c+1],f=l*p-u*d,v=l-d,g=u-p,m=s*g-a*v,y=(h*v-s*f)/m;if((y>=l&&d>=y||y>=d&&l>=y)&&(y>=e&&i>=y||y>=i&&e>=y)){var x=(h*g-a*f)/m;if((x>=u&&p>=x||x>=p&&u>=x)&&(x>=r&&n>=x||x>=n&&r>=x))return!0}l=d,u=p}return!1},getPolygon:function(t){var e=this.boundingBoxes.indexOf(t);return-1==e?null:this.polygons[e]},getWidth:function(){return this.maxX-this.minX},getHeight:function(){return this.maxY-this.minY}}},{"../core":20}],115:[function(t,e){e.exports={Spine:t("./Spine"),runtime:t("./SpineRuntime")}},{"./Spine":113,"./SpineRuntime":114}],116:[function(t,e){function r(t,e){i.Container.call(this),this.textWidth=0,this.textHeight=0,this._glyphs=[],this._style={tint:e.tint,align:e.align,fontName:null,fontSize:0},this.font=e.font,this._text=t,this.maxWidth=0,this.dirty=!1,this.updateText()}var i=t("../core");r.prototype=Object.create(i.Container.prototype),r.prototype.constructor=r,e.exports=r,Object.defineProperties(r.prototype,{tint:{get:function(){return this._style.tint},set:function(t){this._style.tint="number"==typeof t&&t>=0?t:16777215,this.dirty=!0}},align:{get:function(){return this._style.align},set:function(t){this._style.align=t,this.dirty=!0}},font:{get:function(){return this._style.font},set:function(t){"string"==typeof t?(t=t.split(" "),this._style.fontName=t.slice(1).join(" "),this._style.fontSize=t.length>=2?parseInt(t[0],10):r.fonts[this.fontName].size):(this._style.fontName=t.name,this._style.fontSize="number"==typeof t.size?t.size:parseInt(t.size,10)),this.dirty=!0}},text:{get:function(){return this._text},set:function(t){this._text=t,this.dirty=!0}}}),r.prototype.updateText=function(){for(var t=r.fonts[this.fontName],e=new i.math.Point,n=null,o=[],s=0,a=0,h=[],l=0,u=this.fontSize/t.size,c=-1,d=0;d<this.text.length;d++){var p=this.text.charCodeAt(d);if(c=/(\s)/.test(this.text.charAt(d))?d:c,/(?:\r\n|\r|\n)/.test(this.text.charAt(d)))h.push(s),a=Math.max(a,s),l++,e.x=0,e.y+=t.lineHeight,n=null;else if(-1!==c&&this.maxWidth>0&&e.x*u>this.maxWidth)o.splice(c,d-c),d=c,c=-1,h.push(s),a=Math.max(a,s),l++,e.x=0,e.y+=t.lineHeight,n=null;else{var f=t.chars[p];f&&(n&&f.kerning[n]&&(e.x+=f.kerning[n]),o.push({texture:f.texture,line:l,charCode:p,position:new i.math.Point(e.x+f.xOffset,e.y+f.yOffset)}),s=e.x+(f.texture.width+f.xOffset),e.x+=f.xAdvance,n=p)}}h.push(s),a=Math.max(a,s);var v=[];for(d=0;l>=d;d++){var g=0;"right"===this.style.align?g=a-h[d]:"center"===this.style.align&&(g=(a-h[d])/2),v.push(g)}var m=o.length,y=this.tint;for(d=0;m>d;d++){var x=this._glyphs[d];x?x.texture=o[d].texture:(x=new i.Sprite(o[d].texture),this._glyphs.push(x)),x.position.x=(o[d].position.x+v[o[d].line])*u,x.position.y=o[d].position.y*u,x.scale.x=x.scale.y=u,x.tint=y,x.parent||this.addChild(x)}for(d=m;d<this._glyphs.length;++d)this.removeChild(this._glyphs[d]);this.textWidth=a*u,this.textHeight=(e.y+t.lineHeight)*u},r.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),this.containerUpdateTransform()},r.fonts={}},{"../core":20}],117:[function(t,e){function r(t,e,r){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=r||i.RESOLUTION,this._text=null,this._style=null,i.Sprite.call(this,i.Texture.fromCanvas(this.canvas)),this.text=t,this.style=e}var i=t("../core");r.prototype=Object.create(i.Sprite.prototype),r.prototype.constructor=r,e.exports=r,r.fontPropertiesCache={},r.fontPropertiesCanvas=document.createElement("canvas"),r.fontPropertiesContext=r.fontPropertiesCanvas.getContext("2d"),Object.defineProperties(r.prototype,{width:{get:function(){return this.dirty&&this.updateText(),this.scale.x*this._texture._frame.width},set:function(t){this.scale.x=t/this._texture._frame.width,this._width=t}},height:{get:function(){return this.dirty&&this.updateText(),this.scale.y*this._texture._frame.height},set:function(t){this.scale.y=t/this._texture._frame.height,this._height=t}},style:{get:function(){return this._style},set:function(t){t=t||{},t.font=t.font||"bold 20pt Arial",t.fill=t.fill||"black",t.align=t.align||"left",t.stroke=t.stroke||"black",t.strokeThickness=t.strokeThickness||0,t.wordWrap=t.wordWrap||!1,t.wordWrapWidth=t.wordWrapWidth||100,t.dropShadow=t.dropShadow||!1,t.dropShadowColor=t.dropShadowColor||"#000000",t.dropShadowAngle=t.dropShadowAngle||Math.PI/6,t.dropShadowDistance=t.dropShadowDistance||5,this._style=t,this.dirty=!0}},text:{get:function(){return this._text},set:function(t){t=t.toString()||" ",this._text!==t&&(this._text=t,this.dirty=!0)}}}),r.prototype.updateText=function(){var t=this._style;this.context.font=t.font;for(var e=t.wordWrap?this.wordWrap(this._text):this._text,r=e.split(/(?:\r\n|\r|\n)/),i=new Array(r.length),n=0,o=this.determineFontProperties(t.font),s=0;s<r.length;s++){var a=this.context.measureText(r[s]).width;i[s]=a,n=Math.max(n,a)}var h=n+t.strokeThickness;t.dropShadow&&(h+=t.dropShadowDistance),this.canvas.width=(h+this.context.lineWidth)*this.resolution;var l=o.fontSize+t.strokeThickness,u=l*r.length;t.dropShadow&&(u+=t.dropShadowDistance),this.canvas.height=u*this.resolution,this.context.scale(this.resolution,this.resolution),navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=t.font,this.context.strokeStyle=t.stroke,this.context.lineWidth=t.strokeThickness,this.context.textBaseline="alphabetic";var c,d;if(t.dropShadow){this.context.fillStyle=t.dropShadowColor;var p=Math.cos(t.dropShadowAngle)*t.dropShadowDistance,f=Math.sin(t.dropShadowAngle)*t.dropShadowDistance;for(s=0;s<r.length;s++)c=t.strokeThickness/2,d=t.strokeThickness/2+s*l+o.ascent,"right"===t.align?c+=n-i[s]:"center"===t.align&&(c+=(n-i[s])/2),t.fill&&this.context.fillText(r[s],c+p,d+f)}for(this.context.fillStyle=t.fill,s=0;s<r.length;s++)c=t.strokeThickness/2,d=t.strokeThickness/2+s*l+o.ascent,"right"===t.align?c+=n-i[s]:"center"===t.align&&(c+=(n-i[s])/2),t.stroke&&t.strokeThickness&&this.context.strokeText(r[s],c,d),t.fill&&this.context.fillText(r[s],c,d);this.updateTexture()},r.prototype.updateTexture=function(){this._texture.baseTexture.hasLoaded=!0,this._texture.baseTexture.resolution=this.resolution,this._texture.baseTexture.width=this.canvas.width/this.resolution,this._texture.baseTexture.height=this.canvas.height/this.resolution,this._texture.crop.width=this._texture._frame.width=this.canvas.width/this.resolution,this._texture.crop.height=this._texture._frame.height=this.canvas.height/this.resolution,this._width=this.canvas.width/this.resolution,this._height=this.canvas.height/this.resolution,this._texture.update(),this.dirty=!1},r.prototype.renderWebGL=function(t){this.dirty&&(this.resolution=t.resolution,this.updateText()),i.Sprite.prototype.renderWebGL.call(this,t)},r.prototype.renderCanvas=function(t){this.dirty&&(this.resolution=t.resolution,this.updateText()),i.Sprite.prototype.renderCanvas.call(this,t)},r.prototype.determineFontProperties=function(t){var e=r.fontPropertiesCache[t];if(!e){e={};var i=r.fontPropertiesCanvas,n=r.fontPropertiesContext;n.font=t;var o=Math.ceil(n.measureText("|Mq").width),s=Math.ceil(n.measureText("M").width),a=2*s;s=1.4*s|0,i.width=o,i.height=a,n.fillStyle="#f00",n.fillRect(0,0,o,a),n.font=t,n.textBaseline="alphabetic",n.fillStyle="#000",n.fillText("|M�q",0,s);var h,l,u=n.getImageData(0,0,o,a).data,c=u.length,d=4*o,p=0,f=!1;for(h=0;s>h;h++){for(l=0;d>l;l+=4)if(255!==u[p+l]){f=!0;break}if(f)break;p+=d}for(e.ascent=s-h,p=c-d,f=!1,h=a;h>s;h--){for(l=0;d>l;l+=4)if(255!==u[p+l]){f=!0;break}if(f)break;p-=d}e.descent=h-s,e.descent+=6,e.fontSize=e.ascent+e.descent,r.fontPropertiesCache[t]=e}return e},r.prototype.wordWrap=function(t){for(var e="",r=t.split("\n"),i=this._style.wordWrapWidth,n=0;n<r.length;n++){for(var o=i,s=r[n].split(" "),a=0;a<s.length;a++){var h=this.context.measureText(s[a]).width,l=h+this.context.measureText(" ").width;0===a||l>o?(a>0&&(e+="\n"),e+=s[a],o=i-h):(o-=l,e+=" "+s[a])}n<r.length-1&&(e+="\n")}return e},r.prototype.getBounds=function(t){return this.dirty&&this.updateText(),i.Sprite.prototype.getBounds.call(this,t)},r.prototype.destroy=function(t){this.context=null,this.canvas=null,this._texture.destroy(void 0===t?!0:t)}},{"../core":20}],118:[function(t,e){e.exports={Text:t("./Text"),BitmapText:t("./BitmapText")}},{"./BitmapText":116,"./Text":117}]},{},[1])(1)});
/*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false */
/*global define:false, require:false, exports:false, module:false, signals:false */

/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 */

(function(global){

    // SignalBinding -------------------------------------------------
    //================================================================

    /**
     * Object that represents a binding between a Signal and a listener function.
     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
     * @author Miller Medeiros
     * @constructor
     * @internal
     * @name SignalBinding
     * @param {Signal} signal Reference to Signal object that listener is currently bound to.
     * @param {Function} listener Handler function bound to the signal.
     * @param {boolean} isOnce If binding should be executed just once.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. (default = 0).
     */
    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {

        /**
         * Handler function bound to the signal.
         * @type Function
         * @private
         */
        this._listener = listener;

        /**
         * If binding should be executed just once.
         * @type boolean
         * @private
         */
        this._isOnce = isOnce;

        /**
         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @memberOf SignalBinding.prototype
         * @name context
         * @type Object|undefined|null
         */
        this.context = listenerContext;

        /**
         * Reference to Signal object that listener is currently bound to.
         * @type Signal
         * @private
         */
        this._signal = signal;

        /**
         * Listener priority
         * @type Number
         * @private
         */
        this._priority = priority || 0;
    }

    SignalBinding.prototype = {

        /**
         * If binding is active and should be executed.
         * @type boolean
         */
        active : true,

        /**
         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
         * @type Array|null
         */
        params : null,

        /**
         * Call listener passing arbitrary parameters.
         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
         * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
         * @return {*} Value returned by the listener.
         */
        execute : function (paramsArr) {
            var handlerReturn, params;
            if (this.active && !!this._listener) {
                params = this.params? this.params.concat(paramsArr) : paramsArr;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        },

        /**
         * Detach binding from signal.
         * - alias to: mySignal.remove(myBinding.getListener());
         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
         */
        detach : function () {
            return this.isBound()? this._signal.remove(this._listener, this.context) : null;
        },

        /**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */
        isBound : function () {
            return (!!this._signal && !!this._listener);
        },

        /**
         * @return {boolean} If SignalBinding will only be executed once.
         */
        isOnce : function () {
            return this._isOnce;
        },

        /**
         * @return {Function} Handler function bound to the signal.
         */
        getListener : function () {
            return this._listener;
        },

        /**
         * @return {Signal} Signal that listener is currently bound to.
         */
        getSignal : function () {
            return this._signal;
        },

        /**
         * Delete instance properties
         * @private
         */
        _destroy : function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[SignalBinding isOnce:' + this._isOnce +', isBound:'+ this.isBound() +', active:' + this.active + ']';
        }

    };


/*global SignalBinding:false*/

    // Signal --------------------------------------------------------
    //================================================================

    function validateListener(listener, fnName) {
        if (typeof listener !== 'function') {
            throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName) );
        }
    }

    /**
     * Custom event broadcaster
     * <br />- inspired by Robert Penner's AS3 Signals.
     * @name Signal
     * @author Miller Medeiros
     * @constructor
     */
    function Signal() {
        /**
         * @type Array.<SignalBinding>
         * @private
         */
        this._bindings = [];
        this._prevParams = null;

        // enforce dispatch to aways work on same context (#47)
        var self = this;
        this.dispatch = function(){
            Signal.prototype.dispatch.apply(self, arguments);
        };
    }

    Signal.prototype = {

        /**
         * Signals Version Number
         * @type String
         * @const
         */
        VERSION : '1.0.0',

        /**
         * If Signal should keep record of previously dispatched parameters and
         * automatically execute listener during `add()`/`addOnce()` if Signal was
         * already dispatched before.
         * @type boolean
         */
        memorize : false,

        /**
         * @type boolean
         * @private
         */
        _shouldPropagate : true,

        /**
         * If Signal is active and should broadcast events.
         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
         * @type boolean
         */
        active : true,

        /**
         * @param {Function} listener
         * @param {boolean} isOnce
         * @param {Object} [listenerContext]
         * @param {Number} [priority]
         * @return {SignalBinding}
         * @private
         */
        _registerListener : function (listener, isOnce, listenerContext, priority) {

            var prevIndex = this._indexOfListener(listener, listenerContext),
                binding;

            if (prevIndex !== -1) {
                binding = this._bindings[prevIndex];
                if (binding.isOnce() !== isOnce) {
                    throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
                }
            } else {
                binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
                this._addBinding(binding);
            }

            if(this.memorize && this._prevParams){
                binding.execute(this._prevParams);
            }

            return binding;
        },

        /**
         * @param {SignalBinding} binding
         * @private
         */
        _addBinding : function (binding) {
            //simplified insertion sort
            var n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
            this._bindings.splice(n + 1, 0, binding);
        },

        /**
         * @param {Function} listener
         * @return {number}
         * @private
         */
        _indexOfListener : function (listener, context) {
            var n = this._bindings.length,
                cur;
            while (n--) {
                cur = this._bindings[n];
                if (cur._listener === listener && cur.context === context) {
                    return n;
                }
            }
            return -1;
        },

        /**
         * Check if listener was attached to Signal.
         * @param {Function} listener
         * @param {Object} [context]
         * @return {boolean} if Signal has the specified listener.
         */
        has : function (listener, context) {
            return this._indexOfListener(listener, context) !== -1;
        },

        /**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        add : function (listener, listenerContext, priority) {
            validateListener(listener, 'add');
            return this._registerListener(listener, false, listenerContext, priority);
        },

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        addOnce : function (listener, listenerContext, priority) {
            validateListener(listener, 'addOnce');
            return this._registerListener(listener, true, listenerContext, priority);
        },

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */
        remove : function (listener, context) {
            validateListener(listener, 'remove');

            var i = this._indexOfListener(listener, context);
            if (i !== -1) {
                this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
                this._bindings.splice(i, 1);
            }
            return listener;
        },

        /**
         * Remove all listeners from the Signal.
         */
        removeAll : function () {
            var n = this._bindings.length;
            while (n--) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        },

        /**
         * @return {number} Number of listeners attached to the Signal.
         */
        getNumListeners : function () {
            return this._bindings.length;
        },

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
         * @see Signal.prototype.disable
         */
        halt : function () {
            this._shouldPropagate = false;
        },

        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         * @param {...*} [params] Parameters that should be passed to each handler.
         */
        dispatch : function (params) {
            if (! this.active) {
                return;
            }

            var paramsArr = Array.prototype.slice.call(arguments),
                n = this._bindings.length,
                bindings;

            if (this.memorize) {
                this._prevParams = paramsArr;
            }

            if (! n) {
                //should come after memorize
                return;
            }

            bindings = this._bindings.slice(); //clone array in case add/remove items during dispatch
            this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.

            //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
            //reverse loop since listeners with higher priority will be added at the end of the list
            do { n--; } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
        },

        /**
         * Forget memorized arguments.
         * @see Signal.memorize
         */
        forget : function(){
            this._prevParams = null;
        },

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
         */
        dispose : function () {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
        }

    };


    // Namespace -----------------------------------------------------
    //================================================================

    /**
     * Signals namespace
     * @namespace
     * @name signals
     */
    var signals = Signal;

    /**
     * Custom event broadcaster
     * @see Signal
     */
    // alias for backwards compatibility (see #gh-44)
    signals.Signal = Signal;



    //exports to multiple environments
    if(typeof define === 'function' && define.amd){ //AMD
        define('signals',[],function () { return signals; });
    } else if (typeof module !== 'undefined' && module.exports){ //node
        module.exports = signals;
    } else { //browser
        //use string because of Google closure compiler ADVANCED_MODE
        /*jslint sub:true */
        global['signals'] = signals;
    }

}(this));

define('com/fido/loader/Cache',['require','exports','module'],function (require, exports, module) 
{
    var Cache = function()
    {
        this._json = {};
        this._text = {};

    }


    // add...
    

    Cache.prototype.addJson = function(json, id) 
    {
        // body...
        this._json[id] = json;
    };

    Cache.prototype.addText = function(text, id) 
    {
        this._text[id] = text;
    };


    // get...
    

    Cache.prototype.getJson = function(id) 
    {
        if (this._json[id])
        {
            return this._json[id];
        }
        else
        {
            console.warn('Fido.Cache.getJson: "' + id + '" not found in Cache');
        }
    };

    Cache.prototype.getText = function(id) 
    {
        if (this._text[id])
        {
            return this._text[id];
        }
        else
        {
            console.warn('Fido.Cache.getText: "' + id + '" not found in Cache');
        }
    };

    module.exports = new Cache;

});

define('com/fido/loader/Loader',['require','exports','module','PIXI','signals','com/fido/loader/Cache'],function (require, exports, module) 
{
    var PIXI    = require("PIXI");
    var Signal  = require('signals');
    var Cache   = require('com/fido/loader/Cache');
  
    var Loader = function()
    {  
        this.crossdomain = false;

        if(window.XDomainRequest && this.crossdomain)
        {
            this.ajaxRequest = new window.XDomainRequest();
            // XDomainRequest has a few querks. Occasionally it will abort requests
            // A way to avoid this is to make sure ALL callbacks are set even if not used
            // More info here: http://stackoverflow.com/questions/15786966/xdomainrequest-aborts-post-on-ie-9
            this.ajaxRequest.timeout = 3000;

            this.ajaxRequest.onerror = function(){};

            this.ajaxRequest.ontimeout = function(){};

            this.ajaxRequest.onprogress = function(){};

        }
        else if (window.XMLHttpRequest)
        {
            this.ajaxRequest = new window.XMLHttpRequest();
        }

        this.ajaxRequest.onload = this._onFileLoaded.bind(this)
        this.ajaxRequest.onreadystatechange = function(e){}
        
        this.fileCount = 0;
        this.filesToLoad = [];

        this.fontsToLoad = [];
        this.pixiAssetsToLoad = [];
        this.soundsToLoad = [];
        this.customToLoad = [];

        this.onComplete = new Signal();
        this.onProgress = new Signal();

        
        
    }

    Loader.prototype.addFonts = function(fonts)
    {   
        this.fontsToLoad = this.fontsToLoad.concat(fonts);
    }

    Loader.prototype.addText = function(url, id)
    {   
        var fileData = {url:url, id:id, type:Loader.TEXT};

        this.filesToLoad.push(fileData);
    }

    Loader.prototype.addJson = function(url, id)
    {   
        var fileData = {url:url, id:id, type:Loader.JSON};
        
        this.filesToLoad.push(fileData);
    }

    Loader.prototype.addPixiAssets = function(assets)
    {   
        this.pixiAssetsToLoad = this.pixiAssetsToLoad.concat(assets);
    }

    Loader.prototype.addCSS = function(url)
    {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);

        // var tester = document.createElement("div");
        // tester.setAttribute('id', 'test-chunkFiveRoman');
        // tester.innerHTML = 'TEST';
        // document.body.appendChild(tester);
    }
    
    Loader.prototype.addCustom = function(customObject)
    {   
        var fileData = {object:customObject, type:Loader.CUSTOM};

        this.filesToLoad.push(fileData);
    }

    Loader.prototype.load = function()
    {  
        this._loadFonts();
    }


    /*
    
        PRIVATE...

     */
    Loader.prototype._loadFiles = function()
    {
        this.fileCount = 0;
        
        if(this.filesToLoad.length)
        {
            this._loadNextFile();
        }
        else
        {
            this._loadPixiAssets();
        }
    }
    
    Loader.prototype._loadNextFile = function()
    {
        var fileData = this.filesToLoad[this.fileCount];
     
        if(fileData.type === Loader.CUSTOM)
        {
            fileData.object.onLoaded.addOnce(this._onFileLoaded, this);
            fileData.object.load();
        }
        else
        {
            this.ajaxRequest.open('GET',fileData.url,true);
            this.ajaxRequest.send();
        }
    }

    Loader.prototype._onFileLoaded = function()
    {
        var fileData = this.filesToLoad[this.fileCount];

        if(fileData.type === Loader.CUSTOM)
        {
            // done!
        }
        else
        {
            if(this.ajaxRequest.status !== 200)
            {
                console.warn("Fido.Loader: " + fileData.url + " not found")
                
            }
            else
            {
                switch(fileData.type)
                {
                    case Loader.TEXT:
                        
                        var text = this.ajaxRequest.responseText;
                        Cache.addText( text, fileData.id );
                        
                        break;

                    case Loader.JSON:

                   //     console.log(this.ajaxRequest.responseText);
                        var jsonObject = JSON.parse( this.ajaxRequest.responseText );
                        Cache.addJson( jsonObject, fileData.id );
                    
                        break;
                }
            }
        }

        this.fileCount++;
        this._onProgress();

        if(this.fileCount === this.filesToLoad.length)
        {
            // complete!
            this._loadPixiAssets();
        }
        else
        {
            this._loadNextFile();
        }

    }

    Loader.prototype._loadPixiAssets = function()
    {
        if(this.pixiAssetsToLoad.length === 0)
        {
            this._onComplete();
            return;
        }
        
        this.pixiAssetLoader = new PIXI.loaders.Loader();

        this.pixiAssetLoader.addList(this.pixiAssetsToLoad)

        //this.pixiAssetsToLoad, true);
     //   this.pixiAssetLoader.onComplete = this._onComplete.bind(this);
   //     this.pixiAssetLoader.onProgress = this._onProgress.bind(this);
        this.pixiAssetLoader.load(function(){
             this._onProgress();
            this._onComplete();

        }.bind(this)); 
    }

    Loader.prototype._loadFonts = function()
    {   
        if(this.fontsToLoad.length === 0)
        {
            this._loadFiles();
            return;
        }

        WebFontConfig = 
        {
            google : 
            {
                families : this.fontsToLoad
            },
            active: function() 
            {
                this._loadFiles();
            }.bind(this)
        };

        (function() 
        {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    }

    Loader.prototype._onComplete = function()
    {   
        this.onComplete.dispatch();
    }

    Loader.prototype._onProgress = function()
    {
        //console.log("file : " + this.fileCount )
        var total =  this.filesToLoad.length + this.pixiAssetsToLoad.length;
        var loaded = this.fileCount;

        if(this.pixiAssetLoader)
        {
            loaded += this.pixiAssetsToLoad.length - this.pixiAssetLoader.loadCount
        }
        //(this.pixiAssetsToLoad.length - this.pixiAssetLoader.loadCount) + this.fileCount ;
      
//        var pixiPercent = (this.pixiAssetLoader.assetURLs.length - this.pixiAssetLoader.loadCount) / this.pixiAssetLoader.assetURLs.length;

        this.onProgress.dispatch(1);
    }

    // some constants..
    Loader.TEXT = 0;
    Loader.JSON = 1;
    Loader.CUSTOM = 2;

    module.exports = Loader;

});

define('com/fido/app/transitions/AlphaTransition',['require','exports','module'],function (require, exports, module) {

AlphaTransition = function()
{
    
}

AlphaTransition.constructor = AlphaTransition;

AlphaTransition.prototype.begin = function(screenManager, currentScreen, nextScreen)
{
    this.screenManager = screenManager;

    this.currentScreen = currentScreen;
    this.nextScreen = nextScreen;

    if(this.currentScreen)
    {
        if(this.currentScreen.onHide)this.currentScreen.onHide();
        TweenLite.to(this.currentScreen, 0.4, {alpha:0, onComplete:this.onFadeout.bind(this)})
    }
    else
    {
        this.onFadeout();
    }
}

AlphaTransition.prototype.onFadeout = function()
{
    if(this.currentScreen)
    {
        if(this.currentScreen.onHidden)this.currentScreen.onHidden();
        this.screenManager.container.removeChild(this.currentScreen);
        this.currentScreen.alpha = 1;
    }
    
    this.nextScreen.alpha = 0;

    if(this.nextScreen.onShow)this.nextScreen.onShow();
    if(this.nextScreen.resize)this.nextScreen.resize(this.screenManager.w, this.screenManager.h);

    TweenLite.to(this.nextScreen, 0.4, {alpha:1, onComplete:this.onFadein.bind(this)});

    this.screenManager.container.addChild(this.nextScreen);
}

AlphaTransition.prototype.onFadein = function()
{   
    if(this.nextScreen.onShown)this.nextScreen.onShown();
    this.screenManager.onTransitionComplete();
}

AlphaTransition.prototype.resize = function(w, h)
{
    this.w = w;
    this.h = h;
}

module.exports = AlphaTransition;


});

define('com/fido/app/ScreenManager',['require','exports','module','PIXI','./transitions/AlphaTransition'],function (require, exports, module) 
{
    var PIXI            = require("PIXI");
    var AlphaTransition = require("./transitions/AlphaTransition");

    /**
     * ScreenManager for main views
     * @param {PIXI.DisplayObjectContainer} container
     * @param {Number} width
     * @param {Number} height
     */
    var ScreenManager = function(container, width, height)
    {
        this.container = container || new PIXI.DisplayObjectContainer();
        
        this.screens = {};
        this.currentScreen;
        this.fading = false;
        
        this.w = width || 400;
        this.h = height || 400;
        
        this.history = [];

        this.defaultTransition = new AlphaTransition();
        
        this.transition = this.defaultTransition;
        this.active = false;
    }

    ScreenManager.constructor = ScreenManager;

    /**
     * Jump to a screen with the provided ID
     * @param  {String} id
     * @param  {Boolean} instant
     * @return {null}
     */
    ScreenManager.prototype.gotoScreenByID = function(id, instant)
    {
        var screen = this.screens[id];

        if( !screen )
        {
            throw new Error( 'screen not found with id : ', id );
        }
        else
        {
            this.gotoScreen( screen, instant);
        }
    };

    /**
     * Add a screen to the manager cache
     * @param  {Object} id
     * @param  {String} instant
     * @return {null}
     */
    ScreenManager.prototype.addScreen = function(screen, id)
    {
        this.screens[id] = screen;
        screen._screenID = id
        screen.screenManager = this;
    }

    ScreenManager.prototype.goBack = function()
    {
        this.history.pop();
        var prev = this.history.pop();

        if(prev)
        {
            this.gotoScreen(prev);   
        }    
    }


    ScreenManager.prototype.getScreenId = function( screen )
    {
        for( var key in this.screens )
        {
            if( this.screens[ key] === screen )
            {
                return key;
            }
        }

        return null;
    }

    ScreenManager.prototype.gotoScreen = function(screen, instant)
    {
        if(this.currentScreen === screen) return;
        
        this.history.push(screen);
        this.nextScreen = screen;
        
        if(this.active) return;
        this.active = true;

        this.transition = screen.transition || this.defaultTransition;

        if(this.transition.onResize) this.transition.onResize(this.w, this.h);
        var current = this.currentScreen;

        if(this.nextScreen)if(this.nextScreen.resize)this.nextScreen.resize(this.w, this.h);

        this.currentScreen = screen;
        this.transition.begin(this, current, this.nextScreen);

    }

    ScreenManager.prototype.onTransitionComplete = function()
    {
        this.active = false;
        if(this.currentScreen != this.nextScreen)
        {
            this.gotoScreen(this.nextScreen);
        }
    }

    ScreenManager.prototype.resize = function(w, h)
    {
        this.w = w;
        this.h = h;

        if(this.transition.onResize)this.transition.onResize(w, h);
        if(this.currentScreen)if(this.currentScreen.resize)this.currentScreen.resize(w, h);
    }

    module.exports = ScreenManager;

});
define('com/fido/system/Ticker',['require','exports','module','signals'],function (require, exports, module) {


var Signal = require('signals');

var Ticker = function()
{
    this.onUpdate = new Signal();
    
    this.updateBind = this.update.bind(this);

    this.active = false;

    // 

    this.deltaTime = 1;
    this.timeElapsed = 0;
    this.lastTime = 0;  

    this.speed = 1;
}

Ticker.prototype.start = function()
{
    if(this.active)return;

    this.active = true;
    requestAnimationFrame(this.updateBind);
}


Ticker.prototype.stop = function()
{
    if(!this.active)return;
    this.active = false;
}

Ticker.prototype.update = function()
{
    if(this.active)
    {
        requestAnimationFrame(this.updateBind);

        var currentTime =  new Date().getTime();
        var timeElapsed = currentTime - this.lastTime;
    
        // cap the time!
        if(timeElapsed > 100)timeElapsed = 100;
        this.deltaTime = (timeElapsed * 0.06);

        this.deltaTime *= this.speed;// * 3;
        
       // console.log(this.deltaTime)
        // 60 ---> 1
        // 30 ---> 2

        this.onUpdate.dispatch(this.deltaTime);

        this.lastTime = currentTime;
    }
    
}

Ticker.prototype.add = function(listener, scope)
{
    this.onUpdate.add(listener, scope);
}

Ticker.prototype.remove = function(listener, scope)
{
    this.onUpdate.remove(listener, scope);
}

Ticker.instance = new Ticker();

module.exports = Ticker;

});

define('com/fido/system/Device',['require','exports','module'],function (require, exports, module) {var Fido = Fido || {};

Device = function()
{
    this.arora = false;
    this.chrome = false;
    this.epiphany = false;
    this.firefox = false;
    this.mobileSafari = false;
    this.ie = false;
    this.ieVersion = 0;
    this.midori = false;
    this.opera = false;
    this.safari = false;
    this.webApp = false;
    this.cocoonJS = false;
    this.android = false;
    this.chromeOS = false;
    this.iOS = false;
    this.linux = false;
    this.macOS = false;
    this.windows = false;
    this.desktop = false;
    this.pixelRatio = 0;
    this.iPhone = false;
    this.iPhone4 = false;
    this.iPad = false;
    this.blob = false;
    this.canvas = false;
    this.localStorage = false;
    this.file = false;
    this.fileSystem = false;
    this.webGL = false;
    this.worker = false;
    this.audioData = false;
    this.webAudio = false;
    this.ogg = false;
    this.opus = false;
    this.mp3 = false;
    this.wav = false;
    this.m4a = false;
    this.webm = false;
    
    var ua = navigator.userAgent;
    
    this._checkBrowser(ua);
    this._checkOS(ua);
    this._checkDevice(ua);
    this._checkAudio();
    this._checkFeatures();
    this._checkIsMobile();
};

Device.prototype._checkBrowser = function(ua)
{
    if (/Arora/.test(ua)) 
    {
        this.arora = true;
    } 
    else if (/Chrome/.test(ua)) 
    {
        this.chrome = true;
    } 
    else if (/Epiphany/.test(ua)) 
    {
        this.epiphany = true;
    } 
    else if (/Firefox/.test(ua)) 
    {
        this.firefox = true;
    } 
    else if (/Mobile Safari/.test(ua)) 
    {
        this.mobileSafari = true;
    } 
    else if (/MSIE (\d+\.\d+);/.test(ua) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./)) 
    {
        this.ie = true;
        this.ieVersion = parseInt(RegExp.$1, 10);
    } 
    else if (/Midori/.test(ua)) 
    {
        this.midori = true;
    } 
    else if (/Opera/.test(ua)) 
    {
        this.opera = true;
    } 
    else if (/Safari/.test(ua)) 
    {
        this.safari = true;
    }

    // Native Application
    if (navigator['standalone']) 
    {
        this.webApp = true;
    }

    // CocoonJS Application
    if (navigator['isCocoonJS']) 
    {
        this.cocoonJS = true;
    }
}

Device.prototype._checkOS = function(ua) 
{
    if (/Android/.test(ua)) 
    {
        this.android = true;
    } 
    else if (/CrOS/.test(ua)) 
    {
        this.chromeOS = true;
    } 
    else if (/iP[ao]d|iPhone/i.test(ua)) 
    {
        this.iOS = true;

        this.iOS_version = parseFloat(
            ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
                .replace('undefined', '3_2').replace('_', '.').replace('_', '')
        ) || false;
    } 
    else if (/Linux/.test(ua)) 
    {
        this.linux = true;
    } 
    else if (/Mac OS/.test(ua)) 
    {
        this.macOS = true;
    } 
    else if (/Windows/.test(ua)) 
    {
        this.windows = true;
    }

    if (this.windows || this.macOS || this.linux) 
    {
        this.desktop = true;
    }
}

Device.prototype._checkDevice = function()
{
    this.pixelRatio = window['devicePixelRatio'] || 1;
    this.iPhone = navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;
    this.iPhone4 = (this.pixelRatio === 2 && this.iPhone);
    this.iPad = navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
}

Device.prototype._checkFeatures = function()
{
    if (typeof window['Blob'] !== 'undefined') this.blob = true;

    this.canvas = !!window['CanvasRenderingContext2D'];

    try
    {
        this.localStorage = !!localStorage.getItem;
    }
    catch (error)
    {
        this.localStorage = false;
    }

    this.file = !!window['File'] && !!window['FileReader'] && !!window['FileList'] && !!window['Blob'];
    this.fileSystem = !!window['requestFileSystem'];
    this.webGL = ( function () { try {
                                    var canvas = document.createElement( 'canvas' );
                                    return !! window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) );
                                } catch( e ) {
                                    return false;
                                }
                            } )();


    if(this.android ||  this.ie)this.webGL = false;
    
    this.worker = !!window['Worker'];

    if ('ontouchstart' in document.documentElement || window.navigator.msPointerEnabled)
    {
        this.touch = true;
    }
}

Device.prototype._checkAudio = function()
{
    this.audioData = !!(window['Audio']);
    this.webaudio = !!(window['webkitAudioContext'] || window['AudioContext']);

    var audioElement = document.createElement('audio');
    var result = false;
    try
    {
        if (result = !!audioElement.canPlayType)
        {
            if (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''))
            {
                this.ogg = true;
            }

            if (audioElement.canPlayType('audio/mpeg;').replace(/^no$/, ''))
            {
                this.mp3 = true;
            }

            // Mimetypes accepted:
            //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
            //   bit.ly/iphoneoscodecs
            if (audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''))
            {
                this.wav = true;
            }

            if (audioElement.canPlayType('audio/x-m4a;') || audioElement.canPlayType('audio/aac;').replace(/^no$/, ''))
            {
                this.m4a = true;
            }
        }
    } 
    catch (e) { }
}

Device.prototype._checkIsMobile = function()
{
    var check = false;

    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    
    this.isMobile = check; 
}

Device.prototype.getInfo = function()
{
    var output = "DEVICE OUTPUT\n\n";
    
    output += "---\n";
    output += "Browser Info :: \n";
    output += "Arora : " + this.arora + "\n";
    output += "Chrome : " + this.chrome + "\n";
    output += "Epiphany : " + this.epiphany + "\n";
    output += "Firefox : " + this.firefox + "\n";
    output += "Mobile Safari : " + this.mobileSafari + "\n";
    output += "IE : " + this.ie;
    
    if(this.ie)
    {
        output += " (Version " + this.ieVersion + ")\n";
    }
    else
    {
        output += "\n";
    }
    
    output += "Midori : " + this.midori + "\n";
    output += "Opera : " + this.opera + "\n";
    output += "Safari : " + this.safari + "\n";
    output += "Web App : " + this.webApp + "\n";
    output += "CocoonJS : " + this.cocoonJS + "\n";
    output += "Android : " + this.android + "\n";
    output += "---\n";
    output += "Operating System :: \n";
    output += "Chrome OS : " + this.chromeOS + "\n";
    output += "iOS : " + this.iOS + "\n";
    output += "Linux : " + this.linux + "\n";
    output += "Mac OS : " + this.macOS + "\n";
    output += "Windows : " + this.windows + "\n";
    output += "Desktop : " + this.desktop + "\n";
    output += "---\n";
    output += "Device Type : \n";
    output += "Pixel Ratio : " + this.pixelRatio + "\n";
    output += "iPhone : " + this.iPhone + "\n";
    output += "iPhone 4 : " + this.iPhone4 + "\n";
    output += "iPad : " + this.iPad + "\n";
    output += "---\n";
    output += "Features :: \n";
    output += "Blob : " + this.blob + "\n";
    output += "Canvas : " + this.canvas + "\n";
    output += "LocalStorage : " + this.localStorage + "\n";
    output += "File : " + this.file + "\n";
    output += "File System : " + this.fileSystem + "\n";
    output += "WebGL : " + this.webGL + "\n";
    output += "Workers : " + this.worker + "\n";
    output += "---\n";
    output += "Audio :: \n";
    output += "AudioData : " + this.audioData + "\n";
    output += "WebAudio : " + this.webAudio + "\n";
    output += "Supports .ogg : " + this.ogg + "\n";
    output += "Supports Opus : " + this.opus + "\n";
    output += "Supports .mp3 : " + this.mp3 + "\n";
    output += "Supports .wav : " + this.wav + "\n";
    output += "Supports .m4a : " + this.m4a + "\n";
    output += "Supports .webm : " + this.webm;
    
    return output;
}

Device.instance = new Device();

module.exports = Device;
});

define('com/fido/utils/FrameWait',['require','exports','module'],function (require, exports, module) {


var FrameWait = function()
{
    this.updateBind = this.update.bind(this);
    this.waits = [];
}

FrameWait.prototype.wait = function(callback, count)
{
    var wait = {callback:callback, count:count || 2};
    this.waits.push(wait);

    requestAnimationFrame(this.updateBind);
}

FrameWait.prototype.update = function()
{

    for (var i = this.waits.length - 1; i >= 0; i--) 
    {
        var wait = this.waits[i];

        wait.count--;
        if(wait.count <= 0)
        {
            wait.callback();
            this.waits.splice(i, 1);
        }
    };

    if(this.waits.length > 0)requestAnimationFrame(this.updateBind);
}


module.exports = new FrameWait();

});

define('com/fido/app/LoaderScreen',['require','exports','module','PIXI','com/fido/system/Ticker','com/fido/utils/FrameWait','signals'],function (require, exports, module) 
{
    var PIXI            = require("PIXI");
    var Ticker          = require('com/fido/system/Ticker')
    var Wait            = require("com/fido/utils/FrameWait");
    var Signal          = require("signals");

    /**
     * Generic loader screen
     * @param {Object} app
     */
    var LoaderScreen = function(app)
    {
        PIXI.DisplayObjectContainer.call( this );
        
        this.app = app;
        
        this.easeLoad = 0;
        this.targetLoad = 0;
        
        this.onReady = new Signal();
        this.onComplete = new Signal();

        this.bar = new PIXI.Sprite();
        
        this.initLoader();
    }

    LoaderScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

    /**
     * Initialise the loader
     * @return {null}
     */
    LoaderScreen.prototype.initLoader = function()
    {
        Ticker.instance.add(this.update, this);

        this.resize(this.w, this.h);

        // the pause means that we can avoid an pops in the tweens..
        Wait.wait(this.showLoader.bind(this));

        return;
    }

    /**
     * Show the loader
     * @return {null}
     */
    LoaderScreen.prototype.showLoader = function()
    {
        this.onReady.dispatch();
    }

    /**
     * Update the loader
     * @return {null}
     */
    LoaderScreen.prototype.update = function()
    {
        this.easeLoad += (this.targetLoad - this.easeLoad) * 0.3;

        if(this.easeLoad > 0.99)
        {
            this.easeLoad = 1;
            Ticker.instance.remove(this.update, this);
            this.onComplete.dispatch();
        }
        
        this.bar.scale.x = this.easeLoad;
    }

    /**
     * Update the progress of the load
     * @param  {Number} percent
     * @return {null}
     */
    LoaderScreen.prototype.updateProgress = function(percent)
    {
        this.targetLoad = percent;
    }

    /**
     * When the loading screen gets hidden
     * @return {null}
     */
    LoaderScreen.prototype.onHide = function()
    {
        // make sure to remove tick on hide!
        Ticker.instance.remove(this.update, this);
    }

    /**
     * Resize the loader
     * @param  {Number} w
     * @param  {Number} h
     * @return {null}
     */
    LoaderScreen.prototype.resize = function(w, h)
    {
        this.w = w;
        this.h = h;

        if(this.barBg)
        {
            this.barBg.scale.x = w/100;
             this.barBg.y = h/2 - 100/2
        }
    }

    module.exports = LoaderScreen;

});
define('com/fido/app/OrientationManager',['require','exports','module','com/fido/system/Ticker'],function (require, exports, module) 
{
   	var Ticker = require('com/fido/system/Ticker')

    /**
     * Manage orientation modes and trigger events
     * @param {String} mode
     */
    var OrientationManager = function(mode)
    {
    	this.mode = mode;
        
        this.rotateScreen = new Image();
        this.rotateScreen.src = ASSET_URL + "img/rotate-device.png";
        this.rotateScreen.style.position = "absolute";
        this.rotateScreen.style.top = "0";
        this.rotateScreen.style.left = "0";
        this.rotateScreen.style.zIndex = 10000000;
        this.rotateScreen.style.display = "none";

        this.rotateScreen.width = 892/2; 
        this.rotateScreen.height = 576/2;

        document.body.appendChild(this.rotateScreen);

        this.supportsOrientationChange = "onorientationchange" in window;

        if(this.supportsOrientationChange)
        {
            window.addEventListener("orientationchange", this.checkOrientation.bind(this), false);
        }
    };

    OrientationManager.constructor = OrientationManager;

    /**
     * Check the current orientation and adjust accordingly
     * @return {null}
     */
    OrientationManager.prototype.checkOrientation = function()
    {
        //alert(window.orientation);
        //
        if(window.orientation === 90 || window.orientation === -90)
        {
            Ticker.instance.stop();
            this.rotateScreen.style.display = "block"
        }
        else
        {
           Ticker.instance.start();
           this.rotateScreen.style.display = "none"
        }
    }

    /**
     * Run a check on a specified width and height combo
     * @param  {Number} w
     * @param  {Number} h
     * @return {null}
     */
    OrientationManager.prototype.check = function(w, h)
    {
        var active = this.mode === 0 ? !(w < h) : w < h;

        var ratio1 = w / 892;
        var ratio2 = h / 576;

        var ratio = Math.max(ratio1, ratio2);

        this.rotateScreen.width = 892 * ratio;
        this.rotateScreen.height = 576 * ratio;

        this.rotateScreen.style.left = (w/2 - this.rotateScreen.width /2) + "px";
        this.rotateScreen.style.top = (h/2 - this.rotateScreen.height /2) + "px";
        
        if(this.supportsOrientationChange) return;

    	if(active)
    	{
    	    Ticker.instance.stop();
    	    this.rotateScreen.style.display = "block"
        }
        else
        {
           Ticker.instance.start();
           this.rotateScreen.style.display = "none"
        }
    }

    module.exports = OrientationManager;

});
define('com/fido/app/App',['require','exports','module','PIXI','com/fido/loader/Loader','com/fido/app/ScreenManager','com/fido/system/Ticker','com/fido/system/Device','com/fido/app/LoaderScreen','com/fido/app/OrientationManager','signals'],function (require, exports, module) 
{
    var PIXI                = require("PIXI");
    var Loader              = require('com/fido/loader/Loader')
    var ScreenManager       = require('com/fido/app/ScreenManager')
    var Ticker              = require('com/fido/system/Ticker')
    var Device              = require('com/fido/system/Device');
    var LoaderScreen        = require('com/fido/app/LoaderScreen');
    var OrientationManager  = require('com/fido/app/OrientationManager');
    var Signal              = require('signals');

    /**
     * Start the application!
     * @param {Object} options
     */
    var App = function(options)
    {
        options = options || App.defaultOptions;

        this.options = {};

        for (var i in App.defaultOptions) this.options[i] = options[i] || App.defaultOptions[i];

        this.setupPixi();

        // start the ticker and start rendereing!
        Ticker.instance.start();
        Ticker.instance.add(this.update, this);

        this.screenManager = new ScreenManager(null, 300, 300);
        this.loader        = new Loader();
        this.onReady       = new Signal();

        if(this.options.orientationMode !== App.orientationModes.BOTH)
        {
            this.orientationManager = new OrientationManager(this.options.orientationMode);
        }

        this.stage.addChild(this.screenManager.container);
    }

    /**
     * Get PIXI up and running
     * @return {[type]}
     */
    App.prototype.setupPixi = function()
    {
        var options = this.options;

        if(options.forceCanvas || (Device.instance.android && !Device.instance.chrome))
        {
            this.renderer = new PIXI.CanvasRenderer(options.width, options.height);
            this.renderer.clearBeforeRender = false;
        }
        else
        {
            this.renderer = PIXI.autoDetectRenderer(options.width, options.height, {backgroundColor:0x000001});   
        }

        window.WEBGL = PIXI.isWebGL = ( this.renderer instanceof PIXI.WebGLRenderer );

        this.view = this.renderer.view;
        this.stage = new PIXI.Stage(options.backgroundColor);

        this.view.style.position = "absolute";

        PIXI.stage = this.stage;
    }

    /**
     * Update our application
     * @return {null}
     */
    App.prototype.update = function()
    {
        this.renderer.render(this.stage);
        return;
    }

    /**
     * Default startup
     * @return {null}
     */
    App.prototype.startup = function( )
    {
        this.loaderScreen = new this.options.loaderScreen(this);
        this.loaderScreen.onReady.addOnce(this.onLoaderScreenReady, this);
        this.loaderScreen.onComplete.addOnce(this.onLoaderScreenComplete, this);

        this.screenManager.addScreen(this.loaderScreen, "loader");
        this.screenManager.gotoScreenByID("loader");  

        return;
    }

    /**
     * Event for when the loader-screen is ready
     * @return {null}
     */
    App.prototype.onLoaderScreenReady = function( )
    {
        // loader screen is ready! time to start loading assets..
        this.loader.onComplete.addOnce(this.onAssetsLoaded, this);
        this.loader.onProgress.add(this.onProgresss, this)
        this.loader.load();

        return;
    }


    App.prototype.onAssetsLoaded = function( )
    {
        // might want to add some extra steps here??
        //this.assetsLoaded = true;
    }

    /**
     * Update the progess of the loader
     * @param  {Float} percent
     * @return {null}
     */
    App.prototype.onProgresss = function(percent)
    {
        this.loaderScreen.updateProgress(percent);

        return;
    }

    /**
     * When everthing is finished...
     * @return {null}
     */
    App.prototype.onLoaderScreenComplete = function( )
    {
        this.onReady.dispatch(); 

        return;
    }

    /**
     * Resize the application
     * @param  {Number} w
     * @param  {Number} h
     * @return {null}
     */
    App.prototype.resize = function(w, h)
    {
        if(this.orientationManager)this.orientationManager.check(w, h);

        if(this.options.resizeMode === App.resizeModes.DEFUALT)
        {
            this.renderer.resize(w, h);
            this.view.style.width = "auto";
            this.view.style.height = "auto";
        }
        else if(this.this.options.resizeMode === App.resizeModes.CSS_RESIZE_PRESERVE_RATIO)
        {
            // TODO implement!
        }
        else if(this.options.resizeMode === App.resizeModes.CSS_RESIZE)
        {
            this.view.style.width = w + "px";
            this.view.style.height = h + "px";
        }

        return;
    }

    // 2 resize modes at the moment..
    // DEFAULT                      - resize the actual view so that there are more pixels in the renderer
    // CSS_RESIZE_PRESERVE_RATIO    - maintains the ratio but resizes using css
    // CSS_RESIZE                   - resizes the view to fit using css without preserving the ratio

    App.resizeModes = 
    {
        DEFUALT                     : 0,
        CSS_RESIZE_PRESERVE_RATIO   : 1,
        CSS_RESIZE                  : 2
    }

    App.orientationModes = 
    {
        LANDSCAPE   : 0,
        PORTRAIT    : 1,
        BOTH        : 2
    }

    App.defaultOptions = 
    {
        width           : 800,
        height          : 600,
        forceCanvas     : false,
        backgroundColor : 0xffffff,
        resizeMode      : App.resizeModes.DEFUALT,
        orientationMode : App.orientationModes.LANDSCAPE,
        loaderScreen    : LoaderScreen
    }

    module.exports = App;

});
define('com/fido/system/VisibilityChecker',['require','exports','module','signals'],function (require, exports, module) 
{
    var Signal              = require('signals');

    var VisibilityChecker = function()
    {

        if (typeof document.hidden !== "undefined") 
        { 
            // Opera 12.10 and Firefox 18 and later support 
            this.hidden = "hidden";
            this.visibilityChange = "visibilitychange";
        } 
        else if (typeof document.mozHidden !== "undefined") 
        {
            this.hidden = "mozHidden";
            this.visibilityChange = "mozvisibilitychange";
        }
        else if (typeof document.msHidden !== "undefined") 
        {
            this.hidden = "msHidden";
            this.visibilityChange = "msvisibilitychange";
        } 
        else if (typeof document.webkitHidden !== "undefined") 
        {
            this.hidden = "webkitHidden";
            this.visibilityChange = "webkitvisibilitychange";
        }


        this.onHide = new Signal();
        this.onShow = new Signal();


        this.init();
    };

    VisibilityChecker.prototype.handleVisibilityChange = function() 
    {
        if (document[this.hidden]) 
        {
            this.onHide.dispatch();
        } 
        else 
        {
            this.onShow.dispatch();
        }
    }

    VisibilityChecker.prototype.init = function()
    {
        document.addEventListener(this.visibilityChange, this.handleVisibilityChange.bind(this), false);
        console.log("CHECKING VISIBILITY" + this.hidden + " " + this.visibilityChange)
    }


    module.exports = new VisibilityChecker();

});




define('com/fido/sound/SoundManager',['require','exports','module','signals','com/fido/system/VisibilityChecker'],function (require, exports, module) {
var Signal = require('signals');
var VisibilityChecker = require('com/fido/system/VisibilityChecker');

var SoundManager = function()
{
    this.disabled = false;
    this.preload = true;

    this.sounds = {};
    this.groups = {};
    this.globalVolume = 1;
    this.isMuted = false;

    this.onMuteToggle = new Signal();
}

SoundManager.prototype.addSound = function(url, id, options)
{
    if(this.disabled || this.sounds[id]) return;
    
    options = options || {};

    var sound = new Howl({
        urls        : [url + ".mp3", url + ".ogg"],
        autoplay    : options.autoplay || false,
        loop        : options.loop || false,
        volume      : options.volume || 1
    });

    sound.realVolume = options.volume || 1;
    this.sounds[id] = sound;
}

SoundManager.prototype.addGroup = function(ids, id)
{
    if(this.disabled || this.groups[id])return;

    var group = {index:0, type:0, sounds:ids};
    this.groups[id] = group;   
}

SoundManager.prototype.play = function(id, volume)
{
    if(this.disabled)return;

    this.sounds[id].play();
}

SoundManager.prototype.playGroup = function(id)
{
    if(this.disabled)return;

    var group = this.groups[id];
    var index = (Math.random() * group.sounds.length) | 0;
    this.sounds[group.sounds[index]].play();
}

SoundManager.prototype.setVolume = function(id, volume)
{
     if(this.disabled)return;

    var sound = this.sounds[id];

    sound.realVolume = volume;
    console.log("sound: "+volume * this.globalVolume)
    sound.volume(volume * this.globalVolume);
}

SoundManager.prototype.stop = function(id)
{
     if(this.disabled)return;

    this.sounds[id].stop();
}

SoundManager.prototype.setPlaybackSpeed = function(id, speed)
{
    if(this.disabled)return;

    var sound = this.sounds[id];
    sound._playbackSpeed = speed;

    //console.log(Howler);
    // need to figure out this.. but a hack for now!
    var hackId = id == "music" ? 0 : 1;


    if(sound._webAudio)
    {
        if(Howler._howls[hackId]._audioNode[0])
        {

        // alert("!")
            Howler._howls[hackId]._audioNode[0].bufferSource.playbackRate.value = speed;
           // console.log( Howler._howls[hackId]._audioNode[0].bufferSource )
        }
    }
    
}

SoundManager.prototype.getPlaybackSpeed = function(id)
{
    if(this.disabled)return;
    
    var sound = this.sounds[id];
    return sound._playbackSpeed || 1;
  //  console.log(Howler);

}


SoundManager.prototype.setGlobalVolume = function(volume)
{
    this.globalVolume = volume;

    for(var i in this.sounds)
    {
        var sound = this.sounds[i];
        sound.volume( sound.realVolume * volume );
    };
}

SoundManager.prototype.mute = function()
{
   this.isMuted = true; 
   this.setGlobalVolume(0);
   this.onMuteToggle.dispatch(true);
}

SoundManager.prototype.unmute = function()
{
    this.isMuted = false;
    this.setGlobalVolume(1);
    this.onMuteToggle.dispatch(false);
}

SoundManager.prototype.check = function()
{
    this.lastSeen = Date.now();


    var loop = function (){
        lastSeen = Date.now();
        setTimeout(loop, 50);
    };
    loop();

    var music = document.getElementById('music');
    music.addEventListener('timeupdate', function (){
        if(Date.now() - exports.lastSeen > 100){
            this.pause();
        }
    }, false);
}

SoundManager.sfx = new SoundManager();
SoundManager.music = new SoundManager();

// disable sound by default if there is no web audio api..
SoundManager.sfx.disabled = !Howler.usingWebAudio;

VisibilityChecker.onHide.add(Howler.mute, Howler);
VisibilityChecker.onShow.add(Howler.unmute, Howler);

//SoundManager.sfx.disabled = SoundManager.music.disabled = true;

module.exports = SoundManager;

});

define('com/fido/ui/buttons/Button',['require','exports','module','signals'],function (require, exports, module) {

var Signal = require('signals')

var Button = function( view )
{
    if(!view)throw("FIDO: Button view must not be undefined");

    this.view = view;

    this.onPress = new Signal();
    this.onDown = new Signal();
    this.onUp = new Signal();
    

    this.view.interactive = true;
    this.view.buttonMode = true;
    // bind touch and mouse events to signals..
    this.view.mousedown = this.view.touchstart = this.onDown.dispatch.bind(this, this);
    this.view.mouseup = this.view.touchend = this.onUp.dispatch.bind(this, this);

    this.view.click = this.view.tap = this.onPress.dispatch.bind(this, this);
}

Button.constructor = Button;

module.exports = Button;

});

define('com/fido/utils/ThreeSlice',['require','exports','module','PIXI'],function (require, exports, module) {
/**
*
*   Simple App to get a pixi stage up and running..
*
*/

var PIXI = require("PIXI");

var ThreeSlice = function(left, middle, right)
{

    this.left = new PIXI.Sprite(left);
    this.middle = new PIXI.Sprite(middle);
    this.right = new PIXI.Sprite(right);

    PIXI.DisplayObjectContainer.call( this );

    this.addChild(this.left);
    this.addChild(this.middle);
    this.addChild(this.right);
}


ThreeSlice.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );


Object.defineProperty(ThreeSlice.prototype, 'width', {
    get: function() {
        return  this._width;
    },
    set: function(value) {
        
        this._width = value;
        this.left.position.x = 0;
        this.middle.position.x = this.left.width;
        this.middle.width = value - (this.left.width + this.right.width);
        this.right.position.x = this.middle.position.x + this.middle.width-1;
    }
});

ThreeSlice.fromFrames = function(left, middle, right)
{
    return new ThreeSlice(PIXI.Texture.fromFrame(left), PIXI.Texture.fromFrame(middle), PIXI.Texture.fromFrame(right))
}

module.exports = ThreeSlice;
});

define('com/nebulon/app/buttons/AabButton',['require','exports','module','PIXI','com/fido/ui/buttons/Button','com/fido/utils/ThreeSlice'],function (require, exports, module) {

var PIXI = require("PIXI");
var Button = require('com/fido/ui/buttons/Button');
var ThreeSlice = require('com/fido/utils/ThreeSlice');

var AabButton = function(title)
{
    this.label = new PIXI.Text(title, {fill:"#FFFFFF"})

    this.label.x = 23;
    this.label.y = 32;

    var view = this.createBackground(this.label.width);

    view.addChild(this.label);
    Button.call( this, view );
    
    var addRollover = true;


    //this.view.cacheAsBitmap = true;
}

AabButton.prototype = Object.create( Button.prototype );

AabButton.prototype.createBackground = function( width )
{
    var view = ThreeSlice.fromFrames("3_slice_left_frame.png", "3_slice_mid_frame.png", "3_slice_right_frame.png");// new PIXI.Graphics();
    
    var bg = new PIXI.Graphics().beginFill(0x35a8df).drawRect(0, 0, 100, 71);


  //  view.beginFill(0xFF0000).drawRect(0,0, 32, 32).endFill();
    view.addChildAt(bg, 0);

    view.width = Math.max( width + 40, 90 );
    bg.scale.x = (view.width-14) / 100;
    bg.position.x = 10;
    bg.position.y = 11;
    //console.log(this.signal)
    

    var addRollover = true;

    if(addRollover)
    {
        this.rollover = PIXI.Sprite.fromFrame("3_slice_halftone_rollover.png");
        this.rollover.width = view.width * 2;
        this.rollover.height = 71;
        this.rollover.y = 10;
        this.rollover.x = -view.width * 2;

        view.addChildAt(this.rollover, 1);
        this.rolloverMask = new PIXI.Graphics().beginFill(0xFFCC00).drawRect(0,0,100,71);
        this.rolloverMask.position.x = 10;
        this.rolloverMask.position.y = 11;
        this.rolloverMask.scale.x = bg.scale.x;

        this.rollover.mask = this.rolloverMask;
        view.addChild(this.rolloverMask);

        view.mouseover = this.onMouseOver.bind(this);
        view.mouseout = this.onMouseOut.bind(this);

        view.touchstart = this.onMouseOver.bind(this);
        view.touchend = view.touchendoutside = this.onMouseOut.bind(this);
    }

    view.hitArea = new PIXI.Rectangle(0, 0, Math.max( width + 40, 90 ), 90);

    return view;
}

AabButton.prototype.onMouseOver = function()
{
    TweenLite.to(this.rollover.position, 0.5, {x:0});
}

AabButton.prototype.onMouseOut = function()
{
    TweenLite.to(this.rollover.position, 0.5, {x:-this.view.width * 2});
}


module.exports = AabButton;

});

define('com/nebulon/app/buttons/BaseAabButton',['require','exports','module','PIXI','com/fido/ui/buttons/Button','com/fido/utils/ThreeSlice','com/fido/system/Ticker'],function (require, exports, module) 
{
    var PIXI        = require("PIXI");
    var Button      = require('com/fido/ui/buttons/Button');
    var ThreeSlice  = require('com/fido/utils/ThreeSlice');
    var Ticker      = require('com/fido/system/Ticker');

    var BaseAabButton = function(view)
    {
        Button.call( this, view );        
        var addRollover = true;
    }

    BaseAabButton.prototype = Object.create( Button.prototype );

    BaseAabButton.prototype.createBackground = function( width, scale )
    {
        scale = scale || 1;
        width /= scale;

        var view = ThreeSlice.fromFrames("3_slice_left_frame.png", "3_slice_mid_frame.png", "3_slice_right_frame.png");// new PIXI.Graphics();
        
        var blueBg = new PIXI.Graphics().beginFill(0x35a8df).drawRect(0, 0, 100, 71);
        view.addChildAt(blueBg, 0);

        view.width = Math.max( width + 40, 90 );
        blueBg.scale.x = (view.width-14) / 100;
        blueBg.position.x = 10;
        blueBg.position.y = 11;

        var addRollover = true;

        this.blueBg = blueBg;
    //    view.hitArea = new PIXI.Rectangle(0, 0, Math.max( width + 40, 90 ), 90);
        view.scale.set(scale);
        view.pivot.x = view.width / 2;
        view.pivot.y = 90 / 2;
       // console.log(view);
       // 
        this.bg = view;
        return view;
    }

    BaseAabButton.prototype.activateDefaultRollover = function()
    {
        this.rollover = PIXI.Sprite.fromFrame("3_slice_halftone_rollover.png");
        this.rollover.width = this.bg.width * 2;
        this.rollover.height = 71;
        this.rollover.y = 10;
        this.rollover.x = -this.bg.width * 2;

        this.bg.addChildAt(this.rollover, 1);

        this.rolloverMask = new PIXI.Graphics().beginFill(0xFFCC00).drawRect(0,0,100,71);
        this.rolloverMask.position.x = 10;
        this.rolloverMask.position.y = 11;
        this.rolloverMask.scale.x = this.blueBg.scale.x;
        this.rollover.mask = this.rolloverMask;
        this.bg.addChild(this.rolloverMask);

        this.view.mouseover = this.onMouseOver.bind(this);
        this.view.mouseout = this.onMouseOut.bind(this);

        this.view.touchstart = this.onMouseOver.bind(this);
        this.view.touchend = this.view.touchendoutside = this.onMouseOut.bind(this);

        this.count = 0;
        this.scale = 1;
        this.intensity = 0.1;

        this.defaultScale = 1;
        this.overScale = 1.1;
    }

    BaseAabButton.prototype.toggleOn = function()
    {
        TweenLite.to(this.rollover.position, 0, {
            x : 0
        });

        this.view.interactive = false;
    }

    BaseAabButton.prototype.toggleOff = function()
    {
        TweenLite.to(this.rollover.position, 0, {
            x : -this.bg.width * 2
        }); qwdqwedf

        this.view.interactive = true;   
    }

    BaseAabButton.prototype.onMouseOver = function()
    {
        TweenLite.to(this.rollover.position, 0.5, {x:0});
        TweenLite.to(this.view.scale, 0.5, {x:this.overScale, y:this.overScale, ease:Elastic.easeOut});
        TweenLite.to(this.view, 0.75, {rotation:(Math.random()-0.5) * 0.1, ease:Elastic.easeOut});
    }

    BaseAabButton.prototype.onMouseOut = function()
    {
        TweenLite.to(this.rollover.position, 0.5, {x:-this.bg.width * 2});
        TweenLite.to(this.view.scale, 0.5, {x:this.defaultScale, y:this.defaultScale, ease:Elastic.easeOut});
        TweenLite.to(this.view, 0.75, {rotation:0, ease:Elastic.easeOut});
    }

    module.exports = BaseAabButton;

});
define('com/nebulon/app/buttons/AabLabelButton',['require','exports','module','PIXI','./BaseAabButton','com/fido/sound/SoundManager'],function (require, exports, module) 
{
    var PIXI            = require("PIXI");
    var BaseAabButton   = require('./BaseAabButton');
    var SoundManager    = require('com/fido/sound/SoundManager');

    var AabLabelButton = function(frameId, width)
    {
        this.label = new PIXI.Sprite.fromFrame(frameId);
        this.label.anchor.set(0.5);

        if(width) this.label.x = -width/2 + this.label.width/2 + 5;

        width = width || this.label.width + 10;
        var scale = 0.7;

        this.createBackground(width, scale);

        var view = new PIXI.DisplayObjectContainer();
        view.addChild(this.bg);

        var hitWidth = width + 20;

        view.hitArea = new PIXI.Rectangle(-hitWidth/2, -90*scale/2, hitWidth, 90 * scale);
        view.addChild(this.label);
        BaseAabButton.call( this, view );
        
        view.mousedown = view.touchstart = this.onTouch.bind(this);
        this.activateDefaultRollover();
    }

    AabLabelButton.prototype = Object.create( BaseAabButton.prototype );

    AabLabelButton.prototype.onTouch = function()
    {
     
    }

    module.exports = AabLabelButton;

});

define('com/fido/utils/Utils',['require','exports','module','PIXI'],function (require, exports, module) 
{
    var PIXI = require("PIXI");
    var Utils = {};

    Utils.getTexturesFromFrames = function(ids)
    {
       var textures = [];

        for (var i = 0; i < ids.length; i++) 
        {
            textures.push(new PIXI.Texture.fromFrame(ids[i]));
        }

        return textures;
    }

    Utils.getTexturesFromImages = function(ids)
    {
        var textures = [];

        for (var i = 0; i < ids.length; i++) 
        {
            textures.push(new PIXI.Texture.fromImage(ids[i]));
        }

        return textures;
    }

    Utils.getTexturesFromFramesWithPrefix = function(prefix, total, start)
    {
       var textures = [];
       if(start ==undefined)start = 0;

        for (var i = 0; i < total; i++) 
        {
            var num = i+start;
            var path = prefix.replace("%%", num < 10 ? "0" + num : num);
            textures.push(new PIXI.Texture.fromFrame(path));
        }

        return textures;
    }

    Utils.formatScore = function(n)
    {
        var nArray = n.toString().split("");
        var text = "";
        var total = nArray.length;
        
        var offset = (total % 3)-1;
        for(var i = 0; i < total; i++)
        {
            text += nArray[i];
            if((i - offset) % 3 == 0 && i != total-1) text += ","; 
        }
        
        return text;
    }

    Utils.formatName = function(n)
    {
        var words = n.split(" ");
        for (var i = words.length - 1; i >= 0; i--) {
            if( words[i].length === 0)continue;

            wordArray = words[i].split("");
            wordArray[0] = wordArray[0].toUpperCase();
            console.log(wordArray[0])
            words[i] = wordArray.join("");
        };

        word = words.join(" ");

        return word;
    }

    if(!window.console) 
    {
        window.console = 
        {
            log : function(stuff)
            {

            }
        }
    }

    Utils.get_query = function(index)
    {
        var url = location.href;
        var qs = url.substring(url.indexOf('?') + 1).split('&');

        for(var i = 0, result = {}; i < qs.length; i++)
        {
            qs[i] = qs[i].split('=');
            result[qs[i][0]] = decodeURIComponent(qs[i][1]);
        }

        return result.hasOwnProperty(index) ? result[index] : false;
    }

    module.exports = Utils;

});
define('com/nebulon/app/screens/LoaderScreen',['require','exports','module','PIXI','../buttons/AabButton','../buttons/AabLabelButton','com/fido/ui/buttons/Button','com/fido/system/Ticker','com/fido/utils/FrameWait','com/fido/system/Device','com/fido/utils/Utils'],function (require, exports, module) 
{
    var PIXI            = require("PIXI");
    var AabButton       = require('../buttons/AabButton');
    var AabLabelButton  = require('../buttons/AabLabelButton');
    var button          = require('com/fido/ui/buttons/Button');
    var Ticker          = require('com/fido/system/Ticker')
    var Wait            = require("com/fido/utils/FrameWait");
    var Device          = require("com/fido/system/Device");
    var Utils           = require("com/fido/utils/Utils")

    var LoaderScreen = function(app)
    {
        this.app = app;

        PIXI.DisplayObjectContainer.call( this );

        this.text = new PIXI.Text("l o a d i n g . . .", {fill:'white', font: "20px Arial"});
         this.text.anchor.set(0.5);

        this.text.filters = [new PIXI.filters.BloomFilter()];
        this.addChild(  this.text)
        this.tick = 0;
    }

    LoaderScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

    LoaderScreen.prototype.onShown = function()
    {
        //this.prepreloader.load();
        Ticker.instance.add(this.update, this);
    }

    LoaderScreen.prototype.onHidden = function()
    {
        //this.prepreloader.load();
        Ticker.instance.remove(this.update, this);
    }

   
    LoaderScreen.prototype.update = function()
    {
        this.tick += 0.05
        this.text.alpha = 0.6 +  (Math.sin(this.tick) + 1) * 0.5 * 0.4;
    }

    LoaderScreen.prototype.resize = function(w, h)
    {
        this.w = w;
        this.h = h;

         this.text.x = w/2;
          this.text.y= h/2;
    }

    module.exports = LoaderScreen;

});
define('com/fido/utils/Mini3d',['require','exports','module'],function (require, exports, module) {

Mini3d = function()
{
    this.view = new PIXI.DisplayObjectContainer();

    this.children = [];

    this.focalLength = 400;

    this.position3d = {x:0, y:0, z:0};
    this.rotation3d = {x:0, y:0, z:0};
}

Mini3d.constructor = Mini3d;

Mini3d.prototype.addChild = function(child)
{
    if(! child.position3d )child.position3d = {x:0, y:0, z:0};
    child.anchor.set(0.5);

    this.view.addChild(child);

    this.children.push(child);

}

Mini3d.prototype.update = function()
{
    var sx = Math.sin(this.rotation3d.x);
    var cx = Math.cos(this.rotation3d.x);
    var sy = Math.sin(this.rotation3d.y);
    var cy = Math.cos(this.rotation3d.y);
    var sz = Math.sin(this.rotation3d.z);
    var cz = Math.cos(this.rotation3d.z);
    var x,y,z, xy,xz, yx,yz, zx,zy, scaleRatio;


    for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
  
        x = child.position3d.x - this.position3d.x;
        y = child.position3d.y - this.position3d.y;
        z = child.position3d.z - this.position3d.z;

        // rotation around x
        xy = cx*y - sx*z;
        xz = sx*y + cx*z;
        // rotation around y
        yz = cy*xz - sy*x;
        yx = sy*xz + cy*x;
        // rotation around z
        zx = cz*yx - sz*xy;
        zy = sz*yx + cz*xy;

       
        scaleRatio = this.focalLength/(this.focalLength + yz);
        x = zx*scaleRatio;
        y = zy*scaleRatio;
        z = yz;

        child.scale.x = child.scale.y = scaleRatio * child.scaleRatio;
        child.scale.x *= child.scaleOffset.x;
        child.scale.y *= child.scaleOffset.y;
    //   console.log(child.scaleOffset)
        child.depth = -child.position3d.z;
        child.position.x = x// * scaleRatio;
        child.position.y = y// * scaleRatio;

    };

    this.view.children.sort(depthCompare);
}

function depthCompare(a,b) {
  return ( a.depth ) - ( b.depth);
}

module.exports = Mini3d;


});

define('com/nebulon/app/screens/Cloud',['require','exports','module','PIXI','com/fido/system/Device','com/fido/utils/Mini3d','com/fido/system/Ticker'],function (require, exports, module) 
{
    var PIXI            = require("PIXI");
    var Device          = require('com/fido/system/Device');
    var Mini3d          = require('com/fido/utils/Mini3d');
    var Ticker          = require('com/fido/system/Ticker');

    var Cloud = function( texture )
    {
        PIXI.Sprite.call( this, texture );

        this.position3d = {x:0, y:0, z:0};

        this.scaleRatio = 2;

        this.scaleOffset = new PIXI.Point(1, 1);
    }

    Cloud.prototype = Object.create( PIXI.Sprite.prototype );



    Cloud.prototype.onShow = function()
    {
        Ticker.instance.add(this.update, this);
    }

    Cloud.prototype.onShown = function()
    {

    }

    Cloud.prototype.update = function()
    {

    }

    module.exports = Cloud;

});

define('com/fido/utils/Math2',['require','exports','module'],function (require, exports, module) 
{
    var Math2 = {};

    Math2.random = function(from, to)
    {
       from = from || 0;
       to = to === undefined ? 1 : to;

       return from + Math.random() * (to-from);
    }

    Math2.randomInt = function(from, to)
    {

       return (from + Math.random() * (to-from)) | 0;
    }
   
   
    // in order to work 'Math.seed' must NOT be undefined,
    // so in any case, you HAVE to provide a Math.seed
    Math2.randomSeed = function(from, to, seed) 
    {
        min = from;
        max = to;
        seed = seed || 1;

        seed = (seed * 9301 + 49297) % 233280;
        var rnd = seed / 233280;
     
        return min + rnd * (max - min);
    }

    Math2.randomChance = function(chance, seed) 
    {
      return Math2.randomSeed(0, 1, seed) > chance;
    }

/*
    var percent = 0;

    for (var i = 0; i < 10000; i++) {
      
        var number =  Math2.randomSeed(0, 1, Math.random() * 11001);
        console.log(number)
        if(number < 0.5)percent += 1; 

    };

    //percent /= 100;

    console.log("PERCENT : " +  percent)*/
    module.exports = Math2;

});
define('com/nebulon/app/screens/Clouds',['require','exports','module','PIXI','com/fido/system/Device','com/fido/utils/Mini3d','./Cloud','com/fido/utils/Math2'],function (require, exports, module) 
{
    var PIXI            = require('PIXI');
    var Device          = require('com/fido/system/Device');
    var Mini3d          = require('com/fido/utils/Mini3d');
   
    var Cloud           = require('./Cloud');
    var Math2           = require('com/fido/utils/Math2');

    var CloudsScreen = function(app)
    {
        this.app = app;

        PIXI.DisplayObjectContainer.call( this );

        this.bg = new PIXI.Sprite.fromImage(window.ASSET_URL + 'img/skyBG.jpg');
        this.addChild(this.bg);

        this.mini3d = new Mini3d();

        this.addChild(this.mini3d.view);

        this.speed = -15;

        this.range = 3000;

        this.clouds = [];
        this.images = ['skyCloud1.png', 'skyCloud2.png'];

        for (var i = 0; i < 50; i++) {
            var cloud = new Cloud( PIXI.Texture.fromImage(ASSET_URL + 'img/' + this.images[i%2]) );
            this.mini3d.addChild(cloud);  
            this.clouds.push(cloud);
            cloud.position3d.z = -(this.range / 50) * i
        }
  //      this.filters = [new PIXI.filters.BloomFilter()];

        this.count = 0;
    };

    CloudsScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );



    CloudsScreen.prototype.onShow = function()
    {
      //  Ticker.instance.add(this.update, this);
    };

    CloudsScreen.prototype.onShown = function()
    {

    };

    CloudsScreen.prototype.update = function()
    {
       // this.mini3d.view.rotation += 0.01
        for (var i = 0; i < this.clouds.length; i++) {
            var cloud = this.clouds[i];
            cloud.position3d.z += this.speed;

            if(cloud.position3d.z < 300)
            {
                 cloud.alpha = cloud.position3d.z / 300;
            }
            else
            {
                cloud.alpha += (1 - cloud.alpha) * 0.01;
            }

            if(cloud.position3d.z < 0)
            {
              //  cloud.
                cloud.scaleRatio = 5;
                cloud.position3d.z += this.range ;
                cloud.position3d.x = Math2.random(-4500, 4500);
                cloud.position3d.y = 1200 - Math.abs(cloud.position3d.x * 0.2) + Math2.random(0, 200);
                cloud.rotation = cloud.position3d.x * -0.0002//Math2.random(-0.2, 0.2)// * Math.PI * 2;
           //     cloud.alpha = Math2.random(0.8, 1)
                cloud.alpha = 0;
                cloud.scaleOffset.x = Math2.random(0.6, 1.4);
                cloud.scaleOffset.y = Math2.random(0.9, 1.1);
                if(Math.random() < 0.5)cloud.scaleOffset.x *= -1;

             //   this.mini3D.view.addChild(child);
            }
        }
      //  this.mini3d.rotation3d.x = 0.01;
        this.mini3d.update();

        this.count ++;

        this.mini3d.view.rotation = Math.cos(this.count * 0.02) *0.08
      // 
        this.mini3d.position3d.y = Math.sin(this.count * 0.03) * 200;
        this.mini3d.position3d.y -= 50;
      
        this.mini3d.rotation3d.y = Math.sin(this.count * 0.02 * 0.5) * 0.2
    };

    CloudsScreen.prototype.resize = function(w, h)
    {
        this.mini3d.view.x = w/2;
        this.mini3d.view.y = h/2;

    };


    module.exports = CloudsScreen;

});

define('com/nebulon/app/screens/Stars',['require','exports','module','PIXI','com/fido/system/Device','com/fido/utils/Mini3d','com/fido/system/Ticker','./Cloud','com/fido/utils/Math2'],function (require, exports, module) 
{
    var PIXI            = require('PIXI');
    var Device          = require('com/fido/system/Device');
    var Mini3d          = require('com/fido/utils/Mini3d');
    var Ticker          = require('com/fido/system/Ticker');
    var Cloud           = require('./Cloud');
    var Math2           = require('com/fido/utils/Math2');

    var StarsScreen = function(app)
    {
        this.app = app;

        PIXI.DisplayObjectContainer.call( this );

        this.bg = new PIXI.Sprite.fromImage(window.ASSET_URL + 'img/spaceBG.jpg');
        this.bg.anchor.set(0.5);
        this.bg.x = 1900/2;
        this.bg.y = 1200/2;
        this.bg.scale.set(1.185);
        this.addChild(this.bg);

        this.sun = new PIXI.Sprite.fromImage(window.ASSET_URL + "img/sun_add.png");
      
        this.sun.anchor.set(0.5);
        this.sun.position.set(1900/2, 1200/2);
       // this.sun.blendMode = PIXI.CONST.BLEND_MODES.ADD;

        this.mini3d = new Mini3d();

        this.addChild(this.mini3d.view);

        this.speed = -5;

        this.range = 2000;

        this.clouds = [];
        this.images = ['spaceCloud1.png', 'spaceCloud2.png', 'spaceCloud3.png'];

        for (var i = 0; i < 30; i++) {
            var cloud = new Cloud( PIXI.Texture.fromImage(ASSET_URL + 'img/' + this.images[i%3]) );
            cloud.blendMode = PIXI.CONST.BLEND_MODES.ADD;
            cloud.rotSpeed = 1;
            this.mini3d.addChild(cloud);  
            this.clouds.push(cloud);
            cloud.position3d.z = -(this.range / 30) * i
        }
        //this.filters = [new PIXI.filters.BloomFilter()];

          this.addChild(this.sun);
        this.count = 0;
    };

    StarsScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );



    StarsScreen.prototype.onShow = function()
    {
     //   Ticker.instance.add(this.update, this);
    };

    StarsScreen.prototype.onShown = function()
    {

    };

    StarsScreen.prototype.update = function()
    {
       // this.mini3d.view.rotation += 0.01
        for (var i = 0; i < this.clouds.length; i++) {
            var cloud = this.clouds[i];
            cloud.position3d.z += this.speed;

            if(cloud.position3d.z < 300)
            {
                 cloud.alpha = cloud.position3d.z / 300;
            }
            else
            {
                cloud.alpha += (1 - cloud.alpha) * 0.01;
            }

            cloud.rotation +=  cloud.rotSpeed;

            if(cloud.position3d.z < 0)
            {
              //  cloud.
                cloud.scaleRatio = 5;
                cloud.rotSpeed = Math2.random(-0.0005, 0.0005);

                cloud.position3d.z += this.range ;
                cloud.position3d.x = Math2.random(-4500 *1.1, 4500 *1.1);
                cloud.position3d.y = Math2.random(-4500 *1.1, 4500 *1.1);//1200 - Math.abs(cloud.position3d.x * 0.2) + Math2.random(0, 200);
//                cloud.rotation = cloud.position3d.x * -0.0002//Math2.random(-0.2, 0.2)// * Math.PI * 2;
           //     cloud.alpha = Math2.random(0.8, 1)
                cloud.alpha = 0;
                cloud.rotation = 0;
                cloud.scaleOffset.x = Math2.random(1, 1.2);
                cloud.scaleOffset.y = Math2.random(1, 1.2);
                if(Math.random() < 0.5)cloud.scaleOffset.x *= -1;

             //   this.mini3D.view.addChild(child);
            }
        }
      //  this.mini3d.rotation3d.x = 0.01;
        this.mini3d.update();

        this.count += 0.25;

        this.bg.rotation += 0.0002
        this.mini3d.view.rotation = Math.cos(this.count * 0.02) *0.08
      // 
        this.mini3d.position3d.y = Math.sin(this.count * 0.03) * 200;
        this.mini3d.position3d.y -= 50;
      
        this.mini3d.rotation3d.y = Math.sin(this.count * 0.02 * 0.5) * 0.2
    };

    StarsScreen.prototype.resize = function(w, h)
    {
        this.mini3d.view.x = w/2;
        this.mini3d.view.y = h/2;

    };


    module.exports = StarsScreen;

});

define('com/fido/physics/DoubleSpring',['require','exports','module'],function (require, exports, module) {
/**
 * @author matgroves
 */

var DoubleSpring = function(){
	
	this.x				 = 0;
	this.ax				 = 0;
	this.dx				 = 0;
	this.tx				 = 0;
	
	this.y				 = 0;
	this.ay				 = 0;
	this.dy				 = 0;
	this.ty				 = 0;
	
//	public static var damp				:Number = 0.39;
//	public static var springiness		:Number = 0.6;
	
	this.max			 = 30;
	
	this.damp			 = 0.75;
	this.springiness	 = 0.09

	this.max = 160;
	this.damp = 0.70;	
	this.springiness = 0.69;

//	this.max = 130
//	this.damp = 0.33
//	this.springiness = 0.5//369
		
};


DoubleSpring.constructor = DoubleSpring;
	// C O N S T R U C T O R S ---------------------------------------//
		
	// P U B L I C ---------------------------------------------------//
	
DoubleSpring.prototype.update = function()
{
	//var damp = this.damp;
	
	//	var springiness = this.springiness;
	//	var max = this.max;
	
	this.ax=(this.tx-this.x)*this.springiness;
	
	this.dx+=this.ax;
	this.dx*=this.damp; 
	
	if(this.dx < -this.max)this.dx = -this.max;
	else if(this.dx > this.max)this.dx = this.max;
	
	//Math2.cap(dx, -max, max);
	
	this.x+=this.dx; 
	
	this.ay=(this.ty-this.y)*this.springiness;
	
	this.dy+=this.ay;
	this.dy*=this.damp; 
	
	if(this.dy < -this.max)this.dy = -this.max;
	else if(this.dy > this.max)this.dy = this.max;
	
	this.y+=this.dy; 
}

DoubleSpring.prototype.reset = function() 
{
	this.x = 0;
	this.ax = 0;
	this.dx = 0;
	this.tx = 0;
	
	this.y = 0;
	this.ay = 0;
	this.dy = 0;
	this.ty = 0;
}

module.exports = DoubleSpring;

});

define('com/nebulon/app/screens/MaskyMask',['require','exports','module','PIXI','com/fido/system/Device','com/fido/utils/Mini3d','com/fido/system/Ticker','com/fido/utils/Math2','com/fido/physics/DoubleSpring'],function (require, exports, module) 
{
    var PIXI            = require("PIXI");
    var Device          = require('com/fido/system/Device');
    var Mini3d          = require('com/fido/utils/Mini3d');
    var Ticker          = require('com/fido/system/Ticker');
    var Math2           = require('com/fido/utils/Math2');
    var DoubleSpring    = require('com/fido/physics/DoubleSpring');

    var MaskyMask = function(  )
    {
        var texture = new PIXI.RenderTexture(window.renderer, 1900, 1200);

        PIXI.Sprite.call( this, texture);//

        this.container = new PIXI.Container();
       // this.cloud1 =  new PIXI.Sprite.fromImage(ASSET_URL + 'img/mask.jpg' );

        this.m = new PIXI.Matrix();
         this.m.translate(1900/2, 1200/2);

      //   this.mainblob = new PIXI.Sprite.fromImage( ASSET_URL + 'img/blob.png' )
       //  this.container.addChild( this.mainblob);

         //this.cloud1.width = 800;
        //  this.cloud1.height = 600;
        //this.cloud1.anchor.set(0.5);
    //    this.cloud1.x = 400;
      //  this.cloud1.y = 300;

        this.blobs = [];

        for (var i = 0; i < 50; i++) 
        {

            blob = new PIXI.Sprite.fromImage( ASSET_URL + 'img/blob.png' );
            blob.target = new PIXI.Point(Math2.random(-1900/2, 1900/2),
                                         Math2.random(-1200/2, 1200/2));

            this.blobs.push(blob);
        //    blob.home = new PIXI.Point();
            blob.spring = new DoubleSpring();
           // blob.spring.damp = Math2.random(0.5, 0.99)
            blob.rotationSpeed = Math2.random(-0.1, 0.1)
            blob.anchor.set(0.5);
            blob.count = Math.random() * Math.PI * 2;
            this.container.addChild(blob);

       //     blob.position.x = Math.random() * 1900;
         //   blob.position.y = Math.random() * 1200;

        };

     //   this.container.addChild(this.cloud1);

       // this.container.filters = [new PIXI.filters.Pixelat()];

        this.isOpen = false;
        this.count = 0;
        this.anchor.set(0.5);
        
        this.target = new PIXI.Point();
        
    }

    MaskyMask.prototype = Object.create( PIXI.Sprite.prototype );

    MaskyMask.prototype.update = function()
    {
        this.count += 0.01;

        for (var i = 0; i < this.blobs.length; i++) 
        {
            var blob = this.blobs[i];
          //  blob.position.x = Math.random() * 1900;
          //  blob.position.y = Math.random() * 1200;
//            blob.alpha = Math.random();
            blob.count+=0.1;
            var s = Math.sin(blob.count * 0.5)//blob.count * 0.3);

         //   blob.spring.tx = this.target.x + blob.target.x;
       //     blob.spring.ty = this.target.y + blob.target.y;
            blob.spring.update();
                
      ///      blob.position.x = blob.spring.x;
         //   blob.position.y = blob.spring.y;

            blob.scale.set(s)
            blob.rotation += blob.rotationSpeed * 0.1;
            blob.alpha = 0.9;

            if(blob.count > Math.PI * 2)
            {
                blob.count -= Math.PI * 2;
        //        if()
            //    console.log("!")
                var pos = Math.random() * Math.PI * 2;
                var rad = Math2.random(100, 200);
                blob.x = this.target.x + Math.sin(pos) * rad;
                blob.y = this.target.y + Math.cos(pos) * rad;
              //  blob.spring.x = this.target.x + blob.target.x;
            //    blob.spring.y = this.target.y + blob.target.y;
                blob.rotation = Math.random() * Math.PI * 2;

            }
        };  

        this.texture.render(this.container,  this.m, true, true);
   //     this.scale.x = 1 + (Math.sin(this.count) + 1) * 2
        //this.scale.x = this.scale.y = 1 + (Math.sin(this.count * 0.3) * 2+ 1);

    //    this.rotation += 0.01;
    }

    MaskyMask.prototype.open = function()
    {
         this.isOpen = true;

        for (var i = 0; i < this.blobs.length; i++) 
        {
            var blob = this.blobs[i];
          //  TweenLite.to(blob.position, 3, {x:blob.target.x, y:blob.target.y, ease:Elastic.easeOut, delay: (i * 0.01)})
            // TweenLite.to(blob.scale, 1.5, {x:3,  y:3, ease:Elastic.easeOut, delay: (i * 0.01)})
             // TweenLite.to(blob, 0.5, {alpha:1, delay: (i * 0.01)})
        }

    }

    MaskyMask.prototype.close = function()
    {
         this.isOpen = false;
        for (var i = 0; i < this.blobs.length; i++) 
        {
            var blob = this.blobs[i];
      //      TweenLite.to(blob.position, 0.5, {x:0, y:0})
    //        TweenLite.to(blob.scale, 0.5, {x:0.5,  y:0.5, ease:Sine.easeOut})
        //     TweenLite.to(blob, 0.5, {alpha:0.7})
        }
    }
    

    MaskyMask.prototype.resize = function(w, h)
    {
        this.x = w/2;
        this.y = h/2;
    }

    module.exports = MaskyMask;

});

define('com/nebulon/app/screens/SuperFilter',['require','exports','module','PIXI'],function (require, exports, module) 
{
    var PIXI            = require("PIXI");

    /**
     * The SuperFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
     * You can use this filter to apply all manor of crazy warping effects
     * Currently the r property of the texture is used to offset the x and the g property of the texture is used to offset the y.
     *
     * @class
     * @extends AbstractFilter
     * @namespace PIXI
     * @param texture {Texture} The texture used for the displacement map * must be power of 2 texture at the moment
     */
    function SuperFilter(sprite)
    {
        var maskMatrix = new PIXI.math.Matrix();

        //TODO move this code out to a frag and vert file.
        PIXI.AbstractFilter.call(this,
            // vertex shader
            [
                'attribute vec2 aVertexPosition;',
                'attribute vec2 aTextureCoord;',
                'attribute vec4 aColor;',

                'uniform mat3 projectionMatrix;',
                'uniform mat3 otherMatrix;',

                'varying vec2 vMaskCoord;',
                'varying vec2 vTextureCoord;',
                'varying vec4 vColor;',

                'void main(void)',
                '{',
                '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
                '   vTextureCoord = aTextureCoord;',
                '   vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;',
                '   vColor = vec4(aColor.rgb * aColor.a, aColor.a);',
                '}'
            ].join('\n'),
            // fragment shader
            [
                'precision lowp float;',

                'varying vec2 vMaskCoord;',
                'varying vec2 vTextureCoord;',
                'varying vec4 vColor;',

                'uniform sampler2D uSampler;',
                'uniform sampler2D mask;',

                'void main(void)',
                '{',
               
                '   vec4 masky =  texture2D(mask, vMaskCoord);',
                '   float strength =  (masky.r * masky.a);',
                '   strength *= 5.0;',
                '   strength = min(1.0, strength ) ;', 

                '   vec4 original =  texture2D(uSampler, vTextureCoord +  (1.0-strength) * 0.1);',
                '   original *= strength;',
          //      '   original.rgb *= 1.3;',
                '   gl_FragColor =  original;',
                '}'
            ].join('\n'),
            // uniforms
            {
                mask:           { type: 'sampler2D', value: sprite.texture },
                otherMatrix:    { type: 'mat3', value: maskMatrix.toArray(true) }
            }
        );

        this.maskSprite = sprite;
        this.maskMatrix = maskMatrix;
    }

    SuperFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    SuperFilter.prototype.constructor = SuperFilter;
    module.exports = SuperFilter;

    SuperFilter.prototype.applyFilter = function (renderer, input, output)
    {
        var filterManager = renderer.filterManager;

        filterManager.calculateMappedMatrix(input.frame, this.maskSprite, this.maskMatrix);

        this.uniforms.otherMatrix.value = this.maskMatrix.toArray(true);

        var shader = this.getShader(renderer);
         // draw the filter...
        filterManager.applyFilter(shader, input, output);
    };


    Object.defineProperties(SuperFilter.prototype, {
        /**
         * The texture used for the displacement map. Must be power of 2 sized texture.
         *
         * @member {Texture}
         * @memberof SuperFilter#
         */
        map: {
            get: function ()
            {
                return this.uniforms.mask.value;
            },
            set: function (value)
            {
                this.uniforms.mask.value = value;
            }
        },

        /**
         * The offset used to move the displacement map.
         *
         * @member {Point}
         * @memberof SuperFilter#
         */
        offset: {
            get: function()
            {
                return this.uniforms.offset.value;
            },
            set: function(value)
            {
                this.uniforms.offset.value = value;
            }
        }
    });

    module.exports = SuperFilter;

});



define( 'com/nebulon/app/screens/SpeedFilter',['require','exports','module','PIXI'],function (require, exports, module) {

     var PIXI            = require("PIXI");

    
    var SpeedFilter = module.exports = function()
    {
        PIXI.AbstractFilter.call( this,

        null,

        [
            'precision highp float;',

            'uniform sampler2D uSampler;',
            'varying vec2 vTextureCoord;',
            'varying vec4 vColor;',
            
            'uniform vec2 center;',
            'uniform float strength;',
            'uniform vec2 texSize;',
            'uniform float vignetteOffset;',
            'uniform float vignetteDarkness;',
            'uniform float sine;',
            'uniform float cosine;',
            'uniform float shiftSampleDistance;',
            'uniform vec2 red;',
            'uniform vec2 green;',
            'uniform vec2 blue;',
            'uniform float saturation;',
            'uniform float saturationConstant;',

            'float random(vec3 scale, float seed) {',
                /* use the fragment position for a different seed per-pixel */
                'return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);',
            '}',

            'vec3 czm_saturation(vec3 rgb, float adjustment)',
            '{',
                // Algorithm from Chapter 16 of OpenGL Shading Language
                'const vec3 W = vec3(0.2125, 0.7154, 0.0721);',
                'vec3 intensity = vec3(dot(rgb, W));',
                'return mix(intensity, rgb, adjustment);',
            '}',

            'void main() {',
                'vec4 color = vec4(0.0);',
                'float total = 0.0;',
                'vec2 toCenter = center - vTextureCoord * texSize;',

                'float blurAmount = 0.5;', // include blur amount.
                'vec4 actual = texture2D(uSampler, vTextureCoord );',
                //'vec4 actual = vec4(1.0,1.0,1.0,1.0);',

                'float dist = distance( vTextureCoord, vec2( 0.5 ) );',

                // randomize the lookup values to hide the fixed number of samples
                'float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);',

                'for (float t = 0.0; t <= 20.0; t++) {',
                '   float percent = (t + offset) / 20.0;',
                '   float weight = 4.0 * (percent - percent * percent);',
                '   vec4 sample = texture2D(uSampler, vTextureCoord + toCenter * percent * strength / texSize);',

                    // switch to pre-multiplied alpha to correctly blur transparent images
                '   sample.rgb *= sample.a;',

                '   color += sample * weight;',
                '   total += weight;',
                '}',

                'color = color / total;',

                'float mixBlur = 0.03;', // the minimum amount of NON-blur to include ( show original image through blur )
                //'gl_FragColor = mix( actual, ( color / total ), 0.0 );',
                //'gl_FragColor = color;',
                'float distMix = smoothstep( 0.8, vignetteDarkness * 0.799, dist *( vignetteOffset + vignetteDarkness ) );',
                'gl_FragColor = mix( color, actual, max( mixBlur, distMix ) );',

                // shift and subtle distort

                'vec4 shift;',
                'float distMixInv = 1.0 - distMix;',
                'shift.r = texture2D(uSampler, vTextureCoord + ( red * distMixInv ) /texSize.xy ).r;',
                'shift.g = texture2D(uSampler, vTextureCoord + ( green * distMixInv ) /texSize.xy ).g;',
                'shift.b = texture2D(uSampler, vTextureCoord + ( blue * distMixInv ) /texSize.xy ).b;',
                'shift.a = texture2D(uSampler, vTextureCoord ).a;',

                'gl_FragColor = mix( gl_FragColor, shift, 0.3 );',


                'float feather = 0.005;',
                //0.8, feather * 0.799
                'float satMix = 1.0 - smoothstep( 0.5, feather * 0.499, dist * ( 1.2 + feather ) );',

                'satMix *= saturationConstant;',
                //'color.rgb = czm_saturation(color.rgb,saturation);',
                'gl_FragColor.rgb = czm_saturation(gl_FragColor.rgb, max( saturation * ( satMix + 1.0 ), 1.0 )  );',

                //'if( satMix == 1.0 ){',
                //'   gl_FragColor.rgb = vec3( 1.0 );',
                //'};',

                //switch back from pre-multiplied alpha
                'gl_FragColor.rgb /= gl_FragColor.a + 0.00001;',
            '}'
            ].join('\n'),
            // uniforms
            {
            center: {
                type: 'v2',
                value: {
                    x: 1900/2.0,
                    y: 1200/2.0
                }
            },

            strength: {
                type: '1f',
                value: 0.1
            },

            sine: {
                type: '1f',
                value: 0.3
            },

            cosine: {
                type: '1f',
                value: 0
            },

            red: {
                type: 'v2',
                value: {
                    x: 20,
                    y: 0.0
                }
            },

            green: {
                type: 'v2',
                value: {
                    x: 0.0,
                    y: 10.0
                }
            },

            blue: {
                type: 'v2',
                value: {
                    x: -30.0,
                    y: 10.0
                }
            },

            texSize: {
                type: 'v2',
                value: {
                    x: 1900.0,
                    y: 1200.0
                }
            },
//size of vignette shape

            vignetteOffset: {
                type: '1f',
                value: 0.9
            },

//hardness of vignette edge

            vignetteDarkness: {
                type: '1f',
                value: 0.0
            },

//global saturation

            saturation: {
                type: '1f',
                value: 0
            },

            saturationConstant: {
                type: '1f',
                value: 0.0
            }

        });
    };


    SpeedFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
    SpeedFilter.constructor = SpeedFilter;


    Object.defineProperties( SpeedFilter.prototype, {
        center: {
            get: function(){
                return this.uniforms.center.value
            },
            set: function( value ){
                this.uniforms.center.value = value;
            }
        },

        strength: {
            get: function(){
                return this.uniforms.strength.value;
            },
            set: function( value ){
                this.uniforms.strength.value = value;
            }
        },

        texSize: {
            get: function(){
                return this.uniforms.texSize.value;
            },
            set: function( value ){
                this.uniforms.texSize.value = value;
            }
        },

        vignetteDarkness: {
            get: function(){
                return this.uniforms.vignetteDarkness.value;
            },
            set: function( value ){
                this.uniforms.vignetteDarkness.value = value;
            }
        },
        
        vignetteOffset: {
            get: function(){
                return this.uniforms.vignetteOffset.value;
            },
            set: function( value ){
                this.uniforms.vignetteOffset.value = value;
            }
        },

        sine: {
            get: function(){
                return this.uniforms.sine.value;
            },
            set: function( value ){
                this.uniforms.sine.value = value;
            }
        },

        cosine: {
            get: function(){
                return this.uniforms.cosine.value;
            },
            set: function( value ){
                this.uniforms.cosine.value = value;
            }
        },

        red: {
            get: function(){
                return this.uniforms.red.value;
            },
            set: function( value ){
                this.uniforms.red.value = value;
            }
        },

        green: {
            get: function(){
                return this.uniforms.green.value;
            },
            set: function( value ){
                this.uniforms.green.value = value;
            }
        },

        blue: {
            get: function(){
                return this.uniforms.blue.value;
            },
            set: function( value ){
                this.uniforms.blue.value = value;
            }
        },

        saturation: {
            get: function(){
                return this.uniforms.saturation.value;
            },
            set: function( value ){
                this.uniforms.saturation.value = value;
            }
        },
        saturationConstant: {
            get: function(){
                return this.uniforms.saturationConstant.value;
            },
            set: function( value ){
                this.uniforms.saturationConstant.value = value;
            }
        }

    });


});
define('com/nebulon/app/screens/MainScreen',['require','exports','module','PIXI','com/fido/system/Device','com/nebulon/app/screens/Clouds','com/nebulon/app/screens/Stars','com/nebulon/app/screens/MaskyMask','com/fido/system/Ticker','./SuperFilter','./SpeedFilter'],function (require, exports, module) 
{
    var PIXI            = require('PIXI');
    var Device          = require('com/fido/system/Device');
    var Clouds          = require('com/nebulon/app/screens/Clouds');
    var Stars          = require('com/nebulon/app/screens/Stars');
    var MaskyMask          = require('com/nebulon/app/screens/MaskyMask');
    var Ticker          = require('com/fido/system/Ticker');
    var SuperFilter     = require('./SuperFilter');
    var SpeedFilter     = require('./SpeedFilter');

    var MainScreen = function(app)
    {
        this.app = app;

        PIXI.DisplayObjectContainer.call( this );

        this.clouds = new Clouds();
        this.stars = new Stars();
        
        this.addChild(this.clouds);  
        this.addChild(this.stars);  


        this.maskyMask = new MaskyMask();
        this.addChild(this.maskyMask);

        this.maskyMask.renderable = false;
        this.superFilter = new SuperFilter(this.maskyMask);


        //mask = this.maskyMask;
        this.interactiveChildren = false;
        this.hitArea = new PIXI.Rectangle(0,0, 1900, 1200);
        this.interactive = true;
        this.mousedown = this.touchstart = this.onDown.bind(this);
        this.mousemove = this.touchmove = this.onMove.bind(this);

        this.speedFilter = new SpeedFilter();
       if(!Device.instance.isMobile)
        {
            this.stars.filters = [this.speedFilter, this.superFilter];

        }
        else
        {
             this.stars.filters = [this.superFilter];
        }
  //      this.stars.filters = [this.speedFilter];
    };

    MainScreen.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

    MainScreen.prototype.onDown = function()
    {
        if(!this.maskyMask.isOpen)
        {
            this.maskyMask.open();

        }
        else
        {
            this.maskyMask.close();
        }
    }

    MainScreen.prototype.onMove = function(e)
    {
        var local = e.data.getLocalPosition(this);
        this.maskyMask.target.x = local.x - 1900/2;
        this.maskyMask.target.y = local.y - 1200/2;
    }

    MainScreen.prototype.onShow = function()
    {
        Ticker.instance.add(this.update, this);
    };

    MainScreen.prototype.onShown = function()
    {

    };

    MainScreen.prototype.update = function()
    {
        this.clouds.update(); 
        this.stars.update(); 
        this.maskyMask.update(); 
    };

    MainScreen.prototype.resize = function(w, h)
    {
        this.clouds.resize(w,h);
        this.stars.resize(w,h);     
        this.maskyMask.resize(w,h);
    };


    module.exports = MainScreen;

});

define('APP_root',['require','exports','module','PIXI','com/fido/app/App','com/fido/system/Ticker','com/fido/system/Device','com/fido/sound/SoundManager','com/nebulon/app/screens/LoaderScreen','com/nebulon/app/screens/MainScreen'],function (require, exports, module) 
{
    var PIXI = require("PIXI");
    window.PIXI = PIXI;

    var FidoApp             = require('com/fido/app/App');
    var Ticker              = require('com/fido/system/Ticker');
    var Device              = require('com/fido/system/Device');
    var SoundManager        = require('com/fido/sound/SoundManager');
    var LoaderScreen        = require('com/nebulon/app/screens/LoaderScreen');
    var MainScreen         = require('com/nebulon/app/screens/MainScreen');

    var Nebulon = function()
    {
        var options = {
         //   forceCanvas:true,
            orientationMode:2,
            //loaderScreen:LoaderScreen
        }

        FidoApp.call( this, options );

        this.safeSize = 
        {
            width : 1900,
            height : 1200
        };

        this.maxSize = 
        {
            width : 1900, 
            height : 1200
        };
        
       
        // Load what we need....
       // this.loader.addPixiAssets([ ASSET_URL + "img/game/main_info_panel.png",
         //                           ASSET_URL + "img/game/gameMenus.json",
           //                         ASSET_URL + "img/game/leaderboard.json" ]);

 //       this.loader.addCSS(ASSET_URL + 'css/fonts.css');



        // listen for when everything is up and running..
        this.onReady.add(this.onAppReady, this);

        // startup the app.. when it is ready to go onReady will be fired..
        this.startup();

      
//        this.onAppReady();
        this.ls = new LoaderScreen();
        this.screenManager.addScreen(this.ls, "loader");
        this.screenManager.gotoScreenByID("loader")

          var loader = new PIXI.loaders.Loader();
        loader.add('x', window.ASSET_URL + 'img/skyBG.jpg').
        add('x1', window.ASSET_URL + 'img/skyCloud1.png').
        add('xx', window.ASSET_URL + 'img/skyCloud2.png').
        add('x2', window.ASSET_URL + 'img/spaceBG.jpg').
        add('x3', window.ASSET_URL + 'img/sun_add.png').
        add('x4', window.ASSET_URL + 'img/spaceCloud1.png').
        add('x5', window.ASSET_URL + 'img/spaceCloud2.png').
        add('x6', window.ASSET_URL + 'img/spaceCloud3.png').
        add('x7', window.ASSET_URL + 'img/blob.png').
        load(this.onAppReady.bind(this))

    }

    Nebulon.prototype = Object.create( FidoApp.prototype );

    Nebulon.prototype.onAppReady = function()
    {
        window.renderer = this.renderer; 
     //   this.maskyMask = new MaskyMask();

       // this.bg = new PIXI.Sprite.fromImage(ASSET_URL + "img/spaceBG.jpg");
       // this.screenManager.container.addChild(this.bg);


    //    this.cloudsScreen = new CloudsScreen(this);
        this.starsScreen = new MainScreen(this);
//        this.gameScreen = new GameScreen(this);

        this.screenManager.addScreen(this.starsScreen, "title");
        

        this.screenManager.gotoScreenByID("title");

//        this.stage.addChild(this.maskyMask);

  //      this.cloudsScreen.mask = this.maskyMask;
        // SoundManager.music.play("music");



/*
        this.logo = new PIXI.Sprite.fromImage(window.ASSET_URL + 'img/goodboy.png');
        this.stage.addChild(this.logo)
        this.logo.interactive = true;
        this.logo.buttonMode= true;
        this.logo.click = function()
        {
            window.open('http://www.goodboydigital.com/', '_blank');
        }*/

        this.resize(this.w, this.h);
    }

    Nebulon.prototype.resize = function(w, h)
    {
        //todo... make this resize code more flexible!
        this.w = w;
        this.h = h;

       

        var scale = 1;

       if(this.isMobile)
       {
            if(window.devicePixelRatio)
            {
                scale = window.devicePixelRatio;
            }
            else
            {
                scale = window.screen.deviceXDPI / window.screen.logicalXDPI;
            }
       }

        var ratio = w/(this.safeSize.width) > h/(this.safeSize.height) ? w/(this.safeSize.width) : h/(this.safeSize.height);
        var w2 = Math.min(this.maxSize.width * ratio, w);
        var h2 = Math.min(this.maxSize.height * ratio, h);
      /*  
         if( this.logo)
        {
             this.logo.position.y = h - 40;
             this.logo.position.x = w2 * scale - 210 - 125 + 80// - 580;
        }
*/
        this.renderer.resize((w2 * scale) | 0, (h2 * scale) | 0);

        this.view.style.width = w2 + "px";
        this.view.style.height = h2 + "px";

        this.view.style.left = w/2 - (w2)/2 + "px";
        this.view.style.top = h/2 - (h2)/2 + "px";

        this.screenManager.resize(w2/ratio, h2/ratio);
       // this.screenManager.container.x = (1900/2 - w2/ratio/2)
      //  this.screenManager.container.y = (h2 * scale/2) - // (1200/2 - h2/ratio/2)
        this.screenManager.container.scale.set(ratio * scale);



    }

    module.exports = Nebulon;

});
// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){var l=Date.now(),m=l,g=0,n=Infinity,o=0,h=0,p=Infinity,q=0,r=0,s=0,f=document.createElement("div");f.id="stats";f.addEventListener("mousedown",function(b){b.preventDefault();t(++s%2)},!1);f.style.cssText="width:80px;opacity:0.9;cursor:pointer";var a=document.createElement("div");a.id="fps";a.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002";f.appendChild(a);var i=document.createElement("div");i.id="fpsText";i.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
i.innerHTML="FPS";a.appendChild(i);var c=document.createElement("div");c.id="fpsGraph";c.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff";for(a.appendChild(c);74>c.children.length;){var j=document.createElement("span");j.style.cssText="width:1px;height:30px;float:left;background-color:#113";c.appendChild(j)}var d=document.createElement("div");d.id="ms";d.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";f.appendChild(d);var k=document.createElement("div");
k.id="msText";k.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";k.innerHTML="MS";d.appendChild(k);var e=document.createElement("div");e.id="msGraph";e.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0";for(d.appendChild(e);74>e.children.length;)j=document.createElement("span"),j.style.cssText="width:1px;height:30px;float:left;background-color:#131",e.appendChild(j);var t=function(b){s=b;switch(s){case 0:a.style.display=
"block";d.style.display="none";break;case 1:a.style.display="none",d.style.display="block"}};return{REVISION:11,domElement:f,setMode:t,begin:function(){l=Date.now()},end:function(){var b=Date.now();g=b-l;n=Math.min(n,g);o=Math.max(o,g);k.textContent=g+" MS ("+n+"-"+o+")";var a=Math.min(30,30-30*(g/200));e.appendChild(e.firstChild).style.height=a+"px";r++;b>m+1E3&&(h=Math.round(1E3*r/(b-m)),p=Math.min(p,h),q=Math.max(q,h),i.textContent=h+" FPS ("+p+"-"+q+")",a=Math.min(30,30-30*(h/100)),c.appendChild(c.firstChild).style.height=
a+"px",m=b,r=0);return b},update:function(){l=this.end()}}};

define("stats", function(){});


window.ASSET_URL = "assets/"; 

config = {

    app:"com/fortieth/FortiethApp"

}

// make suyre console still works in ie9!
if(!window.console)
{
    window.console = {log:function(str){}}
}
if(!window.console.log)
{
    window.console.log = function(str){};
}

/*
    AND THE REST..
 */

require.config(
{
    baseUrl : "./js",
    paths : 
    {
       // 'PIXI'      : '../../../../../pixi.js/bin/pixi',
        'PIXI'      : 'libs/pixi.min',
        'TWEEN'     : 'libs/TweenLite.min',
        'EASEPACK'  : 'libs/EasePack.min',
        'CSSPACK'   :'libs/CSSPlugin.min',
        'HOWLER'    : 'libs/howler.min',
        'signals'   : '../node_modules/signals/dist/signals',
        'APP_root'  : "com/nebulon/app/NebulonApp",
        'stats'     : "libs/stats.min",
    }
});

function hasCanvasSupport()
{
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

window.DEVICE_SCALE = window.devicePixelRatio || 1;

if(!hasCanvasSupport())
{
    require(['com/fido/app/Fallback'], function()
    {
        var fallback = new Fallback(document.body);
    });
}
else
{
    require(['TWEEN', 'EASEPACK', 'CSSPACK', 'HOWLER', 'PIXI', "APP_root", "stats", 'com/fido/system/Device'],
        function (TweenLite, EasePack, CssPack, Howler, Pixi, App, stat, Device )
        {
            /*
            window.stats = new Stats();
            document.body.appendChild( window.stats.domElement );
            window.stats.domElement.style.position = "absolute";
            window.stats.domElement.style.top = "0px";
            window.stats.domElement.style.zIndex = 3;
            */

            var app = new App();
            window.app = app;

            var container = document.getElementById("container");
            container.appendChild(app.view);

            container.style.background = "black";
            
            app.view.style.position = "absolute";
            app.view.style.top = 0;
            app.view.style.left = 0;
               
            function resize()
            {
                var  container = document.getElementById("container");
                //var rect = container.getBoundingClientRect();

                if( Device.instance.iOS && Device.instance.iOS_version < 7 ){
                    console.log( "IOS 6" );
                }else{
                    window.scrollTo(0, 0);
                }

                app.resize(window.innerWidth, window.innerHeight)
            }

            window.addEventListener('resize', function()
            {
                setTimeout(resize, 100);
                setTimeout(resize, 200);
            });

            setTimeout(resize, 100);
            setTimeout(resize, 200);
        });
};
define("Boot", function(){});
