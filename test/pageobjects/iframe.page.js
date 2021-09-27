const Page = require('./page');
const {Key} = require('selenium-webdriver')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class iFramePage extends Page {
    /**
     * define selectors using getter methods
     */
    get iFrame(){
        return $('#mce_0_ifr')
    }
    get iFrameBody(){
        return $('#tinymce')
    }
    /**
    * @param {String} text
    */


    async sendTextBody(text){
        await this.iFrameBody.waitForDisplayed()
        await this.iFrameBody.click()
        await this.iFrameBody.clearValue()
        await this.iFrameBody.click()
        await this.iFrameBody.keys(text)
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specifc options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

module.exports = new iFramePage();
