import { Client, isFullDatabase } from "@notionhq/client";
import { type } from "os";
const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

const processDatabase = (database) => {
  const notionDatabase = { scheme: "test", items: [] };
  database.results.forEach((result) => {
    const properties = result.properties;
    console.log(properties);
    const row = {
      id: result.id,
      data: {
        name: properties.Name.title[0].plain_text,
        author: properties.Author.rich_text[0].plain_text,
        status: properties.Status.multi_select[0].name,
        start_date: properties.Start.date?.start,
        end_date: properties.End.date?.start,
      },
    };
    notionDatabase.items.push(row);
  });
  return notionDatabase;
};
export async function getPosts() {
  const response = await notion.databases.query({
    database_id: "c0dedacf53ca41abbc1c37150c42fe63",
  });
  return processDatabase(response);
}
