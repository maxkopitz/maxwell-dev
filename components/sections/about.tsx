const About: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="container rounded-md h-3/6 w-4/6 mx-auto mt-60">
        <div className="p-10">
          <h3 className="text-1xl text-green-400">Hi, my name is</h3>
          <h1 className="text-6xl text-bold text-cyan-400">Maxwell Kopitz.</h1>
          <h1 className="text-6xl text-bold text-cyan-700">I build things.</h1>
          <h3 className="text-2xl text-gray-400">I&apos;m currently a junior at the University of <span className="text-[#FFCB05]">Michigan</span> studying Computer Science. My areas of interest include
          web development, </h3>
          <button className="bg-green-500 shadow-md">Check out my resume!</button>
        </div>
      </div>
    </div>
  );
}
export default About;
