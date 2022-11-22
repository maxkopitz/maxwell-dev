import { NextPage } from "next";
import Container from "components/ui/Container";
import TopTracks from "components/metrics/TopTrack";
import GitHub from "components/metrics/Github";
import ExternalLink from "components/ui/ExternalLink";

const Dashboard: NextPage = () => {
  return (
    <Container title="Maxwell Kopitz - Dashboard" description="My dashboard">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, inspired by{" "}
            <ExternalLink href="https://leerob.io/dashboard">
              Lee Rob
            </ExternalLink>
            . I will be adding more things I want to track about my self and
            show.
          </p>
        </div>
        {/* TODO: I want to make these into tabs, top tracks, github repos, github stars
          */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <GitHub />
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <TopTracks />
      </div>
    </Container>
  );
};

export default Dashboard;
