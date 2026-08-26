"use client";

import { ArrowRightIcon, CheckCircleIcon, ExclamationCircleIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", company: "", projectType: "", budget: "", message: "" };
const projectTypes = ["AI / ML", "Full-Stack Development", "Website Development", "Database Development", "Automation", "Other"];
const budgetRanges = ["Under ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000+", "Prefer to discuss"];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to send your message right now.");
      setStatus("success");
      setFeedback(result.message ?? "Thanks—your message has been sent.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="page-shell contact-grid">
        <div className="contact-intro"><p className="section-eyebrow">07 / Contact</p><h2>Have a project in mind?<br /><em>Let&apos;s build it.</em></h2><p>Share the problem you&apos;re solving, and I&apos;ll get back to you about the best next step.</p><div className="contact-direct"><span>DIRECT CONTACT</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div>
        <form className="contact-form" onSubmit={submitForm}>
          <div className="form-row"><label>Name<input autoComplete="name" disabled={status === "loading"} onChange={(event) => updateField("name", event.target.value)} required value={form.name} /></label><label>Email<input autoComplete="email" disabled={status === "loading"} onChange={(event) => updateField("email", event.target.value)} required type="email" value={form.email} /></label></div>
          <div className="form-row"><label>Company / Organization <span>Optional</span><input autoComplete="organization" disabled={status === "loading"} onChange={(event) => updateField("company", event.target.value)} value={form.company} /></label><label>Project Type<select disabled={status === "loading"} onChange={(event) => updateField("projectType", event.target.value)} required value={form.projectType}><option value="">Select a project type</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label></div>
          <label>Budget Range <span>Optional</span><select disabled={status === "loading"} onChange={(event) => updateField("budget", event.target.value)} value={form.budget}><option value="">Select a budget range</option>{budgetRanges.map((range) => <option key={range}>{range}</option>)}</select></label>
          <label>Tell me about the project<textarea disabled={status === "loading"} minLength={20} onChange={(event) => updateField("message", event.target.value)} placeholder="What are you looking to build?" required rows={5} value={form.message} /></label>
          {status !== "idle" && <p aria-live="polite" className={`form-feedback form-feedback-${status}`}>{status === "success" ? <CheckCircleIcon aria-hidden="true" /> : status === "error" ? <ExclamationCircleIcon aria-hidden="true" /> : null}{status === "loading" ? "Sending your message…" : feedback}</p>}
          <button className="submit-button" disabled={status === "loading"} type="submit">{status === "loading" ? "Sending…" : "Send inquiry"}{status === "loading" ? <PaperAirplaneIcon aria-hidden="true" /> : <ArrowRightIcon aria-hidden="true" />}</button>
        </form>
      </div>
    </section>
  );
}
