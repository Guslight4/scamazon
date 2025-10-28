import Listing from "./components/listing";
import products from "./product/products.json";

export default function Home() {
  const productEntries = Object.entries(products.products);

  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-4 p-4">
        {productEntries.map(([key, p]) => (
          <Listing
            key={key}
            name={p.title}
            imageUrl={p.image}
            price={String(p.price)}
            url={key}
          />
        ))}
      </div>
    </div>
  );
}
