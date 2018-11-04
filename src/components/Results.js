import React, { Component } from 'react';
import Card from './Card';

const Results = (props) => {
    return <div>{props.results.map( (el) => <Card result={el} key={el.title}/>)}</div>
}

export default Results;