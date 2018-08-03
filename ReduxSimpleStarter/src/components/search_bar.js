import React, { Component } from 'react'


class SearchBar extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {term: ''}
    }
    
    // Render component for React.Component (madatory for each class)
    render(){
        return (
        <div className="search-bar">
             <input 
                placeholder="Search for video"
                value={this.state.term}
                onChange = {(event)=> this.onInputChange(event.target.value)}/>
        </div>
        )
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
}

export default SearchBar