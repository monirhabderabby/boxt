import { Button } from "@/components/ui/button";
import Image from "next/image";
import bee from "../../public/bee.jpg";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-80px)] container mx-auto grid grid-cols-2 gap-5 w-full items-center">
      <Image src={bee} height={200} width={500} alt="Bee" />

      <div className="bg-red-500/70 w-full rounded-2xl p-10 space-y-5">
        <h1 className="font-bold text-white text-[48px]">
          Save £125 on all boilers this BOXTing Day
        </h1>
        <p>
          Use code BOILERS125 to save £125 on your fixed-price boiler quote¹,
          with finance options² and next working day installation³ available.
        </p>

        <Button>Get your fixed price</Button>
      </div>
    </div>
  );
};

export default Banner;
