import { ArrowDown } from "phosphor-react";
import { Typewriter } from "./Typewriter";
import Navbar from "./Navbar";

const handleScroll = () => {
  const sectionAboutMe = document.getElementById("sobreMim");
  if (sectionAboutMe) {
    sectionAboutMe.scrollIntoView({ behavior: "smooth" });
  }
};

export function Main() {
  return (
    <div className="font-inter bg-gray-950">
      <header className="flex justify-between sm:justify-center items-center px-8 sm:px-7.5rem py-6 bg-gray600">
        <aside className="justify-center">
          <img className="h-6 sm:h-7" src="src/assets/logo-portfolio.svg" alt="Logo" />
        </aside>
        <Navbar />
      </header>

      <main className="flex flex-col py-14 px-8 sm:px-7.5rem">
        <div className="flex flex-col items-center">
          <img
            className="h-40 sm:h-avatar border-4 rounded-full border-purple-500"
            src="src/assets/naelem.png"
            alt="Naelem Foto"
          />
          <h2 id="typewriter" className="text-xl md:text-2xl xl:text-3xl font-semibold text-transparent pt-6 bg-clip-text bg-gradient-to-r from-purple-500 from-20% via-purple-400 via-50% to-purple-200 to-80%">
            <Typewriter />
          </h2>
          <p className="text-sm sm:text-sm lg:text-base 2xl:text-xl text-center text-gray-400 pt-3">
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
