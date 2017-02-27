
'use strict';
let I, Helper = codecept_helper;
class MyHelper extends Helper {
    // before/after hooks
    _before() {
        // remove if not used
    }
    _after() {
        // remove if not used
    }
    // add custom methods here
    // If you need to access other helpers
    // use: this.helpers['helperName']
    checkIfElementPresentAndDisplayed(elementToCheck) {
        let client = this.helpers['WebDriverIO'].browser;
        let I = actor();
        I.say('Element to check is: ' + elementToCheck);
        return client.isVisible(elementToCheck);
    };
    // try {
    //     I.see(elementToCheck);
    //     return "Yes";
    // }
    // catch(e) {
    //     I.say("Exception " + e);
    //     return "No";
    // }
}
module.exports = MyHelper;