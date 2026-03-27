"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[5004],{

/***/ 2841
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_using_your_tip_line_data_download_md_801_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-using-your-tip-line-data-download-md-801.json
const site_docs_using_your_tip_line_data_download_md_801_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"using-your-tip-line/download-my-data","title":"Download Your Data","description":"Hush Line provides a self-serve mechanism to download a complete copy of your account data. No approval, delay, or support request is required.","source":"@site/docs/using-your-tip-line/data-download.md","sourceDirName":"using-your-tip-line","slug":"/using-your-tip-line/download-my-data","permalink":"/library/docs/using-your-tip-line/download-my-data","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-your-tip-line/data-download.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"download-my-data","title":"Download Your Data","sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Account Verification","permalink":"/library/docs/using-your-tip-line/account-verification"},"next":{"title":"Dark Mode","permalink":"/library/docs/using-your-tip-line/dark-mode"}}');
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9375);
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(9664);
;// ./docs/using-your-tip-line/data-download.md


const frontMatter = {
	id: 'download-my-data',
	title: 'Download Your Data',
	sidebar_position: 9
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Access Location",
  "id": "access-location",
  "level": 2
}, {
  "value": "What Is Included",
  "id": "what-is-included",
  "level": 2
}, {
  "value": "Optional PGP Encryption",
  "id": "optional-pgp-encryption",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Hush Line provides a self-serve mechanism to download a complete copy of your account data. No approval, delay, or support request is required."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "access-location",
      children: "Access Location"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Navigate to ", (0,jsx_runtime.jsx)("code", {
        children: "Settings > Advanced"
      }), " to find the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Download My Data"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/artvandelay/auth-artvandelay-settings-advanced-desktop-light-fold.png?raw=true",
        alt: "Advanced Settings"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-is-included",
      children: "What Is Included"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The export is delivered as a single ZIP archive containing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CSV files for all conversations associated with your account"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Message metadata necessary for independent review and auditing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All stored PGP-encrypted messages in their original encrypted form"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The export is comprehensive. No records are omitted, summarized, or modified."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optional-pgp-encryption",
      children: "Optional PGP Encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you have uploaded a public PGP key, encryption is enabled by default."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When enabled:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The ZIP archive is encrypted using your public key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only the corresponding private key can decrypt the contents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hush Line never receives or stores your private key"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This allows secure storage or transfer of the export even if the file is copied or intercepted."
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