import profilePic from "../assets/sudharaka-fernando.jpg";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="pb-2">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-2/5 lg:p-1 mt-10">
          <div className="flex justify-center lg:justify-start">
            <img
              src={profilePic}
              alt="Sudharaka Fernando"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>

        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center  mt-10 ml-3">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-7xl">
              Sudharaka Fernando
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Software Engineer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-justify">
              {HERO_CONTENT}
            </p>
            <a
              href="/Sudharaka-Fernando-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              {" "}
              Download Resume{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
