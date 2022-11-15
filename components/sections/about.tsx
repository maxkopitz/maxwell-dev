import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="container h-screen">
        <h3 className="text-1xl text-green-400">Hi, my name is</h3>
        <h1 className="text-6xl text-bold text-cyan-400">Maxwell Kopitz.</h1>
        <h1 className="text-6xl text-bold text-cyan-700">I build things.</h1>
        <h3 className="text-2xl text-gray-400">I&apos;m currently a junior at the University of <span className="text-[#FFCB05]">Michigan</span> studying Computer Science. My areas of interest include
          web development, </h3>
        <div className="mt-24">
          <Link href="https://maxwell-dev.s3.us-east-2.amazonaws.com/Kopitz_Maxwell_Resume.pdf" target="_blank" className="border-solid border-2 border-green-500 hover:bg-green-700 text-white text-xl font-bold invisible md:visible py-3 px-2 rounded focus:outline-none focus:shadow-outline">
            Check out my resume!
          </Link>
      </div>
    </div>
  );
}
export default About;
