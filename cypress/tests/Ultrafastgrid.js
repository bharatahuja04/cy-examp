
'use strict';

require('chromedriver');

const { Builder, By } = require('selenium-webdriver');
const { Eyes, VisualGridRunner, Target, RectangleSize } = require('@applitools/eyes-selenium');
const {Configuration} = require('@applitools/eyes-selenium');
let SuiteConfig = new Configuration();

describe('Hackathon - VisualGridRunner', function () {
    let runner, eyes, browser;

    beforeEach(async () => {
        runner = new VisualGridRunner(5);

        eyes = new Eyes(runner);

        browser = await new Builder()
            .forBrowser(BROWSER.chrome())
            .forBrowser(BROWSER.firefox())
            .forBrowser(BROWSER.safari())
            .build();
        browser.get("https://demo.applitools.com/tlcHackathonMasterV2.html");

    })


        it('Part One', () => {
            cy.get('#colors__Black')
            cy.eyesOpen({
                appName: 'AppliFashion',
                testName: 'Test ONE',
                stepName: 'Home Page'
            })
            cy.eyesCheckWindow('First View')
            cy.eyesClose()

        })
        it('Part Two', () => {
            cy.get('#colors__Black').check()
            cy.get('#filterBtn').click()
            cy.eyesOpen({
                appName: 'AppliFashion',
                testName: 'Test TWO',
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
        it('Part Three', () => {
            cy.get('#H3____218').click()
            cy.eyesOpen({
                appName: 'AppliFashion',
                testName: 'Test THREE',
                stepName: 'product details'
            })
            cy.eyesCheckWindow('Product detail Page')
            cy.eyesClose()


        })

    })
