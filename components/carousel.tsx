"use client";

import {
    Carousel,
    CarouselContent,
    CarouselControls,
    CarouselItem,
    CarouselNext,
    CarouselPrev,
    CarouselTrigger,
    CarouselViewport,
} from "@/components/ui/carousel";

interface CarouselBlockProps {
    images: string[];
}

export default function CarouselBlock({ images }: CarouselBlockProps) {
    return (
        <Carousel className="w-full space-y-4 py-4 bg-secondary">
            <CarouselViewport className="p-0">
                {images.map((img) => (
                    <CarouselItem key={img} className="">
                        <CarouselContent>
                            <img src={img} className="w-auto max-h-[650px]" />
                        </CarouselContent>
                    </CarouselItem>
                ))}
            </CarouselViewport>
            <CarouselControls>
                <div className="flex justify-between flex-row w-full rounded">
                    <CarouselPrev />
                    <div className="space-x-2">
                        {images.map((_, index) => (
                            <CarouselTrigger key={index} index={index}>
                                <span className="sr-only">{`${
                                    index + 1
                                }`}</span>
                            </CarouselTrigger>
                        ))}
                    </div>
                    <CarouselNext />
                </div>
            </CarouselControls>
        </Carousel>
    );
}
