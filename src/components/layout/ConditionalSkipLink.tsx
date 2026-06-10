export function ConditionalSkipLink({ label }: { label: string }) {
  return (
    <a href="#main-content" className="skip-link">
      {label}
    </a>
  );
}
