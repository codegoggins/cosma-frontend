import { products } from "../../../assets/data/product";
import ProductsNavbar from "../components/ProductsNavbar";
import { MdArrowOutward } from "react-icons/md";

const Products = () => {
  const getImage = (cat: string) =>
    products.find((p) => p.category === cat)?.images[0];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <ProductsNavbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-120">
        <div className="lg:col-span-2 relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500">
          <div className="absolute inset-0">
            <img
              src={getImage("T-Shirt") || products[0].images[0]}
              alt="Summer Outfit"
              className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center p-10 lg:p-12 text-white">
            <h2 className="text-5xl lg:text-7xl font-medium leading-tight mb-4">
              Summer
              <br />
              Arrival of
              <br />
              Outfit
            </h2>
            <p className="text-white max-w-md mb-6 text-base">
              Discover quality fashion that reflects your style and makes
              everyday enjoyable.
            </p>
            <button className="w-fit bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black/80 transition-colors group/btn text-sm">
              EXPLORE PRODUCT
              <MdArrowOutward className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>

            <div className="absolute top-8 right-8 text-right font-preahvihear">
              <span className="text-6xl block">50%</span>
              <span className="text-xl uppercase">OFF</span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500">
          <img
            src={getImage("Accessories") || products[0].images[1]}
            alt="Lifestyle"
            className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 right-6 group/btn">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
              <MdArrowOutward className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
