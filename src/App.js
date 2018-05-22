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

    this.state={
      results:[]
    }
  }

  onSearch(search_term){
    let app=this;
    MovieService.searchMovies(
      search_term,
      function(response){
        app.setState({results:response.data.Search});
        console.log(response.data.Search);
      }
    );
  }

  render() {

    return (
      <div>
        <SearchComponent onSearch={this.onSearch.bind(this)} />
        <ResultsComponent movies={this.state.results}/>
      </div>
    );
  }
}

export default App;
