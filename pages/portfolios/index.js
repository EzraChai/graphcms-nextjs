import Head from "next/head";
import { getPortfolios } from "../../lib/data";
import { Portfolio } from "../../components/Portfolio";

const Portfolios = ({data}) => {
    console.log(data);
  return <div>
      <Head>
          <title>Portfolios</title>
      </Head>
          <div className="my-10">
          <div className="max-w-[1200px] mx-auto">
              <div className="mt-4 Blogs text-5xl font-semibold py-4">Portfolio.</div>
              {/* <hr /> */}
            <div className="mt-10 columns-3">
                {data?.portfolios.map((portfolio,index) => (
                <Portfolio portfolio={portfolio} key={index}/>
                ))}
            </div>
          </div>
        </div>
  </div>;
};

export default Portfolios

export const getServerSideProps = async (ctx) => {
    const data = await getPortfolios()// your fetch function here 

    return {
        props: {
            data
        }
    }
}