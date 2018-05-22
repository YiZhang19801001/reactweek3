// class_component.js
import React from 'react';
import './styles.css';

// lifecycle methods
// more complex logic
// contain other components

class SearchComponent extends React.Component {
    render() {
        return (
            <div className="my-search-style">
                <label htmlFor="">Search</label>
                <input type="text" placeholder="Search movies..."/>
                <button>Go</button>
            </div>
        );
    }
}

export default SearchComponent;