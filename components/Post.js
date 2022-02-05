import Link from "next/link";

export const Post = ({post}) => {
    return (
                <div className="mb-10" >
                    <Link href={`/posts/${post.slug}`} passHref>
                      <div className="flex cursor-pointer justify-between">
                            <div className="text-5xl font-bold">{post.title}</div>
                        <div className="">{new Date(post.date).toDateString()}</div>
                      </div>
                    </Link>
                    <div className="flex mt-2">{post.tags.map((tag,index) => (
                        <div key={index} className="bg-red-600 text-white px-2 py-1 font-bold uppercase text-xs rounded-md mr-2 mb-4 hover:bg-zinc-800 transition">{tag}</div>
                    ))}</div>
                    <Link href={`/posts/${post.slug}`} passHref>
                        <div className="text-lg text-zinc-700 cursor-pointer">{post.description}</div>
                    </Link>
                    <div className="flex">
                        <div className="underline rounded-3xl mt-4 py-1 font-bold uppercase text-xs mb-4">{post.author.name}</div>
                    </div>
                    <hr />
                </div>
                )
};
