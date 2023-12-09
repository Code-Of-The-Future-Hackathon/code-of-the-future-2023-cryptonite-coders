import React from "react";
import { db } from "@/lib/db";
import OrganisationParent from "@/components/organisation/organisation-parent";
import { Typography } from "@/components/ui/typography";

export default async function OrganisationsPage() {
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
        organisations.map((organisation, index) => (
            <div className="flex min-h-screen flex-col items-center justify-between p-2 gap-3 sm:p-10">
                <OrganisationParent
                    id={organisation.id}
                    name={organisation.name}
                    image={
                        organisation.image ||
                        "https://api-private.atlassian.com/users/be0f5f0009c0c0551a411dd9bc1fdc85/avatar"
                    }
                />
            </div>
        ))
    ) : (
        <Typography variant="h1" className="h-[calc(100vh-15rem)]">
            There is no organizations!
        </Typography>
    );
}
