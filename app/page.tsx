import Listing from "./components/listing";
import products from "./product/products.json";

export default function Home() {
  const productEntries = Object.entries(products.products);

  return (
    <div className="h-full w-full">
      <div className="flex flex-row justify-start p-4 w-full flex-wrap">
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
