interface props {
  header: string;
}

const Header = ({ header }: props) => {
  return (
    <div className=" flex items-center justify-center h-16">
      <p className="text-2xl">{header}</p>
    </div>
  );
};

export default Header;
