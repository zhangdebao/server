import express from 'express'
import UserRouter from './user.mjs'
import CookieParser from 'cookie-parser'
const App = express()
App.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
})

App.use(express.json()) // 格式化请求参数
App.use(express.urlencoded({ extended: true }))
App.use(CookieParser())     // 引入COOKIE
App.use('/user', UserRouter)
export default App