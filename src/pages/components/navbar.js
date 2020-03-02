import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import logo_header from "../../images/logo-header.svg";
import '../css/style.css';

import icon_menu from '../../images/icon-menu.svg';

const Nav = () => {
    return (
        <Navbar
            alignLinks="right"
            brand={<img src={logo_header} className="logo_header"></img>}
            menuIcon={<Icon className="menu_icon_header">menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,

                preventScrolling: true,
            }}
        >
            <NavItem className="navItem " href="http://localhost:3000" >
                <li class="active">Home</li>
            </NavItem>
            <NavItem href="#" className="navItem">
                <li>Sobre o Programa</li>
            </NavItem>
            <NavItem href="#" className="navItem">
                <li>Cursos</li>
            </NavItem>
            <NavItem href="#" className="navItem">
                <li>faq</li>
            </NavItem>
            <NavItem href="#"  >
                <li>Contato</li>
            </NavItem>
            <NavItem href="#">
                <li>
                    <a id="espaco_aluno_btn">
                        <img src={icon_menu} width="25px"></img>
                        <p>Expaço do Aluno</p>
                    </a>

                </li>
            </NavItem>
        </Navbar>

    );
}

export default Nav;