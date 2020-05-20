import axios from 'axios';

const api = axios.create({
  baseURL:
    ' https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/',
});

export default api;
