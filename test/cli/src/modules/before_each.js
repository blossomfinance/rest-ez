function beforeEachSyncSuccess(arg1, arg2, arg3) {
    var keys = Object.keys(this);
    if (keys.length !== 4)
        throw new Error("before each context doesn't have expected keys");

    this.test.query_params = {param1: 'value2'};

    if (arg1 !== 'foo') {
        throw new Error('Unexpected argument 1');
    }
    if (arg2 !== 'bar') {
        throw new Error('Unexpected argument 2');
    }
    if (!Array.isArray(arg3) || 3 !== arg3.length) {
        throw new Error('Unexpected argument 3');
    }
}

async function beforeEachAsyncSuccess() {
    var keys = Object.keys(this);
    if (keys.length !== 4)
        throw new Error("before each context doesn't have expected keys");

    this.test.query_params = {param1: 'value2'};
}

function beforeEachSyncError() {
    var keys = Object.keys(this);
    if (keys.length !== 4)
        throw new Error("before each context doesn't have expected keys");

    this.test.query_params = {param1: 'value2'};
    throw new Error('error thrown in before each hook');
}

async function beforeEachAsyncError() {
    var keys = Object.keys(this);
    if (keys.length !== 4)
        throw new Error("before each context doesn't have expected keys");

    this.test.query_params = {param1: 'value2'};
    throw new Error('error thrown in before each hook');
}

module.exports = {
    beforeEachSyncSuccess: beforeEachSyncSuccess,
    beforeEachAsyncSuccess: beforeEachAsyncSuccess,
    beforeEachSyncError: beforeEachSyncError,
    beforeEachAsyncError: beforeEachAsyncError
};
