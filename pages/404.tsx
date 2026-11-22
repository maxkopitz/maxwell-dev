import Link from "next/link";
import Container from "components/ui/Container";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <Container title="404 - Maxwell Kopitz" description="Page not found">
      <h1 className="font-bold text-3xl md:text-5xl mb-4 text-black dark:text-white">
        404 – Unavailable
      </h1>
      <Link
        href="/"
        className="inline-block px-4 py-2 font-bold bg-gray-200 dark:bg-gray-800 rounded-md text-black dark:text-white"
      >
        Return Home
      </Link>
    </Container>
  );
};

export default NotFound;
