const request = require("request");

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.tomorrow.io/v4/timelines?location=' + latitude + ',' + longitude + '&fields=temperature&timesteps=1h&units=metric&apikey=ZCqAY0de6j3w6ASllpGqK4G8Dli3esXu'
    request({url, json:true}, (error, {body})=>{
    if(error){
        callback('Unable to connect to weather services!', undefined)
    } else if(body.error){
         callback('Unable to find location', undefined)
     }
    
    else{
        callback(undefined, body.data.timelines[0].intervals[1].values.temperature)
    }
    
})
}

module.exports = forecast
