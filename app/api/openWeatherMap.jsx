var axios = require('axios');

//b651051269244721bffe4d3525e7b2a2
//http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b651051269244721bffe4d3525e7b2a2
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b651051269244721bffe4d3525e7b2a2&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                console.log(res.data.message);
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function (res) {
           var err = 'Second : City is Not Found';
           throw new Error(err); 
        });
    }
}