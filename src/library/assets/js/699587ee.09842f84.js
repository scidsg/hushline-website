"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[1183],{

/***/ 58
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_history_2024_md_699_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-history-2024-md-699.json
const site_docs_project_history_2024_md_699_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-history/project-history-2024","title":"Hush Line in 2024","description":"How Hush Line became a fuller hosted platform with stronger security, admin, directory, and subscription features in 2024.","source":"@site/docs/project-history/2024.md","sourceDirName":"project-history","slug":"/project-history/project-history-2024","permalink":"/library/docs/project-history/project-history-2024","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/project-history/2024.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"project-history-2024","title":"Hush Line in 2024","sidebar_position":2,"description":"How Hush Line became a fuller hosted platform with stronger security, admin, directory, and subscription features in 2024."},"sidebar":"tutorialSidebar","previous":{"title":"Hush Line in 2023","permalink":"/library/docs/project-history/project-history-2023"},"next":{"title":"Hush Line in 2025","permalink":"/library/docs/project-history/project-history-2025"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/project-history/2024.md


const frontMatter = {
	id: 'project-history-2024',
	title: 'Hush Line in 2024',
	sidebar_position: 2,
	description: 'How Hush Line became a fuller hosted platform with stronger security, admin, directory, and subscription features in 2024.'
};
const contentTitle = 'Hush Line in 2024';

const assets = {

};



const toc = [{
  "value": "By the Numbers",
  "id": "by-the-numbers",
  "level": 2
}, {
  "value": "Q1: Hosted App Foundations",
  "id": "q1-hosted-app-foundations",
  "level": 2
}, {
  "value": "Q2: CI, Migrations, Directory, And Auth Hardening",
  "id": "q2-ci-migrations-directory-and-auth-hardening",
  "level": 2
}, {
  "value": "Q3: Product Expansion At Full Speed",
  "id": "q3-product-expansion-at-full-speed",
  "level": 2
}, {
  "value": "Q4: Product Polish And Security Headers",
  "id": "q4-product-polish-and-security-headers",
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
        id: "hush-line-in-2024",
        children: "Hush Line in 2024"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This article summarizes the Hush Line codebase history from January 7, 2024 through December 28, 2024, based on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git log --all"
      }), " in the main repository."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "by-the-numbers",
      children: "By the Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2,270 commits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "13 authors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "80,043 lines added"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "44,576 lines removed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2024 was the largest full year in the repository so far. It was also the year when Hush Line clearly shifted from installer-led work into a more complete application platform."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-hosted-app-foundations",
      children: "Q1: Hosted App Foundations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Early 2024 brought a visible product shift. The history shows work such as \"hosted to main,\" admin page additions, support for admin users, Mailvelope integration, and substantial privacy, security, and threat-model documentation updates."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This quarter also introduced or reorganized major data-layer work, including migrations and installer changes, while removing MariaDB-related paths. The repo started to look less like a deployment bundle and more like a service with explicit application architecture."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-ci-migrations-directory-and-auth-hardening",
      children: "Q2: CI, Migrations, Directory, And Auth Hardening"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The second quarter focused on operational discipline and core flows. GitHub Actions CI landed, Docker and Postgres paths were tightened, the initial user directory work matured, and registration and login tests expanded."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security work was substantial. The quarter added rate limiting and related tests, then later removed or simplified Redis and limiter dependencies as the implementation evolved. It also tightened two-factor authentication behavior, prevented token reuse, and narrowed CSP sources. By midyear, Hush Line had much stronger app-level security and much better test coverage around authentication."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-product-expansion-at-full-speed",
      children: "Q3: Product Expansion At Full Speed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The third quarter was one of the most feature-dense in the entire history. The directory moved toward route-backed behavior, including a dedicated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/directory/users.json"
      }), " path. The app added the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Onion-Location"
      }), " header when configured, which reinforced the Tor access story."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This was also the period when settings routes were heavily refactored, replies and reply-status logic were built out, alias and paid-feature gating matured, and Stripe-backed subscription flows became a major focus. The repository shows deep work across routes, settings, forms, templates, migrations, and tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-product-polish-and-security-headers",
      children: "Q4: Product Polish And Security Headers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The final quarter of 2024 focused on making the expanded application feel more coherent. Responsive settings and replies work continued, modal and button behavior was refined, guidance settings improved, and admins gained the ability to control directory intro text."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security and trust signals also strengthened. The quarter added CSP and HSTS response headers with tests, tied Vision access to Stripe state, added password-history protection, and tightened upgrade and premium behavior. The result was a more polished and better-defended product surface."
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