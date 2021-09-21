const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Drag and drop', async()=>{
    it('Drag and drop one object into another', async()=>{
        await LoginPage.open('drag_and_drop');

    })
})