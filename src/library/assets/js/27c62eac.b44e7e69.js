"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[2370],{

/***/ 481
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/loose-lips-130e4d12082166f26ce8dba62e73b094.jpg");

/***/ },

/***/ 4726
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/logs-ee43f8e09aecf54579382e2aa6fc3ca0.gif");

/***/ },

/***/ 6951
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/how-to-blow-the-whistle-without-losing-your-career","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-07-30-how-to-blow-the-whistle-without-losing-your-career/index.md","source":"@site/blog/2025-07-30-how-to-blow-the-whistle-without-losing-your-career/index.md","title":"How To Blow The Whistle Without Losing Your Career","description":"No diving in the pool","date":"2025-07-30T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"},{"inline":false,"label":"Whistleblowing","permalink":"/library/blog/tags/whistleblowing","description":"Whistleblowing articles"}],"readingTime":6.72,"hasTruncateMarker":true,"authors":[{"name":"Glenn Sorrentino","title":"Executive Director, Science & Design","url":"https://scidsg.org","page":{"permalink":"/library/blog/authors/gsorrentino"},"socials":{"github":"https://github.com/glenn-sorrentino"},"imageURL":"/library/img/glenn.jpg","key":"gsorrentino"}],"frontMatter":{"slug":"how-to-blow-the-whistle-without-losing-your-career","title":"How To Blow The Whistle Without Losing Your Career","subtitle":"Before you jump, make sure there\'s water in the pool","authors":["gsorrentino"],"tags":["hushline","whistleblowing"],"image":"img/cover.png"},"unlisted":false,"prevItem":{"title":"Build One of The Highest Security Laptops for Under $200 with Qubes OS","permalink":"/library/blog/build-a-qubes-laptop-for-under-two-hundred-dollars"},"nextItem":{"title":"Hush Line\'s Sustainable Impact Model","permalink":"/library/blog/hushline-sustainable-model"}}');

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


/***/ },

/***/ 9340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_07_30_how_to_blow_the_whistle_without_losing_your_career_index_md_27c_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_07_30_how_to_blow_the_whistle_without_losing_your_career_index_md_27c_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6951);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'how-to-blow-the-whistle-without-losing-your-career',
	title: 'How To Blow The Whistle Without Losing Your Career',
	subtitle: 'Before you jump, make sure there\'s water in the pool',
	authors: [
		'gsorrentino'
	],
	tags: [
		'hushline',
		'whistleblowing'
	],
	image: 'img/cover.png'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Know Your Values",
  "id": "know-your-values",
  "level": 2
}, {
  "value": "Keep It To Yourself",
  "id": "keep-it-to-yourself",
  "level": 2
}, {
  "value": "What About Internal Legal and HR?",
  "id": "what-about-internal-legal-and-hr",
  "level": 2
}, {
  "value": "It&#39;s Easy To Get Caught",
  "id": "its-easy-to-get-caught",
  "level": 2
}, {
  "value": "Document Everything, But Don&#39;t Take Documents",
  "id": "document-everything-but-dont-take-documents",
  "level": 2
}, {
  "value": "Talk To a Lawyer",
  "id": "talk-to-a-lawyer",
  "level": 2
}, {
  "value": "Be Prepared To Drop It",
  "id": "be-prepared-to-drop-it",
  "level": 2
}, {
  "value": "Ready? Now, Resign",
  "id": "ready-now-resign",
  "level": 2
}, {
  "value": "Eh, Let&#39;s Just Drop It",
  "id": "eh-lets-just-drop-it",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "No diving in the pool",
        src: (__webpack_require__(9459)/* ["default"] */ .A) + "",
        width: "3072",
        height: "1800"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I've talked to many, many whistleblowers over the years, and the story typically goes like this: see something, say something, become the problem, lose your job, face legal and financial issues, struggle to find another job. It's the paradox of whistleblowing; we valorize doing the right thing, and then attack the people who speak up. So here's another way to blow the whistle without risking everything."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "know-your-values",
      children: "Know Your Values"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It's important to remember that in the hodgepodge of the office culture, there's a diversity of every kind of belief system. You aren't going to be in line politically with everyone, and that can't be a blocker for your performance. While on one hand, you must place your personal beliefs aside in some cases, in others, such as those involving legal or ethical disagreements, it's important to know where your line is."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A recent example that comes to mind is of an executive who became aware of extensive fraud within his company. Being in a leadership position, he wanted to fix the issue, but found that he was the only one willing to even talk about it. Things got uncomfortable, and realizing he couldn't make the progress he wanted, he resigned. Once the legal barrier was breached, he valued his freedom over loyalty to a company that could lead to prison."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Takeaway: It's better to leave a bad job."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "keep-it-to-yourself",
      children: "Keep It To Yourself"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We're social animals after all, so this may go against your best instincts, but if you're concerned about significant legal or ethical violations, you shouldn't confide in anyone but a lawyer with privileged conversations. Gossip is the most efficient force in an office, so if you don't want people labeling you as a risk (even the ones you're aligned with), you need to keep it to yourself."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Loose lips",
        src: (__webpack_require__(481)/* ["default"] */ .A) + "",
        width: "1280",
        height: "1667"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Takeaway: Loose lips sink ships."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-about-internal-legal-and-hr",
      children: "What About Internal Legal and HR?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "An early lesson that everyone should learn before entering the job market is that your employer's legal and HR work for the company, not the employees. These offices are there to identify risks to the business and to eliminate liabilities. There's not much more to it than that. So even if you just got a new General Counsel or \"Chief People Officer\" who is young, hip, and garners trust, you are not their client or priority, no matter what they tell you."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Takeaway: HR is not your friend."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "its-easy-to-get-caught",
      children: "It's Easy To Get Caught"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Are you reading this article as a concerned employee interested in blowing the whistle, and you're on your work computer? You've already misstepped. Workplace networks are almost always monitored, and the level of visibility is down to not only the website you visit, but also the web services that site uses. So if you visit nytimes.com, your employer will see that, as well as Google Analytics, or any other service the Times uses for their site. And for good reason; if you ever visit a seemingly benign site that uses a CDN in a \"high-risk\" country, you may be putting that network at risk."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Below is an exmaple of basic DNS monitoring. You can see different devices automatically making network calls, with full transparency about their activity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Network Logs",
        src: (__webpack_require__(4726)/* ["default"] */ .A) + "",
        width: "960",
        height: "767"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Takeaway: Never use a work computer, VPN, or network to do anything whistleblowing-related."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "document-everything-but-dont-take-documents",
      children: "Document Everything, But Don't Take Documents"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A key piece of information you'll need to support your concerns is your own documentation. Were you in a meeting where you were asked to do something you and the room knew to be illegal? Take note of the date and time of what you were asked to do, and who was present. Use a personal, non-work-issued phone with disk-encryption enabled (iPhone does this by default) and a strong passcode to keep notes. If you use an iPhone, make sure Advanced Data Protection is enabled so your notes and backups are end-to-end encrypted."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "While it may be tempting to use your phone's camera to take photos of your work computer, you should avoid this, since that can still be considered stealing company information. In fact, DO NOT take any documents from your workplace. You don't want to break the law trying to do the right thing. Wait until speaking to a lawyer before taking anything, including forwarding emails."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Takeaway: Taking documents, including photos of documents, can land you in jail."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "talk-to-a-lawyer",
      children: "Talk To a Lawyer"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You don't need a year's worth of notes before you can talk to a lawyer, and you don't need a lot of money, either. Many lawyers work on contingency, meaning they only get paid if you win. So, once you have a reasonable amount of information to support your concerns, reach out to someone who can help, ideally in your state, province, or area, who knows your local laws. You can find lawyers in the US on Hush Line's User Directory."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You don't have to show up perfectly to have a productive conversation, but when you speak to the legal professional (who can legally provide attorney-client confidentiality), make sure you sign a contract establishing that person as your legal representation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Takeaway: It likely won't cost you anything to consult with a lawyer."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "be-prepared-to-drop-it",
      children: "Be Prepared To Drop It"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Not everything concerning is illegal or unethical. If you learn that there's not a case to be made, be prepared to walk away. If you're going to risk your career, it should be for a slam dunk, not a reaching claim. And if you can't produce hard evidence, you may find lawyers hesitant to take your case."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Takeaway: It's better to live to fight another day."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ready-now-resign",
      children: "Ready? Now, Resign"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It may be a shock to hear, but if you have a strong case, you should immediately start looking for another job. \"Difference in company vision\" can be an adequate reason to give to your next employer for leaving your last role. Why resign? Once you're outted as someone behind a lawsuit targeting your company, everyone around you will now see you as a risk to their livelihoods. You've become a problem, and if the law keeps you in your job, it may be social ostracism and a dead-end career ladder that makes you finally leave."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The greater risk than simply being the office pariah is the stress that blowing the whistle can bring into your life. There are many stories of people spiraling into drug use, depression, and even suicide. Imagine having a career you've dreamed of your entire life taken from you because you wanted to do the right thing. Think it'll be easy to find a job after the fallout? Most whistleblowers change careers entirely because they're wearing the scarlet letter of Liability."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Many lawsuits can take years, and lawyers have methods of keeping you anonymous, at least through the most sensitive stages of the process. By the time your name comes out, you'll be in a different role at a different company, and will have more safeguards than you would from inside the organization you're in litigation against."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Takeaway: Fight from the outside to protect yourself and your career."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "eh-lets-just-drop-it",
      children: "Eh, Let's Just Drop It"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It's never a bad decision to take time to assess whether you want to go through with the process of disclosure. If you have a family, valued career, a high-paying job, or something else keeping you at your job, you're going to feel a strong sense of protectionism to guard what's yours, and that's good."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If you decide to walk away from the issue you identified, AND you haven't raised any alarms internally - talking to coworkers, HR, legal, or using your computer to research the crimes you're investigating - you can safely go back to your normal life. And if you find yourself in a workplace with ethics you don't align with, it's okay to look for a new job, even if the company has a name that looks great on a resume."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Takeaway: Don't raise alarms, and you can make decisions without stress."
      })
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

/***/ 9459
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-0a791e2c9c7080943782ad85040a8902.png");

/***/ }

}]);