const request = require('request')

const geoCode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoibmlja2RhbW15MiIsImEiOiJjazlkbzNtOWMwNXQ1M29ucW9qZmpiNzYwIn0.Gi6po4w0MSOHNQqAgtovwQ&limit=1"
    request({url, json:true }, (error, {body}) => {
        if(error){
            callback("Unable to connect to Location Services",undefined);
        }
        else if (body.features.length === 0) {
            callback("Unable to find location",undefined)

        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode;