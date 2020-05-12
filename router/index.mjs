import express from 'express'
import UserRouter from './user.mjs'
import CookieParser from 'cookie-parser'
const App = express()

App.use(express.json()) // 格式化请求参数
App.use(express.urlencoded({ extended: true }))
App.use(CookieParser())     // 引入COOKIE
App.use('/user', UserRouter)
export default App