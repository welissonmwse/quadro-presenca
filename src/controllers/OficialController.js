const Oficial = require('../model/Oficial')
const OficialService = require('../services/OficialServices')

module.exports = {
    
    async index (req, res)  {
        const oficiais = await OficialService.index()
        
        return res.json(oficiais)
    },

    async listar (req, res)  {
        return res.render('listar.html')
    },

    async create (req, res)  {
        return res.render('cadastro-oficial.html')
    },

    async save(req, res) {
        const oficiais = await Oficial.get()
        let idAcc = parseInt(req.body.idorder)
        for await (const oficial of oficiais) {
            if(idAcc === oficial.idorder){
                await Oficial.updateOrder(idAcc, oficial.id)
                idAcc += 1
            }
        }
        await Oficial.create({ 
            idorder: req.body.idorder,
            nome: req.body.nome,
            posto: req.body.posto,
            quadro: req.body.quadro
        })

        return res.redirect('/pages/admin')
    },

    async show(req, res){
        const oficialId = req.params.id

        const oficial = await OficialService.show(oficialId)

        return res.json(oficial)
    },

    async update(req, res) {
        const oficialId = req.params.id

        const updateOficial = {
            idorder: req.body.idorder,
            nome: req.body.nome,
            posto: req.body.posto,
            quadro: req.body.quadro
        }
        await OficialService.update(updateOficial, oficialId)

        res.redirect('/listar')
    },

    async delete(req, res){
        const oficialId = req.params.id
        
        await Oficial.delete(oficialId)
        
        return res.redirect('/listar')
    }
}