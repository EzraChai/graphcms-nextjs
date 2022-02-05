import { getPortfolio } from "../../lib/data";
import Image from "next/image";


const Portfolio = ({portfolio}) => {
    console.log(portfolio);
  return (<div>
      <div className="">
          <Image src={portfolio.coverImage.url} height={portfolio.coverImage.height} width={portfolio.coverImage.width} alt={`${portfolio.title}'s image`}></Image>
        <div className="text-5xl font-extrabold">
          {portfolio.title}
        </div>
        <div className="text-lg">
            {portfolio.description}
        </div>
      </div>
  </div>);
};

export default Portfolio;

export const getServerSideProps = async ({params}) => {
    const { portfolio } = await  getPortfolio(params.slug)

    return {
        props: {
            portfolio
        }
    }
}