import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

// 1. สร้างฟังก์ชันสำหรับการ Initialize
const prismaClientSingleton = () => {
  // สร้าง Pool จาก pg (node-postgres)
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  // ใช้ Adapter เพื่อเชื่อม Prisma เข้ากับ Pool
  const adapter = new PrismaPg(pool);

  // สร้าง PrismaClient โดยส่ง adapter เข้าไป
  return new PrismaClient({ adapter });
};

// 2. ป้องกันการเกิด Multiple Instances ในช่วง Development (Next.js Hot Reload)
declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
