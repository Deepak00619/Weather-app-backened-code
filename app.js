
const request = require('request');
const geocode= require('./utils/geocode');
const forecast= require('./utils/forecast');

// Input

const address= process.argv[2];

if(!address){
    console.log('Please provide an address');
}else {
    geocode(address,(error,{latitude, longitude, location}) =>{
   
        if(error){
            return console.log('error')
        }
         forecast(latitude,longitude, (error, forecastdata) => {
            
             if(error){
                 return console.log('error');
             }
             console.log(location)
             console.log(forecastdata)
           })
         
     });
}

// url= 'http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=b96eb134a8f3639b7f394b39dd59ac05&units=metric';

// request({url: url, json: true},(error,response) => {

//     if(error){
//         console.log('Unable to connect to weather App!')
//     } else if (response.body.error){
//         console.log('Unable to find location');
//     } 
//     else {
//     console.log('the temp is: '+response.body.main.temp+' and visibility: '+response.body.visibility+' in:  '+
//     response.body.sys.country);
// }
// });

// const geocodeURL= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiMDVkZWVweiIsImEiOiJja2M0YjVkOG4wNjZhMnN0NmJ1OG9xOWw1In0.VVr7HdlhYnttxRlfbBDk0w&limit=1';

// request({url: geocodeURL, json: true},(error,response) => {
//     if(error){
//         console.log('unable to connect to location services');
//     } else if(response.body.features.length===0){
//         console.log('unable to find geoLocation,Try another search')
//     } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude= response.body.features[0].center[1];
//     console.log('latitude: '+latitude+' longitude: '+longitude);
//     }
// })




//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
