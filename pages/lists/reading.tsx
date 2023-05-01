import useSWR from "swr";
import NotionBook from "components/NotionBook";
import Container from "components/ui/Container";
import fetcher from "lib/fetcher";
import { NotionDatabase, NotionReadingItem } from "lib/types";
import { NextPage } from "next";
import { LoadingSpinner } from "components/ui/LoadingSpinner";

/* TODO: Make a pagination, multiple results on different pages, sort by, search, filter
 */
const Reading: NextPage = () => {
  const { data } = useSWR<NotionDatabase>("/api/get-database", fetcher);
  return (
    <Container title="Maxwell - Reading List" description="Reading list">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Reading List
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my reading list, I started tracking december 2021 what I was
            reading on Notion. I try and keep an update-to-date record.
          </p>
        </div>
        {/* TODO CENTER */}
        {!data?.items && (
          <div role="status">
            <LoadingSpinner />
          </div>
        )}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          {data?.items &&
            data?.items.map((item: NotionReadingItem) => (
              <NotionBook key={item.id} item={item} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Reading;
