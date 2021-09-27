const iFramePage = require('../pageobjects/iframe.page');



describe('Dynamic Controls Test', async () => {
    it('I frame entering test', async () => {
        await iFramePage.open('iframe')
        await iFramePage.iFrame.waitForDisplayed()
        await browser.switchToFrame(await iFramePage.iFrame)
        await iFramePage.sendTextBody('WebdriverIO test')
        await expect(await iFramePage.iFrameBody).toHaveText('WebdriverIO test')
        await browser.pause(4000)
    })
})