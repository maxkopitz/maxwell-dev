import { NextPage } from "next";
import { NotionReadingItem } from "lib/types";
import BookBadge from "./icons/BookBadge";

/*
 * TODO: I want to add more information
 */
const NotionBook: NextPage<{ item: NotionReadingItem }> = ({ item }) => {
  const start = new Date(item.data.start_date);
  const end = new Date(item.data.end_date);
  const timeToRead =
    Math.abs(end.getTime() - start.getTime()) / (1000 * 3600 * 24);
  return (
    <div className="bg-white dark:bg-gray-900 border mb-4 border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full">
      <div className="">
        <BookBadge itemType={item.data.status} disabled />
        <h1 className="text-black dark:text-white text-lg font-bold">
          {item.data.name}
        </h1>
      </div>
      <h2 className="text-black dark:text-white">{item.data.author}</h2>
      {item.data.status === "COMPLETED" && (
        <div className="text-gray-800 dark:text-gray-400">
          <p>Took me {timeToRead} days to read</p>
          <p>
            {start.toDateString()} to {end.toDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default NotionBook;
