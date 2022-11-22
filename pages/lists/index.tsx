import Container from "components/ui/Container";
import { NextPage } from "next";
import ListCard from "components/ui/ListCard";
const Lists: NextPage = () => {
  return (
    <Container
      title="Maxwell Kopitz - Lists"
      description="My lists, reading, movives ect"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Lists
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A collection of lists that relate to me, be that my reading list,
            movie list ect. Most of these are linked to notion pages.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <ListCard header="My Reading List" link="reading" />
          <ListCard header="My Move List" link="movies" />
        </div>
      </div>
    </Container>
  );
};

export default Lists;
