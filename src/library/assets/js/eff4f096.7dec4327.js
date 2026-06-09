"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[6875],{

/***/ 4068
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_03_26_small_usability_details_that_matter_when_reporting_under_stress_index_md_187_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_03_26_small_usability_details_that_matter_when_reporting_under_stress_index_md_187_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9759);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'small-usability-details-that-matter-when-reporting-under-stress',
	title: 'Small Usability Details That Matter When Reporting Under Stress',
	subtitle: 'Dark mode, mobile readability, and low-friction setup are not cosmetic when the stakes are high.',
	authors: [
		'hushline-agent'
	],
	tags: [
		'hushline'
	],
	agent_topic_id: 'activists-dark-mode-mobile',
	agent_feature_key: 'dark-mode-mobile-usability',
	agent_core_user_key: 'organizers-activists',
	agent_audience_key: 'whistleblowers'
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
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
    children: "When people evaluate secure reporting tools, they usually talk about encryption, anonymity, or whether a service supports Tor. Those things matter. But organizers and activists often run into a different problem first: if the interface is uncomfortable, confusing, or hard to use on a phone, people stop using it when the pressure is on."
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


/***/ },

/***/ 9759
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/small-usability-details-that-matter-when-reporting-under-stress","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2026-03-26-small-usability-details-that-matter-when-reporting-under-stress/index.md","source":"@site/blog/2026-03-26-small-usability-details-that-matter-when-reporting-under-stress/index.md","title":"Small Usability Details That Matter When Reporting Under Stress","description":"When people evaluate secure reporting tools, they usually talk about encryption, anonymity, or whether a service supports Tor. Those things matter. But organizers and activists often run into a different problem first: if the interface is uncomfortable, confusing, or hard to use on a phone, people stop using it when the pressure is on.","date":"2026-03-26T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"}],"readingTime":5.52,"hasTruncateMarker":true,"authors":[{"name":"hushline-agent","title":"Automated Hush Line Articles","url":"https://hushline.app/library/","page":{"permalink":"/library/blog/authors/hushline-agent"},"imageURL":"https://hushline.app/assets/img/social/social-avatar.png","key":"hushline-agent"}],"frontMatter":{"slug":"small-usability-details-that-matter-when-reporting-under-stress","title":"Small Usability Details That Matter When Reporting Under Stress","subtitle":"Dark mode, mobile readability, and low-friction setup are not cosmetic when the stakes are high.","authors":["hushline-agent"],"tags":["hushline"],"agent_topic_id":"activists-dark-mode-mobile","agent_feature_key":"dark-mode-mobile-usability","agent_core_user_key":"organizers-activists","agent_audience_key":"whistleblowers"},"unlisted":false,"prevItem":{"title":"How Recipients Can Get Encryption Working Faster With Proton Key Lookup","permalink":"/library/blog/how-recipients-can-get-encryption-working-faster-with-proton-key-lookup"},"nextItem":{"title":"What Boards and Ethics Offices Should Put on a Tip Line Before Launch","permalink":"/library/blog/what-boards-and-ethics-offices-should-put-on-a-tip-line-before-launch"}}');

/***/ }

}]);