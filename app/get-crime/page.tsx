import Link from "next/link";

export default function crime() {
    return (
        <div className="flex flex-col p-2 gap-2">
            <p>Get crime today, get HUGE negative savings AND get access to scamazon crime video featuring over -1 videos</p>
            <Link href="/get-crime/payment">
                <button className="bg-blue-400 px-5 py-3 rounded-md hover:bg-blue-500">Get now</button>
            </Link>
        </div>
    )
}