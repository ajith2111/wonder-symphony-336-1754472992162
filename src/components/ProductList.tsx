import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductList = () => (
  <section className="max-w-7xl mx-auto px-4 pb-12">
    <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-900">
      Discover Our Collection
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </section>
);

export default ProductList;