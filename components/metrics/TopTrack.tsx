import { NextPage } from "next";

import Track from "components/metrics/Track";
import { TopTracks } from "lib/types";
import fetcher from "lib/fetcher";
import useSWR from "swr";

import { LoadingSpinner } from "components/ui/LoadingSpinner";

const TopTracks: NextPage = () => {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  return (
    <>
      {!data?.tracks && (
        <div role="status">
          <LoadingSpinner />
        </div>
      )}

      {data?.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
};

export default TopTracks;
