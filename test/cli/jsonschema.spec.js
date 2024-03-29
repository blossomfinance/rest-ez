'use strict';

const runJustAPIJSON = require('./helpers').runJustAPIJSON;
const expect = require('chai').expect;
const fs = require('fs');

describe('Response JSON schema', function () {
    let suiteContext = this;

    before(async function () {
        let result = runJustAPIJSON('jsonschema.suite.yml');
        if (result.error) throw result.error;
        expect(result.exitCode).to.equal(1);
        expect(result.terminationSignal).to.be.a('null');
        const report = fs.readFileSync(result.jsonReport);
        let reportData = JSON.parse(report);

        expect(reportData.passedSuitesCount).to.equal(0);
        expect(reportData.skippedSuitesCount).to.equal(0);
        expect(reportData.failedSuitesCount).to.equal(1);
        expect(reportData.passedTestsCount).to.equal(2);
        expect(reportData.skippedTestsCount).to.equal(0);
        expect(reportData.failedTestsCount).to.equal(5);
        expect(reportData.suites.length).to.equal(1);
        expect(reportData.suites[0].status).to.equal('fail');

        suiteContext.result = reportData.suites[0];
    });

    it('read json schema from file and validate response', function () {
        let result = suiteContext.result;
        let test = result.tests.find(t =>  t.name === this.test.title);
        expect(test.status).to.equal('pass');
        expect(test.error).to.be.a('null');
    });

    it('read inline json schema and validate response', function () {
        let result = suiteContext.result;
        let test = result.tests.find(t =>  t.name === this.test.title);
        expect(test.status).to.equal('pass');
        expect(test.error).to.be.a('null');
    });

    it('read json schema from file and validate response - should fail', function () {
        let result = suiteContext.result;
        let test = result.tests.find(t =>  t.name === this.test.title);
        expect(test.status).to.equal('fail');
        expect(test.error.name).to.equal('ResponseJSONSchemaValidationError');
        expect(test.error.message).to.contain('Response json schema validation failed for property - instance.key, message: is not of a type(s) number');
    });

    it('read json schema from non existant file and validate response - should fail', function () {
        let result = suiteContext.result;
        let test = result.tests.find(t =>  t.name === this.test.title);
        expect(test.status).to.equal('fail');
        expect(test.error.name).to.equal('ResponseJSONSchemaValidationError');
        expect(test.error.message).to.contain('Error opening file');
    });

    it('read inline invalid json schema and validate response - should fail', function () {
        let result = suiteContext.result;
        let test = result.tests.find(t =>  t.name === this.test.title);
        expect(test.status).to.equal('fail');
        expect(test.error.name).to.equal('ResponseJSONSchemaValidationError');
        expect(test.error.message).to.contain('Response json schema validation failed for property - instance.key, message: is not of a type(s) number');
    });

    it('read junk json schema from file and validate response - should fail', function () {
        let result = suiteContext.result;
        let test = result.tests.find(t =>  t.name === this.test.title);
        expect(test.status).to.equal('fail');
        expect(test.error.name).to.equal('ResponseJSONSchemaValidationError');
        expect(test.error.message).to.contain('Error parsing');
    });

    it('invalid input schema  - should fail', function () {
        let result = suiteContext.result;
        let test = result.tests.find(t =>  t.name === this.test.title);
        expect(test.status).to.equal('fail');
        expect(test.error.name).to.equal('ResponseJSONSchemaValidationError');
        expect(test.error.message).to.contain('SyntaxError occurred while parsing the inline input schema');
    });

});
