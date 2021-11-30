/* eslint-disable no-undef */
describe('Happy path', () => {
  it('loads successfully home page', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="header"]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-testid="logo"]').should('be.visible')
        cy.get('[data-testid="search-box"]').should('be.visible')
      })

    cy.get('[data-testid="home-page"]').should('be.visible')
    cy.get('[data-testid="product-list"]').within(() => {
      cy.get('[data-testid="product-card"]').should('be.visible')
    })
  })

  it('search for a product in home page', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="search-box"]').type('pelota')
    cy.get('[data-testid="search-box__button"]').click()

    cy.get('[data-testid="product-list"]').within(() => {
      cy.get('[data-testid="product-card"]').should('be.visible')
      cy.get('[data-testid="product-card"]').should('have.length', 4)
    })
    cy.get('[data-testid="search-box"]').should('contain.text', '')
  })

  it('loads successfully ProductPage', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="product-card"]').should('be.visible')
    cy.get('[id="MLA1114266346"]').click()

    cy.get('[data-testid="product-page"]')
      .should('be.visible')
      .within(() => {
        cy.get('.product-page__product').should('be.visible')
        cy.get('.product-page__product--buy').should('be.visible')
        cy.get('.product-page__product--price').should('be.visible')
        cy.get('.btn').should('be.visible')
        cy.get('.product-page__description').should('be.visible')
      })
  })

  it('should search and go to home page with results', () => {
    cy.visit('http://localhost:3000/item/MLA1114266346')

    cy.get('[data-testid="search-box"]').type('pelota')
    cy.get('[data-testid="search-box__button"]').click()

    cy.get('[data-testid="home-page"]').should('be.visible')
  })
})
