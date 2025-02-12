import { ArrowSquareOut } from "phosphor-react";

export function Projects() {
    return (
        <div id="projetos" className="flex flex-col py-10 sm:py-20 px-8 sm:px-7.5rem font-inter bg-gray-950">
            <h1 className="flex justify-center items-center gap-3 text-2xl sm:text-3xl font-semibold text-gray-50">Meus projetos</h1>
        
            <section className="flex flex-wrap gap-6 mt-12">
                <div className="w-auto sm:w-80 2xl:w-96 rounded-xl transform hover:scale-105 transition duration-300">
                    <img className="rounded-tl-xl rounded-tr-xl" src="postify-projeto.png" alt="Imagem do projeto Postify" />
                    
                    <div className="p-5 bg-gray600 rounded-bl-xl rounded-br-xl">
                        <div className="flex justify-between">
                            <h2 className="text-base font-semibold text-gray-200">Postify</h2>
                            <a className="p-1 bg-purple-500 hover:bg-purple-400 rounded-md text-white100" href="https://naelens.github.io/postify-ts/" target="_blank"><ArrowSquareOut size={20} /></a>
                        </div>                        
                        
                        <p className="mt-4 text-sm text-gray-400">Aplicação para compartilhar publicações.</p>
                    </div>
                </div>

                <div className="w-auto sm:w-80 2xl:w-96 rounded-xl transform hover:scale-105 transition duration-300">
                    <img className="rounded-tl-xl rounded-tr-xl" src="to-do-projeto.png" alt="Imagem do projeto Postify" />
                    
                    <div className="p-5 bg-gray600 rounded-bl-xl rounded-br-xl">
                        <div className="flex justify-between">
                            <h2 className="text-base font-semibold text-gray-200">To Do</h2>
                            <a className="p-1 bg-purple-500 hover:bg-purple-400 rounded-md text-white100" href="https://naelens.github.io/to_do_list/" target="_blank"><ArrowSquareOut size={20} /></a>
                        </div>                        
                        
                        <p className="mt-4 text-sm text-gray-400">Aplicação para gerenciar tarefas.</p>
                    </div>
                </div>

                <div className="w-auto sm:w-80 2xl:w-96 rounded-xl transform hover:scale-105 transition duration-300">
                    <img className="rounded-tl-xl rounded-tr-xl" src="glasses-projeto.png" alt="Imagem do projeto Glasses" />
                    
                    <div className="p-5 bg-gray600 rounded-bl-xl rounded-br-xl">
                        <div className="flex justify-between">
                            <h2 className="text-base font-semibold text-gray-200">Glasses</h2>
                            <a className="p-1 bg-purple-500 hover:bg-purple-400 rounded-md text-white100" href="https://www.behance.net/gallery/209758113/Glasses" target="_blank"><ArrowSquareOut size={20} /></a>
                        </div>                        
                        
                        <p className="mt-4 text-sm text-gray-400">Design de Site para venda de óculos.</p>
                    </div>
                </div>

                <div className="w-auto sm:w-80 2xl:w-96 rounded-xl transform hover:scale-105 transition duration-300">
                    <img className="rounded-tl-xl rounded-tr-xl" src="findmyplace-projeto.png" alt="Imagem do projeto Find My Place" />
                    
                    <div className="p-5 bg-gray600 rounded-bl-xl rounded-br-xl">
                        <div className="flex justify-between">
                            <h2 className="text-base font-semibold text-gray-200">Find My Place</h2>
                            <a className="p-1 bg-purple-500 hover:bg-purple-400 rounded-md text-white100" href="https://www.behance.net/gallery/209936347/Find-My-Place" target="_blank"><ArrowSquareOut size={20} /></a>
                        </div>                        
                        
                        <p className="mt-4 text-sm text-gray-400">Design de App para aluguel de casas.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}