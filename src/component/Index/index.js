import React, { useEffect, useState } from "react";
import "./index.css";
import { Helmet } from "react-helmet";
import profile from "../../assets/img/profile.png";
import about1 from "../../assets/img/about-1.jpg";
import about2 from "../../assets/img/about-2.jpg";
import project1 from "../../assets/img/project-1.jpg";
import project2 from "../../assets/img/project-2.jpg";
import project3 from "../../assets/img/project-3.jpg";
import project4 from "../../assets/img/project-4.jpg";
import project5 from "../../assets/img/project-5.jpg";
import project6 from "../../assets/img/project-6.jpg";
import 'jquery-waypoints/waypoints.min.js';
import $ from 'jquery';
import 'jquery-waypoints/waypoints.min.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/fetchUsers';
import * as Constant from "../Constant";

function Home() {
    const [activeTab, setActiveTab] = useState('experience');
    const dispatch = useDispatch();
    const users = useSelector(state => state.items);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        // Spinner
        const spinner = () => {
            setTimeout(() => {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();

        // Navbar on scrolling
        $(window).scroll(() => {
            if ($(window).scrollTop() > 300) {
                $('.navbar').fadeIn('slow').css('display', 'flex');
            } else {
                $('.navbar').fadeOut('slow').css('display', 'none');
            }
        });

        $(window).scroll(() => {
            if ($(window).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MG - Mohit Gohel</title>
            </Helmet>
            <React.Fragment>

                <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="51">
                    {/* <!-- Spinner Start --> */}
                    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
                    {/* <!-- Spinner End --> */}


                    {/* <!-- Navbar Start --> */}
                    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                        <a href="index.html" className="navbar-brand d-block d-lg-none">
                            <h1 className="text-primary fw-bold m-0">Mohit</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="#home" className="nav-item nav-link active">Home</a>
                                <a href="#about" className="nav-item nav-link">About</a>
                                <a href="#skill" className="nav-item nav-link">Skills</a>
                                <a href="#service" className="nav-item nav-link">Services</a>
                            </div>
                            <a href="index.html" className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                                <h1 className="text-primary fw-bold m-0">Mohit Gohel</h1>
                            </a>
                            <div className="navbar-nav me-auto py-0">
                                <a href="#project" className="nav-item nav-link">Projects</a>
                                <a href="#testimonial" className="nav-item nav-link">Testimonial</a>
                                <a href="#contact" className="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Navbar End --> */}

                    {/* <!-- Header Start --> */}
                    <div className="container-fluid bg-light my-6 mt-0" id="home">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                {loading && <p>Loading...</p>}
                                {error && <p>Error: {error}</p>}
                                {users && (
                                    <>
                                        <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                                            <h3 className="text-primary mb-3">{users.title}</h3>
                                            <h1 className="display-3 mb-3">{users.name}</h1>
                                            <h2 className="typed-text-output d-inline"></h2>
                                            <div className="typed-text d-none">{users.skill}</div>

                                            <div className="d-flex align-items-center pt-5">
                                                <a href={users.cv} className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                                                <button type="button" className="btn-play" data-bs-toggle="modal"
                                                    data-src={users.cv} data-bs-target="#videoModal">
                                                    <span></span>
                                                </button>
                                                <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6">
                                            <img className="img-fluid"
                                                src={Constant.BaseStorage + users.image}
                                                // src={profile}
                                                alt="" />
                                        </div> */}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Header End --> */}


                    {/* <!-- Video Modal Start --> */}
                    <div className="modal modal-video fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content rounded-0">
                                <div className="modal-header">
                                    <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* <!-- 16:9 aspect ratio --> */}
                                    <div className="ratio ratio-16x9">
                                        <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                                            allow="autoplay"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Video Modal End --> */}


                    {/* <!-- About Start --> */}
                    <div className="container-xxl py-6" id="about">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="years flex-shrink-0 text-center me-4">
                                            <h1 className="display-1 mb-0">2</h1>
                                            <h5 className="mb-0">Years</h5>
                                        </div>
                                        <h3 className="lh-base mb-0">of working experience as a web developer</h3>
                                    </div>
                                    <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Afordable Prices</p>
                                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>High Quality Product</p>
                                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>On Time Project Delivery</p>
                                    <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="row g-3 mb-4">
                                        <div className="col-sm-6">
                                            <img className="img-fluid rounded" src={about1} alt="" />
                                        </div>
                                        <div className="col-sm-6">
                                            <img className="img-fluid rounded" src={about2} alt="" />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
                                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
                                    </div>
                                    <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
                                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
                                    </div>
                                    <p className="mb-0">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- About End --> */}


                    {/* <!-- Expertise Start --> */}
                    <div className="container-xxl py-6 pb-5" id="skill">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <h1 className="display-5 mb-5">Skills & Experience</h1>
                                    <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
                                    <h3 className="mb-4">My Skills</h3>
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="skill mb-4">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="font-weight-bold">HTML</h6>
                                                    <h6 className="font-weight-bold">95%</h6>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="skill mb-4">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="font-weight-bold">CSS</h6>
                                                    <h6 className="font-weight-bold">85%</h6>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="skill mb-4">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="font-weight-bold">LARAVEL</h6>
                                                    <h6 className="font-weight-bold">90%</h6>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="skill mb-4">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="font-weight-bold">REACT.JS</h6>
                                                    <h6 className="font-weight-bold">90%</h6>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="skill mb-4">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="font-weight-bold">NODE.JS</h6>
                                                    <h6 className="font-weight-bold">95%</h6>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                                        <li className="nav-item w-50">
                                            <button
                                                className={`nav-link w-100 py-3 fs-5 ${activeTab === 'experience' ? 'active' : ''}`}
                                                onClick={() => handleTabClick('experience')}
                                            >
                                                Experience
                                            </button>
                                        </li>
                                        <li className="nav-item w-50">
                                            <button
                                                className={`nav-link w-100 py-3 fs-5 ${activeTab === 'education' ? 'active' : ''}`}
                                                onClick={() => handleTabClick('education')}
                                            >
                                                Education
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className={`tab-pane fade ${activeTab === 'experience' ? 'show active' : ''} p-0`}>
                                            <div className="row gy-5 gx-4">
                                                <div className="col-sm-6">
                                                    <h5>Full Stack Developer</h5>
                                                    <hr className="text-primary my-2" />
                                                    <p className="text-primary mb-1">2022 - 2023</p>
                                                    <h6 className="mb-0">Omega Infoway</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <h5>Laravel Developer</h5>
                                                    <hr className="text-primary my-2" />
                                                    <p className="text-primary mb-1">2023 - 2024</p>
                                                    <h6 className="mb-0">Techflitter Solutions</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`tab-pane fade ${activeTab === 'education' ? 'show active' : ''} p-0`}>
                                            <div className="row gy-5 gx-4">
                                                <div className="col-sm-6">
                                                    <h5>UI Design Course</h5>
                                                    <hr className="text-primary my-2" />
                                                    <p className="text-primary mb-1">2000 - 2045</p>
                                                    <h6 className="mb-0">Cambridge University</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <h5>IOS Development</h5>
                                                    <hr className="text-primary my-2" />
                                                    <p className="text-primary mb-1">2000 - 2045</p>
                                                    <h6 className="mb-0">Cambridge University</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <h5>Web Design</h5>
                                                    <hr className="text-primary my-2" />
                                                    <p className="text-primary mb-1">2000 - 2045</p>
                                                    <h6 className="mb-0">Cambridge University</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <h5>Apps Design</h5>
                                                    <hr className="text-primary my-2" />
                                                    <p className="text-primary mb-1">2000 - 2045</p>
                                                    <h6 className="mb-0">Cambridge University</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    {/* <!-- Expertise End --> */}


                    {/* <!-- Service Start --> */}
                    <div className="container-fluid bg-light my-5 py-6" id="service">
                        <div className="container">
                            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="col-lg-6">
                                    <h1 className="display-5 mb-0">My Services</h1>
                                </div>
                                <div className="col-lg-6 text-lg-end">
                                    <a className="btn btn-primary py-3 px-5" href="">Hire Me</a>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                        <div className="bg-icon flex-shrink-0 mb-3">
                                            <i className="fa fa-crop-alt fa-2x text-dark"></i>
                                        </div>
                                        <div className="ms-sm-4">
                                            <h4 className="mb-3">Creative Design</h4>
                                            <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                            <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                        <div className="bg-icon flex-shrink-0 mb-3">
                                            <i className="fa fa-code-branch fa-2x text-dark"></i>
                                        </div>
                                        <div className="ms-sm-4">
                                            <h4 className="mb-3">Graphic Design</h4>
                                            <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                            <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                        <div className="bg-icon flex-shrink-0 mb-3">
                                            <i className="fa fa-code fa-2x text-dark"></i>
                                        </div>
                                        <div className="ms-sm-4">
                                            <h4 className="mb-3">Web Design</h4>
                                            <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                            <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                        <div className="bg-icon flex-shrink-0 mb-3">
                                            <i className="fa fa-laptop-code fa-2x text-dark"></i>
                                        </div>
                                        <div className="ms-sm-4">
                                            <h4 className="mb-3">UI/UX Design</h4>
                                            <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                            <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Service End --> */}


                    {/* <!-- Projects Start --> */}
                    <div className="container-xxl py-6 pt-5" id="project">
                        <div className="container">
                            <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                                <div className="col-lg-6">
                                    <h1 className="display-5 mb-0">My Projects</h1>
                                </div>
                                <div className="col-lg-6 text-lg-end">
                                    <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                                        <li className="mx-3 active" data-filter="*">All Projects</li>
                                        <li className="mx-3" data-filter=".first">UI/UX Design</li>
                                        <li className="mx-3" data-filter=".second">Graphic Design</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
                                <div className="col-lg-4 col-md-6 portfolio-item first">
                                    <div className="portfolio-img rounded overflow-hidden">
                                        <img className="img-fluid" src={project1} alt="" />
                                        <div className="portfolio-btn">
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item second">
                                    <div className="portfolio-img rounded overflow-hidden">
                                        <img className="img-fluid" src={project2} alt="" />
                                        <div className="portfolio-btn">
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item first">
                                    <div className="portfolio-img rounded overflow-hidden">
                                        <img className="img-fluid" src={project3} alt="" />
                                        <div className="portfolio-btn">
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item second">
                                    <div className="portfolio-img rounded overflow-hidden">
                                        <img className="img-fluid" src={project4} alt="" />
                                        <div className="portfolio-btn">
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item first">
                                    <div className="portfolio-img rounded overflow-hidden">
                                        <img className="img-fluid" src={project5} alt="" />
                                        <div className="portfolio-btn">
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item second">
                                    <div className="portfolio-img rounded overflow-hidden">
                                        <img className="img-fluid" src={project6} alt="" />
                                        <div className="portfolio-btn">
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Projects End --> */}


                    {/* <!-- Testimonial Start --> */}
                    {/* <div className="container-fluid bg-light py-5 my-5" id="testimonial">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 d-none d-lg-block">
                                    <div className="testimonial-left h-100">
                                        <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="img/testimonial-1.jpg" alt=""/>
                                            <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="img/testimonial-2.jpg" alt="">
                                                <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="img/testimonial-3.jpg" alt="">
                                                </div>
                                            </div>
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                                <div className="owl-carousel testimonial-carousel">
                                                    <div className="testimonial-item text-center">
                                                        <div className="position-relative mb-5">
                                                            <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-1.jpg" alt="">
                                                                <div className="testimonial-icon">
                                                                    <i className="fa fa-quote-left text-primary"></i>
                                                                </div>
                                                        </div>
                                                        <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                                        <hr className="w-25 mx-auto">
                                                            <h5>Client Name</h5>
                                                            <span>Profession</span>
                                                    </div>
                                                    <div className="testimonial-item text-center">
                                                        <div className="position-relative mb-5">
                                                            <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-2.jpg" alt="">
                                                                <div className="testimonial-icon">
                                                                    <i className="fa fa-quote-left text-primary"></i>
                                                                </div>
                                                        </div>
                                                        <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                                        <hr className="w-25 mx-auto">
                                                            <h5>Client Name</h5>
                                                            <span>Profession</span>
                                                    </div>
                                                    <div className="testimonial-item text-center">
                                                        <div className="position-relative mb-5">
                                                            <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-3.jpg" alt="">
                                                                <div className="testimonial-icon">
                                                                    <i className="fa fa-quote-left text-primary"></i>
                                                                </div>
                                                        </div>
                                                        <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                                        <hr className="w-25 mx-auto">
                                                            <h5>Client Name</h5>
                                                            <span>Profession</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 d-none d-lg-block">
                                                <div className="testimonial-right h-100">
                                                    <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="img/testimonial-1.jpg" alt="">
                                                        <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="img/testimonial-2.jpg" alt="">
                                                            <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="img/testimonial-3.jpg" alt="">
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                    </div>
                                    <!-- Testimonial End --> */}


                    {/* <!-- Contact Start --> */}
                    <div className="container-xxl pb-5" id="contact">
                        <div className="container py-5">
                            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="col-lg-6">
                                    <h1 className="display-5 mb-0">Let's Work Together</h1>
                                </div>
                                <div className="col-lg-6 text-lg-end">
                                    <a className="btn btn-primary py-3 px-5" href="">Say Hello</a>
                                </div>
                            </div>
                            <div className="row g-5">
                                <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <p className="mb-2">My home:</p>
                                    <h3 className="fw-bold">Ahmedabad, INDIA</h3>
                                    <hr className="w-100" />
                                    <p className="mb-2">Call me:</p>
                                    <h3 className="fw-bold">+91 8780524057</h3>
                                    <hr className="w-100" />
                                    <p className="mb-2">Mail me:</p>
                                    <h3 className="fw-bold">gohelmohit4438@gmail.com</h3>
                                    <hr className="w-100" />
                                    <p className="mb-2">Follow me:</p>
                                    <div className="d-flex pt-2">
                                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-youtube"></i></a>
                                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                    <label for="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                    <label for="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                    <label for="subject">Subject</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                                                    <label for="message">Message</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Contact End --> */}


                    {/* <!-- Map Start --> */}
                    <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container-xxl pt-5 px-0">
                            <div className="bg-dark">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameBorder="0" style={{ width: "100%", height: "450px", border: 0 }} allowFullScreen="" aria-hidden="false"
                                    tabIndex="0"></iframe>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Map End --> */}

                    {/* <!-- Copyright Start --> */}
                    <div className="container-fluid bg-dark text-white py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a className="border-bottom text-secondary" href="#">Mohit</a>, All Right Reserved.
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    Designed By <a className="border-bottom text-secondary" href="">Mohit Gohel</a>
                                    {/* <br />Distributed By: <a className="border-bottom" href="" target="_blank">Mohit Gohel</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </body >
                {/* <!-- Copyright End --> */}

            </React.Fragment >
        </>
    );
}

export default Home;