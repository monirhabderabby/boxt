import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Product = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
            {/* Content */}
            <div className="flex-1 w-full">
              <CardHeader className="p-0 space-y-3">
                <p className="text-lg font-medium text-orange-500">
                  🔥 Boiler Installation
                </p>

                <CardTitle className="text-2xl md:text-[25px] leading-tight">
                  Upgrade your heating, stress-free
                </CardTitle>

                <CardDescription className="text-base">
                  High-efficiency boiler installation by certified engineers.
                  Enjoy lower energy bills, fast installation, and long-lasting
                  performance for your home or rental property.
                </CardDescription>

                <Button className="mt-2 w-fit">Get a free quote</Button>
              </CardHeader>
            </div>

            {/* Image */}
            <div className="relative w-full lg:w-55 aspect-3/4">
              <Image
                src="/products/boiler.webp"
                alt="Boiler"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 220px"
                priority
              />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
            {/* Content */}
            <div className="flex-1 w-full">
              <CardHeader className="p-0 space-y-3">
                <p className="text-lg font-medium text-orange-500">
                  🛠 Boiler Repair
                </p>

                <CardTitle className="text-2xl md:text-[25px] leading-tight">
                  Fast, reliable boiler fixes
                </CardTitle>

                <CardDescription className="text-base">
                  From pressure issues to full breakdowns, we diagnose and
                  repair all major boiler brands quickly—keeping your home warm
                  when it matters most.
                </CardDescription>

                <Button className="mt-2 w-fit">Book a repair</Button>
              </CardHeader>
            </div>

            {/* Image */}
            <div className="relative w-full lg:w-55 aspect-3/4">
              <Image
                src="/products/repair.jpg"
                alt="Boiler"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 220px"
                priority
              />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
            {/* Content */}
            <div className="flex-1 w-full">
              <CardHeader className="p-0 space-y-3">
                <p className="text-lg font-medium text-orange-500">
                  📋 Service Plan
                </p>

                <CardTitle className="text-2xl md:text-[25px] leading-tight">
                  Peace of mind, all year round
                </CardTitle>

                <CardDescription className="text-base">
                  Affordable boiler service plans covering annual servicing,
                  priority repairs, and reduced call-out costs—no surprises, no
                  stress.
                </CardDescription>

                <Button className="mt-2 w-fit">View plans</Button>
              </CardHeader>
            </div>

            {/* Image */}
            <div className="relative w-full lg:w-55 aspect-3/4">
              <Image
                src="/products/service_plan.jpg"
                alt="Boiler"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 220px"
                priority
              />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
            {/* Content */}
            <div className="flex-1 w-full">
              <CardHeader className="p-0 space-y-3">
                <p className="text-lg font-medium text-orange-500">
                  🏠 Landlord Gas Safety Certificate
                </p>

                <CardTitle className="text-2xl md:text-[25px] leading-tight">
                  Stay compliant, hassle-free
                </CardTitle>

                <CardDescription className="text-base">
                  Certified Gas Safety (CP12) inspections for landlords. Quick
                  inspections, digital certificates, and full legal compliance.
                </CardDescription>

                <Button className="mt-2 w-fit">Book inspection</Button>
              </CardHeader>
            </div>

            {/* Image */}
            <div className="relative w-full lg:w-55 aspect-3/4">
              <Image
                src="/products/lanlord.jpg"
                alt="Boiler"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 220px"
                priority
              />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
            {/* Content */}
            <div className="flex-1 w-full">
              <CardHeader className="p-0 space-y-3">
                <p className="text-lg font-medium text-orange-500">
                  🪟 Windows
                </p>

                <CardTitle className="text-2xl md:text-[25px] leading-tight">
                  Energy-efficient windows, professionally fitted
                </CardTitle>

                <CardDescription className="text-base">
                  Upgrade to modern, insulated windows that improve comfort,
                  reduce heat loss, and enhance your property’s appearance.
                </CardDescription>

                <Button className="mt-2 w-fit">Explore options</Button>
              </CardHeader>
            </div>

            {/* Image */}
            <div className="relative w-full lg:w-55 aspect-3/4">
              <Image
                src="/products/windows.jpg"
                alt="Boiler"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 220px"
                priority
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Product;
