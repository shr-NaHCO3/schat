module.exports = {
  templates: {
    init: [
      `DROP TABLE userInfo;`,
      `CREATE TABLE userInfo(
        id VARCHAR(32) PRIMARY KEY NOT NULL,
        nickname VARCHAR(32) NOT NULL,
        password VARCHAR(128) NOT NULL
      );`
    ],

    register:[
      `INSERT INTO userInfo(
        \`id\`,
        \`nickname\`,
        \`password\`
      ) VALUES (
        ?,
        ?,
        ?
      )`
    ],

  }
}