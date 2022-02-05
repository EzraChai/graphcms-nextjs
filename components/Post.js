import Link from "next/link";

export const Post = ({post}) => {
  console.log(post);
  return <div>
    <Link href={`/posts/${post.slug}`}>
      {post.title}
    </Link>
  </div>;
};
