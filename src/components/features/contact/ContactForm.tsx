"use client";

import { cn } from "@/utils/cn";
import type { FormEvent } from "react";

export default function ContactForm({ email, t }: { email: string; t: Record<string, string> }) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (document.getElementById("contact-name") as HTMLInputElement)?.value.trim();
    const from = (document.getElementById("contact-email") as HTMLInputElement)?.value.trim();
    const subject = (document.getElementById("contact-subject") as HTMLInputElement)?.value.trim();
    const message = (document.getElementById("contact-message") as HTMLTextAreaElement)?.value.trim();
    const body = `${message}\n\n---\nEnviado por: ${name} (${from})`;
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <form id="contact-form" className="space-y-5" onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-gray-300"
          data-i18n="contact_name_label"
        >
          {t.contact_name_label}
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className={cn(
            "w-full rounded-lg border-2 border-cyan-200/60 bg-slate-50 px-4 py-2.5 text-slate-900 transition-colors",
            "focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500",
            "dark:border-cyan-500/30 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-400",
          )}
          data-i18n-placeholder="contact_name_placeholder"
          placeholder={t.contact_name_placeholder}
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-gray-300"
          data-i18n="contact_email_label"
        >
          {t.contact_email_label}
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className={cn(
            "w-full rounded-lg border-2 border-cyan-200/60 bg-slate-50 px-4 py-2.5 text-slate-900 transition-colors",
            "focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500",
            "dark:border-cyan-500/30 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-400",
          )}
          data-i18n-placeholder="contact_email_placeholder"
          placeholder={t.contact_email_placeholder}
        />
      </div>
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-gray-300"
          data-i18n="contact_subject_label"
        >
          {t.contact_subject_label}
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          required
          className={cn(
            "w-full rounded-lg border-2 border-cyan-200/60 bg-slate-50 px-4 py-2.5 text-slate-900 transition-colors",
            "focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500",
            "dark:border-cyan-500/30 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-400",
          )}
          data-i18n-placeholder="contact_subject_placeholder"
          placeholder={t.contact_subject_placeholder}
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-medium text-slate-700 dark:text-gray-300"
          data-i18n="contact_message_label"
        >
          {t.contact_message_label}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className={cn(
            "min-h-[100px] w-full resize-y rounded-lg border-2 border-cyan-200/60 bg-slate-50 px-4 py-2.5 text-slate-900",
            "transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500",
            "dark:border-cyan-500/30 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-400",
          )}
          data-i18n-placeholder="contact_message_placeholder"
          placeholder={t.contact_message_placeholder}
        />
      </div>
      <button
        type="submit"
        className={cn(
          "w-full cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 font-semibold text-white",
          "shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-600 hover:to-purple-600",
          "focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
        )}
        data-i18n="contact_send_btn"
      >
        {t.contact_send_btn}
      </button>
      <p className="text-center text-xs text-slate-500 dark:text-gray-500" data-i18n="contact_mailto_hint">
        {t.contact_mailto_hint}
      </p>
    </form>
  );
}
