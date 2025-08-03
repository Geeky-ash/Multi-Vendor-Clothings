import Image from "next/image";
import Link from "next/link";

interface ShopCardProps {
  shopId: string;
  name: string;
  imageUrl: string;
}

export default function ShopCard({ shopId, name, imageUrl }: ShopCardProps) {
  return (
    <Link href={`/shop/${shopId}`} className="block group">
      <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden shadow-sm transition-shadow duration-300 group-hover:shadow-md">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-2 text-md font-semibold text-gray-900">{name}</h3>
    </Link>
  );
}