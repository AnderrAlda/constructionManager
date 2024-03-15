import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
interface props {
  header: string;
  withExit: boolean;
}

const Header = ({ header, withExit }: props) => {
  let hidden = "hidden";

  if (withExit) {
    hidden = " ";
  }

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className=" flex items-center justify-center h-16">
      <p className="text-2xl">{header}</p>

      <button onClick={goBack}>
        <IoArrowBackOutline className={`absolute left-5 text-2xl ${hidden}`} />
      </button>
    </div>
  );
};

export default Header;
