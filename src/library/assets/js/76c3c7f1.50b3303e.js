"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[4955],{

/***/ 312
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/proton-message-b447d647739e541d7d504ff510369c5a.webp");

/***/ },

/***/ 338
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_using_your_tip_line_reading_messages_md_76c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-using-your-tip-line-reading-messages-md-76c.json
const site_docs_using_your_tip_line_reading_messages_md_76c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"using-your-tip-line/reading-messages","title":"Reading Messages","description":"Step 1. Reading Messages Using Proton","source":"@site/docs/using-your-tip-line/reading-messages.md","sourceDirName":"using-your-tip-line","slug":"/using-your-tip-line/reading-messages","permalink":"/library/docs/using-your-tip-line/reading-messages","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-your-tip-line/reading-messages.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"reading-messages","title":"Reading Messages","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Your Inbox","permalink":"/library/docs/using-your-tip-line/inbox"},"next":{"title":"Email Validation","permalink":"/library/docs/using-your-tip-line/tools/email-validation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/using-your-tip-line/reading-messages.md


const frontMatter = {
	id: 'reading-messages',
	title: 'Reading Messages',
	sidebar_position: 6
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Step 1. Reading Messages Using Proton",
  "id": "step-1-reading-messages-using-proton",
  "level": 2
}, {
  "value": "Step 2. Reading Messages In-App Using Mailvelope",
  "id": "step-2-reading-messages-in-app-using-mailvelope",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-reading-messages-using-proton",
      children: "Step 1. Reading Messages Using Proton"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The easiest way to use Hush Line is in conjunction with Proton Mail. When you set up your account, you had the option to either paste a PGP key in to your encryption settings, or importing a key directly from Proton's keyserver. Once importing your key, you should have set up notifications. If you chose ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Include Message Content"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Encrypt Message Body"
      }), " any time you receive a new Hush Line message, the encrypted contents will forward to Proton, where the key to decrypt the message already exists, and will be automatically decrypted in your inbox."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hush Line profile address",
        src: (__webpack_require__(312)/* ["default"] */ .A) + "",
        width: "1542",
        height: "772"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2-reading-messages-in-app-using-mailvelope",
      children: "Step 2. Reading Messages In-App Using Mailvelope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you want to read messages directly in the Hush Line app, you should have followed ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://hushline.app/library/docs/getting-started/account-setup#option-22-use-with-mailvelope",
        children: "Option 2.2 in the Account Setup section of Getting Started"
      }), ". When you click \"Go to Message\" on a tip in your inbox, you should see the red Mailvelope seal. Each field is encrypted individually, so you should see multiple seals. When you click one of the seals you'll be prompted to enter the password you created when setting up your key."]
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