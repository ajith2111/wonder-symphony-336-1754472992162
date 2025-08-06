import { Link, useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Loyalty", to: "/loyalty" },
];

const NavigationBar = () => {
  const { items } = useCart();
  const location = useLocation();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="w-full flex items-center justify-between py-6 px-4 bg-white shadow-sm mb-6">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-gray-900">
          Couture Luxe
        </Link>
        <div className="hidden md:flex gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-lg font-medium hover:text-gray-700 transition ${
                location.pathname === l.to ? "text-black underline" : "text-gray-500"
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-gray-500 hover:text-black text-base">
          Login
        </Link>
        <Link to="/register" className="text-gray-500 hover:text-black text-base">
          Register
        </Link>
        <Link to="/cart" className="relative">
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingBag />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-xs rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;