import NavigationBar from "@/components/NavigationBar";
import ProductDetail from "@/components/ProductDetail";
import { MadeWithDyad } from "@/components/made-with-dyad";

const ProductDetailPage = () => (
  <div className="min-h-screen bg-gray-50">
    <NavigationBar />
    <ProductDetail />
    <MadeWithDyad />
  </div>
);

export default ProductDetailPage;