
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import blog1 from "../image/blog1.png";
import blog2 from "../image/blog2.png";
import blog3 from "../image/blog3.png";

const CurrentProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container px-4 mt-10 max-w-7xl md:mt-16 ">
        <h1
          data-aos="fade-up"
          data-aos-once="true"
          className="mt-4 text-4xl font-bold text-center text-slate-800"
        >
          Current Projects
        </h1>

        <div className="flex flex-col items-center mt-10 gap-y-8 md:flex-row md:gap-x-10 lg:gap-x-24 md:justify-between">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className=" rounded-lg bg-white flex flex-col shadow-lg w-[300px]"
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={blog1}
                alt="blog1"
                className="w-[100%] rounded-tr-lg rounded-tl-lg"
              />
            </div>
            <div className="px-4 py-3">
              <h3 className="mb-1 text-lg font-bold text-slate-800">
                Certified Great Expectations Lover
              </h3>
              <p className="mb-4 text-sm text-justify text-gray-400">
                Certified Great Expectations Lover - To add value to
              </p>
              <span className="pt-10 mt-10 font-bold text-orange-500">
                Read More...
              </span>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className=" rounded-lg bg-white flex flex-col shadow-lg w-[300px]"
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={blog2}
                alt="blog2"
                className="w-[100%] rounded-tr-lg rounded-tl-lg"
              />
            </div>
            <div className="px-4 py-3">
              <h3 className="mb-1 text-lg font-bold text-slate-800">
                BlockSpace - A solar System very good
              </h3>
              <p className="mb-4 text-sm text-justify text-gray-400">
                BlockSpace - We built the first ever accurate model of
              </p>
              <span className="pt-10 mt-10 font-bold text-orange-500">
                Read More...
              </span>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className=" rounded-lg bg-white flex flex-col shadow-lg w-[300px]"
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={blog3}
                alt="blog3"
                className="w-[100%] rounded-tr-lg rounded-tl-lg"
              />
            </div>
            <div className="px-4 py-3">
              <h3 className="mb-1 text-lg font-bold text-slate-800">
                0xProxy - A web 3.0 Website - published
              </h3>
              <p className="mb-4 text-sm text-justify text-gray-400">
                BlockSpace - This project was a collaborative exercise.
              </p>
              <span className="pt-10 mt-10 font-bold text-orange-500">
                Read More...
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentProjects;
