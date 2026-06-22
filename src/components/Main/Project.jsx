import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./almadinafurnitureandwoods.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Al Madina Furniture & Woods</h3>
                            <p>
                                Modern furniture business website
                            </p>
                            <p className="tecnologias">
                                React.js - Tailwind CSS - Responsive Design
                            </p>
                            <div className="project-buttons">
                                <a href="https://almadinafurnitureandwoods.netlify.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./sarwar glass and aliminum.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Sarwar Glass & Aluminum</h3>
                            <p>
                                Professional business website
                            </p>
                            <p className="tecnologias">
                                React.js - CSS - Responsive
                            </p>
                            <div className="project-buttons">
                                <a href="https://sarwarglassandaluminum.netlify.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./cvforgebuilder.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>CV Builder Web Application</h3>
                            <p>
                                Full-stack CV builder with dynamic resume generation
                            </p>
                            <p className="tecnologias">
                                React.js - Node.js - MongoDB - Tailwind CSS
                            </p>
                            <div className="project-buttons">
                                <a href="https://cvforgebuilder.netlify.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./dukaanify.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Dukaanify</h3>
                            <p>
                                Multi-feature SaaS platform
                            </p>
                            <p className="tecnologias">
                                Next.js 15 - Supabase - Tailwind CSS - TypeScript
                            </p>
                            <div className="project-buttons">
                                <a href="https://dukaanify-jler.vercel.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./crusty pizza .png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Crusty Pizza Hut</h3>
                            <p>
                                Restaurant management and food ordering application
                            </p>
                            <p className="tecnologias">
                                React.js - Node.js - Full Stack
                            </p>
                            <div className="project-buttons">
                                <a href="https://crustypizza.netlify.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./avantcore.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Avant Core Technologies</h3>
                            <p>
                                Professional company portfolio website
                            </p>
                            <p className="tecnologias">
                                Modern Web Development - Responsive - Performance
                            </p>
                            <div className="project-buttons">
                                <a href="https://avantcore.vercel.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./ra  interoir  renovation .png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>R A Interior And Renovation</h3>
                            <p>
                                Interior design and renovation company website
                            </p>
                            <p className="tecnologias">
                                React.js - CSS - Responsive
                            </p>
                            <div className="project-buttons">
                                <a href="https://interiorandrenovation.netlify.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./bismillahagroup.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Bismillah Web Application</h3>
                            <p>
                                Business web application with core web technologies
                            </p>
                            <p className="tecnologias">
                                HTML - CSS - JavaScript
                            </p>
                            <div className="project-buttons">
                                <a href="https://bismillahagroup.netlify.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./wellgrowshine.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Well Grow Shine Construction</h3>
                            <p>
                                Construction company website
                            </p>
                            <p className="tecnologias">
                                HTML - CSS - JavaScript
                            </p>
                            <div className="project-buttons">
                                <a href="https://wellgrowshine.netlify.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./almustafaionlineshopping..png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Al Mustafai Online Shopping</h3>
                            <p>
                                Online shopping and e-commerce platform
                            </p>
                            <p className="tecnologias">
                                E-Commerce - Responsive - Modern Design
                            </p>
                            <div className="project-buttons">
                                <a href="https://almustafaionlineshopping.netlify.app/" className="btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com" className="btn-repo" target="_blank" rel="noopener noreferrer">Repository</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);