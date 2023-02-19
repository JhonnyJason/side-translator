export const testName = 'open_menu';

export async function run (browserUtils, resultUtils) {
    
    const { browser, By, Key } = browserUtils
    const { chai, transitionTime, takeScreenshot } = resultUtils

    await browser.get("https://secrets-cockpit.extensivlyon.coffee")
    await transitionTime()
    await takeScreenshot(0)

    //load assertions?

    await driver.findElement(By.id("header-right")).click()
    await transitionTime()
    await takeScreenshot(1)
    //step1 assertions?
    await driver.findElement(By.css(".active > .slideinframe-back-button")).click()
    await transitionTime()
    await takeScreenshot(2)
    //step2 assertions?

};