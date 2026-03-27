"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[2047],{

/***/ 244
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_02_10_usability_gap_whistleblowing_tech_index_md_411_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_02_10_usability_gap_whistleblowing_tech_index_md_411_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8629);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9375);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9664);


const frontMatter = {
	slug: 'usability-gap-whistleblowing-tech-laos',
	title: 'Conversation with a Whistleblower: The Tech Side of Escaping a Crypto Scam Compound in Laos',
	authors: [
		'gsorrentino'
	],
	tags: [
		'hushline'
	],
	image: 'img/cover.png'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "TL;DR",
  "id": "tldr",
  "level": 2
}, {
  "value": "The Operating Conditions",
  "id": "the-operating-conditions",
  "level": 2
}, {
  "value": "Privacy Conscious, But Still Not Safe",
  "id": "privacy-conscious-but-still-not-safe",
  "level": 2
}, {
  "value": "Hint: Signal Isn&#39;t Ubiquitous",
  "id": "hint-signal-isnt-ubiquitous",
  "level": 2
}, {
  "value": "“Install the App” was a Risk",
  "id": "install-the-app-was-a-risk",
  "level": 2
}, {
  "value": "Legal Pathways as a Nonstarter",
  "id": "legal-pathways-as-a-nonstarter",
  "level": 2
}, {
  "value": "Cost and Aftermath",
  "id": "cost-and-aftermath",
  "level": 2
}, {
  "value": "What he Noticed About Hush Line",
  "id": "what-he-noticed-about-hush-line",
  "level": 2
}, {
  "value": "Why a Whistleblower Fund Matters",
  "id": "why-a-whistleblower-fund-matters",
  "level": 2
}, {
  "value": "What Software Teams Should Take From This",
  "id": "what-software-teams-should-take-from-this",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Conversation Cover",
        src: (__webpack_require__(3364)/* ["default"] */ .A) + "",
        width: "1744",
        height: "528"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When people in tech talk about whistleblowing security, the conversation usually starts with modern encryption tools and so-called best practices. Redbull worried whether having the wrong app on his phone could place him in physical danger."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["WIRED reporter Andy Greenberg ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.wired.com/story/he-leaked-the-secrets-southeast-asian-scam-compound-then-had-to-get-out-alive/",
        children: "told the story of Redbull’s escape from a scam compound in Laos"
      }), ". After reading that, I talked to Redbull to get his take on the tech: what he used, how he found it, what fell apart when things got bad, and what “usable security” actually means when people are always watching."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "tldr",
      children: "TL;DR"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Redbull never heard of Signal before he reached out and only learned about after a journalist replied to him."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "For him, just installing an app or having to use a real phone number could put him in danger."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "His baseline toolkit was Proton Mail/VPN, Tor Browser, and Brave."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "He said coworkers were questioned over VPN use: “He was using a VPN on his personal device, and when the bosses asked him, he gave them an excuse.”"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "He didn’t try legal channels."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Hush Line’s browser-first model (no app install required, optional Onion access) matched his need for low-friction, low-exposure messaging."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-operating-conditions",
      children: "The Operating Conditions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Redbull described life in narrow time windows. Phones were returned after office hours. Dorm checks happened at night. Office machines were monitored. Social accounts were logged in on the leader machines. Personal phones were periodically searched."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "\"They track all our online activity,\" he said. \"They check us physically.\""
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "privacy-conscious-but-still-not-safe",
      children: "Privacy Conscious, But Still Not Safe"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Redbull studied computer science in India. Before contacting any journalist, he was already using Proton Mail, Proton VPN, Tor Browser, and Brave."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "“I have always been privacy conscious,” he told me. Then he added the part most security teams miss: “But not everyone has this type of knowledge.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I asked, “So that kind of software wasn’t suspicious to the people who would search your phones?” Redbull answered, “Yes, but sometimes it happens to one of the guys. He was using a VPN on his personal device, and when the bosses asked him, he gave them an excuse.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "hint-signal-isnt-ubiquitous",
      children: "Hint: Signal Isn't Ubiquitous"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Redbull found Andy through Google after contacting many outlets and authorities."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "He described the outreach this way: “Many people, including everyone from the FBI, Interpol, Indian authorities, other news outlets, and many other journalists, I sent them, but only Andy responded to me.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "He had not used Signal before that."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "“Actually Andy introduced me to Signal in an email. I was not aware.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In this case, discovery and response determined what happened next. He did not know Signal until a reporter introduced it, and most of the institutions he contacted did not reply. When replies are slow or absent, people in danger have fewer choices and end up taking bigger risks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "install-the-app-was-a-risk",
      children: "“Install the App” was a Risk"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Once Signal entered the workflow, the setup itself became dangerous."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Redbull told me he installed Signal on an office device, linked it, then removed it. He described hiding it by making it look like a system drive shortcut."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "“It would have been dangerous if they had known,” he said."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "His critique of Signal was operational:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Phone-number registration was a liability in his context."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Disappearing messages protected him but also erased useful context too quickly."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A compromised endpoint could expose everything anyway."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "“Signal is good,” he said, “but it still doesn’t provide enough privacy in our current situation.” The SIM requirement was a core part of that concern. He told me, “we need simcard to access signal application.” In a setting where device checks were conducted and the communications infrastructure was controlled around him, acquiring and using a number-linked account was a potential point of exposure."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "legal-pathways-as-a-nonstarter",
      children: "Legal Pathways as a Nonstarter"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I asked whether he contacted lawyers: “If I contact any lawyer or any Laos authority, they would definitely put me in danger and might even kill me. You understand, when a very, very big authority does not respond to my email, at that time I had limited time and was also in a rush.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "He also said he did not know where to start legally while he was still inside the compound, and that his immediate priority was getting any trusted response from outside. In practice, he first contacted journalists, NGOs, and law enforcement channels."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Trust was another factor. He described actively vetting the one reporter who replied before speaking in depth, and said he feared that reaching out to the wrong person locally could expose him. In his words, contacting a Laotian lawyer or authority felt like something that could “put me in danger.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "From a design perspective, this matters because many “best practice” disclosure flows assume stable access to counsel. In extreme environments, that assumption can fail."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "cost-and-aftermath",
      children: "Cost and Aftermath"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Redbull estimated around $800 USD in direct costs tied to disclosure and exit planning. He also described continued impacts to his mental health, “My mind is not working well right now. I forget everything.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In other words, the burden is not only digital. Housing, transport, food, medical care, and mental health determine whether someone can keep cooperating safely after first contact."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-he-noticed-about-hush-line",
      children: "What he Noticed About Hush Line"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When I walked him through Hush Line, the features that stood out were not novel crypto claims. They were friction reductions:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "works in a browser"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "no required account for sources"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "no mandatory app install"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "clear-net and onion access"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "\"It seems very easy to use and share whatever, and then exit,\" he said."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "He also reacted positively to not requiring app-store installs tied to personal identifiers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That feedback tracks with what his threat model demanded all along: minimal steps, minimal trail, fast exit."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-a-whistleblower-fund-matters",
      children: "Why a Whistleblower Fund Matters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I told Redbull that I want Hush Line to start a whistleblower fund to cover practical costs that software alone cannot solve: emergency travel, temporary housing, phone and data bills, basic living expenses, and mental-health support."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "His response was immediate: “That’s great, but I know a whistleblower gives too much sacrifice to reveal the truth.” He also told me, “you are doing so many great things that no one else is doing.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When I asked what a “perfect world” looks like for future whistleblowers, he said: “If whistleblower is somehow connected with you and your organization, then I think he has a good future and he has no need to think about anything, only focus on his work.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-software-teams-should-take-from-this",
      children: "What Software Teams Should Take From This"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Redbull’s case is extreme, but the design lessons are broadly relevant to high-risk reporting tools."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Design for discovery, not just secure transport."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Assume installation can be the most dangerous step."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Treat persistent identifiers as potential hazards."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Automated deletion of messages can create workflow issues."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Assume endpoints may be compromised."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Reduce cognitive load for people operating under stress and sleep loss."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Most importantly, don’t mix up technical elegance with what actually works in real life."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A whistleblower in crisis is not evaluating your architecture diagram or protocol’s white paper. They are evaluating whether a single wrong tap has human consequences."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Redbull didn’t ask for, nor did he need, a perfect system, just one that didn’t make a dangerous situation worse. When I asked if I could write this article about his tech journey, he said, \"Yes please you can. It's necessary.\""
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 3364
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-8c388479c0d4cabcc77c996522bb3a49.png");

/***/ },

/***/ 8629
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/usability-gap-whistleblowing-tech-laos","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2026-02-10-usability-gap-whistleblowing-tech/index.md","source":"@site/blog/2026-02-10-usability-gap-whistleblowing-tech/index.md","title":"Conversation with a Whistleblower: The Tech Side of Escaping a Crypto Scam Compound in Laos","description":"Conversation Cover","date":"2026-02-10T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"}],"readingTime":6.205,"hasTruncateMarker":true,"authors":[{"name":"Glenn Sorrentino","title":"Executive Director, Science & Design","url":"https://scidsg.org","page":{"permalink":"/library/blog/authors/gsorrentino"},"socials":{"github":"https://github.com/glenn-sorrentino"},"imageURL":"/library/img/glenn.jpg","key":"gsorrentino"}],"frontMatter":{"slug":"usability-gap-whistleblowing-tech-laos","title":"Conversation with a Whistleblower: The Tech Side of Escaping a Crypto Scam Compound in Laos","authors":["gsorrentino"],"tags":["hushline"],"image":"img/cover.png"},"unlisted":false,"prevItem":{"title":"Small Usability Details That Matter When Reporting Under Stress","permalink":"/library/blog/small-usability-details-that-matter-when-reporting-under-stress"},"nextItem":{"title":"Build One of The Highest Security Laptops for Under $200 with Qubes OS","permalink":"/library/blog/build-a-qubes-laptop-for-under-two-hundred-dollars"}}');

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