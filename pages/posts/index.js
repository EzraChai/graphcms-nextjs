import Head from "next/head";
import { getPosts } from "../../lib/data";
import { Post } from "../../components/Post";

const Posts = ({data}) => {
  return <div>
      <Head>
          <title>Posts</title>
      </Head>

          <div className="my-10">
          <div className="max-w-[1200px] mx-auto">
              <div className="mt-4 Blogs text-5xl font-semibold py-4">Posts.</div>
              {/* <hr /> */}
            <div className="mt-10">
                {data?.posts.map((post,index) => (
                <Post post={post} key={index}/>
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