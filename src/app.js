const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast.js')

const pubDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(pubDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title : 'Sleek weather App',
        name : 'Victor Sneaks'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About the Weather App',
        name : 'Victor Sneaks'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title : 'Help Page',
        name : 'Victor Sneaks',
        message : 'I have been trying to access the Weather App but it is not working.'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error : "You must provide an address"
        })
    } else {
       forecast(req.query.address, (error, forecastResponse) => {
           if(error){
               res.send({
                   error
               })
           }else {
               res.send({
                   forecastMessage : forecastResponse,
                   address : req.query.address
               })
           }
       })
    }
})

app.get('/products', (req, res) => {

    if(!req.query.search){
        return res.send({
            error : "You have to provide a search term."
        })
    }

    console.log(req.query)
    res.send({
        products : [

        ]
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title : 'Article Not found',
        message : '404 Help Article not found.',
        name : 'Victor Sneaks'
    })
})


app.get('*', (req, res) => {
    res.render('error', {
        title : 'Page not found.',
        message : '404 Error! Page not found.',
        name : 'Victor Sneaks'
    })
})

app.listen(3000, () => {
    console.log('Server is up and running.')
})