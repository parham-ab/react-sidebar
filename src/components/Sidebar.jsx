import { NavLink } from "react-router-dom";
import { menuItems } from "../constants/menuItems";

const Sidebar = ({ children }) => {
  return (
    <div>
      <div>
        <div>
          <h1>Logo</h1>
          <div>bars</div>
        </div>

        {menuItems.map((item) => (
          <NavLink key={item?.path} to={item?.path}>
            {item?.name}
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
