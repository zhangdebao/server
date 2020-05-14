import express from 'express'
import { getAllUser, createUser, updateUser, deleteUser, getUserByCondition } from '../db/service/user.mjs'
const router = express.Router()
router.get('/', async (request, response, next) => {
    // console.log('request', request.query)
    let users = await getAllUser()
    users = users.map(item => item.dataValues)
    response.json(users)
})

router.get('/:id', async (request, response, next) => {
    const { id } = request.params
    let users = await getUserByCondition({
        id
    })
    if (users) {
        users = users.dataValues
    }
    response.json(users)
})

router.post('/', async (request, response, next) => {
    const user = await createUser(request.body)
    response.json(user.dataValues)
})

router.put('/', async (request, response, next) => {
    const body = request.body
    const condition = JSON.parse(body.condition)
    delete body.condition
    const user = await updateUser(body, condition)
    response.json(user.dataValues)
})

router.delete('/', async (request, response, next) => {
    const user = await deleteUser(request.body)
    response.json(user.dataValues)
})
export default router