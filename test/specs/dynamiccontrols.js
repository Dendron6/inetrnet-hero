const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Dynamic Controls', async()=>{
    it('Asynchronious changes', async()=>{
        await LoginPage.open('dynamic_controls');

    })
})