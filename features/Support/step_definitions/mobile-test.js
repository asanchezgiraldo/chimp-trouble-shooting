module.exports = function() {

    this.Given(/^I am currently viewing "([^"]*)"$/, function (pagename, callback) {
        browser.timeouts('page load', 120000);
        browser.url(pagename);
        callback();
    });

    this.Then(/^I can see the sticky ad when the top banner disappears from view$/, function () {
        //move to the image to simulate scroll (works on BrowserStack as well)
        browser.moveToObject('');
        expect(browser.waitForVisible(wn_article.stickyAdSection,2000)).toBe(true);
    });
};
