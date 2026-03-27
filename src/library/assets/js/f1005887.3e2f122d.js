"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[5672],{

/***/ 8789
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_using_your_tip_line_inbox_md_f10_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-using-your-tip-line-inbox-md-f10.json
const site_docs_using_your_tip_line_inbox_md_f10_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"using-your-tip-line/inbox","title":"Your Inbox","description":"Step 1. Inbox on the Desktop","source":"@site/docs/using-your-tip-line/inbox.md","sourceDirName":"using-your-tip-line","slug":"/using-your-tip-line/inbox","permalink":"/library/docs/using-your-tip-line/inbox","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-your-tip-line/inbox.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"inbox","title":"Your Inbox","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Using Your Tip Line","permalink":"/library/docs/using-your-tip-line"},"next":{"title":"Reading Messages","permalink":"/library/docs/using-your-tip-line/reading-messages"}}');
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9375);
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(9664);
;// ./docs/using-your-tip-line/inbox.md


const frontMatter = {
	id: 'inbox',
	title: 'Your Inbox',
	sidebar_position: 5
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Step 1. Inbox on the Desktop",
  "id": "step-1-inbox-on-the-desktop",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-inbox-on-the-desktop",
      children: "Step 1. Inbox on the Desktop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/newman/auth-newman-inbox-desktop-light-fold.png?raw=true",
        alt: "Desktop Inbox"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you start receiving Hush Line messages, your Inbox will help keep you organized. When you change the status of a message, you'll be able to quickly filter to see all messages with those statuses."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When using a desktop or laptop computer your inbox tabs will display on the left side of the interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/artvandelay/auth-artvandelay-inbox-desktop-light-fold.png?raw=true",
        alt: "Desktop Inbox"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
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


/***/ }

}]);