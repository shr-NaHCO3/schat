const sconsole = new (new require('./modules/sconsole.js').sconsole)("index.js")
let express = require('express')
let path = require('path')
let app = express()
let server = require('http').createServer(app)
let io = require('socket.io')(server)

app.use('/pages', (req, res, next) => {
    res.status(200).sendFile(path.resolve(__dirname, 'pages/', 'index.html'))
})

io.on('connection', client => {
    sconsole.info('000', `new connection ${client.id}`)
    client.on('message', data =>{
        sconsole.mes('000', data)
        client.send('awa!'+data+client.id)
        io.emit('broadcast', data)
    })
    client.on('disconnect', () =>{
        sconsole.info('000', `connection ${client.id} was closed`)
    })
})

server.listen(3000, () => {
    sconsole.info('000', 'success start server on 3000')
})