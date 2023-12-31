import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().min(1),
        NEXTAUTH_SECRET: z.string().min(1),
    },
    runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
})