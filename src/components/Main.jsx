import { ArrowDown } from "phosphor-react";
import { Typewriter } from "./Typewriter";

const handleScroll = () => {
  const sectionAboutMe = document.getElementById("sobreMim");
  if (sectionAboutMe) {
    sectionAboutMe.scrollIntoView({ behavior: "smooth" });
  }
};

export function Main() {
  return (
    <div className="font-inter bg-gray-950">
      <header className="flex justify-between items-center px-12 sm:px-7.5rem py-1.25rem">
        <aside className="logo">
          <img className="h-6 sm:h-8" src="src\assets\logo_portfolio.svg" alt="Logo" />
        </aside>

        <nav className="flex gap-1.5rem">
          <p className="font-normal text-sm sm:text-base text-gray-400 hover:text-purple-400 transition duration-800 ease-in-out">
            <a href="#sobreMim">Sobre mim</a>
          </p>
          <p className="font-normal text-sm sm:text-base text-gray-400 hover:text-purple-400 transition duration-800 ease-in-out">
            <a href="#projetos">Projetos</a>
          </p>
          <p className="font-normal text-sm sm:text-base text-gray-400 hover:text-purple-400 transition duration-800 ease-in-out">
            <a href="#contato">Contato</a>
          </p>
        </nav>
      </header>

      <main className="flex flex-col py-14 px-12 sm:px-7.5rem">
        <div className="flex flex-col items-center">
          <img
            className="h-40 sm:h-avatar border-4 rounded-full border-bglinear"
            src="src\assets\naelem.png"
            alt="Naelem Foto"
          />
          <h2 id="typewriter" className="pt-6 text-xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 from-20% via-purple-400 via-50% to-purple-200 to-80%">
            <Typewriter />
          </h2>
          <p className="pt-3 text-sm sm:text-base text-center text-gray-400">
            Sou desenvolvedora Front-end e UI/UX Designer que traz vida às
            ideias e estilo às interfaces.
          </p>

          <div className="flex justify-center items-center mt-16">
            <button
              className="p-2 sm:p-3 rounded-full animate-bounce text-bglinear bg-white100 shadow-lg shadow-purple-300"
              onClick={handleScroll}
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
