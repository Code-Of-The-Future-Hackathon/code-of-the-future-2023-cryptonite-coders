import { getServerSession } from "next-auth/next";
import * as z from "zod";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { imageCreateSchema } from "@/lib/validations/image";

export async function GET() {
    try {
        const images = await db.image.findMany({
            select: {
                id: true,
                path: true,
                ownerId: true,
            },
        });

        return new Response(JSON.stringify(images));
    } catch (error) {
        return new Response(null, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return new Response("Unauthorized", { status: 403 });
        }

        const json = await req.json();
        const body = imageCreateSchema.parse(json);

        const { user } = session;
        const image = await db.image.create({
            data: {
                path: body.path,
                ownerId: user.id,
            },
            select: {
                id: true,
                path: true,
                ownerId: true,
            },
        });

        return new Response(JSON.stringify(image));
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 });
        }

        return new Response(null, { status: 500 });
    }
}
