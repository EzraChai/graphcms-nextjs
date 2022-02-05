import Link from "next/link";

export const Post = ({post}) => {
  console.log(post);
    return <Link href={`/posts/${post.slug}`} passHref>
  <div className="card border  rounded-lg cursor-pointer overflow-hidden">
      <div className="p-4">
        <div className="title text-2xl font-semibold">
          {post.title}
        </div>
      <p className="text-md text-zinc-700 line-clamp-3">
        {post.description}
      </p>
      </div>
    </div>
  </Link>
};
