import image from "../../../assets/mask-group@2x.png"

const Index = () => {
    return (
        <div className="py-10 px-40 bg-gray-200 flex flex-row">

            <div className="basis-1/2 mr-20 px-20">
                <img src={image} alt="Meeting screen with lot of people" />
            </div>
            
            <div className="basis-1/2 text-lg px-20">

                <h1 className="text-2xl mb-8 font-bold">Faça reuniões com segurança</h1>

                <p>
                    A Live Paco usa as mesmas proteções que a Paco para protejer suas informações e privacidade. 
                    As videoconferências da Live Paco são criptografadas em trânsito, e nossas diversas medidas de segurança são atualizadas continuamente para 
                    proteção adicional.
                </p>

                <span>Saiba mais sobre segurança e compliance</span>

            </div>
        </div>
    )
}

export default Index