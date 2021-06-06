const Database = require('./config')

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE oficiais(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idorder INT,
            nome TEXT,
            posto TEXT,
            quadro TEXT,
            status TEXT DEFAULT "null"
        )`)


        await db.run(`INSERT INTO oficiais (
            idorder,
            nome,
            posto,
            quadro,
            status
        )VALUES(
            "1",
            "CAMPOS",
            "AE",
            "ARM",
            "null"
        );`)

        await db.close()
    }
}

initDb.init()