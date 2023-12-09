import { OrgHeader } from "@/components/organizations-show.tsx/organisations-header";
import { OrgPictures } from "@/components/organizations-show.tsx/organisations-pictures";
import React from "react";

export default function Organization() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10 gap-3">
            <OrgHeader direction="left" />

            <OrgPictures direction="right" />
        </main>
    );
}
