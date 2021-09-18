const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    //addremove
    get btnExample () { return $(".example button") };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    //click simulator

    async clickFunciton (amount=1) {
        while (amount>0) {
            console.log(this.btnExample.click());
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
