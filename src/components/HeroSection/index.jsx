import play from "../../assets/icon-play@2x.png"
import camera from "../../assets/vector@2x.png"

const Index = () => {
    return (
        <div className="bg-gradient-to-t from-lime-600 to-lime-400 py-20 px-40 text-white grid grid-cols-2 gap-10">

            <div className="px-20 text-left max-w-lg">

                <h1 className="text-6xl font-bold my-8 uppercase">Live Paco</h1>

                <h2 className="text-4xl my-8">A solução de reunião mais descomplicada</h2>

                <div className="text-lg text-white flex gap-5">
        
                    <div className="w-20">
                        <button>
                            <img src={play} alt="Play button" />
                        </button>
                    </div>
        
                    <div>
                        Dê o play e conheça como funciona a Live Paco
                    </div>
        
                </div>

            </div>

            <div className="px-10">
                <h1 className="font-bold text-2xl my-5">Crie aqui a sua sala</h1>

                <input className="placeholder:text-white inline-block my-5 w-full bg-transparent border-b border-white" type="text" name="room" id="room" placeholder="Nome da sala"/>

                <input className="placeholder:text-white inline-block my-5 w-full bg-transparent border-b border-white" type="text" name="history" id="history" placeholder="Histórico de salas"/>

                <button className="border rounded-md border-white w-full my-5 py-4 text-lg">
                    <div className="inline-block">
                        <img src={camera} alt="camera icon" className="mr-2 w-6"/>
                    </div> 
                    Criar sala
                </button>

            </div>
        </div>
    )
}

export default Index