const github_url = process.env.GITHUB_USER;
const portfolio_repO = process.env.PORTFOLIO_REPO;

// TODO: make these actually use env
const GITHUB_REPO = `https://api.github.com/repos/maxkopitz/maxwell-dev`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getRepoInfo = async () => {
  const response = await fetch(GITHUB_REPO, {
    method: 'GET',
  });

  return response.json();
};
