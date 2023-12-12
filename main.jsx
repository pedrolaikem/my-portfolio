import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './navbar/menu.jsx'
import Content from './mainContent/content.jsx'
import AboutMe from './about/about.jsx'



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
      
    </section>
    <section id='contatos'>

    </section>
  </React.StrictMode>
)
