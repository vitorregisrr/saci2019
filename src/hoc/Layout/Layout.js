import React from 'react';

import Navbar from '../../components/Sections/Navbar';
import Footer from '../../components/Sections/Footer';

const Layout = props => {
    return (
        <Aux>
            <Navbar />
            <main>
                    {props.children}
            </main>
             <Footer />
        </Aux>
    )

}

export default Layout;