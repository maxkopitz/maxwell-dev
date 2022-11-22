import { type NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};
import { getUserStaredRepos } from "lib/github";
export default async function handler(req: NextRequest) {
  const startedRepositories = await getUserStaredRepos();

  const repoList = [];
  startedRepositories.forEach((repo) => {
    const name = repo.full_name;
    const description = repo.description;
    const stars = repo.stargazers_count;
    const url = repo.html_url;
    const id = repo.id;
    repoList.push({
      id,
      name,
      description,
      stars,
      url,
    });
  });

  return new Response(
    JSON.stringify({
      repositories: repoList,
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
