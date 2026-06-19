"use client";

import { useId, useRef, useState } from "react";

export default function BookForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const uid = useId();
  const nameErrId = `${uid}-name-err`;
  const phoneErrId = `${uid}-phone-err`;

  const nameInvalid = showErrors && !name.trim();
  const phoneInvalid = showErrors && !phone.trim();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nameOk = !!name.trim();
    const phoneOk = !!phone.trim();
    if (!nameOk || !phoneOk) {
      setShowErrors(true);
      // move focus to the first field that needs attention
      (nameOk ? phoneRef : nameRef).current?.focus();
      return;
    }

    // Hand the request off to the clinic's WhatsApp with the details prefilled.
    const fd = new FormData(e.currentTarget);
    const service = String(fd.get("service") ?? "").trim();
    const time = String(fd.get("time") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const lines = [
      "Appointment request from the Evoris website",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
    ];
    if (service) lines.push(`Treatment: ${service}`);
    if (time) lines.push(`Preferred time: ${time}`);
    if (message) lines.push(`Notes: ${message}`);
    const waUrl = `https://wa.me/919137161693?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(waUrl, "_blank", "noopener");

    setSubmitted(true);
    requestAnimationFrame(() =>
      document
        .getElementById("formSuccess")
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    );
  }

  return (
    <div className="appt-form" id="apptForm">
      {!submitted && (
        <form id="bookForm" noValidate onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="f-name">
                Full name <span className="req" aria-hidden="true">*</span>
              </label>
              <input
                ref={nameRef}
                type="text"
                id="f-name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-required="true"
                aria-invalid={nameInvalid || undefined}
                aria-describedby={nameInvalid ? nameErrId : undefined}
                className={nameInvalid ? "is-invalid" : undefined}
              />
              {nameInvalid && (
                <p className="field-error" id={nameErrId} role="alert">
                  Please enter your name.
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="f-phone">
                Phone number <span className="req" aria-hidden="true">*</span>
              </label>
              <input
                ref={phoneRef}
                type="tel"
                id="f-phone"
                name="phone"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                aria-required="true"
                aria-invalid={phoneInvalid || undefined}
                aria-describedby={phoneInvalid ? phoneErrId : undefined}
                className={phoneInvalid ? "is-invalid" : undefined}
              />
              {phoneInvalid && (
                <p className="field-error" id={phoneErrId} role="alert">
                  Please enter a phone number so we can confirm your slot.
                </p>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="f-service">Treatment needed</label>
              <select id="f-service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a treatment
                </option>
                <option>Dental Implant</option>
                <option>Root Canal Treatment</option>
                <option>Gum Treatment</option>
                <option>Smile Design / Veneers</option>
                <option>Teeth Whitening</option>
                <option>Crown or Bridge</option>
                <option>Wisdom Tooth Removal</option>
                <option>Kids&apos; Dentistry</option>
                <option>Cleaning &amp; Polishing</option>
                <option>General Checkup</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="f-time">Preferred time</label>
              <select id="f-time" name="time" defaultValue="">
                <option value="" disabled>
                  Select a slot
                </option>
                <option>Morning (10 am – 2 pm)</option>
                <option>Evening (5 pm – 10 pm)</option>
                <option>Sunday (on appointment)</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="f-msg">Anything else we should know?</label>
            <textarea
              id="f-msg"
              name="message"
              placeholder="Briefly describe your concern or any questions you have (optional)"
            />
          </div>
          <p className="form-hint">
            <span aria-hidden="true">*</span> Required. Submitting opens WhatsApp
            with your details ready to send.
          </p>
          <button type="submit" className="form-submit">
            Request appointment on WhatsApp
          </button>
        </form>
      )}

      {submitted && (
        <div
          className="form-success show"
          id="formSuccess"
          style={{ display: "flex" }}
          role="status"
          aria-live="polite"
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
          <h4>Almost there</h4>
          <p>
            We&apos;ve opened WhatsApp with your details. Send the message and the
            Evoris team will confirm your appointment time.
          </p>
        </div>
      )}
    </div>
  );
}
