import Axios from 'axios';

const wordpress = Axios.create({
    baseURL: 'https://api.matthewadshead.com/'
});

export default wordpress;
