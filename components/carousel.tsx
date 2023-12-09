"use client"

import {
  Carousel,
  CarouselViewport,
  CarouselItem,
  CarouselContent,
  CarouselControls,
  CarouselTrigger,
  CarouselPrev,
  CarouselNext,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

const TEST_IMGS=["https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300"]

export function CarouselBlock() {

  return (
    <Carousel className="max-w-xl space-y-4 py-4">
      <CarouselViewport className="p-0">
        {TEST_IMGS.map((img) => (
          <CarouselItem key={img} className="h-fit">
            <CarouselContent>
              <img src={img} className="w-auto max-h-[500px]"/>
            </CarouselContent>
          </CarouselItem>
        ))}
      </CarouselViewport>
      <CarouselControls>
        <div className="flex justify-between flex-row w-full">
          <CarouselPrev />
          <div className="space-x-2">
          {TEST_IMGS.map((_, index) => (
            <CarouselTrigger key={index} index={index}>
              <span className="sr-only">{`${index + 1}`}</span>
            </CarouselTrigger>
          ))}
        </div>
          <CarouselNext />
        </div>
        
      </CarouselControls>
    </Carousel>
  );
}