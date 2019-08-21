import React from 'react';

import aboutBanner from 'assets/images/backgrounds/about-conf.jpg';
import './About.scss';

const About = (props) => {
    return (
        <section className="About">
            <div className="row">
                <div className="col-lg-6 px-lg-0 d-flex justify-content-center justify-content-lg-end">
                    <div className="About__caption">
                        <h3 className="About__caption__title">
                            Sobre o evento
                        </h3>
                        <p className="About__caption__desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolorum,
                            accusamus accusantium, iure perspiciatis autem veniam provident minus similique
                            sequi deserunt laborum dolores nesciunt facilis temporibus! Architecto velit
                            corporis veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                            saepe, veritatis quae incidunt adipisci officiis.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 px-0">
                    <div className="About__img">
                        <img src={aboutBanner} alt="Mulher palestrando em uma conferência sobre tecnologia"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;