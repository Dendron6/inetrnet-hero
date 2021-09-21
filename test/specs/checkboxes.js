const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Check Boxes', async()=>{
    it('We need to find check boxes on the page and check the unchecked', async()=>{
        await LoginPage.open('checkboxes');

    })
})