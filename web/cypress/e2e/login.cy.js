describe('Login', () => {
  it('Deve logar com sucesso', () => {

    cy.submitLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

  })

  it('Erro ao logar com senha inválida', () => {
    cy.viewport(1280, 720)
    cy.visit('http://localhost:3000/')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana1234')

    cy.contains('button','Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

   it('Não deve logar com e-mail inválido', () => {
    cy.viewport(1280, 720)
    cy.visit('http://localhost:3000/')

    cy.get('#email').type('papitod@webdojo.com')
    cy.get('#password').type('katana1234')

    cy.contains('button','Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })


})