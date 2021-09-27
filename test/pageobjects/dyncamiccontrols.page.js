const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
 class DynamicControlsPage extends Page {


//dynamic controls page

    get idCheckBox(){
        return $('#checkbox')
    }
    get idCheckButton(){
        return $('#checkbox-example>button')
    }

    get idMessage(){
        return $('#checkbox-example>p#message')
    }

    get enabledButton() {
        return $('#input-example>button')
    }

    get enabledField() {
        return $('#input-example>input')
    }

    get enabledMessage() {
        return $('#input-example>p#message')
    }

    async clickEnabledButton() {
        await this.enabledButton.waitForDisplayed()
        await this.enabledButton.click()
    }

    open(path) {
        return super.open(path);
    }
}

module.exports = new DynamicControlsPage();