import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => (
  <Link to={`/products/${product.id}`} className="block hover:shadow-lg transition rounded-xl overflow-hidden">
    <Card className="h-full flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <CardContent className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <div className="text-gray-500 text-sm mb-2">{product.category}</div>
          <p className="text-gray-700 text-sm">{product.description}</p>
        </div>
        <div className="text-xl font-bold mt-4 text-right">${product.price.toLocaleString()}</div>
      </CardContent>
    </Card>
  </Link>
);

export default ProductCard;