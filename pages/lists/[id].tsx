import Container from "components/ui/Container";

export default function PostPage() {
  return (
    <Container
      title="Maxwell Kopitz - Reading List"
      description="Reading"
    ></Container>
  );
}

// export async function getStaticPaths() {
//   const paths = await sanityClient.fetch(postSlugsQuery);
//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: 'blocking'
//   };
// }
//
// export async function getStaticProps({ params, preview = false }) {
//
//   if (!post) {
//     return { notFound: true };
//   }
//   return {
//     props: {
//         tweets,
//         readingTime
//       }
//     }
//   };
// }
