import { Main } from 'next/document';
import Marquee from '../components/Marquee';
import MainNews from '@/components/MainNews';
export default async function Home() {
  const res = await fetch("https://news-api-fs.vercel.app/api/v2/news/sections")
  const data = await res.json()
  const sections = data.data
  const mainNews= sections[0].articles

  return (
    <div>
<Marquee/>
<div className="grid grid-cols-3 max-w-7xl mx-auto ">
  {/*news section */}
<div className=" col-span-2 ">
  <MainNews news={mainNews}/>
</div>
{/*most read section */}
<div className="bg-green-500 col-span-1 " ></div>
</div>
    </div>
  );
}