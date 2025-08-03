import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="aspect-square bg-gray-100 relative w-full">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-lg font-bold text-gray-900 mt-1">₹{price.toFixed(2)}</p>
        <div className="flex space-x-2 mt-4">
          <button className="flex-1 bg-blue-600 text-white text-sm py-2 px-4 rounded-md hover:bg-blue-700">
            🛍️ Buy Online
          </button>
          <button className="flex-1 bg-gray-200 text-gray-800 text-sm py-2 px-4 rounded-md hover:bg-gray-300">
            🧭 Visit Shop
          </button>
        </div>
      </div>
    </div>
  );
}