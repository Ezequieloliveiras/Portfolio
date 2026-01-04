import bikeGuard from '../assets/img-bikeguard.webp'
import chatlinx from '../assets/img-chatlinx.webp'
import appVix from '../assets/img-appvix.webp'
import mercadoLivre from '../assets/mercado-livre.png'
import shopee from '../assets/img-shopee.webp'
import madeira from '../assets/img-madeira.webp'
import magalu from '../assets/img-magalu.webp'
import tray from '../assets/img-tray.webp'
import vtex from '../assets/img-vtex.webp'

const allProjects = [
  {
    id: 1,
    name: 'Chatlinx',
    moduleCourse: 'Full Stack',
    img: chatlinx,
    linkGitHub: '#',
    linkPage: 'https://www.chatlinx.com.br/',
    linkVideo: null,
    technologies: `
      Next.js, React, TypeScript, JavaScript (ES6+),
      Styled-components, Material UI,
      React Query, Axios, Socket.IO,
      Node.js, Express, MongoDB,
      AWS S3, JWT, Multer, FFmpeg
    `,
    text:
      'Aplicação full stack de mensagens em tempo real com integração à API do WhatsApp, permitindo o envio e recebimento de mensagens de texto e mídia. O sistema utiliza comunicação em tempo real com Socket.IO, autenticação via JWT, processamento de arquivos e armazenamento em nuvem com AWS S3, garantindo escalabilidade e segurança.'
  },

  {
    id: 2,
    name: 'BikeGuard',
    moduleCourse: 'Full Stack',
    img: bikeGuard,
    linkGitHub: 'https://github.com/Ezequieloliveiras/codevix-app',
    linkPage: null,
    linkVideo: `${process.env.PUBLIC_URL}/videos/bikeguard.mp4`,
    technologies: 'TypeScript, Next.js, React, Node.js, Express, MongoDB, JWT, Expo Router, React Navigation, Expo Camera (QR Code), Axios ',
    text:
      'Sistema full stack desenvolvido para controle e gestão de bicicletas elétricas por meio de QR Code. A aplicação conta com autenticação JWT, integração entre frontend e backend, leitura de QR Code via câmera e comunicação com API para registro e consulta de dados, oferecendo uma solução prática para gerenciamento e rastreabilidade.'
  },

  {
    id: 11,
    name: 'AppVix',
    moduleCourse: 'Full Stack',
    img: appVix,
    linkGitHub: '#',
    linkPage: 'https://my-landing-opal.vercel.app/',
    linkVideo: null,
    technologies: `
    Next.js, React, TypeScript, JavaScript (ES6+),
    Material UI (MUI), Emotion,
    Tailwind CSS,
    Framer Motion,
    Swiper.js
    `,
    text:
      'Website institucional voltado à apresentação de serviços de desenvolvimento de aplicativos mobile para Android e iOS, além da criação de sistemas personalizados para empresas. O projeto prioriza design moderno, navegação fluida, responsividade e uma experiência visual profissional.'
  },


  {
    id: 3,
    name: 'Mercado Livre',
    moduleCourse: 'Full Stack',
    img: mercadoLivre,
    linkGitHub: '#',
    linkPage: null,
    linkVideo: null,
    technologies: 'Angular, HTML5, CSS3, JavaScript, Node.js, Express, MongoDB, JWT, Axios',
    text:
      'Integração realizada com a API do Mercado Livre para sincronização de pedidos com o ERP do cliente. O trabalho envolveu consumo de APIs, tratamento de dados e autenticação, sendo desenvolvido em colaboração com a equipe da empresa Kenit.'
  },

  {
    id: 4,
    name: 'Shopee',
    moduleCourse: 'Full Stack',
    img: shopee,
    linkGitHub: '#',
    linkPage: null,
    linkVideo: null,
    technologies: 'Angular, HTML5, CSS3, JavaScript, Node.js, Express, MongoDB, JWT, Axios',
    text:
      'Integração com a API da Shopee para importação e sincronização de pedidos no ERP do cliente. O projeto foi desenvolvido em conjunto com a equipe da empresa Kenit, focando em estabilidade, padronização de dados e integração entre sistemas.'
  },

  {
    id: 5,
    name: 'MadeiraMadeira',
    moduleCourse: 'Full Stack',
    img: madeira,
    linkGitHub: '#',
    linkPage: null,
    linkVideo: null,
    technologies: 'Angular, HTML5, CSS3, JavaScript, Node.js, Express, MongoDB, JWT, Axios',
    text:
      'Projeto de integração com a API da MadeiraMadeira para envio e gerenciamento de pedidos no ERP do cliente. A solução foi construída em colaboração com a equipe da empresa Kenit, utilizando boas práticas de backend e integração de sistemas.'
  },

  {
    id: 6,
    name: 'Magazine Luiza',
    moduleCourse: 'Full Stack',
    img: magalu,
    linkGitHub: '#',
    linkPage: null,
    linkVideo: null,
    technologies: 'Angular, HTML5, CSS3, JavaScript, Node.js, Express, MongoDB, JWT, Axios',
    text:
      'Integração com a API da Magazine Luiza para sincronização de pedidos e informações comerciais com o ERP do cliente. O desenvolvimento foi realizado em parceria com a equipe da empresa Kenit, garantindo comunicação eficiente entre plataformas.'
  },

  {
    id: 7,
    name: 'Tray',
    moduleCourse: 'Full Stack',
    img: tray,
    linkGitHub: '#',
    linkPage: null,
    linkVideo: null,
    technologies: 'Angular, HTML5, CSS3, JavaScript, Node.js, Express, MongoDB, JWT, Axios',
    text:
      'Integração desenvolvida com a API da plataforma Tray para automatização do fluxo de pedidos no ERP do cliente. O projeto foi executado em colaboração com a equipe da empresa Kenit, focando em confiabilidade e organização dos dados.'
  },

  {
    id: 8,
    name: 'VTEX',
    moduleCourse: 'Full Stack',
    img: vtex,
    linkGitHub: '#',
    linkPage: null,
    linkVideo: null,
    technologies: 'Angular, HTML5, CSS3, JavaScript, Node.js, Express, MongoDB, JWT, Axios',
    text:
      'Integração com a API da VTEX para consumo e sincronização de pedidos no ERP do cliente. O trabalho foi realizado em conjunto com a equipe da empresa Kenit, aplicando conceitos de integração, autenticação e processamento de dados.'
  }
]

export default allProjects
