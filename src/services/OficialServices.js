const Oficial = require('../model/Oficial')

module.exports ={
    async index(){
        const oficiais = await Oficial.get()
        
        return oficiais
    },

    async updateStatus(id){
        const oficiais = await Oficial.get()

        const oficial = oficiais.find(oficial => Number(oficial.id) === Number(id))

        if(oficial) {
            if(oficial.status === 'checked'){
                await Oficial.updateStatus(id, 'null')
            }else{
                await Oficial.updateStatus(id, 'checked')
            } 
        }

        return await Oficial.get()
    },
    
    async show(id){
        const oficiais = await Oficial.get()
        const oficial = oficiais.find(oficial => Number(oficial.id) === Number(id))

        if(!oficial) {
            return {message: 'Oficial not found!!'}
        }
        return oficial
    },

    async update(updateOficial, oficialId){
        
        await Oficial.update(updateOficial, oficialId)
    }
}