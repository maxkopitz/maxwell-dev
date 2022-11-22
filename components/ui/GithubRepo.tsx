import { NextPage } from "next";

const GithubRepo: NextPage<any> = ({ repo }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border mb-4 border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full">
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center text-gray-900 dark:text-gray-100">
          <h1 className="text-black dark:text-white text-lg font-bold">
            {repo.name}
          </h1>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
        <h1 className="text-black dark:text-white">{repo.description}</h1>
      </a>
    </div>
  );
};

export default GithubRepo;
