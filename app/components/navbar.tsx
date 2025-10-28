"use client";

import Image from "next/image";
import Link from "next/link";
import styles from './navbar.module.css';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import sitePath from "../lib/config.json";

export default function Navbar() {
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
        <div className={styles.navbar}>
            <div className="w-fit h-fit">
                <Link href="/">
                    <Image
                        src={`${sitePath.sitepath}/images/logo.png`}
                        alt="scamazon"
                        width={250}
                        height={63}
                        className="block dark:hidden"
                    />
                    <Image
                        src={`${sitePath.sitepath}/images/logo-dark.png`}
                        alt="scamazon"
                        width={250}
                        height={63}
                        className="hidden dark:block"
                    />
                </Link>
                <p>{`${sitePath.sitepath}`}</p>
            </div>

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
        </div>
    );
}
