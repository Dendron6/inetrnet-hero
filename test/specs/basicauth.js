const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Basic authentication', async () => {
    it('Login as admin', async () => {
        await browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        await expect(await LoginPage.textCofirmation).toHaveText( "Congratulations! You must have the proper credentials.")
    })
})