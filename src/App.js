import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './components/Results';
import Search from './components/Search';

class App extends Component {
  state = {
    input:'',
    results:[]
  };

  handleChange = (e) => {
    this.setState({
      input:e.target.value
    });
  }

  getResults = () => {
    let seachTerm = this.state.input;
    let url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search="${seachTerm}"`;

    fetch(url)
    .then(data => data.json())
    .then(res => {
        let results = [];
        for (let i=0; i<res[1].length; i++){
          let result = {
            title: res[1][i],
            description: res[2][i],
            link: res[3][i]
          }
          results.push(result);
        }
        
         this.setState({
         results
         })
    })
  }

  render() {
    return (
      <div className="App">
        <h2>React Wiki App</h2>
        <p>Enter a search term below or click 
          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank"> here </a>
           for a random article</p>
        <Search onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.getResults}>Search</button>
        <Results results={this.state.results.sort((a,b) => a.title < b.title ? -1: 1)}/>
      </div>
    );
  }
}

export default App;
