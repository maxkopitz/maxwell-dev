import { type NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};
import { getUserRepos } from "lib/github";

export default async function handler(req: NextRequest) {
  const userRepos = await getUserRepos();

  const mine = userRepos.filter((repo) => !repo.fork);
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
