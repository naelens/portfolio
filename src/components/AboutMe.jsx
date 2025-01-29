import { Code, PaintBrush } from "phosphor-react";

export function AboutMe() {
    return (
        <div id="sobreMim" className="flex flex-col py-10 sm:py-20 px-8 sm:px-7.5rem font-inter bg-gray-950">
            <h1 className="flex justify-center items-center gap-3 text-2xl sm:text-3xl font-semibold text-gray-50">Quem sou eu?</h1>

            <section>
                    <section className="flex flex-col justify-center items-center mt-10"> 
                        <p className="text-sm sm:text-base 2xl:text-xl text-gray-400">
                            Olá, me chamo Naelem. Sou formada em Análise e Desenvolvimento de Sistemas e hoje possuo experiência como <strong className="text-purple-400">Desenvolvedora Front-end</strong> e <strong className="text-purple-400">UI/UX Designer</strong>. 
                            Minha jornada na tecnologia começou em 2022, eu não conhecia nada desse mundo e o que iniciou como um hobby curioso logo virou paixão.
                            Atualmente continuo aprimorando minhas habilidades e me especializando na área de Front-end.
                            Amo transformar ideias em experiências digitais incríveis, combinando criatividade e tecnologia para criar soluções eficiente e atrativas visualmente.
                            Então se você procura soluções criativas e funcionais, estou aqui para ajudar!!
                        </p>
                    </section>
                    
                    <section className="grid grid-cols-1 xl:grid-cols-2 gap-10 sm:gap-14 mt-8 2xl:mt-12">
                        <div>
                            <h2 className="flex gap-3 items-center text-sm sm:text-base 2xl:text-xl font-semibold text-purple-400">Minhas Skills</h2>
                            <ul className="flex flex-wrap gap-4 sm:gap-4 mt-6">
                                <div className="flex flex-col justify-center items-center p-2 sm:p-3 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <img className="h-10 sm:h-12" src="/assets/html5-original.svg" alt="Html icone" />
                                </div>
                                <div className="flex flex-col justify-center items-center p-2 sm:p-3 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <img className="h-10 sm:h-12" src="/assets/css3-original.svg" alt="CSS3 ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center p-2 sm:p-3 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <img className="h-10 sm:h-12" src="/assets/javascript-original.svg" alt="Javascript ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center p-2 sm:p-3 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <img className="h-10 sm:h-12" src="/assets/react-original.svg" alt="React ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center p-2 sm:p-3 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <img className="h-10 sm:h-12" src="/assets/angularjs-original.svg" alt="Angular ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center p-2 sm:p-3 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <img className="h-10 sm:h-12" src="/assets/typescript-original.svg" alt="Typescript ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center p-2 sm:p-3 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <img className="h-10 sm:h-12" src="/assets/tailwindcss-original.svg" alt="Tailwind ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center p-2 sm:p-3 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <img className="h-10 sm:h-12" src="/assets/figma-original.svg" alt="Figma ícone" />
                                </div>
                               <div className="flex flex-col justify-center items-center p-2 sm:p-3 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <img className="h-10 sm:h-12" src="/assets/git-original.svg" alt="Git ícone" />
                                </div>   
                            </ul>
                        </div>
                        <div>
                            <h2 className="flex gap-3 items-center text-sm sm:text-base 2xl:text-xl font-semibold text-purple-400">Meus serviços</h2>
                            <div className="flex gap-4 mt-6">
                                <div className="flex flex-col justify-center items-center px-1 2xl:px-4 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 bg-gray600">
                                    <div className="text-purple-400 p-2 rounded-full border border-purple-400"><Code size={20} /></div>
                                    <h2 className="mt-4 text-gray-50 text-xs sm:text-sm">Code</h2>
                                    <p className="text-gray-600 text-xs sm:text-sm mt-3 text-center">Desenvolvimento de Sites e Landing Pages.</p>
                                </div>
                                <div className="flex flex-col justify-center items-center px-2 2xl:px-4 border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <div className="text-purple-400 p-2 rounded-full border border-purple-400"><PaintBrush size={20}/></div>
                                    <h2 className="mt-4 text-gray-50 text-xs sm:text-sm">UI/UX Design</h2>
                                    <p className="text-gray-600 text-xs sm:text-sm mt-3 text-center">Criação de Interface para Web e Mobile.</p>
                                </div>
                            </div>
                        </div>
                    </section>
            </section>
        </div>
        //
    )
}