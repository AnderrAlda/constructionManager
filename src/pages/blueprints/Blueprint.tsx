import { IndividualBlueprint } from "../../components/IndividualBlueprint";
import { NavBar } from "../../components/NavBar";

const Blueprint = () => {
  const data = {
    versionesPlano1: [
      "Planta principal.pdf",
      "Planta principal2.pdf",
      "Planta principal3.pdf",
    ],

    versionesPlano2: [
      "Planta secundario.pdf",
      "Planta secundario2.pdf",
      "Planta secundario3.pdf",
    ],

    versionesPlano3: [
      "Planta secundario2.pdf",
      "Planta secundario2.2.pdf",
      "Planta secundario2.3.pdf",
    ],

    versionesPlano4: [
      "Planta secundario3.pdf",
      "Planta secundario3.2.pdf",
      "Planta secundario3.3.pdf",
    ],
  };
  return (
    <div>
      <div className=" flex items-center justify-center h-16">
        <p className="text-2xl">Planos</p>
      </div>

      <div>
        <IndividualBlueprint data={data.versionesPlano1} />
        <IndividualBlueprint data={data.versionesPlano2} />
        <IndividualBlueprint data={data.versionesPlano3} />
        <IndividualBlueprint data={data.versionesPlano4} />
      </div>

      <NavBar />
    </div>
  );
};

export default Blueprint;
