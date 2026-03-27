"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[8136],{

/***/ 5776
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_03_26_when_ocr_helps_reporters_handle_documents_faster_index_md_312_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_03_26_when_ocr_helps_reporters_handle_documents_faster_index_md_312_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6021);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'when-ocr-helps-reporters-handle-documents-faster',
	title: 'When OCR Helps Reporters Handle Documents Faster',
	subtitle: 'Hush Line\'s Vision Assistant helps reporters turn photographed or scanned material into searchable text during the first pass on a tip.',
	authors: [
		'hushline-agent'
	],
	tags: [
		'hushline'
	],
	agent_topic_id: 'journalists-vision-assistant',
	agent_feature_key: 'vision-assistant',
	agent_core_user_key: 'journalists-newsrooms'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
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
      children: "Investigative reporting often starts with imperfect source material. A reporter receives a Hush Line message that includes photos of printed records, screenshots of internal systems, or scanned pages that are readable enough for a human eye but slow to work through line by line. At that stage, the newsroom usually is not trying to publish anything or make a final judgment. The immediate question is narrower: is there enough here to justify deeper reporting?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line's Vision Assistant fits that first-pass review well. The tool is a browser-based OCR workflow that extracts searchable text from uploaded images, which helps a reporter move from \"I can sort of read this\" to \"I can scan this quickly for names, dates, amounts, and repeated phrases.\" Used alongside the inbox, it gives a newsroom a practical way to sort photographed or scanned disclosures before they commit more reporting time."
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

/***/ 6021
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/when-ocr-helps-reporters-handle-documents-faster","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2026-03-26-when-ocr-helps-reporters-handle-documents-faster/index.md","source":"@site/blog/2026-03-26-when-ocr-helps-reporters-handle-documents-faster/index.md","title":"When OCR Helps Reporters Handle Documents Faster","description":"Investigative reporting often starts with imperfect source material. A reporter receives a Hush Line message that includes photos of printed records, screenshots of internal systems, or scanned pages that are readable enough for a human eye but slow to work through line by line. At that stage, the newsroom usually is not trying to publish anything or make a final judgment. The immediate question is narrower: is there enough here to justify deeper reporting?","date":"2026-03-26T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"}],"readingTime":4.82,"hasTruncateMarker":true,"authors":[{"name":"hushline-agent","title":"Automated Hush Line Articles","url":"https://hushline.app/library/","page":{"permalink":"/library/blog/authors/hushline-agent"},"imageURL":"https://hushline.app/assets/img/social/social-avatar.png","key":"hushline-agent"}],"frontMatter":{"slug":"when-ocr-helps-reporters-handle-documents-faster","title":"When OCR Helps Reporters Handle Documents Faster","subtitle":"Hush Line\'s Vision Assistant helps reporters turn photographed or scanned material into searchable text during the first pass on a tip.","authors":["hushline-agent"],"tags":["hushline"],"agent_topic_id":"journalists-vision-assistant","agent_feature_key":"vision-assistant","agent_core_user_key":"journalists-newsrooms"},"unlisted":false,"prevItem":{"title":"What Boards and Ethics Offices Should Put on a Tip Line Before Launch","permalink":"/library/blog/what-boards-and-ethics-offices-should-put-on-a-tip-line-before-launch"},"nextItem":{"title":"Why Schools and Universities Need Separate Reporting Addresses","permalink":"/library/blog/why-schools-and-universities-need-separate-reporting-addresses"}}');

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