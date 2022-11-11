import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Provider {
  stars: Number;
  forks: Number;
}

const Footer: React.FC = () => {
  const [githubInfo, setGitHubInfo] = useState<Provider>({ stars: -1, forks: -1 });

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
        console.log(json);
      })
      .catch(e => console.error(e));

  }, []);
  return (
    <footer className="text-center mt-12 mb-4">
      <a href="https://github.com/maxkopitz/maxwell-dev">
        <p>Built by Maxwell Kopitz</p>
        <p>Made with ♥️  in Ann Arbor</p>
        {githubInfo.stars > -1 && githubInfo.forks > -1 &&
          <div>
            <span> ⭐ {githubInfo.stars.toString()} - 🍴 {githubInfo.forks.toString()}</span>
          </div>}
      </a>
    </footer >
  )
};

export default Footer;
