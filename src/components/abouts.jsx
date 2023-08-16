import aboutus from "../image/aboutus.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container flex justify-center px-4 max-w-7xl md:mt-14 md:my-12">
        <div className="flex flex-col mt-5 lg:flex-row">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="px-4 md:px-0 md:w-[100%] lg:w-[70%]"
          >
            <h1 className="text-4xl text-center font-bold lg:w-[50%] md:text-center md:text-3xl lg:text-4xl lg:text-left">
              About Us
            </h1>
            <div className="lg:w-[90%] w-[100%] flex items-center justify-center">
              <p className="text-xs font-medium text-center px-5 mt-6 text-[#5B5B5B] md:text-lg lg:text-lg lg:text-left  md:text-center md:p-0 ">
                We generated names based on a multitude of factors and picked
                the one that resonated with us the most. Our founder first
                engaged with the blockchain in 2013
              </p>
            </div>

            <div className="items-center hidden mt-10 lg:block">
              <div className="">
                <div className="flex flex-col lg:flex-row justify-between items-center  p-2 rounded-md lg:w-[80%]">
                  <div className="flex items-center gap-x-2 ">
                    <div className="p-3 bg-[#faccba] bg-opacity-25 rounded-lg text-[#FF6600] font-bold">
                      600 +
                    </div>
                    <span className="text-[#5B5B5B] font-semibold w-[120px]">
                      Project Done
                    </span>
                  </div>

                  <div className="bg-[#FF6600] h-[2px] w-[80%] my-4 lg:hidden"></div>

                  <div className="flex items-center gap-x-2 ">
                    <div className="p-3 bg-[#faccba] bg-opacity-25 rounded-lg text-[#FF6600] font-bold">
                      950 +
                    </div>
                    <span className="text-[#5B5B5B] font-semibold w-[120px]">
                      Happy Clients
                    </span>
                  </div>

                  <div className="bg-[#FF6600] h-[2px] w-[80%] my-4 lg:hidden"></div>

                  <div className="flex items-center gap-x-2">
                    <div className="p-3 bg-[#faccba] bg-opacity-25 rounded-lg text-[#FF6600] font-bold">
                      300 +
                    </div>
                    <span className="text-[#5B5B5B] font-semibold w-[120px]">
                      Employee
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex justify-center mt-5 md:m-0"
          >
            <img
              src={aboutus}
              alt="introduction"
              className="p-2 w-[400px] md:w-[500px]"
            />
          </div>

          <div className="mt-8 lg:hidden">
            <div className="flex flex-col items-center justify-between p-2 bg-white rounded-md md:flex-row">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                className="flex items-center gap-x-2 "
              >
                <div className="p-3 bg-[#faccba] bg-opacity-25 rounded-lg text-[#FF6600] font-bold mb-3">
                  600 +
                </div>
                <span className="text-[#5B5B5B] font-semibold w-[120px]">
                  Project Done
                </span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-once="true"
                className="flex items-center gap-x-2 "
              >
                <div className="p-3 bg-[#faccba] bg-opacity-25 rounded-lg text-[#FF6600] font-bold mb-3">
                  950 +
                </div>
                <span className="text-[#5B5B5B] font-semibold w-[120px]">
                  Happy Clients
                </span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-once="true"
                className="flex items-center gap-x-2"
              >
                <div className="p-3 bg-[#faccba] bg-opacity-25 rounded-lg text-[#FF6600] font-bold mb-3">
                  300 +
                </div>
                <span className="text-[#5B5B5B] font-semibold w-[120px]">
                  Employee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
