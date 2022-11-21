import Container from "components/ui/Container";
import { getPosts } from "lib/notion";
import { NextPage } from "next";
//
// export async function getServerSideProps() {
//   // Get the posts
//   const { results } = await getPosts();
//   // Return the result
//   return {
//     props: {
//       posts: results,
//     },
//   };
// }

interface Props {
  posts: any[];
}

const Lists: NextPage = () => {
  return (
    <Container title="Maxwell Kopitz - Snippets" description="TODO">
      <div className="container h-screen">
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16"></div>
      </div>
    </Container>
  );
};

export default Lists;
