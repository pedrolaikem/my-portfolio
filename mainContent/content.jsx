import Github from './imgs/github.png'
import Linkedin from './imgs/linkedin.png'
import fotoCurriculo from './imgs/foto-curriculo.jpg'
import html from './imgs/html.png'
import css from './imgs/css.png'
import js from './imgs/js.png'
import react from './imgs/react.png'
import tailwind from './imgs/tailwindcss.png'
import { useTranslation, Trans } from 'react-i18next'
import { findFlagUrlByNationality } from "country-flags-svg";

const flagUrl = findFlagUrlByNationality("Brazilian")
const flagUrl2 = findFlagUrlByNationality("American")

const lngs = {
    pt: { nativeName: 'Português', img:`${flagUrl}` },
    en: { nativeName: 'English', img:`${flagUrl2}` }
}
//i18nKey="description.footer"

function Content() {
    const { t, i18n } = useTranslation()
   return (
    <div>
        {/* Trading languages button */}
        <div className=' flex flex-col absolute right-1 float-right bg-[#f7f7ff] w-[150px] rounded-lg text-black font-inter font-extrabold ' id="language-swapper">
                {Object.keys(lngs).map((lng) => (
                <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} className="flex items-center justify-center gap-2" type="submit" onClick={() => i18n.changeLanguage(lng)}>
                <img src={lngs[lng].img} alt="" width="30px" height="20px"/> {lngs[lng].nativeName}
                </button>
                ))} 
        </div>
        {/* End Trading Languages Button */}
        {/* Main content */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-screen md:h-screen sm:h-[110vh] place-items-center" >
            <div className='flex flex-col gap-2'>
                <div className='font-inter font-extrabold md:text-[50px] sm:text-[25px] flex'>
                    <h1>Front-End React <br />Developer 
                    </h1>
                    <h1 className='flex gap-3 items-end pb-5 relative sm:right-[70px] sm:top-3 md:right-[130px] md:top-0'>
                        <a href="https://www.linkedin.com/in/pedro-alveslima/" target='blank'><img src={Linkedin} alt="linkedin-icon" className='w-6 items-center hover:bg-blue-400'/></a>
                        <a href="https://github.com/pedrolaikem" target='blank'><img src={Github} alt="github-icon" className='w-6 rounded-[10px] hover:bg-blue-400'/></a>
                    </h1>
                </div>
                {/* Description */}
                <div className='flex flex-col gap-5'>
                    <h2 className='font-inter font-light text-xl sm:text-[19px] text-gray-500'> 
                        <Trans i18nKey="description.aboutMe">Olá, sou o Pedro Henrique. Bacharel em direito. <br />cursando análise e desenvolvimento de sistemas. <br />Utilizo HTML, CSS, JavaScript, React e TailwindCSS.</Trans>
                    </h2>
                </div>
                {/* End description */}
                {/* Technologies */}
                <div className='flex items-center gap-5 w-[100%]'>
                    <div>
                        <h3 className='font-inter font-extrabold text-[25px] sm:text-[16px] text-start'><Trans i18nKey="description.techs">Tecnologias: </Trans></h3>
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
                {/* End technologies */}
            </div> 
            <div id="foto"className='sm:w-[240px] border-black rounded-[15px] border-4'>
                <img src={fotoCurriculo} alt="foto-Pedro" className='rounded-[10px] '/>
            </div>      
        </div>
        {/* End main content */}
    </div>
   ) 
 
} export default Content
