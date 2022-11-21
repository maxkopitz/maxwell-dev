import { Client } from "@notionhq/client";
const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: "c0dedacf53ca41abbc1c37150c42fe63",
  });
  return response;
}
