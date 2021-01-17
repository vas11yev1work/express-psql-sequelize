const { Todo } = require('../models')

class TodosController {
  async createTodo(req, res) {
    try {
      const todo = await Todo.create({ title: req.body.title })
      return res.status(201).json(todo)
    } catch (err) {
      return res.status(400).json({
        message: err.message
      })
    }
  }

  async getAllTodos(req, res) {
    try {
      const todos = await Todo.findAll()
      return res.json(todos)
    } catch (err) {
      return res.status(400).json({
        message: err.message
      })
    }
  }

  async getTodo(req, res) {
    try {
      const todo = await Todo.findOne({
        where: {
          id: req.params.id
        }
      })
      if (!todo) {
        return res.status(404).json({
          message: 'Todo not found'
        })
      }
      return res.json(todo)
    } catch (err) {
      return res.status(400).json({
        message: err.message
      })
    }
  }
}

module.exports = new TodosController()
