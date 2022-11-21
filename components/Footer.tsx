import Link from "next/link";
import NowPlaying from "components/features/NowPlaying";
import RepoStatus from "./features/RepoStatus";
import { NextPage } from "next";

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

const Footer: NextPage = () => {
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
            <Link
              href="/lists"
              className="text-gray-500 hover:text-gray-600 transition"
            >
             Lists 
            </Link>
 
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href="https://www.linkedin.com/in/maxkopitz/">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://github.com/maxkopitz">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://twitter.com/maxkopitz">
              Twitter
            </ExternalLink>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              href="/snippets"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Snippets
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      <RepoStatus />
    </footer>
  );
};

export default Footer;
