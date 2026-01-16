/*
Warnings:

- You are about to drop the column `assistanceType` on the `Patient` table. All the data in the column will be lost.
- You are about to drop the column `nextVisitDate` on the `Patient` table. All the data in the column will be lost.
- You are about to drop the column `weeklyPattern` on the `Patient` table. All the data in the column will be lost.

 */
-- CreateTable
CREATE TABLE
    "ScheduledVisit" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "patientId" TEXT NOT NULL,
        "assistanceType" TEXT NOT NULL,
        "nextVisitDate" DATETIME NOT NULL,
        "visitFrequency" INTEGER,
        "notes" TEXT,
        "isActive" BOOLEAN NOT NULL DEFAULT true,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "createdById" TEXT NOT NULL,
        "updatedAt" DATETIME NOT NULL,
        CONSTRAINT "ScheduledVisit_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT "ScheduledVisit_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
    );

-- CreateTable
CREATE TABLE
    "CompletedVisit" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "scheduledVisitId" TEXT NOT NULL,
        "patientId" TEXT NOT NULL,
        "completedDate" DATETIME NOT NULL,
        "assistanceType" TEXT NOT NULL,
        "notes" TEXT,
        "performedById" TEXT NOT NULL,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "CompletedVisit_scheduledVisitId_fkey" FOREIGN KEY ("scheduledVisitId") REFERENCES "ScheduledVisit" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT "CompletedVisit_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
    );

-- Migrate existing patient data to ScheduledVisit
-- For patients with assistanceType and nextVisitDate, create a ScheduledVisit
INSERT INTO
    "ScheduledVisit" (
        "id",
        "patientId",
        "assistanceType",
        "nextVisitDate",
        "visitFrequency",
        "notes",
        "isActive",
        "createdAt",
        "createdById",
        "updatedAt"
    )
SELECT
    lower(hex (randomblob (16))), -- Generate random ID
    "id" as "patientId",
    COALESCE("assistanceType", 'ADI') as "assistanceType",
    COALESCE("nextVisitDate", datetime ('now')) as "nextVisitDate",
    NULL as "visitFrequency", -- No visitFrequency in old schema
    "notes",
    true as "isActive",
    "createdAt",
    "createdById",
    "updatedAt"
FROM
    "Patient"
WHERE
    "assistanceType" IS NOT NULL
    AND "nextVisitDate" IS NOT NULL;

-- RedefineTables
PRAGMA defer_foreign_keys = ON;

PRAGMA foreign_keys = OFF;

CREATE TABLE
    "new_Patient" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "firstName" TEXT NOT NULL,
        "lastName" TEXT NOT NULL,
        "dateOfBirth" DATETIME,
        "fiscalCode" TEXT,
        "address" TEXT,
        "houseNumber" TEXT,
        "city" TEXT,
        "postalCode" TEXT,
        "phone1" TEXT NOT NULL,
        "phone2" TEXT,
        "exemptionCode" TEXT NOT NULL,
        "notes" TEXT,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" DATETIME NOT NULL,
        "createdById" TEXT NOT NULL,
        "assignedToId" TEXT,
        "lastAssignedById" TEXT,
        "lastAssignedAt" DATETIME,
        CONSTRAINT "Patient_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
        CONSTRAINT "Patient_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
        CONSTRAINT "Patient_lastAssignedById_fkey" FOREIGN KEY ("lastAssignedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
    );

INSERT INTO
    "new_Patient" (
        "address",
        "assignedToId",
        "city",
        "createdAt",
        "createdById",
        "dateOfBirth",
        "exemptionCode",
        "firstName",
        "fiscalCode",
        "houseNumber",
        "id",
        "lastAssignedAt",
        "lastAssignedById",
        "lastName",
        "notes",
        "phone1",
        "phone2",
        "postalCode",
        "updatedAt"
    )
SELECT
    "address",
    "assignedToId",
    "city",
    "createdAt",
    "createdById",
    "dateOfBirth",
    "exemptionCode",
    "firstName",
    "fiscalCode",
    "houseNumber",
    "id",
    "lastAssignedAt",
    "lastAssignedById",
    "lastName",
    "notes",
    "phone1",
    "phone2",
    "postalCode",
    "updatedAt"
FROM
    "Patient";

DROP TABLE "Patient";

ALTER TABLE "new_Patient"
RENAME TO "Patient";

CREATE UNIQUE INDEX "Patient_fiscalCode_key" ON "Patient" ("fiscalCode");

CREATE INDEX "Patient_lastName_firstName_idx" ON "Patient" ("lastName", "firstName");

CREATE INDEX "Patient_fiscalCode_idx" ON "Patient" ("fiscalCode");

CREATE INDEX "Patient_phone1_idx" ON "Patient" ("phone1");

PRAGMA foreign_keys = ON;

PRAGMA defer_foreign_keys = OFF;

-- CreateIndex
CREATE INDEX "ScheduledVisit_patientId_idx" ON "ScheduledVisit" ("patientId");

-- CreateIndex
CREATE INDEX "ScheduledVisit_nextVisitDate_idx" ON "ScheduledVisit" ("nextVisitDate");

-- CreateIndex
CREATE INDEX "ScheduledVisit_assistanceType_idx" ON "ScheduledVisit" ("assistanceType");

-- CreateIndex
CREATE INDEX "CompletedVisit_patientId_idx" ON "CompletedVisit" ("patientId");

-- CreateIndex
CREATE INDEX "CompletedVisit_completedDate_idx" ON "CompletedVisit" ("completedDate");

-- CreateIndex
CREATE INDEX "CompletedVisit_performedById_idx" ON "CompletedVisit" ("performedById");

-- CreateIndex
CREATE INDEX "CompletedVisit_scheduledVisitId_idx" ON "CompletedVisit" ("scheduledVisitId");