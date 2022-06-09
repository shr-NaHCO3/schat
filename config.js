module.exports = {
  serverIP: "192.168.2.39",      //服务器ip地址

  sql: {                         //sql
    ip: '127.0.0.1:3000',          //sql地址
    user: 'root',                  //用户名
    password: 'Ah5>s_Tq',          //sql密码
  },  

  server: {                      //服务器
    maxConnect: 1024,              //最大在线人数
    ban: [                         //ban的ip
      '123.456.789.000',
    ]
  }

  
}