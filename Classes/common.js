var fs = require('fs');

function compareResults(actual, testName, writeResponseToFile, url, startTime) {
    var endTime = new Date()
    var szFilePath = "./ExpectedResults/" + testName + ".json";
    if (writeResponseToFile) {
        var szData = JSON.stringify(actual, null, 4);
        fs.writeFileSync(szFilePath, szData);
    }

    var seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    var expectedResults = require("." + szFilePath);

    if (JSON.stringify(actual) === JSON.stringify(expectedResults)) {
        console.log(`[${seconds} sec] ${testName} test passed.  [${url}]`);
    } else {
        console.log(`[${seconds} sec] ${testName} test results did not match what was expected.  [${url}]`);
    };
}

module.exports.compareResults = compareResults;