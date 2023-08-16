import useSWR from "swr";
import NotionBook from "components/NotionBook";
import Container from "components/ui/Container";
import fetcher from "lib/fetcher";
import { NotionDatabase, NotionReadingItem } from "lib/types";
import { NextPage } from "next";
import { LoadingSpinner } from "components/ui/LoadingSpinner";
import BookBadge from "components/icons/BookBadge";
import { useState } from "react";

/* TODO: Make a pagination, multiple results on different pages, sort by, search, filter
 */
const filterTypes = ["READING", "COMPLETED", "Not Started"];

const Reading: NextPage = () => {
  const { data } = useSWR<NotionDatabase>("/api/get-database", fetcher);
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilterClick = (value: string) => {
    setFilters( prevFilters => {
      if (prevFilters.includes(value)) {
        return prevFilters.filter((item) => item !== value);
      }
      return [...prevFilters, value];
    });
  }

  const isFilterEnabled = (value: string) => {
    return filters.includes(value) || filters.length === 0;
  }

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
        <div className="mb-8">
          {filterTypes.map((value, id) => {
            return <BookBadge key={id} handleClick={() => handleFilterClick(value)} itemType={value} filterEnabled={isFilterEnabled(value)} />
          })}
        </div>
        {/* TODO CENTER */}
        {!data?.items && <LoadingSpinner />}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          {data?.items &&
            data?.items.map((item: NotionReadingItem) => {
              if (filters.length === 0 || filters.includes(item.data.status)) {
                return <NotionBook key={item.id} item={item} />
              }
            })}
        </div>
      </div>
    </Container>
  );
};

export default Reading;
