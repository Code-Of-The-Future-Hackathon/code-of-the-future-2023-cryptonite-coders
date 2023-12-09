import NextAuth, {type User} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "login",
            credentials: {
                username: {label: "username", type: "text"},
                password: {label: "password", type: "password"},
            },
            authorize: async (credentials, req) => {

                const obj: User = {
                    id: "1",
                    name: "test",
                    email: "test@example.com"
                }

                return obj;
            }
        })
    ],
})

export { handler as GET, handler as POST}
