const express = require('express')
const routes = require('./routes.js')
const path = require('path')
require('./db/config')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)



app.use(express.static("public"))
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('views engine', 'html')

app.use(express.urlencoded({extended: true}))

app.get('/pages/admin',(req, res) =>{
    return res.render('admin.html')
})

app.get('/pages/client',(req, res) =>{
    return res.render('index.html')
})

io.on('connection', (socket) => {
    console.log('Se conectou', socket.id)

})

app.use(express.json())
app.use(routes)

module.exports = {http, io}