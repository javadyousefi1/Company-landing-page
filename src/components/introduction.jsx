import introduction from "../image/introduction.png";
import arrow from "../image/arrow.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="container flex justify-center px-4 max-w-7xl md:mt-10"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="flex flex-col mt-5 lg:flex-row">
          <div className="px-4 md:px-0">
            <h1 className="text-4xl text-center font-bold lg:w-[50%] md:text-center md:text-3xl lg:text-4xl lg:text-left">
              Let’s take a tour to
              <strong className="text-orange-500">Blockchain</strong> Technology
            </h1>
            <div className="lg:w-[50%] w-[100%]">
              <p className="text-xs font-medium text-center px-5 mt-6 text-[#5B5B5B] md:text-lg lg:text-lg lg:text-left  md:text-center md:p-0 ">
                We are highly focused by blockchain technology that will lead
                positively to the future web.
              </p>
            </div>

            <div className="items-center justify-start hidden mt-10 md:flex">
              <div className="w-[90%] flex gap-x-3 md:justify-center  lg:justify-start ">
                <button className="bg-orange-500 rounded-lg text-sm py-3 px-5 text-white flex items-center gap-x-3 lg:w-[150px] font-bold">
                  <span>Get Started</span>
                  <img alt="arrow" src={arrow} className="w-[8px]" />
                </button>
                <button className="border-orange-500 border rounded-lg text-sm py-3 px-5 text-slate-800 lg:w-[150px]  font-bold ">
                  <span>Learn more</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5 md:m-0">
            <img
              src={introduction}
              alt="introduction"
              className="p-2 w-[400px] md:w-[500px]"
            />
          </div>

          <div className="flex items-center justify-center mt-8 md:hidden">
            <div className="w-[90%] flex gap-x-3">
              <button className="bg-orange-500 rounded-lg text-sm py-3 px-5 text-white flex items-center gap-x-3 w-[50%] font-bold">
                <span>Get Started</span>
                <img alt="arrow" src={arrow} className="w-[8px]" />
              </button>
              <button className="border-orange-500 border rounded-lg text-sm py-3 px-5 text-slate-800  w-[50%]  font-bold ">
                <span>Learn more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
