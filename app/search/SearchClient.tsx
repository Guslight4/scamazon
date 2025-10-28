"use client";
import Listing from "../components/listing";
import products from "../product/products.json";
import { useSearchParams } from "next/navigation";

export default function SearchClient() {
  const productEntries = Object.entries(products.products);
  const searchParams = useSearchParams();
  const query = searchParams?.get("q")?.toLowerCase() ?? "";

  // If there is a query, filter; otherwise show all products
  const filteredEntries = query
    ? productEntries.filter(([key, p]) => p.title.toLowerCase().includes(query))
    : productEntries;

  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-4 p-5">
        {filteredEntries.map(([key, p]) => (
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
