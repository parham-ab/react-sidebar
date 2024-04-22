import { NavLink } from "react-router-dom";
import { menuItems } from "../constants/menuItems";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="flex">
      <div className={`${isOpen ? "w-52" : "w-14"} bg-blue-100 h-screen`}>
        <div className="flex items-center justify-between py-5 px-3">
          <h1 className={isOpen ? "block" : "hidden"}>Logo</h1>
          <div
            onClick={() => toggle()}
            className={`flex text-3xl text-gray-500 cursor-pointer ${
              isOpen ? "ml-12" : "ml-0"
            }`}
          >
            {isOpen ? <IoMdClose /> : <FaBars />}
          </div>
        </div>

        <ul className={`${!isOpen ? "flex flex-col items-center gap-6" : ""}`}>
          {menuItems.map((item) => (
            <li
              key={item?.path}
              className={`${
                isOpen
                  ? "hover:bg-blue-950 pl-2 hover:text-white"
                  : "pl-0 hover:text-cyan-950"
              }  transition-all flex items-center cursor-pointer`}
            >
              {<item.icon className="text-2xl" />}
              <NavLink
                to={item?.path}
                className={`flex-col p-3 ${isOpen ? "block " : "hidden"}`}
              >
                {item?.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <main className="w-full p-5">{children}</main>
    </div>
  );
};

export default Sidebar;
