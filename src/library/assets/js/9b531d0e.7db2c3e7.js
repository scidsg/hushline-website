"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[9664],{

/***/ 5198
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
const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
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

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/contact-form-security-study-2026","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2026-06-08-contact-form-security-study/index.mdx","source":"@site/blog/2026-06-08-contact-form-security-study/index.mdx","title":"Among 500 Top Domains, 0% of Assessed Contact Forms Met Our Full Security Standard","description":"A reproducible browser study of contact-form submission routes, other-domain scripts, early data transmission, identity requirements, browser guardrails, retention transparency, and end-to-end encryption.","date":"2026-06-08T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"}],"readingTime":31.6,"hasTruncateMarker":true,"authors":[{"name":"Glenn Sorrentino","title":"Executive Director, Science & Design","url":"https://scidsg.org","page":{"permalink":"/library/blog/authors/gsorrentino"},"socials":{"github":"https://github.com/glenn-sorrentino"},"imageURL":"/library/img/glenn.jpg","key":"gsorrentino"}],"frontMatter":{"slug":"contact-form-security-study-2026","title":"Among 500 Top Domains, 0% of Assessed Contact Forms Met Our Full Security Standard","description":"A reproducible browser study of contact-form submission routes, other-domain scripts, early data transmission, identity requirements, browser guardrails, retention transparency, and end-to-end encryption.","authors":["gsorrentino"],"tags":["hushline"]},"unlisted":false,"nextItem":{"title":"Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure","permalink":"/library/blog/crypto-modernization-whitepaper"}}');

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