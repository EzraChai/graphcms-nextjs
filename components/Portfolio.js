
import Link from "next/link";
import Image from "next/image";

export const Portfolio = ({portfolio}) => {
  return <Link href={`/portfolios/${portfolio.slug}`} passHref>
  <div className="card shadow-lg hover:shadow-md transition-all rounded-lg cursor-pointer overflow-hidden">
      <div className="relative">
        <div className="absolute bg-black w-full h-full z-[1] opacity-0 transition-opacity hover:opacity-30"></div>
          <Image layout="responsive" src={portfolio.coverImage.url} width={portfolio.coverImage.width} height={portfolio.coverImage.height} alt={portfolio.title}></Image>
        </div>
      <div className="p-4">
        <div className="title text-2xl font-bold">
          {portfolio.title}
        </div>
        <div className="tags flex items-center mt-1">
          {portfolio.tags.map((tag, index) => (
            <div key={index} className="bg-red-600 text-white px-2 py-1 font-bold uppercase text-[0.65rem] tracking-wide rounded-md mr-2 mb-4 hover:bg-zinc-800 transition">{tag}</div>
          ))}
        </div>
      <div className="text-md mt-1 text-zinc-700 line-clamp-3">
        {portfolio.description}
      </div>
      </div>
    </div>
  </Link>

};
