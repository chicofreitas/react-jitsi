import ball from "../../assets/icon-ionic-ios-help-buoy.png"
import mail from "../../assets/icon-material-mail-outline.png"
import legal from "../../assets/icon-feather-file-text.png"

const Index = () => {
    return (
        <div className="bg-[#221f2c] py-20 px-32 flex flex-row">
            <div className="basis-1/3">
                <h2 className="text-bold text-xl text-white mb-6">
                    <img src={ball} alt=""  className="inline mr-4"/>
                    Suporte
                </h2>
                <div className="text-gray-300">
                    <div className="mb-2">
                        <h3 className="font-bold mb-2">Whatsapp</h3>
                        <p>+55 11 3230-1682</p>
                    </div>
                    
                    <div className="mb-2">
                        
                        <h3 className="font-bold mb-2">Telefone</h3>
                        <p>0800 088 8088</p>
                    </div>
                </div>

            </div>

            <div className="basis-1/3">

                <div className="text-bold text-xl text-white mb-6">
                    <img src={mail} alt="" className="inline mr-4"/>
                    Fale conosco
                </div>

                <div className="text-gray-300">
                    <p>suporte@livepaco.com.br</p>
                </div>

            </div>

            <div className="basis-1/3">
                <div className="text-bold text-xl text-white mb-6">
                    <img src={legal} alt=""  className="inline mr-4"/>
                    Legal
                </div>
                <div className="text-gray-300">
                    <p className="mb-6 text-lg"><a href="#">Termos e políticas</a></p>
                    <p><a href="">Regras gerais LGPD</a></p>
                </div>
            </div>
        </div>
    )
}

export default Index