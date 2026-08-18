import Image from "next/image";
import { CONSENT_TEXT, DATENSCHUTZ, type DatenschutzSection } from "@/consent-content";
import { BASE_PATH } from "@/base-path";

/**
 * Renders one numbered clause of the Art. 13 DSGVO privacy notice
 * (e.g. "1. Verantwortlicher"). `body` is plain text with `\n` for
 * paragraph breaks (some clauses in DATENSCHUTZ use one, others use `items`
 * for a bullet list — a clause may have either, both, or neither).
 */
function Section({ num, heading, body, items }: DatenschutzSection) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <p style={{ fontWeight: 500, fontSize: "0.875rem", marginBottom: "0.35rem", color: "var(--brand-secondary)" }}>
        {num} {heading}
      </p>
      {body &&
        body.split("\n").map((line, i) =>
          line ? (
            <p key={i} style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", margin: "0 0 0.25rem" }}>
              {line}
            </p>
          ) : (
            <br key={i} />
          )
        )}
      {items && (
        <ul style={{ paddingLeft: "1.25rem", margin: "0.25rem 0 0" }}>
          {items.map((item, i) => (
            <li key={i} style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", marginBottom: "0.2rem" }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * The whole app: a single static page presenting the Microsoft Teams /
 * Happy Scribe recording notice and the full Art. 13 DSGVO privacy notice
 * (collapsed in a <details> accordion by default).
 *
 * This is intentionally read-only — there is no form, no state, and no
 * network request anywhere on the page. It does not collect, submit, or
 * store any personal data, and does not record that a visitor gave
 * consent; it only *displays* the notice text from consent-content.ts.
 * That's why this is a plain server component (no "use client").
 */
export default function ConsentForm() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-background-tertiary)", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "1.5rem", display: "flex" }}>
          <div style={{ background: "#ffffff", borderRadius: "var(--border-radius-md)", padding: "10px 16px", display: "flex", alignItems: "center" }}>
            <Image src={`${BASE_PATH}/vetter-consulting-logo-quer.png`} alt="Vetter Consulting" width={1274} height={564} style={{ height: "56px", width: "auto" }} priority />
          </div>
        </div>

        {/* Main card */}
        <div style={{ background: "var(--color-background-primary)", borderRadius: "var(--border-radius-lg)", border: "0.5px solid var(--color-border-tertiary)", overflow: "hidden" }}>
          {/* Title block */}
          <div style={{ padding: "2.25rem 2.25rem 1.5rem" }}>
            <h1 style={{ fontSize: "1.15rem", fontWeight: 500, lineHeight: 1.4, margin: "0 0 1rem", color: "var(--brand-secondary)" }}>
              {CONSENT_TEXT.title}
            </h1>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>
              {CONSENT_TEXT.intro}
            </p>
          </div>

          {/* Consent body */}
          <div style={{ padding: "0.5rem 2.25rem 1.5rem" }}>
            <p style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>{CONSENT_TEXT.processingLabel}</p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.25rem" }}>
              {CONSENT_TEXT.processingItems.map((item, i) => (
                <li key={i} style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "0.3rem", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{CONSENT_TEXT.serviceNote}</p>
            <p style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>{CONSENT_TEXT.dataLabel}</p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.25rem" }}>
              {CONSENT_TEXT.dataItems.map((item, i) => (
                <li key={i} style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "0.3rem", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "0.75rem" }}>{CONSENT_TEXT.voluntaryNote}</p>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{CONSENT_TEXT.restrictionNote}</p>
          </div>

          {/* Datenschutzhinweise accordion */}
          <details style={{ borderTop: "0.5px solid var(--color-border-tertiary)" }}>
            <summary style={{ padding: "1rem 2.25rem", cursor: "pointer", fontSize: "0.875rem", fontWeight: 500, color: "var(--brand-secondary)", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between", userSelect: "none" }}>
              <span>Datenschutzhinweise nach Art. 13 DSGVO</span>
              <span style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>▼ einblenden</span>
            </summary>
            <div style={{ padding: "0 2.25rem 2.25rem" }}>
              {DATENSCHUTZ.map((s, i) => (
                <Section key={i} {...s} />
              ))}
            </div>
          </details>
        </div>

        {/* Footer */}
        <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--color-text-tertiary)", marginTop: "1.5rem" }}>
          Vetter Consulting · Oschatzer Str. 46, 01127 Dresden · info@vc-datenschutz.de
        </p>
      </div>
    </div>
  );
}
