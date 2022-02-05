import Link from "next/link";

export const Header = () => {
  return <div>
      <header className="">
          <div className="max-w-[1200px] mx-auto py-6 flex justify-between items-center">
              <Link href={"/"} passHref>
                <h1 className="text-3xl uppercase font-extrabold text-red-600 cursor-pointer">
                    Portfolio.
                </h1>
              </Link>
              
              <div className="flex">
                <div className=" ml-4">
                    <Link href={"/posts"} passHref>
                        <div className='font-semibold tracking-wider transition cursor-pointer hover:text-red-600 '>Posts</div>
                    </Link>
                </div>
                <div className="ml-4">
                    <Link href={"/portfolios"} passHref>
                        <div className='font-semibold tracking-wider transition cursor-pointer  hover:text-red-600 '>Portfolios</div>
                    </Link>
                </div>
              </div>
          </div>
          <hr />
      </header>
  </div>;
};
