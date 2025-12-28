import Banner from "./_components/banner";
import OurPartners from "./_components/our-partner";
import Product from "./_components/product";

export default function Home() {
  return (
    <div className="space-y-10">
      <Banner />
      <OurPartners />
      <Product />
    </div>
  );
}
