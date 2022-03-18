/// <reference types="cypress"/>


describe('Esperas...', () => {
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel',() => {
        cy.get('#novoCampo'). should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo'). should('not.exist')
        cy.get('#novoCampo'). type('funciona')
        cy.get('#novoCampo'). should('exist')

    })
    it.only('Deve fazer retrys',() => {
        cy.get('#novoCampo'). should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo'). should('not.exist')
        cy.get('#novoCampo')
        . should('exist')
        .type('funciona')

    })
    it('Deve fazer retrys',() => {
        cy.get('#novoCampo'). should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo'). should('not.exist')
        cy.get('#novoCampo')
        . should('exist')
        .type('funciona')

    })
    
    it('Uso do find',() => { 
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })
        it('Uso do timeout',() => {
            //cy.get('#buttonDelay').click()
           // cy.get('#novoCampo', {timeout:30000}).should('exist')

            
           // cy.get('#buttonListDOM').click()
           // cy.wait(5000)
            //cy.get('#lista li span')
            //.should('contain', 'Item 2')

            cy.get('#buttonListDOM').click()
            cy.get('#lista li span', {timeout:30000}).should('have.length', 1)
            cy.get('#lista li span', {timeout:30000}).should('have.length', 2)
    })
        it.only('Click retry',() => {
            cy.get('#buttonCount')
                .click()
                .should('have.value', '1')
        
    })
    


})

    
