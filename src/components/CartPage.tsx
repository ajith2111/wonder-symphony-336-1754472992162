import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <div className="text-xl mb-6">Your cart is empty.</div>
        <Link to="/" className="text-blue-600 underline">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 pb-20">
      <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900 text-center">Your Shopping Cart</h2>
      <ul className="space-y-6 mb-10">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-4 border-b pb-4">
            <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded-lg border" />
            <div className="flex-1">
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="text-gray-500 text-sm">{item.category}</div>
              <div className="text-gray-700 mt-1">Qty: {item.quantity}</div>
              <div className="mt-2 font-bold">${(item.price * item.quantity).toLocaleString()}</div>
            </div>
            <Button variant="destructive" size="icon" onClick={() => removeFromCart(item.id)}>
              <Trash2 />
            </Button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center text-2xl font-bold mb-6">
        <span>Total</span>
        <span>${total.toLocaleString()}</span>
      </div>
      <div className="flex gap-4">
        <Button className="flex-1" variant="secondary" onClick={clearCart}>Clear Cart</Button>
        <Button className="flex-1" disabled>Checkout (Coming Soon)</Button>
      </div>
    </div>
  );
};

export default CartPage;