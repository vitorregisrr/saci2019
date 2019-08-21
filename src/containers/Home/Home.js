import React from 'react';
import { Element } from 'react-scroll';

import HomeHero from 'components/Sections/HomeHero/HomeHero';
import About from 'components/Sections/About/About';
import Cronograma from 'components/Sections/Cronograma/Cronograma';

const Home = (props) => {
    return (
        <div>
            <Element name="section-home" className="element">
                <HomeHero></HomeHero>
            </Element>

            <Element name="section-sobre" className="element">
                <About></About>
            </Element>

            <Element name="section-cronograma" className="element">
                <Cronograma></Cronograma>
            </Element>

            <Element name="section-patrons" className="element">
                <Cronograma></Cronograma>
            </Element>
        </div>
    )
}

export default Home;