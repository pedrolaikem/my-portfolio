import Telas from './imgs/telas.svg'
import Github from './imgs/github.svg'
import Links from './imgs/link.svg'

function Projects() {
    return (  
        <div className="w-screen h-screen grid place-items-center gap-[30px]">
            {/* Project 1 */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:ml-[80px] lg:space-x-[250px] gap-3">
                <div>
                    <img src={Telas} alt="Telas" className='lg:w-[500px] w-[300px]'/> 
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-center font-bold font-inter md:text-[20px] sm:text-[16px]'>
                            <h1>Re-design do Site do Botafogo F.C</h1>
                        </div>
                        <div>
                            <h2 className='font-inter md:text-[16px] text-gray-500 sm:text-[13px] '>Este projeto envolve a reconstrução completa do site do Botafogo, 
                            aplicando um novo design criado <br />pela equipe composta por mim e minha amiga, Bárbara Oliveira, uma UX designer. 
                            <br />Utilizamos a ferramenta Figma para o design, e o site foi implementado com HTML, JavaScript e TailwindCSS.
                            </h2>
                        </div>
                        <div className='flex justify-center gap-12'>
                            <div className='flex gap-2 justify-center font-inter text-black font-bold'>
                                <a href="https://github.com/pedrolaikem/project-soccer-team">Github</a>
                                <a href="https://github.com/pedrolaikem/project-soccer-team"><i><img src={Github} alt="github-icon" /></i></a>
                            </div>
                            <div className='flex gap-2 justify-center font-inter text-gray-500 font-bold'>
                                <button className='flex gap-2'>
                                    <p>Ao vivo(Indisponível)</p>
                                    <img src={Links} alt="links-icon" className='img-svg'/>
                                </button>
                            </div>
                        </div >
                        <div className='text-center font-inter text-black font-bold'>
                            <p>Tecnologias: JavaScript e TailwindCSS</p>
                        </div>                
                    </div>
                </div>
            </div>
            {/* Project 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:mr-[80px] lg:space-x-[250px] gap-3">
                <div>
                    <img src={Telas} alt="Telas" className='lg:w-[500px] w-[300px]'/> 
                </div>
                <div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-center font-bold font-inter md:text-[20px] sm:text-[16px]'>
                            <h1>Bart's English Course</h1>
                        </div>
                        <div>
                            <h2 className='font-inter md:text-[16px] text-gray-500 sm:text-[13px] text-start'>Neste projeto, a ênfase está na criação de um site para <br />um curso de inglês, 
                            com destaque para a landing page e páginas subsequentes.
                            <br />O site, desenvolvido com HTML, CSS e React.JS, apresenta uma experiência simples e direta.
                            </h2>
                        </div>
                        <div className='flex justify-center gap-12'>
                            <div className='flex gap-2 justify-center font-inter text-black font-bold'>
                                <a href="https://github.com/pedrolaikem/English-course">Github</a>
                                <a href="https://github.com/pedrolaikem/English-course"><i><img src={Github} alt="github-icon" /></i></a>
                            </div>
                            <div className='flex gap-2 justify-center font-inter text-gray-500 font-bold'>
                                <button className='flex gap-2'>
                                    <p>Ao vivo(Indisponível)</p>
                                    <img src={Links} alt="links-icon" className='img-svg'/>
                                </button>
                            </div>
                        </div>  
                        <div className='text-center font-inter text-black font-bold'>
                            <p>Tecnologias: ReactJS</p>
                        </div>                     
                    </div>
                </div>
            </div>
        </div>
        
    )
} 

export default Projects