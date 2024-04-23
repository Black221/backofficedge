import axios from "axios";

export default axios.create({
    baseURL: "https://apex.oracle.com/pls/apex/lhacksrt",
    headers: {
        'Accept' : '*/*',
        'Access-Control-Allow-Origin' : '*'
    }
});