import { GithubRepoList } from "lib/types";
import fetcher from "lib/fetcher";
import useSWR from "swr";
import GithubRepo from "components/ui/GithubRepo";
import Container from "components/ui/Container";
import { LoadingSpinner } from "components/ui/LoadingSpinner";

const GithubStared: React.FC = () => {
  const { data } = useSWR<GithubRepoList>("/api/stared-repos", fetcher);

  return (
    <Container
      title="Maxwell Kopitz - Github Stared"
      description="Feed of my recently stared github repos"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Stared Github Repositories
        </h1>
        {!data?.repositories && (
          <div role="status">
            <LoadingSpinner />
          </div>
        )}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          {data?.repositories.map((repo) => (
            <GithubRepo key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default GithubStared;
