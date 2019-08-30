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
            {
                atividades: [
                    {
                        titulo: 'Credenciamento',
                        horario: {
                            inicio: '08:00',
                            fim: '08:30'
                        }
                    },
                    {
                        titulo: 'Em breve!',
                        horario: {
                            inicio: '08:30',
                            fim: '09:15'
                        },
                        tipo: 'Vazio'
                    },
                    {
                        titulo: 'Agilidade no desenvolvimento com Agile e Scrum',
                        horario: {
                            inicio: '09:30',
                            fim: '10:15'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Fulana de tal',
                            cargo: 'Gerente de projetos na Evolve'
                        }
                    },
                    {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '10:30',
                            fim: '10:50'
                        }
                    },
    
                    {
                        titulo: 'Em breve!',
                        horario: {
                            inicio: '11:00',
                            fim: '11:45'
                        },
                        tipo: 'Vazio'
                    },
                ],    
            },
            // Dia 2,
            {},

            // Dia 3
            {}
        ])
    }, []);

    return (
        <div className={`Cronograma ${props.insideHome ? 'spaced' : ''}`}>
            <div className="container">
                <CronogramaHeader 
                    numeroDias={cronograma.length}/> 
                
                {cronograma.map((dia, i) => (
                    <Element className="Cronograma__dia__wrapper" name={`cronograma-dia-${i+1}`} key={`cronograma-dia-${i+1}`}>
                        <CronogramaDia atividades={dia.atividades} diaNumero={i+1}/>
                    </Element>
                ))}

            </div>
        </div>
    )
}

export default Cronograma;