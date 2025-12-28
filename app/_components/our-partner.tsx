import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

export default function OurPartners() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <h1 className="mb-10 text-center text-[32px]">Our Partner</h1>

        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="hidden text-end text-sm">Powering the best teams</p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {[
                { src: "/partners/bosch.svg", alt: "Bosch" },
                { src: "/partners/google.svg", alt: "Google" },
                { src: "/partners/edf.svg", alt: "EDF" },
                { src: "/partners/powerwall.svg", alt: "Powerwall" },
                { src: "/partners/rangers.svg", alt: "Rangers" },
                { src: "/partners/sky.svg", alt: "Sky" },
                { src: "/partners/home.svg", alt: "Home" },
                { src: "/partners/nrg.svg", alt: "NRG" },
              ].map((logo) => (
                <div key={logo.src} className="flex">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={64}
                    className="mx-auto h-16 w-auto dark:invert"
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background" />
            <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background" />

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
