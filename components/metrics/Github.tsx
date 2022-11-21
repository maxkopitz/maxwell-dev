import { NextPage } from "next";
import useSWR from "swr";

import fetcher from "lib/fetcher";
import { GitHub } from "lib/types";
import MetricCard from "components/ui/MetricCard";

const Github: NextPage = () => {
  const { data } = useSWR<GitHub>("/api/github-metrics", fetcher);

  const stars = new Number(data?.stars);
  const follwers = new Number(data?.stars);
  const link = "https://github.com/maxkopitz";

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
        metric={stars}
        isCurrency={false}
      />
    </>
  );
};

export default Github;
