const sconsole = new (new require('./sconsole').sconsole)("modules.sql.js")
const mysql = require('mysql')
const templates = require('./sql_template')
const tempVar = require('./tempVar.js')


const config = require('../config')




/** 连接配置 */
let connection = mysql.createConnection({
    host: config.sql.host,
    port: config.sql.port,
    user: config.sql.user,
    password: config.sql.password,
    database: config.sql.database,
})

/** 连接至数据库并初始化 */
function init(){
    sconsole.mes('000', '正在连接数据库')
    connection.connect()
    sconsole.mes('000', '成功连接数据库')
    if(!config.sql.clearData){
        return ;
    }

    templates.templates.init().forEach((v,i,a)=>{
        connection.query(v, (err, res)=>{
            if(!err){
                sconsole.mes('000', '数据表更新成功')
                return 
            }
            sconsole.err('000', err)
        })
    })
}






// 增
//   用户注册
function register(id, nickname, password){
    tempVar.set('register_rets', [])
    templates.templates.register(id, nickname, password).forEach((v,i,a)=>{
        connection.query(v, (err, res)=>{
            if(!err){
                let rets = tempVar.get('register_rets')
                rets.push(res)
                tempVar.set('register_rets', rets)
            }else{
                tempVar.set('register_rets', 'ERROR')
            }
            console.log(tempVar.get('register_rets'))
        })
    })
    console.log('rrrrr',tempVar.get('register_rets'))
    return tempVar.get('register_rets')
}




module.exports = {
    init,
    register
}