import React from 'react'
import Logo from '../../assets/logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink'

function Menu(){
  return(
    <nav className='Menu'>
      <a>
        <img className='Logo' href={'/'} src={Logo} />
      </a>
      <ButtonLink className='ButtonLink' href='/'>
        Novo Video
      </ButtonLink>
    </nav>
  )
}

export default Menu