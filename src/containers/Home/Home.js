import React from 'react';
import { Element } from 'react-scroll';

import HomeHero from 'components/Sections/HomeHero/HomeHero';
import About from 'components/Sections/About/About';

const Home = (props) => {
    return (
        <div>
            <Element name="section-home" className="element">
                <HomeHero></HomeHero>
            </Element>

            <Element name="section-sobre" className="element">
                <About></About>
            </Element>
        </div>
    )
}

export default Home;