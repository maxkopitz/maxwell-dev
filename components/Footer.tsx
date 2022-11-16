import Link from 'next/link'
import { useState, useEffect } from 'react'
import NowPlaying from './features/NowPlaying';

interface Provider {
  stars: Number;
  forks: Number;
}

const Footer: React.FC = () => {
  const [githubInfo, setGitHubInfo] = useState<Provider>({ stars: -1, forks: -1 });

  /*
   * TODO: Move into own component
   */
  useEffect(() => {
    fetch('https://api.github.com/repos/maxkopitz/maxwell-dev')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo((provider: Provider) => {
          return {
            stars: stargazers_count,
            forks: forks_count,
          }
        });
      })
      .catch(e => console.error(e));

  }, []);

  return (
    <footer className="text-center mt-12 mb-4">
      <NowPlaying />
      <a href="https://github.com/maxkopitz/maxwell-dev">
        <p className="text-gray-900">Built by Maxwell Kopitz</p>
        {githubInfo.stars > -1 && githubInfo.forks > -1 &&
          <div>
            <span> ⭐ {githubInfo.stars.toString()} - 🍴 {githubInfo.forks.toString()}</span>
          </div>}
      </a>
    </footer >
  )
};

export default Footer;
