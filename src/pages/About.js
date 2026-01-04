import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Icon } from '@iconify/react'
import hardSkillsIcons from '../data/hardSkillsIcons'
import image from '../assets/portfolio-img.jpg'

import Header from '../components/Header'
import SocialMedia from '../components/SocialMedia'

import '../styles/pages/about.scss'


export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname)
  }
  render() {
    return (
      <div className="all-about">
        <Header />
        <section className="about">
          <div className="about-header-text-skills" >
            
            <div className="about-text-skills">
            <section className="about-text">
              <p className="about-text-p about-text-p-1">Olá,</p>

              <p className="about-text-p about-text-p-2">
                meu nome é <span>Ezequiel Souza</span>
              </p>

              <p className="about-text-p about-text-p-3">
                Sou desenvolvedor <span>full stack</span> com foco em <span>Front-end</span> e atualmente atuo como Desenvolvedor Front-end na <span>IEXFY</span>.
              </p>

              <p className="about-text-p about-text-p-3">
                Possuo experiência prática no desenvolvimento de interfaces web e mobile utilizando
                <span> JavaScript (ES6+)</span>, <span>TypeScript</span>, <span>React.js</span>,
                <span> Next.js</span> e <span>React Native</span>. Também tenho vivência com
                <span> Angular (básico)</span> e consumo de <span>APIs REST</span> em aplicações
                de alta integração.
              </p>

              <p className="about-text-p about-text-p-3">
                Atuo na criação de componentes reutilizáveis, manutenção de aplicações,
                otimização de interfaces e integração com sistemas externos como ERPs,
                CRMs e marketplaces. Tenho familiaridade com <span>Node.js</span>,
                <span> Express.js</span>, <span>MongoDB</span>, <span>SQL</span>,
                além de ferramentas como <span>Git</span>, <span>Postman</span> e
                <span> Figma (básico)</span>.
              </p>

              <p className="about-text-p about-text-p-5">
                Trabalho em ambientes colaborativos, seguindo boas práticas de versionamento,
                organização de código e entrega contínua, sempre buscando evoluir a qualidade
                das aplicações e a experiência do usuário.
              </p>

              <p className="about-text-p about-text-p-6">
                <span>Sinta-se à vontade para me chamar para conversar!</span>
              </p>
              </section>
              <div className="about-image">
            <img className="about-img" src={image} alt="profile" /> 
          </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon">
                      <Icon icon={icon.icon} className={icon.className} />
                    <p className='about-icon-text'>{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
          </div>
          
          <SocialMedia />
        </section>
        
      </div>
      
    )
  }
}