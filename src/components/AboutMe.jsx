import { Code, PaintBrush } from "phosphor-react";

export function AboutMe() {
    return (
        <div id="sobreMim" className="flex flex-col py-20 px-7.5rem font-inter bg-gray-950">
            <h1 className="flex justify-center items-center gap-3 text-3xl font-semibold text-gray-50">Quem sou eu?</h1>

            <section className="">
                    <section className="flex flex-col justify-center items-center mt-8"> 
                        <p className="text-sm  text-gray-400 mt-4">
                            Sou formada em Análise e Desenvolvimento de Sistemas (ADS) e especializada em desenvolvimento web. Minha jornada na tecnologia começou como um hobby curioso que logo virou paixão. 
                            Hoje possuo experiência como <strong className="text-bglinear">Desenvolvedora Front-end</strong> e <strong className="text-bglinear">UI/UX Designer</strong>. 
                        </p>
                        <p className="text-sm  text-gray-400 mt-4">
                            Minha formação técnica me permite criar soluções robustas, enquanto minha paixão pelo design me ajuda a focar na experiência do usuário. 
                            combinação dessas habilidades me permite construir produtos funcionais e visualmente atraentes, sempre pensando na melhor usabilidade e interação para os usuários.
                        </p>
                    </section>
                    
                    <section className="grid grid-cols-2 gap-14 mt-8">
                        <div>
                            <h2 className="flex gap-3 items-center text-base font-semibold text-bglinear">Minhas Skills</h2>
                            <ul className="flex flex-wrap gap-6 mt-6">
                                <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\html5-original.svg" alt="Html icone" />
                                </div>
                                <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\css3-original.svg" alt="CSS3 ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\javascript-original.svg" alt="Javascript ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\react-original.svg" alt="React ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\angularjs-original.svg" alt="Angular ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\angularjs-original.svg" alt="Angular ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\typescript-original.svg" alt="Typescript ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\tailwindcss-original.svg" alt="Tailwind ícone" />
                                </div>
                                <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\figma-original.svg" alt="Figma ícone" />
                                </div>
                               <div className="flex flex-col justify-center items-center py-3 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <img className="h-12" src="src\assets\git-original.svg" alt="Git ícone" />
                                </div>   
                            </ul>
                        </div>
                        <div>
                            <h2 className="flex gap-3 items-center text-base font-semibold text-bglinear">Meus serviços</h2>
                            <div className="flex gap-4 mt-6">
                                <div className="flex flex-col justify-center items-center py-6 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <div className="text-bglinear p-2 rounded-full border border-bglinear"><Code size={20} /></div>
                                    <h2 className="mt-4 text-gray-50 text-sm">Desenvolvimento Web</h2>
                                    <p className="text-gray-600 text-sm mt-3 text-center">Criação de Sites, Landing Pages e E-commerce.</p>
                                </div>
                                <div className="flex flex-col justify-center items-center py-6 px-3 border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-4 bg-gray600">
                                    <div className="text-bglinear p-2 rounded-full border border-bglinear"><PaintBrush size={20} /></div>
                                    <h2 className="mt-4 text-gray-50 text-sm">UI/UX Design</h2>
                                    <p className="text-gray-600 text-sm mt-3 text-center">Criação de Interface para Web e Mobile.</p>
                                </div>
                            </div>
                        </div>
                    </section>
            </section>
        </div>
        //
    )
}