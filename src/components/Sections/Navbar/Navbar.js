import React, {useState} from 'react';
import ReactWOW from 'react-wow';
import {Link, withRouter} from 'react-router-dom';

import saciBrand from 'assets/images/brands/saci2019.png';
import './Navbar.scss';
import NavbarItem from './NavbarItem/NavbarItem';

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

    const navItems = [
        {
            key: 'home',
            label: 'Home',
            insideHome: true,
            scrollTo: 'section-home',
            offset: -80
        },

        {
            key: 'sobre',
            label: 'Sobre',
            insideHome: true,
            scrollTo: 'section-sobre',
            offset: -110
        },

        {
            key: 'cronograma',
            label: 'Cronograma',
            insideHome: true,
            scrollTo: 'section-cronograma',
            offset: -10
        },

        {
            key: 'patrons',
            label: 'Patrons',
            insideHome: true,
            scrollTo: 'section-patrons'
        },
        
        {
            key: 'inscricoes',
            label: 'Inscrições',
            scrollTo: 'section-inscricoes',
            routeTo: '/inscricoes',
            offset: -150
        }
    ]
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
                            { navItems.map( item => 
                                <NavbarItem 
                                    path={props.location.pathname}
                                    {...item}/>
                            )}
                    </ul>
                </div>
            </ReactWOW>
        </nav>
    )
}

export default withRouter(Navbar);