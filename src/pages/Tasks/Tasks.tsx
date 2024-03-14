import { worker1 } from "../../assets";
import { Header, IndividualTask, NavBar } from "../../components";
import { HorizontalScrollLayout, VerticalScrollLayout } from "../../layouts";

const Tasks = () => {
  const Data = [
    {
      img: "day1",
      title: "Resuelto la cocina 4 del primer piso",
      date: "Hoy a las 09:00 AM",
    },
    {
      img: "day1",
      title: "Resultado de la sala de estar del ultimo piso",
      date: "Ayer a las 12:00 AM",
    },
    {
      img: "day1",
      title: "Asi ha quedado la pared del comedor del 3-4",
      date: "Ayer a las 17:20 PM",
    },
    {
      img: "day1",
      title: "Esto es la entrada del establecimiento con las luzes",
      date: "Ayer a las 20:12 PM",
    },
  ];

  const Filters = ["Hoy", "Ayer", "Pedro Maria", "Jose Ignacio"];

  return (
    <div>
      <Header header="Trabajos" withExit={false} />
      <div className="ml-5 mb-5">
        <HorizontalScrollLayout>
          {Filters.map((key, value) => (
            <button
              className="text-xl border-2 border-black shadow-md rounded-xl px-5"
              key={key}
            >
              {Filters[value]}
            </button>
          ))}
        </HorizontalScrollLayout>
      </div>
      <VerticalScrollLayout height="41rem">
        {Data.map((value, key) => (
          <IndividualTask
            key={key}
            img={worker1}
            title={value.title}
            date={value.date}
          />
        ))}
      </VerticalScrollLayout>
      <NavBar />
    </div>
  );
};

export default Tasks;
