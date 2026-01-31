import goggles1 from "../../assets/products/goggles1.jpg";
import goggles2 from "../../assets/products/goggles2.jpg";
import goggles3 from "../../assets/products/goggles3.jpg";
import goggles4 from "../../assets/products/goggles4.jpg";
import goggles5 from "../../assets/products/goggles5.jpg";

import nike1 from "../../assets/products/nike_1.jpg";
import nike2 from "../../assets/products/nike_2.jpg";

import shoebrown1 from "../../assets/products/shoebrown_1.jpg";
import shoebrown2 from "../../assets/products/shoebrown_2.jpg";
import shoebrown3 from "../../assets/products/shoebrown_3.jpg";
import shoebrown4 from "../../assets/products/shoebrown_4.jpg";

import whiteshoe1 from "../../assets/products/white_shoe1.jpg";
import whiteshoe2 from "../../assets/products/white_shoe2.jpg";
import whiteshoe3 from "../../assets/products/white_shoe3.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  category: string;
  specs: { [key: string]: string };
}

export const products: Product[] = [
  {
    id: "goggles-pro-x",
    name: "Pro Vision Goggles X",
    price: 129.99,
    description:
      "High-performance protective eyewear with anti-fog coating and UV protection. Perfect for industrial use or extreme sports.",
    images: [goggles1, goggles2, goggles3, goggles4, goggles5],
    rating: 4.8,
    reviews: 124,
    category: "Accessories",
    specs: {
      "Lens Material": "Polycarbonate",
      "Frame Type": "Full Rim",
      "UV Protection": "100%",
      "Anti-Fog": "Yes",
    },
  },
  {
    id: "nike-air-runner",
    name: "Nike Air Runner Elite",
    price: 159.0,
    description:
      "Experience ultimate comfort and speed with the Nike Air Runner Elite. Designed for professional athletes and casual runners alike.",
    images: [nike1, nike2],
    rating: 4.5,
    reviews: 89,
    category: "Shoes",
    specs: {
      "Upper Material": "Mesh",
      Sole: "Rubber",
      Weight: "250g",
      Color: "Black/Red",
    },
  },
  {
    id: "classic-leather-brown",
    name: "Classic Leather Loafers",
    price: 89.5,
    description:
      "Timeless style meets modern comfort. These genuine leather loafers are perfect for formal occasions or smart-casual wear.",
    images: [shoebrown1, shoebrown2, shoebrown3, shoebrown4],
    rating: 4.7,
    reviews: 210,
    category: "Shoes",
    specs: {
      Material: "Genuine Leather",
      Style: "Slip-on",
      Sole: "Synthetic",
      Color: "Brown",
    },
  },
  {
    id: "urban-white-sneakers",
    name: "Urban White Sneakers",
    price: 75.0,
    description:
      "Clean, minimalist design for the modern urbanite. These white sneakers pair perfectly with jeans, chinos, or shorts.",
    images: [whiteshoe1, whiteshoe2, whiteshoe3],
    rating: 4.2,
    reviews: 56,
    category: "Shoes",
    specs: {
      Material: "Synthetic Leather",
      Closure: "Lace-up",
      Sole: "Rubber",
      Color: "White",
    },
  },
  {
    id: "summer-floral-shirt",
    name: "Summer Floral Shirt",
    price: 45.0,
    description:
      "Lightweight and breathable floral shirt, perfect for summer days.",
    images: [goggles2], // Reusing image as placeholder
    rating: 4.6,
    reviews: 32,
    category: "T-Shirt",
    specs: {
      Material: "Cotton",
      Fit: "Regular",
      Pattern: "Floral",
    },
  },
  {
    id: "urban-tote-bag",
    name: "Urban Tote Bag",
    price: 55.0,
    description: "Stylish and spacious tote bag for your daily essentials.",
    images: [whiteshoe3], // Reusing image as placeholder
    rating: 4.9,
    reviews: 15,
    category: "Bag",
    specs: {
      Material: "Canvas",
      Size: "Large",
      Color: "Blue",
    },
  },
  {
    id: "sport-jacket",
    name: "Performance Jacket",
    price: 120.0,
    description: "Windproof and water-resistant jacket for outdoor activities.",
    images: [nike2], // Reusing image as placeholder
    rating: 4.7,
    reviews: 45,
    category: "Jackets",
    specs: {
      Material: "Polyester",
      Waterproof: "Yes",
      Hood: "Yes",
    },
  },
  {
    id: "casual-shorts",
    name: "Casual Cargo Shorts",
    price: 35.0,
    description: "Comfortable cargo shorts with multiple pockets.",
    images: [shoebrown2], // Reusing image as placeholder
    rating: 4.3,
    reviews: 28,
    category: "Shorts",
    specs: {
      Material: "Cotton Blend",
      Pockets: "6",
      Fit: "Relaxed",
    },
  },
];
