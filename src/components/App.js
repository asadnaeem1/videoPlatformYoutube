import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar';

export default class App extends Component{
    state = {
        term: ''
    }
    onSearchSubmit = (term) => {
        this.setState({ term });
    }
    render(){
        return (
            <div className='container mt-3'>
                <h1 className='display-4'>videoPlatformYoutube</h1>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
};