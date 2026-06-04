"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[3211],{

/***/ 3388
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/crypto-modernization-whitepaper","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2026-05-28-crypto-modernization-whitepaper/index.md","source":"@site/blog/2026-05-28-crypto-modernization-whitepaper/index.md","title":"Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure","description":"Hush Line exists for moments when a person needs to disclose sensitive information without being exposed by the tool that was supposed to protect them. That changes how crypto modernization has to be planned. The goal is not to chase new primitives for their own sake. The goal is to preserve the whistleblower\'s path to a trusted recipient while reducing the harm caused by database exposure, key-management mistakes, migration failure, or unclear security claims.","date":"2026-05-28T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"},{"inline":false,"label":"Whistleblowing","permalink":"/library/blog/tags/whistleblowing","description":"Whistleblowing articles"}],"readingTime":16.79,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"crypto-modernization-whitepaper","title":"Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure","subtitle":"How Hush Line is modernizing encrypted data handling without weakening usability, anonymity, or migration safety.","tags":["hushline","whistleblowing"]},"unlisted":false,"nextItem":{"title":"Who Should Run a Personal Server Tip Line","permalink":"/library/blog/who-should-run-a-personal-server-tip-line"}}');

/***/ },

/***/ 5748
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_05_28_crypto_modernization_whitepaper_index_md_82a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_05_28_crypto_modernization_whitepaper_index_md_82a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3388);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'crypto-modernization-whitepaper',
	title: 'Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure',
	subtitle: 'How Hush Line is modernizing encrypted data handling without weakening usability, anonymity, or migration safety.',
	tags: [
		'hushline',
		'whistleblowing'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Why Crypto Modernization Matters for Whistleblowing Systems",
  "id": "why-crypto-modernization-matters-for-whistleblowing-systems",
  "level": 2
}, {
  "value": "Current Security and Privacy Goals",
  "id": "current-security-and-privacy-goals",
  "level": 2
}, {
  "value": "What Is Already Shipped",
  "id": "what-is-already-shipped",
  "level": 2
}, {
  "value": "What Is Planned, Not Yet Shipped",
  "id": "what-is-planned-not-yet-shipped",
  "level": 2
}, {
  "value": "Threat Model",
  "id": "threat-model",
  "level": 2
}, {
  "value": "In Scope",
  "id": "in-scope",
  "level": 3
}, {
  "value": "Out Of Scope",
  "id": "out-of-scope",
  "level": 3
}, {
  "value": "Protected Data Paths",
  "id": "protected-data-paths",
  "level": 2
}, {
  "value": "Modernization Principles",
  "id": "modernization-principles",
  "level": 2
}, {
  "value": "1. Preserve Existing Ciphertext Readability",
  "id": "1-preserve-existing-ciphertext-readability",
  "level": 3
}, {
  "value": "2. Version the Envelope, Not Just the Algorithm",
  "id": "2-version-the-envelope-not-just-the-algorithm",
  "level": 3
}, {
  "value": "3. Bind Ciphertext to Stable Domains",
  "id": "3-bind-ciphertext-to-stable-domains",
  "level": 3
}, {
  "value": "4. Separate Concerns",
  "id": "4-separate-concerns",
  "level": 3
}, {
  "value": "5. Treat Migration Evidence as a Release Gate",
  "id": "5-treat-migration-evidence-as-a-release-gate",
  "level": 3
}, {
  "value": "Candidate Cryptographic Direction",
  "id": "candidate-cryptographic-direction",
  "level": 2
}, {
  "value": "Current Fernet Continuation",
  "id": "current-fernet-continuation",
  "level": 3
}, {
  "value": "AES-256-GCM as the Preferred Future AEAD Candidate",
  "id": "aes-256-gcm-as-the-preferred-future-aead-candidate",
  "level": 3
}, {
  "value": "ChaCha20-Poly1305 as a Deferred Alternative",
  "id": "chacha20-poly1305-as-a-deferred-alternative",
  "level": 3
}, {
  "value": "HPKE and Future Recipient Encryption",
  "id": "hpke-and-future-recipient-encryption",
  "level": 3
}, {
  "value": "Post-Quantum Readiness",
  "id": "post-quantum-readiness",
  "level": 3
}, {
  "value": "Migration and Rollout Model",
  "id": "migration-and-rollout-model",
  "level": 2
}, {
  "value": "Usability and Accessibility Requirements",
  "id": "usability-and-accessibility-requirements",
  "level": 2
}, {
  "value": "Risks and Open Questions",
  "id": "risks-and-open-questions",
  "level": 2
}, {
  "value": "Roadmap",
  "id": "roadmap",
  "level": 2
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
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
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line exists for moments when a person needs to disclose sensitive information without being exposed by the tool that was supposed to protect them. That changes how crypto modernization has to be planned. The goal is not to chase new primitives for their own sake. The goal is to preserve the whistleblower's path to a trusted recipient while reducing the harm caused by database exposure, key-management mistakes, migration failure, or unclear security claims."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This whitepaper describes Hush Line's crypto modernization work as of May 28, 2026. It distinguishes what is already shipped from what is planned, what is deliberately deferred, and what must be true before Hush Line can call an existing-ciphertext migration \"best-in-class\" in the domain-bound encryption sense."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line currently combines several layers of protection:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "public tip pages that can receive messages without requiring the sender to create an account"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "recipient PGP keys for message and notification-content encryption paths"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "server-side encrypted database fields for selected sensitive values"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "encrypted browser session cookies"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "setup flows that block message intake until recipients have usable PGP key material"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "operational guardrails that require compatibility, rollback, and recovery planning before encryption-format changes"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The modernization work described here focuses on selected server-side encrypted database fields. It does not replace Hush Line's recipient PGP workflow, change password hashing, change browser session secrets, alter TLS, or claim to solve endpoint compromise. Its primary security objective is defense in depth against database-only or backup-only exposure: an attacker can inspect database contents, but cannot read the application secret material or execute application code."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The current production encrypted-field write path remains legacy Fernet unless operators explicitly configure the transitional ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "envelope-fernet"
      }), " format after the required readiness gates. Hush Line has also prototyped an AES-256-GCM encrypted-field envelope with authenticated associated data (AAD), but that prototype is not a production write path."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The core modernization direction is:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "preserve readability of existing ciphertext before changing write formats"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "use versioned envelopes so algorithms and formats can be migrated intentionally"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "bind future AEAD ciphertext to stable field domains and immutable row identifiers"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "keep password hashing, session encryption, and operational key management separate from encrypted-field work"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "require staging or restored-backup rehearsal before production migration"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "avoid claims that exceed deployed behavior"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-crypto-modernization-matters-for-whistleblowing-systems",
      children: "Why Crypto Modernization Matters for Whistleblowing Systems"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Whistleblowing systems do not only process \"data.\" They process information that can affect employment, immigration status, litigation, physical safety, retaliation risk, and public-interest investigations. ISO 37002 frames whistleblowing systems around trust, impartiality, and protection; Hush Line translates that into product priorities such as anonymity of the whistleblower, confidentiality and integrity of disclosures, authenticity of the receiver, plausible deniability, availability, and usability."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For Hush Line, cryptography has to support those priorities without making the product unusable. A system that offers strong theoretical confidentiality but fails during setup can push recipients to publish an intake page before encryption is ready. A system that rewrites stored ciphertext without rollback proof can turn protected records into unrecoverable records. A system that silently changes key behavior during startup can make disaster recovery depend on side effects operators did not approve."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Modernization therefore has two jobs:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Improve cryptographic and operational properties where Hush Line has identified a real gap."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Keep the existing disclosure flow available, understandable, and recoverable while the system changes."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That second job is not optional. For Hush Line, migration safety is a security property."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "current-security-and-privacy-goals",
      children: "Current Security and Privacy Goals"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line's current product surface supports unauthenticated senders, authenticated recipients, paid recipient features such as aliases and custom fields, and administrator controls for managed deployments. Crypto modernization has to respect all of those flows."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The most relevant current behavior is:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Senders can submit messages from public recipient pages without creating an account."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Recipients configure PGP keys manually or through Proton key lookup."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Public message intake is blocked when the recipient does not have usable recipient PGP key material."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Email notifications can be generic, include message content, or encrypt the full email body for PGP-capable recipients."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Multi-recipient notification paths can use per-recipient PGP keys."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Selected database fields are encrypted server-side with application-managed key material."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Custom field values use the same encrypted-field wrapper; when a custom field is marked encrypted, the stored value may also contain recipient PGP ciphertext."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This gives Hush Line a layered model. Recipient PGP protects disclosure content for recipient workflows. Server-side encrypted fields reduce harm if a database, backup, or export leaks without the corresponding application secret. Operational controls protect the migration path so that a security change does not create silent data loss."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-is-already-shipped",
      children: "What Is Already Shipped"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The following items are already present in the main Hush Line application work:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Area"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Current state"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Recipient-key setup"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Recipients can add a PGP key manually or import a Proton public key during onboarding or settings."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Intake guard"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Public intake is blocked when the recipient lacks usable PGP key material."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Notification modes"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line supports generic notification only, message-content notification, and full-body encrypted notification behavior."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Multi-recipient notifications"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Enabled notification recipients can have separate email addresses and PGP keys."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Server-side encrypted fields"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["Selected fields are encrypted through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "hushline.crypto.encrypt_field()"
            }), " and read through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "decrypt_field()"
            }), "."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Fernet timestamp mitigation"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line pins Fernet token time to zero for encrypted-field writes to avoid storing per-write activity timestamps in those ciphertexts."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Versioned envelope compatibility"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["Hush Line can read legacy Fernet values and a transitional ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "hlfield:"
            }), " Fernet envelope format."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "AES-GCM prototype"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line has prototype helpers for AES-256-GCM envelopes with AAD, wrong-domain failure behavior, and negative tests."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Migration planning"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Hush Line has an encrypted-field modernization ADR, AEAD evaluation, migration runbook, rehearsal template, and deployment-readiness document in the main app repo."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["These shipped pieces are meaningful, but they are not the same as a completed production AEAD migration. The current ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "envelope-fernet"
      }), " format is a compatibility and rollout format. It adds explicit versioning around existing Fernet ciphertext. It does not cryptographically bind ciphertext to a table, column, stable domain, or immutable row identifier."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-is-planned-not-yet-shipped",
      children: "What Is Planned, Not Yet Shipped"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The following work remains planned or blocked pending maintainer approval:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "promoting the AES-256-GCM prototype to a production encrypted-field writer"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "adding official AES-GCM known-answer vectors and Hush Line-specific envelope vectors"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "enabling production writes that cryptographically bind ciphertext to stable domains and canonical AAD"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "rehearsing live encrypted-field migration against staging or restored-backup data"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "enabling a production migration of existing encrypted-field values"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "retiring legacy Fernet reads after migration completion and rollback windows are closed"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["adding multi-key production readers or key identifiers for graceful ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ENCRYPTION_KEY"
        }), " rotation"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "introducing external key-service support or sealed local secret tooling"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line should not claim production AAD guarantees, domain-bound encrypted-field completion, or \"best-in-class\" existing-ciphertext migration completion until the production AEAD writer, migration rehearsal, release gates, and maintainer approval are complete."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "threat-model",
      children: "Threat Model"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "in-scope",
      children: "In Scope"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Encrypted-field modernization is designed for database-only exposure:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "leaked Postgres tables, snapshots, backups, exports, or support bundles"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "read-only database credentials without application secret access"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["accidental raw database disclosure without ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ENCRYPTION_KEY"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "database row or column tampering that future AAD-aware ciphertext can detect"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "ciphertext copied between fields, rows, or deployments where future domain binding can make misuse fail closed"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is a defense-in-depth layer. It is valuable because database backups and exports are operationally common, long-lived, and easy to mishandle."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "out-of-scope",
      children: "Out Of Scope"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Encrypted database fields do not protect plaintext when the attacker can use Hush Line as the application can:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "remote code execution or malicious dependency execution"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["theft of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ENCRYPTION_KEY"
        }), ", future encrypted-field keys, process memory, container environment variables, or deploy secrets"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "compromised CI/CD, build artifacts, or deployment paths"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "malicious JavaScript that defeats client-side encryption before submission"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "authenticated recipient account compromise"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "endpoint compromise on the sender or recipient device"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "coercion, subpoena, traffic analysis, or other operational-security threats outside database-field encryption"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This boundary matters. A stronger encrypted-field format reduces harm from database exposure. It does not make a fully compromised application server safe."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "protected-data-paths",
      children: "Protected Data Paths"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The encrypted-field modernization inventory currently covers:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "TOTP shared secrets for two-factor authentication"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "legacy or synchronized notification email addresses"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "custom SMTP hostnames, usernames, and passwords"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "recipient public PGP key material"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "notification-recipient email addresses and public PGP keys"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "custom message-field values"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Some intentionally visible or separately protected values are out of scope:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "password hashes, which are verifiers rather than encrypted secrets"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "usernames, directory visibility, public profile metadata, and trust badges"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "message status, timestamps, reply slugs, and relational metadata"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "billing identifiers and subscription metadata"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "SMTP port, SMTP encryption mode, and SMTP sender metadata"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "field labels, field types, choices, and sort order"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The point is not to encrypt every column. The point is to have a code-owned inventory that states what is protected, what is not, and why."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "modernization-principles",
      children: "Modernization Principles"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "1-preserve-existing-ciphertext-readability",
      children: "1. Preserve Existing Ciphertext Readability"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Any production encryption-format change has to read old values before it writes new ones. Hush Line's dual-read approach supports legacy Fernet and transitional envelopes together so operators can deploy readers before changing writers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This avoids a common failure mode: shipping a new format that works for new rows while breaking old rows or making rollback unsafe."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "2-version-the-envelope-not-just-the-algorithm",
      children: "2. Version the Envelope, Not Just the Algorithm"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Algorithm agility requires more than changing a function call. A durable envelope needs to say which format it uses, how to parse it, where the nonce or encapsulated key lives, and what context must be authenticated."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Hush Line's current envelope prefix is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "hlfield:"
      }), ". The transitional ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "envelope-fernet"
      }), " format wraps a Fernet token. The prototype AEAD format stores an algorithm identifier, version, nonce, and ciphertext in an ASCII-safe envelope."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "3-bind-ciphertext-to-stable-domains",
      children: "3. Bind Ciphertext to Stable Domains"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Future AEAD writes should authenticate stable context:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "algorithm"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "envelope version"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "AAD schema"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "stable domain string"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "table and column"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "immutable row identifiers"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The AAD contract must avoid mutable values such as usernames, email addresses, display names, profile text, field labels, message text, SMTP settings, or PGP key text. If mutable values were authenticated, normal profile or settings edits could make historical ciphertext undecryptable unless Hush Line retained every prior value."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "4-separate-concerns",
      children: "4. Separate Concerns"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Encrypted-field modernization is not password hashing modernization. It is not browser session-key rotation. It is not operational key-service design. Hush Line explicitly separates:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ENCRYPTION_KEY"
        }), " for server-side encrypted database fields"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "SESSION_FERNET_KEY"
        }), " for encrypted browser session cookies"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Flask ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "SECRET_KEY"
        }), " for application secret needs such as HMAC helpers"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "password hashes as authentication verifiers"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "recipient PGP keys as disclosure-delivery keys"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Keeping these separate avoids broad, risky migrations and makes recovery behavior easier to explain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "5-treat-migration-evidence-as-a-release-gate",
      children: "5. Treat Migration Evidence as a Release Gate"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A cryptographic migration should not be accepted because the code compiles. Hush Line's migration plan requires preflight checks, dry runs, small live batches, idempotent resume, per-row verification, backup-and-restore rehearsal, progress reporting, rollback rehearsal, and release-gate artifacts that avoid plaintext and full ciphertext."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The migration helper must not log plaintext disclosures, secrets, private keys, tokens, TOTP secrets, email passwords, raw encrypted-field secrets, or full ciphertext values."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "candidate-cryptographic-direction",
      children: "Candidate Cryptographic Direction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "current-fernet-continuation",
      children: "Current Fernet Continuation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Fernet remains the lowest immediate-risk production write path because it is already deployed, text-friendly, and readable by existing application properties. Hush Line also pins Fernet timestamps to zero for encrypted-field writes to avoid storing per-write activity timing inside ciphertext."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The limitation is that Fernet does not provide native AAD. A transitional outer envelope can support versioning and rollout checks, but it cannot make a Fernet token fail closed if copied into the wrong field or row unless that context is separately authenticated."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "aes-256-gcm-as-the-preferred-future-aead-candidate",
      children: "AES-256-GCM as the Preferred Future AEAD Candidate"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The Hush Line AEAD evaluation identifies AES-GCM as the preferred future AEAD candidate if maintainers approve a production encrypted-field algorithm change. AES-GCM is broadly deployed, available through the existing Python ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "cryptography"
      }), " dependency, and fits Hush Line's desired AAD envelope model."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "AES-GCM also has a severe misuse boundary: a nonce must be unique for every encryption under the same key. Hush Line's prototype uses 96-bit random nonces, which align with standard GCM practice for expected encrypted-field write volume, but a production rollout still needs explicit test vectors, write-count monitoring, and fail-closed parsing."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "chacha20-poly1305-as-a-deferred-alternative",
      children: "ChaCha20-Poly1305 as a Deferred Alternative"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "ChaCha20-Poly1305 is a sound AEAD for many systems, especially where software performance and non-FIPS deployments are the priority. Hush Line has not identified a Hush Line-specific reason to choose it before AES-GCM for encrypted database fields. It remains a reasonable future option if deployment constraints change."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "hpke-and-future-recipient-encryption",
      children: "HPKE and Future Recipient Encryption"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hybrid Public Key Encryption (HPKE) is an IETF standard for encrypting arbitrary plaintexts to a recipient public key using a KEM, KDF, and AEAD. It is relevant to future design discussions because Hush Line's product problem includes public-key encryption to recipients, multi-recipient delivery, and possible future protocol agility beyond classic OpenPGP workflows."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "HPKE is not currently a replacement for Hush Line's deployed recipient PGP path. A move toward HPKE would need recipient key lifecycle design, browser support decisions, key discovery, migration strategy, interoperability expectations, user-facing recovery behavior, and security review."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "post-quantum-readiness",
      children: "Post-Quantum Readiness"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "NIST finalized its first post-quantum cryptography standards in August 2024, including ML-KEM for key establishment and ML-DSA and SLH-DSA for signatures. Signal's PQXDH work shows one pragmatic model for hybridizing classical and post-quantum key agreement: combine a conventional elliptic-curve component with a post-quantum KEM so the handshake does not rely on a single mathematical assumption."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For Hush Line, post-quantum readiness should be treated as roadmap analysis, not as an immediate production claim. Disclosure systems face \"harvest now, decrypt later\" concerns, but the practical migration path depends on recipient key formats, browser cryptography support, OpenPGP ecosystem support, ciphertext size, delivery compatibility, and usability. A premature post-quantum switch could create more operational risk than protection."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The right near-term posture is crypto-agility: versioned envelopes, explicit algorithms, source-backed claims, no hidden key generation, and a design path that can evaluate post-quantum recipient encryption when the ecosystem is ready enough for Hush Line's user base."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "migration-and-rollout-model",
      children: "Migration and Rollout Model"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line's encrypted-field rollout strategy should remain phased:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Inventory and threat model."
        }), " Keep a code-owned list of protected fields and a clear database-only threat model."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Dual reader."
        }), " Deploy code that reads legacy and target formats before any production write-format change."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Schema readiness."
        }), " Widen columns where required so new envelopes cannot be truncated."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Preflight."
        }), " Count legacy, target, empty, malformed, and undecryptable values without logging sensitive material."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Dry run."
        }), " Exercise the same selection, decryption, candidate rewrite, and verification path without writing."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Rehearsal."
        }), " Run staging or restored-backup migration, including interruption, resume, rollback, and app-flow verification."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Release gate."
        }), " Review artifacts that prove readiness without exposing plaintext or full ciphertext."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Small batches."
        }), " Run production live migration in bounded batches while normal reads and writes continue."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Rollback window."
        }), " Keep legacy readers deployed until migration completion and rollback closure are explicitly approved."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Retirement."
        }), " Remove old read formats only in a later issue after evidence proves they are no longer needed."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This rollout model is conservative because unreadable encrypted data is a user-impacting security incident."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usability-and-accessibility-requirements",
      children: "Usability and Accessibility Requirements"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line cannot treat cryptography as a recipient-only engineering concern. The sender may be under time pressure, observation, stress, or device constraints. The recipient may be a journalist, lawyer, educator, board member, organizer, or administrator who needs a trustworthy intake path without becoming a cryptography expert."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That means modernization must preserve:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "no-account submission for senders"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "clear recipient authenticity signals"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "setup flows that make encryption completion obvious"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "browser-first usage without mandatory app installation"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "accessible copy and controls"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "fallback behavior that avoids losing a submission when client-side encryption payloads are unavailable"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "clear status language that does not overpromise confidentiality beyond the actual deployment model"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Any future cryptographic upgrade that increases recipient setup burden must include product work that reduces mistakes. Stronger primitives do not help if recipients misconfigure keys or publish unusable intake pages."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "risks-and-open-questions",
      children: "Risks and Open Questions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The most important risks are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Overstated claims."
        }), " Hush Line must not describe transitional ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "envelope-fernet"
        }), " as domain-bound AEAD."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Nonce misuse."
        }), " AES-GCM production writes require unique nonces, negative tests, and review of retry behavior."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Key loss."
        }), " A database backup without matching encrypted-field key material is not a complete recovery artifact."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Rollback complexity."
        }), " Format changes must keep old readers until rollback windows close."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Endpoint compromise."
        }), " Modernized encrypted fields do not solve compromised browsers, devices, recipients, or application servers."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Recipient ecosystem compatibility."
        }), " Moving beyond PGP requires careful migration because recipients already use PGP-capable mail workflows."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Post-quantum timing."
        }), " Hush Line should prepare for post-quantum migration without claiming production protection before recipient-key ecosystems and implementation choices are ready."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Open design questions include:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Should future encrypted-field formats include key identifiers and multi-key readers?"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "When should Hush Line introduce external key-service support for managed deployments?"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Should personal-server deployments use sealed local secret tooling?"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "What recipient-key model would support browser-first, multi-recipient, and post-quantum-compatible encryption without forcing difficult setup onto non-expert recipients?"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "What formal review should be required before any production recipient-encryption protocol change?"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "roadmap",
      children: "Roadmap"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line's practical roadmap should be:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Keep current Fernet production writes until the compatibility and rehearsal gates are complete."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "envelope-fernet"
        }), " only as transitional compatibility when maintainers approve it for a deployment."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Promote AES-256-GCM from prototype to production encrypted-field writer only after test vectors, AAD contracts, release gates, and maintainer approval are complete."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Keep legacy Fernet and transitional envelope reads through the migration and rollback window."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Add key-rotation and key-identifier design as separate work, not as an implicit side effect of AEAD migration."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Evaluate HPKE and post-quantum recipient-encryption paths separately from server-side encrypted database fields."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Continue grounding every security claim in the actual deployed behavior, not in intended future architecture."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Best-in-class crypto modernization for Hush Line is not a single algorithm swap. It is a disciplined migration from implicit formats to explicit envelopes, from context-free encrypted fields to domain-bound authenticated fields, and from informal operational assumptions to rehearsed release gates."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That work has to happen without disrupting the whistleblower's core path: find a trustworthy recipient, submit without creating an account, and avoid unnecessary exposure. It also has to be honest about boundaries. Server-side encrypted fields protect against database-only exposure. Recipient PGP supports disclosure delivery workflows. Future AEAD and post-quantum work can improve the system, but only when the migration plan, key lifecycle, test evidence, and user experience are strong enough to carry the change."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The modernization goal is simple to state and hard to execute: stronger cryptography, safer operations, fewer exaggerated claims, and no regression in the human workflow that Hush Line exists to protect."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/AGENTS.md",
          children: "Hush Line AGENTS.md"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/docs/USE-CASES.md",
          children: "Hush Line use cases"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/docs/ENCRYPTED-FIELD-MODERNIZATION-ADR.md",
          children: "Encrypted Field Modernization ADR"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/docs/ENCRYPTED-FIELD-AEAD-EVALUATION.md",
          children: "Encrypted Field AEAD Evaluation"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/docs/ENCRYPTED-FIELD-MIGRATION-RUNBOOK.md",
          children: "Encrypted Field Migration Runbook"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/scidsg/hushline/blob/main/docs/OPERATIONAL-KEY-MANAGEMENT-DESIGN.md",
          children: "Operational Key Management Design"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://www.rfc-editor.org/rfc/rfc9580.html",
          children: "RFC 9580: OpenPGP"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://www.rfc-editor.org/rfc/rfc9180.html",
          children: "RFC 9180: Hybrid Public Key Encryption"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://csrc.nist.gov/pubs/sp/800/38/d/final",
          children: "NIST SP 800-38D: Galois/Counter Mode and GMAC"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://csrc.nist.gov/pubs/fips/203/final",
          children: "NIST FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://csrc.nist.gov/projects/post-quantum-cryptography",
          children: "NIST post-quantum cryptography project"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://signal.org/docs/specifications/pqxdh/",
          children: "Signal PQXDH specification"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://signal.org/docs/specifications/doubleratchet/",
          children: "Signal Double Ratchet specification"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://www.w3.org/TR/WebCryptoAPI/",
          children: "W3C Web Cryptography API"
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