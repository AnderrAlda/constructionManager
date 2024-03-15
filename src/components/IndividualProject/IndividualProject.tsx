import { IoCalendar, IoCheckboxOutline, IoPeople } from "react-icons/io5";
import { worker1 } from "../../assets";

interface props {
  title: string;
  date: string;
  tasks: number;
  people: number;
}

const IndividualProject = ({ title, date, tasks, people }: props) => {
  return (
    <div className="border-2 border-black mx-5 rounded-2xl mb-5">
      <div className="flex items-center justify-center mt-5">
        <div className=" w-80 h-48 bg-gray-400 rounded-2xl"></div>
      </div>
      <div className="flex">
        <div className="mt-6 ml-3">
          <p className="text-2xl font-bold">{title}</p>
          <div className="flex gap-2 my-3 ">
            <IoCalendar className="text-xl" />
            <p>{date}</p>
            <IoCheckboxOutline className="text-xl" />
            <p>{tasks}</p>
            <IoPeople className="text-xl" />
            <p>{people}</p>
          </div>
        </div>
        <div className="flex relative  w-32 pt-8 mr-6">
          <img
            className="h-14 rounded-full  border-2 border-black shadow-2xl absolute right-0"
            src={worker1}
            alt="worker1"
          />
          <img
            className="h-14 rounded-full  border-2 border-black shadow-2xl  absolute right-5"
            src={worker1}
            alt="worker1"
          />
          <img
            className="h-14 rounded-full  border-2 border-black shadow-2xl absolute right-10"
            src={worker1}
            alt="worker1"
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
