

describe('Hackathon Test',()=>{
    beforeEach( ()=>
        {
            cy.visit("https://demo.applitools.com/tlcHackathonDev.html");

        })

it('Part One',()=>{
    cy.eyesOpen({
        appName: 'AppliFashion',
        testName: 'Test 1',
        stepName: 'Main Page'
    })
    cy.eyesCheckWindow('First View')
    cy.eyesClose()

})
it('Part Two',()=>{
    cy.get('#colors__Black').check()
    cy.get('#filterBtn').click()
    cy.eyesOpen({
        appName: 'AppliFashion',
        testName: 'Test 2',
        stepName: 'filter by color'
    })
    cy.eyesCheckWindow({
        target: 'region',
        selector: {
            type: 'css',
            selector: '#product_grid'

        }
    });

    cy.eyesClose()


})
    it('Part Three',()=>{
        cy.get('#H3____218').click()
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 3',
            stepName: 'product details'
        })
        cy.eyesCheckWindow('Product detail Page')
        cy.eyesClose()



    })

})
module.exports = {}