"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[859],{

/***/ 1535
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/why-a-signal-tip-line-isnt-enough","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-02-16-why-a-signal-tip-line-isnt-enough/index.md","source":"@site/blog/2025-02-16-why-a-signal-tip-line-isnt-enough/index.md","title":"Why A Signal Tip Line Isn\'t Enough","description":"Encryption settings wireframe","date":"2025-02-16T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"},{"inline":false,"label":"Signal","permalink":"/library/blog/tags/signal","description":"Signal articles"}],"readingTime":3.895,"hasTruncateMarker":true,"authors":[{"name":"Glenn Sorrentino","title":"Executive Director, Science & Design","url":"https://scidsg.org","page":{"permalink":"/library/blog/authors/gsorrentino"},"socials":{"github":"https://github.com/glenn-sorrentino"},"imageURL":"/library/img/glenn.jpg","key":"gsorrentino"}],"frontMatter":{"slug":"why-a-signal-tip-line-isnt-enough","title":"Why A Signal Tip Line Isn\'t Enough","subtitle":"Why Signal as a catch-all isn’t enough, and a data-informed way to think about your solution set","authors":["gsorrentino"],"tags":["hushline","signal"],"image":"img/cover.png"},"unlisted":false,"prevItem":{"title":"How to Verify an Address on Hush Line","permalink":"/library/blog/how-to-verify-an-address-on-hush-line"}}');

/***/ },

/***/ 8396
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_02_16_why_a_signal_tip_line_isnt_enough_index_md_332_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_02_16_why_a_signal_tip_line_isnt_enough_index_md_332_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1535);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9375);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9664);


const frontMatter = {
	slug: 'why-a-signal-tip-line-isnt-enough',
	title: 'Why A Signal Tip Line Isn\'t Enough',
	subtitle: 'Why Signal as a catch-all isn’t enough, and a data-informed way to think about your solution set',
	authors: [
		'gsorrentino'
	],
	tags: [
		'hushline',
		'signal'
	],
	image: 'img/cover.png'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Encryption settings wireframe",
        src: (__webpack_require__(9788)/* ["default"] */ .A) + "",
        width: "3834",
        height: "1880"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I love Signal. I was almost their first full-time designer when the team was only four people with a physical office back in the Mission in San Francisco. I turned the offer down because I was too junior in my career to feel like I could be as effective as I knew I could be with more time at the Big Tech company I worked for..."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 9664
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1671);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ },

/***/ 9788
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-45d39fa572b924dfb0d5ac8ba038a159.png");

/***/ }

}]);