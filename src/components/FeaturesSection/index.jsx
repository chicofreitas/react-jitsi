import Feature from './Feature'

const Index = () => {
    return (
        <div className='py-5 px-32 text-center'>

            <h1 className='text-5xl my-10'>Funcionalidades</h1>

            <div className='grid grid-cols-3 gap-20 text-left my-20'>
                <Feature key={1} />

                <Feature key={2} />

                <Feature key={3} />

                <Feature key={4} />

                <Feature key={5} />

                <Feature key={6} />
            </div>
            
        </div>
    )
}

export default Index