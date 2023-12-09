import { z } from "zod";

export const imageCreateSchema = z.object({
    path: z.string(),
});

export type ImageCreate = z.infer<typeof imageCreateSchema>;

export const imageSchema = z.object({
    id: z.string().uuid(),
    path: z.string(),
});

export type Image = z.infer<typeof imageSchema>;
