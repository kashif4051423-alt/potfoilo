import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Image */
import profileImg from '../../img/kashif profile .jpeg';

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg/>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
                <div className="profile-image-container" data-aos="fade-right" data-aos-delay="400">
                    <img src={profileImg} alt="Kashif Ali" className="profile-image" />
                </div>
            
                <p data-aos="fade-up" data-aos-delay="600">
                    <FormattedMessage
                        id='greeting'
                        defaultMessage='Hello'
                    />
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    <FormattedMessage
                        id='name'
                        defaultMessage='I am Nahuel Carrizo'
                    />
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    <FormattedMessage
                        id='rol'
                        defaultMessage='Full-stack developer'
                    />
                </p>

                <div className="redes-sociales">
                    <a href="https://github.com/kashif4051423-alt" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-github"></i></a>
                    <a href="mailto:Khashia791@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fas fa-envelope"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=923347140884" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/kashif-ali-39bba9417/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/kash.ifali527?igsh=MWVqdWNoZnpnbzN6NQ==" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="2000"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="wrapper">
                    <a className="button" href="https://github.com/kashif4051423-alt" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href="mailto:Khashia791@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span>Email</span>
                    </a>
                    <a className="button" href="https://api.whatsapp.com/send?phone=923347140884" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <span>Whatsapp</span>
                    </a>
                    <a className="button" href="https://www.linkedin.com/in/kashif-ali-39bba9417/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>LinkedIn</span>
                    </a>
                    <a className="button" href="https://www.instagram.com/kash.ifali527?igsh=MWVqdWNoZnpnbzN6NQ==" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="2000">
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                    </a>
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;