import Link from 'next/link'
import { useState, useEffect } from 'react'
import NowPlaying from 'components/features/NowPlaying';

import useSWR from 'swr';
import fetcher from 'lib/fetcher';

import { GithubRepo } from 'lib/types'


const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const { data } = useSWR<GithubRepo>('/api/github', fetcher);

  /*
   * TODO: Move into own component
   */
  // useEffect(() => {
  //   fetch('https://api.github.com/repos/maxkopitz/maxwell-dev')
  //     .then(response => response.json())
  //     .then(json => {
  //       const { stargazers_count, forks_count, html_url, description } = json;
  //       setGitHubInfo(() => {
  //         return {
  //           stars: stargazers_count,
  //           forks: forks_count,
  //           url: html_url,
  //           description: description,
  //         }
  //       });
  //     })
  //     .catch(e => console.error(e));
  //
  // }, []);
  //
  return (<h1>hi</h1>)
  return (
    <footer>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <NowPlaying />
        <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              About
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href="https://www.linkedin.com/in/maxkopitz/">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://github.com/maxkopitz">GitHub</ExternalLink>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              href="/snippets"
              className="text-gray-400 hover:text-gray-600 transition"
            >
              Snippets
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-400 hover:text-gray-600 transition"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mb-10">
        <a href={data.url}>
          <p className="text-gray-900">Built by Maxwell Kopitz</p>
          <div>
            <span> ⭐ {data.stars.toString()} - 🍴 {data.forks.toString()}</span>
          </div>
        </a>
      </div>
    </footer>
  )
};

export default Footer;
