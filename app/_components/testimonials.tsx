import TestimonialsCarousel from "@/components/testimonials/testimonials-carousel";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Stars } from "lucide-react";

const testimonialData = [
    {
        id: 1,
        title: "Fast, tidy and great communication",
        text: "Wing Lee was great. Clear with arrival time and job duration. Left everything tidy and explained operating tips well.",
        author: "Andrew Armitage",
        time: "9 hours ago",
        rating: 5,
        verified: true,
    },
    {
        id: 2,
        title: "Great service",
        text: "Form the start getting a quote arranging a date for installation and getting the boiler installed, everything was handled professionally.",
        author: "Karl",
        time: "10 hours ago",
        rating: 5,
        verified: true,
    },
    {
        id: 3,
        title: "First Class Service",
        text: "After reading quite a few reviews regarding the BOXT service we decided to take the chance and we are so glad we did. From the initial contact to the installation everything was handled in a professional manner. The installation team were punctual, polite and efficient. We would have no hesitation in recommending BOXT to anyone looking for a new boiler.",
        author: "customer",
        time: "14 hours ago",
        rating: 5,
        verified: true,
    },
    {
        id: 4,
        title: "The engineer was extremely professional",
        text: "The engineer did an excellent job",
        author: "Efe Okhueleigbe",
        time: "15 hours ago",
        rating: 5,
        verified: true,
    },
    {
        id: 5,
        title: "Lovely smooth transaction from start to finish",
        text: "Lovely smooth transaction from start to finish. Everything happened when said would do someone else could do it. Thank you!",
        author: "customer",
        time: "17 hours ago",
        rating: 5,
        verified: true,
    },
];

const Testimonials = () => {
    return (
        <section className="w-full bg-neutral-950 py-12 sm:py-16 md:py-20 px-4 sm:px-16 lg:px-20">
            <div className="container mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
                    What our customers say
                </h2>

                {/* Testimonials Carousel */}
                <TestimonialsCarousel data={testimonialData} />

                {/* Trustpilot Section */}
                <div className="text-center mb-12 sm:mb-16 px-4">
                    <p className="text-neutral-400 text-xs sm:text-sm mb-3">
                        Rated{" "}
                        <span className="font-bold text-white">4.8 / 5</span>{" "}
                        based on{" "}
                        <span className="font-bold text-white underline cursor-pointer hover:text-neutral-300">
                            52,307 reviews
                        </span>
                        . Showing our{" "}
                        <span className="font-bold text-white">
                            4 & 5 star reviews
                        </span>
                        .
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <Stars />
                        <span className="text-neutral-400 text-xs sm:text-sm font-medium">
                            Trustpilot
                        </span>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-start sm:items-center gap-4">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500 shrink-0 mt-1 sm:mt-0" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white text-balance">
                            Want to know more reasons why people choose BOXT?
                        </h3>
                    </div>

                    <Button className="text-lg px-6">Tell me more</Button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
