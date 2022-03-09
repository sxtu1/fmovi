import React from 'react';
import { Link } from 'react-router-dom';

import { IoChevronForward } from "react-icons/io5";

import ads1 from '../assets/images/uploads/ads1.png';
import ava1 from '../assets/images/uploads/ava1.jpg';
import ava2 from '../assets/images/uploads/ava2.jpg';
import ava3 from '../assets/images/uploads/ava3.jpg';
import ava4 from '../assets/images/uploads/ava4.jpg';
import Theater from './Theater';

import { category, movieType, tvType } from '../api/tmdbApi';

const Movie = () => {
    return (
        <div className="movie-items">
            <div className="container">
                <div className="row ipad-width">
                    <div className="col-md-8">
                        <div className="title-hd">
                            <h2>in theater</h2>
                            <Link to="/movie" className="viewall">View all <IoChevronForward /></Link>
                        </div>
                        <div className="tabs">
                            <ul className="tab-links">
                                <li className="active"><Link to="#tab1">#Popular</Link></li>
                                <li><a href="#tab2"> #Coming soon</a></li>
                                <li><a href="#tab3"> #Top rated  </a></li>
                                <li><a href="#tab4"> #Most reviewed</a></li>
                            </ul>
                            <div className="tab-content">
                            <div id="tab1" className="tab active">
                                <Theater category={category.movie} type={movieType.popular} />
                            </div>
                            <div id="tab2" className="tab">
                                <Theater />
                            </div>
                            <div id="tab3" className="tab">
                                <Theater />
                            </div>
                            <div id="tab4" className="tab">
                                <Theater />
                            </div>
                        </div>
                        </div>
                        <div className="title-hd">
                            <h2>on tv</h2>
                            <a href="/" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
                        </div>
                        <div className="tabs">
                            <ul className="tab-links-2">
                                <li><a href="#tab21">#Popular</a></li>
                                <li className="active"><a href="#tab22"> #Coming soon</a></li>
                                <li><a href="#tab23">  #Top rated  </a></li>
                                <li><a href="#tab24"> #Most reviewed</a></li>
                            </ul>
                            <div className="tab-content">
                            <div id="tab21" className="tab">
                                <Theater />
                            </div>
                            <div id="tab22" className="tab active">
                                <Theater />
                            </div>
                            <div id="tab23" className="tab">
                                <Theater />
                            </div>
                            <div id="tab24" className="tab">
                                <Theater />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sidebar">
                            <div className="ads">
                                <img src={ ads1 } alt="" width="336" height="296" />
                            </div>
                            <div className="celebrities">
                                <h4 className="sb-title">Spotlight Celebrities</h4>
                                <div className="celeb-item">
                                    <a href="/"><img src={ ava1 } alt="" width="70" height="70" /></a>
                                    <div className="celeb-author">
                                        <h6><a href="/">Samuel N. Jack</a></h6>
                                        <span>Actor</span>
                                    </div>
                                </div>
                                <div className="celeb-item">
                                    <a href="/"><img src={ ava2 } alt="" width="70" height="70" /></a>
                                    <div className="celeb-author">
                                        <h6><a href="/">Benjamin Carroll</a></h6>
                                        <span>Actor</span>
                                    </div>
                                </div>
                                <div className="celeb-item">
                                    <a href="/"><img src={ ava3 } alt="" width="70" height="70" /></a>
                                    <div className="celeb-author">
                                        <h6><a href="/">Beverly Griffin</a></h6>
                                        <span>Actor</span>
                                    </div>
                                </div>
                                <div className="celeb-item">
                                    <a href="/"><img src={ ava4 } alt="" width="70" height="70" /></a>
                                    <div className="celeb-author">
                                        <h6><a href="/">Justin Weaver</a></h6>
                                        <span>Actor</span>
                                    </div>
                                </div>
                                <a href="/" className="btn">See all celebrities<i className="ion-ios-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
