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
                            nome: 'Leandro Camargo',
                            cargo: 'Prof. no IFSul Campus Bagé',
                            img: 'http://www2.bage.ifsul.edu.br/saads2018/imagens/leandro.jpg'
                        }
                    }, {
                        titulo: 'Design UI e UX com Foco em Interfaces Intuitivas e Experiência do Usuário',
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
                            nome: 'Leandro Camargo',
                            cargo: 'Prof. no IFSul Campus Bagé',
                            img: 'http://www2.bage.ifsul.edu.br/saads2018/imagens/leandro.jpg'
                        }
                    }, {
                        titulo: 'Práticas no terminal do Linux',
                        horario: {
                            inicio: '11:15',
                            fim: '12:30'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Ricardo Robaina',
                            cargo: '',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t1.0-9/52769512_2103288286419279_524944' +
                                    '062696914944_n.jpg?_nc_cat=103&_nc_oc=AQnQc1rTdtnaHH4QAJWSBYaHFbYJoGT21GIbfIzthl' +
                                    'ev5tShV9sccHehtAn8xTA01q8-sbwLuDaMWEl830g2SxG9&_nc_ht=scontent.fbgx1-1.fna&oh=a2' +
                                    '8ca8ee2b9e251858b04303c6929f30&oe=5E1045BE'
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
                            nome: 'Guilherme Frederico Marranghello',
                            cargo: 'Prof. na UNIPAMPA',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t1.0-9/48404313_10157881841854688_36094' +
                                    '3407968813056_n.jpg?_nc_cat=106&_nc_oc=AQnzAZC77J1AmPLrK4CMOjymZLdDifjuJuklCiJNF' +
                                    'H6pE0Zfn9S_1wWlnJd1yFy7bbGRlXE0Rnu8RSKg3owAtfY4&_nc_ht=scontent.fbgx1-1.fna&oh=4' +
                                    '2e10763897caad00a9114b2492fb0ab&oe=5E0033F6'
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
                            cargo: 'Prof. no IFSul Campus Bagé',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t31.0-8/28947096_2047587505457691_29124' +
                                    '00414426985075_o.jpg?_nc_cat=110&_nc_oc=AQm_H1reMQ51Mj_v9j5VQ52BfepMS_AxpZ8LIW4y' +
                                    'GfpQP5KQL6wOmDvhjp-KfjzbCqA&_nc_ht=scontent.fbgx1-1.fna&oh=b7c2e0130bbbcb723f7cb' +
                                    'c90e51616d1&oe=5E10B065'
                        }
                    }, {
                        titulo: 'Em breve',
                        horario: {
                            inicio: '15:40',
                            fim: '18:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Diego Mengarda',
                            cargo: 'Prof. no IFSul Campus Bagé',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t1.0-9/33164903_1946812915390989_467443' +
                                    '9287373037568_n.jpg?_nc_cat=104&_nc_oc=AQlmUB9FlGsL1SGUmuAgkJbrT-cOsFKQvQmICRptN' +
                                    'D2ykD59SGn-oPUApn-92ftDgZsDsSQomXLxYv89vah1wwdb&_nc_ht=scontent.fbgx1-1.fna&oh=a' +
                                    '69ee197c43a30a1212858a8a27961c1&oe=5E0EFB88'
                        }
                    }
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
                    }, {
                        titulo: 'Em breve',
                        horario: {
                            inicio: '08:40',
                            fim: '09:30'
                        },
                        tipo: 'soon'
                        // tipo: 'Palestra', realizador: {     nome: 'Leandro',     cargo: '',     img:
                        // maleThumb }
                    }, {
                        titulo: 'Coffee Break',
                        horario: {
                            inicio: '09:40',
                            fim: '10:10'
                        }
                    }, {
                        titulo: "Introdução à Pixel Art: do sprite animation",
                        horario: {
                            inicio: '10:10',
                            fim: '12:30'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Thiago Calcagno',
                            cargo: '',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t1.0-9/48994183_1623609214406238_678182' +
                                    '7873771618304_n.jpg?_nc_cat=102&_nc_oc=AQk11wiW8RPbax0Fa3B0Vsnlp1F7rnLnVU662zgQ0' +
                                    'gfvpmd2O5IGxvkEgl2BaAwBvxIm7b3f0yfLdmcqw4XEGSdr&_nc_ht=scontent.fbgx1-1.fna&oh=e' +
                                    'd2fef6a5d2704d1990021c0d3c59bcd&oe=5E0FBBC7'
                        }
                    }, {
                        titulo: 'Desenvolvendo um APP híbrido "Todo List" com React Native/Javascript',
                        horario: {
                            inicio: '10:10',
                            fim: '12:30'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Vitor Régis',
                            cargo: '',
                            img: 'https://media.licdn.com/dms/image/C4E03AQF2HLgmIRt9YQ/profile-displayphoto-shrin' +
                                    'k_200_200/0?e=1573689600&v=beta&t=3BHb5-ZYWSlFokA5w1B5O5jeWkLzX1DuuvFOUIs38Yo'
                        }
                    }, {
                        titulo: "Em breve",
                        horario: {
                            inicio: '10:10',
                            fim: '12:30'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Marcelo Siedler',
                            cargo: '',
                            img: 'http://www2.bage.ifsul.edu.br/saads2018/imagens/marcelo.jpg'
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
                            nome: 'Ana Paula Lüdtke',
                            cargo: 'Prof. na UNIPAMPA',
                            img: 'https://sites.unipampa.edu.br/guriasdopampanasexatas/files/2019/03/056-300x225.j' +
                                    'pg'
                        }
                    }, {
                        titulo: 'Java desde Hello World até api com Quantus',
                        horario: {
                            inicio: '15:10',
                            fim: '15:50'
                        },
                        tipo: 'Palestra',
                        realizador: {
                            nome: 'Rodrigo Freitas',
                            cargo: '',
                            img: 'https://instagram.fbgx1-1.fna.fbcdn.net/vp/98a3a843ccabe21d3e58f9d1a1d0c5f4/5DFD' +
                                    '4606/t51.2885-19/s150x150/31338738_206008740128587_5319261187290955776_n.jpg?_nc' +
                                    '_ht=instagram.fbgx1-1.fna.fbcdn.net'
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
                            cargo: 'Prof. no IFSul Campus Bagé',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t1.0-9/206007_120596644703474_5275811_n' +
                                    '.jpg?_nc_cat=100&_nc_oc=AQlFfmeb3Uv2TAftFdTHxJSVV-XfSqekRb3_g4bj2ut7GWDLsbzVCBfQ' +
                                    'Zlslt4hDcBo&_nc_ht=scontent.fbgx1-1.fna&oh=2ed9b00624284e00742e7534d6cc139a&oe=5' +
                                    'DFD207A'
                        }
                    }, {
                        titulo: 'Virtualização e máquinas virtuais',
                        horario: {
                            inicio: '16:25',
                            fim: '18:15'
                        },
                        tipo: 'Oficina',
                        realizador: {
                            nome: 'Anderson Ritta',
                            cargo: 'Prof. no IFSul Campus Bagé',
                            img: 'https://scontent.fbgx1-1.fna.fbcdn.net/v/t1.0-9/50011337_486247521900667_5592667' +
                                    '990626664448_n.jpg?_nc_cat=110&_nc_oc=AQn5geePcPwHe1OuNCv7Tyz8kydyLgtMeUE0QNM4v2' +
                                    'GDi2jhUn0lULWoDIhBzIn9SWhNEZl2jxuGqRxL--KrabXy&_nc_ht=scontent.fbgx1-1.fna&oh=f1' +
                                    '8f87384b901329a1d8ef27bd8d24c3&oe=5DFEE5C2'
                        }
                    }
                ]
            }, {
                atividades: []
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