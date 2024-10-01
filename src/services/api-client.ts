import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f3533792275142748446e75b1a8451a3'
    }
})