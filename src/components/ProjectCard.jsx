import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ name, description, techStack, imageDetails }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-md h-150 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg h-2/5 w-full"
          src={imageDetails.src}
          alt={imageDetails.alt}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
          {showMore ? description : description.substring(0, 400)}
        </p>
        <div className="flex flex-wrap gap-1 items-center justify-center">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="mr-2 mt-1 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  imageDetails: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export default ProjectCard;
