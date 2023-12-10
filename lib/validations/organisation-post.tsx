import { z } from "zod";
import { imageCreateSchema } from "@/lib/validations/image";

export const organisationPostCreateSchema = z.object({
    title: z.string(),
    images: z.object({ value: z.string().url() }).array(),
});

export type OrganisationPostCreate = z.infer<
    typeof organisationPostCreateSchema
>;

export const organisationPostSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    images: z.array(imageCreateSchema),
});

export type OrganisationPost = z.infer<typeof organisationPostSchema>;

export const organisationPostPatchSchema = z.object({
    title: z.string(),
});

export type OrganisationPostPatch = z.infer<typeof organisationPostPatchSchema>;
