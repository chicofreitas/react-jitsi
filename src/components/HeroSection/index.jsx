const Index = () => {
    return (
        <div className="bg-gradient-to-t from-lime-600 to-lime-400 py-20 px-20 text-white flex flex-row">

            <div className="px-10 text-left">

                <h1 className="text-6xl font-bold my-5">Live Paco</h1>

                <h2 className="text-3xl my-5">A solução de reunião mais descomplicada</h2>

                <div className="text-xl">
                    <button>Play buttom </button> Dê o play e conheça como funciona a Live Paco
                </div>

            </div>

            <div className="px-10">
                <h1 className="font-bold text-2xl my-5">Crie aqui a sua sala</h1>

                <input className="inline-block my-5 w-full bg-transparent border-b border-white" type="text" name="room" id="room" placeholder="Nome da sala"/>

                <input className="inline-block my-5 w-full bg-transparent border-b border-white" type="text" name="history" id="history" placeholder="Histórico de salas"/>

                <button className="border rounded-md border-white text-center w-full my-5 py-4 text-lg">Criar sala</button>
            </div>
        </div>
    )
}

export default Index