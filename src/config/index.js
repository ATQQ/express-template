const mongodbConfig = {
  host: process.env.MONGO_DB_HOST,
  port: +process.env.MONGO_DB_PORT,
  database: process.env.MONGO_DB_NAME,
  user: process.env.MONGO_DB_USER,
  password: process.env.MONGO_DB_PWD,
}

const mysqlConfig = {
  host: process.env.MYSQL_DB_HOST,
  port: +process.env.MYSQL_DB_PORT,
  database: process.env.MYSQL_DB_NAME,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PWD,
}

const serverConfig = {
  port: +process.env.SERVER_PORT,
  hostname: 'localhost',
}
module.exports = {
  mongodbConfig,
  serverConfig,
  mysqlConfig,
}
