const todosController = require('../controllers/todos.controller')
const todoItemController = require('../controllers/todoitems.controller')

module.exports = (app) => {
  app.post('/api/todos', todosController.createTodo)
  app.get('/api/todos', todosController.getAllTodos)
  app.get('/api/todos/:id', todosController.getTodo)

  app.post('/api/todos/:id/items', todoItemController.createTodoItem)
  app.get('/api/todos/:id/items', todoItemController.getTodoItems)
}
