const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Context menu', async()=>{
    it('Triggering of some javascript alert', async()=>{
        await LoginPage.open('context_menu');

    })
})