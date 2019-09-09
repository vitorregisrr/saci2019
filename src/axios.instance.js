import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ifeventos.herokuapp.com/api/saci',
    headers: {'Authorization': 'Bearer saci'}
});

export default instance;