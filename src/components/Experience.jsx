import ExperienceCard from "./ExperienceCard.jsx";

const experienceCards = [
  {
    jobTitle: "Associate Software Engineer",
    employer: "Vizuamatix (Pvt) Ltd.",
    duration: "Aug 2023 - Dec 2024",
    projects: [
      {
        title: "FRMS - Risk Calculation Process",
        tasks: [
          "Designed and developed the database (Postgres) architecture and service logic for dynamic Risk ratio calculation process",
          "Added separate normalized tables to handle complex and simple ratios, integrated Nashorn Engine for expression evaluation in Java",
          "System was able to handle recursively defined advanced financial ratios in IFRS 9 and produce 100% accurate outputs for tested financial ratios",
        ],
      },
      {
        title: "FRMS - Service Logic Optimization",
        tasks: [
          "Optimized service layer logic to handle multiple database-intensive API requests",
          "Examined the service logic and reduced iterative database calls using Java Maps and optimized the data processing using Java Streams",
          "The most resource-intensive service logic was optimized by 38% and overall system efficiency increased by 30%",
        ],
      },
      {
        title: "ECL - User Management",
        tasks: [
          "Developed the User Management module handling user authentication and authorization",
          "Used Microsoft Entra ID to handle roles and permissions and integrated with JWT in the backend",
          "Developed the frontend, handling the permissions returned for the logged-in user",
        ],
      },
    ],
  },
  {
    jobTitle: "Software Engineer Intern",
    employer: "Vizuamatix (Pvt) Ltd.",
    duration: "Feb 2023 - Aug 2023",
    projects: [
      {
        title: "ECL - Dynamic Loan Table",
        tasks: [
          "Developed the loan table with flexible filtration ability with search and sort adding for each table header",
          "Designed the frontend table integrating custom CSS to Vuetify library table and designed a dynamic query function in the backend to generate the SQL query according to the passed parameters from frontend",
          "All combined searching and sorting scenarios could be handled from this single endpoint",
        ],
      },
    ],
  },
  {
    jobTitle: "Freelance Software Developer",
    employer: "Self-Employed",
    duration: "Jan 2021 - Present",
    projects: [
      {
        title: "Freelance Development",
        tasks: [
          "Developed backend services in Microservice architecture, enhancing scalability and performance of distributed systems",
          "Built responsive web applications with React and Next.js, and mobile apps using Android Studio with Java and Kotlin, as well as cross-platform solutions using Flutter",
          "Implemented projects in Python and C++, including machine learning and computer vision applications",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="pb-4 justify-center">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div className="flex flex-wrap items-center justify-center">
        {experienceCards.map((item, i) => (
          <ExperienceCard
            key={i}
            title={item.jobTitle}
            employer={item.employer}
            duration={item.duration}
            projects={item.projects}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
