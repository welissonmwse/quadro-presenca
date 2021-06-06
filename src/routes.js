const express = require('express')
const routes = express.Router()

const OficialController = require('./controllers/OficialController')

routes.get('/', OficialController.index)
routes.get('/listar', OficialController.listar)

routes.get('/cadastro', OficialController.create)
routes.post('/oficial', OficialController.save)
routes.post('/oficial/delete/:id', OficialController.delete)
routes.get('/oficial/:id', OficialController.show)
routes.post('/oficial/:id', OficialController.update)

module.exports = routes;