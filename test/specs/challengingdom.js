const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Challenging DOM', async()=>{
    it('Here we need to find unique locators', async()=>{
        await LoginPage.open('challenging_dom');

    })
})