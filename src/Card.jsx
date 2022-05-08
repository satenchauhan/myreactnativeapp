import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'


const Card=(props)=>{
    return (
        <div className="cards">
            <div className="card">
                <img src={props.movieImg} alt ="My Movie" className="card_img" />
                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                    <h5 className="card_title">{props.movieName}</h5>
                    <a href={props.link}>
                        <button className="btn btn-success"> Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;