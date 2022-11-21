// TODO: make these actually use env
const GITHUB_REPO = `https://api.github.com/repos/maxkopitz/maxwell-dev`;

export const getRepoInfo = async () => {
  const response = await fetch(GITHUB_REPO, {
    method: "GET",
  });

  return response.json();
};
