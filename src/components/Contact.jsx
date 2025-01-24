import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";

export function Contact() {
    return (
        <div id="contato" className="flex flex-col justify-center items-center font-inter pt-10 pb-6 px-12 sm:px-7.5rem sm:pt-20,pb-4 bg-gray-950">
            <div className="border border-purple-400 rounded-lg shadow-lg shadow-gray-500/20 p-4 sm:p-8 sm:w-40rem">
                <section>
                    <h1 className="flex justify-center text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 from-20% via-purple-400 via-50% to-purple-200 to-80%">Entre em contato comigo</h1>
                </section>

                <section className="mt-5 sm:mt-10" >
                    <div className="gap-4 grid grid-cols-2">
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-200">
                                Nome
                            </label>
                            <div className="mt-2">
                                <input
                                id="nome"
                                name="username"
                                type="text"
                                autoComplete="Nome"
                                className="block w-full rounded-md bg-gray-950 px-3 py-1.5 text-base text-gray-50 outline outline-1 -outline-offset-1 outline-gray-800 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-400 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-200">
                                E-mail
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-gray-950 px-3 py-1.5 text-base text-gray-50 outline outline-1 -outline-offset-1 outline-gray-800 placeholder:text-gray-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-400 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full mt-4">
                        <label htmlFor="about" className="block text-sm/6 font-medium text-gray-200">
                            Mensagem
                        </label>
                        <div className="mt-2">
                            <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block resize-none w-full rounded-md bg-gray-950 px-3 py-1.5 text-base text-gray-50 outline outline-1 -outline-offset-1 outline-gray-800 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-400 sm:text-sm/6"
                            defaultValue={''}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button className="px-6 py-2 rounded-md text-sm sm:text-base font-medium text-gray-50 hover:bg-purple-400 bg-purple-500 hover:text-white transition duration-300 ease-in-out">Enviar</button>
                    </div>

                    <section className="flex flex-row justify-center mt-6 sm:mt-10">
                        <div className="flex items-center gap-4 pt-6 text-gray-400">
                            <p className="text-sm font-medium text-gray-400">Ou se conecte comigo através: </p>
                            <a className="hover:text-purple-400" href="https://github.com/naelens" target="_blank">
                                <GithubLogo size={24} />
                            </a>
                            <a className="hover:text-purple-400" href="https://www.linkedin.com/in/naelem-souza/" target="_blank">
                                <LinkedinLogo size={24} />
                            </a>
                            <a className="hover:text-purple-400" href="mailto:naelemsilva13@gmail.com" target="_blank">
                                <Envelope size={24} />
                            </a>
                        </div>
                    </section>
                </section>
            </div>    
        </div>
    )
}