import Users from '../model/user.mjs'
export function getAllUser () {
    return Users.findAll()
}
export function getUserByCondition (condition) {
    return Users.findOne({
        where: condition
    })
}
export function createUser (data, fields = []) {
    fields = Object.keys(data)
    return Users.create(data, {
      fields
    })
}
export function updateUser (data, condition) {
    return Users.update(data, {
      where: condition
    })
}
export function deleteUser (condition) {
    return Users.destroy({
      where: condition
    })
}
