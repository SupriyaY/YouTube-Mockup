import React from 'react';
import {SearchBar, VideoDetail, VideoList} from './components';
import youtube from './api/youtube';

import { Grid } from '@material-ui/core'

class App extends React.Component {

  
    //stops execution of the code until something is fetched
    handleSubmit =  async (searchTerm) =>{
        const response = await youtube.get('search',  {
        
        
        params:  {
            part: 'snippet',
            maxResults: 5,
            q: searchTerm,
        }
        

        });

        console.log(response)

    }



    render() {
        return (

<Grid style={{justifyContent: 'center'}} container spacing={10}>
<Grid item xs={12}>
<Grid container spacing={10}>
<Grid item xs={12}>
    {/* SearchBar Component */}
    {/* transfering state to app.js */}
    <SearchBar onFormSubmit={this.handleSubmit} />
    </Grid>
    <Grid item xs={8}>
        {/* VideoDetail omponent */}
        <VideoDetail />
</Grid>
    <Grid item xs={4}>
        {/* This is where VideoList component */}
        <VideoList />
</Grid>
</Grid>
</Grid>
</Grid>    
);
}
}

export default App;