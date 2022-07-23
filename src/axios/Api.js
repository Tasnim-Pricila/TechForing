import axios from "axios";

const Api = axios.create({
    baseURL : 'https://tf-practical.herokuapp.com/api/'
})

export default Api;