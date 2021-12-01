const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ae4fc086b0895496b84534e8ae5c7c69&query='+ address

    request({url : url, json : true }, (error, response) => {

        if(error) {
            callback('Unable to connect to weather services', undefined)
        } else if(response.body.error){
            callback('Couldnt find location. Try another search', undefined)
        }else {
            callback(undefined, 'It is ' + response.body.current.temperature + ' degrees in ' + response.body.request.query)
        }
    })
}

module.exports = forecast