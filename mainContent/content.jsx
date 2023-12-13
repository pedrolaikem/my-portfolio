import Github from './imgs/github.png'
import Linkedin from './imgs/linkedin.png'
import fotoCurriculo from './imgs/foto-curriculo.jpg'
import html from './imgs/html.png'
import css from './imgs/css.png'
import js from './imgs/js.png'
import react from './imgs/react.png'
import tailwind from './imgs/tailwindcss.png'

function Content() {
   return (
    <div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-screen h-screen place-items-center" >
            <div className='flex flex-col gap-2'>
                <div className='font-inter font-extrabold md:text-[50px] sm:text-[25px] flex'>
                    <h1>Front-End React <br />Developer 
                    </h1>
                    <h1 className='flex gap-3 items-end pb-5 relative sm:right-[70px] sm:top-3 md:right-[130px] md:top-0'>
                        <a href="https://www.linkedin.com/in/pedro-alveslima/" target='blank'><img src={Linkedin} alt="linkedin-icon" className='w-6 items-center'/></a>
                        <a href="https://github.com/pedrolaikem" target='blank'><img src={Github} alt="github-icon" className='w-6'/></a>
                    </h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-inter font-light text-xl sm:text-[19px] text-gray-500'> 
                        Olá, sou o Pedro Henrique. Bacharel em direito. <br />cursando análise e desenvolvimento de sistemas.
                    </h2>
                <div className='flex items-center gap-5 w-[100%]'>
                    <div>
                        <h3 className='font-inter font-extrabold text-[25px] sm:text-[16px] text-start'>Tecnologias: </h3>
                    </div>
                    <div>
                        <i><img src={html} alt="html-icon" className='md:w-[40px] sm:w-[25px] '/></i>
                    </div>
                    <div>
                        <i><img src={css} alt="css-icon" className='md:w-[40px] sm:w-[25px] '/></i>
                    </div>
                    <div>
                        <i><img src={js} alt="javascript-icon" className='md:w-[40px] sm:w-[25px] '/></i>
                    </div>
                    <div>
                        <i><img src={react} alt="react-icon" className='md:w-[40px] sm:w-[25px] '/></i>
                    </div>
                    <div>
                        <i><img src={tailwind} alt="tailwindcss-icon" className='md:w-[40px] sm:w-[25px] '/></i>
                    </div>
                </div>         
                </div>
            </div> 
            <div id="foto"className='sm:w-[240px] border-black rounded-[15px] border-4'>
                <img src={fotoCurriculo} alt="foto-Pedro" className='rounded-[10px] '/>
            </div> 
            
        </div>
    </div>
   ) 
 
} export default Content
