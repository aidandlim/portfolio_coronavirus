import axios from 'axios';

export const getWorldData = (cb) => {
    axios({
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'f2fc86d7c6msh9411092780d113ep1fedb9jsnd43f94f02e3c',
        },
    })
        .then((res) => {
            const arr = res.data.response;
            const deleteArr = ['World', 'Europe', 'North-America', 'South-America', 'Asia', 'Africa', 'Oceania'];

            for(const i in deleteArr) {
                const index = arr.findIndex((element) => element.country === deleteArr[i]);
                if (index !== -1) arr.splice(index, 1);
            }

            if (res.status === 200) cb(arr);
        })
        .catch(() => {
            cb([]);
        });
};

export const getContinentData = (cb) => {
    axios({
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'f2fc86d7c6msh9411092780d113ep1fedb9jsnd43f94f02e3c',
        },
    })
        .then((res) => {
            const arr = res.data.response;
            const result = [];
            const includeArr = ['All', 'Europe', 'North-America', 'South-America', 'Asia', 'Africa', 'Oceania'];

            for(const i in includeArr) {
                const index = arr.findIndex((element) => element.country === includeArr[i]);
                if (index !== -1) result.push(arr[index]);
            }

            if (res.status === 200) cb(result);
        })
        .catch(() => {
            cb([]);
        });
};
