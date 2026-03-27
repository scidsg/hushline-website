"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[7941],{

/***/ 5992
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_getting_started_secure_your_account_md_12f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-getting-started-secure-your-account-md-12f.json
const site_docs_getting_started_secure_your_account_md_12f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"getting-started/secure-account","title":"Secure Your Account","description":"Step 1. Enable Two-Factor Authentication","source":"@site/docs/getting-started/secure-your-account.md","sourceDirName":"getting-started","slug":"/getting-started/secure-account","permalink":"/library/docs/getting-started/secure-account","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/secure-your-account.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"id":"secure-account","title":"Secure Your Account"},"sidebar":"tutorialSidebar","previous":{"title":"Prep Your Account","permalink":"/library/docs/getting-started/account-setup"},"next":{"title":"Share Your Tip Line","permalink":"/library/docs/getting-started/share-your-tip-line"}}');
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9375);
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(9664);
;// ./docs/getting-started/secure-your-account.md


const frontMatter = {
	sidebar_position: 4,
	id: 'secure-account',
	title: 'Secure Your Account'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Step 1. Enable Two-Factor Authentication",
  "id": "step-1-enable-two-factor-authentication",
  "level": 2
}, {
  "value": "Step 2. Scan the QR Code",
  "id": "step-2-scan-the-qr-code",
  "level": 2
}, {
  "value": "Step 3. Log in Again",
  "id": "step-3-log-in-again",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h2: "h2",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-enable-two-factor-authentication",
      children: "Step 1. Enable Two-Factor Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enhance your security by enabling 2FA. In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings > Authentication > Two-Factor Authentication"
      }), ", click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable 2FA"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/artvandelay/auth-artvandelay-settings-auth-desktop-light-fold.png?raw=true",
        alt: "Enable 2FA"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2-scan-the-qr-code",
      children: "Step 2. Scan the QR Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Download an authenticator app like Google Authenticator or Aegis, scan the QR code, and enter the generated six-digit code in the “2FA Code” field."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/artvandelay/auth-artvandelay-enable-2fa-desktop-light-fold.png?raw=true",
        alt: "Scan QR"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3-log-in-again",
      children: "Step 3. Log in Again"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After 2FA setup, you’ll be logged out. Log back in and enter the new code from your authenticator app."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🎉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Congratulations!"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "You've set up two-factor authentication! Now we'll learn about sharing your tip line."]
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