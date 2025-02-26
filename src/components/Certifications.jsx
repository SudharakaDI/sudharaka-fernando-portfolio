import CertificationCard from "./CertificationCard.jsx";

const certificationDetails = [
  {
    id: 1,
    name: "AWS Educate Introduction to Cloud 101",
    platform: "AWS Educate",
    imageDetails: {
      src: "/src/assets/aws-educate-badge.png",
      alt: "AWS",
    },
  },
  {
    id: 2,
    name: " Software Architecture Foundations",
    platform: "Linkedin Learn",
    imageDetails: {
      src: "/src/assets/architecture-certificate.png",
      alt: "software architecture",
    },
  },
  {
    id: 3,
    name: "Learning Docker",
    platform: "Linkedin Learn",
    imageDetails: {
      src: "/src/assets/docker-certificate.png",
      alt: "AWS",
    },
  },
];

const Certifications = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Certifications</h2>
      <div className="flex flex-wrap justify-items-center gap-6 justify-center">
        {certificationDetails.map((item) => (
          <CertificationCard
            key={item.id}
            name={item.name}
            platform={item.platform}
            imageDetails={item.imageDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
