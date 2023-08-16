import { getPosts } from "lib/notion";

export default async function handler(req, res) {
  const response = await getPosts();

  const scheme = response.scheme;
  const items = response.items;
  res.status(200).json({
    scheme,
    items,
  });
}
