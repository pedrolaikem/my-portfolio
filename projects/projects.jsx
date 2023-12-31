import Telas from './imgs/telas.svg'
import Github from './imgs/github.svg'
import Links from './imgs/link.svg'
import { useTranslation, Trans } from 'react-i18next'

function Projects() {
    return (  
        <div className="lg:w-screen lg:h-screen sm:h-[150vh] grid place-items-center gap-[30px]">
            {/* Projects section */}
            {/* Project 1 */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:ml-[80px] lg:space-x-[250px] gap-3">
                {/* Image */}
                <div>
                    <img src={Telas} alt="Telas" className='lg:w-[500px] w-[300px]'/> 
                </div>
                {/* End Image */}
                <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='flex flex-col gap-3'>
                        {/* Title */}
                        <div className='text-center font-bold font-inter md:text-[20px] sm:text-[16px]'>
                            <h1><Trans i18nKey="description.Botafogo1">Re-design do Site do Botafogo F.C</Trans></h1>
                        </div>
                        {/* End title */}
                        {/* Description of the project */}
                        <div>
                            <h2 className='font-inter md:text-[16px] text-gray-500 sm:text-[13px] '><Trans i18nKey="description.Botafogo2">Este projeto envolve a reconstrução completa do site do Botafogo, 
                            aplicando um novo design criado <br />pela equipe composta por mim e minha amiga, Bárbara Oliveira, uma UX designer. 
                            <br />Utilizamos a ferramenta Figma para o design, e o site está sendo implementado com HTML, JavaScript e TailwindCSS.</Trans>
                            </h2>
                        </div>
                        {/* End Description of the project */}
                        <div className='flex justify-center gap-12'>
                            {/* Links */}
                            <div className='flex gap-2 justify-center font-inter text-black font-bold'>
                                <button className='hover:bg-blue-400 rounded-[10px] flex gap-2'>
                                    <a href="https://github.com/pedrolaikem/project-soccer-team "target='blank'>Github</a>
                                    <a href="https://github.com/pedrolaikem/project-soccer-team" target='blank'><i><img src={Github} alt="github-icon"/></i></a>
                                </button>
                            </div>
                            <div className='flex gap-2 justify-center font-inter text-gray-500 font-bold'>
                                <button className='flex gap-2'>
                                    <p><Trans i18nKey="description.Botafogo3">Ao vivo(Indisponível)</Trans></p>
                                    <img src={Links} alt="links-icon" className='img-svg'/>
                                </button>
                            </div>
                        </div >
                         {/* End Links */}
                         {/* Technologies used */}
                        <div className='text-center font-inter text-black font-bold'>
                            <p><Trans i18nKey="description.Botafogo4">Tecnologias: JavaScript e TailwindCSS</Trans></p>
                        </div>
                        {/* End Technologies used */}              
                    </div>
                </div>
            </div>
            {/* End Project 1 */}
            {/* Project 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:mr-[80px] lg:space-x-[250px] gap-3">
                {/* Image */}
                <div>
                    <img src={Telas} alt="Telas" className='lg:w-[500px] w-[300px]'/> 
                </div>
                {/* End Image */}
                <div>      
                    <div className='flex flex-col gap-3'>
                        {/* Title */}
                        <div className='text-center font-bold font-inter md:text-[20px] sm:text-[16px]'>
                            <h1>Bart's English Course</h1>
                        </div>
                        {/* End title */}
                        {/* Description */}
                        <div>
                            <h2 className='font-inter md:text-[16px] text-gray-500 sm:text-[13px] text-start'><Trans i18nKey="description.Bart1">Neste projeto, a ênfase está na criação de um site para <br />um curso de inglês, 
                            com destaque para a landing page e páginas subsequentes.
                            <br />O site, desenvolvido com HTML, CSS e React.JS, apresenta uma experiência simples e direta.</Trans>
                            </h2>
                        </div>
                        {/* End Description */}
                        <div className='flex justify-center gap-12'>
                            {/* Links */}
                            <div className='flex gap-2 justify-center font-inter text-black font-bold'>
                                <button className='hover:bg-blue-400 rounded-[10px] flex gap-2'>
                                    <a href="https://github.com/pedrolaikem/English-course" target='blank'>Github</a>
                                    <a href="https://github.com/pedrolaikem/English-course" target='blank'><i><img src={Github} alt="github-icon" className='hover:bg-blue-400 rounded-[10px]'/></i></a>
                                </button>
                            </div>
                            <div className='flex gap-2 justify-center font-inter text-gray-500 font-bold'>
                                <button className='flex gap-2'>
                                    <p><Trans i18nKey="description.Bart2">Ao vivo(Indisponível)</Trans></p>
                                    <img src={Links} alt="links-icon" className='img-svg'/>
                                </button>
                            </div>
                            {/* End links */}
                        </div>  
                        {/* Technologies used */}
                        <div className='text-center font-inter text-black font-bold'>
                            <p><Trans i18nKey="description.Bart3">Tecnologias: ReactJS</Trans></p>
                        </div>  
                        {/* End Technologies used */}                   
                    </div>
                </div>
            </div>
            {/* End project 2 */}
            {/* End Projects section */}
        </div>
        
    )
} 

export default Projects