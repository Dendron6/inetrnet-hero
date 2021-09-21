const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Digital Authentication', async()=>{
    it('Authenticate somehow', async()=>{
        await LoginPage.open('digest_auth');

    })
})