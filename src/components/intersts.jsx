import value from "../image/value.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Intersts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container flex justify-center px-4 mt-10 max-w-7xl md:mt-16 ">
        <div className="flex flex-col mt-5 lg:flex-row">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="px-4 md:px-0 md:w-[100%] lg:w-[70%]"
          >
            <h1 className="text-4xl text-center font-bold lg:w-[50%] md:text-center md:text-3xl lg:text-4xl lg:text-left">
              Our Values
            </h1>
            <div className="lg:w-[90%] w-[100%] flex items-center justify-center">
              <p className="text-xs font-medium text-center px-5 mt-6 text-[#5B5B5B] md:text-lg lg:text-lg lg:text-left  md:text-center md:p-0 ">
                anftw is a hallmark. The team members may change, but the
                quality of our project execution will not.An outstanding team
                can build a product in any industry. Don’t be intimidated by
                incumbents.
              </p>
            </div>

            <div className="items-center hidden mt-10 lg:block">
              <button className="px-4 py-3 text-white bg-orange-500 rounded-lg">
                Read more
              </button>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex justify-center mt-5 md:m-0"
          >
            <img
              src={value}
              alt="introduction"
              className="p-2 w-[400px] md:w-[500px]"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex justify-center mt-8 lg:hidden"
          >
            <button className="px-4 py-3 text-white bg-orange-500 rounded-lg">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intersts;
