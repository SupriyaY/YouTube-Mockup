import React from 'react';

import { Grid } from '@material-ui/core'

class App extends React.Component {
    render() {
        return (

<Grid style={{justifyContent: 'center'}} container spacing={10}>
<Grid item xs={11}>
<Grid container spacing={10}>
<Grid item xs={12}>
    {/* SearchBar Component */}
    </Grid>
    <Grid item xs={8}>
        {/* VideoDetail omponent */}
</Grid>
    <Grid item xs={4}>
        {/* This is where VideoList component */}
</Grid>
</Grid>
</Grid>
</Grid>    
);
}
}

export default App;