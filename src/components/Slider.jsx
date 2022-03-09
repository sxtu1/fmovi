import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoGoogle } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

import image1 from '../assets/images/uploads/slider1.jpg';
import image2 from '../assets/images/uploads/slider2.jpg';
import image3 from '../assets/images/uploads/slider3.jpg';
import image4 from '../assets/images/uploads/slider4.jpg';

const Slider = () => {
    return (
        <div className="slider movie-items">
            <div className="container">
                <div className="row">
                    <div className="social-link">
                        <p>Follow us: </p>
                        <a href="/"><IoLogoFacebook style={{color:'white',marginRight:'1rem'}} /></a>
                        <a href="/"><IoLogoTwitter style={{color:'white',marginRight:'1rem'}}  /></a>
                        <a href="/"><IoLogoGoogle style={{color:'white',marginRight:'1rem'}}  /></a>
                        <a href="/"><IoLogoYoutube style={{color:'white',marginRight:'1.5rem'}}  /></a>
                    </div>
                    <div className="slick-multiItemSlider">
                        <div className="movie-item">
                            <div className="mv-img">
                                <a href="/"><img src={image1} alt="" width="285" height="437" /></a>
                            </div>
                            <div className="title-in">
                                <div className="cate">
                                    <span className="blue"><a href="/">Sci-fi</a></span>
                                </div>
                                <h6><a href="/">Interstellar</a></h6>
                                <p><IoStar /><span>7.4</span> /10</p>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                                <a href="/"><img src={image2} alt="" width="285" height="437" /></a>
                            </div>
                            <div className="title-in">
                                <div className="cate">
                                    <span className="yell"><a href="/">action</a></span>
                                </div>
                                <h6><a href="/">The revenant</a></h6>
                                <p><IoStar /><span>7.4</span> /10</p>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                                <a href="/"><img src={image3} alt="" width="285" height="437" /></a>
                            </div>
                            <div className="title-in">
                                <div className="cate">
                                    <span className="green"><a href="/">comedy</a></span>
                                </div>
                                <h6><a href="/">Die hard</a></h6>
                                <p><IoStar /><span>7.4</span> /10</p>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                                <a href="/"><img src={image4} alt="" width="285" height="437" /></a>
                            </div>
                            <div className="title-in">
                                <div className="cate">
                                    <span className="blue"><a href="/">Sci-fi</a></span> <span className="orange"><a href="/">advanture</a></span>
                                </div>
                                <h6><a href="/">The walk</a></h6>
                                <p><IoStar /><span>7.4</span> /10</p>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                                <a href="/"><img src={image1} alt="" width="285" height="437" /></a>
                            </div>
                            <div className="title-in">
                                <div className="cate">
                                    <span className="blue"><a href="/">Sci-fi</a></span>
                                </div>
                                <h6><a href="/">Interstellar</a></h6>
                                <p><IoStar /><span>7.4</span> /10</p>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                                <a href="/"><img src={image2} alt="" width="285" height="437" /></a>
                            </div>
                            <div className="title-in">
                                <div className="cate">
                                    <span className="yell"><a href="/">action</a></span>
                                </div>
                                <h6><a href="/">The revenant</a></h6>
                                <p><IoStar /><span>7.4</span> /10</p>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                                <img src={image3} alt="" width="285" height="437" />
                            </div>
                            <div className="title-in">
                                <div className="cate">
                                    <span className="green"><a href="/">comedy</a></span>
                                </div>
                                <h6><a href="/">Die hard</a></h6>
                                <p><IoStar /><span>7.4</span> /10</p>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                                <img src={image4} alt="" width="285" height="437" />
                            </div>
                            <div className="title-in">
                                <div className="cate">
                                    <span className="blue"><a href="/">Sci-fi</a></span> <span className="orange"><a href="/">advanture</a></span>
                                </div>
                                <h6><a href="/">The walk</a></h6>
                                <p><IoStar /><span>7.4</span> /10</p>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                                <img src={image3} alt="" width="285" height="437" />
                            </div>
                            <div className="title-in">
                                <div className="cate">
                                    <span className="green"><a href="/">comedy</a></span>
                                </div>
                                <h6><a href="/">Die hard</a></h6>
                                <p><IoStar /><span>7.4</span> /10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
