import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import Spritual from "@/components/Spritual";
import Phones from "@/components/Phones";
import DeliverySection from "@/components/Delivery";
import Recent from "@/components/Recent";
import Banner from "@/components/Banner";
import { slide1, slide2, slide3 } from "@/data/assets";

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);
  const newArrival = products.filter((product) => product.arrival);

  return (
    <div className="relative">
      <div>
        <Hero />
      </div>

      <div>
        <Category />
        <div id="featured" className="max-w-7xl mx-auto px-3 sm:px-0">
          <h1 className="lg:text-3xl md:text-2xl text-lg lg:my-5 my-2 font-bold">
            New Arrival
          </h1>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 overflow-x-scroll md:overflow-x-visible flex md:flex-none">
            {newArrival.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <Banner src={slide1} />

        <div id="featured" className="max-w-7xl mx-auto px-3 sm:px-0 pb-5">
          <h1 className="lg:text-3xl md:text-2xl text-lg lg:mt-8 lg:mb-4 my-2 font-bold">
            Featured Products
          </h1>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 overflow-x-scroll md:overflow-x-visible flex md:flex-none">
            {featuredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-8">
        <Spritual />
        <Banner src={slide2} />

        <Phones />

        <Banner src={slide3} />

        <div className="max-w-7xl mx-auto px-3 sm:px-0 my-3">
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-lg lg:my-5 my-2 font-bold">
              Recent viewed Products
            </h1>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 overflow-x-scroll md:overflow-x-visible flex md:flex-none mt-3">
              {featuredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <DeliverySection />
      </div>
    </div>
  );
}
