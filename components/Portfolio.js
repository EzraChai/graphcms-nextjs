
import Link from "next/link";

export const Portfolio = ({portfolio}) => {
  console.log(portfolio);
  return <div>
    <Link href={`/portfolios/${portfolio.slug}`}>
      {portfolio.title}
    </Link>
  </div>;
};
