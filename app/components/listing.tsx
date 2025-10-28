import Image from "next/image";
import Link from "next/link";

type props = { name: string, imageUrl: string, price: string, url: string }
export default function Listing(props: props) {
    return (
        <>
            <Link href={`/product/${props.url}`}>
                <div className="flex flex-col items-center border border-gray-300 rounded-md p-4 m-4 hover:shadow-lg w-fit h-75 justify-center">
                    <Image src={props.imageUrl} alt={props.name} width={200} height={200} />
                    <p className="p-2">{props.name}</p>
                    <p>${props.price}</p>
                </div>
            </Link>
        </>
    )
}