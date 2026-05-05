/**
 * Estado actual mostrado en el hero. Cambia solo este valor cuando quieras
 * otro mensaje entre: disponible · freelance · ocupado.
 */
export type HeroAvailabilityStatus = "available" | "freelance" | "busy";

export const HERO_AVAILABILITY_STATUS: HeroAvailabilityStatus = "available";

export const HERO_AVAILABILITY_I18N_KEY: Record<HeroAvailabilityStatus, string> = {
  available: "hero_availability_available",
  freelance: "hero_availability_freelance",
  busy: "hero_availability_busy",
};
