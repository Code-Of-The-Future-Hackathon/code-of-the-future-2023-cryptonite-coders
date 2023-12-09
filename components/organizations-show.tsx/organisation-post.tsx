import CarouselBlock from "@/components/carousel";
import { cn } from "@/lib/utils";

interface OrganisationHeaderProps {
    direction: "left" | "right";
    title: string;
    images: string[];
}

export default function OrganisationPost({
    direction,
    title,
    images,
}: OrganisationHeaderProps) {
    return (
        <div
            className={cn(
                "flex justify-around items-center w-full border rounded-xl p-3",
                direction === "left"
                    ? "flex-col-reverse sm:flex-row"
                    : "flex-col sm:flex-row-reverse",
            )}
        >
            <div className="w-full text-center sm:w-1/3">
                <p>{title}</p>
            </div>
            <div className="w-full sm:w-1/2">
                <CarouselBlock images={images} />
            </div>
        </div>
    );
}
