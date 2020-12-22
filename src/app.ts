// const express = require('express')
import express, { Request, Response, NextFunction } from 'express'
import { router } from './routes/todo'
import { json } from 'body-parser'
const app = express()
//body-parser中的中间件，用于把请求参数转成json
app.use(json())

app.use('/todos', router)

//中间件捕获全局Error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ retCode: -1200, retMsg: err.message })
})

app.listen(3000)
