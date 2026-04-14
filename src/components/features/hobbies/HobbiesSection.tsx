import HobbiesInteractiveGrid from "@/components/features/hobbies/HobbiesInteractiveGrid";
import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function HobbiesSection({ lang, classname = "" }: { lang: Language; classname?: string }) {
  const t = getTranslations(lang);

  return (
    <section id="hobbies" className={classname}>
      <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100" data-i18n="info_hobbies_title">
        {t.info_hobbies_title}
      </h2>

      <HobbiesInteractiveGrid
        className={cn(
          "grid w-full max-w-6xl auto-cols-[200px] grid-flow-row-dense auto-rows-[200px] grid-cols-3 gap-1",
          "md:gap-2 lg:gap-4",
        )}
      >
        <div className="card row-span-2" data-card="webdev">
          <div className="card-content">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 data-i18n="hobbies_webdev">{t.hobbies_webdev}</h3>
            <h4 data-i18n="hobbies_webdev_desc">{t.hobbies_webdev_desc}</h4>
          </div>
        </div>

        <div className="card col-span-2" data-card="linux">
          <div className="card-content">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path d="M8 21h8M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 data-i18n="hobbies_linux">{t.hobbies_linux}</h3>
            <h4 data-i18n="hobbies_linux_desc">{t.hobbies_linux_desc}</h4>
          </div>
        </div>

        <div className="card" data-card="politics">
          <div className="card-content">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 data-i18n="hobbies_politics">{t.hobbies_politics}</h3>
            <h4 data-i18n="hobbies_politics_desc">{t.hobbies_politics_desc}</h4>
          </div>
        </div>

        <div className="card row-span-2" data-card="exercise">
          <div className="card-content">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 10v4M20 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6.5 9.5v5M17.5 9.5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6.5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M3 9.5h2v5H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Zm18 0h-2v5h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 data-i18n="hobbies_exercise">{t.hobbies_exercise}</h3>
            <h4 data-i18n="hobbies_exercise_desc">{t.hobbies_exercise_desc}</h4>
          </div>
        </div>

        <div className="card col-span-2" data-card="typing">
          <div className="card-content">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 8h16a2 2 0 0 1 2 2v6H2v-6a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12h.01M9 12h.01M12 12h.01M15 12h.01M18 12h.01M7 15h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 data-i18n="hobbies_typing_label">{t.hobbies_typing_label}</h3>
            <h4 data-i18n="hobbies_typing_desc">{t.hobbies_typing_desc}</h4>
            <a
              href="https://monkeytype.com/profile/Fravelz"
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                "card-link mt-2 inline-flex w-fit cursor-pointer font-semibold underline decoration-2",
                "underline-offset-2 transition-colors duration-200",
              )}
            >
              <span data-i18n="hobbies_typing_link">{t.hobbies_typing_link}</span>
            </a>
          </div>
        </div>
      </HobbiesInteractiveGrid>
    </section>
  );
}
