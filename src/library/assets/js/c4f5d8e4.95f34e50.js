"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[2634],{

/***/ 5307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(2477);
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(3897);
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(9091);
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(6405);
;// ./src/components/HomepageFeatures/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"features":"features_t9lD","featureSvg":"featureSvg_GfXr"});
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9375);
;// ./src/components/HomepageFeatures/index.js
const FeatureList=[{title:'Open Source',Svg:(__webpack_require__(6129)/* ["default"] */ .A),description:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Hush Line's source code is available on GitHub for transparency and verifiability."})},{title:'End-to-End Encrypted',Svg:(__webpack_require__(6337)/* ["default"] */ .A),description:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Hush Line uses OpenPGP.js to encrypt your messages in the browser before they are sent to our servers."})},{title:'Anonymity with Tor',Svg:(__webpack_require__(8326)/* ["default"] */ .A),description:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Hush Line can be used entirely over the Tor network to further protect your identity."})}];function Feature({Svg,title,description}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('col col--4'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text--center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Svg,{className:styles_module.featureSvg,role:"img"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text--center padding-horiz--md",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:description})]})]});}function HomepageFeatures(){return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.features,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:FeatureList.map((props,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Feature,{...props},idx))})})});}
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(5870);
;// ./src/pages/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"heroBanner":"heroBanner_qdFl","buttons":"buttons_AeoN"});
;// ./src/pages/index.js
function HomepageHeader(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:(0,clsx/* default */.A)('hero hero--primary',index_module.heroBanner),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",className:"hero__title",children:siteConfig.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"hero__subtitle",children:siteConfig.tagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:index_module.buttons,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--secondary button--lg",to:"https://tips.hushline.app/register",children:"Create a Hush Line Account"})})]})});}function Home(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:`${siteConfig.title} Library`,description:"Hush Line Documentation and Blog",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsx)("main",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageFeatures,{})})]});}

/***/ },

/***/ 6129
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1671);
var _g, _defs;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SvgGit = ({
  title,
  titleId,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 200,
  height: 200,
  fill: "none",
  viewBox: "0 0 200 200",
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
  id: titleId
}, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  clipPath: "url(#a)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 100,
  cy: 100,
  r: 60,
  fill: "#F0EAF6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#fff",
  stroke: "#6421A6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.833,
  d: "M117 125.5a8.5 8.5 0 1 0-.001-17.001A8.5 8.5 0 0 0 117 125.5M83 91.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  stroke: "#6421A6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.833,
  d: "M102.833 83h8.5A5.665 5.665 0 0 1 117 88.667V108.5M83 91.5v34"
}))), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#fff",
  d: "M40 40h120v120H40z"
})))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgGit);

/***/ },

/***/ 6337
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1671);
var _g, _defs;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SvgSecurity = ({
  title,
  titleId,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 200,
  height: 200,
  fill: "none",
  viewBox: "0 0 200 200",
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
  id: titleId
}, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  clipPath: "url(#a)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 100,
  cy: 100,
  r: 60,
  fill: "#F0EAF6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#fff",
  stroke: "#6421A6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3.333,
  d: "M116.667 95.833h-35a5 5 0 0 0-5 5v17.5a5 5 0 0 0 5 5h35a5 5 0 0 0 5-5v-17.5a5 5 0 0 0-5-5"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  stroke: "#6421A6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3.333,
  d: "M86.667 95.833v-10a12.5 12.5 0 1 1 25 0v10"
}))), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#fff",
  d: "M40 40h120v120H40z"
})))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSecurity);

/***/ },

/***/ 8326
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1671);
var _g, _defs;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SvgTor = ({
  title,
  titleId,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 200,
  height: 200,
  fill: "none",
  viewBox: "0 0 200 200",
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
  id: titleId
}, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  clipPath: "url(#a)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 100,
  cy: 100,
  r: 60,
  fill: "#F0EAF6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#fff",
  stroke: "#6421A6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "M114.142 89.191c-7.811-7.81-20.474-7.81-28.284 0s-7.81 20.474 0 28.285c7.81 7.81 20.473 7.81 28.284 0 7.81-7.811 7.81-20.474 0-28.285"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  stroke: "#6421A6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "M100 68.18v55.153M106.667 71.514S101.667 75 100 83.56M110 78.18s-6.667 0-10 5.38"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#6421A6",
  fillRule: "evenodd",
  d: "M101.5 88.576c-4.28-.433-8.71.99-11.989 4.269-5.793 5.792-5.793 15.184 0 20.977a14.8 14.8 0 0 0 11.989 4.269v-3.019a11.82 11.82 0 0 1-9.868-3.371c-4.62-4.621-4.62-12.114 0-16.735a11.81 11.81 0 0 1 9.868-3.371zm0 6.729a8.167 8.167 0 1 0 0 16.057v-3.084a5.167 5.167 0 1 1 0-9.89z",
  clipRule: "evenodd"
}))), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#fff",
  d: "M40 40h120v120H40z"
})))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTor);

/***/ }

}]);