import axios from 'axios';

import { getUniqueObjectArray } from '../util';

// export const getCountries = (cb) => {

// }

export const getCountryHistories = (country, cb) => {
    axios({
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/history',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'f2fc86d7c6msh9411092780d113ep1fedb9jsnd43f94f02e3c',
        },
        params: {
            country: country,
        },
    })
        .then((res) => {
            if (res.status === 200) cb(getUniqueObjectArray(res.data.response));
        })
        .catch(() => {
            cb([]);
        });
};
