import React from 'react';
import Logo from '../../assets/img/logo.png'
import './menu.css'
import Button from '../menu/components/Button'
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="RafaelFlix"/>
            </a>
            <Button as="a" className="ButtonLink" href="">
                Novo vídeo
            </Button>
        </nav>
    );
}
export default Menu;
