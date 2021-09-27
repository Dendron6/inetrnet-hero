const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const axios = require("axios");


describe('Broken images', async () => {
    it('Fix the image 1', async () => {
        await LoginPage.open('broken_images');
        const listInfo = LoginPage.listImg
        const urls = await listInfo.map(async (list) => {
            return 'https://the-internet.herokuapp.com/' + (await list.getAttribute('src'));})
        expect(urls[0]).toEqual("https://the-internet.herokuapp.com/asdf.jpg")
        browser.pause(2000)

    })
    it('Fix the image 1', async () => {
        await LoginPage.open('broken_images');
        const listInfo = LoginPage.listImg
        const urls = await listInfo.map(async (list) => {
            return 'https://the-internet.herokuapp.com/' + (await list.getAttribute('src'));})
        expect(urls[1]).toEqual("https://the-internet.herokuapp.com/hjkl.jpg")
        browser.pause(2000)

    })
    it('Fix the image 1', async () => {
        await LoginPage.open('broken_images');
        const listInfo = LoginPage.listImg
        const urls = await listInfo.map(async (list) => {
            return 'https://the-internet.herokuapp.com/' + (await list.getAttribute('src'));})
        expect(urls[2]).toEqual("https://the-internet.herokuapp.com/img/avatar-blank.jpg")
        browser.pause(2000)

    })

})
