import React from "react";
import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CourseParentProps {
    id: string;
    title: string;
    author: string;
    image: string;
    description: string;
}

export default function CourseParent({
    id,
    title,
    author,
    image,
    description,
}: CourseParentProps) {
    return (
        <div className="flex justify-between flex-col p-3 border rounded-xl w-[300px] gap-3">
            <div className="flex items-center p-2 border-b-2 ">
                <div className="flex items-center justify-center flex-col gap-1">
                    <img className="rounded-full h-12 w-12" src={image} />
                    <p>{author}</p>
                </div>
                <p className="text-3xl flex-1 text-center">{title}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <Button variant="default" disabled={true}>
                Click for more...
            </Button>
        </div>
    );
}
