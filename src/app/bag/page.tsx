import { ShoppingBag } from "lucide-react";

export default function BagPage() {
  // Logic for cart items would go here
  const cartItems = []; // Empty for now

  return (
    <div className="container mx-auto p-4 pt-10 text-center">
      <ShoppingBag className="mx-auto w-16 h-16 text-gray-300" />
      <h1 className="text-2xl font-bold mt-4">Your Bag is Empty</h1>
      <p className="text-gray-500 mt-2">Looks like you haven't added anything to your bag yet.</p>
    </div>
  );
}