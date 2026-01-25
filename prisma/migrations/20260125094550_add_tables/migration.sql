-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "refresh_token_expires_in" INTEGER,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'nurse',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Patient" (
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

-- CreateTable
CREATE TABLE "ScheduledVisit" (
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

-- CreateTable
CREATE TABLE "CompletedVisit" (
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

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_fiscalCode_key" ON "Patient"("fiscalCode");

-- CreateIndex
CREATE INDEX "Patient_lastName_firstName_idx" ON "Patient"("lastName", "firstName");

-- CreateIndex
CREATE INDEX "Patient_fiscalCode_idx" ON "Patient"("fiscalCode");

-- CreateIndex
CREATE INDEX "Patient_phone1_idx" ON "Patient"("phone1");

-- CreateIndex
CREATE INDEX "ScheduledVisit_patientId_idx" ON "ScheduledVisit"("patientId");

-- CreateIndex
CREATE INDEX "ScheduledVisit_nextVisitDate_idx" ON "ScheduledVisit"("nextVisitDate");

-- CreateIndex
CREATE INDEX "ScheduledVisit_assistanceType_idx" ON "ScheduledVisit"("assistanceType");

-- CreateIndex
CREATE INDEX "ScheduledVisit_assignedToId_idx" ON "ScheduledVisit"("assignedToId");

-- CreateIndex
CREATE INDEX "CompletedVisit_patientId_idx" ON "CompletedVisit"("patientId");

-- CreateIndex
CREATE INDEX "CompletedVisit_completedDate_idx" ON "CompletedVisit"("completedDate");

-- CreateIndex
CREATE INDEX "CompletedVisit_performedById_idx" ON "CompletedVisit"("performedById");

-- CreateIndex
CREATE INDEX "CompletedVisit_scheduledVisitId_idx" ON "CompletedVisit"("scheduledVisitId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
