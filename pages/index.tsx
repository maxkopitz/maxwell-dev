import Container from "components/ui/Container";
import { NextPage } from "next";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container title="Maxwell Kopitz - Home" description="My home page">
      <div className="flex flex-row justify-center items-start mx-auto max-w-2xl pb-16">
        <div className="grow">
          <div className="container h-screen">
            <h3 className="text-1xl text-rose-600 dark:text-rose-100">
              Hi, my name is
            </h3>
            <h1 className="text-6xl text-bold text-cyan-800">
              Maxwell Kopitz.
            </h1>
            <h1 className="text-6xl text-bold text-cyan-700 mb-2 dark:text-cyan-300">
              I build things.
            </h1>

            <h3 className="text-2xl text-gray-800 dark:text-gray-400">
              I&apos;m a senior at the{" "}
              <span className="font-bold bg-[#00274C] text-[#FFCB05]">
                University of Michigan
              </span>{" "}
              studying Computer Science.
            </h3>

            <div className="mt-24">
              <Link
                href="https://maxwell-dev.s3.us-east-2.amazonaws.com/Kopitz_Maxwell_Resume.pdf"
                target="_blank"
                className="transition duration-150 ease-in-out border-solid border-2 border-slate-600 dark:border-green-500 hover:shadow-2xl text-slate-400 dark:text-white text-xl font-bold invisible md:visible py-3 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Check out my resume!
              </Link>
            </div>
          </div>

          <div className="h-fit mb-20 max-w-8xl w-full flex flex-col items-center mt-5">
            <h2 className="text-4xl text-center text-gray-800 font-bold w-full mb-5">
              Whats next?
            </h2>
            <Link
              href="mailto:maxkopitz02@gmail.com"
              className="transition duration-150 ease-in-out hover:shadow-2xl bg-green-500 text-white text-xl font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Say hi
            </Link>
          </div>
        </div>
        <div className="w-16 h-screen text-white sticky top-0">
          <div className="absolute text-center inset-x-0 bottom-64 rotate-90">
            <h1>maxkopitz02@gmail.com</h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
