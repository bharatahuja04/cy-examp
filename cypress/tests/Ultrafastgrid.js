
'use strict';

require('chromedriver');

const { Builder, By } = require('selenium-webdriver');
const { Eyes, VisualGridRunner, Target, RectangleSize } = require('@applitools/eyes-selenium');
const {Configuration} = require('@applitools/eyes-selenium');
let SuiteConfig = new Configuration();

describe('DemoApp - ClassicRunner', function () {
    let runner, eyes, browser;

    beforeEach(async () => {
        // Initialize the Runner for your test.
        runner = new VisualGridRunner(2);

        // Initialize the eyes SDK (IMPORTANT: make sure your API key is set in the APPLITOOLS_API_KEY env variable).
        eyes = new Eyes(runner);

        // Use Chrome browser
        browser = await new Builder()
            .forBrowser(BROWSER.chrome())
            .forBrowser(BROWSER.firefox())
            .forBrowser(BROWSER.safari())
            .build();

    })


        it('Part One', () => {
            eyes.open(browser, 'Homepage - H&M', 'PLP', new RectangleSize(1440, 766));

            // Navigate the browser to the "ACME" demo app.
            browser.get("https://demo.applitools.com/tlcHackathonMasterV2.html");
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
