import Image from "next/image";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-3xl font-semibold font-sans text-gray-800">
        Venta de productos Digitales
      </div>
      <div className="text-lg text-gray-400 pb-5">
        Organizción 100% Mexicana
      </div>
      <button className="bg-sky-500 rounded-full px-3 py-2">
        Ver productos
      </button>
    </div>
  );
}

