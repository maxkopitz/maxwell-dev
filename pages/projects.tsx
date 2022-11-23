import Container from "components/ui/Container";
import { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <Container title="Maxwell Kopitz - About" description="My about page">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
      </div>
    </Container>
  );
};

export default Projects;
