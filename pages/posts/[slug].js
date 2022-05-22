import { getPost } from "../../lib/data";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link"
import he from "he"
import showdown from "showdown";

const Post = ({post,content}) => {

    const d = new Date(post.date)

    let converter = new showdown.Converter()

  return (<div className="max-w-[1200px] mx-auto py-10">
    <Head>
      <title>{post.title}</title>
    </Head>
      <div className="">
        <div className="text-6xl py-4 font-extrabold">
          {post.title}
        </div>
        <div className="tags flex items-center">
          {post.tags.map((tag, index) => (
            <div key={index} className="bg-red-600 text-white px-2 py-1 font-bold uppercase text-xs rounded-md mr-2 mb-4 hover:bg-zinc-800 transition">{tag}</div>
          ))}
        </div>
        <div className="text-lg pb-4 text-zinc-600 mb-20">
            {post.description}
        </div>
        <div className="relative flex justify-between">
          <div className="prose py-4 prose-xl prose-img:rounded-xl prose-headings:font-bold prose-headings:text-red-600 prose-a:text-red-600" dangerouslySetInnerHTML={{__html: converter.makeHtml(content)}}/>
          <div className="">
            <div className="absolute right-0 bottom-0 text-zinc-500 mb-2 text-sm">
              {`written in ${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`}
            </div>
            <div className=" border-l-2 flex flex-col items-center mb-20">
                <div className="text-center text-xl mt-10 font-semibold uppercase">Hi, I&apos;m {post.author.name}</div>
                    <div className="max-w-[14rem] py-5">
                      <Image className="rounded-full" src={post.author.image.url} width={post.author.image.width} height={post.author.image.height} alt={post.author.name}></Image>
                    </div>
                    <div className="w-[90%] mb-12">
                      <div className="text-zinc-700 font-xs tracking-normal">
                        {post.author.biography}
                      </div>
                    </div>
                  </div>
              </div>
        </div>
      </div>
      
      
      <hr />
    <div className="flex py-5 items-center">
      <div className="max-w-[10rem]">
        <Image className="rounded-full" src={post.author.image.url} width={post.author.image.width} height={post.author.image.height} alt={post.author.name}></Image>
      </div>
      <div className="px-10">
        <div className="name text-2xl hover:underline font-bold">
          <Link href={`/authors/${post.author.slug}`}>{post.author.name}</Link>
        </div>
        <div className="bio mt-2 text-gray-600">{post.author.biography}</div>
      </div>
    </div>
      <hr />
  </div>);
};

export default Post;

export const getServerSideProps = async ({params}) => {
    const { post } = await getPost(params.slug)

    return {
        props: {
            post,
            content: await he.decode(post.content)
        }
    }
}