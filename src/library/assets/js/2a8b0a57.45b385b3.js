"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[6903],{

/***/ 4990
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/two-way-conversations-fc837e68acf1097f7d5117f47ebdd2fb.png");

/***/ },

/***/ 5133
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_using_your_tip_line_two_way_conversations_md_2a8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-using-your-tip-line-two-way-conversations-md-2a8.json
const site_docs_using_your_tip_line_two_way_conversations_md_2a8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"using-your-tip-line/two-way-conversations","title":"Two-Way Conversations","description":"Two-way conversations let logged-in Hush Line account holders continue follow-up inside Hush Line after a logged-in sender submits to another account.","source":"@site/docs/using-your-tip-line/two-way-conversations.md","sourceDirName":"using-your-tip-line","slug":"/using-your-tip-line/two-way-conversations","permalink":"/library/docs/using-your-tip-line/two-way-conversations","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-your-tip-line/two-way-conversations.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"two-way-conversations","title":"Two-Way Conversations","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Vision Assistant","permalink":"/library/docs/using-your-tip-line/tools/vision-assistant"},"next":{"title":"Message Statuses","permalink":"/library/docs/using-your-tip-line/message-statuses"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/using-your-tip-line/two-way-conversations.md


const frontMatter = {
	id: 'two-way-conversations',
	title: 'Two-Way Conversations',
	sidebar_position: 6
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "When conversations are available",
  "id": "when-conversations-are-available",
  "level": 2
}, {
  "value": "Reading and replying",
  "id": "reading-and-replying",
  "level": 2
}, {
  "value": "Deleting conversations",
  "id": "deleting-conversations",
  "level": 2
}, {
  "value": "Notifications",
  "id": "notifications",
  "level": 2
}, {
  "value": "What conversations do not hide",
  "id": "what-conversations-do-not-hide",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Two-way conversations let logged-in Hush Line account holders continue follow-up inside Hush Line after a logged-in sender submits to another account."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Two-way account conversation in Hush Line",
        src: (__webpack_require__(4990)/* ["default"] */ .A) + "",
        width: "1000",
        height: "800"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "They are different from anonymous one-time reply links. Anonymous submissions\nstill use the normal message inbox and reply/status page, and they do not\nrequire the sender to create an account."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-conversations-are-available",
      children: "When conversations are available"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conversations are available when both sides are logged-in Hush Line accounts and\nall participants have active, signing-capable Hush Line chat keys."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Hush Line chat key is separate from your PGP key:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PGP keys protect one-way tip intake, exports, and optional encrypted email\nnotification content."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hush Line chat keys protect account conversation messages in the browser."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a participant only has older chat-key material or has not finished chat setup,\nHush Line may still show existing conversation history where possible, but new\nreplies are unavailable until every participant has signing-capable chat keys."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reading-and-replying",
      children: "Reading and replying"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open the conversation from your inbox."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unlock your Hush Line chat key in the browser."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the decrypted conversation content locally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Send replies only after the composer is available."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hush Line stores conversation messages as encrypted copies for each participant. The server does not store conversation plaintext. Conversation notifications and inbox rows avoid plaintext previews."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleting-conversations",
      children: "Deleting conversations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the conversation action menu to delete a conversation you no longer need to\nretain. Deleting a conversation removes the encrypted follow-up thread and its\nparticipant message copies. If the conversation began from a one-way intake\nmessage, the original inbox message remains without an attached conversation\nlink."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notifications",
      children: "Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conversation notification emails are generic activity alerts. They tell you to\nlog in and unlock your chat key, but they do not include conversation plaintext\nor conversation ciphertext."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is true even if you have enabled message-content notifications for one-way\ntip intake."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-conversations-do-not-hide",
      children: "What conversations do not hide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two-way account conversations are not the same as anonymous submissions. The\nserver still needs operational metadata such as participants, timestamps, unread\nstate, and recent activity to show the inbox and send notifications."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the lowest-friction anonymous sender path, continue using the standard\npublic tip form and reply/status link."
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