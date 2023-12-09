import React from "react";
import { cn } from "@/lib/utils";
import { Carousel } from "../carousel";
interface Props {
    direction: "left" | "right";
}

export const OrgPictures = ({ direction }: Props) => {
    return (
        <div
            className={cn(
                "flex justify-around items-center w-full border rounded-xl p-3",
                direction === "left" ? "flex-row" : "flex-row-reverse",
            )}
        >
            <div className="w-1/3">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro autem laudantium assumenda aperiam odio possimus
                    libero sunt beatae aut quia eligendi impedit, sint saepe non
                    iste rerum dolor, inventore iusto.
                </p>
            </div>
            <div className="w-1/2">
                <Carousel />
            </div>
        </div>
    );
};
