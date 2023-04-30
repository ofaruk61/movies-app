import axios from "axios";

const instance = axios.create({
    baseURL:'https://644cec0e57f12a1d3dd39a6f.mockapi.io',
});


export default instance;