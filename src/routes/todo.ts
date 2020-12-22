import { Router } from 'express'
import {
  createTodo,
  getTodoList,
  updateTodo,
  deleteTodo,
} from '../controller/todo_controller'
const router = Router()

router.get('/', getTodoList)

router.post('/', createTodo)

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)

export { router }
