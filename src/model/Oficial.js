const Database = require('../db/config')

module.exports = {
    async get(){
        const db = await Database()
        const data = await db.all(`SELECT * FROM oficiais ORDER BY idorder`)

        await db.close()

        return data.map(oficial =>({
            id: oficial.id,
            idorder: oficial.idorder,
            nome: oficial.nome,
            posto: oficial.posto,
            quadro: oficial.quadro
        }))
    },

    async create(newOficial){
        const db = await Database()
        const data = await db.run(`INSERT INTO oficiais (
            idorder,
            nome,
            posto,
            quadro
        )VALUES(
            ${parseInt(newOficial.idorder)},
            UPPER("${newOficial.nome}"),
            "${newOficial.posto}",
            "${newOficial.quadro}"
        )`)

        await db.close()
    },

    async update(updatedOficial, oficialId){
        const db = await Database()

        await db.run(`UPDATE oficiais SET 
        idorder = ${parseInt(updatedOficial.idorder)},
        nome = UPPER("${updatedOficial.nome}"),
        posto = "${updatedOficial.posto}",
        quadro = "${updatedOficial.quadro}"
        WHERE id = ${oficialId}
        `)

        await db.close()
    },

    async updateOrder(idOrderAcc, oficialId){
        const db = await Database()

        await db.run(`UPDATE oficiais SET 
        idorder = ${parseInt(idOrderAcc + 1)}
        WHERE id = ${oficialId} ORDER BY idorder
        `)

        await db.close()
    },

    async delete(id){
        const db = await Database()

        await db.run(`DELETE FROM oficiais WHERE id = ${id}`)

        await db.close()
    },
}