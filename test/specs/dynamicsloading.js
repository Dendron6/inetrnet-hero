const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Dynamic Loading Page', async()=>{
    it('Work dynamic loading', async()=>{
        await LoginPage.open('dynamic_loading');

    })
})