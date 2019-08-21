import React, {useState} from 'react';
import ReactWOW from 'react-wow';

import './HomeHero.scss';
import homeHeroBg from 'assets/images/backgrounds/home-hero.png';
import Spinner from 'components/UI/Spinner/Spinner';

const HomeHero = (props) => {
    const [isLoading,
        setLoading] = useState(true);
    return (
        <section className="HomeHero">
            {isLoading
                ? <Spinner
                        style={{
                        'min-height': '100vh'
                    }}/>
                : <React.Fragment>

                    <div className="HomeHero__bg">
                        <img
                            src={homeHeroBg}
                            alt="Astronautas da Nasa em background azul"
                            onLoad={() => setLoading(false)}/>
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

                                    <span className="scroll-down">Scroll Down</span>
                                </div>
                            </ReactWOW>

                            <ReactWOW animation='fadeInUp'>
                                <div className="HomeHero__shapes__item circle">
                                    <h5 className="title">
                                        SACI IFsul Campus Bagé
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
                </React.Fragment>
            }
        </section>
    )
}

export default HomeHero;