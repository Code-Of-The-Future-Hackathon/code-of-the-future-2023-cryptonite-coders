import * as z from "zod";
import { db } from "@/lib/db";

const routeContextSchema = z.object({
    params: z.object({
        organisationId: z.string(),
    }),
});

export async function GET(
    req: Request,
    context: z.infer<typeof routeContextSchema>,
) {
    try {
        const { params } = routeContextSchema.parse(context);

        const organisationPost = await db.organisationPost.findMany({
            select: {
                id: true,
                title: true,
                authorId: true,
                images: {
                    select: {
                        image: true,
                    },
                },
            },
            where: {
                authorId: params.organisationId,
            },
        });

        return new Response(JSON.stringify(organisationPost));
    } catch (error) {
        return new Response(null, { status: 500 });
    }
}
