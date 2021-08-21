import axios from 'axios';

// const https = require('https');
//
// const agent = new https.Agent({
//     rejectUnauthorized: false,
// });

const instance = axios.create({
    baseURL: 'http://209.145.58.8:3000'
});

instance.interceptors.request.use(async (config) => {
    config.headers.ContentType = 'application/json';
    return config;
});

export const getUsers = async (query) => (
    await instance.get('/users?' + query)
);