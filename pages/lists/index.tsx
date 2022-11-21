import Container from 'components/ui/Container';
import { getPosts } from 'lib/notion';
import { NextPage } from 'next';

export async function getServerSideProps() {
  // Get the posts
  const { results } = await getPosts();
  // Return the result
  return {
    props: {
      posts: results,

    }
  }
}

interface Props {
  posts: any[]
}

const Lists: NextPage<Props> = ({ posts }) => {
  return (
    <Container title="Maxwell Kopitz - Snippets">
      <div className="container h-screen">
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          {
            posts.map((item, index) => {
              return (
                <div key={index}>
                  <h1 className="text-white">{item.properties.author}</h1>

                </div>
              )
            })}
        </div>
      </div>
    </Container>
  )
}

export default Lists;
