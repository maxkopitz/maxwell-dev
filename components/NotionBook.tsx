import { NextPage } from "next";
import { NotionReadingItem } from "lib/types";

const NotionBook: NextPage<{ item: NotionReadingItem }> = ({ item }) => {
  let badge;
  switch (item.data.status) {
    case "COMPLETED":
      badge = (
        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-400 dark:text-green-800">
          Finished
        </span>
      );
      break;
    case "READING":
      badge = (
        <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-400 dark:text-red-800">
          Reading
        </span>
      );
      break;
    case "Not Started":
      badge = (
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-400 dark:text-blue-800">
          Not started
        </span>
      );
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
      <h1 className="text-black dark:text-white">
        {item.data.author} - {item.data?.start_date} to {item.data?.end_date}
      </h1>
    </div>
  );
};

export default NotionBook;
