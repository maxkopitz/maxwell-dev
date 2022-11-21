import { NextPage } from "next";

import Track from "components/metrics/Track";
import { TopTracks } from "lib/types";
import fetcher from "lib/fetcher";
import useSWR from "swr";

const TopTracks: NextPage = () => {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);
  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
};

export default TopTracks;
