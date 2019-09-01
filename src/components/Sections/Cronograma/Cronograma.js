import React, {useState, useEffect} from 'react';
import {Element} from 'react-scroll';

import './Cronograma.scss';
import CronogramaHeader from './CronogramaHeader/CronogramaHeader';
import CronogramaDia from './CronogramaDia/CronogramaDia';

import femaleThumb from 'assets/images/thumbs/female1.png';
import maleThumb from 'assets/images/thumbs/male1.png';

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
                            inicio: '07:45',
                            fim: '08:30'
                        }
                    }, {
                        titulo: 'Abertura',
                        horario: {
                            inicio: '08:30',
                            fim: '09:00'
                        }
                    }, {
                        titulo: 'Palestra 1',
                        horario: {
                            inicio: '09:00',
                            fim: '10:15'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Palestrante 1',
                            cargo: 'Cargo palestrante 1',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Palestra 2',
                        horario: {
                            inicio: '10:00',
                            fim: '10:50'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Palestrante 2',
                            cargo: 'Cargo palestrantre 2',
                            img: femaleThumb
                        }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '10:55',
                            fim: '11:15'
                        }
                    }, {
                        titulo: 'Oficina',
                        horario: {
                            inicio: '09:00',
                            fim: '10:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Gabriel Azambuja',
                            cargo: 'Fotográfo',
                            img: femaleThumb
                        }
                    }, {
                        titulo: 'Credenciamento',
                        horario: {
                            inicio: '13:00',
                            fim: '13:45'
                        }
                    }, {
                        titulo: 'Palestra 3',
                        horario: {
                            inicio: '14:00',
                            fim: '15:00'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Palestrante 3',
                            cargo: 'Cargo Palestrante 3',
                            img: femaleThumb
                        }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '15:10',
                            fim: '15:40'
                        }
                    }, {
                        titulo: 'Oficina 2',
                        horario: {
                            inicio: '15:40',
                            fim: '18:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Gabriel Azambuja',
                            cargo: 'Fotógrafo',
                            img: maleThumb
                        }
                    }, 
                ]
            },
            // Dia 2,
            {
                atividades: [
                    {
                        titulo: 'Credenciamento',
                        horario: {
                            inicio: '07:45',
                            fim: '08:30'
                        }
                    }, {
                        titulo: 'Abertura',
                        horario: {
                            inicio: '08:30',
                            fim: '09:00'
                        }
                    }, {
                        titulo: 'Palestra 1',
                        horario: {
                            inicio: '09:00',
                            fim: '10:15'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Palestrante 1',
                            cargo: 'Cargo palestrante 1',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Palestra 2',
                        horario: {
                            inicio: '10:00',
                            fim: '10:50'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Palestrante 2',
                            cargo: 'Cargo palestrantre 2',
                            img: femaleThumb
                        }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '10:55',
                            fim: '11:15'
                        }
                    }, {
                        titulo: 'Oficina',
                        horario: {
                            inicio: '09:00',
                            fim: '10:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Gabriel Azambuja',
                            cargo: 'Fotográfo',
                            img: femaleThumb
                        }
                    }, {
                        titulo: 'Credenciamento',
                        horario: {
                            inicio: '13:00',
                            fim: '13:45'
                        }
                    }, {
                        titulo: 'Palestra 3',
                        horario: {
                            inicio: '14:00',
                            fim: '15:00'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Palestrante 3',
                            cargo: 'Cargo Palestrante 3',
                            img: femaleThumb
                        }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '15:10',
                            fim: '15:40'
                        }
                    }, {
                        titulo: 'Oficina 2',
                        horario: {
                            inicio: '15:40',
                            fim: '18:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Gabriel Azambuja',
                            cargo: 'Fotógrafo',
                            img: maleThumb
                        }
                    }, 
                ]
            },

            // Dia 3
            {
                atividades: [
                    {
                        titulo: 'Credenciamento',
                        horario: {
                            inicio: '07:45',
                            fim: '08:30'
                        }
                    }, {
                        titulo: 'Abertura',
                        horario: {
                            inicio: '08:30',
                            fim: '09:00'
                        }
                    }, {
                        titulo: 'Palestra 1',
                        horario: {
                            inicio: '09:00',
                            fim: '10:15'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Palestrante 1',
                            cargo: 'Cargo palestrante 1',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Palestra 2',
                        horario: {
                            inicio: '10:00',
                            fim: '10:50'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Palestrante 2',
                            cargo: 'Cargo palestrantre 2',
                            img: femaleThumb
                        }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '10:55',
                            fim: '11:15'
                        }
                    }, {
                        titulo: 'Oficina',
                        horario: {
                            inicio: '09:00',
                            fim: '10:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Gabriel Azambuja',
                            cargo: 'Fotográfo',
                            img: femaleThumb
                        }
                    }, {
                        titulo: 'Credenciamento',
                        horario: {
                            inicio: '13:00',
                            fim: '13:45'
                        }
                    }, {
                        titulo: 'Palestra 3',
                        horario: {
                            inicio: '14:00',
                            fim: '15:00'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Palestrante 3',
                            cargo: 'Cargo Palestrante 3',
                            img: femaleThumb
                        }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '15:10',
                            fim: '15:40'
                        }
                    }, {
                        titulo: 'Oficina 2',
                        horario: {
                            inicio: '15:40',
                            fim: '18:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Gabriel Azambuja',
                            cargo: 'Fotógrafo',
                            img: maleThumb
                        }
                    }, 
                ]
            }
        ])
    }, []);

    return (
        <div
            className={`Cronograma ${props.insideHome
            ? 'spaced'
            : ''}`}>
            <div className="container">
                <CronogramaHeader numeroDias={cronograma.length}/> {cronograma.map((dia, i) => (
                    <Element
                        className="Cronograma__dia__wrapper"
                        name={`cronograma-dia-${i + 1}`}
                        key={`cronograma-dia-${i + 1}`}>
                        <CronogramaDia atividades={dia.atividades} diaNumero={i + 1}/>
                    </Element>
                ))}

            </div>
        </div>
    )
}

export default Cronograma;