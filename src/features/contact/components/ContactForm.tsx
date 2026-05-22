"use client";

import { cn } from "@/utils/cn";
import type { FormEvent } from "react";

const fieldClassName = cn(
  "w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm",
  "placeholder:text-slate-400",
  "transition-[color,box-shadow,border-color]",
  "dark:border-cyan-500/30 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:shadow-none",
);

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
    <form id="contact-form" className="space-y-5" onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1 block text-sm font-medium text-slate-800 dark:text-gray-300"

        >
          {t.contact_name_label}
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className={fieldClassName}

          placeholder={t.contact_name_placeholder}
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-sm font-medium text-slate-800 dark:text-gray-300"

        >
          {t.contact_email_label}
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className={fieldClassName}

          placeholder={t.contact_email_placeholder}
        />
      </div>
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1 block text-sm font-medium text-slate-800 dark:text-gray-300"

        >
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
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-medium text-slate-800 dark:text-gray-300"

        >
          {t.contact_message_label}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className={cn("min-h-[100px] resize-y", fieldClassName)}

          placeholder={t.contact_message_placeholder}
        />
      </div>
      <button
        type="submit"
        className={cn(
          "w-full cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3",
          "font-semibold text-white shadow-lg ring-1 shadow-cyan-500/35 ring-slate-900/10 transition-all",
          "hover:from-cyan-600 hover:to-purple-600 hover:shadow-xl hover:shadow-cyan-500/25",
          "dark:ring-0 dark:shadow-cyan-500/25 dark:hover:shadow-lg",
        )}

      >
        {t.contact_send_btn}
      </button>
      <p className="text-center text-xs text-slate-600 dark:text-gray-500">
        {t.contact_mailto_hint}
      </p>
    </form>
  );
}
