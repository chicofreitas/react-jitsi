import logo from "../../assets/vector.png"
const Index = () => {
    return (
        <div className="bg-[#221f2c] py-10 px-32 text-center text-white border-t border-lime-300">
            <div className="font-[Montserrat] my-4">
                <h3>CNPJ: 28.633.929/0001-77 CICERONE VOX</h3>
            </div>

            <div className="justify-center">
                <span>&#169;</span> 2023 <img src={logo} alt="Logo livepaco" className="inline mx-3"/> Todos os direitos reservados
            </div>

        </div>
    )
}

export default Index