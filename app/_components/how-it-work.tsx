import Image from "next/image";

const steps = [
    {
        number: 1,
        title: "Get Your Quote",
        description:
            "Answer a few questions about your home and receive a fixed-price boiler installation quote in fast, transparent, and hassle-free.",
        image: "/woman-relaxing-on-sofa-with-laptop-checking-quotes.jpg",
    },
    {
        number: 2,
        title: "Pick Your System",
        description:
            "Compare trusted brands and models to find the perfect fit. Choose to pay upfront or in easy installments.",
        image: "/technician-carrying-box-next-to-orange-service-van.jpg",
    },
    {
        number: 3,
        title: "Fast Installation",
        description:
            "Order by 3 PM and get your boiler installed the next working day by a certified 67PROHEAT engineer who will be professional, punctual, and friendly.",
        image: "/engineer-installing-white-boiler-unit-on-wall.jpg",
    },
    {
        number: 4,
        title: "Ongoing Support",
        description:
            "Receive all your documentation via email and enjoy responsive customer service for maintenance, repairs, and future upgrades.",
        image: "/ongoing-support.png",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                How does <span className="text-orange-500">67PROHEAT</span>{" "}
                work?
            </h2>

            <div className="relative">
                {/* Progress Line - Desktop */}
                {/* <div className="hidden md:block absolute top-[310px] left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 -z-10" /> */}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-square mb-8 overflow-hidden rounded-3xl shadow-sm">
                                <Image
                                    src={step.image || "/placeholder.svg"}
                                    alt={step.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Step Marker & Title */}
                            <div className="flex flex-col items-center w-full relative">
                                {/* Progress Line - Mobile */}
                                {/* {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-200 -z-10" />
                )} */}

                                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mb-4 z-10">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-primary leading-relaxed text-sm lg:text-base max-w-70">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
