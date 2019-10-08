import {TodoPage} from "../pages/todo-page";

describe.skip('visual validation', () => {

    const todoPage = new TodoPage()

    before(() => todoPage.navigate())
    beforeEach(() => cy.eyesOpen({appName: 'TodoMVC', batchName: "TodoMVC Hey!"}))
    afterEach(() => cy.eyesClose())

    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')

        todoPage.addTodo('Clear room')
        todoPage.addTodo('Learn JavaScript')
        cy.eyesCheckWindow('two todos')

        todoPage.toggleTodo(0)
        cy.eyesCheckWindow('mark as completed')
    })
})
