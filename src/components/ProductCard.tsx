import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  onBuyOnline?: () => void;
  onVisitShop?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, onBuyOnline, onVisitShop }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 mb-4">
    <img
      src={image}
      alt={name}
      className="w-full h-40 object-cover rounded-xl mb-4"
      loading="lazy"
    />
    <h4 className="font-medium text-base truncate mb-1">{name}</h4>
    <div className="text-xl font-bold text-primary mb-3">&#8377;{price}</div>
    <div className="flex gap-3">
      <button
        onClick={onBuyOnline}
        className="flex-1 bg-primary text-white rounded-xl py-2 font-semibold hover:bg-primary-dark transition"
      >
        Buy Online
      </button>
      <button
        onClick={onVisitShop}
        className="flex-1 bg-gray-200 text-gray-700 rounded-xl py-2 font-semibold hover:bg-gray-300 transition"
      >
        Visit Shop
      </button>
    </div>
  </div>
);

export default ProductCard;
