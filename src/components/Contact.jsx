export function Contact() {
    //font-inter bg-[url('./assets/coding-bg.jpg')] bg-center bg-cover
    return (
        <div id="contato" className="flex flex-col justify-center items-center py-20 bg-gray-950">
            <div className="border border-bglinear rounded-lg shadow-lg shadow-gray-500/20 p-8 w-80 sm:w-40rem">
                <section>
                    <h1 className="flex justify-center text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 from-20% via-purple-400 via-50% to-purple-200 to-80%">Entre em contato comigo</h1>
                </section>

                <section className="mt-10" >
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
                                className="block w-full rounded-md bg-gray-950 px-3 py-1.5 text-base text-gray-50 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bglinear sm:text-sm/6"
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
                                className="block w-full rounded-md bg-gray-950 px-3 py-1.5 text-base text-gray-50 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bglinear sm:text-sm/6"
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
                            className="block resize-none w-full rounded-md bg-gray-950 px-3 py-1.5 text-base text-gray-50 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
                            defaultValue={''}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button className="px-6 py-2 rounded-md text-base font-medium text-gray-50 bg-bglinear hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out">Enviar</button>
                    </div>
                </section>
            </div>
        </div>
    )
}