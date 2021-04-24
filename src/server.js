const express = require('express')
const routes = require('./routes.js')
const path = require('path')
const app = express()


app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log('Rodando....'))