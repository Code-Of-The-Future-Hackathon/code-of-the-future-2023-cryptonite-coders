import { User as PrismaUser } from "@prisma/client";
import { User } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: User & PrismaUser;
    }
}
