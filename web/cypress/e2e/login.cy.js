describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.viewport(1280, 720)
    cy.visit('http://localhost:3000/')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')

    cy.contains('button','Entrar').click()

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

  })
})