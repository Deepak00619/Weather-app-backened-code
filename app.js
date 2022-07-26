const request = require('request');
const geocode= require('./utils/geocode');
const forecast= require('./utils/forecast');
//here 
//nnn
// Input
//gjhwgd
//dep
//aryan
//new
//YULHKJHJKHJ
//TI-5
const address= process.argv[2];
//code starts from here
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
