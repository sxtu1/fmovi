import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { category } from '../api/tmdbApi';
import apiConfig from '../api/apiConfig';

const Card = (props) => {
     const item = props.item;
     const link = '/'+category[props.category]+'/'+item.id;
     const image = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <div className="movie-item">
            <div className="mv-img">
                <img src={image} alt="" width="185" height="284" />
            </div>
            <div className="hvr-inner">
                <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
            </div>
            <div className="title-in">
                <h6><Link to={ link }>{ item.name }</Link></h6>
                <p><IoStarSharp /><span>7.4</span> /10</p>
            </div>
        </div>
    );
};

export default Card;
