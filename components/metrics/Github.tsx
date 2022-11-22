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
  console.log(stars);
  console.log(forks);
  return (
    <>
      <MetricCard
        header="GitHub Stars"
        link={link}
        metric={stars}
        isCurrency={false}
      />
      <MetricCard
        header="GitHub Forks"
        link={link}
        metric={forks}
        isCurrency={false}
      />
    </>
  );
};

export default Github;
