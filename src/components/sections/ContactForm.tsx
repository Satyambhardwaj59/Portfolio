"use client";

import { useRef, useState } from "react";
import { emailJs } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full min-h-12 rounded-xl border border-border bg-surface px-4 py-3 text-base text-text placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form || status === "sending") return;

    // Honeypot: real users never fill this field.
    if ((new FormData(form).get("website") as string)?.length) return;

    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(emailJs.serviceId, emailJs.templateId, form, {
        publicKey: emailJs.publicKey,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Name</span>
          <input name="user_name" type="text" required autoComplete="name" maxLength={100} className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Email</span>
          <input name="user_email" type="email" required autoComplete="email" maxLength={150} className={field} placeholder="you@example.com" />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Subject</span>
        <input name="subject" type="text" required maxLength={150} className={field} placeholder="What is this about?" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Message</span>
        <textarea name="message" required rows={5} minLength={10} maxLength={3000} className={`${field} resize-y`} placeholder="Tell me about the opportunity or question" />
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-accent-ink transition-colors hover:bg-text disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <div role="status" aria-live="polite" className="min-h-6 text-sm">
        {status === "success" ? (
          <p className="text-accent">Thanks, your message was sent. I&apos;ll get back to you soon.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-red-400">
            Your message could not be sent. Please try again or email me directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
