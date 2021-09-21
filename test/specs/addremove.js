const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Add and remove elements', async()=>{
    it('Adding element to the page', async()=>{
        await LoginPage.open('add_remove_elements');

        //variables from HTML
        const name = await $('.example button')
        const delete1 = await $$(".added-manually")
        //const listButtons = $('#elements button')

        await name.waitForDisplayed();
        await LoginPage.clickFunciton(10)
        //await browser.pause(5000)
        //await expect(await delete1.getText()).toEqual('Delete');
        await expect(await delete1).toBeElementsArrayOfSize(10)

    })
})