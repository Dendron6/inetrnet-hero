const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Broken images', async()=>{
    it('Fix the images ', async()=>{
        await LoginPage.open('broken_images');

    })
})