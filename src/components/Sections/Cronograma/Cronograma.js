import React, {useState, useEffect} from 'react';
import {Element} from 'react-scroll';

import './Cronograma.scss';
import CronogramaHeader from './CronogramaHeader/CronogramaHeader';
import CronogramaDia from './CronogramaDia/CronogramaDia';

const Cronograma = (props) => {
    const [cronograma,
        setCronograma] = useState([]);

    useEffect(() => {
        setCronograma([
            // Dia 1
            [
                {
                    titulo: 'Agilidade no desenvolvimento com Agile e Scrum',
                    horario: {
                        inicio: '09:15',
                        fim: '09:15'
                    },
                    tipo: 'Palestra',
                    realizador: {
                        nome: 'Fulana de tal',
                        cargo: 'Gerente de projetos na Evolve'
                    }
                }
            ],

            // Dia 2,

            [],

            // Dia 3
            []
        ])
    }, []);

    return (
        <div className="Cronograma">
            <div className="container">
                <CronogramaHeader 
                    numeroDias={cronograma.length}/> 
                
                {cronograma.map((dia, i) => (
                    <Element name={`cronograma-dia-${i}`}>
                        <CronogramaDia atividades={dia.atividades}/>
                    </Element>
                ))};

            </div>
        </div>
    )
}

export default Cronograma;