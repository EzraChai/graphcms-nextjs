import {getGalleries} from "../../lib/data"
import {Galleries} from "../../components/Galleries"
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";

const getBlurredImage = async (galleries) => {
  return await Promise.all(
    galleries.map(async image => {
      const {base64, img} = await getPlaiceholder(image.photo.url, {size: 10});
      return {
        ...img,
        base64,
        id: image.id,
        description: image.description,
        date: image.date,
        title: image.title,
      }
    })
  )
}

export default function Gallery({images}) {
  
  return <div>
          <Head>
            <title>Gallery.</title>
          </Head>
          <div className="my-10">
            <div className="max-w-[1200px] mx-auto">
              <Galleries galleries={images}></Galleries>
            </div>
          </div>
  </div>;
};

export const getServerSideProps = async (ctx) => {
    const {galleries} = await getGalleries();
    const images = await getBlurredImage(galleries);

    return {
        props: {
            images
        }
    }
}
