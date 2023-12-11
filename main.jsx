import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './navbar/menu.jsx'
import Content from './mainContent/content.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <section>
      <Content/>
    </section>
    <section className='z-1'>
      <div className='w-screen h-screen bg-blue-500'>
      </div>
    </section>
    <section>
      
    </section>
  </React.StrictMode>
)
