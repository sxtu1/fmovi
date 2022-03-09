import React, { useState, useEffect } from 'react';
// import PropTypes  from 'prop-types';

import tmdbApi, { category } from '../api/tmdbApi';
import apiConfig from '../api/apiConfig';

import Card from './Card';


const Theater = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if(props.type !== 'similar'){
                switch(props.category){
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id)
            }
        }
        getList();
    },[]);
    return (
        <div className="row">
            <div className="slick-multiItem">
                <div className="slide-it">
                    {items.map((item, i) => {
                        <Card item={item} category={props.category} />
                    })}
                </div>
            </div>
        </div>
    );
};

// Theater.propTypes = {
//     category: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
// };

export default Theater;
