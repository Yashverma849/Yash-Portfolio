"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  label?: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
  className?: string;
  centered?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  hideControls?: boolean;
}

export function Gallery4({
  title = "Case Studies",
  description,
  items,
  className,
  centered = false,
  autoPlay = false,
  autoPlayInterval = 4000,
  hideControls = false,
}: Gallery4Props) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!carouselApi || !autoPlay) return;

    const tick = () => {
      if (!pausedRef.current) {
        carouselApi.scrollNext();
      }
    };

    const interval = window.setInterval(tick, autoPlayInterval);
    return () => window.clearInterval(interval);
  }, [carouselApi, autoPlay, autoPlayInterval]);

  const showControls = !hideControls;

  return (
    <section
      className={cn(
        "relative w-full overflow-x-clip py-12 sm:py-16 md:py-24 lg:py-32",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mb-8 md:mb-12 lg:mb-14",
            centered
              ? "flex flex-col items-center gap-4 text-center"
              : "flex items-end justify-between",
          )}
        >
          <div className={cn("flex flex-col gap-3 sm:gap-4", centered && "items-center")}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              {title}
            </h2>
            {description && (
              <p className="max-w-lg text-sm sm:text-base md:text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <Carousel
          setApi={setCarouselApi}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className="-ml-6">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <a
                  href={item.href}
                  className="group block h-full"
                  {...(item.href === "#" ? { onClick: (e) => e.preventDefault() } : {})}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-soft transition-shadow duration-300 group-hover:shadow-hover">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex h-[52%] flex-col justify-end p-6 text-primary-foreground md:p-7">
                      <div className="flex min-h-[11.5rem] flex-col gap-2.5 md:min-h-[12rem] md:gap-3">
                        <div className="flex h-7 items-center">
                          {item.label ? (
                            <span className="inline-flex rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground">
                              {item.label}
                            </span>
                          ) : null}
                        </div>
                        <h3 className="line-clamp-2 min-h-[3.25rem] text-xl font-semibold leading-tight md:min-h-[3.5rem] md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="line-clamp-3 min-h-[4rem] text-sm leading-relaxed text-primary-foreground/85 md:min-h-[4.5rem] md:text-base">
                          {item.description}
                        </p>
                        {showControls && (
                          <div className="flex items-center pt-1 text-sm font-medium text-accent-foreground/90">
                            Learn more
                            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Gallery4;
