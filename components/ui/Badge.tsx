const Badge = ({ title, className}) => {
  return (
    <span className={`${className} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>
      {title}
    </span>
  );
}

export default Badge;
