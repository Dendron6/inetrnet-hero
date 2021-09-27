const Page = require('./page');
const axios = require("axios");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputUsername() {
        return $('#username')
    }

    get inputPassword() {
        return $('#password')
    }

    get btnSubmit() {
        return $('button[type="submit"]')
    }

    //addremove
    get btnExample() {
        return $(".example button")
    };

    //get deleteBtn () { return $('#elements button') };
    get listDeleteBtns() {
        return $$(".added-manually")
    };

    //basic authenticatioin page
    get textCofirmation() {
        return $('.example p')
    }

    // brokenimages
    get listImg() {
        return $$(".example img")
    };



    //checkboxes


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    //click simulator addremove
    async clickFunciton (amount=10, button) {
        while (amount>0) {
            await console.log(button.click());
            amount--;
        }
    }

    async deleteClick(amount=10, list){
        while (amount>=0) {
            await console.log(list[amount].click());
           amount--;
        }
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

module.exports = new LoginPage();
