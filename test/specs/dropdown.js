const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Dropdown menu', async()=>{
    it('Dropdown menu select elements from the list', async()=>{
        await LoginPage.open('dropdown');

    })
})