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
                        titulo: 'Computação distrubuida e internet da coisas',
                        horario: {
                            inicio: '09:00',
                            fim: '09:50'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Leandro',
                            cargo: '',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Design e UX: Interfaces intuitivas e experência do usuário',
                        horario: {
                            inicio: '10:00',
                            fim: '10:50'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Giovani Tier',
                            cargo: 'UI & UX Designer',
                            img: 'https://media.licdn.com/dms/image/C4D03AQEDY14TmFNJVA/profile-displayphoto-shrin' +
                                    'k_800_800/0?e=1573084800&v=beta&t=Y99JTqfHH1FoIuT46sQ05oRUdpYaKNilwwPMcgjErko'
                        }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '10:55',
                            fim: '11:15'
                        }
                    }, {
                        titulo: 'Arduíno',
                        horario: {
                            inicio: '11:15',
                            fim: '12:30'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Leandro',
                            cargo: '',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Práticas no terminal do Linux',
                        horario: {
                            inicio: '11:15',
                            fim: '12:30'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Ricardo',
                            cargo: '',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Credenciamento',
                        horario: {
                            inicio: '13:00',
                            fim: '13:45'
                        }
                    }, {
                        titulo: 'Informática e Astronomia',
                        horario: {
                            inicio: '14:00',
                            fim: '15:00'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Guilherme',
                            cargo: 'Planetário Unipampa',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '15:10',
                            fim: '15:40'
                        }
                    }, {
                        titulo: 'Praticando Astrofotografia',
                        horario: {
                            inicio: '15:40',
                            fim: '18:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Gabriel Azambuja',
                            cargo: 'Astrofotográfo',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t1.0-9/36474731_1085553628249393_756955' +
                                    '0216165064704_n.jpg?_nc_cat=104&_nc_oc=AQnuGBmDm58rfaosQY0poh3klvdTM53iP6OvdLEqf' +
                                    'X9L_D5pNvU6ho75q043GwoTWyI&_nc_ht=scontent.fbgx1-1.fna&oh=33c11aa654a451b9b2a21d' +
                                    '334bf631d0&oe=5E10E3C5'
                        }
                    }, {
                        titulo: 'Scraping com Python',
                        horario: {
                            inicio: '15:40',
                            fim: '18:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Alex Camargo',
                            cargo: 'Professor no IFSUL',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t31.0-8/28947096_2047587505457691_29124' +
                                    '00414426985075_o.jpg?_nc_cat=110&_nc_oc=AQm_H1reMQ51Mj_v9j5VQ52BfepMS_AxpZ8LIW4y' +
                                    'GfpQP5KQL6wOmDvhjp-KfjzbCqA&_nc_ht=scontent.fbgx1-1.fna&oh=b7c2e0130bbbcb723f7cb' +
                                    'c90e51616d1&oe=5E10B065'
                        }
                    },
                ]
            },
                // DIA 2 - QUINTA-FEIRA
            {
                atividades: [
                    {
                        titulo: 'Credenciamento',
                        horario: {
                            inicio: '07:45',
                            fim: '08:30'
                        }
                    },{
                        titulo: 'Em breve',
                        horario: {
                            inicio: '08:40',
                            fim: '09:30'
                        },
                        tipo: 'soon'
                        // tipo: 'Palestra',
                        // realizador: {
                        //     nome: 'Leandro',
                        //     cargo: '',
                        //     img: maleThumb
                        // }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '09:40',
                            fim: '10:10'
                        }
                    }, {
                        titulo: 'Em breve',
                        horario: {
                            inicio: '10:10',
                            fim: '12:30'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Thiago',
                            cargo: '',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Credenciamento',
                        horario: {
                            inicio: '13:00',
                            fim: '13:45'
                        }
                    }, {
                        titulo: 'Agroinformática e as oportunidades na área',
                        horario: {
                            inicio: '14:00',
                            fim: '15:00'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: '',
                            cargo: 'Professor na Unipampa',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Java desde Hello World até api com Quantus',
                        horario: {
                            inicio: '15:10',
                            fim: '15:50'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Rodrigo',
                            cargo: '',
                            img: maleThumb
                        }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '15:55',
                            fim: '16:25'
                        }
                    }, {
                        titulo: 'Android Firebase: um CRUD básico',
                        horario: {
                            inicio: '16:25',
                            fim: '18:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Diego Fontoura',
                            cargo: 'Professor no IFSUL',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t1.0-9/206007_120596644703474_5275811_n.jpg?_nc_cat=100&_nc_oc=AQlFfmeb3Uv2TAftFdTHxJSVV-XfSqekRb3_g4bj2ut7GWDLsbzVCBfQZlslt4hDcBo&_nc_ht=scontent.fbgx1-1.fna&oh=2ed9b00624284e00742e7534d6cc139a&oe=5DFD207A'
                        }
                    }
                ]
            },
            {
                atividades: [
                    
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