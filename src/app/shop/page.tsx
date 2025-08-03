import React from "react";
import ShopCard from "@/components/ShopCard";

// Dummy shop data; replace with your fetched shop data.
const shops = [
  { image: "/shops/rk.jpg", name: "RK", category: "Clothing" },
  { image: "/shops/mk.jpg", name: "MK Store", category: "Clothing" },
  { image: "/shops/omstore.jpg", name: "OmStore", category: "Grocery" },
  { image: "/shops/msanie.jpg", name: "M Sanie", category: "Clothing" },
];

export default function ShopListPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Shop</h1>
      <p className="text-gray-600 mb-5">Showing shops in Faridpur</p>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search shop…"
        className="w-full rounded-lg border border-gray-200 px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {/* Shop grid */}
      <div className="grid grid-cols-2 gap-4">
        {shops.map((shop, i) => (
          <ShopCard
            key={i}
            image={shop.image}
            name={shop.name}
            category={shop.category}
            onClick={() => {/* handle navigation */}}
          />
        ))}
      </div>
    </div>
  );
}
