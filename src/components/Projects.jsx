import ProjectCard from "./ProjectCard.jsx";

const projectDetails = [
  {
    id: 1,
    name: "Mushroom Analyzer",
    description:
      "Mushroom analyzer is an web application developed for mushroom\n" +
      "              farmers to handle their operations. It provides the interface to\n" +
      "              mange their pot stocks, daily mushroom production, operational and\n" +
      "              capital expenses,income and also it gives the chance to manage and\n" +
      "              oversee their profits.",
    techStack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "JPA",
      "MySQL",
      "React",
      "Material UI",
    ],
    imageDetails: {
      src: "/mushroom.jpg",
      alt: "mushroom image",
    },
  },
  {
    id: 2,
    name: "Aero Express",
    description:
      " AeroExpress project is a distributed microservice project designed to handle high traffic volumes for air\n" +
      "line operations, enabling users to book and view tickets, check flight schedules, and manage reservations\n" +
      " with ease. ",
    techStack: [
      "Java",
      "Spring Boot",
      "React",
      "JWT",
      "Axios",
      "TanStack",
      "Hibernate",
      "JPA",
      "Microservices",
    ],
    imageDetails: {
      src: "/src/assets/AeroExpress.png",
      alt: "aeroExpress",
    },
  },
  {
    id: 3,
    name: "Visualink",
    description:
      "This application is designed to help deaf people understand weather news with visual aid. The application\n" +
      " has mainly three visual interfaces. Sign language avatar showing the Sinhala sign language interpretation,\n" +
      " weather map which summarizes the weather news and AI generated video according to the weather news.",
    techStack: [
      "Python",
      "PyQt5",
      "NLTK",
      "Generative AI",
      "Stable Diffusion",
      "Tkinter",
    ],
    imageDetails: {
      src: "/src/assets/Visualink.png",
      alt: "visualink image",
    },
  },
  {
    id: 4,
    name: "El-Care",
    description:
      "This application is designed to help deaf people understand weather news with visual aid. The application\n" +
      " has mainly three visual interfaces. Sign language avatar showing the Sinhala sign language interpretation,\n" +
      " weather map which summarizes the weather news and AI generated video according to the weather news.",
    techStack: ["Dart", "Flutter", "Firebase", "SQLite"],
    imageDetails: {
      src: "/src/assets/elcare.jpg",
      alt: "elcare image",
    },
  },
];

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap justify-items-center gap-6 justify-center">
        {projectDetails.map((item) => (
          <ProjectCard
            key={item.id}
            name={item.name}
            description={item.description}
            techStack={item.techStack}
            imageDetails={item.imageDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
