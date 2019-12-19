import { Router } from 'express'
import ListTodoController from './controllers/ListTodoController'
import TodoController from './controllers/TodoController'

const routes = new Router()

routes.get('/', ListTodoController.index)
routes.get('/todo', TodoController.index)
routes.post('/todo', TodoController.store)
routes.post('/todo/delete', TodoController.delete)

export default routes