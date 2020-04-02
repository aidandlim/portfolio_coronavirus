import axios from 'axios';

export const getWorldData = cb => {
    axios({
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'f2fc86d7c6msh9411092780d113ep1fedb9jsnd43f94f02e3c'
        }
    })
        .then(res => {
            if (res.status === 200) cb(res.data.response);
        })
        .catch(() => {
            cb([]);
        });
};
