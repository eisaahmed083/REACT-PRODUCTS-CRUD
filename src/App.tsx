import ProductCard from "./Componants/ProductCard";
import {products} from "./data";

export default function App() {
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {renderProductList}
      </div>
    </>
  );
}
