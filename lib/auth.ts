import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db as any),
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "login",
            credentials: {
                email: { label: "username", type: "text" },
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials, req) => {
                if (!credentials) return null;

                const { email, password } = credentials;

                const user = await db.user.findFirst({ where: { email } });

                if (!user || !user.id) return null;

                const passwordsMatch = await bcrypt.compare(
                    password,
                    user.password,
                );

                if (!passwordsMatch) return null;

                return user;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
