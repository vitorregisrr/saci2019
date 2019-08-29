import React from 'react';

import styles from './Spinner.module.scss';

const Spinner = (props) => {
    return(
        <div style={{ 
            height: props.fullscreen ? '50vh' : 'unset', 
            width: props.fullscreen ? '100vw' : 'unset' 
        }}>
            <div className={styles.Spinner}></div>
        </div>
    )
}

export default Spinner;