import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//component import
import ResultsComponent from './components/results/results_component';
import SearchComponent from './components/search/search_component';
//service
import * as MovieService from './services/movie_service';

class App extends Component {
  constructor(props){
    super(props);

    MovieService.searchMovies();
  }
  render() {
    return (
      <div>
        <SearchComponent />
        <ResultsComponent />
      </div>
    );
  }
}

export default App;
