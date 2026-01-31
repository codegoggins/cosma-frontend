import { Collapse, Drawer, Input } from "antd";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

const ProductsNavbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const menuItems = [
    {
      label: "NEW ARRIVAL",
      categories: [
        {
          title: "Clothing",
          items: ["T-Shirts", "Shirts", "Jeans", "Trousers", "Shorts"],
        },
        {
          title: "Footwear",
          items: ["Sneakers", "Running", "Formal", "Boots", "Sandals"],
        },
        {
          title: "Accessories",
          items: ["Watches", "Bags", "Sunglasses", "Belts", "Hats"],
        },
        {
          title: "Sportswear",
          items: ["Gym Wear", "Jerseys", "Tracksuits", "Swimwear", "Equipment"],
        },
      ],
    },
    { label: "MOST PICK", categories: [] },
    { label: "SALE", categories: [] },
    { label: "WOMEN", categories: [] },
    { label: "MEN", categories: [] },
    { label: "SNEAKERS", categories: [] },
  ];

  return (
    <div className="flex items-center justify-between gap-12">
      <div className="flex flex-1 max-w-xl">
        <Input
          placeholder="Search"
          prefix={<IoMdSearch className="text-muted-foreground w-4 h-4" />}
        />
      </div>
      <div className="hidden lg:flex items-center gap-6 text-muted-foreground">
        {menuItems.map((item, index) => (
          <div className="relative group cursor-pointer" key={index}>
            <span className="hover:text-primary transition-colors py-2 block">
              {item.label}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            {item.label === "NEW ARRIVAL" ? (
              <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 p-4 top-12 -left-8 transition-all duration-200 w-150 rounded-md">
                <div className="bg-zinc-900 w-full p-4 rounded-md">
                  <div className="grid grid-cols-4 gap-2">
                    {item.categories.map((section, colIdx) => (
                      <div key={colIdx} className="space-y-3">
                        <h4 className="font-bold text-sm text-white mb-2">
                          {section.title}
                        </h4>
                        {section.items.map((cat, rowIdx) => (
                          <Link
                            key={rowIdx}
                            to={`/products/category/${cat}`}
                            className="block py-1 px-2 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors truncate"
                          >
                            {cat}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 p-4 top-12 -left-8 transition-all duration-200 w-50 rounded-md">
                <div className="bg-zinc-900 w-full p-1 rounded-md">
                  <div className="space-y-1">
                    {[
                      "Shoes",
                      "Jackets",
                      "T-Shirt",
                      "Shorts",
                      "Accessories",
                      "Bag",
                    ].map((cat) => (
                      <Link
                        key={cat}
                        to={`/products/category/${cat}`}
                        className="block text-sm font-semibold py-2 px-3 rounded-sm hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="lg:hidden p-2 transition-colours"
        onClick={() => setOpenMobileMenu(true)}
      >
        <IoMenuSharp className="h-8 w-8" />
      </button>
      <Drawer
        open={openMobileMenu}
        placement="right"
        title={"Menu"}
        onClose={() => setOpenMobileMenu(false)}
      >
        <Collapse expandIconPlacement="end" ghost>
          {menuItems.map((item) =>
            item?.categories?.length > 0 ? (
              <Panel
                header={<span className="font-semibold">{item.label}</span>}
                key={item.label}
              >
                <div className="space-y-4">
                  {item.categories.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-sm text-primary mb-2">
                        {section.title}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((cat, catIdx) => (
                          <Link
                            key={catIdx}
                            to={`/products/category/${cat}`}
                            onClick={() => setOpenMobileMenu(false)}
                            className="block py-1 text-sm text-muted-foreground! hover:text-primary transition-colors"
                          >
                            {cat}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            ) : (
              <div
                key={item.label}
                className="py-3 px-4 border-b border-border"
              >
                <Link
                  to={`/products/${item.label.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setOpenMobileMenu(false)}
                  className="font-semibold hover:text-primary transition-colors text-muted-foreground!"
                >
                  {item.label}
                </Link>
              </div>
            ),
          )}
        </Collapse>
      </Drawer>
      {/* Banner */}
    </div>
  );
};

export default ProductsNavbar;
