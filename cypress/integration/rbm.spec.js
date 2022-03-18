/// <reference types="cypress"/>

describe('Cypress basics', () =>{
    it.only('Should visit a page and assert title', () =>{
        cy.visit('https://homologa-sec.devrbm.top/index.php')
        cy.get('#login').type('rbmweb')
        cy.get('#senha').type('!rbm18bew*')
        cy.get('.btn').click()
            


    })
})
