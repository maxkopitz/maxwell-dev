import classNames from "classnames";
import { FunctionComponent } from "react";

interface BookBadgeProps {
  itemType: string;
  handleClick?: () => void;
  disabled?: boolean;
  filterEnabled?: boolean;
}
const BookBadge: FunctionComponent<BookBadgeProps> = ({
  itemType,
  handleClick = null,
  disabled = false,
  filterEnabled = true,
}) => {
  const classes = classNames(
    "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded",
    {
      "bg-green-800 text-green-100": itemType === "COMPLETED" && filterEnabled,
    },
    { "bg-red-800 text-red-100": itemType === "READING" && filterEnabled },
    {
      "bg-blue-800 text-blue-100": itemType === "Not Started" && filterEnabled,
    },
    { "bg-gray-400 text-gray-200": !filterEnabled }
  );
  switch (itemType) {
    case "COMPLETED":
      return (
        <button onClick={handleClick} className={classes} disabled={disabled}>
          Read
        </button>
      );
    case "READING":
      return (
        <button onClick={handleClick} className={classes} disabled={disabled}>
          Reading
        </button>
      );
    case "Not Started":
      return (
        <button onClick={handleClick} className={classes} disabled={disabled}>
          Want to Read
        </button>
      );
    default:
      return (
        <button className="bg-blue-800 text-blue-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          Null
        </button>
      );
  }
};

export default BookBadge;
