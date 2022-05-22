import {getAuthor,getAuthorsPost} from "../../lib/data"
import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"
import {Galleries} from "../../components/Galleries"
import {Post} from "../../components/Post"

const Author = ({author,images,posts}) => {

    
    return (
    <div className="max-w-7xl mx-auto">
        <div className="flex mt-5 py-5 justify-center items-center">
            <div className="max-w-[10rem] border rounded-full overflow-hidden">
                <Image src={author.image.url} width={author.image.width} height={author.image.height} alt={author.name}></Image>
            </div>
            
            <div className="px-10">
                <div className="text text-gray-900 font-bold text-4xl">
                    {author.name}
                </div>
                <div className="name text-2xl hover:underline font-bold">
                </div>
                <div className="flex text-lg justify-between w-1/2">
                    <div className="">{posts.posts.length} posts</div>
                    <div className="">{images?.length || 0} photos</div>
                </div>
                <div className="bio mt-4 text-gray-700">{author.biography}</div>
            </div>
        </div>
        <div className="Gallery mt-20">
            {images && <Galleries galleries={images}></Galleries>}
        </div>
        <div className="Post py-32">
            {posts.posts.map((post, index) => (
                <Post key={index} post={post}></Post>
            ))}
        </div>
    </div>
    )

 
}

export default Author;

const getBlurredImage = async (galleries) => {
  return await Promise.all(
    galleries.map(async image => {
      const {base64, img} = await getPlaiceholder(image.url, {size: 10});
      return {
        ...img,
        base64,
        id: image.id,
      }
    })
  )
}

export const getServerSideProps = async ({params}) => {
    const {author} = await getAuthor(params.slug);
    let images = null;
    if(author.authorGalleries[0]){
        images = await getBlurredImage(author.authorGalleries[0].image);
        author.authorGalleries[0].image = null;
    }
    const posts = await getAuthorsPost(params.slug);

    return {
        props: {
            author,
            images,
            posts
        }
    }
}