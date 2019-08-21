import React from 'react';

import evolveBrand from 'assets/images/brands/evolve-white.png';
import './Footer.scss';

const Footer = (props) => {
    return (
        <footer className="Footer">
            <div className="container">
                <div className="Footer__copyright">
                    <span>powered with &lt;3 by</span>
                    <a href="https://evolveme.com.br" target="_blank">
                        <img src={evolveBrand} alt="Logo Evolve Studio"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;