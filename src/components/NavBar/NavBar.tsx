import {
  IoMapOutline,
  IoHammerOutline,
  IoAddCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Link } from "react-router-dom";
import { RoutesType } from "../../types";
const NavBar = () => {
  return (
    <div className="absolute bottom-0 w-screen flex items-center justify-center gap-14 h-16 border-t-2 border-black">
      <Link to={RoutesType.BLUEPRINT}>
        <IoMapOutline className="text-4xl" />
      </Link>
      <Link to={RoutesType.TASKS}>
        <IoHammerOutline className="text-4xl" />
      </Link>
      <Link to={RoutesType.CREATEPOST}>
        <IoAddCircleOutline className="text-4xl" />
      </Link>

      <IoSettingsOutline className="text-4xl" />
    </div>
  );
};

export default NavBar;
