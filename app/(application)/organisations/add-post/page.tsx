import React from "react";
import NewPost from "@/components/forms/new-post";
import { Typography } from "@/components/ui/typography";

export default async function OrganisationAddPostPage() {
    return (
        <div className="flex flex-col items-center">
            <Typography variant="h1">Create post</Typography>
            <NewPost />
        </div>
    );
}
