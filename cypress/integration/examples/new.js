'use strict';
const {VisualGridRunner} = require('@applitools/eyes-selenium');

const { Builder, By } = require('selenium-webdriver');
const {Configuration} = require('@applitools/eyes-selenium');
let SuiteConfig = new Configuration();

describe('DemoApp - ClassicRunner', function () {
    let runner, eyes, browser;

    beforeEach(async () => {
        // Initialize the Runner for your test.
        runner = new ClassicRunner();

        // Initialize the eyes SDK (IMPORTANT: make sure your API key is set in the APPLITOOLS_API_KEY env variable).
        eyes = new Eyes(runner);

        // Use Chrome browser
        browser = await new Builder()
            .forBrowser('chrome')
            // .setChromeOptions(new ChromeOptions().headless())
            .build();
    });

    describe('Applitools Hackathons',()=> {

        before(async function () {
            if (useVisualGrid) {
                runner = new VisualGridRunner(concurrentSessions);
            } else {
                runner = new ClassicRunner();
            }
            beforeEach(() => {
                cy.visit("https://demo.applitools.com/tlcHackathonMasterV2.html");

            })


            it('Part One', () => {
                cy.visit("https://demo.applitools.com/tlcHackathonMasterV2.html");
                cy.get('#colors__Black')
                cy.eyesOpen({
                    appName: 'AppliFashions',
                    testName: 'Test part 1',
                    stepName: 'main page'
                })
                cy.eyesCheckWindow('First Viewpage')
                cy.eyesClose()

            })
            it('Part Two', () => {
                cy.get('#colors__Black').check()
                cy.get('#filterBtn').click()
                cy.eyesOpen({
                    appName: 'AppliFashions',
                    testName: 'Test part 2',
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
                    appName: 'AppliFashions',
                    testName: 'Test part 3',
                    stepName: 'product details'
                })
                cy.eyesCheckWindow('Product detail')
                cy.eyesClose()


            })

        })

    }}