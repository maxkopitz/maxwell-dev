type Props = {
  company: string;
  position: string;
  date: string;
  highlights: string[];
};

/*    <div className="metric-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full"> */
const ExperienceCard: React.FC<Props> = (props) => {
  const { company, position, date, highlights } = props;
  return (
    <div className="metric-card bg-white dark:bg-gray-900 border rounded-lg dark:border-gray-800 mb-6 w-full p-2">
      <h1 className="text-slate-800 dark:text-slate-200 text-xl font-semibold">
        {position} @{" "}
        <span className="text-indigo-900 dark:text-indigo-300">{company}</span>
      </h1>
      <h3 className="text-slate-700 dark:text-slate-300 text-md">{date}</h3>
      <div className="pl-2">
        {highlights.map((highlight, key) => (
          <p key={key} className="text-md text-slate-900 dark:text-slate-300">
            <span className="pr-1 text-green-900 text-lg dark:text-green-200">
              ▹
            </span>{" "}
            {highlight}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
