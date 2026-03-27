"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[435],{

/***/ 2110
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_using_your_tip_line_account_verification_md_a58_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-using-your-tip-line-account-verification-md-a58.json
const site_docs_using_your_tip_line_account_verification_md_a58_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"using-your-tip-line/account-verification","title":"Account Verification","description":"Step 1. Add a Display Name","source":"@site/docs/using-your-tip-line/account-verification.md","sourceDirName":"using-your-tip-line","slug":"/using-your-tip-line/account-verification","permalink":"/library/docs/using-your-tip-line/account-verification","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-your-tip-line/account-verification.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"account-verification","title":"Account Verification","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Message Statuses","permalink":"/library/docs/using-your-tip-line/message-statuses"},"next":{"title":"Download Your Data","permalink":"/library/docs/using-your-tip-line/download-my-data"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/using-your-tip-line/account-verification.md


const frontMatter = {
	id: 'account-verification',
	title: 'Account Verification',
	sidebar_position: 8
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Step 1. Add a Display Name",
  "id": "step-1-add-a-display-name",
  "level": 2
}, {
  "value": "Step 2. Include Additional URLs",
  "id": "step-2-include-additional-urls",
  "level": 2
}, {
  "value": "Step 3. Contact Us",
  "id": "step-3-contact-us",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-add-a-display-name",
      children: "Step 1. Add a Display Name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings > Profile"
      }), ", update your Display Name for authenticity. (Changing it later will remove verified status.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/artvandelay/auth-artvandelay-settings-profile-desktop-light-fold.png?raw=true",
        alt: "Settings"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2-include-additional-urls",
      children: "Step 2. Include Additional URLs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add your LinkedIn, website, or other professional profiles in your bio’s extra fields for multi-channel verification."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/artvandelay/auth-artvandelay-settings-profile-desktop-light-window-02.png?raw=true",
        alt: "Extra URL fields"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3-contact-us",
      children: "Step 3. Contact Us"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When ready, contact us to begin verification. Businesses should have authorized officers available."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tips.hushline.app/to/admin",
        children: "Verify Your Account"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/guest/guest-profile-admin-desktop-light-fold.png?raw=true",
        alt: "Message verification"
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