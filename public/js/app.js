console.log('A new JavaScript File has been loaded!')


const weatherForm = document.querySelector('form')

const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
            messageOne.textContent = error
        }else{
            messageTwo.textContent = data.forecastMessage
            console.log(data.forecastMessage)
            console.log(data.address)
        }
    })
})
    
    console.log(location)
})