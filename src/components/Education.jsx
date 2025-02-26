import { EDUCATION } from "../constants/index.js";

const Education = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div className="lg:px-40">
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="grid xl:flex mb-8 justify-center items-center gap-2 mb-6 lg:gap-6"
          >
            <div className="w-120 h-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                B. Sc. Eng (Hons) in Computer Engineering
              </h5>
              <h5 className="text-center">Faculty of Engineering</h5>
              <h5 className="text-center">University of Sri Jayewardenepura</h5>
              <h5 className="text-center">Sri Lanka</h5>

              <div className="bg-amber-50 w-full h-0.25" />
              <div className="flex flex-col gap-2 mt-2 ">
                <div className="bg-black text-white text-center rounded-2xl p-2">
                  GPA 3.60/4
                </div>
                <div className="bg-black text-white text-center rounded-2xl p-2">
                  Deans List 2020- 1st Year 1st Semester
                </div>
                <div className="bg-black text-white text-center rounded-2xl p-2">
                  Deans List 2024- 4th Year 1st Semester
                </div>
              </div>
            </div>

            <div className="w-120 h-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                G.C.E.(A/L & O/L)
              </h5>
              <h5 className="text-center">Royal Central College</h5>
              <h5 className="text-center">Polonnaruwa</h5>
              <h5 className="text-center">Sri Lanka</h5>
              <h5 className="text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>

              <div className="bg-amber-50 w-full h-0.25" />
              <div className="flex flex-col gap-2 mt-2 ">
                <div className="bg-black text-white text-center rounded-2xl p-2">
                  A/L : Mathematics A | Physics B | Chemistry B
                </div>
                <div className="bg-black text-white text-center rounded-2xl p-2">
                  O/L : District First ( Result - 9A )
                </div>
                <div className="bg-black text-white text-center rounded-2xl p-2">
                  Senior Prefect of the school
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
