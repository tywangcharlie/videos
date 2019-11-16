import axios from 'axios';

const KEY = 'AIzaSyDIiyJxeTQbgq-SBXCUGy-7dEBLKb6mqsA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxReasults: 5,
        key: KEY        
    }
});

