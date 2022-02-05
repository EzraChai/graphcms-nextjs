import Head from "next/head";
import { Post } from "../../components/Post";
import { getPosts } from "../../lib/data";

const Posts = ({data}) => {
  return <div>
      <Head>
          <title>Posts</title>
      </Head>

          <div className="my-20">
          <div className="max-w-[1200px] mx-auto">
              <div className="mt-4 Blogs text-5xl font-semibold py-4">Posts.</div>
            <div className=" columns-3">
                {data?.posts.map((post,index) => (
                <Post key={index} post={post}/>
                ))}
            </div>
          </div>
          
        </div>
  </div>;
};

export default Posts

export const getServerSideProps = async (ctx) => {
    const data = await getPosts()// your fetch function here 

    return {
        props: {
            data
        }
    }
}