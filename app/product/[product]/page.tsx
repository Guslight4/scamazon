import products from '../products.json';
import Image from "next/image";
import sitePath from "../../lib/config.json";

// Force static rendering for this dynamic route and use generateStaticParams
export const dynamic = 'force-static';

type Props = {
    params: Promise<{ product: string }>;
};

export async function generateStaticParams() {
    return Object.keys(products.products).map((product) => ({ product }));
}

export default async function ListingPage({ params }: Props) {
    // params is a Promise in newer Next versions and must be awaited before use
    const resolvedParams = await params;
    const slug = resolvedParams.product as keyof typeof products.products;
    const product = products.products[slug];

    // Server-side log of params to help debugging when Next renders the page
    // eslint-disable-next-line no-console
    console.log('ListingPage server render - params:', resolvedParams, 'resolvedSlug:', slug);

    if (!product) {
        return (
            <div className="p-5">
                <h2 className="text-xl font-semibold">Product not found</h2>
            </div>
        );
    }

    return (
        <div className="h-full w-full">
            <div className="flex justify-between w-full h-full p-5 flex-wrap">
                <div className="flex flex-row gap-5">
                    <Image src={`${sitePath.sitepath}${product.image}`} alt={product.title} width={200} height={200} />
                    <div>
                        <p className="text-3xl">{product.title}</p>
                        <p>${product.price}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <p>${product.price}</p>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <button className="bg-blue-400 px-5 py-3 rounded-md hover:bg-blue-500">Buy Now</button>
                    </a>
                </div>
            </div>
            <p className="p-5">{product.description}</p>
        </div>
    );
}
