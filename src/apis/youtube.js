import axios from 'axios';

const KEY = 'AIzaSyA7xZsmSVz5uLa6edNTjfv0Drx6CcCi9KM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxReasults: 5,
        key: KEY        
    }
});

