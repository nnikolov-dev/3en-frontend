(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Dtc0:function(e,t,n){"use strict";n.r(t);n("KKXr"),n("f3/d");var i=n("q1tI"),a=n.n(i),r=n("sjX0"),o=n.n(r),l=function(e){var t=e.children;return a.a.createElement("div",{className:o.a.Header},a.a.createElement("div",{className:o.a.Inner},a.a.createElement("div",{className:o.a.Logo},t)),a.a.createElement("div",{className:o.a.Lines}))},s=n("ntAx"),c=n("NGwb"),u=n.n(c),f=n("+ZDr");n("lw3w"),n("emEt").default.enqueue,a.a.createContext({});var p=n("3rN0"),m=n.n(p),d=function(e){var t=e.children,n=e.href;return a.a.createElement("div",{className:m.a.Button,onClick:function(e){e.preventDefault(),Object(f.navigate)(n||"#!")}},t)},h=n("vyE0"),v=n.n(h),y=function(e){var t=e.slug,n=e.name,i=e.description,r=e.image;return a.a.createElement("div",{className:v.a.Product},a.a.createElement("div",{className:v.a.ImageHolder},a.a.createElement(u.a,{animateIn:"fadeIn",animateOnce:!0},a.a.createElement("div",{className:v.a.Image},a.a.createElement("img",{src:r,alt:n})),a.a.createElement("div",{className:v.a.Shadow}),a.a.createElement("div",{className:v.a.Shadow}))),a.a.createElement("div",{className:v.a.Description},a.a.createElement(u.a,{animateIn:"fadeIn",animateOnce:!0},a.a.createElement("p",null,i)),a.a.createElement(u.a,{animateIn:"fadeInUp",animateOnce:!0},a.a.createElement(d,{href:"/product/"+t},"More"))))},b=n("U1il");n("8nsx"),n("Szx7");n.d(t,"localQuery",(function(){return g}));t.default=function(e){var t=e.data,n=t.strapiCompanyDetails,i=n.phone,r=n.name,o=n.email,c=n.address,u=n.about,f=n.logo.publicURL,p=t.allStrapiProduct.edges,m=t.sitePlugin.pluginOptions.apiURL;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"main-content"},a.a.createElement(l,null,a.a.createElement("img",{src:f,alt:r})),a.a.createElement("section",{className:"about"},a.a.createElement(s.a,null,a.a.createElement("h1",null,u))),a.a.createElement("section",{className:"products"},a.a.createElement(s.a,null,p.map((function(e){var t=e.node;return a.a.createElement(y,{slug:t.slug,name:t.name,description:t.description,image:""+m+t.media[0].url})}))))),a.a.createElement("div",{className:"footer"},a.a.createElement(b.a,null,a.a.createElement("img",{src:f,alt:r}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("h2",null,r)),c.split(", ").map((function(e){return a.a.createElement("li",null,e)})),a.a.createElement("li",null,i),a.a.createElement("li",null,o)))))};var g="3538761124"},NGwb:function(e,t,n){"use strict";n("91GP"),n("2Spj"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(e,t,n){for(var i=!0;i;){var a=e,r=t,o=n;i=!1,null===a&&(a=Function.prototype);var l=Object.getOwnPropertyDescriptor(a,r);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(o)}var c=Object.getPrototypeOf(a);if(null===c)return;e=c,t=r,n=o,i=!0,l=c=void 0}};function r(e){return e&&e.__esModule?e:{default:e}}var o=n("q1tI"),l=r(o),s=r(n("hKI/")),c=r(n("17x9")),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,s.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout((function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return l.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(o.Component);t.default=u,u.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},u.propTypes={animateIn:c.default.string,animateOut:c.default.string,offset:c.default.number,duration:c.default.number,delay:c.default.number,initiallyVisible:c.default.bool,animateOnce:c.default.bool,style:c.default.object,scrollableParentSelector:c.default.string,className:c.default.string,animatePreScroll:c.default.bool},e.exports=t.default},U1il:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=n("ntAx"),o=n("rF1m"),l=n.n(o);t.a=function(e){var t=e.children;return a.a.createElement("div",{className:l.a.Footer},a.a.createElement(r.a,null,a.a.createElement("div",{className:l.a.Inner},t)))}},"hKI/":function(e,t,n){(function(t){n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt");var i="Expected a function",a=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),d=Object.prototype.toString,h=Math.max,v=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var a,r,o,l,s,c,u=0,f=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function d(t){var n=a,i=r;return a=r=void 0,u=t,l=e.apply(i,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=o}function E(){var e=y();if(b(e))return S(e);s=setTimeout(E,function(e){var n=t-(e-c);return p?v(n,o-(e-u)):n}(e))}function S(e){return s=void 0,m&&a?d(e):(a=r=void 0,l)}function O(){var e=y(),n=b(e);if(a=arguments,r=this,c=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(E,t),f?d(e):l}(c);if(p)return s=setTimeout(E,t),d(c)}return void 0===s&&(s=setTimeout(E,t)),l}return t=w(t)||0,g(n)&&(f=!!n.leading,o=(p="maxWait"in n)?h(w(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==s&&clearTimeout(s),u=0,a=c=r=s=void 0},O.flush=function(){return void 0===s?l:S(y())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==r}(e))return a;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=s.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):l.test(e)?a:+e}e.exports=function(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:a,maxWait:t,trailing:r})}}).call(this,n("yLpj"))},lw3w:function(e,t,n){var i;e.exports=(i=n("rzlk"))&&i.default||i},ntAx:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=n("oRNG"),o=n.n(r);t.a=function(e){var t=e.children;return a.a.createElement("div",{className:o.a.Layout},t)}},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var i=n("q1tI"),a=n.n(i),r=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-jsx-86a7435b4bde3ab75629.js.map