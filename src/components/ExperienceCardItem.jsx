import PropTypes from "prop-types";

const ExperienceCardItem = ({ task }) => {
  return (
    <div>
      <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg
          className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
        <span>{task}</span>
      </li>
    </div>
  );
};

ExperienceCardItem.propTypes = {
  task: PropTypes.string.isRequired,
};
export default ExperienceCardItem;
