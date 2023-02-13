import paco from "../../../assets/paco.png"

const Index = () => {
    return (
        <div className="bg-[#221f2c] text-white text-center content-center py-3 px-40 relative">
            <div className="px-32">
                <img src={paco} alt="Paco logo" className="absolute -top-6"/>

                <nav className="content-center flex gap-5 w-36 mx-auto text-lg">
                    <a href="#">Conheça</a>
                    <a href="#">Downloads</a>
                </nav>
            </div>
        </div>
    )
}

export default Index