const sconsole = new (new require('./sconsole').sconsole)("modules.sql.js")
const mysql = require('mysql')
const templates = require('./sql_template')


const config = require('../config')


let connection = mysql.createConnection({
    host: config.sql.host,
    port: config.sql.port,
    user: config.sql.user,
    password: config.sql.password,
    database: config.sql.database,
})

// 初始化、链接
function init(){
    sconsole.info('000', '正在连接数据库')
    connection.connect()
    sconsole.mes('000', '成功连接数据库')
    if(!config.sql.clearData){
        return ;
    }

    templates.templates.init.forEach((v,i,a)=>{
        if(i==0){
            return ;
        }
        connection.query(v, (err, res)=>{
            if(!err){
                sconsole.mes('000', '数据表更新成功')
                return ;
            }
            sconsole.err('000', err);
        })
    })
}

// 增
//   用户注册
function register(id, nickname, password){
    
}




module.exports = {
    init,
}