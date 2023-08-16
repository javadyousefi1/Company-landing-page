import logo from "../image/logo.png";
import menu from "../image/menu.png";
import closeMenu from "../image/closeMenu.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        <div className="container flex items-center justify-between px-4 py-4 max-w-7xl">
          <div className="flex items-center gap-x-2">
            <img src={logo} alt="logo" className="w-[30px]" />
            <span className="text-lg font-bold">Excursy</span>
          </div>

          <div className="flex items-center justify-end">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-x-6">
                <li className="text-sm font-semibold cursor-pointer border-b mt-[2px] hover:border-b-orange-400 border-b-white transition-all duration-200">
                  Home
                </li>
                <li className="text-sm font-semibold cursor-pointer border-b mt-[2px] hover:border-b-orange-400 border-b-white transition-all duration-200">
                  Values
                </li>
                <li className="text-sm font-semibold cursor-pointer border-b mt-[2px] hover:border-b-orange-400 border-b-white transition-all duration-200">
                  About us
                </li>
                <li className="text-sm font-semibold cursor-pointer border-b mt-[2px] hover:border-b-orange-400 border-b-white transition-all duration-200">
                  Our interests
                </li>
                <li className="text-sm font-semibold cursor-pointer border-b mt-[2px] hover:border-b-orange-400 border-b-white transition-all duration-200">
                  Current Projects
                </li>
              </ul>
            </nav>

            <div className="justify-around hidden ml-6  md:flex">
              <button className="px-4 py-2 text-xs font-bold text-white bg-orange-500 border-2 border-orange-500 rounded-lg">
                sign in
              </button>
              <button className="px-4 py-2 ml-2 text-xs font-bold text-orange-500 border-2 border-orange-500 rounded-lg">
                login
              </button>
            </div>

            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <img src={menu} alt="logo" className="w-[20px]" />
              ) : (
                <img
                  src={closeMenu}
                  alt="logo"
                  className="w-[20px] relative z-20"
                />
              )}
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed top-0 z-10 w-full h-screen bg-black bg-opacity-40 md:hidden">
          <div className="w-[70vw] bg-white h-screen fixed top-0 left-0 bottom-0 p-6">
            <div className="flex flex-col items-center gap-x-2">
              <img src={logo} alt="logo" className="w-[30px]" />
              <span className="text-lg font-bold">Excursy</span>
            </div>
            <div className="flex justify-around my-10">
              <button className="px-4 py-2 text-xs text-white bg-orange-500 border-2 border-orange-500 rounded-lg">
                sign in
              </button>
              <button className="px-4 py-2 ml-2 text-xs text-orange-500 border-2 border-orange-500 rounded-lg m">
                login
              </button>
            </div>
            <nav className="">
              <ul>
                <li className="pl-2 mb-5 text-sm border-l-2 border-l-amber-500">
                  Home
                </li>
                <li className="pl-2 mb-5 text-sm border-l-2 border-l-amber-500">
                  Values
                </li>
                <li className="pl-2 mb-5 text-sm border-l-2 border-l-amber-500">
                  About us
                </li>
                <li className="pl-2 mb-5 text-sm border-l-2 border-l-amber-500">
                  Our interests
                </li>
                <li className="pl-2 mb-5 text-sm border-l-2 border-l-amber-500">
                  Current Projects
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
