import Container from "components/ui/Container";
import { NextPage } from "next";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container title="Maxwell Kopitz - Home" description="My home page">
      <div className="mx-auto max-w-2xl pb-16">
        <h3 className="text-1xl text-black dark:text-white">Hi, my name is</h3>
        <h1 className="text-6xl text-bold text-cyan-800">Maxwell Kopitz.</h1>
        <h1 className="text-6xl text-bold text-cyan-700 mb-2 dark:text-cyan-300">
          I build things.
        </h1>
        <h3 className="text-2xl text-gray-800 dark:text-gray-400">
          I&apos;m a senior at the{" "}
          <span className="font-bold bg-[#00274C] text-[#FFCB05] p-1">
            University of Michigan
          </span>{" "}
          studying Computer Science.
        </h3>

        <div className="mt-24">
          <Link
            href="https://maxwell-dev.s3.us-east-2.amazonaws.com/Kopitz_Maxwell_Resume.pdf"
            target="_blank"
            className="transition duration-150 ease-in-out border-solid border-2 border-slate-600 dark:border-green-500 hover:shadow-2xl text-slate-600 dark:text-white text-xl font-bold invisible md:visible py-3 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Check out my resume!
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Home;
