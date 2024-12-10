import { PrismaClient } from "@/prisma/generated/client/report";
const prisma = new PrismaClient();

// Middleware to sanitize input
prisma.$use(async (params, next) => {
  if (params.action === "create" || params.action === "update") {
    const data = params.args.data;
    if (data) {
      for (const key in data) {
        if (typeof data[key] === "string") {
          data[key] = data[key].replace(/\0/g, ""); // NULLバイトを除去
        }
      }
    }
  }
  return next(params);
});
export const prismaTest = new PrismaClient();
