import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Link as ScrollLink, scroller} from "react-scroll";

const NavbarItem = (props) => {

    const scrollWithDelay = (name, offset) => {
        setTimeout((name, offset) => {
            scroller.scrollTo(name, {
                duration: 800,
                smooth: true,
                offset: offset || 0
            });
        }, 400, name, offset);
    };

    return (
        <li>
            {props.insideHome
                ? (props.path === '/'
                    ? <ScrollLink
                            spy={true}
                            smooth={true}
                            offset={props.offset || 0}
                            to={props.scrollTo}
                            className="Navbar__links__item">
                            {props.label}
                        </ScrollLink>
                    : <Link
                        to="/"
                        onClick={() => scrollWithDelay(props.scrollTo, props.offset)}
                        className="Navbar__links__item">
                        {props.label}
                    </Link>)
                : <NavLink
                    to={props.routeTo}
                    onClick={() => scrollWithDelay(props.scrollTo, props.offset)}
                    className={`Navbar__links__item ${props.routeTo === '/inscricoes'
                    ? 'inscricoes'
                    : ''}`}>
                    {props.label}{props.routeTo === '/inscricoes' ? <span>-></span> : ''}
                </NavLink>
}
        </li>
    )
}

export default NavbarItem;