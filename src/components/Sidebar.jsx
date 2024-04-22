import { NavLink } from "react-router-dom";
import { menuItems } from "../constants/menuItems";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ children }) => {
  
  return (
    <div className="flex items-center">
      <div>
        <div>
          <h1>Logo</h1>
          <div>
            <FaBars />
            <IoMdClose />
          </div>
        </div>

        <ul className="w-[250px]">
          {menuItems.map((item) => (
            <li
              key={item?.path}
              className=" bg-blue-100 hover:bg-blue-950 hover:text-white transition-all flex items-center pl-2"
            >
              {<item.icon className="text-xl" />}
              <NavLink to={item?.path} className={"flex flex-col p-3"}>
                {item?.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
