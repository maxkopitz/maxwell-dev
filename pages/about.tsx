import Container from "components/ui/Container";
import { NextPage } from "next";

const skills = ['TypeScript', 'JavaScript', 'React', 'NextJS', 'Node.js', 'Python', 'Postgres', 'AWS'];

const About: NextPage = () => {
  return (
    <Container title="Maxwell Kopitz - About" description="My about page">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="grid grid-cols-2">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            About Me
          </h1>
          <hr className="w-full border-1 border-slate-400 dark:border-slate-900 mb-6" />
        </div>


        <p className="text-gray-300 mb-6">Hi! I&apos;m max. I love building. My journey started back in 2016 when I learned Java to create
          Minecraft plugins. Since then I have had a passion for building applications.</p>
        <h3 className="text-gray-400 text-l font-bold mb-2">Languages and Tools I&apos;ve Worked With</h3>
        <ul className="grid grid-cols-2 gap-4 text-blue-400 mb-4">
          {skills && skills.map((skill, i) => <li key={i}><span className="text-green-200">▹</span> {skill}</li>)}
        </ul>
        <h2 className="text-white font-bold">Experience</h2>
      </div>
    </Container>
  );
};

export default About;
