import React, {useState} from 'react';
import ReactWOW from 'react-wow';
import {NavLink, Link, withRouter} from 'react-router-dom';
import {Link as ScrollLink, scroller} from "react-scroll";

import saciBrand from 'assets/images/brands/saci2019.png';
import './Navbar.scss';

const Navbar = (props) => {
    const [isSticky,
        setSticky] = useState(false);
    const [isNavToggled,
        toggleNav] = useState(false);

    const watchSticky = () => {
        function handleScroll() {
            if (window.scrollY > 60) {
                if (isSticky === false) {
                    setSticky(true);
                }

            } else {
                if (isSticky === true) {
                    setSticky(false);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
    };
    watchSticky();

    const scrollAfterRoute = (name, offset) => {
        setTimeout((name) => {
            scroller.scrollTo(name, {
                duration: 800,
                smooth: true,
                offset: offset || 0
            });
        }, 400, name)
    };

    return (
        <nav className={`Navbar ${isSticky
            ? 'sticky'
            : ''}`}>
            <ReactWOW animation='fadeInDown'>
                <div className="Navbar__content container">
                    <Link to="/">
                        <img src={saciBrand} className="Navbar__brand" alt="Logo SACI 2019"/>
                    </Link>

                    <button
                        className="btn-transparent Navbar__toggler"
                        aria-expanded={isNavToggled}
                        onClick={() => toggleNav(!isNavToggled)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul
                        className={`Navbar__links ${isNavToggled
                        ? 'active'
                        : ''}`}
                        aria-hidden={!isNavToggled}
                        onMouseDown={() => setTimeout(() => toggleNav(false),100)}>
                            
                        <li key="home">
                            {props.location.pathname === '/'
                                ? <ScrollLink
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-130}
                                        to="section-home"
                                        className="Navbar__links__item">
                                        Home
                                    </ScrollLink>
                                : <Link 
                                    exact 
                                    to="/" 
                                    className="Navbar__links__item"
                                    onClick={() => scrollAfterRoute('section-home', -80)}>
                                    Home
                                </Link>
                            }
                        </li>

                        <li key="sobre">
                        {props.location.pathname === '/'
                                ? <ScrollLink
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-120}
                                        to="section-sobre"
                                        className="Navbar__links__item">
                                        Sobre
                                    </ScrollLink>
                                : <Link 
                                    exact 
                                    to="/" 
                                    className="Navbar__links__item"
                                    onClick={() => scrollAfterRoute('section-sobre', -100)}>
                                    Sobre
                                </Link>
                            }
                        </li>

                        <li key="cronograma">
                            {props.location.pathname === '/'
                                ? <ScrollLink
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-40}
                                        to="section-cronograma"
                                        className="Navbar__links__item">
                                        Cronograma
                                    </ScrollLink>
                                : <Link exact to="/cronograma" className="Navbar__links__item">
                                    Cronograma
                                </Link>
                            }
                        </li>

                        <li key="patrons">
                            {props.location.pathname === '/'
                                ? <ScrollLink
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        to="section-patrons"
                                        className="Navbar__links__item">
                                        Patrons
                                    </ScrollLink>
                                : <Link
                                    to="/"
                                    onClick={() => scrollAfterRoute('section-patrons')}
                                    className="Navbar__links__item">
                                    Patrons
                                </Link>
                            }
                        </li>

                        <li key="inscricoes">
                            <NavLink exact to="/inscricoes" className="Navbar__links__item inscricoes">
                                Inscrições
                                <span aria-hidden="true">-></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </ReactWOW>
        </nav>
    )
}

export default withRouter(Navbar);