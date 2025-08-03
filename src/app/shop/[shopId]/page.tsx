import ProductCard from "@/components/ProductCard";
import Image from "next/image";

// The `params` object will contain the dynamic segment, e.g., { shopId: '1' }
export default function ShopProfilePage({ params }: { params: { shopId: string } }) {
  // Mock data - In a real app, you'd fetch shop details and products
  // from your API using the params.shopId
  const shopDetails = {
    name: "RK",
    bannerUrl: "/shop-images/clothes-banner.jpg",
    address: "123 Main St, Faridpur",
  };

  const products = [
    { name: "Red Jacket", price: 1299, imageUrl: "/product-images/jacket.jpg" },
    { name: "Blue T-Shirt", price: 499, imageUrl: "/product-images/tshirt.jpg" },
    { name: "Denim Jeans", price: 1999, imageUrl: "/product-images/jeans.jpg" },
    { name: "Formal Shirt", price: 899, imageUrl: "/product-images/shirt.jpg" },
  ];

  return (
    <div>
      <header className="relative h-48 bg-gray-200">
        <Image src={shopDetails.bannerUrl} alt={`${shopDetails.name} banner`} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
          <h1 className="text-3xl font-bold text-white">{shopDetails.name}</h1>
        </div>
      </header>
      <div className="container mx-auto p-4">
        <p className="text-gray-600 mb-6">{shopDetails.address}</p>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
// Note: Create `public/product-images` and add placeholders.