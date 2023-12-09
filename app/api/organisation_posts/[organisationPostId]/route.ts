import { getServerSession } from "next-auth";
import * as z from "zod";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { organisationPostPatchSchema } from "@/lib/validations/organisation-post";

const routeContextSchema = z.object({
    params: z.object({
        organisationPostId: z.string(),
    }),
});

export async function DELETE(
    req: Request,
    context: z.infer<typeof routeContextSchema>,
) {
    try {
        const { params } = routeContextSchema.parse(context);

        if (
            !(await verifyCurrentUserHasAccessToOrganisationPost(
                params.organisationPostId,
            ))
        ) {
            return new Response(null, { status: 403 });
        }

        await db.organisationPost.delete({
            where: {
                id: params.organisationPostId as string,
            },
        });

        return new Response(null, { status: 204 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 });
        }

        return new Response(null, { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    context: z.infer<typeof routeContextSchema>,
) {
    try {
        const { params } = routeContextSchema.parse(context);

        if (
            !(await verifyCurrentUserHasAccessToOrganisationPost(
                params.organisationPostId,
            ))
        ) {
            return new Response(null, { status: 403 });
        }

        const json = await req.json();
        const body = organisationPostPatchSchema.parse(json);

        await db.organisationPost.update({
            where: {
                id: params.organisationPostId,
            },
            data: {
                title: body.title,
            },
        });

        return new Response(null, { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 });
        }

        return new Response(null, { status: 500 });
    }
}

async function verifyCurrentUserHasAccessToOrganisationPost(
    organisationPostId: string,
) {
    const session = await getServerSession(authOptions);
    const count = await db.organisationPost.count({
        where: {
            id: organisationPostId,
            authorId: session?.user.id,
        },
    });

    return count > 0;
}
