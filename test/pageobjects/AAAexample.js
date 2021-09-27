const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class ExamplePage extends Page {
    /**
     * define selectors using getter methods
     */




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

module.exports = new ExamplePage();
