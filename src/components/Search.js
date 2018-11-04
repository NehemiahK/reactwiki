import React from 'react';
import './search.css';
const Search = (props) =>{
    return <div><input type="text" onChange={props.onChange} value={props.value}/></div>;
}

export default Search;