import { type NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const github_username = process.env.GITHUB_USERNAME;

export default async function handler(req: NextRequest) {
  const userResponse = await fetch(
    `https://api.github.com/users/${github_username}`
  );
  const userReposResponse = await fetch(
    `https://api.github.com/users/${github_username}/repos?per_page=100`
  );

  const repositories = await userReposResponse.json();

  const mine = repositories.filter((repo) => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository["stargazers_count"];
  }, 0);
  const forks = mine.reduce((accumulator, repository) => {
    return accumulator + repository["forks_count"];
  }, 0);
  return new Response(
    JSON.stringify({
      forks,
      stars,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
      },
    }
  );
}
