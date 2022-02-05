
import Link from "next/link";
import Image from "next/image";

export const Portfolio = ({portfolio}) => {
  return <Link href={`/portfolios/${portfolio.slug}`} passHref>
  <div className="card border  rounded-lg cursor-pointer overflow-hidden">
      <div className="">
          <Image src={portfolio.coverImage.url} width={portfolio.coverImage.width} height={portfolio.coverImage.height} alt={portfolio.title}></Image>
        </div>
      <div className="p-4">
        <div className="title text-2xl font-semibold">
          {portfolio.title}
        </div>
      <div className="text-md text-zinc-700 line-clamp-3">
        {portfolio.description}
      </div>
      </div>
    </div>
  </Link>

};
