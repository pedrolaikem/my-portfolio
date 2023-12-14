import MenuIcon from './img/union.jpeg'
import ArrowDropDownIcon from './img/arrow_dropdown_icon.png'

function Menu() {
    return (
    <nav className='bg-black w-[100%] sticky top-0'>
        <div className="">
            <div className="w-[100%] h-[60px]">
                <div className="flex items-center w-[100%] text-white h-[100%] place-content-between">
                    <div className="pl-6">
                        <a href="/" className="text-white text-lg font-bold">Pedro.dev</a>
                    </div>
                    <div className="text-white font-inter">
                        <ul className="sm:hidden lg:inline pr-6">
                            <li className="inline mr-[20px] hover:bg-white hover:text-black"><a href="/" >Home</a></li>
                            <li className="inline mr-[20px] hover:bg-white hover:text-black"><a href="#sobre">Sobre</a></li>
                            <li className="inline mr-[20px] hover:bg-white hover:text-black"><a href="#projetos">Projetos</a></li>
                            <li className="inline mr-[20px] hover:bg-white hover:text-black"><a href="#contatos">Contatos</a></li>
                        </ul>
                        <div className="hidden sm:block lg:hidden pr-6 decoration-white cursor-pointer" onClick={openMenu}>
                            <button><img src={MenuIcon} alt="Menu Icon" id="menuIcon"/></button>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        <div id='mobilemenu' className='font-inter text-lg bg-black text-white text-center w-[150px] rounded-[1px] h-[190px] absolute right-3 hidden'>
            <ul className="sm:block lg:hidden">
                <li className="pb-6"><a href="/">Home</a></li>
                <li className="pb-6"><a href="#sobre">Sobre</a></li>
                <li className="pb-6"><a href="#projetos">Projetos</a></li>
                <li className=""><a href="#contatos">Contatos</a></li>
            </ul>
        </div>
    </nav>
    )
}



function openMenu() {
    let menuMobile = document.getElementById('mobilemenu')
    let img = document.getElementById('menuIcon')
    let newPos = 'translate-x-[-48px]'
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

    
}
export default Menu