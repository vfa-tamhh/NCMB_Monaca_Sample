import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Data Store', function () {
        /**
        * Begin Data Store
        */
         it('Navigation to Data Store', function () {
            cy.visit('http://localhost:8080')
            cy.get('#main-content div').eq(2).click()
            cy.get('#main-content div').should('have.length', 4)
            cy.get('#main-content div').eq(0).should('have.text', 'Basic usage')
            cy.get('#main-content div').eq(1).should('have.text', 'Make a ranking')
            cy.get('#main-content div').eq(2).should('have.text', 'Access authority setting')
            cy.get('#main-content div').eq(3).should('have.text', 'Close')
        })
        it('Navigation to Basic usage', function () {
            cy.get('#main-content div').eq(0).click()
            cy.get('#main-content div').should('have.length', 17)
            cy.get('#main-content div').eq(0).should('have.text', 'Object storage')
            cy.get('#main-content div').eq(1).should('have.text', 'Get Object')
            cy.get('#main-content div').eq(2).should('have.text', 'Update object')
            cy.get('#main-content div').eq(3).should('have.text', 'Delete object')
            cy.get('#main-content div').eq(4).should('have.text', 'Pointer')
            cy.get('#main-content div').eq(5).should('have.text', 'relation')
            cy.get('#main-content div').eq(6).should('have.text', 'Using basic search')
            cy.get('#main-content div').eq(7).should('have.text', 'Basic query operator')
            cy.get('#main-content div').eq(8).should('have.text', 'Query on array')
            cy.get('#main-content div').eq(9).should('have.text', 'Query for pointer')
            cy.get('#main-content div').eq(10).should('have.text', 'Query composition')
            cy.get('#main-content div').eq(11).should('have.text', 'Search using the result of subquery')
            cy.get('#main-content div').eq(12).should('have.text', 'Specify the number of acquisition')
            cy.get('#main-content div').eq(13).should('have.text', 'Specifying the acquisition start position')
            cy.get('#main-content div').eq(14).should('have.text', 'Sort search results')
            cy.get('#main-content div').eq(15).should('have.text', 'Acquisition of the number of search results')
            cy.get('#main-content div').eq(16).should('have.text', 'Close')
        })
        it('Object storage', function () {
            cy.get('#main-content div').eq(0).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Get Object', function () {
            cy.get('#main-content div').eq(1).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Update object', function () {
            cy.get('#main-content div').eq(2).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Delete object', function () {
            cy.get('#main-content div').eq(3).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Pointer', function () {
            cy.get('#main-content div').eq(4).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('relation', function () {
            cy.get('#main-content div').eq(5).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Using basic search', function () {
            cy.get('#main-content div').eq(6).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Basic query operator', function () {
            cy.get('#main-content div').eq(7).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Query on array', function () {
            cy.get('#main-content div').eq(8).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Query for pointer', function () {
            cy.get('#main-content div').eq(9).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Query composition', function () {
            cy.get('#main-content div').eq(10).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Search using the result of subquery', function () {
            cy.get('#main-content div').eq(11).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Specify the number of acquisition', function () {
            cy.get('#main-content div').eq(12).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Specifying the acquisition start position', function () {
            cy.get('#main-content div').eq(13).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Sort search results', function () {
            cy.get('#main-content div').eq(14).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Acquisition of the number of search results', function () {
            cy.get('#main-content div').eq(15).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })

        /**
        * Begin Make a ranking
        */
        it('Navigation to Make a ranking', function () {
            cy.visit('http://localhost:8080')
            cy.get('#main-content div').eq(2).click()
            cy.get('#main-content div').eq(1).click()
            cy.get('#main-content div').should('have.length', 3)
            cy.get('#main-content div').eq(0).should('have.text', 'Save score')
            cy.get('#main-content div').eq(1).should('have.text', 'Get ranking')
            cy.get('#main-content div').eq(2).should('have.text', 'Close')
        })
        it('Save score', function () {
            cy.get('#main-content div').eq(0).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Get ranking', function () {
            cy.get('#main-content div').eq(1).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        /**
        * Begin Access authority setting
        */
         it('Navigation to Access authority setting', function () {
            cy.visit('http://localhost:8080')
            cy.get('#main-content div').eq(2).click()
            cy.get('#main-content div').eq(2).click()
            cy.get('#main-content div').should('have.length', 5)
            cy.get('#main-content div').eq(0).should('have.text', 'Set ACL on the app side')
            cy.get('#main-content div').eq(1).should('have.text', 'Gold user access')
            cy.get('#main-content div').eq(2).should('have.text', 'Other user access'),
            cy.get('#main-content div').eq(3).should('have.text', 'Delete data')
            cy.get('#main-content div').eq(4).should('have.text', 'Close')
        })
        it('Set ACL on the app side', function () {
            cy.get('#main-content div').eq(0).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Done./)
            })
            cy.on('window:confirm', () => true);
        })
        it('Gold user access', function () {
            cy.get('#main-content div').eq(1).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Other user access', function () {
            cy.get('#main-content div').eq(2).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Response data: /)
            })
            cy.on('window:confirm', () => true);
        })
        it('Delete data', function () {
            cy.get('#main-content div').eq(3).click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^Delete ok/)
            })
            cy.on('window:confirm', () => true);
        })
    })
})