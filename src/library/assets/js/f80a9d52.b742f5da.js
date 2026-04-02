"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[2210],{

/***/ 3805
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_getting_started_account_setup_md_f80_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-getting-started-account-setup-md-f80.json
const site_docs_getting_started_account_setup_md_f80_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"getting-started/account-setup","title":"Prep Your Account","description":"Let\'s get you set up! Hush Line works best as a background service—once configured, we\'ll deliver messages to your inbox so you never have to log back in.","source":"@site/docs/getting-started/account-setup.md","sourceDirName":"getting-started","slug":"/getting-started/account-setup","permalink":"/library/docs/getting-started/account-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/account-setup.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"id":"account-setup","title":"Prep Your Account"},"sidebar":"tutorialSidebar","previous":{"title":"New User Onboarding","permalink":"/library/docs/getting-started/new-user-onboarding"},"next":{"title":"Secure Your Account","permalink":"/library/docs/getting-started/secure-account"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/getting-started/account-setup.md


const frontMatter = {
	sidebar_position: 3,
	id: 'account-setup',
	title: 'Prep Your Account'
};
const contentTitle = 'Prep Your Account';

const assets = {

};



const toc = [{
  "value": "Step 1. Add Information About Yourself",
  "id": "step-1-add-information-about-yourself",
  "level": 2
}, {
  "value": "Step 2. Enable End-to-End Encryption",
  "id": "step-2-enable-end-to-end-encryption",
  "level": 2
}, {
  "value": "Option 2.1. Use with Proton Mail",
  "id": "option-21-use-with-proton-mail",
  "level": 3
}, {
  "value": "Option 2.2. Use with Mailvelope",
  "id": "option-22-use-with-mailvelope",
  "level": 3
}, {
  "value": "Step 3. Enable Message Forwarding",
  "id": "step-3-enable-message-forwarding",
  "level": 2
}, {
  "value": "Step 4. Choose Which Fields Stay Readable",
  "id": "step-4-choose-which-fields-stay-readable",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prep-your-account",
        children: "Prep Your Account"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's get you set up! Hush Line works best as a background service—once configured, we'll deliver messages to your inbox so you never have to log back in."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-add-information-about-yourself",
      children: "Step 1. Add Information About Yourself"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings > Profile"
      }), ", add a clear bio, extra links, or your Signal username to help your community."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/newman/auth-newman-settings-profile-desktop-light-fold.png?raw=true",
        alt: "Settings"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2-enable-end-to-end-encryption",
      children: "Step 2. Enable End-to-End Encryption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add an encryption key so you can receive messages securely. Let's start from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings > Encryption"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/newman/auth-newman-settings-encryption-desktop-light-fold.png?raw=true",
        alt: "Encryption settings wireframe"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-21-use-with-proton-mail",
      children: "Option 2.1. Use with Proton Mail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Messages will be delivered to your Proton inbox and auto-decrypted. If you don’t have a Proton account, visit ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://proton.me",
        children: "proton.me"
      }), ". From ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings > Encryption > Proton Key Import"
      }), ", enter your Proton email and click the Search Proton button."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-22-use-with-mailvelope",
      children: "Option 2.2. Use with Mailvelope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prefer Gmail or no email forwarding? Use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://mailvelope.com/en/help#installation",
        children: "Mailvelope"
      }), ". After creating your PGP keypair, export your public key and paste it into the text area labeled “Or, Add Your Public PGP Key Manually.” Finally, click “+ Authorize this domain” in the Mailvelope menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3-enable-message-forwarding",
      children: "Step 3. Enable Message Forwarding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Forward messages so you don’t have to log back in. For Proton Mail, use your new Proton email. For Gmail users with Mailvelope, click the red Mailvelope seal in your inbox and enter your key password."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/scidsg/hushline-screenshots/blob/main/releases/latest/artvandelay/auth-artvandelay-settings-notifications-desktop-light-fold.png?raw=true",
        alt: "Email"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-4-choose-which-fields-stay-readable",
      children: "Step 4. Choose Which Fields Stay Readable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you use custom message fields, decide which values are safe to leave readable for sorting or filtering and which should require decryption. Leave only low-sensitivity routing data unencrypted."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a practical model and examples, see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/library/docs/using-your-tip-line/field-encryption",
        children: "Field Encryption"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🎉 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Congratulations!"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Now that you're set up, share your tip line with your organization or community. Next, we'll secure your Hush Line account."]
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