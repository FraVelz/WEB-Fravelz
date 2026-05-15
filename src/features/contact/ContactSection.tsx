import CopyEmailButton from "@/components/ui/CopyEmailButton";
import ContactForm from "./components/ContactForm";

import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function ContactSection({ lang }: { lang: Language }) {
  const t = getTranslations(lang);
  const email = "fravelz@proton.me";

  return (
    <section id="contacto" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-100" data-i18n="contact_title">
          {t.contact_title}
        </h2>
        <p className="mb-8 text-center text-zinc-600 dark:text-zinc-400" data-i18n="contact_subtitle">
          {t.contact_subtitle}
        </p>

        <div
          className={cn(
            "rounded-2xl border-2 border-cyan-200/60 bg-white/50 p-6 shadow-lg shadow-cyan-500/10 sm:p-8",
            "dark:border-cyan-500/30 dark:bg-zinc-800/50 dark:shadow-none",
          )}
        >
          <div
            className={cn(
              "mb-8 flex flex-col items-center justify-center gap-4 border-b border-zinc-200 pb-8 sm:flex-row",
              "dark:border-zinc-600",
            )}
          >
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300" data-i18n="contact_copy_label">
              {t.contact_copy_label}
            </span>
            <CopyEmailButton email={email} successText={t.hero_copy_success} />
          </div>

          <ContactForm email={email} t={t} />
        </div>
      </div>
    </section>
  );
}
