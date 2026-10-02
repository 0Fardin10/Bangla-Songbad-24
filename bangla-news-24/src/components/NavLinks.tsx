import React from "react";
import Link from "next/link";

interface Naves {
    slug: string;
    title: string;
    url?: string;
    scrapeble?: boolean;
}

const NavLinks = async () => {
  let navs: Naves[] = [];

  try {
    const res = await fetch("https://news-api-fs.vercel.app/api/v2/categories", {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      navs = data?.data || data || [];
    }
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }

  // "মূলপাতা" ebong "সর্বাধিক পঠিত" filter kore bad dewa holo
  const filteredNavs = navs.filter(
    (n) => n.title !== "মূলপাতা" && n.title !== "সর্বাধিক পঠিত"
  );

  return (
    <div className="flex gap-2 sm:gap-6 justify-center items-center py-2.5 px-4 bg-white border-t border-gray-200 overflow-x-auto shadow-sm">
      {/* Home Button/Link added at the beginning */}
      <Link
        href="/"
        className="text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-2xs"
      >
        হোম
      </Link>

      {/* Divider line for modern design */}
      <div className="h-4 w-[1px] bg-gray-300"></div>

      {/* API fetched category links */}
      {filteredNavs.length > 0 ? (
        filteredNavs.map((n: Naves, i: number) => (
          <Link
            key={i}
            href={`/category/${n.slug}`}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-all duration-200 whitespace-nowrap"
          >
            {n.title}
          </Link>
        ))
      ) : (
        <span className="text-sm text-gray-400">লোড হচ্ছে...</span>
      )}
    </div>
  );
};

export default NavLinks;