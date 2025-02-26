import PropTypes from "prop-types";

const TechCard = ({ src, alt }) => {
  return (
    <div className="p-12 border border-gray-200 items-center justify-center rounded-2xl">
      <div>
        <img className="w-30 h-30" src={src} alt={alt} />
      </div>
    </div>
  );
};

TechCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default TechCard;
