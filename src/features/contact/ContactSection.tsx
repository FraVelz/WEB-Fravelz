import "./contact.css";

import CopyEmailButton from "@/components/ui/CopyEmailButton";
import ContactForm from "./components/ContactForm";

import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function ContactSection({ lang }: { lang: Language }) {
  const t = getTranslations(lang);
  const email = "fravelz@proton.me";

  return (
    <section id="contacto" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <header className="mb-10 text-center sm:mb-12">
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {t.contact_title}
          </h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-gray-400">{t.contact_subtitle}</p>
        </header>

        <div className="mb-10 flex flex-col items-center gap-2.5 sm:mb-12">
          <CopyEmailButton email={email} successText={t.hero_copy_success} ariaLabel={t.copy_email_aria} />
          <p className="text-xs text-slate-500 dark:text-gray-500">{t.contact_copy_label}</p>
        </div>

        <ContactForm email={email} t={t} />
      </div>
    </section>
  );
}
