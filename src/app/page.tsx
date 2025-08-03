import ShopCard from "@/components/ShopCard";
import { Search } from "lucide-react";

export default function Home() {
  // Mock data - In a real app, you would fetch this from your API
  const featuredShops = [
    { shopId: '1', name: "RK", imageUrl: "/shop-images/clothes1.jpg" },
    { shopId: '2', name: "MK Store", imageUrl: "/shop-images/clothes2.jpg" },
    { shopId: '3', name: "OmStore", imageUrl: "/shop-images/grocery1.jpg" },
    { shopId: '4', name: "M Sanie", imageUrl: "/shop-images/clothes3.jpg" },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="my-2">
        <h1 className="text-3xl font-bold">Shop</h1>
        <p className="text-gray-500">Showing shops in Faridpur</p>
      </header>

      {/* Search Bar */}
      <div className="relative my-6">
        <input 
          type="text" 
          placeholder="Search for shops or products..." 
          className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Shops</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredShops.map((shop) => (
            <ShopCard key={shop.shopId} shopId={shop.shopId} name={shop.name} imageUrl={shop.imageUrl} />
          ))}
        </div>
      </section>
    </div>
  );
}
