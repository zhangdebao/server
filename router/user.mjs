import express from 'express'
import { getAllUser, createUser, updateUser, deleteUser, getUserByCondition } from '../db/service/user.mjs'
import { setResult } from '../db/dao/result.mjs'
const router = express.Router()
router.get('/', async (request, response, next) => {
    let users = await getAllUser()
    users = users.map(item => item.dataValues)
    response.send(setResult({
        data: users
    }))
})

router.get('/:id', async (request, response, next) => {
    const { id } = request.params
    let users = await getUserByCondition({
        id
    })
    if (users) {
        users = users.dataValues
    }
    response.json(setResult({
        data: users
    }))
})

router.post('/', async (request, response, next) => {
    const num = await createUser(request.body)
    let message = '添加用户成功!'
    if (num.length === 1) { 
        message = '添加用户失败!'
    }
    response.json(setResult({
        message
    }))
})

router.put('/:id', async (request, response, next) => {
    const body = request.body
    const { id } = request.params
    const condition = {
        id
    }
    const num = await updateUser(body, condition)
    console.log('num', num)
    let message = '修改用户成功!'
    if (num.length < 1) {
        message = '修改用户失败!'
    }
    response.send(setResult({
        message
    }))
})

router.delete('/:id', async (request, response, next) => {
    const condition = request.params
    const user = await deleteUser(condition)
    response.json(setResult(user.dataValues))
})
export default router