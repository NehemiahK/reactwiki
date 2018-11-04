import React from 'react';
import './card.css';


const Card = (props) => {
    return <div className="card">
        <div className="link" onClick={() =>window.open(props.result.link,'_blank')}>
        <h4 className="title">{props.result.title}</h4>
        <p>{props.result.description}</p>
            </div>
        </div>
        

}

export default Card;