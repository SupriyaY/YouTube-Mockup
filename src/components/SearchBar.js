import React from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component{
    state = {
        searchTerm: ""
    }

    // need 'this' here refers to the class SearchBar
    // setState what the current state of the property in the state object
    // this function will update our search term in the state
    handleChange = (event) => {this.setState({searchTerm: event.target.value })}

//destructuring - takes in the search term from this.state
    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm)

        event.preventDefault();
    }

    render(){
        const {searchTerm} = this.state
     return (
        <Paper elevation={6} style={{padding: '25px'}}>
            <form onSubmit={this.handeSubmit}>
                <TextField fullWidth label="Search..." value={searchTerm} onChange={this.handleChange} />
                </form>
            </Paper>
        
        
        
        );
    }


}






export default SearchBar;