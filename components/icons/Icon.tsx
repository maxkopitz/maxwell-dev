import { StarIcon } from "components/icons/StarIcon";
import { CrossIcon } from "./CrossIcon";
import { SpinnerIcon } from "./SpinnerIcon";

const Icon = ({ name }) => {
  switch (name) {
    case "Star":
      return <StarIcon />;
    case "Cross":
      return <CrossIcon />;
    case "Spinner":
      return <SpinnerIcon />;
    default:
      return <h1>Error</h1>;
  }
};

export default Icon;
