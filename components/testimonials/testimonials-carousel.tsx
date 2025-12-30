"use client";

import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Testimonial {
    id: number;
    title: string;
    text: string;
    author: string;
    time: string;
    rating: number;
    verified: boolean;
}

const TestimonialsCarousel = ({ data }: { data: Testimonial[] }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(data.length);

    const onSelect = useCallback(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap() + 1);
    }, [api]);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api, onSelect]);

    const Star = () => <span className="text-emerald-500 text-xl">★</span>;

    return (
        <div>
            {/* Testimonial Cards Carousel */}
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    slidesToScroll: 1,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                        stopOnInteraction: true,
                    }),
                ]}
                setApi={setApi}
                className="w-full mb-8 sm:mb-12"
            >
                <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4 pt-2">
                    {data.map((testimonial) => (
                        <CarouselItem
                            key={testimonial.id}
                            className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                        >
                            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 sm:p-6 flex flex-col hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 h-full">
                                <div className="flex items-center gap-x-2 mb-2">
                                    {/* Rating Stars */}
                                    <div className="flex gap-x-px">
                                        {Array.from({
                                            length: testimonial.rating,
                                        }).map((_, i) => (
                                            <Star key={i} />
                                        ))}
                                    </div>

                                    {/* Verified Badge */}
                                    {testimonial.verified && (
                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                            <span>Verified</span>
                                        </div>
                                    )}
                                </div>

                                {/* Review Title */}
                                <h3 className="font-bold text-white mb-1  text-sm sm:text-base truncate">
                                    {testimonial.title}
                                </h3>

                                {/* Review Text */}
                                <p className="text-neutral-300 text-xs sm:text-sm mb-2 grow leading-relaxed line-clamp-3">
                                    {testimonial.text}
                                </p>

                                {/* Author and Time */}
                                <div className="text-xs sm:text-sm text-neutral-500">
                                    <p className="font-medium text-neutral-400">
                                        {testimonial.author}
                                    </p>
                                    <p>{testimonial.time}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Buttons - Outside Carousel */}
                <CarouselPrevious className="hidden sm:flex -left-12 lg:-left-16 bg-neutral-800 hover:bg-emerald-500 text-white border-0" />
                <CarouselNext className="hidden sm:flex -right-12 lg:-right-16 bg-neutral-800 hover:bg-emerald-500 text-white border-0" />
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mb-12 sm:mb-16 flex-wrap">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => api?.scrollTo(index)}
                        className={`rounded-full transition-all duration-300 ${
                            index + 1 === current
                                ? "bg-emerald-500 w-3 h-3"
                                : "bg-neutral-700 w-2 h-2 hover:bg-neutral-600"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
