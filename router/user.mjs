import express from 'express'
const router = express.Router()
router.get('/', (request, response, next) => {
    console.log('request', request.query)
    response.send('response')
})

router.post('/', (request, response, next) => {
    console.log('post', request.body)
    response.json(request.body)
})
export default router