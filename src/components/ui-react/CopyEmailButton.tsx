import { useState, useEffect } from "react";

interface CopyEmailButtonProps {
  email: string;
  successText: string;
}

export default function CopyEmailButton({
  email,
  successText,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const [currentSuccessText, setCurrentSuccessText] = useState(successText);
  const [ariaLabel, setAriaLabel] = useState(
    "Copiar dirección de correo electrónico",
  );

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      const translations = event.detail.translations;
      if (translations) {
        if (translations.hero_copy_success)
          setCurrentSuccessText(translations.hero_copy_success);
        if (translations.copy_email_aria)
          setAriaLabel(translations.copy_email_aria);
      }
    };

    window.addEventListener(
      "language-changed",
      handleLanguageChange as EventListener,
    );

    if (typeof window !== "undefined" && (window as any).i18n) {
      const currentLang = (window as any).i18n.getCurrentLanguage();
      const translations = (window as any).i18n.getTranslations(currentLang);
      if (translations) {
        if (translations.hero_copy_success)
          setCurrentSuccessText(translations.hero_copy_success);
        if (translations.copy_email_aria)
          setAriaLabel(translations.copy_email_aria);
      }
    }

    return () => {
      window.removeEventListener(
        "language-changed",
        handleLanguageChange as EventListener,
      );
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Restore original text after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Error copying email:", err);
      // Fallback for browsers that do not support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (e) {
        console.error("Error al copiar:", e);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex max-w-fit cursor-pointer items-center gap-2 rounded-full border p-1 px-2 pr-3 text-sm transition-all duration-300 ${
        copied
          ? "scale-105 border-2 border-green-500/70 bg-green-100 text-green-700 shadow-lg shadow-green-500/30 dark:border-green-500/40 dark:bg-gray-900 dark:text-green-400 dark:shadow-none"
          : "border-2 border-purple-400/70 bg-purple-50 font-medium text-purple-700 shadow-md shadow-purple-500/20 hover:border-purple-600 hover:text-purple-800 hover:shadow-lg hover:shadow-purple-500/30 dark:border-purple-500/40 dark:bg-gray-900 dark:text-purple-300 dark:shadow-none dark:hover:border-purple-400/60 dark:hover:text-purple-200 dark:hover:shadow-purple-500/10"
      } `}
      aria-label={ariaLabel}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>

      <span className="email-text whitespace-nowrap">
        {copied ? currentSuccessText : email}
      </span>

      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-5 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
      )}
    </button>
  );
}
