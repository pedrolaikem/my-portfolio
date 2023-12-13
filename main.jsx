import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './navbar/menu.jsx'
import Content from './mainContent/content.jsx'
import AboutMe from './about/about.jsx'
import Projects from './projects/projects.jsx'
import Contacts from './contacts/contacts.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <section>
      <Content/>
    </section>
    <section id='sobre'>
      <AboutMe />
    </section>
    <section id='projetos'>
      <Projects />
    </section>
    <section id='contatos'>
      <Contacts />
    </section>
    <footer>
      <p className='font-inter text-center bg-black text-white font-extrabold text-[20px]'>&copy;2023. Todos os direitos reservados.</p>
    </footer>
  </React.StrictMode>
)
