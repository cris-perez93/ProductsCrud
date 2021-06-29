import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://product-crud-project.herokuapp.com/api'
});

export default clienteAxios;
