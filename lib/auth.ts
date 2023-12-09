import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db as any),
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "login",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials, req) => {
                return {
                    id: "1",
                    name: "test",
                    email: "test@example.com",
                };
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
};
