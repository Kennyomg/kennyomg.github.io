(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{18:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e(20),i=e(4),c=e(2),u=["Box1","Box2"];e(28);function a(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){f(n,t,e[t])})}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var p={collections:[]},s=function(n,t){switch(t.type){case"CREATE_COLLECTION":var e=t.name;return[].concat(a(n),[e]);default:return n}},y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COLLECTIONS":return l({},n,{collections:t.collections});case"CREATE_COLLECTION":return l({},n,{collections:s(n.collections,t)});case"DELETE_COLLECTION":case"EDIT_COLLECTION":case"CREATE_FAILURE":return l({},n,{error:t.error});default:return n}},b=e(21),h=e(22);e(5);function d(n){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function v(){var n=O(["<li>","</li>"]);return v=function(){return n},n}function g(){var n=O(["\n      <section>\n        <h2>List of collections</h2>\n        <ul>\n          ","\n        </ul>\n      </section>\n    "]);return g=function(){return n},n}function m(){var n=O(["\n        button {\n          border: 2px solid var(--app-dark-text-color);\n          border-radius: 3px;\n          padding: 8px 16px;\n        }\n\n        button:hover {\n          border-color: var(--app-primary-color);\n          color: var(--app-primary-color);\n        }\n\n        .cart,\n        .cart svg {\n          fill: var(--app-primary-color);\n          width: 64px;\n          height: 64px;\n        }\n\n        .circle.small {\n          margin-top: -72px;\n          width: 28px;\n          height: 28px;\n          font-size: 16px;\n          font-weight: bold;\n          line-height: 30px;\n        }\n      "]);return m=function(){return n},n}function O(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function w(n,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function j(n){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function x(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _(n,t,e){return t&&x(n.prototype,t),e&&x(n,e),n}function E(n,t){return(E=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/c.a.addReducers({collection:y});var k=function(n){function t(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=w(this,j(t).call(this)))._collection_list=[],n}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&E(n,t)}(t,Object(i["a"])(c["a"])(o["a"])),_(t,null,[{key:"properties",get:function(){return{_collection_list:{type:Array},_error:{type:String}}}},{key:"styles",get:function(){return[b.a,h.a,Object(r.b)(m())]}}]),_(t,[{key:"firstUpdated",value:function(){c.a.dispatch(function(n){n({type:"GET_COLLECTIONS",collections:u})})}},{key:"render",value:function(){return Object(r.c)(g(),this._collection_list.map(function(n){return Object(r.c)(v(),n)}))}},{key:"_checkoutButtonClicked",value:function(){c.a.dispatch(checkout())}},{key:"stateChanged",value:function(n){this._collection_list=n.collection.collections,this._error=n.collection.error}}]),t}();window.customElements.define("my-collection-list",k)},20:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var r=e(0);function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function c(n,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var l=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,u(t).apply(this,arguments))}var e,o,l;return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(t,r["a"]),e=t,l=[{key:"properties",get:function(){return{active:{type:Boolean}}}}],(o=[{key:"shouldUpdate",value:function(){return this.active}}])&&i(e.prototype,o),l&&i(e,l),t}()},21:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var r=e(0);function o(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(["\n  :host {\n    display: block;\n    box-sizing: border-box;\n  }\n\n  section {\n    padding: 24px;\n    background: var(--app-section-odd-color);\n  }\n\n  section > * {\n    max-width: 600px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  section:nth-of-type(even) {\n    background: var(--app-section-even-color);\n  }\n\n  h2 {\n    font-size: 24px;\n    text-align: center;\n    color: var(--app-dark-text-color);\n  }\n\n  @media (min-width: 460px) {\n    h2 {\n      font-size: 36px;\n    }\n  }\n\n  .circle {\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 50%;\n    background: var(--app-primary-color);\n    color: var(--app-light-text-color);\n    font-size: 30px;\n    line-height: 64px;\n  }\n\n  #videoElement {\n    display: block;\n    margin: 0 auto;\n  \theight: 80vh;\n  \tbackground-color: #666;\n    pointer-events:none;\n  }\n\n  .capture-button {\n    margin-top: 15px;\n    cursor: pointer;\n  }\n"]);return o=function(){return n},n}var i=Object(r.b)(o())},22:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var r=e(0);function o(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(["\n  button {\n    font-size: inherit;\n    vertical-align: middle;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n  }\n\n  button:hover svg {\n    fill: var(--app-primary-color);\n  }\n"]);return o=function(){return n},n}var i=Object(r.b)(o())},28:function(n,t,e){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,t){return n===t}e.d(t,"a",function(){return i});var i=function(n){for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];var c=0,u=o.pop(),a=function(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every(function(n){return"function"==typeof n})){var e=t.map(function(n){return r(n)}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+e+"]")}return t}(o),l=n.apply(void 0,[function(){return c++,u.apply(null,arguments)}].concat(e)),f=n(function(){for(var n=[],t=a.length,e=0;e<t;e++)n.push(a[e].apply(null,arguments));return l.apply(null,n)});return f.resultFunc=u,f.dependencies=a,f.recomputations=function(){return c},f.resetRecomputations=function(){return c=0},f}}(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,e=null,r=null;return function(){return function(n,t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!n(t[o],e[o]))return!1;return!0}(t,e,arguments)||(r=n.apply(null,arguments)),e=arguments,r}})}}]);