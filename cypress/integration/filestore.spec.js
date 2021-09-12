import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('File Store', function () {
        /**
        * Begin File Store
        */
         it('Navigation to Data Store', function () {
            cy.visit('http://localhost:8080')
            cy.get('#main-content div').eq(5).click()
            cy.get('#main-content div').should('have.length', 3)
            cy.get('#main-content div').eq(0).should('have.text', 'Basic usage')
            cy.get('#main-content div').eq(1).should('have.text', 'Content distribution')
            cy.get('#main-content div').eq(2).should('have.text', 'Close')
        })
        it('Navigation to Basic usage', function () {
            cy.get('#main-content div').eq(0).click()
            cy.get('#main-content div').should('have.length', 6)
            cy.get('#main-content div').eq(0).should('have.text', 'File search')
            cy.get('#main-content div').eq(1).should('have.text', 'Update file ACL')
            cy.get('#main-content div').eq(2).should('have.text', 'Delete file')
            cy.get('#main-content div').eq(3).should('have.text', 'Get contents of file')
            cy.get('#main-content div').eq(4).should('have.text', 'Get binary data and display image')
            cy.get('#main-content div').eq(5).should('have.text', 'Close')
        })
        it('File search', function () {
            cy.get('#main-content div').eq(0).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Update file ACL', function () {
            cy.get('#main-content div').eq(1).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        // it('Get contents of file', function () {
        //     cy.get('#main-content div').eq(3).click()
        //     cy.wait(2000)
        //     cy.on('window:alert', (str) => {
        //         expect(str).to.match(/^Response data: /)
        //     })
        //     cy.on('window:confirm', () => true);
        // })
        it('Delete file', function () {
            cy.get('#main-content div').eq(2).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^削除後処理/)
            })
            cy.on('window:confirm', () => true);
        })
        it('Get binary data and display image', function () {
            cy.get('#main-content div').eq(4).click()
            cy.wait(2000)
            cy.get('#img-view').find('img').should('have.attr', 'src')
        })
        
        /**
        * Begin Content distribution
        */
        it('Navigation to Content distribution', function () {
            cy.visit('http://localhost:8080')
            cy.get('#main-content div').eq(5).click()
            cy.get('#main-content div').eq(1).click()
            cy.get('#main-content div').should('have.length', 2)
            cy.get('#main-content div').eq(0).should('have.text', 'View public image')
            cy.get('#main-content div').eq(1).should('have.text', 'Close')
        })
        it('View public image', function () {
            cy.get('#main-content div').eq(0).click()
            cy.wait(2000)
            cy.get('#img-view').find('img').should('have.attr', 'src')
        })
    })
})