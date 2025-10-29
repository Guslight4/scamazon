import Link from "next/link";

export default function MobileTopBar() {
    return (
        <div className="flex h-full flex-col px-3 py-4 bg-gray-900 gap-4 hidden" id="mobile-top-bar">
            <Link href="/">Home</Link>
            <Link href="/get-crime">Get Crime</Link>
        </div>
    );
}