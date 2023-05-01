import { NextPage } from "next";
import useSWR from "swr";

import fetcher from "lib/fetcher";
import { GitHub } from "lib/types";
import MetricCard from "components/ui/MetricCard";

const Github: NextPage = () => {
  const { data } = useSWR<GitHub>("/api/github-metrics", fetcher);

  const stars = new Number(data?.stars);
  const forks = new Number(data?.forks);
  const link = "https://github.com/maxkopitz";

  const metrics = [
    {
      name: "Stars",
      value: stars,
      isCurrency: false,
    },
    {
      name: "Forks",
      value: forks,
      isCurrency: false,
    },
  ];
  return (
    <>
      <MetricCard header="GitHub Profile" link={link} metrics={metrics} />
    </>
  );
};

export default Github;
