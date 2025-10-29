"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import styles from "./mobileTopBar.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function MobileTopBar() {
    const router = useRouter();
    const [q, setQ] = useState('');
    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        const trimmed = q.trim();
        // Navigate to /search with query param; if empty, still navigate to /search
        const url = trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/search';
        router.push(url);
    }
    return (
        <div className="fixed left-0 right-0 top-20 z-50 flex flex-col px-3 py-3 bg-gray-100 dark:bg-gray-900 gap-3 shadow-md md:hidden" id="mobile-top-bar">
             <form onSubmit={onSubmit} className={styles.searchInputContainer} role="search">
                 <Search />
                 <input
                     type="search"
                     value={q}
                     onChange={(e) => setQ(e.target.value)}
                     className={styles.searchInput}
                     placeholder="Search"
                     aria-label="Search products"
                 />
             </form>
             <Link href="/">Home</Link>
             <Link href="/get-crime">Get Crime</Link>
         </div>
     );
 }