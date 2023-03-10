    import image from "../../../assets/image-7.png"

const Index = () => {
    return (
        <div className="py-20 px-40 bg-[#f5f6f8] flex flex-row">

            <div className="basis-1/2 text-lg mr-20 px-20">

                <h1 className="text-2xl mb-6 font-bold">Faça reuniões com segurança</h1>

                <p className="my-10">A Live Paco usa as mesmas proteções que a Paco para protejer suas informações e privacidade. 
                    As videoconferências da Live Paco são criptografadas em trânsito, e nossas diversas medidas de segurança são atualizadas continuamente para 
                    proteção adicional.
                </p>

                <a  href="#" className="text-gray-500">Saiba mais sobre segurança e compliance</a>

            </div>

            <div className="basis-1/2 ml-10">
                <img src={image} alt="Meeting screen with lot of people" className="rounded-[30px]"/>
            </div>
        </div>
    )
}

export default Index