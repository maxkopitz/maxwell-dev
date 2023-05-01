import Track from "components/metrics/Track";
import { TopSongs } from "lib/types";
import fetcher from "lib/fetcher";
import useSWR from "swr";

import { LoadingSpinner } from "components/ui/LoadingSpinner";

const TopTracks = () => {
  const { data } = useSWR<TopSongs>("/api/top-tracks", fetcher);

  return (
    <>
      {!data?.tracks && <LoadingSpinner />}

      {data?.tracks.map((track) => (
        <Track key={track.songUrl} {...track} />
      ))}
    </>
  );
};

export default TopTracks;
