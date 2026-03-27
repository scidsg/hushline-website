"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[7261],{

/***/ 4927
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_getting_started_share_your_tip_line_md_98d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-getting-started-share-your-tip-line-md-98d.json
const site_docs_getting_started_share_your_tip_line_md_98d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"getting-started/share-your-tip-line","title":"Share Your Tip Line","description":"Step 1. Make Yourself Discoverable","source":"@site/docs/getting-started/share-your-tip-line.md","sourceDirName":"getting-started","slug":"/getting-started/share-your-tip-line","permalink":"/library/docs/getting-started/share-your-tip-line","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/share-your-tip-line.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"share-your-tip-line","title":"Share Your Tip Line","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Secure Your Account","permalink":"/library/docs/getting-started/secure-account"},"next":{"title":"Using Your Tip Line","permalink":"/library/docs/using-your-tip-line"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/getting-started/share-your-tip-line.md


const frontMatter = {
	id: 'share-your-tip-line',
	title: 'Share Your Tip Line',
	sidebar_position: 5
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Step 1. Make Yourself Discoverable",
  "id": "step-1-make-yourself-discoverable",
  "level": 2
}, {
  "value": "Step 2. Share Your Address Widely",
  "id": "step-2-share-your-address-widely",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-make-yourself-discoverable",
      children: "Step 1. Make Yourself Discoverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Opt-in to the public user directory in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings > Profile > Public User Directory"
      }), " so whistleblowers can find your account."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/artvandelay/auth-artvandelay-settings-profile-desktop-light-fold.png?raw=true",
        alt: "Settings"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2-share-your-address-widely",
      children: "Step 2. Share Your Address Widely"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add a link to your tip line on your website, email signature, and social media. To find your address go to your profile, and copy the URL in the browser's address bar:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hush Line profile address",
        src: (__webpack_require__(5427)/* ["default"] */ .A) + "",
        width: "2310",
        height: "1615"
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

/***/ 5427
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/share-examples-002cc13468027032d4670e2e4be21c1b.png");

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