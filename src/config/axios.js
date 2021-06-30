import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://prueba-backend-json.herokuapp.com/'
});

export default clienteAxios;
