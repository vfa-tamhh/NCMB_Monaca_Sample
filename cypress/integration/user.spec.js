import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('user', function () {
        /**
        * Begin member management
        */
         it('Navigation to Member management', function () {
            cy.visit('http://localhost:8080')
            cy.get('#main-content div').eq(1).click()
            cy.get('#main-content div').should('have.length', 5)
            cy.get('#main-content div').eq(0).should('have.text', 'Username Registration')
            cy.get('#main-content div').eq(1).should('have.text', 'Email address Registration')
            cy.get('#main-content div').eq(2).should('have.text', 'Anonymous authentication')
            cy.get('#main-content div').eq(3).should('have.text', 'Grouping of members')
            cy.get('#main-content div').eq(4).should('have.text', 'Close')
        })
        it('Navigation to Username Registration', function () {
            cy.get('#main-content div').eq(0).click()
            cy.get('#main-content div').should('have.length', 7)
            cy.get('#main-content div').eq(0).should('have.text', 'New user registration')
            cy.get('#main-content div').eq(1).should('have.text', 'Login 1')
            cy.get('#main-content div').eq(2).should('have.text', 'Login 2')
            cy.get('#main-content div').eq(3).should('have.text', 'Current user')
            cy.get('#main-content div').eq(4).should('have.text', 'Logout')
            cy.get('#main-content div').eq(5).should('have.text', 'Confirmation of e-mail address')
            cy.get('#main-content div').eq(6).should('have.text', 'Close')
        })
        it('New user registration', function () {
            cy.get('#main-content div').eq(0).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Login 1', function () {
            cy.get('#main-content div').eq(1).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Login 2', function () {
            cy.get('#main-content div').eq(2).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Current user', function () {
            cy.get('#main-content div').eq(3).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^currentUser: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Logout', function () {
            cy.get('#main-content div').eq(4).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Logout successfully/)
            })
            cy.on('window:confirm', () => true);
        })

        /**
        * Begin Email address Registration
        */
        it('Navigation to Email address Registration', function () {
            cy.visit('http://localhost:8080')
            cy.get('#main-content div').eq(1).click()
            cy.get('#main-content div').eq(1).click()
            cy.get('#main-content div').should('have.length', 5)
            cy.get('#main-content div').eq(0).should('have.text', 'Member registration by email address')
            cy.get('#main-content div').eq(1).should('have.text', 'Login with email address')
            cy.get('#main-content div').eq(2).should('have.text', 'Confirmation of e-mail address')
            cy.get('#main-content div').eq(3).should('have.text', 'Password reset')
            cy.get('#main-content div').eq(4).should('have.text', 'Close')
        })
        /**
        * Begin Email address Registration
        */
         it('Navigation to Anonymous authentication', function () {
            cy.visit('http://localhost:8080')
            cy.get('#main-content div').eq(1).click()
            cy.get('#main-content div').eq(2).click()
            cy.get('#main-content div').should('have.length', 2)
            cy.get('#main-content div').eq(0).should('have.text', 'Anonymous authentication')
            cy.get('#main-content div').eq(1).should('have.text', 'Close')
        })
        it('New user registration', function () {
            cy.get('#main-content div').eq(0).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^ログイン後処理: /)
            })
            cy.on('window:confirm', () => true);
        })
        /**
        * Begin Email address Registration
        */
         it('Navigation to Grouping of members', function () {
            cy.visit('http://localhost:8080')
            cy.get('#main-content div').eq(1).click()
            cy.get('#main-content div').eq(3).click()
            cy.get('#main-content div').should('have.length', 5)
            cy.get('#main-content div').eq(0).should('have.text', 'Create Role')
            cy.get('#main-content div').eq(1).should('have.text', 'Add member to role')
            cy.get('#main-content div').eq(2).should('have.text', 'Add Child Role')
            cy.get('#main-content div').eq(3).should('have.text', 'Member child role acquisition')
            cy.get('#main-content div').eq(4).should('have.text', 'Close')
        })
        it('Create Role', function () {
            cy.get('#main-content div').eq(0).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^非同期処理: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Add member to role', function () {
            cy.get('#main-content div').eq(1).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Add Child Role', function () {
            cy.get('#main-content div').eq(2).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Member child role acquisition', function () {
            cy.get('#main-content div').eq(3).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
    })
})