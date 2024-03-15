import { Header } from "../../components";
import { IndividualProject } from "../../components/IndividualProject";

const Projects = () => {
  const Data = [
    {
      title: "PROYECTO 1",
      date: "26.10.2012",
      tasks: 3,
      people: 7,
    },
    {
      title: "PROYECTO 2",
      date: "22.11.2019",
      tasks: 6,
      people: 3,
    },
    {
      title: "PROYECTO 3",
      date: "02.01.2023",
      tasks: 22,
      people: 7,
    },
  ];

  return (
    <div>
      <Header header="Projectos" withExit={false} />
      {Data.map((value, key) => (
        <IndividualProject
          key={key}
          title={value.title}
          date={value.date}
          tasks={value.tasks}
          people={value.people}
        />
      ))}
    </div>
  );
};

export default Projects;
