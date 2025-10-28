import Link from "next/link";
import Image from "next/image";
import sitePath from "../lib/config.json";

export default function Home() {
    return (
        <div className="h-full w-full">
            <div className="grid grid-cols-4 p-4">
                <Link href="https://cornhub.website">
                    <div className="flex flex-col items-center border border-gray-300 rounded-md p-4 m-4 hover:shadow-lg w-fit h-70 justify-center">
                        <Image src={`${sitePath.sitepath}/images/crime-video/cornhub-logo.png`} alt="cornhub logo" width={200} height={200} />
                        <p className="p-2">Cornhub</p>
                    </div>
                </Link>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <div className="flex flex-col items-center border border-gray-300 rounded-md p-4 m-4 hover:shadow-lg w-fit h-70 justify-center">
                        <Image src={`${sitePath.sitepath}/images/crime-video/rick.jpg`} alt="rick astley" width={200} height={200} />
                        <p className="p-2">Rick Astley The Movie</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
