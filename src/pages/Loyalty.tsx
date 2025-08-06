import NavigationBar from "@/components/NavigationBar";
import LoyaltyPage from "@/components/LoyaltyPage";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Loyalty = () => (
  <div className="min-h-screen bg-gray-50">
    <NavigationBar />
    <LoyaltyPage />
    <MadeWithDyad />
  </div>
);

export default Loyalty;