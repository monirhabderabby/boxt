import Banner from "./_components/banner";
import HowItWorks from "./_components/how-it-work";
import OurPartners from "./_components/our-partner";
import PriceMatchPromise from "./_components/price-match-promise";
import Product from "./_components/product";
import Testimonials from "./_components/testimonials";

export default function Home() {
    return (
        <div className="space-y-10">
            <Banner />
            <OurPartners />
            <Product />
            <HowItWorks />
            <Testimonials />
            <PriceMatchPromise />
        </div>
    );
}
