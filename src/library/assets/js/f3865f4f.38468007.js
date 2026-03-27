"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[9511],{

/***/ 4697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_history_2025_md_f38_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-history-2025-md-f38.json
const site_docs_project_history_2025_md_f38_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-history/project-history-2025","title":"Hush Line in 2025","description":"How Hush Line refined its message model, encryption flows, admin controls, and documentation through the end of 2025.","source":"@site/docs/project-history/2025.md","sourceDirName":"project-history","slug":"/project-history/project-history-2025","permalink":"/library/docs/project-history/project-history-2025","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/project-history/2025.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"project-history-2025","title":"Hush Line in 2025","sidebar_position":3,"description":"How Hush Line refined its message model, encryption flows, admin controls, and documentation through the end of 2025."},"sidebar":"tutorialSidebar","previous":{"title":"Hush Line in 2024","permalink":"/library/docs/project-history/project-history-2024"}}');
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9375);
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(9664);
;// ./docs/project-history/2025.md


const frontMatter = {
	id: 'project-history-2025',
	title: 'Hush Line in 2025',
	sidebar_position: 3,
	description: 'How Hush Line refined its message model, encryption flows, admin controls, and documentation through the end of 2025.'
};
const contentTitle = 'Hush Line in 2025';

const assets = {

};



const toc = [{
  "value": "By the Numbers",
  "id": "by-the-numbers",
  "level": 2
}, {
  "value": "Q1: Message Model And Encryption Overhaul",
  "id": "q1-message-model-and-encryption-overhaul",
  "level": 2
}, {
  "value": "Q2: Admin Controls And PWA Polish",
  "id": "q2-admin-controls-and-pwa-polish",
  "level": 2
}, {
  "value": "Q3: Quiet Maintenance",
  "id": "q3-quiet-maintenance",
  "level": 2
}, {
  "value": "Q4: Documentation, Validation, And Interface Touch-Ups",
  "id": "q4-documentation-validation-and-interface-touch-ups",
  "level": 2
}, {
  "value": "Year-End Readout",
  "id": "year-end-readout",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hush-line-in-2025",
        children: "Hush Line in 2025"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This article summarizes the Hush Line codebase history from January 5, 2025 through December 31, 2025, based on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git log --all"
      }), " in the main repository. This set intentionally stops at the end of 2025; 2026 will be covered separately later."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "by-the-numbers",
      children: "By the Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "719 commits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "6 authors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "24,020 lines added"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "8,902 lines removed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compared with 2024, 2025 was a more focused year. The first half delivered substantial application and schema changes, while the second half was quieter and more maintenance-oriented."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-message-model-and-encryption-overhaul",
      children: "Q1: Message Model And Encryption Overhaul"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The first quarter of 2025 made some of the deepest product changes in the repo. Models, routes, and settings modules were split into more focused files, which made room for larger behavior changes without leaving everything in monolithic modules."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This was also the quarter when Hush Line moved heavily into custom message fields. The history shows the system replacing a single message content field with field definitions and values, client-side encryption for those fields, support for encrypted full email bodies, and tests that lock in multiple notification and encryption modes. Inbox status filters, counts, responsive tabs, onion-banner work, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FIELDS_MODE"
      }), " gating all landed in the same broad window."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-admin-controls-and-pwa-polish",
      children: "Q2: Admin Controls And PWA Polish"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The second quarter focused on operational polish and account governance. Healthchecks reduced startup noise, the notifications route was normalized, SMTP forwarding behavior was cleaned up, and personal-server Docker Compose paths were improved for development and simulation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Admin controls expanded too. The first user could become an admin, registration settings became configurable in the app and through CLI commands, and registration-code behavior moved into organization settings. This same period also included funding-manifest work, PWA and manifest updates, splash screens, footer and mobile polish, and several dependency updates."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-quiet-maintenance",
      children: "Q3: Quiet Maintenance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The third quarter was small by comparison, but still meaningful. The standout security-facing change was ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Clear-Site-Data"
      }), " support on logout handlers, which improved session cleanup on sign-out."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Outside of that, the quarter mostly shows version bumps and a focused iOS footer fix. It reads like a maintenance window rather than a feature-build period."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-documentation-validation-and-interface-touch-ups",
      children: "Q4: Documentation, Validation, And Interface Touch-Ups"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The final quarter stayed relatively quiet, but it tightened important edges. The repo revised ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SECURITY.md"
      }), " for clarity, refreshed README copy, improved alias validation, and used Unidecode for directory sort keys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There were also small but visible product refinements, including \"powered by\" logic changes, icon and dark-mode polish, and time-based UI shadow work. The year closed with a mix of documentation cleanup, validation improvements, and selective UI detail work."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "year-end-readout",
      children: "Year-End Readout"
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