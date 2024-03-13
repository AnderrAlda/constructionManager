import {
  IoMapOutline,
  IoHammerOutline,
  IoAddCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="absolute bottom-0 w-screen flex items-center justify-center gap-14 h-16 border-t-2 border-black">
      <IoMapOutline className="text-4xl" />
      <IoHammerOutline className="text-4xl" />
      <IoAddCircleOutline className="text-4xl" />
      <IoSettingsOutline className="text-4xl" />
    </div>
  );
};

export default NavBar;
