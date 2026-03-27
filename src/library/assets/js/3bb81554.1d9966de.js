"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[1015],{

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


/***/ },

/***/ 9805
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_project_history_2023_md_3bb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-history-2023-md-3bb.json
const site_docs_project_history_2023_md_3bb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"project-history/project-history-2023","title":"Hush Line in 2023","description":"How Hush Line moved from its first commit to a hardened installer and deployment story in 2023.","source":"@site/docs/project-history/2023.md","sourceDirName":"project-history","slug":"/project-history/project-history-2023","permalink":"/library/docs/project-history/project-history-2023","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/project-history/2023.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"project-history-2023","title":"Hush Line in 2023","sidebar_position":1,"description":"How Hush Line moved from its first commit to a hardened installer and deployment story in 2023."},"sidebar":"tutorialSidebar","previous":{"title":"Project History","permalink":"/library/docs/project-history"},"next":{"title":"Hush Line in 2024","permalink":"/library/docs/project-history/project-history-2024"}}');
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9375);
// EXTERNAL MODULE: ../../../../../../../../private/tmp/hushline-docs-deps/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(9664);
;// ./docs/project-history/2023.md


const frontMatter = {
	id: 'project-history-2023',
	title: 'Hush Line in 2023',
	sidebar_position: 1,
	description: 'How Hush Line moved from its first commit to a hardened installer and deployment story in 2023.'
};
const contentTitle = 'Hush Line in 2023';

const assets = {

};



const toc = [{
  "value": "By the Numbers",
  "id": "by-the-numbers",
  "level": 2
}, {
  "value": "Q1: The Repo Opens",
  "id": "q1-the-repo-opens",
  "level": 2
}, {
  "value": "Q2: Installer Work And Sender-Facing Basics",
  "id": "q2-installer-work-and-sender-facing-basics",
  "level": 2
}, {
  "value": "Q3: Packaging, Hardware, And Blackbox Experiments",
  "id": "q3-packaging-hardware-and-blackbox-experiments",
  "level": 2
}, {
  "value": "Q4: Hardening The Install Story",
  "id": "q4-hardening-the-install-story",
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
        id: "hush-line-in-2023",
        children: "Hush Line in 2023"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This article summarizes the Hush Line codebase history from March 27, 2023 through November 29, 2023, based on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git log --all"
      }), " in the main repository."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "by-the-numbers",
      children: "By the Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1,270 commits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "7 authors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "253,283 lines added"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "251,933 lines removed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A large share of the line churn in 2023 came from installer experimentation, device assets, and packaging work rather than steady application-layer growth."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-the-repo-opens",
      children: "Q1: The Repo Opens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hush Line started on March 27, 2023 with the initial repository bootstrap. The first week focused on getting the service installable and recognizable: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install.sh"
      }), " changed constantly, basic page chrome like the footer and favicon landed, and email functionality appeared almost immediately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This quarter reads like a compressed MVP sprint. The goal was not polish yet. It was getting a privacy-focused reporting tool into a state where it could be installed, configured, and used."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-installer-work-and-sender-facing-basics",
      children: "Q2: Installer Work And Sender-Facing Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The second quarter was dominated by install-path iteration. The repository added and revised public and Tor-only installers, renamed installer scripts into more durable forms, and kept tightening setup behavior around boot, restart, and environment handling."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alongside that, sender and operator experience improved. This period added domain validation, an emergency exit button, PGP owner info fixes, logging, missing-SMTP-port startup resilience, font work, and spinner/loading behavior. It also introduced some of the earliest legal and policy documentation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-packaging-hardware-and-blackbox-experiments",
      children: "Q3: Packaging, Hardware, And Blackbox Experiments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The third quarter broadened the scope of the project. Work expanded into Waveshare e-ink display scripts, Blackbox and QR installer experiments, 3D-printed case assets, Docker-based packaging, and shell and Python formatting passes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This was the most experimental phase in the 2023 history. The repository shows several reverts and reorganizations around Blackbox and installer assets, which suggests active prototyping rather than a settled product surface."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-hardening-the-install-story",
      children: "Q4: Hardening The Install Story"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The final quarter of 2023 shifted toward hardening. The history includes UFW and fail2ban additions, accessibility improvements, confirmation email work, info-page copy updates, public-install refinements, and changes to reduce private logging detail."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There was also early project-outreach infrastructure, including Mastodon workflow work. By the end of 2023, Hush Line looked less like a one-script prototype and more like an installable system with clearer security and operational expectations."
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



/***/ }

}]);