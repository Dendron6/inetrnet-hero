const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Dynamic content', async()=>{
    it('Content keeps updating on each refresh', async()=>{
        await LoginPage.open('dynamic_content');

    })
})