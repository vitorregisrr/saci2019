import React from 'react';

import aboutBanner from 'assets/images/backgrounds/about-conf.jpg';
import './About.scss';

const About = (props) => {
    return (
        <section className="About">
            <div className="row">
                <div
                    className="col-lg-6 px-lg-0 d-flex justify-content-center justify-content-lg-end">
                    <div className="About__caption">
                        <h3 className="About__caption__title">
                            Sobre o evento
                        </h3>
                        <hr/>
                        <p className="About__caption__desc">
                            A Semana Acadêmica do Curso Técnico de Informática é um evento anual promovido
                            por alunos e para alunos, que consiste em vários dias de palestras, oficinas e
                            atividades dinâmicas relacionadas a área da informática, com o objetivo de
                            preparar os estudantes para a vida profissional. A SACI VI em especial foi um
                            grande desafio, devido a dificuldade na captação de recursos, ocasionada pelo
                            progressivo corte de verbas. Porém, com todas as dificuldades, conseguimos dar
                            continuidade a esse evento tão importante para a formação acadêmica dos
                            estudantes da área, e preparamos quatro dias cheios de atividades e palestras
                            interessantes e inspiradoras. Contamos com a sua presença!
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 px-0">
                    <div className="About__img">
                        <img
                            src={aboutBanner}
                            alt="Mulher palestrando em uma conferência sobre tecnologia"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;