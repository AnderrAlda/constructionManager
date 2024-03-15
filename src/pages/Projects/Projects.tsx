import { worker1 } from "../../assets";
import { Header, NavBar } from "../../components";

const Projects = () => {
  return (
    <div>
      <Header header="Projects" withExit={false} />

      <div className="border-2 border-black mx-5">
        <div className="flex items-center justify-center">
          <div className=" w-60 h-40 bg-gray-400"></div>
        </div>
        <p>NOMBRE DEL PROYECTO</p>
        <div>
          <img
            className="h-8 rounded-full  border-2 border-black shadow-2xl"
            src={worker1}
            alt="worker1"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
