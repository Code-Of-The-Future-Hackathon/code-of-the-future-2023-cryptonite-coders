import { NextAuthOptions, type User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "login",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials, req) => {
                const obj: User = {
                    id: "1",
                    name: "test",
                    email: "test@example.com",
                };

                return obj;
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
};
