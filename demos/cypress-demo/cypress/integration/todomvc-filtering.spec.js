import {TodoPage} from "../pages/todo-page";

describe('filtering', () => {

    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()

        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn Javascript')
        todoPage.addTodo('Use Cypress')

        todoPage.toggleTodo(1)
    })

    it('should filter "Active" todos', function () {
        todoPage.showOnlyActiveTodos()
        todoPage.validateNumberOfTodosShown(2)
    })

    it('should filter "Completed" todos', function () {
        todoPage.showOnlyCompletedTodos()
        todoPage.validateNumberOfTodosShown(1)
    })

    it('should filter "All" todos', function () {
        todoPage.showAllTodos()
        todoPage.validateNumberOfTodosShown(3)
    })

})