const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Disappearing elements', async()=>{
    it('We have to do something', async()=>{
        await LoginPage.open('disappearing_elements');

    })
})