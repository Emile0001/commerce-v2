"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@/components/ui/input";

/**
 * NavSearch
 *
 * Debounced search input that writes `search` into the URL query params.
 * Because it starts from `searchParams`, it preserves existing params (like `layout`).
 */
function NavSearch() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    // Controlled value initialised from URL
    const [search, setSearch] = useState(
        searchParams.get("search")?.toString() || "",
    );

    /**
     * Debounced URL writer:
     * - clones existing query params so we don't drop `layout`
     * - writes `search` only when meaningful
     */
    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);

        const q = value.trim();

        if (q) {
            params.set("search", q);
        } else {
            params.delete("search");
        }

        replace(`/products?${params.toString()}`);
    }, 300);

    /**
     * Keep input in sync when URL changes externally (e.g. back/forward)
     */
    useEffect(() => {
        const urlSearch = searchParams.get("search")?.toString() || "";
        if (urlSearch !== search) setSearch(urlSearch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    return (
        <Input
            type="search"
            placeholder="search product..."
            className="max-w-xs dark:bg-muted "
            onChange={(e) => {
                const value = e.target.value;
                setSearch(value);
                handleSearch(value);
            }}
            value={search}
        />
    );
}

export default NavSearch;
