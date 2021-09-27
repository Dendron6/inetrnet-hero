const DynamicControlsPage = require('../pageobjects/dyncamiccontrols.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Dynamic Controls Test', async () => {
    it('Checkbox element is checked', async () => {
        await DynamicControlsPage.open('dynamic_controls');
        await expect(DynamicControlsPage.idCheckBox).toHaveText('A checkbox')
        await DynamicControlsPage.idCheckButton.click()
        await DynamicControlsPage.idMessage.waitForEnabled({timeout: 3752})
        await expect(DynamicControlsPage.idMessage).toHaveTextContaining('gone')
    })
    it('checkbox is GONE!!!', async () => {
        await DynamicControlsPage.idCheckButton.click()
        await DynamicControlsPage.idMessage.waitForEnabled({timeout: 3752})
        await expect(DynamicControlsPage.idMessage).toHaveTextContaining('back')

    })
    it('Waiting for the element to be enabled ', async () => {
        await DynamicControlsPage.clickEnabledButton();
        //wait for element to be enabled for maximum 4 seconds
        await DynamicControlsPage.enabledField.waitForEnabled({tiemout: 4000});
        await DynamicControlsPage.enabledField.setValue('I am enabled')
        await expect(DynamicControlsPage.enabledMessage).toHaveTextContaining('enabled')
        //use toHaveValue when comparing string
        await expect(DynamicControlsPage.enabledField).toHaveValue('I am enabled')
        await expect(DynamicControlsPage.enabledField).toBeEnabled()

    })
    it('wait for the field to disabled', async () => {
        await DynamicControlsPage.clickEnabledButton();
        // reverse changes the function from enabled to disabled
        await DynamicControlsPage.enabledField.waitForEnabled({tiemout: 4000, reverse: true});
        await expect(DynamicControlsPage.enabledMessage).toHaveTextContaining('disabled')
        await expect(DynamicControlsPage.enabledField).toBeDisplayed()
    })
})