import React from "react";
import Image from "next/image";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

interface MainNewsProps {
  news: NewsItem[];
}

const MainNews = ({ news }: MainNewsProps) => {
    // Array destructuring with safety check
    const [fristNews, ...otherNews] = news || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {/* Main news card (Left side taking 2 columns on large screens) */}
      <div className="card bg-base-100 w-full shadow-md border border-gray-100 rounded-xl overflow-hidden lg:col-span-2">
        <figure className="relative w-full h-[280px]">
          <Image
            src={fristNews?.imageUrl ? fristNews.imageUrl.replace("{width}", "640") : "/placeholder.jpg"}
            alt={fristNews?.imageAlt || "news"}
            fill
            className="object-cover"
          />
        </figure>
        <div className="card-body flex gap-3 p-6">
          {fristNews?.category && (
            <span className="text-red-600 font-bold text-sm uppercase tracking-wide">{fristNews.category}</span>
          )}
          <h2 className="card-title text-2xl font-bold hover:text-primary transition-colors cursor-pointer">
            {fristNews?.title || "Card Title"}
          </h2>
          <p className="text-gray-600 line-clamp-3">
            {fristNews?.description || "A card component has a figure, a body part..."}
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      {/* Other news list (Right side taking 1 column) */}
      <div className="flex flex-col gap-4">
        {otherNews?.slice(0, 4).map((on) => (
          <div 
            className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-md transition-shadow py-4 px-5 rounded-xl" 
            key={on.id}
          >
            <div className="card-body p-0 gap-1.5">
              {on?.category && (
                <span className="text-red-600 font-semibold text-xs uppercase">{on.category}</span>
              )}
              <h2 className="card-title text-base font-semibold leading-snug hover:text-primary transition-colors cursor-pointer">
                {on?.title || "Card Title"}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2">
                {on?.description || "A card component has a figure, a body part..."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;