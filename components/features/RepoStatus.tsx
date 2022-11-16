import { useEffect, useState } from "react";
import { GithubRepo } from 'lib/types'

const RepoStatus: React.FC = () => {
  const [githubInfo, setGitHubInfo] = useState<GithubRepo>({stars: 0, forks: 0, url: '', description: ''});
  useEffect(() => {
    fetch('https://api.github.com/repos/maxkopitz/maxwell-dev')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count, html_url, description } = json;
        setGitHubInfo(() => {
          return {
            stars: stargazers_count,
            forks: forks_count,
            url: html_url,
            description: description,
          }
        });
      })
      .catch(e => console.error(e));

  }, []);


  return (
    <div className="text-center text-gray-300 mb-10">
      {githubInfo &&
        <a href={githubInfo.url} >
          <p >Built by Maxwell Kopitz</p>
          <div className="hover:text-gray-500">
            <span> {githubInfo.stars.toString()} stars - {githubInfo.forks.toString()} forks</span>
          </div>
        </a>
      }
    </div>
  )
};

export default RepoStatus;
