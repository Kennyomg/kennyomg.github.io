(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{13:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e(39),i=e(20),c=e(21);function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(){var n=l(["\n        .scanner-booth {\n          padding: 0px;\n          background-color: transparent;\n        }\n\n        #videoElement {\n          display: block;\n          margin: 0 auto;\n        \theight: 80vh;\n        \tbackground: none;\n          pointer-events:none;\n          max-width: 100vw;\n        }\n\n        .capture-button {\n          margin-top: 15px;\n          cursor: pointer;\n        }\n      "]);return u=function(){return n},n}function f(){var n=l(['\n    <section class="scanner-booth">\n      <input id="search-card" placeholder="Search card"></input>\n      <h1 id="card-title"></h1>\n      <video id="videoElement"></video>\n      <div id="capture" class="circle capture-button"></div>\n    </section>\n    ']);return f=function(){return n},n}function l(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function s(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function p(n,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function d(n){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function b(n,t){return(b=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var y=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var e,a,l;return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&b(n,t)}(t,i["a"]),e=t,l=[{key:"styles",get:function(){return[c.a,Object(o.b)(u())]}}],(a=[{key:"firstUpdated",value:function(){var n=this,t=this.shadowRoot.getElementById("videoElement"),e=this.shadowRoot.getElementById("capture");navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then(function(o){t.srcObject=o,t.play(),console.log("Webcam started"),e.addEventListener("click",function(){var e=document.createElement("canvas");e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0);var o=new r.TesseractWorker;r.utils.loadLang({langs:"eng",langPath:o.options.langPath}).then(function(){o.recognize(e.toDataURL("img/jpg")).progress(function(n){return console.log(n)}).catch(function(n){return console.error(n)}).then(function(t){o.terminate(),console.log(t.text),n.shadowRoot.getElementById("card-title").innerHTML=t.text}).finally(function(n){return console.log(n)})})})}).catch(function(n){console.log("Something went wrong!")})}},{key:"render",value:function(){return Object(o.c)(f())}}])&&s(e.prototype,a),l&&s(e,l),t}();window.customElements.define("my-scanner",y)},20:function(n,t,e){"use strict";e.d(t,"a",function(){return f});var o=e(0);function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function c(n,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function a(n){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n,t){return(u=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var f=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,a(t).apply(this,arguments))}var e,r,f;return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&u(n,t)}(t,o["a"]),e=t,f=[{key:"properties",get:function(){return{active:{type:Boolean}}}}],(r=[{key:"shouldUpdate",value:function(){return this.active}}])&&i(e.prototype,r),f&&i(e,f),t}()},21:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var o=e(0);function r(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(["\n  :host {\n    display: block;\n    box-sizing: border-box;\n  }\n\n  section {\n    padding: 24px;\n    background: var(--app-section-odd-color);\n  }\n\n  section > * {\n    max-width: 600px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  section:nth-of-type(even) {\n    background: var(--app-section-even-color);\n  }\n\n  h2 {\n    font-size: 24px;\n    text-align: center;\n    color: var(--app-dark-text-color);\n  }\n\n  @media (min-width: 460px) {\n    h2 {\n      font-size: 36px;\n    }\n  }\n\n  .circle {\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 50%;\n    background: var(--app-primary-color);\n    color: var(--app-light-text-color);\n    font-size: 30px;\n    line-height: 64px;\n  }\n"]);return r=function(){return n},n}var i=Object(o.b)(r())}}]);