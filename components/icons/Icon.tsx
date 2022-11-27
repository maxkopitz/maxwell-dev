import { StarIcon } from "components/icons/StarIcon";
import { CrossIcon } from "./CrossIcon";

const Icon = ({ name }) => {
  switch (name) {
    case 'Star':
      return <StarIcon />
    case 'Cross': 
      return <CrossIcon />
    default:
      return <h1>Error</h1>;
  }
}

export default Icon;
