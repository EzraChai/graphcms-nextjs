import { getPortfolio } from "../../lib/data";
import Image from "next/image";
import he from "he"
import showdown from "showdown";


const Portfolio = ({portfolio,content}) => {

    let converter = new showdown.Converter()

  return (<div className="max-w-[1200px] mt-4 mx-auto mb-40 px-10">
      <div className="rounded-lg relative overflow-hidden shadow-lg">
          <div className="w-[100%] relative">
                <div className="absolute bg-black w-full h-full z-[1] opacity-50"></div>
              <Image layout="responsive" src={portfolio.coverImage.url} height={portfolio.coverImage.height} width={portfolio.coverImage.width} alt={`${portfolio.title}'s image`}></Image>
          </div>
          <div className="z-[2] absolute text-white inset-y-1/3 text-7xl font-extrabold w-full flex flex-col items-center">
                    <div className="tracking-wide">
                        {portfolio.title}
                    </div>
                    <div className="tags flex items-center mt-4">
          {portfolio.tags.map((tag, index) => (
            <div key={index} className="bg-red-600 text-white px-2 py-1 font-bold uppercase text-xs rounded-md mr-2 mb-4 hover:bg-zinc-800 transition">{tag}</div>
          ))}
        </div>
            </div>
          <div className="p-10">
            <div className="text-lg text-zinc-700 pb-2">
                - {portfolio.description}
            </div>
              <div className="text-2xl underline font-bold pt-4">Content</div>
            <div className="prose pt-1 pb-4 prose-xl prose-img:rounded-xl prose-headings:font-bold prose-headings:text-red-600 prose-a:text-red-600" dangerouslySetInnerHTML={{__html: converter.makeHtml(content)}}/>
          </div>
        
      </div>
  </div>);
};

export default Portfolio;

export const getServerSideProps = async ({params}) => {
    const { portfolio } = await  getPortfolio(params.slug)

    return {
        props: {
            portfolio,
            content: he.decode(portfolio.content)
        }
    }
}