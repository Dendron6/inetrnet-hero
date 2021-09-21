const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Add and remove elements', async () => {
    //variables from HTML

    it('Adding element to the page', async () => {
        await LoginPage.open('add_remove_elements');
        const name = await $('.example button')

        await name.waitForDisplayed();
        await LoginPage.clickFunciton(10, LoginPage.btnExample)
        await expect(await LoginPage.listDeleteBtns).toBeElementsArrayOfSize(10)

    });

    it('Deleting the button', async () => {

        await LoginPage.deleteClick(10, LoginPage.listDeleteBtns)
        await expect(LoginPage.listDeleteBtns).toBeElementsArrayOfSize(0)
        //await driver.pause(4000)

    });
});