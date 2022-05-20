describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
      cy.get('body').contains('Hello Vue 3 + TypeScript + Vite')
    })
  })