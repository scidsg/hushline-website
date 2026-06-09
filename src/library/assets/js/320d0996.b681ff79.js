"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[3436],{

/***/ 842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassMark: () => (/* binding */ PassMark),
/* harmony export */   Percent: () => (/* binding */ Percent),
/* harmony export */   StudyDashboard: () => (/* binding */ StudyDashboard),
/* harmony export */   assessedForms: () => (/* binding */ assessedForms),
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   criterionResults: () => (/* binding */ criterionResults),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   evidenceCards: () => (/* binding */ evidenceCards),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   legendTerms: () => (/* binding */ legendTerms),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_06_08_contact_form_security_study_index_mdx_320_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   tierOptions: () => (/* binding */ tierOptions),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_06_08_contact_form_security_study_index_mdx_320_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6540);


const frontMatter = {
	slug: 'contact-form-security-study-2026',
	title: 'Among 500 Top Domains, 0% of Assessed Contact Forms Met Our Full Security Standard',
	description: 'A reproducible browser study of contact-form submission routes, other-domain scripts, early data transmission, identity requirements, browser guardrails, retention transparency, and end-to-end encryption.',
	authors: [
		'gsorrentino'
	],
	tags: [
		'hushline'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};




const assessedForms = [{
  rank: 45,
  domain: 'skype.com',
  url: 'https://support.microsoft.com/en-US/teams/free/microsoft-teams-free-help',
  transport: false,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 2,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: false,
  retention: false,
  e2ee: false
}, {
  rank: 6,
  domain: 'microsoft.com',
  url: 'https://support.microsoft.com/contactus',
  transport: false,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 3,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: false,
  retention: false,
  e2ee: false
}, {
  rank: 88,
  domain: 'workers.dev',
  url: 'https://www.cloudflare.com/resource/contact-enterprise-sales/',
  transport: false,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 7,
  preSubmitLeak: false,
  requiredHighRiskIdentity: true,
  cspFormAction: true,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}, {
  rank: 116,
  domain: 'b-cdn.net',
  url: 'https://bunny.net/contact/',
  transport: false,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 2,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: false,
  retention: false,
  e2ee: false
}, {
  rank: 190,
  domain: 'cnn.com',
  url: 'https://www.cnn.com/',
  transport: false,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 4,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: true,
  e2ee: false
}, {
  rank: 230,
  domain: 'nist.gov',
  url: 'https://www.nist.gov/contact',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 4,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}, {
  rank: 234,
  domain: 'ubuntu.com',
  url: 'https://ubuntu.com/',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 2,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}, {
  rank: 240,
  domain: 'stripe.com',
  url: 'https://stripe.com/contact/sales',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 1,
  preSubmitLeak: false,
  requiredHighRiskIdentity: true,
  cspFormAction: true,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}, {
  rank: 245,
  domain: 'meraki.com',
  url: 'https://www.cisco.com/site/us/en/about/contact-cisco/meraki/index.html',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 3,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}, {
  rank: 292,
  domain: 'www.gov.uk',
  url: 'https://www.gov.uk/contact/govuk',
  transport: true,
  privacy: true,
  hardened: false,
  secure: false,
  crossSiteScripts: 0,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}, {
  rank: 358,
  domain: 'quickconnect.to',
  url: 'https://kb.synology.com/en-us/DSM/help/DSM/AdminCenter/connection_quickconnect',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 2,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: true,
  e2ee: false
}, {
  rank: 364,
  domain: 'selectel.ru',
  url: 'https://selectel.ru/support/',
  transport: false,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 1,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}, {
  rank: 381,
  domain: 'plesk.com',
  url: 'https://www.plesk.com/contact-us/',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 2,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}, {
  rank: 385,
  domain: 'tp-link.com',
  url: 'https://www.tp-link.com/us/support/contact-technical-support/',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 3,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}, {
  rank: 400,
  domain: 'zendesk.com',
  url: 'https://www.zendesk.com/contact/',
  transport: false,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 2,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: true,
  e2ee: false
}, {
  rank: 410,
  domain: 'cloudns.net',
  url: 'https://www.cloudns.net/contact/',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 2,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: false,
  retention: false,
  e2ee: false
}, {
  rank: 414,
  domain: 'netangels.ru',
  url: 'https://www.netangels.ru/',
  transport: false,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 4,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: false,
  retention: false,
  e2ee: false
}, {
  rank: 429,
  domain: 'steamcommunity.com',
  url: 'https://www.valvesoftware.com/en/contact?contact-person=Translation%20Team%20Feedback',
  transport: false,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 2,
  preSubmitLeak: false,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: false,
  retention: false,
  e2ee: false
}, {
  rank: 481,
  domain: 'mediatek.com',
  url: 'https://www.mediatek.com/company/contact-us',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 8,
  preSubmitLeak: true,
  requiredHighRiskIdentity: false,
  cspFormAction: false,
  cspFrameAncestors: false,
  retention: false,
  e2ee: false
}, {
  rank: 491,
  domain: 'paloaltonetworks.com',
  url: 'https://www.paloaltonetworks.com/company/contact-sales',
  transport: true,
  privacy: false,
  hardened: false,
  secure: false,
  crossSiteScripts: 6,
  preSubmitLeak: false,
  requiredHighRiskIdentity: true,
  cspFormAction: false,
  cspFrameAncestors: true,
  retention: false,
  e2ee: false
}];
const tierOptions = [{
  key: 'secure',
  label: 'Full observable standard',
  shortLabel: 'Full',
  count: 0,
  description: 'The form showed every public sign we would want before calling it secure: safe submission, no other-domain scripts in the form, no early data transmission, minimal required identity, browser guardrails, retention clarity, and browser-side or end-to-end encryption evidence.'
}, {
  key: 'hardened',
  label: 'Hardened form',
  shortLabel: 'Hardened',
  count: 0,
  description: 'The form avoided the biggest privacy risks and also told the browser where the form may submit and who may embed it.'
}, {
  key: 'privacy',
  label: 'Privacy-respecting',
  shortLabel: 'Privacy',
  count: 1,
  description: 'The form used a safer submission route, kept other-domain scripts out of the form frame, did not send our synthetic values early, and did not require high-risk identity fields.'
}, {
  key: 'transport',
  label: 'Protected submission route',
  shortLabel: 'Route',
  count: 11,
  description: 'The page used HTTPS, the form submitted to an HTTPS destination, and the form used POST so submitted values should go in the request body instead of the URL.'
}];
const criterionResults = [{
  label: 'Page loaded over HTTPS',
  count: 20,
  note: '20 of 20'
}, {
  label: 'Submit destination used HTTPS',
  count: 19,
  note: '19 of 20'
}, {
  label: 'Form used POST',
  count: 11,
  note: '11 of 20'
}, {
  label: 'No other-domain scripts in form',
  count: 1,
  note: '1 of 20'
}, {
  label: 'No typed data sent before submit',
  count: 19,
  note: '19 of 20'
}, {
  label: 'No required high-risk identity',
  count: 17,
  note: '17 of 20'
}, {
  label: 'Submission destination locked by CSP',
  count: 2,
  note: '2 of 20'
}, {
  label: 'Embedding locked by CSP',
  count: 13,
  note: '13 of 20'
}, {
  label: 'Retention or deletion explained',
  count: 3,
  note: '3 of 20'
}, {
  label: 'Browser-side or E2EE evidence',
  count: 0,
  note: '0 of 20'
}];
const legendTerms = [{
  term: 'POST',
  plain: 'A form submission method that puts submitted values in the request body.',
  why: 'This is safer than GET for sensitive text because GET can put values in the URL, where they can appear in browser history, server logs, referrer headers, analytics, and screenshots.'
}, {
  term: 'Submit destination',
  plain: 'The URL the browser sends the form to after someone clicks send.',
  why: 'A page can be HTTPS while the form points somewhere else. We checked the page and the destination separately.'
}, {
  term: 'Other-domain script',
  plain: 'JavaScript loaded from a different registrable domain while the form is on screen.',
  why: 'If that script runs in the same frame as the textarea, it can technically read what a person types.'
}, {
  term: 'Pre-submit leak',
  plain: 'A network request containing a synthetic value after typing but before clicking send.',
  why: 'The user has not consented to submit yet. In this run, we saw one cross-site pre-submit leak: an email value sent to a HubSpot email-check endpoint.'
}, {
  term: 'CSP',
  plain: 'Content Security Policy, a browser rule set sent by the site.',
  why: '`form-action` limits where the form may submit. `frame-ancestors` limits who may embed the page.'
}, {
  term: 'E2EE evidence',
  plain: 'Public evidence that the message is encrypted in the browser to the recipient, not just protected by HTTPS on the way to the server.',
  why: 'HTTPS does not prove the server stores ciphertext or that staff, vendors, logs, or backups cannot read the message.'
}];
const evidenceCards = [{
  title: 'Submission route',
  count: '11 of 20',
  finding: 'Only 11 forms passed all three basic route checks: HTTPS page, HTTPS destination, and POST.',
  detail: 'Nine forms used GET or a JavaScript-only action. We did not submit the forms, so this is a route-quality finding, not proof that any user data was actually placed in a URL during our run.'
}, {
  title: 'Script access to the form',
  count: '19 of 20',
  finding: 'Nineteen forms loaded at least one other-domain script in the same frame as the form.',
  detail: 'Examples included Google Tag Manager, HubSpot, Marketo, Adobe, Yandex, New Relic, PostHog, Trustpilot, LiveChat, Microsoft CDN hosts, and bot/captcha services. One form, GOV.UK, had zero other-domain scripts in the form frame.'
}, {
  title: 'Data sent before submit',
  count: '1 of 20',
  finding: 'One form transmitted a synthetic value before the user clicked send.',
  detail: 'MediaTek sent the synthetic email field to `forms.hsforms.com/emailcheck/v1/json-ext` using an XHR POST request. We did not observe the synthetic message body, name, or phone number sent cross-site before submit.'
}, {
  title: 'Required identity',
  count: '3 of 20 failed',
  finding: 'Three forms required high-risk identity fields such as phone number, business email, company, or detailed business profiling.',
  detail: 'This matters because the safest sensitive-intake path should let someone ask for help without first disclosing more identity than the task requires.'
}, {
  title: 'Browser guardrails',
  count: '2 of 20',
  finding: 'Only two forms locked the submit destination with CSP `form-action`; thirteen limited framing with `frame-ancestors`.',
  detail: 'These headers are not encryption. They are defense-in-depth rules that reduce the blast radius of mistakes, injected code, and unauthorized embedding.'
}, {
  title: 'Storage and lifecycle clarity',
  count: '3 of 20',
  finding: 'Only three forms surfaced retention or deletion language on the assessed page.',
  detail: 'A privacy link in the footer is not the same as telling a sensitive sender how long the message persists, who can access it, and how deletion works.'
}, {
  title: 'Message confidentiality',
  count: '0 of 20',
  finding: 'No assessed form published specific browser-side or end-to-end encryption evidence.',
  detail: 'The test cannot prove plaintext storage from the outside. It can show whether the page gives a sender evidence that plaintext will not be readable by the receiving server or its vendors.'
}];
function Percent({value}) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
    children: [Math.round(value / assessedForms.length * 100), "%"]
  });
}
function PassMark({value, label}) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
    className: value ? 'cf-study-pass' : 'cf-study-fail',
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      "aria-hidden": "true",
      children: value ? 'Pass' : 'No'
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
      className: "cf-study-sr-only",
      children: [label, ": ", value ? 'passes' : 'does not pass']
    })]
  });
}
function StudyDashboard() {
  const [tier, setTier] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('secure');
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [resultFilter, setResultFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('all');
  const selectedTier = tierOptions.find(option => option.key === tier);
  const visibleForms = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return assessedForms.filter(form => {
      const matchesQuery = !normalizedQuery || form.domain.toLowerCase().includes(normalizedQuery) || form.url.toLowerCase().includes(normalizedQuery);
      const matchesResult = resultFilter === 'all' || resultFilter === 'pass' && form[tier] || resultFilter === 'not-pass' && !form[tier];
      return matchesQuery && matchesResult;
    });
  }, [query, resultFilter, tier]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
    className: "cf-study-dashboard",
    "aria-labelledby": "interactive-results",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
        .cf-study-dashboard {
          --cf-accent: #7253ed;
          --cf-good: #0b5d38;
          --cf-warning: #a15c00;
          --cf-bad: #b42318;
          --cf-border: color-mix(in srgb, var(--ifm-font-color-base) 18%, transparent);
          margin: 2rem 0;
        }
        #__blog-post-container a {
          text-decoration: underline;
          text-underline-offset: .15em;
        }
        .cf-study-hero {
          background:
            radial-gradient(circle at 92% 10%, color-mix(in srgb, var(--cf-accent) 24%, transparent), transparent 38%),
            var(--ifm-background-surface-color);
          border: 1px solid var(--cf-border);
          border-radius: 1.25rem;
          padding: clamp(1.25rem, 4vw, 2.5rem);
        }
        .cf-study-eyebrow {
          color: var(--cf-accent);
          font-size: .78rem;
          font-weight: 800;
          letter-spacing: .09em;
          margin: 0 0 .5rem;
          text-transform: uppercase;
        }
        .cf-study-big-number {
          font-size: clamp(3.4rem, 12vw, 7.5rem);
          font-weight: 850;
          letter-spacing: -.07em;
          line-height: .88;
          margin: .5rem 0 1rem;
        }
        .cf-study-big-number span {
          color: var(--cf-accent);
        }
        .cf-study-lede {
          font-size: clamp(1.05rem, 2.2vw, 1.35rem);
          line-height: 1.45;
          margin: 0;
          max-width: 48rem;
        }
        .cf-study-metrics {
          display: grid;
          gap: .8rem;
          grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
          margin: 1rem 0 2rem;
        }
        .cf-study-metric {
          background: var(--ifm-background-surface-color);
          border: 1px solid var(--cf-border);
          border-radius: .9rem;
          padding: 1rem;
        }
        .cf-study-metric strong {
          display: block;
          font-size: 1.8rem;
          line-height: 1;
          margin-bottom: .4rem;
        }
        .cf-study-controls {
          border: 1px solid var(--cf-border);
          border-radius: 1rem;
          margin: 1.5rem 0;
          padding: 1rem;
        }
        .cf-study-tier-buttons {
          display: grid;
          gap: .55rem;
          grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
        }
        .cf-study-tier-button {
          background: var(--ifm-background-color);
          border: 1px solid var(--cf-border);
          border-radius: .7rem;
          color: var(--ifm-font-color-base);
          cursor: pointer;
          min-height: 3.3rem;
          padding: .65rem .75rem;
          text-align: left;
        }
        .cf-study-tier-button[aria-pressed="true"] {
          border-color: var(--cf-accent);
          box-shadow: 0 0 0 2px color-mix(in srgb, var(--cf-accent) 25%, transparent);
        }
        .cf-study-tier-button strong, .cf-study-tier-button span {
          display: block;
        }
        .cf-study-tier-button span {
          font-size: .78rem;
          opacity: .75;
        }
        .cf-study-selected-result {
          align-items: baseline;
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          margin: 1.25rem 0 .4rem;
        }
        .cf-study-selected-result strong {
          color: var(--cf-accent);
          font-size: 2.4rem;
          line-height: 1;
        }
        .cf-study-bars {
          display: grid;
          gap: .75rem;
          margin: 1.5rem 0 2rem;
        }
        .cf-study-glossary, .cf-study-evidence-grid {
          display: grid;
          gap: .85rem;
          grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
          margin: 1rem 0 2rem;
        }
        .cf-study-term, .cf-study-evidence-card {
          background: var(--ifm-background-surface-color);
          border: 1px solid var(--cf-border);
          border-radius: .9rem;
          padding: 1rem;
        }
        .cf-study-term strong, .cf-study-evidence-card strong {
          display: block;
          font-size: 1rem;
          margin-bottom: .35rem;
        }
        .cf-study-term p, .cf-study-evidence-card p {
          margin: .35rem 0 0;
        }
        .cf-study-muted {
          color: color-mix(in srgb, var(--ifm-font-color-base) 72%, transparent);
          font-size: .9rem;
        }
        .cf-study-evidence-count {
          color: var(--cf-accent);
          font-size: 1.7rem;
          font-weight: 850;
          line-height: 1;
        }
        .cf-study-bar-row {
          display: grid;
          gap: .35rem;
          grid-template-columns: minmax(180px, 1fr) 3fr minmax(62px, auto);
          align-items: center;
        }
        .cf-study-bar-track {
          background: color-mix(in srgb, var(--ifm-font-color-base) 10%, transparent);
          border-radius: 999px;
          min-height: .8rem;
          overflow: hidden;
        }
        .cf-study-bar-fill {
          background: var(--cf-accent);
          border-radius: inherit;
          min-height: .8rem;
          min-width: 0;
        }
        .cf-study-table-controls {
          display: grid;
          gap: .75rem;
          grid-template-columns: minmax(180px, 1fr) minmax(150px, 220px);
          margin: 1rem 0;
        }
        .cf-study-table-controls input, .cf-study-table-controls select {
          background: var(--ifm-background-color);
          border: 1px solid var(--cf-border);
          border-radius: .55rem;
          color: var(--ifm-font-color-base);
          font: inherit;
          min-height: 2.7rem;
          padding: .55rem .7rem;
          width: 100%;
        }
        .cf-study-table-wrap {
          border: 1px solid var(--cf-border);
          border-radius: .8rem;
          overflow-x: auto;
        }
        .cf-study-table {
          border-collapse: collapse;
          display: table;
          font-size: .82rem;
          margin: 0;
          min-width: 880px;
          width: 100%;
        }
        .cf-study-table th, .cf-study-table td {
          border-bottom: 1px solid var(--cf-border);
          padding: .65rem .7rem;
          text-align: left;
          vertical-align: middle;
        }
        .cf-study-table tbody tr:last-child td { border-bottom: 0; }
        .cf-study-table th {
          background: color-mix(in srgb, var(--ifm-font-color-base) 6%, transparent);
          font-size: .72rem;
          letter-spacing: .04em;
          text-transform: uppercase;
        }
        .cf-study-domain {
          font-weight: 750;
          white-space: nowrap;
        }
        .cf-study-cell-note {
          display: block;
          font-size: .74rem;
          margin-top: .2rem;
          max-width: 13rem;
        }
        .cf-study-pass, .cf-study-fail {
          border-radius: 999px;
          display: inline-block;
          font-size: .7rem;
          font-weight: 800;
          padding: .2rem .48rem;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .cf-study-pass {
          background: color-mix(in srgb, var(--cf-good) 16%, transparent);
          color: var(--cf-good);
        }
        .cf-study-fail {
          background: color-mix(in srgb, var(--cf-bad) 14%, transparent);
          color: var(--cf-bad);
        }
        .cf-study-callout {
          border-left: .28rem solid var(--cf-accent);
          background: color-mix(in srgb, var(--cf-accent) 8%, var(--ifm-background-surface-color));
          border-radius: .35rem .8rem .8rem .35rem;
          margin: 1.5rem 0;
          padding: 1rem 1.2rem;
        }
        .cf-study-sr-only {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
        @media (max-width: 700px) {
          .cf-study-bar-row { grid-template-columns: 1fr auto; }
          .cf-study-bar-track { grid-column: 1 / -1; grid-row: 2; }
          .cf-study-table-controls { grid-template-columns: 1fr; }
        }
      `
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cf-study-hero",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "cf-study-eyebrow",
        children: "2026 contact-form security study"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cf-study-big-number",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: "0%"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        className: "cf-study-lede",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: "0 of 20 unique contact-form implementations"
        }), " met every observable control in our full standard. This is a strict “demonstrated secure” result, not proof that every form is exploitable."]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cf-study-metrics",
      "aria-label": "Study scope",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cf-study-metric",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: "500"
        }), "ranked domains screened"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cf-study-metric",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: "261"
        }), "reachable homepages"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cf-study-metric",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: "24"
        }), "domain instances with a form"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cf-study-metric",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: "20"
        }), "unique implementations assessed"]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cf-study-controls",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
        id: "interactive-results",
        children: "Change the definition and inspect the result"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "cf-study-muted",
        children: "These buttons change how strict the word “secure” is. The strictest definition requires every public signal we could check. The loosest definition only checks whether the form appears to submit safely."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cf-study-tier-buttons",
        role: "group",
        "aria-label": "Security standard",
        children: tierOptions.map(option => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
          className: "cf-study-tier-button",
          type: "button",
          "aria-pressed": tier === option.key,
          onClick: () => setTier(option.key),
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: option.label
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            children: [option.count, " of ", assessedForms.length]
          })]
        }, option.key))
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cf-study-selected-result",
        "aria-live": "polite",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Percent, {
            value: selectedTier.count
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
          children: [selectedTier.count, " of ", assessedForms.length, " passed “", selectedTier.label, ".”"]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: selectedTier.description
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      children: "Legend: what the terms mean"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cf-study-glossary",
      children: legendTerms.map(item => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cf-study-term",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: item.term
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: item.plain
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "cf-study-muted",
          children: item.why
        })]
      }, item.term))
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      children: "Control-by-control results"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "cf-study-muted",
      children: "Each row below is a yes/no control. A passing count means the control was visible from the browser during this run, not that the site passed a private architecture review."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cf-study-bars",
      children: criterionResults.map(criterion => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cf-study-bar-row",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: criterion.label
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cf-study-bar-track",
          "aria-hidden": "true",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cf-study-bar-fill",
            style: {
              width: `${criterion.count / assessedForms.length * 100}%`
            }
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: criterion.note
        })]
      }, criterion.label))
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      children: "What the data says for each control"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cf-study-evidence-grid",
      children: evidenceCards.map(card => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cf-study-evidence-card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cf-study-evidence-count",
          children: card.count
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: card.title
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: card.finding
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "cf-study-muted",
          children: card.detail
        })]
      }, card.title))
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      children: "Explore every assessed implementation"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "cf-study-muted",
      children: "“Pass” means that specific control was visible and satisfied in the browser. “No” means the control was missing or not demonstrated. For early data transmission, “Pass” means our synthetic values were not observed in cross-site requests before submit."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cf-study-table-controls",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "cf-study-sr-only",
          children: "Search assessed domains or URLs"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "search",
          value: query,
          onChange: event => setQuery(event.target.value),
          placeholder: "Search domain or URL"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "cf-study-sr-only",
          children: "Filter selected-tier result"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
          value: resultFilter,
          onChange: event => setResultFilter(event.target.value),
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "all",
            children: "All results"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "pass",
            children: "Pass selected tier"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "not-pass",
            children: "Did not pass selected tier"
          })]
        })]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      "aria-live": "polite",
      children: [visibleForms.length, " implementations shown."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cf-study-table-wrap",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
        className: "cf-study-table",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              children: "Rank / domain"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              children: "Submission route"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              children: "Other-domain scripts"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              children: "Typed data sent early"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              children: "Required identity"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              children: "Browser guardrails"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              children: "Retention explained"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              children: "Encryption evidence"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              children: selectedTier.shortLabel
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
          children: visibleForms.map(form => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                className: "cf-study-domain",
                children: ["#", form.rank, " ", form.domain]
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                href: form.url,
                target: "_blank",
                rel: "noopener noreferrer",
                children: "observed form"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PassMark, {
                value: form.transport,
                label: "Protected submission route"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cf-study-cell-note cf-study-muted",
                children: form.transport ? 'HTTPS page + HTTPS destination + POST.' : 'At least one route check failed.'
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
              children: [form.crossSiteScripts, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cf-study-cell-note cf-study-muted",
                children: form.crossSiteScripts === 0 ? 'No other-domain scripts observed in the form frame.' : `${form.crossSiteScripts} other-domain host${form.crossSiteScripts === 1 ? '' : 's'} could access the form frame.`
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PassMark, {
                value: !form.preSubmitLeak,
                label: "No observed pre-submit cross-site leak"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cf-study-cell-note cf-study-muted",
                children: form.preSubmitLeak ? 'Synthetic email sent to forms.hsforms.com before submit.' : 'No synthetic value observed cross-site before submit.'
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PassMark, {
                value: !form.requiredHighRiskIdentity,
                label: "No required high-risk identity"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cf-study-cell-note cf-study-muted",
                children: form.requiredHighRiskIdentity ? 'Required phone or detailed business identity.' : 'No high-risk identity field was required.'
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PassMark, {
                value: form.cspFormAction && form.cspFrameAncestors,
                label: "CSP form and frame restrictions"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cf-study-cell-note cf-study-muted",
                children: form.cspFormAction && form.cspFrameAncestors ? 'CSP locked both submit destination and embedding.' : 'Missing form-action, frame-ancestors, or both.'
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PassMark, {
                value: form.retention,
                label: "Retention disclosure"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cf-study-cell-note cf-study-muted",
                children: form.retention ? 'Lifecycle language found on the assessed page.' : 'No form-specific lifecycle language found.'
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PassMark, {
                value: form.e2ee,
                label: "E2EE evidence"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "cf-study-cell-note cf-study-muted",
                children: "No browser-side or E2EE evidence found."
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PassMark, {
                value: form[tier],
                label: selectedTier.label
              })
            })]
          }, `${form.rank}-${form.domain}`))
        })]
      })
    })]
  });
}
const toc = [{
  "value": "What “secure” means in this study",
  "id": "what-secure-means-in-this-study",
  "level": 2
}, {
  "value": "What actually leaked",
  "id": "what-actually-leaked",
  "level": 2
}, {
  "value": "What we can and cannot prove from outside",
  "id": "what-we-can-and-cannot-prove-from-outside",
  "level": 2
}, {
  "value": "Methodology",
  "id": "methodology",
  "level": 2
}, {
  "value": "Raw data you can audit",
  "id": "raw-data-you-can-audit",
  "level": 2
}, {
  "value": "What engineering teams should change",
  "id": "what-engineering-teams-should-change",
  "level": 2
}, {
  "value": "1. Isolate the sensitive form",
  "id": "1-isolate-the-sensitive-form",
  "level": 3
}, {
  "value": "2. Treat cross-site JavaScript as privileged access",
  "id": "2-treat-cross-site-javascript-as-privileged-access",
  "level": 3
}, {
  "value": "3. Add explicit CSP controls",
  "id": "3-add-explicit-csp-controls",
  "level": 3
}, {
  "value": "4. Make identity optional by default",
  "id": "4-make-identity-optional-by-default",
  "level": 3
}, {
  "value": "5. Encrypt for the recipient before transmission",
  "id": "5-encrypt-for-the-recipient-before-transmission",
  "level": 3
}, {
  "value": "6. Publish the data lifecycle",
  "id": "6-publish-the-data-lifecycle",
  "level": 3
}, {
  "value": "What this means for Hush Line embeds",
  "id": "what-this-means-for-hush-line-embeds",
  "level": 2
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StudyDashboard, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The short answer is stark: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "0% of the contact-form implementations we could\nassess demonstrated every control in our observable security standard"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The practical answer is more specific: most forms were not failing one exotic\ncryptography test. They were failing ordinary intake hygiene that a non-expert\ncan understand."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "19 of 20 forms gave other-domain JavaScript access to the form frame."
        }), " This\ndoes not prove those scripts collected the message, but it means they had the\ntechnical position to read what a person typed."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "9 of 20 forms failed the full submission-route check."
        }), " Every form page used\nHTTPS, but only 11 also submitted to an HTTPS destination with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "POST"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "1 of 20 forms sent typed data before submit."
        }), " MediaTek’s form sent the\nsynthetic email address to HubSpot’s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "forms.hsforms.com/emailcheck/v1/json-ext"
        }), "\nendpoint before we clicked send. We did not observe the synthetic message\nbody, name, or phone number sent cross-site before submit."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "17 of 20 forms avoided required high-risk identity fields."
        }), " Three required\nfields such as phone number or detailed business identity before a user could\ncomplete the form."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "0 of 20 forms published specific evidence of browser-side or end-to-end\nmessage encryption."
        }), " HTTPS is useful, but it does not prove ciphertext\nstorage or recipient-only access."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "3 of 20 forms surfaced retention or deletion language on the assessed page."
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-secure-means-in-this-study",
      children: "What “secure” means in this study"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "“Secure” is often used as a synonym for “served over HTTPS.” That is too weak for\na form that may receive reports about abuse, legal problems, workplace\nretaliation, security vulnerabilities, health, finances, or identity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We counted a form as meeting the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "full observable standard"
      }), " only when every\none of these controls was demonstrated:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Plain-English control"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Passing condition"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "What failure communicates"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Protected submission route"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["The page used HTTPS, the submit destination used HTTPS, and the form used ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "POST"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "The form may still work, but it did not show the basic route pattern expected for sensitive text"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Input isolation"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "No scripts from another registrable domain executed in the form’s frame"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Other-domain code had technical access to the fields"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "No typed data sent early"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Synthetic message, email, name, and phone canaries were not observed in cross-site requests before submission"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "A value moved before the user clicked send"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Data minimization"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Phone, address, account identifier, or similarly high-risk identity fields were not mandatory"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "The form demanded more identity than sensitive intake should require by default"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Browser guardrails"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["CSP included both ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "form-action"
            }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "frame-ancestors"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "The site did not ask the browser to enforce where forms may submit or who may embed the form"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Lifecycle transparency"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Retention or deletion handling was disclosed on the assessed page"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "The sender cannot see how long the message persists or who may access it"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Message confidentiality"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "The page published specific browser-side or end-to-end encryption evidence"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "HTTPS protects transport only; it does not prove encrypted storage or recipient-only access"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This is intentionally a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "demonstrated-security"
      }), " standard. A form that did not\npass is not automatically vulnerable. It means the form did not expose enough\nobservable evidence for us to classify it as secure under this threat model."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In other words, “secure” here does not mean “we found no exploit.” It means “a\nreasonable sender can see enough evidence, in the browser, to trust this as a\nsensitive intake surface.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-actually-leaked",
      children: "What actually leaked"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We observed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "one cross-site pre-submit leak"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The form was on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "mediatek.com"
      }), ". After the test typed a synthetic email address,\nthe browser sent that email value to:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-text",
        children: "host: forms.hsforms.com\npath: /emailcheck/v1/json-ext\nmethod: POST\nresource type: XHR\nmatched field type: email\ntiming: before submit\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We did ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "not"
      }), " observe the synthetic message body, name, or phone number sent to\na cross-site host before submit. That distinction matters. The strongest finding\nis not “every form leaked typed content during this test.” The stronger,\nreproducible finding is that most forms allowed unnecessary access paths, and\none form converted that access into an observed early transmission."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The most common exposure was not an observed leak; it was ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "script access"
      }), ". In\n19 of 20 forms, code from another registrable domain executed in the same frame\nas the form. Examples included Google Tag Manager, HubSpot, Marketo, Adobe,\nYandex, New Relic, PostHog, Trustpilot, LiveChat, Microsoft CDN hosts, and\nbot/captcha services. Some of those services may be legitimate operational\ndependencies. The point is narrower: if a script runs in the form frame, it is\nin the trust boundary for that form."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The standard draws on the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.w3.org/TR/privacy-principles/",
        children: "W3C Privacy Principles"
      }), ", especially\ndata minimization, transparency, purpose limitation, and sensitive-information\nhandling. The cross-site script criterion reflects\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html",
        children: "OWASP’s warning"
      }), "\nthat third-party JavaScript can disclose sensitive DOM data. The CSP checks use\nthe defense-in-depth guidance in the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html",
        children: "OWASP Content Security Policy Cheat Sheet"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-we-can-and-cannot-prove-from-outside",
      children: "What we can and cannot prove from outside"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The original hypothesis included plaintext storage and unnecessary server logs.\nThose are important questions, but a public browser crawl cannot directly answer\nthem."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We can observe:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "whether the page and submit destination used HTTPS"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "whether the form used POST or GET"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "other-domain script origins running in the form frame"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "field requirements"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "response security headers"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "pre-submit browser requests containing synthetic values"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "public claims about retention and end-to-end encryption"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We cannot observe:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "whether the receiving server logs request bodies"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "whether application databases store plaintext"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "who can access internal dashboards or backups"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "whether published retention promises are followed operationally"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "whether a non-public encryption control exists"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For those controls, the right follow-up is an evidence request: architecture,\ndata-flow diagrams, retention schedules, access-control policy, audit logs, and\nindependent testing. We did not convert “unknown” into “insecure,” but unknown\nalso did not qualify as demonstrated secure."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "methodology",
      children: "Methodology"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We used the top 500 pay-level domains from\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://tranco-list.eu/list/XLPJN",
        children: "Tranco list XLPJN"
      }), ", generated on\nJune 7, 2026 from 30 days of ranking inputs. Tranco is designed for reproducible\nweb measurement and provides permanent references for historical lists."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The crawl ran on June 8, 2026:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Request the HTTPS homepage, falling back to HTTP only when HTTPS navigation\nfailed."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Inspect the homepage and at most one highest-scoring contact, support,\nfeedback, help, report, or tip link."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Require a rendered form with a substantive non-CAPTCHA textarea."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Render candidate pages in headless Chrome and inspect every frame."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Record scripts executing in the same frame as the form."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Fill eligible fields with clearly synthetic values under ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "example.com"
        }), ",\ndispatch normal input/change/blur events, and watch requests for 3.5 seconds."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Never click submit, never send a form, and never solve or bypass a CAPTCHA."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Deduplicate identical form implementations reached through multiple ranked\ndomains."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Manually review every assessed implementation and remove search,\nCAPTCHA-only, honeypot-only, and failed-render false positives."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Of 500 ranked domains, 261 returned a reachable homepage in this run. The crawl\nfound 24 ranked-domain instances representing 20 unique form implementations.\nThe high attrition is expected because Tranco includes infrastructure domains,\nCDNs, APIs, redirectors, and sites that block automated browsers. Therefore the\nheadline denominator is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "20 assessed implementations"
      }), ", not all 500 domains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "raw-data-you-can-audit",
      children: "Raw data you can audit"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The complete redacted output is available as\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "pathname:///data/contact-form-study-2026.json",
        children: "JSON data"
      }), ", an\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "pathname:///data/contact-form-study-2026-assessed-implementations.csv",
        children: "assessed-implementations CSV"
      }), ",\nand the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "pathname:///data/contact-form-study-2026-tranco-XLPJN-top500.csv",
        children: "fixed top-500 ranking snapshot CSV"
      }), ".\nThe\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/scidsg/hushline-docs/blob/main/docs/scripts/contact-form-study.mjs",
        children: "study runner"
      }), "\nand fixed ranking snapshot are included in the documentation repository."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The exact fields behind the headline claims are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Claim in article"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Raw field or derivation"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "500 ranked domains screened"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "metadata.ranking.rankRange"
            }), " and the Tranco input CSV"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "261 reachable homepages"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "summary.reachableHomepages"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "20 unique implementations assessed"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["CSV row count, or JSON records where ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "score.assessed"
            }), " is true deduped by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "formFingerprint"
            })]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "0 passed the full observable standard"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "full_observable_standard"
            }), " in CSV, or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "score.secure"
            }), " in JSON"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "11 passed protected transport"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "protected_transport_tier"
            }), " in CSV, or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "score.baselineTransport"
            }), " in JSON"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "19 loaded other-domain scripts"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "no_third_party_scripts=false"
            }), " in CSV, or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "score.criteria.noThirdPartyScripts=false"
            }), " in JSON"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "1 sent typed data to a cross-site processor before submit"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "leaked_before_submit=true"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "third_party_canary_hosts"
            }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "canary_request_details"
            }), " in CSV, or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "browserCheck.leakedBeforeSubmit=true"
            }), " in JSON"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "0 published browser-side or E2EE evidence"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "encryption_disclosed=false"
            }), " in CSV, or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "score.criteria.encryptionDisclosed=false"
            }), " in JSON"]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For example, a reviewer can reproduce the strict headline from the CSV by\ncounting rows where ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "full_observable_standard"
      }), " is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "true"
      }), "; the answer is zero.\nThe MediaTek pre-submit finding is the one row where ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "leaked_before_submit"
      }), " is\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "true"
      }), ", with the redacted request recorded as:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-text",
        children: "POST forms.hsforms.com/emailcheck/v1/json-ext XHR matched=email\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The CSV also includes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "canary_request_count"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "canary_hosts"
      }), ". Those fields\nshow any request containing a synthetic value after input, including same-party\nvalidation requests. The leak claim uses the narrower ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "leaked_before_submit"
      }), "\nboolean and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "third_party_canary_hosts"
      }), " field, which require a synthetic value to\nmove to a different registrable domain before the form was submitted."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This evidence still has limits. It supports claims about what a browser could\nobserve during this run. It does not prove internal plaintext storage, server\nlogging, access-control policy, or retention enforcement."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-engineering-teams-should-change",
      children: "What engineering teams should change"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "1-isolate-the-sensitive-form",
      children: "1. Isolate the sensitive form"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Do not place a sensitive textarea in the same document as advertising,\nsession-replay, marketing automation, A/B testing, or broad tag-manager code.\nUse a dedicated form document with a minimal script set. A sandboxed cross-origin\niframe can prevent scripts in the parent page from reading the form."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "2-treat-cross-site-javascript-as-privileged-access",
      children: "2. Treat cross-site JavaScript as privileged access"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "An analytics script does not need to exfiltrate a canary during this test to be\na risk. If it executes in the form frame, it can read the DOM. Inventory every\nscript origin, identify its owner and purpose, and remove it unless it is\nnecessary for the submission."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "3-add-explicit-csp-controls",
      children: "3. Add explicit CSP controls"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "At minimum, constrain where the form may submit and who may frame it:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-text",
        children: "Content-Security-Policy:\n  default-src 'self';\n  script-src 'self';\n  connect-src 'self';\n  form-action 'self';\n  frame-ancestors 'self' https://approved.example;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Real deployments may need additional exact origins, but broad wildcards and\nmarketing domains should not be inherited by a sensitive intake surface."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "4-make-identity-optional-by-default",
      children: "4. Make identity optional by default"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A reply address can be useful, but it should not be confused with a security\nrequirement. Ask only for fields necessary to complete the user’s stated task.\nFor high-risk reporting, anonymous submission should be a first-class path."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "5-encrypt-for-the-recipient-before-transmission",
      children: "5. Encrypt for the recipient before transmission"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "TLS protects the hop to the web server. It does not stop that server, its logs,\nits database operators, or a compromised application from reading plaintext.\nFor sensitive intake, encrypt the message in the browser to a recipient-held key\nand fail closed if encryption cannot be completed."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "6-publish-the-data-lifecycle",
      children: "6. Publish the data lifecycle"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "State what is collected, whether metadata is minimized, where ciphertext or\nplaintext is stored, who can access it, how long it is retained, and how it is\ndeleted. A generic footer privacy link is not a substitute for form-specific\nhandling information."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-this-means-for-hush-line-embeds",
      children: "What this means for Hush Line embeds"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The study supports the product premise behind Hush Line’s embeddable forms, but\nthe comparison should be stated in measurable terms."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For sensitive intake, the most important question is not “does the page have a\ncontact form?” It is whether the form keeps the sender away from the host site’s\nmarketing stack, avoids early data sharing, and encrypts the message for the\nrecipient before it becomes ordinary web-app data."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Using that narrower ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "core sensitive-intake"
      }), " definition, the comparison is:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Core sensitive-intake control"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Best observed among assessed forms"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Hush Line embed evidence"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Protected submission route"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "11 of 20 used HTTPS page + HTTPS destination + POST"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["Hush Line embed form uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "method=\"POST\""
            }), " and same-app submit route"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line matches the best observed route pattern"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Keep host-page scripts away from the message fields"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "1 of 20 had zero other-domain scripts in the form frame"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line places the intake form in a sandboxed iframe and the embed template loads Hush Line-owned scripts, not the host page’s analytics scripts"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line is designed for isolation, not co-location"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Do not send typed values before submit"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "19 of 20 had no observed cross-site canary leak; 1 sent the synthetic email to HubSpot before submit"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line’s embed has no third-party form processor in the template and uses recipient encryption before final submission when JavaScript is available"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line removes the observed leak class from the form architecture"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Require only necessary identity"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "17 of 20 did not require high-risk identity fields"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line fields are recipient-configurable and can be deployed without required phone, company, or business identity fields"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line can preserve anonymous intake; deployers must keep it configured that way"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Encrypt the message for the recipient"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "0 of 20 published browser-side or end-to-end encryption evidence"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line labels encryption state, loads recipient public keys, encrypts configured fields in the browser, and blocks eligible embeds when the recipient lacks a usable key"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line has the clearest measurable advantage"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That gives a reproducible comparison:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "0 of 20 assessed forms"
        }), " passed the combined core set of protected route,\nno other-domain form-frame scripts, no observed early cross-site canary, and\nbrowser-side or end-to-end encryption evidence."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Hush Line embeds have implementation evidence for that core set"
        }), " when the\nrecipient has a usable key and the deployer keeps identity fields optional."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["The two Hush Line follow-ups identified by the full rubric are not\narchitectural equivalents of the common contact-form failures. They are\nexplicit, observable hardening and disclosure tasks, and\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/pull/2156",
          children: "Hush Line PR #2156"
        }), " implements\nboth."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cf-study-callout",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
          children: "Objective takeaway:"
        }), " Hush Line is the best choice in this\ncomparison for sensitive intake because it is the only evaluated option with\na purpose-built isolated embed, recipient-key encryption evidence, no\ndependence on the host page’s marketing scripts, and a documented\nimplementation path for the two remaining observable follow-ups."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is still not a license to overclaim. A fair public claim is:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Hush Line gives organizations an isolated, recipient-encrypted intake form\nthat addresses the biggest observable failures found in popular-site contact\nforms. In this study, no assessed conventional contact-form implementation\ndemonstrated the same combination of isolation and encryption evidence."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A claim we should avoid until\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/scidsg/hushline/pull/2156",
        children: "Hush Line PR #2156"
      }), " is merged\nand deployed is:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Hush Line already passes every criterion in the full observable standard."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The current Hush Line embed implementation:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["places the form in a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/hushline/embeds.py",
          children: "sandboxed iframe"
        }), "\nwith ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "referrerpolicy=\"no-referrer\""
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "requires exact allowed parent origins"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "uses an HTTPS POST form"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["labels encryption state in the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/hushline/templates/embed_profile.html",
          children: "embedded form"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "encrypts configured fields in the browser to recipient public keys"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "blocks eligible embeds when the recipient lacks a usable encryption key"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Those statements are reproducible from the linked implementation:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["iframe sandboxing and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "referrerpolicy=\"no-referrer\""
        }), " are generated in\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/hushline/embeds.py",
          children: "hushline/embeds.py"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["exact embed origins are normalized and reject wildcards in\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/hushline/model/username.py",
          children: "hushline/model/username.py"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["the embed form, encryption badge, recipient public-key payload, and POST route\nare rendered in\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/hushline/templates/embed_profile.html",
          children: "hushline/templates/embed_profile.html"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["browser-side encryption is implemented in\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/hushline/static/js/client-side-encryption.js",
          children: "hushline/static/js/client-side-encryption.js"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["embed-specific ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "frame-ancestors"
        }), " handling is applied in\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/hushline/__init__.py",
          children: ["hushline/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
            children: "init"
          }), ".py"]
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Applying the full rubric to our own implementation still produced two concrete\nfollow-ups. Both are now covered by\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/scidsg/hushline/pull/2156",
        children: "Hush Line PR #2156"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["It adds an explicit ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "form-action 'self'"
        }), " directive to the Hush Line CSP."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "It surfaces a concise, linked retention and privacy explanation inside the\nembed."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Until that PR is merged and deployed, this study should not make an unqualified\nproduction claim that “Hush Line passes the full observable standard.” The\ndefensible value proposition is strong enough without that overstatement:\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Hush Line provides an isolated, recipient-encrypted intake component that\nreplaces the riskiest parts of a typical contact-form stack, and the two\nremaining observable gaps now have a specific, reviewable implementation path."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The experiment supports the core hypothesis, with an important qualification.\nWe did not prove that most contact forms store plaintext or log message bodies.\nWe did find that the observable security posture of popular-site contact forms\nis weak:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "none demonstrated the full standard"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "almost every form shared a frame with cross-site JavaScript"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "only about half showed a protected submission route"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "retention information was uncommon"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "none published specific end-to-end encryption evidence"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That is enough to make contact-form security a measurable product category\nrather than a vague assertion. It also gives engineering teams a concrete\nchecklist and gives Hush Line a value proposition grounded in reproducible data,\nnot fear."
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

/***/ 7792
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/contact-form-security-study-2026","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2026-06-08-contact-form-security-study/index.mdx","source":"@site/blog/2026-06-08-contact-form-security-study/index.mdx","title":"Among 500 Top Domains, 0% of Assessed Contact Forms Met Our Full Security Standard","description":"A reproducible browser study of contact-form submission routes, other-domain scripts, early data transmission, identity requirements, browser guardrails, retention transparency, and end-to-end encryption.","date":"2026-06-08T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"}],"readingTime":31.72,"hasTruncateMarker":true,"authors":[{"name":"Glenn Sorrentino","title":"Executive Director, Science & Design","url":"https://scidsg.org","page":{"permalink":"/library/blog/authors/gsorrentino"},"socials":{"github":"https://github.com/glenn-sorrentino"},"imageURL":"/library/img/glenn.jpg","key":"gsorrentino"}],"frontMatter":{"slug":"contact-form-security-study-2026","title":"Among 500 Top Domains, 0% of Assessed Contact Forms Met Our Full Security Standard","description":"A reproducible browser study of contact-form submission routes, other-domain scripts, early data transmission, identity requirements, browser guardrails, retention transparency, and end-to-end encryption.","authors":["gsorrentino"],"tags":["hushline"]},"unlisted":false,"nextItem":{"title":"Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure","permalink":"/library/blog/crypto-modernization-whitepaper"}}');

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