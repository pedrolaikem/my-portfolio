import Menu from './navbar/menu.jsx'
import Content from './mainContent/content.jsx'
import AboutMe from './about/about.jsx'
import Projects from './projects/projects.jsx'
import Contacts from './contacts/contacts.jsx'
import { useTranslation, Trans } from 'react-i18next'
import { findFlagUrlByNationality } from "country-flags-svg";

const flagUrl = findFlagUrlByNationality("Brazilian")
const flagUrl2 = findFlagUrlByNationality("American")

const lngs = {
    pt: { nativeName: 'Português', img:`${flagUrl}` },
    en: { nativeName: 'English', img:`${flagUrl2}` }
}; 

function App (){
    const { t, i18n } = useTranslation()
    return (
    <div>
        <Menu />
        <div className='sm:px-3 lg:px-0'>
            <section className='overflow-hidden'>
                <Content/>
            </section>
            <section id='sobre' className='overflow-hidden transition-transform ease-in-out duration-75'>
                <AboutMe />
            </section>
            <section id='projetos' className='overflow-hidden '>
                <Projects />
                Teste
            </section>
            <section id='contatos' className='overflow-hidden '>
                <Contacts />
            </section>
        </div>
        <footer className='bg-black text-white font-inter text-center  font-extrabold text-[20px]'>
            <Trans i18nKey="description.footer">
                <p>&copy;2023. Todos os direitos reservados.</p>
            </Trans>
        </footer>
    </div>
    )
}

export default App 