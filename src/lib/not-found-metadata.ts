import type { Metadata } from "next";

const NOT_FOUND_ROBOTS: NonNullable<Metadata["robots"]> = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};

export function buildNotFoundMetadata(title: string): Metadata {
  return {
    title,
    robots: NOT_FOUND_ROBOTS,
  };
}
