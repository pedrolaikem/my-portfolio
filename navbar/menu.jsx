import MenuIcon from './img/union.jpeg'
import ArrowDropDownIcon from './img/arrow_dropdown_icon.png'
import ArrowDropBlack from './img/dropdownblack.svg'
import { useTranslation, Trans } from 'react-i18next'
import { findFlagUrlByNationality } from "country-flags-svg";

const flagUrl = findFlagUrlByNationality("Brazilian")
const flagUrl2 = findFlagUrlByNationality("American")

const lngs = {
    pt: { nativeName: 'Português', img:`${flagUrl}` },
    en: { nativeName: 'English', img:`${flagUrl2}` }
}; 

function Menu() {
    const { t, i18n } = useTranslation()
    return (
    <nav className='bg-black w-[100%] sticky z-[999] top-0'>
        <div>
            {/* Navbar */}
            <div className="w-[100%] h-[60px]">
                <div className="flex items-center w-[100%] text-white h-[100%] place-content-between">
                    <div className="pl-6">
                        <a href="/" className="text-white text-lg font-bold">Pedro.dev</a>
                    </div>
                    <div className="text-white font-inter">
                        <ul className="sm:hidden lg:inline pr-6">
                            <li className="inline mr-[20px] hover:bg-white hover:text-black"><a href="/" >Home</a></li>
                            <li className="inline mr-[20px] hover:bg-white hover:text-black"><a href="#sobre"><Trans i18nKey="description.menu1">Sobre</Trans></a></li>
                            <li className="inline mr-[20px] hover:bg-white hover:text-black"><a href="#projetos"><Trans i18nKey="description.menu2">Projetos</Trans></a></li>
                            <li className="inline mr-[20px] hover:bg-white hover:text-black"><a href="#contatos"><Trans i18nKey="description.menu3">Contato</Trans></a></li>
                        </ul>
                        <div className="hidden sm:block lg:hidden pr-6 decoration-white cursor-pointer" onClick={openMenu}>
                            <button><img src={MenuIcon} alt="Menu Icon" id="menuIcon"/></button>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        {/* End List */}
        {/* Hidden list */}
        <div id='mobilemenu' className='font-inter text-lg bg-black text-white text-center w-[150px] rounded-[1px] h-[190px] absolute z-[999] right-3 hidden'>
            <ul className="sm:block lg:hidden">
                <li className="pb-6"><a href="/">Home</a></li>
                <li className="pb-6"><a href="#sobre"><Trans i18nKey="description.menu1">Sobre</Trans></a></li>
                <li className="pb-6"><a href="#projetos"><Trans i18nKey="description.menu2">Projetos</Trans></a></li>
                <li className=""><a href="#contatos"><Trans i18nKey="description.menu3">Contato</Trans></a></li>
            </ul>
        {/* End Hidden List */}
        {/* End Navbar */}
        </div> 
    </nav>
    )
}
  

function openMenu() {

    // Variables

    let menuMobile = document.getElementById('mobilemenu')
    let img = document.getElementById('menuIcon')
    let newPos = 'translate-x-[-48px]'
    let lang = document.querySelector('#language-swapper')

    // Code
    
    //If hidden menu contains the class "hidden", the class will be removed. If it doesn't have it, it will add it.
    if (menuMobile.classList.contains('hidden')) {
        menuMobile.classList.remove('hidden')
        img.src = `${ArrowDropDownIcon}`
        img.style.width = `26px`
        img.style.height = `15px`
        img.classList.add(newPos)
    } else {
        menuMobile.classList.add('hidden')
        document.getElementById('menuIcon').src = `${MenuIcon}`
        img.classList.remove(newPos)
    }
    
    if (lang.classList.contains('hidden')) {
        lang.classList.remove('hidden')
    } else {
        lang.classList.add('hidden')
    }
    
}
export default Menu