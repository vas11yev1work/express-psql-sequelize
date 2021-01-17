const { TodoItem } = require('../models')

class TodoItemsController {
  async createTodoItem(req, res) {
    try {
      const item = await TodoItem.create({
        content: req.body.content,
        todoId: req.params.id
      })
      return res.status(201).json(item)
    } catch (err) {
      return res.status(400).json({
        message: err.message
      })
    }
  }
  async getTodoItems(req, res) {
    try {
      const items = await TodoItem.findAll({
        where: {
          todoId: req.params.id
        }
      })
      return res.json(items)
    } catch (err) {
      return res.status(400).json({
        message: err.message
      })
    }
  }
}

module.exports = new TodoItemsController()
