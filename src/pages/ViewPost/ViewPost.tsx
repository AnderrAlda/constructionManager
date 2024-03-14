import { IoCreateOutline } from "react-icons/io5";
import { worker1, working1, yourSVGfile } from "../../assets";

import { VerticalScrollLayout } from "../../layouts";
import { Header } from "../../components";

const ViewPost = () => {
  const Data = {
    userName: "Jose Angel Itxaso",
    date: "Hoy a las 09:00 AM",
    title: "Resuelto la cocina 4 del primero piso.",
    explication:
      "La concina 4 del primero piso no tenia bien puesta la encimera. Al principio esta planeado de hacer lo con ceramica pero el de pladur lo izo con cincel. Como era una confusion esa hecho la encimera y se reconstruyo entera la encimera.",
    extraExpenses: [
      {
        name: "Capa de pintura",
        price: 100,
      },
      {
        name: "Cincel de pintrua",
        price: 44,
      },
      {
        name: "12h del carpintero",
        price: 112,
      },
    ],
  };
  return (
    <div>
      <IoCreateOutline className="absolute text-3xl right-5 top-3" />
      <Header header="Post 1" withExit={true} />
      <div className="flex ml-5 gap-5 mt-5 mr-5 mb-5">
        <img
          src={worker1}
          alt=""
          className="h-20 rounded-full  border-2 border-black shadow-2xl"
        />
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-medium">{Data.userName}</p>
          <p className="text-gray-400">{Data.date}</p>
        </div>
      </div>

      <VerticalScrollLayout height="40rem">
        <div className="ml-5 mr-5 mt-5 flex flex-col gap-5">
          <p className="text-3xl font-bold">{Data.title}</p>
          <p>{Data.explication}</p>
        </div>

        <div className="ml-5 mr-5 mt-5 flex flex-col gap-2">
          <p className="text-xl font-bold">Gastos Extras:</p>
          <ul className="ml-5 list-dist list-disc">
            {Data.extraExpenses.map((value, key) => (
              <li key={key}>{`${value.name} - ${value.price}$`}</li>
            ))}
          </ul>
        </div>

        <div className="ml-5 mr-5 mt-5 flex flex-col gap-2">
          <p className="text-xl font-bold">Imagen:</p>
          <img className="rounded-xl" src={working1} alt="working1" />
        </div>

        <div className="ml-5 mr-5 mt-5 flex flex-col gap-2">
          <p className="text-xl font-bold">Plano:</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
            <image xlinkHref={yourSVGfile} width="500" height="500" />
          </svg>
        </div>
      </VerticalScrollLayout>
    </div>
  );
};

export default ViewPost;
