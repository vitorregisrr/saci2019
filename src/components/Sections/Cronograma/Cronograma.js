import React from 'react';

import './Cronograma.scss';
import CronogramaHeader from './CronogramaHeader/CronogramaHeader';

const SpeakerList = (props) => {
    return (
        <div className="Cronograma">
            <div className="container">
                <CronogramaHeader />
            </div>
        </div>
    )
}

export default SpeakerList;