import express from 'express'
import { getAllUser, createUser, updateUser, deleteUser, getUserByCondition } from '../db/service/user.mjs'
import { setResult } from '../db/dao/result.mjs'
const router = express.Router()
router.get('/', async (request, response, next) => {
    let users = await getAllUser()
    users = users.map(item => item.dataValues)
    response.send(setResult(users))
})

router.get('/:id', async (request, response, next) => {
    const { id } = request.params
    let users = await getUserByCondition({
        id
    })
    if (users) {
        users = users.dataValues
    }
    response.json(setResult(users))
})

router.post('/', async (request, response, next) => {
    const user = await createUser(request.body)
    response.json(setResult(user.dataValues))
})

router.put('/', async (request, response, next) => {
    const body = request.body
    const condition = JSON.parse(body.condition)
    delete body.condition
    const user = await updateUser(body, condition)
    response.json(setResult(user.dataValues))
})

router.delete('/:id', async (request, response, next) => {
    const condition = request.params
    const user = await deleteUser(condition)
    response.json(setResult(user.dataValues))
})
export default router