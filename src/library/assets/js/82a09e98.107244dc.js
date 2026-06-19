"use strict";
(globalThis["webpackChunkdocs"] = globalThis["webpackChunkdocs"] || []).push([[3211],{

/***/ 3388
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/library/blog/crypto-modernization-whitepaper","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2026-05-28-crypto-modernization-whitepaper/index.md","source":"@site/blog/2026-05-28-crypto-modernization-whitepaper/index.md","title":"Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure","description":"Hush Line exists for moments when a person needs to disclose sensitive information without being exposed by the tool that was supposed to protect them. That changes how crypto modernization has to be designed and described. The goal is not to chase new primitives for their own sake. The goal is to preserve the whistleblower\'s path to a trusted recipient while reducing the harm caused by database exposure, key-management mistakes, migration failure, or unclear security claims.","date":"2026-05-28T00:00:00.000Z","tags":[{"inline":false,"label":"Hush Line","permalink":"/library/blog/tags/hushline","description":"Hush Line articles"},{"inline":false,"label":"Whistleblowing","permalink":"/library/blog/tags/whistleblowing","description":"Whistleblowing articles"}],"readingTime":15.77,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"crypto-modernization-whitepaper","title":"Hush Line Crypto Modernization: A Whitepaper for Safer Disclosure Infrastructure","subtitle":"How Hush Line modernized encrypted data handling without weakening usability, anonymity, or migration safety.","tags":["hushline","whistleblowing"]},"unlisted":false,"prevItem":{"title":"Among 500 Top Domains, 0% of Assessed Contact Forms Met Our Full Security Standard","permalink":"/library/blog/contact-form-security-study-2026"},"nextItem":{"title":"How Law Firms Can Handle Sensitive Intake Without Losing Track","permalink":"/library/blog/how-law-firms-can-handle-sensitive-intake-without-losing-track"}}');

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
	subtitle: 'How Hush Line modernized encrypted data handling without weakening usability, anonymity, or migration safety.',
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
  "value": "What &quot;Complete&quot; Means",
  "id": "what-complete-means",
  "level": 2
}, {
  "value": "Why Crypto Modernization Matters for Whistleblowing Systems",
  "id": "why-crypto-modernization-matters-for-whistleblowing-systems",
  "level": 2
}, {
  "value": "Current Security And Privacy Goals",
  "id": "current-security-and-privacy-goals",
  "level": 2
}, {
  "value": "What Is Implemented",
  "id": "what-is-implemented",
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
  "value": "2. Version The Envelope, Not Just The Algorithm",
  "id": "2-version-the-envelope-not-just-the-algorithm",
  "level": 3
}, {
  "value": "3. Bind Ciphertext To Stable Domains",
  "id": "3-bind-ciphertext-to-stable-domains",
  "level": 3
}, {
  "value": "4. Separate Concerns",
  "id": "4-separate-concerns",
  "level": 3
}, {
  "value": "5. Treat Migration Evidence As A Release Gate",
  "id": "5-treat-migration-evidence-as-a-release-gate",
  "level": 3
}, {
  "value": "Production Cryptographic Design",
  "id": "production-cryptographic-design",
  "level": 2
}, {
  "value": "Legacy Fernet Remains A Compatibility Format",
  "id": "legacy-fernet-remains-a-compatibility-format",
  "level": 3
}, {
  "value": "AES-256-GCM Is The Production AEAD Writer",
  "id": "aes-256-gcm-is-the-production-aead-writer",
  "level": 3
}, {
  "value": "Key Rotation Remains A Separate Design",
  "id": "key-rotation-remains-a-separate-design",
  "level": 3
}, {
  "value": "HPKE And Post-Quantum Recipient Encryption Remain Future Recipient-Protocol Work",
  "id": "hpke-and-post-quantum-recipient-encryption-remain-future-recipient-protocol-work",
  "level": 3
}, {
  "value": "Migration And Rollout Model",
  "id": "migration-and-rollout-model",
  "level": 2
}, {
  "value": "Evidence Checklist",
  "id": "evidence-checklist",
  "level": 2
}, {
  "value": "Usability And Accessibility Requirements",
  "id": "usability-and-accessibility-requirements",
  "level": 2
}, {
  "value": "Remaining Work",
  "id": "remaining-work",
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
      children: "Hush Line exists for moments when a person needs to disclose sensitive information without being exposed by the tool that was supposed to protect them. That changes how crypto modernization has to be designed and described. The goal is not to chase new primitives for their own sake. The goal is to preserve the whistleblower's path to a trusted recipient while reducing the harm caused by database exposure, key-management mistakes, migration failure, or unclear security claims."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This whitepaper updates the May 28, 2026 crypto modernization paper. The original version correctly separated shipped work from planned work at that time, but it is now out of date. The current implementation completes the encrypted-field modernization scope: Hush Line has a production-capable AES-256-GCM encrypted-field envelope for new writes, a code-owned AAD contract, dual-read compatibility, schema readiness checks, migration tooling, rehearsal evidence, release gates, and test coverage."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line now has the crypto modernization architecture needed for the current encrypted-field scope."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The completed work includes:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "recipient PGP setup and intake blocking when recipient key material is missing"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "client-side OpenPGP encryption for supported browser submission paths"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "server-side encrypted database fields for selected sensitive values"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["versioned ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "hlfield:"
        }), " envelopes for encrypted-field format agility"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "an explicit AES-256-GCM encrypted-field writer for new values"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "canonical authenticated associated data (AAD) for AES-GCM encrypted fields"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "dual readers for legacy Fernet, versioned Fernet envelopes, and AES-GCM envelopes"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "schema readiness checks that fail closed before envelope writes can be enabled"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "migration and preflight tooling with dry-run, live-batch, resume, rollback, and release-gate controls"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "known-answer vectors, negative tests, inventory tests, migration tests, and documentation tests"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The important distinction is deployment state, not implementation maturity. Legacy Fernet remains the default write format unless an operator deliberately enables the AES-GCM writer for a deployment. Legacy Fernet read support remains available by design so existing ciphertext can be read during rollout and rollback windows. That is not unfinished modernization. It is the safety mechanism that prevents an encryption upgrade from becoming a data-loss incident."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-complete-means",
      children: "What \"Complete\" Means"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For this paper, \"complete\" means the encrypted-field modernization design is implemented and testable in the application repository. It does not mean every deployment has already changed its default write format or that every historical ciphertext row in every environment has already been rewritten."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Question"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Current answer"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Is the AES-256-GCM encrypted-field writer implemented?"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["Yes. It is available through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "ENCRYPTED_FIELD_WRITE_FORMAT=envelope-aes-gcm"
            }), "."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Can AES-GCM writes be enabled accidentally?"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["No. They require both ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "ENCRYPTED_FIELD_AES_GCM_WRITES_ENABLED=true"
            }), " and a non-empty ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "ENCRYPTED_FIELD_AES_GCM_WRITE_APPROVAL"
            }), " value."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Are AES-GCM encrypted fields bound to field context?"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Yes. The AAD includes the algorithm, envelope version, AAD schema, stable domain, table, column, and immutable row identifiers."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Are old values still readable?"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Yes. Legacy Fernet and versioned Fernet envelopes remain readable during rollout."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Can unsupported schemas silently truncate envelope ciphertext?"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "No. Envelope writes fail closed unless the widened encrypted-field schema is present."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Is migration safety implemented?"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Yes. The helper supports preflight, dry run, bounded live batches, resume, verification, rollback controls, and a release-gate manifest."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Is legacy-read retirement complete?"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Not yet, by design. Read retirement is a later operational step after migration evidence and rollback closure."
          })]
        })]
      })]
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
        children: "Improve cryptographic and operational properties where Hush Line identified a real gap."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Keep the existing disclosure flow available, understandable, and recoverable while the system changes."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That second job is not optional. For Hush Line, migration safety is a security property."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "current-security-and-privacy-goals",
      children: "Current Security And Privacy Goals"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line's product surface supports unauthenticated senders, authenticated recipients, paid recipient features such as aliases and custom fields, and administrator controls for managed deployments. Crypto modernization respects those flows."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The most relevant current behavior is:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Senders can submit messages from public recipient pages without creating an account."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Recipients configure PGP keys manually or through Proton key lookup."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Public message intake is blocked when the recipient lacks usable PGP key material."
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
      id: "what-is-implemented",
      children: "What Is Implemented"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Area"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Implemented state"
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
            children: "Versioned envelopes"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["Hush Line serializes encrypted-field envelopes with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "hlfield:"
            }), " prefix so stored values carry an explicit format."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "AES-GCM production writer"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "envelope-aes-gcm"
            }), " writes AES-256-GCM envelopes for new values when the schema, configuration, AAD contract, and maintainer approval gates pass."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Domain-bound AAD"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "AES-GCM writes authenticate stable field domains and immutable row identifiers so wrong-field or wrong-row use fails closed."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Dual-read compatibility"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Readers support legacy Fernet values, versioned Fernet envelopes, and AES-GCM envelopes during migration and rollback windows."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Migration tooling"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "The encrypted-field CLI supports preflight, dry run, live batches, resume tokens, per-row verification, rollback controls, and production release gates."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Evidence and tests"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "The repository includes AEAD evaluation, modernization ADR, migration runbook, restored-backup rehearsal report, known-answer vectors, and automated tests."
          })]
        })]
      })]
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
        children: "database row or column tampering that AAD-aware ciphertext can detect"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "ciphertext copied between fields, rows, or deployments where domain binding should fail closed"
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
        }), ", process memory, container environment variables, or deploy secrets"]
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
      children: "The encrypted-field modernization inventory covers:"
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Hush Line deploys dual readers before changing write formats. The application reads legacy Fernet, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "envelope-fernet"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "envelope-aes-gcm"
      }), " values. This avoids a common failure mode: shipping a new format that works for new rows while breaking old rows or making rollback unsafe."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "2-version-the-envelope-not-just-the-algorithm",
      children: "2. Version The Envelope, Not Just The Algorithm"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Algorithm agility requires more than changing a function call. A durable envelope needs to say which format it uses, how to parse it, where the nonce lives, and what context must be authenticated."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Hush Line's encrypted-field envelope prefix is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "hlfield:"
      }), ". The transitional ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "envelope-fernet"
      }), " format wraps a Fernet token. The AES-GCM format stores an algorithm identifier, version, nonce, and ciphertext in an ASCII-safe envelope."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "3-bind-ciphertext-to-stable-domains",
      children: "3. Bind Ciphertext To Stable Domains"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "AES-GCM writes authenticate stable context:"
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
      children: "The AAD contract avoids mutable values such as usernames, email addresses, display names, profile text, field labels, message text, SMTP settings, or PGP key text. If mutable values were authenticated, normal profile or settings edits could make historical ciphertext undecryptable unless Hush Line retained every prior value."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "4-separate-concerns",
      children: "4. Separate Concerns"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Encrypted-field modernization is not password hashing modernization. It is not browser session-key rotation. It is not operational key-service design. Hush Line separates:"
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
      children: "5. Treat Migration Evidence As A Release Gate"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A cryptographic migration should not be accepted because the code compiles. Hush Line's migration path requires preflight checks, dry runs, small live batches, idempotent resume, per-row verification, backup-and-restore rehearsal, progress reporting, rollback rehearsal, and release-gate artifacts that avoid plaintext and full ciphertext."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The migration helper must not log plaintext disclosures, secrets, private keys, tokens, TOTP secrets, email passwords, raw encrypted-field secrets, or full ciphertext values."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "production-cryptographic-design",
      children: "Production Cryptographic Design"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "legacy-fernet-remains-a-compatibility-format",
      children: "Legacy Fernet Remains A Compatibility Format"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Fernet remains readable and remains the default write format unless a deployment explicitly changes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ENCRYPTED_FIELD_WRITE_FORMAT"
      }), ". Hush Line pins Fernet timestamps to zero for encrypted-field writes to avoid storing per-write activity timing inside ciphertext."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The limitation is that Fernet does not provide native AAD. A versioned Fernet envelope supports compatibility and rollout checks, but it does not make a Fernet token fail closed if copied into the wrong field or row."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "aes-256-gcm-is-the-production-aead-writer",
      children: "AES-256-GCM Is The Production AEAD Writer"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "AES-GCM is the implemented AEAD writer for new encrypted-field values. It is enabled only when all of these are true:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ENCRYPTED_FIELD_WRITE_FORMAT=envelope-aes-gcm"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ENCRYPTED_FIELD_AES_GCM_WRITES_ENABLED=true"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ENCRYPTED_FIELD_AES_GCM_WRITE_APPROVAL"
        }), " contains a maintainer approval reference"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "the encrypted-field envelope schema readiness check passes"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "the write supplies the code-owned encrypted-field contract and required AAD values"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The AES-GCM writer uses the existing Python ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "cryptography"
      }), " dependency, derives a dedicated AES-GCM key from the configured encrypted-field key material, generates a random 96-bit nonce for each write, stores the nonce in the envelope, and authenticates the Hush Line AAD contract. Decryption fails closed for wrong key material, wrong AAD, wrong field domain, malformed nonce, malformed ciphertext, unknown version, or unknown algorithm."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "key-rotation-remains-a-separate-design",
      children: "Key Rotation Remains A Separate Design"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The current modernization does not hide key rotation inside the encrypted-field format change. Hush Line supports fallback key material for reads, but key identifiers, external key services, sealed local secret tooling, and multi-key operational policy remain separate key-management work. That separation is intentional: rotating operational secrets has different failure modes than changing ciphertext format."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "hpke-and-post-quantum-recipient-encryption-remain-future-recipient-protocol-work",
      children: "HPKE And Post-Quantum Recipient Encryption Remain Future Recipient-Protocol Work"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hybrid Public Key Encryption (HPKE) and post-quantum cryptography are relevant to future recipient-encryption discussions, but they are not replacements for Hush Line's deployed recipient PGP path today. A move toward HPKE or post-quantum recipient encryption would need recipient key lifecycle design, browser support decisions, key discovery, migration strategy, interoperability expectations, user-facing recovery behavior, and security review."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The near-term posture is crypto-agility: versioned envelopes, explicit algorithms, source-backed claims, no hidden key generation, and a design path that can evaluate future recipient-encryption protocols when the ecosystem is ready enough for Hush Line's user base."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "migration-and-rollout-model",
      children: "Migration And Rollout Model"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line's encrypted-field rollout strategy is implemented as a phased model:"
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
      id: "evidence-checklist",
      children: "Evidence Checklist"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Control"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Evidence in the Hush Line app repo"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "AES-GCM writer and parser"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "hushline/crypto.py"
            }), " implements AES-GCM envelope serialization, parsing, encryption, and decryption."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Explicit enablement gates"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "hushline/config.py"
            }), " defines ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "ENCRYPTED_FIELD_WRITE_FORMAT"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "ENCRYPTED_FIELD_AES_GCM_WRITES_ENABLED"
            }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "ENCRYPTED_FIELD_AES_GCM_WRITE_APPROVAL"
            }), "."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "AAD contract"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "hushline.crypto.ENCRYPTED_FIELD_CONTRACTS"
            }), " defines stable domains, tables, columns, and row identifiers."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Schema fail-closed behavior"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "assert_encrypted_field_envelope_schema_ready()"
            }), " blocks envelope writes before the widened schema exists."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Migration helper"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "hushline/cli_encrypted_field.py"
            }), " implements preflight, migration, resume, rollback-oriented checks, and release-gate validation."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Known-answer vectors"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "tests/testdata/crypto-known-answer-vectors.json"
            }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "tests/test_crypto.py"
            }), " cover envelope vectors and negative cases."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Inventory coverage"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "tests/test_encrypted_field_inventory.py"
            }), " keeps the protected-field inventory and encrypted properties aligned."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Migration safety"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "tests/test_cli_commands.py"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "tests/test_migrations.py"
            }), ", and runbook tests cover preflight, schema readiness, dry-run/live behavior, release gates, rollback, and downgrade refusal."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Operational documentation"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "The ADR, AEAD evaluation, migration runbook, and restored-backup rehearsal report document the intended rollout boundary."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usability-and-accessibility-requirements",
      children: "Usability And Accessibility Requirements"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hush Line cannot treat cryptography as a recipient-only engineering concern. The sender may be under time pressure, observation, stress, or device constraints. The recipient may be a journalist, lawyer, educator, board member, organizer, or administrator who needs a trustworthy intake path without becoming a cryptography expert."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Modernization preserves:"
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
        children: "failure behavior that avoids silently submitting plaintext when client-side encryption is unavailable"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "clear status language that does not overpromise confidentiality beyond the actual deployment model"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Any future cryptographic upgrade that increases recipient setup burden must include product work that reduces mistakes. Stronger primitives do not help if recipients misconfigure keys or publish unusable intake pages."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "remaining-work",
      children: "Remaining Work"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The core encrypted-field modernization is complete. The remaining items are operational rollout, key-management evolution, and future protocol research:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["enable ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "envelope-aes-gcm"
        }), " per deployment only after maintainers approve the release-gate evidence"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "migrate existing ciphertext in bounded batches where the operator chooses to rewrite historical rows"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "retire legacy Fernet reads only after migration evidence and rollback windows are closed"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "design key identifiers, external key-service support, or sealed local secret tooling as separate key-management work"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["continue dependency audits and review ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "cryptography"
        }), " and OpenSSL security advisories before rollout-sensitive releases"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "evaluate HPKE and post-quantum recipient-encryption paths separately from server-side encrypted database fields"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "These are not gaps in the implemented encrypted-field architecture. They are the remaining lifecycle steps that keep a safety-critical deployment honest and recoverable."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Best-in-class crypto modernization for Hush Line is not a single algorithm swap. It is the combination of explicit envelopes, domain-bound authenticated fields, dual-read compatibility, guarded enablement, migration tooling, rehearsal evidence, and restrained public claims."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That work is now implemented for the current encrypted-field scope. Hush Line can accurately say it has production-capable AES-256-GCM encrypted fields with AAD, while also being precise that legacy reads remain during rollout and that each deployment must pass its own release gate before changing write format or migrating historical ciphertext."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The modernization goal remains simple to state and hard to execute: stronger cryptography, safer operations, fewer exaggerated claims, and no regression in the human workflow that Hush Line exists to protect."
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
          href: "https://github.com/scidsg/hushline/blob/main/docs/ENCRYPTED-FIELD-RESTORED-BACKUP-REHEARSAL-REPORT.md",
          children: "Encrypted Field Restored-Backup Rehearsal Report"
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