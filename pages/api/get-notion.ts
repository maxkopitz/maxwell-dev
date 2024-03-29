import { type NextRequest } from "next/server";
import { getPosts } from "lib/notion";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  try {
    const response = await getPosts();

    const scheme = response.scheme;
    const items = response.items;
    return new Response(
      JSON.stringify({
        scheme,
        items,
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
          "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error,
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
          "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      }
    );
  }
}
