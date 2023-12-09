import { getServerSession } from "next-auth/next";
import * as z from "zod";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { imageCreateSchema } from "@/lib/validations/image";
import { organisationPostCreateSchema } from "@/lib/validations/organisation-post";

export async function GET() {
    try {
        const organisationPosts = await db.organisationPost.findMany({
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
        });

        return new Response(JSON.stringify(organisationPosts));
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
        const body = organisationPostCreateSchema.parse(json);

        const { user } = session;
        const organisationPost = await db.organisationPost.create({
            data: {
                title: body.title,
                authorId: user.id,
                images: {
                    create: body.images.map((path) => ({
                        image: {
                            create: {
                                path,
                                ownerId: user.id,
                            },
                        },
                    })),
                },
            },
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
        });

        return new Response(JSON.stringify(organisationPost));
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 });
        }

        return new Response(null, { status: 500 });
    }
}
