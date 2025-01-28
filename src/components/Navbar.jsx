import { List, X } from "phosphor-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-14 right-10 w-40 md:hidden rounded-md bg-gray600 shadow-md border border-purple-950
            `}
        >
          <ul className="flex flex-col justify-center items-center p-4 space-y-6">
            <li className="list-none font-normal text-xs sm:text-base text-gray-400 hover:text-purple-400 transition duration-800 ease-in-out">
                <a href="#sobreMim">Sobre mim</a>
            </li>
            <li className="list-none font-normal text-xs sm:text-base text-gray-400 hover:text-purple-400 transition duration-800 ease-in-out">
                <a href="#projetos">Projetos</a>
            </li>
            <li className="list-none font-normal text-xs sm:text-base text-gray-400 hover:text-purple-400 transition duration-800 ease-in-out">
                <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block sm:hidden focus:outline-none"
        >
          {isOpen ? (
            <X className="text-gray-400" size={24} />
          ) : (
            <List className="text-gray-400" size={24} />
          )}
        </button>
      </div>
  );
}
