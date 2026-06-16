"use client";

import { useState } from "react";

const ERROR_BORDER = "oklch(0.65 0.19 25)";

export default function BookForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  const nameInvalid = touched && !name.trim();
  const phoneInvalid = touched && !phone.trim();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setTouched(true);
      return;
    }
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
              <label htmlFor="f-name">Full name</label>
              <input
                type="text"
                id="f-name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={nameInvalid ? { borderColor: ERROR_BORDER } : undefined}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="f-phone">Phone number</label>
              <input
                type="tel"
                id="f-phone"
                name="phone"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={phoneInvalid ? { borderColor: ERROR_BORDER } : undefined}
                required
              />
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
          <button type="submit" className="form-submit">
            Request appointment confirmation
          </button>
        </form>
      )}

      {submitted && (
        <div className="form-success show" id="formSuccess" style={{ display: "flex" }}>
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
          <h4>Request received</h4>
          <p>
            Thank you. The Evoris team will call you to confirm your appointment
            time.
          </p>
        </div>
      )}
    </div>
  );
}
