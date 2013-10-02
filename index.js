var BaseColorReporter = require('../karma/lib/reporters/BaseColor');

var MinimalistReporter = function(baseReporterDecorator, colors) {

    baseReporterDecorator(this);

    if (colors) {
        BaseColorReporter.call(this);
    }

    this.onBrowserComplete = function(browser) {
        this.write(this.renderBrowser(browser) + '\n');
    };

    this.onRunComplete = function(browsers, results) {
        if (browsers.length > 1 && !results.disconnected && !results.error) {
            if (!results.failed) {
                this.write(this.TOTAL_SUCCESS, results.success);
            } else {
                this.write(this.TOTAL_FAILED, results.failed, results.success);
            }
        }
    };

};

MinimalistReporter.$inject = ['baseReporterDecorator', 'config.colors'];

// PUBLISH DI MODULE
module.exports = {
    'reporter:minimalist': ['type', MinimalistReporter]
};