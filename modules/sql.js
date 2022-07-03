const sconsole = new (new require('./sconsole').sconsole)("modules.sql.js")
const mysql = require('mysql')
const templates = require('./sql_template')


const config = require('../config')




/** 连接配置 */
let connection = mysql.createPool({
    host: config.sql.host,
    port: config.sql.port,
    user: config.sql.user,
    password: config.sql.password,
    database: config.sql.database,
})

/** 实现同步操作sql */
function querySync(sql, values){
    return new Promise((res, rej) => {
        connection.getConnection(function(err, conn) {
            if(err){
                rej(err)
            }else{
                conn.query(sql, values, (err, rows) => {
                    if(err){
                        rej(err)
                    }else{
                        res(rows)
                    }
                })
            }
            conn.release()
        })
    })
}


async function init(){
    return
}



/** 增 */
    /** 注册 */
    async function register(userID, nickname, password){
        return await querySync(templates.templates)
    }