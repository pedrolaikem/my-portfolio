import telas from './imgs/telas.svg'

function Projects() {
    return(
        <div>
            <div className="w-screen h-screen grid place-items-center gap-12">
                <div className="container flex justify-center mr-[80px] space-x-[250px]">
                    <div>
                        <img src={telas} alt="Telas" className='w-[500px]'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='font-extrabold font-inter md:text-[25px] sm:text-[20px]'>Título</h1>
                        <h2 className='font-inter md:text-[16px] text-gray-500 sm:text-[13px]'>Descrição do projeto</h2>
                    </div>
                </div>
                <div className="container flex justify-center mr-[80px] space-x-[250px]">
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='font-extrabold font-inter md:text-[25px] sm:text-[20px]'>Título</h1>
                        <h2 className='font-inter md:text-[16px] text-gray-500 sm:text-[13px]'>Descrição do projeto</h2>
                    </div>
                    <div>
                        <img src={telas} alt="Telas" className='w-[500px]'/>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Projects