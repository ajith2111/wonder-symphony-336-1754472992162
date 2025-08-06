import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="py-16 text-center">
        <div className="text-xl mb-4">Product not found.</div>
        <Button onClick={() => navigate("/")}>Back to Shop</Button>
      </div>
    );
  }

  function handleAdd() {
    addToCart(product);
    toast({ title: "Added to cart", description: `${product.name} has been added to your cart.` });
  }

  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 p-6 pt-12">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-[28rem] object-cover rounded-xl shadow"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
          <div className="text-gray-500 text-lg mb-4">{product.category}</div>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
        </div>
        <div>
          <div className="text-2xl font-bold mb-4">${product.price.toLocaleString()}</div>
          <Button className="w-full text-lg py-6" onClick={handleAdd}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;