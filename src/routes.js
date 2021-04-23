const express = require('express')
const path = require('path')
const app = express()

const OficialController = require('./controllers/OficialController')

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))
app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', OficialController.index)
app.get('/listar', OficialController.listar)

app.get('/oficial', OficialController.create)
app.post('/oficial', OficialController.save)
app.post('/oficial/delete/:id', OficialController.delete)
app.get('/oficial/:id', OficialController.show)
app.post('/oficial/:id', OficialController.update)


app.listen(3000, () => console.log('Rodando....'))