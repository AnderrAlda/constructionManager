import {
  IoCaretDownSharp,
  IoCash,
  IoMap,
  IoReorderFour,
  IoScanSharp,
} from "react-icons/io5";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";

const CreatePost = () => {
  return (
    <div>
      <Header header="Nuevo post" withExit={false} />

      <div className="mx-5 gap-2 flex flex-col ">
        <p className="text-2xl">Titulo</p>
        <div className="border-2 border-gray-400 flex items-center pl-5 gap-5 rounded-2xl text-gray-400 py-1">
          <IoReorderFour className="text-2xl" />
          <p className="text-xl">Nuevo titulo</p>
        </div>
      </div>

      <div className="mx-5 gap-2 flex flex-col mt-4">
        <p className="text-2xl">Explicacion</p>
        <div className="border-2 border-gray-400 flex items-center pl-5 gap-5 rounded-2xl text-gray-400 pt-1 pb-32">
          <IoReorderFour className="text-2xl" />
          <p className="text-xl">Nueva Explicacion</p>
        </div>
      </div>

      <div className="mx-5 gap-2 flex flex-col mt-4">
        <p className="text-2xl">Gasto extra</p>
        <div className="border-2 border-gray-400 flex items-center pl-5 gap-5 rounded-2xl text-gray-400 py-1">
          <IoCash className="text-2xl" />
          <p className="text-xl">Nuevo gasto</p>
        </div>
      </div>
      <div className="mx-5 gap-2 flex flex-col mt-4">
        <p className="text-2xl">Imagen</p>
        <div className="border-2 border-gray-400 flex items-center pl-5 gap-5 rounded-2xl text-gray-400 py-1">
          <IoScanSharp className="text-2xl" />
          <p className="text-xl">Nueva imagen</p>
        </div>
      </div>
      <div className="mx-5 gap-2 flex flex-col mt-4">
        <p className="text-2xl">En el plano</p>
        <div className="border-2 border-gray-400 flex items-center pl-5 gap-5 rounded-2xl text-gray-400 py-1">
          <IoMap className="text-2xl" />
          <p className="text-xl">Elige el plano</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <button className="bg-black text-white rounded-3xl w-80 h-16 text-2xl font-bold">
          Anadir resultado
        </button>
      </div>
      <NavBar />
    </div>
  );
};

export default CreatePost;
