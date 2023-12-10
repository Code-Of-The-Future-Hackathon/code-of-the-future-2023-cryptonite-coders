import React from "react";
import { db } from "@/lib/db";
import OrganisationParent from "@/components/organisation/organisation-parent";
import { Typography } from "@/components/ui/typography";
import { getCurrentUser } from "@/lib/session";

export default async function OrganisationsPage() {
    const user = await getCurrentUser();
    const organisations = await db.user.findMany({
        where: {
            role: "ORGANISATION",
        },
        select: {
            id: true,
            name: true,
            image: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return organisations.length > 0 ? (
        <div className="min-h-[calc(100vh-11rem)]">
            <div className="grid grid-cols-1 grid-rows-auto grid-flow-row gap-x-20 gap-y-5 lg:grid-cols-3 sm:grid-cols-2">
                {organisations.map((organisation, index) => (
                    <OrganisationParent
                        id={organisation.id}
                        name={organisation.name}
                        image={
                            organisation.image ||
                            "https://api-private.atlassian.com/users/be0f5f0009c0c0551a411dd9bc1fdc85/avatar"
                        }
                        isOwner={user?.name === organisation.name}
                    />
                ))}
            </div>
        </div>
    ) : (
        <Typography variant="h1" className="h-[calc(100vh-15rem)]">
            There is no organizations!
        </Typography>
    );
}
