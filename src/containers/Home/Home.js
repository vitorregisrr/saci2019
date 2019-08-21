import React from 'react';
import { Element } from 'react-scroll';

import HomeHero from 'components/Sections/HomeHero/HomeHero';

const Home = (props) => {
    return (
        <div>
            <Element name="section-home" className="element">
                <HomeHero></HomeHero>
            </Element>
        </div>
    )
}

export default Home;