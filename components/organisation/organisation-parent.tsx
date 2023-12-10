import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface OrganisationParentProps {
    id: string;
    name: string;
    image: string;
    isOwner: boolean;
}

export default function OrganisationParent({
    id,
    name,
    image,
    isOwner,
}: OrganisationParentProps) {
    return (
        <div className="flex justify-between flex-col p-3 border rounded-xl w-[300px] gap-3">
            <div className="flex items-center justify-center p-2 border-b-2 ">
                <img
                    className="rounded-full h-12 w-12"
                    src={image}
                    alt={name}
                />
            </div>
            <div>
                <p className="text-2xl flex-1 text-center">{name}</p>
            </div>
            <div className="w-full flex gap-x-2">
                <Link
                    className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full",
                    )}
                    href={`/organisations/${id}`}
                >
                    Click for more...
                </Link>
                {isOwner && (
                    <Link
                        className={cn(buttonVariants({ variant: "secondary" }))}
                        href={`/organisations/add-post`}
                    >
                        Add
                    </Link>
                )}
            </div>
        </div>
    );
}
