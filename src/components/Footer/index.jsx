const Index = () => {
    return (
        <div className="bg-[#221f2c] py-20 px-32 flex flex-row">
            <div className="basis-1/3">
                <h2 className="text-bold text-xl text-white">Suporte</h2>
                <div className="text-gray-300">

                    <h3>Whatsapp</h3>
                    <p>+55 11 3230-1682</p>

                    <h3>Telefone</h3>
                    <p>0800 088 8088</p>
                </div>

            </div>

            <div className="basis-1/3">

                <h2 className="text-bold text-xl text-white">Fale conosco</h2>

                <div className="text-gray-300">
                    <p>suporte@livepaco.com.br</p>
                </div>

            </div>

            <div className="basis-1/3">
                <h2 className="text-bold text-xl text-white">Legal</h2>
                <div className="text-gray-300">
                    <p><a href="#">Termos e políticas</a></p>
                    <a href="">Regras gerais LGPD</a>
                </div>
            </div>
        </div>
    )
}

export default Index