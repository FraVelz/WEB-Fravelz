import type { ReactNode } from 'react';

interface ParrafoProps {
  className?: string;
  children: ReactNode;
}

export default function Parrafo({ className = "", children }: ParrafoProps) {
  return (
    <p className={`
      wrap-break-word
      min-w-0
      text-justify
      ${className}
    `}>
      {children}
    </p>
  );
}
