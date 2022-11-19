import Container from 'components/Container';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { getPosts } from 'lib/notion';
import { NextPage } from 'next';
import fetcher from 'lib/fetcher';

type Response = {
  results: any;
}
export async function getServerSideProps() {
  // Get the posts
  let { results } = await getPosts();
  // Return the result
  return {
    props: {
      posts: results,

    }
  }
};

interface Props {
    posts: [any]
}

const Lists: NextPage<Props> = (props) => {
  const { data } = useSWR<Response>('/api/get-database', fetcher);
  useEffect(() => {
    console.log(props);

  }, [props]);

  return (
    <Container title="Maxwell Kopitz - Snippets">

      <div className="container h-screen">
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="text-white">hi</h1>
          {data && data.results && data.results.forEach((item) => {
            <h1>item.properties.author</h1>
          })}
        </div>
      </div>
    </Container>
  )
}

export default Lists;
