import { getServerSession } from "next-auth";
import * as z from "zod";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { imageCreateSchema } from "@/lib/validations/image";

const routeContextSchema = z.object({
    params: z.object({
        imageId: z.string(),
    }),
});

export async function GET(
    req: Request,
    context: z.infer<typeof routeContextSchema>,
) {
    try {
        const { params } = routeContextSchema.parse(context);

        const image = await db.image.findFirst({
            select: {
                id: true,
                path: true,
                ownerId: true,
            },
            where: {
                id: params.imageId,
            },
        });

        return new Response(JSON.stringify(image));
    } catch (error) {
        return new Response(null, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    context: z.infer<typeof routeContextSchema>,
) {
    try {
        const { params } = routeContextSchema.parse(context);

        if (!(await verifyCurrentUserHasAccessToImage(params.imageId))) {
            return new Response(null, { status: 403 });
        }

        await db.image.delete({
            where: {
                id: params.imageId as string,
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

        if (!(await verifyCurrentUserHasAccessToImage(params.imageId))) {
            return new Response(null, { status: 403 });
        }

        const json = await req.json();
        const body = imageCreateSchema.parse(json);

        await db.image.update({
            where: {
                id: params.imageId,
            },
            data: {
                path: body.path,
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

async function verifyCurrentUserHasAccessToImage(imageId: string) {
    const session = await getServerSession(authOptions);
    const count = await db.image.count({
        where: {
            id: imageId,
            ownerId: session?.user.id,
        },
    });

    return count > 0;
}
