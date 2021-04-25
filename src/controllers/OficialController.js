const Oficial = require('../model/Oficial')

module.exports = {
    
    async index (req, res)  {
        const oficiais = await Oficial.get()
        return res.render('index', {oficiais})
    },

    async listar (req, res)  {
        const oficiais = await Oficial.get()
        return res.render('listar', {oficiais})
    },

    async create (req, res)  {
        const oficiais = await Oficial.get()
        return res.render('oficial')
    },

    async save(req, res) {
        const oficiais = await Oficial.get()
        let idAcc = parseInt(req.body.idorder)
        for await (const oficial of oficiais) {
            if(idAcc === oficial.idorder){
                await Oficial.updateOrder(idAcc, oficial.id)
                idAcc += 1
                console.log('Entrei no IF ', idAcc)
            }
        }
        await Oficial.create({ 
            idorder: req.body.idorder,
            nome: req.body.nome,
            posto: req.body.posto,
            quadro: req.body.quadro
        })

        return res.redirect('/')
    },

    async show(req, res){
        const oficiais = await Oficial.get()
        const oficialId = req.params.id

        const oficial = oficiais.find(oficial => Number(oficial.id) === Number(oficialId))

        if(!oficial) {
            return res.send('Oficial not found!!')
        }

        return res.render('oficial-edit', {oficial})
    },

    async update(req, res) {
        const oficialId = req.params.id

        const updateOficial = {
            idorder: req.body.idorder,
            nome: req.body.nome,
            posto: req.body.posto,
            quadro: req.body.quadro
        }

        await Oficial.update(updateOficial, oficialId)

        res.redirect('/listar')
    },

    async delete(req, res){
        const oficialId = req.params.id
        
        await Oficial.delete(oficialId)
        
        return res.redirect('/listar')
    }
}