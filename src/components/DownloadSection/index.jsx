import google from "../../assets/google-play-badge-1@2x.png"
const Index = () => {
    return (
        <div className="text-center bg-[#efefef] py-20">
       
            <span className='inline-block h-2 bg-lime-500 w-80 rounded-md'></span>
            
            <h1 className='text-5xl font-bold text-center mb-5'>Baixe nossos aplicativos</h1>
            
            <div className="container max-w-md flex flex-row mx-auto py-10 gap-8 justify-center">
       
                <img src={google} alt="" className="w-36"/>
       
                <img src={google} alt="" className="w-36"/>
       
            </div>
       
        </div>
    )
}

export default Index