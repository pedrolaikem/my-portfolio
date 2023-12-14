import Menu from './navbar/menu.jsx'
import Content from './mainContent/content.jsx'
import AboutMe from './about/about.jsx'
import Projects from './projects/projects.jsx'
import Contacts from './contacts/contacts.jsx'

function App (){
    return (
    <div>
        <Menu />
        <div className='sm: px-3 lg:px-0'>
            <section className='overflow-hidden'>
                <Content/>
            </section>
            <section id='sobre' className='overflow-hidden transition-transform ease-in-out duration-75'>
                <AboutMe />
            </section>
            <section id='projetos' className='overflow-hidden '>
                <Projects />
            </section>
            <section id='contatos' className='overflow-hidden '>
                <Contacts />
            </section>
        </div>
        <footer>
            <p className='font-inter text-center bg-black text-white font-extrabold text-[20px]'>&copy;2023. Todos os direitos reservados.</p>
        </footer>
    </div>
    )
}

export default App 