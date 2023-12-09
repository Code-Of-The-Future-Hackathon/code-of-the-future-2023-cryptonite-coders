import { z } from "zod";

export const registerUserSchema = z
    .object({
        name: z.string().min(6).max(60),
        email: z.string().email(),
        password: z
            .string()
            .min(8)
            .max(60)
            .superRefine((val, ctx) => {
                const smallLetter = /[a-z]/.test(val);
                if (!smallLetter)
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "The password must contain one letter",
                    });
                const capitalLetter = /[A-Z]/.test(val);
                if (!capitalLetter)
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "The password must contain one capital letter",
                    });
                const number = /[0-9]/.test(val);
                if (!number)
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "The password must contain one number",
                    });
                const specialCharacter = /[^a-zA-Z0-9]/.test(val);
                if (!specialCharacter)
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message:
                            "The password must contain on special character",
                    });
            }),
        passwordConfirm: z
            .string()
            .min(8)
            .max(60)
            .superRefine((val, ctx) => {
                const smallLetter = /[a-z]/.test(val);
                if (!smallLetter)
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "The password must contain one letter",
                    });
                const capitalLetter = /[A-Z]/.test(val);
                if (!capitalLetter)
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "The password must contain one capital letter",
                    });
                const number = /[0-9]/.test(val);
                if (!number)
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "The password must contain one number",
                    });
                const specialCharacter = /[^a-zA-Z0-9]/.test(val);
                if (!specialCharacter)
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message:
                            "The password must contain on special character",
                    });
            }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: "Passwords does not match",
        path: ["passwordConfirm"],
    });

export type RegisterUser = z.infer<typeof registerUserSchema>;

export const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(60),
});

export type LoginUser = z.infer<typeof loginUserSchema>;

export const userSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(6).max(60),
    email: z.string().email(),
    role: z.enum(["USER", "ADMIN", "ORGANISATION", "CREATOR"]),
    approved: z.boolean(),
});

export type User = z.infer<typeof userSchema>;
