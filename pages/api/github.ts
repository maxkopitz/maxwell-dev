import { type NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler() {
  const repoResponse = await fetch('https://api.github.com/users/maxkopitz/maxwell-dev', {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  });
  const repo = await repoResponse.json();


  return new Response(
    JSON.stringify({
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url, 
      description: repo.description,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
      }
    }
  );
}
