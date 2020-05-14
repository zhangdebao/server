import Sequelize from 'sequelize'

const connection = new Sequelize('server', 'root', 'zhangdebao2020', {
  host: '0.0.0.0',
  dialect: 'mysql',
  pool: {         // 线程池
    max: 5,
    min: 1,
    idle: 10000
  }
})
const testConnection = function() {
  connection.authenticate().then(() => {
    console.log('连接成功');
  }).catch((err) => {
    console.error('连接失败', err);
  })
}

testConnection()

export {
  testConnection,
  connection
}
