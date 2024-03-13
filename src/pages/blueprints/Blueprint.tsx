import { Header } from "../../components/Header";
import { IndividualBlueprint } from "../../components/IndividualBlueprint";
import { NavBar } from "../../components/NavBar";
import VerticalScrollLayout from "../../layouts/VerticalScroll/VerticalScroll";

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
      <Header header="Planos" />
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
