import React from "react";

interface ShopCardProps {
  image: string;
  name: string;
  category?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const ShopCard: React.FC<ShopCardProps> = ({ image, name, category, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden p-4 mb-4"
  >
    <img
      src={image}
      alt={name}
      className="w-full h-36 object-cover rounded-xl mb-4"
      loading="lazy"
    />
    <h3 className="text-lg font-semibold truncate mb-1">{name}</h3>
    {category && <p className="text-sm text-gray-500">{category}</p>}
  </div>
);

export default ShopCard;
