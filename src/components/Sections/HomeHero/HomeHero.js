import React  from 'react';
import ReactWOW from 'react-wow';
import {Link as ScrollLink} from 'react-scroll';

import './HomeHero.scss';
import homeHeroBg from 'assets/images/backgrounds/home-hero.png';

const HomeHero = (props) => {
    return (
        <section className="HomeHero">
            <div className="HomeHero__bg">
                <img 
                src={homeHeroBg} 
                alt="Astronautas da Nasa em background azul"/>
            </div>

            <div className="HomeHero__content container">
                <div className="HomeHero__shapes float">

                    <ReactWOW animation='fadeInLeft'>
                        <div className="HomeHero__shapes__item triangle">
                            <h4 className="text">Oficinas,<br aria-hidden="true"/>
                                Palestras,<br aria-hidden="true"/>
                                Coffee Break
                                <br aria-hidden="true"/>
                                <strong>E +</strong>
                            </h4>
                        </div>
                    </ReactWOW>

                    <ReactWOW animation='zoomIn'>
                        <div className="HomeHero__shapes__item circles">
                            <h2 className="text">
                                A tecnologia nos levará para o
                                <br aria-hidden="true"/>
                                <span>espaço?</span>
                            </h2>

                            <ScrollLink to="section-sobre" offset={-115} smooth={true} className="scroll-down">Scroll Down</ScrollLink>
                        </div>
                    </ReactWOW>

                    <ReactWOW animation='fadeInUp'>
                        <div className="HomeHero__shapes__item circle">
                            <h5 className="title">
                                25, 26, 27 e 28 de nov.
                            </h5>
                            <h4 className="subtitle">
                                Semana acadêmica do curso Técnico em Informática
                            </h4>
                            <p className="desc">
                                Av. Leonel de Moura Brizola, 250 1 - Bairro Pedra Branca Bagé/RS
                            </p>
                        </div>
                    </ReactWOW>
                </div>

            </div>
        </section>
    )
}

export default HomeHero;