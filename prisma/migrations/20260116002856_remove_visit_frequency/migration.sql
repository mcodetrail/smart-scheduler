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
    "nextVisitDate" DATETIME,
    "weeklyPattern" TEXT,
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
INSERT INTO "new_Patient" ("address", "assistanceType", "city", "createdAt", "createdById", "dateOfBirth", "exemptionCode", "firstName", "fiscalCode", "houseNumber", "id", "lastName", "notes", "phone1", "phone2", "postalCode", "updatedAt") SELECT "address", "assistanceType", "city", "createdAt", "createdById", "dateOfBirth", "exemptionCode", "firstName", "fiscalCode", "houseNumber", "id", "lastName", "notes", "phone1", "phone2", "postalCode", "updatedAt" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
CREATE UNIQUE INDEX "Patient_fiscalCode_key" ON "Patient"("fiscalCode");
CREATE INDEX "Patient_lastName_firstName_idx" ON "Patient"("lastName", "firstName");
CREATE INDEX "Patient_fiscalCode_idx" ON "Patient"("fiscalCode");
CREATE INDEX "Patient_phone1_idx" ON "Patient"("phone1");
CREATE INDEX "Patient_nextVisitDate_idx" ON "Patient"("nextVisitDate");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
