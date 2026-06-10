import "./contact.css";

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
      <div className="mx-auto max-w-5xl xl:max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
          <div
            className={cn(
              "flex w-full flex-col items-center text-center",
              "lg:sticky lg:top-32 lg:max-w-sm lg:shrink-0 lg:items-start lg:text-left",
            )}
          >
            <header className="mb-8 lg:mb-10">
              <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {t.contact_title}
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-gray-400">{t.contact_subtitle}</p>
            </header>

            <div className="flex flex-col items-center gap-2 lg:items-start">
              <p className="text-xs font-medium text-slate-500 dark:text-gray-500">{t.contact_copy_label}</p>
              <CopyEmailButton email={email} successText={t.hero_copy_success} ariaLabel={t.copy_email_aria} />
            </div>
          </div>

          <div
            className={cn(
              "w-full min-w-0 lg:flex-1",
              "lg:border-l lg:border-slate-200/50 lg:pl-10",
              "dark:lg:border-slate-700/45",
            )}
          >
            <ContactForm email={email} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
