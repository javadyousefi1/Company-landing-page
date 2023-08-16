import microsoft from "../image/microsoft.png";
import slack from "../image/slack.png";
import woo from "../image/woo.png";
import amazon from "../image/amazon.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Company = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="container px-4 my-10 max-w-7xl md:mt-28"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="flex justify-center">
          <div className="flex items-center justify-center gap-x-4 md:gap-x-20">
            <div className="w-[17%] md:w-[13%]">
              <img src={microsoft} alt="microsoft" />
            </div>
            <div className="w-[17%] md:w-[13%]  ">
              <img src={slack} alt="slack" />
            </div>
            <div className="w-[17%] md:w-[13%]  ">
              <img src={woo} alt="woo" />
            </div>
            <div className="w-[17%] md:w-[13%]">
              <img src={amazon} alt="ama<img src={amazon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
