
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
      <div className="text-md mt-1 text-zinc-700 line-clamp-3">
        {portfolio.description}
      </div>
      </div>
    </div>
  </Link>

};
