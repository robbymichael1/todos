import todos from '../db'

const TodoController = {

  index (req, res) {
    return res.render('list', { todos })
  }

}

export default TodoController
