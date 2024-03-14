import { IoArrowBackOutline } from "react-icons/io5";

interface props {
  header: string;
  withExit: boolean;
}

const Header = ({ header, withExit }: props) => {
  let hidden = "hidden";

  if (withExit) {
    hidden = " ";
  }

  //make it with history to go back the previous page!!!!
  return (
    <div className=" flex items-center justify-center h-16">
      <p className="text-2xl">{header}</p>
      <IoArrowBackOutline className={`absolute left-5 text-2xl ${hidden}`} />
    </div>
  );
};

export default Header;
