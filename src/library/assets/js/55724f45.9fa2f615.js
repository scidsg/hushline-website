"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[9593],{

/***/ 7844
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-d210474abd20ba0691c4b4b6ddad1f70.png");

/***/ },

/***/ 8763
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/build-a-qubes-laptop-for-under-two-hundred-dollars","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-08-28-build-a-qubes-laptop-for-under-two-hundred-dollars/index.md","source":"@site/blog/2025-08-28-build-a-qubes-laptop-for-under-two-hundred-dollars/index.md","title":"Build One of The Highest Security Laptops for Under $200 with Qubes OS","description":"Qubes OS Cover","date":"2025-08-28T00:00:00.000Z","tags":[{"inline":false,"label":"Qubes OS","permalink":"/library/blog/tags/qubes","description":"Qubes OS articles"}],"readingTime":3.04,"hasTruncateMarker":true,"authors":[{"name":"Glenn Sorrentino","title":"Executive Director, Science & Design","url":"https://scidsg.org","page":{"permalink":"/library/blog/authors/gsorrentino"},"socials":{"github":"https://github.com/glenn-sorrentino"},"imageURL":"/library/img/glenn.jpg","key":"gsorrentino"}],"frontMatter":{"slug":"build-a-qubes-laptop-for-under-two-hundred-dollars","title":"Build One of The Highest Security Laptops for Under $200 with Qubes OS","subtitle":"Using low-cost, compatible, recycled hardware makes using Qubes accessible for anyone.","authors":["gsorrentino"],"tags":["qubes"],"image":"img/cover.png"},"unlisted":false,"prevItem":{"title":"Conversation with a Whistleblower: The Tech Side of Escaping a Crypto Scam Compound in Laos","permalink":"/library/blog/usability-gap-whistleblowing-tech-laos"},"nextItem":{"title":"How To Blow The Whistle Without Losing Your Career","permalink":"/library/blog/how-to-blow-the-whistle-without-losing-your-career"}}');

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

/***/ 9826
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_08_28_build_a_qubes_laptop_for_under_two_hundred_dollars_index_md_d62_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_08_28_build_a_qubes_laptop_for_under_two_hundred_dollars_index_md_d62_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8763);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9375);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9664);


const frontMatter = {
	slug: 'build-a-qubes-laptop-for-under-two-hundred-dollars',
	title: 'Build One of The Highest Security Laptops for Under $200 with Qubes OS',
	subtitle: 'Using low-cost, compatible, recycled hardware makes using Qubes accessible for anyone.',
	authors: [
		'gsorrentino'
	],
	tags: [
		'qubes'
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
        alt: "Qubes OS Cover",
        src: (__webpack_require__(7844)/* ["default"] */ .A) + "",
        width: "1936",
        height: "1119"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Qubes OS is widely regarded as one of the most secure operating systems available. Its strength comes from virtualization: instead of one system running everything, Qubes divides your tasks into isolated virtual machines."
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



/***/ }

}]);