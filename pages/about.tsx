import Container from "components/ui/Container";
import { NextPage } from "next";

const About: NextPage = () => {
  const skills = ['JavaScript', 'C++ (11 & 17)', 'React', 'NextJS', 'Node.js', 'Python', 'Postgres', 'AWS'];
  return (
    <Container title="Maxwell Kopitz - About" description="My about page">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <p>Hi! I&apos;m max. I love building. My journey started back in 2014 when I learned Java to create
          Minecraft plugins.</p>
          <ul className="grid grid-cols-2 text-yellow-400">
            {skills && skills.map((skill, i) => <li key={i}>▹{skill}</li>)}
          </ul>

      </div>
    </Container>
  );
};

export default About;
