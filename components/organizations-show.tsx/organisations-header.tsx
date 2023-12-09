import React, { useState } from "react";
import { CarouselBlock } from "../carousel";
import { cn } from "@/lib/utils";

interface Props {
    direction: "left" | "right";
}

export const OrgHeader = ({ direction }: Props) => {
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro autem laudantium assumenda aperiam odio possimus
                    libero sunt beatae aut quia eligendi impedit, sint saepe non
                    iste rerum dolor, inventore iusto.
                </p>
            </div>
            <div className="w-full sm:w-1/2">
                <CarouselBlock />
            </div>
        </div>
    );
};
