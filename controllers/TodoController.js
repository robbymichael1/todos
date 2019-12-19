import todos from '../db'

const TodoController = {

  index (req, res) {
    return res.render('add')
  },

  store (req, res) {
    const { todo } = req.body

    const todoExists = todos.find(t => t === todo)

    if (todoExists) {
      return res.render('list', { todos, repeated: todo })
    } else {
      todos.push(todo)

      return res.render('list', { todos })
    }
  },

  delete (req, res) {
    const { todo } = req.body
    todos = todos.filter((t) => t !== todo)

    return res.json({ todo: true })
  }

}

export default TodoController
