// TODO: make these actually use env
const github_user = process.env.GITHUB_USERNAME;
const github_portfolio_repo = process.env.PORTFOLIO_REPO;

const API_GITHUB_REPO = `https://api.github.com/repos/${github_user}/${github_portfolio_repo}`;
const API_GITHUB_STARED_REPOS = `https://api.github.com/users/${github_user}/starred?per_page=20`;
const API_GITHUB_USER_INFO = `https://api.github.com/users/${github_user}`;
const API_GITHUB_USER_REPOS = `https://api.github.com/users/${github_user}/repos?per_page=100`;

export const getRepoInfo = async () => {
  const response = await fetch(API_GITHUB_REPO);

  return response.json();
};

export const getUserStaredRepos = async () => {
  const response = await fetch(API_GITHUB_STARED_REPOS);

  return response.json();
};

export const getUser = async () => {
  const response = await fetch(API_GITHUB_USER_INFO);
  return response.json();
};

export const getUserRepos = async () => {
  const response = await fetch(API_GITHUB_USER_REPOS);
  return response.json();
};
