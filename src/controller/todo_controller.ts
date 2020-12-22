//
import { TODO } from '../model/todo'
import { RequestHandler } from 'express'
let todoList: TODO[] = []

const createTodo: RequestHandler = (req, res, next) => {
  //显式 说明请求体的类型
  const text = (req.body as { text: string }).text
  const todo = new TODO(Math.random().toString(), text)
  todoList.push(todo)
  res.status(201).json({ retCode: '0', data: todo.id })
}

const getTodoList: RequestHandler = (req, res, next) => {
  res.json({ retCode: '0', data: todoList })
}
const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id
  const newText = (req.body as { text: string }).text
  const index = todoList.findIndex((todo) => todo.id === id)
  if (index >= 0) {
    todoList[index] = new TODO(id, newText)
  } else {
    // res.json({ retCode: '-1003', retMsg: '此id信息不存在' })
    throw Error('此id信息不存在')
  }
  res.json({ retCode: '0', data: id })
}
const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id
  const index = todoList.findIndex((todo) => todo.id === id)
  if (index < 0) {
    throw new Error('此id信息不存在')
  }
  todoList.splice(index, 1)
  res.json({ retCode: '0', data: id })
}

export { createTodo, getTodoList, updateTodo, deleteTodo }
