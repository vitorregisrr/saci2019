import React from 'react';

import './Patrons.scss';
import brand_peruzzo from 'assets/images/brands/peruzzo.png';
import brand_evolve from 'assets/images/brands/evolve.png';
import brand_knn from 'assets/images/brands/knn.png';

const Patrons = (props) => {
    return (
        <section className="Patrons float">
            <div className="container">
                <div className="Patrons__header">
                    <h4 className="Patrons__header__title">
                        Patrons
                    </h4>
                    <h5 className="Patrons__header__subtitle">
                        Quem tornou este evento possível
                    </h5>
                </div>

                <div className="Patrons__list">
                    <a href="/" className="Patrons__list__item">
                        <img src={brand_evolve} alt="Logomarca Evolve"/>
                    </a>

                    <a href="/" className="Patrons__list__item">
                        <img src={brand_knn} alt="Logomarca KNN"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Patrons;