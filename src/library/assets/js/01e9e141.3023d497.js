"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[8919],{

/***/ 3388
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/crypto-modernization-whitepaper","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2026-05-28-crypto-modernization-whitepaper/index.md","source":"@site/blog/2026-05-28-crypto-modernization-whitepaper/index.md","title":"Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure","description":"Hush Line exists for moments when a person needs to disclose sensitive information without being exposed by the tool that was supposed to protect them. That changes how crypto modernization has to be designed and described. The goal is not to chase new primitives for their own sake. The goal is to preserve the whistleblower\'s path to a trusted recipient while reducing the harm caused by database exposure, key-management mistakes, migration failure, or unclear security claims.","date":"2026-05-28T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"},{"inline":false,"label":"Whistleblowing","permalink":"/library/blog/tags/whistleblowing","description":"Whistleblowing articles"}],"readingTime":15.77,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"crypto-modernization-whitepaper","title":"Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure","subtitle":"How Hush Line modernized encrypted data handling without weakening usability, anonymity, or migration safety.","tags":["hushline","whistleblowing"]},"unlisted":false,"prevItem":{"title":"Among 500 Top Domains, 0% of Assessed Contact Forms Met Our Full Security Standard","permalink":"/library/blog/contact-form-security-study-2026"},"nextItem":{"title":"How Law Firms Can Handle Sensitive Intake Without Losing Track","permalink":"/library/blog/how-law-firms-can-handle-sensitive-intake-without-losing-track"}}');

/***/ },

/***/ 4960
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_05_28_crypto_modernization_whitepaper_index_md_82a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_05_28_crypto_modernization_whitepaper_index_md_82a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3388);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'crypto-modernization-whitepaper',
	title: 'Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure',
	subtitle: 'How Hush Line modernized encrypted data handling without weakening usability, anonymity, or migration safety.',
	tags: [
		'hushline',
		'whistleblowing'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line exists for moments when a person needs to disclose sensitive information without being exposed by the tool that was supposed to protect them. That changes how crypto modernization has to be designed and described. The goal is not to chase new primitives for their own sake. The goal is to preserve the whistleblower's path to a trusted recipient while reducing the harm caused by database exposure, key-management mistakes, migration failure, or unclear security claims."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This whitepaper updates the May 28, 2026 crypto modernization paper. The original version correctly separated shipped work from planned work at that time, but it is now out of date. The current implementation completes the encrypted-field modernization scope: Hush Line has a production-capable AES-256-GCM encrypted-field envelope for new writes, a code-owned AAD contract, dual-read compatibility, schema readiness checks, migration tooling, rehearsal evidence, release gates, and test coverage."
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

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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


/***/ }

}]);