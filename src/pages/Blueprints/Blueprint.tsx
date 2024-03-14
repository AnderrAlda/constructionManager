import { Header, IndividualBlueprint, NavBar } from "../../components";
import { VerticalScrollLayout } from "../../layouts";

const Blueprint = () => {
  const data = [
    ["Planta principal.pdf", "Planta principal2.pdf", "Planta principal3.pdf"],
    [
      "Planta secundario.pdf",
      "Planta secundario2.pdf",
      "Planta secundario3.pdf",
    ],
    [
      "Planta secundario2.pdf",
      "Planta secundario2.2.pdf",
      "Planta secundario2.3.pdf",
    ],
    [
      "Planta secundario3.pdf",
      "Planta secundario3.2.pdf",
      "Planta secundario3.3.pdf",
    ],
    [
      "Planta secundario4.pdf",
      "Planta secundario4.2.pdf",
      "Planta secundario4.3.pdf",
    ],
  ];

  return (
    <div>
      <Header header="Planos" withExit={false} />
      <VerticalScrollLayout height="44rem">
        {data.map((value, key) => (
          <IndividualBlueprint data={value} key={key} />
        ))}
      </VerticalScrollLayout>
      <NavBar />
    </div>
  );
};

export default Blueprint;
