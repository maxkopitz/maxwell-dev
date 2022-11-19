import { type NextRequest } from 'next/server';
import { getPosts } from 'lib/notion';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler(req: NextRequest) {
  const response = await getPosts(); 

  const results = response.results;
  return new Response(
    JSON.stringify({
      results
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    }
  );
}
