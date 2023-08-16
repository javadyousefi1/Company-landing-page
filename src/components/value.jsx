import star from "../image/star.png";
import link from "../image/link.png";
import tick from "../image/tick.png";

const Value = () => {
  return (
    <>
      <div className="container px-4 max-w-7xl md:mt-10">
        <h1
          data-aos="fade-up"
          data-aos-once="true"
          className="mt-4 text-4xl font-bold text-center text-slate-800"
        >
          Our Interests
        </h1>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex justify-center"
        >
          <p className="text-center font-medium text-sm mt-4 md:w-[50%]">
            It's the norm these days to lay out a roadmap that gives
            stakeholders an indication of the direction that the project aspires
            to go. Inspired by Elon Musk’s 2006 masterplan, these are our
            skeleton ambitions.
          </p>
        </div>

        <div className="flex flex-col mt-10 gap-y-4 md:flex-row md:gap-x-10 lg:gap-x-24">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex flex-col px-6 py-5 bg-white rounded-lg shadow-lg"
          >
            <img src={link} alt="link" className="w-[50px]" />
            <h3 className="my-4 text-lg font-bold text-slate-800">
              Blockchain product{" "}
            </h3>
            <p className="text-sm text-justify text-gray-400">
              Create something novel that has never been done on the blockchain
              before Build a product
            </p>
            <span className="mt-5 font-bold text-orange-500">Read More...</span>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex flex-col px-6 py-5 bg-white rounded-lg shadow-lg"
          >
            <img src={star} alt="star" className="w-[50px]" />
            <h3 className="my-4 text-lg font-bold text-slate-800">
              Quality product
            </h3>
            <p className="text-sm text-justify text-gray-400">
              Create something novel that has never been done on the blockchain
              before Build a product
            </p>
            <span className="mt-5 font-bold text-orange-500">Read More...</span>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex flex-col px-6 py-5 bg-white rounded-lg shadow-lg"
          >
            <img src={tick} alt="tick" className="w-[50px]" />
            <h3 className="my-4 text-lg font-bold text-slate-800">
              Viable product
            </h3>
            <p className="text-sm text-justify text-gray-400">
              Create something novel that has never been done on the blockchain
              before Build a product
            </p>
            <span className="mt-5 font-bold text-orange-500">Read More...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Value;
