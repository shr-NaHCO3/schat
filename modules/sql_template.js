module.exports = {
  // tables: {
  //   usersInfo: "usersInfo",     //储存用户基本信息
  //   topicInfo: "topicInfo",     //会话内容/信息

  // },
  templates: {
    init: [
      {},
      `DROP TABLE userInfo;`,
      `CREATE TABLE userInfo(
        id VARCHAR(32) PRIMARY KEY NOT NULL,
        nickname VARCHAR(32) NOT NULL,
        password VARCHAR(128) NOT NULL
      );`
    ],
    register: [
      {},
      
    ]
  }
}