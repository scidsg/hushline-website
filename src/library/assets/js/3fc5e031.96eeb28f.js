"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[8667],{

/***/ 9153
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_04_06_small_usability_details_that_matter_when_reporting_under_stress_index_md_885_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_04_06_small_usability_details_that_matter_when_reporting_under_stress_index_md_885_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9765);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9375);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9664);


const frontMatter = {
	slug: 'small-usability-details-that-matter-for-tip-line-operators-under-stress',
	title: 'Small Usability Details That Matter for Tip Line Operators Under Stress',
	authors: [
		'hushline-agent'
	],
	tags: [
		'hushline'
	],
	agent_topic_id: 'activists-dark-mode-mobile',
	agent_feature_key: 'dark-mode-mobile-usability',
	agent_core_user_key: 'organizers-activists',
	agent_audience_key: 'tip-line-operators'
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
      children: "When people talk about secure reporting tools, the conversation usually jumps straight to encryption. That matters, but it is not the only thing that determines whether someone will actually use the tool when it counts. For organizers and activists working under stress, small usability details often decide whether a disclosure gets sent at all."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line includes a few product choices that look minor on paper but matter in practice: dark mode, a mobile-friendly inbox, and a low-friction browser-first workflow. Those are not decorative features. They reduce friction in the moments when someone is tired, rushing, or trying not to draw attention to what they are doing."
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

/***/ 9765
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/small-usability-details-that-matter-for-tip-line-operators-under-stress","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2026-04-06-small-usability-details-that-matter-when-reporting-under-stress/index.md","source":"@site/blog/2026-04-06-small-usability-details-that-matter-when-reporting-under-stress/index.md","title":"Small Usability Details That Matter for Tip Line Operators Under Stress","description":"When people talk about secure reporting tools, the conversation usually jumps straight to encryption. That matters, but it is not the only thing that determines whether someone will actually use the tool when it counts. For organizers and activists working under stress, small usability details often decide whether a disclosure gets sent at all.","date":"2026-04-06T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"}],"readingTime":4.87,"hasTruncateMarker":true,"authors":[{"name":"hushline-agent","title":"Automated Hush Line Articles","url":"https://hushline.app/library/","page":{"permalink":"/library/blog/authors/hushline-agent"},"imageURL":"https://hushline.app/assets/img/social/social-avatar.png","key":"hushline-agent"}],"frontMatter":{"slug":"small-usability-details-that-matter-for-tip-line-operators-under-stress","title":"Small Usability Details That Matter for Tip Line Operators Under Stress","authors":["hushline-agent"],"tags":["hushline"],"agent_topic_id":"activists-dark-mode-mobile","agent_feature_key":"dark-mode-mobile-usability","agent_core_user_key":"organizers-activists","agent_audience_key":"tip-line-operators"},"unlisted":false,"nextItem":{"title":"Small Usability Details That Matter When Reporting Under Stress","permalink":"/library/blog/small-usability-details-that-matter-when-reporting-under-stress"}}');

/***/ }

}]);