const { io } = require('../http')
const OficialServices = require('../services/OficialServices')


io.on("connection", async (socket) => {
    const oficiais = await OficialServices.index()
    socket.emit("oficiais", oficiais)  
    
    socket.on('update_status', async (id) => {
        const status = await OficialServices.updateStatus(id)
        
        socket.broadcast.emit('oficiaisUpdate', status)
    })
})
 