import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        term: ''
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={(event) => this.setState({ term: event.target.value })} placeholder="Enter Keyword"/>
                        <button type="submit" className="btn btn-danger px-5">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}
