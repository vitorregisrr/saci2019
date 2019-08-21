import React, {useState, useEffect} from 'react';
import ReactWOW from 'react-wow';
import {NavLink, Link} from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

import saciBrand from 'assets/images/brands/saci2019.png';
import './Navbar.scss';

const Navbar = (props) => {
    const [isSticky, setSticky] = useState(false);
    const [isNavToggled, toggleNav] = useState(false);
    
    const watchSticky = () => {
        function handleScroll() {
            if (window.scrollY > 60) {
                if(isSticky === false){
                    setSticky(true);
                }
        
            }else{
                if(isSticky === true){
                    setSticky(false);
                }
            }
          }
          
          window.addEventListener('scroll', handleScroll);
    };
    watchSticky();

    return (
        <nav className={`Navbar ${isSticky ? 'sticky' : ''}`}>
            <ReactWOW animation='fadeInDown'>
                <div className="Navbar__content container">
                    <Link to="/">
                        <img src={saciBrand}  className="Navbar__brand" alt="Logo SACI 2019"/>
                    </Link>

                    <button className="btn-transparent Navbar__toggler" aria-expanded={isNavToggled} onClick={ () => toggleNav(!isNavToggled)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`Navbar__links ${isNavToggled ? 'active' : ''}`} aria-hidden={!isNavToggled} onClick={() => toggleNav(false)}>
                        <li key="home">
                            <ScrollLink 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            to="section-home"
                            className="Navbar__links__item">
                                Home
                            </ScrollLink>
                        </li>

                        <li key="sobre">
                            <ScrollLink 
                            activeClass="active" 
                            spy={true} smooth={true} 
                            to="section-sobre" 
                            className="Navbar__links__item">
                                Sobre
                            </ScrollLink>
                        </li>

                        <li key="cronograma">
                            <ScrollLink 
                            activeClass="active" 
                            spy={true} 
                            smooth={true}
                            to="section-cronograma" 
                            className="Navbar__links__item">
                                Cronograma
                            </ScrollLink>
                        </li>

                        <li key="patrons">
                            <NavLink exact to="section-patrons" className="Navbar__links__item">
                                Patrons
                            </NavLink>
                        </li>

                        <li key="inscricoes">
                            <NavLink exact to="/inscricoes" className="Navbar__links__item inscricoes">
                                Inscrições <span aria-hidden="true">-></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </ReactWOW>
        </nav>
    )
}

export default Navbar;