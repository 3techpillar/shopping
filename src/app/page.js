
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Hero from '@/components/Hero';
import Category from '@/components/Category';
import Spritual from '@/components/Spritual';
import Phones from '@/components/Phones';
import DeliverySection from '@/components/Delivery';
import Recent from '@/components/Recent';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);
  const newArrival = products.filter(product => product.arrival)

  return (
    <div className="relative">
      <div>
        <Hero />
      </div>

      <div className='max-w-7xl mx-auto px-3 sm:px-0'>
      <Category />
        <div id='featured'>
          <h1 className="lg:text-4xl md:text-3xl text-2xl lg:my-5 my-4 font-bold">New Arrival</h1>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-scroll md:overflow-x-visible flex md:flex-none">
            {newArrival.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
  ))}
</div>

        </div>
        
        <div id='featured'>
          <h1 className="lg:text-4xl md:text-3xl text-2xl lg:mt-8 lg:mb-4 my-5 font-bold">Featured Products</h1>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-scroll md:overflow-x-visible flex md:flex-none">
            {featuredProducts.map(product => (
             <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        
      </div>

      <div className='mt-8'>
        <Spritual />
        <Phones />
        <div className='max-w-7xl mx-auto px-3 sm:px-0 my-5'>
        <div>
          <h1 className="lg:text-4xl md:text-3xl text-2xl lg:my-5 my-2 font-bold">Recent viewed Products</h1>
           <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-scroll md:overflow-x-visible flex md:flex-none mt-4">
            {featuredProducts.map(product => (
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
