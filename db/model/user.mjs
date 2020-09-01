import { connection } from '../mysql.sequelize.mjs'
import Sequelize from 'sequelize'
const Model = Sequelize.Model

class User extends Model {}
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING(255),
        defaultValue: ''
    },
    avatar: {
        type: Sequelize.STRING(255),
        defaultValue: ''
    },
    password: {
        type: Sequelize.STRING(255),
        defaultValue: ''
    }
}, {
    sequelize: connection,
    timestamps: false,
    modelName: 'users'
  })

export default User