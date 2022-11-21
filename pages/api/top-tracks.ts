import { type NextRequest } from "next/server";
import { getTopTracks } from "lib/spotify";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const response = await getTopTracks();
  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ responseState: response.status }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }
  const data = await response.json();

  const tracks = data.items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return new Response(JSON.stringify({ tracks }), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
