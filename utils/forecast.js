const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=eb1c6d7a563b80403699266f7bf8f70f&query=" + latitude + "," + longitude + "&units=f"
    request({url, json:true }, (error, {body}) => {
        if(error){
            callback("Unable to connect to Location Services",undefined);
        }
        else if (body.error) {
            callback("Unable to find location",undefined)

        }
        else{
            callback(undefined, {
                
                 Forecast : body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out."+ " It feels like "  + body.current.feelslike + " degrees out"
            })
        }
    })
}

module.exports = forecast;