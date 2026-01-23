import type { AssistanceType } from "generated/prisma";

/**
 * Valori dell'enum AssistanceType da Prisma
 * Sincronizza solo le labels se aggiungi nuovi valori in schema.prisma
 */
export const ASSISTANCE_TYPES: readonly AssistanceType[] = [
  "ADI",
  "ADP",
  "CURE_PALLIATIVE",
  "DIMISSIONE_PROTETTA",
  "RIABILITAZIONE",
  "PRESTAZIONI_INFERMIERISTICHE",
] as const;

/**
 * Labels leggibili per i tipi di assistenza
 * TypeScript ti avviserà se manca un valore quando modifichi l'enum in schema.prisma
 */
export const ASSISTANCE_TYPE_LABELS: Record<AssistanceType, string> = {
  ADI: "Assistenza Domiciliare Integrata",
  ADP: "Assistenza Domiciliare Programmata",
  CURE_PALLIATIVE: "Cure Palliative",
  DIMISSIONE_PROTETTA: "Dimissione Protetta",
  RIABILITAZIONE: "Riabilitazione",
  PRESTAZIONI_INFERMIERISTICHE: "Prestazioni Infermieristiche",
};
