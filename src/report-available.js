var check = require('check-types');
var print = require('./print-modules-table');

function report(available) {
    check.verifyArray(available, 'expect an array of info objects');
    if (!available.length) {
        console.log('nothing new is available');
        return;
    }

    var modules = [];
    available.forEach(function (info) {
        check.verifyString(info.name, 'missing module name ' + info);
        check.verifyArray(info.versions, 'missing module versions ' + info);
        var sep = ', ';
        if (info.versions.length > 5) {
            sep = '\n  ';
        }
        var versions = info.versions.join(sep);
        modules.push({
            name: info.name,
            version: versions
        });
    });
    console.log('\navailable updates:');
    print(modules);
}

module.exports = report;