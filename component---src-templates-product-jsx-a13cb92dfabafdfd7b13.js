(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{U1il:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("ntAx"),c=t("rF1m"),i=t.n(c);a.a=function(e){var a=e.children;return l.a.createElement("div",{className:i.a.Footer},l.a.createElement(r.a,null,l.a.createElement("div",{className:i.a.Inner},a)))}},ntAx:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("oRNG"),c=t.n(r);a.a=function(e){var a=e.children;return l.a.createElement("div",{className:c.a.Layout},a)}},zIa3:function(e,a,t){"use strict";t.r(a);t("KKXr"),t("f3/d");var n=t("q1tI"),l=t.n(n),r=t("ntAx"),c=t("U1il"),i=t("VnS3"),m=t.n(i),s=function(e){var a=e.name,t=e.image;return l.a.createElement("div",{className:m.a.Icon},l.a.createElement("img",{src:t,alt:a}))},u=t("FuRl"),o=t.n(u),d=function(e){var a=e.images,t=Object(n.useState)(0),r=t[0],c=t[1],i=function(e){return function(){return c(e>=0&&e<a.length?e:r)}},m={visibility:0!==r?"visible":"hidden"},s={visibility:r<a.length-1?"visible":"hidden"};return l.a.createElement("div",{className:o.a.Carousel},l.a.createElement("div",{className:o.a.ImageHolder},a.map((function(e,a){var t=e.address,n=e.alt;return l.a.createElement("div",{className:o.a.Image+" "+(a===r?o.a.Visible:o.a.Invisible)},l.a.createElement("img",{src:t,alt:n}))})),l.a.createElement("div",{className:o.a.Left,onClick:i(r-1),style:m}),l.a.createElement("div",{className:o.a.Right,onClick:i(r+1),style:s})),l.a.createElement("div",{className:o.a.Controls},a.map((function(e,a){return l.a.createElement("div",{className:o.a.Bar+" "+(a===r?o.a.Filled:null),onClick:i(a)})}))))};a.default=function(e){var a=e.pageContext,t=a.product,n=a.apiURL,i=a.companyDetails,m=i.phone,u=i.name,o=i.email,v=i.address,E=i.logo.publicURL;return l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"product"},l.a.createElement("div",{className:"container"},l.a.createElement(r.a,null,l.a.createElement("h2",null,t.name),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("div",{className:"perks"},l.a.createElement(s,{name:t.product_category.name,image:n+"/"+t.product_category.icon.url})),l.a.createElement("div",{className:"slideshow"},l.a.createElement(d,{images:t.media.map((function(e){var a=e.name,t=e.url;return{address:n+"/"+t,alt:a}}))})),l.a.createElement("div",{className:"description"},t.description)))))),l.a.createElement("div",{className:"footer"},l.a.createElement(c.a,null,l.a.createElement("img",{src:E,alt:u}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h2",null,u)),v.split(", ").map((function(e){return l.a.createElement("li",null,e)})),l.a.createElement("li",null,m),l.a.createElement("li",null,o)))))}}}]);
//# sourceMappingURL=component---src-templates-product-jsx-a13cb92dfabafdfd7b13.js.map