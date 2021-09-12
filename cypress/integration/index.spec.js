import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('index', function () {
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
          })
        it('Initial screen', function () {
            cy.get('#main-content div').should('have.length', 8)
            cy.get('#main-content div').eq(0).should('have.text', 'Quick start')
            cy.get('#main-content div').eq(1).should('have.text', 'Member management')
            cy.get('#main-content div').eq(2).should('have.text', 'Data store')
            cy.get('#main-content div').eq(3).should('have.text', 'Push Notification')
            cy.get('#main-content div').eq(4).should('have.text', 'SNS cooperation')
            cy.get('#main-content div').eq(5).should('have.text', 'File store')
            cy.get('#main-content div').eq(6).should('have.text', 'Location information search')
            cy.get('#main-content div').eq(7).should('have.text', 'Script')
        })
        /**
        * Begin quick start
        */
        it('Navigation to Quick start', function () {
            cy.get('#main-content div').eq(0).click()
            cy.get('#main-content div').should('have.length', 2)
            cy.get('#main-content div').eq(0).should('have.text', 'Basic usage')
            cy.get('#main-content div').eq(1).should('have.text', 'Close')
        })
        it('Navigation to Basic usage', function () {
            cy.get('#main-content div').eq(0).click()
            cy.get('#main-content div').eq(0).click()
            cy.get('#main-content div').should('have.length', 2)
            cy.get('#main-content div').eq(0).should('have.text', 'Insert Data store sample')
            cy.get('#main-content div').eq(1).should('have.text', 'Close')
        })
        it('Insert Data store sample', function () {
            cy.get('#main-content div').eq(0).click()
            cy.get('#main-content div').eq(0).click()
            cy.get('#main-content div').eq(0).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
        })
        /**
         * End quick start
         */

        /**
        * Begin member management
        */
        //  it('Navigation to Member management', function () {
        //     cy.get('#main-content div').eq(1).click()
        //     cy.get('#main-content div').should('have.length', 5)
        //     cy.get('#main-content div').eq(0).should('have.text', 'Username Registration')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Email address Registration')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Anonymous authentication')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Grouping of members')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Close')
        // })
        // it('Navigation to Username Registration', function () {
        //     cy.get('#main-content div').eq(1).click()
        //     cy.get('#main-content div').eq(0).click()
        //     cy.get('#main-content div').should('have.length', 7)
        //     cy.get('#main-content div').eq(0).should('have.text', 'New user registration')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Login 1')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Login 2')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Current user')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Logout')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Confirmation of e-mail address')
        //     cy.get('#main-content div').eq(1).should('have.text', 'Close')
        // })
        // it('New user registration', function () {
        //     cy.get('#main-content div').eq(1).click()
        //     cy.get('#main-content div').eq(0).click()
        //     cy.get('#main-content div').eq(0).click()
        //     cy.wait(2000)
        //     cy.on('window:alert', (str) => {
        //         expect(str).to.match(/^Response data: /)
        //     })
        // })
        // it('Login 1', function () {
        //     cy.get('#main-content div').eq(1).click()
        //     cy.get('#main-content div').eq(0).click()
        //     cy.get('#main-content div').eq(1).click()
        //     cy.wait(2000)
        //     cy.on('window:alert', (str) => {
        //         expect(str).to.match(/^Response data: /)
        //     })
        // })
        // it('Login 2', function () {
        //     cy.get('#main-content div').eq(1).click()
        //     cy.get('#main-content div').eq(0).click()
        //     cy.get('#main-content div').eq(2).click()
        //     cy.wait(2000)
        //     cy.on('window:alert', (str) => {
        //         expect(str).to.match(/^Response data: /)
        //     })
        // })
        // it('Current user', function () {
        //     cy.get('#main-content div').eq(1).click()
        //     cy.get('#main-content div').eq(0).click()
        //     cy.get('#main-content div').eq(3).click()
        //     cy.wait(2000)
        //     cy.on('window:alert', (str) => {
        //         expect(str).to.match(/^currentUser: /)
        //     })
        // })
        // it('Logout', function () {
        //     cy.get('#main-content div').eq(1).click()
        //     cy.get('#main-content div').eq(0).click()
        //     cy.get('#main-content div').eq(4).click()
        //     cy.wait(2000)
        //     cy.on('window:alert', (str) => {
        //         expect(str).to.match(/^Logout successfully/)
        //     })
        // })
    })
})