import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Check if admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { username: "admin" },
  });

  if (existingAdmin) {
    console.log("✅ Admin user already exists");
    return;
  }

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);
  
  const admin = await prisma.user.create({
    data: {
      username: "admin",
      password: hashedPassword,
      name: "Amministratore",
      email: "admin@medical-app.local",
      role: "admin",
    },
  });

  console.log("✅ Admin user created:", {
    username: admin.username,
    name: admin.name,
  });

  // Create a test nurse
  const hashedNursePassword = await bcrypt.hash("nurse123", 10);
  
  const nurse = await prisma.user.create({
    data: {
      username: "infermiera1",
      password: hashedNursePassword,
      name: "Maria Rossi",
      email: "maria.rossi@medical-app.local",
      role: "nurse",
    },
  });

  console.log("✅ Test nurse created:", {
    username: nurse.username,
    name: nurse.name,
  });

  console.log("\n📝 Login credentials:");
  console.log("Admin - username: admin, password: admin123");
  console.log("Nurse - username: infermiera1, password: nurse123");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
