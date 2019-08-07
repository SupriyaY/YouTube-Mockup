import axios from 'axios';

export default axios.create({

baseURL: 'https://www/googleapis.com/youtube/v3',
params:{ 
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyBxPEGM_2h-RIGM2D3-cYeqZ4BlMRv4fHY'
}
});