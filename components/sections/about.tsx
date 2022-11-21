import Link from "next/link";

// TODO: Font color in lightmode
const About: React.FC = () => {
  return (
    <div className="container h-screen">
      <h3 className="text-1xl text-green-600 dark:text-green-400">
        Hi, my name is
      </h3>
      <h1 className="text-6xl text-bold text-cyan-400">Maxwell Kopitz.</h1>
      <h1 className="text-6xl text-bold text-cyan-700">I build things.</h1>

      <h3 className="text-2xl text-gray-600 dark:text-gray-400">
        I&apos;m currently a junior at the{" "}
        <span className="text-[#FFCB05]">University of Michigan</span> studying
        Computer Science
      </h3>

      <div className="mt-24">
        <Link
          href="https://maxwell-dev.s3.us-east-2.amazonaws.com/Kopitz_Maxwell_Resume.pdf"
          target="_blank"
          className=" transition duration-150 ease-in-out border-solid border-2 border-slate-600 dark:border-green-500 hover:shadow-2xl text-slate-400 dark:text-white text-xl font-bold invisible md:visible py-3 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Check out my resume!
        </Link>
      </div>
    </div>
  );
};
export default About;
