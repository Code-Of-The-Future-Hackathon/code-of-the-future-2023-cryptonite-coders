import React from "react";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import OrganisationPost from "@/components/organisation/organisation-post";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface OrganisationPageProps {
    params: {
        id: string;
    };
}

export default async function OrganisationPage({
    params: { id },
}: OrganisationPageProps) {
    const organisation = await db.user.findFirst({
        where: {
            id: id,
            role: "ORGANISATION",
        },
        select: {
            id: true,
            name: true,
        },
    });

    const organisationPosts = await db.organisationPost.findMany({
        where: {
            authorId: id,
        },
        select: {
            id: true,
            title: true,
            images: {
                select: {
                    image: true,
                },
            },
        },
    });

    if (!organisation) {
        return notFound();
    }

    let isLeftDirection = true;

    return (
        <div
            className={cn(
                "flex min-h-screen flex-col items-center p-2 gap-3 sm:p-10",
                organisationPosts.length > 0 && "justify-between",
            )}
        >
            <Typography variant="h1">{organisation.name}</Typography>
            {organisationPosts.length > 0 ? (
                organisationPosts.map((organisationPost, index) => (
                    <>
                        <OrganisationPost
                            direction={isLeftDirection ? "left" : "right"}
                            title={organisationPost.title}
                            images={organisationPost.images.map(
                                (image) => image.image.path,
                            )}
                        />
                        {(isLeftDirection = !isLeftDirection)}
                    </>
                ))
            ) : (
                <Typography variant="h4" className="mt-10">
                    There is no posts!
                </Typography>
            )}
        </div>
    );
}
