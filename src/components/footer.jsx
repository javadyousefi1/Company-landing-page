import Style from "../css/background.module.css";
import logo from "../image/logo.png";
import icons from "../image/icons.png";
const Footer = () => {
  return (
    <footer>
      <div className={Style.footerBg}>
        <div className="container flex justify-center px-4 mt-10 max-w-7xl md:mt-16 ">
          <div className="flex flex-col items-center py-16 gap-y-5">
            <div className="flex items-center gap-x-2">
              <img src={logo} alt="logo" className="w-[30px]" />
              <span className="text-lg font-bold text-white ">Excursy</span>
            </div>
            <img src={icons} alt="logo" className="w-[180px]" />

            <nav className="">
              <ul className="flex flex-col">
                <div className="flex justify-center mb-2 gap-x-4 md:flex-row">
                  <li className="text-sm font-semibold text-white transition-all duration-200 cursor-pointer hover:border-b-orange-400">
                    Home
                  </li>
                  <li className="text-sm font-semibold text-white transition-all duration-200 cursor-pointer hover:border-b-orange-400">
                    Values
                  </li>
                  <li className="text-sm font-semibold text-white transition-all duration-200 cursor-pointer hover:border-b-orange-400">
                    About us
                  </li>
                </div>

                <div className="flex gap-x-4">
                  <li className="text-sm font-semibold text-white transition-all duration-200 cursor-pointer hover:border-b-orange-400">
                    Our interests
                  </li>
                  <li className="text-sm font-semibold text-white transition-all duration-200 cursor-pointer hover:border-b-orange-400">
                    Current Projects
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
