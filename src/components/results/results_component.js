// class_component.js
import React from 'react';
import './styles.css';

// lifecycle methods
// more complex logic
// contain other components

class ResultsComponent extends React.Component {

    render() {
        return (
            <div className="my-result-style">
                Result
                {this.renderMovies()}
            </div>
        );
    }

    renderMovies(){
        let movie_divs = this.props.movies.map(
            function(movie){
                return (
                    <div key={movie.imdbID} className="movie">
                    <h2>{movie.Title}</h2><div>{movie.Year}</div>
                    <img src={movie.Poster} alt={movie.Title}/>
                    </div>
                );
            }
        )

        return movie_divs;
    }
}

export default ResultsComponent;