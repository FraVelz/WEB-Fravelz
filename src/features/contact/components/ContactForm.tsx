"use client";

import { cn } from "@/utils/cn";
import type { FormEvent } from "react";

const fieldClassName =
  "contact-field w-full border-0 border-b bg-transparent px-0 py-2.5 text-base text-slate-900 placeholder:text-slate-400/70 outline-none focus-visible:shadow-none dark:text-gray-100 dark:placeholder:text-gray-500";

const labelClassName = "mb-1 block text-xs font-medium tracking-wide text-slate-500 dark:text-gray-500";

const submitClassName =
  "contact-submit-btn inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-7 py-2.5 text-sm font-semibold text-white shadow-sm shadow-cyan-500/20 ring-1 ring-white/20 transition-[box-shadow,background,transform] hover:from-cyan-400 hover:to-purple-400 hover:shadow-md hover:shadow-cyan-500/25 dark:from-cyan-500 dark:to-purple-600 dark:shadow-purple-950/40 dark:ring-white/10 dark:hover:from-cyan-400 dark:hover:to-purple-500";

export default function ContactForm({ email, t }: { email: string; t: Record<string, string> }) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const from = String(fd.get("email") ?? "").trim();
    const subject = String(fd.get("subject") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const body = `${message}\n\n---\nEnviado por: ${name} (${from})`;
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <form id="contact-form" className="space-y-7" onSubmit={onSubmit}>
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            {t.contact_name_label}
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className={fieldClassName}
            placeholder={t.contact_name_placeholder}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            {t.contact_email_label}
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            autoComplete="email"
            className={fieldClassName}
            placeholder={t.contact_email_placeholder}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClassName}>
          {t.contact_subject_label}
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          required
          className={fieldClassName}
          placeholder={t.contact_subject_placeholder}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClassName}>
          {t.contact_message_label}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          required
          className={cn("min-h-[5.5rem] resize-y", fieldClassName)}
          placeholder={t.contact_message_placeholder}
        />
      </div>

      <div className="flex flex-col items-center gap-3 pt-1 sm:items-start">
        <button type="submit" className={submitClassName}>
          {t.contact_send_btn}
        </button>
        <p className="max-w-sm text-center text-xs leading-relaxed text-slate-500 sm:text-left dark:text-gray-500">
          {t.contact_mailto_hint}
        </p>
      </div>
    </form>
  );
}
