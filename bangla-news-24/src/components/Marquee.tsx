import React from "react";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headline {
  id: string;
  title: string;
  url: string;
  scrapeble: boolean;
}

const Marquee = async () => {
  // Fixed the duplicate limit typo in the URL
  const res = await fetch("https://news-api-fs.vercel.app/api/v2/news?limit=10");
  const data = await res.json();
  const headlines: Headline[] = data.data;
  console.log(headlines); // Log the fetched data to the console for debugging

  return (
    <div className="bg-blue-600  text-white">
        <div className="flex max-w-7xl mx-auto "> 
        <div className = "bg-blue-700  px-6 py-1  font-bold"> সর্বশেষ</div>
        <MarqueeText className="py-1"
         direction="right">
      {headlines.map(h=><span key={h.id} className="flex items-center">
        <span>  
            {h.title}
        </span>
        <span className = "mx-5">󠁯•󠁏</span>
      </span>)}
</MarqueeText>
    </div> 
    </div>
  );
};

// Don't forget to export it as default!
export default Marquee;