console.log('A new JavaScript File has been loaded!')

fetch('http://localhost:3000/weather?address=Boston').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.forecastMessage)
            console.log(data.address)
        }
    })
})