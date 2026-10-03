import React from "react";
import Link from "next/link";

interface Naves {
  slug: string;
  title: string;
  url?: string;
  scrapeble?: boolean;
}

const NavLinks = async () => {
  // Fetch category data from the API endpoint
  const res = await fetch("https://news-api-fs.vercel.app/api/v2/categories");
  const data = await res.json();

  // Safely ensure we are working with an array
  const categoriesArray: Naves[] = Array.isArray(data) 
    ? data 
    : (data.categories || data.data || data.results || []);

  // List of titles you want to manually remove/exclude
  const unwantedTitles = ["মূলপাতা", "সর্বাধিক পঠিত", "Home", "মূল পাতা"];

  // Filter out the unwanted titles manually
  const filterNaves = categoriesArray.filter((n) => {
    // If the category title matches any unwanted title, exclude it
    if (unwantedTitles.includes(n.title)) return false;
    return true;
  });

  return (
    // Navigation container centered horizontally
    <nav className="flex flex-row items-center justify-center gap-6 overflow-x-auto py-3 px-4">
      
      {/* Static Home Link */}
      <Link href={"/"} className="whitespace-nowrap hover:text-blue-600 transition-colors">
        হোম
      </Link>

      {/* Dynamic API Links excluding the unwanted ones */}
      {filterNaves.map((n, i) => (
        <Link 
          key={i} 
          href={`/${n.slug || ''}`} 
          className="whitespace-nowrap hover:text-blue-600 transition-colors"
        >
          {n.title}
        </Link>
      ))}
      
    </nav>
  );
};

export default NavLinks;