import NavigationBar from "@/components/NavigationBar";
import CartPage from "@/components/CartPage";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Cart = () => (
  <div className="min-h-screen bg-gray-50">
    <NavigationBar />
    <CartPage />
    <MadeWithDyad />
  </div>
);

export default Cart;