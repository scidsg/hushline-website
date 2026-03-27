"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[5325],{

/***/ 6666
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_using_your_tip_line_tools_email_validation_md_7bb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-using-your-tip-line-tools-email-validation-md-7bb.json
const site_docs_using_your_tip_line_tools_email_validation_md_7bb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"using-your-tip-line/tools/email-validation","title":"Email Validation","description":"Route: /email-headers","source":"@site/docs/using-your-tip-line/tools/email-validation.md","sourceDirName":"using-your-tip-line/tools","slug":"/using-your-tip-line/tools/email-validation","permalink":"/library/docs/using-your-tip-line/tools/email-validation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-your-tip-line/tools/email-validation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"email-validation","title":"Email Validation","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Reading Messages","permalink":"/library/docs/using-your-tip-line/reading-messages"},"next":{"title":"Vision Assistant","permalink":"/library/docs/using-your-tip-line/tools/vision-assistant"}}');
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9375);
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(9664);
;// ./docs/using-your-tip-line/tools/email-validation.md


const frontMatter = {
	id: 'email-validation',
	title: 'Email Validation',
	sidebar_position: 1
};
const contentTitle = 'Email Validation';

const assets = {

};



const toc = [{
  "value": "What It Checks",
  "id": "what-it-checks",
  "level": 2
}, {
  "value": "On-screen Results",
  "id": "on-screen-results",
  "level": 2
}, {
  "value": "Authentic Email Example",
  "id": "authentic-email-example",
  "level": 3
}, {
  "value": "Inauthentic Email Example",
  "id": "inauthentic-email-example",
  "level": 3
}, {
  "value": "Forged Email Example",
  "id": "forged-email-example",
  "level": 3
}, {
  "value": "Report Download",
  "id": "report-download",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "email-validation",
        children: "Email Validation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Route: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/email-headers"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Paste raw email headers and Hush Line analyzes available authentication artifacts to help determine whether an email appears to originate from the stated sender."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/admin/auth-admin-tools-email-validation-desktop-light-fold.png?raw=true",
        alt: "Email Validation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-it-checks",
      children: "What It Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication results present in headers (SPF, DKIM, DMARC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain alignment signals between sender and related headers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DKIM signing-key DNS lookups when selector/domain tags are available"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "on-screen-results",
      children: "On-screen Results"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After validation, the tool renders these sections:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Validation Summary"
        }), ": headline plus reasons explaining why the result looks valid, appears inauthentic, or likely forged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Chain of Trust"
        }), ": whether a DKIM key is currently advertised in DNS and whether the DNS answer was DNSSEC-validated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Header Context"
        }), ": From / Return-Path / Reply-To domains plus alignment checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Authentication-Results"
        }), ": parsed DKIM/SPF/DMARC outcomes from pasted headers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DKIM Signatures"
        }), ": parsed signing domains, selectors, algorithms, and signed header list"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DKIM Key Lookup"
        }), ": DNS lookup outcome for each detected selector/domain pair"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Warnings"
        }), " (when present): conditions that reduce confidence and need caution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each section includes a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Summary"
      }), " block that explains how to interpret the findings, not just restates them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authentic-email-example",
      children: "Authentic Email Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/admin/auth-admin-tools-email-validation-status-valid-desktop-light-fold.png?raw=true",
        alt: "Successful Email Validation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inauthentic-email-example",
      children: "Inauthentic Email Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/admin/auth-admin-tools-email-validation-status-inauthentic-desktop-light-fold.png?raw=true",
        alt: "Inauthentic Email"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "forged-email-example",
      children: "Forged Email Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/admin/auth-admin-tools-email-validation-status-forged-desktop-light-fold.png?raw=true",
        alt: "Forged Email"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "report-download",
      children: "Report Download"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After analysis, you can download a ZIP report package that includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PDF report with the same major sections shown on the site"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structured JSON output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raw headers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DKIM key lookup artifacts (when available)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checksums for integrity verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a DKIM DNS lookup fails, the DKIM key artifact includes the lookup error so evidence consumers can see what failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Header analysis improves confidence but cannot prove authenticity on its own."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The visible ", (0,jsx_runtime.jsx)(_components.code, {
          children: "From"
        }), " header is not the SMTP envelope sender (", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAIL FROM"
        }), "), and envelope sender data is often unavailable in pasted headers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Some providers can DKIM-sign the visible ", (0,jsx_runtime.jsx)(_components.code, {
          children: "From"
        }), " header without proving mailbox ownership."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forwarding, mailing lists, partial headers, and key rotation can affect results."
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