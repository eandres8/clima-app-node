const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=110b5115f8d8beef34d13261c3e82c7a`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}