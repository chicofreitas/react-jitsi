import Feature from './Feature'

const Index = () => {
    return (
        <div className='py-5 text-center bg-[#f6f5f8]'>

            <div className='container mx-auto px-40'>

                <h1 className='text-5xl my-10'>Funcionalidades</h1>

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