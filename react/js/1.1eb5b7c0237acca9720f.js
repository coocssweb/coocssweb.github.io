webpackJsonp([1],{290:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(5),l=t.n(a),o=t(2),i=t.n(o),c=t(8),s=t.n(c),r=t(4),u=t.n(r),d=t(3),f=t.n(d),m=t(315),p=(t.n(m),t(0)),g=t.n(p),h=t(1),v=(t.n(h),t(6)),E=(t.n(v),t(291)),k=t(109),x=function(e){function n(e){i()(this,n);var t=u()(this,(n.__proto__||l()(n)).call(this,e));return t.state={},t}return f()(n,e),s()(n,[{key:"componentWillUnmount",value:function(){this.onCloseLoading()}},{key:"onShowLoading",value:function(){var e=this;this.loadingRef||k.h.loading("加载中...",{duration:0},function(n){e.loadingRef=n})}},{key:"onCloseLoading",value:function(){this.loadingRef&&this.loadingRef.close(),this.loadingRef=null}},{key:"render",value:function(){var e=this;return g.a.createElement("div",{className:"demo demo--toast"},g.a.createElement("h1",{className:"demo-title"},"Toast 组件"),g.a.createElement("div",{className:"demo-description"},"Toast 组件的相关设置",g.a.createElement("br",null),"tip: 可以通过外部代码调用主动关闭（fn => ref），可以清除全部的toast（Toast.destroy）"),g.a.createElement("div",{className:"panel"},g.a.createElement("h2",{className:"panel-title"},"演示"),g.a.createElement("div",{className:"panel-content"},g.a.createElement("div",{className:"panel-line"},g.a.createElement(k.c,{onClick:function(){k.h.tip("打开提示框")}},"Toast.tip"),g.a.createElement(k.c,{onClick:function(){k.h.tip("打开提示框",{closable:!0})}},"可关闭")),g.a.createElement("div",{className:"panel-line"},g.a.createElement(k.c,{onClick:function(){e.loadingRef||k.h.loading("加载中...",{duration:0},function(n){e.loadingRef=n})}},"Toast.loading"),g.a.createElement(k.c,{onClick:function(){e.loadingRef&&e.loadingRef.close(),e.loadingRef=null}},"close左边的loading")))),g.a.createElement("div",{className:"panel"},g.a.createElement("h2",{className:"panel-title"},"代码展示"),g.a.createElement("div",{className:"panel-content"},g.a.createElement(E.a,null,"// Toast默认是单例的，可以调用Toast.destroy销毁全部Toast，下次打开的时候，会重新创建组件\n// Tip提示框\n<Button onClick={() => {\nToast.tip('打开提示框', {closable: true});\n}}>可关闭</Button>\n// loading加载框\n<Button onClick={this.onShowLoading.bind(this)}>Toast.loading</Button>\n<Button onClick={this.onCloseLoading.bind(this)}>close左边的loading</Button>"))),g.a.createElement("div",{className:"panel"},g.a.createElement("h2",{className:"panel-title"},"属性"),g.a.createElement("div",{className:"panel-content"})))}}]),n}(p.Component);n.default=x},291:function(e,n,t){"use strict";var a=t(35),l=t.n(a),o=t(294),i=t.n(o),c=t(0),s=t.n(c),r=t(65),u=t(66),d=i()(["\n  font-family: sans-serif;\n  text-align: center;\n  padding: 10px;\n  background-color: rgb(42, 39, 52);\n  max-width: 800px;\n"],["\n  font-family: sans-serif;\n  text-align: center;\n  padding: 10px;\n  background-color: rgb(42, 39, 52);\n  max-width: 800px;\n"]),f=i()(["\n  text-align: left;\n  margin: 2px 0;\n  line-height: 1.3;\n"],["\n  text-align: left;\n  margin: 2px 0;\n  line-height: 1.3;\n"]),m=i()(["\n  display: inline-block;\n  width: 2em;\n  user-select: none;\n  opacity: 0.3;\n  color: #fff;\n"],["\n  display: inline-block;\n  width: 2em;\n  user-select: none;\n  opacity: 0.3;\n  color: #fff;\n"]),p=u.default.div(d),g=u.default.pre(f),h=u.default.span(m);n.a=function(e){return s.a.createElement(p,null,s.a.createElement(r.default,l()({},r.defaultProps,{code:e.children,language:"jsx"}),function(e){var n=e.className,t=e.style,a=e.tokens,l=e.getLineProps,o=e.getTokenProps;return s.a.createElement("div",{className:n,style:t},a.map(function(e,n){return s.a.createElement(g,l({line:e,key:n}),s.a.createElement(h,null,n+1),e.map(function(e,n){return s.a.createElement("span",o({token:e,key:n}))}))}))}))}},292:function(e,n,t){e.exports={default:t(295),__esModule:!0}},293:function(e,n,t){e.exports={default:t(296),__esModule:!0}},294:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var l=t(292),o=a(l),i=t(293),c=a(i);n.default=function(e,n){return(0,c.default)((0,o.default)(e,{raw:{value:(0,c.default)(n)}}))}},295:function(e,n,t){t(297);var a=t(9).Object;e.exports=function(e,n){return a.defineProperties(e,n)}},296:function(e,n,t){t(298),e.exports=t(9).Object.freeze},297:function(e,n,t){var a=t(12);a(a.S+a.F*!t(17),"Object",{defineProperties:t(111)})},298:function(e,n,t){var a=t(18),l=t(110).onFreeze;t(112)("freeze",function(e){return function(n){return e&&a(n)?e(l(n)):n}})},315:function(e,n){}});