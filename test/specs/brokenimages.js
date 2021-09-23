const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const axios = require("axios");


describe('Broken images', async () => {
    it.only('Fix the image 1', async () => {
        //this function opens browser on the page I want it to be opened (https://the-internet.herokuapp.com/broken_images)
        await LoginPage.open('broken_images');

        //this action will create me a list of all the elements with class=example and under tag <img> there are 3 elements
        const listInfo = $$(".example img")

        const urls = await listInfo.map(async (list) => {
            //console.log('result1', list)
            return list.getAttribute('src');
        })
        console.log('urls', urls.length)


        const path = urls[2]
        let link = 'https://the-internet.herokuapp.com/'+`${path}`
        let actualStatusCode = (await axios.get(link)).status
        await expect(actualStatusCode).toEqual(200)

    })
})
