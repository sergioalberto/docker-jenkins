const assert = require('assert')
const config = require('../config/e2e.js');

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url(config.url)
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})
