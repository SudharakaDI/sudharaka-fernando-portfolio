import React from "react";
import ExperienceCardItem from "./ExperienceCardItem.jsx";
import PropTypes from "prop-types";

const ExperienceCard = ({ title, employer, duration, projects }) => {
  return (
    <div className="pb-4 w-full lg:w-3/4">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex justify-between w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <div className="flex flex-col">
            <h5 className="mt-2">{employer}</h5>
            <h5 className="mt-2">{duration}</h5>
          </div>
        </div>

        <div className="mt-4">
          {projects.map((item, i) => (
            <div key={i} className="pb-8">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="mt-4">
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                  {item.tasks.map((task, id) => (
                    <ExperienceCardItem key={id} task={task} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  employer: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  projects: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ExperienceCard;
