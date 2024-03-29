import { useEffect, useState } from "react";
import { GithubRepo } from "lib/types";
import { NextPage } from "next";

const RepoStatus: NextPage = () => {
  // TODO: Switch to swr
  const [githubInfo, setGitHubInfo] = useState<GithubRepo>({
    id: "",
    name: "",
    stars: 0,
    forks: 0,
    url: "",
    description: "",
  });
  useEffect(() => {
    fetch("https://api.github.com/repos/maxkopitz/maxwell-dev")
      .then((response) => response.json())
      .then((json) => {
        const {
          stargazers_count,
          forks_count,
          html_url,
          description,
          name,
          id,
        } = json;
        setGitHubInfo(() => {
          return {
            stars: stargazers_count,
            forks: forks_count,
            url: html_url,
            description: description,
            name,
            id,
          };
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="text-center text-gray-800 dark:text-gray-300 mb-10">
      {githubInfo && (
        <a href={githubInfo.url}>
          <p>Built by Maxwell Kopitz</p>
          <div className="hover:text-gray-500">
            <span>
              {githubInfo.stars.toString()} stars -{" "}
              {githubInfo.forks.toString()} forks
            </span>
          </div>
        </a>
      )}
    </div>
  );
};

export default RepoStatus;
