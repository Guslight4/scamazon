import Link from "next/link";
import "./payment.css"

export default function crime() {
    return (
        <div className="flex flex-col p-2 gap-2">
            <p>Just enter your credit card number</p>
            <input className="crime-input"></input>
            <Link href="/crime-video" className="w-fit">
                <button className="bg-blue-400 px-5 py-3 rounded-md hover:bg-blue-500">Get now</button>
            </Link>
        </div>
    )
}