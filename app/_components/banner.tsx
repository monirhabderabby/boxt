import BannerAnim from "@/components/shared/banner-anim";
import { Button } from "@/components/ui/button";

const Banner = () => {
    return (
        <div className="h-[calc(100vh-80px)] container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-center">
            <BannerAnim />

            <div className="bg-orange-500 w-full rounded-2xl p-10 space-y-5">
                <h1 className="font-bold text-white md:text-[35px] lg:text-[48px]">
                    Save £125 on all boilers this 67PROHEATing Day
                </h1>
                <p>
                    Use code BOILERS125 to save £125 on your fixed-price boiler
                    quote¹, with finance options² and next working day
                    installation³ available.
                </p>

                <Button className="bg-background text-primary hover:bg-white/90 cursor-pointer">
                    Get your fixed price
                </Button>
            </div>
        </div>
    );
};

export default Banner;
