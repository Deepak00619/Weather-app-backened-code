
const request = require("request");


const forecast= (lat,lon,callback) =>{
    const url= 'http://api.openweathermap.org/data/2.5/weather?lat='+  lat +'&lon='+ lon +'&appid=b96eb134a8f3639b7f394b39dd59ac05';
    request({url, json: true},(error, {body}) =>{
        if(error){
            callback('unable to connect to loaction services',undefined);
        } else {
            callback(undefined,'the temp is: '+body.main.temp+' and humidity: '+body.main.humidity)
        }
    })
}

module.exports= forecast;
