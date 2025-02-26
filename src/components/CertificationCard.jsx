import PropTypes from "prop-types";

const CertificationCard = ({ name, platform, imageDetails }) => {
  return (
    <div className="max-w-md h-120 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img
          className="rounded-t-lg h-80 w-full"
          src={imageDetails.src}
          alt={imageDetails.alt}
        />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {name}
          </h5>
          <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white text-center">
            From {platform}
          </h5>
        </div>
      </div>
    </div>
  );
};

CertificationCard.propTypes = {
  name: PropTypes.string,
  platform: PropTypes.string,
  imageDetails: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export default CertificationCard;
