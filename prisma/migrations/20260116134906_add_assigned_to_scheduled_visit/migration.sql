-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ScheduledVisit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "assistanceType" TEXT NOT NULL,
    "nextVisitDate" DATETIME NOT NULL,
    "visitFrequency" INTEGER,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "assignedToId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ScheduledVisit_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ScheduledVisit_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ScheduledVisit_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ScheduledVisit" ("assistanceType", "createdAt", "createdById", "id", "isActive", "nextVisitDate", "notes", "patientId", "updatedAt", "visitFrequency") SELECT "assistanceType", "createdAt", "createdById", "id", "isActive", "nextVisitDate", "notes", "patientId", "updatedAt", "visitFrequency" FROM "ScheduledVisit";
DROP TABLE "ScheduledVisit";
ALTER TABLE "new_ScheduledVisit" RENAME TO "ScheduledVisit";
CREATE INDEX "ScheduledVisit_patientId_idx" ON "ScheduledVisit"("patientId");
CREATE INDEX "ScheduledVisit_nextVisitDate_idx" ON "ScheduledVisit"("nextVisitDate");
CREATE INDEX "ScheduledVisit_assistanceType_idx" ON "ScheduledVisit"("assistanceType");
CREATE INDEX "ScheduledVisit_assignedToId_idx" ON "ScheduledVisit"("assignedToId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
