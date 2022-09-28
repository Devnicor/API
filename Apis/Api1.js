import fetch from 'node-fetch';

const URL = 'https://covid-api.mmediagroup.fr/v1/cases?country=Colombia'
fetch(URL)
.then(res => res.json())
.then(data => {
    let vec = Object.values(data)
    let muertes = [];

    vec.forEach(element => {
        muertes.push(element.deaths);
    });
    muertes.sort();
    console.log(muertes);
})