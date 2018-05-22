// class_component.js
import React from 'react';
import './styles.css';

// lifecycle methods
// more complex logic
// contain other components

class SearchComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search_term:''
        }
    }   

    onInputChange(event){
        this.setState({search_term:event.target.value});
    }

    onButtonClick(){
        
        this.props.onSearch(this.state.search_term)
    }
    render() {
        return (
            <div className="my-search-style">
                <label htmlFor="">Search</label>
                <input type="text" placeholder="Search movies..." value={this.state.search_term} onChange={this.onInputChange.bind(this)}/>
                <button onClick = {this.onButtonClick.bind(this)}>Go</button>
            </div>
        );
    }
}

export default SearchComponent;