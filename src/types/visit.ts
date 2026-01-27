import type { AssistanceType } from "@prisma/client";

/**
 * User info (select subset)
 */
export type UserInfo = {
  id: string;
  name: string | null;
  username: string;
};

/**
 * Patient info for visit display
 */
export type PatientInfo = {
  id: string;
  firstName: string;
  lastName: string;
  address: string | null;
  houseNumber: string | null;
  city: string | null;
  phone1: string;
  assignedTo: UserInfo | null;
};

/**
 * Scheduled visit with related patient and user info
 * Matches the return type from scheduledVisit.getByDateRange
 */
export type ScheduledVisitWithRelations = {
  id: string;
  patientId: string;
  assistanceType: AssistanceType;
  nextVisitDate: Date;
  visitFrequency: number | null;
  notes: string | null;
  isActive: boolean;
  assignedToId: string | null;
  createdById: string;
  createdAt: Date;
  updatedAt: Date;
  patient: PatientInfo;
  createdBy: UserInfo;
  assignedTo: UserInfo | null;
};

/**
 * Patient search result
 */
export type PatientSearchResult = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  fiscalCode: string | null;
  phone1: string;
  phone2: string | null;
  address: string | null;
  houseNumber: string | null;
  city: string | null;
  assignedTo: {
    id: string;
    name: string | null;
  } | null;
};
