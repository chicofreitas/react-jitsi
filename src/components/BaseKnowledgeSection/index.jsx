import book from "../../assets/material-symbols-menu-book-outline.png"

const Index = () => {
    return (
        <div className="text-center bg-[#efefef] py-20 justify-center">
            
            <h1 className='text-4xl font-bold my-6'>Não encontrou o que estava procurando?</h1>
            
            <p className="text-lg my-2">Acesse nossa base de conhecimento</p>
            
            <button className="rounded-full bg-lime-500 py-2 px-6">
            
                <div className="inline-block place-items-center">
                    <img src={book} alt="icon book" className="mr-2 w-6"/>
                </div>

                Base de conhecimento

            </button>
        </div>
    )
}

export default Index