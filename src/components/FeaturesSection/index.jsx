import Feature from './Feature'

const Index = () => {
    return (
        <div className='py-20 text-center bg-[#f6f5f8]'>

            <div className='container mx-auto px-40'>
                <span className='inline-block h-2 bg-lime-500 w-80 rounded-md'></span>
                <h1 className='font-bold text-5xl'>Funcionalidades</h1>

                <div className='grid grid-cols-3 gap-32 text-left my-20'>

                    <Feature key={1} />

                    <Feature key={2} />

                    <Feature key={3} />

                    <Feature key={4} />

                    <Feature key={5} />

                    <Feature key={6} />

                </div>
            </div>
            
        </div>
    )
}

export default Index