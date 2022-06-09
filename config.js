module.exports = {
  serverIP: "192.168.2.39",      //服务器ip地址

  sql: {                         //sql
    host: 'localhost',             //sql地址
    port: '3306',                  //sql端口
    user: 'root',                  //用户名
    password: 'wXj0pxu5s',         //sql密码
    database: 'schat',             //数据库名
    clearData: true,               //每次重启后重置数据
  },  

  server: {                      //服务器
    maxConnect: 1024,              //最大在线人数
    ban: [                         //ban的ip
      '123.456.789.000',
    ]
  }

  
}