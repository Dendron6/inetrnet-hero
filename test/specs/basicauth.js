const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Basic authentication', async()=>{
    it('Login as admin', async()=>{
        await LoginPage.open('basic_auth');


    })
})