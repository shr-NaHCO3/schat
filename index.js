/** 自定义组件 */
const sconsole = new (new require('./modules/sconsole.js').sconsole)("index.js")
const sql = require('./modules/sql.js')
const route = require('./modules/route.js')





/** 标准组件 */
const express = require('express')
const path = require('path')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)





/** 配置 */
const config = require('./config.js')




/** sql */
sql.init()


io.on('connection', socket => {

    socket.on('message', data=>{
        sconsole.info('000', data)
    })

    socket.on('disconnect', () =>{
        sconsole.info('000', `connection ${socket.id} was closed`)
    })

    socket.on('register', data=>{
        socket.emit('register', route.register(data))
        sconsole.mes('000', JSON.stringify(route.register(data)))
    })
})

server.listen(3000, () => {
    sconsole.info('000', 'success start server on 3000')
    sconsole.mes('000', 'welcome!')
})







const homework = {
    "tonight": [    
        "语文名著",
        "语文古诗",
        "英语阅读、期末练习"
    ],

    
    "now":  [
        "历史校本56",
        "生物1-5"
    ]
}