import { useState } from "react";
import { products } from "../../../assets/data/product";
import ProductsNavbar from "../components/ProductsNavbar";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const getImage = (cat: string) =>
    products.find((p) => p.category === cat)?.images[0];

  const collectionProducts = products.filter((product) => {
    if (activeCategory === "ALL") return true;
    return product.category.toUpperCase() === activeCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="relative z-10">
        <ProductsNavbar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-120 z-0">
        <div className="lg:col-span-2 relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500">
          <div className="absolute inset-0">
            <img
              src={getImage("T-Shirt") || products[0].images[0]}
              alt="Summer Outfit"
              className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="relative h-full flex flex-col justify-center p-10 lg:p-12 text-white">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#D4D8D5] overflow-hidden h-55 rounded-2xl flex items-center cursor-pointer group relative">
          <div className="flex-1 transition-transform duration-500 group-hover:translate-x-6 p-8">
            <h3 className="text-xl font-medium text-black/80">
              Trendy
              <br />
              Sunglass
            </h3>
          </div>
          <img
            src={getImage("Accessories")}
            alt="Sunglasses"
            className="w-2/3 h-full group-hover:scale-105 transition-transform duration-500 object-cover"
          />
          <div className="absolute bottom-6 right-6 z-20">
            <div className="w-10 h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              <MdArrowOutward className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="bg-[#E8D5C4] overflow-hidden h-55 rounded-2xl flex items-center cursor-pointer group relative">
          <div className="flex-1 transition-transform duration-500 group-hover:translate-x-6 p-8">
            <h3 className="text-xl font-medium text-black/80">
              Popular
              <br />
              Shoes
            </h3>
          </div>
          <img
            src={getImage("Shoes")}
            alt="Shoes"
            className="w-2/3 h-full group-hover:scale-105 transition-transform duration-500 object-cover translate-x-1/10"
          />
          <div className="absolute bottom-6 right-6 z-20">
            <div className="w-10 h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              <MdArrowOutward className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-medium">Browse by categories</h2>
          <div className="flex gap-2">
            {["ALL", "WOMAN", "CHILDREN"].map((filter) => (
              <button
                key={filter}
                className="cursor-pointer px-5 py-1.5 rounded-full border border-border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  transition-colors text-xs font-medium"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "SHOES", img: getImage("Shoes") },
            { name: "BRASH", img: getImage("Accessories") }, // Placeholder name from image
            { name: "BAG", img: getImage("Bag") },
            { name: "T-SHIRT", img: getImage("T-Shirt") },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-muted"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-black bg-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  {cat.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-medium">New Collection</h2>
          <div className="flex gap-2">
            {["ALL", "SHORTS", "JACKETS", "SHOES", "T-SHIRT"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="cursor-pointer px-5 py-1.5 rounded-full border border-border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  transition-colors text-xs font-medium"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            ...collectionProducts,
            ...collectionProducts,
            ...collectionProducts,
          ].map((product, idx) => (
            <div key={`${product.id}-${idx}`}>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group aspect-3/4 relative rounded-3xl overflow-hidden bg-[#E5E5E5]"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm text-black">
                    <FaRegHeart className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                    <MdArrowOutward className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
              <div className="mt-3 space-y-1">
                <h3 className="font-medium text-base truncate">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
