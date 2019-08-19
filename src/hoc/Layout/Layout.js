import React from 'react';

import Navbar from '../../components/Sections/Navbar/Navbar';
import Footer from '../../components/Sections/Footer/Footer';

const Layout = props => {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                    {props.children}
            </main>
             <Footer />
        </React.Fragment>
    )

}

export default Layout;