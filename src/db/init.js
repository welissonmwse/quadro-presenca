const Database = require('./config')

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE oficiais(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idorder INT,
            nome TEXT,
            posto TEXT,
            quadro TEXT
        )`)


        await db.run(`INSERT INTO oficiais (
            idorder,
            nome,
            posto,
            quadro
        )VALUES(
            "1",
            "CAMPOS",
            "AE",
            "ARM"
        );`)

        await db.close()
    }
}

initDb.init()