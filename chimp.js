module.exports = {
    offline: false,
    screenshotsOnError: false,
    captureAllStepScreenshots: false,
    saveScreenshotsToReport: false,

    // - - - - SELENIUM  - - - -
    'deviceName': 'iPhone 6S',
    name: 'NTL Repo',
    user: 'xxxxxxxxxx',
    key: '**********',
    port: 80,
    host: 'hub-cloud.browserstack.com',

    webdriverio: {
        desiredCapabilities: {
            "browserstack.debug": false,
            'realMobile': true,
            'browserName': 'iPhone',
            'platform': 'MAC'
        }
    }
};
