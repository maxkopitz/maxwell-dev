import { NextPage } from "next";
import { NotionReadingItem } from "lib/types";
import Badge from "components/ui/Badge";

/* TODO: I want to add more information
 */
const NotionBook = ({ item }) => {
  let badge;
  let date;
  switch (item.data.status) {
    case "COMPLETED":
      badge = <Badge title="Read" className="bg-green-800 text-green-100" />
      const start = new Date(item.data.start_date);
      const end = new Date(item.data.end_date);
      date = {
        timeToRead:
          Math.abs(end.getTime() - start.getTime()) / (1000 * 3600 * 24),
        start,
        end,
      };
      break;
    case "READING":
      badge = <Badge title="Reading" className="bg-red-800 text-red-100" />
      break;
    case "Not Started":
      badge = <Badge title="Want to Read" className="bg-blue-800 text-blue-100" />
      break;
  }
  return (
    <div className="bg-white dark:bg-gray-900 border mb-4 border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full">
      <div className="">
        {badge}
        <h1 className="text-black dark:text-white text-lg font-bold">
          {item.data.name}
        </h1>
      </div>
      <h2 className="text-black dark:text-white">{item.data.author}</h2>
      {date && (
        <div className="text-gray-800 dark:text-gray-400">
          <p>Took me {date.timeToRead} days to read</p>
          <p>
            {date.start.toDateString()} to {date.end.toDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default NotionBook;
