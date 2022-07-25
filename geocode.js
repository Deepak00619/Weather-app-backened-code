
const request= require('request');

//weather project
//trie
//npoo

const geocode = (address,callback) =>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent (address) +'.json?access_token=pk.eyJ1IjoiMDVkZWVweiIsImEiOiJja2M0YjVkOG4wNjZhMnN0NmJ1OG9xOWw1In0.VVr7HdlhYnttxRlfbBDk0w&limit=1';
    request({url , json: true},(error, {body} ) =>{
        if(error){
            callback('unable to connect to loaction services',undefined);
        }else if(body.features.length=== 0){
            callback('unable to find geoloaction',undefined);
        } else {
            callback(undefined,{
                latitude: body.features[0].center[0],
                longitude:body.features[0].center[1], 
                location: body.features[0].place_name
            })
        }
    })
};




module.exports= geocode;
