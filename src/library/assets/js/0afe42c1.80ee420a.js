"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[1947],{

/***/ 4843
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_using_your_tip_line_field_encryption_md_0af_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-using-your-tip-line-field-encryption-md-0af.json
const site_docs_using_your_tip_line_field_encryption_md_0af_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"using-your-tip-line/field-encryption","title":"Field Encryption","description":"Hush Line encrypts message fields individually so you can decide what should stay readable for triage and what should require your PGP workflow.","source":"@site/docs/using-your-tip-line/field-encryption.md","sourceDirName":"using-your-tip-line","slug":"/using-your-tip-line/field-encryption","permalink":"/library/docs/using-your-tip-line/field-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-your-tip-line/field-encryption.md","tags":[],"version":"current","sidebarPosition":6.5,"frontMatter":{"id":"field-encryption","title":"Field Encryption","sidebar_position":6.5},"sidebar":"tutorialSidebar","previous":{"title":"Vision Assistant","permalink":"/library/docs/using-your-tip-line/tools/vision-assistant"},"next":{"title":"Message Statuses","permalink":"/library/docs/using-your-tip-line/message-statuses"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/using-your-tip-line/field-encryption.md


const frontMatter = {
	id: 'field-encryption',
	title: 'Field Encryption',
	sidebar_position: 6.5
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Why field-level encryption exists",
  "id": "why-field-level-encryption-exists",
  "level": 2
}, {
  "value": "What an unencrypted field means",
  "id": "what-an-unencrypted-field-means",
  "level": 2
}, {
  "value": "What an encrypted field means",
  "id": "what-an-encrypted-field-means",
  "level": 2
}, {
  "value": "A practical model for custom fields",
  "id": "a-practical-model-for-custom-fields",
  "level": 2
}, {
  "value": "The tradeoff",
  "id": "the-tradeoff",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Hush Line encrypts message fields individually so you can decide what should stay readable for triage and what should require your PGP workflow."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-field-level-encryption-exists",
      children: "Why field-level encryption exists"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not every recipient needs the same review workflow. Some people need to sort or filter incoming submissions without exposing the actual tip contents."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A common example is an investigator, reporter, or legal team reviewing deposits about multiple organizations. They might leave a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Company Name"
      }), " field unencrypted so they can quickly separate tips about ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Meta"
      }), " from tips about ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Google"
      }), " without exposing the message body, names, evidence, or contact details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That is the core reason unencrypted fields exist in Hush Line: they support limited routing and triage while keeping the sensitive part of the report encrypted."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-an-unencrypted-field-means",
      children: "What an unencrypted field means"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An unencrypted field is readable in the app without decryption. It is also visible to the hosting environment that stores the submission."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use unencrypted fields only for low-sensitivity routing information such as:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "company name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "topic or beat"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "region"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "case type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "whether the sender wants a reply"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-an-encrypted-field-means",
      children: "What an encrypted field means"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An encrypted field is stored as ciphertext until you decrypt it with your PGP workflow."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use encrypted fields for anything that could identify a source or reveal the substance of the report, such as:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "the main message body"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "names of people involved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "contact details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "evidence descriptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "internal document excerpts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a-practical-model-for-custom-fields",
      children: "A practical model for custom fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A good default setup is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "leave one or two routing fields unencrypted only if you truly need them for sorting or filtering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "keep the main message field encrypted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "keep contact and follow-up fields encrypted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "if you are unsure whether a field should stay readable, encrypt it"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One example might look like this:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Company Name"
        }), ": unencrypted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Message"
        }), ": encrypted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Contact Method"
        }), ": encrypted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Supporting Details"
        }), ": encrypted"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-tradeoff",
      children: "The tradeoff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unencrypted fields improve speed when reviewing incoming deposits, but they reduce confidentiality for those specific values. Encrypted fields preserve stronger confidentiality, but they require a decryption step before you can read them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose the smallest amount of unencrypted information that still supports your workflow."
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