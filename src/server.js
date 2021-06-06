const {http} = require('./http')

require('./websocket/socket')

http.listen(process.env.PORT || 3000, () => console.log('Rodando....'))