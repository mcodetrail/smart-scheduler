/*
  Warnings:

  - You are about to drop the column `email` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `exemptionCode` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone1` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Patient" (
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
    "assistanceType" TEXT,
    "exemptionCode" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "createdById" TEXT NOT NULL,
    CONSTRAINT "Patient_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Patient" ("address", "city", "createdAt", "createdById", "dateOfBirth", "firstName", "fiscalCode", "id", "lastName", "notes", "postalCode", "updatedAt") SELECT "address", "city", "createdAt", "createdById", "dateOfBirth", "firstName", "fiscalCode", "id", "lastName", "notes", "postalCode", "updatedAt" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
CREATE UNIQUE INDEX "Patient_fiscalCode_key" ON "Patient"("fiscalCode");
CREATE INDEX "Patient_lastName_firstName_idx" ON "Patient"("lastName", "firstName");
CREATE INDEX "Patient_fiscalCode_idx" ON "Patient"("fiscalCode");
CREATE INDEX "Patient_phone1_idx" ON "Patient"("phone1");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
