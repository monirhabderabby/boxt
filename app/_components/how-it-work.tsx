import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Discover",
    description:
      "Answer some questions about your home and get a fixed-price install quote in minutes",
    image: "/woman-relaxing-on-sofa-with-laptop-checking-quotes.jpg",
  },
  {
    number: 2,
    title: "Choose",
    description:
      "Compare brands, models and sizes to choose the right solution for your home. Pay upfront or in instalments",
    image: "/technician-carrying-box-next-to-orange-service-van.jpg",
  },
  {
    number: 3,
    title: "Install",
    description:
      "Order online by 3pm for next working day installation by a skilled and friendly BOXT accredited engineer",
    image: "/engineer-installing-white-boiler-unit-on-wall.jpg",
  },
  {
    number: 4,
    title: "Maintain",
    description:
      "Download the BOXT app to keep track of your installation and view all your important documentation",
    image: "/person-holding-smartphone-displaying-service-app-i.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        How does BOXT work?
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

                <div className="w-8 h-8 rounded-full bg-[#e3544c] text-white flex items-center justify-center text-sm font-bold mb-4 z-10">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-white/70 leading-relaxed text-sm lg:text-base max-w-70">
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
