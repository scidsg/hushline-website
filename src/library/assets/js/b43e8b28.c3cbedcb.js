"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[322],{

/***/ 2977
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_using_your_tip_line_tools_vision_assistant_md_b43_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-using-your-tip-line-tools-vision-assistant-md-b43.json
const site_docs_using_your_tip_line_tools_vision_assistant_md_b43_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"using-your-tip-line/tools/vision-assistant","title":"Vision Assistant","description":"Route: /vision","source":"@site/docs/using-your-tip-line/tools/vision-assistant.md","sourceDirName":"using-your-tip-line/tools","slug":"/using-your-tip-line/tools/vision-assistant","permalink":"/library/docs/using-your-tip-line/tools/vision-assistant","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-your-tip-line/tools/vision-assistant.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"vision-assistant","title":"Vision Assistant","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Email Validation","permalink":"/library/docs/using-your-tip-line/tools/email-validation"},"next":{"title":"Field Encryption","permalink":"/library/docs/using-your-tip-line/field-encryption"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/using-your-tip-line/tools/vision-assistant.md


const frontMatter = {
	id: 'vision-assistant',
	title: 'Vision Assistant',
	sidebar_position: 2
};
const contentTitle = 'Vision Assistant';

const assets = {

};



const toc = [{
  "value": "How It Works",
  "id": "how-it-works",
  "level": 2
}, {
  "value": "Intended Use",
  "id": "intended-use",
  "level": 2
}, {
  "value": "Privacy",
  "id": "privacy",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "vision-assistant",
        children: "Vision Assistant"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Route: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/vision"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vision Assistant is a browser-based OCR tool that extracts searchable text from uploaded images."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/admin/auth-admin-tools-vision-assistant-desktop-light-fold.png?raw=true",
        alt: "Vision Assistant"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upload one or more images"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hush Line runs OCR in the browser"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extracted text is displayed for review and copy/paste"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intended-use",
      children: "Intended Use"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is useful when disclosures include photos of screens, documents, or messages and investigators need searchable text."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "privacy",
      children: "Privacy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OCR processing runs client-side in the browser."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No external API calls are required for extraction in this workflow."
      }), "\n"]
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